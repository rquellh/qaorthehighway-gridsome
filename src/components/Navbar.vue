<template>
  <nav>
    <v-toolbar dark flat app color="dark-background">
      <v-toolbar-items class="hidden-sm-and-down center" v-for="link in links" :key="link.title">
        <v-btn flat :href="link.path">{{link.title}}</v-btn>
      </v-toolbar-items>
      <v-btn outline dark href="./outline">Tickets</v-btn>
      <div class="hidden-md-and-up">
        
      </div>
      <v-spacer class="hidden-md-and-up"/>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/>
    </v-toolbar>

    <v-navigation-drawer class="dark-background" right disable-resize-watcher app v-model="drawer">
      <v-list dark>
        <v-list-tile v-for="link in links" :key="link.title" :href="link.path">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{link.title}}</v-list-tile-content>
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
        { icon: "fa-home", title: "Home", path: "/" },
        { icon: "fa-chalkboard-teacher", title: "Speakers", path: "/speakers" },
        { icon: "fa-list-alt", title: "Program", path: "/program" },
        { icon: "fa-map-pin", title: "Venue", path: "/venue" },
        { icon: "fa-question-circle", title: "FAQ", path: "/faq" },
        { icon: "fa-users", title: "Committee", path: "/committee" },
        { icon: "fa-at", title: "Contact", path: "/contact" },
        { icon: "fa-history", title: "Archive", path: "/archive" }
      ]
    };
  }
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: block;
}

.dark-background {
  background: rgba(21, 29, 43, 1);
}
</style>

