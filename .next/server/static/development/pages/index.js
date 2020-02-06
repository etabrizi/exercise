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
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Container = props => {
  return __jsx("div", {
    id: "main-container",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1340660416", [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1340660416",
    dynamic: [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px'],
    __self: undefined
  }, `html{width:100%;height:100%;background:url(${props.img}) no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:${props.infoToggle ? '100%' : '70%'};position:relative;background-position:${props.infoToggle ? '0 -250px' : '-100px 0'};-webkit-transition:all 1s;transition:all 1s;overflow:hidden;}img{visibility:hidden;position:absolute;bottom:-4000px;}@media only screen and (max-width:1024px){html{width:100%;height:100%;background:url(${props.img}) no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;position:relative;-webkit-transition:all 0.7s;background-position:${props.infoToggle ? '0 0' : '-300px 0px'};-webkit-transition:all 1s;transition:all 1s;overflow:hidden;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMrQixBQUl3QixBQWFRLEFBT1osV0FuQkssQUFvQkosT0FSNkIsS0FYc0MsQUFvQkosYUFUbEIsZUFBQywrQ0FWeEIsQUFvQkosOEJBbkJDLEFBb0JKLDJCQW5CRSxBQW9CSix5QkFuQndCLEFBb0IzQixzQkFDSixrQkFDVSxLQXJCTixrQkFDK0IsS0FxQkosNENBcEIzQixLQXFCSix1Q0FwQkUsS0FxQkosV0FwQmhCLEtBcUJKIiwiZmlsZSI6Ii9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBDb250YWluZXIgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBcbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb3BzLmltZ30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7cHJvcHMuaW5mb1RvZ2dsZSA/ICcxMDAlJyA6ICc3MCUnfTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAke3Byb3BzLmluZm9Ub2dnbGUgPyAnMCAtMjUwcHgnIDogJy0xMDBweCAwJ307XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHsgdmlzaWJpbGl0eTogaGlkZGVuOyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOiAtNDAwMHB4O31cblxuICAgICAgICBcblxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBcbiAgICBodG1sIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvcHMuaW1nfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC43cztcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtwcm9wcy5pbmZvVG9nZ2xlID8gJzAgMCcgOiAnLTMwMHB4IDBweCd9O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICB9IFxuICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG5cblxuXG5cblxuIl19 */
/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/container.js */`));
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
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/controls.js";

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
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-782766476" + " " + (((infoToggle && searchToggle) === true ? '' : 'shift') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: counterDecrease,
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-782766476" + " " + "icon-circle-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))), __jsx("li", {
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: counterIncrease,
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-782766476" + " " + "icon-circle-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }))), __jsx("li", {
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: toggleGender,
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-782766476" + " " + ((gender ? 'icon-male1' : 'icon-female1') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))), __jsx("li", {
    className: "jsx-782766476" + " " + (((infoToggle && searchToggle) === true ? '' : 'hide') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: toggleInfo,
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-782766476" + " " + "icon-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("li", {
    className: "jsx-782766476" + " " + (((infoToggle && searchToggle) === true ? '' : 'hide') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: toggleSearch,
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-782766476" + " " + "icon-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))), __jsx("li", {
    onClick: closeAll,
    className: "jsx-782766476" + " " + (((infoToggle && searchToggle) === true ? 'hide' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-782766476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-782766476" + " " + "icon-cancel-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "782766476",
    __self: undefined
  }, "nav.jsx-782766476{width:100%;-webkit-transition:all 0.7s;transition:all 0.7s;padding-top:10px;}nav.jsx-782766476:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}ul.jsx-782766476{margin:0 0 0 20px;padding:0;list-style:none;text-align:center;-webkit-transition:all 0.7s;transition:all 0.7s;}li.jsx-782766476{display:inline-block;}.shift.jsx-782766476{margin-left:-130px;}a.jsx-782766476{font-size:60px;color:#000;-webkit-text-decoration:none;text-decoration:none;margin-right:20px;}a.jsx-782766476:hover{border-bottom:6px solid #2D2D2D;}@media only screen and (max-width:767px){ul.jsx-782766476{text-align:left;}li.jsx-782766476{display:block;}.shift.jsx-782766476{margin-left:20px;}nav.jsx-782766476:hover{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}a.jsx-782766476:hover{border-bottom:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvY29udHJvbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ3QixBQUl5QixBQU1VLEFBSUwsQUFRRyxBQUlELEFBSUosQUFPaUIsQUFPcEIsQUFJSCxBQUlJLEFBSUUsQUFJQSxXQXZETSxHQTRDN0IsQ0FsQm1CLENBY25CLENBUUEsQ0F0Q2lCLENBWWIsQUFrQ0osRUF0Q0ksS0FTeUIsRUFoQkwsSUFzQnBCLFlBckJzQixlQVhBLEdBWUUsT0F1QzNCLE9BbERJLEFBMEJvQixFQXRCcEIsZ0JBdUJELGdCQWZBIiwiZmlsZSI6Ii9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvY29udHJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY291bnRlckRlY3JlYXNlOiAoU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIGNvdW50ZXJJbmNyZWFzZTogKFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZCxcbiAgICB0b2dnbGVJbmZvOiAoU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIGdlbmRlcjogc3RyaW5nLFxuICAgIHRvZ2dsZUdlbmRlcjogKFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZCxcbiAgICBpbmZvVG9nZ2xlOiBib29sZWFuLFxuICAgIHNlYXJjaFRvZ2dsZTogYm9vbGVhbixcbiAgICB0b2dnbGVTZWFyY2g6IGJvb2xlYW4sXG4gICAgY2xvc2VBbGw6IChTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWRcbn1cblxuY29uc3QgQ29udHJvbHMgPSAoeyBjb3VudGVyRGVjcmVhc2UsIGNvdW50ZXJJbmNyZWFzZSwgdG9nZ2xlSW5mbywgZ2VuZGVyLCB0b2dnbGVHZW5kZXIsIGluZm9Ub2dnbGUsIHNlYXJjaFRvZ2dsZSwgdG9nZ2xlU2VhcmNoLCBjbG9zZUFsbCB9OiBQcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9eyhpbmZvVG9nZ2xlICYmIHNlYXJjaFRvZ2dsZSkgPT09IHRydWUgPyAnJyA6ICdzaGlmdCd9PlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e2NvdW50ZXJEZWNyZWFzZX0+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1jaXJjbGUtbGVmdFwiPjwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtjb3VudGVySW5jcmVhc2V9PjxzcGFuIGNsYXNzTmFtZT1cImljb24tY2lyY2xlLXJpZ2h0XCI+PC9zcGFuPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RvZ2dsZUdlbmRlcn0+PHNwYW4gY2xhc3NOYW1lPXtnZW5kZXIgPyAnaWNvbi1tYWxlMScgOiAnaWNvbi1mZW1hbGUxJ30+PC9zcGFuPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhpbmZvVG9nZ2xlICYmIHNlYXJjaFRvZ2dsZSkgPT09IHRydWUgPyAnJyA6ICdoaWRlJ30+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0b2dnbGVJbmZvfT48c3BhbiBjbGFzc05hbWU9XCJpY29uLWluZm9cIj48L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KGluZm9Ub2dnbGUgJiYgc2VhcmNoVG9nZ2xlKSA9PT0gdHJ1ZSA/ICcnIDogJ2hpZGUnfT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RvZ2dsZVNlYXJjaH0+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1zZWFyY2hcIj48L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KGluZm9Ub2dnbGUgJiYgc2VhcmNoVG9nZ2xlKSA9PT0gdHJ1ZSA/ICdoaWRlJyA6ICcnfSBvbkNsaWNrPXtjbG9zZUFsbH0+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJpY29uLWNhbmNlbC1jaXJjbGVcIj48L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XG4gICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICB9ICAgXG5cbiAgICAgICAgIG5hdjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOjAgMCAwIDIwcHg7IFxuICAgICAgICAgICAgcGFkZGluZzowOyBcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNoaWZ0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjMkQyRDJEO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgXG4gICAgdWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICB9XG5cbiAgICAuc2hpZnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICBuYXY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICB9XG5cbiAgICAgYTpob3ZlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICAgIFxuXG4gICB9IFxuICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9scztcblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/controls.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./components/excercise.js":
/*!*********************************!*\
  !*** ./components/excercise.js ***!
  \*********************************/
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
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/excercise.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Excercise = ({
  transcript,
  infoToggle,
  title
}) => {
  return __jsx("div", {
    className: "jsx-466204258" + " " + ((infoToggle ? 'open' : 'closed') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-466204258",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, title), html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(transcript), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "466204258",
    __self: undefined
  }, "h3.jsx-466204258{padding:0;margin:10px 0 20px 0;}div.jsx-466204258{background:black;color:white;padding:10px 20px;height:100%;position:absolute;width:40%;opactiy:0.7;-webkit-transition:all 0.5s;transition:all 0.5s;z-index:1;overflow-y:scroll;}.open.jsx-466204258{right:-1000px;}.closed.jsx-466204258{right:0;}@media only screen and (max-width:767px){div.jsx-466204258{width:70%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvZXhjZXJjaXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCd0IsQUFJc0IsQUFLUSxBQWFILEFBSU4sQUFNRixRQUxWLEVBdEJ3QixBQTRCNUIsSUFWSSxHQWJnQixZQUNNLEVBTHRCLGdCQU1nQixZQUNNLGtCQUNSLFVBQ0UsWUFDUSxnREFDVixVQUNRLGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvZW15cnRhYnJpemkvRGVza3RvcC9HeW1zaGFyayAvZW15ci9teWFwcC9jb21wb25lbnRzL2V4Y2VyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgdHJhbnNjcmlwdDogc3RyaW5nLFxuICAgIGluZm9Ub2dnbGU6IHZvaWQsXG4gICAgdGl0bGU6IHN0cmluZ1xufVxuXG5cbmNvbnN0IEV4Y2VyY2lzZSA9ICh7IHRyYW5zY3JpcHQsIGluZm9Ub2dnbGUsIHRpdGxlIH06IFByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5mb1RvZ2dsZSA/ICdvcGVuJyA6ICdjbG9zZWQnfT5cbiAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgIHtwYXJzZSh0cmFuc2NyaXB0KX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDAgMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIG9wYWN0aXk6IDAuNztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcGVuIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTAwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlZCB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgXG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICBcbiAgICBcblxuICAgfSBcbiAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhjZXJjaXNlO1xuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/excercise.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Excercise);

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
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/head.js";
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
  href: "/static/touch-icon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon",
  href: "/static/touch-icon.png",
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
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:title",
  content: props.title || '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image:height",
  content: "630",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
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
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/heading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Heading = ({
  title,
  infoToggle,
  searchToggle
}) => {
  return __jsx("div", {
    className: "jsx-3962350051" + " " + ((infoToggle && searchToggle ? 'animated fadeIn' : 'animated fadeOut') || ""),
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
    className: "jsx-3962350051",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3962350051",
    __self: undefined
  }, "h2.jsx-3962350051{font-size:75px;position:absolute;bottom:0;left:0;margin:0;-webkit-transisiton:all 2s;transisiton:all 2s;z-index:1;}@media only screen and (max-width:767px){h2.jsx-3962350051{font-size:40px;bottom:20px;left:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvaGVhZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQndCLEFBSWdDLEFBWUEsZUFYRyxBQVlOLFlBQ0YsTUFaRCxJQWFiLEtBWlcsT0FDRSxTQUNVLDhDQUNULFVBQ2QiLCJmaWxlIjoiL1VzZXJzL2VteXJ0YWJyaXppL0Rlc2t0b3AvR3ltc2hhcmsgL2VteXIvbXlhcHAvY29tcG9uZW50cy9oZWFkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9AZmxvd1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFR5cGlzdCBmcm9tICdyZWFjdC10eXBpc3QnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgaW5mb1RvZ2dsZTogYm9vbGVhbixcbiAgICBzZWFyY2hUb2dnbGU6IGJvb2xlYW5cbn1cblxuXG5jb25zdCBIZWFkaW5nID0gKHsgdGl0bGUsIGluZm9Ub2dnbGUsIHNlYXJjaFRvZ2dsZSB9OiBQcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyhpbmZvVG9nZ2xlICYmIHNlYXJjaFRvZ2dsZSkgPyAnYW5pbWF0ZWQgZmFkZUluJyA6ICdhbmltYXRlZCBmYWRlT3V0J30+XG4gICAgICAgICAgICA8VHlwaXN0IGtleT17dGl0bGV9PjxoMj57dGl0bGV9PC9oMj48L1R5cGlzdD5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3NXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpc2l0b246IGFsbCAycztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgXG4gICB9IFxuICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2ID5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/heading.js */"));
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
/* harmony import */ var _excercise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excercise */ "./components/excercise.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./components/search.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heading */ "./components/heading.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./components/controls.js");
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/mainApp.js";
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
    console.log(this.state.work);
    const app = this.state.work.length > 0 ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx(_excercise__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }), __jsx(_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, this.state.step === 'start' && app, this.state.imageStatus);
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
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/search.js";

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
    className: "jsx-1657801056" + " " + ((searchToggle ? 'open' : 'closed') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("input", {
    type: "search",
    onChange: getSearchValue,
    placeholder: "Search for your workout . . . ",
    className: "jsx-1657801056",
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
      className: "jsx-1657801056" + " " + "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item);
  }) : '', __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1657801056",
    __self: undefined
  }, "h3.jsx-1657801056{padding:0;margin:10px 0 20px 0;}div.jsx-1657801056{background:black;color:white;padding:10px 20px;height:100%;position:absolute;width:40%;opactiy:0.7;-webkit-transition:all 0.5s;transition:all 0.5s;z-index:1;overflow-y:scroll;}.open.jsx-1657801056{right:-1000px;}.closed.jsx-1657801056{right:0;}input.jsx-1657801056{width:100%;padding:20px;border:2px solid #fff;background:#000;color:#fff;outline:none;}a.jsx-1657801056{display:block;color:#fff;padding:30px 10px;border-bottom:1px solid #fff;-webkit-text-decoration:none;text-decoration:none;}a.jsx-1657801056:hover{background:#0F0F0F;}@media only screen and (max-width:767px){div.jsx-1657801056{width:70%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCd0IsQUFJc0IsQUFLUSxBQWFILEFBSU4sQUFJRyxBQVNELEFBUVMsQUFNYixRQTFCVixFQXRCd0IsQUFpRDVCLENBdkJxQixHQVJqQixBQWlCVyxHQTlCSyxFQXNDaEIsS0FoQjBCLENBU1IsSUE5QkksRUFMdEIsWUFvQzZCLEdBVFQsQ0FyQkosWUFDTSxHQXFCUCxVQVNNLENBUkosSUFyQkgsU0FzQmQsQ0FyQmdCLFlBQ1EsdUJBNEJ4Qix5QkEzQmMsVUFDUSxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2VteXJ0YWJyaXppL0Rlc2t0b3AvR3ltc2hhcmsgL2VteXIvbXlhcHAvY29tcG9uZW50cy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgZXhjZXJjaXNlczogQXJyYXk8ZXhlcmNpc2VzPixcbiAgICBzZWFyY2hUZXJtOiBzdHJpbmcsXG4gICAgZ2V0U2VhcmNoVmFsdWU6IChTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQsXG4gICAgdXBkYXRlQ2FyZDogKFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZCxcbiAgICBzZWFyY2hUb2dnbGU6IChTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWRcbn1cblxuY29uc3QgU2VhcmNoID0gKHsgZXhjZXJjaXNlcywgc2VhcmNoVGVybSwgZ2V0U2VhcmNoVmFsdWUsIHVwZGF0ZUNhcmQsIHNlYXJjaFRvZ2dsZSB9OiBQcm9wcykgPT4ge1xuXG4gICAgbGV0IGZ1bGxMaXN0ID0gZXhjZXJjaXNlcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZVxuICAgIH0sIHRoaXMpO1xuXG4gICAgbGV0IHNlYXJjaFJlc3VsdHMgPSBmdWxsTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlYXJjaFRvZ2dsZSA/ICdvcGVuJyA6ICdjbG9zZWQnfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgb25DaGFuZ2U9e2dldFNlYXJjaFZhbHVlfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgeW91ciB3b3Jrb3V0IC4gLiAuIFwiIC8+XG4gICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPD0gMTAgPyBzZWFyY2hSZXN1bHRzLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJcIiBrZXk9e2l9IGhyZWY9XCIjXCIgb25DbGljaz17dXBkYXRlQ2FyZH0+e2l0ZW19PC9hPlxuICAgICAgICAgICAgfSkgOiAnJ31cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDAgMjBweCAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgb3BhY3RpeTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgLm9wZW4ge1xuICAgICAgICAgICAgcmlnaHQ6IC0xMDAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2VkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9ICAgIFxuXG4gICAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBGMEYwRjsgXG4gICAgICAgIH1cblxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBcbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cblxuICAgfSBcbiAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/search.js */"));
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
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/pages/index.js";

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
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnQiIsImZpbGUiOiIvVXNlcnMvZW15cnRhYnJpemkvRGVza3RvcC9HeW1zaGFyayAvZW15ci9teWFwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBNYWluQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbkFwcCdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQgdGl0bGU9XCJHeW1zaGFyayAtIEFwcFwiIC8+XG4gICAgPE1haW5BcHAgd29yaz17cHJvcHMud29ya30gLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgYH08L3N0eWxlPlxuICA8L2RpdiA+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wcml2YXRlLTkyMmQ3NS1yZWNydWl0bWVudHRlY2huaWNhbHRlc3QuYXBpYXJ5LW1vY2suY29tL2N1c3RvbWV4ZXJjaXNlcy8nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB3b3JrOiBkYXRhXG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/pages/index.js */"));

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

module.exports = __webpack_require__(/*! /Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/pages/index.js */"./pages/index.js");


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