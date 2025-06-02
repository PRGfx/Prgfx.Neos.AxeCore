(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/lodash.debounce/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.debounce/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function() {
        return root.Date.now();
      };
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = debounce2;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/classnames/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().classnames;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-dom/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().ReactDOM;
    }
  });

  // node_modules/react-popout/dist/react-popout.min.js
  var require_react_popout_min = __commonJS({
    "node_modules/react-popout/dist/react-popout.min.js"(exports, module) {
      !function(e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t(require_react(), require_react_dom());
        else if ("function" == typeof define && define.amd) define(["react", "react-dom"], t);
        else {
          var n = "object" == typeof exports ? t(require_react(), require_react_dom()) : t(e.React, e.ReactDOM);
          for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
        }
      }("undefined" != typeof self ? self : exports, function(e, t) {
        return function(e2) {
          function t2(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = { i: r, l: false, exports: {} };
            return e2[r].call(o.exports, o, o.exports, t2), o.l = true, o.exports;
          }
          var n = {};
          return t2.m = e2, t2.c = n, t2.d = function(e3, n2, r) {
            t2.o(e3, n2) || Object.defineProperty(e3, n2, { configurable: false, enumerable: true, get: r });
          }, t2.n = function(e3) {
            var n2 = e3 && e3.__esModule ? function() {
              return e3.default;
            } : function() {
              return e3;
            };
            return t2.d(n2, "a", n2), n2;
          }, t2.o = function(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }, t2.p = "", t2(t2.s = 3);
        }([function(e2, t2) {
          function n() {
            throw new Error("setTimeout has not been defined");
          }
          function r() {
            throw new Error("clearTimeout has not been defined");
          }
          function o(e3) {
            if (f === setTimeout) return setTimeout(e3, 0);
            if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(e3, 0);
            try {
              return f(e3, 0);
            } catch (t3) {
              try {
                return f.call(null, e3, 0);
              } catch (t4) {
                return f.call(this, e3, 0);
              }
            }
          }
          function i(e3) {
            if (l === clearTimeout) return clearTimeout(e3);
            if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e3);
            try {
              return l(e3);
            } catch (t3) {
              try {
                return l.call(null, e3);
              } catch (t4) {
                return l.call(this, e3);
              }
            }
          }
          function a() {
            m && d && (m = false, d.length ? y = d.concat(y) : h = -1, y.length && u());
          }
          function u() {
            if (!m) {
              var e3 = o(a);
              m = true;
              for (var t3 = y.length; t3; ) {
                for (d = y, y = []; ++h < t3; ) d && d[h].run();
                h = -1, t3 = y.length;
              }
              d = null, m = false, i(e3);
            }
          }
          function c(e3, t3) {
            this.fun = e3, this.array = t3;
          }
          function s() {
          }
          var f, l, p = e2.exports = {};
          !function() {
            try {
              f = "function" == typeof setTimeout ? setTimeout : n;
            } catch (e3) {
              f = n;
            }
            try {
              l = "function" == typeof clearTimeout ? clearTimeout : r;
            } catch (e3) {
              l = r;
            }
          }();
          var d, y = [], m = false, h = -1;
          p.nextTick = function(e3) {
            var t3 = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) t3[n2 - 1] = arguments[n2];
            y.push(new c(e3, t3)), 1 !== y.length || m || o(u);
          }, c.prototype.run = function() {
            this.fun.apply(null, this.array);
          }, p.title = "browser", p.browser = true, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = s, p.addListener = s, p.once = s, p.off = s, p.removeListener = s, p.removeAllListeners = s, p.emit = s, p.prependListener = s, p.prependOnceListener = s, p.listeners = function(e3) {
            return [];
          }, p.binding = function(e3) {
            throw new Error("process.binding is not supported");
          }, p.cwd = function() {
            return "/";
          }, p.chdir = function(e3) {
            throw new Error("process.chdir is not supported");
          }, p.umask = function() {
            return 0;
          };
        }, function(e2, t2, n) {
          "use strict";
          e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        }, function(e2, t2, n) {
          "use strict";
          (function(t3) {
            "production" === t3.env.NODE_ENV ? e2.exports = n(8) : e2.exports = n(9);
          }).call(t2, n(0));
        }, function(e2, t2, n) {
          e2.exports = n(4);
        }, function(e2, t2, n) {
          "use strict";
          function r(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }
          function o(e3, t3) {
            if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }
          function i(e3, t3) {
            if (!e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e3 : t3;
          }
          function a(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }
          Object.defineProperty(t2, "__esModule", { value: true });
          var u = /* @__PURE__ */ function() {
            function e3(e4, t3) {
              for (var n2 = 0; n2 < t3.length; n2++) {
                var r2 = t3[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e4, r2.key, r2);
              }
            }
            return function(t3, n2, r2) {
              return n2 && e3(t3.prototype, n2), r2 && e3(t3, r2), t3;
            };
          }(), c = n(5), s = r(c), f = n(6), l = r(f), p = n(7), d = r(p), y = { toolbar: "no", location: "no", directories: "no", status: "no", menubar: "no", scrollbars: "yes", resizable: "yes", width: 500, height: 400, top: function(e3, t3) {
            return (t3.innerHeight - e3.height) / 2 + t3.screenY;
          }, left: function(e3, t3) {
            return (t3.innerWidth - e3.width) / 2 + t3.screenX;
          } }, m = function(e3) {
            function t3(e4) {
              o(this, t3);
              var n2 = i(this, (t3.__proto__ || Object.getPrototypeOf(t3)).call(this, e4));
              return n2.mainWindowClosed = n2.mainWindowClosed.bind(n2), n2.popoutWindowUnloading = n2.popoutWindowUnloading.bind(n2), n2.popoutWindowLoaded = n2.popoutWindowLoaded.bind(n2), n2.state = { openedWindowComponent: null, popoutWindow: null, container: null }, n2;
            }
            return a(t3, e3), u(t3, [{ key: "createOptions", value: function(e4) {
              var t4 = this, n2 = Object.assign({}, y, this.props.options);
              return Object.keys(n2).map(function(r2) {
                return r2 + "=" + ("function" == typeof n2[r2] ? n2[r2].call(t4, n2, e4) : n2[r2]);
              }).join(",");
            } }, { key: "componentDidMount", value: function() {
              var e4 = this.props.window || window;
              e4 && (this.openPopoutWindow(e4), e4.addEventListener("unload", this.mainWindowClosed));
            } }, { key: "componentWillReceiveProps", value: function(e4) {
              e4.title !== this.props.title && this.state.popoutWindow && (this.state.popoutWindow.document.title = e4.title);
            } }, { key: "componentDidUpdate", value: function() {
              this.renderToContainer(this.state.container, this.state.popoutWindow, this.props.children);
            } }, { key: "componentWillUnmount", value: function() {
              this.mainWindowClosed();
            } }, { key: "popoutWindowLoaded", value: function(e4) {
              if (!this.state.container) {
                e4 = this.state.popoutWindow || e4, e4.document.title = this.props.title;
                var t4 = e4.document.createElement("div");
                t4.id = this.props.containerId, e4.document.body.appendChild(t4), this.setState({ container: t4 }), this.renderToContainer(t4, e4, this.props.children);
              }
            } }, { key: "openPopoutWindow", value: function(e4) {
              var t4 = e4.open(this.props.url, this.props.name || this.props.title, this.createOptions(e4));
              if (!t4) return void this.props.onError();
              this.setState({ popoutWindow: t4 }), t4.addEventListener("load", this.popoutWindowLoaded), t4.addEventListener("unload", this.popoutWindowUnloading), "about:blank" === this.props.url ? "complete" === t4.document.readyState && this.popoutWindowLoaded(t4) : this.checkForPopoutWindowClosure(t4);
            } }, { key: "closeWindow", value: function() {
              this.mainWindowClosed();
            } }, { key: "checkForPopoutWindowClosure", value: function(e4) {
              var t4 = this;
              this.interval = setInterval(function() {
                e4.closed && (clearInterval(t4.interval), t4.props.onClosing && t4.props.onClosing());
              }, 500);
            } }, { key: "mainWindowClosed", value: function() {
              this.state.popoutWindow && this.state.popoutWindow.close(), (this.props.window || window).removeEventListener("unload", this.mainWindowClosed);
            } }, { key: "popoutWindowUnloading", value: function() {
              this.state.container && (clearInterval(this.interval), l.default.unmountComponentAtNode(this.state.container), this.props.onClosing && this.props.onClosing());
            } }, { key: "renderToContainer", value: function(e4, t4, n2) {
              if (e4) {
                var r2 = n2;
                "function" == typeof n2 && (r2 = n2(t4)), l.default.render(r2, e4);
              }
            } }, { key: "render", value: function() {
              return null;
            } }]), t3;
          }(s.default.Component);
          m.defaultProps = { url: "about:blank", containerId: "popout-content-container", onError: function() {
          } }, m.propTypes = { title: d.default.string.isRequired, url: d.default.string, onClosing: d.default.func, options: d.default.object, window: d.default.object, containerId: d.default.string, children: d.default.oneOfType([d.default.element, d.default.func]), onError: d.default.func }, t2.default = m;
        }, function(t2, n) {
          t2.exports = e;
        }, function(e2, n) {
          e2.exports = t;
        }, function(e2, t2, n) {
          (function(t3) {
            if ("production" !== t3.env.NODE_ENV) {
              var r = n(2);
              e2.exports = n(10)(r.isElement, true);
            } else e2.exports = n(13)();
          }).call(t2, n(0));
        }, function(e2, t2, n) {
          "use strict";
          function r(e3) {
            if ("object" == typeof e3 && null !== e3) {
              var t3 = e3.$$typeof;
              switch (t3) {
                case a:
                  switch (e3 = e3.type) {
                    case d:
                    case y:
                    case c:
                    case f:
                    case s:
                    case h:
                      return e3;
                    default:
                      switch (e3 = e3 && e3.$$typeof) {
                        case p:
                        case m:
                        case w:
                        case b:
                        case l:
                          return e3;
                        default:
                          return t3;
                      }
                  }
                case u:
                  return t3;
              }
            }
          }
          function o(e3) {
            return r(e3) === y;
          }
          var i = "function" == typeof Symbol && Symbol.for, a = i ? Symbol.for("react.element") : 60103, u = i ? Symbol.for("react.portal") : 60106, c = i ? Symbol.for("react.fragment") : 60107, s = i ? Symbol.for("react.strict_mode") : 60108, f = i ? Symbol.for("react.profiler") : 60114, l = i ? Symbol.for("react.provider") : 60109, p = i ? Symbol.for("react.context") : 60110, d = i ? Symbol.for("react.async_mode") : 60111, y = i ? Symbol.for("react.concurrent_mode") : 60111, m = i ? Symbol.for("react.forward_ref") : 60112, h = i ? Symbol.for("react.suspense") : 60113, v = i ? Symbol.for("react.suspense_list") : 60120, b = i ? Symbol.for("react.memo") : 60115, w = i ? Symbol.for("react.lazy") : 60116, g = i ? Symbol.for("react.block") : 60121, O = i ? Symbol.for("react.fundamental") : 60117, S = i ? Symbol.for("react.responder") : 60118, E = i ? Symbol.for("react.scope") : 60119;
          t2.AsyncMode = d, t2.ConcurrentMode = y, t2.ContextConsumer = p, t2.ContextProvider = l, t2.Element = a, t2.ForwardRef = m, t2.Fragment = c, t2.Lazy = w, t2.Memo = b, t2.Portal = u, t2.Profiler = f, t2.StrictMode = s, t2.Suspense = h, t2.isAsyncMode = function(e3) {
            return o(e3) || r(e3) === d;
          }, t2.isConcurrentMode = o, t2.isContextConsumer = function(e3) {
            return r(e3) === p;
          }, t2.isContextProvider = function(e3) {
            return r(e3) === l;
          }, t2.isElement = function(e3) {
            return "object" == typeof e3 && null !== e3 && e3.$$typeof === a;
          }, t2.isForwardRef = function(e3) {
            return r(e3) === m;
          }, t2.isFragment = function(e3) {
            return r(e3) === c;
          }, t2.isLazy = function(e3) {
            return r(e3) === w;
          }, t2.isMemo = function(e3) {
            return r(e3) === b;
          }, t2.isPortal = function(e3) {
            return r(e3) === u;
          }, t2.isProfiler = function(e3) {
            return r(e3) === f;
          }, t2.isStrictMode = function(e3) {
            return r(e3) === s;
          }, t2.isSuspense = function(e3) {
            return r(e3) === h;
          }, t2.isValidElementType = function(e3) {
            return "string" == typeof e3 || "function" == typeof e3 || e3 === c || e3 === y || e3 === f || e3 === s || e3 === h || e3 === v || "object" == typeof e3 && null !== e3 && (e3.$$typeof === w || e3.$$typeof === b || e3.$$typeof === l || e3.$$typeof === p || e3.$$typeof === m || e3.$$typeof === O || e3.$$typeof === S || e3.$$typeof === E || e3.$$typeof === g);
          }, t2.typeOf = r;
        }, function(e2, t2, n) {
          "use strict";
          (function(e3) {
            "production" !== e3.env.NODE_ENV && function() {
              function e4(e5) {
                return "string" == typeof e5 || "function" == typeof e5 || e5 === w || e5 === x || e5 === O || e5 === g || e5 === C || e5 === P || "object" == typeof e5 && null !== e5 && (e5.$$typeof === k || e5.$$typeof === $ || e5.$$typeof === S || e5.$$typeof === E || e5.$$typeof === T || e5.$$typeof === W || e5.$$typeof === I || e5.$$typeof === N || e5.$$typeof === _);
              }
              function n2(e5) {
                if ("object" == typeof e5 && null !== e5) {
                  var t3 = e5.$$typeof;
                  switch (t3) {
                    case v:
                      var n3 = e5.type;
                      switch (n3) {
                        case j:
                        case x:
                        case w:
                        case O:
                        case g:
                        case C:
                          return n3;
                        default:
                          var r2 = n3 && n3.$$typeof;
                          switch (r2) {
                            case E:
                            case T:
                            case k:
                            case $:
                            case S:
                              return r2;
                            default:
                              return t3;
                          }
                      }
                    case b:
                      return t3;
                  }
                }
              }
              function r(e5) {
                return H || (H = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(e5) || n2(e5) === j;
              }
              function o(e5) {
                return n2(e5) === x;
              }
              function i(e5) {
                return n2(e5) === E;
              }
              function a(e5) {
                return n2(e5) === S;
              }
              function u(e5) {
                return "object" == typeof e5 && null !== e5 && e5.$$typeof === v;
              }
              function c(e5) {
                return n2(e5) === T;
              }
              function s(e5) {
                return n2(e5) === w;
              }
              function f(e5) {
                return n2(e5) === k;
              }
              function l(e5) {
                return n2(e5) === $;
              }
              function p(e5) {
                return n2(e5) === b;
              }
              function d(e5) {
                return n2(e5) === O;
              }
              function y(e5) {
                return n2(e5) === g;
              }
              function m(e5) {
                return n2(e5) === C;
              }
              var h = "function" == typeof Symbol && Symbol.for, v = h ? Symbol.for("react.element") : 60103, b = h ? Symbol.for("react.portal") : 60106, w = h ? Symbol.for("react.fragment") : 60107, g = h ? Symbol.for("react.strict_mode") : 60108, O = h ? Symbol.for("react.profiler") : 60114, S = h ? Symbol.for("react.provider") : 60109, E = h ? Symbol.for("react.context") : 60110, j = h ? Symbol.for("react.async_mode") : 60111, x = h ? Symbol.for("react.concurrent_mode") : 60111, T = h ? Symbol.for("react.forward_ref") : 60112, C = h ? Symbol.for("react.suspense") : 60113, P = h ? Symbol.for("react.suspense_list") : 60120, $ = h ? Symbol.for("react.memo") : 60115, k = h ? Symbol.for("react.lazy") : 60116, _ = h ? Symbol.for("react.block") : 60121, W = h ? Symbol.for("react.fundamental") : 60117, I = h ? Symbol.for("react.responder") : 60118, N = h ? Symbol.for("react.scope") : 60119, R = j, M = x, A = E, L = S, V = v, D = T, F = w, q = k, U = $, z = b, Y = O, J = g, B = C, H = false;
              t2.AsyncMode = R, t2.ConcurrentMode = M, t2.ContextConsumer = A, t2.ContextProvider = L, t2.Element = V, t2.ForwardRef = D, t2.Fragment = F, t2.Lazy = q, t2.Memo = U, t2.Portal = z, t2.Profiler = Y, t2.StrictMode = J, t2.Suspense = B, t2.isAsyncMode = r, t2.isConcurrentMode = o, t2.isContextConsumer = i, t2.isContextProvider = a, t2.isElement = u, t2.isForwardRef = c, t2.isFragment = s, t2.isLazy = f, t2.isMemo = l, t2.isPortal = p, t2.isProfiler = d, t2.isStrictMode = y, t2.isSuspense = m, t2.isValidElementType = e4, t2.typeOf = n2;
            }();
          }).call(t2, n(0));
        }, function(e2, t2, n) {
          "use strict";
          (function(t3) {
            function r() {
              return null;
            }
            var o = n(2), i = n(11), a = n(1), u = n(12), c = Function.call.bind(Object.prototype.hasOwnProperty), s = function() {
            };
            "production" !== t3.env.NODE_ENV && (s = function(e3) {
              var t4 = "Warning: " + e3;
              "undefined" != typeof console && console.error(t4);
              try {
                throw new Error(t4);
              } catch (e4) {
              }
            }), e2.exports = function(e3, n2) {
              function f(e4) {
                var t4 = e4 && (P && e4[P] || e4[$]);
                if ("function" == typeof t4) return t4;
              }
              function l(e4, t4) {
                return e4 === t4 ? 0 !== e4 || 1 / e4 == 1 / t4 : e4 !== e4 && t4 !== t4;
              }
              function p(e4) {
                this.message = e4, this.stack = "";
              }
              function d(e4) {
                function r2(r3, u3, c2, f2, l2, d2, y2) {
                  if (f2 = f2 || k, d2 = d2 || c2, y2 !== a) {
                    if (n2) {
                      var m2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                      throw m2.name = "Invariant Violation", m2;
                    }
                    if ("production" !== t3.env.NODE_ENV && "undefined" != typeof console) {
                      var h2 = f2 + ":" + c2;
                      !o2[h2] && i2 < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d2 + "` prop on `" + f2 + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), o2[h2] = true, i2++);
                    }
                  }
                  return null == u3[c2] ? r3 ? new p(null === u3[c2] ? "The " + l2 + " `" + d2 + "` is marked as required in `" + f2 + "`, but its value is `null`." : "The " + l2 + " `" + d2 + "` is marked as required in `" + f2 + "`, but its value is `undefined`.") : null : e4(u3, c2, f2, l2, d2);
                }
                if ("production" !== t3.env.NODE_ENV) var o2 = {}, i2 = 0;
                var u2 = r2.bind(null, false);
                return u2.isRequired = r2.bind(null, true), u2;
              }
              function y(e4) {
                function t4(t5, n3, r2, o2, i2, a2) {
                  var u2 = t5[n3];
                  if (j(u2) !== e4) return new p("Invalid " + o2 + " `" + i2 + "` of type `" + x(u2) + "` supplied to `" + r2 + "`, expected `" + e4 + "`.");
                  return null;
                }
                return d(t4);
              }
              function m(e4) {
                function t4(t5, n3, r2, o2, i2) {
                  if ("function" != typeof e4) return new p("Property `" + i2 + "` of component `" + r2 + "` has invalid PropType notation inside arrayOf.");
                  var u2 = t5[n3];
                  if (!Array.isArray(u2)) {
                    return new p("Invalid " + o2 + " `" + i2 + "` of type `" + j(u2) + "` supplied to `" + r2 + "`, expected an array.");
                  }
                  for (var c2 = 0; c2 < u2.length; c2++) {
                    var s2 = e4(u2, c2, r2, o2, i2 + "[" + c2 + "]", a);
                    if (s2 instanceof Error) return s2;
                  }
                  return null;
                }
                return d(t4);
              }
              function h(e4) {
                function t4(t5, n3, r2, o2, i2) {
                  if (!(t5[n3] instanceof e4)) {
                    var a2 = e4.name || k;
                    return new p("Invalid " + o2 + " `" + i2 + "` of type `" + C(t5[n3]) + "` supplied to `" + r2 + "`, expected instance of `" + a2 + "`.");
                  }
                  return null;
                }
                return d(t4);
              }
              function v(e4) {
                function n3(t4, n4, r2, o2, i2) {
                  for (var a2 = t4[n4], u2 = 0; u2 < e4.length; u2++) if (l(a2, e4[u2])) return null;
                  var c2 = JSON.stringify(e4, function(e5, t5) {
                    return "symbol" === x(t5) ? String(t5) : t5;
                  });
                  return new p("Invalid " + o2 + " `" + i2 + "` of value `" + String(a2) + "` supplied to `" + r2 + "`, expected one of " + c2 + ".");
                }
                return Array.isArray(e4) ? d(n3) : ("production" !== t3.env.NODE_ENV && s(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), r);
              }
              function b(e4) {
                function t4(t5, n3, r2, o2, i2) {
                  if ("function" != typeof e4) return new p("Property `" + i2 + "` of component `" + r2 + "` has invalid PropType notation inside objectOf.");
                  var u2 = t5[n3], s2 = j(u2);
                  if ("object" !== s2) return new p("Invalid " + o2 + " `" + i2 + "` of type `" + s2 + "` supplied to `" + r2 + "`, expected an object.");
                  for (var f2 in u2) if (c(u2, f2)) {
                    var l2 = e4(u2, f2, r2, o2, i2 + "." + f2, a);
                    if (l2 instanceof Error) return l2;
                  }
                  return null;
                }
                return d(t4);
              }
              function w(e4) {
                function n3(t4, n4, r2, o3, i3) {
                  for (var u2 = 0; u2 < e4.length; u2++) {
                    if (null == (0, e4[u2])(t4, n4, r2, o3, i3, a)) return null;
                  }
                  return new p("Invalid " + o3 + " `" + i3 + "` supplied to `" + r2 + "`.");
                }
                if (!Array.isArray(e4)) return "production" !== t3.env.NODE_ENV && s("Invalid argument supplied to oneOfType, expected an instance of array."), r;
                for (var o2 = 0; o2 < e4.length; o2++) {
                  var i2 = e4[o2];
                  if ("function" != typeof i2) return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + T(i2) + " at index " + o2 + "."), r;
                }
                return d(n3);
              }
              function g(e4) {
                function t4(t5, n3, r2, o2, i2) {
                  var u2 = t5[n3], c2 = j(u2);
                  if ("object" !== c2) return new p("Invalid " + o2 + " `" + i2 + "` of type `" + c2 + "` supplied to `" + r2 + "`, expected `object`.");
                  for (var s2 in e4) {
                    var f2 = e4[s2];
                    if (f2) {
                      var l2 = f2(u2, s2, r2, o2, i2 + "." + s2, a);
                      if (l2) return l2;
                    }
                  }
                  return null;
                }
                return d(t4);
              }
              function O(e4) {
                function t4(t5, n3, r2, o2, u2) {
                  var c2 = t5[n3], s2 = j(c2);
                  if ("object" !== s2) return new p("Invalid " + o2 + " `" + u2 + "` of type `" + s2 + "` supplied to `" + r2 + "`, expected `object`.");
                  var f2 = i({}, t5[n3], e4);
                  for (var l2 in f2) {
                    var d2 = e4[l2];
                    if (!d2) return new p("Invalid " + o2 + " `" + u2 + "` key `" + l2 + "` supplied to `" + r2 + "`.\nBad object: " + JSON.stringify(t5[n3], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e4), null, "  "));
                    var y2 = d2(c2, l2, r2, o2, u2 + "." + l2, a);
                    if (y2) return y2;
                  }
                  return null;
                }
                return d(t4);
              }
              function S(t4) {
                switch (typeof t4) {
                  case "number":
                  case "string":
                  case "undefined":
                    return true;
                  case "boolean":
                    return !t4;
                  case "object":
                    if (Array.isArray(t4)) return t4.every(S);
                    if (null === t4 || e3(t4)) return true;
                    var n3 = f(t4);
                    if (!n3) return false;
                    var r2, o2 = n3.call(t4);
                    if (n3 !== t4.entries) {
                      for (; !(r2 = o2.next()).done; ) if (!S(r2.value)) return false;
                    } else for (; !(r2 = o2.next()).done; ) {
                      var i2 = r2.value;
                      if (i2 && !S(i2[1])) return false;
                    }
                    return true;
                  default:
                    return false;
                }
              }
              function E(e4, t4) {
                return "symbol" === e4 || !!t4 && ("Symbol" === t4["@@toStringTag"] || "function" == typeof Symbol && t4 instanceof Symbol);
              }
              function j(e4) {
                var t4 = typeof e4;
                return Array.isArray(e4) ? "array" : e4 instanceof RegExp ? "object" : E(t4, e4) ? "symbol" : t4;
              }
              function x(e4) {
                if (void 0 === e4 || null === e4) return "" + e4;
                var t4 = j(e4);
                if ("object" === t4) {
                  if (e4 instanceof Date) return "date";
                  if (e4 instanceof RegExp) return "regexp";
                }
                return t4;
              }
              function T(e4) {
                var t4 = x(e4);
                switch (t4) {
                  case "array":
                  case "object":
                    return "an " + t4;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + t4;
                  default:
                    return t4;
                }
              }
              function C(e4) {
                return e4.constructor && e4.constructor.name ? e4.constructor.name : k;
              }
              var P = "function" == typeof Symbol && Symbol.iterator, $ = "@@iterator", k = "<<anonymous>>", _ = { array: y("array"), bool: y("boolean"), func: y("function"), number: y("number"), object: y("object"), string: y("string"), symbol: y("symbol"), any: function() {
                return d(r);
              }(), arrayOf: m, element: function() {
                function t4(t5, n3, r2, o2, i2) {
                  var a2 = t5[n3];
                  if (!e3(a2)) {
                    return new p("Invalid " + o2 + " `" + i2 + "` of type `" + j(a2) + "` supplied to `" + r2 + "`, expected a single ReactElement.");
                  }
                  return null;
                }
                return d(t4);
              }(), elementType: function() {
                function e4(e5, t4, n3, r2, i2) {
                  var a2 = e5[t4];
                  if (!o.isValidElementType(a2)) {
                    return new p("Invalid " + r2 + " `" + i2 + "` of type `" + j(a2) + "` supplied to `" + n3 + "`, expected a single ReactElement type.");
                  }
                  return null;
                }
                return d(e4);
              }(), instanceOf: h, node: function() {
                function e4(e5, t4, n3, r2, o2) {
                  return S(e5[t4]) ? null : new p("Invalid " + r2 + " `" + o2 + "` supplied to `" + n3 + "`, expected a ReactNode.");
                }
                return d(e4);
              }(), objectOf: b, oneOf: v, oneOfType: w, shape: g, exact: O };
              return p.prototype = Error.prototype, _.checkPropTypes = u, _.resetWarningCache = u.resetWarningCache, _.PropTypes = _, _;
            };
          }).call(t2, n(0));
        }, function(e2, t2, n) {
          "use strict";
          function r(e3) {
            if (null === e3 || void 0 === e3) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e3);
          }
          var o = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
          e2.exports = function() {
            try {
              if (!Object.assign) return false;
              var e3 = new String("abc");
              if (e3[5] = "de", "5" === Object.getOwnPropertyNames(e3)[0]) return false;
              for (var t3 = {}, n2 = 0; n2 < 10; n2++) t3["_" + String.fromCharCode(n2)] = n2;
              if ("0123456789" !== Object.getOwnPropertyNames(t3).map(function(e4) {
                return t3[e4];
              }).join("")) return false;
              var r2 = {};
              return "abcdefghijklmnopqrst".split("").forEach(function(e4) {
                r2[e4] = e4;
              }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r2)).join("");
            } catch (e4) {
              return false;
            }
          }() ? Object.assign : function(e3, t3) {
            for (var n2, u, c = r(e3), s = 1; s < arguments.length; s++) {
              n2 = Object(arguments[s]);
              for (var f in n2) i.call(n2, f) && (c[f] = n2[f]);
              if (o) {
                u = o(n2);
                for (var l = 0; l < u.length; l++) a.call(n2, u[l]) && (c[u[l]] = n2[u[l]]);
              }
            }
            return c;
          };
        }, function(e2, t2, n) {
          "use strict";
          (function(t3) {
            function r(e3, n2, r2, c, s) {
              if ("production" !== t3.env.NODE_ENV) {
                for (var f in e3) if (u(e3, f)) {
                  var l;
                  try {
                    if ("function" != typeof e3[f]) {
                      var p = Error((c || "React class") + ": " + r2 + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e3[f] + "`.");
                      throw p.name = "Invariant Violation", p;
                    }
                    l = e3[f](n2, f, c, r2, null, i);
                  } catch (e4) {
                    l = e4;
                  }
                  if (!l || l instanceof Error || o((c || "React class") + ": type specification of " + r2 + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), l instanceof Error && !(l.message in a)) {
                    a[l.message] = true;
                    var d = s ? s() : "";
                    o("Failed " + r2 + " type: " + l.message + (null != d ? d : ""));
                  }
                }
              }
            }
            var o = function() {
            };
            if ("production" !== t3.env.NODE_ENV) {
              var i = n(1), a = {}, u = Function.call.bind(Object.prototype.hasOwnProperty);
              o = function(e3) {
                var t4 = "Warning: " + e3;
                "undefined" != typeof console && console.error(t4);
                try {
                  throw new Error(t4);
                } catch (e4) {
                }
              };
            }
            r.resetWarningCache = function() {
              "production" !== t3.env.NODE_ENV && (a = {});
            }, e2.exports = r;
          }).call(t2, n(0));
        }, function(e2, t2, n) {
          "use strict";
          function r() {
          }
          function o() {
          }
          var i = n(1);
          o.resetWarningCache = r, e2.exports = function() {
            function e3(e4, t4, n3, r2, o2, a) {
              if (a !== i) {
                var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw u.name = "Invariant Violation", u;
              }
            }
            function t3() {
              return e3;
            }
            e3.isRequired = e3;
            var n2 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: o, resetWarningCache: r };
            return n2.PropTypes = n2, n2;
          };
        }]);
      });
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-saga-effects/index.js
  var require_redux_saga_effects = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-saga-effects/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reduxSagaEffects;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  init_readFromConsumerApi();
  var dist_default = readFromConsumerApi("manifest");

  // src/AxeCoreView.tsx
  var import_react11 = __toESM(require_react());
  var import_react_redux3 = __toESM(require_react_redux());

  // src/util/useNeos.ts
  var import_react = __toESM(require_react());
  var import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
  var useNeos = () => {
    return (0, import_react.useContext)(import_neos_ui_decorators.NeosContext);
  };

  // src/AxeCoreView.tsx
  var import_neos_ui_redux_store3 = __toESM(require_neos_ui_redux_store());

  // src/state/actions.ts
  var actionTypes = {
    ANALYZE: "Prgfx.Neos.AxeCore:Analyze",
    SET_REPORT: "Prgfx.Neos.AxeCore:SetReport",
    POPOUT: "Prgfx.Neos.AxeCore:Popout",
    POPIN: "Prgfx.Neos.AxeCore:Popin"
  };
  var actions = {
    analyze: (contextPath, runOptions) => ({ type: actionTypes.ANALYZE, contextPath, runOptions }),
    setReport: (contextPath, report) => ({ type: actionTypes.SET_REPORT, contextPath, report }),
    popout: () => ({ type: actionTypes.POPOUT }),
    popin: () => ({ type: actionTypes.POPIN })
  };

  // src/state/selectors.ts
  var selectors_exports = {};
  __export(selectors_exports, {
    getReport: () => getReport,
    isAnalyzing: () => isAnalyzing,
    isPoppedOut: () => isPoppedOut
  });
  var isAnalyzing = (state) => !!state.plugins?.axeCoreView?.analysisRequested;
  var getReport = (state) => (contextPath) => state.plugins?.axeCoreView?.reports?.[contextPath] ?? null;
  var isPoppedOut = (state) => state.plugins?.axeCoreView?.isPoppedOut === true;

  // src/state/reducer.ts
  var reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.ANALYZE:
        return {
          ...state,
          plugins: {
            ...state.plugins,
            axeCoreView: {
              ...state.plugins.axeCoreView ?? {
                isPoppedOut: false
              },
              analysisRequested: action.contextPath,
              reports: {
                ...state.plugins.axeCoreView?.reports,
                [action.contextPath]: null
              }
            }
          }
        };
      case actionTypes.SET_REPORT:
        return {
          ...state,
          plugins: {
            ...state.plugins,
            axeCoreView: {
              ...state.plugins.axeCoreView ?? {
                isPoppedOut: false
              },
              analysisRequested: false,
              reports: {
                ...state.plugins.axeCoreView?.reports,
                [action.contextPath]: action.report
              }
            }
          }
        };
      case actionTypes.POPOUT:
        return {
          ...state,
          plugins: {
            ...state.plugins,
            axeCoreView: {
              ...state.plugins.axeCoreView,
              isPoppedOut: true
            }
          }
        };
      case actionTypes.POPIN:
        return {
          ...state,
          plugins: {
            ...state.plugins,
            axeCoreView: {
              ...state.plugins.axeCoreView,
              isPoppedOut: false
            }
          }
        };
      default:
        return state;
    }
  };

  // src/components/view.tsx
  var import_react10 = __toESM(require_react());
  var import_react_redux2 = __toESM(require_react_redux());

  // src/guest-frame/util.ts
  var getGuestFrameWindow = () => {
    const guestFrame = document.getElementsByName("neos-content-main")[0];
    return guestFrame && guestFrame.contentWindow;
  };
  var getGuestFrameDocument = () => getGuestFrameWindow()?.document;
  var clampNumber = (n, min, max) => {
    if (max < min) {
      max = min;
    }
    if (n < min) {
      return [min, min - n];
    }
    if (n > max) {
      return [max, n - max];
    }
    return [n, 0];
  };
  var clampElementToDocumentDimensions = (elementDimensions, documentDimensions) => {
    const documentWidth = documentDimensions.width;
    const documentHeight = documentDimensions.height;
    const [left, widthShrinkAmount] = clampNumber(elementDimensions.left - documentDimensions.left, 0, documentWidth);
    const [width] = clampNumber(elementDimensions.width - widthShrinkAmount, 0, documentWidth - left);
    const [top, heightShrinkAmount] = clampNumber(elementDimensions.top - documentDimensions.top, 0, documentHeight);
    const [height] = clampNumber(elementDimensions.height - heightShrinkAmount, 0, documentHeight - top);
    return {
      top,
      left,
      width,
      height,
      right: left + width,
      bottom: top + height,
      rightAsMeasuredFromRightDocumentBorder: documentWidth - (left + width)
    };
  };
  var getAbsolutePositionOfElementInGuestFrame = (element) => {
    if (element && element.getBoundingClientRect) {
      const relativeDocumentDimensions = getGuestFrameDocument().documentElement.getBoundingClientRect();
      const relativeElementDimensions = element.getBoundingClientRect();
      return clampElementToDocumentDimensions(relativeElementDimensions, relativeDocumentDimensions);
    }
    return { top: 0, left: 0, width: 0, height: 0 };
  };

  // src/guest-frame/highlight.ts
  var import_lodash = __toESM(require_lodash());
  var positionHighlighter = (highlighter) => (targetElement) => {
    const targetPosition = getAbsolutePositionOfElementInGuestFrame(targetElement);
    highlighter.style.top = `${targetPosition.top}px`;
    highlighter.style.left = `${targetPosition.left}px`;
    highlighter.style.width = `${targetPosition.width}px`;
    highlighter.style.height = `${targetPosition.height}px`;
    highlighter.style.display = "block";
  };
  var eventHandler = null;
  var highlightElement = (selector) => {
    const gfw = getGuestFrameWindow();
    if (!gfw) {
      return;
    }
    if (eventHandler) {
      gfw.removeEventListener("scroll", eventHandler);
      gfw.removeEventListener("resize", eventHandler);
    }
    const gfd = gfw.document;
    const highlighter = gfd.getElementById("prgfx-neos-axecore-elementhighlighter");
    if (selector === null) {
      if (highlighter) {
        highlighter.style.display = "none";
      }
      return;
    }
    const targetElement = gfd.querySelector(selector);
    if (!targetElement) {
      return;
    }
    targetElement.scrollIntoView();
    const updatePosition = positionHighlighter(highlighter);
    eventHandler = (0, import_lodash.default)(() => updatePosition(targetElement));
    gfw.addEventListener("scroll", eventHandler);
    gfw.addEventListener("resize", eventHandler);
    eventHandler();
  };

  // src/components/view.tsx
  var import_react_ui_components5 = __toESM(require_react_ui_components());

  // src/components/result-section.tsx
  var import_react2 = __toESM(require_react());
  var import_react_ui_components = __toESM(require_react_ui_components());

  // src/components/style.module.css
  var style_default = {
    resultSection: "style_resultSection",
    propertyGroupLabel: "style_propertyGroupLabel",
    spacer: "style_spacer",
    iconWrapper: "style_iconWrapper",
    resultStatus: "style_resultStatus",
    "resultStatus--minor": "style_resultStatus--minor",
    "resultStatus--moderate": "style_resultStatus--moderate",
    "resultStatus--serious": "style_resultStatus--serious",
    "resultStatus--critical": "style_resultStatus--critical",
    resultItem: "style_resultItem",
    resultTitle: "style_resultTitle",
    resultDescription: "style_resultDescription",
    resultLink: "style_resultLink",
    occurrenceItem: "style_occurrenceItem",
    occurrenceErrorList: "style_occurrenceErrorList",
    occurrenceErrorItem: "style_occurrenceErrorItem",
    popout: "style_popout",
    occurrencePagination: "style_occurrencePagination",
    occurrencePaginationButton: "style_occurrencePaginationButton",
    "btn--isPressed": "style_btn--isPressed"
  };

  // src/components/result-section.tsx
  var ResultSection = (props) => {
    const [collapsed, setCollapsed] = (0, import_react2.useState)(props.collapsed === true);
    let iconColor = props.iconColor;
    let iconClass;
    if (props.iconColor === "success") {
      iconColor = void 0;
      iconClass = "style__icon--color-success";
    }
    const togglePanel = () => setCollapsed((v) => !v);
    return /* @__PURE__ */ import_react2.default.createElement(import_react_ui_components.ToggablePanel, { className: style_default.resultSection, isOpen: !collapsed, onPanelToggle: togglePanel }, /* @__PURE__ */ import_react2.default.createElement(import_react_ui_components.ToggablePanel.Header, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: style_default.iconWrapper }, /* @__PURE__ */ import_react2.default.createElement(import_react_ui_components.Icon, { icon: props.icon, className: iconClass, color: iconColor })), props.title), /* @__PURE__ */ import_react2.default.createElement(import_react_ui_components.ToggablePanel.Contents, null, props.children));
  };

  // src/components/result-list.tsx
  var import_react7 = __toESM(require_react());

  // src/components/result.tsx
  var import_react6 = __toESM(require_react());
  var import_react_ui_components3 = __toESM(require_react_ui_components());
  var import_classnames = __toESM(require_classnames());

  // src/components/occurrence.tsx
  var import_react4 = __toESM(require_react());

  // src/components/node-info.tsx
  var import_react3 = __toESM(require_react());
  var import_react_ui_components2 = __toESM(require_react_ui_components());

  // src/components/node-info.module.css
  var node_info_default = {
    nodeInfoList: "node_info_nodeInfoList",
    item: "node_info_item",
    title: "node_info_title",
    content: "node_info_content"
  };

  // src/components/node-info.tsx
  var NodeInfoRow = (props) => /* @__PURE__ */ import_react3.default.createElement("li", { className: node_info_default.item }, /* @__PURE__ */ import_react3.default.createElement("p", { className: node_info_default.title }, props.title), /* @__PURE__ */ import_react3.default.createElement("div", { className: node_info_default.content }, props.children));
  var NodeInfo = (props) => {
    const [nodePath, nodeData] = (0, import_react3.useMemo)(() => {
      const nodePath2 = props.contentElement?.contextPath ? props.contentElement.contextPath.split("@")[0] : null;
      const nodeData2 = props.contentElement?.contextPath ? props.getNodeData(props.contentElement.contextPath) : null;
      return [nodePath2, nodeData2];
    }, [props.contentElement, props.getNodeData]);
    const nodeName = nodeData?.label ?? nodePath?.split("/").pop();
    const nodeIsHighlighted = props.highlightedSelector === props.selector;
    const onHighlightElement = () => props.highlightNode(nodeIsHighlighted ? null : props.selector.toString());
    return /* @__PURE__ */ import_react3.default.createElement("ul", { className: node_info_default.nodeInfoList }, /* @__PURE__ */ import_react3.default.createElement(NodeInfoRow, { title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.domSelector") }, /* @__PURE__ */ import_react3.default.createElement("pre", null, props.selector.toString()), /* @__PURE__ */ import_react3.default.createElement(
      import_react_ui_components2.IconButton,
      {
        icon: "crosshairs",
        "aria-label": props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.highlightNode"),
        onClick: onHighlightElement,
        "aria-pressed": nodeIsHighlighted ? "true" : "false",
        isPressed: nodeIsHighlighted
      }
    )), /* @__PURE__ */ import_react3.default.createElement(NodeInfoRow, { title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.html") }, /* @__PURE__ */ import_react3.default.createElement("pre", { className: "break" }, props.html)), props.contentElement?.fusionPrototype && /* @__PURE__ */ import_react3.default.createElement(NodeInfoRow, { title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.renderingPrototype") }, /* @__PURE__ */ import_react3.default.createElement("p", null, props.contentElement.fusionPrototype)), nodePath && /* @__PURE__ */ import_react3.default.createElement(NodeInfoRow, { title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.neosNode") }, /* @__PURE__ */ import_react3.default.createElement("p", { title: nodePath }, nodeName), /* @__PURE__ */ import_react3.default.createElement(
      import_react_ui_components2.IconButton,
      {
        icon: "crosshairs",
        "aria-label": props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.selectNode"),
        onClick: () => props.focusNode(props.contentElement.contextPath, props.contentElement.fusionPath)
      }
    )));
  };

  // src/components/occurrence.tsx
  var Occurrence = (props) => {
    let summaryTitle;
    let summaryTextItems;
    if (props.node.failureSummary) {
      if (props.node.failureSummary.includes("\n")) {
        const lines = props.node.failureSummary.split("\n");
        summaryTitle = lines[0];
        summaryTextItems = lines.slice(1).map((l) => l.trim());
      } else {
        summaryTitle = props.node.failureSummary.split(":")[0] + ":";
        const summaryText = props.node.failureSummary.substr(summaryTitle.length);
        summaryTextItems = summaryText.split(/\.\s+/).map((l, i, a) => a.length - 1 > i ? l + "." : l);
      }
    }
    return /* @__PURE__ */ import_react4.default.createElement("div", { className: style_default.occurrenceItem }, props.node.failureSummary && /* @__PURE__ */ import_react4.default.createElement("p", { className: style_default.resultDescription }, summaryTitle, summaryTextItems.length >= 1 && /* @__PURE__ */ import_react4.default.createElement("ul", { className: style_default.occurrenceErrorList }, summaryTextItems.map((l, i) => /* @__PURE__ */ import_react4.default.createElement("li", { className: style_default.occurrenceErrorItem, key: i }, l)))), props.node.target && props.node.target.length > 0 && props.node.target.map((selector, i) => /* @__PURE__ */ import_react4.default.createElement(
      NodeInfo,
      {
        key: i,
        selector,
        html: props.node.html,
        contentElement: props.node.contentElement[i],
        focusNode: props.focusNode,
        highlightNode: props.highlightNode,
        highlightedSelector: props.highlightedSelector,
        i18nRegistry: props.i18nRegistry,
        getNodeData: props.getNodeData
      }
    )));
  };

  // src/components/OccurrencePaginator.tsx
  var import_react5 = __toESM(require_react());
  var commonButtonProps = {
    type: "button",
    className: style_default.occurrencePaginationButton
  };
  var OccurrencePaginator = (props) => {
    const counter = props.count > 1 ? ` (${props.index + 1}/${props.count})` : "";
    const isFirst = props.index === 0;
    const isLast = props.index === props.count - 1;
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: style_default.occurrencePagination }, props.showFirst && /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        ...commonButtonProps,
        disabled: isFirst,
        title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.first"),
        "aria-label": props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.first"),
        onClick: () => props.onChange(0)
      },
      "\u21E4"
    ), /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        ...commonButtonProps,
        disabled: props.index === 0,
        title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.previous"),
        "aria-label": props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.previous"),
        onClick: () => props.onChange(Math.max(0, props.index - 1))
      },
      "\u2190"
    ), /* @__PURE__ */ import_react5.default.createElement("span", null, /* @__PURE__ */ import_react5.default.createElement("strong", null, props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:occurrence.affectedElement", "Affected Element"), counter)), /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        ...commonButtonProps,
        disabled: props.index === props.count - 1,
        title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.next"),
        "aria-label": props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.next"),
        onClick: () => props.onChange(Math.min(props.index + 1, props.count - 1))
      },
      "\u2192"
    ), props.showLast && /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        ...commonButtonProps,
        disabled: isLast,
        title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.last"),
        "aria-label": props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.last"),
        onClick: () => props.onChange(props.count - 1)
      },
      "\u21E5"
    ));
  };

  // src/components/result.tsx
  var Result = (props) => {
    const [selectedOccurrence, setSelectedOccurrence] = (0, import_react6.useState)(0);
    (0, import_react6.useEffect)(() => {
      setSelectedOccurrence(0);
    }, [props.result.nodes]);
    return /* @__PURE__ */ import_react6.default.createElement("li", { className: style_default.resultItem }, /* @__PURE__ */ import_react6.default.createElement(
      import_react_ui_components3.Icon,
      {
        title: props.result.impact,
        icon: "circle",
        className: (0, import_classnames.default)(style_default.resultStatus, style_default[`resultStatus--${props.result.impact}`])
      }
    ), /* @__PURE__ */ import_react6.default.createElement("span", { className: style_default.resultTitle }, props.result.description), /* @__PURE__ */ import_react6.default.createElement("p", { className: style_default.resultDescription }, props.result.help, /* @__PURE__ */ import_react6.default.createElement("br", null), /* @__PURE__ */ import_react6.default.createElement(
      "a",
      {
        href: props.result.helpUrl,
        className: style_default.resultLink,
        target: "_blank",
        rel: "noopener noreferrer"
      },
      props.i18nRegistry.translate(
        "result.ruleLink",
        "Details",
        [props.result.id],
        "Prgfx.Neos.AxeCore",
        "AxeCoreView"
      ),
      /* @__PURE__ */ import_react6.default.createElement(import_react_ui_components3.Icon, { icon: "external-link-alt" })
    )), props.result.nodes && props.result.nodes.length > 0 && /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(
      OccurrencePaginator,
      {
        count: props.result.nodes.length,
        index: selectedOccurrence,
        onChange: setSelectedOccurrence,
        i18nRegistry: props.i18nRegistry
      }
    ), /* @__PURE__ */ import_react6.default.createElement(
      Occurrence,
      {
        key: selectedOccurrence,
        node: props.result.nodes[selectedOccurrence],
        focusNode: props.focusNode,
        highlightNode: props.highlightNode,
        highlightedSelector: props.highlightedSelector,
        i18nRegistry: props.i18nRegistry,
        getNodeData: props.getNodeData
      }
    )));
  };

  // src/util.ts
  var impactValues = {
    "minor": 0,
    "moderate": 1,
    "serious": 2,
    "critical": 3
  };
  var sortByImpact = (items) => [...items].sort((a, b) => (impactValues[b.impact] ?? -1) - (impactValues[a.impact] ?? -1));
  var featureEnabled = (frontendConfiguration) => (feature) => {
    const configKey = "Prgfx.Neos.AxeCore:features";
    if (typeof frontendConfiguration["get"] === "function") {
      return frontendConfiguration.get(configKey)?.[feature];
    }
    return !!frontendConfiguration[configKey]?.[feature];
  };
  var generateReport = (runOptions, locale) => {
    try {
      const guestFrameWindow = getGuestFrameWindow();
      if (!guestFrameWindow) {
        throw new Error("Could not get guest-frame window");
      }
      if (!guestFrameWindow.axe) {
        throw new Error("axe-core not found in guest-frame");
      }
      if (locale) {
        guestFrameWindow.axe.configure({ locale });
      }
      return guestFrameWindow.axe.run(runOptions).then((report) => {
        const memo = {};
        ["passes", "violations", "incomplete", "inapplicable"].forEach((resultType) => {
          if (!report[resultType]) {
            return;
          }
          for (let j = 0; j < report[resultType].length; j++) {
            if (!report[resultType][j].nodes) {
              return;
            }
            for (let i = 0; i < report[resultType][j].nodes.length; i++) {
              report[resultType][j].nodes[i].contentElement = report[resultType][j].nodes[i].target.map((selector) => {
                if (!memo[selector]) {
                  const targetNode = guestFrameWindow.document.querySelector(selector);
                  if (!targetNode) {
                    return memo[selector] = null;
                  }
                  const contentNode = targetNode.closest("[data-__neos-node-contextpath]");
                  if (!contentNode) {
                    return memo[selector] = null;
                  }
                  const contextPath = contentNode.getAttribute("data-__neos-node-contextpath");
                  const fusionPath = contentNode.getAttribute("data-__neos-fusion-path");
                  let fusionPrototype;
                  if (fusionPath) {
                    const prototypeNames = fusionPath.match(/<([^>]+)>/g);
                    if (prototypeNames) {
                      fusionPrototype = prototypeNames.pop().slice(1, -1);
                    }
                  }
                  return memo[selector] = {
                    contextPath,
                    fusionPath,
                    fusionPrototype
                  };
                }
                return memo[selector];
              });
            }
          }
        });
        return report;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  // src/components/result-list.tsx
  var ResultList = (props) => {
    const sortedItems = sortByImpact(props.items);
    return /* @__PURE__ */ import_react7.default.createElement("ul", null, sortedItems.map((data, i) => /* @__PURE__ */ import_react7.default.createElement(
      Result,
      {
        key: i,
        result: data,
        focusNode: props.focusNode,
        highlightNode: props.highlightNode,
        highlightedSelector: props.highlightedSelector,
        i18nRegistry: props.i18nRegistry,
        getNodeData: props.getNodeData
      }
    )));
  };

  // src/AxeCorePopout.tsx
  var import_react8 = __toESM(require_react());
  var import_react_redux = __toESM(require_react_redux());
  var import_react_popout = __toESM(require_react_popout_min());
  var import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
  var popoutOptions = {
    menubar: "no",
    location: "no"
  };
  var ReduxProvider = ({ store, children }) => import_react8.default.createElement(import_react_redux.Provider, { store }, children);
  var Popout = (props) => {
    const store = (0, import_react_redux.useStore)();
    const dispatch = (0, import_react_redux.useDispatch)();
    const currentlySelectedDocument = (0, import_react_redux.useSelector)((state) => import_neos_ui_redux_store.selectors.CR.Nodes.documentNodeContextPathSelector(state));
    const getNodeData = (0, import_react_redux.useSelector)((state) => import_neos_ui_redux_store.selectors.CR.Nodes.nodeByContextPath(state));
    const isPoppedOut2 = (0, import_react_redux.useSelector)((state) => selectors_exports.isPoppedOut(state));
    const popin = (0, import_react8.useCallback)(() => dispatch(actions.popin()), [dispatch]);
    const analyze = (0, import_react8.useCallback)(() => dispatch(actions.analyze(currentlySelectedDocument)), [dispatch, currentlySelectedDocument]);
    if (!isPoppedOut2) {
      return null;
    }
    const title = props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:popout.title", "axe-core Results", [document.title]);
    return /* @__PURE__ */ import_react8.default.createElement(
      import_react_popout.default,
      {
        url: "about:blank",
        containerId: "axe-core-popout",
        title,
        onError: popin,
        onClosing: popin,
        options: {
          height: Math.max(400, window.innerHeight * 0.8),
          ...popoutOptions
        }
      },
      /* @__PURE__ */ import_react8.default.createElement("div", { className: style_default.popout }, /* @__PURE__ */ import_react8.default.createElement(ReduxProvider, { store }, [...document.querySelectorAll("link[rel=stylesheet]")].map((l, i) => /* @__PURE__ */ import_react8.default.createElement("link", { rel: "stylesheet", href: l.href, key: i })), /* @__PURE__ */ import_react8.default.createElement(
        ViewContainer,
        {
          i18nRegistry: props.i18nRegistry,
          analyze,
          featureEnabled: props.featureEnabled,
          isPopout: true,
          getNodeData
        }
      )))
    );
  };
  var AxeCorePopout = () => {
    const { globalRegistry } = useNeos();
    return /* @__PURE__ */ import_react8.default.createElement(
      Popout,
      {
        i18nRegistry: globalRegistry.get("i18n"),
        featureEnabled: featureEnabled(globalRegistry.get("frontendConfiguration"))
      }
    );
  };
  var PopoutFeatureName = "popout";

  // src/components/view.tsx
  var import_neos_ui_redux_store2 = __toESM(require_neos_ui_redux_store());

  // src/components/export.tsx
  var import_react9 = __toESM(require_react());
  var import_react_ui_components4 = __toESM(require_react_ui_components());
  var sanitizeFilename = (filename) => filename.replace(/[/\\?%*:|"<>]/g, "_").replace(/_+/g, "_");
  var getFilenameFromTitle = () => `axe-results-${(window.opener || window).document.title}.json`;
  var download = (content, filename, contentType = "application/json") => {
    const a = document.createElement("a");
    a.setAttribute("href", `data:${contentType};charset=utf-8,${encodeURIComponent(content)}`);
    a.setAttribute("download", sanitizeFilename(filename));
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  var ExportButton = (props) => {
    const handleClick = (0, import_react9.useCallback)(() => {
      download(JSON.stringify(props.results), props.filename || "axe-results.json");
    }, [props.results, props.filename]);
    return /* @__PURE__ */ import_react9.default.createElement(
      import_react_ui_components4.Button,
      {
        disabled: props.disabled || !props.results,
        onClick: handleClick
      },
      props.label
    );
  };
  var ExportFeatureName = "export";

  // src/components/view.tsx
  var View = (props) => {
    const [highlightedSelector, setHighlightedSelector] = (0, import_react10.useState)(null);
    const highlightNode = (selector) => {
      highlightElement(selector);
      setHighlightedSelector(selector);
    };
    (0, import_react10.useEffect)(() => {
      return () => {
        const gfw = getGuestFrameWindow();
        if (gfw) {
          const el = gfw.document.getElementById("prgfx-neos-axecore-elementhighlighter");
          if (el) {
            el.style.display = "none";
          }
        }
      };
    });
    if (!props.isPopout && props.isPoppedOut) {
      return /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("p", null, props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:popout.poppedOut")), /* @__PURE__ */ import_react10.default.createElement(
        import_react_ui_components5.Button,
        {
          onClick: props.popin
        },
        props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:popout.popin")
      ));
    }
    const commonResultListProps = {
      focusNode: props.focusNode,
      i18nRegistry: props.i18nRegistry,
      highlightNode,
      highlightedSelector,
      getNodeData: props.getNodeData
    };
    return /* @__PURE__ */ import_react10.default.createElement("div", null, props.isAnalyzing && /* @__PURE__ */ import_react10.default.createElement("p", null, props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:view.analyzing")), /* @__PURE__ */ import_react10.default.createElement(
      import_react_ui_components5.Button,
      {
        disabled: props.isAnalyzing || !props.currentlySelectedDocument,
        onClick: props.analyze,
        style: "brand",
        icon: "search"
      },
      props.currentReport ? props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:view.analyzeAgain") : props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:view.analyze")
    ), props.featureEnabled(PopoutFeatureName) && !props.isPopout && props.currentReport && /* @__PURE__ */ import_react10.default.createElement("div", { className: style_default.spacer }, /* @__PURE__ */ import_react10.default.createElement(
      import_react_ui_components5.Button,
      {
        onClick: props.popout
      },
      props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:popout.popout")
    )), props.featureEnabled(ExportFeatureName) && props.currentReport && /* @__PURE__ */ import_react10.default.createElement("div", { className: style_default.spacer }, /* @__PURE__ */ import_react10.default.createElement(
      ExportButton,
      {
        label: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:export.export"),
        results: props.currentReport,
        filename: getFilenameFromTitle()
      }
    )), props.currentReport && /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(
      ResultSection,
      {
        icon: "exclamation-circle",
        iconColor: "error",
        title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:results.category.violations", "Violations", [props.currentReport.violations.length]),
        collapsed: props.currentReport.violations.length === 0
      },
      /* @__PURE__ */ import_react10.default.createElement(
        ResultList,
        {
          items: props.currentReport.violations,
          ...commonResultListProps
        }
      )
    ), /* @__PURE__ */ import_react10.default.createElement(
      ResultSection,
      {
        icon: "question-circle",
        iconColor: "default",
        title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:results.category.incomplete", "Incomplete", [props.currentReport.incomplete.length]),
        collapsed: true
      },
      /* @__PURE__ */ import_react10.default.createElement(
        ResultList,
        {
          items: props.currentReport.incomplete,
          ...commonResultListProps
        }
      )
    ), /* @__PURE__ */ import_react10.default.createElement(
      ResultSection,
      {
        icon: "check-circle",
        iconColor: "success",
        title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:results.category.passes", "Passes", [props.currentReport.passes.length]),
        collapsed: true
      },
      /* @__PURE__ */ import_react10.default.createElement(
        ResultList,
        {
          items: props.currentReport.passes,
          ...commonResultListProps
        }
      )
    ), /* @__PURE__ */ import_react10.default.createElement(
      ResultSection,
      {
        icon: "minus-circle",
        iconColor: "default",
        title: props.i18nRegistry.translate("Prgfx.Neos.AxeCore:AxeCoreView:results.category.inapplicable", "Inapplicable", [props.currentReport.inapplicable.length]),
        collapsed: true
      },
      /* @__PURE__ */ import_react10.default.createElement(
        ResultList,
        {
          items: props.currentReport.inapplicable,
          ...commonResultListProps
        }
      )
    )));
  };
  var ViewContainer = (props) => {
    const dispatch = (0, import_react_redux2.useDispatch)();
    const focusNode = (0, import_react10.useCallback)((contextPath, fusionPath) => {
      dispatch(import_neos_ui_redux_store2.actions.CR.Nodes.focus(contextPath, fusionPath));
      dispatch(import_neos_ui_redux_store2.actions.UI.ContentCanvas.requestScrollIntoView(true));
    }, [dispatch]);
    const popout = (0, import_react10.useCallback)(() => dispatch(actions.popout()), [dispatch]);
    const popin = (0, import_react10.useCallback)(() => dispatch(actions.popin()), [dispatch]);
    const currentlySelectedDocument = (0, import_react_redux2.useSelector)((state) => import_neos_ui_redux_store2.selectors.CR.Nodes.documentNodeContextPathSelector(state));
    const currentReport = (0, import_react_redux2.useSelector)((state) => selectors_exports.getReport(state)(import_neos_ui_redux_store2.selectors.CR.Nodes.documentNodeContextPathSelector(state)));
    const isAnalyzing2 = (0, import_react_redux2.useSelector)((state) => selectors_exports.isAnalyzing(state));
    const isPoppedOut2 = (0, import_react_redux2.useSelector)((state) => selectors_exports.isPoppedOut(state));
    return /* @__PURE__ */ import_react10.default.createElement(
      View,
      {
        isAnalyzing: isAnalyzing2,
        isPoppedOut: isPoppedOut2,
        currentReport,
        currentlySelectedDocument,
        focusNode,
        analyze: props.analyze,
        popout,
        popin,
        i18nRegistry: props.i18nRegistry,
        isPopout: props.isPopout,
        featureEnabled: props.featureEnabled,
        getNodeData: props.getNodeData
      }
    );
  };

  // src/AxeCoreView.tsx
  var AxeCoreView = (props) => {
    const { globalRegistry } = useNeos();
    const getNodeData = (0, import_react_redux3.useSelector)(import_neos_ui_redux_store3.selectors.CR.Nodes.nodeByContextPath);
    const currentlySelectedDocument = (0, import_react_redux3.useSelector)(import_neos_ui_redux_store3.selectors.CR.Nodes.documentNodeContextPathSelector);
    const dispatch = (0, import_react_redux3.useDispatch)();
    const isFeatureEnabled = featureEnabled(globalRegistry.get("frontendConfiguration"));
    const analyze = (0, import_react11.useCallback)(() => {
      return dispatch(actions.analyze(currentlySelectedDocument));
    }, [props.analyze, currentlySelectedDocument]);
    return /* @__PURE__ */ import_react11.default.createElement(
      ViewContainer,
      {
        i18nRegistry: globalRegistry.get("i18n"),
        featureEnabled: isFeatureEnabled,
        analyze,
        getNodeData
      }
    );
  };

  // src/state/sagas.ts
  var import_neos_ui_redux_store4 = __toESM(require_neos_ui_redux_store());
  var import_effects = __toESM(require_redux_saga_effects());
  var targetPreviewMode = "axeAnalyzerView";
  function* handleAnalyzerRequest({ store, globalRegistry }) {
    let previousPreviewMode, currentPreviewMode, contextPath;
    yield (0, import_effects.takeLatest)(actionTypes.ANALYZE, function* cb(action) {
      previousPreviewMode = yield (0, import_effects.select)(import_neos_ui_redux_store4.selectors.UI.EditPreviewMode.currentEditPreviewMode);
      contextPath = action.contextPath;
      try {
        yield (0, import_effects.put)(import_neos_ui_redux_store4.actions.UI.EditPreviewMode.set(targetPreviewMode));
      } catch (e) {
        console.error(e);
      }
    });
    yield (0, import_effects.takeLatest)(import_neos_ui_redux_store4.actionTypes.UI.ContentCanvas.STOP_LOADING, function* () {
      const state = store.getState();
      currentPreviewMode = import_neos_ui_redux_store4.selectors.UI.EditPreviewMode.currentEditPreviewMode(state);
      const analysisRequested = isAnalyzing(state);
      if (currentPreviewMode === "axeAnalyzerView" && analysisRequested) {
        try {
          const locale = globalRegistry.get("frontendConfiguration").get("Prgfx.Neos.AxeCore:axeCoreTranslations");
          const runOptions = globalRegistry.get("frontendConfiguration").get("Prgfx.Neos.AxeCore:runOptions") || void 0;
          const report = yield generateReport(runOptions, locale || void 0);
          yield (0, import_effects.put)(actions.setReport(contextPath, report));
        } catch (e) {
          yield (0, import_effects.put)(actions.setReport(contextPath, null));
          yield (0, import_effects.put)(import_neos_ui_redux_store4.actions.UI.FlashMessages.add("axe-core-generateReport", e.message, "error"));
        }
      }
    });
    yield (0, import_effects.takeLatest)(actionTypes.SET_REPORT, function* () {
      if (previousPreviewMode && previousPreviewMode !== targetPreviewMode) {
        yield (0, import_effects.put)(import_neos_ui_redux_store4.actions.UI.EditPreviewMode.set(previousPreviewMode));
      }
    });
  }

  // src/manifest.js
  dist_default("Prgfx.Neos.AxeCore:AxeCoreView", {}, (globalRegistry, { frontendConfiguration }) => {
    const viewsRegistry = globalRegistry.get("inspector").get("views");
    viewsRegistry.set("Prgfx.Neos.AxeCore/Inspector/Views/AxeCoreView", {
      component: AxeCoreView
    });
    const sagasRegistry = globalRegistry.get("sagas");
    sagasRegistry.set("Prgfx.Neos.AxeCore/analyze", { saga: handleAnalyzerRequest });
    const reducersRegistry = globalRegistry.get("reducers");
    reducersRegistry.set("Prgfx.Neos.AxeCore/AxeCoreView", { reducer });
    if (featureEnabled(frontendConfiguration)(PopoutFeatureName)) {
      const containerRegistry = globalRegistry.get("containers");
      containerRegistry.set("Modals/AxeCorePopout", AxeCorePopout);
    }
  });
})();
/*! Bundled license information:

react-popout/dist/react-popout.min.js:
  (** @license React v16.13.1
  * react-is.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  *)
  (** @license React v16.13.1
  * react-is.development.js
  *
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  *)
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
