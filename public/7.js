(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-".concat(props.status),
    dangerouslySetInnerHTML: {
      __html: props.title
    }
  });
}

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/UsersList/User.js":
/*!**************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/UsersList/User.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Message */ "./resources/js/ReactFiles/components/admin/views/Message.js");
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/Auth */ "./resources/js/ReactFiles/components/services/Auth.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function User(props) {
  var baseUrl = "http://127.0.0.1:8000/api"; // const userActiveTogglerUrl  = process.env.MIX_USERS_ACTIVE_TOGGLER;
  // const deleteUserAllPostsUrl  = process.env.MIX_USERS_DELETE_ALL_POSTS;

  var userActiveTogglerUrl = "/users-active-admin";
  var deleteUserAllPostsUrl = "/users-post-delete-admin";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      postsDeleted = _useState6[0],
      setPostsDeleted = _useState6[1];

  var handleActiveToggler = function handleActiveToggler(e) {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      url: baseUrl + userActiveTogglerUrl,
      method: "POST",
      headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_3__["JWTHeader"])().headers,
      data: {
        id: props.item.id
      }
    }).then(function (res) {
      props.updateList();
    })["catch"](function (e) {
      return console.log(e);
    });
  };

  var handlePostDelete = function handlePostDelete() {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      url: baseUrl + deleteUserAllPostsUrl,
      method: "POST",
      headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_3__["JWTHeader"])().headers,
      data: {
        id: props.item.id
      }
    }).then(function (res) {
      return setPostsDeleted(true);
    })["catch"](function (e) {
      return console.log(e);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, message ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: message,
    status: status,
    setMessage: setMessage
  }) : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: props.item.id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, props.item.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    scope: "row"
  }, props.item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.item.phonenumber), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.item.is_admin), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.item.active), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.item.phonenumber_verified_at ? "true" : "flase"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, new Date(Date.parse(props.item.created_at)).toUTCString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, new Date(Date.parse(props.item.updated_at)).toUTCString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-flex flex-column align-items-center justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-".concat(props.item.active ? "danger" : "success", " my-1 font4"),
    onClick: function onClick(e) {
      return handleActiveToggler(e);
    }
  }, props.item.active ? "Deactive" : "Active", " User"), postsDeleted ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-info my-1 font4"
  }, "All Posts Deleted") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-dark my-1 font4",
    onClick: function onClick(e) {
      return handlePostDelete(e);
    }
  }, "Delete User's Posts"))));
}

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/UsersList/index.js":
/*!***************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/UsersList/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/Auth */ "./resources/js/ReactFiles/components/services/Auth.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./resources/js/ReactFiles/components/admin/views/UsersList/User.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function index() {
  var baseUrl = "http://127.0.0.1:8000/api"; // const userAdminUrl = process.env.MIX_USERS_ADMIN;

  var userAdminUrl = "/users-admin";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _updateList = function updateList(e) {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      url: baseUrl + userAdminUrl,
      method: "GET",
      headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_2__["JWTHeader"])().headers
    }).then(function (res) {
      console.log(res);
      setUsers(res.data);
    })["catch"](function (e) {
      return console.log(e);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      url: baseUrl + userAdminUrl,
      method: "GET",
      headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_2__["JWTHeader"])().headers
    }).then(function (res) {
      console.log(res);
      setUsers(res.data);
    })["catch"](function (e) {
      return console.log(e);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-user"
  }), "Users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    responsive: true,
    hover: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "phonenumber"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "is_admin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Active"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Verified"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "created_at"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "updated_at"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, users.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      item: item,
      updateList: function updateList(e) {
        return _updateList(e);
      }
    });
  })))));
}

/***/ })

}]);