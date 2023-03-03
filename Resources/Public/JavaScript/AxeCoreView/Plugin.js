/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var manifest_1 = tslib_1.__importDefault(__webpack_require__(/*! ./manifest */ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"));
var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1["default"](manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
exports["default"] = createConsumerApi;
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var createConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"));
exports.createConsumerApi = createConsumerApi_1["default"];
var readFromConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"));
exports.readFromConsumerApi = readFromConsumerApi_1["default"];
var index_1 = __webpack_require__(/*! ./registry/index */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");
exports.SynchronousRegistry = index_1.SynchronousRegistry;
exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry;
exports["default"] = readFromConsumerApi_1["default"]('manifest');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function (manifests) {
    return function (identifier, options, bootstrap) {
        var _a;
        manifests.push((_a = {}, _a[identifier] = {
            options: options,
            bootstrap: bootstrap
        }, _a));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
function readFromConsumerApi(key) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']["@" + key]) {
            return (_a = window['@Neos:HostPluginAPI'])["@" + key].apply(_a, tslib_1.__spread(args));
        }
        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
}
exports["default"] = readFromConsumerApi;
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var AbstractRegistry = function () {
    function AbstractRegistry(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
    return AbstractRegistry;
}();
exports["default"] = AbstractRegistry;
//# sourceMappingURL=AbstractRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
var SynchronousMetaRegistry = function (_super) {
    tslib_1.__extends(SynchronousMetaRegistry, _super);
    function SynchronousMetaRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousMetaRegistry.prototype.set = function (key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return _super.prototype.set.call(this, key, value);
    };
    return SynchronousMetaRegistry;
}(SynchronousRegistry_1["default"]);
exports["default"] = SynchronousMetaRegistry;
//# sourceMappingURL=SynchronousMetaRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var AbstractRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AbstractRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"));
var positional_array_sorter_1 = tslib_1.__importDefault(__webpack_require__(/*! @neos-project/positional-array-sorter */ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"));
var SynchronousRegistry = function (_super) {
    tslib_1.__extends(SynchronousRegistry, _super);
    function SynchronousRegistry(description) {
        var _this = _super.call(this, description) || this;
        _this._registry = [];
        return _this;
    }
    SynchronousRegistry.prototype.set = function (key, value, position) {
        if (position === void 0) {
            position = 0;
        }
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    };
    SynchronousRegistry.prototype.get = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    };
    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return positional_array_sorter_1["default"](unsortedChildren);
    };
    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getChildren = function (searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    };
    SynchronousRegistry.prototype.has = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    };
    SynchronousRegistry.prototype._getAllWrapped = function () {
        return positional_array_sorter_1["default"](this._registry);
    };
    SynchronousRegistry.prototype.getAllAsObject = function () {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getAllAsList = function () {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    };
    return SynchronousRegistry;
}(AbstractRegistry_1["default"]);
exports["default"] = SynchronousRegistry;
//# sourceMappingURL=SynchronousRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
exports.SynchronousRegistry = SynchronousRegistry_1["default"];
var SynchronousMetaRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousMetaRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"));
exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/classnames/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/classnames/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().classnames;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-dom/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-dom/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().ReactDOM;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/redux-saga-effects/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/redux-saga-effects/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reduxSagaEffects;

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
    if (position === void 0) {
        position = 'position';
    }
    if (idKey === void 0) {
        idKey = 'key';
    }
    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var indexMapping = {};
    var middleKeys = {};
    var startKeys = {};
    var endKeys = {};
    var beforeKeys = {};
    var afterKeys = {};
    subject.forEach(function (item, index) {
        var key = item[idKey] ? item[idKey] : String(index);
        indexMapping[key] = index;
        var positionValue = positionAccessor(item);
        var position = String(positionValue ? positionValue : index);
        var invalid = false;
        if (position.startsWith('start')) {
            var weightMatch = position.match(/start\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!startKeys[weight]) {
                startKeys[weight] = [];
            }
            startKeys[weight].push(key);
        } else if (position.startsWith('end')) {
            var weightMatch = position.match(/end\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!endKeys[weight]) {
                endKeys[weight] = [];
            }
            endKeys[weight].push(key);
        } else if (position.startsWith('before')) {
            var match = position.match(/before\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!beforeKeys[reference]) {
                    beforeKeys[reference] = {};
                }
                if (!beforeKeys[reference][weight]) {
                    beforeKeys[reference][weight] = [];
                }
                beforeKeys[reference][weight].push(key);
            }
        } else if (position.startsWith('after')) {
            var match = position.match(/after\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!afterKeys[reference]) {
                    afterKeys[reference] = {};
                }
                if (!afterKeys[reference][weight]) {
                    afterKeys[reference][weight] = [];
                }
                afterKeys[reference][weight].push(key);
            }
        } else {
            invalid = true;
        }
        if (invalid) {
            var numberPosition = parseFloat(position);
            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                numberPosition = index;
            }
            if (!middleKeys[numberPosition]) {
                middleKeys[numberPosition] = [];
            }
            middleKeys[numberPosition].push(key);
        }
    });
    var resultStart = [];
    var resultMiddle = [];
    var resultEnd = [];
    var processedKeys = [];
    var sortedWeights = function sortedWeights(dict, asc) {
        var weights = Object.keys(dict).map(function (x) {
            return Number(x);
        }).sort(function (a, b) {
            return a - b;
        });
        return asc ? weights : weights.reverse();
    };
    var addToResults = function addToResults(keys, result) {
        keys.forEach(function (key) {
            var e_8, _a, e_9, _b;
            if (processedKeys.indexOf(key) >= 0) {
                return;
            }
            processedKeys.push(key);
            if (beforeKeys[key]) {
                var beforeWeights = sortedWeights(beforeKeys[key], true);
                try {
                    for (var beforeWeights_1 = tslib_1.__values(beforeWeights), beforeWeights_1_1 = beforeWeights_1.next(); !beforeWeights_1_1.done; beforeWeights_1_1 = beforeWeights_1.next()) {
                        var i = beforeWeights_1_1.value;
                        addToResults(beforeKeys[key][i], result);
                    }
                } catch (e_8_1) {
                    e_8 = { error: e_8_1 };
                } finally {
                    try {
                        if (beforeWeights_1_1 && !beforeWeights_1_1.done && (_a = beforeWeights_1["return"])) _a.call(beforeWeights_1);
                    } finally {
                        if (e_8) throw e_8.error;
                    }
                }
            }
            result.push(key);
            if (afterKeys[key]) {
                var afterWeights = sortedWeights(afterKeys[key], false);
                try {
                    for (var afterWeights_1 = tslib_1.__values(afterWeights), afterWeights_1_1 = afterWeights_1.next(); !afterWeights_1_1.done; afterWeights_1_1 = afterWeights_1.next()) {
                        var i = afterWeights_1_1.value;
                        addToResults(afterKeys[key][i], result);
                    }
                } catch (e_9_1) {
                    e_9 = { error: e_9_1 };
                } finally {
                    try {
                        if (afterWeights_1_1 && !afterWeights_1_1.done && (_b = afterWeights_1["return"])) _b.call(afterWeights_1);
                    } finally {
                        if (e_9) throw e_9.error;
                    }
                }
            }
        });
    };
    try {
        for (var _h = tslib_1.__values(sortedWeights(startKeys, false)), _j = _h.next(); !_j.done; _j = _h.next()) {
            var i = _j.value;
            addToResults(startKeys[i], resultStart);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (_j && !_j.done && (_a = _h["return"])) _a.call(_h);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    try {
        for (var _k = tslib_1.__values(sortedWeights(middleKeys, true)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var i = _l.value;
            addToResults(middleKeys[i], resultMiddle);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_l && !_l.done && (_b = _k["return"])) _b.call(_k);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
    try {
        for (var _m = tslib_1.__values(sortedWeights(endKeys, true)), _o = _m.next(); !_o.done; _o = _m.next()) {
            var i = _o.value;
            addToResults(endKeys[i], resultEnd);
        }
    } catch (e_3_1) {
        e_3 = { error: e_3_1 };
    } finally {
        try {
            if (_o && !_o.done && (_c = _m["return"])) _c.call(_m);
        } finally {
            if (e_3) throw e_3.error;
        }
    }
    try {
        for (var _p = tslib_1.__values(Object.keys(beforeKeys)), _q = _p.next(); !_q.done; _q = _p.next()) {
            var key = _q.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _r = (e_5 = void 0, tslib_1.__values(sortedWeights(beforeKeys[key], false))), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var i = _s.value;
                    addToResults(beforeKeys[key][i], resultStart);
                }
            } catch (e_5_1) {
                e_5 = { error: e_5_1 };
            } finally {
                try {
                    if (_s && !_s.done && (_e = _r["return"])) _e.call(_r);
                } finally {
                    if (e_5) throw e_5.error;
                }
            }
        }
    } catch (e_4_1) {
        e_4 = { error: e_4_1 };
    } finally {
        try {
            if (_q && !_q.done && (_d = _p["return"])) _d.call(_p);
        } finally {
            if (e_4) throw e_4.error;
        }
    }
    try {
        for (var _t = tslib_1.__values(Object.keys(afterKeys)), _u = _t.next(); !_u.done; _u = _t.next()) {
            var key = _u.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _v = (e_7 = void 0, tslib_1.__values(sortedWeights(afterKeys[key], false))), _w = _v.next(); !_w.done; _w = _v.next()) {
                    var i = _w.value;
                    addToResults(afterKeys[key][i], resultMiddle);
                }
            } catch (e_7_1) {
                e_7 = { error: e_7_1 };
            } finally {
                try {
                    if (_w && !_w.done && (_g = _v["return"])) _g.call(_v);
                } finally {
                    if (e_7) throw e_7.error;
                }
            }
        }
    } catch (e_6_1) {
        e_6 = { error: e_6_1 };
    } finally {
        try {
            if (_u && !_u.done && (_f = _t["return"])) _f.call(_t);
        } finally {
            if (e_6) throw e_6.error;
        }
    }
    var sortedKeys = tslib_1.__spread(resultStart, resultMiddle, resultEnd);
    return sortedKeys.map(function (key) {
        return indexMapping[key];
    }).map(function (i) {
        return subject[i];
    });
};
exports["default"] = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-popout/dist/react-popout.min.js":
/*!************************************************************!*\
  !*** ./node_modules/react-popout/dist/react-popout.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"),__webpack_require__(/*! react-dom */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-dom/index.js"));else { var r, n; }}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?y=d.concat(y):h=-1,y.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=y.length;t;){for(d=y,y=[];++h<t;)d&&d[h].run();h=-1,t=y.length}d=null,m=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,y=[],m=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||m||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){"production"===t.env.NODE_ENV?e.exports=n(8):e.exports=n(9)}).call(t,n(0))},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),s=r(c),f=n(6),l=r(f),p=n(7),d=r(p),y={toolbar:"no",location:"no",directories:"no",status:"no",menubar:"no",scrollbars:"yes",resizable:"yes",width:500,height:400,top:function(e,t){return(t.innerHeight-e.height)/2+t.screenY},left:function(e,t){return(t.innerWidth-e.width)/2+t.screenX}},m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.mainWindowClosed=n.mainWindowClosed.bind(n),n.popoutWindowUnloading=n.popoutWindowUnloading.bind(n),n.popoutWindowLoaded=n.popoutWindowLoaded.bind(n),n.state={openedWindowComponent:null,popoutWindow:null,container:null},n}return a(t,e),u(t,[{key:"createOptions",value:function(e){var t=this,n=Object.assign({},y,this.props.options);return Object.keys(n).map(function(r){return r+"="+("function"==typeof n[r]?n[r].call(t,n,e):n[r])}).join(",")}},{key:"componentDidMount",value:function(){var e=this.props.window||window;e&&(this.openPopoutWindow(e),e.addEventListener("unload",this.mainWindowClosed))}},{key:"componentWillReceiveProps",value:function(e){e.title!==this.props.title&&this.state.popoutWindow&&(this.state.popoutWindow.document.title=e.title)}},{key:"componentDidUpdate",value:function(){this.renderToContainer(this.state.container,this.state.popoutWindow,this.props.children)}},{key:"componentWillUnmount",value:function(){this.mainWindowClosed()}},{key:"popoutWindowLoaded",value:function(e){if(!this.state.container){e=this.state.popoutWindow||e,e.document.title=this.props.title;var t=e.document.createElement("div");t.id=this.props.containerId,e.document.body.appendChild(t),this.setState({container:t}),this.renderToContainer(t,e,this.props.children)}}},{key:"openPopoutWindow",value:function(e){var t=e.open(this.props.url,this.props.name||this.props.title,this.createOptions(e));if(!t)return void this.props.onError();this.setState({popoutWindow:t}),t.addEventListener("load",this.popoutWindowLoaded),t.addEventListener("unload",this.popoutWindowUnloading),"about:blank"===this.props.url?"complete"===t.document.readyState&&this.popoutWindowLoaded(t):this.checkForPopoutWindowClosure(t)}},{key:"closeWindow",value:function(){this.mainWindowClosed()}},{key:"checkForPopoutWindowClosure",value:function(e){var t=this;this.interval=setInterval(function(){e.closed&&(clearInterval(t.interval),t.props.onClosing&&t.props.onClosing())},500)}},{key:"mainWindowClosed",value:function(){this.state.popoutWindow&&this.state.popoutWindow.close(),(this.props.window||window).removeEventListener("unload",this.mainWindowClosed)}},{key:"popoutWindowUnloading",value:function(){this.state.container&&(clearInterval(this.interval),l.default.unmountComponentAtNode(this.state.container),this.props.onClosing&&this.props.onClosing())}},{key:"renderToContainer",value:function(e,t,n){if(e){var r=n;"function"==typeof n&&(r=n(t)),l.default.render(r,e)}}},{key:"render",value:function(){return null}}]),t}(s.default.Component);m.defaultProps={url:"about:blank",containerId:"popout-content-container",onError:function(){}},m.propTypes={title:d.default.string.isRequired,url:d.default.string,onClosing:d.default.func,options:d.default.object,window:d.default.object,containerId:d.default.string,children:d.default.oneOfType([d.default.element,d.default.func]),onError:d.default.func},t.default=m},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r=n(2);e.exports=n(10)(r.isElement,!0)}else e.exports=n(13)()}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case d:case y:case c:case f:case s:case h:return e;default:switch(e=e&&e.$$typeof){case p:case m:case w:case b:case l:return e;default:return t}}case u:return t}}}function o(e){return r(e)===y}/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,u=i?Symbol.for("react.portal"):60106,c=i?Symbol.for("react.fragment"):60107,s=i?Symbol.for("react.strict_mode"):60108,f=i?Symbol.for("react.profiler"):60114,l=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.async_mode"):60111,y=i?Symbol.for("react.concurrent_mode"):60111,m=i?Symbol.for("react.forward_ref"):60112,h=i?Symbol.for("react.suspense"):60113,v=i?Symbol.for("react.suspense_list"):60120,b=i?Symbol.for("react.memo"):60115,w=i?Symbol.for("react.lazy"):60116,g=i?Symbol.for("react.block"):60121,O=i?Symbol.for("react.fundamental"):60117,S=i?Symbol.for("react.responder"):60118,E=i?Symbol.for("react.scope"):60119;t.AsyncMode=d,t.ConcurrentMode=y,t.ContextConsumer=p,t.ContextProvider=l,t.Element=a,t.ForwardRef=m,t.Fragment=c,t.Lazy=w,t.Memo=b,t.Portal=u,t.Profiler=f,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return o(e)||r(e)===d},t.isConcurrentMode=o,t.isContextConsumer=function(e){return r(e)===p},t.isContextProvider=function(e){return r(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return r(e)===m},t.isFragment=function(e){return r(e)===c},t.isLazy=function(e){return r(e)===w},t.isMemo=function(e){return r(e)===b},t.isPortal=function(e){return r(e)===u},t.isProfiler=function(e){return r(e)===f},t.isStrictMode=function(e){return r(e)===s},t.isSuspense=function(e){return r(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===f||e===s||e===h||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===w||e.$$typeof===b||e.$$typeof===l||e.$$typeof===p||e.$$typeof===m||e.$$typeof===O||e.$$typeof===S||e.$$typeof===E||e.$$typeof===g)},t.typeOf=r},function(e,t,n){"use strict";(function(e){/** @license React v16.13.1
 * react-is.development.js
 *
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"production"!==e.env.NODE_ENV&&function(){function e(e){return"string"==typeof e||"function"==typeof e||e===w||e===x||e===O||e===g||e===C||e===P||"object"==typeof e&&null!==e&&(e.$$typeof===k||e.$$typeof===$||e.$$typeof===S||e.$$typeof===E||e.$$typeof===T||e.$$typeof===W||e.$$typeof===I||e.$$typeof===N||e.$$typeof===_)}function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case v:var n=e.type;switch(n){case j:case x:case w:case O:case g:case C:return n;default:var r=n&&n.$$typeof;switch(r){case E:case T:case k:case $:case S:return r;default:return t}}case b:return t}}}function r(e){return H||(H=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(e)||n(e)===j}function o(e){return n(e)===x}function i(e){return n(e)===E}function a(e){return n(e)===S}function u(e){return"object"==typeof e&&null!==e&&e.$$typeof===v}function c(e){return n(e)===T}function s(e){return n(e)===w}function f(e){return n(e)===k}function l(e){return n(e)===$}function p(e){return n(e)===b}function d(e){return n(e)===O}function y(e){return n(e)===g}function m(e){return n(e)===C}var h="function"==typeof Symbol&&Symbol.for,v=h?Symbol.for("react.element"):60103,b=h?Symbol.for("react.portal"):60106,w=h?Symbol.for("react.fragment"):60107,g=h?Symbol.for("react.strict_mode"):60108,O=h?Symbol.for("react.profiler"):60114,S=h?Symbol.for("react.provider"):60109,E=h?Symbol.for("react.context"):60110,j=h?Symbol.for("react.async_mode"):60111,x=h?Symbol.for("react.concurrent_mode"):60111,T=h?Symbol.for("react.forward_ref"):60112,C=h?Symbol.for("react.suspense"):60113,P=h?Symbol.for("react.suspense_list"):60120,$=h?Symbol.for("react.memo"):60115,k=h?Symbol.for("react.lazy"):60116,_=h?Symbol.for("react.block"):60121,W=h?Symbol.for("react.fundamental"):60117,I=h?Symbol.for("react.responder"):60118,N=h?Symbol.for("react.scope"):60119,R=j,M=x,A=E,L=S,V=v,D=T,F=w,q=k,U=$,z=b,Y=O,J=g,B=C,H=!1;t.AsyncMode=R,t.ConcurrentMode=M,t.ContextConsumer=A,t.ContextProvider=L,t.Element=V,t.ForwardRef=D,t.Fragment=F,t.Lazy=q,t.Memo=U,t.Portal=z,t.Profiler=Y,t.StrictMode=J,t.Suspense=B,t.isAsyncMode=r,t.isConcurrentMode=o,t.isContextConsumer=i,t.isContextProvider=a,t.isElement=u,t.isForwardRef=c,t.isFragment=s,t.isLazy=f,t.isMemo=l,t.isPortal=p,t.isProfiler=d,t.isStrictMode=y,t.isSuspense=m,t.isValidElementType=e,t.typeOf=n}()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(2),i=n(11),a=n(1),u=n(12),c=Function.call.bind(Object.prototype.hasOwnProperty),s=function(){};"production"!==t.env.NODE_ENV&&(s=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function f(e){var t=e&&(P&&e[P]||e[$]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function p(e){this.message=e,this.stack=""}function d(e){function r(r,u,c,f,l,d,y){if(f=f||k,d=d||c,y!==a){if(n){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var h=f+":"+c;!o[h]&&i<3&&(s("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[h]=!0,i++)}}return null==u[c]?r?new p(null===u[c]?"The "+l+" `"+d+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+l+" `"+d+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(u,c,f,l,d)}if("production"!==t.env.NODE_ENV)var o={},i=0;var u=r.bind(null,!1);return u.isRequired=r.bind(null,!0),u}function y(e){function t(t,n,r,o,i,a){var u=t[n];if(j(u)!==e)return new p("Invalid "+o+" `"+i+"` of type `"+x(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return d(t)}function m(e){function t(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new p("Invalid "+o+" `"+i+"` of type `"+j(u)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<u.length;c++){var s=e(u,c,r,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}return d(t)}function h(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||k;return new p("Invalid "+o+" `"+i+"` of type `"+C(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return d(t)}function v(e){function n(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(l(a,e[u]))return null;var c=JSON.stringify(e,function(e,t){return"symbol"===x(t)?String(t):t});return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")}return Array.isArray(e)?d(n):("production"!==t.env.NODE_ENV&&s(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)}function b(e){function t(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=j(u);if("object"!==s)return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var f in u)if(c(u,f)){var l=e(u,f,r,o,i+"."+f,a);if(l instanceof Error)return l}return null}return d(t)}function w(e){function n(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,a))return null}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&s("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var i=e[o];if("function"!=typeof i)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+T(i)+" at index "+o+"."),r}return d(n)}function g(e){function t(t,n,r,o,i){var u=t[n],c=j(u);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var l=f(u,s,r,o,i+"."+s,a);if(l)return l}}return null}return d(t)}function O(e){function t(t,n,r,o,u){var c=t[n],s=j(c);if("object"!==s)return new p("Invalid "+o+" `"+u+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var l in f){var d=e[l];if(!d)return new p("Invalid "+o+" `"+u+"` key `"+l+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(c,l,r,o,u+"."+l,a);if(y)return y}return null}return d(t)}function S(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(S);if(null===t||e(t))return!0;var n=f(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!S(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!S(i[1]))return!1}return!0;default:return!1}}function E(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function j(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":E(t,e)?"symbol":t}function x(e){if(void 0===e||null===e)return""+e;var t=j(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function T(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function C(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var P="function"==typeof Symbol&&Symbol.iterator,$="@@iterator",k="<<anonymous>>",_={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:function(){return d(r)}(),arrayOf:m,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new p("Invalid "+o+" `"+i+"` of type `"+j(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return d(t)}(),elementType:function(){function e(e,t,n,r,i){var a=e[t];if(!o.isValidElementType(a)){return new p("Invalid "+r+" `"+i+"` of type `"+j(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")}return null}return d(e)}(),instanceOf:h,node:function(){function e(e,t,n,r,o){return S(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:b,oneOf:v,oneOfType:w,shape:g,exact:O};return p.prototype=Error.prototype,_.checkPropTypes=u,_.resetWarningCache=u.resetWarningCache,_.PropTypes=_,_}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var f in n)i.call(n,f)&&(c[f]=n[f]);if(o){u=o(n);for(var l=0;l<u.length;l++)a.call(n,u[l])&&(c[u[l]]=n[u[l]])}}return c}},function(e,t,n){"use strict";(function(t){function r(e,n,r,c,s){if("production"!==t.env.NODE_ENV)for(var f in e)if(u(e,f)){var l;try{if("function"!=typeof e[f]){var p=Error((c||"React class")+": "+r+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.");throw p.name="Invariant Violation",p}l=e[f](n,f,c,r,null,i)}catch(e){l=e}if(!l||l instanceof Error||o((c||"React class")+": type specification of "+r+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var d=s?s():"";o("Failed "+r+" type: "+l.message+(null!=d?d:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(1),a={},u=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}r.resetWarningCache=function(){"production"!==t.env.NODE_ENV&&(a={})},e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";function r(){}function o(){}var i=n(1);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,a){if(a!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}}])});


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/AxeCorePopout.js":
/*!******************************!*\
  !*** ./src/AxeCorePopout.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopoutFeatureName = exports.AxeCorePopout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js");

var _reactPopout = __webpack_require__(/*! react-popout */ "./node_modules/react-popout/dist/react-popout.min.js");

var _reactPopout2 = _interopRequireDefault(_reactPopout);

var _neosUiReduxStore = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js");

var _state = __webpack_require__(/*! ./state */ "./src/state/index.ts");

var _view = __webpack_require__(/*! ./components/view */ "./src/components/view.tsx");

var _neosUiDecorators = __webpack_require__(/*! @neos-project/neos-ui-decorators */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js");

var _util = __webpack_require__(/*! ./util */ "./src/util.ts");

var _style = __webpack_require__(/*! ./components/style.css */ "./src/components/style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var popoutOptions = {
    menubar: 'no',
    location: 'no'
};

var Popout = function Popout(props) {
    var store = (0, _reactRedux.useStore)();
    var dispatch = (0, _reactRedux.useDispatch)();
    var currentlySelectedDocument = (0, _reactRedux.useSelector)(function (state) {
        return _neosUiReduxStore.selectors.CR.Nodes.documentNodeContextPathSelector(state);
    });
    var isPoppedOut = (0, _reactRedux.useSelector)(function (state) {
        return _state.selectors.isPoppedOut(state);
    });
    var popin = (0, _react.useCallback)(function () {
        return dispatch(_state.actions.popin());
    }, [dispatch]);
    var analyze = (0, _react.useCallback)(function () {
        return dispatch(_state.actions.analyze(currentlySelectedDocument));
    }, [dispatch, currentlySelectedDocument]);
    if (!isPoppedOut) {
        return null;
    }
    var title = props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.title', 'axe-core Results', [document.title]);
    return _react2.default.createElement(
        _reactPopout2.default,
        {
            title: title,
            onError: popin,
            onClosing: popin,
            options: _extends({
                height: Math.max(400, window.innerHeight * 0.8)
            }, popoutOptions)
        },
        _react2.default.createElement(
            'div',
            { className: _style2.default.popout },
            _react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                [].concat(_toConsumableArray(document.querySelectorAll('link[rel=stylesheet]'))).map(function (l, i) {
                    return _react2.default.createElement('link', { rel: 'stylesheet', href: l.href, key: i });
                }),
                _react2.default.createElement(_view.ViewContainer, {
                    i18nRegistry: props.i18nRegistry,
                    analyze: analyze,
                    featureEnabled: props.featureEnabled,
                    isPopout: true
                })
            )
        )
    );
};

var AxeCorePopout = exports.AxeCorePopout = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        i18nRegistry: globalRegistry.get('i18n'),
        frontendConfiguration: globalRegistry.get('frontendConfiguration')
    };
}), _dec(_class = function (_React$Component) {
    _inherits(AxeCorePopout, _React$Component);

    function AxeCorePopout() {
        _classCallCheck(this, AxeCorePopout);

        return _possibleConstructorReturn(this, (AxeCorePopout.__proto__ || Object.getPrototypeOf(AxeCorePopout)).apply(this, arguments));
    }

    _createClass(AxeCorePopout, [{
        key: 'render',
        value: function render() {
            var isFeatureEnabled = (0, _util.featureEnabled)(this.props.frontendConfiguration);
            return _react2.default.createElement(Popout, {
                i18nRegistry: this.props.i18nRegistry,
                featureEnabled: isFeatureEnabled
            });
        }
    }]);

    return AxeCorePopout;
}(_react2.default.Component)) || _class);
var PopoutFeatureName = exports.PopoutFeatureName = 'popout';

/***/ }),

/***/ "./src/AxeCoreView.js":
/*!****************************!*\
  !*** ./src/AxeCoreView.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js");

var _neosUiDecorators = __webpack_require__(/*! @neos-project/neos-ui-decorators */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js");

var _neosUiReduxStore = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js");

var _state = __webpack_require__(/*! ./state */ "./src/state/index.ts");

var _view = __webpack_require__(/*! ./components/view */ "./src/components/view.tsx");

var _util = __webpack_require__(/*! ./util */ "./src/util.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AxeCoreView = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        currentlySelectedDocument: _neosUiReduxStore.selectors.CR.Nodes.documentNodeContextPathSelector(state),
        currentReport: _state.selectors.getReport(state)(_neosUiReduxStore.selectors.CR.Nodes.documentNodeContextPathSelector(state)),
        isAnalyzing: _state.selectors.isAnalyzing(state),
        isPoppedOut: _state.selectors.isPoppedOut(state)
    };
}, {
    focusNode: _neosUiReduxStore.actions.CR.Nodes.focus,
    analyze: _state.actions.analyze,
    popout: _state.actions.popout,
    popin: _state.actions.popin
}), _dec2 = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        i18nRegistry: globalRegistry.get('i18n'),
        frontendConfiguration: globalRegistry.get('frontendConfiguration')
    };
}), _dec(_class = _dec2(_class = function (_Component) {
    _inherits(AxeCoreView, _Component);

    function AxeCoreView(props) {
        _classCallCheck(this, AxeCoreView);

        var _this = _possibleConstructorReturn(this, (AxeCoreView.__proto__ || Object.getPrototypeOf(AxeCoreView)).call(this, props));

        _this.analyze = _this.analyze.bind(_this);
        return _this;
    }

    _createClass(AxeCoreView, [{
        key: 'analyze',
        value: function analyze() {
            this.props.analyze(this.props.currentlySelectedDocument);
        }
    }, {
        key: 'render',
        value: function render() {
            var isFeatureEnabled = (0, _util.featureEnabled)(this.props.frontendConfiguration);
            return _react2.default.createElement(_view.ViewContainer, {
                i18nRegistry: this.props.i18nRegistry,
                featureEnabled: isFeatureEnabled,
                analyze: this.analyze
            });
        }
    }]);

    return AxeCoreView;
}(_react.Component)) || _class) || _class);
exports.default = AxeCoreView;

/***/ }),

/***/ "./src/components/export.tsx":
/*!***********************************!*\
  !*** ./src/components/export.tsx ***!
  \***********************************/
/*! exports provided: getFilenameFromTitle, ExportButton, ExportFeatureName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilenameFromTitle", function() { return getFilenameFromTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportButton", function() { return ExportButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportFeatureName", function() { return ExportFeatureName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neos-project/react-ui-components */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__);


const sanitizeFilename = (filename) => filename.replace(/[/\\?%*:|"<>]/g, '_')
    .replace(/_+/g, '_');
const getFilenameFromTitle = () => `axe-results-${(window.opener || window).document.title}.json`;
const download = (content, filename, contentType = 'application/json') => {
    const a = document.createElement('a');
    a.setAttribute('href', `data:${contentType};charset=utf-8,${encodeURIComponent(content)}`);
    a.setAttribute('download', sanitizeFilename(filename));
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
const ExportButton = props => {
    const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        download(JSON.stringify(props.results), props.filename || 'axe-results.json');
    }, [props.results, props.filename]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["Button"], { disabled: props.disabled || !props.results, onClick: handleClick }, props.label));
};
const ExportFeatureName = 'export';


/***/ }),

/***/ "./src/components/node-info.css":
/*!**************************************!*\
  !*** ./src/components/node-info.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"nodeInfoList":"node-info__nodeInfoList___16MeL","nodeInfoList__item":"node-info__nodeInfoList__item___2R5lh","nodeInfoList__title":"node-info__nodeInfoList__title___37lL7","nodeInfoList__content":"node-info__nodeInfoList__content___3Ku3a"};

/***/ }),

/***/ "./src/components/node-info.tsx":
/*!**************************************!*\
  !*** ./src/components/node-info.tsx ***!
  \**************************************/
/*! exports provided: NodeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeInfo", function() { return NodeInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neos-project/react-ui-components */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_info_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node-info.css */ "./src/components/node-info.css");
/* harmony import */ var _node_info_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_info_css__WEBPACK_IMPORTED_MODULE_2__);



const NodeInfoRow = props => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: _node_info_css__WEBPACK_IMPORTED_MODULE_2___default.a.nodeInfoList__item },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: _node_info_css__WEBPACK_IMPORTED_MODULE_2___default.a.nodeInfoList__title }, props.title),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _node_info_css__WEBPACK_IMPORTED_MODULE_2___default.a.nodeInfoList__content }, props.children)));
const NodeInfo = props => {
    var _a;
    const nodePath = props.contentElement
        ? props.contentElement.contextPath.split('@')[0]
        : null;
    const nodeName = nodePath === null || nodePath === void 0 ? void 0 : nodePath.split('/').pop();
    const nodeIsHighlighted = props.highlightedSelector === props.selector;
    const onHighlightElement = () => props.highlightNode(nodeIsHighlighted ? null : props.selector);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: _node_info_css__WEBPACK_IMPORTED_MODULE_2___default.a.nodeInfoList },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeInfoRow, { title: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.domSelector') },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, props.selector),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { icon: "crosshairs", "aria-label": props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.highlightNode'), onClick: onHighlightElement, "aria-pressed": nodeIsHighlighted ? 'true' : 'false', isPressed: nodeIsHighlighted })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeInfoRow, { title: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.html') },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", { className: "break" }, props.html)),
        ((_a = props.contentElement) === null || _a === void 0 ? void 0 : _a.fusionPrototype) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeInfoRow, { title: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.renderingPrototype') },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.contentElement.fusionPrototype))),
        nodePath && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeInfoRow, { title: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.neosNode') },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { title: nodePath }, nodeName),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { icon: "crosshairs", "aria-label": props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.selectNode'), onClick: () => props.focusNode(props.contentElement.contextPath, props.contentElement.fusionPath) })))));
};


/***/ }),

/***/ "./src/components/occurrence.tsx":
/*!***************************************!*\
  !*** ./src/components/occurrence.tsx ***!
  \***************************************/
/*! exports provided: Occurrence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Occurrence", function() { return Occurrence; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node-info */ "./src/components/node-info.tsx");



const Occurrence = props => {
    const counter = props.occurrenceCount > 1
        ? ` (${props.index + 1}/${props.occurrenceCount})`
        : '';
    let summaryTitle;
    let summaryTextItems;
    if (props.node.failureSummary) {
        if (props.node.failureSummary.includes('\n')) {
            const lines = props.node.failureSummary.split('\n');
            summaryTitle = lines[0];
            summaryTextItems = lines.slice(1).map(l => l.trim());
        }
        else {
            // sometimes the text is not separated by newlines, so we try breaking
            // on punctuation marks. however some languages my not use these..
            summaryTitle = props.node.failureSummary.split(':')[0] + ':';
            const summaryText = props.node.failureSummary.substr(summaryTitle.length);
            summaryTextItems = summaryText
                .split(/\.\s+/)
                .map((l, i, a) => a.length - 1 > i ? l + '.' : l);
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: _style_css__WEBPACK_IMPORTED_MODULE_1___default.a.occurrenceItem },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null,
            props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:occurrence.affectedElement', 'Affected Element'),
            counter),
        props.node.failureSummary && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: _style_css__WEBPACK_IMPORTED_MODULE_1___default.a.resultDescription },
            summaryTitle,
            summaryTextItems.length >= 1 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: _style_css__WEBPACK_IMPORTED_MODULE_1___default.a.occurrenceErrorList }, summaryTextItems.map((l, i) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: _style_css__WEBPACK_IMPORTED_MODULE_1___default.a.occurrenceErrorItem, key: i }, l))))))),
        props.node.target && props.node.target.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.node.target.map((selector, i) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_info__WEBPACK_IMPORTED_MODULE_2__["NodeInfo"], { key: i, selector: selector, html: props.node.html, contentElement: props.node.contentElement[i], focusNode: props.focusNode, highlightNode: props.highlightNode, highlightedSelector: props.highlightedSelector, i18nRegistry: props.i18nRegistry })))))));
};


/***/ }),

/***/ "./src/components/result-list.tsx":
/*!****************************************!*\
  !*** ./src/components/result-list.tsx ***!
  \****************************************/
/*! exports provided: ResultList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultList", function() { return ResultList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result */ "./src/components/result.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/util.ts");



const ResultList = props => {
    const sortedItems = Object(_util__WEBPACK_IMPORTED_MODULE_2__["sortByImpact"])(props.items);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, sortedItems.map((data, i) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result__WEBPACK_IMPORTED_MODULE_1__["Result"], { key: i, result: data, focusNode: props.focusNode, highlightNode: props.highlightNode, highlightedSelector: props.highlightedSelector, i18nRegistry: props.i18nRegistry })))));
};


/***/ }),

/***/ "./src/components/result-section.tsx":
/*!*******************************************!*\
  !*** ./src/components/result-section.tsx ***!
  \*******************************************/
/*! exports provided: ResultSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultSection", function() { return ResultSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neos-project/react-ui-components */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);



const ResultSection = props => {
    const [collapsed, setCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.collapsed === true);
    let iconColor = props.iconColor;
    let iconClass;
    if (props.iconColor === 'success') {
        iconColor = undefined;
        iconClass = 'style__icon--color-success';
    }
    const togglePanel = () => setCollapsed(v => !v);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["ToggablePanel"], { className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.resultSection, isOpen: !collapsed, onPanelToggle: togglePanel },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["ToggablePanel"].Header, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.iconWrapper },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], { icon: props.icon, className: iconClass, color: iconColor })),
            props.title),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["ToggablePanel"].Contents, null, props.children)));
};


/***/ }),

/***/ "./src/components/result.tsx":
/*!***********************************!*\
  !*** ./src/components/result.tsx ***!
  \***********************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neos-project/react-ui-components */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _occurrence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./occurrence */ "./src/components/occurrence.tsx");





const Result = props => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.resultItem },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], { title: props.result.impact, icon: "circle", className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_css__WEBPACK_IMPORTED_MODULE_3___default.a.resultStatus, _style_css__WEBPACK_IMPORTED_MODULE_3___default.a[`resultStatus--${props.result.impact}`]) }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.resultTitle }, props.result.description),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.resultDescription },
        props.result.help,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: props.result.helpUrl, className: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.resultLink, target: "_blank", rel: "noopener noreferrer" },
            props.i18nRegistry.translate('result.ruleLink', 'Details', [props.result.id], 'Prgfx.Neos.AxeCore', 'AxeCoreView'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], { icon: "external-link-alt" }))),
    props.result.nodes && props.result.nodes.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.result.nodes.map((node, i) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_occurrence__WEBPACK_IMPORTED_MODULE_4__["Occurrence"], { key: i, node: node, focusNode: props.focusNode, highlightNode: props.highlightNode, highlightedSelector: props.highlightedSelector, index: i, occurrenceCount: props.result.nodes.length, i18nRegistry: props.i18nRegistry })))))));


/***/ }),

/***/ "./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"resultSection":"style__resultSection___3FcvA","propertyGroupLabel":"style__propertyGroupLabel___2SK1a","spacer":"style__spacer___3UW3z","iconWrapper":"style__iconWrapper___13I7F","resultStatus":"style__resultStatus___e4f6n","resultStatus--minor":"style__resultStatus--minor___2dJLm","resultStatus--moderate":"style__resultStatus--moderate___2NDki","resultStatus--serious":"style__resultStatus--serious___37kbZ","resultStatus--critical":"style__resultStatus--critical___IewOk","resultItem":"style__resultItem___1E391","resultTitle":"style__resultTitle___Dwgl3","resultDescription":"style__resultDescription___1VdaL","resultLink":"style__resultLink___2-xbX","occurrenceItem":"style__occurrenceItem___1efXE","occurrenceErrorList":"style__occurrenceErrorList___1g8ab","occurrenceErrorItem":"style__occurrenceErrorItem___2v2Yv","popout":"style__popout___1DBW9"};

/***/ }),

/***/ "./src/components/view.tsx":
/*!*********************************!*\
  !*** ./src/components/view.tsx ***!
  \*********************************/
/*! exports provided: View, ViewContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContainer", function() { return ViewContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/state/index.ts");
/* harmony import */ var _guest_frame_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guest-frame/highlight */ "./src/guest-frame/highlight.ts");
/* harmony import */ var _guest_frame_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guest-frame/util */ "./src/guest-frame/util.ts");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neos-project/react-ui-components */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _result_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result-section */ "./src/components/result-section.tsx");
/* harmony import */ var _result_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result-list */ "./src/components/result-list.tsx");
/* harmony import */ var _AxeCorePopout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../AxeCorePopout */ "./src/AxeCorePopout.js");
/* harmony import */ var _AxeCorePopout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AxeCorePopout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js");
/* harmony import */ var _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./export */ "./src/components/export.tsx");












const View = props => {
    const [highlightedSelector, setHighlightedSelector] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    const highlightNode = (selector) => {
        Object(_guest_frame_highlight__WEBPACK_IMPORTED_MODULE_3__["highlightElement"])(selector);
        setHighlightedSelector(selector);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        return () => {
            const gfw = Object(_guest_frame_util__WEBPACK_IMPORTED_MODULE_4__["getGuestFrameWindow"])();
            if (gfw) {
                const el = gfw.document.getElementById('prgfx-neos-axecore-elementhighlighter');
                if (el) {
                    el.style.display = 'none';
                }
            }
        };
    });
    if (!props.isPopout && props.isPoppedOut) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.poppedOut')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_5__["Button"], { onClick: props.popin }, props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.popin'))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        props.isAnalyzing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:view.analyzing')),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_5__["Button"], { disabled: props.isAnalyzing || !props.currentlySelectedDocument, onClick: props.analyze, style: "brand", icon: "search" }, props.currentReport
            ? props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:view.analyzeAgain')
            : props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:view.analyze')),
        props.featureEnabled(_AxeCorePopout__WEBPACK_IMPORTED_MODULE_8__["PopoutFeatureName"]) && !props.isPopout && props.currentReport && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.spacer },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_5__["Button"], { onClick: props.popout }, props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.popout')))),
        props.featureEnabled(_export__WEBPACK_IMPORTED_MODULE_11__["ExportFeatureName"]) && props.currentReport && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.spacer },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_export__WEBPACK_IMPORTED_MODULE_11__["ExportButton"], { label: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:export.export'), results: props.currentReport, filename: Object(_export__WEBPACK_IMPORTED_MODULE_11__["getFilenameFromTitle"])() }))),
        props.currentReport && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result_section__WEBPACK_IMPORTED_MODULE_6__["ResultSection"], { icon: "exclamation-circle", iconColor: "error", title: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:results.category.violations', 'Violations', [props.currentReport.violations.length]), collapsed: props.currentReport.violations.length === 0 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result_list__WEBPACK_IMPORTED_MODULE_7__["ResultList"], { items: props.currentReport.violations, focusNode: props.focusNode, i18nRegistry: props.i18nRegistry, highlightNode: highlightNode, highlightedSelector: highlightedSelector })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result_section__WEBPACK_IMPORTED_MODULE_6__["ResultSection"], { icon: "question-circle", iconColor: "default", title: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:results.category.incomplete', 'Incomplete', [props.currentReport.incomplete.length]), collapsed: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result_list__WEBPACK_IMPORTED_MODULE_7__["ResultList"], { items: props.currentReport.incomplete, focusNode: props.focusNode, i18nRegistry: props.i18nRegistry, highlightNode: highlightNode, highlightedSelector: highlightedSelector })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result_section__WEBPACK_IMPORTED_MODULE_6__["ResultSection"], { icon: "check-circle", iconColor: "success", title: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:results.category.passes', 'Passes', [props.currentReport.passes.length]), collapsed: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result_list__WEBPACK_IMPORTED_MODULE_7__["ResultList"], { items: props.currentReport.passes, focusNode: props.focusNode, i18nRegistry: props.i18nRegistry, highlightNode: highlightNode, highlightedSelector: highlightedSelector })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result_section__WEBPACK_IMPORTED_MODULE_6__["ResultSection"], { icon: "minus-circle", iconColor: "default", title: props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:results.category.inapplicable', 'Inapplicable', [props.currentReport.inapplicable.length]), collapsed: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_result_list__WEBPACK_IMPORTED_MODULE_7__["ResultList"], { items: props.currentReport.inapplicable, focusNode: props.focusNode, i18nRegistry: props.i18nRegistry, highlightNode: highlightNode, highlightedSelector: highlightedSelector }))))));
};
const ViewContainer = props => {
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    const focusNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((contextPath, fusionPath) => dispatch(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_9__["actions"].CR.Nodes.focus(contextPath, fusionPath)), [dispatch]);
    const popout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => dispatch(_state__WEBPACK_IMPORTED_MODULE_2__["actions"].popout()), [dispatch]);
    const popin = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => dispatch(_state__WEBPACK_IMPORTED_MODULE_2__["actions"].popin()), [dispatch]);
    const currentlySelectedDocument = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_9__["selectors"].CR.Nodes.documentNodeContextPathSelector(state));
    const currentReport = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => _state__WEBPACK_IMPORTED_MODULE_2__["selectors"].getReport(state)(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_9__["selectors"].CR.Nodes.documentNodeContextPathSelector(state)));
    const isAnalyzing = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => _state__WEBPACK_IMPORTED_MODULE_2__["selectors"].isAnalyzing(state));
    const isPoppedOut = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => _state__WEBPACK_IMPORTED_MODULE_2__["selectors"].isPoppedOut(state));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, { isAnalyzing: isAnalyzing, isPoppedOut: isPoppedOut, currentReport: currentReport, currentlySelectedDocument: currentlySelectedDocument, focusNode: focusNode, analyze: props.analyze, popout: popout, popin: popin, i18nRegistry: props.i18nRegistry, isPopout: props.isPopout, featureEnabled: props.featureEnabled }));
};


/***/ }),

/***/ "./src/guest-frame/highlight.ts":
/*!**************************************!*\
  !*** ./src/guest-frame/highlight.ts ***!
  \**************************************/
/*! exports provided: highlightElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightElement", function() { return highlightElement; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/guest-frame/util.ts");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);


const positionHighlighter = (highlighter) => (targetElement) => {
    const targetPosition = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getAbsolutePositionOfElementInGuestFrame"])(targetElement);
    highlighter.style.top = `${targetPosition.top}px`;
    highlighter.style.left = `${targetPosition.left}px`;
    highlighter.style.width = `${targetPosition.width}px`;
    highlighter.style.height = `${targetPosition.height}px`;
    highlighter.style.display = 'block';
};
let eventHandler = null;
const highlightElement = (selector) => {
    const gfw = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getGuestFrameWindow"])();
    if (!gfw) {
        return;
    }
    if (eventHandler) {
        gfw.removeEventListener('scroll', eventHandler);
        gfw.removeEventListener('resize', eventHandler);
    }
    const gfd = gfw.document;
    const highlighter = gfd.getElementById('prgfx-neos-axecore-elementhighlighter');
    if (selector === null) {
        if (highlighter) {
            highlighter.style.display = 'none';
        }
        return;
    }
    const targetElement = gfd.querySelector(selector);
    if (!targetElement) {
        return;
    }
    targetElement.scrollIntoView();
    const updatePosition = positionHighlighter(highlighter);
    eventHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(() => updatePosition(targetElement));
    gfw.addEventListener('scroll', eventHandler);
    gfw.addEventListener('resize', eventHandler);
    eventHandler();
};


/***/ }),

/***/ "./src/guest-frame/util.ts":
/*!*********************************!*\
  !*** ./src/guest-frame/util.ts ***!
  \*********************************/
/*! exports provided: getGuestFrameWindow, getAbsolutePositionOfElementInGuestFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGuestFrameWindow", function() { return getGuestFrameWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsolutePositionOfElementInGuestFrame", function() { return getAbsolutePositionOfElementInGuestFrame; });
// things not exported from the system package..
const getGuestFrameWindow = () => {
    const guestFrame = document.getElementsByName('neos-content-main')[0];
    return guestFrame && guestFrame.contentWindow;
};
const getGuestFrameDocument = () => { var _a; return (_a = getGuestFrameWindow()) === null || _a === void 0 ? void 0 : _a.document; };
const clampNumber = (n, min, max) => {
    if (max < min) {
        max = min;
    }
    if (n < min) {
        return [min, min - n];
    }
    if (n > max) {
        return [max, n - max];
    }
    return [n, 0];
};
const clampElementToDocumentDimensions = (elementDimensions, documentDimensions) => {
    const documentWidth = documentDimensions.width;
    const documentHeight = documentDimensions.height;
    const [left, widthShrinkAmount] = clampNumber(elementDimensions.left - documentDimensions.left, 0, documentWidth);
    const [width] = clampNumber(elementDimensions.width - widthShrinkAmount, 0, documentWidth - left);
    const [top, heightShrinkAmount] = clampNumber(elementDimensions.top - documentDimensions.top, 0, documentHeight);
    const [height] = clampNumber(elementDimensions.height - heightShrinkAmount, 0, documentHeight - top);
    return {
        top,
        left,
        width,
        height,
        right: left + width,
        bottom: top + height,
        rightAsMeasuredFromRightDocumentBorder: documentWidth - (left + width),
    };
};
const getAbsolutePositionOfElementInGuestFrame = (element) => {
    if (element && element.getBoundingClientRect) {
        const relativeDocumentDimensions = getGuestFrameDocument().documentElement.getBoundingClientRect();
        const relativeElementDimensions = element.getBoundingClientRect();
        return clampElementToDocumentDimensions(relativeElementDimensions, relativeDocumentDimensions);
    }
    return { top: 0, left: 0, width: 0, height: 0 };
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _AxeCoreView = __webpack_require__(/*! ./AxeCoreView */ "./src/AxeCoreView.js");

var _AxeCoreView2 = _interopRequireDefault(_AxeCoreView);

var _sagas = __webpack_require__(/*! ./state/sagas */ "./src/state/sagas.ts");

var _state = __webpack_require__(/*! ./state */ "./src/state/index.ts");

var _AxeCorePopout = __webpack_require__(/*! ./AxeCorePopout */ "./src/AxeCorePopout.js");

var _util = __webpack_require__(/*! ./util */ "./src/util.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('Prgfx.Neos.AxeCore:AxeCoreView', {}, function (globalRegistry, _ref) {
    var frontendConfiguration = _ref.frontendConfiguration;

    var viewsRegistry = globalRegistry.get('inspector').get('views');
    viewsRegistry.set('Prgfx.Neos.AxeCore/Inspector/Views/AxeCoreView', {
        component: _AxeCoreView2.default
    });
    var sagasRegistry = globalRegistry.get('sagas');
    sagasRegistry.set('Prgfx.Neos.AxeCore/analyze', { saga: _sagas.handleAnalyzerRequest });
    var reducersRegistry = globalRegistry.get('reducers');
    reducersRegistry.set('Prgfx.Neos.AxeCore/AxeCoreView', { reducer: _state.reducer });
    if ((0, _util.featureEnabled)(frontendConfiguration)(_AxeCorePopout.PopoutFeatureName)) {
        var containerRegistry = globalRegistry.get('containers');
        containerRegistry.set('Modals/AxeCorePopout', _AxeCorePopout.AxeCorePopout);
    }
});

/***/ }),

/***/ "./src/state/actions.ts":
/*!******************************!*\
  !*** ./src/state/actions.ts ***!
  \******************************/
/*! exports provided: actionTypes, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const actionTypes = {
    ANALYZE: 'Prgfx.Neos.AxeCore:Analyze',
    SET_REPORT: 'Prgfx.Neos.AxeCore:SetReport',
    POPOUT: 'Prgfx.Neos.AxeCore:Popout',
    POPIN: 'Prgfx.Neos.AxeCore:Popin',
};
const actions = {
    analyze: (contextPath, runOptions) => ({ type: actionTypes.ANALYZE, contextPath, runOptions }),
    setReport: (contextPath, report) => ({ type: actionTypes.SET_REPORT, contextPath, report }),
    popout: () => ({ type: actionTypes.POPOUT }),
    popin: () => ({ type: actionTypes.POPIN }),
};


/***/ }),

/***/ "./src/state/index.ts":
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
/*! exports provided: actionTypes, actions, selectors, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/state/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["actions"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/state/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/state/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]; });







/***/ }),

/***/ "./src/state/reducer.ts":
/*!******************************!*\
  !*** ./src/state/reducer.ts ***!
  \******************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plow-js */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js");
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plow_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/state/actions.ts");


const reducer = (state, action) => {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].ANALYZE:
            return Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$all"])(s => Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$set"])(['plugins', 'axeCoreView', 'analysisRequested'], action.contextPath, s), s => Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$set"])(['plugins', 'axeCoreView', 'reports', action.contextPath], null, s))(state);
        case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].SET_REPORT:
            return Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$all"])(s => Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$set"])(['plugins', 'axeCoreView', 'analysisRequested'], false, s), s => Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$set"])(['plugins', 'axeCoreView', 'reports', action.contextPath], action.report, s))(state);
        case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].POPOUT:
            return Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$set"])(['plugins', 'axeCoreView', 'isPoppedOut'], true, state);
        case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].POPIN:
            return Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$set"])(['plugins', 'axeCoreView', 'isPoppedOut'], false, state);
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/state/sagas.ts":
/*!****************************!*\
  !*** ./src/state/sagas.ts ***!
  \****************************/
/*! exports provided: handleAnalyzerRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleAnalyzerRequest", function() { return handleAnalyzerRequest; });
/* harmony import */ var _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js");
/* harmony import */ var _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/redux-saga-effects/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/state/selectors.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/state/actions.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./src/util.ts");





const targetPreviewMode = 'axeAnalyzerView';
function* handleAnalyzerRequest({ store, globalRegistry }) {
    let previousPreviewMode, currentPreviewMode, contextPath;
    // load the correct preview-mode
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].ANALYZE, function* cb(action) {
        previousPreviewMode = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0__["selectors"].UI.EditPreviewMode.currentEditPreviewMode);
        contextPath = action.contextPath;
        try {
            yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0__["actions"].UI.EditPreviewMode.set(targetPreviewMode));
        }
        catch (e) {
            console.error(e);
        }
    });
    // when loaded generate a report
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UI.ContentCanvas.STOP_LOADING, function* () {
        const state = store.getState();
        currentPreviewMode = _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0__["selectors"].UI.EditPreviewMode.currentEditPreviewMode(state);
        const analysisRequested = _selectors__WEBPACK_IMPORTED_MODULE_2__["isAnalyzing"](state);
        if (currentPreviewMode === 'axeAnalyzerView' && analysisRequested) {
            try {
                const locale = globalRegistry.get('frontendConfiguration').get('Prgfx.Neos.AxeCore:axeCoreTranslations');
                const runOptions = globalRegistry.get('frontendConfiguration').get('Prgfx.Neos.AxeCore:runOptions') || undefined;
                const report = yield Object(_util__WEBPACK_IMPORTED_MODULE_4__["generateReport"])(runOptions, locale || undefined);
                yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setReport(contextPath, report));
            }
            catch (e) {
                yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setReport(contextPath, null));
                yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0__["actions"].UI.FlashMessages.add('axe-core-generateReport', e.message, 'error'));
            }
        }
    });
    // when finished restore the previous edit mode
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].SET_REPORT, function* () {
        if (previousPreviewMode && previousPreviewMode !== targetPreviewMode) {
            yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_0__["actions"].UI.EditPreviewMode.set(previousPreviewMode));
        }
    });
}


/***/ }),

/***/ "./src/state/selectors.ts":
/*!********************************!*\
  !*** ./src/state/selectors.ts ***!
  \********************************/
/*! exports provided: isAnalyzing, getReport, isPoppedOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnalyzing", function() { return isAnalyzing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReport", function() { return getReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoppedOut", function() { return isPoppedOut; });
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plow-js */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js");
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plow_js__WEBPACK_IMPORTED_MODULE_0__);

const isAnalyzing = (state) => !!Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$get"])(['plugins', 'axeCoreView', 'analysisRequested'], state);
const getReport = (state) => (contextPath) => Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$get"])(['plugins', 'axeCoreView', 'reports', contextPath], state);
const isPoppedOut = (state) => Object(plow_js__WEBPACK_IMPORTED_MODULE_0__["$get"])(['plugins', 'axeCoreView', 'isPoppedOut'], state);


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: sortByImpact, featureEnabled, generateReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByImpact", function() { return sortByImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureEnabled", function() { return featureEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateReport", function() { return generateReport; });
/* harmony import */ var _guest_frame_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guest-frame/util */ "./src/guest-frame/util.ts");

const impactValues = {
    'minor': 0,
    'moderate': 1,
    'serious': 2,
    'critical': 3,
};
const sortByImpact = (items) => [...items].sort((a, b) => { var _a, _b; return ((_a = impactValues[b.impact]) !== null && _a !== void 0 ? _a : -1) - ((_b = impactValues[a.impact]) !== null && _b !== void 0 ? _b : -1); });
const featureEnabled = (frontendConfiguration) => (feature) => {
    var _a, _b;
    const configKey = 'Prgfx.Neos.AxeCore:features';
    if (typeof frontendConfiguration['get'] === 'function') {
        return (_a = frontendConfiguration.get(configKey)) === null || _a === void 0 ? void 0 : _a[feature];
    }
    return !!((_b = frontendConfiguration[configKey]) === null || _b === void 0 ? void 0 : _b[feature]);
};
const generateReport = (runOptions, locale) => {
    try {
        const guestFrameWindow = Object(_guest_frame_util__WEBPACK_IMPORTED_MODULE_0__["getGuestFrameWindow"])();
        if (!guestFrameWindow) {
            throw new Error('Could not get guest-frame window');
        }
        if (!guestFrameWindow.axe) {
            throw new Error('axe-core not found in guest-frame');
        }
        if (locale) {
            guestFrameWindow.axe.configure({ locale });
        }
        return guestFrameWindow.axe.run(runOptions)
            .then(report => {
            const memo = {};
            ['passes', 'violations', 'incomplete', 'inapplicable'].forEach(resultType => {
                if (!report[resultType]) {
                    return;
                }
                for (let j = 0; j < report[resultType].length; j++) {
                    if (!report[resultType][j].nodes) {
                        return;
                    }
                    for (let i = 0; i < report[resultType][j].nodes.length; i++) {
                        report[resultType][j].nodes[i].contentElement = report[resultType][j].nodes[i].target.map(selector => {
                            if (!memo[selector]) {
                                const targetNode = guestFrameWindow.document.querySelector(selector);
                                if (!targetNode) {
                                    return memo[selector] = null;
                                }
                                const contentNode = targetNode.closest('[data-__neos-node-contextpath]');
                                if (!contentNode) {
                                    return memo[selector] = null;
                                }
                                const contextPath = contentNode.getAttribute('data-__neos-node-contextpath');
                                const fusionPath = contentNode.getAttribute('data-__neos-fusion-path');
                                let fusionPrototype;
                                if (fusionPath) {
                                    const prototypeNames = fusionPath.match(/<([^>]+)>/g);
                                    if (prototypeNames) {
                                        fusionPrototype = prototypeNames.pop().slice(1, -1);
                                    }
                                }
                                return memo[selector] = {
                                    contextPath,
                                    fusionPath,
                                    fusionPrototype,
                                };
                            }
                            return memo[selector];
                        });
                    }
                }
            });
            return report;
        });
    }
    catch (e) {
        return Promise.reject(e);
    }
};


/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map