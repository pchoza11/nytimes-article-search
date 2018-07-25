import axios from "axios";

export default {
search: function (query) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8c700c68d3fc440bb23a1bdde887abf4&q=${query}`)
}
}

// export default {
//     search: function (query) {
//         return axios.get(BASEURL + query + APIKEY);
//     }
// };

// const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
// const APIKEY = "&apikey=8c700c68d3fc440bb23a1bdde887abf4";


// export default {
//     search: function (query) {
//         return axios.get(BASEURL + "q=" + query + APIKEY);

//     }
// }