<template>
  <div id='StakeHolderCard'>
    <ul v-for="stakeholder in filteredStakeholderList">
      <StakeHolderItem :stakeholderData="stakeholder"></StakeHolderItem>
    </ul>
  </div>
</template>
<script>
import StakeHolderItem from './StakeHolderItem'

export default {
  name: 'StakeHolderCard',
  components: {
    StakeHolderItem
  },
  props: {
    stakeHolderList: {
      type: Array,
      required: true
    }
  },
  computed: {
    filteredStakeholderList () {
      return this.stakeHolderList.filter(stakeholder => {
        return stakeholder.stakeholder_type_id != 9
      })
    }
  }
}
</script>
<style scoped>
  #StakeHolderCard {
    width: 350px;
    position: absolute;
    top: 175px;
    right: 15%;
    z-index: 99;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 10px;
  }
  ul {
    list-style: none;
  }
</style>
