<template>
    <div id="main">
        <Navigation/>
        <Navigation/>
        <div class="row">
            <div class="col-lg-4">
                <Cards/>
            </div>
            <div class="col-lg-4">
                <Cards/>
            </div>
            <div class="col-lg-4">
                <Cards/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <Cards/>
            </div>
            <div class="col-lg-4">
                <Cards/>
            </div>
            <div class="col-lg-4">
                <Cards/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <Cards/>
            </div>
            <div class="col-lg-4">
                <Cards/>
            </div>
            <div class="col-lg-4">
                <Cards/>
            </div>
        </div>
    </div>
</template>

<script>
	import Navigation from './Navigation.vue'
	import Cards from './Cards.vue'
	export default {
		name:       'main',
		components: {
			Navigation,
			Cards
		}
	}
</script>

<style>
</style>
