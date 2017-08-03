<template>
    <div id="student">
        <Navigation/>
        <SearchBar/>
    </div>
</template>

<script>
	import Navigation from '../components/Navigation/Navigation.vue'
	import SearchBar from '../components/SearchBar/SearchBar.vue'

	export default {
		name:       'student',
		components: {
			Navigation,
			SearchBar
		}
	}
</script>

<style>
</style>
