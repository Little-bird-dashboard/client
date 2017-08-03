<template>
    <div id="nav">
        <nav class="navbar bg-primary fixed-top">
            <div class="container">
                <div class="row">
                    <a href="#"> <img width="50" height="43" src="../assets/logo.png" alt="logo" id="logo"></a>
                    <span>Little Bird</span>
                    <div class="navbar-nav pull-right">
                        <div>
                            <span
                                class="top-align"><i class="fa fa-plus fa-inverse fa-3x" aria-hidden="true"></i></span>
                            <span class="top-align"><i
                                class="fa fa-cog fa-inverse fa-3x" aria-hidden="true"></i></span>
                        </div>
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
		methods: {}
	}
</script>

<style>
    #logo {
        margin-left: auto;
    }

    .top-align {
        margin-top:    auto;
        margin-bottom: auto;
    }
</style>
