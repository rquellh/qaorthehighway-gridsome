<template>
  <v-app>
    <Navbar />
    <v-content class="gradient">
      <v-layout>
        <v-container fluid >
          <v-img :src="require('./assets/images/qaorthehighwaylogo.png')"></v-img>
        </v-container>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  metaInfo: {
    title: ""
  }
};
</script>

<style scoped>
.navigation a {
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  background: transparent
}

.transparent {
  background: transparent;
}

.gradient {
  background: rgb(255,255,255);
  background: linear-gradient(
    171deg,
    rgba(5, 85, 163, 0.5) 0%,
    rgba(124, 166, 206, 0.3) 30%,
    rgba(255, 255, 255, 1.0) 50%,
    rgba(235, 31, 39, 0.3) 70%,
    rgba(236, 31, 39, 0.5) 100%
  );
}
</style>
