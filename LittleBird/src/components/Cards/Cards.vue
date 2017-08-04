<template>
  <div class="col-lg-3 card-group">
    <div class="card-group-item">
      <img width="60" height="60" v-bind:src="cardData.profile_img"/>
      <router-link :to="{
      	name: 'StudentPage',
      	params: {
      		student_id: cardData.id
      	}
      }">
          {{ cardData.first_name }} {{ cardData.last_name}}
      </router-link>
    </div>
    <div class="card-group-item">
      <span>
      <p><i class="fa fa-comment-o" aria-hidden="true"></i>  {{ last_contact_text }}  {{ cardData.last_contact }}
      </p></span>
    </div>
    <div class="card-group-item">
      <p><i class="fa fa-list-alt" aria-hidden="true"> </i>  {{ review_date_text }}  {{ cardData.IEP_deadline }}
      </p>
    </div>
    <hr>
  </div>
</template>

<script>
	import cards_data from '../lib/student_data'
	export default {
		name: 'cards',
    props: ['cardData'],
		data() {
			return {
				last_contact_text: 'Last Contact: ',
        review_date_text: 'Review Date: ',
			}
		}
	}
</script>

<style>
    .cards {
        margin: 20px;
    }

    img {
        border:        1px solid gray;
        border-radius: 30px;
    }
</style>
