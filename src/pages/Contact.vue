<template>
  <v-app>
    <Layout>
      <v-content class="my-5">
        <h1 class="grey--text">Contact</h1>
        <v-divider />
        <div
          class="my-3 subheading"
        >​We'd love to hear from you about new ideas, feedback, questions, or anything else that comes to mind. Pick your favorite medium to reach out to us.</div>
        <v-container fluid pa-0 ma-0>
          <v-layout row pa-0 ma-0>
            <v-flex xs6 ma-3>
              <div class="headline secondary--text">
                <v-icon class="pr-3" color="secondary">fas fa-envelope</v-icon>Email
                <v-divider />
              </div>
              <div class="mt-3" v-for="email in emails" :key="email.type">
                <div class="subheading">
                  <v-icon class="pr-3" color="secondary">{{email.icon}}</v-icon>
                  {{email.type}}:
                  <a :href="'mailto:' + email.address">{{email.address}}</a>
                </div>
              </div>
            </v-flex>
            <v-flex xs6 ma-3>
              <div class="headline primary--text">
                <v-icon class="pr-3" color="primary">fas fa-users</v-icon>Social
              </div>
              <v-divider />
              <div class="mt-1" v-for="social in socials" :key="social.type">
                <div class="subheading">
                  
                  <v-btn icon target="_blank" :url="social.url">
                    <v-icon color="primary">{{ social.icon }}</v-icon>
                  </v-btn> 
                  <a :href="social.url">{{social.type}}</a>
                </div>
              </div>
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
  },
  data() {
    return {
      emails: [
        {
          type: "Sponsors",
          icon: "far fa-handshake",
          address: "qaorthehighway@gmail.com"
        },
        {
          type: "General",
          icon: "far fa-question-circle",
          address: "qaorthehighway@gmail.com"
        }
      ],
      socials: [
        {
          type: "Twitter",
          icon: "fab fa-twitter",
          url: "https://twitter.com/QAortheHighway"
        },
        {
          type: "LinkedIn",
          icon: "fab fa-linkedin",
          url: "https://www.linkedin.com/company/central-ohio-software-quality-assurance-and-management/"
        }
      ]
    };
  }
};
</script>

