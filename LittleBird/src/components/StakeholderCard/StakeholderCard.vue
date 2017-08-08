<template>
  <div id="StakeholderCard">
    <p>
      {{stakeholderData.first_name}} {{stakeholderData.last_name}}
    </p>
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
</style>
