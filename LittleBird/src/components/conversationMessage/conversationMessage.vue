<template>
    <div id="conversationMessage">
        <div class="row">
            <div class="col-lg-1">
                <img height="50" width="50" :src="selectIcon"/>
            </div>
            <div class="col-lg-10">
                <h6>{{messageData.communication_type}} from {{messageData.first_name}} {{messageData.last_name}}</h6>
                <div class="messageBody">
                    {{messageData.raw_body}}
                </div>
                <small>{{makeDateTime | moment("MMMM Do YYYY")}} at {{makeDateTime | moment("h:mm:ss a")}}</small>
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
						return '../../../static/user_icon.png'
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
						return '../../../static/littlebird_icon.png'
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
    .messageBody {
        border:        2px solid gray;
        border-radius: 5px;
        padding:       8px;
    }
</style>
