<template>
  <v-app>
    <Layout>
      <v-container fluid>
        <v-layout wrap>
          <v-flex xs12 sm6 lg4 pa-4 v-for="(speaker, index) in $page.speakers.edges" :key="index">
            <v-card>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.5"></v-img>
              <v-card-title primary-title>
                <h2>{{speaker.node.speaker}}</h2>
                <v-spacer></v-spacer>
                <v-btn outline small :href="`./${speaker.node.year}/${removeSpaces(speaker.node.speaker)}`" color="primary">Session</v-btn>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon @click="speakerList[index].show = !speakerList[index].show">
                  <v-icon>{{ speakerList[index].show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-slide-y-transition>
                <v-card-text v-show="speakerList[index].show">{{speaker.node.bio}}</v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </Layout>
  </v-app>
</template>


<page-query>
query currentSessions {
  speakers: allSession(
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
      this.speakerList = this.$page.speakers.edges.map(people => ({
        speaker: people.node.speaker,
        show: false
      }));
    },
    removeSpaces: function(text) {
      return text.replace(/ /, "")
    }
  },
  data: () => ({
    speakerList: [],
    show: false
  })
};
</script>
