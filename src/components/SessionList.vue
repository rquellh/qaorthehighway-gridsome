<template>
  <div class="pb-3">
    <h1 class="pl-4">{{sessions.edges[0].node.time}}</h1>
    <v-expansion-panel popout>
      <v-expansion-panel-content
        v-for="session in sessions.edges"
        :key="session.node.speaker"
        :class="timeStripped"
      >
        <template v-slot:header>
          <v-container ma-0 pa-1>
            <v-layout row ma-0 align-center>
              <v-flex xs8>{{session.node.title}}</v-flex>
              <v-flex xs2 class="grey--text">{{session.node.speaker}}</v-flex>
              <v-flex xs2 text-xs-right pr-3>
                <v-chip>{{session.node.room}}</v-chip>
              </v-flex>
            </v-layout>
          </v-container>
        </template>
        <v-card>
          <v-card-text>{{session.node.abstract}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  props: ["sessions"],
  data: function() {
    return {
      timeStripped: `t${this.sessions.edges[0].node.time.replace(/:|-| /g, "")}`
    };
  }
};
</script>

<style scoped>
.t800900 {
  position: relative;
}
.t800900::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #9C27B0;
}
.t9151015 {
  position: relative;
}

.t9151015::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #4CAF50;
}
.t10301130 {
  position: relative;
}
.t10301130::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #03A9F4;
}
.t1245145 {
  position: relative;
}
.t1245145::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #3F51B5;
}
.t155255 {
  position: relative;
}
.t155255::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #F44336;
}
.t305405 {
  position: relative;
}
.t305405::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #FFC107;
}
.t415515 {
  position: relative;
}
.t415515::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #E91E63;
}
</style>


