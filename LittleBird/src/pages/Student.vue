<template>
    <div id="StudentPage">
      <div>
        <StudentCard :guardianData="stakeholders" :studentData="student"/>
        <StatusBar/>
      </div>
      <div>
        <conversationList :messages="communications"></conversationList>
      </div>
      <textInput :studentIdentifier="studentId" :studentData="student"></textInput>
    </div>
</template>

<script>
  import moment from 'moment'
	import StatusBar from '../components/StatusBar/StatusBar.vue'
	import StudentCard from '../components/StudentCard/StudentCard.vue'
  import conversationList from '../components/conversationList/conversationList'
  import textInput from '../components/textInput/textInput'

	export default {
		name:       'StudentPage',
		components: {
			StudentCard,
			StatusBar,
            conversationList,
            textInput
		},
    data (){
      return {
        studentId: this.$route.params.student_id,
        student: {},
        stakeholders:{},
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
          this.stakeholders = response.data
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
