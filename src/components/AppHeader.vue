<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-between">
      <h1 class="py-5 text-center text-danger ">Boolflix</h1>
      <form class="d-flex" @submit.prevent="onSearchClick">
        <input type="text" class="form-control" v-model="searchText" />
        <button class="btn btn-light">Search</button>
      </form>
    </div>
  </div>
</template>
<script>
import { store, fetchMovies, fetchTvSeries } from "../store";
export default {
  data() {
    return {
      store,
      searchText: "",
    };
  },
  methods: {
    onSearchClick() {
      this.store.searchText = this.searchText;
      fetchMovies();
      fetchTvSeries();
    },
  },
};
</script>

<style scoped lang="scss">

</style>
