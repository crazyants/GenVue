<template>
  <div>
      <!-- Form login -->
      <form v-on:submit.prevent="onSubmit">
          <div v-if="isConfirmed" class="alert alert-success" role="alert">
              Your email address has been successfully confirmed.
          </div>
          <div v-if="isExpired" class="alert alert-info" role="alert">
              <strong>Sesion Expired</strong> You need to sign in again.
          </div>
          <div v-if="isSignedOut" class="alert alert-info" role="alert">
              <strong>Signed Out</strong>
          </div>
          <div v-if="error" class="alert alert-danger" role="alert">
              {{error}}
          </div>

          <p class="h5 text-center mb-4">Sign in</p>

          <div class="md-form">
              <i class="fa fa-envelope prefix grey-text"></i>
              <input type="email" id="inputEmail" v-model="username" class="form-control">
              <label htmlFor="inputEmail">Your email</label>
          </div>

          <div class="md-form">
              <i class="fa fa-lock prefix grey-text"></i>
              <input type="password" id="inputPassword" v-model="password" class="form-control">
              <label htmlFor="inputPassword">Your password</label>
          </div>

          <div class="text-center">
              <button class="btn btn-default">Login</button>
          </div>
      </form>
      <!-- Form login -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AuthService from '../services/Auth';

@Component
export default class SignIn extends Vue {
  username: string = "admin@genvue.com";
  password: string = "123PassWord.!";
  error: string = null;

  get isConfirmed() {
    return this.$route.query.confirmed;
  }

  get isExpired() {
    return this.$route.query.expired;
  }

  get isSignedOut() {
    return this.$route.query.signedOut;
  }

  onSubmit() {
    let authService = new AuthService();
    authService.signIn(this.username, this.password).then(response => {
      if (!response.is_error) {
        this.$router.push({ path: '/contacts' });
      } else {
        this.error = response.error_content.error_description;
      }
    });
  }

}
</script>

<style scoped lang="stylus">
</style>
