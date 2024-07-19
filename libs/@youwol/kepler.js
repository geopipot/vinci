(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"), require("@youwol/dataframe"), require("@youwol/geometry"));
	else if(typeof define === 'function' && define.amd)
		define("@youwol/kepler", [, "@youwol/dataframe", "@youwol/geometry"], factory);
	else if(typeof exports === 'object')
		exports["@youwol/kepler"] = factory(require("three"), require("@youwol/dataframe"), require("@youwol/geometry"));
	else
		root["@youwol/kepler"] = factory(root["THREE"], root["@youwol/dataframe"], root["@youwol/geometry"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_three__, __WEBPACK_EXTERNAL_MODULE__youwol_dataframe__, __WEBPACK_EXTERNAL_MODULE__youwol_geometry__) {
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
/*! exports provided: eigenValue, eigenVector, add, addNumber, sub, mult, multMat, div, trace, norm, norm2, transpose, square, abs, dot, cross, normalize, unitInterval, negate, invert, weightedSum, sum, tagNaN, rand, round, trunc, minMax, min, max, equals, closeTo, getNaN, inv, rotate, translate, scale, determinant, covariance, variance, mean, weightedMean, quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers, describe, std, bins, ComponentDecomposer, PositionDecomposer, EigenValuesDecomposer, EigenVectorsDecomposer, VectorNormDecomposer, NormalsDecomposer, ValenceDecomposer, AreaDecomposer, Fringes, eigen, Eigen, barycentric2, barycentric3, barycentric4, lerp, biLerp, triLerp, triangleLerp2D, triangleLerp3D, tetraLerp, InterpolateDirection, meshInterpolate, MinMax, Quaternion, mat, vec, minArray, maxArray, minMaxArray, normalizeArray, scaleArray, dectectNan, flatten, rotateAxis, getRotationAxis, randomMT */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_5251__) {

"use strict";
__nested_webpack_require_5251__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5251__(/*! ./lib */ "./lib/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "eigenValue", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["eigenValue"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "eigenVector", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["eigenVector"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "add", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["add"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "addNumber", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["addNumber"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "sub", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["sub"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "mult", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["mult"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "multMat", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["multMat"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "div", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["div"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "trace", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["trace"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "norm", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["norm"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "norm2", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["norm2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "transpose", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["transpose"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "square", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["square"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "abs", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["abs"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "dot", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["dot"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "cross", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["cross"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "normalize", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["normalize"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "unitInterval", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["unitInterval"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "negate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["negate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "invert", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["invert"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "weightedSum", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["weightedSum"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "sum", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["sum"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "tagNaN", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["tagNaN"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "rand", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["rand"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "round", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["round"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "trunc", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["trunc"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "minMax", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["minMax"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "min", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["min"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "max", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["max"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "equals", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["equals"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "closeTo", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["closeTo"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "getNaN", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["getNaN"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "inv", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["inv"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "rotate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["rotate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "translate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["translate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "scale", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["scale"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "determinant", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["determinant"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "covariance", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["covariance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "variance", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["variance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "mean", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["mean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "weightedMean", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["weightedMean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "quantile", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["quantile"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "q25", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["q25"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "q50", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["q50"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "q75", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["q75"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "IQR", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["IQR"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "outliers", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["outliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "isOutliers", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["isOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "notOutliers", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["notOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "describe", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["describe"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "std", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["std"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "bins", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["bins"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "ComponentDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["ComponentDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "PositionDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["PositionDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["EigenValuesDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["EigenVectorsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "VectorNormDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["VectorNormDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "NormalsDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["NormalsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "ValenceDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["ValenceDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "AreaDecomposer", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["AreaDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "Fringes", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Fringes"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "eigen", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["eigen"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "Eigen", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Eigen"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "barycentric2", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["barycentric2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "barycentric3", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["barycentric3"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "barycentric4", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["barycentric4"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "lerp", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["lerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "biLerp", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["biLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "triLerp", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["triLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "triangleLerp2D", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["triangleLerp2D"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "triangleLerp3D", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["triangleLerp3D"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "tetraLerp", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["tetraLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "InterpolateDirection", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["InterpolateDirection"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "meshInterpolate", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["meshInterpolate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "MinMax", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["MinMax"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "Quaternion", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "mat", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["mat"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "vec", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["vec"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "minArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["minArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "maxArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["maxArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "minMaxArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["minMaxArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "normalizeArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["normalizeArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "scaleArray", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["scaleArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "dectectNan", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["dectectNan"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "flatten", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "rotateAxis", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["rotateAxis"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "getRotationAxis", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["getRotationAxis"]; });

/* harmony reexport (safe) */ __nested_webpack_require_5251__.d(__webpack_exports__, "randomMT", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["randomMT"]; });

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_19834__) {

"use strict";
__nested_webpack_require_19834__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_19834__.d(__webpack_exports__, "minArray", function() { return minArray; });
/* harmony export (binding) */ __nested_webpack_require_19834__.d(__webpack_exports__, "maxArray", function() { return maxArray; });
/* harmony export (binding) */ __nested_webpack_require_19834__.d(__webpack_exports__, "minMaxArray", function() { return minMaxArray; });
/* harmony export (binding) */ __nested_webpack_require_19834__.d(__webpack_exports__, "normalizeArray", function() { return normalizeArray; });
/* harmony export (binding) */ __nested_webpack_require_19834__.d(__webpack_exports__, "scaleArray", function() { return scaleArray; });
/* harmony export (binding) */ __nested_webpack_require_19834__.d(__webpack_exports__, "dectectNan", function() { return dectectNan; });
/* harmony export (binding) */ __nested_webpack_require_19834__.d(__webpack_exports__, "flatten", function() { return flatten; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_22672__) {

"use strict";
__nested_webpack_require_22672__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_22672__.d(__webpack_exports__, "barycentric2", function() { return barycentric2; });
/* harmony export (binding) */ __nested_webpack_require_22672__.d(__webpack_exports__, "barycentric3", function() { return barycentric3; });
/* harmony export (binding) */ __nested_webpack_require_22672__.d(__webpack_exports__, "barycentric4", function() { return barycentric4; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27581__) {

"use strict";
__nested_webpack_require_27581__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_27581__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27581__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_27581__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_28605__) {

"use strict";
__nested_webpack_require_28605__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_28605__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __nested_webpack_require_28605__.d(__webpack_exports__, "addNumber", function() { return addNumber; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_30279__) {

"use strict";
__nested_webpack_require_30279__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_30279__.d(__webpack_exports__, "closeTo", function() { return closeTo; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30279__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_30279__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_31614__) {

"use strict";
__nested_webpack_require_31614__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_31614__.d(__webpack_exports__, "cross", function() { return cross; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_32742__) {

"use strict";
__nested_webpack_require_32742__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_32742__.d(__webpack_exports__, "AreaDecomposer", function() { return AreaDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32742__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_32742__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_32742__(/*! .. */ "./lib/dataframe/index.ts");
/* harmony import */ var _normals__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_32742__(/*! ./normals */ "./lib/dataframe/decomposers/normals.ts");



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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_34805__) {

"use strict";
__nested_webpack_require_34805__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_34805__.d(__webpack_exports__, "ComponentDecomposer", function() { return ComponentDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_34805__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_34805__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_39233__) {

"use strict";
__nested_webpack_require_39233__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_39233__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return EigenValuesDecomposer; });
/* harmony export (binding) */ __nested_webpack_require_39233__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return EigenVectorsDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39233__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_39233__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_39233__(/*! .. */ "./lib/dataframe/index.ts");


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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_42343__) {

"use strict";
__nested_webpack_require_42343__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_42343__.d(__webpack_exports__, "Fringes", function() { return Fringes; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42343__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_42343__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_44067__) {

"use strict";
__nested_webpack_require_44067__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_44067__(/*! ./component */ "./lib/dataframe/decomposers/component.ts");
/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "ComponentDecomposer", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["ComponentDecomposer"]; });

/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_44067__(/*! ./position */ "./lib/dataframe/decomposers/position.ts");
/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "PositionDecomposer", function() { return _position__WEBPACK_IMPORTED_MODULE_1__["PositionDecomposer"]; });

/* harmony import */ var _eigen__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_44067__(/*! ./eigen */ "./lib/dataframe/decomposers/eigen.ts");
/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return _eigen__WEBPACK_IMPORTED_MODULE_2__["EigenValuesDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return _eigen__WEBPACK_IMPORTED_MODULE_2__["EigenVectorsDecomposer"]; });

/* harmony import */ var _norm__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_44067__(/*! ./norm */ "./lib/dataframe/decomposers/norm.ts");
/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "VectorNormDecomposer", function() { return _norm__WEBPACK_IMPORTED_MODULE_3__["VectorNormDecomposer"]; });

/* harmony import */ var _normals__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_44067__(/*! ./normals */ "./lib/dataframe/decomposers/normals.ts");
/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "NormalsDecomposer", function() { return _normals__WEBPACK_IMPORTED_MODULE_4__["NormalsDecomposer"]; });

/* harmony import */ var _valence__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_44067__(/*! ./valence */ "./lib/dataframe/decomposers/valence.ts");
/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "ValenceDecomposer", function() { return _valence__WEBPACK_IMPORTED_MODULE_5__["ValenceDecomposer"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_44067__(/*! ./area */ "./lib/dataframe/decomposers/area.ts");
/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "AreaDecomposer", function() { return _area__WEBPACK_IMPORTED_MODULE_6__["AreaDecomposer"]; });

/* harmony import */ var _fringes__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_44067__(/*! ./fringes */ "./lib/dataframe/decomposers/fringes.ts");
/* harmony reexport (safe) */ __nested_webpack_require_44067__.d(__webpack_exports__, "Fringes", function() { return _fringes__WEBPACK_IMPORTED_MODULE_7__["Fringes"]; });











/***/ }),

/***/ "./lib/dataframe/decomposers/norm.ts":
/*!*******************************************!*\
  !*** ./lib/dataframe/decomposers/norm.ts ***!
  \*******************************************/
/*! exports provided: VectorNormDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_47205__) {

"use strict";
__nested_webpack_require_47205__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_47205__.d(__webpack_exports__, "VectorNormDecomposer", function() { return VectorNormDecomposer; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_47205__(/*! .. */ "./lib/dataframe/index.ts");

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_48623__) {

"use strict";
__nested_webpack_require_48623__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_48623__.d(__webpack_exports__, "NormalsDecomposer", function() { return NormalsDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48623__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_48623__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48623__(/*! ../../ */ "./lib/index.ts");


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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_51249__) {

"use strict";
__nested_webpack_require_51249__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_51249__.d(__webpack_exports__, "PositionDecomposer", function() { return PositionDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_51249__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_51249__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
        return undefined;
    }
}


/***/ }),

/***/ "./lib/dataframe/decomposers/valence.ts":
/*!**********************************************!*\
  !*** ./lib/dataframe/decomposers/valence.ts ***!
  \**********************************************/
/*! exports provided: ValenceDecomposer */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_53436__) {

"use strict";
__nested_webpack_require_53436__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_53436__.d(__webpack_exports__, "ValenceDecomposer", function() { return ValenceDecomposer; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53436__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_53436__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_55464__) {

"use strict";
__nested_webpack_require_55464__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_55464__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_55464__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_55464__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_57141__) {

"use strict";
__nested_webpack_require_57141__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_57141__.d(__webpack_exports__, "div", function() { return div; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_58377__) {

"use strict";
__nested_webpack_require_58377__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_58377__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58377__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_58377__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_60175__) {

"use strict";
__nested_webpack_require_60175__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_60175__.d(__webpack_exports__, "eigenValue", function() { return eigenValue; });
/* harmony export (binding) */ __nested_webpack_require_60175__.d(__webpack_exports__, "eigenVector", function() { return eigenVector; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_60175__(/*! ../ */ "./lib/index.ts");

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_62330__) {

"use strict";
__nested_webpack_require_62330__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_62330__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_62330__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_62330__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_63640__) {

"use strict";
__nested_webpack_require_63640__.r(__webpack_exports__);
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63640__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_63640__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63640__(/*! . */ "./lib/dataframe/index.ts");
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_69629__) {

"use strict";
__nested_webpack_require_69629__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_69629__.d(__webpack_exports__, "getNaN", function() { return getNaN; });
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
/*! exports provided: eigenValue, eigenVector, add, addNumber, sub, mult, multMat, div, trace, norm, norm2, transpose, square, abs, dot, cross, normalize, unitInterval, negate, invert, weightedSum, sum, tagNaN, rand, round, trunc, minMax, min, max, equals, closeTo, getNaN, inv, rotate, translate, scale, determinant, covariance, variance, mean, weightedMean, quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers, describe, std, bins, ComponentDecomposer, PositionDecomposer, EigenValuesDecomposer, EigenVectorsDecomposer, VectorNormDecomposer, NormalsDecomposer, ValenceDecomposer, AreaDecomposer, Fringes */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_71405__) {

"use strict";
__nested_webpack_require_71405__.r(__webpack_exports__);
/* harmony import */ var _eigen__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_71405__(/*! ./eigen */ "./lib/dataframe/eigen.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "eigenValue", function() { return _eigen__WEBPACK_IMPORTED_MODULE_0__["eigenValue"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "eigenVector", function() { return _eigen__WEBPACK_IMPORTED_MODULE_0__["eigenVector"]; });

/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_71405__(/*! ./add */ "./lib/dataframe/add.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "add", function() { return _add__WEBPACK_IMPORTED_MODULE_1__["add"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "addNumber", function() { return _add__WEBPACK_IMPORTED_MODULE_1__["addNumber"]; });

/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_71405__(/*! ./sub */ "./lib/dataframe/sub.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "sub", function() { return _sub__WEBPACK_IMPORTED_MODULE_2__["sub"]; });

/* harmony import */ var _mult__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_71405__(/*! ./mult */ "./lib/dataframe/mult.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "mult", function() { return _mult__WEBPACK_IMPORTED_MODULE_3__["mult"]; });

/* harmony import */ var _multMat__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_71405__(/*! ./multMat */ "./lib/dataframe/multMat.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "multMat", function() { return _multMat__WEBPACK_IMPORTED_MODULE_4__["multMat"]; });

/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_71405__(/*! ./div */ "./lib/dataframe/div.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "div", function() { return _div__WEBPACK_IMPORTED_MODULE_5__["div"]; });

/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_71405__(/*! ./trace */ "./lib/dataframe/trace.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "trace", function() { return _trace__WEBPACK_IMPORTED_MODULE_6__["trace"]; });

/* harmony import */ var _norm__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_71405__(/*! ./norm */ "./lib/dataframe/norm.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "norm", function() { return _norm__WEBPACK_IMPORTED_MODULE_7__["norm"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "norm2", function() { return _norm__WEBPACK_IMPORTED_MODULE_7__["norm2"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_71405__(/*! ./transpose */ "./lib/dataframe/transpose.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "transpose", function() { return _transpose__WEBPACK_IMPORTED_MODULE_8__["transpose"]; });

/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_71405__(/*! ./square */ "./lib/dataframe/square.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "square", function() { return _square__WEBPACK_IMPORTED_MODULE_9__["square"]; });

/* harmony import */ var _abs__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_71405__(/*! ./abs */ "./lib/dataframe/abs.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "abs", function() { return _abs__WEBPACK_IMPORTED_MODULE_10__["abs"]; });

/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_71405__(/*! ./dot */ "./lib/dataframe/dot.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "dot", function() { return _dot__WEBPACK_IMPORTED_MODULE_11__["dot"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_71405__(/*! ./cross */ "./lib/dataframe/cross.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "cross", function() { return _cross__WEBPACK_IMPORTED_MODULE_12__["cross"]; });

/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_71405__(/*! ./normalize */ "./lib/dataframe/normalize.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "normalize", function() { return _normalize__WEBPACK_IMPORTED_MODULE_13__["normalize"]; });

/* harmony import */ var _unitInterval__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_71405__(/*! ./unitInterval */ "./lib/dataframe/unitInterval.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "unitInterval", function() { return _unitInterval__WEBPACK_IMPORTED_MODULE_14__["unitInterval"]; });

/* harmony import */ var _negate__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_71405__(/*! ./negate */ "./lib/dataframe/negate.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "negate", function() { return _negate__WEBPACK_IMPORTED_MODULE_15__["negate"]; });

/* harmony import */ var _invert__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_71405__(/*! ./invert */ "./lib/dataframe/invert.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "invert", function() { return _invert__WEBPACK_IMPORTED_MODULE_16__["invert"]; });

/* harmony import */ var _weightedSum__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_71405__(/*! ./weightedSum */ "./lib/dataframe/weightedSum.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "weightedSum", function() { return _weightedSum__WEBPACK_IMPORTED_MODULE_17__["weightedSum"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_71405__(/*! ./sum */ "./lib/dataframe/sum.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_18__["sum"]; });

/* harmony import */ var _tagNaN__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_71405__(/*! ./tagNaN */ "./lib/dataframe/tagNaN.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "tagNaN", function() { return _tagNaN__WEBPACK_IMPORTED_MODULE_19__["tagNaN"]; });

/* harmony import */ var _rand__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_71405__(/*! ./rand */ "./lib/dataframe/rand.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "rand", function() { return _rand__WEBPACK_IMPORTED_MODULE_20__["rand"]; });

/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_71405__(/*! ./round */ "./lib/dataframe/round.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "round", function() { return _round__WEBPACK_IMPORTED_MODULE_21__["round"]; });

/* harmony import */ var _trunc__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_71405__(/*! ./trunc */ "./lib/dataframe/trunc.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "trunc", function() { return _trunc__WEBPACK_IMPORTED_MODULE_22__["trunc"]; });

/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_71405__(/*! ./minMax */ "./lib/dataframe/minMax.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "minMax", function() { return _minMax__WEBPACK_IMPORTED_MODULE_23__["minMax"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "min", function() { return _minMax__WEBPACK_IMPORTED_MODULE_23__["min"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "max", function() { return _minMax__WEBPACK_IMPORTED_MODULE_23__["max"]; });

/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_71405__(/*! ./equals */ "./lib/dataframe/equals.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "equals", function() { return _equals__WEBPACK_IMPORTED_MODULE_24__["equals"]; });

/* harmony import */ var _closeTo__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_71405__(/*! ./closeTo */ "./lib/dataframe/closeTo.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "closeTo", function() { return _closeTo__WEBPACK_IMPORTED_MODULE_25__["closeTo"]; });

/* harmony import */ var _getNaN__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_71405__(/*! ./getNaN */ "./lib/dataframe/getNaN.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "getNaN", function() { return _getNaN__WEBPACK_IMPORTED_MODULE_26__["getNaN"]; });

/* harmony import */ var _inv__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_71405__(/*! ./inv */ "./lib/dataframe/inv.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "inv", function() { return _inv__WEBPACK_IMPORTED_MODULE_27__["inv"]; });

/* harmony import */ var _rotate__WEBPACK_IMPORTED_MODULE_28__ = __nested_webpack_require_71405__(/*! ./rotate */ "./lib/dataframe/rotate.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "rotate", function() { return _rotate__WEBPACK_IMPORTED_MODULE_28__["rotate"]; });

/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_29__ = __nested_webpack_require_71405__(/*! ./translate */ "./lib/dataframe/translate.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "translate", function() { return _translate__WEBPACK_IMPORTED_MODULE_29__["translate"]; });

/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_30__ = __nested_webpack_require_71405__(/*! ./scale */ "./lib/dataframe/scale.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "scale", function() { return _scale__WEBPACK_IMPORTED_MODULE_30__["scale"]; });

/* harmony import */ var _determinant__WEBPACK_IMPORTED_MODULE_31__ = __nested_webpack_require_71405__(/*! ./determinant */ "./lib/dataframe/determinant.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "determinant", function() { return _determinant__WEBPACK_IMPORTED_MODULE_31__["determinant"]; });

/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_32__ = __nested_webpack_require_71405__(/*! ./stats */ "./lib/dataframe/stats/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "covariance", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["covariance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "variance", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["variance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "mean", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["mean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "weightedMean", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["weightedMean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "quantile", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["quantile"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "q25", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["q25"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "q50", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["q50"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "q75", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["q75"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "IQR", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["IQR"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "outliers", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["outliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "isOutliers", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["isOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "notOutliers", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["notOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "describe", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["describe"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "std", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["std"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "bins", function() { return _stats__WEBPACK_IMPORTED_MODULE_32__["bins"]; });

/* harmony import */ var _decomposers__WEBPACK_IMPORTED_MODULE_33__ = __nested_webpack_require_71405__(/*! ./decomposers */ "./lib/dataframe/decomposers/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "ComponentDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["ComponentDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "PositionDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["PositionDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["EigenValuesDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["EigenVectorsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "VectorNormDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["VectorNormDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "NormalsDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["NormalsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "ValenceDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["ValenceDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "AreaDecomposer", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["AreaDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_71405__.d(__webpack_exports__, "Fringes", function() { return _decomposers__WEBPACK_IMPORTED_MODULE_33__["Fringes"]; });

/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_34__ = __nested_webpack_require_71405__(/*! ./extensions */ "./lib/dataframe/extensions.ts");
/* empty/unused harmony star reexport */































//export * from './interpolate'





/***/ }),

/***/ "./lib/dataframe/inv.ts":
/*!******************************!*\
  !*** ./lib/dataframe/inv.ts ***!
  \******************************/
/*! exports provided: inv */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_86213__) {

"use strict";
__nested_webpack_require_86213__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_86213__.d(__webpack_exports__, "inv", function() { return inv; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_89128__) {

"use strict";
__nested_webpack_require_89128__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_89128__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_89128__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_89128__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_90169__) {

"use strict";
__nested_webpack_require_90169__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_90169__.d(__webpack_exports__, "minMax", function() { return minMax; });
/* harmony export (binding) */ __nested_webpack_require_90169__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __nested_webpack_require_90169__.d(__webpack_exports__, "max", function() { return max; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_90169__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_90169__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_92953__) {

"use strict";
__nested_webpack_require_92953__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_92953__.d(__webpack_exports__, "mult", function() { return mult; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_95775__) {

"use strict";
__nested_webpack_require_95775__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_95775__.d(__webpack_exports__, "multMat", function() { return multMat; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_95775__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_95775__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mult__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_95775__(/*! ./mult */ "./lib/dataframe/mult.ts");


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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_99643__) {

"use strict";
__nested_webpack_require_99643__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_99643__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99643__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_99643__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_100668__) {

"use strict";
__nested_webpack_require_100668__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_100668__.d(__webpack_exports__, "norm", function() { return norm; });
/* harmony export (binding) */ __nested_webpack_require_100668__.d(__webpack_exports__, "norm2", function() { return norm2; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_101698__) {

"use strict";
__nested_webpack_require_101698__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_101698__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101698__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_101698__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_103083__) {

"use strict";
__nested_webpack_require_103083__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_103083__.d(__webpack_exports__, "rand", function() { return rand; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_103963__) {

"use strict";
__nested_webpack_require_103963__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_103963__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103963__(/*! .. */ "./lib/index.ts");
/* harmony import */ var _multMat__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_103963__(/*! ./multMat */ "./lib/dataframe/multMat.ts");
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_103963__(/*! ./transpose */ "./lib/dataframe/transpose.ts");



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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_105875__) {

"use strict";
__nested_webpack_require_105875__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_105875__.d(__webpack_exports__, "round", function() { return round; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_106490__) {

"use strict";
__nested_webpack_require_106490__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_106490__.d(__webpack_exports__, "scale", function() { return scale; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_107587__) {

"use strict";
__nested_webpack_require_107587__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_107587__.d(__webpack_exports__, "square", function() { return square; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_107587__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_107587__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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

/***/ "./lib/dataframe/stats/bins.ts":
/*!*************************************!*\
  !*** ./lib/dataframe/stats/bins.ts ***!
  \*************************************/
/*! exports provided: bins */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_108633__) {

"use strict";
__nested_webpack_require_108633__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_108633__.d(__webpack_exports__, "bins", function() { return bins; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_108633__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_108633__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_108633__(/*! ../minMax */ "./lib/dataframe/minMax.ts");


/**
 * Bin a serie using either the size of a bin or the number of bins. If the start is not
 * provided, the minimum of the serie is used. If the stop is not provided, the maximum
 * of the serie is used.
 * @example
 * ```js
 * const b1 = bins(serie, {size:5, start:0, stop: 90})
 * const b2 = bins(serie, {nb: 18, start:0, stop: 90})
 * const b3 = bins(serie, {nb: 20})
 * ```
 */
function bins(serie, { size, nb, start, stop }) {
    if (serie.itemSize !== 1)
        throw new Error('itemSize should be 1');
    if (size === undefined && nb === undefined)
        throw new Error('size or nb must be provided');
    const m = Object(_minMax__WEBPACK_IMPORTED_MODULE_1__["minMax"])(serie);
    if (start === undefined) {
        start = m[0];
    }
    if (stop === undefined) {
        stop = m[1];
    }
    if (nb !== undefined) {
        size = (stop - start) / nb;
    }
    else {
        nb = Math.trunc(stop - start) / size;
    }
    // binning
    const b = new Array(nb).fill(0);
    serie.forEach(v => {
        let i = Math.trunc((v - start) / size);
        if (i >= nb)
            i = nb - 1;
        if (i < 0 || i >= nb)
            throw new Error(`index for bin (${i}) out of bounds (0, ${nb})`);
        b[i]++;
    });
    return _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__["Serie"].create({ array: b, itemSize: 1 });
}


/***/ }),

/***/ "./lib/dataframe/stats/covariance.ts":
/*!*******************************************!*\
  !*** ./lib/dataframe/stats/covariance.ts ***!
  \*******************************************/
/*! exports provided: covariance */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_110901__) {

"use strict";
__nested_webpack_require_110901__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_110901__.d(__webpack_exports__, "covariance", function() { return covariance; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_110901__(/*! ../ */ "./lib/dataframe/index.ts");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_110901__(/*! ./mean */ "./lib/dataframe/stats/mean.ts");


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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_113353__) {

"use strict";
__nested_webpack_require_113353__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_113353__.d(__webpack_exports__, "describe", function() { return describe; });
/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_113353__(/*! ../minMax */ "./lib/dataframe/minMax.ts");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_113353__(/*! ./mean */ "./lib/dataframe/stats/mean.ts");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_113353__(/*! ./quantile */ "./lib/dataframe/stats/quantile.ts");
/* harmony import */ var _std__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_113353__(/*! ./std */ "./lib/dataframe/stats/std.ts");




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
/*! exports provided: covariance, variance, mean, weightedMean, quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers, describe, std, bins */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_115215__) {

"use strict";
__nested_webpack_require_115215__.r(__webpack_exports__);
/* harmony import */ var _covariance__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_115215__(/*! ./covariance */ "./lib/dataframe/stats/covariance.ts");
/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "covariance", function() { return _covariance__WEBPACK_IMPORTED_MODULE_0__["covariance"]; });

/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_115215__(/*! ./variance */ "./lib/dataframe/stats/variance.ts");
/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "variance", function() { return _variance__WEBPACK_IMPORTED_MODULE_1__["variance"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_115215__(/*! ./mean */ "./lib/dataframe/stats/mean.ts");
/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "mean", function() { return _mean__WEBPACK_IMPORTED_MODULE_2__["mean"]; });

/* harmony import */ var _weightedMean__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_115215__(/*! ./weightedMean */ "./lib/dataframe/stats/weightedMean.ts");
/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "weightedMean", function() { return _weightedMean__WEBPACK_IMPORTED_MODULE_3__["weightedMean"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_115215__(/*! ./quantile */ "./lib/dataframe/stats/quantile.ts");
/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "quantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["quantile"]; });

/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "q25", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["q25"]; });

/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "q50", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["q50"]; });

/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "q75", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["q75"]; });

/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "IQR", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["IQR"]; });

/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "outliers", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["outliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "isOutliers", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["isOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "notOutliers", function() { return _quantile__WEBPACK_IMPORTED_MODULE_4__["notOutliers"]; });

/* harmony import */ var _describe__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_115215__(/*! ./describe */ "./lib/dataframe/stats/describe.ts");
/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "describe", function() { return _describe__WEBPACK_IMPORTED_MODULE_5__["describe"]; });

/* harmony import */ var _std__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_115215__(/*! ./std */ "./lib/dataframe/stats/std.ts");
/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "std", function() { return _std__WEBPACK_IMPORTED_MODULE_6__["std"]; });

/* harmony import */ var _bins__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_115215__(/*! ./bins */ "./lib/dataframe/stats/bins.ts");
/* harmony reexport (safe) */ __nested_webpack_require_115215__.d(__webpack_exports__, "bins", function() { return _bins__WEBPACK_IMPORTED_MODULE_7__["bins"]; });











/***/ }),

/***/ "./lib/dataframe/stats/mean.ts":
/*!*************************************!*\
  !*** ./lib/dataframe/stats/mean.ts ***!
  \*************************************/
/*! exports provided: mean */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_119054__) {

"use strict";
__nested_webpack_require_119054__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_119054__.d(__webpack_exports__, "mean", function() { return mean; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_119987__) {

"use strict";
__nested_webpack_require_119987__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_119987__.d(__webpack_exports__, "quantile", function() { return quantile; });
/* harmony export (binding) */ __nested_webpack_require_119987__.d(__webpack_exports__, "q25", function() { return q25; });
/* harmony export (binding) */ __nested_webpack_require_119987__.d(__webpack_exports__, "q50", function() { return q50; });
/* harmony export (binding) */ __nested_webpack_require_119987__.d(__webpack_exports__, "q75", function() { return q75; });
/* harmony export (binding) */ __nested_webpack_require_119987__.d(__webpack_exports__, "IQR", function() { return IQR; });
/* harmony export (binding) */ __nested_webpack_require_119987__.d(__webpack_exports__, "outliers", function() { return outliers; });
/* harmony export (binding) */ __nested_webpack_require_119987__.d(__webpack_exports__, "isOutliers", function() { return isOutliers; });
/* harmony export (binding) */ __nested_webpack_require_119987__.d(__webpack_exports__, "notOutliers", function() { return notOutliers; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_119987__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_119987__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_123858__) {

"use strict";
__nested_webpack_require_123858__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_123858__.d(__webpack_exports__, "std", function() { return std; });
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_123858__(/*! ../sum */ "./lib/dataframe/sum.ts");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_123858__(/*! ./mean */ "./lib/dataframe/stats/mean.ts");


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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_125061__) {

"use strict";
__nested_webpack_require_125061__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_125061__.d(__webpack_exports__, "variance", function() { return variance; });
/* harmony import */ var _covariance__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_125061__(/*! ./covariance */ "./lib/dataframe/stats/covariance.ts");

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_125863__) {

"use strict";
__nested_webpack_require_125863__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_125863__.d(__webpack_exports__, "weightedMean", function() { return weightedMean; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_127092__) {

"use strict";
__nested_webpack_require_127092__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_127092__.d(__webpack_exports__, "sub", function() { return sub; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_128405__) {

"use strict";
__nested_webpack_require_128405__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_128405__.d(__webpack_exports__, "sum", function() { return sum; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_129152__) {

"use strict";
__nested_webpack_require_129152__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_129152__.d(__webpack_exports__, "tagNaN", function() { return tagNaN; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_130007__) {

"use strict";
__nested_webpack_require_130007__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_130007__.d(__webpack_exports__, "trace", function() { return trace; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_131234__) {

"use strict";
__nested_webpack_require_131234__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_131234__.d(__webpack_exports__, "translate", function() { return translate; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_132137__) {

"use strict";
__nested_webpack_require_132137__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_132137__.d(__webpack_exports__, "transpose", function() { return transpose; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_133193__) {

"use strict";
__nested_webpack_require_133193__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_133193__.d(__webpack_exports__, "trunc", function() { return trunc; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_133843__) {

"use strict";
__nested_webpack_require_133843__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_133843__.d(__webpack_exports__, "unitInterval", function() { return unitInterval; });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_133843__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_133843__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_135447__) {

"use strict";
__nested_webpack_require_135447__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_135447__.d(__webpack_exports__, "weightedSum", function() { return weightedSum; });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_135447__(/*! ./add */ "./lib/dataframe/add.ts");
/* harmony import */ var _mult__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_135447__(/*! ./mult */ "./lib/dataframe/mult.ts");


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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_136983__) {

"use strict";
__nested_webpack_require_136983__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_136983__.d(__webpack_exports__, "eigen", function() { return eigen; });
/* harmony export (binding) */ __nested_webpack_require_136983__.d(__webpack_exports__, "Eigen", function() { return Eigen; });
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
/*! exports provided: eigenValue, eigenVector, add, addNumber, sub, mult, multMat, div, trace, norm, norm2, transpose, square, abs, dot, cross, normalize, unitInterval, negate, invert, weightedSum, sum, tagNaN, rand, round, trunc, minMax, min, max, equals, closeTo, getNaN, inv, rotate, translate, scale, determinant, covariance, variance, mean, weightedMean, quantile, q25, q50, q75, IQR, outliers, isOutliers, notOutliers, describe, std, bins, ComponentDecomposer, PositionDecomposer, EigenValuesDecomposer, EigenVectorsDecomposer, VectorNormDecomposer, NormalsDecomposer, ValenceDecomposer, AreaDecomposer, Fringes, eigen, Eigen, barycentric2, barycentric3, barycentric4, lerp, biLerp, triLerp, triangleLerp2D, triangleLerp3D, tetraLerp, InterpolateDirection, meshInterpolate, MinMax, Quaternion, mat, vec, minArray, maxArray, minMaxArray, normalizeArray, scaleArray, dectectNan, flatten, rotateAxis, getRotationAxis, randomMT */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_145379__) {

"use strict";
__nested_webpack_require_145379__.r(__webpack_exports__);
/* harmony import */ var _dataframe__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_145379__(/*! ./dataframe */ "./lib/dataframe/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "eigenValue", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["eigenValue"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "eigenVector", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["eigenVector"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "add", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["add"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "addNumber", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["addNumber"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "sub", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["sub"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "mult", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["mult"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "multMat", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["multMat"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "div", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["div"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "trace", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["trace"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "norm", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["norm"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "norm2", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["norm2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "transpose", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["transpose"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "square", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["square"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "abs", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["abs"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "dot", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["dot"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "cross", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["cross"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "normalize", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["normalize"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "unitInterval", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["unitInterval"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "negate", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["negate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "invert", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["invert"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "weightedSum", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["weightedSum"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "sum", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["sum"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "tagNaN", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["tagNaN"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "rand", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["rand"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "round", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["round"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "trunc", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["trunc"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "minMax", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["minMax"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "min", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["min"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "max", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["max"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "equals", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["equals"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "closeTo", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["closeTo"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "getNaN", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["getNaN"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "inv", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["inv"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "rotate", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["rotate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "translate", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["translate"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "scale", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["scale"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "determinant", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["determinant"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "covariance", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["covariance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "variance", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["variance"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "mean", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["mean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "weightedMean", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["weightedMean"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "quantile", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["quantile"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "q25", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["q25"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "q50", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["q50"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "q75", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["q75"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "IQR", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["IQR"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "outliers", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["outliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "isOutliers", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["isOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "notOutliers", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["notOutliers"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "describe", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["describe"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "std", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["std"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "bins", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["bins"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "ComponentDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["ComponentDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "PositionDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["PositionDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "EigenValuesDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["EigenValuesDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "EigenVectorsDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["EigenVectorsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "VectorNormDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["VectorNormDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "NormalsDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["NormalsDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "ValenceDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["ValenceDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "AreaDecomposer", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["AreaDecomposer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "Fringes", function() { return _dataframe__WEBPACK_IMPORTED_MODULE_0__["Fringes"]; });

/* harmony import */ var _eigen__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_145379__(/*! ./eigen */ "./lib/eigen.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "eigen", function() { return _eigen__WEBPACK_IMPORTED_MODULE_1__["eigen"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "Eigen", function() { return _eigen__WEBPACK_IMPORTED_MODULE_1__["Eigen"]; });

/* harmony import */ var _barycentric__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_145379__(/*! ./barycentric */ "./lib/barycentric.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "barycentric2", function() { return _barycentric__WEBPACK_IMPORTED_MODULE_2__["barycentric2"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "barycentric3", function() { return _barycentric__WEBPACK_IMPORTED_MODULE_2__["barycentric3"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "barycentric4", function() { return _barycentric__WEBPACK_IMPORTED_MODULE_2__["barycentric4"]; });

/* harmony import */ var _interpolations__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_145379__(/*! ./interpolations */ "./lib/interpolations.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "lerp", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["lerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "biLerp", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["biLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "triLerp", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["triLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "triangleLerp2D", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["triangleLerp2D"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "triangleLerp3D", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["triangleLerp3D"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "tetraLerp", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["tetraLerp"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "InterpolateDirection", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["InterpolateDirection"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "meshInterpolate", function() { return _interpolations__WEBPACK_IMPORTED_MODULE_3__["meshInterpolate"]; });

/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_145379__(/*! ./minMax */ "./lib/minMax.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "MinMax", function() { return _minMax__WEBPACK_IMPORTED_MODULE_4__["MinMax"]; });

/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_145379__(/*! ./quaternion */ "./lib/quaternion.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "Quaternion", function() { return _quaternion__WEBPACK_IMPORTED_MODULE_5__["Quaternion"]; });

/* harmony import */ var _matrix3__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_145379__(/*! ./matrix3 */ "./lib/matrix3.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "mat", function() { return _matrix3__WEBPACK_IMPORTED_MODULE_6__["mat"]; });

/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_145379__(/*! ./vectors */ "./lib/vectors.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "vec", function() { return _vectors__WEBPACK_IMPORTED_MODULE_7__["vec"]; });

/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_145379__(/*! ./arrays */ "./lib/arrays.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "minArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["minArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "maxArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["maxArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "minMaxArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["minMaxArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "normalizeArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["normalizeArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "scaleArray", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["scaleArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "dectectNan", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["dectectNan"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "flatten", function() { return _arrays__WEBPACK_IMPORTED_MODULE_8__["flatten"]; });

/* harmony import */ var _rotateAxis__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_145379__(/*! ./rotateAxis */ "./lib/rotateAxis.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "rotateAxis", function() { return _rotateAxis__WEBPACK_IMPORTED_MODULE_9__["rotateAxis"]; });

/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "getRotationAxis", function() { return _rotateAxis__WEBPACK_IMPORTED_MODULE_9__["getRotationAxis"]; });

/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_145379__(/*! ./random */ "./lib/random.ts");
/* harmony reexport (safe) */ __nested_webpack_require_145379__.d(__webpack_exports__, "randomMT", function() { return _random__WEBPACK_IMPORTED_MODULE_10__["randomMT"]; });










//export * from "./stats"




/***/ }),

/***/ "./lib/interpolations.ts":
/*!*******************************!*\
  !*** ./lib/interpolations.ts ***!
  \*******************************/
/*! exports provided: lerp, biLerp, triLerp, triangleLerp2D, triangleLerp3D, tetraLerp, InterpolateDirection, meshInterpolate */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_161643__) {

"use strict";
__nested_webpack_require_161643__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_161643__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __nested_webpack_require_161643__.d(__webpack_exports__, "biLerp", function() { return biLerp; });
/* harmony export (binding) */ __nested_webpack_require_161643__.d(__webpack_exports__, "triLerp", function() { return triLerp; });
/* harmony export (binding) */ __nested_webpack_require_161643__.d(__webpack_exports__, "triangleLerp2D", function() { return triangleLerp2D; });
/* harmony export (binding) */ __nested_webpack_require_161643__.d(__webpack_exports__, "triangleLerp3D", function() { return triangleLerp3D; });
/* harmony export (binding) */ __nested_webpack_require_161643__.d(__webpack_exports__, "tetraLerp", function() { return tetraLerp; });
/* harmony export (binding) */ __nested_webpack_require_161643__.d(__webpack_exports__, "InterpolateDirection", function() { return InterpolateDirection; });
/* harmony export (binding) */ __nested_webpack_require_161643__.d(__webpack_exports__, "meshInterpolate", function() { return meshInterpolate; });
/* harmony import */ var _barycentric__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_161643__(/*! ./barycentric */ "./lib/barycentric.ts");
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_161643__(/*! ./arrays */ "./lib/arrays.ts");


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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_174578__) {

"use strict";
__nested_webpack_require_174578__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_174578__.d(__webpack_exports__, "mat", function() { return mat; });
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_183709__) {

"use strict";
__nested_webpack_require_183709__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_183709__.d(__webpack_exports__, "MinMax", function() { return MinMax; });
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
    /**
     * Normalize a value (lerp) according to the min/max of this
     */
    normalize(v) {
        return (v - this.min) / (this.max - this.min);
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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_185532__) {

"use strict";
__nested_webpack_require_185532__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_185532__.d(__webpack_exports__, "Quaternion", function() { return Quaternion; });
/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_185532__(/*! ./vectors */ "./lib/vectors.ts");

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

/***/ "./lib/random.ts":
/*!***********************!*\
  !*** ./lib/random.ts ***!
  \***********************/
/*! exports provided: randomMT */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_195498__) {

"use strict";
__nested_webpack_require_195498__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_195498__.d(__webpack_exports__, "randomMT", function() { return randomMT; });
/**
 * A Mersenne Twister 19937 random number generator. It is proved that the period is 2^19937-1,
 * and 623-dimensional equidistribution property is assured.
 * @see https://en.wikipedia.org/wiki/Mersenne_Twister
 * @param ubound The upper bound if any (1 by default)
 * @param floor Floor the result if true (false by default)
 * @example
 * ```ts
 * const a = randomMT()           // between 0 and 1 as a float number
 * const a = randomMT(1000)       // between 0 and 1000 as a float number
 * const a = randomMT(1000, true) // between 0 and 1000 as an integer
 * ```
 */
const randomMT = (ubound, floor = false) => {
    let rnd = extractNumber();
    if (ubound != undefined) {
        rnd *= ubound;
    }
    // ~~ is a faster substitute for Math.floor()
    return floor ? ~~rnd : rnd;
};
// ---------------------------------------------
// private
// ---------------------------------------------
// Create a length 624 array to store the state of the generator
const MT = [];
let index = 0;
let init = false;
// Initialize the generator from a seed
function initializeGenerator(seed) {
    MT[0] = seed;
    for (let i = 1; 624 > i; ++i) { // loop over each other element
        MT[i] = (0x6c078965 * (MT[i - 1] ^ (MT[i] >> 30)) + i) & 0xffffffff;
    }
}
// Extract a tempered pseudorandom number based on the index-th value,
// calling generateNumbers() every 624 numbers
function extractNumber() {
    if (index == 0) {
        if (!init) {
            initializeGenerator(+new Date);
        }
        generateNumbers();
    }
    let y = MT[index];
    y ^= (y >> 11);
    y ^= (y << 7) & 0x9d2c5680;
    y ^= (y << 15) & 0xefc60000;
    y ^= (y >> 18);
    index = (index + 1) % 624;
    return y / 0x80000000;
}
// Generate an array of 624 untempered numbers
function generateNumbers() {
    for (let i = 0; 624 > i; ++i) {
        let y = (MT[i] & 0x80000000) | (MT[(i + 1) % 624] & 0x7fffffff);
        MT[i] = MT[(i + 397) % 624] ^ (y >> 1);
        if (y % 2 == 1) {
            MT[i] ^= 0x9908b0df;
        }
    }
}


/***/ }),

/***/ "./lib/rotateAxis.ts":
/*!***************************!*\
  !*** ./lib/rotateAxis.ts ***!
  \***************************/
/*! exports provided: rotateAxis, getRotationAxis */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_197981__) {

"use strict";
__nested_webpack_require_197981__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_197981__.d(__webpack_exports__, "rotateAxis", function() { return rotateAxis; });
/* harmony export (binding) */ __nested_webpack_require_197981__.d(__webpack_exports__, "getRotationAxis", function() { return getRotationAxis; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_197981__(/*! . */ "./lib/index.ts");
/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_197981__(/*! ./vectors */ "./lib/vectors.ts");


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
/***/ (function(module, __webpack_exports__, __nested_webpack_require_200944__) {

"use strict";
__nested_webpack_require_200944__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_200944__.d(__webpack_exports__, "vec", function() { return vec; });
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

/***/ "../node_modules/three/examples/jsm/lines/Line2.js":
/*!*********************************************************!*\
  !*** ../node_modules/three/examples/jsm/lines/Line2.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line2": () => (/* binding */ Line2)
/* harmony export */ });
/* harmony import */ var _lines_LineSegments2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/LineSegments2.js */ "../node_modules/three/examples/jsm/lines/LineSegments2.js");
/* harmony import */ var _lines_LineGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/LineGeometry.js */ "../node_modules/three/examples/jsm/lines/LineGeometry.js");
/* harmony import */ var _lines_LineMaterial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lines/LineMaterial.js */ "../node_modules/three/examples/jsm/lines/LineMaterial.js");




class Line2 extends _lines_LineSegments2_js__WEBPACK_IMPORTED_MODULE_0__.LineSegments2 {

	constructor( geometry = new _lines_LineGeometry_js__WEBPACK_IMPORTED_MODULE_1__.LineGeometry(), material = new _lines_LineMaterial_js__WEBPACK_IMPORTED_MODULE_2__.LineMaterial( { color: Math.random() * 0xffffff } ) ) {

		super( geometry, material );

		this.type = 'Line2';

	}

}

Line2.prototype.isLine2 = true;




/***/ }),

/***/ "../node_modules/three/examples/jsm/lines/LineGeometry.js":
/*!****************************************************************!*\
  !*** ../node_modules/three/examples/jsm/lines/LineGeometry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineGeometry": () => (/* binding */ LineGeometry)
/* harmony export */ });
/* harmony import */ var _lines_LineSegmentsGeometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lines/LineSegmentsGeometry.js */ "../node_modules/three/examples/jsm/lines/LineSegmentsGeometry.js");


class LineGeometry extends _lines_LineSegmentsGeometry_js__WEBPACK_IMPORTED_MODULE_0__.LineSegmentsGeometry {

	constructor() {

		super();
		this.type = 'LineGeometry';

	}

	setPositions( array ) {

		// converts [ x1, y1, z1,  x2, y2, z2, ... ] to pairs format

		var length = array.length - 3;
		var points = new Float32Array( 2 * length );

		for ( var i = 0; i < length; i += 3 ) {

			points[ 2 * i ] = array[ i ];
			points[ 2 * i + 1 ] = array[ i + 1 ];
			points[ 2 * i + 2 ] = array[ i + 2 ];

			points[ 2 * i + 3 ] = array[ i + 3 ];
			points[ 2 * i + 4 ] = array[ i + 4 ];
			points[ 2 * i + 5 ] = array[ i + 5 ];

		}

		super.setPositions( points );

		return this;

	}

	setColors( array ) {

		// converts [ r1, g1, b1,  r2, g2, b2, ... ] to pairs format

		var length = array.length - 3;
		var colors = new Float32Array( 2 * length );

		for ( var i = 0; i < length; i += 3 ) {

			colors[ 2 * i ] = array[ i ];
			colors[ 2 * i + 1 ] = array[ i + 1 ];
			colors[ 2 * i + 2 ] = array[ i + 2 ];

			colors[ 2 * i + 3 ] = array[ i + 3 ];
			colors[ 2 * i + 4 ] = array[ i + 4 ];
			colors[ 2 * i + 5 ] = array[ i + 5 ];

		}

		super.setColors( colors );

		return this;

	}

	fromLine( line ) {

		var geometry = line.geometry;

		if ( geometry.isGeometry ) {

			console.error( 'THREE.LineGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.' );
			return;

		} else if ( geometry.isBufferGeometry ) {

			this.setPositions( geometry.attributes.position.array ); // assumes non-indexed

		}

		// set colors, maybe

		return this;

	}

	copy( /* source */ ) {

		// todo

		return this;

	}

}

LineGeometry.prototype.isLineGeometry = true;




/***/ }),

/***/ "../node_modules/three/examples/jsm/lines/LineMaterial.js":
/*!****************************************************************!*\
  !*** ../node_modules/three/examples/jsm/lines/LineMaterial.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineMaterial": () => (/* binding */ LineMaterial)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);


/**
 * parameters = {
 *  color: <hex>,
 *  linewidth: <float>,
 *  dashed: <boolean>,
 *  dashScale: <float>,
 *  dashSize: <float>,
 *  dashOffset: <float>,
 *  gapSize: <float>,
 *  resolution: <Vector2>, // to be set by renderer
 * }
 */

three__WEBPACK_IMPORTED_MODULE_0__.UniformsLib.line = {

	linewidth: { value: 1 },
	resolution: { value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector2( 1, 1 ) },
	dashScale: { value: 1 },
	dashSize: { value: 1 },
	dashOffset: { value: 0 },
	gapSize: { value: 1 }, // todo FIX - maybe change to totalSize
	opacity: { value: 1 }

};

three__WEBPACK_IMPORTED_MODULE_0__.ShaderLib.line = {

	uniforms: three__WEBPACK_IMPORTED_MODULE_0__.UniformsUtils.merge( [
		three__WEBPACK_IMPORTED_MODULE_0__.UniformsLib.common,
		three__WEBPACK_IMPORTED_MODULE_0__.UniformsLib.fog,
		three__WEBPACK_IMPORTED_MODULE_0__.UniformsLib.line
	] ),

	vertexShader:
		`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,

	fragmentShader:
		`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float dashOffset;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef ALPHA_TO_COVERAGE

			// artifacts appear on some hardware if a derivative is taken within a conditional
			float a = vUv.x;
			float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
			float len2 = a * a + b * b;
			float dlen = fwidth( len2 );

			if ( abs( vUv.y ) > 1.0 ) {

				alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

			}

			#else

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
};

class LineMaterial extends three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial {

	constructor( parameters ) {

		super( {

			type: 'LineMaterial',

			uniforms: three__WEBPACK_IMPORTED_MODULE_0__.UniformsUtils.clone( three__WEBPACK_IMPORTED_MODULE_0__.ShaderLib.line.uniforms ),

			vertexShader: three__WEBPACK_IMPORTED_MODULE_0__.ShaderLib.line.vertexShader,
			fragmentShader: three__WEBPACK_IMPORTED_MODULE_0__.ShaderLib.line.fragmentShader,

			clipping: true // required for clipping support

		} );

		this.dashed = false;

		Object.defineProperties( this, {

			color: {

				enumerable: true,

				get: function () {

					return this.uniforms.diffuse.value;

				},

				set: function ( value ) {

					this.uniforms.diffuse.value = value;

				}

			},

			linewidth: {

				enumerable: true,

				get: function () {

					return this.uniforms.linewidth.value;

				},

				set: function ( value ) {

					this.uniforms.linewidth.value = value;

				}

			},

			dashScale: {

				enumerable: true,

				get: function () {

					return this.uniforms.dashScale.value;

				},

				set: function ( value ) {

					this.uniforms.dashScale.value = value;

				}

			},

			dashSize: {

				enumerable: true,

				get: function () {

					return this.uniforms.dashSize.value;

				},

				set: function ( value ) {

					this.uniforms.dashSize.value = value;

				}

			},

			dashOffset: {

				enumerable: true,

				get: function () {

					return this.uniforms.dashOffset.value;

				},

				set: function ( value ) {

					this.uniforms.dashOffset.value = value;

				}

			},

			gapSize: {

				enumerable: true,

				get: function () {

					return this.uniforms.gapSize.value;

				},

				set: function ( value ) {

					this.uniforms.gapSize.value = value;

				}

			},

			opacity: {

				enumerable: true,

				get: function () {

					return this.uniforms.opacity.value;

				},

				set: function ( value ) {

					this.uniforms.opacity.value = value;

				}

			},

			resolution: {

				enumerable: true,

				get: function () {

					return this.uniforms.resolution.value;

				},

				set: function ( value ) {

					this.uniforms.resolution.value.copy( value );

				}

			},

			alphaToCoverage: {

				enumerable: true,

				get: function () {

					return Boolean( 'ALPHA_TO_COVERAGE' in this.defines );

				},

				set: function ( value ) {

					if ( Boolean( value ) !== Boolean( 'ALPHA_TO_COVERAGE' in this.defines ) ) {

						this.needsUpdate = true;

					}

					if ( value ) {

						this.defines.ALPHA_TO_COVERAGE = '';
						this.extensions.derivatives = true;

					} else {

						delete this.defines.ALPHA_TO_COVERAGE;
						this.extensions.derivatives = false;

					}

				}

			}

		} );

		this.setValues( parameters );

	}

}

LineMaterial.prototype.isLineMaterial = true;




/***/ }),

/***/ "../node_modules/three/examples/jsm/lines/LineSegments2.js":
/*!*****************************************************************!*\
  !*** ../node_modules/three/examples/jsm/lines/LineSegments2.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineSegments2": () => (/* binding */ LineSegments2)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lines_LineSegmentsGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lines/LineSegmentsGeometry.js */ "../node_modules/three/examples/jsm/lines/LineSegmentsGeometry.js");
/* harmony import */ var _lines_LineMaterial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lines/LineMaterial.js */ "../node_modules/three/examples/jsm/lines/LineMaterial.js");




const _start = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _end = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

const _start4 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4();
const _end4 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4();

const _ssOrigin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4();
const _ssOrigin3 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _mvMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
const _line = new three__WEBPACK_IMPORTED_MODULE_0__.Line3();
const _closestPoint = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

const _box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
const _sphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere();
const _clipToWorldVector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4();

class LineSegments2 extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {

	constructor( geometry = new _lines_LineSegmentsGeometry_js__WEBPACK_IMPORTED_MODULE_1__.LineSegmentsGeometry(), material = new _lines_LineMaterial_js__WEBPACK_IMPORTED_MODULE_2__.LineMaterial( { color: Math.random() * 0xffffff } ) ) {

		super( geometry, material );

		this.type = 'LineSegments2';

	}

	// for backwards-compatability, but could be a method of LineSegmentsGeometry...

	computeLineDistances() {

		const geometry = this.geometry;

		const instanceStart = geometry.attributes.instanceStart;
		const instanceEnd = geometry.attributes.instanceEnd;
		const lineDistances = new Float32Array( 2 * instanceStart.count );

		for ( let i = 0, j = 0, l = instanceStart.count; i < l; i ++, j += 2 ) {

			_start.fromBufferAttribute( instanceStart, i );
			_end.fromBufferAttribute( instanceEnd, i );

			lineDistances[ j ] = ( j === 0 ) ? 0 : lineDistances[ j - 1 ];
			lineDistances[ j + 1 ] = lineDistances[ j ] + _start.distanceTo( _end );

		}

		const instanceDistanceBuffer = new three__WEBPACK_IMPORTED_MODULE_0__.InstancedInterleavedBuffer( lineDistances, 2, 1 ); // d0, d1

		geometry.setAttribute( 'instanceDistanceStart', new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( instanceDistanceBuffer, 1, 0 ) ); // d0
		geometry.setAttribute( 'instanceDistanceEnd', new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( instanceDistanceBuffer, 1, 1 ) ); // d1

		return this;

	}

	raycast( raycaster, intersects ) {

		if ( raycaster.camera === null ) {

			console.error( 'LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.' );

		}

		const threshold = ( raycaster.params.Line2 !== undefined ) ? raycaster.params.Line2.threshold || 0 : 0;

		const ray = raycaster.ray;
		const camera = raycaster.camera;
		const projectionMatrix = camera.projectionMatrix;

		const matrixWorld = this.matrixWorld;
		const geometry = this.geometry;
		const material = this.material;
		const resolution = material.resolution;
		const lineWidth = material.linewidth + threshold;

		const instanceStart = geometry.attributes.instanceStart;
		const instanceEnd = geometry.attributes.instanceEnd;

		// camera forward is negative
		const near = - camera.near;

		// clip space is [ - 1, 1 ] so multiply by two to get the full
		// width in clip space
		const ssMaxWidth = 2.0 * Math.max( lineWidth / resolution.width, lineWidth / resolution.height );

		//

		// check if we intersect the sphere bounds
		if ( geometry.boundingSphere === null ) {

			geometry.computeBoundingSphere();

		}

		_sphere.copy( geometry.boundingSphere ).applyMatrix4( matrixWorld );
		const distanceToSphere = Math.max( camera.near, _sphere.distanceToPoint( ray.origin ) );

		// get the w component to scale the world space line width
		_clipToWorldVector.set( 0, 0, - distanceToSphere, 1.0 ).applyMatrix4( camera.projectionMatrix );
		_clipToWorldVector.multiplyScalar( 1.0 / _clipToWorldVector.w );
		_clipToWorldVector.applyMatrix4( camera.projectionMatrixInverse );

		// increase the sphere bounds by the worst case line screen space width
		const sphereMargin = Math.abs( ssMaxWidth / _clipToWorldVector.w ) * 0.5;
		_sphere.radius += sphereMargin;

		if ( raycaster.ray.intersectsSphere( _sphere ) === false ) {

			return;

		}

		//

		// check if we intersect the box bounds
		if ( geometry.boundingBox === null ) {

			geometry.computeBoundingBox();

		}

		_box.copy( geometry.boundingBox ).applyMatrix4( matrixWorld );
		const distanceToBox = Math.max( camera.near, _box.distanceToPoint( ray.origin ) );

		// get the w component to scale the world space line width
		_clipToWorldVector.set( 0, 0, - distanceToBox, 1.0 ).applyMatrix4( camera.projectionMatrix );
		_clipToWorldVector.multiplyScalar( 1.0 / _clipToWorldVector.w );
		_clipToWorldVector.applyMatrix4( camera.projectionMatrixInverse );

		// increase the sphere bounds by the worst case line screen space width
		const boxMargin = Math.abs( ssMaxWidth / _clipToWorldVector.w ) * 0.5;
		_box.max.x += boxMargin;
		_box.max.y += boxMargin;
		_box.max.z += boxMargin;
		_box.min.x -= boxMargin;
		_box.min.y -= boxMargin;
		_box.min.z -= boxMargin;

		if ( raycaster.ray.intersectsBox( _box ) === false ) {

			return;

		}

		//

		// pick a point 1 unit out along the ray to avoid the ray origin
		// sitting at the camera origin which will cause "w" to be 0 when
		// applying the projection matrix.
		ray.at( 1, _ssOrigin );

		// ndc space [ - 1.0, 1.0 ]
		_ssOrigin.w = 1;
		_ssOrigin.applyMatrix4( camera.matrixWorldInverse );
		_ssOrigin.applyMatrix4( projectionMatrix );
		_ssOrigin.multiplyScalar( 1 / _ssOrigin.w );

		// screen space
		_ssOrigin.x *= resolution.x / 2;
		_ssOrigin.y *= resolution.y / 2;
		_ssOrigin.z = 0;

		_ssOrigin3.copy( _ssOrigin );

		_mvMatrix.multiplyMatrices( camera.matrixWorldInverse, matrixWorld );

		for ( let i = 0, l = instanceStart.count; i < l; i ++ ) {

			_start4.fromBufferAttribute( instanceStart, i );
			_end4.fromBufferAttribute( instanceEnd, i );

			_start.w = 1;
			_end.w = 1;

			// camera space
			_start4.applyMatrix4( _mvMatrix );
			_end4.applyMatrix4( _mvMatrix );

			// skip the segment if it's entirely behind the camera
			var isBehindCameraNear = _start4.z > near && _end4.z > near;
			if ( isBehindCameraNear ) {

				continue;

			}

			// trim the segment if it extends behind camera near
			if ( _start4.z > near ) {

				const deltaDist = _start4.z - _end4.z;
				const t = ( _start4.z - near ) / deltaDist;
				_start4.lerp( _end4, t );

			} else if ( _end4.z > near ) {

				const deltaDist = _end4.z - _start4.z;
				const t = ( _end4.z - near ) / deltaDist;
				_end4.lerp( _start4, t );

			}

			// clip space
			_start4.applyMatrix4( projectionMatrix );
			_end4.applyMatrix4( projectionMatrix );

			// ndc space [ - 1.0, 1.0 ]
			_start4.multiplyScalar( 1 / _start4.w );
			_end4.multiplyScalar( 1 / _end4.w );

			// screen space
			_start4.x *= resolution.x / 2;
			_start4.y *= resolution.y / 2;

			_end4.x *= resolution.x / 2;
			_end4.y *= resolution.y / 2;

			// create 2d segment
			_line.start.copy( _start4 );
			_line.start.z = 0;

			_line.end.copy( _end4 );
			_line.end.z = 0;

			// get closest point on ray to segment
			const param = _line.closestPointToPointParameter( _ssOrigin3, true );
			_line.at( param, _closestPoint );

			// check if the intersection point is within clip space
			const zPos = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.lerp( _start4.z, _end4.z, param );
			const isInClipSpace = zPos >= - 1 && zPos <= 1;

			const isInside = _ssOrigin3.distanceTo( _closestPoint ) < lineWidth * 0.5;

			if ( isInClipSpace && isInside ) {

				_line.start.fromBufferAttribute( instanceStart, i );
				_line.end.fromBufferAttribute( instanceEnd, i );

				_line.start.applyMatrix4( matrixWorld );
				_line.end.applyMatrix4( matrixWorld );

				const pointOnLine = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
				const point = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

				ray.distanceSqToSegment( _line.start, _line.end, point, pointOnLine );

				intersects.push( {

					point: point,
					pointOnLine: pointOnLine,
					distance: ray.origin.distanceTo( point ),

					object: this,
					face: null,
					faceIndex: i,
					uv: null,
					uv2: null,

				} );

			}

		}

	}

}

LineSegments2.prototype.LineSegments2 = true;




/***/ }),

/***/ "../node_modules/three/examples/jsm/lines/LineSegmentsGeometry.js":
/*!************************************************************************!*\
  !*** ../node_modules/three/examples/jsm/lines/LineSegmentsGeometry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineSegmentsGeometry": () => (/* binding */ LineSegmentsGeometry)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);


const _box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
const _vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

class LineSegmentsGeometry extends three__WEBPACK_IMPORTED_MODULE_0__.InstancedBufferGeometry {

	constructor() {

		super();

		this.type = 'LineSegmentsGeometry';

		const positions = [ - 1, 2, 0, 1, 2, 0, - 1, 1, 0, 1, 1, 0, - 1, 0, 0, 1, 0, 0, - 1, - 1, 0, 1, - 1, 0 ];
		const uvs = [ - 1, 2, 1, 2, - 1, 1, 1, 1, - 1, - 1, 1, - 1, - 1, - 2, 1, - 2 ];
		const index = [ 0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5 ];

		this.setIndex( index );
		this.setAttribute( 'position', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( positions, 3 ) );
		this.setAttribute( 'uv', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( uvs, 2 ) );

	}

	applyMatrix4( matrix ) {

		const start = this.attributes.instanceStart;
		const end = this.attributes.instanceEnd;

		if ( start !== undefined ) {

			start.applyMatrix4( matrix );

			end.applyMatrix4( matrix );

			start.needsUpdate = true;

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		return this;

	}

	setPositions( array ) {

		let lineSegments;

		if ( array instanceof Float32Array ) {

			lineSegments = array;

		} else if ( Array.isArray( array ) ) {

			lineSegments = new Float32Array( array );

		}

		const instanceBuffer = new three__WEBPACK_IMPORTED_MODULE_0__.InstancedInterleavedBuffer( lineSegments, 6, 1 ); // xyz, xyz

		this.setAttribute( 'instanceStart', new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( instanceBuffer, 3, 0 ) ); // xyz
		this.setAttribute( 'instanceEnd', new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( instanceBuffer, 3, 3 ) ); // xyz

		//

		this.computeBoundingBox();
		this.computeBoundingSphere();

		return this;

	}

	setColors( array ) {

		let colors;

		if ( array instanceof Float32Array ) {

			colors = array;

		} else if ( Array.isArray( array ) ) {

			colors = new Float32Array( array );

		}

		const instanceColorBuffer = new three__WEBPACK_IMPORTED_MODULE_0__.InstancedInterleavedBuffer( colors, 6, 1 ); // rgb, rgb

		this.setAttribute( 'instanceColorStart', new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( instanceColorBuffer, 3, 0 ) ); // rgb
		this.setAttribute( 'instanceColorEnd', new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( instanceColorBuffer, 3, 3 ) ); // rgb

		return this;

	}

	fromWireframeGeometry( geometry ) {

		this.setPositions( geometry.attributes.position.array );

		return this;

	}

	fromEdgesGeometry( geometry ) {

		this.setPositions( geometry.attributes.position.array );

		return this;

	}

	fromMesh( mesh ) {

		this.fromWireframeGeometry( new three__WEBPACK_IMPORTED_MODULE_0__.WireframeGeometry( mesh.geometry ) );

		// set colors, maybe

		return this;

	}

	romLineSegments( lineSegments ) {

		const geometry = lineSegments.geometry;

		if ( geometry.isGeometry ) {

			console.error( 'THREE.LineSegmentsGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.' );
			return;

		} else if ( geometry.isBufferGeometry ) {

			this.setPositions( geometry.attributes.position.array ); // assumes non-indexed

		}

		// set colors, maybe

		return this;

	}

	computeBoundingBox() {

		if ( this.boundingBox === null ) {

			this.boundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();

		}

		const start = this.attributes.instanceStart;
		const end = this.attributes.instanceEnd;

		if ( start !== undefined && end !== undefined ) {

			this.boundingBox.setFromBufferAttribute( start );

			_box.setFromBufferAttribute( end );

			this.boundingBox.union( _box );

		}

	}

	computeBoundingSphere() {

		if ( this.boundingSphere === null ) {

			this.boundingSphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere();

		}

		if ( this.boundingBox === null ) {

			this.computeBoundingBox();

		}

		const start = this.attributes.instanceStart;
		const end = this.attributes.instanceEnd;

		if ( start !== undefined && end !== undefined ) {

			const center = this.boundingSphere.center;

			this.boundingBox.getCenter( center );

			let maxRadiusSq = 0;

			for ( let i = 0, il = start.count; i < il; i ++ ) {

				_vector.fromBufferAttribute( start, i );
				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector ) );

				_vector.fromBufferAttribute( end, i );
				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector ) );

			}

			this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

			if ( isNaN( this.boundingSphere.radius ) ) {

				console.error( 'THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.', this );

			}

		}

	}

	toJSON() {

		// todo

	}

	applyMatrix( matrix ) {

		console.warn( 'THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().' );

		return this.applyMatrix4( matrix );

	}

}

LineSegmentsGeometry.prototype.isLineSegmentsGeometry = true;




/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BBoxParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.BBoxParameters),
/* harmony export */   "BandParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.BandParameters),
/* harmony export */   "Colorbar": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.Colorbar),
/* harmony export */   "DeformParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.DeformParameters),
/* harmony export */   "EdgesParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.EdgesParameters),
/* harmony export */   "FailurePlanesParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.FailurePlanesParameters),
/* harmony export */   "FractureType": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.FractureType),
/* harmony export */   "IsoBand": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.IsoBand),
/* harmony export */   "IsoContoursParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.IsoContoursParameters),
/* harmony export */   "LinesetParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.LinesetParameters),
/* harmony export */   "LinesetParameters2": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.LinesetParameters2),
/* harmony export */   "PaintParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.PaintParameters),
/* harmony export */   "PointsetParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.PointsetParameters),
/* harmony export */   "SkinParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.SkinParameters),
/* harmony export */   "SurfaceParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.SurfaceParameters),
/* harmony export */   "TubeVectorsParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.TubeVectorsParameters),
/* harmony export */   "VectorsParameters": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.VectorsParameters),
/* harmony export */   "createBBox": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createBBox),
/* harmony export */   "createBand": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createBand),
/* harmony export */   "createEdges": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createEdges),
/* harmony export */   "createFailurePlanes": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createFailurePlanes),
/* harmony export */   "createIsoContours": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createIsoContours),
/* harmony export */   "createLineset": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createLineset),
/* harmony export */   "createLineset2": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createLineset2),
/* harmony export */   "createNormals": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createNormals),
/* harmony export */   "createPointset": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createPointset),
/* harmony export */   "createSurface": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createSurface),
/* harmony export */   "createSurfaceBorders": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createSurfaceBorders),
/* harmony export */   "createTubeVectors": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createTubeVectors),
/* harmony export */   "createVectors": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.createVectors),
/* harmony export */   "deform": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.deform),
/* harmony export */   "paintAttribute": () => (/* reexport safe */ _skins__WEBPACK_IMPORTED_MODULE_0__.paintAttribute),
/* harmony export */   "generateIsos": () => (/* reexport safe */ _utils_generateIsos__WEBPACK_IMPORTED_MODULE_1__.generateIsos),
/* harmony export */   "generateIsosByNumber": () => (/* reexport safe */ _utils_generateIsos__WEBPACK_IMPORTED_MODULE_1__.generateIsosByNumber),
/* harmony export */   "generateIsosBySpacing": () => (/* reexport safe */ _utils_generateIsos__WEBPACK_IMPORTED_MODULE_1__.generateIsosBySpacing),
/* harmony export */   "ColorMap": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.ColorMap),
/* harmony export */   "ScaleBar": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.ScaleBar),
/* harmony export */   "addColorMap": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.addColorMap),
/* harmony export */   "addColorToBufferGeometry": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.addColorToBufferGeometry),
/* harmony export */   "colorMapNames": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.colorMapNames),
/* harmony export */   "createBufferGeometry": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createBufferGeometry),
/* harmony export */   "createLut": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createLut),
/* harmony export */   "evaluate_cmap": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.evaluate_cmap),
/* harmony export */   "fromValueToColor": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.fromValueToColor),
/* harmony export */   "fromValuesToColors": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.fromValuesToColors),
/* harmony export */   "generateColorMap": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.generateColorMap),
/* harmony export */   "getColorMap": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getColorMap),
/* harmony export */   "getColorMapNames": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getColorMapNames),
/* harmony export */   "lerp": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.lerp),
/* harmony export */   "mergeBufferAttributes": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.mergeBufferAttributes),
/* harmony export */   "mergeBufferGeometries": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.mergeBufferGeometries),
/* harmony export */   "normalAttribute": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.normalAttribute)
/* harmony export */ });
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins */ "./lib/skins/index.ts");
/* harmony import */ var _utils_generateIsos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/generateIsos */ "./lib/utils/generateIsos.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./lib/utils/index.ts");


// export * from './streamlines2/streamlines2D'



/***/ }),

/***/ "./lib/skins/colorbar.ts":
/*!*******************************!*\
  !*** ./lib/skins/colorbar.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colorbar": () => (/* binding */ Colorbar)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_colorMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/colorMap */ "./lib/utils/colorMap.ts");


class Colorbar {
    constructor({ lutName, x = 0.5, y = 0, z = 1, min = 0, max = 1, nbr = 32 }) {
        this.render = (renderer) => {
            //if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
            //}
        };
        this.lut = new _utils_colorMap__WEBPACK_IMPORTED_MODULE_1__.ColorMap(lutName, nbr);
        this.sprite = new three__WEBPACK_IMPORTED_MODULE_0__.Sprite(new three__WEBPACK_IMPORTED_MODULE_0__.SpriteMaterial({
            map: new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(this.lut.createCanvas())
        }));
        this.sprite.scale.x = 0.125;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.scene.add(this.sprite);
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera(-1, 1, 1, -1, 1, 2); // left, right, top, bottom, near, far
        this.camera.position.set(x, y, z);
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
            alpha: true
        });
        this.renderer.setSize(this.lut.canvas.offsetWidth, this.lut.canvas.offsetHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.update(lutName, min, max);
    }
    update(lutName, min, max) {
        this.lut.setColorMap(lutName, 32);
        this.lut.setMax(max);
        this.lut.setMin(min);
        const map = this.sprite.material.map;
        this.lut.updateCanvas(map.image);
        map.needsUpdate = true;
    }
}


/***/ }),

/***/ "./lib/skins/createBBox.ts":
/*!*********************************!*\
  !*** ./lib/skins/createBBox.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BBoxParameters": () => (/* binding */ BBoxParameters),
/* harmony export */   "createBBox": () => (/* binding */ createBBox)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");


/**
 * @example
 * ```ts
 * const p = new BBoxParameters({
 *     color: '#000000',
 *     visible: false
 * })
 * ```
 * @category Skin Parameters
 * @see [[createBBox]]
 */
class BBoxParameters extends _skinParameters__WEBPACK_IMPORTED_MODULE_1__.SkinParameters {
    constructor({ color, linewidth, ...others } = {}) {
        super(others);
        this.color = color || '#000000';
        this.linewidth = linewidth || 0.1;
    }
}
/**
 * @brief Place a bounding box (lines) around an object
 * @example
 * ```ts
 * const s = createBBox({
 *      object: scene,
 *      parameters: new BBoxParameters({
 *          color: '#000000',
 *          visible: false
 *      })
 * })
 * ```
 * @category Skins
 */
function createBBox(object, parameters) {
    if (object === undefined)
        throw new Error('object is undefined');
    if (parameters === undefined)
        parameters = new BBoxParameters();
    const bbox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(object);
    const size = bbox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3);
    const min = Math.min(size.x, size.y, size.z);
    const max = Math.max(size.x, size.y, size.z);
    if (min === 0) {
        bbox.expandByScalar(max / 1e5);
    }
    const skin = new three__WEBPACK_IMPORTED_MODULE_0__.Box3Helper(bbox, new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color));
    skin.material['linewidth'] = parameters.linewidth;
    skin["pickable"] = false;
    return skin;
}


/***/ }),

/***/ "./lib/skins/createBand.ts":
/*!*********************************!*\
  !*** ./lib/skins/createBand.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BandParameters": () => (/* binding */ BandParameters),
/* harmony export */   "createBand": () => (/* binding */ createBand)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");
/* harmony import */ var _private_IsoBand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private/IsoBand */ "./lib/skins/private/IsoBand.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./lib/utils/index.ts");




class BandParameters extends _skinParameters__WEBPACK_IMPORTED_MODULE_1__.SkinParameters {
    constructor({ color, opacity, from, to, scale, ...others }) {
        super(others);
        this.color = '#ffffff';
        this.opacity = 1;
        this.from = 0;
        this.to = 1;
        this.scale = 1;
        this.color = (color !== undefined ? color : '#00ff00');
        if (opacity !== undefined)
            this.opacity = opacity;
        if (from !== undefined)
            this.from = from;
        if (to !== undefined)
            this.to = to;
        if (scale !== undefined)
            this.scale = scale;
    }
}
/**
 * This skin create neutral zones where principal stresses is close to isotropic, i.e.,
 * when the material body is under equal compression or tension in all directions.
 * User has to possibility to prescribe a percent for which the stress is considered
 * isotropic. The support must be a triangulated surface.
 * @category Skins
 */
function createBand(mesh, attribute, { material = undefined, parameters }) {
    if (mesh === undefined) {
        throw new Error('mesh is undefined');
    }
    if (mesh.geometry === undefined) {
        throw new Error('mesh.geometry is undefined');
    }
    if (mesh.geometry instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry === false) {
        throw new Error('mesh.geometry is not a BufferGeometry');
    }
    if (mesh.geometry.getAttribute('position') === undefined) {
        throw new Error('mesh.geometry.position is undefined');
    }
    if (mesh.geometry.index === null) {
        throw new Error('mesh.geometry.index is null');
    }
    if (attribute === undefined) {
        console.warn('attribute is undefined');
        return undefined;
    }
    if (attribute.itemSize !== 1) {
        console.warn('attribute must be a scalar (itemSize = 1)');
        return undefined;
    }
    if (material === undefined) {
        material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({
            color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color),
            side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
            vertexColors: false,
            wireframe: false,
            flatShading: true // <--------------------------------- FLAT for the moment
        });
    }
    material.polygonOffset = true;
    material.polygonOffsetFactor = 1;
    if (parameters.opacity !== 1) {
        material.opacity = parameters.opacity;
        material.transparent = true;
    }
    else {
        material.transparent = false;
    }
    const band = new _private_IsoBand__WEBPACK_IMPORTED_MODULE_2__.IsoBand(mesh.geometry);
    band.debug = false;
    const r = band.run(attribute, parameters.from, parameters.to);
    const sc = parameters.scale;
    // Translate positions according to the normal using scale')
    const pos = r.positions.map((p, i) => {
        const n = r.normals.itemAt(i);
        return p.map((x, i) => x + n[i] * sc);
    });
    const nmesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh();
    nmesh.geometry = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createBufferGeometry)(pos, r.indices);
    nmesh.geometry.setAttribute('normal', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(r.normals.array, 3));
    nmesh.material = material;
    return nmesh;
}


/***/ }),

/***/ "./lib/skins/createEdges.ts":
/*!**********************************!*\
  !*** ./lib/skins/createEdges.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdgesParameters": () => (/* binding */ EdgesParameters),
/* harmony export */   "createEdges": () => (/* binding */ createEdges)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./lib/skins/index.ts");


class EdgesParameters extends ___WEBPACK_IMPORTED_MODULE_1__.SkinParameters {
    constructor({ color, linewidth, thresholdAngle, ...others } = {}) {
        super(others);
        this.color = color || '#000000';
        this.linewidth = linewidth || 0.1;
        this.thresholdAngle = thresholdAngle || 1;
    }
}
function createEdges(geometry, params = undefined) {
    params = params === undefined ? new EdgesParameters : params;
    const edges = new three__WEBPACK_IMPORTED_MODULE_0__.EdgesGeometry(geometry, params.thresholdAngle);
    return new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments(edges, new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(params.color) }));
}


/***/ }),

/***/ "./lib/skins/createFailurePlanes.ts":
/*!******************************************!*\
  !*** ./lib/skins/createFailurePlanes.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FractureType": () => (/* binding */ FractureType),
/* harmony export */   "FailurePlanesParameters": () => (/* binding */ FailurePlanesParameters),
/* harmony export */   "createFailurePlanes": () => (/* binding */ createFailurePlanes)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./lib/utils/index.ts");
/* harmony import */ var _paintAttribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paintAttribute */ "./lib/skins/paintAttribute.ts");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @youwol/math */ "../node_modules/@youwol/math/dist/@youwol/math.js");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_4__);





var FractureType;
(function (FractureType) {
    FractureType[FractureType["JOINT"] = 0] = "JOINT";
    FractureType[FractureType["STYLOLITE"] = 1] = "STYLOLITE";
    FractureType[FractureType["FAULT"] = 2] = "FAULT";
    FractureType[FractureType["DYKE"] = 3] = "DYKE";
})(FractureType || (FractureType = {}));
class FailurePlanesParameters extends _paintAttribute__WEBPACK_IMPORTED_MODULE_3__.PaintParameters {
    constructor({ paintAttribute = '', type, circle = true, color = '#aaaaaa', friction = 30, borders = false, size = 1, stress = 'stress', sizeAttribute = '', ...others } = {}) {
        super(others);
        this.type = type !== undefined ? type : FractureType.JOINT;
        this.color = color || '#aaaaaa';
        this.friction = friction !== undefined ? friction : 0.3;
        this.size = size !== undefined ? size : 10;
        this.stress = stress;
        this.sizeAttribute = sizeAttribute;
        this.circle = circle !== undefined ? circle : true;
        this.borders = borders !== undefined ? borders : false;
        this.paintAttribute = paintAttribute !== undefined ? paintAttribute : '';
    }
}
function createFailurePlanes({ geometry, material, dataframe, parameters }) {
    const position = geometry.getAttribute('position');
    if (position === undefined)
        throw new Error('geometry.position is undefined');
    const stress = dataframe.series[parameters.stress];
    if (stress === undefined)
        throw new Error('stress Serie is undefined');
    const bbox = new three__WEBPACK_IMPORTED_MODULE_1__.Box3().setFromBufferAttribute(position);
    const size = bbox.getSize(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3());
    const eltSize = Math.max(size.x, size.y, size.z) / 50;
    const defaultSize = eltSize * parameters.size / 100;
    const minSize = eltSize * .1;
    let fricAngle = parameters.friction * Math.PI / 180.;
    if (parameters.type !== FractureType.FAULT) {
        fricAngle = 0;
    }
    let primitive = undefined;
    if (parameters.circle === true) {
        primitive = createDiscPrimitive(fricAngle, parameters.type);
    }
    else {
        primitive = createPlanePrimitive(fricAngle, parameters.type);
    }
    const mng = new _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Manager(dataframe, [
        new _youwol_math__WEBPACK_IMPORTED_MODULE_4__.ComponentDecomposer,
        new _youwol_math__WEBPACK_IMPORTED_MODULE_4__.EigenValuesDecomposer
    ]);
    const sizeAttr = mng.serie(1, parameters.sizeAttribute);
    const scalars = mng.serie(1, parameters.paintAttribute);
    if (material === undefined) {
        material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({
            // material = new MeshStandardMaterial({
            color: new three__WEBPACK_IMPORTED_MODULE_1__.Color(parameters.color),
            side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
            vertexColors: scalars !== undefined ? true : false,
            wireframe: false,
            flatShading: true
        });
    }
    let deltaSize = 1;
    let mm = [0, 1];
    if (sizeAttr) {
        mm = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_4__.minMax)(sizeAttr);
        deltaSize = mm[1] - mm[0];
    }
    const geometries = [];
    const matrix = new three__WEBPACK_IMPORTED_MODULE_1__.Matrix4();
    const eigv = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_4__.eigenVector)(stress);
    const rot = new three__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
    eigv.forEach((vectors, i) => {
        const pos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(position.getX(i), position.getY(i), position.getZ(i));
        let s = defaultSize;
        if (sizeAttr) {
            s *= (sizeAttr.array[i] - mm[0]) / deltaSize;
        }
        if (parameters.type === FractureType.FAULT) {
            const m = new three__WEBPACK_IMPORTED_MODULE_1__.Matrix4();
            m.set(vectors[0], vectors[3], vectors[6], 0, vectors[1], vectors[4], vectors[7], 0, vectors[2], vectors[5], vectors[8], 0, 0, 0, 0, 1);
            rot.setFromRotationMatrix(m);
        }
        else if (parameters.type === FractureType.JOINT || parameters.type === FractureType.DYKE) {
            rot.setFromUnitVectors(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1), new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(vectors[0], vectors[1], vectors[2]));
        }
        else if (parameters.type === FractureType.STYLOLITE) {
            rot.setFromUnitVectors(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1), new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(vectors[3], vectors[4], vectors[5]));
        }
        const sc = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(s, s, s);
        matrix.compose(pos, rot, sc);
        const instanceGeometry = primitive.clone();
        instanceGeometry.applyMatrix4(matrix);
        // console.log(instanceGeometry)
        geometries.push(instanceGeometry);
    });
    const mergedGeometry = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.mergeBufferGeometries)(geometries, true);
    if (scalars) {
        let v2c = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fromValuesToColors)(scalars.array, {
            defaultColor: new three__WEBPACK_IMPORTED_MODULE_1__.Color(parameters.defaultColor),
            reverse: parameters.reverseLut,
            min: parameters.min,
            max: parameters.max,
            lut: parameters.lut,
            duplicateLut: parameters.duplicateLut,
            lockLut: parameters.lockLut
        });
        const N = primitive.getAttribute('position').count;
        const colors = [];
        scalars.forEach((s, i) => {
            const c1 = v2c[3 * i];
            const c2 = v2c[3 * i + 1];
            const c3 = v2c[3 * i + 2];
            //const c = v2c.color(s)
            for (let j = 0; j < N; ++j) {
                colors.push(c1, c2, c3);
            }
        });
        mergedGeometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_1__.Float32BufferAttribute(colors, 3));
    }
    return new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(mergedGeometry, material);
}
// ------------------------------------------------
function deg2rad(a) { return a * Math.PI / 180; }
function createPrimitive(geom1, fric, type) {
    if (type === FractureType.FAULT) {
        const ang = deg2rad(45.0 - fric / 2.0);
        var geom2 = geom1.clone();
        geom1.rotateY(ang);
        geom2.rotateY(-ang);
        return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.mergeBufferGeometries)([geom1, geom2], false);
    }
    return geom1;
}
function createPlanePrimitive(fric, type) {
    return createPrimitive(new three__WEBPACK_IMPORTED_MODULE_1__.PlaneBufferGeometry(1, 1, 1, 1), fric, type);
}
function createDiscPrimitive(fric, type) {
    return createPrimitive(new three__WEBPACK_IMPORTED_MODULE_1__.CircleBufferGeometry(0.5, 30), fric, type);
}
// function createTrucPrimitive(fric: number) {
//     return createPrimitive(new TorusKnotBufferGeometry(1, 0.3, 100, 16 ), fric)
// }


/***/ }),

/***/ "./lib/skins/createIsoContourFilled.ts":
/*!*********************************************!*\
  !*** ./lib/skins/createIsoContourFilled.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIsoContourFilled": () => (/* binding */ createIsoContourFilled)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./lib/utils/index.ts");
/* harmony import */ var _private_IsoContoursFill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private/IsoContoursFill */ "./lib/skins/private/IsoContoursFill.ts");



/**
 * @example
 * ```ts
 * const skin = createIsoContourFilled({
 *     geometry : mesh.geometry,
 *     attribute: dataframe.get('u'),
 *     parameters: new IsoContoursFilledParameters({
 *         lut: 'Insar',
 *         isoList: [1, 2, 3, 4, 7],
 *         min; 2,
 *         max: 10
 *     })
 * })
 *
 * scene.add(skin)
 * ```
 * @category Skins
 */
function createIsoContourFilled(mesh, attribute, { material, parameters }) {
    if (mesh === undefined) {
        throw new Error('mesh is undefined');
    }
    if (mesh.geometry === undefined) {
        throw new Error('mesh.geometry is undefined');
    }
    if (mesh.geometry instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry === false) {
        throw new Error('mesh.geometry is not a BufferGeometry');
    }
    if (mesh.geometry.getAttribute('position') === undefined) {
        throw new Error('mesh.geometry.position is undefined');
    }
    if (mesh.geometry.index === null) {
        throw new Error('mesh.geometry.index is null');
    }
    if (attribute === undefined) {
        throw new Error('attribute is undefined');
    }
    if (attribute.itemSize !== 1) {
        throw new Error('attribute must be a scalar attribute (itemSize = 1)');
    }
    const iso = new _private_IsoContoursFill__WEBPACK_IMPORTED_MODULE_2__.IsoContoursFill(parameters);
    const result = iso.run(attribute, mesh.geometry);
    if (result.position.length === 0)
        return undefined;
    const nmesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh();
    //nmesh.castShadow = true
    nmesh.geometry = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createBufferGeometry)(result.position, result.index);
    nmesh.geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(result.color, 3));
    nmesh.geometry.setAttribute('normal', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(result.normal, 3));
    if (material !== undefined) {
        nmesh.material = material;
    }
    else {
        const mat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({
            color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color),
            side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
            vertexColors: true,
            wireframe: false,
            flatShading: false
        });
        //mat.wireframe = true
        nmesh.material = mat;
    }
    nmesh.material.polygonOffset = true;
    nmesh.material.polygonOffsetFactor = 1;
    if (parameters.opacity !== 1) {
        nmesh.material.opacity = parameters.opacity;
        nmesh.material.transparent = true;
    }
    else {
        nmesh.material.transparent = false;
    }
    //nmesh.geometry.computeVertexNormals()
    return nmesh;
}


/***/ }),

/***/ "./lib/skins/createIsoContourLines.ts":
/*!********************************************!*\
  !*** ./lib/skins/createIsoContourLines.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIsoContourLines": () => (/* binding */ createIsoContourLines)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _private_MarchingTriangles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private/MarchingTriangles */ "./lib/skins/private/MarchingTriangles.ts");
/* harmony import */ var _utils_lerp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/lerp */ "./lib/utils/lerp.ts");




/**
 * @example
 * ```ts
 * const skin = createIsoContourLines({
 *     geometry : mesh.geometry,
 *     attribute: dataframe.get('u'),
 *     parameters: new IsoContoursLineParameters({
 *         color: '#999900',
 *         isoList: [1,2,4],
 *         min; 0.2,
 *         max: 0.8
 *     })
 * })
 *
 * scene.add( skin )
 * ```
 * @category Skins
 */
function createIsoContourLines(mesh, attribute, { material, parameters }) {
    if (mesh === undefined) {
        throw new Error('mesh is undefined');
    }
    if (mesh.geometry === undefined) {
        throw new Error('mesh.geometry is undefined');
    }
    if (mesh.geometry instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry === false) {
        throw new Error('mesh.geometry is not a BufferGeometry');
    }
    if (mesh.geometry.getAttribute('position') === undefined) {
        throw new Error('mesh.geometry.position is undefined');
    }
    if (mesh.geometry.index === null) {
        throw new Error('mesh.geometry.index is null');
    }
    if (attribute === undefined) {
        throw new Error('attribute is undefined');
    }
    if (attribute.itemSize !== 1) {
        throw new Error('attribute must be a scalar attribute (itemSize = 1)');
    }
    if (material === undefined) {
        material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
            linewidth: 1,
            linecap: 'round',
            linejoin: 'round' // ignored by WebGLRenderer
        });
    }
    material["color"] = new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.lineColor);
    const minmax = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_1__.array.minMax(attribute.array);
    const vmin = minmax[0];
    const vmax = minmax[1];
    const isoValues = parameters.isoList;
    const algo = new _private_MarchingTriangles__WEBPACK_IMPORTED_MODULE_2__.MarchingTriangles();
    algo.setup(mesh.geometry.index, [(0,_utils_lerp__WEBPACK_IMPORTED_MODULE_3__.lerp)(0, vmin, vmax), (0,_utils_lerp__WEBPACK_IMPORTED_MODULE_3__.lerp)(1, vmin, vmax)]);
    const vertices = mesh.geometry.getAttribute('position');
    const positions = [];
    let index = 0;
    for (let i = 0; i < isoValues.length; ++i) {
        if (isoValues[i] < parameters.min || isoValues[i] > parameters.max)
            continue;
        let result = algo.isolines(attribute, isoValues[i]);
        for (let k = 0; k < result[0].length; ++k) {
            for (let l = 0; l < result[0][k].length - 2; l += 2) {
                let i1 = result[0][k][l];
                let i2 = result[0][k][l + 1];
                let c = result[1][k][l / 2];
                let v1x = vertices.getX(i1);
                let v1y = vertices.getY(i1);
                let v1z = vertices.getZ(i1);
                let v2x = vertices.getX(i2);
                let v2y = vertices.getY(i2);
                let v2z = vertices.getZ(i2);
                positions.push(v1x + c * (v2x - v1x), v1y + c * (v2y - v1y), v1z + c * (v2z - v1z));
                index += 3;
            }
        }
    }
    const geom = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
    geom.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions, 3));
    // if (parameters.useTable) {
    //     geom.setAttribute('color', new Float32BufferAttribute(colors, 3))
    // }
    const skin = new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments(geom, material);
    // if (parameters.useTable) {
    //     skin.material["vertexColors"] = VertexColors
    //     skin.geometry["attributes"].color.needsUpdate = true;
    // }
    skin["pickable"] = false;
    skin.frustumCulled = false;
    return skin;
}


/***/ }),

/***/ "./lib/skins/createIsoContours.ts":
/*!****************************************!*\
  !*** ./lib/skins/createIsoContours.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIsoContours": () => (/* binding */ createIsoContours)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createIsoContourLines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createIsoContourLines */ "./lib/skins/createIsoContourLines.ts");
/* harmony import */ var _createIsoContourFilled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createIsoContourFilled */ "./lib/skins/createIsoContourFilled.ts");



/**
 * @example
 * Create 2 iso-contours: one filled and one with lines
 * ```js
 * scene.add( kepler.createIsoContours(
 *   surface,
 *   df.get(surfaceInfo.attr), {
 *      parameters: new kepler.IsoContoursParameters({
 *          color: '#ffffff',
 *          nbr: 10,
 *          filled: true
 *      })
 *   })
 * )
 *
 * scene.add( kepler.createIsoContours(
 *   surface,
 *   df.get(surfaceInfo.attr), {
 *      parameters: new kepler.IsoContoursParameters({
 *          color: '#000000',
 *          nbr: 10,
 *          filled: false
 *      })
 *   })
 * )
 * ```
 * @category Skins
 */
function createIsoContours(mesh, attribute, { material, parameters } = {}) {
    const both = parameters.filled && parameters.lined;
    if (both) {
        const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
        const skin1 = (0,_createIsoContourFilled__WEBPACK_IMPORTED_MODULE_2__.createIsoContourFilled)(mesh, attribute, { material, parameters });
        if (skin1)
            group.add(skin1);
        const skin2 = (0,_createIsoContourLines__WEBPACK_IMPORTED_MODULE_1__.createIsoContourLines)(mesh, attribute, { material, parameters });
        if (skin2)
            group.add(skin2);
        return group;
    }
    if (parameters.filled) {
        return (0,_createIsoContourFilled__WEBPACK_IMPORTED_MODULE_2__.createIsoContourFilled)(mesh, attribute, { material, parameters });
    }
    else {
        return (0,_createIsoContourLines__WEBPACK_IMPORTED_MODULE_1__.createIsoContourLines)(mesh, attribute, { material, parameters });
    }
}


/***/ }),

/***/ "./lib/skins/createLineset.ts":
/*!************************************!*\
  !*** ./lib/skins/createLineset.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinesetParameters": () => (/* binding */ LinesetParameters),
/* harmony export */   "createLineset": () => (/* binding */ createLineset)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./lib/utils/index.ts");
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");



/**
 * @see [[createLineset]]
 * @category Skin Parameters
 */
class LinesetParameters extends _skinParameters__WEBPACK_IMPORTED_MODULE_2__.SkinParameters {
    constructor({ lineWidth, color, opacity, transparent, useTube, tubeRadius, ...others } = {}) {
        super(others);
        this.transparent = false;
        this.useTube = false;
        this.tubeRadius = 1;
        this.lineWidth = lineWidth || 1;
        this.color = color || '#000000';
        this.opacity = opacity || 1;
        this.set('transparent', transparent, this.transparent);
        this.useTube = useTube !== undefined ? useTube : false;
        this.tubeRadius = tubeRadius !== undefined ? tubeRadius : 1;
    }
}
// -------------------------------------------------------
/**
 * @see [[LinesetParameters]]
 * @category Skins
 */
function createLineset({ position, material, parameters }) {
    if (position === undefined) {
        throw new Error('geometry is undefined');
    }
    if (!(position instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry) && position.itemSize !== 3) {
        throw new Error(`position should have itemSize = 3 (got ${position.itemSize})`);
    }
    if (parameters === undefined) {
        parameters = new LinesetParameters();
    }
    if (parameters.useTube === true) {
        const vecs = [];
        let p = undefined;
        if (position instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry) {
            p = position.getAttribute('position').array;
        }
        else {
            p = position.array;
        }
        for (let i = 0; i < p.length; i += 3) {
            vecs.push(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(p[i], p[i + 1], p[i + 2]));
        }
        let count = p.length / 3;
        const path = new three__WEBPACK_IMPORTED_MODULE_0__.CatmullRomCurve3(vecs);
        // TubeGeometry(path, tubularSegments, radius, radialSegments)
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.TubeGeometry(path, count < 20 ? 20 : count, parameters.tubeRadius, 10, false);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color) });
        return new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
    }
    const geometry = (position instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry ? position : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createBufferGeometry)(position));
    if (material === undefined) {
        material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
            //linewidth: parameters.lineWidth, 
            // opacity: parameters.opacity, 
            // transparent: parameters.transparent,
            color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color)
        });
    }
    return new three__WEBPACK_IMPORTED_MODULE_0__.Line(geometry, material);
}


/***/ }),

/***/ "./lib/skins/createLineset2.ts":
/*!*************************************!*\
  !*** ./lib/skins/createLineset2.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinesetParameters2": () => (/* binding */ LinesetParameters2),
/* harmony export */   "createLineset2": () => (/* binding */ createLineset2)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three_examples_jsm_lines_Line2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/lines/Line2.js */ "../node_modules/three/examples/jsm/lines/Line2.js");
/* harmony import */ var three_examples_jsm_lines_LineMaterial_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/lines/LineMaterial.js */ "../node_modules/three/examples/jsm/lines/LineMaterial.js");
/* harmony import */ var three_examples_jsm_lines_LineGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/lines/LineGeometry.js */ "../node_modules/three/examples/jsm/lines/LineGeometry.js");
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");





/**
 * Line rendering based on [this example](https://threejs.org/examples/?q=line#webgl_lines_fat)
 * @see [[createLineset2]]
 * @category Skin Parameters
 */
class LinesetParameters2 extends _skinParameters__WEBPACK_IMPORTED_MODULE_1__.SkinParameters {
    constructor({ width, color, opacity, transparent, glLine, worldUnits, dashed, dashScale, ...others } = {}) {
        super(others);
        this.width = 0.005;
        this.transparent = false;
        this.glLine = false;
        this.worldUnits = false;
        this.dashed = false;
        this.dashScale = 1;
        this.width = width || 0.005;
        this.color = color || '#000000';
        this.opacity = opacity || 1;
        this.set('transparent', transparent, this.transparent);
        this.glLine = glLine !== undefined ? glLine : false;
        this.worldUnits = worldUnits !== undefined ? worldUnits : false;
        this.dashed = dashed !== undefined ? dashed : false;
        this.dashScale = dashScale !== undefined ? dashScale : 1;
    }
}
/**
 * @see [[LinesetParameters2]]
 * @category Skins
 */
function createLineset2({ position, parameters }) {
    if (position === undefined)
        throw new Error('geometry is undefined');
    if (!(position instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry) && position.itemSize !== 3)
        throw new Error(`position should have itemSize = 3 (got ${position.itemSize})`);
    if (parameters === undefined)
        parameters = new LinesetParameters2();
    const geometry = new three_examples_jsm_lines_LineGeometry_js__WEBPACK_IMPORTED_MODULE_2__.LineGeometry();
    let a = undefined;
    if (position instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry) {
        a = position.getAttribute('position').array;
    }
    else {
        a = position.array;
    }
    if (a instanceof Float32Array) {
        geometry.setPositions(a);
    }
    else if (Array.isArray(a)) {
        geometry.setPositions(a);
    }
    const material = new three_examples_jsm_lines_LineMaterial_js__WEBPACK_IMPORTED_MODULE_3__.LineMaterial({
        linewidth: parameters.width,
        vertexColors: false,
        // resolution:  // to be set by renderer, eventually
        // worldUnits: true,
        alphaToCoverage: false
    });
    material.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color);
    material.opacity = parameters.opacity;
    material.dashed = parameters.dashed;
    material.dashScale = parameters.dashScale;
    const line = new three_examples_jsm_lines_Line2_js__WEBPACK_IMPORTED_MODULE_4__.Line2(geometry, material);
    line.computeLineDistances();
    line.scale.set(1, 1, 1);
    return line;
}


/***/ }),

/***/ "./lib/skins/createPointset.ts":
/*!*************************************!*\
  !*** ./lib/skins/createPointset.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsetParameters": () => (/* binding */ PointsetParameters),
/* harmony export */   "createPointset": () => (/* binding */ createPointset)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./lib/utils/index.ts");



/**
 * @see [[createPointset]]
 * @category Skin Parameters
 */
class PointsetParameters extends _skinParameters__WEBPACK_IMPORTED_MODULE_1__.SkinParameters {
    constructor({ size, color, sizeAttenuation, opacity, transparent, sprite, sizeName, ...others } = {}) {
        super(others);
        this.sizeAttenuation = false;
        this.transparent = false;
        this.size = size || 1;
        this.color = color || '#ffff00';
        this.opacity = opacity || 1;
        this.sprite = sprite || '';
        //this.shadingName = shadingName || ''
        this.sizeName = sizeName || '';
        this.set('sizeAttenuation', sizeAttenuation, this.sizeAttenuation);
        this.set('transparent', transparent, this.transparent);
    }
}
// -------------------------------------------------------
/**
 * @category Skins
 */
function createPointset({ position, material, parameters }) {
    if (position === undefined) {
        throw new Error('position is undefined');
    }
    if (!(position instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry) && position.itemSize !== 3) {
        throw new Error(`position should have itemSize = 3 (got ${position.itemSize})`);
    }
    if (parameters === undefined) {
        parameters = new PointsetParameters();
    }
    const geometry = position instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry ? position : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createBufferGeometry)(position);
    // Check the default point size
    let tsize = parameters.size;
    if (parameters.sizeAttenuation) {
        const bbox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
        bbox.setFromBufferAttribute(geometry.getAttribute('position'));
        const size = bbox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());
        tsize = Math.max(size.x, size.y, size.z) / 400 * parameters.size;
    }
    let sprite = undefined;
    if (parameters.sprite !== '') {
        sprite = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(parameters.sprite);
    }
    let color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color);
    if (material === undefined) {
        material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
            size: tsize,
            sizeAttenuation: parameters.sizeAttenuation,
            opacity: parameters.opacity,
            transparent: parameters.transparent,
            color: color,
        });
    }
    if (sprite) {
        material["map"] = sprite;
        material.alphaTest = 0.5;
        material.transparent = true;
    }
    return new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry, material);
}


/***/ }),

/***/ "./lib/skins/createSurface.ts":
/*!************************************!*\
  !*** ./lib/skins/createSurface.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurfaceParameters": () => (/* binding */ SurfaceParameters),
/* harmony export */   "createSurface": () => (/* binding */ createSurface)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./lib/utils/index.ts");



/**
 * @see [[createSurface]]
 * @category Skin Parameters
 */
class SurfaceParameters extends _skinParameters__WEBPACK_IMPORTED_MODULE_1__.SkinParameters {
    constructor({ color = '#aaaaaa', flat = false, opacity = 1, wireframe = false, creaseAngle = 0, ...others } = {}) {
        super(others);
        this.opacity = 1;
        this.flat = false;
        this.wireframe = false;
        this.creaseAngle = 0;
        this.color = color || '#aaaaaa';
        this.flat = (flat !== undefined ? flat : false);
        if (opacity !== undefined)
            this.opacity = opacity;
        if (wireframe !== undefined)
            this.wireframe = wireframe;
        if (creaseAngle !== undefined)
            this.creaseAngle = creaseAngle * Math.PI / 180;
    }
}
/**
 * @brief Generate a 3D surface from positions and indices
 * @example
 * ```ts
 * const surface = createSurface({
 *     positions: dataframe.get('positions'),
 *     indices  : dataframe.get('indices'),
 *     parameters: new SurfaceParameters({
 *         color: '#ff0000',
 *         flat: true,
 *         opacity: 0.7,
 *         creaseAngle: 30 // in degrees
 *     })
 * })
 *
 * const attribute = dataframe.get('U').map( u => u[0] )
 * paintAttribute(surface, attribute )
 *
 * const skin = createIsoContourLines({
 *     geometry : surface.geometry,
 *     attribute: attribute,
 *     parameters: new IsoContoursParameters({
 *         color: '#999900',
 *         nbr: 10,
 *         min; 0.2,
 *         max: 0.8
 *     })
 * })
 *
 * scene.add( surface )
 * surface.add( skin )
 * ```
 * @category Skins
 */
function createSurface({ positions, indices, material, parameters }) {
    if (positions === undefined)
        throw new Error('positions is undefined');
    if (indices === undefined)
        throw new Error('indices is undefined');
    if (parameters === undefined) {
        parameters = new SurfaceParameters();
    }
    const mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh();
    let color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color);
    mesh.geometry = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createBufferGeometry)(positions, indices, parameters.creaseAngle);
    if (material) {
        mesh.material = material;
    }
    else {
        mesh.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({
            color: color,
            side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
            vertexColors: false,
            wireframe: parameters.wireframe,
            flatShading: parameters.flat,
            // emissive: 0x0c0c0, 
            // specular: 0x050505,
            // shininess: 500, 
        });
    }
    mesh.material.polygonOffset = true;
    mesh.material.polygonOffsetFactor = 1;
    // mesh.materialdepthWrite = false
    // mesh.materialdepthTest = true
    // mesh.materialpolygonOffsetUnits = 1
    if (parameters.opacity !== 1) {
        mesh.material.opacity = parameters.opacity;
        mesh.material.transparent = true;
    }
    else {
        mesh.material.transparent = false;
    }
    mesh.material.needsUpdate = true;
    mesh.geometry.computeBoundingBox();
    //mesh.castShadow = true
    return mesh;
}


/***/ }),

/***/ "./lib/skins/createSurfaceBorders.ts":
/*!*******************************************!*\
  !*** ./lib/skins/createSurfaceBorders.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSurfaceBorders": () => (/* binding */ createSurfaceBorders)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/geometry */ "@youwol/geometry");
/* harmony import */ var _youwol_geometry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_geometry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createLineset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createLineset */ "./lib/skins/createLineset.ts");




// -------------------------------------------------------
// Have to see https://stackoverflow.com/questions/14108553/get-border-edges-of-mesh-in-winding-order
/**
 * @category Skins
 */
function createSurfaceBorders({ mesh, material, parameters }) {
    if (mesh === undefined) {
        throw new Error('mesh is undefined');
    }
    if (mesh.geometry === undefined) {
        throw new Error('mesh.geometry is undefined');
    }
    if (mesh.geometry instanceof three__WEBPACK_IMPORTED_MODULE_2__.BufferGeometry === false) {
        throw new Error('mesh.geometry is not a BufferGeometry');
    }
    if (mesh.geometry.getAttribute('position') === undefined) {
        throw new Error('mesh.geometry.position is undefined');
    }
    if (mesh.geometry.index === null) {
        throw new Error('mesh.geometry.index is null');
    }
    if (parameters === undefined) {
        parameters = new _createLineset__WEBPACK_IMPORTED_MODULE_3__.LinesetParameters();
    }
    // --------------------------------------------------
    const bufferPosition = mesh.geometry.getAttribute('position');
    const bufferIndices = mesh.geometry.index;
    const vertices = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: bufferPosition.array, itemSize: 3 });
    const triangles = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: bufferIndices.array, itemSize: 3 }); // mesh.geometry.index
    // Build the HE-surface (aka, HalfEdge-surface)
    const borders = (0,_youwol_geometry__WEBPACK_IMPORTED_MODULE_1__.extractSurfaceBorders)(vertices, triangles);
    // const surface = Surface.create(vertices, triangles)
    // const borders = surface.bordersAsSerie
    // Fake indices
    const indices = [];
    let id = 0;
    for (let i = 0; i < borders.count / 2; ++i) {
        indices.push(id++, id++);
    }
    const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BufferGeometry();
    geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(new Float32Array(borders.array), 3));
    geometry.setIndex(new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(new Uint16Array(indices), 1));
    if (material === undefined) {
        material = new three__WEBPACK_IMPORTED_MODULE_2__.LineBasicMaterial({
            linewidth: parameters.lineWidth,
            opacity: parameters.opacity,
            transparent: parameters.transparent,
            color: new three__WEBPACK_IMPORTED_MODULE_2__.Color(parameters.color ? parameters.color : "#000")
        });
    }
    return new three__WEBPACK_IMPORTED_MODULE_2__.LineSegments(geometry, material);
}


/***/ }),

/***/ "./lib/skins/createSurfaceNormals.ts":
/*!*******************************************!*\
  !*** ./lib/skins/createSurfaceNormals.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNormals": () => (/* binding */ createNormals)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/math */ "../node_modules/@youwol/math/dist/@youwol/math.js");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createVectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createVectors */ "./lib/skins/createVectors.ts");
/* harmony import */ var _youwol_geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @youwol/geometry */ "@youwol/geometry");
/* harmony import */ var _youwol_geometry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_youwol_geometry__WEBPACK_IMPORTED_MODULE_3__);




function createNormals({ geometry, material, parameters }) {
    if (geometry.index === undefined) {
        throw new Error('not a mesh made of triangles');
    }
    const positions = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: geometry.getAttribute('position').array, itemSize: 3 });
    const indices = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: geometry.index.array, itemSize: 3 });
    const manager = new _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Manager(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({ series: { positions, indices } }), [new _youwol_math__WEBPACK_IMPORTED_MODULE_1__.NormalsDecomposer]);
    const normals = (0,_youwol_geometry__WEBPACK_IMPORTED_MODULE_3__.fromTriangleToNode)({ positions, indices, serie: manager.serie(3, 'normals') });
    return (0,_createVectors__WEBPACK_IMPORTED_MODULE_2__.createVectors)({ geometry, material, parameters, vectorField: normals });
}


/***/ }),

/***/ "./lib/skins/createTubeVectors.ts":
/*!****************************************!*\
  !*** ./lib/skins/createTubeVectors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TubeVectorsParameters": () => (/* binding */ TubeVectorsParameters),
/* harmony export */   "createTubeVectors": () => (/* binding */ createTubeVectors)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./lib/skins/index.ts");



class TubeVectorsParameters extends ___WEBPACK_IMPORTED_MODULE_2__.VectorsParameters {
    constructor({ radius, ...others } = {}) {
        super(others);
        this.radius = 1;
        this.radius = radius !== undefined ? radius : 1;
    }
}
/**
 * @category Skins
 */
function createTubeVectors({ geometry, material, vectorField, attribute, parameters }) {
    if (geometry === undefined)
        throw new Error('geometry is undefined');
    const position = geometry.getAttribute('position');
    if (vectorField === undefined)
        throw new Error('vectorField is undefined');
    if (vectorField.count !== position.count)
        throw new Error('vectorField should have 3 x nb vertices');
    if (parameters === undefined)
        throw new Error('parameters is undefined (needs name of the vector field)');
    if (material === undefined) {
        material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
            color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color),
            vertexColors: false,
            opacity: parameters.opacity,
            transparent: parameters.transparent
        });
        // material = new LineBasicMaterial({
        //     linewidth: parameters.lineWidth, 
        //     opacity: parameters.opacity, 
        //     transparent: parameters.transparent,
        //     color: new Color(parameters.color),
        //     vertexColors: false
        // })
    }
    if (attribute === undefined) {
        material.vertexColors = false;
    }
    else {
        material.vertexColors = true;
    }
    const pos = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_1__.Serie.create({ array: geometry.getAttribute('position').array, itemSize: 3 });
    const s = parameters.scale;
    const vertices = [];
    const vecs = [];
    const g = new three__WEBPACK_IMPORTED_MODULE_0__.Group;
    pos.forEach((p, i) => {
        const u = vectorField.itemAt(i);
        if (parameters.project) {
            u[2] = 0;
        }
        if (parameters.normalize) {
            const l = Math.sqrt(u[0] ** 2 + u[1] ** 2 + u[2] ** 2);
            u[0] /= l;
            u[1] /= l;
            u[2] /= l;
        }
        let path = undefined;
        if (parameters.centered) {
            // centered vector
            path = new three__WEBPACK_IMPORTED_MODULE_0__.CatmullRomCurve3([
                new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(p[0] - s * u[0] / 2, p[1] - s * u[1] / 2, p[2] - s * u[2] / 2),
                new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(p[0] + s * u[0] / 2, p[1] + s * u[1] / 2, p[2] + s * u[2] / 2)
            ]);
        }
        else {
            path = new three__WEBPACK_IMPORTED_MODULE_0__.CatmullRomCurve3([
                new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(p[0], p[1], p[2]),
                new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(p[0] + s * u[0], p[1] + s * u[1], p[2] + s * u[2])
            ]);
        }
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.TubeGeometry(path, 2, parameters.radius, 10, false);
        g.add(new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material));
    });
    // // Coloring the vectors
    // const defaultColor = new Color(parameters.color)
    // const lutTable = createLut(parameters.lut, 256)
    // const mm = attribute ? array.minMax(attribute.array) : [0,1]
    // if (parameters.lockLut) {
    //     lutTable.setMin(0)
    //     lutTable.setMax(1)
    // } else {
    //     lutTable.setMin(mm[0])
    //     lutTable.setMax(mm[1])
    // }
    // const params = {
    //     min: parameters.min, 
    //     max: parameters.max, 
    //     lutTable, 
    //     defaultColor, 
    //     reverse: parameters.reverseLut
    // }
    // if (attribute) {
    //     const colors: number[] = []
    //     attribute.array.forEach( value => {
    //         const c = fromValueToColor(value, params)
    //         for (let i=0; i<2; ++i) {
    //             colors.push(c[0], c[1], c[2])
    //         }
    //     })
    //     lines.geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))
    // }
    // lines.material = material
    return g;
}


/***/ }),

/***/ "./lib/skins/createVectors.ts":
/*!************************************!*\
  !*** ./lib/skins/createVectors.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorsParameters": () => (/* binding */ VectorsParameters),
/* harmony export */   "createVectors": () => (/* binding */ createVectors)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paintAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paintAttribute */ "./lib/skins/paintAttribute.ts");
/* harmony import */ var _utils_lut_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/lut-utils */ "./lib/utils/lut-utils.ts");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./lib/utils/index.ts");





/**
 * @see [[createVectors]]
 * @category Skin Parameters
 */
class VectorsParameters extends _paintAttribute__WEBPACK_IMPORTED_MODULE_1__.PaintParameters {
    constructor({ vector, lineWidth, color, opacity, transparent, scale, normalize, centered, project, translate, ...others } = {}) {
        super(others);
        this.lineWidth = 1;
        this.color = '#000000';
        this.opacity = 1;
        this.transparent = false;
        this.scale = 1;
        this.normalize = false;
        this.project = false;
        this.centered = true;
        this.vector = '';
        this.translate = [0, 0, 0];
        this.vector = vector || '';
        this.lineWidth = lineWidth || 1;
        this.color = color || '#000000';
        this.opacity = opacity || 1;
        this.scale = scale !== undefined ? scale : 1;
        this.translate = translate !== undefined ? translate : [0, 0, 0];
        this.set('transparent', transparent, this.transparent);
        this.set('normalize', normalize, this.normalize);
        this.set('project', project, this.project);
        this.set('centered', centered, this.centered);
    }
}
// -------------------------------------------------------
/**
 * @category Skins
 */
function createVectors({ geometry, material, vectorField, attribute, parameters }) {
    if (geometry === undefined)
        throw new Error('geometry is undefined');
    const position = geometry.getAttribute('position');
    if (vectorField === undefined)
        throw new Error('vectorField is undefined');
    if (vectorField.count !== position.count)
        throw new Error('vectorField should have 3 x nb vertices');
    if (parameters === undefined)
        throw new Error('parameters is undefined (needs name of the vector field)');
    if (material === undefined) {
        material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
            linewidth: parameters.lineWidth,
            opacity: parameters.opacity,
            transparent: parameters.transparent,
            color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color),
            vertexColors: false
        });
    }
    if (attribute === undefined) {
        material.vertexColors = false;
    }
    else {
        material.vertexColors = true;
    }
    const lines = new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments;
    const pos = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_3__.Serie.create({ array: geometry.getAttribute('position').array, itemSize: 3 });
    const s = parameters.scale;
    const vertices = [];
    pos.forEach((p, i) => {
        p = p.map((v, i) => p[i] + parameters.translate[i]);
        const u = vectorField.itemAt(i);
        if (parameters.project) {
            u[2] = 0;
        }
        if (parameters.normalize) {
            const l = Math.sqrt(u[0] ** 2 + u[1] ** 2 + u[2] ** 2);
            u[0] /= l;
            u[1] /= l;
            u[2] /= l;
        }
        // centered vector
        if (parameters.centered) {
            vertices.push(p[0] - s * u[0] / 2, p[1] - s * u[1] / 2, p[2] - s * u[2] / 2, p[0] + s * u[0] / 2, p[1] + s * u[1] / 2, p[2] + s * u[2] / 2);
        }
        else {
            vertices.push(p[0], p[1], p[2], p[0] + s * u[0], p[1] + s * u[1], p[2] + s * u[2]);
        }
    });
    lines.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry;
    lines.geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(vertices, 3));
    // Coloring the vectors
    const defaultColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.color);
    const lutTable = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createLut)(parameters.lut, 256);
    const mm = attribute ? _youwol_dataframe__WEBPACK_IMPORTED_MODULE_3__.array.minMax(attribute.array) : [0, 1];
    if (parameters.lockLut) {
        lutTable.setMin(0);
        lutTable.setMax(1);
    }
    else {
        lutTable.setMin(mm[0]);
        lutTable.setMax(mm[1]);
    }
    const params = {
        min: parameters.min,
        max: parameters.max,
        lutTable,
        defaultColor,
        reverse: parameters.reverseLut
    };
    if (attribute) {
        const colors = [];
        attribute.array.forEach(value => {
            const c = (0,_utils_lut_utils__WEBPACK_IMPORTED_MODULE_2__.fromValueToColor)(value, params);
            for (let i = 0; i < 2; ++i) {
                colors.push(c[0], c[1], c[2]);
            }
        });
        lines.geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(colors, 3));
    }
    lines.material = material;
    // -------------------------------------------------
    // Arrows ? (6,16, 12, 1, true, 0, 2*Math.PI)
    // Cone kength should be 1/5 of arrow legnth
    // -------------------------------------------------
    {
        // TODO
    }
    return lines;
}


/***/ }),

/***/ "./lib/skins/deform.ts":
/*!*****************************!*\
  !*** ./lib/skins/deform.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeformParameters": () => (/* binding */ DeformParameters),
/* harmony export */   "deform": () => (/* binding */ deform)
/* harmony export */ });
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");

/**
 * @see [[deform]]
 * @category Skin Parameters
 */
class DeformParameters extends _skinParameters__WEBPACK_IMPORTED_MODULE_0__.SkinParameters {
    constructor({ scaleX = 1, scaleY = 1, scaleZ = 1, ...others } = {}) {
        super(others);
        this.scaleX = scaleX || 1;
        this.scaleY = scaleY || 1;
        this.scaleZ = scaleZ || 1;
    }
}
/**
 * @example
 * ```ts
 * const s = createSurface( df.series['positions'].array, df.series['indices'].array )
 * const newGeom = deform( s.geometry, df.series['U'].array )
 * ```
 * @category Skins
 */
function deform({ geometry, deformVector, parameters }) {
    if (geometry === undefined)
        throw new Error('geometry is undefined');
    const position = geometry.getAttribute('position');
    if (deformVector.count !== position.count)
        throw new Error('attribute should have 3 x nb vertices');
    //const geom = position.clone()
    return deformVector.map((v, i) => [
        position.getX(i) + parameters.scaleX * v[0],
        position.getY(i) + parameters.scaleX * v[1],
        position.getZ(i) + parameters.scaleX * v[2]
    ]);
    // for (let i = 0; i < position.count; ++i) {
    //     geom.setXYZ(i,
    //         position.getX(i) + parameters.scaleX*attribute[3*i],
    //         position.getY(i) + parameters.scaleY*attribute[3*i+1],
    //         position.getZ(i) + parameters.scaleZ*attribute[3*i+2]
    //     )
    // }
    // return geom
}


/***/ }),

/***/ "./lib/skins/implicitGrid.ts":
/*!***********************************!*\
  !*** ./lib/skins/implicitGrid.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/skins/index.ts":
/*!****************************!*\
  !*** ./lib/skins/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkinParameters": () => (/* reexport safe */ _skinParameters__WEBPACK_IMPORTED_MODULE_0__.SkinParameters),
/* harmony export */   "DeformParameters": () => (/* reexport safe */ _deform__WEBPACK_IMPORTED_MODULE_2__.DeformParameters),
/* harmony export */   "deform": () => (/* reexport safe */ _deform__WEBPACK_IMPORTED_MODULE_2__.deform),
/* harmony export */   "IsoContoursParameters": () => (/* reexport safe */ _isoContoursParameters__WEBPACK_IMPORTED_MODULE_3__.IsoContoursParameters),
/* harmony export */   "BBoxParameters": () => (/* reexport safe */ _createBBox__WEBPACK_IMPORTED_MODULE_4__.BBoxParameters),
/* harmony export */   "createBBox": () => (/* reexport safe */ _createBBox__WEBPACK_IMPORTED_MODULE_4__.createBBox),
/* harmony export */   "PointsetParameters": () => (/* reexport safe */ _createPointset__WEBPACK_IMPORTED_MODULE_5__.PointsetParameters),
/* harmony export */   "createPointset": () => (/* reexport safe */ _createPointset__WEBPACK_IMPORTED_MODULE_5__.createPointset),
/* harmony export */   "LinesetParameters": () => (/* reexport safe */ _createLineset__WEBPACK_IMPORTED_MODULE_6__.LinesetParameters),
/* harmony export */   "createLineset": () => (/* reexport safe */ _createLineset__WEBPACK_IMPORTED_MODULE_6__.createLineset),
/* harmony export */   "LinesetParameters2": () => (/* reexport safe */ _createLineset2__WEBPACK_IMPORTED_MODULE_7__.LinesetParameters2),
/* harmony export */   "createLineset2": () => (/* reexport safe */ _createLineset2__WEBPACK_IMPORTED_MODULE_7__.createLineset2),
/* harmony export */   "SurfaceParameters": () => (/* reexport safe */ _createSurface__WEBPACK_IMPORTED_MODULE_8__.SurfaceParameters),
/* harmony export */   "createSurface": () => (/* reexport safe */ _createSurface__WEBPACK_IMPORTED_MODULE_8__.createSurface),
/* harmony export */   "PaintParameters": () => (/* reexport safe */ _paintAttribute__WEBPACK_IMPORTED_MODULE_9__.PaintParameters),
/* harmony export */   "paintAttribute": () => (/* reexport safe */ _paintAttribute__WEBPACK_IMPORTED_MODULE_9__.paintAttribute),
/* harmony export */   "createIsoContours": () => (/* reexport safe */ _createIsoContours__WEBPACK_IMPORTED_MODULE_10__.createIsoContours),
/* harmony export */   "VectorsParameters": () => (/* reexport safe */ _createVectors__WEBPACK_IMPORTED_MODULE_11__.VectorsParameters),
/* harmony export */   "createVectors": () => (/* reexport safe */ _createVectors__WEBPACK_IMPORTED_MODULE_11__.createVectors),
/* harmony export */   "TubeVectorsParameters": () => (/* reexport safe */ _createTubeVectors__WEBPACK_IMPORTED_MODULE_12__.TubeVectorsParameters),
/* harmony export */   "createTubeVectors": () => (/* reexport safe */ _createTubeVectors__WEBPACK_IMPORTED_MODULE_12__.createTubeVectors),
/* harmony export */   "Colorbar": () => (/* reexport safe */ _colorbar__WEBPACK_IMPORTED_MODULE_13__.Colorbar),
/* harmony export */   "FailurePlanesParameters": () => (/* reexport safe */ _createFailurePlanes__WEBPACK_IMPORTED_MODULE_14__.FailurePlanesParameters),
/* harmony export */   "FractureType": () => (/* reexport safe */ _createFailurePlanes__WEBPACK_IMPORTED_MODULE_14__.FractureType),
/* harmony export */   "createFailurePlanes": () => (/* reexport safe */ _createFailurePlanes__WEBPACK_IMPORTED_MODULE_14__.createFailurePlanes),
/* harmony export */   "EdgesParameters": () => (/* reexport safe */ _createEdges__WEBPACK_IMPORTED_MODULE_15__.EdgesParameters),
/* harmony export */   "createEdges": () => (/* reexport safe */ _createEdges__WEBPACK_IMPORTED_MODULE_15__.createEdges),
/* harmony export */   "createNormals": () => (/* reexport safe */ _createSurfaceNormals__WEBPACK_IMPORTED_MODULE_16__.createNormals),
/* harmony export */   "createSurfaceBorders": () => (/* reexport safe */ _createSurfaceBorders__WEBPACK_IMPORTED_MODULE_17__.createSurfaceBorders),
/* harmony export */   "BandParameters": () => (/* reexport safe */ _createBand__WEBPACK_IMPORTED_MODULE_18__.BandParameters),
/* harmony export */   "createBand": () => (/* reexport safe */ _createBand__WEBPACK_IMPORTED_MODULE_18__.createBand),
/* harmony export */   "IsoBand": () => (/* reexport safe */ _private_IsoBand__WEBPACK_IMPORTED_MODULE_19__.IsoBand)
/* harmony export */ });
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");
/* harmony import */ var _implicitGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implicitGrid */ "./lib/skins/implicitGrid.ts");
/* harmony import */ var _deform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deform */ "./lib/skins/deform.ts");
/* harmony import */ var _isoContoursParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isoContoursParameters */ "./lib/skins/isoContoursParameters.ts");
/* harmony import */ var _createBBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBBox */ "./lib/skins/createBBox.ts");
/* harmony import */ var _createPointset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPointset */ "./lib/skins/createPointset.ts");
/* harmony import */ var _createLineset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createLineset */ "./lib/skins/createLineset.ts");
/* harmony import */ var _createLineset2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createLineset2 */ "./lib/skins/createLineset2.ts");
/* harmony import */ var _createSurface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createSurface */ "./lib/skins/createSurface.ts");
/* harmony import */ var _paintAttribute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paintAttribute */ "./lib/skins/paintAttribute.ts");
/* harmony import */ var _createIsoContours__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createIsoContours */ "./lib/skins/createIsoContours.ts");
/* harmony import */ var _createVectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./createVectors */ "./lib/skins/createVectors.ts");
/* harmony import */ var _createTubeVectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createTubeVectors */ "./lib/skins/createTubeVectors.ts");
/* harmony import */ var _colorbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./colorbar */ "./lib/skins/colorbar.ts");
/* harmony import */ var _createFailurePlanes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./createFailurePlanes */ "./lib/skins/createFailurePlanes.ts");
/* harmony import */ var _createEdges__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./createEdges */ "./lib/skins/createEdges.ts");
/* harmony import */ var _createSurfaceNormals__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./createSurfaceNormals */ "./lib/skins/createSurfaceNormals.ts");
/* harmony import */ var _createSurfaceBorders__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./createSurfaceBorders */ "./lib/skins/createSurfaceBorders.ts");
/* harmony import */ var _createBand__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./createBand */ "./lib/skins/createBand.ts");
/* harmony import */ var _private_IsoBand__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./private/IsoBand */ "./lib/skins/private/IsoBand.ts");




















// export * from './colorbar2'
// export * from './createIsoSurfaces'
// export * from './createIsoContourLines'
// export * from './createIsoContourFilled'


/***/ }),

/***/ "./lib/skins/isoContoursParameters.ts":
/*!********************************************!*\
  !*** ./lib/skins/isoContoursParameters.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsoContoursParameters": () => (/* binding */ IsoContoursParameters)
/* harmony export */ });
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");

/**
 * @see [[createIsoContourFilled]]
 * @see [[createIsoContourLines]]
 * @see [[createIsoContours]]
 * @category Skin Parameters
 */
class IsoContoursParameters extends _skinParameters__WEBPACK_IMPORTED_MODULE_0__.SkinParameters {
    constructor({ isoList, filled = true, lined = false, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY, color, lineColor, lut, duplicateLut, lockLut, opacity, reverseLut, ...others }) {
        super(others);
        this.filled = true;
        this.lined = true;
        this.useTable = true;
        this.color = '#ffffff';
        this.lineColor = '#000000';
        this.min = Number.NEGATIVE_INFINITY;
        this.max = Number.POSITIVE_INFINITY;
        this.isoList = [];
        this.opacity = 1;
        this.lut = 'Rainbow';
        this.duplicateLut = 1;
        this.lockLut = true;
        this.reverseLut = false;
        if (filled !== undefined)
            this.filled = filled;
        if (lined !== undefined)
            this.lined = lined;
        this.isoList = isoList;
        this.color = (color !== undefined ? color : '#000000');
        this.lineColor = (lineColor !== undefined ? lineColor : '#000000');
        this.min = (min !== undefined ? min : Number.NEGATIVE_INFINITY);
        this.max = (max !== undefined ? max : Number.POSITIVE_INFINITY);
        this.set('lockLut', lockLut, this.lockLut);
        this.reverseLut = (reverseLut !== undefined ? reverseLut : this.reverseLut);
        this.lut = lut || 'Rainbow';
        if (duplicateLut !== undefined)
            this.duplicateLut = duplicateLut;
        if (lut !== undefined)
            this.lut = lut;
        if (opacity !== undefined)
            this.opacity = opacity;
    }
}


/***/ }),

/***/ "./lib/skins/paintAttribute.ts":
/*!*************************************!*\
  !*** ./lib/skins/paintAttribute.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintParameters": () => (/* binding */ PaintParameters),
/* harmony export */   "paintAttribute": () => (/* binding */ paintAttribute)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_lut_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/lut-utils */ "./lib/utils/lut-utils.ts");
/* harmony import */ var _skinParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skinParameters */ "./lib/skins/skinParameters.ts");



/**
 * @see [[paintAttribute]]
 * @category Skin Parameters
 */
class PaintParameters extends _skinParameters__WEBPACK_IMPORTED_MODULE_2__.SkinParameters {
    constructor({ name, lut, duplicateLut, min, max, lockLut, defaultColor, atVertex, ...others } = {}) {
        super(others);
        this.duplicateLut = 1;
        this.lockLut = false;
        this.defaultColor = defaultColor || '#aaaaaa';
        this.lut = lut || 'Rainbow';
        if (duplicateLut !== undefined)
            this.duplicateLut = duplicateLut;
        this.min = min !== undefined ? min : 0;
        this.max = max !== undefined ? max : 1;
        this.atVertex = atVertex !== undefined ? atVertex : true;
        this.set('lockLut', lockLut, this.lockLut);
        this.reverseLut = false;
        if (this.min > this.max) {
            this.reverseLut = true;
            const a = this.min;
            this.min = this.max;
            this.max = a;
        }
    }
}
/**
 * @brief Paint a pointset, a lineset or a surface using a scalar
 * attribute provided by a Serie from the library `@youwol/dataframe`
 * @example
 * ```ts
 * const surface = io.loadGocad(filename)[0] // a dataframe I think
 *
 * let mesh = createSurface({
 *      positions: surface.get('positions'),
 *      indices  : surface.get('indices')
 * })
 *
 * paintAttribute(mesh, surface.get('U').map( u => u[0] ) )
 * ```
 * @category Skins
 */
function paintAttribute(mesh, attribute, parameters) {
    console.warn('deal with Group of Object3D');
    if (mesh === undefined) {
        throw new Error('mesh is undefined');
    }
    const geometry = mesh['geometry'];
    if (geometry === undefined) {
        throw new Error('geometry of mesh is undefined');
    }
    if (geometry instanceof three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry === false) {
        throw new Error('geometry of mesh is not a BufferGeometry');
    }
    const material = mesh['material'];
    if (material === undefined) {
        throw new Error('material of mesh is undefined');
    }
    if (attribute.itemSize !== 1) {
        throw new Error(`attribute must be a Serie with itemSize = 1. Got ${attribute.itemSize}`);
    }
    if (parameters === undefined) {
        parameters = new PaintParameters();
    }
    let color = new three__WEBPACK_IMPORTED_MODULE_0__.Color('#aaaaaa');
    if (material.hasOwnProperty('color')) {
        color = material['color'];
        material['color'] = new three__WEBPACK_IMPORTED_MODULE_0__.Color('#ffffff');
    }
    material.vertexColors = (parameters.atVertex ? true : false);
    material.polygonOffset = true;
    material.polygonOffsetFactor = 1;
    let colors = (0,_utils_lut_utils__WEBPACK_IMPORTED_MODULE_1__.fromValuesToColors)(attribute.array, {
        defaultColor: new three__WEBPACK_IMPORTED_MODULE_0__.Color(parameters.defaultColor),
        reverse: parameters.reverseLut,
        min: parameters.min,
        max: parameters.max,
        lut: parameters.lut,
        duplicateLut: parameters.duplicateLut,
        lockLut: parameters.lockLut
    });
    // colors = meshInterpolate({
    //     attribute: colors, 
    //     topology: mesh.geometry.index.array,
    //     size:3,
    //     direction: InterpolateDirection.INCREASING
    // })
    if (mesh.type === 'Points') {
        geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(colors, 3));
    }
    else if (mesh.type === 'Line2') {
        geometry.setColors(colors);
    }
    else {
        if (parameters.atVertex) {
            geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(colors, 3));
        }
        else {
            const faces = geometry.index; // 438
            const nbVertPerFace = 3;
            const nbColorComps = 3;
            let fcolors = new Float32Array(faces.count * nbVertPerFace * nbColorComps);
            let j = 0;
            const setColor = (i) => {
                for (let k = 0; k < 3; ++k) {
                    fcolors[j + k] = colors[i + k];
                }
                j += 3;
            };
            for (let i = 0; i < faces.count; i += 3) {
                setColor(faces.array[i]);
                setColor(faces.array[i + 1]);
                setColor(faces.array[i + 2]);
            }
            geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(fcolors, 3));
        }
    }
    if (geometry.attributes.color) {
        geometry.attributes.color.needsUpdate = true;
    }
    material.needsUpdate = true;
}


/***/ }),

/***/ "./lib/skins/private/IsoBand.ts":
/*!**************************************!*\
  !*** ./lib/skins/private/IsoBand.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsoBand": () => (/* binding */ IsoBand)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

class IsoBand {
    constructor(geometry) {
        this.debug = true;
        this.triangles = [];
        this.attr = undefined;
        this.nodes = undefined;
        this.normals = undefined;
        this.geometry = undefined;
        this.geometry = geometry;
        this.nodes = geometry.getAttribute('position');
        this.normals = geometry.getAttribute('normal');
        if (this.normals === undefined) {
            geometry.computeVertexNormals();
            this.normals = geometry.getAttribute('normal');
        }
    }
    run(attr, iso1, iso2) {
        this.attr = attr;
        const indices = this.geometry.index.array;
        this.triangles = [];
        // Generate...
        for (let i = 0; i < indices.length; i += 3) {
            const t = this.createTriangle(indices[i], indices[i + 1], indices[i + 2]);
            this.detect(t, iso1, iso2);
        }
        // At this point, we have a list of Tri
        // Have to transform into
        //   - positions: number[]
        //   - indices  : number[]
        //   - normals  : number[]
        {
            const positions = [];
            const indices = [];
            const normals = [];
            let k = 0;
            this.triangles.forEach(t => {
                positions.push(t.p1[0], t.p1[1], t.p1[2], t.p2[0], t.p2[1], t.p2[2], t.p3[0], t.p3[1], t.p3[2]);
                normals.push(t.n1[0], t.n1[1], t.n1[2], t.n2[0], t.n2[1], t.n2[2], t.n3[0], t.n3[1], t.n3[2]);
                indices.push(k++, k++, k++);
            });
            return {
                positions: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, positions, false), itemSize: 3 }),
                indices: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Uint32Array, indices, false), itemSize: 3 }),
                normals: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.createTyped)(Float32Array, normals, false), itemSize: 3 }),
            };
        }
    }
    detect(t, iso1, iso2) {
        if (this.debug) {
            // console.assert(iso1 < iso2, iso1 +'<'+ iso2+' failed')
            // console.assert(t.i1 < t.i2, t.i1 +'<'+ t.i2+' failed')
            // console.assert(t.i2 < t.i3, t.i2 +'<'+ t.i3+' failed')
        }
        const iso = (iso1 + iso2) / 2;
        const p1 = t.p1;
        const p2 = t.p2;
        const p3 = t.p3;
        const n1 = t.n1;
        const n2 = t.n2;
        const n3 = t.n3;
        const i1 = t.i1;
        const i2 = t.i2;
        const i3 = t.i3;
        const reversed = t.reversed;
        if (iso1 >= i3 || iso2 <= i1) { // case 0: empty triangle
            return;
        }
        if (iso1 <= i1) {
            if (iso2 >= i3) { // case 1: full triangle
                this.add3(p1, p2, p3, n1, n2, n3, iso);
            }
            else if (iso2 < i2) { // case 3
                const a = this.generate(i1, i2, p1, p2, n1, n2, iso2);
                const b = this.generate(i1, i3, p1, p3, n1, n3, iso2);
                this.add3(p1, a.p, b.p, n1, a.n, b.n, iso2, reversed);
            }
            else if (iso2 <= i3) { // case 2
                const a = this.generate(i2, i3, p2, p3, n2, n3, iso2);
                const b = this.generate(i1, i3, p1, p3, n1, n3, iso2);
                this.add4(p1, p2, a.p, b.p, n1, n2, a.n, b.n, iso2, reversed);
            }
        }
        else if (iso1 > i1 && iso1 <= i2) {
            if (iso2 >= i3) { // case 4
                const a = this.generate(i1, i2, p1, p2, n1, n2, iso1);
                const b = this.generate(i1, i3, p1, p3, n1, n3, iso1);
                this.add4(a.p, p2, p3, b.p, a.n, n2, n3, b.n, iso1, reversed);
            }
            else if (iso2 < i2) { // case 6
                const a = this.generate(i1, i2, p1, p2, n1, n2, iso1);
                const b = this.generate(i1, i2, p1, p2, n1, n2, iso2);
                const c = this.generate(i1, i3, p1, p3, n1, n3, iso2);
                const d = this.generate(i1, i3, p1, p3, n1, n3, iso1);
                this.add4(a.p, b.p, c.p, d.p, a.n, b.n, c.n, d.n, iso, reversed);
                // this.add3(a.p, b.p, c.p,   a.n, b.n, c.n,   iso)
            }
            else if (iso2 < i3) { // case 5
                const a = this.generate(i1, i2, p1, p2, n1, n2, iso1);
                const b = this.generate(i2, i3, p2, p3, n2, n3, iso2);
                const c = this.generate(i1, i3, p1, p3, n1, n3, iso2);
                const d = this.generate(i1, i3, p1, p3, n1, n3, iso1);
                this.add5(a.p, p2, b.p, c.p, d.p, a.n, n2, b.n, c.n, d.n, iso, reversed);
            }
        }
        else if (iso1 > i2 && iso1 <= i3) {
            if (iso2 >= i3) { // case 7
                const a = this.generate(i2, i3, p2, p3, n2, n3, iso1);
                const b = this.generate(i1, i3, p1, p3, n1, n3, iso1);
                this.add3(a.p, p3, b.p, a.n, n3, b.n, iso1, reversed);
            }
            else if (iso2 < i3) { // case 8
                const a = this.generate(i2, i3, p2, p3, n2, n3, iso1);
                const b = this.generate(i2, i3, p2, p3, n2, n3, iso2);
                // const c = this.generate(i3, i1, p3, p1, n3, n1, iso2)
                // const d = this.generate(i3, i1, p3, p1, n3, n1, iso1)
                const c = this.generate(i1, i3, p1, p3, n1, n3, iso2);
                const d = this.generate(i1, i3, p1, p3, n1, n3, iso1);
                this.add4(a.p, b.p, c.p, d.p, a.n, b.n, c.n, d.n, iso, reversed);
            }
        }
        else { // Error: unknown configuration
            throw new Error('unknown configuration');
        }
    }
    generate(i1, i2, p1, p2, n1, n2, iso) {
        const w = this.parametric(i1, i2, iso);
        return {
            p: this.createPoint(p1, p2, w),
            n: this.createNormal(n1, n2, w),
        };
    }
    createPoint(p1, p2, w) {
        if (this.debug) {
            console.assert(w >= 0, w + '>=0 failed');
            console.assert(w <= 1, w + '<=1 failed');
        }
        const W = 1. - w;
        return [
            w * p1[0] + W * p2[0],
            w * p1[1] + W * p2[1],
            w * p1[2] + W * p2[2]
        ];
    }
    createNormal(p1, p2, w) {
        return this.createPoint(p1, p2, w);
        // const p = this.createPoint(p1, p2, w)
        // const l = Math.sqrt(p[0]**2 + p[1]**2 + p[2]**2)
        // return [p[0]/l, p[1]/l, p[2]/l]
    }
    parametric(v1, v2, iso) {
        if (this.debug) {
            console.assert(iso >= v1, iso + '>=' + v1 + ' failed');
            console.assert(iso <= v2, iso + '<=' + v2 + ' failed');
        }
        if (v2 > v1) {
            return 1. - (Math.abs(iso - v1) / Math.abs(v2 - v1));
        }
        else {
            return 1. - (Math.abs(iso - v2) / Math.abs(v1 - v2));
        }
    }
    createTriangle(n0, n1, n2) {
        return this.classifyTriangle({
            i1: this.getAttr(n0),
            p1: this.getNode(n0),
            n1: this.getNormal(n0),
            i2: this.getAttr(n1),
            p2: this.getNode(n1),
            n2: this.getNormal(n1),
            i3: this.getAttr(n2),
            p3: this.getNode(n2),
            n3: this.getNormal(n2),
            reversed: true
        });
    }
    classifyTriangle(t) {
        let nn1, nn2, nn3;
        let vv1, vv2, vv3;
        let hh1 = 0, hh2 = 0, hh3 = 0;
        t.reversed = false;
        if (t.i1 <= t.i2 && t.i1 <= t.i3) {
            vv1 = t.p1;
            hh1 = t.i1;
            nn1 = t.n1;
            if (t.i2 <= t.i3) {
                vv2 = t.p2;
                vv3 = t.p3;
                hh2 = t.i2;
                hh3 = t.i3;
                nn2 = t.n2;
                nn3 = t.n3;
            }
            else {
                vv2 = t.p3;
                vv3 = t.p2;
                hh2 = t.i3;
                hh3 = t.i2;
                nn2 = t.n3;
                nn3 = t.n2;
                t.reversed = true;
            }
        }
        else if (t.i2 <= t.i1 && t.i2 <= t.i3) {
            vv1 = t.p2;
            hh1 = t.i2;
            nn1 = t.n2;
            if (t.i1 <= t.i3) {
                vv2 = t.p1;
                vv3 = t.p3;
                hh2 = t.i1;
                hh3 = t.i3;
                nn2 = t.n1;
                nn3 = t.n3;
                t.reversed = true;
            }
            else {
                vv2 = t.p3;
                vv3 = t.p1;
                hh2 = t.i3;
                hh3 = t.i1;
                nn2 = t.n3;
                nn3 = t.n1;
            }
        }
        else if (t.i3 <= t.i1 && t.i3 <= t.i2) {
            vv1 = t.p3;
            hh1 = t.i3;
            nn1 = t.n3;
            if (t.i1 <= t.i2) {
                vv2 = t.p1;
                vv3 = t.p2;
                hh2 = t.i1;
                hh3 = t.i2;
                nn2 = t.n1;
                nn3 = t.n2;
            }
            else {
                vv2 = t.p2;
                vv3 = t.p1;
                hh2 = t.i2;
                hh3 = t.i1;
                nn2 = t.n2;
                nn3 = t.n1;
                t.reversed = true;
            }
        }
        else {
            throw new Error('Strange !');
        }
        t.p1 = vv1;
        t.p2 = vv2;
        t.p3 = vv3;
        t.i1 = hh1;
        t.i2 = hh2;
        t.i3 = hh3;
        t.n1 = nn1;
        t.n2 = nn2;
        t.n3 = nn3;
        return t;
    }
    add3(p1, p2, p3, n1, n2, n3, iso, reversed = false) {
        // const revert = (n: Point): Point => [-n[0], -n[1], -n[2]]
        if (reversed) {
            // this.triangles.push({p1, p2, p3, n1: revert(n1), n2: revert(n2), n3: revert(n3)})
            this.triangles.push({ p1, p3, p2, n1, n3, n2 });
        }
        else {
            this.triangles.push({ p1, p2, p3, n1, n2, n3 });
        }
    }
    add4(p1, p2, p3, p4, n1, n2, n3, n4, iso, reversed = false) {
        this.add3(p1, p2, p3, n1, n2, n3, iso, reversed);
        this.add3(p1, p3, p4, n1, n3, n4, iso, reversed);
    }
    add5(p1, p2, p3, p4, p5, n1, n2, n3, n4, n5, iso, reversed = false) {
        this.add4(p1, p2, p3, p4, n1, n2, n3, n4, iso, reversed);
        this.add3(p1, p4, p5, n1, n4, n5, iso, reversed);
    }
    getNode(i) {
        return [this.nodes.getX(i), this.nodes.getY(i), this.nodes.getZ(i)];
    }
    getNormal(i) {
        return [this.normals.getX(i), this.normals.getY(i), this.normals.getZ(i)];
    }
    getAttr(i) {
        return this.attr.itemAt(i);
    }
}


/***/ }),

/***/ "./lib/skins/private/IsoContoursFill.ts":
/*!**********************************************!*\
  !*** ./lib/skins/private/IsoContoursFill.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsoContoursFill": () => (/* binding */ IsoContoursFill)
/* harmony export */ });
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/math */ "../node_modules/@youwol/math/dist/@youwol/math.js");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./lib/utils/index.ts");



const Nc = 128;
class IsoContoursFill {
    constructor(parameters) {
        this.attr = undefined;
        this.nodes_ = undefined;
        this.segment_list_ = [];
        this.vmin_ = 0;
        this.vmax_ = 1;
        this.color_ = new three__WEBPACK_IMPORTED_MODULE_1__.Color('#000000');
        this.lutTable_ = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createLut)('Insar', Nc);
        this.params = undefined;
        this.position_ = [];
        this.index_ = [];
        this.colors_ = [];
        this.isoValues_ = [];
        this.normals_ = [];
        this.nnormals_ = undefined;
        this.params = parameters;
        this.color_ = new three__WEBPACK_IMPORTED_MODULE_1__.Color(parameters.color);
        this.lutTable_ = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createLut)(parameters.lut, Nc, parameters.duplicateLut);
        this.lutTable_.setMin(0);
        this.lutTable_.setMax(1);
        this.isoValues_ = parameters.isoList;
    }
    get position() { return this.position_; }
    get index() { return this.index_; }
    get color() { return this.colors_; }
    run(attr, geometry, min = undefined, max = undefined) {
        this.attr = attr;
        const minmax = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.minMax)(this.attr);
        if (min !== undefined) {
            this.vmin_ = min;
        }
        else {
            this.vmin_ = minmax[0];
        }
        if (max !== undefined) {
            this.vmax_ = max;
        }
        else {
            this.vmax_ = minmax[1];
        }
        if (this.isoValues_.length === 0) {
            return {
                position: [],
                index: [],
                color: []
            };
        }
        const index = geometry.index;
        const a = index.array;
        this.nodes_ = geometry.getAttribute('position');
        this.nnormals_ = geometry.getAttribute('normal');
        if (this.nnormals_ === undefined) {
            geometry.computeVertexNormals();
            this.nnormals_ = geometry.getAttribute('normal');
        }
        // The main algo
        // -------------
        for (let i = 0; i < a.length; i += 3) { // node indices of a triangle
            this.classify(a[i], a[i + 1], a[i + 2]);
        }
        return {
            position: this.position_,
            index: this.index_,
            color: this.colors_,
            normal: this.normals_
        };
    }
    normalizeAttr(v) {
        return (v - this.vmin_) / (this.vmax_ - this.vmin_);
    }
    getNode(i) {
        return [this.nodes_.getX(i), this.nodes_.getY(i), this.nodes_.getZ(i)];
    }
    getNormal(i) {
        return [this.nnormals_.getX(i), this.nnormals_.getY(i), this.nnormals_.getZ(i)];
    }
    getAttr(i) {
        return this.attr.itemAt(i);
    }
    classify(n0, n1, n2) {
        const t = new TriInfo;
        t.v1 = this.getAttr(n0);
        t.p1 = this.getNode(n0);
        t.n1 = this.getNormal(n0);
        t.v2 = this.getAttr(n1);
        t.p2 = this.getNode(n1);
        t.n2 = this.getNormal(n1);
        t.v3 = this.getAttr(n2);
        t.p3 = this.getNode(n2);
        t.n3 = this.getNormal(n2);
        let nn1, nn2, nn3;
        let vv1, vv2, vv3;
        let hh1 = 0, hh2 = 0, hh3 = 0;
        if (t.v1 <= t.v2 && t.v1 <= t.v3) {
            vv1 = t.p1;
            hh1 = t.v1;
            nn1 = t.n1;
            if (t.v2 <= t.v3) {
                vv2 = t.p2;
                vv3 = t.p3;
                hh2 = t.v2;
                hh3 = t.v3;
                nn2 = t.n2;
                nn3 = t.n3;
            }
            else {
                vv2 = t.p3;
                vv3 = t.p2;
                hh2 = t.v3;
                hh3 = t.v2;
                nn2 = t.n3;
                nn3 = t.n2;
                t.reversed = true;
            }
        }
        else if (t.v2 <= t.v1 && t.v2 <= t.v3) {
            vv1 = t.p2;
            hh1 = t.v2;
            nn1 = t.n2;
            if (t.v1 <= t.v3) {
                vv2 = t.p1;
                vv3 = t.p3;
                hh2 = t.v1;
                hh3 = t.v3;
                nn2 = t.n1;
                nn3 = t.n3;
                t.reversed = true;
            }
            else {
                vv2 = t.p3;
                vv3 = t.p1;
                hh2 = t.v3;
                hh3 = t.v1;
                nn2 = t.n3;
                nn3 = t.n1;
            }
        }
        else if (t.v3 <= t.v1 && t.v3 <= t.v2) {
            vv1 = t.p3;
            hh1 = t.v3;
            nn1 = t.n3;
            if (t.v1 <= t.v2) {
                vv2 = t.p1;
                vv3 = t.p2;
                hh2 = t.v1;
                hh3 = t.v2;
                nn2 = t.n1;
                nn3 = t.n2;
            }
            else {
                vv2 = t.p2;
                vv3 = t.p1;
                hh2 = t.v2;
                hh3 = t.v1;
                nn2 = t.n2;
                nn3 = t.n1;
                t.reversed = true;
            }
        }
        else {
            return;
        }
        t.p1 = vv1;
        t.p2 = vv2;
        t.p3 = vv3;
        t.v1 = hh1;
        t.v2 = hh2;
        t.v3 = hh3;
        t.n1 = nn1;
        t.n2 = nn2;
        t.n3 = nn3;
        this.createSegmentList(t); // for this current traingle
        this.createPolygons(t);
        n1 = n2;
    }
    createSegmentList(t) {
        this.segment_list_ = [];
        t.notIntersectedPolygonValue = this.vmin_;
        for (let iso of this.isoValues_) {
            if (iso >= t.v3)
                break;
            if (iso > t.v1) {
                this.addSegment(iso, t);
            }
            else {
                t.notIntersectedPolygonValue = iso;
            }
        }
    }
    addSegment(iso, t) {
        const segment = new IsoSegment;
        segment.iso = iso;
        const v1 = t.v1;
        const v2 = t.v2;
        const v3 = t.v3;
        const p1 = t.p1;
        const p2 = t.p2;
        const p3 = t.p3;
        if (iso < t.v2) {
            const w1 = isoValue(v1, v2, iso);
            const w2 = isoValue(v1, v3, iso);
            segment.p1 = createPoint(p1, p2, w1);
            segment.p2 = createPoint(p1, p3, w2);
            segment.n1 = createPoint(t.n1, t.n2, w1);
            segment.n2 = createPoint(t.n1, t.n3, w2);
        }
        else {
            const w1 = isoValue(v2, v3, iso);
            const w2 = isoValue(v1, v3, iso);
            segment.p1 = createPoint(p2, p3, w1);
            segment.p2 = createPoint(p1, p3, w2);
            segment.n1 = createPoint(t.n2, t.n3, w1);
            segment.n2 = createPoint(t.n1, t.n3, w2);
        }
        this.segment_list_.push(segment);
    }
    createPolygons(t) {
        if ((t.v1 < this.params.min || t.v1 > this.params.max) &&
            (t.v2 < this.params.min || t.v2 > this.params.max) &&
            (t.v3 < this.params.min || t.v3 > this.params.max)) {
            return; // <-------------------------------
        }
        const negate = (n) => [-n[0], -n[1], -n[2]];
        let bypass = false;
        if (t.reversed) {
            if (this.segment_list_.length === 0) {
                this.addTri(t.p1, t.p3, t.p2, t.n1, t.n3, t.n2, t.notIntersectedPolygonValue);
                return;
            }
            let seg = front(this.segment_list_);
            if (seg.iso < t.v2) {
                this.addTri(t.p1, seg.p2, seg.p1, t.n1, seg.n2, seg.n1, t.notIntersectedPolygonValue);
            }
            else {
                bypass = true;
                this.addQuad(t.p1, seg.p2, seg.p1, t.p2, t.n1, seg.n2, seg.n1, t.n2, t.notIntersectedPolygonValue);
            }
            for (let i = 1; i < this.segment_list_.length; ++i) {
                const seg1 = this.segment_list_[i];
                if (seg1.iso < t.v2) {
                    this.addQuad(seg.p1, seg1.p1, seg1.p2, seg.p2, negate(seg.n1), negate(seg1.n1), negate(seg1.n2), negate(seg.n2), seg.iso);
                }
                else {
                    if (bypass) {
                        this.addQuad(seg.p1, seg.p2, seg1.p2, seg1.p1, seg.n1, seg.n2, seg1.n2, seg1.n1, seg.iso);
                    }
                    else {
                        bypass = true;
                        this.addPoly(t.p2, seg.p1, seg.p2, seg1.p2, seg1.p1, t.n2, seg.n1, seg.n2, seg1.n2, seg1.n1, seg.iso);
                    }
                }
                seg = seg1;
            }
            seg = back(this.segment_list_);
            if (bypass) {
                this.addTri(seg.p1, seg.p2, t.p3, seg.n1, seg.n2, t.n3, seg.iso);
            }
            else {
                this.addQuad(t.p2, seg.p1, seg.p2, t.p3, t.n2, seg.n1, seg.n2, t.n3, seg.iso);
            }
        }
        //draw polygons in CW
        else {
            if (this.segment_list_.length === 0) {
                this.addTri(t.p1, t.p2, t.p3, t.n1, t.n2, t.n3, t.notIntersectedPolygonValue);
                return;
            }
            let seg = front(this.segment_list_);
            if (seg.iso < t.v2) {
                this.addTri(t.p1, seg.p1, seg.p2, t.n1, seg.n1, seg.n2, t.notIntersectedPolygonValue);
            }
            else {
                bypass = true;
                this.addQuad(t.p1, t.p2, seg.p1, seg.p2, t.n1, t.n2, seg.n1, seg.n2, t.notIntersectedPolygonValue);
            }
            for (let i = 1; i < this.segment_list_.length; ++i) {
                const seg1 = this.segment_list_[i];
                if (seg1.iso < t.v2) {
                    this.addQuad(seg.p1, seg1.p1, seg1.p2, seg.p2, seg.n1, seg1.n1, seg1.n2, seg.n2, seg.iso);
                }
                else {
                    if (bypass) {
                        this.addQuad(seg.p1, seg1.p1, seg1.p2, seg.p2, seg.n1, seg1.n1, seg1.n2, seg.n2, seg.iso);
                    }
                    else {
                        bypass = true;
                        this.addPoly(t.p2, seg1.p1, seg1.p2, seg.p2, seg.p1, t.n2, seg1.n1, seg1.n2, seg.n2, seg.n1, seg.iso);
                    }
                }
                seg = seg1;
            }
            seg = back(this.segment_list_);
            if (bypass) {
                this.addTri(seg.p1, t.p3, seg.p2, seg.n1, t.n3, seg.n2, seg.iso);
            }
            else {
                this.addQuad(t.p2, t.p3, seg.p2, seg.p1, t.n2, t.n3, seg.n2, seg.n1, seg.iso);
            }
        }
    }
    addTri(point1, point2, point3, n1, n2, n3, iso) {
        if (iso < this.vmin_ || iso > this.vmax_)
            return;
        const c = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fromValueToColor)(this.normalizeAttr(iso), {
            defaultColor: this.color_,
            lutTable: this.lutTable_,
            reverse: this.params.reverseLut,
        });
        const id = this.position_.length / 3;
        this.position_.push(...point1, ...point2, ...point3);
        this.index_.push(id, id + 1, id + 2);
        this.colors_.push(...c, ...c, ...c);
        this.normals_.push(...n1, ...n2, ...n3);
    }
    addQuad(point1, point2, point3, point4, n1, n2, n3, n4, iso) {
        if (iso < this.vmin_ || iso > this.vmax_)
            return;
        const c = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fromValueToColor)(this.normalizeAttr(iso), {
            defaultColor: this.color_,
            lutTable: this.lutTable_,
            reverse: this.params.reverseLut,
        });
        const id = this.position_.length / 3;
        this.position_.push(...point1, ...point2, ...point3, ...point4);
        this.index_.push(id, id + 1, id + 2, id, id + 2, id + 3);
        this.colors_.push(...c, ...c, ...c, ...c);
        this.normals_.push(...n1, ...n2, ...n3, ...n4);
    }
    addPoly(point1, point2, point3, point4, point5, n1, n2, n3, n4, n5, iso) {
        if (iso < this.vmin_ || iso > this.vmax_)
            return;
        const c = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fromValueToColor)(this.normalizeAttr(iso), {
            defaultColor: this.color_,
            lutTable: this.lutTable_,
            reverse: this.params.reverseLut,
        });
        const id = this.position_.length / 3;
        this.position_.push(...point1, ...point2, ...point3, ...point4, ...point5);
        this.index_.push(id, id + 1, id + 2, id, id + 2, id + 3, id, id + 3, id + 4);
        this.colors_.push(...c, ...c, ...c, ...c, ...c);
        this.normals_.push(...n1, ...n2, ...n3, ...n4, ...n5);
    }
}
// -------------------------------------------
class IsoSegment {
    constructor() {
        this.p1 = [0, 0, 0];
        this.p2 = [0, 0, 0];
        this.n1 = [0, 0, 1];
        this.n2 = [0, 0, 1];
        this.iso = 0;
    }
}
class TriInfo {
    constructor() {
        this.reversed = false;
        this.p1 = [0, 0, 0];
        this.p2 = [0, 0, 0];
        this.p3 = [0, 0, 0];
        this.n1 = [1, 0, 0];
        this.n2 = [1, 0, 0];
        this.n3 = [1, 0, 0];
        this.v1 = 0;
        this.v2 = 0;
        this.v3 = 0;
        this.notIntersectedPolygonValue = 0;
    }
}
const front = (container) => container[0];
const back = (container) => container[container.length - 1];
function createPoint(p1, p2, w) {
    const W = 1. - w;
    return [
        w * p1[0] + W * p2[0],
        w * p1[1] + W * p2[1],
        w * p1[2] + W * p2[2]
    ];
}
function isoValue(v1, v2, iso) {
    return 1. - (Math.abs(iso - v1) / Math.abs(v2 - v1));
}


/***/ }),

/***/ "./lib/skins/private/MarchingTriangles.ts":
/*!************************************************!*\
  !*** ./lib/skins/private/MarchingTriangles.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarchingTriangles": () => (/* binding */ MarchingTriangles)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);

class MarchingTriangles {
    constructor() {
        this.topo_ = [];
        this.lock_ = false;
        this.maxVertexIndex_ = -1;
        this._bounds = [];
    }
    // topo of type BufferAttribute (with item count corresponding to 1 id)
    setup(topo, bounds) {
        this.lock_ = false;
        this.maxVertexIndex_ = -1;
        this._bounds = bounds;
        this.topo_ = [];
        for (let l = 0; l < topo.count; l += 3) {
            let i = topo.getX(l);
            let j = topo.getX(l + 1);
            let k = topo.getX(l + 2);
            this.topo_.push({ i, j, k });
            if (i === j || i === k || j === k) {
                throw new Error(`Error in topology while setting up iso-contouring in 'MarchingTriangles.' At index ${l}, got 3 indices (${i}, ${j}, ${k})`);
            }
            this.maxVertexIndex_ = Math.max(this.maxVertexIndex_, i, j, k);
        }
        this.lock_ = true;
        return true;
    }
    /**
     * Return array of size 2:
     *
     * 1) result[0] represents the connected isoline edges
     *
     * 2) result[1] represents the connected isoline values
     */
    isolines(prop, isovalue) {
        let result = [[]];
        if (this.lock_ === false) {
            return result;
        }
        if (prop.length < 0) {
            return result;
        }
        if (this._bounds === undefined) {
            this._bounds = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.array.minMax(prop.array);
            //const min = Math.min(...prop)
            //const max = Math.max(...prop)
            //this._bounds = [min, max]
        }
        // Store the triangles cross by the iso-surface and for
        // each triangle i stored its value [1,6]
        const tri2code = new Map();
        const cut_edges = [];
        const triangle = [0, 0, 0];
        const connectiviy = new Map(new Map());
        for (let i = 0; i < this.topo_.length; ++i) {
            triangle[0] = this.topo_[i].i;
            triangle[1] = this.topo_[i].j;
            triangle[2] = this.topo_[i].k;
            let t1, t2, t3;
            const p0 = prop.array[triangle[0]];
            const p1 = prop.array[triangle[1]];
            const p2 = prop.array[triangle[2]];
            if (ok(p0, p1, p2, this._bounds[0], this._bounds[1]) === false) {
                continue;
            }
            if ((p0 >= isovalue)) {
                t1 = 1;
            }
            else {
                t1 = 0;
            }
            if ((p1 >= isovalue)) {
                t2 = 1;
            }
            else {
                t2 = 0;
            }
            if ((p2 >= isovalue)) {
                t3 = 1;
            }
            else {
                t3 = 0;
            }
            const tri_code = loockup1[t1][t2][t3];
            // means that this triangle is cut by the isoline
            if (tri_code > 0 && tri_code < 7) {
                tri2code.set(i, tri_code);
                cut_edges[0] = loockup0[tri_code][0];
                cut_edges[1] = loockup0[tri_code][1];
                for (let e = 0; e < 2; ++e) {
                    let v0 = cut_edges[e];
                    let v1 = (v0 + 1) % 3;
                    v0 = triangle[v0];
                    v1 = triangle[v1];
                    let vmin = Math.min(v0, v1);
                    let vmax = Math.max(v0, v1);
                    if (!(vmin in connectiviy)) {
                        let vmax_2_triangles = new Map();
                        vmax_2_triangles.set(vmax, [i]);
                        connectiviy.set(vmin, vmax_2_triangles);
                    }
                    else {
                        connectiviy.get(vmin).get(vmax).push(i);
                    }
                }
            }
        }
        // Extraction...
        do {
            if (tri2code.size <= 0)
                break;
            let isoline = [];
            let values = [];
            const start = tri2code.keys();
            const first_tri = start.next().value;
            let code = tri2code.get(first_tri);
            tri2code.delete(tri2code.keys().next().value);
            if (code < 1 || code > 6) {
                continue;
            }
            triangle[0] = this.topo_[first_tri].i;
            triangle[1] = this.topo_[first_tri].j;
            triangle[2] = this.topo_[first_tri].k;
            cut_edges[0] = loockup0[code][0];
            cut_edges[1] = loockup0[code][1];
            const first_edge = [];
            const next_edge = [];
            for (let e = 0; e < 2; ++e) {
                let v0 = cut_edges[e];
                let v1 = (v0 + 1) % 3;
                v0 = triangle[v0];
                v1 = triangle[v1];
                isoline.push(v0);
                isoline.push(v1);
                values.push((isovalue - prop.array[v0]) / (prop.array[v1] - prop.array[v0]));
                let vmin = Math.min(v0, v1);
                let vmax = Math.max(v0, v1);
                if (e === 0) {
                    first_edge[0] = vmin;
                    first_edge[1] = vmax;
                }
                else {
                    next_edge[0] = vmin;
                    next_edge[1] = vmax;
                }
            }
            let first_e = 0;
            let nb_loop = 0;
            do {
                let current_tri = first_tri;
                do {
                    let adj_trgls = [connectiviy.get(next_edge[0]).get(next_edge[1])];
                    if (adj_trgls.length === 1) {
                        break; // border
                    }
                    current_tri = adj_trgls[0] + adj_trgls[1] - current_tri;
                    let iter = tri2code.get(current_tri);
                    if (!(iter in tri2code)) {
                        break;
                    }
                    code = iter.second;
                    tri2code.delete(iter);
                    // let f = this.topo_[current_tri] ;
                    triangle[0] = this.topo_[current_tri].i;
                    triangle[1] = this.topo_[current_tri].j;
                    triangle[2] = this.topo_[current_tri].k;
                    cut_edges[0] = loockup0[code][0];
                    cut_edges[1] = loockup0[code][1];
                    for (let e = 0; e < 2; ++e) {
                        let v0 = cut_edges[e];
                        let v1 = (v0 + 1) % 3;
                        v0 = triangle[v0];
                        v1 = triangle[v1];
                        let vmin = Math.min(v0, v1);
                        let vmax = Math.max(v0, v1);
                        if (vmin !== next_edge[0] || vmax !== next_edge[1]) {
                            isoline.push(v0);
                            isoline.push(v1);
                            values.push((isovalue - prop.array[v0]) / (prop.array[v1] - prop.array[v0]));
                            next_edge[0] = vmin;
                            next_edge[1] = vmax;
                            break;
                        }
                    }
                } while (true);
                if (next_edge[0] === first_edge[0] && next_edge[1] === first_edge[1]) {
                    // Closed line
                    isoline.push(isoline[0]);
                    isoline.push(isoline[1]);
                    values.push(values[0]);
                    first_e = values.length;
                    break;
                }
                else if (nb_loop === 0) {
                    next_edge[0] = first_edge[0];
                    next_edge[1] = first_edge[1];
                    first_e = values.length;
                }
                ++nb_loop;
            } while (nb_loop < 2);
            if (first_e === values.length) {
                result[0].push(isoline);
                if (result[1] === undefined) {
                    result[1] = [values];
                }
                else {
                    result[1].push(values);
                }
            }
            else {
                let connected_isoline_edges = [];
                let connected_isoline_values = [];
                for (let j = isoline.length - 1; j >= 2 * first_e; --j) {
                    connected_isoline_edges.push(isoline[j]);
                }
                for (let j = values.length - 1; j >= first_e; --j) {
                    connected_isoline_values.push(1.0 - values[j]);
                }
                for (let j = 0; j < 2 * first_e; ++j) {
                    connected_isoline_edges.push(isoline[j]);
                }
                for (let j = 0; j < first_e; ++j) {
                    connected_isoline_values.push(values[j]);
                }
                result[0].push(connected_isoline_edges);
                result[1].push(connected_isoline_values);
            }
        } while (true);
        return result;
    }
}
function ok(p0, p1, p2, min, max) {
    function _in(p, min, max) {
        return p >= min && p <= max;
    }
    return _in(p0, min, max) && _in(p1, min, max) && _in(p2, min, max);
}
const loockup0 = [[-1, -1], [1, 2], [0, 1], [2, 0], [2, 0], [0, 1], [1, 2], [-1, -1]];
const loockup1 = [[[0, 1], [2, 3]], [[4, 5], [6, 7]]];


/***/ }),

/***/ "./lib/skins/skinParameters.ts":
/*!*************************************!*\
  !*** ./lib/skins/skinParameters.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkinParameters": () => (/* binding */ SkinParameters)
/* harmony export */ });
/**
 * @brief Base class for all skin parameters
 * @category Skin Parameters
 */
class SkinParameters {
    constructor({ visible = true }) {
        this.visible = true;
        this.visible = (visible !== undefined) ? visible : true;
    }
    /**
     * Set the value to an existing property of this
     * @param name The name of the property
     * @param value The value
     * @param defaultValue If value is undefined, use the default value
     */
    set(name, value, defaultValue) {
        // Check that property exist on this
        if (this[name] === undefined) {
            throw new Error(`property ${name} does not exist for this`);
        }
        if (value !== undefined) {
            this[name] = value;
            return;
        }
        if (defaultValue === undefined) {
            throw new Error('defaultValue is undefined');
        }
        this[name] = defaultValue;
    }
}


/***/ }),

/***/ "./lib/utils/bufferUtils.ts":
/*!**********************************!*\
  !*** ./lib/utils/bufferUtils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBufferGeometry": () => (/* binding */ createBufferGeometry),
/* harmony export */   "addColorToBufferGeometry": () => (/* binding */ addColorToBufferGeometry),
/* harmony export */   "mergeBufferGeometries": () => (/* binding */ mergeBufferGeometries),
/* harmony export */   "mergeBufferAttributes": () => (/* binding */ mergeBufferAttributes)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalAttribute */ "./lib/utils/normalAttribute.ts");


/**
 * @brief Create a BufferGeometry using [[ASerie]]s
 * @category Buffer utils
 */
function createBufferGeometry(position, indices, creaseAngle) {
    const crease = creaseAngle !== undefined ? creaseAngle : 0;
    const geom = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
    if (position['array'] !== undefined) {
        geom.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(position.array, 3));
    }
    else {
        if (Array.isArray(position)) {
            geom.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(position), 3));
        }
        else if (ArrayBuffer.isView(position)) {
            geom.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(position, 3));
        }
        else {
            throw new Error('position should be an Array, a TypedArray or a Serie');
        }
    }
    if (indices !== undefined) {
        if (indices['array'] !== undefined) {
            geom.setIndex(new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(indices.array, 1));
        }
        else {
            //if (!Array.isArray(indices)) throw new Error('indices should be an Array')
            if (Array.isArray(indices)) {
                console.warn('Deal with Uint16 or Uint32');
                geom.setIndex(new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Uint32Array(indices), 1));
            }
            else if (ArrayBuffer.isView(indices)) {
                geom.setIndex(new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(indices, 1));
            }
            else {
                throw new Error('indices should be an Array, a TypedArray or a Serie');
            }
        }
        if (crease === 0) {
            geom.computeVertexNormals();
        }
        else {
            const array = geom.getAttribute('position').array;
            const normals = (0,_normalAttribute__WEBPACK_IMPORTED_MODULE_1__.normalAttribute)(array, geom.index.array, crease);
            geom.setAttribute('normal', normals);
        }
    }
    geom.computeBoundingBox();
    geom.computeBoundingSphere();
    return geom;
}
/**
 * @brief Add a color attribute in a BufferGeometry
 * @category Buffer utils
 */
function addColorToBufferGeometry(geometry, color, name = 'color') {
    if (color.itemSize !== 3) {
        throw new Error('Serie for color must have count = 3');
    }
    if (geometry.getAttribute('position') === undefined) {
        throw new Error('position is nor defined in geometry');
    }
    if (color.length !== geometry.getAttribute('position').array.length) {
        throw new Error('color length is not equal to vertex length');
    }
    geometry.setAttribute(name, new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(color.array, 3));
    const attr = geometry.getAttribute('color');
    attr.needsUpdate = true;
}
/**
 * @brief Merge sevral BufferGeometry into one
 * @category Buffer utils
 */
function mergeBufferGeometries(geometries, useGroups = false) {
    var isIndexed = geometries[0].index !== null;
    var attributesUsed = new Set(Object.keys(geometries[0].attributes));
    var morphAttributesUsed = new Set(Object.keys(geometries[0].morphAttributes));
    var attributes = {};
    var morphAttributes = {};
    var morphTargetsRelative = geometries[0].morphTargetsRelative;
    var mergedGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
    var offset = 0;
    for (var i = 0; i < geometries.length; ++i) {
        var geometry = geometries[i];
        // ensure that all geometries are indexed, or none
        if (isIndexed !== (geometry.index !== null))
            return null;
        // gather attributes, exit early if they're different
        for (var name in geometry.attributes) {
            if (!attributesUsed.has(name))
                return null;
            if (attributes[name] === undefined)
                attributes[name] = [];
            attributes[name].push(geometry.attributes[name]);
        }
        // gather morph attributes, exit early if they're different
        if (morphTargetsRelative !== geometry.morphTargetsRelative)
            return null;
        for (var name in geometry.morphAttributes) {
            if (!morphAttributesUsed.has(name))
                return null;
            if (morphAttributes[name] === undefined)
                morphAttributes[name] = [];
            morphAttributes[name].push(geometry.morphAttributes[name]);
        }
        // gather .userData
        mergedGeometry.userData.mergedUserData = mergedGeometry.userData.mergedUserData || [];
        mergedGeometry.userData.mergedUserData.push(geometry.userData);
        if (useGroups) {
            var count;
            if (isIndexed) {
                count = geometry.index.count;
            }
            else if (geometry.attributes.position !== undefined) {
                count = geometry.attributes.position.count;
            }
            else {
                return null;
            }
            mergedGeometry.addGroup(offset, count, i);
            offset += count;
        }
    }
    // merge indices
    if (isIndexed) {
        var indexOffset = 0;
        var mergedIndex = [];
        for (var i = 0; i < geometries.length; ++i) {
            var index = geometries[i].index;
            for (var j = 0; j < index.count; ++j) {
                mergedIndex.push(index.getX(j) + indexOffset);
            }
            indexOffset += geometries[i].attributes.position.count;
        }
        mergedGeometry.setIndex(mergedIndex);
    }
    // merge attributes
    for (var name in attributes) {
        var mergedAttribute = mergeBufferAttributes(attributes[name]);
        if (!mergedAttribute)
            return null;
        mergedGeometry.setAttribute(name, mergedAttribute);
    }
    // merge morph attributes
    for (var name in morphAttributes) {
        var numMorphTargets = morphAttributes[name][0].length;
        if (numMorphTargets === 0)
            break;
        mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
        mergedGeometry.morphAttributes[name] = [];
        for (var i = 0; i < numMorphTargets; ++i) {
            var morphAttributesToMerge = [];
            for (var j = 0; j < morphAttributes[name].length; ++j) {
                morphAttributesToMerge.push(morphAttributes[name][j][i]);
            }
            var mergedMorphAttribute = mergeBufferAttributes(morphAttributesToMerge);
            if (!mergedMorphAttribute)
                return null;
            mergedGeometry.morphAttributes[name].push(mergedMorphAttribute);
        }
    }
    return mergedGeometry;
}
/**
 * @brief Merge several BufferAttribute into one
 * @category Buffer utils
 */
function mergeBufferAttributes(attributes) {
    var TypedArray;
    var itemSize;
    var normalized;
    var arrayLength = 0;
    for (var i = 0; i < attributes.length; ++i) {
        var attribute = attributes[i];
        if (attribute["isInterleavedBufferAttribute"])
            return null;
        if (TypedArray === undefined)
            TypedArray = attribute.array.constructor;
        if (TypedArray !== attribute.array.constructor)
            return null;
        if (itemSize === undefined)
            itemSize = attribute.itemSize;
        if (itemSize !== attribute.itemSize)
            return null;
        if (normalized === undefined)
            normalized = attribute.normalized;
        if (normalized !== attribute.normalized)
            return null;
        arrayLength += attribute.array.length;
    }
    var array = new TypedArray(arrayLength);
    var offset = 0;
    for (var i = 0; i < attributes.length; ++i) {
        array.set(attributes[i].array, offset);
        offset += attributes[i].array.length;
    }
    return new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(array, itemSize, normalized);
}


/***/ }),

/***/ "./lib/utils/colorMap.ts":
/*!*******************************!*\
  !*** ./lib/utils/colorMap.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateColorMap": () => (/* binding */ generateColorMap),
/* harmony export */   "colorMapNames": () => (/* binding */ colorMapNames),
/* harmony export */   "addColorMap": () => (/* binding */ addColorMap),
/* harmony export */   "ColorMap": () => (/* binding */ ColorMap)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @author daron1337 / http://daron1337.github.io/
 * @author fmaerten  / https://github.com/xaliphostes
 */

/*
// generate a insar banded color table
//
const J = ['0x0500d5', '0x00baff', '0x00ffc6', '0xfcff00', '0xd00000']
const N = 10
const n = 5
const nn = N*n
const delta = 1/(nn-1)
let j = 0
for (let i=0; i<nn; ++i) {
    console.log('[' + i*delta + ', ' + J[j] + '],')
    ++j
    if (j>=5) j = 0
}
*/
function generateColorMap(name, numberofcolors, duplicate) {
    const map = ColorMapKeywords[name] || ColorMapKeywords.Rainbow;
    const newMap = [];
    let start = 0;
    for (let i = 0; i < duplicate; ++i) {
        map.forEach(m => {
            newMap.push([start + m[0] / duplicate, m[1]]);
        });
        start += 1 / duplicate;
    }
    return new ColorMap(newMap, numberofcolors);
}
function colorMapNames() {
    const names = [];
    for (const [key, value] of Object.entries(ColorMapKeywords)) {
        names.push(key);
    }
    return names;
}
function addColorMap(colormapName, arrayOfColors) {
    ColorMapKeywords[colormapName] = arrayOfColors;
}
/**
 * @category Color Lookup Table
 */
class ColorMap {
    constructor(colormap, numberofcolors) {
        this.map = [];
        this.lut = [];
        this.n = 256;
        this.minV = 0;
        this.maxV = 1;
        this.setColorMap(colormap, numberofcolors);
    }
    static addColorMap(colormapName, arrayOfColors) {
        ColorMapKeywords[colormapName] = arrayOfColors;
    }
    get mapColors() {
        return this.map;
    }
    get canvas() {
        return this.canvas_;
    }
    set(value) {
        if (value instanceof ColorMap) {
            this.copy(value);
        }
        return this;
    }
    get length() {
        return this.map.length;
    }
    setMin(min) {
        this.minV = min;
        return this;
    }
    setMax(max) {
        this.maxV = max;
        return this;
    }
    setColorMap(colormap, numberofcolors) {
        if (Array.isArray(colormap)) {
            this.map = colormap;
        }
        else {
            this.map = ColorMapKeywords[colormap] || ColorMapKeywords.Rainbow;
        }
        this.n = numberofcolors || 32;
        let step = 1.0 / this.n;
        this.lut.length = 0;
        for (let i = 0; i <= 1; i += step) {
            for (let j = 0; j < this.map.length - 1; j++) {
                if (i >= this.map[j][0] && i < this.map[j + 1][0]) {
                    let min = this.map[j][0];
                    let max = this.map[j + 1][0];
                    let minColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color(this.map[j][1]);
                    let maxColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color(this.map[j + 1][1]);
                    let color = minColor.lerp(maxColor, (i - min) / (max - min));
                    this.lut.push(color);
                }
            }
        }
        return this;
    }
    copy(lut) {
        this.lut = lut.lut;
        this.map = lut.map;
        this.n = lut.n;
        this.minV = lut.minV;
        this.maxV = lut.maxV;
        return this;
    }
    getColor(alpha) {
        if (alpha <= this.minV) {
            alpha = this.minV;
        }
        else if (alpha >= this.maxV) {
            alpha = this.maxV;
        }
        alpha = (alpha - this.minV) / (this.maxV - this.minV);
        let colorPosition = Math.round(alpha * this.n);
        if (colorPosition === this.n)
            colorPosition -= 1;
        return this.lut[colorPosition];
    }
    createCanvas(parent = document, width = 1) {
        const canvas = parent.createElement('canvas');
        canvas.width = width;
        canvas.height = this.n;
        this.updateCanvas(canvas);
        return canvas;
    }
    updateCanvas(canvas) {
        this.canvas_ = canvas;
        let ctx = canvas.getContext('2d', { alpha: false });
        /*
        let imageData = ctx.getImageData(0, 0, canvas.width, this.n)
        let data = imageData.data
        let k = 0
        let step = 1.0 / this.n
        for (let i = 1; i >= 0; i -= step) {
            for (let j = this.map.length - 1; j >= 0; j--) {
                if (i < this.map[ j ][ 0 ] && i >= this.map[ j - 1 ][ 0 ]) {
                    let min = this.map[ j - 1 ][ 0 ]
                    let max = this.map[ j ][ 0 ]
                    let minColor = new Color(this.map[ j - 1 ][ 1 ])
                    let maxColor = new Color(this.map[ j ][ 1 ])
                    let color = minColor.lerp(maxColor, (i - min) / (max - min))
                    data[ k * 4     ] = Math.round(color.r * 255)
                    data[ k * 4 + 1 ] = Math.round(color.g * 255)
                    data[ k * 4 + 2 ] = Math.round(color.b * 255)
                    data[ k * 4 + 3 ] = 255
                    k += 1
                }
            }
        }
        ctx.putImageData(imageData, 0, 0)
        */
        let k = 0;
        let step = 1.0 / this.n;
        for (let i = 1; i >= 0; i -= step) {
            for (let j = this.map.length - 1; j >= 0; j--) {
                if (i < this.map[j][0] && i >= this.map[j - 1][0]) {
                    let min = this.map[j - 1][0];
                    let max = this.map[j][0];
                    let minColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color(this.map[j - 1][1]);
                    let maxColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color(this.map[j][1]);
                    let color = minColor.lerp(maxColor, (i - min) / (max - min));
                    ctx.fillStyle = `rgb(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)})`;
                    ctx.fillRect(0, k, 15, 1);
                    k += 1;
                }
            }
        }
        return canvas;
    }
}
let ColorMapKeywords = {
    'Cooltowarm': [
        [0.0, 0x3C4EC2],
        [0.2, 0x9BBCFF],
        [0.5, 0xDCDCDC],
        [0.8, 0xF6A385],
        [1.0, 0xB40426]
    ],
    'Blackbody': [
        [0.0, 0x000000],
        [0.2, 0x780000],
        [0.5, 0xE63200],
        [0.8, 0xFFFF00],
        [1.0, 0xFFFFFF]
    ],
    'Grayscale': [
        [0.0, 0x000000],
        [0.2, 0x404040],
        [0.5, 0x7F7F80],
        [0.8, 0xBFBFBF],
        [1.0, 0xFFFFFF]
    ],
    'Insar': [
        [0.0, 0x0500d5],
        [0.3, 0x00baff],
        [0.5, 0x00ffc6],
        [0.7, 0xfcff00],
        [1.0, 0xd00000]
    ],
    'InsarBanded': [
        [0, 0x0500d5],
        [0.02040816326530612, 0x00baff],
        [0.04081632653061224, 0x00ffc6],
        [0.061224489795918366, 0xfcff00],
        [0.08163265306122448, 0xd00000],
        [0.1020408163265306, 0x0500d5],
        [0.12244897959183673, 0x00baff],
        [0.14285714285714285, 0x00ffc6],
        [0.16326530612244897, 0xfcff00],
        [0.18367346938775508, 0xd00000],
        [0.2040816326530612, 0x0500d5],
        [0.22448979591836732, 0x00baff],
        [0.24489795918367346, 0x00ffc6],
        [0.26530612244897955, 0xfcff00],
        [0.2857142857142857, 0xd00000],
        [0.3061224489795918, 0x0500d5],
        [0.32653061224489793, 0x00baff],
        [0.3469387755102041, 0x00ffc6],
        [0.36734693877551017, 0xfcff00],
        [0.3877551020408163, 0xd00000],
        [0.4081632653061224, 0x0500d5],
        [0.42857142857142855, 0x00baff],
        [0.44897959183673464, 0x00ffc6],
        [0.4693877551020408, 0xfcff00],
        [0.4897959183673469, 0xd00000],
        [0.5102040816326531, 0x0500d5],
        [0.5306122448979591, 0x00baff],
        [0.5510204081632653, 0x00ffc6],
        [0.5714285714285714, 0xfcff00],
        [0.5918367346938775, 0xd00000],
        [0.6122448979591836, 0x0500d5],
        [0.6326530612244897, 0x00baff],
        [0.6530612244897959, 0x00ffc6],
        [0.673469387755102, 0xfcff00],
        [0.6938775510204082, 0xd00000],
        [0.7142857142857142, 0x0500d5],
        [0.7346938775510203, 0x00baff],
        [0.7551020408163265, 0x00ffc6],
        [0.7755102040816326, 0xfcff00],
        [0.7959183673469387, 0xd00000],
        [0.8163265306122448, 0x0500d5],
        [0.836734693877551, 0x00baff],
        [0.8571428571428571, 0x00ffc6],
        [0.8775510204081632, 0xfcff00],
        [0.8979591836734693, 0xd00000],
        [0.9183673469387754, 0x0500d5],
        [0.9387755102040816, 0x00baff],
        [0.9591836734693877, 0x00ffc6],
        [0.9795918367346939, 0xfcff00],
        [0.9999999999999999, 0xd00000]
    ],
    'Rainbow': [
        [0.0, 0xff0000],
        [0.2, 0xfffc00],
        [0.4, 0x00ff06],
        [0.6, 0x00fffc],
        [0.8, 0x0600ff],
        [1.0, 0xf600ff]
    ],
    'Igeoss': [
        [0.00, 0x003627],
        [0.10, 0x008A3B],
        [0.20, 0x68BE0D],
        [0.30, 0xD6DF00],
        [0.40, 0xFAD000],
        [0.50, 0xFFC010],
        [0.60, 0xFFAE0E],
        [0.70, 0xFF9B06],
        [0.80, 0xFA5800],
        [0.90, 0xE80008],
        [1.00, 0x880003]
    ],
    'Stress': [
        [0.0, 0x0000FF],
        [0.33, 0xFFFFFF],
        [0.331, 0x00C800],
        [0.66, 0xFFFFFF],
        [0.661, 0xFF0000],
        [1.0, 0xFFFFFF]
    ],
    'Blue_White_Red': [
        [0.0, 0x0012ff],
        [0.5, 0xffffff],
        [1.0, 0xff0000]
    ],
    'Blue_Green_Red': [
        [0.0, 0x0012ff],
        [0.25, 0xffffff],
        [0.5, 0x00ff00],
        [0.275, 0xffffff],
        [1.0, 0xff0000]
    ],
    'Spectrum': [
        [0.0000, 0xffffff],
        [0.1428, 0xff0000],
        [0.2856, 0xff00fc],
        [0.4284, 0x0600ff],
        [0.5712, 0x00f6ff],
        [0.7140, 0x00ff06],
        [0.8568, 0xfffc00],
        [1.0000, 0xff0000]
    ],
    'Default': [
        [0.00, 0x0c00ff],
        [0.25, 0x00fcff],
        [0.50, 0x00ff0c],
        [0.75, 0xf6ff00],
        [1.00, 0xff0000]
    ],
    'Banded': [
        [0.0000, 0xfff5cd],
        [0.1666, 0xff9600],
        [0.1667, 0xceffd1],
        [0.3333, 0x107100],
        [0.3334, 0xd4e4fb],
        [0.5000, 0x015faf],
        [0.5001, 0xebdefb],
        [0.6666, 0xc5029e],
        [0.6667, 0xfff0cb],
        [0.8333, 0x845d00],
        [0.8334, 0xf9d8d8],
        [1.0000, 0xda0000]
    ]
};


/***/ }),

/***/ "./lib/utils/color_maps.ts":
/*!*********************************!*\
  !*** ./lib/utils/color_maps.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColorMapNames": () => (/* binding */ getColorMapNames),
/* harmony export */   "getColorMap": () => (/* binding */ getColorMap),
/* harmony export */   "evaluate_cmap": () => (/* binding */ evaluate_cmap)
/* harmony export */ });
// https://github.com/timothygebhard/js-colormaps
function getColorMapNames() {
    const names = [];
    for (const [key, value] of Object.entries(dataMaps)) {
        names.push(key);
    }
    return names;
}
/**
 * impory { ColorMap } from 'kepler'
 *
 * ColorMap.addColorMap('gist_ncar', getColorMap('gist_ncar', 20, false).colors)
 * const colorMap = new ColorMap('gist_ncar', 128)
 *
 * getColorMapNames().forEach( name => {
 *      ColorMap.addColorMap(name, getColorMap(name, 40, false).colors)
 * })
 */
function getColorMap(name, nb, reversed = false) {
    if (dataMaps[name] === undefined)
        return undefined;
    const colors = [];
    for (let x = 0; x <= nb; x++) {
        let color = evaluate_cmap(x / nb, name, reversed);
        let r = color[0];
        let g = color[1];
        let b = color[2];
        // const c = new Color(r / 255, g / 255, b / 255).getHexString()
        const c = rgbToHex(r, g, b);
        colors.push([x / nb, c]);
    }
    return {
        'name': name,
        'number': nb,
        'colors': colors,
        'reversed': reversed
    };
    // return colors
}
function evaluate_cmap(x, name, reverse) {
    /**
     * Evaluate colormap `name` at some value `x`.
     * @param {number} x - The value (between 0 and 1) at which to evaluate the colormap.
     * @param {string} name - The name of the colormap (see matplotlib documentation).
     * @reverse {boolean} reverse - Whether or not to reverse the colormap.
     * @return {list} - A 3-tuple (R, G, B) containing the color assigned to `x`.
     */
    // Ensure that the value of `x` is valid (i.e., 0 <= x <= 1)
    if (x < 0 || x > 1) {
        alert('Illegal value for x! Must be in [0, 1].');
    }
    // Ensure that `name` is a valid colormap
    if (!(name in dataMaps)) {
        alert('Colormap ' + name + 'does not exist!');
    }
    // We can get the reverse colormap by evaluating colormap(1-x)
    if (reverse === true) {
        x = 1 - x;
    }
    // Get the colors and whether or not we need to interpolate
    let colors = dataMaps[name]['colors'];
    let interpolate = dataMaps[name]['interpolate'];
    if (interpolate === true) {
        return interpolated(x, colors);
    }
    else {
        return qualitative(x, colors);
    }
}
// -------------------------------------------------------------------
//                              P R I V A T E
// -------------------------------------------------------------------
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
const Accent = partial('Accent');
const Accent_r = partial('Accent_r');
const Blues = partial('Blues');
const Blues_r = partial('Blues_r');
const BrBG = partial('BrBG');
const BrBG_r = partial('BrBG_r');
const BuGn = partial('BuGn');
const BuGn_r = partial('BuGn_r');
const BuPu = partial('BuPu');
const BuPu_r = partial('BuPu_r');
const CMRmap = partial('CMRmap');
const CMRmap_r = partial('CMRmap_r');
const Dark2 = partial('Dark2');
const Dark2_r = partial('Dark2_r');
const GnBu = partial('GnBu');
const GnBu_r = partial('GnBu_r');
const Greens = partial('Greens');
const Greens_r = partial('Greens_r');
const Greys = partial('Greys');
const Greys_r = partial('Greys_r');
const OrRd = partial('OrRd');
const OrRd_r = partial('OrRd_r');
const Oranges = partial('Oranges');
const Oranges_r = partial('Oranges_r');
const PRGn = partial('PRGn');
const PRGn_r = partial('PRGn_r');
const Paired = partial('Paired');
const Paired_r = partial('Paired_r');
const Pastel1 = partial('Pastel1');
const Pastel1_r = partial('Pastel1_r');
const Pastel2 = partial('Pastel2');
const Pastel2_r = partial('Pastel2_r');
const PiYG = partial('PiYG');
const PiYG_r = partial('PiYG_r');
const PuBu = partial('PuBu');
const PuBu_r = partial('PuBu_r');
const PuBuGn = partial('PuBuGn');
const PuBuGn_r = partial('PuBuGn_r');
const PuOr = partial('PuOr');
const PuOr_r = partial('PuOr_r');
const PuRd = partial('PuRd');
const PuRd_r = partial('PuRd_r');
const Purples = partial('Purples');
const Purples_r = partial('Purples_r');
const RdBu = partial('RdBu');
const RdBu_r = partial('RdBu_r');
const RdGy = partial('RdGy');
const RdGy_r = partial('RdGy_r');
const RdPu = partial('RdPu');
const RdPu_r = partial('RdPu_r');
const RdYlBu = partial('RdYlBu');
const RdYlBu_r = partial('RdYlBu_r');
const RdYlGn = partial('RdYlGn');
const RdYlGn_r = partial('RdYlGn_r');
const Reds = partial('Reds');
const Reds_r = partial('Reds_r');
const Set1 = partial('Set1');
const Set1_r = partial('Set1_r');
const Set2 = partial('Set2');
const Set2_r = partial('Set2_r');
const Set3 = partial('Set3');
const Set3_r = partial('Set3_r');
const Spectral = partial('Spectral');
const Spectral_r = partial('Spectral_r');
const Wistia = partial('Wistia');
const Wistia_r = partial('Wistia_r');
const YlGn = partial('YlGn');
const YlGn_r = partial('YlGn_r');
const YlGnBu = partial('YlGnBu');
const YlGnBu_r = partial('YlGnBu_r');
const YlOrBr = partial('YlOrBr');
const YlOrBr_r = partial('YlOrBr_r');
const YlOrRd = partial('YlOrRd');
const YlOrRd_r = partial('YlOrRd_r');
const afmhot = partial('afmhot');
const afmhot_r = partial('afmhot_r');
const autumn = partial('autumn');
const autumn_r = partial('autumn_r');
const binary = partial('binary');
const binary_r = partial('binary_r');
const bone = partial('bone');
const bone_r = partial('bone_r');
const brg = partial('brg');
const brg_r = partial('brg_r');
const bwr = partial('bwr');
const bwr_r = partial('bwr_r');
const cividis = partial('cividis');
const cividis_r = partial('cividis_r');
const cool = partial('cool');
const cool_r = partial('cool_r');
const coolwarm = partial('coolwarm');
const coolwarm_r = partial('coolwarm_r');
const copper = partial('copper');
const copper_r = partial('copper_r');
const cubehelix = partial('cubehelix');
const cubehelix_r = partial('cubehelix_r');
const flag = partial('flag');
const flag_r = partial('flag_r');
const gist_earth = partial('gist_earth');
const gist_earth_r = partial('gist_earth_r');
const gist_gray = partial('gist_gray');
const gist_gray_r = partial('gist_gray_r');
const gist_heat = partial('gist_heat');
const gist_heat_r = partial('gist_heat_r');
const gist_ncar = partial('gist_ncar');
const gist_ncar_r = partial('gist_ncar_r');
const gist_rainbow = partial('gist_rainbow');
const gist_rainbow_r = partial('gist_rainbow_r');
const gist_stern = partial('gist_stern');
const gist_stern_r = partial('gist_stern_r');
const gist_yarg = partial('gist_yarg');
const gist_yarg_r = partial('gist_yarg_r');
const gnuplot = partial('gnuplot');
const gnuplot_r = partial('gnuplot_r');
const gnuplot2 = partial('gnuplot2');
const gnuplot2_r = partial('gnuplot2_r');
const gray = partial('gray');
const gray_r = partial('gray_r');
const hot = partial('hot');
const hot_r = partial('hot_r');
const hsv = partial('hsv');
const hsv_r = partial('hsv_r');
const inferno = partial('inferno');
const inferno_r = partial('inferno_r');
const jet = partial('jet');
const jet_r = partial('jet_r');
const magma = partial('magma');
const magma_r = partial('magma_r');
const nipy_spectral = partial('nipy_spectral');
const nipy_spectral_r = partial('nipy_spectral_r');
const ocean = partial('ocean');
const ocean_r = partial('ocean_r');
const pink = partial('pink');
const pink_r = partial('pink_r');
const plasma = partial('plasma');
const plasma_r = partial('plasma_r');
const prism = partial('prism');
const prism_r = partial('prism_r');
const rainbow = partial('rainbow');
const rainbow_r = partial('rainbow_r');
const seismic = partial('seismic');
const seismic_r = partial('seismic_r');
const spring = partial('spring');
const spring_r = partial('spring_r');
const summer = partial('summer');
const summer_r = partial('summer_r');
const tab10 = partial('tab10');
const tab10_r = partial('tab10_r');
const tab20 = partial('tab20');
const tab20_r = partial('tab20_r');
const tab20b = partial('tab20b');
const tab20b_r = partial('tab20b_r');
const tab20c = partial('tab20c');
const tab20c_r = partial('tab20c_r');
const terrain = partial('terrain');
const terrain_r = partial('terrain_r');
const turbo = partial('turbo');
const turbo_r = partial('turbo_r');
const twilight = partial('twilight');
const twilight_r = partial('twilight_r');
const twilight_shifted = partial('twilight_shifted');
const twilight_shifted_r = partial('twilight_shifted_r');
const viridis = partial('viridis');
const viridis_r = partial('viridis_r');
const winter = partial('winter');
const winter_r = partial('winter_r');
/*
Define auxiliary functions for evaluating colormaps
*/
function interpolated(x, colors) {
    let lo = Math.floor(x * (colors.length - 1));
    let hi = Math.ceil(x * (colors.length - 1));
    let r = Math.round((colors[lo][0] + colors[hi][0]) / 2 * 255);
    let g = Math.round((colors[lo][1] + colors[hi][1]) / 2 * 255);
    let b = Math.round((colors[lo][2] + colors[hi][2]) / 2 * 255);
    return [r, g, b];
}
function qualitative(x, colors) {
    let idx = 0;
    while (x > (idx + 1) / (colors.length - 0)) {
        idx++;
    }
    let r = Math.round(colors[idx][0] * 255);
    let g = Math.round(colors[idx][1] * 255);
    let b = Math.round(colors[idx][2] * 255);
    return [r, g, b];
}
function partial(name) {
    if (name.endsWith('_r')) {
        return function (x) { return evaluate_cmap(x, name.substring(0, name.length - 2), true); };
    }
    else {
        return function (x) { return evaluate_cmap(x, name, false); };
    }
}
const dataMaps = {
    "Accent": {
        "interpolate": false,
        "colors": [[0.498, 0.7882, 0.498], [0.7451, 0.6824, 0.8314], [0.9922, 0.7529, 0.5255], [1.0, 1.0, 0.6], [0.2196, 0.4235, 0.6902], [0.9412, 0.0078, 0.498], [0.749, 0.3569, 0.0902], [0.4, 0.4, 0.4]]
    },
    "Blues": {
        "interpolate": true,
        "colors": [[0.9686, 0.9843, 1.0], [0.9656, 0.9823, 0.999], [0.9625, 0.9804, 0.998], [0.9594, 0.9784, 0.997], [0.9563, 0.9764, 0.9961], [0.9532, 0.9745, 0.9951], [0.9502, 0.9725, 0.9941], [0.9471, 0.9705, 0.9931], [0.944, 0.9686, 0.9921], [0.9409, 0.9666, 0.9911], [0.9379, 0.9646, 0.9902], [0.9348, 0.9627, 0.9892], [0.9317, 0.9607, 0.9882], [0.9286, 0.9587, 0.9872], [0.9256, 0.9568, 0.9862], [0.9225, 0.9548, 0.9852], [0.9194, 0.9528, 0.9843], [0.9163, 0.9508, 0.9833], [0.9133, 0.9489, 0.9823], [0.9102, 0.9469, 0.9813], [0.9071, 0.9449, 0.9803], [0.904, 0.943, 0.9793], [0.901, 0.941, 0.9783], [0.8979, 0.939, 0.9774], [0.8948, 0.9371, 0.9764], [0.8917, 0.9351, 0.9754], [0.8887, 0.9331, 0.9744], [0.8856, 0.9312, 0.9734], [0.8825, 0.9292, 0.9724], [0.8794, 0.9272, 0.9715], [0.8764, 0.9253, 0.9705], [0.8733, 0.9233, 0.9695], [0.8702, 0.9213, 0.9685], [0.8673, 0.9194, 0.9675], [0.8643, 0.9174, 0.9665], [0.8614, 0.9154, 0.9656], [0.8584, 0.9134, 0.9646], [0.8555, 0.9115, 0.9636], [0.8525, 0.9095, 0.9626], [0.8496, 0.9075, 0.9616], [0.8466, 0.9056, 0.9606], [0.8436, 0.9036, 0.9596], [0.8407, 0.9016, 0.9587], [0.8377, 0.8997, 0.9577], [0.8348, 0.8977, 0.9567], [0.8318, 0.8957, 0.9557], [0.8289, 0.8938, 0.9547], [0.8259, 0.8918, 0.9537], [0.823, 0.8898, 0.9528], [0.82, 0.8879, 0.9518], [0.8171, 0.8859, 0.9508], [0.8141, 0.8839, 0.9498], [0.8112, 0.882, 0.9488], [0.8082, 0.88, 0.9478], [0.8053, 0.878, 0.9469], [0.8023, 0.876, 0.9459], [0.7994, 0.8741, 0.9449], [0.7964, 0.8721, 0.9439], [0.7934, 0.8701, 0.9429], [0.7905, 0.8682, 0.9419], [0.7875, 0.8662, 0.9409], [0.7846, 0.8642, 0.94], [0.7816, 0.8623, 0.939], [0.7787, 0.8603, 0.938], [0.7752, 0.8583, 0.9368], [0.7703, 0.8562, 0.9351], [0.7654, 0.8541, 0.9334], [0.7605, 0.852, 0.9317], [0.7556, 0.8499, 0.9299], [0.7506, 0.8478, 0.9282], [0.7457, 0.8458, 0.9265], [0.7408, 0.8437, 0.9248], [0.7359, 0.8416, 0.923], [0.7309, 0.8395, 0.9213], [0.726, 0.8374, 0.9196], [0.7211, 0.8353, 0.9179], [0.7162, 0.8332, 0.9162], [0.7113, 0.8311, 0.9144], [0.7063, 0.829, 0.9127], [0.7014, 0.8269, 0.911], [0.6965, 0.8248, 0.9093], [0.6916, 0.8227, 0.9075], [0.6867, 0.8207, 0.9058], [0.6817, 0.8186, 0.9041], [0.6768, 0.8165, 0.9024], [0.6719, 0.8144, 0.9007], [0.667, 0.8123, 0.8989], [0.6621, 0.8102, 0.8972], [0.6571, 0.8081, 0.8955], [0.6522, 0.806, 0.8938], [0.6473, 0.8039, 0.892], [0.6424, 0.8018, 0.8903], [0.6374, 0.7997, 0.8886], [0.6325, 0.7976, 0.8869], [0.6276, 0.7956, 0.8852], [0.6227, 0.7935, 0.8834], [0.6173, 0.7909, 0.8818], [0.611, 0.7874, 0.8805], [0.6047, 0.784, 0.8791], [0.5984, 0.7805, 0.8778], [0.5922, 0.7771, 0.8764], [0.5859, 0.7736, 0.8751], [0.5796, 0.7702, 0.8737], [0.5733, 0.7668, 0.8724], [0.5671, 0.7633, 0.871], [0.5608, 0.7599, 0.8697], [0.5545, 0.7564, 0.8683], [0.5482, 0.753, 0.867], [0.542, 0.7495, 0.8656], [0.5357, 0.7461, 0.8643], [0.5294, 0.7426, 0.8629], [0.5231, 0.7392, 0.8615], [0.5169, 0.7357, 0.8602], [0.5106, 0.7323, 0.8588], [0.5043, 0.7289, 0.8575], [0.498, 0.7254, 0.8561], [0.4918, 0.722, 0.8548], [0.4855, 0.7185, 0.8534], [0.4792, 0.7151, 0.8521], [0.4729, 0.7116, 0.8507], [0.4667, 0.7082, 0.8494], [0.4604, 0.7047, 0.848], [0.4541, 0.7013, 0.8467], [0.4478, 0.6979, 0.8453], [0.4416, 0.6944, 0.844], [0.4353, 0.691, 0.8426], [0.429, 0.6875, 0.8412], [0.4227, 0.6841, 0.8399], [0.4171, 0.6806, 0.8382], [0.412, 0.6772, 0.8363], [0.407, 0.6737, 0.8343], [0.402, 0.6703, 0.8323], [0.3969, 0.6669, 0.8304], [0.3919, 0.6634, 0.8284], [0.3868, 0.66, 0.8264], [0.3818, 0.6565, 0.8245], [0.3767, 0.6531, 0.8225], [0.3717, 0.6496, 0.8205], [0.3666, 0.6462, 0.8185], [0.3616, 0.6427, 0.8166], [0.3566, 0.6393, 0.8146], [0.3515, 0.6358, 0.8126], [0.3465, 0.6324, 0.8107], [0.3414, 0.629, 0.8087], [0.3364, 0.6255, 0.8067], [0.3313, 0.6221, 0.8048], [0.3263, 0.6186, 0.8028], [0.3212, 0.6152, 0.8008], [0.3162, 0.6117, 0.7989], [0.3112, 0.6083, 0.7969], [0.3061, 0.6048, 0.7949], [0.3011, 0.6014, 0.793], [0.296, 0.598, 0.791], [0.291, 0.5945, 0.789], [0.2859, 0.5911, 0.7871], [0.2809, 0.5876, 0.7851], [0.2758, 0.5842, 0.7831], [0.2708, 0.5807, 0.7811], [0.2658, 0.5773, 0.7792], [0.2607, 0.5738, 0.7772], [0.2563, 0.57, 0.7752], [0.2522, 0.566, 0.7731], [0.2482, 0.5619, 0.771], [0.2441, 0.5578, 0.7689], [0.24, 0.5538, 0.7668], [0.236, 0.5497, 0.7647], [0.2319, 0.5457, 0.7626], [0.2279, 0.5416, 0.7605], [0.2238, 0.5375, 0.7584], [0.2197, 0.5335, 0.7563], [0.2157, 0.5294, 0.7542], [0.2116, 0.5254, 0.7522], [0.2076, 0.5213, 0.7501], [0.2035, 0.5172, 0.748], [0.1994, 0.5132, 0.7459], [0.1954, 0.5091, 0.7438], [0.1913, 0.5051, 0.7417], [0.1873, 0.501, 0.7396], [0.1832, 0.4969, 0.7375], [0.1791, 0.4929, 0.7354], [0.1751, 0.4888, 0.7333], [0.171, 0.4848, 0.7312], [0.167, 0.4807, 0.7292], [0.1629, 0.4766, 0.7271], [0.1588, 0.4726, 0.725], [0.1548, 0.4685, 0.7229], [0.1507, 0.4645, 0.7208], [0.1467, 0.4604, 0.7187], [0.1426, 0.4563, 0.7166], [0.1385, 0.4523, 0.7145], [0.1345, 0.4482, 0.7124], [0.1304, 0.4442, 0.7103], [0.1271, 0.4402, 0.7075], [0.124, 0.4362, 0.7044], [0.121, 0.4323, 0.7013], [0.1179, 0.4284, 0.6983], [0.1148, 0.4244, 0.6952], [0.1117, 0.4205, 0.6921], [0.1087, 0.4166, 0.689], [0.1056, 0.4126, 0.686], [0.1025, 0.4087, 0.6829], [0.0994, 0.4048, 0.6798], [0.0963, 0.4008, 0.6767], [0.0933, 0.3969, 0.6737], [0.0902, 0.3929, 0.6706], [0.0871, 0.389, 0.6675], [0.084, 0.3851, 0.6644], [0.081, 0.3811, 0.6614], [0.0779, 0.3772, 0.6583], [0.0748, 0.3733, 0.6552], [0.0717, 0.3693, 0.6521], [0.0687, 0.3654, 0.6491], [0.0656, 0.3614, 0.646], [0.0625, 0.3575, 0.6429], [0.0594, 0.3536, 0.6398], [0.0564, 0.3496, 0.6368], [0.0533, 0.3457, 0.6337], [0.0502, 0.3418, 0.6306], [0.0471, 0.3378, 0.6275], [0.0441, 0.3339, 0.6245], [0.041, 0.33, 0.6214], [0.0379, 0.326, 0.6183], [0.0348, 0.3221, 0.6152], [0.0318, 0.3181, 0.6121], [0.0314, 0.3141, 0.6065], [0.0314, 0.31, 0.6005], [0.0314, 0.306, 0.5944], [0.0314, 0.3019, 0.5884], [0.0314, 0.2979, 0.5824], [0.0314, 0.2938, 0.5763], [0.0314, 0.2897, 0.5703], [0.0314, 0.2857, 0.5643], [0.0314, 0.2816, 0.5583], [0.0314, 0.2776, 0.5522], [0.0314, 0.2735, 0.5462], [0.0314, 0.2694, 0.5402], [0.0314, 0.2654, 0.5341], [0.0314, 0.2613, 0.5281], [0.0314, 0.2573, 0.5221], [0.0314, 0.2532, 0.5161], [0.0314, 0.2491, 0.51], [0.0314, 0.2451, 0.504], [0.0314, 0.241, 0.498], [0.0314, 0.237, 0.4919], [0.0314, 0.2329, 0.4859], [0.0314, 0.2288, 0.4799], [0.0314, 0.2248, 0.4739], [0.0314, 0.2207, 0.4678], [0.0314, 0.2167, 0.4618], [0.0314, 0.2126, 0.4558], [0.0314, 0.2085, 0.4498], [0.0314, 0.2045, 0.4437], [0.0314, 0.2004, 0.4377], [0.0314, 0.1964, 0.4317], [0.0314, 0.1923, 0.4256], [0.0314, 0.1882, 0.4196]]
    },
    "BrBG": {
        "interpolate": true,
        "colors": [[0.3294, 0.1882, 0.0196], [0.338, 0.1933, 0.0204], [0.3466, 0.1984, 0.0211], [0.3552, 0.2035, 0.0219], [0.3639, 0.2085, 0.0227], [0.3725, 0.2136, 0.0235], [0.3811, 0.2187, 0.0242], [0.3897, 0.2238, 0.025], [0.3983, 0.2288, 0.0258], [0.4069, 0.2339, 0.0265], [0.4155, 0.239, 0.0273], [0.4241, 0.2441, 0.0281], [0.4328, 0.2491, 0.0288], [0.4414, 0.2542, 0.0296], [0.45, 0.2593, 0.0304], [0.4586, 0.2644, 0.0311], [0.4672, 0.2694, 0.0319], [0.4758, 0.2745, 0.0327], [0.4844, 0.2796, 0.0334], [0.493, 0.2847, 0.0342], [0.5017, 0.2897, 0.035], [0.5103, 0.2948, 0.0358], [0.5189, 0.2999, 0.0365], [0.5275, 0.305, 0.0373], [0.5361, 0.31, 0.0381], [0.5447, 0.3151, 0.0388], [0.5529, 0.3213, 0.0419], [0.5608, 0.3287, 0.0473], [0.5686, 0.3361, 0.0527], [0.5765, 0.3435, 0.0581], [0.5843, 0.3509, 0.0634], [0.5922, 0.3582, 0.0688], [0.6, 0.3656, 0.0742], [0.6078, 0.373, 0.0796], [0.6157, 0.3804, 0.085], [0.6235, 0.3878, 0.0903], [0.6314, 0.3952, 0.0957], [0.6392, 0.4025, 0.1011], [0.6471, 0.4099, 0.1065], [0.6549, 0.4173, 0.1119], [0.6627, 0.4247, 0.1173], [0.6706, 0.4321, 0.1226], [0.6784, 0.4394, 0.128], [0.6863, 0.4468, 0.1334], [0.6941, 0.4542, 0.1388], [0.702, 0.4616, 0.1442], [0.7098, 0.469, 0.1496], [0.7176, 0.4764, 0.1549], [0.7255, 0.4837, 0.1603], [0.7333, 0.4911, 0.1657], [0.7412, 0.4985, 0.1711], [0.749, 0.5059, 0.1765], [0.7539, 0.5159, 0.1888], [0.7589, 0.5259, 0.2011], [0.7638, 0.5359, 0.2134], [0.7687, 0.5459, 0.2257], [0.7736, 0.5559, 0.238], [0.7785, 0.5659, 0.2503], [0.7835, 0.5759, 0.2626], [0.7884, 0.5859, 0.2749], [0.7933, 0.5958, 0.2872], [0.7982, 0.6058, 0.2995], [0.8032, 0.6158, 0.3118], [0.8081, 0.6258, 0.3241], [0.813, 0.6358, 0.3364], [0.8179, 0.6458, 0.3487], [0.8228, 0.6558, 0.361], [0.8278, 0.6658, 0.3733], [0.8327, 0.6758, 0.3856], [0.8376, 0.6858, 0.3979], [0.8425, 0.6958, 0.4102], [0.8474, 0.7058, 0.4225], [0.8524, 0.7158, 0.4348], [0.8573, 0.7258, 0.4471], [0.8622, 0.7358, 0.4594], [0.8671, 0.7458, 0.4717], [0.872, 0.7558, 0.484], [0.8763, 0.7637, 0.4956], [0.8798, 0.7696, 0.5063], [0.8834, 0.7754, 0.5171], [0.8869, 0.7812, 0.5279], [0.8904, 0.7871, 0.5386], [0.894, 0.7929, 0.5494], [0.8975, 0.7988, 0.5602], [0.901, 0.8046, 0.5709], [0.9046, 0.8105, 0.5817], [0.9081, 0.8163, 0.5925], [0.9116, 0.8221, 0.6032], [0.9152, 0.828, 0.614], [0.9187, 0.8338, 0.6248], [0.9223, 0.8397, 0.6355], [0.9258, 0.8455, 0.6463], [0.9293, 0.8514, 0.6571], [0.9329, 0.8572, 0.6678], [0.9364, 0.8631, 0.6786], [0.9399, 0.8689, 0.6894], [0.9435, 0.8747, 0.7001], [0.947, 0.8806, 0.7109], [0.9506, 0.8864, 0.7216], [0.9541, 0.8923, 0.7324], [0.9576, 0.8981, 0.7432], [0.9612, 0.904, 0.7539], [0.9647, 0.9098, 0.7647], [0.9646, 0.9118, 0.7724], [0.9644, 0.9138, 0.7801], [0.9642, 0.9158, 0.7878], [0.9641, 0.9178, 0.7955], [0.9639, 0.9198, 0.8032], [0.9638, 0.9218, 0.8108], [0.9636, 0.9238, 0.8185], [0.9635, 0.9258, 0.8262], [0.9633, 0.9278, 0.8339], [0.9632, 0.9298, 0.8416], [0.963, 0.9318, 0.8493], [0.9629, 0.9338, 0.857], [0.9627, 0.9358, 0.8647], [0.9626, 0.9378, 0.8724], [0.9624, 0.9398, 0.88], [0.9622, 0.9418, 0.8877], [0.9621, 0.9438, 0.8954], [0.9619, 0.9458, 0.9031], [0.9618, 0.9478, 0.9108], [0.9616, 0.9498, 0.9185], [0.9615, 0.9518, 0.9262], [0.9613, 0.9538, 0.9339], [0.9612, 0.9558, 0.9416], [0.961, 0.9578, 0.9493], [0.9609, 0.9598, 0.9569], [0.9572, 0.9599, 0.9596], [0.9502, 0.9582, 0.9571], [0.9431, 0.9566, 0.9546], [0.936, 0.9549, 0.9522], [0.929, 0.9532, 0.9497], [0.9219, 0.9515, 0.9473], [0.9148, 0.9498, 0.9448], [0.9077, 0.9481, 0.9423], [0.9007, 0.9464, 0.9399], [0.8936, 0.9447, 0.9374], [0.8865, 0.943, 0.9349], [0.8794, 0.9413, 0.9325], [0.8724, 0.9396, 0.93], [0.8653, 0.9379, 0.9276], [0.8582, 0.9363, 0.9251], [0.8511, 0.9346, 0.9226], [0.8441, 0.9329, 0.9202], [0.837, 0.9312, 0.9177], [0.8299, 0.9295, 0.9153], [0.8228, 0.9278, 0.9128], [0.8158, 0.9261, 0.9103], [0.8087, 0.9244, 0.9079], [0.8016, 0.9227, 0.9054], [0.7945, 0.921, 0.903], [0.7875, 0.9193, 0.9005], [0.7804, 0.9176, 0.898], [0.7695, 0.9132, 0.8925], [0.7586, 0.9087, 0.887], [0.7476, 0.9043, 0.8814], [0.7367, 0.8998, 0.8759], [0.7258, 0.8953, 0.8704], [0.7149, 0.8909, 0.8648], [0.704, 0.8864, 0.8593], [0.693, 0.882, 0.8537], [0.6821, 0.8775, 0.8482], [0.6712, 0.873, 0.8427], [0.6603, 0.8686, 0.8371], [0.6494, 0.8641, 0.8316], [0.6384, 0.8597, 0.8261], [0.6275, 0.8552, 0.8205], [0.6166, 0.8507, 0.815], [0.6057, 0.8463, 0.8095], [0.5948, 0.8418, 0.8039], [0.5839, 0.8374, 0.7984], [0.5729, 0.8329, 0.7928], [0.562, 0.8285, 0.7873], [0.5511, 0.824, 0.7818], [0.5402, 0.8195, 0.7762], [0.5293, 0.8151, 0.7707], [0.5183, 0.8106, 0.7652], [0.5074, 0.8062, 0.7596], [0.4962, 0.7998, 0.753], [0.4847, 0.7915, 0.7453], [0.4731, 0.7832, 0.7376], [0.4616, 0.7749, 0.73], [0.4501, 0.7666, 0.7223], [0.4385, 0.7582, 0.7146], [0.427, 0.7499, 0.7069], [0.4155, 0.7416, 0.6992], [0.4039, 0.7333, 0.6915], [0.3924, 0.725, 0.6838], [0.3809, 0.7167, 0.6761], [0.3693, 0.7084, 0.6684], [0.3578, 0.7001, 0.6607], [0.3463, 0.6918, 0.6531], [0.3347, 0.6835, 0.6454], [0.3232, 0.6752, 0.6377], [0.3116, 0.6669, 0.63], [0.3001, 0.6586, 0.6223], [0.2886, 0.6503, 0.6146], [0.277, 0.642, 0.6069], [0.2655, 0.6337, 0.5992], [0.254, 0.6254, 0.5915], [0.2424, 0.6171, 0.5839], [0.2309, 0.6088, 0.5762], [0.2194, 0.6005, 0.5685], [0.2078, 0.5922, 0.5608], [0.1998, 0.5846, 0.5532], [0.1918, 0.5771, 0.5457], [0.1839, 0.5696, 0.5382], [0.1759, 0.562, 0.5306], [0.1679, 0.5545, 0.5231], [0.1599, 0.5469, 0.5156], [0.1519, 0.5394, 0.508], [0.1439, 0.5319, 0.5005], [0.1359, 0.5243, 0.493], [0.1279, 0.5168, 0.4854], [0.1199, 0.5093, 0.4779], [0.1119, 0.5017, 0.4704], [0.1039, 0.4942, 0.4628], [0.0959, 0.4867, 0.4553], [0.0879, 0.4791, 0.4478], [0.0799, 0.4716, 0.4402], [0.0719, 0.4641, 0.4327], [0.0639, 0.4565, 0.4251], [0.0559, 0.449, 0.4176], [0.0479, 0.4414, 0.4101], [0.0399, 0.4339, 0.4025], [0.0319, 0.4264, 0.395], [0.0239, 0.4188, 0.3875], [0.0159, 0.4113, 0.3799], [0.0079, 0.4038, 0.3724], [0.0038, 0.3968, 0.3651], [0.0037, 0.3903, 0.358], [0.0035, 0.3839, 0.3509], [0.0034, 0.3774, 0.3439], [0.0032, 0.3709, 0.3368], [0.0031, 0.3645, 0.3297], [0.0029, 0.358, 0.3226], [0.0028, 0.3516, 0.3156], [0.0026, 0.3451, 0.3085], [0.0025, 0.3386, 0.3014], [0.0023, 0.3322, 0.2943], [0.0022, 0.3257, 0.2873], [0.002, 0.3193, 0.2802], [0.0018, 0.3128, 0.2731], [0.0017, 0.3063, 0.2661], [0.0015, 0.2999, 0.259], [0.0014, 0.2934, 0.2519], [0.0012, 0.287, 0.2448], [0.0011, 0.2805, 0.2378], [0.0009, 0.274, 0.2307], [0.0008, 0.2676, 0.2236], [0.0006, 0.2611, 0.2165], [0.0005, 0.2547, 0.2095], [0.0003, 0.2482, 0.2024], [0.0002, 0.2418, 0.1953], [0.0, 0.2353, 0.1882]]
    },
    "BuGn": {
        "interpolate": true,
        "colors": [[0.9686, 0.9882, 0.9922], [0.9664, 0.9874, 0.9917], [0.9642, 0.9865, 0.9912], [0.962, 0.9857, 0.9907], [0.9598, 0.9848, 0.9902], [0.9576, 0.9839, 0.9897], [0.9553, 0.9831, 0.9892], [0.9531, 0.9822, 0.9887], [0.9509, 0.9813, 0.9882], [0.9487, 0.9805, 0.9877], [0.9465, 0.9796, 0.9872], [0.9443, 0.9788, 0.9867], [0.9421, 0.9779, 0.9863], [0.9398, 0.977, 0.9858], [0.9376, 0.9762, 0.9853], [0.9354, 0.9753, 0.9848], [0.9332, 0.9745, 0.9843], [0.931, 0.9736, 0.9838], [0.9288, 0.9727, 0.9833], [0.9266, 0.9719, 0.9828], [0.9243, 0.971, 0.9823], [0.9221, 0.9701, 0.9818], [0.9199, 0.9693, 0.9813], [0.9177, 0.9684, 0.9808], [0.9155, 0.9676, 0.9803], [0.9133, 0.9667, 0.9799], [0.911, 0.9658, 0.9794], [0.9088, 0.965, 0.9789], [0.9066, 0.9641, 0.9784], [0.9044, 0.9633, 0.9779], [0.9022, 0.9624, 0.9774], [0.9, 0.9615, 0.9769], [0.8977, 0.9606, 0.9762], [0.8946, 0.9595, 0.9738], [0.8915, 0.9584, 0.9715], [0.8884, 0.9573, 0.9692], [0.8854, 0.9562, 0.9668], [0.8823, 0.9551, 0.9645], [0.8792, 0.954, 0.9622], [0.8761, 0.9529, 0.9598], [0.873, 0.9518, 0.9575], [0.87, 0.9507, 0.9551], [0.8669, 0.9496, 0.9528], [0.8638, 0.9485, 0.9505], [0.8607, 0.9474, 0.9481], [0.8577, 0.9463, 0.9458], [0.8546, 0.9451, 0.9435], [0.8515, 0.944, 0.9411], [0.8484, 0.9429, 0.9388], [0.8454, 0.9418, 0.9364], [0.8423, 0.9407, 0.9341], [0.8392, 0.9396, 0.9318], [0.8361, 0.9385, 0.9294], [0.8331, 0.9374, 0.9271], [0.83, 0.9363, 0.9248], [0.8269, 0.9352, 0.9224], [0.8238, 0.9341, 0.9201], [0.8208, 0.933, 0.9177], [0.8177, 0.9319, 0.9154], [0.8146, 0.9307, 0.9131], [0.8115, 0.9296, 0.9107], [0.8085, 0.9285, 0.9084], [0.8054, 0.9274, 0.9061], [0.8023, 0.9263, 0.9037], [0.7984, 0.9249, 0.9011], [0.7922, 0.9224, 0.8975], [0.7859, 0.92, 0.8939], [0.7796, 0.9175, 0.8904], [0.7733, 0.915, 0.8868], [0.7671, 0.9126, 0.8832], [0.7608, 0.9101, 0.8797], [0.7545, 0.9077, 0.8761], [0.7482, 0.9052, 0.8725], [0.742, 0.9027, 0.869], [0.7357, 0.9003, 0.8654], [0.7294, 0.8978, 0.8618], [0.7231, 0.8953, 0.8583], [0.7169, 0.8929, 0.8547], [0.7106, 0.8904, 0.8511], [0.7043, 0.888, 0.8476], [0.698, 0.8855, 0.844], [0.6918, 0.883, 0.8404], [0.6855, 0.8806, 0.8368], [0.6792, 0.8781, 0.8333], [0.6729, 0.8757, 0.8297], [0.6667, 0.8732, 0.8261], [0.6604, 0.8707, 0.8226], [0.6541, 0.8683, 0.819], [0.6478, 0.8658, 0.8154], [0.6416, 0.8634, 0.8119], [0.6353, 0.8609, 0.8083], [0.629, 0.8584, 0.8047], [0.6227, 0.856, 0.8012], [0.6165, 0.8535, 0.7976], [0.6102, 0.8511, 0.794], [0.6039, 0.8486, 0.7905], [0.5976, 0.846, 0.7865], [0.5914, 0.8433, 0.782], [0.5851, 0.8406, 0.7774], [0.5788, 0.8379, 0.7729], [0.5725, 0.8352, 0.7683], [0.5663, 0.8325, 0.7638], [0.56, 0.8298, 0.7592], [0.5537, 0.8271, 0.7547], [0.5475, 0.8244, 0.7501], [0.5412, 0.8217, 0.7456], [0.5349, 0.819, 0.741], [0.5286, 0.8163, 0.7365], [0.5224, 0.8136, 0.7319], [0.5161, 0.8109, 0.7274], [0.5098, 0.8082, 0.7228], [0.5035, 0.8054, 0.7182], [0.4973, 0.8027, 0.7137], [0.491, 0.8, 0.7091], [0.4847, 0.7973, 0.7046], [0.4784, 0.7946, 0.7], [0.4722, 0.7919, 0.6955], [0.4659, 0.7892, 0.6909], [0.4596, 0.7865, 0.6864], [0.4533, 0.7838, 0.6818], [0.4471, 0.7811, 0.6773], [0.4408, 0.7784, 0.6727], [0.4345, 0.7757, 0.6682], [0.4282, 0.773, 0.6636], [0.422, 0.7703, 0.6591], [0.4157, 0.7676, 0.6545], [0.4094, 0.7648, 0.65], [0.4031, 0.7621, 0.6454], [0.3977, 0.7596, 0.6403], [0.3932, 0.7571, 0.6346], [0.3886, 0.7546, 0.629], [0.3841, 0.7522, 0.6233], [0.3795, 0.7497, 0.6177], [0.375, 0.7473, 0.612], [0.3704, 0.7448, 0.6064], [0.3659, 0.7423, 0.6007], [0.3613, 0.7399, 0.595], [0.3568, 0.7374, 0.5894], [0.3522, 0.7349, 0.5837], [0.3477, 0.7325, 0.5781], [0.3431, 0.73, 0.5724], [0.3385, 0.7276, 0.5667], [0.334, 0.7251, 0.5611], [0.3294, 0.7226, 0.5554], [0.3249, 0.7202, 0.5498], [0.3203, 0.7177, 0.5441], [0.3158, 0.7153, 0.5384], [0.3112, 0.7128, 0.5328], [0.3067, 0.7103, 0.5271], [0.3021, 0.7079, 0.5215], [0.2976, 0.7054, 0.5158], [0.293, 0.703, 0.5101], [0.2885, 0.7005, 0.5045], [0.2839, 0.698, 0.4988], [0.2794, 0.6956, 0.4932], [0.2748, 0.6931, 0.4875], [0.2703, 0.6907, 0.4818], [0.2657, 0.6882, 0.4762], [0.2612, 0.6857, 0.4705], [0.2566, 0.6833, 0.4649], [0.2526, 0.6797, 0.459], [0.2489, 0.6754, 0.4529], [0.2452, 0.671, 0.4469], [0.2415, 0.6667, 0.4409], [0.2378, 0.6624, 0.4349], [0.2341, 0.6581, 0.4288], [0.2304, 0.6538, 0.4228], [0.2268, 0.6495, 0.4168], [0.2231, 0.6452, 0.4107], [0.2194, 0.6409, 0.4047], [0.2157, 0.6366, 0.3987], [0.212, 0.6323, 0.3927], [0.2083, 0.628, 0.3866], [0.2046, 0.6237, 0.3806], [0.2009, 0.6194, 0.3746], [0.1972, 0.6151, 0.3686], [0.1935, 0.6108, 0.3625], [0.1899, 0.6065, 0.3565], [0.1862, 0.6022, 0.3505], [0.1825, 0.5978, 0.3444], [0.1788, 0.5935, 0.3384], [0.1751, 0.5892, 0.3324], [0.1714, 0.5849, 0.3264], [0.1677, 0.5806, 0.3203], [0.164, 0.5763, 0.3143], [0.1603, 0.572, 0.3083], [0.1566, 0.5677, 0.3022], [0.1529, 0.5634, 0.2962], [0.1493, 0.5591, 0.2902], [0.1456, 0.5548, 0.2842], [0.1419, 0.5505, 0.2781], [0.1382, 0.5462, 0.2721], [0.134, 0.5423, 0.2683], [0.1297, 0.5386, 0.2652], [0.1254, 0.5349, 0.2621], [0.1211, 0.5313, 0.2591], [0.1168, 0.5276, 0.256], [0.1125, 0.5239, 0.2529], [0.1082, 0.5202, 0.2498], [0.1039, 0.5165, 0.2468], [0.0996, 0.5128, 0.2437], [0.0953, 0.5091, 0.2406], [0.091, 0.5054, 0.2375], [0.0867, 0.5017, 0.2344], [0.0824, 0.498, 0.2314], [0.078, 0.4943, 0.2283], [0.0737, 0.4907, 0.2252], [0.0694, 0.487, 0.2221], [0.0651, 0.4833, 0.2191], [0.0608, 0.4796, 0.216], [0.0565, 0.4759, 0.2129], [0.0522, 0.4722, 0.2098], [0.0479, 0.4685, 0.2068], [0.0436, 0.4648, 0.2037], [0.0393, 0.4611, 0.2006], [0.035, 0.4574, 0.1975], [0.0307, 0.4537, 0.1945], [0.0264, 0.4501, 0.1914], [0.0221, 0.4464, 0.1883], [0.0178, 0.4427, 0.1852], [0.0135, 0.439, 0.1822], [0.0092, 0.4353, 0.1791], [0.0048, 0.4316, 0.176], [0.0005, 0.4279, 0.1729], [0.0, 0.423, 0.1707], [0.0, 0.418, 0.1686], [0.0, 0.4129, 0.1665], [0.0, 0.4079, 0.1644], [0.0, 0.4029, 0.1624], [0.0, 0.3978, 0.1603], [0.0, 0.3928, 0.1582], [0.0, 0.3877, 0.1561], [0.0, 0.3827, 0.154], [0.0, 0.3776, 0.1519], [0.0, 0.3726, 0.1498], [0.0, 0.3676, 0.1477], [0.0, 0.3625, 0.1456], [0.0, 0.3575, 0.1435], [0.0, 0.3524, 0.1414], [0.0, 0.3474, 0.1393], [0.0, 0.3423, 0.1373], [0.0, 0.3373, 0.1352], [0.0, 0.3322, 0.1331], [0.0, 0.3272, 0.131], [0.0, 0.3222, 0.1289], [0.0, 0.3171, 0.1268], [0.0, 0.3121, 0.1247], [0.0, 0.307, 0.1226], [0.0, 0.302, 0.1205], [0.0, 0.2969, 0.1184], [0.0, 0.2919, 0.1163], [0.0, 0.2868, 0.1142], [0.0, 0.2818, 0.1122], [0.0, 0.2768, 0.1101], [0.0, 0.2717, 0.108], [0.0, 0.2667, 0.1059]]
    }, "BuPu": { "interpolate": true, "colors": [[0.9686, 0.9882, 0.9922], [0.9658, 0.9863, 0.991], [0.963, 0.9843, 0.9899], [0.9601, 0.9823, 0.9888], [0.9573, 0.9804, 0.9877], [0.9545, 0.9784, 0.9866], [0.9516, 0.9764, 0.9855], [0.9488, 0.9745, 0.9844], [0.946, 0.9725, 0.9833], [0.9432, 0.9705, 0.9822], [0.9403, 0.9686, 0.9811], [0.9375, 0.9666, 0.98], [0.9347, 0.9646, 0.9789], [0.9318, 0.9626, 0.9778], [0.929, 0.9607, 0.9767], [0.9262, 0.9587, 0.9755], [0.9234, 0.9567, 0.9744], [0.9205, 0.9548, 0.9733], [0.9177, 0.9528, 0.9722], [0.9149, 0.9508, 0.9711], [0.912, 0.9489, 0.97], [0.9092, 0.9469, 0.9689], [0.9064, 0.9449, 0.9678], [0.9035, 0.943, 0.9667], [0.9007, 0.941, 0.9656], [0.8979, 0.939, 0.9645], [0.8951, 0.9371, 0.9634], [0.8922, 0.9351, 0.9623], [0.8894, 0.9331, 0.9612], [0.8866, 0.9311, 0.96], [0.8837, 0.9292, 0.9589], [0.8809, 0.9272, 0.9578], [0.8779, 0.9251, 0.9566], [0.8739, 0.922, 0.9549], [0.8698, 0.919, 0.9532], [0.8657, 0.9159, 0.9515], [0.8617, 0.9128, 0.9498], [0.8576, 0.9097, 0.948], [0.8536, 0.9067, 0.9463], [0.8495, 0.9036, 0.9446], [0.8454, 0.9005, 0.9429], [0.8414, 0.8974, 0.9411], [0.8373, 0.8943, 0.9394], [0.8333, 0.8913, 0.9377], [0.8292, 0.8882, 0.936], [0.8251, 0.8851, 0.9343], [0.8211, 0.882, 0.9325], [0.817, 0.879, 0.9308], [0.813, 0.8759, 0.9291], [0.8089, 0.8728, 0.9274], [0.8048, 0.8697, 0.9256], [0.8008, 0.8667, 0.9239], [0.7967, 0.8636, 0.9222], [0.7927, 0.8605, 0.9205], [0.7886, 0.8574, 0.9188], [0.7845, 0.8544, 0.917], [0.7805, 0.8513, 0.9153], [0.7764, 0.8482, 0.9136], [0.7724, 0.8451, 0.9119], [0.7683, 0.8421, 0.9101], [0.7642, 0.839, 0.9084], [0.7602, 0.8359, 0.9067], [0.7561, 0.8328, 0.905], [0.7521, 0.8298, 0.9033], [0.748, 0.8267, 0.9016], [0.7439, 0.8239, 0.9001], [0.7399, 0.8211, 0.8986], [0.7358, 0.8183, 0.8972], [0.7318, 0.8154, 0.8957], [0.7277, 0.8126, 0.8942], [0.7236, 0.8098, 0.8927], [0.7196, 0.8069, 0.8913], [0.7155, 0.8041, 0.8898], [0.7115, 0.8013, 0.8883], [0.7074, 0.7984, 0.8868], [0.7033, 0.7956, 0.8854], [0.6993, 0.7928, 0.8839], [0.6952, 0.79, 0.8824], [0.6912, 0.7871, 0.8809], [0.6871, 0.7843, 0.8794], [0.683, 0.7815, 0.878], [0.679, 0.7786, 0.8765], [0.6749, 0.7758, 0.875], [0.6709, 0.773, 0.8735], [0.6668, 0.7701, 0.8721], [0.6627, 0.7673, 0.8706], [0.6587, 0.7645, 0.8691], [0.6546, 0.7617, 0.8676], [0.6506, 0.7588, 0.8662], [0.6465, 0.756, 0.8647], [0.6424, 0.7532, 0.8632], [0.6384, 0.7503, 0.8617], [0.6343, 0.7475, 0.8603], [0.6303, 0.7447, 0.8588], [0.6262, 0.7419, 0.8573], [0.6221, 0.739, 0.8558], [0.6188, 0.7355, 0.854], [0.6166, 0.7308, 0.8515], [0.6143, 0.7262, 0.8491], [0.6121, 0.7215, 0.8466], [0.6099, 0.7168, 0.8441], [0.6077, 0.7121, 0.8417], [0.6055, 0.7075, 0.8392], [0.6033, 0.7028, 0.8368], [0.6011, 0.6981, 0.8343], [0.5988, 0.6934, 0.8318], [0.5966, 0.6888, 0.8294], [0.5944, 0.6841, 0.8269], [0.5922, 0.6794, 0.8245], [0.59, 0.6747, 0.822], [0.5878, 0.67, 0.8195], [0.5856, 0.6654, 0.8171], [0.5833, 0.6607, 0.8146], [0.5811, 0.656, 0.8121], [0.5789, 0.6513, 0.8097], [0.5767, 0.6467, 0.8072], [0.5745, 0.642, 0.8048], [0.5723, 0.6373, 0.8023], [0.5701, 0.6326, 0.7998], [0.5678, 0.628, 0.7974], [0.5656, 0.6233, 0.7949], [0.5634, 0.6186, 0.7925], [0.5612, 0.6139, 0.79], [0.559, 0.6093, 0.7875], [0.5568, 0.6046, 0.7851], [0.5546, 0.5999, 0.7826], [0.5523, 0.5952, 0.7802], [0.5501, 0.5906, 0.7777], [0.549, 0.5856, 0.7752], [0.549, 0.5803, 0.7726], [0.549, 0.575, 0.77], [0.549, 0.5697, 0.7674], [0.549, 0.5644, 0.7648], [0.549, 0.5591, 0.7623], [0.549, 0.5538, 0.7597], [0.549, 0.5486, 0.7571], [0.549, 0.5433, 0.7545], [0.549, 0.538, 0.7519], [0.549, 0.5327, 0.7493], [0.549, 0.5274, 0.7468], [0.549, 0.5221, 0.7442], [0.549, 0.5168, 0.7416], [0.549, 0.5115, 0.739], [0.549, 0.5062, 0.7364], [0.549, 0.5009, 0.7338], [0.549, 0.4957, 0.7313], [0.549, 0.4904, 0.7287], [0.549, 0.4851, 0.7261], [0.549, 0.4798, 0.7235], [0.549, 0.4745, 0.7209], [0.549, 0.4692, 0.7183], [0.549, 0.4639, 0.7158], [0.549, 0.4586, 0.7132], [0.549, 0.4533, 0.7106], [0.549, 0.448, 0.708], [0.549, 0.4428, 0.7054], [0.549, 0.4375, 0.7028], [0.549, 0.4322, 0.7003], [0.549, 0.4269, 0.6977], [0.549, 0.4216, 0.6951], [0.5487, 0.4164, 0.6926], [0.5482, 0.4112, 0.6901], [0.5477, 0.406, 0.6877], [0.5472, 0.4009, 0.6852], [0.5467, 0.3957, 0.6827], [0.5463, 0.3905, 0.6803], [0.5458, 0.3854, 0.6778], [0.5453, 0.3802, 0.6754], [0.5448, 0.375, 0.6729], [0.5443, 0.3699, 0.6704], [0.5438, 0.3647, 0.668], [0.5433, 0.3595, 0.6655], [0.5428, 0.3544, 0.6631], [0.5423, 0.3492, 0.6606], [0.5418, 0.344, 0.6581], [0.5413, 0.3389, 0.6557], [0.5408, 0.3337, 0.6532], [0.5403, 0.3285, 0.6507], [0.5399, 0.3234, 0.6483], [0.5394, 0.3182, 0.6458], [0.5389, 0.313, 0.6434], [0.5384, 0.3079, 0.6409], [0.5379, 0.3027, 0.6384], [0.5374, 0.2975, 0.636], [0.5369, 0.2924, 0.6335], [0.5364, 0.2872, 0.6311], [0.5359, 0.282, 0.6286], [0.5354, 0.2769, 0.6261], [0.5349, 0.2717, 0.6237], [0.5344, 0.2665, 0.6212], [0.5339, 0.2614, 0.6188], [0.5335, 0.2562, 0.6163], [0.5327, 0.2503, 0.6126], [0.5318, 0.2441, 0.6086], [0.531, 0.238, 0.6045], [0.5301, 0.2318, 0.6005], [0.5292, 0.2257, 0.5964], [0.5284, 0.2195, 0.5923], [0.5275, 0.2134, 0.5883], [0.5267, 0.2072, 0.5842], [0.5258, 0.2011, 0.5802], [0.5249, 0.1949, 0.5761], [0.5241, 0.1888, 0.572], [0.5232, 0.1826, 0.568], [0.5224, 0.1765, 0.5639], [0.5215, 0.1703, 0.5599], [0.5206, 0.1642, 0.5558], [0.5198, 0.158, 0.5517], [0.5189, 0.1519, 0.5477], [0.518, 0.1457, 0.5436], [0.5172, 0.1396, 0.5396], [0.5163, 0.1334, 0.5355], [0.5155, 0.1273, 0.5314], [0.5146, 0.1211, 0.5274], [0.5137, 0.115, 0.5233], [0.5129, 0.1088, 0.5193], [0.512, 0.1027, 0.5152], [0.5112, 0.0965, 0.5111], [0.5103, 0.0903, 0.5071], [0.5094, 0.0842, 0.503], [0.5086, 0.078, 0.499], [0.5077, 0.0719, 0.4949], [0.5069, 0.0657, 0.4908], [0.506, 0.0596, 0.4868], [0.5003, 0.0572, 0.481], [0.4939, 0.0554, 0.475], [0.4875, 0.0535, 0.4689], [0.4811, 0.0517, 0.4629], [0.4747, 0.0498, 0.4569], [0.4683, 0.048, 0.4509], [0.4619, 0.0461, 0.4448], [0.4555, 0.0443, 0.4388], [0.4491, 0.0424, 0.4328], [0.4427, 0.0406, 0.4267], [0.4363, 0.0388, 0.4207], [0.4299, 0.0369, 0.4147], [0.4235, 0.0351, 0.4087], [0.4171, 0.0332, 0.4026], [0.4107, 0.0314, 0.3966], [0.4043, 0.0295, 0.3906], [0.3979, 0.0277, 0.3845], [0.3915, 0.0258, 0.3785], [0.3851, 0.024, 0.3725], [0.3787, 0.0221, 0.3665], [0.3723, 0.0203, 0.3604], [0.3659, 0.0185, 0.3544], [0.3595, 0.0166, 0.3484], [0.3531, 0.0148, 0.3423], [0.3467, 0.0129, 0.3363], [0.3403, 0.0111, 0.3303], [0.3339, 0.0092, 0.3243], [0.3276, 0.0074, 0.3182], [0.3212, 0.0055, 0.3122], [0.3148, 0.0037, 0.3062], [0.3084, 0.0018, 0.3001], [0.302, 0.0, 0.2941]] }, "CMRmap": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0047, 0.0047, 0.0157], [0.0094, 0.0094, 0.0314], [0.0141, 0.0141, 0.0471], [0.0188, 0.0188, 0.0627], [0.0235, 0.0235, 0.0784], [0.0282, 0.0282, 0.0941], [0.0329, 0.0329, 0.1098], [0.0376, 0.0376, 0.1255], [0.0424, 0.0424, 0.1412], [0.0471, 0.0471, 0.1569], [0.0518, 0.0518, 0.1725], [0.0565, 0.0565, 0.1882], [0.0612, 0.0612, 0.2039], [0.0659, 0.0659, 0.2196], [0.0706, 0.0706, 0.2353], [0.0753, 0.0753, 0.251], [0.08, 0.08, 0.2667], [0.0847, 0.0847, 0.2824], [0.0894, 0.0894, 0.298], [0.0941, 0.0941, 0.3137], [0.0988, 0.0988, 0.3294], [0.1035, 0.1035, 0.3451], [0.1082, 0.1082, 0.3608], [0.1129, 0.1129, 0.3765], [0.1176, 0.1176, 0.3922], [0.1224, 0.1224, 0.4078], [0.1271, 0.1271, 0.4235], [0.1318, 0.1318, 0.4392], [0.1365, 0.1365, 0.4549], [0.1412, 0.1412, 0.4706], [0.1459, 0.1459, 0.4863], [0.1506, 0.15, 0.501], [0.1553, 0.15, 0.5088], [0.16, 0.15, 0.5167], [0.1647, 0.15, 0.5245], [0.1694, 0.15, 0.5324], [0.1741, 0.15, 0.5402], [0.1788, 0.15, 0.548], [0.1835, 0.15, 0.5559], [0.1882, 0.15, 0.5637], [0.1929, 0.15, 0.5716], [0.1976, 0.15, 0.5794], [0.2024, 0.15, 0.5873], [0.2071, 0.15, 0.5951], [0.2118, 0.15, 0.6029], [0.2165, 0.15, 0.6108], [0.2212, 0.15, 0.6186], [0.2259, 0.15, 0.6265], [0.2306, 0.15, 0.6343], [0.2353, 0.15, 0.6422], [0.24, 0.15, 0.65], [0.2447, 0.15, 0.6578], [0.2494, 0.15, 0.6657], [0.2541, 0.15, 0.6735], [0.2588, 0.15, 0.6814], [0.2635, 0.15, 0.6892], [0.2682, 0.15, 0.6971], [0.2729, 0.15, 0.7049], [0.2776, 0.15, 0.7127], [0.2824, 0.15, 0.7206], [0.2871, 0.15, 0.7284], [0.2918, 0.15, 0.7363], [0.2965, 0.15, 0.7441], [0.3024, 0.1504, 0.748], [0.3118, 0.152, 0.7402], [0.3212, 0.1535, 0.7324], [0.3306, 0.1551, 0.7245], [0.34, 0.1567, 0.7167], [0.3494, 0.1582, 0.7088], [0.3588, 0.1598, 0.701], [0.3682, 0.1614, 0.6931], [0.3776, 0.1629, 0.6853], [0.3871, 0.1645, 0.6775], [0.3965, 0.1661, 0.6696], [0.4059, 0.1676, 0.6618], [0.4153, 0.1692, 0.6539], [0.4247, 0.1708, 0.6461], [0.4341, 0.1724, 0.6382], [0.4435, 0.1739, 0.6304], [0.4529, 0.1755, 0.6225], [0.4624, 0.1771, 0.6147], [0.4718, 0.1786, 0.6069], [0.4812, 0.1802, 0.599], [0.4906, 0.1818, 0.5912], [0.5, 0.1833, 0.5833], [0.5094, 0.1849, 0.5755], [0.5188, 0.1865, 0.5676], [0.5282, 0.188, 0.5598], [0.5376, 0.1896, 0.552], [0.5471, 0.1912, 0.5441], [0.5565, 0.1927, 0.5363], [0.5659, 0.1943, 0.5284], [0.5753, 0.1959, 0.5206], [0.5847, 0.1975, 0.5127], [0.5941, 0.199, 0.5049], [0.6047, 0.2006, 0.4959], [0.6173, 0.2022, 0.4849], [0.6298, 0.2037, 0.4739], [0.6424, 0.2053, 0.4629], [0.6549, 0.2069, 0.452], [0.6675, 0.2084, 0.441], [0.68, 0.21, 0.43], [0.6925, 0.2116, 0.419], [0.7051, 0.2131, 0.408], [0.7176, 0.2147, 0.3971], [0.7302, 0.2163, 0.3861], [0.7427, 0.2178, 0.3751], [0.7553, 0.2194, 0.3641], [0.7678, 0.221, 0.3531], [0.7804, 0.2225, 0.3422], [0.7929, 0.2241, 0.3312], [0.8055, 0.2257, 0.3202], [0.818, 0.2273, 0.3092], [0.8306, 0.2288, 0.2982], [0.8431, 0.2304, 0.2873], [0.8557, 0.232, 0.2763], [0.8682, 0.2335, 0.2653], [0.8808, 0.2351, 0.2543], [0.8933, 0.2367, 0.2433], [0.9059, 0.2382, 0.2324], [0.9184, 0.2398, 0.2214], [0.931, 0.2414, 0.2104], [0.9435, 0.2429, 0.1994], [0.9561, 0.2445, 0.1884], [0.9686, 0.2461, 0.1775], [0.9812, 0.2476, 0.1665], [0.9937, 0.2492, 0.1555], [0.9984, 0.2539, 0.1476], [0.9953, 0.2618, 0.1429], [0.9922, 0.2696, 0.1382], [0.989, 0.2775, 0.1335], [0.9859, 0.2853, 0.1288], [0.9827, 0.2931, 0.1241], [0.9796, 0.301, 0.1194], [0.9765, 0.3088, 0.1147], [0.9733, 0.3167, 0.11], [0.9702, 0.3245, 0.1053], [0.9671, 0.3324, 0.1006], [0.9639, 0.3402, 0.0959], [0.9608, 0.348, 0.0912], [0.9576, 0.3559, 0.0865], [0.9545, 0.3637, 0.0818], [0.9514, 0.3716, 0.0771], [0.9482, 0.3794, 0.0724], [0.9451, 0.3873, 0.0676], [0.942, 0.3951, 0.0629], [0.9388, 0.4029, 0.0582], [0.9357, 0.4108, 0.0535], [0.9325, 0.4186, 0.0488], [0.9294, 0.4265, 0.0441], [0.9263, 0.4343, 0.0394], [0.9231, 0.4422, 0.0347], [0.92, 0.45, 0.03], [0.9169, 0.4578, 0.0253], [0.9137, 0.4657, 0.0206], [0.9106, 0.4735, 0.0159], [0.9075, 0.4814, 0.0112], [0.9043, 0.4892, 0.0065], [0.9012, 0.4971, 0.0018], [0.9, 0.5049, 0.002], [0.9, 0.5127, 0.0051], [0.9, 0.5206, 0.0082], [0.9, 0.5284, 0.0114], [0.9, 0.5363, 0.0145], [0.9, 0.5441, 0.0176], [0.9, 0.552, 0.0208], [0.9, 0.5598, 0.0239], [0.9, 0.5676, 0.0271], [0.9, 0.5755, 0.0302], [0.9, 0.5833, 0.0333], [0.9, 0.5912, 0.0365], [0.9, 0.599, 0.0396], [0.9, 0.6069, 0.0427], [0.9, 0.6147, 0.0459], [0.9, 0.6225, 0.049], [0.9, 0.6304, 0.0522], [0.9, 0.6382, 0.0553], [0.9, 0.6461, 0.0584], [0.9, 0.6539, 0.0616], [0.9, 0.6618, 0.0647], [0.9, 0.6696, 0.0678], [0.9, 0.6775, 0.071], [0.9, 0.6853, 0.0741], [0.9, 0.6931, 0.0773], [0.9, 0.701, 0.0804], [0.9, 0.7088, 0.0835], [0.9, 0.7167, 0.0867], [0.9, 0.7245, 0.0898], [0.9, 0.7324, 0.0929], [0.9, 0.7402, 0.0961], [0.9, 0.748, 0.0992], [0.9, 0.7535, 0.1094], [0.9, 0.7582, 0.122], [0.9, 0.7629, 0.1345], [0.9, 0.7676, 0.1471], [0.9, 0.7724, 0.1596], [0.9, 0.7771, 0.1722], [0.9, 0.7818, 0.1847], [0.9, 0.7865, 0.1973], [0.9, 0.7912, 0.2098], [0.9, 0.7959, 0.2224], [0.9, 0.8006, 0.2349], [0.9, 0.8053, 0.2475], [0.9, 0.81, 0.26], [0.9, 0.8147, 0.2725], [0.9, 0.8194, 0.2851], [0.9, 0.8241, 0.2976], [0.9, 0.8288, 0.3102], [0.9, 0.8335, 0.3227], [0.9, 0.8382, 0.3353], [0.9, 0.8429, 0.3478], [0.9, 0.8476, 0.3604], [0.9, 0.8524, 0.3729], [0.9, 0.8571, 0.3855], [0.9, 0.8618, 0.398], [0.9, 0.8665, 0.4106], [0.9, 0.8712, 0.4231], [0.9, 0.8759, 0.4357], [0.9, 0.8806, 0.4482], [0.9, 0.8853, 0.4608], [0.9, 0.89, 0.4733], [0.9, 0.8947, 0.4859], [0.9, 0.8994, 0.4984], [0.9027, 0.9027, 0.5137], [0.9059, 0.9059, 0.5294], [0.909, 0.909, 0.5451], [0.9122, 0.9122, 0.5608], [0.9153, 0.9153, 0.5765], [0.9184, 0.9184, 0.5922], [0.9216, 0.9216, 0.6078], [0.9247, 0.9247, 0.6235], [0.9278, 0.9278, 0.6392], [0.931, 0.931, 0.6549], [0.9341, 0.9341, 0.6706], [0.9373, 0.9373, 0.6863], [0.9404, 0.9404, 0.702], [0.9435, 0.9435, 0.7176], [0.9467, 0.9467, 0.7333], [0.9498, 0.9498, 0.749], [0.9529, 0.9529, 0.7647], [0.9561, 0.9561, 0.7804], [0.9592, 0.9592, 0.7961], [0.9624, 0.9624, 0.8118], [0.9655, 0.9655, 0.8275], [0.9686, 0.9686, 0.8431], [0.9718, 0.9718, 0.8588], [0.9749, 0.9749, 0.8745], [0.978, 0.978, 0.8902], [0.9812, 0.9812, 0.9059], [0.9843, 0.9843, 0.9216], [0.9875, 0.9875, 0.9373], [0.9906, 0.9906, 0.9529], [0.9937, 0.9937, 0.9686], [0.9969, 0.9969, 0.9843], [1.0, 1.0, 1.0]] }, "Dark2": { "interpolate": false, "colors": [[0.1059, 0.6196, 0.4667], [0.851, 0.3725, 0.0078], [0.4588, 0.4392, 0.702], [0.9059, 0.1608, 0.5412], [0.4, 0.651, 0.1176], [0.902, 0.6706, 0.0078], [0.651, 0.4627, 0.1137], [0.4, 0.4, 0.4]] }, "GnBu": { "interpolate": true, "colors": [[0.9686, 0.9882, 0.9412], [0.9658, 0.9871, 0.9386], [0.963, 0.986, 0.936], [0.9601, 0.9849, 0.9334], [0.9573, 0.9838, 0.9308], [0.9545, 0.9827, 0.9283], [0.9516, 0.9816, 0.9257], [0.9488, 0.9805, 0.9231], [0.946, 0.9794, 0.9205], [0.9432, 0.9783, 0.9179], [0.9403, 0.9772, 0.9153], [0.9375, 0.9761, 0.9128], [0.9347, 0.9749, 0.9102], [0.9318, 0.9738, 0.9076], [0.929, 0.9727, 0.905], [0.9262, 0.9716, 0.9024], [0.9234, 0.9705, 0.8998], [0.9205, 0.9694, 0.8973], [0.9177, 0.9683, 0.8947], [0.9149, 0.9672, 0.8921], [0.912, 0.9661, 0.8895], [0.9092, 0.965, 0.8869], [0.9064, 0.9639, 0.8843], [0.9035, 0.9628, 0.8818], [0.9007, 0.9617, 0.8792], [0.8979, 0.9606, 0.8766], [0.8951, 0.9594, 0.874], [0.8922, 0.9583, 0.8714], [0.8894, 0.9572, 0.8688], [0.8866, 0.9561, 0.8663], [0.8837, 0.955, 0.8637], [0.8809, 0.9539, 0.8611], [0.8781, 0.9528, 0.8585], [0.8757, 0.9518, 0.8558], [0.8732, 0.9508, 0.8531], [0.8707, 0.9499, 0.8504], [0.8683, 0.9489, 0.8477], [0.8658, 0.9479, 0.845], [0.8634, 0.9469, 0.8422], [0.8609, 0.9459, 0.8395], [0.8584, 0.9449, 0.8368], [0.856, 0.944, 0.8341], [0.8535, 0.943, 0.8314], [0.8511, 0.942, 0.8287], [0.8486, 0.941, 0.826], [0.8461, 0.94, 0.8233], [0.8437, 0.939, 0.8206], [0.8412, 0.9381, 0.8179], [0.8388, 0.9371, 0.8152], [0.8363, 0.9361, 0.8125], [0.8338, 0.9351, 0.8098], [0.8314, 0.9341, 0.8071], [0.8289, 0.9331, 0.8044], [0.8265, 0.9321, 0.8016], [0.824, 0.9312, 0.7989], [0.8215, 0.9302, 0.7962], [0.8191, 0.9292, 0.7935], [0.8166, 0.9282, 0.7908], [0.8141, 0.9272, 0.7881], [0.8117, 0.9262, 0.7854], [0.8092, 0.9253, 0.7827], [0.8068, 0.9243, 0.78], [0.8043, 0.9233, 0.7773], [0.8018, 0.9223, 0.7746], [0.7989, 0.9211, 0.7721], [0.7945, 0.9194, 0.7701], [0.79, 0.9177, 0.7681], [0.7856, 0.916, 0.7662], [0.7812, 0.9142, 0.7642], [0.7767, 0.9125, 0.7622], [0.7723, 0.9108, 0.7602], [0.7679, 0.9091, 0.7583], [0.7635, 0.9074, 0.7563], [0.759, 0.9056, 0.7543], [0.7546, 0.9039, 0.7524], [0.7502, 0.9022, 0.7504], [0.7457, 0.9005, 0.7484], [0.7413, 0.8987, 0.7465], [0.7369, 0.897, 0.7445], [0.7325, 0.8953, 0.7425], [0.728, 0.8936, 0.7406], [0.7236, 0.8919, 0.7386], [0.7192, 0.8901, 0.7366], [0.7147, 0.8884, 0.7347], [0.7103, 0.8867, 0.7327], [0.7059, 0.885, 0.7307], [0.7015, 0.8832, 0.7288], [0.697, 0.8815, 0.7268], [0.6926, 0.8798, 0.7248], [0.6882, 0.8781, 0.7228], [0.6837, 0.8764, 0.7209], [0.6793, 0.8746, 0.7189], [0.6749, 0.8729, 0.7169], [0.6704, 0.8712, 0.715], [0.666, 0.8695, 0.713], [0.6616, 0.8677, 0.711], [0.6567, 0.8659, 0.7105], [0.6512, 0.8638, 0.7123], [0.6457, 0.8617, 0.7142], [0.6401, 0.8596, 0.716], [0.6346, 0.8575, 0.7179], [0.6291, 0.8554, 0.7197], [0.6235, 0.8533, 0.7216], [0.618, 0.8512, 0.7234], [0.6125, 0.8492, 0.7253], [0.6069, 0.8471, 0.7271], [0.6014, 0.845, 0.729], [0.5958, 0.8429, 0.7308], [0.5903, 0.8408, 0.7326], [0.5848, 0.8387, 0.7345], [0.5792, 0.8366, 0.7363], [0.5737, 0.8345, 0.7382], [0.5682, 0.8324, 0.74], [0.5626, 0.8303, 0.7419], [0.5571, 0.8282, 0.7437], [0.5516, 0.8261, 0.7456], [0.546, 0.8241, 0.7474], [0.5405, 0.822, 0.7493], [0.5349, 0.8199, 0.7511], [0.5294, 0.8178, 0.7529], [0.5239, 0.8157, 0.7548], [0.5183, 0.8136, 0.7566], [0.5128, 0.8115, 0.7585], [0.5073, 0.8094, 0.7603], [0.5017, 0.8073, 0.7622], [0.4962, 0.8052, 0.764], [0.4907, 0.8031, 0.7659], [0.4851, 0.801, 0.7677], [0.4796, 0.7985, 0.7696], [0.474, 0.7954, 0.7714], [0.4685, 0.7923, 0.7732], [0.463, 0.7892, 0.7751], [0.4574, 0.7862, 0.7769], [0.4519, 0.7831, 0.7788], [0.4464, 0.78, 0.7806], [0.4408, 0.7769, 0.7825], [0.4353, 0.7739, 0.7843], [0.4298, 0.7708, 0.7862], [0.4242, 0.7677, 0.788], [0.4187, 0.7646, 0.7899], [0.4131, 0.7616, 0.7917], [0.4076, 0.7585, 0.7935], [0.4021, 0.7554, 0.7954], [0.3965, 0.7523, 0.7972], [0.391, 0.7493, 0.7991], [0.3855, 0.7462, 0.8009], [0.3799, 0.7431, 0.8028], [0.3744, 0.74, 0.8046], [0.3689, 0.7369, 0.8065], [0.3633, 0.7339, 0.8083], [0.3578, 0.7308, 0.8101], [0.3522, 0.7277, 0.812], [0.3467, 0.7246, 0.8138], [0.3412, 0.7216, 0.8157], [0.3356, 0.7185, 0.8175], [0.3301, 0.7154, 0.8194], [0.3246, 0.7123, 0.8212], [0.319, 0.7093, 0.8231], [0.3135, 0.7062, 0.8249], [0.308, 0.7031, 0.8268], [0.3032, 0.699, 0.8258], [0.2989, 0.6942, 0.8233], [0.2946, 0.6894, 0.8207], [0.2903, 0.6846, 0.8181], [0.286, 0.6798, 0.8155], [0.2817, 0.675, 0.8129], [0.2774, 0.6702, 0.8103], [0.273, 0.6654, 0.8078], [0.2687, 0.6606, 0.8052], [0.2644, 0.6558, 0.8026], [0.2601, 0.651, 0.8], [0.2558, 0.6462, 0.7974], [0.2515, 0.6414, 0.7948], [0.2472, 0.6366, 0.7922], [0.2429, 0.6318, 0.7897], [0.2386, 0.627, 0.7871], [0.2343, 0.6222, 0.7845], [0.23, 0.6174, 0.7819], [0.2257, 0.6126, 0.7793], [0.2214, 0.6078, 0.7767], [0.2171, 0.603, 0.7742], [0.2128, 0.5982, 0.7716], [0.2085, 0.5934, 0.769], [0.2042, 0.5886, 0.7664], [0.1998, 0.5838, 0.7638], [0.1955, 0.579, 0.7612], [0.1912, 0.5742, 0.7587], [0.1869, 0.5694, 0.7561], [0.1826, 0.5646, 0.7535], [0.1783, 0.5598, 0.7509], [0.174, 0.555, 0.7483], [0.1697, 0.5502, 0.7457], [0.1654, 0.5457, 0.7434], [0.1611, 0.5413, 0.7412], [0.1568, 0.5368, 0.739], [0.1525, 0.5324, 0.7368], [0.1482, 0.528, 0.7346], [0.1439, 0.5236, 0.7324], [0.1396, 0.5191, 0.7301], [0.1353, 0.5147, 0.7279], [0.1309, 0.5103, 0.7257], [0.1266, 0.5058, 0.7235], [0.1223, 0.5014, 0.7213], [0.118, 0.497, 0.7191], [0.1137, 0.4925, 0.7169], [0.1094, 0.4881, 0.7146], [0.1051, 0.4837, 0.7124], [0.1008, 0.4793, 0.7102], [0.0965, 0.4748, 0.708], [0.0922, 0.4704, 0.7058], [0.0879, 0.466, 0.7036], [0.0836, 0.4615, 0.7014], [0.0793, 0.4571, 0.6991], [0.075, 0.4527, 0.6969], [0.0707, 0.4483, 0.6947], [0.0664, 0.4438, 0.6925], [0.0621, 0.4394, 0.6903], [0.0577, 0.435, 0.6881], [0.0534, 0.4305, 0.6859], [0.0491, 0.4261, 0.6836], [0.0448, 0.4217, 0.6814], [0.0405, 0.4173, 0.6792], [0.0362, 0.4128, 0.677], [0.0319, 0.4084, 0.6748], [0.0314, 0.4035, 0.6699], [0.0314, 0.3986, 0.6646], [0.0314, 0.3937, 0.6593], [0.0314, 0.3888, 0.654], [0.0314, 0.3839, 0.6487], [0.0314, 0.3789, 0.6434], [0.0314, 0.374, 0.6381], [0.0314, 0.3691, 0.6328], [0.0314, 0.3642, 0.6276], [0.0314, 0.3592, 0.6223], [0.0314, 0.3543, 0.617], [0.0314, 0.3494, 0.6117], [0.0314, 0.3445, 0.6064], [0.0314, 0.3396, 0.6011], [0.0314, 0.3346, 0.5958], [0.0314, 0.3297, 0.5905], [0.0314, 0.3248, 0.5852], [0.0314, 0.3199, 0.5799], [0.0314, 0.315, 0.5747], [0.0314, 0.31, 0.5694], [0.0314, 0.3051, 0.5641], [0.0314, 0.3002, 0.5588], [0.0314, 0.2953, 0.5535], [0.0314, 0.2903, 0.5482], [0.0314, 0.2854, 0.5429], [0.0314, 0.2805, 0.5376], [0.0314, 0.2756, 0.5323], [0.0314, 0.2707, 0.527], [0.0314, 0.2657, 0.5218], [0.0314, 0.2608, 0.5165], [0.0314, 0.2559, 0.5112], [0.0314, 0.251, 0.5059]] }, "Greens": { "interpolate": true, "colors": [[0.9686, 0.9882, 0.9608], [0.9664, 0.9874, 0.9582], [0.9642, 0.9865, 0.9556], [0.962, 0.9857, 0.953], [0.9598, 0.9848, 0.9504], [0.9576, 0.9839, 0.9479], [0.9553, 0.9831, 0.9453], [0.9531, 0.9822, 0.9427], [0.9509, 0.9813, 0.9401], [0.9487, 0.9805, 0.9375], [0.9465, 0.9796, 0.9349], [0.9443, 0.9788, 0.9324], [0.9421, 0.9779, 0.9298], [0.9398, 0.977, 0.9272], [0.9376, 0.9762, 0.9246], [0.9354, 0.9753, 0.922], [0.9332, 0.9745, 0.9194], [0.931, 0.9736, 0.9169], [0.9288, 0.9727, 0.9143], [0.9266, 0.9719, 0.9117], [0.9243, 0.971, 0.9091], [0.9221, 0.9701, 0.9065], [0.9199, 0.9693, 0.9039], [0.9177, 0.9684, 0.9014], [0.9155, 0.9676, 0.8988], [0.9133, 0.9667, 0.8962], [0.911, 0.9658, 0.8936], [0.9088, 0.965, 0.891], [0.9066, 0.9641, 0.8884], [0.9044, 0.9633, 0.8859], [0.9022, 0.9624, 0.8833], [0.9, 0.9615, 0.8807], [0.8976, 0.9606, 0.8779], [0.8939, 0.9591, 0.874], [0.8902, 0.9576, 0.8701], [0.8865, 0.9562, 0.8661], [0.8828, 0.9547, 0.8622], [0.8791, 0.9532, 0.8583], [0.8754, 0.9517, 0.8543], [0.8717, 0.9503, 0.8504], [0.8681, 0.9488, 0.8464], [0.8644, 0.9473, 0.8425], [0.8607, 0.9458, 0.8386], [0.857, 0.9444, 0.8346], [0.8533, 0.9429, 0.8307], [0.8496, 0.9414, 0.8268], [0.8459, 0.9399, 0.8228], [0.8422, 0.9385, 0.8189], [0.8385, 0.937, 0.8149], [0.8348, 0.9355, 0.811], [0.8311, 0.934, 0.8071], [0.8275, 0.9325, 0.8031], [0.8238, 0.9311, 0.7992], [0.8201, 0.9296, 0.7953], [0.8164, 0.9281, 0.7913], [0.8127, 0.9266, 0.7874], [0.809, 0.9252, 0.7835], [0.8053, 0.9237, 0.7795], [0.8016, 0.9222, 0.7756], [0.7979, 0.9207, 0.7716], [0.7942, 0.9193, 0.7677], [0.7905, 0.9178, 0.7638], [0.7869, 0.9163, 0.7598], [0.7832, 0.9148, 0.7559], [0.7792, 0.9132, 0.7518], [0.7745, 0.9113, 0.7473], [0.7699, 0.9093, 0.7427], [0.7652, 0.9073, 0.7381], [0.7605, 0.9054, 0.7336], [0.7558, 0.9034, 0.729], [0.7512, 0.9014, 0.7245], [0.7465, 0.8995, 0.7199], [0.7418, 0.8975, 0.7154], [0.7371, 0.8955, 0.7108], [0.7325, 0.8935, 0.7063], [0.7278, 0.8916, 0.7017], [0.7231, 0.8896, 0.6972], [0.7184, 0.8876, 0.6926], [0.7138, 0.8857, 0.6881], [0.7091, 0.8837, 0.6835], [0.7044, 0.8817, 0.679], [0.6997, 0.8798, 0.6744], [0.6951, 0.8778, 0.6699], [0.6904, 0.8758, 0.6653], [0.6857, 0.8739, 0.6608], [0.681, 0.8719, 0.6562], [0.6764, 0.8699, 0.6517], [0.6717, 0.868, 0.6471], [0.667, 0.866, 0.6426], [0.6623, 0.864, 0.638], [0.6577, 0.8621, 0.6334], [0.653, 0.8601, 0.6289], [0.6483, 0.8581, 0.6243], [0.6436, 0.8561, 0.6198], [0.639, 0.8542, 0.6152], [0.6343, 0.8522, 0.6107], [0.6293, 0.85, 0.6061], [0.6238, 0.8474, 0.6016], [0.6182, 0.8448, 0.597], [0.6127, 0.8423, 0.5925], [0.6072, 0.8397, 0.5879], [0.6016, 0.8371, 0.5834], [0.5961, 0.8345, 0.5788], [0.5905, 0.8319, 0.5743], [0.585, 0.8293, 0.5697], [0.5795, 0.8268, 0.5652], [0.5739, 0.8242, 0.5606], [0.5684, 0.8216, 0.5561], [0.5629, 0.819, 0.5515], [0.5573, 0.8164, 0.547], [0.5518, 0.8138, 0.5424], [0.5463, 0.8113, 0.5379], [0.5407, 0.8087, 0.5333], [0.5352, 0.8061, 0.5288], [0.5296, 0.8035, 0.5242], [0.5241, 0.8009, 0.5196], [0.5186, 0.7983, 0.5151], [0.513, 0.7958, 0.5105], [0.5075, 0.7932, 0.506], [0.502, 0.7906, 0.5014], [0.4964, 0.788, 0.4969], [0.4909, 0.7854, 0.4923], [0.4854, 0.7828, 0.4878], [0.4798, 0.7803, 0.4832], [0.4743, 0.7777, 0.4787], [0.4687, 0.7751, 0.4741], [0.4632, 0.7725, 0.4696], [0.4577, 0.7699, 0.465], [0.4518, 0.7671, 0.4612], [0.4455, 0.764, 0.4581], [0.4392, 0.7609, 0.4551], [0.4329, 0.7579, 0.452], [0.4267, 0.7548, 0.4489], [0.4204, 0.7517, 0.4458], [0.4141, 0.7486, 0.4428], [0.4078, 0.7456, 0.4397], [0.4016, 0.7425, 0.4366], [0.3953, 0.7394, 0.4335], [0.389, 0.7363, 0.4304], [0.3827, 0.7333, 0.4274], [0.3765, 0.7302, 0.4243], [0.3702, 0.7271, 0.4212], [0.3639, 0.724, 0.4181], [0.3576, 0.721, 0.4151], [0.3514, 0.7179, 0.412], [0.3451, 0.7148, 0.4089], [0.3388, 0.7117, 0.4058], [0.3325, 0.7087, 0.4028], [0.3263, 0.7056, 0.3997], [0.32, 0.7025, 0.3966], [0.3137, 0.6994, 0.3935], [0.3075, 0.6963, 0.3905], [0.3012, 0.6933, 0.3874], [0.2949, 0.6902, 0.3843], [0.2886, 0.6871, 0.3812], [0.2824, 0.684, 0.3782], [0.2761, 0.681, 0.3751], [0.2698, 0.6779, 0.372], [0.2635, 0.6748, 0.3689], [0.2573, 0.6717, 0.3659], [0.2526, 0.6681, 0.3629], [0.2489, 0.6642, 0.3599], [0.2452, 0.6603, 0.357], [0.2415, 0.6563, 0.354], [0.2378, 0.6524, 0.351], [0.2341, 0.6484, 0.3481], [0.2304, 0.6445, 0.3451], [0.2268, 0.6406, 0.3422], [0.2231, 0.6366, 0.3392], [0.2194, 0.6327, 0.3363], [0.2157, 0.6288, 0.3333], [0.212, 0.6248, 0.3304], [0.2083, 0.6209, 0.3274], [0.2046, 0.6169, 0.3245], [0.2009, 0.613, 0.3215], [0.1972, 0.6091, 0.3186], [0.1935, 0.6051, 0.3156], [0.1899, 0.6012, 0.3127], [0.1862, 0.5973, 0.3097], [0.1825, 0.5933, 0.3068], [0.1788, 0.5894, 0.3038], [0.1751, 0.5855, 0.3009], [0.1714, 0.5815, 0.2979], [0.1677, 0.5776, 0.2949], [0.164, 0.5736, 0.292], [0.1603, 0.5697, 0.289], [0.1566, 0.5658, 0.2861], [0.1529, 0.5618, 0.2831], [0.1493, 0.5579, 0.2802], [0.1456, 0.554, 0.2772], [0.1419, 0.55, 0.2743], [0.1382, 0.5461, 0.2713], [0.134, 0.5423, 0.2683], [0.1297, 0.5386, 0.2652], [0.1254, 0.5349, 0.2621], [0.1211, 0.5313, 0.2591], [0.1168, 0.5276, 0.256], [0.1125, 0.5239, 0.2529], [0.1082, 0.5202, 0.2498], [0.1039, 0.5165, 0.2468], [0.0996, 0.5128, 0.2437], [0.0953, 0.5091, 0.2406], [0.091, 0.5054, 0.2375], [0.0867, 0.5017, 0.2344], [0.0824, 0.498, 0.2314], [0.078, 0.4943, 0.2283], [0.0737, 0.4907, 0.2252], [0.0694, 0.487, 0.2221], [0.0651, 0.4833, 0.2191], [0.0608, 0.4796, 0.216], [0.0565, 0.4759, 0.2129], [0.0522, 0.4722, 0.2098], [0.0479, 0.4685, 0.2068], [0.0436, 0.4648, 0.2037], [0.0393, 0.4611, 0.2006], [0.035, 0.4574, 0.1975], [0.0307, 0.4537, 0.1945], [0.0264, 0.4501, 0.1914], [0.0221, 0.4464, 0.1883], [0.0178, 0.4427, 0.1852], [0.0135, 0.439, 0.1822], [0.0092, 0.4353, 0.1791], [0.0048, 0.4316, 0.176], [0.0005, 0.4279, 0.1729], [0.0, 0.423, 0.1707], [0.0, 0.418, 0.1686], [0.0, 0.4129, 0.1665], [0.0, 0.4079, 0.1644], [0.0, 0.4029, 0.1624], [0.0, 0.3978, 0.1603], [0.0, 0.3928, 0.1582], [0.0, 0.3877, 0.1561], [0.0, 0.3827, 0.154], [0.0, 0.3776, 0.1519], [0.0, 0.3726, 0.1498], [0.0, 0.3676, 0.1477], [0.0, 0.3625, 0.1456], [0.0, 0.3575, 0.1435], [0.0, 0.3524, 0.1414], [0.0, 0.3474, 0.1393], [0.0, 0.3423, 0.1373], [0.0, 0.3373, 0.1352], [0.0, 0.3322, 0.1331], [0.0, 0.3272, 0.131], [0.0, 0.3222, 0.1289], [0.0, 0.3171, 0.1268], [0.0, 0.3121, 0.1247], [0.0, 0.307, 0.1226], [0.0, 0.302, 0.1205], [0.0, 0.2969, 0.1184], [0.0, 0.2919, 0.1163], [0.0, 0.2868, 0.1142], [0.0, 0.2818, 0.1122], [0.0, 0.2768, 0.1101], [0.0, 0.2717, 0.108], [0.0, 0.2667, 0.1059]] }, "Greys": { "interpolate": true, "colors": [[1.0, 1.0, 1.0], [0.9982, 0.9982, 0.9982], [0.9963, 0.9963, 0.9963], [0.9945, 0.9945, 0.9945], [0.9926, 0.9926, 0.9926], [0.9908, 0.9908, 0.9908], [0.9889, 0.9889, 0.9889], [0.9871, 0.9871, 0.9871], [0.9852, 0.9852, 0.9852], [0.9834, 0.9834, 0.9834], [0.9815, 0.9815, 0.9815], [0.9797, 0.9797, 0.9797], [0.9779, 0.9779, 0.9779], [0.976, 0.976, 0.976], [0.9742, 0.9742, 0.9742], [0.9723, 0.9723, 0.9723], [0.9705, 0.9705, 0.9705], [0.9686, 0.9686, 0.9686], [0.9668, 0.9668, 0.9668], [0.9649, 0.9649, 0.9649], [0.9631, 0.9631, 0.9631], [0.9612, 0.9612, 0.9612], [0.9594, 0.9594, 0.9594], [0.9576, 0.9576, 0.9576], [0.9557, 0.9557, 0.9557], [0.9539, 0.9539, 0.9539], [0.952, 0.952, 0.952], [0.9502, 0.9502, 0.9502], [0.9483, 0.9483, 0.9483], [0.9465, 0.9465, 0.9465], [0.9446, 0.9446, 0.9446], [0.9428, 0.9428, 0.9428], [0.9408, 0.9408, 0.9408], [0.938, 0.938, 0.938], [0.9352, 0.9352, 0.9352], [0.9323, 0.9323, 0.9323], [0.9295, 0.9295, 0.9295], [0.9267, 0.9267, 0.9267], [0.9238, 0.9238, 0.9238], [0.921, 0.921, 0.921], [0.9182, 0.9182, 0.9182], [0.9154, 0.9154, 0.9154], [0.9125, 0.9125, 0.9125], [0.9097, 0.9097, 0.9097], [0.9069, 0.9069, 0.9069], [0.904, 0.904, 0.904], [0.9012, 0.9012, 0.9012], [0.8984, 0.8984, 0.8984], [0.8955, 0.8955, 0.8955], [0.8927, 0.8927, 0.8927], [0.8899, 0.8899, 0.8899], [0.8871, 0.8871, 0.8871], [0.8842, 0.8842, 0.8842], [0.8814, 0.8814, 0.8814], [0.8786, 0.8786, 0.8786], [0.8757, 0.8757, 0.8757], [0.8729, 0.8729, 0.8729], [0.8701, 0.8701, 0.8701], [0.8673, 0.8673, 0.8673], [0.8644, 0.8644, 0.8644], [0.8616, 0.8616, 0.8616], [0.8588, 0.8588, 0.8588], [0.8559, 0.8559, 0.8559], [0.8531, 0.8531, 0.8531], [0.8501, 0.8501, 0.8501], [0.8467, 0.8467, 0.8467], [0.8432, 0.8432, 0.8432], [0.8398, 0.8398, 0.8398], [0.8363, 0.8363, 0.8363], [0.8329, 0.8329, 0.8329], [0.8295, 0.8295, 0.8295], [0.826, 0.826, 0.826], [0.8226, 0.8226, 0.8226], [0.8191, 0.8191, 0.8191], [0.8157, 0.8157, 0.8157], [0.8122, 0.8122, 0.8122], [0.8088, 0.8088, 0.8088], [0.8053, 0.8053, 0.8053], [0.8019, 0.8019, 0.8019], [0.7984, 0.7984, 0.7984], [0.795, 0.795, 0.795], [0.7916, 0.7916, 0.7916], [0.7881, 0.7881, 0.7881], [0.7847, 0.7847, 0.7847], [0.7812, 0.7812, 0.7812], [0.7778, 0.7778, 0.7778], [0.7743, 0.7743, 0.7743], [0.7709, 0.7709, 0.7709], [0.7674, 0.7674, 0.7674], [0.764, 0.764, 0.764], [0.7606, 0.7606, 0.7606], [0.7571, 0.7571, 0.7571], [0.7537, 0.7537, 0.7537], [0.7502, 0.7502, 0.7502], [0.7468, 0.7468, 0.7468], [0.7433, 0.7433, 0.7433], [0.7394, 0.7394, 0.7394], [0.7346, 0.7346, 0.7346], [0.7298, 0.7298, 0.7298], [0.725, 0.725, 0.725], [0.7202, 0.7202, 0.7202], [0.7154, 0.7154, 0.7154], [0.7106, 0.7106, 0.7106], [0.7058, 0.7058, 0.7058], [0.701, 0.701, 0.701], [0.6962, 0.6962, 0.6962], [0.6914, 0.6914, 0.6914], [0.6866, 0.6866, 0.6866], [0.6818, 0.6818, 0.6818], [0.677, 0.677, 0.677], [0.6722, 0.6722, 0.6722], [0.6674, 0.6674, 0.6674], [0.6626, 0.6626, 0.6626], [0.6578, 0.6578, 0.6578], [0.653, 0.653, 0.653], [0.6482, 0.6482, 0.6482], [0.6434, 0.6434, 0.6434], [0.6386, 0.6386, 0.6386], [0.6338, 0.6338, 0.6338], [0.629, 0.629, 0.629], [0.6242, 0.6242, 0.6242], [0.6194, 0.6194, 0.6194], [0.6146, 0.6146, 0.6146], [0.6098, 0.6098, 0.6098], [0.605, 0.605, 0.605], [0.6002, 0.6002, 0.6002], [0.5954, 0.5954, 0.5954], [0.5906, 0.5906, 0.5906], [0.5861, 0.5861, 0.5861], [0.5818, 0.5818, 0.5818], [0.5775, 0.5775, 0.5775], [0.5732, 0.5732, 0.5732], [0.5689, 0.5689, 0.5689], [0.5646, 0.5646, 0.5646], [0.5602, 0.5602, 0.5602], [0.5559, 0.5559, 0.5559], [0.5516, 0.5516, 0.5516], [0.5473, 0.5473, 0.5473], [0.543, 0.543, 0.543], [0.5387, 0.5387, 0.5387], [0.5344, 0.5344, 0.5344], [0.5301, 0.5301, 0.5301], [0.5258, 0.5258, 0.5258], [0.5215, 0.5215, 0.5215], [0.5172, 0.5172, 0.5172], [0.5129, 0.5129, 0.5129], [0.5086, 0.5086, 0.5086], [0.5043, 0.5043, 0.5043], [0.5, 0.5, 0.5], [0.4957, 0.4957, 0.4957], [0.4913, 0.4913, 0.4913], [0.487, 0.487, 0.487], [0.4827, 0.4827, 0.4827], [0.4784, 0.4784, 0.4784], [0.4741, 0.4741, 0.4741], [0.4698, 0.4698, 0.4698], [0.4655, 0.4655, 0.4655], [0.4612, 0.4612, 0.4612], [0.4569, 0.4569, 0.4569], [0.4526, 0.4526, 0.4526], [0.4484, 0.4484, 0.4484], [0.4444, 0.4444, 0.4444], [0.4403, 0.4403, 0.4403], [0.4363, 0.4363, 0.4363], [0.4322, 0.4322, 0.4322], [0.4281, 0.4281, 0.4281], [0.4241, 0.4241, 0.4241], [0.42, 0.42, 0.42], [0.416, 0.416, 0.416], [0.4119, 0.4119, 0.4119], [0.4078, 0.4078, 0.4078], [0.4038, 0.4038, 0.4038], [0.3997, 0.3997, 0.3997], [0.3957, 0.3957, 0.3957], [0.3916, 0.3916, 0.3916], [0.3875, 0.3875, 0.3875], [0.3835, 0.3835, 0.3835], [0.3794, 0.3794, 0.3794], [0.3754, 0.3754, 0.3754], [0.3713, 0.3713, 0.3713], [0.3672, 0.3672, 0.3672], [0.3632, 0.3632, 0.3632], [0.3591, 0.3591, 0.3591], [0.3551, 0.3551, 0.3551], [0.351, 0.351, 0.351], [0.3469, 0.3469, 0.3469], [0.3429, 0.3429, 0.3429], [0.3388, 0.3388, 0.3388], [0.3348, 0.3348, 0.3348], [0.3307, 0.3307, 0.3307], [0.3266, 0.3266, 0.3266], [0.3226, 0.3226, 0.3226], [0.3174, 0.3174, 0.3174], [0.3119, 0.3119, 0.3119], [0.3063, 0.3063, 0.3063], [0.3008, 0.3008, 0.3008], [0.2953, 0.2953, 0.2953], [0.2897, 0.2897, 0.2897], [0.2842, 0.2842, 0.2842], [0.2787, 0.2787, 0.2787], [0.2731, 0.2731, 0.2731], [0.2676, 0.2676, 0.2676], [0.2621, 0.2621, 0.2621], [0.2565, 0.2565, 0.2565], [0.251, 0.251, 0.251], [0.2454, 0.2454, 0.2454], [0.2399, 0.2399, 0.2399], [0.2344, 0.2344, 0.2344], [0.2288, 0.2288, 0.2288], [0.2233, 0.2233, 0.2233], [0.2178, 0.2178, 0.2178], [0.2122, 0.2122, 0.2122], [0.2067, 0.2067, 0.2067], [0.2012, 0.2012, 0.2012], [0.1956, 0.1956, 0.1956], [0.1901, 0.1901, 0.1901], [0.1845, 0.1845, 0.1845], [0.179, 0.179, 0.179], [0.1735, 0.1735, 0.1735], [0.1679, 0.1679, 0.1679], [0.1624, 0.1624, 0.1624], [0.1569, 0.1569, 0.1569], [0.1513, 0.1513, 0.1513], [0.1458, 0.1458, 0.1458], [0.1411, 0.1411, 0.1411], [0.1366, 0.1366, 0.1366], [0.132, 0.132, 0.132], [0.1275, 0.1275, 0.1275], [0.1229, 0.1229, 0.1229], [0.1184, 0.1184, 0.1184], [0.1138, 0.1138, 0.1138], [0.1093, 0.1093, 0.1093], [0.1047, 0.1047, 0.1047], [0.1001, 0.1001, 0.1001], [0.0956, 0.0956, 0.0956], [0.091, 0.091, 0.091], [0.0865, 0.0865, 0.0865], [0.0819, 0.0819, 0.0819], [0.0774, 0.0774, 0.0774], [0.0728, 0.0728, 0.0728], [0.0683, 0.0683, 0.0683], [0.0637, 0.0637, 0.0637], [0.0592, 0.0592, 0.0592], [0.0546, 0.0546, 0.0546], [0.0501, 0.0501, 0.0501], [0.0455, 0.0455, 0.0455], [0.041, 0.041, 0.041], [0.0364, 0.0364, 0.0364], [0.0319, 0.0319, 0.0319], [0.0273, 0.0273, 0.0273], [0.0228, 0.0228, 0.0228], [0.0182, 0.0182, 0.0182], [0.0137, 0.0137, 0.0137], [0.0091, 0.0091, 0.0091], [0.0046, 0.0046, 0.0046], [0.0, 0.0, 0.0]] }, "OrRd": { "interpolate": true, "colors": [[1.0, 0.9686, 0.9255], [0.9999, 0.9668, 0.9211], [0.9998, 0.9649, 0.9166], [0.9996, 0.9631, 0.9122], [0.9995, 0.9612, 0.9078], [0.9994, 0.9594, 0.9033], [0.9993, 0.9576, 0.8989], [0.9991, 0.9557, 0.8945], [0.999, 0.9539, 0.8901], [0.9989, 0.952, 0.8856], [0.9988, 0.9502, 0.8812], [0.9986, 0.9483, 0.8768], [0.9985, 0.9465, 0.8723], [0.9984, 0.9446, 0.8679], [0.9983, 0.9428, 0.8635], [0.9982, 0.9409, 0.8591], [0.998, 0.9391, 0.8546], [0.9979, 0.9373, 0.8502], [0.9978, 0.9354, 0.8458], [0.9977, 0.9336, 0.8413], [0.9975, 0.9317, 0.8369], [0.9974, 0.9299, 0.8325], [0.9973, 0.928, 0.8281], [0.9972, 0.9262, 0.8236], [0.997, 0.9243, 0.8192], [0.9969, 0.9225, 0.8148], [0.9968, 0.9206, 0.8103], [0.9967, 0.9188, 0.8059], [0.9966, 0.917, 0.8015], [0.9964, 0.9151, 0.797], [0.9963, 0.9133, 0.7926], [0.9962, 0.9114, 0.7882], [0.9961, 0.9095, 0.7837], [0.9959, 0.907, 0.7785], [0.9958, 0.9046, 0.7733], [0.9957, 0.9021, 0.7682], [0.9956, 0.8997, 0.763], [0.9954, 0.8972, 0.7578], [0.9953, 0.8947, 0.7527], [0.9952, 0.8923, 0.7475], [0.9951, 0.8898, 0.7423], [0.995, 0.8874, 0.7372], [0.9948, 0.8849, 0.732], [0.9947, 0.8824, 0.7268], [0.9946, 0.88, 0.7217], [0.9945, 0.8775, 0.7165], [0.9943, 0.875, 0.7113], [0.9942, 0.8726, 0.7062], [0.9941, 0.8701, 0.701], [0.994, 0.8677, 0.6958], [0.9938, 0.8652, 0.6907], [0.9937, 0.8627, 0.6855], [0.9936, 0.8603, 0.6803], [0.9935, 0.8578, 0.6752], [0.9934, 0.8554, 0.67], [0.9932, 0.8529, 0.6648], [0.9931, 0.8504, 0.6597], [0.993, 0.848, 0.6545], [0.9929, 0.8455, 0.6493], [0.9927, 0.8431, 0.6442], [0.9926, 0.8406, 0.639], [0.9925, 0.8381, 0.6338], [0.9924, 0.8357, 0.6287], [0.9922, 0.8332, 0.6235], [0.9922, 0.8306, 0.6188], [0.9922, 0.8275, 0.6156], [0.9922, 0.8245, 0.6124], [0.9922, 0.8214, 0.6092], [0.9922, 0.8183, 0.606], [0.9922, 0.8152, 0.6028], [0.9922, 0.8121, 0.5996], [0.9922, 0.8091, 0.5964], [0.9922, 0.806, 0.5932], [0.9922, 0.8029, 0.59], [0.9922, 0.7998, 0.5868], [0.9922, 0.7968, 0.5836], [0.9922, 0.7937, 0.5804], [0.9922, 0.7906, 0.5772], [0.9922, 0.7875, 0.574], [0.9922, 0.7845, 0.5708], [0.9922, 0.7814, 0.5676], [0.9922, 0.7783, 0.5644], [0.9922, 0.7752, 0.5612], [0.9922, 0.7722, 0.558], [0.9922, 0.7691, 0.5548], [0.9922, 0.766, 0.5516], [0.9922, 0.7629, 0.5484], [0.9922, 0.7599, 0.5452], [0.9922, 0.7568, 0.542], [0.9922, 0.7537, 0.5388], [0.9922, 0.7506, 0.5356], [0.9922, 0.7476, 0.5324], [0.9922, 0.7445, 0.5292], [0.9922, 0.7414, 0.526], [0.9922, 0.7383, 0.5228], [0.9922, 0.7353, 0.5196], [0.9921, 0.7312, 0.5157], [0.992, 0.7256, 0.5104], [0.9919, 0.7199, 0.5051], [0.9917, 0.7142, 0.4998], [0.9916, 0.7086, 0.4945], [0.9915, 0.7029, 0.4892], [0.9914, 0.6973, 0.4839], [0.9912, 0.6916, 0.4786], [0.9911, 0.6859, 0.4733], [0.991, 0.6803, 0.4681], [0.9909, 0.6746, 0.4628], [0.9908, 0.669, 0.4575], [0.9906, 0.6633, 0.4522], [0.9905, 0.6576, 0.4469], [0.9904, 0.652, 0.4416], [0.9903, 0.6463, 0.4363], [0.9901, 0.6407, 0.431], [0.99, 0.635, 0.4257], [0.9899, 0.6293, 0.4204], [0.9898, 0.6237, 0.4151], [0.9897, 0.618, 0.4099], [0.9895, 0.6124, 0.4046], [0.9894, 0.6067, 0.3993], [0.9893, 0.601, 0.394], [0.9892, 0.5954, 0.3887], [0.989, 0.5897, 0.3834], [0.9889, 0.5841, 0.3781], [0.9888, 0.5784, 0.3728], [0.9887, 0.5727, 0.3675], [0.9885, 0.5671, 0.3622], [0.9884, 0.5614, 0.357], [0.9883, 0.5558, 0.3517], [0.9874, 0.5505, 0.348], [0.9858, 0.5456, 0.3459], [0.9842, 0.5406, 0.3438], [0.9826, 0.5357, 0.3417], [0.981, 0.5308, 0.3396], [0.9794, 0.5259, 0.3375], [0.9778, 0.521, 0.3354], [0.9762, 0.516, 0.3333], [0.9746, 0.5111, 0.3312], [0.973, 0.5062, 0.3292], [0.9714, 0.5013, 0.3271], [0.9698, 0.4963, 0.325], [0.9682, 0.4914, 0.3229], [0.9666, 0.4865, 0.3208], [0.965, 0.4816, 0.3187], [0.9634, 0.4767, 0.3166], [0.9618, 0.4717, 0.3145], [0.9602, 0.4668, 0.3124], [0.9586, 0.4619, 0.3103], [0.957, 0.457, 0.3082], [0.9554, 0.4521, 0.3061], [0.9538, 0.4471, 0.3041], [0.9522, 0.4422, 0.302], [0.9506, 0.4373, 0.2999], [0.9491, 0.4324, 0.2978], [0.9475, 0.4275, 0.2957], [0.9459, 0.4225, 0.2936], [0.9443, 0.4176, 0.2915], [0.9427, 0.4127, 0.2894], [0.9411, 0.4078, 0.2873], [0.9395, 0.4028, 0.2852], [0.9379, 0.3979, 0.2831], [0.9354, 0.392, 0.2792], [0.9325, 0.3855, 0.2742], [0.9295, 0.379, 0.2691], [0.9266, 0.3724, 0.2641], [0.9236, 0.3659, 0.259], [0.9206, 0.3594, 0.254], [0.9177, 0.3529, 0.2489], [0.9147, 0.3464, 0.2439], [0.9118, 0.3398, 0.2388], [0.9088, 0.3333, 0.2338], [0.9059, 0.3268, 0.2288], [0.9029, 0.3203, 0.2237], [0.9, 0.3138, 0.2187], [0.897, 0.3072, 0.2136], [0.8941, 0.3007, 0.2086], [0.8911, 0.2942, 0.2035], [0.8882, 0.2877, 0.1985], [0.8852, 0.2812, 0.1934], [0.8823, 0.2746, 0.1884], [0.8793, 0.2681, 0.1834], [0.8764, 0.2616, 0.1783], [0.8734, 0.2551, 0.1733], [0.8704, 0.2486, 0.1682], [0.8675, 0.242, 0.1632], [0.8645, 0.2355, 0.1581], [0.8616, 0.229, 0.1531], [0.8586, 0.2225, 0.1481], [0.8557, 0.2159, 0.143], [0.8527, 0.2094, 0.138], [0.8498, 0.2029, 0.1329], [0.8468, 0.1964, 0.1279], [0.8439, 0.1899, 0.1228], [0.8398, 0.1838, 0.1187], [0.8354, 0.1779, 0.1149], [0.831, 0.172, 0.1111], [0.8265, 0.1661, 0.1073], [0.8221, 0.1602, 0.1035], [0.8177, 0.1543, 0.0996], [0.8132, 0.1484, 0.0958], [0.8088, 0.1425, 0.092], [0.8044, 0.1366, 0.0882], [0.8, 0.1307, 0.0844], [0.7955, 0.1248, 0.0806], [0.7911, 0.1188, 0.0768], [0.7867, 0.1129, 0.0729], [0.7822, 0.107, 0.0691], [0.7778, 0.1011, 0.0653], [0.7734, 0.0952, 0.0615], [0.769, 0.0893, 0.0577], [0.7645, 0.0834, 0.0539], [0.7601, 0.0775, 0.0501], [0.7557, 0.0716, 0.0462], [0.7512, 0.0657, 0.0424], [0.7468, 0.0598, 0.0386], [0.7424, 0.0539, 0.0348], [0.7379, 0.048, 0.031], [0.7335, 0.0421, 0.0272], [0.7291, 0.0362, 0.0234], [0.7247, 0.0303, 0.0195], [0.7202, 0.0244, 0.0157], [0.7158, 0.0185, 0.0119], [0.7114, 0.0125, 0.0081], [0.7069, 0.0066, 0.0043], [0.7025, 0.0007, 0.0005], [0.6964, 0.0, 0.0], [0.69, 0.0, 0.0], [0.6836, 0.0, 0.0], [0.6772, 0.0, 0.0], [0.6708, 0.0, 0.0], [0.6644, 0.0, 0.0], [0.658, 0.0, 0.0], [0.6516, 0.0, 0.0], [0.6452, 0.0, 0.0], [0.6388, 0.0, 0.0], [0.6324, 0.0, 0.0], [0.626, 0.0, 0.0], [0.6196, 0.0, 0.0], [0.6132, 0.0, 0.0], [0.6068, 0.0, 0.0], [0.6004, 0.0, 0.0], [0.594, 0.0, 0.0], [0.5876, 0.0, 0.0], [0.5812, 0.0, 0.0], [0.5748, 0.0, 0.0], [0.5684, 0.0, 0.0], [0.562, 0.0, 0.0], [0.5556, 0.0, 0.0], [0.5492, 0.0, 0.0], [0.5428, 0.0, 0.0], [0.5364, 0.0, 0.0], [0.53, 0.0, 0.0], [0.5236, 0.0, 0.0], [0.5172, 0.0, 0.0], [0.5108, 0.0, 0.0], [0.5044, 0.0, 0.0], [0.498, 0.0, 0.0]] }, "Oranges": { "interpolate": true, "colors": [[1.0, 0.9608, 0.9216], [0.9999, 0.9589, 0.918], [0.9998, 0.9571, 0.9144], [0.9996, 0.9552, 0.9109], [0.9995, 0.9534, 0.9073], [0.9994, 0.9516, 0.9037], [0.9993, 0.9497, 0.9002], [0.9991, 0.9479, 0.8966], [0.999, 0.946, 0.893], [0.9989, 0.9442, 0.8895], [0.9988, 0.9423, 0.8859], [0.9986, 0.9405, 0.8823], [0.9985, 0.9386, 0.8788], [0.9984, 0.9368, 0.8752], [0.9983, 0.9349, 0.8716], [0.9982, 0.9331, 0.8681], [0.998, 0.9313, 0.8645], [0.9979, 0.9294, 0.8609], [0.9978, 0.9276, 0.8573], [0.9977, 0.9257, 0.8538], [0.9975, 0.9239, 0.8502], [0.9974, 0.922, 0.8466], [0.9973, 0.9202, 0.8431], [0.9972, 0.9183, 0.8395], [0.997, 0.9165, 0.8359], [0.9969, 0.9146, 0.8324], [0.9968, 0.9128, 0.8288], [0.9967, 0.911, 0.8252], [0.9966, 0.9091, 0.8217], [0.9964, 0.9073, 0.8181], [0.9963, 0.9054, 0.8145], [0.9962, 0.9036, 0.811], [0.9961, 0.9016, 0.8072], [0.9959, 0.8989, 0.8018], [0.9958, 0.8962, 0.7963], [0.9957, 0.8935, 0.7909], [0.9956, 0.8908, 0.7855], [0.9954, 0.8881, 0.7801], [0.9953, 0.8854, 0.7747], [0.9952, 0.8827, 0.7693], [0.9951, 0.88, 0.7639], [0.995, 0.8773, 0.7584], [0.9948, 0.8746, 0.753], [0.9947, 0.8718, 0.7476], [0.9946, 0.8691, 0.7422], [0.9945, 0.8664, 0.7368], [0.9943, 0.8637, 0.7314], [0.9942, 0.861, 0.726], [0.9941, 0.8583, 0.7206], [0.994, 0.8556, 0.7151], [0.9938, 0.8529, 0.7097], [0.9937, 0.8502, 0.7043], [0.9936, 0.8475, 0.6989], [0.9935, 0.8448, 0.6935], [0.9934, 0.8421, 0.6881], [0.9932, 0.8394, 0.6827], [0.9931, 0.8367, 0.6772], [0.993, 0.834, 0.6718], [0.9929, 0.8312, 0.6664], [0.9927, 0.8285, 0.661], [0.9926, 0.8258, 0.6556], [0.9925, 0.8231, 0.6502], [0.9924, 0.8204, 0.6448], [0.9922, 0.8177, 0.6394], [0.9922, 0.8146, 0.6336], [0.9922, 0.8105, 0.6268], [0.9922, 0.8063, 0.6201], [0.9922, 0.8021, 0.6133], [0.9922, 0.7979, 0.6065], [0.9922, 0.7937, 0.5998], [0.9922, 0.7895, 0.593], [0.9922, 0.7854, 0.5862], [0.9922, 0.7812, 0.5795], [0.9922, 0.777, 0.5727], [0.9922, 0.7728, 0.5659], [0.9922, 0.7686, 0.5592], [0.9922, 0.7644, 0.5524], [0.9922, 0.7603, 0.5456], [0.9922, 0.7561, 0.5389], [0.9922, 0.7519, 0.5321], [0.9922, 0.7477, 0.5253], [0.9922, 0.7435, 0.5186], [0.9922, 0.7393, 0.5118], [0.9922, 0.7352, 0.505], [0.9922, 0.731, 0.4983], [0.9922, 0.7268, 0.4915], [0.9922, 0.7226, 0.4847], [0.9922, 0.7184, 0.478], [0.9922, 0.7142, 0.4712], [0.9922, 0.7101, 0.4644], [0.9922, 0.7059, 0.4577], [0.9922, 0.7017, 0.4509], [0.9922, 0.6975, 0.4441], [0.9922, 0.6933, 0.4374], [0.9922, 0.6892, 0.4306], [0.9922, 0.685, 0.4238], [0.9922, 0.6808, 0.4174], [0.9922, 0.6768, 0.4117], [0.9922, 0.6727, 0.4059], [0.9922, 0.6687, 0.4001], [0.9922, 0.6646, 0.3943], [0.9922, 0.6605, 0.3885], [0.9922, 0.6565, 0.3827], [0.9922, 0.6524, 0.377], [0.9922, 0.6484, 0.3712], [0.9922, 0.6443, 0.3654], [0.9922, 0.6402, 0.3596], [0.9922, 0.6362, 0.3538], [0.9922, 0.6321, 0.3481], [0.9922, 0.6281, 0.3423], [0.9922, 0.624, 0.3365], [0.9922, 0.6199, 0.3307], [0.9922, 0.6159, 0.3249], [0.9922, 0.6118, 0.3191], [0.9922, 0.6078, 0.3134], [0.9922, 0.6037, 0.3076], [0.9922, 0.5996, 0.3018], [0.9922, 0.5956, 0.296], [0.9922, 0.5915, 0.2902], [0.9922, 0.5875, 0.2844], [0.9922, 0.5834, 0.2787], [0.9922, 0.5793, 0.2729], [0.9922, 0.5753, 0.2671], [0.9922, 0.5712, 0.2613], [0.9922, 0.5672, 0.2555], [0.9922, 0.5631, 0.2498], [0.9922, 0.559, 0.244], [0.9922, 0.555, 0.2382], [0.9914, 0.5507, 0.2328], [0.9899, 0.5463, 0.2277], [0.9885, 0.5419, 0.2227], [0.987, 0.5374, 0.2176], [0.9855, 0.533, 0.2126], [0.984, 0.5286, 0.2076], [0.9826, 0.5242, 0.2025], [0.9811, 0.5197, 0.1975], [0.9796, 0.5153, 0.1924], [0.9781, 0.5109, 0.1874], [0.9767, 0.5064, 0.1823], [0.9752, 0.502, 0.1773], [0.9737, 0.4976, 0.1722], [0.9722, 0.4931, 0.1672], [0.9707, 0.4887, 0.1622], [0.9693, 0.4843, 0.1571], [0.9678, 0.4799, 0.1521], [0.9663, 0.4754, 0.147], [0.9648, 0.471, 0.142], [0.9634, 0.4666, 0.1369], [0.9619, 0.4621, 0.1319], [0.9604, 0.4577, 0.1268], [0.9589, 0.4533, 0.1218], [0.9575, 0.4489, 0.1168], [0.956, 0.4444, 0.1117], [0.9545, 0.44, 0.1067], [0.953, 0.4356, 0.1016], [0.9516, 0.4311, 0.0966], [0.9501, 0.4267, 0.0915], [0.9486, 0.4223, 0.0865], [0.9471, 0.4179, 0.0814], [0.9457, 0.4134, 0.0764], [0.9433, 0.4092, 0.0731], [0.9403, 0.4052, 0.0709], [0.9373, 0.4011, 0.0687], [0.9344, 0.397, 0.0665], [0.9314, 0.393, 0.0643], [0.9285, 0.3889, 0.0621], [0.9255, 0.3849, 0.0598], [0.9226, 0.3808, 0.0576], [0.9196, 0.3767, 0.0554], [0.9167, 0.3727, 0.0532], [0.9137, 0.3686, 0.051], [0.9108, 0.3646, 0.0488], [0.9078, 0.3605, 0.0466], [0.9049, 0.3564, 0.0443], [0.9019, 0.3524, 0.0421], [0.899, 0.3483, 0.0399], [0.896, 0.3443, 0.0377], [0.8931, 0.3402, 0.0355], [0.8901, 0.3361, 0.0333], [0.8872, 0.3321, 0.031], [0.8842, 0.328, 0.0288], [0.8812, 0.324, 0.0266], [0.8783, 0.3199, 0.0244], [0.8753, 0.3158, 0.0222], [0.8724, 0.3118, 0.02], [0.8694, 0.3077, 0.0178], [0.8665, 0.3037, 0.0155], [0.8635, 0.2996, 0.0133], [0.8606, 0.2955, 0.0111], [0.8576, 0.2915, 0.0089], [0.8547, 0.2874, 0.0067], [0.8517, 0.2834, 0.0045], [0.8463, 0.2807, 0.0041], [0.84, 0.2785, 0.0044], [0.8337, 0.2763, 0.0046], [0.8275, 0.274, 0.0048], [0.8212, 0.2718, 0.0051], [0.8149, 0.2696, 0.0053], [0.8086, 0.2674, 0.0056], [0.8024, 0.2652, 0.0058], [0.7961, 0.263, 0.0061], [0.7898, 0.2608, 0.0063], [0.7835, 0.2585, 0.0066], [0.7773, 0.2563, 0.0068], [0.771, 0.2541, 0.0071], [0.7647, 0.2519, 0.0073], [0.7584, 0.2497, 0.0076], [0.7522, 0.2475, 0.0078], [0.7459, 0.2453, 0.008], [0.7396, 0.243, 0.0083], [0.7333, 0.2408, 0.0085], [0.7271, 0.2386, 0.0088], [0.7208, 0.2364, 0.009], [0.7145, 0.2342, 0.0093], [0.7082, 0.232, 0.0095], [0.702, 0.2298, 0.0098], [0.6957, 0.2275, 0.01], [0.6894, 0.2253, 0.0103], [0.6831, 0.2231, 0.0105], [0.6769, 0.2209, 0.0107], [0.6706, 0.2187, 0.011], [0.6643, 0.2165, 0.0112], [0.658, 0.2143, 0.0115], [0.6518, 0.212, 0.0117], [0.6468, 0.2101, 0.0119], [0.642, 0.2083, 0.012], [0.6372, 0.2065, 0.0121], [0.6324, 0.2046, 0.0122], [0.6276, 0.2028, 0.0124], [0.6228, 0.2009, 0.0125], [0.618, 0.1991, 0.0126], [0.6132, 0.1972, 0.0127], [0.6084, 0.1954, 0.0129], [0.6036, 0.1935, 0.013], [0.5988, 0.1917, 0.0131], [0.594, 0.1899, 0.0132], [0.5892, 0.188, 0.0133], [0.5844, 0.1862, 0.0135], [0.5796, 0.1843, 0.0136], [0.5748, 0.1825, 0.0137], [0.57, 0.1806, 0.0138], [0.5652, 0.1788, 0.014], [0.5604, 0.1769, 0.0141], [0.5556, 0.1751, 0.0142], [0.5508, 0.1732, 0.0143], [0.546, 0.1714, 0.0145], [0.5412, 0.1696, 0.0146], [0.5364, 0.1677, 0.0147], [0.5316, 0.1659, 0.0148], [0.5268, 0.164, 0.0149], [0.522, 0.1622, 0.0151], [0.5172, 0.1603, 0.0152], [0.5124, 0.1585, 0.0153], [0.5076, 0.1566, 0.0154], [0.5028, 0.1548, 0.0156], [0.498, 0.1529, 0.0157]] }, "PRGn": { "interpolate": true, "colors": [[0.251, 0.0, 0.2941], [0.2593, 0.0065, 0.3027], [0.2676, 0.0129, 0.3113], [0.2759, 0.0194, 0.32], [0.2842, 0.0258, 0.3286], [0.2925, 0.0323, 0.3372], [0.3008, 0.0388, 0.3458], [0.3091, 0.0452, 0.3544], [0.3174, 0.0517, 0.363], [0.3257, 0.0581, 0.3716], [0.334, 0.0646, 0.3802], [0.3423, 0.071, 0.3889], [0.3506, 0.0775, 0.3975], [0.3589, 0.084, 0.4061], [0.3672, 0.0904, 0.4147], [0.3755, 0.0969, 0.4233], [0.3839, 0.1033, 0.4319], [0.3922, 0.1098, 0.4405], [0.4005, 0.1163, 0.4491], [0.4088, 0.1227, 0.4577], [0.4171, 0.1292, 0.4664], [0.4254, 0.1356, 0.475], [0.4337, 0.1421, 0.4836], [0.442, 0.1486, 0.4922], [0.4503, 0.155, 0.5008], [0.4586, 0.1615, 0.5094], [0.4654, 0.1701, 0.5168], [0.4708, 0.1809, 0.523], [0.4762, 0.1916, 0.5291], [0.4816, 0.2024, 0.5353], [0.487, 0.2131, 0.5414], [0.4923, 0.2239, 0.5476], [0.4977, 0.2347, 0.5537], [0.5031, 0.2454, 0.5599], [0.5085, 0.2562, 0.566], [0.5139, 0.267, 0.5722], [0.5193, 0.2777, 0.5783], [0.5246, 0.2885, 0.5845], [0.53, 0.2993, 0.5906], [0.5354, 0.31, 0.5968], [0.5408, 0.3208, 0.6029], [0.5462, 0.3316, 0.6091], [0.5516, 0.3423, 0.6152], [0.5569, 0.3531, 0.6214], [0.5623, 0.3639, 0.6275], [0.5677, 0.3746, 0.6337], [0.5731, 0.3854, 0.6398], [0.5785, 0.3962, 0.646], [0.5839, 0.4069, 0.6521], [0.5892, 0.4177, 0.6583], [0.5946, 0.4285, 0.6644], [0.6, 0.4392, 0.6706], [0.6063, 0.4474, 0.6761], [0.6126, 0.4555, 0.6817], [0.6189, 0.4637, 0.6872], [0.6252, 0.4718, 0.6927], [0.6315, 0.48, 0.6983], [0.6378, 0.4881, 0.7038], [0.6441, 0.4963, 0.7093], [0.6504, 0.5044, 0.7149], [0.6567, 0.5126, 0.7204], [0.6631, 0.5207, 0.726], [0.6694, 0.5289, 0.7315], [0.6757, 0.537, 0.737], [0.682, 0.5452, 0.7426], [0.6883, 0.5533, 0.7481], [0.6946, 0.5615, 0.7536], [0.7009, 0.5696, 0.7592], [0.7072, 0.5778, 0.7647], [0.7135, 0.5859, 0.7702], [0.7198, 0.5941, 0.7758], [0.7261, 0.6022, 0.7813], [0.7324, 0.6104, 0.7869], [0.7387, 0.6185, 0.7924], [0.745, 0.6267, 0.7979], [0.7513, 0.6348, 0.8035], [0.7576, 0.643, 0.809], [0.7636, 0.6507, 0.8137], [0.7693, 0.6579, 0.8175], [0.775, 0.6651, 0.8214], [0.7807, 0.6724, 0.8252], [0.7864, 0.6796, 0.8291], [0.7921, 0.6868, 0.8329], [0.7978, 0.694, 0.8368], [0.8035, 0.7013, 0.8406], [0.8092, 0.7085, 0.8444], [0.8148, 0.7157, 0.8483], [0.8205, 0.723, 0.8521], [0.8262, 0.7302, 0.856], [0.8319, 0.7374, 0.8598], [0.8376, 0.7446, 0.8637], [0.8433, 0.7519, 0.8675], [0.849, 0.7591, 0.8714], [0.8547, 0.7663, 0.8752], [0.8604, 0.7735, 0.879], [0.8661, 0.7808, 0.8829], [0.8717, 0.788, 0.8867], [0.8774, 0.7952, 0.8906], [0.8831, 0.8025, 0.8944], [0.8888, 0.8097, 0.8983], [0.8945, 0.8169, 0.9021], [0.9002, 0.8241, 0.906], [0.9059, 0.8314, 0.9098], [0.9083, 0.8368, 0.9121], [0.9108, 0.8421, 0.9144], [0.9133, 0.8475, 0.9167], [0.9157, 0.8529, 0.919], [0.9182, 0.8583, 0.9213], [0.9206, 0.8637, 0.9236], [0.9231, 0.8691, 0.926], [0.9256, 0.8744, 0.9283], [0.928, 0.8798, 0.9306], [0.9305, 0.8852, 0.9329], [0.9329, 0.8906, 0.9352], [0.9354, 0.896, 0.9375], [0.9379, 0.9013, 0.9398], [0.9403, 0.9067, 0.9421], [0.9428, 0.9121, 0.9444], [0.9453, 0.9175, 0.9467], [0.9477, 0.9229, 0.949], [0.9502, 0.9283, 0.9513], [0.9526, 0.9336, 0.9536], [0.9551, 0.939, 0.9559], [0.9576, 0.9444, 0.9582], [0.96, 0.9498, 0.9606], [0.9625, 0.9552, 0.9629], [0.9649, 0.9606, 0.9652], [0.9674, 0.9659, 0.9675], [0.9663, 0.9681, 0.9659], [0.9617, 0.967, 0.9603], [0.9571, 0.9659, 0.9548], [0.9525, 0.9649, 0.9493], [0.9479, 0.9638, 0.9437], [0.9433, 0.9627, 0.9382], [0.9386, 0.9616, 0.9326], [0.934, 0.9606, 0.9271], [0.9294, 0.9595, 0.9216], [0.9248, 0.9584, 0.916], [0.9202, 0.9573, 0.9105], [0.9156, 0.9562, 0.905], [0.911, 0.9552, 0.8994], [0.9063, 0.9541, 0.8939], [0.9017, 0.953, 0.8884], [0.8971, 0.9519, 0.8828], [0.8925, 0.9509, 0.8773], [0.8879, 0.9498, 0.8717], [0.8833, 0.9487, 0.8662], [0.8787, 0.9476, 0.8607], [0.874, 0.9466, 0.8551], [0.8694, 0.9455, 0.8496], [0.8648, 0.9444, 0.8441], [0.8602, 0.9433, 0.8385], [0.8556, 0.9423, 0.833], [0.851, 0.9412, 0.8275], [0.8431, 0.9379, 0.8196], [0.8353, 0.9347, 0.8118], [0.8275, 0.9315, 0.8039], [0.8196, 0.9283, 0.7961], [0.8118, 0.925, 0.7882], [0.8039, 0.9218, 0.7804], [0.7961, 0.9186, 0.7725], [0.7882, 0.9153, 0.7647], [0.7804, 0.9121, 0.7569], [0.7725, 0.9089, 0.749], [0.7647, 0.9057, 0.7412], [0.7569, 0.9024, 0.7333], [0.749, 0.8992, 0.7255], [0.7412, 0.896, 0.7176], [0.7333, 0.8927, 0.7098], [0.7255, 0.8895, 0.702], [0.7176, 0.8863, 0.6941], [0.7098, 0.883, 0.6863], [0.702, 0.8798, 0.6784], [0.6941, 0.8766, 0.6706], [0.6863, 0.8734, 0.6627], [0.6784, 0.8701, 0.6549], [0.6706, 0.8669, 0.6471], [0.6627, 0.8637, 0.6392], [0.6549, 0.8604, 0.6314], [0.6451, 0.8554, 0.6226], [0.6334, 0.8484, 0.6129], [0.6218, 0.8415, 0.6032], [0.6101, 0.8346, 0.5935], [0.5984, 0.8277, 0.5839], [0.5867, 0.8208, 0.5742], [0.575, 0.8138, 0.5645], [0.5633, 0.8069, 0.5548], [0.5516, 0.8, 0.5451], [0.5399, 0.7931, 0.5354], [0.5283, 0.7862, 0.5257], [0.5166, 0.7792, 0.516], [0.5049, 0.7723, 0.5063], [0.4932, 0.7654, 0.4967], [0.4815, 0.7585, 0.487], [0.4698, 0.7516, 0.4773], [0.4581, 0.7446, 0.4676], [0.4464, 0.7377, 0.4579], [0.4348, 0.7308, 0.4482], [0.4231, 0.7239, 0.4385], [0.4114, 0.717, 0.4288], [0.3997, 0.71, 0.4191], [0.388, 0.7031, 0.4095], [0.3763, 0.6962, 0.3998], [0.3646, 0.6893, 0.3901], [0.3529, 0.6824, 0.3804], [0.3433, 0.674, 0.3739], [0.3336, 0.6657, 0.3675], [0.3239, 0.6574, 0.361], [0.3142, 0.6491, 0.3546], [0.3045, 0.6408, 0.3481], [0.2948, 0.6325, 0.3416], [0.2851, 0.6242, 0.3352], [0.2754, 0.6159, 0.3287], [0.2657, 0.6076, 0.3223], [0.2561, 0.5993, 0.3158], [0.2464, 0.591, 0.3093], [0.2367, 0.5827, 0.3029], [0.227, 0.5744, 0.2964], [0.2173, 0.5661, 0.29], [0.2076, 0.5578, 0.2835], [0.1979, 0.5495, 0.277], [0.1882, 0.5412, 0.2706], [0.1785, 0.5329, 0.2641], [0.1689, 0.5246, 0.2577], [0.1592, 0.5163, 0.2512], [0.1495, 0.508, 0.2448], [0.1398, 0.4997, 0.2383], [0.1301, 0.4913, 0.2318], [0.1204, 0.483, 0.2254], [0.1107, 0.4747, 0.2189], [0.1038, 0.4666, 0.2135], [0.0997, 0.4586, 0.2092], [0.0955, 0.4506, 0.2049], [0.0913, 0.4426, 0.2006], [0.0872, 0.4346, 0.1963], [0.083, 0.4266, 0.192], [0.0789, 0.4186, 0.1877], [0.0747, 0.4106, 0.1834], [0.0706, 0.4026, 0.1791], [0.0664, 0.3946, 0.1748], [0.0623, 0.3866, 0.1705], [0.0581, 0.3786, 0.1662], [0.054, 0.3706, 0.1619], [0.0498, 0.3626, 0.1576], [0.0457, 0.3546, 0.1532], [0.0415, 0.3466, 0.1489], [0.0374, 0.3386, 0.1446], [0.0332, 0.3306, 0.1403], [0.0291, 0.3226, 0.136], [0.0249, 0.3146, 0.1317], [0.0208, 0.3067, 0.1274], [0.0166, 0.2987, 0.1231], [0.0125, 0.2907, 0.1188], [0.0083, 0.2827, 0.1145], [0.0042, 0.2747, 0.1102], [0.0, 0.2667, 0.1059]] }, "Paired": { "interpolate": false, "colors": [[0.651, 0.8078, 0.8902], [0.1216, 0.4706, 0.7059], [0.698, 0.8745, 0.5412], [0.2, 0.6275, 0.1725], [0.9843, 0.6039, 0.6], [0.8902, 0.102, 0.1098], [0.9922, 0.749, 0.4353], [1.0, 0.498, 0.0], [0.7922, 0.698, 0.8392], [0.4157, 0.2392, 0.6039], [1.0, 1.0, 0.6], [0.6941, 0.349, 0.1569]] }, "Pastel1": { "interpolate": false, "colors": [[0.9843, 0.7059, 0.6824], [0.702, 0.8039, 0.8902], [0.8, 0.9216, 0.7725], [0.8706, 0.7961, 0.8941], [0.9961, 0.851, 0.651], [1.0, 1.0, 0.8], [0.898, 0.8471, 0.7412], [0.9922, 0.8549, 0.9255], [0.949, 0.949, 0.949]] }, "Pastel2": { "interpolate": false, "colors": [[0.702, 0.8863, 0.8039], [0.9922, 0.8039, 0.6745], [0.7961, 0.8353, 0.9098], [0.9569, 0.7922, 0.8941], [0.902, 0.9608, 0.7882], [1.0, 0.949, 0.6824], [0.9451, 0.8863, 0.8], [0.8, 0.8, 0.8]] }, "PiYG": { "interpolate": true, "colors": [[0.5569, 0.0039, 0.3216], [0.5653, 0.0079, 0.3282], [0.5738, 0.0119, 0.3348], [0.5822, 0.0159, 0.3414], [0.5907, 0.0199, 0.348], [0.5992, 0.0239, 0.3546], [0.6076, 0.0279, 0.3612], [0.6161, 0.0319, 0.3679], [0.6245, 0.0359, 0.3745], [0.633, 0.0399, 0.3811], [0.6414, 0.0439, 0.3877], [0.6499, 0.0479, 0.3943], [0.6584, 0.0519, 0.4009], [0.6668, 0.0559, 0.4075], [0.6753, 0.0599, 0.4141], [0.6837, 0.0639, 0.4208], [0.6922, 0.0679, 0.4274], [0.7007, 0.0719, 0.434], [0.7091, 0.0759, 0.4406], [0.7176, 0.0799, 0.4472], [0.726, 0.0839, 0.4538], [0.7345, 0.0879, 0.4604], [0.7429, 0.0919, 0.4671], [0.7514, 0.0959, 0.4737], [0.7599, 0.0999, 0.4803], [0.7683, 0.1039, 0.4869], [0.7745, 0.113, 0.494], [0.7783, 0.1271, 0.5015], [0.7822, 0.1413, 0.509], [0.786, 0.1554, 0.5166], [0.7899, 0.1696, 0.5241], [0.7937, 0.1837, 0.5316], [0.7975, 0.1978, 0.5392], [0.8014, 0.212, 0.5467], [0.8052, 0.2261, 0.5542], [0.8091, 0.2403, 0.5618], [0.8129, 0.2544, 0.5693], [0.8168, 0.2686, 0.5769], [0.8206, 0.2827, 0.5844], [0.8245, 0.2969, 0.5919], [0.8283, 0.311, 0.5995], [0.8321, 0.3252, 0.607], [0.836, 0.3393, 0.6145], [0.8398, 0.3535, 0.6221], [0.8437, 0.3676, 0.6296], [0.8475, 0.3818, 0.6371], [0.8514, 0.3959, 0.6447], [0.8552, 0.4101, 0.6522], [0.8591, 0.4242, 0.6597], [0.8629, 0.4384, 0.6673], [0.8667, 0.4525, 0.6748], [0.8706, 0.4667, 0.6824], [0.8735, 0.4764, 0.6891], [0.8764, 0.486, 0.6959], [0.8794, 0.4957, 0.7027], [0.8823, 0.5054, 0.7094], [0.8852, 0.5151, 0.7162], [0.8881, 0.5248, 0.723], [0.891, 0.5345, 0.7297], [0.894, 0.5442, 0.7365], [0.8969, 0.5539, 0.7433], [0.8998, 0.5636, 0.75], [0.9027, 0.5732, 0.7568], [0.9057, 0.5829, 0.7636], [0.9086, 0.5926, 0.7703], [0.9115, 0.6023, 0.7771], [0.9144, 0.612, 0.7839], [0.9173, 0.6217, 0.7906], [0.9203, 0.6314, 0.7974], [0.9232, 0.6411, 0.8042], [0.9261, 0.6507, 0.8109], [0.929, 0.6604, 0.8177], [0.9319, 0.6701, 0.8245], [0.9349, 0.6798, 0.8312], [0.9378, 0.6895, 0.838], [0.9407, 0.6992, 0.8448], [0.9436, 0.7089, 0.8515], [0.946, 0.717, 0.8565], [0.9479, 0.7234, 0.8597], [0.9497, 0.7299, 0.863], [0.9516, 0.7363, 0.8662], [0.9534, 0.7428, 0.8694], [0.9552, 0.7493, 0.8727], [0.9571, 0.7557, 0.8759], [0.9589, 0.7622, 0.8791], [0.9608, 0.7686, 0.8824], [0.9626, 0.7751, 0.8856], [0.9645, 0.7815, 0.8888], [0.9663, 0.788, 0.892], [0.9682, 0.7945, 0.8953], [0.97, 0.8009, 0.8985], [0.9719, 0.8074, 0.9017], [0.9737, 0.8138, 0.905], [0.9755, 0.8203, 0.9082], [0.9774, 0.8268, 0.9114], [0.9792, 0.8332, 0.9146], [0.9811, 0.8397, 0.9179], [0.9829, 0.8461, 0.9211], [0.9848, 0.8526, 0.9243], [0.9866, 0.8591, 0.9276], [0.9885, 0.8655, 0.9308], [0.9903, 0.872, 0.934], [0.9922, 0.8784, 0.9373], [0.9912, 0.882, 0.9385], [0.9903, 0.8855, 0.9397], [0.9894, 0.889, 0.9409], [0.9885, 0.8926, 0.9422], [0.9875, 0.8961, 0.9434], [0.9866, 0.8997, 0.9446], [0.9857, 0.9032, 0.9459], [0.9848, 0.9067, 0.9471], [0.9839, 0.9103, 0.9483], [0.9829, 0.9138, 0.9496], [0.982, 0.9173, 0.9508], [0.9811, 0.9209, 0.952], [0.9802, 0.9244, 0.9532], [0.9792, 0.928, 0.9545], [0.9783, 0.9315, 0.9557], [0.9774, 0.935, 0.9569], [0.9765, 0.9386, 0.9582], [0.9755, 0.9421, 0.9594], [0.9746, 0.9456, 0.9606], [0.9737, 0.9492, 0.9619], [0.9728, 0.9527, 0.9631], [0.9719, 0.9562, 0.9643], [0.9709, 0.9598, 0.9656], [0.97, 0.9633, 0.9668], [0.9691, 0.9669, 0.968], [0.9673, 0.9685, 0.9656], [0.9647, 0.9682, 0.9596], [0.9621, 0.9679, 0.9536], [0.9595, 0.9676, 0.9476], [0.9569, 0.9672, 0.9416], [0.9542, 0.9669, 0.9356], [0.9516, 0.9666, 0.9296], [0.949, 0.9663, 0.9236], [0.9464, 0.966, 0.9176], [0.9438, 0.9657, 0.9116], [0.9412, 0.9654, 0.9057], [0.9386, 0.9651, 0.8997], [0.9359, 0.9648, 0.8937], [0.9333, 0.9645, 0.8877], [0.9307, 0.9642, 0.8817], [0.9281, 0.9639, 0.8757], [0.9255, 0.9636, 0.8697], [0.9229, 0.9632, 0.8637], [0.9203, 0.9629, 0.8577], [0.9176, 0.9626, 0.8517], [0.915, 0.9623, 0.8457], [0.9124, 0.962, 0.8397], [0.9098, 0.9617, 0.8337], [0.9072, 0.9614, 0.8277], [0.9046, 0.9611, 0.8217], [0.902, 0.9608, 0.8157], [0.8949, 0.9577, 0.8043], [0.8878, 0.9546, 0.7929], [0.8807, 0.9516, 0.7815], [0.8737, 0.9485, 0.7702], [0.8666, 0.9454, 0.7588], [0.8595, 0.9423, 0.7474], [0.8524, 0.9393, 0.736], [0.8454, 0.9362, 0.7246], [0.8383, 0.9331, 0.7133], [0.8312, 0.93, 0.7019], [0.8241, 0.927, 0.6905], [0.8171, 0.9239, 0.6791], [0.81, 0.9208, 0.6677], [0.8029, 0.9177, 0.6564], [0.7958, 0.9146, 0.645], [0.7888, 0.9116, 0.6336], [0.7817, 0.9085, 0.6222], [0.7746, 0.9054, 0.6108], [0.7676, 0.9023, 0.5995], [0.7605, 0.8993, 0.5881], [0.7534, 0.8962, 0.5767], [0.7463, 0.8931, 0.5653], [0.7393, 0.89, 0.5539], [0.7322, 0.887, 0.5426], [0.7251, 0.8839, 0.5312], [0.7172, 0.8795, 0.5202], [0.7084, 0.8738, 0.5096], [0.6997, 0.8681, 0.499], [0.6909, 0.8624, 0.4884], [0.6821, 0.8567, 0.4777], [0.6734, 0.8511, 0.4671], [0.6646, 0.8454, 0.4565], [0.6558, 0.8397, 0.4459], [0.6471, 0.834, 0.4353], [0.6383, 0.8283, 0.4247], [0.6295, 0.8226, 0.4141], [0.6208, 0.8169, 0.4035], [0.612, 0.8112, 0.3928], [0.6032, 0.8055, 0.3822], [0.5945, 0.7998, 0.3716], [0.5857, 0.7942, 0.361], [0.5769, 0.7885, 0.3504], [0.5682, 0.7828, 0.3398], [0.5594, 0.7771, 0.3292], [0.5506, 0.7714, 0.3186], [0.5419, 0.7657, 0.308], [0.5331, 0.76, 0.2973], [0.5243, 0.7543, 0.2867], [0.5156, 0.7486, 0.2761], [0.5068, 0.7429, 0.2655], [0.498, 0.7373, 0.2549], [0.4903, 0.7308, 0.25], [0.4827, 0.7243, 0.2451], [0.475, 0.7179, 0.2401], [0.4673, 0.7114, 0.2352], [0.4596, 0.705, 0.2303], [0.4519, 0.6985, 0.2254], [0.4442, 0.692, 0.2205], [0.4365, 0.6856, 0.2155], [0.4288, 0.6791, 0.2106], [0.4211, 0.6727, 0.2057], [0.4135, 0.6662, 0.2008], [0.4058, 0.6597, 0.1958], [0.3981, 0.6533, 0.1909], [0.3904, 0.6468, 0.186], [0.3827, 0.6404, 0.1811], [0.375, 0.6339, 0.1762], [0.3673, 0.6275, 0.1712], [0.3596, 0.621, 0.1663], [0.3519, 0.6145, 0.1614], [0.3443, 0.6081, 0.1565], [0.3366, 0.6016, 0.1516], [0.3289, 0.5952, 0.1466], [0.3212, 0.5887, 0.1417], [0.3135, 0.5822, 0.1368], [0.3058, 0.5758, 0.1319], [0.299, 0.569, 0.1288], [0.2932, 0.5619, 0.1276], [0.2874, 0.5549, 0.1263], [0.2815, 0.5478, 0.1251], [0.2757, 0.5407, 0.1239], [0.2698, 0.5336, 0.1226], [0.264, 0.5266, 0.1214], [0.2581, 0.5195, 0.1202], [0.2523, 0.5124, 0.119], [0.2464, 0.5053, 0.1177], [0.2406, 0.4983, 0.1165], [0.2348, 0.4912, 0.1153], [0.2289, 0.4841, 0.114], [0.2231, 0.477, 0.1128], [0.2172, 0.47, 0.1116], [0.2114, 0.4629, 0.1103], [0.2055, 0.4558, 0.1091], [0.1997, 0.4488, 0.1079], [0.1938, 0.4417, 0.1067], [0.188, 0.4346, 0.1054], [0.1822, 0.4275, 0.1042], [0.1763, 0.4205, 0.103], [0.1705, 0.4134, 0.1017], [0.1646, 0.4063, 0.1005], [0.1588, 0.3992, 0.0993], [0.1529, 0.3922, 0.098]] }, "PuBu": { "interpolate": true, "colors": [[1.0, 0.9686, 0.9843], [0.9977, 0.9667, 0.9832], [0.9953, 0.9647, 0.9821], [0.993, 0.9627, 0.981], [0.9906, 0.9608, 0.9799], [0.9883, 0.9588, 0.9788], [0.986, 0.9568, 0.9777], [0.9836, 0.9548, 0.9766], [0.9813, 0.9529, 0.9755], [0.979, 0.9509, 0.9743], [0.9766, 0.9489, 0.9732], [0.9743, 0.947, 0.9721], [0.9719, 0.945, 0.971], [0.9696, 0.943, 0.9699], [0.9673, 0.9411, 0.9688], [0.9649, 0.9391, 0.9677], [0.9626, 0.9371, 0.9666], [0.9603, 0.9352, 0.9655], [0.9579, 0.9332, 0.9644], [0.9556, 0.9312, 0.9633], [0.9532, 0.9293, 0.9622], [0.9509, 0.9273, 0.9611], [0.9486, 0.9253, 0.96], [0.9462, 0.9234, 0.9588], [0.9439, 0.9214, 0.9577], [0.9416, 0.9194, 0.9566], [0.9392, 0.9174, 0.9555], [0.9369, 0.9155, 0.9544], [0.9345, 0.9135, 0.9533], [0.9322, 0.9115, 0.9522], [0.9299, 0.9096, 0.9511], [0.9275, 0.9076, 0.95], [0.9251, 0.9055, 0.9488], [0.9216, 0.9028, 0.9474], [0.9182, 0.9001, 0.9459], [0.9147, 0.8974, 0.9444], [0.9113, 0.8947, 0.9429], [0.9078, 0.892, 0.9415], [0.9044, 0.8893, 0.94], [0.9009, 0.8866, 0.9385], [0.8975, 0.8839, 0.937], [0.8941, 0.8812, 0.9355], [0.8906, 0.8785, 0.9341], [0.8872, 0.8758, 0.9326], [0.8837, 0.8731, 0.9311], [0.8803, 0.8704, 0.9296], [0.8768, 0.8677, 0.9282], [0.8734, 0.8649, 0.9267], [0.8699, 0.8622, 0.9252], [0.8665, 0.8595, 0.9237], [0.8631, 0.8568, 0.9223], [0.8596, 0.8541, 0.9208], [0.8562, 0.8514, 0.9193], [0.8527, 0.8487, 0.9178], [0.8493, 0.846, 0.9164], [0.8458, 0.8433, 0.9149], [0.8424, 0.8406, 0.9134], [0.8389, 0.8379, 0.9119], [0.8355, 0.8352, 0.9104], [0.832, 0.8325, 0.909], [0.8286, 0.8298, 0.9075], [0.8252, 0.8271, 0.906], [0.8217, 0.8243, 0.9045], [0.8183, 0.8216, 0.9031], [0.8144, 0.819, 0.9016], [0.8092, 0.8165, 0.9003], [0.8041, 0.8141, 0.8989], [0.7989, 0.8116, 0.8976], [0.7937, 0.8092, 0.8962], [0.7886, 0.8067, 0.8949], [0.7834, 0.8042, 0.8935], [0.7782, 0.8018, 0.8921], [0.7731, 0.7993, 0.8908], [0.7679, 0.7968, 0.8894], [0.7627, 0.7944, 0.8881], [0.7576, 0.7919, 0.8867], [0.7524, 0.7895, 0.8854], [0.7472, 0.787, 0.884], [0.7421, 0.7845, 0.8827], [0.7369, 0.7821, 0.8813], [0.7317, 0.7796, 0.88], [0.7266, 0.7772, 0.8786], [0.7214, 0.7747, 0.8773], [0.7162, 0.7722, 0.8759], [0.711, 0.7698, 0.8746], [0.7059, 0.7673, 0.8732], [0.7007, 0.7649, 0.8718], [0.6955, 0.7624, 0.8705], [0.6904, 0.7599, 0.8691], [0.6852, 0.7575, 0.8678], [0.68, 0.755, 0.8664], [0.6749, 0.7526, 0.8651], [0.6697, 0.7501, 0.8637], [0.6645, 0.7476, 0.8624], [0.6594, 0.7452, 0.861], [0.6542, 0.7427, 0.8597], [0.6487, 0.7403, 0.8583], [0.6425, 0.7378, 0.8568], [0.6364, 0.7353, 0.8553], [0.6302, 0.7329, 0.8538], [0.6241, 0.7304, 0.8524], [0.6179, 0.728, 0.8509], [0.6118, 0.7255, 0.8494], [0.6056, 0.723, 0.8479], [0.5995, 0.7206, 0.8465], [0.5933, 0.7181, 0.845], [0.5872, 0.7156, 0.8435], [0.581, 0.7132, 0.842], [0.5749, 0.7107, 0.8406], [0.5687, 0.7083, 0.8391], [0.5626, 0.7058, 0.8376], [0.5564, 0.7033, 0.8361], [0.5502, 0.7009, 0.8346], [0.5441, 0.6984, 0.8332], [0.5379, 0.696, 0.8317], [0.5318, 0.6935, 0.8302], [0.5256, 0.691, 0.8287], [0.5195, 0.6886, 0.8273], [0.5133, 0.6861, 0.8258], [0.5072, 0.6837, 0.8243], [0.501, 0.6812, 0.8228], [0.4949, 0.6787, 0.8214], [0.4887, 0.6763, 0.8199], [0.4826, 0.6738, 0.8184], [0.4764, 0.6714, 0.8169], [0.4703, 0.6689, 0.8155], [0.4641, 0.6664, 0.814], [0.458, 0.664, 0.8125], [0.4511, 0.6612, 0.8108], [0.4435, 0.6581, 0.809], [0.4358, 0.6551, 0.8072], [0.4282, 0.652, 0.8053], [0.4206, 0.6489, 0.8035], [0.4129, 0.6458, 0.8016], [0.4053, 0.6428, 0.7998], [0.3977, 0.6397, 0.7979], [0.3901, 0.6366, 0.7961], [0.3824, 0.6335, 0.7942], [0.3748, 0.6304, 0.7924], [0.3672, 0.6274, 0.7905], [0.3596, 0.6243, 0.7887], [0.3519, 0.6212, 0.7869], [0.3443, 0.6181, 0.785], [0.3367, 0.6151, 0.7832], [0.329, 0.612, 0.7813], [0.3214, 0.6089, 0.7795], [0.3138, 0.6058, 0.7776], [0.3062, 0.6028, 0.7758], [0.2985, 0.5997, 0.7739], [0.2909, 0.5966, 0.7721], [0.2833, 0.5935, 0.7702], [0.2756, 0.5905, 0.7684], [0.268, 0.5874, 0.7666], [0.2604, 0.5843, 0.7647], [0.2528, 0.5812, 0.7629], [0.2451, 0.5782, 0.761], [0.2375, 0.5751, 0.7592], [0.2299, 0.572, 0.7573], [0.2223, 0.5689, 0.7555], [0.2146, 0.5659, 0.7536], [0.208, 0.5622, 0.7517], [0.202, 0.5583, 0.7497], [0.1959, 0.5544, 0.7478], [0.1899, 0.5504, 0.7458], [0.1839, 0.5465, 0.7438], [0.1779, 0.5426, 0.7419], [0.1718, 0.5386, 0.7399], [0.1658, 0.5347, 0.7379], [0.1598, 0.5307, 0.736], [0.1537, 0.5268, 0.734], [0.1477, 0.5229, 0.732], [0.1417, 0.5189, 0.7301], [0.1357, 0.515, 0.7281], [0.1296, 0.5111, 0.7261], [0.1236, 0.5071, 0.7242], [0.1176, 0.5032, 0.7222], [0.1115, 0.4993, 0.7202], [0.1055, 0.4953, 0.7182], [0.0995, 0.4914, 0.7163], [0.0935, 0.4874, 0.7143], [0.0874, 0.4835, 0.7123], [0.0814, 0.4796, 0.7104], [0.0754, 0.4756, 0.7084], [0.0693, 0.4717, 0.7064], [0.0633, 0.4678, 0.7045], [0.0573, 0.4638, 0.7025], [0.0513, 0.4599, 0.7005], [0.0452, 0.4559, 0.6986], [0.0392, 0.452, 0.6966], [0.0332, 0.4481, 0.6946], [0.0271, 0.4441, 0.6927], [0.0211, 0.4402, 0.6907], [0.0195, 0.4372, 0.687], [0.0194, 0.4345, 0.6827], [0.0193, 0.4318, 0.6784], [0.0191, 0.4291, 0.674], [0.019, 0.4264, 0.6697], [0.0189, 0.4237, 0.6654], [0.0188, 0.4209, 0.6611], [0.0187, 0.4182, 0.6568], [0.0185, 0.4155, 0.6525], [0.0184, 0.4128, 0.6482], [0.0183, 0.4101, 0.6439], [0.0182, 0.4074, 0.6396], [0.018, 0.4047, 0.6353], [0.0179, 0.402, 0.631], [0.0178, 0.3993, 0.6267], [0.0177, 0.3966, 0.6224], [0.0175, 0.3939, 0.6181], [0.0174, 0.3912, 0.6138], [0.0173, 0.3885, 0.6095], [0.0172, 0.3858, 0.6052], [0.0171, 0.3831, 0.6008], [0.0169, 0.3803, 0.5965], [0.0168, 0.3776, 0.5922], [0.0167, 0.3749, 0.5879], [0.0166, 0.3722, 0.5836], [0.0164, 0.3695, 0.5793], [0.0163, 0.3668, 0.575], [0.0162, 0.3641, 0.5707], [0.0161, 0.3614, 0.5664], [0.0159, 0.3587, 0.5621], [0.0158, 0.356, 0.5578], [0.0157, 0.3533, 0.5535], [0.0155, 0.3493, 0.5472], [0.0152, 0.3451, 0.5407], [0.015, 0.3409, 0.5342], [0.0147, 0.3367, 0.5277], [0.0145, 0.3325, 0.5212], [0.0142, 0.3284, 0.5146], [0.014, 0.3242, 0.5081], [0.0137, 0.32, 0.5016], [0.0135, 0.3158, 0.4951], [0.0133, 0.3116, 0.4886], [0.013, 0.3075, 0.482], [0.0128, 0.3033, 0.4755], [0.0125, 0.2991, 0.469], [0.0123, 0.2949, 0.4625], [0.012, 0.2907, 0.4559], [0.0118, 0.2865, 0.4494], [0.0115, 0.2824, 0.4429], [0.0113, 0.2782, 0.4364], [0.011, 0.274, 0.4299], [0.0108, 0.2698, 0.4233], [0.0105, 0.2656, 0.4168], [0.0103, 0.2614, 0.4103], [0.0101, 0.2573, 0.4038], [0.0098, 0.2531, 0.3973], [0.0096, 0.2489, 0.3907], [0.0093, 0.2447, 0.3842], [0.0091, 0.2405, 0.3777], [0.0088, 0.2363, 0.3712], [0.0086, 0.2322, 0.3647], [0.0083, 0.228, 0.3581], [0.0081, 0.2238, 0.3516], [0.0078, 0.2196, 0.3451]] }, "PuBuGn": { "interpolate": true, "colors": [[1.0, 0.9686, 0.9843], [0.9977, 0.966, 0.983], [0.9953, 0.9635, 0.9816], [0.993, 0.9609, 0.9803], [0.9906, 0.9583, 0.9789], [0.9883, 0.9557, 0.9775], [0.986, 0.9531, 0.9762], [0.9836, 0.9505, 0.9748], [0.9813, 0.948, 0.9735], [0.979, 0.9454, 0.9721], [0.9766, 0.9428, 0.9708], [0.9743, 0.9402, 0.9694], [0.9719, 0.9376, 0.9681], [0.9696, 0.935, 0.9667], [0.9673, 0.9325, 0.9654], [0.9649, 0.9299, 0.964], [0.9626, 0.9273, 0.9627], [0.9603, 0.9247, 0.9613], [0.9579, 0.9221, 0.96], [0.9556, 0.9195, 0.9586], [0.9532, 0.917, 0.9572], [0.9509, 0.9144, 0.9559], [0.9486, 0.9118, 0.9545], [0.9462, 0.9092, 0.9532], [0.9439, 0.9066, 0.9518], [0.9416, 0.904, 0.9505], [0.9392, 0.9015, 0.9491], [0.9369, 0.8989, 0.9478], [0.9345, 0.8963, 0.9464], [0.9322, 0.8937, 0.9451], [0.9299, 0.8911, 0.9437], [0.9275, 0.8885, 0.9424], [0.9251, 0.886, 0.941], [0.9216, 0.8839, 0.9398], [0.9182, 0.8818, 0.9386], [0.9147, 0.8797, 0.9373], [0.9113, 0.8776, 0.9361], [0.9078, 0.8756, 0.9349], [0.9044, 0.8735, 0.9336], [0.9009, 0.8714, 0.9324], [0.8975, 0.8693, 0.9312], [0.8941, 0.8672, 0.93], [0.8906, 0.8651, 0.9287], [0.8872, 0.863, 0.9275], [0.8837, 0.8609, 0.9263], [0.8803, 0.8588, 0.925], [0.8768, 0.8567, 0.9238], [0.8734, 0.8546, 0.9226], [0.8699, 0.8525, 0.9213], [0.8665, 0.8505, 0.9201], [0.8631, 0.8484, 0.9189], [0.8596, 0.8463, 0.9176], [0.8562, 0.8442, 0.9164], [0.8527, 0.8421, 0.9152], [0.8493, 0.84, 0.914], [0.8458, 0.8379, 0.9127], [0.8424, 0.8358, 0.9115], [0.8389, 0.8337, 0.9103], [0.8355, 0.8316, 0.909], [0.832, 0.8295, 0.9078], [0.8286, 0.8275, 0.9066], [0.8252, 0.8254, 0.9053], [0.8217, 0.8233, 0.9041], [0.8183, 0.8212, 0.9029], [0.8144, 0.819, 0.9016], [0.8092, 0.8165, 0.9003], [0.8041, 0.8141, 0.8989], [0.7989, 0.8116, 0.8976], [0.7937, 0.8092, 0.8962], [0.7886, 0.8067, 0.8949], [0.7834, 0.8042, 0.8935], [0.7782, 0.8018, 0.8921], [0.7731, 0.7993, 0.8908], [0.7679, 0.7968, 0.8894], [0.7627, 0.7944, 0.8881], [0.7576, 0.7919, 0.8867], [0.7524, 0.7895, 0.8854], [0.7472, 0.787, 0.884], [0.7421, 0.7845, 0.8827], [0.7369, 0.7821, 0.8813], [0.7317, 0.7796, 0.88], [0.7266, 0.7772, 0.8786], [0.7214, 0.7747, 0.8773], [0.7162, 0.7722, 0.8759], [0.711, 0.7698, 0.8746], [0.7059, 0.7673, 0.8732], [0.7007, 0.7649, 0.8718], [0.6955, 0.7624, 0.8705], [0.6904, 0.7599, 0.8691], [0.6852, 0.7575, 0.8678], [0.68, 0.755, 0.8664], [0.6749, 0.7526, 0.8651], [0.6697, 0.7501, 0.8637], [0.6645, 0.7476, 0.8624], [0.6594, 0.7452, 0.861], [0.6542, 0.7427, 0.8597], [0.6481, 0.7403, 0.8583], [0.6403, 0.7378, 0.8568], [0.6326, 0.7353, 0.8553], [0.6248, 0.7329, 0.8538], [0.6171, 0.7304, 0.8524], [0.6093, 0.728, 0.8509], [0.6016, 0.7255, 0.8494], [0.5938, 0.723, 0.8479], [0.5861, 0.7206, 0.8465], [0.5783, 0.7181, 0.845], [0.5706, 0.7156, 0.8435], [0.5628, 0.7132, 0.842], [0.5551, 0.7107, 0.8406], [0.5473, 0.7083, 0.8391], [0.5396, 0.7058, 0.8376], [0.5318, 0.7033, 0.8361], [0.5241, 0.7009, 0.8346], [0.5163, 0.6984, 0.8332], [0.5086, 0.696, 0.8317], [0.5008, 0.6935, 0.8302], [0.4931, 0.691, 0.8287], [0.4853, 0.6886, 0.8273], [0.4776, 0.6861, 0.8258], [0.4698, 0.6837, 0.8243], [0.4621, 0.6812, 0.8228], [0.4543, 0.6787, 0.8214], [0.4466, 0.6763, 0.8199], [0.4388, 0.6738, 0.8184], [0.431, 0.6714, 0.8169], [0.4233, 0.6689, 0.8155], [0.4155, 0.6664, 0.814], [0.4078, 0.664, 0.8125], [0.4009, 0.6612, 0.8108], [0.3949, 0.6581, 0.809], [0.3889, 0.6551, 0.8072], [0.3828, 0.652, 0.8053], [0.3768, 0.6489, 0.8035], [0.3708, 0.6458, 0.8016], [0.3647, 0.6428, 0.7998], [0.3587, 0.6397, 0.7979], [0.3527, 0.6366, 0.7961], [0.3467, 0.6335, 0.7942], [0.3406, 0.6304, 0.7924], [0.3346, 0.6274, 0.7905], [0.3286, 0.6243, 0.7887], [0.3225, 0.6212, 0.7869], [0.3165, 0.6181, 0.785], [0.3105, 0.6151, 0.7832], [0.3045, 0.612, 0.7813], [0.2984, 0.6089, 0.7795], [0.2924, 0.6058, 0.7776], [0.2864, 0.6028, 0.7758], [0.2803, 0.5997, 0.7739], [0.2743, 0.5966, 0.7721], [0.2683, 0.5935, 0.7702], [0.2623, 0.5905, 0.7684], [0.2562, 0.5874, 0.7666], [0.2502, 0.5843, 0.7647], [0.2442, 0.5812, 0.7629], [0.2381, 0.5782, 0.761], [0.2321, 0.5751, 0.7592], [0.2261, 0.572, 0.7573], [0.2201, 0.5689, 0.7555], [0.214, 0.5659, 0.7536], [0.2078, 0.5636, 0.7488], [0.2014, 0.5617, 0.7421], [0.195, 0.5599, 0.7355], [0.1886, 0.558, 0.7289], [0.1822, 0.5562, 0.7222], [0.1758, 0.5543, 0.7156], [0.1694, 0.5525, 0.7089], [0.163, 0.5506, 0.7023], [0.1566, 0.5488, 0.6956], [0.1502, 0.5469, 0.689], [0.1438, 0.5451, 0.6824], [0.1374, 0.5433, 0.6757], [0.131, 0.5414, 0.6691], [0.1246, 0.5396, 0.6624], [0.1182, 0.5377, 0.6558], [0.1118, 0.5359, 0.6491], [0.1054, 0.534, 0.6425], [0.099, 0.5322, 0.6358], [0.0926, 0.5303, 0.6292], [0.0862, 0.5285, 0.6226], [0.0798, 0.5266, 0.6159], [0.0734, 0.5248, 0.6093], [0.067, 0.523, 0.6026], [0.0606, 0.5211, 0.596], [0.0542, 0.5193, 0.5893], [0.0478, 0.5174, 0.5827], [0.0414, 0.5156, 0.5761], [0.035, 0.5137, 0.5694], [0.0286, 0.5119, 0.5628], [0.0222, 0.51, 0.5561], [0.0158, 0.5082, 0.5495], [0.0094, 0.5063, 0.5428], [0.0078, 0.5039, 0.5367], [0.0076, 0.5014, 0.5306], [0.0075, 0.4988, 0.5246], [0.0074, 0.4962, 0.5186], [0.0073, 0.4936, 0.5125], [0.0071, 0.491, 0.5065], [0.007, 0.4884, 0.5005], [0.0069, 0.4859, 0.4945], [0.0068, 0.4833, 0.4884], [0.0066, 0.4807, 0.4824], [0.0065, 0.4781, 0.4764], [0.0064, 0.4755, 0.4703], [0.0063, 0.4729, 0.4643], [0.0062, 0.4704, 0.4583], [0.006, 0.4678, 0.4523], [0.0059, 0.4652, 0.4462], [0.0058, 0.4626, 0.4402], [0.0057, 0.46, 0.4342], [0.0055, 0.4574, 0.4281], [0.0054, 0.4549, 0.4221], [0.0053, 0.4523, 0.4161], [0.0052, 0.4497, 0.4101], [0.005, 0.4471, 0.404], [0.0049, 0.4445, 0.398], [0.0048, 0.4419, 0.392], [0.0047, 0.4394, 0.3859], [0.0046, 0.4368, 0.3799], [0.0044, 0.4342, 0.3739], [0.0043, 0.4316, 0.3679], [0.0042, 0.429, 0.3618], [0.0041, 0.4264, 0.3558], [0.0039, 0.4239, 0.3498], [0.0039, 0.4194, 0.3453], [0.0039, 0.4148, 0.3409], [0.0039, 0.4101, 0.3366], [0.0039, 0.4054, 0.3323], [0.0039, 0.4007, 0.328], [0.0039, 0.3961, 0.3237], [0.0039, 0.3914, 0.3194], [0.0039, 0.3867, 0.3151], [0.0039, 0.382, 0.3108], [0.0039, 0.3774, 0.3065], [0.0039, 0.3727, 0.3022], [0.0039, 0.368, 0.2979], [0.0039, 0.3633, 0.2936], [0.0039, 0.3587, 0.2893], [0.0039, 0.354, 0.285], [0.0039, 0.3493, 0.2807], [0.0039, 0.3446, 0.2764], [0.0039, 0.34, 0.272], [0.0039, 0.3353, 0.2677], [0.0039, 0.3306, 0.2634], [0.0039, 0.3259, 0.2591], [0.0039, 0.3213, 0.2548], [0.0039, 0.3166, 0.2505], [0.0039, 0.3119, 0.2462], [0.0039, 0.3072, 0.2419], [0.0039, 0.3026, 0.2376], [0.0039, 0.2979, 0.2333], [0.0039, 0.2932, 0.229], [0.0039, 0.2885, 0.2247], [0.0039, 0.2839, 0.2204], [0.0039, 0.2792, 0.2161], [0.0039, 0.2745, 0.2118]] }, "PuOr": { "interpolate": true, "colors": [[0.498, 0.2314, 0.0314], [0.506, 0.2358, 0.0311], [0.514, 0.2403, 0.0308], [0.522, 0.2448, 0.0304], [0.53, 0.2492, 0.0301], [0.538, 0.2537, 0.0298], [0.546, 0.2581, 0.0295], [0.554, 0.2626, 0.0292], [0.562, 0.2671, 0.0289], [0.57, 0.2715, 0.0286], [0.578, 0.276, 0.0283], [0.586, 0.2804, 0.028], [0.594, 0.2849, 0.0277], [0.602, 0.2894, 0.0274], [0.61, 0.2938, 0.0271], [0.618, 0.2983, 0.0268], [0.626, 0.3027, 0.0265], [0.634, 0.3072, 0.0261], [0.642, 0.3116, 0.0258], [0.65, 0.3161, 0.0255], [0.658, 0.3206, 0.0252], [0.666, 0.325, 0.0249], [0.674, 0.3295, 0.0246], [0.682, 0.3339, 0.0243], [0.69, 0.3384, 0.024], [0.698, 0.3429, 0.0237], [0.7054, 0.3483, 0.0246], [0.7123, 0.3548, 0.0268], [0.7193, 0.3612, 0.0289], [0.7262, 0.3677, 0.0311], [0.7331, 0.3742, 0.0332], [0.74, 0.3806, 0.0354], [0.7469, 0.3871, 0.0375], [0.7539, 0.3935, 0.0397], [0.7608, 0.4, 0.0418], [0.7677, 0.4065, 0.044], [0.7746, 0.4129, 0.0461], [0.7815, 0.4194, 0.0483], [0.7885, 0.4258, 0.0504], [0.7954, 0.4323, 0.0526], [0.8023, 0.4388, 0.0547], [0.8092, 0.4452, 0.0569], [0.8161, 0.4517, 0.0591], [0.8231, 0.4581, 0.0612], [0.83, 0.4646, 0.0634], [0.8369, 0.471, 0.0655], [0.8438, 0.4775, 0.0677], [0.8507, 0.484, 0.0698], [0.8577, 0.4904, 0.072], [0.8646, 0.4969, 0.0741], [0.8715, 0.5033, 0.0763], [0.8784, 0.5098, 0.0784], [0.8829, 0.5181, 0.0906], [0.8874, 0.5264, 0.1027], [0.8918, 0.5347, 0.1149], [0.8963, 0.543, 0.127], [0.9007, 0.5513, 0.1392], [0.9052, 0.5596, 0.1513], [0.9097, 0.5679, 0.1635], [0.9141, 0.5762, 0.1756], [0.9186, 0.5845, 0.1878], [0.923, 0.5928, 0.1999], [0.9275, 0.6012, 0.2121], [0.9319, 0.6095, 0.2242], [0.9364, 0.6178, 0.2364], [0.9409, 0.6261, 0.2485], [0.9453, 0.6344, 0.2607], [0.9498, 0.6427, 0.2728], [0.9542, 0.651, 0.285], [0.9587, 0.6593, 0.2971], [0.9632, 0.6676, 0.3093], [0.9676, 0.6759, 0.3214], [0.9721, 0.6842, 0.3336], [0.9765, 0.6925, 0.3457], [0.981, 0.7008, 0.3579], [0.9855, 0.7091, 0.37], [0.9899, 0.7174, 0.3822], [0.9922, 0.7246, 0.3946], [0.9924, 0.7308, 0.4074], [0.9925, 0.7369, 0.4201], [0.9927, 0.7431, 0.4329], [0.9928, 0.7493, 0.4457], [0.993, 0.7554, 0.4584], [0.9932, 0.7616, 0.4712], [0.9933, 0.7677, 0.484], [0.9935, 0.7739, 0.4967], [0.9936, 0.78, 0.5095], [0.9938, 0.7862, 0.5223], [0.9939, 0.7923, 0.535], [0.9941, 0.7985, 0.5478], [0.9942, 0.8046, 0.5606], [0.9944, 0.8108, 0.5733], [0.9945, 0.8169, 0.5861], [0.9947, 0.8231, 0.5988], [0.9948, 0.8292, 0.6116], [0.995, 0.8354, 0.6244], [0.9952, 0.8415, 0.6371], [0.9953, 0.8477, 0.6499], [0.9955, 0.8538, 0.6627], [0.9956, 0.86, 0.6754], [0.9958, 0.8661, 0.6882], [0.9959, 0.8723, 0.701], [0.9961, 0.8784, 0.7137], [0.995, 0.882, 0.7237], [0.9939, 0.8855, 0.7337], [0.9928, 0.889, 0.7437], [0.9918, 0.8926, 0.7537], [0.9907, 0.8961, 0.7637], [0.9896, 0.8997, 0.7737], [0.9885, 0.9032, 0.7837], [0.9875, 0.9067, 0.7937], [0.9864, 0.9103, 0.8037], [0.9853, 0.9138, 0.8137], [0.9842, 0.9173, 0.8237], [0.9832, 0.9209, 0.8337], [0.9821, 0.9244, 0.8437], [0.981, 0.928, 0.8537], [0.9799, 0.9315, 0.8637], [0.9789, 0.935, 0.8737], [0.9778, 0.9386, 0.8837], [0.9767, 0.9421, 0.8937], [0.9756, 0.9456, 0.9037], [0.9745, 0.9492, 0.9136], [0.9735, 0.9527, 0.9236], [0.9724, 0.9562, 0.9336], [0.9713, 0.9598, 0.9436], [0.9702, 0.9633, 0.9536], [0.9692, 0.9669, 0.9636], [0.9662, 0.9664, 0.9677], [0.9615, 0.9619, 0.9659], [0.9567, 0.9575, 0.964], [0.9519, 0.953, 0.9622], [0.9472, 0.9486, 0.9603], [0.9424, 0.9441, 0.9585], [0.9376, 0.9396, 0.9566], [0.9329, 0.9352, 0.9548], [0.9281, 0.9307, 0.9529], [0.9233, 0.9263, 0.9511], [0.9186, 0.9218, 0.9493], [0.9138, 0.9173, 0.9474], [0.909, 0.9129, 0.9456], [0.9043, 0.9084, 0.9437], [0.8995, 0.904, 0.9419], [0.8947, 0.8995, 0.94], [0.89, 0.895, 0.9382], [0.8852, 0.8906, 0.9363], [0.8804, 0.8861, 0.9345], [0.8757, 0.8817, 0.9326], [0.8709, 0.8772, 0.9308], [0.8661, 0.8727, 0.929], [0.8614, 0.8683, 0.9271], [0.8566, 0.8638, 0.9253], [0.8518, 0.8594, 0.9234], [0.8471, 0.8549, 0.9216], [0.8412, 0.8477, 0.9177], [0.8354, 0.8404, 0.9139], [0.8295, 0.8332, 0.91], [0.8237, 0.826, 0.9062], [0.8178, 0.8188, 0.9023], [0.812, 0.8115, 0.8985], [0.8062, 0.8043, 0.8947], [0.8003, 0.7971, 0.8908], [0.7945, 0.7899, 0.887], [0.7886, 0.7826, 0.8831], [0.7828, 0.7754, 0.8793], [0.7769, 0.7682, 0.8754], [0.7711, 0.7609, 0.8716], [0.7652, 0.7537, 0.8677], [0.7594, 0.7465, 0.8639], [0.7536, 0.7393, 0.8601], [0.7477, 0.732, 0.8562], [0.7419, 0.7248, 0.8524], [0.736, 0.7176, 0.8485], [0.7302, 0.7103, 0.8447], [0.7243, 0.7031, 0.8408], [0.7185, 0.6959, 0.837], [0.7126, 0.6887, 0.8331], [0.7068, 0.6814, 0.8293], [0.701, 0.6742, 0.8255], [0.6942, 0.6663, 0.8206], [0.6865, 0.6577, 0.8148], [0.6788, 0.6491, 0.8089], [0.6711, 0.6404, 0.8031], [0.6634, 0.6318, 0.7972], [0.6557, 0.6232, 0.7914], [0.6481, 0.6146, 0.7855], [0.6404, 0.606, 0.7797], [0.6327, 0.5974, 0.7739], [0.625, 0.5888, 0.768], [0.6173, 0.5802, 0.7622], [0.6096, 0.5715, 0.7563], [0.6019, 0.5629, 0.7505], [0.5942, 0.5543, 0.7446], [0.5865, 0.5457, 0.7388], [0.5789, 0.5371, 0.7329], [0.5712, 0.5285, 0.7271], [0.5635, 0.5199, 0.7213], [0.5558, 0.5113, 0.7154], [0.5481, 0.5027, 0.7096], [0.5404, 0.494, 0.7037], [0.5327, 0.4854, 0.6979], [0.525, 0.4768, 0.692], [0.5173, 0.4682, 0.6862], [0.5097, 0.4596, 0.6804], [0.502, 0.451, 0.6745], [0.4952, 0.4393, 0.669], [0.4884, 0.4276, 0.6634], [0.4817, 0.4159, 0.6579], [0.4749, 0.4042, 0.6524], [0.4681, 0.3925, 0.6468], [0.4614, 0.3809, 0.6413], [0.4546, 0.3692, 0.6358], [0.4478, 0.3575, 0.6302], [0.4411, 0.3458, 0.6247], [0.4343, 0.3341, 0.6191], [0.4275, 0.3224, 0.6136], [0.4208, 0.3107, 0.6081], [0.414, 0.299, 0.6025], [0.4072, 0.2874, 0.597], [0.4005, 0.2757, 0.5915], [0.3937, 0.264, 0.5859], [0.3869, 0.2523, 0.5804], [0.3802, 0.2406, 0.5749], [0.3734, 0.2289, 0.5693], [0.3666, 0.2172, 0.5638], [0.3599, 0.2055, 0.5582], [0.3531, 0.1938, 0.5527], [0.3463, 0.1822, 0.5472], [0.3396, 0.1705, 0.5416], [0.3328, 0.1588, 0.5361], [0.3264, 0.1499, 0.5286], [0.3204, 0.1439, 0.5193], [0.3144, 0.1379, 0.5099], [0.3084, 0.1319, 0.5005], [0.3024, 0.126, 0.4911], [0.2964, 0.12, 0.4817], [0.2904, 0.114, 0.4724], [0.2844, 0.108, 0.463], [0.2784, 0.102, 0.4536], [0.2724, 0.096, 0.4442], [0.2664, 0.09, 0.4348], [0.2604, 0.084, 0.4255], [0.2544, 0.078, 0.4161], [0.2484, 0.072, 0.4067], [0.2424, 0.066, 0.3973], [0.2364, 0.06, 0.3879], [0.2304, 0.054, 0.3785], [0.2245, 0.048, 0.3692], [0.2185, 0.042, 0.3598], [0.2125, 0.036, 0.3504], [0.2065, 0.03, 0.341], [0.2005, 0.024, 0.3316], [0.1945, 0.018, 0.3223], [0.1885, 0.012, 0.3129], [0.1825, 0.006, 0.3035], [0.1765, 0.0, 0.2941]] }, "PuRd": { "interpolate": true, "colors": [[0.9686, 0.9569, 0.9765], [0.9667, 0.9545, 0.9752], [0.9647, 0.9522, 0.974], [0.9627, 0.9499, 0.9728], [0.9608, 0.9475, 0.9715], [0.9588, 0.9452, 0.9703], [0.9568, 0.9428, 0.9691], [0.9548, 0.9405, 0.9679], [0.9529, 0.9382, 0.9666], [0.9509, 0.9358, 0.9654], [0.9489, 0.9335, 0.9642], [0.947, 0.9311, 0.9629], [0.945, 0.9288, 0.9617], [0.943, 0.9265, 0.9605], [0.9411, 0.9241, 0.9592], [0.9391, 0.9218, 0.958], [0.9371, 0.9195, 0.9568], [0.9352, 0.9171, 0.9556], [0.9332, 0.9148, 0.9543], [0.9312, 0.9124, 0.9531], [0.9293, 0.9101, 0.9519], [0.9273, 0.9078, 0.9506], [0.9253, 0.9054, 0.9494], [0.9234, 0.9031, 0.9482], [0.9214, 0.9008, 0.9469], [0.9194, 0.8984, 0.9457], [0.9174, 0.8961, 0.9445], [0.9155, 0.8937, 0.9433], [0.9135, 0.8914, 0.942], [0.9115, 0.8891, 0.9408], [0.9096, 0.8867, 0.9396], [0.9076, 0.8844, 0.9383], [0.9056, 0.8817, 0.9369], [0.9033, 0.8768, 0.9343], [0.9009, 0.8719, 0.9318], [0.8986, 0.867, 0.9292], [0.8962, 0.8621, 0.9266], [0.8939, 0.8571, 0.924], [0.8916, 0.8522, 0.9214], [0.8892, 0.8473, 0.9188], [0.8869, 0.8424, 0.9163], [0.8846, 0.8374, 0.9137], [0.8822, 0.8325, 0.9111], [0.8799, 0.8276, 0.9085], [0.8775, 0.8227, 0.9059], [0.8752, 0.8178, 0.9033], [0.8729, 0.8128, 0.9008], [0.8705, 0.8079, 0.8982], [0.8682, 0.803, 0.8956], [0.8659, 0.7981, 0.893], [0.8635, 0.7932, 0.8904], [0.8612, 0.7882, 0.8878], [0.8588, 0.7833, 0.8853], [0.8565, 0.7784, 0.8827], [0.8542, 0.7735, 0.8801], [0.8518, 0.7686, 0.8775], [0.8495, 0.7636, 0.8749], [0.8472, 0.7587, 0.8723], [0.8448, 0.7538, 0.8698], [0.8425, 0.7489, 0.8672], [0.8401, 0.7439, 0.8646], [0.8378, 0.739, 0.862], [0.8355, 0.7341, 0.8594], [0.8331, 0.7292, 0.8568], [0.831, 0.7244, 0.8543], [0.8297, 0.7198, 0.852], [0.8283, 0.7152, 0.8496], [0.827, 0.7107, 0.8473], [0.8256, 0.7061, 0.845], [0.8243, 0.7016, 0.8426], [0.8229, 0.697, 0.8403], [0.8216, 0.6925, 0.838], [0.8202, 0.6879, 0.8356], [0.8189, 0.6834, 0.8333], [0.8175, 0.6788, 0.8309], [0.8161, 0.6743, 0.8286], [0.8148, 0.6697, 0.8263], [0.8134, 0.6652, 0.8239], [0.8121, 0.6606, 0.8216], [0.8107, 0.6561, 0.8193], [0.8094, 0.6515, 0.8169], [0.808, 0.647, 0.8146], [0.8067, 0.6424, 0.8122], [0.8053, 0.6379, 0.8099], [0.804, 0.6333, 0.8076], [0.8026, 0.6288, 0.8052], [0.8013, 0.6242, 0.8029], [0.7999, 0.6197, 0.8006], [0.7986, 0.6151, 0.7982], [0.7972, 0.6105, 0.7959], [0.7958, 0.606, 0.7935], [0.7945, 0.6014, 0.7912], [0.7931, 0.5969, 0.7889], [0.7918, 0.5923, 0.7865], [0.7904, 0.5878, 0.7842], [0.7891, 0.5832, 0.7819], [0.7893, 0.5782, 0.7793], [0.792, 0.5724, 0.7765], [0.7947, 0.5667, 0.7737], [0.7974, 0.5609, 0.7708], [0.8001, 0.5551, 0.768], [0.8028, 0.5493, 0.7652], [0.8055, 0.5435, 0.7624], [0.8082, 0.5377, 0.7595], [0.8109, 0.532, 0.7567], [0.8136, 0.5262, 0.7539], [0.8163, 0.5204, 0.751], [0.819, 0.5146, 0.7482], [0.8217, 0.5088, 0.7454], [0.8244, 0.5031, 0.7425], [0.8271, 0.4973, 0.7397], [0.8299, 0.4915, 0.7369], [0.8326, 0.4857, 0.7341], [0.8353, 0.4799, 0.7312], [0.838, 0.4741, 0.7284], [0.8407, 0.4684, 0.7256], [0.8434, 0.4626, 0.7227], [0.8461, 0.4568, 0.7199], [0.8488, 0.451, 0.7171], [0.8515, 0.4452, 0.7142], [0.8542, 0.4394, 0.7114], [0.8569, 0.4337, 0.7086], [0.8596, 0.4279, 0.7058], [0.8623, 0.4221, 0.7029], [0.865, 0.4163, 0.7001], [0.8677, 0.4105, 0.6973], [0.8704, 0.4048, 0.6944], [0.8732, 0.399, 0.6916], [0.875, 0.3924, 0.6879], [0.876, 0.385, 0.6832], [0.877, 0.3776, 0.6785], [0.878, 0.3702, 0.6738], [0.8789, 0.3629, 0.6692], [0.8799, 0.3555, 0.6645], [0.8809, 0.3481, 0.6598], [0.8819, 0.3407, 0.6551], [0.8829, 0.3333, 0.6505], [0.8839, 0.326, 0.6458], [0.8848, 0.3186, 0.6411], [0.8858, 0.3112, 0.6364], [0.8868, 0.3038, 0.6318], [0.8878, 0.2964, 0.6271], [0.8888, 0.289, 0.6224], [0.8898, 0.2817, 0.6177], [0.8907, 0.2743, 0.6131], [0.8917, 0.2669, 0.6084], [0.8927, 0.2595, 0.6037], [0.8937, 0.2521, 0.599], [0.8947, 0.2448, 0.5944], [0.8957, 0.2374, 0.5897], [0.8967, 0.23, 0.585], [0.8976, 0.2226, 0.5803], [0.8986, 0.2152, 0.5757], [0.8996, 0.2078, 0.571], [0.9006, 0.2005, 0.5663], [0.9016, 0.1931, 0.5616], [0.9026, 0.1857, 0.557], [0.9035, 0.1783, 0.5523], [0.9045, 0.1709, 0.5476], [0.9055, 0.1636, 0.5429], [0.904, 0.159, 0.5372], [0.9009, 0.1562, 0.5308], [0.8978, 0.1534, 0.5244], [0.8947, 0.1505, 0.518], [0.8917, 0.1477, 0.5116], [0.8886, 0.1449, 0.5052], [0.8855, 0.142, 0.4988], [0.8824, 0.1392, 0.4924], [0.8794, 0.1364, 0.486], [0.8763, 0.1335, 0.4796], [0.8732, 0.1307, 0.4732], [0.8701, 0.1279, 0.4668], [0.8671, 0.1251, 0.4604], [0.864, 0.1222, 0.454], [0.8609, 0.1194, 0.4476], [0.8578, 0.1166, 0.4412], [0.8547, 0.1137, 0.4348], [0.8517, 0.1109, 0.4284], [0.8486, 0.1081, 0.422], [0.8455, 0.1053, 0.4156], [0.8424, 0.1024, 0.4092], [0.8394, 0.0996, 0.4028], [0.8363, 0.0968, 0.3964], [0.8332, 0.0939, 0.39], [0.8301, 0.0911, 0.3836], [0.8271, 0.0883, 0.3772], [0.824, 0.0854, 0.3708], [0.8209, 0.0826, 0.3644], [0.8178, 0.0798, 0.358], [0.8148, 0.077, 0.3516], [0.8117, 0.0741, 0.3453], [0.8086, 0.0713, 0.3389], [0.8029, 0.0689, 0.3355], [0.7962, 0.0667, 0.3332], [0.7896, 0.0645, 0.3308], [0.7829, 0.0623, 0.3285], [0.7763, 0.0601, 0.3262], [0.7696, 0.0579, 0.3238], [0.763, 0.0556, 0.3215], [0.7564, 0.0534, 0.3191], [0.7497, 0.0512, 0.3168], [0.7431, 0.049, 0.3145], [0.7364, 0.0468, 0.3121], [0.7298, 0.0446, 0.3098], [0.7231, 0.0424, 0.3075], [0.7165, 0.0401, 0.3051], [0.7099, 0.0379, 0.3028], [0.7032, 0.0357, 0.3004], [0.6966, 0.0335, 0.2981], [0.6899, 0.0313, 0.2958], [0.6833, 0.0291, 0.2934], [0.6766, 0.0269, 0.2911], [0.67, 0.0246, 0.2888], [0.6633, 0.0224, 0.2864], [0.6567, 0.0202, 0.2841], [0.6501, 0.018, 0.2817], [0.6434, 0.0158, 0.2794], [0.6368, 0.0136, 0.2771], [0.6301, 0.0113, 0.2747], [0.6235, 0.0091, 0.2724], [0.6168, 0.0069, 0.27], [0.6102, 0.0047, 0.2677], [0.6036, 0.0025, 0.2654], [0.5969, 0.0003, 0.263], [0.5908, 0.0, 0.2589], [0.5848, 0.0, 0.2544], [0.5787, 0.0, 0.25], [0.5727, 0.0, 0.2456], [0.5667, 0.0, 0.2412], [0.5607, 0.0, 0.2367], [0.5546, 0.0, 0.2323], [0.5486, 0.0, 0.2279], [0.5426, 0.0, 0.2234], [0.5365, 0.0, 0.219], [0.5305, 0.0, 0.2146], [0.5245, 0.0, 0.2101], [0.5185, 0.0, 0.2057], [0.5124, 0.0, 0.2013], [0.5064, 0.0, 0.1969], [0.5004, 0.0, 0.1924], [0.4943, 0.0, 0.188], [0.4883, 0.0, 0.1836], [0.4823, 0.0, 0.1791], [0.4763, 0.0, 0.1747], [0.4702, 0.0, 0.1703], [0.4642, 0.0, 0.1659], [0.4582, 0.0, 0.1614], [0.4521, 0.0, 0.157], [0.4461, 0.0, 0.1526], [0.4401, 0.0, 0.1481], [0.4341, 0.0, 0.1437], [0.428, 0.0, 0.1393], [0.422, 0.0, 0.1349], [0.416, 0.0, 0.1304], [0.41, 0.0, 0.126], [0.4039, 0.0, 0.1216]] }, "Purples": { "interpolate": true, "colors": [[0.9882, 0.9843, 0.9922], [0.9866, 0.9826, 0.9912], [0.985, 0.9809, 0.9902], [0.9834, 0.9791, 0.9892], [0.9818, 0.9774, 0.9882], [0.9802, 0.9757, 0.9872], [0.9786, 0.974, 0.9863], [0.977, 0.9723, 0.9853], [0.9754, 0.9705, 0.9843], [0.9738, 0.9688, 0.9833], [0.9722, 0.9671, 0.9823], [0.9706, 0.9654, 0.9813], [0.969, 0.9636, 0.9803], [0.9674, 0.9619, 0.9794], [0.9658, 0.9602, 0.9784], [0.9642, 0.9585, 0.9774], [0.9626, 0.9568, 0.9764], [0.961, 0.955, 0.9754], [0.9594, 0.9533, 0.9744], [0.9578, 0.9516, 0.9735], [0.9562, 0.9499, 0.9725], [0.9546, 0.9481, 0.9715], [0.953, 0.9464, 0.9705], [0.9514, 0.9447, 0.9695], [0.9499, 0.943, 0.9685], [0.9483, 0.9413, 0.9676], [0.9467, 0.9395, 0.9666], [0.9451, 0.9378, 0.9656], [0.9435, 0.9361, 0.9646], [0.9419, 0.9344, 0.9636], [0.9403, 0.9326, 0.9626], [0.9387, 0.9309, 0.9616], [0.9369, 0.9291, 0.9606], [0.9343, 0.9268, 0.9594], [0.9318, 0.9244, 0.9582], [0.9292, 0.9221, 0.9569], [0.9266, 0.9198, 0.9557], [0.924, 0.9174, 0.9545], [0.9214, 0.9151, 0.9532], [0.9188, 0.9128, 0.952], [0.9163, 0.9104, 0.9508], [0.9137, 0.9081, 0.9496], [0.9111, 0.9057, 0.9483], [0.9085, 0.9034, 0.9471], [0.9059, 0.9011, 0.9459], [0.9033, 0.8987, 0.9446], [0.9008, 0.8964, 0.9434], [0.8982, 0.8941, 0.9422], [0.8956, 0.8917, 0.9409], [0.893, 0.8894, 0.9397], [0.8904, 0.887, 0.9385], [0.8878, 0.8847, 0.9373], [0.8853, 0.8824, 0.936], [0.8827, 0.88, 0.9348], [0.8801, 0.8777, 0.9336], [0.8775, 0.8754, 0.9323], [0.8749, 0.873, 0.9311], [0.8723, 0.8707, 0.9299], [0.8698, 0.8683, 0.9286], [0.8672, 0.866, 0.9274], [0.8646, 0.8637, 0.9262], [0.862, 0.8613, 0.925], [0.8594, 0.859, 0.9237], [0.8568, 0.8567, 0.9225], [0.854, 0.854, 0.9211], [0.8503, 0.8504, 0.9193], [0.8466, 0.8469, 0.9174], [0.8429, 0.8433, 0.9156], [0.8392, 0.8397, 0.9137], [0.8355, 0.8362, 0.9119], [0.8318, 0.8326, 0.91], [0.8281, 0.829, 0.9082], [0.8245, 0.8255, 0.9063], [0.8208, 0.8219, 0.9045], [0.8171, 0.8183, 0.9027], [0.8134, 0.8148, 0.9008], [0.8097, 0.8112, 0.899], [0.806, 0.8076, 0.8971], [0.8023, 0.8041, 0.8953], [0.7986, 0.8005, 0.8934], [0.7949, 0.7969, 0.8916], [0.7912, 0.7934, 0.8897], [0.7875, 0.7898, 0.8879], [0.7839, 0.7862, 0.886], [0.7802, 0.7827, 0.8842], [0.7765, 0.7791, 0.8824], [0.7728, 0.7755, 0.8805], [0.7691, 0.7719, 0.8787], [0.7654, 0.7684, 0.8768], [0.7617, 0.7648, 0.875], [0.758, 0.7612, 0.8731], [0.7543, 0.7577, 0.8713], [0.7506, 0.7541, 0.8694], [0.7469, 0.7505, 0.8676], [0.7433, 0.747, 0.8657], [0.7396, 0.7434, 0.8639], [0.7359, 0.7396, 0.8618], [0.7322, 0.7353, 0.8594], [0.7285, 0.7309, 0.8569], [0.7248, 0.7266, 0.8544], [0.7211, 0.7223, 0.852], [0.7174, 0.718, 0.8495], [0.7137, 0.7137, 0.8471], [0.71, 0.7094, 0.8446], [0.7063, 0.7051, 0.8421], [0.7027, 0.7008, 0.8397], [0.699, 0.6965, 0.8372], [0.6953, 0.6922, 0.8348], [0.6916, 0.6879, 0.8323], [0.6879, 0.6836, 0.8298], [0.6842, 0.6793, 0.8274], [0.6805, 0.675, 0.8249], [0.6768, 0.6707, 0.8225], [0.6731, 0.6664, 0.82], [0.6694, 0.6621, 0.8175], [0.6657, 0.6577, 0.8151], [0.6621, 0.6534, 0.8126], [0.6584, 0.6491, 0.8101], [0.6547, 0.6448, 0.8077], [0.651, 0.6405, 0.8052], [0.6473, 0.6362, 0.8028], [0.6436, 0.6319, 0.8003], [0.6399, 0.6276, 0.7978], [0.6362, 0.6233, 0.7954], [0.6325, 0.619, 0.7929], [0.6288, 0.6147, 0.7905], [0.6251, 0.6104, 0.788], [0.6215, 0.6061, 0.7855], [0.6178, 0.6021, 0.7835], [0.6141, 0.5986, 0.7817], [0.6104, 0.595, 0.78], [0.6067, 0.5914, 0.7783], [0.603, 0.5879, 0.7766], [0.5993, 0.5843, 0.7748], [0.5956, 0.5807, 0.7731], [0.5919, 0.5772, 0.7714], [0.5882, 0.5736, 0.7697], [0.5845, 0.57, 0.768], [0.5809, 0.5665, 0.7662], [0.5772, 0.5629, 0.7645], [0.5735, 0.5593, 0.7628], [0.5698, 0.5558, 0.7611], [0.5661, 0.5522, 0.7593], [0.5624, 0.5486, 0.7576], [0.5587, 0.5451, 0.7559], [0.555, 0.5415, 0.7542], [0.5513, 0.5379, 0.7524], [0.5476, 0.5343, 0.7507], [0.5439, 0.5308, 0.749], [0.5403, 0.5272, 0.7473], [0.5366, 0.5236, 0.7456], [0.5329, 0.5201, 0.7438], [0.5292, 0.5165, 0.7421], [0.5255, 0.5129, 0.7404], [0.5218, 0.5094, 0.7387], [0.5181, 0.5058, 0.7369], [0.5144, 0.5022, 0.7352], [0.5107, 0.4987, 0.7335], [0.507, 0.4951, 0.7318], [0.5033, 0.4915, 0.7301], [0.5003, 0.4868, 0.7276], [0.4976, 0.4814, 0.7248], [0.4949, 0.476, 0.722], [0.4921, 0.4706, 0.7192], [0.4894, 0.4652, 0.7163], [0.4867, 0.4597, 0.7135], [0.484, 0.4543, 0.7107], [0.4813, 0.4489, 0.7078], [0.4786, 0.4435, 0.705], [0.4759, 0.4381, 0.7022], [0.4732, 0.4327, 0.6993], [0.4705, 0.4273, 0.6965], [0.4678, 0.4219, 0.6937], [0.4651, 0.4164, 0.6909], [0.4624, 0.411, 0.688], [0.4597, 0.4056, 0.6852], [0.457, 0.4002, 0.6824], [0.4543, 0.3948, 0.6795], [0.4515, 0.3894, 0.6767], [0.4488, 0.384, 0.6739], [0.4461, 0.3785, 0.671], [0.4434, 0.3731, 0.6682], [0.4407, 0.3677, 0.6654], [0.438, 0.3623, 0.6626], [0.4353, 0.3569, 0.6597], [0.4326, 0.3515, 0.6569], [0.4299, 0.3461, 0.6541], [0.4272, 0.3407, 0.6512], [0.4245, 0.3352, 0.6484], [0.4218, 0.3298, 0.6456], [0.4191, 0.3244, 0.6428], [0.4164, 0.319, 0.6399], [0.4137, 0.3138, 0.6374], [0.4109, 0.3086, 0.6349], [0.4082, 0.3034, 0.6324], [0.4055, 0.2983, 0.63], [0.4028, 0.2931, 0.6275], [0.4001, 0.2879, 0.6251], [0.3974, 0.2828, 0.6226], [0.3947, 0.2776, 0.6201], [0.392, 0.2724, 0.6177], [0.3893, 0.2673, 0.6152], [0.3866, 0.2621, 0.6128], [0.3839, 0.2569, 0.6103], [0.3812, 0.2518, 0.6078], [0.3785, 0.2466, 0.6054], [0.3758, 0.2414, 0.6029], [0.3731, 0.2363, 0.6005], [0.3703, 0.2311, 0.598], [0.3676, 0.2259, 0.5955], [0.3649, 0.2208, 0.5931], [0.3622, 0.2156, 0.5906], [0.3595, 0.2104, 0.5882], [0.3568, 0.2053, 0.5857], [0.3541, 0.2001, 0.5832], [0.3514, 0.1949, 0.5808], [0.3487, 0.1898, 0.5783], [0.346, 0.1846, 0.5759], [0.3433, 0.1794, 0.5734], [0.3406, 0.1743, 0.5709], [0.3379, 0.1691, 0.5685], [0.3352, 0.1639, 0.566], [0.3325, 0.1588, 0.5636], [0.3298, 0.1536, 0.5611], [0.3272, 0.1487, 0.5588], [0.3246, 0.1439, 0.5566], [0.322, 0.1391, 0.5544], [0.3194, 0.1343, 0.5522], [0.3168, 0.1296, 0.55], [0.3142, 0.1248, 0.5478], [0.3116, 0.12, 0.5456], [0.3091, 0.1152, 0.5433], [0.3065, 0.1104, 0.5411], [0.3039, 0.1056, 0.5389], [0.3013, 0.1008, 0.5367], [0.2987, 0.096, 0.5345], [0.2961, 0.0912, 0.5323], [0.2936, 0.0864, 0.5301], [0.291, 0.0816, 0.5278], [0.2884, 0.0768, 0.5256], [0.2858, 0.072, 0.5234], [0.2832, 0.0672, 0.5212], [0.2806, 0.0624, 0.519], [0.2781, 0.0576, 0.5168], [0.2755, 0.0528, 0.5146], [0.2729, 0.048, 0.5123], [0.2703, 0.0432, 0.5101], [0.2677, 0.0384, 0.5079], [0.2651, 0.0336, 0.5057], [0.2626, 0.0288, 0.5035], [0.26, 0.024, 0.5013], [0.2574, 0.0192, 0.4991], [0.2548, 0.0144, 0.4968], [0.2522, 0.0096, 0.4946], [0.2496, 0.0048, 0.4924], [0.2471, 0.0, 0.4902]] }, "RdBu": { "interpolate": true, "colors": [[0.4039, 0.0, 0.1216], [0.4155, 0.0037, 0.1234], [0.427, 0.0074, 0.1253], [0.4385, 0.0111, 0.1271], [0.4501, 0.0148, 0.129], [0.4616, 0.0185, 0.1308], [0.4731, 0.0221, 0.1326], [0.4847, 0.0258, 0.1345], [0.4962, 0.0295, 0.1363], [0.5077, 0.0332, 0.1382], [0.5193, 0.0369, 0.14], [0.5308, 0.0406, 0.1419], [0.5423, 0.0443, 0.1437], [0.5539, 0.048, 0.1456], [0.5654, 0.0517, 0.1474], [0.5769, 0.0554, 0.1493], [0.5885, 0.0591, 0.1511], [0.6, 0.0627, 0.1529], [0.6115, 0.0664, 0.1548], [0.6231, 0.0701, 0.1566], [0.6346, 0.0738, 0.1585], [0.6461, 0.0775, 0.1603], [0.6577, 0.0812, 0.1622], [0.6692, 0.0849, 0.164], [0.6807, 0.0886, 0.1659], [0.6923, 0.0923, 0.1677], [0.7008, 0.0997, 0.1712], [0.7063, 0.1107, 0.1765], [0.7119, 0.1218, 0.1817], [0.7174, 0.1329, 0.1869], [0.723, 0.1439, 0.1922], [0.7285, 0.155, 0.1974], [0.734, 0.1661, 0.2026], [0.7396, 0.1772, 0.2078], [0.7451, 0.1882, 0.2131], [0.7506, 0.1993, 0.2183], [0.7562, 0.2104, 0.2235], [0.7617, 0.2215, 0.2288], [0.7672, 0.2325, 0.234], [0.7728, 0.2436, 0.2392], [0.7783, 0.2547, 0.2444], [0.7839, 0.2657, 0.2497], [0.7894, 0.2768, 0.2549], [0.7949, 0.2879, 0.2601], [0.8005, 0.299, 0.2654], [0.806, 0.31, 0.2706], [0.8115, 0.3211, 0.2758], [0.8171, 0.3322, 0.281], [0.8226, 0.3433, 0.2863], [0.8281, 0.3543, 0.2915], [0.8337, 0.3654, 0.2967], [0.8392, 0.3765, 0.302], [0.8438, 0.3871, 0.3101], [0.8484, 0.3977, 0.3183], [0.8531, 0.4083, 0.3264], [0.8577, 0.4189, 0.3346], [0.8623, 0.4295, 0.3427], [0.8669, 0.4401, 0.3509], [0.8715, 0.4507, 0.359], [0.8761, 0.4614, 0.3672], [0.8807, 0.472, 0.3753], [0.8854, 0.4826, 0.3835], [0.89, 0.4932, 0.3916], [0.8946, 0.5038, 0.3998], [0.8992, 0.5144, 0.4079], [0.9038, 0.525, 0.4161], [0.9084, 0.5356, 0.4242], [0.913, 0.5463, 0.4324], [0.9176, 0.5569, 0.4405], [0.9223, 0.5675, 0.4487], [0.9269, 0.5781, 0.4568], [0.9315, 0.5887, 0.465], [0.9361, 0.5993, 0.4731], [0.9407, 0.6099, 0.4813], [0.9453, 0.6205, 0.4894], [0.9499, 0.6311, 0.4976], [0.9546, 0.6418, 0.5057], [0.9576, 0.6512, 0.5151], [0.9589, 0.6595, 0.5257], [0.9603, 0.6678, 0.5363], [0.9617, 0.6761, 0.5469], [0.9631, 0.6844, 0.5576], [0.9645, 0.6927, 0.5682], [0.9659, 0.701, 0.5788], [0.9672, 0.7093, 0.5894], [0.9686, 0.7176, 0.6], [0.97, 0.726, 0.6106], [0.9714, 0.7343, 0.6212], [0.9728, 0.7426, 0.6318], [0.9742, 0.7509, 0.6424], [0.9755, 0.7592, 0.6531], [0.9769, 0.7675, 0.6637], [0.9783, 0.7758, 0.6743], [0.9797, 0.7841, 0.6849], [0.9811, 0.7924, 0.6955], [0.9825, 0.8007, 0.7061], [0.9839, 0.809, 0.7167], [0.9852, 0.8173, 0.7273], [0.9866, 0.8256, 0.7379], [0.988, 0.8339, 0.7486], [0.9894, 0.8422, 0.7592], [0.9908, 0.8505, 0.7698], [0.9922, 0.8588, 0.7804], [0.9912, 0.8631, 0.7878], [0.9903, 0.8674, 0.7952], [0.9894, 0.8717, 0.8025], [0.9885, 0.876, 0.8099], [0.9875, 0.8804, 0.8173], [0.9866, 0.8847, 0.8247], [0.9857, 0.889, 0.8321], [0.9848, 0.8933, 0.8394], [0.9839, 0.8976, 0.8468], [0.9829, 0.9019, 0.8542], [0.982, 0.9062, 0.8616], [0.9811, 0.9105, 0.869], [0.9802, 0.9148, 0.8764], [0.9792, 0.9191, 0.8837], [0.9783, 0.9234, 0.8911], [0.9774, 0.9277, 0.8985], [0.9765, 0.932, 0.9059], [0.9755, 0.9363, 0.9133], [0.9746, 0.9406, 0.9206], [0.9737, 0.9449, 0.928], [0.9728, 0.9493, 0.9354], [0.9719, 0.9536, 0.9428], [0.9709, 0.9579, 0.9502], [0.97, 0.9622, 0.9576], [0.9691, 0.9665, 0.9649], [0.9657, 0.9672, 0.9681], [0.9599, 0.9645, 0.967], [0.954, 0.9617, 0.9659], [0.9482, 0.9589, 0.9649], [0.9423, 0.9562, 0.9638], [0.9365, 0.9534, 0.9627], [0.9306, 0.9506, 0.9616], [0.9248, 0.9479, 0.9606], [0.919, 0.9451, 0.9595], [0.9131, 0.9423, 0.9584], [0.9073, 0.9396, 0.9573], [0.9014, 0.9368, 0.9562], [0.8956, 0.934, 0.9552], [0.8897, 0.9313, 0.9541], [0.8839, 0.9285, 0.953], [0.878, 0.9257, 0.9519], [0.8722, 0.923, 0.9509], [0.8664, 0.9202, 0.9498], [0.8605, 0.9174, 0.9487], [0.8547, 0.9146, 0.9476], [0.8488, 0.9119, 0.9466], [0.843, 0.9091, 0.9455], [0.8371, 0.9063, 0.9444], [0.8313, 0.9036, 0.9433], [0.8255, 0.9008, 0.9423], [0.8196, 0.898, 0.9412], [0.8099, 0.8931, 0.9384], [0.8002, 0.8882, 0.9356], [0.7905, 0.8833, 0.9329], [0.7809, 0.8784, 0.9301], [0.7712, 0.8734, 0.9273], [0.7615, 0.8685, 0.9246], [0.7518, 0.8636, 0.9218], [0.7421, 0.8587, 0.919], [0.7324, 0.8537, 0.9163], [0.7227, 0.8488, 0.9135], [0.713, 0.8439, 0.9107], [0.7033, 0.839, 0.908], [0.6937, 0.8341, 0.9052], [0.684, 0.8291, 0.9024], [0.6743, 0.8242, 0.8997], [0.6646, 0.8193, 0.8969], [0.6549, 0.8144, 0.8941], [0.6452, 0.8095, 0.8913], [0.6355, 0.8045, 0.8886], [0.6258, 0.7996, 0.8858], [0.6161, 0.7947, 0.883], [0.6065, 0.7898, 0.8803], [0.5968, 0.7849, 0.8775], [0.5871, 0.7799, 0.8747], [0.5774, 0.775, 0.872], [0.5665, 0.7687, 0.8685], [0.5543, 0.761, 0.8644], [0.5422, 0.7533, 0.8602], [0.53, 0.7456, 0.8561], [0.5179, 0.7379, 0.8519], [0.5057, 0.7303, 0.8478], [0.4936, 0.7226, 0.8436], [0.4814, 0.7149, 0.8394], [0.4693, 0.7072, 0.8353], [0.4571, 0.6995, 0.8311], [0.445, 0.6918, 0.827], [0.4328, 0.6841, 0.8228], [0.4207, 0.6764, 0.8187], [0.4085, 0.6687, 0.8145], [0.3964, 0.6611, 0.8104], [0.3842, 0.6534, 0.8062], [0.3721, 0.6457, 0.8021], [0.3599, 0.638, 0.7979], [0.3478, 0.6303, 0.7938], [0.3356, 0.6226, 0.7896], [0.3235, 0.6149, 0.7855], [0.3113, 0.6072, 0.7813], [0.2992, 0.5995, 0.7772], [0.287, 0.5918, 0.773], [0.2749, 0.5842, 0.7689], [0.2627, 0.5765, 0.7647], [0.2575, 0.5696, 0.7612], [0.2523, 0.5626, 0.7576], [0.2471, 0.5557, 0.7541], [0.2418, 0.5488, 0.7506], [0.2366, 0.5419, 0.747], [0.2314, 0.5349, 0.7435], [0.2261, 0.528, 0.7399], [0.2209, 0.5211, 0.7364], [0.2157, 0.5142, 0.7329], [0.2105, 0.5073, 0.7293], [0.2052, 0.5003, 0.7258], [0.2, 0.4934, 0.7223], [0.1948, 0.4865, 0.7187], [0.1895, 0.4796, 0.7152], [0.1843, 0.4727, 0.7116], [0.1791, 0.4657, 0.7081], [0.1739, 0.4588, 0.7046], [0.1686, 0.4519, 0.701], [0.1634, 0.445, 0.6975], [0.1582, 0.4381, 0.694], [0.1529, 0.4311, 0.6904], [0.1477, 0.4242, 0.6869], [0.1425, 0.4173, 0.6834], [0.1373, 0.4104, 0.6798], [0.132, 0.4035, 0.6763], [0.1273, 0.3958, 0.6687], [0.123, 0.3875, 0.6572], [0.1186, 0.3792, 0.6457], [0.1143, 0.3709, 0.6341], [0.11, 0.3626, 0.6226], [0.1057, 0.3543, 0.6111], [0.1014, 0.346, 0.5995], [0.0971, 0.3377, 0.588], [0.0928, 0.3294, 0.5765], [0.0885, 0.3211, 0.5649], [0.0842, 0.3128, 0.5534], [0.0799, 0.3045, 0.5419], [0.0756, 0.2962, 0.5303], [0.0713, 0.2879, 0.5188], [0.067, 0.2796, 0.5073], [0.0627, 0.2713, 0.4957], [0.0584, 0.263, 0.4842], [0.0541, 0.2547, 0.4727], [0.0498, 0.2464, 0.4611], [0.0454, 0.2381, 0.4496], [0.0411, 0.2298, 0.4381], [0.0368, 0.2215, 0.4265], [0.0325, 0.2131, 0.415], [0.0282, 0.2048, 0.4035], [0.0239, 0.1965, 0.3919], [0.0196, 0.1882, 0.3804]] }, "RdGy": { "interpolate": true, "colors": [[0.4039, 0.0, 0.1216], [0.4155, 0.0037, 0.1234], [0.427, 0.0074, 0.1253], [0.4385, 0.0111, 0.1271], [0.4501, 0.0148, 0.129], [0.4616, 0.0185, 0.1308], [0.4731, 0.0221, 0.1326], [0.4847, 0.0258, 0.1345], [0.4962, 0.0295, 0.1363], [0.5077, 0.0332, 0.1382], [0.5193, 0.0369, 0.14], [0.5308, 0.0406, 0.1419], [0.5423, 0.0443, 0.1437], [0.5539, 0.048, 0.1456], [0.5654, 0.0517, 0.1474], [0.5769, 0.0554, 0.1493], [0.5885, 0.0591, 0.1511], [0.6, 0.0627, 0.1529], [0.6115, 0.0664, 0.1548], [0.6231, 0.0701, 0.1566], [0.6346, 0.0738, 0.1585], [0.6461, 0.0775, 0.1603], [0.6577, 0.0812, 0.1622], [0.6692, 0.0849, 0.164], [0.6807, 0.0886, 0.1659], [0.6923, 0.0923, 0.1677], [0.7008, 0.0997, 0.1712], [0.7063, 0.1107, 0.1765], [0.7119, 0.1218, 0.1817], [0.7174, 0.1329, 0.1869], [0.723, 0.1439, 0.1922], [0.7285, 0.155, 0.1974], [0.734, 0.1661, 0.2026], [0.7396, 0.1772, 0.2078], [0.7451, 0.1882, 0.2131], [0.7506, 0.1993, 0.2183], [0.7562, 0.2104, 0.2235], [0.7617, 0.2215, 0.2288], [0.7672, 0.2325, 0.234], [0.7728, 0.2436, 0.2392], [0.7783, 0.2547, 0.2444], [0.7839, 0.2657, 0.2497], [0.7894, 0.2768, 0.2549], [0.7949, 0.2879, 0.2601], [0.8005, 0.299, 0.2654], [0.806, 0.31, 0.2706], [0.8115, 0.3211, 0.2758], [0.8171, 0.3322, 0.281], [0.8226, 0.3433, 0.2863], [0.8281, 0.3543, 0.2915], [0.8337, 0.3654, 0.2967], [0.8392, 0.3765, 0.302], [0.8438, 0.3871, 0.3101], [0.8484, 0.3977, 0.3183], [0.8531, 0.4083, 0.3264], [0.8577, 0.4189, 0.3346], [0.8623, 0.4295, 0.3427], [0.8669, 0.4401, 0.3509], [0.8715, 0.4507, 0.359], [0.8761, 0.4614, 0.3672], [0.8807, 0.472, 0.3753], [0.8854, 0.4826, 0.3835], [0.89, 0.4932, 0.3916], [0.8946, 0.5038, 0.3998], [0.8992, 0.5144, 0.4079], [0.9038, 0.525, 0.4161], [0.9084, 0.5356, 0.4242], [0.913, 0.5463, 0.4324], [0.9176, 0.5569, 0.4405], [0.9223, 0.5675, 0.4487], [0.9269, 0.5781, 0.4568], [0.9315, 0.5887, 0.465], [0.9361, 0.5993, 0.4731], [0.9407, 0.6099, 0.4813], [0.9453, 0.6205, 0.4894], [0.9499, 0.6311, 0.4976], [0.9546, 0.6418, 0.5057], [0.9576, 0.6512, 0.5151], [0.9589, 0.6595, 0.5257], [0.9603, 0.6678, 0.5363], [0.9617, 0.6761, 0.5469], [0.9631, 0.6844, 0.5576], [0.9645, 0.6927, 0.5682], [0.9659, 0.701, 0.5788], [0.9672, 0.7093, 0.5894], [0.9686, 0.7176, 0.6], [0.97, 0.726, 0.6106], [0.9714, 0.7343, 0.6212], [0.9728, 0.7426, 0.6318], [0.9742, 0.7509, 0.6424], [0.9755, 0.7592, 0.6531], [0.9769, 0.7675, 0.6637], [0.9783, 0.7758, 0.6743], [0.9797, 0.7841, 0.6849], [0.9811, 0.7924, 0.6955], [0.9825, 0.8007, 0.7061], [0.9839, 0.809, 0.7167], [0.9852, 0.8173, 0.7273], [0.9866, 0.8256, 0.7379], [0.988, 0.8339, 0.7486], [0.9894, 0.8422, 0.7592], [0.9908, 0.8505, 0.7698], [0.9922, 0.8588, 0.7804], [0.9925, 0.8644, 0.789], [0.9928, 0.8699, 0.7976], [0.9931, 0.8754, 0.8062], [0.9934, 0.881, 0.8148], [0.9937, 0.8865, 0.8235], [0.994, 0.892, 0.8321], [0.9943, 0.8976, 0.8407], [0.9946, 0.9031, 0.8493], [0.9949, 0.9087, 0.8579], [0.9952, 0.9142, 0.8665], [0.9955, 0.9197, 0.8751], [0.9958, 0.9253, 0.8837], [0.9962, 0.9308, 0.8923], [0.9965, 0.9363, 0.901], [0.9968, 0.9419, 0.9096], [0.9971, 0.9474, 0.9182], [0.9974, 0.9529, 0.9268], [0.9977, 0.9585, 0.9354], [0.998, 0.964, 0.944], [0.9983, 0.9696, 0.9526], [0.9986, 0.9751, 0.9612], [0.9989, 0.9806, 0.9699], [0.9992, 0.9862, 0.9785], [0.9995, 0.9917, 0.9871], [0.9998, 0.9972, 0.9957], [0.9976, 0.9976, 0.9976], [0.9928, 0.9928, 0.9928], [0.9881, 0.9881, 0.9881], [0.9833, 0.9833, 0.9833], [0.9785, 0.9785, 0.9785], [0.9738, 0.9738, 0.9738], [0.969, 0.969, 0.969], [0.9642, 0.9642, 0.9642], [0.9595, 0.9595, 0.9595], [0.9547, 0.9547, 0.9547], [0.9499, 0.9499, 0.9499], [0.9452, 0.9452, 0.9452], [0.9404, 0.9404, 0.9404], [0.9356, 0.9356, 0.9356], [0.9309, 0.9309, 0.9309], [0.9261, 0.9261, 0.9261], [0.9213, 0.9213, 0.9213], [0.9166, 0.9166, 0.9166], [0.9118, 0.9118, 0.9118], [0.907, 0.907, 0.907], [0.9023, 0.9023, 0.9023], [0.8975, 0.8975, 0.8975], [0.8927, 0.8927, 0.8927], [0.888, 0.888, 0.888], [0.8832, 0.8832, 0.8832], [0.8784, 0.8784, 0.8784], [0.8726, 0.8726, 0.8726], [0.8667, 0.8667, 0.8667], [0.8609, 0.8609, 0.8609], [0.8551, 0.8551, 0.8551], [0.8492, 0.8492, 0.8492], [0.8434, 0.8434, 0.8434], [0.8375, 0.8375, 0.8375], [0.8317, 0.8317, 0.8317], [0.8258, 0.8258, 0.8258], [0.82, 0.82, 0.82], [0.8141, 0.8141, 0.8141], [0.8083, 0.8083, 0.8083], [0.8025, 0.8025, 0.8025], [0.7966, 0.7966, 0.7966], [0.7908, 0.7908, 0.7908], [0.7849, 0.7849, 0.7849], [0.7791, 0.7791, 0.7791], [0.7732, 0.7732, 0.7732], [0.7674, 0.7674, 0.7674], [0.7616, 0.7616, 0.7616], [0.7557, 0.7557, 0.7557], [0.7499, 0.7499, 0.7499], [0.744, 0.744, 0.744], [0.7382, 0.7382, 0.7382], [0.7323, 0.7323, 0.7323], [0.7255, 0.7255, 0.7255], [0.7176, 0.7176, 0.7176], [0.7098, 0.7098, 0.7098], [0.702, 0.702, 0.702], [0.6941, 0.6941, 0.6941], [0.6863, 0.6863, 0.6863], [0.6784, 0.6784, 0.6784], [0.6706, 0.6706, 0.6706], [0.6627, 0.6627, 0.6627], [0.6549, 0.6549, 0.6549], [0.6471, 0.6471, 0.6471], [0.6392, 0.6392, 0.6392], [0.6314, 0.6314, 0.6314], [0.6235, 0.6235, 0.6235], [0.6157, 0.6157, 0.6157], [0.6078, 0.6078, 0.6078], [0.6, 0.6, 0.6], [0.5922, 0.5922, 0.5922], [0.5843, 0.5843, 0.5843], [0.5765, 0.5765, 0.5765], [0.5686, 0.5686, 0.5686], [0.5608, 0.5608, 0.5608], [0.5529, 0.5529, 0.5529], [0.5451, 0.5451, 0.5451], [0.5373, 0.5373, 0.5373], [0.5294, 0.5294, 0.5294], [0.5205, 0.5205, 0.5205], [0.5116, 0.5116, 0.5116], [0.5027, 0.5027, 0.5027], [0.4937, 0.4937, 0.4937], [0.4848, 0.4848, 0.4848], [0.4759, 0.4759, 0.4759], [0.467, 0.467, 0.467], [0.4581, 0.4581, 0.4581], [0.4491, 0.4491, 0.4491], [0.4402, 0.4402, 0.4402], [0.4313, 0.4313, 0.4313], [0.4224, 0.4224, 0.4224], [0.4135, 0.4135, 0.4135], [0.4045, 0.4045, 0.4045], [0.3956, 0.3956, 0.3956], [0.3867, 0.3867, 0.3867], [0.3778, 0.3778, 0.3778], [0.3689, 0.3689, 0.3689], [0.3599, 0.3599, 0.3599], [0.351, 0.351, 0.351], [0.3421, 0.3421, 0.3421], [0.3332, 0.3332, 0.3332], [0.3243, 0.3243, 0.3243], [0.3153, 0.3153, 0.3153], [0.3064, 0.3064, 0.3064], [0.298, 0.298, 0.298], [0.2902, 0.2902, 0.2902], [0.2824, 0.2824, 0.2824], [0.2745, 0.2745, 0.2745], [0.2667, 0.2667, 0.2667], [0.2588, 0.2588, 0.2588], [0.251, 0.251, 0.251], [0.2431, 0.2431, 0.2431], [0.2353, 0.2353, 0.2353], [0.2275, 0.2275, 0.2275], [0.2196, 0.2196, 0.2196], [0.2118, 0.2118, 0.2118], [0.2039, 0.2039, 0.2039], [0.1961, 0.1961, 0.1961], [0.1882, 0.1882, 0.1882], [0.1804, 0.1804, 0.1804], [0.1725, 0.1725, 0.1725], [0.1647, 0.1647, 0.1647], [0.1569, 0.1569, 0.1569], [0.149, 0.149, 0.149], [0.1412, 0.1412, 0.1412], [0.1333, 0.1333, 0.1333], [0.1255, 0.1255, 0.1255], [0.1176, 0.1176, 0.1176], [0.1098, 0.1098, 0.1098], [0.102, 0.102, 0.102]] }, "RdPu": { "interpolate": true, "colors": [[1.0, 0.9686, 0.9529], [0.9998, 0.9658, 0.9502], [0.9995, 0.963, 0.9475], [0.9993, 0.9601, 0.9448], [0.999, 0.9573, 0.9421], [0.9988, 0.9545, 0.9394], [0.9985, 0.9516, 0.9367], [0.9983, 0.9488, 0.934], [0.998, 0.946, 0.9313], [0.9978, 0.9432, 0.9286], [0.9975, 0.9403, 0.9259], [0.9973, 0.9375, 0.9232], [0.997, 0.9347, 0.9205], [0.9968, 0.9318, 0.9178], [0.9966, 0.929, 0.915], [0.9963, 0.9262, 0.9123], [0.9961, 0.9234, 0.9096], [0.9958, 0.9205, 0.9069], [0.9956, 0.9177, 0.9042], [0.9953, 0.9149, 0.9015], [0.9951, 0.912, 0.8988], [0.9948, 0.9092, 0.8961], [0.9946, 0.9064, 0.8934], [0.9943, 0.9035, 0.8907], [0.9941, 0.9007, 0.888], [0.9938, 0.8979, 0.8853], [0.9936, 0.8951, 0.8826], [0.9934, 0.8922, 0.8799], [0.9931, 0.8894, 0.8772], [0.9929, 0.8866, 0.8744], [0.9926, 0.8837, 0.8717], [0.9924, 0.8809, 0.869], [0.9921, 0.878, 0.8662], [0.992, 0.8747, 0.8627], [0.9919, 0.8714, 0.8591], [0.9918, 0.8681, 0.8555], [0.9916, 0.8647, 0.8519], [0.9915, 0.8614, 0.8484], [0.9914, 0.8581, 0.8448], [0.9913, 0.8548, 0.8412], [0.9912, 0.8514, 0.8377], [0.991, 0.8481, 0.8341], [0.9909, 0.8448, 0.8305], [0.9908, 0.8415, 0.827], [0.9907, 0.8382, 0.8234], [0.9905, 0.8348, 0.8198], [0.9904, 0.8315, 0.8163], [0.9903, 0.8282, 0.8127], [0.9902, 0.8249, 0.8091], [0.99, 0.8215, 0.8056], [0.9899, 0.8182, 0.802], [0.9898, 0.8149, 0.7984], [0.9897, 0.8116, 0.7949], [0.9896, 0.8083, 0.7913], [0.9894, 0.8049, 0.7877], [0.9893, 0.8016, 0.7842], [0.9892, 0.7983, 0.7806], [0.9891, 0.795, 0.777], [0.9889, 0.7916, 0.7735], [0.9888, 0.7883, 0.7699], [0.9887, 0.785, 0.7663], [0.9886, 0.7817, 0.7628], [0.9885, 0.7784, 0.7592], [0.9883, 0.775, 0.7556], [0.9882, 0.7714, 0.7526], [0.9879, 0.7667, 0.7512], [0.9877, 0.762, 0.7499], [0.9874, 0.7574, 0.7485], [0.9872, 0.7527, 0.7472], [0.9869, 0.748, 0.7458], [0.9867, 0.7433, 0.7445], [0.9865, 0.7387, 0.7431], [0.9862, 0.734, 0.7418], [0.986, 0.7293, 0.7404], [0.9857, 0.7246, 0.7391], [0.9855, 0.72, 0.7377], [0.9852, 0.7153, 0.7364], [0.985, 0.7106, 0.735], [0.9847, 0.7059, 0.7337], [0.9845, 0.7013, 0.7323], [0.9842, 0.6966, 0.7309], [0.984, 0.6919, 0.7296], [0.9837, 0.6872, 0.7282], [0.9835, 0.6826, 0.7269], [0.9833, 0.6779, 0.7255], [0.983, 0.6732, 0.7242], [0.9828, 0.6685, 0.7228], [0.9825, 0.6639, 0.7215], [0.9823, 0.6592, 0.7201], [0.982, 0.6545, 0.7188], [0.9818, 0.6498, 0.7174], [0.9815, 0.6452, 0.7161], [0.9813, 0.6405, 0.7147], [0.981, 0.6358, 0.7134], [0.9808, 0.6311, 0.712], [0.9805, 0.6265, 0.7106], [0.9803, 0.621, 0.7089], [0.9799, 0.6142, 0.7064], [0.9795, 0.6075, 0.704], [0.9791, 0.6007, 0.7015], [0.9788, 0.5939, 0.699], [0.9784, 0.5872, 0.6966], [0.978, 0.5804, 0.6941], [0.9777, 0.5736, 0.6917], [0.9773, 0.5669, 0.6892], [0.9769, 0.5601, 0.6867], [0.9766, 0.5533, 0.6843], [0.9762, 0.5466, 0.6818], [0.9758, 0.5398, 0.6794], [0.9755, 0.533, 0.6769], [0.9751, 0.5263, 0.6744], [0.9747, 0.5195, 0.672], [0.9743, 0.5127, 0.6695], [0.974, 0.506, 0.6671], [0.9736, 0.4992, 0.6646], [0.9732, 0.4924, 0.6621], [0.9729, 0.4857, 0.6597], [0.9725, 0.4789, 0.6572], [0.9721, 0.4721, 0.6547], [0.9718, 0.4654, 0.6523], [0.9714, 0.4586, 0.6498], [0.971, 0.4518, 0.6474], [0.9707, 0.4451, 0.6449], [0.9703, 0.4383, 0.6424], [0.9699, 0.4315, 0.64], [0.9696, 0.4248, 0.6375], [0.9692, 0.418, 0.6351], [0.9688, 0.4112, 0.6326], [0.967, 0.4046, 0.6308], [0.9638, 0.3982, 0.6295], [0.9606, 0.3918, 0.6283], [0.9574, 0.3855, 0.6271], [0.9542, 0.3791, 0.6258], [0.951, 0.3727, 0.6246], [0.9478, 0.3663, 0.6234], [0.9446, 0.3599, 0.6221], [0.9414, 0.3535, 0.6209], [0.9382, 0.3471, 0.6197], [0.935, 0.3407, 0.6185], [0.9318, 0.3343, 0.6172], [0.9286, 0.3279, 0.616], [0.9254, 0.3215, 0.6148], [0.9222, 0.3151, 0.6135], [0.919, 0.3087, 0.6123], [0.9158, 0.3023, 0.6111], [0.9126, 0.2959, 0.6098], [0.9095, 0.2895, 0.6086], [0.9063, 0.2831, 0.6074], [0.9031, 0.2767, 0.6062], [0.8999, 0.2703, 0.6049], [0.8967, 0.2639, 0.6037], [0.8935, 0.2575, 0.6025], [0.8903, 0.2511, 0.6012], [0.8871, 0.2447, 0.6], [0.8839, 0.2383, 0.5988], [0.8807, 0.2319, 0.5975], [0.8775, 0.2255, 0.5963], [0.8743, 0.2191, 0.5951], [0.8711, 0.2127, 0.5938], [0.8679, 0.2063, 0.5926], [0.8631, 0.2, 0.5902], [0.8573, 0.1937, 0.5872], [0.8515, 0.1875, 0.5841], [0.8457, 0.1812, 0.581], [0.8399, 0.1749, 0.5779], [0.8341, 0.1686, 0.5749], [0.8284, 0.1624, 0.5718], [0.8226, 0.1561, 0.5687], [0.8168, 0.1498, 0.5656], [0.811, 0.1435, 0.5626], [0.8052, 0.1373, 0.5595], [0.7994, 0.131, 0.5564], [0.7937, 0.1247, 0.5533], [0.7879, 0.1184, 0.5502], [0.7821, 0.1122, 0.5472], [0.7763, 0.1059, 0.5441], [0.7705, 0.0996, 0.541], [0.7648, 0.0933, 0.5379], [0.759, 0.0871, 0.5349], [0.7532, 0.0808, 0.5318], [0.7474, 0.0745, 0.5287], [0.7416, 0.0682, 0.5256], [0.7358, 0.062, 0.5226], [0.7301, 0.0557, 0.5195], [0.7243, 0.0494, 0.5164], [0.7185, 0.0431, 0.5133], [0.7127, 0.0369, 0.5103], [0.7069, 0.0306, 0.5072], [0.7011, 0.0243, 0.5041], [0.6954, 0.018, 0.501], [0.6896, 0.0118, 0.498], [0.6838, 0.0055, 0.4949], [0.6776, 0.0039, 0.4935], [0.6712, 0.0039, 0.4926], [0.6648, 0.0039, 0.4917], [0.6584, 0.0039, 0.4909], [0.652, 0.0039, 0.49], [0.6456, 0.0039, 0.4892], [0.6392, 0.0039, 0.4883], [0.6328, 0.0039, 0.4874], [0.6264, 0.0039, 0.4866], [0.62, 0.0039, 0.4857], [0.6136, 0.0039, 0.4849], [0.6072, 0.0039, 0.484], [0.6008, 0.0039, 0.4831], [0.5944, 0.0039, 0.4823], [0.588, 0.0039, 0.4814], [0.5816, 0.0039, 0.4806], [0.5752, 0.0039, 0.4797], [0.5688, 0.0039, 0.4788], [0.5624, 0.0039, 0.478], [0.556, 0.0039, 0.4771], [0.5496, 0.0039, 0.4762], [0.5432, 0.0039, 0.4754], [0.5368, 0.0039, 0.4745], [0.5304, 0.0039, 0.4737], [0.524, 0.0039, 0.4728], [0.5176, 0.0039, 0.4719], [0.5112, 0.0039, 0.4711], [0.5048, 0.0039, 0.4702], [0.4984, 0.0039, 0.4694], [0.492, 0.0039, 0.4685], [0.4856, 0.0039, 0.4676], [0.4792, 0.0039, 0.4668], [0.4732, 0.0038, 0.4653], [0.4671, 0.0037, 0.4637], [0.4611, 0.0036, 0.4621], [0.4551, 0.0034, 0.4605], [0.449, 0.0033, 0.4589], [0.443, 0.0032, 0.4573], [0.437, 0.0031, 0.4557], [0.431, 0.003, 0.4541], [0.4249, 0.0028, 0.4525], [0.4189, 0.0027, 0.4509], [0.4129, 0.0026, 0.4493], [0.4068, 0.0025, 0.4477], [0.4008, 0.0023, 0.4461], [0.3948, 0.0022, 0.4445], [0.3888, 0.0021, 0.4429], [0.3827, 0.002, 0.4413], [0.3767, 0.0018, 0.4397], [0.3707, 0.0017, 0.4381], [0.3646, 0.0016, 0.4365], [0.3586, 0.0015, 0.4349], [0.3526, 0.0014, 0.4333], [0.3466, 0.0012, 0.4317], [0.3405, 0.0011, 0.4301], [0.3345, 0.001, 0.4285], [0.3285, 0.0009, 0.4269], [0.3224, 0.0007, 0.4253], [0.3164, 0.0006, 0.4237], [0.3104, 0.0005, 0.4221], [0.3044, 0.0004, 0.4205], [0.2983, 0.0002, 0.4189], [0.2923, 0.0001, 0.4173], [0.2863, 0.0, 0.4157]] }, "RdYlBu": { "interpolate": true, "colors": [[0.6471, 0.0, 0.149], [0.6547, 0.0074, 0.1492], [0.6624, 0.0148, 0.1493], [0.6701, 0.0221, 0.1495], [0.6778, 0.0295, 0.1496], [0.6855, 0.0369, 0.1498], [0.6932, 0.0443, 0.1499], [0.7009, 0.0517, 0.1501], [0.7086, 0.0591, 0.1502], [0.7163, 0.0664, 0.1504], [0.724, 0.0738, 0.1506], [0.7316, 0.0812, 0.1507], [0.7393, 0.0886, 0.1509], [0.747, 0.096, 0.151], [0.7547, 0.1033, 0.1512], [0.7624, 0.1107, 0.1513], [0.7701, 0.1181, 0.1515], [0.7778, 0.1255, 0.1516], [0.7855, 0.1329, 0.1518], [0.7932, 0.1403, 0.1519], [0.8008, 0.1476, 0.1521], [0.8085, 0.155, 0.1522], [0.8162, 0.1624, 0.1524], [0.8239, 0.1698, 0.1526], [0.8316, 0.1772, 0.1527], [0.8393, 0.1845, 0.1529], [0.8454, 0.1929, 0.1551], [0.8498, 0.2023, 0.1594], [0.8543, 0.2117, 0.1637], [0.8587, 0.2211, 0.168], [0.8632, 0.2304, 0.1723], [0.8677, 0.2398, 0.1766], [0.8721, 0.2492, 0.1809], [0.8766, 0.2586, 0.1852], [0.881, 0.268, 0.1895], [0.8855, 0.2774, 0.1938], [0.89, 0.2867, 0.1982], [0.8944, 0.2961, 0.2025], [0.8989, 0.3055, 0.2068], [0.9033, 0.3149, 0.2111], [0.9078, 0.3243, 0.2154], [0.9123, 0.3336, 0.2197], [0.9167, 0.343, 0.224], [0.9212, 0.3524, 0.2283], [0.9256, 0.3618, 0.2326], [0.9301, 0.3712, 0.2369], [0.9346, 0.3805, 0.2412], [0.939, 0.3899, 0.2455], [0.9435, 0.3993, 0.2498], [0.9479, 0.4087, 0.2541], [0.9524, 0.4181, 0.2584], [0.9569, 0.4275, 0.2627], [0.9582, 0.4374, 0.2674], [0.9596, 0.4474, 0.272], [0.961, 0.4574, 0.2766], [0.9624, 0.4674, 0.2812], [0.9638, 0.4774, 0.2858], [0.9652, 0.4874, 0.2904], [0.9666, 0.4974, 0.295], [0.9679, 0.5074, 0.2997], [0.9693, 0.5174, 0.3043], [0.9707, 0.5274, 0.3089], [0.9721, 0.5374, 0.3135], [0.9735, 0.5474, 0.3181], [0.9749, 0.5574, 0.3227], [0.9762, 0.5674, 0.3273], [0.9776, 0.5774, 0.3319], [0.979, 0.5874, 0.3366], [0.9804, 0.5974, 0.3412], [0.9818, 0.6074, 0.3458], [0.9832, 0.6174, 0.3504], [0.9845, 0.6274, 0.355], [0.9859, 0.6374, 0.3596], [0.9873, 0.6474, 0.3642], [0.9887, 0.6574, 0.3689], [0.9901, 0.6674, 0.3735], [0.9915, 0.6774, 0.3781], [0.9922, 0.6862, 0.384], [0.9924, 0.6939, 0.3912], [0.9925, 0.7016, 0.3985], [0.9927, 0.7093, 0.4057], [0.9928, 0.717, 0.4129], [0.993, 0.7246, 0.4201], [0.9932, 0.7323, 0.4274], [0.9933, 0.74, 0.4346], [0.9935, 0.7477, 0.4418], [0.9936, 0.7554, 0.4491], [0.9938, 0.7631, 0.4563], [0.9939, 0.7708, 0.4635], [0.9941, 0.7785, 0.4707], [0.9942, 0.7862, 0.478], [0.9944, 0.7938, 0.4852], [0.9945, 0.8015, 0.4924], [0.9947, 0.8092, 0.4997], [0.9948, 0.8169, 0.5069], [0.995, 0.8246, 0.5141], [0.9952, 0.8323, 0.5213], [0.9953, 0.84, 0.5286], [0.9955, 0.8477, 0.5358], [0.9956, 0.8554, 0.543], [0.9958, 0.8631, 0.5502], [0.9959, 0.8707, 0.5575], [0.9961, 0.8784, 0.5647], [0.9962, 0.8832, 0.5719], [0.9964, 0.888, 0.5792], [0.9965, 0.8927, 0.5864], [0.9967, 0.8975, 0.5936], [0.9968, 0.9023, 0.6008], [0.997, 0.907, 0.6081], [0.9972, 0.9118, 0.6153], [0.9973, 0.9166, 0.6225], [0.9975, 0.9213, 0.6298], [0.9976, 0.9261, 0.637], [0.9978, 0.9309, 0.6442], [0.9979, 0.9356, 0.6514], [0.9981, 0.9404, 0.6587], [0.9982, 0.9452, 0.6659], [0.9984, 0.9499, 0.6731], [0.9985, 0.9547, 0.6804], [0.9987, 0.9595, 0.6876], [0.9988, 0.9642, 0.6948], [0.999, 0.969, 0.702], [0.9992, 0.9738, 0.7093], [0.9993, 0.9785, 0.7165], [0.9995, 0.9833, 0.7237], [0.9996, 0.9881, 0.7309], [0.9998, 0.9928, 0.7382], [0.9999, 0.9976, 0.7454], [0.9976, 0.9991, 0.7534], [0.9928, 0.9972, 0.7622], [0.9881, 0.9954, 0.7709], [0.9833, 0.9935, 0.7797], [0.9785, 0.9917, 0.7885], [0.9738, 0.9899, 0.7972], [0.969, 0.988, 0.806], [0.9642, 0.9862, 0.8148], [0.9595, 0.9843, 0.8235], [0.9547, 0.9825, 0.8323], [0.9499, 0.9806, 0.8411], [0.9452, 0.9788, 0.8498], [0.9404, 0.9769, 0.8586], [0.9356, 0.9751, 0.8674], [0.9309, 0.9732, 0.8761], [0.9261, 0.9714, 0.8849], [0.9213, 0.9696, 0.8937], [0.9166, 0.9677, 0.9024], [0.9118, 0.9659, 0.9112], [0.907, 0.964, 0.92], [0.9023, 0.9622, 0.9287], [0.8975, 0.9603, 0.9375], [0.8927, 0.9585, 0.9463], [0.888, 0.9566, 0.955], [0.8832, 0.9548, 0.9638], [0.8784, 0.9529, 0.9725], [0.8703, 0.9489, 0.9702], [0.8621, 0.9449, 0.9679], [0.854, 0.9409, 0.9656], [0.8458, 0.9369, 0.9633], [0.8377, 0.9329, 0.961], [0.8295, 0.929, 0.9587], [0.8214, 0.925, 0.9564], [0.8132, 0.921, 0.9541], [0.8051, 0.917, 0.9518], [0.7969, 0.913, 0.9495], [0.7888, 0.909, 0.9472], [0.7806, 0.905, 0.9449], [0.7725, 0.901, 0.9426], [0.7643, 0.897, 0.9403], [0.7562, 0.893, 0.9379], [0.748, 0.889, 0.9356], [0.7399, 0.885, 0.9333], [0.7317, 0.881, 0.931], [0.7236, 0.877, 0.9287], [0.7154, 0.873, 0.9264], [0.7073, 0.869, 0.9241], [0.6991, 0.865, 0.9218], [0.691, 0.861, 0.9195], [0.6828, 0.857, 0.9172], [0.6747, 0.853, 0.9149], [0.6664, 0.8476, 0.9119], [0.6579, 0.8408, 0.9082], [0.6494, 0.8341, 0.9045], [0.641, 0.8273, 0.9008], [0.6325, 0.8205, 0.8971], [0.6241, 0.8138, 0.8934], [0.6156, 0.807, 0.8897], [0.6072, 0.8002, 0.886], [0.5987, 0.7935, 0.8824], [0.5902, 0.7867, 0.8787], [0.5818, 0.7799, 0.875], [0.5733, 0.7732, 0.8713], [0.5649, 0.7664, 0.8676], [0.5564, 0.7596, 0.8639], [0.5479, 0.7529, 0.8602], [0.5395, 0.7461, 0.8565], [0.531, 0.7393, 0.8528], [0.5226, 0.7326, 0.8491], [0.5141, 0.7258, 0.8454], [0.5057, 0.719, 0.8418], [0.4972, 0.7123, 0.8381], [0.4887, 0.7055, 0.8344], [0.4803, 0.6987, 0.8307], [0.4718, 0.692, 0.827], [0.4634, 0.6852, 0.8233], [0.4549, 0.6784, 0.8196], [0.4477, 0.6698, 0.8151], [0.4404, 0.6612, 0.8107], [0.4332, 0.6526, 0.8062], [0.426, 0.644, 0.8018], [0.4188, 0.6354, 0.7973], [0.4115, 0.6268, 0.7928], [0.4043, 0.6181, 0.7884], [0.3971, 0.6095, 0.7839], [0.3899, 0.6009, 0.7795], [0.3826, 0.5923, 0.775], [0.3754, 0.5837, 0.7705], [0.3682, 0.5751, 0.7661], [0.3609, 0.5665, 0.7616], [0.3537, 0.5579, 0.7572], [0.3465, 0.5493, 0.7527], [0.3393, 0.5406, 0.7483], [0.332, 0.532, 0.7438], [0.3248, 0.5234, 0.7393], [0.3176, 0.5148, 0.7349], [0.3103, 0.5062, 0.7304], [0.3031, 0.4976, 0.726], [0.2959, 0.489, 0.7215], [0.2887, 0.4804, 0.717], [0.2814, 0.4717, 0.7126], [0.2742, 0.4631, 0.7081], [0.2691, 0.454, 0.7035], [0.266, 0.4443, 0.6987], [0.2629, 0.4346, 0.694], [0.2598, 0.4249, 0.6892], [0.2567, 0.4152, 0.6844], [0.2537, 0.4055, 0.6797], [0.2506, 0.3958, 0.6749], [0.2475, 0.3862, 0.6701], [0.2444, 0.3765, 0.6654], [0.2414, 0.3668, 0.6606], [0.2383, 0.3571, 0.6558], [0.2352, 0.3474, 0.6511], [0.2321, 0.3377, 0.6463], [0.2291, 0.328, 0.6415], [0.226, 0.3183, 0.6368], [0.2229, 0.3087, 0.632], [0.2198, 0.299, 0.6272], [0.2168, 0.2893, 0.6225], [0.2137, 0.2796, 0.6177], [0.2106, 0.2699, 0.6129], [0.2075, 0.2602, 0.6082], [0.2045, 0.2505, 0.6034], [0.2014, 0.2408, 0.5986], [0.1983, 0.2311, 0.5938], [0.1952, 0.2215, 0.5891], [0.1922, 0.2118, 0.5843]] }, "RdYlGn": { "interpolate": true, "colors": [[0.6471, 0.0, 0.149], [0.6547, 0.0074, 0.1492], [0.6624, 0.0148, 0.1493], [0.6701, 0.0221, 0.1495], [0.6778, 0.0295, 0.1496], [0.6855, 0.0369, 0.1498], [0.6932, 0.0443, 0.1499], [0.7009, 0.0517, 0.1501], [0.7086, 0.0591, 0.1502], [0.7163, 0.0664, 0.1504], [0.724, 0.0738, 0.1506], [0.7316, 0.0812, 0.1507], [0.7393, 0.0886, 0.1509], [0.747, 0.096, 0.151], [0.7547, 0.1033, 0.1512], [0.7624, 0.1107, 0.1513], [0.7701, 0.1181, 0.1515], [0.7778, 0.1255, 0.1516], [0.7855, 0.1329, 0.1518], [0.7932, 0.1403, 0.1519], [0.8008, 0.1476, 0.1521], [0.8085, 0.155, 0.1522], [0.8162, 0.1624, 0.1524], [0.8239, 0.1698, 0.1526], [0.8316, 0.1772, 0.1527], [0.8393, 0.1845, 0.1529], [0.8454, 0.1929, 0.1551], [0.8498, 0.2023, 0.1594], [0.8543, 0.2117, 0.1637], [0.8587, 0.2211, 0.168], [0.8632, 0.2304, 0.1723], [0.8677, 0.2398, 0.1766], [0.8721, 0.2492, 0.1809], [0.8766, 0.2586, 0.1852], [0.881, 0.268, 0.1895], [0.8855, 0.2774, 0.1938], [0.89, 0.2867, 0.1982], [0.8944, 0.2961, 0.2025], [0.8989, 0.3055, 0.2068], [0.9033, 0.3149, 0.2111], [0.9078, 0.3243, 0.2154], [0.9123, 0.3336, 0.2197], [0.9167, 0.343, 0.224], [0.9212, 0.3524, 0.2283], [0.9256, 0.3618, 0.2326], [0.9301, 0.3712, 0.2369], [0.9346, 0.3805, 0.2412], [0.939, 0.3899, 0.2455], [0.9435, 0.3993, 0.2498], [0.9479, 0.4087, 0.2541], [0.9524, 0.4181, 0.2584], [0.9569, 0.4275, 0.2627], [0.9582, 0.4374, 0.2674], [0.9596, 0.4474, 0.272], [0.961, 0.4574, 0.2766], [0.9624, 0.4674, 0.2812], [0.9638, 0.4774, 0.2858], [0.9652, 0.4874, 0.2904], [0.9666, 0.4974, 0.295], [0.9679, 0.5074, 0.2997], [0.9693, 0.5174, 0.3043], [0.9707, 0.5274, 0.3089], [0.9721, 0.5374, 0.3135], [0.9735, 0.5474, 0.3181], [0.9749, 0.5574, 0.3227], [0.9762, 0.5674, 0.3273], [0.9776, 0.5774, 0.3319], [0.979, 0.5874, 0.3366], [0.9804, 0.5974, 0.3412], [0.9818, 0.6074, 0.3458], [0.9832, 0.6174, 0.3504], [0.9845, 0.6274, 0.355], [0.9859, 0.6374, 0.3596], [0.9873, 0.6474, 0.3642], [0.9887, 0.6574, 0.3689], [0.9901, 0.6674, 0.3735], [0.9915, 0.6774, 0.3781], [0.9922, 0.6862, 0.3836], [0.9924, 0.6939, 0.3901], [0.9925, 0.7016, 0.3965], [0.9927, 0.7093, 0.403], [0.9928, 0.717, 0.4095], [0.993, 0.7246, 0.4159], [0.9932, 0.7323, 0.4224], [0.9933, 0.74, 0.4288], [0.9935, 0.7477, 0.4353], [0.9936, 0.7554, 0.4418], [0.9938, 0.7631, 0.4482], [0.9939, 0.7708, 0.4547], [0.9941, 0.7785, 0.4611], [0.9942, 0.7862, 0.4676], [0.9944, 0.7938, 0.474], [0.9945, 0.8015, 0.4805], [0.9947, 0.8092, 0.487], [0.9948, 0.8169, 0.4934], [0.995, 0.8246, 0.4999], [0.9952, 0.8323, 0.5063], [0.9953, 0.84, 0.5128], [0.9955, 0.8477, 0.5193], [0.9956, 0.8554, 0.5257], [0.9958, 0.8631, 0.5322], [0.9959, 0.8707, 0.5386], [0.9961, 0.8784, 0.5451], [0.9962, 0.8832, 0.5531], [0.9964, 0.888, 0.5611], [0.9965, 0.8927, 0.5691], [0.9967, 0.8975, 0.5771], [0.9968, 0.9023, 0.5851], [0.997, 0.907, 0.5931], [0.9972, 0.9118, 0.6011], [0.9973, 0.9166, 0.6091], [0.9975, 0.9213, 0.6171], [0.9976, 0.9261, 0.6251], [0.9978, 0.9309, 0.6331], [0.9979, 0.9356, 0.6411], [0.9981, 0.9404, 0.6491], [0.9982, 0.9452, 0.6571], [0.9984, 0.9499, 0.6651], [0.9985, 0.9547, 0.673], [0.9987, 0.9595, 0.681], [0.9988, 0.9642, 0.689], [0.999, 0.969, 0.697], [0.9992, 0.9738, 0.705], [0.9993, 0.9785, 0.713], [0.9995, 0.9833, 0.721], [0.9996, 0.9881, 0.729], [0.9998, 0.9928, 0.737], [0.9999, 0.9976, 0.745], [0.9971, 0.9988, 0.745], [0.9912, 0.9963, 0.737], [0.9854, 0.9938, 0.729], [0.9795, 0.9914, 0.721], [0.9737, 0.9889, 0.713], [0.9679, 0.9865, 0.705], [0.962, 0.984, 0.697], [0.9562, 0.9815, 0.689], [0.9503, 0.9791, 0.681], [0.9445, 0.9766, 0.673], [0.9386, 0.9742, 0.6651], [0.9328, 0.9717, 0.6571], [0.927, 0.9692, 0.6491], [0.9211, 0.9668, 0.6411], [0.9153, 0.9643, 0.6331], [0.9094, 0.9619, 0.6251], [0.9036, 0.9594, 0.6171], [0.8977, 0.9569, 0.6091], [0.8919, 0.9545, 0.6011], [0.886, 0.952, 0.5931], [0.8802, 0.9496, 0.5851], [0.8744, 0.9471, 0.5771], [0.8685, 0.9446, 0.5691], [0.8627, 0.9422, 0.5611], [0.8568, 0.9397, 0.5531], [0.851, 0.9373, 0.5451], [0.8431, 0.9339, 0.54], [0.8353, 0.9305, 0.5349], [0.8275, 0.9271, 0.5299], [0.8196, 0.9237, 0.5248], [0.8118, 0.9203, 0.5197], [0.8039, 0.917, 0.5146], [0.7961, 0.9136, 0.5096], [0.7882, 0.9102, 0.5045], [0.7804, 0.9068, 0.4994], [0.7725, 0.9034, 0.4943], [0.7647, 0.9, 0.4893], [0.7569, 0.8967, 0.4842], [0.749, 0.8933, 0.4791], [0.7412, 0.8899, 0.474], [0.7333, 0.8865, 0.469], [0.7255, 0.8831, 0.4639], [0.7176, 0.8797, 0.4588], [0.7098, 0.8764, 0.4537], [0.702, 0.873, 0.4487], [0.6941, 0.8696, 0.4436], [0.6863, 0.8662, 0.4385], [0.6784, 0.8628, 0.4334], [0.6706, 0.8594, 0.4284], [0.6627, 0.8561, 0.4233], [0.6549, 0.8527, 0.4182], [0.6461, 0.8488, 0.4151], [0.6362, 0.8445, 0.4141], [0.6264, 0.8402, 0.413], [0.6165, 0.8359, 0.4119], [0.6067, 0.8316, 0.4108], [0.5968, 0.8273, 0.4098], [0.587, 0.823, 0.4087], [0.5772, 0.8187, 0.4076], [0.5673, 0.8144, 0.4065], [0.5575, 0.8101, 0.4055], [0.5476, 0.8058, 0.4044], [0.5378, 0.8015, 0.4033], [0.528, 0.7972, 0.4022], [0.5181, 0.7928, 0.4012], [0.5083, 0.7885, 0.4001], [0.4984, 0.7842, 0.399], [0.4886, 0.7799, 0.3979], [0.4787, 0.7756, 0.3968], [0.4689, 0.7713, 0.3958], [0.4591, 0.767, 0.3947], [0.4492, 0.7627, 0.3936], [0.4394, 0.7584, 0.3925], [0.4295, 0.7541, 0.3915], [0.4197, 0.7498, 0.3904], [0.4098, 0.7455, 0.3893], [0.4, 0.7412, 0.3882], [0.3883, 0.7355, 0.3853], [0.3766, 0.7298, 0.3824], [0.3649, 0.7241, 0.3795], [0.3532, 0.7184, 0.3765], [0.3416, 0.7127, 0.3736], [0.3299, 0.707, 0.3707], [0.3182, 0.7013, 0.3678], [0.3065, 0.6957, 0.3649], [0.2948, 0.69, 0.3619], [0.2831, 0.6843, 0.359], [0.2714, 0.6786, 0.3561], [0.2597, 0.6729, 0.3532], [0.2481, 0.6672, 0.3502], [0.2364, 0.6615, 0.3473], [0.2247, 0.6558, 0.3444], [0.213, 0.6501, 0.3415], [0.2013, 0.6444, 0.3386], [0.1896, 0.6388, 0.3356], [0.1779, 0.6331, 0.3327], [0.1662, 0.6274, 0.3298], [0.1546, 0.6217, 0.3269], [0.1429, 0.616, 0.324], [0.1312, 0.6103, 0.321], [0.1195, 0.6046, 0.3181], [0.1078, 0.5989, 0.3152], [0.1, 0.5924, 0.3118], [0.096, 0.585, 0.308], [0.092, 0.5776, 0.3041], [0.088, 0.5702, 0.3003], [0.084, 0.5629, 0.2964], [0.08, 0.5555, 0.2926], [0.076, 0.5481, 0.2887], [0.072, 0.5407, 0.2849], [0.068, 0.5333, 0.281], [0.064, 0.526, 0.2772], [0.06, 0.5186, 0.2734], [0.056, 0.5112, 0.2695], [0.052, 0.5038, 0.2657], [0.048, 0.4964, 0.2618], [0.044, 0.489, 0.258], [0.04, 0.4817, 0.2541], [0.036, 0.4743, 0.2503], [0.032, 0.4669, 0.2464], [0.028, 0.4595, 0.2426], [0.024, 0.4521, 0.2388], [0.02, 0.4448, 0.2349], [0.016, 0.4374, 0.2311], [0.012, 0.43, 0.2272], [0.008, 0.4226, 0.2234], [0.004, 0.4152, 0.2195], [0.0, 0.4078, 0.2157]] }, "Reds": { "interpolate": true, "colors": [[1.0, 0.9608, 0.9412], [0.9999, 0.9582, 0.9375], [0.9998, 0.9556, 0.9338], [0.9996, 0.953, 0.9301], [0.9995, 0.9504, 0.9264], [0.9994, 0.9479, 0.9227], [0.9993, 0.9453, 0.919], [0.9991, 0.9427, 0.9153], [0.999, 0.9401, 0.9116], [0.9989, 0.9375, 0.908], [0.9988, 0.9349, 0.9043], [0.9986, 0.9324, 0.9006], [0.9985, 0.9298, 0.8969], [0.9984, 0.9272, 0.8932], [0.9983, 0.9246, 0.8895], [0.9982, 0.922, 0.8858], [0.998, 0.9194, 0.8821], [0.9979, 0.9169, 0.8784], [0.9978, 0.9143, 0.8747], [0.9977, 0.9117, 0.871], [0.9975, 0.9091, 0.8674], [0.9974, 0.9065, 0.8637], [0.9973, 0.9039, 0.86], [0.9972, 0.9014, 0.8563], [0.997, 0.8988, 0.8526], [0.9969, 0.8962, 0.8489], [0.9968, 0.8936, 0.8452], [0.9967, 0.891, 0.8415], [0.9966, 0.8884, 0.8378], [0.9964, 0.8859, 0.8341], [0.9963, 0.8833, 0.8304], [0.9962, 0.8807, 0.8268], [0.996, 0.8779, 0.8228], [0.9958, 0.8733, 0.8167], [0.9956, 0.8688, 0.8107], [0.9953, 0.8642, 0.8047], [0.9951, 0.8597, 0.7987], [0.9948, 0.8551, 0.7926], [0.9946, 0.8505, 0.7866], [0.9943, 0.846, 0.7806], [0.9941, 0.8414, 0.7745], [0.9938, 0.8369, 0.7685], [0.9936, 0.8323, 0.7625], [0.9933, 0.8278, 0.7565], [0.9931, 0.8232, 0.7504], [0.9928, 0.8187, 0.7444], [0.9926, 0.8141, 0.7384], [0.9924, 0.8096, 0.7323], [0.9921, 0.805, 0.7263], [0.9919, 0.8005, 0.7203], [0.9916, 0.7959, 0.7143], [0.9914, 0.7914, 0.7082], [0.9911, 0.7868, 0.7022], [0.9909, 0.7823, 0.6962], [0.9906, 0.7777, 0.6901], [0.9904, 0.7732, 0.6841], [0.9901, 0.7686, 0.6781], [0.9899, 0.7641, 0.6721], [0.9897, 0.7595, 0.666], [0.9894, 0.755, 0.66], [0.9892, 0.7504, 0.654], [0.9889, 0.7459, 0.648], [0.9887, 0.7413, 0.6419], [0.9884, 0.7367, 0.6359], [0.9882, 0.7321, 0.6299], [0.9882, 0.727, 0.6241], [0.9882, 0.722, 0.6184], [0.9882, 0.7169, 0.6126], [0.9882, 0.7119, 0.6068], [0.9882, 0.7069, 0.601], [0.9882, 0.7018, 0.5952], [0.9882, 0.6968, 0.5895], [0.9882, 0.6917, 0.5837], [0.9882, 0.6867, 0.5779], [0.9882, 0.6816, 0.5721], [0.9882, 0.6766, 0.5663], [0.9882, 0.6715, 0.5605], [0.9882, 0.6665, 0.5548], [0.9882, 0.6615, 0.549], [0.9882, 0.6564, 0.5432], [0.9882, 0.6514, 0.5374], [0.9882, 0.6463, 0.5316], [0.9882, 0.6413, 0.5258], [0.9882, 0.6362, 0.5201], [0.9882, 0.6312, 0.5143], [0.9882, 0.6261, 0.5085], [0.9882, 0.6211, 0.5027], [0.9882, 0.6161, 0.4969], [0.9882, 0.611, 0.4911], [0.9882, 0.606, 0.4854], [0.9882, 0.6009, 0.4796], [0.9882, 0.5959, 0.4738], [0.9882, 0.5908, 0.468], [0.9882, 0.5858, 0.4622], [0.9882, 0.5807, 0.4565], [0.9882, 0.5757, 0.4507], [0.9882, 0.5707, 0.4452], [0.9881, 0.5658, 0.4403], [0.9879, 0.5609, 0.4354], [0.9878, 0.5559, 0.4304], [0.9877, 0.551, 0.4255], [0.9876, 0.5461, 0.4206], [0.9875, 0.5412, 0.4157], [0.9873, 0.5363, 0.4108], [0.9872, 0.5313, 0.4058], [0.9871, 0.5264, 0.4009], [0.987, 0.5215, 0.396], [0.9868, 0.5166, 0.3911], [0.9867, 0.5116, 0.3862], [0.9866, 0.5067, 0.3812], [0.9865, 0.5018, 0.3763], [0.9863, 0.4969, 0.3714], [0.9862, 0.492, 0.3665], [0.9861, 0.487, 0.3616], [0.986, 0.4821, 0.3566], [0.9859, 0.4772, 0.3517], [0.9857, 0.4723, 0.3468], [0.9856, 0.4674, 0.3419], [0.9855, 0.4624, 0.3369], [0.9854, 0.4575, 0.332], [0.9852, 0.4526, 0.3271], [0.9851, 0.4477, 0.3222], [0.985, 0.4428, 0.3173], [0.9849, 0.4378, 0.3123], [0.9847, 0.4329, 0.3074], [0.9846, 0.428, 0.3025], [0.9845, 0.4231, 0.2976], [0.9844, 0.4181, 0.2927], [0.9836, 0.4128, 0.2884], [0.9821, 0.407, 0.2847], [0.9806, 0.4012, 0.281], [0.9791, 0.3954, 0.2773], [0.9777, 0.3897, 0.2736], [0.9762, 0.3839, 0.2699], [0.9747, 0.3781, 0.2662], [0.9732, 0.3723, 0.2625], [0.9718, 0.3665, 0.2588], [0.9703, 0.3608, 0.2551], [0.9688, 0.355, 0.2514], [0.9673, 0.3492, 0.2478], [0.9659, 0.3434, 0.2441], [0.9644, 0.3376, 0.2404], [0.9629, 0.3318, 0.2367], [0.9614, 0.3261, 0.233], [0.96, 0.3203, 0.2293], [0.9585, 0.3145, 0.2256], [0.957, 0.3087, 0.2219], [0.9555, 0.3029, 0.2182], [0.954, 0.2971, 0.2145], [0.9526, 0.2914, 0.2108], [0.9511, 0.2856, 0.2072], [0.9496, 0.2798, 0.2035], [0.9481, 0.274, 0.1998], [0.9467, 0.2682, 0.1961], [0.9452, 0.2625, 0.1924], [0.9437, 0.2567, 0.1887], [0.9422, 0.2509, 0.185], [0.9408, 0.2451, 0.1813], [0.9393, 0.2393, 0.1776], [0.9378, 0.2335, 0.1739], [0.9345, 0.2287, 0.1714], [0.9301, 0.2244, 0.1696], [0.9256, 0.2201, 0.1677], [0.9212, 0.2158, 0.1659], [0.9168, 0.2115, 0.164], [0.9123, 0.2072, 0.1622], [0.9079, 0.2028, 0.1603], [0.9035, 0.1985, 0.1585], [0.8991, 0.1942, 0.1566], [0.8946, 0.1899, 0.1548], [0.8902, 0.1856, 0.1529], [0.8858, 0.1813, 0.1511], [0.8813, 0.177, 0.1493], [0.8769, 0.1727, 0.1474], [0.8725, 0.1684, 0.1456], [0.8681, 0.1641, 0.1437], [0.8636, 0.1598, 0.1419], [0.8592, 0.1555, 0.14], [0.8548, 0.1512, 0.1382], [0.8503, 0.1469, 0.1363], [0.8459, 0.1426, 0.1345], [0.8415, 0.1383, 0.1326], [0.837, 0.1339, 0.1308], [0.8326, 0.1296, 0.129], [0.8282, 0.1253, 0.1271], [0.8238, 0.121, 0.1253], [0.8193, 0.1167, 0.1234], [0.8149, 0.1124, 0.1216], [0.8105, 0.1081, 0.1197], [0.806, 0.1038, 0.1179], [0.8016, 0.0995, 0.116], [0.7972, 0.0952, 0.1142], [0.7926, 0.0933, 0.113], [0.7879, 0.0922, 0.112], [0.7832, 0.0911, 0.111], [0.7785, 0.09, 0.11], [0.7739, 0.0889, 0.1091], [0.7692, 0.0878, 0.1081], [0.7645, 0.0866, 0.1071], [0.7598, 0.0855, 0.1061], [0.7552, 0.0844, 0.1051], [0.7505, 0.0833, 0.1041], [0.7458, 0.0822, 0.1031], [0.7411, 0.0811, 0.1022], [0.7365, 0.08, 0.1012], [0.7318, 0.0789, 0.1002], [0.7271, 0.0778, 0.0992], [0.7224, 0.0767, 0.0982], [0.7178, 0.0756, 0.0972], [0.7131, 0.0745, 0.0963], [0.7084, 0.0734, 0.0953], [0.7037, 0.0722, 0.0943], [0.6991, 0.0711, 0.0933], [0.6944, 0.07, 0.0923], [0.6897, 0.0689, 0.0913], [0.685, 0.0678, 0.0903], [0.6804, 0.0667, 0.0894], [0.6757, 0.0656, 0.0884], [0.671, 0.0645, 0.0874], [0.6663, 0.0634, 0.0864], [0.6617, 0.0623, 0.0854], [0.657, 0.0612, 0.0844], [0.6523, 0.0601, 0.0835], [0.6476, 0.059, 0.0825], [0.6404, 0.0572, 0.0815], [0.6328, 0.0554, 0.0805], [0.6251, 0.0535, 0.0795], [0.6175, 0.0517, 0.0785], [0.6099, 0.0498, 0.0776], [0.6022, 0.048, 0.0766], [0.5946, 0.0461, 0.0756], [0.587, 0.0443, 0.0746], [0.5794, 0.0424, 0.0736], [0.5717, 0.0406, 0.0726], [0.5641, 0.0388, 0.0716], [0.5565, 0.0369, 0.0707], [0.5489, 0.0351, 0.0697], [0.5412, 0.0332, 0.0687], [0.5336, 0.0314, 0.0677], [0.526, 0.0295, 0.0667], [0.5183, 0.0277, 0.0657], [0.5107, 0.0258, 0.0648], [0.5031, 0.024, 0.0638], [0.4955, 0.0221, 0.0628], [0.4878, 0.0203, 0.0618], [0.4802, 0.0185, 0.0608], [0.4726, 0.0166, 0.0598], [0.4649, 0.0148, 0.0589], [0.4573, 0.0129, 0.0579], [0.4497, 0.0111, 0.0569], [0.4421, 0.0092, 0.0559], [0.4344, 0.0074, 0.0549], [0.4268, 0.0055, 0.0539], [0.4192, 0.0037, 0.0529], [0.4115, 0.0018, 0.052], [0.4039, 0.0, 0.051]] }, "Set1": { "interpolate": false, "colors": [[0.8941, 0.102, 0.1098], [0.2157, 0.4941, 0.7216], [0.302, 0.6863, 0.2902], [0.5961, 0.3059, 0.6392], [1.0, 0.498, 0.0], [1.0, 1.0, 0.2], [0.651, 0.3373, 0.1569], [0.9686, 0.5059, 0.749], [0.6, 0.6, 0.6]] }, "Set2": { "interpolate": false, "colors": [[0.4, 0.7608, 0.6471], [0.9882, 0.5529, 0.3843], [0.5529, 0.6275, 0.7961], [0.9059, 0.5412, 0.7647], [0.651, 0.8471, 0.3294], [1.0, 0.851, 0.1843], [0.898, 0.7686, 0.5804], [0.702, 0.702, 0.702]] }, "Set3": { "interpolate": false, "colors": [[0.5529, 0.8275, 0.7804], [1.0, 1.0, 0.702], [0.7451, 0.7294, 0.8549], [0.9843, 0.502, 0.4471], [0.502, 0.6941, 0.8275], [0.9922, 0.7059, 0.3843], [0.702, 0.8706, 0.4118], [0.9882, 0.8039, 0.898], [0.851, 0.851, 0.851], [0.7373, 0.502, 0.7412], [0.8, 0.9216, 0.7725], [1.0, 0.9294, 0.4353]] }, "Spectral": { "interpolate": true, "colors": [[0.6196, 0.0039, 0.2588], [0.6281, 0.0133, 0.2608], [0.6365, 0.0227, 0.2628], [0.645, 0.0321, 0.2648], [0.6534, 0.0414, 0.2668], [0.6619, 0.0508, 0.2688], [0.6704, 0.0602, 0.2708], [0.6788, 0.0696, 0.2728], [0.6873, 0.079, 0.2748], [0.6957, 0.0884, 0.2768], [0.7042, 0.0977, 0.2788], [0.7126, 0.1071, 0.2808], [0.7211, 0.1165, 0.2828], [0.7296, 0.1259, 0.2848], [0.738, 0.1353, 0.2868], [0.7465, 0.1446, 0.2888], [0.7549, 0.154, 0.2908], [0.7634, 0.1634, 0.2928], [0.7719, 0.1728, 0.2948], [0.7803, 0.1822, 0.2968], [0.7888, 0.1915, 0.2988], [0.7972, 0.2009, 0.3008], [0.8057, 0.2103, 0.3028], [0.8141, 0.2197, 0.3048], [0.8226, 0.2291, 0.3068], [0.8311, 0.2384, 0.3088], [0.8377, 0.2468, 0.3089], [0.8424, 0.254, 0.307], [0.8472, 0.2612, 0.3052], [0.852, 0.2684, 0.3033], [0.8567, 0.2757, 0.3015], [0.8615, 0.2829, 0.2997], [0.8663, 0.2901, 0.2978], [0.871, 0.2973, 0.296], [0.8758, 0.3046, 0.2941], [0.8806, 0.3118, 0.2923], [0.8854, 0.319, 0.2904], [0.8901, 0.3263, 0.2886], [0.8949, 0.3335, 0.2867], [0.8997, 0.3407, 0.2849], [0.9044, 0.3479, 0.283], [0.9092, 0.3552, 0.2812], [0.914, 0.3624, 0.2794], [0.9187, 0.3696, 0.2775], [0.9235, 0.3769, 0.2757], [0.9283, 0.3841, 0.2738], [0.933, 0.3913, 0.272], [0.9378, 0.3985, 0.2701], [0.9426, 0.4058, 0.2683], [0.9473, 0.413, 0.2664], [0.9521, 0.4202, 0.2646], [0.9569, 0.4275, 0.2627], [0.9582, 0.4374, 0.2674], [0.9596, 0.4474, 0.272], [0.961, 0.4574, 0.2766], [0.9624, 0.4674, 0.2812], [0.9638, 0.4774, 0.2858], [0.9652, 0.4874, 0.2904], [0.9666, 0.4974, 0.295], [0.9679, 0.5074, 0.2997], [0.9693, 0.5174, 0.3043], [0.9707, 0.5274, 0.3089], [0.9721, 0.5374, 0.3135], [0.9735, 0.5474, 0.3181], [0.9749, 0.5574, 0.3227], [0.9762, 0.5674, 0.3273], [0.9776, 0.5774, 0.3319], [0.979, 0.5874, 0.3366], [0.9804, 0.5974, 0.3412], [0.9818, 0.6074, 0.3458], [0.9832, 0.6174, 0.3504], [0.9845, 0.6274, 0.355], [0.9859, 0.6374, 0.3596], [0.9873, 0.6474, 0.3642], [0.9887, 0.6574, 0.3689], [0.9901, 0.6674, 0.3735], [0.9915, 0.6774, 0.3781], [0.9922, 0.6862, 0.3836], [0.9924, 0.6939, 0.3901], [0.9925, 0.7016, 0.3965], [0.9927, 0.7093, 0.403], [0.9928, 0.717, 0.4095], [0.993, 0.7246, 0.4159], [0.9932, 0.7323, 0.4224], [0.9933, 0.74, 0.4288], [0.9935, 0.7477, 0.4353], [0.9936, 0.7554, 0.4418], [0.9938, 0.7631, 0.4482], [0.9939, 0.7708, 0.4547], [0.9941, 0.7785, 0.4611], [0.9942, 0.7862, 0.4676], [0.9944, 0.7938, 0.474], [0.9945, 0.8015, 0.4805], [0.9947, 0.8092, 0.487], [0.9948, 0.8169, 0.4934], [0.995, 0.8246, 0.4999], [0.9952, 0.8323, 0.5063], [0.9953, 0.84, 0.5128], [0.9955, 0.8477, 0.5193], [0.9956, 0.8554, 0.5257], [0.9958, 0.8631, 0.5322], [0.9959, 0.8707, 0.5386], [0.9961, 0.8784, 0.5451], [0.9962, 0.8832, 0.5531], [0.9964, 0.888, 0.5611], [0.9965, 0.8927, 0.5691], [0.9967, 0.8975, 0.5771], [0.9968, 0.9023, 0.5851], [0.997, 0.907, 0.5931], [0.9972, 0.9118, 0.6011], [0.9973, 0.9166, 0.6091], [0.9975, 0.9213, 0.6171], [0.9976, 0.9261, 0.6251], [0.9978, 0.9309, 0.6331], [0.9979, 0.9356, 0.6411], [0.9981, 0.9404, 0.6491], [0.9982, 0.9452, 0.6571], [0.9984, 0.9499, 0.6651], [0.9985, 0.9547, 0.673], [0.9987, 0.9595, 0.681], [0.9988, 0.9642, 0.689], [0.999, 0.969, 0.697], [0.9992, 0.9738, 0.705], [0.9993, 0.9785, 0.713], [0.9995, 0.9833, 0.721], [0.9996, 0.9881, 0.729], [0.9998, 0.9928, 0.737], [0.9999, 0.9976, 0.745], [0.9981, 0.9992, 0.746], [0.9942, 0.9977, 0.74], [0.9904, 0.9962, 0.734], [0.9865, 0.9946, 0.728], [0.9827, 0.9931, 0.722], [0.9789, 0.9915, 0.716], [0.975, 0.99, 0.71], [0.9712, 0.9885, 0.704], [0.9673, 0.9869, 0.698], [0.9635, 0.9854, 0.692], [0.9596, 0.9839, 0.686], [0.9558, 0.9823, 0.68], [0.9519, 0.9808, 0.674], [0.9481, 0.9792, 0.6681], [0.9443, 0.9777, 0.6621], [0.9404, 0.9762, 0.6561], [0.9366, 0.9746, 0.6501], [0.9327, 0.9731, 0.6441], [0.9289, 0.9715, 0.6381], [0.925, 0.97, 0.6321], [0.9212, 0.9685, 0.6261], [0.9173, 0.9669, 0.6201], [0.9135, 0.9654, 0.6141], [0.9097, 0.9639, 0.6081], [0.9058, 0.9623, 0.6021], [0.902, 0.9608, 0.5961], [0.8929, 0.9571, 0.5979], [0.8838, 0.9534, 0.5998], [0.8747, 0.9497, 0.6016], [0.8657, 0.946, 0.6035], [0.8566, 0.9423, 0.6053], [0.8475, 0.9386, 0.6072], [0.8384, 0.9349, 0.609], [0.8294, 0.9313, 0.6108], [0.8203, 0.9276, 0.6127], [0.8112, 0.9239, 0.6145], [0.8022, 0.9202, 0.6164], [0.7931, 0.9165, 0.6182], [0.784, 0.9128, 0.6201], [0.7749, 0.9091, 0.6219], [0.7659, 0.9054, 0.6238], [0.7568, 0.9017, 0.6256], [0.7477, 0.898, 0.6275], [0.7386, 0.8943, 0.6293], [0.7296, 0.8907, 0.6311], [0.7205, 0.887, 0.633], [0.7114, 0.8833, 0.6348], [0.7023, 0.8796, 0.6367], [0.6933, 0.8759, 0.6385], [0.6842, 0.8722, 0.6404], [0.6751, 0.8685, 0.6422], [0.6653, 0.8646, 0.6432], [0.6547, 0.8604, 0.6434], [0.6441, 0.8563, 0.6435], [0.6334, 0.8521, 0.6437], [0.6228, 0.848, 0.6438], [0.6122, 0.8438, 0.644], [0.6016, 0.8397, 0.6441], [0.591, 0.8355, 0.6443], [0.5804, 0.8314, 0.6444], [0.5698, 0.8272, 0.6446], [0.5592, 0.8231, 0.6448], [0.5486, 0.8189, 0.6449], [0.5379, 0.8148, 0.6451], [0.5273, 0.8106, 0.6452], [0.5167, 0.8065, 0.6454], [0.5061, 0.8023, 0.6455], [0.4955, 0.7982, 0.6457], [0.4849, 0.794, 0.6458], [0.4743, 0.7899, 0.646], [0.4637, 0.7857, 0.6461], [0.4531, 0.7815, 0.6463], [0.4424, 0.7774, 0.6464], [0.4318, 0.7732, 0.6466], [0.4212, 0.7691, 0.6468], [0.4106, 0.7649, 0.6469], [0.4, 0.7608, 0.6471], [0.392, 0.7519, 0.6507], [0.384, 0.7429, 0.6544], [0.376, 0.734, 0.6581], [0.368, 0.7251, 0.6618], [0.36, 0.7162, 0.6655], [0.352, 0.7073, 0.6692], [0.344, 0.6983, 0.6729], [0.336, 0.6894, 0.6766], [0.328, 0.6805, 0.6803], [0.32, 0.6716, 0.684], [0.312, 0.6627, 0.6877], [0.304, 0.6537, 0.6913], [0.296, 0.6448, 0.695], [0.288, 0.6359, 0.6987], [0.28, 0.627, 0.7024], [0.272, 0.6181, 0.7061], [0.2641, 0.6092, 0.7098], [0.2561, 0.6002, 0.7135], [0.2481, 0.5913, 0.7172], [0.2401, 0.5824, 0.7209], [0.2321, 0.5735, 0.7246], [0.2241, 0.5646, 0.7283], [0.2161, 0.5556, 0.7319], [0.2081, 0.5467, 0.7356], [0.2001, 0.5378, 0.7393], [0.1995, 0.529, 0.7391], [0.2062, 0.5202, 0.7349], [0.213, 0.5114, 0.7308], [0.2198, 0.5027, 0.7266], [0.2265, 0.4939, 0.7225], [0.2333, 0.4851, 0.7183], [0.2401, 0.4764, 0.7142], [0.2468, 0.4676, 0.71], [0.2536, 0.4588, 0.7059], [0.2604, 0.4501, 0.7017], [0.2671, 0.4413, 0.6976], [0.2739, 0.4325, 0.6934], [0.2807, 0.4238, 0.6893], [0.2874, 0.415, 0.6851], [0.2942, 0.4062, 0.681], [0.301, 0.3975, 0.6768], [0.3077, 0.3887, 0.6727], [0.3145, 0.3799, 0.6685], [0.3213, 0.3712, 0.6644], [0.328, 0.3624, 0.6602], [0.3348, 0.3536, 0.6561], [0.3416, 0.3449, 0.6519], [0.3483, 0.3361, 0.6478], [0.3551, 0.3273, 0.6436], [0.3619, 0.3186, 0.6394], [0.3686, 0.3098, 0.6353]] }, "Wistia": { "interpolate": true, "colors": [[0.8941, 1.0, 0.4784], [0.8958, 0.9986, 0.4725], [0.8974, 0.9972, 0.4666], [0.8991, 0.9958, 0.4607], [0.9008, 0.9943, 0.4548], [0.9024, 0.9929, 0.4489], [0.9041, 0.9915, 0.443], [0.9057, 0.9901, 0.4371], [0.9074, 0.9887, 0.4312], [0.9091, 0.9873, 0.4253], [0.9107, 0.9859, 0.4194], [0.9124, 0.9844, 0.4135], [0.914, 0.983, 0.4076], [0.9157, 0.9816, 0.4017], [0.9174, 0.9802, 0.3958], [0.919, 0.9788, 0.3899], [0.9207, 0.9774, 0.3839], [0.9224, 0.9759, 0.378], [0.924, 0.9745, 0.3721], [0.9257, 0.9731, 0.3662], [0.9273, 0.9717, 0.3603], [0.929, 0.9703, 0.3544], [0.9307, 0.9689, 0.3485], [0.9323, 0.9675, 0.3426], [0.934, 0.966, 0.3367], [0.9356, 0.9646, 0.3308], [0.9373, 0.9632, 0.3249], [0.939, 0.9618, 0.319], [0.9406, 0.9604, 0.3131], [0.9423, 0.959, 0.3072], [0.9439, 0.9576, 0.3013], [0.9456, 0.9561, 0.2954], [0.9473, 0.9547, 0.2895], [0.9489, 0.9533, 0.2836], [0.9506, 0.9519, 0.2776], [0.9522, 0.9505, 0.2717], [0.9539, 0.9491, 0.2658], [0.9556, 0.9477, 0.2599], [0.9572, 0.9462, 0.254], [0.9589, 0.9448, 0.2481], [0.9606, 0.9434, 0.2422], [0.9622, 0.942, 0.2363], [0.9639, 0.9406, 0.2304], [0.9655, 0.9392, 0.2245], [0.9672, 0.9377, 0.2186], [0.9689, 0.9363, 0.2127], [0.9705, 0.9349, 0.2068], [0.9722, 0.9335, 0.2009], [0.9738, 0.9321, 0.195], [0.9755, 0.9307, 0.1891], [0.9772, 0.9293, 0.1832], [0.9788, 0.9278, 0.1773], [0.9805, 0.9264, 0.1713], [0.9821, 0.925, 0.1654], [0.9838, 0.9236, 0.1595], [0.9855, 0.9222, 0.1536], [0.9871, 0.9208, 0.1477], [0.9888, 0.9194, 0.1418], [0.9904, 0.9179, 0.1359], [0.9921, 0.9165, 0.13], [0.9938, 0.9151, 0.1241], [0.9954, 0.9137, 0.1182], [0.9971, 0.9123, 0.1123], [0.9988, 0.9109, 0.1064], [1.0, 0.9091, 0.1016], [1.0, 0.9065, 0.1], [1.0, 0.9039, 0.0984], [1.0, 0.9012, 0.0968], [1.0, 0.8986, 0.0952], [1.0, 0.8959, 0.0936], [1.0, 0.8933, 0.092], [1.0, 0.8906, 0.0904], [1.0, 0.888, 0.0888], [1.0, 0.8853, 0.0872], [1.0, 0.8827, 0.0856], [1.0, 0.88, 0.084], [1.0, 0.8774, 0.0824], [1.0, 0.8748, 0.0808], [1.0, 0.8721, 0.0792], [1.0, 0.8695, 0.0776], [1.0, 0.8668, 0.076], [1.0, 0.8642, 0.0744], [1.0, 0.8615, 0.0728], [1.0, 0.8589, 0.0712], [1.0, 0.8562, 0.0696], [1.0, 0.8536, 0.068], [1.0, 0.8509, 0.0664], [1.0, 0.8483, 0.0648], [1.0, 0.8457, 0.0632], [1.0, 0.843, 0.0616], [1.0, 0.8404, 0.06], [1.0, 0.8377, 0.0584], [1.0, 0.8351, 0.0568], [1.0, 0.8324, 0.0552], [1.0, 0.8298, 0.0536], [1.0, 0.8271, 0.052], [1.0, 0.8245, 0.0504], [1.0, 0.8219, 0.0488], [1.0, 0.8192, 0.0472], [1.0, 0.8166, 0.0456], [1.0, 0.8139, 0.044], [1.0, 0.8113, 0.0424], [1.0, 0.8086, 0.0408], [1.0, 0.806, 0.0392], [1.0, 0.8033, 0.0376], [1.0, 0.8007, 0.036], [1.0, 0.798, 0.0344], [1.0, 0.7954, 0.0328], [1.0, 0.7928, 0.0312], [1.0, 0.7901, 0.0296], [1.0, 0.7875, 0.028], [1.0, 0.7848, 0.0264], [1.0, 0.7822, 0.0248], [1.0, 0.7795, 0.0232], [1.0, 0.7769, 0.0216], [1.0, 0.7742, 0.02], [1.0, 0.7716, 0.0184], [1.0, 0.769, 0.0168], [1.0, 0.7663, 0.0152], [1.0, 0.7637, 0.0136], [1.0, 0.761, 0.012], [1.0, 0.7584, 0.0104], [1.0, 0.7557, 0.0088], [1.0, 0.7531, 0.0072], [1.0, 0.7504, 0.0056], [1.0, 0.7478, 0.004], [1.0, 0.7451, 0.0024], [1.0, 0.7425, 0.0008], [1.0, 0.7403, 0.0], [1.0, 0.7385, 0.0], [1.0, 0.7367, 0.0], [1.0, 0.7349, 0.0], [1.0, 0.7331, 0.0], [1.0, 0.7314, 0.0], [1.0, 0.7296, 0.0], [1.0, 0.7278, 0.0], [1.0, 0.726, 0.0], [1.0, 0.7242, 0.0], [1.0, 0.7224, 0.0], [1.0, 0.7207, 0.0], [1.0, 0.7189, 0.0], [1.0, 0.7171, 0.0], [1.0, 0.7153, 0.0], [1.0, 0.7135, 0.0], [1.0, 0.7117, 0.0], [1.0, 0.71, 0.0], [1.0, 0.7082, 0.0], [1.0, 0.7064, 0.0], [1.0, 0.7046, 0.0], [1.0, 0.7028, 0.0], [1.0, 0.701, 0.0], [1.0, 0.6993, 0.0], [1.0, 0.6975, 0.0], [1.0, 0.6957, 0.0], [1.0, 0.6939, 0.0], [1.0, 0.6921, 0.0], [1.0, 0.6903, 0.0], [1.0, 0.6886, 0.0], [1.0, 0.6868, 0.0], [1.0, 0.685, 0.0], [1.0, 0.6832, 0.0], [1.0, 0.6814, 0.0], [1.0, 0.6796, 0.0], [1.0, 0.6778, 0.0], [1.0, 0.6761, 0.0], [1.0, 0.6743, 0.0], [1.0, 0.6725, 0.0], [1.0, 0.6707, 0.0], [1.0, 0.6689, 0.0], [1.0, 0.6671, 0.0], [1.0, 0.6654, 0.0], [1.0, 0.6636, 0.0], [1.0, 0.6618, 0.0], [1.0, 0.66, 0.0], [1.0, 0.6582, 0.0], [1.0, 0.6564, 0.0], [1.0, 0.6547, 0.0], [1.0, 0.6529, 0.0], [1.0, 0.6511, 0.0], [1.0, 0.6493, 0.0], [1.0, 0.6475, 0.0], [1.0, 0.6457, 0.0], [1.0, 0.644, 0.0], [1.0, 0.6422, 0.0], [1.0, 0.6404, 0.0], [1.0, 0.6386, 0.0], [1.0, 0.6368, 0.0], [1.0, 0.635, 0.0], [1.0, 0.6332, 0.0], [1.0, 0.6315, 0.0], [1.0, 0.6297, 0.0], [1.0, 0.6279, 0.0], [0.9999, 0.6259, 0.0], [0.9997, 0.6239, 0.0], [0.9995, 0.6219, 0.0], [0.9993, 0.6198, 0.0], [0.9991, 0.6178, 0.0], [0.9989, 0.6158, 0.0], [0.9988, 0.6137, 0.0], [0.9986, 0.6117, 0.0], [0.9984, 0.6097, 0.0], [0.9982, 0.6077, 0.0], [0.998, 0.6056, 0.0], [0.9978, 0.6036, 0.0], [0.9976, 0.6016, 0.0], [0.9975, 0.5995, 0.0], [0.9973, 0.5975, 0.0], [0.9971, 0.5955, 0.0], [0.9969, 0.5934, 0.0], [0.9967, 0.5914, 0.0], [0.9965, 0.5894, 0.0], [0.9964, 0.5874, 0.0], [0.9962, 0.5853, 0.0], [0.996, 0.5833, 0.0], [0.9958, 0.5813, 0.0], [0.9956, 0.5792, 0.0], [0.9954, 0.5772, 0.0], [0.9952, 0.5752, 0.0], [0.9951, 0.5731, 0.0], [0.9949, 0.5711, 0.0], [0.9947, 0.5691, 0.0], [0.9945, 0.5671, 0.0], [0.9943, 0.565, 0.0], [0.9941, 0.563, 0.0], [0.994, 0.561, 0.0], [0.9938, 0.5589, 0.0], [0.9936, 0.5569, 0.0], [0.9934, 0.5549, 0.0], [0.9932, 0.5528, 0.0], [0.993, 0.5508, 0.0], [0.9928, 0.5488, 0.0], [0.9927, 0.5468, 0.0], [0.9925, 0.5447, 0.0], [0.9923, 0.5427, 0.0], [0.9921, 0.5407, 0.0], [0.9919, 0.5386, 0.0], [0.9917, 0.5366, 0.0], [0.9916, 0.5346, 0.0], [0.9914, 0.5325, 0.0], [0.9912, 0.5305, 0.0], [0.991, 0.5285, 0.0], [0.9908, 0.5265, 0.0], [0.9906, 0.5244, 0.0], [0.9904, 0.5224, 0.0], [0.9903, 0.5204, 0.0], [0.9901, 0.5183, 0.0], [0.9899, 0.5163, 0.0], [0.9897, 0.5143, 0.0], [0.9895, 0.5122, 0.0], [0.9893, 0.5102, 0.0], [0.9892, 0.5082, 0.0], [0.989, 0.5062, 0.0], [0.9888, 0.5041, 0.0], [0.9886, 0.5021, 0.0], [0.9884, 0.5001, 0.0], [0.9882, 0.498, 0.0]] }, "YlGn": { "interpolate": true, "colors": [[1.0, 1.0, 0.898], [0.999, 0.9996, 0.8926], [0.998, 0.9993, 0.8872], [0.997, 0.9989, 0.8818], [0.9961, 0.9985, 0.8764], [0.9951, 0.9982, 0.871], [0.9941, 0.9978, 0.8656], [0.9931, 0.9974, 0.8601], [0.9921, 0.997, 0.8547], [0.9911, 0.9967, 0.8493], [0.9902, 0.9963, 0.8439], [0.9892, 0.9959, 0.8385], [0.9882, 0.9956, 0.8331], [0.9872, 0.9952, 0.8277], [0.9862, 0.9948, 0.8223], [0.9852, 0.9945, 0.8168], [0.9843, 0.9941, 0.8114], [0.9833, 0.9937, 0.806], [0.9823, 0.9934, 0.8006], [0.9813, 0.993, 0.7952], [0.9803, 0.9926, 0.7898], [0.9793, 0.9922, 0.7844], [0.9783, 0.9919, 0.7789], [0.9774, 0.9915, 0.7735], [0.9764, 0.9911, 0.7681], [0.9754, 0.9908, 0.7627], [0.9744, 0.9904, 0.7573], [0.9734, 0.99, 0.7519], [0.9724, 0.9897, 0.7465], [0.9715, 0.9893, 0.7411], [0.9705, 0.9889, 0.7356], [0.9695, 0.9886, 0.7302], [0.9682, 0.9881, 0.7252], [0.9645, 0.9866, 0.7224], [0.9608, 0.9851, 0.7197], [0.9571, 0.9836, 0.717], [0.9534, 0.9821, 0.7143], [0.9497, 0.9807, 0.7116], [0.946, 0.9792, 0.7089], [0.9423, 0.9777, 0.7062], [0.9386, 0.9762, 0.7035], [0.9349, 0.9748, 0.7008], [0.9313, 0.9733, 0.6981], [0.9276, 0.9718, 0.6954], [0.9239, 0.9703, 0.6927], [0.9202, 0.9689, 0.69], [0.9165, 0.9674, 0.6873], [0.9128, 0.9659, 0.6846], [0.9091, 0.9644, 0.6818], [0.9054, 0.963, 0.6791], [0.9017, 0.9615, 0.6764], [0.898, 0.96, 0.6737], [0.8943, 0.9585, 0.671], [0.8907, 0.957, 0.6683], [0.887, 0.9556, 0.6656], [0.8833, 0.9541, 0.6629], [0.8796, 0.9526, 0.6602], [0.8759, 0.9511, 0.6575], [0.8722, 0.9497, 0.6548], [0.8685, 0.9482, 0.6521], [0.8648, 0.9467, 0.6494], [0.8611, 0.9452, 0.6467], [0.8574, 0.9438, 0.644], [0.8537, 0.9423, 0.6412], [0.8496, 0.9406, 0.6386], [0.8442, 0.9383, 0.636], [0.8388, 0.9359, 0.6334], [0.8334, 0.9336, 0.6308], [0.828, 0.9312, 0.6282], [0.8226, 0.9289, 0.6257], [0.8171, 0.9266, 0.6231], [0.8117, 0.9242, 0.6205], [0.8063, 0.9219, 0.6179], [0.8009, 0.9196, 0.6153], [0.7955, 0.9172, 0.6127], [0.7901, 0.9149, 0.6101], [0.7847, 0.9125, 0.6076], [0.7793, 0.9102, 0.605], [0.7738, 0.9079, 0.6024], [0.7684, 0.9055, 0.5998], [0.763, 0.9032, 0.5972], [0.7576, 0.9009, 0.5946], [0.7522, 0.8985, 0.5921], [0.7468, 0.8962, 0.5895], [0.7414, 0.8938, 0.5869], [0.7359, 0.8915, 0.5843], [0.7305, 0.8892, 0.5817], [0.7251, 0.8868, 0.5791], [0.7197, 0.8845, 0.5766], [0.7143, 0.8822, 0.574], [0.7089, 0.8798, 0.5714], [0.7035, 0.8775, 0.5688], [0.6981, 0.8751, 0.5662], [0.6926, 0.8728, 0.5636], [0.6872, 0.8705, 0.5611], [0.6818, 0.8681, 0.5585], [0.676, 0.8656, 0.5559], [0.6695, 0.8628, 0.5533], [0.6629, 0.8599, 0.5507], [0.6564, 0.8571, 0.5481], [0.6499, 0.8543, 0.5456], [0.6434, 0.8515, 0.543], [0.6369, 0.8486, 0.5404], [0.6303, 0.8458, 0.5378], [0.6238, 0.843, 0.5352], [0.6173, 0.8401, 0.5326], [0.6108, 0.8373, 0.5301], [0.6043, 0.8345, 0.5275], [0.5977, 0.8316, 0.5249], [0.5912, 0.8288, 0.5223], [0.5847, 0.826, 0.5197], [0.5782, 0.8232, 0.5171], [0.5717, 0.8203, 0.5146], [0.5651, 0.8175, 0.512], [0.5586, 0.8147, 0.5094], [0.5521, 0.8118, 0.5068], [0.5456, 0.809, 0.5042], [0.5391, 0.8062, 0.5016], [0.5325, 0.8034, 0.4991], [0.526, 0.8005, 0.4965], [0.5195, 0.7977, 0.4939], [0.513, 0.7949, 0.4913], [0.5065, 0.792, 0.4887], [0.4999, 0.7892, 0.4861], [0.4934, 0.7864, 0.4836], [0.4869, 0.7835, 0.481], [0.4804, 0.7807, 0.4784], [0.4738, 0.7779, 0.4758], [0.4672, 0.7748, 0.4728], [0.4604, 0.7715, 0.4693], [0.4537, 0.7682, 0.4659], [0.4469, 0.7648, 0.4625], [0.4401, 0.7615, 0.459], [0.4334, 0.7582, 0.4556], [0.4266, 0.7549, 0.4521], [0.4198, 0.7516, 0.4487], [0.4131, 0.7482, 0.4452], [0.4063, 0.7449, 0.4418], [0.3995, 0.7416, 0.4383], [0.3928, 0.7383, 0.4349], [0.386, 0.7349, 0.4314], [0.3792, 0.7316, 0.428], [0.3725, 0.7283, 0.4246], [0.3657, 0.725, 0.4211], [0.3589, 0.7217, 0.4177], [0.3522, 0.7183, 0.4142], [0.3454, 0.715, 0.4108], [0.3386, 0.7117, 0.4073], [0.3319, 0.7084, 0.4039], [0.3251, 0.7051, 0.4004], [0.3183, 0.7017, 0.397], [0.3116, 0.6984, 0.3936], [0.3048, 0.6951, 0.3901], [0.298, 0.6918, 0.3867], [0.2913, 0.6884, 0.3832], [0.2845, 0.6851, 0.3798], [0.2777, 0.6818, 0.3763], [0.271, 0.6785, 0.3729], [0.2642, 0.6752, 0.3694], [0.2574, 0.6718, 0.366], [0.2526, 0.6676, 0.3627], [0.2489, 0.6628, 0.3595], [0.2452, 0.658, 0.3563], [0.2415, 0.6532, 0.3531], [0.2378, 0.6484, 0.3499], [0.2341, 0.6436, 0.3467], [0.2304, 0.6388, 0.3435], [0.2268, 0.634, 0.3403], [0.2231, 0.6292, 0.3371], [0.2194, 0.6244, 0.3339], [0.2157, 0.6196, 0.3307], [0.212, 0.6148, 0.3275], [0.2083, 0.61, 0.3243], [0.2046, 0.6052, 0.3211], [0.2009, 0.6004, 0.3179], [0.1972, 0.5956, 0.3147], [0.1935, 0.5908, 0.3115], [0.1899, 0.586, 0.3083], [0.1862, 0.5812, 0.3051], [0.1825, 0.5764, 0.3019], [0.1788, 0.5716, 0.2987], [0.1751, 0.5668, 0.2955], [0.1714, 0.562, 0.2923], [0.1677, 0.5572, 0.2891], [0.164, 0.5524, 0.2859], [0.1603, 0.5476, 0.2827], [0.1566, 0.5428, 0.2795], [0.1529, 0.538, 0.2763], [0.1493, 0.5332, 0.2731], [0.1456, 0.5284, 0.2699], [0.1419, 0.5236, 0.2667], [0.1382, 0.5188, 0.2635], [0.134, 0.5151, 0.2616], [0.1297, 0.5116, 0.2602], [0.1254, 0.5082, 0.2587], [0.1211, 0.5047, 0.2572], [0.1168, 0.5013, 0.2557], [0.1125, 0.4978, 0.2543], [0.1082, 0.4944, 0.2528], [0.1039, 0.4909, 0.2513], [0.0996, 0.4875, 0.2498], [0.0953, 0.4841, 0.2484], [0.091, 0.4806, 0.2469], [0.0867, 0.4772, 0.2454], [0.0824, 0.4737, 0.2439], [0.078, 0.4703, 0.2424], [0.0737, 0.4668, 0.241], [0.0694, 0.4634, 0.2395], [0.0651, 0.4599, 0.238], [0.0608, 0.4565, 0.2365], [0.0565, 0.4531, 0.2351], [0.0522, 0.4496, 0.2336], [0.0479, 0.4462, 0.2321], [0.0436, 0.4427, 0.2306], [0.0393, 0.4393, 0.2292], [0.035, 0.4358, 0.2277], [0.0307, 0.4324, 0.2262], [0.0264, 0.4289, 0.2247], [0.0221, 0.4255, 0.2233], [0.0178, 0.4221, 0.2218], [0.0135, 0.4186, 0.2203], [0.0092, 0.4152, 0.2188], [0.0048, 0.4117, 0.2173], [0.0005, 0.4083, 0.2159], [0.0, 0.4041, 0.2142], [0.0, 0.3998, 0.2125], [0.0, 0.3955, 0.2107], [0.0, 0.3912, 0.209], [0.0, 0.3869, 0.2073], [0.0, 0.3825, 0.2056], [0.0, 0.3782, 0.2038], [0.0, 0.3739, 0.2021], [0.0, 0.3696, 0.2004], [0.0, 0.3653, 0.1987], [0.0, 0.361, 0.197], [0.0, 0.3567, 0.1952], [0.0, 0.3524, 0.1935], [0.0, 0.3481, 0.1918], [0.0, 0.3438, 0.1901], [0.0, 0.3395, 0.1883], [0.0, 0.3352, 0.1866], [0.0, 0.3309, 0.1849], [0.0, 0.3266, 0.1832], [0.0, 0.3223, 0.1815], [0.0, 0.318, 0.1797], [0.0, 0.3136, 0.178], [0.0, 0.3093, 0.1763], [0.0, 0.305, 0.1746], [0.0, 0.3007, 0.1728], [0.0, 0.2964, 0.1711], [0.0, 0.2921, 0.1694], [0.0, 0.2878, 0.1677], [0.0, 0.2835, 0.166], [0.0, 0.2792, 0.1642], [0.0, 0.2749, 0.1625], [0.0, 0.2706, 0.1608]] }, "YlGnBu": { "interpolate": true, "colors": [[1.0, 1.0, 0.851], [0.9978, 0.9991, 0.8461], [0.9956, 0.9983, 0.8411], [0.9934, 0.9974, 0.8362], [0.9911, 0.9966, 0.8313], [0.9889, 0.9957, 0.8264], [0.9867, 0.9948, 0.8215], [0.9845, 0.994, 0.8165], [0.9823, 0.9931, 0.8116], [0.9801, 0.9922, 0.8067], [0.9779, 0.9914, 0.8018], [0.9756, 0.9905, 0.7968], [0.9734, 0.9897, 0.7919], [0.9712, 0.9888, 0.787], [0.969, 0.9879, 0.7821], [0.9668, 0.9871, 0.7772], [0.9646, 0.9862, 0.7722], [0.9624, 0.9854, 0.7673], [0.9601, 0.9845, 0.7624], [0.9579, 0.9836, 0.7575], [0.9557, 0.9828, 0.7526], [0.9535, 0.9819, 0.7476], [0.9513, 0.9811, 0.7427], [0.9491, 0.9802, 0.7378], [0.9469, 0.9793, 0.7329], [0.9446, 0.9785, 0.728], [0.9424, 0.9776, 0.723], [0.9402, 0.9767, 0.7181], [0.938, 0.9759, 0.7132], [0.9358, 0.975, 0.7083], [0.9336, 0.9742, 0.7033], [0.9313, 0.9733, 0.6984], [0.9288, 0.9723, 0.6942], [0.9242, 0.9705, 0.6945], [0.9195, 0.9686, 0.6949], [0.9148, 0.9668, 0.6953], [0.9101, 0.9649, 0.6956], [0.9055, 0.9631, 0.696], [0.9008, 0.9612, 0.6964], [0.8961, 0.9594, 0.6967], [0.8914, 0.9576, 0.6971], [0.8868, 0.9557, 0.6975], [0.8821, 0.9539, 0.6979], [0.8774, 0.952, 0.6982], [0.8727, 0.9502, 0.6986], [0.8681, 0.9483, 0.699], [0.8634, 0.9465, 0.6993], [0.8587, 0.9446, 0.6997], [0.854, 0.9428, 0.7001], [0.8494, 0.9409, 0.7004], [0.8447, 0.9391, 0.7008], [0.84, 0.9373, 0.7012], [0.8353, 0.9354, 0.7015], [0.8306, 0.9336, 0.7019], [0.826, 0.9317, 0.7023], [0.8213, 0.9299, 0.7027], [0.8166, 0.928, 0.703], [0.8119, 0.9262, 0.7034], [0.8073, 0.9243, 0.7038], [0.8026, 0.9225, 0.7041], [0.7979, 0.9206, 0.7045], [0.7932, 0.9188, 0.7049], [0.7886, 0.917, 0.7052], [0.7839, 0.9151, 0.7056], [0.7782, 0.9129, 0.7061], [0.7693, 0.9094, 0.707], [0.7605, 0.906, 0.7078], [0.7516, 0.9025, 0.7087], [0.7427, 0.8991, 0.7095], [0.7339, 0.8956, 0.7104], [0.725, 0.8922, 0.7113], [0.7162, 0.8888, 0.7121], [0.7073, 0.8853, 0.713], [0.6985, 0.8819, 0.7138], [0.6896, 0.8784, 0.7147], [0.6807, 0.875, 0.7156], [0.6719, 0.8715, 0.7164], [0.663, 0.8681, 0.7173], [0.6542, 0.8646, 0.7182], [0.6453, 0.8612, 0.719], [0.6364, 0.8577, 0.7199], [0.6276, 0.8543, 0.7207], [0.6187, 0.8509, 0.7216], [0.6099, 0.8474, 0.7225], [0.601, 0.844, 0.7233], [0.5922, 0.8405, 0.7242], [0.5833, 0.8371, 0.725], [0.5744, 0.8336, 0.7259], [0.5656, 0.8302, 0.7268], [0.5567, 0.8267, 0.7276], [0.5479, 0.8233, 0.7285], [0.539, 0.8199, 0.7294], [0.5301, 0.8164, 0.7302], [0.5213, 0.813, 0.7311], [0.5124, 0.8095, 0.7319], [0.5036, 0.8061, 0.7328], [0.4952, 0.8029, 0.7337], [0.4876, 0.8, 0.7349], [0.4799, 0.7972, 0.736], [0.4723, 0.7944, 0.7371], [0.4647, 0.7915, 0.7382], [0.457, 0.7887, 0.7393], [0.4494, 0.7859, 0.7404], [0.4418, 0.7831, 0.7415], [0.4342, 0.7802, 0.7426], [0.4265, 0.7774, 0.7437], [0.4189, 0.7746, 0.7448], [0.4113, 0.7717, 0.7459], [0.4036, 0.7689, 0.747], [0.396, 0.7661, 0.7481], [0.3884, 0.7632, 0.7493], [0.3808, 0.7604, 0.7504], [0.3731, 0.7576, 0.7515], [0.3655, 0.7548, 0.7526], [0.3579, 0.7519, 0.7537], [0.3502, 0.7491, 0.7548], [0.3426, 0.7463, 0.7559], [0.335, 0.7434, 0.757], [0.3274, 0.7406, 0.7581], [0.3197, 0.7378, 0.7592], [0.3121, 0.7349, 0.7603], [0.3045, 0.7321, 0.7614], [0.2969, 0.7293, 0.7625], [0.2892, 0.7265, 0.7636], [0.2816, 0.7236, 0.7648], [0.274, 0.7208, 0.7659], [0.2663, 0.718, 0.767], [0.2587, 0.7151, 0.7681], [0.2527, 0.7114, 0.7684], [0.2483, 0.7069, 0.7679], [0.2438, 0.7023, 0.7674], [0.2394, 0.6978, 0.7669], [0.235, 0.6932, 0.7664], [0.2305, 0.6887, 0.7659], [0.2261, 0.6841, 0.7654], [0.2217, 0.6796, 0.7649], [0.2173, 0.675, 0.7644], [0.2128, 0.6705, 0.764], [0.2084, 0.6659, 0.7635], [0.204, 0.6614, 0.763], [0.1995, 0.6568, 0.7625], [0.1951, 0.6523, 0.762], [0.1907, 0.6477, 0.7615], [0.1863, 0.6432, 0.761], [0.1818, 0.6386, 0.7605], [0.1774, 0.6341, 0.76], [0.173, 0.6295, 0.7595], [0.1685, 0.625, 0.759], [0.1641, 0.6204, 0.7585], [0.1597, 0.6159, 0.758], [0.1552, 0.6113, 0.7576], [0.1508, 0.6068, 0.7571], [0.1464, 0.6022, 0.7566], [0.142, 0.5976, 0.7561], [0.1375, 0.5931, 0.7556], [0.1331, 0.5885, 0.7551], [0.1287, 0.584, 0.7546], [0.1242, 0.5794, 0.7541], [0.1198, 0.5749, 0.7536], [0.1154, 0.5703, 0.7531], [0.1141, 0.5647, 0.7511], [0.1147, 0.5584, 0.7481], [0.1153, 0.5522, 0.7452], [0.116, 0.5459, 0.7422], [0.1166, 0.5396, 0.7393], [0.1172, 0.5333, 0.7363], [0.1178, 0.5271, 0.7334], [0.1184, 0.5208, 0.7304], [0.119, 0.5145, 0.7275], [0.1196, 0.5082, 0.7245], [0.1203, 0.502, 0.7216], [0.1209, 0.4957, 0.7186], [0.1215, 0.4894, 0.7157], [0.1221, 0.4831, 0.7127], [0.1227, 0.4769, 0.7098], [0.1233, 0.4706, 0.7068], [0.124, 0.4643, 0.7039], [0.1246, 0.458, 0.7009], [0.1252, 0.4518, 0.6979], [0.1258, 0.4455, 0.695], [0.1264, 0.4392, 0.692], [0.127, 0.4329, 0.6891], [0.1276, 0.4267, 0.6861], [0.1283, 0.4204, 0.6832], [0.1289, 0.4141, 0.6802], [0.1295, 0.4078, 0.6773], [0.1301, 0.4016, 0.6743], [0.1307, 0.3953, 0.6714], [0.1313, 0.389, 0.6684], [0.1319, 0.3827, 0.6655], [0.1326, 0.3765, 0.6625], [0.1332, 0.3702, 0.6596], [0.1336, 0.3648, 0.657], [0.134, 0.3596, 0.6545], [0.1343, 0.3544, 0.6521], [0.1347, 0.3493, 0.6496], [0.1351, 0.3441, 0.6471], [0.1355, 0.3389, 0.6447], [0.1358, 0.3337, 0.6422], [0.1362, 0.3286, 0.6398], [0.1366, 0.3234, 0.6373], [0.1369, 0.3182, 0.6348], [0.1373, 0.3131, 0.6324], [0.1377, 0.3079, 0.6299], [0.138, 0.3027, 0.6275], [0.1384, 0.2976, 0.625], [0.1388, 0.2924, 0.6225], [0.1391, 0.2872, 0.6201], [0.1395, 0.2821, 0.6176], [0.1399, 0.2769, 0.6151], [0.1403, 0.2717, 0.6127], [0.1406, 0.2666, 0.6102], [0.141, 0.2614, 0.6078], [0.1414, 0.2562, 0.6053], [0.1417, 0.2511, 0.6028], [0.1421, 0.2459, 0.6004], [0.1425, 0.2407, 0.5979], [0.1428, 0.2356, 0.5955], [0.1432, 0.2304, 0.593], [0.1436, 0.2252, 0.5905], [0.1439, 0.2201, 0.5881], [0.1443, 0.2149, 0.5856], [0.1447, 0.2097, 0.5832], [0.1451, 0.2046, 0.5807], [0.142, 0.2014, 0.5739], [0.1384, 0.1986, 0.5666], [0.1348, 0.1958, 0.5592], [0.1313, 0.193, 0.5518], [0.1277, 0.1901, 0.5444], [0.1241, 0.1873, 0.537], [0.1206, 0.1845, 0.5296], [0.117, 0.1816, 0.5223], [0.1134, 0.1788, 0.5149], [0.1099, 0.176, 0.5075], [0.1063, 0.1731, 0.5001], [0.1027, 0.1703, 0.4927], [0.0992, 0.1675, 0.4854], [0.0956, 0.1647, 0.478], [0.092, 0.1618, 0.4706], [0.0885, 0.159, 0.4632], [0.0849, 0.1562, 0.4558], [0.0813, 0.1533, 0.4484], [0.0778, 0.1505, 0.4411], [0.0742, 0.1477, 0.4337], [0.0706, 0.1449, 0.4263], [0.0671, 0.142, 0.4189], [0.0635, 0.1392, 0.4115], [0.0599, 0.1364, 0.4042], [0.0563, 0.1335, 0.3968], [0.0528, 0.1307, 0.3894], [0.0492, 0.1279, 0.382], [0.0456, 0.125, 0.3746], [0.0421, 0.1222, 0.3672], [0.0385, 0.1194, 0.3599], [0.0349, 0.1166, 0.3525], [0.0314, 0.1137, 0.3451]] }, "YlOrBr": { "interpolate": true, "colors": [[1.0, 1.0, 0.898], [1.0, 0.999, 0.893], [1.0, 0.998, 0.888], [1.0, 0.997, 0.8829], [1.0, 0.9961, 0.8779], [1.0, 0.9951, 0.8728], [1.0, 0.9941, 0.8678], [1.0, 0.9931, 0.8627], [1.0, 0.9921, 0.8577], [1.0, 0.9911, 0.8526], [1.0, 0.9902, 0.8476], [1.0, 0.9892, 0.8426], [1.0, 0.9882, 0.8375], [1.0, 0.9872, 0.8325], [1.0, 0.9862, 0.8274], [1.0, 0.9852, 0.8224], [1.0, 0.9843, 0.8173], [1.0, 0.9833, 0.8123], [1.0, 0.9823, 0.8072], [1.0, 0.9813, 0.8022], [1.0, 0.9803, 0.7972], [1.0, 0.9793, 0.7921], [1.0, 0.9783, 0.7871], [1.0, 0.9774, 0.782], [1.0, 0.9764, 0.777], [1.0, 0.9754, 0.7719], [1.0, 0.9744, 0.7669], [1.0, 0.9734, 0.7618], [1.0, 0.9724, 0.7568], [1.0, 0.9715, 0.7518], [1.0, 0.9705, 0.7467], [1.0, 0.9695, 0.7417], [1.0, 0.9683, 0.7366], [0.9999, 0.9659, 0.7313], [0.9997, 0.9634, 0.726], [0.9996, 0.9609, 0.7207], [0.9995, 0.9585, 0.7154], [0.9994, 0.956, 0.7101], [0.9992, 0.9536, 0.7049], [0.9991, 0.9511, 0.6996], [0.999, 0.9486, 0.6943], [0.9989, 0.9462, 0.689], [0.9988, 0.9437, 0.6837], [0.9986, 0.9413, 0.6784], [0.9985, 0.9388, 0.6731], [0.9984, 0.9363, 0.6678], [0.9983, 0.9339, 0.6625], [0.9981, 0.9314, 0.6572], [0.998, 0.929, 0.6519], [0.9979, 0.9265, 0.6467], [0.9978, 0.924, 0.6414], [0.9976, 0.9216, 0.6361], [0.9975, 0.9191, 0.6308], [0.9974, 0.9166, 0.6255], [0.9973, 0.9142, 0.6202], [0.9972, 0.9117, 0.6149], [0.997, 0.9093, 0.6096], [0.9969, 0.9068, 0.6043], [0.9968, 0.9043, 0.599], [0.9967, 0.9019, 0.5938], [0.9965, 0.8994, 0.5885], [0.9964, 0.897, 0.5832], [0.9963, 0.8945, 0.5779], [0.9962, 0.892, 0.5726], [0.9961, 0.8892, 0.5666], [0.9961, 0.8854, 0.5585], [0.9961, 0.8816, 0.5504], [0.9961, 0.8778, 0.5422], [0.9961, 0.874, 0.5341], [0.9961, 0.8702, 0.526], [0.9961, 0.8664, 0.5179], [0.9961, 0.8625, 0.5098], [0.9961, 0.8587, 0.5016], [0.9961, 0.8549, 0.4935], [0.9961, 0.8511, 0.4854], [0.9961, 0.8473, 0.4773], [0.9961, 0.8435, 0.4692], [0.9961, 0.8397, 0.461], [0.9961, 0.8358, 0.4529], [0.9961, 0.832, 0.4448], [0.9961, 0.8282, 0.4367], [0.9961, 0.8244, 0.4286], [0.9961, 0.8206, 0.4204], [0.9961, 0.8168, 0.4123], [0.9961, 0.813, 0.4042], [0.9961, 0.8092, 0.3961], [0.9961, 0.8053, 0.388], [0.9961, 0.8015, 0.3798], [0.9961, 0.7977, 0.3717], [0.9961, 0.7939, 0.3636], [0.9961, 0.7901, 0.3555], [0.9961, 0.7863, 0.3474], [0.9961, 0.7825, 0.3392], [0.9961, 0.7786, 0.3311], [0.9961, 0.7748, 0.323], [0.9961, 0.771, 0.3149], [0.9961, 0.7666, 0.3081], [0.9961, 0.7614, 0.3034], [0.9961, 0.7561, 0.2987], [0.9961, 0.7508, 0.294], [0.9961, 0.7455, 0.2894], [0.9961, 0.7402, 0.2847], [0.9961, 0.7349, 0.28], [0.9961, 0.7296, 0.2753], [0.9961, 0.7243, 0.2706], [0.9961, 0.719, 0.266], [0.9961, 0.7137, 0.2613], [0.9961, 0.7085, 0.2566], [0.9961, 0.7032, 0.2519], [0.9961, 0.6979, 0.2473], [0.9961, 0.6926, 0.2426], [0.9961, 0.6873, 0.2379], [0.9961, 0.682, 0.2332], [0.9961, 0.6767, 0.2286], [0.9961, 0.6714, 0.2239], [0.9961, 0.6661, 0.2192], [0.9961, 0.6608, 0.2145], [0.9961, 0.6555, 0.2099], [0.9961, 0.6503, 0.2052], [0.9961, 0.645, 0.2005], [0.9961, 0.6397, 0.1958], [0.9961, 0.6344, 0.1912], [0.9961, 0.6291, 0.1865], [0.9961, 0.6238, 0.1818], [0.9961, 0.6185, 0.1771], [0.9961, 0.6132, 0.1725], [0.9961, 0.6079, 0.1678], [0.9961, 0.6026, 0.1631], [0.995, 0.5975, 0.1595], [0.9928, 0.5924, 0.1569], [0.9905, 0.5874, 0.1543], [0.9883, 0.5823, 0.1517], [0.9861, 0.5773, 0.1492], [0.9839, 0.5723, 0.1466], [0.9817, 0.5672, 0.144], [0.9795, 0.5622, 0.1414], [0.9773, 0.5571, 0.1388], [0.975, 0.5521, 0.1362], [0.9728, 0.547, 0.1337], [0.9706, 0.542, 0.1311], [0.9684, 0.5369, 0.1285], [0.9662, 0.5319, 0.1259], [0.964, 0.5269, 0.1233], [0.9618, 0.5218, 0.1207], [0.9595, 0.5168, 0.1182], [0.9573, 0.5117, 0.1156], [0.9551, 0.5067, 0.113], [0.9529, 0.5016, 0.1104], [0.9507, 0.4966, 0.1078], [0.9485, 0.4915, 0.1052], [0.9463, 0.4865, 0.1027], [0.944, 0.4815, 0.1001], [0.9418, 0.4764, 0.0975], [0.9396, 0.4714, 0.0949], [0.9374, 0.4663, 0.0923], [0.9352, 0.4613, 0.0897], [0.933, 0.4562, 0.0872], [0.9307, 0.4512, 0.0846], [0.9285, 0.4462, 0.082], [0.9263, 0.4411, 0.0794], [0.923, 0.4364, 0.077], [0.9191, 0.432, 0.0748], [0.9152, 0.4276, 0.0726], [0.9112, 0.4232, 0.0704], [0.9073, 0.4187, 0.0682], [0.9033, 0.4143, 0.066], [0.8994, 0.4099, 0.0638], [0.8955, 0.4054, 0.0615], [0.8915, 0.401, 0.0593], [0.8876, 0.3966, 0.0571], [0.8837, 0.3922, 0.0549], [0.8797, 0.3877, 0.0527], [0.8758, 0.3833, 0.0505], [0.8718, 0.3789, 0.0483], [0.8679, 0.3744, 0.046], [0.864, 0.37, 0.0438], [0.86, 0.3656, 0.0416], [0.8561, 0.3612, 0.0394], [0.8522, 0.3567, 0.0372], [0.8482, 0.3523, 0.035], [0.8443, 0.3479, 0.0328], [0.8404, 0.3434, 0.0305], [0.8364, 0.339, 0.0283], [0.8325, 0.3346, 0.0261], [0.8285, 0.3301, 0.0239], [0.8246, 0.3257, 0.0217], [0.8207, 0.3213, 0.0195], [0.8167, 0.3169, 0.0173], [0.8128, 0.3124, 0.015], [0.8089, 0.308, 0.0128], [0.8049, 0.3036, 0.0106], [0.801, 0.2991, 0.0084], [0.7953, 0.2958, 0.008], [0.789, 0.2929, 0.0083], [0.7827, 0.2899, 0.0085], [0.7765, 0.287, 0.0088], [0.7702, 0.284, 0.009], [0.7639, 0.2811, 0.0093], [0.7576, 0.2781, 0.0095], [0.7514, 0.2752, 0.0098], [0.7451, 0.2722, 0.01], [0.7388, 0.2693, 0.0102], [0.7325, 0.2663, 0.0105], [0.7263, 0.2633, 0.0107], [0.72, 0.2604, 0.011], [0.7137, 0.2574, 0.0112], [0.7075, 0.2545, 0.0115], [0.7012, 0.2515, 0.0117], [0.6949, 0.2486, 0.012], [0.6886, 0.2456, 0.0122], [0.6824, 0.2427, 0.0125], [0.6761, 0.2397, 0.0127], [0.6698, 0.2368, 0.0129], [0.6635, 0.2338, 0.0132], [0.6573, 0.2309, 0.0134], [0.651, 0.2279, 0.0137], [0.6447, 0.225, 0.0139], [0.6384, 0.222, 0.0142], [0.6322, 0.2191, 0.0144], [0.6259, 0.2161, 0.0147], [0.6196, 0.2131, 0.0149], [0.6133, 0.2102, 0.0152], [0.6071, 0.2072, 0.0154], [0.6008, 0.2043, 0.0157], [0.5945, 0.2023, 0.0159], [0.5882, 0.2005, 0.0161], [0.582, 0.1986, 0.0164], [0.5757, 0.1968, 0.0166], [0.5694, 0.1949, 0.0169], [0.5631, 0.1931, 0.0171], [0.5569, 0.1912, 0.0174], [0.5506, 0.1894, 0.0176], [0.5443, 0.1875, 0.0179], [0.538, 0.1857, 0.0181], [0.5318, 0.1839, 0.0184], [0.5255, 0.182, 0.0186], [0.5192, 0.1802, 0.0189], [0.5129, 0.1783, 0.0191], [0.5067, 0.1765, 0.0193], [0.5004, 0.1746, 0.0196], [0.4941, 0.1728, 0.0198], [0.4878, 0.1709, 0.0201], [0.4816, 0.1691, 0.0203], [0.4753, 0.1672, 0.0206], [0.469, 0.1654, 0.0208], [0.4627, 0.1636, 0.0211], [0.4565, 0.1617, 0.0213], [0.4502, 0.1599, 0.0216], [0.4439, 0.158, 0.0218], [0.4376, 0.1562, 0.0221], [0.4314, 0.1543, 0.0223], [0.4251, 0.1525, 0.0225], [0.4188, 0.1506, 0.0228], [0.4125, 0.1488, 0.023], [0.4063, 0.1469, 0.0233], [0.4, 0.1451, 0.0235]] }, "YlOrRd": { "interpolate": true, "colors": [[1.0, 1.0, 0.8], [1.0, 0.9978, 0.7946], [1.0, 0.9956, 0.7892], [1.0, 0.9934, 0.7838], [1.0, 0.9911, 0.7783], [1.0, 0.9889, 0.7729], [1.0, 0.9867, 0.7675], [1.0, 0.9845, 0.7621], [1.0, 0.9823, 0.7567], [1.0, 0.9801, 0.7513], [1.0, 0.9779, 0.7459], [1.0, 0.9756, 0.7405], [1.0, 0.9734, 0.735], [1.0, 0.9712, 0.7296], [1.0, 0.969, 0.7242], [1.0, 0.9668, 0.7188], [1.0, 0.9646, 0.7134], [1.0, 0.9624, 0.708], [1.0, 0.9601, 0.7026], [1.0, 0.9579, 0.6971], [1.0, 0.9557, 0.6917], [1.0, 0.9535, 0.6863], [1.0, 0.9513, 0.6809], [1.0, 0.9491, 0.6755], [1.0, 0.9469, 0.6701], [1.0, 0.9446, 0.6647], [1.0, 0.9424, 0.6593], [1.0, 0.9402, 0.6538], [1.0, 0.938, 0.6484], [1.0, 0.9358, 0.643], [1.0, 0.9336, 0.6376], [1.0, 0.9313, 0.6322], [1.0, 0.9291, 0.6268], [0.9999, 0.9266, 0.6216], [0.9997, 0.9242, 0.6165], [0.9996, 0.9217, 0.6113], [0.9995, 0.9193, 0.6061], [0.9994, 0.9168, 0.601], [0.9992, 0.9143, 0.5958], [0.9991, 0.9119, 0.5906], [0.999, 0.9094, 0.5855], [0.9989, 0.907, 0.5803], [0.9988, 0.9045, 0.5751], [0.9986, 0.902, 0.57], [0.9985, 0.8996, 0.5648], [0.9984, 0.8971, 0.5596], [0.9983, 0.8947, 0.5545], [0.9981, 0.8922, 0.5493], [0.998, 0.8897, 0.5441], [0.9979, 0.8873, 0.539], [0.9978, 0.8848, 0.5338], [0.9976, 0.8824, 0.5286], [0.9975, 0.8799, 0.5235], [0.9974, 0.8774, 0.5183], [0.9973, 0.875, 0.5131], [0.9972, 0.8725, 0.508], [0.997, 0.87, 0.5028], [0.9969, 0.8676, 0.4976], [0.9968, 0.8651, 0.4925], [0.9967, 0.8627, 0.4873], [0.9965, 0.8602, 0.4821], [0.9964, 0.8577, 0.477], [0.9963, 0.8553, 0.4718], [0.9962, 0.8528, 0.4666], [0.9961, 0.8498, 0.4615], [0.9961, 0.845, 0.4563], [0.9961, 0.8402, 0.4511], [0.9961, 0.8354, 0.446], [0.9961, 0.8306, 0.4408], [0.9961, 0.8258, 0.4356], [0.9961, 0.821, 0.4304], [0.9961, 0.8162, 0.4253], [0.9961, 0.8114, 0.4201], [0.9961, 0.8066, 0.4149], [0.9961, 0.8018, 0.4098], [0.9961, 0.797, 0.4046], [0.9961, 0.7922, 0.3994], [0.9961, 0.7874, 0.3943], [0.9961, 0.7826, 0.3891], [0.9961, 0.7778, 0.3839], [0.9961, 0.773, 0.3788], [0.9961, 0.7682, 0.3736], [0.9961, 0.7634, 0.3684], [0.9961, 0.7586, 0.3633], [0.9961, 0.7538, 0.3581], [0.9961, 0.749, 0.3529], [0.9961, 0.7442, 0.3478], [0.9961, 0.7394, 0.3426], [0.9961, 0.7346, 0.3374], [0.9961, 0.7298, 0.3323], [0.9961, 0.725, 0.3271], [0.9961, 0.7202, 0.3219], [0.9961, 0.7154, 0.3168], [0.9961, 0.7106, 0.3116], [0.9961, 0.7058, 0.3064], [0.9961, 0.701, 0.3013], [0.996, 0.6963, 0.2973], [0.9959, 0.6918, 0.2953], [0.9958, 0.6872, 0.2934], [0.9957, 0.6827, 0.2914], [0.9955, 0.6781, 0.2894], [0.9954, 0.6736, 0.2875], [0.9953, 0.669, 0.2855], [0.9952, 0.6645, 0.2835], [0.995, 0.6599, 0.2816], [0.9949, 0.6554, 0.2796], [0.9948, 0.6508, 0.2776], [0.9947, 0.6463, 0.2756], [0.9946, 0.6417, 0.2737], [0.9944, 0.6372, 0.2717], [0.9943, 0.6326, 0.2697], [0.9942, 0.6281, 0.2678], [0.9941, 0.6235, 0.2658], [0.9939, 0.6189, 0.2638], [0.9938, 0.6144, 0.2619], [0.9937, 0.6098, 0.2599], [0.9936, 0.6053, 0.2579], [0.9934, 0.6007, 0.256], [0.9933, 0.5962, 0.254], [0.9932, 0.5916, 0.252], [0.9931, 0.5871, 0.2501], [0.993, 0.5825, 0.2481], [0.9928, 0.578, 0.2461], [0.9927, 0.5734, 0.2442], [0.9926, 0.5689, 0.2422], [0.9925, 0.5643, 0.2402], [0.9923, 0.5598, 0.2382], [0.9922, 0.5552, 0.2363], [0.9921, 0.5491, 0.2342], [0.992, 0.5413, 0.232], [0.9918, 0.5336, 0.2298], [0.9917, 0.5258, 0.2275], [0.9916, 0.5181, 0.2253], [0.9915, 0.5103, 0.2231], [0.9914, 0.5026, 0.2209], [0.9912, 0.4948, 0.2187], [0.9911, 0.4871, 0.2165], [0.991, 0.4793, 0.2143], [0.9909, 0.4716, 0.212], [0.9907, 0.4638, 0.2098], [0.9906, 0.4561, 0.2076], [0.9905, 0.4483, 0.2054], [0.9904, 0.4406, 0.2032], [0.9902, 0.4328, 0.201], [0.9901, 0.4251, 0.1988], [0.99, 0.4173, 0.1965], [0.9899, 0.4096, 0.1943], [0.9898, 0.4018, 0.1921], [0.9896, 0.394, 0.1899], [0.9895, 0.3863, 0.1877], [0.9894, 0.3785, 0.1855], [0.9893, 0.3708, 0.1833], [0.9891, 0.363, 0.181], [0.989, 0.3553, 0.1788], [0.9889, 0.3475, 0.1766], [0.9888, 0.3398, 0.1744], [0.9887, 0.332, 0.1722], [0.9885, 0.3243, 0.17], [0.9884, 0.3165, 0.1678], [0.9883, 0.3088, 0.1655], [0.9863, 0.3019, 0.1636], [0.9832, 0.2955, 0.1619], [0.9802, 0.2891, 0.1602], [0.9771, 0.2827, 0.1585], [0.974, 0.2763, 0.1567], [0.9709, 0.2699, 0.155], [0.9679, 0.2635, 0.1533], [0.9648, 0.2571, 0.1516], [0.9617, 0.2507, 0.1499], [0.9586, 0.2443, 0.1481], [0.9556, 0.2379, 0.1464], [0.9525, 0.2315, 0.1447], [0.9494, 0.2251, 0.143], [0.9463, 0.2187, 0.1412], [0.9433, 0.2123, 0.1395], [0.9402, 0.2059, 0.1378], [0.9371, 0.1995, 0.1361], [0.934, 0.1931, 0.1343], [0.9309, 0.1867, 0.1326], [0.9279, 0.1803, 0.1309], [0.9248, 0.1739, 0.1292], [0.9217, 0.1675, 0.1275], [0.9186, 0.1611, 0.1257], [0.9156, 0.1547, 0.124], [0.9125, 0.1483, 0.1223], [0.9094, 0.1419, 0.1206], [0.9063, 0.1355, 0.1188], [0.9033, 0.1292, 0.1171], [0.9002, 0.1228, 0.1154], [0.8971, 0.1164, 0.1137], [0.894, 0.11, 0.112], [0.891, 0.1036, 0.1102], [0.8867, 0.0996, 0.1107], [0.882, 0.0964, 0.112], [0.8773, 0.0932, 0.1132], [0.8727, 0.09, 0.1144], [0.868, 0.0868, 0.1156], [0.8633, 0.0836, 0.1169], [0.8586, 0.0804, 0.1181], [0.854, 0.0772, 0.1193], [0.8493, 0.074, 0.1206], [0.8446, 0.0708, 0.1218], [0.8399, 0.0676, 0.123], [0.8353, 0.0644, 0.1243], [0.8306, 0.0612, 0.1255], [0.8259, 0.058, 0.1267], [0.8212, 0.0548, 0.128], [0.8166, 0.0516, 0.1292], [0.8119, 0.0484, 0.1304], [0.8072, 0.0452, 0.1316], [0.8025, 0.042, 0.1329], [0.7979, 0.0388, 0.1341], [0.7932, 0.0356, 0.1353], [0.7885, 0.0324, 0.1366], [0.7838, 0.0292, 0.1378], [0.7792, 0.026, 0.139], [0.7745, 0.0228, 0.1403], [0.7698, 0.0196, 0.1415], [0.7651, 0.0164, 0.1427], [0.7605, 0.0132, 0.1439], [0.7558, 0.01, 0.1452], [0.7511, 0.0068, 0.1464], [0.7464, 0.0036, 0.1476], [0.7418, 0.0004, 0.1489], [0.7346, 0.0, 0.149], [0.7271, 0.0, 0.149], [0.7196, 0.0, 0.149], [0.7121, 0.0, 0.149], [0.7046, 0.0, 0.149], [0.6971, 0.0, 0.149], [0.6896, 0.0, 0.149], [0.6821, 0.0, 0.149], [0.6746, 0.0, 0.149], [0.6671, 0.0, 0.149], [0.6596, 0.0, 0.149], [0.6521, 0.0, 0.149], [0.6446, 0.0, 0.149], [0.637, 0.0, 0.149], [0.6295, 0.0, 0.149], [0.622, 0.0, 0.149], [0.6145, 0.0, 0.149], [0.607, 0.0, 0.149], [0.5995, 0.0, 0.149], [0.592, 0.0, 0.149], [0.5845, 0.0, 0.149], [0.577, 0.0, 0.149], [0.5695, 0.0, 0.149], [0.562, 0.0, 0.149], [0.5545, 0.0, 0.149], [0.547, 0.0, 0.149], [0.5395, 0.0, 0.149], [0.532, 0.0, 0.149], [0.5245, 0.0, 0.149], [0.517, 0.0, 0.149], [0.5095, 0.0, 0.149], [0.502, 0.0, 0.149]] }, "afmhot": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0078, 0.0, 0.0], [0.0157, 0.0, 0.0], [0.0235, 0.0, 0.0], [0.0314, 0.0, 0.0], [0.0392, 0.0, 0.0], [0.0471, 0.0, 0.0], [0.0549, 0.0, 0.0], [0.0627, 0.0, 0.0], [0.0706, 0.0, 0.0], [0.0784, 0.0, 0.0], [0.0863, 0.0, 0.0], [0.0941, 0.0, 0.0], [0.102, 0.0, 0.0], [0.1098, 0.0, 0.0], [0.1176, 0.0, 0.0], [0.1255, 0.0, 0.0], [0.1333, 0.0, 0.0], [0.1412, 0.0, 0.0], [0.149, 0.0, 0.0], [0.1569, 0.0, 0.0], [0.1647, 0.0, 0.0], [0.1725, 0.0, 0.0], [0.1804, 0.0, 0.0], [0.1882, 0.0, 0.0], [0.1961, 0.0, 0.0], [0.2039, 0.0, 0.0], [0.2118, 0.0, 0.0], [0.2196, 0.0, 0.0], [0.2275, 0.0, 0.0], [0.2353, 0.0, 0.0], [0.2431, 0.0, 0.0], [0.251, 0.0, 0.0], [0.2588, 0.0, 0.0], [0.2667, 0.0, 0.0], [0.2745, 0.0, 0.0], [0.2824, 0.0, 0.0], [0.2902, 0.0, 0.0], [0.298, 0.0, 0.0], [0.3059, 0.0, 0.0], [0.3137, 0.0, 0.0], [0.3216, 0.0, 0.0], [0.3294, 0.0, 0.0], [0.3373, 0.0, 0.0], [0.3451, 0.0, 0.0], [0.3529, 0.0, 0.0], [0.3608, 0.0, 0.0], [0.3686, 0.0, 0.0], [0.3765, 0.0, 0.0], [0.3843, 0.0, 0.0], [0.3922, 0.0, 0.0], [0.4, 0.0, 0.0], [0.4078, 0.0, 0.0], [0.4157, 0.0, 0.0], [0.4235, 0.0, 0.0], [0.4314, 0.0, 0.0], [0.4392, 0.0, 0.0], [0.4471, 0.0, 0.0], [0.4549, 0.0, 0.0], [0.4627, 0.0, 0.0], [0.4706, 0.0, 0.0], [0.4784, 0.0, 0.0], [0.4863, 0.0, 0.0], [0.4941, 0.0, 0.0], [0.502, 0.002, 0.0], [0.5098, 0.0098, 0.0], [0.5176, 0.0176, 0.0], [0.5255, 0.0255, 0.0], [0.5333, 0.0333, 0.0], [0.5412, 0.0412, 0.0], [0.549, 0.049, 0.0], [0.5569, 0.0569, 0.0], [0.5647, 0.0647, 0.0], [0.5725, 0.0725, 0.0], [0.5804, 0.0804, 0.0], [0.5882, 0.0882, 0.0], [0.5961, 0.0961, 0.0], [0.6039, 0.1039, 0.0], [0.6118, 0.1118, 0.0], [0.6196, 0.1196, 0.0], [0.6275, 0.1275, 0.0], [0.6353, 0.1353, 0.0], [0.6431, 0.1431, 0.0], [0.651, 0.151, 0.0], [0.6588, 0.1588, 0.0], [0.6667, 0.1667, 0.0], [0.6745, 0.1745, 0.0], [0.6824, 0.1824, 0.0], [0.6902, 0.1902, 0.0], [0.698, 0.198, 0.0], [0.7059, 0.2059, 0.0], [0.7137, 0.2137, 0.0], [0.7216, 0.2216, 0.0], [0.7294, 0.2294, 0.0], [0.7373, 0.2373, 0.0], [0.7451, 0.2451, 0.0], [0.7529, 0.2529, 0.0], [0.7608, 0.2608, 0.0], [0.7686, 0.2686, 0.0], [0.7765, 0.2765, 0.0], [0.7843, 0.2843, 0.0], [0.7922, 0.2922, 0.0], [0.8, 0.3, 0.0], [0.8078, 0.3078, 0.0], [0.8157, 0.3157, 0.0], [0.8235, 0.3235, 0.0], [0.8314, 0.3314, 0.0], [0.8392, 0.3392, 0.0], [0.8471, 0.3471, 0.0], [0.8549, 0.3549, 0.0], [0.8627, 0.3627, 0.0], [0.8706, 0.3706, 0.0], [0.8784, 0.3784, 0.0], [0.8863, 0.3863, 0.0], [0.8941, 0.3941, 0.0], [0.902, 0.402, 0.0], [0.9098, 0.4098, 0.0], [0.9176, 0.4176, 0.0], [0.9255, 0.4255, 0.0], [0.9333, 0.4333, 0.0], [0.9412, 0.4412, 0.0], [0.949, 0.449, 0.0], [0.9569, 0.4569, 0.0], [0.9647, 0.4647, 0.0], [0.9725, 0.4725, 0.0], [0.9804, 0.4804, 0.0], [0.9882, 0.4882, 0.0], [0.9961, 0.4961, 0.0], [1.0, 0.5039, 0.0039], [1.0, 0.5118, 0.0118], [1.0, 0.5196, 0.0196], [1.0, 0.5275, 0.0275], [1.0, 0.5353, 0.0353], [1.0, 0.5431, 0.0431], [1.0, 0.551, 0.051], [1.0, 0.5588, 0.0588], [1.0, 0.5667, 0.0667], [1.0, 0.5745, 0.0745], [1.0, 0.5824, 0.0824], [1.0, 0.5902, 0.0902], [1.0, 0.598, 0.098], [1.0, 0.6059, 0.1059], [1.0, 0.6137, 0.1137], [1.0, 0.6216, 0.1216], [1.0, 0.6294, 0.1294], [1.0, 0.6373, 0.1373], [1.0, 0.6451, 0.1451], [1.0, 0.6529, 0.1529], [1.0, 0.6608, 0.1608], [1.0, 0.6686, 0.1686], [1.0, 0.6765, 0.1765], [1.0, 0.6843, 0.1843], [1.0, 0.6922, 0.1922], [1.0, 0.7, 0.2], [1.0, 0.7078, 0.2078], [1.0, 0.7157, 0.2157], [1.0, 0.7235, 0.2235], [1.0, 0.7314, 0.2314], [1.0, 0.7392, 0.2392], [1.0, 0.7471, 0.2471], [1.0, 0.7549, 0.2549], [1.0, 0.7627, 0.2627], [1.0, 0.7706, 0.2706], [1.0, 0.7784, 0.2784], [1.0, 0.7863, 0.2863], [1.0, 0.7941, 0.2941], [1.0, 0.802, 0.302], [1.0, 0.8098, 0.3098], [1.0, 0.8176, 0.3176], [1.0, 0.8255, 0.3255], [1.0, 0.8333, 0.3333], [1.0, 0.8412, 0.3412], [1.0, 0.849, 0.349], [1.0, 0.8569, 0.3569], [1.0, 0.8647, 0.3647], [1.0, 0.8725, 0.3725], [1.0, 0.8804, 0.3804], [1.0, 0.8882, 0.3882], [1.0, 0.8961, 0.3961], [1.0, 0.9039, 0.4039], [1.0, 0.9118, 0.4118], [1.0, 0.9196, 0.4196], [1.0, 0.9275, 0.4275], [1.0, 0.9353, 0.4353], [1.0, 0.9431, 0.4431], [1.0, 0.951, 0.451], [1.0, 0.9588, 0.4588], [1.0, 0.9667, 0.4667], [1.0, 0.9745, 0.4745], [1.0, 0.9824, 0.4824], [1.0, 0.9902, 0.4902], [1.0, 0.998, 0.498], [1.0, 1.0, 0.5059], [1.0, 1.0, 0.5137], [1.0, 1.0, 0.5216], [1.0, 1.0, 0.5294], [1.0, 1.0, 0.5373], [1.0, 1.0, 0.5451], [1.0, 1.0, 0.5529], [1.0, 1.0, 0.5608], [1.0, 1.0, 0.5686], [1.0, 1.0, 0.5765], [1.0, 1.0, 0.5843], [1.0, 1.0, 0.5922], [1.0, 1.0, 0.6], [1.0, 1.0, 0.6078], [1.0, 1.0, 0.6157], [1.0, 1.0, 0.6235], [1.0, 1.0, 0.6314], [1.0, 1.0, 0.6392], [1.0, 1.0, 0.6471], [1.0, 1.0, 0.6549], [1.0, 1.0, 0.6627], [1.0, 1.0, 0.6706], [1.0, 1.0, 0.6784], [1.0, 1.0, 0.6863], [1.0, 1.0, 0.6941], [1.0, 1.0, 0.702], [1.0, 1.0, 0.7098], [1.0, 1.0, 0.7176], [1.0, 1.0, 0.7255], [1.0, 1.0, 0.7333], [1.0, 1.0, 0.7412], [1.0, 1.0, 0.749], [1.0, 1.0, 0.7569], [1.0, 1.0, 0.7647], [1.0, 1.0, 0.7725], [1.0, 1.0, 0.7804], [1.0, 1.0, 0.7882], [1.0, 1.0, 0.7961], [1.0, 1.0, 0.8039], [1.0, 1.0, 0.8118], [1.0, 1.0, 0.8196], [1.0, 1.0, 0.8275], [1.0, 1.0, 0.8353], [1.0, 1.0, 0.8431], [1.0, 1.0, 0.851], [1.0, 1.0, 0.8588], [1.0, 1.0, 0.8667], [1.0, 1.0, 0.8745], [1.0, 1.0, 0.8824], [1.0, 1.0, 0.8902], [1.0, 1.0, 0.898], [1.0, 1.0, 0.9059], [1.0, 1.0, 0.9137], [1.0, 1.0, 0.9216], [1.0, 1.0, 0.9294], [1.0, 1.0, 0.9373], [1.0, 1.0, 0.9451], [1.0, 1.0, 0.9529], [1.0, 1.0, 0.9608], [1.0, 1.0, 0.9686], [1.0, 1.0, 0.9765], [1.0, 1.0, 0.9843], [1.0, 1.0, 0.9922], [1.0, 1.0, 1.0]] }, "autumn": { "interpolate": true, "colors": [[1.0, 0.0, 0.0], [1.0, 0.0039, 0.0], [1.0, 0.0078, 0.0], [1.0, 0.0118, 0.0], [1.0, 0.0157, 0.0], [1.0, 0.0196, 0.0], [1.0, 0.0235, 0.0], [1.0, 0.0275, 0.0], [1.0, 0.0314, 0.0], [1.0, 0.0353, 0.0], [1.0, 0.0392, 0.0], [1.0, 0.0431, 0.0], [1.0, 0.0471, 0.0], [1.0, 0.051, 0.0], [1.0, 0.0549, 0.0], [1.0, 0.0588, 0.0], [1.0, 0.0627, 0.0], [1.0, 0.0667, 0.0], [1.0, 0.0706, 0.0], [1.0, 0.0745, 0.0], [1.0, 0.0784, 0.0], [1.0, 0.0824, 0.0], [1.0, 0.0863, 0.0], [1.0, 0.0902, 0.0], [1.0, 0.0941, 0.0], [1.0, 0.098, 0.0], [1.0, 0.102, 0.0], [1.0, 0.1059, 0.0], [1.0, 0.1098, 0.0], [1.0, 0.1137, 0.0], [1.0, 0.1176, 0.0], [1.0, 0.1216, 0.0], [1.0, 0.1255, 0.0], [1.0, 0.1294, 0.0], [1.0, 0.1333, 0.0], [1.0, 0.1373, 0.0], [1.0, 0.1412, 0.0], [1.0, 0.1451, 0.0], [1.0, 0.149, 0.0], [1.0, 0.1529, 0.0], [1.0, 0.1569, 0.0], [1.0, 0.1608, 0.0], [1.0, 0.1647, 0.0], [1.0, 0.1686, 0.0], [1.0, 0.1725, 0.0], [1.0, 0.1765, 0.0], [1.0, 0.1804, 0.0], [1.0, 0.1843, 0.0], [1.0, 0.1882, 0.0], [1.0, 0.1922, 0.0], [1.0, 0.1961, 0.0], [1.0, 0.2, 0.0], [1.0, 0.2039, 0.0], [1.0, 0.2078, 0.0], [1.0, 0.2118, 0.0], [1.0, 0.2157, 0.0], [1.0, 0.2196, 0.0], [1.0, 0.2235, 0.0], [1.0, 0.2275, 0.0], [1.0, 0.2314, 0.0], [1.0, 0.2353, 0.0], [1.0, 0.2392, 0.0], [1.0, 0.2431, 0.0], [1.0, 0.2471, 0.0], [1.0, 0.251, 0.0], [1.0, 0.2549, 0.0], [1.0, 0.2588, 0.0], [1.0, 0.2627, 0.0], [1.0, 0.2667, 0.0], [1.0, 0.2706, 0.0], [1.0, 0.2745, 0.0], [1.0, 0.2784, 0.0], [1.0, 0.2824, 0.0], [1.0, 0.2863, 0.0], [1.0, 0.2902, 0.0], [1.0, 0.2941, 0.0], [1.0, 0.298, 0.0], [1.0, 0.302, 0.0], [1.0, 0.3059, 0.0], [1.0, 0.3098, 0.0], [1.0, 0.3137, 0.0], [1.0, 0.3176, 0.0], [1.0, 0.3216, 0.0], [1.0, 0.3255, 0.0], [1.0, 0.3294, 0.0], [1.0, 0.3333, 0.0], [1.0, 0.3373, 0.0], [1.0, 0.3412, 0.0], [1.0, 0.3451, 0.0], [1.0, 0.349, 0.0], [1.0, 0.3529, 0.0], [1.0, 0.3569, 0.0], [1.0, 0.3608, 0.0], [1.0, 0.3647, 0.0], [1.0, 0.3686, 0.0], [1.0, 0.3725, 0.0], [1.0, 0.3765, 0.0], [1.0, 0.3804, 0.0], [1.0, 0.3843, 0.0], [1.0, 0.3882, 0.0], [1.0, 0.3922, 0.0], [1.0, 0.3961, 0.0], [1.0, 0.4, 0.0], [1.0, 0.4039, 0.0], [1.0, 0.4078, 0.0], [1.0, 0.4118, 0.0], [1.0, 0.4157, 0.0], [1.0, 0.4196, 0.0], [1.0, 0.4235, 0.0], [1.0, 0.4275, 0.0], [1.0, 0.4314, 0.0], [1.0, 0.4353, 0.0], [1.0, 0.4392, 0.0], [1.0, 0.4431, 0.0], [1.0, 0.4471, 0.0], [1.0, 0.451, 0.0], [1.0, 0.4549, 0.0], [1.0, 0.4588, 0.0], [1.0, 0.4627, 0.0], [1.0, 0.4667, 0.0], [1.0, 0.4706, 0.0], [1.0, 0.4745, 0.0], [1.0, 0.4784, 0.0], [1.0, 0.4824, 0.0], [1.0, 0.4863, 0.0], [1.0, 0.4902, 0.0], [1.0, 0.4941, 0.0], [1.0, 0.498, 0.0], [1.0, 0.502, 0.0], [1.0, 0.5059, 0.0], [1.0, 0.5098, 0.0], [1.0, 0.5137, 0.0], [1.0, 0.5176, 0.0], [1.0, 0.5216, 0.0], [1.0, 0.5255, 0.0], [1.0, 0.5294, 0.0], [1.0, 0.5333, 0.0], [1.0, 0.5373, 0.0], [1.0, 0.5412, 0.0], [1.0, 0.5451, 0.0], [1.0, 0.549, 0.0], [1.0, 0.5529, 0.0], [1.0, 0.5569, 0.0], [1.0, 0.5608, 0.0], [1.0, 0.5647, 0.0], [1.0, 0.5686, 0.0], [1.0, 0.5725, 0.0], [1.0, 0.5765, 0.0], [1.0, 0.5804, 0.0], [1.0, 0.5843, 0.0], [1.0, 0.5882, 0.0], [1.0, 0.5922, 0.0], [1.0, 0.5961, 0.0], [1.0, 0.6, 0.0], [1.0, 0.6039, 0.0], [1.0, 0.6078, 0.0], [1.0, 0.6118, 0.0], [1.0, 0.6157, 0.0], [1.0, 0.6196, 0.0], [1.0, 0.6235, 0.0], [1.0, 0.6275, 0.0], [1.0, 0.6314, 0.0], [1.0, 0.6353, 0.0], [1.0, 0.6392, 0.0], [1.0, 0.6431, 0.0], [1.0, 0.6471, 0.0], [1.0, 0.651, 0.0], [1.0, 0.6549, 0.0], [1.0, 0.6588, 0.0], [1.0, 0.6627, 0.0], [1.0, 0.6667, 0.0], [1.0, 0.6706, 0.0], [1.0, 0.6745, 0.0], [1.0, 0.6784, 0.0], [1.0, 0.6824, 0.0], [1.0, 0.6863, 0.0], [1.0, 0.6902, 0.0], [1.0, 0.6941, 0.0], [1.0, 0.698, 0.0], [1.0, 0.702, 0.0], [1.0, 0.7059, 0.0], [1.0, 0.7098, 0.0], [1.0, 0.7137, 0.0], [1.0, 0.7176, 0.0], [1.0, 0.7216, 0.0], [1.0, 0.7255, 0.0], [1.0, 0.7294, 0.0], [1.0, 0.7333, 0.0], [1.0, 0.7373, 0.0], [1.0, 0.7412, 0.0], [1.0, 0.7451, 0.0], [1.0, 0.749, 0.0], [1.0, 0.7529, 0.0], [1.0, 0.7569, 0.0], [1.0, 0.7608, 0.0], [1.0, 0.7647, 0.0], [1.0, 0.7686, 0.0], [1.0, 0.7725, 0.0], [1.0, 0.7765, 0.0], [1.0, 0.7804, 0.0], [1.0, 0.7843, 0.0], [1.0, 0.7882, 0.0], [1.0, 0.7922, 0.0], [1.0, 0.7961, 0.0], [1.0, 0.8, 0.0], [1.0, 0.8039, 0.0], [1.0, 0.8078, 0.0], [1.0, 0.8118, 0.0], [1.0, 0.8157, 0.0], [1.0, 0.8196, 0.0], [1.0, 0.8235, 0.0], [1.0, 0.8275, 0.0], [1.0, 0.8314, 0.0], [1.0, 0.8353, 0.0], [1.0, 0.8392, 0.0], [1.0, 0.8431, 0.0], [1.0, 0.8471, 0.0], [1.0, 0.851, 0.0], [1.0, 0.8549, 0.0], [1.0, 0.8588, 0.0], [1.0, 0.8627, 0.0], [1.0, 0.8667, 0.0], [1.0, 0.8706, 0.0], [1.0, 0.8745, 0.0], [1.0, 0.8784, 0.0], [1.0, 0.8824, 0.0], [1.0, 0.8863, 0.0], [1.0, 0.8902, 0.0], [1.0, 0.8941, 0.0], [1.0, 0.898, 0.0], [1.0, 0.902, 0.0], [1.0, 0.9059, 0.0], [1.0, 0.9098, 0.0], [1.0, 0.9137, 0.0], [1.0, 0.9176, 0.0], [1.0, 0.9216, 0.0], [1.0, 0.9255, 0.0], [1.0, 0.9294, 0.0], [1.0, 0.9333, 0.0], [1.0, 0.9373, 0.0], [1.0, 0.9412, 0.0], [1.0, 0.9451, 0.0], [1.0, 0.949, 0.0], [1.0, 0.9529, 0.0], [1.0, 0.9569, 0.0], [1.0, 0.9608, 0.0], [1.0, 0.9647, 0.0], [1.0, 0.9686, 0.0], [1.0, 0.9725, 0.0], [1.0, 0.9765, 0.0], [1.0, 0.9804, 0.0], [1.0, 0.9843, 0.0], [1.0, 0.9882, 0.0], [1.0, 0.9922, 0.0], [1.0, 0.9961, 0.0], [1.0, 1.0, 0.0]] }, "binary": { "interpolate": true, "colors": [[1.0, 1.0, 1.0], [0.9961, 0.9961, 0.9961], [0.9922, 0.9922, 0.9922], [0.9882, 0.9882, 0.9882], [0.9843, 0.9843, 0.9843], [0.9804, 0.9804, 0.9804], [0.9765, 0.9765, 0.9765], [0.9725, 0.9725, 0.9725], [0.9686, 0.9686, 0.9686], [0.9647, 0.9647, 0.9647], [0.9608, 0.9608, 0.9608], [0.9569, 0.9569, 0.9569], [0.9529, 0.9529, 0.9529], [0.949, 0.949, 0.949], [0.9451, 0.9451, 0.9451], [0.9412, 0.9412, 0.9412], [0.9373, 0.9373, 0.9373], [0.9333, 0.9333, 0.9333], [0.9294, 0.9294, 0.9294], [0.9255, 0.9255, 0.9255], [0.9216, 0.9216, 0.9216], [0.9176, 0.9176, 0.9176], [0.9137, 0.9137, 0.9137], [0.9098, 0.9098, 0.9098], [0.9059, 0.9059, 0.9059], [0.902, 0.902, 0.902], [0.898, 0.898, 0.898], [0.8941, 0.8941, 0.8941], [0.8902, 0.8902, 0.8902], [0.8863, 0.8863, 0.8863], [0.8824, 0.8824, 0.8824], [0.8784, 0.8784, 0.8784], [0.8745, 0.8745, 0.8745], [0.8706, 0.8706, 0.8706], [0.8667, 0.8667, 0.8667], [0.8627, 0.8627, 0.8627], [0.8588, 0.8588, 0.8588], [0.8549, 0.8549, 0.8549], [0.851, 0.851, 0.851], [0.8471, 0.8471, 0.8471], [0.8431, 0.8431, 0.8431], [0.8392, 0.8392, 0.8392], [0.8353, 0.8353, 0.8353], [0.8314, 0.8314, 0.8314], [0.8275, 0.8275, 0.8275], [0.8235, 0.8235, 0.8235], [0.8196, 0.8196, 0.8196], [0.8157, 0.8157, 0.8157], [0.8118, 0.8118, 0.8118], [0.8078, 0.8078, 0.8078], [0.8039, 0.8039, 0.8039], [0.8, 0.8, 0.8], [0.7961, 0.7961, 0.7961], [0.7922, 0.7922, 0.7922], [0.7882, 0.7882, 0.7882], [0.7843, 0.7843, 0.7843], [0.7804, 0.7804, 0.7804], [0.7765, 0.7765, 0.7765], [0.7725, 0.7725, 0.7725], [0.7686, 0.7686, 0.7686], [0.7647, 0.7647, 0.7647], [0.7608, 0.7608, 0.7608], [0.7569, 0.7569, 0.7569], [0.7529, 0.7529, 0.7529], [0.749, 0.749, 0.749], [0.7451, 0.7451, 0.7451], [0.7412, 0.7412, 0.7412], [0.7373, 0.7373, 0.7373], [0.7333, 0.7333, 0.7333], [0.7294, 0.7294, 0.7294], [0.7255, 0.7255, 0.7255], [0.7216, 0.7216, 0.7216], [0.7176, 0.7176, 0.7176], [0.7137, 0.7137, 0.7137], [0.7098, 0.7098, 0.7098], [0.7059, 0.7059, 0.7059], [0.702, 0.702, 0.702], [0.698, 0.698, 0.698], [0.6941, 0.6941, 0.6941], [0.6902, 0.6902, 0.6902], [0.6863, 0.6863, 0.6863], [0.6824, 0.6824, 0.6824], [0.6784, 0.6784, 0.6784], [0.6745, 0.6745, 0.6745], [0.6706, 0.6706, 0.6706], [0.6667, 0.6667, 0.6667], [0.6627, 0.6627, 0.6627], [0.6588, 0.6588, 0.6588], [0.6549, 0.6549, 0.6549], [0.651, 0.651, 0.651], [0.6471, 0.6471, 0.6471], [0.6431, 0.6431, 0.6431], [0.6392, 0.6392, 0.6392], [0.6353, 0.6353, 0.6353], [0.6314, 0.6314, 0.6314], [0.6275, 0.6275, 0.6275], [0.6235, 0.6235, 0.6235], [0.6196, 0.6196, 0.6196], [0.6157, 0.6157, 0.6157], [0.6118, 0.6118, 0.6118], [0.6078, 0.6078, 0.6078], [0.6039, 0.6039, 0.6039], [0.6, 0.6, 0.6], [0.5961, 0.5961, 0.5961], [0.5922, 0.5922, 0.5922], [0.5882, 0.5882, 0.5882], [0.5843, 0.5843, 0.5843], [0.5804, 0.5804, 0.5804], [0.5765, 0.5765, 0.5765], [0.5725, 0.5725, 0.5725], [0.5686, 0.5686, 0.5686], [0.5647, 0.5647, 0.5647], [0.5608, 0.5608, 0.5608], [0.5569, 0.5569, 0.5569], [0.5529, 0.5529, 0.5529], [0.549, 0.549, 0.549], [0.5451, 0.5451, 0.5451], [0.5412, 0.5412, 0.5412], [0.5373, 0.5373, 0.5373], [0.5333, 0.5333, 0.5333], [0.5294, 0.5294, 0.5294], [0.5255, 0.5255, 0.5255], [0.5216, 0.5216, 0.5216], [0.5176, 0.5176, 0.5176], [0.5137, 0.5137, 0.5137], [0.5098, 0.5098, 0.5098], [0.5059, 0.5059, 0.5059], [0.502, 0.502, 0.502], [0.498, 0.498, 0.498], [0.4941, 0.4941, 0.4941], [0.4902, 0.4902, 0.4902], [0.4863, 0.4863, 0.4863], [0.4824, 0.4824, 0.4824], [0.4784, 0.4784, 0.4784], [0.4745, 0.4745, 0.4745], [0.4706, 0.4706, 0.4706], [0.4667, 0.4667, 0.4667], [0.4627, 0.4627, 0.4627], [0.4588, 0.4588, 0.4588], [0.4549, 0.4549, 0.4549], [0.451, 0.451, 0.451], [0.4471, 0.4471, 0.4471], [0.4431, 0.4431, 0.4431], [0.4392, 0.4392, 0.4392], [0.4353, 0.4353, 0.4353], [0.4314, 0.4314, 0.4314], [0.4275, 0.4275, 0.4275], [0.4235, 0.4235, 0.4235], [0.4196, 0.4196, 0.4196], [0.4157, 0.4157, 0.4157], [0.4118, 0.4118, 0.4118], [0.4078, 0.4078, 0.4078], [0.4039, 0.4039, 0.4039], [0.4, 0.4, 0.4], [0.3961, 0.3961, 0.3961], [0.3922, 0.3922, 0.3922], [0.3882, 0.3882, 0.3882], [0.3843, 0.3843, 0.3843], [0.3804, 0.3804, 0.3804], [0.3765, 0.3765, 0.3765], [0.3725, 0.3725, 0.3725], [0.3686, 0.3686, 0.3686], [0.3647, 0.3647, 0.3647], [0.3608, 0.3608, 0.3608], [0.3569, 0.3569, 0.3569], [0.3529, 0.3529, 0.3529], [0.349, 0.349, 0.349], [0.3451, 0.3451, 0.3451], [0.3412, 0.3412, 0.3412], [0.3373, 0.3373, 0.3373], [0.3333, 0.3333, 0.3333], [0.3294, 0.3294, 0.3294], [0.3255, 0.3255, 0.3255], [0.3216, 0.3216, 0.3216], [0.3176, 0.3176, 0.3176], [0.3137, 0.3137, 0.3137], [0.3098, 0.3098, 0.3098], [0.3059, 0.3059, 0.3059], [0.302, 0.302, 0.302], [0.298, 0.298, 0.298], [0.2941, 0.2941, 0.2941], [0.2902, 0.2902, 0.2902], [0.2863, 0.2863, 0.2863], [0.2824, 0.2824, 0.2824], [0.2784, 0.2784, 0.2784], [0.2745, 0.2745, 0.2745], [0.2706, 0.2706, 0.2706], [0.2667, 0.2667, 0.2667], [0.2627, 0.2627, 0.2627], [0.2588, 0.2588, 0.2588], [0.2549, 0.2549, 0.2549], [0.251, 0.251, 0.251], [0.2471, 0.2471, 0.2471], [0.2431, 0.2431, 0.2431], [0.2392, 0.2392, 0.2392], [0.2353, 0.2353, 0.2353], [0.2314, 0.2314, 0.2314], [0.2275, 0.2275, 0.2275], [0.2235, 0.2235, 0.2235], [0.2196, 0.2196, 0.2196], [0.2157, 0.2157, 0.2157], [0.2118, 0.2118, 0.2118], [0.2078, 0.2078, 0.2078], [0.2039, 0.2039, 0.2039], [0.2, 0.2, 0.2], [0.1961, 0.1961, 0.1961], [0.1922, 0.1922, 0.1922], [0.1882, 0.1882, 0.1882], [0.1843, 0.1843, 0.1843], [0.1804, 0.1804, 0.1804], [0.1765, 0.1765, 0.1765], [0.1725, 0.1725, 0.1725], [0.1686, 0.1686, 0.1686], [0.1647, 0.1647, 0.1647], [0.1608, 0.1608, 0.1608], [0.1569, 0.1569, 0.1569], [0.1529, 0.1529, 0.1529], [0.149, 0.149, 0.149], [0.1451, 0.1451, 0.1451], [0.1412, 0.1412, 0.1412], [0.1373, 0.1373, 0.1373], [0.1333, 0.1333, 0.1333], [0.1294, 0.1294, 0.1294], [0.1255, 0.1255, 0.1255], [0.1216, 0.1216, 0.1216], [0.1176, 0.1176, 0.1176], [0.1137, 0.1137, 0.1137], [0.1098, 0.1098, 0.1098], [0.1059, 0.1059, 0.1059], [0.102, 0.102, 0.102], [0.098, 0.098, 0.098], [0.0941, 0.0941, 0.0941], [0.0902, 0.0902, 0.0902], [0.0863, 0.0863, 0.0863], [0.0824, 0.0824, 0.0824], [0.0784, 0.0784, 0.0784], [0.0745, 0.0745, 0.0745], [0.0706, 0.0706, 0.0706], [0.0667, 0.0667, 0.0667], [0.0627, 0.0627, 0.0627], [0.0588, 0.0588, 0.0588], [0.0549, 0.0549, 0.0549], [0.051, 0.051, 0.051], [0.0471, 0.0471, 0.0471], [0.0431, 0.0431, 0.0431], [0.0392, 0.0392, 0.0392], [0.0353, 0.0353, 0.0353], [0.0314, 0.0314, 0.0314], [0.0275, 0.0275, 0.0275], [0.0235, 0.0235, 0.0235], [0.0196, 0.0196, 0.0196], [0.0157, 0.0157, 0.0157], [0.0118, 0.0118, 0.0118], [0.0078, 0.0078, 0.0078], [0.0039, 0.0039, 0.0039], [0.0, 0.0, 0.0]] }, "bone": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0034, 0.0034, 0.0048], [0.0069, 0.0069, 0.0095], [0.0103, 0.0103, 0.0143], [0.0137, 0.0137, 0.0191], [0.0172, 0.0172, 0.0239], [0.0206, 0.0206, 0.0286], [0.024, 0.024, 0.0334], [0.0275, 0.0275, 0.0382], [0.0309, 0.0309, 0.043], [0.0343, 0.0343, 0.0477], [0.0377, 0.0377, 0.0525], [0.0412, 0.0412, 0.0573], [0.0446, 0.0446, 0.0621], [0.048, 0.048, 0.0668], [0.0515, 0.0515, 0.0716], [0.0549, 0.0549, 0.0764], [0.0583, 0.0583, 0.0812], [0.0618, 0.0618, 0.0859], [0.0652, 0.0652, 0.0907], [0.0686, 0.0686, 0.0955], [0.0721, 0.0721, 0.1003], [0.0755, 0.0755, 0.105], [0.0789, 0.0789, 0.1098], [0.0824, 0.0824, 0.1146], [0.0858, 0.0858, 0.1194], [0.0892, 0.0892, 0.1241], [0.0926, 0.0926, 0.1289], [0.0961, 0.0961, 0.1337], [0.0995, 0.0995, 0.1384], [0.1029, 0.1029, 0.1432], [0.1064, 0.1064, 0.148], [0.1098, 0.1098, 0.1528], [0.1132, 0.1132, 0.1575], [0.1167, 0.1167, 0.1623], [0.1201, 0.1201, 0.1671], [0.1235, 0.1235, 0.1719], [0.127, 0.127, 0.1766], [0.1304, 0.1304, 0.1814], [0.1338, 0.1338, 0.1862], [0.1373, 0.1373, 0.191], [0.1407, 0.1407, 0.1957], [0.1441, 0.1441, 0.2005], [0.1475, 0.1475, 0.2053], [0.151, 0.151, 0.2101], [0.1544, 0.1544, 0.2148], [0.1578, 0.1578, 0.2196], [0.1613, 0.1613, 0.2244], [0.1647, 0.1647, 0.2292], [0.1681, 0.1681, 0.2339], [0.1716, 0.1716, 0.2387], [0.175, 0.175, 0.2435], [0.1784, 0.1784, 0.2483], [0.1819, 0.1819, 0.253], [0.1853, 0.1853, 0.2578], [0.1887, 0.1887, 0.2626], [0.1922, 0.1922, 0.2673], [0.1956, 0.1956, 0.2721], [0.199, 0.199, 0.2769], [0.2025, 0.2025, 0.2817], [0.2059, 0.2059, 0.2864], [0.2093, 0.2093, 0.2912], [0.2127, 0.2127, 0.296], [0.2162, 0.2162, 0.3008], [0.2196, 0.2196, 0.3055], [0.223, 0.223, 0.3103], [0.2265, 0.2265, 0.3151], [0.2299, 0.2299, 0.3199], [0.2333, 0.2333, 0.3246], [0.2368, 0.2368, 0.3294], [0.2402, 0.2402, 0.3342], [0.2436, 0.2436, 0.339], [0.2471, 0.2471, 0.3437], [0.2505, 0.2505, 0.3485], [0.2539, 0.2539, 0.3533], [0.2574, 0.2574, 0.3581], [0.2608, 0.2608, 0.3628], [0.2642, 0.2642, 0.3676], [0.2676, 0.2676, 0.3724], [0.2711, 0.2711, 0.3772], [0.2745, 0.2745, 0.3819], [0.2779, 0.2779, 0.3867], [0.2814, 0.2814, 0.3915], [0.2848, 0.2848, 0.3962], [0.2882, 0.2882, 0.401], [0.2917, 0.2917, 0.4058], [0.2951, 0.2951, 0.4106], [0.2985, 0.2985, 0.4153], [0.302, 0.302, 0.4201], [0.3054, 0.3054, 0.4249], [0.3088, 0.3088, 0.4297], [0.3123, 0.3123, 0.4344], [0.3157, 0.3157, 0.4392], [0.3191, 0.3191, 0.444], [0.3225, 0.3237, 0.4475], [0.326, 0.3284, 0.451], [0.3294, 0.3331, 0.4544], [0.3328, 0.3379, 0.4578], [0.3363, 0.3426, 0.4613], [0.3397, 0.3473, 0.4647], [0.3431, 0.352, 0.4681], [0.3466, 0.3567, 0.4716], [0.35, 0.3615, 0.475], [0.3534, 0.3662, 0.4784], [0.3569, 0.3709, 0.4819], [0.3603, 0.3756, 0.4853], [0.3637, 0.3803, 0.4887], [0.3672, 0.385, 0.4922], [0.3706, 0.3898, 0.4956], [0.374, 0.3945, 0.499], [0.3775, 0.3992, 0.5025], [0.3809, 0.4039, 0.5059], [0.3843, 0.4086, 0.5093], [0.3877, 0.4134, 0.5127], [0.3912, 0.4181, 0.5162], [0.3946, 0.4228, 0.5196], [0.398, 0.4275, 0.523], [0.4015, 0.4322, 0.5265], [0.4049, 0.4369, 0.5299], [0.4083, 0.4417, 0.5333], [0.4118, 0.4464, 0.5368], [0.4152, 0.4511, 0.5402], [0.4186, 0.4558, 0.5436], [0.4221, 0.4605, 0.5471], [0.4255, 0.4653, 0.5505], [0.4289, 0.47, 0.5539], [0.4324, 0.4747, 0.5574], [0.4358, 0.4794, 0.5608], [0.4392, 0.4841, 0.5642], [0.4426, 0.4888, 0.5676], [0.4461, 0.4936, 0.5711], [0.4495, 0.4983, 0.5745], [0.4529, 0.503, 0.5779], [0.4564, 0.5077, 0.5814], [0.4598, 0.5124, 0.5848], [0.4632, 0.5172, 0.5882], [0.4667, 0.5219, 0.5917], [0.4701, 0.5266, 0.5951], [0.4735, 0.5313, 0.5985], [0.477, 0.536, 0.602], [0.4804, 0.5407, 0.6054], [0.4838, 0.5455, 0.6088], [0.4873, 0.5502, 0.6123], [0.4907, 0.5549, 0.6157], [0.4941, 0.5596, 0.6191], [0.4975, 0.5643, 0.6225], [0.501, 0.5691, 0.626], [0.5044, 0.5738, 0.6294], [0.5078, 0.5785, 0.6328], [0.5113, 0.5832, 0.6363], [0.5147, 0.5879, 0.6397], [0.5181, 0.5926, 0.6431], [0.5216, 0.5974, 0.6466], [0.525, 0.6021, 0.65], [0.5284, 0.6068, 0.6534], [0.5319, 0.6115, 0.6569], [0.5353, 0.6162, 0.6603], [0.5387, 0.621, 0.6637], [0.5422, 0.6257, 0.6672], [0.5456, 0.6304, 0.6706], [0.549, 0.6351, 0.674], [0.5525, 0.6398, 0.6775], [0.5559, 0.6445, 0.6809], [0.5593, 0.6493, 0.6843], [0.5627, 0.654, 0.6877], [0.5662, 0.6587, 0.6912], [0.5696, 0.6634, 0.6946], [0.573, 0.6681, 0.698], [0.5765, 0.6729, 0.7015], [0.5799, 0.6776, 0.7049], [0.5833, 0.6823, 0.7083], [0.5868, 0.687, 0.7118], [0.5902, 0.6917, 0.7152], [0.5936, 0.6964, 0.7186], [0.5971, 0.7012, 0.7221], [0.6005, 0.7059, 0.7255], [0.6039, 0.7106, 0.7289], [0.6074, 0.7153, 0.7324], [0.6108, 0.72, 0.7358], [0.6142, 0.7248, 0.7392], [0.6176, 0.7295, 0.7426], [0.6211, 0.7342, 0.7461], [0.6245, 0.7389, 0.7495], [0.6279, 0.7436, 0.7529], [0.6314, 0.7483, 0.7564], [0.6348, 0.7531, 0.7598], [0.6382, 0.7578, 0.7632], [0.6417, 0.7625, 0.7667], [0.6451, 0.7672, 0.7701], [0.6485, 0.7719, 0.7735], [0.652, 0.7767, 0.777], [0.6569, 0.7804, 0.7804], [0.6622, 0.7838, 0.7838], [0.6676, 0.7873, 0.7873], [0.6729, 0.7907, 0.7907], [0.6783, 0.7941, 0.7941], [0.6837, 0.7975, 0.7975], [0.689, 0.801, 0.801], [0.6944, 0.8044, 0.8044], [0.6998, 0.8078, 0.8078], [0.7051, 0.8113, 0.8113], [0.7105, 0.8147, 0.8147], [0.7158, 0.8181, 0.8181], [0.7212, 0.8216, 0.8216], [0.7266, 0.825, 0.825], [0.7319, 0.8284, 0.8284], [0.7373, 0.8319, 0.8319], [0.7426, 0.8353, 0.8353], [0.748, 0.8387, 0.8387], [0.7534, 0.8422, 0.8422], [0.7587, 0.8456, 0.8456], [0.7641, 0.849, 0.849], [0.7695, 0.8525, 0.8525], [0.7748, 0.8559, 0.8559], [0.7802, 0.8593, 0.8593], [0.7855, 0.8627, 0.8627], [0.7909, 0.8662, 0.8662], [0.7963, 0.8696, 0.8696], [0.8016, 0.873, 0.873], [0.807, 0.8765, 0.8765], [0.8123, 0.8799, 0.8799], [0.8177, 0.8833, 0.8833], [0.8231, 0.8868, 0.8868], [0.8284, 0.8902, 0.8902], [0.8338, 0.8936, 0.8936], [0.8392, 0.8971, 0.8971], [0.8445, 0.9005, 0.9005], [0.8499, 0.9039, 0.9039], [0.8552, 0.9074, 0.9074], [0.8606, 0.9108, 0.9108], [0.866, 0.9142, 0.9142], [0.8713, 0.9176, 0.9176], [0.8767, 0.9211, 0.9211], [0.882, 0.9245, 0.9245], [0.8874, 0.9279, 0.9279], [0.8928, 0.9314, 0.9314], [0.8981, 0.9348, 0.9348], [0.9035, 0.9382, 0.9382], [0.9089, 0.9417, 0.9417], [0.9142, 0.9451, 0.9451], [0.9196, 0.9485, 0.9485], [0.9249, 0.952, 0.952], [0.9303, 0.9554, 0.9554], [0.9357, 0.9588, 0.9588], [0.941, 0.9623, 0.9623], [0.9464, 0.9657, 0.9657], [0.9517, 0.9691, 0.9691], [0.9571, 0.9725, 0.9725], [0.9625, 0.976, 0.976], [0.9678, 0.9794, 0.9794], [0.9732, 0.9828, 0.9828], [0.9786, 0.9863, 0.9863], [0.9839, 0.9897, 0.9897], [0.9893, 0.9931, 0.9931], [0.9946, 0.9966, 0.9966], [1.0, 1.0, 1.0]] }, "brg": { "interpolate": true, "colors": [[0.0, 0.0, 1.0], [0.0078, 0.0, 0.9922], [0.0157, 0.0, 0.9843], [0.0235, 0.0, 0.9765], [0.0314, 0.0, 0.9686], [0.0392, 0.0, 0.9608], [0.0471, 0.0, 0.9529], [0.0549, 0.0, 0.9451], [0.0627, 0.0, 0.9373], [0.0706, 0.0, 0.9294], [0.0784, 0.0, 0.9216], [0.0863, 0.0, 0.9137], [0.0941, 0.0, 0.9059], [0.102, 0.0, 0.898], [0.1098, 0.0, 0.8902], [0.1176, 0.0, 0.8824], [0.1255, 0.0, 0.8745], [0.1333, 0.0, 0.8667], [0.1412, 0.0, 0.8588], [0.149, 0.0, 0.851], [0.1569, 0.0, 0.8431], [0.1647, 0.0, 0.8353], [0.1725, 0.0, 0.8275], [0.1804, 0.0, 0.8196], [0.1882, 0.0, 0.8118], [0.1961, 0.0, 0.8039], [0.2039, 0.0, 0.7961], [0.2118, 0.0, 0.7882], [0.2196, 0.0, 0.7804], [0.2275, 0.0, 0.7725], [0.2353, 0.0, 0.7647], [0.2431, 0.0, 0.7569], [0.251, 0.0, 0.749], [0.2588, 0.0, 0.7412], [0.2667, 0.0, 0.7333], [0.2745, 0.0, 0.7255], [0.2824, 0.0, 0.7176], [0.2902, 0.0, 0.7098], [0.298, 0.0, 0.702], [0.3059, 0.0, 0.6941], [0.3137, 0.0, 0.6863], [0.3216, 0.0, 0.6784], [0.3294, 0.0, 0.6706], [0.3373, 0.0, 0.6627], [0.3451, 0.0, 0.6549], [0.3529, 0.0, 0.6471], [0.3608, 0.0, 0.6392], [0.3686, 0.0, 0.6314], [0.3765, 0.0, 0.6235], [0.3843, 0.0, 0.6157], [0.3922, 0.0, 0.6078], [0.4, 0.0, 0.6], [0.4078, 0.0, 0.5922], [0.4157, 0.0, 0.5843], [0.4235, 0.0, 0.5765], [0.4314, 0.0, 0.5686], [0.4392, 0.0, 0.5608], [0.4471, 0.0, 0.5529], [0.4549, 0.0, 0.5451], [0.4627, 0.0, 0.5373], [0.4706, 0.0, 0.5294], [0.4784, 0.0, 0.5216], [0.4863, 0.0, 0.5137], [0.4941, 0.0, 0.5059], [0.502, 0.0, 0.498], [0.5098, 0.0, 0.4902], [0.5176, 0.0, 0.4824], [0.5255, 0.0, 0.4745], [0.5333, 0.0, 0.4667], [0.5412, 0.0, 0.4588], [0.549, 0.0, 0.451], [0.5569, 0.0, 0.4431], [0.5647, 0.0, 0.4353], [0.5725, 0.0, 0.4275], [0.5804, 0.0, 0.4196], [0.5882, 0.0, 0.4118], [0.5961, 0.0, 0.4039], [0.6039, 0.0, 0.3961], [0.6118, 0.0, 0.3882], [0.6196, 0.0, 0.3804], [0.6275, 0.0, 0.3725], [0.6353, 0.0, 0.3647], [0.6431, 0.0, 0.3569], [0.651, 0.0, 0.349], [0.6588, 0.0, 0.3412], [0.6667, 0.0, 0.3333], [0.6745, 0.0, 0.3255], [0.6824, 0.0, 0.3176], [0.6902, 0.0, 0.3098], [0.698, 0.0, 0.302], [0.7059, 0.0, 0.2941], [0.7137, 0.0, 0.2863], [0.7216, 0.0, 0.2784], [0.7294, 0.0, 0.2706], [0.7373, 0.0, 0.2627], [0.7451, 0.0, 0.2549], [0.7529, 0.0, 0.2471], [0.7608, 0.0, 0.2392], [0.7686, 0.0, 0.2314], [0.7765, 0.0, 0.2235], [0.7843, 0.0, 0.2157], [0.7922, 0.0, 0.2078], [0.8, 0.0, 0.2], [0.8078, 0.0, 0.1922], [0.8157, 0.0, 0.1843], [0.8235, 0.0, 0.1765], [0.8314, 0.0, 0.1686], [0.8392, 0.0, 0.1608], [0.8471, 0.0, 0.1529], [0.8549, 0.0, 0.1451], [0.8627, 0.0, 0.1373], [0.8706, 0.0, 0.1294], [0.8784, 0.0, 0.1216], [0.8863, 0.0, 0.1137], [0.8941, 0.0, 0.1059], [0.902, 0.0, 0.098], [0.9098, 0.0, 0.0902], [0.9176, 0.0, 0.0824], [0.9255, 0.0, 0.0745], [0.9333, 0.0, 0.0667], [0.9412, 0.0, 0.0588], [0.949, 0.0, 0.051], [0.9569, 0.0, 0.0431], [0.9647, 0.0, 0.0353], [0.9725, 0.0, 0.0275], [0.9804, 0.0, 0.0196], [0.9882, 0.0, 0.0118], [0.9961, 0.0, 0.0039], [0.9961, 0.0039, 0.0], [0.9882, 0.0118, 0.0], [0.9804, 0.0196, 0.0], [0.9725, 0.0275, 0.0], [0.9647, 0.0353, 0.0], [0.9569, 0.0431, 0.0], [0.949, 0.051, 0.0], [0.9412, 0.0588, 0.0], [0.9333, 0.0667, 0.0], [0.9255, 0.0745, 0.0], [0.9176, 0.0824, 0.0], [0.9098, 0.0902, 0.0], [0.902, 0.098, 0.0], [0.8941, 0.1059, 0.0], [0.8863, 0.1137, 0.0], [0.8784, 0.1216, 0.0], [0.8706, 0.1294, 0.0], [0.8627, 0.1373, 0.0], [0.8549, 0.1451, 0.0], [0.8471, 0.1529, 0.0], [0.8392, 0.1608, 0.0], [0.8314, 0.1686, 0.0], [0.8235, 0.1765, 0.0], [0.8157, 0.1843, 0.0], [0.8078, 0.1922, 0.0], [0.8, 0.2, 0.0], [0.7922, 0.2078, 0.0], [0.7843, 0.2157, 0.0], [0.7765, 0.2235, 0.0], [0.7686, 0.2314, 0.0], [0.7608, 0.2392, 0.0], [0.7529, 0.2471, 0.0], [0.7451, 0.2549, 0.0], [0.7373, 0.2627, 0.0], [0.7294, 0.2706, 0.0], [0.7216, 0.2784, 0.0], [0.7137, 0.2863, 0.0], [0.7059, 0.2941, 0.0], [0.698, 0.302, 0.0], [0.6902, 0.3098, 0.0], [0.6824, 0.3176, 0.0], [0.6745, 0.3255, 0.0], [0.6667, 0.3333, 0.0], [0.6588, 0.3412, 0.0], [0.651, 0.349, 0.0], [0.6431, 0.3569, 0.0], [0.6353, 0.3647, 0.0], [0.6275, 0.3725, 0.0], [0.6196, 0.3804, 0.0], [0.6118, 0.3882, 0.0], [0.6039, 0.3961, 0.0], [0.5961, 0.4039, 0.0], [0.5882, 0.4118, 0.0], [0.5804, 0.4196, 0.0], [0.5725, 0.4275, 0.0], [0.5647, 0.4353, 0.0], [0.5569, 0.4431, 0.0], [0.549, 0.451, 0.0], [0.5412, 0.4588, 0.0], [0.5333, 0.4667, 0.0], [0.5255, 0.4745, 0.0], [0.5176, 0.4824, 0.0], [0.5098, 0.4902, 0.0], [0.502, 0.498, 0.0], [0.4941, 0.5059, 0.0], [0.4863, 0.5137, 0.0], [0.4784, 0.5216, 0.0], [0.4706, 0.5294, 0.0], [0.4627, 0.5373, 0.0], [0.4549, 0.5451, 0.0], [0.4471, 0.5529, 0.0], [0.4392, 0.5608, 0.0], [0.4314, 0.5686, 0.0], [0.4235, 0.5765, 0.0], [0.4157, 0.5843, 0.0], [0.4078, 0.5922, 0.0], [0.4, 0.6, 0.0], [0.3922, 0.6078, 0.0], [0.3843, 0.6157, 0.0], [0.3765, 0.6235, 0.0], [0.3686, 0.6314, 0.0], [0.3608, 0.6392, 0.0], [0.3529, 0.6471, 0.0], [0.3451, 0.6549, 0.0], [0.3373, 0.6627, 0.0], [0.3294, 0.6706, 0.0], [0.3216, 0.6784, 0.0], [0.3137, 0.6863, 0.0], [0.3059, 0.6941, 0.0], [0.298, 0.702, 0.0], [0.2902, 0.7098, 0.0], [0.2824, 0.7176, 0.0], [0.2745, 0.7255, 0.0], [0.2667, 0.7333, 0.0], [0.2588, 0.7412, 0.0], [0.251, 0.749, 0.0], [0.2431, 0.7569, 0.0], [0.2353, 0.7647, 0.0], [0.2275, 0.7725, 0.0], [0.2196, 0.7804, 0.0], [0.2118, 0.7882, 0.0], [0.2039, 0.7961, 0.0], [0.1961, 0.8039, 0.0], [0.1882, 0.8118, 0.0], [0.1804, 0.8196, 0.0], [0.1725, 0.8275, 0.0], [0.1647, 0.8353, 0.0], [0.1569, 0.8431, 0.0], [0.149, 0.851, 0.0], [0.1412, 0.8588, 0.0], [0.1333, 0.8667, 0.0], [0.1255, 0.8745, 0.0], [0.1176, 0.8824, 0.0], [0.1098, 0.8902, 0.0], [0.102, 0.898, 0.0], [0.0941, 0.9059, 0.0], [0.0863, 0.9137, 0.0], [0.0784, 0.9216, 0.0], [0.0706, 0.9294, 0.0], [0.0627, 0.9373, 0.0], [0.0549, 0.9451, 0.0], [0.0471, 0.9529, 0.0], [0.0392, 0.9608, 0.0], [0.0314, 0.9686, 0.0], [0.0235, 0.9765, 0.0], [0.0157, 0.9843, 0.0], [0.0078, 0.9922, 0.0], [0.0, 1.0, 0.0]] }, "bwr": { "interpolate": true, "colors": [[0.0, 0.0, 1.0], [0.0078, 0.0078, 1.0], [0.0157, 0.0157, 1.0], [0.0235, 0.0235, 1.0], [0.0314, 0.0314, 1.0], [0.0392, 0.0392, 1.0], [0.0471, 0.0471, 1.0], [0.0549, 0.0549, 1.0], [0.0627, 0.0627, 1.0], [0.0706, 0.0706, 1.0], [0.0784, 0.0784, 1.0], [0.0863, 0.0863, 1.0], [0.0941, 0.0941, 1.0], [0.102, 0.102, 1.0], [0.1098, 0.1098, 1.0], [0.1176, 0.1176, 1.0], [0.1255, 0.1255, 1.0], [0.1333, 0.1333, 1.0], [0.1412, 0.1412, 1.0], [0.149, 0.149, 1.0], [0.1569, 0.1569, 1.0], [0.1647, 0.1647, 1.0], [0.1725, 0.1725, 1.0], [0.1804, 0.1804, 1.0], [0.1882, 0.1882, 1.0], [0.1961, 0.1961, 1.0], [0.2039, 0.2039, 1.0], [0.2118, 0.2118, 1.0], [0.2196, 0.2196, 1.0], [0.2275, 0.2275, 1.0], [0.2353, 0.2353, 1.0], [0.2431, 0.2431, 1.0], [0.251, 0.251, 1.0], [0.2588, 0.2588, 1.0], [0.2667, 0.2667, 1.0], [0.2745, 0.2745, 1.0], [0.2824, 0.2824, 1.0], [0.2902, 0.2902, 1.0], [0.298, 0.298, 1.0], [0.3059, 0.3059, 1.0], [0.3137, 0.3137, 1.0], [0.3216, 0.3216, 1.0], [0.3294, 0.3294, 1.0], [0.3373, 0.3373, 1.0], [0.3451, 0.3451, 1.0], [0.3529, 0.3529, 1.0], [0.3608, 0.3608, 1.0], [0.3686, 0.3686, 1.0], [0.3765, 0.3765, 1.0], [0.3843, 0.3843, 1.0], [0.3922, 0.3922, 1.0], [0.4, 0.4, 1.0], [0.4078, 0.4078, 1.0], [0.4157, 0.4157, 1.0], [0.4235, 0.4235, 1.0], [0.4314, 0.4314, 1.0], [0.4392, 0.4392, 1.0], [0.4471, 0.4471, 1.0], [0.4549, 0.4549, 1.0], [0.4627, 0.4627, 1.0], [0.4706, 0.4706, 1.0], [0.4784, 0.4784, 1.0], [0.4863, 0.4863, 1.0], [0.4941, 0.4941, 1.0], [0.502, 0.502, 1.0], [0.5098, 0.5098, 1.0], [0.5176, 0.5176, 1.0], [0.5255, 0.5255, 1.0], [0.5333, 0.5333, 1.0], [0.5412, 0.5412, 1.0], [0.549, 0.549, 1.0], [0.5569, 0.5569, 1.0], [0.5647, 0.5647, 1.0], [0.5725, 0.5725, 1.0], [0.5804, 0.5804, 1.0], [0.5882, 0.5882, 1.0], [0.5961, 0.5961, 1.0], [0.6039, 0.6039, 1.0], [0.6118, 0.6118, 1.0], [0.6196, 0.6196, 1.0], [0.6275, 0.6275, 1.0], [0.6353, 0.6353, 1.0], [0.6431, 0.6431, 1.0], [0.651, 0.651, 1.0], [0.6588, 0.6588, 1.0], [0.6667, 0.6667, 1.0], [0.6745, 0.6745, 1.0], [0.6824, 0.6824, 1.0], [0.6902, 0.6902, 1.0], [0.698, 0.698, 1.0], [0.7059, 0.7059, 1.0], [0.7137, 0.7137, 1.0], [0.7216, 0.7216, 1.0], [0.7294, 0.7294, 1.0], [0.7373, 0.7373, 1.0], [0.7451, 0.7451, 1.0], [0.7529, 0.7529, 1.0], [0.7608, 0.7608, 1.0], [0.7686, 0.7686, 1.0], [0.7765, 0.7765, 1.0], [0.7843, 0.7843, 1.0], [0.7922, 0.7922, 1.0], [0.8, 0.8, 1.0], [0.8078, 0.8078, 1.0], [0.8157, 0.8157, 1.0], [0.8235, 0.8235, 1.0], [0.8314, 0.8314, 1.0], [0.8392, 0.8392, 1.0], [0.8471, 0.8471, 1.0], [0.8549, 0.8549, 1.0], [0.8627, 0.8627, 1.0], [0.8706, 0.8706, 1.0], [0.8784, 0.8784, 1.0], [0.8863, 0.8863, 1.0], [0.8941, 0.8941, 1.0], [0.902, 0.902, 1.0], [0.9098, 0.9098, 1.0], [0.9176, 0.9176, 1.0], [0.9255, 0.9255, 1.0], [0.9333, 0.9333, 1.0], [0.9412, 0.9412, 1.0], [0.949, 0.949, 1.0], [0.9569, 0.9569, 1.0], [0.9647, 0.9647, 1.0], [0.9725, 0.9725, 1.0], [0.9804, 0.9804, 1.0], [0.9882, 0.9882, 1.0], [0.9961, 0.9961, 1.0], [1.0, 0.9961, 0.9961], [1.0, 0.9882, 0.9882], [1.0, 0.9804, 0.9804], [1.0, 0.9725, 0.9725], [1.0, 0.9647, 0.9647], [1.0, 0.9569, 0.9569], [1.0, 0.949, 0.949], [1.0, 0.9412, 0.9412], [1.0, 0.9333, 0.9333], [1.0, 0.9255, 0.9255], [1.0, 0.9176, 0.9176], [1.0, 0.9098, 0.9098], [1.0, 0.902, 0.902], [1.0, 0.8941, 0.8941], [1.0, 0.8863, 0.8863], [1.0, 0.8784, 0.8784], [1.0, 0.8706, 0.8706], [1.0, 0.8627, 0.8627], [1.0, 0.8549, 0.8549], [1.0, 0.8471, 0.8471], [1.0, 0.8392, 0.8392], [1.0, 0.8314, 0.8314], [1.0, 0.8235, 0.8235], [1.0, 0.8157, 0.8157], [1.0, 0.8078, 0.8078], [1.0, 0.8, 0.8], [1.0, 0.7922, 0.7922], [1.0, 0.7843, 0.7843], [1.0, 0.7765, 0.7765], [1.0, 0.7686, 0.7686], [1.0, 0.7608, 0.7608], [1.0, 0.7529, 0.7529], [1.0, 0.7451, 0.7451], [1.0, 0.7373, 0.7373], [1.0, 0.7294, 0.7294], [1.0, 0.7216, 0.7216], [1.0, 0.7137, 0.7137], [1.0, 0.7059, 0.7059], [1.0, 0.698, 0.698], [1.0, 0.6902, 0.6902], [1.0, 0.6824, 0.6824], [1.0, 0.6745, 0.6745], [1.0, 0.6667, 0.6667], [1.0, 0.6588, 0.6588], [1.0, 0.651, 0.651], [1.0, 0.6431, 0.6431], [1.0, 0.6353, 0.6353], [1.0, 0.6275, 0.6275], [1.0, 0.6196, 0.6196], [1.0, 0.6118, 0.6118], [1.0, 0.6039, 0.6039], [1.0, 0.5961, 0.5961], [1.0, 0.5882, 0.5882], [1.0, 0.5804, 0.5804], [1.0, 0.5725, 0.5725], [1.0, 0.5647, 0.5647], [1.0, 0.5569, 0.5569], [1.0, 0.549, 0.549], [1.0, 0.5412, 0.5412], [1.0, 0.5333, 0.5333], [1.0, 0.5255, 0.5255], [1.0, 0.5176, 0.5176], [1.0, 0.5098, 0.5098], [1.0, 0.502, 0.502], [1.0, 0.4941, 0.4941], [1.0, 0.4863, 0.4863], [1.0, 0.4784, 0.4784], [1.0, 0.4706, 0.4706], [1.0, 0.4627, 0.4627], [1.0, 0.4549, 0.4549], [1.0, 0.4471, 0.4471], [1.0, 0.4392, 0.4392], [1.0, 0.4314, 0.4314], [1.0, 0.4235, 0.4235], [1.0, 0.4157, 0.4157], [1.0, 0.4078, 0.4078], [1.0, 0.4, 0.4], [1.0, 0.3922, 0.3922], [1.0, 0.3843, 0.3843], [1.0, 0.3765, 0.3765], [1.0, 0.3686, 0.3686], [1.0, 0.3608, 0.3608], [1.0, 0.3529, 0.3529], [1.0, 0.3451, 0.3451], [1.0, 0.3373, 0.3373], [1.0, 0.3294, 0.3294], [1.0, 0.3216, 0.3216], [1.0, 0.3137, 0.3137], [1.0, 0.3059, 0.3059], [1.0, 0.298, 0.298], [1.0, 0.2902, 0.2902], [1.0, 0.2824, 0.2824], [1.0, 0.2745, 0.2745], [1.0, 0.2667, 0.2667], [1.0, 0.2588, 0.2588], [1.0, 0.251, 0.251], [1.0, 0.2431, 0.2431], [1.0, 0.2353, 0.2353], [1.0, 0.2275, 0.2275], [1.0, 0.2196, 0.2196], [1.0, 0.2118, 0.2118], [1.0, 0.2039, 0.2039], [1.0, 0.1961, 0.1961], [1.0, 0.1882, 0.1882], [1.0, 0.1804, 0.1804], [1.0, 0.1725, 0.1725], [1.0, 0.1647, 0.1647], [1.0, 0.1569, 0.1569], [1.0, 0.149, 0.149], [1.0, 0.1412, 0.1412], [1.0, 0.1333, 0.1333], [1.0, 0.1255, 0.1255], [1.0, 0.1176, 0.1176], [1.0, 0.1098, 0.1098], [1.0, 0.102, 0.102], [1.0, 0.0941, 0.0941], [1.0, 0.0863, 0.0863], [1.0, 0.0784, 0.0784], [1.0, 0.0706, 0.0706], [1.0, 0.0627, 0.0627], [1.0, 0.0549, 0.0549], [1.0, 0.0471, 0.0471], [1.0, 0.0392, 0.0392], [1.0, 0.0314, 0.0314], [1.0, 0.0235, 0.0235], [1.0, 0.0157, 0.0157], [1.0, 0.0078, 0.0078], [1.0, 0.0, 0.0]] }, "cividis": { "interpolate": true, "colors": [[0.0, 0.1351, 0.3048], [0.0, 0.1381, 0.3111], [0.0, 0.141, 0.3176], [0.0, 0.144, 0.324], [0.0, 0.1469, 0.3305], [0.0, 0.1498, 0.3371], [0.0, 0.1527, 0.3437], [0.0, 0.1554, 0.3505], [0.0, 0.1579, 0.3575], [0.0, 0.1605, 0.3645], [0.0, 0.1631, 0.3716], [0.0, 0.1656, 0.3788], [0.0, 0.1682, 0.3859], [0.0, 0.1708, 0.3931], [0.0, 0.1734, 0.4004], [0.0, 0.1761, 0.4076], [0.0, 0.1788, 0.4148], [0.0, 0.1816, 0.4219], [0.0, 0.1846, 0.4288], [0.0, 0.1869, 0.4355], [0.0, 0.1888, 0.4396], [0.0, 0.191, 0.4411], [0.0, 0.1934, 0.4416], [0.0036, 0.1959, 0.4416], [0.0179, 0.1985, 0.4412], [0.0321, 0.2012, 0.4408], [0.0462, 0.2039, 0.4402], [0.0584, 0.2066, 0.4395], [0.069, 0.2094, 0.4389], [0.0786, 0.2121, 0.4381], [0.0875, 0.2149, 0.4373], [0.0956, 0.2176, 0.4366], [0.1034, 0.2204, 0.4358], [0.1107, 0.2232, 0.4351], [0.1176, 0.2259, 0.4343], [0.1243, 0.2287, 0.4335], [0.1307, 0.2315, 0.4328], [0.1368, 0.2342, 0.4321], [0.1429, 0.237, 0.4314], [0.1486, 0.2397, 0.4308], [0.1543, 0.2425, 0.4301], [0.1597, 0.2452, 0.4295], [0.1651, 0.248, 0.4289], [0.1704, 0.2507, 0.4283], [0.1755, 0.2534, 0.4278], [0.1805, 0.2562, 0.4273], [0.1855, 0.2589, 0.4268], [0.1903, 0.2616, 0.4263], [0.1951, 0.2644, 0.4259], [0.1998, 0.2671, 0.4255], [0.2044, 0.2698, 0.4251], [0.2089, 0.2725, 0.4248], [0.2134, 0.2753, 0.4245], [0.2179, 0.278, 0.4242], [0.2223, 0.2807, 0.4239], [0.2266, 0.2834, 0.4237], [0.2309, 0.2861, 0.4235], [0.2351, 0.2888, 0.4233], [0.2393, 0.2916, 0.4232], [0.2435, 0.2943, 0.423], [0.2476, 0.297, 0.4229], [0.2517, 0.2997, 0.4229], [0.2557, 0.3024, 0.4228], [0.2597, 0.3051, 0.4228], [0.2637, 0.3078, 0.4228], [0.2677, 0.3105, 0.4228], [0.2716, 0.3133, 0.4228], [0.2755, 0.316, 0.423], [0.2794, 0.3187, 0.423], [0.2832, 0.3214, 0.4232], [0.2871, 0.3241, 0.4234], [0.2909, 0.3268, 0.4235], [0.2947, 0.3295, 0.4237], [0.2984, 0.3322, 0.424], [0.3022, 0.335, 0.4242], [0.3059, 0.3377, 0.4245], [0.3096, 0.3404, 0.4248], [0.3133, 0.3431, 0.4251], [0.3169, 0.3458, 0.4255], [0.3206, 0.3486, 0.4259], [0.3242, 0.3513, 0.4262], [0.3279, 0.354, 0.4267], [0.3315, 0.3567, 0.4271], [0.3351, 0.3595, 0.4276], [0.3387, 0.3622, 0.4281], [0.3422, 0.3649, 0.4286], [0.3458, 0.3677, 0.4291], [0.3493, 0.3704, 0.4297], [0.3529, 0.3732, 0.4302], [0.3564, 0.3759, 0.4308], [0.3599, 0.3786, 0.4315], [0.3634, 0.3814, 0.4321], [0.3669, 0.3841, 0.4328], [0.3704, 0.3869, 0.4334], [0.3739, 0.3896, 0.4342], [0.3774, 0.3924, 0.4349], [0.3808, 0.3952, 0.4357], [0.3843, 0.3979, 0.4365], [0.3877, 0.4007, 0.4373], [0.3912, 0.4035, 0.4381], [0.3946, 0.4062, 0.439], [0.398, 0.409, 0.4398], [0.4014, 0.4118, 0.4407], [0.4048, 0.4146, 0.4416], [0.4082, 0.4174, 0.4426], [0.4116, 0.4201, 0.4436], [0.415, 0.4229, 0.4446], [0.4184, 0.4257, 0.4456], [0.4217, 0.4285, 0.4466], [0.4251, 0.4313, 0.4477], [0.4285, 0.4341, 0.4489], [0.4318, 0.437, 0.45], [0.4352, 0.4398, 0.4511], [0.4385, 0.4426, 0.4523], [0.4418, 0.4454, 0.4537], [0.4451, 0.4482, 0.4549], [0.4484, 0.4511, 0.4563], [0.4518, 0.4539, 0.4576], [0.4551, 0.4567, 0.459], [0.4584, 0.4596, 0.4605], [0.4616, 0.4624, 0.462], [0.4649, 0.4652, 0.4634], [0.4683, 0.4681, 0.4649], [0.4715, 0.471, 0.4664], [0.4748, 0.4738, 0.4677], [0.4782, 0.4767, 0.4688], [0.4816, 0.4796, 0.4698], [0.4851, 0.4825, 0.4704], [0.4887, 0.4853, 0.471], [0.4923, 0.4882, 0.4715], [0.4959, 0.4911, 0.4718], [0.4996, 0.494, 0.472], [0.5032, 0.4969, 0.4723], [0.5069, 0.4997, 0.4724], [0.5105, 0.5026, 0.4726], [0.5142, 0.5055, 0.4726], [0.5179, 0.5085, 0.4727], [0.5216, 0.5114, 0.4726], [0.5253, 0.5143, 0.4727], [0.5291, 0.5172, 0.4725], [0.5328, 0.5201, 0.4724], [0.5366, 0.5231, 0.4724], [0.5403, 0.526, 0.4722], [0.5441, 0.5289, 0.4719], [0.5478, 0.5319, 0.4717], [0.5516, 0.5348, 0.4714], [0.5554, 0.5378, 0.4711], [0.5592, 0.5408, 0.4708], [0.563, 0.5437, 0.4705], [0.5668, 0.5467, 0.47], [0.5706, 0.5497, 0.4696], [0.5744, 0.5527, 0.4692], [0.5782, 0.5557, 0.4687], [0.5821, 0.5587, 0.4681], [0.5859, 0.5617, 0.4676], [0.5898, 0.5647, 0.4671], [0.5936, 0.5677, 0.4664], [0.5975, 0.5707, 0.4658], [0.6014, 0.5737, 0.4651], [0.6052, 0.5768, 0.4644], [0.6091, 0.5798, 0.4636], [0.613, 0.5829, 0.463], [0.6169, 0.5859, 0.4622], [0.6208, 0.589, 0.4614], [0.6247, 0.592, 0.4606], [0.6286, 0.5951, 0.4596], [0.6325, 0.5982, 0.4587], [0.6364, 0.6013, 0.4578], [0.6404, 0.6044, 0.4568], [0.6443, 0.6074, 0.4559], [0.6482, 0.6106, 0.4548], [0.6522, 0.6137, 0.4537], [0.6561, 0.6168, 0.4527], [0.6601, 0.6199, 0.4515], [0.6641, 0.623, 0.4503], [0.668, 0.6262, 0.4493], [0.672, 0.6293, 0.448], [0.676, 0.6325, 0.4467], [0.68, 0.6356, 0.4454], [0.6839, 0.6388, 0.4443], [0.688, 0.642, 0.4429], [0.692, 0.6451, 0.4415], [0.696, 0.6483, 0.4401], [0.7, 0.6515, 0.4386], [0.704, 0.6547, 0.4371], [0.7081, 0.6579, 0.4356], [0.7121, 0.6612, 0.4341], [0.7162, 0.6644, 0.4324], [0.7202, 0.6676, 0.4308], [0.7243, 0.6709, 0.4292], [0.7283, 0.6741, 0.4276], [0.7324, 0.6774, 0.4257], [0.7365, 0.6806, 0.424], [0.7406, 0.6839, 0.4221], [0.7447, 0.6872, 0.4204], [0.7488, 0.6905, 0.4184], [0.7529, 0.6938, 0.4165], [0.757, 0.6971, 0.4147], [0.7611, 0.7004, 0.4126], [0.7652, 0.7037, 0.4106], [0.7694, 0.707, 0.4085], [0.7735, 0.7104, 0.4064], [0.7777, 0.7137, 0.4041], [0.7818, 0.7171, 0.402], [0.786, 0.7204, 0.3996], [0.7901, 0.7238, 0.3974], [0.7943, 0.7272, 0.395], [0.7985, 0.7306, 0.3926], [0.8027, 0.734, 0.3902], [0.8069, 0.7374, 0.3877], [0.8111, 0.7408, 0.3852], [0.8153, 0.7442, 0.3825], [0.8195, 0.7477, 0.3798], [0.8237, 0.7511, 0.377], [0.828, 0.7546, 0.3743], [0.8322, 0.758, 0.3715], [0.8364, 0.7615, 0.3687], [0.8407, 0.765, 0.3657], [0.845, 0.7684, 0.3627], [0.8492, 0.7719, 0.3597], [0.8535, 0.7755, 0.3565], [0.8578, 0.779, 0.3533], [0.8621, 0.7825, 0.35], [0.8664, 0.786, 0.3466], [0.8707, 0.7896, 0.3433], [0.8751, 0.7931, 0.3397], [0.8794, 0.7967, 0.3362], [0.8837, 0.8003, 0.3326], [0.8881, 0.8038, 0.3288], [0.8924, 0.8074, 0.325], [0.8968, 0.811, 0.321], [0.9012, 0.8146, 0.317], [0.9056, 0.8183, 0.3129], [0.91, 0.8219, 0.3086], [0.9144, 0.8255, 0.3043], [0.9188, 0.8292, 0.3], [0.9233, 0.8328, 0.2952], [0.9277, 0.8365, 0.2906], [0.9322, 0.8402, 0.2859], [0.9367, 0.8438, 0.2809], [0.9411, 0.8475, 0.2758], [0.9457, 0.8512, 0.2705], [0.9502, 0.8549, 0.2651], [0.9547, 0.8586, 0.2594], [0.9593, 0.8624, 0.2536], [0.9639, 0.8661, 0.2474], [0.9685, 0.8698, 0.2413], [0.9731, 0.8736, 0.2347], [0.9778, 0.8773, 0.228], [0.9825, 0.881, 0.2209], [0.9873, 0.8847, 0.2133], [0.9922, 0.8884, 0.2055], [0.9948, 0.893, 0.2034], [0.9952, 0.8984, 0.2076], [0.9955, 0.9039, 0.2124], [0.9957, 0.9093, 0.2178]] }, "cool": { "interpolate": true, "colors": [[0.0, 1.0, 1.0], [0.0039, 0.9961, 1.0], [0.0078, 0.9922, 1.0], [0.0118, 0.9882, 1.0], [0.0157, 0.9843, 1.0], [0.0196, 0.9804, 1.0], [0.0235, 0.9765, 1.0], [0.0275, 0.9725, 1.0], [0.0314, 0.9686, 1.0], [0.0353, 0.9647, 1.0], [0.0392, 0.9608, 1.0], [0.0431, 0.9569, 1.0], [0.0471, 0.9529, 1.0], [0.051, 0.949, 1.0], [0.0549, 0.9451, 1.0], [0.0588, 0.9412, 1.0], [0.0627, 0.9373, 1.0], [0.0667, 0.9333, 1.0], [0.0706, 0.9294, 1.0], [0.0745, 0.9255, 1.0], [0.0784, 0.9216, 1.0], [0.0824, 0.9176, 1.0], [0.0863, 0.9137, 1.0], [0.0902, 0.9098, 1.0], [0.0941, 0.9059, 1.0], [0.098, 0.902, 1.0], [0.102, 0.898, 1.0], [0.1059, 0.8941, 1.0], [0.1098, 0.8902, 1.0], [0.1137, 0.8863, 1.0], [0.1176, 0.8824, 1.0], [0.1216, 0.8784, 1.0], [0.1255, 0.8745, 1.0], [0.1294, 0.8706, 1.0], [0.1333, 0.8667, 1.0], [0.1373, 0.8627, 1.0], [0.1412, 0.8588, 1.0], [0.1451, 0.8549, 1.0], [0.149, 0.851, 1.0], [0.1529, 0.8471, 1.0], [0.1569, 0.8431, 1.0], [0.1608, 0.8392, 1.0], [0.1647, 0.8353, 1.0], [0.1686, 0.8314, 1.0], [0.1725, 0.8275, 1.0], [0.1765, 0.8235, 1.0], [0.1804, 0.8196, 1.0], [0.1843, 0.8157, 1.0], [0.1882, 0.8118, 1.0], [0.1922, 0.8078, 1.0], [0.1961, 0.8039, 1.0], [0.2, 0.8, 1.0], [0.2039, 0.7961, 1.0], [0.2078, 0.7922, 1.0], [0.2118, 0.7882, 1.0], [0.2157, 0.7843, 1.0], [0.2196, 0.7804, 1.0], [0.2235, 0.7765, 1.0], [0.2275, 0.7725, 1.0], [0.2314, 0.7686, 1.0], [0.2353, 0.7647, 1.0], [0.2392, 0.7608, 1.0], [0.2431, 0.7569, 1.0], [0.2471, 0.7529, 1.0], [0.251, 0.749, 1.0], [0.2549, 0.7451, 1.0], [0.2588, 0.7412, 1.0], [0.2627, 0.7373, 1.0], [0.2667, 0.7333, 1.0], [0.2706, 0.7294, 1.0], [0.2745, 0.7255, 1.0], [0.2784, 0.7216, 1.0], [0.2824, 0.7176, 1.0], [0.2863, 0.7137, 1.0], [0.2902, 0.7098, 1.0], [0.2941, 0.7059, 1.0], [0.298, 0.702, 1.0], [0.302, 0.698, 1.0], [0.3059, 0.6941, 1.0], [0.3098, 0.6902, 1.0], [0.3137, 0.6863, 1.0], [0.3176, 0.6824, 1.0], [0.3216, 0.6784, 1.0], [0.3255, 0.6745, 1.0], [0.3294, 0.6706, 1.0], [0.3333, 0.6667, 1.0], [0.3373, 0.6627, 1.0], [0.3412, 0.6588, 1.0], [0.3451, 0.6549, 1.0], [0.349, 0.651, 1.0], [0.3529, 0.6471, 1.0], [0.3569, 0.6431, 1.0], [0.3608, 0.6392, 1.0], [0.3647, 0.6353, 1.0], [0.3686, 0.6314, 1.0], [0.3725, 0.6275, 1.0], [0.3765, 0.6235, 1.0], [0.3804, 0.6196, 1.0], [0.3843, 0.6157, 1.0], [0.3882, 0.6118, 1.0], [0.3922, 0.6078, 1.0], [0.3961, 0.6039, 1.0], [0.4, 0.6, 1.0], [0.4039, 0.5961, 1.0], [0.4078, 0.5922, 1.0], [0.4118, 0.5882, 1.0], [0.4157, 0.5843, 1.0], [0.4196, 0.5804, 1.0], [0.4235, 0.5765, 1.0], [0.4275, 0.5725, 1.0], [0.4314, 0.5686, 1.0], [0.4353, 0.5647, 1.0], [0.4392, 0.5608, 1.0], [0.4431, 0.5569, 1.0], [0.4471, 0.5529, 1.0], [0.451, 0.549, 1.0], [0.4549, 0.5451, 1.0], [0.4588, 0.5412, 1.0], [0.4627, 0.5373, 1.0], [0.4667, 0.5333, 1.0], [0.4706, 0.5294, 1.0], [0.4745, 0.5255, 1.0], [0.4784, 0.5216, 1.0], [0.4824, 0.5176, 1.0], [0.4863, 0.5137, 1.0], [0.4902, 0.5098, 1.0], [0.4941, 0.5059, 1.0], [0.498, 0.502, 1.0], [0.502, 0.498, 1.0], [0.5059, 0.4941, 1.0], [0.5098, 0.4902, 1.0], [0.5137, 0.4863, 1.0], [0.5176, 0.4824, 1.0], [0.5216, 0.4784, 1.0], [0.5255, 0.4745, 1.0], [0.5294, 0.4706, 1.0], [0.5333, 0.4667, 1.0], [0.5373, 0.4627, 1.0], [0.5412, 0.4588, 1.0], [0.5451, 0.4549, 1.0], [0.549, 0.451, 1.0], [0.5529, 0.4471, 1.0], [0.5569, 0.4431, 1.0], [0.5608, 0.4392, 1.0], [0.5647, 0.4353, 1.0], [0.5686, 0.4314, 1.0], [0.5725, 0.4275, 1.0], [0.5765, 0.4235, 1.0], [0.5804, 0.4196, 1.0], [0.5843, 0.4157, 1.0], [0.5882, 0.4118, 1.0], [0.5922, 0.4078, 1.0], [0.5961, 0.4039, 1.0], [0.6, 0.4, 1.0], [0.6039, 0.3961, 1.0], [0.6078, 0.3922, 1.0], [0.6118, 0.3882, 1.0], [0.6157, 0.3843, 1.0], [0.6196, 0.3804, 1.0], [0.6235, 0.3765, 1.0], [0.6275, 0.3725, 1.0], [0.6314, 0.3686, 1.0], [0.6353, 0.3647, 1.0], [0.6392, 0.3608, 1.0], [0.6431, 0.3569, 1.0], [0.6471, 0.3529, 1.0], [0.651, 0.349, 1.0], [0.6549, 0.3451, 1.0], [0.6588, 0.3412, 1.0], [0.6627, 0.3373, 1.0], [0.6667, 0.3333, 1.0], [0.6706, 0.3294, 1.0], [0.6745, 0.3255, 1.0], [0.6784, 0.3216, 1.0], [0.6824, 0.3176, 1.0], [0.6863, 0.3137, 1.0], [0.6902, 0.3098, 1.0], [0.6941, 0.3059, 1.0], [0.698, 0.302, 1.0], [0.702, 0.298, 1.0], [0.7059, 0.2941, 1.0], [0.7098, 0.2902, 1.0], [0.7137, 0.2863, 1.0], [0.7176, 0.2824, 1.0], [0.7216, 0.2784, 1.0], [0.7255, 0.2745, 1.0], [0.7294, 0.2706, 1.0], [0.7333, 0.2667, 1.0], [0.7373, 0.2627, 1.0], [0.7412, 0.2588, 1.0], [0.7451, 0.2549, 1.0], [0.749, 0.251, 1.0], [0.7529, 0.2471, 1.0], [0.7569, 0.2431, 1.0], [0.7608, 0.2392, 1.0], [0.7647, 0.2353, 1.0], [0.7686, 0.2314, 1.0], [0.7725, 0.2275, 1.0], [0.7765, 0.2235, 1.0], [0.7804, 0.2196, 1.0], [0.7843, 0.2157, 1.0], [0.7882, 0.2118, 1.0], [0.7922, 0.2078, 1.0], [0.7961, 0.2039, 1.0], [0.8, 0.2, 1.0], [0.8039, 0.1961, 1.0], [0.8078, 0.1922, 1.0], [0.8118, 0.1882, 1.0], [0.8157, 0.1843, 1.0], [0.8196, 0.1804, 1.0], [0.8235, 0.1765, 1.0], [0.8275, 0.1725, 1.0], [0.8314, 0.1686, 1.0], [0.8353, 0.1647, 1.0], [0.8392, 0.1608, 1.0], [0.8431, 0.1569, 1.0], [0.8471, 0.1529, 1.0], [0.851, 0.149, 1.0], [0.8549, 0.1451, 1.0], [0.8588, 0.1412, 1.0], [0.8627, 0.1373, 1.0], [0.8667, 0.1333, 1.0], [0.8706, 0.1294, 1.0], [0.8745, 0.1255, 1.0], [0.8784, 0.1216, 1.0], [0.8824, 0.1176, 1.0], [0.8863, 0.1137, 1.0], [0.8902, 0.1098, 1.0], [0.8941, 0.1059, 1.0], [0.898, 0.102, 1.0], [0.902, 0.098, 1.0], [0.9059, 0.0941, 1.0], [0.9098, 0.0902, 1.0], [0.9137, 0.0863, 1.0], [0.9176, 0.0824, 1.0], [0.9216, 0.0784, 1.0], [0.9255, 0.0745, 1.0], [0.9294, 0.0706, 1.0], [0.9333, 0.0667, 1.0], [0.9373, 0.0627, 1.0], [0.9412, 0.0588, 1.0], [0.9451, 0.0549, 1.0], [0.949, 0.051, 1.0], [0.9529, 0.0471, 1.0], [0.9569, 0.0431, 1.0], [0.9608, 0.0392, 1.0], [0.9647, 0.0353, 1.0], [0.9686, 0.0314, 1.0], [0.9725, 0.0275, 1.0], [0.9765, 0.0235, 1.0], [0.9804, 0.0196, 1.0], [0.9843, 0.0157, 1.0], [0.9882, 0.0118, 1.0], [0.9922, 0.0078, 1.0], [0.9961, 0.0039, 1.0], [1.0, 0.0, 1.0]] }, "coolwarm": { "interpolate": true, "colors": [[0.2298, 0.2987, 0.7537], [0.2344, 0.3055, 0.7597], [0.2389, 0.3124, 0.7657], [0.2435, 0.3192, 0.7717], [0.2481, 0.326, 0.7777], [0.2527, 0.3328, 0.7837], [0.2572, 0.3397, 0.7897], [0.2618, 0.3465, 0.7957], [0.2664, 0.3533, 0.8016], [0.2711, 0.36, 0.8071], [0.2758, 0.3667, 0.8126], [0.2805, 0.3734, 0.818], [0.2853, 0.3801, 0.8235], [0.29, 0.3868, 0.8289], [0.2947, 0.3935, 0.8344], [0.2994, 0.4002, 0.8398], [0.3042, 0.4069, 0.8453], [0.3091, 0.4135, 0.8501], [0.3139, 0.4201, 0.855], [0.3188, 0.4266, 0.8599], [0.3237, 0.4332, 0.8647], [0.3286, 0.4397, 0.8696], [0.3335, 0.4463, 0.8745], [0.3384, 0.4528, 0.8793], [0.3433, 0.4594, 0.8841], [0.3483, 0.4657, 0.8883], [0.3534, 0.4721, 0.8926], [0.3584, 0.4784, 0.8968], [0.3635, 0.4848, 0.901], [0.3685, 0.4911, 0.9052], [0.3736, 0.4975, 0.9095], [0.3786, 0.5039, 0.9137], [0.3837, 0.5102, 0.9178], [0.3889, 0.5163, 0.9214], [0.394, 0.5224, 0.9249], [0.3992, 0.5285, 0.9285], [0.4044, 0.5346, 0.932], [0.4096, 0.5408, 0.9355], [0.4148, 0.5469, 0.9391], [0.42, 0.553, 0.9426], [0.4252, 0.5591, 0.9461], [0.4305, 0.5649, 0.9489], [0.4358, 0.5707, 0.9517], [0.4411, 0.5765, 0.9545], [0.4464, 0.5824, 0.9574], [0.4517, 0.5882, 0.9602], [0.457, 0.594, 0.963], [0.4624, 0.5998, 0.9659], [0.4677, 0.6056, 0.9685], [0.4731, 0.6111, 0.9706], [0.4785, 0.6166, 0.9727], [0.4839, 0.622, 0.9748], [0.4892, 0.6275, 0.9769], [0.4946, 0.633, 0.979], [0.5, 0.6385, 0.9811], [0.5054, 0.644, 0.9832], [0.5108, 0.6494, 0.9851], [0.5163, 0.6545, 0.9864], [0.5217, 0.6596, 0.9877], [0.5271, 0.6647, 0.9891], [0.5326, 0.6698, 0.9904], [0.538, 0.6749, 0.9917], [0.5434, 0.68, 0.9931], [0.5489, 0.6851, 0.9944], [0.5543, 0.6901, 0.9955], [0.5597, 0.6948, 0.9961], [0.5652, 0.6994, 0.9966], [0.5706, 0.7041, 0.9972], [0.5761, 0.7088, 0.9978], [0.5815, 0.7135, 0.9983], [0.5869, 0.7181, 0.9989], [0.5924, 0.7228, 0.9994], [0.5978, 0.7273, 0.9998], [0.6032, 0.7315, 0.9996], [0.6085, 0.7357, 0.9994], [0.6139, 0.7399, 0.9991], [0.6193, 0.7441, 0.9989], [0.6247, 0.7483, 0.9987], [0.6301, 0.7525, 0.9985], [0.6355, 0.7567, 0.9983], [0.6408, 0.7608, 0.9978], [0.6461, 0.7644, 0.9969], [0.6514, 0.7681, 0.9959], [0.6567, 0.7718, 0.9949], [0.662, 0.7755, 0.9939], [0.6673, 0.7792, 0.993], [0.6725, 0.7829, 0.992], [0.6778, 0.7865, 0.991], [0.6831, 0.79, 0.9898], [0.6882, 0.7932, 0.988], [0.6933, 0.7963, 0.9863], [0.6985, 0.7994, 0.9846], [0.7036, 0.8026, 0.9828], [0.7087, 0.8057, 0.9811], [0.7139, 0.8089, 0.9794], [0.719, 0.812, 0.9777], [0.724, 0.8149, 0.9757], [0.729, 0.8175, 0.9732], [0.7339, 0.82, 0.9707], [0.7388, 0.8226, 0.9683], [0.7438, 0.8251, 0.9658], [0.7487, 0.8277, 0.9633], [0.7536, 0.8302, 0.9609], [0.7585, 0.8328, 0.9584], [0.7634, 0.8351, 0.9557], [0.768, 0.837, 0.9525], [0.7727, 0.839, 0.9493], [0.7774, 0.8409, 0.9461], [0.782, 0.8429, 0.943], [0.7867, 0.8448, 0.9398], [0.7914, 0.8468, 0.9366], [0.7961, 0.8487, 0.9335], [0.8006, 0.8504, 0.93], [0.805, 0.8517, 0.9262], [0.8093, 0.853, 0.9223], [0.8137, 0.8543, 0.9185], [0.8181, 0.8556, 0.9146], [0.8224, 0.8569, 0.9108], [0.8268, 0.8582, 0.907], [0.8311, 0.8595, 0.9031], [0.8353, 0.8605, 0.899], [0.8394, 0.8612, 0.8945], [0.8434, 0.8618, 0.89], [0.8474, 0.8625, 0.8855], [0.8514, 0.8631, 0.8811], [0.8554, 0.8638, 0.8766], [0.8594, 0.8644, 0.8721], [0.8634, 0.8651, 0.8676], [0.8674, 0.8644, 0.8626], [0.8715, 0.8623, 0.857], [0.8756, 0.8602, 0.8514], [0.8796, 0.8582, 0.8458], [0.8837, 0.8561, 0.8403], [0.8878, 0.854, 0.8347], [0.8918, 0.852, 0.8291], [0.8959, 0.8499, 0.8235], [0.8995, 0.8475, 0.8178], [0.9028, 0.8448, 0.812], [0.9062, 0.8421, 0.8062], [0.9095, 0.8394, 0.8003], [0.9128, 0.8367, 0.7945], [0.9161, 0.834, 0.7887], [0.9194, 0.8313, 0.7829], [0.9227, 0.8286, 0.7771], [0.9256, 0.8255, 0.7711], [0.9281, 0.8222, 0.7651], [0.9307, 0.8189, 0.7591], [0.9332, 0.8156, 0.7532], [0.9358, 0.8122, 0.7472], [0.9383, 0.8089, 0.7412], [0.9409, 0.8056, 0.7352], [0.9434, 0.8023, 0.7292], [0.9455, 0.7986, 0.7231], [0.9473, 0.7947, 0.717], [0.9492, 0.7908, 0.7109], [0.951, 0.7869, 0.7048], [0.9528, 0.783, 0.6986], [0.9546, 0.7791, 0.6925], [0.9564, 0.7751, 0.6864], [0.9582, 0.7712, 0.6803], [0.9595, 0.767, 0.6741], [0.9606, 0.7625, 0.668], [0.9616, 0.758, 0.6618], [0.9627, 0.7536, 0.6556], [0.9638, 0.7491, 0.6494], [0.9648, 0.7446, 0.6432], [0.9659, 0.7401, 0.6371], [0.967, 0.7357, 0.6309], [0.9675, 0.7308, 0.6247], [0.9679, 0.7258, 0.6185], [0.9682, 0.7208, 0.6123], [0.9685, 0.7158, 0.6061], [0.9689, 0.7108, 0.5999], [0.9692, 0.7058, 0.5937], [0.9695, 0.7008, 0.5875], [0.9699, 0.6958, 0.5813], [0.9697, 0.6905, 0.5751], [0.9693, 0.685, 0.569], [0.9689, 0.6795, 0.5628], [0.9685, 0.674, 0.5566], [0.9681, 0.6685, 0.5505], [0.9677, 0.663, 0.5443], [0.9673, 0.6575, 0.5382], [0.9669, 0.652, 0.532], [0.966, 0.6461, 0.5259], [0.9649, 0.6402, 0.5198], [0.9638, 0.6342, 0.5137], [0.9627, 0.6282, 0.5076], [0.9616, 0.6222, 0.5016], [0.9605, 0.6163, 0.4955], [0.9594, 0.6103, 0.4894], [0.9583, 0.6043, 0.4833], [0.9567, 0.598, 0.4773], [0.9549, 0.5916, 0.4713], [0.9531, 0.5852, 0.4654], [0.9513, 0.5788, 0.4594], [0.9495, 0.5724, 0.4534], [0.9477, 0.566, 0.4475], [0.9459, 0.5596, 0.4415], [0.9441, 0.5532, 0.4355], [0.9417, 0.5464, 0.4297], [0.9393, 0.5396, 0.4239], [0.9368, 0.5327, 0.4181], [0.9343, 0.5259, 0.4123], [0.9318, 0.5191, 0.4065], [0.9294, 0.5123, 0.4007], [0.9269, 0.5054, 0.3949], [0.9244, 0.4986, 0.3891], [0.9214, 0.4914, 0.3834], [0.9183, 0.4842, 0.3778], [0.9152, 0.4769, 0.3722], [0.912, 0.4697, 0.3666], [0.9089, 0.4624, 0.361], [0.9058, 0.4552, 0.3553], [0.9027, 0.4479, 0.3497], [0.8995, 0.4407, 0.3441], [0.8959, 0.4331, 0.3387], [0.8921, 0.4254, 0.3333], [0.8884, 0.4177, 0.3279], [0.8846, 0.41, 0.3225], [0.8809, 0.4023, 0.3171], [0.8771, 0.3946, 0.3117], [0.8734, 0.387, 0.3063], [0.8697, 0.3793, 0.3009], [0.8654, 0.3711, 0.2958], [0.8611, 0.3629, 0.2906], [0.8567, 0.3547, 0.2855], [0.8524, 0.3465, 0.2803], [0.848, 0.3383, 0.2752], [0.8437, 0.3301, 0.2701], [0.8394, 0.3219, 0.2649], [0.835, 0.3136, 0.2598], [0.8302, 0.3047, 0.2549], [0.8253, 0.2957, 0.25], [0.8204, 0.2868, 0.2452], [0.8155, 0.2778, 0.2403], [0.8106, 0.2688, 0.2354], [0.8057, 0.2598, 0.2306], [0.8008, 0.2508, 0.2257], [0.7959, 0.2418, 0.2208], [0.7906, 0.2314, 0.2162], [0.7852, 0.2209, 0.2117], [0.7797, 0.2103, 0.2071], [0.7743, 0.1998, 0.2025], [0.7689, 0.1892, 0.198], [0.7635, 0.1787, 0.1934], [0.7581, 0.1681, 0.1888], [0.7527, 0.1576, 0.1843], [0.7468, 0.14, 0.18], [0.741, 0.1222, 0.1757], [0.7351, 0.1045, 0.1715], [0.7292, 0.0867, 0.1672], [0.7233, 0.0689, 0.163], [0.7174, 0.0511, 0.1587], [0.7116, 0.0333, 0.1545], [0.7057, 0.0156, 0.1502]] }, "copper": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0048, 0.0031, 0.002], [0.0097, 0.0061, 0.0039], [0.0145, 0.0092, 0.0059], [0.0194, 0.0123, 0.0078], [0.0242, 0.0153, 0.0098], [0.0291, 0.0184, 0.0117], [0.0339, 0.0214, 0.0137], [0.0388, 0.0245, 0.0156], [0.0436, 0.0276, 0.0176], [0.0484, 0.0306, 0.0195], [0.0533, 0.0337, 0.0215], [0.0581, 0.0368, 0.0234], [0.063, 0.0398, 0.0254], [0.0678, 0.0429, 0.0273], [0.0727, 0.046, 0.0293], [0.0775, 0.049, 0.0312], [0.0824, 0.0521, 0.0332], [0.0872, 0.0551, 0.0351], [0.092, 0.0582, 0.0371], [0.0969, 0.0613, 0.039], [0.1017, 0.0643, 0.041], [0.1066, 0.0674, 0.0429], [0.1114, 0.0705, 0.0449], [0.1163, 0.0735, 0.0468], [0.1211, 0.0766, 0.0488], [0.126, 0.0797, 0.0507], [0.1308, 0.0827, 0.0527], [0.1356, 0.0858, 0.0546], [0.1405, 0.0888, 0.0566], [0.1453, 0.0919, 0.0585], [0.1502, 0.095, 0.0605], [0.155, 0.098, 0.0624], [0.1599, 0.1011, 0.0644], [0.1647, 0.1042, 0.0663], [0.1696, 0.1072, 0.0683], [0.1744, 0.1103, 0.0702], [0.1792, 0.1134, 0.0722], [0.1841, 0.1164, 0.0741], [0.1889, 0.1195, 0.0761], [0.1938, 0.1225, 0.078], [0.1986, 0.1256, 0.08], [0.2035, 0.1287, 0.0819], [0.2083, 0.1317, 0.0839], [0.2131, 0.1348, 0.0858], [0.218, 0.1379, 0.0878], [0.2228, 0.1409, 0.0897], [0.2277, 0.144, 0.0917], [0.2325, 0.147, 0.0936], [0.2374, 0.1501, 0.0956], [0.2422, 0.1532, 0.0975], [0.2471, 0.1562, 0.0995], [0.2519, 0.1593, 0.1015], [0.2567, 0.1624, 0.1034], [0.2616, 0.1654, 0.1054], [0.2664, 0.1685, 0.1073], [0.2713, 0.1716, 0.1093], [0.2761, 0.1746, 0.1112], [0.281, 0.1777, 0.1132], [0.2858, 0.1807, 0.1151], [0.2907, 0.1838, 0.1171], [0.2955, 0.1869, 0.119], [0.3003, 0.1899, 0.121], [0.3052, 0.193, 0.1229], [0.31, 0.1961, 0.1249], [0.3149, 0.1991, 0.1268], [0.3197, 0.2022, 0.1288], [0.3246, 0.2053, 0.1307], [0.3294, 0.2083, 0.1327], [0.3343, 0.2114, 0.1346], [0.3391, 0.2144, 0.1366], [0.3439, 0.2175, 0.1385], [0.3488, 0.2206, 0.1405], [0.3536, 0.2236, 0.1424], [0.3585, 0.2267, 0.1444], [0.3633, 0.2298, 0.1463], [0.3682, 0.2328, 0.1483], [0.373, 0.2359, 0.1502], [0.3779, 0.239, 0.1522], [0.3827, 0.242, 0.1541], [0.3875, 0.2451, 0.1561], [0.3924, 0.2481, 0.158], [0.3972, 0.2512, 0.16], [0.4021, 0.2543, 0.1619], [0.4069, 0.2573, 0.1639], [0.4118, 0.2604, 0.1658], [0.4166, 0.2635, 0.1678], [0.4215, 0.2665, 0.1697], [0.4263, 0.2696, 0.1717], [0.4311, 0.2727, 0.1736], [0.436, 0.2757, 0.1756], [0.4408, 0.2788, 0.1775], [0.4457, 0.2818, 0.1795], [0.4505, 0.2849, 0.1814], [0.4554, 0.288, 0.1834], [0.4602, 0.291, 0.1853], [0.4651, 0.2941, 0.1873], [0.4699, 0.2972, 0.1892], [0.4747, 0.3002, 0.1912], [0.4796, 0.3033, 0.1931], [0.4844, 0.3064, 0.1951], [0.4893, 0.3094, 0.197], [0.4941, 0.3125, 0.199], [0.499, 0.3155, 0.201], [0.5038, 0.3186, 0.2029], [0.5087, 0.3217, 0.2049], [0.5135, 0.3247, 0.2068], [0.5183, 0.3278, 0.2088], [0.5232, 0.3309, 0.2107], [0.528, 0.3339, 0.2127], [0.5329, 0.337, 0.2146], [0.5377, 0.3401, 0.2166], [0.5426, 0.3431, 0.2185], [0.5474, 0.3462, 0.2205], [0.5522, 0.3492, 0.2224], [0.5571, 0.3523, 0.2244], [0.5619, 0.3554, 0.2263], [0.5668, 0.3584, 0.2283], [0.5716, 0.3615, 0.2302], [0.5765, 0.3646, 0.2322], [0.5813, 0.3676, 0.2341], [0.5862, 0.3707, 0.2361], [0.591, 0.3738, 0.238], [0.5958, 0.3768, 0.24], [0.6007, 0.3799, 0.2419], [0.6055, 0.3829, 0.2439], [0.6104, 0.386, 0.2458], [0.6152, 0.3891, 0.2478], [0.6201, 0.3921, 0.2497], [0.6249, 0.3952, 0.2517], [0.6298, 0.3983, 0.2536], [0.6346, 0.4013, 0.2556], [0.6394, 0.4044, 0.2575], [0.6443, 0.4074, 0.2595], [0.6491, 0.4105, 0.2614], [0.654, 0.4136, 0.2634], [0.6588, 0.4166, 0.2653], [0.6637, 0.4197, 0.2673], [0.6685, 0.4228, 0.2692], [0.6734, 0.4258, 0.2712], [0.6782, 0.4289, 0.2731], [0.683, 0.432, 0.2751], [0.6879, 0.435, 0.277], [0.6927, 0.4381, 0.279], [0.6976, 0.4411, 0.2809], [0.7024, 0.4442, 0.2829], [0.7073, 0.4473, 0.2848], [0.7121, 0.4503, 0.2868], [0.717, 0.4534, 0.2887], [0.7218, 0.4565, 0.2907], [0.7266, 0.4595, 0.2926], [0.7315, 0.4626, 0.2946], [0.7363, 0.4657, 0.2965], [0.7412, 0.4687, 0.2985], [0.746, 0.4718, 0.3005], [0.7509, 0.4748, 0.3024], [0.7557, 0.4779, 0.3044], [0.7606, 0.481, 0.3063], [0.7654, 0.484, 0.3083], [0.7702, 0.4871, 0.3102], [0.7751, 0.4902, 0.3122], [0.7799, 0.4932, 0.3141], [0.7848, 0.4963, 0.3161], [0.7896, 0.4994, 0.318], [0.7945, 0.5024, 0.32], [0.7993, 0.5055, 0.3219], [0.8042, 0.5085, 0.3239], [0.809, 0.5116, 0.3258], [0.8138, 0.5147, 0.3278], [0.8187, 0.5177, 0.3297], [0.8235, 0.5208, 0.3317], [0.8284, 0.5239, 0.3336], [0.8332, 0.5269, 0.3356], [0.8381, 0.53, 0.3375], [0.8429, 0.5331, 0.3395], [0.8478, 0.5361, 0.3414], [0.8526, 0.5392, 0.3434], [0.8574, 0.5422, 0.3453], [0.8623, 0.5453, 0.3473], [0.8671, 0.5484, 0.3492], [0.872, 0.5514, 0.3512], [0.8768, 0.5545, 0.3531], [0.8817, 0.5576, 0.3551], [0.8865, 0.5606, 0.357], [0.8913, 0.5637, 0.359], [0.8962, 0.5668, 0.3609], [0.901, 0.5698, 0.3629], [0.9059, 0.5729, 0.3648], [0.9107, 0.5759, 0.3668], [0.9156, 0.579, 0.3687], [0.9204, 0.5821, 0.3707], [0.9253, 0.5851, 0.3726], [0.9301, 0.5882, 0.3746], [0.9349, 0.5913, 0.3765], [0.9398, 0.5943, 0.3785], [0.9446, 0.5974, 0.3804], [0.9495, 0.6005, 0.3824], [0.9543, 0.6035, 0.3843], [0.9592, 0.6066, 0.3863], [0.964, 0.6096, 0.3882], [0.9689, 0.6127, 0.3902], [0.9737, 0.6158, 0.3921], [0.9785, 0.6188, 0.3941], [0.9834, 0.6219, 0.396], [0.9882, 0.625, 0.398], [0.9931, 0.628, 0.4], [0.9979, 0.6311, 0.4019], [1.0, 0.6342, 0.4039], [1.0, 0.6372, 0.4058], [1.0, 0.6403, 0.4078], [1.0, 0.6433, 0.4097], [1.0, 0.6464, 0.4117], [1.0, 0.6495, 0.4136], [1.0, 0.6525, 0.4156], [1.0, 0.6556, 0.4175], [1.0, 0.6587, 0.4195], [1.0, 0.6617, 0.4214], [1.0, 0.6648, 0.4234], [1.0, 0.6678, 0.4253], [1.0, 0.6709, 0.4273], [1.0, 0.674, 0.4292], [1.0, 0.677, 0.4312], [1.0, 0.6801, 0.4331], [1.0, 0.6832, 0.4351], [1.0, 0.6862, 0.437], [1.0, 0.6893, 0.439], [1.0, 0.6924, 0.4409], [1.0, 0.6954, 0.4429], [1.0, 0.6985, 0.4448], [1.0, 0.7015, 0.4468], [1.0, 0.7046, 0.4487], [1.0, 0.7077, 0.4507], [1.0, 0.7107, 0.4526], [1.0, 0.7138, 0.4546], [1.0, 0.7169, 0.4565], [1.0, 0.7199, 0.4585], [1.0, 0.723, 0.4604], [1.0, 0.7261, 0.4624], [1.0, 0.7291, 0.4643], [1.0, 0.7322, 0.4663], [1.0, 0.7352, 0.4682], [1.0, 0.7383, 0.4702], [1.0, 0.7414, 0.4721], [1.0, 0.7444, 0.4741], [1.0, 0.7475, 0.476], [1.0, 0.7506, 0.478], [1.0, 0.7536, 0.4799], [1.0, 0.7567, 0.4819], [1.0, 0.7598, 0.4838], [1.0, 0.7628, 0.4858], [1.0, 0.7659, 0.4877], [1.0, 0.7689, 0.4897], [1.0, 0.772, 0.4916], [1.0, 0.7751, 0.4936], [1.0, 0.7781, 0.4955], [1.0, 0.7812, 0.4975]] }, "cubehelix": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0067, 0.0021, 0.006], [0.0133, 0.0043, 0.0122], [0.0196, 0.0065, 0.0186], [0.0257, 0.0088, 0.0252], [0.0317, 0.0112, 0.0319], [0.0374, 0.0136, 0.0389], [0.0429, 0.0161, 0.046], [0.0482, 0.0187, 0.0533], [0.0533, 0.0214, 0.0607], [0.0581, 0.0242, 0.0682], [0.0627, 0.0271, 0.0758], [0.067, 0.0301, 0.0835], [0.0711, 0.0332, 0.0912], [0.0749, 0.0365, 0.0991], [0.0785, 0.0398, 0.1069], [0.0819, 0.0433, 0.1148], [0.085, 0.0469, 0.1227], [0.0879, 0.0506, 0.1306], [0.0905, 0.0545, 0.1385], [0.0928, 0.0584, 0.1464], [0.095, 0.0625, 0.1542], [0.0969, 0.0668, 0.1619], [0.0985, 0.0712, 0.1696], [0.1, 0.0757, 0.1771], [0.1012, 0.0803, 0.1846], [0.1022, 0.0851, 0.192], [0.103, 0.09, 0.1992], [0.1036, 0.095, 0.2062], [0.104, 0.1001, 0.2131], [0.1043, 0.1054, 0.2199], [0.1043, 0.1108, 0.2264], [0.1042, 0.1163, 0.2328], [0.1039, 0.122, 0.2389], [0.1035, 0.1277, 0.2448], [0.103, 0.1336, 0.2505], [0.1023, 0.1395, 0.256], [0.1015, 0.1456, 0.2612], [0.1007, 0.1518, 0.2662], [0.0997, 0.158, 0.2709], [0.0987, 0.1644, 0.2754], [0.0976, 0.1708, 0.2796], [0.0964, 0.1773, 0.2835], [0.0952, 0.1839, 0.2871], [0.094, 0.1905, 0.2904], [0.0928, 0.1972, 0.2935], [0.0916, 0.2039, 0.2962], [0.0904, 0.2107, 0.2987], [0.0892, 0.2176, 0.3009], [0.0881, 0.2244, 0.3027], [0.0871, 0.2313, 0.3043], [0.0861, 0.2382, 0.3056], [0.0851, 0.2452, 0.3066], [0.0843, 0.2521, 0.3073], [0.0836, 0.259, 0.3077], [0.083, 0.2659, 0.3079], [0.0826, 0.2728, 0.3077], [0.0823, 0.2797, 0.3073], [0.0821, 0.2866, 0.3066], [0.0822, 0.2934, 0.3057], [0.0824, 0.3001, 0.3045], [0.0828, 0.3069, 0.303], [0.0834, 0.3135, 0.3014], [0.0842, 0.3201, 0.2994], [0.0852, 0.3266, 0.2973], [0.0865, 0.3331, 0.295], [0.088, 0.3394, 0.2924], [0.0898, 0.3457, 0.2897], [0.0918, 0.3518, 0.2868], [0.0941, 0.3579, 0.2838], [0.0966, 0.3638, 0.2806], [0.0994, 0.3697, 0.2772], [0.1025, 0.3754, 0.2737], [0.1059, 0.381, 0.2702], [0.1096, 0.3864, 0.2665], [0.1136, 0.3918, 0.2627], [0.1179, 0.3969, 0.2589], [0.1225, 0.402, 0.255], [0.1274, 0.4069, 0.2511], [0.1325, 0.4116, 0.2471], [0.138, 0.4162, 0.2431], [0.1438, 0.4207, 0.2392], [0.1499, 0.4249, 0.2352], [0.1563, 0.4291, 0.2313], [0.163, 0.433, 0.2275], [0.17, 0.4368, 0.2237], [0.1773, 0.4404, 0.22], [0.1849, 0.4439, 0.2164], [0.1928, 0.4472, 0.2129], [0.201, 0.4503, 0.2096], [0.2094, 0.4533, 0.2064], [0.2181, 0.4561, 0.2033], [0.2271, 0.4587, 0.2004], [0.2363, 0.4611, 0.1977], [0.2457, 0.4634, 0.1952], [0.2555, 0.4656, 0.1929], [0.2654, 0.4676, 0.1908], [0.2755, 0.4694, 0.189], [0.2859, 0.4711, 0.1874], [0.2965, 0.4726, 0.1861], [0.3072, 0.474, 0.185], [0.3182, 0.4752, 0.1842], [0.3293, 0.4763, 0.1837], [0.3405, 0.4772, 0.1835], [0.3519, 0.4781, 0.1836], [0.3635, 0.4788, 0.1841], [0.3751, 0.4794, 0.1848], [0.3869, 0.4798, 0.1859], [0.3987, 0.4802, 0.1873], [0.4106, 0.4804, 0.1891], [0.4226, 0.4806, 0.1912], [0.4346, 0.4807, 0.1937], [0.4467, 0.4807, 0.1965], [0.4588, 0.4806, 0.1997], [0.4709, 0.4804, 0.2033], [0.4829, 0.4802, 0.2072], [0.495, 0.4799, 0.2115], [0.507, 0.4796, 0.2161], [0.519, 0.4792, 0.2211], [0.5309, 0.4788, 0.2265], [0.5427, 0.4784, 0.2322], [0.5544, 0.4779, 0.2383], [0.5661, 0.4774, 0.2448], [0.5776, 0.477, 0.2516], [0.5889, 0.4765, 0.2587], [0.6002, 0.476, 0.2662], [0.6112, 0.4756, 0.2741], [0.6221, 0.4752, 0.2822], [0.6328, 0.4748, 0.2907], [0.6434, 0.4745, 0.2995], [0.6537, 0.4742, 0.3086], [0.6638, 0.4739, 0.318], [0.6736, 0.4738, 0.3277], [0.6832, 0.4737, 0.3376], [0.6926, 0.4736, 0.3478], [0.7017, 0.4737, 0.3583], [0.7106, 0.4738, 0.369], [0.7192, 0.4741, 0.38], [0.7274, 0.4744, 0.3912], [0.7355, 0.4749, 0.4025], [0.7432, 0.4755, 0.4141], [0.7506, 0.4761, 0.4258], [0.7577, 0.477, 0.4378], [0.7645, 0.4779, 0.4498], [0.7709, 0.479, 0.462], [0.7771, 0.4802, 0.4743], [0.7829, 0.4816, 0.4867], [0.7884, 0.4831, 0.4992], [0.7936, 0.4848, 0.5118], [0.7985, 0.4866, 0.5244], [0.803, 0.4886, 0.5371], [0.8072, 0.4907, 0.5498], [0.8111, 0.493, 0.5625], [0.8146, 0.4955, 0.5753], [0.8179, 0.4981, 0.5879], [0.8208, 0.5009, 0.6006], [0.8234, 0.5039, 0.6132], [0.8256, 0.5071, 0.6257], [0.8276, 0.5104, 0.6382], [0.8293, 0.5139, 0.6506], [0.8307, 0.5175, 0.6628], [0.8318, 0.5213, 0.6749], [0.8326, 0.5253, 0.6869], [0.8331, 0.5295, 0.6988], [0.8334, 0.5338, 0.7104], [0.8334, 0.5383, 0.7219], [0.8332, 0.543, 0.7332], [0.8327, 0.5478, 0.7443], [0.832, 0.5528, 0.7552], [0.8311, 0.5579, 0.7659], [0.83, 0.5632, 0.7763], [0.8286, 0.5686, 0.7864], [0.8271, 0.5742, 0.7964], [0.8254, 0.5799, 0.806], [0.8236, 0.5857, 0.8154], [0.8216, 0.5917, 0.8245], [0.8195, 0.5978, 0.8333], [0.8172, 0.604, 0.8418], [0.8149, 0.6103, 0.85], [0.8124, 0.6167, 0.8579], [0.8099, 0.6233, 0.8654], [0.8073, 0.6299, 0.8727], [0.8046, 0.6366, 0.8797], [0.8019, 0.6434, 0.8863], [0.7992, 0.6502, 0.8926], [0.7964, 0.6571, 0.8986], [0.7937, 0.6641, 0.9042], [0.791, 0.6712, 0.9096], [0.7883, 0.6783, 0.9146], [0.7856, 0.6854, 0.9193], [0.783, 0.6926, 0.9236], [0.7804, 0.6997, 0.9277], [0.778, 0.7069, 0.9314], [0.7756, 0.7142, 0.9349], [0.7733, 0.7214, 0.938], [0.7711, 0.7286, 0.9409], [0.7691, 0.7358, 0.9434], [0.7672, 0.743, 0.9457], [0.7655, 0.7501, 0.9477], [0.7639, 0.7573, 0.9494], [0.7625, 0.7644, 0.9509], [0.7613, 0.7714, 0.9521], [0.7602, 0.7784, 0.9531], [0.7594, 0.7853, 0.9538], [0.7587, 0.7922, 0.9544], [0.7583, 0.799, 0.9547], [0.7581, 0.8057, 0.9549], [0.7581, 0.8124, 0.9548], [0.7584, 0.8189, 0.9546], [0.7588, 0.8254, 0.9543], [0.7596, 0.8318, 0.9538], [0.7606, 0.838, 0.9531], [0.7618, 0.8442, 0.9524], [0.7633, 0.8502, 0.9516], [0.765, 0.8562, 0.9506], [0.767, 0.862, 0.9496], [0.7693, 0.8677, 0.9486], [0.7718, 0.8733, 0.9475], [0.7745, 0.8787, 0.9463], [0.7776, 0.884, 0.9452], [0.7808, 0.8892, 0.9441], [0.7844, 0.8943, 0.9429], [0.7882, 0.8992, 0.9419], [0.7922, 0.904, 0.9408], [0.7965, 0.9087, 0.9398], [0.801, 0.9132, 0.9389], [0.8057, 0.9176, 0.9381], [0.8107, 0.9218, 0.9374], [0.8158, 0.926, 0.9368], [0.8212, 0.93, 0.9363], [0.8268, 0.9338, 0.936], [0.8326, 0.9376, 0.9358], [0.8386, 0.9412, 0.9358], [0.8447, 0.9447, 0.9359], [0.851, 0.9481, 0.9363], [0.8575, 0.9513, 0.9368], [0.8641, 0.9545, 0.9376], [0.8708, 0.9575, 0.9386], [0.8777, 0.9604, 0.9397], [0.8847, 0.9633, 0.9412], [0.8917, 0.966, 0.9429], [0.8989, 0.9687, 0.9448], [0.9061, 0.9712, 0.947], [0.9134, 0.9737, 0.9494], [0.9207, 0.9761, 0.9521], [0.928, 0.9785, 0.9551], [0.9354, 0.9808, 0.9583], [0.9428, 0.983, 0.9619], [0.9501, 0.9852, 0.9657], [0.9574, 0.9874, 0.9697], [0.9647, 0.9895, 0.9741], [0.9719, 0.9917, 0.9787], [0.9791, 0.9937, 0.9836], [0.9862, 0.9958, 0.9888], [0.9931, 0.9979, 0.9943], [1.0, 1.0, 1.0]] }, "flag": { "interpolate": true, "colors": [[1.0, 0.0, 0.0], [1.0, 0.3784, 0.2098], [1.0, 0.7005, 0.4931], [1.0, 0.9185, 0.7774], [1.0, 0.9998, 1.0], [0.8029, 0.9325, 1.0], [0.5208, 0.7264, 1.0], [0.2355, 0.4124, 1.0], [0.0, 0.037, 1.0], [0.0, 0.0, 0.8156], [0.0, 0.0, 0.5346], [0.0, 0.0, 0.2486], [0.0, 0.0, 0.0], [0.1719, 0.0, 0.0], [0.4515, 0.0, 0.0], [0.7383, 0.0, 0.0], [0.9897, 0.0, 0.0], [1.0, 0.309, 0.1595], [1.0, 0.6459, 0.4377], [1.0, 0.8868, 0.7252], [1.0, 0.9957, 0.9791], [0.8528, 0.9566, 1.0], [0.5761, 0.7752, 1.0], [0.2881, 0.4785, 1.0], [0.0316, 0.1107, 1.0], [0.0, 0.0, 0.865], [0.0, 0.0, 0.5899], [0.0, 0.0, 0.3014], [0.0, 0.0, 0.0425], [0.123, 0.0, 0.0], [0.3964, 0.0, 0.0], [0.6852, 0.0, 0.0], [0.9464, 0.0, 0.0], [1.0, 0.2379, 0.1111], [1.0, 0.5878, 0.3827], [1.0, 0.8502, 0.6717], [1.0, 0.9862, 0.9352], [0.9007, 0.9755, 1.0], [0.631, 0.8197, 1.0], [0.3418, 0.5421, 1.0], [0.0761, 0.1837, 1.0], [0.0, 0.0, 0.9123], [0.0, 0.0, 0.6446], [0.0, 0.0, 0.3554], [0.0, 0.0, 0.0877], [0.0761, 0.0, 0.0], [0.3418, 0.0, 0.0], [0.631, 0.0, 0.0], [0.9007, 0.0, 0.0], [1.0, 0.1656, 0.0648], [1.0, 0.5264, 0.3283], [1.0, 0.809, 0.6173], [1.0, 0.9713, 0.8889], [0.9464, 0.9891, 1.0], [0.6852, 0.8598, 1.0], [0.3964, 0.6026, 1.0], [0.123, 0.2558, 1.0], [0.0, 0.0, 0.9575], [0.0, 0.0, 0.6986], [0.0, 0.0, 0.4101], [0.0, 0.0, 0.135], [0.0316, 0.0, 0.0], [0.2881, 0.0, 0.0], [0.5761, 0.0, 0.0], [0.8528, 0.0, 0.0], [1.0, 0.0923, 0.0209], [1.0, 0.4622, 0.2748], [1.0, 0.7634, 0.5623], [1.0, 0.9511, 0.8405], [0.9897, 0.9973, 1.0], [0.7383, 0.8952, 1.0], [0.4515, 0.6599, 1.0], [0.1719, 0.3265, 1.0], [0.0, 0.0, 1.0], [0.0, 0.0, 0.7514], [0.0, 0.0, 0.4654], [0.0, 0.0, 0.1844], [0.0, 0.0, 0.0], [0.2355, 0.0, 0.0], [0.5208, 0.0, 0.0], [0.8029, 0.0, 0.0], [1.0, 0.0185, 0.0], [1.0, 0.3955, 0.2226], [1.0, 0.7136, 0.5069], [1.0, 0.9256, 0.7902], [1.0, 1.0, 1.0], [0.7902, 0.9256, 1.0], [0.5069, 0.7136, 1.0], [0.2226, 0.3955, 1.0], [0.0, 0.0185, 1.0], [0.0, 0.0, 0.8029], [0.0, 0.0, 0.5208], [0.0, 0.0, 0.2355], [0.0, 0.0, 0.0], [0.1844, 0.0, 0.0], [0.4654, 0.0, 0.0], [0.7514, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 0.3265, 0.1719], [1.0, 0.6599, 0.4515], [1.0, 0.8952, 0.7383], [1.0, 0.9973, 0.9897], [0.8405, 0.9511, 1.0], [0.5623, 0.7634, 1.0], [0.2748, 0.4622, 1.0], [0.0209, 0.0923, 1.0], [0.0, 0.0, 0.8528], [0.0, 0.0, 0.5761], [0.0, 0.0, 0.2881], [0.0, 0.0, 0.0316], [0.135, 0.0, 0.0], [0.4101, 0.0, 0.0], [0.6986, 0.0, 0.0], [0.9575, 0.0, 0.0], [1.0, 0.2558, 0.123], [1.0, 0.6026, 0.3964], [1.0, 0.8598, 0.6852], [1.0, 0.9891, 0.9464], [0.8889, 0.9713, 1.0], [0.6173, 0.809, 1.0], [0.3283, 0.5264, 1.0], [0.0648, 0.1656, 1.0], [0.0, 0.0, 0.9007], [0.0, 0.0, 0.631], [0.0, 0.0, 0.3418], [0.0, 0.0, 0.0761], [0.0877, 0.0, 0.0], [0.3554, 0.0, 0.0], [0.6446, 0.0, 0.0], [0.9123, 0.0, 0.0], [1.0, 0.1837, 0.0761], [1.0, 0.5421, 0.3418], [1.0, 0.8197, 0.631], [1.0, 0.9755, 0.9007], [0.9352, 0.9862, 1.0], [0.6717, 0.8502, 1.0], [0.3827, 0.5878, 1.0], [0.1111, 0.2379, 1.0], [0.0, 0.0, 0.9464], [0.0, 0.0, 0.6852], [0.0, 0.0, 0.3964], [0.0, 0.0, 0.123], [0.0425, 0.0, 0.0], [0.3014, 0.0, 0.0], [0.5899, 0.0, 0.0], [0.865, 0.0, 0.0], [1.0, 0.1107, 0.0316], [1.0, 0.4785, 0.2881], [1.0, 0.7752, 0.5761], [1.0, 0.9566, 0.8528], [0.9791, 0.9957, 1.0], [0.7252, 0.8868, 1.0], [0.4377, 0.6459, 1.0], [0.1595, 0.309, 1.0], [0.0, 0.0, 0.9897], [0.0, 0.0, 0.7383], [0.0, 0.0, 0.4515], [0.0, 0.0, 0.1719], [0.0, 0.0, 0.0], [0.2486, 0.0, 0.0], [0.5346, 0.0, 0.0], [0.8156, 0.0, 0.0], [1.0, 0.037, 0.0], [1.0, 0.4124, 0.2355], [1.0, 0.7264, 0.5208], [1.0, 0.9325, 0.8029], [1.0, 0.9998, 1.0], [0.7774, 0.9185, 1.0], [0.4931, 0.7005, 1.0], [0.2098, 0.3784, 1.0], [0.0, 0.0, 1.0], [0.0, 0.0, 0.7902], [0.0, 0.0, 0.5069], [0.0, 0.0, 0.2226], [0.0, 0.0, 0.0], [0.1971, 0.0, 0.0], [0.4792, 0.0, 0.0], [0.7645, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 0.3439, 0.1844], [1.0, 0.6737, 0.4654], [1.0, 0.9032, 0.7514], [1.0, 0.9985, 1.0], [0.8281, 0.9452, 1.0], [0.5485, 0.7513, 1.0], [0.2617, 0.4457, 1.0], [0.0103, 0.0739, 1.0], [0.0, 0.0, 0.8405], [0.0, 0.0, 0.5623], [0.0, 0.0, 0.2748], [0.0, 0.0, 0.0209], [0.1472, 0.0, 0.0], [0.4239, 0.0, 0.0], [0.7119, 0.0, 0.0], [0.9684, 0.0, 0.0], [1.0, 0.2737, 0.135], [1.0, 0.6173, 0.4101], [1.0, 0.8691, 0.6986], [1.0, 0.9916, 0.9575], [0.877, 0.9667, 1.0], [0.6036, 0.798, 1.0], [0.3148, 0.5106, 1.0], [0.0536, 0.1473, 1.0], [0.0, 0.0, 0.8889], [0.0, 0.0, 0.6173], [0.0, 0.0, 0.3283], [0.0, 0.0, 0.0648], [0.0993, 0.0, 0.0], [0.369, 0.0, 0.0], [0.6582, 0.0, 0.0], [0.9239, 0.0, 0.0], [1.0, 0.2019, 0.0877], [1.0, 0.5575, 0.3554], [1.0, 0.8302, 0.6446], [1.0, 0.9794, 0.9123], [0.9239, 0.983, 1.0], [0.6582, 0.8403, 1.0], [0.369, 0.5727, 1.0], [0.0993, 0.2199, 1.0], [0.0, 0.0, 0.9352], [0.0, 0.0, 0.6717], [0.0, 0.0, 0.3827], [0.0, 0.0, 0.1111], [0.0536, 0.0, 0.0], [0.3148, 0.0, 0.0], [0.6036, 0.0, 0.0], [0.877, 0.0, 0.0], [1.0, 0.129, 0.0425], [1.0, 0.4947, 0.3014], [1.0, 0.7867, 0.5899], [1.0, 0.9618, 0.865], [0.9684, 0.9939, 1.0], [0.7119, 0.8781, 1.0], [0.4239, 0.6317, 1.0], [0.1472, 0.2914, 1.0], [0.0, 0.0, 0.9791], [0.0, 0.0, 0.7252], [0.0, 0.0, 0.4377], [0.0, 0.0, 0.1595], [0.0103, 0.0, 0.0], [0.2617, 0.0, 0.0], [0.5485, 0.0, 0.0], [0.8281, 0.0, 0.0], [1.0, 0.0554, 0.0], [1.0, 0.4291, 0.2486], [1.0, 0.739, 0.5346], [1.0, 0.939, 0.8156], [1.0, 0.9993, 1.0], [0.7645, 0.911, 1.0], [0.4792, 0.6872, 1.0], [0.1971, 0.3612, 1.0], [0.0, 0.0, 1.0], [0.0, 0.0, 0.7774], [0.0, 0.0, 0.4931], [0.0, 0.0, 0.2098], [0.0, 0.0, 0.0]] }, "gist_earth": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0026, 0.0, 0.1687], [0.0052, 0.0, 0.2217], [0.0078, 0.0, 0.2638], [0.0105, 0.0, 0.3059], [0.0131, 0.0, 0.3481], [0.0157, 0.0, 0.3902], [0.0183, 0.0, 0.4324], [0.0209, 0.0089, 0.4547], [0.0235, 0.0179, 0.4556], [0.0261, 0.0269, 0.4563], [0.0287, 0.036, 0.457], [0.0314, 0.045, 0.4577], [0.034, 0.054, 0.4584], [0.0366, 0.063, 0.4592], [0.0392, 0.072, 0.4599], [0.0418, 0.0811, 0.4606], [0.0444, 0.0901, 0.4613], [0.047, 0.0991, 0.462], [0.0497, 0.1081, 0.4627], [0.0523, 0.1171, 0.4634], [0.0549, 0.1262, 0.4641], [0.0575, 0.1352, 0.4648], [0.0601, 0.1442, 0.4656], [0.0627, 0.1532, 0.4663], [0.0653, 0.1622, 0.467], [0.0679, 0.1713, 0.4677], [0.0706, 0.1803, 0.4684], [0.0732, 0.1893, 0.4691], [0.0758, 0.1975, 0.4698], [0.0784, 0.2056, 0.4705], [0.081, 0.2138, 0.4712], [0.0836, 0.2219, 0.472], [0.0862, 0.2301, 0.4727], [0.0889, 0.2383, 0.4734], [0.0915, 0.2464, 0.4741], [0.0941, 0.2546, 0.4748], [0.0967, 0.2627, 0.4755], [0.0993, 0.2709, 0.4762], [0.1019, 0.279, 0.4769], [0.1045, 0.2872, 0.4776], [0.1072, 0.2954, 0.4784], [0.1098, 0.3035, 0.4791], [0.1124, 0.3108, 0.4798], [0.115, 0.3182, 0.4805], [0.1176, 0.3255, 0.4812], [0.1202, 0.3328, 0.4819], [0.1228, 0.3402, 0.4826], [0.1254, 0.3475, 0.4833], [0.1281, 0.3548, 0.484], [0.1307, 0.3622, 0.4848], [0.1333, 0.3695, 0.4855], [0.1359, 0.3768, 0.4862], [0.1385, 0.3842, 0.4869], [0.1411, 0.3904, 0.4876], [0.1437, 0.3966, 0.4883], [0.1464, 0.4028, 0.489], [0.149, 0.409, 0.4897], [0.1516, 0.4152, 0.4904], [0.1542, 0.4214, 0.4912], [0.1568, 0.4276, 0.4919], [0.1594, 0.4338, 0.4926], [0.162, 0.4399, 0.4933], [0.1646, 0.4461, 0.494], [0.1673, 0.4523, 0.4947], [0.1699, 0.4585, 0.4954], [0.1725, 0.4647, 0.4961], [0.1751, 0.4709, 0.4968], [0.1777, 0.4771, 0.4975], [0.1803, 0.4833, 0.4983], [0.1829, 0.4895, 0.499], [0.1856, 0.4957, 0.4997], [0.1882, 0.5019, 0.5004], [0.19, 0.5042, 0.4957], [0.1919, 0.5065, 0.4909], [0.1937, 0.5087, 0.4861], [0.1956, 0.511, 0.4813], [0.1974, 0.5133, 0.4765], [0.1993, 0.5155, 0.4717], [0.2011, 0.5178, 0.4669], [0.203, 0.52, 0.4621], [0.2048, 0.5223, 0.4573], [0.2067, 0.5245, 0.4525], [0.2085, 0.5268, 0.4477], [0.2104, 0.5291, 0.4429], [0.2122, 0.5313, 0.4381], [0.2141, 0.5336, 0.4333], [0.2159, 0.5358, 0.4285], [0.2178, 0.5381, 0.4237], [0.2196, 0.5404, 0.4189], [0.2215, 0.5426, 0.4141], [0.2233, 0.5449, 0.4093], [0.2252, 0.5471, 0.4045], [0.227, 0.5494, 0.3997], [0.2289, 0.5516, 0.3948], [0.2307, 0.5539, 0.39], [0.2326, 0.5562, 0.3852], [0.2344, 0.5584, 0.3804], [0.2363, 0.5607, 0.3756], [0.2381, 0.5629, 0.3708], [0.24, 0.5652, 0.366], [0.2418, 0.5674, 0.3612], [0.2437, 0.5697, 0.3564], [0.2455, 0.572, 0.3516], [0.2474, 0.5742, 0.3468], [0.2492, 0.5765, 0.342], [0.2511, 0.5787, 0.3372], [0.2529, 0.581, 0.3324], [0.2548, 0.5832, 0.3276], [0.2566, 0.5855, 0.3228], [0.2585, 0.5878, 0.318], [0.2603, 0.59, 0.3132], [0.2622, 0.5923, 0.3084], [0.264, 0.5945, 0.3036], [0.2659, 0.5968, 0.2988], [0.2677, 0.599, 0.294], [0.2696, 0.6013, 0.2892], [0.2715, 0.6036, 0.2844], [0.2802, 0.6058, 0.2796], [0.2889, 0.6081, 0.2748], [0.2976, 0.6103, 0.2771], [0.3063, 0.6126, 0.2794], [0.315, 0.6148, 0.2816], [0.3238, 0.6171, 0.2839], [0.3325, 0.6194, 0.2862], [0.3412, 0.6216, 0.2885], [0.3499, 0.6239, 0.2908], [0.3586, 0.6261, 0.2931], [0.3673, 0.6284, 0.2954], [0.3761, 0.6307, 0.2976], [0.3848, 0.6329, 0.2999], [0.3935, 0.6352, 0.3022], [0.4022, 0.6374, 0.3045], [0.4109, 0.6397, 0.3068], [0.4196, 0.6414, 0.3091], [0.4284, 0.6431, 0.3114], [0.4371, 0.6448, 0.3136], [0.4458, 0.6466, 0.3159], [0.4545, 0.6483, 0.3182], [0.4632, 0.65, 0.3205], [0.4719, 0.6517, 0.3217], [0.4784, 0.6535, 0.323], [0.4849, 0.6552, 0.3242], [0.4913, 0.6569, 0.3255], [0.4978, 0.6586, 0.3267], [0.5043, 0.6603, 0.3279], [0.5107, 0.6621, 0.3292], [0.5172, 0.6638, 0.3304], [0.5237, 0.6655, 0.3317], [0.5301, 0.6672, 0.3329], [0.5366, 0.6689, 0.3341], [0.5431, 0.6707, 0.3354], [0.5495, 0.6724, 0.3366], [0.556, 0.6741, 0.3379], [0.5625, 0.6758, 0.3391], [0.5689, 0.6775, 0.3403], [0.5754, 0.6793, 0.3416], [0.5819, 0.681, 0.3428], [0.5883, 0.6827, 0.344], [0.5948, 0.6844, 0.3453], [0.6013, 0.6861, 0.3465], [0.6077, 0.6879, 0.3478], [0.6142, 0.6896, 0.349], [0.6207, 0.6913, 0.3502], [0.6271, 0.693, 0.3515], [0.6336, 0.6947, 0.3527], [0.6401, 0.6965, 0.354], [0.6465, 0.6982, 0.3552], [0.653, 0.6999, 0.3564], [0.6595, 0.7016, 0.3577], [0.6659, 0.7034, 0.3589], [0.6724, 0.7051, 0.3602], [0.6789, 0.7068, 0.3614], [0.6853, 0.7085, 0.3626], [0.6918, 0.7102, 0.3639], [0.6983, 0.712, 0.3651], [0.7047, 0.7137, 0.3664], [0.7112, 0.7154, 0.3676], [0.7176, 0.7171, 0.3688], [0.7193, 0.7137, 0.3701], [0.7209, 0.7103, 0.3713], [0.7225, 0.7069, 0.3726], [0.7242, 0.7035, 0.3738], [0.7258, 0.7001, 0.375], [0.7275, 0.6967, 0.3763], [0.7291, 0.6934, 0.3775], [0.7307, 0.69, 0.3788], [0.7324, 0.6866, 0.38], [0.734, 0.6832, 0.3812], [0.7356, 0.6798, 0.3825], [0.7373, 0.6764, 0.3837], [0.7389, 0.673, 0.3849], [0.7406, 0.6697, 0.3862], [0.7422, 0.6663, 0.3874], [0.7438, 0.6629, 0.3887], [0.7455, 0.6595, 0.3899], [0.7471, 0.6561, 0.3911], [0.7488, 0.6527, 0.3924], [0.7504, 0.6493, 0.3936], [0.752, 0.6459, 0.3949], [0.7537, 0.6426, 0.3961], [0.7553, 0.6392, 0.4057], [0.7597, 0.6413, 0.4153], [0.7641, 0.643, 0.425], [0.7685, 0.6447, 0.4346], [0.7729, 0.6464, 0.4442], [0.7773, 0.6481, 0.4538], [0.7817, 0.6515, 0.4634], [0.786, 0.6549, 0.473], [0.7904, 0.6583, 0.4826], [0.7948, 0.6617, 0.4922], [0.7992, 0.6651, 0.5018], [0.8036, 0.6685, 0.5114], [0.808, 0.6719, 0.521], [0.8124, 0.6753, 0.5306], [0.8167, 0.6787, 0.5402], [0.8211, 0.6821, 0.5499], [0.8255, 0.6855, 0.5595], [0.8299, 0.6889, 0.5691], [0.8343, 0.6923, 0.5787], [0.8387, 0.6957, 0.5883], [0.8431, 0.6991, 0.5979], [0.8475, 0.7047, 0.6075], [0.8518, 0.7103, 0.6171], [0.8562, 0.7159, 0.6267], [0.8606, 0.7215, 0.6363], [0.865, 0.7269, 0.6459], [0.8694, 0.7323, 0.6555], [0.8738, 0.7377, 0.6652], [0.8782, 0.7431, 0.677], [0.8825, 0.7507, 0.6888], [0.8869, 0.7584, 0.7006], [0.8913, 0.7661, 0.7124], [0.8957, 0.7738, 0.7243], [0.9001, 0.7814, 0.7361], [0.9045, 0.7891, 0.7479], [0.9089, 0.7968, 0.7597], [0.9132, 0.8044, 0.7715], [0.9176, 0.8121, 0.7834], [0.922, 0.8198, 0.7952], [0.9264, 0.8275, 0.807], [0.9308, 0.8364, 0.8188], [0.9352, 0.8454, 0.8306], [0.9396, 0.8544, 0.8425], [0.944, 0.8634, 0.8543], [0.9483, 0.8725, 0.8661], [0.9527, 0.8816, 0.8779], [0.9571, 0.8931, 0.8897], [0.9615, 0.9045, 0.9016], [0.9659, 0.916, 0.9134], [0.9703, 0.9274, 0.9252], [0.9747, 0.9389, 0.937], [0.979, 0.9503, 0.9488], [0.9834, 0.9618, 0.9607], [0.9878, 0.9732, 0.9725], [0.9922, 0.9843, 0.9843]] }, "gist_gray": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0039, 0.0039, 0.0039], [0.0078, 0.0078, 0.0078], [0.0118, 0.0118, 0.0118], [0.0157, 0.0157, 0.0157], [0.0196, 0.0196, 0.0196], [0.0235, 0.0235, 0.0235], [0.0275, 0.0275, 0.0275], [0.0314, 0.0314, 0.0314], [0.0353, 0.0353, 0.0353], [0.0392, 0.0392, 0.0392], [0.0431, 0.0431, 0.0431], [0.0471, 0.0471, 0.0471], [0.051, 0.051, 0.051], [0.0549, 0.0549, 0.0549], [0.0588, 0.0588, 0.0588], [0.0627, 0.0627, 0.0627], [0.0667, 0.0667, 0.0667], [0.0706, 0.0706, 0.0706], [0.0745, 0.0745, 0.0745], [0.0784, 0.0784, 0.0784], [0.0824, 0.0824, 0.0824], [0.0863, 0.0863, 0.0863], [0.0902, 0.0902, 0.0902], [0.0941, 0.0941, 0.0941], [0.098, 0.098, 0.098], [0.102, 0.102, 0.102], [0.1059, 0.1059, 0.1059], [0.1098, 0.1098, 0.1098], [0.1137, 0.1137, 0.1137], [0.1176, 0.1176, 0.1176], [0.1216, 0.1216, 0.1216], [0.1255, 0.1255, 0.1255], [0.1294, 0.1294, 0.1294], [0.1333, 0.1333, 0.1333], [0.1373, 0.1373, 0.1373], [0.1412, 0.1412, 0.1412], [0.1451, 0.1451, 0.1451], [0.149, 0.149, 0.149], [0.1529, 0.1529, 0.1529], [0.1569, 0.1569, 0.1569], [0.1608, 0.1608, 0.1608], [0.1647, 0.1647, 0.1647], [0.1686, 0.1686, 0.1686], [0.1725, 0.1725, 0.1725], [0.1765, 0.1765, 0.1765], [0.1804, 0.1804, 0.1804], [0.1843, 0.1843, 0.1843], [0.1882, 0.1882, 0.1882], [0.1922, 0.1922, 0.1922], [0.1961, 0.1961, 0.1961], [0.2, 0.2, 0.2], [0.2039, 0.2039, 0.2039], [0.2078, 0.2078, 0.2078], [0.2118, 0.2118, 0.2118], [0.2157, 0.2157, 0.2157], [0.2196, 0.2196, 0.2196], [0.2235, 0.2235, 0.2235], [0.2275, 0.2275, 0.2275], [0.2314, 0.2314, 0.2314], [0.2353, 0.2353, 0.2353], [0.2392, 0.2392, 0.2392], [0.2431, 0.2431, 0.2431], [0.2471, 0.2471, 0.2471], [0.251, 0.251, 0.251], [0.2549, 0.2549, 0.2549], [0.2588, 0.2588, 0.2588], [0.2627, 0.2627, 0.2627], [0.2667, 0.2667, 0.2667], [0.2706, 0.2706, 0.2706], [0.2745, 0.2745, 0.2745], [0.2784, 0.2784, 0.2784], [0.2824, 0.2824, 0.2824], [0.2863, 0.2863, 0.2863], [0.2902, 0.2902, 0.2902], [0.2941, 0.2941, 0.2941], [0.298, 0.298, 0.298], [0.302, 0.302, 0.302], [0.3059, 0.3059, 0.3059], [0.3098, 0.3098, 0.3098], [0.3137, 0.3137, 0.3137], [0.3176, 0.3176, 0.3176], [0.3216, 0.3216, 0.3216], [0.3255, 0.3255, 0.3255], [0.3294, 0.3294, 0.3294], [0.3333, 0.3333, 0.3333], [0.3373, 0.3373, 0.3373], [0.3412, 0.3412, 0.3412], [0.3451, 0.3451, 0.3451], [0.349, 0.349, 0.349], [0.3529, 0.3529, 0.3529], [0.3569, 0.3569, 0.3569], [0.3608, 0.3608, 0.3608], [0.3647, 0.3647, 0.3647], [0.3686, 0.3686, 0.3686], [0.3725, 0.3725, 0.3725], [0.3765, 0.3765, 0.3765], [0.3804, 0.3804, 0.3804], [0.3843, 0.3843, 0.3843], [0.3882, 0.3882, 0.3882], [0.3922, 0.3922, 0.3922], [0.3961, 0.3961, 0.3961], [0.4, 0.4, 0.4], [0.4039, 0.4039, 0.4039], [0.4078, 0.4078, 0.4078], [0.4118, 0.4118, 0.4118], [0.4157, 0.4157, 0.4157], [0.4196, 0.4196, 0.4196], [0.4235, 0.4235, 0.4235], [0.4275, 0.4275, 0.4275], [0.4314, 0.4314, 0.4314], [0.4353, 0.4353, 0.4353], [0.4392, 0.4392, 0.4392], [0.4431, 0.4431, 0.4431], [0.4471, 0.4471, 0.4471], [0.451, 0.451, 0.451], [0.4549, 0.4549, 0.4549], [0.4588, 0.4588, 0.4588], [0.4627, 0.4627, 0.4627], [0.4667, 0.4667, 0.4667], [0.4706, 0.4706, 0.4706], [0.4745, 0.4745, 0.4745], [0.4784, 0.4784, 0.4784], [0.4824, 0.4824, 0.4824], [0.4863, 0.4863, 0.4863], [0.4902, 0.4902, 0.4902], [0.4941, 0.4941, 0.4941], [0.498, 0.498, 0.498], [0.502, 0.502, 0.502], [0.5059, 0.5059, 0.5059], [0.5098, 0.5098, 0.5098], [0.5137, 0.5137, 0.5137], [0.5176, 0.5176, 0.5176], [0.5216, 0.5216, 0.5216], [0.5255, 0.5255, 0.5255], [0.5294, 0.5294, 0.5294], [0.5333, 0.5333, 0.5333], [0.5373, 0.5373, 0.5373], [0.5412, 0.5412, 0.5412], [0.5451, 0.5451, 0.5451], [0.549, 0.549, 0.549], [0.5529, 0.5529, 0.5529], [0.5569, 0.5569, 0.5569], [0.5608, 0.5608, 0.5608], [0.5647, 0.5647, 0.5647], [0.5686, 0.5686, 0.5686], [0.5725, 0.5725, 0.5725], [0.5765, 0.5765, 0.5765], [0.5804, 0.5804, 0.5804], [0.5843, 0.5843, 0.5843], [0.5882, 0.5882, 0.5882], [0.5922, 0.5922, 0.5922], [0.5961, 0.5961, 0.5961], [0.6, 0.6, 0.6], [0.6039, 0.6039, 0.6039], [0.6078, 0.6078, 0.6078], [0.6118, 0.6118, 0.6118], [0.6157, 0.6157, 0.6157], [0.6196, 0.6196, 0.6196], [0.6235, 0.6235, 0.6235], [0.6275, 0.6275, 0.6275], [0.6314, 0.6314, 0.6314], [0.6353, 0.6353, 0.6353], [0.6392, 0.6392, 0.6392], [0.6431, 0.6431, 0.6431], [0.6471, 0.6471, 0.6471], [0.651, 0.651, 0.651], [0.6549, 0.6549, 0.6549], [0.6588, 0.6588, 0.6588], [0.6627, 0.6627, 0.6627], [0.6667, 0.6667, 0.6667], [0.6706, 0.6706, 0.6706], [0.6745, 0.6745, 0.6745], [0.6784, 0.6784, 0.6784], [0.6824, 0.6824, 0.6824], [0.6863, 0.6863, 0.6863], [0.6902, 0.6902, 0.6902], [0.6941, 0.6941, 0.6941], [0.698, 0.698, 0.698], [0.702, 0.702, 0.702], [0.7059, 0.7059, 0.7059], [0.7098, 0.7098, 0.7098], [0.7137, 0.7137, 0.7137], [0.7176, 0.7176, 0.7176], [0.7216, 0.7216, 0.7216], [0.7255, 0.7255, 0.7255], [0.7294, 0.7294, 0.7294], [0.7333, 0.7333, 0.7333], [0.7373, 0.7373, 0.7373], [0.7412, 0.7412, 0.7412], [0.7451, 0.7451, 0.7451], [0.749, 0.749, 0.749], [0.7529, 0.7529, 0.7529], [0.7569, 0.7569, 0.7569], [0.7608, 0.7608, 0.7608], [0.7647, 0.7647, 0.7647], [0.7686, 0.7686, 0.7686], [0.7725, 0.7725, 0.7725], [0.7765, 0.7765, 0.7765], [0.7804, 0.7804, 0.7804], [0.7843, 0.7843, 0.7843], [0.7882, 0.7882, 0.7882], [0.7922, 0.7922, 0.7922], [0.7961, 0.7961, 0.7961], [0.8, 0.8, 0.8], [0.8039, 0.8039, 0.8039], [0.8078, 0.8078, 0.8078], [0.8118, 0.8118, 0.8118], [0.8157, 0.8157, 0.8157], [0.8196, 0.8196, 0.8196], [0.8235, 0.8235, 0.8235], [0.8275, 0.8275, 0.8275], [0.8314, 0.8314, 0.8314], [0.8353, 0.8353, 0.8353], [0.8392, 0.8392, 0.8392], [0.8431, 0.8431, 0.8431], [0.8471, 0.8471, 0.8471], [0.851, 0.851, 0.851], [0.8549, 0.8549, 0.8549], [0.8588, 0.8588, 0.8588], [0.8627, 0.8627, 0.8627], [0.8667, 0.8667, 0.8667], [0.8706, 0.8706, 0.8706], [0.8745, 0.8745, 0.8745], [0.8784, 0.8784, 0.8784], [0.8824, 0.8824, 0.8824], [0.8863, 0.8863, 0.8863], [0.8902, 0.8902, 0.8902], [0.8941, 0.8941, 0.8941], [0.898, 0.898, 0.898], [0.902, 0.902, 0.902], [0.9059, 0.9059, 0.9059], [0.9098, 0.9098, 0.9098], [0.9137, 0.9137, 0.9137], [0.9176, 0.9176, 0.9176], [0.9216, 0.9216, 0.9216], [0.9255, 0.9255, 0.9255], [0.9294, 0.9294, 0.9294], [0.9333, 0.9333, 0.9333], [0.9373, 0.9373, 0.9373], [0.9412, 0.9412, 0.9412], [0.9451, 0.9451, 0.9451], [0.949, 0.949, 0.949], [0.9529, 0.9529, 0.9529], [0.9569, 0.9569, 0.9569], [0.9608, 0.9608, 0.9608], [0.9647, 0.9647, 0.9647], [0.9686, 0.9686, 0.9686], [0.9725, 0.9725, 0.9725], [0.9765, 0.9765, 0.9765], [0.9804, 0.9804, 0.9804], [0.9843, 0.9843, 0.9843], [0.9882, 0.9882, 0.9882], [0.9922, 0.9922, 0.9922], [0.9961, 0.9961, 0.9961], [1.0, 1.0, 1.0]] }, "gist_heat": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0059, 0.0, 0.0], [0.0118, 0.0, 0.0], [0.0176, 0.0, 0.0], [0.0235, 0.0, 0.0], [0.0294, 0.0, 0.0], [0.0353, 0.0, 0.0], [0.0412, 0.0, 0.0], [0.0471, 0.0, 0.0], [0.0529, 0.0, 0.0], [0.0588, 0.0, 0.0], [0.0647, 0.0, 0.0], [0.0706, 0.0, 0.0], [0.0765, 0.0, 0.0], [0.0824, 0.0, 0.0], [0.0882, 0.0, 0.0], [0.0941, 0.0, 0.0], [0.1, 0.0, 0.0], [0.1059, 0.0, 0.0], [0.1118, 0.0, 0.0], [0.1176, 0.0, 0.0], [0.1235, 0.0, 0.0], [0.1294, 0.0, 0.0], [0.1353, 0.0, 0.0], [0.1412, 0.0, 0.0], [0.1471, 0.0, 0.0], [0.1529, 0.0, 0.0], [0.1588, 0.0, 0.0], [0.1647, 0.0, 0.0], [0.1706, 0.0, 0.0], [0.1765, 0.0, 0.0], [0.1824, 0.0, 0.0], [0.1882, 0.0, 0.0], [0.1941, 0.0, 0.0], [0.2, 0.0, 0.0], [0.2059, 0.0, 0.0], [0.2118, 0.0, 0.0], [0.2176, 0.0, 0.0], [0.2235, 0.0, 0.0], [0.2294, 0.0, 0.0], [0.2353, 0.0, 0.0], [0.2412, 0.0, 0.0], [0.2471, 0.0, 0.0], [0.2529, 0.0, 0.0], [0.2588, 0.0, 0.0], [0.2647, 0.0, 0.0], [0.2706, 0.0, 0.0], [0.2765, 0.0, 0.0], [0.2824, 0.0, 0.0], [0.2882, 0.0, 0.0], [0.2941, 0.0, 0.0], [0.3, 0.0, 0.0], [0.3059, 0.0, 0.0], [0.3118, 0.0, 0.0], [0.3176, 0.0, 0.0], [0.3235, 0.0, 0.0], [0.3294, 0.0, 0.0], [0.3353, 0.0, 0.0], [0.3412, 0.0, 0.0], [0.3471, 0.0, 0.0], [0.3529, 0.0, 0.0], [0.3588, 0.0, 0.0], [0.3647, 0.0, 0.0], [0.3706, 0.0, 0.0], [0.3765, 0.0, 0.0], [0.3824, 0.0, 0.0], [0.3882, 0.0, 0.0], [0.3941, 0.0, 0.0], [0.4, 0.0, 0.0], [0.4059, 0.0, 0.0], [0.4118, 0.0, 0.0], [0.4176, 0.0, 0.0], [0.4235, 0.0, 0.0], [0.4294, 0.0, 0.0], [0.4353, 0.0, 0.0], [0.4412, 0.0, 0.0], [0.4471, 0.0, 0.0], [0.4529, 0.0, 0.0], [0.4588, 0.0, 0.0], [0.4647, 0.0, 0.0], [0.4706, 0.0, 0.0], [0.4765, 0.0, 0.0], [0.4824, 0.0, 0.0], [0.4882, 0.0, 0.0], [0.4941, 0.0, 0.0], [0.5, 0.0, 0.0], [0.5059, 0.0, 0.0], [0.5118, 0.0, 0.0], [0.5176, 0.0, 0.0], [0.5235, 0.0, 0.0], [0.5294, 0.0, 0.0], [0.5353, 0.0, 0.0], [0.5412, 0.0, 0.0], [0.5471, 0.0, 0.0], [0.5529, 0.0, 0.0], [0.5588, 0.0, 0.0], [0.5647, 0.0, 0.0], [0.5706, 0.0, 0.0], [0.5765, 0.0, 0.0], [0.5824, 0.0, 0.0], [0.5882, 0.0, 0.0], [0.5941, 0.0, 0.0], [0.6, 0.0, 0.0], [0.6059, 0.0, 0.0], [0.6118, 0.0, 0.0], [0.6176, 0.0, 0.0], [0.6235, 0.0, 0.0], [0.6294, 0.0, 0.0], [0.6353, 0.0, 0.0], [0.6412, 0.0, 0.0], [0.6471, 0.0, 0.0], [0.6529, 0.0, 0.0], [0.6588, 0.0, 0.0], [0.6647, 0.0, 0.0], [0.6706, 0.0, 0.0], [0.6765, 0.0, 0.0], [0.6824, 0.0, 0.0], [0.6882, 0.0, 0.0], [0.6941, 0.0, 0.0], [0.7, 0.0, 0.0], [0.7059, 0.0, 0.0], [0.7118, 0.0, 0.0], [0.7176, 0.0, 0.0], [0.7235, 0.0, 0.0], [0.7294, 0.0, 0.0], [0.7353, 0.0, 0.0], [0.7412, 0.0, 0.0], [0.7471, 0.0, 0.0], [0.7529, 0.0039, 0.0], [0.7588, 0.0118, 0.0], [0.7647, 0.0196, 0.0], [0.7706, 0.0275, 0.0], [0.7765, 0.0353, 0.0], [0.7824, 0.0431, 0.0], [0.7882, 0.051, 0.0], [0.7941, 0.0588, 0.0], [0.8, 0.0667, 0.0], [0.8059, 0.0745, 0.0], [0.8118, 0.0824, 0.0], [0.8176, 0.0902, 0.0], [0.8235, 0.098, 0.0], [0.8294, 0.1059, 0.0], [0.8353, 0.1137, 0.0], [0.8412, 0.1216, 0.0], [0.8471, 0.1294, 0.0], [0.8529, 0.1373, 0.0], [0.8588, 0.1451, 0.0], [0.8647, 0.1529, 0.0], [0.8706, 0.1608, 0.0], [0.8765, 0.1686, 0.0], [0.8824, 0.1765, 0.0], [0.8882, 0.1843, 0.0], [0.8941, 0.1922, 0.0], [0.9, 0.2, 0.0], [0.9059, 0.2078, 0.0], [0.9118, 0.2157, 0.0], [0.9176, 0.2235, 0.0], [0.9235, 0.2314, 0.0], [0.9294, 0.2392, 0.0], [0.9353, 0.2471, 0.0], [0.9412, 0.2549, 0.0], [0.9471, 0.2627, 0.0], [0.9529, 0.2706, 0.0], [0.9588, 0.2784, 0.0], [0.9647, 0.2863, 0.0], [0.9706, 0.2941, 0.0], [0.9765, 0.302, 0.0], [0.9824, 0.3098, 0.0], [0.9882, 0.3176, 0.0], [0.9941, 0.3255, 0.0], [1.0, 0.3333, 0.0], [1.0, 0.3412, 0.0], [1.0, 0.349, 0.0], [1.0, 0.3569, 0.0], [1.0, 0.3647, 0.0], [1.0, 0.3725, 0.0], [1.0, 0.3804, 0.0], [1.0, 0.3882, 0.0], [1.0, 0.3961, 0.0], [1.0, 0.4039, 0.0], [1.0, 0.4118, 0.0], [1.0, 0.4196, 0.0], [1.0, 0.4275, 0.0], [1.0, 0.4353, 0.0], [1.0, 0.4431, 0.0], [1.0, 0.451, 0.0], [1.0, 0.4588, 0.0], [1.0, 0.4667, 0.0], [1.0, 0.4745, 0.0], [1.0, 0.4824, 0.0], [1.0, 0.4902, 0.0], [1.0, 0.498, 0.0], [1.0, 0.5059, 0.0118], [1.0, 0.5137, 0.0275], [1.0, 0.5216, 0.0431], [1.0, 0.5294, 0.0588], [1.0, 0.5373, 0.0745], [1.0, 0.5451, 0.0902], [1.0, 0.5529, 0.1059], [1.0, 0.5608, 0.1216], [1.0, 0.5686, 0.1373], [1.0, 0.5765, 0.1529], [1.0, 0.5843, 0.1686], [1.0, 0.5922, 0.1843], [1.0, 0.6, 0.2], [1.0, 0.6078, 0.2157], [1.0, 0.6157, 0.2314], [1.0, 0.6235, 0.2471], [1.0, 0.6314, 0.2627], [1.0, 0.6392, 0.2784], [1.0, 0.6471, 0.2941], [1.0, 0.6549, 0.3098], [1.0, 0.6627, 0.3255], [1.0, 0.6706, 0.3412], [1.0, 0.6784, 0.3569], [1.0, 0.6863, 0.3725], [1.0, 0.6941, 0.3882], [1.0, 0.702, 0.4039], [1.0, 0.7098, 0.4196], [1.0, 0.7176, 0.4353], [1.0, 0.7255, 0.451], [1.0, 0.7333, 0.4667], [1.0, 0.7412, 0.4824], [1.0, 0.749, 0.498], [1.0, 0.7569, 0.5137], [1.0, 0.7647, 0.5294], [1.0, 0.7725, 0.5451], [1.0, 0.7804, 0.5608], [1.0, 0.7882, 0.5765], [1.0, 0.7961, 0.5922], [1.0, 0.8039, 0.6078], [1.0, 0.8118, 0.6235], [1.0, 0.8196, 0.6392], [1.0, 0.8275, 0.6549], [1.0, 0.8353, 0.6706], [1.0, 0.8431, 0.6863], [1.0, 0.851, 0.702], [1.0, 0.8588, 0.7176], [1.0, 0.8667, 0.7333], [1.0, 0.8745, 0.749], [1.0, 0.8824, 0.7647], [1.0, 0.8902, 0.7804], [1.0, 0.898, 0.7961], [1.0, 0.9059, 0.8118], [1.0, 0.9137, 0.8275], [1.0, 0.9216, 0.8431], [1.0, 0.9294, 0.8588], [1.0, 0.9373, 0.8745], [1.0, 0.9451, 0.8902], [1.0, 0.9529, 0.9059], [1.0, 0.9608, 0.9216], [1.0, 0.9686, 0.9373], [1.0, 0.9765, 0.9529], [1.0, 0.9843, 0.9686], [1.0, 0.9922, 0.9843], [1.0, 1.0, 1.0]] }, "gist_ncar": { "interpolate": true, "colors": [[0.0, 0.0, 0.502], [0.0, 0.0286, 0.4651], [0.0, 0.0572, 0.4282], [0.0, 0.0859, 0.3913], [0.0, 0.1145, 0.3544], [0.0, 0.1431, 0.3175], [0.0, 0.1717, 0.2806], [0.0, 0.2003, 0.2437], [0.0, 0.229, 0.2069], [0.0, 0.2576, 0.17], [0.0, 0.2862, 0.1331], [0.0, 0.3148, 0.0962], [0.0, 0.3434, 0.0593], [0.0, 0.3721, 0.0224], [0.0, 0.3457, 0.0871], [0.0, 0.3192, 0.1523], [0.0, 0.2926, 0.2175], [0.0, 0.266, 0.2827], [0.0, 0.2394, 0.3479], [0.0, 0.2128, 0.4132], [0.0, 0.1862, 0.4784], [0.0, 0.1596, 0.5436], [0.0, 0.1331, 0.6088], [0.0, 0.1065, 0.674], [0.0, 0.0799, 0.7392], [0.0, 0.0533, 0.8044], [0.0, 0.0267, 0.8696], [0.0, 0.0001, 0.9349], [0.0, 0.0551, 1.0], [0.0, 0.1105, 1.0], [0.0, 0.1659, 1.0], [0.0, 0.2213, 1.0], [0.0, 0.2766, 1.0], [0.0, 0.332, 1.0], [0.0, 0.3874, 1.0], [0.0, 0.4428, 1.0], [0.0, 0.4982, 1.0], [0.0, 0.5535, 1.0], [0.0, 0.6089, 1.0], [0.0, 0.6643, 1.0], [0.0, 0.7197, 1.0], [0.0, 0.7536, 1.0], [0.0, 0.7752, 1.0], [0.0, 0.7925, 1.0], [0.0, 0.8098, 1.0], [0.0, 0.8271, 1.0], [0.0, 0.8444, 1.0], [0.0, 0.8617, 1.0], [0.0, 0.8789, 1.0], [0.0, 0.8962, 1.0], [0.0, 0.9135, 1.0], [0.0, 0.9308, 1.0], [0.0, 0.9481, 0.9999], [0.0, 0.9654, 0.9741], [0.0, 0.9827, 0.9484], [0.0, 0.9999, 0.9227], [0.0, 0.9982, 0.897], [0.0, 0.9964, 0.8713], [0.0, 0.9947, 0.8456], [0.0, 0.9929, 0.8199], [0.0, 0.9911, 0.7942], [0.0, 0.9893, 0.7685], [0.0, 0.9875, 0.7428], [0.0, 0.9857, 0.717], [0.0, 0.984, 0.6913], [0.0, 0.9822, 0.6656], [0.0, 0.9804, 0.6399], [0.0, 0.9804, 0.614], [0.0, 0.9804, 0.5731], [0.0, 0.9804, 0.5322], [0.0, 0.982, 0.4913], [0.0, 0.9837, 0.4504], [0.0, 0.9853, 0.4095], [0.0, 0.9869, 0.3685], [0.0, 0.9886, 0.3276], [0.0, 0.9902, 0.2867], [0.0, 0.9918, 0.2458], [0.0, 0.9935, 0.2049], [0.0, 0.9951, 0.164], [0.0, 0.9967, 0.1231], [0.025, 0.9984, 0.0822], [0.05, 0.9998, 0.0412], [0.0749, 0.9851, 0.0003], [0.0999, 0.9703, 0.0], [0.1249, 0.9556, 0.0], [0.1499, 0.9408, 0.0], [0.1748, 0.926, 0.0], [0.1998, 0.9113, 0.0], [0.2248, 0.8965, 0.0], [0.2498, 0.8818, 0.0], [0.2747, 0.867, 0.0], [0.2997, 0.8523, 0.0], [0.3247, 0.8375, 0.0], [0.3497, 0.8228, 0.0], [0.3746, 0.8082, 0.0], [0.3994, 0.821, 0.0], [0.4072, 0.8337, 0.0], [0.4149, 0.8465, 0.0], [0.4227, 0.8593, 0.0], [0.4305, 0.8721, 0.0], [0.4382, 0.8848, 0.0], [0.446, 0.8976, 0.0], [0.4538, 0.9104, 0.0], [0.4615, 0.9232, 0.0], [0.4693, 0.936, 0.0], [0.4771, 0.9487, 0.0], [0.4848, 0.9615, 0.0], [0.4926, 0.9743, 0.0156], [0.5004, 0.9871, 0.0312], [0.5183, 0.9998, 0.0468], [0.5361, 1.0, 0.0624], [0.554, 1.0, 0.078], [0.5718, 1.0, 0.0937], [0.5897, 1.0, 0.1093], [0.6075, 1.0, 0.1249], [0.6254, 1.0, 0.1405], [0.6432, 1.0, 0.1561], [0.6611, 1.0, 0.1718], [0.6789, 1.0, 0.1874], [0.6968, 1.0, 0.203], [0.7146, 1.0, 0.2186], [0.7324, 1.0, 0.2342], [0.7503, 1.0, 0.2185], [0.7681, 1.0, 0.2029], [0.786, 1.0, 0.1873], [0.8038, 1.0, 0.1717], [0.8217, 1.0, 0.1561], [0.8395, 1.0, 0.1404], [0.8574, 1.0, 0.1248], [0.8752, 1.0, 0.1092], [0.8931, 1.0, 0.0936], [0.9109, 1.0, 0.078], [0.9288, 1.0, 0.0623], [0.9466, 1.0, 0.0467], [0.9645, 0.9904, 0.0311], [0.9823, 0.9807, 0.0155], [1.0, 0.9711, 0.0], [1.0, 0.9614, 0.0], [1.0, 0.9517, 0.0], [1.0, 0.942, 0.0], [1.0, 0.9324, 0.0], [1.0, 0.9227, 0.0], [1.0, 0.913, 0.0], [1.0, 0.9034, 0.0], [1.0, 0.8937, 0.0], [1.0, 0.884, 0.0], [1.0, 0.8743, 0.0], [1.0, 0.8647, 0.0], [1.0, 0.855, 0.0], [1.0, 0.8453, 0.0042], [1.0, 0.8357, 0.0084], [1.0, 0.826, 0.0127], [1.0, 0.8163, 0.0169], [1.0, 0.8066, 0.0211], [1.0, 0.797, 0.0253], [1.0, 0.7873, 0.0295], [1.0, 0.7776, 0.0338], [1.0, 0.768, 0.038], [1.0, 0.7583, 0.0422], [1.0, 0.7486, 0.0464], [1.0, 0.7389, 0.0506], [1.0, 0.7293, 0.0549], [1.0, 0.6973, 0.0513], [1.0, 0.6652, 0.0476], [1.0, 0.6331, 0.0439], [1.0, 0.601, 0.0403], [1.0, 0.5688, 0.0366], [1.0, 0.5367, 0.033], [1.0, 0.5046, 0.0293], [1.0, 0.4725, 0.0256], [1.0, 0.4404, 0.022], [1.0, 0.4083, 0.0183], [1.0, 0.3762, 0.0146], [1.0, 0.344, 0.011], [1.0, 0.3119, 0.0073], [1.0, 0.2798, 0.0037], [1.0, 0.2611, 0.0], [1.0, 0.2424, 0.0], [1.0, 0.2238, 0.0], [1.0, 0.2051, 0.0], [1.0, 0.1865, 0.0], [1.0, 0.1678, 0.0], [1.0, 0.1492, 0.0], [1.0, 0.1305, 0.0], [1.0, 0.1119, 0.0], [1.0, 0.0932, 0.0], [1.0, 0.0746, 0.0], [1.0, 0.056, 0.0], [1.0, 0.0373, 0.0], [1.0, 0.0187, 0.0688], [1.0, 0.0, 0.1383], [1.0, 0.0, 0.2079], [1.0, 0.0, 0.2774], [1.0, 0.0, 0.347], [1.0, 0.0, 0.4166], [1.0, 0.0, 0.4861], [1.0, 0.0, 0.5557], [1.0, 0.0, 0.6252], [1.0, 0.0, 0.6948], [1.0, 0.0, 0.7644], [1.0, 0.0, 0.8339], [1.0, 0.0, 0.9035], [1.0, 0.0, 0.973], [0.9733, 0.0134, 0.9868], [0.9463, 0.0269, 1.0], [0.9193, 0.0404, 1.0], [0.8922, 0.0539, 1.0], [0.8652, 0.0674, 1.0], [0.8382, 0.0809, 1.0], [0.8112, 0.0944, 1.0], [0.7842, 0.1079, 1.0], [0.7572, 0.1214, 1.0], [0.7301, 0.1349, 1.0], [0.7031, 0.1484, 1.0], [0.6761, 0.1619, 1.0], [0.6491, 0.1755, 1.0], [0.6221, 0.1987, 0.9952], [0.6448, 0.2219, 0.9905], [0.668, 0.2451, 0.9858], [0.6913, 0.2683, 0.9811], [0.7145, 0.2915, 0.9764], [0.7378, 0.3147, 0.9717], [0.761, 0.3379, 0.967], [0.7843, 0.3611, 0.9623], [0.8075, 0.3843, 0.9576], [0.8308, 0.4075, 0.9529], [0.854, 0.4307, 0.9482], [0.8772, 0.4538, 0.9435], [0.9005, 0.477, 0.9388], [0.9235, 0.5002, 0.9341], [0.9263, 0.5183, 0.9365], [0.9291, 0.5365, 0.9389], [0.9319, 0.5547, 0.9413], [0.9347, 0.5728, 0.9437], [0.9375, 0.591, 0.946], [0.9403, 0.6092, 0.9484], [0.9431, 0.6273, 0.9508], [0.9459, 0.6455, 0.9532], [0.9486, 0.6637, 0.9556], [0.9514, 0.6818, 0.958], [0.9542, 0.7, 0.9603], [0.957, 0.7182, 0.9627], [0.9598, 0.7363, 0.9651], [0.9626, 0.7545, 0.9675], [0.9654, 0.7727, 0.9699], [0.9682, 0.7908, 0.9723], [0.971, 0.809, 0.9746], [0.9738, 0.8272, 0.977], [0.9766, 0.8453, 0.9794], [0.9794, 0.8635, 0.9818], [0.9821, 0.8817, 0.9842], [0.9849, 0.8998, 0.9866], [0.9877, 0.918, 0.9889], [0.9905, 0.9362, 0.9913], [0.9933, 0.9543, 0.9937], [0.9961, 0.9725, 0.9961]] }, "gist_rainbow": { "interpolate": true, "colors": [[1.0, 0.0, 0.16], [1.0, 0.0, 0.1391], [1.0, 0.0, 0.1182], [1.0, 0.0, 0.0973], [1.0, 0.0, 0.0763], [1.0, 0.0, 0.0554], [1.0, 0.0, 0.0345], [1.0, 0.0, 0.0136], [1.0, 0.0074, 0.0], [1.0, 0.0286, 0.0], [1.0, 0.0498, 0.0], [1.0, 0.071, 0.0], [1.0, 0.0922, 0.0], [1.0, 0.1134, 0.0], [1.0, 0.1346, 0.0], [1.0, 0.1558, 0.0], [1.0, 0.177, 0.0], [1.0, 0.1982, 0.0], [1.0, 0.2194, 0.0], [1.0, 0.2406, 0.0], [1.0, 0.2618, 0.0], [1.0, 0.283, 0.0], [1.0, 0.3042, 0.0], [1.0, 0.3254, 0.0], [1.0, 0.3466, 0.0], [1.0, 0.3678, 0.0], [1.0, 0.389, 0.0], [1.0, 0.4102, 0.0], [1.0, 0.4314, 0.0], [1.0, 0.4526, 0.0], [1.0, 0.4738, 0.0], [1.0, 0.495, 0.0], [1.0, 0.5162, 0.0], [1.0, 0.5374, 0.0], [1.0, 0.5586, 0.0], [1.0, 0.5798, 0.0], [1.0, 0.601, 0.0], [1.0, 0.6222, 0.0], [1.0, 0.6433, 0.0], [1.0, 0.6645, 0.0], [1.0, 0.6857, 0.0], [1.0, 0.7069, 0.0], [1.0, 0.7281, 0.0], [1.0, 0.7493, 0.0], [1.0, 0.7705, 0.0], [1.0, 0.7917, 0.0], [1.0, 0.8129, 0.0], [1.0, 0.8341, 0.0], [1.0, 0.8553, 0.0], [1.0, 0.8765, 0.0], [1.0, 0.8977, 0.0], [1.0, 0.9189, 0.0], [1.0, 0.9401, 0.0], [1.0, 0.9613, 0.0], [1.0, 0.9825, 0.0], [0.9963, 1.0, 0.0], [0.9751, 1.0, 0.0], [0.9539, 1.0, 0.0], [0.9327, 1.0, 0.0], [0.9115, 1.0, 0.0], [0.8903, 1.0, 0.0], [0.8691, 1.0, 0.0], [0.8479, 1.0, 0.0], [0.8267, 1.0, 0.0], [0.8055, 1.0, 0.0], [0.7843, 1.0, 0.0], [0.7631, 1.0, 0.0], [0.7419, 1.0, 0.0], [0.7207, 1.0, 0.0], [0.6995, 1.0, 0.0], [0.6783, 1.0, 0.0], [0.6571, 1.0, 0.0], [0.6359, 1.0, 0.0], [0.6147, 1.0, 0.0], [0.5935, 1.0, 0.0], [0.5723, 1.0, 0.0], [0.5511, 1.0, 0.0], [0.5299, 1.0, 0.0], [0.5087, 1.0, 0.0], [0.4875, 1.0, 0.0], [0.4663, 1.0, 0.0], [0.4452, 1.0, 0.0], [0.424, 1.0, 0.0], [0.4028, 1.0, 0.0], [0.3816, 1.0, 0.0], [0.3604, 1.0, 0.0], [0.3392, 1.0, 0.0], [0.318, 1.0, 0.0], [0.2968, 1.0, 0.0], [0.2756, 1.0, 0.0], [0.2544, 1.0, 0.0], [0.2332, 1.0, 0.0], [0.212, 1.0, 0.0], [0.1908, 1.0, 0.0], [0.1696, 1.0, 0.0], [0.1484, 1.0, 0.0], [0.1272, 1.0, 0.0], [0.106, 1.0, 0.0], [0.0848, 1.0, 0.0], [0.0636, 1.0, 0.0], [0.0424, 1.0, 0.0], [0.0212, 1.0, 0.0], [0.0, 1.0, 0.0], [0.0, 1.0, 0.0211], [0.0, 1.0, 0.0422], [0.0, 1.0, 0.0633], [0.0, 1.0, 0.0843], [0.0, 1.0, 0.1054], [0.0, 1.0, 0.1265], [0.0, 1.0, 0.1476], [0.0, 1.0, 0.1687], [0.0, 1.0, 0.1898], [0.0, 1.0, 0.2108], [0.0, 1.0, 0.2319], [0.0, 1.0, 0.253], [0.0, 1.0, 0.2741], [0.0, 1.0, 0.2952], [0.0, 1.0, 0.3163], [0.0, 1.0, 0.3373], [0.0, 1.0, 0.3584], [0.0, 1.0, 0.3795], [0.0, 1.0, 0.4006], [0.0, 1.0, 0.4217], [0.0, 1.0, 0.4428], [0.0, 1.0, 0.4638], [0.0, 1.0, 0.4849], [0.0, 1.0, 0.506], [0.0, 1.0, 0.5271], [0.0, 1.0, 0.5482], [0.0, 1.0, 0.5693], [0.0, 1.0, 0.5903], [0.0, 1.0, 0.6114], [0.0, 1.0, 0.6325], [0.0, 1.0, 0.6536], [0.0, 1.0, 0.6747], [0.0, 1.0, 0.6958], [0.0, 1.0, 0.7168], [0.0, 1.0, 0.7379], [0.0, 1.0, 0.759], [0.0, 1.0, 0.7801], [0.0, 1.0, 0.8012], [0.0, 1.0, 0.8223], [0.0, 1.0, 0.8433], [0.0, 1.0, 0.8644], [0.0, 1.0, 0.8855], [0.0, 1.0, 0.9066], [0.0, 1.0, 0.9277], [0.0, 1.0, 0.9488], [0.0, 1.0, 0.9699], [0.0, 1.0, 0.9909], [0.0, 0.9879, 1.0], [0.0, 0.9665, 1.0], [0.0, 0.9452, 1.0], [0.0, 0.9239, 1.0], [0.0, 0.9026, 1.0], [0.0, 0.8813, 1.0], [0.0, 0.86, 1.0], [0.0, 0.8387, 1.0], [0.0, 0.8173, 1.0], [0.0, 0.796, 1.0], [0.0, 0.7747, 1.0], [0.0, 0.7534, 1.0], [0.0, 0.7321, 1.0], [0.0, 0.7108, 1.0], [0.0, 0.6895, 1.0], [0.0, 0.6682, 1.0], [0.0, 0.6468, 1.0], [0.0, 0.6255, 1.0], [0.0, 0.6042, 1.0], [0.0, 0.5829, 1.0], [0.0, 0.5616, 1.0], [0.0, 0.5403, 1.0], [0.0, 0.519, 1.0], [0.0, 0.4977, 1.0], [0.0, 0.4763, 1.0], [0.0, 0.455, 1.0], [0.0, 0.4337, 1.0], [0.0, 0.4124, 1.0], [0.0, 0.3911, 1.0], [0.0, 0.3698, 1.0], [0.0, 0.3485, 1.0], [0.0, 0.3272, 1.0], [0.0, 0.3058, 1.0], [0.0, 0.2845, 1.0], [0.0, 0.2632, 1.0], [0.0, 0.2419, 1.0], [0.0, 0.2206, 1.0], [0.0, 0.1993, 1.0], [0.0, 0.178, 1.0], [0.0, 0.1566, 1.0], [0.0, 0.1353, 1.0], [0.0, 0.114, 1.0], [0.0, 0.0927, 1.0], [0.0, 0.0714, 1.0], [0.0, 0.0501, 1.0], [0.0, 0.0288, 1.0], [0.0, 0.0075, 1.0], [0.0139, 0.0, 1.0], [0.0352, 0.0, 1.0], [0.0565, 0.0, 1.0], [0.0778, 0.0, 1.0], [0.0991, 0.0, 1.0], [0.1204, 0.0, 1.0], [0.1417, 0.0, 1.0], [0.163, 0.0, 1.0], [0.1844, 0.0, 1.0], [0.2057, 0.0, 1.0], [0.227, 0.0, 1.0], [0.2483, 0.0, 1.0], [0.2696, 0.0, 1.0], [0.2909, 0.0, 1.0], [0.3122, 0.0, 1.0], [0.3335, 0.0, 1.0], [0.3549, 0.0, 1.0], [0.3762, 0.0, 1.0], [0.3975, 0.0, 1.0], [0.4188, 0.0, 1.0], [0.4401, 0.0, 1.0], [0.4614, 0.0, 1.0], [0.4827, 0.0, 1.0], [0.504, 0.0, 1.0], [0.5254, 0.0, 1.0], [0.5467, 0.0, 1.0], [0.568, 0.0, 1.0], [0.5893, 0.0, 1.0], [0.6106, 0.0, 1.0], [0.6319, 0.0, 1.0], [0.6532, 0.0, 1.0], [0.6746, 0.0, 1.0], [0.6959, 0.0, 1.0], [0.7172, 0.0, 1.0], [0.7385, 0.0, 1.0], [0.7598, 0.0, 1.0], [0.7811, 0.0, 1.0], [0.8024, 0.0, 1.0], [0.8237, 0.0, 1.0], [0.8451, 0.0, 1.0], [0.8664, 0.0, 1.0], [0.8877, 0.0, 1.0], [0.909, 0.0, 1.0], [0.9303, 0.0, 1.0], [0.9516, 0.0, 1.0], [0.9729, 0.0, 1.0], [0.9942, 0.0, 1.0], [1.0, 0.0, 0.9844], [1.0, 0.0, 0.9631], [1.0, 0.0, 0.9418], [1.0, 0.0, 0.9205], [1.0, 0.0, 0.8992], [1.0, 0.0, 0.8779], [1.0, 0.0, 0.8566], [1.0, 0.0, 0.8353], [1.0, 0.0, 0.8139], [1.0, 0.0, 0.7926], [1.0, 0.0, 0.7713], [1.0, 0.0, 0.75]] }, "gist_stern": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0717, 0.0039, 0.0078], [0.1434, 0.0078, 0.0157], [0.2151, 0.0118, 0.0235], [0.2868, 0.0157, 0.0314], [0.3585, 0.0196, 0.0392], [0.4302, 0.0235, 0.0471], [0.5018, 0.0275, 0.0549], [0.5735, 0.0314, 0.0627], [0.6452, 0.0353, 0.0706], [0.7169, 0.0392, 0.0784], [0.7886, 0.0431, 0.0863], [0.8603, 0.0471, 0.0941], [0.932, 0.051, 0.102], [0.999, 0.0549, 0.1098], [0.9795, 0.0588, 0.1176], [0.9599, 0.0627, 0.1255], [0.9404, 0.0667, 0.1333], [0.9208, 0.0706, 0.1412], [0.9013, 0.0745, 0.149], [0.8818, 0.0784, 0.1569], [0.8622, 0.0824, 0.1647], [0.8427, 0.0863, 0.1725], [0.8232, 0.0902, 0.1804], [0.8036, 0.0941, 0.1882], [0.7841, 0.098, 0.1961], [0.7645, 0.102, 0.2039], [0.745, 0.1059, 0.2118], [0.7255, 0.1098, 0.2196], [0.7059, 0.1137, 0.2275], [0.6864, 0.1176, 0.2353], [0.6669, 0.1216, 0.2431], [0.6473, 0.1255, 0.251], [0.6278, 0.1294, 0.2588], [0.6082, 0.1333, 0.2667], [0.5887, 0.1373, 0.2745], [0.5692, 0.1412, 0.2824], [0.5496, 0.1451, 0.2902], [0.5301, 0.149, 0.298], [0.5106, 0.1529, 0.3059], [0.491, 0.1569, 0.3137], [0.4715, 0.1608, 0.3216], [0.4519, 0.1647, 0.3294], [0.4324, 0.1686, 0.3373], [0.4129, 0.1725, 0.3451], [0.3933, 0.1765, 0.3529], [0.3738, 0.1804, 0.3608], [0.3543, 0.1843, 0.3686], [0.3347, 0.1882, 0.3765], [0.3152, 0.1922, 0.3843], [0.2956, 0.1961, 0.3922], [0.2761, 0.2, 0.4], [0.2566, 0.2039, 0.4078], [0.237, 0.2078, 0.4157], [0.2175, 0.2118, 0.4235], [0.198, 0.2157, 0.4314], [0.1784, 0.2196, 0.4392], [0.1589, 0.2235, 0.4471], [0.1393, 0.2275, 0.4549], [0.1198, 0.2314, 0.4627], [0.1003, 0.2353, 0.4706], [0.0807, 0.2392, 0.4784], [0.0612, 0.2431, 0.4863], [0.0417, 0.2471, 0.4941], [0.251, 0.251, 0.502], [0.2549, 0.2549, 0.5098], [0.2588, 0.2588, 0.5176], [0.2627, 0.2627, 0.5255], [0.2667, 0.2667, 0.5333], [0.2706, 0.2706, 0.5412], [0.2745, 0.2745, 0.549], [0.2784, 0.2784, 0.5569], [0.2824, 0.2824, 0.5647], [0.2863, 0.2863, 0.5725], [0.2902, 0.2902, 0.5804], [0.2941, 0.2941, 0.5882], [0.298, 0.298, 0.5961], [0.302, 0.302, 0.6039], [0.3059, 0.3059, 0.6118], [0.3098, 0.3098, 0.6196], [0.3137, 0.3137, 0.6275], [0.3176, 0.3176, 0.6353], [0.3216, 0.3216, 0.6431], [0.3255, 0.3255, 0.651], [0.3294, 0.3294, 0.6588], [0.3333, 0.3333, 0.6667], [0.3373, 0.3373, 0.6745], [0.3412, 0.3412, 0.6824], [0.3451, 0.3451, 0.6902], [0.349, 0.349, 0.698], [0.3529, 0.3529, 0.7059], [0.3569, 0.3569, 0.7137], [0.3608, 0.3608, 0.7216], [0.3647, 0.3647, 0.7294], [0.3686, 0.3686, 0.7373], [0.3725, 0.3725, 0.7451], [0.3765, 0.3765, 0.7529], [0.3804, 0.3804, 0.7608], [0.3843, 0.3843, 0.7686], [0.3882, 0.3882, 0.7765], [0.3922, 0.3922, 0.7843], [0.3961, 0.3961, 0.7922], [0.4, 0.4, 0.8], [0.4039, 0.4039, 0.8078], [0.4078, 0.4078, 0.8157], [0.4118, 0.4118, 0.8235], [0.4157, 0.4157, 0.8314], [0.4196, 0.4196, 0.8392], [0.4235, 0.4235, 0.8471], [0.4275, 0.4275, 0.8549], [0.4314, 0.4314, 0.8627], [0.4353, 0.4353, 0.8706], [0.4392, 0.4392, 0.8784], [0.4431, 0.4431, 0.8863], [0.4471, 0.4471, 0.8941], [0.451, 0.451, 0.902], [0.4549, 0.4549, 0.9098], [0.4588, 0.4588, 0.9176], [0.4627, 0.4627, 0.9255], [0.4667, 0.4667, 0.9333], [0.4706, 0.4706, 0.9412], [0.4745, 0.4745, 0.949], [0.4784, 0.4784, 0.9569], [0.4824, 0.4824, 0.9647], [0.4863, 0.4863, 0.9725], [0.4902, 0.4902, 0.9804], [0.4941, 0.4941, 0.9882], [0.498, 0.498, 0.9961], [0.502, 0.502, 0.9917], [0.5059, 0.5059, 0.975], [0.5098, 0.5098, 0.9583], [0.5137, 0.5137, 0.9416], [0.5176, 0.5176, 0.9249], [0.5216, 0.5216, 0.9082], [0.5255, 0.5255, 0.8915], [0.5294, 0.5294, 0.8748], [0.5333, 0.5333, 0.8582], [0.5373, 0.5373, 0.8415], [0.5412, 0.5412, 0.8248], [0.5451, 0.5451, 0.8081], [0.549, 0.549, 0.7914], [0.5529, 0.5529, 0.7747], [0.5569, 0.5569, 0.758], [0.5608, 0.5608, 0.7413], [0.5647, 0.5647, 0.7247], [0.5686, 0.5686, 0.708], [0.5725, 0.5725, 0.6913], [0.5765, 0.5765, 0.6746], [0.5804, 0.5804, 0.6579], [0.5843, 0.5843, 0.6412], [0.5882, 0.5882, 0.6245], [0.5922, 0.5922, 0.6078], [0.5961, 0.5961, 0.5912], [0.6, 0.6, 0.5745], [0.6039, 0.6039, 0.5578], [0.6078, 0.6078, 0.5411], [0.6118, 0.6118, 0.5244], [0.6157, 0.6157, 0.5077], [0.6196, 0.6196, 0.491], [0.6235, 0.6235, 0.4743], [0.6275, 0.6275, 0.4577], [0.6314, 0.6314, 0.441], [0.6353, 0.6353, 0.4243], [0.6392, 0.6392, 0.4076], [0.6431, 0.6431, 0.3909], [0.6471, 0.6471, 0.3742], [0.651, 0.651, 0.3575], [0.6549, 0.6549, 0.3408], [0.6588, 0.6588, 0.3242], [0.6627, 0.6627, 0.3075], [0.6667, 0.6667, 0.2908], [0.6706, 0.6706, 0.2741], [0.6745, 0.6745, 0.2574], [0.6784, 0.6784, 0.2407], [0.6824, 0.6824, 0.224], [0.6863, 0.6863, 0.2073], [0.6902, 0.6902, 0.1907], [0.6941, 0.6941, 0.174], [0.698, 0.698, 0.1573], [0.702, 0.702, 0.1406], [0.7059, 0.7059, 0.1239], [0.7098, 0.7098, 0.1072], [0.7137, 0.7137, 0.0905], [0.7176, 0.7176, 0.0738], [0.7216, 0.7216, 0.0572], [0.7255, 0.7255, 0.0405], [0.7294, 0.7294, 0.0238], [0.7333, 0.7333, 0.0071], [0.7373, 0.7373, 0.0085], [0.7412, 0.7412, 0.0233], [0.7451, 0.7451, 0.0381], [0.749, 0.749, 0.0529], [0.7529, 0.7529, 0.0677], [0.7569, 0.7569, 0.0825], [0.7608, 0.7608, 0.0973], [0.7647, 0.7647, 0.1121], [0.7686, 0.7686, 0.1269], [0.7725, 0.7725, 0.1417], [0.7765, 0.7765, 0.1565], [0.7804, 0.7804, 0.1713], [0.7843, 0.7843, 0.1861], [0.7882, 0.7882, 0.2009], [0.7922, 0.7922, 0.2157], [0.7961, 0.7961, 0.2305], [0.8, 0.8, 0.2453], [0.8039, 0.8039, 0.2601], [0.8078, 0.8078, 0.2749], [0.8118, 0.8118, 0.2897], [0.8157, 0.8157, 0.3045], [0.8196, 0.8196, 0.3193], [0.8235, 0.8235, 0.3341], [0.8275, 0.8275, 0.3489], [0.8314, 0.8314, 0.3637], [0.8353, 0.8353, 0.3785], [0.8392, 0.8392, 0.3933], [0.8431, 0.8431, 0.4081], [0.8471, 0.8471, 0.4229], [0.851, 0.851, 0.4377], [0.8549, 0.8549, 0.4525], [0.8588, 0.8588, 0.4673], [0.8627, 0.8627, 0.4821], [0.8667, 0.8667, 0.4969], [0.8706, 0.8706, 0.5117], [0.8745, 0.8745, 0.5265], [0.8784, 0.8784, 0.5413], [0.8824, 0.8824, 0.556], [0.8863, 0.8863, 0.5708], [0.8902, 0.8902, 0.5856], [0.8941, 0.8941, 0.6004], [0.898, 0.898, 0.6152], [0.902, 0.902, 0.63], [0.9059, 0.9059, 0.6448], [0.9098, 0.9098, 0.6596], [0.9137, 0.9137, 0.6744], [0.9176, 0.9176, 0.6892], [0.9216, 0.9216, 0.704], [0.9255, 0.9255, 0.7188], [0.9294, 0.9294, 0.7336], [0.9333, 0.9333, 0.7484], [0.9373, 0.9373, 0.7632], [0.9412, 0.9412, 0.778], [0.9451, 0.9451, 0.7928], [0.949, 0.949, 0.8076], [0.9529, 0.9529, 0.8224], [0.9569, 0.9569, 0.8372], [0.9608, 0.9608, 0.852], [0.9647, 0.9647, 0.8668], [0.9686, 0.9686, 0.8816], [0.9725, 0.9725, 0.8964], [0.9765, 0.9765, 0.9112], [0.9804, 0.9804, 0.926], [0.9843, 0.9843, 0.9408], [0.9882, 0.9882, 0.9556], [0.9922, 0.9922, 0.9704], [0.9961, 0.9961, 0.9852], [1.0, 1.0, 1.0]] }, "gist_yarg": { "interpolate": true, "colors": [[1.0, 1.0, 1.0], [0.9961, 0.9961, 0.9961], [0.9922, 0.9922, 0.9922], [0.9882, 0.9882, 0.9882], [0.9843, 0.9843, 0.9843], [0.9804, 0.9804, 0.9804], [0.9765, 0.9765, 0.9765], [0.9725, 0.9725, 0.9725], [0.9686, 0.9686, 0.9686], [0.9647, 0.9647, 0.9647], [0.9608, 0.9608, 0.9608], [0.9569, 0.9569, 0.9569], [0.9529, 0.9529, 0.9529], [0.949, 0.949, 0.949], [0.9451, 0.9451, 0.9451], [0.9412, 0.9412, 0.9412], [0.9373, 0.9373, 0.9373], [0.9333, 0.9333, 0.9333], [0.9294, 0.9294, 0.9294], [0.9255, 0.9255, 0.9255], [0.9216, 0.9216, 0.9216], [0.9176, 0.9176, 0.9176], [0.9137, 0.9137, 0.9137], [0.9098, 0.9098, 0.9098], [0.9059, 0.9059, 0.9059], [0.902, 0.902, 0.902], [0.898, 0.898, 0.898], [0.8941, 0.8941, 0.8941], [0.8902, 0.8902, 0.8902], [0.8863, 0.8863, 0.8863], [0.8824, 0.8824, 0.8824], [0.8784, 0.8784, 0.8784], [0.8745, 0.8745, 0.8745], [0.8706, 0.8706, 0.8706], [0.8667, 0.8667, 0.8667], [0.8627, 0.8627, 0.8627], [0.8588, 0.8588, 0.8588], [0.8549, 0.8549, 0.8549], [0.851, 0.851, 0.851], [0.8471, 0.8471, 0.8471], [0.8431, 0.8431, 0.8431], [0.8392, 0.8392, 0.8392], [0.8353, 0.8353, 0.8353], [0.8314, 0.8314, 0.8314], [0.8275, 0.8275, 0.8275], [0.8235, 0.8235, 0.8235], [0.8196, 0.8196, 0.8196], [0.8157, 0.8157, 0.8157], [0.8118, 0.8118, 0.8118], [0.8078, 0.8078, 0.8078], [0.8039, 0.8039, 0.8039], [0.8, 0.8, 0.8], [0.7961, 0.7961, 0.7961], [0.7922, 0.7922, 0.7922], [0.7882, 0.7882, 0.7882], [0.7843, 0.7843, 0.7843], [0.7804, 0.7804, 0.7804], [0.7765, 0.7765, 0.7765], [0.7725, 0.7725, 0.7725], [0.7686, 0.7686, 0.7686], [0.7647, 0.7647, 0.7647], [0.7608, 0.7608, 0.7608], [0.7569, 0.7569, 0.7569], [0.7529, 0.7529, 0.7529], [0.749, 0.749, 0.749], [0.7451, 0.7451, 0.7451], [0.7412, 0.7412, 0.7412], [0.7373, 0.7373, 0.7373], [0.7333, 0.7333, 0.7333], [0.7294, 0.7294, 0.7294], [0.7255, 0.7255, 0.7255], [0.7216, 0.7216, 0.7216], [0.7176, 0.7176, 0.7176], [0.7137, 0.7137, 0.7137], [0.7098, 0.7098, 0.7098], [0.7059, 0.7059, 0.7059], [0.702, 0.702, 0.702], [0.698, 0.698, 0.698], [0.6941, 0.6941, 0.6941], [0.6902, 0.6902, 0.6902], [0.6863, 0.6863, 0.6863], [0.6824, 0.6824, 0.6824], [0.6784, 0.6784, 0.6784], [0.6745, 0.6745, 0.6745], [0.6706, 0.6706, 0.6706], [0.6667, 0.6667, 0.6667], [0.6627, 0.6627, 0.6627], [0.6588, 0.6588, 0.6588], [0.6549, 0.6549, 0.6549], [0.651, 0.651, 0.651], [0.6471, 0.6471, 0.6471], [0.6431, 0.6431, 0.6431], [0.6392, 0.6392, 0.6392], [0.6353, 0.6353, 0.6353], [0.6314, 0.6314, 0.6314], [0.6275, 0.6275, 0.6275], [0.6235, 0.6235, 0.6235], [0.6196, 0.6196, 0.6196], [0.6157, 0.6157, 0.6157], [0.6118, 0.6118, 0.6118], [0.6078, 0.6078, 0.6078], [0.6039, 0.6039, 0.6039], [0.6, 0.6, 0.6], [0.5961, 0.5961, 0.5961], [0.5922, 0.5922, 0.5922], [0.5882, 0.5882, 0.5882], [0.5843, 0.5843, 0.5843], [0.5804, 0.5804, 0.5804], [0.5765, 0.5765, 0.5765], [0.5725, 0.5725, 0.5725], [0.5686, 0.5686, 0.5686], [0.5647, 0.5647, 0.5647], [0.5608, 0.5608, 0.5608], [0.5569, 0.5569, 0.5569], [0.5529, 0.5529, 0.5529], [0.549, 0.549, 0.549], [0.5451, 0.5451, 0.5451], [0.5412, 0.5412, 0.5412], [0.5373, 0.5373, 0.5373], [0.5333, 0.5333, 0.5333], [0.5294, 0.5294, 0.5294], [0.5255, 0.5255, 0.5255], [0.5216, 0.5216, 0.5216], [0.5176, 0.5176, 0.5176], [0.5137, 0.5137, 0.5137], [0.5098, 0.5098, 0.5098], [0.5059, 0.5059, 0.5059], [0.502, 0.502, 0.502], [0.498, 0.498, 0.498], [0.4941, 0.4941, 0.4941], [0.4902, 0.4902, 0.4902], [0.4863, 0.4863, 0.4863], [0.4824, 0.4824, 0.4824], [0.4784, 0.4784, 0.4784], [0.4745, 0.4745, 0.4745], [0.4706, 0.4706, 0.4706], [0.4667, 0.4667, 0.4667], [0.4627, 0.4627, 0.4627], [0.4588, 0.4588, 0.4588], [0.4549, 0.4549, 0.4549], [0.451, 0.451, 0.451], [0.4471, 0.4471, 0.4471], [0.4431, 0.4431, 0.4431], [0.4392, 0.4392, 0.4392], [0.4353, 0.4353, 0.4353], [0.4314, 0.4314, 0.4314], [0.4275, 0.4275, 0.4275], [0.4235, 0.4235, 0.4235], [0.4196, 0.4196, 0.4196], [0.4157, 0.4157, 0.4157], [0.4118, 0.4118, 0.4118], [0.4078, 0.4078, 0.4078], [0.4039, 0.4039, 0.4039], [0.4, 0.4, 0.4], [0.3961, 0.3961, 0.3961], [0.3922, 0.3922, 0.3922], [0.3882, 0.3882, 0.3882], [0.3843, 0.3843, 0.3843], [0.3804, 0.3804, 0.3804], [0.3765, 0.3765, 0.3765], [0.3725, 0.3725, 0.3725], [0.3686, 0.3686, 0.3686], [0.3647, 0.3647, 0.3647], [0.3608, 0.3608, 0.3608], [0.3569, 0.3569, 0.3569], [0.3529, 0.3529, 0.3529], [0.349, 0.349, 0.349], [0.3451, 0.3451, 0.3451], [0.3412, 0.3412, 0.3412], [0.3373, 0.3373, 0.3373], [0.3333, 0.3333, 0.3333], [0.3294, 0.3294, 0.3294], [0.3255, 0.3255, 0.3255], [0.3216, 0.3216, 0.3216], [0.3176, 0.3176, 0.3176], [0.3137, 0.3137, 0.3137], [0.3098, 0.3098, 0.3098], [0.3059, 0.3059, 0.3059], [0.302, 0.302, 0.302], [0.298, 0.298, 0.298], [0.2941, 0.2941, 0.2941], [0.2902, 0.2902, 0.2902], [0.2863, 0.2863, 0.2863], [0.2824, 0.2824, 0.2824], [0.2784, 0.2784, 0.2784], [0.2745, 0.2745, 0.2745], [0.2706, 0.2706, 0.2706], [0.2667, 0.2667, 0.2667], [0.2627, 0.2627, 0.2627], [0.2588, 0.2588, 0.2588], [0.2549, 0.2549, 0.2549], [0.251, 0.251, 0.251], [0.2471, 0.2471, 0.2471], [0.2431, 0.2431, 0.2431], [0.2392, 0.2392, 0.2392], [0.2353, 0.2353, 0.2353], [0.2314, 0.2314, 0.2314], [0.2275, 0.2275, 0.2275], [0.2235, 0.2235, 0.2235], [0.2196, 0.2196, 0.2196], [0.2157, 0.2157, 0.2157], [0.2118, 0.2118, 0.2118], [0.2078, 0.2078, 0.2078], [0.2039, 0.2039, 0.2039], [0.2, 0.2, 0.2], [0.1961, 0.1961, 0.1961], [0.1922, 0.1922, 0.1922], [0.1882, 0.1882, 0.1882], [0.1843, 0.1843, 0.1843], [0.1804, 0.1804, 0.1804], [0.1765, 0.1765, 0.1765], [0.1725, 0.1725, 0.1725], [0.1686, 0.1686, 0.1686], [0.1647, 0.1647, 0.1647], [0.1608, 0.1608, 0.1608], [0.1569, 0.1569, 0.1569], [0.1529, 0.1529, 0.1529], [0.149, 0.149, 0.149], [0.1451, 0.1451, 0.1451], [0.1412, 0.1412, 0.1412], [0.1373, 0.1373, 0.1373], [0.1333, 0.1333, 0.1333], [0.1294, 0.1294, 0.1294], [0.1255, 0.1255, 0.1255], [0.1216, 0.1216, 0.1216], [0.1176, 0.1176, 0.1176], [0.1137, 0.1137, 0.1137], [0.1098, 0.1098, 0.1098], [0.1059, 0.1059, 0.1059], [0.102, 0.102, 0.102], [0.098, 0.098, 0.098], [0.0941, 0.0941, 0.0941], [0.0902, 0.0902, 0.0902], [0.0863, 0.0863, 0.0863], [0.0824, 0.0824, 0.0824], [0.0784, 0.0784, 0.0784], [0.0745, 0.0745, 0.0745], [0.0706, 0.0706, 0.0706], [0.0667, 0.0667, 0.0667], [0.0627, 0.0627, 0.0627], [0.0588, 0.0588, 0.0588], [0.0549, 0.0549, 0.0549], [0.051, 0.051, 0.051], [0.0471, 0.0471, 0.0471], [0.0431, 0.0431, 0.0431], [0.0392, 0.0392, 0.0392], [0.0353, 0.0353, 0.0353], [0.0314, 0.0314, 0.0314], [0.0275, 0.0275, 0.0275], [0.0235, 0.0235, 0.0235], [0.0196, 0.0196, 0.0196], [0.0157, 0.0157, 0.0157], [0.0118, 0.0118, 0.0118], [0.0078, 0.0078, 0.0078], [0.0039, 0.0039, 0.0039], [0.0, 0.0, 0.0]] }, "gnuplot": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0626, 0.0, 0.0246], [0.0886, 0.0, 0.0493], [0.1085, 0.0, 0.0739], [0.1252, 0.0, 0.0984], [0.14, 0.0, 0.1229], [0.1534, 0.0, 0.1473], [0.1657, 0.0, 0.1716], [0.1771, 0.0, 0.1958], [0.1879, 0.0, 0.2199], [0.198, 0.0001, 0.2439], [0.2077, 0.0001, 0.2677], [0.2169, 0.0001, 0.2914], [0.2258, 0.0001, 0.3149], [0.2343, 0.0002, 0.3382], [0.2425, 0.0002, 0.3612], [0.2505, 0.0002, 0.3841], [0.2582, 0.0003, 0.4067], [0.2657, 0.0004, 0.4291], [0.273, 0.0004, 0.4512], [0.2801, 0.0005, 0.4731], [0.287, 0.0006, 0.4947], [0.2937, 0.0006, 0.5159], [0.3003, 0.0007, 0.5369], [0.3068, 0.0008, 0.5575], [0.3131, 0.0009, 0.5778], [0.3193, 0.0011, 0.5977], [0.3254, 0.0012, 0.6173], [0.3314, 0.0013, 0.6365], [0.3372, 0.0015, 0.6553], [0.343, 0.0016, 0.6737], [0.3487, 0.0018, 0.6917], [0.3542, 0.002, 0.7093], [0.3597, 0.0022, 0.7264], [0.3651, 0.0024, 0.7431], [0.3705, 0.0026, 0.7594], [0.3757, 0.0028, 0.7752], [0.3809, 0.0031, 0.7905], [0.386, 0.0033, 0.8054], [0.3911, 0.0036, 0.8197], [0.3961, 0.0039, 0.8336], [0.401, 0.0042, 0.847], [0.4058, 0.0045, 0.8598], [0.4106, 0.0048, 0.8721], [0.4154, 0.0051, 0.8839], [0.4201, 0.0055, 0.8952], [0.4247, 0.0059, 0.9059], [0.4293, 0.0063, 0.916], [0.4339, 0.0067, 0.9256], [0.4384, 0.0071, 0.9347], [0.4428, 0.0075, 0.9432], [0.4472, 0.008, 0.9511], [0.4516, 0.0085, 0.9584], [0.4559, 0.009, 0.9651], [0.4602, 0.0095, 0.9713], [0.4644, 0.01, 0.9768], [0.4686, 0.0106, 0.9818], [0.4728, 0.0112, 0.9862], [0.4769, 0.0118, 0.99], [0.481, 0.0124, 0.9932], [0.4851, 0.013, 0.9957], [0.4891, 0.0137, 0.9977], [0.4931, 0.0144, 0.9991], [0.4971, 0.0151, 0.9998], [0.501, 0.0158, 1.0], [0.5049, 0.0166, 0.9995], [0.5087, 0.0173, 0.9985], [0.5126, 0.0181, 0.9968], [0.5164, 0.019, 0.9945], [0.5202, 0.0198, 0.9916], [0.5239, 0.0207, 0.9882], [0.5277, 0.0216, 0.9841], [0.5314, 0.0225, 0.9794], [0.535, 0.0235, 0.9741], [0.5387, 0.0244, 0.9683], [0.5423, 0.0254, 0.9618], [0.5459, 0.0265, 0.9548], [0.5495, 0.0275, 0.9472], [0.5531, 0.0286, 0.939], [0.5566, 0.0297, 0.9302], [0.5601, 0.0309, 0.9209], [0.5636, 0.0321, 0.911], [0.5671, 0.0333, 0.9006], [0.5705, 0.0345, 0.8896], [0.5739, 0.0357, 0.8781], [0.5774, 0.037, 0.866], [0.5807, 0.0384, 0.8534], [0.5841, 0.0397, 0.8403], [0.5875, 0.0411, 0.8267], [0.5908, 0.0425, 0.8126], [0.5941, 0.044, 0.798], [0.5974, 0.0454, 0.7829], [0.6007, 0.047, 0.7674], [0.6039, 0.0485, 0.7513], [0.6071, 0.0501, 0.7348], [0.6104, 0.0517, 0.7179], [0.6136, 0.0534, 0.7005], [0.6168, 0.055, 0.6827], [0.6199, 0.0568, 0.6645], [0.6231, 0.0585, 0.6459], [0.6262, 0.0603, 0.6269], [0.6293, 0.0621, 0.6075], [0.6325, 0.064, 0.5878], [0.6355, 0.0659, 0.5677], [0.6386, 0.0678, 0.5472], [0.6417, 0.0698, 0.5264], [0.6447, 0.0718, 0.5053], [0.6478, 0.0739, 0.4839], [0.6508, 0.076, 0.4622], [0.6538, 0.0781, 0.4402], [0.6568, 0.0803, 0.418], [0.6598, 0.0825, 0.3955], [0.6627, 0.0847, 0.3727], [0.6657, 0.087, 0.3497], [0.6686, 0.0893, 0.3265], [0.6716, 0.0917, 0.3032], [0.6745, 0.0941, 0.2796], [0.6774, 0.0966, 0.2558], [0.6803, 0.0991, 0.2319], [0.6831, 0.1016, 0.2079], [0.686, 0.1042, 0.1837], [0.6888, 0.1068, 0.1595], [0.6917, 0.1095, 0.1351], [0.6945, 0.1122, 0.1107], [0.6973, 0.115, 0.0861], [0.7001, 0.1178, 0.0616], [0.7029, 0.1206, 0.037], [0.7057, 0.1235, 0.0123], [0.7085, 0.1265, 0.0], [0.7113, 0.1295, 0.0], [0.714, 0.1325, 0.0], [0.7167, 0.1356, 0.0], [0.7195, 0.1387, 0.0], [0.7222, 0.1419, 0.0], [0.7249, 0.1451, 0.0], [0.7276, 0.1484, 0.0], [0.7303, 0.1517, 0.0], [0.733, 0.1551, 0.0], [0.7356, 0.1585, 0.0], [0.7383, 0.162, 0.0], [0.741, 0.1655, 0.0], [0.7436, 0.1691, 0.0], [0.7462, 0.1727, 0.0], [0.7489, 0.1764, 0.0], [0.7515, 0.1801, 0.0], [0.7541, 0.1839, 0.0], [0.7567, 0.1877, 0.0], [0.7593, 0.1916, 0.0], [0.7618, 0.1955, 0.0], [0.7644, 0.1995, 0.0], [0.767, 0.2035, 0.0], [0.7695, 0.2076, 0.0], [0.7721, 0.2118, 0.0], [0.7746, 0.216, 0.0], [0.7771, 0.2203, 0.0], [0.7796, 0.2246, 0.0], [0.7822, 0.229, 0.0], [0.7847, 0.2334, 0.0], [0.7872, 0.2379, 0.0], [0.7896, 0.2424, 0.0], [0.7921, 0.247, 0.0], [0.7946, 0.2517, 0.0], [0.7971, 0.2564, 0.0], [0.7995, 0.2612, 0.0], [0.802, 0.266, 0.0], [0.8044, 0.2709, 0.0], [0.8068, 0.2759, 0.0], [0.8093, 0.2809, 0.0], [0.8117, 0.286, 0.0], [0.8141, 0.2911, 0.0], [0.8165, 0.2963, 0.0], [0.8189, 0.3016, 0.0], [0.8213, 0.3069, 0.0], [0.8237, 0.3123, 0.0], [0.826, 0.3177, 0.0], [0.8284, 0.3232, 0.0], [0.8308, 0.3288, 0.0], [0.8331, 0.3344, 0.0], [0.8355, 0.3401, 0.0], [0.8378, 0.3459, 0.0], [0.8402, 0.3517, 0.0], [0.8425, 0.3576, 0.0], [0.8448, 0.3636, 0.0], [0.8471, 0.3696, 0.0], [0.8495, 0.3757, 0.0], [0.8518, 0.3819, 0.0], [0.8541, 0.3881, 0.0], [0.8563, 0.3944, 0.0], [0.8586, 0.4007, 0.0], [0.8609, 0.4072, 0.0], [0.8632, 0.4137, 0.0], [0.8655, 0.4202, 0.0], [0.8677, 0.4269, 0.0], [0.87, 0.4336, 0.0], [0.8722, 0.4403, 0.0], [0.8745, 0.4472, 0.0], [0.8767, 0.4541, 0.0], [0.8789, 0.4611, 0.0], [0.8812, 0.4681, 0.0], [0.8834, 0.4753, 0.0], [0.8856, 0.4825, 0.0], [0.8878, 0.4897, 0.0], [0.89, 0.4971, 0.0], [0.8922, 0.5045, 0.0], [0.8944, 0.512, 0.0], [0.8966, 0.5196, 0.0], [0.8988, 0.5272, 0.0], [0.901, 0.5349, 0.0], [0.9032, 0.5427, 0.0], [0.9053, 0.5506, 0.0], [0.9075, 0.5585, 0.0], [0.9096, 0.5665, 0.0], [0.9118, 0.5746, 0.0], [0.9139, 0.5828, 0.0], [0.9161, 0.591, 0.0], [0.9182, 0.5994, 0.0], [0.9204, 0.6078, 0.0], [0.9225, 0.6163, 0.0], [0.9246, 0.6248, 0.0], [0.9267, 0.6334, 0.0], [0.9288, 0.6422, 0.0], [0.9309, 0.651, 0.0], [0.9331, 0.6598, 0.0], [0.9352, 0.6688, 0.0], [0.9372, 0.6778, 0.0], [0.9393, 0.687, 0.0], [0.9414, 0.6962, 0.0], [0.9435, 0.7054, 0.0], [0.9456, 0.7148, 0.0], [0.9476, 0.7242, 0.0], [0.9497, 0.7338, 0.0], [0.9518, 0.7434, 0.0], [0.9538, 0.7531, 0.0], [0.9559, 0.7629, 0.0], [0.9579, 0.7727, 0.0], [0.96, 0.7827, 0.0], [0.962, 0.7927, 0.0], [0.9641, 0.8028, 0.0], [0.9661, 0.813, 0.0], [0.9681, 0.8233, 0.0], [0.9701, 0.8337, 0.0], [0.9722, 0.8442, 0.0], [0.9742, 0.8547, 0.0], [0.9762, 0.8654, 0.0], [0.9782, 0.8761, 0.0], [0.9802, 0.8869, 0.0], [0.9822, 0.8978, 0.0], [0.9842, 0.9088, 0.0], [0.9862, 0.9199, 0.0], [0.9882, 0.9311, 0.0], [0.9901, 0.9423, 0.0], [0.9921, 0.9537, 0.0], [0.9941, 0.9651, 0.0], [0.9961, 0.9767, 0.0], [0.998, 0.9883, 0.0], [1.0, 1.0, 0.0]] }, "gnuplot2": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0157], [0.0, 0.0, 0.0314], [0.0, 0.0, 0.0471], [0.0, 0.0, 0.0627], [0.0, 0.0, 0.0784], [0.0, 0.0, 0.0941], [0.0, 0.0, 0.1098], [0.0, 0.0, 0.1255], [0.0, 0.0, 0.1412], [0.0, 0.0, 0.1569], [0.0, 0.0, 0.1725], [0.0, 0.0, 0.1882], [0.0, 0.0, 0.2039], [0.0, 0.0, 0.2196], [0.0, 0.0, 0.2353], [0.0, 0.0, 0.251], [0.0, 0.0, 0.2667], [0.0, 0.0, 0.2824], [0.0, 0.0, 0.298], [0.0, 0.0, 0.3137], [0.0, 0.0, 0.3294], [0.0, 0.0, 0.3451], [0.0, 0.0, 0.3608], [0.0, 0.0, 0.3765], [0.0, 0.0, 0.3922], [0.0, 0.0, 0.4078], [0.0, 0.0, 0.4235], [0.0, 0.0, 0.4392], [0.0, 0.0, 0.4549], [0.0, 0.0, 0.4706], [0.0, 0.0, 0.4863], [0.0, 0.0, 0.502], [0.0, 0.0, 0.5176], [0.0, 0.0, 0.5333], [0.0, 0.0, 0.549], [0.0, 0.0, 0.5647], [0.0, 0.0, 0.5804], [0.0, 0.0, 0.5961], [0.0, 0.0, 0.6118], [0.0, 0.0, 0.6275], [0.0, 0.0, 0.6431], [0.0, 0.0, 0.6588], [0.0, 0.0, 0.6745], [0.0, 0.0, 0.6902], [0.0, 0.0, 0.7059], [0.0, 0.0, 0.7216], [0.0, 0.0, 0.7373], [0.0, 0.0, 0.7529], [0.0, 0.0, 0.7686], [0.0, 0.0, 0.7843], [0.0, 0.0, 0.8], [0.0, 0.0, 0.8157], [0.0, 0.0, 0.8314], [0.0, 0.0, 0.8471], [0.0, 0.0, 0.8627], [0.0, 0.0, 0.8784], [0.0, 0.0, 0.8941], [0.0, 0.0, 0.9098], [0.0, 0.0, 0.9255], [0.0, 0.0, 0.9412], [0.0, 0.0, 0.9569], [0.0, 0.0, 0.9725], [0.0, 0.0, 0.9882], [0.0031, 0.0, 1.0], [0.0153, 0.0, 1.0], [0.0276, 0.0, 1.0], [0.0398, 0.0, 1.0], [0.0521, 0.0, 1.0], [0.0643, 0.0, 1.0], [0.0766, 0.0, 1.0], [0.0888, 0.0, 1.0], [0.1011, 0.0, 1.0], [0.1134, 0.0, 1.0], [0.1256, 0.0, 1.0], [0.1379, 0.0, 1.0], [0.1501, 0.0, 1.0], [0.1624, 0.0, 1.0], [0.1746, 0.0, 1.0], [0.1869, 0.0, 1.0], [0.1991, 0.0, 1.0], [0.2114, 0.0, 1.0], [0.2237, 0.0, 1.0], [0.2359, 0.0, 1.0], [0.2482, 0.0, 1.0], [0.2604, 0.0, 1.0], [0.2727, 0.0, 1.0], [0.2849, 0.0, 1.0], [0.2972, 0.0, 1.0], [0.3094, 0.0, 1.0], [0.3217, 0.0, 1.0], [0.3339, 0.0, 1.0], [0.3462, 0.0, 1.0], [0.3585, 0.0, 1.0], [0.3707, 0.0, 1.0], [0.383, 0.0, 1.0], [0.3952, 0.0, 1.0], [0.4075, 0.0, 1.0], [0.4197, 0.0, 1.0], [0.432, 0.0, 1.0], [0.4442, 0.0, 1.0], [0.4565, 0.0, 1.0], [0.4688, 0.0, 1.0], [0.481, 0.0, 1.0], [0.4933, 0.0, 1.0], [0.5055, 0.0, 1.0], [0.5178, 0.0, 1.0], [0.53, 0.0, 1.0], [0.5423, 0.0071, 0.9929], [0.5545, 0.0149, 0.9851], [0.5668, 0.0227, 0.9773], [0.579, 0.0306, 0.9694], [0.5913, 0.0384, 0.9616], [0.6036, 0.0463, 0.9537], [0.6158, 0.0541, 0.9459], [0.6281, 0.062, 0.938], [0.6403, 0.0698, 0.9302], [0.6526, 0.0776, 0.9224], [0.6648, 0.0855, 0.9145], [0.6771, 0.0933, 0.9067], [0.6893, 0.1012, 0.8988], [0.7016, 0.109, 0.891], [0.7138, 0.1169, 0.8831], [0.7261, 0.1247, 0.8753], [0.7384, 0.1325, 0.8675], [0.7506, 0.1404, 0.8596], [0.7629, 0.1482, 0.8518], [0.7751, 0.1561, 0.8439], [0.7874, 0.1639, 0.8361], [0.7996, 0.1718, 0.8282], [0.8119, 0.1796, 0.8204], [0.8241, 0.1875, 0.8125], [0.8364, 0.1953, 0.8047], [0.8487, 0.2031, 0.7969], [0.8609, 0.211, 0.789], [0.8732, 0.2188, 0.7812], [0.8854, 0.2267, 0.7733], [0.8977, 0.2345, 0.7655], [0.9099, 0.2424, 0.7576], [0.9222, 0.2502, 0.7498], [0.9344, 0.258, 0.742], [0.9467, 0.2659, 0.7341], [0.9589, 0.2737, 0.7263], [0.9712, 0.2816, 0.7184], [0.9835, 0.2894, 0.7106], [0.9957, 0.2973, 0.7027], [1.0, 0.3051, 0.6949], [1.0, 0.3129, 0.6871], [1.0, 0.3208, 0.6792], [1.0, 0.3286, 0.6714], [1.0, 0.3365, 0.6635], [1.0, 0.3443, 0.6557], [1.0, 0.3522, 0.6478], [1.0, 0.36, 0.64], [1.0, 0.3678, 0.6322], [1.0, 0.3757, 0.6243], [1.0, 0.3835, 0.6165], [1.0, 0.3914, 0.6086], [1.0, 0.3992, 0.6008], [1.0, 0.4071, 0.5929], [1.0, 0.4149, 0.5851], [1.0, 0.4227, 0.5773], [1.0, 0.4306, 0.5694], [1.0, 0.4384, 0.5616], [1.0, 0.4463, 0.5537], [1.0, 0.4541, 0.5459], [1.0, 0.462, 0.538], [1.0, 0.4698, 0.5302], [1.0, 0.4776, 0.5224], [1.0, 0.4855, 0.5145], [1.0, 0.4933, 0.5067], [1.0, 0.5012, 0.4988], [1.0, 0.509, 0.491], [1.0, 0.5169, 0.4831], [1.0, 0.5247, 0.4753], [1.0, 0.5325, 0.4675], [1.0, 0.5404, 0.4596], [1.0, 0.5482, 0.4518], [1.0, 0.5561, 0.4439], [1.0, 0.5639, 0.4361], [1.0, 0.5718, 0.4282], [1.0, 0.5796, 0.4204], [1.0, 0.5875, 0.4125], [1.0, 0.5953, 0.4047], [1.0, 0.6031, 0.3969], [1.0, 0.611, 0.389], [1.0, 0.6188, 0.3812], [1.0, 0.6267, 0.3733], [1.0, 0.6345, 0.3655], [1.0, 0.6424, 0.3576], [1.0, 0.6502, 0.3498], [1.0, 0.658, 0.342], [1.0, 0.6659, 0.3341], [1.0, 0.6737, 0.3263], [1.0, 0.6816, 0.3184], [1.0, 0.6894, 0.3106], [1.0, 0.6973, 0.3027], [1.0, 0.7051, 0.2949], [1.0, 0.7129, 0.2871], [1.0, 0.7208, 0.2792], [1.0, 0.7286, 0.2714], [1.0, 0.7365, 0.2635], [1.0, 0.7443, 0.2557], [1.0, 0.7522, 0.2478], [1.0, 0.76, 0.24], [1.0, 0.7678, 0.2322], [1.0, 0.7757, 0.2243], [1.0, 0.7835, 0.2165], [1.0, 0.7914, 0.2086], [1.0, 0.7992, 0.2008], [1.0, 0.8071, 0.1929], [1.0, 0.8149, 0.1851], [1.0, 0.8227, 0.1773], [1.0, 0.8306, 0.1694], [1.0, 0.8384, 0.1616], [1.0, 0.8463, 0.1537], [1.0, 0.8541, 0.1459], [1.0, 0.862, 0.138], [1.0, 0.8698, 0.1302], [1.0, 0.8776, 0.1224], [1.0, 0.8855, 0.1145], [1.0, 0.8933, 0.1067], [1.0, 0.9012, 0.0988], [1.0, 0.909, 0.091], [1.0, 0.9169, 0.0831], [1.0, 0.9247, 0.0753], [1.0, 0.9325, 0.0675], [1.0, 0.9404, 0.0596], [1.0, 0.9482, 0.0518], [1.0, 0.9561, 0.0439], [1.0, 0.9639, 0.0361], [1.0, 0.9718, 0.0282], [1.0, 0.9796, 0.0204], [1.0, 0.9875, 0.0125], [1.0, 0.9953, 0.0047], [1.0, 1.0, 0.0196], [1.0, 1.0, 0.0686], [1.0, 1.0, 0.1176], [1.0, 1.0, 0.1667], [1.0, 1.0, 0.2157], [1.0, 1.0, 0.2647], [1.0, 1.0, 0.3137], [1.0, 1.0, 0.3627], [1.0, 1.0, 0.4118], [1.0, 1.0, 0.4608], [1.0, 1.0, 0.5098], [1.0, 1.0, 0.5588], [1.0, 1.0, 0.6078], [1.0, 1.0, 0.6569], [1.0, 1.0, 0.7059], [1.0, 1.0, 0.7549], [1.0, 1.0, 0.8039], [1.0, 1.0, 0.8529], [1.0, 1.0, 0.902], [1.0, 1.0, 0.951], [1.0, 1.0, 1.0]] }, "gray": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0039, 0.0039, 0.0039], [0.0078, 0.0078, 0.0078], [0.0118, 0.0118, 0.0118], [0.0157, 0.0157, 0.0157], [0.0196, 0.0196, 0.0196], [0.0235, 0.0235, 0.0235], [0.0275, 0.0275, 0.0275], [0.0314, 0.0314, 0.0314], [0.0353, 0.0353, 0.0353], [0.0392, 0.0392, 0.0392], [0.0431, 0.0431, 0.0431], [0.0471, 0.0471, 0.0471], [0.051, 0.051, 0.051], [0.0549, 0.0549, 0.0549], [0.0588, 0.0588, 0.0588], [0.0627, 0.0627, 0.0627], [0.0667, 0.0667, 0.0667], [0.0706, 0.0706, 0.0706], [0.0745, 0.0745, 0.0745], [0.0784, 0.0784, 0.0784], [0.0824, 0.0824, 0.0824], [0.0863, 0.0863, 0.0863], [0.0902, 0.0902, 0.0902], [0.0941, 0.0941, 0.0941], [0.098, 0.098, 0.098], [0.102, 0.102, 0.102], [0.1059, 0.1059, 0.1059], [0.1098, 0.1098, 0.1098], [0.1137, 0.1137, 0.1137], [0.1176, 0.1176, 0.1176], [0.1216, 0.1216, 0.1216], [0.1255, 0.1255, 0.1255], [0.1294, 0.1294, 0.1294], [0.1333, 0.1333, 0.1333], [0.1373, 0.1373, 0.1373], [0.1412, 0.1412, 0.1412], [0.1451, 0.1451, 0.1451], [0.149, 0.149, 0.149], [0.1529, 0.1529, 0.1529], [0.1569, 0.1569, 0.1569], [0.1608, 0.1608, 0.1608], [0.1647, 0.1647, 0.1647], [0.1686, 0.1686, 0.1686], [0.1725, 0.1725, 0.1725], [0.1765, 0.1765, 0.1765], [0.1804, 0.1804, 0.1804], [0.1843, 0.1843, 0.1843], [0.1882, 0.1882, 0.1882], [0.1922, 0.1922, 0.1922], [0.1961, 0.1961, 0.1961], [0.2, 0.2, 0.2], [0.2039, 0.2039, 0.2039], [0.2078, 0.2078, 0.2078], [0.2118, 0.2118, 0.2118], [0.2157, 0.2157, 0.2157], [0.2196, 0.2196, 0.2196], [0.2235, 0.2235, 0.2235], [0.2275, 0.2275, 0.2275], [0.2314, 0.2314, 0.2314], [0.2353, 0.2353, 0.2353], [0.2392, 0.2392, 0.2392], [0.2431, 0.2431, 0.2431], [0.2471, 0.2471, 0.2471], [0.251, 0.251, 0.251], [0.2549, 0.2549, 0.2549], [0.2588, 0.2588, 0.2588], [0.2627, 0.2627, 0.2627], [0.2667, 0.2667, 0.2667], [0.2706, 0.2706, 0.2706], [0.2745, 0.2745, 0.2745], [0.2784, 0.2784, 0.2784], [0.2824, 0.2824, 0.2824], [0.2863, 0.2863, 0.2863], [0.2902, 0.2902, 0.2902], [0.2941, 0.2941, 0.2941], [0.298, 0.298, 0.298], [0.302, 0.302, 0.302], [0.3059, 0.3059, 0.3059], [0.3098, 0.3098, 0.3098], [0.3137, 0.3137, 0.3137], [0.3176, 0.3176, 0.3176], [0.3216, 0.3216, 0.3216], [0.3255, 0.3255, 0.3255], [0.3294, 0.3294, 0.3294], [0.3333, 0.3333, 0.3333], [0.3373, 0.3373, 0.3373], [0.3412, 0.3412, 0.3412], [0.3451, 0.3451, 0.3451], [0.349, 0.349, 0.349], [0.3529, 0.3529, 0.3529], [0.3569, 0.3569, 0.3569], [0.3608, 0.3608, 0.3608], [0.3647, 0.3647, 0.3647], [0.3686, 0.3686, 0.3686], [0.3725, 0.3725, 0.3725], [0.3765, 0.3765, 0.3765], [0.3804, 0.3804, 0.3804], [0.3843, 0.3843, 0.3843], [0.3882, 0.3882, 0.3882], [0.3922, 0.3922, 0.3922], [0.3961, 0.3961, 0.3961], [0.4, 0.4, 0.4], [0.4039, 0.4039, 0.4039], [0.4078, 0.4078, 0.4078], [0.4118, 0.4118, 0.4118], [0.4157, 0.4157, 0.4157], [0.4196, 0.4196, 0.4196], [0.4235, 0.4235, 0.4235], [0.4275, 0.4275, 0.4275], [0.4314, 0.4314, 0.4314], [0.4353, 0.4353, 0.4353], [0.4392, 0.4392, 0.4392], [0.4431, 0.4431, 0.4431], [0.4471, 0.4471, 0.4471], [0.451, 0.451, 0.451], [0.4549, 0.4549, 0.4549], [0.4588, 0.4588, 0.4588], [0.4627, 0.4627, 0.4627], [0.4667, 0.4667, 0.4667], [0.4706, 0.4706, 0.4706], [0.4745, 0.4745, 0.4745], [0.4784, 0.4784, 0.4784], [0.4824, 0.4824, 0.4824], [0.4863, 0.4863, 0.4863], [0.4902, 0.4902, 0.4902], [0.4941, 0.4941, 0.4941], [0.498, 0.498, 0.498], [0.502, 0.502, 0.502], [0.5059, 0.5059, 0.5059], [0.5098, 0.5098, 0.5098], [0.5137, 0.5137, 0.5137], [0.5176, 0.5176, 0.5176], [0.5216, 0.5216, 0.5216], [0.5255, 0.5255, 0.5255], [0.5294, 0.5294, 0.5294], [0.5333, 0.5333, 0.5333], [0.5373, 0.5373, 0.5373], [0.5412, 0.5412, 0.5412], [0.5451, 0.5451, 0.5451], [0.549, 0.549, 0.549], [0.5529, 0.5529, 0.5529], [0.5569, 0.5569, 0.5569], [0.5608, 0.5608, 0.5608], [0.5647, 0.5647, 0.5647], [0.5686, 0.5686, 0.5686], [0.5725, 0.5725, 0.5725], [0.5765, 0.5765, 0.5765], [0.5804, 0.5804, 0.5804], [0.5843, 0.5843, 0.5843], [0.5882, 0.5882, 0.5882], [0.5922, 0.5922, 0.5922], [0.5961, 0.5961, 0.5961], [0.6, 0.6, 0.6], [0.6039, 0.6039, 0.6039], [0.6078, 0.6078, 0.6078], [0.6118, 0.6118, 0.6118], [0.6157, 0.6157, 0.6157], [0.6196, 0.6196, 0.6196], [0.6235, 0.6235, 0.6235], [0.6275, 0.6275, 0.6275], [0.6314, 0.6314, 0.6314], [0.6353, 0.6353, 0.6353], [0.6392, 0.6392, 0.6392], [0.6431, 0.6431, 0.6431], [0.6471, 0.6471, 0.6471], [0.651, 0.651, 0.651], [0.6549, 0.6549, 0.6549], [0.6588, 0.6588, 0.6588], [0.6627, 0.6627, 0.6627], [0.6667, 0.6667, 0.6667], [0.6706, 0.6706, 0.6706], [0.6745, 0.6745, 0.6745], [0.6784, 0.6784, 0.6784], [0.6824, 0.6824, 0.6824], [0.6863, 0.6863, 0.6863], [0.6902, 0.6902, 0.6902], [0.6941, 0.6941, 0.6941], [0.698, 0.698, 0.698], [0.702, 0.702, 0.702], [0.7059, 0.7059, 0.7059], [0.7098, 0.7098, 0.7098], [0.7137, 0.7137, 0.7137], [0.7176, 0.7176, 0.7176], [0.7216, 0.7216, 0.7216], [0.7255, 0.7255, 0.7255], [0.7294, 0.7294, 0.7294], [0.7333, 0.7333, 0.7333], [0.7373, 0.7373, 0.7373], [0.7412, 0.7412, 0.7412], [0.7451, 0.7451, 0.7451], [0.749, 0.749, 0.749], [0.7529, 0.7529, 0.7529], [0.7569, 0.7569, 0.7569], [0.7608, 0.7608, 0.7608], [0.7647, 0.7647, 0.7647], [0.7686, 0.7686, 0.7686], [0.7725, 0.7725, 0.7725], [0.7765, 0.7765, 0.7765], [0.7804, 0.7804, 0.7804], [0.7843, 0.7843, 0.7843], [0.7882, 0.7882, 0.7882], [0.7922, 0.7922, 0.7922], [0.7961, 0.7961, 0.7961], [0.8, 0.8, 0.8], [0.8039, 0.8039, 0.8039], [0.8078, 0.8078, 0.8078], [0.8118, 0.8118, 0.8118], [0.8157, 0.8157, 0.8157], [0.8196, 0.8196, 0.8196], [0.8235, 0.8235, 0.8235], [0.8275, 0.8275, 0.8275], [0.8314, 0.8314, 0.8314], [0.8353, 0.8353, 0.8353], [0.8392, 0.8392, 0.8392], [0.8431, 0.8431, 0.8431], [0.8471, 0.8471, 0.8471], [0.851, 0.851, 0.851], [0.8549, 0.8549, 0.8549], [0.8588, 0.8588, 0.8588], [0.8627, 0.8627, 0.8627], [0.8667, 0.8667, 0.8667], [0.8706, 0.8706, 0.8706], [0.8745, 0.8745, 0.8745], [0.8784, 0.8784, 0.8784], [0.8824, 0.8824, 0.8824], [0.8863, 0.8863, 0.8863], [0.8902, 0.8902, 0.8902], [0.8941, 0.8941, 0.8941], [0.898, 0.898, 0.898], [0.902, 0.902, 0.902], [0.9059, 0.9059, 0.9059], [0.9098, 0.9098, 0.9098], [0.9137, 0.9137, 0.9137], [0.9176, 0.9176, 0.9176], [0.9216, 0.9216, 0.9216], [0.9255, 0.9255, 0.9255], [0.9294, 0.9294, 0.9294], [0.9333, 0.9333, 0.9333], [0.9373, 0.9373, 0.9373], [0.9412, 0.9412, 0.9412], [0.9451, 0.9451, 0.9451], [0.949, 0.949, 0.949], [0.9529, 0.9529, 0.9529], [0.9569, 0.9569, 0.9569], [0.9608, 0.9608, 0.9608], [0.9647, 0.9647, 0.9647], [0.9686, 0.9686, 0.9686], [0.9725, 0.9725, 0.9725], [0.9765, 0.9765, 0.9765], [0.9804, 0.9804, 0.9804], [0.9843, 0.9843, 0.9843], [0.9882, 0.9882, 0.9882], [0.9922, 0.9922, 0.9922], [0.9961, 0.9961, 0.9961], [1.0, 1.0, 1.0]] }, "hot": { "interpolate": true, "colors": [[0.0416, 0.0, 0.0], [0.0519, 0.0, 0.0], [0.0622, 0.0, 0.0], [0.0725, 0.0, 0.0], [0.0828, 0.0, 0.0], [0.0931, 0.0, 0.0], [0.1034, 0.0, 0.0], [0.1137, 0.0, 0.0], [0.124, 0.0, 0.0], [0.1343, 0.0, 0.0], [0.1445, 0.0, 0.0], [0.1548, 0.0, 0.0], [0.1651, 0.0, 0.0], [0.1754, 0.0, 0.0], [0.1857, 0.0, 0.0], [0.196, 0.0, 0.0], [0.2063, 0.0, 0.0], [0.2166, 0.0, 0.0], [0.2269, 0.0, 0.0], [0.2372, 0.0, 0.0], [0.2475, 0.0, 0.0], [0.2578, 0.0, 0.0], [0.2681, 0.0, 0.0], [0.2784, 0.0, 0.0], [0.2887, 0.0, 0.0], [0.299, 0.0, 0.0], [0.3093, 0.0, 0.0], [0.3196, 0.0, 0.0], [0.3299, 0.0, 0.0], [0.3402, 0.0, 0.0], [0.3504, 0.0, 0.0], [0.3607, 0.0, 0.0], [0.371, 0.0, 0.0], [0.3813, 0.0, 0.0], [0.3916, 0.0, 0.0], [0.4019, 0.0, 0.0], [0.4122, 0.0, 0.0], [0.4225, 0.0, 0.0], [0.4328, 0.0, 0.0], [0.4431, 0.0, 0.0], [0.4534, 0.0, 0.0], [0.4637, 0.0, 0.0], [0.474, 0.0, 0.0], [0.4843, 0.0, 0.0], [0.4946, 0.0, 0.0], [0.5049, 0.0, 0.0], [0.5152, 0.0, 0.0], [0.5255, 0.0, 0.0], [0.5358, 0.0, 0.0], [0.546, 0.0, 0.0], [0.5563, 0.0, 0.0], [0.5666, 0.0, 0.0], [0.5769, 0.0, 0.0], [0.5872, 0.0, 0.0], [0.5975, 0.0, 0.0], [0.6078, 0.0, 0.0], [0.6181, 0.0, 0.0], [0.6284, 0.0, 0.0], [0.6387, 0.0, 0.0], [0.649, 0.0, 0.0], [0.6593, 0.0, 0.0], [0.6696, 0.0, 0.0], [0.6799, 0.0, 0.0], [0.6902, 0.0, 0.0], [0.7005, 0.0, 0.0], [0.7108, 0.0, 0.0], [0.7211, 0.0, 0.0], [0.7314, 0.0, 0.0], [0.7416, 0.0, 0.0], [0.7519, 0.0, 0.0], [0.7622, 0.0, 0.0], [0.7725, 0.0, 0.0], [0.7828, 0.0, 0.0], [0.7931, 0.0, 0.0], [0.8034, 0.0, 0.0], [0.8137, 0.0, 0.0], [0.824, 0.0, 0.0], [0.8343, 0.0, 0.0], [0.8446, 0.0, 0.0], [0.8549, 0.0, 0.0], [0.8652, 0.0, 0.0], [0.8755, 0.0, 0.0], [0.8858, 0.0, 0.0], [0.8961, 0.0, 0.0], [0.9064, 0.0, 0.0], [0.9167, 0.0, 0.0], [0.927, 0.0, 0.0], [0.9373, 0.0, 0.0], [0.9475, 0.0, 0.0], [0.9578, 0.0, 0.0], [0.9681, 0.0, 0.0], [0.9784, 0.0, 0.0], [0.9887, 0.0, 0.0], [0.999, 0.0, 0.0], [1.0, 0.0093, 0.0], [1.0, 0.0196, 0.0], [1.0, 0.0299, 0.0], [1.0, 0.0402, 0.0], [1.0, 0.0505, 0.0], [1.0, 0.0608, 0.0], [1.0, 0.0711, 0.0], [1.0, 0.0814, 0.0], [1.0, 0.0917, 0.0], [1.0, 0.102, 0.0], [1.0, 0.1123, 0.0], [1.0, 0.1225, 0.0], [1.0, 0.1328, 0.0], [1.0, 0.1431, 0.0], [1.0, 0.1534, 0.0], [1.0, 0.1637, 0.0], [1.0, 0.174, 0.0], [1.0, 0.1843, 0.0], [1.0, 0.1946, 0.0], [1.0, 0.2049, 0.0], [1.0, 0.2152, 0.0], [1.0, 0.2255, 0.0], [1.0, 0.2358, 0.0], [1.0, 0.2461, 0.0], [1.0, 0.2564, 0.0], [1.0, 0.2667, 0.0], [1.0, 0.277, 0.0], [1.0, 0.2873, 0.0], [1.0, 0.2975, 0.0], [1.0, 0.3078, 0.0], [1.0, 0.3181, 0.0], [1.0, 0.3284, 0.0], [1.0, 0.3387, 0.0], [1.0, 0.349, 0.0], [1.0, 0.3593, 0.0], [1.0, 0.3696, 0.0], [1.0, 0.3799, 0.0], [1.0, 0.3902, 0.0], [1.0, 0.4005, 0.0], [1.0, 0.4108, 0.0], [1.0, 0.4211, 0.0], [1.0, 0.4314, 0.0], [1.0, 0.4417, 0.0], [1.0, 0.452, 0.0], [1.0, 0.4623, 0.0], [1.0, 0.4725, 0.0], [1.0, 0.4828, 0.0], [1.0, 0.4931, 0.0], [1.0, 0.5034, 0.0], [1.0, 0.5137, 0.0], [1.0, 0.524, 0.0], [1.0, 0.5343, 0.0], [1.0, 0.5446, 0.0], [1.0, 0.5549, 0.0], [1.0, 0.5652, 0.0], [1.0, 0.5755, 0.0], [1.0, 0.5858, 0.0], [1.0, 0.5961, 0.0], [1.0, 0.6064, 0.0], [1.0, 0.6167, 0.0], [1.0, 0.627, 0.0], [1.0, 0.6373, 0.0], [1.0, 0.6475, 0.0], [1.0, 0.6578, 0.0], [1.0, 0.6681, 0.0], [1.0, 0.6784, 0.0], [1.0, 0.6887, 0.0], [1.0, 0.699, 0.0], [1.0, 0.7093, 0.0], [1.0, 0.7196, 0.0], [1.0, 0.7299, 0.0], [1.0, 0.7402, 0.0], [1.0, 0.7505, 0.0], [1.0, 0.7608, 0.0], [1.0, 0.7711, 0.0], [1.0, 0.7814, 0.0], [1.0, 0.7917, 0.0], [1.0, 0.802, 0.0], [1.0, 0.8123, 0.0], [1.0, 0.8225, 0.0], [1.0, 0.8328, 0.0], [1.0, 0.8431, 0.0], [1.0, 0.8534, 0.0], [1.0, 0.8637, 0.0], [1.0, 0.874, 0.0], [1.0, 0.8843, 0.0], [1.0, 0.8946, 0.0], [1.0, 0.9049, 0.0], [1.0, 0.9152, 0.0], [1.0, 0.9255, 0.0], [1.0, 0.9358, 0.0], [1.0, 0.9461, 0.0], [1.0, 0.9564, 0.0], [1.0, 0.9667, 0.0], [1.0, 0.977, 0.0], [1.0, 0.9873, 0.0], [1.0, 0.9975, 0.0], [1.0, 1.0, 0.0118], [1.0, 1.0, 0.0272], [1.0, 1.0, 0.0426], [1.0, 1.0, 0.0581], [1.0, 1.0, 0.0735], [1.0, 1.0, 0.089], [1.0, 1.0, 0.1044], [1.0, 1.0, 0.1199], [1.0, 1.0, 0.1353], [1.0, 1.0, 0.1507], [1.0, 1.0, 0.1662], [1.0, 1.0, 0.1816], [1.0, 1.0, 0.1971], [1.0, 1.0, 0.2125], [1.0, 1.0, 0.2279], [1.0, 1.0, 0.2434], [1.0, 1.0, 0.2588], [1.0, 1.0, 0.2743], [1.0, 1.0, 0.2897], [1.0, 1.0, 0.3051], [1.0, 1.0, 0.3206], [1.0, 1.0, 0.336], [1.0, 1.0, 0.3515], [1.0, 1.0, 0.3669], [1.0, 1.0, 0.3824], [1.0, 1.0, 0.3978], [1.0, 1.0, 0.4132], [1.0, 1.0, 0.4287], [1.0, 1.0, 0.4441], [1.0, 1.0, 0.4596], [1.0, 1.0, 0.475], [1.0, 1.0, 0.4904], [1.0, 1.0, 0.5059], [1.0, 1.0, 0.5213], [1.0, 1.0, 0.5368], [1.0, 1.0, 0.5522], [1.0, 1.0, 0.5676], [1.0, 1.0, 0.5831], [1.0, 1.0, 0.5985], [1.0, 1.0, 0.614], [1.0, 1.0, 0.6294], [1.0, 1.0, 0.6449], [1.0, 1.0, 0.6603], [1.0, 1.0, 0.6757], [1.0, 1.0, 0.6912], [1.0, 1.0, 0.7066], [1.0, 1.0, 0.7221], [1.0, 1.0, 0.7375], [1.0, 1.0, 0.7529], [1.0, 1.0, 0.7684], [1.0, 1.0, 0.7838], [1.0, 1.0, 0.7993], [1.0, 1.0, 0.8147], [1.0, 1.0, 0.8301], [1.0, 1.0, 0.8456], [1.0, 1.0, 0.861], [1.0, 1.0, 0.8765], [1.0, 1.0, 0.8919], [1.0, 1.0, 0.9074], [1.0, 1.0, 0.9228], [1.0, 1.0, 0.9382], [1.0, 1.0, 0.9537], [1.0, 1.0, 0.9691], [1.0, 1.0, 0.9846], [1.0, 1.0, 1.0]] }, "hsv": { "interpolate": true, "colors": [[1.0, 0.0, 0.0], [1.0, 0.0232, 0.0], [1.0, 0.0463, 0.0], [1.0, 0.0695, 0.0], [1.0, 0.0926, 0.0], [1.0, 0.1158, 0.0], [1.0, 0.139, 0.0], [1.0, 0.1621, 0.0], [1.0, 0.1853, 0.0], [1.0, 0.2085, 0.0], [1.0, 0.2316, 0.0], [1.0, 0.2548, 0.0], [1.0, 0.2779, 0.0], [1.0, 0.3011, 0.0], [1.0, 0.3243, 0.0], [1.0, 0.3474, 0.0], [1.0, 0.3706, 0.0], [1.0, 0.3938, 0.0], [1.0, 0.4169, 0.0], [1.0, 0.4401, 0.0], [1.0, 0.4632, 0.0], [1.0, 0.4864, 0.0], [1.0, 0.5096, 0.0], [1.0, 0.5327, 0.0], [1.0, 0.5559, 0.0], [1.0, 0.579, 0.0], [1.0, 0.6022, 0.0], [1.0, 0.6254, 0.0], [1.0, 0.6485, 0.0], [1.0, 0.6717, 0.0], [1.0, 0.6949, 0.0], [1.0, 0.718, 0.0], [1.0, 0.7412, 0.0], [1.0, 0.7643, 0.0], [1.0, 0.7875, 0.0], [1.0, 0.8107, 0.0], [1.0, 0.8338, 0.0], [1.0, 0.857, 0.0], [1.0, 0.8801, 0.0], [1.0, 0.9033, 0.0], [1.0, 0.9265, 0.0], [0.996, 0.9456, 0.0], [0.9882, 0.961, 0.0], [0.9805, 0.9765, 0.0], [0.9728, 0.9919, 0.0], [0.9577, 1.0, 0.0], [0.9346, 1.0, 0.0], [0.9114, 1.0, 0.0], [0.8882, 1.0, 0.0], [0.8651, 1.0, 0.0], [0.8419, 1.0, 0.0], [0.8187, 1.0, 0.0], [0.7956, 1.0, 0.0], [0.7724, 1.0, 0.0], [0.7493, 1.0, 0.0], [0.7261, 1.0, 0.0], [0.7029, 1.0, 0.0], [0.6798, 1.0, 0.0], [0.6566, 1.0, 0.0], [0.6335, 1.0, 0.0], [0.6103, 1.0, 0.0], [0.5871, 1.0, 0.0], [0.564, 1.0, 0.0], [0.5408, 1.0, 0.0], [0.5176, 1.0, 0.0], [0.4945, 1.0, 0.0], [0.4713, 1.0, 0.0], [0.4482, 1.0, 0.0], [0.425, 1.0, 0.0], [0.4018, 1.0, 0.0], [0.3787, 1.0, 0.0], [0.3555, 1.0, 0.0], [0.3324, 1.0, 0.0], [0.3092, 1.0, 0.0], [0.286, 1.0, 0.0], [0.2629, 1.0, 0.0], [0.2397, 1.0, 0.0], [0.2165, 1.0, 0.0], [0.1934, 1.0, 0.0], [0.1702, 1.0, 0.0], [0.1471, 1.0, 0.0], [0.1239, 1.0, 0.0], [0.1007, 1.0, 0.0], [0.0776, 1.0, 0.0], [0.0544, 1.0, 0.0], [0.0312, 1.0, 0.0], [0.0235, 1.0, 0.0154], [0.0158, 1.0, 0.0309], [0.0081, 1.0, 0.0463], [0.0004, 1.0, 0.0618], [0.0, 1.0, 0.0846], [0.0, 1.0, 0.1077], [0.0, 1.0, 0.1309], [0.0, 1.0, 0.154], [0.0, 1.0, 0.1772], [0.0, 1.0, 0.2004], [0.0, 1.0, 0.2235], [0.0, 1.0, 0.2467], [0.0, 1.0, 0.2699], [0.0, 1.0, 0.293], [0.0, 1.0, 0.3162], [0.0, 1.0, 0.3393], [0.0, 1.0, 0.3625], [0.0, 1.0, 0.3857], [0.0, 1.0, 0.4088], [0.0, 1.0, 0.432], [0.0, 1.0, 0.4551], [0.0, 1.0, 0.4783], [0.0, 1.0, 0.5015], [0.0, 1.0, 0.5246], [0.0, 1.0, 0.5478], [0.0, 1.0, 0.571], [0.0, 1.0, 0.5941], [0.0, 1.0, 0.6173], [0.0, 1.0, 0.6404], [0.0, 1.0, 0.6636], [0.0, 1.0, 0.6868], [0.0, 1.0, 0.7099], [0.0, 1.0, 0.7331], [0.0, 1.0, 0.7562], [0.0, 1.0, 0.7794], [0.0, 1.0, 0.8026], [0.0, 1.0, 0.8257], [0.0, 1.0, 0.8489], [0.0, 1.0, 0.8721], [0.0, 1.0, 0.8952], [0.0, 1.0, 0.9184], [0.0, 1.0, 0.9415], [0.0, 1.0, 0.9647], [0.0, 1.0, 0.9879], [0.0, 0.989, 1.0], [0.0, 0.9658, 1.0], [0.0, 0.9426, 1.0], [0.0, 0.9195, 1.0], [0.0, 0.8963, 1.0], [0.0, 0.8732, 1.0], [0.0, 0.85, 1.0], [0.0, 0.8268, 1.0], [0.0, 0.8037, 1.0], [0.0, 0.7805, 1.0], [0.0, 0.7574, 1.0], [0.0, 0.7342, 1.0], [0.0, 0.711, 1.0], [0.0, 0.6879, 1.0], [0.0, 0.6647, 1.0], [0.0, 0.6415, 1.0], [0.0, 0.6184, 1.0], [0.0, 0.5952, 1.0], [0.0, 0.5721, 1.0], [0.0, 0.5489, 1.0], [0.0, 0.5257, 1.0], [0.0, 0.5026, 1.0], [0.0, 0.4794, 1.0], [0.0, 0.4563, 1.0], [0.0, 0.4331, 1.0], [0.0, 0.4099, 1.0], [0.0, 0.3868, 1.0], [0.0, 0.3636, 1.0], [0.0, 0.3404, 1.0], [0.0, 0.3173, 1.0], [0.0, 0.2941, 1.0], [0.0, 0.271, 1.0], [0.0, 0.2478, 1.0], [0.0, 0.2246, 1.0], [0.0, 0.2015, 1.0], [0.0, 0.1783, 1.0], [0.0, 0.1551, 1.0], [0.0, 0.132, 1.0], [0.0, 0.1088, 1.0], [0.0, 0.0857, 1.0], [0.0, 0.0625, 1.0], [0.0077, 0.0471, 1.0], [0.0154, 0.0316, 1.0], [0.0232, 0.0162, 1.0], [0.0309, 0.0007, 1.0], [0.0533, 0.0, 1.0], [0.0765, 0.0, 1.0], [0.0996, 0.0, 1.0], [0.1228, 0.0, 1.0], [0.146, 0.0, 1.0], [0.1691, 0.0, 1.0], [0.1923, 0.0, 1.0], [0.2154, 0.0, 1.0], [0.2386, 0.0, 1.0], [0.2618, 0.0, 1.0], [0.2849, 0.0, 1.0], [0.3081, 0.0, 1.0], [0.3312, 0.0, 1.0], [0.3544, 0.0, 1.0], [0.3776, 0.0, 1.0], [0.4007, 0.0, 1.0], [0.4239, 0.0, 1.0], [0.4471, 0.0, 1.0], [0.4702, 0.0, 1.0], [0.4934, 0.0, 1.0], [0.5165, 0.0, 1.0], [0.5397, 0.0, 1.0], [0.5629, 0.0, 1.0], [0.586, 0.0, 1.0], [0.6092, 0.0, 1.0], [0.6324, 0.0, 1.0], [0.6555, 0.0, 1.0], [0.6787, 0.0, 1.0], [0.7018, 0.0, 1.0], [0.725, 0.0, 1.0], [0.7482, 0.0, 1.0], [0.7713, 0.0, 1.0], [0.7945, 0.0, 1.0], [0.8176, 0.0, 1.0], [0.8408, 0.0, 1.0], [0.864, 0.0, 1.0], [0.8871, 0.0, 1.0], [0.9103, 0.0, 1.0], [0.9335, 0.0, 1.0], [0.9566, 0.0, 1.0], [0.9724, 0.0, 0.9926], [0.9801, 0.0, 0.9772], [0.9879, 0.0, 0.9618], [0.9956, 0.0, 0.9463], [1.0, 0.0, 0.9276], [1.0, 0.0, 0.9044], [1.0, 0.0, 0.8813], [1.0, 0.0, 0.8581], [1.0, 0.0, 0.8349], [1.0, 0.0, 0.8118], [1.0, 0.0, 0.7886], [1.0, 0.0, 0.7654], [1.0, 0.0, 0.7423], [1.0, 0.0, 0.7191], [1.0, 0.0, 0.696], [1.0, 0.0, 0.6728], [1.0, 0.0, 0.6496], [1.0, 0.0, 0.6265], [1.0, 0.0, 0.6033], [1.0, 0.0, 0.5801], [1.0, 0.0, 0.557], [1.0, 0.0, 0.5338], [1.0, 0.0, 0.5107], [1.0, 0.0, 0.4875], [1.0, 0.0, 0.4643], [1.0, 0.0, 0.4412], [1.0, 0.0, 0.418], [1.0, 0.0, 0.3949], [1.0, 0.0, 0.3717], [1.0, 0.0, 0.3485], [1.0, 0.0, 0.3254], [1.0, 0.0, 0.3022], [1.0, 0.0, 0.279], [1.0, 0.0, 0.2559], [1.0, 0.0, 0.2327], [1.0, 0.0, 0.2096], [1.0, 0.0, 0.1864], [1.0, 0.0, 0.1632], [1.0, 0.0, 0.1401], [1.0, 0.0, 0.1169], [1.0, 0.0, 0.0938]] }, "inferno": { "interpolate": true, "colors": [[0.0015, 0.0005, 0.0139], [0.0023, 0.0013, 0.0186], [0.0033, 0.0022, 0.0242], [0.0045, 0.0034, 0.0309], [0.006, 0.0047, 0.0386], [0.0077, 0.0061, 0.0468], [0.0096, 0.0077, 0.0551], [0.0117, 0.0094, 0.0635], [0.014, 0.0112, 0.0719], [0.0166, 0.0131, 0.0803], [0.0194, 0.0151, 0.0888], [0.0224, 0.0172, 0.0973], [0.0258, 0.0193, 0.1059], [0.0294, 0.0215, 0.1146], [0.0334, 0.0237, 0.1234], [0.0377, 0.0259, 0.1322], [0.0423, 0.0281, 0.1411], [0.0469, 0.0303, 0.1502], [0.0516, 0.0325, 0.1593], [0.0564, 0.0346, 0.1684], [0.0613, 0.0366, 0.1776], [0.0663, 0.0385, 0.187], [0.0714, 0.0403, 0.1964], [0.0766, 0.0419, 0.2058], [0.082, 0.0433, 0.2153], [0.0874, 0.0446, 0.2248], [0.093, 0.0456, 0.2344], [0.0987, 0.0464, 0.2439], [0.1046, 0.047, 0.2534], [0.1105, 0.0474, 0.2629], [0.1167, 0.0476, 0.2723], [0.1229, 0.0475, 0.2816], [0.1293, 0.0473, 0.2908], [0.1358, 0.0469, 0.2998], [0.1424, 0.0462, 0.3086], [0.1491, 0.0455, 0.3171], [0.1558, 0.0446, 0.3253], [0.1627, 0.0436, 0.3333], [0.1696, 0.0425, 0.3409], [0.1765, 0.0414, 0.3481], [0.1834, 0.0403, 0.355], [0.1904, 0.0393, 0.3614], [0.1973, 0.0384, 0.3675], [0.2042, 0.0376, 0.3732], [0.2111, 0.037, 0.3786], [0.2179, 0.0366, 0.3835], [0.2248, 0.0364, 0.3881], [0.2315, 0.0364, 0.3924], [0.2383, 0.0366, 0.3964], [0.245, 0.0371, 0.4], [0.2516, 0.0377, 0.4034], [0.2582, 0.0386, 0.4065], [0.2648, 0.0396, 0.4093], [0.2713, 0.0409, 0.412], [0.2778, 0.0424, 0.4144], [0.2843, 0.0439, 0.4166], [0.2908, 0.0456, 0.4186], [0.2972, 0.0475, 0.4205], [0.3036, 0.0494, 0.4222], [0.3099, 0.0514, 0.4237], [0.3163, 0.0535, 0.4251], [0.3226, 0.0556, 0.4264], [0.3289, 0.0578, 0.4275], [0.3352, 0.0601, 0.4285], [0.3415, 0.0623, 0.4294], [0.3478, 0.0646, 0.4302], [0.354, 0.0669, 0.4309], [0.3603, 0.0692, 0.4315], [0.3665, 0.0716, 0.432], [0.3728, 0.0739, 0.4324], [0.379, 0.0763, 0.4327], [0.3852, 0.0786, 0.433], [0.3915, 0.0809, 0.4331], [0.3977, 0.0833, 0.4332], [0.4039, 0.0856, 0.4332], [0.4101, 0.0879, 0.4331], [0.4163, 0.0902, 0.4329], [0.4225, 0.0925, 0.4327], [0.4288, 0.0948, 0.4324], [0.435, 0.0971, 0.432], [0.4412, 0.0993, 0.4316], [0.4474, 0.1016, 0.4311], [0.4537, 0.1038, 0.4305], [0.4599, 0.1061, 0.4298], [0.4661, 0.1083, 0.4291], [0.4723, 0.1105, 0.4283], [0.4786, 0.1128, 0.4275], [0.4848, 0.115, 0.4265], [0.491, 0.1172, 0.4256], [0.4973, 0.1194, 0.4245], [0.5035, 0.1216, 0.4234], [0.5097, 0.1238, 0.4222], [0.516, 0.126, 0.4209], [0.5222, 0.1281, 0.4195], [0.5284, 0.1303, 0.4181], [0.5347, 0.1325, 0.4167], [0.5409, 0.1347, 0.4151], [0.5472, 0.1369, 0.4135], [0.5534, 0.1391, 0.4118], [0.5596, 0.1413, 0.4101], [0.5659, 0.1436, 0.4083], [0.5721, 0.1458, 0.4064], [0.5783, 0.148, 0.4044], [0.5845, 0.1503, 0.4024], [0.5907, 0.1526, 0.4003], [0.5969, 0.1548, 0.3981], [0.6031, 0.1572, 0.3959], [0.6093, 0.1595, 0.3936], [0.6155, 0.1618, 0.3912], [0.6217, 0.1642, 0.3888], [0.6278, 0.1666, 0.3863], [0.634, 0.169, 0.3837], [0.6401, 0.1714, 0.3811], [0.6463, 0.1739, 0.3784], [0.6524, 0.1764, 0.3756], [0.6585, 0.179, 0.3727], [0.6645, 0.1815, 0.3698], [0.6706, 0.1842, 0.3669], [0.6766, 0.1868, 0.3638], [0.6827, 0.1895, 0.3608], [0.6887, 0.1922, 0.3576], [0.6946, 0.195, 0.3544], [0.7006, 0.1979, 0.3511], [0.7065, 0.2007, 0.3478], [0.7124, 0.2037, 0.3444], [0.7183, 0.2066, 0.3409], [0.7241, 0.2097, 0.3374], [0.7299, 0.2128, 0.3339], [0.7357, 0.2159, 0.3302], [0.7414, 0.2191, 0.3266], [0.7471, 0.2224, 0.3229], [0.7528, 0.2257, 0.3191], [0.7584, 0.2291, 0.3153], [0.764, 0.2326, 0.3114], [0.7696, 0.2361, 0.3075], [0.7751, 0.2397, 0.3035], [0.7805, 0.2433, 0.2995], [0.7859, 0.2471, 0.2955], [0.7913, 0.2509, 0.2914], [0.7966, 0.2547, 0.2873], [0.8019, 0.2587, 0.2831], [0.8071, 0.2627, 0.2789], [0.8122, 0.2668, 0.2747], [0.8173, 0.271, 0.2704], [0.8224, 0.2752, 0.2661], [0.8274, 0.2795, 0.2618], [0.8323, 0.2839, 0.2574], [0.8372, 0.2884, 0.253], [0.842, 0.2929, 0.2486], [0.8467, 0.2976, 0.2441], [0.8514, 0.3023, 0.2396], [0.856, 0.307, 0.2351], [0.8605, 0.3119, 0.2306], [0.865, 0.3168, 0.2261], [0.8694, 0.3218, 0.2215], [0.8737, 0.3269, 0.2169], [0.878, 0.3321, 0.2123], [0.8822, 0.3373, 0.2076], [0.8863, 0.3426, 0.203], [0.8903, 0.348, 0.1983], [0.8943, 0.3534, 0.1936], [0.8982, 0.3589, 0.1889], [0.902, 0.3645, 0.1841], [0.9057, 0.3701, 0.1794], [0.9094, 0.3759, 0.1746], [0.913, 0.3816, 0.1698], [0.9165, 0.3875, 0.1649], [0.9199, 0.3934, 0.1601], [0.9232, 0.3994, 0.1552], [0.9265, 0.4054, 0.1503], [0.9296, 0.4115, 0.1454], [0.9327, 0.4176, 0.1404], [0.9357, 0.4238, 0.1354], [0.9387, 0.4301, 0.1304], [0.9415, 0.4364, 0.1254], [0.9443, 0.4428, 0.1204], [0.947, 0.4492, 0.1153], [0.9496, 0.4557, 0.1102], [0.9521, 0.4622, 0.105], [0.9545, 0.4687, 0.0999], [0.9569, 0.4754, 0.0947], [0.9591, 0.482, 0.0895], [0.9613, 0.4887, 0.0843], [0.9634, 0.4955, 0.0791], [0.9654, 0.5022, 0.0739], [0.9673, 0.5091, 0.0687], [0.9692, 0.5159, 0.0635], [0.9709, 0.5229, 0.0584], [0.9726, 0.5298, 0.0533], [0.9742, 0.5368, 0.0484], [0.9757, 0.5438, 0.0436], [0.9771, 0.5508, 0.039], [0.9784, 0.5579, 0.0349], [0.9797, 0.5651, 0.0314], [0.9808, 0.5722, 0.0285], [0.9819, 0.5794, 0.0262], [0.9829, 0.5866, 0.0247], [0.9838, 0.5938, 0.0238], [0.9846, 0.6011, 0.0236], [0.9853, 0.6084, 0.0242], [0.986, 0.6158, 0.0256], [0.9865, 0.6231, 0.0278], [0.987, 0.6305, 0.0309], [0.9873, 0.6379, 0.0349], [0.9876, 0.6453, 0.0399], [0.9878, 0.6528, 0.0456], [0.9879, 0.6602, 0.0518], [0.9879, 0.6677, 0.0583], [0.9879, 0.6753, 0.0653], [0.9877, 0.6828, 0.0725], [0.9875, 0.6904, 0.08], [0.9871, 0.6979, 0.0877], [0.9867, 0.7055, 0.0957], [0.9862, 0.7132, 0.1039], [0.9856, 0.7208, 0.1122], [0.9849, 0.7284, 0.1208], [0.9841, 0.7361, 0.1295], [0.9832, 0.7438, 0.1385], [0.9822, 0.7514, 0.1476], [0.9812, 0.7591, 0.1569], [0.98, 0.7668, 0.1664], [0.9788, 0.7745, 0.176], [0.9775, 0.7823, 0.1859], [0.9761, 0.79, 0.196], [0.9746, 0.7977, 0.2063], [0.9731, 0.8054, 0.2169], [0.9715, 0.8131, 0.2277], [0.9698, 0.8208, 0.2387], [0.968, 0.8285, 0.25], [0.9662, 0.8362, 0.2615], [0.9644, 0.8438, 0.2734], [0.9625, 0.8515, 0.2855], [0.9606, 0.8591, 0.298], [0.9587, 0.8666, 0.3108], [0.9568, 0.8741, 0.324], [0.955, 0.8816, 0.3375], [0.9532, 0.8889, 0.3514], [0.9515, 0.8962, 0.3656], [0.95, 0.9034, 0.3803], [0.9487, 0.9105, 0.3953], [0.9476, 0.9174, 0.4107], [0.9468, 0.9242, 0.4264], [0.9464, 0.9308, 0.4424], [0.9464, 0.9372, 0.4586], [0.9469, 0.9433, 0.475], [0.9479, 0.9493, 0.4914], [0.9495, 0.9551, 0.5079], [0.9517, 0.9606, 0.5242], [0.9545, 0.9659, 0.5404], [0.9579, 0.971, 0.5563], [0.9618, 0.9759, 0.5719], [0.9662, 0.9807, 0.5872], [0.9712, 0.9853, 0.6022], [0.9765, 0.9898, 0.6168], [0.9823, 0.9941, 0.631], [0.9884, 0.9984, 0.6449]] }, "jet": { "interpolate": true, "colors": [[0.0, 0.0, 0.5], [0.0, 0.0, 0.5178], [0.0, 0.0, 0.5357], [0.0, 0.0, 0.5535], [0.0, 0.0, 0.5713], [0.0, 0.0, 0.5891], [0.0, 0.0, 0.607], [0.0, 0.0, 0.6248], [0.0, 0.0, 0.6426], [0.0, 0.0, 0.6604], [0.0, 0.0, 0.6783], [0.0, 0.0, 0.6961], [0.0, 0.0, 0.7139], [0.0, 0.0, 0.7317], [0.0, 0.0, 0.7496], [0.0, 0.0, 0.7674], [0.0, 0.0, 0.7852], [0.0, 0.0, 0.803], [0.0, 0.0, 0.8209], [0.0, 0.0, 0.8387], [0.0, 0.0, 0.8565], [0.0, 0.0, 0.8743], [0.0, 0.0, 0.8922], [0.0, 0.0, 0.91], [0.0, 0.0, 0.9278], [0.0, 0.0, 0.9456], [0.0, 0.0, 0.9635], [0.0, 0.0, 0.9813], [0.0, 0.0, 0.9991], [0.0, 0.0, 1.0], [0.0, 0.0, 1.0], [0.0, 0.0, 1.0], [0.0, 0.002, 1.0], [0.0, 0.0176, 1.0], [0.0, 0.0333, 1.0], [0.0, 0.049, 1.0], [0.0, 0.0647, 1.0], [0.0, 0.0804, 1.0], [0.0, 0.0961, 1.0], [0.0, 0.1118, 1.0], [0.0, 0.1275, 1.0], [0.0, 0.1431, 1.0], [0.0, 0.1588, 1.0], [0.0, 0.1745, 1.0], [0.0, 0.1902, 1.0], [0.0, 0.2059, 1.0], [0.0, 0.2216, 1.0], [0.0, 0.2373, 1.0], [0.0, 0.2529, 1.0], [0.0, 0.2686, 1.0], [0.0, 0.2843, 1.0], [0.0, 0.3, 1.0], [0.0, 0.3157, 1.0], [0.0, 0.3314, 1.0], [0.0, 0.3471, 1.0], [0.0, 0.3627, 1.0], [0.0, 0.3784, 1.0], [0.0, 0.3941, 1.0], [0.0, 0.4098, 1.0], [0.0, 0.4255, 1.0], [0.0, 0.4412, 1.0], [0.0, 0.4569, 1.0], [0.0, 0.4725, 1.0], [0.0, 0.4882, 1.0], [0.0, 0.5039, 1.0], [0.0, 0.5196, 1.0], [0.0, 0.5353, 1.0], [0.0, 0.551, 1.0], [0.0, 0.5667, 1.0], [0.0, 0.5824, 1.0], [0.0, 0.598, 1.0], [0.0, 0.6137, 1.0], [0.0, 0.6294, 1.0], [0.0, 0.6451, 1.0], [0.0, 0.6608, 1.0], [0.0, 0.6765, 1.0], [0.0, 0.6922, 1.0], [0.0, 0.7078, 1.0], [0.0, 0.7235, 1.0], [0.0, 0.7392, 1.0], [0.0, 0.7549, 1.0], [0.0, 0.7706, 1.0], [0.0, 0.7863, 1.0], [0.0, 0.802, 1.0], [0.0, 0.8176, 1.0], [0.0, 0.8333, 1.0], [0.0, 0.849, 1.0], [0.0, 0.8647, 0.9962], [0.0, 0.8804, 0.9836], [0.0, 0.8961, 0.9709], [0.0095, 0.9118, 0.9583], [0.0221, 0.9275, 0.9456], [0.0348, 0.9431, 0.933], [0.0474, 0.9588, 0.9203], [0.0601, 0.9745, 0.9077], [0.0727, 0.9902, 0.895], [0.0854, 1.0, 0.8824], [0.098, 1.0, 0.8697], [0.1107, 1.0, 0.8571], [0.1233, 1.0, 0.8444], [0.136, 1.0, 0.8318], [0.1486, 1.0, 0.8191], [0.1613, 1.0, 0.8065], [0.1739, 1.0, 0.7938], [0.1866, 1.0, 0.7812], [0.1992, 1.0, 0.7685], [0.2119, 1.0, 0.7559], [0.2245, 1.0, 0.7432], [0.2372, 1.0, 0.7306], [0.2498, 1.0, 0.7179], [0.2625, 1.0, 0.7052], [0.2751, 1.0, 0.6926], [0.2878, 1.0, 0.6799], [0.3004, 1.0, 0.6673], [0.3131, 1.0, 0.6546], [0.3257, 1.0, 0.642], [0.3384, 1.0, 0.6293], [0.351, 1.0, 0.6167], [0.3637, 1.0, 0.604], [0.3763, 1.0, 0.5914], [0.389, 1.0, 0.5787], [0.4016, 1.0, 0.5661], [0.4143, 1.0, 0.5534], [0.4269, 1.0, 0.5408], [0.4396, 1.0, 0.5281], [0.4522, 1.0, 0.5155], [0.4649, 1.0, 0.5028], [0.4775, 1.0, 0.4902], [0.4902, 1.0, 0.4775], [0.5028, 1.0, 0.4649], [0.5155, 1.0, 0.4522], [0.5281, 1.0, 0.4396], [0.5408, 1.0, 0.4269], [0.5534, 1.0, 0.4143], [0.5661, 1.0, 0.4016], [0.5787, 1.0, 0.389], [0.5914, 1.0, 0.3763], [0.604, 1.0, 0.3637], [0.6167, 1.0, 0.351], [0.6293, 1.0, 0.3384], [0.642, 1.0, 0.3257], [0.6546, 1.0, 0.3131], [0.6673, 1.0, 0.3004], [0.6799, 1.0, 0.2878], [0.6926, 1.0, 0.2751], [0.7052, 1.0, 0.2625], [0.7179, 1.0, 0.2498], [0.7306, 1.0, 0.2372], [0.7432, 1.0, 0.2245], [0.7559, 1.0, 0.2119], [0.7685, 1.0, 0.1992], [0.7812, 1.0, 0.1866], [0.7938, 1.0, 0.1739], [0.8065, 1.0, 0.1613], [0.8191, 1.0, 0.1486], [0.8318, 1.0, 0.136], [0.8444, 1.0, 0.1233], [0.8571, 1.0, 0.1107], [0.8697, 1.0, 0.098], [0.8824, 1.0, 0.0854], [0.895, 1.0, 0.0727], [0.9077, 1.0, 0.0601], [0.9203, 1.0, 0.0474], [0.933, 1.0, 0.0348], [0.9456, 0.9884, 0.0221], [0.9583, 0.9739, 0.0095], [0.9709, 0.9593, 0.0], [0.9836, 0.9448, 0.0], [0.9962, 0.9303, 0.0], [1.0, 0.9158, 0.0], [1.0, 0.9012, 0.0], [1.0, 0.8867, 0.0], [1.0, 0.8722, 0.0], [1.0, 0.8577, 0.0], [1.0, 0.8431, 0.0], [1.0, 0.8286, 0.0], [1.0, 0.8141, 0.0], [1.0, 0.7996, 0.0], [1.0, 0.785, 0.0], [1.0, 0.7705, 0.0], [1.0, 0.756, 0.0], [1.0, 0.7415, 0.0], [1.0, 0.7269, 0.0], [1.0, 0.7124, 0.0], [1.0, 0.6979, 0.0], [1.0, 0.6834, 0.0], [1.0, 0.6688, 0.0], [1.0, 0.6543, 0.0], [1.0, 0.6398, 0.0], [1.0, 0.6253, 0.0], [1.0, 0.6107, 0.0], [1.0, 0.5962, 0.0], [1.0, 0.5817, 0.0], [1.0, 0.5672, 0.0], [1.0, 0.5527, 0.0], [1.0, 0.5381, 0.0], [1.0, 0.5236, 0.0], [1.0, 0.5091, 0.0], [1.0, 0.4946, 0.0], [1.0, 0.48, 0.0], [1.0, 0.4655, 0.0], [1.0, 0.451, 0.0], [1.0, 0.4365, 0.0], [1.0, 0.4219, 0.0], [1.0, 0.4074, 0.0], [1.0, 0.3929, 0.0], [1.0, 0.3784, 0.0], [1.0, 0.3638, 0.0], [1.0, 0.3493, 0.0], [1.0, 0.3348, 0.0], [1.0, 0.3203, 0.0], [1.0, 0.3057, 0.0], [1.0, 0.2912, 0.0], [1.0, 0.2767, 0.0], [1.0, 0.2622, 0.0], [1.0, 0.2476, 0.0], [1.0, 0.2331, 0.0], [1.0, 0.2186, 0.0], [1.0, 0.2041, 0.0], [1.0, 0.1895, 0.0], [1.0, 0.175, 0.0], [1.0, 0.1605, 0.0], [1.0, 0.146, 0.0], [1.0, 0.1314, 0.0], [1.0, 0.1169, 0.0], [1.0, 0.1024, 0.0], [1.0, 0.0879, 0.0], [0.9991, 0.0733, 0.0], [0.9813, 0.0588, 0.0], [0.9635, 0.0443, 0.0], [0.9456, 0.0298, 0.0], [0.9278, 0.0153, 0.0], [0.91, 0.0007, 0.0], [0.8922, 0.0, 0.0], [0.8743, 0.0, 0.0], [0.8565, 0.0, 0.0], [0.8387, 0.0, 0.0], [0.8209, 0.0, 0.0], [0.803, 0.0, 0.0], [0.7852, 0.0, 0.0], [0.7674, 0.0, 0.0], [0.7496, 0.0, 0.0], [0.7317, 0.0, 0.0], [0.7139, 0.0, 0.0], [0.6961, 0.0, 0.0], [0.6783, 0.0, 0.0], [0.6604, 0.0, 0.0], [0.6426, 0.0, 0.0], [0.6248, 0.0, 0.0], [0.607, 0.0, 0.0], [0.5891, 0.0, 0.0], [0.5713, 0.0, 0.0], [0.5535, 0.0, 0.0], [0.5357, 0.0, 0.0], [0.5178, 0.0, 0.0], [0.5, 0.0, 0.0]] }, "magma": { "interpolate": true, "colors": [[0.0015, 0.0005, 0.0139], [0.0023, 0.0013, 0.0183], [0.0033, 0.0023, 0.0237], [0.0045, 0.0035, 0.03], [0.006, 0.0048, 0.0371], [0.0076, 0.0064, 0.045], [0.0094, 0.008, 0.0528], [0.0115, 0.0098, 0.0608], [0.0137, 0.0118, 0.0687], [0.0162, 0.0138, 0.0766], [0.0188, 0.016, 0.0846], [0.0217, 0.0183, 0.0926], [0.0248, 0.0207, 0.1007], [0.0281, 0.0232, 0.1088], [0.0317, 0.0258, 0.117], [0.0355, 0.0284, 0.1252], [0.0396, 0.0311, 0.1335], [0.0438, 0.0338, 0.1419], [0.0481, 0.0366, 0.1503], [0.0523, 0.0394, 0.1588], [0.0566, 0.0422, 0.1674], [0.0609, 0.0448, 0.1761], [0.0653, 0.0473, 0.1849], [0.0698, 0.0497, 0.1937], [0.0743, 0.052, 0.2027], [0.0788, 0.0542, 0.2117], [0.0834, 0.0562, 0.2208], [0.0882, 0.0581, 0.2299], [0.0929, 0.0599, 0.2392], [0.0978, 0.0615, 0.2485], [0.1028, 0.063, 0.2579], [0.1079, 0.0643, 0.2673], [0.1131, 0.0655, 0.2768], [0.1184, 0.0665, 0.2863], [0.1238, 0.0673, 0.2959], [0.1294, 0.0679, 0.3054], [0.1351, 0.0684, 0.315], [0.1409, 0.0687, 0.3245], [0.1468, 0.0687, 0.334], [0.1528, 0.0686, 0.3434], [0.159, 0.0684, 0.3527], [0.1653, 0.0679, 0.3618], [0.1717, 0.0673, 0.3708], [0.1782, 0.0666, 0.3795], [0.1848, 0.0657, 0.388], [0.1915, 0.0648, 0.3962], [0.1982, 0.0639, 0.404], [0.2049, 0.0629, 0.4115], [0.2117, 0.062, 0.4186], [0.2185, 0.0612, 0.4254], [0.2253, 0.0604, 0.4317], [0.2321, 0.0599, 0.4377], [0.2388, 0.0595, 0.4433], [0.2455, 0.0594, 0.4484], [0.2522, 0.0594, 0.4532], [0.2589, 0.0597, 0.4577], [0.2654, 0.0602, 0.4618], [0.272, 0.061, 0.4657], [0.2785, 0.062, 0.4692], [0.285, 0.0632, 0.4725], [0.2914, 0.0646, 0.4755], [0.2977, 0.0661, 0.4782], [0.3041, 0.0678, 0.4808], [0.3104, 0.0697, 0.4832], [0.3167, 0.0717, 0.4854], [0.3229, 0.0738, 0.4874], [0.3291, 0.076, 0.4893], [0.3353, 0.0782, 0.491], [0.3415, 0.0806, 0.4926], [0.3476, 0.0829, 0.4941], [0.3538, 0.0854, 0.4955], [0.3599, 0.0878, 0.4968], [0.366, 0.0903, 0.498], [0.3721, 0.0928, 0.4991], [0.3782, 0.0953, 0.5001], [0.3843, 0.0979, 0.501], [0.3904, 0.1004, 0.5019], [0.3965, 0.1029, 0.5027], [0.4025, 0.1054, 0.5034], [0.4086, 0.1079, 0.5041], [0.4147, 0.1104, 0.5047], [0.4208, 0.1129, 0.5052], [0.4269, 0.1154, 0.5057], [0.433, 0.1179, 0.5062], [0.4391, 0.1203, 0.5066], [0.4452, 0.1227, 0.5069], [0.4513, 0.1251, 0.5072], [0.4574, 0.1275, 0.5074], [0.4635, 0.1299, 0.5077], [0.4696, 0.1322, 0.5078], [0.4758, 0.1346, 0.5079], [0.4819, 0.1369, 0.508], [0.4881, 0.1392, 0.508], [0.4943, 0.1415, 0.508], [0.5004, 0.1437, 0.5079], [0.5066, 0.146, 0.5078], [0.5128, 0.1482, 0.5076], [0.519, 0.1504, 0.5074], [0.5253, 0.1526, 0.5072], [0.5315, 0.1547, 0.5069], [0.5378, 0.1569, 0.5066], [0.544, 0.159, 0.5062], [0.5503, 0.1612, 0.5057], [0.5566, 0.1633, 0.5052], [0.5629, 0.1654, 0.5047], [0.5692, 0.1675, 0.5041], [0.5755, 0.1695, 0.5035], [0.5818, 0.1716, 0.5028], [0.5882, 0.1737, 0.502], [0.5945, 0.1757, 0.5012], [0.6009, 0.1777, 0.5004], [0.6072, 0.1798, 0.4995], [0.6136, 0.1818, 0.4985], [0.62, 0.1838, 0.4975], [0.6264, 0.1859, 0.4965], [0.6328, 0.1879, 0.4953], [0.6392, 0.1899, 0.4942], [0.6456, 0.192, 0.4929], [0.6521, 0.194, 0.4916], [0.6585, 0.196, 0.4903], [0.6649, 0.1981, 0.4888], [0.6713, 0.2001, 0.4874], [0.6778, 0.2022, 0.4858], [0.6842, 0.2043, 0.4842], [0.6907, 0.2064, 0.4826], [0.6971, 0.2085, 0.4808], [0.7035, 0.2106, 0.479], [0.71, 0.2128, 0.4772], [0.7164, 0.215, 0.4753], [0.7228, 0.2172, 0.4733], [0.7292, 0.2194, 0.4713], [0.7356, 0.2217, 0.4692], [0.742, 0.224, 0.467], [0.7484, 0.2264, 0.4648], [0.7547, 0.2288, 0.4625], [0.7611, 0.2312, 0.4602], [0.7674, 0.2337, 0.4578], [0.7737, 0.2362, 0.4553], [0.78, 0.2389, 0.4528], [0.7862, 0.2415, 0.4502], [0.7924, 0.2442, 0.4475], [0.7986, 0.247, 0.4448], [0.8048, 0.2499, 0.4421], [0.8109, 0.2529, 0.4393], [0.8169, 0.2559, 0.4365], [0.8229, 0.259, 0.4336], [0.8289, 0.2622, 0.4306], [0.8348, 0.2655, 0.4277], [0.8406, 0.269, 0.4247], [0.8464, 0.2725, 0.4216], [0.8521, 0.2761, 0.4186], [0.8578, 0.2799, 0.4155], [0.8633, 0.2837, 0.4124], [0.8688, 0.2877, 0.4093], [0.8742, 0.2919, 0.4062], [0.8795, 0.2961, 0.4031], [0.8847, 0.3005, 0.4], [0.8897, 0.3051, 0.397], [0.8947, 0.3098, 0.394], [0.8996, 0.3146, 0.391], [0.9043, 0.3196, 0.3881], [0.9089, 0.3248, 0.3853], [0.9134, 0.3301, 0.3826], [0.9177, 0.3355, 0.3799], [0.9219, 0.3411, 0.3774], [0.9259, 0.3468, 0.375], [0.9298, 0.3527, 0.3727], [0.9336, 0.3588, 0.3705], [0.9372, 0.3649, 0.3686], [0.9407, 0.3712, 0.3668], [0.944, 0.3776, 0.3651], [0.9472, 0.3842, 0.3637], [0.9502, 0.3908, 0.3625], [0.9531, 0.3976, 0.3614], [0.9558, 0.4044, 0.3606], [0.9585, 0.4113, 0.36], [0.9609, 0.4183, 0.3596], [0.9633, 0.4254, 0.3595], [0.9655, 0.4325, 0.3595], [0.9677, 0.4397, 0.3598], [0.9697, 0.4469, 0.3603], [0.9716, 0.4542, 0.361], [0.9734, 0.4615, 0.362], [0.9751, 0.4689, 0.3631], [0.9767, 0.4762, 0.3645], [0.9782, 0.4836, 0.366], [0.9796, 0.491, 0.3678], [0.981, 0.4984, 0.3697], [0.9823, 0.5059, 0.3719], [0.9835, 0.5133, 0.3742], [0.9846, 0.5207, 0.3767], [0.9857, 0.5281, 0.3794], [0.9867, 0.5356, 0.3822], [0.9876, 0.543, 0.3852], [0.9885, 0.5504, 0.3884], [0.9894, 0.5579, 0.3917], [0.9901, 0.5653, 0.3951], [0.9909, 0.5727, 0.3987], [0.9916, 0.5801, 0.4024], [0.9922, 0.5875, 0.4063], [0.9928, 0.5949, 0.4103], [0.9933, 0.6023, 0.4144], [0.9938, 0.6096, 0.4186], [0.9943, 0.617, 0.423], [0.9947, 0.6244, 0.4274], [0.9951, 0.6317, 0.432], [0.9955, 0.639, 0.4366], [0.9958, 0.6463, 0.4414], [0.9961, 0.6537, 0.4462], [0.9963, 0.661, 0.4512], [0.9966, 0.6683, 0.4562], [0.9968, 0.6755, 0.4613], [0.9969, 0.6828, 0.4665], [0.9971, 0.6901, 0.4718], [0.9972, 0.6973, 0.4772], [0.9973, 0.7046, 0.4826], [0.9973, 0.7118, 0.4882], [0.9974, 0.7191, 0.4938], [0.9974, 0.7263, 0.4994], [0.9973, 0.7335, 0.5052], [0.9973, 0.7408, 0.511], [0.9972, 0.748, 0.5169], [0.9971, 0.7552, 0.5228], [0.997, 0.7624, 0.5288], [0.9969, 0.7696, 0.5349], [0.9967, 0.7768, 0.541], [0.9966, 0.784, 0.5472], [0.9964, 0.7912, 0.5535], [0.9962, 0.7983, 0.5598], [0.9959, 0.8055, 0.5662], [0.9957, 0.8127, 0.5726], [0.9954, 0.8199, 0.5791], [0.9951, 0.8271, 0.5857], [0.9949, 0.8342, 0.5923], [0.9945, 0.8414, 0.599], [0.9942, 0.8485, 0.6057], [0.9939, 0.8557, 0.6125], [0.9935, 0.8629, 0.6193], [0.9932, 0.87, 0.6262], [0.9928, 0.8772, 0.6331], [0.9924, 0.8843, 0.6401], [0.9921, 0.8915, 0.6471], [0.9917, 0.8986, 0.6542], [0.9913, 0.9058, 0.6613], [0.9909, 0.9129, 0.6685], [0.9906, 0.92, 0.6757], [0.9902, 0.9272, 0.6829], [0.9898, 0.9343, 0.6902], [0.9894, 0.9415, 0.6975], [0.9891, 0.9486, 0.7049], [0.9887, 0.9557, 0.7122], [0.9884, 0.9629, 0.7196], [0.988, 0.97, 0.7271], [0.9877, 0.9772, 0.7345], [0.9874, 0.9843, 0.742], [0.9871, 0.9914, 0.7495]] }, "nipy_spectral": { "interpolate": true, "colors": [[0.0, 0.0, 0.0], [0.0366, 0.0, 0.0418], [0.0732, 0.0, 0.0837], [0.1098, 0.0, 0.1255], [0.1464, 0.0, 0.1673], [0.183, 0.0, 0.2091], [0.2196, 0.0, 0.251], [0.2562, 0.0, 0.2928], [0.2928, 0.0, 0.3346], [0.3294, 0.0, 0.3764], [0.366, 0.0, 0.4183], [0.4026, 0.0, 0.4601], [0.4392, 0.0, 0.5019], [0.468, 0.0, 0.5346], [0.4732, 0.0, 0.5398], [0.4785, 0.0, 0.5451], [0.4837, 0.0, 0.5503], [0.4889, 0.0, 0.5555], [0.4941, 0.0, 0.5608], [0.4993, 0.0, 0.566], [0.5046, 0.0, 0.5712], [0.5098, 0.0, 0.5765], [0.515, 0.0, 0.5817], [0.5202, 0.0, 0.5869], [0.5255, 0.0, 0.5922], [0.5307, 0.0, 0.5974], [0.5124, 0.0, 0.6026], [0.4706, 0.0, 0.6078], [0.4287, 0.0, 0.6131], [0.3869, 0.0, 0.6183], [0.3451, 0.0, 0.6235], [0.3032, 0.0, 0.6288], [0.2614, 0.0, 0.634], [0.2196, 0.0, 0.6392], [0.1778, 0.0, 0.6445], [0.1359, 0.0, 0.6497], [0.0941, 0.0, 0.6549], [0.0523, 0.0, 0.6602], [0.0105, 0.0, 0.6654], [0.0, 0.0, 0.6785], [0.0, 0.0, 0.6942], [0.0, 0.0, 0.7098], [0.0, 0.0, 0.7255], [0.0, 0.0, 0.7412], [0.0, 0.0, 0.7569], [0.0, 0.0, 0.7726], [0.0, 0.0, 0.7883], [0.0, 0.0, 0.804], [0.0, 0.0, 0.8196], [0.0, 0.0, 0.8353], [0.0, 0.0, 0.851], [0.0, 0.0, 0.8667], [0.0, 0.0366, 0.8667], [0.0, 0.0732, 0.8667], [0.0, 0.1098, 0.8667], [0.0, 0.1464, 0.8667], [0.0, 0.183, 0.8667], [0.0, 0.2196, 0.8667], [0.0, 0.2562, 0.8667], [0.0, 0.2928, 0.8667], [0.0, 0.3294, 0.8667], [0.0, 0.366, 0.8667], [0.0, 0.4026, 0.8667], [0.0, 0.4392, 0.8667], [0.0, 0.4693, 0.8667], [0.0, 0.4798, 0.8667], [0.0, 0.4902, 0.8667], [0.0, 0.5007, 0.8667], [0.0, 0.5111, 0.8667], [0.0, 0.5216, 0.8667], [0.0, 0.532, 0.8667], [0.0, 0.5425, 0.8667], [0.0, 0.553, 0.8667], [0.0, 0.5634, 0.8667], [0.0, 0.5739, 0.8667], [0.0, 0.5843, 0.8667], [0.0, 0.5948, 0.8667], [0.0, 0.6026, 0.8589], [0.0, 0.6078, 0.8432], [0.0, 0.6131, 0.8275], [0.0, 0.6183, 0.8118], [0.0, 0.6235, 0.7961], [0.0, 0.6288, 0.7804], [0.0, 0.634, 0.7647], [0.0, 0.6392, 0.7491], [0.0, 0.6445, 0.7334], [0.0, 0.6497, 0.7177], [0.0, 0.6549, 0.702], [0.0, 0.6602, 0.6863], [0.0, 0.6654, 0.6706], [0.0, 0.6667, 0.6589], [0.0, 0.6667, 0.6484], [0.0, 0.6667, 0.6379], [0.0, 0.6667, 0.6275], [0.0, 0.6667, 0.617], [0.0, 0.6667, 0.6065], [0.0, 0.6667, 0.5961], [0.0, 0.6667, 0.5856], [0.0, 0.6667, 0.5752], [0.0, 0.6667, 0.5647], [0.0, 0.6667, 0.5542], [0.0, 0.6667, 0.5438], [0.0, 0.6667, 0.5333], [0.0, 0.6615, 0.4915], [0.0, 0.6562, 0.4496], [0.0, 0.651, 0.4078], [0.0, 0.6458, 0.366], [0.0, 0.6405, 0.3242], [0.0, 0.6353, 0.2823], [0.0, 0.6301, 0.2405], [0.0, 0.6248, 0.1987], [0.0, 0.6196, 0.1569], [0.0, 0.6144, 0.115], [0.0, 0.6092, 0.0732], [0.0, 0.6039, 0.0314], [0.0, 0.6026, 0.0], [0.0, 0.6131, 0.0], [0.0, 0.6235, 0.0], [0.0, 0.634, 0.0], [0.0, 0.6444, 0.0], [0.0, 0.6549, 0.0], [0.0, 0.6653, 0.0], [0.0, 0.6758, 0.0], [0.0, 0.6863, 0.0], [0.0, 0.6967, 0.0], [0.0, 0.7072, 0.0], [0.0, 0.7176, 0.0], [0.0, 0.7281, 0.0], [0.0, 0.7385, 0.0], [0.0, 0.749, 0.0], [0.0, 0.7595, 0.0], [0.0, 0.7699, 0.0], [0.0, 0.7804, 0.0], [0.0, 0.7908, 0.0], [0.0, 0.8013, 0.0], [0.0, 0.8118, 0.0], [0.0, 0.8222, 0.0], [0.0, 0.8327, 0.0], [0.0, 0.8432, 0.0], [0.0, 0.8536, 0.0], [0.0, 0.8641, 0.0], [0.0, 0.8745, 0.0], [0.0, 0.885, 0.0], [0.0, 0.8955, 0.0], [0.0, 0.9059, 0.0], [0.0, 0.9164, 0.0], [0.0, 0.9268, 0.0], [0.0, 0.9373, 0.0], [0.0, 0.9477, 0.0], [0.0, 0.9582, 0.0], [0.0, 0.9686, 0.0], [0.0, 0.9791, 0.0], [0.0, 0.9895, 0.0], [0.0, 1.0, 0.0], [0.0575, 1.0, 0.0], [0.115, 1.0, 0.0], [0.1725, 1.0, 0.0], [0.2301, 1.0, 0.0], [0.2876, 1.0, 0.0], [0.3451, 1.0, 0.0], [0.4026, 1.0, 0.0], [0.4601, 1.0, 0.0], [0.5176, 1.0, 0.0], [0.5751, 1.0, 0.0], [0.6327, 1.0, 0.0], [0.6902, 1.0, 0.0], [0.7372, 0.9987, 0.0], [0.7529, 0.9935, 0.0], [0.7686, 0.9882, 0.0], [0.7843, 0.983, 0.0], [0.8, 0.9778, 0.0], [0.8157, 0.9725, 0.0], [0.8313, 0.9673, 0.0], [0.847, 0.9621, 0.0], [0.8627, 0.9568, 0.0], [0.8784, 0.9516, 0.0], [0.8941, 0.9464, 0.0], [0.9098, 0.9411, 0.0], [0.9255, 0.9359, 0.0], [0.9359, 0.9281, 0.0], [0.9411, 0.9176, 0.0], [0.9464, 0.9072, 0.0], [0.9516, 0.8967, 0.0], [0.9568, 0.8863, 0.0], [0.9621, 0.8758, 0.0], [0.9673, 0.8653, 0.0], [0.9725, 0.8549, 0.0], [0.9778, 0.8444, 0.0], [0.983, 0.834, 0.0], [0.9882, 0.8235, 0.0], [0.9935, 0.8131, 0.0], [0.9987, 0.8026, 0.0], [1.0, 0.7882, 0.0], [1.0, 0.7725, 0.0], [1.0, 0.7569, 0.0], [1.0, 0.7412, 0.0], [1.0, 0.7255, 0.0], [1.0, 0.7098, 0.0], [1.0, 0.6941, 0.0], [1.0, 0.6784, 0.0], [1.0, 0.6627, 0.0], [1.0, 0.6471, 0.0], [1.0, 0.6314, 0.0], [1.0, 0.6157, 0.0], [1.0, 0.6, 0.0], [1.0, 0.5529, 0.0], [1.0, 0.5059, 0.0], [1.0, 0.4588, 0.0], [1.0, 0.4118, 0.0], [1.0, 0.3647, 0.0], [1.0, 0.3176, 0.0], [1.0, 0.2706, 0.0], [1.0, 0.2235, 0.0], [1.0, 0.1765, 0.0], [1.0, 0.1294, 0.0], [1.0, 0.0824, 0.0], [1.0, 0.0353, 0.0], [0.9974, 0.0, 0.0], [0.9869, 0.0, 0.0], [0.9765, 0.0, 0.0], [0.966, 0.0, 0.0], [0.9556, 0.0, 0.0], [0.9451, 0.0, 0.0], [0.9347, 0.0, 0.0], [0.9242, 0.0, 0.0], [0.9137, 0.0, 0.0], [0.9033, 0.0, 0.0], [0.8928, 0.0, 0.0], [0.8824, 0.0, 0.0], [0.8719, 0.0, 0.0], [0.8641, 0.0, 0.0], [0.8589, 0.0, 0.0], [0.8536, 0.0, 0.0], [0.8484, 0.0, 0.0], [0.8432, 0.0, 0.0], [0.8379, 0.0, 0.0], [0.8327, 0.0, 0.0], [0.8275, 0.0, 0.0], [0.8222, 0.0, 0.0], [0.817, 0.0, 0.0], [0.8118, 0.0, 0.0], [0.8065, 0.0, 0.0], [0.8013, 0.0, 0.0], [0.8, 0.0471, 0.0471], [0.8, 0.1098, 0.1098], [0.8, 0.1725, 0.1725], [0.8, 0.2353, 0.2353], [0.8, 0.298, 0.298], [0.8, 0.3608, 0.3608], [0.8, 0.4235, 0.4235], [0.8, 0.4863, 0.4863], [0.8, 0.549, 0.549], [0.8, 0.6118, 0.6118], [0.8, 0.6745, 0.6745], [0.8, 0.7373, 0.7373], [0.8, 0.8, 0.8]] }, "ocean": { "interpolate": true, "colors": [[0.0, 0.5, 0.0], [0.0, 0.4941, 0.0039], [0.0, 0.4882, 0.0078], [0.0, 0.4824, 0.0118], [0.0, 0.4765, 0.0157], [0.0, 0.4706, 0.0196], [0.0, 0.4647, 0.0235], [0.0, 0.4588, 0.0275], [0.0, 0.4529, 0.0314], [0.0, 0.4471, 0.0353], [0.0, 0.4412, 0.0392], [0.0, 0.4353, 0.0431], [0.0, 0.4294, 0.0471], [0.0, 0.4235, 0.051], [0.0, 0.4176, 0.0549], [0.0, 0.4118, 0.0588], [0.0, 0.4059, 0.0627], [0.0, 0.4, 0.0667], [0.0, 0.3941, 0.0706], [0.0, 0.3882, 0.0745], [0.0, 0.3824, 0.0784], [0.0, 0.3765, 0.0824], [0.0, 0.3706, 0.0863], [0.0, 0.3647, 0.0902], [0.0, 0.3588, 0.0941], [0.0, 0.3529, 0.098], [0.0, 0.3471, 0.102], [0.0, 0.3412, 0.1059], [0.0, 0.3353, 0.1098], [0.0, 0.3294, 0.1137], [0.0, 0.3235, 0.1176], [0.0, 0.3176, 0.1216], [0.0, 0.3118, 0.1255], [0.0, 0.3059, 0.1294], [0.0, 0.3, 0.1333], [0.0, 0.2941, 0.1373], [0.0, 0.2882, 0.1412], [0.0, 0.2824, 0.1451], [0.0, 0.2765, 0.149], [0.0, 0.2706, 0.1529], [0.0, 0.2647, 0.1569], [0.0, 0.2588, 0.1608], [0.0, 0.2529, 0.1647], [0.0, 0.2471, 0.1686], [0.0, 0.2412, 0.1725], [0.0, 0.2353, 0.1765], [0.0, 0.2294, 0.1804], [0.0, 0.2235, 0.1843], [0.0, 0.2176, 0.1882], [0.0, 0.2118, 0.1922], [0.0, 0.2059, 0.1961], [0.0, 0.2, 0.2], [0.0, 0.1941, 0.2039], [0.0, 0.1882, 0.2078], [0.0, 0.1824, 0.2118], [0.0, 0.1765, 0.2157], [0.0, 0.1706, 0.2196], [0.0, 0.1647, 0.2235], [0.0, 0.1588, 0.2275], [0.0, 0.1529, 0.2314], [0.0, 0.1471, 0.2353], [0.0, 0.1412, 0.2392], [0.0, 0.1353, 0.2431], [0.0, 0.1294, 0.2471], [0.0, 0.1235, 0.251], [0.0, 0.1176, 0.2549], [0.0, 0.1118, 0.2588], [0.0, 0.1059, 0.2627], [0.0, 0.1, 0.2667], [0.0, 0.0941, 0.2706], [0.0, 0.0882, 0.2745], [0.0, 0.0824, 0.2784], [0.0, 0.0765, 0.2824], [0.0, 0.0706, 0.2863], [0.0, 0.0647, 0.2902], [0.0, 0.0588, 0.2941], [0.0, 0.0529, 0.298], [0.0, 0.0471, 0.302], [0.0, 0.0412, 0.3059], [0.0, 0.0353, 0.3098], [0.0, 0.0294, 0.3137], [0.0, 0.0235, 0.3176], [0.0, 0.0176, 0.3216], [0.0, 0.0118, 0.3255], [0.0, 0.0059, 0.3294], [0.0, 0.0, 0.3333], [0.0, 0.0059, 0.3373], [0.0, 0.0118, 0.3412], [0.0, 0.0176, 0.3451], [0.0, 0.0235, 0.349], [0.0, 0.0294, 0.3529], [0.0, 0.0353, 0.3569], [0.0, 0.0412, 0.3608], [0.0, 0.0471, 0.3647], [0.0, 0.0529, 0.3686], [0.0, 0.0588, 0.3725], [0.0, 0.0647, 0.3765], [0.0, 0.0706, 0.3804], [0.0, 0.0765, 0.3843], [0.0, 0.0824, 0.3882], [0.0, 0.0882, 0.3922], [0.0, 0.0941, 0.3961], [0.0, 0.1, 0.4], [0.0, 0.1059, 0.4039], [0.0, 0.1118, 0.4078], [0.0, 0.1176, 0.4118], [0.0, 0.1235, 0.4157], [0.0, 0.1294, 0.4196], [0.0, 0.1353, 0.4235], [0.0, 0.1412, 0.4275], [0.0, 0.1471, 0.4314], [0.0, 0.1529, 0.4353], [0.0, 0.1588, 0.4392], [0.0, 0.1647, 0.4431], [0.0, 0.1706, 0.4471], [0.0, 0.1765, 0.451], [0.0, 0.1824, 0.4549], [0.0, 0.1882, 0.4588], [0.0, 0.1941, 0.4627], [0.0, 0.2, 0.4667], [0.0, 0.2059, 0.4706], [0.0, 0.2118, 0.4745], [0.0, 0.2176, 0.4784], [0.0, 0.2235, 0.4824], [0.0, 0.2294, 0.4863], [0.0, 0.2353, 0.4902], [0.0, 0.2412, 0.4941], [0.0, 0.2471, 0.498], [0.0, 0.2529, 0.502], [0.0, 0.2588, 0.5059], [0.0, 0.2647, 0.5098], [0.0, 0.2706, 0.5137], [0.0, 0.2765, 0.5176], [0.0, 0.2824, 0.5216], [0.0, 0.2882, 0.5255], [0.0, 0.2941, 0.5294], [0.0, 0.3, 0.5333], [0.0, 0.3059, 0.5373], [0.0, 0.3118, 0.5412], [0.0, 0.3176, 0.5451], [0.0, 0.3235, 0.549], [0.0, 0.3294, 0.5529], [0.0, 0.3353, 0.5569], [0.0, 0.3412, 0.5608], [0.0, 0.3471, 0.5647], [0.0, 0.3529, 0.5686], [0.0, 0.3588, 0.5725], [0.0, 0.3647, 0.5765], [0.0, 0.3706, 0.5804], [0.0, 0.3765, 0.5843], [0.0, 0.3824, 0.5882], [0.0, 0.3882, 0.5922], [0.0, 0.3941, 0.5961], [0.0, 0.4, 0.6], [0.0, 0.4059, 0.6039], [0.0, 0.4118, 0.6078], [0.0, 0.4176, 0.6118], [0.0, 0.4235, 0.6157], [0.0, 0.4294, 0.6196], [0.0, 0.4353, 0.6235], [0.0, 0.4412, 0.6275], [0.0, 0.4471, 0.6314], [0.0, 0.4529, 0.6353], [0.0, 0.4588, 0.6392], [0.0, 0.4647, 0.6431], [0.0, 0.4706, 0.6471], [0.0, 0.4765, 0.651], [0.0, 0.4824, 0.6549], [0.0, 0.4882, 0.6588], [0.0, 0.4941, 0.6627], [0.0, 0.5, 0.6667], [0.0118, 0.5059, 0.6706], [0.0235, 0.5118, 0.6745], [0.0353, 0.5176, 0.6784], [0.0471, 0.5235, 0.6824], [0.0588, 0.5294, 0.6863], [0.0706, 0.5353, 0.6902], [0.0824, 0.5412, 0.6941], [0.0941, 0.5471, 0.698], [0.1059, 0.5529, 0.702], [0.1176, 0.5588, 0.7059], [0.1294, 0.5647, 0.7098], [0.1412, 0.5706, 0.7137], [0.1529, 0.5765, 0.7176], [0.1647, 0.5824, 0.7216], [0.1765, 0.5882, 0.7255], [0.1882, 0.5941, 0.7294], [0.2, 0.6, 0.7333], [0.2118, 0.6059, 0.7373], [0.2235, 0.6118, 0.7412], [0.2353, 0.6176, 0.7451], [0.2471, 0.6235, 0.749], [0.2588, 0.6294, 0.7529], [0.2706, 0.6353, 0.7569], [0.2824, 0.6412, 0.7608], [0.2941, 0.6471, 0.7647], [0.3059, 0.6529, 0.7686], [0.3176, 0.6588, 0.7725], [0.3294, 0.6647, 0.7765], [0.3412, 0.6706, 0.7804], [0.3529, 0.6765, 0.7843], [0.3647, 0.6824, 0.7882], [0.3765, 0.6882, 0.7922], [0.3882, 0.6941, 0.7961], [0.4, 0.7, 0.8], [0.4118, 0.7059, 0.8039], [0.4235, 0.7118, 0.8078], [0.4353, 0.7176, 0.8118], [0.4471, 0.7235, 0.8157], [0.4588, 0.7294, 0.8196], [0.4706, 0.7353, 0.8235], [0.4824, 0.7412, 0.8275], [0.4941, 0.7471, 0.8314], [0.5059, 0.7529, 0.8353], [0.5176, 0.7588, 0.8392], [0.5294, 0.7647, 0.8431], [0.5412, 0.7706, 0.8471], [0.5529, 0.7765, 0.851], [0.5647, 0.7824, 0.8549], [0.5765, 0.7882, 0.8588], [0.5882, 0.7941, 0.8627], [0.6, 0.8, 0.8667], [0.6118, 0.8059, 0.8706], [0.6235, 0.8118, 0.8745], [0.6353, 0.8176, 0.8784], [0.6471, 0.8235, 0.8824], [0.6588, 0.8294, 0.8863], [0.6706, 0.8353, 0.8902], [0.6824, 0.8412, 0.8941], [0.6941, 0.8471, 0.898], [0.7059, 0.8529, 0.902], [0.7176, 0.8588, 0.9059], [0.7294, 0.8647, 0.9098], [0.7412, 0.8706, 0.9137], [0.7529, 0.8765, 0.9176], [0.7647, 0.8824, 0.9216], [0.7765, 0.8882, 0.9255], [0.7882, 0.8941, 0.9294], [0.8, 0.9, 0.9333], [0.8118, 0.9059, 0.9373], [0.8235, 0.9118, 0.9412], [0.8353, 0.9176, 0.9451], [0.8471, 0.9235, 0.949], [0.8588, 0.9294, 0.9529], [0.8706, 0.9353, 0.9569], [0.8824, 0.9412, 0.9608], [0.8941, 0.9471, 0.9647], [0.9059, 0.9529, 0.9686], [0.9176, 0.9588, 0.9725], [0.9294, 0.9647, 0.9765], [0.9412, 0.9706, 0.9804], [0.9529, 0.9765, 0.9843], [0.9647, 0.9824, 0.9882], [0.9765, 0.9882, 0.9922], [0.9882, 0.9941, 0.9961], [1.0, 1.0, 1.0]] }, "pink": { "interpolate": true, "colors": [[0.1178, 0.0, 0.0], [0.1371, 0.0254, 0.0254], [0.1564, 0.0508, 0.0508], [0.1757, 0.0762, 0.0762], [0.1949, 0.1017, 0.1017], [0.2088, 0.1129, 0.1129], [0.2223, 0.1234, 0.1234], [0.2358, 0.1339, 0.1339], [0.2494, 0.1445, 0.1445], [0.2607, 0.1528, 0.1528], [0.2717, 0.1609, 0.1609], [0.2828, 0.1689, 0.1689], [0.2939, 0.177, 0.177], [0.3037, 0.184, 0.184], [0.3133, 0.1908, 0.1908], [0.3229, 0.1976, 0.1976], [0.3325, 0.2044, 0.2044], [0.3413, 0.2106, 0.2106], [0.3499, 0.2166, 0.2166], [0.3585, 0.2226, 0.2226], [0.3671, 0.2286, 0.2286], [0.3751, 0.2342, 0.2342], [0.3829, 0.2396, 0.2396], [0.3908, 0.245, 0.245], [0.3986, 0.2504, 0.2504], [0.4061, 0.2555, 0.2555], [0.4134, 0.2605, 0.2605], [0.4206, 0.2655, 0.2655], [0.4279, 0.2705, 0.2705], [0.4349, 0.2753, 0.2753], [0.4417, 0.2799, 0.2799], [0.4485, 0.2845, 0.2845], [0.4553, 0.2892, 0.2892], [0.4619, 0.2937, 0.2937], [0.4683, 0.298, 0.298], [0.4747, 0.3024, 0.3024], [0.4811, 0.3067, 0.3067], [0.4873, 0.311, 0.311], [0.4934, 0.3151, 0.3151], [0.4995, 0.3192, 0.3192], [0.5056, 0.3233, 0.3233], [0.5116, 0.3274, 0.3274], [0.5174, 0.3313, 0.3313], [0.5232, 0.3352, 0.3352], [0.529, 0.3391, 0.3391], [0.5347, 0.343, 0.343], [0.5403, 0.3467, 0.3467], [0.5458, 0.3505, 0.3505], [0.5514, 0.3542, 0.3542], [0.5569, 0.3579, 0.3579], [0.5622, 0.3615, 0.3615], [0.5675, 0.3651, 0.3651], [0.5729, 0.3687, 0.3687], [0.5782, 0.3722, 0.3722], [0.5833, 0.3757, 0.3757], [0.5885, 0.3791, 0.3791], [0.5936, 0.3826, 0.3826], [0.5987, 0.386, 0.386], [0.6037, 0.3894, 0.3894], [0.6087, 0.3927, 0.3927], [0.6137, 0.396, 0.396], [0.6186, 0.3993, 0.3993], [0.6234, 0.4026, 0.4026], [0.6282, 0.4058, 0.4058], [0.6331, 0.409, 0.409], [0.6378, 0.4122, 0.4122], [0.6425, 0.4153, 0.4153], [0.6472, 0.4185, 0.4185], [0.6519, 0.4216, 0.4216], [0.6565, 0.4247, 0.4247], [0.6611, 0.4278, 0.4278], [0.6656, 0.4308, 0.4308], [0.6702, 0.4338, 0.4338], [0.6747, 0.4369, 0.4369], [0.6791, 0.4398, 0.4398], [0.6836, 0.4428, 0.4428], [0.688, 0.4457, 0.4457], [0.6924, 0.4487, 0.4487], [0.6967, 0.4515, 0.4515], [0.701, 0.4544, 0.4544], [0.7053, 0.4573, 0.4573], [0.7096, 0.4602, 0.4602], [0.7139, 0.463, 0.463], [0.7181, 0.4658, 0.4658], [0.7223, 0.4686, 0.4686], [0.7265, 0.4714, 0.4714], [0.7306, 0.4741, 0.4741], [0.7347, 0.4769, 0.4769], [0.7388, 0.4796, 0.4796], [0.7429, 0.4824, 0.4824], [0.747, 0.485, 0.485], [0.751, 0.4877, 0.4877], [0.755, 0.4904, 0.4904], [0.759, 0.4931, 0.4931], [0.761, 0.4988, 0.4957], [0.7627, 0.5047, 0.4983], [0.7644, 0.5107, 0.501], [0.7661, 0.5167, 0.5036], [0.7678, 0.5224, 0.5062], [0.7695, 0.5282, 0.5087], [0.7712, 0.5339, 0.5113], [0.7729, 0.5396, 0.5139], [0.7746, 0.5451, 0.5164], [0.7763, 0.5506, 0.5189], [0.778, 0.5561, 0.5214], [0.7796, 0.5615, 0.5239], [0.7813, 0.5669, 0.5264], [0.783, 0.5721, 0.5289], [0.7847, 0.5774, 0.5313], [0.7863, 0.5827, 0.5338], [0.788, 0.5878, 0.5363], [0.7896, 0.5929, 0.5387], [0.7913, 0.598, 0.5411], [0.7929, 0.6031, 0.5435], [0.7946, 0.608, 0.5459], [0.7962, 0.613, 0.5483], [0.7979, 0.6179, 0.5507], [0.7995, 0.6228, 0.5531], [0.8011, 0.6276, 0.5554], [0.8028, 0.6324, 0.5578], [0.8044, 0.6372, 0.5601], [0.806, 0.6419, 0.5624], [0.8076, 0.6466, 0.5648], [0.8093, 0.6512, 0.5671], [0.8109, 0.6559, 0.5694], [0.8125, 0.6605, 0.5717], [0.8141, 0.665, 0.5739], [0.8157, 0.6695, 0.5762], [0.8173, 0.674, 0.5785], [0.8189, 0.6785, 0.5807], [0.8205, 0.683, 0.583], [0.8221, 0.6874, 0.5852], [0.8237, 0.6918, 0.5874], [0.8253, 0.6961, 0.5897], [0.8268, 0.7005, 0.5919], [0.8284, 0.7047, 0.5941], [0.83, 0.709, 0.5963], [0.8316, 0.7133, 0.5985], [0.8331, 0.7175, 0.6006], [0.8347, 0.7217, 0.6028], [0.8363, 0.7259, 0.605], [0.8378, 0.73, 0.6071], [0.8394, 0.7342, 0.6093], [0.8409, 0.7383, 0.6114], [0.8425, 0.7423, 0.6136], [0.844, 0.7464, 0.6157], [0.8456, 0.7505, 0.6178], [0.8471, 0.7545, 0.6199], [0.8487, 0.7585, 0.622], [0.8502, 0.7625, 0.6241], [0.8518, 0.7664, 0.6262], [0.8533, 0.7703, 0.6283], [0.8548, 0.7742, 0.6304], [0.8563, 0.7781, 0.6324], [0.8579, 0.782, 0.6345], [0.8594, 0.7859, 0.6366], [0.8609, 0.7897, 0.6386], [0.8624, 0.7935, 0.6407], [0.8639, 0.7974, 0.6427], [0.8655, 0.8011, 0.6447], [0.867, 0.8049, 0.6467], [0.8685, 0.8086, 0.6488], [0.87, 0.8124, 0.6508], [0.8715, 0.8161, 0.6528], [0.873, 0.8198, 0.6548], [0.8745, 0.8234, 0.6568], [0.876, 0.8271, 0.6588], [0.8775, 0.8308, 0.6607], [0.8789, 0.8344, 0.6627], [0.8804, 0.838, 0.6647], [0.8819, 0.8416, 0.6667], [0.8834, 0.8452, 0.6686], [0.8849, 0.8487, 0.6706], [0.8863, 0.8523, 0.6725], [0.8878, 0.8559, 0.6745], [0.8893, 0.8594, 0.6764], [0.8908, 0.8629, 0.6783], [0.8922, 0.8664, 0.6802], [0.8937, 0.8699, 0.6822], [0.8952, 0.8733, 0.6841], [0.8966, 0.8768, 0.686], [0.8981, 0.8802, 0.6879], [0.8995, 0.8837, 0.6898], [0.901, 0.8871, 0.6917], [0.9024, 0.8905, 0.6936], [0.9039, 0.8939, 0.6954], [0.9053, 0.8972, 0.6973], [0.9068, 0.9006, 0.6992], [0.9082, 0.9039, 0.7011], [0.9096, 0.9073, 0.7029], [0.9111, 0.9106, 0.7048], [0.9125, 0.9125, 0.7094], [0.9139, 0.9139, 0.7148], [0.9154, 0.9154, 0.7202], [0.9168, 0.9168, 0.7256], [0.9182, 0.9182, 0.7309], [0.9196, 0.9196, 0.7362], [0.9211, 0.9211, 0.7414], [0.9225, 0.9225, 0.7467], [0.9239, 0.9239, 0.7519], [0.9253, 0.9253, 0.757], [0.9267, 0.9267, 0.7621], [0.9281, 0.9281, 0.7672], [0.9295, 0.9295, 0.7722], [0.9309, 0.9309, 0.7772], [0.9323, 0.9323, 0.7822], [0.9338, 0.9338, 0.7872], [0.9352, 0.9352, 0.7921], [0.9365, 0.9365, 0.7969], [0.9379, 0.9379, 0.8018], [0.9393, 0.9393, 0.8067], [0.9407, 0.9407, 0.8115], [0.9421, 0.9421, 0.8162], [0.9435, 0.9435, 0.8209], [0.9449, 0.9449, 0.8257], [0.9463, 0.9463, 0.8304], [0.9476, 0.9476, 0.835], [0.949, 0.949, 0.8396], [0.9504, 0.9504, 0.8443], [0.9518, 0.9518, 0.8489], [0.9531, 0.9531, 0.8534], [0.9545, 0.9545, 0.8579], [0.9559, 0.9559, 0.8625], [0.9573, 0.9573, 0.867], [0.9586, 0.9586, 0.8714], [0.96, 0.96, 0.8758], [0.9613, 0.9613, 0.8803], [0.9627, 0.9627, 0.8847], [0.9641, 0.9641, 0.889], [0.9654, 0.9654, 0.8934], [0.9668, 0.9668, 0.8977], [0.9681, 0.9681, 0.9021], [0.9695, 0.9695, 0.9063], [0.9708, 0.9708, 0.9106], [0.9722, 0.9722, 0.9149], [0.9735, 0.9735, 0.9191], [0.9748, 0.9748, 0.9233], [0.9762, 0.9762, 0.9275], [0.9775, 0.9775, 0.9317], [0.9789, 0.9789, 0.9358], [0.9802, 0.9802, 0.94], [0.9815, 0.9815, 0.9441], [0.9829, 0.9829, 0.9482], [0.9842, 0.9842, 0.9523], [0.9855, 0.9855, 0.9563], [0.9868, 0.9868, 0.9604], [0.9882, 0.9882, 0.9644], [0.9895, 0.9895, 0.9685], [0.9908, 0.9908, 0.9724], [0.9921, 0.9921, 0.9764], [0.9934, 0.9934, 0.9804], [0.9948, 0.9948, 0.9844], [0.9961, 0.9961, 0.9883], [0.9974, 0.9974, 0.9922], [0.9987, 0.9987, 0.9961], [1.0, 1.0, 1.0]] }, "plasma": { "interpolate": true, "colors": [[0.0504, 0.0298, 0.528], [0.0635, 0.0284, 0.5331], [0.0754, 0.0272, 0.538], [0.0862, 0.0261, 0.5427], [0.0964, 0.0252, 0.5471], [0.106, 0.0243, 0.5514], [0.1151, 0.0236, 0.5555], [0.1239, 0.0229, 0.5594], [0.1324, 0.0223, 0.5632], [0.1406, 0.0217, 0.567], [0.1486, 0.0212, 0.5706], [0.1564, 0.0207, 0.5741], [0.1641, 0.0202, 0.5775], [0.1716, 0.0197, 0.5808], [0.179, 0.0193, 0.5841], [0.1862, 0.0188, 0.5872], [0.1934, 0.0184, 0.5903], [0.2004, 0.0179, 0.5934], [0.2074, 0.0174, 0.5963], [0.2144, 0.017, 0.5992], [0.2212, 0.0165, 0.6021], [0.228, 0.016, 0.6049], [0.2347, 0.0155, 0.6076], [0.2414, 0.015, 0.6103], [0.248, 0.0144, 0.6129], [0.2546, 0.0139, 0.6154], [0.2612, 0.0133, 0.6179], [0.2677, 0.0127, 0.6203], [0.2742, 0.0121, 0.6227], [0.2806, 0.0115, 0.625], [0.2871, 0.0109, 0.6273], [0.2935, 0.0102, 0.6295], [0.2999, 0.0096, 0.6316], [0.3062, 0.0089, 0.6337], [0.3125, 0.0082, 0.6357], [0.3189, 0.0076, 0.6376], [0.3252, 0.0069, 0.6395], [0.3314, 0.0063, 0.6413], [0.3377, 0.0056, 0.643], [0.3439, 0.005, 0.6447], [0.3502, 0.0044, 0.6463], [0.3564, 0.0038, 0.6478], [0.3626, 0.0032, 0.6492], [0.3687, 0.0027, 0.6506], [0.3749, 0.0022, 0.6519], [0.381, 0.0018, 0.6531], [0.3872, 0.0014, 0.6542], [0.3933, 0.0011, 0.6552], [0.3994, 0.0009, 0.6561], [0.4055, 0.0007, 0.657], [0.4116, 0.0006, 0.6577], [0.4176, 0.0006, 0.6584], [0.4237, 0.0006, 0.659], [0.4297, 0.0008, 0.6594], [0.4357, 0.0011, 0.6598], [0.4417, 0.0015, 0.6601], [0.4477, 0.0021, 0.6602], [0.4537, 0.0028, 0.6603], [0.4596, 0.0036, 0.6603], [0.4656, 0.0045, 0.6601], [0.4715, 0.0057, 0.6599], [0.4773, 0.007, 0.6595], [0.4832, 0.0085, 0.6591], [0.4891, 0.0101, 0.6585], [0.4949, 0.012, 0.6579], [0.5007, 0.0141, 0.6571], [0.5065, 0.0163, 0.6562], [0.5122, 0.0188, 0.6552], [0.5179, 0.0216, 0.6541], [0.5236, 0.0245, 0.6529], [0.5293, 0.0277, 0.6516], [0.535, 0.0312, 0.6502], [0.5406, 0.035, 0.6486], [0.5462, 0.039, 0.647], [0.5517, 0.0431, 0.6453], [0.5572, 0.0473, 0.6434], [0.5627, 0.0515, 0.6415], [0.5682, 0.0558, 0.6395], [0.5736, 0.06, 0.6373], [0.579, 0.0643, 0.6351], [0.5844, 0.0686, 0.6328], [0.5897, 0.0729, 0.6304], [0.595, 0.0772, 0.6279], [0.6003, 0.0815, 0.6253], [0.6055, 0.0859, 0.6227], [0.6107, 0.0902, 0.62], [0.6158, 0.0946, 0.6171], [0.6209, 0.0989, 0.6143], [0.626, 0.1033, 0.6113], [0.631, 0.1077, 0.6083], [0.636, 0.1121, 0.6052], [0.641, 0.1165, 0.6021], [0.6459, 0.1209, 0.5989], [0.6507, 0.1253, 0.5956], [0.6556, 0.1297, 0.5923], [0.6604, 0.1341, 0.589], [0.6651, 0.1386, 0.5856], [0.6698, 0.143, 0.5822], [0.6745, 0.1474, 0.5787], [0.6792, 0.1518, 0.5752], [0.6838, 0.1563, 0.5717], [0.6883, 0.1607, 0.5681], [0.6928, 0.1651, 0.5645], [0.6973, 0.1696, 0.5609], [0.7018, 0.174, 0.5573], [0.7062, 0.1784, 0.5537], [0.7105, 0.1829, 0.55], [0.7149, 0.1873, 0.5463], [0.7192, 0.1917, 0.5427], [0.7234, 0.1962, 0.539], [0.7277, 0.2006, 0.5353], [0.7319, 0.205, 0.5316], [0.736, 0.2094, 0.5279], [0.7401, 0.2139, 0.5242], [0.7442, 0.2183, 0.5205], [0.7483, 0.2227, 0.5168], [0.7523, 0.2271, 0.5131], [0.7563, 0.2316, 0.5095], [0.7603, 0.236, 0.5058], [0.7642, 0.2404, 0.5021], [0.7681, 0.2448, 0.4985], [0.772, 0.2492, 0.4948], [0.7758, 0.2537, 0.4912], [0.7796, 0.2581, 0.4875], [0.7834, 0.2625, 0.4839], [0.7871, 0.2669, 0.4803], [0.7909, 0.2713, 0.4767], [0.7945, 0.2758, 0.4731], [0.7982, 0.2802, 0.4695], [0.8019, 0.2846, 0.466], [0.8055, 0.2891, 0.4624], [0.8091, 0.2935, 0.4589], [0.8126, 0.2979, 0.4553], [0.8161, 0.3024, 0.4518], [0.8197, 0.3068, 0.4483], [0.8231, 0.3113, 0.4448], [0.8266, 0.3157, 0.4413], [0.83, 0.3202, 0.4378], [0.8334, 0.3246, 0.4344], [0.8368, 0.3291, 0.4309], [0.8402, 0.3336, 0.4275], [0.8435, 0.3381, 0.424], [0.8468, 0.3426, 0.4206], [0.8501, 0.347, 0.4172], [0.8533, 0.3516, 0.4137], [0.8565, 0.3561, 0.4103], [0.8598, 0.3606, 0.4069], [0.8629, 0.3651, 0.4035], [0.8661, 0.3697, 0.4001], [0.8692, 0.3742, 0.3967], [0.8723, 0.3788, 0.3934], [0.8754, 0.3833, 0.39], [0.8784, 0.3879, 0.3866], [0.8814, 0.3925, 0.3832], [0.8844, 0.3971, 0.3799], [0.8874, 0.4018, 0.3765], [0.8903, 0.4064, 0.3731], [0.8932, 0.411, 0.3698], [0.8961, 0.4157, 0.3664], [0.899, 0.4204, 0.363], [0.9018, 0.4251, 0.3597], [0.9046, 0.4298, 0.3563], [0.9074, 0.4345, 0.353], [0.9101, 0.4393, 0.3496], [0.9128, 0.444, 0.3463], [0.9155, 0.4488, 0.3429], [0.9181, 0.4536, 0.3395], [0.9207, 0.4584, 0.3362], [0.9233, 0.4633, 0.3328], [0.9258, 0.4681, 0.3294], [0.9283, 0.473, 0.3261], [0.9308, 0.4779, 0.3227], [0.9332, 0.4828, 0.3193], [0.9356, 0.4877, 0.316], [0.938, 0.4927, 0.3126], [0.9403, 0.4976, 0.3092], [0.9426, 0.5026, 0.3058], [0.9448, 0.5077, 0.3024], [0.9471, 0.5127, 0.299], [0.9492, 0.5178, 0.2957], [0.9513, 0.5228, 0.2923], [0.9534, 0.528, 0.2889], [0.9555, 0.5331, 0.2855], [0.9575, 0.5382, 0.2821], [0.9594, 0.5434, 0.2787], [0.9613, 0.5486, 0.2753], [0.9632, 0.5539, 0.2719], [0.965, 0.5591, 0.2685], [0.9668, 0.5644, 0.2651], [0.9685, 0.5697, 0.2617], [0.9702, 0.575, 0.2583], [0.9718, 0.5804, 0.2549], [0.9734, 0.5858, 0.2515], [0.9749, 0.5912, 0.2482], [0.9764, 0.5966, 0.2448], [0.9779, 0.6021, 0.2414], [0.9792, 0.6075, 0.238], [0.9806, 0.613, 0.2346], [0.9818, 0.6186, 0.2313], [0.983, 0.6241, 0.2279], [0.9842, 0.6297, 0.2246], [0.9853, 0.6353, 0.2213], [0.9863, 0.641, 0.2179], [0.9873, 0.6466, 0.2146], [0.9883, 0.6523, 0.2114], [0.9891, 0.658, 0.2081], [0.9899, 0.6638, 0.2049], [0.9907, 0.6696, 0.2016], [0.9914, 0.6754, 0.1985], [0.992, 0.6812, 0.1953], [0.9925, 0.687, 0.1922], [0.993, 0.6929, 0.1891], [0.9935, 0.6988, 0.186], [0.9938, 0.7047, 0.183], [0.9941, 0.7107, 0.1801], [0.9943, 0.7167, 0.1772], [0.9945, 0.7227, 0.1744], [0.9946, 0.7287, 0.1716], [0.9946, 0.7348, 0.1689], [0.9945, 0.7409, 0.1663], [0.9944, 0.747, 0.1638], [0.9941, 0.7531, 0.1614], [0.9939, 0.7593, 0.1591], [0.9935, 0.7655, 0.1569], [0.993, 0.7717, 0.1548], [0.9925, 0.778, 0.1529], [0.9919, 0.7842, 0.151], [0.9912, 0.7905, 0.1494], [0.9904, 0.7969, 0.1479], [0.9896, 0.8032, 0.1465], [0.9886, 0.8096, 0.1454], [0.9876, 0.816, 0.1444], [0.9865, 0.8224, 0.1436], [0.9853, 0.8288, 0.1429], [0.984, 0.8353, 0.1425], [0.9827, 0.8418, 0.1423], [0.9812, 0.8483, 0.1423], [0.9796, 0.8549, 0.1425], [0.978, 0.8614, 0.1428], [0.9763, 0.868, 0.1434], [0.9744, 0.8746, 0.1441], [0.9725, 0.8812, 0.1449], [0.9705, 0.8879, 0.1459], [0.9684, 0.8946, 0.147], [0.9663, 0.9012, 0.1482], [0.964, 0.908, 0.1494], [0.9617, 0.9147, 0.1505], [0.9593, 0.9214, 0.1516], [0.9568, 0.9282, 0.1524], [0.9543, 0.9349, 0.1529], [0.9517, 0.9417, 0.1529], [0.9492, 0.9484, 0.1522], [0.9466, 0.9552, 0.1503], [0.9442, 0.9619, 0.1469], [0.9419, 0.9686, 0.141], [0.94, 0.9752, 0.1313]] }, "prism": { "interpolate": true, "colors": [[1.0, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 0.1296, 0.0], [1.0, 0.3203, 0.0], [1.0, 0.5116, 0.0], [1.0, 0.6909, 0.0], [1.0, 0.8464, 0.0], [1.0, 0.9679, 0.0], [0.889, 1.0, 0.0], [0.6991, 1.0, 0.0], [0.5073, 1.0, 0.0], [0.3262, 0.9966, 0.0], [0.1678, 0.887, 0.0], [0.0425, 0.7408, 0.2247], [0.0, 0.5675, 0.4915], [0.0, 0.3785, 0.7259], [0.0, 0.1863, 0.9124], [0.0, 0.0036, 1.0], [0.1001, 0.0, 1.0], [0.2431, 0.0, 1.0], [0.4142, 0.0, 0.9965], [0.6022, 0.0, 0.845], [0.7946, 0.0, 0.6378], [0.9788, 0.0, 0.3885], [1.0, 0.0, 0.1136], [1.0, 0.0, 0.0], [1.0, 0.0561, 0.0], [1.0, 0.2429, 0.0], [1.0, 0.4354, 0.0], [1.0, 0.6211, 0.0], [1.0, 0.7875, 0.0], [1.0, 0.9237, 0.0], [0.9619, 1.0, 0.0], [0.7764, 1.0, 0.0], [0.5838, 1.0, 0.0], [0.3969, 1.0, 0.0], [0.228, 0.9359, 0.0], [0.0883, 0.8034, 0.1123], [0.0, 0.6397, 0.3872], [0.0, 0.4555, 0.6367], [0.0, 0.2631, 0.8441], [0.0, 0.0751, 0.9959], [0.0528, 0.0, 1.0], [0.1817, 0.0, 1.0], [0.3427, 0.0, 1.0], [0.5254, 0.0, 0.9132], [0.7176, 0.0, 0.7269], [0.9066, 0.0, 0.4927], [1.0, 0.0, 0.2261], [1.0, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 0.1664, 0.0], [1.0, 0.3582, 0.0], [1.0, 0.5481, 0.0], [1.0, 0.7236, 0.0], [1.0, 0.8732, 0.0], [1.0, 0.987, 0.0], [0.8525, 1.0, 0.0], [0.6612, 1.0, 0.0], [0.4705, 1.0, 0.0], [0.293, 0.9784, 0.0], [0.1403, 0.861, 0.0], [0.0226, 0.7086, 0.2788], [0.0, 0.5312, 0.5406], [0.0, 0.3406, 0.7667], [0.0, 0.1493, 0.9423], [0.0121, 0.0, 1.0], [0.1255, 0.0, 1.0], [0.2748, 0.0, 1.0], [0.4501, 0.0, 0.9717], [0.64, 0.0, 0.8083], [0.8318, 0.0, 0.5917], [1.0, 0.0, 0.336], [1.0, 0.0, 0.0582], [1.0, 0.0, 0.0], [1.0, 0.0917, 0.0], [1.0, 0.2806, 0.0], [1.0, 0.4728, 0.0], [1.0, 0.6556, 0.0], [1.0, 0.8169, 0.0], [1.0, 0.9461, 0.0], [0.9267, 1.0, 0.0], [0.7387, 1.0, 0.0], [0.5463, 1.0, 0.0], [0.362, 1.0, 0.0], [0.198, 0.9129, 0.0], [0.0651, 0.7735, 0.1674], [0.0, 0.6048, 0.4387], [0.0, 0.418, 0.6811], [0.0, 0.2255, 0.8786], [0.0, 0.0398, 1.0], [0.0751, 0.0, 1.0], [0.2111, 0.0, 1.0], [0.3772, 0.0, 1.0], [0.5627, 0.0, 0.8811], [0.7553, 0.0, 0.6843], [0.9422, 0.0, 0.4425], [1.0, 0.0, 0.1714], [1.0, 0.0, 0.0], [1.0, 0.0195, 0.0], [1.0, 0.2036, 0.0], [1.0, 0.396, 0.0], [1.0, 0.5841, 0.0], [1.0, 0.7554, 0.0], [1.0, 0.8987, 0.0], [0.9981, 1.0, 0.0], [0.8155, 1.0, 0.0], [0.6234, 1.0, 0.0], [0.4343, 1.0, 0.0], [0.2607, 0.9585, 0.0], [0.1142, 0.8336, 0.0542], [0.0043, 0.6754, 0.3322], [0.0, 0.4945, 0.5883], [0.0, 0.3027, 0.8056], [0.0, 0.1128, 0.9698], [0.0311, 0.0, 1.0], [0.1522, 0.0, 1.0], [0.3075, 0.0, 1.0], [0.4866, 0.0, 0.9444], [0.6779, 0.0, 0.7696], [0.8686, 0.0, 0.5441], [1.0, 0.0, 0.2827], [1.0, 0.0, 0.0027], [1.0, 0.0, 0.0], [1.0, 0.1279, 0.0], [1.0, 0.3185, 0.0], [1.0, 0.5098, 0.0], [1.0, 0.6893, 0.0], [1.0, 0.8451, 0.0], [1.0, 0.9669, 0.0], [0.8908, 1.0, 0.0], [0.7009, 1.0, 0.0], [0.5091, 1.0, 0.0], [0.3279, 0.9974, 0.0], [0.1692, 0.8883, 0.0], [0.0435, 0.7423, 0.2221], [0.0, 0.5692, 0.4891], [0.0, 0.3803, 0.7239], [0.0, 0.1881, 0.9109], [0.0, 0.0052, 1.0], [0.0989, 0.0, 1.0], [0.2416, 0.0, 1.0], [0.4125, 0.0, 0.9976], [0.6003, 0.0, 0.8467], [0.7928, 0.0, 0.64], [0.9772, 0.0, 0.391], [1.0, 0.0, 0.1163], [1.0, 0.0, 0.0], [1.0, 0.0543, 0.0], [1.0, 0.241, 0.0], [1.0, 0.4336, 0.0], [1.0, 0.6194, 0.0], [1.0, 0.786, 0.0], [1.0, 0.9226, 0.0], [0.9636, 1.0, 0.0], [0.7782, 1.0, 0.0], [0.5856, 1.0, 0.0], [0.3986, 1.0, 0.0], [0.2295, 0.937, 0.0], [0.0895, 0.8049, 0.1096], [0.0, 0.6414, 0.3847], [0.0, 0.4574, 0.6344], [0.0, 0.2649, 0.8424], [0.0, 0.0768, 0.9947], [0.0518, 0.0, 1.0], [0.1803, 0.0, 1.0], [0.3411, 0.0, 1.0], [0.5236, 0.0, 0.9147], [0.7157, 0.0, 0.729], [0.9048, 0.0, 0.4952], [1.0, 0.0, 0.2287], [1.0, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 0.1646, 0.0], [1.0, 0.3563, 0.0], [1.0, 0.5463, 0.0], [1.0, 0.7221, 0.0], [1.0, 0.872, 0.0], [1.0, 0.9861, 0.0], [0.8543, 1.0, 0.0], [0.6631, 1.0, 0.0], [0.4723, 1.0, 0.0], [0.2946, 0.9793, 0.0], [0.1416, 0.8623, 0.0], [0.0235, 0.7102, 0.2762], [0.0, 0.533, 0.5382], [0.0, 0.3425, 0.7648], [0.0, 0.1511, 0.9409], [0.0112, 0.0, 1.0], [0.1242, 0.0, 1.0], [0.2732, 0.0, 1.0], [0.4484, 0.0, 0.9729], [0.6381, 0.0, 0.8102], [0.83, 0.0, 0.594], [1.0, 0.0, 0.3386], [1.0, 0.0, 0.061], [1.0, 0.0, 0.0], [1.0, 0.0899, 0.0], [1.0, 0.2788, 0.0], [1.0, 0.471, 0.0], [1.0, 0.6539, 0.0], [1.0, 0.8155, 0.0], [1.0, 0.9451, 0.0], [0.9284, 1.0, 0.0], [0.7406, 1.0, 0.0], [0.5481, 1.0, 0.0], [0.3637, 1.0, 0.0], [0.1994, 0.914, 0.0], [0.0662, 0.7749, 0.1647], [0.0, 0.6065, 0.4362], [0.0, 0.4199, 0.679], [0.0, 0.2273, 0.877], [0.0, 0.0415, 1.0], [0.074, 0.0, 1.0], [0.2096, 0.0, 1.0], [0.3755, 0.0, 1.0], [0.5609, 0.0, 0.8827], [0.7534, 0.0, 0.6864], [0.9405, 0.0, 0.4449], [1.0, 0.0, 0.1741], [1.0, 0.0, 0.0], [1.0, 0.0178, 0.0], [1.0, 0.2017, 0.0], [1.0, 0.3941, 0.0], [1.0, 0.5823, 0.0], [1.0, 0.7539, 0.0], [1.0, 0.8974, 0.0], [0.9997, 1.0, 0.0], [0.8173, 1.0, 0.0], [0.6252, 1.0, 0.0], [0.436, 1.0, 0.0], [0.2623, 0.9595, 0.0], [0.1154, 0.8349, 0.0515], [0.0051, 0.6771, 0.3296], [0.0, 0.4963, 0.586], [0.0, 0.3046, 0.8037], [0.0, 0.1146, 0.9685], [0.0302, 0.0, 1.0], [0.1509, 0.0, 1.0], [0.3059, 0.0, 1.0], [0.4848, 0.0, 0.9458], [0.676, 0.0, 0.7716], [0.8668, 0.0, 0.5465], [1.0, 0.0, 0.2854], [1.0, 0.0, 0.0054], [1.0, 0.0, 0.0], [1.0, 0.1261, 0.0], [1.0, 0.3166, 0.0], [1.0, 0.508, 0.0], [1.0, 0.6877, 0.0], [1.0, 0.8437, 0.0], [1.0, 0.966, 0.0], [0.8925, 1.0, 0.0], [0.7028, 1.0, 0.0], [0.5109, 1.0, 0.0], [0.3295, 0.9983, 0.0]] }, "rainbow": { "interpolate": true, "colors": [[0.5, 0.0, 1.0], [0.4922, 0.0123, 1.0], [0.4843, 0.0246, 0.9999], [0.4765, 0.037, 0.9998], [0.4686, 0.0493, 0.9997], [0.4608, 0.0616, 0.9995], [0.4529, 0.0739, 0.9993], [0.4451, 0.0861, 0.9991], [0.4373, 0.0984, 0.9988], [0.4294, 0.1107, 0.9985], [0.4216, 0.1229, 0.9981], [0.4137, 0.1351, 0.9977], [0.4059, 0.1473, 0.9973], [0.398, 0.1595, 0.9968], [0.3902, 0.1716, 0.9963], [0.3824, 0.1837, 0.9957], [0.3745, 0.1958, 0.9951], [0.3667, 0.2079, 0.9945], [0.3588, 0.2199, 0.9939], [0.351, 0.2319, 0.9932], [0.3431, 0.2439, 0.9924], [0.3353, 0.2558, 0.9916], [0.3275, 0.2677, 0.9908], [0.3196, 0.2796, 0.99], [0.3118, 0.2914, 0.9891], [0.3039, 0.3032, 0.9882], [0.2961, 0.3149, 0.9872], [0.2882, 0.3265, 0.9862], [0.2804, 0.3382, 0.9852], [0.2725, 0.3497, 0.9841], [0.2647, 0.3612, 0.983], [0.2569, 0.3727, 0.9818], [0.249, 0.3841, 0.9806], [0.2412, 0.3955, 0.9794], [0.2333, 0.4067, 0.9781], [0.2255, 0.418, 0.9768], [0.2176, 0.4291, 0.9755], [0.2098, 0.4402, 0.9741], [0.202, 0.4512, 0.9727], [0.1941, 0.4622, 0.9713], [0.1863, 0.4731, 0.9698], [0.1784, 0.4839, 0.9683], [0.1706, 0.4947, 0.9667], [0.1627, 0.5053, 0.9651], [0.1549, 0.5159, 0.9635], [0.1471, 0.5264, 0.9618], [0.1392, 0.5369, 0.9601], [0.1314, 0.5472, 0.9584], [0.1235, 0.5575, 0.9566], [0.1157, 0.5677, 0.9548], [0.1078, 0.5778, 0.9529], [0.1, 0.5878, 0.9511], [0.0922, 0.5977, 0.9491], [0.0843, 0.6075, 0.9472], [0.0765, 0.6173, 0.9452], [0.0686, 0.6269, 0.9432], [0.0608, 0.6365, 0.9411], [0.0529, 0.6459, 0.939], [0.0451, 0.6553, 0.9369], [0.0373, 0.6645, 0.9347], [0.0294, 0.6737, 0.9325], [0.0216, 0.6827, 0.9302], [0.0137, 0.6917, 0.928], [0.0059, 0.7005, 0.9256], [0.002, 0.7093, 0.9233], [0.0098, 0.7179, 0.9209], [0.0176, 0.7264, 0.9185], [0.0255, 0.7348, 0.916], [0.0333, 0.7431, 0.9135], [0.0412, 0.7513, 0.911], [0.049, 0.7594, 0.9085], [0.0569, 0.7674, 0.9059], [0.0647, 0.7752, 0.9032], [0.0725, 0.7829, 0.9006], [0.0804, 0.7905, 0.8979], [0.0882, 0.798, 0.8952], [0.0961, 0.8054, 0.8924], [0.1039, 0.8126, 0.8896], [0.1118, 0.8197, 0.8868], [0.1196, 0.8267, 0.8839], [0.1275, 0.8336, 0.881], [0.1353, 0.8403, 0.8781], [0.1431, 0.847, 0.8751], [0.151, 0.8534, 0.8721], [0.1588, 0.8598, 0.8691], [0.1667, 0.866, 0.866], [0.1745, 0.8721, 0.8629], [0.1824, 0.8781, 0.8598], [0.1902, 0.8839, 0.8566], [0.198, 0.8896, 0.8534], [0.2059, 0.8952, 0.8502], [0.2137, 0.9006, 0.847], [0.2216, 0.9059, 0.8437], [0.2294, 0.911, 0.8403], [0.2373, 0.916, 0.837], [0.2451, 0.9209, 0.8336], [0.2529, 0.9256, 0.8302], [0.2608, 0.9302, 0.8267], [0.2686, 0.9347, 0.8233], [0.2765, 0.939, 0.8197], [0.2843, 0.9432, 0.8162], [0.2922, 0.9472, 0.8126], [0.3, 0.9511, 0.809], [0.3078, 0.9548, 0.8054], [0.3157, 0.9584, 0.8017], [0.3235, 0.9618, 0.798], [0.3314, 0.9651, 0.7943], [0.3392, 0.9683, 0.7905], [0.3471, 0.9713, 0.7867], [0.3549, 0.9741, 0.7829], [0.3627, 0.9768, 0.7791], [0.3706, 0.9794, 0.7752], [0.3784, 0.9818, 0.7713], [0.3863, 0.9841, 0.7674], [0.3941, 0.9862, 0.7634], [0.402, 0.9882, 0.7594], [0.4098, 0.99, 0.7554], [0.4176, 0.9916, 0.7513], [0.4255, 0.9932, 0.7473], [0.4333, 0.9945, 0.7431], [0.4412, 0.9957, 0.739], [0.449, 0.9968, 0.7348], [0.4569, 0.9977, 0.7307], [0.4647, 0.9985, 0.7264], [0.4725, 0.9991, 0.7222], [0.4804, 0.9995, 0.7179], [0.4882, 0.9998, 0.7136], [0.4961, 1.0, 0.7093], [0.5039, 1.0, 0.7049], [0.5118, 0.9998, 0.7005], [0.5196, 0.9995, 0.6961], [0.5275, 0.9991, 0.6917], [0.5353, 0.9985, 0.6872], [0.5431, 0.9977, 0.6827], [0.551, 0.9968, 0.6782], [0.5588, 0.9957, 0.6737], [0.5667, 0.9945, 0.6691], [0.5745, 0.9932, 0.6645], [0.5824, 0.9916, 0.6599], [0.5902, 0.99, 0.6553], [0.598, 0.9882, 0.6506], [0.6059, 0.9862, 0.6459], [0.6137, 0.9841, 0.6412], [0.6216, 0.9818, 0.6365], [0.6294, 0.9794, 0.6317], [0.6373, 0.9768, 0.6269], [0.6451, 0.9741, 0.6221], [0.6529, 0.9713, 0.6173], [0.6608, 0.9683, 0.6124], [0.6686, 0.9651, 0.6075], [0.6765, 0.9618, 0.6026], [0.6843, 0.9584, 0.5977], [0.6922, 0.9548, 0.5928], [0.7, 0.9511, 0.5878], [0.7078, 0.9472, 0.5828], [0.7157, 0.9432, 0.5778], [0.7235, 0.939, 0.5727], [0.7314, 0.9347, 0.5677], [0.7392, 0.9302, 0.5626], [0.7471, 0.9256, 0.5575], [0.7549, 0.9209, 0.5524], [0.7627, 0.916, 0.5472], [0.7706, 0.911, 0.5421], [0.7784, 0.9059, 0.5369], [0.7863, 0.9006, 0.5317], [0.7941, 0.8952, 0.5264], [0.802, 0.8896, 0.5212], [0.8098, 0.8839, 0.5159], [0.8176, 0.8781, 0.5106], [0.8255, 0.8721, 0.5053], [0.8333, 0.866, 0.5], [0.8412, 0.8598, 0.4947], [0.849, 0.8534, 0.4893], [0.8569, 0.847, 0.4839], [0.8647, 0.8403, 0.4785], [0.8725, 0.8336, 0.4731], [0.8804, 0.8267, 0.4677], [0.8882, 0.8197, 0.4622], [0.8961, 0.8126, 0.4567], [0.9039, 0.8054, 0.4512], [0.9118, 0.798, 0.4457], [0.9196, 0.7905, 0.4402], [0.9275, 0.7829, 0.4347], [0.9353, 0.7752, 0.4291], [0.9431, 0.7674, 0.4235], [0.951, 0.7594, 0.418], [0.9588, 0.7513, 0.4124], [0.9667, 0.7431, 0.4067], [0.9745, 0.7348, 0.4011], [0.9824, 0.7264, 0.3955], [0.9902, 0.7179, 0.3898], [0.998, 0.7093, 0.3841], [1.0, 0.7005, 0.3784], [1.0, 0.6917, 0.3727], [1.0, 0.6827, 0.367], [1.0, 0.6737, 0.3612], [1.0, 0.6645, 0.3555], [1.0, 0.6553, 0.3497], [1.0, 0.6459, 0.3439], [1.0, 0.6365, 0.3382], [1.0, 0.6269, 0.3324], [1.0, 0.6173, 0.3265], [1.0, 0.6075, 0.3207], [1.0, 0.5977, 0.3149], [1.0, 0.5878, 0.309], [1.0, 0.5778, 0.3032], [1.0, 0.5677, 0.2973], [1.0, 0.5575, 0.2914], [1.0, 0.5472, 0.2855], [1.0, 0.5369, 0.2796], [1.0, 0.5264, 0.2737], [1.0, 0.5159, 0.2677], [1.0, 0.5053, 0.2618], [1.0, 0.4947, 0.2558], [1.0, 0.4839, 0.2499], [1.0, 0.4731, 0.2439], [1.0, 0.4622, 0.2379], [1.0, 0.4512, 0.2319], [1.0, 0.4402, 0.226], [1.0, 0.4291, 0.2199], [1.0, 0.418, 0.2139], [1.0, 0.4067, 0.2079], [1.0, 0.3955, 0.2019], [1.0, 0.3841, 0.1958], [1.0, 0.3727, 0.1898], [1.0, 0.3612, 0.1837], [1.0, 0.3497, 0.1777], [1.0, 0.3382, 0.1716], [1.0, 0.3265, 0.1656], [1.0, 0.3149, 0.1595], [1.0, 0.3032, 0.1534], [1.0, 0.2914, 0.1473], [1.0, 0.2796, 0.1412], [1.0, 0.2677, 0.1351], [1.0, 0.2558, 0.129], [1.0, 0.2439, 0.1229], [1.0, 0.2319, 0.1168], [1.0, 0.2199, 0.1107], [1.0, 0.2079, 0.1045], [1.0, 0.1958, 0.0984], [1.0, 0.1837, 0.0923], [1.0, 0.1716, 0.0861], [1.0, 0.1595, 0.08], [1.0, 0.1473, 0.0739], [1.0, 0.1351, 0.0677], [1.0, 0.1229, 0.0616], [1.0, 0.1107, 0.0554], [1.0, 0.0984, 0.0493], [1.0, 0.0861, 0.0431], [1.0, 0.0739, 0.037], [1.0, 0.0616, 0.0308], [1.0, 0.0493, 0.0246], [1.0, 0.037, 0.0185], [1.0, 0.0246, 0.0123], [1.0, 0.0123, 0.0062], [1.0, 0.0, 0.0]] }, "seismic": { "interpolate": true, "colors": [[0.0, 0.0, 0.3], [0.0, 0.0, 0.311], [0.0, 0.0, 0.322], [0.0, 0.0, 0.3329], [0.0, 0.0, 0.3439], [0.0, 0.0, 0.3549], [0.0, 0.0, 0.3659], [0.0, 0.0, 0.3769], [0.0, 0.0, 0.3878], [0.0, 0.0, 0.3988], [0.0, 0.0, 0.4098], [0.0, 0.0, 0.4208], [0.0, 0.0, 0.4318], [0.0, 0.0, 0.4427], [0.0, 0.0, 0.4537], [0.0, 0.0, 0.4647], [0.0, 0.0, 0.4757], [0.0, 0.0, 0.4867], [0.0, 0.0, 0.4976], [0.0, 0.0, 0.5086], [0.0, 0.0, 0.5196], [0.0, 0.0, 0.5306], [0.0, 0.0, 0.5416], [0.0, 0.0, 0.5525], [0.0, 0.0, 0.5635], [0.0, 0.0, 0.5745], [0.0, 0.0, 0.5855], [0.0, 0.0, 0.5965], [0.0, 0.0, 0.6075], [0.0, 0.0, 0.6184], [0.0, 0.0, 0.6294], [0.0, 0.0, 0.6404], [0.0, 0.0, 0.6514], [0.0, 0.0, 0.6624], [0.0, 0.0, 0.6733], [0.0, 0.0, 0.6843], [0.0, 0.0, 0.6953], [0.0, 0.0, 0.7063], [0.0, 0.0, 0.7173], [0.0, 0.0, 0.7282], [0.0, 0.0, 0.7392], [0.0, 0.0, 0.7502], [0.0, 0.0, 0.7612], [0.0, 0.0, 0.7722], [0.0, 0.0, 0.7831], [0.0, 0.0, 0.7941], [0.0, 0.0, 0.8051], [0.0, 0.0, 0.8161], [0.0, 0.0, 0.8271], [0.0, 0.0, 0.838], [0.0, 0.0, 0.849], [0.0, 0.0, 0.86], [0.0, 0.0, 0.871], [0.0, 0.0, 0.882], [0.0, 0.0, 0.8929], [0.0, 0.0, 0.9039], [0.0, 0.0, 0.9149], [0.0, 0.0, 0.9259], [0.0, 0.0, 0.9369], [0.0, 0.0, 0.9478], [0.0, 0.0, 0.9588], [0.0, 0.0, 0.9698], [0.0, 0.0, 0.9808], [0.0, 0.0, 0.9918], [0.0039, 0.0039, 1.0], [0.0196, 0.0196, 1.0], [0.0353, 0.0353, 1.0], [0.051, 0.051, 1.0], [0.0667, 0.0667, 1.0], [0.0824, 0.0824, 1.0], [0.098, 0.098, 1.0], [0.1137, 0.1137, 1.0], [0.1294, 0.1294, 1.0], [0.1451, 0.1451, 1.0], [0.1608, 0.1608, 1.0], [0.1765, 0.1765, 1.0], [0.1922, 0.1922, 1.0], [0.2078, 0.2078, 1.0], [0.2235, 0.2235, 1.0], [0.2392, 0.2392, 1.0], [0.2549, 0.2549, 1.0], [0.2706, 0.2706, 1.0], [0.2863, 0.2863, 1.0], [0.302, 0.302, 1.0], [0.3176, 0.3176, 1.0], [0.3333, 0.3333, 1.0], [0.349, 0.349, 1.0], [0.3647, 0.3647, 1.0], [0.3804, 0.3804, 1.0], [0.3961, 0.3961, 1.0], [0.4118, 0.4118, 1.0], [0.4275, 0.4275, 1.0], [0.4431, 0.4431, 1.0], [0.4588, 0.4588, 1.0], [0.4745, 0.4745, 1.0], [0.4902, 0.4902, 1.0], [0.5059, 0.5059, 1.0], [0.5216, 0.5216, 1.0], [0.5373, 0.5373, 1.0], [0.5529, 0.5529, 1.0], [0.5686, 0.5686, 1.0], [0.5843, 0.5843, 1.0], [0.6, 0.6, 1.0], [0.6157, 0.6157, 1.0], [0.6314, 0.6314, 1.0], [0.6471, 0.6471, 1.0], [0.6627, 0.6627, 1.0], [0.6784, 0.6784, 1.0], [0.6941, 0.6941, 1.0], [0.7098, 0.7098, 1.0], [0.7255, 0.7255, 1.0], [0.7412, 0.7412, 1.0], [0.7569, 0.7569, 1.0], [0.7725, 0.7725, 1.0], [0.7882, 0.7882, 1.0], [0.8039, 0.8039, 1.0], [0.8196, 0.8196, 1.0], [0.8353, 0.8353, 1.0], [0.851, 0.851, 1.0], [0.8667, 0.8667, 1.0], [0.8824, 0.8824, 1.0], [0.898, 0.898, 1.0], [0.9137, 0.9137, 1.0], [0.9294, 0.9294, 1.0], [0.9451, 0.9451, 1.0], [0.9608, 0.9608, 1.0], [0.9765, 0.9765, 1.0], [0.9922, 0.9922, 1.0], [1.0, 0.9922, 0.9922], [1.0, 0.9765, 0.9765], [1.0, 0.9608, 0.9608], [1.0, 0.9451, 0.9451], [1.0, 0.9294, 0.9294], [1.0, 0.9137, 0.9137], [1.0, 0.898, 0.898], [1.0, 0.8824, 0.8824], [1.0, 0.8667, 0.8667], [1.0, 0.851, 0.851], [1.0, 0.8353, 0.8353], [1.0, 0.8196, 0.8196], [1.0, 0.8039, 0.8039], [1.0, 0.7882, 0.7882], [1.0, 0.7725, 0.7725], [1.0, 0.7569, 0.7569], [1.0, 0.7412, 0.7412], [1.0, 0.7255, 0.7255], [1.0, 0.7098, 0.7098], [1.0, 0.6941, 0.6941], [1.0, 0.6784, 0.6784], [1.0, 0.6627, 0.6627], [1.0, 0.6471, 0.6471], [1.0, 0.6314, 0.6314], [1.0, 0.6157, 0.6157], [1.0, 0.6, 0.6], [1.0, 0.5843, 0.5843], [1.0, 0.5686, 0.5686], [1.0, 0.5529, 0.5529], [1.0, 0.5373, 0.5373], [1.0, 0.5216, 0.5216], [1.0, 0.5059, 0.5059], [1.0, 0.4902, 0.4902], [1.0, 0.4745, 0.4745], [1.0, 0.4588, 0.4588], [1.0, 0.4431, 0.4431], [1.0, 0.4275, 0.4275], [1.0, 0.4118, 0.4118], [1.0, 0.3961, 0.3961], [1.0, 0.3804, 0.3804], [1.0, 0.3647, 0.3647], [1.0, 0.349, 0.349], [1.0, 0.3333, 0.3333], [1.0, 0.3176, 0.3176], [1.0, 0.302, 0.302], [1.0, 0.2863, 0.2863], [1.0, 0.2706, 0.2706], [1.0, 0.2549, 0.2549], [1.0, 0.2392, 0.2392], [1.0, 0.2235, 0.2235], [1.0, 0.2078, 0.2078], [1.0, 0.1922, 0.1922], [1.0, 0.1765, 0.1765], [1.0, 0.1608, 0.1608], [1.0, 0.1451, 0.1451], [1.0, 0.1294, 0.1294], [1.0, 0.1137, 0.1137], [1.0, 0.098, 0.098], [1.0, 0.0824, 0.0824], [1.0, 0.0667, 0.0667], [1.0, 0.051, 0.051], [1.0, 0.0353, 0.0353], [1.0, 0.0196, 0.0196], [1.0, 0.0039, 0.0039], [0.9941, 0.0, 0.0], [0.9863, 0.0, 0.0], [0.9784, 0.0, 0.0], [0.9706, 0.0, 0.0], [0.9627, 0.0, 0.0], [0.9549, 0.0, 0.0], [0.9471, 0.0, 0.0], [0.9392, 0.0, 0.0], [0.9314, 0.0, 0.0], [0.9235, 0.0, 0.0], [0.9157, 0.0, 0.0], [0.9078, 0.0, 0.0], [0.9, 0.0, 0.0], [0.8922, 0.0, 0.0], [0.8843, 0.0, 0.0], [0.8765, 0.0, 0.0], [0.8686, 0.0, 0.0], [0.8608, 0.0, 0.0], [0.8529, 0.0, 0.0], [0.8451, 0.0, 0.0], [0.8373, 0.0, 0.0], [0.8294, 0.0, 0.0], [0.8216, 0.0, 0.0], [0.8137, 0.0, 0.0], [0.8059, 0.0, 0.0], [0.798, 0.0, 0.0], [0.7902, 0.0, 0.0], [0.7824, 0.0, 0.0], [0.7745, 0.0, 0.0], [0.7667, 0.0, 0.0], [0.7588, 0.0, 0.0], [0.751, 0.0, 0.0], [0.7431, 0.0, 0.0], [0.7353, 0.0, 0.0], [0.7275, 0.0, 0.0], [0.7196, 0.0, 0.0], [0.7118, 0.0, 0.0], [0.7039, 0.0, 0.0], [0.6961, 0.0, 0.0], [0.6882, 0.0, 0.0], [0.6804, 0.0, 0.0], [0.6725, 0.0, 0.0], [0.6647, 0.0, 0.0], [0.6569, 0.0, 0.0], [0.649, 0.0, 0.0], [0.6412, 0.0, 0.0], [0.6333, 0.0, 0.0], [0.6255, 0.0, 0.0], [0.6176, 0.0, 0.0], [0.6098, 0.0, 0.0], [0.602, 0.0, 0.0], [0.5941, 0.0, 0.0], [0.5863, 0.0, 0.0], [0.5784, 0.0, 0.0], [0.5706, 0.0, 0.0], [0.5627, 0.0, 0.0], [0.5549, 0.0, 0.0], [0.5471, 0.0, 0.0], [0.5392, 0.0, 0.0], [0.5314, 0.0, 0.0], [0.5235, 0.0, 0.0], [0.5157, 0.0, 0.0], [0.5078, 0.0, 0.0], [0.5, 0.0, 0.0]] }, "spring": { "interpolate": true, "colors": [[1.0, 0.0, 1.0], [1.0, 0.0039, 0.9961], [1.0, 0.0078, 0.9922], [1.0, 0.0118, 0.9882], [1.0, 0.0157, 0.9843], [1.0, 0.0196, 0.9804], [1.0, 0.0235, 0.9765], [1.0, 0.0275, 0.9725], [1.0, 0.0314, 0.9686], [1.0, 0.0353, 0.9647], [1.0, 0.0392, 0.9608], [1.0, 0.0431, 0.9569], [1.0, 0.0471, 0.9529], [1.0, 0.051, 0.949], [1.0, 0.0549, 0.9451], [1.0, 0.0588, 0.9412], [1.0, 0.0627, 0.9373], [1.0, 0.0667, 0.9333], [1.0, 0.0706, 0.9294], [1.0, 0.0745, 0.9255], [1.0, 0.0784, 0.9216], [1.0, 0.0824, 0.9176], [1.0, 0.0863, 0.9137], [1.0, 0.0902, 0.9098], [1.0, 0.0941, 0.9059], [1.0, 0.098, 0.902], [1.0, 0.102, 0.898], [1.0, 0.1059, 0.8941], [1.0, 0.1098, 0.8902], [1.0, 0.1137, 0.8863], [1.0, 0.1176, 0.8824], [1.0, 0.1216, 0.8784], [1.0, 0.1255, 0.8745], [1.0, 0.1294, 0.8706], [1.0, 0.1333, 0.8667], [1.0, 0.1373, 0.8627], [1.0, 0.1412, 0.8588], [1.0, 0.1451, 0.8549], [1.0, 0.149, 0.851], [1.0, 0.1529, 0.8471], [1.0, 0.1569, 0.8431], [1.0, 0.1608, 0.8392], [1.0, 0.1647, 0.8353], [1.0, 0.1686, 0.8314], [1.0, 0.1725, 0.8275], [1.0, 0.1765, 0.8235], [1.0, 0.1804, 0.8196], [1.0, 0.1843, 0.8157], [1.0, 0.1882, 0.8118], [1.0, 0.1922, 0.8078], [1.0, 0.1961, 0.8039], [1.0, 0.2, 0.8], [1.0, 0.2039, 0.7961], [1.0, 0.2078, 0.7922], [1.0, 0.2118, 0.7882], [1.0, 0.2157, 0.7843], [1.0, 0.2196, 0.7804], [1.0, 0.2235, 0.7765], [1.0, 0.2275, 0.7725], [1.0, 0.2314, 0.7686], [1.0, 0.2353, 0.7647], [1.0, 0.2392, 0.7608], [1.0, 0.2431, 0.7569], [1.0, 0.2471, 0.7529], [1.0, 0.251, 0.749], [1.0, 0.2549, 0.7451], [1.0, 0.2588, 0.7412], [1.0, 0.2627, 0.7373], [1.0, 0.2667, 0.7333], [1.0, 0.2706, 0.7294], [1.0, 0.2745, 0.7255], [1.0, 0.2784, 0.7216], [1.0, 0.2824, 0.7176], [1.0, 0.2863, 0.7137], [1.0, 0.2902, 0.7098], [1.0, 0.2941, 0.7059], [1.0, 0.298, 0.702], [1.0, 0.302, 0.698], [1.0, 0.3059, 0.6941], [1.0, 0.3098, 0.6902], [1.0, 0.3137, 0.6863], [1.0, 0.3176, 0.6824], [1.0, 0.3216, 0.6784], [1.0, 0.3255, 0.6745], [1.0, 0.3294, 0.6706], [1.0, 0.3333, 0.6667], [1.0, 0.3373, 0.6627], [1.0, 0.3412, 0.6588], [1.0, 0.3451, 0.6549], [1.0, 0.349, 0.651], [1.0, 0.3529, 0.6471], [1.0, 0.3569, 0.6431], [1.0, 0.3608, 0.6392], [1.0, 0.3647, 0.6353], [1.0, 0.3686, 0.6314], [1.0, 0.3725, 0.6275], [1.0, 0.3765, 0.6235], [1.0, 0.3804, 0.6196], [1.0, 0.3843, 0.6157], [1.0, 0.3882, 0.6118], [1.0, 0.3922, 0.6078], [1.0, 0.3961, 0.6039], [1.0, 0.4, 0.6], [1.0, 0.4039, 0.5961], [1.0, 0.4078, 0.5922], [1.0, 0.4118, 0.5882], [1.0, 0.4157, 0.5843], [1.0, 0.4196, 0.5804], [1.0, 0.4235, 0.5765], [1.0, 0.4275, 0.5725], [1.0, 0.4314, 0.5686], [1.0, 0.4353, 0.5647], [1.0, 0.4392, 0.5608], [1.0, 0.4431, 0.5569], [1.0, 0.4471, 0.5529], [1.0, 0.451, 0.549], [1.0, 0.4549, 0.5451], [1.0, 0.4588, 0.5412], [1.0, 0.4627, 0.5373], [1.0, 0.4667, 0.5333], [1.0, 0.4706, 0.5294], [1.0, 0.4745, 0.5255], [1.0, 0.4784, 0.5216], [1.0, 0.4824, 0.5176], [1.0, 0.4863, 0.5137], [1.0, 0.4902, 0.5098], [1.0, 0.4941, 0.5059], [1.0, 0.498, 0.502], [1.0, 0.502, 0.498], [1.0, 0.5059, 0.4941], [1.0, 0.5098, 0.4902], [1.0, 0.5137, 0.4863], [1.0, 0.5176, 0.4824], [1.0, 0.5216, 0.4784], [1.0, 0.5255, 0.4745], [1.0, 0.5294, 0.4706], [1.0, 0.5333, 0.4667], [1.0, 0.5373, 0.4627], [1.0, 0.5412, 0.4588], [1.0, 0.5451, 0.4549], [1.0, 0.549, 0.451], [1.0, 0.5529, 0.4471], [1.0, 0.5569, 0.4431], [1.0, 0.5608, 0.4392], [1.0, 0.5647, 0.4353], [1.0, 0.5686, 0.4314], [1.0, 0.5725, 0.4275], [1.0, 0.5765, 0.4235], [1.0, 0.5804, 0.4196], [1.0, 0.5843, 0.4157], [1.0, 0.5882, 0.4118], [1.0, 0.5922, 0.4078], [1.0, 0.5961, 0.4039], [1.0, 0.6, 0.4], [1.0, 0.6039, 0.3961], [1.0, 0.6078, 0.3922], [1.0, 0.6118, 0.3882], [1.0, 0.6157, 0.3843], [1.0, 0.6196, 0.3804], [1.0, 0.6235, 0.3765], [1.0, 0.6275, 0.3725], [1.0, 0.6314, 0.3686], [1.0, 0.6353, 0.3647], [1.0, 0.6392, 0.3608], [1.0, 0.6431, 0.3569], [1.0, 0.6471, 0.3529], [1.0, 0.651, 0.349], [1.0, 0.6549, 0.3451], [1.0, 0.6588, 0.3412], [1.0, 0.6627, 0.3373], [1.0, 0.6667, 0.3333], [1.0, 0.6706, 0.3294], [1.0, 0.6745, 0.3255], [1.0, 0.6784, 0.3216], [1.0, 0.6824, 0.3176], [1.0, 0.6863, 0.3137], [1.0, 0.6902, 0.3098], [1.0, 0.6941, 0.3059], [1.0, 0.698, 0.302], [1.0, 0.702, 0.298], [1.0, 0.7059, 0.2941], [1.0, 0.7098, 0.2902], [1.0, 0.7137, 0.2863], [1.0, 0.7176, 0.2824], [1.0, 0.7216, 0.2784], [1.0, 0.7255, 0.2745], [1.0, 0.7294, 0.2706], [1.0, 0.7333, 0.2667], [1.0, 0.7373, 0.2627], [1.0, 0.7412, 0.2588], [1.0, 0.7451, 0.2549], [1.0, 0.749, 0.251], [1.0, 0.7529, 0.2471], [1.0, 0.7569, 0.2431], [1.0, 0.7608, 0.2392], [1.0, 0.7647, 0.2353], [1.0, 0.7686, 0.2314], [1.0, 0.7725, 0.2275], [1.0, 0.7765, 0.2235], [1.0, 0.7804, 0.2196], [1.0, 0.7843, 0.2157], [1.0, 0.7882, 0.2118], [1.0, 0.7922, 0.2078], [1.0, 0.7961, 0.2039], [1.0, 0.8, 0.2], [1.0, 0.8039, 0.1961], [1.0, 0.8078, 0.1922], [1.0, 0.8118, 0.1882], [1.0, 0.8157, 0.1843], [1.0, 0.8196, 0.1804], [1.0, 0.8235, 0.1765], [1.0, 0.8275, 0.1725], [1.0, 0.8314, 0.1686], [1.0, 0.8353, 0.1647], [1.0, 0.8392, 0.1608], [1.0, 0.8431, 0.1569], [1.0, 0.8471, 0.1529], [1.0, 0.851, 0.149], [1.0, 0.8549, 0.1451], [1.0, 0.8588, 0.1412], [1.0, 0.8627, 0.1373], [1.0, 0.8667, 0.1333], [1.0, 0.8706, 0.1294], [1.0, 0.8745, 0.1255], [1.0, 0.8784, 0.1216], [1.0, 0.8824, 0.1176], [1.0, 0.8863, 0.1137], [1.0, 0.8902, 0.1098], [1.0, 0.8941, 0.1059], [1.0, 0.898, 0.102], [1.0, 0.902, 0.098], [1.0, 0.9059, 0.0941], [1.0, 0.9098, 0.0902], [1.0, 0.9137, 0.0863], [1.0, 0.9176, 0.0824], [1.0, 0.9216, 0.0784], [1.0, 0.9255, 0.0745], [1.0, 0.9294, 0.0706], [1.0, 0.9333, 0.0667], [1.0, 0.9373, 0.0627], [1.0, 0.9412, 0.0588], [1.0, 0.9451, 0.0549], [1.0, 0.949, 0.051], [1.0, 0.9529, 0.0471], [1.0, 0.9569, 0.0431], [1.0, 0.9608, 0.0392], [1.0, 0.9647, 0.0353], [1.0, 0.9686, 0.0314], [1.0, 0.9725, 0.0275], [1.0, 0.9765, 0.0235], [1.0, 0.9804, 0.0196], [1.0, 0.9843, 0.0157], [1.0, 0.9882, 0.0118], [1.0, 0.9922, 0.0078], [1.0, 0.9961, 0.0039], [1.0, 1.0, 0.0]] }, "summer": { "interpolate": true, "colors": [[0.0, 0.5, 0.4], [0.0039, 0.502, 0.4], [0.0078, 0.5039, 0.4], [0.0118, 0.5059, 0.4], [0.0157, 0.5078, 0.4], [0.0196, 0.5098, 0.4], [0.0235, 0.5118, 0.4], [0.0275, 0.5137, 0.4], [0.0314, 0.5157, 0.4], [0.0353, 0.5176, 0.4], [0.0392, 0.5196, 0.4], [0.0431, 0.5216, 0.4], [0.0471, 0.5235, 0.4], [0.051, 0.5255, 0.4], [0.0549, 0.5275, 0.4], [0.0588, 0.5294, 0.4], [0.0627, 0.5314, 0.4], [0.0667, 0.5333, 0.4], [0.0706, 0.5353, 0.4], [0.0745, 0.5373, 0.4], [0.0784, 0.5392, 0.4], [0.0824, 0.5412, 0.4], [0.0863, 0.5431, 0.4], [0.0902, 0.5451, 0.4], [0.0941, 0.5471, 0.4], [0.098, 0.549, 0.4], [0.102, 0.551, 0.4], [0.1059, 0.5529, 0.4], [0.1098, 0.5549, 0.4], [0.1137, 0.5569, 0.4], [0.1176, 0.5588, 0.4], [0.1216, 0.5608, 0.4], [0.1255, 0.5627, 0.4], [0.1294, 0.5647, 0.4], [0.1333, 0.5667, 0.4], [0.1373, 0.5686, 0.4], [0.1412, 0.5706, 0.4], [0.1451, 0.5725, 0.4], [0.149, 0.5745, 0.4], [0.1529, 0.5765, 0.4], [0.1569, 0.5784, 0.4], [0.1608, 0.5804, 0.4], [0.1647, 0.5824, 0.4], [0.1686, 0.5843, 0.4], [0.1725, 0.5863, 0.4], [0.1765, 0.5882, 0.4], [0.1804, 0.5902, 0.4], [0.1843, 0.5922, 0.4], [0.1882, 0.5941, 0.4], [0.1922, 0.5961, 0.4], [0.1961, 0.598, 0.4], [0.2, 0.6, 0.4], [0.2039, 0.602, 0.4], [0.2078, 0.6039, 0.4], [0.2118, 0.6059, 0.4], [0.2157, 0.6078, 0.4], [0.2196, 0.6098, 0.4], [0.2235, 0.6118, 0.4], [0.2275, 0.6137, 0.4], [0.2314, 0.6157, 0.4], [0.2353, 0.6176, 0.4], [0.2392, 0.6196, 0.4], [0.2431, 0.6216, 0.4], [0.2471, 0.6235, 0.4], [0.251, 0.6255, 0.4], [0.2549, 0.6275, 0.4], [0.2588, 0.6294, 0.4], [0.2627, 0.6314, 0.4], [0.2667, 0.6333, 0.4], [0.2706, 0.6353, 0.4], [0.2745, 0.6373, 0.4], [0.2784, 0.6392, 0.4], [0.2824, 0.6412, 0.4], [0.2863, 0.6431, 0.4], [0.2902, 0.6451, 0.4], [0.2941, 0.6471, 0.4], [0.298, 0.649, 0.4], [0.302, 0.651, 0.4], [0.3059, 0.6529, 0.4], [0.3098, 0.6549, 0.4], [0.3137, 0.6569, 0.4], [0.3176, 0.6588, 0.4], [0.3216, 0.6608, 0.4], [0.3255, 0.6627, 0.4], [0.3294, 0.6647, 0.4], [0.3333, 0.6667, 0.4], [0.3373, 0.6686, 0.4], [0.3412, 0.6706, 0.4], [0.3451, 0.6725, 0.4], [0.349, 0.6745, 0.4], [0.3529, 0.6765, 0.4], [0.3569, 0.6784, 0.4], [0.3608, 0.6804, 0.4], [0.3647, 0.6824, 0.4], [0.3686, 0.6843, 0.4], [0.3725, 0.6863, 0.4], [0.3765, 0.6882, 0.4], [0.3804, 0.6902, 0.4], [0.3843, 0.6922, 0.4], [0.3882, 0.6941, 0.4], [0.3922, 0.6961, 0.4], [0.3961, 0.698, 0.4], [0.4, 0.7, 0.4], [0.4039, 0.702, 0.4], [0.4078, 0.7039, 0.4], [0.4118, 0.7059, 0.4], [0.4157, 0.7078, 0.4], [0.4196, 0.7098, 0.4], [0.4235, 0.7118, 0.4], [0.4275, 0.7137, 0.4], [0.4314, 0.7157, 0.4], [0.4353, 0.7176, 0.4], [0.4392, 0.7196, 0.4], [0.4431, 0.7216, 0.4], [0.4471, 0.7235, 0.4], [0.451, 0.7255, 0.4], [0.4549, 0.7275, 0.4], [0.4588, 0.7294, 0.4], [0.4627, 0.7314, 0.4], [0.4667, 0.7333, 0.4], [0.4706, 0.7353, 0.4], [0.4745, 0.7373, 0.4], [0.4784, 0.7392, 0.4], [0.4824, 0.7412, 0.4], [0.4863, 0.7431, 0.4], [0.4902, 0.7451, 0.4], [0.4941, 0.7471, 0.4], [0.498, 0.749, 0.4], [0.502, 0.751, 0.4], [0.5059, 0.7529, 0.4], [0.5098, 0.7549, 0.4], [0.5137, 0.7569, 0.4], [0.5176, 0.7588, 0.4], [0.5216, 0.7608, 0.4], [0.5255, 0.7627, 0.4], [0.5294, 0.7647, 0.4], [0.5333, 0.7667, 0.4], [0.5373, 0.7686, 0.4], [0.5412, 0.7706, 0.4], [0.5451, 0.7725, 0.4], [0.549, 0.7745, 0.4], [0.5529, 0.7765, 0.4], [0.5569, 0.7784, 0.4], [0.5608, 0.7804, 0.4], [0.5647, 0.7824, 0.4], [0.5686, 0.7843, 0.4], [0.5725, 0.7863, 0.4], [0.5765, 0.7882, 0.4], [0.5804, 0.7902, 0.4], [0.5843, 0.7922, 0.4], [0.5882, 0.7941, 0.4], [0.5922, 0.7961, 0.4], [0.5961, 0.798, 0.4], [0.6, 0.8, 0.4], [0.6039, 0.802, 0.4], [0.6078, 0.8039, 0.4], [0.6118, 0.8059, 0.4], [0.6157, 0.8078, 0.4], [0.6196, 0.8098, 0.4], [0.6235, 0.8118, 0.4], [0.6275, 0.8137, 0.4], [0.6314, 0.8157, 0.4], [0.6353, 0.8176, 0.4], [0.6392, 0.8196, 0.4], [0.6431, 0.8216, 0.4], [0.6471, 0.8235, 0.4], [0.651, 0.8255, 0.4], [0.6549, 0.8275, 0.4], [0.6588, 0.8294, 0.4], [0.6627, 0.8314, 0.4], [0.6667, 0.8333, 0.4], [0.6706, 0.8353, 0.4], [0.6745, 0.8373, 0.4], [0.6784, 0.8392, 0.4], [0.6824, 0.8412, 0.4], [0.6863, 0.8431, 0.4], [0.6902, 0.8451, 0.4], [0.6941, 0.8471, 0.4], [0.698, 0.849, 0.4], [0.702, 0.851, 0.4], [0.7059, 0.8529, 0.4], [0.7098, 0.8549, 0.4], [0.7137, 0.8569, 0.4], [0.7176, 0.8588, 0.4], [0.7216, 0.8608, 0.4], [0.7255, 0.8627, 0.4], [0.7294, 0.8647, 0.4], [0.7333, 0.8667, 0.4], [0.7373, 0.8686, 0.4], [0.7412, 0.8706, 0.4], [0.7451, 0.8725, 0.4], [0.749, 0.8745, 0.4], [0.7529, 0.8765, 0.4], [0.7569, 0.8784, 0.4], [0.7608, 0.8804, 0.4], [0.7647, 0.8824, 0.4], [0.7686, 0.8843, 0.4], [0.7725, 0.8863, 0.4], [0.7765, 0.8882, 0.4], [0.7804, 0.8902, 0.4], [0.7843, 0.8922, 0.4], [0.7882, 0.8941, 0.4], [0.7922, 0.8961, 0.4], [0.7961, 0.898, 0.4], [0.8, 0.9, 0.4], [0.8039, 0.902, 0.4], [0.8078, 0.9039, 0.4], [0.8118, 0.9059, 0.4], [0.8157, 0.9078, 0.4], [0.8196, 0.9098, 0.4], [0.8235, 0.9118, 0.4], [0.8275, 0.9137, 0.4], [0.8314, 0.9157, 0.4], [0.8353, 0.9176, 0.4], [0.8392, 0.9196, 0.4], [0.8431, 0.9216, 0.4], [0.8471, 0.9235, 0.4], [0.851, 0.9255, 0.4], [0.8549, 0.9275, 0.4], [0.8588, 0.9294, 0.4], [0.8627, 0.9314, 0.4], [0.8667, 0.9333, 0.4], [0.8706, 0.9353, 0.4], [0.8745, 0.9373, 0.4], [0.8784, 0.9392, 0.4], [0.8824, 0.9412, 0.4], [0.8863, 0.9431, 0.4], [0.8902, 0.9451, 0.4], [0.8941, 0.9471, 0.4], [0.898, 0.949, 0.4], [0.902, 0.951, 0.4], [0.9059, 0.9529, 0.4], [0.9098, 0.9549, 0.4], [0.9137, 0.9569, 0.4], [0.9176, 0.9588, 0.4], [0.9216, 0.9608, 0.4], [0.9255, 0.9627, 0.4], [0.9294, 0.9647, 0.4], [0.9333, 0.9667, 0.4], [0.9373, 0.9686, 0.4], [0.9412, 0.9706, 0.4], [0.9451, 0.9725, 0.4], [0.949, 0.9745, 0.4], [0.9529, 0.9765, 0.4], [0.9569, 0.9784, 0.4], [0.9608, 0.9804, 0.4], [0.9647, 0.9824, 0.4], [0.9686, 0.9843, 0.4], [0.9725, 0.9863, 0.4], [0.9765, 0.9882, 0.4], [0.9804, 0.9902, 0.4], [0.9843, 0.9922, 0.4], [0.9882, 0.9941, 0.4], [0.9922, 0.9961, 0.4], [0.9961, 0.998, 0.4], [1.0, 1.0, 0.4]] }, "tab10": { "interpolate": false, "colors": [[0.1216, 0.4667, 0.7059], [1.0, 0.498, 0.0549], [0.1725, 0.6275, 0.1725], [0.8392, 0.1529, 0.1569], [0.5804, 0.4039, 0.7412], [0.549, 0.3373, 0.2941], [0.8902, 0.4667, 0.7608], [0.498, 0.498, 0.498], [0.7373, 0.7412, 0.1333], [0.0902, 0.7451, 0.8118]] }, "tab20": { "interpolate": false, "colors": [[0.1216, 0.4667, 0.7059], [0.6824, 0.7804, 0.9098], [1.0, 0.498, 0.0549], [1.0, 0.7333, 0.4706], [0.1725, 0.6275, 0.1725], [0.5961, 0.8745, 0.5412], [0.8392, 0.1529, 0.1569], [1.0, 0.5961, 0.5882], [0.5804, 0.4039, 0.7412], [0.7725, 0.6902, 0.8353], [0.549, 0.3373, 0.2941], [0.7686, 0.6118, 0.5804], [0.8902, 0.4667, 0.7608], [0.9686, 0.7137, 0.8235], [0.498, 0.498, 0.498], [0.7804, 0.7804, 0.7804], [0.7373, 0.7412, 0.1333], [0.8588, 0.8588, 0.5529], [0.0902, 0.7451, 0.8118], [0.6196, 0.8549, 0.898]] }, "tab20b": { "interpolate": false, "colors": [[0.2235, 0.2314, 0.4745], [0.3216, 0.3294, 0.6392], [0.4196, 0.4314, 0.8118], [0.6118, 0.6196, 0.8706], [0.3882, 0.4745, 0.2235], [0.549, 0.6353, 0.3216], [0.7098, 0.8118, 0.4196], [0.8078, 0.8588, 0.6118], [0.549, 0.4275, 0.1922], [0.7412, 0.6196, 0.2235], [0.9059, 0.7294, 0.3216], [0.9059, 0.7961, 0.5804], [0.5176, 0.2353, 0.2235], [0.6784, 0.2863, 0.2902], [0.8392, 0.3804, 0.4196], [0.9059, 0.5882, 0.6118], [0.4824, 0.2549, 0.451], [0.6471, 0.3176, 0.5804], [0.8078, 0.4275, 0.7412], [0.8706, 0.6196, 0.8392]] }, "tab20c": { "interpolate": false, "colors": [[0.1922, 0.5098, 0.7412], [0.4196, 0.6824, 0.8392], [0.6196, 0.7922, 0.8824], [0.7765, 0.8588, 0.9373], [0.902, 0.3333, 0.051], [0.9922, 0.5529, 0.2353], [0.9922, 0.6824, 0.4196], [0.9922, 0.8157, 0.6353], [0.1922, 0.6392, 0.3294], [0.4549, 0.7686, 0.4627], [0.6314, 0.851, 0.6078], [0.7804, 0.9137, 0.7529], [0.4588, 0.4196, 0.6941], [0.6196, 0.6039, 0.7843], [0.7373, 0.7412, 0.8627], [0.8549, 0.8549, 0.9216], [0.3882, 0.3882, 0.3882], [0.5882, 0.5882, 0.5882], [0.7412, 0.7412, 0.7412], [0.851, 0.851, 0.851]] }, "terrain": { "interpolate": true, "colors": [[0.2, 0.2, 0.6], [0.1948, 0.2105, 0.6105], [0.1895, 0.2209, 0.6209], [0.1843, 0.2314, 0.6314], [0.1791, 0.2418, 0.6418], [0.1739, 0.2523, 0.6523], [0.1686, 0.2627, 0.6627], [0.1634, 0.2732, 0.6732], [0.1582, 0.2837, 0.6837], [0.1529, 0.2941, 0.6941], [0.1477, 0.3046, 0.7046], [0.1425, 0.315, 0.715], [0.1373, 0.3255, 0.7255], [0.132, 0.3359, 0.7359], [0.1268, 0.3464, 0.7464], [0.1216, 0.3569, 0.7569], [0.1163, 0.3673, 0.7673], [0.1111, 0.3778, 0.7778], [0.1059, 0.3882, 0.7882], [0.1007, 0.3987, 0.7987], [0.0954, 0.4092, 0.8092], [0.0902, 0.4196, 0.8196], [0.085, 0.4301, 0.8301], [0.0797, 0.4405, 0.8405], [0.0745, 0.451, 0.851], [0.0693, 0.4614, 0.8614], [0.0641, 0.4719, 0.8719], [0.0588, 0.4824, 0.8824], [0.0536, 0.4928, 0.8928], [0.0484, 0.5033, 0.9033], [0.0431, 0.5137, 0.9137], [0.0379, 0.5242, 0.9242], [0.0327, 0.5346, 0.9346], [0.0275, 0.5451, 0.9451], [0.0222, 0.5556, 0.9556], [0.017, 0.566, 0.966], [0.0118, 0.5765, 0.9765], [0.0065, 0.5869, 0.9869], [0.0013, 0.5974, 0.9974], [0.0, 0.6059, 0.9824], [0.0, 0.6137, 0.9588], [0.0, 0.6216, 0.9353], [0.0, 0.6294, 0.9118], [0.0, 0.6373, 0.8882], [0.0, 0.6451, 0.8647], [0.0, 0.6529, 0.8412], [0.0, 0.6608, 0.8176], [0.0, 0.6686, 0.7941], [0.0, 0.6765, 0.7706], [0.0, 0.6843, 0.7471], [0.0, 0.6922, 0.7235], [0.0, 0.7, 0.7], [0.0, 0.7078, 0.6765], [0.0, 0.7157, 0.6529], [0.0, 0.7235, 0.6294], [0.0, 0.7314, 0.6059], [0.0, 0.7392, 0.5824], [0.0, 0.7471, 0.5588], [0.0, 0.7549, 0.5353], [0.0, 0.7627, 0.5118], [0.0, 0.7706, 0.4882], [0.0, 0.7784, 0.4647], [0.0, 0.7863, 0.4412], [0.0, 0.7941, 0.4176], [0.0039, 0.8008, 0.4008], [0.0196, 0.8039, 0.4039], [0.0353, 0.8071, 0.4071], [0.051, 0.8102, 0.4102], [0.0667, 0.8133, 0.4133], [0.0824, 0.8165, 0.4165], [0.098, 0.8196, 0.4196], [0.1137, 0.8227, 0.4227], [0.1294, 0.8259, 0.4259], [0.1451, 0.829, 0.429], [0.1608, 0.8322, 0.4322], [0.1765, 0.8353, 0.4353], [0.1922, 0.8384, 0.4384], [0.2078, 0.8416, 0.4416], [0.2235, 0.8447, 0.4447], [0.2392, 0.8478, 0.4478], [0.2549, 0.851, 0.451], [0.2706, 0.8541, 0.4541], [0.2863, 0.8573, 0.4573], [0.302, 0.8604, 0.4604], [0.3176, 0.8635, 0.4635], [0.3333, 0.8667, 0.4667], [0.349, 0.8698, 0.4698], [0.3647, 0.8729, 0.4729], [0.3804, 0.8761, 0.4761], [0.3961, 0.8792, 0.4792], [0.4118, 0.8824, 0.4824], [0.4275, 0.8855, 0.4855], [0.4431, 0.8886, 0.4886], [0.4588, 0.8918, 0.4918], [0.4745, 0.8949, 0.4949], [0.4902, 0.898, 0.498], [0.5059, 0.9012, 0.5012], [0.5216, 0.9043, 0.5043], [0.5373, 0.9075, 0.5075], [0.5529, 0.9106, 0.5106], [0.5686, 0.9137, 0.5137], [0.5843, 0.9169, 0.5169], [0.6, 0.92, 0.52], [0.6157, 0.9231, 0.5231], [0.6314, 0.9263, 0.5263], [0.6471, 0.9294, 0.5294], [0.6627, 0.9325, 0.5325], [0.6784, 0.9357, 0.5357], [0.6941, 0.9388, 0.5388], [0.7098, 0.942, 0.542], [0.7255, 0.9451, 0.5451], [0.7412, 0.9482, 0.5482], [0.7569, 0.9514, 0.5514], [0.7725, 0.9545, 0.5545], [0.7882, 0.9576, 0.5576], [0.8039, 0.9608, 0.5608], [0.8196, 0.9639, 0.5639], [0.8353, 0.9671, 0.5671], [0.851, 0.9702, 0.5702], [0.8667, 0.9733, 0.5733], [0.8824, 0.9765, 0.5765], [0.898, 0.9796, 0.5796], [0.9137, 0.9827, 0.5827], [0.9294, 0.9859, 0.5859], [0.9451, 0.989, 0.589], [0.9608, 0.9922, 0.5922], [0.9765, 0.9953, 0.5953], [0.9922, 0.9984, 0.5984], [0.9961, 0.995, 0.5979], [0.9882, 0.9849, 0.5936], [0.9804, 0.9749, 0.5894], [0.9725, 0.9649, 0.5852], [0.9647, 0.9548, 0.5809], [0.9569, 0.9448, 0.5767], [0.949, 0.9347, 0.5725], [0.9412, 0.9247, 0.5682], [0.9333, 0.9147, 0.564], [0.9255, 0.9046, 0.5598], [0.9176, 0.8946, 0.5555], [0.9098, 0.8845, 0.5513], [0.902, 0.8745, 0.5471], [0.8941, 0.8645, 0.5428], [0.8863, 0.8544, 0.5386], [0.8784, 0.8444, 0.5344], [0.8706, 0.8344, 0.5301], [0.8627, 0.8243, 0.5259], [0.8549, 0.8143, 0.5216], [0.8471, 0.8042, 0.5174], [0.8392, 0.7942, 0.5132], [0.8314, 0.7842, 0.5089], [0.8235, 0.7741, 0.5047], [0.8157, 0.7641, 0.5005], [0.8078, 0.754, 0.4962], [0.8, 0.744, 0.492], [0.7922, 0.734, 0.4878], [0.7843, 0.7239, 0.4835], [0.7765, 0.7139, 0.4793], [0.7686, 0.7038, 0.4751], [0.7608, 0.6938, 0.4708], [0.7529, 0.6838, 0.4666], [0.7451, 0.6737, 0.4624], [0.7373, 0.6637, 0.4581], [0.7294, 0.6536, 0.4539], [0.7216, 0.6436, 0.4496], [0.7137, 0.6336, 0.4454], [0.7059, 0.6235, 0.4412], [0.698, 0.6135, 0.4369], [0.6902, 0.6035, 0.4327], [0.6824, 0.5934, 0.4285], [0.6745, 0.5834, 0.4242], [0.6667, 0.5733, 0.42], [0.6588, 0.5633, 0.4158], [0.651, 0.5533, 0.4115], [0.6431, 0.5432, 0.4073], [0.6353, 0.5332, 0.4031], [0.6275, 0.5231, 0.3988], [0.6196, 0.5131, 0.3946], [0.6118, 0.5031, 0.3904], [0.6039, 0.493, 0.3861], [0.5961, 0.483, 0.3819], [0.5882, 0.4729, 0.3776], [0.5804, 0.4629, 0.3734], [0.5725, 0.4529, 0.3692], [0.5647, 0.4428, 0.3649], [0.5569, 0.4328, 0.3607], [0.549, 0.4227, 0.3565], [0.5412, 0.4127, 0.3522], [0.5333, 0.4027, 0.348], [0.5255, 0.3926, 0.3438], [0.5176, 0.3826, 0.3395], [0.5098, 0.3725, 0.3353], [0.502, 0.3625, 0.3311], [0.5059, 0.3675, 0.3379], [0.5137, 0.3776, 0.3484], [0.5216, 0.3876, 0.3589], [0.5294, 0.3976, 0.3694], [0.5373, 0.4077, 0.3799], [0.5451, 0.4177, 0.3904], [0.5529, 0.4278, 0.4009], [0.5608, 0.4378, 0.4115], [0.5686, 0.4478, 0.422], [0.5765, 0.4579, 0.4325], [0.5843, 0.4679, 0.443], [0.5922, 0.478, 0.4535], [0.6, 0.488, 0.464], [0.6078, 0.498, 0.4745], [0.6157, 0.5081, 0.485], [0.6235, 0.5181, 0.4955], [0.6314, 0.5282, 0.506], [0.6392, 0.5382, 0.5165], [0.6471, 0.5482, 0.5271], [0.6549, 0.5583, 0.5376], [0.6627, 0.5683, 0.5481], [0.6706, 0.5784, 0.5586], [0.6784, 0.5884, 0.5691], [0.6863, 0.5984, 0.5796], [0.6941, 0.6085, 0.5901], [0.702, 0.6185, 0.6006], [0.7098, 0.6285, 0.6111], [0.7176, 0.6386, 0.6216], [0.7255, 0.6486, 0.6322], [0.7333, 0.6587, 0.6427], [0.7412, 0.6687, 0.6532], [0.749, 0.6787, 0.6637], [0.7569, 0.6888, 0.6742], [0.7647, 0.6988, 0.6847], [0.7725, 0.7089, 0.6952], [0.7804, 0.7189, 0.7057], [0.7882, 0.7289, 0.7162], [0.7961, 0.739, 0.7267], [0.8039, 0.749, 0.7373], [0.8118, 0.7591, 0.7478], [0.8196, 0.7691, 0.7583], [0.8275, 0.7791, 0.7688], [0.8353, 0.7892, 0.7793], [0.8431, 0.7992, 0.7898], [0.851, 0.8093, 0.8003], [0.8588, 0.8193, 0.8108], [0.8667, 0.8293, 0.8213], [0.8745, 0.8394, 0.8318], [0.8824, 0.8494, 0.8424], [0.8902, 0.8595, 0.8529], [0.898, 0.8695, 0.8634], [0.9059, 0.8795, 0.8739], [0.9137, 0.8896, 0.8844], [0.9216, 0.8996, 0.8949], [0.9294, 0.9096, 0.9054], [0.9373, 0.9197, 0.9159], [0.9451, 0.9297, 0.9264], [0.9529, 0.9398, 0.9369], [0.9608, 0.9498, 0.9475], [0.9686, 0.9598, 0.958], [0.9765, 0.9699, 0.9685], [0.9843, 0.9799, 0.979], [0.9922, 0.99, 0.9895], [1.0, 1.0, 1.0]] }, "turbo": { "interpolate": true, "colors": [[0.19, 0.0718, 0.2322], [0.1948, 0.0834, 0.2615], [0.1996, 0.095, 0.2902], [0.2042, 0.1065, 0.3184], [0.2086, 0.118, 0.3461], [0.2129, 0.1295, 0.3731], [0.2171, 0.1409, 0.3996], [0.2211, 0.1522, 0.4256], [0.225, 0.1635, 0.451], [0.2288, 0.1748, 0.4758], [0.2324, 0.186, 0.5], [0.2358, 0.1972, 0.5237], [0.2392, 0.2083, 0.5469], [0.2423, 0.2194, 0.5694], [0.2454, 0.2304, 0.5914], [0.2483, 0.2414, 0.6129], [0.2511, 0.2524, 0.6337], [0.2537, 0.2633, 0.6541], [0.2562, 0.2741, 0.6738], [0.2585, 0.2849, 0.693], [0.2607, 0.2957, 0.7116], [0.2628, 0.3064, 0.7297], [0.2647, 0.3171, 0.7472], [0.2665, 0.3277, 0.7641], [0.2682, 0.3382, 0.7805], [0.2697, 0.3488, 0.7963], [0.271, 0.3593, 0.8116], [0.2723, 0.3697, 0.8262], [0.2733, 0.3801, 0.8404], [0.2743, 0.3904, 0.8539], [0.2751, 0.4007, 0.8669], [0.2758, 0.411, 0.8794], [0.2763, 0.4212, 0.8912], [0.2767, 0.4313, 0.9025], [0.2769, 0.4414, 0.9133], [0.277, 0.4515, 0.9235], [0.277, 0.4615, 0.9331], [0.2768, 0.4715, 0.9421], [0.2765, 0.4814, 0.9506], [0.276, 0.4913, 0.9586], [0.2754, 0.5012, 0.9659], [0.2747, 0.5109, 0.9728], [0.2738, 0.5207, 0.979], [0.2727, 0.5304, 0.9846], [0.2711, 0.5402, 0.9893], [0.2688, 0.55, 0.993], [0.2659, 0.5598, 0.9958], [0.2625, 0.5697, 0.9977], [0.2586, 0.5796, 0.9988], [0.2542, 0.5895, 0.999], [0.2495, 0.5994, 0.9984], [0.2443, 0.6094, 0.997], [0.2387, 0.6193, 0.9948], [0.2329, 0.6292, 0.992], [0.2268, 0.6391, 0.9885], [0.2204, 0.649, 0.9844], [0.2138, 0.6589, 0.9796], [0.2071, 0.6687, 0.9742], [0.2002, 0.6784, 0.9683], [0.1933, 0.6881, 0.9619], [0.1862, 0.6978, 0.955], [0.1792, 0.7073, 0.9476], [0.1722, 0.7168, 0.9398], [0.1653, 0.7262, 0.9316], [0.1584, 0.7355, 0.923], [0.1517, 0.7447, 0.9142], [0.1452, 0.7538, 0.905], [0.1389, 0.7628, 0.8955], [0.1328, 0.7716, 0.8858], [0.127, 0.7804, 0.8759], [0.1215, 0.789, 0.8658], [0.1164, 0.7974, 0.8556], [0.1117, 0.8057, 0.8452], [0.1074, 0.8138, 0.8348], [0.1036, 0.8218, 0.8244], [0.1003, 0.8296, 0.8139], [0.0975, 0.8371, 0.8034], [0.0953, 0.8446, 0.793], [0.0938, 0.8518, 0.7826], [0.0929, 0.8588, 0.7724], [0.0927, 0.8655, 0.7623], [0.0932, 0.8721, 0.7524], [0.0945, 0.8784, 0.7426], [0.0966, 0.8845, 0.7332], [0.0996, 0.8904, 0.7239], [0.1034, 0.896, 0.715], [0.1082, 0.9014, 0.706], [0.1137, 0.9067, 0.6965], [0.1201, 0.9119, 0.6866], [0.1273, 0.917, 0.6763], [0.1353, 0.922, 0.6656], [0.1439, 0.9268, 0.6545], [0.1532, 0.9315, 0.6431], [0.1632, 0.9361, 0.6314], [0.1738, 0.9405, 0.6194], [0.1849, 0.9448, 0.6071], [0.1966, 0.949, 0.5947], [0.2088, 0.953, 0.582], [0.2214, 0.9569, 0.5691], [0.2345, 0.9606, 0.5561], [0.248, 0.9642, 0.543], [0.2618, 0.9676, 0.5298], [0.276, 0.9709, 0.5165], [0.2904, 0.974, 0.5032], [0.3051, 0.977, 0.4899], [0.3201, 0.9797, 0.4765], [0.3352, 0.9823, 0.4632], [0.3504, 0.9848, 0.45], [0.3658, 0.987, 0.4369], [0.3813, 0.9891, 0.4239], [0.3968, 0.991, 0.411], [0.4123, 0.9927, 0.3983], [0.4278, 0.9942, 0.3858], [0.4432, 0.9955, 0.3734], [0.4585, 0.9966, 0.3614], [0.4738, 0.9976, 0.3496], [0.4888, 0.9983, 0.3382], [0.5036, 0.9988, 0.327], [0.5182, 0.9991, 0.3162], [0.5326, 0.9992, 0.3058], [0.5466, 0.9991, 0.2958], [0.5603, 0.9987, 0.2862], [0.5736, 0.9982, 0.2771], [0.5865, 0.9974, 0.2685], [0.5989, 0.9964, 0.2604], [0.6109, 0.9951, 0.2528], [0.6223, 0.9937, 0.2458], [0.6332, 0.992, 0.2394], [0.6436, 0.99, 0.2336], [0.6539, 0.9878, 0.2284], [0.6643, 0.9852, 0.2237], [0.6746, 0.9825, 0.2196], [0.6849, 0.9794, 0.216], [0.6952, 0.9761, 0.2129], [0.7055, 0.9726, 0.2103], [0.7158, 0.9688, 0.2082], [0.726, 0.9647, 0.2064], [0.7361, 0.9604, 0.205], [0.7462, 0.9559, 0.2041], [0.7562, 0.9512, 0.2034], [0.7661, 0.9463, 0.2031], [0.7759, 0.9411, 0.2031], [0.7856, 0.9358, 0.2034], [0.7952, 0.9302, 0.2039], [0.8047, 0.9245, 0.2046], [0.8141, 0.9186, 0.2055], [0.8233, 0.9125, 0.2066], [0.8324, 0.9063, 0.2079], [0.8413, 0.8999, 0.2093], [0.8501, 0.8933, 0.2107], [0.8587, 0.8866, 0.2123], [0.8671, 0.8797, 0.2139], [0.8753, 0.8727, 0.2156], [0.8833, 0.8655, 0.2172], [0.8911, 0.8583, 0.2188], [0.8987, 0.8509, 0.2204], [0.906, 0.8434, 0.2219], [0.9132, 0.8358, 0.2233], [0.92, 0.8281, 0.2246], [0.9267, 0.8202, 0.2257], [0.933, 0.8124, 0.2267], [0.9391, 0.8044, 0.2274], [0.9449, 0.7963, 0.228], [0.9504, 0.7882, 0.2283], [0.9556, 0.78, 0.2284], [0.9605, 0.7718, 0.2281], [0.9651, 0.7635, 0.2275], [0.9693, 0.7552, 0.2266], [0.9732, 0.7468, 0.2254], [0.9768, 0.7384, 0.2237], [0.98, 0.73, 0.2216], [0.9829, 0.7214, 0.2192], [0.9855, 0.7125, 0.2165], [0.9878, 0.7033, 0.2136], [0.9899, 0.6938, 0.2104], [0.9916, 0.6841, 0.2071], [0.9931, 0.6741, 0.2035], [0.9944, 0.6639, 0.1997], [0.9954, 0.6534, 0.1958], [0.9961, 0.6428, 0.1916], [0.9965, 0.6319, 0.1874], [0.9968, 0.6209, 0.183], [0.9967, 0.6098, 0.1784], [0.9964, 0.5985, 0.1738], [0.9959, 0.587, 0.169], [0.9952, 0.5755, 0.1641], [0.9942, 0.5639, 0.1592], [0.993, 0.5521, 0.1542], [0.9915, 0.5404, 0.1491], [0.9899, 0.5285, 0.144], [0.988, 0.5167, 0.1388], [0.9859, 0.5048, 0.1337], [0.9836, 0.4929, 0.1285], [0.9811, 0.481, 0.1233], [0.9784, 0.4692, 0.1182], [0.9754, 0.4574, 0.113], [0.9723, 0.4456, 0.108], [0.969, 0.434, 0.1029], [0.9656, 0.4224, 0.098], [0.9619, 0.4109, 0.0931], [0.958, 0.3996, 0.0883], [0.954, 0.3884, 0.0836], [0.9498, 0.3773, 0.079], [0.9454, 0.3664, 0.0746], [0.9408, 0.3557, 0.0703], [0.9361, 0.3451, 0.0662], [0.9312, 0.3348, 0.0622], [0.9262, 0.3247, 0.0584], [0.921, 0.3149, 0.0548], [0.9157, 0.3053, 0.0513], [0.9102, 0.296, 0.0481], [0.9046, 0.287, 0.0452], [0.8989, 0.2782, 0.0424], [0.893, 0.2698, 0.0399], [0.8869, 0.2615, 0.0375], [0.8807, 0.2533, 0.0352], [0.8742, 0.2453, 0.033], [0.8676, 0.2373, 0.0308], [0.8608, 0.2294, 0.0288], [0.8538, 0.2217, 0.0268], [0.8466, 0.2141, 0.0249], [0.8393, 0.2065, 0.023], [0.8317, 0.1991, 0.0213], [0.824, 0.1918, 0.0197], [0.8161, 0.1846, 0.0181], [0.808, 0.1775, 0.0166], [0.7997, 0.1706, 0.0152], [0.7912, 0.1637, 0.0139], [0.7826, 0.1569, 0.0126], [0.7738, 0.1503, 0.0115], [0.7648, 0.1437, 0.0104], [0.7556, 0.1373, 0.0094], [0.7462, 0.131, 0.0085], [0.7366, 0.1248, 0.0077], [0.7269, 0.1187, 0.007], [0.7169, 0.1127, 0.0063], [0.7068, 0.1068, 0.0057], [0.6965, 0.101, 0.0052], [0.686, 0.0954, 0.0048], [0.6754, 0.0898, 0.0045], [0.6645, 0.0844, 0.0042], [0.6534, 0.079, 0.0041], [0.6422, 0.0738, 0.004], [0.6308, 0.0687, 0.004], [0.6192, 0.0637, 0.0041], [0.6075, 0.0588, 0.0043], [0.5955, 0.054, 0.0045], [0.5834, 0.0493, 0.0049], [0.571, 0.0447, 0.0053], [0.5585, 0.0403, 0.0058], [0.5458, 0.0359, 0.0064], [0.533, 0.0317, 0.007], [0.5199, 0.0276, 0.0078], [0.5066, 0.0235, 0.0086], [0.4932, 0.0196, 0.0096], [0.4796, 0.0158, 0.0106]] }, "twilight": { "interpolate": true, "colors": [[0.8858, 0.85, 0.888], [0.8838, 0.8507, 0.8872], [0.8817, 0.8513, 0.8864], [0.8795, 0.8517, 0.8854], [0.8772, 0.8519, 0.8843], [0.8749, 0.8519, 0.8832], [0.8723, 0.8518, 0.8819], [0.8697, 0.8515, 0.8805], [0.867, 0.8511, 0.8791], [0.8641, 0.8505, 0.8776], [0.8611, 0.8498, 0.876], [0.858, 0.8489, 0.8743], [0.8547, 0.8479, 0.8726], [0.8513, 0.8467, 0.8709], [0.8478, 0.8455, 0.869], [0.8441, 0.8441, 0.8672], [0.8403, 0.8426, 0.8653], [0.8363, 0.8409, 0.8633], [0.8322, 0.8392, 0.8613], [0.828, 0.8374, 0.8592], [0.8236, 0.8355, 0.8571], [0.819, 0.8335, 0.855], [0.8144, 0.8315, 0.8528], [0.8096, 0.8293, 0.8506], [0.8047, 0.8271, 0.8484], [0.7997, 0.8248, 0.8462], [0.7945, 0.8225, 0.8439], [0.7893, 0.82, 0.8416], [0.784, 0.8176, 0.8394], [0.7786, 0.815, 0.8371], [0.7731, 0.8124, 0.8348], [0.7675, 0.8098, 0.8325], [0.7619, 0.8071, 0.8303], [0.7562, 0.8044, 0.828], [0.7504, 0.8016, 0.8258], [0.7446, 0.7988, 0.8236], [0.7387, 0.796, 0.8214], [0.7328, 0.7931, 0.8193], [0.7269, 0.7902, 0.8172], [0.721, 0.7872, 0.8151], [0.715, 0.7843, 0.8131], [0.709, 0.7813, 0.8111], [0.703, 0.7782, 0.8092], [0.697, 0.7752, 0.8073], [0.691, 0.7721, 0.8055], [0.6851, 0.769, 0.8037], [0.6791, 0.7658, 0.802], [0.6731, 0.7627, 0.8003], [0.6672, 0.7595, 0.7986], [0.6613, 0.7563, 0.797], [0.6554, 0.7531, 0.7955], [0.6496, 0.7499, 0.794], [0.6438, 0.7466, 0.7926], [0.638, 0.7433, 0.7912], [0.6323, 0.74, 0.7898], [0.6266, 0.7367, 0.7885], [0.621, 0.7334, 0.7872], [0.6154, 0.73, 0.786], [0.6099, 0.7267, 0.7847], [0.6044, 0.7233, 0.7836], [0.599, 0.7199, 0.7825], [0.5936, 0.7165, 0.7814], [0.5883, 0.713, 0.7803], [0.583, 0.7096, 0.7793], [0.5778, 0.7061, 0.7783], [0.5727, 0.7027, 0.7773], [0.5676, 0.6992, 0.7763], [0.5626, 0.6957, 0.7754], [0.5576, 0.6922, 0.7745], [0.5527, 0.6886, 0.7736], [0.5478, 0.6851, 0.7728], [0.5431, 0.6815, 0.7719], [0.5383, 0.678, 0.7711], [0.5337, 0.6744, 0.7703], [0.5291, 0.6708, 0.7696], [0.5246, 0.6672, 0.7688], [0.5201, 0.6636, 0.7681], [0.5157, 0.6599, 0.7673], [0.5114, 0.6563, 0.7666], [0.5071, 0.6526, 0.7659], [0.5029, 0.649, 0.7652], [0.4987, 0.6453, 0.7645], [0.4947, 0.6416, 0.7639], [0.4907, 0.6379, 0.7632], [0.4867, 0.6342, 0.7626], [0.4829, 0.6304, 0.7619], [0.4791, 0.6267, 0.7613], [0.4753, 0.6229, 0.7607], [0.4717, 0.6192, 0.76], [0.4681, 0.6154, 0.7594], [0.4646, 0.6116, 0.7588], [0.4611, 0.6078, 0.7582], [0.4577, 0.6039, 0.7576], [0.4544, 0.6001, 0.757], [0.4512, 0.5962, 0.7564], [0.448, 0.5924, 0.7557], [0.4449, 0.5885, 0.7551], [0.4419, 0.5846, 0.7545], [0.439, 0.5807, 0.7539], [0.4361, 0.5768, 0.7533], [0.4333, 0.5729, 0.7527], [0.4306, 0.5689, 0.752], [0.4279, 0.565, 0.7514], [0.4253, 0.561, 0.7508], [0.4228, 0.557, 0.7501], [0.4204, 0.553, 0.7494], [0.418, 0.549, 0.7488], [0.4157, 0.5449, 0.7481], [0.4135, 0.5409, 0.7474], [0.4114, 0.5368, 0.7467], [0.4093, 0.5328, 0.746], [0.4073, 0.5287, 0.7452], [0.4053, 0.5246, 0.7445], [0.4035, 0.5205, 0.7437], [0.4017, 0.5164, 0.743], [0.3999, 0.5122, 0.7422], [0.3983, 0.5081, 0.7414], [0.3967, 0.5039, 0.7405], [0.3951, 0.4997, 0.7397], [0.3937, 0.4955, 0.7388], [0.3923, 0.4913, 0.7379], [0.3909, 0.4871, 0.737], [0.3896, 0.4828, 0.736], [0.3884, 0.4786, 0.7351], [0.3872, 0.4743, 0.7341], [0.3861, 0.47, 0.7331], [0.3851, 0.4657, 0.732], [0.3841, 0.4614, 0.7309], [0.3831, 0.4571, 0.7298], [0.3822, 0.4527, 0.7287], [0.3814, 0.4484, 0.7276], [0.3806, 0.444, 0.7264], [0.3798, 0.4396, 0.7251], [0.3791, 0.4352, 0.7239], [0.3784, 0.4308, 0.7226], [0.3778, 0.4264, 0.7213], [0.3772, 0.4219, 0.7199], [0.3766, 0.4175, 0.7185], [0.3761, 0.413, 0.7171], [0.3756, 0.4086, 0.7156], [0.3751, 0.4041, 0.7141], [0.3747, 0.3996, 0.7126], [0.3743, 0.395, 0.711], [0.3739, 0.3905, 0.7094], [0.3736, 0.386, 0.7077], [0.3732, 0.3814, 0.706], [0.3729, 0.3768, 0.7042], [0.3726, 0.3723, 0.7024], [0.3724, 0.3677, 0.7006], [0.3721, 0.3631, 0.6987], [0.3719, 0.3584, 0.6968], [0.3716, 0.3538, 0.6948], [0.3714, 0.3492, 0.6927], [0.3712, 0.3445, 0.6907], [0.3709, 0.3399, 0.6885], [0.3707, 0.3352, 0.6863], [0.3705, 0.3305, 0.6841], [0.3703, 0.3258, 0.6818], [0.3701, 0.3211, 0.6794], [0.3699, 0.3164, 0.677], [0.3697, 0.3117, 0.6746], [0.3694, 0.3069, 0.6721], [0.3692, 0.3022, 0.6695], [0.369, 0.2974, 0.6668], [0.3687, 0.2927, 0.6641], [0.3684, 0.2879, 0.6613], [0.3681, 0.2832, 0.6585], [0.3678, 0.2784, 0.6556], [0.3675, 0.2736, 0.6526], [0.3672, 0.2688, 0.6496], [0.3668, 0.264, 0.6465], [0.3664, 0.2593, 0.6433], [0.366, 0.2545, 0.64], [0.3656, 0.2497, 0.6367], [0.3651, 0.2449, 0.6333], [0.3646, 0.2401, 0.6298], [0.3641, 0.2354, 0.6262], [0.3635, 0.2306, 0.6225], [0.3629, 0.2258, 0.6188], [0.3622, 0.2211, 0.615], [0.3615, 0.2164, 0.611], [0.3608, 0.2116, 0.607], [0.36, 0.2069, 0.6029], [0.3592, 0.2023, 0.5987], [0.3583, 0.1976, 0.5944], [0.3574, 0.193, 0.59], [0.3564, 0.1884, 0.5855], [0.3554, 0.1838, 0.5809], [0.3543, 0.1793, 0.5762], [0.3531, 0.1748, 0.5714], [0.3519, 0.1703, 0.5665], [0.3506, 0.166, 0.5615], [0.3492, 0.1616, 0.5563], [0.3478, 0.1573, 0.5511], [0.3463, 0.1531, 0.5458], [0.3447, 0.149, 0.5403], [0.3431, 0.1449, 0.5347], [0.3414, 0.1409, 0.5291], [0.3395, 0.137, 0.5233], [0.3376, 0.1332, 0.5174], [0.3357, 0.1295, 0.5114], [0.3336, 0.1259, 0.5054], [0.3315, 0.1224, 0.4992], [0.3292, 0.1191, 0.4929], [0.3269, 0.1158, 0.4866], [0.3245, 0.1126, 0.4802], [0.322, 0.1096, 0.4737], [0.3195, 0.1067, 0.4671], [0.3168, 0.1039, 0.4605], [0.3141, 0.1012, 0.4539], [0.3113, 0.0987, 0.4472], [0.3084, 0.0963, 0.4405], [0.3055, 0.094, 0.4337], [0.3025, 0.0918, 0.427], [0.2994, 0.0897, 0.4202], [0.2963, 0.0877, 0.4135], [0.2931, 0.0859, 0.4067], [0.2899, 0.0841, 0.4], [0.2867, 0.0824, 0.3933], [0.2834, 0.0809, 0.3867], [0.2801, 0.0794, 0.3801], [0.2768, 0.078, 0.3735], [0.2734, 0.0767, 0.367], [0.2701, 0.0755, 0.3606], [0.2667, 0.0743, 0.3542], [0.2634, 0.0733, 0.3479], [0.26, 0.0723, 0.3417], [0.2567, 0.0714, 0.3356], [0.2534, 0.0705, 0.3296], [0.2501, 0.0698, 0.3237], [0.2469, 0.0691, 0.3179], [0.2437, 0.0684, 0.3122], [0.2405, 0.0679, 0.3066], [0.2374, 0.0674, 0.3011], [0.2343, 0.0669, 0.2957], [0.2313, 0.0666, 0.2905], [0.2284, 0.0663, 0.2854], [0.2255, 0.0661, 0.2804], [0.2227, 0.0659, 0.2756], [0.22, 0.0659, 0.2709], [0.2174, 0.0659, 0.2663], [0.2148, 0.0659, 0.2619], [0.2124, 0.0661, 0.2577], [0.21, 0.0663, 0.2535], [0.2077, 0.0666, 0.2495], [0.2056, 0.067, 0.2457], [0.2035, 0.0674, 0.2421], [0.2016, 0.068, 0.2385], [0.1997, 0.0686, 0.2352], [0.1979, 0.0693, 0.2319], [0.1961, 0.0703, 0.2287], [0.1941, 0.0716, 0.2256], [0.192, 0.0732, 0.2224], [0.1898, 0.075, 0.2193], [0.1874, 0.0771, 0.2162], [0.1849, 0.0794, 0.2131], [0.1877, 0.0773, 0.2139], [0.1905, 0.0753, 0.2147], [0.1932, 0.0736, 0.2154], [0.1957, 0.0722, 0.2162], [0.1982, 0.071, 0.2169], [0.2006, 0.0701, 0.2176], [0.2029, 0.0694, 0.2183], [0.2053, 0.0689, 0.2191], [0.2079, 0.0685, 0.22], [0.2105, 0.0681, 0.221], [0.2133, 0.0678, 0.2221], [0.2163, 0.0676, 0.2232], [0.2193, 0.0675, 0.2245], [0.2225, 0.0674, 0.2259], [0.2258, 0.0674, 0.2273], [0.2292, 0.0674, 0.2288], [0.2327, 0.0676, 0.2304], [0.2363, 0.0677, 0.232], [0.24, 0.068, 0.2337], [0.2438, 0.0683, 0.2355], [0.2477, 0.0687, 0.2373], [0.2517, 0.0691, 0.2392], [0.2558, 0.0695, 0.2411], [0.26, 0.0701, 0.2431], [0.2643, 0.0706, 0.2451], [0.2686, 0.0712, 0.2471], [0.273, 0.0719, 0.2492], [0.2775, 0.0726, 0.2512], [0.282, 0.0733, 0.2533], [0.2866, 0.0741, 0.2554], [0.2913, 0.0749, 0.2576], [0.296, 0.0757, 0.2597], [0.3008, 0.0766, 0.2618], [0.3056, 0.0775, 0.2639], [0.3105, 0.0785, 0.266], [0.3154, 0.0794, 0.2681], [0.3203, 0.0804, 0.2702], [0.3253, 0.0814, 0.2723], [0.3303, 0.0825, 0.2743], [0.3353, 0.0835, 0.2763], [0.3404, 0.0846, 0.2783], [0.3455, 0.0857, 0.2803], [0.3506, 0.0869, 0.2822], [0.3557, 0.088, 0.2841], [0.3609, 0.0892, 0.2859], [0.3661, 0.0904, 0.2877], [0.3712, 0.0917, 0.2895], [0.3764, 0.0929, 0.2912], [0.3816, 0.0942, 0.2928], [0.3868, 0.0956, 0.2944], [0.392, 0.0969, 0.296], [0.3972, 0.0983, 0.2974], [0.4024, 0.0997, 0.2989], [0.4076, 0.1012, 0.3002], [0.4128, 0.1027, 0.3015], [0.418, 0.1042, 0.3028], [0.4231, 0.1058, 0.304], [0.4283, 0.1074, 0.3051], [0.4334, 0.1091, 0.3061], [0.4386, 0.1108, 0.3071], [0.4437, 0.1125, 0.308], [0.4488, 0.1144, 0.3089], [0.4538, 0.1162, 0.3097], [0.4589, 0.1181, 0.3104], [0.4639, 0.1201, 0.3111], [0.4689, 0.1222, 0.3117], [0.4738, 0.1243, 0.3123], [0.4788, 0.1264, 0.3127], [0.4837, 0.1286, 0.3132], [0.4885, 0.1309, 0.3135], [0.4934, 0.1333, 0.3139], [0.4981, 0.1357, 0.3141], [0.5029, 0.1382, 0.3144], [0.5076, 0.1407, 0.3145], [0.5123, 0.1433, 0.3147], [0.5169, 0.146, 0.3148], [0.5215, 0.1487, 0.3148], [0.526, 0.1515, 0.3148], [0.5305, 0.1544, 0.3148], [0.535, 0.1573, 0.3148], [0.5394, 0.1602, 0.3147], [0.5438, 0.1633, 0.3146], [0.5481, 0.1664, 0.3145], [0.5524, 0.1695, 0.3144], [0.5566, 0.1727, 0.3142], [0.5608, 0.1759, 0.3141], [0.565, 0.1792, 0.3139], [0.5691, 0.1826, 0.3137], [0.5731, 0.186, 0.3136], [0.5772, 0.1894, 0.3134], [0.5811, 0.1929, 0.3132], [0.5851, 0.1964, 0.3131], [0.5889, 0.2, 0.3129], [0.5928, 0.2036, 0.3127], [0.5966, 0.2072, 0.3126], [0.6004, 0.2109, 0.3124], [0.6041, 0.2146, 0.3123], [0.6078, 0.2184, 0.3122], [0.6114, 0.2221, 0.3121], [0.615, 0.2259, 0.3121], [0.6186, 0.2298, 0.312], [0.6221, 0.2337, 0.312], [0.6256, 0.2376, 0.312], [0.629, 0.2415, 0.312], [0.6324, 0.2455, 0.312], [0.6358, 0.2494, 0.3121], [0.6391, 0.2535, 0.3122], [0.6424, 0.2575, 0.3123], [0.6457, 0.2616, 0.3125], [0.6489, 0.2656, 0.3127], [0.6521, 0.2697, 0.3129], [0.6552, 0.2739, 0.3132], [0.6583, 0.278, 0.3135], [0.6614, 0.2822, 0.3138], [0.6644, 0.2864, 0.3142], [0.6674, 0.2906, 0.3146], [0.6704, 0.2949, 0.315], [0.6733, 0.2991, 0.3155], [0.6762, 0.3034, 0.3161], [0.6791, 0.3077, 0.3167], [0.6819, 0.312, 0.3173], [0.6847, 0.3163, 0.318], [0.6874, 0.3207, 0.3187], [0.6901, 0.3251, 0.3195], [0.6928, 0.3295, 0.3203], [0.6955, 0.3339, 0.3211], [0.6981, 0.3383, 0.3221], [0.7006, 0.3427, 0.3231], [0.7032, 0.3472, 0.3241], [0.7057, 0.3517, 0.3252], [0.7081, 0.3561, 0.3263], [0.7105, 0.3607, 0.3275], [0.7129, 0.3652, 0.3288], [0.7153, 0.3697, 0.3301], [0.7176, 0.3743, 0.3315], [0.7199, 0.3788, 0.333], [0.7221, 0.3834, 0.3345], [0.7243, 0.388, 0.3361], [0.7265, 0.3926, 0.3377], [0.7286, 0.3972, 0.3395], [0.7307, 0.4019, 0.3412], [0.7328, 0.4065, 0.3431], [0.7348, 0.4112, 0.345], [0.7368, 0.4159, 0.347], [0.7388, 0.4205, 0.3491], [0.7407, 0.4252, 0.3513], [0.7426, 0.4299, 0.3535], [0.7445, 0.4347, 0.3558], [0.7463, 0.4394, 0.3582], [0.748, 0.4441, 0.3607], [0.7498, 0.4489, 0.3633], [0.7515, 0.4536, 0.3659], [0.7532, 0.4584, 0.3686], [0.7548, 0.4632, 0.3714], [0.7564, 0.468, 0.3743], [0.758, 0.4728, 0.3773], [0.7596, 0.4776, 0.3804], [0.7611, 0.4824, 0.3835], [0.7626, 0.4872, 0.3868], [0.764, 0.492, 0.3901], [0.7655, 0.4968, 0.3935], [0.7669, 0.5017, 0.397], [0.7682, 0.5065, 0.4006], [0.7696, 0.5113, 0.4043], [0.7709, 0.5162, 0.4081], [0.7722, 0.521, 0.412], [0.7734, 0.5259, 0.4159], [0.7747, 0.5307, 0.42], [0.7759, 0.5355, 0.4241], [0.7771, 0.5404, 0.4284], [0.7783, 0.5452, 0.4327], [0.7795, 0.5501, 0.4371], [0.7806, 0.5549, 0.4416], [0.7817, 0.5598, 0.4462], [0.7829, 0.5646, 0.4509], [0.784, 0.5694, 0.4557], [0.7851, 0.5742, 0.4606], [0.7862, 0.5791, 0.4655], [0.7872, 0.5839, 0.4706], [0.7883, 0.5887, 0.4757], [0.7894, 0.5935, 0.4809], [0.7905, 0.5983, 0.4862], [0.7915, 0.6031, 0.4916], [0.7926, 0.6078, 0.4971], [0.7937, 0.6126, 0.5026], [0.7948, 0.6174, 0.5082], [0.7958, 0.6221, 0.5139], [0.7969, 0.6268, 0.5196], [0.798, 0.6316, 0.5255], [0.7992, 0.6363, 0.5313], [0.8003, 0.641, 0.5373], [0.8014, 0.6457, 0.5433], [0.8026, 0.6503, 0.5494], [0.8038, 0.655, 0.5556], [0.805, 0.6596, 0.5618], [0.8062, 0.6643, 0.568], [0.8075, 0.6689, 0.5743], [0.8087, 0.6735, 0.5807], [0.81, 0.678, 0.5871], [0.8114, 0.6826, 0.5936], [0.8127, 0.6871, 0.6001], [0.8141, 0.6916, 0.6066], [0.8155, 0.6961, 0.6132], [0.8169, 0.7006, 0.6198], [0.8184, 0.7051, 0.6264], [0.8199, 0.7095, 0.633], [0.8214, 0.7139, 0.6397], [0.8229, 0.7183, 0.6464], [0.8245, 0.7226, 0.6531], [0.8261, 0.727, 0.6599], [0.8278, 0.7313, 0.6666], [0.8294, 0.7355, 0.6733], [0.8311, 0.7398, 0.6801], [0.8328, 0.744, 0.6868], [0.8346, 0.7481, 0.6936], [0.8363, 0.7523, 0.7003], [0.8381, 0.7564, 0.707], [0.8399, 0.7604, 0.7137], [0.8417, 0.7644, 0.7203], [0.8435, 0.7684, 0.727], [0.8453, 0.7723, 0.7336], [0.8471, 0.7761, 0.7401], [0.8489, 0.7799, 0.7466], [0.8507, 0.7837, 0.7531], [0.8525, 0.7873, 0.7595], [0.8543, 0.791, 0.7658], [0.856, 0.7945, 0.7721], [0.8578, 0.798, 0.7783], [0.8594, 0.8014, 0.7844], [0.8611, 0.8048, 0.7904], [0.8627, 0.8081, 0.7963], [0.8642, 0.8112, 0.802], [0.8656, 0.8144, 0.8077], [0.8671, 0.8174, 0.8131], [0.8684, 0.8203, 0.8184], [0.8697, 0.8231, 0.8235], [0.8709, 0.8259, 0.8284], [0.8722, 0.8285, 0.833], [0.8734, 0.831, 0.8375], [0.8745, 0.8333, 0.8417], [0.8757, 0.8355, 0.8458], [0.8769, 0.8376, 0.8496], [0.878, 0.8395, 0.8533], [0.8791, 0.8413, 0.8569], [0.8802, 0.8429, 0.8603], [0.8812, 0.8443, 0.8636], [0.8821, 0.8456, 0.8667], [0.883, 0.8467, 0.8698], [0.8837, 0.8476, 0.8727], [0.8843, 0.8484, 0.8756], [0.8849, 0.8491, 0.8783], [0.8853, 0.8496, 0.8809], [0.8855, 0.8499, 0.8834], [0.8857, 0.85, 0.8857]] }, "twilight_shifted": { "interpolate": true, "colors": [[0.1874, 0.0771, 0.2162], [0.1898, 0.075, 0.2193], [0.192, 0.0732, 0.2224], [0.1941, 0.0716, 0.2256], [0.1961, 0.0703, 0.2287], [0.1979, 0.0693, 0.2319], [0.1997, 0.0686, 0.2352], [0.2016, 0.068, 0.2385], [0.2035, 0.0674, 0.2421], [0.2056, 0.067, 0.2457], [0.2077, 0.0666, 0.2495], [0.21, 0.0663, 0.2535], [0.2124, 0.0661, 0.2577], [0.2148, 0.0659, 0.2619], [0.2174, 0.0659, 0.2663], [0.22, 0.0659, 0.2709], [0.2227, 0.0659, 0.2756], [0.2255, 0.0661, 0.2804], [0.2284, 0.0663, 0.2854], [0.2313, 0.0666, 0.2905], [0.2343, 0.0669, 0.2957], [0.2374, 0.0674, 0.3011], [0.2405, 0.0679, 0.3066], [0.2437, 0.0684, 0.3122], [0.2469, 0.0691, 0.3179], [0.2501, 0.0698, 0.3237], [0.2534, 0.0705, 0.3296], [0.2567, 0.0714, 0.3356], [0.26, 0.0723, 0.3417], [0.2634, 0.0733, 0.3479], [0.2667, 0.0743, 0.3542], [0.2701, 0.0755, 0.3606], [0.2734, 0.0767, 0.367], [0.2768, 0.078, 0.3735], [0.2801, 0.0794, 0.3801], [0.2834, 0.0809, 0.3867], [0.2867, 0.0824, 0.3933], [0.2899, 0.0841, 0.4], [0.2931, 0.0859, 0.4067], [0.2963, 0.0877, 0.4135], [0.2994, 0.0897, 0.4202], [0.3025, 0.0918, 0.427], [0.3055, 0.094, 0.4337], [0.3084, 0.0963, 0.4405], [0.3113, 0.0987, 0.4472], [0.3141, 0.1012, 0.4539], [0.3168, 0.1039, 0.4605], [0.3195, 0.1067, 0.4671], [0.322, 0.1096, 0.4737], [0.3245, 0.1126, 0.4802], [0.3269, 0.1158, 0.4866], [0.3292, 0.1191, 0.4929], [0.3315, 0.1224, 0.4992], [0.3336, 0.1259, 0.5054], [0.3357, 0.1295, 0.5114], [0.3376, 0.1332, 0.5174], [0.3395, 0.137, 0.5233], [0.3414, 0.1409, 0.5291], [0.3431, 0.1449, 0.5347], [0.3447, 0.149, 0.5403], [0.3463, 0.1531, 0.5458], [0.3478, 0.1573, 0.5511], [0.3492, 0.1616, 0.5563], [0.3506, 0.166, 0.5615], [0.3519, 0.1703, 0.5665], [0.3531, 0.1748, 0.5714], [0.3543, 0.1793, 0.5762], [0.3554, 0.1838, 0.5809], [0.3564, 0.1884, 0.5855], [0.3574, 0.193, 0.59], [0.3583, 0.1976, 0.5944], [0.3592, 0.2023, 0.5987], [0.36, 0.2069, 0.6029], [0.3608, 0.2116, 0.607], [0.3615, 0.2164, 0.611], [0.3622, 0.2211, 0.615], [0.3629, 0.2258, 0.6188], [0.3635, 0.2306, 0.6225], [0.3641, 0.2354, 0.6262], [0.3646, 0.2401, 0.6298], [0.3651, 0.2449, 0.6333], [0.3656, 0.2497, 0.6367], [0.366, 0.2545, 0.64], [0.3664, 0.2593, 0.6433], [0.3668, 0.264, 0.6465], [0.3672, 0.2688, 0.6496], [0.3675, 0.2736, 0.6526], [0.3678, 0.2784, 0.6556], [0.3681, 0.2832, 0.6585], [0.3684, 0.2879, 0.6613], [0.3687, 0.2927, 0.6641], [0.369, 0.2974, 0.6668], [0.3692, 0.3022, 0.6695], [0.3694, 0.3069, 0.6721], [0.3697, 0.3117, 0.6746], [0.3699, 0.3164, 0.677], [0.3701, 0.3211, 0.6794], [0.3703, 0.3258, 0.6818], [0.3705, 0.3305, 0.6841], [0.3707, 0.3352, 0.6863], [0.3709, 0.3399, 0.6885], [0.3712, 0.3445, 0.6907], [0.3714, 0.3492, 0.6927], [0.3716, 0.3538, 0.6948], [0.3719, 0.3584, 0.6968], [0.3721, 0.3631, 0.6987], [0.3724, 0.3677, 0.7006], [0.3726, 0.3723, 0.7024], [0.3729, 0.3768, 0.7042], [0.3732, 0.3814, 0.706], [0.3736, 0.386, 0.7077], [0.3739, 0.3905, 0.7094], [0.3743, 0.395, 0.711], [0.3747, 0.3996, 0.7126], [0.3751, 0.4041, 0.7141], [0.3756, 0.4086, 0.7156], [0.3761, 0.413, 0.7171], [0.3766, 0.4175, 0.7185], [0.3772, 0.4219, 0.7199], [0.3778, 0.4264, 0.7213], [0.3784, 0.4308, 0.7226], [0.3791, 0.4352, 0.7239], [0.3798, 0.4396, 0.7251], [0.3806, 0.444, 0.7264], [0.3814, 0.4484, 0.7276], [0.3822, 0.4527, 0.7287], [0.3831, 0.4571, 0.7298], [0.3841, 0.4614, 0.7309], [0.3851, 0.4657, 0.732], [0.3861, 0.47, 0.7331], [0.3872, 0.4743, 0.7341], [0.3884, 0.4786, 0.7351], [0.3896, 0.4828, 0.736], [0.3909, 0.4871, 0.737], [0.3923, 0.4913, 0.7379], [0.3937, 0.4955, 0.7388], [0.3951, 0.4997, 0.7397], [0.3967, 0.5039, 0.7405], [0.3983, 0.5081, 0.7414], [0.3999, 0.5122, 0.7422], [0.4017, 0.5164, 0.743], [0.4035, 0.5205, 0.7437], [0.4053, 0.5246, 0.7445], [0.4073, 0.5287, 0.7452], [0.4093, 0.5328, 0.746], [0.4114, 0.5368, 0.7467], [0.4135, 0.5409, 0.7474], [0.4157, 0.5449, 0.7481], [0.418, 0.549, 0.7488], [0.4204, 0.553, 0.7494], [0.4228, 0.557, 0.7501], [0.4253, 0.561, 0.7508], [0.4279, 0.565, 0.7514], [0.4306, 0.5689, 0.752], [0.4333, 0.5729, 0.7527], [0.4361, 0.5768, 0.7533], [0.439, 0.5807, 0.7539], [0.4419, 0.5846, 0.7545], [0.4449, 0.5885, 0.7551], [0.448, 0.5924, 0.7557], [0.4512, 0.5962, 0.7564], [0.4544, 0.6001, 0.757], [0.4577, 0.6039, 0.7576], [0.4611, 0.6078, 0.7582], [0.4646, 0.6116, 0.7588], [0.4681, 0.6154, 0.7594], [0.4717, 0.6192, 0.76], [0.4753, 0.6229, 0.7607], [0.4791, 0.6267, 0.7613], [0.4829, 0.6304, 0.7619], [0.4867, 0.6342, 0.7626], [0.4907, 0.6379, 0.7632], [0.4947, 0.6416, 0.7639], [0.4987, 0.6453, 0.7645], [0.5029, 0.649, 0.7652], [0.5071, 0.6526, 0.7659], [0.5114, 0.6563, 0.7666], [0.5157, 0.6599, 0.7673], [0.5201, 0.6636, 0.7681], [0.5246, 0.6672, 0.7688], [0.5291, 0.6708, 0.7696], [0.5337, 0.6744, 0.7703], [0.5383, 0.678, 0.7711], [0.5431, 0.6815, 0.7719], [0.5478, 0.6851, 0.7728], [0.5527, 0.6886, 0.7736], [0.5576, 0.6922, 0.7745], [0.5626, 0.6957, 0.7754], [0.5676, 0.6992, 0.7763], [0.5727, 0.7027, 0.7773], [0.5778, 0.7061, 0.7783], [0.583, 0.7096, 0.7793], [0.5883, 0.713, 0.7803], [0.5936, 0.7165, 0.7814], [0.599, 0.7199, 0.7825], [0.6044, 0.7233, 0.7836], [0.6099, 0.7267, 0.7847], [0.6154, 0.73, 0.786], [0.621, 0.7334, 0.7872], [0.6266, 0.7367, 0.7885], [0.6323, 0.74, 0.7898], [0.638, 0.7433, 0.7912], [0.6438, 0.7466, 0.7926], [0.6496, 0.7499, 0.794], [0.6554, 0.7531, 0.7955], [0.6613, 0.7563, 0.797], [0.6672, 0.7595, 0.7986], [0.6731, 0.7627, 0.8003], [0.6791, 0.7658, 0.802], [0.6851, 0.769, 0.8037], [0.691, 0.7721, 0.8055], [0.697, 0.7752, 0.8073], [0.703, 0.7782, 0.8092], [0.709, 0.7813, 0.8111], [0.715, 0.7843, 0.8131], [0.721, 0.7872, 0.8151], [0.7269, 0.7902, 0.8172], [0.7328, 0.7931, 0.8193], [0.7387, 0.796, 0.8214], [0.7446, 0.7988, 0.8236], [0.7504, 0.8016, 0.8258], [0.7562, 0.8044, 0.828], [0.7619, 0.8071, 0.8303], [0.7675, 0.8098, 0.8325], [0.7731, 0.8124, 0.8348], [0.7786, 0.815, 0.8371], [0.784, 0.8176, 0.8394], [0.7893, 0.82, 0.8416], [0.7945, 0.8225, 0.8439], [0.7997, 0.8248, 0.8462], [0.8047, 0.8271, 0.8484], [0.8096, 0.8293, 0.8506], [0.8144, 0.8315, 0.8528], [0.819, 0.8335, 0.855], [0.8236, 0.8355, 0.8571], [0.828, 0.8374, 0.8592], [0.8322, 0.8392, 0.8613], [0.8363, 0.8409, 0.8633], [0.8403, 0.8426, 0.8653], [0.8441, 0.8441, 0.8672], [0.8478, 0.8455, 0.869], [0.8513, 0.8467, 0.8709], [0.8547, 0.8479, 0.8726], [0.858, 0.8489, 0.8743], [0.8611, 0.8498, 0.876], [0.8641, 0.8505, 0.8776], [0.867, 0.8511, 0.8791], [0.8697, 0.8515, 0.8805], [0.8723, 0.8518, 0.8819], [0.8749, 0.8519, 0.8832], [0.8772, 0.8519, 0.8843], [0.8795, 0.8517, 0.8854], [0.8817, 0.8513, 0.8864], [0.8838, 0.8507, 0.8872], [0.8858, 0.85, 0.888], [0.8857, 0.85, 0.8857], [0.8855, 0.8499, 0.8834], [0.8853, 0.8496, 0.8809], [0.8849, 0.8491, 0.8783], [0.8843, 0.8484, 0.8756], [0.8837, 0.8476, 0.8727], [0.883, 0.8467, 0.8698], [0.8821, 0.8456, 0.8667], [0.8812, 0.8443, 0.8636], [0.8802, 0.8429, 0.8603], [0.8791, 0.8413, 0.8569], [0.878, 0.8395, 0.8533], [0.8769, 0.8376, 0.8496], [0.8757, 0.8355, 0.8458], [0.8745, 0.8333, 0.8417], [0.8734, 0.831, 0.8375], [0.8722, 0.8285, 0.833], [0.8709, 0.8259, 0.8284], [0.8697, 0.8231, 0.8235], [0.8684, 0.8203, 0.8184], [0.8671, 0.8174, 0.8131], [0.8656, 0.8144, 0.8077], [0.8642, 0.8112, 0.802], [0.8627, 0.8081, 0.7963], [0.8611, 0.8048, 0.7904], [0.8594, 0.8014, 0.7844], [0.8578, 0.798, 0.7783], [0.856, 0.7945, 0.7721], [0.8543, 0.791, 0.7658], [0.8525, 0.7873, 0.7595], [0.8507, 0.7837, 0.7531], [0.8489, 0.7799, 0.7466], [0.8471, 0.7761, 0.7401], [0.8453, 0.7723, 0.7336], [0.8435, 0.7684, 0.727], [0.8417, 0.7644, 0.7203], [0.8399, 0.7604, 0.7137], [0.8381, 0.7564, 0.707], [0.8363, 0.7523, 0.7003], [0.8346, 0.7481, 0.6936], [0.8328, 0.744, 0.6868], [0.8311, 0.7398, 0.6801], [0.8294, 0.7355, 0.6733], [0.8278, 0.7313, 0.6666], [0.8261, 0.727, 0.6599], [0.8245, 0.7226, 0.6531], [0.8229, 0.7183, 0.6464], [0.8214, 0.7139, 0.6397], [0.8199, 0.7095, 0.633], [0.8184, 0.7051, 0.6264], [0.8169, 0.7006, 0.6198], [0.8155, 0.6961, 0.6132], [0.8141, 0.6916, 0.6066], [0.8127, 0.6871, 0.6001], [0.8114, 0.6826, 0.5936], [0.81, 0.678, 0.5871], [0.8087, 0.6735, 0.5807], [0.8075, 0.6689, 0.5743], [0.8062, 0.6643, 0.568], [0.805, 0.6596, 0.5618], [0.8038, 0.655, 0.5556], [0.8026, 0.6503, 0.5494], [0.8014, 0.6457, 0.5433], [0.8003, 0.641, 0.5373], [0.7992, 0.6363, 0.5313], [0.798, 0.6316, 0.5255], [0.7969, 0.6268, 0.5196], [0.7958, 0.6221, 0.5139], [0.7948, 0.6174, 0.5082], [0.7937, 0.6126, 0.5026], [0.7926, 0.6078, 0.4971], [0.7915, 0.6031, 0.4916], [0.7905, 0.5983, 0.4862], [0.7894, 0.5935, 0.4809], [0.7883, 0.5887, 0.4757], [0.7872, 0.5839, 0.4706], [0.7862, 0.5791, 0.4655], [0.7851, 0.5742, 0.4606], [0.784, 0.5694, 0.4557], [0.7829, 0.5646, 0.4509], [0.7817, 0.5598, 0.4462], [0.7806, 0.5549, 0.4416], [0.7795, 0.5501, 0.4371], [0.7783, 0.5452, 0.4327], [0.7771, 0.5404, 0.4284], [0.7759, 0.5355, 0.4241], [0.7747, 0.5307, 0.42], [0.7734, 0.5259, 0.4159], [0.7722, 0.521, 0.412], [0.7709, 0.5162, 0.4081], [0.7696, 0.5113, 0.4043], [0.7682, 0.5065, 0.4006], [0.7669, 0.5017, 0.397], [0.7655, 0.4968, 0.3935], [0.764, 0.492, 0.3901], [0.7626, 0.4872, 0.3868], [0.7611, 0.4824, 0.3835], [0.7596, 0.4776, 0.3804], [0.758, 0.4728, 0.3773], [0.7564, 0.468, 0.3743], [0.7548, 0.4632, 0.3714], [0.7532, 0.4584, 0.3686], [0.7515, 0.4536, 0.3659], [0.7498, 0.4489, 0.3633], [0.748, 0.4441, 0.3607], [0.7463, 0.4394, 0.3582], [0.7445, 0.4347, 0.3558], [0.7426, 0.4299, 0.3535], [0.7407, 0.4252, 0.3513], [0.7388, 0.4205, 0.3491], [0.7368, 0.4159, 0.347], [0.7348, 0.4112, 0.345], [0.7328, 0.4065, 0.3431], [0.7307, 0.4019, 0.3412], [0.7286, 0.3972, 0.3395], [0.7265, 0.3926, 0.3377], [0.7243, 0.388, 0.3361], [0.7221, 0.3834, 0.3345], [0.7199, 0.3788, 0.333], [0.7176, 0.3743, 0.3315], [0.7153, 0.3697, 0.3301], [0.7129, 0.3652, 0.3288], [0.7105, 0.3607, 0.3275], [0.7081, 0.3561, 0.3263], [0.7057, 0.3517, 0.3252], [0.7032, 0.3472, 0.3241], [0.7006, 0.3427, 0.3231], [0.6981, 0.3383, 0.3221], [0.6955, 0.3339, 0.3211], [0.6928, 0.3295, 0.3203], [0.6901, 0.3251, 0.3195], [0.6874, 0.3207, 0.3187], [0.6847, 0.3163, 0.318], [0.6819, 0.312, 0.3173], [0.6791, 0.3077, 0.3167], [0.6762, 0.3034, 0.3161], [0.6733, 0.2991, 0.3155], [0.6704, 0.2949, 0.315], [0.6674, 0.2906, 0.3146], [0.6644, 0.2864, 0.3142], [0.6614, 0.2822, 0.3138], [0.6583, 0.278, 0.3135], [0.6552, 0.2739, 0.3132], [0.6521, 0.2697, 0.3129], [0.6489, 0.2656, 0.3127], [0.6457, 0.2616, 0.3125], [0.6424, 0.2575, 0.3123], [0.6391, 0.2535, 0.3122], [0.6358, 0.2494, 0.3121], [0.6324, 0.2455, 0.312], [0.629, 0.2415, 0.312], [0.6256, 0.2376, 0.312], [0.6221, 0.2337, 0.312], [0.6186, 0.2298, 0.312], [0.615, 0.2259, 0.3121], [0.6114, 0.2221, 0.3121], [0.6078, 0.2184, 0.3122], [0.6041, 0.2146, 0.3123], [0.6004, 0.2109, 0.3124], [0.5966, 0.2072, 0.3126], [0.5928, 0.2036, 0.3127], [0.5889, 0.2, 0.3129], [0.5851, 0.1964, 0.3131], [0.5811, 0.1929, 0.3132], [0.5772, 0.1894, 0.3134], [0.5731, 0.186, 0.3136], [0.5691, 0.1826, 0.3137], [0.565, 0.1792, 0.3139], [0.5608, 0.1759, 0.3141], [0.5566, 0.1727, 0.3142], [0.5524, 0.1695, 0.3144], [0.5481, 0.1664, 0.3145], [0.5438, 0.1633, 0.3146], [0.5394, 0.1602, 0.3147], [0.535, 0.1573, 0.3148], [0.5305, 0.1544, 0.3148], [0.526, 0.1515, 0.3148], [0.5215, 0.1487, 0.3148], [0.5169, 0.146, 0.3148], [0.5123, 0.1433, 0.3147], [0.5076, 0.1407, 0.3145], [0.5029, 0.1382, 0.3144], [0.4981, 0.1357, 0.3141], [0.4934, 0.1333, 0.3139], [0.4885, 0.1309, 0.3135], [0.4837, 0.1286, 0.3132], [0.4788, 0.1264, 0.3127], [0.4738, 0.1243, 0.3123], [0.4689, 0.1222, 0.3117], [0.4639, 0.1201, 0.3111], [0.4589, 0.1181, 0.3104], [0.4538, 0.1162, 0.3097], [0.4488, 0.1144, 0.3089], [0.4437, 0.1125, 0.308], [0.4386, 0.1108, 0.3071], [0.4334, 0.1091, 0.3061], [0.4283, 0.1074, 0.3051], [0.4231, 0.1058, 0.304], [0.418, 0.1042, 0.3028], [0.4128, 0.1027, 0.3015], [0.4076, 0.1012, 0.3002], [0.4024, 0.0997, 0.2989], [0.3972, 0.0983, 0.2974], [0.392, 0.0969, 0.296], [0.3868, 0.0956, 0.2944], [0.3816, 0.0942, 0.2928], [0.3764, 0.0929, 0.2912], [0.3712, 0.0917, 0.2895], [0.3661, 0.0904, 0.2877], [0.3609, 0.0892, 0.2859], [0.3557, 0.088, 0.2841], [0.3506, 0.0869, 0.2822], [0.3455, 0.0857, 0.2803], [0.3404, 0.0846, 0.2783], [0.3353, 0.0835, 0.2763], [0.3303, 0.0825, 0.2743], [0.3253, 0.0814, 0.2723], [0.3203, 0.0804, 0.2702], [0.3154, 0.0794, 0.2681], [0.3105, 0.0785, 0.266], [0.3056, 0.0775, 0.2639], [0.3008, 0.0766, 0.2618], [0.296, 0.0757, 0.2597], [0.2913, 0.0749, 0.2576], [0.2866, 0.0741, 0.2554], [0.282, 0.0733, 0.2533], [0.2775, 0.0726, 0.2512], [0.273, 0.0719, 0.2492], [0.2686, 0.0712, 0.2471], [0.2643, 0.0706, 0.2451], [0.26, 0.0701, 0.2431], [0.2558, 0.0695, 0.2411], [0.2517, 0.0691, 0.2392], [0.2477, 0.0687, 0.2373], [0.2438, 0.0683, 0.2355], [0.24, 0.068, 0.2337], [0.2363, 0.0677, 0.232], [0.2327, 0.0676, 0.2304], [0.2292, 0.0674, 0.2288], [0.2258, 0.0674, 0.2273], [0.2225, 0.0674, 0.2259], [0.2193, 0.0675, 0.2245], [0.2163, 0.0676, 0.2232], [0.2133, 0.0678, 0.2221], [0.2105, 0.0681, 0.221], [0.2079, 0.0685, 0.22], [0.2053, 0.0689, 0.2191], [0.2029, 0.0694, 0.2183], [0.2006, 0.0701, 0.2176], [0.1982, 0.071, 0.2169], [0.1957, 0.0722, 0.2162], [0.1932, 0.0736, 0.2154], [0.1905, 0.0753, 0.2147], [0.1877, 0.0773, 0.2139], [0.1849, 0.0794, 0.2131]] }, "viridis": { "interpolate": true, "colors": [[0.267, 0.0049, 0.3294], [0.2685, 0.0096, 0.3354], [0.2699, 0.0146, 0.3414], [0.2713, 0.0199, 0.3473], [0.2726, 0.0256, 0.3531], [0.2738, 0.0315, 0.3589], [0.275, 0.0378, 0.3645], [0.276, 0.0442, 0.3702], [0.277, 0.0503, 0.3757], [0.2779, 0.0563, 0.3812], [0.2788, 0.0621, 0.3866], [0.2796, 0.0678, 0.3919], [0.2803, 0.0734, 0.3972], [0.2809, 0.0789, 0.4023], [0.2814, 0.0843, 0.4074], [0.2819, 0.0897, 0.4124], [0.2823, 0.095, 0.4173], [0.2827, 0.1002, 0.4222], [0.2829, 0.1054, 0.4269], [0.2831, 0.1106, 0.4316], [0.2832, 0.1157, 0.4361], [0.2832, 0.1208, 0.4406], [0.2832, 0.1258, 0.445], [0.2831, 0.1309, 0.4492], [0.2829, 0.1359, 0.4534], [0.2826, 0.1409, 0.4575], [0.2823, 0.1459, 0.4615], [0.2819, 0.1509, 0.4654], [0.2814, 0.1558, 0.4692], [0.2809, 0.1608, 0.4729], [0.2803, 0.1657, 0.4765], [0.2796, 0.1706, 0.48], [0.2788, 0.1755, 0.4834], [0.278, 0.1804, 0.4867], [0.2771, 0.1852, 0.4899], [0.2762, 0.1901, 0.493], [0.2752, 0.1949, 0.496], [0.2741, 0.1997, 0.4989], [0.273, 0.2045, 0.5017], [0.2718, 0.2093, 0.5044], [0.2706, 0.2141, 0.5071], [0.2693, 0.2188, 0.5096], [0.268, 0.2235, 0.512], [0.2666, 0.2283, 0.5143], [0.2651, 0.233, 0.5166], [0.2637, 0.2376, 0.5188], [0.2621, 0.2423, 0.5208], [0.2606, 0.2469, 0.5228], [0.259, 0.2515, 0.5247], [0.2573, 0.2561, 0.5266], [0.2556, 0.2607, 0.5283], [0.2539, 0.2653, 0.53], [0.2522, 0.2698, 0.5316], [0.2504, 0.2743, 0.5331], [0.2486, 0.2788, 0.5346], [0.2468, 0.2832, 0.5359], [0.245, 0.2877, 0.5373], [0.2431, 0.2921, 0.5385], [0.2412, 0.2965, 0.5397], [0.2393, 0.3009, 0.5408], [0.2374, 0.3052, 0.5419], [0.2355, 0.3095, 0.5429], [0.2336, 0.3138, 0.5439], [0.2317, 0.3181, 0.5448], [0.2297, 0.3224, 0.5457], [0.2278, 0.3266, 0.5465], [0.2259, 0.3308, 0.5473], [0.2239, 0.335, 0.5481], [0.222, 0.3392, 0.5488], [0.2201, 0.3433, 0.5494], [0.2181, 0.3474, 0.55], [0.2162, 0.3515, 0.5506], [0.2143, 0.3556, 0.5512], [0.2124, 0.3597, 0.5517], [0.2105, 0.3637, 0.5522], [0.2086, 0.3678, 0.5527], [0.2068, 0.3718, 0.5531], [0.2049, 0.3757, 0.5535], [0.2031, 0.3797, 0.5539], [0.2012, 0.3837, 0.5543], [0.1994, 0.3876, 0.5546], [0.1976, 0.3915, 0.555], [0.1959, 0.3954, 0.5553], [0.1941, 0.3993, 0.5556], [0.1924, 0.4032, 0.5558], [0.1906, 0.4071, 0.5561], [0.1889, 0.4109, 0.5563], [0.1872, 0.4147, 0.5565], [0.1856, 0.4186, 0.5568], [0.1839, 0.4224, 0.5569], [0.1823, 0.4262, 0.5571], [0.1806, 0.43, 0.5573], [0.179, 0.4338, 0.5574], [0.1774, 0.4375, 0.5576], [0.1758, 0.4413, 0.5577], [0.1743, 0.445, 0.5578], [0.1727, 0.4488, 0.5579], [0.1712, 0.4525, 0.558], [0.1696, 0.4563, 0.558], [0.1681, 0.46, 0.5581], [0.1666, 0.4637, 0.5581], [0.1651, 0.4674, 0.5581], [0.1636, 0.4711, 0.5581], [0.1621, 0.4748, 0.5581], [0.1607, 0.4785, 0.5581], [0.1592, 0.4822, 0.5581], [0.1577, 0.4859, 0.558], [0.1563, 0.4896, 0.5579], [0.1548, 0.4933, 0.5578], [0.1534, 0.497, 0.5577], [0.1519, 0.5007, 0.5576], [0.1505, 0.5044, 0.5574], [0.149, 0.5081, 0.5572], [0.1476, 0.5117, 0.557], [0.1462, 0.5154, 0.5568], [0.1448, 0.5191, 0.5566], [0.1433, 0.5228, 0.5563], [0.1419, 0.5265, 0.556], [0.1405, 0.5301, 0.5557], [0.1391, 0.5338, 0.5553], [0.1378, 0.5375, 0.5549], [0.1364, 0.5412, 0.5545], [0.1351, 0.5449, 0.554], [0.1337, 0.5485, 0.5535], [0.1324, 0.5522, 0.553], [0.1312, 0.5559, 0.5525], [0.1299, 0.5596, 0.5519], [0.1287, 0.5633, 0.5512], [0.1276, 0.5669, 0.5506], [0.1265, 0.5706, 0.5498], [0.1254, 0.5743, 0.5491], [0.1244, 0.578, 0.5483], [0.1235, 0.5817, 0.5474], [0.1226, 0.5854, 0.5466], [0.1218, 0.5891, 0.5456], [0.1211, 0.5927, 0.5446], [0.1206, 0.5964, 0.5436], [0.1201, 0.6001, 0.5425], [0.1197, 0.6038, 0.5414], [0.1195, 0.6075, 0.5402], [0.1194, 0.6111, 0.539], [0.1195, 0.6148, 0.5377], [0.1197, 0.6185, 0.5363], [0.1201, 0.6222, 0.5349], [0.1206, 0.6258, 0.5335], [0.1214, 0.6295, 0.532], [0.1223, 0.6332, 0.5304], [0.1234, 0.6368, 0.5288], [0.1248, 0.6405, 0.5271], [0.1263, 0.6441, 0.5253], [0.1281, 0.6477, 0.5235], [0.1301, 0.6514, 0.5216], [0.1323, 0.655, 0.5197], [0.1347, 0.6586, 0.5176], [0.1373, 0.6623, 0.5156], [0.1402, 0.6659, 0.5134], [0.1433, 0.6695, 0.5112], [0.1466, 0.673, 0.5089], [0.1501, 0.6766, 0.5066], [0.1539, 0.6802, 0.5042], [0.1579, 0.6838, 0.5017], [0.162, 0.6873, 0.4991], [0.1664, 0.6909, 0.4965], [0.1709, 0.6944, 0.4938], [0.1757, 0.6979, 0.491], [0.1807, 0.7014, 0.4882], [0.1858, 0.7049, 0.4853], [0.1911, 0.7084, 0.4823], [0.1966, 0.7118, 0.4792], [0.2022, 0.7153, 0.4761], [0.208, 0.7187, 0.4729], [0.214, 0.7221, 0.4696], [0.2201, 0.7255, 0.4662], [0.2264, 0.7289, 0.4628], [0.2328, 0.7322, 0.4593], [0.2394, 0.7356, 0.4557], [0.2461, 0.7389, 0.452], [0.2529, 0.7422, 0.4483], [0.2599, 0.7455, 0.4445], [0.2669, 0.7488, 0.4406], [0.2741, 0.752, 0.4366], [0.2815, 0.7552, 0.4326], [0.2889, 0.7584, 0.4284], [0.2965, 0.7616, 0.4242], [0.3041, 0.7647, 0.4199], [0.3119, 0.7678, 0.4156], [0.3198, 0.7709, 0.4112], [0.3278, 0.774, 0.4066], [0.3359, 0.777, 0.402], [0.3441, 0.78, 0.3974], [0.3524, 0.783, 0.3926], [0.3607, 0.786, 0.3878], [0.3692, 0.7889, 0.3829], [0.3778, 0.7918, 0.3779], [0.3864, 0.7946, 0.3729], [0.3952, 0.7975, 0.3678], [0.404, 0.8003, 0.3626], [0.4129, 0.803, 0.3573], [0.4219, 0.8058, 0.3519], [0.431, 0.8085, 0.3465], [0.4401, 0.8111, 0.341], [0.4494, 0.8138, 0.3354], [0.4587, 0.8164, 0.3297], [0.4681, 0.8189, 0.324], [0.4775, 0.8214, 0.3182], [0.487, 0.8239, 0.3123], [0.4966, 0.8264, 0.3064], [0.5063, 0.8288, 0.3004], [0.516, 0.8312, 0.2943], [0.5258, 0.8335, 0.2881], [0.5356, 0.8358, 0.2819], [0.5455, 0.838, 0.2756], [0.5555, 0.8403, 0.2693], [0.5655, 0.8424, 0.2629], [0.5756, 0.8446, 0.2564], [0.5857, 0.8467, 0.2499], [0.5958, 0.8487, 0.2433], [0.606, 0.8507, 0.2367], [0.6163, 0.8527, 0.2301], [0.6266, 0.8546, 0.2234], [0.6369, 0.8565, 0.2166], [0.6473, 0.8584, 0.2099], [0.6576, 0.8602, 0.2031], [0.6681, 0.862, 0.1963], [0.6785, 0.8637, 0.1895], [0.6889, 0.8654, 0.1827], [0.6994, 0.8671, 0.176], [0.7099, 0.8688, 0.1693], [0.7204, 0.8704, 0.1626], [0.7309, 0.8719, 0.156], [0.7414, 0.8734, 0.1496], [0.7519, 0.875, 0.1432], [0.7624, 0.8764, 0.1371], [0.7729, 0.8779, 0.1311], [0.7833, 0.8793, 0.1254], [0.7938, 0.8807, 0.12], [0.8042, 0.882, 0.115], [0.8146, 0.8834, 0.1103], [0.8249, 0.8847, 0.1062], [0.8353, 0.886, 0.1026], [0.8456, 0.8873, 0.0997], [0.8558, 0.8886, 0.0975], [0.866, 0.8899, 0.096], [0.8762, 0.8911, 0.0952], [0.8863, 0.8924, 0.0954], [0.8963, 0.8936, 0.0963], [0.9063, 0.8949, 0.0981], [0.9162, 0.8961, 0.1007], [0.9261, 0.8973, 0.1041], [0.9359, 0.8986, 0.1081], [0.9456, 0.8998, 0.1128], [0.9553, 0.9011, 0.1181], [0.9649, 0.9023, 0.1239], [0.9744, 0.9036, 0.1302], [0.9839, 0.9049, 0.1369], [0.9932, 0.9062, 0.1439]] }, "winter": {
        "interpolate": true, "colors": [[0.0, 0.0, 1.0], [0.0, 0.0039, 0.998], [0.0, 0.0078, 0.9961], [0.0, 0.0118, 0.9941], [0.0, 0.0157, 0.9922], [0.0, 0.0196, 0.9902], [0.0, 0.0235, 0.9882], [0.0, 0.0275, 0.9863], [0.0, 0.0314, 0.9843], [0.0, 0.0353, 0.9824], [0.0, 0.0392, 0.9804], [0.0, 0.0431, 0.9784], [0.0, 0.0471, 0.9765], [0.0, 0.051, 0.9745], [0.0, 0.0549, 0.9725], [0.0, 0.0588, 0.9706], [0.0, 0.0627, 0.9686], [0.0, 0.0667, 0.9667], [0.0, 0.0706, 0.9647], [0.0, 0.0745, 0.9627], [0.0, 0.0784, 0.9608], [0.0, 0.0824, 0.9588], [0.0, 0.0863, 0.9569], [0.0, 0.0902, 0.9549], [0.0, 0.0941, 0.9529], [0.0, 0.098, 0.951], [0.0, 0.102, 0.949], [0.0, 0.1059, 0.9471], [0.0, 0.1098, 0.9451], [0.0, 0.1137, 0.9431], [0.0, 0.1176, 0.9412], [0.0, 0.1216, 0.9392], [0.0, 0.1255, 0.9373], [0.0, 0.1294, 0.9353], [0.0, 0.1333, 0.9333], [0.0, 0.1373, 0.9314], [0.0, 0.1412, 0.9294], [0.0, 0.1451, 0.9275], [0.0, 0.149, 0.9255], [0.0, 0.1529, 0.9235], [0.0, 0.1569, 0.9216], [0.0, 0.1608, 0.9196], [0.0, 0.1647, 0.9176], [0.0, 0.1686, 0.9157], [0.0, 0.1725, 0.9137], [0.0, 0.1765, 0.9118], [0.0, 0.1804, 0.9098], [0.0, 0.1843, 0.9078], [0.0, 0.1882, 0.9059], [0.0, 0.1922, 0.9039], [0.0, 0.1961, 0.902], [0.0, 0.2, 0.9], [0.0, 0.2039, 0.898], [0.0, 0.2078, 0.8961], [0.0, 0.2118, 0.8941], [0.0, 0.2157, 0.8922], [0.0, 0.2196, 0.8902], [0.0, 0.2235, 0.8882], [0.0, 0.2275, 0.8863], [0.0, 0.2314, 0.8843], [0.0, 0.2353, 0.8824], [0.0, 0.2392, 0.8804], [0.0, 0.2431, 0.8784], [0.0, 0.2471, 0.8765], [0.0, 0.251, 0.8745], [0.0, 0.2549, 0.8725], [0.0, 0.2588, 0.8706], [0.0, 0.2627, 0.8686], [0.0, 0.2667, 0.8667], [0.0, 0.2706, 0.8647], [0.0, 0.2745, 0.8627], [0.0, 0.2784, 0.8608], [0.0, 0.2824, 0.8588], [0.0, 0.2863, 0.8569], [0.0, 0.2902, 0.8549], [0.0, 0.2941, 0.8529], [0.0, 0.298, 0.851], [0.0, 0.302, 0.849], [0.0, 0.3059, 0.8471], [0.0, 0.3098, 0.8451], [0.0, 0.3137, 0.8431], [0.0, 0.3176, 0.8412], [0.0, 0.3216, 0.8392], [0.0, 0.3255, 0.8373], [0.0, 0.3294, 0.8353], [0.0, 0.3333, 0.8333], [0.0, 0.3373, 0.8314], [0.0, 0.3412, 0.8294], [0.0, 0.3451, 0.8275], [0.0, 0.349, 0.8255], [0.0, 0.3529, 0.8235], [0.0, 0.3569, 0.8216], [0.0, 0.3608, 0.8196], [0.0, 0.3647, 0.8176], [0.0, 0.3686, 0.8157], [0.0, 0.3725, 0.8137], [0.0, 0.3765, 0.8118], [0.0, 0.3804, 0.8098], [0.0, 0.3843, 0.8078], [0.0, 0.3882, 0.8059], [0.0, 0.3922, 0.8039], [0.0, 0.3961, 0.802], [0.0, 0.4, 0.8], [0.0, 0.4039, 0.798], [0.0, 0.4078, 0.7961], [0.0, 0.4118, 0.7941], [0.0, 0.4157, 0.7922], [0.0, 0.4196, 0.7902], [0.0, 0.4235, 0.7882], [0.0, 0.4275, 0.7863], [0.0, 0.4314, 0.7843], [0.0, 0.4353, 0.7824], [0.0, 0.4392, 0.7804], [0.0, 0.4431, 0.7784], [0.0, 0.4471, 0.7765], [0.0, 0.451, 0.7745], [0.0, 0.4549, 0.7725], [0.0, 0.4588, 0.7706], [0.0, 0.4627, 0.7686], [0.0, 0.4667, 0.7667], [0.0, 0.4706, 0.7647], [0.0, 0.4745, 0.7627], [0.0, 0.4784, 0.7608], [0.0, 0.4824, 0.7588], [0.0, 0.4863, 0.7569], [0.0, 0.4902, 0.7549], [0.0, 0.4941, 0.7529], [0.0, 0.498, 0.751], [0.0, 0.502, 0.749], [0.0, 0.5059, 0.7471], [0.0, 0.5098, 0.7451], [0.0, 0.5137, 0.7431], [0.0, 0.5176, 0.7412], [0.0, 0.5216, 0.7392], [0.0, 0.5255, 0.7373], [0.0, 0.5294, 0.7353], [0.0, 0.5333, 0.7333], [0.0, 0.5373, 0.7314], [0.0, 0.5412, 0.7294], [0.0, 0.5451, 0.7275], [0.0, 0.549, 0.7255], [0.0, 0.5529, 0.7235], [0.0, 0.5569, 0.7216], [0.0, 0.5608, 0.7196], [0.0, 0.5647, 0.7176], [0.0, 0.5686, 0.7157], [0.0, 0.5725, 0.7137], [0.0, 0.5765, 0.7118], [0.0, 0.5804, 0.7098], [0.0, 0.5843, 0.7078], [0.0, 0.5882, 0.7059], [0.0, 0.5922, 0.7039], [0.0, 0.5961, 0.702], [0.0, 0.6, 0.7], [0.0, 0.6039, 0.698], [0.0, 0.6078, 0.6961], [0.0, 0.6118, 0.6941], [0.0, 0.6157, 0.6922], [0.0, 0.6196, 0.6902], [0.0, 0.6235, 0.6882], [0.0, 0.6275, 0.6863], [0.0, 0.6314, 0.6843], [0.0, 0.6353, 0.6824], [0.0, 0.6392, 0.6804], [0.0, 0.6431, 0.6784], [0.0, 0.6471, 0.6765], [0.0, 0.651, 0.6745], [0.0, 0.6549, 0.6725], [0.0, 0.6588, 0.6706], [0.0, 0.6627, 0.6686], [0.0, 0.6667, 0.6667], [0.0, 0.6706, 0.6647], [0.0, 0.6745, 0.6627], [0.0, 0.6784, 0.6608], [0.0, 0.6824, 0.6588], [0.0, 0.6863, 0.6569], [0.0, 0.6902, 0.6549], [0.0, 0.6941, 0.6529], [0.0, 0.698, 0.651], [0.0, 0.702, 0.649], [0.0, 0.7059, 0.6471], [0.0, 0.7098, 0.6451], [0.0, 0.7137, 0.6431], [0.0, 0.7176, 0.6412], [0.0, 0.7216, 0.6392], [0.0, 0.7255, 0.6373], [0.0, 0.7294, 0.6353], [0.0, 0.7333, 0.6333], [0.0, 0.7373, 0.6314], [0.0, 0.7412, 0.6294], [0.0, 0.7451, 0.6275], [0.0, 0.749, 0.6255], [0.0, 0.7529, 0.6235], [0.0, 0.7569, 0.6216], [0.0, 0.7608, 0.6196], [0.0, 0.7647, 0.6176], [0.0, 0.7686, 0.6157], [0.0, 0.7725, 0.6137], [0.0, 0.7765, 0.6118], [0.0, 0.7804, 0.6098], [0.0, 0.7843, 0.6078], [0.0, 0.7882, 0.6059], [0.0, 0.7922, 0.6039], [0.0, 0.7961, 0.602], [0.0, 0.8, 0.6], [0.0, 0.8039, 0.598], [0.0, 0.8078, 0.5961], [0.0, 0.8118, 0.5941], [0.0, 0.8157, 0.5922], [0.0, 0.8196, 0.5902], [0.0, 0.8235, 0.5882], [0.0, 0.8275, 0.5863], [0.0, 0.8314, 0.5843], [0.0, 0.8353, 0.5824], [0.0, 0.8392, 0.5804], [0.0, 0.8431, 0.5784], [0.0, 0.8471, 0.5765], [0.0, 0.851, 0.5745], [0.0, 0.8549, 0.5725], [0.0, 0.8588, 0.5706], [0.0, 0.8627, 0.5686], [0.0, 0.8667, 0.5667], [0.0, 0.8706, 0.5647], [0.0, 0.8745, 0.5627], [0.0, 0.8784, 0.5608], [0.0, 0.8824, 0.5588], [0.0, 0.8863, 0.5569], [0.0, 0.8902, 0.5549], [0.0, 0.8941, 0.5529], [0.0, 0.898, 0.551], [0.0, 0.902, 0.549], [0.0, 0.9059, 0.5471], [0.0, 0.9098, 0.5451], [0.0, 0.9137, 0.5431], [0.0, 0.9176, 0.5412], [0.0, 0.9216, 0.5392], [0.0, 0.9255, 0.5373], [0.0, 0.9294, 0.5353], [0.0, 0.9333, 0.5333], [0.0, 0.9373, 0.5314], [0.0, 0.9412, 0.5294], [0.0, 0.9451, 0.5275], [0.0, 0.949, 0.5255], [0.0, 0.9529, 0.5235], [0.0, 0.9569, 0.5216], [0.0, 0.9608, 0.5196], [0.0, 0.9647, 0.5176], [0.0, 0.9686, 0.5157], [0.0, 0.9725, 0.5137], [0.0, 0.9765, 0.5118], [0.0, 0.9804, 0.5098], [0.0, 0.9843, 0.5078], [0.0, 0.9882, 0.5059], [0.0, 0.9922, 0.5039], [0.0, 0.9961, 0.502], [0.0, 1.0, 0.5]]
    }
};


/***/ }),

/***/ "./lib/utils/generateIsos.ts":
/*!***********************************!*\
  !*** ./lib/utils/generateIsos.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateIsos": () => (/* binding */ generateIsos),
/* harmony export */   "generateIsosByNumber": () => (/* binding */ generateIsosByNumber),
/* harmony export */   "generateIsosBySpacing": () => (/* binding */ generateIsosBySpacing)
/* harmony export */ });
/**
 * Generate iso-values given a min, max and the number of isos to generate
 * @param min The minimum value
 * @param max The maximum value
 * @param nbrOrSpacing Represent either the number of iso-contours (useSpacing=false)
 * or the spacing between iso-contours (useSpacing=true).
 * @param useSpacing If the generation is using or not the spacing between iso-contours.
 * Also, the generated iso values are snapped to zero in both cases.
 * @category Utils
 */
function generateIsos(min, max, nbrOrSpacingOrList = 10, useSpacing = false) {
    if (Array.isArray(nbrOrSpacingOrList)) {
        return nbrOrSpacingOrList.filter(v => v >= min && v <= max);
    }
    if (useSpacing) {
        return generateIsosBySpacing(min, max, nbrOrSpacingOrList);
    }
    return generateIsosByNumber(min, max, nbrOrSpacingOrList);
}
/**
 * Generate iso-values given the min, max and the number
 * @param min
 * @param max
 * @param nbr
 * @category Utils
 */
function generateIsosByNumber(min, max, nbr = 10) {
    if (min >= max) {
        return [];
    }
    const epsilon = (max - min) / (nbr);
    return generateIsosBySpacing(min, max, epsilon);
}
/**
 * Generate iso-values by using spacing.
 * Also, iso-values are snapped to zero, meaning that they alway pass through zero even
 * if 0 is not part of the iso values.
 * @param min
 * @param max
 * @param spacing
 * @category Utils
 */
function generateIsosBySpacing(min, max, spacing) {
    const r = [];
    if (max < min)
        throw new Error('Min should be less than max');
    if (Math.abs(max - min) / spacing > 500) {
        spacing = Math.abs(max - min) / 500;
        console.warn('WARNING: increeasing the spacing to ' + spacing + ' in order to avoid too many isos');
    }
    if (min < 0 && max > 0) {
        let value = spacing;
        while (value >= min + spacing)
            r.push(value -= spacing);
        value = 0;
        while (value <= max - spacing)
            r.push(value += spacing);
    }
    else {
        let scale = 1;
        if (max < 0) {
            scale = -1;
            const a = min;
            min = max;
            max = a;
        }
        if (min * scale >= max * scale)
            return [];
        let valueInc = Math.trunc(min * scale / spacing);
        if (valueInc * spacing < min * scale)
            valueInc++;
        let value = valueInc * spacing;
        while (value <= max * scale) {
            r.push(value * scale);
            value += spacing;
        }
    }
    return r.sort((a, b) => a - b);
}


/***/ }),

/***/ "./lib/utils/index.ts":
/*!****************************!*\
  !*** ./lib/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateIsos": () => (/* reexport safe */ _generateIsos__WEBPACK_IMPORTED_MODULE_0__.generateIsos),
/* harmony export */   "generateIsosByNumber": () => (/* reexport safe */ _generateIsos__WEBPACK_IMPORTED_MODULE_0__.generateIsosByNumber),
/* harmony export */   "generateIsosBySpacing": () => (/* reexport safe */ _generateIsos__WEBPACK_IMPORTED_MODULE_0__.generateIsosBySpacing),
/* harmony export */   "ColorMap": () => (/* reexport safe */ _colorMap__WEBPACK_IMPORTED_MODULE_1__.ColorMap),
/* harmony export */   "addColorMap": () => (/* reexport safe */ _colorMap__WEBPACK_IMPORTED_MODULE_1__.addColorMap),
/* harmony export */   "colorMapNames": () => (/* reexport safe */ _colorMap__WEBPACK_IMPORTED_MODULE_1__.colorMapNames),
/* harmony export */   "generateColorMap": () => (/* reexport safe */ _colorMap__WEBPACK_IMPORTED_MODULE_1__.generateColorMap),
/* harmony export */   "evaluate_cmap": () => (/* reexport safe */ _color_maps__WEBPACK_IMPORTED_MODULE_2__.evaluate_cmap),
/* harmony export */   "getColorMap": () => (/* reexport safe */ _color_maps__WEBPACK_IMPORTED_MODULE_2__.getColorMap),
/* harmony export */   "getColorMapNames": () => (/* reexport safe */ _color_maps__WEBPACK_IMPORTED_MODULE_2__.getColorMapNames),
/* harmony export */   "createLut": () => (/* reexport safe */ _lut_utils__WEBPACK_IMPORTED_MODULE_3__.createLut),
/* harmony export */   "fromValueToColor": () => (/* reexport safe */ _lut_utils__WEBPACK_IMPORTED_MODULE_3__.fromValueToColor),
/* harmony export */   "fromValuesToColors": () => (/* reexport safe */ _lut_utils__WEBPACK_IMPORTED_MODULE_3__.fromValuesToColors),
/* harmony export */   "lerp": () => (/* reexport safe */ _lerp__WEBPACK_IMPORTED_MODULE_4__.lerp),
/* harmony export */   "addColorToBufferGeometry": () => (/* reexport safe */ _bufferUtils__WEBPACK_IMPORTED_MODULE_5__.addColorToBufferGeometry),
/* harmony export */   "createBufferGeometry": () => (/* reexport safe */ _bufferUtils__WEBPACK_IMPORTED_MODULE_5__.createBufferGeometry),
/* harmony export */   "mergeBufferAttributes": () => (/* reexport safe */ _bufferUtils__WEBPACK_IMPORTED_MODULE_5__.mergeBufferAttributes),
/* harmony export */   "mergeBufferGeometries": () => (/* reexport safe */ _bufferUtils__WEBPACK_IMPORTED_MODULE_5__.mergeBufferGeometries),
/* harmony export */   "normalAttribute": () => (/* reexport safe */ _normalAttribute__WEBPACK_IMPORTED_MODULE_6__.normalAttribute),
/* harmony export */   "ScaleBar": () => (/* reexport safe */ _scaleBar__WEBPACK_IMPORTED_MODULE_7__.ScaleBar)
/* harmony export */ });
/* harmony import */ var _generateIsos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateIsos */ "./lib/utils/generateIsos.ts");
/* harmony import */ var _colorMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorMap */ "./lib/utils/colorMap.ts");
/* harmony import */ var _color_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color_maps */ "./lib/utils/color_maps.ts");
/* harmony import */ var _lut_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lut-utils */ "./lib/utils/lut-utils.ts");
/* harmony import */ var _lerp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lerp */ "./lib/utils/lerp.ts");
/* harmony import */ var _bufferUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bufferUtils */ "./lib/utils/bufferUtils.ts");
/* harmony import */ var _normalAttribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./normalAttribute */ "./lib/utils/normalAttribute.ts");
/* harmony import */ var _scaleBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scaleBar */ "./lib/utils/scaleBar.ts");










/***/ }),

/***/ "./lib/utils/lerp.ts":
/*!***************************!*\
  !*** ./lib/utils/lerp.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lerp": () => (/* binding */ lerp)
/* harmony export */ });
/**
 * @brief Linearly interpolates between two values. This name is a contraction of "linear interpolation"
 * @param t The parameter t is clamped to the range [0, 1]
 * @param min The minimum value
 * @param max The minimum value
 * @example
 * ```ts
 * lerp(0  , 1, 5) // 1
 * lerp(0.5, 1, 5) // 3
 * lerp(1  , 1, 5) // 5
 * ```
 * @category Utils
 */
const lerp = (t, min, max) => {
    if (t < 0 || t > 1)
        throw new Error(`t must be clamped to the range [0,1]. Got ${t}`);
    // if (Array.isArray(min)) {
    //     return min.map( (v,i) => {
    //         return (1 - t) * v + t * max[i]
    //     })
    // }
    return (1 - t) * min + t * max;
};


/***/ }),

/***/ "./lib/utils/lut-utils.ts":
/*!********************************!*\
  !*** ./lib/utils/lut-utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLut": () => (/* binding */ createLut),
/* harmony export */   "fromValueToColor": () => (/* binding */ fromValueToColor),
/* harmony export */   "fromValuesToColors": () => (/* binding */ fromValuesToColors)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorMap */ "./lib/utils/colorMap.ts");


/**
 * Create a new Lut and register several tables in it
 * @category Lookup Table
 */
function createLut(name = "rainbow", nbColors = 32, duplicate = 1) {
    return (0,_colorMap__WEBPACK_IMPORTED_MODULE_1__.generateColorMap)(name, nbColors, duplicate);
}
/**
 * @param value The value to transform in to a color using a lookup table
 * @param params An object to deal with min, max, lut, default-color and reverse table.
 * The value **must** be normalized.
 * @returns [reg, green, blue]
 * @category Lookup Table
 */
function fromValueToColor(value, { min = 0, max = 1, lutTable, defaultColor, reverse = false }) {
    if (value < 0 || value > 1) {
        throw new Error(`value *must% be normalized. Got ${value}`);
    }
    let w = reverse ? (1.0 - value) : value;
    if (w >= min && w <= max) {
        const c = lutTable.getColor(w);
        return [c.r, c.g, c.b];
    }
    return [defaultColor.r, defaultColor.g, defaultColor.b];
}
/**
 * @param values
 * @param param1
 * @returns
 * @category Lookup Table
 */
function fromValuesToColors(values, { defaultColor, lut, duplicateLut = 1, min = 0, max = 1, lockLut = true, reverse = false }) {
    const lutTable = (lut instanceof _colorMap__WEBPACK_IMPORTED_MODULE_1__.ColorMap ? lut : createLut(lut, 32, duplicateLut));
    const minmax = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.array.minMax(values);
    const vmin = minmax[0];
    const vmax = minmax[1];
    if (lockLut) {
        lutTable.setMin(0).setMax(1);
    }
    else {
        lutTable.setMin(min).setMax(max);
    }
    let colors = new Array(3 * values.length).fill(0);
    values.forEach((v, i) => {
        const w = reverse ? (v - vmax) / (vmin - vmax) : (v - vmin) / (vmax - vmin);
        if (w >= min && w <= max) {
            const c = lutTable.getColor(w);
            colors[3 * i] = c.r;
            colors[3 * i + 1] = c.g;
            colors[3 * i + 2] = c.b;
        }
        else {
            colors[3 * i] = defaultColor.r;
            colors[3 * i + 1] = defaultColor.g;
            colors[3 * i + 2] = defaultColor.b;
        }
    });
    return colors;
}


/***/ }),

/***/ "./lib/utils/normalAttribute.ts":
/*!**************************************!*\
  !*** ./lib/utils/normalAttribute.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalAttribute": () => (/* binding */ normalAttribute)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
// import { IArray, Vector } from '@youwol/dataframe';

// See also https://stackoverflow.com/questions/27055644/three-js-maintaining-creases-when-smooth-shading-custom-geometry
// See https://github.com/mrdoob/three.js/blob/master/examples/jsm/loaders/VRMLLoader.js
// See https://codepen.io/Ni55aN/pen/zROmoe?editors=0010
/**
 * Get the normals as a BufferAttribute using a crease angle
 * @param index
 * @param coord
 * @param creaseAngle In radian
 * @returns
 */
function normalAttribute(coord, index, creaseAngle) {
    const faces = [];
    const vertexNormals = {};
    const ab = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    const cb = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    const vA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    const vB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    const vC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    // prepare face and raw vertex normals
    for (let i = 0, l = index.length; i < l; i += 3) {
        const a = index[i];
        const b = index[i + 1];
        const c = index[i + 2];
        const face = new Face(a, b, c);
        vA.fromArray(coord, a * 3);
        vB.fromArray(coord, b * 3);
        vC.fromArray(coord, c * 3);
        cb.subVectors(vC, vB);
        ab.subVectors(vA, vB);
        cb.cross(ab);
        cb.normalize();
        face.normal.copy(cb);
        if (vertexNormals[a] === undefined)
            vertexNormals[a] = [];
        if (vertexNormals[b] === undefined)
            vertexNormals[b] = [];
        if (vertexNormals[c] === undefined)
            vertexNormals[c] = [];
        vertexNormals[a].push(face.normal);
        vertexNormals[b].push(face.normal);
        vertexNormals[c].push(face.normal);
        faces.push(face);
    }
    // compute vertex normals and build final geometry
    const normals = [];
    for (let i = 0, l = faces.length; i < l; i++) {
        const face = faces[i];
        const nA = weightedNormal(vertexNormals[face.a], face.normal, creaseAngle);
        const nB = weightedNormal(vertexNormals[face.b], face.normal, creaseAngle);
        const nC = weightedNormal(vertexNormals[face.c], face.normal, creaseAngle);
        vA.fromArray(coord, face.a * 3);
        vB.fromArray(coord, face.b * 3);
        vC.fromArray(coord, face.c * 3);
        normals.push(nA.x, nA.y, nA.z);
        normals.push(nB.x, nB.y, nB.z);
        normals.push(nC.x, nC.y, nC.z);
    }
    return new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(normals, 3);
}
// ------------------- private ------------------
function weightedNormal(normals, vector, creaseAngle) {
    const normal = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    if (creaseAngle === 0) {
        normal.copy(vector);
    }
    else {
        for (let i = 0, l = normals.length; i < l; i++) {
            if (normals[i].angleTo(vector) < creaseAngle) {
                normal.add(normals[i]);
            }
        }
    }
    return normal.normalize();
}
class Face {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.normal = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    }
}


/***/ }),

/***/ "./lib/utils/scaleBar.ts":
/*!*******************************!*\
  !*** ./lib/utils/scaleBar.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScaleBar": () => (/* binding */ ScaleBar)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorMap */ "./lib/utils/colorMap.ts");
// import { stringify } from 'querystring'


/*
SEE https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_colors_lookuptable.html
See https://github.com/makc/three.js.fork/blob/master/examples/js/math/Lut.js
*/
class ScaleBar {
    constructor(lut) {
        this.camera = undefined;
        this.scene = undefined;
        this.sprite = undefined;
        this.render = (renderer) => {
            renderer.render(this.scene, this.camera);
        };
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera(-1, 1, 1, -1, 1, 2);
        this.camera.position.set(0.8, 0, 1);
        if (typeof lut === 'string') {
            lut = new _colorMap__WEBPACK_IMPORTED_MODULE_1__.ColorMap(lut, 32);
        }
        this.sprite = new three__WEBPACK_IMPORTED_MODULE_0__.Sprite(new three__WEBPACK_IMPORTED_MODULE_0__.SpriteMaterial({
            map: new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(lut.createCanvas())
        }));
        this.sprite.scale.x = 0.05;
        this.scene.add(this.sprite);
    }
    setColorMap(lut) {
        // lut.setColorMap( params.colorMap )
        // lut.setMax( 2000 )
        // lut.setMin( 0 )
        const map = this.sprite.material.map;
        lut.updateCanvas(map.image);
        map.needsUpdate = true;
    }
}
/*
export class ScaleBar {

    legend = {
        layout: '',
        position: {'x': 0, 'y': 0, 'z': 0},
        dimensions: { 'width': 20, 'height': 3 },
        canvas: undefined,  // <------------
        ctx: undefined,     // <------------ 2d context of the canvas
        texture: undefined,
        legendGeometry: undefined,
        legendMaterial: undefined,
        mesh: undefined,
        labels: {
            fontsize: undefined,
            fontface: undefined,
            title: undefined,
            um: undefined,
            ticks: undefined,
            decimal: undefined,
            notation: undefined
        }
    }
    map: ColorMap = undefined
    mapname: string = 'Insar'
    n: number = 10
    layout = undefined
    minV: number = 0
    maxV: number = 1

    constructor( colormap: ColorMap | string, parameters ) {
        if ( parameters === undefined ) {
            parameters = {}
        }

        this.legend.layout = parameters.hasOwnProperty( 'layout' ) ? parameters[ 'layout' ] : 'vertical';
        this.legend.position = parameters.hasOwnProperty( 'position' ) ? parameters[ 'position' ] : { 'x': 21.5, 'y': 8, 'z': 5 };
        this.legend.dimensions = parameters.hasOwnProperty( 'dimensions' ) ? parameters[ 'dimensions' ] : { 'width': 0.5, 'height': 3 };
        this.legend.canvas = document.createElement( 'canvas' );
        this.legend.canvas.setAttribute( 'id', 'legend' );
        this.legend.canvas.setAttribute( 'hidden', true );
        document.body.appendChild( this.legend.canvas );
        this.legend.ctx = this.legend.canvas.getContext( '2d' );
        this.legend.canvas.setAttribute( 'width',  1 );
        this.legend.canvas.setAttribute( 'height', this.n );
        this.legend.texture = new Texture( this.legend.canvas );
        const imageData = this.legend.ctx.getImageData( 0, 0, 1, this.n );
        const data = imageData.data;
        const len = data.length;


        // ColorMapKeywords is defined in Lut (see Kepler)
        if (typeof colormap === 'string') {
            this.map = new ColorMap(colormap, 32)
        } else {
            this.map = colormap
        }

        var k = 0;
        var step = 1.0 / this.n;
        const map = this.map.mapColors
        for ( var i = 1; i >= 0; i -= step ) {
            for ( var j = map.length - 1; j >= 0; j -- ) {
                if ( i < map[ j ][ 0 ] && i >= map[ j - 1 ][ 0 ]  ) {
                    var min = map[ j - 1 ][ 0 ];
                    var max = map[ j ][ 0 ];
                    var color = new Color( 0xffffff );
                    var minColor = new Color( 0xffffff ).setHex( map[ j - 1 ][ 1 ] );
                    var maxColor = new Color( 0xffffff ).setHex( map[ j ][ 1 ] );
                    color = minColor.lerp( maxColor, ( i - min ) / ( max - min ) );

                    data[ k * 4 ] = Math.round( color.r * 255 );
                    data[ k * 4 + 1 ] = Math.round( color.g * 255 );
                    data[ k * 4 + 2 ] = Math.round( color.b * 255 );
                    data[ k * 4 + 3 ] = 255;

                    k += 1;
                }
            }
        }

        this.legend.ctx.putImageData( imageData, 0, 0 )
        this.legend.texture.needsUpdate = true

        this.legend.legendGeometry = new PlaneBufferGeometry( this.legend.dimensions.width, this.legend.dimensions.height )
        this.legend.legendMaterial = new MeshBasicMaterial( { map : this.legend.texture, side : DoubleSide } )

        this.legend.mesh = new Mesh( this.legend.legendGeometry, this.legend.legendMaterial )

        if ( this.legend.layout == 'horizontal' ) {
            this.legend.mesh.rotation.z = - 90 * ( Math.PI / 180 )
        }

        this.legend.mesh.position.copy( this.legend.position )
        //return this.legend.mesh;
    }

    get mesh() {
        return this.legend.mesh
    }

    setLegendOff() {
        this.legend = null;
        return this.legend;
    }

    setLegendLayout( layout ) {
        if ( ! this.legend ) {
            return false;
        }

        if ( this.legend.layout == layout ) {
            return false;
        }

        if ( layout != 'horizontal' && layout != 'vertical' ) {
            return false;
        }

        this.layout = layout;

        if ( layout == 'horizontal' ) {
            this.legend.mesh.rotation.z = 90 * ( Math.PI / 180 );
        }

        if ( layout == 'vertical' ) {
            this.legend.mesh.rotation.z = - 90 * ( Math.PI / 180 );
        }

        return this.legend.mesh;
    }

    setLegendPosition( position: Vector3 ) {
        this.legend.position = new Vector3( position.x, position.y, position.z );
        return this.legend
    }

    setLegendLabels( parameters, callback ) {
        if ( ! this.legend ) {
            return false;
        }

        if ( typeof parameters === 'function' ) {
            callback = parameters;
        }

        if ( parameters === undefined ) {
            parameters = {};
        }

        this.legend.labels.fontsize = parameters.hasOwnProperty( 'fontsize' ) ? parameters[ 'fontsize' ] : 24;
        this.legend.labels.fontface = parameters.hasOwnProperty( 'fontface' ) ? parameters[ 'fontface' ] : 'Arial';
        this.legend.labels.title = parameters.hasOwnProperty( 'title' ) ? parameters[ 'title' ] : '';
        this.legend.labels.um = parameters.hasOwnProperty( 'um' ) ? ' [ ' + parameters[ 'um' ] + ' ]' : '';
        this.legend.labels.ticks = parameters.hasOwnProperty( 'ticks' ) ? parameters[ 'ticks' ] : 0;
        this.legend.labels.decimal = parameters.hasOwnProperty( 'decimal' ) ? parameters[ 'decimal' ] : 2;
        this.legend.labels.notation = parameters.hasOwnProperty( 'notation' ) ? parameters[ 'notation' ] : 'standard';
        const backgroundColor = { r: 255, g: 100, b: 100, a: 0.8 };
        const borderColor =  { r: 255, g: 0, b: 0, a: 1.0 };
        const borderThickness = 4;
        const canvasTitle = document.createElement( 'canvas' );
        const contextTitle = canvasTitle.getContext( '2d' );
        contextTitle.font = 'Normal ' + this.legend.labels.fontsize * 1.2 + 'px ' + this.legend.labels.fontface;
        //var metrics = contextTitle.measureText( this.legend.labels.title.toString() + this.legend.labels.um.toString() );
        //var textWidth = metrics.width;
        contextTitle.fillStyle   = 'rgba(' + backgroundColor.r + ',' + backgroundColor.g + ',' + backgroundColor.b + ',' + backgroundColor.a + ')';
        contextTitle.strokeStyle = 'rgba(' + borderColor.r + ',' + borderColor.g + ',' + borderColor.b + ',' + borderColor.a + ')';
        contextTitle.lineWidth = borderThickness;
        contextTitle.fillStyle = 'rgba( 0, 0, 0, 1.0 )';
        contextTitle.fillText( this.legend.labels.title.toString() + this.legend.labels.um.toString(), borderThickness, this.legend.labels.fontsize + borderThickness );

        const txtTitle = new CanvasTexture( canvasTitle );
        txtTitle.minFilter = LinearFilter;

        const spriteMaterialTitle = new SpriteMaterial( { map: txtTitle } );
        const spriteTitle = new Sprite( spriteMaterialTitle );
        spriteTitle.scale.set( 2, 1, 1.0 );

        if ( this.legend.layout == 'vertical' ) {
            spriteTitle.position.set( this.legend.position.x + this.legend.dimensions.width, this.legend.position.y + ( this.legend.dimensions.height * 0.45 ), this.legend.position.z );
        }

        if ( this.legend.layout == 'horizontal' ) {
            spriteTitle.position.set( this.legend.position.x * 1.015, this.legend.position.y + ( this.legend.dimensions.height * 0.03 ), this.legend.position.z );
        }

        if ( this.legend.labels.ticks > 0 ) {
            var ticks = {};
            var lines = {};

            if ( this.legend.layout == 'vertical' ) {
                var topPositionY = this.legend.position.y + ( this.legend.dimensions.height * 0.36 );
                var bottomPositionY = this.legend.position.y - ( this.legend.dimensions.height * 0.61 );
            }

            if ( this.legend.layout == 'horizontal' ) {
                var topPositionX = this.legend.position.x + ( this.legend.dimensions.height * 0.75 );
                var bottomPositionX = this.legend.position.x - ( this.legend.dimensions.width * 1.2  ) ;
            }

            for ( var i = 0; i < this.legend.labels.ticks; i ++ ) {
                let value = ( this.maxV - this.minV ) / ( this.legend.labels.ticks - 1  ) * i + this.minV
                let svalue = ''

                if ( callback ) {
                    value = callback ( value )
                    svalue = value.toString()
                } else {
                    if ( this.legend.labels.notation == 'scientific' ) {
                        svalue = value.toExponential( this.legend.labels.decimal );
                        value = parseFloat(svalue)
                    } else {
                        svalue = value.toFixed( this.legend.labels.decimal );
                        value = parseFloat(svalue)
                    }
                }

                const canvasTick = document.createElement( 'canvas' );
                const contextTick = canvasTick.getContext( '2d' );
                contextTick.font = 'Normal ' + this.legend.labels.fontsize + 'px ' + this.legend.labels.fontface;

                //var metrics = contextTick.measureText( svalue.toString() );
                //var textWidth = metrics.width;

                contextTick.fillStyle   = 'rgba(' + backgroundColor.r + ',' + backgroundColor.g + ',' + backgroundColor.b + ',' + backgroundColor.a + ')';
                contextTick.strokeStyle = 'rgba(' + borderColor.r + ',' + borderColor.g + ',' + borderColor.b + ',' + borderColor.a + ')';
                contextTick.lineWidth = borderThickness;
                contextTick.fillStyle = 'rgba( 0, 0, 0, 1.0 )';
                contextTick.fillText( value.toString(), borderThickness, this.legend.labels.fontsize + borderThickness );
                const txtTick = new CanvasTexture( canvasTick );
                txtTick.minFilter = LinearFilter;
                const spriteMaterialTick = new SpriteMaterial( { map: txtTick } );
                const spriteTick = new Sprite( spriteMaterialTick );
                spriteTick.scale.set( 2, 1, 1.0 );

                if ( this.legend.layout == 'vertical' ) {
                    const position = bottomPositionY + ( topPositionY - bottomPositionY ) * ( ( value - this.minV ) / ( this.maxV - this.minV ) );
                    spriteTick.position.set( this.legend.position.x + ( this.legend.dimensions.width * 2.7 ), position, this.legend.position.z );
                }

                if ( this.legend.layout == 'horizontal' ) {

                    const position = bottomPositionX + ( topPositionX - bottomPositionX ) * ( ( value - this.minV ) / ( this.maxV - this.minV ) );
                    let offset = undefined
                    if ( this.legend.labels.ticks > 5 ) {
                        if ( i % 2 === 0 ) {
                            offset = 1.7;
                        } else {
                            offset = 2.1;
                        }
                    } else {
                        offset = 1.7;
                    }
                    spriteTick.position.set( position, this.legend.position.y - this.legend.dimensions.width * offset, this.legend.position.z );
                }

                const material = new LineBasicMaterial( { color: 0x000000, linewidth: 2 } );

                const vertices = []

                if ( this.legend.layout == 'vertical' ) {
                    const linePosition = ( this.legend.position.y - ( this.legend.dimensions.height * 0.5 ) + 0.01 ) + ( this.legend.dimensions.height ) * ( ( value - this.minV ) / ( this.maxV - this.minV ) * 0.99 );
                    vertices.push( this.legend.position.x + this.legend.dimensions.width * 0.55, linePosition, this.legend.position.z  )
                    vertices.push( this.legend.position.x + this.legend.dimensions.width * 0.7, linePosition, this.legend.position.z  )
                }

                if ( this.legend.layout == 'horizontal' ) {
                    const linePosition = ( this.legend.position.x - ( this.legend.dimensions.height * 0.5 ) + 0.01 ) + ( this.legend.dimensions.height ) * ( ( value - this.minV ) / ( this.maxV - this.minV ) * 0.99 );
                    vertices.push( linePosition, this.legend.position.y - this.legend.dimensions.width * 0.55, this.legend.position.z  )
                    vertices.push( linePosition, this.legend.position.y - this.legend.dimensions.width * 0.7, this.legend.position.z  )
                }

                const geometry = new BufferGeometry()
                geometry.setAttribute('position', new BufferAttribute(vertices, 3) )
                const line = new Line( geometry, material )

                lines[ i ] = line;
                ticks[ i ] = spriteTick;

            }

        }

        return { 'title': spriteTitle,  'ticks': ticks, 'lines': lines };
    }
}
*/ 


/***/ }),

/***/ "@youwol/dataframe":
/*!************************************!*\
  !*** external "@youwol/dataframe" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__youwol_dataframe__;

/***/ }),

/***/ "@youwol/geometry":
/*!***********************************!*\
  !*** external "@youwol/geometry" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__youwol_geometry__;

/***/ }),

/***/ "three":
/*!************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","root":"THREE"} ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_three__;

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
/* harmony export */   "BBoxParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BBoxParameters),
/* harmony export */   "BandParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BandParameters),
/* harmony export */   "ColorMap": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ColorMap),
/* harmony export */   "Colorbar": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Colorbar),
/* harmony export */   "DeformParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DeformParameters),
/* harmony export */   "EdgesParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.EdgesParameters),
/* harmony export */   "FailurePlanesParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FailurePlanesParameters),
/* harmony export */   "FractureType": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FractureType),
/* harmony export */   "IsoBand": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.IsoBand),
/* harmony export */   "IsoContoursParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.IsoContoursParameters),
/* harmony export */   "LinesetParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.LinesetParameters),
/* harmony export */   "LinesetParameters2": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.LinesetParameters2),
/* harmony export */   "PaintParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PaintParameters),
/* harmony export */   "PointsetParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PointsetParameters),
/* harmony export */   "ScaleBar": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ScaleBar),
/* harmony export */   "SkinParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SkinParameters),
/* harmony export */   "SurfaceParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SurfaceParameters),
/* harmony export */   "TubeVectorsParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TubeVectorsParameters),
/* harmony export */   "VectorsParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.VectorsParameters),
/* harmony export */   "addColorMap": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.addColorMap),
/* harmony export */   "addColorToBufferGeometry": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.addColorToBufferGeometry),
/* harmony export */   "colorMapNames": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.colorMapNames),
/* harmony export */   "createBBox": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createBBox),
/* harmony export */   "createBand": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createBand),
/* harmony export */   "createBufferGeometry": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createBufferGeometry),
/* harmony export */   "createEdges": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createEdges),
/* harmony export */   "createFailurePlanes": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createFailurePlanes),
/* harmony export */   "createIsoContours": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createIsoContours),
/* harmony export */   "createLineset": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createLineset),
/* harmony export */   "createLineset2": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createLineset2),
/* harmony export */   "createLut": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createLut),
/* harmony export */   "createNormals": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createNormals),
/* harmony export */   "createPointset": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createPointset),
/* harmony export */   "createSurface": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createSurface),
/* harmony export */   "createSurfaceBorders": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createSurfaceBorders),
/* harmony export */   "createTubeVectors": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createTubeVectors),
/* harmony export */   "createVectors": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createVectors),
/* harmony export */   "deform": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.deform),
/* harmony export */   "evaluate_cmap": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.evaluate_cmap),
/* harmony export */   "fromValueToColor": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.fromValueToColor),
/* harmony export */   "fromValuesToColors": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.fromValuesToColors),
/* harmony export */   "generateColorMap": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateColorMap),
/* harmony export */   "generateIsos": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateIsos),
/* harmony export */   "generateIsosByNumber": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateIsosByNumber),
/* harmony export */   "generateIsosBySpacing": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateIsosBySpacing),
/* harmony export */   "getColorMap": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getColorMap),
/* harmony export */   "getColorMapNames": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getColorMapNames),
/* harmony export */   "lerp": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.lerp),
/* harmony export */   "mergeBufferAttributes": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.mergeBufferAttributes),
/* harmony export */   "mergeBufferGeometries": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.mergeBufferGeometries),
/* harmony export */   "normalAttribute": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.normalAttribute),
/* harmony export */   "paintAttribute": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.paintAttribute)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./lib/index.ts");
/*
 * Public API Surface of @youwol/kepler
 */


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=kepler.js.map