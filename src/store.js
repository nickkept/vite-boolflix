import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({
    searchText: {},
});

export function fetchMovies () {
    axios.get("https://api.themoviedb.org/3/search/movie",{
        params:{
            api_key: "54bc7a33b220ba1f0937049acf190b4b",
        } 
    } )
        .then(resp => {
            console.log(resp.data);
        });
}