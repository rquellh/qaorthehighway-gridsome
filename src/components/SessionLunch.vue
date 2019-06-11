<template>
  <div>
    <v-container fluid pa-1 ma-0>
      <v-layout ma-0 pa-0 row>
        <v-flex my-3 align-self-center xs1>
          <h2 class="mb-3">{{startTime}}</h2>
          <h2>{{endTime}}</h2>
        </v-flex>
        <v-flex class="flex-spacing">
          <v-card height="100%">
              <p class="center-text">{{title}}</p>
          </v-card>
        </v-flex>
        <v-flex class="flex-spacing" v-for="i in 6" :key="i" shrink xs1>
          <v-card pa-5 height="100%"></v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["startTime", "endTime", "title"]
};
</script>

<style scoped>
.flex-spacing {
  width: 20%;
  max-width: 20%;
  flex-basis: 20%;
}
.center-text {
  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
