<template>
  <li>
    <h4>{{stakeholderData.first_name}} {{stakeholderData.last_name}}</h4>
    <p>
      <a :href="stakeholderEmail">{{stakeholderData.email}}</a>
    </p>
  </li>
</template>
<script>
export default {
  name: 'StakeHolderItem',
  props: {
    stakeholderData: {
      required: true,
      type: Object
    }
  },
  computed: {
    stakeholderEmail () {
      return `mailto:${this.stakeholderData.email}`
    }
  }
}
</script>
<style scoped>
  p {
    margin-left: 15px;
  }
</style>
