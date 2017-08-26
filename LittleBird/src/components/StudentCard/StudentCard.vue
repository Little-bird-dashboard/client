<template>
    <div id="StudentCard">
        <div class="card-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <div class="row">
                            <div class="col-lg-2">
                                <img id="studentPicture" v-bind:src="studentData.profile_img"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6" v-if="studentData">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>
                                    {{ studentData.first_name }} {{ studentData.last_name }}
                                </h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                           <span>
                               <h4>Student ID: </h4><h5>{{ studentData.student_id }}</h5>
                           </span>
                            </div>
                            <div class="col-lg-6">
                             <span>
                               <h4>Grade: </h4><h5>{{ studentData.grade_name }}</h5>
                           </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <h4>Parent: </h4>
                                <h5>
                                    {{parentFirst}} {{parentLast}}
                                </h5>
                            </div>
                            <div class="col-lg-6">
                                <h4>Phone: </h4>
                                <h5>{{parentCell | formatCell}}</h5>
                                <p @click="showModal = true" class="editLink" :class="{ 'hidden' : studentData.id == 1}">
                                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Phone Number
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="row">
                            <div class="col-lg-3 pull-right text-center">
                                <router-link :to="{path:'/dashboard'}"><i class="fa fa-times fa-3x" aria-hidden="true"></i></router-link>
                            </div>
                        </div>
                        <!-- <div class="row">
                            <div class="col-lg-4 pull-right text-center">
                                <button class="btn btn-success h2">Edit</button>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <modal :show.sync="showModal" small>
          <div slot="modal-body" class="modal-body container">
            <div class="form-group" :class="{'has-error' : phoneBlur && isEmpty(cell)}">
              <input type="tel" name="" placeholder="Cell number" @keyup.enter="submitPhone" @blur="phoneBlur = true" v-model="cell">
            </div>
          </div>
          <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click="showModal = false">Exit</button>
            <button type="button" class="btn btn-primary" @click="submitPhone">Submit</button>
          </div>
        </modal>
    </div>
</template>

<script>
import { modal } from 'vue-strap'

	export default {
		name:  'StudentCard',
		props: ['studentData', 'guardianData'],
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
        parentLast: ''
      }
		},
		mounted() {
			console.log("Mounted!")

      // this.findParent();
		},
    watch: {
      guardianData(newData) {
        console.log(newData)
        let parent  = newData.filter(guardian => {
          return guardian.stakeholder_type_id == 2;
        })[0];
        console.log(parent)
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
    methods: {
      formatPhone () {
        let phone = this.cell.replace(/[^0-9]/g, "");
        return `+1${phone}`;
      },
      submitPhone () {
        event.preventDefault();
        if(!this.isEmpty(this.cell)){
        this.showModal = false;
        axios.put(`https:/littlebird-platform.herokuapp.com/students/${this.studentData.id}`, {cell: this.formatPhone()})
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
    #studentPicture {
        clip-path:circle(60px at center);
        width: 120px;
        height: auto;
    }

    h4, h5 {
        display: inline;
    }
    .editLink {
      color: red;
      cursor: pointer;
    }
    .hiddent {
      display: none;
    }
</style>
