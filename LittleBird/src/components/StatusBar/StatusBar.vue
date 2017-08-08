<template>
    <div id="StatusBar">
        <nav class="navbar bg-primary">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <i class="fa fa-calendar fa-3x cal" aria-hidden="true"></i>
                        {{this.studentData.IEP_deadline}}
                    </div>
                    <div class="col-lg-4 text-center">
                        <i class="fa fa-paper-plane-o fa-3x cal" aria-hidden="true"></i>
                        Initial Contact: August 9th
                    </div>
                    <div class="col-lg-4 text-center">
                        <i @click="textPage" class="fa fa-calendar-plus-o fa-3x cal" aria-hidden="true"></i>
                        Initialize IEP Contact
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:    'StatusBar',
		props:   ['studentData', 'messageData'],
		data() {
			return {}
		},
		methods: {
			textPage() {
				axios.post(`https://littlebird-platform.herokuapp.com/sms/initiate/${this.studentData.id}`)
                    .then(response => {
						this.cards = response.data
					})
			}
		},
		mounted() {
			//do something after mounting vue instance
		}
	}
</script>

<style>
    .cal {
        padding: 20px;
    }
</style>
