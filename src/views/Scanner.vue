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
export default {
  name: 'Scanner',

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
      }
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
    }
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
