<template>
  <div id='AdminPage'>
    <div v-for="student in cards">
      <AdminStudentCard :cardData="student"></AdminStudentCard>
    </div>
  </div>
</template>
<script>
import AdminStudentCard from '../components/admin-components/adminStudentCard'

export default {
  name: 'AdminPage',
  data () {
    return {
      cards: []
    }
  },
  components: {
    AdminStudentCard
  },
  mounted() {
    //do something after mounting vue instance
    axios.get('https://littlebird-platform.herokuapp.com/students/')
      .then(response => {
        console.log(response);
        this.cards = response.data
      })
  },
}
</script>
<style scoped>

</style>
