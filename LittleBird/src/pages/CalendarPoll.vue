<template>
  <div id="CalendarPoll">
    <h1>IEP Review</h1>
    <CalendarHeaderCard :studentData="student" class="offset-lg-1 CalendarCard"></CalendarHeaderCard>
    <div class="row">
      <div class="stakeholderList col-lg-2">
        <div class="spacer">
        </div>
        <div v-for="stakeholder in stakeholderList">
          <StakeholderCard :stakeholderData="stakeholder"></StakeholderCard>
        </div>
      </div>
      <div class="col-lg-10">
      <div class="container-fluid " id="scheduleCards">
        <h3>For the week of {{schedule.weekstart}}, what times are you available to meet?</h3>
        <div class="row flex-row flex-nowrap" v-for="day in schedule.available">
          <CalendarCard :dayData="day" :stakeholdersData="stakeholderList"></CalendarCard>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarHeaderCard from '../components/CalendarHeaderCard/CalendarHeaderCard'
import StakeholderCard from '../components/StakeholderCard/StakeholderCard'
import CalendarCard from '../components/CalendarCard/CalendarCard'

export default {
  name: 'CalendarPoll',
  components: {
    CalendarHeaderCard,
    StakeholderCard,
    CalendarCard
  },
  data () {
    return {
      studentId: 1,
      stakeholderList: [],
      student: {},
      schedule:
        {
          weekstart: 'August 28, 2017',
          available: [
            {
              day: 'Monday',
              time: '9 am'
            },
            {
              day: 'Monday',
              time: '10 am'
            },
            {
              day: 'Monday',
              time: '11 am'
            },
            {
              day: 'Wednesday',
              time: '9 am'
            },
            {
              day: 'Wednesday',
              time: '10 am'
            },
            {
              day: 'Wednesday',
              time: '11 am'
            }
          ]
        }
    }
  },
  mounted() {
    axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}/stakeholders`)
      .then(response => {
        this.stakeholderList = response.data.filter(stakeholder => {
          return stakeholder.stakeholder_type != "Primary Guardian" && stakeholder.stakeholder_type != "Additional Guardian"
        })
      })
    axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}`)
      .then(response => {
        this.student = response.data[0];
      })
  },
  methods: {
    dayCounter: function (day) {
      switch (day) {
        case 'Monday':
          return 0;
          break;
        case 'Tuesday':
          return 1;
          break;
        case 'Wednesday':
          return 2;
          break;
        case 'Thursday':
          return 3;
          break;
        case 'Friday':
          return 4;
          break;
        default:
          return "Invalid Day"

      }
    }
  }
}
</script>
<style scoped>
  .CalendarHeaderCard{
    width: 20%;
  }
  #scheduleCards{
    overflow-x: scroll;
    overflow-y: visible;
  }
</style>
