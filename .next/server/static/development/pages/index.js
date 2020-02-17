module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Container = props => {
  return __jsx("div", {
    id: "main-container",
    className: "jsx-2626450567",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.children, __jsx(react_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: props.img,
    className: "animated fadeIn",
    loader: __jsx("div", {
      className: "jsx-2626450567" + " " + "loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, __jsx("img", {
      src: "http://etabrizi.co.uk/spinner.gif",
      className: "jsx-2626450567",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    })),
    decode: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2626450567",
    __self: undefined
  }, ".loading{width:100%;font-size:40px;text-align:center;margin-top:0;}#main-container{width:700px;margin:0 auto;position:relative;}img{width:100%;position:relative;}#main-container:after{content:'';display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:rgb(255,255,255);background:linear-gradient(180deg,rgba(255,255,255,0) 74%,rgba(255,255,255,1) 94%,rgba(255,255,255,1) 100%);}@media only screen and (max-width:767px){#main-container{width:100%;margin:0 auto;min-height:800px;position:relative;}.loading{width:100%;font-size:40px;text-align:right;margin-top:0;}#main-container:after{background:rgb(255,255,255);background:linear-gradient(180deg,rgba(255,255,255,0) 20%,rgba(255,255,255,1) 45%,rgba(255,255,255,1) 100%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvY29tcG9uZW50cy9jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0IrQixBQUc4QixBQUNPLEFBQ1osQUFFRixBQWFTLEFBQ04sQUFFVyxXQXBCUyxBQUVILEFBR2pCLEFBWXFCLEFBQ0wsQ0FqQlUsYUFLckIsQUFXa0MsQ0FqQkEsQUFDSyxBQWlCVixFQUc0RCxDQW5CNUUsYUFldUMsQ0FWakUsQUFXd0QsQ0FsQkssQUFDUixLQU9wRCxPQUNJLEFBU29ELENBbEJLLEdBaUJJLE9BUDNELFlBQ2dCLDRCQUNtRiw2QkFVdkgsK0VBVEkiLCJmaWxlIjoiL1VzZXJzL2VteXJ0YWJyaXppL0Rlc2t0b3AvR3ltc2hhcmsgL2FwcC9leGVyY2lzZS9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1nIGZyb20gJ3JlYWN0LWltYWdlJ1xuXG5cbmNvbnN0IENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPEltZyBzcmM9e3Byb3BzLmltZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5cIlxuICAgICAgICAgICAgICAgIGxvYWRlcj17PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PGltZyBzcmM9XCJodHRwOi8vZXRhYnJpemkuY28udWsvc3Bpbm5lci5naWZcIiAvPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICBkZWNvZGU9e2ZhbHNlfSAvPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBcbiAgICAgICAgLmxvYWRpbmcgeyB3aWR0aDogMTAwJTsgZm9udC1zaXplOiA0MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDA7IH1cbiAgICAgICAgI21haW4tY29udGFpbmVyIHt3aWR0aDogNzAwcHg7IG1hcmdpbjogMCBhdXRvOyBwb3NpdGlvbjpyZWxhdGl2ZTsgfVxuICAgICAgICBpbWcgeyB3aWR0aDogMTAwJTsgcG9zaXRpb246cmVsYXRpdmU7fVxuICAgICAgICAjbWFpbi1jb250YWluZXI6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDonJzsgXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrOyBcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICB0b3A6MDsgXG4gICAgICAgICAgICBsZWZ0OjA7IFxuICAgICAgICAgICAgd2lkdGg6MTAwJTsgXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSA3NCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgOTQlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICAgICAgICB9XG5cbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBcbiAgICAjbWFpbi1jb250YWluZXIge3dpZHRoOiAxMDAlOyBtYXJnaW46IDAgYXV0bzsgbWluLWhlaWdodDogODAwcHg7IHBvc2l0aW9uOnJlbGF0aXZlO31cbiAgICAubG9hZGluZyB7IHdpZHRoOiAxMDAlOyBmb250LXNpemU6IDQwcHg7IHRleHQtYWxpZ246IHJpZ2h0OyBtYXJnaW4tdG9wOiAwOyB9XG4gICAgI21haW4tY29udGFpbmVyOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAyMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNDUlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICAgIH1cbiAgIH0gXG4gICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/container.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/controls.js":
/*!********************************!*\
  !*** ./components/controls.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/controls.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Controls = ({
  counterDecrease,
  counterIncrease,
  toggleInfo,
  gender,
  toggleGender,
  infoToggle,
  searchToggle,
  toggleSearch,
  closeAll
}) => {
  return __jsx("nav", {
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-392105289" + " " + (((infoToggle && searchToggle) === true ? '' : 'shift') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: counterDecrease,
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-392105289" + " " + "icon-circle-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))), __jsx("li", {
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: counterIncrease,
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-392105289" + " " + "icon-circle-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }))), __jsx("li", {
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: toggleGender,
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-392105289" + " " + ((gender ? 'icon-male1' : 'icon-female1') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))), __jsx("li", {
    className: "jsx-392105289" + " " + (((infoToggle && searchToggle) === true ? '' : 'hide') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: toggleInfo,
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-392105289" + " " + "icon-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("li", {
    className: "jsx-392105289" + " " + (((infoToggle && searchToggle) === true ? '' : 'hide') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: toggleSearch,
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-392105289" + " " + "icon-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))), __jsx("li", {
    onClick: closeAll,
    className: "jsx-392105289" + " " + (((infoToggle && searchToggle) === true ? 'hide' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-392105289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-392105289" + " " + "icon-cancel-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "392105289",
    __self: undefined
  }, "nav.jsx-392105289{width:100%;-webkit-transition:all 0.7s;transition:all 0.7s;padding-top:10px;position:absolute;top:0;left:0;z-index:100;}nav.jsx-392105289:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}ul.jsx-392105289{margin:0 0 0 20px;padding:0;list-style:none;text-align:center;-webkit-transition:all 0.2s;transition:all 0.2s;}li.jsx-392105289{display:inline-block;}.shift.jsx-392105289{margin-left:-250px;}a.jsx-392105289{font-size:60px;color:#000;-webkit-text-decoration:none;text-decoration:none;margin-right:20px;}a.jsx-392105289:hover{border-bottom:6px solid #2D2D2D;}@media only screen and (max-width:767px){ul.jsx-392105289{text-align:left;}li.jsx-392105289{display:block;}.shift.jsx-392105289{margin-left:20px;}nav.jsx-392105289:hover{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}a.jsx-392105289:hover{border-bottom:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvY29tcG9uZW50cy9jb250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QndCLEFBSXlCLEFBVVUsQUFJTCxBQVFHLEFBSUQsQUFJSixBQU9pQixBQU9wQixBQUlILEFBSUksQUFJRSxBQUlBLFdBM0RNLEdBZ0Q3QixDQWxCbUIsQ0FjbkIsQ0FRQSxDQXRDaUIsQ0FZYixBQWtDSixFQXRDSSxLQVN5QixFQWhCTCxJQXNCcEIsWUFyQnNCLGVBZkEsR0FnQkUsT0F1QzNCLE9BdEQwQixBQThCRixFQXRCcEIsZ0JBUFUsQUE4QlgsTUE3QlcsT0FDTSxHQWFqQixTQVpDIiwiZmlsZSI6Ii9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvY29tcG9uZW50cy9jb250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjb3VudGVyRGVjcmVhc2U6IChTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQsXG4gICAgY291bnRlckluY3JlYXNlOiAoU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIHRvZ2dsZUluZm86IChTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQsXG4gICAgZ2VuZGVyOiBzdHJpbmcsXG4gICAgdG9nZ2xlR2VuZGVyOiAoU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIGluZm9Ub2dnbGU6IGJvb2xlYW4sXG4gICAgc2VhcmNoVG9nZ2xlOiBib29sZWFuLFxuICAgIHRvZ2dsZVNlYXJjaDogYm9vbGVhbixcbiAgICBjbG9zZUFsbDogKFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZFxufVxuXG5jb25zdCBDb250cm9scyA9ICh7IGNvdW50ZXJEZWNyZWFzZSwgY291bnRlckluY3JlYXNlLCB0b2dnbGVJbmZvLCBnZW5kZXIsIHRvZ2dsZUdlbmRlciwgaW5mb1RvZ2dsZSwgc2VhcmNoVG9nZ2xlLCB0b2dnbGVTZWFyY2gsIGNsb3NlQWxsIH06IFByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17KGluZm9Ub2dnbGUgJiYgc2VhcmNoVG9nZ2xlKSA9PT0gdHJ1ZSA/ICcnIDogJ3NoaWZ0J30+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17Y291bnRlckRlY3JlYXNlfT48c3BhbiBjbGFzc05hbWU9XCJpY29uLWNpcmNsZS1sZWZ0XCI+PC9zcGFuPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e2NvdW50ZXJJbmNyZWFzZX0+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1jaXJjbGUtcmlnaHRcIj48L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dG9nZ2xlR2VuZGVyfT48c3BhbiBjbGFzc05hbWU9e2dlbmRlciA/ICdpY29uLW1hbGUxJyA6ICdpY29uLWZlbWFsZTEnfT48L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KGluZm9Ub2dnbGUgJiYgc2VhcmNoVG9nZ2xlKSA9PT0gdHJ1ZSA/ICcnIDogJ2hpZGUnfT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RvZ2dsZUluZm99PjxzcGFuIGNsYXNzTmFtZT1cImljb24taW5mb1wiPjwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsoaW5mb1RvZ2dsZSAmJiBzZWFyY2hUb2dnbGUpID09PSB0cnVlID8gJycgOiAnaGlkZSd9PjxhIGhyZWY9XCIjXCIgb25DbGljaz17dG9nZ2xlU2VhcmNofT48c3BhbiBjbGFzc05hbWU9XCJpY29uLXNlYXJjaFwiPjwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsoaW5mb1RvZ2dsZSAmJiBzZWFyY2hUb2dnbGUpID09PSB0cnVlID8gJ2hpZGUnIDogJyd9IG9uQ2xpY2s9e2Nsb3NlQWxsfT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImljb24tY2FuY2VsLWNpcmNsZVwiPjwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcbiAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICB9ICAgXG5cbiAgICAgICAgIG5hdjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOjAgMCAwIDIwcHg7IFxuICAgICAgICAgICAgcGFkZGluZzowOyBcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNoaWZ0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjMkQyRDJEO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgXG4gICAgdWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICB9XG5cbiAgICAuc2hpZnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICBuYXY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICB9XG5cbiAgICAgYTpob3ZlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICAgIFxuXG4gICB9IFxuICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9scztcblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/controls.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./components/exercise.js":
/*!********************************!*\
  !*** ./components/exercise.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/exercise.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Exercise = ({
  transcript,
  infoToggle,
  title
}) => {
  return __jsx("div", {
    className: "jsx-2431219986" + " " + ((infoToggle ? 'open' : 'closed') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-2431219986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, title), html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(transcript), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2431219986",
    __self: undefined
  }, "h3.jsx-2431219986{padding:0;margin:10px 0 20px 0;}div.jsx-2431219986{background:black;color:white;padding:10px 20px;height:100%;position:absolute;width:40%;opactiy:0.7;-webkit-transition:all 0.5s;transition:all 0.5s;z-index:1;overflow-y:scroll;}.open.jsx-2431219986{right:-1000px;display:none;}.closed.jsx-2431219986{right:0;}@media only screen and (max-width:767px){div.jsx-2431219986{width:66.5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvY29tcG9uZW50cy9leGVyY2lzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQndCLEFBSXNCLEFBS1EsQUFhSCxBQUtOLEFBTUEsUUFMWixFQXZCd0IsRUE2QjVCLEVBWHFCLEdBYkQsVUFjaEIsRUFic0IsRUFMdEIsZ0JBTWdCLFlBQ00sa0JBQ1IsVUFDRSxZQUNRLGdEQUNWLFVBQ1Esa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvY29tcG9uZW50cy9leGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgdHJhbnNjcmlwdDogc3RyaW5nLFxuICAgIGluZm9Ub2dnbGU6IHZvaWQsXG4gICAgdGl0bGU6IHN0cmluZ1xufVxuXG5cbmNvbnN0IEV4ZXJjaXNlID0gKHsgdHJhbnNjcmlwdCwgaW5mb1RvZ2dsZSwgdGl0bGUgfTogUHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmZvVG9nZ2xlID8gJ29wZW4nIDogJ2Nsb3NlZCd9PlxuICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAge3BhcnNlKHRyYW5zY3JpcHQpfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgbWFyZ2luOjEwcHggMCAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgb3BhY3RpeTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgLm9wZW4ge1xuICAgICAgICAgICAgcmlnaHQ6IC0xMDAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlZCB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgXG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDY2LjUlO1xuICAgIH1cbiAgIFxuICAgIFxuXG4gICB9IFxuICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGVyY2lzZTtcblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/exercise.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Exercise);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("meta", {
  charSet: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.title || ''), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  sizes: "192x192",
  href: "/public/touch-icon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon",
  href: "/public/touch-icon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("link", {
  rel: "mask-icon",
  href: "/static/favicon-mask.svg",
  color: "#49B882",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  href: "/static/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/css/normalise.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/css/style.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Arimo&display=swap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:title",
  content: props.title || '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image:height",
  content: "630",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/heading.js":
/*!*******************************!*\
  !*** ./components/heading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typist */ "react-typist");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/heading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Heading = ({
  title,
  infoToggle,
  searchToggle
}) => {
  return __jsx("div", {
    className: "jsx-3648482963" + " " + ((infoToggle && searchToggle ? 'show ' : ' hide ') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(react_typist__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-3648482963",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3648482963",
    __self: undefined
  }, "h2.jsx-3648482963{font-size:60px;position:absolute;top:auto;left:20px;margin:0;-webkit-transisiton:all 2s;transisiton:all 2s;z-index:100;width:auto;bottom:20px;}@media only screen and (max-width:767px){h2.jsx-3648482963{font-size:40px;position:absolute;top:440px;left:20px;margin:0;-webkit-transisiton:all 2s;transisiton:all 2s;z-index:100;width:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvY29tcG9uZW50cy9oZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCd0IsQUFJZ0MsQUFjQSxlQWJHLEFBY0Esa0JBYlQsQUFjQyxTQWJBLENBY0EsU0FiRCxDQWNBLFFBYlUsQ0FjQSw2Q0FiUCxDQWNBLFdBYkQsQ0FjQyxVQWJBLEVBY2hCLFVBYkEiLCJmaWxlIjoiL1VzZXJzL2VteXJ0YWJyaXppL0Rlc2t0b3AvR3ltc2hhcmsgL2FwcC9leGVyY2lzZS9jb21wb25lbnRzL2hlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwaXN0IGZyb20gJ3JlYWN0LXR5cGlzdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBpbmZvVG9nZ2xlOiBib29sZWFuLFxuICAgIHNlYXJjaFRvZ2dsZTogYm9vbGVhblxufVxuXG5cbmNvbnN0IEhlYWRpbmcgPSAoeyB0aXRsZSwgaW5mb1RvZ2dsZSwgc2VhcmNoVG9nZ2xlIH06IFByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KGluZm9Ub2dnbGUgJiYgc2VhcmNoVG9nZ2xlKSA/ICdzaG93ICcgOiAnIGhpZGUgJ30+XG4gICAgICAgICAgICA8VHlwaXN0IGtleT17dGl0bGV9PjxoMj57dGl0bGV9PC9oMj48L1R5cGlzdD5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpc2l0b246IGFsbCAycztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNDQwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpc2l0b246IGFsbCAycztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICB9IFxuICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2ID5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/heading.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/mainApp.js":
/*!*******************************!*\
  !*** ./components/mainApp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exercise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise */ "./components/exercise.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./components/search.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heading */ "./components/heading.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./components/controls.js");
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/mainApp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MainApp extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      work: this.props.work.exercises,
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

    _defineProperty(this, "toggleGender", event => {
      event.preventDefault();
      this.setState({
        gender: !this.state.gender
      });
    });

    _defineProperty(this, "closeAll", event => {
      event.preventDefault();
      this.setState({
        searchToggle: true,
        infoToggle: true
      });
    });

    _defineProperty(this, "toggleSearch", event => {
      event.preventDefault();
      this.setState({
        searchToggle: false,
        infoToggle: true
      });
    });

    _defineProperty(this, "toggleInfo", event => {
      event.preventDefault();
      this.setState({
        searchToggle: true,
        infoToggle: false
      });
    });

    _defineProperty(this, "counterIncrease", event => {
      event.preventDefault();
      this.setState({
        userSearchActive: false
      });

      if (this.state.counter === this.state.work.length - 1) {
        this.setState({
          counter: 0
        });
      } else {
        this.setState({
          counter: this.state.counter + 1
        });
      }
    });

    _defineProperty(this, "counterDecrease", event => {
      event.preventDefault();

      if (this.state.counter === 0) {
        this.setState({
          counter: this.state.work.length - 1
        });
      } else {
        this.setState({
          counter: this.state.counter - 1
        });
      }
    });

    _defineProperty(this, "getSearchValue", event => {
      var search = event.target.value;
      this.setState({
        searchTerm: search
      });
    });

    _defineProperty(this, "updateCard", event => {
      var exerciseSelected = event.currentTarget.innerHTML;
      var userSearch = this.state.work.filter(item => {
        return item.name === exerciseSelected;
      });

      if (userSearch) {
        this.setState({
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
  }

  render() {
    const error = this.state.step === 'error' ? __jsx("p", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, " Sorry, the application is offline") : '';
    const app = this.state.step === 'start' ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx(_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        lineNumber: 138
      },
      __self: this
    }), __jsx(_exercise__WEBPACK_IMPORTED_MODULE_1__["default"], {
      transcript: this.state.userSearchActive ? this.state.userSearchFound.transcript : this.state.work[this.state.counter].transcript,
      infoToggle: this.state.infoToggle,
      title: this.state.userSearchActive ? this.state.userSearchFound.name : this.state.work[this.state.counter].name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), __jsx(_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }), __jsx(_heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      searchToggle: this.state.searchToggle,
      infoToggle: this.state.infoToggle,
      title: this.state.userSearchActive ? this.state.userSearchFound.name : this.state.work[this.state.counter].name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    })) : __jsx("p", {
      className: "loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "..Loading..");
    return __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      excercises: this.state.work,
      searchToggle: this.state.searchToggle,
      infoToggle: this.state.infoToggle,
      img: this.state.userSearchActive ? this.state.userSearchFound[this.state.gender ? 'male' : 'female'].image : this.state.work[this.state.counter][this.state.gender ? 'male' : 'female'].image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, this.state.step === 'start' && app);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainApp);

/***/ }),

/***/ "./components/search.js":
/*!******************************!*\
  !*** ./components/search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Search = ({
  excercises,
  searchTerm,
  getSearchValue,
  updateCard,
  searchToggle
}) => {
  let fullList = excercises.map(function (item, i) {
    return item.name;
  }, undefined);
  let searchResults = fullList.filter(item => {
    return item.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  return __jsx("div", {
    className: "jsx-583777132" + " " + ((searchToggle ? 'open' : 'closed') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("input", {
    type: "search",
    onChange: getSearchValue,
    placeholder: "Search for your workout . . . ",
    className: "jsx-583777132",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), searchResults.length <= 10 ? searchResults.map(function (item, i) {
    return __jsx("a", {
      key: i,
      href: "#",
      onClick: updateCard,
      className: "jsx-583777132" + " " + "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item);
  }) : '', __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "583777132",
    __self: undefined
  }, "h3.jsx-583777132{padding:0;margin:10px 0 20px 0;}div.jsx-583777132{background:black;color:white;padding:10px 20px;height:100%;position:absolute;width:40%;opactiy:0.7;-webkit-transition:all 0.5s;transition:all 0.5s;z-index:1000;overflow-y:scroll;}.open.jsx-583777132{right:-1000px;display:none;}.closed.jsx-583777132{right:0;}input.jsx-583777132{width:100%;padding:20px;border:2px solid #fff;background:#000;color:#fff;outline:none;}a.jsx-583777132{display:block;color:#fff;padding:30px 10px;border-bottom:1px solid #fff;-webkit-text-decoration:none;text-decoration:none;}a.jsx-583777132:hover{background:#0F0F0F;}@media only screen and (max-width:767px){div.jsx-583777132{width:66.5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvY29tcG9uZW50cy9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJ3QixBQUlzQixBQUtRLEFBYUgsQUFLTixBQUtHLEFBU0QsQUFRUyxBQU1YLFFBMUJaLEVBeEJ3QixDQTRCUCxDQXVCckIsRUFqQ3FCLEFBbUJOLEdBaENLLEVBd0NoQixLQWhCMEIsQ0FTUixFQW5CbEIsRUFic0IsRUFMdEIsWUFzQzZCLEdBVFQsQ0F2QkosWUFDTSxHQXVCUCxVQVNNLENBUkosSUF2QkgsU0F3QmQsQ0F2QmdCLFlBQ1EsdUJBOEJ4Qix5QkE3QmlCLGFBQ0ssa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvY29tcG9uZW50cy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgZXhjZXJjaXNlczogQXJyYXk8ZXhlcmNpc2VzPixcbiAgICBzZWFyY2hUZXJtOiBzdHJpbmcsXG4gICAgZ2V0U2VhcmNoVmFsdWU6IChTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQsXG4gICAgdXBkYXRlQ2FyZDogKFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZCxcbiAgICBzZWFyY2hUb2dnbGU6IChTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWRcbn1cblxuY29uc3QgU2VhcmNoID0gKHsgZXhjZXJjaXNlcywgc2VhcmNoVGVybSwgZ2V0U2VhcmNoVmFsdWUsIHVwZGF0ZUNhcmQsIHNlYXJjaFRvZ2dsZSB9OiBQcm9wcykgPT4ge1xuXG4gICAgbGV0IGZ1bGxMaXN0ID0gZXhjZXJjaXNlcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZVxuICAgIH0sIHRoaXMpO1xuXG4gICAgbGV0IHNlYXJjaFJlc3VsdHMgPSBmdWxsTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlYXJjaFRvZ2dsZSA/ICdvcGVuJyA6ICdjbG9zZWQnfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgb25DaGFuZ2U9e2dldFNlYXJjaFZhbHVlfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgeW91ciB3b3Jrb3V0IC4gLiAuIFwiIC8+XG4gICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPD0gMTAgPyBzZWFyY2hSZXN1bHRzLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJcIiBrZXk9e2l9IGhyZWY9XCIjXCIgb25DbGljaz17dXBkYXRlQ2FyZH0+e2l0ZW19PC9hPlxuICAgICAgICAgICAgfSkgOiAnJ31cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDAgMjBweCAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgb3BhY3RpeTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgLm9wZW4ge1xuICAgICAgICAgICAgcmlnaHQ6IC0xMDAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlZCB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH0gICAgXG5cbiAgICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMzBweCAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEYwRjBGOyBcbiAgICAgICAgfVxuXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIFxuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiA2Ni41JTtcbiAgICB9XG5cbiAgIH0gXG4gICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/components/search.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_mainApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/mainApp */ "./components/mainApp.js");
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];





const Index = props => __jsx("div", {
  className: "jsx-247033640",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Gymshark - App",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx(_components_mainApp__WEBPACK_IMPORTED_MODULE_4__["default"], {
  work: props.work,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "247033640",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCIiwiZmlsZSI6Ii9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9hcHAvZXhlcmNpc2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnXG5pbXBvcnQgTWFpbkFwcCBmcm9tICcuLi9jb21wb25lbnRzL21haW5BcHAnXG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIHRpdGxlPVwiR3ltc2hhcmsgLSBBcHBcIiAvPlxuICAgIDxNYWluQXBwIHdvcms9e3Byb3BzLndvcmt9IC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXYgPlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcHJpdmF0ZS05MjJkNzUtcmVjcnVpdG1lbnR0ZWNobmljYWx0ZXN0LmFwaWFyeS1tb2NrLmNvbS9jdXN0b21leGVyY2lzZXMvJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgd29yazogZGF0YVxuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /app/exercise/pages/index.js */"));

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/');
  const data = await res.json();
  return {
    work: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emyrtabrizi/Desktop/Gymshark /app/exercise/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "react-typist":
/*!*******************************!*\
  !*** external "react-typist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map