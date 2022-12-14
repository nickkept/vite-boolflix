<template>
<div class="card text-bg-dark" style="width: 18rem;">
    <img :src="'https://image.tmdb.org/t/p/' + 'w342' + film.poster_path" alt="" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">Title: {{film.title}}</h5>
        <p class="card-text">Original Title: {{film.original_title}}</p>
        <p class="card-text">Language: <span v-if="language()" :class="language()"></span> <span v-else class="flag-icon flag-icon-xx">{{film.original_language}}</span></p>
        <p class="card-text">Average Rating: {{film.vote_average}}</p>
        <p class="card-text">Overview:{{film.overview}}</p>
    </div>
</div>
</template>
<script>
import { store } from '../store';
export default {
    name:"AppCardMovie.vue",
    props:{
        film:{
            type:Object
        }
    },
    data(){
        return {
            store
        }
    },
    methods:{
        language(){
        if(this.film.original_language === "it"){
            return "flag-icon flag-icon-it"
        } else if (this.film.original_language === "ja"){
            return "flag-icon flag-icon-jp"
        }else if (this.film.original_language === "tr"){
            return "flag-icon flag-icon-tr"
        }else if (this.film.original_language === "uk"){
            return "flag-icon flag-icon-uk"
        }else if (this.film.original_language === "es"){
            return "flag-icon flag-icon-es"
        }else if (this.film.original_language === "en"){
            return "flag-icon flag-icon-gb"
        }else if (this.film.original_language === "fr"){
            return "flag-icon flag-icon-fr"
        }else if (this.film.original_language === "de"){
            return "flag-icon flag-icon-de"
        }else {
            return false 
        } 
    }
}
}
</script>
<style scoped lang="scss">
.card{
    // height: 380px;
    // overflow: hidden;
    // position: relative;
    :hover{
        // overflow: auto;
        // display: none;
        .card-body{
            // display: block;
        }
    }
    img{
        height: 380px;
        object-fit: fill;
        // display: block;
        // :hover{
        //     display: none;
        // }
    }
    .card-body{
        // position: absolute;
        // display: none;
        // visibility: hidden;
        :hover{
            // visibility: visible;
            // z-index: 10;
            // display: block;
            // overflow: auto;
        }
    }
}

</style>
