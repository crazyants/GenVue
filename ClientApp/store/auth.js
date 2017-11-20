import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// STATE
const state = {
    user: {
        userName: '',
        loggedInStatus: true,
        authToken: ''
    }
}

// MUTATIONS
const mutations = {
    addWebToken: function (state, webToken) {
        state.user.authToken = webToken;
    },
    removeWebToken: function (state) {
        state.user.authToken = '';
    }
}

// ACTIONS
const actions = ({
    login: function (context, userInput) {
        $.ajax({
            url: "/api/login",
            type: "POST",
            async: false,
            data: {
                username: userInput.username,
                password: userInput.password
            },
            success: function (data) {
                // store the token in global variable ??

                context.commit('addWebToken', webToken); // pass the webtoken as payload to the mutation

                router.push({
                    path: '/employeeList',
                });
            },
            error: function (xhr, status, error) {

                _this.errorMessage = xhr.responseText
            }
        });
    },
    logout: function (context) {
        //your logout functionality
        context.commit('removeWebToken');
    }
})  

export default new Vuex.Store({
    state,
    mutations,
    actions
});
