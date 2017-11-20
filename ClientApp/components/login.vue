<template>
    <div>
        <form id="loginForm" name="loginForm">
            <h2>Login</h2>
            <fieldset>
                <div>
                    <div>
                        <input v-model="email" type="text" max="100" placeholder="Email address" autofocus="" value="admin@genvue.com" />
                        <input v-model="password" type="password" max="100" placeholder="Password" value="123PassWord.!"/>
                    </div>
                </div>
                <div v-if="error" class="error">
                    {{ error }}
                </div>
                <p>
                    <button v-on:click.prevent="login">Login</button>
                    <modal v-if="loggingIn">
                        <h3 slot="header">Logging In</h3>
                        <loading slot="body"></loading>
                        <div slot="footer"><span>Please Wait..</span></div>
                    </modal>
                </p>
            </fieldset>
        </form>
    </div>
</template>

<script>
    import api from '../api/api'
    import loading from './loading.vue'
    import modal from './modal.vue'

    export default {
        name: 'Login',
        components: {
            'loading': loading,
            'modal': modal
        },
        data: function () {
            return {
                email: '',
                password: '',
                loggingIn: false,
                error: null
            }
        },
        methods: {
            login: function () {
                this.loggingIn = true
                var self = this
                api.getToken(this.email, this.password).then(function () {
                    self.$store.commit('login')
                    self.$router.push('/statistics')
                }).catch(function (error) {
                    self.loggingIn = false
                    self.error = error
                })
            }
        }
    }

</script>
