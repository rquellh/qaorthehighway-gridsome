<template>
  <v-app>
    <HomePageLayout>
      <v-content>
        <Hero/>
        <div class="mission">
          <v-container py-5 fluid>
            <v-layout row wrap align-center>
              <v-flex
                xs12
                md4
                class="text-xs-center"
                v-for="mission in missions"
                :key="mission.index"
              >
                <v-img :src="mission.img" :aspect-ratio="10/3" contain></v-img>
                <h1 class="pt-5">{{mission.title}}</h1>
                <p class="px-5 pb-3">{{mission.description}}</p>
              </v-flex>
            </v-layout>

            <!-- :class="['text-xs-center', {'display-1 pa-5 font-weight-bold' : $vuetify.breakpoint.mdAndUp}]" -->
          </v-container>
        </div>
        <div class="image-break">
          <v-container fluid ma-0 pa-0>
            <v-layout ma-0 pa-0>
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
          <v-container fluid>
            <h1 class="my-5 text-xs-center primary--text underline-primary">Platinum Sponsors</h1>
            <v-layout align-center row fill-height wrap>
              <v-flex xs12 md6 pa-5 v-for="platinum in platinums" :key="platinum.index">
                <v-img :src="platinum.img" :aspect-ratio="1.9" contain></v-img>
              </v-flex>
            </v-layout>
            <h1 class="my-5 text-xs-center secondary--text underline-secondary">Gold Sponsors</h1>
            <v-layout align-center row fill-height wrap>
              <v-flex pa-5 xs6 md4 align-self-center v-for="gold in 5" :key="gold.index">
                <v-img
                  :src="require('@/assets/images/generic-profile.png')"
                  :aspect-ratio="1.25"
                  contain
                ></v-img>
              </v-flex>
            </v-layout>
            <h1 class="my-5 text-xs-center primary--text underline-primary">Silver Sponsors</h1>
            <v-layout align-center row fill-height wrap>
              <v-flex sm4 md3 xs6 pa-5 align-self-center v-for="silver in 5" :key="silver.index">
                <v-img
                  :src="require('@/assets/images/generic-profile.png')"
                  :aspect-ratio="1.25"
                  contain
                ></v-img>
              </v-flex>
            </v-layout>
            <h1 class="my-5 text-xs-center secondary--text underline-secondary">Lunch & Snack Sponsors</h1>
            <v-layout align-center row fill-height wrap>
              <v-flex xs6 pa-5 align-self-center v-for="silver in 2" :key="silver.index">
                <v-img
                  :src="require('@/assets/images/generic-profile.png')"
                  :aspect-ratio="1.25"
                  contain
                ></v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-content>
    </HomePageLayout>
  </v-app>
</template>

<script>
import Hero from "@/components/Hero";
import HomePageLayout from "@/layouts/HomePageLayout";

export default {
  components: {
    HomePageLayout,
    Hero
  },
  data() {
    return {
      missions: [
        {
          title: "One Day",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam aperiam, dolorem officia dignissimos quidem natus quo nobis, repellendus qui odio consequatur voluptatum similique excepturi? Labore deserunt ipsa totam nam.",
          img: require("@/assets/images/mission/day-one.png")
        },
        {
          title: "Affordable",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam aperiam, dolorem officia dignissimos quidem natus quo nobis, repellendus qui odio consequatur voluptatum similique excepturi? Labore deserunt ipsa totam nam.",
          img: require("@/assets/images/mission/piggy-bank.png")
        },
        {
          title: "Thought Leadership",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam aperiam, dolorem officia dignissimos quidem natus quo nobis, repellendus qui odio consequatur voluptatum similique excepturi? Labore deserunt ipsa totam nam.",
          img: require("@/assets/images/mission/idea.png")
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
.underline-primary {
  border-bottom: 1px solid var(--v-primary-base);
}
.underline-secondary {
  border-bottom: 1px solid var(--v-secondary-base);
}
</style>
