<template>
<div class="card text-bg-dark" style="width: 18rem;">
    <img :src="'https://image.tmdb.org/t/p/' + 'w342' + film.poster_path" alt="" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">{{film.title}}</h5>
        <p class="card-text">{{film.original_title}}</p>
        <p class="card-text">{{film.overview}}</p>
        <p class="card-text">{{film.original_language}}</p>
        <p class="card-text">{{film.vote_average}}</p>
    </div>
</div>
</template>
<script>
export default {
    name:"AppCardMovie.vue",
    props:{
        film:{
            type:Object
        }
    },
    data(){
        return store
    }
};
</script>
<style></style>
