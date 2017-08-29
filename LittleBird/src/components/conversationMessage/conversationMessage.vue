<template>
    <div id="conversationMessage">
        <div class="row">
            <div class="col-lg-1">
                <img height="50" width="50" :src="selectIcon"/>
            </div>
            <div class="col-lg-10">
                <p>{{messageData.communication_type}} from <span class="sender"> {{messageData.first_name}} {{messageData.last_name}}</span></p>
                <div class="messageBody">
                    {{messageData.raw_body}}
                </div>
                <p><span class="timestamp">{{makeDateTime | moment("MMMM Do YYYY")}} at {{makeDateTime | moment("h:mm:ss a")}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
		name:     'conversationMessage',
		props:    ['messageData'],
		computed: {
      makeDateTime(){
        return new Date(Number(this.messageData.timestamp));
      },
			selectIcon() {
				switch (this.messageData.stakeholder_type) {
					case 'Special Education Coordinator':
						return '../../../static/img/teacher.4878cbb.jpg'
						break;
					case 'Primary Guardian':
						return '../../../static/guardian_icon.png'
						break;
					case 'School Administrator':
						return '../../../static/admin_icon.png'
						break;
					case 'General Education Teacher':
						return '../../../static/gened_icon.png'
						break;
					case 'Therapist':
						return '../../../static/medical_icon.png'
						break;
					case 'Translator':
						return '../../../static/medical_icon.png'
						break;
					case 'Health Care Provider':
						return '../../../static/medical_icon.png'
						break;
					case 'Platform Admin':
						return '../../../static/admin_icon.png'
						break;
					case 'Little Bird':
						return '../../../static/little-bird-conversation.png'
						break;
					case 'Additional Guardian':
						return '../../../static/guardian_icon.png'
						break;
					case 'Other Stakeholder':
						return '../../../static/medical_icon.png'
						break;
				}
			},
		}
	}
</script>
<style scoped>
    #conversationList .col-lg-10 {
        padding-left: 0px;
        width: 91%;
    }

    #conversationMessage {
        width: 91%;
        margin: 0 auto;
        margin-bottom: 16px;
    }

    .messageBody {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
        border-radius: 6px;
        padding:       8px;
        margin-top: 8px;
        margin-bottom: 8px;
    }
    img {
        margin-top: 4px;
        border-radius: 25px;
    }
    .sender {
        font-color: #333;
        font-size: 16px;
        font-weight: bold;
    }
    .timestamp {
        font-color: #686669;
        font-size: 12px;
    }
</style>
