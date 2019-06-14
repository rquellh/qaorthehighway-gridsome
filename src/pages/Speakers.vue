<template>
  <v-app>
    <Layout>
      <v-content class="mt-5">
        <h1 class="grey--text">2019 Speakers</h1>
        <v-divider class="pb-5"/>
        <h1 class="text-xs-center primary--text keynote">Keynote Speakers</h1>
        <v-container>
          <v-layout wrap>
            <v-flex
              xs12
              md6
              pa-5
              v-for="(speaker, index) in $page.keynotes.edges"
              :key="speaker.node.speaker"
            >
              <v-card>
                <v-img :src="require('@/assets/images/generic-profile.png')" aspect-ratio="1.5"></v-img>
                <v-card-title primary-title>
                  <h2>{{speaker.node.speaker}}</h2>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    flat
                    :href="`./${speaker.node.year}/${removeSpaces(speaker.node.speaker)}`"
                    color="accent"
                  >
                    <v-icon>fa-info-circle</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    @click="speakerListDropdown[index].show = !speakerListDropdown[index].show"
                  >
                    <v-icon>{{ speakerListDropdown[index].show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                  <v-card-text v-show="speakerListDropdown[index].show">{{speaker.node.bio}}</v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <h1 class="text-xs-center secondary--text sessions">Session Speakers</h1>

        <v-container fluid>
          <v-layout wrap>
            <v-flex
              xs12
              sm6
              lg4
              pa-4
              v-for="(speaker, index) in $page.speakersPrimary.edges"
              :key="speaker.node.speaker"
            >
              <v-card>
                <v-img :src="require('@/assets/images/generic-profile.png')" aspect-ratio="1.5"></v-img>
                <v-card-title primary-title>
                  <h2>{{speaker.node.speaker}}</h2>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    flat
                    :href="`./${speaker.node.year}/${removeSpaces(speaker.node.speaker)}`"
                    color="accent"
                  >
                    <v-icon>fa-info-circle</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    @click="speakerListDropdown[index].show = !speakerListDropdown[index].show"
                  >
                    <v-icon>{{ speakerListDropdown[index].show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                  <v-card-text v-show="speakerListDropdown[index].show">{{speaker.node.bio}}</v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              sm6
              lg4
              pa-4
              v-for="(speaker, index) in $page.speakersSecondary.edges"
              :key="index"
            >
              <v-card>
                <v-img :src="require('@/assets/images/generic-profile.png')" aspect-ratio="1.5"></v-img>
                <v-card-title primary-title>
                  <h2>{{speaker.node.speaker2}}</h2>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    flat
                    :href="`./${speaker.node.year}/${removeSpaces(speaker.node.speaker)}`"
                    color="accent"
                  >
                    <v-icon>fa-info-circle</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    @click="speakerListDropdown[index].show = !speakerListDropdown[index].show"
                  >
                    <v-icon>{{ speakerListDropdown[index].show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                  <v-card-text v-show="speakerListDropdown[index].show">{{speaker.node.bio2}}</v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </Layout>
  </v-app>
</template>


<page-query>
query currentSessions {
  speakersPrimary: allSession(
    filter: { year: { dteq: "2019" }}
    perPage: 50
    sortBy: "speaker"
    order: ASC
  ) {
    edges {
      node {
        speaker
        bio
        year
      }
    }
  },
  speakersSecondary: allSession(
    filter: { year: { dteq: "2019" } speaker2: {regex: "([A-Z])"}}
    perPage: 50
    sortBy: "speaker2"
    order: ASC
  ) {
    edges {
      node {
        speaker
        speaker2
        bio
        bio2
        year
      }
    }
  },
  keynotes: allSession(
    filter: { year: { dteq: "2019" }, time: {in: ["8:00 - 9:00", "4:15 - 5:15"]}}
    perPage: 50
    sortBy: "speaker"
    order: ASC
  ) {
    edges {
      node {
        speaker
        bio
        year
      }
    }
  }
}
</page-query>

<script>
import Layout from "@/layouts/Default";

export default {
  components: {
    Layout
  },
  mounted() {
    this.addShow();
  },
  methods: {
    addShow() {
      this.speakerListDropdown = this.$page.speakersPrimary.edges.map(
        people => ({
          speaker: people.node.speaker,
          show: false
        })
      );
    },
    removeSpaces: function(text) {
      return text.replace(/ /, "");
    }
  },
  data: () => ({
    speakerListDropdown: []
  })
};
</script>

<style>
.keynote {
  border-bottom: 1px solid var(--v-primary-base);
}
.sessions {
  border-bottom: 1px solid var(--v-secondary-base);
}
</style>
