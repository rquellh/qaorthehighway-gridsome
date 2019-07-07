<template>
  <v-app>
    <Layout>
      <v-content class="my-5">
        <h1 class="grey--text">COSQAM Committee</h1>
        <v-divider class="pb-1"/>
        <h3 class="pb-5">
          ​The QA or the Highway conference is organized by COSQAM (Central Ohio Software Quality Assurance & Management), which is backed by QA leaders from several Central Ohio organizations, including Centric Consulting, CoverMyMeds, Grange Insurance, HMB, Ineffable Solutions, and Tricentis.
          <br>
          <br>In addition to organizing and running the QA or the Highway conference, COSQAM also offers quarterly Lunch & Learn presentations on QA and Testing topics.
          <br>
          <br>At COSQAM, we are dedicated to elevating the QA and Testing industry – for us, it is QA or the Highway!
        </h3>
        <h1 class="text-xs-center primary--text committee">Committee Members</h1>
        <v-container fluid ma-0 pa-0>
          <v-layout wrap ma-0 pa-0>
            <v-flex xs12 md6 lg4 pa-5 v-for="(member, index) in members" :key="index">
              <SpeakerCard :speaker="member.name" :speakerList="memberListDropdown" :bio="member.bio" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import SpeakerCard from "@/components/SpeakerCard";

export default {
  components: {
    SpeakerCard
  },
  data() {
    return {
      members: [
        {
          name: "Wendy Bayer",
          bio:
            "Wendy is a passionate, detail-oriented, software quality assurance leader who has been successfully delivering testing projects with rapidly changing technologies for 20+ years. Curious by nature and a problem solver at heart, Wendy began her IT career by happenstance after landing a job with CompuServe shortly before graduating from Ohio State University with a B.A. in European History, working her way from customer support to Quality Assurance.  Currently, she facilitates the testing, branding, and customization of chemical structure drawing packages for CAS.  Outside of IT, she enjoys exploratory day trips and hiking with her husband and their rescued Welsh Corgi, black and white street photography, and finally learning Spanish."
        },
        {
          name: "Joe Beale",
          bio:
            "Joseph Beale serves as Vice President of COSQAM and is the Site Coordinator and Sponsor Liason for the QA or the Highway conference. A former developer, Joe got into Software Testing and Quality Assurance back in 2002 and has been working in that area ever since, with a focus on Test Automation since 2012. Overall he has more than 21 years in Systems with experience in almost every area of the application life cycle. A graduate of Ohio State University, Joe currently works as a Solutions Architect for Tricentis and when not working on automated test cases or cheering on his beloved Buckeyes he enjoys basketball, golf, grilling, and spending time with his wife and seven children."
        },
        {
          name: "Barry Kuck",
          bio:
            "Barry Kuck founded the Testing Services practice at HMB and has over twenty years of experience delivering Information Technology solutions. In addition to holding the Project Management Professional certification for over a decade, he has been a practitioner and led teams in all aspects of project delivery including business analysis, solution architecture, application development, quality assurance, and program/project management. He is a firm believer that bridging the gaps between these different disciplines creates cohesive teams and embeds a quality focus. Alignment and expectation management between business, technology, and stakeholders is critical to defining successful outcomes and delivering them. Outside of technology, Barry volunteers his time focusing on youth development as a 4H Advisor and Assistant Scoutmaster with the Boy Scouts of America."
        },
        { name: "​​Val Lines", bio: "" },
        {
          name: "Dan Longcoy",
          bio:
            "Dan Longcoy is Test Engineering Manager with more than 20 years of experience. Dan has been with Grange his entire career and came to testing from the business. Dan was instrumental in establishing industry standard testing practices and building initial QA organization at Grange. He successfully led his team through QA Transformation and helped the team fully embrace automation."
        },
        {
          name: "Rick Neighbarger​​",
          bio:
            "Rick is Director at Large for COSQAM. He has held a variety of roles over the past 25 years in quality and risk management leadership, consulting and practice, across multiple industries. He is currently Director of Enterprise Risk Management and Quality at CoverMyMeds. He is also on the leadership team for the American Society for Quality, and holds certifications in Risk Management, Quality Management, and Quality Assurance. In his spare time he likes to travel, hike and kayak."
        },
        {
          name: "Joseph Ours​",
          bio:
            "Like you, technology consulting expert and international speaker Joseph Ours has seen projects succeed and fail in numerous ways over the years. Constantly questioning, Is it bad processes? Unskilled people? Lack of strategic vision? Joseph has spent over two decades leading, coaching, speaking, and living the IT industry. With his real-life, in-the-trenches experience, his view is radically different. A view focused on value individuals bring to an organization. The author of popular articles, such as, “Why You Need Women Testers”, and speaker on behavior psychology topics in IT such as, “Thinking Fast and Slow for IT”, Joseph has an ability to tackle tough topics and has sparked numerous penetrating and beneficial conversations that have been shared with folks from around the globe. Joseph serves as a DevOps National Practice Lead with the global firm, Centric Consulting. He has a MBA and is a Certified Project Management Professional where he continues to work with the best and brightest in the field. Joseph is a founder and serves on the board of Central Ohio Software Quality and Management organization, who runs the regional professional development day called QA or the Highway, which sees an annual attendance of over 500."
        },
        {
          name: "Damian Synadinos",
          bio:
            'Damian Synadinos has been helping “build better software and build software better” for more than 25 years. Now, through his company Ineffable Solutions, Damian offers experienced-based and research-hardened talks, training, and consulting. His experience spans many roles and companies in diverse industries including airline, education, ecommerce, finance, insurance, retail, and commercial realty. Damian also helps organize the "QA or the Highway" conference, and frequently mentors, coaches, and advises IT professionals around the world. He is an international speaker and trainer, presenting fundamental topics that are applicable to a wide range of contexts at numerous conferences and corporations. Additionally, Damian has over 10 years of theatrical improv experience and frequently uses applied improv to teach a variety of subjects.'
        },
        { name: "Michelle Williams", bio: "" }
      ],
      memberListDropdown: []
    };
  },
  created() {
    this.addShow();
  },
  methods: {
    addShow() {
      this.memberListDropdown = this.members.map(member => ({
        speaker: member.name,
        show: false
      }));
    }
  }
};
</script>

<style scoped>
.committee {
  border-bottom: 1px solid var(--v-primary-base);
}
</style>
