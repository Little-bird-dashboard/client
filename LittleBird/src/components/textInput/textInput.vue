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
		props:   ['teacherData', 'studentIdentifier'],
		data() {
			return {
				text: ''
			}
		},
		methods: {
			sendText() {
				axios.post(`https://littlebird-platform.herokuapp.com/sms/single/${this.studentIdentifier}`, { message: this.text })
					.then(response => {
						console.log(response)
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
