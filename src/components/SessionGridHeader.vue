<template>
  <div>
    <v-container fluid pa-1 ma-0>
      <v-layout ma-0 pa-0 row>
        <v-flex align-self-center xs1></v-flex>
        <v-flex class="flex-spacing" v-for="(room, index) in rooms" :key="index" shrink xs1>
          <v-card height="100%" color="primary" dark>
            <v-card-actions class="justify-center">
              <h4>{{room.room}}</h4>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["rooms"]
};
</script>

<style scoped>
.left {
  left: 25%;
  bottom: 1rem;
  position: absolute;
}
.flex-spacing {
  width: 20%;
  max-width: 20%;
  flex-basis: 20%;
}
</style>