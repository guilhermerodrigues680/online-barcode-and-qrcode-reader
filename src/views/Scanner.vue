<template>
  <div class="scanner">
    <video ref="video" autoplay="true" muted="true" playsinline="true" width="1px"></video>
    <div class="overlay">
      <div class="scanner-line"></div>
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
  }),

  mounted() {
    console.log(this)

    const constraints = {
      video: {
        facingMode: "environment", /* get front camera 'user', to get rear camera set value as 'environment' */
        // width: { exact: 352 }, height: { exact: 288 },
        // width: { exact: 1280 }, height: { exact: 720 },
      }
    };
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
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

    });
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
