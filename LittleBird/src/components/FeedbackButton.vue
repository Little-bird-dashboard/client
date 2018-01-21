<template>
  <div id='FeedbackButton'>
    <div id="feedback-toggle-btn" @click="modalToggle = !modalToggle"><i class="fa fa-comment" aria-hidden="true"></i></div>
    <div v-if="modalToggle" id="feedbackModal">
      <form class="feedback-form" @submit.prevent="sendFeedback" v-if="!modalSuccess">
        <textarea rows="3" cols="30" name="feedback" v-model="feedbackText" placeholder="Leave feedback for Little Bird..."></textarea><br />
        <button id="feedback-btn" type="submit" name="feedback-submit" class="btn btn-primary text-input-btn" @click.prevent="sendFeedback">{{buttonText}}</button>
      </form>
      <p v-if="modalSuccess" class="success-message">
        Thank you for your feedback! <br />
        <small @click="modalSuccess = false">Back to form</small>
      </p>
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
      feedbackText: '',
      modalSuccess: false,
      buttonText: 'Send',
      user: JSON.parse(window.localStorage.getItem('load'))
    }
  },
  methods: {
    sendFeedback() {
      console.log(this.user);
      this.buttonText = 'Sending...'
      emailjs.send("gmail","feedback2",{name: "Test", message_html: this.feedbackText, school:this.user.school, stakeholder_roll:this.user.type})
      .then((response) => {
         this.modalSuccess = true
         this.feedbackText = ''
         this.buttonText = 'Send'
        }, function(err) {
         console.log("FAILED. error=", err)
         alert("Feedback form failed. Please email team@trylittlebird.com")
        })
    }
  }
}
</script>
<style scoped>
  #FeedbackButton {
    margin-bottom: 20px;
  }
  #feedbackModal {
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 16px;
    margin-top: -150px;
    position: fixed;
    z-index: 99;
    bottom: 64px;
    right: 20px;
  }
  .feedback-form {
    display: flex;
    flex-flow: column nowrap;
  }
  #feedback-toggle-btn {
    background-color: #3F51B5;
    width: 32px;
    height: 32px;
    padding: 5px;
    border-radius: 45px;
    color: white;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 98;
    text-align: center;
  }
  textarea {
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 8px;
    margin-bottom: -4px;
    box-shadow: none;
    border: 1px solid #CECDCD;
    border-radius: 3px;
  }
  #feedback-btn {
    background-color: #3F51B5;
  }
  .success-message small {
    color: #3F51B5;
    float: right;
    cursor: pointer;
  }
</style>
