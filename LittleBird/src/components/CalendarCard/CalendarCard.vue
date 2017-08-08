<template>
    <div class="col-lg-3">
      <div class="card card-block">
        <h4>{{dayData.day}}</h4>
        <h4>at {{dayData.time}}</h4>
      </div>
      <div v-for="stakeholder in stakeholdersData">
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
  }
}
</script>
<style scoped>
.card-block {
    min-height: 220px;
}
</style>
