"use strict";
(() => {
var exports = {};
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 5377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler),
  "getCreditsData": () => (/* binding */ getCreditsData),
  "getMovieData": () => (/* binding */ getMovieData)
});

;// CONCATENATED MODULE: ./config.ts
// Configuration for TMDB API
// used API: https://developers.themoviedb.org/
const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY;
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
// For single movie
const movieUrl = (id)=>`${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditsUrl = (id)=>`${API_URL}movie/${id}/credits?api_key=${API_KEY}`;
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";


;// CONCATENATED MODULE: ./api/fetchFunctions.ts
const basicFetch = async (endpoint)=>{
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Error!");
    const data = await response.json();
    return data;
};
// Fetch functions
const fetchMovies = async (search = "", page = 1)=>{
    return await basicFetch(`/api/movies?search=${search}&page=${page}`);
};

;// CONCATENATED MODULE: ./pages/api/movies.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// API URLs


async function handler(req, res) {
    const { page , search  } = req.query; // Grab search params
    const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;
    const data = await basicFetch(endpoint);
    res.status(200).json(data);
}
async function getMovieData(id) {
    const movie = await fetch(movieUrl(id));
    return await movie.json();
}
async function getCreditsData(id) {
    const credits = await fetch(creditsUrl(id));
    return await credits.json();
} // import { useQuery } from '@tanstack/react-query';
 // export function useMovieData(id: string) {
 //   return useQuery<Movie>(['movie', id], () => getMovieData(id));
 // }
 // export function useCreditsData(id: string) {
 //   return useQuery<Credits>(['credits', id], () => getCreditsData(id));
 // }
 // import axios from 'axios';
 // // import { movieUrl, creditsUrl } from './config';
 // // import type { Movie, Credits } from './types';
 // // Fetch movie data
 // export async function getMovieData(id: string): Promise<Movie> {
 //   const response = await axios.get(movieUrl(id));
 //   return response.data as Movie;
 // }
 // // Fetch credits data
 // export async function getCreditsData(id: string): Promise<Credits> {
 //   const response = await axios.get(creditsUrl(id));
 //   return response.data as Credits;
 // }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5377));
module.exports = __webpack_exports__;

})();