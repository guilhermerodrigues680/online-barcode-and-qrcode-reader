<template>
  <div class="home-container">
    <video ref="video" autoplay="true" muted="true" playsinline="true" loop>
      <source :src="require('@/assets/video/pexels-rodnae-productions-7362811.mp4')">
      Your browser does not support HTML5 video.
    </video>
    <v-container class="home-body white--text">
      <v-row class="fill-height">
        <v-col class="fill-height d-flex flex-column justify-center align-center">
          <h1 class="font-weight-light text-center pb-8">
            <div class="font-weight-medium">Leitor Online</div>
            <div>Código de Barras</div>
            <div>e QR Code</div>
          </h1>
          <v-btn
            class="text-h5"
            color="white"
            x-large
            outlined
            to="/scanner"
          >
            Abrir Leitor
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  position: relative;
}

video {
  width: 100%;
  height: 100%;
  // height: auto;
  object-fit: cover;
  object-position: 50% 80%;
  position: absolute;
}

.home-body {
  position: relative;
  background-color: #0000009f;
  height: 100%;
}
</style>
