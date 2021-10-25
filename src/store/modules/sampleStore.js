
const sampleStore = {
    namespaced: true,
    state: {
        message: 'Hello'
    },
    mutations: {
        // changeMessage (state, newMsg) {
        //     state.message = newMsg;
        // }
        MU_MESSAGE: (state, payload) => {
            state.message = payload.newMsg;
        }
    },
    actions: {
        // callMutation({state, commit}, {newMsg}) {
        //     commit('changeMessage', newMsg);
        // }
        AC_MESSAGE: ({commit}, payload) => {
            commit('MU_MESSAGE', payload);
        }
    },
    getters: {
        // getMessage (state) {
        //     return state.message;
        // }
        GE_MESSAGE: state => state.message
    }
};

export default sampleStore;