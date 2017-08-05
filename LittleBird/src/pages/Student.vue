<template>
    <div id="StudentPage">
      <div>
        <StudentCard :guardianData="stakehoders" :studentData="student"/>
        <StatusBar/>
      </div>
      <div class="row conversationList">
        <conversationList :messages="communications"></conversationList>
      </div>
    </div>
</template>

<script>
  import moment from 'moment'
	import StatusBar from '../components/StatusBar/StatusBar.vue'
	import StudentCard from '../components/StudentCard/StudentCard.vue'
  import conversationList from '../components/conversationList/conversationList'

	export default {
		name:       'StudentPage',
		components: {
			StudentCard,
			StatusBar,
      conversationList
		},
    data (){
      return {
        studentId: this.$route.params.student_id,
        student: {},
        stakehoders:{},
        communications: {}
      }
    },
    mounted() {
			axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}`)
				.then(response => {
          console.log(response.data)
					this.student = response.data[0]
				})
      axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}/stakeholders`)
        .then(response => {
          console.log(response.data)
          this.stakehoders = response.data
        })
      axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}/communications`)
        .then(response => {
          console.log(response.data)
          this.communications = response.data
        })
    }
	}
</script>

<style>
    #StudentPage {
        font-family: 'Open Sans', sans-serif;
    }
    .conversationList {
      width: 80%;
    }
</style>
