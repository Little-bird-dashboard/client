<template>
    <div id="home">
        <Navigation/>
        <!-- <SearchBar/> -->
    </div>
</template>

<script>
	import Navigation from '../components/NavBar.vue'
	// import SearchBar from '../components/SearchBar/SearchBar.vue'

	export default {
		name:       'home',
		components: {
			Navigation,
			// SearchBar
		}
	}
</script>

<style>
    #home {
        font-family: 'Open Sans', sans-serif;
    }
</style>
