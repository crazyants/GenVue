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
                            <li class="nav-item">
                                <router-link class="nav-link" to="/counter">Counter</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/fetch-data">Weather</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/contacts-data">Contacts</router-link>
                            </li>
                        </ul>   

                        <div v-show="$store.state.isLoggedIn">
                            <button class="btn btn-outline-warning my-2 my-sm-0" type="button" v-on:click="logout">Logout</button>
                        </div>
                        <div v-show="!$store.state.isLoggedIn">
                            <button class="btn btn-outline-default my-2 my-sm-0" type="button" v-on:click="login">Login</button>
                        </div>
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

<script>
import Vue from 'vue'

export default {
    data() {
        return {
        }
    },

    methods: {
        login() {
            console.log('login called.');
            this.$router.push({ path: '/login' });
        },
        logout() {
            console.log('logout called.')
            this.$store.commit('logout')
            this.$router.push('/')
        }
    },

    async created() {
        try {

            console.log('is login...' + this.$store.state.isLoggedIn);

            if (!this.$store.state.isLoggedIn) {
                console.log('not logged');
               // this.$router.push('/login')
            } else {
                console.log('logged');
            }

        } catch (error) {
            console.log('catch getContacts error : ' + error)
        }
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
        padding-top: 100px;
    }
</style>
