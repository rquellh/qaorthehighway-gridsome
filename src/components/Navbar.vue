<template>
  <nav>
    <v-toolbar flat app dark>
      <v-toolbar-items class="hidden-sm-and-down center" v-for="link in links" :key="link.title">
        <v-btn flat :href="link.path">{{link.title}}</v-btn>
      </v-toolbar-items>      
      <v-btn outline href="./outline">Tickets</v-btn>
      <v-spacer class="hidden-md-and-up"/>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/>
    </v-toolbar>

    <v-navigation-drawer dark right disable-resize-watcher app v-model="drawer">
      <v-list two-line>
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
.navigation a {
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  background: transparent;
}

.center {
  margin: 0 auto;
  display: block;
}

.theme--dark.v-toolbar {
  background-color: #151d2b;
}
.theme--dark.v-navigation-drawer {
  background-color: #151d2b;
}
</style>

