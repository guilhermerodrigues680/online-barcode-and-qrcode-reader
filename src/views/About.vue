<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="font-weight-light text-center">
          Sobre
        </h1>
        <p>
          O leitor online de código de barras e QR Code é um aplicativo de código aberto,
          que utiliza de tecnologias web para conseguir detectar códigos em imagens e vídeos.
        </p>
        <p>
          Ele faz toda a detecção no próprio navegador! Assim não precisa se comunicar com nenhum
          serviço externo para funcionar.
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col class="text-body-2">
        <h1 class="font-weight-light text-center">
          Informações da versão
        </h1>

        <ul class="py-4">
          <li>
            <span class="font-weight-bold">
              App:
            </span>
            {{name}}
          </li>
          <li>
            <span class="font-weight-bold">
              Versão:
            </span>
            v{{version}}
          </li>
          <li>
            <span class="font-weight-bold">
              Autor:
            </span>
            {{author}}
          </li>
          <li>
            <span class="font-weight-bold">
              Repositório:
            </span>
            <a :href="repository" target="_blank">{{repository}}</a>
          </li>
          <li>
            <span class="font-weight-bold">
              Página do app:
            </span>
            <a :href="homepage" target="_blank">{{homepage}}</a>
          </li>
          <li>
            <span class="font-weight-bold">
              Data do build:
            </span>
            {{buildDate}}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',

  data: () => ({
    name: process.env.VUE_APP_NAME,
    version: process.env.VUE_APP_VERSION,
    // author: process.env.VUE_APP_AUTHOR,
    homepage: process.env.VUE_APP_HOMEPAGE,
    // repository: process.env.VUE_APP_REPOSITORY,
    // buildDate: process.env.VUE_APP_BUILD_DATE,
  }),

  computed: {
    author: function () {
      const authorEnv = process.env.VUE_APP_AUTHOR;
      if (!authorEnv) {
        return '';
      }
      const regex = /(.*) <.*/;
      if (regex.test(authorEnv)) {
        return authorEnv.match(regex)[1]
      } else {
        return ''
      }
    },
    repository: function () {
      const repoEnv = process.env.VUE_APP_REPOSITORY;
      if (!repoEnv) {
        return '';
      }
      return repoEnv.replaceAll("github:", "https://github.com/");
    },
    buildDate: function () {
      const buildDateEnv = process.env.VUE_APP_BUILD_DATE;
      if (!buildDateEnv) {
        return '';
      }
      return new Date(buildDateEnv).toLocaleString();
    }
  }
}
</script>
