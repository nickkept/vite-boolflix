<template>
    <div class="card text-bg-dark" style="width: 18rem;">
        <img :src="'https://image.tmdb.org/t/p/' + 'w342' + series.poster_path" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{series.name}}</h5>
            <p class="card-text">{{series.original_name}}</p>
            <p class="card-text">{{series.overview}}</p>
            <p class="card-text">Language: <span v-if="language()" :class="language()"></span> <span v-else class="flag-icon flag-icon-xx">{{series.original_language}}</span></p>
            <p class="card-text">{{series.vote_average}}</p>
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
    <style></style>
    