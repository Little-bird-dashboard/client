<template>
    <div id="statusBar">
        <nav class="navbar bg-primary student-status-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <img id="icon-large" src="/static/calendar-white.svg">
                        Due: {{studentData.IEP_deadline | moment("MMMM Do YYYY")}}
                    </div>
                    <div @click="followUpText" class="col-lg-4 text-center">
                        <img id="icon-large" src="/static/paper-plane.svg">
                        <span v-if="!studentData.last_communication">
                          Initial Contact: No Texts Yet
                        </span>
                        <!-- <span v-if="studentData.last_communication">
                          Initial Contact: {{studentData.last_communication | moment("MMMM Do YYYY")}}
                        </span> -->
                    </div>
                    <div class="col-lg-4 text-center" @click="textPage">
                        <img id="icon-large" src="/static/calendar-add.svg">
                        IEP Meeting: Unscheduled
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
    computed: {
      makeDateTime(){
          return new Date(Number(this.contact_date));
        }
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
