<template>
  <li id='StakeholderTypeList'>
    <h5>{{stakeholderList[0].stakeholder_type}}</h5>
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
  h5 {
    font-weight: bold;
  }
</style>
