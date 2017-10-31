<template>
    <div id="main">
      <loginValidator></loginValidator>
      <Navigation/>
        <div class="container flexbox">
            <!-- <SearchBar/> -->
            <div class="row">
                <div v-for="card in activeStudents" class="cards">
                    <studentCard :cardData="card"></studentCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import Navigation from '../components/NavBar.vue'
	import studentCard from '../components/dashboard-components/studentCard.vue'
	import searchBar from '../components/dashboard-components/searchBar.vue'
  import loginValidator from '../components/loginValidator'

	export default {
		name:       'main',
		components: {
			Navigation,
			studentCard,
			searchBar,
      loginValidator
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
