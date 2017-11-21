<template>
  <div>

    <!--Panel-->
    <div class="card">
        <div class="card-header deep-orange lighten-1 white-text">
            Counter
        </div>
        <div class="card-body">
            <h4 class="card-title">This is a simple example of a Vue.js component & Vuex</h4>
            <p class="card-text">No login required.</p>

            <p>
                Current count (Vuex): <strong>{{ currentCount }}</strong>
            </p>
            <p>
                Auto count: <strong>{{ autoCount }}</strong>
            </p>

            <button class="btn btn-primary" @click="incrementCounter()">Increment</button>
            <button class="btn btn-info" @click="resetCounter()">Reset</button>

        </div>
    </div>
    <!--/.Panel-->

  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
  data() {
  return {
  autoCount: 0,
  }
  },

  computed: {
  ...mapState({
  currentCount: state => state.counter
  })
  },

  methods: {
  ...mapActions(['setCounter']),

  incrementCounter: function() {
  var counter = this.currentCount + 1;
  this.setCounter({counter: counter});
  },
  resetCounter: function() {
  this.setCounter({counter: 0});
  this.autoCount = 0;
  }
  },

  created() {
  setInterval(() => {
  this.autoCount += 1
  }, 1000)
  }
  }
</script>

<style>
</style>
