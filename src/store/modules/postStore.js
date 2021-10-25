
const postStore = {
    namespaced: true,
    state: {
        postList: [],
    },
    getters: {
        GE_POST_LIST: state => state.postList
    },
    mutations: {
        MU_POST: (state, payload) => {
            state.postList = payload
        }
    },
    actions: {
        AC_USER_NAME: ({commit}, payload) => {
            commit('MU_POST_LIST', payload)
        }
    }

}

export default postStore