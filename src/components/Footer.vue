<template>
  <v-footer app absolute dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="dark-background">
        <v-container ma-0 pa-0 fluid>
          <v-layout row align-center justify-space-around fill-height class="text-xs-center">
            <v-flex xs4>
              <p>Website by Ineffable Solutions & Ryan Quellhorst</p>
            </v-flex>
            <v-flex xs4>
              <p>&copy; {{ new Date().getFullYear() }} QA or the Highway</p>
            </v-flex>
            <v-flex xs4>
              <div class="text-xs-center">
                <v-btn
                  v-for="(site, index) in social"
                  :key="index"
                  class="mx-3"
                  :href="site.url"
                  dark
                  icon
                >
                  <v-icon>{{ site.icon }}</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        { icon: "fab fa-twitter", url: "https://twitter.com/QAortheHighway" },
        { icon: "fab fa-slideshare", url: "https://www.slideshare.net/qaoth" },
        {
          icon: "fab fa-linkedin",
          url:
            "https://www.linkedin.com/company/central-ohio-software-quality-assurance-and-management/"
        },
        { icon: "fas fa-envelope", url: "mailto:qaorthehighway@gmail.com" }
      ]
    };
  }
};
</script>


<style scoped>
.dark-background {
  background-color: #151d2b;
}
</style>

