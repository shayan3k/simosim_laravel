(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui-utilities.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI v3.0.0-beta.4 (https://coreui.io)
  * Copyright 2020 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.4): classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var sidebarCssClasses = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
  var asideMenuCssClasses = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
  var validBreakpoints = ['sm', 'md', 'lg', 'xl'];
  function checkBreakpoint(breakpoint, list) {
    return list.indexOf(breakpoint) > -1;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.4): deep-objects-merge.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var deepObjectsMerge = function deepObjectsMerge(target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];

      if (source[key] instanceof Object) {
        Object.assign(source[key], deepObjectsMerge(target[key], source[key]));
      }
    } // Join `target` and modified `source`


    Object.assign(target || {}, source);
    return target;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.4): get-css-custom-properties.js
   * Licensed under MIT (https://coreui.io/license)
   * @returns {string} css custom property name
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          // eslint-disable-next-line prefer-destructuring
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    } // eslint-disable-next-line unicorn/prefer-string-slice


    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.4): get-style.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.4): get-color.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var getColor = function getColor(rawProperty, element) {
    if (element === void 0) {
      element = document.body;
    }

    var property = "--" + rawProperty;
    var style = getStyle(property, element);
    return style ? style : rawProperty;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.4): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new TypeError('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.slice(1, 3), 16);
      g = parseInt(color.slice(3, 5), 16);
      b = parseInt(color.slice(5, 7), 16);
    } else {
      r = parseInt(color.slice(1, 2), 16);
      g = parseInt(color.slice(2, 3), 16);
      b = parseInt(color.slice(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.4): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new TypeError('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.slice(1, 3), 16);
      g = parseInt(color.slice(3, 5), 16);
      b = parseInt(color.slice(5, 7), 16);
    } else {
      r = parseInt(color.slice(1, 2), 16);
      g = parseInt(color.slice(2, 3), 16);
      b = parseInt(color.slice(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v3.0.0-beta.4): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new TypeError('Hex color is not defined');
    }

    if (color === 'transparent') {
      return '#00000000';
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  exports.asideMenuCssClasses = asideMenuCssClasses;
  exports.checkBreakpoint = checkBreakpoint;
  exports.deepObjectsMerge = deepObjectsMerge;
  exports.getColor = getColor;
  exports.getStyle = getStyle;
  exports.hexToRgb = hexToRgb;
  exports.hexToRgba = hexToRgba;
  exports.rgbToHex = rgbToHex;
  exports.sidebarCssClasses = sidebarCssClasses;
  exports.validBreakpoints = validBreakpoints;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=coreui-utilities.js.map


/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Theme/Colors/Colors.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Theme/Colors/Colors.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ThemeView =
/*#__PURE__*/
function (_Component) {
  _inherits(ThemeView, _Component);

  function ThemeView(props) {
    var _this;

    _classCallCheck(this, ThemeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ThemeView).call(this, props));
    _this.state = {
      bgColor: 'rgb(255, 255, 255)'
    };
    return _this;
  }

  _createClass(ThemeView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elem = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this).parentNode.firstChild;
      var color = window.getComputedStyle(elem).getPropertyValue('background-color');
      this.setState({
        bgColor: color || this.state.bgColor
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-muted"
      }, "HEX:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "font-weight-bold"
      }, Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["rgbToHex"])(this.state.bgColor))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-muted"
      }, "RGB:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "font-weight-bold"
      }, this.state.bgColor))));
    }
  }]);

  return ThemeView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ThemeColor =
/*#__PURE__*/
function (_Component2) {
  _inherits(ThemeColor, _Component2);

  function ThemeColor() {
    _classCallCheck(this, ThemeColor);

    return _possibleConstructorReturn(this, _getPrototypeOf(ThemeColor).apply(this, arguments));
  }

  _createClass(ThemeColor, [{
    key: "render",
    // constructor(props) {
    //   super(props);
    // }
    value: function render() {
      // const { className, children, ...attributes } = this.props
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'theme-color w-75 rounded mb-3');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xl: "2",
        md: "4",
        sm: "6",
        xs: "12",
        className: "mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes,
        style: {
          paddingTop: '75%'
        }
      }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeView, null));
    }
  }]);

  return ThemeColor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Colors =
/*#__PURE__*/
function (_Component3) {
  _inherits(Colors, _Component3);

  function Colors() {
    _classCallCheck(this, Colors);

    return _possibleConstructorReturn(this, _getPrototypeOf(Colors).apply(this, arguments));
  }

  _createClass(Colors, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-drop"
      }), " Theme colors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-primary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Primary Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Secondary Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-success"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Success Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-danger"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Danger Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-warning"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Warning Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Info Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-light"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Light Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-dark"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Dark Color"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-drop"
      }), " Grays"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 100 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-200"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 200 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-300"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 300 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-400"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 400 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-500"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 500 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-600"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 600 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-700"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 700 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-800"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 800 Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-900"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 900 Color"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-drop"
      }), " Additional colors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-blue"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Blue Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-light-blue"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Light Blue Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-indigo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Indigo Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-purple"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Purple Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-pink"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Pink Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-red"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Red Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-orange"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Orange Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-yellow"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Yellow Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-green"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Green Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-teal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Teal Color")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-cyan"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Cyan Color"))))));
    }
  }]);

  return Colors;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Colors);

/***/ })

}]);