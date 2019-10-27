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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/components/Chat.js":
/*!**********************************!*\
  !*** ./pages/components/Chat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chat; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http */ "./pages/components/http.js");
/* harmony import */ var _ChatList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatList */ "./pages/components/ChatList.js");
/* harmony import */ var _ChatPannel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatPannel */ "./pages/components/ChatPannel.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/config */ "./pages/util/config.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_util_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "D:\\workplace\\front-end\\pages\\components\\Chat.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






class Chat extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleShowList", () => {
      this.setState({
        showListX: '10%',
        showIcon: 0,
        chatStatus: 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleCloseList", () => {
      this.setState({
        showListX: '-100%',
        showIcon: 1,
        chatStatus: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleCloseChat", () => {
      this.setState({
        showListX: '10%',
        showChat: '-10%',
        disableIcon: false,
        disableChat: false,
        chatStatus: 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleShowChat", (name, id) => {
      console.log(name, id);
      const {
        userInfo
      } = this.props;
      const {
        socket
      } = this.state;
      this.setState({
        showListX: '-100%',
        showChat: '120%',
        chatUser: name,
        chatUserId: id,
        disableIcon: true,
        chatStatus: 2
      });
      const data = {
        joiner: userInfo.uId,
        chater: id
      };
      Object(_http__WEBPACK_IMPORTED_MODULE_3__["Emit"])('joinRoom', data, socket);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "joinRoom", msg => {
      this.setState({
        joinUser: msg.joiner,
        roomId: msg.roomId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "receiveMsg", msg => {
      const {
        chatStatus
      } = this.state;
      this.setState({
        msg: msg
      });

      if (chatStatus == 0) {
        this.setState({
          showNote: true
        });
      } else if (chatStatus == 1) {
        this.setState({
          sender: msg.sender,
          showNote1: true
        });
      } else if (chatStatus == 2) {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSend", (method, data) => {
      Object(_http__WEBPACK_IMPORTED_MODULE_3__["Emit"])(method, data, this.state.socket);
    });

    const _socket = Object(_http__WEBPACK_IMPORTED_MODULE_3__["Connect"])();

    this.state = {
      showIcon: 1,
      showListX: '-100%',
      showChat: '-10%',
      chatUser: null,
      chatUserId: null,
      disableIcon: false,
      socket: _socket,
      msg: [],
      joinUser: null,
      chatStatus: 0,
      showNote: false,
      showNote1: false,
      sender: null,
      roomId: null
    };
    this.ready();
    this.handleShowList = this.handleShowList.bind(this);
    this.handleCloseList = this.handleCloseList.bind(this);
    this.handleShowChat = this.handleShowChat.bind(this);
  }

  ready() {
    const {
      socket
    } = this.state;
    socket.on('join_room', msg => {
      this.joinRoom(msg);
    });
    socket.on('receive_msg', msg => {
      console.log(msg);
      this.receiveMsg(msg);
    });
  }

  render() {
    return __jsx("div", {
      style: {
        position: 'fixed',
        bottom: '0%',
        left: '70%',
        width: "28%",
        height: "50%",
        zIndex: 1
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2775959721", [this.state.showListX, this.state.showChat]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("div", {
      style: {
        opacity: this.state.showIcon
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2775959721", [this.state.showListX, this.state.showChat]]]) + " " + "showIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      disabled: this.state.disableIcon,
      style: {
        backgroundColor: 'white',
        border: 'none'
      },
      onClick: this.handleShowList,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2775959721", [this.state.showListX, this.state.showChat]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("img", {
      src: "/static/icon.png",
      style: {
        width: '60%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2775959721", [this.state.showListX, this.state.showChat]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), this.state.showNote && __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdaccountCircle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2775959721", [this.state.showListX, this.state.showChat]]]) + " " + "showList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(_ChatList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: this.handleCloseList,
      showChat: this.handleShowChat,
      showNote1: this.state.showNote1,
      sender: this.state.sender,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2775959721", [this.state.showListX, this.state.showChat]]]) + " " + "showChat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx(_ChatPannel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      msg: this.state.msg,
      socket: this.state.socket,
      onSend: this.handleSend.bind(this),
      joinUser: this.state.joinUser,
      onClick: this.handleCloseChat,
      otherUser: this.state.chatUser,
      otherUserId: this.state.chatUserId,
      roomId: this.state.roomId,
      uId: this.props.userInfo.uId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2775959721",
      dynamic: [this.state.showListX, this.state.showChat],
      __self: this
    }, `.showIcon.__jsx-style-dynamic-selector{position:relative;width:50%;left:70%;top:70%;}.showList.__jsx-style-dynamic-selector{position:relative;width:100%;height:100%;bottom:${this.state.showListX};border:2px solid #ffd633;border-radius:8px;-webkit-transition:all 1s;transition:all 1s;background :#fafafa;overflow-Y:scroll;}.showChat.__jsx-style-dynamic-selector{position:relative;width:100%;height:100%;bottom:${this.state.showChat};border:2px solid #ffd633;border-radius:8px;-webkit-transition:all 1s;transition:all 1s;background :#fafafa;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXENoYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUl3QixBQUl1QyxBQU1ELEFBWUEsa0JBakJQLEFBT0EsQUFZQSxVQWxCRCxDQU9FLEFBWUEsUUFsQkosSUFPNEIsQUFZQSxJQWxCdkMsZ0NBTzZCLEFBWUEseUJBWFIsQUFZQSxrQkFYQyxBQVlBLDRDQVhDLEFBWUEsb0JBWEQsQUFhdEIsa0JBWkEiLCJmaWxlIjoiRDpcXHdvcmtwbGFjZVxcZnJvbnQtZW5kXFxwYWdlc1xcY29tcG9uZW50c1xcQ2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29ubmVjdCxPbixFbWl0LEdldCB9IGZyb20gJy4vaHR0cCdcclxuaW1wb3J0IFNob3dDaGF0TGlzdCBmcm9tICcuL0NoYXRMaXN0J1xyXG5pbXBvcnQgQ2hhdFBhbm5lbCBmcm9tICcuL0NoYXRQYW5uZWwnXHJcbmltcG9ydCAnLi4vdXRpbC9jb25maWcnXHJcbmltcG9ydCB7IE1kQWNjb3VudENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IENvbm5lY3QoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dJY29uOjEsXHJcbiAgICAgICAgICAgIHNob3dMaXN0WDogJy0xMDAlJyxcclxuICAgICAgICAgICAgc2hvd0NoYXQ6Jy0xMCUnLFxyXG4gICAgICAgICAgICBjaGF0VXNlcjogbnVsbCxcclxuICAgICAgICAgICAgY2hhdFVzZXJJZDogbnVsbCxcclxuICAgICAgICAgICAgZGlzYWJsZUljb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzb2NrZXQsXHJcbiAgICAgICAgICAgIG1zZzogW10sXHJcbiAgICAgICAgICAgIGpvaW5Vc2VyOm51bGwsXHJcbiAgICAgICAgICAgIGNoYXRTdGF0dXM6IDAsXHJcbiAgICAgICAgICAgIHNob3dOb3RlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd05vdGUxOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VuZGVyOiBudWxsLFxyXG4gICAgICAgICAgICByb29tSWQ6IG51bGxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVhZHkoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dMaXN0ID0gdGhpcy5oYW5kbGVTaG93TGlzdC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZUxpc3QgPSB0aGlzLmhhbmRsZUNsb3NlTGlzdC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93Q2hhdCA9IHRoaXMuaGFuZGxlU2hvd0NoYXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2hvd0xpc3QgPSgpID0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TGlzdFg6ICcxMCUnLHNob3dJY29uOiAwLGNoYXRTdGF0dXM6MX0pXHJcblxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xvc2VMaXN0PSgpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dMaXN0WDogJy0xMDAlJyxcclxuICAgICAgICAgICAgc2hvd0ljb246MSxcclxuICAgICAgICAgICAgY2hhdFN0YXR1czogMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zZUNoYXQ9KCk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0xpc3RYOiAnMTAlJyxcclxuICAgICAgICAgICAgc2hvd0NoYXQ6ICctMTAlJyxcclxuICAgICAgICAgICAgZGlzYWJsZUljb246IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNhYmxlQ2hhdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNoYXRTdGF0dXM6MVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVTaG93Q2hhdCA9IChuYW1lLGlkKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLGlkKVxyXG4gICAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IHNvY2tldCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93TGlzdFg6ICctMTAwJScsXHJcbiAgICAgICAgICAgIHNob3dDaGF0OiAnMTIwJScsXHJcbiAgICAgICAgICAgIGNoYXRVc2VyOiBuYW1lLFxyXG4gICAgICAgICAgICBjaGF0VXNlcklkOiBpZCxcclxuICAgICAgICAgICAgZGlzYWJsZUljb246dHJ1ZSxcclxuICAgICAgICAgICAgY2hhdFN0YXR1czogMlxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBqb2luZXI6IHVzZXJJbmZvLnVJZCxcclxuICAgICAgICAgICAgY2hhdGVyOiBpZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgRW1pdCgnam9pblJvb20nLGRhdGEsc29ja2V0KVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIHJlYWR5KCl7XHJcbiAgICAgICAgY29uc3QgeyBzb2NrZXQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCdqb2luX3Jvb20nLChtc2cpPT57XHJcbiAgICAgICAgICAgIHRoaXMuam9pblJvb20obXNnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNvY2tldC5vbigncmVjZWl2ZV9tc2cnLChtc2cpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZylcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlTXNnKG1zZylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgam9pblJvb20gPSAobXNnKT0+eyBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgam9pblVzZXI6IG1zZy5qb2luZXIsXHJcbiAgICAgICAgICAgIHJvb21JZDogbXNnLnJvb21JZFxyXG4gICAgICAgIH0pICBcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlTXNnID0gKG1zZykgPT57XHJcbiAgICAgICAgY29uc3QgeyBjaGF0U3RhdHVzIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1zZzptc2dcclxuICAgICAgICB9KVxyXG4gICAgICBcclxuICAgICAgICBpZihjaGF0U3RhdHVzID09MCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd05vdGU6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZSBpZiggY2hhdFN0YXR1cyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZW5kZXI6bXNnLnNlbmRlcixcclxuICAgICAgICAgICAgICAgIHNob3dOb3RlMTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNlIGlmKCBjaGF0U3RhdHVzPT0yKXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIGhhbmRsZVNlbmQgPSAoIG1ldGhvZCxkYXRhICk9PntcclxuICAgICAgICBFbWl0KG1ldGhvZCxkYXRhLHRoaXMuc3RhdGUuc29ja2V0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2ZpeGVkJyxib3R0b206ICcwJScsbGVmdDogJzcwJScsd2lkdGg6XCIyOCVcIixoZWlnaHQ6XCI1MCVcIix6SW5kZXg6MX19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dJY29uXCIgc3R5bGU9e3tvcGFjaXR5OnRoaXMuc3RhdGUuc2hvd0ljb259fT4gXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZUljb259IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOid3aGl0ZScsYm9yZGVyOidub25lJ319IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd0xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb24ucG5nJyBzdHlsZT17e3dpZHRoOic2MCUnfX0vPnt0aGlzLnN0YXRlLnNob3dOb3RlJiY8TWRBY2NvdW50Q2lyY2xlIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2hvd0NoYXRMaXN0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VMaXN0fSBzaG93Q2hhdD17dGhpcy5oYW5kbGVTaG93Q2hhdH0gc2hvd05vdGUxPXt0aGlzLnN0YXRlLnNob3dOb3RlMX1cclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXIgPSB7dGhpcy5zdGF0ZS5zZW5kZXJ9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93Q2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGF0UGFubmVsIG1zZz17dGhpcy5zdGF0ZS5tc2d9IHNvY2tldD17dGhpcy5zdGF0ZS5zb2NrZXR9IG9uU2VuZD17dGhpcy5oYW5kbGVTZW5kLmJpbmQodGhpcyl9IGpvaW5Vc2VyPXt0aGlzLnN0YXRlLmpvaW5Vc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VDaGF0fSBvdGhlclVzZXI9e3RoaXMuc3RhdGUuY2hhdFVzZXJ9IG90aGVyVXNlcklkPXt0aGlzLnN0YXRlLmNoYXRVc2VySWR9IHJvb21JZD17dGhpcy5zdGF0ZS5yb29tSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdUlkPXt0aGlzLnByb3BzLnVzZXJJbmZvLnVJZH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5zaG93SWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDo3MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2hvd0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbToke3RoaXMuc3RhdGUuc2hvd0xpc3RYfTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICAjZmZkNjMzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDojZmFmYWZhO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LVk6IHNjcm9sbDsgICAgICBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAuc2hvd0NoYXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbToke3RoaXMuc3RhdGUuc2hvd0NoYXR9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgICNmZmQ2MzM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgOiNmYWZhZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */
/*@ sourceURL=D:\workplace\front-end\pages\components\Chat.js */`));
  }

}

/***/ }),

/***/ "./pages/components/ChatList.js":
/*!**************************************!*\
  !*** ./pages/components/ChatList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showChatList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http */ "./pages/components/http.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\workplace\\front-end\\pages\\components\\ChatList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const manager = [{
  uId: 111,
  userName: 'gyprodeve@gmail.com'
}, {
  uId: 222,
  userName: '555@gmail.com'
}, {
  uId: 333,
  userName: 'weili'
}];
const contributor = [{
  uId: '3',
  userName: 'weili'
}, {
  uId: '4',
  userName: 'luWang'
}];
const curator = [{
  uId: '5',
  userName: 'jing'
}, {
  uId: ' 6',
  userName: 'xueling'
}];

class ShowList extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e.target.name);
  }

  handleClick1(e) {
    this.props.onChat(e.target.name, e.target.value);
  }

  render() {
    return __jsx("div", {
      style: {
        marginBottom: '10px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["48915491", [this.props.play]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      name: this.props.btnName,
      onClick: this.handleClick,
      style: {
        background: '#593196',
        height: "100%",
        width: "100%",
        padding: "5px",
        border: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["48915491", [this.props.play]]]) + " " + "btn btn-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, !this.props.disabled ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosArrowForward"], {
      style: {
        position: "relative",
        left: '-30%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosArrowDown"], {
      style: {
        position: "relative",
        left: '-30%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), this.props.role), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["48915491", [this.props.play]]]) + " " + "show",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, this.props.data.map(item => __jsx("div", {
      key: item.uId,
      style: {
        position: "relative",
        height: '20px',
        marginBottom: '10px',
        marginTop: '10px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["48915491", [this.props.play]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      onClick: this.handleClick1,
      name: item.userName,
      value: item.uId,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["48915491", [this.props.play]]]) + " " + "btn-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaUserCircle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), " ", item.userName), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["48915491", [this.props.play]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "48915491",
      dynamic: [this.props.play],
      __self: this
    }, `.show.__jsx-style-dynamic-selector{display:${this.props.play};}.__jsx-style-dynamic-selector,.btn-none.__jsx-style-dynamic-selector{border:none;background:#fff;width:100%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXENoYXRMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEZ0MsQUFHOEQsQUFHMUIsWUFDSyxnQkFDTixTQUpkLEVBTUEiLCJmaWxlIjoiRDpcXHdvcmtwbGFjZVxcZnJvbnQtZW5kXFxwYWdlc1xcY29tcG9uZW50c1xcQ2hhdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdldCB9IGZyb20gJy4vaHR0cCdcclxuaW1wb3J0IHsgRmFVc2VyQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IElvSW9zQXJyb3dGb3J3YXJkLElvSW9zQXJyb3dEb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBtYW5hZ2VyID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVJZDogMTExLCB1c2VyTmFtZTonZ3lwcm9kZXZlQGdtYWlsLmNvbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdUlkOiAyMjIsIHVzZXJOYW1lOic1NTVAZ21haWwuY29tJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1SWQ6IDMzMyx1c2VyTmFtZTogJ3dlaWxpJ1xyXG4gICAgfSxcclxuXVxyXG5jb25zdCBjb250cmlidXRvciA9IFtcclxuICAgIHtcclxuICAgICAgICB1SWQ6ICczJyx1c2VyTmFtZTogJ3dlaWxpJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1SWQ6ICc0JywgdXNlck5hbWU6J2x1V2FuZydcclxuICAgIH1cclxuXVxyXG5jb25zdCBjdXJhdG9yID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVJZDogJzUnLHVzZXJOYW1lOiAnamluZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdUlkOicgNicsIHVzZXJOYW1lOid4dWVsaW5nJ1xyXG4gICAgfVxyXG5dXHJcbmNsYXNzIFNob3dMaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICBcclxuICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sxID0gdGhpcy5oYW5kbGVDbGljazEuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xpY2soZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUudGFyZ2V0Lm5hbWUpXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrMShlKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhdChlLnRhcmdldC5uYW1lLGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTonMTBweCd9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG5hbWU9e3RoaXMucHJvcHMuYnRuTmFtZX0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gc3R5bGU9e3tiYWNrZ3JvdW5kOicjNTkzMTk2JyxoZWlnaHQ6XCIxMDAlXCIsd2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjVweFwiLGJvcmRlcjonbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuZGlzYWJsZWQ/PElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLGxlZnQ6Jy0zMCUnfX0vPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dEb3duIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLGxlZnQ6Jy0zMCUnfX0vPn17dGhpcy5wcm9wcy5yb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS51SWR9IHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLGhlaWdodDonMjBweCcsbWFyZ2luQm90dG9tOicxMHB4JyxtYXJnaW5Ub3A6JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljazF9IG5hbWU9e2l0ZW0udXNlck5hbWV9IHZhbHVlPXtpdGVtLnVJZH0gY2xhc3NOYW1lPVwiYnRuLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhVXNlckNpcmNsZSAvPiB7aXRlbS51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj48YnIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3d7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5wcm9wcy5wbGF5fTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC5idG4tbm9uZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNob3dDaGF0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtYW5hZ2VyOiBbXSxcclxuICAgICAgICAgICAgY3VyYXRvcjogW10sXHJcbiAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiBbXSxcclxuICAgICAgICAgICAgZGlzYWJsZU1hbmFnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNhYmxlQ3VyYXRvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc2FibGVDb250cmlidXRvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dNYW5hOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHNob3dDb246ICdub25lJyxcclxuICAgICAgICAgICAgc2hvd0N1cjogJ25vbmUnLFxyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljazEgPSB0aGlzLmhhbmRsZUNsaWNrMS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGF0ID0gdGhpcy5oYW5kbGVDaGF0LmJpbmQodGhpcylcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3QgdUlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VJZCcpXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1SWQgOiB1SWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1hbmFnZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiBjb250cmlidXRvcixcclxuICAgICAgICAgICAgY3VyYXRvclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlclxyXG4gICAgICAgIC8vIHRoaXMuaW5pdExpc3QoZGF0YSlcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXRMaXN0PShkYXRhKT0+e1xyXG4gICAgICAgIEdldCgnZ2V0X2NoYXRfbGlzdCcsZGF0YSkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgcmVzLm1hcChpdGVtID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYW5hZ2VyLGNvbnRyaWJ1dG9yLGN1cmF0b3IgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0ucm9sZSA9PSAnQ29udHJpYnV0b3InKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb250cmlidXRvcjp7Y29udHJpYnV0b3J9LnB1c2goaXRlbSl9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoaXRlbS5yb2xlID09ICdDdXJhdG9yJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VyYXRvcjp7Y3VyYXRvcn0ucHVzaChpdGVtKX0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYW5hZ2VyOnttYW5hZ2VyfS5wdXNoKGl0ZW0pfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xpY2s9KGUpPT57XHJcbiAgICAgICBcclxuICAgICAgICBpZihlID09XCJzaG93TWFuYVwiKXtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gIXRoaXMuc3RhdGUuZGlzYWJsZU1hbmFnZXJcclxuICAgICAgICAgICAgaWYodmFsID09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93TWFuYTpcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZU1hbmFnZXI6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01hbmE6XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZU1hbmFnZXI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZihlID09ICdzaG93Q3VyJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9ICF0aGlzLnN0YXRlLmRpc2FibGVDdXJhdG9yXHJcbiAgICAgICAgICAgIGlmKHZhbCA9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0N1cjpcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUN1cmF0b3I6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0N1cjpcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ3VyYXRvcjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihlID09IFwic2hvd0NvblwiKXtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gIXRoaXMuc3RhdGUuZGlzYWJsZUNvbnRyaWJ1dG9yXHJcbiAgICAgICAgICAgIGlmKHZhbCA9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbjpcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNvbnRyaWJ1dG9yOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb246XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNvbnRyaWJ1dG9yOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrMSA9KGUpPT57XHJcbiAgICAgICAgdmFyIG5hbWUgPSBlLnRhcmdldC5uYW1lXHJcbiAgICAgICAgaWYobmFtZSA9PSAnY2xvc2UnKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGF0ID0oZSxhKT0+e1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd0NoYXQoZSxhKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsbWFyZ2luQm90dG9tOicxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q2hhdCBMaXN0PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hbmFnZXIgIT09W10/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvd0xpc3QgcGxheT17dGhpcy5zdGF0ZS5zaG93TWFuYX0gcm9sZT1cIk1hbmFnZXJcIiBidG5OYW1lPVwic2hvd01hbmFcIiBvbkNoYXQ9e3RoaXMuaGFuZGxlQ2hhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVNYW5hZ2VyfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBkYXRhPXt0aGlzLnN0YXRlLm1hbmFnZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VyYXRvciAhPT0gW10/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvd0xpc3QgcGxheT17dGhpcy5zdGF0ZS5zaG93Q3VyfSByb2xlPVwiQ3VyYXRvclwiIGJ0bk5hbWU9XCJzaG93Q3VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVDdXJhdG9yfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBkYXRhPXt0aGlzLnN0YXRlLmN1cmF0b3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29udHJpYnV0b3IgIT09IFtdP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dMaXN0IHBsYXk9e3RoaXMuc3RhdGUuc2hvd0Nvbn0gcm9sZT1cIkNvbnRyaWJ1dG9yXCIgYnRuTmFtZT1cInNob3dDb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZUNvbnRyaWJ1dG9yfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBkYXRhPXt0aGlzLnN0YXRlLmNvbnRyaWJ1dG9yfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cImNsb3NlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6JzNweCcsbWFyZ2luOicxNXB4J319IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrMX0+Y2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */
/*@ sourceURL=D:\workplace\front-end\pages\components\ChatList.js */`));
  }

}

class showChatList extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initList", data => {
      Object(_http__WEBPACK_IMPORTED_MODULE_3__["Get"])('get_chat_list', data).then(res => {
        res.map(item => {
          const {
            manager,
            contributor,
            curator
          } = this.state;

          if (item.role == 'Contributor') {
            this.setState({
              contributor: {
                contributor
              }.push(item)
            });
          } else if (item.role == 'Curator') {
            this.setState({
              curator: {
                curator
              }.push(item)
            });
          } else {
            this.setState({
              manager: {
                manager
              }.push(item)
            });
          }
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick", e => {
      if (e == "showMana") {
        const val = !this.state.disableManager;

        if (val == true) {
          this.setState({
            showMana: "block",
            disableManager: true
          });
        } else {
          this.setState({
            showMana: "none",
            disableManager: false
          });
        }
      } else if (e == 'showCur') {
        const val = !this.state.disableCurator;

        if (val == true) {
          this.setState({
            showCur: "block",
            disableCurator: true
          });
        } else {
          this.setState({
            showCur: "none",
            disableCurator: false
          });
        }
      } else if (e == "showCon") {
        const val = !this.state.disableContributor;

        if (val == true) {
          this.setState({
            showCon: "block",
            disableContributor: true
          });
        } else {
          this.setState({
            showCon: "none",
            disableContributor: false
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick1", e => {
      var name = e.target.name;

      if (name == 'close') {
        this.props.onClick();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChat", (e, a) => {
      this.props.showChat(e, a);
    });

    this.state = {
      manager: [],
      curator: [],
      contributor: [],
      disableManager: false,
      disableCurator: false,
      disableContributor: false,
      showMana: 'none',
      showCon: 'none',
      showCur: 'none'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleChat = this.handleChat.bind(this);
  }

  componentDidMount() {
    const uId = localStorage.getItem('uId');
    const data = {
      uId: uId
    };
    this.setState({
      manager: manager,
      contributor: contributor,
      curator
    });
    this.manager = manager; // this.initList(data)
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("div", {
      style: {
        textAlign: "center",
        marginBottom: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "Chat List")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, this.state.manager !== [] ? __jsx(ShowList, {
      play: this.state.showMana,
      role: "Manager",
      btnName: "showMana",
      onChat: this.handleChat,
      disabled: this.state.disableManager,
      onClick: this.handleClick,
      data: this.state.manager,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }) : null, this.state.curator !== [] ? __jsx(ShowList, {
      play: this.state.showCur,
      role: "Curator",
      btnName: "showCur",
      disabled: this.state.disableCurator,
      onClick: this.handleClick,
      data: this.state.curator,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }) : null, this.state.contributor !== [] ? __jsx(ShowList, {
      play: this.state.showCon,
      role: "Contributor",
      btnName: "showCon",
      disabled: this.state.disableContributor,
      onClick: this.handleClick,
      data: this.state.contributor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }) : null, __jsx("div", {
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, __jsx("button", {
      name: "close",
      className: "btn btn-info",
      style: {
        borderRadius: '3px',
        margin: '15px'
      },
      type: "button",
      onClick: this.handleClick1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "close")))));
  }

}

/***/ }),

/***/ "./pages/components/ChatPannel.js":
/*!****************************************!*\
  !*** ./pages/components/ChatPannel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatPannel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\workplace\\front-end\\pages\\components\\ChatPannel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



class ChatHeading extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick", e => {
      this.props.onClick();
    });

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return __jsx("div", {
      style: {
        height: "10%"
      },
      className: "jsx-2882982198",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      style: {
        textAlign: 'center',
        backgroundColor: '#593196',
        width: "100%",
        color: "#fff",
        height: "100%",
        padding: "7px"
      },
      className: "jsx-2882982198",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.userName), __jsx("button", {
      type: "button",
      name: "closeChat",
      onClick: this.handleClick,
      className: "jsx-2882982198" + " " + "btn-close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosArrowBack"], {
      color: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2882982198",
      __self: this
    }, ".btn-close.jsx-2882982198{position:relative;left:5%;top:-27px;background:#593196;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXENoYXRQYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUcyQyxrQkFDVixRQUNDLFVBQ1UsbUJBQ1AsWUFDaEIiLCJmaWxlIjoiRDpcXHdvcmtwbGFjZVxcZnJvbnQtZW5kXFxwYWdlc1xcY29tcG9uZW50c1xcQ2hhdFBhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0JhY2sgfSBmcm9tICdyZWFjdC1pY29ucy9pbydcclxuXHJcblxyXG5jbGFzcyBDaGF0SGVhZGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrPShlKT0+e1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjEwJVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsYmFja2dyb3VuZENvbG9yOicjNTkzMTk2Jyx3aWR0aDpcIjEwMCVcIixjb2xvcjpcIiNmZmZcIixoZWlnaHQ6XCIxMDAlXCIscGFkZGluZzpcIjdweFwifX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyTmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jbG9zZVwiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiY2xvc2VDaGF0XCIgb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT48SW9Jb3NBcnJvd0JhY2sgY29sb3I9IFwiI2ZmZlwiLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWNsb3Nle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1OTMxOTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbXNnQ29taW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbXNnOiBbXSxcclxuICAgICAgICAgICAgc2hvd0pvaW46ICdub25lJyxcclxuICAgICAgICAgICAgdGltZUlkOm51bGxcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1zZyA9W11cclxuICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLm1zZyAhPT0gcHJldlByb3BzLm1zZyl7ICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm1zZy5wdXNoKHRoaXMucHJvcHMubXNnKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG1zZzogdGhpcy5tc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tc2cpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuam9pblVzZXIgIT09cHJldlByb3BzLmpvaW5Vc2VyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5qb2luVXNlcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93Sm9pbjogJ2Jsb2NrJywgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJyx0b3A6JzAlJyx3aWR0aDonMTAwJScsaGVpZ2h0OlwiODMlXCIsb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1zZy5sZW5ndGg+MCYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tc2cubWFwKChpdGVtLGluZGV4KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1zZ1wiID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VuZGVyID09IHRoaXMucHJvcHMudUlkJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVjZWl2ZXIgPT0gdGhpcy5wcm9wcy5vdGhlclVzZXJJZCYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInNlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZWNlaXZlciA9PSB0aGlzLnByb3BzLnVJZCYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNlbmRlciA9PSB0aGlzLnByb3BzLm90aGVyVXNlcklkJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1zZy5sZW5ndGg9PTAmJlxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3dKb2luLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5qb2luVXNlciA9PSB0aGlzLnByb3BzLnVJZD9cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Zb3Ugam9pbiBpbiB0aGUgcm9vbTwvc3Bhbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuam9pblVzZXJ9IGpvaW4gaW4gdGhlIHJvb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOi42NXMgZWFzZS1vdXQgMHMgc2hvd1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaG93ezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19XHJcbiAgICAgICAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLnJpZ2h0IC5zZW5kZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogMlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubXNnIC5yaWdodCAuZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWRmMDZjO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1zZyAubGVmdCAuZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDE4MWNjO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgTWVzc2FnZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtc2c6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVDbGljaz0gKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnN0YXRlLm1zZylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttc2c6Jyd9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICBtc2c6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLHdpZHRoOicxMDAlJyxoZWlnaHQ6ICcxMCUnfX0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibXNnXCIgdmFsdWU9e3RoaXMuc3RhdGUubXNnfSBvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubXNnLmxlbmd0aDwxfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXNlbmRcIj5TZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bi1zZW5ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDYzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNzc3OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdFBhbm5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgbXNnOiBudWxsLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbmQgPSB0aGlzLmhhbmRsZVNlbmQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICBcclxuICAgIGhhbmRsZVNlbmQgPShlKSA9PntcclxuICAgICAgICBjb25zdCB7IHVJZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBzZW5kZXI6IHVJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHRoaXMucHJvcHMub3RoZXJVc2VySWQsXHJcbiAgICAgICAgICAgIGRhdGE6IGUsXHJcbiAgICAgICAgICAgIHJvb21JZDogdGhpcy5wcm9wcy5yb29tSWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbmQoJ3NlbmRfbXNnJyxkYXRhKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgIDxDaGF0SGVhZGluZyB1c2VyTmFtZT17dGhpcy5wcm9wcy5vdGhlclVzZXJ9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIG1zZz17dGhpcy5wcm9wcy5tc2d9IHVJZCA9e3RoaXMucHJvcHMudUlkfSBvdGhlclVzZXJJZD17dGhpcy5wcm9wcy5vdGhlclVzZXJJZH0gam9pblVzZXI9e3RoaXMucHJvcHMuam9pblVzZXJ9Lz5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlSW5wdXQgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kfSB1SWQgPXt0aGlzLnByb3BzLnVJZH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\components\\ChatPannel.js */"));
  }

}

class Message extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      msgComing: false,
      msg: [],
      showJoin: 'none',
      timeId: null
    };
    this.msg = [];
  }

  componentDidUpdate(prevProps) {
    if (this.props.msg !== prevProps.msg) {
      this.msg.push(this.props.msg);
      this.setState({
        msg: this.msg
      });
      console.log(this.state.msg);
    }

    if (this.props.joinUser !== prevProps.joinUser) {
      console.log(this.props.joinUser);
      this.setState({
        showJoin: 'block'
      });
    }
  }

  render() {
    return __jsx("div", {
      style: {
        position: 'relative',
        top: '0%',
        width: '100%',
        height: "83%",
        overflowY: 'scroll'
      },
      className: "jsx-3209412738",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3209412738",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, this.msg.length > 0 && this.state.msg.map((item, index) => __jsx("div", {
      key: index,
      className: "jsx-3209412738" + " " + "msg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, item.sender == this.props.uId && item.receiver == this.props.otherUserId && __jsx("div", {
      className: "jsx-3209412738" + " " + "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3209412738" + " " + "sender",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, item.sender), __jsx("div", {
      className: "jsx-3209412738" + " " + 'data',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, item.data)), item.receiver == this.props.uId && item.sender == this.props.otherUserId && __jsx("div", {
      className: "jsx-3209412738" + " " + "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3209412738" + " " + "sender",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, item.sender), __jsx("div", {
      className: "jsx-3209412738" + " " + 'data',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, item.data))))), __jsx("div", {
      className: "jsx-3209412738",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, this.msg.length == 0 && null), __jsx("div", {
      style: {
        display: this.state.showJoin,
        textAlign: 'center'
      },
      className: "jsx-3209412738",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, this.props.joinUser == this.props.uId ? __jsx("span", {
      className: "jsx-3209412738",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "You join in the room") : __jsx("span", {
      className: "jsx-3209412738",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, this.props.joinUser, " join in the room")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3209412738",
      __self: this
    }, ".msg.jsx-3209412738{-webkit-animation:.65s ease-out 0s show-jsx-3209412738;animation:.65s ease-out 0s show-jsx-3209412738;}@-webkit-keyframes show-jsx-3209412738{0%{opacity:0;}100%{opacity:1;}}@keyframes show-jsx-3209412738{0%{opacity:0;}100%{opacity:1;}}.right.jsx-3209412738{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.right.jsx-3209412738 .sender.jsx-3209412738{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-order:2;-ms-flex-order:2;order:2;}.msg.jsx-3209412738 .right.jsx-3209412738 .data.jsx-3209412738{background:#5df06c;margin-top:10px;margin-bottom:10px;border-radius:10px;padding:5px 5px;display:inline-block;color:#fff;-webkit-order:1;-ms-flex-order:1;order:1;}.left.jsx-3209412738{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;text-align:left;}.msg.jsx-3209412738 .left.jsx-3209412738 .data.jsx-3209412738{background:#0181cc;margin-top:10px;margin-bottom:10px;border-radius:10px;padding:5px 5px;display:inline-block;color:#fff;-webkit-order:2;-ms-flex-order:2;order:2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXENoYXRQYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lnQixBQUtnQixBQUMwQixBQUFhLEFBRXRCLEFBS0EsQUFLTyxBQVVQLEFBTU8sVUE1QkcsQUFBYSxTQWFwQixBQWdCQSxnQkFmSSxBQWdCQSxtQkFmQSxBQWdCQSxtQkFmSCxBQWdCQSxDQTdCUSxBQUtBLEFBZUUsZUFOTCxBQWdCQSxhQWxDekIsUUFtQmMsQUFnQkEsV0FkZixBQWdCQSx5Q0FoQkMsQUFnQkEsU0EvQkEsQUFLRixRQWNzQixnQkFDcEIsaUJBZkQiLCJmaWxlIjoiRDpcXHdvcmtwbGFjZVxcZnJvbnQtZW5kXFxwYWdlc1xcY29tcG9uZW50c1xcQ2hhdFBhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0JhY2sgfSBmcm9tICdyZWFjdC1pY29ucy9pbydcclxuXHJcblxyXG5jbGFzcyBDaGF0SGVhZGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrPShlKT0+e1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjEwJVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsYmFja2dyb3VuZENvbG9yOicjNTkzMTk2Jyx3aWR0aDpcIjEwMCVcIixjb2xvcjpcIiNmZmZcIixoZWlnaHQ6XCIxMDAlXCIscGFkZGluZzpcIjdweFwifX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyTmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jbG9zZVwiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiY2xvc2VDaGF0XCIgb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT48SW9Jb3NBcnJvd0JhY2sgY29sb3I9IFwiI2ZmZlwiLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWNsb3Nle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1OTMxOTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbXNnQ29taW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbXNnOiBbXSxcclxuICAgICAgICAgICAgc2hvd0pvaW46ICdub25lJyxcclxuICAgICAgICAgICAgdGltZUlkOm51bGxcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1zZyA9W11cclxuICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLm1zZyAhPT0gcHJldlByb3BzLm1zZyl7ICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm1zZy5wdXNoKHRoaXMucHJvcHMubXNnKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG1zZzogdGhpcy5tc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tc2cpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuam9pblVzZXIgIT09cHJldlByb3BzLmpvaW5Vc2VyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5qb2luVXNlcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93Sm9pbjogJ2Jsb2NrJywgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJyx0b3A6JzAlJyx3aWR0aDonMTAwJScsaGVpZ2h0OlwiODMlXCIsb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1zZy5sZW5ndGg+MCYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tc2cubWFwKChpdGVtLGluZGV4KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1zZ1wiID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VuZGVyID09IHRoaXMucHJvcHMudUlkJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVjZWl2ZXIgPT0gdGhpcy5wcm9wcy5vdGhlclVzZXJJZCYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInNlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZWNlaXZlciA9PSB0aGlzLnByb3BzLnVJZCYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNlbmRlciA9PSB0aGlzLnByb3BzLm90aGVyVXNlcklkJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1zZy5sZW5ndGg9PTAmJlxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3dKb2luLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5qb2luVXNlciA9PSB0aGlzLnByb3BzLnVJZD9cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Zb3Ugam9pbiBpbiB0aGUgcm9vbTwvc3Bhbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuam9pblVzZXJ9IGpvaW4gaW4gdGhlIHJvb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOi42NXMgZWFzZS1vdXQgMHMgc2hvd1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaG93ezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19XHJcbiAgICAgICAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLnJpZ2h0IC5zZW5kZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogMlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubXNnIC5yaWdodCAuZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWRmMDZjO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1zZyAubGVmdCAuZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDE4MWNjO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgTWVzc2FnZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtc2c6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVDbGljaz0gKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnN0YXRlLm1zZylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttc2c6Jyd9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICBtc2c6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLHdpZHRoOicxMDAlJyxoZWlnaHQ6ICcxMCUnfX0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibXNnXCIgdmFsdWU9e3RoaXMuc3RhdGUubXNnfSBvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubXNnLmxlbmd0aDwxfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXNlbmRcIj5TZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bi1zZW5ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDYzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNzc3OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdFBhbm5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgbXNnOiBudWxsLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbmQgPSB0aGlzLmhhbmRsZVNlbmQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICBcclxuICAgIGhhbmRsZVNlbmQgPShlKSA9PntcclxuICAgICAgICBjb25zdCB7IHVJZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBzZW5kZXI6IHVJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHRoaXMucHJvcHMub3RoZXJVc2VySWQsXHJcbiAgICAgICAgICAgIGRhdGE6IGUsXHJcbiAgICAgICAgICAgIHJvb21JZDogdGhpcy5wcm9wcy5yb29tSWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbmQoJ3NlbmRfbXNnJyxkYXRhKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgIDxDaGF0SGVhZGluZyB1c2VyTmFtZT17dGhpcy5wcm9wcy5vdGhlclVzZXJ9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIG1zZz17dGhpcy5wcm9wcy5tc2d9IHVJZCA9e3RoaXMucHJvcHMudUlkfSBvdGhlclVzZXJJZD17dGhpcy5wcm9wcy5vdGhlclVzZXJJZH0gam9pblVzZXI9e3RoaXMucHJvcHMuam9pblVzZXJ9Lz5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlSW5wdXQgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kfSB1SWQgPXt0aGlzLnByb3BzLnVJZH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\components\\ChatPannel.js */"));
  }

}

class MessageInput extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick", e => {
      e.preventDefault();
      this.props.onClick(this.state.msg);
      this.setState({
        msg: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", e => {
      this.setState({
        msg: e.target.value
      });
    });

    this.state = {
      msg: ''
    };
  }

  render() {
    return __jsx("div", {
      style: {
        position: 'relative',
        width: '100%',
        height: '10%'
      },
      className: "jsx-279769618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, __jsx("form", {
      onSubmit: this.handleClick,
      className: "jsx-279769618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, __jsx("input", {
      name: "msg",
      value: this.state.msg,
      onChange: this.handleChange.bind(this),
      className: "jsx-279769618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }), __jsx("button", {
      disabled: this.state.msg.length < 1,
      type: "submit",
      className: "jsx-279769618" + " " + "btn-send",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "Send")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "279769618",
      __self: this
    }, ".btn-send.jsx-279769618{border-radius:3px;background-color:#ffd633;border:none;width:30%;height:100%;}input.jsx-279769618{height:100%;width:70%;border-radius:3px;border:2px solid #777;}input.jsx-279769618:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXENoYXRQYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc05vQixBQUcrQyxBQU9OLEFBTVMsWUFMWixNQVBnQixHQWFmLENBTFEsU0FNK0QsU0FMM0QsR0FSVixZQUNILE9BUWIsR0FORCxZQUFDLG1DQVlELHlFQUFDIiwiZmlsZSI6IkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXENoYXRQYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElvSW9zQXJyb3dCYWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXHJcblxyXG5cclxuY2xhc3MgQ2hhdEhlYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbGljaz0oZSk9PntcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCIxMCVcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLGJhY2tncm91bmRDb2xvcjonIzU5MzE5Nicsd2lkdGg6XCIxMDAlXCIsY29sb3I6XCIjZmZmXCIsaGVpZ2h0OlwiMTAwJVwiLHBhZGRpbmc6XCI3cHhcIn19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlck5hbWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImNsb3NlQ2hhdFwiIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+PElvSW9zQXJyb3dCYWNrIGNvbG9yPSBcIiNmZmZcIi8+PC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1jbG9zZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0yN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTkzMTk2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1zZ0NvbWluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzogW10sXHJcbiAgICAgICAgICAgIHNob3dKb2luOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHRpbWVJZDpudWxsXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tc2cgPVtdXHJcbiAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpe1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5tc2cgIT09IHByZXZQcm9wcy5tc2cpeyAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5tc2cucHVzaCh0aGlzLnByb3BzLm1zZylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBtc2c6IHRoaXMubXNnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubXNnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLmpvaW5Vc2VyICE9PXByZXZQcm9wcy5qb2luVXNlcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuam9pblVzZXIpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0pvaW46ICdibG9jaycsICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsdG9wOicwJScsd2lkdGg6JzEwMCUnLGhlaWdodDpcIjgzJVwiLG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tc2cubGVuZ3RoPjAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubXNnLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtc2dcIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNlbmRlciA9PSB0aGlzLnByb3BzLnVJZCYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJlY2VpdmVyID09IHRoaXMucHJvcHMub3RoZXJVc2VySWQmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVjZWl2ZXIgPT0gdGhpcy5wcm9wcy51SWQmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zZW5kZXIgPT0gdGhpcy5wcm9wcy5vdGhlclVzZXJJZCYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tc2cubGVuZ3RoPT0wJiZcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93Sm9pbix0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuam9pblVzZXIgPT0gdGhpcy5wcm9wcy51SWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+WW91IGpvaW4gaW4gdGhlIHJvb208L3NwYW4+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmpvaW5Vc2VyfSBqb2luIGluIHRoZSByb29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIC5tc2d7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjouNjVzIGVhc2Utb3V0IDBzIHNob3dcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2hvd3swJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fVxyXG4gICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5yaWdodCAuc2VuZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDJcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1zZyAucmlnaHQgLmRhdGF7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzVkZjA2YztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tc2cgLmxlZnQgLmRhdGF7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxODFjYztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIE1lc3NhZ2VJbnB1dCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbXNnOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlQ2xpY2s9IChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5zdGF0ZS5tc2cpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bXNnOicnfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgbXNnOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJyx3aWR0aDonMTAwJScsaGVpZ2h0OiAnMTAlJ319PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm1zZ1wiIHZhbHVlPXt0aGlzLnN0YXRlLm1zZ30gb25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLm1zZy5sZW5ndGg8MX0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1zZW5kXCI+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG4tc2VuZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2MzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzc3NzsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM2NmFmZTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRQYW5uZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIG1zZzogbnVsbCxcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZW5kID0gdGhpcy5oYW5kbGVTZW5kLmJpbmQodGhpcylcclxuICAgIH1cclxuICAgXHJcbiAgICBoYW5kbGVTZW5kID0oZSkgPT57XHJcbiAgICAgICAgY29uc3QgeyB1SWQgfSA9IHRoaXMucHJvcHNcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgc2VuZGVyOiB1SWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyOiB0aGlzLnByb3BzLm90aGVyVXNlcklkLFxyXG4gICAgICAgICAgICBkYXRhOiBlLFxyXG4gICAgICAgICAgICByb29tSWQ6IHRoaXMucHJvcHMucm9vbUlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMub25TZW5kKCdzZW5kX21zZycsZGF0YSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdEhlYWRpbmcgdXNlck5hbWU9e3RoaXMucHJvcHMub3RoZXJVc2VyfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBtc2c9e3RoaXMucHJvcHMubXNnfSB1SWQgPXt0aGlzLnByb3BzLnVJZH0gb3RoZXJVc2VySWQ9e3RoaXMucHJvcHMub3RoZXJVc2VySWR9IGpvaW5Vc2VyPXt0aGlzLnByb3BzLmpvaW5Vc2VyfS8+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZUlucHV0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZH0gdUlkID17dGhpcy5wcm9wcy51SWR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\components\\ChatPannel.js */"));
  }

}

class ChatPannel extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSend", e => {
      const {
        uId
      } = this.props;
      const data = {
        sender: uId,
        receiver: this.props.otherUserId,
        data: e,
        roomId: this.props.roomId
      };
      this.props.onSend('send_msg', data);
    });

    this.state = {
      msg: null
    };
    this.handleSend = this.handleSend.bind(this);
  }

  render() {
    return __jsx("div", {
      style: {
        height: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, __jsx(ChatHeading, {
      userName: this.props.otherUser,
      onClick: this.props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }), __jsx(Message, {
      msg: this.props.msg,
      uId: this.props.uId,
      otherUserId: this.props.otherUserId,
      joinUser: this.props.joinUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }), __jsx(MessageInput, {
      onClick: this.handleSend,
      uId: this.props.uId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\workplace\\front-end\\pages\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = () => __jsx("div", {
  className: "jsx-384348871",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-384348871",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Women's archive"), __jsx("link", {
  rel: "stylesheet",
  href: "https://bootswatch.com/4/pulse/bootstrap.min.css",
  className: "jsx-384348871",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://unpkg.com/react-table@latest/react-table.css",
  className: "jsx-384348871",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), __jsx("h5", {
  style: {
    backgroundColor: "rgba(116, 116, 111, 0.359)",
    color: "green",
    width: "50%"
  },
  className: "jsx-384348871",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Australia Women's Archives Project"), __jsx("h1", {
  style: {
    color: '#ffd633'
  },
  className: "jsx-384348871" + " " + 'display-4',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "The Australian Women's Register"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "384348871",
  __self: undefined
}, "div.jsx-384348871{position:relative;height:5%;width:80%;font-family:'Cochin';margin-right:auto;margin-left:auto;}h6.jsx-384348871{position:relative;color:purple;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBRzZCLEFBU0Qsa0JBUlAsQUFVYixVQVRhLEdBU1osT0FSdUIscUJBQ0gsa0JBQ0QsaUJBRW5CIiwiZmlsZSI6IkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuIFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPldvbWVuJ3MgYXJjaGl2ZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvcHVsc2UvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XHJcbiAgICAgICBcclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXRhYmxlQGxhdGVzdC9yZWFjdC10YWJsZS5jc3NcIi8+XHJcbiAgICAgICBcclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aDUgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDExNiwgMTE2LCAxMTEsIDAuMzU5KVwiLGNvbG9yOlwiZ3JlZW5cIix3aWR0aDpcIjUwJVwifX0+XHJcbiAgICAgIEF1c3RyYWxpYSBXb21lbidzIEFyY2hpdmVzIFByb2plY3Q8L2g1PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTQnIHN0eWxlPXt7Y29sb3I6JyNmZmQ2MzMnfX0+VGhlIEF1c3RyYWxpYW4gV29tZW4ncyBSZWdpc3RlcjwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1JTtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvY2hpbic7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBoNntcclxuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgY29sb3I6cHVycGxlXHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\components\\Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/components/InnerMsg.js":
/*!**************************************!*\
  !*** ./pages/components/InnerMsg.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\workplace\\front-end\\pages\\components\\InnerMsg.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function fetchMsg() {
  const email = localStorage.getItem('email');
  const data = {
    email: email
  };
  var str = "?";

  for (var k in data) {
    if (str != "?") {
      str += "&";
    }

    str += k + "=" + data[k];
  }

  var url = 'http://localhost:80/check_unread_num';
  var requestURL = url + encodeURI(str);
  fetch(requestURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }).then(function (response) {
    return response.json().then(function (json) {
      returnNum(json);
    });
  });
}

function returnNum(props) {
  return props;
}

class msg extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: ''
    };
  }

  componentDidMount() {
    const num = fetchMsg();
    this.setState({
      num: num
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-1403560686",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/message",
      style: {
        marginRight: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1403560686",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("img", {
      src: "/static/email.png",
      title: "Message",
      style: {
        width: '15%'
      },
      className: "jsx-1403560686",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx("div", {
      style: {
        backgroundColor: "red",
        borderRadius: "50%",
        color: "white"
      },
      className: "jsx-1403560686",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, this.state.num))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1403560686",
      __self: this
    }, ".tooltip.jsx-1403560686{position:relative;display:inline-block;border-bottom:1px dotted black;}.tooltip.jsx-1403560686 .tooltiptext.jsx-1403560686{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:-5px;left:105%;}.tooltip.jsx-1403560686:hover .tooltiptext.jsx-1403560686{visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXElubmVyTXNnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdENEIsQUFHdUMsQUFNQSxBQWNDLGtCQW5CRSxBQU1ULENBY2hCLFdBYjJCLFNBTlEsY0FPcEIsV0FDTyxNQVB0QixZQVFzQixrQkFDSixjQUNJLGtCQUNSLFVBQ0QsU0FDQyxVQUNkIiwiZmlsZSI6IkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXGNvbXBvbmVudHNcXElubmVyTXNnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gZmV0Y2hNc2cgKCl7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgfVxyXG4gICAgdmFyIHN0ciA9IFwiP1wiO1xyXG4gICAgZm9yKHZhciBrIGluIGRhdGEpe1xyXG4gICAgICAgIGlmKHN0ciAhPSBcIj9cIil7XHJcbiAgICAgICAgICAgIHN0ciArPSBcIiZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyICs9IGsgKyBcIj1cIiArIGRhdGFba107XHJcbiAgICB9XHJcbiAgICB2YXIgdXJsID0naHR0cDovL2xvY2FsaG9zdDo4MC9jaGVja191bnJlYWRfbnVtJ1xyXG4gICAgdmFyIHJlcXVlc3RVUkwgPSB1cmwgICsgZW5jb2RlVVJJKHN0cik7XHJcbiAgICBmZXRjaChyZXF1ZXN0VVJMLHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSwgXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuTnVtKGpzb24pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIHJldHVybk51bShwcm9wcyl7XHJcbiAgICByZXR1cm4gcHJvcHNcclxufVxyXG5cclxuY2xhc3MgbXNnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBudW06JydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IG51bSA9IGZldGNoTXNnKClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbnVtOiBudW1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZXNzYWdlJyBzdHlsZT17e21hcmdpblJpZ2h0OlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvZW1haWwucG5nJyB0aXRsZT0nTWVzc2FnZScgc3R5bGU9e3t3aWR0aDonMTUlJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJlZFwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGNvbG9yOlwid2hpdGVcIn19Pnt0aGlzLnN0YXRlLm51bX08L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC50b29sdGlwIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbXNnOyJdfQ== */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\components\\InnerMsg.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (msg);

/***/ }),

/***/ "./pages/components/http.js":
/*!**********************************!*\
  !*** ./pages/components/http.js ***!
  \**********************************/
/*! exports provided: Get, Post, Connect, Emit, On */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return Connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emit", function() { return Emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "On", function() { return On; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/config */ "./pages/util/config.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_util_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




const Get = async function (method, data) {
  var url = global.url;
  var str = "?";

  for (var k in data) {
    if (str != "?") {
      str += "&";
    }

    str += k + "=" + data[k];
  }

  var requestURL = url + method + encodeURI(str);
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(requestURL);
  const json = await res.json();
  return json;
};
const Post = async function (method, data) {
  var url = global.url;
  var requestURL = url + method;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(requestURL, {
    method: 'POST',
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
  const json = await res.json();
  return json;
};
const Connect = () => {
  const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3001');
  socket.on('connect', () => {
    console.log('Connected!');
  });
  return socket;
};
const Emit = (method, data, socket) => {
  if (method !== null || socket !== null) {
    socket.emit(method, data);
  } else {
    return null;
  }
};
const On = (method, handler, socket) => {
  if (method !== null || socket !== null) {
    socket.on(method, function (msg) {
      if (msg !== null) {
        handler(msg);
      }
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./pages/components/myLayoutAfter.js":
/*!*******************************************!*\
  !*** ./pages/components/myLayoutAfter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./pages/components/Header.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./pages/components/navigation.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chat */ "./pages/components/Chat.js");
var _jsxFileName = "D:\\workplace\\front-end\\pages\\components\\myLayoutAfter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: null
    };
  }

  componentDidMount() {
    const uId = localStorage.getItem('uId');
    const role = localStorage.getItem('role');
    console.log(role);
    this.setState({
      role
    });

    if (uId == null) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
        pathname: '/signin'
      });
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      role: this.state.role,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/components/navigation.js":
/*!****************************************!*\
  !*** ./pages/components/navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InnerMsg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InnerMsg */ "./pages/components/InnerMsg.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\workplace\\front-end\\pages\\components\\navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const linkStyle = {
  marginRight: 100
};

class navi extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      uId: ''
    };
  }

  componentDidMount() {
    const uId = localStorage.getItem('uId');
    this.setState({
      uId: uId
    });
  }

  handleClick(e) {
    e.preventDefault();
    localStorage.removeItem('role');
    localStorage.removeItem('uId');
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
      pathname: '/signin'
    });
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, this.props.role == null && __jsx("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: "collapse navbar-collapse",
      id: "navbarColor01",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      title: "Home page",
      className: "nav-link",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Home ", __jsx("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "(current)"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/signin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Sign in")), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/Signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Sign up")), __jsx("button", {
      type: "button",
      className: "btn btn-primary btn-lg",
      onClick: this.handleClick.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Sign out")))), this.props.role == 'Contributor' && __jsx("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("div", {
      className: "collapse navbar-collapse",
      id: "navbarColor01",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      title: "Home page",
      className: "nav-link",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Home ", __jsx("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "(current)"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/Contribute",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Contribute")), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/myEntity/[id]",
      as: `/myEntity/${this.state.uId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "My Entity"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/Profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Profile"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "btn btn-primary btn-lg",
      onClick: this.handleClick.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Sign out")))), this.props.role == 'Curator' && __jsx("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("div", {
      className: "collapse navbar-collapse",
      id: "navbarColor01",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Home ", __jsx("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "(current)"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/Contribute",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Contribute")), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/reEntity/[id]",
      as: `/reEntity/${this.state.uId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Verify Entity"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/myEntity/[id]",
      as: `/myEntity/${this.state.uId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "My Entity"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/Profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Profile"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(_InnerMsg__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), __jsx("button", {
      type: "button",
      className: "btn btn-primary btn-lg",
      onClick: this.handleClick.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Sign out")))), this.props.role == 'Manager' && __jsx("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("div", {
      className: "collapse navbar-collapse",
      id: "navbarColor01",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "Home ", __jsx("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "(current)"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/Contribute",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Contribute")), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/reEntity/[id]",
      as: `/reEntity/${this.state.uId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Release Entity"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/account",
      as: "/account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "account"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/myEntity/[id]",
      as: `/myEntity/${this.state.uId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "My Entity"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("a", {
      style: linkStyle,
      className: "nav-link",
      href: "/Profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "Profile"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "btn btn-primary btn-lg",
      onClick: this.handleClick.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "Sign out")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (navi);

/***/ }),

/***/ "./pages/css/app.css":
/*!***************************!*\
  !*** ./pages/css/app.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container1": "_3XpNAqCGF9T0JNl_069m2E",
	"input": "_5wleJ3SJU3FgRLO9mluUS"
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_myLayoutAfter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/myLayoutAfter */ "./pages/components/myLayoutAfter.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/config */ "./pages/util/config.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_util_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/app.css */ "./pages/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\workplace\\front-end\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Home = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const query = router.query;
  console.log(query);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_components_myLayoutAfter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userInfo: query,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Welcome to women in Australia website!", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), "Our purpose is share more outstanding women archive in Australia!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/util/config.js":
/*!******************************!*\
  !*** ./pages/util/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

global.url = "http://10.9.130.197:5000/"; // global.socket.url = "http://localhost:3001"

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workplace\front-end\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map