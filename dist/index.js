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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/HelperFunctions.js":
/*!************************************!*\
  !*** ./modules/HelperFunctions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* Internal warn/error message functions. */\n/**\n * @func\n * @param {string} message\n * @return {string} Message with '[libSettings]' prefix.\n*/\nmw.libs.libSettings.buildMessage = function (message) {\n  return '[libSettings] ' + message;\n};\n\n/**\n * @func\n * @param {string} message\n*/\nmw.libs.libSettings.warn = function (message) {\n  mw.log.warn(mw.libs.libSettings.buildMessage(message));\n};\n\n/**\n * @func\n * @param {boolean} condition\n * @param {string} message\n*/\n/*\nlibSettings.assert = function ( condition, message ) {\n\tconsole.assert( condition, libSettings.buildMessage( message ) );\n};*/\n\n/**\n * @func\n * @param {string} message\n * @param {string} [errorType = 'Error']\n*/\nmw.libs.libSettings.error = function (message) {\n  var errorType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Error';\n\n  mw.log.error(new window[errorType](mw.libs.libSettings.buildMessage(message)));\n};\n\n/** Used so that functions can take a parameter regarding whether\n * an error should be raised, or a warning logged.\n * @func\n * @param {string} message\n * @param {('warn'|'error')} errorLevel\n * @param {string} errorType\n*/\nmw.libs.libSettings.throw = function (message, errorLevel, errorType) {\n  switch (errorLevel) {\n    case 'warn':\n      mw.libs.libSettings.warn(message);\n      break;\n    case 'error':\n      mw.libs.libSettings.error(message, errorType);\n  }\n};\n\n//# sourceURL=webpack:///./modules/HelperFunctions.js?");

/***/ }),

/***/ "./modules/Option.js":
/*!***************************!*\
  !*** ./modules/Option.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** Represents an option.\n * @abstract\n * @param {Object} config\n * @property {string} config.name Name of option. (required)\n * @property {*} config.defaultValue (required)\n * @property {string} config.text Text displayed in settings. (required)\n * @property {string} config.helptip Help text shown in settings.\n * @property {Array} config.possibleValues Either [ <value>, .. ] or\n *  [ [ <InternalValue>, <ValueDisplayedInSettings> ], .. ].\n *  Value is validated against possibleValues.\n * @param {string} type Type of option. Should be same as name of extending class minus\n *  Option at the end (e.g \"Color\" for \"ColorOption\" class)\n * @param {...string} basetypes Type(s) to validate against (Defined by extending classes).\n*/\n\nvar Option = function () {\n\tfunction Option(config, type, basetypes) {\n\t\t_classCallCheck(this, Option);\n\n\t\tthis.name = config.name;\n\t\tthis.defaultValue = config.defaultValue;\n\t\tthis.possibeValues = config.possibleValues;\n\t\tswitch (_typeof(this.possibleValues)) {\n\t\t\tcase 'Array':\n\t\t\t\tthis.possibleKeys = this.possibleValues;\n\t\t\t\tthis.possibleSettingsVal = this.possibleValues;\n\t\t\t\tbreak;\n\t\t\tcase 'Object':\n\t\t\t\t// eslint-disable-next-line no-restricted-syntax\n\t\t\t\tthis.possibleKeys = this.possibleValues.keys();\n\t\t\t\t// eslint-disable-next-line no-restricted-syntax\n\t\t\t\tthis.possibleSettingsVal = this.possibleValues.values();\n\t\t}\n\t\tthis.text = config.text;\n\t\tthis.type = type;\n\t\tthis.basetypes = basetypes;\n\t\tthis.value = this.defaultValue;\n\t\tthis.validate(this.defaultValue, 'error');\n\t\t// TODO: pseudocode\n\t\t// on ( 'savesettingsevent', update() )\n\t}\n\n\t_createClass(Option, [{\n\t\tkey: 'validate',\n\t\tvalue: function validate(value, errorLevel) {\n\t\t\t// Check type\n\t\t\tif (this.basetypes && !this.basetypes.some(function (basetype) {\n\t\t\t\treturn (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === basetype;\n\t\t\t})) {\n\t\t\t\tmw.libs.libSettings.throw('Value of ' + this.name + '  does not have one of the type(s) [' + this.basetype + '].', errorLevel, 'TypeError');\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\t// Check if in possibleValues\n\t\t\tif (this.possibleKeys.indexOf(value) === -1) {\n\t\t\t\tmw.libs.libSettings.throw('Value of option ' + this.name + ', ' + value + ', is not in [' + this.possibleKeys + '].', errorLevel);\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\treturn true;\n\t\t}\n\n\t\t/**\n   * Set option value.\n   * @param {*} value\n   */\n\n\t}, {\n\t\tkey: 'setValue',\n\t\tvalue: function setValue(value) {\n\t\t\tif (this.validate(value)) {\n\t\t\t\tthis.value = value;\n\t\t\t} else {\n\t\t\t\tmw.libs.libSettings.warn('Validation of the value of ' + this.name + ', failed, so the default setting of ' + this.defaultValue + ' has been used.');\n\t\t\t\tthis.value = this.defaultValue;\n\t\t\t}\n\t\t}\n\n\t\t/**\n   * Get option value.\n   * @return {*}\n   */\n\n\t}, {\n\t\tkey: 'getValue',\n\t\tvalue: function getValue() {\n\t\t\treturn this.value;\n\t\t}\n\n\t\t/**\n   * Build UI.\n   * @return {OO.ui.element}\n   * //TODO could also be a  mw.widget..how generic can the UI element returned be\n   * prolly create a standard for what functions must be defined by output?\n   * i.e, must satisfy certain portions of OO.ui.element to work\n   * before we can't build the settings menu with it?\n   */\n\n\t}, {\n\t\tkey: 'buildUI',\n\t\tvalue: function buildUI() {\n\t\t\treturn mw.libs.libSettings.error('buildUI not defined by extending class ' + this.type + 'Option.');\n\t\t}\n\n\t\t/**\n   * Update value. (called when save settings event is emitted )\n   * @return {OO.ui.element}\n   */\n\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\treturn mw.libs.libSettings.error('update not defined by extending class ' + this.type + 'Option.');\n\t\t}\n\t}]);\n\n\treturn Option;\n}();\n\nexports.default = Option;\n\n//# sourceURL=webpack:///./modules/Option.js?");

/***/ }),

/***/ "./modules/Options/BooleanOption.js":
/*!******************************************!*\
  !*** ./modules/Options/BooleanOption.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @extends mw.libs.libSettings.Option\n */\nvar BooleanOption = function (_mw$libs$libSettings$) {\n\t_inherits(BooleanOption, _mw$libs$libSettings$);\n\n\tfunction BooleanOption(config) {\n\t\t_classCallCheck(this, BooleanOption);\n\n\t\treturn _possibleConstructorReturn(this, (BooleanOption.__proto__ || Object.getPrototypeOf(BooleanOption)).call(this, config, 'Boolean', 'boolean'));\n\t}\n\n\t// TODO: emit an event upon saving the settings (using OO.eventemitter ),\n\t// so that instead of doing setValue upon every change, only need to do setValue upon saving\n\t// more of an impact on other input boxes, where\n\n\n\t_createClass(BooleanOption, [{\n\t\tkey: 'buildUI',\n\t\tvalue: function buildUI() {\n\t\t\tthis.checkbox = new OO.ui.CheckboxInputWidget({\n\t\t\t\tname: this.name,\n\t\t\t\tselected: this.getValue()\n\t\t\t});\n\t\t\treturn this.checkbox;\n\t\t}\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\tthis.setValue(this.checkbox.getValue()); // convert getValue into a boolean (what string does checkbox return with getValue?)\n\t\t}\n\t}]);\n\n\treturn BooleanOption;\n}(mw.libs.libSettings.Option);\n\nexports.default = BooleanOption;\n\n//# sourceURL=webpack:///./modules/Options/BooleanOption.js?");

/***/ }),

/***/ "./modules/Options/DateOption.js":
/*!***************************************!*\
  !*** ./modules/Options/DateOption.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * Use mw.widgets.DateInputWidget\n * @extends mw.libs.libSettings.Option\n */\nvar DateOption = function (_mw$libs$libSettings$) {\n  _inherits(DateOption, _mw$libs$libSettings$);\n\n  function DateOption(config) {\n    _classCallCheck(this, DateOption);\n\n    return _possibleConstructorReturn(this, (DateOption.__proto__ || Object.getPrototypeOf(DateOption)).call(this, config, 'Date', 'Date'));\n  }\n\n  return DateOption;\n}(mw.libs.libSettings.Option);\n\nexports.default = DateOption;\n\n//# sourceURL=webpack:///./modules/Options/DateOption.js?");

/***/ }),

/***/ "./modules/Settings.js":
/*!*****************************!*\
  !*** ./modules/Settings.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * @param {Array.<Object>} optionsConfig\n * @property {string} optionsConfig[].title Header of particular set of preferences\n * @property {(boolean|Function)} [optionsConfig[].show] Boolean or function that returns a\n * Boolean. Can use anonymous function when a variable is only loaded after the settings is loaded.\n * @property {(boolean|Function)} [optionsConfig[].collapsed] Whether the settings should be\n *  collapsed (e.g, if it is rarely used \"Advanced\" settings).\n * @property {...libSettings.Option} optionsConfig[].preferences Array of Option objects.\n * @param {Object} settingsConfig\n * @property {string} settingsConfig.scriptName\n * @property {string} [settingsConfig.optionName = scriptName] optionName is the name under which\n * the options are stored using API:Options.( \"userjs-\" is prepended to this ).\n * @property {string} settingsConfig.formFactor \"small\" | \"medium\" | \"large\" | \"fullpage\"\n * @property {string} [settingsConfig.customSaveFailMessage]\n *\n*/\n\nvar Settings = function () {\n\tfunction Settings(optionsConfig, settingsConfig) {\n\t\tvar _this = this;\n\n\t\t_classCallCheck(this, Settings);\n\n\t\t// optionsConfig\n\t\tthis.optionsConfig = optionsConfig;\n\t\tthis.defaultOptions = {};\n\t\tthis.optionsConfig.foreach(function (element) {\n\t\t\telement.preferences.forEach(function (option) {\n\t\t\t\t_this.defaultOptions[option.name] = option.defaultValue;\n\t\t\t});\n\t\t});\n\t\tthis.scriptName = settingsConfig.scriptName;\n\t\tthis.optionName = 'userjs-' + (settingsConfig.optionName || settingsConfig.scriptName);\n\t\tthis.saveMessage = 'Settings for ' + this.scriptName + ' saved.';\n\t\tthis.saveFailMessage = settingsConfig.customSaveFailMessage || 'Could not save settings for ' + this.scriptName + '.';\n\t}\n\n\t/** Save settings\n  * Only saves unique settings, i.e settings that are different from the default\n  */\n\n\n\t_createClass(Settings, [{\n\t\tkey: 'save',\n\t\tvalue: function save() {\n\t\t\tvar _this2 = this;\n\n\t\t\tmw.loader.using('mediawiki.api').then(function () {\n\t\t\t\t_this2.API = new mw.Api({\n\t\t\t\t\tajax: {\n\t\t\t\t\t\theaders: {\n\t\t\t\t\t\t\t'Api-User-Agent': 'Script ' + _this2.scriptName + ' using libSettings.'\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\t_this2.API.saveOption(_this2.optionName, JSON.stringify() /* ?*/).then(function () {\n\t\t\t\t\tmw.notify(_this2.saveMessage);\n\t\t\t\t}, function () {\n\t\t\t\t\tmw.notify(_this2.saveFailMessage);\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\n\t\t/** Get settings\n   * @func\n   * @return {Object} { [optionName]: [optionValue],...}\n  */\n\n\t}, {\n\t\tkey: 'get',\n\t\tvalue: function get() {\n\t\t\tvar _this3 = this;\n\n\t\t\tif (!this.options) {\n\t\t\t\tthis.optionsText = mw.user.options.get(this.optionName);\n\t\t\t\tthis.userOptions = JSON.parse(this.optionsText);\n\t\t\t\tthis.defaultKeys = Object.keys(this.defaultOptions);\n\t\t\t\tthis.options = {};\n\t\t\t\t// Loop clones this.defaultOptions while using this.userOptions when it exists\n\t\t\t\tthis.defaultKeys.foreach(function (key) {\n\t\t\t\t\t_this3.options[key] = _this3.userOptions[key] || _this3.defaultOptions[key];\n\t\t\t\t});\n\t\t\t}\n\t\t\treturn this.options;\n\t\t}\n\n\t\t/* Traverse through this.optionsConfig and get the values inputed by the user into the\n   * settings menu */\n\n\t}, {\n\t\tkey: 'getInputedValues',\n\t\tvalue: function getInputedValues() {}\n\t}, {\n\t\tkey: 'display',\n\t\tvalue: function display() {}\n\t}]);\n\n\treturn Settings;\n}();\n\nexports.default = Settings;\n\n//# sourceURL=webpack:///./modules/Settings.js?");

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! HelperFunctions.js */ \"./modules/HelperFunctions.js\");\n\nvar _Option = __webpack_require__(/*! Option.js */ \"./modules/Option.js\");\n\nvar _Option2 = _interopRequireDefault(_Option);\n\nvar _Settings = __webpack_require__(/*! Settings.js */ \"./modules/Settings.js\");\n\nvar _Settings2 = _interopRequireDefault(_Settings);\n\nvar _BooleanOption = __webpack_require__(/*! Options/BooleanOption.js */ \"./modules/Options/BooleanOption.js\");\n\nvar _BooleanOption2 = _interopRequireDefault(_BooleanOption);\n\nvar _DateOption = __webpack_require__(/*! Options/DateOption.js */ \"./modules/Options/DateOption.js\");\n\nvar _DateOption2 = _interopRequireDefault(_DateOption);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmw.libs.libSettings = {};\n\nmw.libs.libSettings.Option = _Option2.default;\nmw.libs.libSettings.Settings = _Settings2.default;\nmw.libs.libSettings.BooleanOption = _BooleanOption2.default;\nmw.libs.libSettings.DateOption = _DateOption2.default;\n\n//# sourceURL=webpack:///./modules/index.js?");

/***/ })

/******/ });