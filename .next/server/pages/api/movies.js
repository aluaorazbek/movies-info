"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/movies";
exports.ids = ["pages/api/movies"];
exports.modules = {

/***/ "(api)/./api/fetchFunctions.ts":
/*!*******************************!*\
  !*** ./api/fetchFunctions.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basicFetch\": () => (/* binding */ basicFetch),\n/* harmony export */   \"fetchMovies\": () => (/* binding */ fetchMovies)\n/* harmony export */ });\nconst basicFetch = async (endpoint)=>{\n    const response = await fetch(endpoint);\n    if (!response.ok) throw new Error(\"Error!\");\n    const data = await response.json();\n    return data;\n};\n// Fetch functions\nconst fetchMovies = async (search = \"\", page = 1)=>{\n    return await basicFetch(`/api/movies?search=${search}&page=${page}`);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcGkvZmV0Y2hGdW5jdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxNQUFNQSxhQUFhLE9BQW1CQyxXQUEwQztJQUNyRixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GO0lBRTdCLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxVQUFVO0lBRTVDLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtJQUVoQyxPQUFPRDtBQUNULEVBQUU7QUFFRixrQkFBa0I7QUFDWCxNQUFNRSxjQUFjLE9BQU9DLFNBQVMsRUFBRSxFQUFFQyxPQUFPLENBQUMsR0FBc0I7SUFDM0UsT0FBTyxNQUFNVixXQUFtQixDQUFDLG1CQUFtQixFQUFFUyxPQUFPLE1BQU0sRUFBRUMsS0FBSyxDQUFDO0FBQzdFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ybWRiLXY0Ly4vYXBpL2ZldGNoRnVuY3Rpb25zLnRzPzVmMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW92aWVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBiYXNpY0ZldGNoID0gYXN5bmMgPHJldHVyblR5cGU+KGVuZHBvaW50OiBzdHJpbmcpOiBQcm9taXNlPHJldHVyblR5cGU+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdFcnJvciEnKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuLy8gRmV0Y2ggZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAoc2VhcmNoID0gJycsIHBhZ2UgPSAxKTogUHJvbWlzZTxNb3ZpZXM+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGJhc2ljRmV0Y2g8TW92aWVzPihgL2FwaS9tb3ZpZXM/c2VhcmNoPSR7c2VhcmNofSZwYWdlPSR7cGFnZX1gKTtcbn07XG4iXSwibmFtZXMiOlsiYmFzaWNGZXRjaCIsImVuZHBvaW50IiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImZldGNoTW92aWVzIiwic2VhcmNoIiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./api/fetchFunctions.ts\n");

/***/ }),

/***/ "(api)/./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY),\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"BACKDROP_SIZE\": () => (/* binding */ BACKDROP_SIZE),\n/* harmony export */   \"IMAGE_BASE_URL\": () => (/* binding */ IMAGE_BASE_URL),\n/* harmony export */   \"POPULAR_BASE_URL\": () => (/* binding */ POPULAR_BASE_URL),\n/* harmony export */   \"POSTER_SIZE\": () => (/* binding */ POSTER_SIZE),\n/* harmony export */   \"SEARCH_BASE_URL\": () => (/* binding */ SEARCH_BASE_URL),\n/* harmony export */   \"creditsUrl\": () => (/* binding */ creditsUrl),\n/* harmony export */   \"movieUrl\": () => (/* binding */ movieUrl)\n/* harmony export */ });\n// Configuration for TMDB API\n// used API: https://developers.themoviedb.org/\nconst API_URL = \"https://api.themoviedb.org/3/\";\nconst API_KEY = \"400e59056998a11155538b2f80283a94\";\nconst SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;\nconst POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;\n// For single movie\nconst movieUrl = (id)=>`${API_URL}movie/${id}?api_key=${API_KEY}`;\nconst creditsUrl = (id)=>`${API_URL}movie/${id}/credits?api_key=${API_KEY}`;\nconst IMAGE_BASE_URL = \"http://image.tmdb.org/t/p/\";\n// Sizes: w300, w780, w1280, original\nconst BACKDROP_SIZE = \"w1280\";\n// w92, w154, w185, w342, w500, w780, original\nconst POSTER_SIZE = \"w780\";\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBQzdCLCtDQUErQztBQUUvQyxNQUFNQSxVQUFrQjtBQUN4QixNQUFNQyxVQUE4QjtBQUVwQyxNQUFNQyxrQkFBMEIsQ0FBQyxFQUFFRixRQUFRLHFCQUFxQixFQUFFQyxRQUFRLHNCQUFzQixDQUFDO0FBQ2pHLE1BQU1FLG1CQUEyQixDQUFDLEVBQUVILFFBQVEsc0JBQXNCLEVBQUVDLFFBQVEsZUFBZSxDQUFDO0FBQzVGLG1CQUFtQjtBQUNuQixNQUFNRyxXQUFXLENBQUNDLEtBQWdCLENBQUMsRUFBRUwsUUFBUSxNQUFNLEVBQUVLLEdBQUcsU0FBUyxFQUFFSixRQUFRLENBQUM7QUFDNUUsTUFBTUssYUFBYSxDQUFDRCxLQUFnQixDQUFDLEVBQUVMLFFBQVEsTUFBTSxFQUFFSyxHQUFHLGlCQUFpQixFQUFFSixRQUFRLENBQUM7QUFFdEYsTUFBTU0saUJBQXlCO0FBQy9CLHFDQUFxQztBQUNyQyxNQUFNQyxnQkFBd0I7QUFDOUIsOENBQThDO0FBQzlDLE1BQU1DLGNBQXNCO0FBWTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm1kYi12NC8uL2NvbmZpZy50cz8yNjlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbmZpZ3VyYXRpb24gZm9yIFRNREIgQVBJXG4vLyB1c2VkIEFQSTogaHR0cHM6Ly9kZXZlbG9wZXJzLnRoZW1vdmllZGIub3JnL1xuXG5jb25zdCBBUElfVVJMOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy8nO1xuY29uc3QgQVBJX0tFWTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJzQwMGU1OTA1Njk5OGExMTE1NTUzOGIyZjgwMjgzYTk0JztcblxuY29uc3QgU0VBUkNIX0JBU0VfVVJMOiBzdHJpbmcgPSBgJHtBUElfVVJMfXNlYXJjaC9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0mbGFuZ3VhZ2U9ZW4tVVMmcXVlcnk9YDtcbmNvbnN0IFBPUFVMQVJfQkFTRV9VUkw6IHN0cmluZyA9IGAke0FQSV9VUkx9bW92aWUvcG9wdWxhcj9hcGlfa2V5PSR7QVBJX0tFWX0mbGFuZ3VhZ2U9ZW4tVVNgO1xuLy8gRm9yIHNpbmdsZSBtb3ZpZVxuY29uc3QgbW92aWVVcmwgPSAoaWQ/OiBzdHJpbmcpID0+IGAke0FQSV9VUkx9bW92aWUvJHtpZH0/YXBpX2tleT0ke0FQSV9LRVl9YDtcbmNvbnN0IGNyZWRpdHNVcmwgPSAoaWQ/OiBzdHJpbmcpID0+IGAke0FQSV9VUkx9bW92aWUvJHtpZH0vY3JlZGl0cz9hcGlfa2V5PSR7QVBJX0tFWX1gO1xuXG5jb25zdCBJTUFHRV9CQVNFX1VSTDogc3RyaW5nID0gJ2h0dHA6Ly9pbWFnZS50bWRiLm9yZy90L3AvJztcbi8vIFNpemVzOiB3MzAwLCB3NzgwLCB3MTI4MCwgb3JpZ2luYWxcbmNvbnN0IEJBQ0tEUk9QX1NJWkU6IHN0cmluZyA9ICd3MTI4MCc7XG4vLyB3OTIsIHcxNTQsIHcxODUsIHczNDIsIHc1MDAsIHc3ODAsIG9yaWdpbmFsXG5jb25zdCBQT1NURVJfU0laRTogc3RyaW5nID0gJ3c3ODAnO1xuXG5leHBvcnQge1xuICBTRUFSQ0hfQkFTRV9VUkwsXG4gIFBPUFVMQVJfQkFTRV9VUkwsXG4gIEFQSV9VUkwsXG4gIEFQSV9LRVksXG4gIElNQUdFX0JBU0VfVVJMLFxuICBCQUNLRFJPUF9TSVpFLFxuICBQT1NURVJfU0laRSxcbiAgbW92aWVVcmwsXG4gIGNyZWRpdHNVcmxcbn07XG4iXSwibmFtZXMiOlsiQVBJX1VSTCIsIkFQSV9LRVkiLCJTRUFSQ0hfQkFTRV9VUkwiLCJQT1BVTEFSX0JBU0VfVVJMIiwibW92aWVVcmwiLCJpZCIsImNyZWRpdHNVcmwiLCJJTUFHRV9CQVNFX1VSTCIsIkJBQ0tEUk9QX1NJWkUiLCJQT1NURVJfU0laRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config.ts\n");

/***/ }),

/***/ "(api)/./pages/api/movies.ts":
/*!*****************************!*\
  !*** ./pages/api/movies.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"(api)/./config.ts\");\n/* harmony import */ var _api_fetchFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/fetchFunctions */ \"(api)/./api/fetchFunctions.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// API URLs\n\n\nasync function handler(req, res) {\n    const { page , search  } = req.query; // Grab search params\n    const endpoint = search ? `${_config__WEBPACK_IMPORTED_MODULE_0__.SEARCH_BASE_URL}${search}&page=${page}` : `${_config__WEBPACK_IMPORTED_MODULE_0__.POPULAR_BASE_URL}&page=${page}`;\n    const data = await (0,_api_fetchFunctions__WEBPACK_IMPORTED_MODULE_1__.basicFetch)(endpoint);\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92aWVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUE2RTtBQUU3RSxXQUFXO0FBQ3NEO0FBQ1g7QUFJdkMsZUFBZUcsUUFBUUMsR0FBbUIsRUFBRUMsR0FBNEIsRUFBRTtJQUN2RixNQUFNLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFLEdBQUdILElBQUlJLEtBQUssRUFBRSxxQkFBcUI7SUFFekQsTUFBTUMsV0FBbUJGLFNBQVMsQ0FBQyxFQUFFUCxvREFBZUEsQ0FBQyxFQUFFTyxPQUFPLE1BQU0sRUFBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFTCxxREFBZ0JBLENBQUMsTUFBTSxFQUFFSyxLQUFLLENBQUM7SUFFakgsTUFBTUksT0FBTyxNQUFNUiwrREFBVUEsQ0FBU087SUFFdENKLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNGO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ybWRiLXY0Ly4vcGFnZXMvYXBpL21vdmllcy50cz9hNjVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0Jztcbi8vIEFQSSBVUkxzXG5pbXBvcnQgeyBTRUFSQ0hfQkFTRV9VUkwsIFBPUFVMQVJfQkFTRV9VUkwgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgYmFzaWNGZXRjaCB9IGZyb20gJy4uLy4uL2FwaS9mZXRjaEZ1bmN0aW9ucyc7XG4vLyBUeXBlc1xuaW1wb3J0IHsgTW92aWVzIH0gZnJvbSAnLi4vLi4vYXBpL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZTxNb3ZpZXM+KSB7XG4gIGNvbnN0IHsgcGFnZSwgc2VhcmNoIH0gPSByZXEucXVlcnk7IC8vIEdyYWIgc2VhcmNoIHBhcmFtc1xuXG4gIGNvbnN0IGVuZHBvaW50OiBzdHJpbmcgPSBzZWFyY2ggPyBgJHtTRUFSQ0hfQkFTRV9VUkx9JHtzZWFyY2h9JnBhZ2U9JHtwYWdlfWAgOiBgJHtQT1BVTEFSX0JBU0VfVVJMfSZwYWdlPSR7cGFnZX1gO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBiYXNpY0ZldGNoPE1vdmllcz4oZW5kcG9pbnQpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xufVxuIl0sIm5hbWVzIjpbIlNFQVJDSF9CQVNFX1VSTCIsIlBPUFVMQVJfQkFTRV9VUkwiLCJiYXNpY0ZldGNoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBhZ2UiLCJzZWFyY2giLCJxdWVyeSIsImVuZHBvaW50IiwiZGF0YSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/movies.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/movies.ts"));
module.exports = __webpack_exports__;

})();