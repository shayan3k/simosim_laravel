(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/ReactFiles/components/admin/views/Advertisers/Advertiser.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Advertisers/Advertiser.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Advertiser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/Auth */ "./resources/js/ReactFiles/components/services/Auth.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Message */ "./resources/js/ReactFiles/components/admin/views/Message.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Advertiser(props) {
  var handleDeleteItem = props.handleDeleteItem;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      _setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.item.name),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.item.shopname),
      _useState8 = _slicedToArray(_useState7, 2),
      shopname = _useState8[0],
      setShopname = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.item.phonenumbers),
      _useState10 = _slicedToArray(_useState9, 2),
      phonenumbers = _useState10[0],
      setPhonenumbers = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.item.contactnumbers),
      _useState12 = _slicedToArray(_useState11, 2),
      contactnumbers = _useState12[0],
      setContactnumbers = _useState12[1];

  var handleDeleteBtn =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var id, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(props.item.id, e);
              id = props.item.id;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                url: props.baseUrl + props.advertisersUrl,
                data: {
                  id: id
                },
                headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_2__["JWTHeader"])().headers,
                method: "DELETE"
              }).then(function (res) {
                return console.log(res);
              })["catch"](function (e) {
                _setMessage(e.response.data.message);

                setStatus("danger");
              });

            case 4:
              res = _context.sent;
              handleDeleteItem(id);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDeleteBtn(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleUpdateBtn =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var id, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = props.item.id;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                url: props.baseUrl + props.advertisersUrl,
                data: {
                  id: id,
                  name: name,
                  shopname: shopname,
                  phonenumbers: phonenumbers,
                  contactnumbers: contactnumbers
                },
                headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_2__["JWTHeader"])().headers,
                method: "POST"
              }).then(function (res) {
                _setMessage("Update was successful");

                setStatus("success");
              })["catch"](function (e) {
                _setMessage(e.response.data.message);

                setStatus("danger");
              });

            case 3:
              res = _context2.sent;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleUpdateBtn() {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border rounded my-4 p-3 bg-admin-advertisers"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "name"
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "name",
    id: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "shopname"
  }, "Shop Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "shopname",
    id: "shopname",
    value: shopname,
    onChange: function onChange(e) {
      return setShopname(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "phonenumbers"
  }, "Phone Numbers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "form-control",
    type: "text",
    name: "phonenumbers",
    id: "phonenumbers",
    value: phonenumbers,
    onChange: function onChange(e) {
      return setPhonenumbers(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "contactnumbers"
  }, "Contact Number"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    type: "text",
    className: "form-control",
    name: "contactnumbers",
    id: "contactnumbers",
    value: contactnumbers,
    onChange: function onChange(e) {
      return setContactnumbers(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "btn btn-outline-danger btn-lg mx-5 ml-auto",
    onClick: handleDeleteBtn
  }, "Delete"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "btn btn-outline-primary btn-lg mx-5",
    onClick: handleUpdateBtn
  }, "Update")), message ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: message,
    status: status,
    setMessage: function setMessage(text) {
      return _setMessage(text);
    }
  }) : "");
}

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Advertisers/NewAdvertiser.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Advertisers/NewAdvertiser.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewAdvertiser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/Auth */ "./resources/js/ReactFiles/components/services/Auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function NewAdvertiser(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      shopname = _useState4[0],
      setShopname = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      phonenumbers = _useState6[0],
      setPhonenumbers = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      contactnumbers = _useState8[0],
      setContactnumbers = _useState8[1];

  var handleOnSubmitBtn =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var errorMessage, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              errorMessage = "";
              if (name == "") errorMessage += "<li>Name can not be Empty</li>";
              if (shopname == "") errorMessage += "<li>Shop Name can not be Empty</li>";
              if (phonenumbers == "") errorMessage += "<li>Phone Numbers can not be Empty</li>";
              if (contactnumbers == "") errorMessage += "<li>Contact Numbers can not be Empty</li>";

              if (!(errorMessage == "")) {
                _context.next = 12;
                break;
              }

              //converting string to array for storage
              console.log(phonenumbers, _typeof(phonenumbers)); // var phonenumbersArray = phonenumbers.split(",");
              // phonenumbersArray = Object.values(phonenumbersArray);
              // console.log(phonenumbersArray, typeof phonenumbersArray);

              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                url: props.baseUrl + props.advertisersNewUrl,
                data: {
                  name: name,
                  shopname: shopname,
                  phonenumbers: phonenumbers,
                  contactnumbers: contactnumbers
                },
                headers: Object(_services_Auth__WEBPACK_IMPORTED_MODULE_2__["JWTHeader"])().headers,
                method: "POST"
              }).then(function (res) {
                props.setMessage("Item has been created");
                props.setStatus("success");
                console.log(res);
                props.handleNewAdvertiser(res.data);
              })["catch"](function (e) {
                props.setMessage(e);
                props.setStatus("danger");
                console.log(e.response);
              });

            case 9:
              res = _context.sent;
              _context.next = 15;
              break;

            case 12:
              props.setMessage(errorMessage);
              props.setStatus("danger");
              console.log("ekfnbeljgbfelkjgb", errorMessage);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOnSubmitBtn() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border rounded my-4 p-3 bg-info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "name"
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "name",
    id: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "shopname"
  }, "Shop Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "shopname",
    id: "shopname",
    value: shopname,
    onChange: function onChange(e) {
      return setShopname(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "phonenumbers"
  }, "Phone Numbers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "form-control",
    type: "text",
    name: "phonenumbers",
    id: "phonenumbers",
    value: phonenumbers,
    onChange: function onChange(e) {
      return setPhonenumbers(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "contactnumbers"
  }, "Contact Numbers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    type: "text",
    className: "form-control",
    name: "contactnumbers",
    id: "contactnumbers",
    value: contactnumbers,
    onChange: function onChange(e) {
      return setContactnumbers(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "btn btn-outline-dark btn-lg mx-5",
    onClick: handleOnSubmitBtn
  }, "Create New")));
}

/***/ }),

/***/ "./resources/js/ReactFiles/components/admin/views/Advertisers/index.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/ReactFiles/components/admin/views/Advertisers/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/Auth */ "./resources/js/ReactFiles/components/services/Auth.js");
/* harmony import */ var _Advertiser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Advertiser */ "./resources/js/ReactFiles/components/admin/views/Advertisers/Advertiser.js");
/* harmony import */ var _NewAdvertiser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewAdvertiser */ "./resources/js/ReactFiles/components/admin/views/Advertisers/NewAdvertiser.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function index() {
  var baseUrl = "http://127.0.0.1:8000/api"; // const AdvertisersUrl = process.env.MIX_ADVERTISERS;
  // const advertisersNewUrl = process.env.MIX_ADVERTISERS_NEW;

  var advertisersUrl = "/advertisers";
  var advertisersNewUrl = "/advertisers/create";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      advertisers = _useState2[0],
      setAdvertisers = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(baseUrl + advertisersUrl).then(function (res) {
      //set the values
      setAdvertisers(res.data);
      console.log(res.data);
    })["catch"](function (e) {
      return console.log(e);
    });
  }, []);

  var handleNewAdvertiser = function handleNewAdvertiser(data) {
    setAdvertisers([].concat(_toConsumableArray(advertisers), [data]));
    console.log("jbsfjbsfjb", [].concat(_toConsumableArray(advertisers), [data]));
  };

  var handleDeleteItem = function handleDeleteItem(id) {
    var data = advertisers.filter(function (item) {
      return item.id != id;
    });
    setAdvertisers(data);
    console.log(data, id);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container bg-advertisers"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "my-3 py-4"
  }, "ADVERTISERS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), advertisers ? advertisers.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Advertiser__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      baseUrl: baseUrl,
      advertisersUrl: advertisersUrl,
      handleDeleteItem: handleDeleteItem
    });
  }) : "", console.log(advertisers), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewAdvertiser__WEBPACK_IMPORTED_MODULE_3__["default"], {
    baseUrl: baseUrl,
    advertisersNewUrl: advertisersNewUrl,
    handleNewAdvertiser: handleNewAdvertiser
  })));
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-".concat(props.status),
    dangerouslySetInnerHTML: {
      __html: props.title
    }
  });
}

/***/ })

}]);