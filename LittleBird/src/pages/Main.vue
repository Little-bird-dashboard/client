<template>
    <div id="main">
        <Navigation/>
        <SearchBar/>
        <div class="row">
            <div class="col-lg-3">
                <Cards/>
            </div>
            <div class="col-lg-3">
                <Cards/>
            </div>
            <div class="col-lg-3">
                <Cards/>
            </div>
            <div class="col-lg-3">
                <Cards/>
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
		}
	}
</script>

<style>
</style>
