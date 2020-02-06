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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Container = function Container(props) {
  var image = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    tl.to(image, 1.4, {
      scale: 1.6,
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
    });
  });
  return __jsx("div", {
    id: "main-container",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3056283049", [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    ref: function ref(el) {
      return image = el;
    },
    src: props.img,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3056283049", [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3056283049",
    dynamic: [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px'],
    __self: this
  }, "html{width:100%;height:100%;background:url(".concat(props.img, ") no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:").concat(props.infoToggle ? '100%' : '70%', ";position:relative;background-position:").concat(props.infoToggle ? '0 -250px' : '-100px 0', ";-webkit-transition:all 1s;transition:all 1s;overflow:hidden;}img{display:none;}@media only screen and (max-width:1024px){html{width:100%;height:100%;background:url(").concat(props.img, ") no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;position:relative;-webkit-transition:all 0.7s;background-position:").concat(props.infoToggle ? '0 0' : '-300px 0px', ";-webkit-transition:all 1s;transition:all 1s;overflow:hidden;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CK0IsQUFJd0IsQUFhQyxBQUtMLFdBakJLLEFBa0JKLEVBTkssVUFYOEQsQUFrQkosMkVBakJ6QyxBQWtCSiw4QkFqQkMsQUFrQkosMkJBakJFLEFBa0JKLHlCQWpCd0IsQUFrQjNCLHNCQUNKLGtCQUNVLEtBbkJOLGtCQUMrQixLQW1CSiw0Q0FsQjNCLEtBbUJKLHVDQWxCRSxLQW1CSixXQWxCaEIsS0FtQkoiLCJmaWxlIjoiL1VzZXJzL2VteXJ0YWJyaXppL0Rlc2t0b3AvR3ltc2hhcmsgL2VteXIvbXlhcHAvY29tcG9uZW50cy9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFRpbWVsaW5lTGl0ZSwgUG93ZXIyIH0gZnJvbSBcImdzYXBcIjtcblxuY29uc3QgQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBsZXQgaW1hZ2UgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBsZXQgdGwgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB0bC50byhpbWFnZSwgMS40LCB7IHNjYWxlOiAxLjYsIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXQgfSlcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHJlZj17ZWwgPT4gKGltYWdlID0gZWwpfSBzcmM9e3Byb3BzLmltZ30gLz5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwcm9wcy5pbWd9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke3Byb3BzLmluZm9Ub2dnbGUgPyAnMTAwJScgOiAnNzAlJ307XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtwcm9wcy5pbmZvVG9nZ2xlID8gJzAgLTI1MHB4JyA6ICctMTAwcHggMCd9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7ZGlzcGxheTogbm9uZX1cblxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBcbiAgICBodG1sIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvcHMuaW1nfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC43cztcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtwcm9wcy5pbmZvVG9nZ2xlID8gJzAgMCcgOiAnLTMwMHB4IDBweCd9O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICB9IFxuICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/container.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=index.js.5fd0e7c252ba84e62a79.hot-update.js.map