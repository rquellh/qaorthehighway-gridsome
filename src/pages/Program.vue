<template>
  <v-app>
    <Layout>
      <v-content class="mt-5">
        <div class="mb-5">
          <v-btn @click="showList = true" small outline color="primary" class="right">
            <v-icon class="pr-2 caption">fa-list</v-icon>List
          </v-btn>
          <v-btn @click="showList = false" small outline color="primary" class="right">
            <v-icon class="pr-2 caption">fa-th</v-icon>Grid
          </v-btn>
        </div>
        <div v-if="showList">
          <SessionList :sessions="$page.session1"/>
          <SessionList :sessions="$page.session2"/>
          <SessionList :sessions="$page.session3"/>
          <SessionList :sessions="$page.session4"/>
          <SessionList :sessions="$page.session5"/>
          <SessionList :sessions="$page.session6"/>
          <SessionList :sessions="$page.session7"/>
        </div>
        <div v-else>
          <SessionGrid :sessions="$page.session2"/>
          <SessionGrid :sessions="$page.session3"/>
          <SessionGrid :sessions="$page.session4"/>
          <SessionGrid :sessions="$page.session5"/>
          <SessionGrid :sessions="$page.session6"/>
        </div>
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
import SessionList from "@/components/SessionList";
import SessionGrid from "@/components/SessionGrid"

export default {
  components: {
    Layout,
    SessionList,
    SessionGrid
  },
  data: function() {
    return {
      showList: true
    };
  },
  metaInfo: {
    title: "Program"
  }
};
</script>

<style scoped>
</style>
