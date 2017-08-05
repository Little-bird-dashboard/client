<template>
    <div id="StudentPage">
        <StudentCard :guardianData="stakehoders" :studentData="student"/>
        <StatusBar/>
    </div>
</template>

<script>
	import StatusBar from '../components/StatusBar/StatusBar.vue'
	import StudentCard from '../components/StudentCard/StudentCard.vue'

	export default {
		name:       'StudentPage',
		components: {
			StudentCard,
			StatusBar
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
					this.student = response.data
				})
      axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}/stakehoders`)
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
</style>
