<template>
  <v-app>
    <Navbar/>
    <v-content>
      <Hero/>
      <div class="mission grey lighten-3">
        <v-container py-5 fluid>
          <v-layout class="max-width">
            <h1
              :class="['text-xs-center', {'display-1 pa-5 font-weight-bold' : $vuetify.breakpoint.mdAndUp}]"
            >QA or the Highway is a one day, affordable, regional, professional, conference featuring real-world experience and thought leadership in the QA and testing industry.</h1>
          </v-layout>
        </v-container>
      </div>
      <div class="image-break">
        <v-container fluid ma-0 pa-0>
          <v-layout class="max-width" ma-0 pa-0>
            <v-flex xs12 md6>
              <v-img
                :aspect-ratio="16/6"
                :src="require('@/assets/images/transition/transition-1.png')"
              ></v-img>
            </v-flex>
            <v-flex md6 class="hidden-sm-and-down">
              <v-img
                :aspect-ratio="16/6"
                :src="require('@/assets/images/transition/transition-2.png')"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="sponsors">
        <v-container fluid ma-0 pa-0>
          <v-layout class="max-width" ma-0 pa-0>
            <v-flex xs6 ma-3 pa-3 align-self-center v-for="platinum in platinums" :key="platinum.index">
              <v-img class="center" :src="platinum.img" max-height="500" max-width="500"></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default {
  components: {
    Navbar,
    Hero
  },
  data() {
    return {
      platinums: [
        {
          img: require("@/assets/images/sponsors/platinum/apifortress.png"),
          link: "https://apifortress.com/"
        },
        {
          img: require("@/assets/images/sponsors/platinum/everest-logo.png"),
          link: "http://www.everesttech.com/"
        }
      ]
    };
  },
  metaInfo: {
    title: ""
  }
};
</script>

<style scoped>
.max-width {
  max-width: 100%;
}
.center {
  margin: auto;
}
</style>
