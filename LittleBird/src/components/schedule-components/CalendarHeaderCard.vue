<template>
  <div id="CalendarHeaderCard">
      <div class="card">
        <div class="row">
          <div class="col-lg-2 text-center">
            <img id="studentPicture" width="auto" height="120" v-bind:src="studentData.profile_img"/>
          </div>
          <div class="col-lg-10 text-left">
            <h3>{{ studentData.first_name}} {{studentData.last_name}}</h3>
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
    clip-path:circle(60px at center)
}
</style>
