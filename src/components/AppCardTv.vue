<template>
    <div class="card text-bg-dark" style="width: 18rem;">
        <img :src="'https://image.tmdb.org/t/p/' + 'w342' + series.poster_path" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{series.name}}</h5>
            <p class="card-text">{{series.original_name}}</p>
            <p class="card-text">{{series.overview}}</p>
            <p class="card-text">{{series.original_language}}</p>
            <p class="card-text">{{series.vote_average}}</p>
        </div>
    </div>
    </template>
    <script>
    export default {
        name:"AppCardTv.vue",
        props:{
            series:{
                type:Object
            }
        },
        data(){
            return store
        }
    };
    </script>
    <style></style>
    