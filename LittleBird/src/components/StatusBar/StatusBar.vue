<template>
    <div id="StatusBar">
        <nav class="navbar bg-primary">
            <div class="container">
                <div class="row">
                    <div class="navbar-nav">
                        <div class="col-lg-4">
                            <a class="navbar-brand" href="#">Hogwarts University</a>
                        </div>
                        <div class="col-lg-4">
                            <form class="form-inline mt-2 mt-md-0">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                            <div class="col-lg-4">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
	import student_data from '../lib/student_data'
	export default {
		name: 'StatusBar'
	}
</script>

<style>

</style>
