<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card card-block"><h2>{{dayData.date}}</h2></div>
      <div v-for="stakeholder in stakeholders">
      <availableCard :dayData="dayData" :stakeholderData="stakeholder"></availableCard>
      </div>
    </div>
</template>
<script>
import availableCard from '../availableCard/availableCard'
export default {
  name: "CalendarCard",
  props: ['dayData','stakeholdersData'],
  components: {
    availableCard
  },
  data () {
    return {
      day: this.dayData,
      stakeholders: this.stakeholdersData
    }
  }
}
</script>
<style scoped>
.card-block {
    min-height: 220px;
}
</style>
