<template>
  <v-app>
    <Layout>
      <v-content class="my-5">
        <h1 class="grey--text">2019 Program</h1>
        <v-divider class="pb-2"/>
        <div class="mb-5">
          <v-btn @click="showList = true" :outline="!showList" small color="primary" class="right">
            <v-icon class="pr-2 button-font">fas fa-list</v-icon>List
          </v-btn>
          <v-btn @click="showList = false" :outline="showList" small color="primary" class="right">
            <v-icon class="pr-2 button-font">fas fa-th</v-icon>Grid
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
          <SessionGridHeader :rooms="rooms"/>
          <SessionCustom startTime="7:00" endTime="7:50" title="Breakfast"/>
          <SessionCustom startTime="7:50" endTime="8:00" title="Opening Remarks"/>
          <SessionKeynote :sessions="$page.session1"/>
          <SessionBreak time="15"/>
          <SessionGrid :sessions="$page.session2"/>
          <SessionBreak time="15"/>
          <SessionGrid :sessions="$page.session3"/>
          <SessionCustom startTime="11:30" endTime="12:45" title="Lunch"/>
          <SessionGrid :sessions="$page.session4"/>
          <SessionBreak time="10"/>
          <SessionGrid :sessions="$page.session5"/>
          <SessionBreak time="10"/>
          <SessionGrid :sessions="$page.session6"/>
          <SessionBreak time="10"/>
          <SessionKeynote :sessions="$page.session7"/>
          <SessionCustom startTime="5:15" endTime="5:30" title="Raffle and Closing Remarks"/>
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
import SessionGrid from "@/components/SessionGrid";
import SessionBreak from "@/components/SessionBreak";
import SessionCustom from "@/components/SessionCustom";
import SessionKeynote from "@/components/SessionKeynote";
import SessionGridHeader from "@/components/SessionGridHeader";

export default {
  components: {
    Layout,
    SessionList,
    SessionGrid,
    SessionBreak,
    SessionCustom,
    SessionKeynote,
    SessionGridHeader
  },
  data: function() {
    return {
      showList: true,
      rooms: [
        { room: "East Ballroom", floor: "Second Floor" },
        { room: "Cartoon Room", floor: "Third Floor" },
        { room: "Great Hall 1 & 2", floor: "First Floor" },
        { room: "Great Hall 3", floor: "First Floor" },
        { room: "Interfaith Room", floor: "Third Floor" },
        { room: "Strudent-Alumni Room", floor: "Second Floor" },
        { room: "West Ballroom", floor: "Second Floor" }
      ]
    };
  },
  metaInfo: {
    title: "Program"
  }
};
</script>

<style scoped>
.button-font {
  font-size: 1rem
}
</style>
