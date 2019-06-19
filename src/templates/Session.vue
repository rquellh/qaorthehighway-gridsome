<template>
  <v-app>
    <Layout>
      <v-content class="my-5">
        <v-container ma-0 pa-0 fluid>
          <v-layout ma-0 pa-0 row wrap>
            <v-flex xs12 md4 pa-3>
              <v-img
                :src="require('@/assets/images/generic-profile.png')"
                aspect-ratio="1"
                max-width="450"
                center
              ></v-img>
            </v-flex>
            <v-flex xs12 md8 pa-3>
              <div>
                <h2 class="primary--text underline-primary">
                  {{ $page.session.speaker }}
                  <span class="pl-5">
                    <v-btn flat icon color="primary" class="px-3">
                      <v-icon class="primary--text px-3">fab fa-linkedin</v-icon>
                    </v-btn>
                    <v-btn flat icon color="primary" class="px-3">
                      <v-icon class="primary--text px-3">fab fa-twitter</v-icon>
                    </v-btn>
                    <v-btn flat icon color="primary" class="px-3">
                      <v-icon class="primary--text px-3">fas fa-globe</v-icon>
                    </v-btn>
                  </span>
                </h2>
              </div>
              <br>
              <p>{{ $page.session.bio }}</p>
            </v-flex>
          </v-layout>
          <v-layout ma-0 pa-0 row wrap justify-space-between fill-height>
            <v-flex xs12 md8 pa-3>
              <h2 class="underline-secondary secondary--text">{{$page.session.title}}</h2>
              <br>
              <p>{{$page.session.abstract}}</p>
            </v-flex>
            <v-flex xs12 md4 pa-3>
              <h2 class="underline-primary primary--text">Session Information</h2>
              <br>
              <h3 class="font-weight-light">Time: {{$page.session.time}}</h3>
              <br>
              <h3 class="font-weight-light">Room: {{$page.session.room}}</h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </Layout>
  </v-app>
</template>

<page-query>
query Session ($path: String!) {
  session (path: $path) {
    speaker
    bio
    title
    abstract
    time
    room
  }
}
</page-query>

<script>
import Layout from "@/layouts/Default";

export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.session.speaker
    };
  }
};
</script>

<style scoped>
.underline-primary {
  border-bottom: 1px solid var(--v-primary-base);
}
.underline-secondary {
  border-bottom: 1px solid var(--v-secondary-base);
}
</style>

