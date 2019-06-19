<template>
  <v-footer app absolute dark>
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="dark-background">
        <p class="subheading">&copy; {{ new Date().getFullYear() }} QA or the Highway</p>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<style scoped>
.dark-background {
  background-color: #151d2b;
}
</style>

