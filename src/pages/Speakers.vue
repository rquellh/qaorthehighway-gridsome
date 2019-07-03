<template>
  <v-app>
    <Layout>
      <v-content class="my-5">
        <h1 class="grey--text">2019 Speakers</h1>
        <v-divider class="pb-5"/>
        <h1 class="text-xs-center primary--text keynote">Keynote Speakers</h1>
        <v-container>
          <v-layout wrap>
            <v-flex
              xs12
              md6
              pa-5
              v-for="(speaker) in $page.keynotes.edges"
              :key="speaker.node.speaker"
            >
              <SpeakerCard
                :speaker="speaker.node.speaker"
                :speakerList="speakerListDropdown"
                :bio="speaker.node.bio"
                :year="speaker.node.year"
                :urlSpeaker="speaker.node.speaker"
              />
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
              v-for="(speaker) in $page.speakersPrimary.edges"
              :key="speaker.node.speaker"
            >
              <SpeakerCard
                :speaker="speaker.node.speaker"
                :speakerList="speakerListDropdown"
                :bio="speaker.node.bio"
                :year="speaker.node.year"
                :urlSpeaker="speaker.node.speaker"
              />
            </v-flex>
            <v-flex
              xs12
              sm6
              lg4
              pa-4
              v-for="(speaker, index) in $page.speakersSecondary.edges"
              :key="index"
            >
              <SpeakerCard
                :speaker="speaker.node.speaker2"
                :speakerList="speakerListDropdown"
                :bio="speaker.node.bio"
                :year="speaker.node.year"
                :urlSpeaker="speaker.node.speaker"
              />
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
import SpeakerCard from "@/components/SpeakerCard";

export default {
  components: {
    Layout,
    SpeakerCard
  },
  created() {
    this.addShow();
  },
  methods: {
    addShow: function() {
      var speakersPrimary = this.$page.speakersPrimary.edges.map(people => ({
        speaker: people.node.speaker,
        show: false
      }));
      var speakersSecondary = this.$page.speakersSecondary.edges.map(
        people => ({
          speaker: people.node.speaker2,
          show: false
        })
      );
      var keynotes = this.$page.keynotes.edges.map(people => ({
        speaker: people.node.speaker,
        show: false
      }));
      this.speakerListDropdown = keynotes.concat(
        speakersPrimary,
        speakersSecondary
      );
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
