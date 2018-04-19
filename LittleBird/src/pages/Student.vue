<template>
    <div id="studentPage">
      <LoginValidator></LoginValidator>
        <div v-if="studentReady">
          <StakeHolderCard :flipStakeholderListToggle="toggleStakeholderList" v-if="stakeholderListToggle" :stakeHolderList="currentStudentStakeholders"></StakeHolderCard>
          <StudentCard :flipStakeholderListToggle="toggleStakeholderList" :stakeholderListShow="stakeholderListToggle" :guardianData="currentStudentStakeholders" :studentData="currentStudentData"/>
          <StatusBar :studentData="currentStudentData"/>
        </div>
        <div class="container" v-if="studentReady">
            <ConversationList :messages="currentStudentCommunications" :studentId="studentId"></ConversationList>
        </div>
        <div class="container" v-if="studentReady">
            <TextInput :studentIdentifier="studentId" :studentData="currentStudentData" :addTextToList="addTextToList"></TextInput>
        </div>
        <FeedbackButton></FeedbackButton>
    </div>
</template>

<script>
	import moment from 'moment'
	import StatusBar from '../components/studentPage-components/StatusBar.vue'
	import StudentCard from '../components/studentPage-components/StudentCard.vue'
	import ConversationList from '../components/studentPage-components/ConversationList'
	import TextInput from '../components/studentPage-components/TextInput'
  import LoginValidator from '../components/LoginValidator'
  import FeedbackButton from '../components/FeedbackButton'
  import StakeHolderCard from '../components/studentPage-components/StakeHolderCard'
  import { mapGetters } from 'vuex'

	export default {
		name:       'studentPage',
		components: {
			StudentCard,
			StatusBar,
			ConversationList,
			TextInput,
      LoginValidator,
      StakeHolderCard,
      FeedbackButton
		},
		data() {
			return {
				studentId: this.$route.params.student_id,
        stakeholderListToggle: false
			}
		},
		created() {
		   this.$store.dispatch('getStudentData', this.studentId)
		},
    computed: {
      ...mapGetters([
        'currentStudentData',
        'currentStudentStakeholders',
        'currentStudentCommunications',
        'studentReady'
      ])
    },
    methods: {
      addTextToList (message) {
        this.communications.push(message);
      },
      toggleStakeholderList () {
        this.stakeholderListToggle = !this.stakeholderListToggle;
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
