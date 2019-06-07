<template>
  <v-app>
    <Layout>
      <v-content class="mt-5">
        <Session :sessions="$page.session1"/>
        <Session :sessions="$page.session2"/>
        <Session :sessions="$page.session3"/>
        <Session :sessions="$page.session4"/>
        <Session :sessions="$page.session5"/>
        <Session :sessions="$page.session6"/>
        <Session :sessions="$page.session7"/>
      </v-content>
    </Layout>
  </v-app>
</template>

<page-query>
query currentSessions {
  session1: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "8:00 - 9:00" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session2: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "9:15 - 10:15" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session3: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "10:30 - 11:30" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session4: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "12:45 - 1:45" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session5: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "1:55 - 2:55" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session6: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "3:05 - 4:05" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  }
  session7: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "4:15 - 5:15" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  }
}
</page-query>

<script>
import Layout from "@/layouts/Default";
import Session from "@/components/SessionList";

export default {
  components: {
    Layout,
    Session
  },
  metaInfo: {
    title: "Program"
  }
};
</script>