(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget01.js":
/*!****************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Widgets/Widget01.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/lib/utils */ "./node_modules/reactstrap/lib/utils.js");
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mainText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  smallText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
var defaultProps = {
  header: '89.9%',
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: ''
};

var Widget01 =
/*#__PURE__*/
function (_Component) {
  _inherits(Widget01, _Component);

  function Widget01() {
    _classCallCheck(this, Widget01);

    return _possibleConstructorReturn(this, _getPrototypeOf(Widget01).apply(this, arguments));
  }

  _createClass(Widget01, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          header = _this$props.header,
          mainText = _this$props.mainText,
          smallText = _this$props.smallText,
          color = _this$props.color,
          value = _this$props.value,
          children = _this$props.children,
          variant = _this$props.variant,
          attributes = _objectWithoutProperties(_this$props, ["className", "cssModule", "header", "mainText", "smallText", "color", "value", "children", "variant"]); // demo purposes only


      var progress = {
        style: '',
        color: color,
        value: value
      };
      var card = {
        style: '',
        bgColor: ''
      };

      if (variant === 'inverse') {
        progress.style = 'progress-white';
        progress.color = '';
        card.style = 'text-white';
        card.bgColor = 'bg-' + color;
      }

      var classes = Object(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__["mapToCssModules"])(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, card.style, card.bgColor), cssModule);
      progress.style = classnames__WEBPACK_IMPORTED_MODULE_3___default()('progress-xs my-3', progress.style);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({
        className: classes
      }, attributes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "h4 m-0"
      }, header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, mainText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: progress.style,
        color: progress.color,
        value: progress.value
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, smallText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children)));
    }
  }]);

  return Widget01;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Widget01.propTypes = propTypes;
Widget01.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Widget01);

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget02.js":
/*!****************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Widgets/Widget02.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/lib/utils */ "./node_modules/reactstrap/lib/utils.js");
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mainText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
var defaultProps = {
  header: '$1,999.50',
  mainText: 'Income',
  icon: 'fa fa-cogs',
  color: 'primary',
  variant: '0',
  link: '#'
};

var Widget02 =
/*#__PURE__*/
function (_Component) {
  _inherits(Widget02, _Component);

  function Widget02() {
    _classCallCheck(this, Widget02);

    return _possibleConstructorReturn(this, _getPrototypeOf(Widget02).apply(this, arguments));
  }

  _createClass(Widget02, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          header = _this$props.header,
          mainText = _this$props.mainText,
          icon = _this$props.icon,
          color = _this$props.color,
          footer = _this$props.footer,
          link = _this$props.link,
          children = _this$props.children,
          variant = _this$props.variant,
          attributes = _objectWithoutProperties(_this$props, ["className", "cssModule", "header", "mainText", "icon", "color", "footer", "link", "children", "variant"]); // demo purposes only


      var padding = variant === '0' ? {
        card: 'p-3',
        icon: 'p-3',
        lead: 'mt-2'
      } : variant === '1' ? {
        card: 'p-0',
        icon: 'p-4',
        lead: 'pt-3'
      } : {
        card: 'p-0',
        icon: 'p-4 px-5',
        lead: 'pt-3'
      };
      var card = {
        style: 'clearfix',
        color: color,
        icon: icon,
        classes: ''
      };
      card.classes = Object(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__["mapToCssModules"])(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, card.style, padding.card), cssModule);
      var lead = {
        style: 'h5 mb-0',
        color: color,
        classes: ''
      };
      lead.classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(lead.style, 'text-' + card.color, padding.lead);

      var blockIcon = function blockIcon(icon) {
        var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(icon, 'bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left');
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: classes
        });
      };

      var cardFooter = function cardFooter() {
        if (footer) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], {
            className: "px-3 py-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "font-weight-bold font-xs btn-block text-muted",
            href: link
          }, "View More", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fa fa-angle-right float-right font-lg"
          })));
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], _extends({
        className: card.classes
      }, attributes), blockIcon(card.icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: lead.classes
      }, header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted text-uppercase font-weight-bold font-xs"
      }, mainText)), cardFooter());
    }
  }]);

  return Widget02;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Widget02.propTypes = propTypes;
Widget02.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Widget02);

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget03.js":
/*!****************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Widgets/Widget03.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/lib/utils */ "./node_modules/reactstrap/lib/utils.js");
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dataBox: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var defaultProps = {
  dataBox: function dataBox() {
    return {
      variant: 'facebook',
      friends: '-',
      feeds: '-'
    };
  }
};

var Widget03 =
/*#__PURE__*/
function (_Component) {
  _inherits(Widget03, _Component);

  function Widget03() {
    _classCallCheck(this, Widget03);

    return _possibleConstructorReturn(this, _getPrototypeOf(Widget03).apply(this, arguments));
  }

  _createClass(Widget03, [{
    key: "render",
    value: function render() {
      // eslint-disable-next-line
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          dataBox = _this$props.dataBox,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "cssModule", "dataBox"]); // demo purposes only


      var data = dataBox();
      var variant = data.variant;

      if (!variant || ['facebook', 'twitter', 'linkedin', 'google-plus'].indexOf(variant) < 0) {
        return null;
      }

      var back = 'bg-' + variant;
      var icon = 'fa fa-' + variant;
      var keys = Object.keys(data);
      var vals = Object.values(data);
      var classCard = 'brand-card';
      var classCardHeader = classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(classCard, "-header"), back);
      var classCardBody = classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(classCard, "-body"));
      var classes = Object(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_3__["mapToCssModules"])(classnames__WEBPACK_IMPORTED_MODULE_2___default()(classCard, className), cssModule);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classCardHeader
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: icon
      }), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classCardBody
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, vals[1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-uppercase text-muted small"
      }, keys[1])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, vals[2]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-uppercase text-muted small"
      }, keys[2]))));
    }
  }]);

  return Widget03;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Widget03.propTypes = propTypes;
Widget03.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Widget03);

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget04.js":
/*!****************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Widgets/Widget04.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/lib/utils */ "./node_modules/reactstrap/lib/utils.js");
/* harmony import */ var reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
var defaultProps = {
  header: '87.500',
  icon: 'icon-people',
  color: 'info',
  value: '25',
  children: 'Visitors',
  invert: false
};

var Widget04 =
/*#__PURE__*/
function (_Component) {
  _inherits(Widget04, _Component);

  function Widget04() {
    _classCallCheck(this, Widget04);

    return _possibleConstructorReturn(this, _getPrototypeOf(Widget04).apply(this, arguments));
  }

  _createClass(Widget04, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          header = _this$props.header,
          icon = _this$props.icon,
          color = _this$props.color,
          value = _this$props.value,
          children = _this$props.children,
          invert = _this$props.invert,
          attributes = _objectWithoutProperties(_this$props, ["className", "cssModule", "header", "icon", "color", "value", "children", "invert"]); // demo purposes only


      var progress = {
        style: '',
        color: color,
        value: value
      };
      var card = {
        style: '',
        bgColor: '',
        icon: icon
      };

      if (invert) {
        progress.style = 'progress-white';
        progress.color = '';
        card.style = 'text-white';
        card.bgColor = 'bg-' + color;
      }

      var classes = Object(reactstrap_lib_utils__WEBPACK_IMPORTED_MODULE_4__["mapToCssModules"])(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, card.style, card.bgColor), cssModule);
      progress.style = classnames__WEBPACK_IMPORTED_MODULE_3___default()('progress-xs mt-3 mb-0', progress.style);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({
        className: classes
      }, attributes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "h1 text-muted text-right mb-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: card.icon
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "h4 mb-0"
      }, header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted text-uppercase font-weight-bold"
      }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: progress.style,
        color: progress.color,
        value: progress.value
      })));
    }
  }]);

  return Widget04;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Widget04.propTypes = propTypes;
Widget04.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Widget04);

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Widgets/Widgets.js":
/*!***************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Widgets/Widgets.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Widget01__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Widget01 */ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget01.js");
/* harmony import */ var _Widget02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widget02 */ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget02.js");
/* harmony import */ var _Widget03__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widget03 */ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget03.js");
/* harmony import */ var _Widget04__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widget04 */ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget04.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







 // Brand Card Chart

var makeSocialBoxData = function makeSocialBoxData(dataSetNo) {
  var socialBoxData = [{
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'facebook'
  }, {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'twitter'
  }, {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'linkedin'
  }, {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'google'
  }];
  var dataset = socialBoxData[dataSetNo];
  var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: dataset.data,
      label: dataset.label
    }]
  };
  return function () {
    return data;
  };
};

var socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

var Widgets =
/*#__PURE__*/
function (_Component) {
  _inherits(Widgets, _Component);

  function Widgets() {
    _classCallCheck(this, Widgets);

    return _possibleConstructorReturn(this, _getPrototypeOf(Widgets).apply(this, arguments));
  }

  _createClass(Widgets, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget01__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "success",
        header: "89.9%"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget01__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "info",
        header: "12.124"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget01__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "warning",
        header: "$98.111,00",
        smallText: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Excepteur sint occaecat..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget01__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "danger",
        value: "95",
        header: "1.9 TB",
        mainText: "Danger!",
        smallText: "This is your final warning..."
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget01__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "primary",
        variant: "inverse",
        header: "89.9%"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget01__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "warning",
        variant: "inverse",
        header: "12.124"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget01__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "danger",
        variant: "inverse",
        header: "$98.111,00",
        smallText: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Excepteur sint occaecat..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget01__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "info",
        variant: "inverse",
        value: "95",
        header: "1.9 TB",
        mainText: "Danger!",
        smallText: "This is your final warning..."
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-cogs",
        color: "primary"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-laptop",
        color: "info"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-moon-o",
        color: "warning"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-bell",
        color: "danger"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-cogs",
        color: "primary",
        footer: true,
        link: "#/charts"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-laptop",
        color: "info",
        footer: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-moon-o",
        color: "warning",
        footer: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-bell",
        color: "danger",
        footer: true
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-cogs",
        color: "primary",
        variant: "1"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-laptop",
        color: "info",
        variant: "1"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-moon-o",
        color: "warning",
        variant: "1"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-bell",
        color: "danger",
        variant: "1"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-cogs",
        color: "primary",
        variant: "2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-laptop",
        color: "info",
        variant: "2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-moon-o",
        color: "warning",
        variant: "2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget02__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "$1.999,50",
        mainText: "Income",
        icon: "fa fa-bell",
        color: "danger",
        variant: "2"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 12,
        sm: 6,
        md: 3
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget03__WEBPACK_IMPORTED_MODULE_4__["default"], {
        dataBox: function dataBox() {
          return {
            variant: 'facebook',
            friends: '89k',
            feeds: '459'
          };
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        data: makeSocialBoxData(0),
        options: socialChartOpts,
        height: 90
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 12,
        sm: 6,
        md: 3
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget03__WEBPACK_IMPORTED_MODULE_4__["default"], {
        dataBox: function dataBox() {
          return {
            variant: 'twitter',
            followers: '973k',
            tweets: '1.792'
          };
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        data: makeSocialBoxData(1),
        options: socialChartOpts,
        height: 90
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 12,
        sm: 6,
        md: 3
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget03__WEBPACK_IMPORTED_MODULE_4__["default"], {
        dataBox: function dataBox() {
          return {
            variant: 'linkedin',
            contacts: '500+',
            feeds: '292'
          };
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        data: makeSocialBoxData(2),
        options: socialChartOpts,
        height: 90
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 12,
        sm: 6,
        md: 3
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget03__WEBPACK_IMPORTED_MODULE_4__["default"], {
        dataBox: function dataBox() {
          return {
            variant: 'google-plus',
            followers: '894',
            circles: '92'
          };
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        data: makeSocialBoxData(3),
        options: socialChartOpts,
        height: 90
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardGroup"], {
        className: "mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-people",
        color: "info",
        header: "87.500",
        value: "25"
      }, "Visitors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-user-follow",
        color: "success",
        header: "385",
        value: "25"
      }, "New Clients"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-basket-loaded",
        color: "warning",
        header: "1238",
        value: "25"
      }, "Products sold"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-pie-chart",
        color: "primary",
        header: "28%",
        value: "25"
      }, "Returning Visitors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-speedometer",
        color: "danger",
        header: "5:34:11",
        value: "25"
      }, "Avg. Time")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-people",
        color: "info",
        header: "87.500",
        value: "25"
      }, "Visitors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-user-follow",
        color: "success",
        header: "385",
        value: "25"
      }, "New Clients")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-basket-loaded",
        color: "warning",
        header: "1238",
        value: "25"
      }, "Products sold")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-pie-chart",
        color: "primary",
        header: "28%",
        value: "25"
      }, "Returning Visitors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-speedometer",
        color: "danger",
        header: "5:34:11",
        value: "25"
      }, "Avg. Time")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-speech",
        color: "info",
        header: "972",
        value: "25"
      }, "Comments"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-people",
        color: "info",
        header: "87.500",
        value: "25",
        invert: true
      }, "Visitors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-user-follow",
        color: "success",
        header: "385",
        value: "25",
        invert: true
      }, "New Clients")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-basket-loaded",
        color: "warning",
        header: "1238",
        value: "25",
        invert: true
      }, "Products sold")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-pie-chart",
        color: "primary",
        header: "28%",
        value: "25",
        invert: true
      }, "Returning Visitors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-speedometer",
        color: "danger",
        header: "5:34:11",
        value: "25",
        invert: true
      }, "Avg. Time")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6",
        md: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget04__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "icon-speech",
        color: "info",
        header: "972",
        value: "25",
        invert: true
      }, "Comments"))));
    }
  }]);

  return Widgets;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Widgets);

/***/ })

}]);