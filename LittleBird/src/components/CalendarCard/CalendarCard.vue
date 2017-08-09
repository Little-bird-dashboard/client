<template>
    <div class="card card-block col-lg-2 col-md-2 col-sm-2">
        <div>
            <h4>{{dayData.day}}</h4>
            <h4>at {{dayData.start_time}}</h4>
        </div>
        <div v-for="stakeholder in stakeholdersData">
            <availableCard :dayData="dayData" :stakeholderData="stakeholder"></availableCard>
        </div>
    </div>
</template>
<script>
	import availableCard from '../availableCard/availableCard'
	export default {
		name:       "CalendarCard",
		props:      ['dayData', 'stakeholdersData'],
		components: {
			availableCard
		},
    mounted() {
      //do something after mounting vue instance
      console.log(this.dayData)
    }
	}
</script>
<style scoped>
    .card-block {
        min-height: 220px;
    }
</style>
