<template>
    <div id="statusBar">
        <nav class="navbar bg-primary student-status-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <img id="icon-large" src="/static/calendar-white.svg">
                        Due: {{this.studentData.IEP_deadline | moment("MMMM Do YYYY")}}
                    </div>
                    <div @click="followUpText" class="col-lg-4 text-center">
                        <img id="icon-large" src="/static/paper-plane.svg">
                        Initial Contact: August 9th
                    </div>
                    <div class="col-lg-4 text-center" @click="textPage">
                        <img id="icon-large" src="/static/calendar-add.svg">
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
		name:    'statusBar',
		props:   {
      studentData: {
        type: Object,
        required: true,
      },
    },
		data() {
			return {}
		},
		methods: {
			textPage() {
				axios.post(`https://littlebird-platform.herokuapp.com/sms/initiate/${this.studentData.id}`)
                    .then(response => {
						this.cards = response.data
					})
			},
      followUpText() {
        axios.post(`https://littlebird-platform.herokuapp.com/sms/confirm/${this.studentData.id}`)
      }
		},
		mounted() {
			//do something after mounting vue instance
		}
	}
</script>

<style>
    #statusBar .navbar .container {
        height: 80px;
    }
    #statusBar .row .text-center {
        height: 80px;
        margin-top: 40px;
    }
    .text-center {
        font-size: 18px;
    }
    .student-status-bar {
        background-color: #3F51B5 !important;
        border-radius: 0px !important;
    }
    .cal {
        padding: 20px;
    }
    .pointer {
      cursor: pointer;
    }
    img#icon-large {
        height: 40px;
        border-radius: 0px;
        margin-right: 16px;
        margin-top: 0px
    }
</style>
