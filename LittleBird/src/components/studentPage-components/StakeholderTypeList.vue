<template>
  <li id='StakeholderTypeList'>
    <h4>{{stakeholderList[0].stakeholder_type}}</h4>
    <ul v-for="stakeholder in stakeholderList" :key="stakeholder.id">
      <StakeHolderItem :stakeholderData="stakeholder"></StakeHolderItem>
    </ul>
  </li>
</template>
<script>
import StakeHolderItem from './StakeHolderItem'

export default {
  name: 'StakeholderTypeList',
  components: {
    StakeHolderItem
  },
  props: {
    stakeholderList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
