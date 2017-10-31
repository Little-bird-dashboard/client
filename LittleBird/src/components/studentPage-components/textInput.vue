<template>
    <div id="textInput">
        <form>
            <div class="row topMargin stickyInput">
                    <div class="col-xs-9 col-xs-offset-1">
                        <input id="text-input" type="text" class="form-control" v-model="text" @keyup.enter="none">
                    </div>
                    <div class="col-xs-1">
                        <button id="input-btn" type="button" @click="sendText" class="btn btn-primary text-input-btn">Send Text</button>
                    </div>

            </div>
        </form>
    </div>
</template>
<script>
	export default {
		name:    'textInput',
		props:   ['teacherData', 'studentIdentifier', 'addTextToList'],
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
        } else {
          alert("Please enter a message before sending.")
        }
			},
      addText(data) {
        this.addTextToList({
          stakeholder_type: 'Special Education Coordinator',
          first_name:'Jaclyn',
          last_name:'Moore',
          raw_body: data.raw_body,
          timestamp: new Date(),
          communication_type: 'text',
          stakeholder_id: 1
        })
        this.text = '';
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
    #textInput .col-xs-9 {
        padding-left: 0;
        width: 76.67%;
        margin-left: 5.33%;
    }
    #textInput .col-xs-1 {
        padding-left: 0;
    }
    .stickyInput {
        background-color: #FFF;
        height: 72px;
        position: fixed;
        bottom: 0;
        width: 100%;
        margin-right: 0px;
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
