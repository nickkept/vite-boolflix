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
  <div v-for="(film,i) in store.moviesList" :key="i" >
    <AppCardMovie :film="film"></AppCardMovie>
  </div>
  <div v-for="(series,i) in store.seriesList" :key="i" >
    <AppCardTv :series="series"></AppCardTv>
  </div>
</template>

<style scoped lang="scss"></style>
