<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store, fetchMovies, fetchTvSeries } from './store';
import axios from 'axios'
export default {
  components : {AppMain, AppHeader},
  data() {
    return {
      store
    }
  },
  computed :{
    
  },
  methods:{
    onSearch(searchTextEmitted) {
      this.store.searchTextSt = searchTextEmitted;
      fetchMovies();
      fetchTvSeries();
      console.log(searchTextEmitted);
    }
  }
}
</script>

<template>
  <AppHeader @search="onSearch"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss">
	@use "./styles/general.scss";
  
  
</style>