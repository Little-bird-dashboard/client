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
	import Navigation from './Navigation.vue'
	import Cards from './Cards.vue'
	import SearchBar from './Searchbar.vue'
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
