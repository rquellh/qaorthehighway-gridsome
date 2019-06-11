<template>
  <v-app>
    <Layout>
      <v-container fluid>
        <v-layout wrap>
          <v-flex xs12 sm6 lg4 pa-4 v-for="(speaker, index) in speakerList" :key="index">
            <v-card>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.5"></v-img>
              <v-card-title primary-title>
                <h2>{{speaker.node.speaker}}</h2>
                <v-spacer></v-spacer>
                <v-btn
                  outline
                  small
                  :href="`./${speaker.node.year}/${removeSpaces(speaker.node.speaker)}`"
                  color="primary"
                >Session</v-btn>
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
    </Layout>
    <h1>{{speakerList}}</h1>
  </v-app>
</template>


<page-query>
query currentSessions {
  speakers1: allSession(
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
  speakers2: allSession(
    filter: { year: { dteq: "2019" } speaker2: {regex: "([A-Z])"}}
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
    this.combineSpeakers();
    this.addShow();
  },
  methods: {
    addShow() {
      this.speakerListDropdown = this.speakerList.map(people => ({
        speaker: people.node.speaker,
        show: false
      }));
    },
    combineSpeakers() {
      var speaker1 = this.$page.speakers1.edges
      var speaker2 = this.$page.speakers2.edges
      this.speakerList = speaker2
    },
    removeSpaces: function(text) {
      return text.replace(/ /, "");
    }
  },
  data: () => ({
    speakerListDropdown: [],
    speakerList: [],
  })
};
</script>
