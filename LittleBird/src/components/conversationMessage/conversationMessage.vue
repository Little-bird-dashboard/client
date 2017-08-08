<template>
  <div id="conversationMessage">
    <div class="row">
      <div class="col-lg-1">
        <img :src="selectIcon"/>
      </div>
      <div class="col-lg-11">
        <h6>{{messageData.communication_type}} from {{messageData.first_name}} {{messageData.last_name}}</h6>
        <div class="messageBody">
          {{messageData.raw_body}}
        </div>
        <!-- <small>{{messageDay(messageData.timestamp)}} at {{messageTime(messageData.timestamp)}}</small> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'conversationMessage',
  props: ['messageData'],
  computed: {
    // messageDay: function (timestamp){
    //   return moment(this.messageData.timestamp).format('MMMM Do');
    // },
    // messageTime: function (timestamp){
    //   return moment(this.messageData.timestamp).format('h:mm');
    // },
    selectIcon(){
      switch(this.messageData.stakeholder_type){
        case 'Special Education Coordinator':
          return '../../assets/user_icon.png'
          break;
        case 'Primary Guardian':
          console.log('found primary')
          return '../../assets/guardian_icon.png'
          break;
        case 'School Administrator':
          return '../../assets/adim_icon.png'
          break;
        case 'General Education Teacher':
          return '../../assets/gened_icon.png'
          break;
        case 'Therapist':
          return '../../assets/medical_icon.png'
          break;
        case 'Translator':
          return '../../assets/medical_icon.png'
          break;
        case 'Health Care Provider':
          return '../../assets/medical_icon.png'
          break;
        case 'Platform Admin':
          return '../../assets/admin_icon.png'
          break;
        case 'Little Bird':
          console.log('found little bird')
          return '../../assets/littlebird_icon.png'
          break;
        case 'Additional Guardian':
          return '../../assets/guardian_icon.png'
          break;
        case 'Other Stakeholder':
          return '../../assets/medical_icon.png'
          break;
      }
    }
  }
}
</script>
<style scoped>
.messageBody{
  border: 2px solid gray;
  border-radius:5px;
  padding: 8px;
}
</style>
