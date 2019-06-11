<template>
  <div>
    <v-container fluid pa-1 ma-0>
      <v-layout ma-0 pa-0 row>
        <v-flex align-self-center xs1>
          <div v-html="timeRedesign(sessions.edges[0].node.time)"/>
        </v-flex>
        <v-flex class="flex-spacing">
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <div class="mb-5">{{sessions.edges[0].node.title}}</div>
                <div class="grey--text left">{{sessions.edges[0].node.speaker}}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex
          class="flex-spacing"
          v-for="i in 6"
          :key="i"
          shrink
          xs1
        >
          <v-card height="100%"></v-card>
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
      var timeArray = unfilteredTime.split(" ");
      return `<h2 class="mb-3">${timeArray[0]}</h2><h2>${timeArray[2]}</h2>`;
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
.flex-spacing {
  width: 20%;
  max-width: 20%;
  flex-basis: 20%;
}
</style>