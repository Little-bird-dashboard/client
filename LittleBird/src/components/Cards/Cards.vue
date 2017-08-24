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
      <span>
      <p><i class="fa fa-comment-o" aria-hidden="true"></i>  {{ last_contact_text }}  {{ contact == null ? "None" : makeDateTime | moment("MMM Do YYYY")  }}
      </p></span>
        </div>
        <div class="card-group-item">
            <p><i class="fa fa-list-alt" aria-hidden="true"> </i> {{ review_date_text }}  {{ cardData.IEP_deadline | moment("MMM Do YYYY") }}
            </p>
        </div>
        <hr>
    </div>
</template>

<script>
	export default {
		name:  'cards',
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
          return new Date(Number(contact));
        }
      }
    }
</script>

<style>
    .card-group {
        border: 1px solid #333;
        border-radius: 5px;
        margin: 10px;
    }
    img {
        width:         50px;
        height:        50px;
        border-radius: 25px;
        margin-top: 5px;
        margin-left: auto;
    }
</style>
