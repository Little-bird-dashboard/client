<template>
  <div id="textInput">
    <form>
      <div class="row">
        <div class="col-9">
          <input type="text" class="form-control" v-model="text">
        </div>
        <div class="col-3">
          <button type="button" @click="sendText()" class="btn btn-primary">Send Text</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'textInput',
  props: ['teacherData', 'studentIdentifier'],
  data () {
    return {
      text: ''
    }
  },
  methods: {
    sendText(input) {
      axios.post(`https://littlebird-platform.herokuapp.com/sms/single/${this.studentIdentifier}`, {message:this.text})
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>
<style scoped>
</style>
