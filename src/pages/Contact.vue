<template>
  <v-app>
    <Layout>
      <v-content class="my-5">
        <h1 class="grey--text">Contact</h1>
        <v-divider />
        <h3
          class="my-3"
        >​We'd love to hear from you about new ideas, feedback, questions, or anything else that comes to mind. Pick your favorite medium to reach out to us.</h3>
        <v-container>
            <v-layout row>
                <v-flex xs6>
                    <div>Email</div>
                </v-flex>
                <v-flex xs6>
                    <div>Social</div>
                </v-flex>
            </v-layout>
        </v-container>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact"
  }
};
</script>

