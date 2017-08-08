<template>
  <div id="StakeholderCard">
    <h4 class="text-right">
      {{stakeholderData.first_name}} {{stakeholderData.last_name}}
    </h4>
  </div>
</template>
<script>
export default {
  name: "StakeholderCard",
  props: ['stakeholderData'],
  data () {
    return {}
  }
}
</script>
<style scoped>
  #StakeholderCard{
    height: 68px;
    padding-top: 15px;
  }
</style>
