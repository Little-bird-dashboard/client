<template>
    <div class="cards" style="width:20rem;">
        <ul class="list-group" v-for="card in cards_data">
            <li class="list-group-item">
                <img width="60" height="60" v-bind:src="card.image_url"/>
            </li>
            <li class="list-group-item">
                {{ card.name }}
            </li>
            <li class="list-group-item">
                <span><i class="fa fa-comment-o" aria-hidden="true"> </i>
                <h3>Last Contact: </h3>
 {{ card.last_contact }}
                                        </span>
            </li>
            <li class="list-group-item">
                <i class="fa fa-list-alt" aria-hidden="true"> </i>
                <h3>Review Date: </h3>
                {{ card.review_date }}
            </li>
            <hr>
        </ul>
    </div>
</template>

<script>
	import cards_data from './lib/cards_data'
	export default {
		name: 'cards',
		data() {
			return {
				cards_data
			}
		}
	}
</script>

<style>
    .cards {
        margin: 10px;
    }

    img {
        border:        1px solid gray;
        border-radius: 30px;
    }
</style>
