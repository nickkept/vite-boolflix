import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    moviesList: [],
    seriesList: [],
    searchTextSt: "",

})



export function fetchMovies() {

    axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: "1a953019a29582a3b5c59afbba707100",
            query: store.searchTextSt,
        }
    })
        .then((resp) => {
            console.log(resp.data.results);
            store.moviesList = resp.data.results
        })

}
export function fetchTvSeries() {
    axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
            api_key: "1a953019a29582a3b5c59afbba707100",
            query: store.searchTextSt,
        }
    })
        .then((resp) => {
            console.log(resp.data.results);
            store.seriesList = resp.data.results

        })
}