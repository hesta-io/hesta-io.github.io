"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/componets/Testimonials/testimonials.css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/componets/Testimonials/testimonials.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".testimonials-cont {\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.testimonials-page {\\r\\n    background: #fff;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    padding: 12rem 0;\\r\\n}\\r\\n\\r\\n\\r\\n.testimonial-thumbnail {\\r\\n    \\r\\n    height: 125px;\\r\\n    color: black;\\r\\n    padding: 18px 140px 50px 22px;\\r\\n    border-radius: 4px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: flex-start;\\r\\n    margin-right: 95px;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    cursor: pointer;\\r\\n    transition: all 300ms ease;\\r\\n    box-shadow: 3px 3px 18px #eaeaea;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail div {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    padding-left: 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail img {\\r\\n    width: 52px;\\r\\n    height: 52px;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail h1 {\\r\\n    font-weight: 500;\\r\\n    font-size: 20px;\\r\\n    line-height: 10px;\\r\\n    /* or 200% */\\r\\n\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #332B2B;\\r\\n\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail p {\\r\\n    font-weight: 400;\\r\\n    font-size: 14px;\\r\\n    line-height: 40px;\\r\\n    /* or 286% */\\r\\n\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #9795A5;\\r\\n}\\r\\n\\r\\n/*testimonials-review*/\\r\\n\\r\\n.testimonials-review {\\r\\n    max-width: 530px;\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.testimonials-review img {\\r\\n    width: 132px;\\r\\n    height: 25;\\r\\n}\\r\\n\\r\\n.testimonials-review h1 {\\r\\n    font-weight: 600;\\r\\n    font-size: 20px;\\r\\n    line-height: 40px;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #0E111E;\\r\\n}\\r\\n\\r\\n.testimonials-review p {\\r\\n    font-size: 18px; \\r\\n    letter-spacing: 0.03em;\\r\\n    color: #525260;\\r\\n    max-height: 200px;\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\n.testimonials-review span {\\r\\n    font-weight: 400;\\r\\n    font-size: 14px; \\r\\n    letter-spacing: -0.02em;\\r\\n    color: #9795A5;\\r\\n    display: none;\\r\\n    -webkit-margin-after: 12px;\\r\\n            margin-block-end: 12px;\\r\\n }\\r\\n\\r\\n.testimonial-active {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 12px;\\r\\n}\\r\\n\\r\\n@media (max-width: 1050px) { \\r\\n    .testimonials-page {\\r\\n        padding: 10rem 3rem;\\r\\n    }\\r\\n    .testimonials-review p {\\r\\n        font-weight: 400;\\r\\n        font-size: 16px;  \\r\\n        color: #525260; \\r\\n    }\\r\\n    .testimonials-review span {\\r\\n        display: block;\\r\\n    }\\r\\n    .testimonial-thumbnail div {\\r\\n        display: none;\\r\\n    }\\r\\n    .testimonial-thumbnail {\\r\\n        height: unset;\\r\\n        padding: unset;\\r\\n        margin: unset;\\r\\n        border-radius: 100px;\\r\\n    }\\r\\n    .testimonials-page {\\r\\n        gap: 36px;\\r\\n    }\\r\\n    .selected {\\r\\n        box-shadow: 0px 0 18px #1ed07d8e;\\r\\n    }\\r\\n}\\r\\n\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/componets/Testimonials/testimonials.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;AACpB;;;AAGA;;IAEI,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,YAAY;;IAEZ,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;;AAElB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,YAAY;;IAEZ,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;AAClB;;AAEA,sBAAsB;;AAEtB;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,cAAc;IACd,aAAa;IACb,0BAAsB;YAAtB,sBAAsB;CACzB;;AAED;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,gBAAgB;QAChB,eAAe;QACf,cAAc;IAClB;IACA;QACI,cAAc;IAClB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,cAAc;QACd,aAAa;QACb,oBAAoB;IACxB;IACA;QACI,SAAS;IACb;IACA;QACI,gCAAgC;IACpC;AACJ\",\"sourcesContent\":[\".testimonials-cont {\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.testimonials-page {\\r\\n    background: #fff;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    padding: 12rem 0;\\r\\n}\\r\\n\\r\\n\\r\\n.testimonial-thumbnail {\\r\\n    \\r\\n    height: 125px;\\r\\n    color: black;\\r\\n    padding: 18px 140px 50px 22px;\\r\\n    border-radius: 4px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: flex-start;\\r\\n    margin-right: 95px;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    cursor: pointer;\\r\\n    transition: all 300ms ease;\\r\\n    box-shadow: 3px 3px 18px #eaeaea;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail div {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    padding-left: 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail img {\\r\\n    width: 52px;\\r\\n    height: 52px;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail h1 {\\r\\n    font-weight: 500;\\r\\n    font-size: 20px;\\r\\n    line-height: 10px;\\r\\n    /* or 200% */\\r\\n\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #332B2B;\\r\\n\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail p {\\r\\n    font-weight: 400;\\r\\n    font-size: 14px;\\r\\n    line-height: 40px;\\r\\n    /* or 286% */\\r\\n\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #9795A5;\\r\\n}\\r\\n\\r\\n/*testimonials-review*/\\r\\n\\r\\n.testimonials-review {\\r\\n    max-width: 530px;\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.testimonials-review img {\\r\\n    width: 132px;\\r\\n    height: 25;\\r\\n}\\r\\n\\r\\n.testimonials-review h1 {\\r\\n    font-weight: 600;\\r\\n    font-size: 20px;\\r\\n    line-height: 40px;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #0E111E;\\r\\n}\\r\\n\\r\\n.testimonials-review p {\\r\\n    font-size: 18px; \\r\\n    letter-spacing: 0.03em;\\r\\n    color: #525260;\\r\\n    max-height: 200px;\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\n.testimonials-review span {\\r\\n    font-weight: 400;\\r\\n    font-size: 14px; \\r\\n    letter-spacing: -0.02em;\\r\\n    color: #9795A5;\\r\\n    display: none;\\r\\n    margin-block-end: 12px;\\r\\n }\\r\\n\\r\\n.testimonial-active {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 12px;\\r\\n}\\r\\n\\r\\n@media (max-width: 1050px) { \\r\\n    .testimonials-page {\\r\\n        padding: 10rem 3rem;\\r\\n    }\\r\\n    .testimonials-review p {\\r\\n        font-weight: 400;\\r\\n        font-size: 16px;  \\r\\n        color: #525260; \\r\\n    }\\r\\n    .testimonials-review span {\\r\\n        display: block;\\r\\n    }\\r\\n    .testimonial-thumbnail div {\\r\\n        display: none;\\r\\n    }\\r\\n    .testimonial-thumbnail {\\r\\n        height: unset;\\r\\n        padding: unset;\\r\\n        margin: unset;\\r\\n        border-radius: 100px;\\r\\n    }\\r\\n    .testimonials-page {\\r\\n        gap: 36px;\\r\\n    }\\r\\n    .selected {\\r\\n        box-shadow: 0px 0 18px #1ed07d8e;\\r\\n    }\\r\\n}\\r\\n\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvY29tcG9uZXRzL1Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzhIO0FBQzlILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw4REFBOEQseUJBQXlCLEtBQUssc0NBQXNDLHdCQUF3QixLQUFLLDRCQUE0Qix5QkFBeUIsb0JBQW9CLHNCQUFzQixnQ0FBZ0MsZ0NBQWdDLHlCQUF5QixLQUFLLG9DQUFvQyw4QkFBOEIscUJBQXFCLHNDQUFzQywyQkFBMkIsc0JBQXNCLDRCQUE0QixvQ0FBb0MsMkJBQTJCLEtBQUssbUJBQW1CLHdCQUF3QixtQ0FBbUMseUNBQXlDLEtBQUssb0NBQW9DLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLGdDQUFnQywyQkFBMkIsU0FBUyxvQ0FBb0Msb0JBQW9CLHFCQUFxQixLQUFLLG1DQUFtQyx5QkFBeUIsd0JBQXdCLDBCQUEwQixvREFBb0QsZ0NBQWdDLHVCQUF1QixTQUFTLGtDQUFrQyx5QkFBeUIsd0JBQXdCLDBCQUEwQixvREFBb0QsZ0NBQWdDLHVCQUF1QixLQUFLLDZEQUE2RCx5QkFBeUIseUJBQXlCLEtBQUssa0NBQWtDLHFCQUFxQixtQkFBbUIsS0FBSyxpQ0FBaUMseUJBQXlCLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLHVCQUF1QixLQUFLLGdDQUFnQyx5QkFBeUIsK0JBQStCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLEtBQUssbUNBQW1DLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLHVCQUF1QixzQkFBc0IsbUNBQW1DLHVDQUF1QyxNQUFNLDZCQUE2QixzQkFBc0IsK0JBQStCLGtCQUFrQixLQUFLLHFDQUFxQyw0QkFBNEIsZ0NBQWdDLFNBQVMsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLFNBQVMsbUNBQW1DLDJCQUEyQixTQUFTLG9DQUFvQywwQkFBMEIsU0FBUyxnQ0FBZ0MsMEJBQTBCLDJCQUEyQiwwQkFBMEIsaUNBQWlDLFNBQVMsNEJBQTRCLHNCQUFzQixTQUFTLG1CQUFtQiw2Q0FBNkMsU0FBUyxLQUFLLGVBQWUsNEdBQTRHLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sNkNBQTZDLHlCQUF5QixLQUFLLHNDQUFzQyx3QkFBd0IsS0FBSyw0QkFBNEIseUJBQXlCLG9CQUFvQixzQkFBc0IsZ0NBQWdDLGdDQUFnQyx5QkFBeUIsS0FBSyxvQ0FBb0MsOEJBQThCLHFCQUFxQixzQ0FBc0MsMkJBQTJCLHNCQUFzQiw0QkFBNEIsb0NBQW9DLDJCQUEyQixLQUFLLG1CQUFtQix3QkFBd0IsbUNBQW1DLHlDQUF5QyxLQUFLLG9DQUFvQyxzQkFBc0IsK0JBQStCLGdDQUFnQyxnQ0FBZ0MsMkJBQTJCLFNBQVMsb0NBQW9DLG9CQUFvQixxQkFBcUIsS0FBSyxtQ0FBbUMseUJBQXlCLHdCQUF3QiwwQkFBMEIsb0RBQW9ELGdDQUFnQyx1QkFBdUIsU0FBUyxrQ0FBa0MseUJBQXlCLHdCQUF3QiwwQkFBMEIsb0RBQW9ELGdDQUFnQyx1QkFBdUIsS0FBSyw2REFBNkQseUJBQXlCLHlCQUF5QixLQUFLLGtDQUFrQyxxQkFBcUIsbUJBQW1CLEtBQUssaUNBQWlDLHlCQUF5Qix3QkFBd0IsMEJBQTBCLGdDQUFnQyx1QkFBdUIsS0FBSyxnQ0FBZ0MseUJBQXlCLCtCQUErQix1QkFBdUIsMEJBQTBCLHVCQUF1QixLQUFLLG1DQUFtQyx5QkFBeUIseUJBQXlCLGdDQUFnQyx1QkFBdUIsc0JBQXNCLCtCQUErQixNQUFNLDZCQUE2QixzQkFBc0IsK0JBQStCLGtCQUFrQixLQUFLLHFDQUFxQyw0QkFBNEIsZ0NBQWdDLFNBQVMsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLFNBQVMsbUNBQW1DLDJCQUEyQixTQUFTLG9DQUFvQywwQkFBMEIsU0FBUyxnQ0FBZ0MsMEJBQTBCLDJCQUEyQiwwQkFBMEIsaUNBQWlDLFNBQVMsNEJBQTRCLHNCQUFzQixTQUFTLG1CQUFtQiw2Q0FBNkMsU0FBUyxLQUFLLDJCQUEyQjtBQUNwa087QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZXRzL1Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY3NzP2M2ODgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50ZXN0aW1vbmlhbHMtY29udCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10aHVtYm5haWw6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcGFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEycmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10aHVtYm5haWwge1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDE0MHB4IDUwcHggMjJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogOTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxOHB4ICNlYWVhZWE7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10aHVtYm5haWwgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10aHVtYm5haWwgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDUycHg7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsLXRodW1ibmFpbCBoMSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgIC8qIG9yIDIwMCUgKi9cXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcXHJcXG4gICAgY29sb3I6ICMzMzJCMkI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10aHVtYm5haWwgcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIC8qIG9yIDI4NiUgKi9cXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcXHJcXG4gICAgY29sb3I6ICM5Nzk1QTU7XFxyXFxufVxcclxcblxcclxcbi8qdGVzdGltb25pYWxzLXJldmlldyovXFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcge1xcclxcbiAgICBtYXgtd2lkdGg6IDUzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzLXJldmlldyBpbWcge1xcclxcbiAgICB3aWR0aDogMTMycHg7XFxyXFxuICAgIGhlaWdodDogMjU7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcmV2aWV3IGgxIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxyXFxuICAgIGNvbG9yOiAjMEUxMTFFO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzLXJldmlldyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4OyBcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcXHJcXG4gICAgY29sb3I6ICM1MjUyNjA7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgc3BhbiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDsgXFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xcclxcbiAgICBjb2xvcjogIzk3OTVBNTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1tYXJnaW4tYWZ0ZXI6IDEycHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMTJweDtcXHJcXG4gfVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC1hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpIHsgXFxyXFxuICAgIC50ZXN0aW1vbmlhbHMtcGFnZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHJlbSAzcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC50ZXN0aW1vbmlhbHMtcmV2aWV3IHAge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDsgIFxcclxcbiAgICAgICAgY29sb3I6ICM1MjUyNjA7IFxcclxcbiAgICB9XFxyXFxuICAgIC50ZXN0aW1vbmlhbHMtcmV2aWV3IHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRlc3RpbW9uaWFsLXRodW1ibmFpbCBkaXYge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAudGVzdGltb25pYWwtdGh1bWJuYWlsIHtcXHJcXG4gICAgICAgIGhlaWdodDogdW5zZXQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiB1bnNldDtcXHJcXG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGVzdGltb25pYWxzLXBhZ2Uge1xcclxcbiAgICAgICAgZ2FwOiAzNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWxlY3RlZCB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMCAxOHB4ICMxZWQwN2Q4ZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmV0cy9UZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsYUFBYTtJQUNiLDBCQUFzQjtZQUF0QixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7UUFDYixjQUFjO1FBQ2QsYUFBYTtRQUNiLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGVzdGltb25pYWxzLWNvbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzLXBhZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAxMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIHtcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTI1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMThweCAxNDBweCA1MHB4IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDk1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMThweCAjZWFlYWVhO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIGltZyB7XFxyXFxuICAgIHdpZHRoOiA1MnB4O1xcclxcbiAgICBoZWlnaHQ6IDUycHg7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10aHVtYm5haWwgaDEge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAvKiBvciAyMDAlICovXFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxyXFxuICAgIGNvbG9yOiAjMzMyQjJCO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIHAge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAvKiBvciAyODYlICovXFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxyXFxuICAgIGNvbG9yOiAjOTc5NUE1O1xcclxcbn1cXHJcXG5cXHJcXG4vKnRlc3RpbW9uaWFscy1yZXZpZXcqL1xcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcmV2aWV3IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEzMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI1O1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzLXJldmlldyBoMSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xcclxcbiAgICBjb2xvcjogIzBFMTExRTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDsgXFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XFxyXFxuICAgIGNvbG9yOiAjNTI1MjYwO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcmV2aWV3IHNwYW4ge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7IFxcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcXHJcXG4gICAgY29sb3I6ICM5Nzk1QTU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEycHg7XFxyXFxuIH1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7IFxcclxcbiAgICAudGVzdGltb25pYWxzLXBhZ2Uge1xcclxcbiAgICAgICAgcGFkZGluZzogMTByZW0gM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICAudGVzdGltb25pYWxzLXJldmlldyBwIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7ICBcXHJcXG4gICAgICAgIGNvbG9yOiAjNTI1MjYwOyBcXHJcXG4gICAgfVxcclxcbiAgICAudGVzdGltb25pYWxzLXJldmlldyBzcGFuIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgIC50ZXN0aW1vbmlhbC10aHVtYm5haWwgZGl2IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRlc3RpbW9uaWFsLXRodW1ibmFpbCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xcclxcbiAgICAgICAgcGFkZGluZzogdW5zZXQ7XFxyXFxuICAgICAgICBtYXJnaW46IHVuc2V0O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRlc3RpbW9uaWFscy1wYWdlIHtcXHJcXG4gICAgICAgIGdhcDogMzZweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2VsZWN0ZWQge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDAgMThweCAjMWVkMDdkOGU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/componets/Testimonials/testimonials.css\n"));

/***/ })

});