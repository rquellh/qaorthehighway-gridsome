<template>
  <v-app>
    <ClientOnly>
      <Layout class="particles">
        <v-content>
          <div class="center text-xs-center">
            <h1>Well this is embarassing</h1>
          </div>
        </v-content>
      </Layout>
    </ClientOnly>
  </v-app>
</template>

<script>

</script>

<style scoped>
.particles {
  background: var(--v-secondary-darken1);
  height: 100%;
  width: 100%;
  max-width: 100%;
}
.center {
  position: relative;
  top: 50%;
  margin: auto;
  margin-top: -30px;
}
</style>

