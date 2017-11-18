<template>
  <router-view>
  </router-view>
</template>

<script lang="ts">
// Polyfills
import 'whatwg-fetch';
import './polyfills/object-assign';
import './polyfills/array-find';
import './polyfills/string-startsWith';


import Vue from 'vue';
import Component from 'vue-class-component';
import AuthService from './services/Auth';

@Component
export default class App extends Vue { }
</script>

<style lang="stylus">

/*
 * Global App Styles
 */

@import '../node_modules/font-awesome/css/font-awesome.css'; 
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import 'styles/css/mdb.css';


</style>



