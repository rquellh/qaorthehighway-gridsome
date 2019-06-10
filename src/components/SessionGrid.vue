<template>
  <div>
    <v-container>
      <v-layout ma-0 row>
        <v-flex align-self-center>
          <h2 class="mr-4 mb-3">9:15</h2>
          <h2>11:15</h2>
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
    }
}
</script>

<style scoped>
.left {
  left: 7%;
  bottom: 1rem;
  position: absolute;
}
</style>

