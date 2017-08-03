<template>
    <div id="StudentPage">
        <StudentCard :studentData="student" />
        <StatusBar/>
        <p>
          {{student_id}}
        </p>
    </div>
</template>

<script>
	import StatusBar from '../components/StatusBar/StatusBar.vue'
  import StudentCard from '../components/StudentCard/StudentCard.vue'
  import student from '../components/lib/student_data'

	export default {
		name:       'StudentPage',
		components: {
			StudentCard,
			StatusBar,
		},
    data () {
      return {
        student_id: this.$route.params.student_id,
        student
      }
    }
	}
</script>

<style>
</style>
