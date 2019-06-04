<template>
  <v-app>
    <Navbar/>
    <v-content>
      <Hero/>
      <div class="mission grey lighten-3">
        <v-container py-5 fluid>
          <v-layout class="max-width" row align-center>
            <v-flex xs12 md4 v-for="mission in missions" :key="mission.index">
              <v-img 
              :src="mission.img"
              :aspect-ratio="20/6"
              contain> 
              </v-img>
              <h1>{{mission.title}}</h1>
              <p>{{mission.description}}</p>
            </v-flex>
          </v-layout>
          
          
          <!-- :class="['text-xs-center', {'display-1 pa-5 font-weight-bold' : $vuetify.breakpoint.mdAndUp}]" -->
        </v-container>
      </div>
      <div class="image-break">
        <v-container fluid ma-0 pa-0>
          <v-layout class="max-width" ma-0 pa-0>
            <v-flex xs12 md6 >
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
            <v-flex
              md6
              ma-3
              pa-3
              align-self-center
              v-for="platinum in platinums"
              :key="platinum.index"
            >
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
      missions: [
        {
          title: "One Day",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam aperiam, dolorem officia dignissimos quidem natus quo nobis, repellendus qui odio consequatur voluptatum similique excepturi? Labore deserunt ipsa totam nam.",
          img: require('@/assets/images/mission/day-one.png')
        },
        {
          title: "Affordable",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam aperiam, dolorem officia dignissimos quidem natus quo nobis, repellendus qui odio consequatur voluptatum similique excepturi? Labore deserunt ipsa totam nam.",
          img: require('@/assets/images/mission/piggy-bank.png')
        },
        {
          title: "Thought Leadership",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam aperiam, dolorem officia dignissimos quidem natus quo nobis, repellendus qui odio consequatur voluptatum similique excepturi? Labore deserunt ipsa totam nam.",
          img: require('@/assets/images/mission/idea.png')
        }
      ],
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
