<template>
    <div id="StudentCard">
        <div class="card-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <img id="studentPicture" width="120" height="120" v-bind:src="studentData.profile_img"/>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>
                                    {{ studentData.first_name }}
                                    {{ studentData.last_name }}
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
<<<<<<< HEAD
                                    {{ studentData.guardian_first_name }}
                                    {{ studentData.guardian_last_name }}
=======
                                    {{findParent.first_name}}
                                    {{findParent.last_name}}
>>>>>>> guardian name and phone populating
                                </h5>
                            </div>
                            <div class="col-lg-6">
                                <h4>Phone: </h4>
<<<<<<< HEAD
                                <h5>{{ studentData.guardian_cell }}</h5>
=======
                                <h5>{{findParent.cell}}</h5>
>>>>>>> guardian name and phone populating
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="row">
                            <div class="col-lg-3 pull-right text-center">
                                <i class="fa fa-times fa-3x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 pull-right text-center">
                                <button class="btn btn-success h2">edit notes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

	export default {
		name: 'StudentCard',
    props: ['studentData', 'guardianData'],
		data() {
			return {
			}
		},
    mounted() {
      //do something after mounting vue instance
      console.log(this.guardianData)
    },
    computed:
      {
        findParent:function () {
          return this.guardianData.filter(guardian => {
            return guardian.stakeholder_type_id == 2;
          })[0]
        }
      }
	};

</script>

<style>
    #studentPicture {
        border-radius: 60px;
    }
    h4, h5 {
        display: inline;
    }
</style>
