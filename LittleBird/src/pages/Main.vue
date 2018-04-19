<template>
    <div id="main">
      <LoginValidator></LoginValidator>
      <NavBar/>
        <div class="container flexbox">
            <!-- <SearchBar/> -->
            <div class="row">
                <div v-for="card in activeStudents" class="cards" :key="card.id">
                    <StudentCard :cardData="card"></StudentCard>
                </div>
            </div>
        </div>
        <FeedbackButton></FeedbackButton>
    </div>
</template>

<script>
	import NavBar from '../components/NavBar.vue'
	import StudentCard from '../components/dashboard-components/StudentCard.vue'
	import SearchBar from '../components/dashboard-components/SearchBar.vue'
  import LoginValidator from '../components/LoginValidator'
  import FeedbackButton from '../components/FeedbackButton'

	export default {
		name:       'main',
		components: {
			NavBar,
			StudentCard,
			SearchBar,
      LoginValidator,
      FeedbackButton
		},
		created() {
      this.$store.dispatch('getStudentList')
		},
    computed: {
      activeStudents() {
        //argument is grade type id to filter out
        return this.$store.getters.activeStudents(20);
      }
    }
	}
</script>

<style>
    #main {
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
    }
    .flexbox {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1;
    }
</style>
