<template>
  <v-container fluid class="gradient" ma-0 pa-0>
    <v-layout class="max-width" row pa-0 align-center fill-height>
      <v-flex sm12 md8 ma-4>
        <v-img
          class="center"
          max-width="950"
          min-width="280"
          :src="require('@/assets/images/qaorthehighwaylogo.png')"
        >
          <div class="fill-height"/>
        </v-img>
        <div
          :class="['text-xs-center white--text font-weight-bold', {'display-2 pt-5' : $vuetify.breakpoint.mdAndUp}, {'headline pt-3' : $vuetify.breakpoint.xsOnly}, {'display-1 pt-4' : $vuetify.breakpoint.smOnly}]"
        >February 19, 2019</div>
        <div
          :class="['text-xs-center outline', {'pt-2' : $vuetify.breakpoint.xsOnly}, {'pt-5' : $vuetify.breakpoint.smAndUp}]"
        >
          <v-btn
            outline
            dark
            :class="['pa-4 font-weight-bold', {'title' : $vuetify.breakpoint.xsOnly}, {'headline' : $vuetify.breakpoint.smAndUp}]"
            href="/outline"
          >
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
  </v-container>
</template>

<style scoped>

.gradient {
  display: block;
  position: relative;
  background: linear-gradient(330deg, var(--v-primary-darken1), #000000);
  background-size: 200% 200%;

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