(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI Plugins - Custom Tooltips for Chart.js (v1.3.1): custom-tooltips.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  function CustomTooltips(tooltipModel) {
    var _this = this;

    // Add unique id if not exist
    var _setCanvasId = function _setCanvasId() {
      var _idMaker = function _idMaker() {
        var _hex = 16;
        var _multiplier = 0x10000;
        return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
      };

      var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

      _this._chart.canvas.id = _canvasId;
      return _canvasId;
    };

    var ClassName = {
      ABOVE: 'above',
      BELOW: 'below',
      CHARTJS_TOOLTIP: 'chartjs-tooltip',
      NO_TRANSFORM: 'no-transform',
      TOOLTIP_BODY: 'tooltip-body',
      TOOLTIP_BODY_ITEM: 'tooltip-body-item',
      TOOLTIP_BODY_ITEM_COLOR: 'tooltip-body-item-color',
      TOOLTIP_BODY_ITEM_LABEL: 'tooltip-body-item-label',
      TOOLTIP_BODY_ITEM_VALUE: 'tooltip-body-item-value',
      TOOLTIP_HEADER: 'tooltip-header',
      TOOLTIP_HEADER_ITEM: 'tooltip-header-item'
    };
    var Selector = {
      DIV: 'div',
      SPAN: 'span',
      TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
    };
    var tooltip = document.getElementById(Selector.TOOLTIP);

    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = Selector.TOOLTIP;
      tooltip.className = ClassName.CHARTJS_TOOLTIP;

      this._chart.canvas.parentNode.appendChild(tooltip);
    } // Hide if no tooltip


    if (tooltipModel.opacity === 0) {
      tooltip.style.opacity = 0;
      return;
    } // Set caret Position


    tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

    if (tooltipModel.yAlign) {
      tooltip.classList.add(tooltipModel.yAlign);
    } else {
      tooltip.classList.add(ClassName.NO_TRANSFORM);
    } // Set Text


    if (tooltipModel.body) {
      var titleLines = tooltipModel.title || [];
      var tooltipHeader = document.createElement(Selector.DIV);
      tooltipHeader.className = ClassName.TOOLTIP_HEADER;
      titleLines.forEach(function (title) {
        var tooltipHeaderTitle = document.createElement(Selector.DIV);
        tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
        tooltipHeaderTitle.innerHTML = title;
        tooltipHeader.appendChild(tooltipHeaderTitle);
      });
      var tooltipBody = document.createElement(Selector.DIV);
      tooltipBody.className = ClassName.TOOLTIP_BODY;
      var tooltipBodyItems = tooltipModel.body.map(function (item) {
        return item.lines;
      });
      tooltipBodyItems.forEach(function (item, i) {
        var tooltipBodyItem = document.createElement(Selector.DIV);
        tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
        var colors = tooltipModel.labelColors[i];
        var tooltipBodyItemColor = document.createElement(Selector.SPAN);
        tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
        tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
        tooltipBodyItem.appendChild(tooltipBodyItemColor);

        if (item[0].split(':').length > 1) {
          var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
          tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
          tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
          tooltipBodyItem.appendChild(tooltipBodyItemLabel);
          var tooltipBodyItemValue = document.createElement(Selector.SPAN);
          tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
          tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
          tooltipBodyItem.appendChild(tooltipBodyItemValue);
        } else {
          var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

          _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
          _tooltipBodyItemValue.innerHTML = item[0];
          tooltipBodyItem.appendChild(_tooltipBodyItemValue);
        }

        tooltipBody.appendChild(tooltipBodyItem);
      });
      tooltip.innerHTML = '';
      tooltip.appendChild(tooltipHeader);
      tooltip.appendChild(tooltipBody);
    }

    var position = this._chart.canvas.getBoundingClientRect();

    var positionY = this._chart.canvas.offsetTop;
    var positionX = this._chart.canvas.offsetLeft;
    var positionLeft = positionX + tooltipModel.caretX;
    var positionTop = positionY + tooltipModel.caretY; // eslint-disable-next-line

    var halfWidth = tooltipModel.width / 2;

    if (positionLeft + halfWidth > position.width) {
      positionLeft -= halfWidth;
    } else if (positionLeft < halfWidth) {
      positionLeft += halfWidth;
    } // Display, position, and set styles for font


    tooltip.style.opacity = 1;
    tooltip.style.left = positionLeft + "px";
    tooltip.style.top = positionTop + "px";
  }

  var customTooltips = CustomTooltips; // TODO: camel-case

  exports.CustomTooltips = CustomTooltips;
  exports.customTooltips = customTooltips;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=custom-tooltips.js.map


/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Dashboard/Dashboard.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Dashboard/Dashboard.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Widget03 = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, /*! ../../views/Widgets/Widget03 */ "./resources/js/ReactFiles/components/admin/views/Widgets/Widget03.js"));
});
var brandPrimary = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--primary');
var brandSuccess = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--success');
var brandInfo = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--info');
var brandWarning = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--warning');
var brandDanger = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--danger'); // Card Chart 1

var cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: brandPrimary,
    borderColor: 'rgba(255,255,255,.55)',
    data: [65, 59, 84, 84, 51, 55, 40]
  }]
};
var cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent'
      }
    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
      }
    }]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
}; // Card Chart 2

var cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: brandInfo,
    borderColor: 'rgba(255,255,255,.55)',
    data: [1, 18, 9, 17, 34, 22, 11]
  }]
};
var cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent'
      }
    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
      }
    }]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
}; // Card Chart 3

var cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,255,255,.2)',
    borderColor: 'rgba(255,255,255,.55)',
    data: [78, 81, 80, 45, 34, 12, 40]
  }]
};
var cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
  },
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
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
}; // Card Chart 4

var cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,255,255,.3)',
    borderColor: 'transparent',
    data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
  }]
};
var cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6
    }],
    yAxes: [{
      display: false
    }]
  }
}; // Social Box Chart

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

var makeSocialBoxData = function makeSocialBoxData(dataSetNo) {
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
  tooltips: {
    enabled: false,
    custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
  },
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
}; // sparkline charts

var sparkLineChartData = [{
  data: [35, 23, 56, 22, 97, 23, 64],
  label: 'New Clients'
}, {
  data: [65, 59, 84, 84, 51, 55, 40],
  label: 'Recurring Clients'
}, {
  data: [35, 23, 56, 22, 97, 23, 64],
  label: 'Pageviews'
}, {
  data: [65, 59, 84, 84, 51, 55, 40],
  label: 'Organic'
}, {
  data: [78, 81, 80, 45, 34, 12, 40],
  label: 'CTR'
}, {
  data: [1, 13, 9, 17, 34, 41, 38],
  label: 'Bounce Rate'
}];

var makeSparkLineData = function makeSparkLineData(dataSetNo, variant) {
  var dataset = sparkLineChartData[dataSetNo];
  var data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      backgroundColor: 'transparent',
      borderColor: variant ? variant : '#c2cfd6',
      data: dataset.data,
      label: dataset.label
    }]
  };
  return function () {
    return data;
  };
};

var sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  legend: {
    display: false
  }
}; // Main Chart
//Random Numbers

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

var mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["hexToRgba"])(brandInfo, 10),
    borderColor: brandInfo,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data1
  }, {
    label: 'My Second dataset',
    backgroundColor: 'transparent',
    borderColor: brandSuccess,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data2
  }, {
    label: 'My Third dataset',
    backgroundColor: 'transparent',
    borderColor: brandDanger,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 1,
    borderDash: [8, 5],
    data: data3
  }]
};
var mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"],
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function labelColor(tooltipItem, chart) {
        return {
          backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
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

var Dashboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "loading", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn pt-1 text-center"
      }, "Loading...");
    });

    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.onRadioBtnClick = _this.onRadioBtnClick.bind(_assertThisInitialized(_this));
    _this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "onRadioBtnClick",
    value: function onRadioBtnClick(radioSelected) {
      this.setState({
        radioSelected: radioSelected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "text-white bg-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "pb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonDropdown"], {
        id: "card1",
        isOpen: this.state.card1,
        toggle: function toggle() {
          _this2.setState({
            card1: !_this2.state.card1
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
        caret: true,
        className: "p-0",
        color: "transparent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-settings"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        right: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
        disabled: true
      }, "Disabled action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, "9.823"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Members online")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper mx-3",
        style: {
          height: '70px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: cardChartData2,
        options: cardChartOpts2,
        height: 70
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "text-white bg-primary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "pb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
        id: "card2",
        isOpen: this.state.card2,
        toggle: function toggle() {
          _this2.setState({
            card2: !_this2.state.card2
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
        className: "p-0",
        color: "transparent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-location-pin"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        right: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, "9.823"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Members online")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper mx-3",
        style: {
          height: '70px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: cardChartData1,
        options: cardChartOpts1,
        height: 70
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "text-white bg-warning"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "pb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
        id: "card3",
        isOpen: this.state.card3,
        toggle: function toggle() {
          _this2.setState({
            card3: !_this2.state.card3
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
        caret: true,
        className: "p-0",
        color: "transparent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-settings"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        right: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, "9.823"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Members online")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper",
        style: {
          height: '70px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: cardChartData3,
        options: cardChartOpts3,
        height: 70
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "12",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "text-white bg-danger"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "pb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonDropdown"], {
        id: "card4",
        isOpen: this.state.card4,
        toggle: function toggle() {
          _this2.setState({
            card4: !_this2.state.card4
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
        caret: true,
        className: "p-0",
        color: "transparent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-settings"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        right: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, "9.823"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Members online")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper mx-3",
        style: {
          height: '70px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        data: cardChartData4,
        options: cardChartOpts4,
        height: 70
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        className: "mb-0"
      }, "Traffic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, "November 2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "7",
        className: "d-none d-sm-inline-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "primary",
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-cloud-download"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonToolbar"], {
        className: "float-right",
        "aria-label": "Toolbar with button groups"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
        className: "mr-3",
        "aria-label": "First group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "outline-secondary",
        onClick: function onClick() {
          return _this2.onRadioBtnClick(1);
        },
        active: this.state.radioSelected === 1
      }, "Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "outline-secondary",
        onClick: function onClick() {
          return _this2.onRadioBtnClick(2);
        },
        active: this.state.radioSelected === 2
      }, "Month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "outline-secondary",
        onClick: function onClick() {
          return _this2.onRadioBtnClick(3);
        },
        active: this.state.radioSelected === 3
      }, "Year"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper",
        style: {
          height: 300 + 'px',
          marginTop: 40 + 'px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: mainChart,
        options: mainChartOpts,
        height: 300
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        md: true,
        className: "mb-sm-2 mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted"
      }, "Visits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "29.703 Users (40%)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs mt-2",
        color: "success",
        value: "40"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        md: true,
        className: "mb-sm-2 mb-0 d-md-down-none"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted"
      }, "Unique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "24.093 Users (20%)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs mt-2",
        color: "info",
        value: "20"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        md: true,
        className: "mb-sm-2 mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted"
      }, "Pageviews"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "78.706 Views (60%)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs mt-2",
        color: "warning",
        value: "60"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        md: true,
        className: "mb-sm-2 mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted"
      }, "New Users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "22.123 Users (80%)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs mt-2",
        color: "danger",
        value: "80"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        md: true,
        className: "mb-sm-2 mb-0 d-md-down-none"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted"
      }, "Bounce Rate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Average Rate (40.15%)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs mt-2",
        color: "primary",
        value: "40"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Widget03, {
        dataBox: function dataBox() {
          return {
            variant: 'facebook',
            friends: '89k',
            feeds: '459'
          };
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: makeSocialBoxData(0),
        options: socialChartOpts,
        height: 90
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Widget03, {
        dataBox: function dataBox() {
          return {
            variant: 'twitter',
            followers: '973k',
            tweets: '1.792'
          };
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: makeSocialBoxData(1),
        options: socialChartOpts,
        height: 90
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Widget03, {
        dataBox: function dataBox() {
          return {
            variant: 'linkedin',
            contacts: '500+',
            feeds: '292'
          };
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: makeSocialBoxData(2),
        options: socialChartOpts,
        height: 90
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6",
        sm: "6",
        lg: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: this.loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Widget03, {
        dataBox: function dataBox() {
          return {
            variant: 'google-plus',
            followers: '894',
            circles: '92'
          };
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: makeSocialBoxData(3),
        options: socialChartOpts,
        height: 90
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Traffic ", ' & ', " Sales"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "12",
        md: "6",
        xl: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "callout callout-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "New Clients"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "h4"
      }, "9,123"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: makeSparkLineData(0, brandPrimary),
        options: sparklineChartOpts,
        width: 100,
        height: 30
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "callout callout-danger"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Recurring Clients"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "h4"
      }, "22,643"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: makeSparkLineData(1, brandDanger),
        options: sparklineChartOpts,
        width: 100,
        height: 30
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "mt-0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "progress-group-text"
      }, "Monday")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "34"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "78"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "progress-group-text"
      }, "Tuesday")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "56"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "94"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "progress-group-text"
      }, "Wednesday")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "12"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "67"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "progress-group-text"
      }, "Thursday")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "43"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "91"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "progress-group-text"
      }, "Friday")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "22"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "73"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "progress-group-text"
      }, "Saturday")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "53"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "82"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "progress-group-text"
      }, "Sunday")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "9"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "69"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legend text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
        className: "px-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        pill: true,
        color: "info"
      }, "\xA0")), "New clients \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
        className: "px-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        pill: true,
        color: "danger"
      }, "\xA0")), "Recurring clients"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "12",
        md: "6",
        xl: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "callout callout-warning"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Pageviews"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "h4"
      }, "78,623"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: makeSparkLineData(2, brandWarning),
        options: sparklineChartOpts,
        width: 100,
        height: 30
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "callout callout-success"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Organic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "h4"
      }, "49,123"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: makeSparkLineData(3, brandSuccess),
        options: sparklineChartOpts,
        width: 100,
        height: 30
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "mt-0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-user progress-group-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title"
      }, "Male"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-auto font-weight-bold"
      }, "43%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "warning",
        value: "43"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group mb-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-user-female progress-group-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title"
      }, "Female"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-auto font-weight-bold"
      }, "37%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "warning",
        value: "37"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-globe progress-group-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title"
      }, "Organic Search"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-auto font-weight-bold"
      }, "191,235 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-muted small"
      }, "(56%)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "success",
        value: "56"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-social-facebook progress-group-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title"
      }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-auto font-weight-bold"
      }, "51,223 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-muted small"
      }, "(15%)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "success",
        value: "15"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-social-twitter progress-group-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title"
      }, "Twitter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-auto font-weight-bold"
      }, "37,564 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-muted small"
      }, "(11%)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "success",
        value: "11"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-social-linkedin progress-group-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title"
      }, "LinkedIn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-auto font-weight-bold"
      }, "27,319 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-muted small"
      }, "(8%)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-group-bars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "success",
        value: "8"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "divider text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "link",
        size: "sm",
        className: "text-muted",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "",
        "data-original-title": "show more"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-options"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        hover: true,
        responsive: true,
        className: "table-outline mb-0 d-none d-sm-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        className: "thead-light"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-people"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "text-center"
      }, "Country"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Usage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "text-center"
      }, "Payment Method"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Activity"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: 'assets/img/avatars/1.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-success"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Yiorgos Avraamu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "New"), " | Registered: Jan 1, 2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "flag-icon flag-icon-us h4 mb-0",
        title: "us",
        id: "us"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "50%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Jun 11, 2015 - Jul 10, 2015"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "success",
        value: "50"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cc-mastercard",
        style: {
          fontSize: 24 + 'px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, "Last login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "10 sec ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: 'assets/img/avatars/2.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-danger"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Avram Tarasios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Recurring"), " | Registered: Jan 1, 2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "flag-icon flag-icon-br h4 mb-0",
        title: "br",
        id: "br"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "10%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Jun 11, 2015 - Jul 10, 2015"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "10"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cc-visa",
        style: {
          fontSize: 24 + 'px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, "Last login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "5 minutes ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: 'assets/img/avatars/3.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-warning"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Quintin Ed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "New"), " | Registered: Jan 1, 2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "flag-icon flag-icon-in h4 mb-0",
        title: "in",
        id: "in"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "74%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Jun 11, 2015 - Jul 10, 2015"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "warning",
        value: "74"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cc-stripe",
        style: {
          fontSize: 24 + 'px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, "Last login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1 hour ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: 'assets/img/avatars/4.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-secondary"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "En\xE9as Kwadwo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "New"), " | Registered: Jan 1, 2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "flag-icon flag-icon-fr h4 mb-0",
        title: "fr",
        id: "fr"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "98%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Jun 11, 2015 - Jul 10, 2015"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "danger",
        value: "98"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-paypal",
        style: {
          fontSize: 24 + 'px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, "Last login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Last month"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: 'assets/img/avatars/5.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-success"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Agapetus Tade\xE1\u0161"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "New"), " | Registered: Jan 1, 2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "flag-icon flag-icon-es h4 mb-0",
        title: "es",
        id: "es"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "22%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Jun 11, 2015 - Jul 10, 2015"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "info",
        value: "22"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-wallet",
        style: {
          fontSize: 24 + 'px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, "Last login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Last week"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: 'assets/img/avatars/6.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "avatar-status badge-danger"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Friderik D\xE1vid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "New"), " | Registered: Jan 1, 2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "flag-icon flag-icon-pl h4 mb-0",
        title: "pl",
        id: "pl"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "43%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text-muted"
      }, "Jun 11, 2015 - Jul 10, 2015"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
        className: "progress-xs",
        color: "success",
        value: "43"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cc-amex",
        style: {
          fontSize: 24 + 'px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small text-muted"
      }, "Last login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Yesterday"))))))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

}]);