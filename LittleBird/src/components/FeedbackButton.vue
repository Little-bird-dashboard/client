<template>
  <div id='FeedbackButton'>
    <div class="toggle-btn-wrapper">
      <button id="feedback-toggle-btn" type="button" @click="modalToggle = !modalToggle" class="btn btn-primary text-input-btn">Send Feedback</button>
    </div>
    <div v-if="modalToggle" id="feedbackModal">
      <form class="feedback-form" @submit.prevent="sendFeedback">
        <textarea rows="3" cols="30" name="feedback" v-model="feedbackText" placeholder="Leave feedback for Little Bird..."></textarea><br />
        <button id="feedback-btn" type="submit" name="feedback-submit" class="btn btn-primary text-input-btn" @click.prevent="sendFeedback">Send</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FeedbackButton',
  props: {
    userId: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      modalToggle: false,
      feedbackText: ''
    }
  },
  methods: {
    sendFeedback() {
      console.log(this.feedbackText);
    }
  }
}
</script>
<style scoped>
  #FeedbackButton {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    margin-bottom: 20px;
  }
  #feedbackModal {
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 10px;
    margin-top: -150px;
    grid-column: 4;
    z-index: 99;
  }
  .feedback-form {
    display: flex;
    flex-flow: column nowrap;
  }
  .toggle-btn-wrapper{
    grid-column: 3 / span 1;
    margin: 0 auto;
  }
  #feedback-toggle-btn {
    background-color: #3F51B5;
  }
  textarea {
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  }
  #feedback-btn {
    background-color: #3F51B5;
  }
</style>
