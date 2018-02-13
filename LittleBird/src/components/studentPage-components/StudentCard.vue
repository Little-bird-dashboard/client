<template>
    <div id="StudentCard" class="container text-center">
      <div class="dash-button">
          <router-link :to="{path:'/dashboard'}"><img id="icon-large" src="/static/cross.svg"></router-link>
      </div>
      <div class="row" v-if="studentData">
        <div class="col-lg-2">
            <img id="studentPicture" v-bind:src="studentData.profile_img"/>
        </div>

          <div class="col-lg-10">
            <div>
                <h1>
                    {{ studentData.first_name }} {{ studentData.last_name }}
                </h1>
            </div>
            <div class="row"
              <div class="col-lg-4">
               <span>
                 <h4>Student ID: </h4><h5>{{ studentData.student_id }}</h5>
               </span><br />
               <span>
                 <h4>Grade: </h4><h5>{{ studentData.grade_name }}</h5>
               </span>
              </div>
              <div class="col-lg-4">
                <h4>Parent: </h4>
                <h5>
                    {{parentFirst}} {{parentLast}}
                </h5><br />
                <h4>Phone: </h4>
                <h5>{{parentCell | formatCell}}</h5>
                <p @click="showModal = true" class="editLink" :class="{ 'hidden' : studentData.id != 13}"><img id="icon-small" src="/static/edit.svg"> Edit Phone Number
                </p>
              </div>
              <div class="col-lg-4">
                <h4>Stakeholders</h4><br />
                <p class="stakeholders" @click="flipStakeholderListToggle">{{stakeholderDisplay}} + {{stakeholerCount}} more  <i v-if="!stakeholderListShow" class="fa fa-angle-down" aria-hidden="true"></i><i v-if="stakeholderListShow" class="fa fa-angle-up" aria-hidden="true"></i></p>
              </div>
            </div>
            </div>
            <!-- <div class="row">
                <div class="col-lg-4 pull-right text-center">
                    <button class="btn btn-success h2">Edit</button>
                </div>
            </div> -->
        <modal :show.sync="showModal" small>
          <div slot="modal-body" class="modal-body container">
            <div class="form-group" :class="{'has-error' : phoneBlur && isEmpty(cell)}">
              <input type="tel" name="" placeholder="Cell number" @blur="phoneBlur = true" v-model="cell" @keyup.enter="none">
            </div>
          </div>
          <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click="showModal = false">Exit</button>
            <button type="button" class="btn btn-primary" @click.prevent="submitPhone">Submit</button>
          </div>
        </modal>
    </div>
</template>

<script>
import { modal } from 'vue-strap'

	export default {
		name:  'StudentCard',
		props: {
      studentData: {
        type: Object,
        required: false,
      },
      guardianData: {
        type: Array,
        required: false,
      },
      flipStakeholderListToggle: {
        type: Function,
        required: false
      },
      stakeholderListShow: {
        type: Boolean,
        required: false
      }
    },
    components: {
      modal
    },
		data() {
			return {
        showModal: false,
        cell: '',
        phoneBlur: false,
        parentCell: '',
        parentFirst: '',
        parentLast: '',
      }
		},
    watch: {
      guardianData(newData) {
        let parent  = newData.filter(guardian => {
          return guardian.stakeholder_type_id == 2;
        })[0];
        this.parentCell = parent.cell;
        this.parentFirst = parent.first_name;
        this.parentLast = parent.last_name;
      }
    },
    filters: {
      formatCell(phone) {
        return phone.substring(2).replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      }
    },
    computed: {
      stakeholerCount () {
        return this.guardianData.length - 2;
      },
      stakeholderDisplay () {
        return `${this.guardianData[0].first_name} ${this.guardianData[0].last_name}`;
      },
      // parentFilter () {
      //   return this.guardianData.filter(guardian => {
      //      return guardian.stakeholder_type_id == 2;
      //    })[0];
      // },
      // parentCell () {
      //   return this.parentFilter.cell;
      // },
      // parentName () {
      //   return `${this.parentFilter.first_name} ${this.parentFilter.last_name}`
      // }
    },
    methods: {
      formatPhone () {
        let phone = this.cell.replace(/[^0-9]/g, "");
        return `+1${phone}`;
      },
      submitPhone () {
        if(!this.isEmpty(this.cell)){
          this.showModal = false;
          axios.put(`https://littlebird-platform.herokuapp.com/students/${this.studentData.id}`, {cell: this.formatPhone()})
          .then(response => {
            this.parentCell = response.data.guardian[0].cell;
          })
          .catch(err => {
            alert(err);
          })
          this.cell = ''} else {
            alert('Please enter a phone number.')
        }
      },
      isEmpty (value) {
        return value.trim() === '';
      },
      // findParent: function () {
      //
      // }
    }
	};

</script>

<style scoped>
    #StudentCard {
    }
    .grid-row {
      display: grid;
      grid-template-columns: repeat(3, 50%);
      grid-gap: 5%;
      margin-top: 10px;
    }
    #studentPicture {
        clip-path:circle(50px at center);
        width: 100px;
        height: auto;
        margin-top: 32px;
        margin-left: 56px;
    }
    h1 {
        margin-top: 32px;
    }
    h4, h5 {
        display: inline;
    }
    .editLink {
      cursor: pointer;
    }
    .hiddent {
      display: none;
    }
    .student-picture-wrapper {
      width: 50%;
      margin: 0 auto;
    }
    .dash-button {
      float: right;
    }
    img#icon-large {
        width: 32px;
        height: 32px;
        border-radius: 0px;
        margin-top: 32px;
        vertical-align: middle;
    }
    img#icon-small {
        width: 16px;
        height: 16px;
        border-radius: 0px;
        margin-top: 0px;
        margin-right: 4px;
    }
    .stakeholders {
        cursor: pointer;
    }
</style>
