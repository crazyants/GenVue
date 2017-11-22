<template>
    <div class="animated fadeInDown">
        <!-- Form login -->
        <form v-on:submit.prevent="onLogin">

            <div v-if="error" class="alert alert-danger" role="alert">
                {{error}}
            </div>

            <p class="h3 text-center mb-4">Login</p>

            <div class="md-form">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input type="email" id="inputEmail" v-model="email" class="form-control">
                <label htmlFor="inputEmail">Your email</label>
            </div>

            <div class="md-form">
                <i class="fa fa-lock prefix grey-text"></i>
                <input type="password" id="inputPassword" v-model="password" class="form-control">
                <label htmlFor="inputPassword">Your password</label>
            </div>

            <div class="text-center">
                <button class="btn btn-default" type="submit">Login</button>
                <modal v-if="loggingIn">
                    <h3 slot="header">Logging In</h3>
                    <loading slot="body"></loading>
                    <div slot="footer"><span>Please Wait..</span></div>
                </modal>
            </div>
        </form>
        <!-- Form login -->
    </div>                
</template>


<script>
    import api from '../api/api'
    import loading from './Loading.vue'
    import modal from './Modal.vue'
    export default {
        name: 'Login',
        components: {
            'loading': loading,
            'modal': modal
        },
        data: function () {
            return {
                email: 'admin@genvue.com',
                password: '123PassWord.!',
                loggingIn: false,
                error: null
            }
        },
        methods: {
            onLogin: function () {
                this.loggingIn = true
                var self = this
                api.getToken(this.email, this.password).then(function () {
                    self.$store.commit('login')
                    self.$router.push('/afterlogin')
                }).catch(function (error) {
                    self.loggingIn = false
                    self.error = error
                })
            }
        },
        async created() {
            try {

                console.log('is login...' + this.$store.state.isLoggedIn);

                if (this.$store.state.isLoggedIn) {
                    this.$router.push('/afterlogin')
                }

            } catch (error) {
                console.log('catch login.created error : ' + error)
            }
        }
    }
</script>
