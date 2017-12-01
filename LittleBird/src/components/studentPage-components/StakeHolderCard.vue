<template>
  <div id='StakeHolderCard'>
    <ul v-for="stakeholderList in sortedStakeholderList">
      <StakeholderTypeList :stakeholderList="stakeholderList"></StakeholderTypeList>
    </ul>
  </div>
</template>
<script>
import StakeholderTypeList from './StakeholderTypeList'

export default {
  name: 'StakeHolderCard',
  components: {
    StakeholderTypeList
  },
  props: {
    stakeHolderList: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      stakeholders: {},
      stakeholderTypes: []
    }
  },
  computed: {
    filteredStakeholderList () {
      return this.stakeHolderList.filter(stakeholder => {
        return stakeholder.stakeholder_type_id != 9
      })
    },
    sortedStakeholderList () {
      let result = {}
      this.filteredStakeholderList.forEach(stakeholder => {
        if (!result[stakeholder.stakeholder_type]){
          result[stakeholder.stakeholder_type] = []
        }
        result[stakeholder.stakeholder_type].push(stakeholder)
      })
      console.log('Stored stakeholder list', result);
      return result
    }
  },
  stakeholderTypes () {
    this.stakeholderTypes = Object.keys(this.stakeholders)
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
