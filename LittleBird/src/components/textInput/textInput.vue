<template>
    <div id="textInput">
        <form>
            <div class="row topMargin">
                    <div class="col-xs-9 col-xs-offset-1">
                        <input id="text-input" type="text" class="form-control" v-model="text" v-on:keyup.enter="sendText">
                    </div>
                    <div class="col-xs-2">
                        <button id="input-btn" type="button" @click="sendText" class="btn btn-primary">Send Text</button>
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
				axios.post(`https://littlebird-platform.herokuapp.com/sms/single/${this.studentIdentifier}`, { message: this.text })
					.then(response => {
						this.addText(response.data[0]);
					})
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
</style>
