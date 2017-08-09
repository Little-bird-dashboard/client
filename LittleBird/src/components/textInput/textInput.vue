<template>
    <div id="textInput">
        <form>
            <div class="row">
                <div class="container">
                    <div class="col-lg-8 offset-lg-2">
                        <input id="text-input" type="text" class="form-control" v-model="text">
                    </div>
                    <div class="col-lg-2">
                        <button id="input-btn" type="button" @click="sendText" class="btn btn-primary">Send Text</button>
                    </div>
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
				axios.post(`https://littlebird-platform.herokuapp.com/sms/single/${this.studentIdentifier}`, { message: this.text })
					.then(response => {
						this.addText(response.data[0]);
					})
			},
      addText(data) {
        this.addTextToList({
          stakeholder_type: 'Special Education Coordinator',
          communication_type: '',
          first_name:'Jaclyn',
          last_name:'Moore',
          raw_body: data.raw_body,
          timestamp: new Date(),
          communication_type: 'text'
        })
      }
		}
	}
</script>
<style scoped>
    #text-input {
        margin-left: 140px;
        margin-top: 10px;
    }
    #input-btn {
        margin-left: 140px;
        margin-top: 10px;
    }
</style>
