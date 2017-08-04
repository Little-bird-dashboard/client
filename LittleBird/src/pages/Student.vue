<template>
    <div id="StudentPage">
        <StudentCard :studentData="fetchStudent"/>
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
        mounted() {
			axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}`)
				.then(response => {
					this.student = response
				})
        }
	}
</script>

<style>
</style>
