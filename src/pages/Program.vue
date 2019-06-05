<template>
  <v-app>
    <ul>
      <li v-for="session in $page.sessions.edges" :key="session.node.speaker">
        {{session.node.speaker}}
      </li>
    </ul>
  </v-app>
</template>

<page-query>
query currentSessions{
  sessions: allSession(filter: {year: {dteq: "2019"}}) {
    edges {
      node {
        speaker
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Program'
  }
}
</script>