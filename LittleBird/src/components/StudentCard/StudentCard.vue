<template>
    <div id="StudentCard">
        <div class="card-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <div class="row">
                            <div class="col-lg-2">
                                <img id="studentPicture" width="auto" height="120" v-bind:src="studentData.profile_img"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
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
                                    {{findParent.first_name}} {{findParent.last_name}}
                                </h5>
                            </div>
                            <div class="col-lg-6">
                                <h4>Phone: </h4>
                                <h5>{{formatCell}}</h5>
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
            <div class="form-group" :class="{'has-error' : phoneBlur && isEmpty(editPhone)}">
              <input type="tel" name="" placeholder="Cell number" @keyup.enter="submitPhone" @blur="phoneBlur = true" v-model="editPhone">
            </div>
          </div>
          <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click="showModal = false">Exit</button>
            <button type="button" class="btn btn-success" @click="formatPhone">Submit</button>
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
        editPhone: '',
        phoneBlur: false
      }
		},
		mounted() {
			//do something after mounting vue instance
		},
    methods: {
      formatPhone () {
        let phone = this.editPhone.replace(/[^0-9]/g, "");
        return `+1${phone}`;
      },
      submitPhone () {
        event.preventDefault();
        this.showModal = false;
        axios.put(`https:/littlebird-platform.herokuapp.com/students/${this.studentData.id}`, this.formatPhone())
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          alert(err);
        })
        this.editPhone = ''
      },
      isEmpty (value) {
        return value.trim() === '';
      }
    },
		computed:
		       {
			       findParent: function () {
				       return this.guardianData.filter(guardian => {
					       return guardian.stakeholder_type_id == 2;
				       })[0]
			       },
			       formatCell: function () {
				       return this.findParent.cell.substring(2).replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
			       }
		       }
	};

</script>

<style>
    #studentPicture {
        clip-path:circle(60px at center);
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
