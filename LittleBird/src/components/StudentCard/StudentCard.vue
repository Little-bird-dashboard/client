<template>
    <div id="StudentCard">
        <div class="card-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <img width="120" height="120" v-bind:src="studentData[0].image_url"/>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>{{ studentData[0].name }}</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                           <span>
                               <h4>Student ID: </h4><h5>123456</h5>
                           </span>
                            </div>
                            <div class="col-lg-6">
                             <span>
                               <h4>Student ID: </h4><h5>123456</h5>
                           </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <h4>Student ID: </h4>
                                <h5>123456</h5>
                            </div>
                            <div class="col-lg-6">
                                <h4>Student ID: </h4>
                                <h5>123456</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="row">
                            <div class="col-lg-3 pull-right">
                                <i class="fa fa-times fa-3x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 pull-right">
                                <button class="btn btn-success">edit notes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name:    'StudentCard',
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
    h4, h5 {
        display: inline;
    }


</style>
