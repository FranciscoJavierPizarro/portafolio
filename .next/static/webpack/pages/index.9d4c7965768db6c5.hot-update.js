"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SubjectGraph.js":
/*!************************************!*\
  !*** ./components/SubjectGraph.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubjectGraph; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n\n\nfunction SubjectGraph(param) {\n    var data = param.data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full items-center pt-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.ResponsiveContainer, {\n            width: \"100%\",\n            height: 250,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.BarChart, {\n                // width=\"100%\"\n                // height={250}\n                data: data,\n                margin: {\n                    top: 5,\n                    right: 30,\n                    left: 20,\n                    bottom: 5\n                },\n                barGap: 10,\n                barSize: 35,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.CartesianGrid, {\n                        strokeDasharray: \"3 3\"\n                    }, void 0, false, {\n                        fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {\n                        label: \"Asignaturas\",\n                        dataKey: \"name\",\n                        tickLine: false,\n                        unit: 0,\n                        tick: false\n                    }, void 0, false, {\n                        fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {\n                        domain: [\n                            0,\n                            10\n                        ],\n                        tickCount: 10,\n                        interval: 0,\n                        label: \"Nota\"\n                    }, void 0, false, {\n                        fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {\n                        fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Bar, {\n                        dataKey: \"nota\",\n                        fill: \"#1f77b4\"\n                    }, void 0, false, {\n                        fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/fjpizarro/Desktop/portafolio/components/SubjectGraph.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_c = SubjectGraph;\nvar _c;\n$RefreshReg$(_c, \"SubjectGraph\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1YmplY3RHcmFwaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFpQjtBQUdGLFFBQVEsQ0FBQ08sWUFBWSxDQUFDLEtBQU0sRUFBRSxDQUFDO1FBQVJDLElBQUksR0FBTCxLQUFNLENBQUxBLElBQUk7SUFDeEMsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBK0I7OEZBQzNDSix5REFBbUI7WUFBQ0ssS0FBSyxFQUFDLENBQU07WUFBQ0MsTUFBTSxFQUFFLEdBQUc7a0dBQzVDWiw4Q0FBUTtnQkFDTCxFQUFlO2dCQUNmLEVBQWU7Z0JBQ2ZRLElBQUksRUFBRUEsSUFBSTtnQkFDVkssTUFBTSxFQUFFLENBQUM7b0JBQ1BDLEdBQUcsRUFBRSxDQUFDO29CQUNOQyxLQUFLLEVBQUUsRUFBRTtvQkFDVEMsSUFBSSxFQUFFLEVBQUU7b0JBQ1JDLE1BQU0sRUFBRSxDQUFDO2dCQUNYLENBQUM7Z0JBQ0RDLE1BQU0sRUFBRSxFQUFFO2dCQUNWQyxPQUFPLEVBQUUsRUFBRTs7Z0dBRVZmLG1EQUFhO3dCQUFDZ0IsZUFBZSxFQUFDLENBQUs7Ozs7OztnR0FDbkNsQiwyQ0FBSzt3QkFBQ21CLEtBQUssRUFBRSxDQUFhO3dCQUFFQyxPQUFPLEVBQUMsQ0FBTTt3QkFBQ0MsUUFBUSxFQUFFLEtBQUs7d0JBQUVDLElBQUksRUFBRSxDQUFDO3dCQUFFQyxJQUFJLEVBQUUsS0FBSzs7Ozs7O2dHQUNoRnRCLDJDQUFLO3dCQUFDdUIsTUFBTSxFQUFFLENBQUM7QUFBQSw2QkFBQztBQUFDLDhCQUFFO3dCQUFBLENBQUM7d0JBQUVDLFNBQVMsRUFBRSxFQUFFO3dCQUFFQyxRQUFRLEVBQUUsQ0FBQzt3QkFBRVAsS0FBSyxFQUFFLENBQU07Ozs7OztnR0FDL0RoQiw2Q0FBTzs7Ozs7Z0dBQ1BKLHlDQUFHO3dCQUFDcUIsT0FBTyxFQUFDLENBQU07d0JBQUNPLElBQUksRUFBQyxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDLENBQUM7S0ExQnVCdEIsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N1YmplY3RHcmFwaC5qcz8zYmExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJhckNoYXJ0LFxuICBCYXIsXG4gIFhBeGlzLFxuICBZQXhpcyxcbiAgQ2FydGVzaWFuR3JpZCxcbiAgVG9vbHRpcCxcbiAgUmVzcG9uc2l2ZUNvbnRhaW5lcixcbn0gZnJvbSBcInJlY2hhcnRzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJqZWN0R3JhcGgoe2RhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgcHQtOFwiPlxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsyNTB9PlxuICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgLy8gd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAvLyBoZWlnaHQ9ezI1MH1cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIG1hcmdpbj17e1xuICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICAgICAgbGVmdDogMjAsXG4gICAgICAgICAgICBib3R0b206IDUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBiYXJHYXA9ezEwfVxuICAgICAgICAgIGJhclNpemU9ezM1fVxuICAgICAgICA+XG4gICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz5cbiAgICAgICAgICA8WEF4aXMgbGFiZWw9e1wiQXNpZ25hdHVyYXNcIn0gZGF0YUtleT1cIm5hbWVcIiB0aWNrTGluZT17ZmFsc2V9IHVuaXQ9ezB9IHRpY2s9e2ZhbHNlfSAvPlxuICAgICAgICAgIDxZQXhpcyBkb21haW49e1swLDEwXX0gdGlja0NvdW50PXsxMH0gaW50ZXJ2YWw9ezB9IGxhYmVsPXtcIk5vdGFcIn0vPlxuICAgICAgICAgIDxUb29sdGlwIC8+XG4gICAgICAgICAgPEJhciBkYXRhS2V5PVwibm90YVwiIGZpbGw9XCIjMWY3N2I0XCIgLz5cbiAgICAgICAgPC9CYXJDaGFydD5cbiAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJhckNoYXJ0IiwiQmFyIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIlN1YmplY3RHcmFwaCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImJhckdhcCIsImJhclNpemUiLCJzdHJva2VEYXNoYXJyYXkiLCJsYWJlbCIsImRhdGFLZXkiLCJ0aWNrTGluZSIsInVuaXQiLCJ0aWNrIiwiZG9tYWluIiwidGlja0NvdW50IiwiaW50ZXJ2YWwiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SubjectGraph.js\n");

/***/ })

});