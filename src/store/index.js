
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import userStore from '@/store/modules/userStore.js';
import postStore from '@/store/modules/postStore.js';
import sampleStore from '@/store/modules/sampleStore.js';

export default new Vuex.Store({
    modules: {
        userStore: userStore,
        postStore: postStore,
        sampleStore: sampleStore
    }
})
