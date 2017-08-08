<template>
  <div id="CalendarHeaderCard">
      <div class="card">
        <div class="row">
          <div class="col-lg-2">
            <img id="studentPicture" width="80" height="80" v-bind:src="studentData.profile_img"/>
          </div>
          <div class="col-lg-10">
            <h3>{{ studentData.first_name}} {{studentData.last_name}}</h3
              <p><i class="fa fa-map-marker" aria-hidden="true"></i> Hogwarts Elementary</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "CalendarHeaderCard",
  props: ['studentData'],
  data () {
    return {}
  }
}
</script>
<style scoped>
#studentPicture {
    border-radius: 40px;
}
</style>
