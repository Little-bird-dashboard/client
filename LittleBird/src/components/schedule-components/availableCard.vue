<template>
  <div id="availableCard">
      <p @click="switchChecked" v-show="!checked" class="text-center">
        <i class="fa fa-times-circle fa-4x red" aria-hidden="true"></i>
      </p>
      <p v-show="checked" @click="switchChecked" class="text-center">
        <i class="fa fa-check-circle fa-4x green"  aria-hidden="true"></i>
      </p>
  </div>
</template>
<script>
export default {
  name: "availableCard",
  props: {
      stakeholderData: {
        type: Object,
        required: true,
      },
      dayData: {
        type: Object,
        required: true,
      },
  },
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
    border-top: 1px solid gray;
  }
</style>
