<template>
  <Layout>
    <v-app>
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="session in $page.sessions.edges"
          :key="session.node.speaker"
        >
          <template v-slot:header>
            <v-container ma-0 pa-2>
              <v-layout row ma-0>
                <v-flex xs6>{{session.node.title}}</v-flex>
                <v-flex xs3>{{session.node.speaker}}</v-flex>
                <v-flex xs3 text-xs-right pr-3>{{session.node.room}}</v-flex>
              </v-layout>
            </v-container>
          </template>
          <v-card>
            <v-card-text>{{session.node.abstract}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-app>
  </Layout>
</template>

<page-query>
query currentSessions{
  sessions: allSession(filter: {year: {dteq: "2019"}}) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
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
  metaInfo: {
    title: "Program"
  }
};
</script>

<style scoped>
.max-width {
  max-width: 100%;
}
</style>
