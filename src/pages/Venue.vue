<template>
  <v-app>
    <Layout>
      <v-content>
        <v-container fluid>
          <v-layout row align-center fill-height pa-5>
            <v-flex xs7>
              <h2>The Ohio Union</h2>
              <br>
              <h3>
                <a
                  href="https://www.google.com/maps/place/Ohio+Union/@39.9976772,-83.0085754,15z/data=!4m5!3m4!1s0x0:0x29e24cc55fefd423!8m2!3d39.9976772!4d-83.0085754"
                  target="_blank"
                >1739 N High St, Columbus, OH 43210</a>
              </h3>
              <br>
              <h3>The Ohio Union is a 318,000 square foot facility built on a foundation of rich history and Buckeye spirit. Located on The Ohio State University’s campus, the building has 34 unique meeting and event spaces and is near many on-campus and off-campus dining and entertainment options.</h3>
            </v-flex>
            <v-flex xs5>
              <v-img :src="require('@/assets/images/ohio-union-interior.jpg')"/>
            </v-flex>
          </v-layout>
          <v-layout row align-center fill-height>
            <v-flex xs5>
              <v-img :src="require('@/assets/images/facilities.webp')"/>
            </v-flex>
            <v-flex xs7>
              <h3>During the conference, breakfast, lunch, and snacks will be provided. However, if you want other options, there are several dining locations within the Ohio Union including the Union Market, a fast-casual option offering grab-and-go food choices, and Espress-OH, a coffee shop serving specialty drinks, breakfast items, and gelato.</h3>
            </v-flex>
          </v-layout>
          <v-layout row align-center fill-height>
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
          </v-layout>
        </v-container>
      </v-content>
    </Layout>
  </v-app>
</template>
