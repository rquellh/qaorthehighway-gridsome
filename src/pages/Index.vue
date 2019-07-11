<template>
  <v-app>
    <Layout class="max-width">
      <v-content>
        <Hero/>
        <ImageBreak/>
        <div class="mission">
          <v-container py-5 fluid :class="[{'pa-0 ma-0' : $vuetify.breakpoint.mdAndDown}]">
            <v-layout row wrap align-center :class="[{'pa-0 ma-0' : $vuetify.breakpoint.mdAndDown}]">
              <v-flex
                xs6
                md4
                class="text-xs-center"
                v-for="mission in missions"
                :key="mission.index"
              >
                <v-img :src="mission.img" :aspect-ratio="9/3" contain></v-img>
                <div :class="['py-3', 'font-weight-bold',{'display-2 pt-5' : $vuetify.breakpoint.mdAndUp}, {'headline pt-3' : $vuetify.breakpoint.xsOnly}, {'display-1 pt-4' : $vuetify.breakpoint.smOnly}]" >{{mission.title}}</div>
                <div class="px-5 pb-3 subheading">{{mission.description}}</div>
              </v-flex>
            </v-layout>

            <!-- :class="['text-xs-center', {'display-1 pa-5 font-weight-bold' : $vuetify.breakpoint.mdAndUp}]" -->
          </v-container>
        </div>
        <ImageBreak/>
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
            <h1
              class="my-5 text-xs-center secondary--text underline-secondary"
            >Lunch & Snack Sponsors</h1>
            <v-layout align-center row fill-height wrap>
              <v-flex xs4 pa-5 align-self-center v-for="silver in 2" :key="silver.index">
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
    </Layout>
  </v-app>
</template>

<script>
import Hero from "@/components/Hero";
import Layout from "@/layouts/Default";
import ImageBreak from "@/components/ImageBreak";

export default {
  components: {
    Layout,
    Hero,
    ImageBreak
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
  }
};
</script>

<style scoped>
.max-width {
  max-width: 100%;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
}
.underline-primary {
  border-bottom: 1px solid var(--v-primary-base);
}
.underline-secondary {
  border-bottom: 1px solid var(--v-secondary-base);
}
</style>
