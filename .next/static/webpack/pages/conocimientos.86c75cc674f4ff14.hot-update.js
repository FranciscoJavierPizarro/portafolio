"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/conocimientos",{

/***/ "./components/SubjectGraph.js":
/*!************************************!*\
  !*** ./components/SubjectGraph.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubjectGraph; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n\n\nfunction SubjectGraph(param) {\n    var data = param.data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full items-center py-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.BarChart, {\n            width: 500,\n            height: 300,\n            data: data,\n            margin: {\n                top: 5,\n                right: 30,\n                left: 20,\n                bottom: 5\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.CartesianGrid, {\n                    strokeDasharray: \"3 3\"\n                }, void 0, false, {\n                    fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {\n                    dataKey: \"name\"\n                }, void 0, false, {\n                    fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {}, void 0, false, {\n                    fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {\n                    fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Legend, {}, void 0, false, {\n                    fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Bar, {\n                    dataKey: \"nota\",\n                    fill: \"#8884d8\"\n                }, void 0, false, {\n                    fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_c = SubjectGraph;\nvar _c;\n$RefreshReg$(_c, \"SubjectGraph\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1YmplY3RHcmFwaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFpQjtBQUdGLFFBQVEsQ0FBQ08sWUFBWSxDQUFDLEtBQU0sRUFBRSxDQUFDO1FBQVJDLElBQUksR0FBTCxLQUFNLENBQUxBLElBQUk7SUFDeEMsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBK0I7OEZBQzNDViw4Q0FBUTtZQUNMVyxLQUFLLEVBQUUsR0FBRztZQUNWQyxNQUFNLEVBQUUsR0FBRztZQUNYSixJQUFJLEVBQUVBLElBQUk7WUFDVkssTUFBTSxFQUFFLENBQUM7Z0JBQ1BDLEdBQUcsRUFBRSxDQUFDO2dCQUNOQyxLQUFLLEVBQUUsRUFBRTtnQkFDVEMsSUFBSSxFQUFFLEVBQUU7Z0JBQ1JDLE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQzs7NEZBRUFiLG1EQUFhO29CQUFDYyxlQUFlLEVBQUMsQ0FBSzs7Ozs7OzRGQUNuQ2hCLDJDQUFLO29CQUFDaUIsT0FBTyxFQUFDLENBQU07Ozs7Ozs0RkFDcEJoQiwyQ0FBSzs7Ozs7NEZBQ0xFLDZDQUFPOzs7Ozs0RkFDUEMsNENBQU07Ozs7OzRGQUNOTCx5Q0FBRztvQkFBQ2tCLE9BQU8sRUFBQyxDQUFNO29CQUFDQyxJQUFJLEVBQUMsQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUMsQ0FBQztLQXZCdUJiLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWJqZWN0R3JhcGguanM/M2JhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCYXJDaGFydCxcbiAgQmFyLFxuICBYQXhpcyxcbiAgWUF4aXMsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSBcInJlY2hhcnRzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJqZWN0R3JhcGgoe2RhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgcHktNVwiPlxuICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIG1hcmdpbj17e1xuICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICAgICAgbGVmdDogMjAsXG4gICAgICAgICAgICBib3R0b206IDUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIC8+XG4gICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJuYW1lXCIgLz5cbiAgICAgICAgICA8WUF4aXMgLz5cbiAgICAgICAgICA8VG9vbHRpcCAvPlxuICAgICAgICAgIDxMZWdlbmQgLz5cbiAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJub3RhXCIgZmlsbD1cIiM4ODg0ZDhcIiAvPlxuICAgICAgICA8L0JhckNoYXJ0PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQmFyQ2hhcnQiLCJCYXIiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJTdWJqZWN0R3JhcGgiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJzdHJva2VEYXNoYXJyYXkiLCJkYXRhS2V5IiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SubjectGraph.js\n");

/***/ })

});