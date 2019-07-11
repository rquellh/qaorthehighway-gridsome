<template>
  <v-card>
    <v-img :src="require('@/assets/images/generic-profile.png')" aspect-ratio="1.5"></v-img>
    <v-card-title primary-title>
      <div class="headline font-weight-bold">{{speaker}}</div>
      <v-spacer></v-spacer>
      <div v-if="urlSpeaker">
        <v-btn icon flat :href="`./${year}/${removeSpaces(urlSpeaker)}`" color="accent">
          <v-icon>fa-info-circle</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat icon color="primary" class="px-3">
        <v-icon class="primary--text px-3">fab fa-linkedin</v-icon>
      </v-btn>
      <v-btn flat icon color="primary" class="px-3">
        <v-icon class="primary--text px-3">fab fa-twitter</v-icon>
      </v-btn>
      <v-btn flat icon color="primary" class="px-3">
        <v-icon class="primary--text px-3">fas fa-globe</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="speakerList[indexOf(speaker)].show = !speakerList[indexOf(speaker)].show">
        <v-icon>{{ speakerList[indexOf(speaker)].show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text class="subheading" v-show="speakerList[indexOf(speaker)].show">{{bio}}</v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  props: ["speaker", "speakerList", "bio", "year", "urlSpeaker"],
  methods: {
    indexOf: function(speakerName) {
      var indexPos = this.speakerList
        .map(function(instance) {
          return instance.speaker;
        })
        .indexOf(speakerName);
      return indexPos;
    },
    removeSpaces: function(text) {
      return text.replace(/ /, "");
    }
  }
};
</script>
