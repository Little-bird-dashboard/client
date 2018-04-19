import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const state = {
  apiURL: 'https://littlebird-platform.herokuapp.com/',
  devURL: 'http://localhost:3000/studentList/',
  students: [],
  currentStudent: {
    data: null,
    stakeholders: null,
    communications: null
  },
  studentReady: false
};

const mutations = {
  students(state, students) {
    state.students = students;
  },
  currentStudentData (state, student) {
    state.currentStudent.data = student;
  },
  currentStudentStakeholders (state, stakeholders) {
    state.currentStudent.stakeholders = stakeholders;
  },
  currentStudentCommunications (state, communications) {
    state.currentStudent.communications = communications;
  },
  studentReady (state) {
    state.studentReady = true;
  }
};

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
  },
  getStudentData ({ commit, dispatch }, id) {
    dispatch('getStudent', id);
    dispatch('getStudentStakeholders', id);
    dispatch('getStudentCommunications', id);
  },
  getStudent({ commit, dispatch }, id) {
    axios.get(`${state.apiURL}students/${id}`)
      .then(response => {
        commit('currentStudentData', response.data[0]);
        dispatch('checkStudentData');
    });
  },
  getStudentStakeholders ({ commit, dispatch }, id) {
    axios.get(`${state.apiURL}students/${id}/stakeholders`)
      .then(response => {
        commit('currentStudentStakeholders', response.data);
        dispatch('checkStudentData');
    });
  },
  getStudentCommunications ({ commit, dispatch }, id) {
    axios.get(`${state.apiURL}students/${id}/communications`)
      .then(response => {
        commit('currentStudentCommunications', response.data);
        dispatch('checkStudentData');
    });
  },
  checkStudentData({ commit }) {
    if (state.currentStudent.data && state.currentStudent.stakeholders && state.currentStudent.communications){
      commit('studentReady');
    }
  }
};

const getters = {
  activeStudents(state) {
    return (id) => {
      return state.students.filter(function(student) {
        return student.grade_type_id != id;
      })
      .sort((a, b) => {
        return a.id - b.id;
      });
    }
  },
  currentStudentData(state) {
    return state.currentStudent.data;
  },
  currentStudentStakeholders(state) {
    return state.currentStudent.stakeholders;
  },
  currentStudentCommunications(state) {
    return state.currentStudent.communications;
  },
  studentReady(state){
    return state.studentReady;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
