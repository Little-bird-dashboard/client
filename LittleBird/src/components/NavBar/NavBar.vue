<template>
    <div id="nav">
        <nav class="navbar bg-primary fixed-top sticky-top">
            <div class="container">
                <div class="row">
                    <a href="#"> <img class="icon" width="50" height="43" src="../../../static/logo.png" alt="logo"
                        id="logo"></a> <span
                    id="title">Little Bird</span>
                    <div class="navbar-nav pull-right">
                        <!-- <a><span
                            class="top-align icon"><i class="fa fa-plus fa-inverse fa-3x" aria-hidden="true"></i></span></a>
                        <a><span class="top-align icon" id="cog"><i
                            class="fa fa-cog fa-inverse fa-3x icon" aria-hidden="true"></i></span></a> <a><span
                        class="top-align icon"> -->
                               <img id="teacher-img" class="icon" src="../../../static/teacher.jpg" alt="logo">
                        </span></a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
	export default {
		name:    'Navigation',
		data() {
			return {
				title: 'Little Bird'
			}
		},
		methods: {
      addStudent() {

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
