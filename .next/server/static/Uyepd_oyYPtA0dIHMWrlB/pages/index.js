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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/head.js
var __jsx = external_react_default.a.createElement;


const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => __jsx(head_default.a, null, __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("title", null, props.title || ''), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("link", {
  rel: "icon",
  sizes: "192x192",
  href: "/public/touch-icon.png"
}), __jsx("link", {
  rel: "apple-touch-icon",
  href: "/public/touch-icon.png"
}), __jsx("link", {
  rel: "mask-icon",
  href: "/static/favicon-mask.svg",
  color: "#49B882"
}), __jsx("link", {
  rel: "icon",
  href: "/static/favicon.ico"
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/css/normalise.css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/css/style.css"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Arimo&display=swap"
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  property: "og:title",
  content: props.title || ''
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image"
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200"
}), __jsx("meta", {
  property: "og:image:height",
  content: "630"
}));

/* harmony default export */ var head = (Head);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__("OvnE");
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);

// CONCATENATED MODULE: ./components/exercise.js

var exercise_jsx = external_react_default.a.createElement;



const Exercise = ({
  transcript,
  infoToggle,
  title
}) => {
  return exercise_jsx("div", {
    className: "jsx-2431219986" + " " + ((infoToggle ? 'open' : 'closed') || "")
  }, exercise_jsx("h3", {
    className: "jsx-2431219986"
  }, title), external_html_react_parser_default()(transcript), exercise_jsx(style_default.a, {
    id: "2431219986"
  }, ["h3.jsx-2431219986{padding:0;margin:10px 0 20px 0;}", "div.jsx-2431219986{background:black;color:white;padding:10px 20px;height:100%;position:absolute;width:40%;opactiy:0.7;-webkit-transition:all 0.5s;transition:all 0.5s;z-index:1;overflow-y:scroll;}", ".open.jsx-2431219986{right:-1000px;display:none;}", ".closed.jsx-2431219986{right:0;}", "@media only screen and (max-width:767px){div.jsx-2431219986{width:66.5%;}}"]));
};

/* harmony default export */ var exercise = (Exercise);
// CONCATENATED MODULE: ./components/search.js

var search_jsx = external_react_default.a.createElement;


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
  return search_jsx("div", {
    className: "jsx-583777132" + " " + ((searchToggle ? 'open' : 'closed') || "")
  }, search_jsx("input", {
    type: "search",
    onChange: getSearchValue,
    placeholder: "Search for your workout . . . ",
    className: "jsx-583777132"
  }), searchResults.length <= 10 ? searchResults.map(function (item, i) {
    return search_jsx("a", {
      key: i,
      href: "#",
      onClick: updateCard,
      className: "jsx-583777132" + " " + ""
    }, item);
  }) : '', search_jsx(style_default.a, {
    id: "583777132"
  }, ["h3.jsx-583777132{padding:0;margin:10px 0 20px 0;}", "div.jsx-583777132{background:black;color:white;padding:10px 20px;height:100%;position:absolute;width:40%;opactiy:0.7;-webkit-transition:all 0.5s;transition:all 0.5s;z-index:1000;overflow-y:scroll;}", ".open.jsx-583777132{right:-1000px;display:none;}", ".closed.jsx-583777132{right:0;}", "input.jsx-583777132{width:100%;padding:20px;border:2px solid #fff;background:#000;color:#fff;outline:none;}", "a.jsx-583777132{display:block;color:#fff;padding:30px 10px;border-bottom:1px solid #fff;-webkit-text-decoration:none;text-decoration:none;}", "a.jsx-583777132:hover{background:#0F0F0F;}", "@media only screen and (max-width:767px){div.jsx-583777132{width:66.5%;}}"]));
};

/* harmony default export */ var search = (Search);
// EXTERNAL MODULE: external "react-image"
var external_react_image_ = __webpack_require__("bYH+");
var external_react_image_default = /*#__PURE__*/__webpack_require__.n(external_react_image_);

// CONCATENATED MODULE: ./components/container.js

var container_jsx = external_react_default.a.createElement;



const Container = props => {
  return container_jsx("div", {
    id: "main-container",
    className: "jsx-2626450567"
  }, props.children, container_jsx(external_react_image_default.a, {
    src: props.img,
    className: "animated fadeIn",
    loader: container_jsx("div", {
      className: "jsx-2626450567" + " " + "loading"
    }, container_jsx("img", {
      src: "http://etabrizi.co.uk/spinner.gif",
      className: "jsx-2626450567"
    })),
    decode: false
  }), container_jsx(style_default.a, {
    id: "2626450567"
  }, [".loading{width:100%;font-size:40px;text-align:center;margin-top:0;}", "#main-container{width:700px;margin:0 auto;position:relative;}", "img{width:100%;position:relative;}", "#main-container:after{content:'';display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:rgb(255,255,255);background:linear-gradient(180deg,rgba(255,255,255,0) 74%,rgba(255,255,255,1) 94%,rgba(255,255,255,1) 100%);}", "@media only screen and (max-width:767px){#main-container{width:100%;margin:0 auto;min-height:800px;position:relative;}.loading{width:100%;font-size:40px;text-align:right;margin-top:0;}#main-container:after{background:rgb(255,255,255);background:linear-gradient(180deg,rgba(255,255,255,0) 20%,rgba(255,255,255,1) 45%,rgba(255,255,255,1) 100%);}}"]));
};

/* harmony default export */ var container = (Container);
// EXTERNAL MODULE: external "react-typist"
var external_react_typist_ = __webpack_require__("tQzz");
var external_react_typist_default = /*#__PURE__*/__webpack_require__.n(external_react_typist_);

// CONCATENATED MODULE: ./components/heading.js

var heading_jsx = external_react_default.a.createElement;



const Heading = ({
  title,
  infoToggle,
  searchToggle
}) => {
  return heading_jsx("div", {
    className: "jsx-3648482963" + " " + ((infoToggle && searchToggle ? 'show ' : ' hide ') || "")
  }, heading_jsx(external_react_typist_default.a, {
    key: title
  }, heading_jsx("h2", {
    className: "jsx-3648482963"
  }, title)), heading_jsx(style_default.a, {
    id: "3648482963"
  }, ["h2.jsx-3648482963{font-size:60px;position:absolute;top:auto;left:20px;margin:0;-webkit-transisiton:all 2s;transisiton:all 2s;z-index:100;width:auto;bottom:20px;}", "@media only screen and (max-width:767px){h2.jsx-3648482963{font-size:40px;position:absolute;top:440px;left:20px;margin:0;-webkit-transisiton:all 2s;transisiton:all 2s;z-index:100;width:200px;}}"]));
};

/* harmony default export */ var heading = (Heading);
// CONCATENATED MODULE: ./components/controls.js

var controls_jsx = external_react_default.a.createElement;


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
  return controls_jsx("nav", {
    className: "jsx-392105289"
  }, controls_jsx("ul", {
    className: "jsx-392105289" + " " + (((infoToggle && searchToggle) === true ? '' : 'shift') || "")
  }, controls_jsx("li", {
    className: "jsx-392105289"
  }, controls_jsx("a", {
    href: "#",
    onClick: counterDecrease,
    className: "jsx-392105289"
  }, controls_jsx("span", {
    className: "jsx-392105289" + " " + "icon-circle-left"
  }))), controls_jsx("li", {
    className: "jsx-392105289"
  }, controls_jsx("a", {
    href: "#",
    onClick: counterIncrease,
    className: "jsx-392105289"
  }, controls_jsx("span", {
    className: "jsx-392105289" + " " + "icon-circle-right"
  }))), controls_jsx("li", {
    className: "jsx-392105289"
  }, controls_jsx("a", {
    href: "#",
    onClick: toggleGender,
    className: "jsx-392105289"
  }, controls_jsx("span", {
    className: "jsx-392105289" + " " + ((gender ? 'icon-male1' : 'icon-female1') || "")
  }))), controls_jsx("li", {
    className: "jsx-392105289" + " " + (((infoToggle && searchToggle) === true ? '' : 'hide') || "")
  }, controls_jsx("a", {
    href: "#",
    onClick: toggleInfo,
    className: "jsx-392105289"
  }, controls_jsx("span", {
    className: "jsx-392105289" + " " + "icon-info"
  }))), controls_jsx("li", {
    className: "jsx-392105289" + " " + (((infoToggle && searchToggle) === true ? '' : 'hide') || "")
  }, controls_jsx("a", {
    href: "#",
    onClick: toggleSearch,
    className: "jsx-392105289"
  }, controls_jsx("span", {
    className: "jsx-392105289" + " " + "icon-search"
  }))), controls_jsx("li", {
    onClick: closeAll,
    className: "jsx-392105289" + " " + (((infoToggle && searchToggle) === true ? 'hide' : '') || "")
  }, controls_jsx("a", {
    href: "#",
    className: "jsx-392105289"
  }, controls_jsx("span", {
    className: "jsx-392105289" + " " + "icon-cancel-circle"
  })))), controls_jsx(style_default.a, {
    id: "392105289"
  }, ["nav.jsx-392105289{width:100%;-webkit-transition:all 0.7s;transition:all 0.7s;padding-top:10px;position:absolute;top:0;left:0;z-index:100;}", "nav.jsx-392105289:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", "ul.jsx-392105289{margin:0 0 0 20px;padding:0;list-style:none;text-align:center;-webkit-transition:all 0.2s;transition:all 0.2s;}", "li.jsx-392105289{display:inline-block;}", ".shift.jsx-392105289{margin-left:-250px;}", "a.jsx-392105289{font-size:60px;color:#000;-webkit-text-decoration:none;text-decoration:none;margin-right:20px;}", "a.jsx-392105289:hover{border-bottom:6px solid #2D2D2D;}", "@media only screen and (max-width:767px){ul.jsx-392105289{text-align:left;}li.jsx-392105289{display:block;}.shift.jsx-392105289{margin-left:20px;}nav.jsx-392105289:hover{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}a.jsx-392105289:hover{border-bottom:none;}}"]));
};

/* harmony default export */ var controls = (Controls);
// CONCATENATED MODULE: ./components/mainApp.js
var mainApp_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class mainApp_MainApp extends external_react_["Component"] {
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
    const error = this.state.step === 'error' ? mainApp_jsx("p", {
      className: "error"
    }, " Sorry, the application is offline") : '';
    const app = this.state.step === 'start' ? mainApp_jsx("div", null, mainApp_jsx(controls, {
      closeAll: this.closeAll,
      searchToggle: this.state.searchToggle,
      toggleSearch: this.toggleSearch,
      toggleGender: this.toggleGender,
      gender: this.state.gender,
      counterDecrease: this.counterDecrease,
      counterIncrease: this.counterIncrease,
      toggleInfo: this.toggleInfo,
      infoToggle: this.state.infoToggle
    }), mainApp_jsx(exercise, {
      transcript: this.state.userSearchActive ? this.state.userSearchFound.transcript : this.state.work[this.state.counter].transcript,
      infoToggle: this.state.infoToggle,
      title: this.state.userSearchActive ? this.state.userSearchFound.name : this.state.work[this.state.counter].name
    }), mainApp_jsx(search, {
      searchToggle: this.state.searchToggle,
      excercises: this.state.work,
      updateCard: this.updateCard,
      searchTerm: this.state.searchTerm,
      getSearchValue: this.getSearchValue
    }), mainApp_jsx(heading, {
      searchToggle: this.state.searchToggle,
      infoToggle: this.state.infoToggle,
      title: this.state.userSearchActive ? this.state.userSearchFound.name : this.state.work[this.state.counter].name
    })) : mainApp_jsx("p", {
      className: "loading"
    }, "..Loading..");
    return mainApp_jsx(container, {
      excercises: this.state.work,
      searchToggle: this.state.searchToggle,
      infoToggle: this.state.infoToggle,
      img: this.state.userSearchActive ? this.state.userSearchFound[this.state.gender ? 'male' : 'female'].image : this.state.work[this.state.counter][this.state.gender ? 'male' : 'female'].image
    }, this.state.step === 'start' && app);
  }

}

/* harmony default export */ var mainApp = (mainApp_MainApp);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_["createElement"];





const Index = props => pages_jsx("div", {
  className: "jsx-247033640"
}, pages_jsx(head, {
  title: "Gymshark - App"
}), pages_jsx(mainApp, {
  work: props.work
}), pages_jsx(style_default.a, {
  id: "247033640"
}, []));

Index.getInitialProps = async function () {
  const res = await external_isomorphic_unfetch_default()('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/');
  const data = await res.json();
  return {
    work: data
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "bYH+":
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "tQzz":
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });