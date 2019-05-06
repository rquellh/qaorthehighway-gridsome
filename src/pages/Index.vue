<template>
  <v-app>
    <Navbar/>
    <v-content>
      <v-container fluid primary darken-3 ma-0 pa-0>
        <v-layout class="max-width" pa-0 align-center justify-space-around>
          <v-flex sm12 md8>
            <v-img
              class="gradient"
              width="500"
              :src="require('./assets/images/qaorthehighwaylogo_reverse.png')"
            ></v-img>
          </v-flex>
          <v-flex md4 class="hidden-sm-and-below" >
            <v-img min-height="700" :src="require('./assets/images/hero_image.png')"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  },
  metaInfo: {
    title: ""
  }
};
</script>

<style scoped>
.navigation a {
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  background: transparent;
}

.transparent {
  background: transparent;
}

.gradient {
  background: var(--v-secondary-base);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    var(--v-secondary-base) 35%
  );
}

.layout.max-width {
  max-width: 100%;
}
</style>
