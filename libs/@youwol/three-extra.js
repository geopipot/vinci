(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define("@youwol/three-extra", [], factory);
	else if(typeof exports === 'object')
		exports["@youwol/three-extra"] = factory(require("three"));
	else
		root["@youwol/three-extra"] = factory(root["THREE"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_three__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/Control.ts":
/*!************************!*\
  !*** ./lib/Control.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/animationLoop.ts":
/*!******************************!*\
  !*** ./lib/animationLoop.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "AnimationLoop": () => (/* binding */ AnimationLoop)
/* harmony export */ });
function animate({ cb, nb = 50, time = 300, endCb }) {
    return (new AnimationLoop()).start({ cb, nb, time, endCb });
}
class AnimationLoop {
    constructor() {
        this.loop = () => {
            this.t += 1 / (this.nb - 1);
            if (this.t <= 1) {
                this.cb(this.t);
            }
            else {
                clearInterval(this.intervalId);
                if (this.endCb)
                    this.endCb();
            }
        };
        this.t = 0;
        this.nb = 100;
        this.time = 300;
        this.cb = undefined;
        this.endCb = undefined;
        this.intervalId = undefined;
    }
    start({ cb, nb = 50, time = 300, endCb }) {
        this.nb = nb;
        this.cb = cb;
        this.time = time;
        this.intervalId = setInterval(this.loop, this.time / this.nb);
        this.endCb = endCb;
        return this;
    }
}


/***/ }),

/***/ "./lib/commands/changeBackground.ts":
/*!******************************************!*\
  !*** ./lib/commands/changeBackground.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeBackground": () => (/* binding */ changeBackground)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Change the background by using either a color (given by a string) or an image URL
 * @example
 * ```ts
 * kepler.changeBackground( {scene, color: '#7777777'} )
 * ```
 * @category Commands
 */
function changeBackground({ scene, color, image }) {
    if (!scene)
        throw new Error('Missing scene');
    if (color) {
        scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(color);
    }
    else if (image) {
        const loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
        const backgroundTexture = loader.load(image);
        scene.background = backgroundTexture;
    }
}


/***/ }),

/***/ "./lib/commands/changeView.ts":
/*!************************************!*\
  !*** ./lib/commands/changeView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeView": () => (/* binding */ changeView)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fitScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fitScene */ "./lib/commands/fitScene.ts");


// TODO: define a Control interface since we can have OrbitControl etc...
/**
 * Change the view of the scene
 * @param view Possible values are `up`, `down`, `east`, `west`, `north`, `south`
 * @param controls The Trackball controls
 * @example
 * ```ts
 * kepler.changeView('north', controls)
 * ```
 * @category Commands
 */
function changeView(view, { scene, camera, controls, selection = undefined }) {
    if (!controls)
        throw new Error('Missing controls in args');
    if (view) {
        const name = view.toLowerCase();
        const e = entries.get(name);
        if (e !== undefined) {
            controls.target.copy(e.target); // target is Vector3
            controls.object.position.copy(e.position); // object is Object3D
            controls.object.up.copy(e.up);
            //controls.rotateCamera()
            (0,_fitScene__WEBPACK_IMPORTED_MODULE_1__.fitScene)({ scene, camera, controls, selection });
            // const beginTarget = controls.target.clone()
            // const endTarget   = e.target
            // const beginCamera = controls.object.position.clone()
            // const endCamera   = e.position
            // animate({
            //     cb: (t: number) => {
            //         controls.object.position.copy( (new Vector3()).lerpVectors(beginCamera, endCamera, t) )
            //         controls.target.copy( (new Vector3()).lerpVectors(beginTarget, endTarget, t) )
            //         controls.update()
            //     },
            //     endCb: () => fitScene({scene, camera, controls}),
            //     nb  : 20,
            //     time: 300
            // })
        }
    }
}
// ---------------------------------------------------------------
const entries = new Map();
function add(name, target, position, up) {
    const entry = {
        target: target.clone(),
        position: position.clone(),
        up: up.clone()
    };
    entries.set(name, entry);
}
add('up', new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0));
add('down', new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, -1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0));
add('east', new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 1));
add('west', new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 1));
add('north', new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 1));
add('south', new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -1, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 1));


/***/ }),

/***/ "./lib/commands/createCircleSprite.ts":
/*!********************************************!*\
  !*** ./lib/commands/createCircleSprite.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCircleSprite": () => (/* binding */ createCircleSprite)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

function createCircleSprite(scale = 0.03, pos = undefined, sizeAttenuation = false, color = '#fff') {
    const circleMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.SpriteMaterial({
        map: new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(makeCircleImage(color)),
        sizeAttenuation
    });
    const sprite = new three__WEBPACK_IMPORTED_MODULE_0__.Sprite(circleMaterial);
    sprite.scale.setScalar(scale);
    if (pos)
        sprite.position.copy(pos.clone());
    return sprite;
}
function makeCircleImage(color) {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let size = 64;
    canvas.width = size;
    canvas.height = size;
    let r = size * 0.3 / 2;
    let blur = size - r;
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#555';
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#000'; //#009bff'
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, r * 0.5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    return canvas;
}


/***/ }),

/***/ "./lib/commands/createDefaultLights.ts":
/*!*********************************************!*\
  !*** ./lib/commands/createDefaultLights.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefaultLights": () => (/* binding */ createDefaultLights)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @category Commands
 */
function createDefaultLights({ scaling, object, intensity = 0.5 } = {}) {
    const g = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    const b = new three__WEBPACK_IMPORTED_MODULE_0__.Box3;
    b.setFromObject(object);
    const sphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere;
    b.getBoundingSphere(sphere);
    const radius = sphere.radius;
    const center = sphere.center;
    // let dir = new Vector3(radius,4*radius,3*radius)
    // //let dir = new Vector3(5,20,12)
    const dir = center.clone();
    dir.add(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(radius, radius, radius));
    let dirLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xaaaaaa);
    dirLight.position.set(dir.x, dir.y, dir.z);
    dirLight.castShadow = false;
    g.add(dirLight);
    dirLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xaaaaaa);
    dirLight.position.set(dir.x, dir.y, -dir.z);
    dirLight.castShadow = false;
    g.add(dirLight);
    // dirLight.shadow.camera.near = 0.01
    // dirLight.shadow.camera.far = 100000
    // dirLight.shadow.mapSize.x = 2048;
    // dirLight.shadow.mapSize.y = 2048;
    //// dirLight.shadow.camera.left = -20;
    //// dirLight.shadow.camera.bottom = -20;
    //// dirLight.shadow.camera.right = 20;
    //// dirLight.shadow.camera.top = 20;
    // DEBUG
    if (false) {}
    //
    // ---------------------------------------------
    const intensitySky = 0.4; // param for flux
    const intensityground = 0.4; // param for flux
    const sky = 0xffffff;
    const ground = createGrayColor(intensityground);
    const h1 = new three__WEBPACK_IMPORTED_MODULE_0__.HemisphereLight(sky, ground, intensitySky);
    h1.position.set(0, 10, 10);
    g.add(h1);
    const h2 = new three__WEBPACK_IMPORTED_MODULE_0__.HemisphereLight(sky, ground, intensitySky);
    h2.position.set(0, -10, -10);
    g.add(h2);
    return g;
}
function createGrayColor(intensity) {
    if (intensity === 0) {
        return '#000000';
    }
    const value = intensity * 0xFF | 0;
    const grayscale = (value << 16) | (value << 8) | value;
    const gray = grayscale.toString(16);
    return gray.length === 5 ? '#0' + gray : '#' + gray;
}


/***/ }),

/***/ "./lib/commands/createGridHelper.ts":
/*!******************************************!*\
  !*** ./lib/commands/createGridHelper.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridTextParameters": () => (/* binding */ GridTextParameters),
/* harmony export */   "GridHeplerParameters": () => (/* binding */ GridHeplerParameters),
/* harmony export */   "createGridHelper": () => (/* binding */ createGridHelper)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTextSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTextSprite */ "./lib/commands/createTextSprite.ts");
/* harmony import */ var _animationLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animationLoop */ "./lib/animationLoop.ts");



class GridTextParameters {
    constructor({ rect = true, rectColor = '#fffd82', fontColor = '#000', fontSize = 22 } = {}) {
        this.rect = rect;
        this.rectColor = rectColor;
        this.fontColor = fontColor;
        this.fontSize = fontSize;
    }
}
class GridHeplerParameters {
    constructor({ scene, camera, renderer, renderFunctions, extendCoef, fading, fadingTime, showPlanes, color, showBBox, divisions }) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.renderFunctions = renderFunctions;
        this.extendCoef = extendCoef !== undefined ? extendCoef : 1;
        this.fading = fading !== undefined ? fading : true;
        this.fadingTime = fadingTime !== undefined ? fadingTime : 300;
        this.showPlanes = showPlanes !== undefined ? showPlanes : true;
        this.color = color !== undefined ? color : '#aaaaaa';
        this.showBBox = showBBox !== undefined ? showBBox : false;
        this.divisions = divisions !== undefined ? divisions : 10;
    }
}
function createGridHelper(object, params, text = new GridTextParameters()) {
    return new GridsHelper(object, params, text);
}
/*
TODO:
    - separate the size for each axis
    - axis size should be greater than 30% of the max axis size
*/
// class Obj {
//     grid  : GridHelper
//     plane : Mesh
//     group : Group
// }
class GridsHelper {
    constructor(object, params, textParams) {
        this.textParams = textParams;
        this.renderFunctions = undefined;
        this.renderer = undefined;
        this.scene = undefined;
        this.camera = undefined;
        this.params = undefined;
        this.renderFunctions = params.renderFunctions;
        this.renderer = params.renderer;
        this.camera = params.camera;
        this.scene = params.scene;
        this.params = params;
        this.generateGrid(object);
        this.uuidFct = this.renderFunctions.add(() => {
            this.update();
            this.renderer.render(this.scene, this.camera);
        });
        this.update();
    }
    dispose() {
        this.renderFunctions.remove(this.uuidFct);
        this.scene.remove(this.group);
    }
    update() {
        if (this.params.fading === false) {
            this.groupEast.visible = this.canSee(this.camera, Direction.XPLUS);
            this.groupWest.visible = this.canSee(this.camera, Direction.XMINUS);
            this.gridSouth.visible = this.canSee(this.camera, Direction.YMINUS);
            this.groupNorth.visible = this.canSee(this.camera, Direction.YPLUS);
            this.groupTop.visible = this.canSee(this.camera, Direction.ZPLUS);
            this.groupBottom.visible = this.canSee(this.camera, Direction.ZMINUS);
            return;
        }
        const fade = (name, dir) => {
            const view = this.canSee(this.camera, dir);
            if (!this["updating" + name] && this["grid" + name].visible !== view) {
                const mat1 = this["plane" + name].material;
                const mat2 = this["grid" + name].material;
                this["updating" + name] = true;
                if (this["plane" + name].visible === false) {
                    mat1.opacity = 0;
                    mat2.opacity = 0;
                }
                else {
                    this["grid" + name].visible = false;
                }
                (0,_animationLoop__WEBPACK_IMPORTED_MODULE_2__.animate)({
                    cb: (t) => {
                        mat1.opacity = view ? t : (1 - t);
                        mat2.opacity = view ? t : (1 - t);
                    },
                    nb: 20,
                    time: this.params.fadingTime,
                    endCb: () => {
                        this["plane" + name].visible = view && this.params.showPlanes;
                        this["grid" + name].visible = view;
                        this["updating" + name] = false;
                    }
                });
            }
        };
        fade("Bottom", Direction.ZMINUS);
        fade("Top", Direction.ZPLUS);
        fade("East", Direction.XPLUS);
        fade("West", Direction.XMINUS);
        fade("South", Direction.YMINUS);
        fade("North", Direction.YPLUS);
    }
    canSee(c, view) {
        const ray = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        c.getWorldDirection(ray);
        switch (view) {
            case Direction.XPLUS: return this.getAngle(ray, Y) > Math.PI ? true : false;
            case Direction.XMINUS: return this.getAngle(ray, Y) > Math.PI ? false : true;
            case Direction.YPLUS: return this.getAngle(ray, X) < Math.PI ? true : false;
            case Direction.YMINUS: return this.getAngle(ray, X) < Math.PI ? false : true;
            case Direction.ZPLUS: return ray.z >= 0 ? true : false;
            default: return ray.z >= 0 ? false : true;
        }
    }
    getAngle(v1, v2) {
        let ang = (v1.cross(v2).z < 0 ? TWOPI - Math.acos(v1.dot(v2)) : Math.acos(v1.dot(v2)));
        if (ang >= TWOPI)
            ang -= TWOPI;
        return ang;
    }
    generateGrid(object) {
        const b = new three__WEBPACK_IMPORTED_MODULE_0__.Box3;
        b.setFromObject(object);
        const scale = this.params.extendCoef;
        const size = Math.max(b.max.x - b.min.x, b.max.y - b.min.y, b.max.z - b.min.z) * this.params.extendCoef;
        const sizes = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3((b.max.x - b.min.x) * scale, (b.max.y - b.min.y) * scale, (b.max.z - b.min.z) * scale);
        const sizeX = sizes.x < 0.3 * size ? 0.3 * size : sizes.x;
        const sizeY = sizes.y < 0.3 * size ? 0.3 * size : sizes.y;
        const sizeZ = sizes.z < 0.3 * size ? 0.3 * size : sizes.z;
        const center = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3;
        b.getCenter(center);
        this.group = new three__WEBPACK_IMPORTED_MODULE_0__.Group;
        this.scene.add(this.group);
        this.groupBottom = new three__WEBPACK_IMPORTED_MODULE_0__.Group;
        this.group.add(this.groupBottom);
        this.groupTop = new three__WEBPACK_IMPORTED_MODULE_0__.Group;
        this.group.add(this.groupTop);
        this.groupNorth = new three__WEBPACK_IMPORTED_MODULE_0__.Group;
        this.group.add(this.groupNorth);
        this.groupSouth = new three__WEBPACK_IMPORTED_MODULE_0__.Group;
        this.group.add(this.groupSouth);
        this.groupEast = new three__WEBPACK_IMPORTED_MODULE_0__.Group;
        this.group.add(this.groupEast);
        this.groupWest = new three__WEBPACK_IMPORTED_MODULE_0__.Group;
        this.group.add(this.groupWest);
        // this.addMarker(1.23, b.min)
        // this.addMarker(1.23, b.max)
        let pos = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3;
        {
            pos.setX(center.x).setY(center.y).setZ(center.z - sizeZ / 2);
            const { grid, plane } = this.generatePlane(sizeX, sizeY, pos);
            this.gridBottom = grid;
            this.planeBottom = plane;
            this.groupBottom.add(this.gridBottom);
            if (this.params.showPlanes)
                this.groupBottom.add(this.planeBottom);
        }
        {
            pos.setX(center.x).setY(center.y).setZ(center.z + sizeZ / 2);
            const { grid, plane } = this.generatePlane(sizeX, sizeY, pos);
            this.gridTop = grid;
            this.planeTop = plane;
            this.groupTop.add(this.gridTop);
            if (this.params.showPlanes)
                this.groupTop.add(this.planeTop);
        }
        {
            pos.setX(center.x).setY(center.y - sizeY / 2).setZ(center.z);
            const { grid, plane } = this.generatePlane(sizeX, sizeZ, pos, 'x', Math.PI / 2);
            this.gridSouth = grid;
            this.planeSouth = plane;
            this.groupSouth.add(this.gridSouth);
            if (this.params.showPlanes)
                this.groupSouth.add(this.planeSouth);
        }
        {
            pos.setX(center.x).setY(center.y + sizeY / 2).setZ(center.z);
            const { grid, plane } = this.generatePlane(sizeX, sizeZ, pos, 'x', Math.PI / 2);
            this.gridNorth = grid;
            this.planeNorth = plane;
            this.groupNorth.add(this.gridNorth);
            if (this.params.showPlanes)
                this.groupNorth.add(this.planeNorth);
        }
        {
            pos.setX(center.x - sizeX / 2).setY(center.y).setZ(center.z);
            const { grid, plane } = this.generatePlane(sizeZ, sizeY, pos, 'y', Math.PI / 2);
            this.gridWest = grid;
            this.planeWest = plane;
            this.groupWest.add(this.gridWest);
            if (this.params.showPlanes)
                this.groupWest.add(this.planeWest);
        }
        {
            pos.setX(center.x + sizeX / 2).setY(center.y).setZ(center.z);
            const { grid, plane } = this.generatePlane(sizeZ, sizeY, pos, 'y', Math.PI / 2);
            this.gridEast = grid;
            this.planeEast = plane;
            this.groupEast.add(this.gridEast);
            if (this.params.showPlanes)
                this.groupEast.add(this.planeEast);
        }
        if (this.params.showBBox) {
            const bbox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(this.group);
            const size = bbox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3);
            const min = Math.min(size.x, size.y, size.z);
            const max = Math.max(size.x, size.y, size.z);
            if (min === 0) {
                bbox.expandByScalar(max / 1e5);
            }
            const skin = new three__WEBPACK_IMPORTED_MODULE_0__.Box3Helper(bbox, new three__WEBPACK_IMPORTED_MODULE_0__.Color('#000'));
            this.group.add(skin);
        }
    }
    generatePlane(sizeX, sizeY, pos, rotAxis = undefined, rotAngle = undefined) {
        const grid = new GridHelper(sizeX, sizeY, this.params.divisions, this.textParams);
        if (rotAxis) {
            this.rotate(grid.rotation, rotAxis, rotAngle);
        }
        grid.position.set(pos.x, pos.y, pos.z);
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(sizeX, sizeY);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
            color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(this.params.color),
            side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            transparent: true,
            opacity: this.params.opacity
        });
        const plane = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
        if (rotAxis)
            this.rotate(plane.rotation, rotAxis, rotAngle);
        plane.position.set(pos.x, pos.y, pos.z);
        plane.visible = this.params.showPlanes;
        //plane.receiveShadow = true
        return {
            grid,
            plane
        };
    }
    rotate(rotation, rotAxis, rotAngle) {
        switch (rotAxis) {
            case 'x':
                rotation.x = rotAngle;
                break;
            case 'y':
                rotation.y = rotAngle;
                break;
            case 'z':
                rotation.z = rotAngle;
                break;
            default: throw new Error('unknown axis ' + rotAxis);
        }
    }
    addMarker(value, pos) {
        const text = Math.abs(value) > 100 ? value.toFixed(0).toString() : value.toFixed(3).toString();
        const s = (0,_createTextSprite__WEBPACK_IMPORTED_MODULE_1__.createTextSprite)({
            text,
            position: pos,
            rect: this.textParams.rect,
            rectColor: this.textParams.rectColor,
            fontSize: this.textParams.fontSize,
            fontColor: this.textParams.fontColor
        });
        this.group.add(s);
    }
}
const X = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 0, 0);
const Y = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -1, 0);
const TWOPI = 2 * Math.PI;
var Direction;
(function (Direction) {
    Direction[Direction["XPLUS"] = 0] = "XPLUS";
    Direction[Direction["XMINUS"] = 1] = "XMINUS";
    Direction[Direction["YPLUS"] = 2] = "YPLUS";
    Direction[Direction["YMINUS"] = 3] = "YMINUS";
    Direction[Direction["ZPLUS"] = 4] = "ZPLUS";
    Direction[Direction["ZMINUS"] = 5] = "ZMINUS";
})(Direction || (Direction = {}));
class GridHelper extends three__WEBPACK_IMPORTED_MODULE_0__.LineSegments {
    constructor(sizeX, sizeY, divisions, textParams, c1 = 0x000000, c2 = 0x888888) {
        super();
        const stepX = sizeX / divisions;
        const stepY = sizeY / divisions;
        const X2 = sizeX / 2;
        const Y2 = sizeY / 2;
        const vertices = [];
        let k = -X2;
        let l = -Y2;
        for (let i = 0; i <= divisions; ++i) {
            vertices.push(-X2, l, 0, X2, l, 0);
            vertices.push(k, -Y2, 0, k, Y2, 0);
            if (true) {
                const text = Math.abs(k) > 100 ? k.toFixed(0).toString() : k.toFixed(3).toString();
                const s = (0,_createTextSprite__WEBPACK_IMPORTED_MODULE_1__.createTextSprite)({
                    text,
                    position: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(X2, l, 0),
                    rect: textParams.rect,
                    rectColor: textParams.rectColor,
                    fontSize: textParams.fontSize,
                    fontColor: textParams.fontColor
                });
                this.add(s);
            }
            k += stepX;
            l += stepY;
        }
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
        geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(vertices, 3));
        const material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({ vertexColors: true, toneMapped: false });
        const self = this;
        self.geometry = geometry;
        self.material = material;
        self.type = 'GridHelper';
    }
}


/***/ }),

/***/ "./lib/commands/createNavigationCube.ts":
/*!**********************************************!*\
  !*** ./lib/commands/createNavigationCube.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationCubeParameters": () => (/* binding */ NavigationCubeParameters),
/* harmony export */   "installNavigationCube": () => (/* binding */ installNavigationCube)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./lib/commands/index.ts");


// See https://github.com/bytezeroseven/GLB-Viewer/blob/master/viewer.js
/**
 * @category Skin Parameters
 */
class NavigationCubeParameters {
    constructor({ scene, camera, renderer, controls, renderFunctions, labels = ['RIGHT', 'LEFT', 'TOP', 'BOTTOM', 'FRONT', 'BACK'], domElement, domHome = undefined, domSaveHome = undefined }) {
        this.domHome = domHome;
        this.domSaveHome = domSaveHome;
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.controls = controls;
        this.domElement = domElement;
        this.renderFunctions = renderFunctions;
        this.labels = labels;
    }
}
/**
 * @category Skins
 */
function installNavigationCube(params) {
    return new NavigationCube(params);
}
// =========================================================
class NavigationCube {
    constructor(params) {
        this.camera = undefined;
        this.renderer = undefined;
        this.cameraDistance = 1.75;
        this.hasMoved = false;
        //cubeController:     Controls = undefined
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene;
        this.planes = [];
        this.cube = undefined;
        this.activePlane = undefined;
        this.oldPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this.newPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this.uuidFct = undefined;
        this.serializer = undefined;
        this.onClick = (e) => {
            this.renderer.domElement.onmousemove(e);
            if (!this.activePlane || this.hasMoved) {
                return false;
            }
            (0,___WEBPACK_IMPORTED_MODULE_1__.changeView)(this.activePlane.name, {
                scene: this.parentScene,
                camera: this.parentCamera,
                controls: this.controls
            });
            this.deactivate();
        };
        this.deactivate = () => {
            if (this.activePlane !== undefined) {
                const mesh = this.activePlane;
                const material = mesh.material;
                material.opacity = 0;
                material.needsUpdate = true;
                this.activePlane = undefined;
            }
        };
        this.onMouseMove = (e) => {
            this.deactivate();
            let x = e.offsetX;
            let y = e.offsetY;
            let size = this.renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2());
            let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(x / size.width * 2 - 1, -y / size.height * 2 + 1);
            let raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
            raycaster.setFromCamera(mouse, this.camera);
            let intersects = raycaster.intersectObjects(this.planes.concat(this.cube));
            if (intersects.length > 0 && intersects[0].object != this.cube) {
                const mesh = intersects[0].object;
                const material = mesh.material;
                this.activePlane = mesh;
                material.opacity = 0.2;
                material.needsUpdate = true;
                this.renderFunctions.render();
            }
            else {
                this.deactivate();
            }
        };
        this.onMouseLeave = (e) => {
            this.renderFunctions.render();
        };
        this.updateCubeCamera = () => {
            this.camera.rotation.copy(this.parentCamera.rotation);
            let dir = this.parentCamera.position.clone().sub(this.controls.target).normalize();
            this.camera.position.copy(dir.multiplyScalar(this.cameraDistance));
        };
        this.parentScene = params.scene;
        this.parentRenderer = params.renderer;
        this.parentCamera = params.camera;
        this.domElement = params.domElement;
        this.renderFunctions = params.renderFunctions;
        this.controls = params.controls;
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(70, this.domElement.offsetWidth / this.domElement.offsetHeight, 0.1, 100);
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: true
        });
        this.renderer.setSize(this.domElement.offsetWidth, this.domElement.offsetHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.domElement.appendChild(this.renderer.domElement);
        /*
        this.cubeController = new TrackballControls(this.parentCamera, this.renderer.domElement)
        //this.cubeController.enablePan = false;
        //this.cubeController.enableZoom = false;
        this.cubeController.noPan = true
        this.cubeController.noZoom = true
        this.cubeController.rotateSpeed = 0.125
        */
        // let cubeController = new TrackballControls(this.camera, this.renderer.domElement);
        // // cubeController.enablePan = false;
        // // cubeController.enableZoom = false;
        // cubeController.noPan = true
        // cubeController.noZoom = true
        // cubeController.rotateSpeed = 0.125;
        // //cubeController.addEventListener('change', () => this.renderFunctions.render())
        this.uuidFct = this.renderFunctions.add(() => {
            this.updateCubeCamera();
            this.renderer.render(this.scene, this.camera);
        });
        this.generateCube(params);
        this.renderer.domElement.onmousemove = this.onMouseMove;
        this.renderer.domElement.onclick = this.onClick;
        this.renderer.domElement.onmouseleave = this.onMouseLeave;
        this.serializer = new TrackballSerializer(this.controls);
    }
    dispose() {
        this.renderFunctions.remove(this.uuidFct);
    }
    saveView() {
        this.serializer.serialize();
    }
    restoreView() {
        this.serializer.deserialize();
    }
    generateCube(option) {
        // Save current view
        let elt = option ? option.domSaveHome : undefined;
        if (elt)
            elt.addEventListener('click', () => this.serializer.serialize());
        // Restore view
        elt = option ? option.domHome : undefined;
        if (elt)
            elt.addEventListener('click', () => this.serializer.deserialize());
        let materials = [];
        let texts = option.labels;
        let textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let size = 64;
        canvas.width = size;
        canvas.height = size;
        // Faces
        ctx.font = 'bolder 12px "Open sans", Arial';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        // Faces colors (grad or not)
        let mainColor = '#333';
        let otherColor = '#333';
        let bg = ctx.createLinearGradient(0, 0, 0, size);
        bg.addColorStop(0, mainColor);
        bg.addColorStop(1, otherColor);
        // Border lines
        for (let i = 0; i < 6; i++) {
            if (texts[i] == texts[2]) {
                ctx.fillStyle = mainColor;
            }
            else if (texts[i] == texts[3]) {
                ctx.fillStyle = otherColor;
            }
            else {
                ctx.fillStyle = bg;
            }
            ctx.fillRect(0, 0, size, size);
            ctx.strokeStyle = '#fff';
            ctx.fillStyle = '#fff';
            //ctx.setLineDash([8, 8]);
            ctx.lineWidth = 4;
            ctx.strokeRect(0, 0, size, size);
            ctx.fillStyle = '#FFF';
            ctx.fillText(texts[i], size / 2, size / 2);
            materials[i] = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
                map: textureLoader.load(canvas.toDataURL())
            });
        }
        let planeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
            side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
            color: 0xffc000,
            transparent: true,
            opacity: 0,
            depthTest: false
        });
        let planeSize = 0.7;
        let planeGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(planeSize, planeSize);
        let a = 0.51;
        let plane1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, planeMaterial.clone());
        plane1.position.z = a;
        plane1.name = 'up';
        this.scene.add(plane1);
        this.planes.push(plane1);
        let plane2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, planeMaterial.clone());
        //plane2.rotation.y = Math.PI
        //plane2.position.z = -a;
        plane2.name = 'down';
        this.scene.add(plane2);
        this.planes.push(plane2);
        let plane3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, planeMaterial.clone());
        plane3.rotation.y = Math.PI / 2;
        plane3.position.x = a;
        plane3.name = 'east';
        this.scene.add(plane3);
        this.planes.push(plane3);
        let plane4 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, planeMaterial.clone());
        plane4.rotation.y = Math.PI / 2;
        plane4.position.x = -a;
        plane4.name = 'west';
        this.scene.add(plane4);
        this.planes.push(plane4);
        let plane5 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, planeMaterial.clone());
        plane5.rotation.x = Math.PI / 2;
        plane5.position.y = a;
        plane5.name = 'north';
        this.scene.add(plane5);
        this.planes.push(plane5);
        let plane6 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, planeMaterial.clone());
        plane6.rotation.x = Math.PI / 2;
        plane6.position.y = -a;
        plane6.name = 'south';
        this.scene.add(plane6);
        this.planes.push(plane6);
        this.cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1), materials);
        this.cube.rotation.x = Math.PI / 2;
        this.scene.add(this.cube);
        if (false) {}
    }
}
class TrackballSerializer {
    constructor(controls) {
        this.controls = controls;
    }
    serialize() {
        localStorage.setItem("controls.target.x", this.controls.target.x.toString());
        localStorage.setItem("controls.target.y", this.controls.target.y.toString());
        localStorage.setItem("controls.target.z", this.controls.target.z.toString());
        localStorage.setItem("controls.object.position.x", this.controls.object.position.x.toString());
        localStorage.setItem("controls.object.position.y", this.controls.object.position.y.toString());
        localStorage.setItem("controls.object.position.z", this.controls.object.position.z.toString());
        localStorage.setItem("controls.object.up.x", this.controls.object.up.x.toString());
        localStorage.setItem("controls.object.up.y", this.controls.object.up.y.toString());
        localStorage.setItem("controls.object.up.z", this.controls.object.up.z.toString());
        const camera = this.controls.object;
        localStorage.setItem("controls.object.zoom", camera.zoom.toString());
    }
    deserialize() {
        if (!localStorage.getItem("controls.target.x"))
            return;
        this.controls.target.x = parseFloat(localStorage.getItem("controls.target.x"));
        this.controls.target.y = parseFloat(localStorage.getItem("controls.target.y"));
        this.controls.target.z = parseFloat(localStorage.getItem("controls.target.z"));
        this.controls.object.position.x = parseFloat(localStorage.getItem("controls.object.position.x"));
        this.controls.object.position.y = parseFloat(localStorage.getItem("controls.object.position.y"));
        this.controls.object.position.z = parseFloat(localStorage.getItem("controls.object.position.z"));
        this.controls.object.up.x = parseFloat(localStorage.getItem("controls.object.up.x"));
        this.controls.object.up.y = parseFloat(localStorage.getItem("controls.object.up.y"));
        this.controls.object.up.z = parseFloat(localStorage.getItem("controls.object.up.z"));
        const camera = this.controls.object;
        camera.zoom = parseFloat(localStorage.getItem("controls.object.zoom"));
        this.controls.update();
    }
}


/***/ }),

/***/ "./lib/commands/createTextSprite.ts":
/*!******************************************!*\
  !*** ./lib/commands/createTextSprite.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTextSprite": () => (/* binding */ createTextSprite)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

function createTextSprite({ text, position, rect = true, rectColor = '#fffd82', fontColor = '#000', fontSize = 22 }) {
    const canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    // const fontsize = 22
    ctx.font = 'bolder ' + fontSize + 'px "Open Sans", Arial';
    let size = ctx.measureText(text);
    // console.log(size)
    let paddingLeft = 5;
    let paddingTop = 5;
    let margin = 10;
    canvas.width = (size.width + paddingLeft * 2 + margin * 2);
    canvas.height = (fontSize + paddingTop * 2 + margin * 2);
    if (rect) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#fff';
        ctx.fillStyle = rectColor;
        createRect(ctx, margin, margin, canvas.width - margin * 2, canvas.height - margin * 2, 10);
    }
    ctx.shadowBlur = 0;
    ctx.fillStyle = fontColor;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = 'bolder ' + fontSize + 'px "Open Sans", Arial';
    ctx.fillText(text, paddingLeft + margin, paddingTop + margin);
    let texture = new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(canvas);
    let sprite = new three__WEBPACK_IMPORTED_MODULE_0__.Sprite(new three__WEBPACK_IMPORTED_MODULE_0__.SpriteMaterial({
        map: texture,
        sizeAttenuation: false
    }));
    let h = 0.3;
    sprite.scale.set(0.002 * canvas.width, 0.0025 * canvas.height, 1).multiplyScalar(h);
    sprite.position.copy(position);
    // sprite.position.setX(sprite.position.x + canvas.width)
    return sprite;
}
function createRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
}


/***/ }),

/***/ "./lib/commands/fitScene.ts":
/*!**********************************!*\
  !*** ./lib/commands/fitScene.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fitScene": () => (/* binding */ fitScene)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Fit a scene or a specific object or array of objects.
 * The default value for the fitRatio is 1.2
 * @example
 * ```ts
 * threeExtra.fitScene( {scene, camera, controls} )
 * ```
 * @category Commands
 */
function fitScene({ scene, camera, controls, selection, fitRatio }) {
    if (!camera)
        throw new Error('Missing camera');
    if (!controls)
        throw new Error('Missing control');
    if (!(camera instanceof three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera))
        throw new Error('Ortho camera not suppported yet');
    if (selection === undefined && !scene)
        throw new Error('Missing scene or selection array');
    selection = selection !== undefined ? selection : scene.children;
    fitRatio = fitRatio !== undefined ? fitRatio : 1.2;
    const box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
    if (!Array.isArray(selection)) {
        box.expandByObject(selection);
    }
    else {
        selection.forEach((mesh) => {
            if (mesh instanceof three__WEBPACK_IMPORTED_MODULE_0__.Object3D) {
                box.expandByObject(mesh);
            }
        });
    }
    const size = box.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());
    const center = box.getCenter(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());
    const maxSize = Math.max(size.x, size.y, size.z);
    const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    const distance = fitRatio * Math.max(fitHeightDistance, fitWidthDistance);
    const direction = controls.target
        .clone()
        .sub(camera.position)
        .normalize()
        .multiplyScalar(distance);
    controls.maxDistance = distance * 10;
    controls.target.copy(center);
    camera.near = distance / 100;
    camera.far = distance * 100;
    camera.updateProjectionMatrix();
    camera.position.copy(controls.target).sub(direction);
    controls.update();
}


/***/ }),

/***/ "./lib/commands/index.ts":
/*!*******************************!*\
  !*** ./lib/commands/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeView": () => (/* reexport safe */ _changeView__WEBPACK_IMPORTED_MODULE_0__.changeView),
/* harmony export */   "fitScene": () => (/* reexport safe */ _fitScene__WEBPACK_IMPORTED_MODULE_1__.fitScene),
/* harmony export */   "changeBackground": () => (/* reexport safe */ _changeBackground__WEBPACK_IMPORTED_MODULE_2__.changeBackground),
/* harmony export */   "pickObject": () => (/* reexport safe */ _pick__WEBPACK_IMPORTED_MODULE_3__.pickObject),
/* harmony export */   "zoomToIntersection": () => (/* reexport safe */ _zoom__WEBPACK_IMPORTED_MODULE_4__.zoomToIntersection),
/* harmony export */   "zoomToModel": () => (/* reexport safe */ _zoom__WEBPACK_IMPORTED_MODULE_4__.zoomToModel),
/* harmony export */   "createDefaultLights": () => (/* reexport safe */ _createDefaultLights__WEBPACK_IMPORTED_MODULE_5__.createDefaultLights),
/* harmony export */   "NavigationCubeParameters": () => (/* reexport safe */ _createNavigationCube__WEBPACK_IMPORTED_MODULE_6__.NavigationCubeParameters),
/* harmony export */   "installNavigationCube": () => (/* reexport safe */ _createNavigationCube__WEBPACK_IMPORTED_MODULE_6__.installNavigationCube),
/* harmony export */   "GridHeplerParameters": () => (/* reexport safe */ _createGridHelper__WEBPACK_IMPORTED_MODULE_7__.GridHeplerParameters),
/* harmony export */   "GridTextParameters": () => (/* reexport safe */ _createGridHelper__WEBPACK_IMPORTED_MODULE_7__.GridTextParameters),
/* harmony export */   "createGridHelper": () => (/* reexport safe */ _createGridHelper__WEBPACK_IMPORTED_MODULE_7__.createGridHelper),
/* harmony export */   "createTextSprite": () => (/* reexport safe */ _createTextSprite__WEBPACK_IMPORTED_MODULE_8__.createTextSprite),
/* harmony export */   "createCircleSprite": () => (/* reexport safe */ _createCircleSprite__WEBPACK_IMPORTED_MODULE_9__.createCircleSprite)
/* harmony export */ });
/* harmony import */ var _changeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeView */ "./lib/commands/changeView.ts");
/* harmony import */ var _fitScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fitScene */ "./lib/commands/fitScene.ts");
/* harmony import */ var _changeBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeBackground */ "./lib/commands/changeBackground.ts");
/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pick */ "./lib/commands/pick.ts");
/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom */ "./lib/commands/zoom.ts");
/* harmony import */ var _createDefaultLights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createDefaultLights */ "./lib/commands/createDefaultLights.ts");
/* harmony import */ var _createNavigationCube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createNavigationCube */ "./lib/commands/createNavigationCube.ts");
/* harmony import */ var _createGridHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createGridHelper */ "./lib/commands/createGridHelper.ts");
/* harmony import */ var _createTextSprite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTextSprite */ "./lib/commands/createTextSprite.ts");
/* harmony import */ var _createCircleSprite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createCircleSprite */ "./lib/commands/createCircleSprite.ts");













/***/ }),

/***/ "./lib/commands/pick.ts":
/*!******************************!*\
  !*** ./lib/commands/pick.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickObject": () => (/* binding */ pickObject)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Try to pick an object
 * @category Commands
 */
function pickObject({ event, scene, camera }) {
    const raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
    const mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    raycaster.setFromCamera(mouse, camera);
    let intersectedObjects = raycaster.intersectObjects(scene.children, true /* recursive */);
    intersectedObjects = intersectedObjects.filter((value) => {
        if (value.object.pickable === undefined)
            return true;
        return value.object.pickable;
    });
    if (intersectedObjects.length) {
        return intersectedObjects[0]; // contains at least {object, point, distance}
    }
    return undefined;
}


/***/ }),

/***/ "./lib/commands/zoom.ts":
/*!******************************!*\
  !*** ./lib/commands/zoom.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zoomToModel": () => (/* binding */ zoomToModel),
/* harmony export */   "zoomToIntersection": () => (/* binding */ zoomToIntersection)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animationLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animationLoop */ "./lib/animationLoop.ts");
/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pick */ "./lib/commands/pick.ts");



/**
 * Center and fit the scene using animation
 * @category Commands
 */
function zoomToModel({ scene, camera, controls, duration = 300 }) {
    const box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(scene);
    const center = box.getCenter(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());
    const size = box.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());
    const maxSize = Math.max(size.x, size.y, size.z);
    const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera["fov"]) / 360));
    const fitWidthDistance = fitHeightDistance / camera["aspect"];
    const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);
    const direction = controls.target
        .clone()
        .sub(camera.position)
        .normalize()
        .multiplyScalar(distance);
    const beginTarget = controls.target.clone();
    const endTarget = center;
    const beginCamera = controls.object.position.clone();
    const endCamera = controls.target.clone().sub(direction);
    (0,_animationLoop__WEBPACK_IMPORTED_MODULE_1__.animate)({
        cb: (t) => {
            controls.object.position.copy((new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).lerpVectors(beginCamera, endCamera, t));
            controls.target.copy((new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).lerpVectors(beginTarget, endTarget, t));
        },
        nb: 20,
        time: duration
    });
}
/**
 * Zoom to the intersected point with animation (duration).
 * If nothing is picked, the model is centered and unzoom until fitting
 * the whole scene
 * @category Commands
 */
function zoomToIntersection({ event, scene, camera, controls, zoomFactor = 0.5, duration = 300 }) {
    const I = (0,_pick__WEBPACK_IMPORTED_MODULE_2__.pickObject)({ event, scene, camera });
    if (I === undefined) {
        zoomToModel({ scene, camera, controls });
        return;
    }
    const beginCamera = controls.object.position.clone();
    const endCamera = I.point.clone().add(beginCamera).multiplyScalar(zoomFactor);
    const beginTarget = controls.target.clone();
    const endTarget = I.point.clone();
    (0,_animationLoop__WEBPACK_IMPORTED_MODULE_1__.animate)({
        cb: (t) => {
            controls.object.position.copy((new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).lerpVectors(beginCamera, endCamera, t));
            controls.target.copy((new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).lerpVectors(beginTarget, endTarget, t));
        },
        nb: 20,
        time: duration
    });
}


/***/ }),

/***/ "./lib/hasMethod.ts":
/*!**************************!*\
  !*** ./lib/hasMethod.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasMethod": () => (/* binding */ hasMethod)
/* harmony export */ });
/**
 * @category Utils
 */
function hasMethod(object, method) {
    return Object.getOwnPropertyDescriptor(Object.getPrototypeOf(object), method) !== undefined;
}


/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationLoop": () => (/* reexport safe */ _animationLoop__WEBPACK_IMPORTED_MODULE_0__.AnimationLoop),
/* harmony export */   "animate": () => (/* reexport safe */ _animationLoop__WEBPACK_IMPORTED_MODULE_0__.animate),
/* harmony export */   "GridHeplerParameters": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.GridHeplerParameters),
/* harmony export */   "GridTextParameters": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.GridTextParameters),
/* harmony export */   "NavigationCubeParameters": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.NavigationCubeParameters),
/* harmony export */   "changeBackground": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.changeBackground),
/* harmony export */   "changeView": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.changeView),
/* harmony export */   "createCircleSprite": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.createCircleSprite),
/* harmony export */   "createDefaultLights": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.createDefaultLights),
/* harmony export */   "createGridHelper": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.createGridHelper),
/* harmony export */   "createTextSprite": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.createTextSprite),
/* harmony export */   "fitScene": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.fitScene),
/* harmony export */   "installNavigationCube": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.installNavigationCube),
/* harmony export */   "pickObject": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.pickObject),
/* harmony export */   "zoomToIntersection": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.zoomToIntersection),
/* harmony export */   "zoomToModel": () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_1__.zoomToModel),
/* harmony export */   "hasMethod": () => (/* reexport safe */ _hasMethod__WEBPACK_IMPORTED_MODULE_2__.hasMethod),
/* harmony export */   "KeyModifier": () => (/* reexport safe */ _keyboard__WEBPACK_IMPORTED_MODULE_3__.KeyModifier),
/* harmony export */   "Keyboard": () => (/* reexport safe */ _keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard),
/* harmony export */   "Mouse": () => (/* reexport safe */ _mouse__WEBPACK_IMPORTED_MODULE_4__.Mouse),
/* harmony export */   "RenderFunctions": () => (/* reexport safe */ _renderFunctions__WEBPACK_IMPORTED_MODULE_5__.RenderFunctions)
/* harmony export */ });
/* harmony import */ var _animationLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationLoop */ "./lib/animationLoop.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ "./lib/commands/index.ts");
/* harmony import */ var _hasMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasMethod */ "./lib/hasMethod.ts");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ "./lib/keyboard.ts");
/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse */ "./lib/mouse.ts");
/* harmony import */ var _renderFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderFunctions */ "./lib/renderFunctions.ts");
/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Control */ "./lib/Control.ts");
//export * from './TrackballControls'









/***/ }),

/***/ "./lib/keyboard.ts":
/*!*************************!*\
  !*** ./lib/keyboard.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyModifier": () => (/* binding */ KeyModifier),
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard)
/* harmony export */ });
var KeyModifier;
(function (KeyModifier) {
    KeyModifier[KeyModifier["ALT"] = 1] = "ALT";
    KeyModifier[KeyModifier["SHIFT"] = 2] = "SHIFT";
    KeyModifier[KeyModifier["CTRL"] = 4] = "CTRL";
    KeyModifier[KeyModifier["META"] = 8] = "META";
})(KeyModifier || (KeyModifier = {}));
/**
 * Install a keyboard to grab key down events. By default, the keyboard is installed
 * using the `document` if the `dom` is not provided
 * @example
 * ```ts
 * const keyboard = new threeExtra.Keyboard()
 * keyboard.addKey('u', e => threeExtra.changeView('up', controls) )
 * keyboard.addKey({key:'a', cb: e => console.log('Key a was pressed') })
 * keyboard.setUpEvent(e => console.log('Key released'))
 * ```
 *
 * Example of event type:
 * <ul>
 * <li> When the key is first pressed, the keydown event is sent.
 * <li> If the key is not a modifier key, the keypress event is sent.
 * <li> When the user releases the key, the keyup event is sent.
 * </ul>
 *
 * @category Utils
 */
class Keyboard {
    constructor(dom, type = 'keydown') {
        this.dom = dom;
        this.type = type;
        this.proceed = (event) => {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            const modifiers = event.altKey * KeyModifier.ALT |
                event.shiftKey * KeyModifier.SHIFT |
                event.ctrlKey * KeyModifier.CTRL |
                event.metaKey * KeyModifier.META;
            this.map.forEach(b => {
                if (b.key === event.key && modifiers === b.modifiers) {
                    b.cb(event);
                }
            });
        };
        this.map = [];
        this.upCB = undefined;
        if (dom === undefined)
            this.dom = document;
        this.dom.addEventListener(type, this.proceed);
    }
    setUpEvent(cb) {
        this.upCB = cb;
        this.dom.addEventListener('keyup', this.upCB);
    }
    /**
     * Add a new key-binding
     * @param key The key
     * @param cb The corresponding callback to call when the key is pressed
     * @param modifier The key modifier(s)
     * @example
     * ```ts
     * const keyboard = new extra.Keyboard(document, 'keydown')
     * keyboard.addKey({key:'a', cb: e => console.log('Key a was pressed') })
     * keyboard.addKey({key:'b', cb: e => console.log('Key b was pressed') })
     * keyboard.setUpEvent(e => console.log('Key released'))
     * ```
     */
    addKey({ key, cb, modifiers = 0 }) {
        this.map.push({ key, cb, modifiers });
    }
    /**
     * Remove the underlaying listener from the dom
     */
    destroy() {
        this.dom.removeEventListener(this.type, this.proceed);
        if (this.upCB)
            this.dom.removeEventListener('keyup', this.upCB);
    }
}


/***/ }),

/***/ "./lib/mouse.ts":
/*!**********************!*\
  !*** ./lib/mouse.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mouse": () => (/* binding */ Mouse)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

// TO BE FINISHED
class Mouse {
    constructor(canvas, installTouch = false) {
        this.canvas = canvas;
        this.setPickPosition = (event) => {
            const pos = this.getCanvasRelativePosition(event);
            this.pickPosition.x = (pos.x / this.canvas.width) * 2 - 1;
            this.pickPosition.y = (pos.y / this.canvas.height) * -2 + 1; // note we flip Y
        };
        this.clearPickPosition = () => {
            // unlike the mouse which always has a position
            // if the user stops touching the screen we want
            // to stop picking. For now we just pick a value
            // unlikely to pick something
            this.pickPosition.x = -100000;
            this.pickPosition.y = -100000;
        };
        this.getCanvasRelativePosition = (event) => {
            const rect = this.canvas.getBoundingClientRect();
            return {
                x: (event.clientX - rect.left) * this.canvas.width / rect.width,
                y: (event.clientY - rect.top) * this.canvas.height / rect.height,
            };
        };
        this.pickPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3;
        window.addEventListener('mousemove', this.setPickPosition);
        window.addEventListener('mouseout', this.clearPickPosition);
        window.addEventListener('mouseleave', this.clearPickPosition);
        window.addEventListener('touchstart', (event) => {
            // prevent the window from scrolling
            event.preventDefault();
            this.setPickPosition(event.touches[0]);
        }, { passive: false });
        window.addEventListener('touchmove', (event) => {
            this.setPickPosition(event.touches[0]);
        });
        window.addEventListener('touchend', this.clearPickPosition);
    }
    destroy() {
        // TODO: remove listener
    }
}


/***/ }),

/***/ "./lib/renderFunctions.ts":
/*!********************************!*\
  !*** ./lib/renderFunctions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderFunctions": () => (/* binding */ RenderFunctions)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Used to gather all rendering/upfating functions in the `requestAnimationFrame`
 * @example
 * ```
 * const renderFct = new kepler.RenderFunctions({renderer, scene, camera})
 * renderFct.add( controls.update )
 * renderFct.add( myCtrl.update )
 * renderFct.add( muSkin.update )
 *
 * function animate() {
 *   renderFct.render()
 *   requestAnimationFrame( animate )
 * }
 * requestAnimationFrame( animate )
 * ```
 * @see [[NavigationCubeParameters]]
 * @see [[RenderFunction]]
 * @category Utils
 */
class RenderFunctions {
    constructor({ renderer, scene, camera }) {
        this.render = () => {
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);
            this.stack.forEach(item => item.renderFct(this.renderer));
            this.renderer.clearDepth();
        };
        this.stack = [];
        this.renderer = undefined;
        this.camera = undefined;
        this.scene = undefined;
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
    }
    add(render) {
        const uuid = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.generateUUID();
        this.stack.push({ uuid, renderFct: render });
        return uuid;
    }
    remove(uuid) {
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i].uuid === uuid) {
                this.stack.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}


/***/ }),

/***/ "three":
/*!************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","root":"THREE"} ***!
  \************************************************************************/
/***/ ((module) => {

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
/* harmony export */   "AnimationLoop": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AnimationLoop),
/* harmony export */   "GridHeplerParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GridHeplerParameters),
/* harmony export */   "GridTextParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GridTextParameters),
/* harmony export */   "KeyModifier": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.KeyModifier),
/* harmony export */   "Keyboard": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Keyboard),
/* harmony export */   "Mouse": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Mouse),
/* harmony export */   "NavigationCubeParameters": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.NavigationCubeParameters),
/* harmony export */   "RenderFunctions": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RenderFunctions),
/* harmony export */   "animate": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.animate),
/* harmony export */   "changeBackground": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.changeBackground),
/* harmony export */   "changeView": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.changeView),
/* harmony export */   "createCircleSprite": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createCircleSprite),
/* harmony export */   "createDefaultLights": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createDefaultLights),
/* harmony export */   "createGridHelper": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createGridHelper),
/* harmony export */   "createTextSprite": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createTextSprite),
/* harmony export */   "fitScene": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.fitScene),
/* harmony export */   "hasMethod": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.hasMethod),
/* harmony export */   "installNavigationCube": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.installNavigationCube),
/* harmony export */   "pickObject": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.pickObject),
/* harmony export */   "zoomToIntersection": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.zoomToIntersection),
/* harmony export */   "zoomToModel": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.zoomToModel)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./lib/index.ts");
/*
 * Public API Surface of @youwol/three-extra
 */


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=three-extra.js.map