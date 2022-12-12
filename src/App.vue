<template></template>
<script>
import { store} from "./store";
import axios from "axios";

export default {
  // components: {CharacterList,FilterBanner },
  data() {
    return {
      store
    };
  },
  created() {
      axios.get("https://api.themoviedb.org/3/search/movie",{
          params:{
              api_key: "54bc7a33b220ba1f0937049acf190b4b",
          }
      } )
          .then(resp => {
              console.log(resp.data);
          })   
  }
}  
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>
