<template>
  <div id="availableCard">
      <p @click="switchChecked" v-show="!checked">
        <i class="fa fa-times-circle red" aria-hidden="true"></i>
      </p>
      <p v-show="checked" @click="switchChecked">
        <i class="fa fa-check-circle green"  aria-hidden="true"></i>
      </p>
  </div>
</template>
<script>
export default {
  name: "availableCard",
  props: ['stakeholderData','dayData'],
  data () {
    return {
      checked: false
    }
  },
  methods: {
    switchChecked() {
      this.checked = !this.checked
    }
  }
}
</script>
<style scoped>
  .red {
    color: red;
  }
  .green {
    color: green;
  }
  #availableCard {
    border: 1px solid;
  }
</style>
