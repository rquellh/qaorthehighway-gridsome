<template>
  <v-app>
    <ClientOnly>
      <Layout class="gradient">
        <v-content>
          <div class="center text-xs-center white--text">
            <div class="display-4">Well this is embarassing...</div>
            <div class="display-1 pt-5">A testing conference website that has a bug? Or maybe you were trying to break the site.</div>
            <div class="display-1 pt-5">Either way we can make our site better if you let us know about it.</div>
            <v-btn outline dark :class="['mt-3 pa-4', {'title' : $vuetify.breakpoint.xsOnly}, {'headline' : $vuetify.breakpoint.smAndUp}]" href="https://github.com/rquellh/qaorthehighway-gridsome/issues/new?assignees=&labels=&template=bug_report.md&title=" target="_blank">
              <v-icon class="pr-4">fas fa-bug</v-icon>Report issue
            </v-btn>
          </div>
        </v-content>
      </Layout>
    </ClientOnly>
  </v-app>
</template>

<script>
</script>

<style scoped>
.gradient {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: block;
  position: relative;
  background: linear-gradient(330deg, var(--v-primary-base),var(--v-secondary-base));
  background-size: 150% 150%;

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
.center {
  position: relative;
  top: 55%;
  margin: 0 auto;
}
</style>

