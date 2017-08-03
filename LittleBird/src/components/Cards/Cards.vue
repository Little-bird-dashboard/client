<template>
    <div class="cards" style="width:20rem;">
        <div class="card-group" v-for="card in cards_data">
            <div class="card-group-item">
                <img width="60" height="60" v-bind:src="card.image_url"/>
                <router-link :to="{
                	name: 'StudentPage',
                	params: {
                		student_id: card.student_id
                	}
                }">
                    {{ card.name }}
                </router-link>
            </div>
            <div class="card-group-item">
                <span>
                <p><i class="fa fa-comment-o" aria-hidden="true"></i>  {{ last_contact_text }}  {{ card.last_contact }}
                </p></span>
            </div>
            <div class="card-group-item">
                <p><i class="fa fa-list-alt" aria-hidden="true"> </i>  {{ review_date_text }}  {{ card.review_date }}
                </p>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
	import cards_data from '../lib/student_data'
	export default {
		name: 'cards',
		data() {
			return {
				last_contact_text: 'Last Contact: ',
                review_date_text: 'Review Date: ',
				cards_data
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
