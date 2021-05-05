<template>
  <div class="scanner" ref="container">
    <div class="player-container">
      <video ref="video" autoplay="true" muted="true" playsinline="true" width="1px"></video>
    </div>
    <div class="canvas-container">
      <canvas ref="canvas" class="canvas"></canvas>
      <div class="canvas-overlay">
        <div class="scanner-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import codereaderWasm from "@/service/codereaderWasm";
import blobUtils from "@/service/util/blobUtils";

export default {
  name: 'Scanner',

  data: () => ({
    decodeHistory: [], // TODO: usar esse valor
  }),

  mounted() {
    console.log(this)
    // console.log(this.$refs.container)
    this.$refs.container.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false });

    const constraints = {
      video: {
        facingMode: "environment", /* get front camera 'user', to get rear camera set value as 'environment' */
        // width: { exact: 352 }, height: { exact: 288 },
        width: { exact: 1280 }, height: { exact: 720 },
      }
    };
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      /** @type {HTMLVideoElement} */
      const previewElem = this.$refs.video;
      previewElem.srcObject = stream;

      previewElem.onplay = () => {
        console.debug("play")
        this.syncCanvasVideo();
      };

      // loop de leitura do frame do video
      const loop = async () => {
          console.debug("loop");
          this.canvasDrawCurrentVideoFrame();

          // send data to webassembly
          try {
            const blob = await this.canvasToBlob();
            const bytes = await blobUtils.blobToUint8Array(blob);
            const myGoApp = await codereaderWasm.getMyGoApp();
            const result = await myGoApp.readByteArr(bytes);
            console.info(result);
            const canvasCopy = this.cloneCanvas();
            const resultPoints = result.resultPoints;
            const resPointX0 = resultPoints[0];
            const resPointX1 = resultPoints[1];

            this.canvasDrawLine(canvasCopy, resPointX0.x, resPointX0.y, resPointX1.x, resPointX1.y);
            canvasCopy.toBlob(blob => {
              this.decodeHistory.unshift({ objUrl: URL.createObjectURL(blob), text: result.text });
            }, "image/jpeg", 0.2)
          } catch(err) {
            if (err.message !== "NotFoundException") {
              // unhandled error
              console.error(err);
            }
          }

          setTimeout(() => loop(), 500);
        };

        // Start loop
        loop();

    });
  },

  methods: {
    syncCanvasVideo() {
      /** @type {HTMLVideoElement} */
      const video = this.$refs.video;
      /** @type {HTMLCanvasElement} */
      const canvas = this.$refs.canvas;

      const fps = 30;
      let canvasInterval = null;

      const drawImage = function () {
        const width = video.videoWidth;
        const height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d', { alpha: false }).drawImage(video, 0, 0, width, height);
      }

      canvasInterval = window.setInterval(() => {
        drawImage();
      }, 1000 / fps);

      video.onpause = function() {
        clearInterval(canvasInterval);
      };

      video.onended = function() {
        clearInterval(canvasInterval);
      };

      video.onplay = function() {
        clearInterval(canvasInterval);
        canvasInterval = window.setInterval(() => {
          drawImage();
        }, 1000 / fps);
      };

      clearInterval(canvasInterval);
      canvasInterval = window.setInterval(() => {
        drawImage();
      }, 1000 / fps);
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

  }

}
</script>

<style lang="scss" scoped>
.scanner {
  overflow-y: hidden;
  height: 100%;
}

.player-container {
  position: absolute;
}

.canvas-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.canvas {
  position: absolute;
  height: auto;
  width: 100%;
}

.canvas-overlay {
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
