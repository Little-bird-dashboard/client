<template>
    <div id="studentPage">
      <LoginValidator></LoginValidator>
        <div>
            <StudentCard :guardianData="stakeholders" :studentData="student"/>
            <StatusBar :studentData="student"/>
        </div>
        <div class="container">
            <ConversationList :messages="communications" :studentId="studentId"></ConversationList>
        </div>
        <div class="container">
            <TextInput :studentIdentifier="studentId" :studentData="student" :addTextToList="addTextToList"></TextInput>
        </div>
    </div>
</template>

<script>
	import moment from 'moment'
	import StatusBar from '../components/studentPage-components/StatusBar.vue'
	import StudentCard from '../components/studentPage-components/StudentCard.vue'
	import ConversationList from '../components/studentPage-components/ConversationList'
	import TextInput from '../components/studentPage-components/TextInput'
  import LoginValidator from '../components/LoginValidator.vue'

	export default {
		name:       'studentPage',
		components: {
			StudentCard,
			StatusBar,
			ConversationList,
			TextInput,
      LoginValidator
		},
		data() {
			return {
				studentId:      this.$route.params.student_id,
				student:        {},
				stakeholders:   [],
				communications: []
			}
		},
		mounted() {
			axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}`)
				.then(response => {
					this.student = response.data[0]
				})
			axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}/stakeholders`)
				.then(response => {
					this.stakeholders = response.data
				})
			axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}/communications`)
				.then(response => {
					this.communications = response.data
				})
		},
    methods: {
      addTextToList(message) {
        this.communications.push(message);
      }
    }
	}
</script>

<style>
    #studentPage {
        font-family: 'Open Sans', sans-serif;
    }
    .conversations {
        width:  80%;
        margin: auto;
    }

</style>
