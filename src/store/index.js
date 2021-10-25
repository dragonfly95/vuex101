
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'Hello'
    },
    mutations: {
        changeMessage (state, newMsg) {
            state.message = newMsg;
        }
    },
    actions: {
        callMutation({state, commit}, {newMsg}) {
            commit('changeMessage', newMsg);
        }
    },
    getters: {
        getMessage (state) {
            return state.message;
        }
    }
})
