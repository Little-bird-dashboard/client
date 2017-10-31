<template>
    <div class="col-lg-3 card-group">
        <div class="card-group-item">
            <img v-bind:src="cardData.profile_img"/>
            <router-link :to="{
      	name: 'StudentPage',
      	params: {
      		student_id: cardData.id
      	}
      }">
               <h2> {{ cardData.first_name }} {{ cardData.last_name}} </h2>
            </router-link>
        </div>
        <div class="card-group-item">
          <span v-if="!contact_date">
            <p><img id="icon-small" src="/static/message.svg">  {{ last_contact_text }}  None
          </p></span>
          <span v-else>
            <p><img id="icon-small" src="/static/message.svg">  {{ last_contact_text }}  {{ makeDateTime | moment("MMM Do YYYY") }}
          </p></span>
        </div>
        <div class="card-group-item">
            <p><img id="icon-small" src="/static/calendar.svg"> {{ review_date_text }}  {{ cardData.IEP_deadline | moment("MMM Do YYYY") }}
            </p>
        </div>
    </div>
</template>

<script>
	export default {
		name:  'studentCard',
		props: ['cardData'],
		data() {
			return {
				last_contact_text: 'Last Contact: ',
				review_date_text:  'Review Date: ',
        contact_date: this.cardData.last_communication
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
    .card-group {
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.24);
        border-radius: 6px;
        margin: 10px;
        padding-left: 16px;
        padding-bottom: 10px;
    }
    img {
        width:         50px;
        height:        50px;
        border-radius: 25px;
        margin-top: 16px;
        margin-left: auto;
    }
    img#icon-small {
        width: 16px;
        height: 16px;
        border-radius: 0px;
        margin-top: 0px;
        margin-right: 8px;
    }
    h2 {
        color: #333 !important;
        font-size: 24px !important;
        margin-top: 16px !important;
    }
</style>
