<template>
    <div class="heading">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
	export default {
		name: 'heading',
		data() {
			return {
				title: 'Little Birds'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .heading {
        font-weight: normal;
        text-align:  center;
    }
</style>
