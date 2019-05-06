<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title>QA or the Highway</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down" v-for="link in links" :key="link.title">
        <v-btn flat :href="link.path">{{link.title}}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/>
    </v-toolbar>
    <v-navigation-drawer class="gradient" right disable-resize-watcher app v-model="drawer">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.title" :href="link.path">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="white--text">{{link.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", title: "Home", path: "/" },
        { icon: "record_voice_over", title: "Speakers", path: "/speakers" },
        { icon: "list_alt", title: "Program", path: "/program" },
        { icon: "location_city", title: "Venue", path: "/venue" },
        { icon: "question_answer", title: "FAQ", path: "/faq" },
        { icon: "group", title: "Committee", path: "/committee" },
        { icon: "contact_mail", title: "Contact", path: "/contact" },
        { icon: "history", title: "Archive", path: "/archive" }
      ]
    };
  }
};
</script>

<style scoped>
.gradient {
  background: var(--v-primary-base);
  background: linear-gradient(
    0deg,
    var(--v-secondary-base) 0%,
    var(--v-primary-base) 100%
  );
}
</style>

