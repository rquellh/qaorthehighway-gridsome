<template>
  <v-app>
    <Layout>
      <v-content class="my-5">
        <h1 class="grey--text">FAQs</h1>
        <v-divider/>
        <h3
          class="my-3"
        >​We are excited to see you at the conference! To help you prepare, here are a few questions and answers.</h3>

        <v-expansion-panel popout>
          <v-expansion-panel-content class="pa-1" v-for="(faq,i) in faqs" :key="i">
            <template v-slot:header>
              <div>{{faq.question}}</div>
            </template>
            <v-card>
              <v-card-text class="grey lighten-4" v-html="faq.answer"></v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import Layout from "@/layouts/Default";
export default {
  components: {
    Layout
  },
  data() {
    return {
      faqs: [
        {
          question: "When and where do I register?​",
          answer:
            'Ticket holders may register for the conference beginning at 7:00 AM at the registration desk which is located on the North side of the first floor by the main stairway. Refer to the <a href="/venue">Venue floorplans</a> for more information. Stop by to get your lanyard, parking voucher, and free conference swag!'
        },
        {
          question: "What if I'm hungry?​",
          answer:
            "<ul><li>Breakfast with hot and cold drinks will be available from 7:00 AM to 7:50 AM inside the East Ballroom on the second floor.</li><li>A buffet lunch will be offered at 11:30 AM inside the East Ballroom.</li><li>Afternoon refreshments will be provided at the 2:55 PM break in the Danny Price Student Lounge on the second floor.</li><li>The Ohio Union also has several food and beverage options located on the first floor.</li></ul>"
        },
        {
          question: "What about vegetarians?",
          answer:
            "If you prefer a vegetarian meal for lunch, please indicate so when you Buy your Ticket. We will have a separate breakfast and lunch buffet station with Vegan options."
        },
        {
          question: "How do I connect to Wi-Fi?",
          answer:
            "Complimentary wireless internet access is available throughout the Ohio Union. To access it:<br><br><ol><li>Connect to “WiFi@OSU”. No password is required.</li><li>After waiting 10-15 seconds to establish a connection, open a web browser. Most devices will automatically be redirected to an authentication page. If this does not occur within 30 seconds of opening your browser, type www.osu.edu into the browser’s address bar.</li><li>Upon reaching the authentication page and reviewing the terms and conditions, check the box under the “Guests” column and click “Log-in”.</li><li>You may be required to repeat Step 3 after several hours of inactivity.</li>"
        },
        {
          question: "What if I hate stairs?",
          answer:
            'There are two sets of elevators available in addition to the stairs. Refer to the <a href="/venue">Venue floorplans</a> for more information.'
        },
        {
          question: "Do you have any free stuff?​",
          answer:
            "Plenty! Visit our passionate sponsors on the second floor outside the East Ballroom.  And, be sure to stay for our second keynote and closing remarks.  There are lots of prizes to win during the raffle starting at 5:15!"
        },
        {
          question: "Where can I get copies of the presentations?",
          answer:
            'Many past slide decks from previous years are available on <a href="https://www.slideshare.net/qaoth">Slideshare</a>. After this years conference, we encourage all speakers to make their slide decks available there, as well.'
        },
        {
          question: "How can I tell you about my experience?",
          answer:
            'We love feedback! Face-to-face works best. Find any Organizer or Volunteer and let them know what you think.<br><br>Alternately, you can leave anonymous, confidential feedback on our "Keep It, Stop It, Add It" Kanban board by the Registration desk, or scan the QR Code on your badge to leave session-specific feedback online.'
        },
        {
          question: "This FAQ didn't answer my question! Now what?",
          answer:
            'Reach out to us via our <a href="/conact">contact form</a> and tell us what we missed!'
        }
      ]
    };
  },
  metaInfo: {
    title: "FAQ"
  }
};
</script>
