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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".testimonials-cont {\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.testimonials-page {\\r\\n    background: #fff;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    padding: 12rem 0;\\r\\n}\\r\\n\\r\\n\\r\\n.testimonial-thumbnail {\\r\\n\\r\\n    height: 125px;\\r\\n    color: black;\\r\\n    padding: 18px 140px 50px 22px;\\r\\n    border-radius: 4px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: flex-start;\\r\\n    margin-right: 95px;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    cursor: pointer;\\r\\n    transition: all 300ms ease;\\r\\n    box-shadow: 3px 3px 18px #eaeaea;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail div {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    padding-left: 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail img {\\r\\n    width: 52px;\\r\\n    height: 52px;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail h1 {\\r\\n    font-weight: 500;\\r\\n    font-size: 20px;\\r\\n    line-height: 10px;\\r\\n    /* or 200% */\\r\\n\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #332B2B;\\r\\n\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail p {\\r\\n    font-weight: 400;\\r\\n    font-size: 14px;\\r\\n    line-height: 40px;\\r\\n    /* or 286% */\\r\\n\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #9795A5;\\r\\n}\\r\\n\\r\\n/*testimonials-review*/\\r\\n\\r\\n.testimonials-review {\\r\\n    max-width: 530px;\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.testimonials-review img {\\r\\n    width: 132px;\\r\\n    height: 25;\\r\\n}\\r\\n\\r\\n.testimonials-review h1 {\\r\\n    font-weight: 600;\\r\\n    font-size: 20px;\\r\\n    line-height: 40px;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #0E111E;\\r\\n}\\r\\n\\r\\n.testimonials-review p {\\r\\n    font-size: 18px;\\r\\n    letter-spacing: 0.03em;\\r\\n    color: #525260;\\r\\n    max-height: 200px;\\r\\n    overflow: auto;\\r\\n    -webkit-padding-end: 10px;\\r\\n            padding-inline-end: 10px;\\r\\n}\\r\\n\\r\\n.testimonials-review p::-webkit-scrollbar {\\r\\n    width: 3px;\\r\\n}\\r\\n\\r\\n.testimonials-review p::-webkit-scrollbar-thumb {\\r\\n    background: #332B2B; \\r\\n}\\r\\n\\r\\n.testimonials-review span {\\r\\n    font-weight: 400;\\r\\n    font-size: 14px;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #9795A5;\\r\\n    display: none;\\r\\n    -webkit-margin-after: 12px;\\r\\n            margin-block-end: 12px;\\r\\n}\\r\\n\\r\\n.testimonial-active {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 12px;\\r\\n}\\r\\n\\r\\n@media (max-width: 1050px) {\\r\\n    .testimonials-page {\\r\\n        padding: 10rem 3rem;\\r\\n    }\\r\\n\\r\\n    .testimonials-review p {\\r\\n        font-weight: 400;\\r\\n        font-size: 16px;\\r\\n        color: #525260;\\r\\n    }\\r\\n\\r\\n    .testimonials-review span {\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    .testimonial-thumbnail div {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .testimonial-thumbnail {\\r\\n        height: unset;\\r\\n        padding: unset;\\r\\n        margin: unset;\\r\\n        border-radius: 100px;\\r\\n    }\\r\\n\\r\\n    .testimonials-page {\\r\\n        gap: 36px;\\r\\n    }\\r\\n\\r\\n    .selected {\\r\\n        box-shadow: 0px 0 18px #1ed07d8e;\\r\\n    }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/componets/Testimonials/testimonials.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;AACpB;;;AAGA;;IAEI,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,YAAY;;IAEZ,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;;AAElB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,YAAY;;IAEZ,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;AAClB;;AAEA,sBAAsB;;AAEtB;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,cAAc;IACd,yBAAwB;YAAxB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,cAAc;IACd,aAAa;IACb,0BAAsB;YAAtB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;QAChB,eAAe;QACf,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,cAAc;QACd,aAAa;QACb,oBAAoB;IACxB;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,gCAAgC;IACpC;AACJ\",\"sourcesContent\":[\".testimonials-cont {\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.testimonials-page {\\r\\n    background: #fff;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    padding: 12rem 0;\\r\\n}\\r\\n\\r\\n\\r\\n.testimonial-thumbnail {\\r\\n\\r\\n    height: 125px;\\r\\n    color: black;\\r\\n    padding: 18px 140px 50px 22px;\\r\\n    border-radius: 4px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: flex-start;\\r\\n    margin-right: 95px;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    cursor: pointer;\\r\\n    transition: all 300ms ease;\\r\\n    box-shadow: 3px 3px 18px #eaeaea;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail div {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    padding-left: 2rem;\\r\\n\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail img {\\r\\n    width: 52px;\\r\\n    height: 52px;\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail h1 {\\r\\n    font-weight: 500;\\r\\n    font-size: 20px;\\r\\n    line-height: 10px;\\r\\n    /* or 200% */\\r\\n\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #332B2B;\\r\\n\\r\\n}\\r\\n\\r\\n.testimonial-thumbnail p {\\r\\n    font-weight: 400;\\r\\n    font-size: 14px;\\r\\n    line-height: 40px;\\r\\n    /* or 286% */\\r\\n\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #9795A5;\\r\\n}\\r\\n\\r\\n/*testimonials-review*/\\r\\n\\r\\n.testimonials-review {\\r\\n    max-width: 530px;\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.testimonials-review img {\\r\\n    width: 132px;\\r\\n    height: 25;\\r\\n}\\r\\n\\r\\n.testimonials-review h1 {\\r\\n    font-weight: 600;\\r\\n    font-size: 20px;\\r\\n    line-height: 40px;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #0E111E;\\r\\n}\\r\\n\\r\\n.testimonials-review p {\\r\\n    font-size: 18px;\\r\\n    letter-spacing: 0.03em;\\r\\n    color: #525260;\\r\\n    max-height: 200px;\\r\\n    overflow: auto;\\r\\n    padding-inline-end: 10px;\\r\\n}\\r\\n\\r\\n.testimonials-review p::-webkit-scrollbar {\\r\\n    width: 3px;\\r\\n}\\r\\n\\r\\n.testimonials-review p::-webkit-scrollbar-thumb {\\r\\n    background: #332B2B; \\r\\n}\\r\\n\\r\\n.testimonials-review span {\\r\\n    font-weight: 400;\\r\\n    font-size: 14px;\\r\\n    letter-spacing: -0.02em;\\r\\n    color: #9795A5;\\r\\n    display: none;\\r\\n    margin-block-end: 12px;\\r\\n}\\r\\n\\r\\n.testimonial-active {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 12px;\\r\\n}\\r\\n\\r\\n@media (max-width: 1050px) {\\r\\n    .testimonials-page {\\r\\n        padding: 10rem 3rem;\\r\\n    }\\r\\n\\r\\n    .testimonials-review p {\\r\\n        font-weight: 400;\\r\\n        font-size: 16px;\\r\\n        color: #525260;\\r\\n    }\\r\\n\\r\\n    .testimonials-review span {\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    .testimonial-thumbnail div {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .testimonial-thumbnail {\\r\\n        height: unset;\\r\\n        padding: unset;\\r\\n        margin: unset;\\r\\n        border-radius: 100px;\\r\\n    }\\r\\n\\r\\n    .testimonials-page {\\r\\n        gap: 36px;\\r\\n    }\\r\\n\\r\\n    .selected {\\r\\n        box-shadow: 0px 0 18px #1ed07d8e;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvY29tcG9uZXRzL1Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzhIO0FBQzlILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw4REFBOEQseUJBQXlCLEtBQUssc0NBQXNDLHdCQUF3QixLQUFLLDRCQUE0Qix5QkFBeUIsb0JBQW9CLHNCQUFzQixnQ0FBZ0MsZ0NBQWdDLHlCQUF5QixLQUFLLG9DQUFvQywwQkFBMEIscUJBQXFCLHNDQUFzQywyQkFBMkIsc0JBQXNCLDRCQUE0QixvQ0FBb0MsMkJBQTJCLEtBQUssbUJBQW1CLHdCQUF3QixtQ0FBbUMseUNBQXlDLEtBQUssb0NBQW9DLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLGdDQUFnQywyQkFBMkIsU0FBUyxvQ0FBb0Msb0JBQW9CLHFCQUFxQixLQUFLLG1DQUFtQyx5QkFBeUIsd0JBQXdCLDBCQUEwQixvREFBb0QsZ0NBQWdDLHVCQUF1QixTQUFTLGtDQUFrQyx5QkFBeUIsd0JBQXdCLDBCQUEwQixvREFBb0QsZ0NBQWdDLHVCQUF1QixLQUFLLDZEQUE2RCx5QkFBeUIseUJBQXlCLEtBQUssa0NBQWtDLHFCQUFxQixtQkFBbUIsS0FBSyxpQ0FBaUMseUJBQXlCLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLHVCQUF1QixLQUFLLGdDQUFnQyx3QkFBd0IsK0JBQStCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLGtDQUFrQyx5Q0FBeUMsS0FBSyxtREFBbUQsbUJBQW1CLEtB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QUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25ldHMvVGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jc3M/YzY4OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRlc3RpbW9uaWFscy1jb250IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsLXRodW1ibmFpbDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1wYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMTJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsLXRodW1ibmFpbCB7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTI1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMThweCAxNDBweCA1MHB4IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDk1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMThweCAjZWFlYWVhO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIGltZyB7XFxyXFxuICAgIHdpZHRoOiA1MnB4O1xcclxcbiAgICBoZWlnaHQ6IDUycHg7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10aHVtYm5haWwgaDEge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAvKiBvciAyMDAlICovXFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxyXFxuICAgIGNvbG9yOiAjMzMyQjJCO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIHAge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAvKiBvciAyODYlICovXFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxyXFxuICAgIGNvbG9yOiAjOTc5NUE1O1xcclxcbn1cXHJcXG5cXHJcXG4vKnRlc3RpbW9uaWFscy1yZXZpZXcqL1xcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcmV2aWV3IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEzMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI1O1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzLXJldmlldyBoMSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xcclxcbiAgICBjb2xvcjogIzBFMTExRTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcXHJcXG4gICAgY29sb3I6ICM1MjUyNjA7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcmV2aWV3IHA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgcDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzMyQjJCOyBcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgc3BhbiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxyXFxuICAgIGNvbG9yOiAjOTc5NUE1O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMTJweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7XFxyXFxuICAgIC50ZXN0aW1vbmlhbHMtcGFnZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHJlbSAzcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXN0aW1vbmlhbHMtcmV2aWV3IHAge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjNTI1MjYwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXN0aW1vbmlhbHMtcmV2aWV3IHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRlc3RpbW9uaWFsLXRodW1ibmFpbCBkaXYge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdGltb25pYWwtdGh1bWJuYWlsIHtcXHJcXG4gICAgICAgIGhlaWdodDogdW5zZXQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiB1bnNldDtcXHJcXG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdGltb25pYWxzLXBhZ2Uge1xcclxcbiAgICAgICAgZ2FwOiAzNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWxlY3RlZCB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMCAxOHB4ICMxZWQwN2Q4ZTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmV0cy9UZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx5QkFBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGFBQWE7SUFDYiwwQkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGNBQWM7UUFDZCxhQUFhO1FBQ2Isb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRlc3RpbW9uaWFscy1jb250IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsLXRodW1ibmFpbDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1wYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMTJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsLXRodW1ibmFpbCB7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTI1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMThweCAxNDBweCA1MHB4IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDk1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMThweCAjZWFlYWVhO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIGltZyB7XFxyXFxuICAgIHdpZHRoOiA1MnB4O1xcclxcbiAgICBoZWlnaHQ6IDUycHg7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10aHVtYm5haWwgaDEge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAvKiBvciAyMDAlICovXFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxyXFxuICAgIGNvbG9yOiAjMzMyQjJCO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGh1bWJuYWlsIHAge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAvKiBvciAyODYlICovXFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxyXFxuICAgIGNvbG9yOiAjOTc5NUE1O1xcclxcbn1cXHJcXG5cXHJcXG4vKnRlc3RpbW9uaWFscy1yZXZpZXcqL1xcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcmV2aWV3IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEzMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI1O1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzLXJldmlldyBoMSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xcclxcbiAgICBjb2xvcjogIzBFMTExRTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscy1yZXZpZXcgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcXHJcXG4gICAgY29sb3I6ICM1MjUyNjA7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzLXJldmlldyBwOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcmV2aWV3IHA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMzMkIyQjsgXFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtcmV2aWV3IHNwYW4ge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xcclxcbiAgICBjb2xvcjogIzk3OTVBNTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsLWFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xcclxcbiAgICAudGVzdGltb25pYWxzLXBhZ2Uge1xcclxcbiAgICAgICAgcGFkZGluZzogMTByZW0gM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdGltb25pYWxzLXJldmlldyBwIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBjb2xvcjogIzUyNTI2MDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdGltb25pYWxzLXJldmlldyBzcGFuIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXN0aW1vbmlhbC10aHVtYm5haWwgZGl2IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRlc3RpbW9uaWFsLXRodW1ibmFpbCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xcclxcbiAgICAgICAgcGFkZGluZzogdW5zZXQ7XFxyXFxuICAgICAgICBtYXJnaW46IHVuc2V0O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRlc3RpbW9uaWFscy1wYWdlIHtcXHJcXG4gICAgICAgIGdhcDogMzZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VsZWN0ZWQge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDAgMThweCAjMWVkMDdkOGU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/componets/Testimonials/testimonials.css\n"));

/***/ })

});