<template>
    <div id="nav">
        <nav class="navbar bg-primary fixed-top sticky-top">
            <div class="container">
                <div class="row">
                    <a href="#"> <img class="icon" width="50" height="43" src="../../../static/logo.png" alt="logo"
                        id="logo"></a> <span
                    id="title">Little Bird</span>
                    <div class="navbar-nav pull-right">
                      <button type="button" class="btn btn-primary" @click="showCustomModal = true"><i class="fa fa-plus fa-inverse fa-3x" aria-hidden="true"></i></button>
                        <!--
                        <a><span class="top-align icon" id="cog"><i
                            class="fa fa-cog fa-inverse fa-3x icon" aria-hidden="true"></i></span></a> <a><span
                        class="top-align icon"> -->
                               <img id="teacher-img" class="icon" src="../../../static/teacher.jpg" alt="logo">
                        </span></a>
                    </div>
                </div>
            </div>
        </nav>
        <modal :show.sync="showCustomModal" effect="fade" width="400">
          <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">
              Add Student
            </h4>
          </div>
          <div slot="modal-body" class="modal-body">
            <label>Cell Phone Number: </label>
            <input label="phone number" type="tel" v-model="cell">
            </input>
          </div>
          <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click="showCustomModal = false">Exit</button>
            <button type="button" class="btn btn-success" @click="addStudent">Add Student</button>
          </div>
        </modal>
    </div>
</template>

<script>
import { modal } from 'vue-strap';

	export default {
		name:    'Navigation',
    components: {
      modal
    },
		data() {
			return {
				title: 'Little Bird',
        showCustomModal: false,
        cell: ''
			}
		},
		methods: {
      addStudent() {
        this.showCustomModal = false;
        axios.post('http://littlebird-platform.herokuapp.com/students/add', this.cell)
        .then(respose => {
          window.location.reload();
        });
      }
    }
	}
</script>

<style>
    #title {
        font-size: 24px;
    }
    #teacher-img {
        margin-right: 40px;
        clip-path:circle(30px at 30px);
        margin-bottom: 10px;
        width: auto;
        height: 60px;
    }
    .icon {
        margin: 5px;
    }
    #logo {
        margin-left: 20px;
    }
    #cog {
        margin-right: 20px;
    }
    .top-align {
        margin-top:    auto;
        margin-bottom: auto;
    }
</style>
