(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@youwol/dataframe"));
	else if(typeof define === 'function' && define.amd)
		define("@youwol/io", ["@youwol/dataframe"], factory);
	else if(typeof exports === 'object')
		exports["@youwol/io"] = factory(require("@youwol/dataframe"));
	else
		root["@youwol/io"] = factory(root["@youwol/dataframe"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__youwol_dataframe__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@youwol/math/dist/@youwol/math.js":
/*!*********************************************************!*\
  !*** ../node_modules/@youwol/math/dist/@youwol/math.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__youwol_dataframe__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_747__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_747__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_747__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_747__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_747__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_747__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_747__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_747__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_747__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_747__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_747__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_747__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_747__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_747__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_747__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_747__(__nested_webpack_require_747__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: eigenValue, eigenVector, add, addNumber, sub, mult, multMat, div, trace, norm, norm2, transpose, square, abs, dot, cross, normalize, unitInterval, negate, invert, weightedSum, sum, tagNaN, rand, round, trunc, minMax, min, max, equals, closeTo, getNaN, inv, rotate, translate, scale, determinant, covariance, variance, mean, weightedMean, quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers, describe, std, ComponentDecomposer, PositionDecomposer, EigenValuesDecomposer, EigenVectorsDecomposer, VectorNormDecomposer, NormalsDecomposer, ValenceDecomposer, AreaDecomposer, Fringes, eigen, Eigen, barycentric2, barycentric3, barycentric4, lerp, biLerp, triLerp, triangleLerp2D, triangleLerp3D, tetraLerp, InterpolateDirection, meshInterpolate, MinMax, Quaternion, mat, vec, minArray, maxArray, minMaxArray, normalizeArray, scaleArray, dectectNan, flatten, rotateAxis, getRotationAxis */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_5235__) {

"use strict";
__nested_webpack_require_5235__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5235__(/*! ./lib */ "./lib/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "eigenValue", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["eigenValue"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "eigenVector", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["eigenVector"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "add", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["add"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "addNumber", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["addNumber"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "sub", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["sub"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "mult", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["mult"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "multMat", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["multMat"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "div", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["div"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "trace", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["trace"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "norm", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["norm"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "norm2", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["norm2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "transpose", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["transpose"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "square", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["square"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "abs", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["abs"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "dot", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["dot"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "cross", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["cross"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "normalize", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["normalize"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "unitInterval", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["unitInterval"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "negate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["negate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "invert", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["invert"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "weightedSum", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["weightedSum"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "sum", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["sum"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "tagNaN", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["tagNaN"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "rand", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["rand"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "round", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["round"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "trunc", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["trunc"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "minMax", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["minMax"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "min", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["min"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "max", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["max"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "equals", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["equals"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "closeTo", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["closeTo"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "getNaN", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["getNaN"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "inv", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["inv"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "rotate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["rotate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "translate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["translate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "scale", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["scale"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "determinant", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["determinant"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "covariance", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["covariance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "variance", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["variance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "mean", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["mean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "weightedMean", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["weightedMean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "quantile", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["quantile"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "q25", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["q25"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "q50", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["q50"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "q75", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["q75"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "IQR", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["IQR"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "outliers", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["outliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "isOutliers", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["isOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "notOutliers", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["notOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "describe", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["describe"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "std", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["std"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "ComponentDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["ComponentDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "PositionDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["PositionDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["EigenValuesDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["EigenVectorsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "VectorNormDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["VectorNormDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "NormalsDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["NormalsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "ValenceDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["ValenceDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "AreaDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["AreaDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "Fringes", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Fringes"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "eigen", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["eigen"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "Eigen", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Eigen"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "barycentric2", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["barycentric2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "barycentric3", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["barycentric3"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "barycentric4", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["barycentric4"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "lerp", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["lerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "biLerp", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["biLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "triLerp", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["triLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "triangleLerp2D", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["triangleLerp2D"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "triangleLerp3D", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["triangleLerp3D"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "tetraLerp", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["tetraLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "InterpolateDirection", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["InterpolateDirection"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "meshInterpolate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["meshInterpolate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "MinMax", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["MinMax"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "Quaternion", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "mat", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["mat"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "vec", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["vec"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "minArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["minArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "maxArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["maxArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "minMaxArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["minMaxArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "normalizeArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["normalizeArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "scaleArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["scaleArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "dectectNan", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["dectectNan"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "flatten", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "rotateAxis", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["rotateAxis"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5235__.d(__webpack_exports__, "getRotationAxis", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["getRotationAxis"]; });

// import { Serie } from '@youwol/dataframe'
// import './lib/dataframe/extensions'
// export function initLibrary() {
//     const s = Serie.create({array: [1,2,3], itemSize: 3})
//     s.dot(s)
// }
/*
 * Public API Surface of math
 */



/***/ }),

/***/ "./lib/arrays.ts":
/*!***********************!*\
  !*** ./lib/arrays.ts ***!
  \***********************/
/*! exports provided: minArray, maxArray, minMaxArray, normalizeArray, scaleArray, dectectNan, flatten */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_19512__) {

"use strict";
__nested_webpack_require_19512__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_19512__.d(__webpack_exports__, "minArray", function() { return minArray; });
/* harmony export (binding) */ __nested_webpack_require_19512__.d(__webpack_exports__, "maxArray", function() { return maxArray; });
/* harmony export (binding) */ __nested_webpack_require_19512__.d(__webpack_exports__, "minMaxArray", function() { return minMaxArray; });
/* harmony export (binding) */ __nested_webpack_require_19512__.d(__webpack_exports__, "normalizeArray", function() { return normalizeArray; });
/* harmony export (binding) */ __nested_webpack_require_19512__.d(__webpack_exports__, "scaleArray", function() { return scaleArray; });
/* harmony export (binding) */ __nested_webpack_require_19512__.d(__webpack_exports__, "dectectNan", function() { return dectectNan; });
/* harmony export (binding) */ __nested_webpack_require_19512__.d(__webpack_exports__, "flatten", function() { return flatten; });
// interface IArray {
//     [i: number]: number
//     length: number
//     map(cb: Function): IArray
//     filter(cb: Function): IArray
// }
/**
 * @category Array
 */
function minArray(array) {
    let m = Number.POSITIVE_INFINITY;
    const n = array.length;
    for (let i = 0; i < n; ++i) {
        const a = array[i];
        if (a < m)
            m = a;
    }
    return m;
}
/**
 * @category Array
 */
function maxArray(array) {
    let m = Number.NEGATIVE_INFINITY;
    const n = array.length;
    for (let i = 0; i < n; ++i) {
        const a = array[i];
        if (a > m)
            m = a;
    }
    return m;
}
/**
 * @category Array
 */
function minMaxArray(array) {
    let m = Number.POSITIVE_INFINITY;
    let M = Number.NEGATIVE_INFINITY;
    const n = array.length;
    for (let i = 0; i < n; ++i) {
        const a = array[i];
        if (a < m)
            m = a;
        if (a > M)
            M = a;
    }
    return [m, M];
}
/**
 * @category Array
 */
function normalizeArray(array) {
    const m = minMaxArray(array);
    return array.map(v => (v - m[0]) / (m[1] - m[0]));
}
/**
 * @category Array
 */
function scaleArray(array, s) {
    return array.map(v => v * s);
}
/**
 *  Return the indices from array that contain NaN values
 * @param array The array of number
 * @category Array
 */
function dectectNan(array) {
    const values = array.map((value, i) => { return { value, i }; });
    const idx = values.filter(a => Number.isNaN(a.value));
    return idx.map(v => v.i);
}
/**
 * @category Array
 */
function flatten(array) {
    const r = [];
    array.forEach(a => r.push(...a));
    return r;
}


/***/ }),

/***/ "./lib/barycentric.ts":
/*!****************************!*\
  !*** ./lib/barycentric.ts ***!
  \****************************/
/*! exports provided: barycentric2, barycentric3, barycentric4 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_22350__) {

"use strict";
__nested_webpack_require_22350__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_22350__.d(__webpack_exports__, "barycentric2", function() { return barycentric2; });
/* harmony export (binding) */ __nested_webpack_require_22350__.d(__webpack_exports__, "barycentric3", function() { return barycentric3; });
/* harmony export (binding) */ __nested_webpack_require_22350__.d(__webpack_exports__, "barycentric4", function() { return barycentric4; });
const dot2 = (a, b) => a.reduce((acc, cur, i) => acc + cur * b[i], 0);
const dot3 = (a, b) => a.reduce((acc, cur, i) => acc + cur * b[i], 0);
const from2 = (a, b) => [b[0] - a[0], b[1] - a[1]];
const from3 = (a, b) => [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
/**
 * @category Barycentric
 */
function barycentric2(p, a, b, c) {
    const v0 = from2(a, b);
    const v1 = from2(a, c);
    const v3 = from2(a, p);
    const d00 = dot2(v0, v0);
    const d01 = dot2(v0, v1);
    const d11 = dot2(v1, v1);
    const d20 = dot2(v3, v0);
    const d21 = dot2(v3, v1);
    const denom = 1 / (d00 * d11 - d01 * d01);
    const v = (d11 * d20 - d01 * d21) * denom;
    const w = (d00 * d21 - d01 * d20) * denom;
    const u = 1 - v - w;
    return [u, v, w];
}
// class vec2 {
//     static add(a, b) { return [ a[0] + b[0], a[1] + b[1] ] }
//     static sub(a, b) { return [ a[0] - b[0], a[1] - b[1] ] }
//     static scale(v, k) { return [ v[0] * k, v[1] * k ] }
//     static l(v) { return Math.sqrt(v[0]*v[0] + v[1]*v[1]) }
//     static distance(a, b) {
//         const dx = b[0] - a[0]
//         const dy = b[1] - a[1]
//         return Math.sqrt(dx*dx + dy*dy)
//     }
//     static dot(a, b) { return a[0]*b[0] + a[1]*b[1] }
//     static normalize(v) {
//         var d = Math.sqrt(v[0]*v[0] + v[1]*v[1])
//         return d > 0 ? [ v[0] / d, v[1] / d ] : v
//     }
//     static area(a, b) { return a[0]*b[1] - b[0]*a[1] }
//     static angle(a, b) { return Math.acos(vec2.dot(a, b) / (vec2.l(a) * vec2.l(b))) }
// }
// export function _barycentric2(p: vec.Vector2, a: vec.Vector2, b: vec.Vector2, c: vec.Vector2) {
//     var v0 = vec2.sub(b, a)
//     var v1 = vec2.sub(b, a)
//     var v2 = vec2.sub(p, a)
//     //console.log(v0, v1, v2)
//     var d00 = vec2.dot(v0, v0)
//     var d01 = vec2.dot(v0, v1)
//     var d11 = vec2.dot(v1, v1)
//     var d20 = vec2.dot(v2, v0)
//     var d21 = vec2.dot(v2, v1)
//     var denom = d00 * d11 - d01 * d01
//     var v = (d11 * d20 - d01 * d21) / denom
//     var w = (d00 * d21 - d01 * d20) / denom
//     var u = 1 - v - w
//     return [u, v, w]
// }
/**
 * @category Barycentric
 */
function barycentric3(p, a, b, c) {
    const v0 = from3(a, b);
    const v1 = from3(a, c);
    const Vector2 = from3(a, p);
    const d00 = dot3(v0, v0);
    const d01 = dot3(v0, v1);
    const d11 = dot3(v1, v1);
    const d20 = dot3(Vector2, v0);
    const d21 = dot3(Vector2, v1);
    const denom = 1 / (d00 * d11 - d01 * d01);
    const v = (d11 * d20 - d01 * d21) * denom;
    const w = (d00 * d21 - d01 * d20) * denom;
    const u = 1 - v - w;
    return [u, v, w];
}
// from https://dennis2society.de/painless-tetrahedral-barycentric-mapping
/**
 * @category Barycentric
 */
function barycentric4(p, p0, p1, p2, p3) {
    const trans = (p) => [p[0], p[1], p[2], 1];
    const v0 = trans(p0);
    const v1 = trans(p1);
    const Vector2 = trans(p2);
    const Vector3 = trans(p3);
    const P = trans(p);
    const det0 = determinant4x4(v0, v1, Vector2, Vector3);
    const det1 = determinant4x4(P, v1, Vector2, Vector3);
    const det2 = determinant4x4(v0, P, Vector2, Vector3);
    const det3 = determinant4x4(v0, v1, P, Vector3);
    const det4 = determinant4x4(v0, v1, Vector2, P);
    return [(det1 / det0), (det2 / det0), (det3 / det0), (det4 / det0)];
}
function determinant4x4(v0, v1, v2, v3) {
    return v0[3] * v1[2] * v2[1] * v3[0] - v0[2] * v1[3] * v2[1] * v3[0] -
        v0[3] * v1[1] * v2[2] * v3[0] + v0[1] * v1[3] * v2[2] * v3[0] +
        v0[2] * v1[1] * v2[3] * v3[0] - v0[1] * v1[2] * v2[3] * v3[0] -
        v0[3] * v1[2] * v2[0] * v3[1] + v0[2] * v1[3] * v2[0] * v3[1] +
        v0[3] * v1[0] * v2[2] * v3[1] - v0[0] * v1[3] * v2[2] * v3[1] -
        v0[2] * v1[0] * v2[3] * v3[1] + v0[0] * v1[2] * v2[3] * v3[1] +
        v0[3] * v1[1] * v2[0] * v3[2] - v0[1] * v1[3] * v2[0] * v3[2] -
        v0[3] * v1[0] * v2[1] * v3[2] + v0[0] * v1[3] * v2[1] * v3[2] +
        v0[1] * v1[0] * v2[3] * v3[2] - v0[0] * v1[1] * v2[3] * v3[2] -
        v0[2] * v1[1] * v2[0] * v3[3] + v0[1] * v1[2] * v2[0] * v3[3] +
        v0[2] * v1[0] * v2[1] * v3[3] - v0[0] * v1[2] * v2[1] * v3[3] -
        v0[1] * v1[0] * v2[2] * v3[3] + v0[0] * v1[1] * v2[2] * v3[3];
}


/***/ }),

/***/ "./lib/dataframe/abs.ts":
/*!******************************!*\
  !*** ./lib/dataframe/abs.ts ***!
  \******************************/
/*! exports provided: abs */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27259__) {

"use strict";
__nested_webpack_require_27259__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_27259__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27259__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_27259__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @category Dataframe
 */
const abs = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({
        array: s.array.map(v => Math.abs(v)),
        itemSize: s.itemSize
    });
};


/***/ }),

/***/ "./lib/dataframe/add.ts":
/*!******************************!*\
  !*** ./lib/dataframe/add.ts ***!
  \******************************/
/*! exports provided: add, addNumber */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_28283__) {

"use strict";
__nested_webpack_require_28283__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_28283__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __nested_webpack_require_28283__.d(__webpack_exports__, "addNumber", function() { return addNumber; });
/**
 * Add several Series to generate a new one
 * @example
 * ```ts
 * // perform: a = b + c
 * const a = add([
 *     df.get('b'),
 *     df.get('c'),
 * ])
 * ```
 * @example
 * ```ts
 * // perform: a = 0.1*b + 0.3*c + 0.7*d
 * const a = add([
 *     mult( df.get('b'), 0.1),
 *     mult( df.get('c'), 0.3),
 *     mult( df.get('d'), 0.7)
 * ])
 * ```
 * @category Dataframe
 */
const add = (series) => {
    if (series.length <= 1)
        throw new Error('nb series should be greater than 1');
    const r = series[0].clone(true);
    series.forEach(o => {
        if (o.length !== r.length) {
            throw new Error(`size mistmatch. Cannot add 2 Series of different sizes (${o.length} != ${r.length})`);
        }
        o.array.forEach((v, i) => r.array[i] += v);
    });
    return r;
};
/**
 * Add a number to each value of the array
 * @example
 * ```ts
 * const a = addNumber( df.get('a'), 10 )
 * ```
 * @category Dataframe
 */
const addNumber = (serie, a) => {
    const r = serie.clone(false);
    if (a === 0)
        return r;
    r.array.forEach((v, i) => r.array[i] += a);
    return r;
};


/***/ }),

/***/ "./lib/dataframe/closeTo.ts":
/*!**********************************!*\
  !*** ./lib/dataframe/closeTo.ts ***!
  \**********************************/
/*! exports provided: closeTo */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_29957__) {

"use strict";
__nested_webpack_require_29957__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_29957__.d(__webpack_exports__, "closeTo", function() { return closeTo; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_29957__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_29957__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Check if two series are closely equals (at epsilon)
 * @category Dataframe
 */
const closeTo = (s1, s2, eps = 1e-7) => {
    if (s1 === undefined)
        throw new Error('serie s1 is undefined');
    if (s2 === undefined)
        throw new Error('serie s2 is undefined');
    if (s1.itemSize !== s2.itemSize)
        return false;
    if (s1.count !== s2.count)
        return false;
    const reduced = Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["reduce"])([s1, s2], ([x, y]) => Math.abs(x - y) < eps);
    return reduced.array.reduce((acc, val) => acc && val, true);
};


/***/ }),

/***/ "./lib/dataframe/cross.ts":
/*!********************************!*\
  !*** ./lib/dataframe/cross.ts ***!
  \********************************/
/*! exports provided: cross */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_31292__) {

"use strict";
__nested_webpack_require_31292__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_31292__.d(__webpack_exports__, "cross", function() { return cross; });
/**
 * Cross product only for [[Serie]]s with itemSize=3
 * @category Dataframe
 */
const cross = (A, B) => {
    if (A === undefined)
        throw new Error('serie A is undefined');
    if (B === undefined)
        throw new Error('serie B is undefined');
    if (A.itemSize !== 3)
        throw new Error('cross only supports itemSize=3');
    if (B.itemSize !== 3)
        throw new Error('cross only supports itemSize=3');
    return A.map((a, i) => {
        const b = B.itemAt(i);
        return [
            a[1] * b[2] - a[2] * b[1],
            a[2] * b[0] - a[0] * b[2],
            a[0] * b[1] - a[1] * b[0]
        ];
    });
};


/***/ }),

/***/ "./lib/dataframe/decomposers/area.ts":
/*!*******************************************!*\
  !*** ./lib/dataframe/decomposers/area.ts ***!
  \*******************************************/
/*! exports provided: AreaDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_32420__) {

"use strict";
__nested_webpack_require_32420__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_32420__.d(__webpack_exports__, "AreaDecomposer", function() { return AreaDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32420__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_32420__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_32420__(/*! .. */ "./lib/dataframe/index.ts");
/* harmony import */ var _normals__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_32420__(/*! ./normals */ "./lib/dataframe/decomposers/normals.ts");



/**
 * Get the area of the triangles
 * @category Decomposition
 */
class AreaDecomposer {
    constructor(name = 'area') {
        this.name = name;
    }
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (itemSize !== 1)
            return [];
        if (!Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["exists"])(df, 'positions') && !Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["exists"])(df, 'indices'))
            return [];
        return [this.name];
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (name !== this.name)
            return undefined;
        const normals = (new _normals__WEBPACK_IMPORTED_MODULE_2__["NormalsDecomposer"]).serie(df, itemSize, 'normals');
        if (normals)
            return Object(___WEBPACK_IMPORTED_MODULE_1__["div"])(Object(___WEBPACK_IMPORTED_MODULE_1__["norm"])(normals), 2); //.setName(this.name)
        return undefined;
    }
}


/***/ }),

/***/ "./lib/dataframe/decomposers/component.ts":
/*!************************************************!*\
  !*** ./lib/dataframe/decomposers/component.ts ***!
  \************************************************/
/*! exports provided: ComponentDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_34483__) {

"use strict";
__nested_webpack_require_34483__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_34483__.d(__webpack_exports__, "ComponentDecomposer", function() { return ComponentDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_34483__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_34483__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Allows to get components of serie for which itemSize > 1.
 *
 * For instance, for a serie named `U` with `itemSize=3`, components names will be
 * `Ux`, `Uy` and `Uz` (3 components).
 *
 * For a serie named `S` with `itemSize=6` (symmetric rank 2 tensor of dim 3), components names will be
 * `Sxx`, `Sxy`, `Sxz`, `Syy`, `Syz` and `Szz` (6 components).
 *
 * For a serie named `S` with `itemSize=9` (general rank 2 tensor of dim 3), components names
 * will be `Sxx`, `Sxy`, `Sxz`, `Syx`, `Syy`, `Syz`, `Szx`, `Szy` and `Szz` (9 components).
 *
 * For all other series, index number are appended to the serie's name, starting at zero.
 * For example, for a serie named `E` with `itemSize=4`, components names will be
 * `E0`, `E1`, `E2` and `E3`.
 * @category Decomposition
 */
class ComponentDecomposer {
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        // Passed name is, e.g., 'U' and itemSize=3
        const sname = Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["nameOfSerie"])(df, serie);
        if (name === sname && serie.itemSize === 1)
            return [];
        if (itemSize > 1)
            return [];
        // Avoid using 'positions' and 'indices'
        if (name === 'positions' || name === 'indices')
            return [];
        switch (serie.itemSize) {
            case 3: return vector3Names.map(n => name + n);
            case 6: return smatrix3Names.map(n => name + n);
            case 9: return matrix3Names.map(n => name + n);
        }
        let names = [];
        for (let i = 0; i < itemSize; ++i)
            names.push(name + i);
        return names;
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (itemSize > 1)
            return undefined;
        // vector3
        let newName = name.substring(0, name.length - 1);
        let serie = df.series[newName];
        if (serie) {
            for (let i = 0; i < vector3Names.length; ++i) {
                if (name === newName + vector3Names[i]) {
                    return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(serie, item => item[i]); //.setName(newName+vector3Names[i])
                }
            }
        }
        // smatrix3 and matrix3
        newName = name.substring(0, name.length - 2);
        serie = df.series[newName];
        if (serie) {
            for (let i = 0; i < smatrix3Names.length; ++i) {
                if (name === newName + smatrix3Names[i]) {
                    return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(serie, item => item[i]); //.setName(newName+smatrix3Names[i])
                }
            }
            for (let i = 0; i < matrix3Names.length; ++i) {
                if (name === newName + matrix3Names[i]) {
                    return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(serie, item => item[i]); //.setName(newName+matrix3Names[i])
                }
            }
        }
        // Others: use integer
        newName = name.substring(0, name.length - 1);
        serie = df.series[newName];
        if (serie) {
            for (let i = 0; i < itemSize; ++i) {
                if (name === newName + i) {
                    return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(serie, item => item[i]); //.setName(newName+i)
                }
            }
        }
    }
}
const vector3Names = ['x', 'y', 'z'];
const smatrix3Names = ['xx', 'xy', 'xz', 'yy', 'yz', 'zz'];
const matrix3Names = ['xx', 'xy', 'xz', 'yx', 'yy', 'yz', 'zx', 'zy', 'zz'];


/***/ }),

/***/ "./lib/dataframe/decomposers/eigen.ts":
/*!********************************************!*\
  !*** ./lib/dataframe/decomposers/eigen.ts ***!
  \********************************************/
/*! exports provided: EigenValuesDecomposer, EigenVectorsDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_38911__) {

"use strict";
__nested_webpack_require_38911__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_38911__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return EigenValuesDecomposer; });
/* harmony export (binding) */ __nested_webpack_require_38911__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return EigenVectorsDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_38911__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_38911__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_38911__(/*! .. */ "./lib/dataframe/index.ts");


/**
 * Eigen values for series with itemSize = 6
 * @category Decomposition
 */
class EigenValuesDecomposer {
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (serie.itemSize !== 6 || itemSize !== 1)
            return [];
        return [name + '1', name + '2', name + '3'];
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (itemSize !== 1)
            return undefined;
        let newName = name.substring(0, name.length - 1);
        let serie = df.series[newName];
        let id = parseInt(name.charAt(name.length - 1));
        if (serie === undefined)
            return undefined;
        if (serie.itemSize !== 6)
            return undefined;
        if (id < 1 || id > 3)
            return undefined;
        return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(Object(___WEBPACK_IMPORTED_MODULE_1__["eigenValue"])(serie), item => item[id - 1]); //.setName(name)
    }
}
/**
 * Eigen vectors for series with itemSize = 6
 * @category Decomposition
 */
class EigenVectorsDecomposer {
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (serie.itemSize !== 6 || itemSize !== 3)
            return [];
        return [name + '1', name + '2', name + '3'];
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (itemSize !== 3)
            return undefined;
        let newName = name.substring(0, name.length - 1);
        let serie = df.series[newName];
        let id = parseInt(name.charAt(name.length - 1));
        if (serie === undefined)
            return undefined;
        if (serie.itemSize !== 6)
            return undefined;
        if (id < 1 || id > 3)
            return undefined;
        id -= 1; // now in between 0 and 2
        return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(Object(___WEBPACK_IMPORTED_MODULE_1__["eigenVector"])(serie), item => [item[3 * id], item[3 * id + 1], item[3 * id + 2]]); //.setName(name)
    }
}


/***/ }),

/***/ "./lib/dataframe/decomposers/fringes.ts":
/*!**********************************************!*\
  !*** ./lib/dataframe/decomposers/fringes.ts ***!
  \**********************************************/
/*! exports provided: Fringes */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_42021__) {

"use strict";
__nested_webpack_require_42021__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_42021__.d(__webpack_exports__, "Fringes", function() { return Fringes; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42021__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_42021__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Transform a scalar attribute into multiple fringes
 * @category Decomposition
 */
class Fringes {
    constructor(name, fringes) {
        this.name = name;
        this.fringes = fringes;
    }
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (itemSize !== 1)
            return [];
        return [this.name];
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (name !== this.name)
            return undefined;
        const u = df.series[this.name];
        if (!u)
            return undefined;
        const frac = (val) => val - Math.floor(val);
        return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(u, v => Math.abs(this.fringes * frac(v / this.fringes)));
    }
}


/***/ }),

/***/ "./lib/dataframe/decomposers/index.ts":
/*!********************************************!*\
  !*** ./lib/dataframe/decomposers/index.ts ***!
  \********************************************/
/*! exports provided: ComponentDecomposer, PositionDecomposer, EigenValuesDecomposer, EigenVectorsDecomposer, VectorNormDecomposer, NormalsDecomposer, ValenceDecomposer, AreaDecomposer, Fringes */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_43745__) {

"use strict";
__nested_webpack_require_43745__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43745__(/*! ./component */ "./lib/dataframe/decomposers/component.ts");
/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "ComponentDecomposer", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["ComponentDecomposer"]; });

/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43745__(/*! ./position */ "./lib/dataframe/decomposers/position.ts");
/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "PositionDecomposer", function() { return _position__WEBPACK_IMPORTED_MODULE_1__["PositionDecomposer"]; });

/* harmony import */ var _eigen__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_43745__(/*! ./eigen */ "./lib/dataframe/decomposers/eigen.ts");
/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return _eigen__WEBPACK_IMPORTED_MODULE_2__["EigenValuesDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return _eigen__WEBPACK_IMPORTED_MODULE_2__["EigenVectorsDecomposer"]; });

/* harmony import */ var _norm__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_43745__(/*! ./norm */ "./lib/dataframe/decomposers/norm.ts");
/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "VectorNormDecomposer", function() { return _norm__WEBPACK_IMPORTED_MODULE_3__["VectorNormDecomposer"]; });

/* harmony import */ var _normals__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_43745__(/*! ./normals */ "./lib/dataframe/decomposers/normals.ts");
/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "NormalsDecomposer", function() { return _normals__WEBPACK_IMPORTED_MODULE_4__["NormalsDecomposer"]; });

/* harmony import */ var _valence__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_43745__(/*! ./valence */ "./lib/dataframe/decomposers/valence.ts");
/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "ValenceDecomposer", function() { return _valence__WEBPACK_IMPORTED_MODULE_5__["ValenceDecomposer"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_43745__(/*! ./area */ "./lib/dataframe/decomposers/area.ts");
/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "AreaDecomposer", function() { return _area__WEBPACK_IMPORTED_MODULE_6__["AreaDecomposer"]; });

/* harmony import */ var _fringes__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_43745__(/*! ./fringes */ "./lib/dataframe/decomposers/fringes.ts");
/* harmony reexport (safe) */ __nested_webpack_require_43745__.d(__webpack_exports__, "Fringes", function() { return _fringes__WEBPACK_IMPORTED_MODULE_7__["Fringes"]; });











/***/ }),

/***/ "./lib/dataframe/decomposers/norm.ts":
/*!*******************************************!*\
  !*** ./lib/dataframe/decomposers/norm.ts ***!
  \*******************************************/
/*! exports provided: VectorNormDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_46883__) {

"use strict";
__nested_webpack_require_46883__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_46883__.d(__webpack_exports__, "VectorNormDecomposer", function() { return VectorNormDecomposer; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46883__(/*! .. */ "./lib/dataframe/index.ts");

/**
 * Get the norm of any serie with itemSize > 1 (i.e., norm of any vector)
 * @category Decomposition
 */
class VectorNormDecomposer {
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (serie.itemSize <= 1 || itemSize !== 1)
            return [];
        return [name]; // same name as the vector but will be a scalar (itemSize=1)
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (itemSize !== 1)
            return undefined;
        let serie = df.series[name]; // since same name
        if (serie === undefined)
            return undefined;
        if (serie.itemSize <= 1)
            return undefined;
        return Object(___WEBPACK_IMPORTED_MODULE_0__["norm"])(serie); //.setName(name)
    }
}


/***/ }),

/***/ "./lib/dataframe/decomposers/normals.ts":
/*!**********************************************!*\
  !*** ./lib/dataframe/decomposers/normals.ts ***!
  \**********************************************/
/*! exports provided: NormalsDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_48301__) {

"use strict";
__nested_webpack_require_48301__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_48301__.d(__webpack_exports__, "NormalsDecomposer", function() { return NormalsDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48301__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_48301__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48301__(/*! ../../ */ "./lib/index.ts");


/**
 * Get normals to the triangles of a mesh
 * @category Decomposition
 */
class NormalsDecomposer {
    constructor(name = 'normals') {
        this.name = name;
    }
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (itemSize !== 3)
            return [];
        if (!Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["exists"])(df, 'positions') && !Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["exists"])(df, 'indices'))
            return [];
        return [this.name];
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (name !== this.name)
            return undefined;
        const positions = df.series['positions'];
        const indices = df.series['indices'];
        if (!positions || !indices)
            return undefined;
        const data = new Array(indices.count).fill(0);
        let i = 0;
        indices.forEach(t => {
            const v1 = positions.itemAt(t[0]);
            const v2 = positions.itemAt(t[1]);
            const v3 = positions.itemAt(t[2]);
            const n = ___WEBPACK_IMPORTED_MODULE_1__["vec"].cross(___WEBPACK_IMPORTED_MODULE_1__["vec"].create(v1, v2), ___WEBPACK_IMPORTED_MODULE_1__["vec"].create(v1, v3));
            data[i++] = n[0];
            data[i++] = n[1];
            data[i++] = n[2];
        });
        return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({ array: Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Float32Array, data, true), itemSize: 3 }); //.setName(this.name)
        //return createSerie({data: createTyped(Float32Array, data, true), itemSize: 3}).setName(this.name)
    }
}


/***/ }),

/***/ "./lib/dataframe/decomposers/position.ts":
/*!***********************************************!*\
  !*** ./lib/dataframe/decomposers/position.ts ***!
  \***********************************************/
/*! exports provided: PositionDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_50927__) {

"use strict";
__nested_webpack_require_50927__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_50927__.d(__webpack_exports__, "PositionDecomposer", function() { return PositionDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50927__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_50927__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Make x, y and z coordinates accessible as serie if `position' is
 * present in the dataframe.
 * @category Decomposition
 */
class PositionDecomposer {
    /**
     *
     * @param names_ The names for the position coordinates
     * @default names = `['x', 'y', 'z']`
     */
    constructor(names_ = ['x', 'y', 'z']) {
        this.names_ = names_;
        if (names_.length !== 3)
            throw new Error('names must be an array of 3 strings');
    }
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (itemSize !== 1 || name !== 'positions')
            return [];
        return this.names_;
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (itemSize === 1) {
            const serie = df.series['positions'];
            switch (name) {
                case this.names_[0]: return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(serie, item => item[0]); //.setName(this.names_[0])
                case this.names_[1]: return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(serie, item => item[1]); //.setName(this.names_[1])
                case this.names_[2]: return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["apply"])(serie, item => item[2]); //.setName(this.names_[2])
            }
        }
    }
}


/***/ }),

/***/ "./lib/dataframe/decomposers/valence.ts":
/*!**********************************************!*\
  !*** ./lib/dataframe/decomposers/valence.ts ***!
  \**********************************************/
/*! exports provided: ValenceDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_53088__) {

"use strict";
__nested_webpack_require_53088__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_53088__.d(__webpack_exports__, "ValenceDecomposer", function() { return ValenceDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53088__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_53088__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Get the valence for each node (nb of incident triangles)
 * @category Decomposition
 */
class ValenceDecomposer {
    constructor(name = 'valence') {
        this.name = name;
    }
    /**
     * @hidden
     */
    names(df, itemSize, serie, name) {
        if (itemSize !== 1)
            return [];
        if (!Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["exists"])(df, 'positions') && !Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["exists"])(df, 'indices'))
            return [];
        return [this.name];
    }
    /**
     * @hidden
     */
    serie(df, itemSize, name) {
        if (name !== this.name)
            return undefined;
        const positions = df.series['positions'];
        const indices = df.series['indices'];
        if (!positions || !indices)
            return undefined;
        const ids = new Array(positions.count).fill(0);
        indices.forEach(t => {
            ids[t[0]]++;
            ids[t[1]]++;
            ids[t[2]]++;
        });
        return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({ array: Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["createTyped"])(Int8Array, ids, true), itemSize: 1 }); //.setName(this.name)
    }
}


/***/ }),

/***/ "./lib/dataframe/determinant.ts":
/*!**************************************!*\
  !*** ./lib/dataframe/determinant.ts ***!
  \**************************************/
/*! exports provided: determinant */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_55116__) {

"use strict";
__nested_webpack_require_55116__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_55116__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_55116__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_55116__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Get the determinant of each item of a [[Serie]] (if matrix).
 * itemSize should (for the moment) either 6 (symmetric matrix) or 9.
 * @category Dataframe
 */
function determinant(s) {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize !== 6 && s.itemSize !== 9)
        throw new Error('item size should be 6 or 9');
    const matrix = (v) => v.length === 6 ? Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["symSquaredMatrix"])(v) : Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["squaredMatrix"])(v);
    return s.map(v => {
        const m = matrix(v);
        return m.at(0, 0) * m.at(1, 1) * m.at(2, 2) -
            m.at(0, 0) * m.at(1, 2) * m.at(2, 1) -
            m.at(0, 1) * m.at(1, 0) * m.at(2, 2) +
            m.at(0, 1) * m.at(1, 2) * m.at(2, 0) +
            m.at(0, 2) * m.at(1, 0) * m.at(2, 1) -
            m.at(0, 2) * m.at(1, 1) * m.at(2, 0);
    });
}


/***/ }),

/***/ "./lib/dataframe/div.ts":
/*!******************************!*\
  !*** ./lib/dataframe/div.ts ***!
  \******************************/
/*! exports provided: div */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_56793__) {

"use strict";
__nested_webpack_require_56793__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_56793__.d(__webpack_exports__, "div", function() { return div; });
/**
 * @example
 * ```ts
 * // perform a = b/c/d
 * const a = div( df.get('b'), df.get('c'), df.get('d') )
 * ```
 * @category Dataframe
 */
const div = (s, ...others) => {
    if (s === undefined)
        return undefined;
    if (!others)
        throw new Error('cannot divide undefined to s');
    const r = s.clone();
    // rest
    if (others) {
        others.forEach(o => {
            if (typeof (o) === 'number') {
                r.array.forEach((_, i) => r.array[i] /= o);
            }
            else {
                if (o.length !== s.length) {
                    throw new Error(`size mistmatch. Cannot divide 2 Series of different sizes (${o.length} != ${s.length})`);
                }
                o.array.forEach((v, i) => r.array[i] /= v);
            }
        });
    }
    return r;
};


/***/ }),

/***/ "./lib/dataframe/dot.ts":
/*!******************************!*\
  !*** ./lib/dataframe/dot.ts ***!
  \******************************/
/*! exports provided: dot */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_58029__) {

"use strict";
__nested_webpack_require_58029__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_58029__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58029__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_58029__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @category Dataframe
 */
const dot = (a, b) => {
    if (a === undefined)
        throw new Error('serie a is undefined');
    if (b === undefined)
        throw new Error('serie or Vector b is undefined');
    if (_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].isSerie(b) === true) {
        //if ('array' in b) {
        return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["map"])([a, b], ([v1, v2]) => Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["vector"])(v1).dot(Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["vector"])(v2)));
    }
    return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["map"])(a, v1 => Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["vector"])(v1).dot(Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["vector"])(b)));
};
// declare module "@youwol/dataframe/src/lib/serie" {
//     export interface Serie {
//         dot(a: Serie | vec.IVector)
//     }
// }
// export {}
// Serie.prototype.dot = function (b: Serie | vec.IVector) { return dot(this, b) }


/***/ }),

/***/ "./lib/dataframe/eigen.ts":
/*!********************************!*\
  !*** ./lib/dataframe/eigen.ts ***!
  \********************************/
/*! exports provided: eigenValue, eigenVector */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_59827__) {

"use strict";
__nested_webpack_require_59827__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_59827__.d(__webpack_exports__, "eigenValue", function() { return eigenValue; });
/* harmony export (binding) */ __nested_webpack_require_59827__.d(__webpack_exports__, "eigenVector", function() { return eigenVector; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59827__(/*! ../ */ "./lib/index.ts");

/**
 * Get eigen values
 * @category Dataframe
 */
const eigenValue = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize !== 6 && s.itemSize !== 9)
        throw new Error('Series does not have itemSize = 6 or 9 (symmetric tensor [xx,xy,xz,yy,yz,zz] or [xx,xy,xz,yx,yy,yz,zx,zy,zz])');
    const r = s.image(s.count, 3);
    const count = s.count;
    let k = 0;
    for (let i = 0; i < count; ++i) {
        let a = s.itemAt(i);
        const e = Object(___WEBPACK_IMPORTED_MODULE_0__["eigen"])(a);
        r.array[k++] = e.values[0];
        r.array[k++] = e.values[1];
        r.array[k++] = e.values[2];
    }
    return r;
};
/**
 * Get eigen vectors. itemSize of the returned Serie is therefore 9 and the coordinates of the
 * three eigen vectors are classified as follow: `[v1x,v1y,v1z, v2x,v2y,v2z, v3x, v3y, v3z]`
 * @category Dataframe
 */
const eigenVector = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize !== 6 && s.itemSize !== 9)
        throw new Error('Series does not have itemSize = 6 or 9 (symmetric tensor [xx,xy,xz,yy,yz,zz] or [xx,xy,xz,yx,yy,yz,zx,zy,zz])');
    const r = s.image(s.count, 9);
    const count = s.count;
    let k = 0;
    for (let i = 0; i < count; ++i) {
        let a = s.itemAt(i);
        const e = Object(___WEBPACK_IMPORTED_MODULE_0__["eigen"])(a);
        e.vectors.forEach(v => r.array[k++] = v);
    }
    return r;
};


/***/ }),

/***/ "./lib/dataframe/equals.ts":
/*!*********************************!*\
  !*** ./lib/dataframe/equals.ts ***!
  \*********************************/
/*! exports provided: equals */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_61982__) {

"use strict";
__nested_webpack_require_61982__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_61982__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_61982__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_61982__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Check if two series are strictly equals
 * @category Dataframe
 */
const equals = (s1, s2) => {
    if (s1 === undefined)
        throw new Error('serie s1 is undefined');
    if (s2 === undefined)
        throw new Error('serie s2 is undefined');
    if (s1.itemSize !== s2.itemSize)
        return false;
    if (s1.count !== s2.count)
        return false;
    const reduced = Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["reduce"])([s1, s2], ([x, y]) => x === y);
    return reduced.array.reduce((acc, val) => acc && val, true);
};


/***/ }),

/***/ "./lib/dataframe/extensions.ts":
/*!*************************************!*\
  !*** ./lib/dataframe/extensions.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_63292__) {

"use strict";
__nested_webpack_require_63292__.r(__webpack_exports__);
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63292__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_63292__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63292__(/*! . */ "./lib/dataframe/index.ts");
// Test the extension of the module Serie


_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.abs = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["abs"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.add = function (b) { return Array.isArray(b) ? Object(___WEBPACK_IMPORTED_MODULE_1__["add"])([this, ...b]) : Object(___WEBPACK_IMPORTED_MODULE_1__["add"])([this, b]); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.cross = function (b) { return Object(___WEBPACK_IMPORTED_MODULE_1__["cross"])(this, b); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.dot = function (b) { return Object(___WEBPACK_IMPORTED_MODULE_1__["dot"])(this, b); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.determinant = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["determinant"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.div = function (...b) { return Object(___WEBPACK_IMPORTED_MODULE_1__["div"])(this, ...b); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.eigenValue = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["eigenValue"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.eigenVector = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["eigenVector"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.getNaN = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["getNaN"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.inv = function (throwOnDegenerate = false) { return Object(___WEBPACK_IMPORTED_MODULE_1__["inv"])(this, throwOnDegenerate); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.invert = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["invert"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.mult = function (...b) { return Object(___WEBPACK_IMPORTED_MODULE_1__["mult"])(this, ...b); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.multMat = function (b) { return Object(___WEBPACK_IMPORTED_MODULE_1__["multMat"])(this, b); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.negate = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["negate"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.norm = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["norm"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.normalize = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["normalize"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.rand = function (a = 0, b = 1) { return Object(___WEBPACK_IMPORTED_MODULE_1__["rand"])(this, a, b); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.rotate = function (rot) { return Object(___WEBPACK_IMPORTED_MODULE_1__["rotate"])(this, rot); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.round = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["round"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.scale = function (t) { return Object(___WEBPACK_IMPORTED_MODULE_1__["scale"])(this, t); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.square = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["square"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.sub = function (...b) { return Object(___WEBPACK_IMPORTED_MODULE_1__["sub"])(this, ...b); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.tagNaN = function (fn) { return Object(___WEBPACK_IMPORTED_MODULE_1__["tagNaN"])(this, fn); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.trace = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["trace"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.translate = function (b) { return Object(___WEBPACK_IMPORTED_MODULE_1__["translate"])(this, b); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.transpose = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["transpose"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.trunc = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["trunc"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.unitInterval = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["unitInterval"])(this); };
//
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.minMax = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["minMax"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.sum = function () { return Object(___WEBPACK_IMPORTED_MODULE_1__["sum"])(this); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.closeTo = function (a, eps = 1e-7) { return Object(___WEBPACK_IMPORTED_MODULE_1__["closeTo"])(this, a, eps); };
_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].prototype.equals = function (a) { return Object(___WEBPACK_IMPORTED_MODULE_1__["equals"])(this, a); };


/***/ }),

/***/ "./lib/dataframe/getNaN.ts":
/*!*********************************!*\
  !*** ./lib/dataframe/getNaN.ts ***!
  \*********************************/
/*! exports provided: getNaN */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_69281__) {

"use strict";
__nested_webpack_require_69281__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_69281__.d(__webpack_exports__, "getNaN", function() { return getNaN; });
/**
 * Get the indices of Nan values in a serie. For series with itemSize>1,
 * return the indices of the items
 * @example
 * ```ts
 * const a = createSerie( {data: [1, 2, NaN, 4, NaN, 6], itemSize: 1} )
 * console.log( getNaN(a) )
 * // [ 2, 4 ]
 * ```
 * @category Dataframe
 */
const getNaN = (a) => {
    const r = [];
    if (a.itemSize === 1) {
        a.forEach((item, i) => {
            if (Number.isNaN(item))
                r.push(i);
        });
    }
    else {
        const n = a.itemSize;
        a.forEach((item, i) => {
            for (let j = 0; j < n; ++j) {
                if (Number.isNaN(item[j])) {
                    r.push(i);
                    break;
                }
            }
        });
    }
    return r;
};


/***/ }),

/***/ "./lib/dataframe/index.ts":
/*!********************************!*\
  !*** ./lib/dataframe/index.ts ***!
  \********************************/
/*! exports provided: eigenValue, eigenVector, add, addNumber, sub, mult, multMat, div, trace, norm, norm2, transpose, square, abs, dot, cross, normalize, unitInterval, negate, invert, weightedSum, sum, tagNaN, rand, round, trunc, minMax, min, max, equals, closeTo, getNaN, inv, rotate, translate, scale, determinant, covariance, variance, mean, weightedMean, quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers, describe, std, ComponentDecomposer, PositionDecomposer, EigenValuesDecomposer, EigenVectorsDecomposer, VectorNormDecomposer, NormalsDecomposer, ValenceDecomposer, AreaDecomposer, Fringes */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_71051__) {

"use strict";
__nested_webpack_require_71051__.r(__webpack_exports__);
/* harmony import */ var _eigen__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_71051__(/*! ./eigen */ "./lib/dataframe/eigen.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "eigenValue", function() { return _eigen__WEBPACK_IMPORTED_MODULE_0__["eigenValue"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "eigenVector", function() { return _eigen__WEBPACK_IMPORTED_MODULE_0__["eigenVector"]; });

/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_71051__(/*! ./add */ "./lib/dataframe/add.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "add", function() { return _add__WEBPACK_IMPORTED_MODULE_1__["add"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "addNumber", function() { return _add__WEBPACK_IMPORTED_MODULE_1__["addNumber"]; });

/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_71051__(/*! ./sub */ "./lib/dataframe/sub.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "sub", function() { return _sub__WEBPACK_IMPORTED_MODULE_2__["sub"]; });

/* harmony import */ var _mult__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_71051__(/*! ./mult */ "./lib/dataframe/mult.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "mult", function() { return _mult__WEBPACK_IMPORTED_MODULE_3__["mult"]; });

/* harmony import */ var _multMat__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_71051__(/*! ./multMat */ "./lib/dataframe/multMat.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "multMat", function() { return _multMat__WEBPACK_IMPORTED_MODULE_4__["multMat"]; });

/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_71051__(/*! ./div */ "./lib/dataframe/div.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "div", function() { return _div__WEBPACK_IMPORTED_MODULE_5__["div"]; });

/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_71051__(/*! ./trace */ "./lib/dataframe/trace.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "trace", function() { return _trace__WEBPACK_IMPORTED_MODULE_6__["trace"]; });

/* harmony import */ var _norm__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_71051__(/*! ./norm */ "./lib/dataframe/norm.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "norm", function() { return _norm__WEBPACK_IMPORTED_MODULE_7__["norm"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "norm2", function() { return _norm__WEBPACK_IMPORTED_MODULE_7__["norm2"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_71051__(/*! ./transpose */ "./lib/dataframe/transpose.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "transpose", function() { return _transpose__WEBPACK_IMPORTED_MODULE_8__["transpose"]; });

/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_71051__(/*! ./square */ "./lib/dataframe/square.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "square", function() { return _square__WEBPACK_IMPORTED_MODULE_9__["square"]; });

/* harmony import */ var _abs__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_71051__(/*! ./abs */ "./lib/dataframe/abs.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "abs", function() { return _abs__WEBPACK_IMPORTED_MODULE_10__["abs"]; });

/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_71051__(/*! ./dot */ "./lib/dataframe/dot.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "dot", function() { return _dot__WEBPACK_IMPORTED_MODULE_11__["dot"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_71051__(/*! ./cross */ "./lib/dataframe/cross.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "cross", function() { return _cross__WEBPACK_IMPORTED_MODULE_12__["cross"]; });

/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_71051__(/*! ./normalize */ "./lib/dataframe/normalize.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "normalize", function() { return _normalize__WEBPACK_IMPORTED_MODULE_13__["normalize"]; });

/* harmony import */ var _unitInterval__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_71051__(/*! ./unitInterval */ "./lib/dataframe/unitInterval.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "unitInterval", function() { return _unitInterval__WEBPACK_IMPORTED_MODULE_14__["unitInterval"]; });

/* harmony import */ var _negate__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_71051__(/*! ./negate */ "./lib/dataframe/negate.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "negate", function() { return _negate__WEBPACK_IMPORTED_MODULE_15__["negate"]; });

/* harmony import */ var _invert__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_71051__(/*! ./invert */ "./lib/dataframe/invert.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "invert", function() { return _invert__WEBPACK_IMPORTED_MODULE_16__["invert"]; });

/* harmony import */ var _weightedSum__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_71051__(/*! ./weightedSum */ "./lib/dataframe/weightedSum.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "weightedSum", function() { return _weightedSum__WEBPACK_IMPORTED_MODULE_17__["weightedSum"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_71051__(/*! ./sum */ "./lib/dataframe/sum.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_18__["sum"]; });

/* harmony import */ var _tagNaN__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_71051__(/*! ./tagNaN */ "./lib/dataframe/tagNaN.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "tagNaN", function() { return _tagNaN__WEBPACK_IMPORTED_MODULE_19__["tagNaN"]; });

/* harmony import */ var _rand__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_71051__(/*! ./rand */ "./lib/dataframe/rand.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "rand", function() { return _rand__WEBPACK_IMPORTED_MODULE_20__["rand"]; });

/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_71051__(/*! ./round */ "./lib/dataframe/round.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "round", function() { return _round__WEBPACK_IMPORTED_MODULE_21__["round"]; });

/* harmony import */ var _trunc__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_71051__(/*! ./trunc */ "./lib/dataframe/trunc.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "trunc", function() { return _trunc__WEBPACK_IMPORTED_MODULE_22__["trunc"]; });

/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_71051__(/*! ./minMax */ "./lib/dataframe/minMax.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "minMax", function() { return _minMax__WEBPACK_IMPORTED_MODULE_23__["minMax"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "min", function() { return _minMax__WEBPACK_IMPORTED_MODULE_23__["min"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "max", function() { return _minMax__WEBPACK_IMPORTED_MODULE_23__["max"]; });

/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_71051__(/*! ./equals */ "./lib/dataframe/equals.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "equals", function() { return _equals__WEBPACK_IMPORTED_MODULE_24__["equals"]; });

/* harmony import */ var _closeTo__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_71051__(/*! ./closeTo */ "./lib/dataframe/closeTo.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "closeTo", function() { return _closeTo__WEBPACK_IMPORTED_MODULE_25__["closeTo"]; });

/* harmony import */ var _getNaN__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_71051__(/*! ./getNaN */ "./lib/dataframe/getNaN.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "getNaN", function() { return _getNaN__WEBPACK_IMPORTED_MODULE_26__["getNaN"]; });

/* harmony import */ var _inv__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_71051__(/*! ./inv */ "./lib/dataframe/inv.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "inv", function() { return _inv__WEBPACK_IMPORTED_MODULE_27__["inv"]; });

/* harmony import */ var _rotate__WEBPACK_IMPORTED_MODULE_28__ = __nested_webpack_require_71051__(/*! ./rotate */ "./lib/dataframe/rotate.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "rotate", function() { return _rotate__WEBPACK_IMPORTED_MODULE_28__["rotate"]; });

/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_29__ = __nested_webpack_require_71051__(/*! ./translate */ "./lib/dataframe/translate.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "translate", function() { return _translate__WEBPACK_IMPORTED_MODULE_29__["translate"]; });

/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_30__ = __nested_webpack_require_71051__(/*! ./scale */ "./lib/dataframe/scale.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "scale", function() { return _scale__WEBPACK_IMPORTED_MODULE_30__["scale"]; });

/* harmony import */ var _determinant__WEBPACK_IMPORTED_MODULE_31__ = __nested_webpack_require_71051__(/*! ./determinant */ "./lib/dataframe/determinant.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "determinant", function() { return _determinant__WEBPACK_IMPORTED_MODULE_31__["determinant"]; });

/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_32__ = __nested_webpack_require_71051__(/*! ./stats */ "./lib/dataframe/stats/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "covariance", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["covariance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "variance", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["variance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "mean", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["mean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "weightedMean", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["weightedMean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "quantile", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["quantile"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "q25", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["q25"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "q50", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["q50"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "q75", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["q75"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "IQR", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["IQR"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "outliers", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["outliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "isOutliers", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["isOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "notOutliers", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["notOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "describe", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["describe"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "std", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["std"]; });

/* harmony import */ var _decomposers__WEBPACK_IMPORTED_MODULE_33__ = __nested_webpack_require_71051__(/*! ./decomposers */ "./lib/dataframe/decomposers/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "ComponentDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["ComponentDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "PositionDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["PositionDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["EigenValuesDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["EigenVectorsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "VectorNormDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["VectorNormDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "NormalsDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["NormalsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "ValenceDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["ValenceDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "AreaDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["AreaDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71051__.d(__webpack_exports__, "Fringes", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["Fringes"]; });

/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_34__ = __nested_webpack_require_71051__(/*! ./extensions */ "./lib/dataframe/extensions.ts");
/* empty/unused harmony star reexport */































//export * from './interpolate'





/***/ }),

/***/ "./lib/dataframe/inv.ts":
/*!******************************!*\
  !*** ./lib/dataframe/inv.ts ***!
  \******************************/
/*! exports provided: inv */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_85707__) {

"use strict";
__nested_webpack_require_85707__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_85707__.d(__webpack_exports__, "inv", function() { return inv; });
/**
 * Inverse of matrix3
 * @category Dataframe
 */
const inv = (s, throwOnDegenerate = false) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize !== 6 && s.itemSize !== 9)
        throw new Error('itemSize must be 6 or 9');
    if (s.itemSize === 9) {
        // https://stackoverflow.com/a/18504573
        return s.map((m, index) => {
            const det = m[0] * (m[4] * m[8] - m[7] * m[5]) -
                m[1] * (m[3] * m[8] - m[5] * m[6]) +
                m[2] * (m[3] * m[7] - m[4] * m[6]);
            if (det === 0) {
                let msg = `matrix at index${index} has a determinant = 0`;
                if (throwOnDegenerate === true) {
                    throw new Error(msg);
                }
                else {
                    console.warn(msg);
                }
                return [0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
            const invdet = 1 / det;
            const minv = [];
            minv[0] = (m[4] * m[8] - m[7] * m[5]) * invdet;
            minv[1] = (m[2] * m[7] - m[1] * m[8]) * invdet;
            minv[2] = (m[1] * m[5] - m[2] * m[4]) * invdet;
            minv[3] = (m[5] * m[6] - m[3] * m[8]) * invdet;
            minv[4] = (m[0] * m[8] - m[2] * m[6]) * invdet;
            minv[5] = (m[3] * m[2] - m[0] * m[5]) * invdet;
            minv[6] = (m[3] * m[7] - m[6] * m[4]) * invdet;
            minv[7] = (m[6] * m[1] - m[0] * m[7]) * invdet;
            minv[8] = (m[0] * m[4] - m[3] * m[1]) * invdet;
            return minv;
        });
    }
    else {
        return s.map((me, index) => {
            let n11 = me[0], n12 = me[1], n13 = me[2], n21 = n12, n22 = me[3], n23 = me[4], n31 = n13, n32 = n23, n33 = me[5];
            let t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
            if (det === 0) {
                let msg = `matrix at index${index} has a determinant = 0`;
                if (throwOnDegenerate === true) {
                    throw new Error(msg);
                }
                else {
                    console.warn(msg);
                }
                return [0, 0, 0, 0, 0, 0];
            }
            let detInv = 1 / det;
            return [t11 * detInv, t12 * detInv, t13 * detInv,
                (n33 * n11 - n31 * n13) * detInv, (n31 * n12 - n32 * n11) * detInv,
                (n22 * n11 - n21 * n12) * detInv];
        });
    }
};


/***/ }),

/***/ "./lib/dataframe/invert.ts":
/*!*********************************!*\
  !*** ./lib/dataframe/invert.ts ***!
  \*********************************/
/*! exports provided: invert */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_88622__) {

"use strict";
__nested_webpack_require_88622__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_88622__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88622__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_88622__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @category Dataframe
 */
const invert = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({
        array: s.array.map(v => 1 / v),
        itemSize: s.itemSize
    });
};


/***/ }),

/***/ "./lib/dataframe/minMax.ts":
/*!*********************************!*\
  !*** ./lib/dataframe/minMax.ts ***!
  \*********************************/
/*! exports provided: minMax, min, max */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_89663__) {

"use strict";
__nested_webpack_require_89663__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_89663__.d(__webpack_exports__, "minMax", function() { return minMax; });
/* harmony export (binding) */ __nested_webpack_require_89663__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __nested_webpack_require_89663__.d(__webpack_exports__, "max", function() { return max; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_89663__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_89663__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Get the min and max of a Serie.
 * The returned array is [min1, min2..., max1, max2...], where 1, 2...
 * is the itemSize.
 * @category Dataframe
 */
const minMax = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize === 1) {
        return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["array"].minMax(s.array);
    }
    const m = new Array(s.itemSize).fill(Number.POSITIVE_INFINITY);
    const M = new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY);
    s.forEach(item => {
        item.forEach((v, i) => {
            if (v < m[i])
                m[i] = v;
            if (v > M[i])
                M[i] = v;
        });
    });
    return [...m, ...M];
};
/**
 * Get the min of a Serie.
 * The returned type is the min or an array of mins (if itemSize>1)
 * @category Dataframe
 */
const min = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize === 1) {
        return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["array"].min(s.array);
    }
    const m = new Array(s.itemSize).fill(Number.POSITIVE_INFINITY);
    s.forEach(item => {
        item.forEach((v, i) => {
            if (v < m[i])
                m[i] = v;
        });
    });
    return m;
};
/**
 * Get the max of a Serie.
 * The returned type is the max or an array of maxs (if itemSize>1)
 * @category Dataframe
 */
const max = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize === 1) {
        return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["array"].max(s.array);
    }
    const m = new Array(s.itemSize).fill(Number.POSITIVE_INFINITY);
    s.forEach(item => {
        item.forEach((v, i) => {
            if (v > m[i])
                m[i] = v;
        });
    });
    return m;
};


/***/ }),

/***/ "./lib/dataframe/mult.ts":
/*!*******************************!*\
  !*** ./lib/dataframe/mult.ts ***!
  \*******************************/
/*! exports provided: mult */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_92447__) {

"use strict";
__nested_webpack_require_92447__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_92447__.d(__webpack_exports__, "mult", function() { return mult; });
// See https://stackoverflow.com/questions/54328275/math-js-is-slow-to-multiply-2-big-matrices ?
// See https://github.com/josdejong/mathjs
// See https://github.com/R-js/blasjs
// See https://github.com/gpujs/gpu.js/
// See https://stdlib.io/docs/api/v0.0.90/
/*
 * @example
 * Perform: `w = M * v, where M are symmetric matrices (size 3x3) and v vectors (size 3)`
 * ```ts
 * let df = new DataFrame()
 *      .set('M', createSerie(new Array(20).fill(2), 6))
 *      .set('v', createSerie(new Array(20).fill(3), 3))
 *
 * const w = mult( df.get('M'), df.get('v') )
 * ```
 * @example
 * Perform: `M = M1 * M2, where M1 and M2 are non-symmetric matrices of size 9 (3x3)`
 * ```ts
 * let df = new DataFrame()
 *      .set('M1', createSerie(new Array(20).fill(2), 9))
 *      .set('M2', createSerie(new Array(20).fill(3), 9))
 *
 * const M = mult( df.get('M1'), df.get('M2') )
 * ```
*/
/**
 * Multiply series between them, item component  by item component.
 * Do not confuse with [[multMat]]
 * @see [[multMat]]
 * @example
 * Perform: `a = b * c` where b, c and d are vectors of size 3
 * ```ts
 * let df = DataFrame.create({
 *      series: {
 *          b: createSerie(new Array(20).fill(2), 3)),
 *          c: createSerie(new Array(20).fill(3), 3))
 *      }
 * })
 *
 * const a = mult( df.series['b'], df.series['c'] )
 * ```
 * @example
 * Perform: `a = 0.1*b + 0.3*c + 0.7*d`
 * ```ts
 * let df = DataFrame.create({
 *      series: {
 *          b: createSerie(new Array(20).fill(2), 3)),
 *          c: createSerie(new Array(20).fill(3), 3)),
 *          c: createSerie(new Array(20).fill(4), 3))
 *      }
 * })
 *
 * const a = add(
 *     mult( df.series['b'], 0.1),
 *     mult( df.series['c'], 0.3),
 *     mult( df.series['d'], 0.7)
 * )
 * ```
 * @category Dataframe
 */
const mult = (s, ...args) => {
    if (s === undefined)
        return undefined;
    if (!args)
        throw new Error('cannot multiply undefined to s');
    const r = s.clone();
    args.forEach(o => {
        if (typeof (o) === 'number') {
            r.array.forEach((_, i) => r.array[i] *= o);
        }
        else {
            if (o.length !== s.length) {
                throw new Error(`size mistmatch. Cannot multiply 2 Series of different sizes (${o.length} != ${s.length})`);
            }
            o.array.forEach((v, i) => r.array[i] *= v);
        }
    });
    return r;
};


/***/ }),

/***/ "./lib/dataframe/multMat.ts":
/*!**********************************!*\
  !*** ./lib/dataframe/multMat.ts ***!
  \**********************************/
/*! exports provided: multMat */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_95269__) {

"use strict";
__nested_webpack_require_95269__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_95269__.d(__webpack_exports__, "multMat", function() { return multMat; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_95269__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_95269__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mult__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_95269__(/*! ./mult */ "./lib/dataframe/mult.ts");


// NOTE
// Implicitly, any itemSize=3 is a vector
// If itemSize>3 (6 or 9), it is a matrix
/**
 * Perform either:
 * 1. `Vec*number` (scale)
 * 2. `Vec*Vec` (dot)
 * 3. `Mat*number` (scale)
 * 4. `Mat*Vec`
 * 5. `Mat*Mat`
 * @example
 * Perform A.B.AT
 * ```ts
 * const A = Serie.create({array: new Array(27).fill(2), itemSize: 9})
 * const B = Serie.create({array: new Array(18).fill(3), itemSize: 6})
 * const a = multMat(A, multMat(B, transpose(A)))
 * ```
 * @category Dataframe
 */
const multMat = (s1, s2) => {
    if (s1 === undefined)
        throw new Error('s1 is undefined');
    if (s2 === undefined)
        throw new Error('s2 is undefined');
    if (typeof s2 === 'number') {
        const s = s2;
        return Object(_mult__WEBPACK_IMPORTED_MODULE_1__["mult"])(s1, s2); //s1.map( v => v*s)
    }
    if (s2.itemSize === 1) {
        return s1.map((v, i) => v * s2.itemAt(i));
    }
    if (s1.itemSize === 1) {
        if (s2.itemSize !== 1)
            throw new Error('s2 should have itemSize=1 (same as s1)');
        return s1.map((v, i) => v * s2.itemAt(i));
    }
    if (s1.itemSize === 3) {
        if (s2.itemSize === 3) {
            return s1.map((v, i) => {
                const w = s2.itemAt(i);
                return v[0] * w[0] + v[1] * w[1] + v[2] * w[2]; // dot
            });
        }
        throw new Error('since s1 has itemSize=3, s2 should have itemSize=1 or 3');
    }
    if (s1.itemSize === 6 || s1.itemSize === 9) {
        if (s2.itemSize === 3) {
            return s1.map((v, i) => {
                const A = s1.itemSize === 6 ? Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["symSquaredMatrix"])(v) : Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["squaredMatrix"])(v);
                const b = new _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Vector"](s2.itemAt(i));
                return A.multVec(b).array;
            });
        }
        if (s2.itemSize === 6 || s2.itemSize === 9) {
            return s1.map((v, i) => {
                const A = s1.itemSize === 6 ? Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["symSquaredMatrix"])(v) : Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["squaredMatrix"])(v);
                const b = s2.itemSize === 6 ? Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["symSquaredMatrix"])(s2.itemAt(i)) : Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["squaredMatrix"])(s2.itemAt(i));
                return A.multMat(b).array;
            });
        }
    }
    throw new Error('Cannot multMat');
};
/*

1) A non sym
-----------------
A = [1 2 3 4 5 6 7 8 9]

B = [1 2 3]
A*B' = [14 32 50]

B = [9 8 7 6 5 4]
A*B = [46 35 29 118 92 77 190 149 125]

B = [9 8 7 6 5 4 3 2 1]
A*B = [30 24 18 84 69 54 138 114 90]

2) A sym
-----------------
A = [9 8 7 6 5 4]

B = [1 2 3]
A*B' = [46 35 29]

B = [1 2 3 4 5 6]
A*B = [46    85   109   35    65    84   29    54    70]

B = [1 2 3 4 5 6 7 8 9]
A*B = [90   114   138   67    86   105   55    71    87]
*/ 


/***/ }),

/***/ "./lib/dataframe/negate.ts":
/*!*********************************!*\
  !*** ./lib/dataframe/negate.ts ***!
  \*********************************/
/*! exports provided: negate */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_99137__) {

"use strict";
__nested_webpack_require_99137__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_99137__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99137__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_99137__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @category Dataframe
 */
const negate = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({
        array: s.array.map(v => -v),
        itemSize: s.itemSize
    });
};


/***/ }),

/***/ "./lib/dataframe/norm.ts":
/*!*******************************!*\
  !*** ./lib/dataframe/norm.ts ***!
  \*******************************/
/*! exports provided: norm, norm2 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_100162__) {

"use strict";
__nested_webpack_require_100162__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_100162__.d(__webpack_exports__, "norm", function() { return norm; });
/* harmony export (binding) */ __nested_webpack_require_100162__.d(__webpack_exports__, "norm2", function() { return norm2; });
/**
 * @category Dataframe
 */
const norm = (s) => {
    return norm2(s).map(v => Math.sqrt(v));
};
/**
 * @category Dataframe
 */
const norm2 = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    const r = s.image(s.count, 1);
    if (s.itemSize === 1) {
        return r;
    }
    for (let i = 0; i < s.count; ++i) {
        let v = s.itemAt(i);
        r.array[i] = v.reduce((acc, v) => acc + v ** 2, 0);
    }
    return r;
};


/***/ }),

/***/ "./lib/dataframe/normalize.ts":
/*!************************************!*\
  !*** ./lib/dataframe/normalize.ts ***!
  \************************************/
/*! exports provided: normalize */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_101192__) {

"use strict";
__nested_webpack_require_101192__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_101192__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101192__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_101192__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * If itemSize is > 1, normalize each item independently, otherwize
 * normalize the serie (since itemSize=1).
 * @category Dataframe
 */
const normalize = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize === 1) {
        const mM = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["array"].minMax(s.array);
        const m = mM[0];
        const l = 1 / (mM[1] - m);
        return s.map(v => l * (v - m));
    }
    return s.map(item => {
        const l = 1 / Math.sqrt(item.reduce((acc, v) => acc + v * v, 0));
        //console.log(l)
        return item.map(v => v * l);
    });
};


/***/ }),

/***/ "./lib/dataframe/rand.ts":
/*!*******************************!*\
  !*** ./lib/dataframe/rand.ts ***!
  \*******************************/
/*! exports provided: rand */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_102577__) {

"use strict";
__nested_webpack_require_102577__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_102577__.d(__webpack_exports__, "rand", function() { return rand; });
/**
 * @example
 * ```ts
 * const a = createSerie( {data: [1, 2, 3, 4, 5, 6]} )
 * console.log( round( rand(a, -10, 20 ) ) )
 * // [ 17, -5, 14, -5, 5, -8 ]
 * ```
 * @category Dataframe
 */
const rand = (a, min = 0, max = 1) => {
    const delta = max - min;
    if (a.itemSize === 1) {
        return a.map(v => min + delta * Math.random());
    }
    return a.map(v => new Array(a.itemSize).fill(0).map(v => min + delta * Math.random()));
};


/***/ }),

/***/ "./lib/dataframe/rotate.ts":
/*!*********************************!*\
  !*** ./lib/dataframe/rotate.ts ***!
  \*********************************/
/*! exports provided: rotate */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_103457__) {

"use strict";
__nested_webpack_require_103457__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_103457__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103457__(/*! .. */ "./lib/index.ts");
/* harmony import */ var _multMat__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_103457__(/*! ./multMat */ "./lib/dataframe/multMat.ts");
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_103457__(/*! ./transpose */ "./lib/dataframe/transpose.ts");



/**
 * @see [[getRotationAxis]] to generate a rotation matrix
 * @category Dataframe
 */
const rotate = (s, rot) => {
    if (s === undefined)
        throw new Error('s is undefined');
    if (rot === undefined)
        throw new Error('rot is undefined');
    if (Array.isArray(rot)) {
        if (s.itemSize === 1)
            return s.clone();
        if (s.itemSize === 3)
            return s.map(v => ___WEBPACK_IMPORTED_MODULE_0__["mat"].multVec(rot, v));
        return s.map(m => ___WEBPACK_IMPORTED_MODULE_0__["mat"].rotateInverse(rot, ___WEBPACK_IMPORTED_MODULE_0__["mat"].unpack(m)));
    }
    else {
        if (rot.itemSize !== 9)
            throw new Error('rot should have itemSize=9');
        if (s.itemSize === 1)
            return s.clone();
        if (s.itemSize === 3)
            return Object(_multMat__WEBPACK_IMPORTED_MODULE_1__["multMat"])(rot, s);
        return Object(_multMat__WEBPACK_IMPORTED_MODULE_1__["multMat"])(rot, Object(_multMat__WEBPACK_IMPORTED_MODULE_1__["multMat"])(s, Object(_transpose__WEBPACK_IMPORTED_MODULE_2__["transpose"])(rot)));
    }
};


/***/ }),

/***/ "./lib/dataframe/round.ts":
/*!********************************!*\
  !*** ./lib/dataframe/round.ts ***!
  \********************************/
/*! exports provided: round */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_105369__) {

"use strict";
__nested_webpack_require_105369__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_105369__.d(__webpack_exports__, "round", function() { return round; });
/**
 * @category Dataframe
 */
const round = (a) => {
    if (a.itemSize === 1) {
        return a.map(v => Math.round(v));
    }
    return a.map(v => v.map(w => Math.round(w)));
};


/***/ }),

/***/ "./lib/dataframe/scale.ts":
/*!********************************!*\
  !*** ./lib/dataframe/scale.ts ***!
  \********************************/
/*! exports provided: scale */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_105984__) {

"use strict";
__nested_webpack_require_105984__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_105984__.d(__webpack_exports__, "scale", function() { return scale; });
/**
 * @category Dataframe
 */
const scale = (s, t) => {
    if (s === undefined)
        throw new Error('s is undefined');
    if (t === undefined)
        throw new Error('t is undefined');
    if (Array.isArray(t)) {
        if (s.itemSize === 1) {
            return s.map(v => v * t[0]);
        }
        else {
            if (t.length !== s.itemSize) {
                throw new Error(`t should be of length ${s.itemSize} (same as serie itemSize)`);
            }
            return s.map(v => v.map((w, i) => w * t[i]));
        }
    }
    if (s.itemSize === 1) {
        return s.map(v => v * t);
    }
    return s.map(v => v.map(w => w * t));
};


/***/ }),

/***/ "./lib/dataframe/square.ts":
/*!*********************************!*\
  !*** ./lib/dataframe/square.ts ***!
  \*********************************/
/*! exports provided: square */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_107081__) {

"use strict";
__nested_webpack_require_107081__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_107081__.d(__webpack_exports__, "square", function() { return square; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_107081__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_107081__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @category Dataframe
 */
const square = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({
        array: s.array.map(v => v ** 2),
        itemSize: s.itemSize
    });
};


/***/ }),

/***/ "./lib/dataframe/stats/covariance.ts":
/*!*******************************************!*\
  !*** ./lib/dataframe/stats/covariance.ts ***!
  \*******************************************/
/*! exports provided: covariance */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_108157__) {

"use strict";
__nested_webpack_require_108157__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_108157__.d(__webpack_exports__, "covariance", function() { return covariance; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_108157__(/*! ../ */ "./lib/dataframe/index.ts");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_108157__(/*! ./mean */ "./lib/dataframe/stats/mean.ts");


/**
 * Compute covariance with Series.
 *
 * Except from Wikipedia:
 * > In probability theory and statistics, covariance is a measure of the joint variability
 * of two random variables. If the greater values of one variable mainly correspond with
 * the greater values of the other variable, and the same holds for the lesser values
 * (that is, the variables tend to show similar behavior), the covariance is positive.
 * In the opposite case, when the greater values of one variable mainly correspond to
 * the lesser values of the other, (that is, the variables tend to show opposite behavior),
 * the covariance is negative. The sign of the covariance therefore shows the tendency in the
 * linear relationship between the variables. The magnitude of the covariance is not easy to
 * interpret because it is not normalized and hence depends on the magnitudes of the variables.
 * The normalized version of the covariance, the correlation coefficient, however, shows
 * by its magnitude the strength of the linear relation.
 * @category Dataframe
 */
const covariance = (x, y) => {
    if (x.length !== y.length)
        throw new Error('x and y must have the same length');
    if (x.itemSize !== 1)
        throw new Error('x must have itemSize = 1');
    if (y.itemSize !== 1)
        throw new Error('y must have itemSize = 1');
    const N = x.length;
    const xb = Object(_mean__WEBPACK_IMPORTED_MODULE_1__["mean"])(x);
    const yb = Object(_mean__WEBPACK_IMPORTED_MODULE_1__["mean"])(y);
    return Object(___WEBPACK_IMPORTED_MODULE_0__["mult"])(Object(___WEBPACK_IMPORTED_MODULE_0__["sub"])(x, xb), Object(___WEBPACK_IMPORTED_MODULE_0__["sub"])(y, yb)).array.reduce((acc, value) => acc + value / N, 0);
};


/***/ }),

/***/ "./lib/dataframe/stats/describe.ts":
/*!*****************************************!*\
  !*** ./lib/dataframe/stats/describe.ts ***!
  \*****************************************/
/*! exports provided: describe */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_110609__) {

"use strict";
__nested_webpack_require_110609__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_110609__.d(__webpack_exports__, "describe", function() { return describe; });
/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_110609__(/*! ../minMax */ "./lib/dataframe/minMax.ts");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_110609__(/*! ./mean */ "./lib/dataframe/stats/mean.ts");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_110609__(/*! ./quantile */ "./lib/dataframe/stats/quantile.ts");
/* harmony import */ var _std__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_110609__(/*! ./std */ "./lib/dataframe/stats/std.ts");




/**
 * @category Dataframe
 */
const describe = (s) => {
    if (s === undefined)
        throw new Error('serie is undefined');
    if (s.itemSize !== 1)
        throw new Error('serie must have itemSize = 1');
    return {
        count: s.count,
        mean: Object(_mean__WEBPACK_IMPORTED_MODULE_1__["mean"])(s),
        std: Object(_std__WEBPACK_IMPORTED_MODULE_3__["std"])(s),
        min: Object(_minMax__WEBPACK_IMPORTED_MODULE_0__["min"])(s),
        q25: Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["q25"])(s),
        q50: Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["q50"])(s),
        q75: Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["q75"])(s),
        max: Object(_minMax__WEBPACK_IMPORTED_MODULE_0__["max"])(s),
    };
};


/***/ }),

/***/ "./lib/dataframe/stats/index.ts":
/*!**************************************!*\
  !*** ./lib/dataframe/stats/index.ts ***!
  \**************************************/
/*! exports provided: covariance, variance, mean, weightedMean, quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers, describe, std */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_112465__) {

"use strict";
__nested_webpack_require_112465__.r(__webpack_exports__);
/* harmony import */ var _covariance__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_112465__(/*! ./covariance */ "./lib/dataframe/stats/covariance.ts");
/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "covariance", function() { return _covariance__WEBPACK_IMPORTED_MODULE_0__["covariance"]; });

/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_112465__(/*! ./variance */ "./lib/dataframe/stats/variance.ts");
/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "variance", function() { return _variance__WEBPACK_IMPORTED_MODULE_1__["variance"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_112465__(/*! ./mean */ "./lib/dataframe/stats/mean.ts");
/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "mean", function() { return _mean__WEBPACK_IMPORTED_MODULE_2__["mean"]; });

/* harmony import */ var _weightedMean__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_112465__(/*! ./weightedMean */ "./lib/dataframe/stats/weightedMean.ts");
/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "weightedMean", function() { return _weightedMean__WEBPACK_IMPORTED_MODULE_3__["weightedMean"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_112465__(/*! ./quantile */ "./lib/dataframe/stats/quantile.ts");
/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "quantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["quantile"]; });

/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "q25", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["q25"]; });

/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "q50", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["q50"]; });

/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "q75", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["q75"]; });

/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "IQR", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["IQR"]; });

/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "outliers", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["outliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "isOutliers", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["isOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "notOutliers", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["notOutliers"]; });

/* harmony import */ var _describe__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_112465__(/*! ./describe */ "./lib/dataframe/stats/describe.ts");
/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "describe", function() { return _describe__WEBPACK_IMPORTED_MODULE_5__["describe"]; });

/* harmony import */ var _std__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_112465__(/*! ./std */ "./lib/dataframe/stats/std.ts");
/* harmony reexport (safe) */ __nested_webpack_require_112465__.d(__webpack_exports__, "std", function() { return _std__WEBPACK_IMPORTED_MODULE_6__["std"]; });










/***/ }),

/***/ "./lib/dataframe/stats/mean.ts":
/*!*************************************!*\
  !*** ./lib/dataframe/stats/mean.ts ***!
  \*************************************/
/*! exports provided: mean */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_116023__) {

"use strict";
__nested_webpack_require_116023__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_116023__.d(__webpack_exports__, "mean", function() { return mean; });
/**
 * @category Dataframe
 */
const mean = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    const n = s.itemSize;
    if (n === 1) {
        return s.array.reduce((acc, v) => acc + v, 0) / s.length;
    }
    const r = new Array(n).fill(0);
    s.forEach(v => {
        for (let j = 0; j < n; ++j) {
            r[j] += v[j] / s.count;
        }
    });
    return r;
};


/***/ }),

/***/ "./lib/dataframe/stats/quantile.ts":
/*!*****************************************!*\
  !*** ./lib/dataframe/stats/quantile.ts ***!
  \*****************************************/
/*! exports provided: quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_116956__) {

"use strict";
__nested_webpack_require_116956__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_116956__.d(__webpack_exports__, "quantile", function() { return quantile; });
/* harmony export (binding) */ __nested_webpack_require_116956__.d(__webpack_exports__, "q25", function() { return q25; });
/* harmony export (binding) */ __nested_webpack_require_116956__.d(__webpack_exports__, "q50", function() { return q50; });
/* harmony export (binding) */ __nested_webpack_require_116956__.d(__webpack_exports__, "q75", function() { return q75; });
/* harmony export (binding) */ __nested_webpack_require_116956__.d(__webpack_exports__, "IQR", function() { return IQR; });
/* harmony export (binding) */ __nested_webpack_require_116956__.d(__webpack_exports__, "outliers", function() { return outliers; });
/* harmony export (binding) */ __nested_webpack_require_116956__.d(__webpack_exports__, "isOutliers", function() { return isOutliers; });
/* harmony export (binding) */ __nested_webpack_require_116956__.d(__webpack_exports__, "notOutliers", function() { return notOutliers; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_116956__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_116956__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * See https://en.wikipedia.org/wiki/Box_plot
 * @category Dataframe
 */
const quantile = (s, q) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize !== 1)
        throw new Error('quantile algorithm: itemSize must be 1');
    if (q < 0)
        throw new Error('quantile must be >= 0');
    if (q > 1)
        throw new Error('quantile must be <= 1');
    const newSerie = Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["sort"])(s);
    const sorted = newSerie.array;
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    }
    else {
        return sorted[base];
    }
};
/**
 * @category Dataframe
 */
const q25 = (s) => quantile(s, 0.25);
/**
 * @category Dataframe
 */
const q50 = (s) => quantile(s, 0.50);
/**
 * @category Dataframe
 */
const q75 = (s) => quantile(s, 0.75);
/**
 * @category Dataframe
 */
const IQR = (s) => quantile(s, 0.75) - quantile(s, 0.25);
/**
 * @category Dataframe
 */
const outliers = (s, mustache) => {
    const o = __ouliers__(s, mustache);
    return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["cut"])(s, v => v < o.min || v > o.max);
};
/**
 * Return a serie of boolean indicating if an item of the serie s is an outliers or not
 * @category Dataframe
 */
const isOutliers = (s, mustache) => {
    const o = __ouliers__(s, mustache);
    return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["check"])(s, v => v < o.min || v > o.max);
};
/**
 * @see https://en.wikipedia.org/wiki/Interquartile_range
 * @see https://en.wikipedia.org/wiki/Box_plot
 * @param mustache The statistical distance for which a point is considered as outlier. Default 1.5
 * @category Dataframe
 */
const notOutliers = (s, mustache = 1.5) => {
    const o = __ouliers__(s, mustache);
    return Object(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["cut"])(s, v => v >= o.min && v <= o.max);
};
// -----------------------------------------
const __ouliers__ = (s, mustache) => {
    const Q25 = q25(s);
    const Q75 = q75(s);
    const iqr = Q75 - Q25;
    return {
        min: Q25 - mustache * iqr,
        max: Q75 + mustache * iqr
    };
};


/***/ }),

/***/ "./lib/dataframe/stats/std.ts":
/*!************************************!*\
  !*** ./lib/dataframe/stats/std.ts ***!
  \************************************/
/*! exports provided: std */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_120827__) {

"use strict";
__nested_webpack_require_120827__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_120827__.d(__webpack_exports__, "std", function() { return std; });
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_120827__(/*! ../sum */ "./lib/dataframe/sum.ts");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_120827__(/*! ./mean */ "./lib/dataframe/stats/mean.ts");


/**
 * See https://en.wikipedia.org/wiki/Box_plot
 * @category Dataframe
 */
const std = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize !== 1)
        throw new Error('quantile algorithm: itemSize must be 1');
    const mu = Object(_mean__WEBPACK_IMPORTED_MODULE_1__["mean"])(s);
    const diffArr = s.map(a => (a - mu) ** 2);
    return Math.sqrt(Object(_sum__WEBPACK_IMPORTED_MODULE_0__["sum"])(diffArr) / (s.length - 1));
};


/***/ }),

/***/ "./lib/dataframe/stats/variance.ts":
/*!*****************************************!*\
  !*** ./lib/dataframe/stats/variance.ts ***!
  \*****************************************/
/*! exports provided: variance */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_122030__) {

"use strict";
__nested_webpack_require_122030__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_122030__.d(__webpack_exports__, "variance", function() { return variance; });
/* harmony import */ var _covariance__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_122030__(/*! ./covariance */ "./lib/dataframe/stats/covariance.ts");

/**
 * Compute variance of a Serie
 * @category Dataframe
 */
const variance = (x) => Object(_covariance__WEBPACK_IMPORTED_MODULE_0__["covariance"])(x, x);


/***/ }),

/***/ "./lib/dataframe/stats/weightedMean.ts":
/*!*********************************************!*\
  !*** ./lib/dataframe/stats/weightedMean.ts ***!
  \*********************************************/
/*! exports provided: weightedMean */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_122832__) {

"use strict";
__nested_webpack_require_122832__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_122832__.d(__webpack_exports__, "weightedMean", function() { return weightedMean; });
/**
 * @category Dataframe
 */
const weightedMean = (s, w) => {
    if (s === undefined)
        throw new Error('s is undefined');
    if (w === undefined)
        throw new Error('w is undefined');
    if (w.count !== s.count)
        throw new Error(`count mismatch for s (${s.count}) and w (${w.count})`);
    if (w.itemSize !== 1)
        throw new Error(`itemSize for w should be 1 (got ${w.itemSize})`);
    const W = w.array.reduce((acc, v) => acc + v, 0);
    const n = s.itemSize;
    if (n === 1) {
        return s.array.reduce((acc, v, i) => acc + v * w.array[i], 0) / W;
    }
    const r = new Array(n).fill(0);
    s.forEach((v, i) => {
        for (let j = 0; j < n; ++j) {
            r[j] += w.array[i] * v[j]; // /s.count
        }
    });
    return r.map(v => v / W);
};


/***/ }),

/***/ "./lib/dataframe/sub.ts":
/*!******************************!*\
  !*** ./lib/dataframe/sub.ts ***!
  \******************************/
/*! exports provided: sub */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_124061__) {

"use strict";
__nested_webpack_require_124061__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_124061__.d(__webpack_exports__, "sub", function() { return sub; });
/**
 * Subtract several Series to generate a new one
 * @example
 * ```ts
 * // perform: a = b - c
 * const a = sub(
 *     df.get('b'),
 *     df.get('c'),
 * )
 * ```
 * @category Dataframe
 */
const sub = (s, ...others) => {
    if (s === undefined)
        throw new Error('serie s is undefined');
    if (!others)
        throw new Error('cannot subtract undefined to s');
    const r = s.clone();
    // rest
    if (others) {
        others.forEach(o => {
            if (typeof (o) === 'number') {
                r.array.forEach((_, i) => r.array[i] -= o);
            }
            else {
                if (o.length !== s.length) {
                    throw new Error(`size mistmatch. Cannot add 2 Series of different sizes (${o.length} != ${s.length})`);
                }
                o.array.forEach((v, i) => r.array[i] -= v);
            }
        });
    }
    return r;
};


/***/ }),

/***/ "./lib/dataframe/sum.ts":
/*!******************************!*\
  !*** ./lib/dataframe/sum.ts ***!
  \******************************/
/*! exports provided: sum */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_125374__) {

"use strict";
__nested_webpack_require_125374__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_125374__.d(__webpack_exports__, "sum", function() { return sum; });
/**
 * Perform the sum of items of a Serie
 * @category Dataframe
 */
const sum = (a) => {
    if (a.itemSize === 1) {
        let r = 0;
        a.forEach(v => r += v);
        return r;
    }
    const r = new Array(a.itemSize).fill(0);
    a.forEach(item => item.forEach((v, i) => r[i] += v));
    return r;
};


/***/ }),

/***/ "./lib/dataframe/tagNaN.ts":
/*!*********************************!*\
  !*** ./lib/dataframe/tagNaN.ts ***!
  \*********************************/
/*! exports provided: tagNaN */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_126121__) {

"use strict";
__nested_webpack_require_126121__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_126121__.d(__webpack_exports__, "tagNaN", function() { return tagNaN; });
/**
 * @example
 * ```ts
 * const a = createSerie( {data: [1, 2, 3, 4, 5, 6]} )
 * console.log( tagNaN(a, v => v%2===0 ) )
 * // [ 1, NaN, 3, NaN, 5, NaN ]
 * ```
 * @category Dataframe
 */
const tagNaN = (a, fn) => {
    if (a.itemSize === 1) {
        return a.map((item, i) => fn(item, i, a) ? Number.NaN : item);
    }
    return a.map((item, i) => fn(item, i, a) ? new Array(a.itemSize).fill(Number.NaN) : item);
};


/***/ }),

/***/ "./lib/dataframe/trace.ts":
/*!********************************!*\
  !*** ./lib/dataframe/trace.ts ***!
  \********************************/
/*! exports provided: trace */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_126976__) {

"use strict";
__nested_webpack_require_126976__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_126976__.d(__webpack_exports__, "trace", function() { return trace; });
/**
 * Get the trace of symmetric matrices of size:
 * <ul>
 *   <li> 6: [xx, xy, xz, yy, yz, zz]
 *   <li> 9: [xx, xy, xz, yx, yy, yz, zx, zy, zz]
 * </ul>
 * @category Dataframe
 */
function trace(s) {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize !== 1 && s.itemSize !== 6 && s.itemSize !== 9)
        throw new Error('item size should be 1, 6 or 9');
    if (s.itemSize === 1) {
        return s.clone();
    }
    const itemSize = s.itemSize;
    const r = s.image(s.count, 1);
    for (let i = 0; i < s.count; ++i) {
        let a = s.itemAt(i);
        if (itemSize === 6) {
            r.array[i] = a[0] + a[3] + a[5];
        }
        else {
            r.array[i] = a[0] + a[4] + a[8];
        }
    }
    return r;
}


/***/ }),

/***/ "./lib/dataframe/translate.ts":
/*!************************************!*\
  !*** ./lib/dataframe/translate.ts ***!
  \************************************/
/*! exports provided: translate */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_128203__) {

"use strict";
__nested_webpack_require_128203__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_128203__.d(__webpack_exports__, "translate", function() { return translate; });
/**
 * @category Dataframe
 */
const translate = (s, t) => {
    if (s === undefined)
        throw new Error('s is undefined');
    if (t === undefined)
        throw new Error('t is undefined');
    if (t.length !== s.itemSize)
        throw new Error(`t should be of length ${s.itemSize} (same as serie itemSize)`);
    if (s.itemSize === 1) {
        return s.map(v => v * t[0]);
    }
    return s.map(v => v.map((w, i) => w + t[i]));
};


/***/ }),

/***/ "./lib/dataframe/transpose.ts":
/*!************************************!*\
  !*** ./lib/dataframe/transpose.ts ***!
  \************************************/
/*! exports provided: transpose */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_129106__) {

"use strict";
__nested_webpack_require_129106__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_129106__.d(__webpack_exports__, "transpose", function() { return transpose; });
/**
 * Only transpose matrix in the form of arrays of size 9
 * @category Dataframe
 */
const transpose = (s) => {
    if (s === undefined)
        return undefined;
    if (s.itemSize !== 9)
        throw new Error('items size should be 9 only (for now)');
    const r = s.clone();
    const a = r.array;
    let id = 0;
    s.forEach((item) => {
        a[id++] = item[0];
        a[id++] = item[3];
        a[id++] = item[6];
        a[id++] = item[1];
        a[id++] = item[4];
        a[id++] = item[7];
        a[id++] = item[2];
        a[id++] = item[5];
        a[id++] = item[8];
    });
    return r;
};


/***/ }),

/***/ "./lib/dataframe/trunc.ts":
/*!********************************!*\
  !*** ./lib/dataframe/trunc.ts ***!
  \********************************/
/*! exports provided: trunc */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_130162__) {

"use strict";
__nested_webpack_require_130162__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_130162__.d(__webpack_exports__, "trunc", function() { return trunc; });
/**
 * @category Dataframe
 */
const trunc = (a) => {
    if (a.itemSize === 1) {
        return a.map(v => Math.trunc(v));
    }
    return a.map(v => v.map(w => Math.trunc(w)));
};


/***/ }),

/***/ "./lib/dataframe/unitInterval.ts":
/*!***************************************!*\
  !*** ./lib/dataframe/unitInterval.ts ***!
  \***************************************/
/*! exports provided: unitInterval */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_130812__) {

"use strict";
__nested_webpack_require_130812__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_130812__.d(__webpack_exports__, "unitInterval", function() { return unitInterval; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_130812__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_130812__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Transform each item of a serie into a unit interval and independently of each other.
 * For example, item [1,2,5], will be mapped into [0, 0.25, 1].
 * Otherwise, perform the transformation on the serie (e.g., for itemSize=1).
 * @category Dataframe
 */
const unitInterval = (s) => {
    if (s === undefined)
        throw new Error('series is undefined');
    if (s.itemSize === 1) {
        const mM = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["array"].minMax(s.array);
        const m = mM[0];
        const l = 1 / (mM[1] - m);
        return s.map(v => l * (v - m));
    }
    return s.map(item => {
        const mM = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["array"].minMax(item);
        const m = mM[0];
        const l = 1 / (mM[1] - m);
        return item.map(v => l * (v - m));
    });
};


/***/ }),

/***/ "./lib/dataframe/weightedSum.ts":
/*!**************************************!*\
  !*** ./lib/dataframe/weightedSum.ts ***!
  \**************************************/
/*! exports provided: weightedSum */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_132416__) {

"use strict";
__nested_webpack_require_132416__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_132416__.d(__webpack_exports__, "weightedSum", function() { return weightedSum; });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_132416__(/*! ./add */ "./lib/dataframe/add.ts");
/* harmony import */ var _mult__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_132416__(/*! ./mult */ "./lib/dataframe/mult.ts");


/**
 * Return a weighted sum of [[Serie]]s
 * @example
 * ```ts
 * // performs: 1*S1 + 2*S2 + 3*S3
 * const S = [
 *     createSerie( {data: createArray(18, i => i  ), itemSize: 6}), // S1
 *     createSerie( {data: createArray(18, i => i+1), itemSize: 6}), // S2
 *     createSerie( {data: createArray(18, i => i+2), itemSize: 6})  // S3
 * ]
 *
 * const r = weightedSum(S, [1,2,3])
 * console.log(r.array)
 *
 * // [ 8, 14, 20, 26,  32,  38,
 * //  44, 50, 56, 62,  68,  74,
 * //  80, 86, 92, 98, 104, 110 ]
 * ```
 * @category Dataframe
 */
const weightedSum = (data, alpha) => {
    if (alpha.length !== data.length)
        throw new Error(`data length (${data.length}) should be equal to alpha length (${alpha.length})`);
    return Object(_add__WEBPACK_IMPORTED_MODULE_0__["add"])(data.map((d, i) => Object(_mult__WEBPACK_IMPORTED_MODULE_1__["mult"])(d, alpha[i])));
};


/***/ }),

/***/ "./lib/eigen.ts":
/*!**********************!*\
  !*** ./lib/eigen.ts ***!
  \**********************/
/*! exports provided: eigen, Eigen */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_133952__) {

"use strict";
__nested_webpack_require_133952__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_133952__.d(__webpack_exports__, "eigen", function() { return eigen; });
/* harmony export (binding) */ __nested_webpack_require_133952__.d(__webpack_exports__, "Eigen", function() { return Eigen; });
const EPS = 0.00001;
const MAX_ITER = 100;
const xcpi = Math.cos(Math.PI / 4);
const xspi = Math.sin(Math.PI / 4);
/**
 * @param mat The symmetric matrix in a packed array of the form
 * of 6 components [xx, xy, xz, yy, yz, zz] or 9 components
 * [xx, xy, xz, yx, yy, yz, zx, zy, zz]
 * @returns {values, vectors} where values=[v1, v2, v3] and
 * vectors=[v1x, v1y, v1z,  v2x, v2y, v2z,  v3x, v3y, v3z]
 * @note Eigen values and vectors are ordered from the highest to the lowest
 *
 * @category Eigen
 */
function eigen(mat) {
    let values = [];
    let vectors = [];
    const n = 3;
    const a = [];
    const v = [];
    const index = [];
    let thr_nn;
    let nb_iter = 0;
    let jj;
    let k, ik, im, iq, il;
    let a_ij, a_im, a_il;
    let v_ilv, v_imv;
    let x;
    let sinx, cosx;
    if (mat.length === 6) {
        a[0] = mat[0];
        a[1] = mat[1];
        a[2] = mat[3];
        a[3] = mat[2];
        a[4] = mat[4];
        a[5] = mat[5];
    }
    else if (mat.length === 9) {
        a[0] = mat[0];
        a[1] = mat[1];
        a[2] = mat[4];
        a[3] = mat[2];
        a[4] = mat[5];
        a[5] = mat[8];
    }
    else {
        throw new Error(`matrix-array should be of size 6 (xx,xy,xz,yy,yz,zz)
        or 9 (xx,xy,xz,yx,yy,yz,zx,zy,zz and symmetric)`);
    }
    const nn = (n * (n + 1)) / 2;
    let ij = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i === j) {
                v[ij++] = 1.0;
            }
            else {
                v[ij++] = 0.0;
            }
        }
    }
    ij = 1;
    let a_norm = 0.0;
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            if (i !== j) {
                a_ij = a[ij - 1];
                a_norm += a_ij * a_ij;
            }
            ++ij;
        }
    }
    if (a_norm !== 0.0) {
        const a_normEPS = a_norm * EPS;
        let thr = a_norm;
        while (thr > a_normEPS && nb_iter < MAX_ITER) {
            ++nb_iter;
            thr_nn = thr / nn;
            for (let l = 1; l < n; ++l) {
                for (let m = l + 1; m <= n; ++m) {
                    let lq = (l * l - l) / 2;
                    let mq = (m * m - m) / 2;
                    let lm = l + mq;
                    let a_lm = a[lm - 1];
                    let a_lm_2 = a_lm * a_lm;
                    if (a_lm_2 < thr_nn) {
                        continue;
                    }
                    let ll = l + lq;
                    let mm = m + mq;
                    let a_ll = a[ll - 1];
                    let a_mm = a[mm - 1];
                    let delta = a_ll - a_mm;
                    if (delta === 0.0) {
                        x = -Math.PI / 4;
                        sinx = xspi;
                        cosx = xcpi;
                    }
                    else {
                        x = -Math.atan((a_lm + a_lm) / delta) / 2.0;
                        sinx = Math.sin(x);
                        cosx = Math.cos(x);
                    }
                    let sinx_2 = sinx * sinx;
                    let cosx_2 = cosx * cosx;
                    let sincos = sinx * cosx;
                    let ilv = n * (l - 1);
                    let imv = n * (m - 1);
                    for (let i = 1; i <= n; ++i) {
                        if (i !== l && i !== m) {
                            iq = (i * i - i) / 2;
                            if (i < m) {
                                im = i + mq;
                            }
                            else {
                                im = m + iq;
                            }
                            a_im = a[im - 1];
                            if (i < l) {
                                il = i + lq;
                            }
                            else {
                                il = l + iq;
                            }
                            a_il = a[il - 1];
                            a[il - 1] = a_il * cosx - a_im * sinx;
                            a[im - 1] = a_il * sinx + a_im * cosx;
                        }
                        ++ilv;
                        ++imv;
                        v_ilv = v[ilv - 1];
                        v_imv = v[imv - 1];
                        v[ilv - 1] = cosx * v_ilv - sinx * v_imv;
                        v[imv - 1] = sinx * v_ilv + cosx * v_imv;
                    }
                    x = a_lm * sincos;
                    x += x;
                    a[ll - 1] = a_ll * cosx_2 + a_mm * sinx_2 - x;
                    a[mm - 1] = a_ll * sinx_2 + a_mm * cosx_2 + x;
                    a[lm - 1] = 0.0;
                    thr = Math.abs(thr - a_lm_2);
                }
            }
        }
    }
    for (let i = 0; i < n; ++i) {
        k = i + (i * (i + 1)) / 2;
        values[i] = a[k];
        index[i] = i;
    }
    for (let i = 0; i < n - 1; ++i) {
        x = values[i];
        k = i;
        for (let j = i + 1; j < n; ++j) {
            if (x < values[j]) {
                k = j;
                x = values[j];
            }
        }
        values[k] = values[i];
        values[i] = x;
        jj = index[k];
        index[k] = index[i];
        index[i] = jj;
    }
    ij = 0;
    for (let k = 0; k < n; ++k) {
        ik = index[k] * n;
        for (let i = 0; i < n; ++i) {
            vectors[ij++] = v[ik++];
        }
    }
    return { values, vectors };
}
// ------------------------------------------------------------------
// For compatibility reason...
// ------------------------------------------------------------------
// Array of 6 elements
//      Order is [11, 12, 13, 22, 23, 33]
// Array of 9 elements
//      Order is [11, 12, 13, 21, 22, 23, 31, 32, 33]
// if we consider the matrix
// | 11 12 13 |
// | 12 22 23 |
// | 13 23 33 |
//
/**
 * Computes the eigen values and eigen vectors of a semi definite symmetric matrix
 * @param {number[]} mat Format: [00, 01, 02, 11, 12, 22]
 * @returns {{number[], Array.<Array.<number>>}} The eigen values and eigen vectors
 * @note Eigen -values and -vectors are ordered from the highest to the lowest
 * @see [[eigen]]
 * @category Eigen
 * @ignore
 */
class Eigen {
    constructor() {
        this.eigenValues = [];
        this.eigenVectors = [];
        console.warn('Deprecated class. Use instead eigen(mat: Array<number>');
    }
    /**
     * @see eigen()
     */
    compute(mat) {
        const r = eigen(mat);
        this.eigenValues = r.values;
        this.eigenVectors = r.vectors;
        return r;
    }
    vector(i) {
        console.assert(i >= 0 && i < 3);
        return [
            this.eigenVectors[3 * i],
            this.eigenVectors[3 * i + 1],
            this.eigenVectors[3 * i + 2]
        ];
    }
    get vectors() {
        return this.eigenVectors;
    }
    value(i) {
        console.assert(i >= 0 && i < 3);
        return this.eigenValues[i];
    }
    get values() {
        return this.eigenValues;
    }
}


/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/*! exports provided: eigenValue, eigenVector, add, addNumber, sub, mult, multMat, div, trace, norm, norm2, transpose, square, abs, dot, cross, normalize, unitInterval, negate, invert, weightedSum, sum, tagNaN, rand, round, trunc, minMax, min, max, equals, closeTo, getNaN, inv, rotate, translate, scale, determinant, covariance, variance, mean, weightedMean, quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers, describe, std, ComponentDecomposer, PositionDecomposer, EigenValuesDecomposer, EigenVectorsDecomposer, VectorNormDecomposer, NormalsDecomposer, ValenceDecomposer, AreaDecomposer, Fringes, eigen, Eigen, barycentric2, barycentric3, barycentric4, lerp, biLerp, triLerp, triangleLerp2D, triangleLerp3D, tetraLerp, InterpolateDirection, meshInterpolate, MinMax, Quaternion, mat, vec, minArray, maxArray, minMaxArray, normalizeArray, scaleArray, dectectNan, flatten, rotateAxis, getRotationAxis */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_142332__) {

"use strict";
__nested_webpack_require_142332__.r(__webpack_exports__);
/* harmony import */ var _dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_142332__(/*! ./dataframe */ "./lib/dataframe/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "eigenValue", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["eigenValue"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "eigenVector", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["eigenVector"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "add", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["add"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "addNumber", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["addNumber"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "sub", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["sub"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "mult", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["mult"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "multMat", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["multMat"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "div", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["div"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "trace", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["trace"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "norm", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["norm"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "norm2", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["norm2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "transpose", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["transpose"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "square", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["square"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "abs", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["abs"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "dot", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["dot"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "cross", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["cross"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "normalize", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["normalize"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "unitInterval", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["unitInterval"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "negate", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["negate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "invert", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["invert"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "weightedSum", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["weightedSum"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "sum", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["sum"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "tagNaN", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["tagNaN"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "rand", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["rand"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "round", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["round"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "trunc", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["trunc"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "minMax", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["minMax"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "min", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["min"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "max", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["max"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "equals", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["equals"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "closeTo", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["closeTo"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "getNaN", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["getNaN"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "inv", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["inv"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "rotate", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["rotate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "translate", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["translate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "scale", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["scale"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "determinant", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["determinant"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "covariance", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["covariance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "variance", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["variance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "mean", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["mean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "weightedMean", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["weightedMean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "quantile", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["quantile"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "q25", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["q25"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "q50", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["q50"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "q75", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["q75"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "IQR", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["IQR"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "outliers", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["outliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "isOutliers", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["isOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "notOutliers", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["notOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "describe", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["describe"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "std", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["std"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "ComponentDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["ComponentDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "PositionDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["PositionDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["EigenValuesDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["EigenVectorsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "VectorNormDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["VectorNormDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "NormalsDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["NormalsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "ValenceDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["ValenceDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "AreaDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["AreaDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "Fringes", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["Fringes"]; });

/* harmony import */ var _eigen__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_142332__(/*! ./eigen */ "./lib/eigen.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "eigen", function() { return _eigen__WEBPACK_IMPORTED_MODULE_1__["eigen"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "Eigen", function() { return _eigen__WEBPACK_IMPORTED_MODULE_1__["Eigen"]; });

/* harmony import */ var _barycentric__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_142332__(/*! ./barycentric */ "./lib/barycentric.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "barycentric2", function() { return _barycentric__WEBPACK_IMPORTED_MODULE_2__["barycentric2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "barycentric3", function() { return _barycentric__WEBPACK_IMPORTED_MODULE_2__["barycentric3"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "barycentric4", function() { return _barycentric__WEBPACK_IMPORTED_MODULE_2__["barycentric4"]; });

/* harmony import */ var _interpolations__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_142332__(/*! ./interpolations */ "./lib/interpolations.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "lerp", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["lerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "biLerp", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["biLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "triLerp", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["triLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "triangleLerp2D", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["triangleLerp2D"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "triangleLerp3D", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["triangleLerp3D"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "tetraLerp", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["tetraLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "InterpolateDirection", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["InterpolateDirection"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "meshInterpolate", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["meshInterpolate"]; });

/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_142332__(/*! ./minMax */ "./lib/minMax.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "MinMax", function() { return _minMax__WEBPACK_IMPORTED_MODULE_4__["MinMax"]; });

/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_142332__(/*! ./quaternion */ "./lib/quaternion.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "Quaternion", function() { return _quaternion__WEBPACK_IMPORTED_MODULE_5__["Quaternion"]; });

/* harmony import */ var _matrix3__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_142332__(/*! ./matrix3 */ "./lib/matrix3.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "mat", function() { return _matrix3__WEBPACK_IMPORTED_MODULE_6__["mat"]; });

/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_142332__(/*! ./vectors */ "./lib/vectors.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "vec", function() { return _vectors__WEBPACK_IMPORTED_MODULE_7__["vec"]; });

/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_142332__(/*! ./arrays */ "./lib/arrays.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "minArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["minArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "maxArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["maxArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "minMaxArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["minMaxArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "normalizeArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["normalizeArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "scaleArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["scaleArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "dectectNan", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["dectectNan"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "flatten", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["flatten"]; });

/* harmony import */ var _rotateAxis__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_142332__(/*! ./rotateAxis */ "./lib/rotateAxis.ts");
/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "rotateAxis", function() { return _rotateAxis__WEBPACK_IMPORTED_MODULE_9__["rotateAxis"]; });

/* harmony reexport (safe) */ __nested_webpack_require_142332__.d(__webpack_exports__, "getRotationAxis", function() { return _rotateAxis__WEBPACK_IMPORTED_MODULE_9__["getRotationAxis"]; });










//export * from "./stats"



/***/ }),

/***/ "./lib/interpolations.ts":
/*!*******************************!*\
  !*** ./lib/interpolations.ts ***!
  \*******************************/
/*! exports provided: lerp, biLerp, triLerp, triangleLerp2D, triangleLerp3D, tetraLerp, InterpolateDirection, meshInterpolate */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_158158__) {

"use strict";
__nested_webpack_require_158158__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_158158__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __nested_webpack_require_158158__.d(__webpack_exports__, "biLerp", function() { return biLerp; });
/* harmony export (binding) */ __nested_webpack_require_158158__.d(__webpack_exports__, "triLerp", function() { return triLerp; });
/* harmony export (binding) */ __nested_webpack_require_158158__.d(__webpack_exports__, "triangleLerp2D", function() { return triangleLerp2D; });
/* harmony export (binding) */ __nested_webpack_require_158158__.d(__webpack_exports__, "triangleLerp3D", function() { return triangleLerp3D; });
/* harmony export (binding) */ __nested_webpack_require_158158__.d(__webpack_exports__, "tetraLerp", function() { return tetraLerp; });
/* harmony export (binding) */ __nested_webpack_require_158158__.d(__webpack_exports__, "InterpolateDirection", function() { return InterpolateDirection; });
/* harmony export (binding) */ __nested_webpack_require_158158__.d(__webpack_exports__, "meshInterpolate", function() { return meshInterpolate; });
/* harmony import */ var _barycentric__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_158158__(/*! ./barycentric */ "./lib/barycentric.ts");
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_158158__(/*! ./arrays */ "./lib/arrays.ts");


/**
 *
 * @param x Where to evaluate
 * @param x1 min point
 * @param x2 max point
 * @param q00 scalar value at x1
 * @param q01 scalar value at x2
 * @category Interpolation
 */
function lerp(x, x1, x2, q00, q01) {
    const d = 1 / (x2 - x1);
    return q00 * (x2 - x) * d + q01 * (x - x1) * d;
}
/**
 * Bilinear interpolation
 * @param p Where to evaluate
 * @param p1 min point
 * @param p2 max point
 * @param q11 scalar value at (x1, y1)
 * @param q12 scalar value at (x1, y2)
 * @param q21 scalar value at (x2, y1)
 * @param q22 scalar value at (x2, y2)
 * @category Interpolation
 */
function biLerp(p, p1, p2, q11, q12, q21, q22) {
    const r1 = lerp(p[0], p1[0], p2[0], q11, q21);
    const r2 = lerp(p[0], p1[0], p2[0], q12, q22);
    return lerp(p[1], p1[1], p2[1], r1, r2);
}
/**
 * Trilinear interpolation
 * @param p Where to evaluate
 * @param p1 min point
 * @param p2 max point
 * @param q000 scalar value at (0,0,0)
 * @param q001 scalar value at (0,0,1)
 * @param q010 scalar value at (0,1,0)
 * @param q011 scalar value at (0,1,1)
 * @param q100 scalar value at (1,0,0)
 * @param q101 scalar value at (1,0,1)
 * @param q110 scalar value at (1,1,0)
 * @param q111 scalar value at (1,1,1)
 * @category Interpolation
 */
function triLerp(p, p1, p2, q000, q001, q010, q011, q100, q101, q110, q111) {
    const x00 = lerp(p[0], p1[0], p2[0], q000, q100);
    const x10 = lerp(p[0], p1[0], p2[0], q010, q110);
    const x01 = lerp(p[0], p1[0], p2[0], q001, q101);
    const x11 = lerp(p[0], p1[0], p2[0], q011, q111);
    const r0 = lerp(p[1], p1[1], p2[1], x00, x01);
    const r1 = lerp(p[1], p1[1], p2[1], x10, x11);
    return lerp(p[2], p1[2], p2[2], r0, r1);
}
/**
 * @param q1 Either a number or an array of size 3, 6 or 9 defined at point p1
 * @param q2 Either a number or an array of size 3, 6 or 9 defined at point p2
 * @param q3 Either a number or an array of size 3, 6 or 9 defined at point p3
 * @category Interpolation
 */
function triangleLerp2D(p, p1, p2, p3, q1, q2, q3) {
    const uvw = Object(_barycentric__WEBPACK_IMPORTED_MODULE_0__["barycentric2"])(p, p1, p2, p3);
    if (Array.isArray(q1)) {
        return q1.map((v1, i) => v1 * uvw[0] + q2[i] * uvw[1] + q3[i] * uvw[2]);
    }
    return uvw[0] * q1 + uvw[1] * q2 + uvw[2] * q3;
}
/**
 * @param q1 Either a number or an array of size 3, 6 or 9 defined at point p1
 * @param q2 Either a number or an array of size 3, 6 or 9 defined at point p2
 * @param q3 Either a number or an array of size 3, 6 or 9 defined at point p3
 * @category Interpolation
 */
function triangleLerp3D(p, p1, p2, p3, q1, q2, q3) {
    const uvw = Object(_barycentric__WEBPACK_IMPORTED_MODULE_0__["barycentric3"])(p, p1, p2, p3);
    if (Array.isArray(q1)) {
        return q1.map((v1, i) => v1 * uvw[0] + q2[i] * uvw[1] + q3[i] * uvw[2]);
    }
    return uvw[0] * q1 + uvw[1] * q2 + uvw[2] * q3;
}
/**
 * @param q1 Either a number or an array of size 3, 6 or 9 defined at point p1
 * @param q2 Either a number or an array of size 3, 6 or 9 defined at point p2
 * @param q3 Either a number or an array of size 3, 6 or 9 defined at point p3
 * @param q4 Either a number or an array of size 3, 6 or 9 defined at point p4
 * @category Interpolation
 */
function tetraLerp(p, p1, p2, p3, p4, q1, q2, q3, q4) {
    const uvw = Object(_barycentric__WEBPACK_IMPORTED_MODULE_0__["barycentric4"])(p, p1, p2, p3, p4);
    if (Array.isArray(q1)) {
        return q1.map((v1, i) => v1 * uvw[0] + q2[i] * uvw[1] + q3[i] * uvw[2] + q4[i] * uvw[3]);
    }
    return uvw[0] * q1 + uvw[1] * q2 + uvw[2] * q3 + uvw[3] * q4;
}
// -------------------------------------------------------------------------
// INTERPOLATION multiple values using Topological information on a mesh
// -------------------------------------------------------------------------
/**
 * The direction for function [[meshInterpolate]]
 * @category Interpolation
 */
var InterpolateDirection;
(function (InterpolateDirection) {
    InterpolateDirection[InterpolateDirection["INCREASING"] = 0] = "INCREASING";
    InterpolateDirection[InterpolateDirection["DECREASING"] = 1] = "DECREASING";
})(InterpolateDirection || (InterpolateDirection = {}));
/**
 * Convert an attribute defined at combel of dim A to
 * a new attribute defined at a combel of dim B using a topological relationship.
 * If A<B, the direction is INCREASING (A -> B).
 *
 * A combel made of 1 vertex (also called node) is of dim 0 (0-dimensional space).
 *
 * A combel made of 2 connected vertices is a segment and is of dim 1 (1-dimensional space or line).
 *
 * A combel made of 3 or more connected planar vertices (convex polygon) is of dim 2 (2-dimensional space or surface).
 *
 * A combel made of 4 or more non-planar connected vertices is a tetrahedron and is of dim 3 (3-dimensional space or voluime).
 *
 * @param attribute The starting attribute (combel A). An attribute can be an array of number or
 * an array of array of number (). For example:
 * <ul>
 * <li> scalar  : [0, 0, 0 ...]
 * <li> vector2 : [[0,0], [0,0] ...]
 * <li> vector3 : [[0,0,0], [0,0,0] ...]
 * <li> smatrix3: [[0,0,0,0,0,0], [0,0,0,0,0,0] ...] symetric 3x3 matrices
 * <li> matrix3 : [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0] ...] full 3x3 matrices
 * <li> Any Array<Array<number>>
 * </ul>
 * The return attribute is noted combel B.
 * @param topology The topological relationship bitween the underlaying combels A and B.
 * Topology is given as an array of arrays or an array of number (example: [[0,1,2], [0,2,6], [10,34], [1,8,9,4]...]).
 * For the later (array of number) you can provide the chunk size (default 3 for 3 nodes therefore for triangles)
 * of the combels.
 * @param size The chunk size of topology if an array of number is provided. Default value is 3
 * @param direction The direction of the interpolation. INCREASING direction means from combels
 * of lower to higher degree (e.g., from vertex to triangle or to segment or to tetrahedron or to ...).
 * DECREASING direction means from combels of higher to lower degree (e.g., from triangle to vertex).
 * Default value is INCREASING direction
 * @returns The new interpolated attribute for the underlaying combels defined in topology
 * @note We only interpolate from combel of dim 0 (vertex) to dim N, and from dim N to dim 0,
 * never from dim N to dim M.
 * @example
 * ```js
 * // interpolate node attributes to 2 triangles and 1 segment
 * // The first triangle is made of nodes index 0, 2 and 1
 * // The second triangle is made of nodes index 0, 3 and 2
 * // The segment is made of nodes index 2 and 3
 * const nodes    = [1.2, 5.9, 4.2, 7.2]
 * const topology = [[0,2,1], [0,3,2], [2,3]] // 2 triangles and 1 segment
 * const result   = interpolate({attribute: nodes, topology, direction: Direction.INCREASING})
 * // Return the value for the first and second triangle and the segment
 * // Expected return values [3.7666, 4.2, 6.2]
 * //   3.7666 = (1.2 + 4.2 + 5.9) / 3
 * //   4.2    = (1.2 + 7.2 + 4.2) / 3
 * //   6.2    = (4.2 + 7.2) / 2
 * ```
 * @category Interpolation
 */
function meshInterpolate({ attribute, topology, size = 3, direction = InterpolateDirection.INCREASING }) {
    let topo = undefined;
    if (attribute === undefined) {
        console.warn('Cannot meshInterpolate, attribute is undefined');
        return undefined;
    }
    if (attribute.length === 0) {
        console.warn('Cannot meshInterpolate, attribute is empty');
        return undefined;
    }
    if (topology === undefined) {
        console.warn('Cannot meshInterpolate, attribute is topology');
        return undefined;
    }
    if (topology.length === 0) {
        console.warn('Cannot meshInterpolate, topology is empty');
        return undefined;
    }
    if (typeof topology[0] === 'number') {
        // Humm, better to use [[], []...]
        // Have to use size to know the chunk size in topology
        topo = [];
        if (topology.length % size !== 0) {
            throw new Error(`Cannot meshInterpolate, topology (of size ${topology.length}) is not divisable by ${size}`);
        }
        for (let i = 0; i < topology.length; i += size) {
            const a = [];
            for (let j = 0; j < size; ++j) {
                a.push(topology[i + j]);
            }
            topo.push(a);
        }
    }
    else {
        topo = topology;
    }
    switch (direction) {
        case InterpolateDirection.INCREASING: return interpolateIncreasingCombels({ from: attribute, topology: topo });
        case InterpolateDirection.DECREASING: return interpolateDecreasingCombels({ from: attribute, topology: topo });
    }
}
// P R I V A T E  starting from here
function getMinMax(topology) {
    const minMax = [Infinity, -Infinity];
    topology.forEach(combel => {
        const m = Object(_arrays__WEBPACK_IMPORTED_MODULE_1__["minMaxArray"])(combel);
        minMax[0] = Math.min(minMax[0], m[0]);
        minMax[1] = Math.max(minMax[1], m[1]);
    });
    return minMax;
}
function interpolateIncreasingCombels({ from, topology }) {
    let minMax = getMinMax(topology);
    if (minMax[0] < 0) {
        throw new Error(`Topology contains negatif indices`);
    }
    let a = from[0];
    if (!(typeof a === 'number')) {
        a = a.slice().fill(0);
    }
    else {
        a = 0;
    }
    const to = new Array(topology.length).fill(a);
    if (typeof a === 'number') {
        topology.forEach((combel, index) => {
            to[index] = (combel.reduce((v, i) => v + from[i])) / combel.length;
        });
    }
    else {
        topology.forEach((combel, index) => {
            let sum = a.slice();
            combel.forEach(index => {
                const b = from[index];
                sum = sum.map((num, idx) => num + b[idx]);
            });
            to[index] = Object(_arrays__WEBPACK_IMPORTED_MODULE_1__["scaleArray"])(sum, 1 / combel.length);
        });
    }
    return to;
}
function interpolateDecreasingCombels({ from, topology }) {
    let minMax = getMinMax(topology);
    //const minMax = topology.reduce( combel => minMaxArray(combel) )
    if (minMax[0] < 0) {
        throw new Error(`Topology contains negatif indices`);
    }
    let a = from[0];
    let size = 1;
    let to = undefined;
    if (!(typeof a === 'number')) {
        a = a.slice().fill(0);
        size = a.length;
        to = new Array(minMax[1] + 1).fill(undefined).map(_ => a.slice());
    }
    else {
        a = 0;
        to = new Array(minMax[1] + 1).fill(0);
    }
    const nbr = new Array(to.length).fill(0);
    if (typeof a === 'number') {
        topology.forEach((idNodes, idFace) => {
            const v = from[idFace];
            idNodes.forEach(id => {
                to[id] += v;
                nbr[id]++;
            });
        });
        for (let i = 0; i < to.length; ++i) {
            to[i] /= nbr[i];
        }
    }
    else {
        //console.log(to)
        topology.forEach((idNodes, idFace) => {
            const v = from[idFace];
            idNodes.forEach(id => {
                const vv = to[id];
                for (let i = 0; i < size; ++i)
                    vv[i] += v[i];
                nbr[id]++;
                //console.log(id, to)
            });
        });
        for (let j = 0; j < to.length; ++j) {
            for (let i = 0; i < size; ++i)
                to[j][i] /= nbr[j];
        }
        //console.log(to)
    }
    return to;
}


/***/ }),

/***/ "./lib/matrix3.ts":
/*!************************!*\
  !*** ./lib/matrix3.ts ***!
  \************************/
/*! exports provided: mat */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_171093__) {

"use strict";
__nested_webpack_require_171093__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_171093__.d(__webpack_exports__, "mat", function() { return mat; });
var mat;
(function (mat) {
    /**
     * Unpack a linearized matrix (components in a vector) and return
     * a double array matrix
     * @example
     * ```ts
     * // sym matrix3
     * const m = [1, 2, 3,
     *               4, 5,
     *                  6]
     * const n = unpack(m)
     * // will give
     * // [
     * //   [1, 2, 3],
     * //   [2, 4, 5],
     * //   [3, 5, 6]
     * // ]
     * ```
     */
    function unpack(m) {
        if (m.length === 6) {
            return [
                [m[0], m[1], m[2]],
                [m[1], m[3], m[4]],
                [m[2], m[4], m[5]]
            ];
        }
        return [
            [m[0], m[1], m[2]],
            [m[3], m[4], m[5]],
            [m[6], m[7], m[8]]
        ];
    }
    mat.unpack = unpack;
    /**
     * Pack a a double array matrix, i.e. return
     * components in a vector
     * @see [[unpack]]
     */
    function pack(m, isSym = true) {
        if (isSym) {
            return [
                m[0][0], m[0][1], m[0][2],
                m[1][1], m[1][2],
                m[2][2]
            ];
        }
        return [
            m[0][0], m[0][1], m[0][2],
            m[1][0], m[1][1], m[1][2],
            m[2][0], m[2][1], m[2][2]
        ];
    }
    mat.pack = pack;
    /**
     * @category Matrix
     */
    function det(m) {
        return m[0][0] * m[1][1] * m[2][2] -
            m[0][0] * m[1][2] * m[2][1] -
            m[0][1] * m[1][0] * m[2][2] +
            m[0][1] * m[1][2] * m[2][0] +
            m[0][2] * m[1][0] * m[2][1] -
            m[0][2] * m[1][1] * m[2][0];
    }
    mat.det = det;
    function multVec(e, v) {
        const x = v[0], y = v[1], z = v[2];
        return [
            e[0][0] * x + e[0][1] * y + e[0][2] * z,
            e[1][0] * x + e[1][1] * y + e[1][2] * z,
            e[2][0] * x + e[2][1] * y + e[2][2] * z
        ];
    }
    mat.multVec = multVec;
    function multTVec(e, v) {
        const x = v[0], y = v[1], z = v[2];
        return [
            e[0][0] * x + e[1][0] * y + e[2][0] * z,
            e[0][1] * x + e[1][1] * y + e[2][1] * z,
            e[0][2] * x + e[1][2] * y + e[2][2] * z
        ];
    }
    mat.multTVec = multTVec;
    /**
     * @category Matrix
     */
    function inv(me, throwOnDegenerate) {
        var n11 = me[0][0], n21 = me[0][1], n31 = me[0][2], n12 = me[1][0], n22 = me[1][1], n32 = me[1][2], n13 = me[2][0], n23 = me[2][1], n33 = me[2][2], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
        if (det === 0) {
            let msg = "Matrix3: .getInverse() can't invert matrix, determinant is 0";
            if (throwOnDegenerate === true) {
                throw new Error(msg);
            }
            else {
                console.warn(msg);
            }
            return this.identity();
        }
        let detInv = 1 / det;
        return [
            [t11 * detInv, (n31 * n23 - n33 * n21) * detInv, (n32 * n21 - n31 * n22) * detInv],
            [t12 * detInv, (n33 * n11 - n31 * n13) * detInv, (n31 * n12 - n32 * n11) * detInv],
            [t13 * detInv, (n21 * n13 - n23 * n11) * detInv, (n22 * n11 - n21 * n12) * detInv]
        ];
    }
    mat.inv = inv;
    /**
     * @category Matrix
     */
    function transpose(m) {
        let tmp;
        tmp = m[0][1];
        m[0][1] = m[1][0];
        m[1][0] = tmp;
        tmp = m[0][2];
        m[0][2] = m[2][0];
        m[2][0] = tmp;
        tmp = m[1][2];
        m[1][2] = m[2][1];
        m[2][1] = tmp;
        return this;
    }
    mat.transpose = transpose;
    /**
     * @brief Rotate CCW (angle in degrees) along the provided axis.
     * @param m The matrix
     * @param angleInDeg The angle of rotation
     * @param AXIS The axis of rotation/ Can be either `x`, `X`, `y`, `Y`, `z`, or `Z`.
     * @category Matrix
     */
    function rotate(m, angleInDeg, AXIS) {
        let axis = 2;
        if (AXIS === 'x' || AXIS === 'X') {
            axis = 0;
        }
        else if (AXIS === 'y' || AXIS === 'Y') {
            axis = 1;
        }
        const R = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        const c = Math.cos(angleInDeg * Math.PI / 180.0);
        const s = Math.sin(angleInDeg * Math.PI / 180.0);
        if (axis === 2) {
            R[0][0] = c;
            R[0][1] = -s;
            R[1][0] = s;
            R[1][1] = c;
            R[2][2] = 1;
        }
        else if (axis === 0) {
            R[0][0] = 1;
            R[1][1] = c;
            R[1][2] = -s;
            R[2][1] = s;
            R[2][2] = c;
        }
        else {
            R[0][0] = c;
            R[0][2] = s;
            R[2][0] = -s;
            R[1][1] = 1;
            R[2][2] = c;
        }
        return rotateInverse(m, R);
    }
    mat.rotate = rotate;
    /**
     * Rotate inverse a [[Matrix3]] according to a rotation matrix
     * @param {Matrix3} rot The rotation matrix (antisymmetric)
     * @param {Matrix3} m The matrix3 to rotate
     */
    function rotateInverse(m, rot) {
        const t = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        t[0][0] = m[0][0] * rot[0][0] + m[0][1] * rot[1][0] + m[0][2] * rot[2][0];
        t[0][1] = m[0][0] * rot[0][1] + m[0][1] * rot[1][1] + m[0][2] * rot[2][1];
        t[0][2] = m[0][0] * rot[0][2] + m[0][1] * rot[1][2] + m[0][2] * rot[2][2];
        t[1][0] = m[1][0] * rot[0][0] + m[1][1] * rot[1][0] + m[1][2] * rot[2][0];
        t[1][1] = m[1][0] * rot[0][1] + m[1][1] * rot[1][1] + m[1][2] * rot[2][1];
        t[1][2] = m[1][0] * rot[0][2] + m[1][1] * rot[1][2] + m[1][2] * rot[2][2];
        t[2][0] = m[2][0] * rot[0][0] + m[2][1] * rot[1][0] + m[2][2] * rot[2][0];
        t[2][1] = m[2][0] * rot[0][1] + m[2][1] * rot[1][1] + m[2][2] * rot[2][1];
        t[2][2] = m[2][0] * rot[0][2] + m[2][1] * rot[1][2] + m[2][2] * rot[2][2];
        // Operates: rot'.t
        const s = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        s[0][0] = rot[0][0] * t[0][0] + rot[1][0] * t[1][0] + rot[2][0] * t[2][0];
        s[0][1] = rot[0][0] * t[0][1] + rot[1][0] * t[1][1] + rot[2][0] * t[2][1];
        s[0][2] = rot[0][0] * t[0][2] + rot[1][0] * t[1][2] + rot[2][0] * t[2][2];
        s[1][0] = rot[0][1] * t[0][0] + rot[1][1] * t[1][0] + rot[2][1] * t[2][0];
        s[1][1] = rot[0][1] * t[0][1] + rot[1][1] * t[1][1] + rot[2][1] * t[2][1];
        s[1][2] = rot[0][1] * t[0][2] + rot[1][1] * t[1][2] + rot[2][1] * t[2][2];
        s[2][0] = rot[0][2] * t[0][0] + rot[1][2] * t[1][0] + rot[2][2] * t[2][0];
        s[2][1] = rot[0][2] * t[0][1] + rot[1][2] * t[1][1] + rot[2][2] * t[2][1];
        s[2][2] = rot[0][2] * t[0][2] + rot[1][2] * t[1][2] + rot[2][2] * t[2][2];
        return s;
    }
    mat.rotateInverse = rotateInverse;
    /**
     * Rotate forward a [[Matrix3]] according to a rotation matrix
     * @param {Matrix3} rot The rotation matrix (antisymmetric)
     * @param {Matrix3} m The matrix3 to rotate
     */
    function rotateForward(m, rot) {
        // Operates: t = s.rot'
        const t = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        t[0][0] = m[0][0] * rot[0][0] + m[0][1] * rot[0][1] + m[0][2] * rot[0][2];
        t[0][1] = m[0][0] * rot[1][0] + m[0][1] * rot[1][1] + m[0][2] * rot[1][2];
        t[0][2] = m[0][0] * rot[2][0] + m[0][1] * rot[2][1] + m[0][2] * rot[2][2];
        t[1][0] = m[1][0] * rot[0][0] + m[1][1] * rot[0][1] + m[1][2] * rot[0][2];
        t[1][1] = m[1][0] * rot[1][0] + m[1][1] * rot[1][1] + m[1][2] * rot[1][2];
        t[1][2] = m[1][0] * rot[2][0] + m[1][1] * rot[2][1] + m[1][2] * rot[2][2];
        t[2][0] = m[2][0] * rot[0][0] + m[2][1] * rot[0][1] + m[2][2] * rot[0][2];
        t[2][1] = m[2][0] * rot[1][0] + m[2][1] * rot[1][1] + m[2][2] * rot[1][2];
        t[2][2] = m[2][0] * rot[2][0] + m[2][1] * rot[2][1] + m[2][2] * rot[2][2];
        // Operates: rot.t
        const s = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        s[0][0] = rot[0][0] * t[0][0] + rot[0][1] * t[1][0] + rot[0][2] * t[2][0];
        s[0][1] = rot[0][0] * t[0][1] + rot[0][1] * t[1][1] + rot[0][2] * t[2][1];
        s[0][2] = rot[0][0] * t[0][2] + rot[0][1] * t[1][2] + rot[0][2] * t[2][2];
        s[1][0] = rot[1][0] * t[0][0] + rot[1][1] * t[1][0] + rot[1][2] * t[2][0];
        s[1][1] = rot[1][0] * t[0][1] + rot[1][1] * t[1][1] + rot[1][2] * t[2][1];
        s[1][2] = rot[1][0] * t[0][2] + rot[1][1] * t[1][2] + rot[1][2] * t[2][2];
        s[2][0] = rot[2][0] * t[0][0] + rot[2][1] * t[1][0] + rot[2][2] * t[2][0];
        s[2][1] = rot[2][0] * t[0][1] + rot[2][1] * t[1][1] + rot[2][2] * t[2][1];
        s[2][2] = rot[2][0] * t[0][2] + rot[2][1] * t[1][2] + rot[2][2] * t[2][2];
        return s;
    }
    mat.rotateForward = rotateForward;
})(mat || (mat = {}));


/***/ }),

/***/ "./lib/minMax.ts":
/*!***********************!*\
  !*** ./lib/minMax.ts ***!
  \***********************/
/*! exports provided: MinMax */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_180224__) {

"use strict";
__nested_webpack_require_180224__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_180224__.d(__webpack_exports__, "MinMax", function() { return MinMax; });
/**
 * @example
 * ```ts
 * const array = [1,6,3,2,8,9,5]
 * const mm = new MinMax(array)
 * console.log( mm.min ) // 1
 * console.log( mm.max ) // 9
 *
 * mm.reset()
 * mm.add([7,2,0,6])
 * mm.add(8)
 * console.log( mm.min ) // 0
 * console.log( mm.max ) // 8
 * ```
 */
class MinMax {
    constructor(values) {
        this.m_ = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
        if (values !== undefined) {
            this.add(values);
        }
    }
    reset() {
        this.m_ = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
    }
    get min() {
        return this.m_[0];
    }
    get max() {
        return this.m_[1];
    }
    get length() {
        return this.m_[1] - this.m_[0];
    }
    get value() {
        return this.m_;
    }
    add(values) {
        if (Array.isArray(values)) {
            values.forEach((v) => {
                if (v < this.m_[0])
                    this.m_[0] = v;
                if (v > this.m_[1])
                    this.m_[1] = v;
            });
        }
        else {
            const v = values;
            if (v < this.m_[0])
                this.m_[0] = v;
            if (v > this.m_[1])
                this.m_[1] = v;
        }
        return this;
    }
}


/***/ }),

/***/ "./lib/quaternion.ts":
/*!***************************!*\
  !*** ./lib/quaternion.ts ***!
  \***************************/
/*! exports provided: Quaternion */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_181886__) {

"use strict";
__nested_webpack_require_181886__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_181886__.d(__webpack_exports__, "Quaternion", function() { return Quaternion; });
/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_181886__(/*! ./vectors */ "./lib/vectors.ts");

const setRow = (m, i, v) => {
    m[i][0] = v[0];
    m[i][1] = v[1];
    m[i][2] = v[2];
};
class Quaternion {
    constructor() {
        this.q = [0, 0, 0, 1];
    }
    /**
     *
     * @param {Vector3} axis Axis of ratation
     * @param {number} angle Angle of rotation in radian
     */
    static fromAxisAngle(axis, angle) {
        let q = new Quaternion();
        q.setAxisAngle(axis, angle);
        return q;
    }
    // prod 2 quaternions
    static fromProd(a, b) {
        let q = new Quaternion();
        q.q[0] = a.q[3] * b.q[0] + b.q[3] * a.q[0] + a.q[1] * b.q[2] - a.q[2] * b.q[1];
        q.q[1] = a.q[3] * b.q[1] + b.q[3] * a.q[1] + a.q[2] * b.q[0] - a.q[0] * b.q[2];
        q.q[2] = a.q[3] * b.q[2] + b.q[3] * a.q[2] + a.q[0] * b.q[1] - a.q[1] * b.q[0];
        q.q[3] = a.q[3] * b.q[3] - b.q[0] * a.q[0] - a.q[1] * b.q[1] - a.q[2] * b.q[2];
        return q;
    }
    // 3 Vec3
    static fromBase(X, Y, Z) {
        let q = new Quaternion();
        q.setFromBase(X, Y, Z);
        return q;
    }
    // Mat3
    static fromRotationMatrix(r) {
        let q = new Quaternion();
        q.setFromRotationMatrix(r);
        return q;
    }
    // 2 Vec3
    static fromTo(from, to) {
        let q = new Quaternion();
        q.setFromTo(from, to);
        return q;
    }
    // ------------------------------------
    get data() {
        return this.q;
    }
    get axis() {
        let res = [this.q[0], this.q[1], this.q[2]];
        const sinus = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].norm(res);
        if (sinus > 1e-8)
            _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].scale(res, 1 / sinus);
        return (Math.acos(this.q[3]) <= Math.PI / 2.0) ? res : _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].scale(res, -1);
    }
    get angle() {
        const angle = 2.0 * Math.acos(this.q[3]);
        return (angle <= Math.PI) ? angle : 2.0 * Math.PI - angle;
    }
    // ------------------------------------
    equals(q) {
        for (let i = 0; i < 4; ++i) {
            if (this.q[i] !== q.q[i])
                return false;
        }
        return true;
    }
    notEquals(q) {
        return !this.equals(q);
    }
    prod(q) {
        let r = Quaternion.fromProd(this, q);
        return this.setFrom(r);
    }
    inverse() {
        let q = new Quaternion();
        for (let i = 0; i < 3; ++i) {
            q.q[i] = -this.q[i];
        }
        q.q[3] = this.q[3];
        return q;
    }
    invert() {
        this.q[0] *= -1;
        this.q[1] *= -1;
        this.q[2] *= -1;
        return this;
    }
    negate() {
        this.invert();
        this.q[3] *= -1;
        return this;
    }
    normalize() {
        let q = this.q;
        const norm = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
        for (let i = 0; i < 4; ++i) {
            q[i] /= norm;
        }
        return norm;
    }
    // 2 quaternions
    dot(A, B) {
        let a = A.q;
        let b = B.q;
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    /**
     * Rorate inverse a vector
     * @param {Vec3} V The vector to inverse rotate
     * @returns {Vec3} The rotated vector
     */
    iRotate(v) {
        let q = this.q;
        const q00 = 2.0 * q[0] * q[0];
        const q11 = 2.0 * q[1] * q[1];
        const q22 = 2.0 * q[2] * q[2];
        const q01 = 2.0 * q[0] * q[1];
        const q02 = 2.0 * q[0] * q[2];
        const q03 = 2.0 * q[0] * q[3];
        const q12 = 2.0 * q[1] * q[2];
        const q13 = 2.0 * q[1] * q[3];
        const q23 = 2.0 * q[2] * q[3];
        //const v = [V.x, V.y, V.z]
        return [
            (1.0 - q11 - q22) * v[0] + (q01 + q23) * v[1] + (q02 - q13) * v[2],
            (q01 - q23) * v[0] + (1.0 - q22 - q00) * v[1] + (q12 + q03) * v[2],
            (q02 + q13) * v[0] + (q12 - q03) * v[1] + (1.0 - q11 - q00) * v[2]
        ];
    }
    /**
     * Rotate a vector
     * @param {Vec3} v The vector to rotate
     * @returns {Vec3} The rotated vector
     */
    rotate(v) {
        let q = this.q;
        const q00 = 2.0 * q[0] * q[0];
        const q11 = 2.0 * q[1] * q[1];
        const q22 = 2.0 * q[2] * q[2];
        const q01 = 2.0 * q[0] * q[1];
        const q02 = 2.0 * q[0] * q[2];
        const q03 = 2.0 * q[0] * q[3];
        const q12 = 2.0 * q[1] * q[2];
        const q13 = 2.0 * q[1] * q[3];
        const q23 = 2.0 * q[2] * q[3];
        //const v = [V.x, V.y, V.z]
        return [
            (1.0 - q11 - q22) * v[0] + (q01 - q23) * v[1] + (q02 + q13) * v[2],
            (q01 + q23) * v[0] + (1.0 - q22 - q00) * v[1] + (q12 - q03) * v[2],
            (q02 - q13) * v[0] + (q12 + q03) * v[1] + (1.0 - q11 - q00) * v[2]
        ];
    }
    // --------------------------------------------
    /**
     * @return [xx,xy,xz,yy,yz,zz] the rotation matrix (symm) (?? should be antisym)
     */
    toMatrix() {
        this.normalize();
        let q = this.q;
        const M = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        // M[0] = 1 - 2 * q[1] ** 2 - 2 * q[2] ** 2
        // M[1] = 2 * q[0] * q[1] - 2 * q[2] * q[3]
        // M[2] = 2 * q[0] * q[2] + 2 * q[1] * q[3]
        // M[3] = 1 - 2 * q[0] ** 2 - 2 * q[2] ** 2
        // M[4] = 2 * q[1] * q[2] - 2 * q[0] * q[3]
        // M[5] = 1 - 2 * q[0] ** 2 - 2 * q[1] ** 2
        // return M
        const q0 = q[0];
        const q1 = q[1];
        const q2 = q[2];
        const q3 = q[3];
        // First row of the rotation matrix
        M[0][0] = 2 * (q0 * q0 + q1 * q1) - 1;
        M[0][1] = 2 * (q1 * q2 - q0 * q3);
        M[0][2] = 2 * (q1 * q3 + q0 * q2);
        // Second row of the rotation matrix
        M[1][0] = 2 * (q1 * q2 + q0 * q3);
        M[1][1] = 2 * (q0 * q0 + q2 * q2) - 1;
        M[1][2] = 2 * (q2 * q3 - q0 * q1);
        // Third row of the rotation matrix
        M[2][0] = 2 * (q1 * q3 - q0 * q2);
        M[2][1] = 2 * (q2 * q3 + q0 * q1);
        M[2][2] = 2 * (q0 * q0 + q3 * q3) - 1;
        return M;
    }
    setFrom(q) {
        for (let i = 0; i < 4; ++i)
            this.q[i] = q.q[i];
        return this;
    }
    /**
     *
     * @param {Vec3} v The axis of rotation
     * @param {Number} angle
     */
    setAxisAngle(v, angle) {
        const nor = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].norm(v);
        if (nor < 1e-9) {
            this.q[0] = 0.0;
            this.q[1] = 0.0;
            this.q[2] = 0.0;
            this.q[3] = 1.0;
        }
        else {
            const sha = Math.sin(angle / 2.0);
            this.q[0] = sha * v[0] / nor;
            this.q[1] = sha * v[1] / nor;
            this.q[2] = sha * v[2] / nor;
            this.q[3] = Math.cos(angle / 2.0);
        }
        return this;
    }
    setFromTo(from, to) {
        const epsilon = 1e-10;
        const fromSqNorm = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].norm2(from);
        const toSqNorm = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].norm2(to);
        const axis = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].cross(from, to);
        const axisSqNorm = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].norm2(axis);
        let q = this.q;
        let test = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].dot(from, to) / Math.sqrt(fromSqNorm * toSqNorm);
        if (test < 0 && (1 - Math.abs(test)) < epsilon) {
            q[0] = q[1] = q[2] = 0.0;
            q[3] = 1.0;
            return this;
        }
        if ((fromSqNorm < epsilon) || (toSqNorm < epsilon) || (axisSqNorm < epsilon)) {
            q[0] = q[1] = q[2] = 0.0;
            q[3] = 1.0;
        }
        else {
            let angle = Math.asin(Math.sqrt(axisSqNorm / fromSqNorm / toSqNorm));
            if (_vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].dot(from, to) < 0.0)
                angle = Math.PI - angle;
            this.setAxisAngle(axis, angle);
        }
        return this;
    }
    /**
     *
     * @param {Mat3} r The roration matrix
     */
    setFromRotationMatrix(m) {
        //const m = r.data
        let i = 2;
        if (m[0][0] > m[1][1]) {
            if (m[0][0] > m[2][2])
                i = 0;
        }
        else {
            if (m[1][1] > m[2][2])
                i = 1;
        }
        if (m[0][0] + m[1][1] + m[2][2] > m[i][i]) {
            this.q[3] = Math.sqrt(m[0][0] + m[1][1] + m[2][2] + 1.0) / 2.0;
            this.q[0] = (m[2][1] - m[1][2]) / (4.0 * this.q[3]);
            this.q[1] = (m[0][2] - m[2][0]) / (4.0 * this.q[3]);
            this.q[2] = (m[1][0] - m[0][1]) / (4.0 * this.q[3]);
        }
        else {
            let j = (i + 1) % 3;
            let k = (i + 2) % 3;
            this.q[i] = Math.sqrt(m[i][i] - m[j][j] - m[k][k] + 1.0) / 2.0;
            this.q[j] = (m[i][j] + m[j][i]) / (4.0 * this.q[i]);
            this.q[k] = (m[i][k] + m[k][i]) / (4.0 * this.q[i]);
            this.q[3] = (m[k][j] - m[j][k]) / (4.0 * this.q[i]);
        }
        return this;
    }
    setFromBase(X, Y, Z) {
        let m = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        const normX = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].norm(X);
        const normY = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].norm(Y);
        const normZ = _vectors__WEBPACK_IMPORTED_MODULE_0__["vec"].norm(Z);
        for (let i = 0; i < 3; ++i) {
            setRow(m, i, [X[i] / normX, Y[i] / normY, Z[i] / normZ]);
        }
        return this.setFromRotationMatrix(m);
    }
}


/***/ }),

/***/ "./lib/rotateAxis.ts":
/*!***************************!*\
  !*** ./lib/rotateAxis.ts ***!
  \***************************/
/*! exports provided: rotateAxis, getRotationAxis */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_191887__) {

"use strict";
__nested_webpack_require_191887__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_191887__.d(__webpack_exports__, "rotateAxis", function() { return rotateAxis; });
/* harmony export (binding) */ __nested_webpack_require_191887__.d(__webpack_exports__, "getRotationAxis", function() { return getRotationAxis; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_191887__(/*! . */ "./lib/index.ts");
/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_191887__(/*! ./vectors */ "./lib/vectors.ts");


/**
 * Rotate a vector
 * @param axis The axis of rotation
 * @param angle The angle of rotation
 * @param v The vector to rotate
 * @returns The rotated vector (new instance)
 */
function rotateAxis(axis, angle, v) {
    const nor = _vectors__WEBPACK_IMPORTED_MODULE_1__["vec"].norm(axis);
    const q = [0, 0, 0, 1];
    if (nor > 1e-9) {
        const sha = Math.sin(angle * 0.5) / nor;
        q[0] = sha * axis[0];
        q[1] = sha * axis[1];
        q[2] = sha * axis[2];
        q[3] = Math.cos(angle * 0.5);
    }
    const q00 = 2.0 * q[0] ** 2;
    const q11 = 2.0 * q[1] ** 2;
    const q22 = 2.0 * q[2] ** 2;
    const q01 = 2.0 * q[0] * q[1];
    const q02 = 2.0 * q[0] * q[2];
    const q03 = 2.0 * q[0] * q[3];
    const q12 = 2.0 * q[1] * q[2];
    const q13 = 2.0 * q[1] * q[3];
    const q23 = 2.0 * q[2] * q[3];
    return [
        (1.0 - q11 - q22) * v[0] + (q01 - q23) * v[1] + (q02 + q13) * v[2],
        (q01 + q23) * v[0] + (1.0 - q22 - q00) * v[1] + (q12 - q03) * v[2],
        (q02 - q13) * v[0] + (q12 + q03) * v[1] + (1.0 - q11 - q00) * v[2]
    ];
}
/**
 * Get a 3D rotation matrix given an axis and an angle in degrees.
 * Axis can be either a vec.Vector3 or a string ('x', 'X', 'y', 'Y', 'z' or 'Z')
 * @param axis
 * @param angleInDeg
 * @returns [[mat.Matrix3]]
 */
function getRotationAxis(axis, angleInDeg) {
    if (Array.isArray(axis)) {
        return ___WEBPACK_IMPORTED_MODULE_0__["Quaternion"].fromAxisAngle(axis, angleInDeg).toMatrix();
    }
    let AXIS = 2;
    if (axis === 'x' || axis === 'X')
        AXIS = 0;
    else if (axis === 'y' || axis === 'Y')
        AXIS = 1;
    let R = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const c = Math.cos(angleInDeg * Math.PI / 180.0);
    const s = Math.sin(angleInDeg * Math.PI / 180.0);
    if (AXIS === 2) {
        R[0][0] = c;
        R[0][1] = -s;
        R[1][0] = s;
        R[1][1] = c;
        R[2][2] = 1;
    }
    else if (AXIS === 0) {
        R[0][0] = 1;
        R[1][1] = c;
        R[1][2] = -s;
        R[2][1] = s;
        R[2][2] = c;
    }
    else {
        R[0][0] = c;
        R[0][2] = s;
        R[2][0] = -s;
        R[1][1] = 1;
        R[2][2] = c;
    }
    return R;
}


/***/ }),

/***/ "./lib/vectors.ts":
/*!************************!*\
  !*** ./lib/vectors.ts ***!
  \************************/
/*! exports provided: vec */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_194850__) {

"use strict";
__nested_webpack_require_194850__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_194850__.d(__webpack_exports__, "vec", function() { return vec; });
var vec;
(function (vec) {
    /**
     * @category Vector
     */
    vec.create = (v1, v2) => v2.map((v, i) => v - v1[i]);
    /**
     * @category Vector
     */
    vec.norm2 = (v) => v.reduce((acc, w) => acc + w ** 2, 0);
    /**
     * @category Vector
     */
    vec.norm = (v) => Math.sqrt(vec.norm2(v));
    /**
     * Perform (a+b)
     * @category Vector
     */
    vec.add = (a, b) => a.map((v, i) => v + b[i]);
    /**
     * Perform (a-b)
     * @category Vector
     */
    vec.sub = (a, b) => a.map((v, i) => v - b[i]);
    /**
     * @category Vector
     */
    vec.scale = (v, s) => v.map(w => w * s);
    /**
     * @category Vector
     */
    vec.setCoord = (v, i, value) => v[i] = value;
    /**
     * @category Vector
     */
    vec.set = (v, v1) => v1.forEach((value, i) => v[i] = v1[i]);
    /**
     * @category Vector
     */
    vec.dot = (a, b) => a.reduce((acc, cur, i) => acc + cur * b[i], 0);
    /**
     * @category Vector
     */
    vec.cross = (v, w) => {
        let x = v[1] * w[2] - v[2] * w[1];
        let y = v[2] * w[0] - v[0] * w[2];
        let z = v[0] * w[1] - v[1] * w[0];
        return [x, y, z];
    };
    /**
     * @category Vector
     */
    vec.normalize = (v) => {
        const n = vec.norm(v);
        return v.map(w => w / n);
        //return [v[0]/n, v[1]/n, v[2]/n]
    };
    vec.clone = (v) => [...v];
})(vec || (vec = {}));


/***/ }),

/***/ "@youwol/dataframe":
/*!************************************!*\
  !*** external "@youwol/dataframe" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__youwol_dataframe__;

/***/ })

/******/ });
});
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./lib/collapse.ts":
/*!*************************!*\
  !*** ./lib/collapse.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapse": () => (/* binding */ collapse)
/* harmony export */ });
/* harmony import */ var _concatenate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concatenate */ "./lib/concatenate.ts");

/**
 * Allow to collapse special attributes based on name suffixes
 * <ul>
 *   <li>vector3: (x,y,z)
 *   <li>smatrix3: (xx, xy, xz, yy, yz, zz)
 *   <li>matrix3: (xx, xy, xz, yx, yy, yz, zx, zy, zz)
 * </ul>
 * As an example, if names includes 'Ux', 'Uy' and 'Uz', then all the tree attributes
 * will be collapsed into one vector3 attribute (with itemSize=3) named 'U'
 * @example
 * ```ts
 * const attributes = [[5,6], [1,2], [3,4]]
 * const names = ['uz', 'ux', 'uy']
 * console.log( collapse(names, attributes) )
 * ```
 * will display
 * ```sh
 * {
 *   names: [ 'u' ],
 *   values: [ [ 1, 3, 5, 2, 4, 6 ] ],
 *   itemSizes: [ 3 ],
 *   orders: [ [ 'x', 'y', 'z' ] ]
 *}
 * ```
 * @param attrNames The attribute names (array)
 * @param attributes The attributes (flat arrays)
 * @returns flat arrays of collapsed attributes
 *
 * @category Utils
 */
function collapse(attrNames, attributeArrays) {
    // Detect potential attributes with itemSize>1
    const contract = (fullName, names, attributes, suffixes) => {
        const suf = fullName.substring(fullName.length - suffixes[0].length);
        if (suffixes.includes(suf)) {
            const baseName = fullName.substring(0, fullName.length - suffixes[0].length);
            if (suffixes.reduce((ok, s) => ok && names.find(e => e === baseName + s) !== undefined, true)) {
                const ids = suffixes.map(s => names.indexOf(baseName + s));
                const attrs = [];
                ids.forEach(id => attrs.push(attributes[id]));
                // remove the names
                // remove the attributes
                suffixes.forEach(s => {
                    const id = names.indexOf(baseName + s);
                    names.splice(id, 1);
                    attributes.splice(id, 1);
                }); // map -> forEach
                return attrs;
            }
        }
        return undefined;
    };
    // const concatenate = (mat: number[][], itemSize: number) => {
    //     const m = mat.length
    //     const n = mat[0].length
    //     const a = new Array(n*itemSize).fill(0)
    //     let k = 0
    //     for (let j=0; j<n; ++j) {
    //         for (let i=0; i<m; ++i) a[k++] = mat[i][j]
    //     }
    //     return a
    // }
    const perform = (name, orders) => {
        //const size = orders.length
        const mat = contract(name, names, attributes, orders);
        if (mat) {
            allAttributes.push((0,_concatenate__WEBPACK_IMPORTED_MODULE_0__.concatenate)(mat));
            allNames.push(name.substring(0, name.length - orders[0].length));
            allItemSizes.push(orders.length);
            allOrders.push(orders);
            return true;
        }
        return false;
    };
    const names = [...attrNames];
    const attributes = [...attributeArrays];
    const allAttributes = [];
    const allNames = [];
    const allItemSizes = [];
    const allOrders = [];
    const tensors = [
        ['xx', 'xy', 'xz', 'yx', 'yy', 'yz', 'zx', 'zy', 'zz'],
        ['xx', 'xy', 'xz', 'yy', 'yz', 'zz'],
        ['x', 'y', 'z']
    ];
    while (names.length !== 0) {
        const name = names[0];
        if (!(() => {
            for (let i = 0; i < tensors.length; ++i) {
                if (perform(name, tensors[i]))
                    return true;
            }
            return false;
        })()) {
            //console.log(name, attrNames, attrNames.indexOf(name), attributes)
            allAttributes.push([...attributes[names.indexOf(name)]]);
            allNames.push(name);
            allItemSizes.push(1);
            allOrders.push([name]);
            names.shift();
            attributes.shift();
        }
    }
    return allNames.map((_, i) => {
        return {
            name: allNames[i],
            value: allAttributes[i],
            itemSize: allItemSizes[i],
            order: allOrders[i]
        };
    });
}


/***/ }),

/***/ "./lib/concatenate.ts":
/*!****************************!*\
  !*** ./lib/concatenate.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatenate": () => (/* binding */ concatenate)
/* harmony export */ });
/**
 * Concatenate an array of attributes with itemSize=1 into one with itemSize=number of attributes
 * @category Utils
 */
const concatenate = (mat) => {
    const itemSize = mat.length;
    const n = mat[0].length;
    const a = new Array(n * itemSize).fill(0);
    let k = 0;
    for (let j = 0; j < n; ++j) {
        for (let i = 0; i < itemSize; ++i)
            a[k++] = mat[i][j];
    }
    return a;
};


/***/ }),

/***/ "./lib/dxf/decoder.ts":
/*!****************************!*\
  !*** ./lib/dxf/decoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decoderDXF": () => (/* binding */ decoderDXF)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Decode a dxf file in the most simple form. We assume a list of:
 * ```txt
 * 999
 * And this is a comment (previous group is 999)
 * LINE
 * 8
 * Calque 1
 * 999 x1
 * 10
 * 6.425910
 * 999 y1
 * 20
 * 66.390800
 * 999 x2
 * 11
 * 7.497000
 * 999 y2
 * 21
 * 67.080556
 * 0
 * ...
 * ```
 * @returns A serie with itemSize=2 (i.e., 2D points) and such that 2 consecutive points form a segments.
 * Therefore, the number of segments in the serie is simply the `serie.count/4``
 *
 * @category Decoder
 */
function decoderDXF(buffer) {
    let lines = buffer.split('\n');
    const segments = [];
    let i = 0;
    const nextLine = () => {
        while (true) {
            if (i >= lines.length) {
                return undefined;
            }
            const line = lines[i++];
            if (line.length !== 0) {
                let r = line.split(' ');
                if (r.length !== 0) {
                    return r;
                }
            }
        }
    };
    while (true) {
        let r = nextLine();
        if (r === undefined) {
            break;
        }
        if (r[0] === 'LINE') {
            nextLine();
            nextLine();
            nextLine();
            const x1 = parseFloat(nextLine()[0]);
            nextLine();
            const y1 = parseFloat(nextLine()[0]);
            nextLine();
            const x2 = parseFloat(nextLine()[0]);
            nextLine();
            const y2 = parseFloat(nextLine()[0]);
            segments.push(x1, y1, x2, y2);
        }
    }
    return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: segments, itemSize: 2 });
}
const trimAll = (s) => s.replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '').replace('\t', ' ').trimEnd();


/***/ }),

/***/ "./lib/dxf/encoder.ts":
/*!****************************!*\
  !*** ./lib/dxf/encoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeDXF": () => (/* binding */ encodeDXF)
/* harmony export */ });
/**
 * @category Encoder
 */
function encodeDXF(dfs) {
    /*
    let xmin = Number.POSITIVE_INFINITY
    let ymin = Number.POSITIVE_INFINITY
    let xmax = Number.NEGATIVE_INFINITY
    let ymax = Number.NEGATIVE_INFINITY
    if (Array.isArray(dfs)) {
        dfs.forEach( df => {
            const is3D = df.series.positions.itemSize === 3
            const m = minMax(df.series.positions)
            if (m[0]<xmin) xmin = m[0]
            if (m[1]<ymin) ymin = m[1]
            if (is3D) {
                if (m[3]>xmax) xmax = m[3]
                if (m[4]>ymax) ymax = m[4]
            }
            else {
                if (m[2]>xmax) xmax = m[2]
                if (m[3]>ymax) ymax = m[3]
            }
        })
    }
    else {
        const is3D = dfs.series.positions.itemSize === 3
        const m = minMax(dfs.series.positions)
        xmin = m[0]
        ymin = m[1]
        if (is3D) {
            xmax = m[3]
            ymax = m[4]
        }
        else {
            xmax = m[2]
            ymax = m[3]
        }
    }
    */
    let xmin = 0;
    let ymin = 0;
    let xmax = 10;
    let ymax = 10;
    let buffer = `999
"Generated by YouWol"
    0 
SECTION
    2 
HEADER
    9 
$ACADVER
    1 
AC1009
    9 
$EXTMIN
    10 
    ${xmin} 
    20 
    ${ymin}
    9 
$EXTMAX
    10 
    ${xmax}
    20 
    ${ymax}
    0 
ENDSEC
    0 
SECTION
    2 
ENTITIES
`;
    const doit = df => {
        const serie = df.series.positions;
        const is3D = serie.itemSize === 3;
        if (serie.count % 2 !== 0) {
            throw new Error(`Wrong number of ${is3D ? '3D' : '2D'} points in the Serie. Have ${serie.count} and is not divisible by 2`);
        }
        let buffer = '';
        for (let i = 0; i < serie.count; i += 2) {
            const p1 = serie.itemAt(i); //as [number, number]
            const p2 = serie.itemAt(i + 1); //as [number, number]
            buffer += genSegment(p1, p2);
        }
        // buffer += `ENDSEC\n0\nEOF`
        return buffer;
    };
    if (Array.isArray(dfs)) {
        dfs.forEach(df => buffer += doit(df));
        buffer += `0\nENDSEC\n0\nEOF`;
        return buffer;
    }
    buffer += doit(dfs);
    buffer += `0\nENDSEC\n0\nEOF`;
    return buffer;
}
function genSegment(p1, p2) {
    //return `0\nLINE\n8\nCalque 1\n10\n${p1[0]}\n20\n${p1[1]}\n11\n${p2[0]}\n21\n${p2[1]}\n`
    return `0\nLINE\n10\n${p1[0].toFixed(2)}\n20\n${p1[1].toFixed(2)}\n30\n0\n11\n${p2[0].toFixed(2)}\n21\n${p2[1].toFixed(2)}\n31\n0\n`;
}


/***/ }),

/***/ "./lib/dxf/index.ts":
/*!**************************!*\
  !*** ./lib/dxf/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decoderDXF": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decoderDXF),
/* harmony export */   "encodeDXF": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeDXF)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./lib/dxf/decoder.ts");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./lib/dxf/encoder.ts");




/***/ }),

/***/ "./lib/gocad/decoder.ts":
/*!******************************!*\
  !*** ./lib/gocad/decoder.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeGocadVS": () => (/* binding */ decodeGocadVS),
/* harmony export */   "decodeGocadPL": () => (/* binding */ decodeGocadPL),
/* harmony export */   "decodeGocadTS": () => (/* binding */ decodeGocadTS),
/* harmony export */   "decodeGocadSO": () => (/* binding */ decodeGocadSO)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/math */ "../node_modules/@youwol/math/dist/@youwol/math.js");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collapse */ "./lib/collapse.ts");
/* harmony import */ var _concatenate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../concatenate */ "./lib/concatenate.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./lib/utils.ts");





/**
 * Create a Gocad Pointset (DataFrame) from a string buffer
 * @category Decoder
 */
function decodeGocadVS(buffer, { shared = true, merge = true, repair = false } = {}) {
    return loadGocadObject({
        buffer,
        keyword: '',
        separator: 'SUBVSET',
        dimension: 1,
        className: 'Pointset',
        extension: 'vs',
        shared,
        merge,
        repair
    });
}
/**
 * Create a Gocad Polyline (DataFrame) from a string buffer
 * @category Decoder
 */
function decodeGocadPL(buffer, { shared = true, merge = true, repair = false } = {}) {
    return loadGocadObject({
        buffer,
        keyword: 'SEG',
        separator: 'ILINE',
        dimension: 2,
        className: 'Polyline',
        extension: 'pl',
        shared,
        merge,
        repair
    });
}
/**
 * Create a Gocad Surface (DataFrame) from a string buffer
 * @category Decoder
 */
function decodeGocadTS(buffer, { shared = true, merge = true, repair = false } = {}) {
    return loadGocadObject({
        buffer,
        keyword: 'TRGL',
        separator: 'TFACE',
        dimension: 3,
        className: 'Surface',
        extension: 'ts',
        shared,
        merge,
        repair
    });
}
/**
 * Create a Gocad Voule (DataFrame) from a string buffer
 * @category Decoder
 */
function decodeGocadSO(buffer, { shared = true, merge = true, repair = false } = {}) {
    return loadGocadObject({
        buffer,
        keyword: 'TETRA',
        separator: 'TVOLUME',
        dimension: 4,
        className: 'Volume',
        extension: 'so',
        shared,
        merge,
        repair
    });
}
// ---------------------------------------------------------------------
function loadGocadObject({ buffer, keyword, separator, dimension, className, extension, shared, merge, repair }) {
    let lines = buffer.split('\n');
    let name = 'no-name';
    let attributes = [];
    let attrNames = [];
    let attrSizes = [];
    let nbFlatAttributes = -1;
    let startIndex = 0;
    let nbVertices = 0;
    let positions = [];
    let indices = [];
    let objects = [];
    const haveIndices = (keyword !== '');
    const SEP = separator;
    for (let i = 0; i < lines.length; ++i) {
        let line = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.trimAll)(lines[i]);
        if (line.length === 0 || line.charAt(0) === '#') {
            continue;
        }
        if (line.length >= 2 && line.charAt(0) === '/' && line.charAt(1) === '/') {
            continue;
        }
        let r = line.split(' ').map((s) => s.trim()).filter((s) => s !== '');
        if (r.length === 0) {
            continue;
        }
        let names = line.split(':');
        if (names.length === 0) {
            continue;
        }
        if (names[0] === 'name' && names.length > 1) {
            name = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.trimAll)(names[1]);
            continue;
        }
        if (r[0] === SEP) {
            // new object
            const object = createObject({
                positions, indices, attrNames, attrSizes, attributes,
                itemSize: dimension, shared, name,
                className, extension, merge
            });
            if (object)
                objects.push(object);
            // Use the same attributes
            attributes = attributes.map(_ => []);
            positions = [];
            indices = [];
            startIndex = nbVertices; // DO NOT reset the increment of the indices for components
            continue;
        }
        if (r[0] === 'GOCAD') {
            const object = createObject({
                positions, indices, attrNames, attrSizes, attributes,
                itemSize: dimension, shared, name,
                className, extension, merge
            });
            if (object)
                objects.push(object);
            name = 'no-name';
            attributes = [];
            attrNames = [];
            nbFlatAttributes = -1;
            positions = [];
            indices = [];
            startIndex = 0;
            nbVertices = 0;
            continue;
        }
        if (r[0] === 'PROPERTIES') {
            attributes = [];
            attrNames = [];
            nbFlatAttributes = -1;
            for (let j = 1; j < r.length; ++j) {
                //attributes.push([])
                attrNames.push(r[j]);
            }
            continue;
        }
        if (r[0] === 'ESIZES') {
            attrSizes = [];
            for (let j = 1; j < r.length; ++j) {
                attrSizes.push(parseInt(r[j]));
            }
            if (attrSizes.length !== attrNames.length)
                throw new Error(`size mismatch between PROPERTIES (${attrNames.length}) and ESIZES (${attrSizes.length})`);
            continue;
        }
        if (r[0] === 'VRTX' || r[0] === 'PVRTX') {
            ++nbVertices;
            positions.push(parseFloat(r[2]), parseFloat(r[3]), parseFloat(r[4]));
            // Initialize attributes and nbFlatAtributes
            if (nbFlatAttributes === -1) {
                startIndex = parseInt(r[1]); // CHECK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if (attrSizes.length === 0) {
                    for (let i = 0; i < attrNames.length; ++i)
                        attrSizes[i] = 1;
                }
                nbFlatAttributes = attrSizes.reduce((acc, v) => acc + v, 0);
                attributes = new Array(nbFlatAttributes).fill(undefined).map(_ => []);
            }
            if (nbFlatAttributes !== r.length - 5) {
                throw new Error(`Wrong number of attributes for vertex. Should be ${nbFlatAttributes} and got ${r.length - 5}.\n Line: ${line}`);
            }
            for (let j = 0; j < nbFlatAttributes; ++j) {
                attributes[j].push(parseFloat(r[5 + j]));
            }
            continue;
        }
        if (haveIndices && r[0] === keyword) {
            if (repair === false) {
                for (let i = 0; i < dimension; ++i) {
                    const j = parseInt(r[1 + i], 10) - startIndex;
                    indices.push(j);
                }
            }
            else if (dimension === 3) {
                let idx = [];
                for (let i = 0; i < dimension; ++i) {
                    const j = parseInt(r[1 + i], 10) - startIndex;
                    idx.push(j);
                }
                const v1 = [positions[3 * idx[0]], positions[3 * idx[0] + 1], positions[3 * idx[0] + 2]];
                const v2 = [positions[3 * idx[1]], positions[3 * idx[1] + 1], positions[3 * idx[1] + 2]];
                const v3 = [positions[3 * idx[2]], positions[3 * idx[2] + 1], positions[3 * idx[2] + 2]];
                const V = _youwol_math__WEBPACK_IMPORTED_MODULE_1__.vec.cross(_youwol_math__WEBPACK_IMPORTED_MODULE_1__.vec.create(v1, v2), _youwol_math__WEBPACK_IMPORTED_MODULE_1__.vec.create(v1, v3));
                const area = _youwol_math__WEBPACK_IMPORTED_MODULE_1__.vec.norm(V);
                if (area > 1e-12) {
                    indices.push(...idx);
                }
                else {
                    // Skip this triangle as it is degenerated
                }
            }
            continue;
        }
    }
    // Finish the last object if any
    const object = createObject({
        positions, indices, attrNames, attrSizes, attributes,
        itemSize: dimension, shared, name,
        className, extension, merge
    });
    if (object)
        objects.push(object);
    return objects;
}
// ----------------------------------------------------
const arrayMax = (a) => a.reduce((acc, cur) => cur > acc ? cur : acc, 0);
function createObject({ positions, indices, attrNames, attrSizes, attributes, itemSize, shared, name, className, extension, merge }) {
    if (positions.length === 0)
        return undefined;
    let userData = {
        className,
        extension,
        name,
        attributeNames: attrNames
    };
    let posSerie = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, positions, shared), itemSize: 3 });
    let df = (indices !== undefined && indices.length !== 0)
        ? _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({
            series: {
                positions: posSerie,
                indices: (arrayMax(indices) > 65535)
                    ? _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Uint32Array, indices, shared), itemSize })
                    : _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Uint16Array, indices, shared), itemSize })
            },
            userData
        })
        : _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({
            series: {
                positions: posSerie,
            },
            userData
        });
    // can merge only if all attribute are of size 1
    const canMerge = attrSizes.reduce((acc, size) => acc && size === 1, true);
    if (merge && canMerge) {
        const entries = new Map;
        (0,_collapse__WEBPACK_IMPORTED_MODULE_2__.collapse)(attrNames, attributes).forEach(attr => {
            entries.set(attr.name, _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({
                array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, attr.value, shared),
                itemSize: attr.itemSize
            }));
        });
        df = (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.append)(df, Object.fromEntries(entries));
    }
    else {
        // Otherwize, it is assumed that some ESIZES can be different that 1
        // Eah attributes[i] represente a scalar attribute for all vertices
        const entries = new Map;
        let i = 0;
        attrSizes.forEach((size, k) => {
            const attrs = [];
            for (let j = i; j < i + size; ++j) {
                attrs.push(attributes[j]);
            }
            const attr = (0,_concatenate__WEBPACK_IMPORTED_MODULE_3__.concatenate)(attrs);
            entries.set(attrNames[k], _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({
                array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, attr, shared),
                itemSize: size
            }));
            i += size;
        });
        // attrNames.forEach( (name, i) => {
        //     entries.set(name, createSerie({
        //         data: createTyped(Float32Array, attributes[i], shared),
        //         itemSize: attrSizes[i]
        //     }))
        // })
        df = (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.append)(df, Object.fromEntries(entries));
    }
    return df;
}


/***/ }),

/***/ "./lib/gocad/encoder.ts":
/*!******************************!*\
  !*** ./lib/gocad/encoder.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeGocadVS": () => (/* binding */ encodeGocadVS),
/* harmony export */   "encodeGocadPL": () => (/* binding */ encodeGocadPL),
/* harmony export */   "encodeGocadTS": () => (/* binding */ encodeGocadTS),
/* harmony export */   "encodeGocadSO": () => (/* binding */ encodeGocadSO)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./lib/utils.ts");

/**
 * Get the buffer object of a Gocad pointset
 * @category Encoder
 */
function encodeGocadVS(dfs, options = undefined) {
    let buffer = '';
    const doit = df => encodeGocadObject({
        df,
        combelSize: 1,
        combelName: '',
        header: 'GOCAD VSet 1.0\nHEADER: {\nname: no-name\n}\n',
        options
    });
    if (Array.isArray(dfs)) {
        dfs.forEach(df => buffer += doit(df));
        return buffer;
    }
    return doit(dfs);
}
/**
 * Get the buffer object of a Gocad lineset
 * @category Encoder
 */
function encodeGocadPL(dfs, options = undefined) {
    let buffer = '';
    const doit = df => encodeGocadObject({
        df,
        combelSize: 2,
        combelName: 'SEG',
        header: 'GOCAD PLine 1.0\nHEADER: {\nname: no-name\n}\n',
        options
    });
    if (Array.isArray(dfs)) {
        dfs.forEach(df => buffer += doit(df));
        return buffer;
    }
    return doit(dfs);
}
/**
 * Get the buffer object of a Gocad triangulated surface
 * @category Encoder
 */
function encodeGocadTS(dfs, options = undefined) {
    let buffer = '';
    const doit = df => encodeGocadObject({
        df,
        combelSize: 3,
        combelName: 'TRGL',
        header: 'GOCAD TSurf 1.0\nHEADER: {\nname: no-name\n}\n',
        options
    });
    if (Array.isArray(dfs)) {
        dfs.forEach(df => buffer += doit(df));
        return buffer;
    }
    return doit(dfs);
}
/**
 * Get the buffer object of a Gocad volume
 * @category Encoder
 */
function encodeGocadSO(dfs, options = undefined) {
    let buffer = '';
    const doit = df => encodeGocadObject({
        df,
        combelSize: 4,
        combelName: 'TETRA',
        header: 'GOCAD TSolid 1.0\nHEADER: {\nname: no-name\n}\n',
        options
    });
    if (Array.isArray(dfs)) {
        dfs.forEach(df => buffer += doit(df));
        return buffer;
    }
    return doit(dfs);
}
// ------------------------------------------------------------
const getGocadEncodeOptions = (options) => {
    const r = {
        saveAttributes: true,
        saveTopology: true,
        saveGeometry: true,
        expandAttributes: false,
        userData: undefined
    };
    if (options === undefined) {
        return r;
    }
    r.saveAttributes = options.saveAttributes !== undefined ? options.saveAttributes : true;
    r.saveTopology = options.saveTopology !== undefined ? options.saveTopology : true;
    r.saveGeometry = options.saveGeometry !== undefined ? options.saveGeometry : true;
    r.expandAttributes = options.expandAttributes !== undefined ? options.expandAttributes : false;
    r.userData = options.userData;
    return r;
};
const toString = (n) => Array.isArray(n) ? n.join(' ') : n;
// Only one object right now
function encodeGocadObject({ header, combelSize, combelName, df, options }) {
    const opts = getGocadEncodeOptions(options);
    const positions = df.series.positions;
    if (positions === undefined)
        throw new Error('missing "positions" in dataframe');
    const indices = df.series.indices;
    let buffer = header;
    if (df.userData && df.userData.name) {
        buffer = buffer.replace('no-name', df.userData.name);
    }
    buffer += (0,_utils__WEBPACK_IMPORTED_MODULE_0__.encodeUserData)(opts.userData);
    let attrs = [];
    // Do the properties
    if (opts.saveAttributes) {
        Object.entries(df.series).forEach(([name, serie]) => {
            if (name !== 'positions' && name !== 'indices') {
                if (serie.count !== positions.count) {
                    let msg = `attribute count mistmatch for '${name}' (got ${serie.count}).
Should be equal to 'positions' count (${positions.count}).\n`;
                    if (serie.count === indices.count) {
                        throw new Error(msg +
                            'Did you forget to export at nodes instead of triangles?\n');
                    }
                    else {
                        throw new Error(msg);
                    }
                }
                attrs.push([name, serie]);
            }
        });
        if (attrs.length > 0) {
            if (opts.expandAttributes === false) {
                buffer += 'PROPERTIES ';
                attrs.forEach(([name, _]) => buffer += name + ' ');
                buffer += '\nESIZES ';
                attrs.forEach(([_, serie]) => buffer += serie.itemSize + ' ');
                buffer += '\n';
            }
            else {
                buffer += 'PROPERTIES ';
                let n = 0;
                attrs.forEach(([name, serie]) => {
                    if (serie.itemSize === 1) {
                        n++;
                        return buffer += name + ' ';
                    }
                    else if (serie.itemSize === 3) {
                        n += 3;
                        return buffer += name + 'x ' + name + 'y ' + name + 'z ';
                    }
                    else if (serie.itemSize === 6) {
                        n += 3;
                        return buffer += name + 'xx ' + name + 'xy ' + name + 'xz ' + name + 'yy ' + name + 'yz ' + name + 'zz ';
                    }
                    else if (serie.itemSize === 9) {
                        n += 3;
                        return buffer += name + 'xx ' + name + 'xy ' + name + 'xz ' + name + 'yx ' + name + 'yy ' + name + 'yz ' + name + 'zx ' + name + 'zy ' + name + 'zz ';
                    }
                    else {
                        for (let i = 1; i <= serie.itemSize; ++i) {
                            n++;
                            buffer += `${name}${i} `;
                        }
                        return buffer;
                    }
                });
                // buffer += '\nESIZES '
                // for (let i=0; i<n; ++i) {
                //     buffer += `1 `
                // }
                buffer += '\n';
            }
        }
    }
    const suffix = attrs.length > 0 ? "PVRTX" : "VRTX";
    // Do the positions and attributes
    if (opts.saveGeometry) {
        positions.forEach((item, i) => {
            buffer += `${suffix}  ${i} ${item.join(' ')} `;
            if (opts.saveAttributes)
                attrs.forEach(([_, serie]) => buffer += `${toString(serie.itemAt(i))} `);
            buffer += '\n';
        });
    }
    // Do the indices
    if (indices && opts.saveTopology) {
        indices.forEach(item => buffer += `${combelName} ${item.join(' ')}\n`);
    }
    return buffer + 'END\n';
}


/***/ }),

/***/ "./lib/gocad/index.ts":
/*!****************************!*\
  !*** ./lib/gocad/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeGocadPL": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decodeGocadPL),
/* harmony export */   "decodeGocadSO": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decodeGocadSO),
/* harmony export */   "decodeGocadTS": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decodeGocadTS),
/* harmony export */   "decodeGocadVS": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decodeGocadVS),
/* harmony export */   "encodeGocadPL": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeGocadPL),
/* harmony export */   "encodeGocadSO": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeGocadSO),
/* harmony export */   "encodeGocadTS": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeGocadTS),
/* harmony export */   "encodeGocadVS": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeGocadVS)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./lib/gocad/decoder.ts");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./lib/gocad/encoder.ts");




/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeGocadPL": () => (/* reexport safe */ _gocad__WEBPACK_IMPORTED_MODULE_0__.decodeGocadPL),
/* harmony export */   "decodeGocadSO": () => (/* reexport safe */ _gocad__WEBPACK_IMPORTED_MODULE_0__.decodeGocadSO),
/* harmony export */   "decodeGocadTS": () => (/* reexport safe */ _gocad__WEBPACK_IMPORTED_MODULE_0__.decodeGocadTS),
/* harmony export */   "decodeGocadVS": () => (/* reexport safe */ _gocad__WEBPACK_IMPORTED_MODULE_0__.decodeGocadVS),
/* harmony export */   "encodeGocadPL": () => (/* reexport safe */ _gocad__WEBPACK_IMPORTED_MODULE_0__.encodeGocadPL),
/* harmony export */   "encodeGocadSO": () => (/* reexport safe */ _gocad__WEBPACK_IMPORTED_MODULE_0__.encodeGocadSO),
/* harmony export */   "encodeGocadTS": () => (/* reexport safe */ _gocad__WEBPACK_IMPORTED_MODULE_0__.encodeGocadTS),
/* harmony export */   "encodeGocadVS": () => (/* reexport safe */ _gocad__WEBPACK_IMPORTED_MODULE_0__.encodeGocadVS),
/* harmony export */   "decodeXYZ": () => (/* reexport safe */ _xyz__WEBPACK_IMPORTED_MODULE_1__.decodeXYZ),
/* harmony export */   "encodeXYZ": () => (/* reexport safe */ _xyz__WEBPACK_IMPORTED_MODULE_1__.encodeXYZ),
/* harmony export */   "decodeOBJ": () => (/* reexport safe */ _obj__WEBPACK_IMPORTED_MODULE_2__.decodeOBJ),
/* harmony export */   "encodeOBJ": () => (/* reexport safe */ _obj__WEBPACK_IMPORTED_MODULE_2__.encodeOBJ),
/* harmony export */   "decodeOFF": () => (/* reexport safe */ _off__WEBPACK_IMPORTED_MODULE_3__.decodeOFF),
/* harmony export */   "encodeOFF": () => (/* reexport safe */ _off__WEBPACK_IMPORTED_MODULE_3__.encodeOFF),
/* harmony export */   "decodeSTL": () => (/* reexport safe */ _stl__WEBPACK_IMPORTED_MODULE_4__.decodeSTL),
/* harmony export */   "encodeSTL": () => (/* reexport safe */ _stl__WEBPACK_IMPORTED_MODULE_4__.encodeSTL),
/* harmony export */   "decoderDXF": () => (/* reexport safe */ _dxf__WEBPACK_IMPORTED_MODULE_5__.decoderDXF),
/* harmony export */   "encodeDXF": () => (/* reexport safe */ _dxf__WEBPACK_IMPORTED_MODULE_5__.encodeDXF),
/* harmony export */   "decoderSVG": () => (/* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_6__.decoderSVG),
/* harmony export */   "encodeSVG": () => (/* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_6__.encodeSVG),
/* harmony export */   "merge": () => (/* reexport safe */ _merge__WEBPACK_IMPORTED_MODULE_7__.merge)
/* harmony export */ });
/* harmony import */ var _gocad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gocad */ "./lib/gocad/index.ts");
/* harmony import */ var _xyz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xyz */ "./lib/xyz/index.ts");
/* harmony import */ var _obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obj */ "./lib/obj/index.ts");
/* harmony import */ var _off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./off */ "./lib/off/index.ts");
/* harmony import */ var _stl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stl */ "./lib/stl/index.ts");
/* harmony import */ var _dxf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dxf */ "./lib/dxf/index.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg */ "./lib/svg/index.ts");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ "./lib/merge.ts");








// export * from './utils'


/***/ }),

/***/ "./lib/merge.ts":
/*!**********************!*\
  !*** ./lib/merge.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Merge several objects loaded by any filter into one. Take care of the reindexation
 * of the topological elements if any (combinatorial elements of dim > 1, i.e., meshes lines,
 * meshed surfaces, meshed volumes).
 * Also, attributes (other series) are merged as well if and only if they have the same
 * name and itemSize.
 * @example
 * ```ts
 * import { decodeGocadTS, merge } from '@youwol/io'
 *
 * const t1 = decodeGocadTS(bufferTS1)
 * const t2 = decodeGocadTS(bufferTS2)
 * const t3 = merge([...t1, ...t2])
 * ```
 *
 * @category Utils
 */
const merge = (dataframes) => {
    if (dataframes.length === 0)
        throw new Error('no dataframe provided');
    if (dataframes.length === 1)
        return dataframes[0];
    const keys = {};
    dataframes.forEach(df => {
        for (const [name, serie] of Object.entries(df.series)) {
            const entry = keys[name];
            if (entry !== undefined) {
                if ( /*serie.count === entry.count &&*/serie.itemSize === entry.itemSize) {
                    entry.nbr++;
                    entry.count += serie.count;
                }
            }
            else {
                keys[name] = {
                    nbr: 1,
                    count: serie.count,
                    itemSize: serie.itemSize
                };
            }
        }
    });
    // console.log(keys)
    const candidates = [];
    for (const [name, key] of Object.entries(keys)) {
        if (key.nbr === dataframes.length) {
            candidates.push(name);
        }
    }
    const df = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({ series: {} });
    candidates.forEach(name => {
        const series = gatherSeries(dataframes, name);
        if (series)
            df.series[name] = mergeSeries(series);
    });
    // Doing indices again since it is a special case
    //
    if (dataframes[0].series.indices !== undefined) {
        const faces = [];
        let startIndex = 0;
        dataframes.forEach((dataframe, i) => {
            const triangles = dataframe.series.indices;
            if (triangles === undefined)
                throw new Error('objects in dataframes are in different types');
            triangles.forEach(t => {
                faces.push(...t.map(v => v + startIndex));
            });
            startIndex += dataframe.series.positions.count;
        });
        df.series.indices = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Int32Array, faces, true), itemSize: 3 });
    }
    return df;
};
function gatherSeries(dfs, name) {
    const series = [];
    dfs.forEach((df, i) => {
        const s = df.series[name];
        if (s === undefined)
            return undefined; //throw new Error(`Serie ${name} does not exist in dataframe index ${i}`)
        series.push(s);
    });
    return series;
}
function mergeSeries(series) {
    if (series.length === 0)
        throw new Error('no series provided');
    if (series.length === 1)
        return series[0];
    // check itemsizes
    const itemSize = series[0].itemSize;
    const ok = series.reduce((cur, serie) => cur && (serie.itemSize === itemSize), true);
    if (!ok) {
        throw new Error("Series don't have the same itemSize");
    }
    const N = series.reduce((cur, serie) => cur + serie.count, 0) * itemSize;
    const array = new Array(N).fill(0);
    let id = 0;
    series.forEach(serie => {
        for (let i = 0; i < serie.array.length; ++i) {
            array[id++] = serie.array[i];
        }
    });
    return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array, itemSize });
}


/***/ }),

/***/ "./lib/obj/decoder.ts":
/*!****************************!*\
  !*** ./lib/obj/decoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeOBJ": () => (/* binding */ decodeOBJ)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../merge */ "./lib/merge.ts");


/**
 * @category Decoder
 */
function decodeOBJ(buffer, { shared = true, merge = true } = {}) {
    const parser = new ParseOBJ;
    parser.parse(buffer);
    const dataframes = [];
    parser.meshes.forEach(mesh => {
        const dataframe = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({
            series: {
                positions: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, mesh.positions, shared), itemSize: 3 }),
                indices: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Uint32Array, mesh.indices, shared), itemSize: 3 })
            }
        });
        dataframes.push(dataframe);
    });
    if (merge) {
        return [(0,_merge__WEBPACK_IMPORTED_MODULE_1__.merge)(dataframes)];
    }
    return dataframes;
}
class ParseOBJ {
    constructor() {
        this.object = undefined;
        this.objects = [];
    }
    get meshes() {
        this.object = undefined;
        return this.objects;
    }
    parse(buffer) {
        if (buffer.indexOf('\r\n') !== -1) {
            buffer = buffer.replace('\r\n', '\n');
        }
        const lines = buffer.split('\n');
        let line = '', lineFirstChar = '', lineSecondChar = '';
        let lineLength = 0;
        let result = [];
        // Faster to just trim left side of the line. Use if available.
        const trimLeft = (typeof ''.trimLeft === 'function');
        for (let i = 0, l = lines.length; i < l; i++) {
            line = lines[i];
            line = trimLeft ? line.trimLeft() : line.trim();
            lineLength = line.length;
            if (lineLength === 0) {
                continue;
            }
            lineFirstChar = line.charAt(0);
            if (lineFirstChar === '#') {
                continue;
            }
            if (lineFirstChar === 'v') {
                lineSecondChar = line.charAt(1);
                if (lineSecondChar === ' ' && (result = regexp.vertex_pattern.exec(line)) !== null) {
                    this.object.positions.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
                }
            }
            else if (lineFirstChar === 'f') {
                if ((result = regexp.face_vertex_uv_normal.exec(line)) !== null) {
                    this.addFace(result[1], result[4], result[7], result[10]);
                }
                else if ((result = regexp.face_vertex_uv.exec(line)) !== null) {
                    this.addFace(result[1], result[3], result[5], result[7]);
                }
                else if ((result = regexp.face_vertex_normal.exec(line)) !== null) {
                    this.addFace(result[1], result[3], result[5], result[7]);
                }
                else if ((result = regexp.face_vertex.exec(line)) !== null) {
                    this.addFace(result[1], result[2], result[3], result[4]);
                }
            }
            else if (lineFirstChar === 'l') {
                // line geom...
            }
            else if ((result = regexp.object_pattern.exec(line)) !== null) {
                // "o" or "g"
                this.startObject(result[0].substr(1).trim());
            }
            else if (regexp.material_use_pattern.test(line)) {
                // material...
            }
            else if (regexp.material_library_pattern.test(line)) {
                // mtl file...
            }
            else if ((result = regexp.smoothing_pattern.exec(line)) !== null) {
                // smooth shading...
            }
            else {
                // Handle null terminated files without exception
                if (line === '\0')
                    continue;
            }
        }
    }
    startObject(id) {
        this.object = {
            id: id,
            positions: [],
            indices: []
        };
        this.objects.push(this.object);
    }
    addFace(a, b, c, d) {
        if (d === undefined) {
            this.object.indices.push(parseInt(a), parseInt(b), parseInt(c));
        }
        else {
            this.object.indices.push(parseInt(a), parseInt(b), parseInt(d));
            this.object.indices.push(parseInt(b), parseInt(c), parseInt(d));
        }
    }
}
// ----------------------------------------------------------
const regexp = {
    vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
    face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
    face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
    face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
    face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
    object_pattern: /^[o]\s*(.+)?/,
    smoothing_pattern: /^s\s+(\d+|on|off)/,
    material_library_pattern: /^mtllib /,
    material_use_pattern: /^usemtl /
};


/***/ }),

/***/ "./lib/obj/encoder.ts":
/*!****************************!*\
  !*** ./lib/obj/encoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeOBJ": () => (/* binding */ encodeOBJ)
/* harmony export */ });
/**
 * @category Encoder
 */
function encodeOBJ(dfs) {
    let buffer = '';
    console.warn('TODO: OBJ encoder for meshes');
    return buffer;
}


/***/ }),

/***/ "./lib/obj/index.ts":
/*!**************************!*\
  !*** ./lib/obj/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeOBJ": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decodeOBJ),
/* harmony export */   "encodeOBJ": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeOBJ)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./lib/obj/decoder.ts");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./lib/obj/encoder.ts");




/***/ }),

/***/ "./lib/off/decoder.ts":
/*!****************************!*\
  !*** ./lib/off/decoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeOFF": () => (/* binding */ decodeOFF)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../merge */ "./lib/merge.ts");


/**
 * @category Decoder
 */
function decodeOFF(buffer, { shared = true, merge = true } = {}) {
    const parser = new ParseOFF;
    parser.parse(buffer);
    const dataframes = [];
    parser.meshes.forEach(mesh => {
        const dataframe = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({
            series: {
                positions: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, mesh.positions, shared), itemSize: 3 }),
                indices: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Uint32Array, mesh.indices, shared), itemSize: 3 })
            }
        });
        dataframes.push(dataframe);
    });
    if (merge) {
        return [(0,_merge__WEBPACK_IMPORTED_MODULE_1__.merge)(dataframes)];
    }
    return dataframes;
}
class ParseOFF {
    constructor() {
        this.object = undefined;
        this.objects = [];
    }
    get meshes() {
        this.object = undefined;
        return this.objects;
    }
    parse(buffer) {
        if (buffer.indexOf('\r\n') !== -1) {
            buffer = buffer.replace('\r\n', '\n');
        }
        const lines = buffer.split('\n');
        let line = '', lineFirstChar = '', lineSecondChar = '';
        let lineLength = 0;
        let result = [];
        // Faster to just trim left side of the line. Use if available.
        const trimLeft = (typeof ''.trimLeft === 'function');
        let isOff = false;
        let readNbs = false;
        let nbV = 0;
        let nbF = 0;
        this.startObject("off-surface");
        for (let i = 0, l = lines.length; i < l; i++) {
            line = lines[i];
            line = trimLeft ? line.trimLeft() : line.trim();
            lineLength = line.length;
            if (lineLength === 0) {
                continue;
            }
            lineFirstChar = line.charAt(0);
            if (lineFirstChar === '#') {
                continue;
            }
            if (line === '\0')
                continue;
            if (line === 'OFF') {
                isOff = true;
            }
            let toks = line.split(' ').map((s) => s.trim()).filter((s) => s !== '');
            if (isOff && !readNbs) {
                if (toks.length === 3) {
                    readNbs = true;
                    nbV = parseFloat(toks[0]);
                    nbF = parseFloat(toks[1]);
                    continue;
                }
            }
            if (readNbs && toks.length === 3) {
                this.object.positions.push(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]));
                continue;
            }
            if (readNbs && toks.length >= 4) {
                const n = parseInt(toks[0]);
                if (n === 3) {
                    this.addFace(toks[1], toks[2], toks[3]);
                }
                else if (n === 4) {
                    this.addFace(toks[1], toks[2], toks[3], toks[4]);
                }
            }
        }
    }
    startObject(id) {
        this.object = {
            id: id,
            positions: [],
            indices: []
        };
        this.objects.push(this.object);
    }
    addFace(a, b, c, d) {
        if (d === undefined) {
            this.object.indices.push(parseInt(a), parseInt(b), parseInt(c));
        }
        else {
            this.object.indices.push(parseInt(a), parseInt(b), parseInt(d));
            this.object.indices.push(parseInt(b), parseInt(c), parseInt(d));
        }
    }
}


/***/ }),

/***/ "./lib/off/encoder.ts":
/*!****************************!*\
  !*** ./lib/off/encoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeOFF": () => (/* binding */ encodeOFF)
/* harmony export */ });
/**
 * @category Encoder
 */
function encodeOFF(dfs) {
    let buffer = '';
    console.warn('TODO: OFF encoder for meshes');
    return buffer;
}


/***/ }),

/***/ "./lib/off/index.ts":
/*!**************************!*\
  !*** ./lib/off/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeOFF": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decodeOFF),
/* harmony export */   "encodeOFF": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeOFF)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./lib/off/decoder.ts");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./lib/off/encoder.ts");




/***/ }),

/***/ "./lib/stl/decoder.ts":
/*!****************************!*\
  !*** ./lib/stl/decoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeSTL": () => (/* binding */ decodeSTL)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

// Inspired from three.js
/**
 * Decode STL files either in ASCII or in BINARY format.
 * When usnig node.js, you should be carreful of how you read the data before
 * calling [[decodeSTL]].
 *
 * For example, for **ASCII** file, you should use:
 * ```js
 * const array = fs.readFileSync('object.stl', 'utf8')
 * const state = loaders.decodeSTL(array)
 * ```
 * And when using **BINARY** file, you should remove the `utf8` encoding and use the `buffer`
 * of the return array:
 * ```js
 * const array = fs.readFileSync('object.stl')
 * const state = loaders.decodeSTL(array.buffer)
 * ```
 * @param buffer
 * @param param1
 * @returns
 *
 * @category Decoder
 */
function decodeSTL(buffer, { shared = true } = {}) {
    const binData = ensureBinary(buffer);
    const object = isBinary(binData) ? parseBinary(binData, shared) : parseASCII(ensureString(buffer), shared);
    const dataframe = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({
        series: {
            positions: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: object.positions, itemSize: 3 }),
            indices: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: object.indices, itemSize: 3 })
        }
    });
    return [dataframe];
}
const littleEndian = true;
function ensureBinary(buffer) {
    if (typeof buffer === 'string') {
        const array_buffer = new Uint8Array(buffer.length);
        for (let i = 0; i < buffer.length; i++) {
            array_buffer[i] = buffer.charCodeAt(i) & 0xff; // assumes little-endian
        }
        return array_buffer.buffer || array_buffer;
    }
    else {
        return buffer;
    }
}
function decodeText(array) {
    if (typeof TextDecoder !== 'undefined') {
        return new TextDecoder().decode(array);
    }
    let s = '';
    for (let i = 0, il = array.length; i < il; i++) {
        // assumes little-endian
        s += String.fromCharCode(array[i]);
    }
    try {
        // merges multi-byte utf-8 characters.
        return decodeURIComponent(escape(s));
    }
    catch (e) { // see #16358
        return s;
    }
}
function ensureString(buffer) {
    if (typeof buffer !== 'string') {
        return decodeText(new Uint8Array(buffer));
    }
    return buffer;
}
function parseBinary(data, shared) {
    const reader = new DataView(data);
    const faces = reader.getUint32(80, littleEndian);
    const dataOffset = 84;
    const faceLength = 12 * 4 + 2;
    const vertices = new Array(faces * 3 * 3).fill(0);
    const indices = new Array(faces * 3).fill(0);
    let vertexID = 0;
    for (let face = 0; face < faces; face++) {
        const start = dataOffset + face * faceLength;
        for (let i = 1; i <= 3; i++) {
            const vertexstart = start + i * 12;
            const componentIdx = face * 9 + (i - 1) * 3;
            // Coordinates
            vertices[componentIdx] = reader.getFloat32(vertexstart, littleEndian); // x
            vertices[componentIdx + 1] = reader.getFloat32(vertexstart + 4, littleEndian); // y
            vertices[componentIdx + 2] = reader.getFloat32(vertexstart + 8, littleEndian); // z
            indices[componentIdx] = vertexID++;
            indices[componentIdx + 1] = vertexID++;
            indices[componentIdx + 2] = vertexID++;
        }
    }
    return {
        positions: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, vertices, shared),
        indices: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Uint32Array, indices, shared)
    };
}
function parseASCII(data, shared) {
    const patternSolid = /solid([\s\S]*?)endsolid/g;
    const patternFace = /facet([\s\S]*?)endfacet/g;
    const patternFloat = /[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source;
    const patternVertex = new RegExp('vertex' + patternFloat + patternFloat + patternFloat, 'g');
    let faceCounter = 0;
    let startVertex = 0;
    let endVertex = 0;
    const vertices = [];
    const indices = [];
    let result;
    let faceID = 0;
    while ((result = patternSolid.exec(data)) !== null) {
        startVertex = endVertex;
        const solid = result[0];
        while ((result = patternFace.exec(solid)) !== null) {
            let vertexCountPerFace = 0;
            const text = result[0];
            while ((result = patternVertex.exec(text)) !== null) {
                vertices.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
                vertexCountPerFace++;
                endVertex++;
                indices.push(faceID++);
            }
            if (vertexCountPerFace !== 3) {
                throw new Error('decodeSTL: number of vertices per face must be 3');
            }
            faceCounter++;
        }
    }
    return {
        positions: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, vertices, shared),
        indices: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Uint32Array, indices, shared)
    };
}
function isBinary(data) {
    const reader = new DataView(data);
    const face_size = 32 / 8 * 3 + (32 / 8 * 3) * 3 + 16 / 8;
    const n_faces = reader.getUint32(80, littleEndian);
    const expect = 80 + 32 / 8 + n_faces * face_size;
    if (expect === reader.byteLength) {
        return true;
    }
    const solid = [115, 111, 108, 105, 100];
    for (let off = 0; off < 5; off++) {
        if (matchDataViewAt(solid, reader, off))
            return false;
    }
    return true;
}
function matchDataViewAt(query, reader, offset) {
    for (let i = 0, il = query.length; i < il; i++) {
        if (query[i] !== reader.getUint8(offset + i))
            return false;
    }
    return true;
}


/***/ }),

/***/ "./lib/stl/encoder.ts":
/*!****************************!*\
  !*** ./lib/stl/encoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeSTL": () => (/* binding */ encodeSTL)
/* harmony export */ });
/**
 * @category Encoder
 */
function encodeSTL(dfs, { binary = false } = {}) {
    let buffer = '';
    console.warn('TODO: STL encoder for meshes');
    return buffer;
}


/***/ }),

/***/ "./lib/stl/index.ts":
/*!**************************!*\
  !*** ./lib/stl/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeSTL": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decodeSTL),
/* harmony export */   "encodeSTL": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeSTL)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./lib/stl/decoder.ts");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./lib/stl/encoder.ts");




/***/ }),

/***/ "./lib/svg/decoder.ts":
/*!****************************!*\
  !*** ./lib/svg/decoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decoderSVG": () => (/* binding */ decoderSVG)
/* harmony export */ });
/**
 * @category Decoder
 */
function decoderSVG(buffer) {
    throw new Error('TODO');
}


/***/ }),

/***/ "./lib/svg/encoder.ts":
/*!****************************!*\
  !*** ./lib/svg/encoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeSVG": () => (/* binding */ encodeSVG)
/* harmony export */ });
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/math */ "../node_modules/@youwol/math/dist/@youwol/math.js");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Encode a set of lines given in DataFrame(s) in SVG format. Positions will be normalized in output and therefore
 * we introduce a scaling and trabslation in option.
 *
 * Options are:
 * - scale = 1: The scaling factor of the normalized positions
 * - translate = [0,0]: The translation of the normalized positions defined as an array of 2 items: [0, 0]
 * - precision = 2: The number of digits
 *
 * Note that the scaling is applied before the translation.
 * @category Encoder
 */
function encodeSVG(dfs, { scale = 100, translate = [0, 0], precision = 2 }) {
    let buffer = `<svg width="100" height="100">\n`;
    const point = p => `${p[0].toFixed(precision)} ${p[1].toFixed(precision)}`;
    const doit = (df, positions) => {
        const serie = positions; //df.series.positions
        const is3D = serie.itemSize === 3;
        if (serie.count % 2 !== 0) {
            throw new Error(`Wrong number of ${is3D ? '3D' : '2D'} points in the Serie. Have ${serie.count} and is not divisible by 2`);
        }
        const p1 = serie.itemAt(0);
        const p2 = serie.itemAt(1);
        let buffer = `  <path\n    style="stroke: rgb(0,0,0); stroke-width: 1; fill: none; opacity: 1;"\n    d="M ${point(p1)} L ${point(p2)} `;
        for (let i = 2; i < serie.count; i += 2) {
            const p1 = serie.itemAt(i); //as [number, number]
            const p2 = serie.itemAt(i + 1); //as [number, number]
            buffer += `L ${point(p1)} `;
        }
        buffer += '"\n  />\n';
        return buffer;
    };
    const positions = normalize(dfs, scale, translate); // array of Serie or not
    if (Array.isArray(dfs)) {
        dfs.forEach((df, i) => buffer += doit(df, positions[i]));
        buffer += '</svg>';
        return buffer;
    }
    buffer += doit(dfs, positions);
    buffer += '</svg>';
    return buffer;
}
// -------------------------------------------------------------------
function normalize(dfs, scale, translate) {
    let xmin = Number.POSITIVE_INFINITY;
    let ymin = Number.POSITIVE_INFINITY;
    let xmax = Number.NEGATIVE_INFINITY;
    let ymax = Number.NEGATIVE_INFINITY;
    const S = scale;
    if (Array.isArray(dfs)) {
        dfs.forEach(df => {
            const is3D = df.series.positions.itemSize === 3;
            const m = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.minMax)(df.series.positions);
            if (m[0] < xmin)
                xmin = m[0];
            if (m[1] < ymin)
                ymin = m[1];
            if (is3D) {
                if (m[3] > xmax)
                    xmax = m[3];
                if (m[4] > ymax)
                    ymax = m[4];
            }
            else {
                if (m[2] > xmax)
                    xmax = m[2];
                if (m[3] > ymax)
                    ymax = m[3];
            }
        });
        const scale = Math.max(ymax - ymin, xmax - xmin) / S;
        const positions = [];
        dfs.forEach(df => {
            // NORMALIZE HERE
            positions.push(df.series.positions.map(p => [
                (p[0] - xmin) / scale + translate[0],
                (p[1] - ymin) / scale + translate[1],
                p[2] / scale
            ]));
        });
        return positions;
    }
    else {
        const is3D = dfs.series.positions.itemSize === 3;
        const m = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.minMax)(dfs.series.positions);
        xmin = m[0];
        ymin = m[1];
        if (is3D) {
            xmax = m[3];
            ymax = m[4];
        }
        else {
            xmax = m[2];
            ymax = m[3];
        }
        const scale = Math.max(ymax - ymin, xmax - xmin) / S;
        return dfs.series.positions.map(p => [(p[0] - xmin) / scale, (p[1] - ymin) / scale, p[2] / scale]);
    }
}


/***/ }),

/***/ "./lib/svg/index.ts":
/*!**************************!*\
  !*** ./lib/svg/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decoderSVG": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decoderSVG),
/* harmony export */   "encodeSVG": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeSVG)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./lib/svg/decoder.ts");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./lib/svg/encoder.ts");




/***/ }),

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trimAll": () => (/* binding */ trimAll),
/* harmony export */   "encodeUserData": () => (/* binding */ encodeUserData),
/* harmony export */   "approxNumber": () => (/* binding */ approxNumber)
/* harmony export */ });
/**
 * @category Utils
 */
function trimAll(s) {
    return s.replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '').replace('\t', ' ').trimEnd();
}
/**
 * @category Utils
 */
function encodeUserData(userData) {
    let s = '';
    if (userData !== undefined) {
        s += '\n# BEGIN USERDATA\n';
        for (const [key, value] of Object.entries(userData)) {
            s += `#   ${key} ${value}\n`;
        }
        s += '# END USERDATA\n\n';
    }
    return s;
}
/**
 * Approximate a number by removing digits if necessary.
 * @param a The number ot approximate
 * @param deci The maximum number of digits (default is 8)
 * @returns The string version of the approximate number
 */
function approxNumber(a, deci = 8) {
    const b = Math.round(Math.log(a) / L10);
    return a.toFixed(deci - b < 0 ? 0 : deci - b);
}
const L10 = Math.log(10);


/***/ }),

/***/ "./lib/xyz/decoder.ts":
/*!****************************!*\
  !*** ./lib/xyz/decoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeXYZ": () => (/* binding */ decodeXYZ)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collapse */ "./lib/collapse.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./lib/utils.ts");



/**
 * Format in order to know this is a cube:
 * ```text
 * # nx: 10
 * # ny: 10
 * # nz: 10
 * # x y z a normal stress1
 * # sizes 1 3 6
 * 0 0 0  9  1 3 2  0 0 0 0 0 0
 * ...
 * ```
 * @example
 * ```ts
 * decodeXYZ(buffer)
 * decodeXYZ(buffer, {merge: false})
 * decodeXYZ(buffer, {merge: false, shared: false})
 * ```
 * @category Decoder
 */
function decodeXYZ(buffer, { shared = true, merge = true } = {}) {
    const dims = [0, 0, 0];
    let className = 'Pointset';
    const extension = 'xyz';
    // /**
    //  * @return Array of objects which are define as:
    //  * <ul>
    //  * <li> for a cube    : `{mng: AttributeManager, className: string, min: [0,0,0], max: [0,0,0], dims: [0,0,0]}`
    //  * <li> for a pointset: `{mng: AttributeManager, className: string, min: [0,0,0], max: [0,0,0]}`
    //  * </ul>
    //  */
    let lines = buffer.split('\n');
    let attributes = [];
    let attrNames = [];
    //let attrSizes : number[]   = []
    let positions = [];
    let objects = [];
    let haveZ = 1;
    const impliciteName = 'ImpliciteCube';
    for (let i = 0; i < lines.length; ++i) {
        let line = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.trimAll)(lines[i].trim());
        if (line.length === 0) {
            continue;
        }
        let r = line.split(' ');
        if (r.length === 0) {
            continue;
        }
        if (r[0] === '#') {
            let start = 3; // new pointset ?
            if (r.length < 2) {
                continue;
            }
            if (r[1] === 'nx:') {
                dims[0] = parseInt(r[2], 10);
                className = 'Cube';
                continue;
            }
            if (r[1] === 'ny:') {
                dims[1] = parseInt(r[2], 10);
                className = 'Cube';
                continue;
            }
            if (r[1] === 'nz:') {
                dims[2] = parseInt(r[2], 10);
                className = 'Cube';
                continue;
            }
            if (r[1] === 'CLASS') {
                className = r[4];
                const object = createObject({
                    dims,
                    positions,
                    attributes,
                    attrNames,
                    className,
                    shared,
                    extension,
                    merge
                });
                if (object) {
                    objects.push(object);
                }
                continue;
            }
            if (r[1] !== 'x' && r[2] !== 'y') { // comment
                continue;
            }
            if (r[1] === 'x' && r[2] === 'y' && r.length === 2) {
                haveZ = 0;
                continue;
            }
            // if (r[1] === 'sizes') {
            //     attrSizes  = []
            //     for (let j = 1; j < r.length; ++j) {
            //         attrSizes.push( parseInt(r[j]) )
            //     }
            //     if (attrSizes.length !== attrNames.length) {
            //         throw new Error(`sizes mismatch between property names (${attrNames.length}) and sizes (${attrSizes.length})`)
            //     }
            //     continue
            // }
            if (r.length > 3 && r[3] === 'z') {
                start++;
                haveZ = 1;
            }
            attributes = [];
            attrNames = [];
            positions = [];
            for (let j = start; j < r.length; ++j) {
                attributes.push([]);
                attrNames.push(r[j]);
            }
            continue;
        }
        if (r[0] === 'P') {
            haveZ = 1;
            const object = createObject({
                dims,
                positions,
                attributes,
                attrNames,
                className,
                shared,
                extension,
                merge
            });
            if (object) {
                objects.push(object);
            }
            attributes = [];
            attrNames = [];
            positions = [];
            for (let j = 1; j < r.length; ++j) {
                attributes.push([]);
                attrNames.push(r[j]);
            }
            continue;
        }
        if (r.length >= (2 + haveZ)) { // min is (x,y)
            let x = parseFloat(r[0]);
            let y = parseFloat(r[1]);
            let z = haveZ ? parseFloat(r[2]) : 0;
            positions.push(x, y, z);
            if (attributes.length !== r.length - (2 + haveZ)) {
                throw new Error(`Wrong number of attribute for vertex. Should be ${attributes.length} and got ${r.length - (2 + haveZ)}`);
            }
            for (let j = 0; j < attributes.length; ++j) {
                attributes[j].push(parseFloat(r[2 + haveZ + j]));
            }
            continue;
        }
    }
    const object = createObject({
        dims,
        positions,
        attributes,
        attrNames,
        className,
        shared,
        extension,
        merge
    });
    if (object) {
        objects.push(object);
    }
    return objects;
}
function createObject({ dims, positions, attrNames, attributes, className, shared = true, extension, merge }) {
    if (positions.length === 0)
        return undefined;
    let userData = {
        className,
        extension,
        attributeNames: attrNames
    };
    let posSerie = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({
        array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, positions, shared),
        itemSize: 3
    });
    let df = (dims[0] === 0 && dims[1] === 0 && dims[2] === 0)
        ? _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({
            series: { positions: posSerie },
            userData
        })
        : _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({
            series: { positions: posSerie },
            userData: { ...userData, ...{ dims } }
        });
    // const arrayMax = (a: IArray) => a.reduce( (acc,cur) => cur>acc?cur:acc, 0)
    // attrNames.forEach( (name, i) => {
    //     // For the moment, itemSize=1.
    //     // Have to collapse displ, srain and stress
    //     df = df.set(name, createSerie(createTyped(Float32Array, attributes[i], shared), 1))
    // })
    if (merge) {
        const entries = new Map;
        (0,_collapse__WEBPACK_IMPORTED_MODULE_1__.collapse)(attrNames, attributes).forEach(attr => {
            entries.set(attr.name, _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({
                array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, attr.value, shared),
                itemSize: attr.itemSize
            }));
        });
        df = (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.append)(df, Object.fromEntries(entries));
        // collapse(attrNames, attributes).forEach( attr => {
        //     df = df.set(attr.name, createSerie({
        //         data: createTyped(Float32Array, attr.value, shared),
        //         itemSize: attr.itemSize
        //     }))
        // })
    }
    else {
        const entries = new Map;
        attrNames.forEach((name, i) => {
            entries.set(name, _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({
                array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, attributes[i], shared),
                itemSize: 1
            }));
        });
        df = (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.append)(df, Object.fromEntries(entries));
        // attrNames.forEach( (name, i) => {
        //     df = df.set(name, createSerie({
        //         data: createTyped(Float32Array, attributes[i], shared),
        //         itemSize: 1
        //     }))
        // })
    }
    return df;
}


/***/ }),

/***/ "./lib/xyz/encoder.ts":
/*!****************************!*\
  !*** ./lib/xyz/encoder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeXYZ": () => (/* binding */ encodeXYZ)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./lib/utils.ts");

const mapTensors = new Map();
mapTensors.set(3, ['x', 'y', 'z']);
mapTensors.set(6, ['xx', 'xy', 'xz', 'yy', 'yz', 'zz']);
mapTensors.set(9, ['xx', 'xy', 'xz', 'yx', 'yy', 'yz', 'zx', 'zy', 'zz']);
/**
 * Get the buffer object of an xyz pointset
 * @category Encoder
 */
function encodeXYZ(dfs, options = undefined) {
    let buffer = '';
    if (Array.isArray(dfs)) {
        dfs.forEach(df => buffer += doit(df, options));
        return buffer;
    }
    return doit(dfs, options);
}
// ------------------------------------------------------------------------
const getXYZEncodeOptions = (o) => {
    const r = { saveAttributes: true, saveGeometry: true, delimiter: ' ', fixed: 12, expandAttributes: true, userData: undefined };
    if (o === undefined)
        return r;
    r.saveAttributes = o.saveAttributes !== undefined ? o.saveAttributes : true;
    r.saveGeometry = o.saveGeometry !== undefined ? o.saveGeometry : true;
    r.delimiter = o.delimiter !== undefined ? o.delimiter : ' ';
    r.fixed = o.fixed !== undefined ? o.fixed : undefined;
    r.userData = o.userData;
    if (o.expandAttributes !== undefined && o.expandAttributes === false) {
        console.warn('WARNING: XYZEncodeOptions.expandAttributes is not active yet for the xyz format');
    }
    //r.expandAttributes = o.expandAttributes !== undefined ? o.expandAttributes : true
    return r;
};
const toString = (n) => Array.isArray(n) ? n.join(' ') : n;
const doit = (df, options) => {
    // Take care of ESIZES:
    // # x y z   a b c
    // # SIZES   1 3 6 # default 1 1 1
    const opts = getXYZEncodeOptions(options);
    const positions = df.series.positions;
    if (positions === undefined)
        throw new Error('missing "positions" in dataframe');
    let buffer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.encodeUserData)(opts.userData);
    let attrs = [];
    if (opts.saveAttributes) {
        Object.entries(df.series).forEach(([name, serie]) => {
            if (name !== 'positions') {
                if (serie.count !== positions.count) {
                    throw new Error(`attribute count mistmatch for '${name}' (got ${serie.count}). Should be equal to 'positions' count (${positions.count})`);
                }
                attrs.push([name, serie]);
            }
        });
        if (attrs.length > 0) {
            buffer += '# x y z ';
            //attrs.forEach( ([name, _]) => buffer += name+' ' )
            if (opts.expandAttributes === false) {
                attrs.forEach(([name, _]) => buffer += name + ' ');
                buffer += '\n# SIZES ';
                attrs.forEach(([_, serie]) => buffer += serie.itemSize + ' ');
                buffer += '\n';
            }
            else {
                attrs.forEach(([name, serie]) => {
                    if (serie.itemSize === 1) {
                        buffer += `${name} `;
                    }
                    else {
                        const names = mapTensors.get(serie.itemSize);
                        if (names === undefined) {
                            for (let j = 0; j < serie.itemSize; ++j) {
                                buffer += `${name}${j} `;
                            }
                        }
                        else {
                            names.forEach(n => {
                                buffer += `${name}${n} `;
                            });
                        }
                    }
                });
            }
            buffer += '\n';
            // buffer += '# sizes '
            // attrs.forEach( ([_, serie]) => buffer += serie.itemSize+' ' )
            // buffer += '\n'
        }
        else {
            buffer += '# x y z\n';
        }
    }
    const doFixed = opts.fixed !== undefined;
    positions.forEach((item, i) => {
        if (opts.saveGeometry) {
            //buffer += `${item.join(opts.delimiter)}` + opts.delimiter
            for (let j = 0; j < item.length; ++j) {
                if (doFixed)
                    buffer += `${item[j].toFixed(opts.fixed)}` + opts.delimiter;
                else
                    buffer += `${toString(item[j])}` + opts.delimiter;
            }
        }
        if (opts.saveAttributes) {
            attrs.forEach(([_, serie]) => {
                if (serie.itemSize === 1) {
                    let num = serie.itemAt(i);
                    if (doFixed)
                        buffer += `${num.toFixed(opts.fixed)}` + opts.delimiter;
                    else
                        buffer += `${toString(num)}` + opts.delimiter;
                }
                else {
                    let num = serie.itemAt(i);
                    for (let j = 0; j < num.length; ++j) {
                        if (doFixed)
                            buffer += `${num[j].toFixed(opts.fixed)}` + opts.delimiter;
                        else
                            buffer += `${toString(num[j])}` + opts.delimiter;
                    }
                }
                //buffer += `${toString(serie.itemAt(i))}` + opts.delimiter
            });
        }
        buffer += '\n';
    });
    return buffer;
};


/***/ }),

/***/ "./lib/xyz/index.ts":
/*!**************************!*\
  !*** ./lib/xyz/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeXYZ": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decodeXYZ),
/* harmony export */   "encodeXYZ": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encodeXYZ)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./lib/xyz/decoder.ts");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./lib/xyz/encoder.ts");




/***/ }),

/***/ "@youwol/dataframe":
/*!************************************!*\
  !*** external "@youwol/dataframe" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__youwol_dataframe__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeGocadPL": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadPL),
/* harmony export */   "decodeGocadSO": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadSO),
/* harmony export */   "decodeGocadTS": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadTS),
/* harmony export */   "decodeGocadVS": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadVS),
/* harmony export */   "decodeOBJ": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decodeOBJ),
/* harmony export */   "decodeOFF": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decodeOFF),
/* harmony export */   "decodeSTL": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decodeSTL),
/* harmony export */   "decodeXYZ": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decodeXYZ),
/* harmony export */   "decoderDXF": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decoderDXF),
/* harmony export */   "decoderSVG": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.decoderSVG),
/* harmony export */   "encodeDXF": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeDXF),
/* harmony export */   "encodeGocadPL": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadPL),
/* harmony export */   "encodeGocadSO": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadSO),
/* harmony export */   "encodeGocadTS": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadTS),
/* harmony export */   "encodeGocadVS": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadVS),
/* harmony export */   "encodeOBJ": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeOBJ),
/* harmony export */   "encodeOFF": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeOFF),
/* harmony export */   "encodeSTL": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeSTL),
/* harmony export */   "encodeSVG": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeSVG),
/* harmony export */   "encodeXYZ": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.encodeXYZ),
/* harmony export */   "merge": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.merge),
/* harmony export */   "IOFactory": () => (/* binding */ IOFactory),
/* harmony export */   "getExtension": () => (/* binding */ getExtension),
/* harmony export */   "getBaseName": () => (/* binding */ getBaseName)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./lib/index.ts");


const map = new Map();
/**
 * Usage for getting an encoder/decoder
 * ```js
 * const filename = 'myFile.obj'
 * const filter = IOFactory.getFilter(filename)
 * if (filter) {
 *      // buffer is the content of the file
 *      filter.decode(buffer, {shared: true})
 * }
 * ```
 *
 * Usage for registering a new filter
 * ```js
 * // Register a decoder/encoder for the extension abc,
 * // where myEncoder and myDecoder are your 2 functions
 * IOFactory.registerFilter('abc', {encoder: myEncoder, decoder: myDecoder})
 * ```
 */
const IOFactory = {
    registerFilter(extension, entry) {
        if (map.has(extension)) {
            console.warn(`WARNING: registering a new IO filter using the existing extension "${extension}"`);
        }
        map.set(extension, entry);
    },
    getFilter: (filename) => {
        const extension = getExtension(filename);
        if (map.has(extension) === false) {
            console.warn(`WARNING: file "${filename}" has no encode/decode`);
            return undefined;
        }
        return map.get(extension);
    }
};
IOFactory.registerFilter('vs', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadVS, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadVS, vendor: 'Gocad-team', name: 'gocad-pointset' });
IOFactory.registerFilter('pl', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadPL, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadPL, vendor: 'Gocad-team', name: 'gocad-lineset' });
IOFactory.registerFilter('ts', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadTS, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadTS, vendor: 'Gocad-team', name: 'gocad-surface' });
IOFactory.registerFilter('gcd', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadTS, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadTS, vendor: 'Gocad-team', name: 'gocad-surface' }); // synomym
IOFactory.registerFilter('so', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeGocadSO, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeGocadSO, vendor: 'Gocad-team', name: 'gocad-volume' });
IOFactory.registerFilter('xyz', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeXYZ, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeXYZ, vendor: 'none', name: 'pointset' });
IOFactory.registerFilter('obj', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeOBJ, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeOBJ, vendor: 'Wavefront Technologies', name: 'wavefront' });
IOFactory.registerFilter('off', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeOFF, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeOFF, vendor: 'Geomview', name: 'object-file-format' });
IOFactory.registerFilter('stl', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeSTL, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decodeSTL, vendor: 'Albert Consulting Group', name: 'stl' });
IOFactory.registerFilter('dxf', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeDXF, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decoderDXF, vendor: 'Drawing eXchange Format', name: 'dxf' });
IOFactory.registerFilter('svg', { encode: _lib__WEBPACK_IMPORTED_MODULE_0__.encodeSVG, decode: _lib__WEBPACK_IMPORTED_MODULE_0__.decoderSVG, vendor: 'Scalable Vector Graphics', name: 'svg' });
// ------------------------------------------------------------
/**
 * Get the extension of a filename
 * @example
 * ```js
 * const e = getExtension('myfile.ts') // return 'ts'
 * ```
 *
 * @category Utils
 */
function getExtension(filename) {
    return filename.substring(filename.lastIndexOf('.') + 1);
}
/**
 * Get the base name of a filename, i.e., the name without the extension
 * @example
 * ```js
 * const e = getExtension('myfile.ts') // return 'myfile'
 * ```
 *
 * @category Utils
 */
function getBaseName(filename) {
    return filename.substring(0, filename.lastIndexOf('.'));
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=io.js.map