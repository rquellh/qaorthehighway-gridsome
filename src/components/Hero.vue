<template>
  <v-container fluid class="gradient" ma-0 pa-0>
    <v-layout class="max-width" row pa-0 align-center fill-height>
      <v-flex sm12 md8 ma-4>
        <v-img
          class="center"
          max-width="900"
          min-width="450"
          :src="require('@/assets/images/qaorthehighwaylogo.png')"
        >
          <div class="fill-height image-gradient"/>
        </v-img>
        <h2 class="text-xs-center secondary--text display-2 font-weight-bold pt-5">February 19, 2019</h2>
        <div class="text-xs-center pt-5 outline">
          <v-btn outline dark class="pa-4 headline font-weight-bold" href="/outline">
          <v-icon class="pr-4">fa-ticket-alt</v-icon>
          Get Tickets</v-btn>
        </div>
      </v-flex>
      <v-flex md4 class="hidden-sm-and-down">
        <v-img :aspect-ratio="9/14" :src="require('@/assets/images/hero_image.png')">
          <div class="fill-height image-gradient-dark"/>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.navigation a {
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  background: transparent;
}

.container.gradient {
  background: rgb(112, 113, 113);
  background: linear-gradient(
    56deg,
    rgb(51, 75, 110) 0%,
    rgba(21, 29, 43, 1) 50%
  );
}

.image-gradient {
  background-image: linear-gradient(
    171deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(223, 46, 48, 0) 70%
  );
}

.image-gradient-dark {
  background-image: linear-gradient(
    90deg,
    rgba(21, 29, 43, 1) 0%,
    rgba(112, 113, 113, 0) 30%
  );
}

.layout.max-width {
  max-width: 100%;
}

.center {
  margin: auto;
  width: 50%;
}
</style>