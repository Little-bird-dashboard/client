<template>
  <div id="conversationMessage">
    <div class="row">
      <div class="col-lg-1">
        <img />
      </div>
      <div class="col-lg=11">
        <h4>{{messageData.communication_type}} from {{messageData.first_name}} {{messageData.last_name}}</h4>
        <div class="messageBody">
          {{messageData.raw_body}}
        </div>
        <small>{{moment(messageData.timestamp).format('MMMM Do')}} at {{moment(messageData.timestamp).format('h:mm a')}}</small>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'conversationMessage',
  props: ['messageData']
  data () {

  }
}
</script>
<style scoped>
.messageBody{
  corner-radius:10px;
}
</style>
