<template>
  <div id="app">
    <Header/>
    <label>{{ getMsg }}</label>
    <button @click="onChangeMsg">click</button>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'

import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    // getMsg() {
    //   return this.$store.getters.getMsg
    // }
    ...mapGetters('sampleStore', [
      'GE_MESSAGE'
    ]),
    getMsg() {
      return this.GE_MESSAGE;
    }

  },
  methods: {
    // onChangeMsg () {
    //   this.$store.dispatch('callMutation', { newMsg: 'World!!'})
    // }
    ...mapActions('sampleStore', [
      'AC_MESSAGE'
    ]),

    onChangeMsg () {
      this.AC_MESSAGE({newMsg: 'World!!'});
    }
  }
}
</script>

<style>
html,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
