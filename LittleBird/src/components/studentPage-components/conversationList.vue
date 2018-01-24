<template>
  <div class="conversationList">
    <div id="conversationList" v-for="message in sortedMessages" :key="message.id">
      <conversationMessage :messageData="message"></conversationMessage>
    </div>
  </div>
</template>
<script>
import conversationMessage from './conversationMessage'

export default {
  name: 'conversationList',
  props: {
    messages: {
      type: Array,
      required: false,
    },
    studentId: {
      required: true,
    },
  },
  components: {
    conversationMessage
  },
  data() {
    return {
      // returnedMessageData: this.messages
    }
  },
  computed: {
    sortedMessages() {
      return this.messages.sort(function (a, b) {
        return a.timestamp - b.timestamp;
      })
    }
  },
}
</script>
<style scoped>
    .conversationList {
        margin-bottom: 60px;
    }
    #conversationList {
        overflow-y: scroll;
        overflow-x: hidden;
        width: 100%;
        margin: 0 auto;
        position: relative;
    }
</style>
