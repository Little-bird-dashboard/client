<template>
  <div id="textInput">
    <form class="form-inline">
      <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" v-model="text">
      <button type="button" @click="sendText()" class="btn btn-primary">Send Text</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'textInput',
  props: ['teacherData', 'studentId'],
  data () {
    return {
      text: '',
      studentId:0
    }
  },
  // methods: {
  //   sendText(input) {
  //     axios.post(`https://littlebird-platform.herokuapp.com/students/${studentId}/communications`)
  //       .then(response => {
  //         console.log(response)
  //       })
  //   }
  // }
}
</script>
<style scoped>
</style>
