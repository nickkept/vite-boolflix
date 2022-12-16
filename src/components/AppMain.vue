<script>
import { store } from "../store";
import AppCardMovie from "./AppCardMovie.vue"
import AppCardTv from "./AppCardTv.vue"
export default {
  components:{AppCardMovie,AppCardTv},
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center fw-bold my-4">Movies:</h1>
    <div class="d-flex flex-wrap gap-4">
      <div v-for="(film,i) in store.moviesList" :key="i" >
        <AppCardMovie :film="film"></AppCardMovie>
      </div>
    </div>
    <h1 class="text-center fw-bold my-4">Tv Series:</h1>
    <div class="d-flex flex-wrap gap-4">
      <div  v-for="(series,i) in store.seriesList" :key="i" >
        <AppCardTv :series="series"></AppCardTv>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  
</style>
