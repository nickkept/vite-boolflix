<template>
  <header class="bg-black">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" class="mt-4" alt="">
        <form class="d-flex" @submit.prevent="onSearchClick">
          <input type="text" class="form-control" placeholder="I`m looking for:" v-model="searchText" />
          <button class="btn btn-light ms-3" >Search</button>
        </form>
      </div>
    </div>
  </header>
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
      this.$emit("search", ...this.searchText)
    },
    
  },
};
</script>

<style scoped lang="scss">

</style>
