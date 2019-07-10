<template>
  <v-app>
    <Layout>
      <v-content>
        <v-container fluid>
          <v-layout row align-center fill-height pa-4>
            <v-flex xs7 pa-3>
              <div class="display-1 font-weight-bold secondary--text">The Ohio Union</div>
              <br />
              <div class="headline">
                <div>
                  <a
                    href="https://www.google.com/maps/place/Ohio+Union/@39.9976772,-83.0085754,15z/data=!4m5!3m4!1s0x0:0x29e24cc55fefd423!8m2!3d39.9976772!4d-83.0085754"
                    target="_blank"
                  >1739 N High St, Columbus, OH 43210</a>
                </div>
                <br>
                <div>The Ohio Union is a 318,000 square foot facility built on a foundation of rich history and Buckeye spirit. Located on The Ohio State University’s campus, the building has 34 unique meeting and event spaces and is near many on-campus and off-campus dining and entertainment options.</div>
                <br>
                <v-btn outline color="primary" class="font-weight-bold" target="_blank" href="https://ohiounion.osu.edu/posts/documents/ohio-union-building-maps.pdf">Floor Plan</v-btn>
              </div>
            </v-flex>
            <v-flex xs5>
              <v-img :src="require('@/assets/images/ohio-union-interior.jpg')" />
            </v-flex>
          </v-layout>
          <v-layout row align-center fill-height pa-4 class="primary-background">
            <v-flex xs5>
              <v-img :src="require('@/assets/images/facilities.webp')" />
            </v-flex>
            <v-flex xs7 pa-3 class="white--text">
              <div class="display-1 font-weight-bold">Food Options</div>
              <br />
              <div class="headline">
                <div>During the conference, breakfast, lunch, and snacks will be provided.</div>
                <br />
                <div>
                  However, if you want other options, there are several dining locations within the Ohio Union.
                  <ul v-for="resturant in resturants" :key="resturant.name">
                    <li>
                      <span>{{resturant.name}}</span>
                      <span class="font-italic grey--text">{{resturant.description}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </v-flex>
          </v-layout>
          <!-- <v-layout row align-center fill-height>
            <v-flex xs5>
              <v-img :src="require('@/assets/images/ohio-union-exterior.jpg')"/>
            </v-flex>
            <v-flex xs7 ml-3>
              <a
                href="https://www.google.com/maps/place/Ohio+Union/@39.9976772,-83.0085754,15z/data=!4m5!3m4!1s0x0:0x29e24cc55fefd423!8m2!3d39.9976772!4d-83.0085754"
              >
                <v-img :src="require('@/assets/images/google-maps.png')"/>
              </a>
            </v-flex>
          </v-layout>-->
          <v-layout row align-center fill-height pa-4>
            <v-flex pa-3 xs7>
              <div class="display-1 font-weight-bold primary--text">Parking</div>
              <br />
              <div class="headline">
                <div>Parking is free for attendees as long as you follow the following steps.</div>
                <br />
                <ol class="font-weight-bold">
                  <li class="pb-2">
                    Navigate to Ohio Union SOUTH Garage
                    <ul>
                      <li class="title">
                        <a
                          href="https://www.google.com/maps/place/Ohio+Union+South+Garage/@39.9978658,-83.0078208,18z/data=!4m5!3m4!1s0x0:0x451ce9b70ee6591a!8m2!3d39.9983601!4d-83.0088199"
                          target="_blank"
                        >1759 N High St, Columbus, OH 43210</a>
                      </li>
                    </ul>
                  </li>
                  <li class="pb-2">Pull a ticket from the gate machine to enter the parking garage</li>
                  <li class="pb-2">
                    Bring that ticket with you to the conference registration desk
                    <ul>
                      <li
                        class="title"
                      >Someone at the registration desk will give you a barcoded validation sticker</li>
                    </ul>
                  </li>
                  <li
                    class="pb-2"
                  >Exit the garage by inserting the entry ticket into the specified slot</li>
                </ol>
              </div>
            </v-flex>
            <v-flex xs5>
              <a
                href="https://www.google.com/maps/place/Ohio+Union+South+Garage/@39.9978658,-83.0078208,18z/data=!4m5!3m4!1s0x0:0x451ce9b70ee6591a!8m2!3d39.9983601!4d-83.0088199"
                target="_blank"
              >
                <v-img :src="require('@/assets/images/south-parking-garage-map.png')" />
              </a>
            </v-flex>
          </v-layout>
          <v-layout row align-center fill-height pa-4 class="primary-background">
            <v-flex xs5>
              <v-img :src="require('@/assets/images/conference_crowd.webp')" />
            </v-flex>
            <v-flex xs7 pa-3 class="white--text">
              <div class="display-1 font-weight-bold">Nearby Hotels</div>
              <br />
              <div class="headline">
                <ul v-for="hotel in hotels" :key="hotel.name">
                  <li>
                    <a :href="hotel.url">
                      <span class="white--text">{{hotel.name}}</span>
                    </a>
                    <span class="font-italic grey--text">{{hotel.location}}</span>
                  </li>
                </ul>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </Layout>
  </v-app>
</template>

<style>
.primary-background {
  background-color: var(--v-primary-darken2);
  max-width: 100%;
}
</style>

<script>
export default {
  metaInfo() {
    return {
      title: "Venue"
    };
  },
  data() {
    return {
      hotels: [
        {
          name: "The Blackwell",
          location: " 2110 Tuttle Park Place",
          url: "https://www.theblackwell.com/"
        },
        {
          name: "Hilton Garden Inn Columbus",
          location: " 3232 Olentangy River Road",
          url:
            "https://hiltongardeninn3.hilton.com/en/hotels/ohio/hilton-garden-inn-columbus-university-area-CMHUAGI/index.html"
        },
        {
          name: "Springhill Suites",
          location: " 1421 Olentangy River Road",
          url:
            "https://www.marriott.com/hotels/travel/cmhos-springhill-suites-columbus-osu/"
        },
        {
          name: "Residence Inn by Marriott Columbus Downtown",
          location: " 36 E Gay Street",
          url:
            "https://www.marriott.com/hotels/travel/cmhrd-residence-inn-columbus-downtown/"
        }
      ],
      resturants: [
        {
          name: "Union Market",
          description:
            " a fast-casual option offering grab-and-go food choices."
        },
        {
          name: "Espress-OH",
          description:
            " a coffee shop serving specialty drinks, breakfast items, and gelato."
        }
      ]
    };
  },
};
</script>


