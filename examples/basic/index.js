(function () {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }

	  return Object(val);
	}

	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    } // Detect buggy property enumeration order in older V8 versions.
	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

	    test1[5] = 'de';

	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test2 = {};

	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }

	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });

	    if (order2.join('') !== '0123456789') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });

	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }

	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;

	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }

	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);

	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }

	  return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
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

	var validateFormat = function validateFormat(format) {};

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;

	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame

	    throw error;
	  }
	}

	var invariant_1 = invariant;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	var emptyObject = {};

	var emptyObject_1 = emptyObject;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */


	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);

	emptyFunction.thatReturnsThis = function () {
	  return this;
	};

	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	var r = "function" === typeof Symbol && Symbol.for,
	    t = r ? Symbol.for("react.element") : 60103,
	    u = r ? Symbol.for("react.portal") : 60106,
	    v = r ? Symbol.for("react.fragment") : 60107,
	    w = r ? Symbol.for("react.strict_mode") : 60108,
	    x = r ? Symbol.for("react.profiler") : 60114,
	    y = r ? Symbol.for("react.provider") : 60109,
	    z = r ? Symbol.for("react.context") : 60110,
	    A = r ? Symbol.for("react.async_mode") : 60111,
	    B = r ? Symbol.for("react.forward_ref") : 60112;
	var C = "function" === typeof Symbol && Symbol.iterator;

	function D(a) {
	  for (var b = arguments.length - 1, e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) e += "&args[]=" + encodeURIComponent(arguments[c + 1]);

	  invariant_1(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
	}

	var E = {
	  isMounted: function () {
	    return !1;
	  },
	  enqueueForceUpdate: function () {},
	  enqueueReplaceState: function () {},
	  enqueueSetState: function () {}
	};

	function F(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = emptyObject_1;
	  this.updater = e || E;
	}

	F.prototype.isReactComponent = {};

	F.prototype.setState = function (a, b) {
	  "object" !== typeof a && "function" !== typeof a && null != a ? D("85") : void 0;
	  this.updater.enqueueSetState(this, a, b, "setState");
	};

	F.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};

	function G() {}

	G.prototype = F.prototype;

	function H(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = emptyObject_1;
	  this.updater = e || E;
	}

	var I = H.prototype = new G();
	I.constructor = H;
	objectAssign(I, F.prototype);
	I.isPureReactComponent = !0;
	var J = {
	  current: null
	},
	    K = Object.prototype.hasOwnProperty,
	    L = {
	  key: !0,
	  ref: !0,
	  __self: !0,
	  __source: !0
	};

	function M(a, b, e) {
	  var c = void 0,
	      d = {},
	      g = null,
	      h = null;
	  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, c) && !L.hasOwnProperty(c) && (d[c] = b[c]);
	  var f = arguments.length - 2;
	  if (1 === f) d.children = e;else if (1 < f) {
	    for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

	    d.children = l;
	  }
	  if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === d[c] && (d[c] = f[c]);
	  return {
	    $$typeof: t,
	    type: a,
	    key: g,
	    ref: h,
	    props: d,
	    _owner: J.current
	  };
	}

	function N(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === t;
	}

	function escape(a) {
	  var b = {
	    "=": "=0",
	    ":": "=2"
	  };
	  return "$" + ("" + a).replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}

	var O = /\/+/g,
	    P = [];

	function Q(a, b, e, c) {
	  if (P.length) {
	    var d = P.pop();
	    d.result = a;
	    d.keyPrefix = b;
	    d.func = e;
	    d.context = c;
	    d.count = 0;
	    return d;
	  }

	  return {
	    result: a,
	    keyPrefix: b,
	    func: e,
	    context: c,
	    count: 0
	  };
	}

	function R(a) {
	  a.result = null;
	  a.keyPrefix = null;
	  a.func = null;
	  a.context = null;
	  a.count = 0;
	  10 > P.length && P.push(a);
	}

	function S(a, b, e, c) {
	  var d = typeof a;
	  if ("undefined" === d || "boolean" === d) a = null;
	  var g = !1;
	  if (null === a) g = !0;else switch (d) {
	    case "string":
	    case "number":
	      g = !0;
	      break;

	    case "object":
	      switch (a.$$typeof) {
	        case t:
	        case u:
	          g = !0;
	      }

	  }
	  if (g) return e(c, a, "" === b ? "." + T(a, 0) : b), 1;
	  g = 0;
	  b = "" === b ? "." : b + ":";
	  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
	    d = a[h];
	    var f = b + T(d, h);
	    g += S(d, f, e, c);
	  } else if (null === a || "undefined" === typeof a ? f = null : (f = C && a[C] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) d = d.value, f = b + T(d, h++), g += S(d, f, e, c);else "object" === d && (e = "" + a, D("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));
	  return g;
	}

	function T(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
	}

	function U(a, b) {
	  a.func.call(a.context, b, a.count++);
	}

	function V(a, b, e) {
	  var c = a.result,
	      d = a.keyPrefix;
	  a = a.func.call(a.context, b, a.count++);
	  Array.isArray(a) ? W(a, c, e, emptyFunction_1.thatReturnsArgument) : null != a && (N(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + e, a = {
	    $$typeof: t,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  }), c.push(a));
	}

	function W(a, b, e, c, d) {
	  var g = "";
	  null != e && (g = ("" + e).replace(O, "$&/") + "/");
	  b = Q(b, g, c, d);
	  null == a || S(a, "", V, b);
	  R(b);
	}

	var X = {
	  Children: {
	    map: function (a, b, e) {
	      if (null == a) return a;
	      var c = [];
	      W(a, c, null, b, e);
	      return c;
	    },
	    forEach: function (a, b, e) {
	      if (null == a) return a;
	      b = Q(null, null, b, e);
	      null == a || S(a, "", U, b);
	      R(b);
	    },
	    count: function (a) {
	      return null == a ? 0 : S(a, "", emptyFunction_1.thatReturnsNull, null);
	    },
	    toArray: function (a) {
	      var b = [];
	      W(a, b, null, emptyFunction_1.thatReturnsArgument);
	      return b;
	    },
	    only: function (a) {
	      N(a) ? void 0 : D("143");
	      return a;
	    }
	  },
	  createRef: function () {
	    return {
	      current: null
	    };
	  },
	  Component: F,
	  PureComponent: H,
	  createContext: function (a, b) {
	    void 0 === b && (b = null);
	    a = {
	      $$typeof: z,
	      _calculateChangedBits: b,
	      _defaultValue: a,
	      _currentValue: a,
	      _currentValue2: a,
	      _changedBits: 0,
	      _changedBits2: 0,
	      Provider: null,
	      Consumer: null
	    };
	    a.Provider = {
	      $$typeof: y,
	      _context: a
	    };
	    return a.Consumer = a;
	  },
	  forwardRef: function (a) {
	    return {
	      $$typeof: B,
	      render: a
	    };
	  },
	  Fragment: v,
	  StrictMode: w,
	  unstable_AsyncMode: A,
	  unstable_Profiler: x,
	  createElement: M,
	  cloneElement: function (a, b, e) {
	    null === a || void 0 === a ? D("267", a) : void 0;
	    var c = void 0,
	        d = objectAssign({}, a.props),
	        g = a.key,
	        h = a.ref,
	        f = a._owner;

	    if (null != b) {
	      void 0 !== b.ref && (h = b.ref, f = J.current);
	      void 0 !== b.key && (g = "" + b.key);
	      var l = void 0;
	      a.type && a.type.defaultProps && (l = a.type.defaultProps);

	      for (c in b) K.call(b, c) && !L.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
	    }

	    c = arguments.length - 2;
	    if (1 === c) d.children = e;else if (1 < c) {
	      l = Array(c);

	      for (var m = 0; m < c; m++) l[m] = arguments[m + 2];

	      d.children = l;
	    }
	    return {
	      $$typeof: t,
	      type: a.type,
	      key: g,
	      ref: h,
	      props: d,
	      _owner: f
	    };
	  },
	  createFactory: function (a) {
	    var b = M.bind(null, a);
	    b.type = a;
	    return b;
	  },
	  isValidElement: N,
	  version: "16.4.0",
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    ReactCurrentOwner: J,
	    assign: objectAssign
	  }
	},
	    Y = {
	  default: X
	},
	    Z = Y && X || Y;
	var react_production_min = Z.default ? Z.default : Z;

	var react = createCommonjsModule(function (module) {

	{
	  module.exports = react_production_min;
	}
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */

	var ExecutionEnvironment = {
	  canUseDOM: canUseDOM,
	  canUseWorkers: typeof Worker !== 'undefined',
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	  canUseViewport: canUseDOM && !!window.screen,
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};
	var ExecutionEnvironment_1 = ExecutionEnvironment;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */

	function getActiveElement(doc)
	/*?DOMElement*/
	{
	  doc = doc || (typeof document !== 'undefined' ? document : undefined);

	  if (typeof doc === 'undefined') {
	    return null;
	  }

	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}

	var getActiveElement_1 = getActiveElement;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */

	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */

	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */


	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  } // Test for A's keys different from B.


	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty$1.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	var shallowEqual_1 = shallowEqual;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */

	function isNode(object) {
	  var doc = object ? object.ownerDocument || object : document;
	  var defaultView = doc.defaultView || window;
	  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	var isNode_1 = isNode;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */


	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */


	function isTextNode(object) {
	  return isNode_1(object) && object.nodeType == 3;
	}

	var isTextNode_1 = isTextNode;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */


	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */


	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode_1(outerNode)) {
	    return false;
	  } else if (isTextNode_1(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	var containsNode_1 = containsNode;

	function A$1(a) {
	  for (var b = arguments.length - 1, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 0; d < b; d++) c += "&args[]=" + encodeURIComponent(arguments[d + 1]);

	  invariant_1(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", c);
	}

	react ? void 0 : A$1("227");

	function ia(a, b, c, d, e, f, g, h, k) {
	  this._hasCaughtError = !1;
	  this._caughtError = null;
	  var n = Array.prototype.slice.call(arguments, 3);

	  try {
	    b.apply(c, n);
	  } catch (r) {
	    this._caughtError = r, this._hasCaughtError = !0;
	  }
	}

	var B$1 = {
	  _caughtError: null,
	  _hasCaughtError: !1,
	  _rethrowError: null,
	  _hasRethrowError: !1,
	  invokeGuardedCallback: function (a, b, c, d, e, f, g, h, k) {
	    ia.apply(B$1, arguments);
	  },
	  invokeGuardedCallbackAndCatchFirstError: function (a, b, c, d, e, f, g, h, k) {
	    B$1.invokeGuardedCallback.apply(this, arguments);

	    if (B$1.hasCaughtError()) {
	      var n = B$1.clearCaughtError();
	      B$1._hasRethrowError || (B$1._hasRethrowError = !0, B$1._rethrowError = n);
	    }
	  },
	  rethrowCaughtError: function () {
	    return ka.apply(B$1, arguments);
	  },
	  hasCaughtError: function () {
	    return B$1._hasCaughtError;
	  },
	  clearCaughtError: function () {
	    if (B$1._hasCaughtError) {
	      var a = B$1._caughtError;
	      B$1._caughtError = null;
	      B$1._hasCaughtError = !1;
	      return a;
	    }

	    A$1("198");
	  }
	};

	function ka() {
	  if (B$1._hasRethrowError) {
	    var a = B$1._rethrowError;
	    B$1._rethrowError = null;
	    B$1._hasRethrowError = !1;
	    throw a;
	  }
	}

	var la = null,
	    ma = {};

	function na() {
	  if (la) for (var a in ma) {
	    var b = ma[a],
	        c = la.indexOf(a);
	    -1 < c ? void 0 : A$1("96", a);

	    if (!oa[c]) {
	      b.extractEvents ? void 0 : A$1("97", a);
	      oa[c] = b;
	      c = b.eventTypes;

	      for (var d in c) {
	        var e = void 0;
	        var f = c[d],
	            g = b,
	            h = d;
	        pa.hasOwnProperty(h) ? A$1("99", h) : void 0;
	        pa[h] = f;
	        var k = f.phasedRegistrationNames;

	        if (k) {
	          for (e in k) k.hasOwnProperty(e) && qa(k[e], g, h);

	          e = !0;
	        } else f.registrationName ? (qa(f.registrationName, g, h), e = !0) : e = !1;

	        e ? void 0 : A$1("98", d, a);
	      }
	    }
	  }
	}

	function qa(a, b, c) {
	  ra[a] ? A$1("100", a) : void 0;
	  ra[a] = b;
	  sa[a] = b.eventTypes[c].dependencies;
	}

	var oa = [],
	    pa = {},
	    ra = {},
	    sa = {};

	function ta(a) {
	  la ? A$1("101") : void 0;
	  la = Array.prototype.slice.call(a);
	  na();
	}

	function ua(a) {
	  var b = !1,
	      c;

	  for (c in a) if (a.hasOwnProperty(c)) {
	    var d = a[c];
	    ma.hasOwnProperty(c) && ma[c] === d || (ma[c] ? A$1("102", c) : void 0, ma[c] = d, b = !0);
	  }

	  b && na();
	}

	var va = {
	  plugins: oa,
	  eventNameDispatchConfigs: pa,
	  registrationNameModules: ra,
	  registrationNameDependencies: sa,
	  possibleRegistrationNames: null,
	  injectEventPluginOrder: ta,
	  injectEventPluginsByName: ua
	},
	    wa = null,
	    xa = null,
	    ya = null;

	function za(a, b, c, d) {
	  b = a.type || "unknown-event";
	  a.currentTarget = ya(d);
	  B$1.invokeGuardedCallbackAndCatchFirstError(b, c, void 0, a);
	  a.currentTarget = null;
	}

	function Aa(a, b) {
	  null == b ? A$1("30") : void 0;
	  if (null == a) return b;

	  if (Array.isArray(a)) {
	    if (Array.isArray(b)) return a.push.apply(a, b), a;
	    a.push(b);
	    return a;
	  }

	  return Array.isArray(b) ? [a].concat(b) : [a, b];
	}

	function Ba(a, b, c) {
	  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
	}

	var Ca = null;

	function Da(a, b) {
	  if (a) {
	    var c = a._dispatchListeners,
	        d = a._dispatchInstances;
	    if (Array.isArray(c)) for (var e = 0; e < c.length && !a.isPropagationStopped(); e++) za(a, b, c[e], d[e]);else c && za(a, b, c, d);
	    a._dispatchListeners = null;
	    a._dispatchInstances = null;
	    a.isPersistent() || a.constructor.release(a);
	  }
	}

	function Ea(a) {
	  return Da(a, !0);
	}

	function Fa(a) {
	  return Da(a, !1);
	}

	var Ga = {
	  injectEventPluginOrder: ta,
	  injectEventPluginsByName: ua
	};

	function Ha(a, b) {
	  var c = a.stateNode;
	  if (!c) return null;
	  var d = wa(c);
	  if (!d) return null;
	  c = d[b];

	  a: switch (b) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	      a = !d;
	      break a;

	    default:
	      a = !1;
	  }

	  if (a) return null;
	  c && "function" !== typeof c ? A$1("231", b, typeof c) : void 0;
	  return c;
	}

	function Ia(a, b) {
	  null !== a && (Ca = Aa(Ca, a));
	  a = Ca;
	  Ca = null;
	  a && (b ? Ba(a, Ea) : Ba(a, Fa), Ca ? A$1("95") : void 0, B$1.rethrowCaughtError());
	}

	function Ja(a, b, c, d) {
	  for (var e = null, f = 0; f < oa.length; f++) {
	    var g = oa[f];
	    g && (g = g.extractEvents(a, b, c, d)) && (e = Aa(e, g));
	  }

	  Ia(e, !1);
	}

	var Ka = {
	  injection: Ga,
	  getListener: Ha,
	  runEventsInBatch: Ia,
	  runExtractedEventsInBatch: Ja
	},
	    La = Math.random().toString(36).slice(2),
	    C$1 = "__reactInternalInstance$" + La,
	    Ma = "__reactEventHandlers$" + La;

	function Na(a) {
	  if (a[C$1]) return a[C$1];

	  for (; !a[C$1];) if (a.parentNode) a = a.parentNode;else return null;

	  a = a[C$1];
	  return 5 === a.tag || 6 === a.tag ? a : null;
	}

	function Oa(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  A$1("33");
	}

	function Pa(a) {
	  return a[Ma] || null;
	}

	var Qa = {
	  precacheFiberNode: function (a, b) {
	    b[C$1] = a;
	  },
	  getClosestInstanceFromNode: Na,
	  getInstanceFromNode: function (a) {
	    a = a[C$1];
	    return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
	  },
	  getNodeFromInstance: Oa,
	  getFiberCurrentPropsFromNode: Pa,
	  updateFiberProps: function (a, b) {
	    a[Ma] = b;
	  }
	};

	function F$1(a) {
	  do a = a.return; while (a && 5 !== a.tag);

	  return a ? a : null;
	}

	function Ra(a, b, c) {
	  for (var d = []; a;) d.push(a), a = F$1(a);

	  for (a = d.length; 0 < a--;) b(d[a], "captured", c);

	  for (a = 0; a < d.length; a++) b(d[a], "bubbled", c);
	}

	function Sa(a, b, c) {
	  if (b = Ha(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = Aa(c._dispatchListeners, b), c._dispatchInstances = Aa(c._dispatchInstances, a);
	}

	function Ta(a) {
	  a && a.dispatchConfig.phasedRegistrationNames && Ra(a._targetInst, Sa, a);
	}

	function Ua(a) {
	  if (a && a.dispatchConfig.phasedRegistrationNames) {
	    var b = a._targetInst;
	    b = b ? F$1(b) : null;
	    Ra(b, Sa, a);
	  }
	}

	function Va(a, b, c) {
	  a && c && c.dispatchConfig.registrationName && (b = Ha(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = Aa(c._dispatchListeners, b), c._dispatchInstances = Aa(c._dispatchInstances, a));
	}

	function Xa(a) {
	  a && a.dispatchConfig.registrationName && Va(a._targetInst, null, a);
	}

	function Ya(a) {
	  Ba(a, Ta);
	}

	function Za(a, b, c, d) {
	  if (c && d) a: {
	    var e = c;

	    for (var f = d, g = 0, h = e; h; h = F$1(h)) g++;

	    h = 0;

	    for (var k = f; k; k = F$1(k)) h++;

	    for (; 0 < g - h;) e = F$1(e), g--;

	    for (; 0 < h - g;) f = F$1(f), h--;

	    for (; g--;) {
	      if (e === f || e === f.alternate) break a;
	      e = F$1(e);
	      f = F$1(f);
	    }

	    e = null;
	  } else e = null;
	  f = e;

	  for (e = []; c && c !== f;) {
	    g = c.alternate;
	    if (null !== g && g === f) break;
	    e.push(c);
	    c = F$1(c);
	  }

	  for (c = []; d && d !== f;) {
	    g = d.alternate;
	    if (null !== g && g === f) break;
	    c.push(d);
	    d = F$1(d);
	  }

	  for (d = 0; d < e.length; d++) Va(e[d], "bubbled", a);

	  for (a = c.length; 0 < a--;) Va(c[a], "captured", b);
	}

	var $a = {
	  accumulateTwoPhaseDispatches: Ya,
	  accumulateTwoPhaseDispatchesSkipTarget: function (a) {
	    Ba(a, Ua);
	  },
	  accumulateEnterLeaveDispatches: Za,
	  accumulateDirectDispatches: function (a) {
	    Ba(a, Xa);
	  }
	};

	function ab(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  c["ms" + a] = "MS" + b;
	  c["O" + a] = "o" + b.toLowerCase();
	  return c;
	}

	var bb = {
	  animationend: ab("Animation", "AnimationEnd"),
	  animationiteration: ab("Animation", "AnimationIteration"),
	  animationstart: ab("Animation", "AnimationStart"),
	  transitionend: ab("Transition", "TransitionEnd")
	},
	    cb = {},
	    db = {};
	ExecutionEnvironment_1.canUseDOM && (db = document.createElement("div").style, "AnimationEvent" in window || (delete bb.animationend.animation, delete bb.animationiteration.animation, delete bb.animationstart.animation), "TransitionEvent" in window || delete bb.transitionend.transition);

	function eb(a) {
	  if (cb[a]) return cb[a];
	  if (!bb[a]) return a;
	  var b = bb[a],
	      c;

	  for (c in b) if (b.hasOwnProperty(c) && c in db) return cb[a] = b[c];

	  return a;
	}

	var fb = eb("animationend"),
	    gb = eb("animationiteration"),
	    hb = eb("animationstart"),
	    ib = eb("transitionend"),
	    jb = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	    kb = null;

	function lb() {
	  !kb && ExecutionEnvironment_1.canUseDOM && (kb = "textContent" in document.documentElement ? "textContent" : "innerText");
	  return kb;
	}

	var G$1 = {
	  _root: null,
	  _startText: null,
	  _fallbackText: null
	};

	function mb() {
	  if (G$1._fallbackText) return G$1._fallbackText;
	  var a,
	      b = G$1._startText,
	      c = b.length,
	      d,
	      e = nb(),
	      f = e.length;

	  for (a = 0; a < c && b[a] === e[a]; a++);

	  var g = c - a;

	  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);

	  G$1._fallbackText = e.slice(a, 1 < d ? 1 - d : void 0);
	  return G$1._fallbackText;
	}

	function nb() {
	  return "value" in G$1._root ? G$1._root.value : G$1._root[lb()];
	}

	var ob = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
	    pb = {
	  type: null,
	  target: null,
	  currentTarget: emptyFunction_1.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function (a) {
	    return a.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	function H$1(a, b, c, d) {
	  this.dispatchConfig = a;
	  this._targetInst = b;
	  this.nativeEvent = c;
	  a = this.constructor.Interface;

	  for (var e in a) a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);

	  this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? emptyFunction_1.thatReturnsTrue : emptyFunction_1.thatReturnsFalse;
	  this.isPropagationStopped = emptyFunction_1.thatReturnsFalse;
	  return this;
	}

	objectAssign(H$1.prototype, {
	  preventDefault: function () {
	    this.defaultPrevented = !0;
	    var a = this.nativeEvent;
	    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = emptyFunction_1.thatReturnsTrue);
	  },
	  stopPropagation: function () {
	    var a = this.nativeEvent;
	    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = emptyFunction_1.thatReturnsTrue);
	  },
	  persist: function () {
	    this.isPersistent = emptyFunction_1.thatReturnsTrue;
	  },
	  isPersistent: emptyFunction_1.thatReturnsFalse,
	  destructor: function () {
	    var a = this.constructor.Interface,
	        b;

	    for (b in a) this[b] = null;

	    for (a = 0; a < ob.length; a++) this[ob[a]] = null;
	  }
	});
	H$1.Interface = pb;

	H$1.extend = function (a) {
	  function b() {}

	  function c() {
	    return d.apply(this, arguments);
	  }

	  var d = this;
	  b.prototype = d.prototype;
	  var e = new b();
	  objectAssign(e, c.prototype);
	  c.prototype = e;
	  c.prototype.constructor = c;
	  c.Interface = objectAssign({}, d.Interface, a);
	  c.extend = d.extend;
	  qb(c);
	  return c;
	};

	qb(H$1);

	function rb(a, b, c, d) {
	  if (this.eventPool.length) {
	    var e = this.eventPool.pop();
	    this.call(e, a, b, c, d);
	    return e;
	  }

	  return new this(a, b, c, d);
	}

	function sb(a) {
	  a instanceof this ? void 0 : A$1("223");
	  a.destructor();
	  10 > this.eventPool.length && this.eventPool.push(a);
	}

	function qb(a) {
	  a.eventPool = [];
	  a.getPooled = rb;
	  a.release = sb;
	}

	var tb = H$1.extend({
	  data: null
	}),
	    ub = H$1.extend({
	  data: null
	}),
	    vb = [9, 13, 27, 32],
	    wb = ExecutionEnvironment_1.canUseDOM && "CompositionEvent" in window,
	    xb = null;
	ExecutionEnvironment_1.canUseDOM && "documentMode" in document && (xb = document.documentMode);
	var yb = ExecutionEnvironment_1.canUseDOM && "TextEvent" in window && !xb,
	    zb = ExecutionEnvironment_1.canUseDOM && (!wb || xb && 8 < xb && 11 >= xb),
	    Ab = String.fromCharCode(32),
	    Bb = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: "onBeforeInput",
	      captured: "onBeforeInputCapture"
	    },
	    dependencies: ["compositionend", "keypress", "textInput", "paste"]
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: "onCompositionEnd",
	      captured: "onCompositionEndCapture"
	    },
	    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: "onCompositionStart",
	      captured: "onCompositionStartCapture"
	    },
	    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: "onCompositionUpdate",
	      captured: "onCompositionUpdateCapture"
	    },
	    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
	  }
	},
	    Cb = !1;

	function Db(a, b) {
	  switch (a) {
	    case "keyup":
	      return -1 !== vb.indexOf(b.keyCode);

	    case "keydown":
	      return 229 !== b.keyCode;

	    case "keypress":
	    case "mousedown":
	    case "blur":
	      return !0;

	    default:
	      return !1;
	  }
	}

	function Eb(a) {
	  a = a.detail;
	  return "object" === typeof a && "data" in a ? a.data : null;
	}

	var Fb = !1;

	function Gb(a, b) {
	  switch (a) {
	    case "compositionend":
	      return Eb(b);

	    case "keypress":
	      if (32 !== b.which) return null;
	      Cb = !0;
	      return Ab;

	    case "textInput":
	      return a = b.data, a === Ab && Cb ? null : a;

	    default:
	      return null;
	  }
	}

	function Hb(a, b) {
	  if (Fb) return "compositionend" === a || !wb && Db(a, b) ? (a = mb(), G$1._root = null, G$1._startText = null, G$1._fallbackText = null, Fb = !1, a) : null;

	  switch (a) {
	    case "paste":
	      return null;

	    case "keypress":
	      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	        if (b.char && 1 < b.char.length) return b.char;
	        if (b.which) return String.fromCharCode(b.which);
	      }

	      return null;

	    case "compositionend":
	      return zb ? null : b.data;

	    default:
	      return null;
	  }
	}

	var Ib = {
	  eventTypes: Bb,
	  extractEvents: function (a, b, c, d) {
	    var e = void 0;
	    var f = void 0;
	    if (wb) b: {
	      switch (a) {
	        case "compositionstart":
	          e = Bb.compositionStart;
	          break b;

	        case "compositionend":
	          e = Bb.compositionEnd;
	          break b;

	        case "compositionupdate":
	          e = Bb.compositionUpdate;
	          break b;
	      }

	      e = void 0;
	    } else Fb ? Db(a, c) && (e = Bb.compositionEnd) : "keydown" === a && 229 === c.keyCode && (e = Bb.compositionStart);
	    e ? (zb && (Fb || e !== Bb.compositionStart ? e === Bb.compositionEnd && Fb && (f = mb()) : (G$1._root = d, G$1._startText = nb(), Fb = !0)), e = tb.getPooled(e, b, c, d), f ? e.data = f : (f = Eb(c), null !== f && (e.data = f)), Ya(e), f = e) : f = null;
	    (a = yb ? Gb(a, c) : Hb(a, c)) ? (b = ub.getPooled(Bb.beforeInput, b, c, d), b.data = a, Ya(b)) : b = null;
	    return null === f ? b : null === b ? f : [f, b];
	  }
	},
	    Jb = null,
	    Kb = {
	  injectFiberControlledHostComponent: function (a) {
	    Jb = a;
	  }
	},
	    Lb = null,
	    Mb = null;

	function Nb(a) {
	  if (a = xa(a)) {
	    Jb && "function" === typeof Jb.restoreControlledState ? void 0 : A$1("194");
	    var b = wa(a.stateNode);
	    Jb.restoreControlledState(a.stateNode, a.type, b);
	  }
	}

	function Ob(a) {
	  Lb ? Mb ? Mb.push(a) : Mb = [a] : Lb = a;
	}

	function Pb() {
	  return null !== Lb || null !== Mb;
	}

	function Qb() {
	  if (Lb) {
	    var a = Lb,
	        b = Mb;
	    Mb = Lb = null;
	    Nb(a);
	    if (b) for (a = 0; a < b.length; a++) Nb(b[a]);
	  }
	}

	var Rb = {
	  injection: Kb,
	  enqueueStateRestore: Ob,
	  needsStateRestore: Pb,
	  restoreStateIfNeeded: Qb
	};

	function Sb(a, b) {
	  return a(b);
	}

	function Tb(a, b, c) {
	  return a(b, c);
	}

	function Ub() {}

	var Vb = !1;

	function Wb(a, b) {
	  if (Vb) return a(b);
	  Vb = !0;

	  try {
	    return Sb(a, b);
	  } finally {
	    Vb = !1, Pb() && (Ub(), Qb());
	  }
	}

	var Xb = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};

	function Yb(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return "input" === b ? !!Xb[a.type] : "textarea" === b ? !0 : !1;
	}

	function Zb(a) {
	  a = a.target || window;
	  a.correspondingUseElement && (a = a.correspondingUseElement);
	  return 3 === a.nodeType ? a.parentNode : a;
	}

	function $b(a, b) {
	  if (!ExecutionEnvironment_1.canUseDOM || b && !("addEventListener" in document)) return !1;
	  a = "on" + a;
	  b = a in document;
	  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
	  return b;
	}

	function ac(a) {
	  var b = a.type;
	  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}

	function bc(a) {
	  var b = ac(a) ? "checked" : "value",
	      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	      d = "" + a[b];

	  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	    var e = c.get,
	        f = c.set;
	    Object.defineProperty(a, b, {
	      configurable: !0,
	      get: function () {
	        return e.call(this);
	      },
	      set: function (a) {
	        d = "" + a;
	        f.call(this, a);
	      }
	    });
	    Object.defineProperty(a, b, {
	      enumerable: c.enumerable
	    });
	    return {
	      getValue: function () {
	        return d;
	      },
	      setValue: function (a) {
	        d = "" + a;
	      },
	      stopTracking: function () {
	        a._valueTracker = null;
	        delete a[b];
	      }
	    };
	  }
	}

	function cc(a) {
	  a._valueTracker || (a._valueTracker = bc(a));
	}

	function dc(a) {
	  if (!a) return !1;
	  var b = a._valueTracker;
	  if (!b) return !0;
	  var c = b.getValue();
	  var d = "";
	  a && (d = ac(a) ? a.checked ? "true" : "false" : a.value);
	  a = d;
	  return a !== c ? (b.setValue(a), !0) : !1;
	}

	var ec = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	    I$1 = "function" === typeof Symbol && Symbol.for,
	    fc = I$1 ? Symbol.for("react.element") : 60103,
	    gc = I$1 ? Symbol.for("react.portal") : 60106,
	    hc = I$1 ? Symbol.for("react.fragment") : 60107,
	    ic = I$1 ? Symbol.for("react.strict_mode") : 60108,
	    jc = I$1 ? Symbol.for("react.profiler") : 60114,
	    mc = I$1 ? Symbol.for("react.provider") : 60109,
	    nc = I$1 ? Symbol.for("react.context") : 60110,
	    oc = I$1 ? Symbol.for("react.async_mode") : 60111,
	    pc = I$1 ? Symbol.for("react.forward_ref") : 60112,
	    qc = I$1 ? Symbol.for("react.timeout") : 60113,
	    rc = "function" === typeof Symbol && Symbol.iterator;

	function sc(a) {
	  if (null === a || "undefined" === typeof a) return null;
	  a = rc && a[rc] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}

	function tc(a) {
	  var b = a.type;
	  if ("function" === typeof b) return b.displayName || b.name;
	  if ("string" === typeof b) return b;

	  switch (b) {
	    case oc:
	      return "AsyncMode";

	    case nc:
	      return "Context.Consumer";

	    case hc:
	      return "ReactFragment";

	    case gc:
	      return "ReactPortal";

	    case jc:
	      return "Profiler(" + a.pendingProps.id + ")";

	    case mc:
	      return "Context.Provider";

	    case ic:
	      return "StrictMode";

	    case qc:
	      return "Timeout";
	  }

	  if ("object" === typeof b && null !== b) switch (b.$$typeof) {
	    case pc:
	      return a = b.render.displayName || b.render.name || "", "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef";
	  }
	  return null;
	}

	function vc(a) {
	  var b = "";

	  do {
	    a: switch (a.tag) {
	      case 0:
	      case 1:
	      case 2:
	      case 5:
	        var c = a._debugOwner,
	            d = a._debugSource;
	        var e = tc(a);
	        var f = null;
	        c && (f = tc(c));
	        c = d;
	        e = "\n    in " + (e || "Unknown") + (c ? " (at " + c.fileName.replace(/^.*[\\\/]/, "") + ":" + c.lineNumber + ")" : f ? " (created by " + f + ")" : "");
	        break a;

	      default:
	        e = "";
	    }

	    b += e;
	    a = a.return;
	  } while (a);

	  return b;
	}

	var wc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	    xc = {},
	    yc = {};

	function zc(a) {
	  if (yc.hasOwnProperty(a)) return !0;
	  if (xc.hasOwnProperty(a)) return !1;
	  if (wc.test(a)) return yc[a] = !0;
	  xc[a] = !0;
	  return !1;
	}

	function Ac(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;

	  switch (typeof b) {
	    case "function":
	    case "symbol":
	      return !0;

	    case "boolean":
	      if (d) return !1;
	      if (null !== c) return !c.acceptsBooleans;
	      a = a.toLowerCase().slice(0, 5);
	      return "data-" !== a && "aria-" !== a;

	    default:
	      return !1;
	  }
	}

	function Bc(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || Ac(a, b, c, d)) return !0;
	  if (d) return !1;
	  if (null !== c) switch (c.type) {
	    case 3:
	      return !b;

	    case 4:
	      return !1 === b;

	    case 5:
	      return isNaN(b);

	    case 6:
	      return isNaN(b) || 1 > b;
	  }
	  return !1;
	}

	function J$1(a, b, c, d, e) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	}

	var K$1 = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  K$1[a] = new J$1(a, 0, !1, a, null);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  K$1[b] = new J$1(b, 1, !1, a[1], null);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  K$1[a] = new J$1(a, 2, !1, a.toLowerCase(), null);
	});
	["autoReverse", "externalResourcesRequired", "preserveAlpha"].forEach(function (a) {
	  K$1[a] = new J$1(a, 2, !1, a, null);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  K$1[a] = new J$1(a, 3, !1, a.toLowerCase(), null);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  K$1[a] = new J$1(a, 3, !0, a.toLowerCase(), null);
	});
	["capture", "download"].forEach(function (a) {
	  K$1[a] = new J$1(a, 4, !1, a.toLowerCase(), null);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  K$1[a] = new J$1(a, 6, !1, a.toLowerCase(), null);
	});
	["rowSpan", "start"].forEach(function (a) {
	  K$1[a] = new J$1(a, 5, !1, a.toLowerCase(), null);
	});
	var Cc = /[\-:]([a-z])/g;

	function Dc(a) {
	  return a[1].toUpperCase();
	}

	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(Cc, Dc);
	  K$1[b] = new J$1(b, 1, !1, a, null);
	});
	"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(Cc, Dc);
	  K$1[b] = new J$1(b, 1, !1, a, "http://www.w3.org/1999/xlink");
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(Cc, Dc);
	  K$1[b] = new J$1(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace");
	});
	K$1.tabIndex = new J$1("tabIndex", 1, !1, "tabindex", null);

	function Ec(a, b, c, d) {
	  var e = K$1.hasOwnProperty(b) ? K$1[b] : null;
	  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
	  f || (Bc(b, c, e, d) && (c = null), d || null === e ? zc(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
	}

	function Fc(a, b) {
	  var c = b.checked;
	  return objectAssign({}, b, {
	    defaultChecked: void 0,
	    defaultValue: void 0,
	    value: void 0,
	    checked: null != c ? c : a._wrapperState.initialChecked
	  });
	}

	function Gc(a, b) {
	  var c = null == b.defaultValue ? "" : b.defaultValue,
	      d = null != b.checked ? b.checked : b.defaultChecked;
	  c = Hc(null != b.value ? b.value : c);
	  a._wrapperState = {
	    initialChecked: d,
	    initialValue: c,
	    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	  };
	}

	function Ic(a, b) {
	  b = b.checked;
	  null != b && Ec(a, "checked", b, !1);
	}

	function Jc(a, b) {
	  Ic(a, b);
	  var c = Hc(b.value);
	  if (null != c) if ("number" === b.type) {
	    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	  } else a.value !== "" + c && (a.value = "" + c);
	  b.hasOwnProperty("value") ? Kc(a, b.type, c) : b.hasOwnProperty("defaultValue") && Kc(a, b.type, Hc(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}

	function Lc(a, b) {
	  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) "" === a.value && (a.value = "" + a._wrapperState.initialValue), a.defaultValue = "" + a._wrapperState.initialValue;
	  b = a.name;
	  "" !== b && (a.name = "");
	  a.defaultChecked = !a.defaultChecked;
	  a.defaultChecked = !a.defaultChecked;
	  "" !== b && (a.name = b);
	}

	function Kc(a, b, c) {
	  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}

	function Hc(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "object":
	    case "string":
	    case "undefined":
	      return a;

	    default:
	      return "";
	  }
	}

	var Mc = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: "onChange",
	      captured: "onChangeCapture"
	    },
	    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
	  }
	};

	function Nc(a, b, c) {
	  a = H$1.getPooled(Mc.change, a, b, c);
	  a.type = "change";
	  Ob(c);
	  Ya(a);
	  return a;
	}

	var Oc = null,
	    Pc = null;

	function Qc(a) {
	  Ia(a, !1);
	}

	function Rc(a) {
	  var b = Oa(a);
	  if (dc(b)) return a;
	}

	function Sc(a, b) {
	  if ("change" === a) return b;
	}

	var Tc = !1;
	ExecutionEnvironment_1.canUseDOM && (Tc = $b("input") && (!document.documentMode || 9 < document.documentMode));

	function Uc() {
	  Oc && (Oc.detachEvent("onpropertychange", Vc), Pc = Oc = null);
	}

	function Vc(a) {
	  "value" === a.propertyName && Rc(Pc) && (a = Nc(Pc, a, Zb(a)), Wb(Qc, a));
	}

	function Wc(a, b, c) {
	  "focus" === a ? (Uc(), Oc = b, Pc = c, Oc.attachEvent("onpropertychange", Vc)) : "blur" === a && Uc();
	}

	function Xc(a) {
	  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return Rc(Pc);
	}

	function Yc(a, b) {
	  if ("click" === a) return Rc(b);
	}

	function Zc(a, b) {
	  if ("input" === a || "change" === a) return Rc(b);
	}

	var $c = {
	  eventTypes: Mc,
	  _isInputEventSupported: Tc,
	  extractEvents: function (a, b, c, d) {
	    var e = b ? Oa(b) : window,
	        f = void 0,
	        g = void 0,
	        h = e.nodeName && e.nodeName.toLowerCase();
	    "select" === h || "input" === h && "file" === e.type ? f = Sc : Yb(e) ? Tc ? f = Zc : (f = Xc, g = Wc) : (h = e.nodeName) && "input" === h.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (f = Yc);
	    if (f && (f = f(a, b))) return Nc(f, c, d);
	    g && g(a, e, b);
	    "blur" === a && null != b && (a = b._wrapperState || e._wrapperState) && a.controlled && "number" === e.type && Kc(e, "number", e.value);
	  }
	},
	    ad = H$1.extend({
	  view: null,
	  detail: null
	}),
	    bd = {
	  Alt: "altKey",
	  Control: "ctrlKey",
	  Meta: "metaKey",
	  Shift: "shiftKey"
	};

	function cd(a) {
	  var b = this.nativeEvent;
	  return b.getModifierState ? b.getModifierState(a) : (a = bd[a]) ? !!b[a] : !1;
	}

	function dd() {
	  return cd;
	}

	var ed = ad.extend({
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  pageX: null,
	  pageY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: dd,
	  button: null,
	  buttons: null,
	  relatedTarget: function (a) {
	    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
	  }
	}),
	    fd = ed.extend({
	  pointerId: null,
	  width: null,
	  height: null,
	  pressure: null,
	  tiltX: null,
	  tiltY: null,
	  pointerType: null,
	  isPrimary: null
	}),
	    gd = {
	  mouseEnter: {
	    registrationName: "onMouseEnter",
	    dependencies: ["mouseout", "mouseover"]
	  },
	  mouseLeave: {
	    registrationName: "onMouseLeave",
	    dependencies: ["mouseout", "mouseover"]
	  },
	  pointerEnter: {
	    registrationName: "onPointerEnter",
	    dependencies: ["pointerout", "pointerover"]
	  },
	  pointerLeave: {
	    registrationName: "onPointerLeave",
	    dependencies: ["pointerout", "pointerover"]
	  }
	},
	    hd = {
	  eventTypes: gd,
	  extractEvents: function (a, b, c, d) {
	    var e = "mouseover" === a || "pointerover" === a,
	        f = "mouseout" === a || "pointerout" === a;
	    if (e && (c.relatedTarget || c.fromElement) || !f && !e) return null;
	    e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;
	    f ? (f = b, b = (b = c.relatedTarget || c.toElement) ? Na(b) : null) : f = null;
	    if (f === b) return null;
	    var g = void 0,
	        h = void 0,
	        k = void 0,
	        n = void 0;
	    if ("mouseout" === a || "mouseover" === a) g = ed, h = gd.mouseLeave, k = gd.mouseEnter, n = "mouse";else if ("pointerout" === a || "pointerover" === a) g = fd, h = gd.pointerLeave, k = gd.pointerEnter, n = "pointer";
	    a = null == f ? e : Oa(f);
	    e = null == b ? e : Oa(b);
	    h = g.getPooled(h, f, c, d);
	    h.type = n + "leave";
	    h.target = a;
	    h.relatedTarget = e;
	    c = g.getPooled(k, b, c, d);
	    c.type = n + "enter";
	    c.target = e;
	    c.relatedTarget = a;
	    Za(h, c, f, b);
	    return [h, c];
	  }
	};

	function id(a) {
	  var b = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    if (0 !== (b.effectTag & 2)) return 1;

	    for (; b.return;) if (b = b.return, 0 !== (b.effectTag & 2)) return 1;
	  }
	  return 3 === b.tag ? 2 : 3;
	}

	function jd(a) {
	  2 !== id(a) ? A$1("188") : void 0;
	}

	function kd(a) {
	  var b = a.alternate;
	  if (!b) return b = id(a), 3 === b ? A$1("188") : void 0, 1 === b ? null : a;

	  for (var c = a, d = b;;) {
	    var e = c.return,
	        f = e ? e.alternate : null;
	    if (!e || !f) break;

	    if (e.child === f.child) {
	      for (var g = e.child; g;) {
	        if (g === c) return jd(e), a;
	        if (g === d) return jd(e), b;
	        g = g.sibling;
	      }

	      A$1("188");
	    }

	    if (c.return !== d.return) c = e, d = f;else {
	      g = !1;

	      for (var h = e.child; h;) {
	        if (h === c) {
	          g = !0;
	          c = e;
	          d = f;
	          break;
	        }

	        if (h === d) {
	          g = !0;
	          d = e;
	          c = f;
	          break;
	        }

	        h = h.sibling;
	      }

	      if (!g) {
	        for (h = f.child; h;) {
	          if (h === c) {
	            g = !0;
	            c = f;
	            d = e;
	            break;
	          }

	          if (h === d) {
	            g = !0;
	            d = f;
	            c = e;
	            break;
	          }

	          h = h.sibling;
	        }

	        g ? void 0 : A$1("189");
	      }
	    }
	    c.alternate !== d ? A$1("190") : void 0;
	  }

	  3 !== c.tag ? A$1("188") : void 0;
	  return c.stateNode.current === c ? a : b;
	}

	function ld(a) {
	  a = kd(a);
	  if (!a) return null;

	  for (var b = a;;) {
	    if (5 === b.tag || 6 === b.tag) return b;
	    if (b.child) b.child.return = b, b = b.child;else {
	      if (b === a) break;

	      for (; !b.sibling;) {
	        if (!b.return || b.return === a) return null;
	        b = b.return;
	      }

	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }

	  return null;
	}

	function md(a) {
	  a = kd(a);
	  if (!a) return null;

	  for (var b = a;;) {
	    if (5 === b.tag || 6 === b.tag) return b;
	    if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
	      if (b === a) break;

	      for (; !b.sibling;) {
	        if (!b.return || b.return === a) return null;
	        b = b.return;
	      }

	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }

	  return null;
	}

	var nd = H$1.extend({
	  animationName: null,
	  elapsedTime: null,
	  pseudoElement: null
	}),
	    od = H$1.extend({
	  clipboardData: function (a) {
	    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	  }
	}),
	    pd = ad.extend({
	  relatedTarget: null
	});

	function qd(a) {
	  var b = a.keyCode;
	  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	  10 === a && (a = 13);
	  return 32 <= a || 13 === a ? a : 0;
	}

	var rd = {
	  Esc: "Escape",
	  Spacebar: " ",
	  Left: "ArrowLeft",
	  Up: "ArrowUp",
	  Right: "ArrowRight",
	  Down: "ArrowDown",
	  Del: "Delete",
	  Win: "OS",
	  Menu: "ContextMenu",
	  Apps: "ContextMenu",
	  Scroll: "ScrollLock",
	  MozPrintableKey: "Unidentified"
	},
	    sd = {
	  8: "Backspace",
	  9: "Tab",
	  12: "Clear",
	  13: "Enter",
	  16: "Shift",
	  17: "Control",
	  18: "Alt",
	  19: "Pause",
	  20: "CapsLock",
	  27: "Escape",
	  32: " ",
	  33: "PageUp",
	  34: "PageDown",
	  35: "End",
	  36: "Home",
	  37: "ArrowLeft",
	  38: "ArrowUp",
	  39: "ArrowRight",
	  40: "ArrowDown",
	  45: "Insert",
	  46: "Delete",
	  112: "F1",
	  113: "F2",
	  114: "F3",
	  115: "F4",
	  116: "F5",
	  117: "F6",
	  118: "F7",
	  119: "F8",
	  120: "F9",
	  121: "F10",
	  122: "F11",
	  123: "F12",
	  144: "NumLock",
	  145: "ScrollLock",
	  224: "Meta"
	},
	    td = ad.extend({
	  key: function (a) {
	    if (a.key) {
	      var b = rd[a.key] || a.key;
	      if ("Unidentified" !== b) return b;
	    }

	    return "keypress" === a.type ? (a = qd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? sd[a.keyCode] || "Unidentified" : "";
	  },
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: dd,
	  charCode: function (a) {
	    return "keypress" === a.type ? qd(a) : 0;
	  },
	  keyCode: function (a) {
	    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	  },
	  which: function (a) {
	    return "keypress" === a.type ? qd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	  }
	}),
	    ud = ed.extend({
	  dataTransfer: null
	}),
	    vd = ad.extend({
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: dd
	}),
	    wd = H$1.extend({
	  propertyName: null,
	  elapsedTime: null,
	  pseudoElement: null
	}),
	    xd = ed.extend({
	  deltaX: function (a) {
	    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	  },
	  deltaY: function (a) {
	    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	  },
	  deltaZ: null,
	  deltaMode: null
	}),
	    yd = [["abort", "abort"], [fb, "animationEnd"], [gb, "animationIteration"], [hb, "animationStart"], ["canplay", "canPlay"], ["canplaythrough", "canPlayThrough"], ["drag", "drag"], ["dragenter", "dragEnter"], ["dragexit", "dragExit"], ["dragleave", "dragLeave"], ["dragover", "dragOver"], ["durationchange", "durationChange"], ["emptied", "emptied"], ["encrypted", "encrypted"], ["ended", "ended"], ["error", "error"], ["gotpointercapture", "gotPointerCapture"], ["load", "load"], ["loadeddata", "loadedData"], ["loadedmetadata", "loadedMetadata"], ["loadstart", "loadStart"], ["lostpointercapture", "lostPointerCapture"], ["mousemove", "mouseMove"], ["mouseout", "mouseOut"], ["mouseover", "mouseOver"], ["playing", "playing"], ["pointermove", "pointerMove"], ["pointerout", "pointerOut"], ["pointerover", "pointerOver"], ["progress", "progress"], ["scroll", "scroll"], ["seeking", "seeking"], ["stalled", "stalled"], ["suspend", "suspend"], ["timeupdate", "timeUpdate"], ["toggle", "toggle"], ["touchmove", "touchMove"], [ib, "transitionEnd"], ["waiting", "waiting"], ["wheel", "wheel"]],
	    zd = {},
	    Ad = {};

	function Bd(a, b) {
	  var c = a[0];
	  a = a[1];
	  var d = "on" + (a[0].toUpperCase() + a.slice(1));
	  b = {
	    phasedRegistrationNames: {
	      bubbled: d,
	      captured: d + "Capture"
	    },
	    dependencies: [c],
	    isInteractive: b
	  };
	  zd[a] = b;
	  Ad[c] = b;
	}

	[["blur", "blur"], ["cancel", "cancel"], ["click", "click"], ["close", "close"], ["contextmenu", "contextMenu"], ["copy", "copy"], ["cut", "cut"], ["dblclick", "doubleClick"], ["dragend", "dragEnd"], ["dragstart", "dragStart"], ["drop", "drop"], ["focus", "focus"], ["input", "input"], ["invalid", "invalid"], ["keydown", "keyDown"], ["keypress", "keyPress"], ["keyup", "keyUp"], ["mousedown", "mouseDown"], ["mouseup", "mouseUp"], ["paste", "paste"], ["pause", "pause"], ["play", "play"], ["pointercancel", "pointerCancel"], ["pointerdown", "pointerDown"], ["pointerup", "pointerUp"], ["ratechange", "rateChange"], ["reset", "reset"], ["seeked", "seeked"], ["submit", "submit"], ["touchcancel", "touchCancel"], ["touchend", "touchEnd"], ["touchstart", "touchStart"], ["volumechange", "volumeChange"]].forEach(function (a) {
	  Bd(a, !0);
	});
	yd.forEach(function (a) {
	  Bd(a, !1);
	});
	var Cd = {
	  eventTypes: zd,
	  isInteractiveTopLevelEventType: function (a) {
	    a = Ad[a];
	    return void 0 !== a && !0 === a.isInteractive;
	  },
	  extractEvents: function (a, b, c, d) {
	    var e = Ad[a];
	    if (!e) return null;

	    switch (a) {
	      case "keypress":
	        if (0 === qd(c)) return null;

	      case "keydown":
	      case "keyup":
	        a = td;
	        break;

	      case "blur":
	      case "focus":
	        a = pd;
	        break;

	      case "click":
	        if (2 === c.button) return null;

	      case "dblclick":
	      case "mousedown":
	      case "mousemove":
	      case "mouseup":
	      case "mouseout":
	      case "mouseover":
	      case "contextmenu":
	        a = ed;
	        break;

	      case "drag":
	      case "dragend":
	      case "dragenter":
	      case "dragexit":
	      case "dragleave":
	      case "dragover":
	      case "dragstart":
	      case "drop":
	        a = ud;
	        break;

	      case "touchcancel":
	      case "touchend":
	      case "touchmove":
	      case "touchstart":
	        a = vd;
	        break;

	      case fb:
	      case gb:
	      case hb:
	        a = nd;
	        break;

	      case ib:
	        a = wd;
	        break;

	      case "scroll":
	        a = ad;
	        break;

	      case "wheel":
	        a = xd;
	        break;

	      case "copy":
	      case "cut":
	      case "paste":
	        a = od;
	        break;

	      case "gotpointercapture":
	      case "lostpointercapture":
	      case "pointercancel":
	      case "pointerdown":
	      case "pointermove":
	      case "pointerout":
	      case "pointerover":
	      case "pointerup":
	        a = fd;
	        break;

	      default:
	        a = H$1;
	    }

	    b = a.getPooled(e, b, c, d);
	    Ya(b);
	    return b;
	  }
	},
	    Dd = Cd.isInteractiveTopLevelEventType,
	    Ed = [];

	function Fd(a) {
	  var b = a.targetInst;

	  do {
	    if (!b) {
	      a.ancestors.push(b);
	      break;
	    }

	    var c;

	    for (c = b; c.return;) c = c.return;

	    c = 3 !== c.tag ? null : c.stateNode.containerInfo;
	    if (!c) break;
	    a.ancestors.push(b);
	    b = Na(c);
	  } while (b);

	  for (c = 0; c < a.ancestors.length; c++) b = a.ancestors[c], Ja(a.topLevelType, b, a.nativeEvent, Zb(a.nativeEvent));
	}

	var Gd = !0;

	function Id(a) {
	  Gd = !!a;
	}

	function L$1(a, b) {
	  if (!b) return null;
	  var c = (Dd(a) ? Jd : Kd).bind(null, a);
	  b.addEventListener(a, c, !1);
	}

	function Ld(a, b) {
	  if (!b) return null;
	  var c = (Dd(a) ? Jd : Kd).bind(null, a);
	  b.addEventListener(a, c, !0);
	}

	function Jd(a, b) {
	  Tb(Kd, a, b);
	}

	function Kd(a, b) {
	  if (Gd) {
	    var c = Zb(b);
	    c = Na(c);
	    null === c || "number" !== typeof c.tag || 2 === id(c) || (c = null);

	    if (Ed.length) {
	      var d = Ed.pop();
	      d.topLevelType = a;
	      d.nativeEvent = b;
	      d.targetInst = c;
	      a = d;
	    } else a = {
	      topLevelType: a,
	      nativeEvent: b,
	      targetInst: c,
	      ancestors: []
	    };

	    try {
	      Wb(Fd, a);
	    } finally {
	      a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > Ed.length && Ed.push(a);
	    }
	  }
	}

	var Md = {
	  get _enabled() {
	    return Gd;
	  },

	  setEnabled: Id,
	  isEnabled: function () {
	    return Gd;
	  },
	  trapBubbledEvent: L$1,
	  trapCapturedEvent: Ld,
	  dispatchEvent: Kd
	},
	    Nd = {},
	    Od = 0,
	    Pd = "_reactListenersID" + ("" + Math.random()).slice(2);

	function Qd(a) {
	  Object.prototype.hasOwnProperty.call(a, Pd) || (a[Pd] = Od++, Nd[a[Pd]] = {});
	  return Nd[a[Pd]];
	}

	function Rd(a) {
	  for (; a && a.firstChild;) a = a.firstChild;

	  return a;
	}

	function Sd(a, b) {
	  var c = Rd(a);
	  a = 0;

	  for (var d; c;) {
	    if (3 === c.nodeType) {
	      d = a + c.textContent.length;
	      if (a <= b && d >= b) return {
	        node: c,
	        offset: b - a
	      };
	      a = d;
	    }

	    a: {
	      for (; c;) {
	        if (c.nextSibling) {
	          c = c.nextSibling;
	          break a;
	        }

	        c = c.parentNode;
	      }

	      c = void 0;
	    }

	    c = Rd(c);
	  }
	}

	function Td(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && "text" === a.type || "textarea" === b || "true" === a.contentEditable);
	}

	var Ud = ExecutionEnvironment_1.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
	    Vd = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: "onSelect",
	      captured: "onSelectCapture"
	    },
	    dependencies: "blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")
	  }
	},
	    Wd = null,
	    Xd = null,
	    Yd = null,
	    Zd = !1;

	function $d(a, b) {
	  if (Zd || null == Wd || Wd !== getActiveElement_1()) return null;
	  var c = Wd;
	  "selectionStart" in c && Td(c) ? c = {
	    start: c.selectionStart,
	    end: c.selectionEnd
	  } : window.getSelection ? (c = window.getSelection(), c = {
	    anchorNode: c.anchorNode,
	    anchorOffset: c.anchorOffset,
	    focusNode: c.focusNode,
	    focusOffset: c.focusOffset
	  }) : c = void 0;
	  return Yd && shallowEqual_1(Yd, c) ? null : (Yd = c, a = H$1.getPooled(Vd.select, Xd, a, b), a.type = "select", a.target = Wd, Ya(a), a);
	}

	var ae = {
	  eventTypes: Vd,
	  extractEvents: function (a, b, c, d) {
	    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
	        f;

	    if (!(f = !e)) {
	      a: {
	        e = Qd(e);
	        f = sa.onSelect;

	        for (var g = 0; g < f.length; g++) {
	          var h = f[g];

	          if (!e.hasOwnProperty(h) || !e[h]) {
	            e = !1;
	            break a;
	          }
	        }

	        e = !0;
	      }

	      f = !e;
	    }

	    if (f) return null;
	    e = b ? Oa(b) : window;

	    switch (a) {
	      case "focus":
	        if (Yb(e) || "true" === e.contentEditable) Wd = e, Xd = b, Yd = null;
	        break;

	      case "blur":
	        Yd = Xd = Wd = null;
	        break;

	      case "mousedown":
	        Zd = !0;
	        break;

	      case "contextmenu":
	      case "mouseup":
	        return Zd = !1, $d(c, d);

	      case "selectionchange":
	        if (Ud) break;

	      case "keydown":
	      case "keyup":
	        return $d(c, d);
	    }

	    return null;
	  }
	};
	Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
	wa = Qa.getFiberCurrentPropsFromNode;
	xa = Qa.getInstanceFromNode;
	ya = Qa.getNodeFromInstance;
	Ga.injectEventPluginsByName({
	  SimpleEventPlugin: Cd,
	  EnterLeaveEventPlugin: hd,
	  ChangeEventPlugin: $c,
	  SelectEventPlugin: ae,
	  BeforeInputEventPlugin: Ib
	});
	var be = void 0;
	be = "object" === typeof performance && "function" === typeof performance.now ? function () {
	  return performance.now();
	} : function () {
	  return Date.now();
	};
	var ce = void 0,
	    de = void 0;

	if (ExecutionEnvironment_1.canUseDOM) {
	  var ee = [],
	      fe = 0,
	      ge = {},
	      he = -1,
	      ie = !1,
	      je = !1,
	      ke = 0,
	      le = 33,
	      me = 33,
	      ne = {
	    didTimeout: !1,
	    timeRemaining: function () {
	      var a = ke - be();
	      return 0 < a ? a : 0;
	    }
	  },
	      oe = function (a, b) {
	    if (ge[b]) try {
	      a(ne);
	    } finally {
	      delete ge[b];
	    }
	  },
	      pe = "__reactIdleCallback$" + Math.random().toString(36).slice(2);

	  window.addEventListener("message", function (a) {
	    if (a.source === window && a.data === pe && (ie = !1, 0 !== ee.length)) {
	      if (0 !== ee.length && (a = be(), !(-1 === he || he > a))) {
	        he = -1;
	        ne.didTimeout = !0;

	        for (var b = 0, c = ee.length; b < c; b++) {
	          var d = ee[b],
	              e = d.timeoutTime;
	          -1 !== e && e <= a ? oe(d.scheduledCallback, d.callbackId) : -1 !== e && (-1 === he || e < he) && (he = e);
	        }
	      }

	      for (a = be(); 0 < ke - a && 0 < ee.length;) a = ee.shift(), ne.didTimeout = !1, oe(a.scheduledCallback, a.callbackId), a = be();

	      0 < ee.length && !je && (je = !0, requestAnimationFrame(qe));
	    }
	  }, !1);

	  var qe = function (a) {
	    je = !1;
	    var b = a - ke + me;
	    b < me && le < me ? (8 > b && (b = 8), me = b < le ? le : b) : le = b;
	    ke = a + me;
	    ie || (ie = !0, window.postMessage(pe, "*"));
	  };

	  ce = function (a, b) {
	    var c = -1;
	    null != b && "number" === typeof b.timeout && (c = be() + b.timeout);
	    if (-1 === he || -1 !== c && c < he) he = c;
	    fe++;
	    b = fe;
	    ee.push({
	      scheduledCallback: a,
	      callbackId: b,
	      timeoutTime: c
	    });
	    ge[b] = !0;
	    je || (je = !0, requestAnimationFrame(qe));
	    return b;
	  };

	  de = function (a) {
	    delete ge[a];
	  };
	} else {
	  var re = 0,
	      se = {};

	  ce = function (a) {
	    var b = re++,
	        c = setTimeout(function () {
	      a({
	        timeRemaining: function () {
	          return Infinity;
	        },
	        didTimeout: !1
	      });
	    });
	    se[b] = c;
	    return b;
	  };

	  de = function (a) {
	    var b = se[a];
	    delete se[a];
	    clearTimeout(b);
	  };
	}

	function te(a) {
	  var b = "";
	  react.Children.forEach(a, function (a) {
	    null == a || "string" !== typeof a && "number" !== typeof a || (b += a);
	  });
	  return b;
	}

	function ue(a, b) {
	  a = objectAssign({
	    children: void 0
	  }, b);
	  if (b = te(b.children)) a.children = b;
	  return a;
	}

	function ve(a, b, c, d) {
	  a = a.options;

	  if (b) {
	    b = {};

	    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;

	    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	  } else {
	    c = "" + c;
	    b = null;

	    for (e = 0; e < a.length; e++) {
	      if (a[e].value === c) {
	        a[e].selected = !0;
	        d && (a[e].defaultSelected = !0);
	        return;
	      }

	      null !== b || a[e].disabled || (b = a[e]);
	    }

	    null !== b && (b.selected = !0);
	  }
	}

	function we(a, b) {
	  var c = b.value;
	  a._wrapperState = {
	    initialValue: null != c ? c : b.defaultValue,
	    wasMultiple: !!b.multiple
	  };
	}

	function xe(a, b) {
	  null != b.dangerouslySetInnerHTML ? A$1("91") : void 0;
	  return objectAssign({}, b, {
	    value: void 0,
	    defaultValue: void 0,
	    children: "" + a._wrapperState.initialValue
	  });
	}

	function ye(a, b) {
	  var c = b.value;
	  null == c && (c = b.defaultValue, b = b.children, null != b && (null != c ? A$1("92") : void 0, Array.isArray(b) && (1 >= b.length ? void 0 : A$1("93"), b = b[0]), c = "" + b), null == c && (c = ""));
	  a._wrapperState = {
	    initialValue: "" + c
	  };
	}

	function ze(a, b) {
	  var c = b.value;
	  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && (a.defaultValue = c));
	  null != b.defaultValue && (a.defaultValue = b.defaultValue);
	}

	function Ae(a) {
	  var b = a.textContent;
	  b === a._wrapperState.initialValue && (a.value = b);
	}

	var Be = {
	  html: "http://www.w3.org/1999/xhtml",
	  mathml: "http://www.w3.org/1998/Math/MathML",
	  svg: "http://www.w3.org/2000/svg"
	};

	function Ce(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";

	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";

	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}

	function De(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? Ce(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}

	var Ee = void 0,
	    Fe = function (a) {
	  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	    MSApp.execUnsafeLocalFunction(function () {
	      return a(b, c, d, e);
	    });
	  } : a;
	}(function (a, b) {
	  if (a.namespaceURI !== Be.svg || "innerHTML" in a) a.innerHTML = b;else {
	    Ee = Ee || document.createElement("div");
	    Ee.innerHTML = "<svg>" + b + "</svg>";

	    for (b = Ee.firstChild; a.firstChild;) a.removeChild(a.firstChild);

	    for (; b.firstChild;) a.appendChild(b.firstChild);
	  }
	});

	function Ge(a, b) {
	  if (b) {
	    var c = a.firstChild;

	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }

	  a.textContent = b;
	}

	var He = {
	  animationIterationCount: !0,
	  borderImageOutset: !0,
	  borderImageSlice: !0,
	  borderImageWidth: !0,
	  boxFlex: !0,
	  boxFlexGroup: !0,
	  boxOrdinalGroup: !0,
	  columnCount: !0,
	  columns: !0,
	  flex: !0,
	  flexGrow: !0,
	  flexPositive: !0,
	  flexShrink: !0,
	  flexNegative: !0,
	  flexOrder: !0,
	  gridRow: !0,
	  gridRowEnd: !0,
	  gridRowSpan: !0,
	  gridRowStart: !0,
	  gridColumn: !0,
	  gridColumnEnd: !0,
	  gridColumnSpan: !0,
	  gridColumnStart: !0,
	  fontWeight: !0,
	  lineClamp: !0,
	  lineHeight: !0,
	  opacity: !0,
	  order: !0,
	  orphans: !0,
	  tabSize: !0,
	  widows: !0,
	  zIndex: !0,
	  zoom: !0,
	  fillOpacity: !0,
	  floodOpacity: !0,
	  stopOpacity: !0,
	  strokeDasharray: !0,
	  strokeDashoffset: !0,
	  strokeMiterlimit: !0,
	  strokeOpacity: !0,
	  strokeWidth: !0
	},
	    Ie = ["Webkit", "ms", "Moz", "O"];
	Object.keys(He).forEach(function (a) {
	  Ie.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    He[b] = He[a];
	  });
	});

	function Je(a, b) {
	  a = a.style;

	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--");
	    var e = c;
	    var f = b[c];
	    e = null == f || "boolean" === typeof f || "" === f ? "" : d || "number" !== typeof f || 0 === f || He.hasOwnProperty(e) && He[e] ? ("" + f).trim() : f + "px";
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}

	var Ke = objectAssign({
	  menuitem: !0
	}, {
	  area: !0,
	  base: !0,
	  br: !0,
	  col: !0,
	  embed: !0,
	  hr: !0,
	  img: !0,
	  input: !0,
	  keygen: !0,
	  link: !0,
	  meta: !0,
	  param: !0,
	  source: !0,
	  track: !0,
	  wbr: !0
	});

	function Le(a, b, c) {
	  b && (Ke[a] && (null != b.children || null != b.dangerouslySetInnerHTML ? A$1("137", a, c()) : void 0), null != b.dangerouslySetInnerHTML && (null != b.children ? A$1("60") : void 0, "object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML ? void 0 : A$1("61")), null != b.style && "object" !== typeof b.style ? A$1("62", c()) : void 0);
	}

	function Me(a, b) {
	  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

	  switch (a) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return !1;

	    default:
	      return !0;
	  }
	}

	var Ne = emptyFunction_1.thatReturns("");

	function Oe(a, b) {
	  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
	  var c = Qd(a);
	  b = sa[b];

	  for (var d = 0; d < b.length; d++) {
	    var e = b[d];

	    if (!c.hasOwnProperty(e) || !c[e]) {
	      switch (e) {
	        case "scroll":
	          Ld("scroll", a);
	          break;

	        case "focus":
	        case "blur":
	          Ld("focus", a);
	          Ld("blur", a);
	          c.blur = !0;
	          c.focus = !0;
	          break;

	        case "cancel":
	        case "close":
	          $b(e, !0) && Ld(e, a);
	          break;

	        case "invalid":
	        case "submit":
	        case "reset":
	          break;

	        default:
	          -1 === jb.indexOf(e) && L$1(e, a);
	      }

	      c[e] = !0;
	    }
	  }
	}

	function Pe(a, b, c, d) {
	  c = 9 === c.nodeType ? c : c.ownerDocument;
	  d === Be.html && (d = Ce(a));
	  d === Be.html ? "script" === a ? (a = c.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : a = "string" === typeof b.is ? c.createElement(a, {
	    is: b.is
	  }) : c.createElement(a) : a = c.createElementNS(d, a);
	  return a;
	}

	function Qe(a, b) {
	  return (9 === b.nodeType ? b : b.ownerDocument).createTextNode(a);
	}

	function Re(a, b, c, d) {
	  var e = Me(b, c);

	  switch (b) {
	    case "iframe":
	    case "object":
	      L$1("load", a);
	      var f = c;
	      break;

	    case "video":
	    case "audio":
	      for (f = 0; f < jb.length; f++) L$1(jb[f], a);

	      f = c;
	      break;

	    case "source":
	      L$1("error", a);
	      f = c;
	      break;

	    case "img":
	    case "image":
	    case "link":
	      L$1("error", a);
	      L$1("load", a);
	      f = c;
	      break;

	    case "form":
	      L$1("reset", a);
	      L$1("submit", a);
	      f = c;
	      break;

	    case "details":
	      L$1("toggle", a);
	      f = c;
	      break;

	    case "input":
	      Gc(a, c);
	      f = Fc(a, c);
	      L$1("invalid", a);
	      Oe(d, "onChange");
	      break;

	    case "option":
	      f = ue(a, c);
	      break;

	    case "select":
	      we(a, c);
	      f = objectAssign({}, c, {
	        value: void 0
	      });
	      L$1("invalid", a);
	      Oe(d, "onChange");
	      break;

	    case "textarea":
	      ye(a, c);
	      f = xe(a, c);
	      L$1("invalid", a);
	      Oe(d, "onChange");
	      break;

	    default:
	      f = c;
	  }

	  Le(b, f, Ne);
	  var g = f,
	      h;

	  for (h in g) if (g.hasOwnProperty(h)) {
	    var k = g[h];
	    "style" === h ? Je(a, k, Ne) : "dangerouslySetInnerHTML" === h ? (k = k ? k.__html : void 0, null != k && Fe(a, k)) : "children" === h ? "string" === typeof k ? ("textarea" !== b || "" !== k) && Ge(a, k) : "number" === typeof k && Ge(a, "" + k) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (ra.hasOwnProperty(h) ? null != k && Oe(d, h) : null != k && Ec(a, h, k, e));
	  }

	  switch (b) {
	    case "input":
	      cc(a);
	      Lc(a, c);
	      break;

	    case "textarea":
	      cc(a);
	      Ae(a, c);
	      break;

	    case "option":
	      null != c.value && a.setAttribute("value", c.value);
	      break;

	    case "select":
	      a.multiple = !!c.multiple;
	      b = c.value;
	      null != b ? ve(a, !!c.multiple, b, !1) : null != c.defaultValue && ve(a, !!c.multiple, c.defaultValue, !0);
	      break;

	    default:
	      "function" === typeof f.onClick && (a.onclick = emptyFunction_1);
	  }
	}

	function Se(a, b, c, d, e) {
	  var f = null;

	  switch (b) {
	    case "input":
	      c = Fc(a, c);
	      d = Fc(a, d);
	      f = [];
	      break;

	    case "option":
	      c = ue(a, c);
	      d = ue(a, d);
	      f = [];
	      break;

	    case "select":
	      c = objectAssign({}, c, {
	        value: void 0
	      });
	      d = objectAssign({}, d, {
	        value: void 0
	      });
	      f = [];
	      break;

	    case "textarea":
	      c = xe(a, c);
	      d = xe(a, d);
	      f = [];
	      break;

	    default:
	      "function" !== typeof c.onClick && "function" === typeof d.onClick && (a.onclick = emptyFunction_1);
	  }

	  Le(b, d, Ne);
	  b = a = void 0;
	  var g = null;

	  for (a in c) if (!d.hasOwnProperty(a) && c.hasOwnProperty(a) && null != c[a]) if ("style" === a) {
	    var h = c[a];

	    for (b in h) h.hasOwnProperty(b) && (g || (g = {}), g[b] = "");
	  } else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (ra.hasOwnProperty(a) ? f || (f = []) : (f = f || []).push(a, null));

	  for (a in d) {
	    var k = d[a];
	    h = null != c ? c[a] : void 0;
	    if (d.hasOwnProperty(a) && k !== h && (null != k || null != h)) if ("style" === a) {
	      if (h) {
	        for (b in h) !h.hasOwnProperty(b) || k && k.hasOwnProperty(b) || (g || (g = {}), g[b] = "");

	        for (b in k) k.hasOwnProperty(b) && h[b] !== k[b] && (g || (g = {}), g[b] = k[b]);
	      } else g || (f || (f = []), f.push(a, g)), g = k;
	    } else "dangerouslySetInnerHTML" === a ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(a, "" + k)) : "children" === a ? h === k || "string" !== typeof k && "number" !== typeof k || (f = f || []).push(a, "" + k) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && (ra.hasOwnProperty(a) ? (null != k && Oe(e, a), f || h === k || (f = [])) : (f = f || []).push(a, k));
	  }

	  g && (f = f || []).push("style", g);
	  return f;
	}

	function Te(a, b, c, d, e) {
	  "input" === c && "radio" === e.type && null != e.name && Ic(a, e);
	  Me(c, d);
	  d = Me(c, e);

	  for (var f = 0; f < b.length; f += 2) {
	    var g = b[f],
	        h = b[f + 1];
	    "style" === g ? Je(a, h, Ne) : "dangerouslySetInnerHTML" === g ? Fe(a, h) : "children" === g ? Ge(a, h) : Ec(a, g, h, d);
	  }

	  switch (c) {
	    case "input":
	      Jc(a, e);
	      break;

	    case "textarea":
	      ze(a, e);
	      break;

	    case "select":
	      a._wrapperState.initialValue = void 0, b = a._wrapperState.wasMultiple, a._wrapperState.wasMultiple = !!e.multiple, c = e.value, null != c ? ve(a, !!e.multiple, c, !1) : b !== !!e.multiple && (null != e.defaultValue ? ve(a, !!e.multiple, e.defaultValue, !0) : ve(a, !!e.multiple, e.multiple ? [] : "", !1));
	  }
	}

	function Ue(a, b, c, d, e) {
	  switch (b) {
	    case "iframe":
	    case "object":
	      L$1("load", a);
	      break;

	    case "video":
	    case "audio":
	      for (d = 0; d < jb.length; d++) L$1(jb[d], a);

	      break;

	    case "source":
	      L$1("error", a);
	      break;

	    case "img":
	    case "image":
	    case "link":
	      L$1("error", a);
	      L$1("load", a);
	      break;

	    case "form":
	      L$1("reset", a);
	      L$1("submit", a);
	      break;

	    case "details":
	      L$1("toggle", a);
	      break;

	    case "input":
	      Gc(a, c);
	      L$1("invalid", a);
	      Oe(e, "onChange");
	      break;

	    case "select":
	      we(a, c);
	      L$1("invalid", a);
	      Oe(e, "onChange");
	      break;

	    case "textarea":
	      ye(a, c), L$1("invalid", a), Oe(e, "onChange");
	  }

	  Le(b, c, Ne);
	  d = null;

	  for (var f in c) if (c.hasOwnProperty(f)) {
	    var g = c[f];
	    "children" === f ? "string" === typeof g ? a.textContent !== g && (d = ["children", g]) : "number" === typeof g && a.textContent !== "" + g && (d = ["children", "" + g]) : ra.hasOwnProperty(f) && null != g && Oe(e, f);
	  }

	  switch (b) {
	    case "input":
	      cc(a);
	      Lc(a, c);
	      break;

	    case "textarea":
	      cc(a);
	      Ae(a, c);
	      break;

	    case "select":
	    case "option":
	      break;

	    default:
	      "function" === typeof c.onClick && (a.onclick = emptyFunction_1);
	  }

	  return d;
	}

	function Ve(a, b) {
	  return a.nodeValue !== b;
	}

	var We = {
	  createElement: Pe,
	  createTextNode: Qe,
	  setInitialProperties: Re,
	  diffProperties: Se,
	  updateProperties: Te,
	  diffHydratedProperties: Ue,
	  diffHydratedText: Ve,
	  warnForUnmatchedText: function () {},
	  warnForDeletedHydratableElement: function () {},
	  warnForDeletedHydratableText: function () {},
	  warnForInsertedHydratedElement: function () {},
	  warnForInsertedHydratedText: function () {},
	  restoreControlledState: function (a, b, c) {
	    switch (b) {
	      case "input":
	        Jc(a, c);
	        b = c.name;

	        if ("radio" === c.type && null != b) {
	          for (c = a; c.parentNode;) c = c.parentNode;

	          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

	          for (b = 0; b < c.length; b++) {
	            var d = c[b];

	            if (d !== a && d.form === a.form) {
	              var e = Pa(d);
	              e ? void 0 : A$1("90");
	              dc(d);
	              Jc(d, e);
	            }
	          }
	        }

	        break;

	      case "textarea":
	        ze(a, c);
	        break;

	      case "select":
	        b = c.value, null != b && ve(a, !!c.multiple, b, !1);
	    }
	  }
	},
	    Xe = null,
	    Ye = null;

	function Ze(a, b) {
	  switch (a) {
	    case "button":
	    case "input":
	    case "select":
	    case "textarea":
	      return !!b.autoFocus;
	  }

	  return !1;
	}

	function $e(a, b) {
	  return "textarea" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && "string" === typeof b.dangerouslySetInnerHTML.__html;
	}

	var af = be,
	    bf = ce,
	    cf = de;

	function df(a) {
	  for (a = a.nextSibling; a && 1 !== a.nodeType && 3 !== a.nodeType;) a = a.nextSibling;

	  return a;
	}

	function ef(a) {
	  for (a = a.firstChild; a && 1 !== a.nodeType && 3 !== a.nodeType;) a = a.nextSibling;

	  return a;
	}
	var ff = [],
	    gf = -1;

	function hf(a) {
	  return {
	    current: a
	  };
	}

	function M$1(a) {
	  0 > gf || (a.current = ff[gf], ff[gf] = null, gf--);
	}

	function N$1(a, b) {
	  gf++;
	  ff[gf] = a.current;
	  a.current = b;
	}

	var jf = hf(emptyObject_1),
	    O$1 = hf(!1),
	    kf = emptyObject_1;

	function lf(a) {
	  return mf(a) ? kf : jf.current;
	}

	function nf(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return emptyObject_1;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	      f;

	  for (f in c) e[f] = b[f];

	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}

	function mf(a) {
	  return 2 === a.tag && null != a.type.childContextTypes;
	}

	function of(a) {
	  mf(a) && (M$1(O$1, a), M$1(jf, a));
	}

	function pf(a) {
	  M$1(O$1, a);
	  M$1(jf, a);
	}

	function qf(a, b, c) {
	  jf.current !== emptyObject_1 ? A$1("168") : void 0;
	  N$1(jf, b, a);
	  N$1(O$1, c, a);
	}

	function rf(a, b) {
	  var c = a.stateNode,
	      d = a.type.childContextTypes;
	  if ("function" !== typeof c.getChildContext) return b;
	  c = c.getChildContext();

	  for (var e in c) e in d ? void 0 : A$1("108", tc(a) || "Unknown", e);

	  return objectAssign({}, b, c);
	}

	function sf(a) {
	  if (!mf(a)) return !1;
	  var b = a.stateNode;
	  b = b && b.__reactInternalMemoizedMergedChildContext || emptyObject_1;
	  kf = jf.current;
	  N$1(jf, b, a);
	  N$1(O$1, O$1.current, a);
	  return !0;
	}

	function tf(a, b) {
	  var c = a.stateNode;
	  c ? void 0 : A$1("169");

	  if (b) {
	    var d = rf(a, kf);
	    c.__reactInternalMemoizedMergedChildContext = d;
	    M$1(O$1, a);
	    M$1(jf, a);
	    N$1(jf, d, a);
	  } else M$1(O$1, a);

	  N$1(O$1, b, a);
	}

	function uf(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.effectTag = 0;
	  this.lastEffect = this.firstEffect = this.nextEffect = null;
	  this.expirationTime = 0;
	  this.alternate = null;
	}

	function vf(a, b, c) {
	  var d = a.alternate;
	  null === d ? (d = new uf(a.tag, b, a.key, a.mode), d.type = a.type, d.stateNode = a.stateNode, d.alternate = a, a.alternate = d) : (d.pendingProps = b, d.effectTag = 0, d.nextEffect = null, d.firstEffect = null, d.lastEffect = null);
	  d.expirationTime = c;
	  d.child = a.child;
	  d.memoizedProps = a.memoizedProps;
	  d.memoizedState = a.memoizedState;
	  d.updateQueue = a.updateQueue;
	  d.sibling = a.sibling;
	  d.index = a.index;
	  d.ref = a.ref;
	  return d;
	}

	function wf(a, b, c) {
	  var d = a.type,
	      e = a.key;
	  a = a.props;
	  if ("function" === typeof d) var f = d.prototype && d.prototype.isReactComponent ? 2 : 0;else if ("string" === typeof d) f = 5;else switch (d) {
	    case hc:
	      return xf(a.children, b, c, e);

	    case oc:
	      f = 11;
	      b |= 3;
	      break;

	    case ic:
	      f = 11;
	      b |= 2;
	      break;

	    case jc:
	      return d = new uf(15, a, e, b | 4), d.type = jc, d.expirationTime = c, d;

	    case qc:
	      f = 16;
	      b |= 2;
	      break;

	    default:
	      a: {
	        switch ("object" === typeof d && null !== d ? d.$$typeof : null) {
	          case mc:
	            f = 13;
	            break a;

	          case nc:
	            f = 12;
	            break a;

	          case pc:
	            f = 14;
	            break a;

	          default:
	            A$1("130", null == d ? d : typeof d, "");
	        }

	        f = void 0;
	      }

	  }
	  b = new uf(f, a, e, b);
	  b.type = d;
	  b.expirationTime = c;
	  return b;
	}

	function xf(a, b, c, d) {
	  a = new uf(10, a, d, b);
	  a.expirationTime = c;
	  return a;
	}

	function yf(a, b, c) {
	  a = new uf(6, a, null, b);
	  a.expirationTime = c;
	  return a;
	}

	function zf(a, b, c) {
	  b = new uf(4, null !== a.children ? a.children : [], a.key, b);
	  b.expirationTime = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}

	function Af(a, b, c) {
	  b = new uf(3, null, null, b ? 3 : 0);
	  a = {
	    current: b,
	    containerInfo: a,
	    pendingChildren: null,
	    earliestPendingTime: 0,
	    latestPendingTime: 0,
	    earliestSuspendedTime: 0,
	    latestSuspendedTime: 0,
	    latestPingedTime: 0,
	    pendingCommitExpirationTime: 0,
	    finishedWork: null,
	    context: null,
	    pendingContext: null,
	    hydrate: c,
	    remainingExpirationTime: 0,
	    firstBatch: null,
	    nextScheduledRoot: null
	  };
	  return b.stateNode = a;
	}

	var Bf = null,
	    Cf = null;

	function Df(a) {
	  return function (b) {
	    try {
	      return a(b);
	    } catch (c) {}
	  };
	}

	function Ef(a) {
	  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
	  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (b.isDisabled || !b.supportsFiber) return !0;

	  try {
	    var c = b.inject(a);
	    Bf = Df(function (a) {
	      return b.onCommitFiberRoot(c, a);
	    });
	    Cf = Df(function (a) {
	      return b.onCommitFiberUnmount(c, a);
	    });
	  } catch (d) {}

	  return !0;
	}

	function Ff(a) {
	  "function" === typeof Bf && Bf(a);
	}

	function Gf(a) {
	  "function" === typeof Cf && Cf(a);
	}

	var Hf = !1;

	function If(a) {
	  return {
	    expirationTime: 0,
	    baseState: a,
	    firstUpdate: null,
	    lastUpdate: null,
	    firstCapturedUpdate: null,
	    lastCapturedUpdate: null,
	    firstEffect: null,
	    lastEffect: null,
	    firstCapturedEffect: null,
	    lastCapturedEffect: null
	  };
	}

	function Jf(a) {
	  return {
	    expirationTime: a.expirationTime,
	    baseState: a.baseState,
	    firstUpdate: a.firstUpdate,
	    lastUpdate: a.lastUpdate,
	    firstCapturedUpdate: null,
	    lastCapturedUpdate: null,
	    firstEffect: null,
	    lastEffect: null,
	    firstCapturedEffect: null,
	    lastCapturedEffect: null
	  };
	}

	function Kf(a) {
	  return {
	    expirationTime: a,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null,
	    nextEffect: null
	  };
	}

	function Lf(a, b, c) {
	  null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
	  if (0 === a.expirationTime || a.expirationTime > c) a.expirationTime = c;
	}

	function Mf(a, b, c) {
	  var d = a.alternate;

	  if (null === d) {
	    var e = a.updateQueue;
	    var f = null;
	    null === e && (e = a.updateQueue = If(a.memoizedState));
	  } else e = a.updateQueue, f = d.updateQueue, null === e ? null === f ? (e = a.updateQueue = If(a.memoizedState), f = d.updateQueue = If(d.memoizedState)) : e = a.updateQueue = Jf(f) : null === f && (f = d.updateQueue = Jf(e));

	  null === f || e === f ? Lf(e, b, c) : null === e.lastUpdate || null === f.lastUpdate ? (Lf(e, b, c), Lf(f, b, c)) : (Lf(e, b, c), f.lastUpdate = b);
	}

	function Nf(a, b, c) {
	  var d = a.updateQueue;
	  d = null === d ? a.updateQueue = If(a.memoizedState) : Of(a, d);
	  null === d.lastCapturedUpdate ? d.firstCapturedUpdate = d.lastCapturedUpdate = b : (d.lastCapturedUpdate.next = b, d.lastCapturedUpdate = b);
	  if (0 === d.expirationTime || d.expirationTime > c) d.expirationTime = c;
	}

	function Of(a, b) {
	  var c = a.alternate;
	  null !== c && b === c.updateQueue && (b = a.updateQueue = Jf(b));
	  return b;
	}

	function Pf(a, b, c, d, e, f) {
	  switch (c.tag) {
	    case 1:
	      return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;

	    case 3:
	      a.effectTag = a.effectTag & -1025 | 64;

	    case 0:
	      a = c.payload;
	      e = "function" === typeof a ? a.call(f, d, e) : a;
	      if (null === e || void 0 === e) break;
	      return objectAssign({}, d, e);

	    case 2:
	      Hf = !0;
	  }

	  return d;
	}

	function Qf(a, b, c, d, e) {
	  Hf = !1;

	  if (!(0 === b.expirationTime || b.expirationTime > e)) {
	    b = Of(a, b);

	    for (var f = b.baseState, g = null, h = 0, k = b.firstUpdate, n = f; null !== k;) {
	      var r = k.expirationTime;

	      if (r > e) {
	        if (null === g && (g = k, f = n), 0 === h || h > r) h = r;
	      } else n = Pf(a, b, k, n, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = k : (b.lastEffect.nextEffect = k, b.lastEffect = k));

	      k = k.next;
	    }

	    r = null;

	    for (k = b.firstCapturedUpdate; null !== k;) {
	      var w = k.expirationTime;

	      if (w > e) {
	        if (null === r && (r = k, null === g && (f = n)), 0 === h || h > w) h = w;
	      } else n = Pf(a, b, k, n, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = k : (b.lastCapturedEffect.nextEffect = k, b.lastCapturedEffect = k));

	      k = k.next;
	    }

	    null === g && (b.lastUpdate = null);
	    null === r ? b.lastCapturedUpdate = null : a.effectTag |= 32;
	    null === g && null === r && (f = n);
	    b.baseState = f;
	    b.firstUpdate = g;
	    b.firstCapturedUpdate = r;
	    b.expirationTime = h;
	    a.memoizedState = n;
	  }
	}

	function Rf(a, b) {
	  "function" !== typeof a ? A$1("191", a) : void 0;
	  a.call(b);
	}

	function Sf(a, b, c) {
	  null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
	  a = b.firstEffect;

	  for (b.firstEffect = b.lastEffect = null; null !== a;) {
	    var d = a.callback;
	    null !== d && (a.callback = null, Rf(d, c));
	    a = a.nextEffect;
	  }

	  a = b.firstCapturedEffect;

	  for (b.firstCapturedEffect = b.lastCapturedEffect = null; null !== a;) b = a.callback, null !== b && (a.callback = null, Rf(b, c)), a = a.nextEffect;
	}

	function Tf(a, b) {
	  return {
	    value: a,
	    source: b,
	    stack: vc(b)
	  };
	}

	var Uf = hf(null),
	    Vf = hf(null),
	    Wf = hf(0);

	function Xf(a) {
	  var b = a.type._context;
	  N$1(Wf, b._changedBits, a);
	  N$1(Vf, b._currentValue, a);
	  N$1(Uf, a, a);
	  b._currentValue = a.pendingProps.value;
	  b._changedBits = a.stateNode;
	}

	function Yf(a) {
	  var b = Wf.current,
	      c = Vf.current;
	  M$1(Uf, a);
	  M$1(Vf, a);
	  M$1(Wf, a);
	  a = a.type._context;
	  a._currentValue = c;
	  a._changedBits = b;
	}

	var Zf = {},
	    $f = hf(Zf),
	    ag = hf(Zf),
	    bg = hf(Zf);

	function cg(a) {
	  a === Zf ? A$1("174") : void 0;
	  return a;
	}

	function dg(a, b) {
	  N$1(bg, b, a);
	  N$1(ag, a, a);
	  N$1($f, Zf, a);
	  var c = b.nodeType;

	  switch (c) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : De(null, "");
	      break;

	    default:
	      c = 8 === c ? b.parentNode : b, b = c.namespaceURI || null, c = c.tagName, b = De(b, c);
	  }

	  M$1($f, a);
	  N$1($f, b, a);
	}

	function eg(a) {
	  M$1($f, a);
	  M$1(ag, a);
	  M$1(bg, a);
	}

	function fg(a) {
	  ag.current === a && (M$1($f, a), M$1(ag, a));
	}

	function hg(a, b, c) {
	  var d = a.memoizedState;
	  b = b(c, d);
	  d = null === b || void 0 === b ? d : objectAssign({}, d, b);
	  a.memoizedState = d;
	  a = a.updateQueue;
	  null !== a && 0 === a.expirationTime && (a.baseState = d);
	}

	var lg = {
	  isMounted: function (a) {
	    return (a = a._reactInternalFiber) ? 2 === id(a) : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternalFiber;
	    var d = ig();
	    d = jg(d, a);
	    var e = Kf(d);
	    e.payload = b;
	    void 0 !== c && null !== c && (e.callback = c);
	    Mf(a, e, d);
	    kg(a, d);
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternalFiber;
	    var d = ig();
	    d = jg(d, a);
	    var e = Kf(d);
	    e.tag = 1;
	    e.payload = b;
	    void 0 !== c && null !== c && (e.callback = c);
	    Mf(a, e, d);
	    kg(a, d);
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternalFiber;
	    var c = ig();
	    c = jg(c, a);
	    var d = Kf(c);
	    d.tag = 2;
	    void 0 !== b && null !== b && (d.callback = b);
	    Mf(a, d, c);
	    kg(a, c);
	  }
	};

	function mg(a, b, c, d, e, f) {
	  var g = a.stateNode;
	  a = a.type;
	  return "function" === typeof g.shouldComponentUpdate ? g.shouldComponentUpdate(c, e, f) : a.prototype && a.prototype.isPureReactComponent ? !shallowEqual_1(b, c) || !shallowEqual_1(d, e) : !0;
	}

	function ng(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && lg.enqueueReplaceState(b, b.state, null);
	}

	function og(a, b) {
	  var c = a.type,
	      d = a.stateNode,
	      e = a.pendingProps,
	      f = lf(a);
	  d.props = e;
	  d.state = a.memoizedState;
	  d.refs = emptyObject_1;
	  d.context = nf(a, f);
	  f = a.updateQueue;
	  null !== f && (Qf(a, f, e, d, b), d.state = a.memoizedState);
	  f = a.type.getDerivedStateFromProps;
	  "function" === typeof f && (hg(a, f, e), d.state = a.memoizedState);
	  "function" === typeof c.getDerivedStateFromProps || "function" === typeof d.getSnapshotBeforeUpdate || "function" !== typeof d.UNSAFE_componentWillMount && "function" !== typeof d.componentWillMount || (c = d.state, "function" === typeof d.componentWillMount && d.componentWillMount(), "function" === typeof d.UNSAFE_componentWillMount && d.UNSAFE_componentWillMount(), c !== d.state && lg.enqueueReplaceState(d, d.state, null), f = a.updateQueue, null !== f && (Qf(a, f, e, d, b), d.state = a.memoizedState));
	  "function" === typeof d.componentDidMount && (a.effectTag |= 4);
	}

	var pg = Array.isArray;

	function qg(a, b, c) {
	  a = c.ref;

	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;
	      var d = void 0;
	      c && (2 !== c.tag ? A$1("110") : void 0, d = c.stateNode);
	      d ? void 0 : A$1("147", a);
	      var e = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

	      b = function (a) {
	        var b = d.refs === emptyObject_1 ? d.refs = {} : d.refs;
	        null === a ? delete b[e] : b[e] = a;
	      };

	      b._stringRef = e;
	      return b;
	    }

	    "string" !== typeof a ? A$1("148") : void 0;
	    c._owner ? void 0 : A$1("254", a);
	  }

	  return a;
	}

	function rg(a, b) {
	  "textarea" !== a.type && A$1("31", "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
	}

	function sg(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.lastEffect;
	      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
	      c.nextEffect = null;
	      c.effectTag = 8;
	    }
	  }

	  function c(c, d) {
	    if (!a) return null;

	    for (; null !== d;) b(c, d), d = d.sibling;

	    return null;
	  }

	  function d(a, b) {
	    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;

	    return a;
	  }

	  function e(a, b, c) {
	    a = vf(a, b, c);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }

	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
	    b.effectTag = 2;
	    return c;
	  }

	  function g(b) {
	    a && null === b.alternate && (b.effectTag = 2);
	    return b;
	  }

	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = yf(c, a.mode, d), b.return = a, b;
	    b = e(b, c, d);
	    b.return = a;
	    return b;
	  }

	  function k(a, b, c, d) {
	    if (null !== b && b.type === c.type) return d = e(b, c.props, d), d.ref = qg(a, b, c), d.return = a, d;
	    d = wf(c, a.mode, d);
	    d.ref = qg(a, b, c);
	    d.return = a;
	    return d;
	  }

	  function n(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zf(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || [], d);
	    b.return = a;
	    return b;
	  }

	  function r(a, b, c, d, f) {
	    if (null === b || 10 !== b.tag) return b = xf(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c, d);
	    b.return = a;
	    return b;
	  }

	  function w(a, b, c) {
	    if ("string" === typeof b || "number" === typeof b) return b = yf("" + b, a.mode, c), b.return = a, b;

	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case fc:
	          return c = wf(b, a.mode, c), c.ref = qg(a, null, b), c.return = a, c;

	        case gc:
	          return b = zf(b, a.mode, c), b.return = a, b;
	      }

	      if (pg(b) || sc(b)) return b = xf(b, a.mode, c, null), b.return = a, b;
	      rg(a, b);
	    }

	    return null;
	  }

	  function P(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case fc:
	          return c.key === e ? c.type === hc ? r(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

	        case gc:
	          return c.key === e ? n(a, b, c, d) : null;
	      }

	      if (pg(c) || sc(c)) return null !== e ? null : r(a, b, c, d, null);
	      rg(a, c);
	    }

	    return null;
	  }

	  function kc(a, b, c, d, e) {
	    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case fc:
	          return a = a.get(null === d.key ? c : d.key) || null, d.type === hc ? r(b, a, d.props.children, e, d.key) : k(b, a, d, e);

	        case gc:
	          return a = a.get(null === d.key ? c : d.key) || null, n(b, a, d, e);
	      }

	      if (pg(d) || sc(d)) return a = a.get(c) || null, r(b, a, d, e, null);
	      rg(b, d);
	    }

	    return null;
	  }

	  function Hd(e, g, h, k) {
	    for (var u = null, x = null, t = g, q = g = 0, n = null; null !== t && q < h.length; q++) {
	      t.index > q ? (n = t, t = null) : n = t.sibling;
	      var l = P(e, t, h[q], k);

	      if (null === l) {
	        null === t && (t = n);
	        break;
	      }

	      a && t && null === l.alternate && b(e, t);
	      g = f(l, g, q);
	      null === x ? u = l : x.sibling = l;
	      x = l;
	      t = n;
	    }

	    if (q === h.length) return c(e, t), u;

	    if (null === t) {
	      for (; q < h.length; q++) if (t = w(e, h[q], k)) g = f(t, g, q), null === x ? u = t : x.sibling = t, x = t;

	      return u;
	    }

	    for (t = d(e, t); q < h.length; q++) if (n = kc(t, e, q, h[q], k)) a && null !== n.alternate && t.delete(null === n.key ? q : n.key), g = f(n, g, q), null === x ? u = n : x.sibling = n, x = n;

	    a && t.forEach(function (a) {
	      return b(e, a);
	    });
	    return u;
	  }

	  function E(e, g, h, k) {
	    var t = sc(h);
	    "function" !== typeof t ? A$1("150") : void 0;
	    h = t.call(h);
	    null == h ? A$1("151") : void 0;

	    for (var u = t = null, n = g, x = g = 0, y = null, l = h.next(); null !== n && !l.done; x++, l = h.next()) {
	      n.index > x ? (y = n, n = null) : y = n.sibling;
	      var r = P(e, n, l.value, k);

	      if (null === r) {
	        n || (n = y);
	        break;
	      }

	      a && n && null === r.alternate && b(e, n);
	      g = f(r, g, x);
	      null === u ? t = r : u.sibling = r;
	      u = r;
	      n = y;
	    }

	    if (l.done) return c(e, n), t;

	    if (null === n) {
	      for (; !l.done; x++, l = h.next()) l = w(e, l.value, k), null !== l && (g = f(l, g, x), null === u ? t = l : u.sibling = l, u = l);

	      return t;
	    }

	    for (n = d(e, n); !l.done; x++, l = h.next()) l = kc(n, e, x, l.value, k), null !== l && (a && null !== l.alternate && n.delete(null === l.key ? x : l.key), g = f(l, g, x), null === u ? t = l : u.sibling = l, u = l);

	    a && n.forEach(function (a) {
	      return b(e, a);
	    });
	    return t;
	  }

	  return function (a, d, f, h) {
	    "object" === typeof f && null !== f && f.type === hc && null === f.key && (f = f.props.children);
	    var k = "object" === typeof f && null !== f;
	    if (k) switch (f.$$typeof) {
	      case fc:
	        a: {
	          var n = f.key;

	          for (k = d; null !== k;) {
	            if (k.key === n) {
	              if (10 === k.tag ? f.type === hc : k.type === f.type) {
	                c(a, k.sibling);
	                d = e(k, f.type === hc ? f.props.children : f.props, h);
	                d.ref = qg(a, k, f);
	                d.return = a;
	                a = d;
	                break a;
	              } else {
	                c(a, k);
	                break;
	              }
	            } else b(a, k);
	            k = k.sibling;
	          }

	          f.type === hc ? (d = xf(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = wf(f, a.mode, h), h.ref = qg(a, d, f), h.return = a, a = h);
	        }

	        return g(a);

	      case gc:
	        a: {
	          for (k = f.key; null !== d;) {
	            if (d.key === k) {
	              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                c(a, d.sibling);
	                d = e(d, f.children || [], h);
	                d.return = a;
	                a = d;
	                break a;
	              } else {
	                c(a, d);
	                break;
	              }
	            } else b(a, d);
	            d = d.sibling;
	          }

	          d = zf(f, a.mode, h);
	          d.return = a;
	          a = d;
	        }

	        return g(a);
	    }
	    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d.return = a, a = d) : (c(a, d), d = yf(f, a.mode, h), d.return = a, a = d), g(a);
	    if (pg(f)) return Hd(a, d, f, h);
	    if (sc(f)) return E(a, d, f, h);
	    k && rg(a, f);
	    if ("undefined" === typeof f) switch (a.tag) {
	      case 2:
	      case 1:
	        h = a.type, A$1("152", h.displayName || h.name || "Component");
	    }
	    return c(a, d);
	  };
	}

	var tg = sg(!0),
	    ug = sg(!1),
	    vg = null,
	    wg = null,
	    xg = !1;

	function yg(a, b) {
	  var c = new uf(5, null, null, 0);
	  c.type = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  c.effectTag = 8;
	  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
	}

	function zg(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, !0) : !1;

	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

	    default:
	      return !1;
	  }
	}

	function Ag(a) {
	  if (xg) {
	    var b = wg;

	    if (b) {
	      var c = b;

	      if (!zg(a, b)) {
	        b = df(c);

	        if (!b || !zg(a, b)) {
	          a.effectTag |= 2;
	          xg = !1;
	          vg = a;
	          return;
	        }

	        yg(vg, c);
	      }

	      vg = a;
	      wg = ef(b);
	    } else a.effectTag |= 2, xg = !1, vg = a;
	  }
	}

	function Bg(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag;) a = a.return;

	  vg = a;
	}

	function Cg(a) {
	  if (a !== vg) return !1;
	  if (!xg) return Bg(a), xg = !0, !1;
	  var b = a.type;
	  if (5 !== a.tag || "head" !== b && "body" !== b && !$e(b, a.memoizedProps)) for (b = wg; b;) yg(a, b), b = df(b);
	  Bg(a);
	  wg = vg ? df(a.stateNode) : null;
	  return !0;
	}

	function Dg() {
	  wg = vg = null;
	  xg = !1;
	}

	function Q$1(a, b, c) {
	  Eg(a, b, c, b.expirationTime);
	}

	function Eg(a, b, c, d) {
	  b.child = null === a ? ug(b, null, c, d) : tg(b, a.child, c, d);
	}

	function Fg(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
	}

	function Gg(a, b, c, d, e) {
	  Fg(a, b);
	  var f = 0 !== (b.effectTag & 64);
	  if (!c && !f) return d && tf(b, !1), R$1(a, b);
	  c = b.stateNode;
	  ec.current = b;
	  var g = f ? null : c.render();
	  b.effectTag |= 1;
	  f && (Eg(a, b, null, e), b.child = null);
	  Eg(a, b, g, e);
	  b.memoizedState = c.state;
	  b.memoizedProps = c.props;
	  d && tf(b, !0);
	  return b.child;
	}

	function Hg(a) {
	  var b = a.stateNode;
	  b.pendingContext ? qf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && qf(a, b.context, !1);
	  dg(a, b.containerInfo);
	}

	function Ig(a, b, c, d) {
	  var e = a.child;
	  null !== e && (e.return = a);

	  for (; null !== e;) {
	    switch (e.tag) {
	      case 12:
	        var f = e.stateNode | 0;

	        if (e.type === b && 0 !== (f & c)) {
	          for (f = e; null !== f;) {
	            var g = f.alternate;
	            if (0 === f.expirationTime || f.expirationTime > d) f.expirationTime = d, null !== g && (0 === g.expirationTime || g.expirationTime > d) && (g.expirationTime = d);else if (null !== g && (0 === g.expirationTime || g.expirationTime > d)) g.expirationTime = d;else break;
	            f = f.return;
	          }

	          f = null;
	        } else f = e.child;

	        break;

	      case 13:
	        f = e.type === a.type ? null : e.child;
	        break;

	      default:
	        f = e.child;
	    }

	    if (null !== f) f.return = e;else for (f = e; null !== f;) {
	      if (f === a) {
	        f = null;
	        break;
	      }

	      e = f.sibling;

	      if (null !== e) {
	        e.return = f.return;
	        f = e;
	        break;
	      }

	      f = f.return;
	    }
	    e = f;
	  }
	}

	function Jg(a, b, c) {
	  var d = b.type._context,
	      e = b.pendingProps,
	      f = b.memoizedProps,
	      g = !0;
	  if (O$1.current) g = !1;else if (f === e) return b.stateNode = 0, Xf(b), R$1(a, b);
	  var h = e.value;
	  b.memoizedProps = e;
	  if (null === f) h = 1073741823;else if (f.value === e.value) {
	    if (f.children === e.children && g) return b.stateNode = 0, Xf(b), R$1(a, b);
	    h = 0;
	  } else {
	    var k = f.value;

	    if (k === h && (0 !== k || 1 / k === 1 / h) || k !== k && h !== h) {
	      if (f.children === e.children && g) return b.stateNode = 0, Xf(b), R$1(a, b);
	      h = 0;
	    } else if (h = "function" === typeof d._calculateChangedBits ? d._calculateChangedBits(k, h) : 1073741823, h |= 0, 0 === h) {
	      if (f.children === e.children && g) return b.stateNode = 0, Xf(b), R$1(a, b);
	    } else Ig(b, d, h, c);
	  }
	  b.stateNode = h;
	  Xf(b);
	  Q$1(a, b, e.children);
	  return b.child;
	}

	function R$1(a, b) {
	  null !== a && b.child !== a.child ? A$1("153") : void 0;

	  if (null !== b.child) {
	    a = b.child;
	    var c = vf(a, a.pendingProps, a.expirationTime);
	    b.child = c;

	    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = vf(a, a.pendingProps, a.expirationTime), c.return = b;

	    c.sibling = null;
	  }

	  return b.child;
	}

	function Kg(a, b, c) {
	  if (0 === b.expirationTime || b.expirationTime > c) {
	    switch (b.tag) {
	      case 3:
	        Hg(b);
	        break;

	      case 2:
	        sf(b);
	        break;

	      case 4:
	        dg(b, b.stateNode.containerInfo);
	        break;

	      case 13:
	        Xf(b);
	    }

	    return null;
	  }

	  switch (b.tag) {
	    case 0:
	      null !== a ? A$1("155") : void 0;
	      var d = b.type,
	          e = b.pendingProps,
	          f = lf(b);
	      f = nf(b, f);
	      d = d(e, f);
	      b.effectTag |= 1;
	      "object" === typeof d && null !== d && "function" === typeof d.render && void 0 === d.$$typeof ? (f = b.type, b.tag = 2, b.memoizedState = null !== d.state && void 0 !== d.state ? d.state : null, f = f.getDerivedStateFromProps, "function" === typeof f && hg(b, f, e), e = sf(b), d.updater = lg, b.stateNode = d, d._reactInternalFiber = b, og(b, c), a = Gg(a, b, !0, e, c)) : (b.tag = 1, Q$1(a, b, d), b.memoizedProps = e, a = b.child);
	      return a;

	    case 1:
	      return e = b.type, c = b.pendingProps, O$1.current || b.memoizedProps !== c ? (d = lf(b), d = nf(b, d), e = e(c, d), b.effectTag |= 1, Q$1(a, b, e), b.memoizedProps = c, a = b.child) : a = R$1(a, b), a;

	    case 2:
	      e = sf(b);
	      if (null === a) {
	        if (null === b.stateNode) {
	          var g = b.pendingProps,
	              h = b.type;
	          d = lf(b);
	          var k = 2 === b.tag && null != b.type.contextTypes;
	          f = k ? nf(b, d) : emptyObject_1;
	          g = new h(g, f);
	          b.memoizedState = null !== g.state && void 0 !== g.state ? g.state : null;
	          g.updater = lg;
	          b.stateNode = g;
	          g._reactInternalFiber = b;
	          k && (k = b.stateNode, k.__reactInternalMemoizedUnmaskedChildContext = d, k.__reactInternalMemoizedMaskedChildContext = f);
	          og(b, c);
	          d = !0;
	        } else {
	          h = b.type;
	          d = b.stateNode;
	          k = b.memoizedProps;
	          f = b.pendingProps;
	          d.props = k;
	          var n = d.context;
	          g = lf(b);
	          g = nf(b, g);
	          var r = h.getDerivedStateFromProps;
	          (h = "function" === typeof r || "function" === typeof d.getSnapshotBeforeUpdate) || "function" !== typeof d.UNSAFE_componentWillReceiveProps && "function" !== typeof d.componentWillReceiveProps || (k !== f || n !== g) && ng(b, d, f, g);
	          Hf = !1;
	          var w = b.memoizedState;
	          n = d.state = w;
	          var P = b.updateQueue;
	          null !== P && (Qf(b, P, f, d, c), n = b.memoizedState);
	          k !== f || w !== n || O$1.current || Hf ? ("function" === typeof r && (hg(b, r, f), n = b.memoizedState), (k = Hf || mg(b, k, f, w, n, g)) ? (h || "function" !== typeof d.UNSAFE_componentWillMount && "function" !== typeof d.componentWillMount || ("function" === typeof d.componentWillMount && d.componentWillMount(), "function" === typeof d.UNSAFE_componentWillMount && d.UNSAFE_componentWillMount()), "function" === typeof d.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof d.componentDidMount && (b.effectTag |= 4), b.memoizedProps = f, b.memoizedState = n), d.props = f, d.state = n, d.context = g, d = k) : ("function" === typeof d.componentDidMount && (b.effectTag |= 4), d = !1);
	        }
	      } else h = b.type, d = b.stateNode, f = b.memoizedProps, k = b.pendingProps, d.props = f, n = d.context, g = lf(b), g = nf(b, g), r = h.getDerivedStateFromProps, (h = "function" === typeof r || "function" === typeof d.getSnapshotBeforeUpdate) || "function" !== typeof d.UNSAFE_componentWillReceiveProps && "function" !== typeof d.componentWillReceiveProps || (f !== k || n !== g) && ng(b, d, k, g), Hf = !1, n = b.memoizedState, w = d.state = n, P = b.updateQueue, null !== P && (Qf(b, P, k, d, c), w = b.memoizedState), f !== k || n !== w || O$1.current || Hf ? ("function" === typeof r && (hg(b, r, k), w = b.memoizedState), (r = Hf || mg(b, f, k, n, w, g)) ? (h || "function" !== typeof d.UNSAFE_componentWillUpdate && "function" !== typeof d.componentWillUpdate || ("function" === typeof d.componentWillUpdate && d.componentWillUpdate(k, w, g), "function" === typeof d.UNSAFE_componentWillUpdate && d.UNSAFE_componentWillUpdate(k, w, g)), "function" === typeof d.componentDidUpdate && (b.effectTag |= 4), "function" === typeof d.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof d.componentDidUpdate || f === a.memoizedProps && n === a.memoizedState || (b.effectTag |= 4), "function" !== typeof d.getSnapshotBeforeUpdate || f === a.memoizedProps && n === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = k, b.memoizedState = w), d.props = k, d.state = w, d.context = g, d = r) : ("function" !== typeof d.componentDidUpdate || f === a.memoizedProps && n === a.memoizedState || (b.effectTag |= 4), "function" !== typeof d.getSnapshotBeforeUpdate || f === a.memoizedProps && n === a.memoizedState || (b.effectTag |= 256), d = !1);
	      return Gg(a, b, d, e, c);

	    case 3:
	      Hg(b);
	      e = b.updateQueue;
	      if (null !== e) {
	        if (d = b.memoizedState, d = null !== d ? d.element : null, Qf(b, e, b.pendingProps, null, c), e = b.memoizedState.element, e === d) Dg(), a = R$1(a, b);else {
	          d = b.stateNode;
	          if (d = (null === a || null === a.child) && d.hydrate) wg = ef(b.stateNode.containerInfo), vg = b, d = xg = !0;
	          d ? (b.effectTag |= 2, b.child = ug(b, null, e, c)) : (Dg(), Q$1(a, b, e));
	          a = b.child;
	        }
	      } else Dg(), a = R$1(a, b);
	      return a;

	    case 5:
	      a: {
	        cg(bg.current);
	        e = cg($f.current);
	        d = De(e, b.type);
	        e !== d && (N$1(ag, b, b), N$1($f, d, b));
	        null === a && Ag(b);
	        e = b.type;
	        k = b.memoizedProps;
	        d = b.pendingProps;
	        f = null !== a ? a.memoizedProps : null;

	        if (!O$1.current && k === d) {
	          if (k = b.mode & 1 && !!d.hidden) b.expirationTime = 1073741823;

	          if (!k || 1073741823 !== c) {
	            a = R$1(a, b);
	            break a;
	          }
	        }

	        k = d.children;
	        $e(e, d) ? k = null : f && $e(e, f) && (b.effectTag |= 16);
	        Fg(a, b);
	        1073741823 !== c && b.mode & 1 && d.hidden ? (b.expirationTime = 1073741823, b.memoizedProps = d, a = null) : (Q$1(a, b, k), b.memoizedProps = d, a = b.child);
	      }

	      return a;

	    case 6:
	      return null === a && Ag(b), b.memoizedProps = b.pendingProps, null;

	    case 16:
	      return null;

	    case 4:
	      return dg(b, b.stateNode.containerInfo), e = b.pendingProps, O$1.current || b.memoizedProps !== e ? (null === a ? b.child = tg(b, null, e, c) : Q$1(a, b, e), b.memoizedProps = e, a = b.child) : a = R$1(a, b), a;

	    case 14:
	      return e = b.type.render, c = b.pendingProps, d = b.ref, O$1.current || b.memoizedProps !== c || d !== (null !== a ? a.ref : null) ? (e = e(c, d), Q$1(a, b, e), b.memoizedProps = c, a = b.child) : a = R$1(a, b), a;

	    case 10:
	      return c = b.pendingProps, O$1.current || b.memoizedProps !== c ? (Q$1(a, b, c), b.memoizedProps = c, a = b.child) : a = R$1(a, b), a;

	    case 11:
	      return c = b.pendingProps.children, O$1.current || null !== c && b.memoizedProps !== c ? (Q$1(a, b, c), b.memoizedProps = c, a = b.child) : a = R$1(a, b), a;

	    case 15:
	      return c = b.pendingProps, b.memoizedProps === c ? a = R$1(a, b) : (Q$1(a, b, c.children), b.memoizedProps = c, a = b.child), a;

	    case 13:
	      return Jg(a, b, c);

	    case 12:
	      a: if (d = b.type, f = b.pendingProps, k = b.memoizedProps, e = d._currentValue, g = d._changedBits, O$1.current || 0 !== g || k !== f) {
	        b.memoizedProps = f;
	        h = f.unstable_observedBits;
	        if (void 0 === h || null === h) h = 1073741823;
	        b.stateNode = h;
	        if (0 !== (g & h)) Ig(b, d, g, c);else if (k === f) {
	          a = R$1(a, b);
	          break a;
	        }
	        c = f.children;
	        c = c(e);
	        b.effectTag |= 1;
	        Q$1(a, b, c);
	        a = b.child;
	      } else a = R$1(a, b);

	      return a;

	    default:
	      A$1("156");
	  }
	}

	function Lg(a) {
	  a.effectTag |= 4;
	}

	var Pg = void 0,
	    Qg = void 0,
	    Rg = void 0;

	Pg = function () {};

	Qg = function (a, b, c) {
	  (b.updateQueue = c) && Lg(b);
	};

	Rg = function (a, b, c, d) {
	  c !== d && Lg(b);
	};

	function Sg(a, b) {
	  var c = b.pendingProps;

	  switch (b.tag) {
	    case 1:
	      return null;

	    case 2:
	      return of(b), null;

	    case 3:
	      eg(b);
	      pf(b);
	      var d = b.stateNode;
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) Cg(b), b.effectTag &= -3;
	      Pg(b);
	      return null;

	    case 5:
	      fg(b);
	      d = cg(bg.current);
	      var e = b.type;

	      if (null !== a && null != b.stateNode) {
	        var f = a.memoizedProps,
	            g = b.stateNode,
	            h = cg($f.current);
	        g = Se(g, e, f, c, d);
	        Qg(a, b, g, e, f, c, d, h);
	        a.ref !== b.ref && (b.effectTag |= 128);
	      } else {
	        if (!c) return null === b.stateNode ? A$1("166") : void 0, null;
	        a = cg($f.current);
	        if (Cg(b)) c = b.stateNode, e = b.type, f = b.memoizedProps, c[C$1] = b, c[Ma] = f, d = Ue(c, e, f, a, d), b.updateQueue = d, null !== d && Lg(b);else {
	          a = Pe(e, c, d, a);
	          a[C$1] = b;
	          a[Ma] = c;

	          a: for (f = b.child; null !== f;) {
	            if (5 === f.tag || 6 === f.tag) a.appendChild(f.stateNode);else if (4 !== f.tag && null !== f.child) {
	              f.child.return = f;
	              f = f.child;
	              continue;
	            }
	            if (f === b) break;

	            for (; null === f.sibling;) {
	              if (null === f.return || f.return === b) break a;
	              f = f.return;
	            }

	            f.sibling.return = f.return;
	            f = f.sibling;
	          }

	          Re(a, e, c, d);
	          Ze(e, c) && Lg(b);
	          b.stateNode = a;
	        }
	        null !== b.ref && (b.effectTag |= 128);
	      }

	      return null;

	    case 6:
	      if (a && null != b.stateNode) Rg(a, b, a.memoizedProps, c);else {
	        if ("string" !== typeof c) return null === b.stateNode ? A$1("166") : void 0, null;
	        d = cg(bg.current);
	        cg($f.current);
	        Cg(b) ? (d = b.stateNode, c = b.memoizedProps, d[C$1] = b, Ve(d, c) && Lg(b)) : (d = Qe(c, d), d[C$1] = b, b.stateNode = d);
	      }
	      return null;

	    case 14:
	      return null;

	    case 16:
	      return null;

	    case 10:
	      return null;

	    case 11:
	      return null;

	    case 15:
	      return null;

	    case 4:
	      return eg(b), Pg(b), null;

	    case 13:
	      return Yf(b), null;

	    case 12:
	      return null;

	    case 0:
	      A$1("167");

	    default:
	      A$1("156");
	  }
	}

	function Tg(a, b) {
	  var c = b.source;
	  null === b.stack && null !== c && vc(c);
	  null !== c && tc(c);
	  b = b.value;
	  null !== a && 2 === a.tag && tc(a);

	  try {
	    b && b.suppressReactErrorLogging || console.error(b);
	  } catch (d) {
	    d && d.suppressReactErrorLogging || console.error(d);
	  }
	}

	function Ug(a) {
	  var b = a.ref;
	  if (null !== b) if ("function" === typeof b) try {
	    b(null);
	  } catch (c) {
	    Vg(a, c);
	  } else b.current = null;
	}

	function Wg(a) {
	  "function" === typeof Gf && Gf(a);

	  switch (a.tag) {
	    case 2:
	      Ug(a);
	      var b = a.stateNode;
	      if ("function" === typeof b.componentWillUnmount) try {
	        b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
	      } catch (c) {
	        Vg(a, c);
	      }
	      break;

	    case 5:
	      Ug(a);
	      break;

	    case 4:
	      Xg(a);
	  }
	}

	function Yg(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}

	function Zg(a) {
	  a: {
	    for (var b = a.return; null !== b;) {
	      if (Yg(b)) {
	        var c = b;
	        break a;
	      }

	      b = b.return;
	    }

	    A$1("160");
	    c = void 0;
	  }

	  var d = b = void 0;

	  switch (c.tag) {
	    case 5:
	      b = c.stateNode;
	      d = !1;
	      break;

	    case 3:
	      b = c.stateNode.containerInfo;
	      d = !0;
	      break;

	    case 4:
	      b = c.stateNode.containerInfo;
	      d = !0;
	      break;

	    default:
	      A$1("161");
	  }

	  c.effectTag & 16 && (Ge(b, ""), c.effectTag &= -17);

	  a: b: for (c = a;;) {
	    for (; null === c.sibling;) {
	      if (null === c.return || Yg(c.return)) {
	        c = null;
	        break a;
	      }

	      c = c.return;
	    }

	    c.sibling.return = c.return;

	    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag;) {
	      if (c.effectTag & 2) continue b;
	      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
	    }

	    if (!(c.effectTag & 2)) {
	      c = c.stateNode;
	      break a;
	    }
	  }

	  for (var e = a;;) {
	    if (5 === e.tag || 6 === e.tag) {
	      if (c) {
	        if (d) {
	          var f = b,
	              g = e.stateNode,
	              h = c;
	          8 === f.nodeType ? f.parentNode.insertBefore(g, h) : f.insertBefore(g, h);
	        } else b.insertBefore(e.stateNode, c);
	      } else d ? (f = b, g = e.stateNode, 8 === f.nodeType ? f.parentNode.insertBefore(g, f) : f.appendChild(g)) : b.appendChild(e.stateNode);
	    } else if (4 !== e.tag && null !== e.child) {
	      e.child.return = e;
	      e = e.child;
	      continue;
	    }
	    if (e === a) break;

	    for (; null === e.sibling;) {
	      if (null === e.return || e.return === a) return;
	      e = e.return;
	    }

	    e.sibling.return = e.return;
	    e = e.sibling;
	  }
	}

	function Xg(a) {
	  for (var b = a, c = !1, d = void 0, e = void 0;;) {
	    if (!c) {
	      c = b.return;

	      a: for (;;) {
	        null === c ? A$1("160") : void 0;

	        switch (c.tag) {
	          case 5:
	            d = c.stateNode;
	            e = !1;
	            break a;

	          case 3:
	            d = c.stateNode.containerInfo;
	            e = !0;
	            break a;

	          case 4:
	            d = c.stateNode.containerInfo;
	            e = !0;
	            break a;
	        }

	        c = c.return;
	      }

	      c = !0;
	    }

	    if (5 === b.tag || 6 === b.tag) {
	      a: for (var f = b, g = f;;) if (Wg(g), null !== g.child && 4 !== g.tag) g.child.return = g, g = g.child;else {
	        if (g === f) break;

	        for (; null === g.sibling;) {
	          if (null === g.return || g.return === f) break a;
	          g = g.return;
	        }

	        g.sibling.return = g.return;
	        g = g.sibling;
	      }

	      e ? (f = d, g = b.stateNode, 8 === f.nodeType ? f.parentNode.removeChild(g) : f.removeChild(g)) : d.removeChild(b.stateNode);
	    } else if (4 === b.tag ? d = b.stateNode.containerInfo : Wg(b), null !== b.child) {
	      b.child.return = b;
	      b = b.child;
	      continue;
	    }

	    if (b === a) break;

	    for (; null === b.sibling;) {
	      if (null === b.return || b.return === a) return;
	      b = b.return;
	      4 === b.tag && (c = !1);
	    }

	    b.sibling.return = b.return;
	    b = b.sibling;
	  }
	}

	function $g(a, b) {
	  switch (b.tag) {
	    case 2:
	      break;

	    case 5:
	      var c = b.stateNode;

	      if (null != c) {
	        var d = b.memoizedProps;
	        a = null !== a ? a.memoizedProps : d;
	        var e = b.type,
	            f = b.updateQueue;
	        b.updateQueue = null;
	        null !== f && (c[Ma] = d, Te(c, f, e, a, d));
	      }

	      break;

	    case 6:
	      null === b.stateNode ? A$1("162") : void 0;
	      b.stateNode.nodeValue = b.memoizedProps;
	      break;

	    case 3:
	      break;

	    case 15:
	      break;

	    case 16:
	      break;

	    default:
	      A$1("163");
	  }
	}

	function ah(a, b, c) {
	  c = Kf(c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;

	  c.callback = function () {
	    bh(d);
	    Tg(a, b);
	  };

	  return c;
	}

	function ch(a, b, c) {
	  c = Kf(c);
	  c.tag = 3;
	  var d = a.stateNode;
	  null !== d && "function" === typeof d.componentDidCatch && (c.callback = function () {
	    null === dh ? dh = new Set([this]) : dh.add(this);
	    var c = b.value,
	        d = b.stack;
	    Tg(a, b);
	    this.componentDidCatch(c, {
	      componentStack: null !== d ? d : ""
	    });
	  });
	  return c;
	}

	function eh(a, b, c, d, e, f) {
	  c.effectTag |= 512;
	  c.firstEffect = c.lastEffect = null;
	  d = Tf(d, c);
	  a = b;

	  do {
	    switch (a.tag) {
	      case 3:
	        a.effectTag |= 1024;
	        d = ah(a, d, f);
	        Nf(a, d, f);
	        return;

	      case 2:
	        if (b = d, c = a.stateNode, 0 === (a.effectTag & 64) && null !== c && "function" === typeof c.componentDidCatch && (null === dh || !dh.has(c))) {
	          a.effectTag |= 1024;
	          d = ch(a, b, f);
	          Nf(a, d, f);
	          return;
	        }

	    }

	    a = a.return;
	  } while (null !== a);
	}

	function fh(a) {
	  switch (a.tag) {
	    case 2:
	      of(a);
	      var b = a.effectTag;
	      return b & 1024 ? (a.effectTag = b & -1025 | 64, a) : null;

	    case 3:
	      return eg(a), pf(a), b = a.effectTag, b & 1024 ? (a.effectTag = b & -1025 | 64, a) : null;

	    case 5:
	      return fg(a), null;

	    case 16:
	      return b = a.effectTag, b & 1024 ? (a.effectTag = b & -1025 | 64, a) : null;

	    case 4:
	      return eg(a), null;

	    case 13:
	      return Yf(a), null;

	    default:
	      return null;
	  }
	}

	var gh = af(),
	    hh = 2,
	    ih = gh,
	    jh = 0,
	    kh = 0,
	    lh = !1,
	    S$1 = null,
	    mh = null,
	    T$1 = 0,
	    nh = -1,
	    oh = !1,
	    U$1 = null,
	    ph = !1,
	    qh = !1,
	    dh = null;

	function rh() {
	  if (null !== S$1) for (var a = S$1.return; null !== a;) {
	    var b = a;

	    switch (b.tag) {
	      case 2:
	        of(b);
	        break;

	      case 3:
	        eg(b);
	        pf(b);
	        break;

	      case 5:
	        fg(b);
	        break;

	      case 4:
	        eg(b);
	        break;

	      case 13:
	        Yf(b);
	    }

	    a = a.return;
	  }
	  mh = null;
	  T$1 = 0;
	  nh = -1;
	  oh = !1;
	  S$1 = null;
	  qh = !1;
	}

	function sh(a) {
	  for (;;) {
	    var b = a.alternate,
	        c = a.return,
	        d = a.sibling;

	    if (0 === (a.effectTag & 512)) {
	      b = Sg(b, a, T$1);
	      var e = a;

	      if (1073741823 === T$1 || 1073741823 !== e.expirationTime) {
	        var f = 0;

	        switch (e.tag) {
	          case 3:
	          case 2:
	            var g = e.updateQueue;
	            null !== g && (f = g.expirationTime);
	        }

	        for (g = e.child; null !== g;) 0 !== g.expirationTime && (0 === f || f > g.expirationTime) && (f = g.expirationTime), g = g.sibling;

	        e.expirationTime = f;
	      }

	      if (null !== b) return b;
	      null !== c && 0 === (c.effectTag & 512) && (null === c.firstEffect && (c.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = a.firstEffect), c.lastEffect = a.lastEffect), 1 < a.effectTag && (null !== c.lastEffect ? c.lastEffect.nextEffect = a : c.firstEffect = a, c.lastEffect = a));
	      if (null !== d) return d;
	      if (null !== c) a = c;else {
	        qh = !0;
	        break;
	      }
	    } else {
	      a = fh(a, oh, T$1);
	      if (null !== a) return a.effectTag &= 511, a;
	      null !== c && (c.firstEffect = c.lastEffect = null, c.effectTag |= 512);
	      if (null !== d) return d;
	      if (null !== c) a = c;else break;
	    }
	  }

	  return null;
	}

	function th(a) {
	  var b = Kg(a.alternate, a, T$1);
	  null === b && (b = sh(a));
	  ec.current = null;
	  return b;
	}

	function uh(a, b, c) {
	  lh ? A$1("243") : void 0;
	  lh = !0;
	  if (b !== T$1 || a !== mh || null === S$1) rh(), mh = a, T$1 = b, nh = -1, S$1 = vf(mh.current, null, T$1), a.pendingCommitExpirationTime = 0;
	  var d = !1;
	  oh = !c || T$1 <= hh;

	  do {
	    try {
	      if (c) for (; null !== S$1 && !vh();) S$1 = th(S$1);else for (; null !== S$1;) S$1 = th(S$1);
	    } catch (f) {
	      if (null === S$1) d = !0, bh(f);else {
	        null === S$1 ? A$1("271") : void 0;
	        c = S$1;
	        var e = c.return;

	        if (null === e) {
	          d = !0;
	          bh(f);
	          break;
	        }

	        eh(a, e, c, f, oh, T$1, ih);
	        S$1 = sh(c);
	      }
	    }

	    break;
	  } while (1);

	  lh = !1;
	  if (d) return null;

	  if (null === S$1) {
	    if (qh) return a.pendingCommitExpirationTime = b, a.current.alternate;
	    oh ? A$1("262") : void 0;
	    0 <= nh && setTimeout(function () {
	      var b = a.current.expirationTime;
	      0 !== b && (0 === a.remainingExpirationTime || a.remainingExpirationTime < b) && wh(a, b);
	    }, nh);
	    xh(a.current.expirationTime);
	  }

	  return null;
	}

	function Vg(a, b) {
	  var c;

	  a: {
	    lh && !ph ? A$1("263") : void 0;

	    for (c = a.return; null !== c;) {
	      switch (c.tag) {
	        case 2:
	          var d = c.stateNode;

	          if ("function" === typeof c.type.getDerivedStateFromCatch || "function" === typeof d.componentDidCatch && (null === dh || !dh.has(d))) {
	            a = Tf(b, a);
	            a = ch(c, a, 1);
	            Mf(c, a, 1);
	            kg(c, 1);
	            c = void 0;
	            break a;
	          }

	          break;

	        case 3:
	          a = Tf(b, a);
	          a = ah(c, a, 1);
	          Mf(c, a, 1);
	          kg(c, 1);
	          c = void 0;
	          break a;
	      }

	      c = c.return;
	    }

	    3 === a.tag && (c = Tf(b, a), c = ah(a, c, 1), Mf(a, c, 1), kg(a, 1));
	    c = void 0;
	  }

	  return c;
	}

	function yh() {
	  var a = 2 + 25 * (((ig() - 2 + 500) / 25 | 0) + 1);
	  a <= jh && (a = jh + 1);
	  return jh = a;
	}

	function jg(a, b) {
	  a = 0 !== kh ? kh : lh ? ph ? 1 : T$1 : b.mode & 1 ? zh ? 2 + 10 * (((a - 2 + 15) / 10 | 0) + 1) : 2 + 25 * (((a - 2 + 500) / 25 | 0) + 1) : 1;
	  zh && (0 === Ah || a > Ah) && (Ah = a);
	  return a;
	}

	function kg(a, b) {
	  for (; null !== a;) {
	    if (0 === a.expirationTime || a.expirationTime > b) a.expirationTime = b;
	    null !== a.alternate && (0 === a.alternate.expirationTime || a.alternate.expirationTime > b) && (a.alternate.expirationTime = b);
	    if (null === a.return) if (3 === a.tag) {
	      var c = a.stateNode;
	      !lh && 0 !== T$1 && b < T$1 && rh();
	      var d = c.current.expirationTime;
	      lh && !ph && mh === c || wh(c, d);
	      Bh > Ch && A$1("185");
	    } else break;
	    a = a.return;
	  }
	}

	function ig() {
	  ih = af() - gh;
	  return hh = (ih / 10 | 0) + 2;
	}

	function Dh(a) {
	  var b = kh;
	  kh = 2 + 25 * (((ig() - 2 + 500) / 25 | 0) + 1);

	  try {
	    return a();
	  } finally {
	    kh = b;
	  }
	}

	function Eh(a, b, c, d, e) {
	  var f = kh;
	  kh = 1;

	  try {
	    return a(b, c, d, e);
	  } finally {
	    kh = f;
	  }
	}

	var Fh = null,
	    V$1 = null,
	    Gh = 0,
	    Hh = -1,
	    W$1 = !1,
	    X$1 = null,
	    Y$1 = 0,
	    Ah = 0,
	    Ih = !1,
	    Jh = !1,
	    Kh = null,
	    Lh = null,
	    Z$1 = !1,
	    Mh = !1,
	    zh = !1,
	    Nh = null,
	    Ch = 1E3,
	    Bh = 0,
	    Oh = 1;

	function Ph(a) {
	  if (0 !== Gh) {
	    if (a > Gh) return;
	    cf(Hh);
	  }

	  var b = af() - gh;
	  Gh = a;
	  Hh = bf(Qh, {
	    timeout: 10 * (a - 2) - b
	  });
	}

	function wh(a, b) {
	  if (null === a.nextScheduledRoot) a.remainingExpirationTime = b, null === V$1 ? (Fh = V$1 = a, a.nextScheduledRoot = a) : (V$1 = V$1.nextScheduledRoot = a, V$1.nextScheduledRoot = Fh);else {
	    var c = a.remainingExpirationTime;
	    if (0 === c || b < c) a.remainingExpirationTime = b;
	  }
	  W$1 || (Z$1 ? Mh && (X$1 = a, Y$1 = 1, Rh(a, 1, !1)) : 1 === b ? Sh() : Ph(b));
	}

	function Th() {
	  var a = 0,
	      b = null;
	  if (null !== V$1) for (var c = V$1, d = Fh; null !== d;) {
	    var e = d.remainingExpirationTime;

	    if (0 === e) {
	      null === c || null === V$1 ? A$1("244") : void 0;

	      if (d === d.nextScheduledRoot) {
	        Fh = V$1 = d.nextScheduledRoot = null;
	        break;
	      } else if (d === Fh) Fh = e = d.nextScheduledRoot, V$1.nextScheduledRoot = e, d.nextScheduledRoot = null;else if (d === V$1) {
	        V$1 = c;
	        V$1.nextScheduledRoot = Fh;
	        d.nextScheduledRoot = null;
	        break;
	      } else c.nextScheduledRoot = d.nextScheduledRoot, d.nextScheduledRoot = null;

	      d = c.nextScheduledRoot;
	    } else {
	      if (0 === a || e < a) a = e, b = d;
	      if (d === V$1) break;
	      c = d;
	      d = d.nextScheduledRoot;
	    }
	  }
	  c = X$1;
	  null !== c && c === b && 1 === a ? Bh++ : Bh = 0;
	  X$1 = b;
	  Y$1 = a;
	}

	function Qh(a) {
	  Uh(0, !0, a);
	}

	function Sh() {
	  Uh(1, !1, null);
	}

	function Uh(a, b, c) {
	  Lh = c;
	  Th();
	  if (b) for (; null !== X$1 && 0 !== Y$1 && (0 === a || a >= Y$1) && (!Ih || ig() >= Y$1);) ig(), Rh(X$1, Y$1, !Ih), Th();else for (; null !== X$1 && 0 !== Y$1 && (0 === a || a >= Y$1);) Rh(X$1, Y$1, !1), Th();
	  null !== Lh && (Gh = 0, Hh = -1);
	  0 !== Y$1 && Ph(Y$1);
	  Lh = null;
	  Ih = !1;
	  Vh();
	}

	function Wh(a, b) {
	  W$1 ? A$1("253") : void 0;
	  X$1 = a;
	  Y$1 = b;
	  Rh(a, b, !1);
	  Sh();
	  Vh();
	}

	function Vh() {
	  Bh = 0;

	  if (null !== Nh) {
	    var a = Nh;
	    Nh = null;

	    for (var b = 0; b < a.length; b++) {
	      var c = a[b];

	      try {
	        c._onComplete();
	      } catch (d) {
	        Jh || (Jh = !0, Kh = d);
	      }
	    }
	  }

	  if (Jh) throw a = Kh, Kh = null, Jh = !1, a;
	}

	function Rh(a, b, c) {
	  W$1 ? A$1("245") : void 0;
	  W$1 = !0;
	  c ? (c = a.finishedWork, null !== c ? Xh(a, c, b) : (a.finishedWork = null, c = uh(a, b, !0), null !== c && (vh() ? a.finishedWork = c : Xh(a, c, b)))) : (c = a.finishedWork, null !== c ? Xh(a, c, b) : (a.finishedWork = null, c = uh(a, b, !1), null !== c && Xh(a, c, b)));
	  W$1 = !1;
	}

	function Xh(a, b, c) {
	  var d = a.firstBatch;

	  if (null !== d && d._expirationTime <= c && (null === Nh ? Nh = [d] : Nh.push(d), d._defer)) {
	    a.finishedWork = b;
	    a.remainingExpirationTime = 0;
	    return;
	  }

	  a.finishedWork = null;
	  ph = lh = !0;
	  c = b.stateNode;
	  c.current === b ? A$1("177") : void 0;
	  d = c.pendingCommitExpirationTime;
	  0 === d ? A$1("261") : void 0;
	  c.pendingCommitExpirationTime = 0;
	  ig();
	  ec.current = null;
	  if (1 < b.effectTag) {
	    if (null !== b.lastEffect) {
	      b.lastEffect.nextEffect = b;
	      var e = b.firstEffect;
	    } else e = b;
	  } else e = b.firstEffect;
	  Xe = Gd;
	  var f = getActiveElement_1();

	  if (Td(f)) {
	    if ("selectionStart" in f) var g = {
	      start: f.selectionStart,
	      end: f.selectionEnd
	    };else a: {
	      var h = window.getSelection && window.getSelection();

	      if (h && 0 !== h.rangeCount) {
	        g = h.anchorNode;
	        var k = h.anchorOffset,
	            n = h.focusNode;
	        h = h.focusOffset;

	        try {
	          g.nodeType, n.nodeType;
	        } catch (Wa) {
	          g = null;
	          break a;
	        }

	        var r = 0,
	            w = -1,
	            P = -1,
	            kc = 0,
	            Hd = 0,
	            E = f,
	            t = null;

	        b: for (;;) {
	          for (var x;;) {
	            E !== g || 0 !== k && 3 !== E.nodeType || (w = r + k);
	            E !== n || 0 !== h && 3 !== E.nodeType || (P = r + h);
	            3 === E.nodeType && (r += E.nodeValue.length);
	            if (null === (x = E.firstChild)) break;
	            t = E;
	            E = x;
	          }

	          for (;;) {
	            if (E === f) break b;
	            t === g && ++kc === k && (w = r);
	            t === n && ++Hd === h && (P = r);
	            if (null !== (x = E.nextSibling)) break;
	            E = t;
	            t = E.parentNode;
	          }

	          E = x;
	        }

	        g = -1 === w || -1 === P ? null : {
	          start: w,
	          end: P
	        };
	      } else g = null;
	    }
	    g = g || {
	      start: 0,
	      end: 0
	    };
	  } else g = null;

	  Ye = {
	    focusedElem: f,
	    selectionRange: g
	  };
	  Id(!1);

	  for (U$1 = e; null !== U$1;) {
	    f = !1;
	    g = void 0;

	    try {
	      for (; null !== U$1;) {
	        if (U$1.effectTag & 256) {
	          var u = U$1.alternate;
	          k = U$1;

	          switch (k.tag) {
	            case 2:
	              if (k.effectTag & 256 && null !== u) {
	                var y = u.memoizedProps,
	                    D = u.memoizedState,
	                    ja = k.stateNode;
	                ja.props = k.memoizedProps;
	                ja.state = k.memoizedState;
	                var hi = ja.getSnapshotBeforeUpdate(y, D);
	                ja.__reactInternalSnapshotBeforeUpdate = hi;
	              }

	              break;

	            case 3:
	            case 5:
	            case 6:
	            case 4:
	              break;

	            default:
	              A$1("163");
	          }
	        }

	        U$1 = U$1.nextEffect;
	      }
	    } catch (Wa) {
	      f = !0, g = Wa;
	    }

	    f && (null === U$1 ? A$1("178") : void 0, Vg(U$1, g), null !== U$1 && (U$1 = U$1.nextEffect));
	  }

	  for (U$1 = e; null !== U$1;) {
	    u = !1;
	    y = void 0;

	    try {
	      for (; null !== U$1;) {
	        var q = U$1.effectTag;
	        q & 16 && Ge(U$1.stateNode, "");

	        if (q & 128) {
	          var z = U$1.alternate;

	          if (null !== z) {
	            var l = z.ref;
	            null !== l && ("function" === typeof l ? l(null) : l.current = null);
	          }
	        }

	        switch (q & 14) {
	          case 2:
	            Zg(U$1);
	            U$1.effectTag &= -3;
	            break;

	          case 6:
	            Zg(U$1);
	            U$1.effectTag &= -3;
	            $g(U$1.alternate, U$1);
	            break;

	          case 4:
	            $g(U$1.alternate, U$1);
	            break;

	          case 8:
	            D = U$1, Xg(D), D.return = null, D.child = null, D.alternate && (D.alternate.child = null, D.alternate.return = null);
	        }

	        U$1 = U$1.nextEffect;
	      }
	    } catch (Wa) {
	      u = !0, y = Wa;
	    }

	    u && (null === U$1 ? A$1("178") : void 0, Vg(U$1, y), null !== U$1 && (U$1 = U$1.nextEffect));
	  }

	  l = Ye;
	  z = getActiveElement_1();
	  q = l.focusedElem;
	  u = l.selectionRange;

	  if (z !== q && containsNode_1(document.documentElement, q)) {
	    Td(q) && (z = u.start, l = u.end, void 0 === l && (l = z), "selectionStart" in q ? (q.selectionStart = z, q.selectionEnd = Math.min(l, q.value.length)) : window.getSelection && (z = window.getSelection(), y = q[lb()].length, l = Math.min(u.start, y), u = void 0 === u.end ? l : Math.min(u.end, y), !z.extend && l > u && (y = u, u = l, l = y), y = Sd(q, l), D = Sd(q, u), y && D && (1 !== z.rangeCount || z.anchorNode !== y.node || z.anchorOffset !== y.offset || z.focusNode !== D.node || z.focusOffset !== D.offset) && (ja = document.createRange(), ja.setStart(y.node, y.offset), z.removeAllRanges(), l > u ? (z.addRange(ja), z.extend(D.node, D.offset)) : (ja.setEnd(D.node, D.offset), z.addRange(ja)))));
	    z = [];

	    for (l = q; l = l.parentNode;) 1 === l.nodeType && z.push({
	      element: l,
	      left: l.scrollLeft,
	      top: l.scrollTop
	    });

	    q.focus();

	    for (q = 0; q < z.length; q++) l = z[q], l.element.scrollLeft = l.left, l.element.scrollTop = l.top;
	  }

	  Ye = null;
	  Id(Xe);
	  Xe = null;
	  c.current = b;

	  for (U$1 = e; null !== U$1;) {
	    e = !1;
	    q = void 0;

	    try {
	      for (z = d; null !== U$1;) {
	        var gg = U$1.effectTag;

	        if (gg & 36) {
	          var lc = U$1.alternate;
	          l = U$1;
	          u = z;

	          switch (l.tag) {
	            case 2:
	              var ba = l.stateNode;
	              if (l.effectTag & 4) if (null === lc) ba.props = l.memoizedProps, ba.state = l.memoizedState, ba.componentDidMount();else {
	                var ri = lc.memoizedProps,
	                    si = lc.memoizedState;
	                ba.props = l.memoizedProps;
	                ba.state = l.memoizedState;
	                ba.componentDidUpdate(ri, si, ba.__reactInternalSnapshotBeforeUpdate);
	              }
	              var Mg = l.updateQueue;
	              null !== Mg && (ba.props = l.memoizedProps, ba.state = l.memoizedState, Sf(l, Mg, ba, u));
	              break;

	            case 3:
	              var Ng = l.updateQueue;

	              if (null !== Ng) {
	                y = null;
	                if (null !== l.child) switch (l.child.tag) {
	                  case 5:
	                    y = l.child.stateNode;
	                    break;

	                  case 2:
	                    y = l.child.stateNode;
	                }
	                Sf(l, Ng, y, u);
	              }

	              break;

	            case 5:
	              var ti = l.stateNode;
	              null === lc && l.effectTag & 4 && Ze(l.type, l.memoizedProps) && ti.focus();
	              break;

	            case 6:
	              break;

	            case 4:
	              break;

	            case 15:
	              break;

	            case 16:
	              break;

	            default:
	              A$1("163");
	          }
	        }

	        if (gg & 128) {
	          l = void 0;
	          var uc = U$1.ref;

	          if (null !== uc) {
	            var Og = U$1.stateNode;

	            switch (U$1.tag) {
	              case 5:
	                l = Og;
	                break;

	              default:
	                l = Og;
	            }

	            "function" === typeof uc ? uc(l) : uc.current = l;
	          }
	        }

	        var ui = U$1.nextEffect;
	        U$1.nextEffect = null;
	        U$1 = ui;
	      }
	    } catch (Wa) {
	      e = !0, q = Wa;
	    }

	    e && (null === U$1 ? A$1("178") : void 0, Vg(U$1, q), null !== U$1 && (U$1 = U$1.nextEffect));
	  }

	  lh = ph = !1;
	  "function" === typeof Ff && Ff(b.stateNode);
	  b = c.current.expirationTime;
	  0 === b && (dh = null);
	  a.remainingExpirationTime = b;
	}

	function vh() {
	  return null === Lh || Lh.timeRemaining() > Oh ? !1 : Ih = !0;
	}

	function bh(a) {
	  null === X$1 ? A$1("246") : void 0;
	  X$1.remainingExpirationTime = 0;
	  Jh || (Jh = !0, Kh = a);
	}

	function xh(a) {
	  null === X$1 ? A$1("246") : void 0;
	  X$1.remainingExpirationTime = a;
	}

	function Yh(a, b) {
	  var c = Z$1;
	  Z$1 = !0;

	  try {
	    return a(b);
	  } finally {
	    (Z$1 = c) || W$1 || Sh();
	  }
	}

	function Zh(a, b) {
	  if (Z$1 && !Mh) {
	    Mh = !0;

	    try {
	      return a(b);
	    } finally {
	      Mh = !1;
	    }
	  }

	  return a(b);
	}

	function $h(a, b) {
	  W$1 ? A$1("187") : void 0;
	  var c = Z$1;
	  Z$1 = !0;

	  try {
	    return Eh(a, b);
	  } finally {
	    Z$1 = c, Sh();
	  }
	}

	function ai(a) {
	  var b = Z$1;
	  Z$1 = !0;

	  try {
	    Eh(a);
	  } finally {
	    (Z$1 = b) || W$1 || Uh(1, !1, null);
	  }
	}

	function bi(a, b, c, d, e) {
	  var f = b.current;

	  if (c) {
	    c = c._reactInternalFiber;
	    var g;

	    b: {
	      2 === id(c) && 2 === c.tag ? void 0 : A$1("170");

	      for (g = c; 3 !== g.tag;) {
	        if (mf(g)) {
	          g = g.stateNode.__reactInternalMemoizedMergedChildContext;
	          break b;
	        }

	        (g = g.return) ? void 0 : A$1("171");
	      }

	      g = g.stateNode.context;
	    }

	    c = mf(c) ? rf(c, g) : g;
	  } else c = emptyObject_1;

	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = e;
	  e = Kf(d);
	  e.payload = {
	    element: a
	  };
	  b = void 0 === b ? null : b;
	  null !== b && (e.callback = b);
	  Mf(f, e, d);
	  kg(f, d);
	  return d;
	}

	function ci(a) {
	  var b = a._reactInternalFiber;
	  void 0 === b && ("function" === typeof a.render ? A$1("188") : A$1("268", Object.keys(a)));
	  a = ld(b);
	  return null === a ? null : a.stateNode;
	}

	function di(a, b, c, d) {
	  var e = b.current,
	      f = ig();
	  e = jg(f, e);
	  return bi(a, b, c, e, d);
	}

	function ei(a) {
	  a = a.current;
	  if (!a.child) return null;

	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;

	    default:
	      return a.child.stateNode;
	  }
	}

	function fi(a) {
	  var b = a.findFiberByHostInstance;
	  return Ef(objectAssign({}, a, {
	    findHostInstanceByFiber: function (a) {
	      a = ld(a);
	      return null === a ? null : a.stateNode;
	    },
	    findFiberByHostInstance: function (a) {
	      return b ? b(a) : null;
	    }
	  }));
	}

	var gi = {
	  updateContainerAtExpirationTime: bi,
	  createContainer: function (a, b, c) {
	    return Af(a, b, c);
	  },
	  updateContainer: di,
	  flushRoot: Wh,
	  requestWork: wh,
	  computeUniqueAsyncExpiration: yh,
	  batchedUpdates: Yh,
	  unbatchedUpdates: Zh,
	  deferredUpdates: Dh,
	  syncUpdates: Eh,
	  interactiveUpdates: function (a, b, c) {
	    if (zh) return a(b, c);
	    Z$1 || W$1 || 0 === Ah || (Uh(Ah, !1, null), Ah = 0);
	    var d = zh,
	        e = Z$1;
	    Z$1 = zh = !0;

	    try {
	      return a(b, c);
	    } finally {
	      zh = d, (Z$1 = e) || W$1 || Sh();
	    }
	  },
	  flushInteractiveUpdates: function () {
	    W$1 || 0 === Ah || (Uh(Ah, !1, null), Ah = 0);
	  },
	  flushControlled: ai,
	  flushSync: $h,
	  getPublicRootInstance: ei,
	  findHostInstance: ci,
	  findHostInstanceWithNoPortals: function (a) {
	    a = md(a);
	    return null === a ? null : a.stateNode;
	  },
	  injectIntoDevTools: fi
	};

	function ii(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: gc,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}

	Kb.injectFiberControlledHostComponent(We);

	function ji(a) {
	  this._expirationTime = yh();
	  this._root = a;
	  this._callbacks = this._next = null;
	  this._hasChildren = this._didComplete = !1;
	  this._children = null;
	  this._defer = !0;
	}

	ji.prototype.render = function (a) {
	  this._defer ? void 0 : A$1("250");
	  this._hasChildren = !0;
	  this._children = a;
	  var b = this._root._internalRoot,
	      c = this._expirationTime,
	      d = new ki();
	  bi(a, b, null, c, d._onCommit);
	  return d;
	};

	ji.prototype.then = function (a) {
	  if (this._didComplete) a();else {
	    var b = this._callbacks;
	    null === b && (b = this._callbacks = []);
	    b.push(a);
	  }
	};

	ji.prototype.commit = function () {
	  var a = this._root._internalRoot,
	      b = a.firstBatch;
	  this._defer && null !== b ? void 0 : A$1("251");

	  if (this._hasChildren) {
	    var c = this._expirationTime;

	    if (b !== this) {
	      this._hasChildren && (c = this._expirationTime = b._expirationTime, this.render(this._children));

	      for (var d = null, e = b; e !== this;) d = e, e = e._next;

	      null === d ? A$1("251") : void 0;
	      d._next = e._next;
	      this._next = b;
	      a.firstBatch = this;
	    }

	    this._defer = !1;
	    Wh(a, c);
	    b = this._next;
	    this._next = null;
	    b = a.firstBatch = b;
	    null !== b && b._hasChildren && b.render(b._children);
	  } else this._next = null, this._defer = !1;
	};

	ji.prototype._onComplete = function () {
	  if (!this._didComplete) {
	    this._didComplete = !0;
	    var a = this._callbacks;
	    if (null !== a) for (var b = 0; b < a.length; b++) (0, a[b])();
	  }
	};

	function ki() {
	  this._callbacks = null;
	  this._didCommit = !1;
	  this._onCommit = this._onCommit.bind(this);
	}

	ki.prototype.then = function (a) {
	  if (this._didCommit) a();else {
	    var b = this._callbacks;
	    null === b && (b = this._callbacks = []);
	    b.push(a);
	  }
	};

	ki.prototype._onCommit = function () {
	  if (!this._didCommit) {
	    this._didCommit = !0;
	    var a = this._callbacks;
	    if (null !== a) for (var b = 0; b < a.length; b++) {
	      var c = a[b];
	      "function" !== typeof c ? A$1("191", c) : void 0;
	      c();
	    }
	  }
	};

	function li(a, b, c) {
	  this._internalRoot = Af(a, b, c);
	}

	li.prototype.render = function (a, b) {
	  var c = this._internalRoot,
	      d = new ki();
	  b = void 0 === b ? null : b;
	  null !== b && d.then(b);
	  di(a, c, null, d._onCommit);
	  return d;
	};

	li.prototype.unmount = function (a) {
	  var b = this._internalRoot,
	      c = new ki();
	  a = void 0 === a ? null : a;
	  null !== a && c.then(a);
	  di(null, b, null, c._onCommit);
	  return c;
	};

	li.prototype.legacy_renderSubtreeIntoContainer = function (a, b, c) {
	  var d = this._internalRoot,
	      e = new ki();
	  c = void 0 === c ? null : c;
	  null !== c && e.then(c);
	  di(b, d, a, e._onCommit);
	  return e;
	};

	li.prototype.createBatch = function () {
	  var a = new ji(this),
	      b = a._expirationTime,
	      c = this._internalRoot,
	      d = c.firstBatch;
	  if (null === d) c.firstBatch = a, a._next = null;else {
	    for (c = null; null !== d && d._expirationTime <= b;) c = d, d = d._next;

	    a._next = d;
	    null !== c && (c._next = a);
	  }
	  return a;
	};

	function mi(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}

	Sb = gi.batchedUpdates;
	Tb = gi.interactiveUpdates;
	Ub = gi.flushInteractiveUpdates;

	function ni(a, b) {
	  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
	  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
	  return new li(a, !1, b);
	}

	function oi(a, b, c, d, e) {
	  mi(c) ? void 0 : A$1("200");
	  var f = c._reactRootContainer;

	  if (f) {
	    if ("function" === typeof e) {
	      var g = e;

	      e = function () {
	        var a = ei(f._internalRoot);
	        g.call(a);
	      };
	    }

	    null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
	  } else {
	    f = c._reactRootContainer = ni(c, d);

	    if ("function" === typeof e) {
	      var h = e;

	      e = function () {
	        var a = ei(f._internalRoot);
	        h.call(a);
	      };
	    }

	    Zh(function () {
	      null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
	    });
	  }

	  return ei(f._internalRoot);
	}

	function pi(a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  mi(b) ? void 0 : A$1("200");
	  return ii(a, b, null, c);
	}

	var qi = {
	  createPortal: pi,
	  findDOMNode: function (a) {
	    return null == a ? null : 1 === a.nodeType ? a : ci(a);
	  },
	  hydrate: function (a, b, c) {
	    return oi(null, a, b, !0, c);
	  },
	  render: function (a, b, c) {
	    return oi(null, a, b, !1, c);
	  },
	  unstable_renderSubtreeIntoContainer: function (a, b, c, d) {
	    null == a || void 0 === a._reactInternalFiber ? A$1("38") : void 0;
	    return oi(a, b, c, !1, d);
	  },
	  unmountComponentAtNode: function (a) {
	    mi(a) ? void 0 : A$1("40");
	    return a._reactRootContainer ? (Zh(function () {
	      oi(null, null, a, !1, function () {
	        a._reactRootContainer = null;
	      });
	    }), !0) : !1;
	  },
	  unstable_createPortal: function () {
	    return pi.apply(void 0, arguments);
	  },
	  unstable_batchedUpdates: Yh,
	  unstable_deferredUpdates: Dh,
	  flushSync: $h,
	  unstable_flushControlled: ai,
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    EventPluginHub: Ka,
	    EventPluginRegistry: va,
	    EventPropagators: $a,
	    ReactControlledComponent: Rb,
	    ReactDOMComponentTree: Qa,
	    ReactDOMEventListener: Md
	  },
	  unstable_createRoot: function (a, b) {
	    return new li(a, !0, null != b && !0 === b.hydrate);
	  }
	};
	fi({
	  findFiberByHostInstance: Na,
	  bundleType: 0,
	  version: "16.4.0",
	  rendererPackageName: "react-dom"
	});
	var vi = {
	  default: qi
	},
	    wi = vi && qi || vi;
	var reactDom_production_min = wi.default ? wi.default : wi;

	var reactDom = createCommonjsModule(function (module) {

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	    return;
	  }

	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = reactDom_production_min;
	}
	});

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
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

	function _extends() {
	  _extends = Object.assign || function (target) {
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

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    });
	  }

	  return target;
	}

	class DragZone extends react.Component {
	  constructor(...args) {
	    var _temp;

	    return _temp = super(...args), _defineProperty(this, "state", {
	      dragging: false
	    }), _defineProperty(this, "onDragStart", e => {
	      const data = this.props.json ? JSON.stringify(this.props.data) : this.props.data;
	      e.dataTransfer.setData(this.props.type, data);
	      this.props.onDragStart(e);
	      this.setState({
	        dragging: true
	      });
	    }), _defineProperty(this, "onDragEnd", e => {
	      this.props.onDragEnd(e);
	      this.setState({
	        dragging: false
	      });
	    }), _temp;
	  }

	  render() {
	    return react.createElement("div", {
	      style: {
	        background: 'white',
	        boxShadow: this.state.dragging ? '0 2px 5px 0 rgba(0, 0, 0, 0.5)' : '0 2px 2px 0 rgba(0, 0, 0, 0.5)',
	        color: '#221133',
	        cursor: 'pointer',
	        padding: '10px',
	        margin: '5px 0'
	      },
	      draggable: true,
	      onDragStart: this.onDragStart,
	      onDragEnd: this.onDragEnd
	    }, this.props.children);
	  }

	}

	DragZone.defaultProps = {
	  onDragEnd: () => {},
	  onDragStart: () => {},
	  type: 'text'
	};

	const API_BASE = 'https://content.guardianapis.com/';
	const enc = encodeURIComponent;

	const qs = o => `?${Object.keys(o).map(key => {
  const val = o[key];

  if (!val) {
    return false;
  }

  return `${enc(key)}=${enc(val)}`;
}).filter(Boolean).join('&')}`;

	const capiQuery = (baseURL = API_BASE, fetch = window.fetch) => ({
	  search: async params => {
	    const response = await fetch(`${baseURL}search${qs(_objectSpread({}, params))}`);
	    return response.json();
	  }
	});

	const capi = capiQuery();

	const searchById = async id => (await capi.search({
	  ids: id,
	  'api-key': 'teleporter-view'
	})).response.results[0];

	const isGuardianURL = url => {
	  const [, id] = url.match(/https:\/\/www.theguardian\.com\/(.*)\??/) || [];
	  return {
	    url,
	    id
	  };
	};

	const urlToArticle = async text => {
	  const {
	    id
	  } = isGuardianURL(text);
	  return !!id && {
	    data: await searchById(id),
	    type: 'articleFragment'
	  };
	};

	const pathSpec = (key, index, type = null) => ({
	  key,
	  index,
	  type
	});

	const toPathStr = (path, separateLastIndex = false) => path.map(({
	  key,
	  index
	}) => `${key}[${index}]`).join('.');

	const toPathStrAndIndex = path => {
	  const prePath = path.slice();
	  const {
	    key,
	    index
	  } = prePath.pop();
	  const str = toPathStr(prePath);
	  return [`${str}.${key}`, index];
	};

	const isSubPath = (parent, sub) => sub.length > parent.length && !parent.some(({
	  key: kp,
	  index: ip
	}, i) => {
	  const {
	    key: ks,
	    index: is
	  } = sub[i] || {};
	  return kp !== ks || ip !== is;
	});

	const pathForMove = (source, target) => {
	  const newPath = [];

	  for (let i = 0; i < target.length; i += 1) {
	    const targetPathSpec = target[i];
	    const {
	      key: kt,
	      index: it,
	      type: tt
	    } = targetPathSpec;
	    const {
	      key: ks,
	      index: is
	    } = source[i] || {};

	    if (i < source.length - 1 && (ks !== kt || is !== it)) {
	      return target;
	    } else if (i === source.length - 1 && ks === kt && is < it) {
	      newPath.push(pathSpec(kt, it - 1, tt));
	    } else {
	      newPath.push(targetPathSpec);
	    }
	  }

	  return newPath;
	};

	var _mapping = createCommonjsModule(function (module, exports) {
	/** Used to map aliases to their real names. */
	exports.aliasToReal = {
	  // Lodash aliases.
	  'each': 'forEach',
	  'eachRight': 'forEachRight',
	  'entries': 'toPairs',
	  'entriesIn': 'toPairsIn',
	  'extend': 'assignIn',
	  'extendAll': 'assignInAll',
	  'extendAllWith': 'assignInAllWith',
	  'extendWith': 'assignInWith',
	  'first': 'head',
	  // Methods that are curried variants of others.
	  'conforms': 'conformsTo',
	  'matches': 'isMatch',
	  'property': 'get',
	  // Ramda aliases.
	  '__': 'placeholder',
	  'F': 'stubFalse',
	  'T': 'stubTrue',
	  'all': 'every',
	  'allPass': 'overEvery',
	  'always': 'constant',
	  'any': 'some',
	  'anyPass': 'overSome',
	  'apply': 'spread',
	  'assoc': 'set',
	  'assocPath': 'set',
	  'complement': 'negate',
	  'compose': 'flowRight',
	  'contains': 'includes',
	  'dissoc': 'unset',
	  'dissocPath': 'unset',
	  'dropLast': 'dropRight',
	  'dropLastWhile': 'dropRightWhile',
	  'equals': 'isEqual',
	  'identical': 'eq',
	  'indexBy': 'keyBy',
	  'init': 'initial',
	  'invertObj': 'invert',
	  'juxt': 'over',
	  'omitAll': 'omit',
	  'nAry': 'ary',
	  'path': 'get',
	  'pathEq': 'matchesProperty',
	  'pathOr': 'getOr',
	  'paths': 'at',
	  'pickAll': 'pick',
	  'pipe': 'flow',
	  'pluck': 'map',
	  'prop': 'get',
	  'propEq': 'matchesProperty',
	  'propOr': 'getOr',
	  'props': 'at',
	  'symmetricDifference': 'xor',
	  'symmetricDifferenceBy': 'xorBy',
	  'symmetricDifferenceWith': 'xorWith',
	  'takeLast': 'takeRight',
	  'takeLastWhile': 'takeRightWhile',
	  'unapply': 'rest',
	  'unnest': 'flatten',
	  'useWith': 'overArgs',
	  'where': 'conformsTo',
	  'whereEq': 'isMatch',
	  'zipObj': 'zipObject'
	};
	/** Used to map ary to method names. */

	exports.aryMethod = {
	  '1': ['assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create', 'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow', 'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll', 'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome', 'rest', 'reverse', 'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart', 'uniqueId', 'words', 'zipAll'],
	  '2': ['add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith', 'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith', 'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN', 'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference', 'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq', 'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex', 'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach', 'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get', 'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection', 'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy', 'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty', 'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit', 'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial', 'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll', 'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove', 'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex', 'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy', 'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight', 'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars', 'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith', 'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject', 'zipObjectDeep'],
	  '3': ['assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith', 'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr', 'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith', 'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth', 'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd', 'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight', 'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy', 'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy', 'xorWith', 'zipWith'],
	  '4': ['fill', 'setWith', 'updateWith']
	};
	/** Used to map ary to rearg configs. */

	exports.aryRearg = {
	  '2': [1, 0],
	  '3': [2, 0, 1],
	  '4': [3, 2, 0, 1]
	};
	/** Used to map method names to their iteratee ary. */

	exports.iterateeAry = {
	  'dropRightWhile': 1,
	  'dropWhile': 1,
	  'every': 1,
	  'filter': 1,
	  'find': 1,
	  'findFrom': 1,
	  'findIndex': 1,
	  'findIndexFrom': 1,
	  'findKey': 1,
	  'findLast': 1,
	  'findLastFrom': 1,
	  'findLastIndex': 1,
	  'findLastIndexFrom': 1,
	  'findLastKey': 1,
	  'flatMap': 1,
	  'flatMapDeep': 1,
	  'flatMapDepth': 1,
	  'forEach': 1,
	  'forEachRight': 1,
	  'forIn': 1,
	  'forInRight': 1,
	  'forOwn': 1,
	  'forOwnRight': 1,
	  'map': 1,
	  'mapKeys': 1,
	  'mapValues': 1,
	  'partition': 1,
	  'reduce': 2,
	  'reduceRight': 2,
	  'reject': 1,
	  'remove': 1,
	  'some': 1,
	  'takeRightWhile': 1,
	  'takeWhile': 1,
	  'times': 1,
	  'transform': 2
	};
	/** Used to map method names to iteratee rearg configs. */

	exports.iterateeRearg = {
	  'mapKeys': [1],
	  'reduceRight': [1, 0]
	};
	/** Used to map method names to rearg configs. */

	exports.methodRearg = {
	  'assignInAllWith': [1, 0],
	  'assignInWith': [1, 2, 0],
	  'assignAllWith': [1, 0],
	  'assignWith': [1, 2, 0],
	  'differenceBy': [1, 2, 0],
	  'differenceWith': [1, 2, 0],
	  'getOr': [2, 1, 0],
	  'intersectionBy': [1, 2, 0],
	  'intersectionWith': [1, 2, 0],
	  'isEqualWith': [1, 2, 0],
	  'isMatchWith': [2, 1, 0],
	  'mergeAllWith': [1, 0],
	  'mergeWith': [1, 2, 0],
	  'padChars': [2, 1, 0],
	  'padCharsEnd': [2, 1, 0],
	  'padCharsStart': [2, 1, 0],
	  'pullAllBy': [2, 1, 0],
	  'pullAllWith': [2, 1, 0],
	  'rangeStep': [1, 2, 0],
	  'rangeStepRight': [1, 2, 0],
	  'setWith': [3, 1, 2, 0],
	  'sortedIndexBy': [2, 1, 0],
	  'sortedLastIndexBy': [2, 1, 0],
	  'unionBy': [1, 2, 0],
	  'unionWith': [1, 2, 0],
	  'updateWith': [3, 1, 2, 0],
	  'xorBy': [1, 2, 0],
	  'xorWith': [1, 2, 0],
	  'zipWith': [1, 2, 0]
	};
	/** Used to map method names to spread configs. */

	exports.methodSpread = {
	  'assignAll': {
	    'start': 0
	  },
	  'assignAllWith': {
	    'start': 0
	  },
	  'assignInAll': {
	    'start': 0
	  },
	  'assignInAllWith': {
	    'start': 0
	  },
	  'defaultsAll': {
	    'start': 0
	  },
	  'defaultsDeepAll': {
	    'start': 0
	  },
	  'invokeArgs': {
	    'start': 2
	  },
	  'invokeArgsMap': {
	    'start': 2
	  },
	  'mergeAll': {
	    'start': 0
	  },
	  'mergeAllWith': {
	    'start': 0
	  },
	  'partial': {
	    'start': 1
	  },
	  'partialRight': {
	    'start': 1
	  },
	  'without': {
	    'start': 1
	  },
	  'zipAll': {
	    'start': 0
	  }
	};
	/** Used to identify methods which mutate arrays or objects. */

	exports.mutate = {
	  'array': {
	    'fill': true,
	    'pull': true,
	    'pullAll': true,
	    'pullAllBy': true,
	    'pullAllWith': true,
	    'pullAt': true,
	    'remove': true,
	    'reverse': true
	  },
	  'object': {
	    'assign': true,
	    'assignAll': true,
	    'assignAllWith': true,
	    'assignIn': true,
	    'assignInAll': true,
	    'assignInAllWith': true,
	    'assignInWith': true,
	    'assignWith': true,
	    'defaults': true,
	    'defaultsAll': true,
	    'defaultsDeep': true,
	    'defaultsDeepAll': true,
	    'merge': true,
	    'mergeAll': true,
	    'mergeAllWith': true,
	    'mergeWith': true
	  },
	  'set': {
	    'set': true,
	    'setWith': true,
	    'unset': true,
	    'update': true,
	    'updateWith': true
	  }
	};
	/** Used to track methods with placeholder support */

	exports.placeholder = {
	  'bind': true,
	  'bindKey': true,
	  'curry': true,
	  'curryRight': true,
	  'partial': true,
	  'partialRight': true
	};
	/** Used to map real names to their aliases. */

	exports.realToAlias = function () {
	  var hasOwnProperty = Object.prototype.hasOwnProperty,
	      object = exports.aliasToReal,
	      result = {};

	  for (var key in object) {
	    var value = object[key];

	    if (hasOwnProperty.call(result, value)) {
	      result[value].push(key);
	    } else {
	      result[value] = [key];
	    }
	  }

	  return result;
	}();
	/** Used to map method names to other names. */


	exports.remap = {
	  'assignAll': 'assign',
	  'assignAllWith': 'assignWith',
	  'assignInAll': 'assignIn',
	  'assignInAllWith': 'assignInWith',
	  'curryN': 'curry',
	  'curryRightN': 'curryRight',
	  'defaultsAll': 'defaults',
	  'defaultsDeepAll': 'defaultsDeep',
	  'findFrom': 'find',
	  'findIndexFrom': 'findIndex',
	  'findLastFrom': 'findLast',
	  'findLastIndexFrom': 'findLastIndex',
	  'getOr': 'get',
	  'includesFrom': 'includes',
	  'indexOfFrom': 'indexOf',
	  'invokeArgs': 'invoke',
	  'invokeArgsMap': 'invokeMap',
	  'lastIndexOfFrom': 'lastIndexOf',
	  'mergeAll': 'merge',
	  'mergeAllWith': 'mergeWith',
	  'padChars': 'pad',
	  'padCharsEnd': 'padEnd',
	  'padCharsStart': 'padStart',
	  'propertyOf': 'get',
	  'rangeStep': 'range',
	  'rangeStepRight': 'rangeRight',
	  'restFrom': 'rest',
	  'spreadFrom': 'spread',
	  'trimChars': 'trim',
	  'trimCharsEnd': 'trimEnd',
	  'trimCharsStart': 'trimStart',
	  'zipAll': 'zip'
	};
	/** Used to track methods that skip fixing their arity. */

	exports.skipFixed = {
	  'castArray': true,
	  'flow': true,
	  'flowRight': true,
	  'iteratee': true,
	  'mixin': true,
	  'rearg': true,
	  'runInContext': true
	};
	/** Used to track methods that skip rearranging arguments. */

	exports.skipRearg = {
	  'add': true,
	  'assign': true,
	  'assignIn': true,
	  'bind': true,
	  'bindKey': true,
	  'concat': true,
	  'difference': true,
	  'divide': true,
	  'eq': true,
	  'gt': true,
	  'gte': true,
	  'isEqual': true,
	  'lt': true,
	  'lte': true,
	  'matchesProperty': true,
	  'merge': true,
	  'multiply': true,
	  'overArgs': true,
	  'partial': true,
	  'partialRight': true,
	  'propertyOf': true,
	  'random': true,
	  'range': true,
	  'rangeRight': true,
	  'subtract': true,
	  'zip': true,
	  'zipObject': true,
	  'zipObjectDeep': true
	};
	});
	var _mapping_1 = _mapping.aliasToReal;
	var _mapping_2 = _mapping.aryMethod;
	var _mapping_3 = _mapping.aryRearg;
	var _mapping_4 = _mapping.iterateeAry;
	var _mapping_5 = _mapping.iterateeRearg;
	var _mapping_6 = _mapping.methodRearg;
	var _mapping_7 = _mapping.methodSpread;
	var _mapping_8 = _mapping.mutate;
	var _mapping_9 = _mapping.placeholder;
	var _mapping_10 = _mapping.realToAlias;
	var _mapping_11 = _mapping.remap;
	var _mapping_12 = _mapping.skipFixed;
	var _mapping_13 = _mapping.skipRearg;

	/**
	 * The default argument placeholder value for methods.
	 *
	 * @type {Object}
	 */
	var placeholder = {};

	/** Built-in value reference. */


	var push = Array.prototype.push;
	/**
	 * Creates a function, with an arity of `n`, that invokes `func` with the
	 * arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} n The arity of the new function.
	 * @returns {Function} Returns the new function.
	 */

	function baseArity(func, n) {
	  return n == 2 ? function (a, b) {
	    return func.apply(undefined, arguments);
	  } : function (a) {
	    return func.apply(undefined, arguments);
	  };
	}
	/**
	 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
	 * any additional arguments.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} n The arity cap.
	 * @returns {Function} Returns the new function.
	 */


	function baseAry(func, n) {
	  return n == 2 ? function (a, b) {
	    return func(a, b);
	  } : function (a) {
	    return func(a);
	  };
	}
	/**
	 * Creates a clone of `array`.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the cloned array.
	 */


	function cloneArray(array) {
	  var length = array ? array.length : 0,
	      result = Array(length);

	  while (length--) {
	    result[length] = array[length];
	  }

	  return result;
	}
	/**
	 * Creates a function that clones a given object using the assignment `func`.
	 *
	 * @private
	 * @param {Function} func The assignment function.
	 * @returns {Function} Returns the new cloner function.
	 */


	function createCloner(func) {
	  return function (object) {
	    return func({}, object);
	  };
	}
	/**
	 * A specialized version of `_.spread` which flattens the spread array into
	 * the arguments of the invoked `func`.
	 *
	 * @private
	 * @param {Function} func The function to spread arguments over.
	 * @param {number} start The start position of the spread.
	 * @returns {Function} Returns the new function.
	 */


	function flatSpread(func, start) {
	  return function () {
	    var length = arguments.length,
	        lastIndex = length - 1,
	        args = Array(length);

	    while (length--) {
	      args[length] = arguments[length];
	    }

	    var array = args[start],
	        otherArgs = args.slice(0, start);

	    if (array) {
	      push.apply(otherArgs, array);
	    }

	    if (start != lastIndex) {
	      push.apply(otherArgs, args.slice(start + 1));
	    }

	    return func.apply(this, otherArgs);
	  };
	}
	/**
	 * Creates a function that wraps `func` and uses `cloner` to clone the first
	 * argument it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} cloner The function to clone arguments.
	 * @returns {Function} Returns the new immutable function.
	 */


	function wrapImmutable(func, cloner) {
	  return function () {
	    var length = arguments.length;

	    if (!length) {
	      return;
	    }

	    var args = Array(length);

	    while (length--) {
	      args[length] = arguments[length];
	    }

	    var result = args[0] = cloner.apply(undefined, args);
	    func.apply(undefined, args);
	    return result;
	  };
	}
	/**
	 * The base implementation of `convert` which accepts a `util` object of methods
	 * required to perform conversions.
	 *
	 * @param {Object} util The util object.
	 * @param {string} name The name of the function to convert.
	 * @param {Function} func The function to convert.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
	 * @param {boolean} [options.curry=true] Specify currying.
	 * @param {boolean} [options.fixed=true] Specify fixed arity.
	 * @param {boolean} [options.immutable=true] Specify immutable operations.
	 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
	 * @returns {Function|Object} Returns the converted function or object.
	 */


	function baseConvert(util, name, func, options) {
	  var setPlaceholder,
	      isLib = typeof name == 'function',
	      isObj = name === Object(name);

	  if (isObj) {
	    options = func;
	    func = name;
	    name = undefined;
	  }

	  if (func == null) {
	    throw new TypeError();
	  }

	  options || (options = {});
	  var config = {
	    'cap': 'cap' in options ? options.cap : true,
	    'curry': 'curry' in options ? options.curry : true,
	    'fixed': 'fixed' in options ? options.fixed : true,
	    'immutable': 'immutable' in options ? options.immutable : true,
	    'rearg': 'rearg' in options ? options.rearg : true
	  };
	  var forceCurry = 'curry' in options && options.curry,
	      forceFixed = 'fixed' in options && options.fixed,
	      forceRearg = 'rearg' in options && options.rearg,
	      placeholder$$1 = isLib ? func : placeholder,
	      pristine = isLib ? func.runInContext() : undefined;
	  var helpers = isLib ? func : {
	    'ary': util.ary,
	    'assign': util.assign,
	    'clone': util.clone,
	    'curry': util.curry,
	    'forEach': util.forEach,
	    'isArray': util.isArray,
	    'isError': util.isError,
	    'isFunction': util.isFunction,
	    'isWeakMap': util.isWeakMap,
	    'iteratee': util.iteratee,
	    'keys': util.keys,
	    'rearg': util.rearg,
	    'toInteger': util.toInteger,
	    'toPath': util.toPath
	  };
	  var ary = helpers.ary,
	      assign = helpers.assign,
	      clone = helpers.clone,
	      curry = helpers.curry,
	      each = helpers.forEach,
	      isArray = helpers.isArray,
	      isError = helpers.isError,
	      isFunction = helpers.isFunction,
	      isWeakMap = helpers.isWeakMap,
	      keys = helpers.keys,
	      rearg = helpers.rearg,
	      toInteger = helpers.toInteger,
	      toPath = helpers.toPath;
	  var aryMethodKeys = keys(_mapping.aryMethod);
	  var wrappers = {
	    'castArray': function (castArray) {
	      return function () {
	        var value = arguments[0];
	        return isArray(value) ? castArray(cloneArray(value)) : castArray.apply(undefined, arguments);
	      };
	    },
	    'iteratee': function (iteratee) {
	      return function () {
	        var func = arguments[0],
	            arity = arguments[1],
	            result = iteratee(func, arity),
	            length = result.length;

	        if (config.cap && typeof arity == 'number') {
	          arity = arity > 2 ? arity - 2 : 1;
	          return length && length <= arity ? result : baseAry(result, arity);
	        }

	        return result;
	      };
	    },
	    'mixin': function (mixin) {
	      return function (source) {
	        var func = this;

	        if (!isFunction(func)) {
	          return mixin(func, Object(source));
	        }

	        var pairs = [];
	        each(keys(source), function (key) {
	          if (isFunction(source[key])) {
	            pairs.push([key, func.prototype[key]]);
	          }
	        });
	        mixin(func, Object(source));
	        each(pairs, function (pair) {
	          var value = pair[1];

	          if (isFunction(value)) {
	            func.prototype[pair[0]] = value;
	          } else {
	            delete func.prototype[pair[0]];
	          }
	        });
	        return func;
	      };
	    },
	    'nthArg': function (nthArg) {
	      return function (n) {
	        var arity = n < 0 ? 1 : toInteger(n) + 1;
	        return curry(nthArg(n), arity);
	      };
	    },
	    'rearg': function (rearg) {
	      return function (func, indexes) {
	        var arity = indexes ? indexes.length : 0;
	        return curry(rearg(func, indexes), arity);
	      };
	    },
	    'runInContext': function (runInContext) {
	      return function (context) {
	        return baseConvert(util, runInContext(context), options);
	      };
	    }
	  };
	  /*--------------------------------------------------------------------------*/

	  /**
	   * Casts `func` to a function with an arity capped iteratee if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @returns {Function} Returns the cast function.
	   */

	  function castCap(name, func) {
	    if (config.cap) {
	      var indexes = _mapping.iterateeRearg[name];

	      if (indexes) {
	        return iterateeRearg(func, indexes);
	      }

	      var n = !isLib && _mapping.iterateeAry[name];

	      if (n) {
	        return iterateeAry(func, n);
	      }
	    }

	    return func;
	  }
	  /**
	   * Casts `func` to a curried function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity of `func`.
	   * @returns {Function} Returns the cast function.
	   */


	  function castCurry(name, func, n) {
	    return forceCurry || config.curry && n > 1 ? curry(func, n) : func;
	  }
	  /**
	   * Casts `func` to a fixed arity function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity cap.
	   * @returns {Function} Returns the cast function.
	   */


	  function castFixed(name, func, n) {
	    if (config.fixed && (forceFixed || !_mapping.skipFixed[name])) {
	      var data = _mapping.methodSpread[name],
	          start = data && data.start;
	      return start === undefined ? ary(func, n) : flatSpread(func, start);
	    }

	    return func;
	  }
	  /**
	   * Casts `func` to an rearged function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity of `func`.
	   * @returns {Function} Returns the cast function.
	   */


	  function castRearg(name, func, n) {
	    return config.rearg && n > 1 && (forceRearg || !_mapping.skipRearg[name]) ? rearg(func, _mapping.methodRearg[name] || _mapping.aryRearg[n]) : func;
	  }
	  /**
	   * Creates a clone of `object` by `path`.
	   *
	   * @private
	   * @param {Object} object The object to clone.
	   * @param {Array|string} path The path to clone by.
	   * @returns {Object} Returns the cloned object.
	   */


	  function cloneByPath(object, path) {
	    path = toPath(path);
	    var index = -1,
	        length = path.length,
	        lastIndex = length - 1,
	        result = clone(Object(object)),
	        nested = result;

	    while (nested != null && ++index < length) {
	      var key = path[index],
	          value = nested[key];

	      if (value != null && !(isFunction(value) || isError(value) || isWeakMap(value))) {
	        nested[key] = clone(index == lastIndex ? value : Object(value));
	      }

	      nested = nested[key];
	    }

	    return result;
	  }
	  /**
	   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
	   * version with conversion `options` applied.
	   *
	   * @param {Object} [options] The options object. See `baseConvert` for more details.
	   * @returns {Function} Returns the converted `lodash`.
	   */


	  function convertLib(options) {
	    return _.runInContext.convert(options)(undefined);
	  }
	  /**
	   * Create a converter function for `func` of `name`.
	   *
	   * @param {string} name The name of the function to convert.
	   * @param {Function} func The function to convert.
	   * @returns {Function} Returns the new converter function.
	   */


	  function createConverter(name, func) {
	    var realName = _mapping.aliasToReal[name] || name,
	        methodName = _mapping.remap[realName] || realName,
	        oldOptions = options;
	    return function (options) {
	      var newUtil = isLib ? pristine : helpers,
	          newFunc = isLib ? pristine[methodName] : func,
	          newOptions = assign(assign({}, oldOptions), options);
	      return baseConvert(newUtil, realName, newFunc, newOptions);
	    };
	  }
	  /**
	   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
	   * arguments, ignoring any additional arguments.
	   *
	   * @private
	   * @param {Function} func The function to cap iteratee arguments for.
	   * @param {number} n The arity cap.
	   * @returns {Function} Returns the new function.
	   */


	  function iterateeAry(func, n) {
	    return overArg(func, function (func) {
	      return typeof func == 'function' ? baseAry(func, n) : func;
	    });
	  }
	  /**
	   * Creates a function that wraps `func` to invoke its iteratee with arguments
	   * arranged according to the specified `indexes` where the argument value at
	   * the first index is provided as the first argument, the argument value at
	   * the second index is provided as the second argument, and so on.
	   *
	   * @private
	   * @param {Function} func The function to rearrange iteratee arguments for.
	   * @param {number[]} indexes The arranged argument indexes.
	   * @returns {Function} Returns the new function.
	   */


	  function iterateeRearg(func, indexes) {
	    return overArg(func, function (func) {
	      var n = indexes.length;
	      return baseArity(rearg(baseAry(func, n), indexes), n);
	    });
	  }
	  /**
	   * Creates a function that invokes `func` with its first argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */


	  function overArg(func, transform) {
	    return function () {
	      var length = arguments.length;

	      if (!length) {
	        return func();
	      }

	      var args = Array(length);

	      while (length--) {
	        args[length] = arguments[length];
	      }

	      var index = config.rearg ? 0 : length - 1;
	      args[index] = transform(args[index]);
	      return func.apply(undefined, args);
	    };
	  }
	  /**
	   * Creates a function that wraps `func` and applys the conversions
	   * rules by `name`.
	   *
	   * @private
	   * @param {string} name The name of the function to wrap.
	   * @param {Function} func The function to wrap.
	   * @returns {Function} Returns the converted function.
	   */


	  function wrap(name, func) {
	    var result,
	        realName = _mapping.aliasToReal[name] || name,
	        wrapped = func,
	        wrapper = wrappers[realName];

	    if (wrapper) {
	      wrapped = wrapper(func);
	    } else if (config.immutable) {
	      if (_mapping.mutate.array[realName]) {
	        wrapped = wrapImmutable(func, cloneArray);
	      } else if (_mapping.mutate.object[realName]) {
	        wrapped = wrapImmutable(func, createCloner(func));
	      } else if (_mapping.mutate.set[realName]) {
	        wrapped = wrapImmutable(func, cloneByPath);
	      }
	    }

	    each(aryMethodKeys, function (aryKey) {
	      each(_mapping.aryMethod[aryKey], function (otherName) {
	        if (realName == otherName) {
	          var data = _mapping.methodSpread[realName],
	              afterRearg = data && data.afterRearg;
	          result = afterRearg ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey) : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);
	          result = castCap(realName, result);
	          result = castCurry(realName, result, aryKey);
	          return false;
	        }
	      });
	      return !result;
	    });
	    result || (result = wrapped);

	    if (result == func) {
	      result = forceCurry ? curry(result, 1) : function () {
	        return func.apply(this, arguments);
	      };
	    }

	    result.convert = createConverter(realName, func);

	    if (_mapping.placeholder[realName]) {
	      setPlaceholder = true;
	      result.placeholder = func.placeholder = placeholder$$1;
	    }

	    return result;
	  }
	  /*--------------------------------------------------------------------------*/


	  if (!isObj) {
	    return wrap(name, func);
	  }

	  var _ = func; // Convert methods by ary cap.

	  var pairs = [];
	  each(aryMethodKeys, function (aryKey) {
	    each(_mapping.aryMethod[aryKey], function (key) {
	      var func = _[_mapping.remap[key] || key];

	      if (func) {
	        pairs.push([key, wrap(key, func)]);
	      }
	    });
	  }); // Convert remaining methods.

	  each(keys(_), function (key) {
	    var func = _[key];

	    if (typeof func == 'function') {
	      var length = pairs.length;

	      while (length--) {
	        if (pairs[length][0] == key) {
	          return;
	        }
	      }

	      func.convert = createConverter(key, func);
	      pairs.push([key, func]);
	    }
	  }); // Assign to `_` leaving `_.prototype` unchanged to allow chaining.

	  each(pairs, function (pair) {
	    _[pair[0]] = pair[1];
	  });
	  _.convert = convertLib;

	  if (setPlaceholder) {
	    _.placeholder = placeholder$$1;
	  } // Assign aliases.


	  each(keys(_), function (key) {
	    each(_mapping.realToAlias[key] || [], function (alias) {
	      _[alias] = _[key];
	    });
	  });
	  return _;
	}

	var _baseConvert = baseConvert;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */


	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	/** Used as a reference to the global object. */

	var root = _freeGlobal || freeSelf || Function('return this')();
	var _root = root;

	/** Built-in value references. */


	var Symbol$1 = _root.Symbol;
	var _Symbol = Symbol$1;

	/** Used for built-in method references. */


	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$2 = objectProto.hasOwnProperty;
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */

	var nativeObjectToString = objectProto.toString;
	/** Built-in value references. */

	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */

	function getRawTag(value) {
	  var isOwn = hasOwnProperty$2.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);

	  {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }

	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */

	var nativeObjectToString$1 = objectProto$1.toString;
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */

	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */


	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	/** Built-in value references. */

	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */

	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }

	  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */


	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */

	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  } // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.


	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */


	var coreJsData = _root['__core-js_shared__'];
	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */


	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */


	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	/** Used to resolve the decompiled source of functions. */

	var funcToString = funcProto.toString;
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */

	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}

	    try {
	      return func + '';
	    } catch (e) {}
	  }

	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */


	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */

	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used for built-in method references. */

	var funcProto$1 = Function.prototype,
	    objectProto$2 = Object.prototype;
	/** Used to resolve the decompiled source of functions. */

	var funcToString$1 = funcProto$1.toString;
	/** Used to check objects for own properties. */

	var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
	/** Used to detect if a method is native. */

	var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */

	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }

	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */


	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */


	var WeakMap = _getNative(_root, 'WeakMap');
	var _WeakMap = WeakMap;

	/** Used to store function metadata. */


	var metaMap = _WeakMap && new _WeakMap();
	var _metaMap = metaMap;

	/**
	 * The base implementation of `setData` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */


	var baseSetData = !_metaMap ? identity_1 : function (func, data) {
	  _metaMap.set(func, data);
	  return func;
	};
	var _baseSetData = baseSetData;

	/** Built-in value references. */


	var objectCreate = Object.create;
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */

	var baseCreate = function () {
	  function object() {}

	  return function (proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }

	    if (objectCreate) {
	      return objectCreate(proto);
	    }

	    object.prototype = proto;
	    var result = new object();
	    object.prototype = undefined;
	    return result;
	  };
	}();

	var _baseCreate = baseCreate;

	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */


	function createCtor(Ctor) {
	  return function () {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;

	    switch (args.length) {
	      case 0:
	        return new Ctor();

	      case 1:
	        return new Ctor(args[0]);

	      case 2:
	        return new Ctor(args[0], args[1]);

	      case 3:
	        return new Ctor(args[0], args[1], args[2]);

	      case 4:
	        return new Ctor(args[0], args[1], args[2], args[3]);

	      case 5:
	        return new Ctor(args[0], args[1], args[2], args[3], args[4]);

	      case 6:
	        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

	      case 7:
	        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }

	    var thisBinding = _baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args); // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.

	    return isObject_1(result) ? result : thisBinding;
	  };
	}

	var _createCtor = createCtor;

	/** Used to compose bitmasks for function metadata. */


	var WRAP_BIND_FLAG = 1;
	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */

	function createBind(func, bitmask, thisArg) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = _createCtor(func);

	  function wrapper() {
	    var fn = this && this !== _root && this instanceof wrapper ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }

	  return wrapper;
	}

	var _createBind = createBind;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);

	    case 1:
	      return func.call(thisArg, args[0]);

	    case 2:
	      return func.call(thisArg, args[0], args[1]);

	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }

	  return func.apply(thisArg, args);
	}

	var _apply = apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */

	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;

	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }

	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }

	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }

	  return result;
	}

	var _composeArgs = composeArgs;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax$1 = Math.max;
	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */

	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax$1(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;

	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }

	  var offset = argsIndex;

	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }

	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }

	  return result;
	}

	var _composeArgsRight = composeArgsRight;

	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;

	  while (length--) {
	    if (array[length] === placeholder) {
	      ++result;
	    }
	  }

	  return result;
	}

	var _countHolders = countHolders;

	/**
	 * The function whose prototype chain sequence wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {// No operation performed.
	}

	var _baseLodash = baseLodash;

	/** Used as references for the maximum length and index of an array. */


	var MAX_ARRAY_LENGTH = 4294967295;
	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @constructor
	 * @param {*} value The value to wrap.
	 */

	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = MAX_ARRAY_LENGTH;
	  this.__views__ = [];
	} // Ensure `LazyWrapper` is an instance of `baseLodash`.


	LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;
	var _LazyWrapper = LazyWrapper;

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {// No operation performed.
	}

	var noop_1 = noop;

	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */


	var getData = !_metaMap ? noop_1 : function (func) {
	  return _metaMap.get(func);
	};
	var _getData = getData;

	/** Used to lookup unminified function names. */
	var realNames = {};
	var _realNames = realNames;

	/** Used for built-in method references. */


	var objectProto$3 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$4 = objectProto$3.hasOwnProperty;
	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */

	function getFuncName(func) {
	  var result = func.name + '',
	      array = _realNames[result],
	      length = hasOwnProperty$4.call(_realNames, result) ? array.length : 0;

	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;

	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }

	  return result;
	}

	var _getFuncName = getFuncName;

	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable explicit method chain sequences.
	 */


	function LodashWrapper(value, chainAll) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__chain__ = !!chainAll;
	  this.__index__ = 0;
	  this.__values__ = undefined;
	}

	LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;
	var _LodashWrapper = LodashWrapper;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	var isArray_1 = isArray;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	  array || (array = Array(length));

	  while (++index < length) {
	    array[index] = source[index];
	  }

	  return array;
	}

	var _copyArray = copyArray;

	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */


	function wrapperClone(wrapper) {
	  if (wrapper instanceof _LazyWrapper) {
	    return wrapper.clone();
	  }

	  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	  result.__actions__ = _copyArray(wrapper.__actions__);
	  result.__index__ = wrapper.__index__;
	  result.__values__ = wrapper.__values__;
	  return result;
	}

	var _wrapperClone = wrapperClone;

	/** Used for built-in method references. */


	var objectProto$4 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$5 = objectProto$4.hasOwnProperty;
	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit method
	 * chain sequences. Methods that operate on and return arrays, collections,
	 * and functions can be chained together. Methods that retrieve a single value
	 * or may return a primitive value will automatically end the chain sequence
	 * and return the unwrapped value. Otherwise, the value must be unwrapped
	 * with `_#value`.
	 *
	 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	 * enabled using `_.chain`.
	 *
	 * The execution of chained methods is lazy, that is, it's deferred until
	 * `_#value` is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion.
	 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	 * the creation of intermediate arrays and can greatly reduce the number of
	 * iteratee executions. Sections of a chain sequence qualify for shortcut
	 * fusion if the section is applied to an array and iteratees accept only
	 * one argument. The heuristic for whether a section qualifies for shortcut
	 * fusion is subject to change.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	 * `zipObject`, `zipObjectDeep`, and `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	 * `upperFirst`, `value`, and `words`
	 *
	 * @name _
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // Returns an unwrapped value.
	 * wrapped.reduce(_.add);
	 * // => 6
	 *
	 * // Returns a wrapped value.
	 * var squares = wrapped.map(square);
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */

	function lodash(value) {
	  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
	    if (value instanceof _LodashWrapper) {
	      return value;
	    }

	    if (hasOwnProperty$5.call(value, '__wrapped__')) {
	      return _wrapperClone(value);
	    }
	  }

	  return new _LodashWrapper(value);
	} // Ensure wrappers are instances of `baseLodash`.


	lodash.prototype = _baseLodash.prototype;
	lodash.prototype.constructor = lodash;
	var wrapperLodash = lodash;

	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	 *  else `false`.
	 */


	function isLaziable(func) {
	  var funcName = _getFuncName(func),
	      other = wrapperLodash[funcName];

	  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
	    return false;
	  }

	  if (func === other) {
	    return true;
	  }

	  var data = _getData(other);
	  return !!data && func === data[0];
	}

	var _isLaziable = isLaziable;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeNow = Date.now;
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */

	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	  return function () {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	    lastCalled = stamp;

	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }

	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut;

	/**
	 * Sets metadata for `func`.
	 *
	 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	 * period of time, it will trip its breaker and transition to an identity
	 * function to avoid garbage collection pauses in V8. See
	 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	 * for more details.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */


	var setData = _shortOut(_baseSetData);
	var _setData = setData;

	/** Used to match wrap detail comments. */
	var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	    reSplitDetails = /,? & /;
	/**
	 * Extracts wrapper details from the `source` body comment.
	 *
	 * @private
	 * @param {string} source The source to inspect.
	 * @returns {Array} Returns the wrapper details.
	 */

	function getWrapDetails(source) {
	  var match = source.match(reWrapDetails);
	  return match ? match[1].split(reSplitDetails) : [];
	}

	var _getWrapDetails = getWrapDetails;

	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
	/**
	 * Inserts wrapper `details` in a comment at the top of the `source` body.
	 *
	 * @private
	 * @param {string} source The source to modify.
	 * @returns {Array} details The details to insert.
	 * @returns {string} Returns the modified source.
	 */

	function insertWrapDetails(source, details) {
	  var length = details.length;

	  if (!length) {
	    return source;
	  }

	  var lastIndex = length - 1;
	  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	  details = details.join(length > 2 ? ', ' : ' ');
	  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}

	var _insertWrapDetails = insertWrapDetails;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function () {
	    return value;
	  };
	}

	var constant_1 = constant;

	var defineProperty = function () {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();

	var _defineProperty$1 = defineProperty;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */


	var baseSetToString = !_defineProperty$1 ? identity_1 : function (func, string) {
	  return _defineProperty$1(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant_1(string),
	    'writable': true
	  });
	};
	var _baseSetToString = baseSetToString;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */


	var setToString = _shortOut(_baseSetToString);
	var _setToString = setToString;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }

	  return array;
	}

	var _arrayEach = arrayEach;

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while (fromRight ? index-- : ++index < length) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }

	  return -1;
	}

	var _baseFindIndex = baseFindIndex;

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	var _baseIsNaN = baseIsNaN;

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }

	  return -1;
	}

	var _strictIndexOf = strictIndexOf;

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */


	function baseIndexOf(array, value, fromIndex) {
	  return value === value ? _strictIndexOf(array, value, fromIndex) : _baseFindIndex(array, _baseIsNaN, fromIndex);
	}

	var _baseIndexOf = baseIndexOf;

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */


	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && _baseIndexOf(array, value, 0) > -1;
	}

	var _arrayIncludes = arrayIncludes;

	/** Used to compose bitmasks for function metadata. */


	var WRAP_BIND_FLAG$1 = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256,
	    WRAP_FLIP_FLAG = 512;
	/** Used to associate wrap methods with their bit flags. */

	var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG$1], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];
	/**
	 * Updates wrapper `details` based on `bitmask` flags.
	 *
	 * @private
	 * @returns {Array} details The details to modify.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Array} Returns `details`.
	 */

	function updateWrapDetails(details, bitmask) {
	  _arrayEach(wrapFlags, function (pair) {
	    var value = '_.' + pair[0];

	    if (bitmask & pair[1] && !_arrayIncludes(details, value)) {
	      details.push(value);
	    }
	  });
	  return details.sort();
	}

	var _updateWrapDetails = updateWrapDetails;

	/**
	 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	 * with wrapper details in a comment at the top of the source body.
	 *
	 * @private
	 * @param {Function} wrapper The function to modify.
	 * @param {Function} reference The reference function.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Function} Returns `wrapper`.
	 */


	function setWrapToString(wrapper, reference, bitmask) {
	  var source = reference + '';
	  return _setToString(wrapper, _insertWrapDetails(source, _updateWrapDetails(_getWrapDetails(source), bitmask)));
	}

	var _setWrapToString = setWrapToString;

	/** Used to compose bitmasks for function metadata. */


	var WRAP_BIND_FLAG$2 = 1,
	    WRAP_BIND_KEY_FLAG$1 = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG$1 = 8,
	    WRAP_PARTIAL_FLAG$1 = 32,
	    WRAP_PARTIAL_RIGHT_FLAG$1 = 64;
	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */

	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & WRAP_CURRY_FLAG$1,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;
	  bitmask |= isCurry ? WRAP_PARTIAL_FLAG$1 : WRAP_PARTIAL_RIGHT_FLAG$1;
	  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$1);

	  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
	    bitmask &= ~(WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1);
	  }

	  var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
	  var result = wrapFunc.apply(undefined, newData);

	  if (_isLaziable(func)) {
	    _setData(result, newData);
	  }

	  result.placeholder = placeholder;
	  return _setWrapToString(result, func, bitmask);
	}

	var _createRecurry = createRecurry;

	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getHolder(func) {
	  var object = func;
	  return object.placeholder;
	}

	var _getHolder = getHolder;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/** Used to detect unsigned integer values. */

	var reIsUint = /^(?:0|[1-9]\d*)$/;
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */

	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	var _isIndex = isIndex;

	/* Built-in method references for those with the same name as other `lodash` methods. */


	var nativeMin = Math.min;
	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */

	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = _copyArray(array);

	  while (length--) {
	    var index = indexes[length];
	    array[length] = _isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }

	  return array;
	}

	var _reorder = reorder;

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';
	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */

	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];

	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }

	  return result;
	}

	var _replaceHolders = replaceHolders;

	/** Used to compose bitmasks for function metadata. */


	var WRAP_BIND_FLAG$3 = 1,
	    WRAP_BIND_KEY_FLAG$2 = 2,
	    WRAP_CURRY_FLAG$2 = 8,
	    WRAP_CURRY_RIGHT_FLAG$1 = 16,
	    WRAP_ARY_FLAG$1 = 128,
	    WRAP_FLIP_FLAG$1 = 512;
	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */

	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & WRAP_ARY_FLAG$1,
	      isBind = bitmask & WRAP_BIND_FLAG$3,
	      isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2,
	      isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1),
	      isFlip = bitmask & WRAP_FLIP_FLAG$1,
	      Ctor = isBindKey ? undefined : _createCtor(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length;

	    while (index--) {
	      args[index] = arguments[index];
	    }

	    if (isCurried) {
	      var placeholder = _getHolder(wrapper),
	          holdersCount = _countHolders(args, placeholder);
	    }

	    if (partials) {
	      args = _composeArgs(args, partials, holders, isCurried);
	    }

	    if (partialsRight) {
	      args = _composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }

	    length -= holdersCount;

	    if (isCurried && length < arity) {
	      var newHolders = _replaceHolders(args, placeholder);
	      return _createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
	    }

	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;
	    length = args.length;

	    if (argPos) {
	      args = _reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }

	    if (isAry && ary < length) {
	      args.length = ary;
	    }

	    if (this && this !== _root && this instanceof wrapper) {
	      fn = Ctor || _createCtor(fn);
	    }

	    return fn.apply(thisBinding, args);
	  }

	  return wrapper;
	}

	var _createHybrid = createHybrid;

	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */


	function createCurry(func, bitmask, arity) {
	  var Ctor = _createCtor(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = _getHolder(wrapper);

	    while (index--) {
	      args[index] = arguments[index];
	    }

	    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : _replaceHolders(args, placeholder);
	    length -= holders.length;

	    if (length < arity) {
	      return _createRecurry(func, bitmask, _createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
	    }

	    var fn = this && this !== _root && this instanceof wrapper ? Ctor : func;
	    return _apply(fn, this, args);
	  }

	  return wrapper;
	}

	var _createCurry = createCurry;

	/** Used to compose bitmasks for function metadata. */


	var WRAP_BIND_FLAG$4 = 1;
	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */

	function createPartial(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & WRAP_BIND_FLAG$4,
	      Ctor = _createCtor(func);

	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = this && this !== _root && this instanceof wrapper ? Ctor : func;

	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }

	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }

	    return _apply(fn, isBind ? thisArg : this, args);
	  }

	  return wrapper;
	}

	var _createPartial = createPartial;

	/** Used as the internal argument placeholder. */


	var PLACEHOLDER$1 = '__lodash_placeholder__';
	/** Used to compose bitmasks for function metadata. */

	var WRAP_BIND_FLAG$5 = 1,
	    WRAP_BIND_KEY_FLAG$3 = 2,
	    WRAP_CURRY_BOUND_FLAG$1 = 4,
	    WRAP_CURRY_FLAG$3 = 8,
	    WRAP_ARY_FLAG$2 = 128,
	    WRAP_REARG_FLAG$1 = 256;
	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeMin$1 = Math.min;
	/**
	 * Merges the function metadata of `source` into `data`.
	 *
	 * Merging metadata reduces the number of wrappers used to invoke a function.
	 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	 * may be applied regardless of execution order. Methods like `_.ary` and
	 * `_.rearg` modify function arguments, making the order in which they are
	 * executed important, preventing the merging of metadata. However, we make
	 * an exception for a safe combined case where curried functions have `_.ary`
	 * and or `_.rearg` applied.
	 *
	 * @private
	 * @param {Array} data The destination metadata.
	 * @param {Array} source The source metadata.
	 * @returns {Array} Returns `data`.
	 */

	function mergeData(data, source) {
	  var bitmask = data[1],
	      srcBitmask = source[1],
	      newBitmask = bitmask | srcBitmask,
	      isCommon = newBitmask < (WRAP_BIND_FLAG$5 | WRAP_BIND_KEY_FLAG$3 | WRAP_ARY_FLAG$2);
	  var isCombo = srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_CURRY_FLAG$3 || srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_REARG_FLAG$1 && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$1) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG$3; // Exit early if metadata can't be merged.

	  if (!(isCommon || isCombo)) {
	    return data;
	  } // Use source `thisArg` if available.


	  if (srcBitmask & WRAP_BIND_FLAG$5) {
	    data[2] = source[2]; // Set when currying a bound function.

	    newBitmask |= bitmask & WRAP_BIND_FLAG$5 ? 0 : WRAP_CURRY_BOUND_FLAG$1;
	  } // Compose partial arguments.


	  var value = source[3];

	  if (value) {
	    var partials = data[3];
	    data[3] = partials ? _composeArgs(partials, value, source[4]) : value;
	    data[4] = partials ? _replaceHolders(data[3], PLACEHOLDER$1) : source[4];
	  } // Compose partial right arguments.


	  value = source[5];

	  if (value) {
	    partials = data[5];
	    data[5] = partials ? _composeArgsRight(partials, value, source[6]) : value;
	    data[6] = partials ? _replaceHolders(data[5], PLACEHOLDER$1) : source[6];
	  } // Use source `argPos` if available.


	  value = source[7];

	  if (value) {
	    data[7] = value;
	  } // Use source `ary` if it's smaller.


	  if (srcBitmask & WRAP_ARY_FLAG$2) {
	    data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
	  } // Use source `arity` if one is not provided.


	  if (data[9] == null) {
	    data[9] = source[9];
	  } // Use source `func` and merge bitmasks.


	  data[0] = source[0];
	  data[1] = newBitmask;
	  return data;
	}

	var _mergeData = mergeData;

	/** `Object#toString` result references. */


	var symbolTag = '[object Symbol]';
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */

	function isSymbol(value) {
	  return typeof value == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */


	var NAN = 0 / 0;
	/** Used to match leading and trailing whitespace. */

	var reTrim = /^\s+|\s+$/g;
	/** Used to detect bad signed hexadecimal string values. */

	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	/** Used to detect binary string values. */

	var reIsBinary = /^0b[01]+$/i;
	/** Used to detect octal string values. */

	var reIsOctal = /^0o[0-7]+$/i;
	/** Built-in method references without a dependency on `root`. */

	var freeParseInt = parseInt;
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */

	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }

	  if (isSymbol_1(value)) {
	    return NAN;
	  }

	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? other + '' : other;
	  }

	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }

	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}

	var toNumber_1 = toNumber;

	/** Used as references for various `Number` constants. */


	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */

	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }

	  value = toNumber_1(value);

	  if (value === INFINITY || value === -INFINITY) {
	    var sign = value < 0 ? -1 : 1;
	    return sign * MAX_INTEGER;
	  }

	  return value === value ? value : 0;
	}

	var toFinite_1 = toFinite;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */


	function toInteger(value) {
	  var result = toFinite_1(value),
	      remainder = result % 1;
	  return result === result ? remainder ? result - remainder : result : 0;
	}

	var toInteger_1 = toInteger;

	/** Error message constants. */


	var FUNC_ERROR_TEXT = 'Expected a function';
	/** Used to compose bitmasks for function metadata. */

	var WRAP_BIND_FLAG$6 = 1,
	    WRAP_BIND_KEY_FLAG$4 = 2,
	    WRAP_CURRY_FLAG$4 = 8,
	    WRAP_CURRY_RIGHT_FLAG$2 = 16,
	    WRAP_PARTIAL_FLAG$2 = 32,
	    WRAP_PARTIAL_RIGHT_FLAG$2 = 64;
	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeMax$2 = Math.max;
	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags.
	 *    1 - `_.bind`
	 *    2 - `_.bindKey`
	 *    4 - `_.curry` or `_.curryRight` of a bound function
	 *    8 - `_.curry`
	 *   16 - `_.curryRight`
	 *   32 - `_.partial`
	 *   64 - `_.partialRight`
	 *  128 - `_.rearg`
	 *  256 - `_.ary`
	 *  512 - `_.flip`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */

	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG$4;

	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }

	  var length = partials ? partials.length : 0;

	  if (!length) {
	    bitmask &= ~(WRAP_PARTIAL_FLAG$2 | WRAP_PARTIAL_RIGHT_FLAG$2);
	    partials = holders = undefined;
	  }

	  ary = ary === undefined ? ary : nativeMax$2(toInteger_1(ary), 0);
	  arity = arity === undefined ? arity : toInteger_1(arity);
	  length -= holders ? holders.length : 0;

	  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG$2) {
	    var partialsRight = partials,
	        holdersRight = holders;
	    partials = holders = undefined;
	  }

	  var data = isBindKey ? undefined : _getData(func);
	  var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	  if (data) {
	    _mergeData(newData, data);
	  }

	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax$2(newData[9] - length, 0);

	  if (!arity && bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2)) {
	    bitmask &= ~(WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2);
	  }

	  if (!bitmask || bitmask == WRAP_BIND_FLAG$6) {
	    var result = _createBind(func, bitmask, thisArg);
	  } else if (bitmask == WRAP_CURRY_FLAG$4 || bitmask == WRAP_CURRY_RIGHT_FLAG$2) {
	    result = _createCurry(func, bitmask, arity);
	  } else if ((bitmask == WRAP_PARTIAL_FLAG$2 || bitmask == (WRAP_BIND_FLAG$6 | WRAP_PARTIAL_FLAG$2)) && !holders.length) {
	    result = _createPartial(func, bitmask, thisArg, partials);
	  } else {
	    result = _createHybrid.apply(undefined, newData);
	  }

	  var setter = data ? _baseSetData : _setData;
	  return _setWrapToString(setter(result, newData), func, bitmask);
	}

	var _createWrap = createWrap;

	/** Used to compose bitmasks for function metadata. */


	var WRAP_ARY_FLAG$3 = 128;
	/**
	 * Creates a function that invokes `func`, with up to `n` arguments,
	 * ignoring any additional arguments.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} [n=func.length] The arity cap.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new capped function.
	 * @example
	 *
	 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	 * // => [6, 8, 10]
	 */

	function ary(func, n, guard) {
	  n = guard ? undefined : n;
	  n = func && n == null ? func.length : n;
	  return _createWrap(func, WRAP_ARY_FLAG$3, undefined, undefined, undefined, undefined, n);
	}

	var ary_1 = ary;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */


	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty$1) {
	    _defineProperty$1(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	var eq_1 = eq;

	/** Used for built-in method references. */


	var objectProto$5 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$6 = objectProto$5.hasOwnProperty;
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */

	function assignValue(object, key, value) {
	  var objValue = object[key];

	  if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */


	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }

	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }

	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }

	  return result;
	}

	var _baseTimes = baseTimes;

	/** `Object#toString` result references. */


	var argsTag = '[object Arguments]';
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */

	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */


	var objectProto$6 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$7 = objectProto$6.hasOwnProperty;
	/** Built-in value references. */

	var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */

	var isArguments = _baseIsArguments(function () {
	  return arguments;
	}()) ? _baseIsArguments : function (value) {
	  return isObjectLike_1(value) && hasOwnProperty$7.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};
	var isArguments_1 = isArguments;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */


	var freeExports = exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */

	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	/** Detect the popular CommonJS extension `module.exports`. */

	var moduleExports = freeModule && freeModule.exports === freeExports;
	/** Built-in value references. */

	var Buffer = moduleExports ? _root.Buffer : undefined;
	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */

	var isBuffer = nativeIsBuffer || stubFalse_1;
	module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */

	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */


	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	/** Used to identify `toStringTag` values of typed arrays. */

	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */

	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */


	var freeExports = exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */

	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	/** Detect the popular CommonJS extension `module.exports`. */

	var moduleExports = freeModule && freeModule.exports === freeExports;
	/** Detect free variable `process` from Node.js. */

	var freeProcess = moduleExports && _freeGlobal.process;
	/** Used to access faster Node.js helpers. */

	var nodeUtil = function () {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    } // Legacy `process.binding('util')` for Node.js < 10.


	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */


	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */

	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */


	var objectProto$7 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$8 = objectProto$7.hasOwnProperty;
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */

	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
	    _isIndex(key, length)))) {
	      result.push(key);
	    }
	  }

	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */

	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$8;
	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */


	var nativeKeys = _overArg(Object.keys, Object);
	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */


	var objectProto$9 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$9 = objectProto$9.hasOwnProperty;
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */

	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }

	  var result = [];

	  for (var key in Object(object)) {
	    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }

	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */


	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */


	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */


	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */


	function assocIndexOf(array, key) {
	  var length = array.length;

	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }

	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */


	var arrayProto = Array.prototype;
	/** Built-in value references. */

	var splice = arrayProto.splice;
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }

	  var lastIndex = data.length - 1;

	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }

	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */


	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);
	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */


	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */


	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }

	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */


	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();

	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	} // Add methods to `ListCache`.


	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;
	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */


	function stackClear() {
	  this.__data__ = new _ListCache();
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/* Built-in method references that are verified to be native. */


	var Map$1 = _getNative(_root, 'Map');
	var _Map = Map$1;

	/* Built-in method references that are verified to be native. */


	var nativeCreate = _getNative(Object, 'create');
	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */


	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */


	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	/** Used for built-in method references. */

	var objectProto$a = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$a = objectProto$a.hasOwnProperty;
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function hashGet(key) {
	  var data = this.__data__;

	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }

	  return hasOwnProperty$a.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */


	var objectProto$b = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$b = objectProto$b.hasOwnProperty;
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$b.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */


	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */

	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */


	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();

	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	} // Add methods to `Hash`.


	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;
	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */


	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash(),
	    'map': new (_Map || _ListCache)(),
	    'string': new _Hash()
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */


	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */


	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */


	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */


	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */


	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */


	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();

	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	} // Add methods to `MapCache`.


	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;
	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */


	var LARGE_ARRAY_SIZE = 200;
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */

	function stackSet(key, value) {
	  var data = this.__data__;

	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;

	    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }

	    data = this.__data__ = new _MapCache(pairs);
	  }

	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */


	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	} // Add methods to `Stack`.


	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;
	var _Stack = Stack;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];

	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }

	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */


	var objectProto$c = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$c = objectProto$c.hasOwnProperty;
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */

	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }

	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$c.call(object, key)))) {
	      result.push(key);
	    }
	  }

	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */


	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */


	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */


	var freeExports = exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */

	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	/** Detect the popular CommonJS extension `module.exports`. */

	var moduleExports = freeModule && freeModule.exports === freeExports;
	/** Built-in value references. */

	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */

	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }

	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];

	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }

	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */


	var objectProto$d = Object.prototype;
	/** Built-in value references. */

	var propertyIsEnumerable$1 = objectProto$d.propertyIsEnumerable;
	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeGetSymbols = Object.getOwnPropertySymbols;
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */

	var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
	  if (object == null) {
	    return [];
	  }

	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function (symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};
	var _getSymbols = getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */


	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }

	  return array;
	}

	var _arrayPush = arrayPush;

	/** Built-in value references. */


	var getPrototype = _overArg(Object.getPrototypeOf, Object);
	var _getPrototype = getPrototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */


	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */

	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
	  var result = [];

	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }

	  return result;
	};
	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */


	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */


	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */


	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */


	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/* Built-in method references that are verified to be native. */


	var DataView = _getNative(_root, 'DataView');
	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */


	var Promise$1 = _getNative(_root, 'Promise');
	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */


	var Set$1 = _getNative(_root, 'Set');
	var _Set = Set$1;

	/** `Object#toString` result references. */


	var mapTag$1 = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';
	var dataViewTag$1 = '[object DataView]';
	/** Used to detect maps, sets, and weakmaps. */

	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */

	var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

	if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1 || _Map && getTag(new _Map()) != mapTag$1 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$1 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
	  getTag = function (value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString:
	          return dataViewTag$1;

	        case mapCtorString:
	          return mapTag$1;

	        case promiseCtorString:
	          return promiseTag;

	        case setCtorString:
	          return setTag$1;

	        case weakMapCtorString:
	          return weakMapTag$1;
	      }
	    }

	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used for built-in method references. */
	var objectProto$e = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$d = objectProto$e.hasOwnProperty;
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */

	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

	  if (length && typeof array[0] == 'string' && hasOwnProperty$d.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }

	  return result;
	}

	var _initCloneArray = initCloneArray;

	/** Built-in value references. */


	var Uint8Array = _root.Uint8Array;
	var _Uint8Array = Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */


	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */


	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */

	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */


	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */

	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */


	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */


	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag$1 = '[object Symbol]';
	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */

	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;

	  switch (tag) {
	    case arrayBufferTag$1:
	      return _cloneArrayBuffer(object);

	    case boolTag$1:
	    case dateTag$1:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1:
	    case float64Tag$1:
	    case int8Tag$1:
	    case int16Tag$1:
	    case int32Tag$1:
	    case uint8Tag$1:
	    case uint8ClampedTag$1:
	    case uint16Tag$1:
	    case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$2:
	      return new Ctor();

	    case numberTag$1:
	    case stringTag$1:
	      return new Ctor(object);

	    case regexpTag$1:
	      return _cloneRegExp(object);

	    case setTag$2:
	      return new Ctor();

	    case symbolTag$1:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */


	function initCloneObject(object) {
	  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
	}

	var _initCloneObject = initCloneObject;

	/** `Object#toString` result references. */


	var mapTag$3 = '[object Map]';
	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */

	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */


	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */

	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
	var isMap_1 = isMap;

	/** `Object#toString` result references. */


	var setTag$3 = '[object Set]';
	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */

	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$3;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */


	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */

	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */


	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;
	/** `Object#toString` result references. */

	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';
	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';
	/** Used to identify `toStringTag` values supported by `_.clone`. */

	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] = cloneableTags[numberTag$2] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$2] = cloneableTags[setTag$4] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */

	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }

	  if (result !== undefined) {
	    return result;
	  }

	  if (!isObject_1(value)) {
	    return value;
	  }

	  var isArr = isArray_1(value);

	  if (isArr) {
	    result = _initCloneArray(value);

	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }

	    if (tag == objectTag$2 || tag == argsTag$2 || isFunc && !object) {
	      result = isFlat || isFunc ? {} : _initCloneObject(value);

	      if (!isDeep) {
	        return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }

	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  } // Check for circular references and return its corresponding clone.


	  stack || (stack = new _Stack());
	  var stacked = stack.get(value);

	  if (stacked) {
	    return stacked;
	  }

	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function (subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	    return result;
	  }

	  if (isMap_1(value)) {
	    value.forEach(function (subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	    return result;
	  }

	  var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn : keys_1;
	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function (subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    } // Recursively populate clone (susceptible to call stack limits).


	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */


	var CLONE_SYMBOLS_FLAG$1 = 4;
	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */

	function clone(value) {
	  return _baseClone(value, CLONE_SYMBOLS_FLAG$1);
	}

	var clone_1 = clone;

	/** Used to compose bitmasks for function metadata. */


	var WRAP_CURRY_FLAG$5 = 8;
	/**
	 * Creates a function that accepts arguments of `func` and either invokes
	 * `func` returning its result, if at least `arity` number of arguments have
	 * been provided, or returns a function that accepts the remaining `func`
	 * arguments, and so on. The arity of `func` may be specified if `func.length`
	 * is not sufficient.
	 *
	 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Function
	 * @param {Function} func The function to curry.
	 * @param {number} [arity=func.length] The arity of `func`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new curried function.
	 * @example
	 *
	 * var abc = function(a, b, c) {
	 *   return [a, b, c];
	 * };
	 *
	 * var curried = _.curry(abc);
	 *
	 * curried(1)(2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2, 3);
	 * // => [1, 2, 3]
	 *
	 * // Curried with placeholders.
	 * curried(1)(_, 3)(2);
	 * // => [1, 2, 3]
	 */

	function curry(func, arity, guard) {
	  arity = guard ? undefined : arity;
	  var result = _createWrap(func, WRAP_CURRY_FLAG$5, undefined, undefined, undefined, undefined, undefined, arity);
	  result.placeholder = curry.placeholder;
	  return result;
	} // Assign default placeholders.


	curry.placeholder = {};
	var curry_1 = curry;

	/** `Object#toString` result references. */


	var objectTag$3 = '[object Object]';
	/** Used for built-in method references. */

	var funcProto$2 = Function.prototype,
	    objectProto$f = Object.prototype;
	/** Used to resolve the decompiled source of functions. */

	var funcToString$2 = funcProto$2.toString;
	/** Used to check objects for own properties. */

	var hasOwnProperty$e = objectProto$f.hasOwnProperty;
	/** Used to infer the `Object` constructor. */

	var objectCtorString = funcToString$2.call(Object);
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */

	function isPlainObject(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$3) {
	    return false;
	  }

	  var proto = _getPrototype(value);

	  if (proto === null) {
	    return true;
	  }

	  var Ctor = hasOwnProperty$e.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject;

	/** `Object#toString` result references. */


	var domExcTag = '[object DOMException]',
	    errorTag$2 = '[object Error]';
	/**
	 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	 * `SyntaxError`, `TypeError`, or `URIError` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	 * @example
	 *
	 * _.isError(new Error);
	 * // => true
	 *
	 * _.isError(Error);
	 * // => false
	 */

	function isError(value) {
	  if (!isObjectLike_1(value)) {
	    return false;
	  }

	  var tag = _baseGetTag(value);
	  return tag == errorTag$2 || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject_1(value);
	}

	var isError_1 = isError;

	/** `Object#toString` result references. */


	var weakMapTag$3 = '[object WeakMap]';
	/**
	 * Checks if `value` is classified as a `WeakMap` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	 * @example
	 *
	 * _.isWeakMap(new WeakMap);
	 * // => true
	 *
	 * _.isWeakMap(new Map);
	 * // => false
	 */

	function isWeakMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == weakMapTag$3;
	}

	var isWeakMap_1 = isWeakMap;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */

	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);

	  return this;
	}

	var _setCacheAdd = setCacheAdd;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */


	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	  this.__data__ = new _MapCache();

	  while (++index < length) {
	    this.add(values[index]);
	  }
	} // Add methods to `SetCache`.


	SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
	SetCache.prototype.has = _setCacheHas;
	var _SetCache = SetCache;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }

	  return false;
	}

	var _arraySome = arraySome;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas;

	/** Used to compose bitmasks for value comparisons. */


	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */

	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  } // Assume cyclic values are equal.


	  var stacked = stack.get(array);

	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }

	  var index = -1,
	      result = true,
	      seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : undefined;
	  stack.set(array, other);
	  stack.set(other, array); // Ignore non-index properties.

	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }

	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }

	      result = false;
	      break;
	    } // Recursively compare arrays (susceptible to call stack limits).


	    if (seen) {
	      if (!_arraySome(other, function (othValue, othIndex) {
	        if (!_cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	          return seen.push(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	      result = false;
	      break;
	    }
	  }

	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

	/** Used to compose bitmasks for value comparisons. */


	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;
	/** `Object#toString` result references. */

	var boolTag$3 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    errorTag$3 = '[object Error]',
	    mapTag$5 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$5 = '[object Set]',
	    stringTag$3 = '[object String]',
	    symbolTag$3 = '[object Symbol]';
	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$4 = '[object DataView]';
	/** Used to convert symbols to primitives and strings. */

	var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */

	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag$4:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }

	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag$3:
	      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
	        return false;
	      }

	      return true;

	    case boolTag$3:
	    case dateTag$3:
	    case numberTag$3:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq_1(+object, +other);

	    case errorTag$3:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$3:
	    case stringTag$3:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == other + '';

	    case mapTag$5:
	      var convert = _mapToArray;

	    case setTag$5:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
	      convert || (convert = _setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      } // Assume cyclic values are equal.


	      var stacked = stack.get(object);

	      if (stacked) {
	        return stacked == other;
	      }

	      bitmask |= COMPARE_UNORDERED_FLAG$1; // Recursively compare objects (susceptible to call stack limits).

	      stack.set(object, other);
	      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag$3:
	      if (symbolValueOf$1) {
	        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
	      }

	  }

	  return false;
	}

	var _equalByTag = equalByTag;

	/** Used to compose bitmasks for value comparisons. */


	var COMPARE_PARTIAL_FLAG$2 = 1;
	/** Used for built-in method references. */

	var objectProto$g = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$f = objectProto$g.hasOwnProperty;
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */

	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
	      objProps = _getAllKeys(object),
	      objLength = objProps.length,
	      othProps = _getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }

	  var index = objLength;

	  while (index--) {
	    var key = objProps[index];

	    if (!(isPartial ? key in other : hasOwnProperty$f.call(other, key))) {
	      return false;
	    }
	  } // Assume cyclic values are equal.


	  var stacked = stack.get(object);

	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }

	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	  var skipCtor = isPartial;

	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    } // Recursively compare objects (susceptible to call stack limits).


	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
	      result = false;
	      break;
	    }

	    skipCtor || (skipCtor = key == 'constructor');
	  }

	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }

	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects;

	/** Used to compose bitmasks for value comparisons. */


	var COMPARE_PARTIAL_FLAG$3 = 1;
	/** `Object#toString` result references. */

	var argsTag$3 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    objectTag$4 = '[object Object]';
	/** Used for built-in method references. */

	var objectProto$h = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$g = objectProto$h.hasOwnProperty;
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */

	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray_1(object),
	      othIsArr = isArray_1(other),
	      objTag = objIsArr ? arrayTag$2 : _getTag(object),
	      othTag = othIsArr ? arrayTag$2 : _getTag(other);
	  objTag = objTag == argsTag$3 ? objectTag$4 : objTag;
	  othTag = othTag == argsTag$3 ? objectTag$4 : othTag;
	  var objIsObj = objTag == objectTag$4,
	      othIsObj = othTag == objectTag$4,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer_1(object)) {
	    if (!isBuffer_1(other)) {
	      return false;
	    }

	    objIsArr = true;
	    objIsObj = false;
	  }

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new _Stack());
	    return objIsArr || isTypedArray_1(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }

	  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$g.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$g.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	      stack || (stack = new _Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }

	  if (!isSameTag) {
	    return false;
	  }

	  stack || (stack = new _Stack());
	  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */


	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }

	  if (value == null || other == null || !isObjectLike_1(value) && !isObjectLike_1(other)) {
	    return value !== value && other !== other;
	  }

	  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	var _baseIsEqual = baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */


	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */

	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }

	  object = Object(object);

	  while (index--) {
	    var data = matchData[index];

	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }

	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new _Stack();

	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }

	      if (!(result === undefined ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
	        return false;
	      }
	    }
	  }

	  return true;
	}

	var _baseIsMatch = baseIsMatch;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */


	function isStrictComparable(value) {
	  return value === value && !isObject_1(value);
	}

	var _isStrictComparable = isStrictComparable;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */


	function getMatchData(object) {
	  var result = keys_1(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];
	    result[length] = [key, value, _isStrictComparable(value)];
	  }

	  return result;
	}

	var _getMatchData = getMatchData;

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }

	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}

	var _matchesStrictComparable = matchesStrictComparable;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */


	function baseMatches(source) {
	  var matchData = _getMatchData(source);

	  if (matchData.length == 1 && matchData[0][2]) {
	    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }

	  return function (object) {
	    return object === source || _baseIsMatch(object, source, matchData);
	  };
	}

	var _baseMatches = baseMatches;

	/** Used to match property names within property paths. */


	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */

	function isKey(value, object) {
	  if (isArray_1(value)) {
	    return false;
	  }

	  var type = typeof value;

	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
	    return true;
	  }

	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	var _isKey = isKey;

	/** Error message constants. */


	var FUNC_ERROR_TEXT$1 = 'Expected a function';
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */

	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT$1);
	  }

	  var memoized = function () {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }

	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };

	  memoized.cache = new (memoize.Cache || _MapCache)();
	  return memoized;
	} // Expose `MapCache`.


	memoize.Cache = _MapCache;
	var memoize_1 = memoize;

	/** Used as the maximum memoize cache size. */


	var MAX_MEMOIZE_SIZE = 500;
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */

	function memoizeCapped(func) {
	  var result = memoize_1(func, function (key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }

	    return key;
	  });
	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped;

	/** Used to match property names within property paths. */


	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	/** Used to match backslashes in property paths. */

	var reEscapeChar = /\\(\\)?/g;
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */

	var stringToPath = _memoizeCapped(function (string) {
	  var result = [];

	  if (string.charCodeAt(0) === 46
	  /* . */
	  ) {
	      result.push('');
	    }

	  string.replace(rePropName, function (match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});
	var _stringToPath = stringToPath;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }

	  return result;
	}

	var _arrayMap = arrayMap;

	/** Used as references for various `Number` constants. */


	var INFINITY$1 = 1 / 0;
	/** Used to convert symbols to primitives and strings. */

	var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */

	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }

	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }

	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }

	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */


	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */


	function castPath(value, object) {
	  if (isArray_1(value)) {
	    return value;
	  }

	  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
	}

	var _castPath = castPath;

	/** Used as references for various `Number` constants. */


	var INFINITY$2 = 1 / 0;
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */

	function toKey(value) {
	  if (typeof value == 'string' || isSymbol_1(value)) {
	    return value;
	  }

	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY$2 ? '-0' : result;
	}

	var _toKey = toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */


	function baseGet(object, path) {
	  path = _castPath(path, object);
	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[_toKey(path[index++])];
	  }

	  return index && index == length ? object : undefined;
	}

	var _baseGet = baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */


	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : _baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */


	function hasPath(object, path, hasFunc) {
	  path = _castPath(path, object);
	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = _toKey(path[index]);

	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }

	    object = object[key];
	  }

	  if (result || ++index != length) {
	    return result;
	  }

	  length = object == null ? 0 : object.length;
	  return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
	}

	var _hasPath = hasPath;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */


	function hasIn(object, path) {
	  return object != null && _hasPath(object, path, _baseHasIn);
	}

	var hasIn_1 = hasIn;

	/** Used to compose bitmasks for value comparisons. */


	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */

	function baseMatchesProperty(path, srcValue) {
	  if (_isKey(path) && _isStrictComparable(srcValue)) {
	    return _matchesStrictComparable(_toKey(path), srcValue);
	  }

	  return function (object) {
	    var objValue = get_1(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn_1(object, path) : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
	  };
	}

	var _baseMatchesProperty = baseMatchesProperty;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */


	function basePropertyDeep(path) {
	  return function (object) {
	    return _baseGet(object, path);
	  };
	}

	var _basePropertyDeep = basePropertyDeep;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */


	function property(path) {
	  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
	}

	var property_1 = property;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */


	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }

	  if (value == null) {
	    return identity_1;
	  }

	  if (typeof value == 'object') {
	    return isArray_1(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
	  }

	  return property_1(value);
	}

	var _baseIteratee = baseIteratee;

	/** Used to compose bitmasks for cloning. */


	var CLONE_DEEP_FLAG$1 = 1;
	/**
	 * Creates a function that invokes `func` with the arguments of the created
	 * function. If `func` is a property name, the created function returns the
	 * property value for a given element. If `func` is an array or object, the
	 * created function returns `true` for elements that contain the equivalent
	 * source properties, otherwise it returns `false`.
	 *
	 * @static
	 * @since 4.0.0
	 * @memberOf _
	 * @category Util
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @returns {Function} Returns the callback.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, _.iteratee(['user', 'fred']));
	 * // => [{ 'user': 'fred', 'age': 40 }]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, _.iteratee('user'));
	 * // => ['barney', 'fred']
	 *
	 * // Create custom iteratee shorthands.
	 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	 *     return func.test(string);
	 *   };
	 * });
	 *
	 * _.filter(['abc', 'def'], /ef/);
	 * // => ['def']
	 */

	function iteratee(func) {
	  return _baseIteratee(typeof func == 'function' ? func : _baseClone(func, CLONE_DEEP_FLAG$1));
	}

	var iteratee_1 = iteratee;

	/** Built-in value references. */


	var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */

	function isFlattenable(value) {
	  return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	var _isFlattenable = isFlattenable;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */


	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	  predicate || (predicate = _isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];

	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        _arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }

	  return result;
	}

	var _baseFlatten = baseFlatten;

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */


	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? _baseFlatten(array, 1) : [];
	}

	var flatten_1 = flatten;

	/* Built-in method references for those with the same name as other `lodash` methods. */


	var nativeMax$3 = Math.max;
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */

	function overRest(func, start, transform) {
	  start = nativeMax$3(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax$3(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }

	    index = -1;
	    var otherArgs = Array(start + 1);

	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }

	    otherArgs[start] = transform(array);
	    return _apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest;

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */


	function flatRest(func) {
	  return _setToString(_overRest(func, undefined, flatten_1), func + '');
	}

	var _flatRest = flatRest;

	/** Used to compose bitmasks for function metadata. */


	var WRAP_REARG_FLAG$2 = 256;
	/**
	 * Creates a function that invokes `func` with arguments arranged according
	 * to the specified `indexes` where the argument value at the first index is
	 * provided as the first argument, the argument value at the second index is
	 * provided as the second argument, and so on.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to rearrange arguments for.
	 * @param {...(number|number[])} indexes The arranged argument indexes.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var rearged = _.rearg(function(a, b, c) {
	 *   return [a, b, c];
	 * }, [2, 0, 1]);
	 *
	 * rearged('b', 'c', 'a')
	 * // => ['a', 'b', 'c']
	 */

	var rearg = _flatRest(function (func, indexes) {
	  return _createWrap(func, WRAP_REARG_FLAG$2, undefined, undefined, undefined, indexes);
	});
	var rearg_1 = rearg;

	/**
	 * Converts `value` to a property path array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Util
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the new property path array.
	 * @example
	 *
	 * _.toPath('a.b.c');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toPath('a[0].b.c');
	 * // => ['a', '0', 'b', 'c']
	 */


	function toPath(value) {
	  if (isArray_1(value)) {
	    return _arrayMap(value, _toKey);
	  }

	  return isSymbol_1(value) ? [value] : _copyArray(_stringToPath(toString_1(value)));
	}

	var toPath_1 = toPath;

	var _util = {
	  'ary': ary_1,
	  'assign': _baseAssign,
	  'clone': clone_1,
	  'curry': curry_1,
	  'forEach': _arrayEach,
	  'isArray': isArray_1,
	  'isError': isError_1,
	  'isFunction': isFunction_1,
	  'isWeakMap': isWeakMap_1,
	  'iteratee': iteratee_1,
	  'keys': _baseKeys,
	  'rearg': rearg_1,
	  'toInteger': toInteger_1,
	  'toPath': toPath_1
	};

	/**
	 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
	 * version with conversion `options` applied. If `name` is an object its methods
	 * will be converted.
	 *
	 * @param {string} name The name of the function to wrap.
	 * @param {Function} [func] The function to wrap.
	 * @param {Object} [options] The options object. See `baseConvert` for more details.
	 * @returns {Function|Object} Returns the converted function or object.
	 */


	function convert(name, func, options) {
	  return _baseConvert(_util, name, func, options);
	}

	var convert_1 = convert;

	var func = convert_1('get', get_1);

	func.placeholder = placeholder;
	var get$1 = func;

	const Node = ({
	  node,
	  path,
	  attach,
	  detach,
	  schema
	}) => {
	  const {
	    childrenKey,
	    type,
	    renderer,
	    childType: childSchema
	  } = schema;
	  const {
	    type: childType,
	    idKey: childIdKey
	  } = childSchema || {};
	  const canDrag = path.length > 0;
	  const canDrop = !!childrenKey;
	  return renderer({
	    node,
	    getDragProps: () => canDrag ? {
	      draggable: true,
	      onDragStart: detach(path, type, node)
	    } : {},
	    getDropProps: i => !!childrenKey ? {
	      onDragOver: e => e.preventDefault(),
	      onDrop: attach([...path, pathSpec(childrenKey, i, childType)])
	    } : {},
	    canDrag,
	    canDrop,
	    parentType: type,
	    allowedType: childType,
	    children: !!childrenKey && !!childSchema ? (get$1(childrenKey, node) || []).map((child, i) => react.createElement(Node, {
	      key: child[childIdKey] || i,
	      node: child,
	      path: [...path, pathSpec(childrenKey, i, childType)],
	      attach: attach,
	      detach: detach,
	      schema: childSchema
	    })) : []
	  });
	};

	const EditTypes = {
	  INSERT: 'INSERT',
	  REMOVE: 'REMOVE',
	  MOVE: 'MOVE'
	};

	const insert = (id, type, data, parents, index) => ({
	  type: EditTypes.INSERT,
	  nodeType: type,
	  payload: {
	    id,
	    data,
	    type,
	    parents,
	    index
	  }
	});

	const remove = (id, type, parents) => ({
	  type: EditTypes.REMOVE,
	  nodeType: type,
	  payload: {
	    id,
	    type,
	    parents
	  }
	});

	const move = (id, type, index, oldParents, newParents) => ({
	  type: EditTypes.MOVE,
	  nodeType: type,
	  payload: {
	    id,
	    type,
	    index,
	    oldParents,
	    newParents
	  }
	});

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */


	function baseSet(object, path, value, customizer) {
	  if (!isObject_1(object)) {
	    return object;
	  }

	  path = _castPath(path, object);
	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = _toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;

	      if (newValue === undefined) {
	        newValue = isObject_1(objValue) ? objValue : _isIndex(path[index + 1]) ? [] : {};
	      }
	    }

	    _assignValue(nested, key, newValue);
	    nested = nested[key];
	  }

	  return object;
	}

	var _baseSet = baseSet;

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */


	function set$1(object, path, value) {
	  return object == null ? object : _baseSet(object, path, value);
	}

	var set_1 = set$1;

	var func$1 = convert_1('set', set_1);

	func$1.placeholder = placeholder;
	var set$2 = func$1;

	const defaults = {
	  idKey: 'id'
	};

	const el = (type, renderer, childType = undefined, opts = {}) => _objectSpread({
	  childrenKey: childType ? `${childType.type}s` : undefined
	}, _objectSpread({}, defaults, opts), {
	  childType,
	  type,
	  renderer
	});

	const schemaAtDepth = (schema, depth) => {
	  let newSchema = schema;

	  for (let i = 0; i < depth; i += 1) {
	    if (!newSchema) {
	      return null;
	    }

	    newSchema = newSchema.childType;
	  }

	  return newSchema;
	};

	const getParents = (tree, schema, path) => {
	  const [parents] = path.reduce(([curParents, curPath, curSchema], pathSpec$$1, i) => {
	    const pathStr = toPathStr(curPath);
	    return [[...(curParents || []), {
	      id: (pathStr ? get$1(pathStr, tree) : tree)[(curSchema || {}).idKey],
	      type: (curSchema || {}).type
	    }], [...curPath, pathSpec$$1], (curSchema || {}).childType];
	  }, [[], [], schema]);
	  return parents;
	};

	const getContext = (tree, schema, sourcePath, path) => {
	  const newPath = sourcePath ? pathForMove(sourcePath, path) : path;
	  const parents = getParents(tree, schema, newPath);
	  const [pathStr, index] = toPathStrAndIndex(newPath);
	  const {
	    type,
	    idKey
	  } = schemaAtDepth(schema, newPath.length) || {};
	  const children = get$1(pathStr, tree) || [];
	  return {
	    type,
	    idKey,
	    parents,
	    pathStr,
	    index,
	    children
	  };
	};

	const insert$1 = (tree, schema, sourcePath, path, data) => {
	  const {
	    type,
	    idKey,
	    parents,
	    pathStr,
	    index,
	    children
	  } = getContext(tree, schema, sourcePath, path);
	  const newTree = set$2(pathStr, [...children.slice(0, index), data, ...children.slice(index)], tree);
	  return [newTree, [insert(data[idKey], type, data, parents, index)]];
	}; // will return an edit with undefined keys if id and type are missing


	const remove$1 = (tree, schema, sourcePath, path, data) => {
	  const {
	    type,
	    idKey,
	    parents,
	    pathStr,
	    index,
	    children
	  } = getContext(tree, schema, sourcePath, path);
	  const newTree = set$2(pathStr, [...children.slice(0, index), ...children.slice(index + 1)], tree);
	  return [newTree, [remove(data[idKey], type, parents)]];
	};

	const mergeMoves = edits => {
	  // this assumes we can't have moves with anything other than a REMOVE and INSERT
	  if (edits.length !== 2) {
	    return edits;
	  }

	  const [edit1, edit2] = edits;

	  if (edit1.type === EditTypes.REMOVE && edit2.type === EditTypes.INSERT) {
	    const {
	      payload: {
	        id: id1,
	        type: type1,
	        parents: parents1
	      }
	    } = edit1;
	    const {
	      payload: {
	        id: id2,
	        type: type2,
	        parents: parents2,
	        index
	      }
	    } = edit2;

	    if (id1 === id2 && type1 === type2) {
	      return [move(id1, type1, index, parents1, parents2)];
	    }
	  }

	  return edits;
	};

	const INTERNAL_TRANSFER_TYPE = '@@collection-transfer';

	class Collection extends react.Component {
	  constructor(props) {
	    super(props);

	    _defineProperty(this, "onDragEnd", () => {
	      this.setState({
	        draftData: {
	          tree: null,
	          edits: null
	        }
	      });
	    });

	    _defineProperty(this, "detach", (path, type, data) => e => {
	      const dataTransfer = e.dataTransfer;

	      if (!dataTransfer || !dataTransfer.getData) {
	        throw new Error('Data transfer issue');
	      }

	      const dropSpecString = JSON.stringify({
	        data,
	        type,
	        path
	      });
	      dataTransfer.setData(INTERNAL_TRANSFER_TYPE, dropSpecString);

	      try {
	        const [tree, edits] = remove$1(this.state.tree, this.props.schema, null, path, data);
	        this.setState({
	          draftData: {
	            tree,
	            edits
	          }
	        });
	      } catch (error) {
	        console.log(`Couldn't detach: ${error.message}`);
	      }
	    });

	    _defineProperty(this, "runDrop", async (path, e) => {
	      e.preventDefault();
	      let spec;

	      try {
	        // this is to fix flow :/
	        // https://github.com/facebook/flow/issues/5294
	        spec = await await this.getDropData(e);
	      } catch (error) {
	        return 'error parsing the drag data';
	      }

	      if (!spec || spec.error) {
	        return 'could not find a way to handle this drag event';
	      } // TODO: change this to `pathAtDepth` to get the type


	      const {
	        data,
	        path: sourcePath,
	        type
	      } = spec;

	      if (sourcePath && isSubPath(sourcePath, path)) {
	        return "can't drop into itself";
	      } // TODO: remove type from PathSpec and find the type from the structure?


	      const allowedType = path[path.length - 1].type;

	      if (type !== allowedType) {
	        return `can't drop ${type}, expecting ${allowedType || 'unknown'}`;
	      }

	      try {
	        // this could probably just be draft tree
	        const [tree, edits] = insert$1(this.state.draftData.tree || this.state.tree, this.props.schema, sourcePath, path, data); // dedupe

	        const combinedEdits = mergeMoves([...(this.state.draftData.edits || []), ...edits]);
	        this.setState({
	          draftData: {
	            tree: null,
	            edits: null
	          }
	        });
	        combinedEdits.forEach(edit => {
	          const typeEditors = this.props.editHandlers[edit.type];

	          if (!typeEditors) {
	            return;
	          }

	          const nodeTypeEditor = typeEditors[edit.nodeType];

	          if (!nodeTypeEditor) {
	            return;
	          }

	          nodeTypeEditor(edit);
	        });
	        this.props.onChange(tree, combinedEdits);
	      } catch (error) {
	        return error.message;
	      }
	    });

	    _defineProperty(this, "attach", path => async e => {
	      const error = await this.runDrop(path, e);

	      if (error) {
	        this.props.onError(error);
	      }
	    });

	    this.state = {
	      tree: this.props.tree,
	      draftData: {
	        tree: null,
	        edits: null
	      }
	    };
	  }

	  get dropMappers() {
	    return _objectSpread({
	      [INTERNAL_TRANSFER_TYPE]: data => Promise.resolve(JSON.parse(data))
	    }, this.props.dropMappers);
	  }

	  getDropData(e) {
	    const dataTransfer = e.dataTransfer;

	    if (!dataTransfer || !dataTransfer.getData) {
	      throw new Error('Data transfer issue');
	    }

	    const {
	      dropMappers
	    } = this;
	    const type = Object.keys(dropMappers).find(key => dataTransfer.getData(key));

	    if (!type) {
	      throw new Error('Unknown transfer type');
	    }

	    const mapper = dropMappers[type]; // listen for errors here??

	    return mapper(dataTransfer.getData(type));
	  }

	  render() {
	    const {
	      attach,
	      detach,
	      onDragEnd
	    } = this;
	    const {
	      schema
	    } = this.props;
	    const {
	      tree
	    } = this.state;
	    return react.createElement("div", {
	      onDragEnd: onDragEnd
	    }, react.createElement(Node, {
	      node: tree,
	      path: [],
	      attach: attach,
	      detach: detach,
	      schema: schema
	    }));
	  }

	}

	_defineProperty(Collection, "defaultProps", {
	  dropMappers: {},
	  onError: error => console.log(error),
	  onChange: () => {},
	  editHandlers: {}
	});

	_defineProperty(Collection, "getDerivedStateFromProps", ({
	  tree
	}) => ({
	  tree
	}));

	const DragZone$1 = props => react.createElement("div", _extends({
	  style: {
	    background: 'white',
	    color: '#221133',
	    cursor: 'pointer',
	    padding: '10px',
	    margin: '5px 0'
	  }
	}, props));

	const DropZone = props => react.createElement("div", _extends({
	  style: {
	    border: '2px dashed white',
	    margin: '5px 0',
	    padding: '10px'
	  }
	}, props));

	const Indent = ({
	  children
	}) => react.createElement("div", {
	  style: {
	    marginLeft: '10px'
	  }
	}, children);

	const RenderNode = ({
	  node,
	  getDragProps,
	  getDropProps,
	  children,
	  canDrag,
	  canDrop,
	  parentType,
	  allowedType,
	  titleKey = 'title'
	}) => react.createElement("div", null, canDrag && react.createElement(DragZone$1, getDragProps(), react.createElement("h3", null, get$1(titleKey, node))), react.createElement(Indent, null, children.map((child, i) => react.createElement(react.Fragment, {
	  key: i
	}, canDrop && react.createElement(DropZone, getDropProps(i), "Drop ", allowedType, " in ", parentType, " at index: ", i), child)), canDrop && react.createElement(DropZone, getDropProps(children.length), "Drop ", allowedType, " in ", parentType, " at index: ", children.length)));

	const renderNode = props => react.createElement(RenderNode, _extends({
	  titleKey: "webTitle"
	}, props));

	class App extends react.Component {
	  constructor(...args) {
	    var _temp;

	    return _temp = super(...args), _defineProperty(this, "state", {
	      tree: {
	        id: 1,
	        webTitle: 'Front 1',
	        collections: [{
	          id: 1,
	          webTitle: 'Collection 1',
	          articleFragments: [{
	            id: 1,
	            webTitle: 'Article 1',
	            supporting: [{
	              id: 2,
	              webTitle: 'Article 2'
	            }, {
	              id: 3,
	              webTitle: 'Article 3'
	            }]
	          }, {
	            id: 4,
	            webTitle: 'Article 4',
	            supporting: []
	          }]
	        }, {
	          id: 2,
	          webTitle: 'Collection 2',
	          articleFragments: []
	        }]
	      }
	    }), _defineProperty(this, "handleChange", (tree, edits) => this.setState({
	      tree
	    })), _temp;
	  }

	  render() {
	    return react.createElement(react.Fragment, null, react.createElement(DragZone, {
	      data: "https://www.theguardian.com/society/2018/may/22/benefit-sanctions-found-to-be-ineffective-and-damaging"
	    }, "Article"), react.createElement(Collection, {
	      tree: this.state.tree,
	      schema: el('front', renderNode, el('collection', renderNode, el('articleFragment', renderNode, el('articleFragment', renderNode), {
	        childrenKey: 'supporting'
	      }))),
	      onChange: this.handleChange,
	      dropMappers: {
	        text: text => urlToArticle(text)
	      }
	    }));
	  }

	}

	reactDom.render(react.createElement(App, null), document.getElementById('root'));

}());
//# sourceMappingURL=index.js.map
