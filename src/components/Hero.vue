<template>
  <v-container fluid class="gradient2" ma-0 pa-0>
    <div class="geometric-background">
      <v-layout class="max-width" row pa-0 align-center fill-height>
        <v-flex sm12 md8 ma-4>
          <v-img
            class="center"
            max-width="900"
            min-width="450"
            :src="require('@/assets/images/qaorthehighwaylogo.png')"
          >
            <div class="fill-height"/>
          </v-img>
          <h2 class="text-xs-center white--text display-2 font-weight-bold pt-5">February 19, 2019</h2>
          <div class="text-xs-center pt-5 outline">
            <v-btn outline dark class="pa-4 headline font-weight-bold" href="/outline">
              <v-icon class="pr-4">fa-ticket-alt</v-icon>Get Tickets
            </v-btn>
          </div>
        </v-flex>
        <v-flex md4 class="hidden-sm-and-down">
          <v-img :aspect-ratio="9/14" :src="require('@/assets/images/hero_image3.png')">
            <div class="fill-height"/>
          </v-img>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<style scoped>
.geometric-background {
  background: url("../assets/images/trianglify.png");
  background-size: cover;
}

.gradient2 {
  display: block;
  position: relative;
  background: linear-gradient(330deg, #004e92, #000428);
  background-size: 250% 250%;

  -webkit-animation: gradient-animator 10s ease infinite;
  -moz-animation: gradient-animator 10s ease infinite;
  -o-animation: gradient-animator 10s ease infinite;
  animation: gradient-animator 10s ease infinite;
}

@-webkit-keyframes gradient-animator {
  0% {
    background-position: 11% 0%;
  }
  50% {
    background-position: 90% 100%;
  }
  100% {
    background-position: 11% 0%;
  }
}
@-moz-keyframes gradient-animator {
  0% {
    background-position: 11% 0%;
  }
  50% {
    background-position: 90% 100%;
  }
  100% {
    background-position: 11% 0%;
  }
}
@-o-keyframes gradient-animator {
  0% {
    background-position: 11% 0%;
  }
  50% {
    background-position: 90% 100%;
  }
  100% {
    background-position: 11% 0%;
  }
}
@keyframes gradient-animator {
  0% {
    background-position: 11% 0%;
  }
  50% {
    background-position: 90% 100%;
  }
  100% {
    background-position: 11% 0%;
  }
}

.layout.max-width {
  max-width: 100%;
}

.center {
  margin: auto;
  width: 50%;
}
</style>