<template>
  <div class="scanner">
    <video ref="video" autoplay="true" muted="true" playsinline="true" width="1px"></video>
    <div class="overlay">
      <div class="scanner-line"></div>
    </div>
    <div class="overlay-settings">
      <div class="mx-auto overlay-settings-wrapper">
        <div class="font-weight-thin">
          {{ numReadCodes }}
        </div>
        <v-checkbox
          dark
          class="mt-0 pt-0 px-4"
          color="primary"
          hide-details
          v-model="hardMode"
          @change="changeHardMode($event)"
        >
          <template v-slot:label>
            <div class="hard-mode-text">
              Modo Hard
            </div>
          </template>
        </v-checkbox>
        <v-select
          class="select-resolution"
          dark
          outlined
          dense
          color="primary"
          :items="resolutionsSelect"
          label="Resolução"
          prepend-inner-icon="mdi-video-box"
          hide-details
          v-model="streamResolution"
          @change="changeStreamResolution($event)"
        ></v-select>
      </div>
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import blobUtils from "@/service/util/blobUtils";
import WorkerL from "worker-loader!../service/workers/codereaderWorker.js";

/**@type {Worker} */
const worker = new WorkerL();

export default {
  name: 'Scanner',

  data: () => ({
    decodeHistory: [], // TODO: usar esse valor
    stream: null,
    numReadCodes: 0,
    hardMode: false,
    streamResolution: 0,
    resolutions: [
      [ 'VCD', { width: { exact: 352 }, height: { exact: 288 } } ],
      [ 'VGA', { width: { exact: 640 }, height: { exact: 480 } } ],
      [ '720p', { width: { exact: 1280 }, height: { exact: 720 } } ],
      [ '1080p', { width: { exact: 1920 }, height: { exact: 1080 } } ],
      [ '4K', { width: { exact: 3840 }, height: { exact: 2160 } } ],
    ],
  }),

  computed: {
    resolutionsSelect: function () {
      return this.resolutions.map((e, idx) => ({ text: e[0] , value: idx }));
    }
  },

  mounted() {
    this.initScanner();
  },

  beforeDestroy() {
    console.log("beforeDestroy", this.stream);
    if (!this.stream) {
      console.debug("No Stream to stop.")
      return;
    }
    this.stream.getTracks().forEach(track => track.stop());
  },

  methods: {
    initScanner() {
      console.debug('resolucao atual:', this.resolutions[this.streamResolution][0]);
      console.debug('modoHard:', this.hardMode);

      const constraints = {
        video: {
          facingMode: "environment", /* get front camera 'user', to get rear camera set value as 'environment' */
          ...this.resolutions[this.streamResolution][1]
        }
      };

      navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        this.stream = stream;

        /** @type {HTMLVideoElement} */
        const previewElem = this.$refs.video;
        previewElem.srcObject = stream;

        // loop de leitura do frame do video
        const loop = async () => {
          console.debug("loop");
          this.canvasDrawCurrentVideoFrame();

          // send data to webassembly
          try {
            const blob = await this.canvasToBlob();
            const bytes = await blobUtils.blobToUint8Array(blob);
            worker.postMessage({ bytes: bytes });

            /**@param {MessageEvent} e */
            // onmessage = (e) => {
            //   // const myGoApp = await codereaderWasm.getMyGoApp();
            //   // const result = await myGoApp.readByteArr(bytes);
            //   const result = e.data;
            //   console.info(result);
            //   // const canvasCopy = this.cloneCanvas();
            //   // const resultPoints = result.resultPoints;
            //   // const resPointX0 = resultPoints[0];
            //   // const resPointX1 = resultPoints[1];

            //   // this.canvasDrawLine(canvasCopy, resPointX0.x, resPointX0.y, resPointX1.x, resPointX1.y);
            //   // canvasCopy.toBlob(blob => {
            //   //   this.decodeHistory.unshift({ objUrl: URL.createObjectURL(blob), text: result.text });
            //   // }, "image/jpeg", 0.2)

            //   // console.log(e)
            //   setTimeout(() => loop(), 2000);
            // }
            return

          } catch(err) {
            if (err.message !== "NotFoundException") {
              // unhandled error
              console.error(err);
            }
          }

          setTimeout(() => loop(), 2000);
        };

        /**@param {MessageEvent} e */
        worker.onmessage = (e) => {
          this.numReadCodes++;
          const { data } = e;

          if (!data.error) {
            console.log(data);
            console.log('ok!', data.result);
            alert(data.result.text);
          } else {
            if (data.error.message === "NotFoundException") {
              console.debug("NotFound")
            } else {
              // unhandled error
              console.log('unhandled error:', data.error);
            }
          }

          setTimeout(() => loop(), 50);
        };

        // Start loop
        loop();

      })
      .catch(err => {
        if (err.name === "OverconstrainedError") {
          console.debug("OverconstrainedError");
          this.streamResolution--;
          setTimeout(() => this.initScanner(), 50);
        } else {
          console.error(err);
        }
      });
    },

    canvasDrawCurrentVideoFrame() {
      /**@type {HTMLVideoElement} */
      const video = this.$refs.video;

      /**@type {HTMLCanvasElement} */
      const canvas = this.$refs.canvas;

      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      canvas.width = videoWidth;
      canvas.height = videoHeight;

      const ctx = canvas.getContext('2d', { alpha: false });
      ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
    },

    /**
     * canvasToBlob
     * @returns {Promise<Blob>}
     */
    canvasToBlob() {
      return new Promise((resolve/*, reject*/) => {
        /**@type {HTMLCanvasElement} */
        const canvas = this.$refs.canvas;

        // canvas to Blob settings
        const type = "image/jpeg";
        const quality = 0.9;
        canvas.toBlob(blob => resolve(blob), type, quality)
      });
    },

    cloneCanvas() {
      /**@type {HTMLCanvasElement} */
      const canvas = this.$refs.canvas;

      const newCanvas = document.createElement('canvas');
      const context = newCanvas.getContext('2d');
      newCanvas.width = canvas.width;
      newCanvas.height = canvas.height;
      //apply the canvas to the new one
      context.drawImage(canvas, 0, 0);
      return newCanvas;
    },

    /**
     * @param {HTMLCanvasElement} canvas
     */
    canvasDrawLine(canvas, x0, y0, x1, y1) {
      console.debug(x0, y0, x1, y1);
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.strokeStyle = "#FF0000";
      ctx.lineWidth = 5;
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    },

    changeHardMode(/*newValueHardMode*/) {
      if (this.hardMode) {
        this.streamResolution = this.resolutions.length-1;
      } else {
        this.streamResolution = 0;
      }
      this.initScanner();
    },

    changeStreamResolution(/*newResolution*/) {
      this.hardMode = false;
      this.initScanner();
    }
  }

}
</script>

<style lang="scss" scoped>
.scanner {
  height: 100%;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

canvas {
  display: none;
}

.overlay-settings {
  position: absolute;
  // height: 100%;
  width: 100%;
  color: white;
  background-color: rgba(black, 0.4);
  padding: 8px;

  .overlay-settings-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .select-resolution {
    max-width: 150px;
  }

  .hard-mode-text {
    width: min-content;
    line-height: 0.90rem;
    text-align: center;
    color: white;
    font-size: 1rem;
  }
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .scanner-line {
    @keyframes lineanimation {
      from {
        background-color: #ff1e00cc;
        margin-bottom: 5px;
      }
      to {
        background-color: #f79a8acc;
        margin-top: 5px;
      }
    }
    animation-name: lineanimation;
    animation-duration: 0.45s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;

    height: 4px;
    width: 90%;
    border-radius: 4px;
  }
}
</style>
