<template>
    <div class="fixed">
      <div id="textInput" class="conversationList row topMargin stickyInput">
          <form>
              <div class="conversationMessage">
                  <div class="row">
                      <div class="col-lg-1">
                      </div>
                      <div class="col-lg-10">
                          <input id="text-input" type="text" class="form-control" v-model="text" @keyup.enter="none">
                      </div>
                      <div class="col-xs-1">
                          <button id="input-btn" type="button" @click="sendText" class="btn btn-primary text-input-btn">Send Text</button>
                      </div>
                  </div>
              </div>
          </form>
      </div>
    </div>
</template>
<script>
	export default {
		name:    'textInput',
		props:   {
      // teacherData: {
      //   type: Object,
      //   required: true,
      // },
      studentIdentifier: {
        required: true,
      },
      addTextToList: {
        type: Function,
        required: true,
      }
    },
		data() {
			return {
				text: ''
			}
		},
		methods: {
			sendText() {
        event.preventDefault()
        if(!this.text.trim() == ''){
				axios.post(`https://littlebird-platform.herokuapp.com/sms/single/${this.studentIdentifier}`, { message: this.text })
					.then(response => {
						this.addText(response.data[0]);
					})
          .catch(err => console.error(err))
        } else {
          alert("Please enter a message before sending.")
        }
			},
      addText(data) {
        this.addTextToList({
          stakeholder_type: this.stakeholderDetails.type,
          first_name: this.stakeholderDetails.first_name,
          last_name: this.stakeholderDetails.last_name,
          raw_body: data.raw_body,
          timestamp: new Date(),
          communication_type: 'text',
          stakeholder_id: this.stakeholderDetails.id
        })
        this.text = '';
      }
		},
    computed: {
      stakeholderDetails() {
        return JSON.parse(window.localStorage.getItem('load'))
      }
    }
	}
</script>
<style scoped>
    .topMargin{
        margin-top: 10px;
    }
    .flexbox {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .fixed {
        height: 72px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    #textInput .col-lg-1 {
        width: 8.33%
    }
    #textInput .col-lg-10 {
        width: 80%;
        padding-left: 0;
        padding-right: 0;
    }
    .stickyInput {
        background-color: #FFF;
        height: 72px;
        position: relative;
        bottom: 0;
        width: 79%;
        margin: 0 auto;
    }
    .conversationMessage {
        width: 91%;
        margin: 0 auto;
    }
    .row {
        margin-left: -15;
        margin-right: -15;
    }
    #text-input {
        height: 32px;
        margin-top: 20px;
        margin-right: 0px;
    }
    .text-input-btn {
        height: 32px;
        background-color: #3F51B5;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 0px;
    }
</style>
