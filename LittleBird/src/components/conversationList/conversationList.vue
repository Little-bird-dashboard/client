<template>
  <div class="conversationList">
    <div id="conversationList" v-for="message in messageData">
      <conversationMessage :messageData="message"></conversationMessage>
    </div>
  </div>
</template>
<script>
import conversationMessage from '../conversationMessage/conversationMessage'

export default {
  name: 'conversationList',
  props: ['messages', 'studentId'],
  components: {
    conversationMessage
  },
  data() {
    return {
      messageData: messages
    }
  },
  mounted() {
    // setInterval(function(){
    //   axios.get(`https://littlebird-platform.herokuapp.com/students/${this.studentId}/communications`)
		// 		.then(response => {
		// 			this.messageData = response.data
		// 	})
    // }, 10000);
  }
}
</script>
<style scoped>
#conversationList {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
