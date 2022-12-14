<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store, fetchMovies } from './store';
import axios from 'axios'
export default {
  components : {AppMain, AppHeader},
  data() {
    return {
      store
    }
  },
  computed :{
    
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss">
	@use "./styles/general.scss";
  
  
</style>