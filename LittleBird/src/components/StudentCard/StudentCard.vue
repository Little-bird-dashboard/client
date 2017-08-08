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
		name:  'StudentCard',
		props: ['studentData', 'guardianData'],
		data() {
			return {}
		},
		mounted() {
			//do something after mounting vue instance
			console.log(this.guardianData)
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
</style>
