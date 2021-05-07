<template>
  <div class="home-container">
    <video ref="video" autoplay="true" muted="true" playsinline="true" loop>
      <source :src="require('@/assets/video/pexels-rodnae-productions-7362811.mp4')">
      Your browser does not support HTML5 video.
    </video>
    <v-container fluid class="home-body white--text">
      <v-row class="fill-height">
        <v-col class="fill-height d-flex flex-column justify-center align-center">
          <h1 class="font-weight-light text-center pb-8">
            <div class="font-weight-medium">Leitor Online</div>
            <div>Código de Barras</div>
            <div>e QR Code</div>
          </h1>
          <v-btn
            class="text-h5 pa-12 font-weight-bold btn-open-scanner"
            x-large
            outlined
            rounded
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

.btn-open-scanner.v-btn {

  // border: 2px solid red;
  background-color: rgba(white, 0.45);
  color: white;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  transition-property: color, border;
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);

  &::before {
    background-color: var(--v-primary-base);
  }

  &:hover::before {
    opacity: 0.5;
  }

  &:hover {
    &.v-btn--outlined {
      border: thin solid var(--v-primary-base);
    }

    // color: white !important;
  }

  // &.v-btn--outlined {
  //   border: thin solid transparent;
  // }
}
</style>
