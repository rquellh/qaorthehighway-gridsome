<template>
  <v-card>
    <v-img :src="require('@/assets/images/generic-profile.png')" aspect-ratio="1.5"></v-img>
    <v-card-title primary-title>
      <h2>{{speaker.node.speaker}}</h2>
      <v-spacer></v-spacer>
      <v-btn
        icon
        flat
        :href="`./${speaker.node.year}/${removeSpaces(speaker.node.speaker)}`"
        color="accent"
      >
        <v-icon>fa-info-circle</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="speakerListDropdown[indexOf(speaker.node.speaker)].show = !speakerListDropdown[indexOf(speaker.node.speaker)].show"
      >
        <v-icon>{{ speakerListDropdown[indexOf(speaker.node.speaker)].show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text
        v-show="speakerListDropdown[indexOf(speaker.node.speaker)].show"
      >{{speaker.node.bio}}</v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  props: ["speaker", "speakerList", "bio", "year"],
  methods: {
    indexOf: function(speakerName) {
      var indexPos = this.speakerListDropdown
        .map(function(instance) {
          return instance.speaker;
        })
        .indexOf(speakerName);
      return indexPos;
    }
  }
};
</script>
