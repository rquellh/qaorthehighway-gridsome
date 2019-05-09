<template>
  <v-app>
    <Navbar/>
    <v-content>
      <Hero/>
      <div class="mission">
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
        <v-container>
          <v-layout row v-for="platinum in platinums" :key="platinum.index">
            <v-flex xs6>
              <v-img
                :aspect-ratio="16/6"
                :src="require(platinum.img)"
              ></v-img>
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
          img: "@/assets/images/sponsors/platinum/apifortress.png",
          link: "https://apifortress.com/"
        },
        {
          img: "@/assets/images/sponsors/platinum/everest-logo.png",
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
.mission {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(223, 46, 48, 0.8) 80%
  );
}

.layout.max-width {
  max-width: 100%;
}
</style>
