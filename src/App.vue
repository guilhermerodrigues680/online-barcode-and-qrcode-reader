<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      flat
      clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon
          large
          v-text="drawer ? 'mdi-backburger' : 'mdi-menu'"
        ></v-icon>
      </v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>
      <div class="text-body-1 pr-3 d-flex flex-column justify-center align-center">
        <div class="text-h6 text-uppercase">Leitor Online</div>
        <div>Código de barras e QR Code</div>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        icon
        to="/scanner"
      >
        <v-icon x-large>mdi-barcode-scan</v-icon>
      </v-btn>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      :width="$vuetify.breakpoint.mobile ? '85%' : 256"
      color="blue-grey lighten-5"
      clipped
      :style="{ top: $vuetify.application.top + 'px', zIndex: 4 }"
    >
      <!-- class="pt-14" -->
      <v-list
        rounded
        color="white"
        class="navigation-drawer-pb"
      >
        <v-list-item
          v-for="linkPage in linkPages"
          :key="linkPage.title"
          :to="linkPage.to"
          color="blue-grey"
          link
          @click="drawer = false"
        >
          <v-list-item-icon>
            <v-icon>{{ linkPage.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-subtitle-1 font-weight-light">
              {{ linkPage.title }}
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>


      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-1 font-weight-bold grey--text text--darken-2">
              Powered by
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://github.com/guilhermerodrigues680"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>mdi-github</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-subtitle-1 font-weight-light">
              /guilhermerodrigues680
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    linkPages: [
      { title: 'Home', icon: 'mdi-home-outline', to: '/' },
      { title: 'Leitor', icon: 'mdi-barcode', to: '/scanner' },
      { title: 'Sobre', icon: 'mdi-information-variant', to: '/about' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.navigation-drawer-pb {
  padding-bottom: 50%;
}
</style>
