<template>
  <v-app>
    <Layout>
      <v-content>
        <h1 class="pl-4">{{$page.sessions.edges[0].node.time}}</h1> 
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="session in $page.sessions.edges"
            :key="session.node.speaker"
            class="left-bar-double-red"
          >
            <template v-slot:header>
              <v-container  ma-0 pa-1>
                <v-layout row ma-0 align-center>
                  <v-flex xs6>{{session.node.title}}</v-flex>
                  <v-flex xs3>{{session.node.speaker}}</v-flex>
                  <v-flex xs3 text-xs-right pr-3>
                    <v-chip>{{session.node.room}}</v-chip>
                  </v-flex>
                </v-layout>
              </v-container>
            </template>
            <v-card>
              <v-card-text>{{session.node.abstract}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-content>
    </Layout>
  </v-app>
</template>

<page-query>
query currentSessions {
  sessions: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "12:45 - 1:45" } }
  ) {
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

.left-bar-red{
  border-left: 4px solid red;
}
.left-bar-double-red {
  border-left: 4px double red;
}
</style>


// query currentSessions{
//   sessions: allSession(filter: {year: {dteq: "2019"}}) {
//     edges {
//       node {
//         speaker
//         title
//         abstract
//         time
//         room
//       }
//     }
//   }
// }