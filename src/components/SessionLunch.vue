<template>
  <div>
    <v-container fluid pa-1 ma-0>
      <v-layout ma-0 pa-0 row>
        <v-flex align-self-center xs1>
          <h2 class="mb-5">{{startTime}}</h2>
          <h2>{{endTime}}</h2>
        </v-flex>
        <v-flex class="flex-spacing">
          <v-card height="100%">
            <p class="text-xs-center">{{title}}</p>
          </v-card>
        </v-flex>
        <v-flex class="flex-spacing" v-for="i in 6" :key="i" shrink xs1>
          <v-card height="100%">
            <v-card-title primary-title></v-card-title>
          </v-card>
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
.center-vertical {
  vertical-align: auto;
}
</style>
