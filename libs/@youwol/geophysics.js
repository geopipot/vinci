(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@youwol/dataframe"), require("@youwol/math"));
	else if(typeof define === 'function' && define.amd)
		define("@youwol/geophysics", ["@youwol/dataframe", "@youwol/math"], factory);
	else if(typeof exports === 'object')
		exports["@youwol/geophysics"] = factory(require("@youwol/dataframe"), require("@youwol/math"));
	else
		root["@youwol/geophysics"] = factory(root["@youwol/dataframe"], root["@youwol/math"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__youwol_dataframe__, __WEBPACK_EXTERNAL_MODULE__youwol_math__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/cost.ts":
/*!*********************!*\
  !*** ./lib/cost.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cost": () => (/* binding */ cost)
/* harmony export */ });
/**
 * Compute the associated cost to alpha given a [[Data]] or an array of [[Data]].
 * @note When data is an array, returns the weighted cost.
 * Otherwise, returns the cost (not multipled by the weight of the data).
 */
const cost = (data, alpha) => {
    if (Array.isArray(data)) {
        let w = 0;
        return data.reduce((acc, d) => {
            w += d.weight;
            return acc + d.cost(alpha);
        }, 0) / w;
    }
    return data.cost(alpha);
};


/***/ }),

/***/ "./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data),
/* harmony export */   "createData": () => (/* binding */ createData)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Convenient  function to create a specific [[Data]] with its
 * associated parameters
 * @param Type The type of data (class name)
 * @param param The parameters
 * @see [[Data]]
 * @example
 * ```ts
 * const data = createData(InsarData, {
 *     dataframe: dfInsar,
 *     los: [0,0,1],
 *     measure: 'insar',
 *     compute: ['d1', 'd2', 'd3']
 * })
 * ```
 */
const createData = (Type, param) => {
    return new Type(param);
};
class Data {
    constructor({ dataframe, measure, compute, weights, weight }) {
        /**
         * Optional: The name of the serie for the measures weight. When used, each point should
         * have a weight (number). This parameter can be skipped
         */
        this.weights_ = undefined;
        /**
         * The weight of this data. Default value is 1
         */
        this.weight = 1;
        this.sumWeights = 1.0;
        if (dataframe === undefined)
            throw new Error(`dataframe is undefined`);
        this.dataframe = dataframe;
        this.measure = this.dataframe.series[measure];
        //console.log('Using nb points =', this.measure.count)
        // this.weights_ = dataframe.series[weights]
        // if (this.weights_ !== undefined) {
        //     this.sumWeights = this.weights_.array.reduce( (acc, cur) => acc+1/cur, 0 )
        //     console.log('Using weight at points. Sum =', this.sumWeights)
        // }
        this.setWeights(weights); // setter
        if (weight !== undefined)
            this.weight = weight;
        if (this.measure === undefined)
            throw new Error(`measure ${measure} is undefined`);
        if (compute !== undefined) {
            this.compute = compute.map(name => dataframe.series[name]);
            this.compute.forEach((c, i) => {
                if (c === undefined)
                    throw new Error(`compute ${compute[i]} at index ${i} is undefined`);
            });
        }
    }
    setWeights(w) {
        this.weights_ = this.dataframe.series[w];
        if (this.weights_ !== undefined) {
            this.sumWeights = this.weights_.array.reduce((acc, cur) => acc + 1 / cur, 0);
        }
    }
    get weights() {
        return this.weights_;
    }
    /**
     * The cost function of the data according to a provided Alpha or a Serie
     */
    cost(alpha) {
        const c = this.costs(alpha);
        if (c.itemSize !== 1)
            throw new Error('costs() should return a Serie with itemSize = 1');
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.mean)(c) * this.weight;
    }
    // ===================================================================
    generateData(data) {
        if (_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.isSerie(data)) {
            return data;
        }
        return this.generate(data);
    }
}


/***/ }),

/***/ "./lib/dataset/conjugate.ts":
/*!**********************************!*\
  !*** ./lib/dataset/conjugate.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugateData": () => (/* binding */ ConjugateData),
/* harmony export */   "generateConjugate": () => (/* binding */ generateConjugate)
/* harmony export */ });
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./lib/data.ts");


const getTheta = (friction) => Math.PI * (45 - friction / 2) / 180;
/**
 * Cost for conjugate planes
 *
 * <center><img style="width:50%; height:50%;" src="media://conjugate.png"></center>
 * <center><blockquote><i>
 * Relation between a shear fracture and the three principales stresses
 * </i></blockquote></center>
 *
 * @example
 * ```ts
 * const data = new ConjugateData({
 *     dataframe,
 *     measure: 'n',
 *     compute: ['S1', 'S2', 'S3'],
 *     weight: 1,
 *     weights: 'ptsWeights',
 *     friction: 60,
 *     project: true
 * })
 * ```
 * @see [[Data]]
 * @see [[monteCarlo]]
 * @see [[createData]]
 * @category Geology
 */
class ConjugateData extends _data__WEBPACK_IMPORTED_MODULE_1__.Data {
    constructor({ dataframe, measure, compute, weights, weight, friction = 0.3, projected = false }) {
        super({ dataframe, measure, compute, weights, weight });
        this.theta = Math.PI * (45 - 60 / 2) / 180;
        this.projected = false;
        // private conjugateNormals = (stress: vec.Vector6) => {
        //     const e = eigen(stress)
        //     const nS3 = [-e.vectors[0], -e.vectors[1], -e.vectors[2]] as vec.Vector3
        //     const v2  = [-e.vectors[3], -e.vectors[4], -e.vectors[5]] as vec.Vector3
        //     const v3  = [-e.vectors[6], -e.vectors[7], -e.vectors[8]] as vec.Vector3
        //     return {
        //         n1: rotateAxis(v2,  this.theta, v3), 
        //         n2: rotateAxis(v2, -this.theta, nS3)
        //     }
        // }
        // private fractureNormal = (stress: vec.Vector6) => {
        //     // console.log(stress)
        //     const e = eigen(stress)
        //     const v2 = [e[3], e[4], e[5]]
        //     if (this.projected) {
        //         const d = Math.sqrt(v2[0]**2 + v2[1]**2)
        //         v2[0] /= d
        //         v2[1] /= d
        //         v2[2]  = 0
        //     }
        //     return [v2[1], -v2[0], v2[2]] // orthogonal projected
        // }
        this.fractureCost = (n, N) => {
            return 1.0 - Math.abs(_youwol_math__WEBPACK_IMPORTED_MODULE_0__.vec.dot(n, N));
        };
        this.measure = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.normalize)(this.measure);
        this.projected = projected !== undefined ? projected : false;
        if (friction !== undefined) {
            this.friction = friction;
            this.theta = Math.PI * (45 - friction / 2) / 180;
        }
        if (this.projected) {
            this.measure = this.measure.map(v => {
                const x = v[0];
                const y = v[1];
                const l = Math.sqrt(x ** 2 + y ** 2);
                return [x / l, y / l, 0];
            });
        }
    }
    name() {
        return 'ConjugateData';
    }
    costs(alpha) {
        const d = this.generateData(alpha);
        if (this.projected) {
            if (d.itemSize !== 3)
                throw new Error('generateData must have itemSize = 3 (i.e., normal)');
            return this.measure.map((n1, i) => {
                const L = Math.sqrt(n1[0] ** 2 + n1[1] ** 2);
                const nn = [n1[0] / L, n1[1] / L, 0];
                const N = d.itemAt(i); //this.fractureNormal(d.itemAt(i) as vec.Vector3) // Sigma2, so very simple
                return this.fractureCost(nn, N);
            });
        }
        // we have {n1, n2}
        return this.measure.map((normal, i) => {
            // const {n1, n2} = this.conjugateNormals(d.itemAt(i) as vec.Vector6)
            // const dd = d as {n1: Serie, n2: Serie}
            const n1 = d.n1.itemAt(i);
            const n2 = d.n2.itemAt(i);
            return Math.min(this.fractureCost(normal, n1), this.fractureCost(normal, n2));
        });
    }
    generate(alpha) {
        return generateConjugate({
            stress: (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.weightedSum)(this.compute, alpha),
            friction: this.friction,
            projected: this.projected
        });
    }
}
/**
 * Generate from stress data either 2 series representing the normals of the conjugate planes,
 * or one serie if projected = true (direction of S2). For the former case, the friction angle
 * is used. For the later, friction angle is irrelevant.
 * @example
 * ```ts
 * const {n1, n2} = geop.generateConjugates({
 *      stress: computedStressSerie,
 *      friction: 30,
 *      projected: false
 * })
 * console.log( n1, n2 )
 * ```
 * @see [[ConjugateData]]
 * @category Geology
 */
function generateConjugate({ stress, friction, projected = false }) {
    if (stress === undefined) {
        throw new Error('provided stress Serie is undefined');
    }
    if (friction === undefined) {
        throw new Error('provided friction is undefined');
    }
    if (projected === true) {
        return stress.map(s => {
            const e = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.eigen)(s).vectors;
            const v2 = [e[3], e[4], e[5]];
            if (projected === true) {
                const d = Math.sqrt(v2[0] ** 2 + v2[1] ** 2);
                v2[0] /= d;
                v2[1] /= d;
                v2[2] = 0;
            }
            return [v2[1], -v2[0], v2[2]];
        });
    }
    const theta = getTheta(friction);
    const eigV = stress.map(s => (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.eigen)(s).vectors);
    return {
        n1: eigV.map(e => {
            const v2 = [-e[3], -e[4], -e[5]];
            const v3 = [-e[6], -e[7], -e[8]];
            return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.rotateAxis)(v2, theta, v3);
        }),
        n2: eigV.map(e => {
            const nS3 = [-e[0], -e[1], -e[2]];
            const v2 = [-e[3], -e[4], -e[5]];
            return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.rotateAxis)(v2, -theta, nS3);
        })
    };
    /*
    return {
        n1: stress.map( s => {
            const e = eigen(s).vectors
            const v2  = [-e[3], -e[4], -e[5]] as vec.Vector3
            const v3  = [-e[6], -e[7], -e[8]] as vec.Vector3
            return rotateAxis(v2,  theta, v3)
        }),
        n2: stress.map( s => {
            const e = eigen(s).vectors
            const nS3 = [-e[0], -e[1], -e[2]] as vec.Vector3
            const v2  = [-e[3], -e[4], -e[5]] as vec.Vector3
            return rotateAxis(v2, -theta, nS3)
        })
    }
    */
}


/***/ }),

/***/ "./lib/dataset/dyke.ts":
/*!*****************************!*\
  !*** ./lib/dataset/dyke.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DikeData": () => (/* binding */ DikeData),
/* harmony export */   "generateDikes": () => (/* binding */ generateDikes)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./lib/dataset/index.ts");
/* harmony import */ var _joint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joint */ "./lib/dataset/joint.ts");


class DikeData extends _joint__WEBPACK_IMPORTED_MODULE_1__.JointData {
    name() { return 'DikeData'; }
}
/**
 * Generate dikes from stress data. This is essentially the same as [[generateJoints]].
 * A dike is represented by its normal
 * @example
 * ```ts
 * const dikes = geop.generateDikes({
 *      stress: computedStressSerie,
 *      projected: false
 * })
 * ```
 * @see [[generateJoints]]
 * @see [[JointData]]
 * @category Geology
 */
function generateDikes({ stress, projected = false }) {
    return (0,___WEBPACK_IMPORTED_MODULE_0__.generateJoints)({ stress, projected });
}


/***/ }),

/***/ "./lib/dataset/genericScalarField.ts":
/*!*******************************************!*\
  !*** ./lib/dataset/genericScalarField.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericScalarFieldData": () => (/* binding */ GenericScalarFieldData),
/* harmony export */   "generateGenericScalarField": () => (/* binding */ generateGenericScalarField)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./lib/data.ts");



/**
 * Cost for any scalar field. This data uses the derivative along a given direction in order to
 * compare the trend of the scalar field instead of the values themself.
 *
 * The `xScale` and `yScale` are only applied to the computed data, not the measurements!
 *
 * If `useDerivative=false`, then the measures and the computations are normalized separately.
 * ```
 * @see [[Data]]
 * @see [[monteCarlo]]
 * @see [[createData]]
 * @category Geology
 */
class GenericScalarFieldData extends _data__WEBPACK_IMPORTED_MODULE_2__.Data {
    constructor({ dataframe, positions, measure, coordIndex, compute, weights, weight = 1, xScale = 1, yScale = 1, useDerivative = false }) {
        super({ dataframe, measure, compute, weights, weight });
        this.positions = undefined;
        this.coordIndex = 0;
        this.xScale = 1;
        this.yScale = 1;
        this.useDerivative = false;
        this.xScale = xScale;
        this.yScale = yScale;
        this.useDerivative = useDerivative;
        const mng = new _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Manager(dataframe, [
            new _youwol_math__WEBPACK_IMPORTED_MODULE_1__.PositionDecomposer()
        ]);
        if (this.measure.itemSize !== 1) {
            throw new Error('Measure (' + measure + ') must have itemSize=1');
        }
        if (coordIndex < 0) {
            throw new Error('coordIndex (' + coordIndex + ') must be >= 0');
        }
        if (coordIndex >= this.compute[0].itemSize) {
            throw new Error('coordIndex (' + coordIndex + ') must be < ' + this.compute[0].itemSize);
        }
        // Use the manager
        this.positions = mng.serie(1, positions);
        if (this.positions === undefined) {
            throw new Error('Cannot find serie named ' + positions + ' in the dataframe');
        }
        if (this.positions.itemSize !== 1) {
            throw new Error('Positions (' + positions + ') must have itemSize=1');
        }
        // Compute the derivatives of the measure
        if (useDerivative) {
            this.measure = derivative({
                data: this.measure,
                positions: this.positions,
                xScale: 1,
                yScale: 1
            });
        }
        else {
            // Normalize the measures
            this.measure = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.normalize)(this.measure);
        }
    }
    name() {
        return 'GenericScalarFieldData';
    }
    costs(data) {
        const compute = this.generateData(data);
        if (compute.itemSize !== 1)
            throw new Error('generateData must have itemSize = 1');
        // console.log(this.measure, '\n', compute, '\n----------------------\n')
        // TODO: add the weights and this.sumWeights
        // Cost function:
        //
        // | C'    |
        // |--- - 1|
        // | M'    |
        //
        // with:
        // C' = derivative of the computed
        // M' = derivative of the measured
        const r = compute.clone();
        for (let i = 0; i < compute.count; ++i) {
            const m = this.measure.itemAt(i);
            const c = compute.itemAt(i);
            if (m === 0) {
                r.setItemAt(i, 0);
            }
            else {
                r.setItemAt(i, Math.abs(m / c - 1));
            }
        }
        // const r = abs(sub(div(compute, this.measure), 1))
        return r;
    }
    generate(alpha) {
        return generateGenericScalarField({
            data: (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.weightedSum)(this.compute, alpha),
            coordIndex: this.coordIndex,
            positions: this.positions,
            xScale: this.xScale,
            yScale: this.yScale,
            useDerivative: this.useDerivative
        });
    }
}
function generateGenericScalarField({ data, coordIndex, positions, xScale, yScale, useDerivative }) {
    if (useDerivative) {
        return derivative({
            data: data.map(d => d[coordIndex]),
            positions,
            xScale,
            yScale
        });
    }
    else {
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.normalize)(data.map(d => d[coordIndex]));
        // return data.map( d => d[coordIndex]*yScale )
    }
}
// Compute the derivative of a scalar Serie using the positions and the central difference
//
function derivative({ data, positions, xScale, yScale }) {
    // console.log(xScale, yScale)
    const n = data.count;
    let prevDat = data.itemAt(0);
    let prevPos = positions.itemAt(0);
    const newData = data.clone(false);
    for (let i = 1; i < n - 1; ++i) {
        const nexDat = data.itemAt(i + 1);
        const nexPos = positions.itemAt(i + 1);
        const a = xScale * (nexDat - prevDat) / (yScale * (nexPos - prevPos));
        newData.setItemAt(i, a);
        prevDat = data.itemAt(i);
        prevPos = positions.itemAt(i);
    }
    newData.setItemAt(0, newData.itemAt(1));
    newData.setItemAt(n - 1, newData.itemAt(n - 2));
    return newData;
}


/***/ }),

/***/ "./lib/dataset/gps.ts":
/*!****************************!*\
  !*** ./lib/dataset/gps.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GpsData": () => (/* binding */ GpsData),
/* harmony export */   "VerticalGpsData": () => (/* binding */ VerticalGpsData)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./lib/data.ts");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Cost for a Gps measure (at one point)
 *
 * <center><img style="width:60%; height:60%;" src="media://gps.png"></center>
 * <center><blockquote><i>
 * Equation for a GPS data. Upper sripts m and c stand for measured and computed, respectively
 * </i></blockquote></center>
 *
 * @example
 * ```ts
 * const gps = new GpsData({
 *     dataframe,
 *     measure: 'gps',
 *     compute: ['u1', 'u2', 'u3'],
 *     weight: 2,
 *     weights: 'ptsWeights'
 * })
 * ```
 * @see [[Data]]
 * @see [[createData]]
 * @see [[monteCarlo]]
 * @category Geophysics
 */
class GpsData extends _data__WEBPACK_IMPORTED_MODULE_1__.Data {
    constructor(params) {
        super(params);
        if (this.measure.itemSize !== 3) {
            throw new Error('measure should have itemSize = 3');
        }
        this.compute.forEach(c => {
            if (c.itemSize !== 3) {
                throw new Error('compute should have itemSize = 3 (displacement)');
            }
        });
    }
    name() { return 'GpsData'; }
    costs(data) {
        const d = this.generateData(data);
        if (d.itemSize !== 3) {
            throw new Error('provided Serie must have itemSize = 3 (displ)');
        }
        const L = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.dot)(this.measure, d);
        const no = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.norm)(this.measure);
        const nc = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.norm)(d);
        // 0.5*w*( (1-d/(no*nc))**2 + (1-no/nc)**2 )
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.mult)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.add)([
            (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.square)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.addNumber)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.negate)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.div)(L, (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.mult)(no, nc))), 1)),
            (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.square)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.addNumber)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.negate)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.div)(no, nc)), 1))
        ]), 0.5);
    }
    generate(alpha) {
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.weightedSum)(this.compute, alpha);
    }
}
/**
 * Cost for a vertical Gps measure (at one point)
 *
 * <center><img style="width:25%; height:25%;" src="media://horizon.png"></center>
 * <center><blockquote><i>
 * Equation for a vertical GPS data.
 * </i></blockquote></center>
 *
 * @example
 * ```ts
 * const gps = new VerticalGpsData({
 *     dataframe,
 *     measure: 'gps',
 *     compute: ['u1', 'u2', 'u3'],
 *     weight: 2,
 *     weights: 'ptsWeights'
 * })
 * ```
 * @see [[Data]]
 * @see [[createData]]
 * @see [[monteCarlo]]
 * @category Geophysics
 */
class VerticalGpsData extends _data__WEBPACK_IMPORTED_MODULE_1__.Data {
    constructor(params) {
        super(params);
        if (this.measure.itemSize !== 1)
            throw new Error('measure should have itemSize = 1 (displ)');
        this.compute.forEach(c => {
            if (c.itemSize !== 3)
                throw new Error('compute should have itemSize = 3 (displacement)');
        });
    }
    name() { return 'VerticalGpsData'; }
    costs(data) {
        const d = this.generateData(data);
        if (d.itemSize !== 1)
            throw new Error('provided Serie must have itemSize = 1');
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.square)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.addNumber)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.negate)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.div)(d, this.measure)), 1));
    }
    generate(alpha) {
        return (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.apply)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.weightedSum)(this.compute, alpha), item => item[2]);
    }
}


/***/ }),

/***/ "./lib/dataset/index.ts":
/*!******************************!*\
  !*** ./lib/dataset/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugateData": () => (/* reexport safe */ _conjugate__WEBPACK_IMPORTED_MODULE_5__.ConjugateData),
/* harmony export */   "DikeData": () => (/* reexport safe */ _dyke__WEBPACK_IMPORTED_MODULE_4__.DikeData),
/* harmony export */   "GenericScalarFieldData": () => (/* reexport safe */ _genericScalarField__WEBPACK_IMPORTED_MODULE_6__.GenericScalarFieldData),
/* harmony export */   "GpsData": () => (/* reexport safe */ _gps__WEBPACK_IMPORTED_MODULE_2__.GpsData),
/* harmony export */   "InsarData": () => (/* reexport safe */ _insar__WEBPACK_IMPORTED_MODULE_3__.InsarData),
/* harmony export */   "JointData": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_0__.JointData),
/* harmony export */   "StyloliteData": () => (/* reexport safe */ _stylolite__WEBPACK_IMPORTED_MODULE_1__.StyloliteData),
/* harmony export */   "VerticalGpsData": () => (/* reexport safe */ _gps__WEBPACK_IMPORTED_MODULE_2__.VerticalGpsData),
/* harmony export */   "generateConjugate": () => (/* reexport safe */ _conjugate__WEBPACK_IMPORTED_MODULE_5__.generateConjugate),
/* harmony export */   "generateDikes": () => (/* reexport safe */ _dyke__WEBPACK_IMPORTED_MODULE_4__.generateDikes),
/* harmony export */   "generateFringes": () => (/* reexport safe */ _insar__WEBPACK_IMPORTED_MODULE_3__.generateFringes),
/* harmony export */   "generateGenericScalarField": () => (/* reexport safe */ _genericScalarField__WEBPACK_IMPORTED_MODULE_6__.generateGenericScalarField),
/* harmony export */   "generateInsar": () => (/* reexport safe */ _insar__WEBPACK_IMPORTED_MODULE_3__.generateInsar),
/* harmony export */   "generateJoints": () => (/* reexport safe */ _joint__WEBPACK_IMPORTED_MODULE_0__.generateJoints),
/* harmony export */   "generateStylolites": () => (/* reexport safe */ _stylolite__WEBPACK_IMPORTED_MODULE_1__.generateStylolites)
/* harmony export */ });
/* harmony import */ var _joint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./joint */ "./lib/dataset/joint.ts");
/* harmony import */ var _stylolite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylolite */ "./lib/dataset/stylolite.ts");
/* harmony import */ var _gps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gps */ "./lib/dataset/gps.ts");
/* harmony import */ var _insar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insar */ "./lib/dataset/insar.ts");
/* harmony import */ var _dyke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dyke */ "./lib/dataset/dyke.ts");
/* harmony import */ var _conjugate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conjugate */ "./lib/dataset/conjugate.ts");
/* harmony import */ var _genericScalarField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genericScalarField */ "./lib/dataset/genericScalarField.ts");









/***/ }),

/***/ "./lib/dataset/insar.ts":
/*!******************************!*\
  !*** ./lib/dataset/insar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsarData": () => (/* binding */ InsarData),
/* harmony export */   "generateFringes": () => (/* binding */ generateFringes),
/* harmony export */   "generateInsar": () => (/* binding */ generateInsar)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./lib/data.ts");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Cost for an Insar measure (at one point)
 * @param measure The Insar measure along the satellite line of sight
 * @param compute The computed insar value along the satellite line of sight
 * @param weights Weight of the data points
 *
 * <center><img style="width:25%; height:25%;" src="media://insar.png"></center>
 * <center><blockquote><i>
 * Equation for an Insar data. Upper sripts m and c stand for measured and computed, respectively.
 * Computed Insar is using the function [[generateInsar]], which makes use of the satellite line
 * of sight.
 * </i></blockquote></center>
 *
 * @example
 * ```ts
 * const gps = new InsarData({
 *     los: [0,0,-1],
 *     normalize: false,
 *     dataframe,
 *     measure: 'insar',
 *     compute: ['u1', 'u2', 'u3'],
 *     weight: 1,
 *     weights: 'ptsWeights'
 * })
 * ```
 * @see [[Data]]
 * @see [[generateInsar]]
 * @see [[monteCarlo]]
 * @see [[createData]]
 * @category Geophysics
 */
class InsarData extends _data__WEBPACK_IMPORTED_MODULE_1__.Data {
    constructor({ los, dataframe, measure, compute, weights, weight, normalize }) {
        super({ dataframe, measure, compute, weights, weight });
        this.los = [0, 0, 1];
        this.normalize = false;
        if (normalize !== undefined)
            this.normalize = normalize;
        if (this.measure.itemSize !== 1) {
            throw new Error('measure should have itemSize = 1');
        }
        if (los === undefined) {
            throw new Error('missing line of sight (los) in InsarData');
        }
        if (this.normalize) {
            this.measuredMinMax = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.minMax)(this.measure);
            this.measure = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.div)(this.measure, Math.abs(this.measuredMinMax[1] - this.measuredMinMax[0]));
        }
        this.compute.forEach(c => {
            if (c.itemSize !== 3)
                throw new Error('compute should have itemSize = 3 (displacement)');
        });
        this.los = _youwol_math__WEBPACK_IMPORTED_MODULE_2__.vec.normalize(los);
    }
    name() { return 'InsarData'; }
    costs(alpha) {
        let d = this.generateData(alpha);
        if (d.itemSize !== 1)
            throw new Error('provided Serie must have itemSize = 1 (displ along los)');
        if (this.normalize) {
            const computedMinMax = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.minMax)(d);
            d = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.div)(d, Math.abs(computedMinMax[1] - computedMinMax[0]));
        }
        const m = this.measure;
        //const u = map([m, d], ([i1, i2]) => Math.abs(i1)>Math.abs(i2) ? (1-i2/i1)/2 : (1-i1/i2)/2 )
        //return square(u)
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.square)((0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.map)([m, d], ([i1, i2]) => i1 - i2));
    }
    generate(alpha) {
        return generateInsar({ displ: (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.weightedSum)(this.compute, alpha), LOS: this.los });
    }
}
/**
 * Given a displacement field and a satellite line of sight, compute the
 * corresponding Insar data.
 * @param displ The displacement field as a flat array
 * @param satellite The satellite line of sight
 * @see [[InsarData]]
 * @example
 * In the following example, the displacement field `displ` is computed using
 * numerically, and the `measuredInsar` are the measures (observations).
 * The size of `displ` is three times the size of `insar`.
 * ```ts
 * const computedInsar = generateInsar({displ, LOS: [0.01, -0.1, -0.9856]})
 * const measuredInsar = [...]
 *
 * // Let use a loop instead of the Array.redure method
 * const cost = 0
 * for (let i=0; i<computedInsar.length; ++i) {
 *     cost += costInsar(computedInsar[i], measuredInsar[i])
 * }
 * cost /= computedInsar.length
 * ```
 * @see [[Data]]
 * @category Geophysics
 */
function generateInsar({ displ, LOS }) {
    return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.dot)(displ, LOS);
}
/**
 * Generate fringes given fringe spacing.
 * @param serie The serie with itemSize of 1
 * @param fringeSpacing The spacing of the fringes
 * @returns A new [[Serie]]
 * @example
 * ```ts
 * const displ   = dataframe.series['Displ']
 * const fringes = generateFringes( generateInsar({displ, LOS: [0,0,-1]}), 0.01)
 * ```
 */
function generateFringes(serie, fringeSpacing) {
    if (serie.itemSize !== 1) {
        throw new Error('Serie must have itemSize = 1');
    }
    const frac = (val) => val - Math.floor(val);
    return (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.apply)(serie, v => Math.abs(fringeSpacing * frac(v / fringeSpacing)));
}


/***/ }),

/***/ "./lib/dataset/joint.ts":
/*!******************************!*\
  !*** ./lib/dataset/joint.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JointData": () => (/* binding */ JointData),
/* harmony export */   "generateJoints": () => (/* binding */ generateJoints)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./lib/data.ts");



/**
 * Cost for joint fractures. Recall that the stresses from simulations are in
 * engineer convention.
 *
 * If `useNormals = true` (default), then it is assumed that the provided data orientation (measure) are
 * the normal to the joints, not the joint orientation themself. Otherwise, the orientation
 * of the joints are used.
 *
 * If `projected = true`, then the measured and the computed joints are projected on the
 * horizontal. Otherwise (default), data and computation are kept in 3D.
 *
 * <center><img style="width:40%; height:40%;" src="media://joint.png"></center>
 * <center><blockquote><i>
 * Relation between a joint and the three principales stresses
 * </i></blockquote></center>
 *
 * @example
 * ```ts
 * const data = new JointData({
 *     dataframe,
 *     useNormals: true,
 *     projected : true,
 *     measure   : 'normals',
 *     compute   : ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
 *     weight    : 1,
 *     weights   : 'ptsWeights'
 * })
 * ```
 * @see [[Data]]
 * @see [[monteCarlo]]
 * @see [[createData]]
 * @category Geology
 */
class JointData extends _data__WEBPACK_IMPORTED_MODULE_2__.Data {
    constructor({ dataframe, measure, compute, weights, weight, useNormals = true, projected = false, useAngle = true }) {
        super({ dataframe, measure, compute, weights, weight });
        this.useNormals = true;
        this.useAngle = true;
        this.projected = false;
        this.measure = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.normalize)(this.measure);
        this.useNormals = useNormals !== undefined ? useNormals : true;
        this.projected = projected !== undefined ? projected : false;
        this.useAngle = useAngle !== undefined ? useAngle : true;
        // Project measure if necessary
        if (this.projected) {
            // this.measure = this.measure.map( v => [v[0], v[1], 0])
            this.measure = this.measure.map(v => {
                const x = v[0];
                const y = v[1];
                const l = Math.sqrt(x ** 2 + y ** 2);
                return [x / l, y / l, 0];
            });
        }
    }
    name() { return 'JointData'; }
    costs(data) {
        const d = this.generateData(data);
        if (d.itemSize !== 3)
            throw new Error('generateData must have itemSize = 3 (normals to the planes)');
        if (this.useAngle) {
            if (this.weights) {
                const W = 2 / Math.PI / this.sumWeights;
                //return div(dot(this.measure, d), this.weights).map( v => Math.acos(Math.abs(v))*W )
                return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.dot)(this.measure, d).map((v, i) => {
                    const w = this.weights.itemAt(i);
                    return Math.acos(Math.abs(v)) * W / w;
                });
            }
            else {
                const W = 2 / Math.PI;
                return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.dot)(this.measure, d).map((v, i) => {
                    const a = Math.abs(v);
                    return Math.acos(a > 1 ? 1 : a) * W;
                });
            }
        }
        else {
            // (1-|d|)^2
            const s = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.square)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.sub)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.abs)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.dot)(this.measure, d)), 1));
            if (this.weights) {
                // sum(cost_i/w_i)/sum(1/w_i) = sum(cost_i/w_i)/sumWeights => 2 div
                return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.div)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.div)(s, this.weights), this.sumWeights);
            }
            else {
                return s;
                // DOES NOT WORK §yet?)
                //this.measure.dot(d).abs().sub(1).square()
            }
        }
    }
    generate(alpha) {
        return generateJoints({
            stress: (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.weightedSum)(this.compute, alpha),
            projected: this.projected
        });
    }
}
/**
 * Generate joints from stress data. A joint is represented by its normal
 * @example
 * ```ts
 * const joints = geop.generateJoints({
 *      stress: computedStressSerie,
 *      projected: true
 * })
 * ```
 * @see [[JointData]]
 * @category Geology
 */
function generateJoints({ stress, projected = false }) {
    const ns = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.eigenVector)(stress).map(v => [v[0], v[1], v[2]]); // SIGMA-1 for engineers
    if (projected) {
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.apply)(ns, n => {
            const x = n[0];
            const y = n[1];
            const l = Math.sqrt(x ** 2 + y ** 2);
            return [x / l, y / l, 0];
            // [n[0], n[1], 0]
        }));
    }
    return ns;
}


/***/ }),

/***/ "./lib/dataset/stylolite.ts":
/*!**********************************!*\
  !*** ./lib/dataset/stylolite.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyloliteData": () => (/* binding */ StyloliteData),
/* harmony export */   "generateStylolites": () => (/* binding */ generateStylolites)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./lib/dataset/index.ts");



/**
 * Cost for stylolite fractures. Recall that the stresses from simulations are in
 * engineer convention. A stylolite is represented by its normal.
 * @see [[JointData]]
 * @see [[monteCarlo]]
 * @see [[createData]]
 *
 * <center><img style="width:40%; height:40%;" src="media://stylolite.png"></center>
 * <center><blockquote><i>
 * Relation between a stylolite and the three principales stresses
 * </i></blockquote></center>
 *
 * @category Geology
 */
class StyloliteData extends ___WEBPACK_IMPORTED_MODULE_2__.JointData {
    name() { return 'StyloliteData'; }
    generate(alpha) {
        return generateStylolites({
            stress: (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.weightedSum)(this.compute, alpha),
            projected: this.projected
        });
    }
}
/**
 * Generate stylolites from stress data. A stylolite is represented by its normal
 * @example
 * ```ts
 * const data = geop.generateStylolites({
 *      stress: computedStressSerie,
 *      projected: true
 * })
 * ```
 * @see [[generateJoints]]
 * @category Geology
 */
function generateStylolites({ stress, projected = false }) {
    const ns = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.eigenVector)(stress).map(v => [v[6], v[7], v[8]]); // SIGMA-1 for engineers
    if (projected) {
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.apply)(ns, n => [n[0], n[1], 0]));
    }
    return ns;
}


/***/ }),

/***/ "./lib/domain.ts":
/*!***********************!*\
  !*** ./lib/domain.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Domain2D": () => (/* binding */ Domain2D)
/* harmony export */ });
/* harmony import */ var _cost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cost */ "./lib/cost.ts");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapping */ "./lib/mapping.ts");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @example
 * ```js
 * const model = {
 *    data: [insar],
 *    alpha: {
 *        mapping: gradientPressureMapping,
 *        min: [0,   0, 0, Rsed, Rmag, -1e9],
 *        max: [180, 5, 5, Rsed, Rmag,  1e9]
 *    }
 * }
 * ...
 * const sol = const result = geo.monteCarlo(model, 100000)
 * const d = new geo.Domain2D({model, nX:50, nY: 70})
 * const serie = d.evaluate(0, 5, sol) // a Serie with userInfo
 *
 * console.log(serie.userData)
 * // Will display
 * // {
 * //   nX: 50,
 * //   nY: 70,
 * //   xMin: 0,
 * //   xMax: 180,
 * //   yMin: -1e9,
 * //   yMax: 1e9
 * // }
 *
 * // Tranforming the domain for Plotly:
 * // ---------------------------------
 * const nX = serie.userData.nX
 * const nY = serie.userData.nY
 * const data = new Array(nX)
 * let id = 0
 * for (let i=0; i<nX; ++i) {
 *     data[i] = new Array(nY)
 *     for (let j=0; j<nY; ++j) {
 *         data[i][j] = serie.array[id++]
 *     }
 * }
 * // Use Plotly with data...
 * ```
 */
class Domain2D {
    /**
     * @param model The model used for the inversion
     * @param nX The number of points for the x axis
     * @param nY The number of points for the y axis
     */
    constructor({ model, nX = 10, nY = 10 }) {
        this.model = undefined;
        this.model = model;
        this.nx = nX;
        this.ny = nY;
        if (this.model.alpha.mapping === undefined)
            this.model.alpha.mapping = _mapping__WEBPACK_IMPORTED_MODULE_1__.defaultMapping;
    }
    /**
     * Compute a 2D domain (cost function according to varying x and y axis choosen by
     * the user).
     * @param xAxis The index of the xAxis from mapping (user-defined parameters)
     * @param yAxis The index of the yAxis from mapping (user-defined parameters)
     * @param alpha The alpha to use (note that the values used are those differents
     * from xAxis and yAxis indices)
     */
    evaluate(xAxis = 0, yAxis = 1, alpha) {
        const limits = [];
        this.model.alpha.min.forEach((m, i) => {
            limits.push({ min: m, max: this.model.alpha.max[i] });
        });
        const xMin = limits[xAxis].min;
        const xMax = limits[xAxis].max;
        const yMin = limits[yAxis].min;
        const yMax = limits[yAxis].max;
        //const r = new Array(this.nx*this.ny).fill(0)
        const r = (0,_youwol_dataframe__WEBPACK_IMPORTED_MODULE_2__.createEmptySerie)({ Type: undefined, count: this.nx * this.ny, itemSize: 1 });
        r.userData = {
            nx: this.nx,
            ny: this.ny,
            xMin,
            xMax,
            yMin,
            yMax
        };
        for (let i = 0; i < this.nx; ++i) {
            alpha[xAxis] = xMin + i * (xMax - xMin) / (this.nx - 1);
            for (let j = 0; j < this.ny; ++j) {
                alpha[yAxis] = yMin + i * (yMax - yMin) / (this.ny - 1);
                const newAlpha = this.model.alpha.mapping(alpha);
                r.array[i * this.nx + j] = (0,_cost__WEBPACK_IMPORTED_MODULE_0__.cost)(this.model.data, newAlpha);
            }
        }
        return r;
    }
}


/***/ }),

/***/ "./lib/forward.ts":
/*!************************!*\
  !*** ./lib/forward.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forward": () => (/* binding */ forward)
/* harmony export */ });
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_0__);

var forward;
(function (forward) {
    /**
     * Compute an attribute by superposition given some predefined simulations
     * @param simulations The dataframe containing al the necessary simulations
     * @param alpha The [[Alpha]] parameter to perform the linear combination
     * @param name The prefix of the series in the [[Dataframe]]
     * @param startIndex The starting index which concatenate to the name gives the
     * name of the first [[Serie]]. Default value is 1
     * @returns A new [[Serie]] which is the linear combination of the provided series
     * @example
     * ```ts
     * import { DataFrame, Serie } from '@youwol/dataframe'
     * import { simpleAndersonMapping, forward } from '@youwol/geophysics'
     *
     * let df = DataFrame.create({
     *      series: {
     *          'toto2': Serie.create({array: ..., itemSize: 3}),
     *          'toto3': Serie.create({array: ..., itemSize: 3}),
     *          'toto4': Serie.create({array: ..., itemSize: 3})
     *      }
     * })
     *
     * const a = forward.attribute({
     *      simulations: df,
     *      alpha      : simpleAndersonMapping([45, 1.2]),
     *      name       : 'toto',
     *      startIndex : 2
     * })
     * ```
     */
    function attribute({ simulations, alpha, name, startIndex = 1 }) {
        const n = alpha.length;
        const series = [];
        for (let i = startIndex; i < startIndex + n; ++i) {
            const serie = simulations.series[`${name}${i}`];
            if (serie === undefined) {
                throw new Error(`Serie named ${name}${i} is missing in the dataframe`);
            }
            series.push(serie);
        }
        return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.weightedSum)(series, alpha);
    }
    forward.attribute = attribute;
})(forward || (forward = {}));


/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugateData": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.ConjugateData),
/* harmony export */   "Data": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_6__.Data),
/* harmony export */   "DikeData": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.DikeData),
/* harmony export */   "Domain2D": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_2__.Domain2D),
/* harmony export */   "GenericScalarFieldData": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.GenericScalarFieldData),
/* harmony export */   "GpsData": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.GpsData),
/* harmony export */   "InsarData": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.InsarData),
/* harmony export */   "JointData": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.JointData),
/* harmony export */   "StyloliteData": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.StyloliteData),
/* harmony export */   "VerticalGpsData": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.VerticalGpsData),
/* harmony export */   "cost": () => (/* reexport safe */ _cost__WEBPACK_IMPORTED_MODULE_3__.cost),
/* harmony export */   "createData": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_6__.createData),
/* harmony export */   "defaultMapping": () => (/* reexport safe */ _mapping__WEBPACK_IMPORTED_MODULE_1__.defaultMapping),
/* harmony export */   "failurePlanes": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_9__.failurePlanes),
/* harmony export */   "forward": () => (/* reexport safe */ _forward__WEBPACK_IMPORTED_MODULE_7__.forward),
/* harmony export */   "generateConjugate": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.generateConjugate),
/* harmony export */   "generateDikes": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.generateDikes),
/* harmony export */   "generateFringes": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.generateFringes),
/* harmony export */   "generateGenericScalarField": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.generateGenericScalarField),
/* harmony export */   "generateInsar": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.generateInsar),
/* harmony export */   "generateJoints": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.generateJoints),
/* harmony export */   "generateStylolites": () => (/* reexport safe */ _dataset__WEBPACK_IMPORTED_MODULE_8__.generateStylolites),
/* harmony export */   "gradientPressureMapping": () => (/* reexport safe */ _mapping__WEBPACK_IMPORTED_MODULE_1__.gradientPressureMapping),
/* harmony export */   "monteCarlo": () => (/* reexport safe */ _monteCarlo__WEBPACK_IMPORTED_MODULE_5__.monteCarlo),
/* harmony export */   "segments2PointsWithNormals": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_9__.segments2PointsWithNormals),
/* harmony export */   "simpleAndersonMapping": () => (/* reexport safe */ _mapping__WEBPACK_IMPORTED_MODULE_1__.simpleAndersonMapping)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./lib/types.ts");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapping */ "./lib/mapping.ts");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain */ "./lib/domain.ts");
/* harmony import */ var _cost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cost */ "./lib/cost.ts");
/* harmony import */ var _inversion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inversion */ "./lib/inversion.ts");
/* harmony import */ var _monteCarlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monteCarlo */ "./lib/monteCarlo.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./lib/data.ts");
/* harmony import */ var _forward__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forward */ "./lib/forward.ts");
/* harmony import */ var _dataset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dataset */ "./lib/dataset/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./lib/utils/index.ts");










//export * from './geology'
//export * from './geophysics'


/***/ }),

/***/ "./lib/inversion.ts":
/*!**************************!*\
  !*** ./lib/inversion.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/mapping.ts":
/*!************************!*\
  !*** ./lib/mapping.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMapping": () => (/* binding */ defaultMapping),
/* harmony export */   "gradientPressureMapping": () => (/* binding */ gradientPressureMapping),
/* harmony export */   "simpleAndersonMapping": () => (/* binding */ simpleAndersonMapping)
/* harmony export */ });
/**
 * Using the prinicipal of superposition to perform fast computations requires
 * a vector of weights (called alpha). Most of the time the user wants to use the
 * weights in his own space, and therefore the need to map from the user-defined to the
 * needed space.
 * @module mapping
 */
/**
 * A default mapping for any [[Alpha]]. Basically it return the same alpha.
 * @see [[alphaMapping]]
 */
const defaultMapping = (params) => params;
/**
 * @brief Convert the regional Andersonian stress (theta, R) into the global CSys [xx, xy, yy].
 * Basically, this fonction convert a non-linear space into a linear one in order to be
 * used by the superposition. This regional stress is not defined with gradient.
 * @param alpha In the form [theta, R], with theta the angle in degrees of the maximum principal horizontal
 * stress according to the north and clock wize and defined in the range [0..180], R the extended
 * stress ratio in [0..3].
 *
 * For instance:
 * <ul>
 *   <li>if R ∈ [0..1], then it is a normal fault regime
 *   <li>if R ∈ [1..2], then it is a strike slip fault regime
 *   <li>if R ∈ [2..3], then it is a reverse fault regime
 * </ul>
 * @see [[alphaMapping]]
 * @see publication <br>
 * `Maerten, F., Madden, E. H., Pollard, D. D., & Maerten, L. (2016). Incorporating fault mechanics into inversions of aftershock data for the regional remote stress, with application to the 1992 Landers, California earthquake. Tectonophysics, 674, 52-64.`
 */
const simpleAndersonMapping = (alpha) => {
    const theta = alpha[0];
    const R = alpha[1];
    if (theta < 0 || theta > 180)
        throw new Error('Theta must be in [0°..180°]');
    if (R < 0 || R > 3)
        throw new Error('R must be in [0..3]');
    const c = Math.cos(theta * Math.PI / 180);
    const s = Math.sin(theta * Math.PI / 180);
    const c2 = c ** 2;
    const s2 = s ** 2;
    if (R <= 1)
        return [-c2 + (R - 1) * s2, R * c * s, -s2 + (R - 1) * c2];
    if (R <= 2)
        return [-R * c2 + (1 - R) * s2, c * s, -R * s2 + (1 - R) * c2];
    return [R * c2 + s2, (1 - R) * c * s, R * s2 + c2];
};
/**
 * Transform the user-parameter-space `[theta, Rh, RH, rockDensity, cavityDensity, shift1, shift2...]`
 * to the global one `[Sxx, Sxy, Syy, Szz, density, shift1, shift2...]`, where theta is the orientation
 * of the maximum principal horizontal stress according to the north, clock-wize and in `[0..180]`,
 * Rh is the ratio of Sigma_h/Sigma_v, RH is the ratio of Sigma_H/Sigma_v, and the shifts are the pressure
 * shift of the cavity at `z=0`.
 *
 * Note that this regional stress and the pressure use the gradient and that you can provide as many
 * shift pressures as necessary (as long as the number of linearly independent simulations are
 * computed)
 * @param alpha The user-define parameter space
 * @see [[alphaMapping]]
 * @returns `[Sxx, Sxy, Syy, Szz, cavityDensity, shift1, shift2...]`
 * @example
 * ```ts
 * // provide 2 pressure shifts
 * const alpha = GradientPressureMapping([45, 0.1, 0.2, 2300, 2200, -1e6, -1e7])
 * ```
 */
const gradientPressureMapping = (alpha) => {
    if (alpha.length < 6)
        throw new Error(`argument alpha should be of size greater or equal to 6:
        alpha = [theta, Rh, RH, rockDensity, cavityDensity, shift1, shift2, ...]`);
    let theta = alpha[0];
    //if (theta<0 || theta>180) throw new Error('Theta must be in [0°..180°]')
    theta = theta * Math.PI / 180;
    const Kh = alpha[1];
    const KH = alpha[2];
    const rock = alpha[3];
    const magma = alpha[4] * 9.81;
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    const cos2 = cos * cos;
    const sin2 = sin * sin;
    const Sv = -rock * 9.81; // already incorporated: |z|
    const xx = (Kh * cos2 + KH * sin2) * Sv;
    const xy = -((Kh - KH) * cos * sin) * Sv;
    const yy = (Kh * sin2 + KH * cos2) * Sv;
    const zz = Sv;
    const shifts = [...alpha].splice(5);
    return [xx, xy, yy, zz, magma, ...shifts];
};


/***/ }),

/***/ "./lib/monteCarlo.ts":
/*!***************************!*\
  !*** ./lib/monteCarlo.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monteCarlo": () => (/* binding */ monteCarlo)
/* harmony export */ });
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping */ "./lib/mapping.ts");
/* harmony import */ var _cost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cost */ "./lib/cost.ts");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @brief A monte-carlo algorithm to perform an inversion.
 * @param params The inversion parameters
 * @param n The number of simulations
 * @example
 * ```ts
 * const result = monteCarlo({
 *     data: [
 *         createData(GpsData, {
 *             dataframe: dataframe,
 *             measure  : 'gps',             // <--- loaded data
 *             compute  : ['u1', 'u2', 'u3'] // <--- 3 computed simulations
 *         }),
 *         createData(InsarData, {
 *             dataframe: dataframe,
 *             los      : LOS as math.Vector3,
 *             measure  : 'insar',           // <--- loaded data
 *             compute  : ['d1', 'd2', 'd3'] // <--- 3 computed simulations
 *         })
 *     ],
 *     alpha: {
 *         mapping: undefined,
 *         min    : [0,0,0], // therefore dim = 3
 *         max    : [1,1,1]
 *     }
 * }, 10000)
 * ```
 * @see [[alphaMapping]]
 * @see [[AlphaParameters]]
 * @see [[Data]]
 * @category Inversion
 */
const monteCarlo = (params, n) => {
    const genRandom = (min, max) => min + (0,_youwol_math__WEBPACK_IMPORTED_MODULE_2__.randomMT)(max - min);
    if (params.alpha === undefined)
        throw new Error('alpha is undefined');
    const limits = [];
    params.alpha.min.forEach((m, i) => {
        limits.push({ min: m, max: params.alpha.max[i] });
    });
    if (params.alpha.mapping === undefined)
        params.alpha.mapping = _mapping__WEBPACK_IMPORTED_MODULE_0__.defaultMapping;
    // Check the generated alpha (will trigger an exception of something is going wrong)
    params.alpha.mapping(limits.map(l => genRandom(l.min, l.max)));
    // Set the data weight if necessary
    // params.data.forEach( d => d.weight===undefined ? d.weight=1 : 1)
    let solution = {
        alpha: [],
        user: [],
        cost: 1e32,
        fit: 0,
        iteration: 0,
        maxIteration: n
    };
    const mod = n / 100 * 5; // 5%
    for (let i = 0; i < n; ++i) {
        // generate the alpha
        const userParams = limits.map(l => genRandom(l.min, l.max));
        const alpha = params.alpha.mapping(userParams);
        const c = (0,_cost__WEBPACK_IMPORTED_MODULE_1__.cost)(params.data, alpha);
        if (c < solution.cost) {
            solution.cost = c;
            solution.fit = Math.round((1 - c) * 10000) / 100; // 2 decimals max
            solution.alpha = alpha;
            solution.user = userParams;
            solution.iteration = i;
            if (params.onMessage) {
                params.onMessage(`\niteration: ${solution.iteration}`);
                params.onMessage(`cost     : ${solution.cost}`);
                params.onMessage(`fit      : ${solution.fit}`);
                params.onMessage(`mean misfit angle : ${solution.cost * 90}`);
                params.onMessage('user-alpha:');
                userParams.forEach(v => {
                    params.onMessage(`  ${v.toFixed(2)}`);
                });
            }
        }
        if (i % mod == 0 && params.onProgress) {
            params.onProgress(i, i * 100 / n);
        }
    }
    return solution;
};
/**
 * Use of MonteCarlo with dichotomy
 */
/*
export const dichotomicMonteCarlo = (params: InversionModel, n: number,
    {nbDicho=3, percent=25}:{nbDicho?: number, percent?: number}={}
): InversionResult =>
{
    let solution: InversionResult = {
        alpha: [],
        user : [],
        cost : 1e32,
        fit  : 0,
        iteration: 0,
        maxIteration: n
    }

    for (let i=0; i<nbDicho; ++i) {
        // Call of monteCarlo() above
        // TODO...
    }

    return solution
}
*/


/***/ }),

/***/ "./lib/types.ts":
/*!**********************!*\
  !*** ./lib/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/utils/failurePlanes.ts":
/*!************************************!*\
  !*** ./lib/utils/failurePlanes.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "failurePlanes": () => (/* binding */ failurePlanes)
/* harmony export */ });
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_0__);

function failurePlanes({ positions, stress, friction = 30 }) {
    let fricAngle = friction * Math.PI / 180;
    const { n1, n2 } = createPrimitive(fricAngle);
    // const matrix = new Matrix4()
    const eigv = (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.eigenVector)(stress);
    const quat = new _youwol_math__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
    return eigv.map((vectors, i) => {
        const m = _youwol_math__WEBPACK_IMPORTED_MODULE_0__.mat.unpack([vectors[0], vectors[3], vectors[6],
            vectors[1], vectors[4], vectors[7],
            vectors[2], vectors[5], vectors[8]
        ]);
        quat.setFromRotationMatrix(m);
        const rot = quat.toMatrix();
        return {
            n1: _youwol_math__WEBPACK_IMPORTED_MODULE_0__.mat.multVec(rot, n1),
            n2: _youwol_math__WEBPACK_IMPORTED_MODULE_0__.mat.multVec(rot, n2)
        };
    });
}
// ------------------------------------------------
function createPrimitive(fric) {
    const ang = deg2rad(45.0 - fric / 2.0);
    return {
        n1: _youwol_math__WEBPACK_IMPORTED_MODULE_0__.mat.multVec(makeRotationY(ang), [0, 0, 1]),
        n2: _youwol_math__WEBPACK_IMPORTED_MODULE_0__.mat.multVec(makeRotationY(-ang), [0, 0, 1])
    };
}
function deg2rad(a) {
    return a * Math.PI / 180;
}
function makeRotationY(theta) {
    const c = Math.cos(theta * Math.PI / 180), s = Math.sin(theta * Math.PI / 180);
    return _youwol_math__WEBPACK_IMPORTED_MODULE_0__.mat.unpack([c, 0, s, 0, 1, 0, -s, 0, c]);
}


/***/ }),

/***/ "./lib/utils/index.ts":
/*!****************************!*\
  !*** ./lib/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "failurePlanes": () => (/* reexport safe */ _failurePlanes__WEBPACK_IMPORTED_MODULE_1__.failurePlanes),
/* harmony export */   "segments2PointsWithNormals": () => (/* reexport safe */ _segments2PointsWithNormals__WEBPACK_IMPORTED_MODULE_0__.segments2PointsWithNormals)
/* harmony export */ });
/* harmony import */ var _segments2PointsWithNormals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segments2PointsWithNormals */ "./lib/utils/segments2PointsWithNormals.ts");
/* harmony import */ var _failurePlanes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./failurePlanes */ "./lib/utils/failurePlanes.ts");




/***/ }),

/***/ "./lib/utils/segments2PointsWithNormals.ts":
/*!*************************************************!*\
  !*** ./lib/utils/segments2PointsWithNormals.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "segments2PointsWithNormals": () => (/* binding */ segments2PointsWithNormals)
/* harmony export */ });
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/dataframe */ "@youwol/dataframe");
/* harmony import */ var _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Transform segments given by a DataFrame into points, where
 * positions are the center of each segments. Also, the normal of each segment
 * is introduced in the returned DataFrame.
 * @example
 * ```js
 * const io = require('@youwol/io')
 * const fs = require('fs')
 *
 * const text   = fs.readFileSync(filename, 'utf8')
 * const plines = io.decodeGocadPL(text)
 *
 * const results = plines.map( pline => pl2XyzWithNormals(pline) )
 * ```
 */
function segments2PointsWithNormals(df, dipAngle = 90, normalsName = 'n') {
    if (df.series.positions === undefined)
        return undefined;
    if (df.series.indices === undefined)
        return undefined;
    if (df.series.indices.itemSize !== 2)
        return undefined;
    const dip = dipAngle * Math.PI / 180;
    const COS = Math.cos(dip);
    const SIN = Math.sin(dip);
    const normals = [];
    const positions = [];
    df.series.indices.forEach(P => {
        const v1 = df.series.positions.itemAt(P[0]);
        const v2 = df.series.positions.itemAt(P[1]);
        for (var i = 0; i < 3; ++i) {
            positions.push((v1[i] + v2[i]) / 2);
        }
        let v = _youwol_math__WEBPACK_IMPORTED_MODULE_1__.vec.normalize([(v2[1] - v1[1]) * SIN, -(v2[0] - v1[0]) * SIN, COS]);
        v = _youwol_math__WEBPACK_IMPORTED_MODULE_1__.vec.normalize(v);
        normals.push(...v);
    });
    const dataframe = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.DataFrame.create({
        series: {
            positions: _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: positions, itemSize: 3 })
        }
    });
    dataframe.series[normalsName] = _youwol_dataframe__WEBPACK_IMPORTED_MODULE_0__.Serie.create({ array: normals, itemSize: 3 });
    return dataframe;
}


/***/ }),

/***/ "@youwol/dataframe":
/*!************************************!*\
  !*** external "@youwol/dataframe" ***!
  \************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__youwol_dataframe__;

/***/ }),

/***/ "@youwol/math":
/*!*******************************!*\
  !*** external "@youwol/math" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__youwol_math__;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugateData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ConjugateData),
/* harmony export */   "Data": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Data),
/* harmony export */   "DikeData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DikeData),
/* harmony export */   "Domain2D": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Domain2D),
/* harmony export */   "GenericScalarFieldData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GenericScalarFieldData),
/* harmony export */   "GpsData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GpsData),
/* harmony export */   "InsarData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InsarData),
/* harmony export */   "JointData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.JointData),
/* harmony export */   "StyloliteData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StyloliteData),
/* harmony export */   "VerticalGpsData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.VerticalGpsData),
/* harmony export */   "cost": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.cost),
/* harmony export */   "createData": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createData),
/* harmony export */   "defaultMapping": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.defaultMapping),
/* harmony export */   "failurePlanes": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.failurePlanes),
/* harmony export */   "forward": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.forward),
/* harmony export */   "generateConjugate": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateConjugate),
/* harmony export */   "generateDikes": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateDikes),
/* harmony export */   "generateFringes": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateFringes),
/* harmony export */   "generateGenericScalarField": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateGenericScalarField),
/* harmony export */   "generateInsar": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateInsar),
/* harmony export */   "generateJoints": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateJoints),
/* harmony export */   "generateStylolites": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.generateStylolites),
/* harmony export */   "gradientPressureMapping": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.gradientPressureMapping),
/* harmony export */   "monteCarlo": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.monteCarlo),
/* harmony export */   "segments2PointsWithNormals": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.segments2PointsWithNormals),
/* harmony export */   "simpleAndersonMapping": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.simpleAndersonMapping)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./lib/index.ts");
/*
 * Public API Surface of @youwol/geophysics
 */


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=geophysics.js.map