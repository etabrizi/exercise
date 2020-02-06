webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Container = function Container(props) {
  return __jsx("div", {
    id: "main-container",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3056283049", [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3056283049",
    dynamic: [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px'],
    __self: this
  }, "html{width:100%;height:100%;background:url(".concat(props.img, ") no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:").concat(props.infoToggle ? '100%' : '70%', ";position:relative;background-position:").concat(props.infoToggle ? '0 -250px' : '-100px 0', ";-webkit-transition:all 1s;transition:all 1s;overflow:hidden;}img{display:none;}@media only screen and (max-width:1024px){html{width:100%;height:100%;background:url(").concat(props.img, ") no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;position:relative;-webkit-transition:all 0.7s;background-position:").concat(props.infoToggle ? '0 0' : '-300px 0px', ";-webkit-transition:all 1s;transition:all 1s;overflow:hidden;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWErQixBQUl3QixBQWFDLEFBS0wsV0FqQkssQUFrQkosRUFOSyxVQVg4RCxBQWtCSiwyRUFqQnpDLEFBa0JKLDhCQWpCQyxBQWtCSiwyQkFqQkUsQUFrQkoseUJBakJ3QixBQWtCM0Isc0JBQ0osa0JBQ1UsS0FuQk4sa0JBQytCLEtBbUJKLDRDQWxCM0IsS0FtQkosdUNBbEJFLEtBbUJKLFdBbEJoQixLQW1CSiIsImZpbGUiOiIvVXNlcnMvZW15cnRhYnJpemkvRGVza3RvcC9HeW1zaGFyayAvZW15ci9teWFwcC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIj5cblxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBcbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb3BzLmltZ30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7cHJvcHMuaW5mb1RvZ2dsZSA/ICcxMDAlJyA6ICc3MCUnfTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAke3Byb3BzLmluZm9Ub2dnbGUgPyAnMCAtMjUwcHgnIDogJy0xMDBweCAwJ307XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtkaXNwbGF5OiBub25lfVxuXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIFxuICAgIGh0bWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwcm9wcy5pbWd9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjdzO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAke3Byb3BzLmluZm9Ub2dnbGUgPyAnMCAwJyA6ICctMzAwcHggMHB4J307XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgIH0gXG4gICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/container.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/mainApp.js":
/*!*******************************!*\
  !*** ./components/mainApp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _excercise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./excercise */ "./components/excercise.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search */ "./components/search.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./heading */ "./components/heading.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls */ "./components/controls.js");







var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/mainApp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var MainApp =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MainApp, _Component);

  function MainApp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      work: _this.props.work.exercises,
      step: 'start',
      counter: 1,
      gender: true,
      infoToggle: true,
      searchToggle: true,
      searchTerm: '',
      imageStatus: '',
      userSearchActive: false,
      userSearchFound: {
        name: '',
        transcript: '',
        female: '',
        male: ''
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleGender", function (event) {
      event.preventDefault();

      _this.setState({
        gender: !_this.state.gender
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeAll", function (event) {
      event.preventDefault();

      _this.setState({
        searchToggle: true,
        infoToggle: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleSearch", function (event) {
      event.preventDefault();

      _this.setState({
        searchToggle: false,
        infoToggle: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleInfo", function (event) {
      event.preventDefault();

      _this.setState({
        searchToggle: true,
        infoToggle: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "counterIncrease", function (event) {
      event.preventDefault();

      _this.setState({
        userSearchActive: false
      });

      if (_this.state.counter === _this.state.work.length - 1) {
        _this.setState({
          counter: 0
        });
      } else {
        _this.setState({
          counter: _this.state.counter + 1
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "counterDecrease", function (event) {
      event.preventDefault();

      if (_this.state.counter === 0) {
        _this.setState({
          counter: _this.state.work.length - 1
        });
      } else {
        _this.setState({
          counter: _this.state.counter - 1
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getSearchValue", function (event) {
      var search = event.target.value;

      _this.setState({
        searchTerm: search
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateCard", function (event) {
      var exerciseSelected = event.currentTarget.innerHTML;

      var userSearch = _this.state.work.filter(function (item) {
        return item.name === exerciseSelected;
      });

      if (userSearch) {
        _this.setState({
          userSearchActive: true,
          infoToggle: true,
          searchToggle: true,
          userSearchFound: {
            name: userSearch[0].name,
            transcript: userSearch[0].transcript,
            female: {
              image: userSearch[0].female.image
            },
            male: {
              image: userSearch[0].male.image
            }
          }
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainApp, [{
    key: "render",
    value: function render() {
      console.log(this.state.work);
      var app = this.state.work.length > 0 ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx(_excercise__WEBPACK_IMPORTED_MODULE_8__["default"], {
        transcript: this.state.userSearchActive ? this.state.userSearchFound.transcript : this.state.work[this.state.counter].transcript,
        infoToggle: this.state.infoToggle,
        title: this.state.userSearchActive ? this.state.userSearchFound.name : this.state.work[this.state.counter].name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), __jsx(_search__WEBPACK_IMPORTED_MODULE_9__["default"], {
        searchToggle: this.state.searchToggle,
        excercises: this.state.work,
        updateCard: this.updateCard,
        searchTerm: this.state.searchTerm,
        getSearchValue: this.getSearchValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), __jsx(_heading__WEBPACK_IMPORTED_MODULE_11__["default"], {
        searchToggle: this.state.searchToggle,
        infoToggle: this.state.infoToggle,
        title: this.state.userSearchActive ? this.state.userSearchFound.name : this.state.work[this.state.counter].name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), __jsx(_controls__WEBPACK_IMPORTED_MODULE_12__["default"], {
        closeAll: this.closeAll,
        searchToggle: this.state.searchToggle,
        toggleSearch: this.toggleSearch,
        toggleGender: this.toggleGender,
        gender: this.state.gender,
        counterDecrease: this.counterDecrease,
        counterIncrease: this.counterIncrease,
        toggleInfo: this.toggleInfo,
        infoToggle: this.state.infoToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })) : __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Sorry Unable to load application content - Please try again later.");
      return __jsx(_container__WEBPACK_IMPORTED_MODULE_10__["default"], {
        excercises: this.state.work,
        searchToggle: this.state.searchToggle,
        infoToggle: this.state.infoToggle,
        img: this.state.userSearchActive ? this.state.userSearchFound[this.state.gender ? 'male' : 'female'].image : this.state.work[this.state.counter][this.state.gender ? 'male' : 'female'].image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, this.state.step === 'start' && app, this.state.imageStatus);
    }
  }]);

  return MainApp;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainApp);

/***/ })

})
//# sourceMappingURL=index.js.32b326227b32f0e4ba48.hot-update.js.map