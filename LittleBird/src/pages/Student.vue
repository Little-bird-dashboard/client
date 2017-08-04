<template>
    <div id="StudentPage">
        <StudentCard :studentData="student"/>
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
        student: {}
      }
    },
    mounted() {
			axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}`)
				.then(response => {
					this.student = response.data
				})
    }
	}
</script>

<style>
    #StudentPage {
        font-family: 'Open Sans', sans-serif;
    }
</style>
