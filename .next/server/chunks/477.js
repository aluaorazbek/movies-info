exports.id = 477;
exports.ids = [477];
exports.modules = {

/***/ 8606:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8441))

/***/ }),

/***/ 1106:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23))

/***/ }),

/***/ 5746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/aluaorazbek/Downloads/movies-rmdb/app/ReactQueryWrapper.tsx");


/***/ }),

/***/ 8514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6495);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReactQueryWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5746);
/* harmony import */ var _ReactQueryWrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ReactQueryWrapper__WEBPACK_IMPORTED_MODULE_2__);



const RootLayout = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ReactQueryWrapper__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: children
                })
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);


/***/ }),

/***/ 8441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4271);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8417);


const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .QueryClient */ .S();
const ReactQueryWrapper = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .QueryClientProvider */ .aH, {
        client: queryClient,
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactQueryWrapper);


/***/ }),

/***/ 8094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IsNeededSearchInput_IsNeededSearchInput)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(3103);
;// CONCATENATED MODULE: ./components/styles/IsNeededSerachInput.styled.tsx

const StyledInput = styled_components_cjs/* default.input */.ZP.input`
  height: 2.5rem;
  padding-right: 3.5rem;
  width: 24rem;
  border-radius: 9999px;
  padding: 1rem;
  font-size: 1rem;
  background-color: #303642;
  color: white;
  outline: none;
  border: none;
  &:focus {
    border: 2px solid #61dafb;
  }
`;

;// CONCATENATED MODULE: ./components/IsNeededSearchInput/IsNeededSearchInput.tsx



const TIME = 300;
const IsNeededSearchInput = ({ setQuery  })=>{
    const [text, setText] = react_default().useState("");
    const timer = react_default().useRef();
    const handleInput = (e)=>{
        const value = e.currentTarget.value;
        clearTimeout(timer.current);
        setText(value);
        timer.current = setTimeout(()=>{
            setQuery(value);
        }, TIME);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
            type: "text",
            placeholder: "Search Movie",
            value: text,
            onChange: handleInput
        })
    });
};
/* harmony default export */ const IsNeededSearchInput_IsNeededSearchInput = (IsNeededSearchInput);


/***/ }),

/***/ 8259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3103);

//REVIEW - 사용하지 않는 속성은 지워주시면 좋을 것 같아요!
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  height: 20rem; 
`;
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  position: relative;
  height: 100%;

  div {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #4b5563;
  }

  h2 {
    color: #93c5fd; 
    font-size: 0.875rem; 
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: #60a5fa;
    font-size: 0.75rem; 
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
  }
`;


/***/ }),

/***/ 8175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3103);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  padding: 1rem 5rem; 
  max-width: 90rem; 
  margin: auto;
  h2 {
    font-size: 1.25rem; 
    font-weight: bold;
    padding-bottom: 1rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }
`;


/***/ }),

/***/ 9123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "LogoContainer": () => (/* binding */ LogoContainer),
/* harmony export */   "SearchContainer": () => (/* binding */ SearchContainer),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3103);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  height: 6rem; 
  background-color: #1f2937; 
`;
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 90rem;
  margin: auto;
  padding: 0 5rem; 
  align-items: center;
`;
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  cursor: pointer;
  .rmdb-logo {
    visibility: visible;
  }
  .rmdb-logo-small {
    position: absolute;
    visibility: hidden;
    top: 100;
  }
`;
const SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  position: relative;
  display: flex;
  align-items: center;
`;


/***/ }),

/***/ 9147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "SpinnerWrapper": () => (/* binding */ SpinnerWrapper),
/* harmony export */   "spinAnimation": () => (/* binding */ spinAnimation)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3103);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;
const spinAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__/* .keyframes */ .F4`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].svg */ .ZP.svg`
  width: 30px;
  height: 30px;
  animation: ${spinAnimation} 2s linear infinite;
`;


/***/ }),

/***/ 6495:
/***/ (() => {



/***/ })

};
;