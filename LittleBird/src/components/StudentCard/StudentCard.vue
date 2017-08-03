<template>
    <div id="StudentCard">
        <div class="card-block">

            <h4 class="card-title">{{studentData[0].name}}</h4>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a> <a href="#" class="card-link">Another link</a>

        </div>
    </div>

</template>

<script>
	export default {
		name:    'StudentCard',
    props: ['studentData'],
		data() {
			return {
      }
		},
    mounted() {
      //do something after mounting vue instance
      console.log(this.studentData)
    },
		methods: {
    }
	}
</script>

<style>
</style>
