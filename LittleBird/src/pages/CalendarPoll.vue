<template>
    <div class="container-fluid">
        <div class="row flex-row flex-nowrap">
            <NavBar/>
            <div class="container-fluid">
                <CalendarHeaderCard :studentData="student" class="offset-lg-1 CalendarCard"></CalendarHeaderCard>
                <div class="card">
                    <div class="row">
                      <h3 class='container'>For the week of {{schedule.weekstart}}, what times are you available to meet?</h3>
                          <div class="stakeholderList col-lg-2 col-md-2 col-sm-2">
                            <div class="spacer">
                              <h4>a</h4>
                              <h4>a</h4>
                            </div>
                              <div v-for="stakeholder in stakeholderList">
                                  <StakeholderCard :stakeholderData="stakeholder"></StakeholderCard>
                              </div>
                          </div>

                      <div class="col-lg-10 col-md-10 col-sm-10">
                          <div class="container-fluid scheduleCards">
                              <div class="row flex-row flex-nowrap">
                                <div v-for="day in schedule.available">
                                  <CalendarCard :dayData="day"
                                      :stakeholdersData="stakeholderList" class="calendarCard"></CalendarCard>
                                </div>
                              </div>
                          </div>
                      </div>
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
	import NavBar from '../components/NavBar/NavBar'

	export default {
		name:       'CalendarPoll',
		components: {
			NavBar,
			CalendarHeaderCard,
			StakeholderCard,
			CalendarCard
		},
		data() {
			return {
				studentId:       this.$route.params.student_id,
				stakeholderList: [],
				student:         {},
				schedule:
				                 {
					                 weekstart: 'August 28, 2017',
					                 available: [
						                 {
							                 day:  'Monday',
							                 time: '9 am'
						                 },
						                 {
							                 day:  'Monday',
							                 time: '10 am'
						                 },
						                 {
							                 day:  'Monday',
							                 time: '11 am'
						                 },
						                 {
							                 day:  'Wednesday',
							                 time: '9 am'
						                 },
						                 {
							                 day:  'Wednesday',
							                 time: '10 am'
						                 },
						                 {
							                 day:  'Wednesday',
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
		methods:    {
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
    .CalendarHeaderCard {
        width: 20%;
    }

    /*.scheduleCards {
        overflow-x: scroll;
        overflow-y: visible;
    }*/
    .calendarCard {
      width: 20vh;
    }
    .spacer {
      color: white;
    }
</style>
