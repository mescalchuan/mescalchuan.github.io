webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(12))(82);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (undefined !== 'production') {
  var ReactIs = __webpack_require__(50);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(51)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(52)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseFont = parseInt(document.documentElement.style.fontSize);

exports.default = {
    window: {
        width: document.body.clientWidth,
        height: document.body.clientHeight
        //screenHeight: Dimensions.get('window').height
    },
    theme: {
        mainColor: '#108ee9',
        minorColor: '#333333',
        lineColor: '#eeeeee'
    },
    px2rem: function px2rem(pxv) {
        return parseInt(pxv) / 75 + 'rem';
    },
    rem2px: function rem2px(remv) {
        return parseFloat(remv) * 75 + 'px';
    },
    getDpr: function getDpr() {
        var dpr = window.devicePixelRatio;
        var isIPhone = window.navigator.appVersion.match(/iphone/gi);
        if (dpr > 3) dpr = 3;
        if (!isIPhone) dpr = 1;
        return dpr;
    },
    getFontSize: function getFontSize(fspx) {
        var dpr = this.getDpr();
        return fspx * dpr + 'px';
    },

    style: {
        flexbox: function flexbox() {
            return _defineProperty({
                display: 'flex'
            }, 'display', '-webkit-flex');
        }
    },
    icon64: {
        back: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA2ElEQVRYR93XYQrDIAwF4OaGucHak82ewNwwQ1hhDEef5qmw/ipU+j5jiVa2xZcszt/+D6Cqu4h4zvlEqkutgKomEXmUYHc/zCzdIWiAz/DpgEr4aWb73ezL83AFIuFhQDQ8BGCEdwNY4V0AZngzgB3eBBgRDgNGhUOAd29/Xk3F3eEmQ2lEFUAyswN5OTIG6oSVJaAhIECZySgEDBiFaAKMQDQD2IguABPRDWAhQgAGIgyIIiiAH4i5p+JvxPRj+dX3y95R7pF/Amg3RDaUyBjaN9CLWA54AYnZySGc5hn7AAAAAElFTkSuQmCC',
        right: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPElEQVRYR+3W4W3CQAwFYHuCztANGKHdwJmgMEHbCWCEdILCBHkj0A3KBozQTvDQSYkUohDuYgv+cP8iJXpfbJ/uVO689M758gBkV8DMtqr6RrIG8BnVumxAVVXsQkluAawiENkAM6tV9b2HgIisAPx5INmAFNK1oYf4FZFXD6II0CI2qrqOQhQDWsRSVb8jELMAE4gKwLFkJmYDLiDSQKaZSLORtVyAHqIWkaf0TLII4Qa0iIWq7ucgQgAeRBjgAuII4HlqGKIBZ9tTRA5N0yxuAjCzYfg/yZdrOyKkAiPhhzb86jnhBnjCU2tcAG+4CxARPhtgZmcnYpr23J4Pd0RxC4Z3Ak94cQVGwn9I2k0uJCNXsh2AZdaRN/FSdgsGl9KQ8KIWdINH8gvAh/fPu++zKxAV6N4F0ZBHBU6sr84hNDPE8wAAAABJRU5ErkJggg==',
        backWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA0klEQVRYR93XUQqDMBAE0J2Ttp6setItWyxISeskO2ug+RPEeSYyibDJA5Pz7f8A7n43MwewMbMrnQF3X83stgcvAOL655ABPsIj9DpAI3wDEEtxOtIzkAkPXQqQDU8BFOHDAFX4EEAZ3g1Qh3cBKsJpQFU4Bdi7/XFoFLpkTluI6YEGYAWwMA9n7qGKqLEEMgQFiDepQtCAKkQXoALRDVAjhgBKxDBAhUgBFIg0IIuQAL4grjuUvit36rH8gHidhpl/Amo3ZDaUzD2yb2AUMR3wBNGcgSHOnzBkAAAAAElFTkSuQmCC',
        arrowDown: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA40lEQVRYR+3VYQ3CMBAF4HcOkDAHCwoAB1cFIAUpONhJQMIs4AAUlDRhpAnbej2a7M/1b5e+ry9tR9h40Mb5cIA34A14Az8NMPMVwAFAEJFnq4eKmW8AehHZ52v+AEII9wSIMY4ATi0QKZyIzgAewzB0qwBm3hFRQvQtEFn4K8Z4FJG0se+YPYStEKXwpFi8Bf8iNOGrgDRpRWjDiwALoiZcBahB1IarARqEJbwKsIawhlcDFhAjEV0AzN7z0ktq+hnlt+MTYAo3NTDtKEN0cy9caefTvKkB7eKa7xzgDXgD3sAbFmzGIQusUd8AAAAASUVORK5CYII=',
        arrowUp: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1UlEQVRYR+3VwQ2DMAwF0O8Nukm7QcsGyaTxBmWEsgkbpHLVSCikgJ1KXJwLB4T+4wsbwsmHTs6HA7wBb8DcQAjhAuAJYAYQmVmu6mMClHAiuklizvkFYLAg1IAqfPq+8tWKUAHq8JzzQwBENAIwIQ4DWuGlcrlnRRwCbIWXr86K2AUcCe9BbAI04VbET4Al3IJoAnrCtYgV4B/hGsQKEGOUmb4DmGTOLdttuY+r6RiZeVjebwFkrcp67Q5vNDGnlD7Lq5zdMVT/XZQPOMAb8Aa8AW/gDQQawyGmIwcTAAAAAElFTkSuQmCC'
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = routerWarning;
exports._resetWarned = _resetWarned;

var _warning = __webpack_require__(56);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function routerWarning(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
}

function _resetWarned() {
  warned = {};
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (undefined !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (undefined !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidChild(object) {
  return object == null || _react2.default.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */
function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2.default.Children.forEach(children, function (element) {
    if (_react2.default.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */
function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
exports.falsy = falsy;

var _react = __webpack_require__(0);

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var arrayOf = _react.PropTypes.arrayOf;
var oneOfType = _react.PropTypes.oneOfType;
var element = _react.PropTypes.element;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;
function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = exports.history = shape({
  listen: func.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired
});

var component = exports.component = oneOfType([func, string]);
var components = exports.components = oneOfType([component, object]);
var route = exports.route = oneOfType([object, element]);
var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extractPath = extractPath;
exports.parsePath = parsePath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  undefined !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = Object.create(null);

function compilePattern(pattern) {
  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 *  The function calls callback(error, matched) when finished.
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */
function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }

  var _compilePattern2 = compilePattern(pattern);

  var regexpSource = _compilePattern2.regexpSource;
  var paramNames = _compilePattern2.paramNames;
  var tokens = _compilePattern2.tokens;


  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  }

  // Special-case patterns like '*' for catch-all routes.
  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    }

    // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.
    remainingPathname = '/' + remainingPathname;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: match.slice(1).map(function (v) {
      return v && decodeURIComponent(v);
    })
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var match = matchPattern(pattern, pathname);
  if (!match) {
    return null;
  }

  var paramNames = match.paramNames;
  var paramValues = match.paramValues;

  var params = {};

  paramNames.forEach(function (paramName, index) {
    params[paramName] = paramValues[index];
  });

  return params;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */
function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern);

  var tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0;

  var token = void 0,
      paramName = void 0,
      paramValue = void 0;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      !(paramValue != null || parenCount > 0) ? undefined !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenCount += 1;
    } else if (token === ')') {
      parenCount -= 1;
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      !(paramValue != null || parenCount > 0) ? undefined !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

      if (paramValue != null) pathname += encodeURIComponent(paramValue);
    } else {
      pathname += token;
    }
  }

  return pathname.replace(/\/+/g, '/');
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Indicates that navigation was caused by a call to history.push.
 */


exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BUTTON_TYPE = exports.BUTTON_SIZE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BUTTON_SIZE = exports.BUTTON_SIZE = {
    BIG: 'big',
    MIDDLE: 'middle',
    SMALL: 'small'
};

var BUTTON_TYPE = exports.BUTTON_TYPE = {
    FILL: 'fill',
    GHOST: 'ghost'
    /**
     * inline: 是否是行内按钮
     * buttonColor: 按钮背景色
     * buttonStyle: 自定义按钮样式
     * size: 按钮大小
     * type: 按钮类型
     * textStyle: 文本样式
     * disabled: 是否禁用
     * icon: 按钮小图标
     * onPress: 触摸函数
     */
};
var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var marginLeft = 0;
            var isGhost = this.props.type == BUTTON_TYPE.GHOST;
            var color = isGhost ? this.props.buttonColor : 'white';
            var buttonColor = isGhost ? 'transparent' : this.props.buttonColor;
            var buttonClass = this.props.inline ? 'x-button-inline x-button-' + this.props.size.toLowerCase() : 'x-button-block';
            if (this.props.icon) {
                if (this.props.inline) {
                    switch (this.props.size) {
                        case BUTTON_SIZE.SMALL:
                            marginLeft = 5;
                            break;
                        case BUTTON_SIZE.MIDDLE:
                            marginLeft = 10;
                            break;
                        case BUTTON_SIZE.BIG:
                            marginLeft = 15;
                            break;
                        default:
                            break;
                    }
                } else {
                    marginLeft = 10;
                }
            }

            return _react2.default.createElement(
                'div',
                {
                    className: 'x-button-container ' + buttonClass + (this.props.disabled ? ' x-button-disabled' : ''),
                    style: _extends({
                        backgroundColor: buttonColor,
                        borderColor: this.props.buttonColor
                    }, this.props.buttonStyle),
                    onClick: function onClick() {
                        return !_this2.props.disabled ? _this2.props.onPress() : {};
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'x-button-content' },
                    this.props.icon ? this.props.icon : null,
                    _react2.default.createElement(
                        'span',
                        { style: _extends({ color: color }, this.props.textStyle, { marginLeft: _util2.default.px2rem(marginLeft) }) },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Button;
}(_react.Component);

Button.defaultProps = {
    inline: false,
    buttonColor: _util2.default.theme.mainColor,
    buttonStyle: {},
    size: BUTTON_SIZE.MIDDLE,
    type: BUTTON_TYPE.FILL,
    textStyle: {},
    disabled: false,
    icon: null,
    onPress: function onPress() {}
};
Button.propTypes = {
    inline: _propTypes2.default.bool,
    buttonColor: _propTypes2.default.string,
    buttonStyle: _propTypes2.default.object,
    size: _propTypes2.default.string,
    type: _propTypes2.default.string,
    textStyle: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    icon: _propTypes2.default.element,
    onPress: _propTypes2.default.func
};
exports.default = Button;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = react_dll;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * listStyle: list样式
 * title: 列表标题
 * titleStyle: 自定义标题样式
 * rightContent: list右侧内容
 * rightIcon: 右侧icon
 * showRightIcon: 是否显示右侧icon
 *  leftContent: list左侧内容
 *  leftContentFlex: 左侧内容的垂直布局（flex-start、center、flex-end、stretch、baseline）
 *  rightContentFlex: 右侧内容的垂直布局（flex-start、center、flex-end、stretch、baseline）
 *  onPress: list点击时的回调
 *  showLine: 是否显示底部分割线
 *  lineMargin: 底部分割线的margin 基于html font-size
 */

var List = function (_Component) {
    _inherits(List, _Component);

    function List(props) {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'x-list-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'x-list-content', onClick: function onClick() {
                            return _this2.props.onPress();
                        }, style: this.props.listStyle },
                    _react2.default.createElement(
                        'div',
                        { className: 'x-list-row-flex x-list-align-' + this.props.leftContentFlex },
                        this.props.leftContent,
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                { className: 'x-list-title', style: this.props.titleStyle },
                                this.props.title
                            ),
                            this.props.children
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'x-list-row-flex x-list-align-' + this.props.rightContentFlex },
                        this.props.rightContent,
                        this.props.showRightIcon ? this.props.rightIcon : null
                    )
                ),
                this.props.showLine ? _react2.default.createElement('hr', { style: { margin: '0 ' + _util2.default.px2rem(this.props.lineMargin) } }) : null
            );
        }
    }]);

    return List;
}(_react.Component);

List.defaultProps = {
    listStyle: {},
    title: '',
    titleStyle: {},
    rightContent: null,
    rightIcon: _react2.default.createElement('img', { className: 'x-list-icon', src: _util2.default.icon64.right }),
    showRightIcon: false,
    leftContent: null,
    leftContentFlex: 'center',
    rightContentFlex: 'center',
    onPress: function onPress() {},
    showLine: false,
    lineMargin: 30
};
List.propTypes = {
    listStyle: _propTypes2.default.object,
    title: _propTypes2.default.string,
    titleStyle: _propTypes2.default.object,
    rightContent: _propTypes2.default.element,
    rightIcon: _propTypes2.default.element,
    showRightIcon: _propTypes2.default.bool,
    leftContent: _propTypes2.default.element,
    leftContentFlex: _propTypes2.default.string,
    rightContentFlex: _propTypes2.default.string,
    onPress: _propTypes2.default.func,
    showLine: _propTypes2.default.bool,
    lineMargin: _propTypes2.default.number
};
exports.default = List;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.canUseMembrane = undefined;

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseMembrane = exports.canUseMembrane = false;

// No-op by default.
var deprecateObjectProperties = function deprecateObjectProperties(object) {
  return object;
};

if (undefined !== 'production') {
  try {
    if (Object.defineProperty({}, 'x', {
      get: function get() {
        return true;
      }
    }).x) {
      exports.canUseMembrane = canUseMembrane = true;
    }
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

  if (canUseMembrane) {
    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
      // Wrap the deprecated object in a membrane to warn on property access.
      var membrane = {};

      var _loop = function _loop(prop) {
        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
          return 'continue';
        }

        if (typeof object[prop] === 'function') {
          // Can't use fat arrow here because of use of arguments below.
          membrane[prop] = function () {
            undefined !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
            return object[prop].apply(object, arguments);
          };
          return 'continue';
        }

        // These properties are non-enumerable to prevent React dev tools from
        // seeing them and causing spurious warnings when accessing them. In
        // principle this could be done with a proxy, but support for the
        // ownKeys trap on proxies is not universal, even among browsers that
        // otherwise support proxies.
        Object.defineProperty(membrane, prop, {
          get: function get() {
            undefined !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
            return object[prop];
          }
        });
      };

      for (var prop in object) {
        var _ret = _loop(prop);

        if (_ret === 'continue') continue;
      }

      return membrane;
    };
  }
}

exports.default = deprecateObjectProperties;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _queryString = __webpack_require__(63);

var _runTransitionHook = __webpack_require__(22);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = __webpack_require__(8);

var _deprecate = __webpack_require__(23);

var _deprecate2 = _interopRequireDefault(_deprecate);

var SEARCH_BASE_KEY = '$searchBase';

function defaultStringifyQuery(query) {
  return _queryString.stringify(query).replace(/%20/g, '+');
}

var defaultParseQueryString = _queryString.parse;

function isNestedObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
  }return false;
}

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
function useQueries(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);

    var stringifyQuery = options.stringifyQuery;
    var parseQueryString = options.parseQueryString;

    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    function addQuery(location) {
      if (location.query == null) {
        var search = location.search;

        location.query = parseQueryString(search.substring(1));
        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
      }

      // TODO: Instead of all the book-keeping here, this should just strip the
      // stringified query from the search.

      return location;
    }

    function appendQuery(location, query) {
      var _extends2;

      var searchBaseSpec = location[SEARCH_BASE_KEY];
      var queryString = query ? stringifyQuery(query) : '';
      if (!searchBaseSpec && !queryString) {
        return location;
      }

      undefined !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var searchBase = undefined;
      if (searchBaseSpec && location.search === searchBaseSpec.search) {
        searchBase = searchBaseSpec.searchBase;
      } else {
        searchBase = location.search || '';
      }

      var search = searchBase;
      if (queryString) {
        search += (search ? '&' : '?') + queryString;
      }

      return _extends({}, location, (_extends2 = {
        search: search
      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
    }

    // Override all read methods with query-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addQuery(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addQuery(location));
      });
    }

    // Override all write methods with query-aware versions.
    function push(location) {
      history.push(appendQuery(location, location.query));
    }

    function replace(location) {
      history.replace(appendQuery(location, location.query));
    }

    function createPath(location, query) {
      undefined !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

      return history.createPath(appendQuery(location, query || location.query));
    }

    function createHref(location, query) {
      undefined !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

      return history.createHref(appendQuery(location, query || location.query));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
      if (location.query) {
        fullLocation.query = location.query;
      }
      return addQuery(fullLocation);
    }

    // deprecated
    function pushState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path, { query: query }));
    }

    // deprecated
    function replaceState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path, { query: query }));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useQueries;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _deprecateObjectProperties = __webpack_require__(14);

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _getRouteParams = __webpack_require__(70);

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _RouteUtils = __webpack_require__(6);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var array = _React$PropTypes.array;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */

var RouterContext = _react2.default.createClass({
  displayName: 'RouterContext',


  propTypes: {
    history: object,
    router: object.isRequired,
    location: object.isRequired,
    routes: array.isRequired,
    params: object.isRequired,
    components: array.isRequired,
    createElement: func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2.default.createElement
    };
  },


  childContextTypes: {
    history: object,
    location: object.isRequired,
    router: object.isRequired
  },

  getChildContext: function getChildContext() {
    var _props = this.props;
    var router = _props.router;
    var history = _props.history;
    var location = _props.location;

    if (!router) {
      undefined !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

      router = _extends({}, history, {
        setRouteLeaveHook: history.listenBeforeLeavingRoute
      });
      delete router.listenBeforeLeavingRoute;
    }

    if (undefined !== 'production') {
      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
    }

    return { history: history, location: location, router: router };
  },
  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },
  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var history = _props2.history;
    var location = _props2.location;
    var routes = _props2.routes;
    var params = _props2.params;
    var components = _props2.components;

    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = (0, _getRouteParams2.default)(route, params);
        var props = {
          history: history,
          location: location,
          params: params,
          route: route,
          routeParams: routeParams,
          routes: routes
        };

        if ((0, _RouteUtils.isReactChildren)(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
          }
        }

        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
          var elements = {};

          for (var key in components) {
            if (Object.prototype.hasOwnProperty.call(components, key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || _react2.default.isValidElement(element)) ? undefined !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

    return element;
  }
});

exports.default = RouterContext;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconMap = __webpack_require__(42);

var _iconMap2 = _interopRequireDefault(_iconMap);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * name: icon名字，参考iconMap.json
 * size: icon大小
 * color: icon颜色
 * iconStyle: 自定义icon样式
 */

var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon(props) {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                size = _props.size,
                color = _props.color,
                iconStyle = _props.iconStyle;

            var _iconStyle = _extends({
                fontSize: _util2.default.getFontSize(size),
                color: color
            }, iconStyle);
            var iconCode = _iconMap2.default[name];
            if (!iconCode) iconCode = _iconMap2.default['ios-add'];
            return _react2.default.createElement(
                'i',
                { className: 'x-icon', style: _iconStyle },
                String.fromCharCode(iconCode)
            );
        }
    }]);

    return Icon;
}(_react.Component);

Icon.defaultProps = {
    name: 'ios-add',
    size: 30,
    color: '#666666',
    iconStyle: {}
};
Icon.propTypes = {
    name: _propTypes2.default.string,
    size: _propTypes2.default.number,
    color: _propTypes2.default.string,
    iconStyle: _propTypes2.default.object
};
exports.default = Icon;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(12))(101);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

var _react = __webpack_require__(0);

var _deprecateObjectProperties = __webpack_require__(14);

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _InternalPropTypes = __webpack_require__(7);

var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;
var routerShape = exports.routerShape = shape({
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  setRouteLeaveHook: func.isRequired,
  isActive: func.isRequired
});

var locationShape = exports.locationShape = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  state: object,
  action: string.isRequired,
  key: string
});

// Deprecated stuff below:

var falsy = exports.falsy = InternalPropTypes.falsy;
var history = exports.history = InternalPropTypes.history;
var location = exports.location = locationShape;
var component = exports.component = InternalPropTypes.component;
var components = exports.components = InternalPropTypes.components;
var route = exports.route = InternalPropTypes.route;
var routes = exports.routes = InternalPropTypes.routes;
var router = exports.router = routerShape;

if (undefined !== 'production') {
  (function () {
    var deprecatePropType = function deprecatePropType(propType, message) {
      return function () {
        undefined !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
        return propType.apply(undefined, arguments);
      };
    };

    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
    };

    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
    };

    exports.falsy = falsy = deprecateInternalPropType(falsy);
    exports.history = history = deprecateInternalPropType(history);
    exports.component = component = deprecateInternalPropType(component);
    exports.components = components = deprecateInternalPropType(components);
    exports.route = route = deprecateInternalPropType(route);
    exports.routes = routes = deprecateInternalPropType(routes);

    exports.location = location = deprecateRenamedPropType(location, 'location');
    exports.router = router = deprecateRenamedPropType(router, 'router');
  })();
}

var defaultExport = {
  falsy: falsy,
  history: history,
  location: location,
  component: component,
  components: components,
  route: route,
  // For some reason, routes was never here.
  router: router
};

if (undefined !== 'production') {
  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
}

exports.default = defaultExport;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    undefined !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    undefined !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createTransitionManager;

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _computeChangedRoutes2 = __webpack_require__(65);

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = __webpack_require__(66);

var _isActive2 = __webpack_require__(67);

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = __webpack_require__(68);

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = __webpack_require__(69);

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasAnyProperties(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
  }return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)
  function isActive(location) {
    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    var indexOnly = void 0;
    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
      undefined !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
      indexOnly = deprecatedIndexOnly || false;
    } else {
      location = history.createLocation(location);
      indexOnly = indexOnlyOrDeprecatedQuery;
    }

    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
  }

  var partialNextState = void 0;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, { location: location }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
    var changeRoutes = _computeChangedRoutes.changeRoutes;
    var enterRoutes = _computeChangedRoutes.enterRoutes;


    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

    // Tear down confirmation hooks for left routes
    leaveRoutes.filter(function (route) {
      return enterRoutes.indexOf(route) === -1;
    }).forEach(removeListenBeforeHooksForRoute);

    // change and enter hooks are run in series
    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
    });

    function finishEnterHooks(error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      // TODO: Fetch components after state is updated.
      (0, _getComponents2.default)(nextState, function (error, components) {
        if (error) {
          callback(error);
        } else {
          // TODO: Make match a pure function and have some other API
          // for "match and update state".
          callback(null, null, state = _extends({}, nextState, { components: components }));
        }
      });
    }

    function handleErrorOrRedirect(error, redirectInfo) {
      if (error) callback(error);else callback(null, redirectInfo);
    }
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = Object.create(null);

  function getRouteHooksForRoutes(routes) {
    return routes.reduce(function (hooks, route) {
      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
      return hooks;
    }, []);
  }

  function transitionHook(location, callback) {
    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      }

      // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.
      partialNextState = _extends({}, nextState, { location: location });

      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

      var result = void 0;
      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }

  /* istanbul ignore next: untestable with Karma */
  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);

      var message = void 0;
      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = void 0,
      unlistenBeforeUnload = void 0;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route, false);
    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }

  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and can return either a prompt message (string) to show the user,
   * to make sure they want to leave the page; or `false`, to prevent the transition.
   * Any other return value will have no effect.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */
  function listenBeforeLeavingRoute(route, hook) {
    // TODO: Warn if they register for a route that isn't currently
    // active. They're probably doing something wrong, like re-creating
    // route objects on every location change.
    var routeID = getRouteID(route);
    var hooks = RouteHooks[routeID];

    if (!hooks) {
      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

      RouteHooks[routeID] = [hook];

      if (thereWereNoRouteHooks) {
        // setup transition & beforeunload hooks
        unlistenBefore = history.listenBefore(transitionHook);

        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
      }
    } else {
      if (hooks.indexOf(hook) === -1) {
        undefined !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

        hooks.push(hook);
      }
    }

    return function () {
      var hooks = RouteHooks[routeID];

      if (hooks) {
        var newHooks = hooks.filter(function (item) {
          return item !== hook;
        });

        if (newHooks.length === 0) {
          removeListenBeforeHooksForRoute(route);
        } else {
          RouteHooks[routeID] = newHooks;
        }
      }
    };
  }

  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */
  function listen(listener) {
    // TODO: Only use a single history listener. Otherwise we'll
    // end up with multiple concurrent calls to match.
    return history.listen(function (location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.replace(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
            undefined !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
          }
        });
      }
    });
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}

//export default useRoutes

module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;
function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = void 0;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(Array.prototype.slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];

  if (length === 0) return callback(null, values);

  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;

      isDone = ++doneCount === length;

      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * content -->toast显示的内容
 * duration -->持续时间
 * mask -->是否使用遮罩层，默认为true，使用遮罩层的话在toast显示期间无法对屏幕进行任何操作
**/

var defaultConfig = {
    duration: 3000,
    mask: true,
    content: ''
};

var Toast = function (_Component) {
    _inherits(Toast, _Component);

    function Toast(props) {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

        _this.state = _extends({
            opacity: 0,
            renderView: false
        }, defaultConfig);
        _this.timer = null;
        return _this;
    }

    _createClass(Toast, [{
        key: 'timerPromise',
        value: function timerPromise(time) {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.timer = setTimeout(function () {
                    resolve(true);
                }, time);
            });
        }
    }, {
        key: 'statePromise',
        value: function statePromise(obj) {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.setState(function (prevState) {
                    return obj;
                });
                resolve(true);
            });
        }
    }, {
        key: 'show',
        value: function show(config) {
            var _this4 = this;

            var content = config.content,
                duration = config.duration,
                mask = config.mask;

            duration = duration ? duration : defaultConfig.duration;
            if (mask == undefined) {
                mask = defaultConfig.mask;
            }
            this.setState(function (prevState) {
                return {
                    renderView: true,
                    content: content,
                    duration: duration,
                    mask: mask
                };
            });
            this.timer && clearTimeout(this.timer);
            this.statePromise({
                renderView: true,
                content: content,
                duration: duration,
                mask: mask }).then(function () {
                return _this4.timerPromise(0);
            }) //等待视图更新完毕后再opacity: 1
            .then(function () {
                return _this4.statePromise({ opacity: 1 });
            }).then(function () {
                return _this4.timerPromise(duration);
            }).then(function () {
                return _this4.statePromise({ opacity: 0 });
            }).then(function () {
                return _this4.timerPromise(200);
            }).then(function () {
                return _this4.statePromise({ renderView: false });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.anim) {
                this.anim.stop();
                this.anim = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var toastStyle = {
                WebkitTransition: 'opacity 0.2s',
                transition: 'opacity 0.2s',
                opacity: this.state.opacity
            };
            return this.state.renderView ? _react2.default.createElement(
                'div',
                { className: 'x-toast-mask ' + (this.state.mask ? 'x-toast-point-auto' : 'x-toast-point-none'), style: toastStyle },
                _react2.default.createElement(
                    'div',
                    { className: 'x-toast-box' },
                    _react2.default.createElement(
                        'p',
                        { className: 'x-toast-text' },
                        this.state.content
                    )
                )
            ) : null;
        }
    }]);

    return Toast;
}(_react.Component);

exports.default = Toast;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var errorInfo = function errorInfo(propName, componentName, info) {
    return 'Invalid prop `' + propName + '` supplied to `' + componentName + '`, ' + info;
};

exports.default = {
    customMinValueTypes: function customMinValueTypes(props, propName, componentName) {
        if (typeof props[propName] !== 'number') {
            return new Error(errorInfo(propName, componentName, 'it must be number'));
        }
        if (props[propName] > props['maxValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be less than maxValue'));
        }
    },
    customMaxValueTypes: function customMaxValueTypes(props, propName, componentName) {
        if (typeof props[propName] !== 'number') {
            return new Error(errorInfo(propName, componentName, 'it must be number'));
        }
        if (props[propName] < props['minValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be greater than minValue'));
        }
    },
    customValueTypes: function customValueTypes(props, propName, componentName) {
        if (typeof props[propName] !== 'undefined') {
            if (typeof props[propName] !== 'number') {
                return new Error(errorInfo(propName, componentName, 'it must be number'));
            }
        }
        if (props[propName] < props['minValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be greater than minValue'));
        } else if (props[propName] > props['maxValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be less than maxValue'));
        }
    },
    customPageNumTypes: function customPageNumTypes(props, propName, componentName) {
        if (props[propName] != null) {
            if (typeof props[propName] !== 'number') {
                return new Error(errorInfo(propName, componentName, 'it must be number'));
            } else {
                if (props[propName] < 1) {
                    return new Error(errorInfo(propName, componentName, 'it must be greater than or equal to 1'));
                } else if (props[propName] > props['pageTotal']) {
                    return new Error(errorInfo(propName, componentName, 'it must be less than or equal to pageTotal'));
                }
            }
        }
    },
    customPageTotalTypes: function customPageTotalTypes(props, propName, componentName) {
        if (typeof props[propName] != 'number') {
            return new Error(errorInfo(propName, componentName, 'it must be number'));
        } else if (props[propName] < 1) {
            return new Error(errorInfo(propName, componentName, 'it must be greater than or equal to 1'));
        }
    },
    customProgressTypes: function customProgressTypes(props, propName, componentName) {
        if (typeof props[propName] !== 'number') {
            return new Error(errorInfo(propName, componentName, 'it must be number'));
        }
        if (props[propName] < props['minValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be greater than minValue'));
        } else if (props[propName] > props['maxValue']) {
            return new Error(errorInfo(propName, componentName, 'it must be less than maxValue'));
        }
    }
};

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = __webpack_require__(10);

var _PathUtils = __webpack_require__(8);

var _ExecutionEnvironment = __webpack_require__(15);

var _DOMUtils = __webpack_require__(21);

var _DOMStateStorage = __webpack_require__(30);

var _createDOMHistory = __webpack_require__(31);

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function ensureSlash() {
  var path = _DOMUtils.getHashPath();

  if (isAbsolutePath(path)) return true;

  _DOMUtils.replaceHashPath('/' + path);

  return false;
}

function addQueryStringValueToPath(path, key, value) {
  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
}

function stripQueryStringValueFromPath(path, key) {
  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
}

function getQueryStringValueFromPath(path, key) {
  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
  return match && match[1];
}

var DefaultQueryKey = '_k';

function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? undefined !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

  var queryKey = options.queryKey;

  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

  function getCurrentLocation() {
    var path = _DOMUtils.getHashPath();

    var key = undefined,
        state = undefined;
    if (queryKey) {
      key = getQueryStringValueFromPath(path, queryKey);
      path = stripQueryStringValueFromPath(path, queryKey);

      if (key) {
        state = _DOMStateStorage.readState(key);
      } else {
        state = null;
        key = history.createKey();
        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
      }
    } else {
      key = state = null;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startHashChangeListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function hashChangeListener() {
      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

      transitionTo(getCurrentLocation());
    }

    ensureSlash();
    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    var path = (basename || '') + pathname + search;

    if (queryKey) {
      path = addQueryStringValueToPath(path, queryKey, key);
      _DOMStateStorage.saveState(key, state);
    } else {
      // Drop key and state.
      location.key = location.state = null;
    }

    var currentHash = _DOMUtils.getHashPath();

    if (action === _Actions.PUSH) {
      if (currentHash !== path) {
        window.location.hash = path;
      } else {
        undefined !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
      }
    } else if (currentHash !== path) {
      // REPLACE
      _DOMUtils.replaceHashPath(path);
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopHashChangeListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function push(location) {
    undefined !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.push(location);
  }

  function replace(location) {
    undefined !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replace(location);
  }

  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

  function go(n) {
    undefined !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

    history.go(n);
  }

  function createHref(path) {
    return '#' + history.createHref(path);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopHashChangeListener();
  }

  // deprecated
  function pushState(state, path) {
    undefined !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.pushState(state, path);
  }

  // deprecated
  function replaceState(state, path) {
    undefined !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replaceState(state, path);
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    push: push,
    replace: replace,
    go: go,
    createHref: createHref,

    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
    pushState: pushState, // deprecated - warning is in createHistory
    replaceState: replaceState // deprecated - warning is in createHistory
  });
}

exports['default'] = createHashHistory;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint-disable no-empty */


exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    if (state == null) {
      window.sessionStorage.removeItem(createKey(key));
    } else {
      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
    }
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      undefined !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      undefined !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      undefined !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = __webpack_require__(15);

var _DOMUtils = __webpack_require__(21);

var _createHistory = __webpack_require__(32);

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? undefined !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _deepEqual = __webpack_require__(58);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _PathUtils = __webpack_require__(8);

var _AsyncUtils = __webpack_require__(61);

var _Actions = __webpack_require__(10);

var _createLocation2 = __webpack_require__(62);

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = __webpack_require__(22);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = __webpack_require__(23);

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var getUserConfirmation = options.getUserConfirmation;
  var keyLength = options.keyLength;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      undefined !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = makeStateWithLocation;

var _deprecateObjectProperties = __webpack_require__(14);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeStateWithLocation(state, location) {
  if (undefined !== 'production' && _deprecateObjectProperties.canUseMembrane) {
    var stateWithLocation = _extends({}, state);

    // I don't use deprecateObjectProperties here because I want to keep the
    // same code path between development and production, in that we just
    // assign extra properties to the copy of the state object in both cases.

    var _loop = function _loop(prop) {
      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
        return 'continue';
      }

      Object.defineProperty(stateWithLocation, prop, {
        get: function get() {
          undefined !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
          return location[prop];
        }
      });
    };

    for (var prop in location) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }

    return stateWithLocation;
  }

  return _extends({}, state, location);
}
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createRouterObject = createRouterObject;
exports.createRoutingHistory = createRoutingHistory;

var _deprecateObjectProperties = __webpack_require__(14);

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRouterObject(history, transitionManager) {
  return _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });
}

// deprecated
function createRoutingHistory(history, transitionManager) {
  history = _extends({}, history, transitionManager);

  if (undefined !== 'production') {
    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
  }

  return history;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _PropTypes = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _React$PropTypes = _react2.default.PropTypes;
var bool = _React$PropTypes.bool;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;
var oneOfType = _React$PropTypes.oneOfType;


function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
function isEmptyObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
  }return true;
}

function createLocationDescriptor(to, _ref) {
  var query = _ref.query;
  var hash = _ref.hash;
  var state = _ref.state;

  if (query || hash || state) {
    return { pathname: to, query: query, hash: hash, state: state };
  }

  return to;
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets the value of its
 * activeClassName prop.
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 *
 * Links may pass along location state and/or query string parameters
 * in the state/query props, respectively.
 *
 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
 */
var Link = _react2.default.createClass({
  displayName: 'Link',


  contextTypes: {
    router: _PropTypes.routerShape
  },

  propTypes: {
    to: oneOfType([string, object]),
    query: object,
    hash: string,
    state: object,
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    onClick: func,
    target: string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      style: {}
    };
  },
  handleClick: function handleClick(event) {
    if (this.props.onClick) this.props.onClick(event);

    if (event.defaultPrevented) return;

    !this.context.router ? undefined !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target) return;

    event.preventDefault();

    var _props = this.props;
    var to = _props.to;
    var query = _props.query;
    var hash = _props.hash;
    var state = _props.state;

    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

    this.context.router.push(location);
  },
  render: function render() {
    var _props2 = this.props;
    var to = _props2.to;
    var query = _props2.query;
    var hash = _props2.hash;
    var state = _props2.state;
    var activeClassName = _props2.activeClassName;
    var activeStyle = _props2.activeStyle;
    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

    undefined !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

    // Ignore if rendered outside the context of router, simplifies unit testing.
    var router = this.context.router;


    if (router) {
      // If user does not specify a `to` prop, return an empty anchor tag.
      if (to == null) {
        return _react2.default.createElement('a', props);
      }

      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
      props.href = router.createHref(location);

      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
        if (router.isActive(location, onlyActiveOnIndex)) {
          if (activeClassName) {
            if (props.className) {
              props.className += ' ' + activeClassName;
            } else {
              props.className = activeClassName;
            }
          }

          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
        }
      }
    }

    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
  }
});

exports.default = Link;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = __webpack_require__(6);

var _PatternUtils = __webpack_require__(9);

var _InternalPropTypes = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * A <Redirect> is used to declare another URL path a client should
 * be sent to when they request a given URL.
 *
 * Redirects are placed alongside routes in the route configuration
 * and are traversed in the same manner.
 */

var Redirect = _react2.default.createClass({
  displayName: 'Redirect',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

      if (route.from) route.path = route.from;

      route.onEnter = function (nextState, replace) {
        var location = nextState.location;
        var params = nextState.params;


        var pathname = void 0;
        if (route.to.charAt(0) === '/') {
          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
        } else if (!route.to) {
          pathname = location.pathname;
        } else {
          var routeIndex = nextState.routes.indexOf(route);
          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
        }

        replace({
          pathname: pathname,
          query: route.query || location.query,
          state: route.state || location.state
        });
      };

      return route;
    },
    getRoutePattern: function getRoutePattern(routes, routeIndex) {
      var parentPattern = '';

      for (var i = routeIndex; i >= 0; i--) {
        var route = routes[i];
        var pattern = route.path || '';

        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

        if (pattern.indexOf('/') === 0) break;
      }

      return '/' + parentPattern;
    }
  },

  propTypes: {
    path: string,
    from: string, // Alias for path
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _InternalPropTypes.falsy,
    children: _InternalPropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? undefined !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Redirect;
module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createMemoryHistory;

var _useQueries = __webpack_require__(16);

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(38);

var _useBasename2 = _interopRequireDefault(_useBasename);

var _createMemoryHistory = __webpack_require__(83);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMemoryHistory(options) {
  // signatures and type checking differ between `useRoutes` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = (0, _createMemoryHistory2.default)(options);
  var createHistory = function createHistory() {
    return memoryHistory;
  };
  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
  history.__v2_compatible__ = true;
  return history;
}
module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _ExecutionEnvironment = __webpack_require__(15);

var _PathUtils = __webpack_require__(8);

var _runTransitionHook = __webpack_require__(22);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = __webpack_require__(23);

var _deprecate2 = _interopRequireDefault(_deprecate);

function useBasename(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);

    var basename = options.basename;

    var checkedBaseHref = false;

    function checkBaseHref() {
      if (checkedBaseHref) {
        return;
      }

      // Automatically use the value of <base href> in HTML
      // documents as basename if it's not explicitly given.
      if (basename == null && _ExecutionEnvironment.canUseDOM) {
        var base = document.getElementsByTagName('base')[0];
        var baseHref = base && base.getAttribute('href');

        if (baseHref != null) {
          basename = baseHref;

          undefined !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
        }
      }

      checkedBaseHref = true;
    }

    function addBasename(location) {
      checkBaseHref();

      if (basename && location.basename == null) {
        if (location.pathname.indexOf(basename) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    }

    function prependBasename(location) {
      checkBaseHref();

      if (!basename) return location;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var pname = location.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, location, {
        pathname: pathname
      });
    }

    // Override all read methods with basename-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addBasename(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addBasename(location));
      });
    }

    // Override all write methods with basename-aware versions.
    function push(location) {
      history.push(prependBasename(location));
    }

    function replace(location) {
      history.replace(prependBasename(location));
    }

    function createPath(location) {
      return history.createPath(prependBasename(location));
    }

    function createHref(location) {
      return history.createHref(prependBasename(location));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    }

    // deprecated
    function pushState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path));
    }

    // deprecated
    function replaceState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useBasename;
module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = useRouterHistory;

var _useQueries = __webpack_require__(16);

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(38);

var _useBasename2 = _interopRequireDefault(_useBasename);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useRouterHistory(createHistory) {
  return function (options) {
    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
    history.__v2_compatible__ = true;
    return history;
  };
}
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (createHistory) {
  var history = void 0;
  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
  return history;
};

var _useRouterHistory = __webpack_require__(39);

var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	isDevelopment: true,
	commonModule: ["./js/common.js"],
	remUnit: 37.5
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {"ios-add":61698,"ios-add-circle":61697,"ios-add-circle-outline":61696,"ios-add-outline":61698,"ios-alarm":62408,"ios-alarm-outline":62407,"ios-albums":62410,"ios-albums-outline":62409,"ios-alert":61700,"ios-alert-outline":61699,"ios-american-football":61702,"ios-american-football-outline":61701,"ios-analytics":62414,"ios-analytics-outline":62413,"ios-aperture":61704,"ios-aperture-outline":61703,"ios-apps":61706,"ios-apps-outline":61705,"ios-appstore":61708,"ios-appstore-outline":61707,"ios-archive":61710,"ios-archive-outline":61709,"ios-arrow-back":62415,"ios-arrow-back-outline":62415,"ios-arrow-down":62416,"ios-arrow-down-outline":62416,"ios-arrow-dropdown":61712,"ios-arrow-dropdown-circle":61711,"ios-arrow-dropdown-circle-outline":61711,"ios-arrow-dropdown-outline":61712,"ios-arrow-dropleft":61714,"ios-arrow-dropleft-circle":61713,"ios-arrow-dropleft-circle-outline":61713,"ios-arrow-dropleft-outline":61714,"ios-arrow-dropright":61716,"ios-arrow-dropright-circle":61715,"ios-arrow-dropright-circle-outline":61715,"ios-arrow-dropright-outline":61716,"ios-arrow-dropup":61718,"ios-arrow-dropup-circle":61717,"ios-arrow-dropup-circle-outline":61717,"ios-arrow-dropup-outline":61718,"ios-arrow-forward":62417,"ios-arrow-forward-outline":62417,"ios-arrow-round-back":61719,"ios-arrow-round-back-outline":61719,"ios-arrow-round-down":61720,"ios-arrow-round-down-outline":61720,"ios-arrow-round-forward":61721,"ios-arrow-round-forward-outline":61721,"ios-arrow-round-up":61722,"ios-arrow-round-up-outline":61722,"ios-arrow-up":62424,"ios-arrow-up-outline":62424,"ios-at":62426,"ios-at-outline":62425,"ios-attach":61723,"ios-attach-outline":61723,"ios-backspace":61725,"ios-backspace-outline":61724,"ios-barcode":62428,"ios-barcode-outline":62427,"ios-baseball":62430,"ios-baseball-outline":62429,"ios-basket":61727,"ios-basket-outline":61726,"ios-basketball":62432,"ios-basketball-outline":62431,"ios-battery-charging":61728,"ios-battery-charging-outline":61728,"ios-battery-dead":61729,"ios-battery-dead-outline":61729,"ios-battery-full":61730,"ios-battery-full-outline":61730,"ios-beaker":61732,"ios-beaker-outline":61731,"ios-beer":61734,"ios-beer-outline":61733,"ios-bicycle":61735,"ios-bicycle-outline":61735,"ios-bluetooth":61736,"ios-bluetooth-outline":61736,"ios-boat":61738,"ios-boat-outline":61737,"ios-body":62436,"ios-body-outline":62435,"ios-bonfire":61740,"ios-bonfire-outline":61739,"ios-book":62440,"ios-book-outline":62439,"ios-bookmark":61742,"ios-bookmark-outline":61741,"ios-bookmarks":62442,"ios-bookmarks-outline":62441,"ios-bowtie":61744,"ios-bowtie-outline":61743,"ios-briefcase":62446,"ios-briefcase-outline":62445,"ios-browsers":62448,"ios-browsers-outline":62447,"ios-brush":61746,"ios-brush-outline":61745,"ios-bug":61748,"ios-bug-outline":61747,"ios-build":61750,"ios-build-outline":61749,"ios-bulb":61752,"ios-bulb-outline":61751,"ios-bus":61754,"ios-bus-outline":61753,"ios-cafe":61756,"ios-cafe-outline":61755,"ios-calculator":62450,"ios-calculator-outline":62449,"ios-calendar":62452,"ios-calendar-outline":62451,"ios-call":61758,"ios-call-outline":61757,"ios-camera":62454,"ios-camera-outline":62453,"ios-car":61760,"ios-car-outline":61759,"ios-card":61762,"ios-card-outline":61761,"ios-cart":62456,"ios-cart-outline":62455,"ios-cash":61764,"ios-cash-outline":61763,"ios-chatboxes":62458,"ios-chatboxes-outline":62457,"ios-chatbubbles":61766,"ios-chatbubbles-outline":61765,"ios-checkbox":61768,"ios-checkbox-outline":61767,"ios-checkmark":62463,"ios-checkmark-circle":61770,"ios-checkmark-circle-outline":61769,"ios-checkmark-outline":62463,"ios-clipboard":61772,"ios-clipboard-outline":61771,"ios-clock":62467,"ios-clock-outline":62466,"ios-close":62470,"ios-close-circle":61774,"ios-close-circle-outline":61773,"ios-close-outline":62470,"ios-closed-captioning":61776,"ios-closed-captioning-outline":61775,"ios-cloud":62476,"ios-cloud-circle":61778,"ios-cloud-circle-outline":61777,"ios-cloud-done":61780,"ios-cloud-done-outline":61779,"ios-cloud-download":62472,"ios-cloud-download-outline":62471,"ios-cloud-outline":62473,"ios-cloud-upload":62475,"ios-cloud-upload-outline":62474,"ios-cloudy":62480,"ios-cloudy-night":62478,"ios-cloudy-night-outline":62477,"ios-cloudy-outline":62479,"ios-code":61783,"ios-code-download":61781,"ios-code-download-outline":61781,"ios-code-outline":61783,"ios-code-working":61782,"ios-code-working-outline":61782,"ios-cog":62482,"ios-cog-outline":62481,"ios-color-fill":61785,"ios-color-fill-outline":61784,"ios-color-filter":62484,"ios-color-filter-outline":62483,"ios-color-palette":61787,"ios-color-palette-outline":61786,"ios-color-wand":62486,"ios-color-wand-outline":62485,"ios-compass":61789,"ios-compass-outline":61788,"ios-construct":61791,"ios-construct-outline":61790,"ios-contact":62490,"ios-contact-outline":62489,"ios-contacts":61793,"ios-contacts-outline":61792,"ios-contract":61794,"ios-contract-outline":61794,"ios-contrast":61795,"ios-contrast-outline":61795,"ios-copy":62492,"ios-copy-outline":62491,"ios-create":61797,"ios-create-outline":61796,"ios-crop":62494,"ios-crop-outline":61798,"ios-cube":61800,"ios-cube-outline":61799,"ios-cut":61802,"ios-cut-outline":61801,"ios-desktop":61804,"ios-desktop-outline":61803,"ios-disc":61806,"ios-disc-outline":61805,"ios-document":61808,"ios-document-outline":61807,"ios-done-all":61809,"ios-done-all-outline":61809,"ios-download":62496,"ios-download-outline":62495,"ios-easel":61811,"ios-easel-outline":61810,"ios-egg":61813,"ios-egg-outline":61812,"ios-exit":61815,"ios-exit-outline":61814,"ios-expand":61816,"ios-expand-outline":61816,"ios-eye":62501,"ios-eye-off":61818,"ios-eye-off-outline":61817,"ios-eye-outline":62500,"ios-fastforward":62503,"ios-fastforward-outline":62502,"ios-female":61819,"ios-female-outline":61819,"ios-filing":62505,"ios-filing-outline":62504,"ios-film":62507,"ios-film-outline":62506,"ios-finger-print":61820,"ios-finger-print-outline":61820,"ios-flag":62509,"ios-flag-outline":62508,"ios-flame":62511,"ios-flame-outline":62510,"ios-flash":61822,"ios-flash-outline":61821,"ios-flask":62513,"ios-flask-outline":62512,"ios-flower":62515,"ios-flower-outline":62514,"ios-folder":62517,"ios-folder-open":61824,"ios-folder-open-outline":61823,"ios-folder-outline":62516,"ios-football":62519,"ios-football-outline":62518,"ios-funnel":61826,"ios-funnel-outline":61825,"ios-game-controller-a":62521,"ios-game-controller-a-outline":62520,"ios-game-controller-b":62523,"ios-game-controller-b-outline":62522,"ios-git-branch":61827,"ios-git-branch-outline":61827,"ios-git-commit":61828,"ios-git-commit-outline":61828,"ios-git-compare":61829,"ios-git-compare-outline":61829,"ios-git-merge":61830,"ios-git-merge-outline":61830,"ios-git-network":61831,"ios-git-network-outline":61831,"ios-git-pull-request":61832,"ios-git-pull-request-outline":61832,"ios-glasses":62527,"ios-glasses-outline":62526,"ios-globe":61834,"ios-globe-outline":61833,"ios-grid":61836,"ios-grid-outline":61835,"ios-hammer":61838,"ios-hammer-outline":61837,"ios-hand":61840,"ios-hand-outline":61839,"ios-happy":61842,"ios-happy-outline":61841,"ios-headset":61844,"ios-headset-outline":61843,"ios-heart":62531,"ios-heart-outline":62530,"ios-help":62534,"ios-help-buoy":61846,"ios-help-buoy-outline":61845,"ios-help-circle":61848,"ios-help-circle-outline":61847,"ios-help-outline":62534,"ios-home":62536,"ios-home-outline":62535,"ios-ice-cream":61850,"ios-ice-cream-outline":61849,"ios-image":61852,"ios-image-outline":61851,"ios-images":61854,"ios-images-outline":61853,"ios-infinite":62538,"ios-infinite-outline":62537,"ios-information":62541,"ios-information-circle":61856,"ios-information-circle-outline":61855,"ios-information-outline":62541,"ios-ionic":61857,"ios-ionic-outline":62542,"ios-ionitron":61859,"ios-ionitron-outline":61858,"ios-jet":61861,"ios-jet-outline":61860,"ios-key":61863,"ios-key-outline":61862,"ios-keypad":62544,"ios-keypad-outline":62543,"ios-laptop":61864,"ios-laptop-outline":61864,"ios-leaf":61866,"ios-leaf-outline":61865,"ios-link":61994,"ios-link-outline":61898,"ios-list":62548,"ios-list-box":61868,"ios-list-box-outline":61867,"ios-list-outline":62548,"ios-locate":61870,"ios-locate-outline":61869,"ios-lock":61872,"ios-lock-outline":61871,"ios-log-in":61873,"ios-log-in-outline":61873,"ios-log-out":61874,"ios-log-out-outline":61874,"ios-magnet":61876,"ios-magnet-outline":61875,"ios-mail":61880,"ios-mail-open":61878,"ios-mail-open-outline":61877,"ios-mail-outline":61879,"ios-male":61881,"ios-male-outline":61881,"ios-man":61883,"ios-man-outline":61882,"ios-map":61885,"ios-map-outline":61884,"ios-medal":61887,"ios-medal-outline":61886,"ios-medical":62556,"ios-medical-outline":62555,"ios-medkit":62558,"ios-medkit-outline":62557,"ios-megaphone":61889,"ios-megaphone-outline":61888,"ios-menu":61891,"ios-menu-outline":61890,"ios-mic":62561,"ios-mic-off":62559,"ios-mic-off-outline":61892,"ios-mic-outline":62560,"ios-microphone":61894,"ios-microphone-outline":61893,"ios-moon":62568,"ios-moon-outline":62567,"ios-more":61896,"ios-more-outline":61895,"ios-move":61899,"ios-move-outline":61899,"ios-musical-note":62571,"ios-musical-note-outline":61900,"ios-musical-notes":62572,"ios-musical-notes-outline":61901,"ios-navigate":62574,"ios-navigate-outline":62573,"ios-no-smoking":61903,"ios-no-smoking-outline":61902,"ios-notifications":61907,"ios-notifications-off":61905,"ios-notifications-off-outline":61904,"ios-notifications-outline":61906,"ios-nuclear":61909,"ios-nuclear-outline":61908,"ios-nutrition":62576,"ios-nutrition-outline":62575,"ios-open":61911,"ios-open-outline":61910,"ios-options":61913,"ios-options-outline":61912,"ios-outlet":61915,"ios-outlet-outline":61914,"ios-paper":62578,"ios-paper-outline":62577,"ios-paper-plane":61917,"ios-paper-plane-outline":61916,"ios-partly-sunny":61919,"ios-partly-sunny-outline":61918,"ios-pause":62584,"ios-pause-outline":62583,"ios-paw":62586,"ios-paw-outline":62585,"ios-people":62588,"ios-people-outline":62587,"ios-person":62590,"ios-person-add":61921,"ios-person-add-outline":61920,"ios-person-outline":62589,"ios-phone-landscape":61922,"ios-phone-landscape-outline":61922,"ios-phone-portrait":61923,"ios-phone-portrait-outline":61923,"ios-photos":62594,"ios-photos-outline":62593,"ios-pie":62596,"ios-pie-outline":62595,"ios-pin":61925,"ios-pin-outline":61924,"ios-pint":62598,"ios-pint-outline":62597,"ios-pizza":61927,"ios-pizza-outline":61926,"ios-plane":61929,"ios-plane-outline":61928,"ios-planet":61931,"ios-planet-outline":61930,"ios-play":62600,"ios-play-outline":62599,"ios-podium":61933,"ios-podium-outline":61932,"ios-power":61935,"ios-power-outline":61934,"ios-pricetag":62605,"ios-pricetag-outline":62604,"ios-pricetags":62607,"ios-pricetags-outline":62606,"ios-print":61937,"ios-print-outline":61936,"ios-pulse":62611,"ios-pulse-outline":61938,"ios-qr-scanner":61939,"ios-qr-scanner-outline":61939,"ios-quote":61941,"ios-quote-outline":61940,"ios-radio":61945,"ios-radio-button-off":61942,"ios-radio-button-off-outline":61942,"ios-radio-button-on":61943,"ios-radio-button-on-outline":61943,"ios-radio-outline":61944,"ios-rainy":62613,"ios-rainy-outline":62612,"ios-recording":62615,"ios-recording-outline":62614,"ios-redo":62617,"ios-redo-outline":62616,"ios-refresh":62620,"ios-refresh-circle":61990,"ios-refresh-circle-outline":61988,"ios-refresh-outline":62620,"ios-remove":61948,"ios-remove-circle":61947,"ios-remove-circle-outline":61946,"ios-remove-outline":61948,"ios-reorder":61949,"ios-reorder-outline":61949,"ios-repeat":61950,"ios-repeat-outline":61950,"ios-resize":61951,"ios-resize-outline":61951,"ios-restaurant":61953,"ios-restaurant-outline":61952,"ios-return-left":61954,"ios-return-left-outline":61954,"ios-return-right":61955,"ios-return-right-outline":61955,"ios-reverse-camera":62623,"ios-reverse-camera-outline":62622,"ios-rewind":62625,"ios-rewind-outline":62624,"ios-ribbon":61957,"ios-ribbon-outline":61956,"ios-rose":62627,"ios-rose-outline":62626,"ios-sad":61959,"ios-sad-outline":61958,"ios-school":61961,"ios-school-outline":61960,"ios-search":62629,"ios-search-outline":61962,"ios-send":61964,"ios-send-outline":61963,"ios-settings":62631,"ios-settings-outline":61965,"ios-share":61969,"ios-share-alt":61967,"ios-share-alt-outline":61966,"ios-share-outline":61968,"ios-shirt":61971,"ios-shirt-outline":61970,"ios-shuffle":62633,"ios-shuffle-outline":62633,"ios-skip-backward":61973,"ios-skip-backward-outline":61972,"ios-skip-forward":61975,"ios-skip-forward-outline":61974,"ios-snow":61976,"ios-snow-outline":61996,"ios-speedometer":62640,"ios-speedometer-outline":62639,"ios-square":61978,"ios-square-outline":61977,"ios-star":62643,"ios-star-half":62641,"ios-star-half-outline":62641,"ios-star-outline":62642,"ios-stats":61980,"ios-stats-outline":61979,"ios-stopwatch":62645,"ios-stopwatch-outline":62644,"ios-subway":61982,"ios-subway-outline":61981,"ios-sunny":62647,"ios-sunny-outline":62646,"ios-swap":61983,"ios-swap-outline":61983,"ios-switch":61985,"ios-switch-outline":61984,"ios-sync":61986,"ios-sync-outline":61986,"ios-tablet-landscape":61987,"ios-tablet-landscape-outline":61987,"ios-tablet-portrait":62030,"ios-tablet-portrait-outline":62030,"ios-tennisball":62651,"ios-tennisball-outline":62650,"ios-text":62032,"ios-text-outline":62031,"ios-thermometer":62034,"ios-thermometer-outline":62033,"ios-thumbs-down":62036,"ios-thumbs-down-outline":62035,"ios-thumbs-up":62038,"ios-thumbs-up-outline":62037,"ios-thunderstorm":62653,"ios-thunderstorm-outline":62652,"ios-time":62655,"ios-time-outline":62654,"ios-timer":62657,"ios-timer-outline":62656,"ios-train":62040,"ios-train-outline":62039,"ios-transgender":62041,"ios-transgender-outline":62041,"ios-trash":62661,"ios-trash-outline":62660,"ios-trending-down":62042,"ios-trending-down-outline":62042,"ios-trending-up":62043,"ios-trending-up-outline":62043,"ios-trophy":62045,"ios-trophy-outline":62044,"ios-umbrella":62047,"ios-umbrella-outline":62046,"ios-undo":62663,"ios-undo-outline":62662,"ios-unlock":62049,"ios-unlock-outline":62048,"ios-videocam":62669,"ios-videocam-outline":62668,"ios-volume-down":62050,"ios-volume-down-outline":62050,"ios-volume-mute":62051,"ios-volume-mute-outline":62051,"ios-volume-off":62052,"ios-volume-off-outline":62052,"ios-volume-up":62053,"ios-volume-up-outline":62053,"ios-walk":62054,"ios-walk-outline":62054,"ios-warning":62056,"ios-warning-outline":62055,"ios-watch":62057,"ios-watch-outline":62057,"ios-water":62059,"ios-water-outline":62058,"ios-wifi":62061,"ios-wifi-outline":62060,"ios-wine":62063,"ios-wine-outline":62062,"ios-woman":62065,"ios-woman-outline":62064,"logo-android":61989,"logo-angular":61991,"logo-apple":61993,"logo-bitcoin":61995,"logo-buffer":61997,"logo-chrome":61999,"logo-codepen":62000,"logo-css3":62001,"logo-designernews":62002,"logo-dribbble":62003,"logo-dropbox":62004,"logo-euro":62005,"logo-facebook":62006,"logo-foursquare":62007,"logo-freebsd-devil":62008,"logo-github":62009,"logo-google":62010,"logo-googleplus":62011,"logo-hackernews":62012,"logo-html5":62013,"logo-instagram":62014,"logo-javascript":62015,"logo-linkedin":62016,"logo-markdown":62017,"logo-nodejs":62018,"logo-octocat":62019,"logo-pinterest":62020,"logo-playstation":62021,"logo-python":62022,"logo-reddit":62023,"logo-rss":62024,"logo-sass":62025,"logo-skype":62026,"logo-snapchat":62027,"logo-steam":62028,"logo-tumblr":62029,"logo-tux":62126,"logo-twitch":62127,"logo-twitter":62128,"logo-usd":62129,"logo-vimeo":62148,"logo-whatsapp":62149,"logo-windows":62255,"logo-wordpress":62256,"logo-xbox":62284,"logo-yahoo":62285,"logo-yen":62286,"logo-youtube":62287,"md-add":62067,"md-add-circle":62066,"md-alarm":62068,"md-albums":62069,"md-alert":62070,"md-american-football":62071,"md-analytics":62072,"md-aperture":62073,"md-apps":62074,"md-appstore":62075,"md-archive":62076,"md-arrow-back":62077,"md-arrow-down":62078,"md-arrow-dropdown":62080,"md-arrow-dropdown-circle":62079,"md-arrow-dropleft":62082,"md-arrow-dropleft-circle":62081,"md-arrow-dropright":62084,"md-arrow-dropright-circle":62083,"md-arrow-dropup":62086,"md-arrow-dropup-circle":62085,"md-arrow-forward":62087,"md-arrow-round-back":62088,"md-arrow-round-down":62089,"md-arrow-round-forward":62090,"md-arrow-round-up":62091,"md-arrow-up":62092,"md-at":62093,"md-attach":62094,"md-backspace":62095,"md-barcode":62096,"md-baseball":62097,"md-basket":62098,"md-basketball":62099,"md-battery-charging":62100,"md-battery-dead":62101,"md-battery-full":62102,"md-beaker":62103,"md-beer":62104,"md-bicycle":62105,"md-bluetooth":62106,"md-boat":62107,"md-body":62108,"md-bonfire":62109,"md-book":62110,"md-bookmark":62111,"md-bookmarks":62112,"md-bowtie":62113,"md-briefcase":62114,"md-browsers":62115,"md-brush":62116,"md-bug":62117,"md-build":62118,"md-bulb":62119,"md-bus":62120,"md-cafe":62121,"md-calculator":62122,"md-calendar":62123,"md-call":62124,"md-camera":62125,"md-car":62130,"md-card":62131,"md-cart":62132,"md-cash":62133,"md-chatboxes":62134,"md-chatbubbles":62135,"md-checkbox":62137,"md-checkbox-outline":62136,"md-checkmark":62140,"md-checkmark-circle":62139,"md-checkmark-circle-outline":62138,"md-clipboard":62141,"md-clock":62142,"md-close":62144,"md-close-circle":62143,"md-closed-captioning":62145,"md-cloud":62153,"md-cloud-circle":62146,"md-cloud-done":62147,"md-cloud-download":62150,"md-cloud-outline":62151,"md-cloud-upload":62152,"md-cloudy":62155,"md-cloudy-night":62154,"md-code":62158,"md-code-download":62156,"md-code-working":62157,"md-cog":62159,"md-color-fill":62160,"md-color-filter":62161,"md-color-palette":62162,"md-color-wand":62163,"md-compass":62164,"md-construct":62165,"md-contact":62166,"md-contacts":62167,"md-contract":62168,"md-contrast":62169,"md-copy":62170,"md-create":62171,"md-crop":62172,"md-cube":62173,"md-cut":62174,"md-desktop":62175,"md-disc":62176,"md-document":62177,"md-done-all":62178,"md-download":62179,"md-easel":62180,"md-egg":62181,"md-exit":62182,"md-expand":62183,"md-eye":62185,"md-eye-off":62184,"md-fastforward":62186,"md-female":62187,"md-filing":62188,"md-film":62189,"md-finger-print":62190,"md-flag":62191,"md-flame":62192,"md-flash":62193,"md-flask":62194,"md-flower":62195,"md-folder":62197,"md-folder-open":62196,"md-football":62198,"md-funnel":62199,"md-game-controller-a":62200,"md-game-controller-b":62201,"md-git-branch":62202,"md-git-commit":62203,"md-git-compare":62204,"md-git-merge":62205,"md-git-network":62206,"md-git-pull-request":62207,"md-glasses":62208,"md-globe":62209,"md-grid":62210,"md-hammer":62211,"md-hand":62212,"md-happy":62213,"md-headset":62214,"md-heart":62216,"md-heart-outline":62215,"md-help":62219,"md-help-buoy":62217,"md-help-circle":62218,"md-home":62220,"md-ice-cream":62221,"md-image":62222,"md-images":62223,"md-infinite":62224,"md-information":62226,"md-information-circle":62225,"md-ionic":62227,"md-ionitron":62228,"md-jet":62229,"md-key":62230,"md-keypad":62231,"md-laptop":62232,"md-leaf":62233,"md-link":61998,"md-list":62235,"md-list-box":62234,"md-locate":62236,"md-lock":62237,"md-log-in":62238,"md-log-out":62239,"md-magnet":62240,"md-mail":62242,"md-mail-open":62241,"md-male":62243,"md-man":62244,"md-map":62245,"md-medal":62246,"md-medical":62247,"md-medkit":62248,"md-megaphone":62249,"md-menu":62250,"md-mic":62252,"md-mic-off":62251,"md-microphone":62253,"md-moon":62254,"md-more":61897,"md-move":62257,"md-musical-note":62258,"md-musical-notes":62259,"md-navigate":62260,"md-no-smoking":62261,"md-notifications":62264,"md-notifications-off":62262,"md-notifications-outline":62263,"md-nuclear":62265,"md-nutrition":62266,"md-open":62267,"md-options":62268,"md-outlet":62269,"md-paper":62271,"md-paper-plane":62270,"md-partly-sunny":62272,"md-pause":62273,"md-paw":62274,"md-people":62275,"md-person":62277,"md-person-add":62276,"md-phone-landscape":62278,"md-phone-portrait":62279,"md-photos":62280,"md-pie":62281,"md-pin":62282,"md-pint":62283,"md-pizza":62292,"md-plane":62293,"md-planet":62294,"md-play":62295,"md-podium":62296,"md-power":62297,"md-pricetag":62298,"md-pricetags":62299,"md-print":62300,"md-pulse":62301,"md-qr-scanner":62302,"md-quote":62303,"md-radio":62306,"md-radio-button-off":62304,"md-radio-button-on":62305,"md-rainy":62307,"md-recording":62308,"md-redo":62309,"md-refresh":62310,"md-refresh-circle":61992,"md-remove":62312,"md-remove-circle":62311,"md-reorder":62313,"md-repeat":62314,"md-resize":62315,"md-restaurant":62316,"md-return-left":62317,"md-return-right":62318,"md-reverse-camera":62319,"md-rewind":62320,"md-ribbon":62321,"md-rose":62322,"md-sad":62323,"md-school":62324,"md-search":62325,"md-send":62326,"md-settings":62327,"md-share":62329,"md-share-alt":62328,"md-shirt":62330,"md-shuffle":62331,"md-skip-backward":62332,"md-skip-forward":62333,"md-snow":62334,"md-speedometer":62335,"md-square":62337,"md-square-outline":62336,"md-star":62340,"md-star-half":62338,"md-star-outline":62339,"md-stats":62341,"md-stopwatch":62342,"md-subway":62343,"md-sunny":62344,"md-swap":62345,"md-switch":62346,"md-sync":62347,"md-tablet-landscape":62348,"md-tablet-portrait":62349,"md-tennisball":62350,"md-text":62351,"md-thermometer":62352,"md-thumbs-down":62353,"md-thumbs-up":62354,"md-thunderstorm":62355,"md-time":62356,"md-timer":62357,"md-train":62358,"md-transgender":62359,"md-trash":62360,"md-trending-down":62361,"md-trending-up":62362,"md-trophy":62363,"md-umbrella":62364,"md-undo":62365,"md-unlock":62366,"md-videocam":62367,"md-volume-down":62368,"md-volume-mute":62369,"md-volume-off":62370,"md-volume-up":62371,"md-walk":62372,"md-warning":62373,"md-watch":62374,"md-water":62375,"md-wifi":62376,"md-wine":62377,"md-woman":62378}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * justify --> justifyContent
 * align --> alignItems: 比rn版本多了stretch和baseline
 * wrap --> flexWrap
 * flexStyle --> 自定义flex容器样式
 */

var Flex = function (_Component) {
    _inherits(Flex, _Component);

    function Flex(props) {
        _classCallCheck(this, Flex);

        return _possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).call(this, props));
    }

    _createClass(Flex, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                justify = _props.justify,
                align = _props.align,
                wrap = _props.wrap,
                flexStyle = _props.flexStyle,
                children = _props.children;

            return _react2.default.createElement(
                'div',
                { className: 'x-flex-container x-flex-justify-' + justify + ' x-flex-align-' + align + ' x-flex-' + wrap, style: flexStyle },
                children
            );
        }
    }]);

    return Flex;
}(_react.Component);

/**
 * flex: 占用比例
 * flexItemStyle: 自定义flexItem样式
 */

Flex.defaultProps = {
    justify: 'flex-start',
    align: 'flex-start',
    wrap: 'wrap',
    flexStyle: {}
};
Flex.propTypes = {
    justify: _propTypes2.default.string,
    align: _propTypes2.default.string,
    wrap: _propTypes2.default.string,
    flexStyle: _propTypes2.default.object
};

var Item = function (_Component2) {
    _inherits(Item, _Component2);

    function Item(props) {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                flex = _props2.flex,
                flexItemStyle = _props2.flexItemStyle,
                children = _props2.children;

            var _flexItemStyle = {
                WebkitFlex: flex
            };
            if (flex >= 0) {
                _flexItemStyle.flex = flex;
            }
            return _react2.default.createElement(
                'div',
                { style: _extends({}, _flexItemStyle, flexItemStyle) },
                children
            );
        }
    }]);

    return Item;
}(_react.Component);

Item.defaultProps = {
    flex: 1,
    flexItemStyle: {}
};
Item.propTypes = {
    flex: _propTypes2.default.number,
    flexItemStyle: _propTypes2.default.object
};


Flex.Item = Item;
exports.default = Flex;

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _home = __webpack_require__(48);

var _home2 = _interopRequireDefault(_home);

var _reactRouter = __webpack_require__(55);

var _list = __webpack_require__(13);

var _list2 = _interopRequireDefault(_list);

var _actionSheetExample = __webpack_require__(88);

var _actionSheetExample2 = _interopRequireDefault(_actionSheetExample);

var _badgeExample = __webpack_require__(92);

var _badgeExample2 = _interopRequireDefault(_badgeExample);

var _buttonExample = __webpack_require__(95);

var _buttonExample2 = _interopRequireDefault(_buttonExample);

var _cardExample = __webpack_require__(97);

var _cardExample2 = _interopRequireDefault(_cardExample);

var _carouselExample = __webpack_require__(100);

var _carouselExample2 = _interopRequireDefault(_carouselExample);

var _checkboxExample = __webpack_require__(103);

var _checkboxExample2 = _interopRequireDefault(_checkboxExample);

var _collapseExample = __webpack_require__(106);

var _collapseExample2 = _interopRequireDefault(_collapseExample);

var _counterExample = __webpack_require__(110);

var _counterExample2 = _interopRequireDefault(_counterExample);

var _drawerLayoutExample = __webpack_require__(113);

var _drawerLayoutExample2 = _interopRequireDefault(_drawerLayoutExample);

var _flexExample = __webpack_require__(116);

var _flexExample2 = _interopRequireDefault(_flexExample);

var _headerExample = __webpack_require__(118);

var _headerExample2 = _interopRequireDefault(_headerExample);

var _iconExample = __webpack_require__(121);

var _iconExample2 = _interopRequireDefault(_iconExample);

var _listExample = __webpack_require__(122);

var _listExample2 = _interopRequireDefault(_listExample);

var _paginationExample = __webpack_require__(123);

var _paginationExample2 = _interopRequireDefault(_paginationExample);

var _radioExample = __webpack_require__(126);

var _radioExample2 = _interopRequireDefault(_radioExample);

var _searchExample = __webpack_require__(129);

var _searchExample2 = _interopRequireDefault(_searchExample);

var _sliderExample = __webpack_require__(132);

var _sliderExample2 = _interopRequireDefault(_sliderExample);

var _switchExample = __webpack_require__(135);

var _switchExample2 = _interopRequireDefault(_switchExample);

var _tabbarExample = __webpack_require__(138);

var _tabbarExample2 = _interopRequireDefault(_tabbarExample);

var _toastExample = __webpack_require__(143);

var _toastExample2 = _interopRequireDefault(_toastExample);

var _toast = __webpack_require__(26);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//使用阿里flexible解决方案
//import 'amfe-flexible';


var Lists = function Lists() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'list-container' },
            _react2.default.createElement(_list2.default, { title: 'ActionSheet', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('actionSheet');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Badge', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('badge');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Button', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('button');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Card', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('card');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Carousel', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('carousel');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Checkbox', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('checkbox');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Collapse', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('collapse');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Counter', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('counter');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'DrawerLayout', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('drawerLayout');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Flex', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('flex');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Header', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('header');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Icon', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('icon');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'List', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('list');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Pagination', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('pagination');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Radio', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('radio');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Search', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('search');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Slider', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('slider');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Switch', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('switch');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Tabbar', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('tabbar');
                }, showLine: true, lineMargin: 30 }),
            _react2.default.createElement(_list2.default, { title: 'Toast', onPress: function onPress() {
                    return _reactRouter.hashHistory.push('toast');
                } })
        )
    );
};

var routes = {
    path: '/',
    component: _home2.default,
    indexRoute: { component: Lists },
    childRoutes: [{ path: 'actionSheet', component: _actionSheetExample2.default }, { path: 'badge', component: _badgeExample2.default }, { path: 'button', component: _buttonExample2.default }, { path: 'card', component: _cardExample2.default }, { path: 'carousel', component: _carouselExample2.default }, { path: 'checkbox', component: _checkboxExample2.default }, { path: 'collapse', component: _collapseExample2.default }, { path: 'counter', component: _counterExample2.default }, { path: 'drawerLayout', component: _drawerLayoutExample2.default }, { path: 'flex', component: _flexExample2.default }, { path: 'header', component: _headerExample2.default }, { path: 'icon', component: _iconExample2.default }, { path: 'list', component: _listExample2.default }, { path: 'pagination', component: _paginationExample2.default }, { path: 'radio', component: _radioExample2.default }, { path: 'search', component: _searchExample2.default }, { path: 'slider', component: _sliderExample2.default }, { path: 'switch', component: _switchExample2.default }, { path: 'tabbar', component: _tabbarExample2.default }, { path: 'toast', component: _toastExample2.default
        //   { path: 'inbox', component: Inbox },
    }]
};

var Root = function (_React$Component) {
    _inherits(Root, _React$Component);

    function Root(props) {
        _classCallCheck(this, Root);

        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));
    }

    _createClass(Root, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            window.addEventListener('showToast', function (e) {
                _this2.rootToast.show(window.toastConfig);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { style: { height: '100%' } },
                _react2.default.createElement(_toast2.default, { ref: function ref(toast) {
                        return _this3.rootToast = toast;
                    } }),
                _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.hashHistory, routes: routes })
            );
        }
    }]);

    return Root;
}(_react2.default.Component);

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('app'));

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(28);

var _common2 = _interopRequireDefault(_common);

__webpack_require__(49);

var _list = __webpack_require__(13);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            pageName: "X-UI",
            message: _common2.default.message
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'gotoComponentDetail',
        value: function gotoComponentDetail(name) {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { height: '100%', transform: 'translateY(0)' } },
                _react2.default.createElement(
                    'header',
                    null,
                    this.state.pageName
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'home-container' },
                    this.props.children
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(12))(93);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(12))(92);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(53);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(12))(55);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

var _RouteUtils = __webpack_require__(6);

Object.defineProperty(exports, 'createRoutes', {
  enumerable: true,
  get: function get() {
    return _RouteUtils.createRoutes;
  }
});

var _PropTypes2 = __webpack_require__(20);

Object.defineProperty(exports, 'locationShape', {
  enumerable: true,
  get: function get() {
    return _PropTypes2.locationShape;
  }
});
Object.defineProperty(exports, 'routerShape', {
  enumerable: true,
  get: function get() {
    return _PropTypes2.routerShape;
  }
});

var _PatternUtils = __webpack_require__(9);

Object.defineProperty(exports, 'formatPattern', {
  enumerable: true,
  get: function get() {
    return _PatternUtils.formatPattern;
  }
});

var _Router2 = __webpack_require__(57);

var _Router3 = _interopRequireDefault(_Router2);

var _Link2 = __webpack_require__(35);

var _Link3 = _interopRequireDefault(_Link2);

var _IndexLink2 = __webpack_require__(71);

var _IndexLink3 = _interopRequireDefault(_IndexLink2);

var _withRouter2 = __webpack_require__(72);

var _withRouter3 = _interopRequireDefault(_withRouter2);

var _IndexRedirect2 = __webpack_require__(74);

var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

var _IndexRoute2 = __webpack_require__(75);

var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

var _Redirect2 = __webpack_require__(36);

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(76);

var _Route3 = _interopRequireDefault(_Route2);

var _History2 = __webpack_require__(77);

var _History3 = _interopRequireDefault(_History2);

var _Lifecycle2 = __webpack_require__(78);

var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

var _RouteContext2 = __webpack_require__(79);

var _RouteContext3 = _interopRequireDefault(_RouteContext2);

var _useRoutes2 = __webpack_require__(80);

var _useRoutes3 = _interopRequireDefault(_useRoutes2);

var _RouterContext2 = __webpack_require__(17);

var _RouterContext3 = _interopRequireDefault(_RouterContext2);

var _RoutingContext2 = __webpack_require__(81);

var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

var _PropTypes3 = _interopRequireDefault(_PropTypes2);

var _match2 = __webpack_require__(82);

var _match3 = _interopRequireDefault(_match2);

var _useRouterHistory2 = __webpack_require__(39);

var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

var _applyRouterMiddleware2 = __webpack_require__(84);

var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

var _browserHistory2 = __webpack_require__(85);

var _browserHistory3 = _interopRequireDefault(_browserHistory2);

var _hashHistory2 = __webpack_require__(87);

var _hashHistory3 = _interopRequireDefault(_hashHistory2);

var _createMemoryHistory2 = __webpack_require__(37);

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Router = _Router3.default; /* components */

exports.Link = _Link3.default;
exports.IndexLink = _IndexLink3.default;
exports.withRouter = _withRouter3.default;

/* components (configuration) */

exports.IndexRedirect = _IndexRedirect3.default;
exports.IndexRoute = _IndexRoute3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;

/* mixins */

exports.History = _History3.default;
exports.Lifecycle = _Lifecycle3.default;
exports.RouteContext = _RouteContext3.default;

/* utils */

exports.useRoutes = _useRoutes3.default;
exports.RouterContext = _RouterContext3.default;
exports.RoutingContext = _RoutingContext3.default;
exports.PropTypes = _PropTypes3.default;
exports.match = _match3.default;
exports.useRouterHistory = _useRouterHistory3.default;
exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

/* histories */

exports.browserHistory = _browserHistory3.default;
exports.hashHistory = _hashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (undefined !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createHashHistory = __webpack_require__(29);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _useQueries = __webpack_require__(16);

var _useQueries2 = _interopRequireDefault(_useQueries);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createTransitionManager = __webpack_require__(24);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _InternalPropTypes = __webpack_require__(7);

var _RouterContext = __webpack_require__(17);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _RouteUtils = __webpack_require__(6);

var _RouterUtils = __webpack_require__(34);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function isDeprecatedHistory(history) {
  return !history || !history.__v2_compatible__;
}

/* istanbul ignore next: sanity check */
function isUnsupportedHistory(history) {
  // v3 histories expose getCurrentLocation, but aren't currently supported.
  return history && history.getCurrentLocation;
}

var _React$PropTypes = _react2.default.PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <Router> is a high-level API for automatically setting up
 * a router that renders a <RouterContext> with all the props
 * it needs each time the URL changes.
 */

var Router = _react2.default.createClass({
  displayName: 'Router',


  propTypes: {
    history: object,
    children: _InternalPropTypes.routes,
    routes: _InternalPropTypes.routes, // alias for children
    render: func,
    createElement: func,
    onError: func,
    onUpdate: func,

    // Deprecated:
    parseQueryString: func,
    stringifyQuery: func,

    // PRIVATE: For client-side rehydration of server match.
    matchContext: object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      render: function render(props) {
        return _react2.default.createElement(_RouterContext2.default, props);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      location: null,
      routes: null,
      params: null,
      components: null
    };
  },
  handleError: function handleError(error) {
    if (this.props.onError) {
      this.props.onError.call(this, error);
    } else {
      // Throw errors by default so we don't silently swallow them!
      throw error; // This error probably occurred in getChildRoutes or getComponents.
    }
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    var _props = this.props;
    var parseQueryString = _props.parseQueryString;
    var stringifyQuery = _props.stringifyQuery;

    undefined !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

    var _createRouterObjects = this.createRouterObjects();

    var history = _createRouterObjects.history;
    var transitionManager = _createRouterObjects.transitionManager;
    var router = _createRouterObjects.router;


    this._unlisten = transitionManager.listen(function (error, state) {
      if (error) {
        _this.handleError(error);
      } else {
        _this.setState(state, _this.props.onUpdate);
      }
    });

    this.history = history;
    this.router = router;
  },
  createRouterObjects: function createRouterObjects() {
    var matchContext = this.props.matchContext;

    if (matchContext) {
      return matchContext;
    }

    var history = this.props.history;
    var _props2 = this.props;
    var routes = _props2.routes;
    var children = _props2.children;


    !!isUnsupportedHistory(history) ? undefined !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

    if (isDeprecatedHistory(history)) {
      history = this.wrapDeprecatedHistory(history);
    }

    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

    return { history: routingHistory, transitionManager: transitionManager, router: router };
  },
  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
    var _props3 = this.props;
    var parseQueryString = _props3.parseQueryString;
    var stringifyQuery = _props3.stringifyQuery;


    var createHistory = void 0;
    if (history) {
      undefined !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
      createHistory = function createHistory() {
        return history;
      };
    } else {
      undefined !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
      createHistory = _createHashHistory2.default;
    }

    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
  },


  /* istanbul ignore next: sanity check */
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    undefined !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

    undefined !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlisten) this._unlisten();
  },
  render: function render() {
    var _state = this.state;
    var location = _state.location;
    var routes = _state.routes;
    var params = _state.params;
    var components = _state.components;
    var _props4 = this.props;
    var createElement = _props4.createElement;
    var render = _props4.render;

    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

    if (location == null) return null; // Async match

    // Only forward non-Router-specific props to routing context, as those are
    // the only ones that might be custom routing context props.
    Object.keys(Router.propTypes).forEach(function (propType) {
      return delete props[propType];
    });

    return render(_extends({}, props, {
      history: this.history,
      router: this.router,
      location: location,
      routes: routes,
      params: params,
      components: components,
      createElement: createElement
    }));
  }
});

exports.default = Router;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(59);
var isArguments = __webpack_require__(60);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _slice = Array.prototype.slice;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = undefined;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(_slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _Actions = __webpack_require__(10);

var _PathUtils = __webpack_require__(8);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _PathUtils.parsePath(location);

  if (typeof action === 'object') {
    undefined !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(64);

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	if (typeof str !== 'string') {
		return {};
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return {};
	}

	return str.split('&').reduce(function (ret, param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (!ret.hasOwnProperty(key)) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}

		return ret;
	}, {});
};

exports.stringify = function (obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return key;
		}

		if (Array.isArray(val)) {
			return val.slice().sort().map(function (val2) {
				return strictUriEncode(key) + '=' + strictUriEncode(val2);
			}).join('&');
		}

		return strictUriEncode(key) + '=' + strictUriEncode(val);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PatternUtils = __webpack_require__(9);

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;

  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}

/**
 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 *
 * changeRoutes are any routes that didn't leave or enter during
 * the transition.
 */
function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;

  var leaveRoutes = void 0,
      changeRoutes = void 0,
      enterRoutes = void 0;
  if (prevRoutes) {
    (function () {
      var parentIsLeaving = false;
      leaveRoutes = prevRoutes.filter(function (route) {
        if (parentIsLeaving) {
          return true;
        } else {
          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
          if (isLeaving) parentIsLeaving = true;
          return isLeaving;
        }
      });

      // onLeave hooks start at the leaf route.
      leaveRoutes.reverse();

      enterRoutes = [];
      changeRoutes = [];

      nextRoutes.forEach(function (route) {
        var isNew = prevRoutes.indexOf(route) === -1;
        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
      });
    })();
  } else {
    leaveRoutes = [];
    changeRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    changeRoutes: changeRoutes,
    enterRoutes: enterRoutes
  };
}

exports.default = computeChangedRoutes;
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.runEnterHooks = runEnterHooks;
exports.runChangeHooks = runChangeHooks;
exports.runLeaveHooks = runLeaveHooks;

var _AsyncUtils = __webpack_require__(25);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTransitionHook(hook, route, asyncArity) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    hook.apply(route, args);

    if (hook.length < asyncArity) {
      var callback = args[args.length - 1];
      // Assume hook executes synchronously and
      // automatically call the callback.
      callback();
    }
  };
}

function getEnterHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

    return hooks;
  }, []);
}

function getChangeHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
    return hooks;
  }, []);
}

function runTransitionHooks(length, iter, callback) {
  if (!length) {
    callback();
    return;
  }

  var redirectInfo = void 0;
  function replace(location, deprecatedPathname, deprecatedQuery) {
    if (deprecatedPathname) {
      undefined !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
      redirectInfo = {
        pathname: deprecatedPathname,
        query: deprecatedQuery,
        state: location
      };

      return;
    }

    redirectInfo = location;
  }

  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
    iter(index, replace, function (error) {
      if (error || redirectInfo) {
        done(error, redirectInfo); // No need to continue.
      } else {
        next();
      }
    });
  }, callback);
}

/**
 * Runs all onEnter hooks in the given array of routes in order
 * with onEnter(nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */
function runEnterHooks(routes, nextState, callback) {
  var hooks = getEnterHooks(routes);
  return runTransitionHooks(hooks.length, function (index, replace, next) {
    hooks[index](nextState, replace, next);
  }, callback);
}

/**
 * Runs all onChange hooks in the given array of routes in order
 * with onChange(prevState, nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */
function runChangeHooks(routes, state, nextState, callback) {
  var hooks = getChangeHooks(routes);
  return runTransitionHooks(hooks.length, function (index, replace, next) {
    hooks[index](state, nextState, replace, next);
  }, callback);
}

/**
 * Runs all onLeave hooks in the given array of routes in order.
 */
function runLeaveHooks(routes, prevState) {
  for (var i = 0, len = routes.length; i < len; ++i) {
    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = isActive;

var _PatternUtils = __webpack_require__(9);

function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
}

/**
 * Returns true if the current pathname matches the supplied one, net of
 * leading and trailing slash normalization. This is sufficient for an
 * indexOnly route match.
 */
function pathIsActive(pathname, currentPathname) {
  // Normalize leading slash for consistency. Leading slash on pathname has
  // already been normalized in isActive. See caveat there.
  if (currentPathname.charAt(0) !== '/') {
    currentPathname = '/' + currentPathname;
  }

  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
  // `/foo` as active, but in this case, we would already have failed the
  // match.
  if (pathname.charAt(pathname.length - 1) !== '/') {
    pathname += '/';
  }
  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
    currentPathname += '/';
  }

  return currentPathname === pathname;
}

/**
 * Returns true if the given pathname matches the active routes and params.
 */
function routeIsActive(pathname, routes, params) {
  var remainingPathname = pathname,
      paramNames = [],
      paramValues = [];

  // for...of would work here but it's probably slower post-transpilation.
  for (var i = 0, len = routes.length; i < len; ++i) {
    var route = routes[i];
    var pattern = route.path || '';

    if (pattern.charAt(0) === '/') {
      remainingPathname = pathname;
      paramNames = [];
      paramValues = [];
    }

    if (remainingPathname !== null && pattern) {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }

      if (remainingPathname === '') {
        // We have an exact match on the route. Just check that all the params
        // match.
        // FIXME: This doesn't work on repeated params.
        return paramNames.every(function (paramName, index) {
          return String(paramValues[index]) === String(params[paramName]);
        });
      }
    }
  }

  return false;
}

/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */
function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  return deepEqual(query, activeQuery);
}

/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */
function isActive(_ref, indexOnly, currentLocation, routes, params) {
  var pathname = _ref.pathname;
  var query = _ref.query;

  if (currentLocation == null) return false;

  // TODO: This is a bit ugly. It keeps around support for treating pathnames
  // without preceding slashes as absolute paths, but possibly also works
  // around the same quirks with basenames as in matchRoutes.
  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }

  if (!pathIsActive(pathname, currentLocation.pathname)) {
    // The path check is necessary and sufficient for indexOnly, but otherwise
    // we still need to check the routes.
    if (indexOnly || !routeIsActive(pathname, routes, params)) {
      return false;
    }
  }

  return queryIsActive(query, currentLocation.query);
}
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(25);

var _makeStateWithLocation = __webpack_require__(33);

var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
    return;
  }

  var getComponent = route.getComponent || route.getComponents;
  if (!getComponent) {
    callback();
    return;
  }

  var location = nextState.location;

  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

  getComponent.call(route, nextStateWithLocation, callback);
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */
function getComponents(nextState, callback) {
  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback);
  }, callback);
}

exports.default = getComponents;
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = matchRoutes;

var _AsyncUtils = __webpack_require__(25);

var _makeStateWithLocation = __webpack_require__(33);

var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

var _PatternUtils = __webpack_require__(9);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _RouteUtils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChildRoutes(route, location, paramNames, paramValues, callback) {
  if (route.childRoutes) {
    return [null, route.childRoutes];
  }
  if (!route.getChildRoutes) {
    return [];
  }

  var sync = true,
      result = void 0;

  var partialNextState = {
    location: location,
    params: createParams(paramNames, paramValues)
  };

  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
    if (sync) {
      result = [error, childRoutes];
      return;
    }

    callback(error, childRoutes);
  });

  sync = false;
  return result; // Might be undefined.
}

function getIndexRoute(route, location, paramNames, paramValues, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    var partialNextState = {
      location: location,
      params: createParams(paramNames, paramValues)
    };

    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    });
  } else if (route.childRoutes) {
    (function () {
      var pathless = route.childRoutes.filter(function (childRoute) {
        return !childRoute.path;
      });

      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
          if (error || indexRoute) {
            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
            done(error, routes);
          } else {
            next();
          }
        });
      }, function (err, routes) {
        callback(null, routes);
      });
    })();
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduce(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].push(paramValue);
    } else if (paramName in params) {
      params[paramName] = [params[paramName], paramValue];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
  var pattern = route.path || '';

  if (pattern.charAt(0) === '/') {
    remainingPathname = location.pathname;
    paramNames = [];
    paramValues = [];
  }

  // Only try to match the path if the route actually has a pattern, and if
  // we're not just searching for potential nested absolute paths.
  if (remainingPathname !== null && pattern) {
    try {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }
    } catch (error) {
      callback(error);
    }

    // By assumption, pattern is non-empty here, which is the prerequisite for
    // actually terminating a match.
    if (remainingPathname === '') {
      var _ret2 = function () {
        var match = {
          routes: [route],
          params: createParams(paramNames, paramValues)
        };

        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
          if (error) {
            callback(error);
          } else {
            if (Array.isArray(indexRoute)) {
              var _match$routes;

              undefined !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
                return !route.path;
              }), 'Index routes should not have paths') : void 0;
              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
            } else if (indexRoute) {
              undefined !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
              match.routes.push(indexRoute);
            }

            callback(null, match);
          }
        });

        return {
          v: void 0
        };
      }();

      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
    }
  }

  if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, remainingPathname, paramNames, paramValues);
      } else {
        callback();
      }
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */
function matchRoutes(routes, location, callback, remainingPathname) {
  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

  if (remainingPathname === undefined) {
    // TODO: This is a little bit ugly, but it works around a quirk in history
    // that strips the leading slash from pathnames when using basenames with
    // trailing slashes.
    if (location.pathname.charAt(0) !== '/') {
      location = _extends({}, location, {
        pathname: '/' + location.pathname
      });
    }
    remainingPathname = location.pathname;
  }

  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PatternUtils = __webpack_require__(9);

/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */
function getRouteParams(route, params) {
  var routeParams = {};

  if (!route.path) return routeParams;

  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      routeParams[p] = params[p];
    }
  });

  return routeParams;
}

exports.default = getRouteParams;
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(35);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = _react2.default.createClass({
  displayName: 'IndexLink',
  render: function render() {
    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
  }
});

exports.default = IndexLink;
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withRouter;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(73);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _PropTypes = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withRouter(WrappedComponent, options) {
  var withRef = options && options.withRef;

  var WithRouter = _react2.default.createClass({
    displayName: 'WithRouter',

    contextTypes: { router: _PropTypes.routerShape },
    propTypes: { router: _PropTypes.routerShape },

    getWrappedInstance: function getWrappedInstance() {
      !withRef ? undefined !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

      return this.wrappedInstance;
    },
    render: function render() {
      var _this = this;

      var router = this.props.router || this.context.router;
      var props = _extends({}, this.props, { router: router });

      if (withRef) {
        props.ref = function (c) {
          _this.wrappedInstance = c;
        };
      }

      return _react2.default.createElement(WrappedComponent, props);
    }
  });

  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
  WithRouter.WrappedComponent = WrappedComponent;

  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
}
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _Redirect = __webpack_require__(36);

var _Redirect2 = _interopRequireDefault(_Redirect);

var _InternalPropTypes = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */

var IndexRedirect = _react2.default.createClass({
  displayName: 'IndexRedirect',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
      } else {
        undefined !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _InternalPropTypes.falsy,
    children: _InternalPropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? undefined !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRedirect;
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = __webpack_require__(6);

var _InternalPropTypes = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react2.default.PropTypes.func;

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */

var IndexRoute = _react2.default.createClass({
  displayName: 'IndexRoute',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
      } else {
        undefined !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    path: _InternalPropTypes.falsy,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? undefined !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRoute;
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = __webpack_require__(6);

var _InternalPropTypes = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;

/**
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is
 * requested, the tree is searched depth-first to find a route whose
 * path matches the URL.  When one is found, all routes in the tree
 * that lead to it are considered "active" and their components are
 * rendered into the DOM, nested in the same order as in the tree.
 */

var Route = _react2.default.createClass({
  displayName: 'Route',


  statics: {
    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
  },

  propTypes: {
    path: string,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? undefined !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Route;
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _InternalPropTypes = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A mixin that adds the "history" instance variable to components.
 */
var History = {

  contextTypes: {
    history: _InternalPropTypes.history
  },

  componentWillMount: function componentWillMount() {
    undefined !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
    this.history = this.context.history;
  }
};

exports.default = History;
module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react2.default.PropTypes.object;

/**
 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
 * component that may be used to cancel a transition or prompt the user
 * for confirmation.
 *
 * On standard transitions, routerWillLeave receives a single argument: the
 * location we're transitioning to. To cancel the transition, return false.
 * To prompt the user for confirmation, return a prompt message (string).
 *
 * During the beforeunload event (assuming you're using the useBeforeUnload
 * history enhancer), routerWillLeave does not receive a location object
 * because it isn't possible for us to know the location we're transitioning
 * to. In this case routerWillLeave must return a prompt message to prevent
 * the user from closing the window/tab.
 */

var Lifecycle = {

  contextTypes: {
    history: object.isRequired,
    // Nested children receive the route as context, either
    // set by the route component using the RouteContext mixin
    // or by some other ancestor.
    route: object
  },

  propTypes: {
    // Route components receive the route object as a prop.
    route: object
  },

  componentDidMount: function componentDidMount() {
    undefined !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
    !this.routerWillLeave ? undefined !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

    var route = this.props.route || this.context.route;

    !route ? undefined !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
  }
};

exports.default = Lifecycle;
module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react2.default.PropTypes.object;

/**
 * The RouteContext mixin provides a convenient way for route
 * components to set the route in context. This is needed for
 * routes that render elements that want to use the Lifecycle
 * mixin to prevent transitions.
 */

var RouteContext = {

  propTypes: {
    route: object.isRequired
  },

  childContextTypes: {
    route: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      route: this.props.route
    };
  },
  componentWillMount: function componentWillMount() {
    undefined !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
  }
};

exports.default = RouteContext;
module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _useQueries = __webpack_require__(16);

var _useQueries2 = _interopRequireDefault(_useQueries);

var _createTransitionManager = __webpack_require__(24);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know about routing.
 *
 * Enhances history objects with the following methods:
 *
 * - listen((error, nextState) => {})
 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
 * - match(location, (error, redirectLocation, nextState) => {})
 * - isActive(pathname, query, indexOnly=false)
 */
function useRoutes(createHistory) {
  undefined !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

  return function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var routes = _ref.routes;

    var options = _objectWithoutProperties(_ref, ['routes']);

    var history = (0, _useQueries2.default)(createHistory)(options);
    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
    return _extends({}, history, transitionManager);
  };
}

exports.default = useRoutes;
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RouterContext = __webpack_require__(17);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoutingContext = _react2.default.createClass({
  displayName: 'RoutingContext',
  componentWillMount: function componentWillMount() {
    undefined !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
  },
  render: function render() {
    return _react2.default.createElement(_RouterContext2.default, this.props);
  }
});

exports.default = RoutingContext;
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Actions = __webpack_require__(10);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _createMemoryHistory = __webpack_require__(37);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _createTransitionManager = __webpack_require__(24);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _RouteUtils = __webpack_require__(6);

var _RouterUtils = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */
function match(_ref, callback) {
  var history = _ref.history;
  var routes = _ref.routes;
  var location = _ref.location;

  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

  !(history || location) ? undefined !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

  history = history ? history : (0, _createMemoryHistory2.default)(options);
  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

  var unlisten = void 0;

  if (location) {
    // Allow match({ location: '/the/path', ... })
    location = history.createLocation(location);
  } else {
    // Pick up the location from the history via synchronous history.listen
    // call if needed.
    unlisten = history.listen(function (historyLocation) {
      location = historyLocation;
    });
  }

  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

  transitionManager.match(location, function (error, redirectLocation, nextState) {
    callback(error, redirectLocation && router.createLocation(redirectLocation, _Actions.REPLACE), nextState && _extends({}, nextState, {
      history: history,
      router: router,
      matchContext: { history: history, transitionManager: transitionManager, router: router }
    }));

    // Defer removing the listener to here to prevent DOM histories from having
    // to unwind DOM event listeners unnecessarily, in case callback renders a
    // <Router> and attaches another history listener.
    if (unlisten) {
      unlisten();
    }
  });
}

exports.default = match;
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _PathUtils = __webpack_require__(8);

var _Actions = __webpack_require__(10);

var _createHistory = __webpack_require__(32);

var _createHistory2 = _interopRequireDefault(_createHistory);

function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
}

function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var history = _createHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: saveState,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    var key = history.createKey();

    if (typeof entry === 'string') return { pathname: entry, key: key };

    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

     true ? undefined !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? undefined !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
  }

  var storage = createStateStorage(entries);

  function saveState(key, state) {
    storage[key] = state;
  }

  function readState(key) {
    return storage[key];
  }

  function getCurrentLocation() {
    var entry = entries[current];
    var basename = entry.basename;
    var pathname = entry.pathname;
    var search = entry.search;

    var path = (basename || '') + pathname + (search || '');

    var key = undefined,
        state = undefined;
    if (entry.key) {
      key = entry.key;
      state = readState(key);
    } else {
      key = history.createKey();
      state = null;
      entry.key = key;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  }

  function go(n) {
    if (n) {
      if (!canGo(n)) {
        undefined !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
        return;
      }

      current += n;

      var currentLocation = getCurrentLocation();

      // change action to POP
      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
    }
  }

  function finishTransition(location) {
    switch (location.action) {
      case _Actions.PUSH:
        current += 1;

        // if we are not on the top of stack
        // remove rest and push new
        if (current < entries.length) entries.splice(current);

        entries.push(location);
        saveState(location.key, location.state);
        break;
      case _Actions.REPLACE:
        entries[current] = location;
        saveState(location.key, location.state);
        break;
    }
  }

  return history;
}

exports['default'] = createMemoryHistory;
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RouterContext = __webpack_require__(17);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = __webpack_require__(3);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  if (undefined !== 'production') {
    middlewares.forEach(function (middleware, index) {
      undefined !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
    });
  }

  var withContext = middlewares.map(function (middleware) {
    return middleware.renderRouterContext;
  }).filter(Boolean);
  var withComponent = middlewares.map(function (middleware) {
    return middleware.renderRouteComponent;
  }).filter(Boolean);

  var makeCreateElement = function makeCreateElement() {
    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
    return function (Component, props) {
      return withComponent.reduceRight(function (previous, renderRouteComponent) {
        return renderRouteComponent(previous, props);
      }, baseCreateElement(Component, props));
    };
  };

  return function (renderProps) {
    return withContext.reduceRight(function (previous, renderRouterContext) {
      return renderRouterContext(previous, renderProps);
    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
      createElement: makeCreateElement(renderProps.createElement)
    })));
  };
};

module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createBrowserHistory = __webpack_require__(86);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createRouterHistory = __webpack_require__(40);

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = __webpack_require__(10);

var _PathUtils = __webpack_require__(8);

var _ExecutionEnvironment = __webpack_require__(15);

var _DOMUtils = __webpack_require__(21);

var _DOMStateStorage = __webpack_require__(30);

var _createDOMHistory = __webpack_require__(31);

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? undefined !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    try {
      historyState = historyState || window.history.state || {};
    } catch (e) {
      historyState = {};
    }

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createHashHistory = __webpack_require__(29);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _createRouterHistory = __webpack_require__(40);

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _actionSheet = __webpack_require__(89);

var _actionSheet2 = _interopRequireDefault(_actionSheet);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

var _config = __webpack_require__(41);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionSheetExample = function (_React$Component) {
    _inherits(ActionSheetExample, _React$Component);

    function ActionSheetExample(props) {
        _classCallCheck(this, ActionSheetExample);

        return _possibleConstructorReturn(this, (ActionSheetExample.__proto__ || Object.getPrototypeOf(ActionSheetExample)).call(this, props));
    }

    _createClass(ActionSheetExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return _this2.ActionSheet1.show();
                        } },
                    '\u6253\u5F00\u5F39\u6846'
                ),
                _react2.default.createElement(_actionSheet2.default, {
                    ref: function ref(o) {
                        return _this2.ActionSheet1 = o;
                    },
                    options: ['option1', 'option2', 'option3']
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return _this2.ActionSheet2.show();
                        } },
                    '\u5E26\u6807\u9898'
                ),
                _react2.default.createElement(_actionSheet2.default, {
                    ref: function ref(o) {
                        return _this2.ActionSheet2 = o;
                    },
                    title: '弹框',
                    options: ['option1', 'option2', 'option3'],
                    onPress: function onPress(index) {
                        return alert(index);
                    }
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return _this2.ActionSheet3.show();
                        } },
                    '\u4E0D\u663E\u793A\u53D6\u6D88\u6309\u94AE'
                ),
                _react2.default.createElement(_actionSheet2.default, {
                    ref: function ref(o) {
                        return _this2.ActionSheet3 = o;
                    },
                    options: ['option1', 'option2', 'option3'],
                    showCancelButton: false,
                    onPress: function onPress(index) {
                        alert(index);
                        _this2.ActionSheet3.close();
                    }
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return _this2.ActionSheet4.show();
                        } },
                    '\u70B9\u51FB\u8499\u7248\u5173\u95ED'
                ),
                _react2.default.createElement(_actionSheet2.default, {
                    ref: function ref(o) {
                        return _this2.ActionSheet4 = o;
                    },
                    options: ['option1', 'option2', 'option3'],
                    backdropPressToClose: true
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return _this2.ActionSheet5.show();
                        } },
                    '\u81EA\u5B9A\u4E49\u9009\u9879'
                ),
                _react2.default.createElement(_actionSheet2.default, {
                    ref: function ref(o) {
                        return _this2.ActionSheet5 = o;
                    },
                    options: ['option1', _react2.default.createElement(
                        'span',
                        { style: { color: 'gray' } },
                        'option2'
                    ), _react2.default.createElement(
                        'span',
                        { style: { color: '#ff4f4f' } },
                        '删除'
                    )]
                })
            );
        }
    }]);

    return ActionSheetExample;
}(_react2.default.Component);

exports.default = ActionSheetExample;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITEM_HEIGHT = 120;
var LINE_HEIGHT = 2;
var TITLE_HEIGHT = 80;
var CANCEL_MARGIN = 20;
var animateTime = 0.2;

/**
 * title: 标题
 * options: 每个按钮的标题，也可以是自定义组件 ['button1', <Text>button2</Text>]
 * showCancelButton: 是否显示取消按钮
 * cancelButtonTitle: “取消”按钮的标题
 * cancelButtonColor: “取消”按钮的颜色
 * backdropPressToClose: 点击遮罩层时是否关闭ActionSheet
 * onPress: ActionSheet点击事件，会返回每个options的索引
 */

var ActionSheet = function (_Component) {
    _inherits(ActionSheet, _Component);

    function ActionSheet(props) {
        _classCallCheck(this, ActionSheet);

        var _this = _possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call(this, props));

        _this.translateY = _this.calculateHeight(props);
        _this.state = {
            isShow: false,
            opacity: 0,
            sheetAnim: _this.translateY
        };
        _this.timer = null;
        return _this;
    }

    _createClass(ActionSheet, [{
        key: 'calculateHeight',
        value: function calculateHeight(props) {
            var optionsLength = props.options.length;
            if (props.showCancelButton) {
                optionsLength++;
            }
            var height = optionsLength * ITEM_HEIGHT;
            height += (optionsLength - 1) * LINE_HEIGHT;
            if (this.props.showCancelButton) {
                height += CANCEL_MARGIN;
                height -= LINE_HEIGHT;
            }
            if (this.props.title) {
                height += TITLE_HEIGHT;
            }
            return _util2.default.px2rem(height);
        }
    }, {
        key: 'show',
        value: function show() {
            var _this2 = this;

            this.setState(function (prevState) {
                return {
                    isShow: true
                };
            });
            this.timer = setTimeout(function () {
                return _this2.setState({ opacity: 0.5, sheetAnim: 0 });
            }, 0);
        }
    }, {
        key: 'close',
        value: function close(callback) {
            var _this3 = this;

            this.timer && clearTimeout(this.timer);
            this.setState(function (prevState) {
                return {
                    opacity: 0,
                    sheetAnim: _this3.translateY
                };
            });
            this.timer = setTimeout(function () {
                _this3.setState({
                    isShow: false
                });
                callback && callback();
            }, animateTime * 1000);
        }
    }, {
        key: 'renderButton',
        value: function renderButton() {
            var _this4 = this;

            var _options = this.props.options;
            var options = this.props.showCancelButton ? _options.concat(this.props.cancelButtonTitle) : _options;
            if (this.props.title) {
                options.splice(0, 0, this.props.title);
            }
            return options.map(function (item, index) {
                var lineView = null;
                if (_this4.props.showCancelButton) {
                    lineView = options.length > 1 && index != options.length - 2 && index != options.length - 1 ? _react2.default.createElement('hr', null) : null;
                } else {
                    lineView = index != options.length - 1 ? _react2.default.createElement('hr', null) : null;
                }
                var isCancel = _this4.props.showCancelButton && index == options.length - 1;
                var isTitle = _this4.props.title && index == 0;
                var marginTop = isCancel ? CANCEL_MARGIN : 0;
                var height = isTitle ? _util2.default.px2rem(TITLE_HEIGHT) : _util2.default.px2rem(ITEM_HEIGHT);
                var fontClass = isTitle ? 'x-ah-title-text' : 'x-ah-item-text';
                var fontWeight = isCancel ? 'bold' : 'normal';
                var color = isCancel ? _this4.props.cancelButtonColor : _util2.default.theme.minorColor;
                color = isTitle ? '#939393' : color;
                var _index = _this4.props.title ? index - 1 : index;
                var _onPress = function _onPress() {};
                //点击的是title
                if (_this4.props.title && index == 0) {}
                //点击的是cancel
                else if (isCancel) {
                        _onPress = function _onPress() {
                            return _this4.close();
                        };
                    } else {
                        _onPress = function _onPress() {
                            return _this4.props.onPress(_index);
                        };
                    }
                return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'x-ah-item',
                            style: { marginTop: marginTop, height: height },
                            onClick: _onPress
                        },
                        _react2.default.createElement(
                            'span',
                            { className: '' + fontClass, style: { fontWeight: fontWeight, color: color } },
                            item
                        )
                    ),
                    lineView
                );
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.translateY = this.calculateHeight(nextProps);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var maskStyle = {
                WebkitTransition: 'all ' + animateTime + 's',
                transition: 'all ' + animateTime + 's',
                backgroundColor: 'rgba(0, 0, 0, ' + this.state.opacity + ')'
            };
            var optionsStyle = {
                WebkitTransition: 'all ' + animateTime + 's',
                transition: 'all ' + animateTime + 's',
                bottom: this.state.sheetAnim == 0 ? 0 : '-' + this.state.sheetAnim
            };
            var externalClass = this.state.isShow ? 'x-show' : 'x-hide';
            return _react2.default.createElement(
                'div',
                {
                    className: 'x-ah-mask ' + externalClass,
                    style: maskStyle,
                    onClick: this.props.backdropPressToClose ? function () {
                        return _this5.close();
                    } : function () {}
                },
                _react2.default.createElement(
                    'div',
                    { className: 'x-ah-bd ' + externalClass, style: optionsStyle },
                    this.renderButton()
                )
            );
        }
    }]);

    return ActionSheet;
}(_react.Component);

ActionSheet.defaultProps = {
    title: '',
    options: [],
    showCancelButton: true,
    cancelButtonTitle: '取消',
    cancelButtonColor: _util2.default.theme.mainColor,
    backdropPressToClose: false,
    onPress: function onPress() {}
};
ActionSheet.propTypes = {
    title: _propTypes2.default.string,
    options: _propTypes2.default.array,
    showCancelButton: _propTypes2.default.bool,
    cancelButtonTitle: _propTypes2.default.string,
    cancelButtonColor: _propTypes2.default.string,
    backdropPressToClose: _propTypes2.default.bool,
    onPress: _propTypes2.default.func
};
exports.default = ActionSheet;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _badge = __webpack_require__(93);

var _badge2 = _interopRequireDefault(_badge);

var _config = __webpack_require__(41);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BadgeExample = function (_React$Component) {
    _inherits(BadgeExample, _React$Component);

    function BadgeExample(props) {
        _classCallCheck(this, BadgeExample);

        return _possibleConstructorReturn(this, (BadgeExample.__proto__ || Object.getPrototypeOf(BadgeExample)).call(this, props));
    }

    _createClass(BadgeExample, [{
        key: 'render',
        value: function render() {
            var boxContainer = _react2.default.createElement('div', { className: 'badge-box' });
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_badge2.default, { style: { marginRight: '0.2rem' }, num: 1 }),
                _react2.default.createElement(_badge2.default, { style: { marginRight: '0.2rem' }, text: '券', defaultBackColor: '#f19736' }),
                _react2.default.createElement(_badge2.default, { style: { marginRight: '0.2rem' }, text: '惠', defaultBackColor: '#3eaf7c' }),
                _react2.default.createElement(_badge2.default, { text: 'Hot' }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        _badge2.default,
                        { num: 1, style: { marginRight: '0.8rem' } },
                        boxContainer
                    ),
                    _react2.default.createElement(
                        _badge2.default,
                        { num: 10, style: { marginRight: '0.8rem' } },
                        boxContainer
                    ),
                    _react2.default.createElement(
                        _badge2.default,
                        { num: 100, style: { marginRight: '0.8rem' } },
                        boxContainer
                    )
                )
            );
        }
    }]);

    return BadgeExample;
}(_react2.default.Component);

exports.default = BadgeExample;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_COUNT = 99;

/**
 * num: 角标数字
 * defaultBackColor: 角标背景色
 * fontColor: 角标数字颜色
 * text: 自定义角标内容
 * style: 自定义徽标样式
 */

var Badge = function (_Component) {
    _inherits(Badge, _Component);

    function Badge(props) {
        _classCallCheck(this, Badge);

        var _this = _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, props));

        _this.state = {};
        return _this;
    }
    //规定每个属性的变量类型


    _createClass(Badge, [{
        key: 'render',
        value: function render() {
            //一旦数字超过最大数字，超出部分用加号代替
            var actualNum = this.props.num > MAX_COUNT ? MAX_COUNT + '+' : this.props.num.toString();
            var numLength = this.props.num > MAX_COUNT ? (MAX_COUNT + '').length + 1 : this.props.num.toString().length;
            var rightPosition = -7;
            var offset = rightPosition - (numLength - 1) * 4;
            if (numLength === 3) offset -= 4; // add after
            var badgeNumStyle = {
                backgroundColor: this.props.defaultBackColor,
                right: _util2.default.px2rem(offset * 2)
                //如果指定了显示角标的组件，则将角标上浮在该组件的右上方，角标显示的位置由角标内容的长度自动调节
            };if (this.props.children) {
                return _react2.default.createElement(
                    'div',
                    { className: 'x-badge-container', style: this.props.style },
                    this.props.children,
                    _react2.default.createElement(
                        'div',
                        { className: 'x-badge-basic x-badge-num', style: badgeNumStyle },
                        _react2.default.createElement(
                            'span',
                            { style: { color: this.props.fontColor } },
                            actualNum
                        )
                    )
                );
            }
            //如果没有指定显示角标的组件，则只显示角标
            else {
                    return _react2.default.createElement(
                        'div',
                        { className: 'x-badge-basic', style: _extends({ backgroundColor: this.props.defaultBackColor }, this.props.style) },
                        _react2.default.createElement(
                            'span',
                            { style: { color: this.props.fontColor } },
                            this.props.text || actualNum
                        )
                    );
                }
        }
    }]);

    return Badge;
}(_react.Component);

Badge.defaultProps = {
    num: 0,
    defaultBackColor: '#ff4f4f',
    fontColor: 'white',
    text: '',
    style: {} };
Badge.propTypes = {
    num: _propTypes2.default.number,
    defaultBackColor: _propTypes2.default.string,
    fontColor: _propTypes2.default.string,
    text: _propTypes2.default.string,
    style: _propTypes2.default.object
};
exports.default = Badge;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonExample = function (_React$Component) {
    _inherits(ButtonExample, _React$Component);

    function ButtonExample(props) {
        _classCallCheck(this, ButtonExample);

        return _possibleConstructorReturn(this, (ButtonExample.__proto__ || Object.getPrototypeOf(ButtonExample)).call(this, props));
    }

    _createClass(ButtonExample, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _button2.default,
                    null,
                    '\u9ED8\u8BA4'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { inline: true },
                    '\u884C\u5185\u6309\u94AE'
                ),
                _react2.default.createElement('div', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { buttonColor: '#ff4f4f' },
                    '\u80CC\u666F\u8272'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { buttonStyle: { backgroundColor: '#3eaf7c', borderColor: '#3eaf7c' } },
                    '\u81EA\u5B9A\u4E49\u6837\u5F0F'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { inline: true, size: _button.BUTTON_SIZE.SMALL, buttonStyle: { marginRight: '0.2rem' } },
                    '\u5C0F\u6309\u94AE'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { inline: true, size: _button.BUTTON_SIZE.MIDDLE, buttonStyle: { marginRight: '0.2rem' } },
                    '\u4E2D\u6309\u94AE'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { inline: true, size: _button.BUTTON_SIZE.BIG },
                    '\u5927\u6309\u94AE'
                ),
                _react2.default.createElement('div', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { type: _button.BUTTON_TYPE.GHOST },
                    '\u5E7D\u7075\u6309\u94AE'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { textStyle: { color: '#333' } },
                    '\u6587\u672C\u6837\u5F0F'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { disabled: true },
                    '\u7981\u7528'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { icon: _react2.default.createElement(_icon2.default, { name: 'ios-add', color: 'white' }) },
                    '\u56FE\u6807'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return alert('click');
                        } },
                    '\u89E6\u6478\u51FD\u6570'
                )
            );
        }
    }]);

    return ButtonExample;
}(_react2.default.Component);

exports.default = ButtonExample;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _card = __webpack_require__(98);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardExample = function (_React$Component) {
    _inherits(CardExample, _React$Component);

    function CardExample(props) {
        _classCallCheck(this, CardExample);

        return _possibleConstructorReturn(this, (CardExample.__proto__ || Object.getPrototypeOf(CardExample)).call(this, props));
    }

    _createClass(CardExample, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _card2.default,
                    null,
                    _react2.default.createElement(
                        _card2.default.Body,
                        null,
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.3rem' } },
                            '\u53EA\u6709\u5185\u5BB9'
                        )
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _card2.default,
                    null,
                    _react2.default.createElement(
                        _card2.default.Header,
                        null,
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.3rem' } },
                            '\u56FE\u7247'
                        )
                    ),
                    _react2.default.createElement(
                        _card2.default.Body,
                        null,
                        _react2.default.createElement('img', { src: '../images/1.jpg' })
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _card2.default,
                    null,
                    _react2.default.createElement(
                        _card2.default.Footer,
                        null,
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.3rem' } },
                            '\u5E95\u90E8\u5DE6\u4FA7'
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.3rem' } },
                            '\u5E95\u90E8\u53F3\u4FA7'
                        )
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _card2.default,
                    null,
                    _react2.default.createElement(
                        _card2.default.Header,
                        null,
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.3rem' } },
                            '\u8FD9\u662F\u4E00\u4E2A\u6807\u9898'
                        )
                    ),
                    _react2.default.createElement(
                        _card2.default.Body,
                        null,
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.3rem' } },
                            '\u8FD9\u662F\u4E00\u4E2A\u540C\u65F6\u4F7F\u7528\u5230\u4E86Card.Header\u3001Card.Body\u3001Card.Footer\u7684\u5361\u7247\u3002'
                        )
                    ),
                    _react2.default.createElement(
                        _card2.default.Footer,
                        null,
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.3rem' } },
                            '\u5E95\u90E8\u5DE6\u4FA7'
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.3rem' } },
                            '\u5E95\u90E8\u53F3\u4FA7'
                        )
                    )
                )
            );
        }
    }]);

    return CardExample;
}(_react2.default.Component);

exports.default = CardExample;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
**最基本的卡片组件，仅仅定义了Card、Card.Header、Card.Body、Card.Footer的基本布局。
**可以通过定义属性来修改它们
**Card.Body定义了图片的样式以保证图片是铺满整个宽度的
**/

var Card = function (_Component) {
    _inherits(Card, _Component);

    function Card(props) {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-card', style: this.props.cardStyle },
                this.props.children
            );
        }
    }]);

    return Card;
}(_react.Component);

Card.defaultProps = {
    cardStyle: {}
};
Card.propTypes = {
    cardStyle: _propTypes2.default.object
};

var Header = function (_Component2) {
    _inherits(Header, _Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-card-header', style: this.props.headerStyle },
                this.props.children
            );
        }
    }]);

    return Header;
}(_react.Component);

Header.defaultProps = {
    headerStyle: {}
};
Header.propTypes = {
    headerStyle: _propTypes2.default.object
};

var Body = function (_Component3) {
    _inherits(Body, _Component3);

    function Body(props) {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));
    }

    _createClass(Body, [{
        key: 'wrapBody',
        value: function wrapBody() {
            return _react2.default.Children.map(this.props.children, function (item, index) {
                if (item.type == 'img') {
                    return _react2.default.createElement(
                        'div',
                        { className: 'x-card-wrap-container' },
                        _react2.default.cloneElement(item, {
                            key: index,
                            style: item.props.style
                        })
                    );
                }
                return _react2.default.cloneElement(item, {
                    key: index,
                    style: item.props.style
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-card-body', style: this.props.bodyStyle },
                this.wrapBody()
            );
        }
    }]);

    return Body;
}(_react.Component);

Body.defaultProps = {
    bodyStyle: {}
};
Body.propTypes = {
    bodyStyle: _propTypes2.default.object
};

var Footer = function (_Component4) {
    _inherits(Footer, _Component4);

    function Footer(props) {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-card-footer', style: this.props.footerStyle },
                this.props.children
            );
        }
    }]);

    return Footer;
}(_react.Component);

Footer.defaultProps = {
    footerStyle: {}
};
Footer.propTypes = {
    footerStyle: _propTypes2.default.object
};


Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

exports.default = Card;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _carousel = __webpack_require__(101);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imgArr = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg'];

var CarouselExample = function (_React$Component) {
    _inherits(CarouselExample, _React$Component);

    function CarouselExample(props) {
        _classCallCheck(this, CarouselExample);

        return _possibleConstructorReturn(this, (CarouselExample.__proto__ || Object.getPrototypeOf(CarouselExample)).call(this, props));
    }

    _createClass(CarouselExample, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u57FA\u672C'
                ),
                _react2.default.createElement(
                    _carousel2.default,
                    {
                        width: '100%',
                        height: '30vh'
                    },
                    imgArr && imgArr.map(function (url, index) {
                        return _react2.default.createElement('img', { key: index, src: url });
                    })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u624B\u52A8\u64AD\u653E'
                ),
                _react2.default.createElement(
                    _carousel2.default,
                    {
                        width: '100%',
                        height: '30vh',
                        autoPlay: false
                    },
                    imgArr && imgArr.map(function (url, index) {
                        return _react2.default.createElement('img', { key: index, src: url });
                    })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u5F00\u59CB\u7D22\u5F15'
                ),
                _react2.default.createElement(
                    _carousel2.default,
                    {
                        width: '100%',
                        height: '30vh',
                        index: 2
                    },
                    imgArr && imgArr.map(function (url, index) {
                        return _react2.default.createElement('img', { key: index, src: url });
                    })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u8F6E\u64AD\u95F4\u9694\u65F6\u957F'
                ),
                _react2.default.createElement(
                    _carousel2.default,
                    {
                        width: '100%',
                        height: '30vh',
                        autoPlayTimeout: 1000
                    },
                    imgArr && imgArr.map(function (url, index) {
                        return _react2.default.createElement('img', { key: index, src: url });
                    })
                )
            );
        }
    }]);

    return CarouselExample;
}(_react2.default.Component);

exports.default = CarouselExample;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * index: 当前索引值
 * width：轮播图宽度（required）
 * height：轮播图高度（required）
 * autoPlay：是否自动播放
 * autoPlayTimeout：自动播放时每张图片的切换时间
 * showDot：是否展示圆点
 * dotColor：圆点的颜色
 * activeDotColor：激活圆点的颜色
 * dotWidth：圆点的宽度
 * onIndexChanged：索引值发生改变时的回掉
 */

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        var _this$props = _this.props,
            index = _this$props.index,
            children = _this$props.children;

        _this.childNum = _this.props.children.length;
        var currentIndex = _this.props.index + 1 >= _this.childNum ? _this.childNum : _this.props.index + 1;
        _this.state = {
            currentIndex: currentIndex,
            offsetX: -currentIndex * 100,
            needAnimate: true
        };
        _this.previousX = 0;
        _this._offsetX = 0;
        _this.moveX = 0;
        _this.previousIndex = 0;
        _this.touchStartHandler = _this.touchStartHandler.bind(_this);
        _this.touchMoveHandler = _this.touchMoveHandler.bind(_this);
        _this.touchEndHandler = _this.touchEndHandler.bind(_this);
        _this.resetImgListPosition = _this.resetImgListPosition.bind(_this);
        _this._onVisibleChange = _this._onVisibleChange.bind(_this);
        _this.transitionend = '';
        return _this;
    }
    //兼容性处理


    _createClass(Carousel, [{
        key: "transitionEvent",
        value: function transitionEvent() {
            var transitions = {
                'transition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            };
            for (var t in transitions) {
                if (this.refs.carousel.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        }
        //运行轮播图，启动定时器

    }, {
        key: "runCarousel",
        value: function runCarousel() {
            var _this2 = this;

            return setInterval(function () {
                var currentIndex = _this2.state.currentIndex + 1;
                _this2.autoMoveCarousel(currentIndex, true);
            }, this.props.autoPlayTimeout + 200);
        }
        //如果轮播到了第一张图片，立即将其轮播到最后一张图片
        //如果轮播到了最后一张图片，立即将其轮播到第一张图片

    }, {
        key: "resetImgListPosition",
        value: function resetImgListPosition() {
            var currentIndex = this.state.currentIndex;
            switch (this.state.currentIndex) {
                case this.childNum + 1:
                    currentIndex = 1;
                    this.autoMoveCarousel(currentIndex, false);
                    break;
                case 0:
                    currentIndex = this.childNum;
                    this.autoMoveCarousel(currentIndex, false);
                    break;
                default:
                    break;
            }
            if (this.props.onIndexChanged && currentIndex != this.previousIndex) {
                this.props.onIndexChanged(currentIndex - 1);
            }
        }
    }, {
        key: "getCarouselWidth",
        value: function getCarouselWidth() {
            return window.getComputedStyle(document.querySelector('.x-carousel-container')).width;
        }
        //移动端触摸，停止定时器，记录之前的索引值、当前的偏移量previousX、当前轮播图偏移量_offestX

    }, {
        key: "touchStartHandler",
        value: function touchStartHandler(e) {
            clearInterval(this.interval);
            this.interval = null;
            this.previousX = e.targetTouches[0].pageX;
            this._offsetX = this.state.offsetX;
            this.previousIndex = this.state.currentIndex;
            this.refs.carousel.addEventListener('touchmove', this.touchMoveHandler);
            this.transitionend && this.refs.carousel.removeEventListener(this.transitionend, this.resetImgListPosition);
        }
        //记录最新的偏移量nowX，图片随用户手势的移动而移动

    }, {
        key: "touchMoveHandler",
        value: function touchMoveHandler(e) {
            var nowX = e.targetTouches[0].pageX;
            this.moveX = nowX - this.previousX;

            this.setState({
                offsetX: this._offsetX + this.moveX / parseInt(this.getCarouselWidth()) * 100,
                needAnimate: false
            });
        }
        //判断用户移动的距离，如果过短则返回之前的图片，否则，切换到下一张图片

    }, {
        key: "touchEndHandler",
        value: function touchEndHandler(e) {
            var currentIndex = void 0;
            if (Math.abs(this.moveX) >= parseInt(this.getCarouselWidth()) / 5) {
                switch (true) {
                    case this.moveX > 0:
                        currentIndex = this.state.currentIndex - 1;
                        break;
                    case this.moveX < 0:
                        currentIndex = this.state.currentIndex + 1;
                        break;
                    default:
                        currentIndex = this.state.currentIndex;
                        break;
                }
            } else {
                currentIndex = this.state.currentIndex;
            }
            this.refs.carousel.removeEventListener('touchmove', this.touchMoveHandler);
            this.transitionend && this.refs.carousel.addEventListener(this.transitionend, this.resetImgListPosition);
            this.autoMoveCarousel(currentIndex, true);
            this.previousX = 0;
            this._offsetX = 0;
            this.moveX = 0;
            this.interval = this.props.autoPlay ? this.runCarousel() : null;
        }
        //当页面激活状态发生改变时触发，如果当前页面不处于激活态则停用定时器防止布局混乱

    }, {
        key: "_onVisibleChange",
        value: function _onVisibleChange() {
            if (document.hidden) {
                clearInterval(this.interval);
                this.interval = null;
            } else {
                if (!this.interval) {
                    this.interval = this.childNum > 1 && this.props.autoPlay ? this.runCarousel() : null;
                }
            }
        }
        //切换图片

    }, {
        key: "autoMoveCarousel",
        value: function autoMoveCarousel(currentIndex, needAnimate) {
            this.setState({
                offsetX: -currentIndex * 100,
                currentIndex: currentIndex,
                needAnimate: needAnimate
            });
        }
        //渲染轮播图

    }, {
        key: "_renderCarousel",
        value: function _renderCarousel(imgList, enableDrag) {
            var _this3 = this;

            var imgViewList = [];
            var dotList = [];
            _react2.default.Children.map(this.props.children, function (img, index) {
                if (index == 0) _this3._endImgView = img;
                if (index == _this3.childNum - 1) _this3._startImgView = img;
                imgViewList.push(_this3._renderImg(img, index, enableDrag));
                var dotWidth = _this3.props.dotWidth;
                var marginRight = index == _this3.childNum - 1 ? 0 : dotWidth;
                var backgroundColor = _this3.state.currentIndex - 1 == index ? _this3.props.activeDotColor : _this3.props.dotColor;
                var dotListStyle = {
                    marginRight: _util2.default.px2rem(marginRight),
                    backgroundColor: backgroundColor,
                    width: _util2.default.px2rem(dotWidth),
                    height: _util2.default.px2rem(dotWidth),
                    borderRadius: _util2.default.px2rem(dotWidth)
                };
                dotList.push(_react2.default.createElement("div", { key: index, className: 'x-carousel-dot', style: dotListStyle }));
            });
            imgViewList.splice(0, 0, this._renderImg(this._startImgView, -1, enableDrag));
            imgViewList.push(this._renderImg(this._endImgView, this.childNum, enableDrag));
            return {
                imgViewList: imgViewList,
                dotList: dotList
            };
        }
        //渲染图片

    }, {
        key: "_renderImg",
        value: function _renderImg(imgView, key, enableDrag) {
            var touchStartHandler = enableDrag ? this.touchStartHandler : null;
            var touchEndHandler = enableDrag ? this.touchEndHandler : null;
            return _react2.default.createElement(
                "div",
                {
                    key: key,
                    className: "x-carousel-list",
                    style: { width: 100 / (this.childNum + 2) + "%" },
                    onTouchStart: touchStartHandler,
                    onTouchEnd: touchEndHandler
                },
                imgView
            );
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.index != this.props.index && nextProps.index != this.state.currentIndex - 1) {
                this.autoMoveCarousel(nextProps.index + 1, true);
            }
            if (nextProps.autoPlay != this.props.autoPlay) {
                if (nextProps.autoPlay == false) {
                    clearInterval(this.interval);
                    this.interval = null;
                } else {
                    this.interval = this.childNum > 1 ? this.runCarousel() : null;
                }
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var carousel = this.refs.carousel;
            var transitionend = this.transitionEvent();
            transitionend && carousel.addEventListener(transitionend, this.resetImgListPosition);
            document.addEventListener('visibilitychange', this._onVisibleChange);
            this.interval = this.childNum > 1 && this.props.autoPlay ? this.runCarousel() : null;
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }, {
        key: "render",
        value: function render() {
            var enableDrag = this.childNum > 1 ? true : false;

            var _renderCarousel2 = this._renderCarousel(this.props.children, enableDrag),
                imgViewList = _renderCarousel2.imgViewList,
                dotList = _renderCarousel2.dotList;

            var animateTime = this.state.needAnimate ? 0.2 : 0;
            var containerStyle = {
                width: this.props.width,
                height: this.props.height
            };
            var dotContainerStyle = {
                bottom: _util2.default.px2rem(this.props.dotWidth)
            };
            var translateValue = "translate(" + this.state.offsetX / (this.childNum + 2) + "%,0px)";
            var mainStyle = {
                width: this.childNum + 2 + "00%",
                WebkitTransform: translateValue,
                transform: translateValue,
                WebkitTransition: "WebkitTransform " + animateTime + "s",
                transition: "transform " + animateTime + "s"
            };
            return _react2.default.createElement(
                "div",
                { className: "x-carousel-container", style: containerStyle },
                _react2.default.createElement(
                    "div",
                    {
                        ref: "carousel",
                        className: "x-carousel-main",
                        style: mainStyle
                    },
                    imgViewList
                ),
                this.props.showDot ? _react2.default.createElement(
                    "div",
                    { className: "x-carousel-dot-container", style: dotContainerStyle },
                    " ",
                    dotList,
                    " "
                ) : null
            );
        }
    }]);

    return Carousel;
}(_react.Component);

Carousel.defaultProps = {
    index: 0,
    autoPlay: true,
    autoPlayTimeout: 3000,
    showDot: true,
    dotColor: '#666666',
    activeDotColor: _util2.default.theme.mainColor,
    dotWidth: 20,
    onIndexChanged: function onIndexChanged() {}
};
Carousel.propTypes = {
    index: _propTypes2.default.number,
    width: _propTypes2.default.any.isRequired,
    height: _propTypes2.default.any.isRequired,
    autoPlay: _propTypes2.default.bool,
    autoPlayTimeout: _propTypes2.default.number,
    showDot: _propTypes2.default.bool,
    dotColor: _propTypes2.default.string,
    activeDotColor: _propTypes2.default.string,
    dotWidth: _propTypes2.default.number,
    onIndexChanged: _propTypes2.default.func
};
exports.default = Carousel;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checkbox = __webpack_require__(104);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxExample = function (_React$Component) {
    _inherits(CheckboxExample, _React$Component);

    function CheckboxExample(props) {
        _classCallCheck(this, CheckboxExample);

        var _this = _possibleConstructorReturn(this, (CheckboxExample.__proto__ || Object.getPrototypeOf(CheckboxExample)).call(this, props));

        _this.state = {
            value: ['B']
        };
        return _this;
    }

    _createClass(CheckboxExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u72EC\u7ACB\u4F7F\u7528'
                ),
                _react2.default.createElement(
                    _checkbox2.default,
                    { id: 'checkbox_1', value: 'A' },
                    'A'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u8BBE\u7F6E\u52FE\u9009\u9879'
                ),
                _react2.default.createElement(
                    _checkbox2.default,
                    { id: 'checkbox_2', value: 'A', checked: false },
                    'A'
                ),
                _react2.default.createElement(
                    _checkbox2.default,
                    { id: 'checkbox_3', value: 'B', checked: true },
                    'B'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u7981\u7528'
                ),
                _react2.default.createElement(
                    _checkbox2.default,
                    { id: 'checkbox_4', value: 'A' },
                    'A'
                ),
                _react2.default.createElement(
                    _checkbox2.default,
                    { id: 'checkbox_5', value: 'B', disabled: true },
                    'B'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u6309\u94AE\u7EC4'
                ),
                _react2.default.createElement(
                    _checkbox2.default.Group,
                    { defaultValue: ['C'] },
                    _react2.default.createElement(
                        _checkbox2.default,
                        { id: 'checkbox_6', value: 'A' },
                        'A'
                    ),
                    _react2.default.createElement(
                        _checkbox2.default,
                        { id: 'checkbox_7', value: 'B' },
                        'B'
                    ),
                    _react2.default.createElement(
                        _checkbox2.default,
                        { id: 'checkbox_8', value: 'C' },
                        'C'
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u53D7\u63A7\u72B6\u6001'
                ),
                _react2.default.createElement(
                    _checkbox2.default.Group,
                    { value: this.state.value, onChange: function onChange(value) {
                            return _this2.setState({ value: value });
                        } },
                    _react2.default.createElement(
                        _checkbox2.default,
                        { id: 'checkbox_9', value: 'A' },
                        'A'
                    ),
                    _react2.default.createElement(
                        _checkbox2.default,
                        { id: 'checkbox_10', value: 'B' },
                        'B'
                    ),
                    _react2.default.createElement(
                        _checkbox2.default,
                        { id: 'checkbox_11', value: 'C' },
                        'C'
                    )
                )
            );
        }
    }]);

    return CheckboxExample;
}(_react2.default.Component);

exports.default = CheckboxExample;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //封装多选框组件


/**
 * defaultValue: 默认value
 * value: value（受控）
 * onChange: 多选框勾选值发生改变时的回调，将会返回新的勾选值
 * disabled: 是否禁用
 * groupStyle: 自定义group容器样式
 */

var Group = function (_Component) {
    _inherits(Group, _Component);

    function Group(props) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

        _this.state = {
            valueList: null
        };
        return _this;
    }

    _createClass(Group, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var valueList = null;
            if (this.props.value) {
                valueList = this.props.value;
            } else if (this.props.defaultValue) {
                valueList = this.props.defaultValue;
            }
            this.setState({
                valueList: valueList
            });
        }
    }, {
        key: 'changeValue',
        value: function changeValue(value, checked) {
            var _this2 = this;

            var _valueList = this.state.valueList == null ? [] : JSON.parse(JSON.stringify(this.state.valueList));
            //已选并且已选列表中没有该项
            if (checked && _valueList.indexOf(value) < 0) {
                _valueList.push(value);
            } else if (!checked && _valueList.indexOf(value) >= 0) {
                _valueList.splice(_valueList.indexOf(value), 1);
            }
            this.setState({
                valueList: _valueList
            }, function () {
                _this2.props.onChange(_this2.state.valueList);
            });
        }
    }, {
        key: 'renderCheckboxGroup',
        value: function renderCheckboxGroup() {
            var _this3 = this;

            var disabled = this.props.disabled == null ? false : this.props.disabled;
            return _react2.default.Children.map(this.props.children, function (item, index) {
                var extendProps = {
                    disabled: disabled,
                    groupLimit: true,
                    onClick: function onClick(value, checked) {
                        return _this3.changeValue(value, checked);
                    }
                    //用户指定了value,checkbox变成了受控组件
                };if (_this3.props.value != null) {
                    var checked = _this3.props.value.indexOf(item.props.value) >= 0;
                    extendProps.checked = checked;
                }
                //其他任何条件下check都是非受控的
                else if (_this3.props.defaultValue != null) {
                        var _checked = _this3.state.valueList == null ? _this3.props.defaultValue.indexOf(item.props.value) >= 0 : _this3.state.valueList.indexOf(item.props.value) >= 0;
                        extendProps.checked = _checked;
                    } else {
                        if (_this3.state.valueList != null) {
                            var _checked2 = _this3.state.valueList.indexOf(item.props.value) >= 0;
                            extendProps.checked = _checked2;
                        } else {
                            extendProps.checked = false;
                        }
                    }
                return _react2.default.cloneElement(item, extendProps);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.props.groupStyle },
                this.renderCheckboxGroup()
            );
        }
    }]);

    return Group;
}(_react.Component);

/**
 * id: checkbox id，必填项
 * value: checkbox value
 * checked: 是否勾选（受控）
 * checkboxStyle: 自定义样式
 * textStyle: 自定义文本样式
 * disabled: 是否禁用
 * onChange: 每次点击时的回调，返回勾选状态（bool）
*/

Group.defaultProps = {
    groupStyle: {},
    disabled: false,
    onChange: function onChange() {}
};
Group.propTypes = {
    groupStyle: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};

var Checkbox = function (_Component2) {
    _inherits(Checkbox, _Component2);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this4 = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

        _this4.state = {
            checked: false
        };
        return _this4;
    }

    _createClass(Checkbox, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.groupLimit || this.props.checked != null) {
                this.setState({
                    checked: this.props.checked
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checked != this.props.checked) {
                if (nextProps.groupLimit || nextProps.checked != null) {
                    this.setState({
                        checked: nextProps.checked
                    });
                }
            }
        }
    }, {
        key: 'changeCheckbox',
        value: function changeCheckbox() {
            var _this5 = this;

            if (this.props.groupLimit || this.props.groupLimit != null) {
                this.props.onClick(this.props.value, !this.state.checked);
            } else {
                if (this.props.checked == null) {
                    this.setState({
                        checked: !this.state.checked
                    }, function () {
                        _this5.props.onChange(_this5.state.checked);
                    });
                } else this.props.onChange(!this.state.checked);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var disabledStyle = this.props.disabled ? { color: '#CCCCCC' } : {};
            var checkClass = this.state.checked ? 'x-checkbox-checked' : '';
            var disabledClass = this.props.disabled ? ' x-checkbox-disabled' : '';
            return _react2.default.createElement(
                'div',
                { className: 'x-checkbox-container' + disabledClass, style: this.props.checkboxStyle },
                _react2.default.createElement('input', {
                    type: 'checkbox',
                    id: this.props.id,
                    value: this.props.value,
                    checked: this.state.checked,
                    disabled: this.props.disabled,
                    onChange: function onChange() {
                        return _this6.changeCheckbox();
                    }
                }),
                _react2.default.createElement(
                    'label',
                    {
                        htmlFor: this.props.id,
                        className: checkClass
                    },
                    this.props.children && this.props.children.length ? _react2.default.createElement(
                        'span',
                        { style: _extends({}, this.props.textStyle, disabledStyle) },
                        this.props.children
                    ) : null
                )
            );
        }
    }]);

    return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
    checkboxStyle: {},
    textStyle: {},
    disabled: false,
    onChange: function onChange() {}
};
Checkbox.propTypes = {
    id: _propTypes2.default.string.isRequired,
    checked: _propTypes2.default.bool,
    checkboxStyle: _propTypes2.default.object,
    textStyle: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};


Checkbox.Group = Group;
exports.default = Checkbox;

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _collapse = __webpack_require__(107);

var _collapse2 = _interopRequireDefault(_collapse);

var _toast = __webpack_require__(26);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapseExample = function (_React$Component) {
    _inherits(CollapseExample, _React$Component);

    function CollapseExample(props) {
        _classCallCheck(this, CollapseExample);

        return _possibleConstructorReturn(this, (CollapseExample.__proto__ || Object.getPrototypeOf(CollapseExample)).call(this, props));
    }

    _createClass(CollapseExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u57FA\u672C'
                ),
                _react2.default.createElement(
                    _collapse2.default,
                    null,
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 1', panelKey: 'panel1' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 1 \u7684\u5185\u5BB9'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 2', panelKey: 'panel2' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 2 \u7684\u5185\u5BB9'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 3', panelKey: 'panel3' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 3 \u7684\u5185\u5BB9'
                        )
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u6FC0\u6D3B\u9879'
                ),
                _react2.default.createElement(
                    _collapse2.default,
                    { activeKey: 'panel2' },
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 1', panelKey: 'panel1' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 1 \u7684\u5185\u5BB9'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 2', panelKey: 'panel2' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 2 \u7684\u5185\u5BB9'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 3', panelKey: 'panel3' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 3 \u7684\u5185\u5BB9'
                        )
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u624B\u98CE\u7434'
                ),
                _react2.default.createElement(
                    _collapse2.default,
                    { accordion: true },
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 1', panelKey: 'panel1' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 1 \u7684\u5185\u5BB9'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 2', panelKey: 'panel2' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 2 \u7684\u5185\u5BB9'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 3', panelKey: 'panel3' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 3 \u7684\u5185\u5BB9'
                        )
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u56DE\u8C03'
                ),
                _react2.default.createElement(
                    _collapse2.default,
                    { accordion: true, onChange: function onChange(activeKey) {
                            return activeKey && _this2.toast.show({
                                mask: false,
                                content: activeKey
                            });
                        } },
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 1', panelKey: 'panel1' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 1 \u7684\u5185\u5BB9'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 2', panelKey: 'panel2' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 2 \u7684\u5185\u5BB9'
                        )
                    ),
                    _react2.default.createElement(
                        _collapse2.default.Panel,
                        { title: '标题 3', panelKey: 'panel3' },
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem', margin: '0.5rem 0' } },
                            '\u8FD9\u662F\u6807\u9898 3 \u7684\u5185\u5BB9'
                        )
                    )
                ),
                _react2.default.createElement(_toast2.default, { ref: function ref(toast) {
                        return _this2.toast = toast;
                    } })
            );
        }
    }]);

    return CollapseExample;
}(_react2.default.Component);

exports.default = CollapseExample;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(13);

var _list2 = _interopRequireDefault(_list);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * activityKey: 当前激活项
 * onChange: 任意一个折叠面板的折叠状态发生改变时的回调，返回当前激活项（string or JSON.stringify(stringArray)）
 * accordion: 是否开启手风琴模式
 * style: 自定义样式
 */

var Collapse = function (_Component) {
    _inherits(Collapse, _Component);

    function Collapse(props) {
        _classCallCheck(this, Collapse);

        var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

        _this.state = {
            activeKey: _this.props.activeKey
        };
        _this.panelKeyList = [];
        _this.activeKeyList = [];
        return _this;
    }

    _createClass(Collapse, [{
        key: 'changeOpenState',
        value: function changeOpenState(index, notAccordion, isOpen) {
            var _this2 = this;

            if (!notAccordion) {
                var activeKey = null;
                if (this.state.activeKey != this.panelKeyList[index]) {
                    activeKey = this.panelKeyList[index];
                }
                this.setState({
                    activeKey: activeKey
                }, function () {
                    _this2.props.onChange && _this2.props.onChange(_this2.state.activeKey);
                });
            } else {
                var point = this.activeKeyList.indexOf(this.panelKeyList[index]);
                if (isOpen) {
                    if (point < 0) {
                        this.activeKeyList.push(this.panelKeyList[index]);
                    }
                } else {
                    if (point >= 0) {
                        this.activeKeyList.splice(point, 1);
                    }
                }
                this.props.onChange && this.props.onChange(JSON.stringify(this.activeKeyList));
            }
        }
    }, {
        key: 'renderPanel',
        value: function renderPanel() {
            var _this3 = this;

            var panelList = [];
            _react2.default.Children.map(this.props.children, function (item, index) {
                var isOpen = false;
                if (_this3.state.activeKey == item.props.panelKey) {
                    isOpen = true;
                }
                var panel = _react2.default.cloneElement(item, {
                    key: index,
                    index: index,
                    isOpen: isOpen,
                    accordion: _this3.props.accordion,
                    showLine: index != _this3.props.children.length - 1 || isOpen == true || !_this3.props.accordion,
                    changeOpenState: _this3.changeOpenState.bind(_this3)
                });
                panelList.push(panel);
                _this3.panelKeyList[index] = item.props.panelKey;
            });
            return panelList;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-collapse-container', style: this.props.style },
                this.renderPanel()
            );
        }
    }]);

    return Collapse;
}(_react.Component);

/**
 * key: id
 * title: 标题
 */

Collapse.defaultProps = {
    activityKey: '',
    onChange: function onChange() {},
    accordion: false,
    style: {}
};
Collapse.propTypes = {
    activeKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    onChange: _propTypes2.default.func,
    accordion: _propTypes2.default.bool,
    style: _propTypes2.default.object
};

var Panel = function (_Component2) {
    _inherits(Panel, _Component2);

    function Panel(props) {
        _classCallCheck(this, Panel);

        var _this4 = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

        _this4.state = {
            isOpen: _this4.props.isOpen
        };
        return _this4;
    }

    _createClass(Panel, [{
        key: 'changeOpenState',
        value: function changeOpenState(isOpen) {
            var _this5 = this;

            this.setState({
                isOpen: isOpen
            }, function () {
                _this5.props.changeOpenState(_this5.props.index, true, isOpen);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var isOpen = this.props.accordion ? this.props.isOpen : this.state.isOpen;
            var changeOpenState = this.props.accordion ? this.props.changeOpenState : this.changeOpenState.bind(this);
            var changeOpenStateParams = this.props.accordion ? this.props.index : !this.state.isOpen;
            var extendStyle = isOpen ? { minHeight: _util2.default.px2rem(91) } : { height: _util2.default.px2rem(91) };
            var source = isOpen ? _util2.default.icon64.arrowUp : _util2.default.icon64.arrowDown;
            return _react2.default.createElement(
                'div',
                { className: 'x-collapse-panel', style: extendStyle },
                _react2.default.createElement('hr', null),
                _react2.default.createElement(_list2.default, {
                    title: this.props.title,
                    rightIcon: _react2.default.createElement('img', { className: 'x-collapse-icon', src: source }),
                    onPress: function onPress() {
                        return changeOpenState(changeOpenStateParams);
                    },
                    showLine: this.props.showLine
                }),
                this.props.children
            );
        }
    }]);

    return Panel;
}(_react.Component);

Panel.defaultProps = {
    key: '',
    title: ''
};
Panel.propTypes = {
    key: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    title: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};


Collapse.Panel = Panel;

exports.default = Collapse;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _counter = __webpack_require__(111);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterExample = function (_React$Component) {
    _inherits(CounterExample, _React$Component);

    function CounterExample(props) {
        _classCallCheck(this, CounterExample);

        var _this = _possibleConstructorReturn(this, (CounterExample.__proto__ || Object.getPrototypeOf(CounterExample)).call(this, props));

        _this.state = {
            value: 2
        };
        return _this;
    }

    _createClass(CounterExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u9ED8\u8BA4\u503C'
                ),
                _react2.default.createElement(_counter2.default, { defaultValue: 5 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C'
                ),
                _react2.default.createElement(_counter2.default, { minValue: 10, maxValue: 15 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u6B65\u957F'
                ),
                _react2.default.createElement(_counter2.default, { stepNum: 3 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u7981\u7528'
                ),
                _react2.default.createElement(_counter2.default, { disabled: true }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u53D7\u63A7'
                ),
                _react2.default.createElement(_counter2.default, { value: this.state.value, onChange: function onChange(value) {
                        return _this2.setState({ value: value });
                    }, stepNum: 2, minValue: 1, maxValue: 9 })
            );
        }
    }]);

    return CounterExample;
}(_react2.default.Component);

exports.default = CounterExample;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

__webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_VALUE = 99;
var MIN_VALUE = 0;
var STEP_NUM = 1;

/**
 * defaultValue: 计数器默认值
 * value: 计数器的值
 * maxValue: 最大值
 * minValue: 最小值
 * stepNum: 跨度值
 * borderColor: 边框颜色
 * btnColor: 按钮颜色
 * onChange: value发生改变时的回调
 * disabled: 是否禁用
 */

var Counter = function (_Component) {
    _inherits(Counter, _Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.defaultValue = !isNaN(_this.props.defaultValue) ? _this.props.defaultValue : 0;
        _this.state = {
            value: !isNaN(_this.props.value) ? _this.props.value : _this.defaultValue
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _default = this.state.value ? this.state.value : this.defaultValue;
            if (_default < this.props.minValue) {
                this.setState({
                    value: this.props.minValue
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value != this.props.value) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(val) {
            var value = Number(val);
            //NaN处理
            if (isNaN(value)) value = this.state.value;
            //不能出现负数
            if (value < MIN_VALUE) value = MIN_VALUE;
            if (value < this.props.minValue) value = this.props.minValue;
            if (value > this.props.maxValue) value = this.props.maxValue;
            this.setState({
                value: value
            });
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.props.onChange && this.props.onChange(this.state.value);
        }
    }, {
        key: 'valueChanged',
        value: function valueChanged(type) {
            if (this.props.disabled) return;
            var _props = this.props,
                minValue = _props.minValue,
                maxValue = _props.maxValue,
                stepNum = _props.stepNum,
                onChange = _props.onChange;

            var newValue = this.state.value;
            if (type == 'minus') {
                newValue = newValue - stepNum <= minValue ? minValue : newValue - stepNum;
            } else {
                newValue = newValue + stepNum >= maxValue ? maxValue : newValue + stepNum;
            }
            newValue = Number(newValue);
            //不能出现负数
            if (newValue < MIN_VALUE) newValue = MIN_VALUE;
            if (!isNaN(this.props.value)) {
                onChange && onChange(newValue);
            } else {
                this.setState({
                    value: newValue
                }, function () {
                    onChange && onChange(newValue);
                });
            }
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                minValue = _props2.minValue,
                maxValue = _props2.maxValue,
                disabled = _props2.disabled,
                btnColor = _props2.btnColor,
                borderColor = _props2.borderColor;

            var reachedMin = this.state.value === minValue;
            var reachedMax = this.state.value === maxValue;
            var leftDisabledColor = reachedMin || disabled ? '#d5d3d3' : '#333333';
            var rightDisabledColor = reachedMax || disabled ? '#d5d3d3' : '#333333';
            var btnStyle = {
                borderColor: borderColor,
                backgroundColor: btnColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'x-counter-container', style: { borderColor: borderColor } },
                _react2.default.createElement(
                    'button',
                    { className: 'x-counter-left', onClick: function onClick() {
                            return _this2.valueChanged('minus');
                        }, style: _extends({ color: leftDisabledColor }, btnStyle) },
                    '-'
                ),
                disabled ? _react2.default.createElement(
                    'div',
                    { className: 'x-counter-disabled-box' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.value
                    )
                ) : _react2.default.createElement('input', {
                    className: 'x-counter-input-box',
                    type: 'tel',
                    value: this.state.value,
                    onChange: function onChange(e) {
                        return _this2.onChange(e.target.value);
                    },
                    onBlur: function onBlur() {
                        return _this2.onBlur();
                    }
                }),
                _react2.default.createElement(
                    'button',
                    { className: 'x-counter-right', onClick: function onClick() {
                            return _this2.valueChanged('add');
                        }, style: _extends({ color: rightDisabledColor }, btnStyle) },
                    '+'
                )
            );
        }
    }]);

    return Counter;
}(_react.Component);

Counter.defaultProps = {
    maxValue: MAX_VALUE,
    minValue: MIN_VALUE,
    stepNum: STEP_NUM,
    btnColor: '#eeeeee',
    borderColor: '#d5d3d3',
    onChange: function onChange() {},
    disabled: false
};
Counter.propTypes = {
    defaultValue: _error2.default.customValueTypes,
    value: _error2.default.customValueTypes,
    maxValue: _error2.default.customMaxValueTypes,
    minValue: _error2.default.customMinValueTypes,
    stepNum: _propTypes2.default.number,
    btnColor: _propTypes2.default.string,
    borderColor: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    disabled: _propTypes2.default.bool
};
exports.default = Counter;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _drawerLayout = __webpack_require__(114);

var _drawerLayout2 = _interopRequireDefault(_drawerLayout);

var _list = __webpack_require__(13);

var _list2 = _interopRequireDefault(_list);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawerLayoutExample = function (_React$Component) {
    _inherits(DrawerLayoutExample, _React$Component);

    function DrawerLayoutExample(props) {
        _classCallCheck(this, DrawerLayoutExample);

        return _possibleConstructorReturn(this, (DrawerLayoutExample.__proto__ || Object.getPrototypeOf(DrawerLayoutExample)).call(this, props));
    }

    _createClass(DrawerLayoutExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var drawerView = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_list2.default, { title: '前往商城', showLine: true }),
                _react2.default.createElement(_list2.default, { title: '个人中心', showLine: true }),
                _react2.default.createElement(_list2.default, { title: '设置', showLine: true }),
                _react2.default.createElement(
                    'p',
                    { style: { fontSize: '0.4rem' } },
                    'I\'m in the Drawer!'
                )
            );
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _button2.default,
                    {
                        onPress: function onPress() {
                            return _this2.drawer.openDrawer();
                        }
                    },
                    '\u6253\u5F00\u5DE6\u4FA7\u62BD\u5C49'
                ),
                _react2.default.createElement(_drawerLayout2.default, {
                    renderNavigationView: function renderNavigationView() {
                        return drawerView;
                    },
                    ref: function ref(drawer) {
                        return _this2.drawer = drawer;
                    }
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    {
                        onPress: function onPress() {
                            return _this2.drawer1.openDrawer();
                        }
                    },
                    '\u6253\u5F00\u53F3\u4FA7\u62BD\u5C49'
                ),
                _react2.default.createElement(_drawerLayout2.default, {
                    drawerPosition: _drawerLayout.DRAWER_POSITION.RIGHT,
                    renderNavigationView: function renderNavigationView() {
                        return drawerView;
                    },
                    ref: function ref(drawer) {
                        return _this2.drawer1 = drawer;
                    }
                })
            );
        }
    }]);

    return DrawerLayoutExample;
}(_react2.default.Component);

exports.default = DrawerLayoutExample;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DRAWER_POSITION = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(115);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DRAWER_POSITION = exports.DRAWER_POSITION = {
    LEFT: 'left',
    RIGHT: 'right'
};

var DrawerLayout = function (_Component) {
    _inherits(DrawerLayout, _Component);

    function DrawerLayout(props) {
        _classCallCheck(this, DrawerLayout);

        var _this = _possibleConstructorReturn(this, (DrawerLayout.__proto__ || Object.getPrototypeOf(DrawerLayout)).call(this, props));

        _this.state = {
            openValue: 0,
            drawerHasShown: false
        };
        return _this;
    }

    _createClass(DrawerLayout, [{
        key: 'openDrawer',
        value: function openDrawer() {
            this.setState({
                drawerHasShown: true
            });
            this.props.onDrawerOpen && this.props.onDrawerOpen();
        }
    }, {
        key: 'closeDrawer',
        value: function closeDrawer() {
            this.setState({
                drawerHasShown: false
            });
            this.props.onDrawerClose && this.props.onDrawerClose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'x-drawer-container' + (this.state.drawerHasShown ? ' x-drawer-active' : '') },
                _react2.default.createElement('div', { className: 'x-drawer-mask', onClick: function onClick() {
                        return _this2.closeDrawer();
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'x-drawer-view x-drawer-view-' + (this.props.drawerPosition === DRAWER_POSITION.LEFT ? 'left' : 'right') },
                    this.props.renderNavigationView()
                )
            );
        }
    }]);

    return DrawerLayout;
}(_react.Component);

DrawerLayout.defaultProps = {
    renderNavigationView: function renderNavigationView() {},
    drawerPosition: DRAWER_POSITION.LEFT,
    onDrawerOpen: function onDrawerOpen() {},
    onDrawerClose: function onDrawerClose() {}
};
DrawerLayout.propTypes = {
    renderNavigationView: _propTypes2.default.func,
    drawerPosition: _propTypes2.default.string,
    onDrawerOpen: _propTypes2.default.func,
    onDrawerClose: _propTypes2.default.func
};
exports.default = DrawerLayout;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _flex = __webpack_require__(43);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexExample = function (_React$Component) {
    _inherits(FlexExample, _React$Component);

    function FlexExample(props) {
        _classCallCheck(this, FlexExample);

        return _possibleConstructorReturn(this, (FlexExample.__proto__ || Object.getPrototypeOf(FlexExample)).call(this, props));
    }

    _createClass(FlexExample, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _flex2.default,
                    { flexStyle: { marginBottom: '0.4rem' } },
                    _react2.default.createElement(
                        _flex2.default.Item,
                        null,
                        _react2.default.createElement(
                            'div',
                            { style: { backgroundColor: '#108EE9' } },
                            _react2.default.createElement(
                                'p',
                                null,
                                '\u5E73\u5206'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _flex2.default.Item,
                        null,
                        _react2.default.createElement(
                            'div',
                            { style: { backgroundColor: '#4badf3' } },
                            _react2.default.createElement(
                                'p',
                                null,
                                '\u5E73\u5206'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _flex2.default,
                    {
                        justify: 'flex-end',
                        flexStyle: { marginBottom: 20 }
                    },
                    function () {
                        return [1, 2, 3].map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: index,
                                    style: { marginLeft: 10, marginRight: 0, backgroundColor: '#8c62f9' }
                                },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    '\u4E3B\u8F74 flex-end'
                                )
                            );
                        });
                    }()
                ),
                _react2.default.createElement(
                    _flex2.default,
                    {
                        align: 'flex-end',
                        flexStyle: { marginBottom: 20, height: '1rem', backgroundColor: '#eeeeee' }
                    },
                    function () {
                        return [1, 2, 3].map(function (item, index) {
                            return _react2.default.createElement(
                                'p',
                                {
                                    key: index,
                                    style: { marginLeft: 10, marginRight: 0, backgroundColor: '#ff4f4f' }
                                },
                                '\u6B21\u62BD flex-end'
                            );
                        });
                    }()
                ),
                _react2.default.createElement(
                    _flex2.default,
                    { flexStyle: { marginBottom: 20 } },
                    function () {
                        return [1, 2, 3, 5, 6, 7, 8, 9].map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: index,
                                    style: { marginLeft: 10, marginRight: 0, marginTop: 10, backgroundColor: '#11b7c0' }
                                },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'flex-wrap wrap'
                                )
                            );
                        });
                    }()
                ),
                _react2.default.createElement(
                    _flex2.default,
                    { justify: 'center', align: 'center', flexStyle: { width: '5rem', height: '3rem', backgroundColor: '#afb50c' } },
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D'
                    )
                )
            );
        }
    }]);

    return FlexExample;
}(_react2.default.Component);

exports.default = FlexExample;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(119);

var _header2 = _interopRequireDefault(_header);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderExample = function (_React$Component) {
    _inherits(HeaderExample, _React$Component);

    function HeaderExample(props) {
        _classCallCheck(this, HeaderExample);

        return _possibleConstructorReturn(this, (HeaderExample.__proto__ || Object.getPrototypeOf(HeaderExample)).call(this, props));
    }

    _createClass(HeaderExample, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u57FA\u672C'
                ),
                _react2.default.createElement(_header2.default, { title: '导航栏' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u5DE6\u4FA7\u6309\u94AE'
                ),
                _react2.default.createElement(_header2.default, {
                    title: '导航栏',
                    leftBtn: _react2.default.createElement(_icon2.default, { name: 'ios-arrow-back', color: 'white' })
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u53F3\u4FA7\u6309\u94AE'
                ),
                _react2.default.createElement(_header2.default, {
                    title: '导航栏',
                    rightBtn: _react2.default.createElement(
                        'span',
                        { style: { fontSize: '0.35rem', color: 'white' } },
                        '\u66F4\u591A'
                    )
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u81EA\u5B9A\u4E49\u6837\u5F0F'
                ),
                _react2.default.createElement(_header2.default, {
                    title: '导航栏',
                    containerStyle: { backgroundColor: '#01DD9B' },
                    leftBtn: _react2.default.createElement(_icon2.default, { name: 'ios-arrow-back', color: 'white' }),
                    rightBtn: _react2.default.createElement(
                        'span',
                        { style: { fontSize: '0.35rem', color: 'white' } },
                        '\u66F4\u591A'
                    )
                })
            );
        }
    }]);

    return HeaderExample;
}(_react2.default.Component);

exports.default = HeaderExample;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(120);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * containerStyle: 自定义容器样式
 * title: 标题
 * titleStyle: 标题样式
 * leftBtn: 自定义左侧按钮
 * rightBtn: 自定义右侧按钮
 */

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var leftContain = this.props.leftBtn ? this.props.leftBtn : null;
            var rightContain = this.props.rightBtn ? this.props.rightBtn : null;
            var leftBtn = _react2.default.createElement(
                'div',
                { className: 'x-header-button' },
                leftContain
            );
            var rightBtn = _react2.default.createElement(
                'div',
                { className: 'x-header-button x-header-button-right' },
                rightContain
            );
            return _react2.default.createElement(
                'div',
                { className: 'x-header-container', style: this.props.containerStyle },
                leftBtn,
                _react2.default.createElement(
                    'span',
                    { className: 'x-header-title-text', style: this.props.titleStyle },
                    this.props.title
                ),
                rightBtn
            );
        }
    }]);

    return Header;
}(_react.Component);

Header.defaultProps = {
    containerStyle: {},
    title: '',
    titleStyle: {},
    leftBtn: null,
    rightBtn: null
};
Header.propTypes = {
    containerStyle: _propTypes2.default.object,
    title: _propTypes2.default.string,
    titleStyle: _propTypes2.default.object,
    leftBtn: _propTypes2.default.element,
    rightBtn: _propTypes2.default.element
};
exports.default = Header;

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

var _iconMap = __webpack_require__(42);

var _iconMap2 = _interopRequireDefault(_iconMap);

var _flex = __webpack_require__(43);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconExample = function (_React$Component) {
    _inherits(IconExample, _React$Component);

    function IconExample(props) {
        _classCallCheck(this, IconExample);

        return _possibleConstructorReturn(this, (IconExample.__proto__ || Object.getPrototypeOf(IconExample)).call(this, props));
    }

    _createClass(IconExample, [{
        key: 'render',
        value: function render() {
            {/** h5新增功能，flex属性小于0时不再为容器设置flex属性，否则的话width就没法生效了*/}
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _flex2.default,
                    { wrap: 'wrap', justify: 'center' },
                    Object.keys(_iconMap2.default).map(function (item) {
                        return _react2.default.createElement(
                            _flex2.default.Item,
                            { flex: -1, key: item, flexItemStyle: { width: '1.5rem', padding: '0 0.2rem', textAlign: 'center' } },
                            _react2.default.createElement(_icon2.default, { name: item })
                        );
                    })
                )
            );
        }
    }]);

    return IconExample;
}(_react2.default.Component);

exports.default = IconExample;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(13);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListExample = function (_React$Component) {
    _inherits(ListExample, _React$Component);

    function ListExample(props) {
        _classCallCheck(this, ListExample);

        return _possibleConstructorReturn(this, (ListExample.__proto__ || Object.getPrototypeOf(ListExample)).call(this, props));
    }

    _createClass(ListExample, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_list2.default, { title: '基本' }),
                _react2.default.createElement(_list2.default, { title: '显示分割线', showLine: true }),
                _react2.default.createElement(_list2.default, { showLine: true, title: '显示右侧箭头', showRightIcon: true }),
                _react2.default.createElement(
                    _list2.default,
                    {
                        title: '控制左右内容的对齐方式',
                        leftContent: _react2.default.createElement('div', { style: { width: '0.5rem', height: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#68b1ed', marginRight: '0.3rem' } }),
                        rightContent: _react2.default.createElement(
                            'span',
                            { style: { fontSize: '0.3rem' } },
                            '12:00'
                        ),
                        rightContentFlex: 'flex-start',
                        showLine: true
                    },
                    _react2.default.createElement(
                        'p',
                        { style: { fontSize: '0.3rem' } },
                        '\u5DE6\u4FA7\u5185\u5BB9\u5C45\u4E2D\u4E8EList'
                    ),
                    _react2.default.createElement(
                        'p',
                        { style: { fontSize: '0.3rem' } },
                        '\u53F3\u4FA7\u5185\u5BB9\u4E0A\u5BF9\u9F50\u4E8EList'
                    )
                ),
                _react2.default.createElement(
                    _list2.default,
                    {
                        title: '右侧内容布局下对齐',
                        leftContent: _react2.default.createElement('div', { style: { width: '0.5rem', height: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#68b1ed', marginRight: '0.3rem' } }),
                        rightContent: _react2.default.createElement(
                            'span',
                            { style: { fontSize: '0.3rem' } },
                            '12:00'
                        ),
                        rightContentFlex: 'flex-end',
                        showLine: true
                    },
                    _react2.default.createElement(
                        'p',
                        { style: { fontSize: '0.3rem' } },
                        '\u5DE6\u4FA7\u5185\u5BB9\u5C45\u4E2D\u4E8EList'
                    ),
                    _react2.default.createElement(
                        'p',
                        { style: { fontSize: '0.3rem' } },
                        '\u53F3\u4FA7\u5185\u5BB9\u4E0B\u5BF9\u9F50\u4E8EList'
                    )
                ),
                _react2.default.createElement(_list2.default, {
                    title: '左侧内容布局下对齐',
                    leftContent: _react2.default.createElement('div', { style: { width: '0.5rem', height: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#ff4f4f', marginRight: '0.3rem' } }),
                    leftContentFlex: 'flex-end',
                    rightContent: _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem' } },
                            '\u5DE6\u4FA7\u5185\u5BB9\u4E0A\u5BF9\u9F50\u4E8EList'
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: { fontSize: '0.35rem' } },
                            '\u53F3\u4FA7\u5185\u5BB9\u5C45\u4E2D\u4E8EList'
                        )
                    )
                })
            );
        }
    }]);

    return ListExample;
}(_react2.default.Component);

exports.default = ListExample;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pagination = __webpack_require__(124);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationExample = function (_React$Component) {
    _inherits(PaginationExample, _React$Component);

    function PaginationExample(props) {
        _classCallCheck(this, PaginationExample);

        var _this = _possibleConstructorReturn(this, (PaginationExample.__proto__ || Object.getPrototypeOf(PaginationExample)).call(this, props));

        _this.state = {
            current: 3
        };
        return _this;
    }

    _createClass(PaginationExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u57FA\u672C'
                ),
                _react2.default.createElement(_pagination2.default, null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u9ED8\u8BA4\u9875\u7801'
                ),
                _react2.default.createElement(_pagination2.default, { defaultPageNum: 2, pageTotal: 10 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u81EA\u5B9A\u4E49\u6587\u5B57'
                ),
                _react2.default.createElement(_pagination2.default, { previous: 'previous', next: 'next', defaultPageNum: 5, pageTotal: 10 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u9690\u85CF\u6570\u5B57'
                ),
                _react2.default.createElement(_pagination2.default, { hidePage: true, pageTotal: 3 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u9690\u85CF\u6309\u94AE'
                ),
                _react2.default.createElement(_pagination2.default, { hideButton: true, pageTotal: 3 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u53D7\u63A7'
                ),
                _react2.default.createElement(_pagination2.default, { pageNum: this.state.current, pageTotal: 5, onChange: function onChange(current) {
                        return _this2.setState({ current: current });
                    } }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u81EA\u5B9A\u4E49\u6837\u5F0F'
                ),
                _react2.default.createElement(_pagination2.default, {
                    activePageColor: '#108EE9',
                    pageColor: '#333333',
                    previousBtnStyle: { backgroundColor: '#108EE9', borderWidth: 0 },
                    previousTextStyle: { color: 'white' },
                    nextBtnStyle: { backgroundColor: '#108EE9', borderWidth: 0 },
                    nextTextStyle: { color: 'white' },
                    pageTotal: 10
                })
            );
        }
    }]);

    return PaginationExample;
}(_react2.default.Component);

exports.default = PaginationExample;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

__webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * defaultPageNum --> 默认页码数
 * pageNum --> 页码数
 * pageTotal --> 总页数
 * previous --> 上一页按钮文字
 * next --> 下一页按钮文字
 * hidePage --> 隐藏数字
 * hideButton --> 隐藏按钮
 * disabled --> 禁用分页按钮
 * onChange --> 页码改变时的回调
 * activePageColor --> 当前页码的颜色
 * pageColor --> 数字的颜色(/pageTotal)
 * previousBtnStyle --> 上一页按钮样式
 * nextBtnStyle --> 下一页按钮样式
 * previousTextStyle --> 上一页文字样式
 * nextTextStyle --> 下一页文字样式
 */

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {
            currentPage: 1
        };
        return _this;
    }
    // defaultPageNum/pageNum必须大于等于1且小于等于pageTotal
    // pageTotal必须大于等于1


    _createClass(Pagination, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.pageNum != null) {
                this.setState({
                    currentPage: this.props.pageNum
                });
            } else if (this.props.defaultPageNum != null) {
                this.setState({
                    currentPage: this.props.defaultPageNum
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.pageNum != this.props.pageNum) {
                this.setState({
                    currentPage: nextProps.pageNum
                });
            }
        }
    }, {
        key: 'addPageNum',
        value: function addPageNum() {
            var _this2 = this;

            var prevPage = this.state.currentPage;
            var nextPage = prevPage;
            if (prevPage < this.props.pageTotal) {
                nextPage += 1;
            }
            if (this.props.pageNum == null) {
                this.setState({
                    currentPage: nextPage
                }, function () {
                    _this2.props.onChange && _this2.props.onChange(_this2.state.currentPage);
                });
            } else {
                this.props.onChange && this.props.onChange(nextPage);
            }
        }
    }, {
        key: 'subtractPageNum',
        value: function subtractPageNum() {
            var _this3 = this;

            var prevPage = this.state.currentPage;
            var nextPage = prevPage;
            if (prevPage > 1) {
                nextPage -= 1;
            }
            if (this.props.pageNum == null) {
                this.setState({
                    currentPage: nextPage
                }, function () {
                    _this3.props.onChange && _this3.props.onChange(_this3.state.currentPage);
                });
            } else {
                this.props.onChange && this.props.onChange(nextPage);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var btnStyle = {
                borderColor: _util2.default.theme.lineColor,
                borderWidth: 1,
                backgroundColor: 'white'
            };
            var justifyContent = this.props.hideButton ? 'center' : 'between';
            var previousDisabled = this.props.disabled || (this.state.currentPage > 1 ? false : true);
            var nextDisabled = this.props.disabled || (this.state.currentPage < this.props.pageTotal ? false : true);
            return _react2.default.createElement(
                'div',
                { className: 'x-pagination-container x-pagination-justify-' + justifyContent },
                !this.props.hideButton ? _react2.default.createElement(
                    _button2.default,
                    {
                        buttonStyle: _extends({}, btnStyle, this.props.previousBtnStyle),
                        textStyle: _extends({ color: _util2.default.theme.minorColor }, this.props.previousTextStyle),
                        inline: true,
                        disabled: previousDisabled,
                        onPress: function onPress() {
                            return _this4.subtractPageNum();
                        }
                    },
                    this.props.previous
                ) : null,
                !this.props.hidePage ? _react2.default.createElement(
                    'span',
                    { className: 'x-pagination-text', style: { color: this.props.pageColor } },
                    _react2.default.createElement(
                        'span',
                        { style: { color: this.props.activePageColor } },
                        this.state.currentPage
                    ),
                    '/',
                    this.props.pageTotal
                ) : null,
                !this.props.hideButton ? _react2.default.createElement(
                    _button2.default,
                    {
                        buttonStyle: _extends({}, btnStyle, this.props.nextBtnStyle),
                        textStyle: _extends({ color: _util2.default.theme.minorColor }, this.props.nextTextStyle),
                        inline: true,
                        disabled: nextDisabled,
                        onPress: function onPress() {
                            return _this4.addPageNum();
                        }
                    },
                    this.props.next
                ) : null
            );
        }
    }]);

    return Pagination;
}(_react.Component);

Pagination.defaultProps = {
    pageTotal: 1,
    previous: '上一页',
    next: '下一页',
    hidePage: false,
    hideButton: false,
    disabled: false,
    activePageColor: _util2.default.theme.mainColor,
    pageColor: _util2.default.theme.minorColor,
    previousBtnStyle: {},
    nextBtnStyle: {},
    previousTextStyle: {},
    nextTextStyle: {},
    onChange: function onChange() {} };
Pagination.propTypes = {
    defaultPageNum: _error2.default.customPageNumTypes,
    pageNum: _error2.default.customPageNumTypes,
    pageTotal: _error2.default.customPageTotalTypes,
    previous: _propTypes2.default.string,
    next: _propTypes2.default.string,
    hidePage: _propTypes2.default.bool,
    hideButton: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    activePageColor: _propTypes2.default.string,
    pageColor: _propTypes2.default.string,
    previousBtnStyle: _propTypes2.default.object,
    nextBtnStyle: _propTypes2.default.object,
    previousTextStyle: _propTypes2.default.object,
    nextTextStyle: _propTypes2.default.object,
    onChange: _propTypes2.default.func
};
exports.default = Pagination;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _radio = __webpack_require__(127);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioExample = function (_React$Component) {
    _inherits(RadioExample, _React$Component);

    function RadioExample(props) {
        _classCallCheck(this, RadioExample);

        var _this = _possibleConstructorReturn(this, (RadioExample.__proto__ || Object.getPrototypeOf(RadioExample)).call(this, props));

        _this.state = {
            value: 'B'
        };
        return _this;
    }

    _createClass(RadioExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u72EC\u7ACB\u4F7F\u7528'
                ),
                _react2.default.createElement(
                    _radio2.default,
                    { id: 'radio_1', value: 'A' },
                    'A'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u8BBE\u7F6E\u52FE\u9009\u9879'
                ),
                _react2.default.createElement(
                    _radio2.default,
                    { id: 'radio_2', value: 'A', checked: false },
                    'A'
                ),
                _react2.default.createElement(
                    _radio2.default,
                    { id: 'radio_3', value: 'B', checked: true },
                    'B'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u7981\u7528'
                ),
                _react2.default.createElement(
                    _radio2.default,
                    { id: 'radio_4', value: 'A', disabled: true },
                    'A'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u6309\u94AE\u7EC4'
                ),
                _react2.default.createElement(
                    _radio2.default.Group,
                    { defaultValue: 'C' },
                    _react2.default.createElement(
                        _radio2.default,
                        { id: 'radio_5', value: 'A' },
                        'A'
                    ),
                    _react2.default.createElement(
                        _radio2.default,
                        { id: 'radio_6', value: 'B' },
                        'B'
                    ),
                    _react2.default.createElement(
                        _radio2.default,
                        { id: 'radio_7', value: 'C' },
                        'C'
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u53D7\u63A7\u72B6\u6001'
                ),
                _react2.default.createElement(
                    _radio2.default.Group,
                    { value: this.state.value, onChange: function onChange(value) {
                            return _this2.setState({ value: value });
                        } },
                    _react2.default.createElement(
                        _radio2.default,
                        { id: 'radio_8', value: 'A' },
                        'A'
                    ),
                    _react2.default.createElement(
                        _radio2.default,
                        { id: 'radio_9', value: 'B' },
                        'B'
                    ),
                    _react2.default.createElement(
                        _radio2.default,
                        { id: 'radio_10', value: 'C' },
                        'C'
                    )
                )
            );
        }
    }]);

    return RadioExample;
}(_react2.default.Component);

exports.default = RadioExample;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * defaultValue: 默认值
 * value: value --> 受控
 * onChange: group value更改时的回调，返回当前value
 * disabled: 是否禁用
 * groupStyle: 自定义group容器样式
 */

var Group = function (_Component) {
    _inherits(Group, _Component);

    function Group(props) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

        _this.state = {
            currentValue: null
        };
        return _this;
    }

    _createClass(Group, [{
        key: 'changeValue',
        value: function changeValue(value) {
            if (this.props.value != null) {} else {
                this.setState({
                    currentValue: value
                });
            }
            this.props.onChange(value);
        }
    }, {
        key: 'renderRadioGroup',
        value: function renderRadioGroup() {
            var _this2 = this;

            var disabled = this.props.disabled == null ? false : this.props.disabled;
            return _react2.default.Children.map(this.props.children, function (item, index) {
                var extendProps = {
                    disabled: disabled,
                    groupLimit: true,
                    onClick: function onClick(value) {
                        return _this2.changeValue(value);
                    }
                    //用户指定了value,radio变成了受控组件
                };if (_this2.props.value != null) {
                    var checked = _this2.props.value == item.props.value;
                    extendProps.checked = checked;
                }
                //其他任何条件下radio都是非受控的
                else if (_this2.props.defaultValue != null) {
                        var _checked = _this2.state.currentValue == null ? _this2.props.defaultValue == item.props.value : _this2.state.currentValue == item.props.value;
                        extendProps.checked = _checked;
                    } else {
                        if (_this2.state.currentValue != null) {
                            var _checked2 = _this2.state.currentValue == item.props.value;
                            extendProps.checked = _checked2;
                        } else {
                            extendProps.checked = false;
                        }
                    }
                return _react2.default.cloneElement(item, extendProps);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.props.groupStyle },
                this.renderRadioGroup()
            );
        }
    }]);

    return Group;
}(_react.Component);
/**
 * id: radio id
 * value: radio value
 * checked: 勾选状态（受控）
 * radioStyle: 自定义radio样式
 * textStyle: 自定义文本样式
 * disabled: 是否禁用
*/


Group.defaultProps = {
    groupStyle: {},
    disabled: false,
    onChange: function onChange() {}
};
Group.propTypes = {
    groupStyle: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};

var Radio = function (_Component2) {
    _inherits(Radio, _Component2);

    function Radio(props) {
        _classCallCheck(this, Radio);

        var _this3 = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

        _this3.state = {
            checked: false
        };
        return _this3;
    }

    _createClass(Radio, [{
        key: 'changeRadio',
        value: function changeRadio() {
            if (this.props.groupLimit || this.props.groupLimit != null) {
                this.props.onClick(this.props.value);
            } else {
                if (this.props.checked == null) {
                    this.setState({
                        checked: true
                    });
                } else {
                    this.setState({
                        checked: this.props.checked
                    });
                }
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.groupLimit || this.props.checked != null) {
                this.setState({
                    checked: this.props.checked
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checked != this.props.checked) {
                if (nextProps.groupLimit || nextProps.checked != null) {
                    this.setState({
                        checked: nextProps.checked
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var disabledStyle = this.props.disabled ? { color: '#CCCCCC' } : {};
            var radioClass = this.state.checked ? 'x-radio-checked' : '';
            var disabledClass = this.props.disabled ? ' x-radio-disabled' : '';
            return _react2.default.createElement(
                'div',
                { className: 'x-radio-container' + disabledClass, style: this.props.radioStyle },
                _react2.default.createElement('input', {
                    type: 'radio',
                    id: this.props.id,
                    value: this.props.value,
                    checked: this.state.checked,
                    disabled: this.props.disabled,
                    onChange: function onChange() {
                        return _this4.changeRadio();
                    }
                }),
                _react2.default.createElement(
                    'label',
                    {
                        htmlFor: this.props.id,
                        className: radioClass
                    },
                    this.props.children && this.props.children.length ? _react2.default.createElement(
                        'span',
                        { style: _extends({}, this.props.textStyle, disabledStyle) },
                        this.props.children
                    ) : null
                )
            );
        }
    }]);

    return Radio;
}(_react.Component);

Radio.defaultProps = {
    disabled: false,
    radioStyle: {},
    textStyle: {}
};
Radio.propTypes = {
    id: _propTypes2.default.string.isRequired,
    checked: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    radioStyle: _propTypes2.default.object,
    textStyle: _propTypes2.default.object
};


Radio.Group = Group;
exports.default = Radio;

/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search = __webpack_require__(130);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchExample = function (_React$Component) {
    _inherits(SearchExample, _React$Component);

    function SearchExample(props) {
        _classCallCheck(this, SearchExample);

        var _this = _possibleConstructorReturn(this, (SearchExample.__proto__ || Object.getPrototypeOf(SearchExample)).call(this, props));

        _this.state = {
            value: '受控'
        };
        return _this;
    }

    _createClass(SearchExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_search2.default, {
                    placeholder: '输入任何内容'
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_search2.default, {
                    placeholder: '「取消」常显',
                    showCancelButton: true
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_search2.default, {
                    placeholder: '自定义取消文本',
                    showCancelButton: true,
                    cancelText: '关闭'
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_search2.default, {
                    placeholder: '显示模态框',
                    showModal: true
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_search2.default, {
                    placeholder: '自定义模态框组件',
                    showModal: true,
                    modalComponent: _react2.default.createElement(
                        'p',
                        { style: { fontSize: '0.4rem' } },
                        '\u8FD9\u91CC\u663E\u793A\u81EA\u5B9A\u4E49\u5185\u5BB9'
                    )
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_search2.default, {
                    placeholder: '禁用',
                    disabled: true
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_search2.default, {
                    defaultValue: '默认值'
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_search2.default, {
                    value: this.state.value,
                    onChange: function onChange(value) {
                        return _this2.setState({ value: value });
                    }
                })
            );
        }
    }]);

    return SearchExample;
}(_react2.default.Component);

exports.default = SearchExample;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * defaultValue: 默认值
 * value: value（受控）
 * placeholder
 * cancelText: “取消”按钮的文本
 * onChange: 相当于input的onChange
 * onSubmit
 * onFocus
 * onBlur
 * onCancel: 点击“取消”时的回调
 * showModal: 是否启动modal模式
 * showCancelButton: 是否显示“取消”按钮
 * disabled: 是否禁用
 * modalComponent: 如果开启了modal模式，使用该属性定义Modal组件内的子元素
 */

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            modalVisible: false,
            width: 0
        };

        _this.inputBoxText = _this.props.value || _this.props.defaultValue || _this.props.placeholder;
        return _this;
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'runAnimation',
        value: function runAnimation(widthEnd, callback) {
            this.setState({
                width: widthEnd
            }, function () {
                callback && callback();
            });
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            !this.props.showCancelButton && this.runAnimation(_util2.default.px2rem(60));
            this.props.onFocus();
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            !this.props.showCancelButton && this.runAnimation(0);
            this.props.onBlur();
        }
    }, {
        key: 'onCancel',
        value: function onCancel() {
            !this.props.showCancelButton && this.runAnimation(0);
            this.props.onCancel();
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.search.focus();
            !this.props.showCancelButton && !this.props.showModal && this.runAnimation(_util2.default.px2rem(60));
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.search.blur();
            !this.props.showCancelButton && !this.props.showModal && this.runAnimation(0);
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(keyCode) {
            keyCode === 13 && this.props.onSubmit();
        }
    }, {
        key: 'changeModalVisible',
        value: function changeModalVisible(visible) {
            var _this2 = this;

            this.setState({
                modalVisible: visible
            }, function () {
                visible && _this2.search.focus();
            });
        }
    }, {
        key: 'renderCancelBtn',
        value: function renderCancelBtn(needAnimate, isInModal) {
            var style = needAnimate ? {
                width: this.state.width
            } : null;
            var callback = !isInModal ? this.onCancel.bind(this) : this.cancelModal.bind(this);
            return _react2.default.createElement(
                'a',
                { className: 'x-search-cancel x-search-input', style: style, href: 'javascript:;', onClick: callback },
                this.props.cancelText
            );
        }
    }, {
        key: 'cancelModal',
        value: function cancelModal() {
            this.inputBoxText = this.search.value || this.props.placeholder;
            this.props.onCancel();
            this.search.blur();
            this.props.showModal && this.changeModalVisible(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return !this.props.showModal ? _react2.default.createElement(
                'div',
                { className: 'x-search-container', style: this.props.showCancelButton ? null : { paddingRight: _util2.default.px2rem(parseFloat(_util2.default.rem2px(this.state.width)) / 3) } },
                _react2.default.createElement('input', {
                    className: 'x-search-input',
                    placeholder: this.props.placeholder,
                    defaultValue: this.props.defaultValue,
                    value: this.props.value,
                    ref: function ref(input) {
                        return _this3.search = input;
                    },
                    onFocus: function onFocus() {
                        return _this3.onFocus();
                    },
                    onBlur: function onBlur() {
                        return _this3.onBlur();
                    },
                    onChange: function onChange(e) {
                        return _this3.props.onChange(e.target.value);
                    },
                    onKeyDown: function onKeyDown(e) {
                        return _this3.onKeyDown(e.keyCode);
                    },
                    disabled: this.props.disabled
                }),
                this.props.showCancelButton ? this.renderCancelBtn(false, false) : this.renderCancelBtn(true, false)
            ) : _react2.default.createElement(
                'div',
                { className: 'x-search-container x-search-table' },
                _react2.default.createElement(
                    'a',
                    { className: 'x-search-input x-search-box', href: 'javascript:;', onClick: function onClick() {
                            _this3.changeModalVisible(true);
                        } },
                    this.inputBoxText
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'x-search-mask ' + (this.state.modalVisible ? 'x-show' : 'x-hide') },
                    _react2.default.createElement(
                        'div',
                        { className: 'x-search-container', style: { backgroundColor: 'white' } },
                        _react2.default.createElement('input', {
                            className: 'x-search-input',
                            style: { backgroundColor: '#EFEFF4' },
                            placeholder: this.props.placeholder,
                            defaultValue: this.props.defaultValue,
                            value: this.props.value,
                            ref: function ref(input) {
                                return _this3.search = input;
                            },
                            onFocus: function onFocus() {
                                return _this3.onFocus();
                            },
                            onBlur: function onBlur() {
                                return _this3.onBlur();
                            },
                            onChange: function onChange(e) {
                                return _this3.props.onChange(e.target.value);
                            },
                            onKeyDown: function onKeyDown(e) {
                                return _this3.onKeyDown(e.keyCode);
                            },
                            disabled: this.props.disabled
                        }),
                        this.renderCancelBtn(false, true)
                    ),
                    _react2.default.createElement('hr', null),
                    this.props.modalComponent
                )
            );
        }
    }]);

    return Search;
}(_react.Component);

Search.defaultProps = {
    defaultValue: '',
    placeholder: '搜索',
    cancelText: '取消',
    onChange: function onChange() {},
    onSubmit: function onSubmit() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onCancel: function onCancel() {},
    showModal: false,
    showCancelButton: false,
    disabled: false,
    modalComponent: null
};
Search.propTypes = {
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    placeholder: _propTypes2.default.string,
    cancelText: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onSubmit: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onCancel: _propTypes2.default.func,
    showModal: _propTypes2.default.bool,
    showCancelButton: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    modalComponent: _propTypes2.default.element
};
exports.default = Search;

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slider = __webpack_require__(133);

var _slider2 = _interopRequireDefault(_slider);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderExample = function (_React$Component) {
    _inherits(SliderExample, _React$Component);

    function SliderExample(props) {
        _classCallCheck(this, SliderExample);

        var _this = _possibleConstructorReturn(this, (SliderExample.__proto__ || Object.getPrototypeOf(SliderExample)).call(this, props));

        _this.state = {
            value: 0,
            slider: null
        };
        return _this;
    }

    _createClass(SliderExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u57FA\u672C'
                ),
                _react2.default.createElement(_slider2.default, null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u5BBD\u5EA6'
                ),
                _react2.default.createElement(_slider2.default, { width: 600 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u5F53\u524D\u4F4D\u7F6E'
                ),
                _react2.default.createElement(_slider2.default, { progress: 50 }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u7981\u7528'
                ),
                _react2.default.createElement(_slider2.default, { progress: 50, disabled: true }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u53D7\u63A7'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.state.value
                ),
                _react2.default.createElement(_slider2.default, { progress: this.state.value, onChange: function onChange(value) {
                        return _this2.setState({ value: value });
                    } }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u81EA\u5B9A\u4E49\u6837\u5F0F'
                ),
                _react2.default.createElement(_slider2.default, {
                    progress: 30,
                    minValue: 0,
                    maxValue: 99,
                    barColor: '#eeeeee',
                    ballColor: '#b134e5',
                    crossColor: '#11b7c0'
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u624B\u52A8\u83B7\u53D6\u503C'
                ),
                _react2.default.createElement(_slider2.default, { ref: function ref(slider) {
                        return _this2.slider = slider;
                    } }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return alert(_this2.slider.getValue());
                        } },
                    '\u83B7\u53D6'
                )
            );
        }
    }]);

    return SliderExample;
}(_react2.default.Component);

exports.default = SliderExample;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

__webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CIRCLE_WIDTH = 44;
var MIN_VALUE = 0;
var MAX_VALUE = 100;

/**
 * width: 滑块宽度(px，slider会自动转化成rem)
 * progress: 当前value值
 * minValue: 滑块最小值
 * maxValue: 滑块最大值
 * barColor: 轨道颜色
 * ballColor: 圆形按钮颜色
 * crossColor: 已经过的轨道的颜色
 * disabled: 是否禁用
 * onChange: value发生改变时的回调
 */

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        var originalPercent = (_this.props.progress - _this.props.minValue) / _this.props.maxValue;
        var initialProgress = originalPercent * (_this.props.width - CIRCLE_WIDTH);
        _this.state = {
            progress: initialProgress
        };
        _this.startX = 0;
        _this.endX = 0;
        _this.currentProgress = initialProgress;
        return _this;
    }

    _createClass(Slider, [{
        key: 'touchValueTransform',
        value: function touchValueTransform(touchValue) {
            return touchValue * 2 / _util2.default.getDpr();
        }
    }, {
        key: 'p2v',
        value: function p2v(p, minv, maxv, w) {
            var percentValue = p / w;
            var returnValue = percentValue * (maxv - minv) + minv;
            return Number(returnValue.toFixed(0));
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var _props = this.props,
                width = _props.width,
                minValue = _props.minValue,
                maxValue = _props.maxValue,
                disabled = _props.disabled;

            return this.p2v(this.state.progress, minValue, maxValue, width - CIRCLE_WIDTH);
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            if (!this.props.disabled) {
                var touch = e.targetTouches[0];
                this.startX = this.touchValueTransform(touch.pageX);
            }
        }
    }, {
        key: 'touchMove',
        value: function touchMove(e) {
            var _this2 = this;

            if (!this.props.disabled) {
                var touch = e.targetTouches[0];
                this.endX = this.touchValueTransform(touch.pageX);
                var moveX = this.endX - this.startX;
                var _props2 = this.props,
                    width = _props2.width,
                    minValue = _props2.minValue,
                    maxValue = _props2.maxValue,
                    onChange = _props2.onChange;

                var endLength = width - CIRCLE_WIDTH;
                var progress = moveX + this.currentProgress;
                if (progress < 0) {
                    progress = 0;
                }
                if (progress > endLength) {
                    progress = endLength;
                }
                this.setState({
                    progress: progress
                }, function () {
                    onChange && onChange(_this2.p2v(_this2.state.progress, minValue, maxValue, endLength));
                });
            }
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(e) {
            if (!this.props.disabled) {
                this.currentProgress = this.state.progress;
                this.startX = this.endX;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var disabledBallColor = this.props.disabled ? '#b4b4b4' : this.props.ballColor;
            var disabledCrossColor = this.props.disabled ? '#b4b4b4' : this.props.crossColor;
            var circleStyle = {
                transform: 'translateX(' + _util2.default.px2rem(this.state.progress) + ')',
                WebkitTransform: 'translateX(' + _util2.default.px2rem(this.state.progress) + ')',
                backgroundColor: disabledBallColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'x-slider-container', style: { width: _util2.default.px2rem(this.props.width) } },
                _react2.default.createElement('div', {
                    className: 'x-slider-bar',
                    style: { width: _util2.default.px2rem(this.props.width - CIRCLE_WIDTH), backgroundColor: this.props.barColor }
                }),
                _react2.default.createElement('div', {
                    onTouchStart: function onTouchStart(e) {
                        return _this3.touchStart(e);
                    },
                    onTouchMove: function onTouchMove(e) {
                        return _this3.touchMove(e);
                    },
                    onTouchEnd: function onTouchEnd(e) {
                        return _this3.touchEnd(e);
                    },
                    className: 'x-slider-circle',
                    style: circleStyle
                }),
                _react2.default.createElement('div', { className: 'x-slider-crossOverView', style: { width: _util2.default.px2rem(this.state.progress), backgroundColor: disabledCrossColor } })
            );
        }
    }]);

    return Slider;
}(_react.Component);

Slider.defaultProps = {
    width: 300,
    progress: MIN_VALUE,
    minValue: MIN_VALUE,
    maxValue: MAX_VALUE,
    barColor: '#d5d3d3',
    ballColor: _util2.default.theme.mainColor,
    crossColor: _util2.default.theme.mainColor,
    disabled: false,
    onChange: function onChange() {}
};
Slider.propTypes = {
    width: _propTypes2.default.number,
    progress: _error2.default.customProgressTypes,
    minValue: _error2.default.customMinValueTypes,
    maxValue: _error2.default.customMaxValueTypes,
    barColor: _propTypes2.default.string,
    ballColor: _propTypes2.default.string,
    crossColor: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
exports.default = Slider;

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _switch = __webpack_require__(136);

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchExample = function (_React$Component) {
    _inherits(SwitchExample, _React$Component);

    function SwitchExample(props) {
        _classCallCheck(this, SwitchExample);

        var _this = _possibleConstructorReturn(this, (SwitchExample.__proto__ || Object.getPrototypeOf(SwitchExample)).call(this, props));

        _this.state = {
            value: false,
            value1: true,
            value2: false
        };
        return _this;
    }

    _createClass(SwitchExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u57FA\u672C'
                ),
                _react2.default.createElement(_switch2.default, { value: this.state.value, onValueChange: function onValueChange(value) {
                        return _this2.setState({ value: value });
                    } }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u7981\u7528'
                ),
                _react2.default.createElement(_switch2.default, { value: this.state.value1, disabled: true, onValueChange: function onValueChange(value1) {
                        return _this2.setState({ value1: value1 });
                    } }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    { className: 'label' },
                    '\u81EA\u5B9A\u4E49\u989C\u8272'
                ),
                _react2.default.createElement(_switch2.default, {
                    tintColor: 'gray',
                    onTintColor: '#f75b25',
                    thumbTintColor: '#68b1ed',
                    tintBorderColor: 'gray',
                    onTintBorderColor: '#f75b25',
                    thumbBorderColor: '#68b1ed',
                    value: this.state.value2,
                    onValueChange: function onValueChange(value2) {
                        return _this2.setState({ value2: value2 });
                    }
                })
            );
        }
    }]);

    return SwitchExample;
}(_react2.default.Component);

exports.default = SwitchExample;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(137);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * value: 开关值（true or false）
 * onValueChange: value发生改变时的回调
 * onTintColor: 开关打开时背景色
 * tintColor: 开关关闭时背景色
 * thumbTintColor: 圆形按钮背景色
 * onTintBorderColor: 开关打开时边框颜色
 * tintBorderColor: 开关关闭时边框颜色
 * thumbBorderColor: 圆形按钮边框颜色
 * disabled：是否禁用
 */
var Switch = function (_Component) {
    _inherits(Switch, _Component);

    function Switch(props) {
        _classCallCheck(this, Switch);

        //40
        var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

        var initValue = _this.props.value ? 45 - window.devicePixelRatio : 0;
        _this.state = {
            translateX: initValue
        };
        return _this;
    }

    _createClass(Switch, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value != this.props.value) {
                var toValue = nextProps.value ? 45 - window.devicePixelRatio : 0;
                this.setState({
                    translateX: toValue
                });
            }
        }
    }, {
        key: 'changeValue',
        value: function changeValue() {
            var _props = this.props,
                onValueChange = _props.onValueChange,
                disabled = _props.disabled,
                value = _props.value;

            onValueChange && !disabled && onValueChange(!value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                onTintColor = _props2.onTintColor,
                tintColor = _props2.tintColor,
                thumbTintColor = _props2.thumbTintColor,
                thumbBorderColor = _props2.thumbBorderColor,
                tintBorderColor = _props2.tintBorderColor,
                onTintBorderColor = _props2.onTintBorderColor;

            var backgroundColor = this.state.translateX === 0 ? tintColor : onTintColor;
            var _tintBorderColor = this.state.translateX === 0 ? tintBorderColor : onTintBorderColor;
            var circleStyle = {
                transform: 'translateX(' + _util2.default.px2rem(this.state.translateX) + ')',
                WebkitTransform: 'translateX(' + _util2.default.px2rem(this.state.translateX) + ')',
                backgroundColor: thumbTintColor,
                borderColor: thumbBorderColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'x-switch-container', onClick: function onClick() {
                        return _this2.changeValue();
                    }, style: { backgroundColor: backgroundColor, borderColor: _tintBorderColor } },
                _react2.default.createElement('div', { className: 'x-switch-circle', style: circleStyle })
            );
        }
    }]);

    return Switch;
}(_react.Component);

Switch.defaultProps = {
    value: false,
    onValueChange: function onValueChange() {},
    onTintColor: '#00b247',
    tintColor: 'white',
    thumbTintColor: 'white',
    onTintBorderColor: '#eeeeee',
    tintBorderColor: '#eeeeee',
    thumbBorderColor: '#eeeeee',
    disabled: false
};
Switch.propTypes = {
    value: _propTypes2.default.bool,
    onValueChange: _propTypes2.default.func,
    onTintColor: _propTypes2.default.string,
    tintColor: _propTypes2.default.string,
    thumbTintColor: _propTypes2.default.string,
    onTintBorderColor: _propTypes2.default.string,
    tintBorderColor: _propTypes2.default.string,
    thumbBorderColor: _propTypes2.default.string,
    disabled: _propTypes2.default.bool
};
exports.default = Switch;

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _tabBar = __webpack_require__(139);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                _react2.default.createElement(
                    'p',
                    { style: { fontSize: '0.5rem' } },
                    '\u8FD9\u662F\u9996\u9875'
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

var Active = function (_React$Component2) {
    _inherits(Active, _React$Component2);

    function Active(props) {
        _classCallCheck(this, Active);

        return _possibleConstructorReturn(this, (Active.__proto__ || Object.getPrototypeOf(Active)).call(this, props));
    }

    _createClass(Active, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                _react2.default.createElement(
                    'p',
                    { style: { fontSize: '0.5rem' } },
                    '\u8FD9\u662F\u5F53\u524D\u6FC0\u6D3B\u9875'
                )
            );
        }
    }]);

    return Active;
}(_react2.default.Component);

var Timer = function (_React$Component3) {
    _inherits(Timer, _React$Component3);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this3 = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this3.state = {
            count: 0,
            timer: null
        };
        return _this3;
    }

    _createClass(Timer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            this.timer = setInterval(function () {
                _this4.setState({
                    count: _this4.state.count + 1
                });
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                _react2.default.createElement(
                    'p',
                    { style: { fontSize: '0.5rem' } },
                    '\u8FD9\u662F\u5B9A\u65F6\u5668\u9875\uFF0C\u5207\u6362\u9875\u9762\u4E0D\u4F1A\u4E2D\u65AD\u8BA1\u65F6'
                ),
                _react2.default.createElement(
                    'p',
                    { style: { fontSize: '0.35rem' } },
                    this.state.count
                )
            );
        }
    }]);

    return Timer;
}(_react2.default.Component);

var Setting = function (_React$Component4) {
    _inherits(Setting, _React$Component4);

    function Setting(props) {
        _classCallCheck(this, Setting);

        return _possibleConstructorReturn(this, (Setting.__proto__ || Object.getPrototypeOf(Setting)).call(this, props));
    }

    _createClass(Setting, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                _react2.default.createElement(
                    'p',
                    { style: { fontSize: '0.5rem' } },
                    '\u8FD9\u662F\u8BBE\u7F6E\u9875'
                )
            );
        }
    }]);

    return Setting;
}(_react2.default.Component);

var TabbarExample = function (_React$Component5) {
    _inherits(TabbarExample, _React$Component5);

    function TabbarExample(props) {
        _classCallCheck(this, TabbarExample);

        var _this6 = _possibleConstructorReturn(this, (TabbarExample.__proto__ || Object.getPrototypeOf(TabbarExample)).call(this, props));

        _this6.state = {
            currentTab: 'active'
        };
        return _this6;
    }

    _createClass(TabbarExample, [{
        key: 'setTabItem',
        value: function setTabItem(name, title, icon) {
            var _this7 = this;

            return _react2.default.createElement(_tabBar2.default.Item, {
                changeTab: function changeTab(tab) {
                    return _this7.setState({ currentTab: tab });
                },
                title: title,
                name: name,
                key: name,
                icon: _react2.default.createElement(_icon2.default, { name: icon, size: 25, color: '#666666' }),
                selectedIcon: _react2.default.createElement(_icon2.default, { name: icon, size: 25, color: '#108ee9' })
            });
        }
    }, {
        key: 'setTabComponent',
        value: function setTabComponent(name, component) {
            return _react2.default.createElement(
                _tabBar2.default.Component,
                { name: name },
                component
            );
        }
    }, {
        key: 'renderTabItem',
        value: function renderTabItem() {
            var tabItems = [];
            tabItems.push(this.setTabItem('home', '首页', 'ios-home'));
            tabItems.push(this.setTabItem('active', '激活', 'ios-bulb'));
            tabItems.push(this.setTabItem('timer', '定时器', 'ios-clock'));
            tabItems.push(this.setTabItem('settings', '设置', 'ios-settings'));
            return tabItems;
        }
    }, {
        key: 'renderTabComponents',
        value: function renderTabComponents() {
            var tabComponents = [];
            tabComponents.push(this.setTabComponent('home', _react2.default.createElement(Home, null)));
            tabComponents.push(this.setTabComponent('active', _react2.default.createElement(Active, null)));
            tabComponents.push(this.setTabComponent('timer', _react2.default.createElement(Timer, null)));
            tabComponents.push(this.setTabComponent('settings', _react2.default.createElement(Setting, null)));
            return tabComponents;
        }
    }, {
        key: 'render',
        value: function render() {
            /*默认x-tabbar-container的height是100vh*/
            /* 新增一个containerStyle属性，作用于tabbar组件的最顶部div，用于设置整体高度*/
            return _react2.default.createElement(
                'div',
                { className: 'container', style: { padding: 0 } },
                _react2.default.createElement(_tabBar2.default, {
                    containerStyle: { height: '100%' },
                    selectedTab: this.state.currentTab,
                    items: this.renderTabItem(),
                    components: this.renderTabComponents()
                })
            );
        }
    }]);

    return TabbarExample;
}(_react2.default.Component);

exports.default = TabbarExample;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(140);

var _tabBarItem = __webpack_require__(141);

var _tabBarItem2 = _interopRequireDefault(_tabBarItem);

var _tabBarComponent = __webpack_require__(142);

var _tabBarComponent2 = _interopRequireDefault(_tabBarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * tabBarStyle: 自定义tabBar容器样式
 * tabBarShadowStyle: 自定义tabBar最上方的分割线的样式
 * items: tabbarItems
 * components: tabbarComponents
 * selectedTab: name
 */

var TabBar = function (_Component) {
    _inherits(TabBar, _Component);

    function TabBar(props) {
        _classCallCheck(this, TabBar);

        var _this = _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call(this, props));

        _this.sceneKeys = [];
        _this.sceneList = [];
        return _this;
    }

    _createClass(TabBar, [{
        key: 'renderScenes',
        value: function renderScenes() {
            var _this2 = this;

            this.props.components.map(function (item, index) {
                if (item.props.name === _this2.props.selectedTab) {
                    //已选中，且已经加载过了
                    if (_this2.sceneKeys.indexOf(item.props.name) >= 0) {
                        _this2.sceneList[index] = _react2.default.cloneElement(_this2.sceneList[index], {
                            key: index,
                            externalClass: 'x-tabbar-component x-tabbar-component-active'
                        });
                    } else {
                        _this2.sceneKeys.push(item.props.name);
                        _this2.sceneList[index] = _react2.default.cloneElement(item, {
                            key: index,
                            externalClass: 'x-tabbar-component x-tabbar-component-active'
                        });
                    }
                } else {
                    //未选中，但加载了
                    if (_this2.sceneKeys.indexOf(item.props.name) >= 0) {
                        _this2.sceneList[index] = _react2.default.cloneElement(_this2.sceneList[index], {
                            key: index,
                            externalClass: 'x-tabbar-component'
                        });
                    }
                }
            });
            //当默认激活项不是第一个时，index0位置为empty（[empty, Comonent1]），导致reactdom无法正确渲染
            //过滤掉空项
            return this.sceneList.filter(function (item) {
                return item;
            });
        }
    }, {
        key: 'renderTabs',
        value: function renderTabs() {
            var _this3 = this;

            return this.props.items.map(function (item) {
                return _react2.default.cloneElement(item, {
                    selected: _this3.props.selectedTab === item.props.name
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'x-tabbar-container', style: this.props.containerStyle },
                this.renderScenes(),
                _react2.default.createElement(
                    'div',
                    { className: 'x-tabbar-panel-ctn' },
                    _react2.default.createElement('hr', { style: this.props.tabBarShadowStyle }),
                    _react2.default.createElement(
                        'div',
                        { className: 'x-tabbar-panel', style: this.props.tabBarStyle },
                        this.renderTabs()
                    )
                )
            );
        }
    }]);

    return TabBar;
}(_react.Component);

TabBar.defaultProps = {
    tabBarStyle: {},
    tabBarShadowStyle: {},
    containerStyle: {},
    items: [],
    components: [],
    selectedTab: ''
};
TabBar.propTypes = {
    tabBarStyle: _propTypes2.default.object,
    tabBarShadowStyle: _propTypes2.default.object,
    containerStyle: _propTypes2.default.object,
    items: _propTypes2.default.array,
    components: _propTypes2.default.array,
    selectedTab: _propTypes2.default.string
};


TabBar.Item = _tabBarItem2.default;
TabBar.Component = _tabBarComponent2.default;

exports.default = TabBar;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * selectedTitleStyle: 自定义选中时的文本样式
 * title: 标题
 * titleStyle: 自定义默认（未选中）时的文本样式
 * name: 指定一个key
 * tabStyle: 自定义每个tabBar.Item的容器样式
 * icon: 未选中时的图标
 * selectedIcon: 选中时的图标
 * changeTab: 切换时触发，返回选中状态的item的name（key）
 */

var TabBarItem = function (_Component) {
    _inherits(TabBarItem, _Component);

    //selected from TabBar
    function TabBarItem(props) {
        _classCallCheck(this, TabBarItem);

        return _possibleConstructorReturn(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).call(this, props));
    }

    _createClass(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                selected = _props.selected,
                selectedTitleStyle = _props.selectedTitleStyle,
                titleStyle = _props.titleStyle,
                tabStyle = _props.tabStyle,
                name = _props.name,
                selectedIcon = _props.selectedIcon,
                icon = _props.icon,
                title = _props.title,
                changeTab = _props.changeTab;

            var textStyle = selected ? selectedTitleStyle : titleStyle;
            return _react2.default.createElement(
                'a',
                {
                    className: 'x-tabbar-item' + (selected ? ' x-tabbar-item-active' : ''),
                    href: 'javascript:;',
                    style: Object.assign({}, textStyle, tabStyle),
                    onClick: function onClick() {
                        return changeTab(name);
                    }
                },
                selected ? selectedIcon : icon,
                _react2.default.createElement(
                    'span',
                    null,
                    title
                )
            );
        }
    }]);

    return TabBarItem;
}(_react.Component);

TabBarItem.defaultProps = {
    //selected: false,
    selectedTitleStyle: {},
    title: '',
    titleStyle: {},
    name: '',
    tabStyle: {},
    icon: null,
    selectedIcon: null,
    changeTab: function changeTab() {}
};
TabBarItem.propTypes = {
    //selected: PropTypes.bool,
    selectedTitleStyle: _propTypes2.default.object,
    title: _propTypes2.default.string,
    titleStyle: _propTypes2.default.object,
    name: _propTypes2.default.string,
    tabStyle: _propTypes2.default.object,
    icon: _propTypes2.default.element,
    selectedIcon: _propTypes2.default.element,
    changeTab: _propTypes2.default.func
};
exports.default = TabBarItem;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var externalClass = _ref.externalClass,
        children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: externalClass },
        children
    );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _toast = __webpack_require__(26);

var _toast2 = _interopRequireDefault(_toast);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastExample = function (_React$Component) {
    _inherits(ToastExample, _React$Component);

    function ToastExample(props) {
        _classCallCheck(this, ToastExample);

        return _possibleConstructorReturn(this, (ToastExample.__proto__ || Object.getPrototypeOf(ToastExample)).call(this, props));
    }

    _createClass(ToastExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return _this2.toast.show({
                                content: '基本'
                            });
                        } },
                    '\u57FA\u672C'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            return _this2.toast.show({
                                content: '取消遮罩层',
                                mask: false
                            });
                        } },
                    '\u53D6\u6D88\u906E\u7F69\u5C42'
                ),
                _react2.default.createElement(_toast2.default, { ref: function ref(toast) {
                        return _this2.toast = toast;
                    } }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { onPress: function onPress() {
                            window.toastConfig = {
                                content: '全局提示',
                                mask: false
                            };
                            window.dispatchEvent(new Event('showToast'));
                        } },
                    '\u5168\u5C40\u63D0\u793A'
                )
            );
        }
    }]);

    return ToastExample;
}(_react2.default.Component);

exports.default = ToastExample;

/***/ })
],[47]);
//# sourceMappingURL=home.js.map