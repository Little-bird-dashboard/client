<template>
  <li id='StakeholderTypeList'>
    <ul v-for="stakeholder in stakeholderList" :key="stakeholder.id">
      <StakeHolderItem :stakeholderData="stakeholder"></StakeHolderItem>
    </ul>
  </div>
</template>
<script>
import StakeHolderItem from './StakeHolderItem'

export default {
  name: 'StakeholderTypeList',
  components: {
    StakeHolderItem
  }
  props: {
    stakeholderList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
</style>
