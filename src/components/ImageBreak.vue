<template>
  <div class="image-break">
    <v-container fluid ma-0 pa-0>
      <v-layout ma-0 pa-0 class="max-width">
        <v-flex xs12 md6>
          <v-img :aspect-ratio="16/6" :src="require('@/assets/images/transition/transition-1.png')"></v-img>
        </v-flex>
        <v-flex md6 class="hidden-sm-and-down">
          <v-img :aspect-ratio="16/6" :src="require('@/assets/images/transition/transition-2.png')"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.max-width {
  max-width: 100%;
}
</style>

