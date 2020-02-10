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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3894427374", [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3894427374",
    dynamic: [props.img, props.infoToggle ? '100%' : '70%', props.infoToggle ? '0 -250px' : '-100px 0', props.img, props.infoToggle ? '0 0' : '-300px 0px'],
    __self: this
  }, "html{width:100%;height:100%;background:url(".concat(props.img, ") no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:").concat(props.infoToggle ? '100%' : '70%', ";position:relative;background-position:").concat(props.infoToggle ? '0 -250px' : '-100px 0', ";-webkit-transition:all 0.2s;transition:all 0.2s;overflow:hidden;}img{visibility:hidden;position:absolute;bottom:-4000px;}@media only screen and (max-width:1024px){html{width:100%;height:100%;background:url(").concat(props.img, ") no-repeat center center scroll;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;position:relative;background-position:").concat(props.infoToggle ? '0 0' : '-300px 0px', ";-webkit-transition:all 0.2s;transition:all 0.2s;overflow:hidden;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUrQixBQUl3QixBQWFRLEFBT1osV0FuQkssQUFvQkosT0FSNkIsS0FYc0MsQUFvQkgsYUFUbkIsZUFBQywrQ0FWeEIsQ0FvQkosNkJBbkJDLENBb0JKLDBCQW5CRSxDQW9CSix3QkFuQndCLENBb0IzQixzQkFDSixrQkFDK0IsSUFyQjNCLGtCQUMrQiwyQkFxQmpDLHNCQXBCSSwwQkFxQlIsZ0JBQ3BCLE1BckJ3QixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2VteXJ0YWJyaXppL0Rlc2t0b3AvR3ltc2hhcmsgL2VteXIvbXlhcHAvY29tcG9uZW50cy9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwcm9wcy5pbWd9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke3Byb3BzLmluZm9Ub2dnbGUgPyAnMTAwJScgOiAnNzAlJ307XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtwcm9wcy5pbmZvVG9nZ2xlID8gJzAgLTI1MHB4JyA6ICctMTAwcHggMCd9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHsgdmlzaWJpbGl0eTogaGlkZGVuOyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOiAtNDAwMHB4O31cblxuICAgICAgICBcblxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBcbiAgICBodG1sIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvcHMuaW1nfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsOyBcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7cHJvcHMuaW5mb1RvZ2dsZSA/ICcwIDAnIDogJy0zMDBweCAwcHgnfTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICB9IFxuICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/container.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=index.js.e7e2df47bd14d8940751.hot-update.js.map