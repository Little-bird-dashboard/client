import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const state = {
  apiURL: 'https://littlebird-platform.herokuapp.com/',
  devURL: 'http://localhost:3000/studentList/',
  students: []
}

const mutations = {
  students(state, students) {
    state.students = students;
  }
}

const actions = {
  getStudentList({ commit }) {
    let token = window.sessionStorage.getItem('token')
    let userId = JSON.parse(window.localStorage.getItem('load')).id
    axios({
      method: 'get',
      url: `${state.apiURL}studentList/${userId}`,
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then(response => {
      commit('students', response.data)
    })
  }
}

const getters = {
  activeStudents(id) {
    return state.students.filter(function(student) {
      return student.grade_type_id != id;
    })
    .sort((a, b) => {
      return a.id - b.id;
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
