<template>
  <Layout>
    <v-app>
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="session in $page.sessions.edges"
          :key="session.node.speaker"
        >
          <template v-slot:header>
            <div>{{session.node.title}}</div>
          </template>
          <v-card>
            <v-card-text>
              {{session.node.abstract}}
            </v-card-text>
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