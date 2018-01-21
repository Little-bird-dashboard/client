<template>
  <li>
    <h5>{{stakeholderData.first_name}} {{stakeholderData.last_name}}</h5>
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
  li {
    margin-left: -28px;
  }
</style>
