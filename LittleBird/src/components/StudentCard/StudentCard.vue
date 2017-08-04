<template>
    <div id="StudentCard">
        <div class="card-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <img id="studentPicture" width="120" height="120" v-bind:src="this.student.data['profile_img']"/>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>
                                    {{ this.student.data['first_name'] }}
                                    {{ this.student.data['last_name'] }}
                                </h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                           <span>
                               <h4>Student ID: </h4><h5>{{this.student.data['student_id']}}</h5>
                           </span>
                            </div>
                            <div class="col-lg-6">
                             <span>
                               <h4>Grade: </h4><h5>{{this.student.data['grade_name']}}</h5>
                           </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <h4>Parent: </h4>
                                <h5>
                                    {{this.student.data['guardian_first_name']}}
                                    {{this.student.data['guardian_last_name']}}
                                </h5>
                            </div>
                            <div class="col-lg-6">
                                <h4>Phone: </h4>
                                <h5>{{this.student.data['guardian_cell']}}</h5>
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
	import axios from 'axios'
	export default {
		name: 'StudentCard',
		data() {
			return {
				studentId: this.$route.params.student_id,
                student: {
                }

			}

		},
		methods() {
			return {
	    	}
		},
		mounted() {


            console.log(this.student.data)
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
