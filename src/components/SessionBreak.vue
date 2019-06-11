<template>
  <div>
    <v-container pa-1 ma-0 fluid>
      <v-layout ma-0 pa-0 row>
        <v-flex xs12 align-content-center pl-5 ml-5>
          <v-card height="100%" color="secondary lighten-1" dark>
            <v-card-title primary-title class="justify-center">
              <div>{{time}} Minute Break</div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["time"]
}
</script>


<style scoped>
.flex-spacing {
  max-width: 100%;
}
</style>