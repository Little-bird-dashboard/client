<template>
    <div id="StatusBar">
        <nav class="navbar bg-primary">
            <div class="container">
                <div class="col-lg-4 text-center">
                    <i class="fa fa-calendar fa-3x cal" aria-hidden="true"></i>
                </div>
                <div class="col-lg-4 text-center">
                    <i class="fa fa-calendar fa-3x cal" aria-hidden="true"></i>
                </div>
                <div class="col-lg-4 text-center">
                    <i class="fa fa-calendar fa-3x cal" aria-hidden="true"></i>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
	export default {
		name:    'StatusBar',
		props:   ['studentData'],
		data() {
			return {}
		},
		mounted() {
			//do something after mounting vue instance
			console.log(this.studentData)
		},
		methods: {}
	}
</script>

<style>
    .cal {
        padding: 20px;
    }

</style>
