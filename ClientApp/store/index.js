import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER'

// STATE
const state = {
    isLoggedIn: false,
    contacts : null,
    counter: 0
}

// MUTATIONS
const mutations = {
    [MAIN_SET_COUNTER](state, obj) {
        state.counter = obj.counter
    },
    login(state) {
        state.isLoggedIn = true
    },
    logout(state) {
        state.isLoggedIn = false
    },
    setContacts(state, contacts) {
        state.contacts = contacts
    }
}

// ACTIONS
const actions = ({
    setCounter({ commit }, obj) {
        commit(MAIN_SET_COUNTER, obj)
    }
})

// GETTERS


export default new Vuex.Store({
    state,
    mutations,
    actions
});
