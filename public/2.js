(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/ReactFiles/components/admin/views/Comments/Comments.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Comments/Comments.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comments; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Message */ "./resources/js/ReactFiles/components/admin/views/Message.js");
/* harmony import */ var react_time_ago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-time-ago */ "./node_modules/react-time-ago/index.js");
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/Auth */ "./resources/js/ReactFiles/components/services/Auth.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Comments(props) {
  var baseUrl = "http://simosim.herokuapp.com/api";
  var commentsUpdateUrl = "/comments/update";
  var commentsDeleteUrl = "/comments/delete";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      _setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      messageStatus = _useState4[0],
      setMessageStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.text),
      _useState6 = _slicedToArray(_useState5, 2),
      text = _useState6[0],
      setText = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.created_at),
      _useState8 = _slicedToArray(_useState7, 2),
      created_at = _useState8[0],
      setCreated_at = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.updated_at),
      _useState10 = _slicedToArray(_useState9, 2),
      updated_at = _useState10[0],
      setUpdated_at = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.advertiement),
      _useState12 = _slicedToArray(_useState11, 2),
      advertiement = _useState12[0],
      setAdvertiement = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.commenter),
      _useState14 = _slicedToArray(_useState13, 2),
      commenter = _useState14[0],
      setCommenter = _useState14[1];

  var handleDeleteBtn = function handleDeleteBtn() {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "DELETE",
      url: baseUrl + commentsDeleteUrl,
      headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_5__["JWTHeader"])().headers,
      data: {
        comment_id: props.id
      }
    }).then(function (res) {
      console.log(res);
      props.setListUpdate(!props.listUpdate);
    })["catch"](function (e) {
      _setMessage(e.response.data.message);

      setMessageStatus("danger");
    });
  };

  var handleUpdateBtn = function handleUpdateBtn() {
    var data = {
      text: text,
      comment_id: props.id
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      url: baseUrl + commentsUpdateUrl,
      method: "POST",
      headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_5__["JWTHeader"])().headers,
      data: data
    }).then(function (res) {
      // console.log(res);
      _setMessage("Update was successful");

      setMessageStatus("success");
      props.setListUpdate(!props.listUpdate);
    })["catch"](function (e) {
      // console.log(e.response);
      _setMessage(e.response.data.message);

      setMessageStatus("danger");
    });
    console.log(data);
  };

  var handlePublishBtn = function handlePublishBtn() {
    var data = {
      approved: !props.approved,
      comment_id: props.id
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      url: baseUrl + commentsUpdateUrl,
      method: "POST",
      headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_5__["JWTHeader"])().headers,
      data: data
    }).then(function (res) {
      // console.log(res);
      _setMessage("Update was successful");

      setMessageStatus("success");
      props.setListUpdate(!props.listUpdate);
    })["catch"](function (e) {
      // console.log(e.response);
      _setMessage(e.response.data.message);

      setMessageStatus("danger");
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container row m-0 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-control"
  }, props.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"], {
    date: created_at ? created_at : "",
    locale: "fa"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-control"
  }, commenter.phonenumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 input-group m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-control"
  }, commenter.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 input-group m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/" + advertiement.phonenumber
  }, "\u0644\u06CC\u0646\u06A9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 input-group m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "form-control",
    maxLength: "200",
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: "\u0628\u0627 \u062D\u0631\u0648\u0641 \u0641\u0627\u0631\u0633\u06CC"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex justify-content-center align-content-center input-group m-0 mt-2 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-".concat(props.approved ? "success" : "info", " mx-1"),
    onClick: function onClick(e) {
      return handlePublishBtn(e);
    }
  }, props.approved ? "published" : "publish")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex justify-content-center align-content-center input-group m-0 mt-2 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger mx-1",
    onClick: function onClick(e) {
      return handleDeleteBtn(e);
    }
  }, "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex justify-content-center align-content-center input-group m-0 mt-2 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-warning mx-1",
    onClick: function onClick(e) {
      return handleUpdateBtn(e);
    }
  }, "Update")), message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: message,
    status: messageStatus,
    setMessage: function setMessage(text) {
      return _setMessage(text);
    }
  }) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "col-12"
  }));
}

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Comments/index.js":
/*!**************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Comments/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/Auth */ "./resources/js/ReactFiles/components/services/Auth.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comments */ "./resources/js/ReactFiles/components/admin/views/Comments/Comments.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function index() {
  var baseUrl = "http://simosim.herokuapp.com/api";
  var commentsAllAdmin = "/comments/show-admin";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      comments = _useState2[0],
      setComments = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currnetPage = _useState4[0],
      setCurrentpage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      listUpdate = _useState6[0],
      setListUpdate = _useState6[1];

  var handlePrevOnClick = function handlePrevOnClick(e) {
    if (currnetPage == 1) return;
    setCurrentpage(currnetPage - 1);
  };

  var handleNextOnClick = function handleNextOnClick(e) {
    setCurrentpage(currnetPage + 1);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getListData();
  }, [currnetPage, listUpdate]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getListData();
  }, []);

  var getListData = function getListData() {
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      url: baseUrl + commentsAllAdmin + "?page=" + currnetPage,
      method: "GET",
      headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_1__["JWTHeader"])().headers
    }).then(function (res) {
      // console.log(res);
      setComments(res.data.data);
    })["catch"](function (e) {
      return console.log(e.response);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "Page navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    "class": "ml-auto pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    "class": "page-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "class": "btn page-link",
    onClick: function onClick(e) {
      return handlePrevOnClick(e);
    },
    style: currnetPage == 1 ? {
      pointerEvents: "none"
    } : null
  }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    "class": "page-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "class": "btn btn-danger"
  }, currnetPage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    "class": "page-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "class": "btn page-link",
    onClick: function onClick(e) {
      return handleNextOnClick(e);
    }
  }, "Next")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row p-0 m-0 mt-3"
  }, comments ? comments.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 p-1  my-4 d-flex justify-content-center align-items-center",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comments__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: item.id,
      text: item.text,
      approved: item.approved,
      created_at: item.created_at,
      updated_at: item.updated_at,
      advertiement: item.advertiement,
      commenter: item.commenter,
      setListUpdate: setListUpdate,
      listUpdate: listUpdate
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-warning"
  }, "No item to show")));
}

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Message.js":
/*!*******************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Message.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Message(props) {
  var setMessage = props.setMessage;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      return setMessage("");
    }, 10000);
    return function () {
      setMessage("");
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-".concat(props.status, " ") + (props.className ? props.className : ""),
    dangerouslySetInnerHTML: {
      __html: props.title
    }
  });
}

/***/ })

}]);