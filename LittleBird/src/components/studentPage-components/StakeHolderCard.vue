<template>
  <div id='StakeHolderCard'>
    <div class="close-button" @click="flipStakeholderListToggle">
       <img id="icon-small" src="/static/cross.svg">
    </div>
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
    flipStakeholderListToggle: {
      type: Function,
      required: true
    }
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
    top: 146px;
    right: 3%;
    z-index: 99;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 16px 10px 16px 0px;
  }
  ul {
    list-style: none;
    margin-left: -10px;
  }
  .close-button {
    float: right;
    margin-right: -34px;
    cursor: pointer;
    width: 60px;
  }
  #icon-small {
    height: 16px;
  }
</style>
