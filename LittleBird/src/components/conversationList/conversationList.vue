<template>
  <div id="conversationList" v-for="message in messages">
    <conversationMessage :messageData="message"></conversationMessage>
  </div>
</template>
<script>
import conversationMessage from '../conversationMessage/conversationMessage'

export default {
  name: 'conversationList',
  props: ['messages']
  components: {
    conversationMessage
  }
  data () {

  },
}
</script>
<style scoped>
</style>
