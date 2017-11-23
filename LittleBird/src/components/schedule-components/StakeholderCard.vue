<template>
  <div id="stakeholderCard">
    <h4 class="text-right">
      {{stakeholderData.first_name}} {{stakeholderData.last_name}}
    </h4>
  </div>
</template>
<script>
export default {
  name: "stakeholderCard",
  props: {
    stakeholderData: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
  #stakeholderCard{
    height: 68px;
    padding-top: 15px;
  }
</style>
