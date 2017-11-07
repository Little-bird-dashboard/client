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
    </div>
</template>

<script>
	import NavBar from '../components/NavBar.vue'
	import StudentCard from '../components/dashboard-components/StudentCard.vue'
	import SearchBar from '../components/dashboard-components/SearchBar.vue'
  import LoginValidator from '../components/LoginValidator'

	export default {
		name:       'main',
		components: {
			NavBar,
			StudentCard,
			SearchBar,
      LoginValidator
		},
		data() {
			return {
				cards: []
			}
		},
		mounted() {
			//do something after mounting vue instance
			axios.get('https://littlebird-platform.herokuapp.com/students/')
				.then(response => {
					this.cards = response.data
				})
		},
    computed: {
      activeStudents() {
        return this.cards.filter(function(student) {
          return student.grade_type_id != 20;
        })
        .sort((a, b) => {
          return a.id - b.id;
        })
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
