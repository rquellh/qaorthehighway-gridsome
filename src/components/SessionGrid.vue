<template>
  <div>
    <v-container pa-1>
      <v-layout ma-0 pa-0 row>
        <v-flex align-self-center xs1>
          <div v-html="timeRedesign(sessions.edges[0].node.time)" />
        </v-flex>
        <v-flex v-for="(session, index) in sessions.edges" :key="index" shrink xs2>
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <div class="mb-5">{{session.node.title}}</div>
                <div class="grey--text left">{{session.node.speaker}}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["sessions"],
  methods: {
    timeRedesign: function(unfilteredTime) {
        var timeArray = unfilteredTime.split(" ")
        return `<h2 class="mb-3">${timeArray[0]}</h2><h2>${timeArray[2]}</h2>`
    }
  }
};
</script>

<style scoped>
.left {
  left: 7%;
  bottom: 1rem;
  position: absolute;
}
</style>

