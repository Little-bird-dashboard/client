<template>
  <div class="conversationList">
    <div id="conversationList" v-for="message in messages">
      <conversationMessage :messageData="message"></conversationMessage>
    </div>
  </div>
</template>
<script>
import conversationMessage from '../conversationMessage/conversationMessage'

export default {
  name: 'conversationList',
  props: ['messages'],
  components: {
    conversationMessage
  }
}
</script>
<style scoped>
#conversationList {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
