<template>
    <div class="card text-bg-dark" style="width: 18rem;">
        <img :src="'https://image.tmdb.org/t/p/' + 'w342' + series.poster_path" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{series.name}}</h5>
            <p class="card-text fw-bold">{{series.original_name}}</p>
            <p class="card-text">Language: <span v-if="language()" :class="language()"></span> 
                <span v-else class="flag-icon flag-icon-xx">{{series.original_language}}</span></p>
            <p class="card-text">Average Rating: {{series.vote_average}}</p>
            <p class="card-text">Overview: {{series.overview}}</p>
        </div>
    </div>
    </template>
    <script>
    import { store } from '../store';
    export default {
        name:"AppCardTv.vue",
        props:{
            series:{
                type:Object
            }
        },
        data(){
            return store
        },
        methods:{
        language(){
        if(this.series.original_language === "it"){
            return "flag-icon flag-icon-it"
        } else if (this.series.original_language === "ja"){
            return "flag-icon flag-icon-jp"
        }else if (this.series.original_language === "tr"){
            return "flag-icon flag-icon-tr"
        }else if (this.series.original_language === "uk"){
            return "flag-icon flag-icon-uk"
        }else if (this.series.original_language === "es"){
            return "flag-icon flag-icon-es"
        }else if (this.series.original_language === "en"){
            return "flag-icon flag-icon-gb"
        }else if (this.series.original_language === "fr"){
            return "flag-icon flag-icon-fr"
        }else if (this.series.original_language === "de"){
            return "flag-icon flag-icon-de"
        }else {
            return false 
        } 
    }
}
    };
</script>

<style scoped lang="scss">
.card{
    height: 380px;
    overflow: hidden;
    position: relative;
    &:hover{
        overflow: auto;
        // display: none;
        // visibility: hidden;
        // background-color: black;
        img{
            visibility: hidden;
        }
        .card-body{
            display: block;
        }
    }
    img{
        height: 100%;
        object-fit: fill;
        // display: block;
        &:hover{
            // visibility: hidden;
        }
    }
    .card-body{
        position: absolute;
        // overflow: auto;
        display: none;
        // visibility: hidden;
        &:hover{
            // visibility: visible;
            // z-index: 10;
            // display: block;
            // overflow: auto;
        }
    }
}

</style>