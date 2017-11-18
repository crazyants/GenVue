<template>
    <div>
        <!--Main Navigation-->
        <header>

            <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                <div class="container">
                    <a class="navbar-brand" href="#"><strong>NetCore 2 and Vue.js</strong></a>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Opinions</a>
                            </li>
                        </ul>

                        <button class="btn btn-outline-warning my-2 my-sm-0" type="button" v-on:click="signOut">Sign out</button>
                    </div>
                </div>
            </nav>

        </header>
        <!--Main Navigation-->

        <main>
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
</div>  
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AuthService from '../services/Auth';

@Component
export default class DefaultLayout extends Vue {
  signOut() {
    let authService = new AuthService();
    authService.signOut();
    this.$router.push({ path: '/?signedOut=1' });
  }
}
</script>

<style>
    body {
        background-color: #fff;
    }

    .navbar {
        background-color: #6f7782;
    }

    main {
        padding-top: 70px;
    }
</style>
