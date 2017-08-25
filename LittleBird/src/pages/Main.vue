<template>
    <div id="main">
        <div class="container">
            <Navigation/>
            <!-- <SearchBar/> -->
            <div>
                <div v-for="card in cards">
                    <Cards :cardData="card"></Cards>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import Navigation from '../components/NavBar/NavBar.vue'
	import Cards from '../components/Cards/Cards.vue'
	import SearchBar from '../components/SearchBar/SearchBar.vue'

	export default {
		name:       'main',
		components: {
			Navigation,
			Cards,
			SearchBar
		},
		data() {
			return {
				cards: {}
			}
		},
		mounted() {
			//do something after mounting vue instance
			axios.get('https://littlebird-platform.herokuapp.com/students/')
				.then(response => {
					this.cards = response.data
				})
		}
	}
</script>

<style>
    #main {
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
    }
</style>
