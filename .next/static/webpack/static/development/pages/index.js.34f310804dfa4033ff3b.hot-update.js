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
  var image = useRef(null);
  var tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]();
  useEffect(function () {
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
  }, "html{width:100%;height:100%;background:url(".concat(props.img, ") no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:").concat(props.infoToggle ? '100%' : '70%', ";position:relative;background-position:").concat(props.infoToggle ? '0 -250px' : '-100px 0', ";-webkit-transition:all 1s;transition:all 1s;overflow:hidden;}img{display:none;}@media only screen and (max-width:1024px){html{width:100%;height:100%;background:url(").concat(props.img, ") no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;position:relative;-webkit-transition:all 0.7s;background-position:").concat(props.infoToggle ? '0 0' : '-300px 0px', ";-webkit-transition:all 1s;transition:all 1s;overflow:hidden;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbXlydGFicml6aS9EZXNrdG9wL0d5bXNoYXJrIC9lbXlyL215YXBwL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CK0IsQUFJd0IsQUFhQyxBQUtMLFdBakJLLEFBa0JKLEVBTkssVUFYOEQsQUFrQkosMkVBakJ6QyxBQWtCSiw4QkFqQkMsQUFrQkosMkJBakJFLEFBa0JKLHlCQWpCd0IsQUFrQjNCLHNCQUNKLGtCQUNVLEtBbkJOLGtCQUMrQixLQW1CSiw0Q0FsQjNCLEtBbUJKLHVDQWxCRSxLQW1CSixXQWxCaEIsS0FtQkoiLCJmaWxlIjoiL1VzZXJzL2VteXJ0YWJyaXppL0Rlc2t0b3AvR3ltc2hhcmsgL2VteXIvbXlhcHAvY29tcG9uZW50cy9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBUaW1lbGluZUxpdGUsIFBvd2VyMiB9IGZyb20gXCJnc2FwXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG4gICAgbGV0IGltYWdlID0gdXNlUmVmKG51bGwpO1xuXG4gICAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdGwudG8oaW1hZ2UsIDEuNCwgeyBzY2FsZTogMS42LCBlYXNlOiBQb3dlcjIuZWFzZUluT3V0IH0pXG4gICAgfSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyByZWY9e2VsID0+IChpbWFnZSA9IGVsKX0gc3JjPXtwcm9wcy5pbWd9IC8+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvcHMuaW1nfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtwcm9wcy5pbmZvVG9nZ2xlID8gJzEwMCUnIDogJzcwJSd9O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7cHJvcHMuaW5mb1RvZ2dsZSA/ICcwIC0yNTBweCcgOiAnLTEwMHB4IDAnfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge2Rpc3BsYXk6IG5vbmV9XG5cbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgXG4gICAgaHRtbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb3BzLmltZ30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuN3M7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7cHJvcHMuaW5mb1RvZ2dsZSA/ICcwIDAnIDogJy0zMDBweCAwcHgnfTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgfSBcbiAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/emyrtabrizi/Desktop/Gymshark /emyr/myapp/components/container.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=index.js.34f310804dfa4033ff3b.hot-update.js.map