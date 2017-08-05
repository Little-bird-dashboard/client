<template>
  <div id="conversationMessage">
    <div class="row">
      <div class="col-lg-1">
        <img />
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
  // computed: {
    // messageDay: function (timestamp){
    //   return moment(this.messageData.timestamp).format('MMMM Do');
    // },
    // messageTime: function (timestamp){
    //   return moment(this.messageData.timestamp).format('h:mm');
    // }
  // }
}
</script>
<style scoped>
.messageBody{
  border: 2px solid gray;
  border-radius:5px;
  padding: 8px;
}
</style>
