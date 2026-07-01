(function () {
  const P = document.createElement("link").relList;
  if (P && P.supports && P.supports("modulepreload")) return;
  for (const F of document.querySelectorAll('link[rel="modulepreload"]')) d(F);
  new MutationObserver((F) => {
    for (const U of F)
      if (U.type === "childList")
        for (const W of U.addedNodes)
          W.tagName === "LINK" && W.rel === "modulepreload" && d(W);
  }).observe(document, { childList: !0, subtree: !0 });
  function S(F) {
    const U = {};
    return (
      F.integrity && (U.integrity = F.integrity),
      F.referrerPolicy && (U.referrerPolicy = F.referrerPolicy),
      F.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : F.crossOrigin === "anonymous"
          ? (U.credentials = "omit")
          : (U.credentials = "same-origin"),
      U
    );
  }
  function d(F) {
    if (F.ep) return;
    F.ep = !0;
    const U = S(F);
    fetch(F.href, U);
  }
})();
function Kf(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default")
    ? k.default
    : k;
}
var cc = { exports: {} },
  wa = {};
var px;
function $f() {
  if (px) return wa;
  px = 1;
  var k = Symbol.for("react.transitional.element"),
    P = Symbol.for("react.fragment");
  function S(d, F, U) {
    var W = null;
    if (
      (U !== void 0 && (W = "" + U),
      F.key !== void 0 && (W = "" + F.key),
      "key" in F)
    ) {
      U = {};
      for (var J in F) J !== "key" && (U[J] = F[J]);
    } else U = F;
    return (
      (F = U.ref),
      { $$typeof: k, type: d, key: W, ref: F !== void 0 ? F : null, props: U }
    );
  }
  return ((wa.Fragment = P), (wa.jsx = S), (wa.jsxs = S), wa);
}
var Qx;
function Pf() {
  return (Qx || ((Qx = 1), (cc.exports = $f())), cc.exports);
}
var Vr = Pf(),
  sc = { exports: {} },
  X = {};
var bx;
function np() {
  if (bx) return X;
  bx = 1;
  var k = Symbol.for("react.transitional.element"),
    P = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    U = Symbol.for("react.consumer"),
    W = Symbol.for("react.context"),
    J = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    O = Symbol.for("react.activity"),
    M = Symbol.iterator;
  function G(u) {
    return u === null || typeof u != "object"
      ? null
      : ((u = (M && u[M]) || u["@@iterator"]),
        typeof u == "function" ? u : null);
  }
  var $ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qn = Object.assign,
    _n = {};
  function Wn(u, B, E) {
    ((this.props = u),
      (this.context = B),
      (this.refs = _n),
      (this.updater = E || $));
  }
  ((Wn.prototype.isReactComponent = {}),
    (Wn.prototype.setState = function (u, B) {
      if (typeof u != "object" && typeof u != "function" && u != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, u, B, "setState");
    }),
    (Wn.prototype.forceUpdate = function (u) {
      this.updater.enqueueForceUpdate(this, u, "forceUpdate");
    }));
  function rr() {}
  rr.prototype = Wn.prototype;
  function Tn(u, B, E) {
    ((this.props = u),
      (this.context = B),
      (this.refs = _n),
      (this.updater = E || $));
  }
  var Hn = (Tn.prototype = new rr());
  ((Hn.constructor = Tn), Qn(Hn, Wn.prototype), (Hn.isPureReactComponent = !0));
  var Gn = Array.isArray;
  function hn() {}
  var q = { H: null, A: null, T: null, S: null },
    nn = Object.prototype.hasOwnProperty;
  function jn(u, B, E) {
    var j = E.ref;
    return {
      $$typeof: k,
      type: u,
      key: B,
      ref: j !== void 0 ? j : null,
      props: E,
    };
  }
  function Pn(u, B) {
    return jn(u.type, B, u.props);
  }
  function A(u) {
    return typeof u == "object" && u !== null && u.$$typeof === k;
  }
  function T(u) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      u.replace(/[=:]/g, function (E) {
        return B[E];
      })
    );
  }
  var rn = /\/+/g;
  function Z(u, B) {
    return typeof u == "object" && u !== null && u.key != null
      ? T("" + u.key)
      : B.toString(36);
  }
  function yn(u) {
    switch (u.status) {
      case "fulfilled":
        return u.value;
      case "rejected":
        throw u.reason;
      default:
        switch (
          (typeof u.status == "string"
            ? u.then(hn, hn)
            : ((u.status = "pending"),
              u.then(
                function (B) {
                  u.status === "pending" &&
                    ((u.status = "fulfilled"), (u.value = B));
                },
                function (B) {
                  u.status === "pending" &&
                    ((u.status = "rejected"), (u.reason = B));
                },
              )),
          u.status)
        ) {
          case "fulfilled":
            return u.value;
          case "rejected":
            throw u.reason;
        }
    }
    throw u;
  }
  function v(u, B, E, j, H) {
    var Y = typeof u;
    (Y === "undefined" || Y === "boolean") && (u = null);
    var L = !1;
    if (u === null) L = !0;
    else
      switch (Y) {
        case "bigint":
        case "string":
        case "number":
          L = !0;
          break;
        case "object":
          switch (u.$$typeof) {
            case k:
            case P:
              L = !0;
              break;
            case C:
              return ((L = u._init), v(L(u._payload), B, E, j, H));
          }
      }
    if (L)
      return (
        (H = H(u)),
        (L = j === "" ? "." + Z(u, 0) : j),
        Gn(H)
          ? ((E = ""),
            L != null && (E = L.replace(rn, "$&/") + "/"),
            v(H, B, E, "", function (er) {
              return er;
            }))
          : H != null &&
            (A(H) &&
              (H = Pn(
                H,
                E +
                  (H.key == null || (u && u.key === H.key)
                    ? ""
                    : ("" + H.key).replace(rn, "$&/") + "/") +
                  L,
              )),
            B.push(H)),
        1
      );
    L = 0;
    var sn = j === "" ? "." : j + ":";
    if (Gn(u))
      for (var un = 0; un < u.length; un++)
        ((j = u[un]), (Y = sn + Z(j, un)), (L += v(j, B, E, Y, H)));
    else if (((un = G(u)), typeof un == "function"))
      for (u = un.call(u), un = 0; !(j = u.next()).done; )
        ((j = j.value), (Y = sn + Z(j, un++)), (L += v(j, B, E, Y, H)));
    else if (Y === "object") {
      if (typeof u.then == "function") return v(yn(u), B, E, j, H);
      throw (
        (B = String(u)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(u).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return L;
  }
  function _(u, B, E) {
    if (u == null) return u;
    var j = [],
      H = 0;
    return (
      v(u, j, "", "", function (Y) {
        return B.call(E, Y, H++);
      }),
      j
    );
  }
  function D(u) {
    if (u._status === -1) {
      var B = u._result;
      ((B = B()),
        B.then(
          function (E) {
            (u._status === 0 || u._status === -1) &&
              ((u._status = 1), (u._result = E));
          },
          function (E) {
            (u._status === 0 || u._status === -1) &&
              ((u._status = 2), (u._result = E));
          },
        ),
        u._status === -1 && ((u._status = 0), (u._result = B)));
    }
    if (u._status === 1) return u._result.default;
    throw u._result;
  }
  var an =
      typeof reportError == "function"
        ? reportError
        : function (u) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof u == "object" &&
                  u !== null &&
                  typeof u.message == "string"
                    ? String(u.message)
                    : String(u),
                error: u,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", u);
              return;
            }
            console.error(u);
          },
    xn = {
      map: _,
      forEach: function (u, B, E) {
        _(
          u,
          function () {
            B.apply(this, arguments);
          },
          E,
        );
      },
      count: function (u) {
        var B = 0;
        return (
          _(u, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (u) {
        return (
          _(u, function (B) {
            return B;
          }) || []
        );
      },
      only: function (u) {
        if (!A(u))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return u;
      },
    };
  return (
    (X.Activity = O),
    (X.Children = xn),
    (X.Component = Wn),
    (X.Fragment = S),
    (X.Profiler = F),
    (X.PureComponent = Tn),
    (X.StrictMode = d),
    (X.Suspense = w),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q),
    (X.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (u) {
        return q.H.useMemoCache(u);
      },
    }),
    (X.cache = function (u) {
      return function () {
        return u.apply(null, arguments);
      };
    }),
    (X.cacheSignal = function () {
      return null;
    }),
    (X.cloneElement = function (u, B, E) {
      if (u == null)
        throw Error(
          "The argument must be a React element, but you passed " + u + ".",
        );
      var j = Qn({}, u.props),
        H = u.key;
      if (B != null)
        for (Y in (B.key !== void 0 && (H = "" + B.key), B))
          !nn.call(B, Y) ||
            Y === "key" ||
            Y === "__self" ||
            Y === "__source" ||
            (Y === "ref" && B.ref === void 0) ||
            (j[Y] = B[Y]);
      var Y = arguments.length - 2;
      if (Y === 1) j.children = E;
      else if (1 < Y) {
        for (var L = Array(Y), sn = 0; sn < Y; sn++) L[sn] = arguments[sn + 2];
        j.children = L;
      }
      return jn(u.type, H, j);
    }),
    (X.createContext = function (u) {
      return (
        (u = {
          $$typeof: W,
          _currentValue: u,
          _currentValue2: u,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (u.Provider = u),
        (u.Consumer = { $$typeof: U, _context: u }),
        u
      );
    }),
    (X.createElement = function (u, B, E) {
      var j,
        H = {},
        Y = null;
      if (B != null)
        for (j in (B.key !== void 0 && (Y = "" + B.key), B))
          nn.call(B, j) &&
            j !== "key" &&
            j !== "__self" &&
            j !== "__source" &&
            (H[j] = B[j]);
      var L = arguments.length - 2;
      if (L === 1) H.children = E;
      else if (1 < L) {
        for (var sn = Array(L), un = 0; un < L; un++)
          sn[un] = arguments[un + 2];
        H.children = sn;
      }
      if (u && u.defaultProps)
        for (j in ((L = u.defaultProps), L)) H[j] === void 0 && (H[j] = L[j]);
      return jn(u, Y, H);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (u) {
      return { $$typeof: J, render: u };
    }),
    (X.isValidElement = A),
    (X.lazy = function (u) {
      return { $$typeof: C, _payload: { _status: -1, _result: u }, _init: D };
    }),
    (X.memo = function (u, B) {
      return { $$typeof: p, type: u, compare: B === void 0 ? null : B };
    }),
    (X.startTransition = function (u) {
      var B = q.T,
        E = {};
      q.T = E;
      try {
        var j = u(),
          H = q.S;
        (H !== null && H(E, j),
          typeof j == "object" &&
            j !== null &&
            typeof j.then == "function" &&
            j.then(hn, an));
      } catch (Y) {
        an(Y);
      } finally {
        (B !== null && E.types !== null && (B.types = E.types), (q.T = B));
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return q.H.useCacheRefresh();
    }),
    (X.use = function (u) {
      return q.H.use(u);
    }),
    (X.useActionState = function (u, B, E) {
      return q.H.useActionState(u, B, E);
    }),
    (X.useCallback = function (u, B) {
      return q.H.useCallback(u, B);
    }),
    (X.useContext = function (u) {
      return q.H.useContext(u);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (u, B) {
      return q.H.useDeferredValue(u, B);
    }),
    (X.useEffect = function (u, B) {
      return q.H.useEffect(u, B);
    }),
    (X.useEffectEvent = function (u) {
      return q.H.useEffectEvent(u);
    }),
    (X.useId = function () {
      return q.H.useId();
    }),
    (X.useImperativeHandle = function (u, B, E) {
      return q.H.useImperativeHandle(u, B, E);
    }),
    (X.useInsertionEffect = function (u, B) {
      return q.H.useInsertionEffect(u, B);
    }),
    (X.useLayoutEffect = function (u, B) {
      return q.H.useLayoutEffect(u, B);
    }),
    (X.useMemo = function (u, B) {
      return q.H.useMemo(u, B);
    }),
    (X.useOptimistic = function (u, B) {
      return q.H.useOptimistic(u, B);
    }),
    (X.useReducer = function (u, B, E) {
      return q.H.useReducer(u, B, E);
    }),
    (X.useRef = function (u) {
      return q.H.useRef(u);
    }),
    (X.useState = function (u) {
      return q.H.useState(u);
    }),
    (X.useSyncExternalStore = function (u, B, E) {
      return q.H.useSyncExternalStore(u, B, E);
    }),
    (X.useTransition = function () {
      return q.H.useTransition();
    }),
    (X.version = "19.2.7"),
    X
  );
}
var vx;
function fc() {
  return (vx || ((vx = 1), (sc.exports = np())), sc.exports);
}
var Je = fc(),
  uc = { exports: {} },
  Oa = {},
  dc = { exports: {} },
  xc = {};
var hx;
function rp() {
  return (
    hx ||
      ((hx = 1),
      (function (k) {
        function P(v, _) {
          var D = v.length;
          v.push(_);
          n: for (; 0 < D; ) {
            var an = (D - 1) >>> 1,
              xn = v[an];
            if (0 < F(xn, _)) ((v[an] = _), (v[D] = xn), (D = an));
            else break n;
          }
        }
        function S(v) {
          return v.length === 0 ? null : v[0];
        }
        function d(v) {
          if (v.length === 0) return null;
          var _ = v[0],
            D = v.pop();
          if (D !== _) {
            v[0] = D;
            n: for (var an = 0, xn = v.length, u = xn >>> 1; an < u; ) {
              var B = 2 * (an + 1) - 1,
                E = v[B],
                j = B + 1,
                H = v[j];
              if (0 > F(E, D))
                j < xn && 0 > F(H, E)
                  ? ((v[an] = H), (v[j] = D), (an = j))
                  : ((v[an] = E), (v[B] = D), (an = B));
              else if (j < xn && 0 > F(H, D))
                ((v[an] = H), (v[j] = D), (an = j));
              else break n;
            }
          }
          return _;
        }
        function F(v, _) {
          var D = v.sortIndex - _.sortIndex;
          return D !== 0 ? D : v.id - _.id;
        }
        if (
          ((k.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var U = performance;
          k.unstable_now = function () {
            return U.now();
          };
        } else {
          var W = Date,
            J = W.now();
          k.unstable_now = function () {
            return W.now() - J;
          };
        }
        var w = [],
          p = [],
          C = 1,
          O = null,
          M = 3,
          G = !1,
          $ = !1,
          Qn = !1,
          _n = !1,
          Wn = typeof setTimeout == "function" ? setTimeout : null,
          rr = typeof clearTimeout == "function" ? clearTimeout : null,
          Tn = typeof setImmediate < "u" ? setImmediate : null;
        function Hn(v) {
          for (var _ = S(p); _ !== null; ) {
            if (_.callback === null) d(p);
            else if (_.startTime <= v)
              (d(p), (_.sortIndex = _.expirationTime), P(w, _));
            else break;
            _ = S(p);
          }
        }
        function Gn(v) {
          if (((Qn = !1), Hn(v), !$))
            if (S(w) !== null) (($ = !0), hn || ((hn = !0), T()));
            else {
              var _ = S(p);
              _ !== null && yn(Gn, _.startTime - v);
            }
        }
        var hn = !1,
          q = -1,
          nn = 5,
          jn = -1;
        function Pn() {
          return _n ? !0 : !(k.unstable_now() - jn < nn);
        }
        function A() {
          if (((_n = !1), hn)) {
            var v = k.unstable_now();
            jn = v;
            var _ = !0;
            try {
              n: {
                (($ = !1), Qn && ((Qn = !1), rr(q), (q = -1)), (G = !0));
                var D = M;
                try {
                  r: {
                    for (
                      Hn(v), O = S(w);
                      O !== null && !(O.expirationTime > v && Pn());
                    ) {
                      var an = O.callback;
                      if (typeof an == "function") {
                        ((O.callback = null), (M = O.priorityLevel));
                        var xn = an(O.expirationTime <= v);
                        if (((v = k.unstable_now()), typeof xn == "function")) {
                          ((O.callback = xn), Hn(v), (_ = !0));
                          break r;
                        }
                        (O === S(w) && d(w), Hn(v));
                      } else d(w);
                      O = S(w);
                    }
                    if (O !== null) _ = !0;
                    else {
                      var u = S(p);
                      (u !== null && yn(Gn, u.startTime - v), (_ = !1));
                    }
                  }
                  break n;
                } finally {
                  ((O = null), (M = D), (G = !1));
                }
                _ = void 0;
              }
            } finally {
              _ ? T() : (hn = !1);
            }
          }
        }
        var T;
        if (typeof Tn == "function")
          T = function () {
            Tn(A);
          };
        else if (typeof MessageChannel < "u") {
          var rn = new MessageChannel(),
            Z = rn.port2;
          ((rn.port1.onmessage = A),
            (T = function () {
              Z.postMessage(null);
            }));
        } else
          T = function () {
            Wn(A, 0);
          };
        function yn(v, _) {
          q = Wn(function () {
            v(k.unstable_now());
          }, _);
        }
        ((k.unstable_IdlePriority = 5),
          (k.unstable_ImmediatePriority = 1),
          (k.unstable_LowPriority = 4),
          (k.unstable_NormalPriority = 3),
          (k.unstable_Profiling = null),
          (k.unstable_UserBlockingPriority = 2),
          (k.unstable_cancelCallback = function (v) {
            v.callback = null;
          }),
          (k.unstable_forceFrameRate = function (v) {
            0 > v || 125 < v
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (nn = 0 < v ? Math.floor(1e3 / v) : 5);
          }),
          (k.unstable_getCurrentPriorityLevel = function () {
            return M;
          }),
          (k.unstable_next = function (v) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = M;
            }
            var D = M;
            M = _;
            try {
              return v();
            } finally {
              M = D;
            }
          }),
          (k.unstable_requestPaint = function () {
            _n = !0;
          }),
          (k.unstable_runWithPriority = function (v, _) {
            switch (v) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                v = 3;
            }
            var D = M;
            M = v;
            try {
              return _();
            } finally {
              M = D;
            }
          }),
          (k.unstable_scheduleCallback = function (v, _, D) {
            var an = k.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? an + D : an))
                : (D = an),
              v)
            ) {
              case 1:
                var xn = -1;
                break;
              case 2:
                xn = 250;
                break;
              case 5:
                xn = 1073741823;
                break;
              case 4:
                xn = 1e4;
                break;
              default:
                xn = 5e3;
            }
            return (
              (xn = D + xn),
              (v = {
                id: C++,
                callback: _,
                priorityLevel: v,
                startTime: D,
                expirationTime: xn,
                sortIndex: -1,
              }),
              D > an
                ? ((v.sortIndex = D),
                  P(p, v),
                  S(w) === null &&
                    v === S(p) &&
                    (Qn ? (rr(q), (q = -1)) : (Qn = !0), yn(Gn, D - an)))
                : ((v.sortIndex = xn),
                  P(w, v),
                  $ || G || (($ = !0), hn || ((hn = !0), T()))),
              v
            );
          }),
          (k.unstable_shouldYield = Pn),
          (k.unstable_wrapCallback = function (v) {
            var _ = M;
            return function () {
              var D = M;
              M = _;
              try {
                return v.apply(this, arguments);
              } finally {
                M = D;
              }
            };
          }));
      })(xc)),
    xc
  );
}
var yx;
function ep() {
  return (yx || ((yx = 1), (dc.exports = rp())), dc.exports);
}
var mc = { exports: {} },
  $n = {};
var Bx;
function tp() {
  if (Bx) return $n;
  Bx = 1;
  var k = fc();
  function P(w) {
    var p = "https://react.dev/errors/" + w;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        p += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return (
      "Minified React error #" +
      w +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function S() {}
  var d = {
      d: {
        f: S,
        r: function () {
          throw Error(P(522));
        },
        D: S,
        C: S,
        L: S,
        m: S,
        X: S,
        S,
        M: S,
      },
      p: 0,
      findDOMNode: null,
    },
    F = Symbol.for("react.portal");
  function U(w, p, C) {
    var O =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: F,
      key: O == null ? null : "" + O,
      children: w,
      containerInfo: p,
      implementation: C,
    };
  }
  var W = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function J(w, p) {
    if (w === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    ($n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    ($n.createPortal = function (w, p) {
      var C =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(P(299));
      return U(w, p, null, C);
    }),
    ($n.flushSync = function (w) {
      var p = W.T,
        C = d.p;
      try {
        if (((W.T = null), (d.p = 2), w)) return w();
      } finally {
        ((W.T = p), (d.p = C), d.d.f());
      }
    }),
    ($n.preconnect = function (w, p) {
      typeof w == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        d.d.C(w, p));
    }),
    ($n.prefetchDNS = function (w) {
      typeof w == "string" && d.d.D(w);
    }),
    ($n.preinit = function (w, p) {
      if (typeof w == "string" && p && typeof p.as == "string") {
        var C = p.as,
          O = J(C, p.crossOrigin),
          M = typeof p.integrity == "string" ? p.integrity : void 0,
          G = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        C === "style"
          ? d.d.S(w, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: O,
              integrity: M,
              fetchPriority: G,
            })
          : C === "script" &&
            d.d.X(w, {
              crossOrigin: O,
              integrity: M,
              fetchPriority: G,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    ($n.preinitModule = function (w, p) {
      if (typeof w == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var C = J(p.as, p.crossOrigin);
            d.d.M(w, {
              crossOrigin: C,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && d.d.M(w);
    }),
    ($n.preload = function (w, p) {
      if (
        typeof w == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var C = p.as,
          O = J(C, p.crossOrigin);
        d.d.L(w, C, {
          crossOrigin: O,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    ($n.preloadModule = function (w, p) {
      if (typeof w == "string")
        if (p) {
          var C = J(p.as, p.crossOrigin);
          d.d.m(w, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: C,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else d.d.m(w);
    }),
    ($n.requestFormReset = function (w) {
      d.d.r(w);
    }),
    ($n.unstable_batchedUpdates = function (w, p) {
      return w(p);
    }),
    ($n.useFormState = function (w, p, C) {
      return W.H.useFormState(w, p, C);
    }),
    ($n.useFormStatus = function () {
      return W.H.useHostTransitionStatus();
    }),
    ($n.version = "19.2.7"),
    $n
  );
}
var gx;
function ap() {
  if (gx) return mc.exports;
  gx = 1;
  function k() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (P) {
        console.error(P);
      }
  }
  return (k(), (mc.exports = tp()), mc.exports);
}
var Fx;
function lp() {
  if (Fx) return Oa;
  Fx = 1;
  var k = ep(),
    P = fc(),
    S = ap();
  function d(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        r += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      n +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function F(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function U(n) {
    var r = n,
      e = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do ((r = n), (r.flags & 4098) !== 0 && (e = r.return), (n = r.return));
      while (n);
    }
    return r.tag === 3 ? e : null;
  }
  function W(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        (r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function J(n) {
    if (n.tag === 31) {
      var r = n.memoizedState;
      if (
        (r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function w(n) {
    if (U(n) !== n) throw Error(d(188));
  }
  function p(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = U(n)), r === null)) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var e = n, t = r; ; ) {
      var a = e.return;
      if (a === null) break;
      var l = a.alternate;
      if (l === null) {
        if (((t = a.return), t !== null)) {
          e = t;
          continue;
        }
        break;
      }
      if (a.child === l.child) {
        for (l = a.child; l; ) {
          if (l === e) return (w(a), n);
          if (l === t) return (w(a), r);
          l = l.sibling;
        }
        throw Error(d(188));
      }
      if (e.return !== t.return) ((e = a), (t = l));
      else {
        for (var i = !1, o = a.child; o; ) {
          if (o === e) {
            ((i = !0), (e = a), (t = l));
            break;
          }
          if (o === t) {
            ((i = !0), (t = a), (e = l));
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = l.child; o; ) {
            if (o === e) {
              ((i = !0), (e = l), (t = a));
              break;
            }
            if (o === t) {
              ((i = !0), (t = l), (e = a));
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (e.alternate !== t) throw Error(d(190));
    }
    if (e.tag !== 3) throw Error(d(188));
    return e.stateNode.current === e ? n : r;
  }
  function C(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n;
    for (n = n.child; n !== null; ) {
      if (((r = C(n)), r !== null)) return r;
      n = n.sibling;
    }
    return null;
  }
  var O = Object.assign,
    M = Symbol.for("react.element"),
    G = Symbol.for("react.transitional.element"),
    $ = Symbol.for("react.portal"),
    Qn = Symbol.for("react.fragment"),
    _n = Symbol.for("react.strict_mode"),
    Wn = Symbol.for("react.profiler"),
    rr = Symbol.for("react.consumer"),
    Tn = Symbol.for("react.context"),
    Hn = Symbol.for("react.forward_ref"),
    Gn = Symbol.for("react.suspense"),
    hn = Symbol.for("react.suspense_list"),
    q = Symbol.for("react.memo"),
    nn = Symbol.for("react.lazy"),
    jn = Symbol.for("react.activity"),
    Pn = Symbol.for("react.memo_cache_sentinel"),
    A = Symbol.iterator;
  function T(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (A && n[A]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var rn = Symbol.for("react.client.reference");
  function Z(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === rn ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Qn:
        return "Fragment";
      case Wn:
        return "Profiler";
      case _n:
        return "StrictMode";
      case Gn:
        return "Suspense";
      case hn:
        return "SuspenseList";
      case jn:
        return "Activity";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case $:
          return "Portal";
        case Tn:
          return n.displayName || "Context";
        case rr:
          return (n._context.displayName || "Context") + ".Consumer";
        case Hn:
          var r = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case q:
          return (
            (r = n.displayName || null),
            r !== null ? r : Z(n.type) || "Memo"
          );
        case nn:
          ((r = n._payload), (n = n._init));
          try {
            return Z(n(r));
          } catch {}
      }
    return null;
  }
  var yn = Array.isArray,
    v = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = { pending: !1, data: null, method: null, action: null },
    an = [],
    xn = -1;
  function u(n) {
    return { current: n };
  }
  function B(n) {
    0 > xn || ((n.current = an[xn]), (an[xn] = null), xn--);
  }
  function E(n, r) {
    (xn++, (an[xn] = n.current), (n.current = r));
  }
  var j = u(null),
    H = u(null),
    Y = u(null),
    L = u(null);
  function sn(n, r) {
    switch ((E(Y, r), E(H, n), E(j, null), r.nodeType)) {
      case 9:
      case 11:
        n = (n = r.documentElement) && (n = n.namespaceURI) ? Md(n) : 0;
        break;
      default:
        if (((n = r.tagName), (r = r.namespaceURI)))
          ((r = Md(r)), (n = Dd(r, n)));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    (B(j), E(j, n));
  }
  function un() {
    (B(j), B(H), B(Y));
  }
  function er(n) {
    n.memoizedState !== null && E(L, n);
    var r = j.current,
      e = Dd(r, n.type);
    r !== e && (E(H, n), E(j, e));
  }
  function ur(n) {
    (H.current === n && (B(j), B(H)),
      L.current === n && (B(L), (Ba._currentValue = D)));
  }
  var dr, wn;
  function ln(n) {
    if (dr === void 0)
      try {
        throw Error();
      } catch (e) {
        var r = e.stack.trim().match(/\n( *(at )?)/);
        ((dr = (r && r[1]) || ""),
          (wn =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      dr +
      n +
      wn
    );
  }
  var Nn = !1;
  function gr(n, r) {
    if (!n || Nn) return "";
    Nn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t = {
        DetermineComponentFrameRoot: function () {
          try {
            if (r) {
              var g = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(g.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(g, []);
                } catch (b) {
                  var Q = b;
                }
                Reflect.construct(n, [], g);
              } else {
                try {
                  g.call();
                } catch (b) {
                  Q = b;
                }
                n.call(g.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                Q = b;
              }
              (g = n()) &&
                typeof g.catch == "function" &&
                g.catch(function () {});
            }
          } catch (b) {
            if (b && Q && typeof b.stack == "string") return [b.stack, Q.stack];
          }
          return [null, null];
        },
      };
      t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        t.DetermineComponentFrameRoot,
        "name",
      );
      a &&
        a.configurable &&
        Object.defineProperty(t.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var l = t.DetermineComponentFrameRoot(),
        i = l[0],
        o = l[1];
      if (i && o) {
        var c = i.split(`
`),
          f = o.split(`
`);
        for (
          a = t = 0;
          t < c.length && !c[t].includes("DetermineComponentFrameRoot");
        )
          t++;
        for (; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
          a++;
        if (t === c.length || a === f.length)
          for (
            t = c.length - 1, a = f.length - 1;
            1 <= t && 0 <= a && c[t] !== f[a];
          )
            a--;
        for (; 1 <= t && 0 <= a; t--, a--)
          if (c[t] !== f[a]) {
            if (t !== 1 || a !== 1)
              do
                if ((t--, a--, 0 > a || c[t] !== f[a])) {
                  var h =
                    `
` + c[t].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      h.includes("<anonymous>") &&
                      (h = h.replace("<anonymous>", n.displayName)),
                    h
                  );
                }
              while (1 <= t && 0 <= a);
            break;
          }
      }
    } finally {
      ((Nn = !1), (Error.prepareStackTrace = e));
    }
    return (e = n ? n.displayName || n.name : "") ? ln(e) : "";
  }
  function ka(n, r) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return ln(n.type);
      case 16:
        return ln("Lazy");
      case 13:
        return n.child !== r && r !== null
          ? ln("Suspense Fallback")
          : ln("Suspense");
      case 19:
        return ln("SuspenseList");
      case 0:
      case 15:
        return gr(n.type, !1);
      case 11:
        return gr(n.type.render, !1);
      case 1:
        return gr(n.type, !0);
      case 31:
        return ln("Activity");
      default:
        return "";
    }
  }
  function pc(n) {
    try {
      var r = "",
        e = null;
      do ((r += ka(n, e)), (e = n), (n = n.return));
      while (n);
      return r;
    } catch (t) {
      return (
        `
Error generating stack: ` +
        t.message +
        `
` +
        t.stack
      );
    }
  }
  var Gl = Object.prototype.hasOwnProperty,
    Xl = k.unstable_scheduleCallback,
    Jl = k.unstable_cancelCallback,
    Ex = k.unstable_shouldYield,
    _x = k.unstable_requestPaint,
    xr = k.unstable_now,
    Tx = k.unstable_getCurrentPriorityLevel,
    Qc = k.unstable_ImmediatePriority,
    bc = k.unstable_UserBlockingPriority,
    Ea = k.unstable_NormalPriority,
    jx = k.unstable_LowPriority,
    vc = k.unstable_IdlePriority,
    Sx = k.log,
    Cx = k.unstable_setDisableYieldValue,
    Ct = null,
    mr = null;
  function le(n) {
    if (
      (typeof Sx == "function" && Cx(n),
      mr && typeof mr.setStrictMode == "function")
    )
      try {
        mr.setStrictMode(Ct, n);
      } catch {}
  }
  var fr = Math.clz32 ? Math.clz32 : Wx,
    zx = Math.log,
    Rx = Math.LN2;
  function Wx(n) {
    return ((n >>>= 0), n === 0 ? 32 : (31 - ((zx(n) / Rx) | 0)) | 0);
  }
  var _a = 256,
    Ta = 262144,
    ja = 4194304;
  function Te(n) {
    var r = n & 42;
    if (r !== 0) return r;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return n & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function Sa(n, r, e) {
    var t = n.pendingLanes;
    if (t === 0) return 0;
    var a = 0,
      l = n.suspendedLanes,
      i = n.pingedLanes;
    n = n.warmLanes;
    var o = t & 134217727;
    return (
      o !== 0
        ? ((t = o & ~l),
          t !== 0
            ? (a = Te(t))
            : ((i &= o),
              i !== 0
                ? (a = Te(i))
                : e || ((e = o & ~n), e !== 0 && (a = Te(e)))))
        : ((o = t & ~l),
          o !== 0
            ? (a = Te(o))
            : i !== 0
              ? (a = Te(i))
              : e || ((e = t & ~n), e !== 0 && (a = Te(e)))),
      a === 0
        ? 0
        : r !== 0 &&
            r !== a &&
            (r & l) === 0 &&
            ((l = a & -a),
            (e = r & -r),
            l >= e || (l === 32 && (e & 4194048) !== 0))
          ? r
          : a
    );
  }
  function zt(n, r) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & r) === 0;
  }
  function Ax(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return r + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hc() {
    var n = ja;
    return ((ja <<= 1), (ja & 62914560) === 0 && (ja = 4194304), n);
  }
  function ql(n) {
    for (var r = [], e = 0; 31 > e; e++) r.push(n);
    return r;
  }
  function Rt(n, r) {
    ((n.pendingLanes |= r),
      r !== 268435456 &&
        ((n.suspendedLanes = 0), (n.pingedLanes = 0), (n.warmLanes = 0)));
  }
  function Mx(n, r, e, t, a, l) {
    var i = n.pendingLanes;
    ((n.pendingLanes = e),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.warmLanes = 0),
      (n.expiredLanes &= e),
      (n.entangledLanes &= e),
      (n.errorRecoveryDisabledLanes &= e),
      (n.shellSuspendCounter = 0));
    var o = n.entanglements,
      c = n.expirationTimes,
      f = n.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var h = 31 - fr(e),
        g = 1 << h;
      ((o[h] = 0), (c[h] = -1));
      var Q = f[h];
      if (Q !== null)
        for (f[h] = null, h = 0; h < Q.length; h++) {
          var b = Q[h];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~g;
    }
    (t !== 0 && yc(n, t, 0),
      l !== 0 && a === 0 && n.tag !== 0 && (n.suspendedLanes |= l & ~(i & ~r)));
  }
  function yc(n, r, e) {
    ((n.pendingLanes |= r), (n.suspendedLanes &= ~r));
    var t = 31 - fr(r);
    ((n.entangledLanes |= r),
      (n.entanglements[t] = n.entanglements[t] | 1073741824 | (e & 261930)));
  }
  function Bc(n, r) {
    var e = (n.entangledLanes |= r);
    for (n = n.entanglements; e; ) {
      var t = 31 - fr(e),
        a = 1 << t;
      ((a & r) | (n[t] & r) && (n[t] |= r), (e &= ~a));
    }
  }
  function gc(n, r) {
    var e = r & -r;
    return (
      (e = (e & 42) !== 0 ? 1 : Il(e)),
      (e & (n.suspendedLanes | r)) !== 0 ? 0 : e
    );
  }
  function Il(n) {
    switch (n) {
      case 2:
        n = 1;
        break;
      case 8:
        n = 4;
        break;
      case 32:
        n = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        n = 128;
        break;
      case 268435456:
        n = 134217728;
        break;
      default:
        n = 0;
    }
    return n;
  }
  function Kl(n) {
    return (
      (n &= -n),
      2 < n ? (8 < n ? ((n & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Fc() {
    var n = _.p;
    return n !== 0 ? n : ((n = window.event), n === void 0 ? 32 : cx(n.type));
  }
  function Uc(n, r) {
    var e = _.p;
    try {
      return ((_.p = n), r());
    } finally {
      _.p = e;
    }
  }
  var ie = Math.random().toString(36).slice(2),
    Xn = "__reactFiber$" + ie,
    tr = "__reactProps$" + ie,
    qe = "__reactContainer$" + ie,
    $l = "__reactEvents$" + ie,
    Dx = "__reactListeners$" + ie,
    Vx = "__reactHandles$" + ie,
    wc = "__reactResources$" + ie,
    Wt = "__reactMarker$" + ie;
  function Pl(n) {
    (delete n[Xn], delete n[tr], delete n[$l], delete n[Dx], delete n[Vx]);
  }
  function Ie(n) {
    var r = n[Xn];
    if (r) return r;
    for (var e = n.parentNode; e; ) {
      if ((r = e[qe] || e[Xn])) {
        if (
          ((e = r.alternate),
          r.child !== null || (e !== null && e.child !== null))
        )
          for (n = Gd(n); n !== null; ) {
            if ((e = n[Xn])) return e;
            n = Gd(n);
          }
        return r;
      }
      ((n = e), (e = n.parentNode));
    }
    return null;
  }
  function Ke(n) {
    if ((n = n[Xn] || n[qe])) {
      var r = n.tag;
      if (
        r === 5 ||
        r === 6 ||
        r === 13 ||
        r === 31 ||
        r === 26 ||
        r === 27 ||
        r === 3
      )
        return n;
    }
    return null;
  }
  function At(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n.stateNode;
    throw Error(d(33));
  }
  function $e(n) {
    var r = n[wc];
    return (
      r ||
        (r = n[wc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      r
    );
  }
  function Yn(n) {
    n[Wt] = !0;
  }
  var Oc = new Set(),
    kc = {};
  function je(n, r) {
    (Pe(n, r), Pe(n + "Capture", r));
  }
  function Pe(n, r) {
    for (kc[n] = r, n = 0; n < r.length; n++) Oc.add(r[n]);
  }
  var Zx = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ec = {},
    _c = {};
  function Hx(n) {
    return Gl.call(_c, n)
      ? !0
      : Gl.call(Ec, n)
        ? !1
        : Zx.test(n)
          ? (_c[n] = !0)
          : ((Ec[n] = !0), !1);
  }
  function Ca(n, r, e) {
    if (Hx(r))
      if (e === null) n.removeAttribute(r);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(r);
            return;
          case "boolean":
            var t = r.toLowerCase().slice(0, 5);
            if (t !== "data-" && t !== "aria-") {
              n.removeAttribute(r);
              return;
            }
        }
        n.setAttribute(r, "" + e);
      }
  }
  function za(n, r, e) {
    if (e === null) n.removeAttribute(r);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(r);
          return;
      }
      n.setAttribute(r, "" + e);
    }
  }
  function Zr(n, r, e, t) {
    if (t === null) n.removeAttribute(e);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(e);
          return;
      }
      n.setAttributeNS(r, e, "" + t);
    }
  }
  function Fr(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Tc(n) {
    var r = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function Nx(n, r, e) {
    var t = Object.getOwnPropertyDescriptor(n.constructor.prototype, r);
    if (
      !n.hasOwnProperty(r) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var a = t.get,
        l = t.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (i) {
            ((e = "" + i), l.call(this, i));
          },
        }),
        Object.defineProperty(n, r, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((n._valueTracker = null), delete n[r]);
          },
        }
      );
    }
  }
  function ni(n) {
    if (!n._valueTracker) {
      var r = Tc(n) ? "checked" : "value";
      n._valueTracker = Nx(n, r, "" + n[r]);
    }
  }
  function jc(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var e = r.getValue(),
      t = "";
    return (
      n && (t = Tc(n) ? (n.checked ? "true" : "false") : n.value),
      (n = t),
      n !== e ? (r.setValue(n), !0) : !1
    );
  }
  function Ra(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var Yx = /[\n"\\]/g;
  function Ur(n) {
    return n.replace(Yx, function (r) {
      return "\\" + r.charCodeAt(0).toString(16) + " ";
    });
  }
  function ri(n, r, e, t, a, l, i, o) {
    ((n.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (n.type = i)
        : n.removeAttribute("type"),
      r != null
        ? i === "number"
          ? ((r === 0 && n.value === "") || n.value != r) &&
            (n.value = "" + Fr(r))
          : n.value !== "" + Fr(r) && (n.value = "" + Fr(r))
        : (i !== "submit" && i !== "reset") || n.removeAttribute("value"),
      r != null
        ? ei(n, i, Fr(r))
        : e != null
          ? ei(n, i, Fr(e))
          : t != null && n.removeAttribute("value"),
      a == null && l != null && (n.defaultChecked = !!l),
      a != null &&
        (n.checked = a && typeof a != "function" && typeof a != "symbol"),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (n.name = "" + Fr(o))
        : n.removeAttribute("name"));
  }
  function Sc(n, r, e, t, a, l, i, o) {
    if (
      (l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        typeof l != "boolean" &&
        (n.type = l),
      r != null || e != null)
    ) {
      if (!((l !== "submit" && l !== "reset") || r != null)) {
        ni(n);
        return;
      }
      ((e = e != null ? "" + Fr(e) : ""),
        (r = r != null ? "" + Fr(r) : e),
        o || r === n.value || (n.value = r),
        (n.defaultValue = r));
    }
    ((t = t ?? a),
      (t = typeof t != "function" && typeof t != "symbol" && !!t),
      (n.checked = o ? n.checked : !!t),
      (n.defaultChecked = !!t),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (n.name = i),
      ni(n));
  }
  function ei(n, r, e) {
    (r === "number" && Ra(n.ownerDocument) === n) ||
      n.defaultValue === "" + e ||
      (n.defaultValue = "" + e);
  }
  function nt(n, r, e, t) {
    if (((n = n.options), r)) {
      r = {};
      for (var a = 0; a < e.length; a++) r["$" + e[a]] = !0;
      for (e = 0; e < n.length; e++)
        ((a = r.hasOwnProperty("$" + n[e].value)),
          n[e].selected !== a && (n[e].selected = a),
          a && t && (n[e].defaultSelected = !0));
    } else {
      for (e = "" + Fr(e), r = null, a = 0; a < n.length; a++) {
        if (n[a].value === e) {
          ((n[a].selected = !0), t && (n[a].defaultSelected = !0));
          return;
        }
        r !== null || n[a].disabled || (r = n[a]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Cc(n, r, e) {
    if (
      r != null &&
      ((r = "" + Fr(r)), r !== n.value && (n.value = r), e == null)
    ) {
      n.defaultValue !== r && (n.defaultValue = r);
      return;
    }
    n.defaultValue = e != null ? "" + Fr(e) : "";
  }
  function zc(n, r, e, t) {
    if (r == null) {
      if (t != null) {
        if (e != null) throw Error(d(92));
        if (yn(t)) {
          if (1 < t.length) throw Error(d(93));
          t = t[0];
        }
        e = t;
      }
      (e == null && (e = ""), (r = e));
    }
    ((e = Fr(r)),
      (n.defaultValue = e),
      (t = n.textContent),
      t === e && t !== "" && t !== null && (n.value = t),
      ni(n));
  }
  function rt(n, r) {
    if (r) {
      var e = n.firstChild;
      if (e && e === n.lastChild && e.nodeType === 3) {
        e.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Lx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Rc(n, r, e) {
    var t = r.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? t
        ? n.setProperty(r, "")
        : r === "float"
          ? (n.cssFloat = "")
          : (n[r] = "")
      : t
        ? n.setProperty(r, e)
        : typeof e != "number" || e === 0 || Lx.has(r)
          ? r === "float"
            ? (n.cssFloat = e)
            : (n[r] = ("" + e).trim())
          : (n[r] = e + "px");
  }
  function Wc(n, r, e) {
    if (r != null && typeof r != "object") throw Error(d(62));
    if (((n = n.style), e != null)) {
      for (var t in e)
        !e.hasOwnProperty(t) ||
          (r != null && r.hasOwnProperty(t)) ||
          (t.indexOf("--") === 0
            ? n.setProperty(t, "")
            : t === "float"
              ? (n.cssFloat = "")
              : (n[t] = ""));
      for (var a in r)
        ((t = r[a]), r.hasOwnProperty(a) && e[a] !== t && Rc(n, a, t));
    } else for (var l in r) r.hasOwnProperty(l) && Rc(n, l, r[l]);
  }
  function ti(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
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
  var Gx = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Xx =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wa(n) {
    return Xx.test("" + n)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : n;
  }
  function Hr() {}
  var ai = null;
  function li(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var et = null,
    tt = null;
  function Ac(n) {
    var r = Ke(n);
    if (r && (n = r.stateNode)) {
      var e = n[tr] || null;
      n: switch (((n = r.stateNode), r.type)) {
        case "input":
          if (
            (ri(
              n,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (r = e.name),
            e.type === "radio" && r != null)
          ) {
            for (e = n; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + Ur("" + r) + '"][type="radio"]',
              ),
                r = 0;
              r < e.length;
              r++
            ) {
              var t = e[r];
              if (t !== n && t.form === n.form) {
                var a = t[tr] || null;
                if (!a) throw Error(d(90));
                ri(
                  t,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name,
                );
              }
            }
            for (r = 0; r < e.length; r++)
              ((t = e[r]), t.form === n.form && jc(t));
          }
          break n;
        case "textarea":
          Cc(n, e.value, e.defaultValue);
          break n;
        case "select":
          ((r = e.value), r != null && nt(n, !!e.multiple, r, !1));
      }
    }
  }
  var ii = !1;
  function Mc(n, r, e) {
    if (ii) return n(r, e);
    ii = !0;
    try {
      var t = n(r);
      return t;
    } finally {
      if (
        ((ii = !1),
        (et !== null || tt !== null) &&
          (Fl(), et && ((r = et), (n = tt), (tt = et = null), Ac(r), n)))
      )
        for (r = 0; r < n.length; r++) Ac(n[r]);
    }
  }
  function Mt(n, r) {
    var e = n.stateNode;
    if (e === null) return null;
    var t = e[tr] || null;
    if (t === null) return null;
    e = t[r];
    n: switch (r) {
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
      case "onMouseEnter":
        ((t = !t.disabled) ||
          ((n = n.type),
          (t = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !t));
        break n;
      default:
        n = !1;
    }
    if (n) return null;
    if (e && typeof e != "function") throw Error(d(231, r, typeof e));
    return e;
  }
  var Nr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    oi = !1;
  if (Nr)
    try {
      var Dt = {};
      (Object.defineProperty(Dt, "passive", {
        get: function () {
          oi = !0;
        },
      }),
        window.addEventListener("test", Dt, Dt),
        window.removeEventListener("test", Dt, Dt));
    } catch {
      oi = !1;
    }
  var oe = null,
    ci = null,
    Aa = null;
  function Dc() {
    if (Aa) return Aa;
    var n,
      r = ci,
      e = r.length,
      t,
      a = "value" in oe ? oe.value : oe.textContent,
      l = a.length;
    for (n = 0; n < e && r[n] === a[n]; n++);
    var i = e - n;
    for (t = 1; t <= i && r[e - t] === a[l - t]; t++);
    return (Aa = a.slice(n, 1 < t ? 1 - t : void 0));
  }
  function Ma(n) {
    var r = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && r === 13 && (n = 13))
        : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function Da() {
    return !0;
  }
  function Vc() {
    return !1;
  }
  function ar(n) {
    function r(e, t, a, l, i) {
      ((this._reactName = e),
        (this._targetInst = a),
        (this.type = t),
        (this.nativeEvent = l),
        (this.target = i),
        (this.currentTarget = null));
      for (var o in n)
        n.hasOwnProperty(o) && ((e = n[o]), (this[o] = e ? e(l) : l[o]));
      return (
        (this.isDefaultPrevented = (
          l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
        )
          ? Da
          : Vc),
        (this.isPropagationStopped = Vc),
        this
      );
    }
    return (
      O(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Da));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Da));
        },
        persist: function () {},
        isPersistent: Da,
      }),
      r
    );
  }
  var Se = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Va = ar(Se),
    Vt = O({}, Se, { view: 0, detail: 0 }),
    Jx = ar(Vt),
    si,
    ui,
    Zt,
    Za = O({}, Vt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xi,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Zt &&
              (Zt && n.type === "mousemove"
                ? ((si = n.screenX - Zt.screenX), (ui = n.screenY - Zt.screenY))
                : (ui = si = 0),
              (Zt = n)),
            si);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : ui;
      },
    }),
    Zc = ar(Za),
    qx = O({}, Za, { dataTransfer: 0 }),
    Ix = ar(qx),
    Kx = O({}, Vt, { relatedTarget: 0 }),
    di = ar(Kx),
    $x = O({}, Se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Px = ar($x),
    nm = O({}, Se, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    rm = ar(nm),
    em = O({}, Se, { data: 0 }),
    Hc = ar(em),
    tm = {
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
      MozPrintableKey: "Unidentified",
    },
    am = {
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
      224: "Meta",
    },
    lm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function im(n) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(n)
      : (n = lm[n])
        ? !!r[n]
        : !1;
  }
  function xi() {
    return im;
  }
  var om = O({}, Vt, {
      key: function (n) {
        if (n.key) {
          var r = tm[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress"
          ? ((n = Ma(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? am[n.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xi,
      charCode: function (n) {
        return n.type === "keypress" ? Ma(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? Ma(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    cm = ar(om),
    sm = O({}, Za, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nc = ar(sm),
    um = O({}, Vt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xi,
    }),
    dm = ar(um),
    xm = O({}, Se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mm = ar(xm),
    fm = O({}, Za, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
            ? -n.wheelDeltaX
            : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
            ? -n.wheelDeltaY
            : "wheelDelta" in n
              ? -n.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    pm = ar(fm),
    Qm = O({}, Se, { newState: 0, oldState: 0 }),
    bm = ar(Qm),
    vm = [9, 13, 27, 32],
    mi = Nr && "CompositionEvent" in window,
    Ht = null;
  Nr && "documentMode" in document && (Ht = document.documentMode);
  var hm = Nr && "TextEvent" in window && !Ht,
    Yc = Nr && (!mi || (Ht && 8 < Ht && 11 >= Ht)),
    Lc = " ",
    Gc = !1;
  function Xc(n, r) {
    switch (n) {
      case "keyup":
        return vm.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jc(n) {
    return (
      (n = n.detail),
      typeof n == "object" && "data" in n ? n.data : null
    );
  }
  var at = !1;
  function ym(n, r) {
    switch (n) {
      case "compositionend":
        return Jc(r);
      case "keypress":
        return r.which !== 32 ? null : ((Gc = !0), Lc);
      case "textInput":
        return ((n = r.data), n === Lc && Gc ? null : n);
      default:
        return null;
    }
  }
  function Bm(n, r) {
    if (at)
      return n === "compositionend" || (!mi && Xc(n, r))
        ? ((n = Dc()), (Aa = ci = oe = null), (at = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Yc && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var gm = {
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
    week: !0,
  };
  function qc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!gm[n.type] : r === "textarea";
  }
  function Ic(n, r, e, t) {
    (et ? (tt ? tt.push(t) : (tt = [t])) : (et = t),
      (r = Tl(r, "onChange")),
      0 < r.length &&
        ((e = new Va("onChange", "change", null, e, t)),
        n.push({ event: e, listeners: r })));
  }
  var Nt = null,
    Yt = null;
  function Fm(n) {
    Sd(n, 0);
  }
  function Ha(n) {
    var r = At(n);
    if (jc(r)) return n;
  }
  function Kc(n, r) {
    if (n === "change") return r;
  }
  var $c = !1;
  if (Nr) {
    var fi;
    if (Nr) {
      var pi = "oninput" in document;
      if (!pi) {
        var Pc = document.createElement("div");
        (Pc.setAttribute("oninput", "return;"),
          (pi = typeof Pc.oninput == "function"));
      }
      fi = pi;
    } else fi = !1;
    $c = fi && (!document.documentMode || 9 < document.documentMode);
  }
  function ns() {
    Nt && (Nt.detachEvent("onpropertychange", rs), (Yt = Nt = null));
  }
  function rs(n) {
    if (n.propertyName === "value" && Ha(Yt)) {
      var r = [];
      (Ic(r, Yt, n, li(n)), Mc(Fm, r));
    }
  }
  function Um(n, r, e) {
    n === "focusin"
      ? (ns(), (Nt = r), (Yt = e), Nt.attachEvent("onpropertychange", rs))
      : n === "focusout" && ns();
  }
  function wm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ha(Yt);
  }
  function Om(n, r) {
    if (n === "click") return Ha(r);
  }
  function km(n, r) {
    if (n === "input" || n === "change") return Ha(r);
  }
  function Em(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var pr = typeof Object.is == "function" ? Object.is : Em;
  function Lt(n, r) {
    if (pr(n, r)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var e = Object.keys(n),
      t = Object.keys(r);
    if (e.length !== t.length) return !1;
    for (t = 0; t < e.length; t++) {
      var a = e[t];
      if (!Gl.call(r, a) || !pr(n[a], r[a])) return !1;
    }
    return !0;
  }
  function es(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function ts(n, r) {
    var e = es(n);
    n = 0;
    for (var t; e; ) {
      if (e.nodeType === 3) {
        if (((t = n + e.textContent.length), n <= r && t >= r))
          return { node: e, offset: r - n };
        n = t;
      }
      n: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break n;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = es(e);
    }
  }
  function as(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? as(n, r.parentNode)
            : "contains" in n
              ? n.contains(r)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function ls(n) {
    n =
      n != null &&
      n.ownerDocument != null &&
      n.ownerDocument.defaultView != null
        ? n.ownerDocument.defaultView
        : window;
    for (var r = Ra(n.document); r instanceof n.HTMLIFrameElement; ) {
      try {
        var e = typeof r.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) n = r.contentWindow;
      else break;
      r = Ra(n.document);
    }
    return r;
  }
  function Qi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        r === "textarea" ||
        n.contentEditable === "true")
    );
  }
  var _m = Nr && "documentMode" in document && 11 >= document.documentMode,
    lt = null,
    bi = null,
    Gt = null,
    vi = !1;
  function is(n, r, e) {
    var t =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    vi ||
      lt == null ||
      lt !== Ra(t) ||
      ((t = lt),
      "selectionStart" in t && Qi(t)
        ? (t = { start: t.selectionStart, end: t.selectionEnd })
        : ((t = (
            (t.ownerDocument && t.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (t = {
            anchorNode: t.anchorNode,
            anchorOffset: t.anchorOffset,
            focusNode: t.focusNode,
            focusOffset: t.focusOffset,
          })),
      (Gt && Lt(Gt, t)) ||
        ((Gt = t),
        (t = Tl(bi, "onSelect")),
        0 < t.length &&
          ((r = new Va("onSelect", "select", null, r, e)),
          n.push({ event: r, listeners: t }),
          (r.target = lt))));
  }
  function Ce(n, r) {
    var e = {};
    return (
      (e[n.toLowerCase()] = r.toLowerCase()),
      (e["Webkit" + n] = "webkit" + r),
      (e["Moz" + n] = "moz" + r),
      e
    );
  }
  var it = {
      animationend: Ce("Animation", "AnimationEnd"),
      animationiteration: Ce("Animation", "AnimationIteration"),
      animationstart: Ce("Animation", "AnimationStart"),
      transitionrun: Ce("Transition", "TransitionRun"),
      transitionstart: Ce("Transition", "TransitionStart"),
      transitioncancel: Ce("Transition", "TransitionCancel"),
      transitionend: Ce("Transition", "TransitionEnd"),
    },
    hi = {},
    os = {};
  Nr &&
    ((os = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete it.animationend.animation,
      delete it.animationiteration.animation,
      delete it.animationstart.animation),
    "TransitionEvent" in window || delete it.transitionend.transition);
  function ze(n) {
    if (hi[n]) return hi[n];
    if (!it[n]) return n;
    var r = it[n],
      e;
    for (e in r) if (r.hasOwnProperty(e) && e in os) return (hi[n] = r[e]);
    return n;
  }
  var cs = ze("animationend"),
    ss = ze("animationiteration"),
    us = ze("animationstart"),
    Tm = ze("transitionrun"),
    jm = ze("transitionstart"),
    Sm = ze("transitioncancel"),
    ds = ze("transitionend"),
    xs = new Map(),
    yi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  yi.push("scrollEnd");
  function Cr(n, r) {
    (xs.set(n, r), je(r, [n]));
  }
  var Na =
      typeof reportError == "function"
        ? reportError
        : function (n) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var r = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof n == "object" &&
                  n !== null &&
                  typeof n.message == "string"
                    ? String(n.message)
                    : String(n),
                error: n,
              });
              if (!window.dispatchEvent(r)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", n);
              return;
            }
            console.error(n);
          },
    wr = [],
    ot = 0,
    Bi = 0;
  function Ya() {
    for (var n = ot, r = (Bi = ot = 0); r < n; ) {
      var e = wr[r];
      wr[r++] = null;
      var t = wr[r];
      wr[r++] = null;
      var a = wr[r];
      wr[r++] = null;
      var l = wr[r];
      if (((wr[r++] = null), t !== null && a !== null)) {
        var i = t.pending;
        (i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
          (t.pending = a));
      }
      l !== 0 && ms(e, a, l);
    }
  }
  function La(n, r, e, t) {
    ((wr[ot++] = n),
      (wr[ot++] = r),
      (wr[ot++] = e),
      (wr[ot++] = t),
      (Bi |= t),
      (n.lanes |= t),
      (n = n.alternate),
      n !== null && (n.lanes |= t));
  }
  function gi(n, r, e, t) {
    return (La(n, r, e, t), Ga(n));
  }
  function Re(n, r) {
    return (La(n, null, null, r), Ga(n));
  }
  function ms(n, r, e) {
    n.lanes |= e;
    var t = n.alternate;
    t !== null && (t.lanes |= e);
    for (var a = !1, l = n.return; l !== null; )
      ((l.childLanes |= e),
        (t = l.alternate),
        t !== null && (t.childLanes |= e),
        l.tag === 22 &&
          ((n = l.stateNode), n === null || n._visibility & 1 || (a = !0)),
        (n = l),
        (l = l.return));
    return n.tag === 3
      ? ((l = n.stateNode),
        a &&
          r !== null &&
          ((a = 31 - fr(e)),
          (n = l.hiddenUpdates),
          (t = n[a]),
          t === null ? (n[a] = [r]) : t.push(r),
          (r.lane = e | 536870912)),
        l)
      : null;
  }
  function Ga(n) {
    if (50 < fa) throw ((fa = 0), (So = null), Error(d(185)));
    for (var r = n.return; r !== null; ) ((n = r), (r = n.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var ct = {};
  function Cm(n, r, e, t) {
    ((this.tag = n),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = t),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Qr(n, r, e, t) {
    return new Cm(n, r, e, t);
  }
  function Fi(n) {
    return ((n = n.prototype), !(!n || !n.isReactComponent));
  }
  function Yr(n, r) {
    var e = n.alternate;
    return (
      e === null
        ? ((e = Qr(n.tag, r, n.key, n.mode)),
          (e.elementType = n.elementType),
          (e.type = n.type),
          (e.stateNode = n.stateNode),
          (e.alternate = n),
          (n.alternate = e))
        : ((e.pendingProps = r),
          (e.type = n.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = n.flags & 65011712),
      (e.childLanes = n.childLanes),
      (e.lanes = n.lanes),
      (e.child = n.child),
      (e.memoizedProps = n.memoizedProps),
      (e.memoizedState = n.memoizedState),
      (e.updateQueue = n.updateQueue),
      (r = n.dependencies),
      (e.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (e.sibling = n.sibling),
      (e.index = n.index),
      (e.ref = n.ref),
      (e.refCleanup = n.refCleanup),
      e
    );
  }
  function fs(n, r) {
    n.flags &= 65011714;
    var e = n.alternate;
    return (
      e === null
        ? ((n.childLanes = 0),
          (n.lanes = r),
          (n.child = null),
          (n.subtreeFlags = 0),
          (n.memoizedProps = null),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.dependencies = null),
          (n.stateNode = null))
        : ((n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.subtreeFlags = 0),
          (n.deletions = null),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (n.type = e.type),
          (r = e.dependencies),
          (n.dependencies =
            r === null
              ? null
              : { lanes: r.lanes, firstContext: r.firstContext })),
      n
    );
  }
  function Xa(n, r, e, t, a, l) {
    var i = 0;
    if (((t = n), typeof n == "function")) Fi(n) && (i = 1);
    else if (typeof n == "string")
      i = Df(n, e, j.current)
        ? 26
        : n === "html" || n === "head" || n === "body"
          ? 27
          : 5;
    else
      n: switch (n) {
        case jn:
          return (
            (n = Qr(31, e, r, a)),
            (n.elementType = jn),
            (n.lanes = l),
            n
          );
        case Qn:
          return We(e.children, a, l, r);
        case _n:
          ((i = 8), (a |= 24));
          break;
        case Wn:
          return (
            (n = Qr(12, e, r, a | 2)),
            (n.elementType = Wn),
            (n.lanes = l),
            n
          );
        case Gn:
          return (
            (n = Qr(13, e, r, a)),
            (n.elementType = Gn),
            (n.lanes = l),
            n
          );
        case hn:
          return (
            (n = Qr(19, e, r, a)),
            (n.elementType = hn),
            (n.lanes = l),
            n
          );
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case Tn:
                i = 10;
                break n;
              case rr:
                i = 9;
                break n;
              case Hn:
                i = 11;
                break n;
              case q:
                i = 14;
                break n;
              case nn:
                ((i = 16), (t = null));
                break n;
            }
          ((i = 29),
            (e = Error(d(130, n === null ? "null" : typeof n, ""))),
            (t = null));
      }
    return (
      (r = Qr(i, e, r, a)),
      (r.elementType = n),
      (r.type = t),
      (r.lanes = l),
      r
    );
  }
  function We(n, r, e, t) {
    return ((n = Qr(7, n, t, r)), (n.lanes = e), n);
  }
  function Ui(n, r, e) {
    return ((n = Qr(6, n, null, r)), (n.lanes = e), n);
  }
  function ps(n) {
    var r = Qr(18, null, null, 0);
    return ((r.stateNode = n), r);
  }
  function wi(n, r, e) {
    return (
      (r = Qr(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = e),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  var Qs = new WeakMap();
  function Or(n, r) {
    if (typeof n == "object" && n !== null) {
      var e = Qs.get(n);
      return e !== void 0
        ? e
        : ((r = { value: n, source: r, stack: pc(r) }), Qs.set(n, r), r);
    }
    return { value: n, source: r, stack: pc(r) };
  }
  var st = [],
    ut = 0,
    Ja = null,
    Xt = 0,
    kr = [],
    Er = 0,
    ce = null,
    Wr = 1,
    Ar = "";
  function Lr(n, r) {
    ((st[ut++] = Xt), (st[ut++] = Ja), (Ja = n), (Xt = r));
  }
  function bs(n, r, e) {
    ((kr[Er++] = Wr), (kr[Er++] = Ar), (kr[Er++] = ce), (ce = n));
    var t = Wr;
    n = Ar;
    var a = 32 - fr(t) - 1;
    ((t &= ~(1 << a)), (e += 1));
    var l = 32 - fr(r) + a;
    if (30 < l) {
      var i = a - (a % 5);
      ((l = (t & ((1 << i) - 1)).toString(32)),
        (t >>= i),
        (a -= i),
        (Wr = (1 << (32 - fr(r) + a)) | (e << a) | t),
        (Ar = l + n));
    } else ((Wr = (1 << l) | (e << a) | t), (Ar = n));
  }
  function Oi(n) {
    n.return !== null && (Lr(n, 1), bs(n, 1, 0));
  }
  function ki(n) {
    for (; n === Ja; )
      ((Ja = st[--ut]), (st[ut] = null), (Xt = st[--ut]), (st[ut] = null));
    for (; n === ce; )
      ((ce = kr[--Er]),
        (kr[Er] = null),
        (Ar = kr[--Er]),
        (kr[Er] = null),
        (Wr = kr[--Er]),
        (kr[Er] = null));
  }
  function vs(n, r) {
    ((kr[Er++] = Wr),
      (kr[Er++] = Ar),
      (kr[Er++] = ce),
      (Wr = r.id),
      (Ar = r.overflow),
      (ce = n));
  }
  var Jn = null,
    On = null,
    dn = !1,
    se = null,
    _r = !1,
    Ei = Error(d(519));
  function ue(n) {
    var r = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Jt(Or(r, n)), Ei);
  }
  function hs(n) {
    var r = n.stateNode,
      e = n.type,
      t = n.memoizedProps;
    switch (((r[Xn] = n), (r[tr] = t), e)) {
      case "dialog":
        (tn("cancel", r), tn("close", r));
        break;
      case "iframe":
      case "object":
      case "embed":
        tn("load", r);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Qa.length; e++) tn(Qa[e], r);
        break;
      case "source":
        tn("error", r);
        break;
      case "img":
      case "image":
      case "link":
        (tn("error", r), tn("load", r));
        break;
      case "details":
        tn("toggle", r);
        break;
      case "input":
        (tn("invalid", r),
          Sc(
            r,
            t.value,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name,
            !0,
          ));
        break;
      case "select":
        tn("invalid", r);
        break;
      case "textarea":
        (tn("invalid", r), zc(r, t.value, t.defaultValue, t.children));
    }
    ((e = t.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      r.textContent === "" + e ||
      t.suppressHydrationWarning === !0 ||
      Wd(r.textContent, e)
        ? (t.popover != null && (tn("beforetoggle", r), tn("toggle", r)),
          t.onScroll != null && tn("scroll", r),
          t.onScrollEnd != null && tn("scrollend", r),
          t.onClick != null && (r.onclick = Hr),
          (r = !0))
        : (r = !1),
      r || ue(n, !0));
  }
  function ys(n) {
    for (Jn = n.return; Jn; )
      switch (Jn.tag) {
        case 5:
        case 31:
        case 13:
          _r = !1;
          return;
        case 27:
        case 3:
          _r = !0;
          return;
        default:
          Jn = Jn.return;
      }
  }
  function dt(n) {
    if (n !== Jn) return !1;
    if (!dn) return (ys(n), (dn = !0), !1);
    var r = n.tag,
      e;
    if (
      ((e = r !== 3 && r !== 27) &&
        ((e = r === 5) &&
          ((e = n.type),
          (e =
            !(e !== "form" && e !== "button") || Xo(n.type, n.memoizedProps))),
        (e = !e)),
      e && On && ue(n),
      ys(n),
      r === 13)
    ) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(d(317));
      On = Ld(n);
    } else if (r === 31) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(d(317));
      On = Ld(n);
    } else
      r === 27
        ? ((r = On), Ue(n.type) ? ((n = $o), ($o = null), (On = n)) : (On = r))
        : (On = Jn ? jr(n.stateNode.nextSibling) : null);
    return !0;
  }
  function Ae() {
    ((On = Jn = null), (dn = !1));
  }
  function _i() {
    var n = se;
    return (
      n !== null &&
        (cr === null ? (cr = n) : cr.push.apply(cr, n), (se = null)),
      n
    );
  }
  function Jt(n) {
    se === null ? (se = [n]) : se.push(n);
  }
  var Ti = u(null),
    Me = null,
    Gr = null;
  function de(n, r, e) {
    (E(Ti, r._currentValue), (r._currentValue = e));
  }
  function Xr(n) {
    ((n._currentValue = Ti.current), B(Ti));
  }
  function ji(n, r, e) {
    for (; n !== null; ) {
      var t = n.alternate;
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), t !== null && (t.childLanes |= r))
          : t !== null && (t.childLanes & r) !== r && (t.childLanes |= r),
        n === e)
      )
        break;
      n = n.return;
    }
  }
  function Si(n, r, e, t) {
    var a = n.child;
    for (a !== null && (a.return = n); a !== null; ) {
      var l = a.dependencies;
      if (l !== null) {
        var i = a.child;
        l = l.firstContext;
        n: for (; l !== null; ) {
          var o = l;
          l = a;
          for (var c = 0; c < r.length; c++)
            if (o.context === r[c]) {
              ((l.lanes |= e),
                (o = l.alternate),
                o !== null && (o.lanes |= e),
                ji(l.return, e, n),
                t || (i = null));
              break n;
            }
          l = o.next;
        }
      } else if (a.tag === 18) {
        if (((i = a.return), i === null)) throw Error(d(341));
        ((i.lanes |= e),
          (l = i.alternate),
          l !== null && (l.lanes |= e),
          ji(i, e, n),
          (i = null));
      } else i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === n) {
            i = null;
            break;
          }
          if (((a = i.sibling), a !== null)) {
            ((a.return = i.return), (i = a));
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function xt(n, r, e, t) {
    n = null;
    for (var a = r, l = !1; a !== null; ) {
      if (!l) {
        if ((a.flags & 524288) !== 0) l = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var o = a.type;
          pr(a.pendingProps.value, i.value) ||
            (n !== null ? n.push(o) : (n = [o]));
        }
      } else if (a === L.current) {
        if (((i = a.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (n !== null ? n.push(Ba) : (n = [Ba]));
      }
      a = a.return;
    }
    (n !== null && Si(r, n, e, t), (r.flags |= 262144));
  }
  function qa(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!pr(n.context._currentValue, n.memoizedValue)) return !0;
      n = n.next;
    }
    return !1;
  }
  function De(n) {
    ((Me = n),
      (Gr = null),
      (n = n.dependencies),
      n !== null && (n.firstContext = null));
  }
  function qn(n) {
    return Bs(Me, n);
  }
  function Ia(n, r) {
    return (Me === null && De(n), Bs(n, r));
  }
  function Bs(n, r) {
    var e = r._currentValue;
    if (((r = { context: r, memoizedValue: e, next: null }), Gr === null)) {
      if (n === null) throw Error(d(308));
      ((Gr = r),
        (n.dependencies = { lanes: 0, firstContext: r }),
        (n.flags |= 524288));
    } else Gr = Gr.next = r;
    return e;
  }
  var zm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var n = [],
              r = (this.signal = {
                aborted: !1,
                addEventListener: function (e, t) {
                  n.push(t);
                },
              });
            this.abort = function () {
              ((r.aborted = !0),
                n.forEach(function (e) {
                  return e();
                }));
            };
          },
    Rm = k.unstable_scheduleCallback,
    Wm = k.unstable_NormalPriority,
    An = {
      $$typeof: Tn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ci() {
    return { controller: new zm(), data: new Map(), refCount: 0 };
  }
  function qt(n) {
    (n.refCount--,
      n.refCount === 0 &&
        Rm(Wm, function () {
          n.controller.abort();
        }));
  }
  var It = null,
    zi = 0,
    mt = 0,
    ft = null;
  function Am(n, r) {
    if (It === null) {
      var e = (It = []);
      ((zi = 0),
        (mt = Mo()),
        (ft = {
          status: "pending",
          value: void 0,
          then: function (t) {
            e.push(t);
          },
        }));
    }
    return (zi++, r.then(gs, gs), r);
  }
  function gs() {
    if (--zi === 0 && It !== null) {
      ft !== null && (ft.status = "fulfilled");
      var n = It;
      ((It = null), (mt = 0), (ft = null));
      for (var r = 0; r < n.length; r++) (0, n[r])();
    }
  }
  function Mm(n, r) {
    var e = [],
      t = {
        status: "pending",
        value: null,
        reason: null,
        then: function (a) {
          e.push(a);
        },
      };
    return (
      n.then(
        function () {
          ((t.status = "fulfilled"), (t.value = r));
          for (var a = 0; a < e.length; a++) (0, e[a])(r);
        },
        function (a) {
          for (t.status = "rejected", t.reason = a, a = 0; a < e.length; a++)
            (0, e[a])(void 0);
        },
      ),
      t
    );
  }
  var Fs = v.S;
  v.S = function (n, r) {
    ((id = xr()),
      typeof r == "object" &&
        r !== null &&
        typeof r.then == "function" &&
        Am(n, r),
      Fs !== null && Fs(n, r));
  };
  var Ve = u(null);
  function Ri() {
    var n = Ve.current;
    return n !== null ? n : Un.pooledCache;
  }
  function Ka(n, r) {
    r === null ? E(Ve, Ve.current) : E(Ve, r.pool);
  }
  function Us() {
    var n = Ri();
    return n === null ? null : { parent: An._currentValue, pool: n };
  }
  var pt = Error(d(460)),
    Wi = Error(d(474)),
    $a = Error(d(542)),
    Pa = { then: function () {} };
  function ws(n) {
    return ((n = n.status), n === "fulfilled" || n === "rejected");
  }
  function Os(n, r, e) {
    switch (
      ((e = n[e]),
      e === void 0 ? n.push(r) : e !== r && (r.then(Hr, Hr), (r = e)),
      r.status)
    ) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw ((n = r.reason), Es(n), n);
      default:
        if (typeof r.status == "string") r.then(Hr, Hr);
        else {
          if (((n = Un), n !== null && 100 < n.shellSuspendCounter))
            throw Error(d(482));
          ((n = r),
            (n.status = "pending"),
            n.then(
              function (t) {
                if (r.status === "pending") {
                  var a = r;
                  ((a.status = "fulfilled"), (a.value = t));
                }
              },
              function (t) {
                if (r.status === "pending") {
                  var a = r;
                  ((a.status = "rejected"), (a.reason = t));
                }
              },
            ));
        }
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw ((n = r.reason), Es(n), n);
        }
        throw ((He = r), pt);
    }
  }
  function Ze(n) {
    try {
      var r = n._init;
      return r(n._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((He = e), pt)
        : e;
    }
  }
  var He = null;
  function ks() {
    if (He === null) throw Error(d(459));
    var n = He;
    return ((He = null), n);
  }
  function Es(n) {
    if (n === pt || n === $a) throw Error(d(483));
  }
  var Qt = null,
    Kt = 0;
  function nl(n) {
    var r = Kt;
    return ((Kt += 1), Qt === null && (Qt = []), Os(Qt, n, r));
  }
  function $t(n, r) {
    ((r = r.props.ref), (n.ref = r !== void 0 ? r : null));
  }
  function rl(n, r) {
    throw r.$$typeof === M
      ? Error(d(525))
      : ((n = Object.prototype.toString.call(r)),
        Error(
          d(
            31,
            n === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : n,
          ),
        ));
  }
  function _s(n) {
    function r(x, s) {
      if (n) {
        var m = x.deletions;
        m === null ? ((x.deletions = [s]), (x.flags |= 16)) : m.push(s);
      }
    }
    function e(x, s) {
      if (!n) return null;
      for (; s !== null; ) (r(x, s), (s = s.sibling));
      return null;
    }
    function t(x) {
      for (var s = new Map(); x !== null; )
        (x.key !== null ? s.set(x.key, x) : s.set(x.index, x), (x = x.sibling));
      return s;
    }
    function a(x, s) {
      return ((x = Yr(x, s)), (x.index = 0), (x.sibling = null), x);
    }
    function l(x, s, m) {
      return (
        (x.index = m),
        n
          ? ((m = x.alternate),
            m !== null
              ? ((m = m.index), m < s ? ((x.flags |= 67108866), s) : m)
              : ((x.flags |= 67108866), s))
          : ((x.flags |= 1048576), s)
      );
    }
    function i(x) {
      return (n && x.alternate === null && (x.flags |= 67108866), x);
    }
    function o(x, s, m, y) {
      return s === null || s.tag !== 6
        ? ((s = Ui(m, x.mode, y)), (s.return = x), s)
        : ((s = a(s, m)), (s.return = x), s);
    }
    function c(x, s, m, y) {
      var V = m.type;
      return V === Qn
        ? h(x, s, m.props.children, y, m.key)
        : s !== null &&
            (s.elementType === V ||
              (typeof V == "object" &&
                V !== null &&
                V.$$typeof === nn &&
                Ze(V) === s.type))
          ? ((s = a(s, m.props)), $t(s, m), (s.return = x), s)
          : ((s = Xa(m.type, m.key, m.props, null, x.mode, y)),
            $t(s, m),
            (s.return = x),
            s);
    }
    function f(x, s, m, y) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== m.containerInfo ||
        s.stateNode.implementation !== m.implementation
        ? ((s = wi(m, x.mode, y)), (s.return = x), s)
        : ((s = a(s, m.children || [])), (s.return = x), s);
    }
    function h(x, s, m, y, V) {
      return s === null || s.tag !== 7
        ? ((s = We(m, x.mode, y, V)), (s.return = x), s)
        : ((s = a(s, m)), (s.return = x), s);
    }
    function g(x, s, m) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Ui("" + s, x.mode, m)), (s.return = x), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case G:
            return (
              (m = Xa(s.type, s.key, s.props, null, x.mode, m)),
              $t(m, s),
              (m.return = x),
              m
            );
          case $:
            return ((s = wi(s, x.mode, m)), (s.return = x), s);
          case nn:
            return ((s = Ze(s)), g(x, s, m));
        }
        if (yn(s) || T(s))
          return ((s = We(s, x.mode, m, null)), (s.return = x), s);
        if (typeof s.then == "function") return g(x, nl(s), m);
        if (s.$$typeof === Tn) return g(x, Ia(x, s), m);
        rl(x, s);
      }
      return null;
    }
    function Q(x, s, m, y) {
      var V = s !== null ? s.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return V !== null ? null : o(x, s, "" + m, y);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case G:
            return m.key === V ? c(x, s, m, y) : null;
          case $:
            return m.key === V ? f(x, s, m, y) : null;
          case nn:
            return ((m = Ze(m)), Q(x, s, m, y));
        }
        if (yn(m) || T(m)) return V !== null ? null : h(x, s, m, y, null);
        if (typeof m.then == "function") return Q(x, s, nl(m), y);
        if (m.$$typeof === Tn) return Q(x, s, Ia(x, m), y);
        rl(x, m);
      }
      return null;
    }
    function b(x, s, m, y, V) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return ((x = x.get(m) || null), o(s, x, "" + y, V));
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case G:
            return (
              (x = x.get(y.key === null ? m : y.key) || null),
              c(s, x, y, V)
            );
          case $:
            return (
              (x = x.get(y.key === null ? m : y.key) || null),
              f(s, x, y, V)
            );
          case nn:
            return ((y = Ze(y)), b(x, s, m, y, V));
        }
        if (yn(y) || T(y)) return ((x = x.get(m) || null), h(s, x, y, V, null));
        if (typeof y.then == "function") return b(x, s, m, nl(y), V);
        if (y.$$typeof === Tn) return b(x, s, m, Ia(s, y), V);
        rl(s, y);
      }
      return null;
    }
    function z(x, s, m, y) {
      for (
        var V = null, mn = null, R = s, K = (s = 0), cn = null;
        R !== null && K < m.length;
        K++
      ) {
        R.index > K ? ((cn = R), (R = null)) : (cn = R.sibling);
        var fn = Q(x, R, m[K], y);
        if (fn === null) {
          R === null && (R = cn);
          break;
        }
        (n && R && fn.alternate === null && r(x, R),
          (s = l(fn, s, K)),
          mn === null ? (V = fn) : (mn.sibling = fn),
          (mn = fn),
          (R = cn));
      }
      if (K === m.length) return (e(x, R), dn && Lr(x, K), V);
      if (R === null) {
        for (; K < m.length; K++)
          ((R = g(x, m[K], y)),
            R !== null &&
              ((s = l(R, s, K)),
              mn === null ? (V = R) : (mn.sibling = R),
              (mn = R)));
        return (dn && Lr(x, K), V);
      }
      for (R = t(R); K < m.length; K++)
        ((cn = b(R, x, K, m[K], y)),
          cn !== null &&
            (n &&
              cn.alternate !== null &&
              R.delete(cn.key === null ? K : cn.key),
            (s = l(cn, s, K)),
            mn === null ? (V = cn) : (mn.sibling = cn),
            (mn = cn)));
      return (
        n &&
          R.forEach(function (_e) {
            return r(x, _e);
          }),
        dn && Lr(x, K),
        V
      );
    }
    function N(x, s, m, y) {
      if (m == null) throw Error(d(151));
      for (
        var V = null, mn = null, R = s, K = (s = 0), cn = null, fn = m.next();
        R !== null && !fn.done;
        K++, fn = m.next()
      ) {
        R.index > K ? ((cn = R), (R = null)) : (cn = R.sibling);
        var _e = Q(x, R, fn.value, y);
        if (_e === null) {
          R === null && (R = cn);
          break;
        }
        (n && R && _e.alternate === null && r(x, R),
          (s = l(_e, s, K)),
          mn === null ? (V = _e) : (mn.sibling = _e),
          (mn = _e),
          (R = cn));
      }
      if (fn.done) return (e(x, R), dn && Lr(x, K), V);
      if (R === null) {
        for (; !fn.done; K++, fn = m.next())
          ((fn = g(x, fn.value, y)),
            fn !== null &&
              ((s = l(fn, s, K)),
              mn === null ? (V = fn) : (mn.sibling = fn),
              (mn = fn)));
        return (dn && Lr(x, K), V);
      }
      for (R = t(R); !fn.done; K++, fn = m.next())
        ((fn = b(R, x, K, fn.value, y)),
          fn !== null &&
            (n &&
              fn.alternate !== null &&
              R.delete(fn.key === null ? K : fn.key),
            (s = l(fn, s, K)),
            mn === null ? (V = fn) : (mn.sibling = fn),
            (mn = fn)));
      return (
        n &&
          R.forEach(function (If) {
            return r(x, If);
          }),
        dn && Lr(x, K),
        V
      );
    }
    function Fn(x, s, m, y) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Qn &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case G:
            n: {
              for (var V = m.key; s !== null; ) {
                if (s.key === V) {
                  if (((V = m.type), V === Qn)) {
                    if (s.tag === 7) {
                      (e(x, s.sibling),
                        (y = a(s, m.props.children)),
                        (y.return = x),
                        (x = y));
                      break n;
                    }
                  } else if (
                    s.elementType === V ||
                    (typeof V == "object" &&
                      V !== null &&
                      V.$$typeof === nn &&
                      Ze(V) === s.type)
                  ) {
                    (e(x, s.sibling),
                      (y = a(s, m.props)),
                      $t(y, m),
                      (y.return = x),
                      (x = y));
                    break n;
                  }
                  e(x, s);
                  break;
                } else r(x, s);
                s = s.sibling;
              }
              m.type === Qn
                ? ((y = We(m.props.children, x.mode, y, m.key)),
                  (y.return = x),
                  (x = y))
                : ((y = Xa(m.type, m.key, m.props, null, x.mode, y)),
                  $t(y, m),
                  (y.return = x),
                  (x = y));
            }
            return i(x);
          case $:
            n: {
              for (V = m.key; s !== null; ) {
                if (s.key === V)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === m.containerInfo &&
                    s.stateNode.implementation === m.implementation
                  ) {
                    (e(x, s.sibling),
                      (y = a(s, m.children || [])),
                      (y.return = x),
                      (x = y));
                    break n;
                  } else {
                    e(x, s);
                    break;
                  }
                else r(x, s);
                s = s.sibling;
              }
              ((y = wi(m, x.mode, y)), (y.return = x), (x = y));
            }
            return i(x);
          case nn:
            return ((m = Ze(m)), Fn(x, s, m, y));
        }
        if (yn(m)) return z(x, s, m, y);
        if (T(m)) {
          if (((V = T(m)), typeof V != "function")) throw Error(d(150));
          return ((m = V.call(m)), N(x, s, m, y));
        }
        if (typeof m.then == "function") return Fn(x, s, nl(m), y);
        if (m.$$typeof === Tn) return Fn(x, s, Ia(x, m), y);
        rl(x, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          s !== null && s.tag === 6
            ? (e(x, s.sibling), (y = a(s, m)), (y.return = x), (x = y))
            : (e(x, s), (y = Ui(m, x.mode, y)), (y.return = x), (x = y)),
          i(x))
        : e(x, s);
    }
    return function (x, s, m, y) {
      try {
        Kt = 0;
        var V = Fn(x, s, m, y);
        return ((Qt = null), V);
      } catch (R) {
        if (R === pt || R === $a) throw R;
        var mn = Qr(29, R, null, x.mode);
        return ((mn.lanes = y), (mn.return = x), mn);
      }
    };
  }
  var Ne = _s(!0),
    Ts = _s(!1),
    xe = !1;
  function Ai(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mi(n, r) {
    ((n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          callbacks: null,
        }));
  }
  function me(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function fe(n, r, e) {
    var t = n.updateQueue;
    if (t === null) return null;
    if (((t = t.shared), (pn & 2) !== 0)) {
      var a = t.pending;
      return (
        a === null ? (r.next = r) : ((r.next = a.next), (a.next = r)),
        (t.pending = r),
        (r = Ga(n)),
        ms(n, null, e),
        r
      );
    }
    return (La(n, t, r, e), Ga(n));
  }
  function Pt(n, r, e) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (e & 4194048) !== 0))
    ) {
      var t = r.lanes;
      ((t &= n.pendingLanes), (e |= t), (r.lanes = e), Bc(n, e));
    }
  }
  function Di(n, r) {
    var e = n.updateQueue,
      t = n.alternate;
    if (t !== null && ((t = t.updateQueue), e === t)) {
      var a = null,
        l = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          (l === null ? (a = l = i) : (l = l.next = i), (e = e.next));
        } while (e !== null);
        l === null ? (a = l = r) : (l = l.next = r);
      } else a = l = r;
      ((e = {
        baseState: t.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: l,
        shared: t.shared,
        callbacks: t.callbacks,
      }),
        (n.updateQueue = e));
      return;
    }
    ((n = e.lastBaseUpdate),
      n === null ? (e.firstBaseUpdate = r) : (n.next = r),
      (e.lastBaseUpdate = r));
  }
  var Vi = !1;
  function na() {
    if (Vi) {
      var n = ft;
      if (n !== null) throw n;
    }
  }
  function ra(n, r, e, t) {
    Vi = !1;
    var a = n.updateQueue;
    xe = !1;
    var l = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var c = o,
        f = c.next;
      ((c.next = null), i === null ? (l = f) : (i.next = f), (i = c));
      var h = n.alternate;
      h !== null &&
        ((h = h.updateQueue),
        (o = h.lastBaseUpdate),
        o !== i &&
          (o === null ? (h.firstBaseUpdate = f) : (o.next = f),
          (h.lastBaseUpdate = c)));
    }
    if (l !== null) {
      var g = a.baseState;
      ((i = 0), (h = f = c = null), (o = l));
      do {
        var Q = o.lane & -536870913,
          b = Q !== o.lane;
        if (b ? (on & Q) === Q : (t & Q) === Q) {
          (Q !== 0 && Q === mt && (Vi = !0),
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: null,
                  next: null,
                }));
          n: {
            var z = n,
              N = o;
            Q = r;
            var Fn = e;
            switch (N.tag) {
              case 1:
                if (((z = N.payload), typeof z == "function")) {
                  g = z.call(Fn, g, Q);
                  break n;
                }
                g = z;
                break n;
              case 3:
                z.flags = (z.flags & -65537) | 128;
              case 0:
                if (
                  ((z = N.payload),
                  (Q = typeof z == "function" ? z.call(Fn, g, Q) : z),
                  Q == null)
                )
                  break n;
                g = O({}, g, Q);
                break n;
              case 2:
                xe = !0;
            }
          }
          ((Q = o.callback),
            Q !== null &&
              ((n.flags |= 64),
              b && (n.flags |= 8192),
              (b = a.callbacks),
              b === null ? (a.callbacks = [Q]) : b.push(Q)));
        } else
          ((b = {
            lane: Q,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            h === null ? ((f = h = b), (c = g)) : (h = h.next = b),
            (i |= Q));
        if (((o = o.next), o === null)) {
          if (((o = a.shared.pending), o === null)) break;
          ((b = o),
            (o = b.next),
            (b.next = null),
            (a.lastBaseUpdate = b),
            (a.shared.pending = null));
        }
      } while (!0);
      (h === null && (c = g),
        (a.baseState = c),
        (a.firstBaseUpdate = f),
        (a.lastBaseUpdate = h),
        l === null && (a.shared.lanes = 0),
        (he |= i),
        (n.lanes = i),
        (n.memoizedState = g));
    }
  }
  function js(n, r) {
    if (typeof n != "function") throw Error(d(191, n));
    n.call(r);
  }
  function Ss(n, r) {
    var e = n.callbacks;
    if (e !== null)
      for (n.callbacks = null, n = 0; n < e.length; n++) js(e[n], r);
  }
  var bt = u(null),
    el = u(0);
  function Cs(n, r) {
    ((n = ee), E(el, n), E(bt, r), (ee = n | r.baseLanes));
  }
  function Zi() {
    (E(el, ee), E(bt, bt.current));
  }
  function Hi() {
    ((ee = el.current), B(bt), B(el));
  }
  var br = u(null),
    Tr = null;
  function pe(n) {
    var r = n.alternate;
    (E(zn, zn.current & 1),
      E(br, n),
      Tr === null &&
        (r === null || bt.current !== null || r.memoizedState !== null) &&
        (Tr = n));
  }
  function Ni(n) {
    (E(zn, zn.current), E(br, n), Tr === null && (Tr = n));
  }
  function zs(n) {
    n.tag === 22
      ? (E(zn, zn.current), E(br, n), Tr === null && (Tr = n))
      : Qe();
  }
  function Qe() {
    (E(zn, zn.current), E(br, br.current));
  }
  function vr(n) {
    (B(br), Tr === n && (Tr = null), B(zn));
  }
  var zn = u(0);
  function tl(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var e = r.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || Io(e) || Ko(e)))
          return r;
      } else if (
        r.tag === 19 &&
        (r.memoizedProps.revealOrder === "forwards" ||
          r.memoizedProps.revealOrder === "backwards" ||
          r.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          r.memoizedProps.revealOrder === "together")
      ) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
    return null;
  }
  var Jr = 0,
    I = null,
    Bn = null,
    Mn = null,
    al = !1,
    vt = !1,
    Ye = !1,
    ll = 0,
    ea = 0,
    ht = null,
    Dm = 0;
  function Sn() {
    throw Error(d(321));
  }
  function Yi(n, r) {
    if (r === null) return !1;
    for (var e = 0; e < r.length && e < n.length; e++)
      if (!pr(n[e], r[e])) return !1;
    return !0;
  }
  function Li(n, r, e, t, a, l) {
    return (
      (Jr = l),
      (I = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (v.H = n === null || n.memoizedState === null ? bu : io),
      (Ye = !1),
      (l = e(t, a)),
      (Ye = !1),
      vt && (l = Ws(r, e, t, a)),
      Rs(n),
      l
    );
  }
  function Rs(n) {
    v.H = la;
    var r = Bn !== null && Bn.next !== null;
    if (((Jr = 0), (Mn = Bn = I = null), (al = !1), (ea = 0), (ht = null), r))
      throw Error(d(300));
    n === null ||
      Dn ||
      ((n = n.dependencies), n !== null && qa(n) && (Dn = !0));
  }
  function Ws(n, r, e, t) {
    I = n;
    var a = 0;
    do {
      if ((vt && (ht = null), (ea = 0), (vt = !1), 25 <= a))
        throw Error(d(301));
      if (((a += 1), (Mn = Bn = null), n.updateQueue != null)) {
        var l = n.updateQueue;
        ((l.lastEffect = null),
          (l.events = null),
          (l.stores = null),
          l.memoCache != null && (l.memoCache.index = 0));
      }
      ((v.H = vu), (l = r(e, t)));
    } while (vt);
    return l;
  }
  function Vm() {
    var n = v.H,
      r = n.useState()[0];
    return (
      (r = typeof r.then == "function" ? ta(r) : r),
      (n = n.useState()[0]),
      (Bn !== null ? Bn.memoizedState : null) !== n && (I.flags |= 1024),
      r
    );
  }
  function Gi() {
    var n = ll !== 0;
    return ((ll = 0), n);
  }
  function Xi(n, r, e) {
    ((r.updateQueue = n.updateQueue), (r.flags &= -2053), (n.lanes &= ~e));
  }
  function Ji(n) {
    if (al) {
      for (n = n.memoizedState; n !== null; ) {
        var r = n.queue;
        (r !== null && (r.pending = null), (n = n.next));
      }
      al = !1;
    }
    ((Jr = 0), (Mn = Bn = I = null), (vt = !1), (ea = ll = 0), (ht = null));
  }
  function nr() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Mn === null ? (I.memoizedState = Mn = n) : (Mn = Mn.next = n), Mn);
  }
  function Rn() {
    if (Bn === null) {
      var n = I.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Bn.next;
    var r = Mn === null ? I.memoizedState : Mn.next;
    if (r !== null) ((Mn = r), (Bn = n));
    else {
      if (n === null)
        throw I.alternate === null ? Error(d(467)) : Error(d(310));
      ((Bn = n),
        (n = {
          memoizedState: Bn.memoizedState,
          baseState: Bn.baseState,
          baseQueue: Bn.baseQueue,
          queue: Bn.queue,
          next: null,
        }),
        Mn === null ? (I.memoizedState = Mn = n) : (Mn = Mn.next = n));
    }
    return Mn;
  }
  function il() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ta(n) {
    var r = ea;
    return (
      (ea += 1),
      ht === null && (ht = []),
      (n = Os(ht, n, r)),
      (r = I),
      (Mn === null ? r.memoizedState : Mn.next) === null &&
        ((r = r.alternate),
        (v.H = r === null || r.memoizedState === null ? bu : io)),
      n
    );
  }
  function ol(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return ta(n);
      if (n.$$typeof === Tn) return qn(n);
    }
    throw Error(d(438, String(n)));
  }
  function qi(n) {
    var r = null,
      e = I.updateQueue;
    if ((e !== null && (r = e.memoCache), r == null)) {
      var t = I.alternate;
      t !== null &&
        ((t = t.updateQueue),
        t !== null &&
          ((t = t.memoCache),
          t != null &&
            (r = {
              data: t.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (r == null && (r = { data: [], index: 0 }),
      e === null && ((e = il()), (I.updateQueue = e)),
      (e.memoCache = r),
      (e = r.data[r.index]),
      e === void 0)
    )
      for (e = r.data[r.index] = Array(n), t = 0; t < n; t++) e[t] = Pn;
    return (r.index++, e);
  }
  function qr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function cl(n) {
    var r = Rn();
    return Ii(r, Bn, n);
  }
  function Ii(n, r, e) {
    var t = n.queue;
    if (t === null) throw Error(d(311));
    t.lastRenderedReducer = e;
    var a = n.baseQueue,
      l = t.pending;
    if (l !== null) {
      if (a !== null) {
        var i = a.next;
        ((a.next = l.next), (l.next = i));
      }
      ((r.baseQueue = a = l), (t.pending = null));
    }
    if (((l = n.baseState), a === null)) n.memoizedState = l;
    else {
      r = a.next;
      var o = (i = null),
        c = null,
        f = r,
        h = !1;
      do {
        var g = f.lane & -536870913;
        if (g !== f.lane ? (on & g) === g : (Jr & g) === g) {
          var Q = f.revertLane;
          if (Q === 0)
            (c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: f.action,
                  hasEagerState: f.hasEagerState,
                  eagerState: f.eagerState,
                  next: null,
                }),
              g === mt && (h = !0));
          else if ((Jr & Q) === Q) {
            ((f = f.next), Q === mt && (h = !0));
            continue;
          } else
            ((g = {
              lane: 0,
              revertLane: f.revertLane,
              gesture: null,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
              c === null ? ((o = c = g), (i = l)) : (c = c.next = g),
              (I.lanes |= Q),
              (he |= Q));
          ((g = f.action),
            Ye && e(l, g),
            (l = f.hasEagerState ? f.eagerState : e(l, g)));
        } else
          ((Q = {
            lane: g,
            revertLane: f.revertLane,
            gesture: f.gesture,
            action: f.action,
            hasEagerState: f.hasEagerState,
            eagerState: f.eagerState,
            next: null,
          }),
            c === null ? ((o = c = Q), (i = l)) : (c = c.next = Q),
            (I.lanes |= g),
            (he |= g));
        f = f.next;
      } while (f !== null && f !== r);
      if (
        (c === null ? (i = l) : (c.next = o),
        !pr(l, n.memoizedState) && ((Dn = !0), h && ((e = ft), e !== null)))
      )
        throw e;
      ((n.memoizedState = l),
        (n.baseState = i),
        (n.baseQueue = c),
        (t.lastRenderedState = l));
    }
    return (a === null && (t.lanes = 0), [n.memoizedState, t.dispatch]);
  }
  function Ki(n) {
    var r = Rn(),
      e = r.queue;
    if (e === null) throw Error(d(311));
    e.lastRenderedReducer = n;
    var t = e.dispatch,
      a = e.pending,
      l = r.memoizedState;
    if (a !== null) {
      e.pending = null;
      var i = (a = a.next);
      do ((l = n(l, i.action)), (i = i.next));
      while (i !== a);
      (pr(l, r.memoizedState) || (Dn = !0),
        (r.memoizedState = l),
        r.baseQueue === null && (r.baseState = l),
        (e.lastRenderedState = l));
    }
    return [l, t];
  }
  function As(n, r, e) {
    var t = I,
      a = Rn(),
      l = dn;
    if (l) {
      if (e === void 0) throw Error(d(407));
      e = e();
    } else e = r();
    var i = !pr((Bn || a).memoizedState, e);
    if (
      (i && ((a.memoizedState = e), (Dn = !0)),
      (a = a.queue),
      no(Vs.bind(null, t, a, n), [n]),
      a.getSnapshot !== r || i || (Mn !== null && Mn.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        yt(9, { destroy: void 0 }, Ds.bind(null, t, a, e, r), null),
        Un === null)
      )
        throw Error(d(349));
      l || (Jr & 127) !== 0 || Ms(t, r, e);
    }
    return e;
  }
  function Ms(n, r, e) {
    ((n.flags |= 16384),
      (n = { getSnapshot: r, value: e }),
      (r = I.updateQueue),
      r === null
        ? ((r = il()), (I.updateQueue = r), (r.stores = [n]))
        : ((e = r.stores), e === null ? (r.stores = [n]) : e.push(n)));
  }
  function Ds(n, r, e, t) {
    ((r.value = e), (r.getSnapshot = t), Zs(r) && Hs(n));
  }
  function Vs(n, r, e) {
    return e(function () {
      Zs(r) && Hs(n);
    });
  }
  function Zs(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var e = r();
      return !pr(n, e);
    } catch {
      return !0;
    }
  }
  function Hs(n) {
    var r = Re(n, 2);
    r !== null && sr(r, n, 2);
  }
  function $i(n) {
    var r = nr();
    if (typeof n == "function") {
      var e = n;
      if (((n = e()), Ye)) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return (
      (r.memoizedState = r.baseState = n),
      (r.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qr,
        lastRenderedState: n,
      }),
      r
    );
  }
  function Ns(n, r, e, t) {
    return ((n.baseState = e), Ii(n, Bn, typeof t == "function" ? t : qr));
  }
  function Zm(n, r, e, t, a) {
    if (dl(n)) throw Error(d(485));
    if (((n = r.action), n !== null)) {
      var l = {
        payload: a,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          l.listeners.push(i);
        },
      };
      (v.T !== null ? e(!0) : (l.isTransition = !1),
        t(l),
        (e = r.pending),
        e === null
          ? ((l.next = r.pending = l), Ys(r, l))
          : ((l.next = e.next), (r.pending = e.next = l)));
    }
  }
  function Ys(n, r) {
    var e = r.action,
      t = r.payload,
      a = n.state;
    if (r.isTransition) {
      var l = v.T,
        i = {};
      v.T = i;
      try {
        var o = e(a, t),
          c = v.S;
        (c !== null && c(i, o), Ls(n, r, o));
      } catch (f) {
        Pi(n, r, f);
      } finally {
        (l !== null && i.types !== null && (l.types = i.types), (v.T = l));
      }
    } else
      try {
        ((l = e(a, t)), Ls(n, r, l));
      } catch (f) {
        Pi(n, r, f);
      }
  }
  function Ls(n, r, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (t) {
            Gs(n, r, t);
          },
          function (t) {
            return Pi(n, r, t);
          },
        )
      : Gs(n, r, e);
  }
  function Gs(n, r, e) {
    ((r.status = "fulfilled"),
      (r.value = e),
      Xs(r),
      (n.state = e),
      (r = n.pending),
      r !== null &&
        ((e = r.next),
        e === r ? (n.pending = null) : ((e = e.next), (r.next = e), Ys(n, e))));
  }
  function Pi(n, r, e) {
    var t = n.pending;
    if (((n.pending = null), t !== null)) {
      t = t.next;
      do ((r.status = "rejected"), (r.reason = e), Xs(r), (r = r.next));
      while (r !== t);
    }
    n.action = null;
  }
  function Xs(n) {
    n = n.listeners;
    for (var r = 0; r < n.length; r++) (0, n[r])();
  }
  function Js(n, r) {
    return r;
  }
  function qs(n, r) {
    if (dn) {
      var e = Un.formState;
      if (e !== null) {
        n: {
          var t = I;
          if (dn) {
            if (On) {
              r: {
                for (var a = On, l = _r; a.nodeType !== 8; ) {
                  if (!l) {
                    a = null;
                    break r;
                  }
                  if (((a = jr(a.nextSibling)), a === null)) {
                    a = null;
                    break r;
                  }
                }
                ((l = a.data), (a = l === "F!" || l === "F" ? a : null));
              }
              if (a) {
                ((On = jr(a.nextSibling)), (t = a.data === "F!"));
                break n;
              }
            }
            ue(t);
          }
          t = !1;
        }
        t && (r = e[0]);
      }
    }
    return (
      (e = nr()),
      (e.memoizedState = e.baseState = r),
      (t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Js,
        lastRenderedState: r,
      }),
      (e.queue = t),
      (e = fu.bind(null, I, t)),
      (t.dispatch = e),
      (t = $i(!1)),
      (l = lo.bind(null, I, !1, t.queue)),
      (t = nr()),
      (a = { state: r, dispatch: null, action: n, pending: null }),
      (t.queue = a),
      (e = Zm.bind(null, I, a, l, e)),
      (a.dispatch = e),
      (t.memoizedState = n),
      [r, e, !1]
    );
  }
  function Is(n) {
    var r = Rn();
    return Ks(r, Bn, n);
  }
  function Ks(n, r, e) {
    if (
      ((r = Ii(n, r, Js)[0]),
      (n = cl(qr)[0]),
      typeof r == "object" && r !== null && typeof r.then == "function")
    )
      try {
        var t = ta(r);
      } catch (i) {
        throw i === pt ? $a : i;
      }
    else t = r;
    r = Rn();
    var a = r.queue,
      l = a.dispatch;
    return (
      e !== r.memoizedState &&
        ((I.flags |= 2048),
        yt(9, { destroy: void 0 }, Hm.bind(null, a, e), null)),
      [t, l, n]
    );
  }
  function Hm(n, r) {
    n.action = r;
  }
  function $s(n) {
    var r = Rn(),
      e = Bn;
    if (e !== null) return Ks(r, e, n);
    (Rn(), (r = r.memoizedState), (e = Rn()));
    var t = e.queue.dispatch;
    return ((e.memoizedState = n), [r, t, !1]);
  }
  function yt(n, r, e, t) {
    return (
      (n = { tag: n, create: e, deps: t, inst: r, next: null }),
      (r = I.updateQueue),
      r === null && ((r = il()), (I.updateQueue = r)),
      (e = r.lastEffect),
      e === null
        ? (r.lastEffect = n.next = n)
        : ((t = e.next), (e.next = n), (n.next = t), (r.lastEffect = n)),
      n
    );
  }
  function Ps() {
    return Rn().memoizedState;
  }
  function sl(n, r, e, t) {
    var a = nr();
    ((I.flags |= n),
      (a.memoizedState = yt(
        1 | r,
        { destroy: void 0 },
        e,
        t === void 0 ? null : t,
      )));
  }
  function ul(n, r, e, t) {
    var a = Rn();
    t = t === void 0 ? null : t;
    var l = a.memoizedState.inst;
    Bn !== null && t !== null && Yi(t, Bn.memoizedState.deps)
      ? (a.memoizedState = yt(r, l, e, t))
      : ((I.flags |= n), (a.memoizedState = yt(1 | r, l, e, t)));
  }
  function nu(n, r) {
    sl(8390656, 8, n, r);
  }
  function no(n, r) {
    ul(2048, 8, n, r);
  }
  function Nm(n) {
    I.flags |= 4;
    var r = I.updateQueue;
    if (r === null) ((r = il()), (I.updateQueue = r), (r.events = [n]));
    else {
      var e = r.events;
      e === null ? (r.events = [n]) : e.push(n);
    }
  }
  function ru(n) {
    var r = Rn().memoizedState;
    return (
      Nm({ ref: r, nextImpl: n }),
      function () {
        if ((pn & 2) !== 0) throw Error(d(440));
        return r.impl.apply(void 0, arguments);
      }
    );
  }
  function eu(n, r) {
    return ul(4, 2, n, r);
  }
  function tu(n, r) {
    return ul(4, 4, n, r);
  }
  function au(n, r) {
    if (typeof r == "function") {
      n = n();
      var e = r(n);
      return function () {
        typeof e == "function" ? e() : r(null);
      };
    }
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function lu(n, r, e) {
    ((e = e != null ? e.concat([n]) : null), ul(4, 4, au.bind(null, r, n), e));
  }
  function ro() {}
  function iu(n, r) {
    var e = Rn();
    r = r === void 0 ? null : r;
    var t = e.memoizedState;
    return r !== null && Yi(r, t[1]) ? t[0] : ((e.memoizedState = [n, r]), n);
  }
  function ou(n, r) {
    var e = Rn();
    r = r === void 0 ? null : r;
    var t = e.memoizedState;
    if (r !== null && Yi(r, t[1])) return t[0];
    if (((t = n()), Ye)) {
      le(!0);
      try {
        n();
      } finally {
        le(!1);
      }
    }
    return ((e.memoizedState = [t, r]), t);
  }
  function eo(n, r, e) {
    return e === void 0 || ((Jr & 1073741824) !== 0 && (on & 261930) === 0)
      ? (n.memoizedState = r)
      : ((n.memoizedState = e), (n = cd()), (I.lanes |= n), (he |= n), e);
  }
  function cu(n, r, e, t) {
    return pr(e, r)
      ? e
      : bt.current !== null
        ? ((n = eo(n, e, t)), pr(n, r) || (Dn = !0), n)
        : (Jr & 42) === 0 || ((Jr & 1073741824) !== 0 && (on & 261930) === 0)
          ? ((Dn = !0), (n.memoizedState = e))
          : ((n = cd()), (I.lanes |= n), (he |= n), r);
  }
  function su(n, r, e, t, a) {
    var l = _.p;
    _.p = l !== 0 && 8 > l ? l : 8;
    var i = v.T,
      o = {};
    ((v.T = o), lo(n, !1, r, e));
    try {
      var c = a(),
        f = v.S;
      if (
        (f !== null && f(o, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var h = Mm(c, t);
        aa(n, r, h, Br(n));
      } else aa(n, r, t, Br(n));
    } catch (g) {
      aa(n, r, { then: function () {}, status: "rejected", reason: g }, Br());
    } finally {
      ((_.p = l),
        i !== null && o.types !== null && (i.types = o.types),
        (v.T = i));
    }
  }
  function Ym() {}
  function to(n, r, e, t) {
    if (n.tag !== 5) throw Error(d(476));
    var a = uu(n).queue;
    su(
      n,
      a,
      r,
      D,
      e === null
        ? Ym
        : function () {
            return (du(n), e(t));
          },
    );
  }
  function uu(n) {
    var r = n.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: D,
      baseState: D,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qr,
        lastRenderedState: D,
      },
      next: null,
    };
    var e = {};
    return (
      (r.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qr,
          lastRenderedState: e,
        },
        next: null,
      }),
      (n.memoizedState = r),
      (n = n.alternate),
      n !== null && (n.memoizedState = r),
      r
    );
  }
  function du(n) {
    var r = uu(n);
    (r.next === null && (r = n.alternate.memoizedState),
      aa(n, r.next.queue, {}, Br()));
  }
  function ao() {
    return qn(Ba);
  }
  function xu() {
    return Rn().memoizedState;
  }
  function mu() {
    return Rn().memoizedState;
  }
  function Lm(n) {
    for (var r = n.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var e = Br();
          n = me(e);
          var t = fe(r, n, e);
          (t !== null && (sr(t, r, e), Pt(t, r, e)),
            (r = { cache: Ci() }),
            (n.payload = r));
          return;
      }
      r = r.return;
    }
  }
  function Gm(n, r, e) {
    var t = Br();
    ((e = {
      lane: t,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dl(n)
        ? pu(r, e)
        : ((e = gi(n, r, e, t)), e !== null && (sr(e, n, t), Qu(e, r, t))));
  }
  function fu(n, r, e) {
    var t = Br();
    aa(n, r, e, t);
  }
  function aa(n, r, e, t) {
    var a = {
      lane: t,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dl(n)) pu(r, a);
    else {
      var l = n.alternate;
      if (
        n.lanes === 0 &&
        (l === null || l.lanes === 0) &&
        ((l = r.lastRenderedReducer), l !== null)
      )
        try {
          var i = r.lastRenderedState,
            o = l(i, e);
          if (((a.hasEagerState = !0), (a.eagerState = o), pr(o, i)))
            return (La(n, r, a, 0), Un === null && Ya(), !1);
        } catch {}
      if (((e = gi(n, r, a, t)), e !== null))
        return (sr(e, n, t), Qu(e, r, t), !0);
    }
    return !1;
  }
  function lo(n, r, e, t) {
    if (
      ((t = {
        lane: 2,
        revertLane: Mo(),
        gesture: null,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dl(n))
    ) {
      if (r) throw Error(d(479));
    } else ((r = gi(n, e, t, 2)), r !== null && sr(r, n, 2));
  }
  function dl(n) {
    var r = n.alternate;
    return n === I || (r !== null && r === I);
  }
  function pu(n, r) {
    vt = al = !0;
    var e = n.pending;
    (e === null ? (r.next = r) : ((r.next = e.next), (e.next = r)),
      (n.pending = r));
  }
  function Qu(n, r, e) {
    if ((e & 4194048) !== 0) {
      var t = r.lanes;
      ((t &= n.pendingLanes), (e |= t), (r.lanes = e), Bc(n, e));
    }
  }
  var la = {
    readContext: qn,
    use: ol,
    useCallback: Sn,
    useContext: Sn,
    useEffect: Sn,
    useImperativeHandle: Sn,
    useLayoutEffect: Sn,
    useInsertionEffect: Sn,
    useMemo: Sn,
    useReducer: Sn,
    useRef: Sn,
    useState: Sn,
    useDebugValue: Sn,
    useDeferredValue: Sn,
    useTransition: Sn,
    useSyncExternalStore: Sn,
    useId: Sn,
    useHostTransitionStatus: Sn,
    useFormState: Sn,
    useActionState: Sn,
    useOptimistic: Sn,
    useMemoCache: Sn,
    useCacheRefresh: Sn,
  };
  la.useEffectEvent = Sn;
  var bu = {
      readContext: qn,
      use: ol,
      useCallback: function (n, r) {
        return ((nr().memoizedState = [n, r === void 0 ? null : r]), n);
      },
      useContext: qn,
      useEffect: nu,
      useImperativeHandle: function (n, r, e) {
        ((e = e != null ? e.concat([n]) : null),
          sl(4194308, 4, au.bind(null, r, n), e));
      },
      useLayoutEffect: function (n, r) {
        return sl(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        sl(4, 2, n, r);
      },
      useMemo: function (n, r) {
        var e = nr();
        r = r === void 0 ? null : r;
        var t = n();
        if (Ye) {
          le(!0);
          try {
            n();
          } finally {
            le(!1);
          }
        }
        return ((e.memoizedState = [t, r]), t);
      },
      useReducer: function (n, r, e) {
        var t = nr();
        if (e !== void 0) {
          var a = e(r);
          if (Ye) {
            le(!0);
            try {
              e(r);
            } finally {
              le(!1);
            }
          }
        } else a = r;
        return (
          (t.memoizedState = t.baseState = a),
          (n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: a,
          }),
          (t.queue = n),
          (n = n.dispatch = Gm.bind(null, I, n)),
          [t.memoizedState, n]
        );
      },
      useRef: function (n) {
        var r = nr();
        return ((n = { current: n }), (r.memoizedState = n));
      },
      useState: function (n) {
        n = $i(n);
        var r = n.queue,
          e = fu.bind(null, I, r);
        return ((r.dispatch = e), [n.memoizedState, e]);
      },
      useDebugValue: ro,
      useDeferredValue: function (n, r) {
        var e = nr();
        return eo(e, n, r);
      },
      useTransition: function () {
        var n = $i(!1);
        return (
          (n = su.bind(null, I, n.queue, !0, !1)),
          (nr().memoizedState = n),
          [!1, n]
        );
      },
      useSyncExternalStore: function (n, r, e) {
        var t = I,
          a = nr();
        if (dn) {
          if (e === void 0) throw Error(d(407));
          e = e();
        } else {
          if (((e = r()), Un === null)) throw Error(d(349));
          (on & 127) !== 0 || Ms(t, r, e);
        }
        a.memoizedState = e;
        var l = { value: e, getSnapshot: r };
        return (
          (a.queue = l),
          nu(Vs.bind(null, t, l, n), [n]),
          (t.flags |= 2048),
          yt(9, { destroy: void 0 }, Ds.bind(null, t, l, e, r), null),
          e
        );
      },
      useId: function () {
        var n = nr(),
          r = Un.identifierPrefix;
        if (dn) {
          var e = Ar,
            t = Wr;
          ((e = (t & ~(1 << (32 - fr(t) - 1))).toString(32) + e),
            (r = "_" + r + "R_" + e),
            (e = ll++),
            0 < e && (r += "H" + e.toString(32)),
            (r += "_"));
        } else ((e = Dm++), (r = "_" + r + "r_" + e.toString(32) + "_"));
        return (n.memoizedState = r);
      },
      useHostTransitionStatus: ao,
      useFormState: qs,
      useActionState: qs,
      useOptimistic: function (n) {
        var r = nr();
        r.memoizedState = r.baseState = n;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (r.queue = e),
          (r = lo.bind(null, I, !0, e)),
          (e.dispatch = r),
          [n, r]
        );
      },
      useMemoCache: qi,
      useCacheRefresh: function () {
        return (nr().memoizedState = Lm.bind(null, I));
      },
      useEffectEvent: function (n) {
        var r = nr(),
          e = { impl: n };
        return (
          (r.memoizedState = e),
          function () {
            if ((pn & 2) !== 0) throw Error(d(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    io = {
      readContext: qn,
      use: ol,
      useCallback: iu,
      useContext: qn,
      useEffect: no,
      useImperativeHandle: lu,
      useInsertionEffect: eu,
      useLayoutEffect: tu,
      useMemo: ou,
      useReducer: cl,
      useRef: Ps,
      useState: function () {
        return cl(qr);
      },
      useDebugValue: ro,
      useDeferredValue: function (n, r) {
        var e = Rn();
        return cu(e, Bn.memoizedState, n, r);
      },
      useTransition: function () {
        var n = cl(qr)[0],
          r = Rn().memoizedState;
        return [typeof n == "boolean" ? n : ta(n), r];
      },
      useSyncExternalStore: As,
      useId: xu,
      useHostTransitionStatus: ao,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (n, r) {
        var e = Rn();
        return Ns(e, Bn, n, r);
      },
      useMemoCache: qi,
      useCacheRefresh: mu,
    };
  io.useEffectEvent = ru;
  var vu = {
    readContext: qn,
    use: ol,
    useCallback: iu,
    useContext: qn,
    useEffect: no,
    useImperativeHandle: lu,
    useInsertionEffect: eu,
    useLayoutEffect: tu,
    useMemo: ou,
    useReducer: Ki,
    useRef: Ps,
    useState: function () {
      return Ki(qr);
    },
    useDebugValue: ro,
    useDeferredValue: function (n, r) {
      var e = Rn();
      return Bn === null ? eo(e, n, r) : cu(e, Bn.memoizedState, n, r);
    },
    useTransition: function () {
      var n = Ki(qr)[0],
        r = Rn().memoizedState;
      return [typeof n == "boolean" ? n : ta(n), r];
    },
    useSyncExternalStore: As,
    useId: xu,
    useHostTransitionStatus: ao,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function (n, r) {
      var e = Rn();
      return Bn !== null
        ? Ns(e, Bn, n, r)
        : ((e.baseState = n), [n, e.queue.dispatch]);
    },
    useMemoCache: qi,
    useCacheRefresh: mu,
  };
  vu.useEffectEvent = ru;
  function oo(n, r, e, t) {
    ((r = n.memoizedState),
      (e = e(t, r)),
      (e = e == null ? r : O({}, r, e)),
      (n.memoizedState = e),
      n.lanes === 0 && (n.updateQueue.baseState = e));
  }
  var co = {
    enqueueSetState: function (n, r, e) {
      n = n._reactInternals;
      var t = Br(),
        a = me(t);
      ((a.payload = r),
        e != null && (a.callback = e),
        (r = fe(n, a, t)),
        r !== null && (sr(r, n, t), Pt(r, n, t)));
    },
    enqueueReplaceState: function (n, r, e) {
      n = n._reactInternals;
      var t = Br(),
        a = me(t);
      ((a.tag = 1),
        (a.payload = r),
        e != null && (a.callback = e),
        (r = fe(n, a, t)),
        r !== null && (sr(r, n, t), Pt(r, n, t)));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var e = Br(),
        t = me(e);
      ((t.tag = 2),
        r != null && (t.callback = r),
        (r = fe(n, t, e)),
        r !== null && (sr(r, n, e), Pt(r, n, e)));
    },
  };
  function hu(n, r, e, t, a, l, i) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(t, l, i)
        : r.prototype && r.prototype.isPureReactComponent
          ? !Lt(e, t) || !Lt(a, l)
          : !0
    );
  }
  function yu(n, r, e, t) {
    ((n = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(e, t),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(e, t),
      r.state !== n && co.enqueueReplaceState(r, r.state, null));
  }
  function Le(n, r) {
    var e = r;
    if ("ref" in r) {
      e = {};
      for (var t in r) t !== "ref" && (e[t] = r[t]);
    }
    if ((n = n.defaultProps)) {
      e === r && (e = O({}, e));
      for (var a in n) e[a] === void 0 && (e[a] = n[a]);
    }
    return e;
  }
  function Bu(n) {
    Na(n);
  }
  function gu(n) {
    console.error(n);
  }
  function Fu(n) {
    Na(n);
  }
  function xl(n, r) {
    try {
      var e = n.onUncaughtError;
      e(r.value, { componentStack: r.stack });
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  function Uu(n, r, e) {
    try {
      var t = n.onCaughtError;
      t(e.value, {
        componentStack: e.stack,
        errorBoundary: r.tag === 1 ? r.stateNode : null,
      });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function so(n, r, e) {
    return (
      (e = me(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        xl(n, r);
      }),
      e
    );
  }
  function wu(n) {
    return ((n = me(n)), (n.tag = 3), n);
  }
  function Ou(n, r, e, t) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var l = t.value;
      ((n.payload = function () {
        return a(l);
      }),
        (n.callback = function () {
          Uu(r, e, t);
        }));
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Uu(r, e, t),
          typeof a != "function" &&
            (ye === null ? (ye = new Set([this])) : ye.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      });
  }
  function Xm(n, r, e, t, a) {
    if (
      ((e.flags |= 32768),
      t !== null && typeof t == "object" && typeof t.then == "function")
    ) {
      if (
        ((r = e.alternate),
        r !== null && xt(r, e, a, !0),
        (e = br.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              Tr === null ? Ul() : e.alternate === null && Cn === 0 && (Cn = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = a),
              t === Pa
                ? (e.flags |= 16384)
                : ((r = e.updateQueue),
                  r === null ? (e.updateQueue = new Set([t])) : r.add(t),
                  Ro(n, t, a)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              t === Pa
                ? (e.flags |= 16384)
                : ((r = e.updateQueue),
                  r === null
                    ? ((r = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([t]),
                      }),
                      (e.updateQueue = r))
                    : ((e = r.retryQueue),
                      e === null ? (r.retryQueue = new Set([t])) : e.add(t)),
                  Ro(n, t, a)),
              !1
            );
        }
        throw Error(d(435, e.tag));
      }
      return (Ro(n, t, a), Ul(), !1);
    }
    if (dn)
      return (
        (r = br.current),
        r !== null
          ? ((r.flags & 65536) === 0 && (r.flags |= 256),
            (r.flags |= 65536),
            (r.lanes = a),
            t !== Ei && ((n = Error(d(422), { cause: t })), Jt(Or(n, e))))
          : (t !== Ei && ((r = Error(d(423), { cause: t })), Jt(Or(r, e))),
            (n = n.current.alternate),
            (n.flags |= 65536),
            (a &= -a),
            (n.lanes |= a),
            (t = Or(t, e)),
            (a = so(n.stateNode, t, a)),
            Di(n, a),
            Cn !== 4 && (Cn = 2)),
        !1
      );
    var l = Error(d(520), { cause: t });
    if (
      ((l = Or(l, e)),
      ma === null ? (ma = [l]) : ma.push(l),
      Cn !== 4 && (Cn = 2),
      r === null)
    )
      return !0;
    ((t = Or(t, e)), (e = r));
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (n = a & -a),
            (e.lanes |= n),
            (n = so(e.stateNode, t, n)),
            Di(e, n),
            !1
          );
        case 1:
          if (
            ((r = e.type),
            (l = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof r.getDerivedStateFromError == "function" ||
                (l !== null &&
                  typeof l.componentDidCatch == "function" &&
                  (ye === null || !ye.has(l)))))
          )
            return (
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (a = wu(a)),
              Ou(a, n, e, t),
              Di(e, a),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var uo = Error(d(461)),
    Dn = !1;
  function In(n, r, e, t) {
    r.child = n === null ? Ts(r, null, e, t) : Ne(r, n.child, e, t);
  }
  function ku(n, r, e, t, a) {
    e = e.render;
    var l = r.ref;
    if ("ref" in t) {
      var i = {};
      for (var o in t) o !== "ref" && (i[o] = t[o]);
    } else i = t;
    return (
      De(r),
      (t = Li(n, r, e, i, l, a)),
      (o = Gi()),
      n !== null && !Dn
        ? (Xi(n, r, a), Ir(n, r, a))
        : (dn && o && Oi(r), (r.flags |= 1), In(n, r, t, a), r.child)
    );
  }
  function Eu(n, r, e, t, a) {
    if (n === null) {
      var l = e.type;
      return typeof l == "function" &&
        !Fi(l) &&
        l.defaultProps === void 0 &&
        e.compare === null
        ? ((r.tag = 15), (r.type = l), _u(n, r, l, t, a))
        : ((n = Xa(e.type, null, t, r, r.mode, a)),
          (n.ref = r.ref),
          (n.return = r),
          (r.child = n));
    }
    if (((l = n.child), !ho(n, a))) {
      var i = l.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Lt), e(i, t) && n.ref === r.ref)
      )
        return Ir(n, r, a);
    }
    return (
      (r.flags |= 1),
      (n = Yr(l, t)),
      (n.ref = r.ref),
      (n.return = r),
      (r.child = n)
    );
  }
  function _u(n, r, e, t, a) {
    if (n !== null) {
      var l = n.memoizedProps;
      if (Lt(l, t) && n.ref === r.ref)
        if (((Dn = !1), (r.pendingProps = t = l), ho(n, a)))
          (n.flags & 131072) !== 0 && (Dn = !0);
        else return ((r.lanes = n.lanes), Ir(n, r, a));
    }
    return xo(n, r, e, t, a);
  }
  function Tu(n, r, e, t) {
    var a = t.children,
      l = n !== null ? n.memoizedState : null;
    if (
      (n === null &&
        r.stateNode === null &&
        (r.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.mode === "hidden")
    ) {
      if ((r.flags & 128) !== 0) {
        if (((l = l !== null ? l.baseLanes | e : e), n !== null)) {
          for (t = r.child = n.child, a = 0; t !== null; )
            ((a = a | t.lanes | t.childLanes), (t = t.sibling));
          t = a & ~l;
        } else ((t = 0), (r.child = null));
        return ju(n, r, l, e, t);
      }
      if ((e & 536870912) !== 0)
        ((r.memoizedState = { baseLanes: 0, cachePool: null }),
          n !== null && Ka(r, l !== null ? l.cachePool : null),
          l !== null ? Cs(r, l) : Zi(),
          zs(r));
      else
        return (
          (t = r.lanes = 536870912),
          ju(n, r, l !== null ? l.baseLanes | e : e, e, t)
        );
    } else
      l !== null
        ? (Ka(r, l.cachePool), Cs(r, l), Qe(), (r.memoizedState = null))
        : (n !== null && Ka(r, null), Zi(), Qe());
    return (In(n, r, a, e), r.child);
  }
  function ia(n, r) {
    return (
      (n !== null && n.tag === 22) ||
        r.stateNode !== null ||
        (r.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      r.sibling
    );
  }
  function ju(n, r, e, t, a) {
    var l = Ri();
    return (
      (l = l === null ? null : { parent: An._currentValue, pool: l }),
      (r.memoizedState = { baseLanes: e, cachePool: l }),
      n !== null && Ka(r, null),
      Zi(),
      zs(r),
      n !== null && xt(n, r, t, !0),
      (r.childLanes = a),
      null
    );
  }
  function ml(n, r) {
    return (
      (r = pl({ mode: r.mode, children: r.children }, n.mode)),
      (r.ref = n.ref),
      (n.child = r),
      (r.return = n),
      r
    );
  }
  function Su(n, r, e) {
    return (
      Ne(r, n.child, null, e),
      (n = ml(r, r.pendingProps)),
      (n.flags |= 2),
      vr(r),
      (r.memoizedState = null),
      n
    );
  }
  function Jm(n, r, e) {
    var t = r.pendingProps,
      a = (r.flags & 128) !== 0;
    if (((r.flags &= -129), n === null)) {
      if (dn) {
        if (t.mode === "hidden")
          return ((n = ml(r, t)), (r.lanes = 536870912), ia(null, n));
        if (
          (Ni(r),
          (n = On)
            ? ((n = Yd(n, _r)),
              (n = n !== null && n.data === "&" ? n : null),
              n !== null &&
                ((r.memoizedState = {
                  dehydrated: n,
                  treeContext: ce !== null ? { id: Wr, overflow: Ar } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = ps(n)),
                (e.return = r),
                (r.child = e),
                (Jn = r),
                (On = null)))
            : (n = null),
          n === null)
        )
          throw ue(r);
        return ((r.lanes = 536870912), null);
      }
      return ml(r, t);
    }
    var l = n.memoizedState;
    if (l !== null) {
      var i = l.dehydrated;
      if ((Ni(r), a))
        if (r.flags & 256) ((r.flags &= -257), (r = Su(n, r, e)));
        else if (r.memoizedState !== null)
          ((r.child = n.child), (r.flags |= 128), (r = null));
        else throw Error(d(558));
      else if (
        (Dn || xt(n, r, e, !1), (a = (e & n.childLanes) !== 0), Dn || a)
      ) {
        if (
          ((t = Un),
          t !== null && ((i = gc(t, e)), i !== 0 && i !== l.retryLane))
        )
          throw ((l.retryLane = i), Re(n, i), sr(t, n, i), uo);
        (Ul(), (r = Su(n, r, e)));
      } else
        ((n = l.treeContext),
          (On = jr(i.nextSibling)),
          (Jn = r),
          (dn = !0),
          (se = null),
          (_r = !1),
          n !== null && vs(r, n),
          (r = ml(r, t)),
          (r.flags |= 4096));
      return r;
    }
    return (
      (n = Yr(n.child, { mode: t.mode, children: t.children })),
      (n.ref = r.ref),
      (r.child = n),
      (n.return = r),
      n
    );
  }
  function fl(n, r) {
    var e = r.ref;
    if (e === null) n !== null && n.ref !== null && (r.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(d(284));
      (n === null || n.ref !== e) && (r.flags |= 4194816);
    }
  }
  function xo(n, r, e, t, a) {
    return (
      De(r),
      (e = Li(n, r, e, t, void 0, a)),
      (t = Gi()),
      n !== null && !Dn
        ? (Xi(n, r, a), Ir(n, r, a))
        : (dn && t && Oi(r), (r.flags |= 1), In(n, r, e, a), r.child)
    );
  }
  function Cu(n, r, e, t, a, l) {
    return (
      De(r),
      (r.updateQueue = null),
      (e = Ws(r, t, e, a)),
      Rs(n),
      (t = Gi()),
      n !== null && !Dn
        ? (Xi(n, r, l), Ir(n, r, l))
        : (dn && t && Oi(r), (r.flags |= 1), In(n, r, e, l), r.child)
    );
  }
  function zu(n, r, e, t, a) {
    if ((De(r), r.stateNode === null)) {
      var l = ct,
        i = e.contextType;
      (typeof i == "object" && i !== null && (l = qn(i)),
        (l = new e(t, l)),
        (r.memoizedState =
          l.state !== null && l.state !== void 0 ? l.state : null),
        (l.updater = co),
        (r.stateNode = l),
        (l._reactInternals = r),
        (l = r.stateNode),
        (l.props = t),
        (l.state = r.memoizedState),
        (l.refs = {}),
        Ai(r),
        (i = e.contextType),
        (l.context = typeof i == "object" && i !== null ? qn(i) : ct),
        (l.state = r.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (oo(r, e, i, t), (l.state = r.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function" ||
          (typeof l.UNSAFE_componentWillMount != "function" &&
            typeof l.componentWillMount != "function") ||
          ((i = l.state),
          typeof l.componentWillMount == "function" && l.componentWillMount(),
          typeof l.UNSAFE_componentWillMount == "function" &&
            l.UNSAFE_componentWillMount(),
          i !== l.state && co.enqueueReplaceState(l, l.state, null),
          ra(r, t, l, a),
          na(),
          (l.state = r.memoizedState)),
        typeof l.componentDidMount == "function" && (r.flags |= 4194308),
        (t = !0));
    } else if (n === null) {
      l = r.stateNode;
      var o = r.memoizedProps,
        c = Le(e, o);
      l.props = c;
      var f = l.context,
        h = e.contextType;
      ((i = ct), typeof h == "object" && h !== null && (i = qn(h)));
      var g = e.getDerivedStateFromProps;
      ((h =
        typeof g == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function"),
        (o = r.pendingProps !== o),
        h ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((o || f !== i) && yu(r, l, t, i)),
        (xe = !1));
      var Q = r.memoizedState;
      ((l.state = Q),
        ra(r, t, l, a),
        na(),
        (f = r.memoizedState),
        o || Q !== f || xe
          ? (typeof g == "function" && (oo(r, e, g, t), (f = r.memoizedState)),
            (c = xe || hu(r, e, c, t, Q, f, i))
              ? (h ||
                  (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
                  (typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
                  typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount()),
                typeof l.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof l.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = t),
                (r.memoizedState = f)),
            (l.props = t),
            (l.state = f),
            (l.context = i),
            (t = c))
          : (typeof l.componentDidMount == "function" && (r.flags |= 4194308),
            (t = !1)));
    } else {
      ((l = r.stateNode),
        Mi(n, r),
        (i = r.memoizedProps),
        (h = Le(e, i)),
        (l.props = h),
        (g = r.pendingProps),
        (Q = l.context),
        (f = e.contextType),
        (c = ct),
        typeof f == "object" && f !== null && (c = qn(f)),
        (o = e.getDerivedStateFromProps),
        (f =
          typeof o == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function") ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((i !== g || Q !== c) && yu(r, l, t, c)),
        (xe = !1),
        (Q = r.memoizedState),
        (l.state = Q),
        ra(r, t, l, a),
        na());
      var b = r.memoizedState;
      i !== g ||
      Q !== b ||
      xe ||
      (n !== null && n.dependencies !== null && qa(n.dependencies))
        ? (typeof o == "function" && (oo(r, e, o, t), (b = r.memoizedState)),
          (h =
            xe ||
            hu(r, e, h, t, Q, b, c) ||
            (n !== null && n.dependencies !== null && qa(n.dependencies)))
            ? (f ||
                (typeof l.UNSAFE_componentWillUpdate != "function" &&
                  typeof l.componentWillUpdate != "function") ||
                (typeof l.componentWillUpdate == "function" &&
                  l.componentWillUpdate(t, b, c),
                typeof l.UNSAFE_componentWillUpdate == "function" &&
                  l.UNSAFE_componentWillUpdate(t, b, c)),
              typeof l.componentDidUpdate == "function" && (r.flags |= 4),
              typeof l.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof l.componentDidUpdate != "function" ||
                (i === n.memoizedProps && Q === n.memoizedState) ||
                (r.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != "function" ||
                (i === n.memoizedProps && Q === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = t),
              (r.memoizedState = b)),
          (l.props = t),
          (l.state = b),
          (l.context = c),
          (t = h))
        : (typeof l.componentDidUpdate != "function" ||
            (i === n.memoizedProps && Q === n.memoizedState) ||
            (r.flags |= 4),
          typeof l.getSnapshotBeforeUpdate != "function" ||
            (i === n.memoizedProps && Q === n.memoizedState) ||
            (r.flags |= 1024),
          (t = !1));
    }
    return (
      (l = t),
      fl(n, r),
      (t = (r.flags & 128) !== 0),
      l || t
        ? ((l = r.stateNode),
          (e =
            t && typeof e.getDerivedStateFromError != "function"
              ? null
              : l.render()),
          (r.flags |= 1),
          n !== null && t
            ? ((r.child = Ne(r, n.child, null, a)),
              (r.child = Ne(r, null, e, a)))
            : In(n, r, e, a),
          (r.memoizedState = l.state),
          (n = r.child))
        : (n = Ir(n, r, a)),
      n
    );
  }
  function Ru(n, r, e, t) {
    return (Ae(), (r.flags |= 256), In(n, r, e, t), r.child);
  }
  var mo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function fo(n) {
    return { baseLanes: n, cachePool: Us() };
  }
  function po(n, r, e) {
    return ((n = n !== null ? n.childLanes & ~e : 0), r && (n |= yr), n);
  }
  function Wu(n, r, e) {
    var t = r.pendingProps,
      a = !1,
      l = (r.flags & 128) !== 0,
      i;
    if (
      ((i = l) ||
        (i =
          n !== null && n.memoizedState === null ? !1 : (zn.current & 2) !== 0),
      i && ((a = !0), (r.flags &= -129)),
      (i = (r.flags & 32) !== 0),
      (r.flags &= -33),
      n === null)
    ) {
      if (dn) {
        if (
          (a ? pe(r) : Qe(),
          (n = On)
            ? ((n = Yd(n, _r)),
              (n = n !== null && n.data !== "&" ? n : null),
              n !== null &&
                ((r.memoizedState = {
                  dehydrated: n,
                  treeContext: ce !== null ? { id: Wr, overflow: Ar } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = ps(n)),
                (e.return = r),
                (r.child = e),
                (Jn = r),
                (On = null)))
            : (n = null),
          n === null)
        )
          throw ue(r);
        return (Ko(n) ? (r.lanes = 32) : (r.lanes = 536870912), null);
      }
      var o = t.children;
      return (
        (t = t.fallback),
        a
          ? (Qe(),
            (a = r.mode),
            (o = pl({ mode: "hidden", children: o }, a)),
            (t = We(t, a, e, null)),
            (o.return = r),
            (t.return = r),
            (o.sibling = t),
            (r.child = o),
            (t = r.child),
            (t.memoizedState = fo(e)),
            (t.childLanes = po(n, i, e)),
            (r.memoizedState = mo),
            ia(null, t))
          : (pe(r), Qo(r, o))
      );
    }
    var c = n.memoizedState;
    if (c !== null && ((o = c.dehydrated), o !== null)) {
      if (l)
        r.flags & 256
          ? (pe(r), (r.flags &= -257), (r = bo(n, r, e)))
          : r.memoizedState !== null
            ? (Qe(), (r.child = n.child), (r.flags |= 128), (r = null))
            : (Qe(),
              (o = t.fallback),
              (a = r.mode),
              (t = pl({ mode: "visible", children: t.children }, a)),
              (o = We(o, a, e, null)),
              (o.flags |= 2),
              (t.return = r),
              (o.return = r),
              (t.sibling = o),
              (r.child = t),
              Ne(r, n.child, null, e),
              (t = r.child),
              (t.memoizedState = fo(e)),
              (t.childLanes = po(n, i, e)),
              (r.memoizedState = mo),
              (r = ia(null, t)));
      else if ((pe(r), Ko(o))) {
        if (((i = o.nextSibling && o.nextSibling.dataset), i)) var f = i.dgst;
        ((i = f),
          (t = Error(d(419))),
          (t.stack = ""),
          (t.digest = i),
          Jt({ value: t, source: null, stack: null }),
          (r = bo(n, r, e)));
      } else if (
        (Dn || xt(n, r, e, !1), (i = (e & n.childLanes) !== 0), Dn || i)
      ) {
        if (
          ((i = Un),
          i !== null && ((t = gc(i, e)), t !== 0 && t !== c.retryLane))
        )
          throw ((c.retryLane = t), Re(n, t), sr(i, n, t), uo);
        (Io(o) || Ul(), (r = bo(n, r, e)));
      } else
        Io(o)
          ? ((r.flags |= 192), (r.child = n.child), (r = null))
          : ((n = c.treeContext),
            (On = jr(o.nextSibling)),
            (Jn = r),
            (dn = !0),
            (se = null),
            (_r = !1),
            n !== null && vs(r, n),
            (r = Qo(r, t.children)),
            (r.flags |= 4096));
      return r;
    }
    return a
      ? (Qe(),
        (o = t.fallback),
        (a = r.mode),
        (c = n.child),
        (f = c.sibling),
        (t = Yr(c, { mode: "hidden", children: t.children })),
        (t.subtreeFlags = c.subtreeFlags & 65011712),
        f !== null ? (o = Yr(f, o)) : ((o = We(o, a, e, null)), (o.flags |= 2)),
        (o.return = r),
        (t.return = r),
        (t.sibling = o),
        (r.child = t),
        ia(null, t),
        (t = r.child),
        (o = n.child.memoizedState),
        o === null
          ? (o = fo(e))
          : ((a = o.cachePool),
            a !== null
              ? ((c = An._currentValue),
                (a = a.parent !== c ? { parent: c, pool: c } : a))
              : (a = Us()),
            (o = { baseLanes: o.baseLanes | e, cachePool: a })),
        (t.memoizedState = o),
        (t.childLanes = po(n, i, e)),
        (r.memoizedState = mo),
        ia(n.child, t))
      : (pe(r),
        (e = n.child),
        (n = e.sibling),
        (e = Yr(e, { mode: "visible", children: t.children })),
        (e.return = r),
        (e.sibling = null),
        n !== null &&
          ((i = r.deletions),
          i === null ? ((r.deletions = [n]), (r.flags |= 16)) : i.push(n)),
        (r.child = e),
        (r.memoizedState = null),
        e);
  }
  function Qo(n, r) {
    return (
      (r = pl({ mode: "visible", children: r }, n.mode)),
      (r.return = n),
      (n.child = r)
    );
  }
  function pl(n, r) {
    return ((n = Qr(22, n, null, r)), (n.lanes = 0), n);
  }
  function bo(n, r, e) {
    return (
      Ne(r, n.child, null, e),
      (n = Qo(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function Au(n, r, e) {
    n.lanes |= r;
    var t = n.alternate;
    (t !== null && (t.lanes |= r), ji(n.return, r, e));
  }
  function vo(n, r, e, t, a, l) {
    var i = n.memoizedState;
    i === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: t,
          tail: e,
          tailMode: a,
          treeForkCount: l,
        })
      : ((i.isBackwards = r),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = t),
        (i.tail = e),
        (i.tailMode = a),
        (i.treeForkCount = l));
  }
  function Mu(n, r, e) {
    var t = r.pendingProps,
      a = t.revealOrder,
      l = t.tail;
    t = t.children;
    var i = zn.current,
      o = (i & 2) !== 0;
    if (
      (o ? ((i = (i & 1) | 2), (r.flags |= 128)) : (i &= 1),
      E(zn, i),
      In(n, r, t, e),
      (t = dn ? Xt : 0),
      !o && n !== null && (n.flags & 128) !== 0)
    )
      n: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Au(n, e, r);
        else if (n.tag === 19) Au(n, e, r);
        else if (n.child !== null) {
          ((n.child.return = n), (n = n.child));
          continue;
        }
        if (n === r) break n;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break n;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    switch (a) {
      case "forwards":
        for (e = r.child, a = null; e !== null; )
          ((n = e.alternate),
            n !== null && tl(n) === null && (a = e),
            (e = e.sibling));
        ((e = a),
          e === null
            ? ((a = r.child), (r.child = null))
            : ((a = e.sibling), (e.sibling = null)),
          vo(r, !1, a, e, l, t));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, a = r.child, r.child = null; a !== null; ) {
          if (((n = a.alternate), n !== null && tl(n) === null)) {
            r.child = a;
            break;
          }
          ((n = a.sibling), (a.sibling = e), (e = a), (a = n));
        }
        vo(r, !0, e, null, l, t);
        break;
      case "together":
        vo(r, !1, null, null, void 0, t);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ir(n, r, e) {
    if (
      (n !== null && (r.dependencies = n.dependencies),
      (he |= r.lanes),
      (e & r.childLanes) === 0)
    )
      if (n !== null) {
        if ((xt(n, r, e, !1), (e & r.childLanes) === 0)) return null;
      } else return null;
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (
        n = r.child, e = Yr(n, n.pendingProps), r.child = e, e.return = r;
        n.sibling !== null;
      )
        ((n = n.sibling),
          (e = e.sibling = Yr(n, n.pendingProps)),
          (e.return = r));
      e.sibling = null;
    }
    return r.child;
  }
  function ho(n, r) {
    return (n.lanes & r) !== 0
      ? !0
      : ((n = n.dependencies), !!(n !== null && qa(n)));
  }
  function qm(n, r, e) {
    switch (r.tag) {
      case 3:
        (sn(r, r.stateNode.containerInfo),
          de(r, An, n.memoizedState.cache),
          Ae());
        break;
      case 27:
      case 5:
        er(r);
        break;
      case 4:
        sn(r, r.stateNode.containerInfo);
        break;
      case 10:
        de(r, r.type, r.memoizedProps.value);
        break;
      case 31:
        if (r.memoizedState !== null) return ((r.flags |= 128), Ni(r), null);
        break;
      case 13:
        var t = r.memoizedState;
        if (t !== null)
          return t.dehydrated !== null
            ? (pe(r), (r.flags |= 128), null)
            : (e & r.child.childLanes) !== 0
              ? Wu(n, r, e)
              : (pe(r), (n = Ir(n, r, e)), n !== null ? n.sibling : null);
        pe(r);
        break;
      case 19:
        var a = (n.flags & 128) !== 0;
        if (
          ((t = (e & r.childLanes) !== 0),
          t || (xt(n, r, e, !1), (t = (e & r.childLanes) !== 0)),
          a)
        ) {
          if (t) return Mu(n, r, e);
          r.flags |= 128;
        }
        if (
          ((a = r.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          E(zn, zn.current),
          t)
        )
          break;
        return null;
      case 22:
        return ((r.lanes = 0), Tu(n, r, e, r.pendingProps));
      case 24:
        de(r, An, n.memoizedState.cache);
    }
    return Ir(n, r, e);
  }
  function Du(n, r, e) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps) Dn = !0;
      else {
        if (!ho(n, e) && (r.flags & 128) === 0) return ((Dn = !1), qm(n, r, e));
        Dn = (n.flags & 131072) !== 0;
      }
    else ((Dn = !1), dn && (r.flags & 1048576) !== 0 && bs(r, Xt, r.index));
    switch (((r.lanes = 0), r.tag)) {
      case 16:
        n: {
          var t = r.pendingProps;
          if (((n = Ze(r.elementType)), (r.type = n), typeof n == "function"))
            Fi(n)
              ? ((t = Le(n, t)), (r.tag = 1), (r = zu(null, r, n, t, e)))
              : ((r.tag = 0), (r = xo(null, r, n, t, e)));
          else {
            if (n != null) {
              var a = n.$$typeof;
              if (a === Hn) {
                ((r.tag = 11), (r = ku(null, r, n, t, e)));
                break n;
              } else if (a === q) {
                ((r.tag = 14), (r = Eu(null, r, n, t, e)));
                break n;
              }
            }
            throw ((r = Z(n) || n), Error(d(306, r, "")));
          }
        }
        return r;
      case 0:
        return xo(n, r, r.type, r.pendingProps, e);
      case 1:
        return ((t = r.type), (a = Le(t, r.pendingProps)), zu(n, r, t, a, e));
      case 3:
        n: {
          if ((sn(r, r.stateNode.containerInfo), n === null))
            throw Error(d(387));
          t = r.pendingProps;
          var l = r.memoizedState;
          ((a = l.element), Mi(n, r), ra(r, t, null, e));
          var i = r.memoizedState;
          if (
            ((t = i.cache),
            de(r, An, t),
            t !== l.cache && Si(r, [An], e, !0),
            na(),
            (t = i.element),
            l.isDehydrated)
          )
            if (
              ((l = { element: t, isDehydrated: !1, cache: i.cache }),
              (r.updateQueue.baseState = l),
              (r.memoizedState = l),
              r.flags & 256)
            ) {
              r = Ru(n, r, t, e);
              break n;
            } else if (t !== a) {
              ((a = Or(Error(d(424)), r)), Jt(a), (r = Ru(n, r, t, e)));
              break n;
            } else
              for (
                n = r.stateNode.containerInfo,
                  n.nodeType === 9
                    ? (n = n.body)
                    : (n = n.nodeName === "HTML" ? n.ownerDocument.body : n),
                  On = jr(n.firstChild),
                  Jn = r,
                  dn = !0,
                  se = null,
                  _r = !0,
                  e = Ts(r, null, t, e),
                  r.child = e;
                e;
              )
                ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
          else {
            if ((Ae(), t === a)) {
              r = Ir(n, r, e);
              break n;
            }
            In(n, r, t, e);
          }
          r = r.child;
        }
        return r;
      case 26:
        return (
          fl(n, r),
          n === null
            ? (e = Id(r.type, null, r.pendingProps, null))
              ? (r.memoizedState = e)
              : dn ||
                ((e = r.type),
                (n = r.pendingProps),
                (t = jl(Y.current).createElement(e)),
                (t[Xn] = r),
                (t[tr] = n),
                Kn(t, e, n),
                Yn(t),
                (r.stateNode = t))
            : (r.memoizedState = Id(
                r.type,
                n.memoizedProps,
                r.pendingProps,
                n.memoizedState,
              )),
          null
        );
      case 27:
        return (
          er(r),
          n === null &&
            dn &&
            ((t = r.stateNode = Xd(r.type, r.pendingProps, Y.current)),
            (Jn = r),
            (_r = !0),
            (a = On),
            Ue(r.type) ? (($o = a), (On = jr(t.firstChild))) : (On = a)),
          In(n, r, r.pendingProps.children, e),
          fl(n, r),
          n === null && (r.flags |= 4194304),
          r.child
        );
      case 5:
        return (
          n === null &&
            dn &&
            ((a = t = On) &&
              ((t = Of(t, r.type, r.pendingProps, _r)),
              t !== null
                ? ((r.stateNode = t),
                  (Jn = r),
                  (On = jr(t.firstChild)),
                  (_r = !1),
                  (a = !0))
                : (a = !1)),
            a || ue(r)),
          er(r),
          (a = r.type),
          (l = r.pendingProps),
          (i = n !== null ? n.memoizedProps : null),
          (t = l.children),
          Xo(a, l) ? (t = null) : i !== null && Xo(a, i) && (r.flags |= 32),
          r.memoizedState !== null &&
            ((a = Li(n, r, Vm, null, null, e)), (Ba._currentValue = a)),
          fl(n, r),
          In(n, r, t, e),
          r.child
        );
      case 6:
        return (
          n === null &&
            dn &&
            ((n = e = On) &&
              ((e = kf(e, r.pendingProps, _r)),
              e !== null
                ? ((r.stateNode = e), (Jn = r), (On = null), (n = !0))
                : (n = !1)),
            n || ue(r)),
          null
        );
      case 13:
        return Wu(n, r, e);
      case 4:
        return (
          sn(r, r.stateNode.containerInfo),
          (t = r.pendingProps),
          n === null ? (r.child = Ne(r, null, t, e)) : In(n, r, t, e),
          r.child
        );
      case 11:
        return ku(n, r, r.type, r.pendingProps, e);
      case 7:
        return (In(n, r, r.pendingProps, e), r.child);
      case 8:
        return (In(n, r, r.pendingProps.children, e), r.child);
      case 12:
        return (In(n, r, r.pendingProps.children, e), r.child);
      case 10:
        return (
          (t = r.pendingProps),
          de(r, r.type, t.value),
          In(n, r, t.children, e),
          r.child
        );
      case 9:
        return (
          (a = r.type._context),
          (t = r.pendingProps.children),
          De(r),
          (a = qn(a)),
          (t = t(a)),
          (r.flags |= 1),
          In(n, r, t, e),
          r.child
        );
      case 14:
        return Eu(n, r, r.type, r.pendingProps, e);
      case 15:
        return _u(n, r, r.type, r.pendingProps, e);
      case 19:
        return Mu(n, r, e);
      case 31:
        return Jm(n, r, e);
      case 22:
        return Tu(n, r, e, r.pendingProps);
      case 24:
        return (
          De(r),
          (t = qn(An)),
          n === null
            ? ((a = Ri()),
              a === null &&
                ((a = Un),
                (l = Ci()),
                (a.pooledCache = l),
                l.refCount++,
                l !== null && (a.pooledCacheLanes |= e),
                (a = l)),
              (r.memoizedState = { parent: t, cache: a }),
              Ai(r),
              de(r, An, a))
            : ((n.lanes & e) !== 0 && (Mi(n, r), ra(r, null, null, e), na()),
              (a = n.memoizedState),
              (l = r.memoizedState),
              a.parent !== t
                ? ((a = { parent: t, cache: t }),
                  (r.memoizedState = a),
                  r.lanes === 0 &&
                    (r.memoizedState = r.updateQueue.baseState = a),
                  de(r, An, t))
                : ((t = l.cache),
                  de(r, An, t),
                  t !== a.cache && Si(r, [An], e, !0))),
          In(n, r, r.pendingProps.children, e),
          r.child
        );
      case 29:
        throw r.pendingProps;
    }
    throw Error(d(156, r.tag));
  }
  function Kr(n) {
    n.flags |= 4;
  }
  function yo(n, r, e, t, a) {
    if (((r = (n.mode & 32) !== 0) && (r = !1), r)) {
      if (((n.flags |= 16777216), (a & 335544128) === a))
        if (n.stateNode.complete) n.flags |= 8192;
        else if (xd()) n.flags |= 8192;
        else throw ((He = Pa), Wi);
    } else n.flags &= -16777217;
  }
  function Vu(n, r) {
    if (r.type !== "stylesheet" || (r.state.loading & 4) !== 0)
      n.flags &= -16777217;
    else if (((n.flags |= 16777216), !rx(r)))
      if (xd()) n.flags |= 8192;
      else throw ((He = Pa), Wi);
  }
  function Ql(n, r) {
    (r !== null && (n.flags |= 4),
      n.flags & 16384 &&
        ((r = n.tag !== 22 ? hc() : 536870912), (n.lanes |= r), (Ut |= r)));
  }
  function oa(n, r) {
    if (!dn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var e = null; r !== null; )
            (r.alternate !== null && (e = r), (r = r.sibling));
          e === null ? (n.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = n.tail;
          for (var t = null; e !== null; )
            (e.alternate !== null && (t = e), (e = e.sibling));
          t === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (t.sibling = null);
      }
  }
  function kn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      e = 0,
      t = 0;
    if (r)
      for (var a = n.child; a !== null; )
        ((e |= a.lanes | a.childLanes),
          (t |= a.subtreeFlags & 65011712),
          (t |= a.flags & 65011712),
          (a.return = n),
          (a = a.sibling));
    else
      for (a = n.child; a !== null; )
        ((e |= a.lanes | a.childLanes),
          (t |= a.subtreeFlags),
          (t |= a.flags),
          (a.return = n),
          (a = a.sibling));
    return ((n.subtreeFlags |= t), (n.childLanes = e), r);
  }
  function Im(n, r, e) {
    var t = r.pendingProps;
    switch ((ki(r), r.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (kn(r), null);
      case 1:
        return (kn(r), null);
      case 3:
        return (
          (e = r.stateNode),
          (t = null),
          n !== null && (t = n.memoizedState.cache),
          r.memoizedState.cache !== t && (r.flags |= 2048),
          Xr(An),
          un(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (n === null || n.child === null) &&
            (dt(r)
              ? Kr(r)
              : n === null ||
                (n.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), _i())),
          kn(r),
          null
        );
      case 26:
        var a = r.type,
          l = r.memoizedState;
        return (
          n === null
            ? (Kr(r),
              l !== null ? (kn(r), Vu(r, l)) : (kn(r), yo(r, a, null, t, e)))
            : l
              ? l !== n.memoizedState
                ? (Kr(r), kn(r), Vu(r, l))
                : (kn(r), (r.flags &= -16777217))
              : ((n = n.memoizedProps),
                n !== t && Kr(r),
                kn(r),
                yo(r, a, n, t, e)),
          null
        );
      case 27:
        if (
          (ur(r),
          (e = Y.current),
          (a = r.type),
          n !== null && r.stateNode != null)
        )
          n.memoizedProps !== t && Kr(r);
        else {
          if (!t) {
            if (r.stateNode === null) throw Error(d(166));
            return (kn(r), null);
          }
          ((n = j.current),
            dt(r) ? hs(r) : ((n = Xd(a, t, e)), (r.stateNode = n), Kr(r)));
        }
        return (kn(r), null);
      case 5:
        if ((ur(r), (a = r.type), n !== null && r.stateNode != null))
          n.memoizedProps !== t && Kr(r);
        else {
          if (!t) {
            if (r.stateNode === null) throw Error(d(166));
            return (kn(r), null);
          }
          if (((l = j.current), dt(r))) hs(r);
          else {
            var i = jl(Y.current);
            switch (l) {
              case 1:
                l = i.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = i.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    ((l = i.createElement("div")),
                      (l.innerHTML = "<script><\/script>"),
                      (l = l.removeChild(l.firstChild)));
                    break;
                  case "select":
                    ((l =
                      typeof t.is == "string"
                        ? i.createElement("select", { is: t.is })
                        : i.createElement("select")),
                      t.multiple
                        ? (l.multiple = !0)
                        : t.size && (l.size = t.size));
                    break;
                  default:
                    l =
                      typeof t.is == "string"
                        ? i.createElement(a, { is: t.is })
                        : i.createElement(a);
                }
            }
            ((l[Xn] = r), (l[tr] = t));
            n: for (i = r.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) l.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === r) break n;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === r) break n;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            r.stateNode = l;
            n: switch ((Kn(l, a, t), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!t.autoFocus;
                break n;
              case "img":
                t = !0;
                break n;
              default:
                t = !1;
            }
            t && Kr(r);
          }
        }
        return (
          kn(r),
          yo(r, r.type, n === null ? null : n.memoizedProps, r.pendingProps, e),
          null
        );
      case 6:
        if (n && r.stateNode != null) n.memoizedProps !== t && Kr(r);
        else {
          if (typeof t != "string" && r.stateNode === null) throw Error(d(166));
          if (((n = Y.current), dt(r))) {
            if (
              ((n = r.stateNode),
              (e = r.memoizedProps),
              (t = null),
              (a = Jn),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  t = a.memoizedProps;
              }
            ((n[Xn] = r),
              (n = !!(
                n.nodeValue === e ||
                (t !== null && t.suppressHydrationWarning === !0) ||
                Wd(n.nodeValue, e)
              )),
              n || ue(r, !0));
          } else
            ((n = jl(n).createTextNode(t)), (n[Xn] = r), (r.stateNode = n));
        }
        return (kn(r), null);
      case 31:
        if (((e = r.memoizedState), n === null || n.memoizedState !== null)) {
          if (((t = dt(r)), e !== null)) {
            if (n === null) {
              if (!t) throw Error(d(318));
              if (
                ((n = r.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(d(557));
              n[Xn] = r;
            } else
              (Ae(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4));
            (kn(r), (n = !1));
          } else
            ((e = _i()),
              n !== null &&
                n.memoizedState !== null &&
                (n.memoizedState.hydrationErrors = e),
              (n = !0));
          if (!n) return r.flags & 256 ? (vr(r), r) : (vr(r), null);
          if ((r.flags & 128) !== 0) throw Error(d(558));
        }
        return (kn(r), null);
      case 13:
        if (
          ((t = r.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (((a = dt(r)), t !== null && t.dehydrated !== null)) {
            if (n === null) {
              if (!a) throw Error(d(318));
              if (
                ((a = r.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(d(317));
              a[Xn] = r;
            } else
              (Ae(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4));
            (kn(r), (a = !1));
          } else
            ((a = _i()),
              n !== null &&
                n.memoizedState !== null &&
                (n.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return r.flags & 256 ? (vr(r), r) : (vr(r), null);
        }
        return (
          vr(r),
          (r.flags & 128) !== 0
            ? ((r.lanes = e), r)
            : ((e = t !== null),
              (n = n !== null && n.memoizedState !== null),
              e &&
                ((t = r.child),
                (a = null),
                t.alternate !== null &&
                  t.alternate.memoizedState !== null &&
                  t.alternate.memoizedState.cachePool !== null &&
                  (a = t.alternate.memoizedState.cachePool.pool),
                (l = null),
                t.memoizedState !== null &&
                  t.memoizedState.cachePool !== null &&
                  (l = t.memoizedState.cachePool.pool),
                l !== a && (t.flags |= 2048)),
              e !== n && e && (r.child.flags |= 8192),
              Ql(r, r.updateQueue),
              kn(r),
              null)
        );
      case 4:
        return (un(), n === null && Ho(r.stateNode.containerInfo), kn(r), null);
      case 10:
        return (Xr(r.type), kn(r), null);
      case 19:
        if ((B(zn), (t = r.memoizedState), t === null)) return (kn(r), null);
        if (((a = (r.flags & 128) !== 0), (l = t.rendering), l === null))
          if (a) oa(t, !1);
          else {
            if (Cn !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = r.child; n !== null; ) {
                if (((l = tl(n)), l !== null)) {
                  for (
                    r.flags |= 128,
                      oa(t, !1),
                      n = l.updateQueue,
                      r.updateQueue = n,
                      Ql(r, n),
                      r.subtreeFlags = 0,
                      n = e,
                      e = r.child;
                    e !== null;
                  )
                    (fs(e, n), (e = e.sibling));
                  return (
                    E(zn, (zn.current & 1) | 2),
                    dn && Lr(r, t.treeForkCount),
                    r.child
                  );
                }
                n = n.sibling;
              }
            t.tail !== null &&
              xr() > Bl &&
              ((r.flags |= 128), (a = !0), oa(t, !1), (r.lanes = 4194304));
          }
        else {
          if (!a)
            if (((n = tl(l)), n !== null)) {
              if (
                ((r.flags |= 128),
                (a = !0),
                (n = n.updateQueue),
                (r.updateQueue = n),
                Ql(r, n),
                oa(t, !0),
                t.tail === null &&
                  t.tailMode === "hidden" &&
                  !l.alternate &&
                  !dn)
              )
                return (kn(r), null);
            } else
              2 * xr() - t.renderingStartTime > Bl &&
                e !== 536870912 &&
                ((r.flags |= 128), (a = !0), oa(t, !1), (r.lanes = 4194304));
          t.isBackwards
            ? ((l.sibling = r.child), (r.child = l))
            : ((n = t.last),
              n !== null ? (n.sibling = l) : (r.child = l),
              (t.last = l));
        }
        return t.tail !== null
          ? ((n = t.tail),
            (t.rendering = n),
            (t.tail = n.sibling),
            (t.renderingStartTime = xr()),
            (n.sibling = null),
            (e = zn.current),
            E(zn, a ? (e & 1) | 2 : e & 1),
            dn && Lr(r, t.treeForkCount),
            n)
          : (kn(r), null);
      case 22:
      case 23:
        return (
          vr(r),
          Hi(),
          (t = r.memoizedState !== null),
          n !== null
            ? (n.memoizedState !== null) !== t && (r.flags |= 8192)
            : t && (r.flags |= 8192),
          t
            ? (e & 536870912) !== 0 &&
              (r.flags & 128) === 0 &&
              (kn(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : kn(r),
          (e = r.updateQueue),
          e !== null && Ql(r, e.retryQueue),
          (e = null),
          n !== null &&
            n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (e = n.memoizedState.cachePool.pool),
          (t = null),
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (t = r.memoizedState.cachePool.pool),
          t !== e && (r.flags |= 2048),
          n !== null && B(Ve),
          null
        );
      case 24:
        return (
          (e = null),
          n !== null && (e = n.memoizedState.cache),
          r.memoizedState.cache !== e && (r.flags |= 2048),
          Xr(An),
          kn(r),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function Km(n, r) {
    switch ((ki(r), r.tag)) {
      case 1:
        return (
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 3:
        return (
          Xr(An),
          un(),
          (n = r.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((r.flags = (n & -65537) | 128), r)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ur(r), null);
      case 31:
        if (r.memoizedState !== null) {
          if ((vr(r), r.alternate === null)) throw Error(d(340));
          Ae();
        }
        return (
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 13:
        if (
          (vr(r), (n = r.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(d(340));
          Ae();
        }
        return (
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 19:
        return (B(zn), null);
      case 4:
        return (un(), null);
      case 10:
        return (Xr(r.type), null);
      case 22:
      case 23:
        return (
          vr(r),
          Hi(),
          n !== null && B(Ve),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 24:
        return (Xr(An), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zu(n, r) {
    switch ((ki(r), r.tag)) {
      case 3:
        (Xr(An), un());
        break;
      case 26:
      case 27:
      case 5:
        ur(r);
        break;
      case 4:
        un();
        break;
      case 31:
        r.memoizedState !== null && vr(r);
        break;
      case 13:
        vr(r);
        break;
      case 19:
        B(zn);
        break;
      case 10:
        Xr(r.type);
        break;
      case 22:
      case 23:
        (vr(r), Hi(), n !== null && B(Ve));
        break;
      case 24:
        Xr(An);
    }
  }
  function ca(n, r) {
    try {
      var e = r.updateQueue,
        t = e !== null ? e.lastEffect : null;
      if (t !== null) {
        var a = t.next;
        e = a;
        do {
          if ((e.tag & n) === n) {
            t = void 0;
            var l = e.create,
              i = e.inst;
            ((t = l()), (i.destroy = t));
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (o) {
      vn(r, r.return, o);
    }
  }
  function be(n, r, e) {
    try {
      var t = r.updateQueue,
        a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        t = l;
        do {
          if ((t.tag & n) === n) {
            var i = t.inst,
              o = i.destroy;
            if (o !== void 0) {
              ((i.destroy = void 0), (a = r));
              var c = e,
                f = o;
              try {
                f();
              } catch (h) {
                vn(a, c, h);
              }
            }
          }
          t = t.next;
        } while (t !== l);
      }
    } catch (h) {
      vn(r, r.return, h);
    }
  }
  function Hu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      var e = n.stateNode;
      try {
        Ss(r, e);
      } catch (t) {
        vn(n, n.return, t);
      }
    }
  }
  function Nu(n, r, e) {
    ((e.props = Le(n.type, n.memoizedProps)), (e.state = n.memoizedState));
    try {
      e.componentWillUnmount();
    } catch (t) {
      vn(n, r, t);
    }
  }
  function sa(n, r) {
    try {
      var e = n.ref;
      if (e !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var t = n.stateNode;
            break;
          case 30:
            t = n.stateNode;
            break;
          default:
            t = n.stateNode;
        }
        typeof e == "function" ? (n.refCleanup = e(t)) : (e.current = t);
      }
    } catch (a) {
      vn(n, r, a);
    }
  }
  function Mr(n, r) {
    var e = n.ref,
      t = n.refCleanup;
    if (e !== null)
      if (typeof t == "function")
        try {
          t();
        } catch (a) {
          vn(n, r, a);
        } finally {
          ((n.refCleanup = null),
            (n = n.alternate),
            n != null && (n.refCleanup = null));
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (a) {
          vn(n, r, a);
        }
      else e.current = null;
  }
  function Yu(n) {
    var r = n.type,
      e = n.memoizedProps,
      t = n.stateNode;
    try {
      n: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && t.focus();
          break n;
        case "img":
          e.src ? (t.src = e.src) : e.srcSet && (t.srcset = e.srcSet);
      }
    } catch (a) {
      vn(n, n.return, a);
    }
  }
  function Bo(n, r, e) {
    try {
      var t = n.stateNode;
      (yf(t, n.type, e, r), (t[tr] = r));
    } catch (a) {
      vn(n, n.return, a);
    }
  }
  function Lu(n) {
    return (
      n.tag === 5 ||
      n.tag === 3 ||
      n.tag === 26 ||
      (n.tag === 27 && Ue(n.type)) ||
      n.tag === 4
    );
  }
  function go(n) {
    n: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Lu(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;
      ) {
        if (
          (n.tag === 27 && Ue(n.type)) ||
          n.flags & 2 ||
          n.child === null ||
          n.tag === 4
        )
          continue n;
        ((n.child.return = n), (n = n.child));
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Fo(n, r, e) {
    var t = n.tag;
    if (t === 5 || t === 6)
      ((n = n.stateNode),
        r
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e
            ).insertBefore(n, r)
          : ((r =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            r.appendChild(n),
            (e = e._reactRootContainer),
            e != null || r.onclick !== null || (r.onclick = Hr)));
    else if (
      t !== 4 &&
      (t === 27 && Ue(n.type) && ((e = n.stateNode), (r = null)),
      (n = n.child),
      n !== null)
    )
      for (Fo(n, r, e), n = n.sibling; n !== null; )
        (Fo(n, r, e), (n = n.sibling));
  }
  function bl(n, r, e) {
    var t = n.tag;
    if (t === 5 || t === 6)
      ((n = n.stateNode), r ? e.insertBefore(n, r) : e.appendChild(n));
    else if (
      t !== 4 &&
      (t === 27 && Ue(n.type) && (e = n.stateNode), (n = n.child), n !== null)
    )
      for (bl(n, r, e), n = n.sibling; n !== null; )
        (bl(n, r, e), (n = n.sibling));
  }
  function Gu(n) {
    var r = n.stateNode,
      e = n.memoizedProps;
    try {
      for (var t = n.type, a = r.attributes; a.length; )
        r.removeAttributeNode(a[0]);
      (Kn(r, t, e), (r[Xn] = n), (r[tr] = e));
    } catch (l) {
      vn(n, n.return, l);
    }
  }
  var $r = !1,
    Vn = !1,
    Uo = !1,
    Xu = typeof WeakSet == "function" ? WeakSet : Set,
    Ln = null;
  function $m(n, r) {
    if (((n = n.containerInfo), (Lo = Ml), (n = ls(n)), Qi(n))) {
      if ("selectionStart" in n)
        var e = { start: n.selectionStart, end: n.selectionEnd };
      else
        n: {
          e = ((e = n.ownerDocument) && e.defaultView) || window;
          var t = e.getSelection && e.getSelection();
          if (t && t.rangeCount !== 0) {
            e = t.anchorNode;
            var a = t.anchorOffset,
              l = t.focusNode;
            t = t.focusOffset;
            try {
              (e.nodeType, l.nodeType);
            } catch {
              e = null;
              break n;
            }
            var i = 0,
              o = -1,
              c = -1,
              f = 0,
              h = 0,
              g = n,
              Q = null;
            r: for (;;) {
              for (
                var b;
                g !== e || (a !== 0 && g.nodeType !== 3) || (o = i + a),
                  g !== l || (t !== 0 && g.nodeType !== 3) || (c = i + t),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (b = g.firstChild) !== null;
              )
                ((Q = g), (g = b));
              for (;;) {
                if (g === n) break r;
                if (
                  (Q === e && ++f === a && (o = i),
                  Q === l && ++h === t && (c = i),
                  (b = g.nextSibling) !== null)
                )
                  break;
                ((g = Q), (Q = g.parentNode));
              }
              g = b;
            }
            e = o === -1 || c === -1 ? null : { start: o, end: c };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Go = { focusedElem: n, selectionRange: e }, Ml = !1, Ln = r;
      Ln !== null;
    )
      if (
        ((r = Ln), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null)
      )
        ((n.return = r), (Ln = n));
      else
        for (; Ln !== null; ) {
          switch (((r = Ln), (l = r.alternate), (n = r.flags), r.tag)) {
            case 0:
              if (
                (n & 4) !== 0 &&
                ((n = r.updateQueue),
                (n = n !== null ? n.events : null),
                n !== null)
              )
                for (e = 0; e < n.length; e++)
                  ((a = n[e]), (a.ref.impl = a.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && l !== null) {
                ((n = void 0),
                  (e = r),
                  (a = l.memoizedProps),
                  (l = l.memoizedState),
                  (t = e.stateNode));
                try {
                  var z = Le(e.type, a);
                  ((n = t.getSnapshotBeforeUpdate(z, l)),
                    (t.__reactInternalSnapshotBeforeUpdate = n));
                } catch (N) {
                  vn(e, e.return, N);
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (
                  ((n = r.stateNode.containerInfo), (e = n.nodeType), e === 9)
                )
                  qo(n);
                else if (e === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qo(n);
                      break;
                    default:
                      n.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((n & 1024) !== 0) throw Error(d(163));
          }
          if (((n = r.sibling), n !== null)) {
            ((n.return = r.return), (Ln = n));
            break;
          }
          Ln = r.return;
        }
  }
  function Ju(n, r, e) {
    var t = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ne(n, e), t & 4 && ca(5, e));
        break;
      case 1:
        if ((ne(n, e), t & 4))
          if (((n = e.stateNode), r === null))
            try {
              n.componentDidMount();
            } catch (i) {
              vn(e, e.return, i);
            }
          else {
            var a = Le(e.type, r.memoizedProps);
            r = r.memoizedState;
            try {
              n.componentDidUpdate(a, r, n.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              vn(e, e.return, i);
            }
          }
        (t & 64 && Hu(e), t & 512 && sa(e, e.return));
        break;
      case 3:
        if ((ne(n, e), t & 64 && ((n = e.updateQueue), n !== null))) {
          if (((r = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                r = e.child.stateNode;
                break;
              case 1:
                r = e.child.stateNode;
            }
          try {
            Ss(n, r);
          } catch (i) {
            vn(e, e.return, i);
          }
        }
        break;
      case 27:
        r === null && t & 4 && Gu(e);
      case 26:
      case 5:
        (ne(n, e), r === null && t & 4 && Yu(e), t & 512 && sa(e, e.return));
        break;
      case 12:
        ne(n, e);
        break;
      case 31:
        (ne(n, e), t & 4 && Ku(n, e));
        break;
      case 13:
        (ne(n, e),
          t & 4 && $u(n, e),
          t & 64 &&
            ((n = e.memoizedState),
            n !== null &&
              ((n = n.dehydrated),
              n !== null && ((e = cf.bind(null, e)), Ef(n, e)))));
        break;
      case 22:
        if (((t = e.memoizedState !== null || $r), !t)) {
          ((r = (r !== null && r.memoizedState !== null) || Vn), (a = $r));
          var l = Vn;
          (($r = t),
            (Vn = r) && !l ? re(n, e, (e.subtreeFlags & 8772) !== 0) : ne(n, e),
            ($r = a),
            (Vn = l));
        }
        break;
      case 30:
        break;
      default:
        ne(n, e);
    }
  }
  function qu(n) {
    var r = n.alternate;
    (r !== null && ((n.alternate = null), qu(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 && ((r = n.stateNode), r !== null && Pl(r)),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null));
  }
  var En = null,
    lr = !1;
  function Pr(n, r, e) {
    for (e = e.child; e !== null; ) (Iu(n, r, e), (e = e.sibling));
  }
  function Iu(n, r, e) {
    if (mr && typeof mr.onCommitFiberUnmount == "function")
      try {
        mr.onCommitFiberUnmount(Ct, e);
      } catch {}
    switch (e.tag) {
      case 26:
        (Vn || Mr(e, r),
          Pr(n, r, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
        break;
      case 27:
        Vn || Mr(e, r);
        var t = En,
          a = lr;
        (Ue(e.type) && ((En = e.stateNode), (lr = !1)),
          Pr(n, r, e),
          va(e.stateNode),
          (En = t),
          (lr = a));
        break;
      case 5:
        Vn || Mr(e, r);
      case 6:
        if (
          ((t = En),
          (a = lr),
          (En = null),
          Pr(n, r, e),
          (En = t),
          (lr = a),
          En !== null)
        )
          if (lr)
            try {
              (En.nodeType === 9
                ? En.body
                : En.nodeName === "HTML"
                  ? En.ownerDocument.body
                  : En
              ).removeChild(e.stateNode);
            } catch (l) {
              vn(e, r, l);
            }
          else
            try {
              En.removeChild(e.stateNode);
            } catch (l) {
              vn(e, r, l);
            }
        break;
      case 18:
        En !== null &&
          (lr
            ? ((n = En),
              Hd(
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === "HTML"
                    ? n.ownerDocument.body
                    : n,
                e.stateNode,
              ),
              St(n))
            : Hd(En, e.stateNode));
        break;
      case 4:
        ((t = En),
          (a = lr),
          (En = e.stateNode.containerInfo),
          (lr = !0),
          Pr(n, r, e),
          (En = t),
          (lr = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (be(2, e, r), Vn || be(4, e, r), Pr(n, r, e));
        break;
      case 1:
        (Vn ||
          (Mr(e, r),
          (t = e.stateNode),
          typeof t.componentWillUnmount == "function" && Nu(e, r, t)),
          Pr(n, r, e));
        break;
      case 21:
        Pr(n, r, e);
        break;
      case 22:
        ((Vn = (t = Vn) || e.memoizedState !== null), Pr(n, r, e), (Vn = t));
        break;
      default:
        Pr(n, r, e);
    }
  }
  function Ku(n, r) {
    if (
      r.memoizedState === null &&
      ((n = r.alternate), n !== null && ((n = n.memoizedState), n !== null))
    ) {
      n = n.dehydrated;
      try {
        St(n);
      } catch (e) {
        vn(r, r.return, e);
      }
    }
  }
  function $u(n, r) {
    if (
      r.memoizedState === null &&
      ((n = r.alternate),
      n !== null &&
        ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null)))
    )
      try {
        St(n);
      } catch (e) {
        vn(r, r.return, e);
      }
  }
  function Pm(n) {
    switch (n.tag) {
      case 31:
      case 13:
      case 19:
        var r = n.stateNode;
        return (r === null && (r = n.stateNode = new Xu()), r);
      case 22:
        return (
          (n = n.stateNode),
          (r = n._retryCache),
          r === null && (r = n._retryCache = new Xu()),
          r
        );
      default:
        throw Error(d(435, n.tag));
    }
  }
  function vl(n, r) {
    var e = Pm(n);
    r.forEach(function (t) {
      if (!e.has(t)) {
        e.add(t);
        var a = sf.bind(null, n, t);
        t.then(a, a);
      }
    });
  }
  function ir(n, r) {
    var e = r.deletions;
    if (e !== null)
      for (var t = 0; t < e.length; t++) {
        var a = e[t],
          l = n,
          i = r,
          o = i;
        n: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Ue(o.type)) {
                ((En = o.stateNode), (lr = !1));
                break n;
              }
              break;
            case 5:
              ((En = o.stateNode), (lr = !1));
              break n;
            case 3:
            case 4:
              ((En = o.stateNode.containerInfo), (lr = !0));
              break n;
          }
          o = o.return;
        }
        if (En === null) throw Error(d(160));
        (Iu(l, i, a),
          (En = null),
          (lr = !1),
          (l = a.alternate),
          l !== null && (l.return = null),
          (a.return = null));
      }
    if (r.subtreeFlags & 13886)
      for (r = r.child; r !== null; ) (Pu(r, n), (r = r.sibling));
  }
  var zr = null;
  function Pu(n, r) {
    var e = n.alternate,
      t = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ir(r, n),
          or(n),
          t & 4 && (be(3, n, n.return), ca(3, n), be(5, n, n.return)));
        break;
      case 1:
        (ir(r, n),
          or(n),
          t & 512 && (Vn || e === null || Mr(e, e.return)),
          t & 64 &&
            $r &&
            ((n = n.updateQueue),
            n !== null &&
              ((t = n.callbacks),
              t !== null &&
                ((e = n.shared.hiddenCallbacks),
                (n.shared.hiddenCallbacks = e === null ? t : e.concat(t))))));
        break;
      case 26:
        var a = zr;
        if (
          (ir(r, n),
          or(n),
          t & 512 && (Vn || e === null || Mr(e, e.return)),
          t & 4)
        ) {
          var l = e !== null ? e.memoizedState : null;
          if (((t = n.memoizedState), e === null))
            if (t === null)
              if (n.stateNode === null) {
                n: {
                  ((t = n.type),
                    (e = n.memoizedProps),
                    (a = a.ownerDocument || a));
                  r: switch (t) {
                    case "title":
                      ((l = a.getElementsByTagName("title")[0]),
                        (!l ||
                          l[Wt] ||
                          l[Xn] ||
                          l.namespaceURI === "http://www.w3.org/2000/svg" ||
                          l.hasAttribute("itemprop")) &&
                          ((l = a.createElement(t)),
                          a.head.insertBefore(
                            l,
                            a.querySelector("head > title"),
                          )),
                        Kn(l, t, e),
                        (l[Xn] = n),
                        Yn(l),
                        (t = l));
                      break n;
                    case "link":
                      var i = Pd("link", "href", a).get(t + (e.href || ""));
                      if (i) {
                        for (var o = 0; o < i.length; o++)
                          if (
                            ((l = i[o]),
                            l.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              l.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              l.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              l.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(o, 1);
                            break r;
                          }
                      }
                      ((l = a.createElement(t)),
                        Kn(l, t, e),
                        a.head.appendChild(l));
                      break;
                    case "meta":
                      if (
                        (i = Pd("meta", "content", a).get(
                          t + (e.content || ""),
                        ))
                      ) {
                        for (o = 0; o < i.length; o++)
                          if (
                            ((l = i[o]),
                            l.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              l.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              l.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              l.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              l.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(o, 1);
                            break r;
                          }
                      }
                      ((l = a.createElement(t)),
                        Kn(l, t, e),
                        a.head.appendChild(l));
                      break;
                    default:
                      throw Error(d(468, t));
                  }
                  ((l[Xn] = n), Yn(l), (t = l));
                }
                n.stateNode = t;
              } else nx(a, n.type, n.stateNode);
            else n.stateNode = $d(a, t, n.memoizedProps);
          else
            l !== t
              ? (l === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : l.count--,
                t === null
                  ? nx(a, n.type, n.stateNode)
                  : $d(a, t, n.memoizedProps))
              : t === null &&
                n.stateNode !== null &&
                Bo(n, n.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        (ir(r, n),
          or(n),
          t & 512 && (Vn || e === null || Mr(e, e.return)),
          e !== null && t & 4 && Bo(n, n.memoizedProps, e.memoizedProps));
        break;
      case 5:
        if (
          (ir(r, n),
          or(n),
          t & 512 && (Vn || e === null || Mr(e, e.return)),
          n.flags & 32)
        ) {
          a = n.stateNode;
          try {
            rt(a, "");
          } catch (z) {
            vn(n, n.return, z);
          }
        }
        (t & 4 &&
          n.stateNode != null &&
          ((a = n.memoizedProps), Bo(n, a, e !== null ? e.memoizedProps : a)),
          t & 1024 && (Uo = !0));
        break;
      case 6:
        if ((ir(r, n), or(n), t & 4)) {
          if (n.stateNode === null) throw Error(d(162));
          ((t = n.memoizedProps), (e = n.stateNode));
          try {
            e.nodeValue = t;
          } catch (z) {
            vn(n, n.return, z);
          }
        }
        break;
      case 3:
        if (
          ((zl = null),
          (a = zr),
          (zr = Sl(r.containerInfo)),
          ir(r, n),
          (zr = a),
          or(n),
          t & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            St(r.containerInfo);
          } catch (z) {
            vn(n, n.return, z);
          }
        Uo && ((Uo = !1), nd(n));
        break;
      case 4:
        ((t = zr),
          (zr = Sl(n.stateNode.containerInfo)),
          ir(r, n),
          or(n),
          (zr = t));
        break;
      case 12:
        (ir(r, n), or(n));
        break;
      case 31:
        (ir(r, n),
          or(n),
          t & 4 &&
            ((t = n.updateQueue),
            t !== null && ((n.updateQueue = null), vl(n, t))));
        break;
      case 13:
        (ir(r, n),
          or(n),
          n.child.flags & 8192 &&
            (n.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (yl = xr()),
          t & 4 &&
            ((t = n.updateQueue),
            t !== null && ((n.updateQueue = null), vl(n, t))));
        break;
      case 22:
        a = n.memoizedState !== null;
        var c = e !== null && e.memoizedState !== null,
          f = $r,
          h = Vn;
        if (
          (($r = f || a),
          (Vn = h || c),
          ir(r, n),
          (Vn = h),
          ($r = f),
          or(n),
          t & 8192)
        )
          n: for (
            r = n.stateNode,
              r._visibility = a ? r._visibility & -2 : r._visibility | 1,
              a && (e === null || c || $r || Vn || Ge(n)),
              e = null,
              r = n;
            ;
          ) {
            if (r.tag === 5 || r.tag === 26) {
              if (e === null) {
                c = e = r;
                try {
                  if (((l = c.stateNode), a))
                    ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    o = c.stateNode;
                    var g = c.memoizedProps.style,
                      Q =
                        g != null && g.hasOwnProperty("display")
                          ? g.display
                          : null;
                    o.style.display =
                      Q == null || typeof Q == "boolean" ? "" : ("" + Q).trim();
                  }
                } catch (z) {
                  vn(c, c.return, z);
                }
              }
            } else if (r.tag === 6) {
              if (e === null) {
                c = r;
                try {
                  c.stateNode.nodeValue = a ? "" : c.memoizedProps;
                } catch (z) {
                  vn(c, c.return, z);
                }
              }
            } else if (r.tag === 18) {
              if (e === null) {
                c = r;
                try {
                  var b = c.stateNode;
                  a ? Nd(b, !0) : Nd(c.stateNode, !1);
                } catch (z) {
                  vn(c, c.return, z);
                }
              }
            } else if (
              ((r.tag !== 22 && r.tag !== 23) ||
                r.memoizedState === null ||
                r === n) &&
              r.child !== null
            ) {
              ((r.child.return = r), (r = r.child));
              continue;
            }
            if (r === n) break n;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === n) break n;
              (e === r && (e = null), (r = r.return));
            }
            (e === r && (e = null),
              (r.sibling.return = r.return),
              (r = r.sibling));
          }
        t & 4 &&
          ((t = n.updateQueue),
          t !== null &&
            ((e = t.retryQueue),
            e !== null && ((t.retryQueue = null), vl(n, e))));
        break;
      case 19:
        (ir(r, n),
          or(n),
          t & 4 &&
            ((t = n.updateQueue),
            t !== null && ((n.updateQueue = null), vl(n, t))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ir(r, n), or(n));
    }
  }
  function or(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        for (var e, t = n.return; t !== null; ) {
          if (Lu(t)) {
            e = t;
            break;
          }
          t = t.return;
        }
        if (e == null) throw Error(d(160));
        switch (e.tag) {
          case 27:
            var a = e.stateNode,
              l = go(n);
            bl(n, l, a);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (rt(i, ""), (e.flags &= -33));
            var o = go(n);
            bl(n, o, i);
            break;
          case 3:
          case 4:
            var c = e.stateNode.containerInfo,
              f = go(n);
            Fo(n, f, c);
            break;
          default:
            throw Error(d(161));
        }
      } catch (h) {
        vn(n, n.return, h);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function nd(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var r = n;
        (nd(r),
          r.tag === 5 && r.flags & 1024 && r.stateNode.reset(),
          (n = n.sibling));
      }
  }
  function ne(n, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; ) (Ju(n, r.alternate, r), (r = r.sibling));
  }
  function Ge(n) {
    for (n = n.child; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (be(4, r, r.return), Ge(r));
          break;
        case 1:
          Mr(r, r.return);
          var e = r.stateNode;
          (typeof e.componentWillUnmount == "function" && Nu(r, r.return, e),
            Ge(r));
          break;
        case 27:
          va(r.stateNode);
        case 26:
        case 5:
          (Mr(r, r.return), Ge(r));
          break;
        case 22:
          r.memoizedState === null && Ge(r);
          break;
        case 30:
          Ge(r);
          break;
        default:
          Ge(r);
      }
      n = n.sibling;
    }
  }
  function re(n, r, e) {
    for (e = e && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var t = r.alternate,
        a = n,
        l = r,
        i = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          (re(a, l, e), ca(4, l));
          break;
        case 1:
          if (
            (re(a, l, e),
            (t = l),
            (a = t.stateNode),
            typeof a.componentDidMount == "function")
          )
            try {
              a.componentDidMount();
            } catch (f) {
              vn(t, t.return, f);
            }
          if (((t = l), (a = t.updateQueue), a !== null)) {
            var o = t.stateNode;
            try {
              var c = a.shared.hiddenCallbacks;
              if (c !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < c.length; a++)
                  js(c[a], o);
            } catch (f) {
              vn(t, t.return, f);
            }
          }
          (e && i & 64 && Hu(l), sa(l, l.return));
          break;
        case 27:
          Gu(l);
        case 26:
        case 5:
          (re(a, l, e), e && t === null && i & 4 && Yu(l), sa(l, l.return));
          break;
        case 12:
          re(a, l, e);
          break;
        case 31:
          (re(a, l, e), e && i & 4 && Ku(a, l));
          break;
        case 13:
          (re(a, l, e), e && i & 4 && $u(a, l));
          break;
        case 22:
          (l.memoizedState === null && re(a, l, e), sa(l, l.return));
          break;
        case 30:
          break;
        default:
          re(a, l, e);
      }
      r = r.sibling;
    }
  }
  function wo(n, r) {
    var e = null;
    (n !== null &&
      n.memoizedState !== null &&
      n.memoizedState.cachePool !== null &&
      (e = n.memoizedState.cachePool.pool),
      (n = null),
      r.memoizedState !== null &&
        r.memoizedState.cachePool !== null &&
        (n = r.memoizedState.cachePool.pool),
      n !== e && (n != null && n.refCount++, e != null && qt(e)));
  }
  function Oo(n, r) {
    ((n = null),
      r.alternate !== null && (n = r.alternate.memoizedState.cache),
      (r = r.memoizedState.cache),
      r !== n && (r.refCount++, n != null && qt(n)));
  }
  function Rr(n, r, e, t) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) (rd(n, r, e, t), (r = r.sibling));
  }
  function rd(n, r, e, t) {
    var a = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        (Rr(n, r, e, t), a & 2048 && ca(9, r));
        break;
      case 1:
        Rr(n, r, e, t);
        break;
      case 3:
        (Rr(n, r, e, t),
          a & 2048 &&
            ((n = null),
            r.alternate !== null && (n = r.alternate.memoizedState.cache),
            (r = r.memoizedState.cache),
            r !== n && (r.refCount++, n != null && qt(n))));
        break;
      case 12:
        if (a & 2048) {
          (Rr(n, r, e, t), (n = r.stateNode));
          try {
            var l = r.memoizedProps,
              i = l.id,
              o = l.onPostCommit;
            typeof o == "function" &&
              o(
                i,
                r.alternate === null ? "mount" : "update",
                n.passiveEffectDuration,
                -0,
              );
          } catch (c) {
            vn(r, r.return, c);
          }
        } else Rr(n, r, e, t);
        break;
      case 31:
        Rr(n, r, e, t);
        break;
      case 13:
        Rr(n, r, e, t);
        break;
      case 23:
        break;
      case 22:
        ((l = r.stateNode),
          (i = r.alternate),
          r.memoizedState !== null
            ? l._visibility & 2
              ? Rr(n, r, e, t)
              : ua(n, r)
            : l._visibility & 2
              ? Rr(n, r, e, t)
              : ((l._visibility |= 2),
                Bt(n, r, e, t, (r.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && wo(i, r));
        break;
      case 24:
        (Rr(n, r, e, t), a & 2048 && Oo(r.alternate, r));
        break;
      default:
        Rr(n, r, e, t);
    }
  }
  function Bt(n, r, e, t, a) {
    for (
      a = a && ((r.subtreeFlags & 10256) !== 0 || !1), r = r.child;
      r !== null;
    ) {
      var l = n,
        i = r,
        o = e,
        c = t,
        f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Bt(l, i, o, c, a), ca(8, i));
          break;
        case 23:
          break;
        case 22:
          var h = i.stateNode;
          (i.memoizedState !== null
            ? h._visibility & 2
              ? Bt(l, i, o, c, a)
              : ua(l, i)
            : ((h._visibility |= 2), Bt(l, i, o, c, a)),
            a && f & 2048 && wo(i.alternate, i));
          break;
        case 24:
          (Bt(l, i, o, c, a), a && f & 2048 && Oo(i.alternate, i));
          break;
        default:
          Bt(l, i, o, c, a);
      }
      r = r.sibling;
    }
  }
  function ua(n, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var e = n,
          t = r,
          a = t.flags;
        switch (t.tag) {
          case 22:
            (ua(e, t), a & 2048 && wo(t.alternate, t));
            break;
          case 24:
            (ua(e, t), a & 2048 && Oo(t.alternate, t));
            break;
          default:
            ua(e, t);
        }
        r = r.sibling;
      }
  }
  var da = 8192;
  function gt(n, r, e) {
    if (n.subtreeFlags & da)
      for (n = n.child; n !== null; ) (ed(n, r, e), (n = n.sibling));
  }
  function ed(n, r, e) {
    switch (n.tag) {
      case 26:
        (gt(n, r, e),
          n.flags & da &&
            n.memoizedState !== null &&
            Vf(e, zr, n.memoizedState, n.memoizedProps));
        break;
      case 5:
        gt(n, r, e);
        break;
      case 3:
      case 4:
        var t = zr;
        ((zr = Sl(n.stateNode.containerInfo)), gt(n, r, e), (zr = t));
        break;
      case 22:
        n.memoizedState === null &&
          ((t = n.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = da), (da = 16777216), gt(n, r, e), (da = t))
            : gt(n, r, e));
        break;
      default:
        gt(n, r, e);
    }
  }
  function td(n) {
    var r = n.alternate;
    if (r !== null && ((n = r.child), n !== null)) {
      r.child = null;
      do ((r = n.sibling), (n.sibling = null), (n = r));
      while (n !== null);
    }
  }
  function xa(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var e = 0; e < r.length; e++) {
          var t = r[e];
          ((Ln = t), ld(t, n));
        }
      td(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (ad(n), (n = n.sibling));
  }
  function ad(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (xa(n), n.flags & 2048 && be(9, n, n.return));
        break;
      case 3:
        xa(n);
        break;
      case 12:
        xa(n);
        break;
      case 22:
        var r = n.stateNode;
        n.memoizedState !== null &&
        r._visibility & 2 &&
        (n.return === null || n.return.tag !== 13)
          ? ((r._visibility &= -3), hl(n))
          : xa(n);
        break;
      default:
        xa(n);
    }
  }
  function hl(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var e = 0; e < r.length; e++) {
          var t = r[e];
          ((Ln = t), ld(t, n));
        }
      td(n);
    }
    for (n = n.child; n !== null; ) {
      switch (((r = n), r.tag)) {
        case 0:
        case 11:
        case 15:
          (be(8, r, r.return), hl(r));
          break;
        case 22:
          ((e = r.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), hl(r)));
          break;
        default:
          hl(r);
      }
      n = n.sibling;
    }
  }
  function ld(n, r) {
    for (; Ln !== null; ) {
      var e = Ln;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          be(8, e, r);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var t = e.memoizedState.cachePool.pool;
            t != null && t.refCount++;
          }
          break;
        case 24:
          qt(e.memoizedState.cache);
      }
      if (((t = e.child), t !== null)) ((t.return = e), (Ln = t));
      else
        n: for (e = n; Ln !== null; ) {
          t = Ln;
          var a = t.sibling,
            l = t.return;
          if ((qu(t), t === e)) {
            Ln = null;
            break n;
          }
          if (a !== null) {
            ((a.return = l), (Ln = a));
            break n;
          }
          Ln = l;
        }
    }
  }
  var nf = {
      getCacheForType: function (n) {
        var r = qn(An),
          e = r.data.get(n);
        return (e === void 0 && ((e = n()), r.data.set(n, e)), e);
      },
      cacheSignal: function () {
        return qn(An).controller.signal;
      },
    },
    rf = typeof WeakMap == "function" ? WeakMap : Map,
    pn = 0,
    Un = null,
    en = null,
    on = 0,
    bn = 0,
    hr = null,
    ve = !1,
    Ft = !1,
    ko = !1,
    ee = 0,
    Cn = 0,
    he = 0,
    Xe = 0,
    Eo = 0,
    yr = 0,
    Ut = 0,
    ma = null,
    cr = null,
    _o = !1,
    yl = 0,
    id = 0,
    Bl = 1 / 0,
    gl = null,
    ye = null,
    Zn = 0,
    Be = null,
    wt = null,
    te = 0,
    To = 0,
    jo = null,
    od = null,
    fa = 0,
    So = null;
  function Br() {
    return (pn & 2) !== 0 && on !== 0 ? on & -on : v.T !== null ? Mo() : Fc();
  }
  function cd() {
    if (yr === 0)
      if ((on & 536870912) === 0 || dn) {
        var n = Ta;
        ((Ta <<= 1), (Ta & 3932160) === 0 && (Ta = 262144), (yr = n));
      } else yr = 536870912;
    return ((n = br.current), n !== null && (n.flags |= 32), yr);
  }
  function sr(n, r, e) {
    (((n === Un && (bn === 2 || bn === 9)) || n.cancelPendingCommit !== null) &&
      (Ot(n, 0), ge(n, on, yr, !1)),
      Rt(n, e),
      ((pn & 2) === 0 || n !== Un) &&
        (n === Un &&
          ((pn & 2) === 0 && (Xe |= e), Cn === 4 && ge(n, on, yr, !1)),
        Dr(n)));
  }
  function sd(n, r, e) {
    if ((pn & 6) !== 0) throw Error(d(327));
    var t = (!e && (r & 127) === 0 && (r & n.expiredLanes) === 0) || zt(n, r),
      a = t ? af(n, r) : zo(n, r, !0),
      l = t;
    do {
      if (a === 0) {
        Ft && !t && ge(n, r, 0, !1);
        break;
      } else {
        if (((e = n.current.alternate), l && !ef(e))) {
          ((a = zo(n, r, !1)), (l = !1));
          continue;
        }
        if (a === 2) {
          if (((l = r), n.errorRecoveryDisabledLanes & l)) var i = 0;
          else
            ((i = n.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            r = i;
            n: {
              var o = n;
              a = ma;
              var c = o.current.memoizedState.isDehydrated;
              if ((c && (Ot(o, i).flags |= 256), (i = zo(o, i, !1)), i !== 2)) {
                if (ko && !c) {
                  ((o.errorRecoveryDisabledLanes |= l), (Xe |= l), (a = 4));
                  break n;
                }
                ((l = cr),
                  (cr = a),
                  l !== null &&
                    (cr === null ? (cr = l) : cr.push.apply(cr, l)));
              }
              a = i;
            }
            if (((l = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Ot(n, 0), ge(n, r, 0, !0));
          break;
        }
        n: {
          switch (((t = n), (l = a), l)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((r & 4194048) !== r) break;
            case 6:
              ge(t, r, yr, !ve);
              break n;
            case 2:
              cr = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((r & 62914560) === r && ((a = yl + 300 - xr()), 10 < a)) {
            if ((ge(t, r, yr, !ve), Sa(t, 0, !0) !== 0)) break n;
            ((te = r),
              (t.timeoutHandle = Vd(
                ud.bind(
                  null,
                  t,
                  e,
                  cr,
                  gl,
                  _o,
                  r,
                  yr,
                  Xe,
                  Ut,
                  ve,
                  l,
                  "Throttled",
                  -0,
                  0,
                ),
                a,
              )));
            break n;
          }
          ud(t, e, cr, gl, _o, r, yr, Xe, Ut, ve, l, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Dr(n);
  }
  function ud(n, r, e, t, a, l, i, o, c, f, h, g, Q, b) {
    if (
      ((n.timeoutHandle = -1),
      (g = r.subtreeFlags),
      g & 8192 || (g & 16785408) === 16785408)
    ) {
      ((g = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Hr,
      }),
        ed(r, l, g));
      var z =
        (l & 62914560) === l ? yl - xr() : (l & 4194048) === l ? id - xr() : 0;
      if (((z = Zf(g, z)), z !== null)) {
        ((te = l),
          (n.cancelPendingCommit = z(
            vd.bind(null, n, r, l, e, t, a, i, o, c, h, g, null, Q, b),
          )),
          ge(n, l, i, !f));
        return;
      }
    }
    vd(n, r, l, e, t, a, i, o, c);
  }
  function ef(n) {
    for (var r = n; ; ) {
      var e = r.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        r.flags & 16384 &&
        ((e = r.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var t = 0; t < e.length; t++) {
          var a = e[t],
            l = a.getSnapshot;
          a = a.value;
          try {
            if (!pr(l(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = r.child), r.subtreeFlags & 16384 && e !== null))
        ((e.return = r), (r = e));
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        ((r.sibling.return = r.return), (r = r.sibling));
      }
    }
    return !0;
  }
  function ge(n, r, e, t) {
    ((r &= ~Eo),
      (r &= ~Xe),
      (n.suspendedLanes |= r),
      (n.pingedLanes &= ~r),
      t && (n.warmLanes |= r),
      (t = n.expirationTimes));
    for (var a = r; 0 < a; ) {
      var l = 31 - fr(a),
        i = 1 << l;
      ((t[l] = -1), (a &= ~i));
    }
    e !== 0 && yc(n, e, r);
  }
  function Fl() {
    return (pn & 6) === 0 ? (pa(0), !1) : !0;
  }
  function Co() {
    if (en !== null) {
      if (bn === 0) var n = en.return;
      else ((n = en), (Gr = Me = null), Ji(n), (Qt = null), (Kt = 0), (n = en));
      for (; n !== null; ) (Zu(n.alternate, n), (n = n.return));
      en = null;
    }
  }
  function Ot(n, r) {
    var e = n.timeoutHandle;
    (e !== -1 && ((n.timeoutHandle = -1), Ff(e)),
      (e = n.cancelPendingCommit),
      e !== null && ((n.cancelPendingCommit = null), e()),
      (te = 0),
      Co(),
      (Un = n),
      (en = e = Yr(n.current, null)),
      (on = r),
      (bn = 0),
      (hr = null),
      (ve = !1),
      (Ft = zt(n, r)),
      (ko = !1),
      (Ut = yr = Eo = Xe = he = Cn = 0),
      (cr = ma = null),
      (_o = !1),
      (r & 8) !== 0 && (r |= r & 32));
    var t = n.entangledLanes;
    if (t !== 0)
      for (n = n.entanglements, t &= r; 0 < t; ) {
        var a = 31 - fr(t),
          l = 1 << a;
        ((r |= n[a]), (t &= ~l));
      }
    return ((ee = r), Ya(), e);
  }
  function dd(n, r) {
    ((I = null),
      (v.H = la),
      r === pt || r === $a
        ? ((r = ks()), (bn = 3))
        : r === Wi
          ? ((r = ks()), (bn = 4))
          : (bn =
              r === uo
                ? 8
                : r !== null &&
                    typeof r == "object" &&
                    typeof r.then == "function"
                  ? 6
                  : 1),
      (hr = r),
      en === null && ((Cn = 1), xl(n, Or(r, n.current))));
  }
  function xd() {
    var n = br.current;
    return n === null
      ? !0
      : (on & 4194048) === on
        ? Tr === null
        : (on & 62914560) === on || (on & 536870912) !== 0
          ? n === Tr
          : !1;
  }
  function md() {
    var n = v.H;
    return ((v.H = la), n === null ? la : n);
  }
  function fd() {
    var n = v.A;
    return ((v.A = nf), n);
  }
  function Ul() {
    ((Cn = 4),
      ve || ((on & 4194048) !== on && br.current !== null) || (Ft = !0),
      ((he & 134217727) === 0 && (Xe & 134217727) === 0) ||
        Un === null ||
        ge(Un, on, yr, !1));
  }
  function zo(n, r, e) {
    var t = pn;
    pn |= 2;
    var a = md(),
      l = fd();
    ((Un !== n || on !== r) && ((gl = null), Ot(n, r)), (r = !1));
    var i = Cn;
    n: do
      try {
        if (bn !== 0 && en !== null) {
          var o = en,
            c = hr;
          switch (bn) {
            case 8:
              (Co(), (i = 6));
              break n;
            case 3:
            case 2:
            case 9:
            case 6:
              br.current === null && (r = !0);
              var f = bn;
              if (((bn = 0), (hr = null), kt(n, o, c, f), e && Ft)) {
                i = 0;
                break n;
              }
              break;
            default:
              ((f = bn), (bn = 0), (hr = null), kt(n, o, c, f));
          }
        }
        (tf(), (i = Cn));
        break;
      } catch (h) {
        dd(n, h);
      }
    while (!0);
    return (
      r && n.shellSuspendCounter++,
      (Gr = Me = null),
      (pn = t),
      (v.H = a),
      (v.A = l),
      en === null && ((Un = null), (on = 0), Ya()),
      i
    );
  }
  function tf() {
    for (; en !== null; ) pd(en);
  }
  function af(n, r) {
    var e = pn;
    pn |= 2;
    var t = md(),
      a = fd();
    Un !== n || on !== r
      ? ((gl = null), (Bl = xr() + 500), Ot(n, r))
      : (Ft = zt(n, r));
    n: do
      try {
        if (bn !== 0 && en !== null) {
          r = en;
          var l = hr;
          r: switch (bn) {
            case 1:
              ((bn = 0), (hr = null), kt(n, r, l, 1));
              break;
            case 2:
            case 9:
              if (ws(l)) {
                ((bn = 0), (hr = null), Qd(r));
                break;
              }
              ((r = function () {
                ((bn !== 2 && bn !== 9) || Un !== n || (bn = 7), Dr(n));
              }),
                l.then(r, r));
              break n;
            case 3:
              bn = 7;
              break n;
            case 4:
              bn = 5;
              break n;
            case 7:
              ws(l)
                ? ((bn = 0), (hr = null), Qd(r))
                : ((bn = 0), (hr = null), kt(n, r, l, 7));
              break;
            case 5:
              var i = null;
              switch (en.tag) {
                case 26:
                  i = en.memoizedState;
                case 5:
                case 27:
                  var o = en;
                  if (i ? rx(i) : o.stateNode.complete) {
                    ((bn = 0), (hr = null));
                    var c = o.sibling;
                    if (c !== null) en = c;
                    else {
                      var f = o.return;
                      f !== null ? ((en = f), wl(f)) : (en = null);
                    }
                    break r;
                  }
              }
              ((bn = 0), (hr = null), kt(n, r, l, 5));
              break;
            case 6:
              ((bn = 0), (hr = null), kt(n, r, l, 6));
              break;
            case 8:
              (Co(), (Cn = 6));
              break n;
            default:
              throw Error(d(462));
          }
        }
        lf();
        break;
      } catch (h) {
        dd(n, h);
      }
    while (!0);
    return (
      (Gr = Me = null),
      (v.H = t),
      (v.A = a),
      (pn = e),
      en !== null ? 0 : ((Un = null), (on = 0), Ya(), Cn)
    );
  }
  function lf() {
    for (; en !== null && !Ex(); ) pd(en);
  }
  function pd(n) {
    var r = Du(n.alternate, n, ee);
    ((n.memoizedProps = n.pendingProps), r === null ? wl(n) : (en = r));
  }
  function Qd(n) {
    var r = n,
      e = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = Cu(e, r, r.pendingProps, r.type, void 0, on);
        break;
      case 11:
        r = Cu(e, r, r.pendingProps, r.type.render, r.ref, on);
        break;
      case 5:
        Ji(r);
      default:
        (Zu(e, r), (r = en = fs(r, ee)), (r = Du(e, r, ee)));
    }
    ((n.memoizedProps = n.pendingProps), r === null ? wl(n) : (en = r));
  }
  function kt(n, r, e, t) {
    ((Gr = Me = null), Ji(r), (Qt = null), (Kt = 0));
    var a = r.return;
    try {
      if (Xm(n, a, r, e, on)) {
        ((Cn = 1), xl(n, Or(e, n.current)), (en = null));
        return;
      }
    } catch (l) {
      if (a !== null) throw ((en = a), l);
      ((Cn = 1), xl(n, Or(e, n.current)), (en = null));
      return;
    }
    r.flags & 32768
      ? (dn || t === 1
          ? (n = !0)
          : Ft || (on & 536870912) !== 0
            ? (n = !1)
            : ((ve = n = !0),
              (t === 2 || t === 9 || t === 3 || t === 6) &&
                ((t = br.current),
                t !== null && t.tag === 13 && (t.flags |= 16384))),
        bd(r, n))
      : wl(r);
  }
  function wl(n) {
    var r = n;
    do {
      if ((r.flags & 32768) !== 0) {
        bd(r, ve);
        return;
      }
      n = r.return;
      var e = Im(r.alternate, r, ee);
      if (e !== null) {
        en = e;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        en = r;
        return;
      }
      en = r = n;
    } while (r !== null);
    Cn === 0 && (Cn = 5);
  }
  function bd(n, r) {
    do {
      var e = Km(n.alternate, n);
      if (e !== null) {
        ((e.flags &= 32767), (en = e));
        return;
      }
      if (
        ((e = n.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !r && ((n = n.sibling), n !== null))
      ) {
        en = n;
        return;
      }
      en = n = e;
    } while (n !== null);
    ((Cn = 6), (en = null));
  }
  function vd(n, r, e, t, a, l, i, o, c) {
    n.cancelPendingCommit = null;
    do Ol();
    while (Zn !== 0);
    if ((pn & 6) !== 0) throw Error(d(327));
    if (r !== null) {
      if (r === n.current) throw Error(d(177));
      if (
        ((l = r.lanes | r.childLanes),
        (l |= Bi),
        Mx(n, e, l, i, o, c),
        n === Un && ((en = Un = null), (on = 0)),
        (wt = r),
        (Be = n),
        (te = e),
        (To = l),
        (jo = a),
        (od = t),
        (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
          ? ((n.callbackNode = null),
            (n.callbackPriority = 0),
            uf(Ea, function () {
              return (Fd(), null);
            }))
          : ((n.callbackNode = null), (n.callbackPriority = 0)),
        (t = (r.flags & 13878) !== 0),
        (r.subtreeFlags & 13878) !== 0 || t)
      ) {
        ((t = v.T), (v.T = null), (a = _.p), (_.p = 2), (i = pn), (pn |= 4));
        try {
          $m(n, r, e);
        } finally {
          ((pn = i), (_.p = a), (v.T = t));
        }
      }
      ((Zn = 1), hd(), yd(), Bd());
    }
  }
  function hd() {
    if (Zn === 1) {
      Zn = 0;
      var n = Be,
        r = wt,
        e = (r.flags & 13878) !== 0;
      if ((r.subtreeFlags & 13878) !== 0 || e) {
        ((e = v.T), (v.T = null));
        var t = _.p;
        _.p = 2;
        var a = pn;
        pn |= 4;
        try {
          Pu(r, n);
          var l = Go,
            i = ls(n.containerInfo),
            o = l.focusedElem,
            c = l.selectionRange;
          if (
            i !== o &&
            o &&
            o.ownerDocument &&
            as(o.ownerDocument.documentElement, o)
          ) {
            if (c !== null && Qi(o)) {
              var f = c.start,
                h = c.end;
              if ((h === void 0 && (h = f), "selectionStart" in o))
                ((o.selectionStart = f),
                  (o.selectionEnd = Math.min(h, o.value.length)));
              else {
                var g = o.ownerDocument || document,
                  Q = (g && g.defaultView) || window;
                if (Q.getSelection) {
                  var b = Q.getSelection(),
                    z = o.textContent.length,
                    N = Math.min(c.start, z),
                    Fn = c.end === void 0 ? N : Math.min(c.end, z);
                  !b.extend && N > Fn && ((i = Fn), (Fn = N), (N = i));
                  var x = ts(o, N),
                    s = ts(o, Fn);
                  if (
                    x &&
                    s &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== x.node ||
                      b.anchorOffset !== x.offset ||
                      b.focusNode !== s.node ||
                      b.focusOffset !== s.offset)
                  ) {
                    var m = g.createRange();
                    (m.setStart(x.node, x.offset),
                      b.removeAllRanges(),
                      N > Fn
                        ? (b.addRange(m), b.extend(s.node, s.offset))
                        : (m.setEnd(s.node, s.offset), b.addRange(m)));
                  }
                }
              }
            }
            for (g = [], b = o; (b = b.parentNode); )
              b.nodeType === 1 &&
                g.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof o.focus == "function" && o.focus(), o = 0;
              o < g.length;
              o++
            ) {
              var y = g[o];
              ((y.element.scrollLeft = y.left), (y.element.scrollTop = y.top));
            }
          }
          ((Ml = !!Lo), (Go = Lo = null));
        } finally {
          ((pn = a), (_.p = t), (v.T = e));
        }
      }
      ((n.current = r), (Zn = 2));
    }
  }
  function yd() {
    if (Zn === 2) {
      Zn = 0;
      var n = Be,
        r = wt,
        e = (r.flags & 8772) !== 0;
      if ((r.subtreeFlags & 8772) !== 0 || e) {
        ((e = v.T), (v.T = null));
        var t = _.p;
        _.p = 2;
        var a = pn;
        pn |= 4;
        try {
          Ju(n, r.alternate, r);
        } finally {
          ((pn = a), (_.p = t), (v.T = e));
        }
      }
      Zn = 3;
    }
  }
  function Bd() {
    if (Zn === 4 || Zn === 3) {
      ((Zn = 0), _x());
      var n = Be,
        r = wt,
        e = te,
        t = od;
      (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
        ? (Zn = 5)
        : ((Zn = 0), (wt = Be = null), gd(n, n.pendingLanes));
      var a = n.pendingLanes;
      if (
        (a === 0 && (ye = null),
        Kl(e),
        (r = r.stateNode),
        mr && typeof mr.onCommitFiberRoot == "function")
      )
        try {
          mr.onCommitFiberRoot(Ct, r, void 0, (r.current.flags & 128) === 128);
        } catch {}
      if (t !== null) {
        ((r = v.T), (a = _.p), (_.p = 2), (v.T = null));
        try {
          for (var l = n.onRecoverableError, i = 0; i < t.length; i++) {
            var o = t[i];
            l(o.value, { componentStack: o.stack });
          }
        } finally {
          ((v.T = r), (_.p = a));
        }
      }
      ((te & 3) !== 0 && Ol(),
        Dr(n),
        (a = n.pendingLanes),
        (e & 261930) !== 0 && (a & 42) !== 0
          ? n === So
            ? fa++
            : ((fa = 0), (So = n))
          : (fa = 0),
        pa(0));
    }
  }
  function gd(n, r) {
    (n.pooledCacheLanes &= r) === 0 &&
      ((r = n.pooledCache), r != null && ((n.pooledCache = null), qt(r)));
  }
  function Ol() {
    return (hd(), yd(), Bd(), Fd());
  }
  function Fd() {
    if (Zn !== 5) return !1;
    var n = Be,
      r = To;
    To = 0;
    var e = Kl(te),
      t = v.T,
      a = _.p;
    try {
      ((_.p = 32 > e ? 32 : e), (v.T = null), (e = jo), (jo = null));
      var l = Be,
        i = te;
      if (((Zn = 0), (wt = Be = null), (te = 0), (pn & 6) !== 0))
        throw Error(d(331));
      var o = pn;
      if (
        ((pn |= 4),
        ad(l.current),
        rd(l, l.current, i, e),
        (pn = o),
        pa(0, !1),
        mr && typeof mr.onPostCommitFiberRoot == "function")
      )
        try {
          mr.onPostCommitFiberRoot(Ct, l);
        } catch {}
      return !0;
    } finally {
      ((_.p = a), (v.T = t), gd(n, r));
    }
  }
  function Ud(n, r, e) {
    ((r = Or(e, r)),
      (r = so(n.stateNode, r, 2)),
      (n = fe(n, r, 2)),
      n !== null && (Rt(n, 2), Dr(n)));
  }
  function vn(n, r, e) {
    if (n.tag === 3) Ud(n, n, e);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Ud(r, n, e);
          break;
        } else if (r.tag === 1) {
          var t = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof t.componentDidCatch == "function" &&
              (ye === null || !ye.has(t)))
          ) {
            ((n = Or(e, n)),
              (e = wu(2)),
              (t = fe(r, e, 2)),
              t !== null && (Ou(e, t, r, n), Rt(t, 2), Dr(t)));
            break;
          }
        }
        r = r.return;
      }
  }
  function Ro(n, r, e) {
    var t = n.pingCache;
    if (t === null) {
      t = n.pingCache = new rf();
      var a = new Set();
      t.set(r, a);
    } else ((a = t.get(r)), a === void 0 && ((a = new Set()), t.set(r, a)));
    a.has(e) ||
      ((ko = !0), a.add(e), (n = of.bind(null, n, r, e)), r.then(n, n));
  }
  function of(n, r, e) {
    var t = n.pingCache;
    (t !== null && t.delete(r),
      (n.pingedLanes |= n.suspendedLanes & e),
      (n.warmLanes &= ~e),
      Un === n &&
        (on & e) === e &&
        (Cn === 4 || (Cn === 3 && (on & 62914560) === on && 300 > xr() - yl)
          ? (pn & 2) === 0 && Ot(n, 0)
          : (Eo |= e),
        Ut === on && (Ut = 0)),
      Dr(n));
  }
  function wd(n, r) {
    (r === 0 && (r = hc()), (n = Re(n, r)), n !== null && (Rt(n, r), Dr(n)));
  }
  function cf(n) {
    var r = n.memoizedState,
      e = 0;
    (r !== null && (e = r.retryLane), wd(n, e));
  }
  function sf(n, r) {
    var e = 0;
    switch (n.tag) {
      case 31:
      case 13:
        var t = n.stateNode,
          a = n.memoizedState;
        a !== null && (e = a.retryLane);
        break;
      case 19:
        t = n.stateNode;
        break;
      case 22:
        t = n.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    (t !== null && t.delete(r), wd(n, e));
  }
  function uf(n, r) {
    return Xl(n, r);
  }
  var kl = null,
    Et = null,
    Wo = !1,
    El = !1,
    Ao = !1,
    Fe = 0;
  function Dr(n) {
    (n !== Et &&
      n.next === null &&
      (Et === null ? (kl = Et = n) : (Et = Et.next = n)),
      (El = !0),
      Wo || ((Wo = !0), xf()));
  }
  function pa(n, r) {
    if (!Ao && El) {
      Ao = !0;
      do
        for (var e = !1, t = kl; t !== null; ) {
          if (n !== 0) {
            var a = t.pendingLanes;
            if (a === 0) var l = 0;
            else {
              var i = t.suspendedLanes,
                o = t.pingedLanes;
              ((l = (1 << (31 - fr(42 | n) + 1)) - 1),
                (l &= a & ~(i & ~o)),
                (l = l & 201326741 ? (l & 201326741) | 1 : l ? l | 2 : 0));
            }
            l !== 0 && ((e = !0), _d(t, l));
          } else
            ((l = on),
              (l = Sa(
                t,
                t === Un ? l : 0,
                t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
              )),
              (l & 3) === 0 || zt(t, l) || ((e = !0), _d(t, l)));
          t = t.next;
        }
      while (e);
      Ao = !1;
    }
  }
  function df() {
    Od();
  }
  function Od() {
    El = Wo = !1;
    var n = 0;
    Fe !== 0 && gf() && (n = Fe);
    for (var r = xr(), e = null, t = kl; t !== null; ) {
      var a = t.next,
        l = kd(t, r);
      (l === 0
        ? ((t.next = null),
          e === null ? (kl = a) : (e.next = a),
          a === null && (Et = e))
        : ((e = t), (n !== 0 || (l & 3) !== 0) && (El = !0)),
        (t = a));
    }
    ((Zn !== 0 && Zn !== 5) || pa(n), Fe !== 0 && (Fe = 0));
  }
  function kd(n, r) {
    for (
      var e = n.suspendedLanes,
        t = n.pingedLanes,
        a = n.expirationTimes,
        l = n.pendingLanes & -62914561;
      0 < l;
    ) {
      var i = 31 - fr(l),
        o = 1 << i,
        c = a[i];
      (c === -1
        ? ((o & e) === 0 || (o & t) !== 0) && (a[i] = Ax(o, r))
        : c <= r && (n.expiredLanes |= o),
        (l &= ~o));
    }
    if (
      ((r = Un),
      (e = on),
      (e = Sa(
        n,
        n === r ? e : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
      )),
      (t = n.callbackNode),
      e === 0 ||
        (n === r && (bn === 2 || bn === 9)) ||
        n.cancelPendingCommit !== null)
    )
      return (
        t !== null && t !== null && Jl(t),
        (n.callbackNode = null),
        (n.callbackPriority = 0)
      );
    if ((e & 3) === 0 || zt(n, e)) {
      if (((r = e & -e), r === n.callbackPriority)) return r;
      switch ((t !== null && Jl(t), Kl(e))) {
        case 2:
        case 8:
          e = bc;
          break;
        case 32:
          e = Ea;
          break;
        case 268435456:
          e = vc;
          break;
        default:
          e = Ea;
      }
      return (
        (t = Ed.bind(null, n)),
        (e = Xl(e, t)),
        (n.callbackPriority = r),
        (n.callbackNode = e),
        r
      );
    }
    return (
      t !== null && t !== null && Jl(t),
      (n.callbackPriority = 2),
      (n.callbackNode = null),
      2
    );
  }
  function Ed(n, r) {
    if (Zn !== 0 && Zn !== 5)
      return ((n.callbackNode = null), (n.callbackPriority = 0), null);
    var e = n.callbackNode;
    if (Ol() && n.callbackNode !== e) return null;
    var t = on;
    return (
      (t = Sa(
        n,
        n === Un ? t : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
      )),
      t === 0
        ? null
        : (sd(n, t, r),
          kd(n, xr()),
          n.callbackNode != null && n.callbackNode === e
            ? Ed.bind(null, n)
            : null)
    );
  }
  function _d(n, r) {
    if (Ol()) return null;
    sd(n, r, !0);
  }
  function xf() {
    Uf(function () {
      (pn & 6) !== 0 ? Xl(Qc, df) : Od();
    });
  }
  function Mo() {
    if (Fe === 0) {
      var n = mt;
      (n === 0 && ((n = _a), (_a <<= 1), (_a & 261888) === 0 && (_a = 256)),
        (Fe = n));
    }
    return Fe;
  }
  function Td(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean"
      ? null
      : typeof n == "function"
        ? n
        : Wa("" + n);
  }
  function jd(n, r) {
    var e = r.ownerDocument.createElement("input");
    return (
      (e.name = r.name),
      (e.value = r.value),
      n.id && e.setAttribute("form", n.id),
      r.parentNode.insertBefore(e, r),
      (n = new FormData(n)),
      e.parentNode.removeChild(e),
      n
    );
  }
  function mf(n, r, e, t, a) {
    if (r === "submit" && e && e.stateNode === a) {
      var l = Td((a[tr] || null).action),
        i = t.submitter;
      i &&
        ((r = (r = i[tr] || null)
          ? Td(r.formAction)
          : i.getAttribute("formAction")),
        r !== null && ((l = r), (i = null)));
      var o = new Va("action", "action", null, t, a);
      n.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (t.defaultPrevented) {
                if (Fe !== 0) {
                  var c = i ? jd(a, i) : new FormData(a);
                  to(
                    e,
                    { pending: !0, data: c, method: a.method, action: l },
                    null,
                    c,
                  );
                }
              } else
                typeof l == "function" &&
                  (o.preventDefault(),
                  (c = i ? jd(a, i) : new FormData(a)),
                  to(
                    e,
                    { pending: !0, data: c, method: a.method, action: l },
                    l,
                    c,
                  ));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var Do = 0; Do < yi.length; Do++) {
    var Vo = yi[Do],
      ff = Vo.toLowerCase(),
      pf = Vo[0].toUpperCase() + Vo.slice(1);
    Cr(ff, "on" + pf);
  }
  (Cr(cs, "onAnimationEnd"),
    Cr(ss, "onAnimationIteration"),
    Cr(us, "onAnimationStart"),
    Cr("dblclick", "onDoubleClick"),
    Cr("focusin", "onFocus"),
    Cr("focusout", "onBlur"),
    Cr(Tm, "onTransitionRun"),
    Cr(jm, "onTransitionStart"),
    Cr(Sm, "onTransitionCancel"),
    Cr(ds, "onTransitionEnd"),
    Pe("onMouseEnter", ["mouseout", "mouseover"]),
    Pe("onMouseLeave", ["mouseout", "mouseover"]),
    Pe("onPointerEnter", ["pointerout", "pointerover"]),
    Pe("onPointerLeave", ["pointerout", "pointerover"]),
    je(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    je(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    je(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    je(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    je(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Qa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Qf = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Qa),
    );
  function Sd(n, r) {
    r = (r & 4) !== 0;
    for (var e = 0; e < n.length; e++) {
      var t = n[e],
        a = t.event;
      t = t.listeners;
      n: {
        var l = void 0;
        if (r)
          for (var i = t.length - 1; 0 <= i; i--) {
            var o = t[i],
              c = o.instance,
              f = o.currentTarget;
            if (((o = o.listener), c !== l && a.isPropagationStopped()))
              break n;
            ((l = o), (a.currentTarget = f));
            try {
              l(a);
            } catch (h) {
              Na(h);
            }
            ((a.currentTarget = null), (l = c));
          }
        else
          for (i = 0; i < t.length; i++) {
            if (
              ((o = t[i]),
              (c = o.instance),
              (f = o.currentTarget),
              (o = o.listener),
              c !== l && a.isPropagationStopped())
            )
              break n;
            ((l = o), (a.currentTarget = f));
            try {
              l(a);
            } catch (h) {
              Na(h);
            }
            ((a.currentTarget = null), (l = c));
          }
      }
    }
  }
  function tn(n, r) {
    var e = r[$l];
    e === void 0 && (e = r[$l] = new Set());
    var t = n + "__bubble";
    e.has(t) || (Cd(r, n, 2, !1), e.add(t));
  }
  function Zo(n, r, e) {
    var t = 0;
    (r && (t |= 4), Cd(e, n, t, r));
  }
  var _l = "_reactListening" + Math.random().toString(36).slice(2);
  function Ho(n) {
    if (!n[_l]) {
      ((n[_l] = !0),
        Oc.forEach(function (e) {
          e !== "selectionchange" && (Qf.has(e) || Zo(e, !1, n), Zo(e, !0, n));
        }));
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[_l] || ((r[_l] = !0), Zo("selectionchange", !1, r));
    }
  }
  function Cd(n, r, e, t) {
    switch (cx(r)) {
      case 2:
        var a = Yf;
        break;
      case 8:
        a = Lf;
        break;
      default:
        a = tc;
    }
    ((e = a.bind(null, r, e, n)),
      (a = void 0),
      !oi ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (a = !0),
      t
        ? a !== void 0
          ? n.addEventListener(r, e, { capture: !0, passive: a })
          : n.addEventListener(r, e, !0)
        : a !== void 0
          ? n.addEventListener(r, e, { passive: a })
          : n.addEventListener(r, e, !1));
  }
  function No(n, r, e, t, a) {
    var l = t;
    if ((r & 1) === 0 && (r & 2) === 0 && t !== null)
      n: for (;;) {
        if (t === null) return;
        var i = t.tag;
        if (i === 3 || i === 4) {
          var o = t.stateNode.containerInfo;
          if (o === a) break;
          if (i === 4)
            for (i = t.return; i !== null; ) {
              var c = i.tag;
              if ((c === 3 || c === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = Ie(o)), i === null)) return;
            if (((c = i.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              t = l = i;
              continue n;
            }
            o = o.parentNode;
          }
        }
        t = t.return;
      }
    Mc(function () {
      var f = l,
        h = li(e),
        g = [];
      n: {
        var Q = xs.get(n);
        if (Q !== void 0) {
          var b = Va,
            z = n;
          switch (n) {
            case "keypress":
              if (Ma(e) === 0) break n;
            case "keydown":
            case "keyup":
              b = cm;
              break;
            case "focusin":
              ((z = "focus"), (b = di));
              break;
            case "focusout":
              ((z = "blur"), (b = di));
              break;
            case "beforeblur":
            case "afterblur":
              b = di;
              break;
            case "click":
              if (e.button === 2) break n;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = Zc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Ix;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = dm;
              break;
            case cs:
            case ss:
            case us:
              b = Px;
              break;
            case ds:
              b = mm;
              break;
            case "scroll":
            case "scrollend":
              b = Jx;
              break;
            case "wheel":
              b = pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = rm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Nc;
              break;
            case "toggle":
            case "beforetoggle":
              b = bm;
          }
          var N = (r & 4) !== 0,
            Fn = !N && (n === "scroll" || n === "scrollend"),
            x = N ? (Q !== null ? Q + "Capture" : null) : Q;
          N = [];
          for (var s = f, m; s !== null; ) {
            var y = s;
            if (
              ((m = y.stateNode),
              (y = y.tag),
              (y !== 5 && y !== 26 && y !== 27) ||
                m === null ||
                x === null ||
                ((y = Mt(s, x)), y != null && N.push(ba(s, y, m))),
              Fn)
            )
              break;
            s = s.return;
          }
          0 < N.length &&
            ((Q = new b(Q, z, null, e, h)), g.push({ event: Q, listeners: N }));
        }
      }
      if ((r & 7) === 0) {
        n: {
          if (
            ((Q = n === "mouseover" || n === "pointerover"),
            (b = n === "mouseout" || n === "pointerout"),
            Q &&
              e !== ai &&
              (z = e.relatedTarget || e.fromElement) &&
              (Ie(z) || z[qe]))
          )
            break n;
          if (
            (b || Q) &&
            ((Q =
              h.window === h
                ? h
                : (Q = h.ownerDocument)
                  ? Q.defaultView || Q.parentWindow
                  : window),
            b
              ? ((z = e.relatedTarget || e.toElement),
                (b = f),
                (z = z ? Ie(z) : null),
                z !== null &&
                  ((Fn = U(z)),
                  (N = z.tag),
                  z !== Fn || (N !== 5 && N !== 27 && N !== 6)) &&
                  (z = null))
              : ((b = null), (z = f)),
            b !== z)
          ) {
            if (
              ((N = Zc),
              (y = "onMouseLeave"),
              (x = "onMouseEnter"),
              (s = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((N = Nc),
                (y = "onPointerLeave"),
                (x = "onPointerEnter"),
                (s = "pointer")),
              (Fn = b == null ? Q : At(b)),
              (m = z == null ? Q : At(z)),
              (Q = new N(y, s + "leave", b, e, h)),
              (Q.target = Fn),
              (Q.relatedTarget = m),
              (y = null),
              Ie(h) === f &&
                ((N = new N(x, s + "enter", z, e, h)),
                (N.target = m),
                (N.relatedTarget = Fn),
                (y = N)),
              (Fn = y),
              b && z)
            )
              r: {
                for (N = bf, x = b, s = z, m = 0, y = x; y; y = N(y)) m++;
                y = 0;
                for (var V = s; V; V = N(V)) y++;
                for (; 0 < m - y; ) ((x = N(x)), m--);
                for (; 0 < y - m; ) ((s = N(s)), y--);
                for (; m--; ) {
                  if (x === s || (s !== null && x === s.alternate)) {
                    N = x;
                    break r;
                  }
                  ((x = N(x)), (s = N(s)));
                }
                N = null;
              }
            else N = null;
            (b !== null && zd(g, Q, b, N, !1),
              z !== null && Fn !== null && zd(g, Fn, z, N, !0));
          }
        }
        n: {
          if (
            ((Q = f ? At(f) : window),
            (b = Q.nodeName && Q.nodeName.toLowerCase()),
            b === "select" || (b === "input" && Q.type === "file"))
          )
            var mn = Kc;
          else if (qc(Q))
            if ($c) mn = km;
            else {
              mn = wm;
              var R = Um;
            }
          else
            ((b = Q.nodeName),
              !b ||
              b.toLowerCase() !== "input" ||
              (Q.type !== "checkbox" && Q.type !== "radio")
                ? f && ti(f.elementType) && (mn = Kc)
                : (mn = Om));
          if (mn && (mn = mn(n, f))) {
            Ic(g, mn, e, h);
            break n;
          }
          (R && R(n, Q, f),
            n === "focusout" &&
              f &&
              Q.type === "number" &&
              f.memoizedProps.value != null &&
              ei(Q, "number", Q.value));
        }
        switch (((R = f ? At(f) : window), n)) {
          case "focusin":
            (qc(R) || R.contentEditable === "true") &&
              ((lt = R), (bi = f), (Gt = null));
            break;
          case "focusout":
            Gt = bi = lt = null;
            break;
          case "mousedown":
            vi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((vi = !1), is(g, e, h));
            break;
          case "selectionchange":
            if (_m) break;
          case "keydown":
          case "keyup":
            is(g, e, h);
        }
        var K;
        if (mi)
          n: {
            switch (n) {
              case "compositionstart":
                var cn = "onCompositionStart";
                break n;
              case "compositionend":
                cn = "onCompositionEnd";
                break n;
              case "compositionupdate":
                cn = "onCompositionUpdate";
                break n;
            }
            cn = void 0;
          }
        else
          at
            ? Xc(n, e) && (cn = "onCompositionEnd")
            : n === "keydown" &&
              e.keyCode === 229 &&
              (cn = "onCompositionStart");
        (cn &&
          (Yc &&
            e.locale !== "ko" &&
            (at || cn !== "onCompositionStart"
              ? cn === "onCompositionEnd" && at && (K = Dc())
              : ((oe = h),
                (ci = "value" in oe ? oe.value : oe.textContent),
                (at = !0))),
          (R = Tl(f, cn)),
          0 < R.length &&
            ((cn = new Hc(cn, n, null, e, h)),
            g.push({ event: cn, listeners: R }),
            K ? (cn.data = K) : ((K = Jc(e)), K !== null && (cn.data = K)))),
          (K = hm ? ym(n, e) : Bm(n, e)) &&
            ((cn = Tl(f, "onBeforeInput")),
            0 < cn.length &&
              ((R = new Hc("onBeforeInput", "beforeinput", null, e, h)),
              g.push({ event: R, listeners: cn }),
              (R.data = K))),
          mf(g, n, f, e, h));
      }
      Sd(g, r);
    });
  }
  function ba(n, r, e) {
    return { instance: n, listener: r, currentTarget: e };
  }
  function Tl(n, r) {
    for (var e = r + "Capture", t = []; n !== null; ) {
      var a = n,
        l = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          l === null ||
          ((a = Mt(n, e)),
          a != null && t.unshift(ba(n, a, l)),
          (a = Mt(n, r)),
          a != null && t.push(ba(n, a, l))),
        n.tag === 3)
      )
        return t;
      n = n.return;
    }
    return [];
  }
  function bf(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function zd(n, r, e, t, a) {
    for (var l = r._reactName, i = []; e !== null && e !== t; ) {
      var o = e,
        c = o.alternate,
        f = o.stateNode;
      if (((o = o.tag), c !== null && c === t)) break;
      ((o !== 5 && o !== 26 && o !== 27) ||
        f === null ||
        ((c = f),
        a
          ? ((f = Mt(e, l)), f != null && i.unshift(ba(e, f, c)))
          : a || ((f = Mt(e, l)), f != null && i.push(ba(e, f, c)))),
        (e = e.return));
    }
    i.length !== 0 && n.push({ event: r, listeners: i });
  }
  var vf = /\r\n?/g,
    hf = /\u0000|\uFFFD/g;
  function Rd(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        vf,
        `
`,
      )
      .replace(hf, "");
  }
  function Wd(n, r) {
    return ((r = Rd(r)), Rd(n) === r);
  }
  function gn(n, r, e, t, a, l) {
    switch (e) {
      case "children":
        typeof t == "string"
          ? r === "body" || (r === "textarea" && t === "") || rt(n, t)
          : (typeof t == "number" || typeof t == "bigint") &&
            r !== "body" &&
            rt(n, "" + t);
        break;
      case "className":
        za(n, "class", t);
        break;
      case "tabIndex":
        za(n, "tabindex", t);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        za(n, e, t);
        break;
      case "style":
        Wc(n, t, l);
        break;
      case "data":
        if (r !== "object") {
          za(n, "data", t);
          break;
        }
      case "src":
      case "href":
        if (t === "" && (r !== "a" || e !== "href")) {
          n.removeAttribute(e);
          break;
        }
        if (
          t == null ||
          typeof t == "function" ||
          typeof t == "symbol" ||
          typeof t == "boolean"
        ) {
          n.removeAttribute(e);
          break;
        }
        ((t = Wa("" + t)), n.setAttribute(e, t));
        break;
      case "action":
      case "formAction":
        if (typeof t == "function") {
          n.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof l == "function" &&
            (e === "formAction"
              ? (r !== "input" && gn(n, r, "name", a.name, a, null),
                gn(n, r, "formEncType", a.formEncType, a, null),
                gn(n, r, "formMethod", a.formMethod, a, null),
                gn(n, r, "formTarget", a.formTarget, a, null))
              : (gn(n, r, "encType", a.encType, a, null),
                gn(n, r, "method", a.method, a, null),
                gn(n, r, "target", a.target, a, null)));
        if (t == null || typeof t == "symbol" || typeof t == "boolean") {
          n.removeAttribute(e);
          break;
        }
        ((t = Wa("" + t)), n.setAttribute(e, t));
        break;
      case "onClick":
        t != null && (n.onclick = Hr);
        break;
      case "onScroll":
        t != null && tn("scroll", n);
        break;
      case "onScrollEnd":
        t != null && tn("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(d(61));
          if (((e = t.__html), e != null)) {
            if (a.children != null) throw Error(d(60));
            n.innerHTML = e;
          }
        }
        break;
      case "multiple":
        n.multiple = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "muted":
        n.muted = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          t == null ||
          typeof t == "function" ||
          typeof t == "boolean" ||
          typeof t == "symbol"
        ) {
          n.removeAttribute("xlink:href");
          break;
        }
        ((e = Wa("" + t)),
          n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        t != null && typeof t != "function" && typeof t != "symbol"
          ? n.setAttribute(e, "" + t)
          : n.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        t && typeof t != "function" && typeof t != "symbol"
          ? n.setAttribute(e, "")
          : n.removeAttribute(e);
        break;
      case "capture":
      case "download":
        t === !0
          ? n.setAttribute(e, "")
          : t !== !1 &&
              t != null &&
              typeof t != "function" &&
              typeof t != "symbol"
            ? n.setAttribute(e, t)
            : n.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        t != null &&
        typeof t != "function" &&
        typeof t != "symbol" &&
        !isNaN(t) &&
        1 <= t
          ? n.setAttribute(e, t)
          : n.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        t == null || typeof t == "function" || typeof t == "symbol" || isNaN(t)
          ? n.removeAttribute(e)
          : n.setAttribute(e, t);
        break;
      case "popover":
        (tn("beforetoggle", n), tn("toggle", n), Ca(n, "popover", t));
        break;
      case "xlinkActuate":
        Zr(n, "http://www.w3.org/1999/xlink", "xlink:actuate", t);
        break;
      case "xlinkArcrole":
        Zr(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", t);
        break;
      case "xlinkRole":
        Zr(n, "http://www.w3.org/1999/xlink", "xlink:role", t);
        break;
      case "xlinkShow":
        Zr(n, "http://www.w3.org/1999/xlink", "xlink:show", t);
        break;
      case "xlinkTitle":
        Zr(n, "http://www.w3.org/1999/xlink", "xlink:title", t);
        break;
      case "xlinkType":
        Zr(n, "http://www.w3.org/1999/xlink", "xlink:type", t);
        break;
      case "xmlBase":
        Zr(n, "http://www.w3.org/XML/1998/namespace", "xml:base", t);
        break;
      case "xmlLang":
        Zr(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", t);
        break;
      case "xmlSpace":
        Zr(n, "http://www.w3.org/XML/1998/namespace", "xml:space", t);
        break;
      case "is":
        Ca(n, "is", t);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Gx.get(e) || e), Ca(n, e, t));
    }
  }
  function Yo(n, r, e, t, a, l) {
    switch (e) {
      case "style":
        Wc(n, t, l);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(d(61));
          if (((e = t.__html), e != null)) {
            if (a.children != null) throw Error(d(60));
            n.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof t == "string"
          ? rt(n, t)
          : (typeof t == "number" || typeof t == "bigint") && rt(n, "" + t);
        break;
      case "onScroll":
        t != null && tn("scroll", n);
        break;
      case "onScrollEnd":
        t != null && tn("scrollend", n);
        break;
      case "onClick":
        t != null && (n.onclick = Hr);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!kc.hasOwnProperty(e))
          n: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((a = e.endsWith("Capture")),
              (r = e.slice(2, a ? e.length - 7 : void 0)),
              (l = n[tr] || null),
              (l = l != null ? l[e] : null),
              typeof l == "function" && n.removeEventListener(r, l, a),
              typeof t == "function")
            ) {
              (typeof l != "function" &&
                l !== null &&
                (e in n
                  ? (n[e] = null)
                  : n.hasAttribute(e) && n.removeAttribute(e)),
                n.addEventListener(r, t, a));
              break n;
            }
            e in n
              ? (n[e] = t)
              : t === !0
                ? n.setAttribute(e, "")
                : Ca(n, e, t);
          }
    }
  }
  function Kn(n, r, e) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (tn("error", n), tn("load", n));
        var t = !1,
          a = !1,
          l;
        for (l in e)
          if (e.hasOwnProperty(l)) {
            var i = e[l];
            if (i != null)
              switch (l) {
                case "src":
                  t = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, r));
                default:
                  gn(n, r, l, i, e, null);
              }
          }
        (a && gn(n, r, "srcSet", e.srcSet, e, null),
          t && gn(n, r, "src", e.src, e, null));
        return;
      case "input":
        tn("invalid", n);
        var o = (l = i = a = null),
          c = null,
          f = null;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var h = e[t];
            if (h != null)
              switch (t) {
                case "name":
                  a = h;
                  break;
                case "type":
                  i = h;
                  break;
                case "checked":
                  c = h;
                  break;
                case "defaultChecked":
                  f = h;
                  break;
                case "value":
                  l = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (h != null) throw Error(d(137, r));
                  break;
                default:
                  gn(n, r, t, h, e, null);
              }
          }
        Sc(n, l, o, c, f, i, a, !1);
        return;
      case "select":
        (tn("invalid", n), (t = i = l = null));
        for (a in e)
          if (e.hasOwnProperty(a) && ((o = e[a]), o != null))
            switch (a) {
              case "value":
                l = o;
                break;
              case "defaultValue":
                i = o;
                break;
              case "multiple":
                t = o;
              default:
                gn(n, r, a, o, e, null);
            }
        ((r = l),
          (e = i),
          (n.multiple = !!t),
          r != null ? nt(n, !!t, r, !1) : e != null && nt(n, !!t, e, !0));
        return;
      case "textarea":
        (tn("invalid", n), (l = a = t = null));
        for (i in e)
          if (e.hasOwnProperty(i) && ((o = e[i]), o != null))
            switch (i) {
              case "value":
                t = o;
                break;
              case "defaultValue":
                a = o;
                break;
              case "children":
                l = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(d(91));
                break;
              default:
                gn(n, r, i, o, e, null);
            }
        zc(n, t, a, l);
        return;
      case "option":
        for (c in e)
          e.hasOwnProperty(c) &&
            ((t = e[c]), t != null) &&
            (c === "selected"
              ? (n.selected =
                  t && typeof t != "function" && typeof t != "symbol")
              : gn(n, r, c, t, e, null));
        return;
      case "dialog":
        (tn("beforetoggle", n),
          tn("toggle", n),
          tn("cancel", n),
          tn("close", n));
        break;
      case "iframe":
      case "object":
        tn("load", n);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Qa.length; t++) tn(Qa[t], n);
        break;
      case "image":
        (tn("error", n), tn("load", n));
        break;
      case "details":
        tn("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        (tn("error", n), tn("load", n));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (f in e)
          if (e.hasOwnProperty(f) && ((t = e[f]), t != null))
            switch (f) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, r));
              default:
                gn(n, r, f, t, e, null);
            }
        return;
      default:
        if (ti(r)) {
          for (h in e)
            e.hasOwnProperty(h) &&
              ((t = e[h]), t !== void 0 && Yo(n, r, h, t, e, void 0));
          return;
        }
    }
    for (o in e)
      e.hasOwnProperty(o) && ((t = e[o]), t != null && gn(n, r, o, t, e, null));
  }
  function yf(n, r, e, t) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null,
          l = null,
          i = null,
          o = null,
          c = null,
          f = null,
          h = null;
        for (b in e) {
          var g = e[b];
          if (e.hasOwnProperty(b) && g != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = g;
              default:
                t.hasOwnProperty(b) || gn(n, r, b, null, t, g);
            }
        }
        for (var Q in t) {
          var b = t[Q];
          if (((g = e[Q]), t.hasOwnProperty(Q) && (b != null || g != null)))
            switch (Q) {
              case "type":
                l = b;
                break;
              case "name":
                a = b;
                break;
              case "checked":
                f = b;
                break;
              case "defaultChecked":
                h = b;
                break;
              case "value":
                i = b;
                break;
              case "defaultValue":
                o = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(d(137, r));
                break;
              default:
                b !== g && gn(n, r, Q, b, t, g);
            }
        }
        ri(n, i, o, c, f, h, l, a);
        return;
      case "select":
        b = i = o = Q = null;
        for (l in e)
          if (((c = e[l]), e.hasOwnProperty(l) && c != null))
            switch (l) {
              case "value":
                break;
              case "multiple":
                b = c;
              default:
                t.hasOwnProperty(l) || gn(n, r, l, null, t, c);
            }
        for (a in t)
          if (
            ((l = t[a]),
            (c = e[a]),
            t.hasOwnProperty(a) && (l != null || c != null))
          )
            switch (a) {
              case "value":
                Q = l;
                break;
              case "defaultValue":
                o = l;
                break;
              case "multiple":
                i = l;
              default:
                l !== c && gn(n, r, a, l, t, c);
            }
        ((r = o),
          (e = i),
          (t = b),
          Q != null
            ? nt(n, !!e, Q, !1)
            : !!t != !!e &&
              (r != null ? nt(n, !!e, r, !0) : nt(n, !!e, e ? [] : "", !1)));
        return;
      case "textarea":
        b = Q = null;
        for (o in e)
          if (
            ((a = e[o]),
            e.hasOwnProperty(o) && a != null && !t.hasOwnProperty(o))
          )
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                gn(n, r, o, null, t, a);
            }
        for (i in t)
          if (
            ((a = t[i]),
            (l = e[i]),
            t.hasOwnProperty(i) && (a != null || l != null))
          )
            switch (i) {
              case "value":
                Q = a;
                break;
              case "defaultValue":
                b = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(d(91));
                break;
              default:
                a !== l && gn(n, r, i, a, t, l);
            }
        Cc(n, Q, b);
        return;
      case "option":
        for (var z in e)
          ((Q = e[z]),
            e.hasOwnProperty(z) &&
              Q != null &&
              !t.hasOwnProperty(z) &&
              (z === "selected" ? (n.selected = !1) : gn(n, r, z, null, t, Q)));
        for (c in t)
          ((Q = t[c]),
            (b = e[c]),
            t.hasOwnProperty(c) &&
              Q !== b &&
              (Q != null || b != null) &&
              (c === "selected"
                ? (n.selected =
                    Q && typeof Q != "function" && typeof Q != "symbol")
                : gn(n, r, c, Q, t, b)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in e)
          ((Q = e[N]),
            e.hasOwnProperty(N) &&
              Q != null &&
              !t.hasOwnProperty(N) &&
              gn(n, r, N, null, t, Q));
        for (f in t)
          if (
            ((Q = t[f]),
            (b = e[f]),
            t.hasOwnProperty(f) && Q !== b && (Q != null || b != null))
          )
            switch (f) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null) throw Error(d(137, r));
                break;
              default:
                gn(n, r, f, Q, t, b);
            }
        return;
      default:
        if (ti(r)) {
          for (var Fn in e)
            ((Q = e[Fn]),
              e.hasOwnProperty(Fn) &&
                Q !== void 0 &&
                !t.hasOwnProperty(Fn) &&
                Yo(n, r, Fn, void 0, t, Q));
          for (h in t)
            ((Q = t[h]),
              (b = e[h]),
              !t.hasOwnProperty(h) ||
                Q === b ||
                (Q === void 0 && b === void 0) ||
                Yo(n, r, h, Q, t, b));
          return;
        }
    }
    for (var x in e)
      ((Q = e[x]),
        e.hasOwnProperty(x) &&
          Q != null &&
          !t.hasOwnProperty(x) &&
          gn(n, r, x, null, t, Q));
    for (g in t)
      ((Q = t[g]),
        (b = e[g]),
        !t.hasOwnProperty(g) ||
          Q === b ||
          (Q == null && b == null) ||
          gn(n, r, g, Q, t, b));
  }
  function Ad(n) {
    switch (n) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Bf() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var n = 0, r = 0, e = performance.getEntriesByType("resource"), t = 0;
        t < e.length;
        t++
      ) {
        var a = e[t],
          l = a.transferSize,
          i = a.initiatorType,
          o = a.duration;
        if (l && o && Ad(i)) {
          for (i = 0, o = a.responseEnd, t += 1; t < e.length; t++) {
            var c = e[t],
              f = c.startTime;
            if (f > o) break;
            var h = c.transferSize,
              g = c.initiatorType;
            h &&
              Ad(g) &&
              ((c = c.responseEnd), (i += h * (c < o ? 1 : (o - f) / (c - f))));
          }
          if ((--t, (r += (8 * (l + i)) / (a.duration / 1e3)), n++, 10 < n))
            break;
        }
      }
      if (0 < n) return r / n / 1e6;
    }
    return navigator.connection &&
      ((n = navigator.connection.downlink), typeof n == "number")
      ? n
      : 5;
  }
  var Lo = null,
    Go = null;
  function jl(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function Md(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dd(n, r) {
    if (n === 0)
      switch (r) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && r === "foreignObject" ? 0 : n;
  }
  function Xo(n, r) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      typeof r.children == "bigint" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jo = null;
  function gf() {
    var n = window.event;
    return n && n.type === "popstate"
      ? n === Jo
        ? !1
        : ((Jo = n), !0)
      : ((Jo = null), !1);
  }
  var Vd = typeof setTimeout == "function" ? setTimeout : void 0,
    Ff = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zd = typeof Promise == "function" ? Promise : void 0,
    Uf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zd < "u"
          ? function (n) {
              return Zd.resolve(null).then(n).catch(wf);
            }
          : Vd;
  function wf(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function Ue(n) {
    return n === "head";
  }
  function Hd(n, r) {
    var e = r,
      t = 0;
    do {
      var a = e.nextSibling;
      if ((n.removeChild(e), a && a.nodeType === 8))
        if (((e = a.data), e === "/$" || e === "/&")) {
          if (t === 0) {
            (n.removeChild(a), St(r));
            return;
          }
          t--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          t++;
        else if (e === "html") va(n.ownerDocument.documentElement);
        else if (e === "head") {
          ((e = n.ownerDocument.head), va(e));
          for (var l = e.firstChild; l; ) {
            var i = l.nextSibling,
              o = l.nodeName;
            (l[Wt] ||
              o === "SCRIPT" ||
              o === "STYLE" ||
              (o === "LINK" && l.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(l),
              (l = i));
          }
        } else e === "body" && va(n.ownerDocument.body);
      e = a;
    } while (e);
    St(r);
  }
  function Nd(n, r) {
    var e = n;
    n = 0;
    do {
      var t = e.nextSibling;
      if (
        (e.nodeType === 1
          ? r
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (r
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        t && t.nodeType === 8)
      )
        if (((e = t.data), e === "/$")) {
          if (n === 0) break;
          n--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || n++;
      e = t;
    } while (e);
  }
  function qo(n) {
    var r = n.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var e = r;
      switch (((r = r.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (qo(e), Pl(e));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(e);
    }
  }
  function Of(n, r, e, t) {
    for (; n.nodeType === 1; ) {
      var a = e;
      if (n.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!t && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (t) {
        if (!n[Wt])
          switch (r) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (
                ((l = n.getAttribute("rel")),
                l === "stylesheet" && n.hasAttribute("data-precedence"))
              )
                break;
              if (
                l !== a.rel ||
                n.getAttribute("href") !==
                  (a.href == null || a.href === "" ? null : a.href) ||
                n.getAttribute("crossorigin") !==
                  (a.crossOrigin == null ? null : a.crossOrigin) ||
                n.getAttribute("title") !== (a.title == null ? null : a.title)
              )
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (
                ((l = n.getAttribute("src")),
                (l !== (a.src == null ? null : a.src) ||
                  n.getAttribute("type") !== (a.type == null ? null : a.type) ||
                  n.getAttribute("crossorigin") !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  l &&
                  n.hasAttribute("async") &&
                  !n.hasAttribute("itemprop"))
              )
                break;
              return n;
            default:
              return n;
          }
      } else if (r === "input" && n.type === "hidden") {
        var l = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && n.getAttribute("name") === l) return n;
      } else return n;
      if (((n = jr(n.nextSibling)), n === null)) break;
    }
    return null;
  }
  function kf(n, r, e) {
    if (r === "") return null;
    for (; n.nodeType !== 3; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !e) ||
        ((n = jr(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function Yd(n, r) {
    for (; n.nodeType !== 8; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !r) ||
        ((n = jr(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function Io(n) {
    return n.data === "$?" || n.data === "$~";
  }
  function Ko(n) {
    return (
      n.data === "$!" ||
      (n.data === "$?" && n.ownerDocument.readyState !== "loading")
    );
  }
  function Ef(n, r) {
    var e = n.ownerDocument;
    if (n.data === "$~") n._reactRetry = r;
    else if (n.data !== "$?" || e.readyState !== "loading") r();
    else {
      var t = function () {
        (r(), e.removeEventListener("DOMContentLoaded", t));
      };
      (e.addEventListener("DOMContentLoaded", t), (n._reactRetry = t));
    }
  }
  function jr(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (
          ((r = n.data),
          r === "$" ||
            r === "$!" ||
            r === "$?" ||
            r === "$~" ||
            r === "&" ||
            r === "F!" ||
            r === "F")
        )
          break;
        if (r === "/$" || r === "/&") return null;
      }
    }
    return n;
  }
  var $o = null;
  function Ld(n) {
    n = n.nextSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var e = n.data;
        if (e === "/$" || e === "/&") {
          if (r === 0) return jr(n.nextSibling);
          r--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            r++;
      }
      n = n.nextSibling;
    }
    return null;
  }
  function Gd(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var e = n.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (r === 0) return n;
          r--;
        } else (e !== "/$" && e !== "/&") || r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function Xd(n, r, e) {
    switch (((r = jl(e)), n)) {
      case "html":
        if (((n = r.documentElement), !n)) throw Error(d(452));
        return n;
      case "head":
        if (((n = r.head), !n)) throw Error(d(453));
        return n;
      case "body":
        if (((n = r.body), !n)) throw Error(d(454));
        return n;
      default:
        throw Error(d(451));
    }
  }
  function va(n) {
    for (var r = n.attributes; r.length; ) n.removeAttributeNode(r[0]);
    Pl(n);
  }
  var Sr = new Map(),
    Jd = new Set();
  function Sl(n) {
    return typeof n.getRootNode == "function"
      ? n.getRootNode()
      : n.nodeType === 9
        ? n
        : n.ownerDocument;
  }
  var ae = _.d;
  _.d = { f: _f, r: Tf, D: jf, C: Sf, L: Cf, m: zf, X: Wf, S: Rf, M: Af };
  function _f() {
    var n = ae.f(),
      r = Fl();
    return n || r;
  }
  function Tf(n) {
    var r = Ke(n);
    r !== null && r.tag === 5 && r.type === "form" ? du(r) : ae.r(n);
  }
  var _t = typeof document > "u" ? null : document;
  function qd(n, r, e) {
    var t = _t;
    if (t && typeof r == "string" && r) {
      var a = Ur(r);
      ((a = 'link[rel="' + n + '"][href="' + a + '"]'),
        typeof e == "string" && (a += '[crossorigin="' + e + '"]'),
        Jd.has(a) ||
          (Jd.add(a),
          (n = { rel: n, crossOrigin: e, href: r }),
          t.querySelector(a) === null &&
            ((r = t.createElement("link")),
            Kn(r, "link", n),
            Yn(r),
            t.head.appendChild(r))));
    }
  }
  function jf(n) {
    (ae.D(n), qd("dns-prefetch", n, null));
  }
  function Sf(n, r) {
    (ae.C(n, r), qd("preconnect", n, r));
  }
  function Cf(n, r, e) {
    ae.L(n, r, e);
    var t = _t;
    if (t && n && r) {
      var a = 'link[rel="preload"][as="' + Ur(r) + '"]';
      r === "image" && e && e.imageSrcSet
        ? ((a += '[imagesrcset="' + Ur(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (a += '[imagesizes="' + Ur(e.imageSizes) + '"]'))
        : (a += '[href="' + Ur(n) + '"]');
      var l = a;
      switch (r) {
        case "style":
          l = Tt(n);
          break;
        case "script":
          l = jt(n);
      }
      Sr.has(l) ||
        ((n = O(
          {
            rel: "preload",
            href: r === "image" && e && e.imageSrcSet ? void 0 : n,
            as: r,
          },
          e,
        )),
        Sr.set(l, n),
        t.querySelector(a) !== null ||
          (r === "style" && t.querySelector(ha(l))) ||
          (r === "script" && t.querySelector(ya(l))) ||
          ((r = t.createElement("link")),
          Kn(r, "link", n),
          Yn(r),
          t.head.appendChild(r)));
    }
  }
  function zf(n, r) {
    ae.m(n, r);
    var e = _t;
    if (e && n) {
      var t = r && typeof r.as == "string" ? r.as : "script",
        a =
          'link[rel="modulepreload"][as="' + Ur(t) + '"][href="' + Ur(n) + '"]',
        l = a;
      switch (t) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          l = jt(n);
      }
      if (
        !Sr.has(l) &&
        ((n = O({ rel: "modulepreload", href: n }, r)),
        Sr.set(l, n),
        e.querySelector(a) === null)
      ) {
        switch (t) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(ya(l))) return;
        }
        ((t = e.createElement("link")),
          Kn(t, "link", n),
          Yn(t),
          e.head.appendChild(t));
      }
    }
  }
  function Rf(n, r, e) {
    ae.S(n, r, e);
    var t = _t;
    if (t && n) {
      var a = $e(t).hoistableStyles,
        l = Tt(n);
      r = r || "default";
      var i = a.get(l);
      if (!i) {
        var o = { loading: 0, preload: null };
        if ((i = t.querySelector(ha(l)))) o.loading = 5;
        else {
          ((n = O({ rel: "stylesheet", href: n, "data-precedence": r }, e)),
            (e = Sr.get(l)) && Po(n, e));
          var c = (i = t.createElement("link"));
          (Yn(c),
            Kn(c, "link", n),
            (c._p = new Promise(function (f, h) {
              ((c.onload = f), (c.onerror = h));
            })),
            c.addEventListener("load", function () {
              o.loading |= 1;
            }),
            c.addEventListener("error", function () {
              o.loading |= 2;
            }),
            (o.loading |= 4),
            Cl(i, r, t));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: o }),
          a.set(l, i));
      }
    }
  }
  function Wf(n, r) {
    ae.X(n, r);
    var e = _t;
    if (e && n) {
      var t = $e(e).hoistableScripts,
        a = jt(n),
        l = t.get(a);
      l ||
        ((l = e.querySelector(ya(a))),
        l ||
          ((n = O({ src: n, async: !0 }, r)),
          (r = Sr.get(a)) && nc(n, r),
          (l = e.createElement("script")),
          Yn(l),
          Kn(l, "link", n),
          e.head.appendChild(l)),
        (l = { type: "script", instance: l, count: 1, state: null }),
        t.set(a, l));
    }
  }
  function Af(n, r) {
    ae.M(n, r);
    var e = _t;
    if (e && n) {
      var t = $e(e).hoistableScripts,
        a = jt(n),
        l = t.get(a);
      l ||
        ((l = e.querySelector(ya(a))),
        l ||
          ((n = O({ src: n, async: !0, type: "module" }, r)),
          (r = Sr.get(a)) && nc(n, r),
          (l = e.createElement("script")),
          Yn(l),
          Kn(l, "link", n),
          e.head.appendChild(l)),
        (l = { type: "script", instance: l, count: 1, state: null }),
        t.set(a, l));
    }
  }
  function Id(n, r, e, t) {
    var a = (a = Y.current) ? Sl(a) : null;
    if (!a) throw Error(d(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((r = Tt(e.href)),
            (e = $e(a).hoistableStyles),
            (t = e.get(r)),
            t ||
              ((t = { type: "style", instance: null, count: 0, state: null }),
              e.set(r, t)),
            t)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          n = Tt(e.href);
          var l = $e(a).hoistableStyles,
            i = l.get(n);
          if (
            (i ||
              ((a = a.ownerDocument || a),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              l.set(n, i),
              (l = a.querySelector(ha(n))) &&
                !l._p &&
                ((i.instance = l), (i.state.loading = 5)),
              Sr.has(n) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                Sr.set(n, e),
                l || Mf(a, n, e, i.state))),
            r && t === null)
          )
            throw Error(d(528, ""));
          return i;
        }
        if (r && t !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (r = e.async),
          (e = e.src),
          typeof e == "string" &&
          r &&
          typeof r != "function" &&
          typeof r != "symbol"
            ? ((r = jt(e)),
              (e = $e(a).hoistableScripts),
              (t = e.get(r)),
              t ||
                ((t = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(r, t)),
              t)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, n));
    }
  }
  function Tt(n) {
    return 'href="' + Ur(n) + '"';
  }
  function ha(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function Kd(n) {
    return O({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function Mf(n, r, e, t) {
    n.querySelector('link[rel="preload"][as="style"][' + r + "]")
      ? (t.loading = 1)
      : ((r = n.createElement("link")),
        (t.preload = r),
        r.addEventListener("load", function () {
          return (t.loading |= 1);
        }),
        r.addEventListener("error", function () {
          return (t.loading |= 2);
        }),
        Kn(r, "link", e),
        Yn(r),
        n.head.appendChild(r));
  }
  function jt(n) {
    return '[src="' + Ur(n) + '"]';
  }
  function ya(n) {
    return "script[async]" + n;
  }
  function $d(n, r, e) {
    if ((r.count++, r.instance === null))
      switch (r.type) {
        case "style":
          var t = n.querySelector('style[data-href~="' + Ur(e.href) + '"]');
          if (t) return ((r.instance = t), Yn(t), t);
          var a = O({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (t = (n.ownerDocument || n).createElement("style")),
            Yn(t),
            Kn(t, "style", a),
            Cl(t, e.precedence, n),
            (r.instance = t)
          );
        case "stylesheet":
          a = Tt(e.href);
          var l = n.querySelector(ha(a));
          if (l) return ((r.state.loading |= 4), (r.instance = l), Yn(l), l);
          ((t = Kd(e)),
            (a = Sr.get(a)) && Po(t, a),
            (l = (n.ownerDocument || n).createElement("link")),
            Yn(l));
          var i = l;
          return (
            (i._p = new Promise(function (o, c) {
              ((i.onload = o), (i.onerror = c));
            })),
            Kn(l, "link", t),
            (r.state.loading |= 4),
            Cl(l, e.precedence, n),
            (r.instance = l)
          );
        case "script":
          return (
            (l = jt(e.src)),
            (a = n.querySelector(ya(l)))
              ? ((r.instance = a), Yn(a), a)
              : ((t = e),
                (a = Sr.get(l)) && ((t = O({}, e)), nc(t, a)),
                (n = n.ownerDocument || n),
                (a = n.createElement("script")),
                Yn(a),
                Kn(a, "link", t),
                n.head.appendChild(a),
                (r.instance = a))
          );
        case "void":
          return null;
        default:
          throw Error(d(443, r.type));
      }
    else
      r.type === "stylesheet" &&
        (r.state.loading & 4) === 0 &&
        ((t = r.instance), (r.state.loading |= 4), Cl(t, e.precedence, n));
    return r.instance;
  }
  function Cl(n, r, e) {
    for (
      var t = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        a = t.length ? t[t.length - 1] : null,
        l = a,
        i = 0;
      i < t.length;
      i++
    ) {
      var o = t[i];
      if (o.dataset.precedence === r) l = o;
      else if (l !== a) break;
    }
    l
      ? l.parentNode.insertBefore(n, l.nextSibling)
      : ((r = e.nodeType === 9 ? e.head : e), r.insertBefore(n, r.firstChild));
  }
  function Po(n, r) {
    (n.crossOrigin == null && (n.crossOrigin = r.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy),
      n.title == null && (n.title = r.title));
  }
  function nc(n, r) {
    (n.crossOrigin == null && (n.crossOrigin = r.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy),
      n.integrity == null && (n.integrity = r.integrity));
  }
  var zl = null;
  function Pd(n, r, e) {
    if (zl === null) {
      var t = new Map(),
        a = (zl = new Map());
      a.set(e, t);
    } else ((a = zl), (t = a.get(e)), t || ((t = new Map()), a.set(e, t)));
    if (t.has(n)) return t;
    for (
      t.set(n, null), e = e.getElementsByTagName(n), a = 0;
      a < e.length;
      a++
    ) {
      var l = e[a];
      if (
        !(
          l[Wt] ||
          l[Xn] ||
          (n === "link" && l.getAttribute("rel") === "stylesheet")
        ) &&
        l.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = l.getAttribute(r) || "";
        i = n + i;
        var o = t.get(i);
        o ? o.push(l) : t.set(i, [l]);
      }
    }
    return t;
  }
  function nx(n, r, e) {
    ((n = n.ownerDocument || n),
      n.head.insertBefore(
        e,
        r === "title" ? n.querySelector("head > title") : null,
      ));
  }
  function Df(n, r, e) {
    if (e === 1 || r.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof r.precedence != "string" ||
          typeof r.href != "string" ||
          r.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof r.rel != "string" ||
          typeof r.href != "string" ||
          r.href === "" ||
          r.onLoad ||
          r.onError
        )
          break;
        return r.rel === "stylesheet"
          ? ((n = r.disabled), typeof r.precedence == "string" && n == null)
          : !0;
      case "script":
        if (
          r.async &&
          typeof r.async != "function" &&
          typeof r.async != "symbol" &&
          !r.onLoad &&
          !r.onError &&
          r.src &&
          typeof r.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function rx(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  function Vf(n, r, e, t) {
    if (
      e.type === "stylesheet" &&
      (typeof t.media != "string" || matchMedia(t.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var a = Tt(t.href),
          l = r.querySelector(ha(a));
        if (l) {
          ((r = l._p),
            r !== null &&
              typeof r == "object" &&
              typeof r.then == "function" &&
              (n.count++, (n = Rl.bind(n)), r.then(n, n)),
            (e.state.loading |= 4),
            (e.instance = l),
            Yn(l));
          return;
        }
        ((l = r.ownerDocument || r),
          (t = Kd(t)),
          (a = Sr.get(a)) && Po(t, a),
          (l = l.createElement("link")),
          Yn(l));
        var i = l;
        ((i._p = new Promise(function (o, c) {
          ((i.onload = o), (i.onerror = c));
        })),
          Kn(l, "link", t),
          (e.instance = l));
      }
      (n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(e, r),
        (r = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (n.count++,
          (e = Rl.bind(n)),
          r.addEventListener("load", e),
          r.addEventListener("error", e)));
    }
  }
  var rc = 0;
  function Zf(n, r) {
    return (
      n.stylesheets && n.count === 0 && Al(n, n.stylesheets),
      0 < n.count || 0 < n.imgCount
        ? function (e) {
            var t = setTimeout(function () {
              if ((n.stylesheets && Al(n, n.stylesheets), n.unsuspend)) {
                var l = n.unsuspend;
                ((n.unsuspend = null), l());
              }
            }, 6e4 + r);
            0 < n.imgBytes && rc === 0 && (rc = 62500 * Bf());
            var a = setTimeout(
              function () {
                if (
                  ((n.waitingForImages = !1),
                  n.count === 0 &&
                    (n.stylesheets && Al(n, n.stylesheets), n.unsuspend))
                ) {
                  var l = n.unsuspend;
                  ((n.unsuspend = null), l());
                }
              },
              (n.imgBytes > rc ? 50 : 800) + r,
            );
            return (
              (n.unsuspend = e),
              function () {
                ((n.unsuspend = null), clearTimeout(t), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function Rl() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Al(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        ((this.unsuspend = null), n());
      }
    }
  }
  var Wl = null;
  function Al(n, r) {
    ((n.stylesheets = null),
      n.unsuspend !== null &&
        (n.count++,
        (Wl = new Map()),
        r.forEach(Hf, n),
        (Wl = null),
        Rl.call(n)));
  }
  function Hf(n, r) {
    if (!(r.state.loading & 4)) {
      var e = Wl.get(n);
      if (e) var t = e.get(null);
      else {
        ((e = new Map()), Wl.set(n, e));
        for (
          var a = n.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            l = 0;
          l < a.length;
          l++
        ) {
          var i = a[l];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (t = i));
        }
        t && e.set(null, t);
      }
      ((a = r.instance),
        (i = a.getAttribute("data-precedence")),
        (l = e.get(i) || t),
        l === t && e.set(null, a),
        e.set(i, a),
        this.count++,
        (t = Rl.bind(this)),
        a.addEventListener("load", t),
        a.addEventListener("error", t),
        l
          ? l.parentNode.insertBefore(a, l.nextSibling)
          : ((n = n.nodeType === 9 ? n.head : n),
            n.insertBefore(a, n.firstChild)),
        (r.state.loading |= 4));
    }
  }
  var Ba = {
    $$typeof: Tn,
    Provider: null,
    Consumer: null,
    _currentValue: D,
    _currentValue2: D,
    _threadCount: 0,
  };
  function Nf(n, r, e, t, a, l, i, o, c) {
    ((this.tag = 1),
      (this.containerInfo = n),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ql(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ql(0)),
      (this.hiddenUpdates = ql(null)),
      (this.identifierPrefix = t),
      (this.onUncaughtError = a),
      (this.onCaughtError = l),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map()));
  }
  function ex(n, r, e, t, a, l, i, o, c, f, h, g) {
    return (
      (n = new Nf(n, r, e, i, c, f, h, g, o)),
      (r = 1),
      l === !0 && (r |= 24),
      (l = Qr(3, null, null, r)),
      (n.current = l),
      (l.stateNode = n),
      (r = Ci()),
      r.refCount++,
      (n.pooledCache = r),
      r.refCount++,
      (l.memoizedState = { element: t, isDehydrated: e, cache: r }),
      Ai(l),
      n
    );
  }
  function tx(n) {
    return n ? ((n = ct), n) : ct;
  }
  function ax(n, r, e, t, a, l) {
    ((a = tx(a)),
      t.context === null ? (t.context = a) : (t.pendingContext = a),
      (t = me(r)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = fe(n, t, r)),
      e !== null && (sr(e, n, r), Pt(e, n, r)));
  }
  function lx(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var e = n.retryLane;
      n.retryLane = e !== 0 && e < r ? e : r;
    }
  }
  function ec(n, r) {
    (lx(n, r), (n = n.alternate) && lx(n, r));
  }
  function ix(n) {
    if (n.tag === 13 || n.tag === 31) {
      var r = Re(n, 67108864);
      (r !== null && sr(r, n, 67108864), ec(n, 67108864));
    }
  }
  function ox(n) {
    if (n.tag === 13 || n.tag === 31) {
      var r = Br();
      r = Il(r);
      var e = Re(n, r);
      (e !== null && sr(e, n, r), ec(n, r));
    }
  }
  var Ml = !0;
  function Yf(n, r, e, t) {
    var a = v.T;
    v.T = null;
    var l = _.p;
    try {
      ((_.p = 2), tc(n, r, e, t));
    } finally {
      ((_.p = l), (v.T = a));
    }
  }
  function Lf(n, r, e, t) {
    var a = v.T;
    v.T = null;
    var l = _.p;
    try {
      ((_.p = 8), tc(n, r, e, t));
    } finally {
      ((_.p = l), (v.T = a));
    }
  }
  function tc(n, r, e, t) {
    if (Ml) {
      var a = ac(t);
      if (a === null) (No(n, r, t, Dl, e), sx(n, t));
      else if (Xf(a, n, r, e, t)) t.stopPropagation();
      else if ((sx(n, t), r & 4 && -1 < Gf.indexOf(n))) {
        for (; a !== null; ) {
          var l = Ke(a);
          if (l !== null)
            switch (l.tag) {
              case 3:
                if (((l = l.stateNode), l.current.memoizedState.isDehydrated)) {
                  var i = Te(l.pendingLanes);
                  if (i !== 0) {
                    var o = l;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                      var c = 1 << (31 - fr(i));
                      ((o.entanglements[1] |= c), (i &= ~c));
                    }
                    (Dr(l), (pn & 6) === 0 && ((Bl = xr() + 500), pa(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((o = Re(l, 2)), o !== null && sr(o, l, 2), Fl(), ec(l, 2));
            }
          if (((l = ac(t)), l === null && No(n, r, t, Dl, e), l === a)) break;
          a = l;
        }
        a !== null && t.stopPropagation();
      } else No(n, r, t, null, e);
    }
  }
  function ac(n) {
    return ((n = li(n)), lc(n));
  }
  var Dl = null;
  function lc(n) {
    if (((Dl = null), (n = Ie(n)), n !== null)) {
      var r = U(n);
      if (r === null) n = null;
      else {
        var e = r.tag;
        if (e === 13) {
          if (((n = W(r)), n !== null)) return n;
          n = null;
        } else if (e === 31) {
          if (((n = J(r)), n !== null)) return n;
          n = null;
        } else if (e === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          n = null;
        } else r !== n && (n = null);
      }
    }
    return ((Dl = n), null);
  }
  function cx(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Tx()) {
          case Qc:
            return 2;
          case bc:
            return 8;
          case Ea:
          case jx:
            return 32;
          case vc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ic = !1,
    we = null,
    Oe = null,
    ke = null,
    ga = new Map(),
    Fa = new Map(),
    Ee = [],
    Gf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function sx(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        we = null;
        break;
      case "dragenter":
      case "dragleave":
        Oe = null;
        break;
      case "mouseover":
      case "mouseout":
        ke = null;
        break;
      case "pointerover":
      case "pointerout":
        ga.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fa.delete(r.pointerId);
    }
  }
  function Ua(n, r, e, t, a, l) {
    return n === null || n.nativeEvent !== l
      ? ((n = {
          blockedOn: r,
          domEventName: e,
          eventSystemFlags: t,
          nativeEvent: l,
          targetContainers: [a],
        }),
        r !== null && ((r = Ke(r)), r !== null && ix(r)),
        n)
      : ((n.eventSystemFlags |= t),
        (r = n.targetContainers),
        a !== null && r.indexOf(a) === -1 && r.push(a),
        n);
  }
  function Xf(n, r, e, t, a) {
    switch (r) {
      case "focusin":
        return ((we = Ua(we, n, r, e, t, a)), !0);
      case "dragenter":
        return ((Oe = Ua(Oe, n, r, e, t, a)), !0);
      case "mouseover":
        return ((ke = Ua(ke, n, r, e, t, a)), !0);
      case "pointerover":
        var l = a.pointerId;
        return (ga.set(l, Ua(ga.get(l) || null, n, r, e, t, a)), !0);
      case "gotpointercapture":
        return (
          (l = a.pointerId),
          Fa.set(l, Ua(Fa.get(l) || null, n, r, e, t, a)),
          !0
        );
    }
    return !1;
  }
  function ux(n) {
    var r = Ie(n.target);
    if (r !== null) {
      var e = U(r);
      if (e !== null) {
        if (((r = e.tag), r === 13)) {
          if (((r = W(e)), r !== null)) {
            ((n.blockedOn = r),
              Uc(n.priority, function () {
                ox(e);
              }));
            return;
          }
        } else if (r === 31) {
          if (((r = J(e)), r !== null)) {
            ((n.blockedOn = r),
              Uc(n.priority, function () {
                ox(e);
              }));
            return;
          }
        } else if (r === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Vl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var e = ac(n.nativeEvent);
      if (e === null) {
        e = n.nativeEvent;
        var t = new e.constructor(e.type, e);
        ((ai = t), e.target.dispatchEvent(t), (ai = null));
      } else return ((r = Ke(e)), r !== null && ix(r), (n.blockedOn = e), !1);
      r.shift();
    }
    return !0;
  }
  function dx(n, r, e) {
    Vl(n) && e.delete(r);
  }
  function Jf() {
    ((ic = !1),
      we !== null && Vl(we) && (we = null),
      Oe !== null && Vl(Oe) && (Oe = null),
      ke !== null && Vl(ke) && (ke = null),
      ga.forEach(dx),
      Fa.forEach(dx));
  }
  function Zl(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      ic ||
        ((ic = !0),
        k.unstable_scheduleCallback(k.unstable_NormalPriority, Jf)));
  }
  var Hl = null;
  function xx(n) {
    Hl !== n &&
      ((Hl = n),
      k.unstable_scheduleCallback(k.unstable_NormalPriority, function () {
        Hl === n && (Hl = null);
        for (var r = 0; r < n.length; r += 3) {
          var e = n[r],
            t = n[r + 1],
            a = n[r + 2];
          if (typeof t != "function") {
            if (lc(t || e) === null) continue;
            break;
          }
          var l = Ke(e);
          l !== null &&
            (n.splice(r, 3),
            (r -= 3),
            to(l, { pending: !0, data: a, method: e.method, action: t }, t, a));
        }
      }));
  }
  function St(n) {
    function r(c) {
      return Zl(c, n);
    }
    (we !== null && Zl(we, n),
      Oe !== null && Zl(Oe, n),
      ke !== null && Zl(ke, n),
      ga.forEach(r),
      Fa.forEach(r));
    for (var e = 0; e < Ee.length; e++) {
      var t = Ee[e];
      t.blockedOn === n && (t.blockedOn = null);
    }
    for (; 0 < Ee.length && ((e = Ee[0]), e.blockedOn === null); )
      (ux(e), e.blockedOn === null && Ee.shift());
    if (((e = (n.ownerDocument || n).$$reactFormReplay), e != null))
      for (t = 0; t < e.length; t += 3) {
        var a = e[t],
          l = e[t + 1],
          i = a[tr] || null;
        if (typeof l == "function") i || xx(e);
        else if (i) {
          var o = null;
          if (l && l.hasAttribute("formAction")) {
            if (((a = l), (i = l[tr] || null))) o = i.formAction;
            else if (lc(a) !== null) continue;
          } else o = i.action;
          (typeof o == "function" ? (e[t + 1] = o) : (e.splice(t, 3), (t -= 3)),
            xx(e));
        }
      }
  }
  function mx() {
    function n(l) {
      l.canIntercept &&
        l.info === "react-transition" &&
        l.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (a = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function r() {
      (a !== null && (a(), (a = null)), t || setTimeout(e, 20));
    }
    function e() {
      if (!t && !navigation.transition) {
        var l = navigation.currentEntry;
        l &&
          l.url != null &&
          navigation.navigate(l.url, {
            state: l.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var t = !1,
        a = null;
      return (
        navigation.addEventListener("navigate", n),
        navigation.addEventListener("navigatesuccess", r),
        navigation.addEventListener("navigateerror", r),
        setTimeout(e, 100),
        function () {
          ((t = !0),
            navigation.removeEventListener("navigate", n),
            navigation.removeEventListener("navigatesuccess", r),
            navigation.removeEventListener("navigateerror", r),
            a !== null && (a(), (a = null)));
        }
      );
    }
  }
  function oc(n) {
    this._internalRoot = n;
  }
  ((Nl.prototype.render = oc.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(d(409));
      var e = r.current,
        t = Br();
      ax(e, t, n, r, null, null);
    }),
    (Nl.prototype.unmount = oc.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          (ax(n.current, 2, null, n, null, null), Fl(), (r[qe] = null));
        }
      }));
  function Nl(n) {
    this._internalRoot = n;
  }
  Nl.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = Fc();
      n = { blockedOn: null, target: n, priority: r };
      for (var e = 0; e < Ee.length && r !== 0 && r < Ee[e].priority; e++);
      (Ee.splice(e, 0, n), e === 0 && ux(n));
    }
  };
  var fx = P.version;
  if (fx !== "19.2.7") throw Error(d(527, fx, "19.2.7"));
  _.findDOMNode = function (n) {
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function"
        ? Error(d(188))
        : ((n = Object.keys(n).join(",")), Error(d(268, n)));
    return (
      (n = p(r)),
      (n = n !== null ? C(n) : null),
      (n = n === null ? null : n.stateNode),
      n
    );
  };
  var qf = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: v,
    reconcilerVersion: "19.2.7",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yl.isDisabled && Yl.supportsFiber)
      try {
        ((Ct = Yl.inject(qf)), (mr = Yl));
      } catch {}
  }
  return (
    (Oa.createRoot = function (n, r) {
      if (!F(n)) throw Error(d(299));
      var e = !1,
        t = "",
        a = Bu,
        l = gu,
        i = Fu;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (e = !0),
          r.identifierPrefix !== void 0 && (t = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (a = r.onUncaughtError),
          r.onCaughtError !== void 0 && (l = r.onCaughtError),
          r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
        (r = ex(n, 1, !1, null, null, e, t, null, a, l, i, mx)),
        (n[qe] = r.current),
        Ho(n),
        new oc(r)
      );
    }),
    (Oa.hydrateRoot = function (n, r, e) {
      if (!F(n)) throw Error(d(299));
      var t = !1,
        a = "",
        l = Bu,
        i = gu,
        o = Fu,
        c = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (t = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (o = e.onRecoverableError),
          e.formState !== void 0 && (c = e.formState)),
        (r = ex(n, 1, !0, r, e ?? null, t, a, c, l, i, o, mx)),
        (r.context = tx(null)),
        (e = r.current),
        (t = Br()),
        (t = Il(t)),
        (a = me(t)),
        (a.callback = null),
        fe(e, a, t),
        (e = t),
        (r.current.lanes = e),
        Rt(r, e),
        Dr(r),
        (n[qe] = r.current),
        Ho(n),
        new Nl(r)
      );
    }),
    (Oa.version = "19.2.7"),
    Oa
  );
}
var Ux;
function ip() {
  if (Ux) return uc.exports;
  Ux = 1;
  function k() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (P) {
        console.error(P);
      }
  }
  return (k(), (uc.exports = lp()), uc.exports);
}
var op = ip(),
  Ll = { exports: {} },
  cp = Ll.exports,
  wx;
function sp() {
  return (
    wx ||
      ((wx = 1),
      (function (k, P) {
        (function (S, d) {
          k.exports = d();
        })(cp, function () {
          return (function (S) {
            function d(U) {
              if (F[U]) return F[U].exports;
              var W = (F[U] = { exports: {}, id: U, loaded: !1 });
              return (
                S[U].call(W.exports, W, W.exports, d),
                (W.loaded = !0),
                W.exports
              );
            }
            var F = {};
            return ((d.m = S), (d.c = F), (d.p = "dist/"), d(0));
          })([
            function (S, d, F) {
              function U(Z) {
                return Z && Z.__esModule ? Z : { default: Z };
              }
              var W =
                  Object.assign ||
                  function (Z) {
                    for (var yn = 1; yn < arguments.length; yn++) {
                      var v = arguments[yn];
                      for (var _ in v)
                        Object.prototype.hasOwnProperty.call(v, _) &&
                          (Z[_] = v[_]);
                    }
                    return Z;
                  },
                J = F(1),
                w = (U(J), F(6)),
                p = U(w),
                C = F(7),
                O = U(C),
                M = F(8),
                G = U(M),
                $ = F(9),
                Qn = U($),
                _n = F(10),
                Wn = U(_n),
                rr = F(11),
                Tn = U(rr),
                Hn = F(14),
                Gn = U(Hn),
                hn = [],
                q = !1,
                nn = {
                  offset: 120,
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  disable: !1,
                  once: !1,
                  startEvent: "DOMContentLoaded",
                  throttleDelay: 99,
                  debounceDelay: 50,
                  disableMutationObserver: !1,
                },
                jn = function () {
                  var Z =
                    arguments.length > 0 &&
                    arguments[0] !== void 0 &&
                    arguments[0];
                  if ((Z && (q = !0), q))
                    return (
                      (hn = (0, Tn.default)(hn, nn)),
                      (0, Wn.default)(hn, nn.once),
                      hn
                    );
                },
                Pn = function () {
                  ((hn = (0, Gn.default)()), jn());
                },
                A = function () {
                  hn.forEach(function (Z, yn) {
                    (Z.node.removeAttribute("data-aos"),
                      Z.node.removeAttribute("data-aos-easing"),
                      Z.node.removeAttribute("data-aos-duration"),
                      Z.node.removeAttribute("data-aos-delay"));
                  });
                },
                T = function (Z) {
                  return (
                    Z === !0 ||
                    (Z === "mobile" && Qn.default.mobile()) ||
                    (Z === "phone" && Qn.default.phone()) ||
                    (Z === "tablet" && Qn.default.tablet()) ||
                    (typeof Z == "function" && Z() === !0)
                  );
                },
                rn = function (Z) {
                  ((nn = W(nn, Z)), (hn = (0, Gn.default)()));
                  var yn = document.all && !window.atob;
                  return T(nn.disable) || yn
                    ? A()
                    : (nn.disableMutationObserver ||
                        G.default.isSupported() ||
                        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                        (nn.disableMutationObserver = !0)),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-easing", nn.easing),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-duration", nn.duration),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-delay", nn.delay),
                      nn.startEvent === "DOMContentLoaded" &&
                      ["complete", "interactive"].indexOf(document.readyState) >
                        -1
                        ? jn(!0)
                        : nn.startEvent === "load"
                          ? window.addEventListener(nn.startEvent, function () {
                              jn(!0);
                            })
                          : document.addEventListener(
                              nn.startEvent,
                              function () {
                                jn(!0);
                              },
                            ),
                      window.addEventListener(
                        "resize",
                        (0, O.default)(jn, nn.debounceDelay, !0),
                      ),
                      window.addEventListener(
                        "orientationchange",
                        (0, O.default)(jn, nn.debounceDelay, !0),
                      ),
                      window.addEventListener(
                        "scroll",
                        (0, p.default)(function () {
                          (0, Wn.default)(hn, nn.once);
                        }, nn.throttleDelay),
                      ),
                      nn.disableMutationObserver ||
                        G.default.ready("[data-aos]", Pn),
                      hn);
                };
              S.exports = { init: rn, refresh: jn, refreshHard: Pn };
            },
            function (S, d) {},
            ,
            ,
            ,
            ,
            function (S, d) {
              (function (F) {
                function U(T, rn, Z) {
                  function yn(ln) {
                    var Nn = j,
                      gr = H;
                    return ((j = H = void 0), (er = ln), (L = T.apply(gr, Nn)));
                  }
                  function v(ln) {
                    return (
                      (er = ln),
                      (sn = setTimeout(an, rn)),
                      ur ? yn(ln) : L
                    );
                  }
                  function _(ln) {
                    var Nn = ln - un,
                      gr = ln - er,
                      ka = rn - Nn;
                    return dr ? Pn(ka, Y - gr) : ka;
                  }
                  function D(ln) {
                    var Nn = ln - un,
                      gr = ln - er;
                    return (
                      un === void 0 || Nn >= rn || Nn < 0 || (dr && gr >= Y)
                    );
                  }
                  function an() {
                    var ln = A();
                    return D(ln) ? xn(ln) : void (sn = setTimeout(an, _(ln)));
                  }
                  function xn(ln) {
                    return (
                      (sn = void 0),
                      wn && j ? yn(ln) : ((j = H = void 0), L)
                    );
                  }
                  function u() {
                    (sn !== void 0 && clearTimeout(sn),
                      (er = 0),
                      (j = un = H = sn = void 0));
                  }
                  function B() {
                    return sn === void 0 ? L : xn(A());
                  }
                  function E() {
                    var ln = A(),
                      Nn = D(ln);
                    if (((j = arguments), (H = this), (un = ln), Nn)) {
                      if (sn === void 0) return v(un);
                      if (dr) return ((sn = setTimeout(an, rn)), yn(un));
                    }
                    return (sn === void 0 && (sn = setTimeout(an, rn)), L);
                  }
                  var j,
                    H,
                    Y,
                    L,
                    sn,
                    un,
                    er = 0,
                    ur = !1,
                    dr = !1,
                    wn = !0;
                  if (typeof T != "function") throw new TypeError(M);
                  return (
                    (rn = C(rn) || 0),
                    J(Z) &&
                      ((ur = !!Z.leading),
                      (dr = "maxWait" in Z),
                      (Y = dr ? jn(C(Z.maxWait) || 0, rn) : Y),
                      (wn = "trailing" in Z ? !!Z.trailing : wn)),
                    (E.cancel = u),
                    (E.flush = B),
                    E
                  );
                }
                function W(T, rn, Z) {
                  var yn = !0,
                    v = !0;
                  if (typeof T != "function") throw new TypeError(M);
                  return (
                    J(Z) &&
                      ((yn = "leading" in Z ? !!Z.leading : yn),
                      (v = "trailing" in Z ? !!Z.trailing : v)),
                    U(T, rn, { leading: yn, maxWait: rn, trailing: v })
                  );
                }
                function J(T) {
                  var rn = typeof T > "u" ? "undefined" : O(T);
                  return !!T && (rn == "object" || rn == "function");
                }
                function w(T) {
                  return (
                    !!T && (typeof T > "u" ? "undefined" : O(T)) == "object"
                  );
                }
                function p(T) {
                  return (
                    (typeof T > "u" ? "undefined" : O(T)) == "symbol" ||
                    (w(T) && nn.call(T) == $)
                  );
                }
                function C(T) {
                  if (typeof T == "number") return T;
                  if (p(T)) return G;
                  if (J(T)) {
                    var rn = typeof T.valueOf == "function" ? T.valueOf() : T;
                    T = J(rn) ? rn + "" : rn;
                  }
                  if (typeof T != "string") return T === 0 ? T : +T;
                  T = T.replace(Qn, "");
                  var Z = Wn.test(T);
                  return Z || rr.test(T)
                    ? Tn(T.slice(2), Z ? 2 : 8)
                    : _n.test(T)
                      ? G
                      : +T;
                }
                var O =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (T) {
                          return typeof T;
                        }
                      : function (T) {
                          return T &&
                            typeof Symbol == "function" &&
                            T.constructor === Symbol &&
                            T !== Symbol.prototype
                            ? "symbol"
                            : typeof T;
                        },
                  M = "Expected a function",
                  G = NaN,
                  $ = "[object Symbol]",
                  Qn = /^\s+|\s+$/g,
                  _n = /^[-+]0x[0-9a-f]+$/i,
                  Wn = /^0b[01]+$/i,
                  rr = /^0o[0-7]+$/i,
                  Tn = parseInt,
                  Hn =
                    (typeof F > "u" ? "undefined" : O(F)) == "object" &&
                    F &&
                    F.Object === Object &&
                    F,
                  Gn =
                    (typeof self > "u" ? "undefined" : O(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  hn = Hn || Gn || Function("return this")(),
                  q = Object.prototype,
                  nn = q.toString,
                  jn = Math.max,
                  Pn = Math.min,
                  A = function () {
                    return hn.Date.now();
                  };
                S.exports = W;
              }).call(
                d,
                (function () {
                  return this;
                })(),
              );
            },
            function (S, d) {
              (function (F) {
                function U(A, T, rn) {
                  function Z(wn) {
                    var ln = E,
                      Nn = j;
                    return ((E = j = void 0), (un = wn), (Y = A.apply(Nn, ln)));
                  }
                  function yn(wn) {
                    return ((un = wn), (L = setTimeout(D, T)), er ? Z(wn) : Y);
                  }
                  function v(wn) {
                    var ln = wn - sn,
                      Nn = wn - un,
                      gr = T - ln;
                    return ur ? jn(gr, H - Nn) : gr;
                  }
                  function _(wn) {
                    var ln = wn - sn,
                      Nn = wn - un;
                    return (
                      sn === void 0 || ln >= T || ln < 0 || (ur && Nn >= H)
                    );
                  }
                  function D() {
                    var wn = Pn();
                    return _(wn) ? an(wn) : void (L = setTimeout(D, v(wn)));
                  }
                  function an(wn) {
                    return (
                      (L = void 0),
                      dr && E ? Z(wn) : ((E = j = void 0), Y)
                    );
                  }
                  function xn() {
                    (L !== void 0 && clearTimeout(L),
                      (un = 0),
                      (E = sn = j = L = void 0));
                  }
                  function u() {
                    return L === void 0 ? Y : an(Pn());
                  }
                  function B() {
                    var wn = Pn(),
                      ln = _(wn);
                    if (((E = arguments), (j = this), (sn = wn), ln)) {
                      if (L === void 0) return yn(sn);
                      if (ur) return ((L = setTimeout(D, T)), Z(sn));
                    }
                    return (L === void 0 && (L = setTimeout(D, T)), Y);
                  }
                  var E,
                    j,
                    H,
                    Y,
                    L,
                    sn,
                    un = 0,
                    er = !1,
                    ur = !1,
                    dr = !0;
                  if (typeof A != "function") throw new TypeError(O);
                  return (
                    (T = p(T) || 0),
                    W(rn) &&
                      ((er = !!rn.leading),
                      (ur = "maxWait" in rn),
                      (H = ur ? nn(p(rn.maxWait) || 0, T) : H),
                      (dr = "trailing" in rn ? !!rn.trailing : dr)),
                    (B.cancel = xn),
                    (B.flush = u),
                    B
                  );
                }
                function W(A) {
                  var T = typeof A > "u" ? "undefined" : C(A);
                  return !!A && (T == "object" || T == "function");
                }
                function J(A) {
                  return (
                    !!A && (typeof A > "u" ? "undefined" : C(A)) == "object"
                  );
                }
                function w(A) {
                  return (
                    (typeof A > "u" ? "undefined" : C(A)) == "symbol" ||
                    (J(A) && q.call(A) == G)
                  );
                }
                function p(A) {
                  if (typeof A == "number") return A;
                  if (w(A)) return M;
                  if (W(A)) {
                    var T = typeof A.valueOf == "function" ? A.valueOf() : A;
                    A = W(T) ? T + "" : T;
                  }
                  if (typeof A != "string") return A === 0 ? A : +A;
                  A = A.replace($, "");
                  var rn = _n.test(A);
                  return rn || Wn.test(A)
                    ? rr(A.slice(2), rn ? 2 : 8)
                    : Qn.test(A)
                      ? M
                      : +A;
                }
                var C =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (A) {
                          return typeof A;
                        }
                      : function (A) {
                          return A &&
                            typeof Symbol == "function" &&
                            A.constructor === Symbol &&
                            A !== Symbol.prototype
                            ? "symbol"
                            : typeof A;
                        },
                  O = "Expected a function",
                  M = NaN,
                  G = "[object Symbol]",
                  $ = /^\s+|\s+$/g,
                  Qn = /^[-+]0x[0-9a-f]+$/i,
                  _n = /^0b[01]+$/i,
                  Wn = /^0o[0-7]+$/i,
                  rr = parseInt,
                  Tn =
                    (typeof F > "u" ? "undefined" : C(F)) == "object" &&
                    F &&
                    F.Object === Object &&
                    F,
                  Hn =
                    (typeof self > "u" ? "undefined" : C(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  Gn = Tn || Hn || Function("return this")(),
                  hn = Object.prototype,
                  q = hn.toString,
                  nn = Math.max,
                  jn = Math.min,
                  Pn = function () {
                    return Gn.Date.now();
                  };
                S.exports = U;
              }).call(
                d,
                (function () {
                  return this;
                })(),
              );
            },
            function (S, d) {
              function F(C) {
                var O = void 0,
                  M = void 0;
                for (O = 0; O < C.length; O += 1)
                  if (
                    ((M = C[O]),
                    (M.dataset && M.dataset.aos) ||
                      (M.children && F(M.children)))
                  )
                    return !0;
                return !1;
              }
              function U() {
                return (
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver
                );
              }
              function W() {
                return !!U();
              }
              function J(C, O) {
                var M = window.document,
                  G = U(),
                  $ = new G(w);
                ((p = O),
                  $.observe(M.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  }));
              }
              function w(C) {
                C &&
                  C.forEach(function (O) {
                    var M = Array.prototype.slice.call(O.addedNodes),
                      G = Array.prototype.slice.call(O.removedNodes),
                      $ = M.concat(G);
                    if (F($)) return p();
                  });
              }
              Object.defineProperty(d, "__esModule", { value: !0 });
              var p = function () {};
              d.default = { isSupported: W, ready: J };
            },
            function (S, d) {
              function F(M, G) {
                if (!(M instanceof G))
                  throw new TypeError("Cannot call a class as a function");
              }
              function U() {
                return (
                  navigator.userAgent || navigator.vendor || window.opera || ""
                );
              }
              Object.defineProperty(d, "__esModule", { value: !0 });
              var W = (function () {
                  function M(G, $) {
                    for (var Qn = 0; Qn < $.length; Qn++) {
                      var _n = $[Qn];
                      ((_n.enumerable = _n.enumerable || !1),
                        (_n.configurable = !0),
                        "value" in _n && (_n.writable = !0),
                        Object.defineProperty(G, _n.key, _n));
                    }
                  }
                  return function (G, $, Qn) {
                    return ($ && M(G.prototype, $), Qn && M(G, Qn), G);
                  };
                })(),
                J =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                w =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                p =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                C =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                O = (function () {
                  function M() {
                    F(this, M);
                  }
                  return (
                    W(M, [
                      {
                        key: "phone",
                        value: function () {
                          var G = U();
                          return !(!J.test(G) && !w.test(G.substr(0, 4)));
                        },
                      },
                      {
                        key: "mobile",
                        value: function () {
                          var G = U();
                          return !(!p.test(G) && !C.test(G.substr(0, 4)));
                        },
                      },
                      {
                        key: "tablet",
                        value: function () {
                          return this.mobile() && !this.phone();
                        },
                      },
                    ]),
                    M
                  );
                })();
              d.default = new O();
            },
            function (S, d) {
              Object.defineProperty(d, "__esModule", { value: !0 });
              var F = function (W, J, w) {
                  var p = W.node.getAttribute("data-aos-once");
                  J > W.position
                    ? W.node.classList.add("aos-animate")
                    : typeof p < "u" &&
                      (p === "false" || (!w && p !== "true")) &&
                      W.node.classList.remove("aos-animate");
                },
                U = function (W, J) {
                  var w = window.pageYOffset,
                    p = window.innerHeight;
                  W.forEach(function (C, O) {
                    F(C, p + w, J);
                  });
                };
              d.default = U;
            },
            function (S, d, F) {
              function U(p) {
                return p && p.__esModule ? p : { default: p };
              }
              Object.defineProperty(d, "__esModule", { value: !0 });
              var W = F(12),
                J = U(W),
                w = function (p, C) {
                  return (
                    p.forEach(function (O, M) {
                      (O.node.classList.add("aos-init"),
                        (O.position = (0, J.default)(O.node, C.offset)));
                    }),
                    p
                  );
                };
              d.default = w;
            },
            function (S, d, F) {
              function U(p) {
                return p && p.__esModule ? p : { default: p };
              }
              Object.defineProperty(d, "__esModule", { value: !0 });
              var W = F(13),
                J = U(W),
                w = function (p, C) {
                  var O = 0,
                    M = 0,
                    G = window.innerHeight,
                    $ = {
                      offset: p.getAttribute("data-aos-offset"),
                      anchor: p.getAttribute("data-aos-anchor"),
                      anchorPlacement: p.getAttribute(
                        "data-aos-anchor-placement",
                      ),
                    };
                  switch (
                    ($.offset && !isNaN($.offset) && (M = parseInt($.offset)),
                    $.anchor &&
                      document.querySelectorAll($.anchor) &&
                      (p = document.querySelectorAll($.anchor)[0]),
                    (O = (0, J.default)(p).top),
                    $.anchorPlacement)
                  ) {
                    case "top-bottom":
                      break;
                    case "center-bottom":
                      O += p.offsetHeight / 2;
                      break;
                    case "bottom-bottom":
                      O += p.offsetHeight;
                      break;
                    case "top-center":
                      O += G / 2;
                      break;
                    case "bottom-center":
                      O += G / 2 + p.offsetHeight;
                      break;
                    case "center-center":
                      O += G / 2 + p.offsetHeight / 2;
                      break;
                    case "top-top":
                      O += G;
                      break;
                    case "bottom-top":
                      O += p.offsetHeight + G;
                      break;
                    case "center-top":
                      O += p.offsetHeight / 2 + G;
                  }
                  return (
                    $.anchorPlacement || $.offset || isNaN(C) || (M = C),
                    O + M
                  );
                };
              d.default = w;
            },
            function (S, d) {
              Object.defineProperty(d, "__esModule", { value: !0 });
              var F = function (U) {
                for (
                  var W = 0, J = 0;
                  U && !isNaN(U.offsetLeft) && !isNaN(U.offsetTop);
                )
                  ((W +=
                    U.offsetLeft - (U.tagName != "BODY" ? U.scrollLeft : 0)),
                    (J +=
                      U.offsetTop - (U.tagName != "BODY" ? U.scrollTop : 0)),
                    (U = U.offsetParent));
                return { top: J, left: W };
              };
              d.default = F;
            },
            function (S, d) {
              Object.defineProperty(d, "__esModule", { value: !0 });
              var F = function (U) {
                return (
                  (U = U || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(U, function (W) {
                    return { node: W };
                  })
                );
              };
              d.default = F;
            },
          ]);
        });
      })(Ll)),
    Ll.exports
  );
}
var up = sp();
const Ox = Kf(up),
  dp = `<!DOCTYPE html lang="en" data-headlessui-focus-visible>\r
<html lang="en">\r
  <head>\r
    <meta charset="utf-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1" />\r
    <meta name="theme-color" content="#000000" />\r
    <meta name="description" content="A product of emergent.sh" />\r
    <link rel="preconnect" href="https://fonts.googleapis.com" />\r
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />\r
    <link\r
      href="https://fonts.googleapis.com/css2?family=Inter:wght@600&amp;display=swap"\r
      rel="stylesheet"\r
    />\r
    <!--\r
        manifest.json provides metadata used when your web app is installed on a\r
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\r
        -->\r
    <!--\r
        Notice the use of  in the tags above.\r
        It will be replaced with the URL of the \`public\` folder during the build.\r
        Only files inside the \`public\` folder can be referenced from the HTML.\r
\r
        Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will\r
        work correctly both with client-side routing and a non-root public URL.\r
        Learn how to configure a non-root public URL by running \`npm run build\`.\r
        -->\r
    <title>Manmohan Jangra · Frontend Engineer</title>\r
    <meta\r
      name="description"\r
      content="Portfolio of Manmohan Jangra — Frontend Engineer specializing in high-performance React, micro-frontends, real-time UIs, and AI-assisted development workflows."\r
    />\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      async=""\r
      src="https://us-assets.i.posthog.com/static/array.js"\r
    ><\/script>\r
    <script>\r
      window.addEventListener(\r
        "error",\r
        function (e) {\r
          if (\r
            e.error instanceof DOMException &&\r
            e.error.name === "DataCloneError" &&\r
            e.message &&\r
            e.message.includes("PerformanceServerTiming")\r
          ) {\r
            e.stopImmediatePropagation();\r
            e.preventDefault();\r
          }\r
        },\r
        true,\r
      );\r
    <\/script>\r
    <script src="https://assets.emergent.sh/scripts/emergent-main.js"><\/script>\r
    <script defer="" src="/static/js/bundle.js"><\/script>\r
    <script>\r
      if (window.self !== window.top) {\r
        var s = document.createElement("script");\r
        s.src = "/visual-edit-overlay.js";\r
        document.head.appendChild(s);\r
        window.tailwind = window.tailwind || {};\r
        tailwind.config = { corePlugins: { preflight: false } };\r
        var t = document.createElement("script");\r
        t.src = "https://cdn.tailwindcss.com";\r
        document.head.appendChild(t);\r
      }\r
    <\/script>\r
    <style>\r
      @import url(https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap);\r
    </style>\r
    <style>\r
      *,\r
      ::before,\r
      ::after {\r
        --tw-border-spacing-x: 0;\r
        --tw-border-spacing-y: 0;\r
        --tw-translate-x: 0;\r
        --tw-translate-y: 0;\r
        --tw-rotate: 0;\r
        --tw-skew-x: 0;\r
        --tw-skew-y: 0;\r
        --tw-scale-x: 1;\r
        --tw-scale-y: 1;\r
        --tw-pan-x:  ;\r
        --tw-pan-y:  ;\r
        --tw-pinch-zoom:  ;\r
        --tw-scroll-snap-strictness: proximity;\r
        --tw-gradient-from-position:  ;\r
        --tw-gradient-via-position:  ;\r
        --tw-gradient-to-position:  ;\r
        --tw-ordinal:  ;\r
        --tw-slashed-zero:  ;\r
        --tw-numeric-figure:  ;\r
        --tw-numeric-spacing:  ;\r
        --tw-numeric-fraction:  ;\r
        --tw-ring-inset:  ;\r
        --tw-ring-offset-width: 0px;\r
        --tw-ring-offset-color: #fff;\r
        --tw-ring-color: rgb(59 130 246 / 0.5);\r
        --tw-ring-offset-shadow: 0 0 #0000;\r
        --tw-ring-shadow: 0 0 #0000;\r
        --tw-shadow: 0 0 #0000;\r
        --tw-shadow-colored: 0 0 #0000;\r
        --tw-blur:  ;\r
        --tw-brightness:  ;\r
        --tw-contrast:  ;\r
        --tw-grayscale:  ;\r
        --tw-hue-rotate:  ;\r
        --tw-invert:  ;\r
        --tw-saturate:  ;\r
        --tw-sepia:  ;\r
        --tw-drop-shadow:  ;\r
        --tw-backdrop-blur:  ;\r
        --tw-backdrop-brightness:  ;\r
        --tw-backdrop-contrast:  ;\r
        --tw-backdrop-grayscale:  ;\r
        --tw-backdrop-hue-rotate:  ;\r
        --tw-backdrop-invert:  ;\r
        --tw-backdrop-opacity:  ;\r
        --tw-backdrop-saturate:  ;\r
        --tw-backdrop-sepia:  ;\r
        --tw-contain-size:  ;\r
        --tw-contain-layout:  ;\r
        --tw-contain-paint:  ;\r
        --tw-contain-style:  ;\r
      }\r
\r
      ::backdrop {\r
        --tw-border-spacing-x: 0;\r
        --tw-border-spacing-y: 0;\r
        --tw-translate-x: 0;\r
        --tw-translate-y: 0;\r
        --tw-rotate: 0;\r
        --tw-skew-x: 0;\r
        --tw-skew-y: 0;\r
        --tw-scale-x: 1;\r
        --tw-scale-y: 1;\r
        --tw-pan-x:  ;\r
        --tw-pan-y:  ;\r
        --tw-pinch-zoom:  ;\r
        --tw-scroll-snap-strictness: proximity;\r
        --tw-gradient-from-position:  ;\r
        --tw-gradient-via-position:  ;\r
        --tw-gradient-to-position:  ;\r
        --tw-ordinal:  ;\r
        --tw-slashed-zero:  ;\r
        --tw-numeric-figure:  ;\r
        --tw-numeric-spacing:  ;\r
        --tw-numeric-fraction:  ;\r
        --tw-ring-inset:  ;\r
        --tw-ring-offset-width: 0px;\r
        --tw-ring-offset-color: #fff;\r
        --tw-ring-color: rgb(59 130 246 / 0.5);\r
        --tw-ring-offset-shadow: 0 0 #0000;\r
        --tw-ring-shadow: 0 0 #0000;\r
        --tw-shadow: 0 0 #0000;\r
        --tw-shadow-colored: 0 0 #0000;\r
        --tw-blur:  ;\r
        --tw-brightness:  ;\r
        --tw-contrast:  ;\r
        --tw-grayscale:  ;\r
        --tw-hue-rotate:  ;\r
        --tw-invert:  ;\r
        --tw-saturate:  ;\r
        --tw-sepia:  ;\r
        --tw-drop-shadow:  ;\r
        --tw-backdrop-blur:  ;\r
        --tw-backdrop-brightness:  ;\r
        --tw-backdrop-contrast:  ;\r
        --tw-backdrop-grayscale:  ;\r
        --tw-backdrop-hue-rotate:  ;\r
        --tw-backdrop-invert:  ;\r
        --tw-backdrop-opacity:  ;\r
        --tw-backdrop-saturate:  ;\r
        --tw-backdrop-sepia:  ;\r
        --tw-contain-size:  ;\r
        --tw-contain-layout:  ;\r
        --tw-contain-paint:  ;\r
        --tw-contain-style:  ;\r
      } /*\r
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\r
*/ /*\r
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\r
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\r
*/\r
\r
      *,\r
      ::before,\r
      ::after {\r
        box-sizing: border-box; /* 1 */\r
        border-width: 0; /* 2 */\r
        border-style: solid; /* 2 */\r
        border-color: #e5e7eb; /* 2 */\r
      }\r
\r
      ::before,\r
      ::after {\r
        --tw-content: "";\r
      }\r
\r
      /*\r
1. Use a consistent sensible line-height in all browsers.\r
2. Prevent adjustments of font size after orientation changes in iOS.\r
3. Use a more readable tab size.\r
4. Use the user's configured \`sans\` font-family by default.\r
5. Use the user's configured \`sans\` font-feature-settings by default.\r
6. Use the user's configured \`sans\` font-variation-settings by default.\r
7. Disable tap highlights on iOS\r
*/\r
\r
      html,\r
      :host {\r
        line-height: 1.5; /* 1 */\r
        -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\r
        tab-size: 4; /* 3 */\r
        font-family:\r
          ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\r
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\r
        font-feature-settings: normal; /* 5 */\r
        font-variation-settings: normal; /* 6 */\r
        -webkit-tap-highlight-color: transparent; /* 7 */\r
      }\r
\r
      /*\r
1. Remove the margin in all browsers.\r
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\r
*/\r
\r
      body {\r
        margin: 0; /* 1 */\r
        line-height: inherit; /* 2 */\r
      }\r
\r
      /*\r
1. Add the correct height in Firefox.\r
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r
3. Ensure horizontal rules are visible by default.\r
*/\r
\r
      hr {\r
        height: 0; /* 1 */\r
        color: inherit; /* 2 */\r
        border-top-width: 1px; /* 3 */\r
      }\r
\r
      /*\r
Add the correct text decoration in Chrome, Edge, and Safari.\r
*/\r
\r
      abbr:where([title]) {\r
        text-decoration: underline dotted;\r
      }\r
\r
      /*\r
Remove the default font size and weight for headings.\r
*/\r
\r
      h1,\r
      h2,\r
      h3,\r
      h4,\r
      h5,\r
      h6 {\r
        font-size: inherit;\r
        font-weight: inherit;\r
      }\r
\r
      /*\r
Reset links to optimize for opt-in styling instead of opt-out.\r
*/\r
\r
      a {\r
        color: inherit;\r
        text-decoration: inherit;\r
      }\r
\r
      /*\r
Add the correct font weight in Edge and Safari.\r
*/\r
\r
      b,\r
      strong {\r
        font-weight: bolder;\r
      }\r
\r
      /*\r
1. Use the user's configured \`mono\` font-family by default.\r
2. Use the user's configured \`mono\` font-feature-settings by default.\r
3. Use the user's configured \`mono\` font-variation-settings by default.\r
4. Correct the odd \`em\` font sizing in all browsers.\r
*/\r
\r
      code,\r
      kbd,\r
      samp,\r
      pre {\r
        font-family:\r
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\r
          "Liberation Mono", "Courier New", monospace; /* 1 */\r
        font-feature-settings: normal; /* 2 */\r
        font-variation-settings: normal; /* 3 */\r
        font-size: 1em; /* 4 */\r
      }\r
\r
      /*\r
Add the correct font size in all browsers.\r
*/\r
\r
      small {\r
        font-size: 80%;\r
      }\r
\r
      /*\r
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\r
*/\r
\r
      sub,\r
      sup {\r
        font-size: 75%;\r
        line-height: 0;\r
        position: relative;\r
        vertical-align: baseline;\r
      }\r
\r
      sub {\r
        bottom: -0.25em;\r
      }\r
\r
      sup {\r
        top: -0.5em;\r
      }\r
\r
      /*\r
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r
3. Remove gaps between table borders by default.\r
*/\r
\r
      table {\r
        text-indent: 0; /* 1 */\r
        border-color: inherit; /* 2 */\r
        border-collapse: collapse; /* 3 */\r
      }\r
\r
      /*\r
1. Change the font styles in all browsers.\r
2. Remove the margin in Firefox and Safari.\r
3. Remove default padding in all browsers.\r
*/\r
\r
      button,\r
      input,\r
      optgroup,\r
      select,\r
      textarea {\r
        font-family: inherit; /* 1 */\r
        font-feature-settings: inherit; /* 1 */\r
        font-variation-settings: inherit; /* 1 */\r
        font-size: 100%; /* 1 */\r
        font-weight: inherit; /* 1 */\r
        line-height: inherit; /* 1 */\r
        letter-spacing: inherit; /* 1 */\r
        color: inherit; /* 1 */\r
        margin: 0; /* 2 */\r
        padding: 0; /* 3 */\r
      }\r
\r
      /*\r
Remove the inheritance of text transform in Edge and Firefox.\r
*/\r
\r
      button,\r
      select {\r
        text-transform: none;\r
      }\r
\r
      /*\r
1. Correct the inability to style clickable types in iOS and Safari.\r
2. Remove default button styles.\r
*/\r
\r
      button,\r
      input:where([type="button"]),\r
      input:where([type="reset"]),\r
      input:where([type="submit"]) {\r
        -webkit-appearance: button; /* 1 */\r
        background-color: transparent; /* 2 */\r
        background-image: none; /* 2 */\r
      }\r
\r
      /*\r
Use the modern Firefox focus style for all focusable elements.\r
*/\r
\r
      :-moz-focusring {\r
        outline: auto;\r
      }\r
\r
      /*\r
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\r
*/\r
\r
      :-moz-ui-invalid {\r
        box-shadow: none;\r
      }\r
\r
      /*\r
Add the correct vertical alignment in Chrome and Firefox.\r
*/\r
\r
      progress {\r
        vertical-align: baseline;\r
      }\r
\r
      /*\r
Correct the cursor style of increment and decrement buttons in Safari.\r
*/\r
\r
      ::-webkit-inner-spin-button,\r
      ::-webkit-outer-spin-button {\r
        height: auto;\r
      }\r
\r
      /*\r
1. Correct the odd appearance in Chrome and Safari.\r
2. Correct the outline style in Safari.\r
*/\r
\r
      [type="search"] {\r
        -webkit-appearance: textfield; /* 1 */\r
        outline-offset: -2px; /* 2 */\r
      }\r
\r
      /*\r
Remove the inner padding in Chrome and Safari on macOS.\r
*/\r
\r
      ::-webkit-search-decoration {\r
        -webkit-appearance: none;\r
      }\r
\r
      /*\r
1. Correct the inability to style clickable types in iOS and Safari.\r
2. Change font properties to \`inherit\` in Safari.\r
*/\r
\r
      ::-webkit-file-upload-button {\r
        -webkit-appearance: button; /* 1 */\r
        font: inherit; /* 2 */\r
      }\r
\r
      /*\r
Add the correct display in Chrome and Safari.\r
*/\r
\r
      summary {\r
        display: list-item;\r
      }\r
\r
      /*\r
Removes the default spacing and border for appropriate elements.\r
*/\r
\r
      blockquote,\r
      dl,\r
      dd,\r
      h1,\r
      h2,\r
      h3,\r
      h4,\r
      h5,\r
      h6,\r
      hr,\r
      figure,\r
      p,\r
      pre {\r
        margin: 0;\r
      }\r
\r
      fieldset {\r
        margin: 0;\r
        padding: 0;\r
      }\r
\r
      legend {\r
        padding: 0;\r
      }\r
\r
      ol,\r
      ul,\r
      menu {\r
        list-style: none;\r
        margin: 0;\r
        padding: 0;\r
      }\r
\r
      /*\r
Reset default styling for dialogs.\r
*/\r
      dialog {\r
        padding: 0;\r
      }\r
\r
      /*\r
Prevent resizing textareas horizontally by default.\r
*/\r
\r
      textarea {\r
        resize: vertical;\r
      }\r
\r
      /*\r
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\r
2. Set the default placeholder color to the user's configured gray 400 color.\r
*/\r
\r
      input::placeholder,\r
      textarea::placeholder {\r
        opacity: 1; /* 1 */\r
        color: #9ca3af; /* 2 */\r
      }\r
\r
      /*\r
Set the default cursor for buttons.\r
*/\r
\r
      button,\r
      [role="button"] {\r
        cursor: pointer;\r
      }\r
\r
      /*\r
Make sure disabled buttons don't get the pointer cursor.\r
*/\r
      :disabled {\r
        cursor: default;\r
      }\r
\r
      /*\r
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\r
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\r
   This can trigger a poorly considered lint error in some tools but is included by design.\r
*/\r
\r
      img,\r
      svg,\r
      video,\r
      canvas,\r
      audio,\r
      iframe,\r
      embed,\r
      object {\r
        display: block; /* 1 */\r
        vertical-align: middle; /* 2 */\r
      }\r
\r
      /*\r
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\r
*/\r
\r
      img,\r
      video {\r
        max-width: 100%;\r
        height: auto;\r
      }\r
\r
      /* Make elements with the HTML hidden attribute stay hidden by default */\r
      [hidden]:where(:not([hidden="until-found"])) {\r
        display: none;\r
      }\r
      .sr-only {\r
        position: absolute;\r
        width: 1px;\r
        height: 1px;\r
        padding: 0;\r
        margin: -1px;\r
        overflow: hidden;\r
        clip: rect(0, 0, 0, 0);\r
        white-space: nowrap;\r
        border-width: 0;\r
      }\r
      .pointer-events-none {\r
        pointer-events: none;\r
      }\r
      .pointer-events-auto {\r
        pointer-events: auto;\r
      }\r
      .visible {\r
        visibility: visible;\r
      }\r
      .invisible {\r
        visibility: hidden;\r
      }\r
      .fixed {\r
        position: fixed;\r
      }\r
      .absolute {\r
        position: absolute;\r
      }\r
      .relative {\r
        position: relative;\r
      }\r
      .inset-0 {\r
        inset: 0px;\r
      }\r
      .inset-x-0 {\r
        left: 0px;\r
        right: 0px;\r
      }\r
      .inset-y-0 {\r
        top: 0px;\r
        bottom: 0px;\r
      }\r
      .-bottom-12 {\r
        bottom: -3rem;\r
      }\r
      .-left-12 {\r
        left: -3rem;\r
      }\r
      .-right-12 {\r
        right: -3rem;\r
      }\r
      .-right-40 {\r
        right: -10rem;\r
      }\r
      .-top-12 {\r
        top: -3rem;\r
      }\r
      .bottom-0 {\r
        bottom: 0px;\r
      }\r
      .bottom-4 {\r
        bottom: 1rem;\r
      }\r
      .left-0 {\r
        left: 0px;\r
      }\r
      .left-1 {\r
        left: 0.25rem;\r
      }\r
      .left-1\\/2 {\r
        left: 50%;\r
      }\r
      .left-2 {\r
        left: 0.5rem;\r
      }\r
      .left-3 {\r
        left: 0.75rem;\r
      }\r
      .left-4 {\r
        left: 1rem;\r
      }\r
      .left-\\[50\\%\\] {\r
        left: 50%;\r
      }\r
      .right-0 {\r
        right: 0px;\r
      }\r
      .right-1 {\r
        right: 0.25rem;\r
      }\r
      .right-2 {\r
        right: 0.5rem;\r
      }\r
      .right-4 {\r
        right: 1rem;\r
      }\r
      .top-0 {\r
        top: 0px;\r
      }\r
      .top-1 {\r
        top: 0.25rem;\r
      }\r
      .top-1\\/2 {\r
        top: 50%;\r
      }\r
      .top-1\\/3 {\r
        top: 33.333333%;\r
      }\r
      .top-2 {\r
        top: 0.5rem;\r
      }\r
      .top-4 {\r
        top: 1rem;\r
      }\r
      .top-\\[1px\\] {\r
        top: 1px;\r
      }\r
      .top-\\[50\\%\\] {\r
        top: 50%;\r
      }\r
      .top-\\[60\\%\\] {\r
        top: 60%;\r
      }\r
      .top-full {\r
        top: 100%;\r
      }\r
      .z-10 {\r
        z-index: 10;\r
      }\r
      .z-50 {\r
        z-index: 50;\r
      }\r
      .z-\\[100\\] {\r
        z-index: 100;\r
      }\r
      .z-\\[1\\] {\r
        z-index: 1;\r
      }\r
      .order-1 {\r
        order: 1;\r
      }\r
      .order-2 {\r
        order: 2;\r
      }\r
      .order-3 {\r
        order: 3;\r
      }\r
      .col-span-12 {\r
        grid-column: span 12 / span 12;\r
      }\r
      .-mx-1 {\r
        margin-left: -0.25rem;\r
        margin-right: -0.25rem;\r
      }\r
      .mx-6 {\r
        margin-left: 1.5rem;\r
        margin-right: 1.5rem;\r
      }\r
      .mx-auto {\r
        margin-left: auto;\r
        margin-right: auto;\r
      }\r
      .my-1 {\r
        margin-top: 0.25rem;\r
        margin-bottom: 0.25rem;\r
      }\r
      .-ml-4 {\r
        margin-left: -1rem;\r
      }\r
      .-mt-4 {\r
        margin-top: -1rem;\r
      }\r
      .mb-1 {\r
        margin-bottom: 0.25rem;\r
      }\r
      .mb-10 {\r
        margin-bottom: 2.5rem;\r
      }\r
      .mb-2 {\r
        margin-bottom: 0.5rem;\r
      }\r
      .ml-1 {\r
        margin-left: 0.25rem;\r
      }\r
      .ml-2 {\r
        margin-left: 0.5rem;\r
      }\r
      .ml-auto {\r
        margin-left: auto;\r
      }\r
      .mr-2 {\r
        margin-right: 0.5rem;\r
      }\r
      .mt-0\\.5 {\r
        margin-top: 0.125rem;\r
      }\r
      .mt-1 {\r
        margin-top: 0.25rem;\r
      }\r
      .mt-1\\.5 {\r
        margin-top: 0.375rem;\r
      }\r
      .mt-10 {\r
        margin-top: 2.5rem;\r
      }\r
      .mt-12 {\r
        margin-top: 3rem;\r
      }\r
      .mt-16 {\r
        margin-top: 4rem;\r
      }\r
      .mt-2 {\r
        margin-top: 0.5rem;\r
      }\r
      .mt-20 {\r
        margin-top: 5rem;\r
      }\r
      .mt-24 {\r
        margin-top: 6rem;\r
      }\r
      .mt-3 {\r
        margin-top: 0.75rem;\r
      }\r
      .mt-4 {\r
        margin-top: 1rem;\r
      }\r
      .mt-5 {\r
        margin-top: 1.25rem;\r
      }\r
      .mt-6 {\r
        margin-top: 1.5rem;\r
      }\r
      .mt-8 {\r
        margin-top: 2rem;\r
      }\r
      .mt-auto {\r
        margin-top: auto;\r
      }\r
      .block {\r
        display: block;\r
      }\r
      .flex {\r
        display: flex;\r
      }\r
      .inline-flex {\r
        display: inline-flex;\r
      }\r
      .table {\r
        display: table;\r
      }\r
      .grid {\r
        display: grid;\r
      }\r
      .hidden {\r
        display: none;\r
      }\r
      .aspect-\\[16\\/10\\] {\r
        aspect-ratio: 16/10;\r
      }\r
      .aspect-\\[16\\/9\\] {\r
        aspect-ratio: 16/9;\r
      }\r
      .aspect-\\[4\\/5\\] {\r
        aspect-ratio: 4/5;\r
      }\r
      .aspect-square {\r
        aspect-ratio: 1 / 1;\r
      }\r
      .h-1\\.5 {\r
        height: 0.375rem;\r
      }\r
      .h-10 {\r
        height: 2.5rem;\r
      }\r
      .h-16 {\r
        height: 4rem;\r
      }\r
      .h-2 {\r
        height: 0.5rem;\r
      }\r
      .h-2\\.5 {\r
        height: 0.625rem;\r
      }\r
      .h-3 {\r
        height: 0.75rem;\r
      }\r
      .h-3\\.5 {\r
        height: 0.875rem;\r
      }\r
      .h-4 {\r
        height: 1rem;\r
      }\r
      .h-5 {\r
        height: 1.25rem;\r
      }\r
      .h-7 {\r
        height: 1.75rem;\r
      }\r
      .h-8 {\r
        height: 2rem;\r
      }\r
      .h-9 {\r
        height: 2.25rem;\r
      }\r
      .h-\\[1px\\] {\r
        height: 1px;\r
      }\r
      .h-\\[36rem\\] {\r
        height: 36rem;\r
      }\r
      .h-\\[var\\(--radix-navigation-menu-viewport-height\\)\\] {\r
        height: var(--radix-navigation-menu-viewport-height);\r
      }\r
      .h-\\[var\\(--radix-select-trigger-height\\)\\] {\r
        height: var(--radix-select-trigger-height);\r
      }\r
      .h-auto {\r
        height: auto;\r
      }\r
      .h-full {\r
        height: 100%;\r
      }\r
      .h-px {\r
        height: 1px;\r
      }\r
      .max-h-\\[--radix-context-menu-content-available-height\\] {\r
        max-height: var(--radix-context-menu-content-available-height);\r
      }\r
      .max-h-\\[--radix-select-content-available-height\\] {\r
        max-height: var(--radix-select-content-available-height);\r
      }\r
      .max-h-\\[300px\\] {\r
        max-height: 300px;\r
      }\r
      .max-h-\\[var\\(--radix-dropdown-menu-content-available-height\\)\\] {\r
        max-height: var(--radix-dropdown-menu-content-available-height);\r
      }\r
      .max-h-screen {\r
        max-height: 100vh;\r
      }\r
      .min-h-\\[60px\\] {\r
        min-height: 60px;\r
      }\r
      .min-h-screen {\r
        min-height: 100vh;\r
      }\r
      .w-10 {\r
        width: 2.5rem;\r
      }\r
      .w-2 {\r
        width: 0.5rem;\r
      }\r
      .w-2\\.5 {\r
        width: 0.625rem;\r
      }\r
      .w-3 {\r
        width: 0.75rem;\r
      }\r
      .w-3\\.5 {\r
        width: 0.875rem;\r
      }\r
      .w-3\\/4 {\r
        width: 75%;\r
      }\r
      .w-4 {\r
        width: 1rem;\r
      }\r
      .w-5 {\r
        width: 1.25rem;\r
      }\r
      .w-64 {\r
        width: 16rem;\r
      }\r
      .w-7 {\r
        width: 1.75rem;\r
      }\r
      .w-72 {\r
        width: 18rem;\r
      }\r
      .w-8 {\r
        width: 2rem;\r
      }\r
      .w-9 {\r
        width: 2.25rem;\r
      }\r
      .w-\\[100px\\] {\r
        width: 100px;\r
      }\r
      .w-\\[1px\\] {\r
        width: 1px;\r
      }\r
      .w-\\[36rem\\] {\r
        width: 36rem;\r
      }\r
      .w-fit {\r
        width: fit-content;\r
      }\r
      .w-full {\r
        width: 100%;\r
      }\r
      .w-max {\r
        width: max-content;\r
      }\r
      .w-px {\r
        width: 1px;\r
      }\r
      .min-w-0 {\r
        min-width: 0px;\r
      }\r
      .min-w-10 {\r
        min-width: 2.5rem;\r
      }\r
      .min-w-8 {\r
        min-width: 2rem;\r
      }\r
      .min-w-9 {\r
        min-width: 2.25rem;\r
      }\r
      .min-w-\\[12rem\\] {\r
        min-width: 12rem;\r
      }\r
      .min-w-\\[8rem\\] {\r
        min-width: 8rem;\r
      }\r
      .min-w-\\[var\\(--radix-select-trigger-width\\)\\] {\r
        min-width: var(--radix-select-trigger-width);\r
      }\r
      .max-w-2xl {\r
        max-width: 42rem;\r
      }\r
      .max-w-3xl {\r
        max-width: 48rem;\r
      }\r
      .max-w-4xl {\r
        max-width: 56rem;\r
      }\r
      .max-w-5xl {\r
        max-width: 64rem;\r
      }\r
      .max-w-6xl {\r
        max-width: 72rem;\r
      }\r
      .max-w-7xl {\r
        max-width: 80rem;\r
      }\r
      .max-w-lg {\r
        max-width: 32rem;\r
      }\r
      .max-w-max {\r
        max-width: max-content;\r
      }\r
      .flex-1 {\r
        flex: 1 1;\r
      }\r
      .flex-shrink-0 {\r
        flex-shrink: 0;\r
      }\r
      .shrink-0 {\r
        flex-shrink: 0;\r
      }\r
      .grow {\r
        flex-grow: 1;\r
      }\r
      .grow-0 {\r
        flex-grow: 0;\r
      }\r
      .basis-full {\r
        flex-basis: 100%;\r
      }\r
      .caption-bottom {\r
        caption-side: bottom;\r
      }\r
      .border-collapse {\r
        border-collapse: collapse;\r
      }\r
      .origin-\\[--radix-context-menu-content-transform-origin\\] {\r
        transform-origin: var(--radix-context-menu-content-transform-origin);\r
      }\r
      .origin-\\[--radix-dropdown-menu-content-transform-origin\\] {\r
        transform-origin: var(--radix-dropdown-menu-content-transform-origin);\r
      }\r
      .origin-\\[--radix-hover-card-content-transform-origin\\] {\r
        transform-origin: var(--radix-hover-card-content-transform-origin);\r
      }\r
      .origin-\\[--radix-menubar-content-transform-origin\\] {\r
        transform-origin: var(--radix-menubar-content-transform-origin);\r
      }\r
      .origin-\\[--radix-popover-content-transform-origin\\] {\r
        transform-origin: var(--radix-popover-content-transform-origin);\r
      }\r
      .origin-\\[--radix-select-content-transform-origin\\] {\r
        transform-origin: var(--radix-select-content-transform-origin);\r
      }\r
      .origin-\\[--radix-tooltip-content-transform-origin\\] {\r
        transform-origin: var(--radix-tooltip-content-transform-origin);\r
      }\r
      .-translate-x-1\\/2 {\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .-translate-y-1\\/2 {\r
        --tw-translate-y: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .translate-x-\\[-50\\%\\] {\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .translate-y-\\[-50\\%\\] {\r
        --tw-translate-y: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .rotate-45 {\r
        --tw-rotate: 45deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .rotate-90 {\r
        --tw-rotate: 90deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .transform {\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      @keyframes ping {\r
        75%,\r
        100% {\r
          transform: scale(2);\r
          opacity: 0;\r
        }\r
      }\r
      .animate-ping {\r
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\r
      }\r
      @keyframes pulse {\r
        50% {\r
          opacity: 0.5;\r
        }\r
      }\r
      .animate-pulse {\r
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\r
      }\r
      @keyframes spin {\r
        to {\r
          transform: rotate(360deg);\r
        }\r
      }\r
      .animate-spin {\r
        animation: spin 1s linear infinite;\r
      }\r
      .cursor-default {\r
        cursor: default;\r
      }\r
      .cursor-pointer {\r
        cursor: pointer;\r
      }\r
      .touch-none {\r
        touch-action: none;\r
      }\r
      .select-none {\r
        -webkit-user-select: none;\r
        user-select: none;\r
      }\r
      .resize-none {\r
        resize: none;\r
      }\r
      .list-none {\r
        list-style-type: none;\r
      }\r
      .grid-cols-12 {\r
        grid-template-columns: repeat(12, minmax(0, 1fr));\r
      }\r
      .grid-cols-2 {\r
        grid-template-columns: repeat(2, minmax(0, 1fr));\r
      }\r
      .flex-row {\r
        flex-direction: row;\r
      }\r
      .flex-col {\r
        flex-direction: column;\r
      }\r
      .flex-col-reverse {\r
        flex-direction: column-reverse;\r
      }\r
      .flex-wrap {\r
        flex-wrap: wrap;\r
      }\r
      .items-start {\r
        align-items: flex-start;\r
      }\r
      .items-end {\r
        align-items: flex-end;\r
      }\r
      .items-center {\r
        align-items: center;\r
      }\r
      .items-baseline {\r
        align-items: baseline;\r
      }\r
      .justify-center {\r
        justify-content: center;\r
      }\r
      .justify-between {\r
        justify-content: space-between;\r
      }\r
      .gap-1 {\r
        gap: 0.25rem;\r
      }\r
      .gap-1\\.5 {\r
        gap: 0.375rem;\r
      }\r
      .gap-2 {\r
        gap: 0.5rem;\r
      }\r
      .gap-3 {\r
        gap: 0.75rem;\r
      }\r
      .gap-4 {\r
        gap: 1rem;\r
      }\r
      .gap-6 {\r
        gap: 1.5rem;\r
      }\r
      .gap-8 {\r
        gap: 2rem;\r
      }\r
      .space-x-1 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-x-reverse: 0;\r
        margin-right: calc(0.25rem * var(--tw-space-x-reverse));\r
        margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\r
      }\r
      .space-x-2 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-x-reverse: 0;\r
        margin-right: calc(0.5rem * var(--tw-space-x-reverse));\r
        margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\r
      }\r
      .space-y-1 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-16 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(4rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(4rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-2 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-24 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(6rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-3 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-4 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(1rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-5 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-6 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\r
      }\r
      .overflow-auto {\r
        overflow: auto;\r
      }\r
      .overflow-hidden {\r
        overflow: hidden;\r
      }\r
      .overflow-y-auto {\r
        overflow-y: auto;\r
      }\r
      .overflow-x-hidden {\r
        overflow-x: hidden;\r
      }\r
      .whitespace-nowrap {\r
        white-space: nowrap;\r
      }\r
      .break-words {\r
        overflow-wrap: break-word;\r
      }\r
      .rounded-\\[inherit\\] {\r
        border-radius: inherit;\r
      }\r
      .rounded-full {\r
        border-radius: 9999px;\r
      }\r
      .rounded-lg {\r
        border-radius: var(--radius);\r
      }\r
      .rounded-md {\r
        border-radius: calc(var(--radius) - 2px);\r
      }\r
      .rounded-sm {\r
        border-radius: calc(var(--radius) - 4px);\r
      }\r
      .rounded-xl {\r
        border-radius: 0.75rem;\r
      }\r
      .rounded-t-\\[10px\\] {\r
        border-top-left-radius: 10px;\r
        border-top-right-radius: 10px;\r
      }\r
      .rounded-tl-sm {\r
        border-top-left-radius: calc(var(--radius) - 4px);\r
      }\r
      .border {\r
        border-width: 1px;\r
      }\r
      .border-2 {\r
        border-width: 2px;\r
      }\r
      .border-y {\r
        border-top-width: 1px;\r
        border-bottom-width: 1px;\r
      }\r
      .border-b {\r
        border-bottom-width: 1px;\r
      }\r
      .border-l {\r
        border-left-width: 1px;\r
      }\r
      .border-l-2 {\r
        border-left-width: 2px;\r
      }\r
      .border-r {\r
        border-right-width: 1px;\r
      }\r
      .border-t {\r
        border-top-width: 1px;\r
      }\r
      .border-destructive {\r
        border-color: hsl(var(--destructive));\r
      }\r
      .border-destructive\\/50 {\r
        border-color: hsl(var(--destructive) / 0.5);\r
      }\r
      .border-input {\r
        border-color: hsl(var(--input));\r
      }\r
      .border-primary {\r
        border-color: hsl(var(--primary));\r
      }\r
      .border-primary\\/50 {\r
        border-color: hsl(var(--primary) / 0.5);\r
      }\r
      .border-transparent {\r
        border-color: transparent;\r
      }\r
      .border-white\\/10 {\r
        border-color: rgb(255 255 255 / 0.1);\r
      }\r
      .border-white\\/15 {\r
        border-color: rgb(255 255 255 / 0.15);\r
      }\r
      .border-white\\/20 {\r
        border-color: rgb(255 255 255 / 0.2);\r
      }\r
      .border-l-transparent {\r
        border-left-color: transparent;\r
      }\r
      .border-t-transparent {\r
        border-top-color: transparent;\r
      }\r
      .bg-\\[var\\(--accent\\)\\] {\r
        background-color: var(--accent);\r
      }\r
      .bg-\\[var\\(--bg\\)\\] {\r
        background-color: var(--bg);\r
      }\r
      .bg-\\[var\\(--surface\\)\\] {\r
        background-color: var(--surface);\r
      }\r
      .bg-accent {\r
        background-color: hsl(var(--accent));\r
      }\r
      .bg-background {\r
        background-color: hsl(var(--background));\r
      }\r
      .bg-black\\/60 {\r
        background-color: rgb(0 0 0 / 0.6);\r
      }\r
      .bg-black\\/80 {\r
        background-color: rgb(0 0 0 / 0.8);\r
      }\r
      .bg-black\\/90 {\r
        background-color: rgb(0 0 0 / 0.9);\r
      }\r
      .bg-border {\r
        background-color: hsl(var(--border));\r
      }\r
      .bg-card {\r
        background-color: hsl(var(--card));\r
      }\r
      .bg-destructive {\r
        background-color: hsl(var(--destructive));\r
      }\r
      .bg-foreground {\r
        background-color: hsl(var(--foreground));\r
      }\r
      .bg-muted {\r
        background-color: hsl(var(--muted));\r
      }\r
      .bg-muted\\/50 {\r
        background-color: hsl(var(--muted) / 0.5);\r
      }\r
      .bg-popover {\r
        background-color: hsl(var(--popover));\r
      }\r
      .bg-primary {\r
        background-color: hsl(var(--primary));\r
      }\r
      .bg-primary\\/10 {\r
        background-color: hsl(var(--primary) / 0.1);\r
      }\r
      .bg-primary\\/20 {\r
        background-color: hsl(var(--primary) / 0.2);\r
      }\r
      .bg-secondary {\r
        background-color: hsl(var(--secondary));\r
      }\r
      .bg-transparent {\r
        background-color: transparent;\r
      }\r
      .bg-white\\/10 {\r
        background-color: rgb(255 255 255 / 0.1);\r
      }\r
      .bg-gradient-to-t {\r
        background-image: linear-gradient(to top, var(--tw-gradient-stops));\r
      }\r
      .from-black {\r
        --tw-gradient-from: #000 var(--tw-gradient-from-position);\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\r
      }\r
      .from-black\\/60 {\r
        --tw-gradient-from: rgb(0 0 0 / 0.6) var(--tw-gradient-from-position);\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\r
      }\r
      .from-black\\/80 {\r
        --tw-gradient-from: rgb(0 0 0 / 0.8) var(--tw-gradient-from-position);\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\r
      }\r
      .via-black\\/20 {\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops:\r
          var(--tw-gradient-from),\r
          rgb(0 0 0 / 0.2) var(--tw-gradient-via-position),\r
          var(--tw-gradient-to);\r
      }\r
      .via-transparent {\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops:\r
          var(--tw-gradient-from), transparent var(--tw-gradient-via-position),\r
          var(--tw-gradient-to);\r
      }\r
      .to-transparent {\r
        --tw-gradient-to: transparent var(--tw-gradient-to-position);\r
      }\r
      .fill-current {\r
        fill: currentColor;\r
      }\r
      .fill-primary {\r
        fill: hsl(var(--primary));\r
      }\r
      .object-cover {\r
        object-fit: cover;\r
      }\r
      .p-0 {\r
        padding: 0px;\r
      }\r
      .p-1 {\r
        padding: 0.25rem;\r
      }\r
      .p-2 {\r
        padding: 0.5rem;\r
      }\r
      .p-3 {\r
        padding: 0.75rem;\r
      }\r
      .p-4 {\r
        padding: 1rem;\r
      }\r
      .p-5 {\r
        padding: 1.25rem;\r
      }\r
      .p-6 {\r
        padding: 1.5rem;\r
      }\r
      .p-\\[1px\\] {\r
        padding: 1px;\r
      }\r
      .px-1\\.5 {\r
        padding-left: 0.375rem;\r
        padding-right: 0.375rem;\r
      }\r
      .px-2 {\r
        padding-left: 0.5rem;\r
        padding-right: 0.5rem;\r
      }\r
      .px-2\\.5 {\r
        padding-left: 0.625rem;\r
        padding-right: 0.625rem;\r
      }\r
      .px-3 {\r
        padding-left: 0.75rem;\r
        padding-right: 0.75rem;\r
      }\r
      .px-4 {\r
        padding-left: 1rem;\r
        padding-right: 1rem;\r
      }\r
      .px-5 {\r
        padding-left: 1.25rem;\r
        padding-right: 1.25rem;\r
      }\r
      .px-6 {\r
        padding-left: 1.5rem;\r
        padding-right: 1.5rem;\r
      }\r
      .px-8 {\r
        padding-left: 2rem;\r
        padding-right: 2rem;\r
      }\r
      .py-0\\.5 {\r
        padding-top: 0.125rem;\r
        padding-bottom: 0.125rem;\r
      }\r
      .py-1 {\r
        padding-top: 0.25rem;\r
        padding-bottom: 0.25rem;\r
      }\r
      .py-1\\.5 {\r
        padding-top: 0.375rem;\r
        padding-bottom: 0.375rem;\r
      }\r
      .py-10 {\r
        padding-top: 2.5rem;\r
        padding-bottom: 2.5rem;\r
      }\r
      .py-2 {\r
        padding-top: 0.5rem;\r
        padding-bottom: 0.5rem;\r
      }\r
      .py-2\\.5 {\r
        padding-top: 0.625rem;\r
        padding-bottom: 0.625rem;\r
      }\r
      .py-20 {\r
        padding-top: 5rem;\r
        padding-bottom: 5rem;\r
      }\r
      .py-24 {\r
        padding-top: 6rem;\r
        padding-bottom: 6rem;\r
      }\r
      .py-3 {\r
        padding-top: 0.75rem;\r
        padding-bottom: 0.75rem;\r
      }\r
      .py-4 {\r
        padding-top: 1rem;\r
        padding-bottom: 1rem;\r
      }\r
      .py-6 {\r
        padding-top: 1.5rem;\r
        padding-bottom: 1.5rem;\r
      }\r
      .pb-12 {\r
        padding-bottom: 3rem;\r
      }\r
      .pb-16 {\r
        padding-bottom: 4rem;\r
      }\r
      .pb-20 {\r
        padding-bottom: 5rem;\r
      }\r
      .pb-4 {\r
        padding-bottom: 1rem;\r
      }\r
      .pl-10 {\r
        padding-left: 2.5rem;\r
      }\r
      .pl-2 {\r
        padding-left: 0.5rem;\r
      }\r
      .pl-2\\.5 {\r
        padding-left: 0.625rem;\r
      }\r
      .pl-4 {\r
        padding-left: 1rem;\r
      }\r
      .pl-8 {\r
        padding-left: 2rem;\r
      }\r
      .pr-2 {\r
        padding-right: 0.5rem;\r
      }\r
      .pr-2\\.5 {\r
        padding-right: 0.625rem;\r
      }\r
      .pr-6 {\r
        padding-right: 1.5rem;\r
      }\r
      .pr-8 {\r
        padding-right: 2rem;\r
      }\r
      .pt-0 {\r
        padding-top: 0px;\r
      }\r
      .pt-1 {\r
        padding-top: 0.25rem;\r
      }\r
      .pt-28 {\r
        padding-top: 7rem;\r
      }\r
      .pt-32 {\r
        padding-top: 8rem;\r
      }\r
      .pt-4 {\r
        padding-top: 1rem;\r
      }\r
      .pt-40 {\r
        padding-top: 10rem;\r
      }\r
      .text-left {\r
        text-align: left;\r
      }\r
      .text-center {\r
        text-align: center;\r
      }\r
      .align-middle {\r
        vertical-align: middle;\r
      }\r
      .font-mono {\r
        font-family:\r
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\r
          "Liberation Mono", "Courier New", monospace;\r
      }\r
      .text-2xl {\r
        font-size: 1.5rem;\r
        line-height: 2rem;\r
      }\r
      .text-3xl {\r
        font-size: 1.875rem;\r
        line-height: 2.25rem;\r
      }\r
      .text-4xl {\r
        font-size: 2.25rem;\r
        line-height: 2.5rem;\r
      }\r
      .text-5xl {\r
        font-size: 3rem;\r
        line-height: 1;\r
      }\r
      .text-\\[0\\.8rem\\] {\r
        font-size: 0.8rem;\r
      }\r
      .text-\\[10px\\] {\r
        font-size: 10px;\r
      }\r
      .text-\\[11px\\] {\r
        font-size: 11px;\r
      }\r
      .text-\\[14rem\\] {\r
        font-size: 14rem;\r
      }\r
      .text-\\[9rem\\] {\r
        font-size: 9rem;\r
      }\r
      .text-base {\r
        font-size: 1rem;\r
        line-height: 1.5rem;\r
      }\r
      .text-lg {\r
        font-size: 1.125rem;\r
        line-height: 1.75rem;\r
      }\r
      .text-sm {\r
        font-size: 0.875rem;\r
        line-height: 1.25rem;\r
      }\r
      .text-xs {\r
        font-size: 0.75rem;\r
        line-height: 1rem;\r
      }\r
      .text-\\[2\\.5rem\\] {\r
        font-size: 2.5rem;\r
      }\r
      .font-black {\r
        font-weight: 900;\r
      }\r
      .font-bold {\r
        font-weight: 700;\r
      }\r
      .font-medium {\r
        font-weight: 500;\r
      }\r
      .font-normal {\r
        font-weight: 400;\r
      }\r
      .font-semibold {\r
        font-weight: 600;\r
      }\r
      .uppercase {\r
        text-transform: uppercase;\r
      }\r
      .leading-\\[0\\.88\\] {\r
        line-height: 0.88;\r
      }\r
      .leading-\\[0\\.95\\] {\r
        line-height: 0.95;\r
      }\r
      .leading-\\[0\\.9\\] {\r
        line-height: 0.9;\r
      }\r
      .leading-none {\r
        line-height: 1;\r
      }\r
      .leading-relaxed {\r
        line-height: 1.625;\r
      }\r
      .tracking-\\[0\\.15em\\] {\r
        letter-spacing: 0.15em;\r
      }\r
      .tracking-\\[0\\.25em\\] {\r
        letter-spacing: 0.25em;\r
      }\r
      .tracking-\\[0\\.2em\\] {\r
        letter-spacing: 0.2em;\r
      }\r
      .tracking-\\[0\\.3em\\] {\r
        letter-spacing: 0.3em;\r
      }\r
      .tracking-tight {\r
        letter-spacing: -0.025em;\r
      }\r
      .tracking-tighter {\r
        letter-spacing: -0.05em;\r
      }\r
      .tracking-widest {\r
        letter-spacing: 0.1em;\r
      }\r
      .text-\\[var\\(--accent\\)\\] {\r
        color: var(--accent);\r
      }\r
      .text-accent-foreground {\r
        color: hsl(var(--accent-foreground));\r
      }\r
      .text-black {\r
        --tw-text-opacity: 1;\r
        color: rgb(0 0 0 / var(--tw-text-opacity, 1));\r
      }\r
      .text-card-foreground {\r
        color: hsl(var(--card-foreground));\r
      }\r
      .text-current {\r
        color: currentColor;\r
      }\r
      .text-destructive {\r
        color: hsl(var(--destructive));\r
      }\r
      .text-destructive-foreground {\r
        color: hsl(var(--destructive-foreground));\r
      }\r
      .text-foreground {\r
        color: hsl(var(--foreground));\r
      }\r
      .text-foreground\\/50 {\r
        color: hsl(var(--foreground) / 0.5);\r
      }\r
      .text-muted-foreground {\r
        color: hsl(var(--muted-foreground));\r
      }\r
      .text-popover-foreground {\r
        color: hsl(var(--popover-foreground));\r
      }\r
      .text-primary {\r
        color: hsl(var(--primary));\r
      }\r
      .text-primary-foreground {\r
        color: hsl(var(--primary-foreground));\r
      }\r
      .text-secondary-foreground {\r
        color: hsl(var(--secondary-foreground));\r
      }\r
      .text-white {\r
        --tw-text-opacity: 1;\r
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));\r
      }\r
      .text-white\\/\\[0\\.04\\] {\r
        color: rgb(255 255 255 / 0.04);\r
      }\r
      .text-zinc-300 {\r
        --tw-text-opacity: 1;\r
        color: rgb(212 212 216 / var(--tw-text-opacity, 1));\r
      }\r
      .text-zinc-400 {\r
        --tw-text-opacity: 1;\r
        color: rgb(161 161 170 / var(--tw-text-opacity, 1));\r
      }\r
      .text-zinc-500 {\r
        --tw-text-opacity: 1;\r
        color: rgb(113 113 122 / var(--tw-text-opacity, 1));\r
      }\r
      .text-zinc-600 {\r
        --tw-text-opacity: 1;\r
        color: rgb(82 82 91 / var(--tw-text-opacity, 1));\r
      }\r
      .text-zinc-700 {\r
        --tw-text-opacity: 1;\r
        color: rgb(63 63 70 / var(--tw-text-opacity, 1));\r
      }\r
      .underline-offset-4 {\r
        text-underline-offset: 4px;\r
      }\r
      .opacity-0 {\r
        opacity: 0;\r
      }\r
      .opacity-40 {\r
        opacity: 0.4;\r
      }\r
      .opacity-50 {\r
        opacity: 0.5;\r
      }\r
      .opacity-60 {\r
        opacity: 0.6;\r
      }\r
      .opacity-70 {\r
        opacity: 0.7;\r
      }\r
      .opacity-75 {\r
        opacity: 0.75;\r
      }\r
      .opacity-80 {\r
        opacity: 0.8;\r
      }\r
      .opacity-90 {\r
        opacity: 0.9;\r
      }\r
      .opacity-\\[0\\.06\\] {\r
        opacity: 0.06;\r
      }\r
      .shadow {\r
        --tw-shadow:\r
          0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 1px 3px 0 var(--tw-shadow-color),\r
          0 1px 2px -1px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
      .shadow-lg {\r
        --tw-shadow:\r
          0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 10px 15px -3px var(--tw-shadow-color),\r
          0 4px 6px -4px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
      .shadow-md {\r
        --tw-shadow:\r
          0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 4px 6px -1px var(--tw-shadow-color),\r
          0 2px 4px -2px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
      .shadow-sm {\r
        --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\r
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
      .outline-none {\r
        outline: 2px solid transparent;\r
        outline-offset: 2px;\r
      }\r
      .outline {\r
        outline-style: solid;\r
      }\r
      .ring-0 {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
      .ring-1 {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
      .ring-ring {\r
        --tw-ring-color: hsl(var(--ring));\r
      }\r
      .ring-offset-background {\r
        --tw-ring-offset-color: hsl(var(--background));\r
      }\r
      .blur-3xl {\r
        --tw-blur: blur(64px);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
      .blur-md {\r
        --tw-blur: blur(12px);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
      .grayscale {\r
        --tw-grayscale: grayscale(100%);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
      .filter {\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
      .backdrop-blur {\r
        --tw-backdrop-blur: blur(8px);\r
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)\r
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)\r
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)\r
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)\r
          var(--tw-backdrop-sepia);\r
      }\r
      .backdrop-blur-md {\r
        --tw-backdrop-blur: blur(12px);\r
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)\r
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)\r
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)\r
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)\r
          var(--tw-backdrop-sepia);\r
      }\r
      .backdrop-blur-sm {\r
        --tw-backdrop-blur: blur(4px);\r
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)\r
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)\r
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)\r
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)\r
          var(--tw-backdrop-sepia);\r
      }\r
      .transition {\r
        transition-property:\r
          color, background-color, border-color, text-decoration-color, fill,\r
          stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .transition-all {\r
        transition-property: all;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .transition-colors {\r
        transition-property:\r
          color, background-color, border-color, text-decoration-color, fill,\r
          stroke;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .transition-opacity {\r
        transition-property: opacity;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .transition-transform {\r
        transition-property: transform;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .duration-1000 {\r
        transition-duration: 1000ms;\r
      }\r
      .duration-200 {\r
        transition-duration: 200ms;\r
      }\r
      .duration-300 {\r
        transition-duration: 300ms;\r
      }\r
      .duration-700 {\r
        transition-duration: 700ms;\r
      }\r
      .ease-in-out {\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
      }\r
      @keyframes enter {\r
        from {\r
          opacity: var(--tw-enter-opacity, 1);\r
          transform: translate3d(\r
              var(--tw-enter-translate-x, 0),\r
              var(--tw-enter-translate-y, 0),\r
              0\r
            )\r
            scale3d(\r
              var(--tw-enter-scale, 1),\r
              var(--tw-enter-scale, 1),\r
              var(--tw-enter-scale, 1)\r
            )\r
            rotate(var(--tw-enter-rotate, 0));\r
        }\r
      }\r
      @keyframes exit {\r
        to {\r
          opacity: var(--tw-exit-opacity, 1);\r
          transform: translate3d(\r
              var(--tw-exit-translate-x, 0),\r
              var(--tw-exit-translate-y, 0),\r
              0\r
            )\r
            scale3d(\r
              var(--tw-exit-scale, 1),\r
              var(--tw-exit-scale, 1),\r
              var(--tw-exit-scale, 1)\r
            )\r
            rotate(var(--tw-exit-rotate, 0));\r
        }\r
      }\r
      .animate-in {\r
        animation-name: enter;\r
        animation-duration: 150ms;\r
        --tw-enter-opacity: initial;\r
        --tw-enter-scale: initial;\r
        --tw-enter-rotate: initial;\r
        --tw-enter-translate-x: initial;\r
        --tw-enter-translate-y: initial;\r
      }\r
      .fade-in-0 {\r
        --tw-enter-opacity: 0;\r
      }\r
      .zoom-in-95 {\r
        --tw-enter-scale: 0.95;\r
      }\r
      .duration-1000 {\r
        animation-duration: 1000ms;\r
      }\r
      .duration-200 {\r
        animation-duration: 200ms;\r
      }\r
      .duration-300 {\r
        animation-duration: 300ms;\r
      }\r
      .duration-700 {\r
        animation-duration: 700ms;\r
      }\r
      .ease-in-out {\r
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
      }\r
      .running {\r
        animation-play-state: running;\r
      }\r
\r
      /* ---------- Fonts ---------- */\r
\r
      /* ---------- Tokens ---------- */\r
      :root {\r
        --bg: #050505;\r
        --surface: #121212;\r
        --surface-2: #1e1e1e;\r
        --accent: #dfff00;\r
        --text: #ffffff;\r
        --text-dim: #a1a1aa;\r
\r
        /* shadcn-compatible dark tokens (global) */\r
        --background: 0 0% 2%;\r
        --foreground: 0 0% 100%;\r
        --card: 0 0% 7%;\r
        --card-foreground: 0 0% 100%;\r
        --popover: 0 0% 7%;\r
        --popover-foreground: 0 0% 100%;\r
        --primary: 71 100% 50%;\r
        --primary-foreground: 0 0% 0%;\r
        --secondary: 0 0% 12%;\r
        --secondary-foreground: 0 0% 100%;\r
        --muted: 0 0% 12%;\r
        --muted-foreground: 0 0% 64%;\r
        --accent: 71 100% 50%;\r
        --accent-foreground: 0 0% 0%;\r
        --destructive: 0 62.8% 30.6%;\r
        --destructive-foreground: 0 0% 98%;\r
        --border: 0 0% 16%;\r
        --input: 0 0% 16%;\r
        --ring: 71 100% 50%;\r
        --radius: 0.25rem;\r
\r
        /* Re-assert brand accent AFTER shadcn tokens so var(--accent) is a valid color */\r
        --accent: #dfff00;\r
      }\r
\r
      * {\r
        border-color: hsl(var(--border));\r
      }\r
\r
      html,\r
      body,\r
      #root {\r
        background: #050505;\r
        color: #fff;\r
        min-height: 100%;\r
      }\r
\r
      body {\r
        margin: 0;\r
        font-family:\r
          "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;\r
        -webkit-font-smoothing: antialiased;\r
        -moz-osx-font-smoothing: grayscale;\r
      }\r
\r
      ::selection {\r
        background: #dfff00;\r
        color: #050505;\r
      }\r
\r
      .font-display {\r
        font-family: "Unbounded", system-ui, sans-serif;\r
        letter-spacing: -0.02em;\r
      }\r
      .font-mono {\r
        font-family: "JetBrains Mono", ui-monospace, monospace;\r
      }\r
\r
      .bg-grid {\r
        background-image:\r
          linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),\r
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);\r
        background-size: 48px 48px;\r
      }\r
      .bg-grid-fade {\r
        mask-image: radial-gradient(\r
          ellipse 80% 60% at 50% 30%,\r
          #000 40%,\r
          transparent 80%\r
        );\r
      }\r
\r
      .terminal {\r
        background: var(--surface);\r
        border: 1px solid rgba(255, 255, 255, 0.1);\r
        border-radius: 4px;\r
        overflow: hidden;\r
      }\r
      .terminal-bar {\r
        display: flex;\r
        align-items: center;\r
        gap: 6px;\r
        padding: 10px 12px;\r
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r
        background: #0d0d0d;\r
      }\r
      .terminal-dot {\r
        width: 10px;\r
        height: 10px;\r
        border-radius: 999px;\r
        background: #2a2a2a;\r
      }\r
\r
      .corners {\r
        position: relative;\r
      }\r
      .corners::before,\r
      .corners::after {\r
        content: "";\r
        position: absolute;\r
        width: 12px;\r
        height: 12px;\r
        border: 1px solid #dfff00;\r
        pointer-events: none;\r
      }\r
      .corners::before {\r
        top: -1px;\r
        left: -1px;\r
        border-right: 0;\r
        border-bottom: 0;\r
      }\r
      .corners::after {\r
        bottom: -1px;\r
        right: -1px;\r
        border-left: 0;\r
        border-top: 0;\r
      }\r
\r
      .btn-block {\r
        position: relative;\r
        transition:\r
          transform 0.15s ease,\r
          box-shadow 0.15s ease,\r
          background-color 0.15s ease,\r
          color 0.15s ease,\r
          border-color 0.15s ease;\r
      }\r
      .btn-block:hover {\r
        transform: translate(-2px, -2px);\r
        box-shadow: 4px 4px 0 0 #dfff00;\r
      }\r
      .btn-block:active {\r
        transform: translate(0, 0);\r
        box-shadow: 0 0 0 0 #dfff00;\r
      }\r
\r
      .marquee-mask {\r
        mask-image: linear-gradient(\r
          90deg,\r
          transparent,\r
          #000 10%,\r
          #000 90%,\r
          transparent\r
        );\r
      }\r
\r
      ::-webkit-scrollbar {\r
        width: 8px;\r
        height: 8px;\r
      }\r
      ::-webkit-scrollbar-track {\r
        background: #0a0a0a;\r
      }\r
      ::-webkit-scrollbar-thumb {\r
        background: #1f1f1f;\r
      }\r
      ::-webkit-scrollbar-thumb:hover {\r
        background: #2a2a2a;\r
      }\r
\r
      .link-underline {\r
        position: relative;\r
      }\r
      .link-underline::after {\r
        content: "";\r
        position: absolute;\r
        left: 0;\r
        right: 100%;\r
        bottom: -3px;\r
        height: 1px;\r
        background: currentColor;\r
        transition: right 0.3s ease;\r
      }\r
      .link-underline:hover::after {\r
        right: 0;\r
      }\r
\r
      html {\r
        scroll-behavior: smooth;\r
      }\r
\r
      .file\\:border-0::file-selector-button {\r
        border-width: 0px;\r
      }\r
\r
      .file\\:bg-transparent::file-selector-button {\r
        background-color: transparent;\r
      }\r
\r
      .file\\:text-sm::file-selector-button {\r
        font-size: 0.875rem;\r
        line-height: 1.25rem;\r
      }\r
\r
      .file\\:font-medium::file-selector-button {\r
        font-weight: 500;\r
      }\r
\r
      .file\\:text-foreground::file-selector-button {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .placeholder\\:text-muted-foreground::placeholder {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .placeholder\\:text-zinc-600::placeholder {\r
        --tw-text-opacity: 1;\r
        color: rgb(82 82 91 / var(--tw-text-opacity, 1));\r
      }\r
\r
      .after\\:absolute::after {\r
        content: var(--tw-content);\r
        position: absolute;\r
      }\r
\r
      .after\\:inset-y-0::after {\r
        content: var(--tw-content);\r
        top: 0px;\r
        bottom: 0px;\r
      }\r
\r
      .after\\:left-1\\/2::after {\r
        content: var(--tw-content);\r
        left: 50%;\r
      }\r
\r
      .after\\:w-1::after {\r
        content: var(--tw-content);\r
        width: 0.25rem;\r
      }\r
\r
      .after\\:-translate-x-1\\/2::after {\r
        content: var(--tw-content);\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .first\\:rounded-l-md:first-child {\r
        border-top-left-radius: calc(var(--radius) - 2px);\r
        border-bottom-left-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .first\\:border-l:first-child {\r
        border-left-width: 1px;\r
      }\r
\r
      .last\\:rounded-r-md:last-child {\r
        border-top-right-radius: calc(var(--radius) - 2px);\r
        border-bottom-right-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .focus-within\\:relative:focus-within {\r
        position: relative;\r
      }\r
\r
      .focus-within\\:z-20:focus-within {\r
        z-index: 20;\r
      }\r
\r
      .hover\\:border-\\[var\\(--accent\\)\\]:hover {\r
        border-color: var(--accent);\r
      }\r
\r
      .hover\\:bg-\\[var\\(--accent\\)\\]:hover {\r
        background-color: var(--accent);\r
      }\r
\r
      .hover\\:bg-accent:hover {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .hover\\:bg-destructive\\/80:hover {\r
        background-color: hsl(var(--destructive) / 0.8);\r
      }\r
\r
      .hover\\:bg-destructive\\/90:hover {\r
        background-color: hsl(var(--destructive) / 0.9);\r
      }\r
\r
      .hover\\:bg-muted:hover {\r
        background-color: hsl(var(--muted));\r
      }\r
\r
      .hover\\:bg-muted\\/50:hover {\r
        background-color: hsl(var(--muted) / 0.5);\r
      }\r
\r
      .hover\\:bg-primary:hover {\r
        background-color: hsl(var(--primary));\r
      }\r
\r
      .hover\\:bg-primary\\/80:hover {\r
        background-color: hsl(var(--primary) / 0.8);\r
      }\r
\r
      .hover\\:bg-primary\\/90:hover {\r
        background-color: hsl(var(--primary) / 0.9);\r
      }\r
\r
      .hover\\:bg-secondary:hover {\r
        background-color: hsl(var(--secondary));\r
      }\r
\r
      .hover\\:bg-secondary\\/80:hover {\r
        background-color: hsl(var(--secondary) / 0.8);\r
      }\r
\r
      .hover\\:text-\\[var\\(--accent\\)\\]:hover {\r
        color: var(--accent);\r
      }\r
\r
      .hover\\:text-accent-foreground:hover {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .hover\\:text-black:hover {\r
        --tw-text-opacity: 1;\r
        color: rgb(0 0 0 / var(--tw-text-opacity, 1));\r
      }\r
\r
      .hover\\:text-foreground:hover {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .hover\\:text-muted-foreground:hover {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .hover\\:text-primary-foreground:hover {\r
        color: hsl(var(--primary-foreground));\r
      }\r
\r
      .hover\\:underline:hover {\r
        text-decoration-line: underline;\r
      }\r
\r
      .hover\\:opacity-100:hover {\r
        opacity: 1;\r
      }\r
\r
      .hover\\:grayscale-0:hover {\r
        --tw-grayscale: grayscale(0);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
\r
      .focus\\:border-\\[var\\(--accent\\)\\]:focus {\r
        border-color: var(--accent);\r
      }\r
\r
      .focus\\:bg-accent:focus {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .focus\\:bg-primary:focus {\r
        background-color: hsl(var(--primary));\r
      }\r
\r
      .focus\\:text-accent-foreground:focus {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .focus\\:text-primary-foreground:focus {\r
        color: hsl(var(--primary-foreground));\r
      }\r
\r
      .focus\\:opacity-100:focus {\r
        opacity: 1;\r
      }\r
\r
      .focus\\:outline-none:focus {\r
        outline: 2px solid transparent;\r
        outline-offset: 2px;\r
      }\r
\r
      .focus\\:ring-1:focus {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
\r
      .focus\\:ring-2:focus {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
\r
      .focus\\:ring-ring:focus {\r
        --tw-ring-color: hsl(var(--ring));\r
      }\r
\r
      .focus\\:ring-offset-2:focus {\r
        --tw-ring-offset-width: 2px;\r
      }\r
\r
      .focus-visible\\:outline-none:focus-visible {\r
        outline: 2px solid transparent;\r
        outline-offset: 2px;\r
      }\r
\r
      .focus-visible\\:ring-1:focus-visible {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
\r
      .focus-visible\\:ring-2:focus-visible {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
\r
      .focus-visible\\:ring-ring:focus-visible {\r
        --tw-ring-color: hsl(var(--ring));\r
      }\r
\r
      .focus-visible\\:ring-offset-1:focus-visible {\r
        --tw-ring-offset-width: 1px;\r
      }\r
\r
      .focus-visible\\:ring-offset-2:focus-visible {\r
        --tw-ring-offset-width: 2px;\r
      }\r
\r
      .focus-visible\\:ring-offset-background:focus-visible {\r
        --tw-ring-offset-color: hsl(var(--background));\r
      }\r
\r
      .disabled\\:pointer-events-none:disabled {\r
        pointer-events: none;\r
      }\r
\r
      .disabled\\:cursor-not-allowed:disabled {\r
        cursor: not-allowed;\r
      }\r
\r
      .disabled\\:opacity-50:disabled {\r
        opacity: 0.5;\r
      }\r
\r
      .disabled\\:opacity-60:disabled {\r
        opacity: 0.6;\r
      }\r
\r
      .group:hover .group-hover\\:scale-105 {\r
        --tw-scale-x: 1.05;\r
        --tw-scale-y: 1.05;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .group:hover .group-hover\\:text-\\[var\\(--accent\\)\\] {\r
        color: var(--accent);\r
      }\r
\r
      .group:hover .group-hover\\:opacity-100 {\r
        opacity: 1;\r
      }\r
\r
      .group:hover .group-hover\\:opacity-60 {\r
        opacity: 0.6;\r
      }\r
\r
      .group:hover .group-hover\\:grayscale-0 {\r
        --tw-grayscale: grayscale(0);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:border-muted\\/40 {\r
        border-color: hsl(var(--muted) / 0.4);\r
      }\r
\r
      .group.toaster .group-\\[\\.toaster\\]\\:border-border {\r
        border-color: hsl(var(--border));\r
      }\r
\r
      .group.toast .group-\\[\\.toast\\]\\:bg-muted {\r
        background-color: hsl(var(--muted));\r
      }\r
\r
      .group.toast .group-\\[\\.toast\\]\\:bg-primary {\r
        background-color: hsl(var(--primary));\r
      }\r
\r
      .group.toaster .group-\\[\\.toaster\\]\\:bg-background {\r
        background-color: hsl(var(--background));\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:text-red-300 {\r
        --tw-text-opacity: 1;\r
        color: rgb(252 165 165 / var(--tw-text-opacity, 1));\r
      }\r
\r
      .group.toast .group-\\[\\.toast\\]\\:text-muted-foreground {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .group.toast .group-\\[\\.toast\\]\\:text-primary-foreground {\r
        color: hsl(var(--primary-foreground));\r
      }\r
\r
      .group.toaster .group-\\[\\.toaster\\]\\:text-foreground {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .group.toaster .group-\\[\\.toaster\\]\\:shadow-lg {\r
        --tw-shadow:\r
          0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 10px 15px -3px var(--tw-shadow-color),\r
          0 4px 6px -4px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
\r
      .group.destructive\r
        .group-\\[\\.destructive\\]\\:hover\\:border-destructive\\/30:hover {\r
        border-color: hsl(var(--destructive) / 0.3);\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:hover\\:bg-destructive:hover {\r
        background-color: hsl(var(--destructive));\r
      }\r
\r
      .group.destructive\r
        .group-\\[\\.destructive\\]\\:hover\\:text-destructive-foreground:hover {\r
        color: hsl(var(--destructive-foreground));\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-red-50:hover {\r
        --tw-text-opacity: 1;\r
        color: rgb(254 242 242 / var(--tw-text-opacity, 1));\r
      }\r
\r
      .group.destructive\r
        .group-\\[\\.destructive\\]\\:focus\\:ring-destructive:focus {\r
        --tw-ring-color: hsl(var(--destructive));\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-red-400:focus {\r
        --tw-ring-opacity: 1;\r
        --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity, 1));\r
      }\r
\r
      .group.destructive\r
        .group-\\[\\.destructive\\]\\:focus\\:ring-offset-red-600:focus {\r
        --tw-ring-offset-color: #dc2626;\r
      }\r
\r
      .peer:disabled ~ .peer-disabled\\:cursor-not-allowed {\r
        cursor: not-allowed;\r
      }\r
\r
      .peer:disabled ~ .peer-disabled\\:opacity-70 {\r
        opacity: 0.7;\r
      }\r
\r
      .has-\\[\\:disabled\\]\\:opacity-50:has(:disabled) {\r
        opacity: 0.5;\r
      }\r
\r
      .aria-selected\\:bg-accent[aria-selected="true"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .aria-selected\\:bg-accent\\/50[aria-selected="true"] {\r
        background-color: hsl(var(--accent) / 0.5);\r
      }\r
\r
      .aria-selected\\:text-accent-foreground[aria-selected="true"] {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .aria-selected\\:text-muted-foreground[aria-selected="true"] {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .aria-selected\\:opacity-100[aria-selected="true"] {\r
        opacity: 1;\r
      }\r
\r
      .data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled="true"] {\r
        pointer-events: none;\r
      }\r
\r
      .data-\\[disabled\\]\\:pointer-events-none[data-disabled] {\r
        pointer-events: none;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:h-px[data-panel-group-direction="vertical"] {\r
        height: 1px;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:w-full[data-panel-group-direction="vertical"] {\r
        width: 100%;\r
      }\r
\r
      .data-\\[side\\=bottom\\]\\:translate-y-1[data-side="bottom"] {\r
        --tw-translate-y: 0.25rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[side\\=left\\]\\:-translate-x-1[data-side="left"] {\r
        --tw-translate-x: -0.25rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[side\\=right\\]\\:translate-x-1[data-side="right"] {\r
        --tw-translate-x: 0.25rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[side\\=top\\]\\:-translate-y-1[data-side="top"] {\r
        --tw-translate-y: -0.25rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[state\\=checked\\]\\:translate-x-4[data-state="checked"] {\r
        --tw-translate-x: 1rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state="unchecked"] {\r
        --tw-translate-x: 0px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[swipe\\=cancel\\]\\:translate-x-0[data-swipe="cancel"] {\r
        --tw-translate-x: 0px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\][data-swipe="end"] {\r
        --tw-translate-x: var(--radix-toast-swipe-end-x);\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[swipe\\=move\\]\\:translate-x-\\[var\\(--radix-toast-swipe-move-x\\)\\][data-swipe="move"] {\r
        --tw-translate-x: var(--radix-toast-swipe-move-x);\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      @keyframes accordion-up {\r
        from {\r
          height: var(--radix-accordion-content-height);\r
        }\r
\r
        to {\r
          height: 0;\r
        }\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:animate-accordion-up[data-state="closed"] {\r
        animation: accordion-up 0.2s ease-out;\r
      }\r
\r
      @keyframes accordion-down {\r
        from {\r
          height: 0;\r
        }\r
\r
        to {\r
          height: var(--radix-accordion-content-height);\r
        }\r
      }\r
\r
      .data-\\[state\\=open\\]\\:animate-accordion-down[data-state="open"] {\r
        animation: accordion-down 0.2s ease-out;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:flex-col[data-panel-group-direction="vertical"] {\r
        flex-direction: column;\r
      }\r
\r
      .data-\\[selected\\=true\\]\\:bg-accent[data-selected="true"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .data-\\[state\\=active\\]\\:bg-background[data-state="active"] {\r
        background-color: hsl(var(--background));\r
      }\r
\r
      .data-\\[state\\=checked\\]\\:bg-primary[data-state="checked"] {\r
        background-color: hsl(var(--primary));\r
      }\r
\r
      .data-\\[state\\=on\\]\\:bg-accent[data-state="on"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:bg-accent[data-state="open"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:bg-accent\\/50[data-state="open"] {\r
        background-color: hsl(var(--accent) / 0.5);\r
      }\r
\r
      .data-\\[state\\=open\\]\\:bg-secondary[data-state="open"] {\r
        background-color: hsl(var(--secondary));\r
      }\r
\r
      .data-\\[state\\=selected\\]\\:bg-muted[data-state="selected"] {\r
        background-color: hsl(var(--muted));\r
      }\r
\r
      .data-\\[state\\=unchecked\\]\\:bg-input[data-state="unchecked"] {\r
        background-color: hsl(var(--input));\r
      }\r
\r
      .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder] {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected="true"] {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .data-\\[state\\=active\\]\\:text-foreground[data-state="active"] {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .data-\\[state\\=checked\\]\\:text-primary-foreground[data-state="checked"] {\r
        color: hsl(var(--primary-foreground));\r
      }\r
\r
      .data-\\[state\\=on\\]\\:text-accent-foreground[data-state="on"] {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:text-accent-foreground[data-state="open"] {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:text-muted-foreground[data-state="open"] {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .data-\\[disabled\\=true\\]\\:opacity-50[data-disabled="true"] {\r
        opacity: 0.5;\r
      }\r
\r
      .data-\\[disabled\\]\\:opacity-50[data-disabled] {\r
        opacity: 0.5;\r
      }\r
\r
      .data-\\[state\\=active\\]\\:shadow[data-state="active"] {\r
        --tw-shadow:\r
          0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 1px 3px 0 var(--tw-shadow-color),\r
          0 1px 2px -1px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
\r
      .data-\\[swipe\\=move\\]\\:transition-none[data-swipe="move"] {\r
        transition-property: none;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:duration-300[data-state="closed"] {\r
        transition-duration: 300ms;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:duration-500[data-state="open"] {\r
        transition-duration: 500ms;\r
      }\r
\r
      .data-\\[motion\\^\\=from-\\]\\:animate-in[data-motion^="from-"] {\r
        animation-name: enter;\r
        animation-duration: 150ms;\r
        --tw-enter-opacity: initial;\r
        --tw-enter-scale: initial;\r
        --tw-enter-rotate: initial;\r
        --tw-enter-translate-x: initial;\r
        --tw-enter-translate-y: initial;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:animate-in[data-state="open"] {\r
        animation-name: enter;\r
        animation-duration: 150ms;\r
        --tw-enter-opacity: initial;\r
        --tw-enter-scale: initial;\r
        --tw-enter-rotate: initial;\r
        --tw-enter-translate-x: initial;\r
        --tw-enter-translate-y: initial;\r
      }\r
\r
      .data-\\[state\\=visible\\]\\:animate-in[data-state="visible"] {\r
        animation-name: enter;\r
        animation-duration: 150ms;\r
        --tw-enter-opacity: initial;\r
        --tw-enter-scale: initial;\r
        --tw-enter-rotate: initial;\r
        --tw-enter-translate-x: initial;\r
        --tw-enter-translate-y: initial;\r
      }\r
\r
      .data-\\[motion\\^\\=to-\\]\\:animate-out[data-motion^="to-"] {\r
        animation-name: exit;\r
        animation-duration: 150ms;\r
        --tw-exit-opacity: initial;\r
        --tw-exit-scale: initial;\r
        --tw-exit-rotate: initial;\r
        --tw-exit-translate-x: initial;\r
        --tw-exit-translate-y: initial;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:animate-out[data-state="closed"] {\r
        animation-name: exit;\r
        animation-duration: 150ms;\r
        --tw-exit-opacity: initial;\r
        --tw-exit-scale: initial;\r
        --tw-exit-rotate: initial;\r
        --tw-exit-translate-x: initial;\r
        --tw-exit-translate-y: initial;\r
      }\r
\r
      .data-\\[state\\=hidden\\]\\:animate-out[data-state="hidden"] {\r
        animation-name: exit;\r
        animation-duration: 150ms;\r
        --tw-exit-opacity: initial;\r
        --tw-exit-scale: initial;\r
        --tw-exit-rotate: initial;\r
        --tw-exit-translate-x: initial;\r
        --tw-exit-translate-y: initial;\r
      }\r
\r
      .data-\\[swipe\\=end\\]\\:animate-out[data-swipe="end"] {\r
        animation-name: exit;\r
        animation-duration: 150ms;\r
        --tw-exit-opacity: initial;\r
        --tw-exit-scale: initial;\r
        --tw-exit-rotate: initial;\r
        --tw-exit-translate-x: initial;\r
        --tw-exit-translate-y: initial;\r
      }\r
\r
      .data-\\[motion\\^\\=from-\\]\\:fade-in[data-motion^="from-"] {\r
        --tw-enter-opacity: 0;\r
      }\r
\r
      .data-\\[motion\\^\\=to-\\]\\:fade-out[data-motion^="to-"] {\r
        --tw-exit-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:fade-out-0[data-state="closed"] {\r
        --tw-exit-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:fade-out-80[data-state="closed"] {\r
        --tw-exit-opacity: 0.8;\r
      }\r
\r
      .data-\\[state\\=hidden\\]\\:fade-out[data-state="hidden"] {\r
        --tw-exit-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:fade-in-0[data-state="open"] {\r
        --tw-enter-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=visible\\]\\:fade-in[data-state="visible"] {\r
        --tw-enter-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:zoom-out-95[data-state="closed"] {\r
        --tw-exit-scale: 0.95;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:zoom-in-90[data-state="open"] {\r
        --tw-enter-scale: 0.9;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:zoom-in-95[data-state="open"] {\r
        --tw-enter-scale: 0.95;\r
      }\r
\r
      .data-\\[motion\\=from-end\\]\\:slide-in-from-right-52[data-motion="from-end"] {\r
        --tw-enter-translate-x: 13rem;\r
      }\r
\r
      .data-\\[motion\\=from-start\\]\\:slide-in-from-left-52[data-motion="from-start"] {\r
        --tw-enter-translate-x: -13rem;\r
      }\r
\r
      .data-\\[motion\\=to-end\\]\\:slide-out-to-right-52[data-motion="to-end"] {\r
        --tw-exit-translate-x: 13rem;\r
      }\r
\r
      .data-\\[motion\\=to-start\\]\\:slide-out-to-left-52[data-motion="to-start"] {\r
        --tw-exit-translate-x: -13rem;\r
      }\r
\r
      .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side="bottom"] {\r
        --tw-enter-translate-y: -0.5rem;\r
      }\r
\r
      .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side="left"] {\r
        --tw-enter-translate-x: 0.5rem;\r
      }\r
\r
      .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side="right"] {\r
        --tw-enter-translate-x: -0.5rem;\r
      }\r
\r
      .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side="top"] {\r
        --tw-enter-translate-y: 0.5rem;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state="closed"] {\r
        --tw-exit-translate-y: 100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-left[data-state="closed"] {\r
        --tw-exit-translate-x: -100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state="closed"] {\r
        --tw-exit-translate-x: -50%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-right[data-state="closed"] {\r
        --tw-exit-translate-x: 100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-right-full[data-state="closed"] {\r
        --tw-exit-translate-x: 100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-top[data-state="closed"] {\r
        --tw-exit-translate-y: -100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state="closed"] {\r
        --tw-exit-translate-y: -48%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state="open"] {\r
        --tw-enter-translate-y: 100%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-left[data-state="open"] {\r
        --tw-enter-translate-x: -100%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state="open"] {\r
        --tw-enter-translate-x: -50%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-right[data-state="open"] {\r
        --tw-enter-translate-x: 100%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-top[data-state="open"] {\r
        --tw-enter-translate-y: -100%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state="open"] {\r
        --tw-enter-translate-y: -48%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-top-full[data-state="open"] {\r
        --tw-enter-translate-y: -100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:duration-300[data-state="closed"] {\r
        animation-duration: 300ms;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:duration-500[data-state="open"] {\r
        animation-duration: 500ms;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        left: 0px;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        height: 0.25rem;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        width: 100%;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        --tw-translate-y: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        --tw-translate-x: 0px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:hover\\:bg-accent:hover[data-state="open"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:focus\\:bg-accent:focus[data-state="open"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .group[data-state="open"] .group-data-\\[state\\=open\\]\\:rotate-180 {\r
        --tw-rotate: 180deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .dark\\:border-destructive:is(.dark *) {\r
        border-color: hsl(var(--destructive));\r
      }\r
\r
      @media (min-width: 640px) {\r
        .sm\\:bottom-0 {\r
          bottom: 0px;\r
        }\r
\r
        .sm\\:right-0 {\r
          right: 0px;\r
        }\r
\r
        .sm\\:top-auto {\r
          top: auto;\r
        }\r
\r
        .sm\\:mt-0 {\r
          margin-top: 0px;\r
        }\r
\r
        .sm\\:max-w-sm {\r
          max-width: 24rem;\r
        }\r
\r
        .sm\\:grid-cols-2 {\r
          grid-template-columns: repeat(2, minmax(0, 1fr));\r
        }\r
\r
        .sm\\:flex-row {\r
          flex-direction: row;\r
        }\r
\r
        .sm\\:flex-col {\r
          flex-direction: column;\r
        }\r
\r
        .sm\\:justify-end {\r
          justify-content: flex-end;\r
        }\r
\r
        .sm\\:gap-2\\.5 {\r
          gap: 0.625rem;\r
        }\r
\r
        .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {\r
          --tw-space-x-reverse: 0;\r
          margin-right: calc(0.5rem * var(--tw-space-x-reverse));\r
          margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\r
        }\r
\r
        .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {\r
          --tw-space-x-reverse: 0;\r
          margin-right: calc(1rem * var(--tw-space-x-reverse));\r
          margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\r
        }\r
\r
        .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\r
          --tw-space-y-reverse: 0;\r
          margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\r
          margin-bottom: calc(0px * var(--tw-space-y-reverse));\r
        }\r
\r
        .sm\\:rounded-lg {\r
          border-radius: var(--radius);\r
        }\r
\r
        .sm\\:text-left {\r
          text-align: left;\r
        }\r
\r
        .sm\\:text-7xl {\r
          font-size: 4.5rem;\r
          line-height: 1;\r
        }\r
\r
        .data-\\[state\\=open\\]\\:sm\\:slide-in-from-bottom-full[data-state="open"] {\r
          --tw-enter-translate-y: 100%;\r
        }\r
      }\r
\r
      @media (min-width: 768px) {\r
        .md\\:absolute {\r
          position: absolute;\r
        }\r
\r
        .md\\:left-1\\/2 {\r
          left: 50%;\r
        }\r
\r
        .md\\:order-1 {\r
          order: 1;\r
        }\r
\r
        .md\\:order-2 {\r
          order: 2;\r
        }\r
\r
        .md\\:col-span-2 {\r
          grid-column: span 2 / span 2;\r
        }\r
\r
        .md\\:col-span-4 {\r
          grid-column: span 4 / span 4;\r
        }\r
\r
        .md\\:col-span-5 {\r
          grid-column: span 5 / span 5;\r
        }\r
\r
        .md\\:col-span-6 {\r
          grid-column: span 6 / span 6;\r
        }\r
\r
        .md\\:col-span-7 {\r
          grid-column: span 7 / span 7;\r
        }\r
\r
        .md\\:col-span-8 {\r
          grid-column: span 8 / span 8;\r
        }\r
\r
        .md\\:mt-0 {\r
          margin-top: 0px;\r
        }\r
\r
        .md\\:block {\r
          display: block;\r
        }\r
\r
        .md\\:flex {\r
          display: flex;\r
        }\r
\r
        .md\\:grid {\r
          display: grid;\r
        }\r
\r
        .md\\:hidden {\r
          display: none;\r
        }\r
\r
        .md\\:w-\\[var\\(--radix-navigation-menu-viewport-width\\)\\] {\r
          width: var(--radix-navigation-menu-viewport-width);\r
        }\r
\r
        .md\\:w-auto {\r
          width: auto;\r
        }\r
\r
        .md\\:max-w-\\[420px\\] {\r
          max-width: 420px;\r
        }\r
\r
        .md\\:translate-y-8 {\r
          --tw-translate-y: 2rem;\r
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
            scaleY(var(--tw-scale-y));\r
        }\r
\r
        .md\\:grid-cols-2 {\r
          grid-template-columns: repeat(2, minmax(0, 1fr));\r
        }\r
\r
        .md\\:grid-cols-4 {\r
          grid-template-columns: repeat(4, minmax(0, 1fr));\r
        }\r
\r
        .md\\:flex-row {\r
          flex-direction: row;\r
        }\r
\r
        .md\\:flex-col {\r
          flex-direction: column;\r
        }\r
\r
        .md\\:justify-end {\r
          justify-content: flex-end;\r
        }\r
\r
        .md\\:gap-12 {\r
          gap: 3rem;\r
        }\r
\r
        .md\\:gap-8 {\r
          gap: 2rem;\r
        }\r
\r
        .md\\:border-b-0 {\r
          border-bottom-width: 0px;\r
        }\r
\r
        .md\\:border-r {\r
          border-right-width: 1px;\r
        }\r
\r
        .md\\:p-6 {\r
          padding: 1.5rem;\r
        }\r
\r
        .md\\:p-8 {\r
          padding: 2rem;\r
        }\r
\r
        .md\\:px-12 {\r
          padding-left: 3rem;\r
          padding-right: 3rem;\r
        }\r
\r
        .md\\:py-28 {\r
          padding-top: 7rem;\r
          padding-bottom: 7rem;\r
        }\r
\r
        .md\\:py-40 {\r
          padding-top: 10rem;\r
          padding-bottom: 10rem;\r
        }\r
\r
        .md\\:pl-0 {\r
          padding-left: 0px;\r
        }\r
\r
        .md\\:pl-12 {\r
          padding-left: 3rem;\r
        }\r
\r
        .md\\:pl-6 {\r
          padding-left: 1.5rem;\r
        }\r
\r
        .md\\:pr-12 {\r
          padding-right: 3rem;\r
        }\r
\r
        .md\\:pt-32 {\r
          padding-top: 8rem;\r
        }\r
\r
        .md\\:pt-40 {\r
          padding-top: 10rem;\r
        }\r
\r
        .md\\:text-right {\r
          text-align: right;\r
        }\r
\r
        .md\\:text-3xl {\r
          font-size: 1.875rem;\r
          line-height: 2.25rem;\r
        }\r
\r
        .md\\:text-4xl {\r
          font-size: 2.25rem;\r
          line-height: 2.5rem;\r
        }\r
\r
        .md\\:text-5xl {\r
          font-size: 3rem;\r
          line-height: 1;\r
        }\r
\r
        .md\\:text-6xl {\r
          font-size: 3.75rem;\r
          line-height: 1;\r
        }\r
\r
        .md\\:text-7xl {\r
          font-size: 4.5rem;\r
          line-height: 1;\r
        }\r
\r
        .md\\:text-8xl {\r
          font-size: 6rem;\r
          line-height: 1;\r
        }\r
\r
        .md\\:text-\\[14rem\\] {\r
          font-size: 14rem;\r
        }\r
\r
        .md\\:text-\\[22rem\\] {\r
          font-size: 22rem;\r
        }\r
\r
        .md\\:text-base {\r
          font-size: 1rem;\r
          line-height: 1.5rem;\r
        }\r
\r
        .md\\:text-lg {\r
          font-size: 1.125rem;\r
          line-height: 1.75rem;\r
        }\r
\r
        .md\\:text-sm {\r
          font-size: 0.875rem;\r
          line-height: 1.25rem;\r
        }\r
\r
        .md\\:text-xl {\r
          font-size: 1.25rem;\r
          line-height: 1.75rem;\r
        }\r
      }\r
\r
      @media (min-width: 1024px) {\r
        .lg\\:text-7xl {\r
          font-size: 4.5rem;\r
          line-height: 1;\r
        }\r
\r
        .lg\\:text-9xl {\r
          font-size: 8rem;\r
          line-height: 1;\r
        }\r
      }\r
\r
      .\\[\\&\\+div\\]\\:text-xs + div {\r
        font-size: 0.75rem;\r
        line-height: 1rem;\r
      }\r
\r
      .\\[\\&\\:has\\(\\>\\.day-range-end\\)\\]\\:rounded-r-md:has(> .day-range-end) {\r
        border-top-right-radius: calc(var(--radius) - 2px);\r
        border-bottom-right-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\>\\.day-range-start\\)\\]\\:rounded-l-md:has(\r
          > .day-range-start\r
        ) {\r
        border-top-left-radius: calc(var(--radius) - 2px);\r
        border-bottom-left-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-md:has([aria-selected]) {\r
        border-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:bg-accent:has([aria-selected]) {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .first\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-l-md:has(\r
          [aria-selected]\r
        ):first-child {\r
        border-top-left-radius: calc(var(--radius) - 2px);\r
        border-bottom-left-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .last\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-r-md:has(\r
          [aria-selected]\r
        ):last-child {\r
        border-top-right-radius: calc(var(--radius) - 2px);\r
        border-bottom-right-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[aria-selected\\]\\.day-outside\\)\\]\\:bg-accent\\/50:has(\r
          [aria-selected].day-outside\r
        ) {\r
        background-color: hsl(var(--accent) / 0.5);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[aria-selected\\]\\.day-range-end\\)\\]\\:rounded-r-md:has(\r
          [aria-selected].day-range-end\r
        ) {\r
        border-top-right-radius: calc(var(--radius) - 2px);\r
        border-bottom-right-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role="checkbox"]) {\r
        padding-right: 0px;\r
      }\r
\r
      .\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\] > [role="checkbox"] {\r
        --tw-translate-y: 2px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .\\[\\&\\>span\\]\\:line-clamp-1 > span {\r
        overflow: hidden;\r
        display: -webkit-box;\r
        -webkit-box-orient: vertical;\r
        -webkit-line-clamp: 1;\r
      }\r
\r
      .\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\] > svg + div {\r
        --tw-translate-y: -3px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:absolute > svg {\r
        position: absolute;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:left-4 > svg {\r
        left: 1rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:top-4 > svg {\r
        top: 1rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:size-4 > svg {\r
        width: 1rem;\r
        height: 1rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:h-3\\.5 > svg {\r
        height: 0.875rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:w-3\\.5 > svg {\r
        width: 0.875rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:shrink-0 > svg {\r
        flex-shrink: 0;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:text-destructive > svg {\r
        color: hsl(var(--destructive));\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:text-foreground > svg {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .\\[\\&\\>svg\\~\\*\\]\\:pl-7 > svg ~ * {\r
        padding-left: 1.75rem;\r
      }\r
\r
      .\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child > tr {\r
        border-bottom-width: 0px;\r
      }\r
\r
      .\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90[data-panel-group-direction="vertical"]\r
        > div {\r
        --tw-rotate: 90deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180[data-state="open"] > svg {\r
        --tw-rotate: 180deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading] {\r
        padding-left: 0.5rem;\r
        padding-right: 0.5rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading] {\r
        padding-top: 0.375rem;\r
        padding-bottom: 0.375rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading] {\r
        font-size: 0.75rem;\r
        line-height: 1rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading] {\r
        font-weight: 500;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground\r
        [cmdk-group-heading] {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0\r
        [cmdk-group]:not([hidden])\r
        ~ [cmdk-group] {\r
        padding-top: 0px;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group] {\r
        padding-left: 0.5rem;\r
        padding-right: 0.5rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg {\r
        height: 1.25rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg {\r
        width: 1.25rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input] {\r
        height: 3rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item] {\r
        padding-left: 0.5rem;\r
        padding-right: 0.5rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item] {\r
        padding-top: 0.75rem;\r
        padding-bottom: 0.75rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg {\r
        height: 1.25rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg {\r
        width: 1.25rem;\r
      }\r
\r
      .\\[\\&_p\\]\\:leading-relaxed p {\r
        line-height: 1.625;\r
      }\r
\r
      .\\[\\&_svg\\]\\:pointer-events-none svg {\r
        pointer-events: none;\r
      }\r
\r
      .\\[\\&_svg\\]\\:size-4 svg {\r
        width: 1rem;\r
        height: 1rem;\r
      }\r
\r
      .\\[\\&_svg\\]\\:shrink-0 svg {\r
        flex-shrink: 0;\r
      }\r
\r
      .\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child {\r
        border-width: 0px;\r
      }\r
\r
      .\\[\\&_tr\\]\\:border-b tr {\r
        border-bottom-width: 1px;\r
      }\r
\r
      /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsOEJBQWM7RUFBZCw2QkFBYztFQUFkLDRCQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZCxzQkFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCxxQkFBYztFQUFkO0FBQWM7O0FBQWQ7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsOEJBQWM7RUFBZCw2QkFBYztFQUFkLDRCQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZCxzQkFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCxxQkFBYztFQUFkO0FBQWMsQ0FBZDs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYyxFQUFkLE1BQWM7RUFBZCxXQUFjLEVBQWQsTUFBYztFQUFkLCtIQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCx1QkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjO0FBQWQ7RUFBQSxhQUFjO0FBQUE7QUFFZDtFQUFBLGtCQUFtQjtFQUFuQixVQUFtQjtFQUFuQixXQUFtQjtFQUFuQixVQUFtQjtFQUFuQixZQUFtQjtFQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxTQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLFFBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5COztFQUFBO0lBQUEsbUJBQW1CO0lBQW5CO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHlCQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQix1REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsc0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsdUJBQW1CO0VBQW5CLCtEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQixnRUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsNERBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsdUJBQW1CO0VBQW5CLDhEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQiw0REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsK0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsdUJBQW1CO0VBQW5CLDREQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQiwrREFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsOERBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsNEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHlEQUFtQjtFQUFuQiwrREFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxRUFBbUI7RUFBbkIsK0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUVBQW1CO0VBQW5CLCtEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdFQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdFQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsMEVBQW1CO0VBQW5CLDhGQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLCtFQUFtQjtFQUFuQixtR0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw2RUFBbUI7RUFBbkIsaUdBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsMENBQW1CO0VBQW5CLHVEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsMkdBQW1CO0VBQW5CLHlHQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDJHQUFtQjtFQUFuQix5R0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsK0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSw2QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw2QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx3SkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsd0JBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLCtGQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw0QkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsOEJBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7O0VBQUE7SUFBQSxtQ0FBbUI7SUFBbkI7RUFBbUI7QUFBQTtBQUFuQjs7RUFBQTtJQUFBLGtDQUFtQjtJQUFuQjtFQUFtQjtBQUFBO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CLHlCQUFtQjtFQUFuQiwyQkFBbUI7RUFBbkIseUJBQW1CO0VBQW5CLDBCQUFtQjtFQUFuQiwrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1COztBQUVuQixnQ0FBZ0M7O0FBR2hDLGlDQUFpQztBQUNqQztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1COztFQUVuQiwyQ0FBMkM7RUFDM0MscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjs7RUFFakIsaUZBQWlGO0VBQ2pGLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkVBQTZFO0VBQzdFLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFOzswRUFFd0U7RUFDeEUsMEJBQTBCO0FBQzVCO0FBQ0E7RUFNRTs7OztHQUlDO0FBQ0g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFDakQsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7Ozs7OzJCQUt5QjtBQUMzQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQVFFOzs7Ozs7R0FNQztBQUNIOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQS9NQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLG1CQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQSxRQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSwwQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQSxzQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsaURBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLGtEQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsNEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLDhCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSwyR0FnTkE7RUFoTkEseUdBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDJHQWdOQTtFQWhOQSx5R0FnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDJHQWdOQTtFQWhOQSx5R0FnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMkdBZ05BO0VBaE5BLHlHQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxrQkFnTkE7RUFoTkEsa0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLDRCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsK0VBZ05BO0VBaE5BLG1HQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsb0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLHlCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSwwQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEseUJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxzQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEscUJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxnREFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsaURBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTs7RUFBQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BO0FBQUE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BOztFQUFBO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7QUFBQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSwwRUFnTkE7RUFoTkEsOEZBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMkJBZ05BO0VBaE5BLHlCQWdOQTtFQWhOQSwwQkFnTkE7RUFoTkEsK0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMkJBZ05BO0VBaE5BLHlCQWdOQTtFQWhOQSwwQkFnTkE7RUFoTkEsK0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMkJBZ05BO0VBaE5BLHlCQWdOQTtFQWhOQSwwQkFnTkE7RUFoTkEsK0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMEJBZ05BO0VBaE5BLHdCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMEJBZ05BO0VBaE5BLHdCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMEJBZ05BO0VBaE5BLHdCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMEJBZ05BO0VBaE5BLHdCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSwwQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQSxzQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMEJBZ05BO0VBaE5BLHFCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxtQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BOztFQUFBO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUEsdUJBZ05BO0lBaE5BLHNEQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSx1QkFnTkE7SUFoTkEsb0RBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBLHVCQWdOQTtJQWhOQSwyREFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUEsaUJBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BO0FBQUE7O0FBaE5BOztFQUFBO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUEsc0JBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBLGtCQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxpQkFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUEsa0JBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBLG1CQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxrQkFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUEsZUFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUEsa0JBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBLGlCQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxlQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQTtFQWdOQTs7RUFoTkE7SUFBQTtFQWdOQTs7RUFoTkE7SUFBQSxlQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxtQkFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUEsbUJBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBLGtCQWdOQTtJQWhOQTtFQWdOQTtBQUFBOztBQWhOQTs7RUFBQTtJQUFBLGlCQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxlQWdOQTtJQWhOQTtFQWdOQTtBQUFBOztBQWhOQTtFQUFBLGtCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxrREFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsaURBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLGlEQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxrREFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsa0RBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxnQkFnTkE7RUFoTkEsb0JBZ05BO0VBaE5BLDRCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxzQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsV0FnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsa0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG1CQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEscUJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLGtCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsb0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxXQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQSIsInNvdXJjZXNDb250ZW50IjpbIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xuXG4vKiAtLS0tLS0tLS0tIEZvbnRzIC0tLS0tLS0tLS0gKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VbmJvdW5kZWQ6d2dodEA0MDA7NzAwOzkwMCZmYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi8qIC0tLS0tLS0tLS0gVG9rZW5zIC0tLS0tLS0tLS0gKi9cbjpyb290IHtcbiAgLS1iZzogIzA1MDUwNTtcbiAgLS1zdXJmYWNlOiAjMTIxMjEyO1xuICAtLXN1cmZhY2UtMjogIzFlMWUxZTtcbiAgLS1hY2NlbnQ6ICNkZmZmMDA7XG4gIC0tdGV4dDogI2ZmZmZmZjtcbiAgLS10ZXh0LWRpbTogI2ExYTFhYTtcblxuICAvKiBzaGFkY24tY29tcGF0aWJsZSBkYXJrIHRva2VucyAoZ2xvYmFsKSAqL1xuICAtLWJhY2tncm91bmQ6IDAgMCUgMiU7XG4gIC0tZm9yZWdyb3VuZDogMCAwJSAxMDAlO1xuICAtLWNhcmQ6IDAgMCUgNyU7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiAwIDAlIDEwMCU7XG4gIC0tcG9wb3ZlcjogMCAwJSA3JTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IDAgMCUgMTAwJTtcbiAgLS1wcmltYXJ5OiA3MSAxMDAlIDUwJTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IDAgMCUgMCU7XG4gIC0tc2Vjb25kYXJ5OiAwIDAlIDEyJTtcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogMCAwJSAxMDAlO1xuICAtLW11dGVkOiAwIDAlIDEyJTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiAwIDAlIDY0JTtcbiAgLS1hY2NlbnQ6IDcxIDEwMCUgNTAlO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiAwIDAlIDAlO1xuICAtLWRlc3RydWN0aXZlOiAwIDYyLjglIDMwLjYlO1xuICAtLWRlc3RydWN0aXZlLWZvcmVncm91bmQ6IDAgMCUgOTglO1xuICAtLWJvcmRlcjogMCAwJSAxNiU7XG4gIC0taW5wdXQ6IDAgMCUgMTYlO1xuICAtLXJpbmc6IDcxIDEwMCUgNTAlO1xuICAtLXJhZGl1czogMC4yNXJlbTtcblxuICAvKiBSZS1hc3NlcnQgYnJhbmQgYWNjZW50IEFGVEVSIHNoYWRjbiB0b2tlbnMgc28gdmFyKC0tYWNjZW50KSBpcyBhIHZhbGlkIGNvbG9yICovXG4gIC0tYWNjZW50OiAjZGZmZjAwO1xufVxuXG4qIHtcbiAgYm9yZGVyLWNvbG9yOiBoc2wodmFyKC0tYm9yZGVyKSk7XG59XG5cbmh0bWwsXG5ib2R5LFxuI3Jvb3Qge1xuICBiYWNrZ3JvdW5kOiAjMDUwNTA1O1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIiwgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2RmZmYwMDtcbiAgY29sb3I6ICMwNTA1MDU7XG59XG5cbi5mb250LWRpc3BsYXkge1xuICBmb250LWZhbWlseTogXCJVbmJvdW5kZWRcIiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cbi5mb250LW1vbm8ge1xuICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiLCB1aS1tb25vc3BhY2UsIG1vbm9zcGFjZTtcbn1cblxuLmJnLWdyaWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQ4cHggNDhweDtcbn1cbi5iZy1ncmlkLWZhZGUge1xuICAtd2Via2l0LW1hc2staW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcbiAgICBlbGxpcHNlIDgwJSA2MCUgYXQgNTAlIDMwJSxcbiAgICAjMDAwIDQwJSxcbiAgICB0cmFuc3BhcmVudCA4MCVcbiAgKTtcbiAgbWFzay1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxuICAgIGVsbGlwc2UgODAlIDYwJSBhdCA1MCUgMzAlLFxuICAgICMwMDAgNDAlLFxuICAgIHRyYW5zcGFyZW50IDgwJVxuICApO1xufVxuXG4udGVybWluYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGVybWluYWwtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2dyb3VuZDogIzBkMGQwZDtcbn1cbi50ZXJtaW5hbC1kb3Qge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogIzJhMmEyYTtcbn1cblxuLmNvcm5lcnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29ybmVyczo6YmVmb3JlLFxuLmNvcm5lcnM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGZmZjAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jb3JuZXJzOjpiZWZvcmUge1xuICB0b3A6IC0xcHg7XG4gIGxlZnQ6IC0xcHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5jb3JuZXJzOjphZnRlciB7XG4gIGJvdHRvbTogLTFweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOlxuICAgIHRyYW5zZm9ybSAwLjE1cyBlYXNlLFxuICAgIGJveC1zaGFkb3cgMC4xNXMgZWFzZSxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsXG4gICAgY29sb3IgMC4xNXMgZWFzZSxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbn1cbi5idG4tYmxvY2s6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAwIDAgI2RmZmYwMDtcbn1cbi5idG4tYmxvY2s6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgI2RmZmYwMDtcbn1cblxuLm1hcnF1ZWUtbWFzayB7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgIHRyYW5zcGFyZW50LFxuICAgICMwMDAgMTAlLFxuICAgICMwMDAgOTAlLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICA5MGRlZyxcbiAgICB0cmFuc3BhcmVudCxcbiAgICAjMDAwIDEwJSxcbiAgICAjMDAwIDkwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzBhMGEwYTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMWYxZjFmO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYTJhMmE7XG59XG5cbi5saW5rLXVuZGVybGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saW5rLXVuZGVybGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAxMDAlO1xuICBib3R0b206IC0zcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZTtcbn1cbi5saW5rLXVuZGVybGluZTpob3Zlcjo6YWZ0ZXIge1xuICByaWdodDogMDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */\r
    </style>\r
    <style type="text/css">\r
      [data-sonner-toaster][dir="ltr"],\r
      html[dir="ltr"] {\r
        --toast-icon-margin-start: -3px;\r
        --toast-icon-margin-end: 4px;\r
        --toast-svg-margin-start: -1px;\r
        --toast-svg-margin-end: 0px;\r
        --toast-button-margin-start: auto;\r
        --toast-button-margin-end: 0;\r
        --toast-close-button-start: 0;\r
        --toast-close-button-end: unset;\r
        --toast-close-button-transform: translate(-35%, -35%);\r
      }\r
      [data-sonner-toaster][dir="rtl"],\r
      html[dir="rtl"] {\r
        --toast-icon-margin-start: 4px;\r
        --toast-icon-margin-end: -3px;\r
        --toast-svg-margin-start: 0px;\r
        --toast-svg-margin-end: -1px;\r
        --toast-button-margin-start: 0;\r
        --toast-button-margin-end: auto;\r
        --toast-close-button-start: unset;\r
        --toast-close-button-end: 0;\r
        --toast-close-button-transform: translate(35%, -35%);\r
      }\r
      [data-sonner-toaster] {\r
        position: fixed;\r
        width: var(--width);\r
        font-family:\r
          ui-sans-serif,\r
          system-ui,\r
          -apple-system,\r
          BlinkMacSystemFont,\r
          Segoe UI,\r
          Roboto,\r
          Helvetica Neue,\r
          Arial,\r
          Noto Sans,\r
          sans-serif,\r
          Apple Color Emoji,\r
          Segoe UI Emoji,\r
          Segoe UI Symbol,\r
          Noto Color Emoji;\r
        --gray1: hsl(0, 0%, 99%);\r
        --gray2: hsl(0, 0%, 97.3%);\r
        --gray3: hsl(0, 0%, 95.1%);\r
        --gray4: hsl(0, 0%, 93%);\r
        --gray5: hsl(0, 0%, 90.9%);\r
        --gray6: hsl(0, 0%, 88.7%);\r
        --gray7: hsl(0, 0%, 85.8%);\r
        --gray8: hsl(0, 0%, 78%);\r
        --gray9: hsl(0, 0%, 56.1%);\r
        --gray10: hsl(0, 0%, 52.3%);\r
        --gray11: hsl(0, 0%, 43.5%);\r
        --gray12: hsl(0, 0%, 9%);\r
        --border-radius: 8px;\r
        box-sizing: border-box;\r
        padding: 0;\r
        margin: 0;\r
        list-style: none;\r
        outline: 0;\r
        z-index: 999999999;\r
        transition: transform 0.4s ease;\r
      }\r
      [data-sonner-toaster][data-lifted="true"] {\r
        transform: translateY(-8px);\r
      }\r
      @media (hover: none) and (pointer: coarse) {\r
        [data-sonner-toaster][data-lifted="true"] {\r
          transform: none;\r
        }\r
      }\r
      [data-sonner-toaster][data-x-position="right"] {\r
        right: var(--offset-right);\r
      }\r
      [data-sonner-toaster][data-x-position="left"] {\r
        left: var(--offset-left);\r
      }\r
      [data-sonner-toaster][data-x-position="center"] {\r
        left: 50%;\r
        transform: translateX(-50%);\r
      }\r
      [data-sonner-toaster][data-y-position="top"] {\r
        top: var(--offset-top);\r
      }\r
      [data-sonner-toaster][data-y-position="bottom"] {\r
        bottom: var(--offset-bottom);\r
      }\r
      [data-sonner-toast] {\r
        --y: translateY(100%);\r
        --lift-amount: calc(var(--lift) * var(--gap));\r
        z-index: var(--z-index);\r
        position: absolute;\r
        opacity: 0;\r
        transform: var(--y);\r
        touch-action: none;\r
        transition:\r
          transform 0.4s,\r
          opacity 0.4s,\r
          height 0.4s,\r
          box-shadow 0.2s;\r
        box-sizing: border-box;\r
        outline: 0;\r
        overflow-wrap: anywhere;\r
      }\r
      [data-sonner-toast][data-styled="true"] {\r
        padding: 16px;\r
        background: var(--normal-bg);\r
        border: 1px solid var(--normal-border);\r
        color: var(--normal-text);\r
        border-radius: var(--border-radius);\r
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r
        width: var(--width);\r
        font-size: 13px;\r
        display: flex;\r
        align-items: center;\r
        gap: 6px;\r
      }\r
      [data-sonner-toast]:focus-visible {\r
        box-shadow:\r
          0 4px 12px rgba(0, 0, 0, 0.1),\r
          0 0 0 2px rgba(0, 0, 0, 0.2);\r
      }\r
      [data-sonner-toast][data-y-position="top"] {\r
        top: 0;\r
        --y: translateY(-100%);\r
        --lift: 1;\r
        --lift-amount: calc(1 * var(--gap));\r
      }\r
      [data-sonner-toast][data-y-position="bottom"] {\r
        bottom: 0;\r
        --y: translateY(100%);\r
        --lift: -1;\r
        --lift-amount: calc(var(--lift) * var(--gap));\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-description] {\r
        font-weight: 400;\r
        line-height: 1.4;\r
        color: #3f3f3f;\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-styled="true"]\r
        [data-description] {\r
        color: inherit;\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"] [data-description] {\r
        color: #e8e8e8;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-title] {\r
        font-weight: 500;\r
        line-height: 1.5;\r
        color: inherit;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-icon] {\r
        display: flex;\r
        height: 16px;\r
        width: 16px;\r
        position: relative;\r
        justify-content: flex-start;\r
        align-items: center;\r
        flex-shrink: 0;\r
        margin-left: var(--toast-icon-margin-start);\r
        margin-right: var(--toast-icon-margin-end);\r
      }\r
      [data-sonner-toast][data-promise="true"] [data-icon] > svg {\r
        opacity: 0;\r
        transform: scale(0.8);\r
        transform-origin: center;\r
        animation: sonner-fade-in 0.3s ease forwards;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-icon] > * {\r
        flex-shrink: 0;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-icon] svg {\r
        margin-left: var(--toast-svg-margin-start);\r
        margin-right: var(--toast-svg-margin-end);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-content] {\r
        display: flex;\r
        flex-direction: column;\r
        gap: 2px;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-button] {\r
        border-radius: 4px;\r
        padding-left: 8px;\r
        padding-right: 8px;\r
        height: 24px;\r
        font-size: 12px;\r
        color: var(--normal-bg);\r
        background: var(--normal-text);\r
        margin-left: var(--toast-button-margin-start);\r
        margin-right: var(--toast-button-margin-end);\r
        border: none;\r
        font-weight: 500;\r
        cursor: pointer;\r
        outline: 0;\r
        display: flex;\r
        align-items: center;\r
        flex-shrink: 0;\r
        transition:\r
          opacity 0.4s,\r
          box-shadow 0.2s;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-button]:focus-visible {\r
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-button]:first-of-type {\r
        margin-left: var(--toast-button-margin-start);\r
        margin-right: var(--toast-button-margin-end);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-cancel] {\r
        color: var(--normal-text);\r
        background: rgba(0, 0, 0, 0.08);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"]\r
        [data-sonner-toast][data-styled="true"]\r
        [data-cancel] {\r
        background: rgba(255, 255, 255, 0.3);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-close-button] {\r
        position: absolute;\r
        left: var(--toast-close-button-start);\r
        right: var(--toast-close-button-end);\r
        top: 0;\r
        height: 20px;\r
        width: 20px;\r
        display: flex;\r
        justify-content: center;\r
        align-items: center;\r
        padding: 0;\r
        color: var(--gray12);\r
        background: var(--normal-bg);\r
        border: 1px solid var(--gray4);\r
        transform: var(--toast-close-button-transform);\r
        border-radius: 50%;\r
        cursor: pointer;\r
        z-index: 1;\r
        transition:\r
          opacity 0.1s,\r
          background 0.2s,\r
          border-color 0.2s;\r
      }\r
      [data-sonner-toast][data-styled="true"]\r
        [data-close-button]:focus-visible {\r
        box-shadow:\r
          0 4px 12px rgba(0, 0, 0, 0.1),\r
          0 0 0 2px rgba(0, 0, 0, 0.2);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-disabled="true"] {\r
        cursor: not-allowed;\r
      }\r
      [data-sonner-toast][data-styled="true"]:hover [data-close-button]:hover {\r
        background: var(--gray2);\r
        border-color: var(--gray5);\r
      }\r
      [data-sonner-toast][data-swiping="true"]::before {\r
        content: "";\r
        position: absolute;\r
        left: -100%;\r
        right: -100%;\r
        height: 100%;\r
        z-index: -1;\r
      }\r
      [data-sonner-toast][data-y-position="top"][data-swiping="true"]::before {\r
        bottom: 50%;\r
        transform: scaleY(3) translateY(50%);\r
      }\r
      [data-sonner-toast][data-y-position="bottom"][data-swiping="true"]::before {\r
        top: 50%;\r
        transform: scaleY(3) translateY(-50%);\r
      }\r
      [data-sonner-toast][data-swiping="false"][data-removed="true"]::before {\r
        content: "";\r
        position: absolute;\r
        inset: 0;\r
        transform: scaleY(2);\r
      }\r
      [data-sonner-toast][data-expanded="true"]::after {\r
        content: "";\r
        position: absolute;\r
        left: 0;\r
        height: calc(var(--gap) + 1px);\r
        bottom: 100%;\r
        width: 100%;\r
      }\r
      [data-sonner-toast][data-mounted="true"] {\r
        --y: translateY(0);\r
        opacity: 1;\r
      }\r
      [data-sonner-toast][data-expanded="false"][data-front="false"] {\r
        --scale: var(--toasts-before) * 0.05 + 1;\r
        --y: translateY(calc(var(--lift-amount) * var(--toasts-before)))\r
          scale(calc(-1 * var(--scale)));\r
        height: var(--front-toast-height);\r
      }\r
      [data-sonner-toast] > * {\r
        transition: opacity 0.4s;\r
      }\r
      [data-sonner-toast][data-x-position="right"] {\r
        right: 0;\r
      }\r
      [data-sonner-toast][data-x-position="left"] {\r
        left: 0;\r
      }\r
      [data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"]\r
        > * {\r
        opacity: 0;\r
      }\r
      [data-sonner-toast][data-visible="false"] {\r
        opacity: 0;\r
        pointer-events: none;\r
      }\r
      [data-sonner-toast][data-mounted="true"][data-expanded="true"] {\r
        --y: translateY(calc(var(--lift) * var(--offset)));\r
        height: var(--initial-height);\r
      }\r
      [data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"] {\r
        --y: translateY(calc(var(--lift) * -100%));\r
        opacity: 0;\r
      }\r
      [data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"] {\r
        --y: translateY(\r
          calc(var(--lift) * var(--offset) + var(--lift) * -100%)\r
        );\r
        opacity: 0;\r
      }\r
      [data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"] {\r
        --y: translateY(40%);\r
        opacity: 0;\r
        transition:\r
          transform 0.5s,\r
          opacity 0.2s;\r
      }\r
      [data-sonner-toast][data-removed="true"][data-front="false"]::before {\r
        height: calc(var(--initial-height) + 20%);\r
      }\r
      [data-sonner-toast][data-swiping="true"] {\r
        transform: var(--y) translateY(var(--swipe-amount-y, 0))\r
          translateX(var(--swipe-amount-x, 0));\r
        transition: none;\r
      }\r
      [data-sonner-toast][data-swiped="true"] {\r
        user-select: none;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-y-position="bottom"],\r
      [data-sonner-toast][data-swipe-out="true"][data-y-position="top"] {\r
        animation-duration: 0.2s;\r
        animation-timing-function: ease-out;\r
        animation-fill-mode: forwards;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-swipe-direction="left"] {\r
        animation-name: swipe-out-left;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-swipe-direction="right"] {\r
        animation-name: swipe-out-right;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-swipe-direction="up"] {\r
        animation-name: swipe-out-up;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-swipe-direction="down"] {\r
        animation-name: swipe-out-down;\r
      }\r
      @keyframes swipe-out-left {\r
        from {\r
          transform: var(--y) translateX(var(--swipe-amount-x));\r
          opacity: 1;\r
        }\r
        to {\r
          transform: var(--y) translateX(calc(var(--swipe-amount-x) - 100%));\r
          opacity: 0;\r
        }\r
      }\r
      @keyframes swipe-out-right {\r
        from {\r
          transform: var(--y) translateX(var(--swipe-amount-x));\r
          opacity: 1;\r
        }\r
        to {\r
          transform: var(--y) translateX(calc(var(--swipe-amount-x) + 100%));\r
          opacity: 0;\r
        }\r
      }\r
      @keyframes swipe-out-up {\r
        from {\r
          transform: var(--y) translateY(var(--swipe-amount-y));\r
          opacity: 1;\r
        }\r
        to {\r
          transform: var(--y) translateY(calc(var(--swipe-amount-y) - 100%));\r
          opacity: 0;\r
        }\r
      }\r
      @keyframes swipe-out-down {\r
        from {\r
          transform: var(--y) translateY(var(--swipe-amount-y));\r
          opacity: 1;\r
        }\r
        to {\r
          transform: var(--y) translateY(calc(var(--swipe-amount-y) + 100%));\r
          opacity: 0;\r
        }\r
      }\r
      @media (max-width: 600px) {\r
        [data-sonner-toaster] {\r
          position: fixed;\r
          right: var(--mobile-offset-right);\r
          left: var(--mobile-offset-left);\r
          width: 100%;\r
        }\r
        [data-sonner-toaster][dir="rtl"] {\r
          left: calc(var(--mobile-offset-left) * -1);\r
        }\r
        [data-sonner-toaster] [data-sonner-toast] {\r
          left: 0;\r
          right: 0;\r
          width: calc(100% - var(--mobile-offset-left) * 2);\r
        }\r
        [data-sonner-toaster][data-x-position="left"] {\r
          left: var(--mobile-offset-left);\r
        }\r
        [data-sonner-toaster][data-y-position="bottom"] {\r
          bottom: var(--mobile-offset-bottom);\r
        }\r
        [data-sonner-toaster][data-y-position="top"] {\r
          top: var(--mobile-offset-top);\r
        }\r
        [data-sonner-toaster][data-x-position="center"] {\r
          left: var(--mobile-offset-left);\r
          right: var(--mobile-offset-right);\r
          transform: none;\r
        }\r
      }\r
      [data-sonner-toaster][data-sonner-theme="light"] {\r
        --normal-bg: #fff;\r
        --normal-border: var(--gray4);\r
        --normal-text: var(--gray12);\r
        --success-bg: hsl(143, 85%, 96%);\r
        --success-border: hsl(145, 92%, 87%);\r
        --success-text: hsl(140, 100%, 27%);\r
        --info-bg: hsl(208, 100%, 97%);\r
        --info-border: hsl(221, 91%, 93%);\r
        --info-text: hsl(210, 92%, 45%);\r
        --warning-bg: hsl(49, 100%, 97%);\r
        --warning-border: hsl(49, 91%, 84%);\r
        --warning-text: hsl(31, 92%, 45%);\r
        --error-bg: hsl(359, 100%, 97%);\r
        --error-border: hsl(359, 100%, 94%);\r
        --error-text: hsl(360, 100%, 45%);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="light"]\r
        [data-sonner-toast][data-invert="true"] {\r
        --normal-bg: #000;\r
        --normal-border: hsl(0, 0%, 20%);\r
        --normal-text: var(--gray1);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"]\r
        [data-sonner-toast][data-invert="true"] {\r
        --normal-bg: #fff;\r
        --normal-border: var(--gray3);\r
        --normal-text: var(--gray12);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"] {\r
        --normal-bg: #000;\r
        --normal-bg-hover: hsl(0, 0%, 12%);\r
        --normal-border: hsl(0, 0%, 20%);\r
        --normal-border-hover: hsl(0, 0%, 25%);\r
        --normal-text: var(--gray1);\r
        --success-bg: hsl(150, 100%, 6%);\r
        --success-border: hsl(147, 100%, 12%);\r
        --success-text: hsl(150, 86%, 65%);\r
        --info-bg: hsl(215, 100%, 6%);\r
        --info-border: hsl(223, 43%, 17%);\r
        --info-text: hsl(216, 87%, 65%);\r
        --warning-bg: hsl(64, 100%, 6%);\r
        --warning-border: hsl(60, 100%, 9%);\r
        --warning-text: hsl(46, 87%, 65%);\r
        --error-bg: hsl(358, 76%, 10%);\r
        --error-border: hsl(357, 89%, 16%);\r
        --error-text: hsl(358, 100%, 81%);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"]\r
        [data-sonner-toast]\r
        [data-close-button] {\r
        background: var(--normal-bg);\r
        border-color: var(--normal-border);\r
        color: var(--normal-text);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"]\r
        [data-sonner-toast]\r
        [data-close-button]:hover {\r
        background: var(--normal-bg-hover);\r
        border-color: var(--normal-border-hover);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="success"] {\r
        background: var(--success-bg);\r
        border-color: var(--success-border);\r
        color: var(--success-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="success"]\r
        [data-close-button] {\r
        background: var(--success-bg);\r
        border-color: var(--success-border);\r
        color: var(--success-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="info"] {\r
        background: var(--info-bg);\r
        border-color: var(--info-border);\r
        color: var(--info-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="info"]\r
        [data-close-button] {\r
        background: var(--info-bg);\r
        border-color: var(--info-border);\r
        color: var(--info-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="warning"] {\r
        background: var(--warning-bg);\r
        border-color: var(--warning-border);\r
        color: var(--warning-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="warning"]\r
        [data-close-button] {\r
        background: var(--warning-bg);\r
        border-color: var(--warning-border);\r
        color: var(--warning-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="error"] {\r
        background: var(--error-bg);\r
        border-color: var(--error-border);\r
        color: var(--error-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="error"]\r
        [data-close-button] {\r
        background: var(--error-bg);\r
        border-color: var(--error-border);\r
        color: var(--error-text);\r
      }\r
      .sonner-loading-wrapper {\r
        --size: 16px;\r
        height: var(--size);\r
        width: var(--size);\r
        position: absolute;\r
        inset: 0;\r
        z-index: 10;\r
      }\r
      .sonner-loading-wrapper[data-visible="false"] {\r
        transform-origin: center;\r
        animation: sonner-fade-out 0.2s ease forwards;\r
      }\r
      .sonner-spinner {\r
        position: relative;\r
        top: 50%;\r
        left: 50%;\r
        height: var(--size);\r
        width: var(--size);\r
      }\r
      .sonner-loading-bar {\r
        animation: sonner-spin 1.2s linear infinite;\r
        background: var(--gray11);\r
        border-radius: 6px;\r
        height: 8%;\r
        left: -10%;\r
        position: absolute;\r
        top: -3.9%;\r
        width: 24%;\r
      }\r
      .sonner-loading-bar:first-child {\r
        animation-delay: -1.2s;\r
        transform: rotate(0.0001deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(2) {\r
        animation-delay: -1.1s;\r
        transform: rotate(30deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(3) {\r
        animation-delay: -1s;\r
        transform: rotate(60deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(4) {\r
        animation-delay: -0.9s;\r
        transform: rotate(90deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(5) {\r
        animation-delay: -0.8s;\r
        transform: rotate(120deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(6) {\r
        animation-delay: -0.7s;\r
        transform: rotate(150deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(7) {\r
        animation-delay: -0.6s;\r
        transform: rotate(180deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(8) {\r
        animation-delay: -0.5s;\r
        transform: rotate(210deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(9) {\r
        animation-delay: -0.4s;\r
        transform: rotate(240deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(10) {\r
        animation-delay: -0.3s;\r
        transform: rotate(270deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(11) {\r
        animation-delay: -0.2s;\r
        transform: rotate(300deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(12) {\r
        animation-delay: -0.1s;\r
        transform: rotate(330deg) translate(146%);\r
      }\r
      @keyframes sonner-fade-in {\r
        0% {\r
          opacity: 0;\r
          transform: scale(0.8);\r
        }\r
        100% {\r
          opacity: 1;\r
          transform: scale(1);\r
        }\r
      }\r
      @keyframes sonner-fade-out {\r
        0% {\r
          opacity: 1;\r
          transform: scale(1);\r
        }\r
        100% {\r
          opacity: 0;\r
          transform: scale(0.8);\r
        }\r
      }\r
      @keyframes sonner-spin {\r
        0% {\r
          opacity: 1;\r
        }\r
        100% {\r
          opacity: 0.15;\r
        }\r
      }\r
      @media (prefers-reduced-motion) {\r
        .sonner-loading-bar,\r
        [data-sonner-toast],\r
        [data-sonner-toast] > * {\r
          transition: none !important;\r
          animation: none !important;\r
        }\r
      }\r
      .sonner-loader {\r
        position: absolute;\r
        top: 50%;\r
        left: 50%;\r
        transform: translate(-50%, -50%);\r
        transform-origin: center;\r
        transition:\r
          opacity 0.2s,\r
          transform 0.2s;\r
      }\r
      .sonner-loader[data-visible="false"] {\r
        opacity: 0;\r
        transform: scale(0.8) translate(-50%, -50%);\r
      }\r
    </style>\r
    <style>\r
      .App {\r
        background: #050505;\r
        color: #fff;\r
        min-height: 100vh;\r
      }\r
\r
      /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuQXBwIHtcbiAgYmFja2dyb3VuZDogIzA1MDUwNTtcbiAgY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */\r
    </style>\r
    <style type="text/css">\r
      .rfm-marquee-container {\r
        overflow-x: hidden;\r
        display: flex;\r
        flex-direction: row;\r
        position: relative;\r
        width: var(--width);\r
        transform: var(--transform);\r
      }\r
      .rfm-marquee-container:hover div {\r
        animation-play-state: var(--pause-on-hover);\r
      }\r
      .rfm-marquee-container:active div {\r
        animation-play-state: var(--pause-on-click);\r
      }\r
\r
      .rfm-overlay {\r
        position: absolute;\r
        width: 100%;\r
        height: 100%;\r
      }\r
      .rfm-overlay::before,\r
      .rfm-overlay::after {\r
        background: linear-gradient(\r
          to right,\r
          var(--gradient-color),\r
          rgba(255, 255, 255, 0)\r
        );\r
        content: "";\r
        height: 100%;\r
        position: absolute;\r
        width: var(--gradient-width);\r
        z-index: 2;\r
        pointer-events: none;\r
        touch-action: none;\r
      }\r
      .rfm-overlay::after {\r
        right: 0;\r
        top: 0;\r
        transform: rotateZ(180deg);\r
      }\r
      .rfm-overlay::before {\r
        left: 0;\r
        top: 0;\r
      }\r
\r
      .rfm-marquee {\r
        flex: 0 0 auto;\r
        min-width: var(--min-width);\r
        z-index: 1;\r
        display: flex;\r
        flex-direction: row;\r
        align-items: center;\r
        animation: scroll var(--duration) linear var(--delay)\r
          var(--iteration-count);\r
        animation-play-state: var(--play);\r
        animation-delay: var(--delay);\r
        animation-direction: var(--direction);\r
      }\r
      @keyframes scroll {\r
        0% {\r
          transform: translateX(0%);\r
        }\r
        100% {\r
          transform: translateX(-100%);\r
        }\r
      }\r
\r
      .rfm-initial-child-container {\r
        flex: 0 0 auto;\r
        display: flex;\r
        min-width: auto;\r
        flex-direction: row;\r
        align-items: center;\r
      }\r
\r
      .rfm-child {\r
        transform: var(--transform);\r
      }\r
    </style>\r
  </head>\r
  <body>\r
    <noscript>You need to enable JavaScript to run this app.</noscript>\r
    <div id="root">\r
      <div\r
        class="App"\r
        x-file-name="App"\r
        x-line-number="9"\r
        x-column="4"\r
        x-component="div"\r
        x-id="App_9_4"\r
        x-dynamic="false"\r
      >\r
        <main\r
          data-testid="home-page"\r
          class="relative min-h-screen overflow-hidden bg-[var(--bg)] text-white"\r
          x-file-name="Home"\r
          x-line-number="13"\r
          x-column="4"\r
          x-component="main"\r
          x-id="Home_13_4"\r
          x-dynamic="false"\r
        >\r
          <header\r
            data-testid="navbar"\r
            class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent"\r
            x-file-name="Navbar"\r
            x-line-number="24"\r
            x-column="4"\r
            x-component="header"\r
            x-id="Navbar_24_4"\r
            x-dynamic="false"\r
            style="opacity: 1; transform: none"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16"\r
              x-file-name="Navbar"\r
              x-line-number="35"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Navbar_35_6"\r
              x-dynamic="false"\r
            >\r
              <button\r
                data-testid="navbar-logo"\r
                class="font-display font-black text-lg tracking-tight uppercase hover:text-[var(--accent)] transition-colors"\r
                x-file-name="Navbar"\r
                x-line-number="36"\r
                x-column="8"\r
                x-component="button"\r
                x-id="Navbar_36_8"\r
                x-dynamic="false"\r
              >\r
                MJ<span\r
                  class="text-[var(--accent)]"\r
                  x-file-name="Navbar"\r
                  x-line-number="41"\r
                  x-column="12"\r
                  x-component="span"\r
                  x-id="Navbar_41_12"\r
                  x-dynamic="false"\r
                  >.</span\r
                >\r
              </button>\r
              <nav\r
                class="hidden md:flex items-center gap-8"\r
                x-file-name="Navbar"\r
                x-line-number="44"\r
                x-column="8"\r
                x-component="nav"\r
                x-id="Navbar_44_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                <button\r
                  data-testid="nav-link-about"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  About</button\r
                ><button\r
                  data-testid="nav-link-skills"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  Skills</button\r
                ><button\r
                  data-testid="nav-link-experience"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  Experience</button\r
                ><button\r
                  data-testid="nav-link-projects"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  Projects</button\r
                ><button\r
                  data-testid="nav-link-contact"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  Contact</button\r
                ><a\r
                  data-testid="navbar-resume-btn"\r
                  href="/Manmohan_Jangra_Resume.pdf"\r
                  download=""\r
                  class="btn-block inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em] hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)]"\r
                  x-file-name="Navbar"\r
                  x-line-number="55"\r
                  x-column="10"\r
                  x-component="a"\r
                  x-id="Navbar_55_10"\r
                  x-dynamic="false"\r
                  ><svg\r
                    xmlns="http://www.w3.org/2000/svg"\r
                    width="24"\r
                    height="24"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                    stroke-linecap="round"\r
                    stroke-linejoin="round"\r
                    class="lucide lucide-download w-3.5 h-3.5"\r
                    aria-hidden="true"\r
                    x-file-name="Navbar"\r
                    x-line-number="61"\r
                    x-column="12"\r
                    x-component="Download"\r
                    x-id="Navbar_61_12"\r
                    x-dynamic="false"\r
                  >\r
                    <path d="M12 15V3"></path>\r
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
                    <path d="m7 10 5 5 5-5"></path></svg\r
                  >Resume</a\r
                >\r
              </nav>\r
              <button\r
                data-testid="navbar-mobile-toggle"\r
                class="md:hidden text-white"\r
                aria-label="Toggle menu"\r
                x-file-name="Navbar"\r
                x-line-number="66"\r
                x-column="8"\r
                x-component="button"\r
                x-id="Navbar_66_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                <svg\r
                  xmlns="http://www.w3.org/2000/svg"\r
                  width="24"\r
                  height="24"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  stroke-linecap="round"\r
                  stroke-linejoin="round"\r
                  class="lucide lucide-menu w-5 h-5"\r
                  aria-hidden="true"\r
                >\r
                  <path d="M4 12h16"></path>\r
                  <path d="M4 18h16"></path>\r
                  <path d="M4 6h16"></path>\r
                </svg>\r
              </button>\r
            </div>\r
          </header>\r
          <section\r
            id="hero"\r
            data-testid="hero-section"\r
            class="relative min-h-screen pt-28 md:pt-32 pb-16 overflow-hidden"\r
            x-file-name="Hero"\r
            x-line-number="7"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Hero_7_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none"\r
              x-file-name="Hero"\r
              x-line-number="13"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Hero_13_6"\r
              x-dynamic="false"\r
            ></div>\r
            <div\r
              class="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl pointer-events-none"\r
              x-file-name="Hero"\r
              x-line-number="14"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Hero_14_6"\r
              x-dynamic="false"\r
            ></div>\r
            <div\r
              class="relative max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Hero"\r
              x-line-number="16"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Hero_16_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500 mb-10"\r
                x-file-name="Hero"\r
                x-line-number="18"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Hero_18_8"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <span\r
                  class="relative flex h-2 w-2"\r
                  x-file-name="Hero"\r
                  x-line-number="24"\r
                  x-column="10"\r
                  x-component="span"\r
                  x-id="Hero_24_10"\r
                  x-dynamic="false"\r
                  ><span\r
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"\r
                    x-file-name="Hero"\r
                    x-line-number="25"\r
                    x-column="12"\r
                    x-component="span"\r
                    x-id="Hero_25_12"\r
                    x-dynamic="false"\r
                  ></span\r
                  ><span\r
                    class="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"\r
                    x-file-name="Hero"\r
                    x-line-number="26"\r
                    x-column="12"\r
                    x-component="span"\r
                    x-id="Hero_26_12"\r
                    x-dynamic="false"\r
                  ></span></span\r
                ><span\r
                  data-testid="hero-availability"\r
                  x-file-name="Hero"\r
                  x-line-number="28"\r
                  x-column="10"\r
                  x-component="span"\r
                  x-id="Hero_28_10"\r
                  x-dynamic="false"\r
                  >Open to senior frontend roles · Remote / Hybrid</span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-6"\r
                x-file-name="Hero"\r
                x-line-number="33"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Hero_33_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="col-span-12 md:col-span-2 flex md:flex-col gap-4 md:gap-8 order-2 md:order-1"\r
                  x-file-name="Hero"\r
                  x-line-number="35"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Hero_35_10"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="36"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Hero_36_12"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="text-zinc-600"\r
                      x-file-name="Hero"\r
                      x-line-number="37"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_37_14"\r
                      x-dynamic="false"\r
                    >\r
                      // role\r
                    </div>\r
                    <div\r
                      class="text-zinc-300 mt-1"\r
                      x-file-name="Hero"\r
                      x-line-number="38"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_38_14"\r
                      x-dynamic="false"\r
                    >\r
                      Frontend\r
                    </div>\r
                    <div\r
                      class="text-zinc-300"\r
                      x-file-name="Hero"\r
                      x-line-number="39"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_39_14"\r
                      x-dynamic="false"\r
                    >\r
                      Engineer\r
                    </div>\r
                  </div>\r
                  <div\r
                    class="text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="41"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Hero_41_12"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="text-zinc-600"\r
                      x-file-name="Hero"\r
                      x-line-number="42"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_42_14"\r
                      x-dynamic="false"\r
                    >\r
                      // based\r
                    </div>\r
                    <div\r
                      class="text-zinc-300 mt-1"\r
                      x-file-name="Hero"\r
                      x-line-number="43"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_43_14"\r
                      x-dynamic="false"\r
                    >\r
                      India · Remote\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-8 order-1 md:order-2"\r
                  x-file-name="Hero"\r
                  x-line-number="48"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Hero_48_10"\r
                  x-dynamic="false"\r
                >\r
                  <h1\r
                    class="font-display font-black uppercase leading-[0.88] tracking-tighter text-[2.5rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl break-words"\r
                    data-testid="hero-name"\r
                    x-file-name="Hero"\r
                    x-line-number="49"\r
                    x-column="12"\r
                    x-component="h1"\r
                    x-id="Hero_49_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    MAN<span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Hero"\r
                      x-line-number="56"\r
                      x-column="17"\r
                      x-component="span"\r
                      x-id="Hero_56_17"\r
                      x-dynamic="false"\r
                      >/</span\r
                    >MOHAN<br\r
                      x-file-name="Hero"\r
                      x-line-number="57"\r
                      x-column="14"\r
                      x-component="br"\r
                      x-id="Hero_57_14"\r
                      x-dynamic="false"\r
                    /><span\r
                      class="text-zinc-500"\r
                      x-file-name="Hero"\r
                      x-line-number="58"\r
                      x-column="14"\r
                      x-component="span"\r
                      x-id="Hero_58_14"\r
                      x-dynamic="false"\r
                      >JANG</span\r
                    >RA<span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Hero"\r
                      x-line-number="58"\r
                      x-column="59"\r
                      x-component="span"\r
                      x-id="Hero_58_59"\r
                      x-dynamic="false"\r
                      >.</span\r
                    >\r
                  </h1>\r
                  <p\r
                    class="mt-8 max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed"\r
                    data-testid="hero-tagline"\r
                    x-file-name="Hero"\r
                    x-line-number="61"\r
                    x-column="12"\r
                    x-component="p"\r
                    x-id="Hero_61_12"\r
                    x-dynamic="true"\r
                    x-source-type="unknown"\r
                    x-source-editable="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Hero"\r
                      x-line-number="68"\r
                      x-column="14"\r
                      x-component="span"\r
                      x-id="Hero_68_14"\r
                      x-dynamic="true"\r
                      x-source-type="unknown"\r
                      x-source-editable="false"\r
                      >&gt;</span\r
                    ><span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="Hero"\r
                      x-line-number="61"\r
                      x-column="12"\r
                      x-component="p"\r
                      x-id="Hero_61_12_expr2"\r
                      x-dynamic="true"\r
                      x-source-type="unknown"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                    >\r
                    </span\r
                    ><span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="Hero"\r
                      x-line-number="61"\r
                      x-column="12"\r
                      x-component="p"\r
                      x-id="Hero_61_12_expr4"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="personal"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="3"\r
                      x-source-path="tagline"\r
                      x-source-editable="true"\r
                      style="display: contents"\r
                      >Building high-performance React systems with an\r
                      AI-assisted, performance-first mindset.</span\r
                    >\r
                    I ship React systems that load fast, scale cleanly, and ship\r
                    sooner than you expected.\r
                  </p>\r
                  <div\r
                    class="mt-10 flex flex-wrap gap-4"\r
                    x-file-name="Hero"\r
                    x-line-number="73"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Hero_73_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <a\r
                      data-testid="hero-resume-btn"\r
                      href="/Manmohan_Jangra_Resume.pdf"\r
                      download=""\r
                      class="btn-block inline-flex items-center gap-2 bg-[var(--accent)] text-black px-5 py-3 text-xs uppercase tracking-[0.2em] font-bold"\r
                      x-file-name="Hero"\r
                      x-line-number="79"\r
                      x-column="14"\r
                      x-component="a"\r
                      x-id="Hero_79_14"\r
                      x-dynamic="false"\r
                      ><svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-download w-4 h-4"\r
                        aria-hidden="true"\r
                        x-file-name="Hero"\r
                        x-line-number="85"\r
                        x-column="16"\r
                        x-component="Download"\r
                        x-id="Hero_85_16"\r
                        x-dynamic="false"\r
                      >\r
                        <path d="M12 15V3"></path>\r
                        <path\r
                          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"\r
                        ></path>\r
                        <path d="m7 10 5 5 5-5"></path></svg\r
                      >Download Resume</a\r
                    ><button\r
                      data-testid="hero-contact-btn"\r
                      class="btn-block inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.2em] hover:border-[var(--accent)]"\r
                      x-file-name="Hero"\r
                      x-line-number="88"\r
                      x-column="14"\r
                      x-component="button"\r
                      x-id="Hero_88_14"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-mail w-4 h-4"\r
                        aria-hidden="true"\r
                        x-file-name="Hero"\r
                        x-line-number="97"\r
                        x-column="16"\r
                        x-component="Mail"\r
                        x-id="Hero_97_16"\r
                        x-dynamic="false"\r
                      >\r
                        <path\r
                          d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"\r
                        ></path>\r
                        <rect\r
                          x="2"\r
                          y="4"\r
                          width="20"\r
                          height="16"\r
                          rx="2"\r
                        ></rect></svg\r
                      >Get in touch\r
                    </button>\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-2 order-3"\r
                  x-file-name="Hero"\r
                  x-line-number="104"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Hero_104_10"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="terminal corners w-full"\r
                    x-file-name="Hero"\r
                    x-line-number="105"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Hero_105_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="terminal-bar"\r
                      x-file-name="Hero"\r
                      x-line-number="111"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_111_14"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="terminal-dot"\r
                        x-file-name="Hero"\r
                        x-line-number="112"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Hero_112_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="terminal-dot"\r
                        x-file-name="Hero"\r
                        x-line-number="113"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Hero_113_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="terminal-dot"\r
                        x-file-name="Hero"\r
                        x-line-number="114"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Hero_114_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="ml-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500"\r
                        x-file-name="Hero"\r
                        x-line-number="115"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Hero_115_16"\r
                        x-dynamic="false"\r
                        >manmohan.sh</span\r
                      >\r
                    </div>\r
                    <pre\r
                      class="p-4 text-[11px] leading-relaxed font-mono text-zinc-400"\r
                      x-file-name="Hero"\r
                      x-line-number="119"\r
                      x-column="14"\r
                      x-component="pre"\r
                      x-id="Hero_119_14"\r
                      x-dynamic="true"\r
                      x-source-type="unknown"\r
                      x-source-editable="false"\r
                    ><span class="text-[var(--accent)]" x-file-name="Hero" x-line-number="120" x-column="16" x-component="span" x-id="Hero_120_16" x-dynamic="false">$</span> whoami<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr3" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span>manmohan<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr5" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span><span class="text-[var(--accent)]" x-file-name="Hero" x-line-number="122" x-column="22" x-component="span" x-id="Hero_122_22" x-dynamic="false">$</span> ls skills/<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr8" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span>react redux<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr10" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span>ts node ai<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr12" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span><span class="text-[var(--accent)]" x-file-name="Hero" x-line-number="125" x-column="22" x-component="span" x-id="Hero_125_22" x-dynamic="false">$</span> uptime<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr15" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span><span class="text-white" x-file-name="Hero" x-line-number="126" x-column="22" x-component="span" x-id="Hero_126_22" x-dynamic="false">5y 200d</span><span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr18" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span><span class="text-[var(--accent)]" x-file-name="Hero" x-line-number="127" x-column="22" x-component="span" x-id="Hero_127_22" x-dynamic="false">$</span> _</pre>\r
                  </div>\r
                </div>\r
              </div>\r
              <div\r
                class="mt-20 grid grid-cols-2 md:grid-cols-4 border border-white/10"\r
                x-file-name="Hero"\r
                x-line-number="134"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Hero_134_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  data-testid="hero-stat-0"\r
                  class="p-6 md:p-8 md:border-r border-white/10 border-b md:border-b-0 border-white/10 border-r border-white/10 md:border-r"\r
                  x-file-name="Hero"\r
                  x-line-number="141"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Hero_141_12"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="font-display font-black text-3xl md:text-4xl text-white"\r
                    x-file-name="Hero"\r
                    x-line-number="150"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_150_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="value"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    5+\r
                  </div>\r
                  <div\r
                    class="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="153"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_153_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="label"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    yrs shipping React\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="hero-stat-1"\r
                  class="p-6 md:p-8 md:border-r border-white/10 border-b md:border-b-0 border-white/10"\r
                  x-file-name="Hero"\r
                  x-line-number="141"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Hero_141_12"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="font-display font-black text-3xl md:text-4xl text-white"\r
                    x-file-name="Hero"\r
                    x-line-number="150"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_150_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="value"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    30%\r
                  </div>\r
                  <div\r
                    class="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="153"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_153_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="label"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    load-time gain\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="hero-stat-2"\r
                  class="p-6 md:p-8 md:border-r border-white/10 border-r border-white/10 md:border-r"\r
                  x-file-name="Hero"\r
                  x-line-number="141"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Hero_141_12"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="font-display font-black text-3xl md:text-4xl text-white"\r
                    x-file-name="Hero"\r
                    x-line-number="150"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_150_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="value"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    &lt;200ms\r
                  </div>\r
                  <div\r
                    class="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="153"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_153_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="label"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    update latency\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="hero-stat-3"\r
                  class="p-6 md:p-8"\r
                  x-file-name="Hero"\r
                  x-line-number="141"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Hero_141_12"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="font-display font-black text-3xl md:text-4xl text-white"\r
                    x-file-name="Hero"\r
                    x-line-number="150"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_150_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="value"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    8+\r
                  </div>\r
                  <div\r
                    class="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="153"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_153_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="label"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    devs mentored\r
                  </div>\r
                </div>\r
              </div>\r
              <div\r
                class="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                x-file-name="Hero"\r
                x-line-number="160"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Hero_160_8"\r
                x-dynamic="false"\r
              >\r
                <svg\r
                  xmlns="http://www.w3.org/2000/svg"\r
                  width="24"\r
                  height="24"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  stroke-linecap="round"\r
                  stroke-linejoin="round"\r
                  class="lucide lucide-arrow-down-right w-4 h-4 text-[var(--accent)]"\r
                  aria-hidden="true"\r
                  x-file-name="Hero"\r
                  x-line-number="161"\r
                  x-column="10"\r
                  x-component="ArrowDownRight"\r
                  x-id="Hero_161_10"\r
                  x-dynamic="false"\r
                >\r
                  <path d="m7 7 10 10"></path>\r
                  <path d="M17 7v10H7"></path></svg\r
                >Scroll to explore\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="about"\r
            data-testid="about-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="About"\r
            x-line-number="10"\r
            x-column="4"\r
            x-component="section"\r
            x-id="About_10_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="About"\r
              x-line-number="15"\r
              x-column="6"\r
              x-component="div"\r
              x-id="About_15_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >01</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    ABOUT\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >01</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-8 mt-12"\r
                x-file-name="About"\r
                x-line-number="18"\r
                x-column="8"\r
                x-component="div"\r
                x-id="About_18_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="col-span-12 md:col-span-5"\r
                  x-file-name="About"\r
                  x-line-number="20"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="About_20_10"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="relative corners"\r
                    x-file-name="About"\r
                    x-line-number="27"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="About_27_12"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="aspect-[4/5] overflow-hidden border border-white/10 bg-[var(--surface)] relative"\r
                      x-file-name="About"\r
                      x-line-number="28"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="About_28_14"\r
                      x-dynamic="false"\r
                    >\r
                      <img\r
                        alt="Stylized portrait placeholder"\r
                        class="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"\r
                        x-file-name="About"\r
                        x-line-number="29"\r
                        x-column="16"\r
                        x-component="img"\r
                        x-id="About_29_16"\r
                        x-dynamic="false"\r
                        src=""\r
                      />\r
                      <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"\r
                        x-file-name="About"\r
                        x-line-number="34"\r
                        x-column="16"\r
                        x-component="div"\r
                        x-id="About_34_16"\r
                        x-dynamic="false"\r
                      ></div>\r
                      <div\r
                        class="absolute bottom-4 left-4 right-4 flex items-end justify-between"\r
                        x-file-name="About"\r
                        x-line-number="35"\r
                        x-column="16"\r
                        x-component="div"\r
                        x-id="About_35_16"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          x-file-name="About"\r
                          x-line-number="36"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="About_36_18"\r
                          x-dynamic="false"\r
                        >\r
                          <div\r
                            class="text-[10px] uppercase tracking-[0.25em] text-zinc-400"\r
                            x-file-name="About"\r
                            x-line-number="37"\r
                            x-column="20"\r
                            x-component="div"\r
                            x-id="About_37_20"\r
                            x-dynamic="false"\r
                          >\r
                            // operator\r
                          </div>\r
                          <div\r
                            class="font-display font-bold text-lg mt-1"\r
                            x-file-name="About"\r
                            x-line-number="40"\r
                            x-column="20"\r
                            x-component="div"\r
                            x-id="About_40_20"\r
                            x-dynamic="false"\r
                          >\r
                            manmohan_j\r
                          </div>\r
                        </div>\r
                        <div\r
                          class="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]"\r
                          x-file-name="About"\r
                          x-line-number="44"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="About_44_18"\r
                          x-dynamic="false"\r
                        >\r
                          v5.0\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-7 md:pl-6"\r
                  x-file-name="About"\r
                  x-line-number="53"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="About_53_10"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <h3\r
                    class="font-display font-black text-3xl md:text-5xl uppercase leading-[0.95] tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="60"\r
                    x-column="12"\r
                    x-component="h3"\r
                    x-id="About_60_12"\r
                    x-dynamic="false"\r
                  >\r
                    I make the web feel<br\r
                      x-file-name="About"\r
                      x-line-number="62"\r
                      x-column="14"\r
                      x-component="br"\r
                      x-id="About_62_14"\r
                      x-dynamic="false"\r
                    /><span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="About"\r
                      x-line-number="63"\r
                      x-column="14"\r
                      x-component="span"\r
                      x-id="About_63_14"\r
                      x-dynamic="false"\r
                      >fast</span\r
                    >, on purpose.\r
                  </h3>\r
                  <div\r
                    class="mt-8 space-y-5 text-zinc-400 text-base md:text-lg leading-relaxed"\r
                    x-file-name="About"\r
                    x-line-number="66"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="About_66_12"\r
                    x-dynamic="true"\r
                    x-source-type="computed"\r
                    x-source-editable="false"\r
                  >\r
                    <p\r
                      data-testid="about-paragraph-0"\r
                      x-file-name="About"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="p"\r
                      x-id="About_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="about"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="23"\r
                      x-source-editable="true"\r
                      x-array-var="about"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="23"\r
                      x-array-item-param="p"\r
                    >\r
                      I’m a frontend engineer who treats performance like a\r
                      feature. Five years in, I build React systems that load\r
                      fast, scale cleanly, and degrade gracefully —\r
                      micro-frontends, real-time dashboards, and component\r
                      libraries that other teams actually enjoy using.\r
                    </p>\r
                    <p\r
                      data-testid="about-paragraph-1"\r
                      x-file-name="About"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="p"\r
                      x-id="About_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="about"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="23"\r
                      x-source-editable="true"\r
                      x-array-var="about"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="23"\r
                      x-array-item-param="p"\r
                    >\r
                      Lately I’ve been wiring AI into the developer loop: RAG\r
                      pipelines, in-IDE copilots, and LangChain-backed\r
                      automations that quietly remove the boring 40%. I lead an\r
                      8-engineer pod, run requirements analysis for presales,\r
                      and still write the code I commit.\r
                    </p>\r
                  </div>\r
                  <ul\r
                    class="mt-8 space-y-3"\r
                    x-file-name="About"\r
                    x-line-number="74"\r
                    x-column="12"\r
                    x-component="ul"\r
                    x-id="About_74_12"\r
                    x-dynamic="true"\r
                    x-source-type="computed"\r
                    x-source-editable="false"\r
                  >\r
                    <li\r
                      data-testid="about-highlight-0"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="About"\r
                      x-line-number="76"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="About_76_16"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-check w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0"\r
                        aria-hidden="true"\r
                      >\r
                        <path d="M20 6 9 17l-5-5"></path></svg\r
                      ><span\r
                        x-file-name="About"\r
                        x-line-number="82"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="About_82_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="about"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="23"\r
                        x-source-editable="true"\r
                        x-array-var="about"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="23"\r
                        x-array-item-param="h"\r
                        >Cut Core Web Vitals (LCP) by 30% across two B2B\r
                        platforms</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="about-highlight-1"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="About"\r
                      x-line-number="76"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="About_76_16"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-check w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0"\r
                        aria-hidden="true"\r
                      >\r
                        <path d="M20 6 9 17l-5-5"></path></svg\r
                      ><span\r
                        x-file-name="About"\r
                        x-line-number="82"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="About_82_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="about"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="23"\r
                        x-source-editable="true"\r
                        x-array-var="about"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="23"\r
                        x-array-item-param="h"\r
                        >Built real-time dashboards rendering at &lt;200ms\r
                        update latency</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="about-highlight-2"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="About"\r
                      x-line-number="76"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="About_76_16"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-check w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0"\r
                        aria-hidden="true"\r
                      >\r
                        <path d="M20 6 9 17l-5-5"></path></svg\r
                      ><span\r
                        x-file-name="About"\r
                        x-line-number="82"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="About_82_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="about"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="23"\r
                        x-source-editable="true"\r
                        x-array-var="about"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="23"\r
                        x-array-item-param="h"\r
                        >Led an 8+ developer pod across CRM + AI workflow\r
                        integrations</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="about-highlight-3"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="About"\r
                      x-line-number="76"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="About_76_16"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-check w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0"\r
                        aria-hidden="true"\r
                      >\r
                        <path d="M20 6 9 17l-5-5"></path></svg\r
                      ><span\r
                        x-file-name="About"\r
                        x-line-number="82"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="About_82_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="about"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="23"\r
                        x-source-editable="true"\r
                        x-array-var="about"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="23"\r
                        x-array-item-param="h"\r
                        >Shipped a Webflow ↔ React hybrid architecture for\r
                        enterprise teams</span\r
                      >\r
                    </li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="skills"\r
            data-testid="skills-section"\r
            class="relative py-24 md:py-40 border-t border-white/10 overflow-hidden"\r
            x-file-name="Skills"\r
            x-line-number="21"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Skills_21_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="absolute inset-0 flex items-center pointer-events-none opacity-[0.06] marquee-mask"\r
              x-file-name="Skills"\r
              x-line-number="27"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Skills_27_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="rfm-marquee-container"\r
                style="\r
                  --pause-on-hover: running;\r
                  --pause-on-click: running;\r
                  --width: 100%;\r
                  --transform: none;\r
                "\r
              >\r
                <div\r
                  class="rfm-marquee"\r
                  style="\r
                    --play: running;\r
                    --direction: normal;\r
                    --duration: 458.99296875s;\r
                    --delay: 0s;\r
                    --iteration-count: infinite;\r
                    --min-width: 100%;\r
                  "\r
                >\r
                  <div class="rfm-initial-child-container">\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >REACT\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >TYPESCRIPT\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >PERFORMANCE\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >MICRO-FRONTENDS\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >WEBSOCKETS\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >RAG\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >LANGCHAIN\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >CORE WEB VITALS\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >VITE\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >REDUX\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  class="rfm-marquee"\r
                  style="\r
                    --play: running;\r
                    --direction: normal;\r
                    --duration: 458.99296875s;\r
                    --delay: 0s;\r
                    --iteration-count: infinite;\r
                    --min-width: 100%;\r
                  "\r
                >\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >REACT\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >TYPESCRIPT\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >PERFORMANCE\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >MICRO-FRONTENDS\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >WEBSOCKETS\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >RAG\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >LANGCHAIN\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >CORE WEB VITALS\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >VITE\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >REDUX\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div\r
              class="relative max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Skills"\r
              x-line-number="40"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Skills_40_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >02</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    SKILLS\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >02</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-6 mt-12"\r
                x-file-name="Skills"\r
                x-line-number="43"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Skills_43_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                <div\r
                  data-testid="skills-category-0"\r
                  class="col-span-12 md:col-span-4"\r
                  x-file-name="Skills"\r
                  x-line-number="45"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Skills_45_12"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="relative border border-white/10 bg-[var(--surface)]/70 backdrop-blur-sm p-6 md:p-8 h-full corners"\r
                    x-file-name="Skills"\r
                    x-line-number="56"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Skills_56_14"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="flex items-baseline justify-between"\r
                      x-file-name="Skills"\r
                      x-line-number="57"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_57_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-zinc-500"\r
                        x-file-name="Skills"\r
                        x-line-number="58"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_58_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                      >\r
                        0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Skills"\r
                          x-line-number="58"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="Skills_58_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >1</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="61"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_61_18"\r
                        x-dynamic="false"\r
                      >\r
                        stack\r
                      </div>\r
                    </div>\r
                    <h3\r
                      class="mt-4 font-display font-black text-2xl uppercase tracking-tight"\r
                      x-file-name="Skills"\r
                      x-line-number="65"\r
                      x-column="16"\r
                      x-component="h3"\r
                      x-id="Skills_65_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="skills"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="36"\r
                      x-source-path="group"\r
                      x-source-editable="true"\r
                      x-array-var="skills"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="36"\r
                      x-array-item-param="cat"\r
                    >\r
                      Core\r
                    </h3>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Skills"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        data-testid="skill-javascript-es6-"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >JavaScript (ES6+)</span\r
                      ><span\r
                        data-testid="skill-typescript"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >TypeScript</span\r
                      ><span\r
                        data-testid="skill-react"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >React</span\r
                      ><span\r
                        data-testid="skill-redux"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Redux</span\r
                      ><span\r
                        data-testid="skill-node-js"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Node.js</span\r
                      ><span\r
                        data-testid="skill-html5"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >HTML5</span\r
                      ><span\r
                        data-testid="skill-css3"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >CSS3</span\r
                      ><span\r
                        data-testid="skill-tailwind"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Tailwind</span\r
                      >\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="skills-category-1"\r
                  class="col-span-12 md:col-span-4 md:translate-y-8"\r
                  x-file-name="Skills"\r
                  x-line-number="45"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Skills_45_12"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="relative border border-white/10 bg-[var(--surface)]/70 backdrop-blur-sm p-6 md:p-8 h-full corners"\r
                    x-file-name="Skills"\r
                    x-line-number="56"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Skills_56_14"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="flex items-baseline justify-between"\r
                      x-file-name="Skills"\r
                      x-line-number="57"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_57_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-zinc-500"\r
                        x-file-name="Skills"\r
                        x-line-number="58"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_58_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                      >\r
                        0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Skills"\r
                          x-line-number="58"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="Skills_58_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >2</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="61"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_61_18"\r
                        x-dynamic="false"\r
                      >\r
                        stack\r
                      </div>\r
                    </div>\r
                    <h3\r
                      class="mt-4 font-display font-black text-2xl uppercase tracking-tight"\r
                      x-file-name="Skills"\r
                      x-line-number="65"\r
                      x-column="16"\r
                      x-component="h3"\r
                      x-id="Skills_65_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="skills"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="36"\r
                      x-source-path="group"\r
                      x-source-editable="true"\r
                      x-array-var="skills"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="36"\r
                      x-array-item-param="cat"\r
                    >\r
                      Performance &amp; Architecture\r
                    </h3>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Skills"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        data-testid="skill-micro-frontends"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Micro-frontends</span\r
                      ><span\r
                        data-testid="skill-websockets"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >WebSockets</span\r
                      ><span\r
                        data-testid="skill-code-splitting"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Code Splitting</span\r
                      ><span\r
                        data-testid="skill-core-web-vitals"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Core Web Vitals</span\r
                      ><span\r
                        data-testid="skill-ssr-csr"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >SSR / CSR</span\r
                      ><span\r
                        data-testid="skill-webpack"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Webpack</span\r
                      ><span\r
                        data-testid="skill-vite"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Vite</span\r
                      >\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="skills-category-2"\r
                  class="col-span-12 md:col-span-4"\r
                  x-file-name="Skills"\r
                  x-line-number="45"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Skills_45_12"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="relative border border-white/10 bg-[var(--surface)]/70 backdrop-blur-sm p-6 md:p-8 h-full corners"\r
                    x-file-name="Skills"\r
                    x-line-number="56"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Skills_56_14"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="flex items-baseline justify-between"\r
                      x-file-name="Skills"\r
                      x-line-number="57"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_57_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-zinc-500"\r
                        x-file-name="Skills"\r
                        x-line-number="58"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_58_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                      >\r
                        0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Skills"\r
                          x-line-number="58"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="Skills_58_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >3</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="61"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_61_18"\r
                        x-dynamic="false"\r
                      >\r
                        stack\r
                      </div>\r
                    </div>\r
                    <h3\r
                      class="mt-4 font-display font-black text-2xl uppercase tracking-tight"\r
                      x-file-name="Skills"\r
                      x-line-number="65"\r
                      x-column="16"\r
                      x-component="h3"\r
                      x-id="Skills_65_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="skills"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="36"\r
                      x-source-path="group"\r
                      x-source-editable="true"\r
                      x-array-var="skills"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="36"\r
                      x-array-item-param="cat"\r
                    >\r
                      AI &amp; Tooling\r
                    </h3>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Skills"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        data-testid="skill-github-copilot"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >GitHub Copilot</span\r
                      ><span\r
                        data-testid="skill-cursor-ide"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Cursor IDE</span\r
                      ><span\r
                        data-testid="skill-langchain"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >LangChain</span\r
                      ><span\r
                        data-testid="skill-rag"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >RAG</span\r
                      ><span\r
                        data-testid="skill-openai-apis"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >OpenAI APIs</span\r
                      ><span\r
                        data-testid="skill-git"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Git</span\r
                      ><span\r
                        data-testid="skill-jest"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Jest</span\r
                      ><span\r
                        data-testid="skill-playwright"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Playwright</span\r
                      >\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="experience"\r
            data-testid="experience-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="Experience"\r
            x-line-number="8"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Experience_8_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Experience"\r
              x-line-number="13"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Experience_13_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >03</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    EXPERIENCE\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >03</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="mt-16 relative"\r
                x-file-name="Experience"\r
                x-line-number="16"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Experience_16_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-white/10"\r
                  x-file-name="Experience"\r
                  x-line-number="18"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Experience_18_10"\r
                  x-dynamic="false"\r
                ></div>\r
                <div\r
                  class="space-y-16"\r
                  x-file-name="Experience"\r
                  x-line-number="20"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Experience_20_10"\r
                  x-dynamic="true"\r
                  x-source-type="computed"\r
                  x-source-editable="false"\r
                >\r
                  <div\r
                    data-testid="experience-item-0"\r
                    class="relative md:grid md:grid-cols-2 md:gap-12 pl-10 md:pl-0"\r
                    x-file-name="Experience"\r
                    x-line-number="34"\r
                    x-column="4"\r
                    x-component="div"\r
                    x-id="Experience_34_4"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 z-10"\r
                      x-file-name="Experience"\r
                      x-line-number="43"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_43_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="relative"\r
                        x-file-name="Experience"\r
                        x-line-number="44"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_44_8"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          class="absolute inset-0 bg-[var(--accent)] blur-md opacity-50"\r
                          x-file-name="Experience"\r
                          x-line-number="45"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_45_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                        <div\r
                          class="relative w-3 h-3 bg-[var(--accent)] rotate-45"\r
                          x-file-name="Experience"\r
                          x-line-number="46"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_46_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="md:text-right md:pr-12"\r
                      x-file-name="Experience"\r
                      x-line-number="51"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_51_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2"\r
                        x-file-name="Experience"\r
                        x-line-number="54"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_54_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="period"\r
                        x-source-editable="false"\r
                      >\r
                        Feb 2025 — Present\r
                      </div>\r
                      <h3\r
                        class="font-display font-black text-2xl md:text-3xl uppercase tracking-tight"\r
                        x-file-name="Experience"\r
                        x-line-number="57"\r
                        x-column="8"\r
                        x-component="h3"\r
                        x-id="Experience_57_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="company"\r
                        x-source-editable="false"\r
                      >\r
                        Mavlers\r
                      </h3>\r
                      <div\r
                        class="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent)]"\r
                        x-file-name="Experience"\r
                        x-line-number="60"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_60_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="role"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-briefcase w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Experience"\r
                          x-line-number="61"\r
                          x-column="10"\r
                          x-component="Briefcase"\r
                          x-id="Experience_61_10"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"\r
                          ></path>\r
                          <rect\r
                            width="20"\r
                            height="14"\r
                            x="2"\r
                            y="6"\r
                            rx="2"\r
                          ></rect></svg\r
                        >Frontend SME\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="mt-4 md:mt-0 md:pl-12"\r
                      x-file-name="Experience"\r
                      x-line-number="67"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_67_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="border border-white/10 bg-[var(--surface)]/60 p-5 md:p-6"\r
                        x-file-name="Experience"\r
                        x-line-number="72"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_72_8"\r
                        x-dynamic="false"\r
                      >\r
                        <p\r
                          class="text-sm md:text-base text-zinc-300 leading-relaxed"\r
                          x-file-name="Experience"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="p"\r
                          x-id="Experience_73_10"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="role"\r
                          x-source-path="summary"\r
                          x-source-editable="false"\r
                        >\r
                          Subject-matter expert driving AI-assisted development\r
                          practices, CRM integrations, and architectural\r
                          direction for an 8+ engineer pod.\r
                        </p>\r
                        <ul\r
                          class="mt-4 space-y-2"\r
                          x-file-name="Experience"\r
                          x-line-number="76"\r
                          x-column="10"\r
                          x-component="ul"\r
                          x-id="Experience_76_10"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                        >\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Introduced Copilot + Cursor workflows that cut\r
                              delivery time ~40%</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Owned presales requirements analysis for 6+\r
                              enterprise pitches</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Designed micro-frontend boundaries between CRM\r
                              modules</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Mentored 8+ developers via code reviews and\r
                              weekly arch syncs</span\r
                            >\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div\r
                    data-testid="experience-item-1"\r
                    class="relative md:grid md:grid-cols-2 md:gap-12 pl-10 md:pl-0"\r
                    x-file-name="Experience"\r
                    x-line-number="34"\r
                    x-column="4"\r
                    x-component="div"\r
                    x-id="Experience_34_4"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 z-10"\r
                      x-file-name="Experience"\r
                      x-line-number="43"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_43_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="relative"\r
                        x-file-name="Experience"\r
                        x-line-number="44"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_44_8"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          class="absolute inset-0 bg-[var(--accent)] blur-md opacity-50"\r
                          x-file-name="Experience"\r
                          x-line-number="45"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_45_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                        <div\r
                          class="relative w-3 h-3 bg-[var(--accent)] rotate-45"\r
                          x-file-name="Experience"\r
                          x-line-number="46"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_46_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="md:order-2 md:pl-12"\r
                      x-file-name="Experience"\r
                      x-line-number="51"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_51_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2"\r
                        x-file-name="Experience"\r
                        x-line-number="54"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_54_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="period"\r
                        x-source-editable="false"\r
                      >\r
                        2023 — 2025\r
                      </div>\r
                      <h3\r
                        class="font-display font-black text-2xl md:text-3xl uppercase tracking-tight"\r
                        x-file-name="Experience"\r
                        x-line-number="57"\r
                        x-column="8"\r
                        x-component="h3"\r
                        x-id="Experience_57_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="company"\r
                        x-source-editable="false"\r
                      >\r
                        Siam Computing\r
                      </h3>\r
                      <div\r
                        class="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent)]"\r
                        x-file-name="Experience"\r
                        x-line-number="60"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_60_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="role"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-briefcase w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Experience"\r
                          x-line-number="61"\r
                          x-column="10"\r
                          x-component="Briefcase"\r
                          x-id="Experience_61_10"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"\r
                          ></path>\r
                          <rect\r
                            width="20"\r
                            height="14"\r
                            x="2"\r
                            y="6"\r
                            rx="2"\r
                          ></rect></svg\r
                        >Senior Frontend Associate\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="mt-4 md:mt-0 md:order-1 md:text-right md:pr-12"\r
                      x-file-name="Experience"\r
                      x-line-number="67"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_67_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="border border-white/10 bg-[var(--surface)]/60 p-5 md:p-6"\r
                        x-file-name="Experience"\r
                        x-line-number="72"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_72_8"\r
                        x-dynamic="false"\r
                      >\r
                        <p\r
                          class="text-sm md:text-base text-zinc-300 leading-relaxed"\r
                          x-file-name="Experience"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="p"\r
                          x-id="Experience_73_10"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="role"\r
                          x-source-path="summary"\r
                          x-source-editable="false"\r
                        >\r
                          Shipped RESTful-backed React applications with a focus\r
                          on performance budgets and Agile delivery cadence.\r
                        </p>\r
                        <ul\r
                          class="mt-4 space-y-2"\r
                          x-file-name="Experience"\r
                          x-line-number="76"\r
                          x-column="10"\r
                          x-component="ul"\r
                          x-id="Experience_76_10"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                        >\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Improved LCP by 30% via route-level code\r
                              splitting &amp; asset audits</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Improved LCP by 30% via route-level code\r
                              splitting &amp; asset audits</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Built reusable component library adopted by 3\r
                              product teams</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Built reusable component library adopted by 3\r
                              product teams</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Drove Agile ceremonies and sprint estimation for\r
                              the frontend chapter</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Drove Agile ceremonies and sprint estimation for\r
                              the frontend chapter</span\r
                            >\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div\r
                    data-testid="experience-item-2"\r
                    class="relative md:grid md:grid-cols-2 md:gap-12 pl-10 md:pl-0"\r
                    x-file-name="Experience"\r
                    x-line-number="34"\r
                    x-column="4"\r
                    x-component="div"\r
                    x-id="Experience_34_4"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 z-10"\r
                      x-file-name="Experience"\r
                      x-line-number="43"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_43_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="relative"\r
                        x-file-name="Experience"\r
                        x-line-number="44"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_44_8"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          class="absolute inset-0 bg-[var(--accent)] blur-md opacity-50"\r
                          x-file-name="Experience"\r
                          x-line-number="45"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_45_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                        <div\r
                          class="relative w-3 h-3 bg-[var(--accent)] rotate-45"\r
                          x-file-name="Experience"\r
                          x-line-number="46"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_46_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="md:text-right md:pr-12"\r
                      x-file-name="Experience"\r
                      x-line-number="51"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_51_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2"\r
                        x-file-name="Experience"\r
                        x-line-number="54"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_54_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="period"\r
                        x-source-editable="false"\r
                      >\r
                        2021 — 2023\r
                      </div>\r
                      <h3\r
                        class="font-display font-black text-2xl md:text-3xl uppercase tracking-tight"\r
                        x-file-name="Experience"\r
                        x-line-number="57"\r
                        x-column="8"\r
                        x-component="h3"\r
                        x-id="Experience_57_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="company"\r
                        x-source-editable="false"\r
                      >\r
                        The Workfront\r
                      </h3>\r
                      <div\r
                        class="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent)]"\r
                        x-file-name="Experience"\r
                        x-line-number="60"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_60_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="role"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-briefcase w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Experience"\r
                          x-line-number="61"\r
                          x-column="10"\r
                          x-component="Briefcase"\r
                          x-id="Experience_61_10"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"\r
                          ></path>\r
                          <rect\r
                            width="20"\r
                            height="14"\r
                            x="2"\r
                            y="6"\r
                            rx="2"\r
                          ></rect></svg\r
                        >Front End Engineer\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="mt-4 md:mt-0 md:pl-12"\r
                      x-file-name="Experience"\r
                      x-line-number="67"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_67_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="border border-white/10 bg-[var(--surface)]/60 p-5 md:p-6"\r
                        x-file-name="Experience"\r
                        x-line-number="72"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_72_8"\r
                        x-dynamic="false"\r
                      >\r
                        <p\r
                          class="text-sm md:text-base text-zinc-300 leading-relaxed"\r
                          x-file-name="Experience"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="p"\r
                          x-id="Experience_73_10"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="role"\r
                          x-source-path="summary"\r
                          x-source-editable="false"\r
                        >\r
                          Built collaborative, real-time UI components and\r
                          WebSocket-backed synchronization layers.\r
                        </p>\r
                        <ul\r
                          class="mt-4 space-y-2"\r
                          x-file-name="Experience"\r
                          x-line-number="76"\r
                          x-column="10"\r
                          x-component="ul"\r
                          x-id="Experience_76_10"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                        >\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Engineered &lt;200ms update latency for live\r
                              multi-user editing</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Designed Redux selectors that survived 10×\r
                              state-tree growth</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Co-authored the team’s React testing\r
                              playbook</span\r
                            >\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div\r
                    data-testid="experience-item-3"\r
                    class="relative md:grid md:grid-cols-2 md:gap-12 pl-10 md:pl-0"\r
                    x-file-name="Experience"\r
                    x-line-number="34"\r
                    x-column="4"\r
                    x-component="div"\r
                    x-id="Experience_34_4"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 z-10"\r
                      x-file-name="Experience"\r
                      x-line-number="43"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_43_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="relative"\r
                        x-file-name="Experience"\r
                        x-line-number="44"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_44_8"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          class="absolute inset-0 bg-[var(--accent)] blur-md opacity-50"\r
                          x-file-name="Experience"\r
                          x-line-number="45"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_45_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                        <div\r
                          class="relative w-3 h-3 bg-[var(--accent)] rotate-45"\r
                          x-file-name="Experience"\r
                          x-line-number="46"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_46_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="md:order-2 md:pl-12"\r
                      x-file-name="Experience"\r
                      x-line-number="51"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_51_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2"\r
                        x-file-name="Experience"\r
                        x-line-number="54"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_54_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="period"\r
                        x-source-editable="false"\r
                      >\r
                        2020 — 2021\r
                      </div>\r
                      <h3\r
                        class="font-display font-black text-2xl md:text-3xl uppercase tracking-tight"\r
                        x-file-name="Experience"\r
                        x-line-number="57"\r
                        x-column="8"\r
                        x-component="h3"\r
                        x-id="Experience_57_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="company"\r
                        x-source-editable="false"\r
                      >\r
                        Trade Serve India\r
                      </h3>\r
                      <div\r
                        class="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent)]"\r
                        x-file-name="Experience"\r
                        x-line-number="60"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_60_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="role"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-briefcase w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Experience"\r
                          x-line-number="61"\r
                          x-column="10"\r
                          x-component="Briefcase"\r
                          x-id="Experience_61_10"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"\r
                          ></path>\r
                          <rect\r
                            width="20"\r
                            height="14"\r
                            x="2"\r
                            y="6"\r
                            rx="2"\r
                          ></rect></svg\r
                        >Web Developer\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="mt-4 md:mt-0 md:order-1 md:text-right md:pr-12"\r
                      x-file-name="Experience"\r
                      x-line-number="67"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_67_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="border border-white/10 bg-[var(--surface)]/60 p-5 md:p-6"\r
                        x-file-name="Experience"\r
                        x-line-number="72"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_72_8"\r
                        x-dynamic="false"\r
                      >\r
                        <p\r
                          class="text-sm md:text-base text-zinc-300 leading-relaxed"\r
                          x-file-name="Experience"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="p"\r
                          x-id="Experience_73_10"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="role"\r
                          x-source-path="summary"\r
                          x-source-editable="false"\r
                        >\r
                          From-scratch builds and Figma-to-code execution for\r
                          marketing and product surfaces.\r
                        </p>\r
                        <ul\r
                          class="mt-4 space-y-2"\r
                          x-file-name="Experience"\r
                          x-line-number="76"\r
                          x-column="10"\r
                          x-component="ul"\r
                          x-id="Experience_76_10"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                        >\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Delivered 12+ pixel-perfect Figma-to-React\r
                              handoffs</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Delivered 12+ pixel-perfect Figma-to-React\r
                              handoffs</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Set up the team’s first CI pipeline and\r
                              Lighthouse budgets</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Set up the team’s first CI pipeline and\r
                              Lighthouse budgets</span\r
                            >\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="projects"\r
            data-testid="projects-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="Projects"\r
            x-line-number="9"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Projects_9_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Projects"\r
              x-line-number="14"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Projects_14_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >04</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    CASE STUDIES\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >04</span\r
                  ></span\r
                >\r
              </div>\r
              <p\r
                class="mt-8 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed"\r
                x-file-name="Projects"\r
                x-line-number="17"\r
                x-column="8"\r
                x-component="p"\r
                x-id="Projects_17_8"\r
                x-dynamic="false"\r
              >\r
                Three deep-dives on shipping React at scale: a B2B platform we\r
                put on a performance budget, a real-time financial dashboard\r
                that had to stay under 200ms, and a hybrid Webflow ↔ React\r
                architecture.\r
              </p>\r
              <div\r
                class="mt-16 space-y-24"\r
                x-file-name="Projects"\r
                x-line-number="23"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Projects_23_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                <div\r
                  data-testid="project-b2b-platform"\r
                  class="relative grid grid-cols-12 gap-6 md:gap-8 items-center"\r
                  x-file-name="Projects"\r
                  x-line-number="36"\r
                  x-column="4"\r
                  x-component="div"\r
                  x-id="Projects_36_4"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    aria-hidden="true"\r
                    class="absolute font-display font-black uppercase tracking-tighter pointer-events-none select-none text-[14rem] md:text-[22rem] leading-none text-white/[0.04] left-0 -top-12"\r
                    x-file-name="Projects"\r
                    x-line-number="45"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_45_6"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="project"\r
                    x-source-path="number"\r
                    x-source-editable="false"\r
                  >\r
                    01\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-7 relative"\r
                    x-file-name="Projects"\r
                    x-line-number="55"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_55_6"\r
                    x-dynamic="false"\r
                  >\r
                    <a\r
                      data-testid="project-image-link-b2b-platform"\r
                      class="block group relative overflow-hidden border border-white/10 corners"\r
                      href="/case-study/b2b-platform"\r
                      data-discover="true"\r
                      ><div\r
                        class="aspect-[16/10] overflow-hidden"\r
                        x-file-name="Projects"\r
                        x-line-number="65"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_65_10"\r
                        x-dynamic="false"\r
                      >\r
                        <img\r
                          alt="B2B Platform"\r
                          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"\r
                          x-file-name="Projects"\r
                          x-line-number="66"\r
                          x-column="12"\r
                          x-component="img"\r
                          x-id="Projects_66_12"\r
                          x-dynamic="false"\r
                          src="https://images.pexels.com/photos/12843342/pexels-photo-12843342.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940"\r
                        />\r
                      </div>\r
                      <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"\r
                        x-file-name="Projects"\r
                        x-line-number="72"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_72_10"\r
                        x-dynamic="false"\r
                      ></div>\r
                      <div\r
                        class="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Projects"\r
                        x-line-number="73"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_73_10"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="project"\r
                        x-source-path="number"\r
                        x-source-editable="false"\r
                      >\r
                        //\r
                        <span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Projects"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Projects_73_10_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="project"\r
                          x-source-path="number"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >01</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="absolute bottom-4 right-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white bg-black/60 backdrop-blur px-3 py-2 border border-white/10"\r
                        x-file-name="Projects"\r
                        x-line-number="76"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_76_10"\r
                        x-dynamic="false"\r
                      >\r
                        View case study<svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Projects"\r
                          x-line-number="78"\r
                          x-column="12"\r
                          x-component="ArrowUpRight"\r
                          x-id="Projects_78_12"\r
                          x-dynamic="false"\r
                        >\r
                          <path d="M7 7h10v10"></path>\r
                          <path d="M7 17 17 7"></path>\r
                        </svg></div\r
                    ></a>\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-5 relative"\r
                    x-file-name="Projects"\r
                    x-line-number="84"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_84_6"\r
                    x-dynamic="false"\r
                  >\r
                    <h3\r
                      class="font-display font-black text-3xl md:text-4xl uppercase leading-[0.95] tracking-tight"\r
                      x-file-name="Projects"\r
                      x-line-number="89"\r
                      x-column="8"\r
                      x-component="h3"\r
                      x-id="Projects_89_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="name"\r
                      x-source-editable="false"\r
                    >\r
                      B2B Platform\r
                    </h3>\r
                    <p\r
                      class="mt-4 text-zinc-400 text-base leading-relaxed"\r
                      x-file-name="Projects"\r
                      x-line-number="92"\r
                      x-column="8"\r
                      x-component="p"\r
                      x-id="Projects_92_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="tagline"\r
                      x-source-editable="false"\r
                    >\r
                      Operations dashboard for a multi-tenant procurement\r
                      workflow.\r
                    </p>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Projects"\r
                      x-line-number="96"\r
                      x-column="8"\r
                      x-component="div"\r
                      x-id="Projects_96_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >React</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Redux Toolkit</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Node.js</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >WebSockets</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Tailwind</span\r
                      >\r
                    </div>\r
                    <ul\r
                      class="mt-6 space-y-2"\r
                      x-file-name="Projects"\r
                      x-line-number="107"\r
                      x-column="8"\r
                      x-component="ul"\r
                      x-id="Projects_107_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >30% reduction in dashboard load time after\r
                        code-splitting + asset audit\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Cut bundle size by 42% via dependency pruning and\r
                        tree-shaking\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Designed role-based UI states for 4 distinct personas\r
                      </li>\r
                    </ul>\r
                    <a\r
                      data-testid="project-link-b2b-platform"\r
                      class="mt-8 btn-block inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs uppercase tracking-[0.2em] hover:border-[var(--accent)] hover:text-[var(--accent)]"\r
                      href="/case-study/b2b-platform"\r
                      data-discover="true"\r
                      >Read full case study<svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                        aria-hidden="true"\r
                        x-file-name="Projects"\r
                        x-line-number="125"\r
                        x-column="10"\r
                        x-component="ArrowUpRight"\r
                        x-id="Projects_125_10"\r
                        x-dynamic="false"\r
                      >\r
                        <path d="M7 7h10v10"></path>\r
                        <path d="M7 17 17 7"></path></svg\r
                    ></a>\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="project-realtime-financial-dashboard"\r
                  class="relative grid grid-cols-12 gap-6 md:gap-8 items-center"\r
                  x-file-name="Projects"\r
                  x-line-number="36"\r
                  x-column="4"\r
                  x-component="div"\r
                  x-id="Projects_36_4"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    aria-hidden="true"\r
                    class="absolute font-display font-black uppercase tracking-tighter pointer-events-none select-none text-[14rem] md:text-[22rem] leading-none text-white/[0.04] right-0 -top-12"\r
                    x-file-name="Projects"\r
                    x-line-number="45"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_45_6"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="project"\r
                    x-source-path="number"\r
                    x-source-editable="false"\r
                  >\r
                    02\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-7 relative md:order-2"\r
                    x-file-name="Projects"\r
                    x-line-number="55"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_55_6"\r
                    x-dynamic="false"\r
                  >\r
                    <a\r
                      data-testid="project-image-link-realtime-financial-dashboard"\r
                      class="block group relative overflow-hidden border border-white/10 corners"\r
                      href="/case-study/realtime-financial-dashboard"\r
                      data-discover="true"\r
                      ><div\r
                        class="aspect-[16/10] overflow-hidden"\r
                        x-file-name="Projects"\r
                        x-line-number="65"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_65_10"\r
                        x-dynamic="false"\r
                      >\r
                        <img\r
                          alt="Real-Time Financial Dashboard"\r
                          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"\r
                          x-file-name="Projects"\r
                          x-line-number="66"\r
                          x-column="12"\r
                          x-component="img"\r
                          x-id="Projects_66_12"\r
                          x-dynamic="false"\r
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwwfHx8fDE3ODI4MDcwODF8MA&amp;ixlib=rb-4.1.0&amp;q=85"\r
                        />\r
                      </div>\r
                      <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"\r
                        x-file-name="Projects"\r
                        x-line-number="72"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_72_10"\r
                        x-dynamic="false"\r
                      ></div>\r
                      <div\r
                        class="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Projects"\r
                        x-line-number="73"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_73_10"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="project"\r
                        x-source-path="number"\r
                        x-source-editable="false"\r
                      >\r
                        //\r
                        <span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Projects"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Projects_73_10_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="project"\r
                          x-source-path="number"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >02</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="absolute bottom-4 right-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white bg-black/60 backdrop-blur px-3 py-2 border border-white/10"\r
                        x-file-name="Projects"\r
                        x-line-number="76"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_76_10"\r
                        x-dynamic="false"\r
                      >\r
                        View case study<svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Projects"\r
                          x-line-number="78"\r
                          x-column="12"\r
                          x-component="ArrowUpRight"\r
                          x-id="Projects_78_12"\r
                          x-dynamic="false"\r
                        >\r
                          <path d="M7 7h10v10"></path>\r
                          <path d="M7 17 17 7"></path>\r
                        </svg></div\r
                    ></a>\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-5 relative md:order-1"\r
                    x-file-name="Projects"\r
                    x-line-number="84"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_84_6"\r
                    x-dynamic="false"\r
                  >\r
                    <h3\r
                      class="font-display font-black text-3xl md:text-4xl uppercase leading-[0.95] tracking-tight"\r
                      x-file-name="Projects"\r
                      x-line-number="89"\r
                      x-column="8"\r
                      x-component="h3"\r
                      x-id="Projects_89_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="name"\r
                      x-source-editable="false"\r
                    >\r
                      Real-Time Financial Dashboard\r
                    </h3>\r
                    <p\r
                      class="mt-4 text-zinc-400 text-base leading-relaxed"\r
                      x-file-name="Projects"\r
                      x-line-number="92"\r
                      x-column="8"\r
                      x-component="p"\r
                      x-id="Projects_92_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="tagline"\r
                      x-source-editable="false"\r
                    >\r
                      Low-latency market data rendered for institutional\r
                      analysts.\r
                    </p>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Projects"\r
                      x-line-number="96"\r
                      x-column="8"\r
                      x-component="div"\r
                      x-id="Projects_96_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >React</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >WebSockets</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >D3</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Web Workers</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Zustand</span\r
                      >\r
                    </div>\r
                    <ul\r
                      class="mt-6 space-y-2"\r
                      x-file-name="Projects"\r
                      x-line-number="107"\r
                      x-column="8"\r
                      x-component="ul"\r
                      x-id="Projects_107_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Sub-200ms update latency on a 30-symbol live grid\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Rendered 5k+ rows without dropping frames via\r
                        virtualization\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Offloaded diffing to a Web Worker pipeline\r
                      </li>\r
                    </ul>\r
                    <a\r
                      data-testid="project-link-realtime-financial-dashboard"\r
                      class="mt-8 btn-block inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs uppercase tracking-[0.2em] hover:border-[var(--accent)] hover:text-[var(--accent)]"\r
                      href="/case-study/realtime-financial-dashboard"\r
                      data-discover="true"\r
                      >Read full case study<svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                        aria-hidden="true"\r
                        x-file-name="Projects"\r
                        x-line-number="125"\r
                        x-column="10"\r
                        x-component="ArrowUpRight"\r
                        x-id="Projects_125_10"\r
                        x-dynamic="false"\r
                      >\r
                        <path d="M7 7h10v10"></path>\r
                        <path d="M7 17 17 7"></path></svg\r
                    ></a>\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="project-webflow-react-hybrid"\r
                  class="relative grid grid-cols-12 gap-6 md:gap-8 items-center"\r
                  x-file-name="Projects"\r
                  x-line-number="36"\r
                  x-column="4"\r
                  x-component="div"\r
                  x-id="Projects_36_4"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    aria-hidden="true"\r
                    class="absolute font-display font-black uppercase tracking-tighter pointer-events-none select-none text-[14rem] md:text-[22rem] leading-none text-white/[0.04] left-0 -top-12"\r
                    x-file-name="Projects"\r
                    x-line-number="45"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_45_6"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="project"\r
                    x-source-path="number"\r
                    x-source-editable="false"\r
                  >\r
                    03\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-7 relative"\r
                    x-file-name="Projects"\r
                    x-line-number="55"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_55_6"\r
                    x-dynamic="false"\r
                  >\r
                    <a\r
                      data-testid="project-image-link-webflow-react-hybrid"\r
                      class="block group relative overflow-hidden border border-white/10 corners"\r
                      href="/case-study/webflow-react-hybrid"\r
                      data-discover="true"\r
                      ><div\r
                        class="aspect-[16/10] overflow-hidden"\r
                        x-file-name="Projects"\r
                        x-line-number="65"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_65_10"\r
                        x-dynamic="false"\r
                      >\r
                        <img\r
                          alt="Webflow + React Hybrid"\r
                          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"\r
                          x-file-name="Projects"\r
                          x-line-number="66"\r
                          x-column="12"\r
                          x-component="img"\r
                          x-id="Projects_66_12"\r
                          x-dynamic="false"\r
                          src="https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRhcmslMjB0ZWNoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3ODI4MDcwODB8MA&amp;ixlib=rb-4.1.0&amp;q=85"\r
                        />\r
                      </div>\r
                      <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"\r
                        x-file-name="Projects"\r
                        x-line-number="72"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_72_10"\r
                        x-dynamic="false"\r
                      ></div>\r
                      <div\r
                        class="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Projects"\r
                        x-line-number="73"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_73_10"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="project"\r
                        x-source-path="number"\r
                        x-source-editable="false"\r
                      >\r
                        //\r
                        <span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Projects"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Projects_73_10_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="project"\r
                          x-source-path="number"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >03</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="absolute bottom-4 right-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white bg-black/60 backdrop-blur px-3 py-2 border border-white/10"\r
                        x-file-name="Projects"\r
                        x-line-number="76"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_76_10"\r
                        x-dynamic="false"\r
                      >\r
                        View case study<svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Projects"\r
                          x-line-number="78"\r
                          x-column="12"\r
                          x-component="ArrowUpRight"\r
                          x-id="Projects_78_12"\r
                          x-dynamic="false"\r
                        >\r
                          <path d="M7 7h10v10"></path>\r
                          <path d="M7 17 17 7"></path>\r
                        </svg></div\r
                    ></a>\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-5 relative"\r
                    x-file-name="Projects"\r
                    x-line-number="84"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_84_6"\r
                    x-dynamic="false"\r
                  >\r
                    <h3\r
                      class="font-display font-black text-3xl md:text-4xl uppercase leading-[0.95] tracking-tight"\r
                      x-file-name="Projects"\r
                      x-line-number="89"\r
                      x-column="8"\r
                      x-component="h3"\r
                      x-id="Projects_89_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="name"\r
                      x-source-editable="false"\r
                    >\r
                      Webflow + React Hybrid\r
                    </h3>\r
                    <p\r
                      class="mt-4 text-zinc-400 text-base leading-relaxed"\r
                      x-file-name="Projects"\r
                      x-line-number="92"\r
                      x-column="8"\r
                      x-component="p"\r
                      x-id="Projects_92_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="tagline"\r
                      x-source-editable="false"\r
                    >\r
                      Marketing speed + product depth, on a single architecture.\r
                    </p>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Projects"\r
                      x-line-number="96"\r
                      x-column="8"\r
                      x-component="div"\r
                      x-id="Projects_96_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >React</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Webflow</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Vite</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Module Federation</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Cloudflare</span\r
                      >\r
                    </div>\r
                    <ul\r
                      class="mt-6 space-y-2"\r
                      x-file-name="Projects"\r
                      x-line-number="107"\r
                      x-column="8"\r
                      x-component="ul"\r
                      x-id="Projects_107_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Marketing ships pages in hours; product ships features\r
                        in React\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >40% faster marketing iteration without engineering\r
                        tickets\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Single domain, shared auth, shared analytics layer\r
                      </li>\r
                    </ul>\r
                    <a\r
                      data-testid="project-link-webflow-react-hybrid"\r
                      class="mt-8 btn-block inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs uppercase tracking-[0.2em] hover:border-[var(--accent)] hover:text-[var(--accent)]"\r
                      href="/case-study/webflow-react-hybrid"\r
                      data-discover="true"\r
                      >Read full case study<svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                        aria-hidden="true"\r
                        x-file-name="Projects"\r
                        x-line-number="125"\r
                        x-column="10"\r
                        x-component="ArrowUpRight"\r
                        x-id="Projects_125_10"\r
                        x-dynamic="false"\r
                      >\r
                        <path d="M7 7h10v10"></path>\r
                        <path d="M7 17 17 7"></path></svg\r
                    ></a>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="education"\r
            data-testid="education-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="Education"\r
            x-line-number="8"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Education_8_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Education"\r
              x-line-number="13"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Education_13_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >05</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    CREDENTIALS\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >05</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-6 mt-12"\r
                x-file-name="Education"\r
                x-line-number="16"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Education_16_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="col-span-12 md:col-span-5 border border-white/10 bg-[var(--surface)]/60 p-6 md:p-8"\r
                  data-testid="education-card"\r
                  x-file-name="Education"\r
                  x-line-number="18"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Education_18_10"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="Education"\r
                    x-line-number="26"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Education_26_12"\r
                    x-dynamic="false"\r
                  >\r
                    <svg\r
                      xmlns="http://www.w3.org/2000/svg"\r
                      width="24"\r
                      height="24"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      stroke-linecap="round"\r
                      stroke-linejoin="round"\r
                      class="lucide lucide-graduation-cap w-4 h-4"\r
                      aria-hidden="true"\r
                      x-file-name="Education"\r
                      x-line-number="27"\r
                      x-column="14"\r
                      x-component="GraduationCap"\r
                      x-id="Education_27_14"\r
                      x-dynamic="false"\r
                    >\r
                      <path\r
                        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"\r
                      ></path>\r
                      <path d="M22 10v6"></path>\r
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg\r
                    >Education\r
                  </div>\r
                  <div\r
                    class="mt-6 space-y-6"\r
                    x-file-name="Education"\r
                    x-line-number="30"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Education_30_12"\r
                    x-dynamic="true"\r
                    x-source-type="computed"\r
                    x-source-editable="false"\r
                  >\r
                    <div\r
                      data-testid="education-item-0"\r
                      class="border-l-2 border-[var(--accent)]/50 pl-4"\r
                      x-file-name="Education"\r
                      x-line-number="32"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Education_32_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="font-display font-bold text-lg md:text-xl uppercase tracking-tight"\r
                        x-file-name="Education"\r
                        x-line-number="37"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_37_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="degree"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        MCA — Master of Computer Applications\r
                      </div>\r
                      <div\r
                        class="mt-1 text-sm text-zinc-400"\r
                        x-file-name="Education"\r
                        x-line-number="40"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_40_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="school"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        Mangalayatan University\r
                      </div>\r
                      <div\r
                        class="mt-1 text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                        x-file-name="Education"\r
                        x-line-number="41"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_41_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="year"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        2024\r
                      </div>\r
                    </div>\r
                    <div\r
                      data-testid="education-item-1"\r
                      class="border-l-2 border-[var(--accent)]/50 pl-4"\r
                      x-file-name="Education"\r
                      x-line-number="32"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Education_32_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="font-display font-bold text-lg md:text-xl uppercase tracking-tight"\r
                        x-file-name="Education"\r
                        x-line-number="37"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_37_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="degree"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        BCA — Bachelor of Computer Applications\r
                      </div>\r
                      <div\r
                        class="mt-1 text-sm text-zinc-400"\r
                        x-file-name="Education"\r
                        x-line-number="40"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_40_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="school"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        Maharshi Dayanand University\r
                      </div>\r
                      <div\r
                        class="mt-1 text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                        x-file-name="Education"\r
                        x-line-number="41"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_41_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="year"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        2020\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-7 border border-white/10 bg-[var(--surface)]/60 p-6 md:p-8"\r
                  data-testid="achievements-card"\r
                  x-file-name="Education"\r
                  x-line-number="50"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Education_50_10"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="Education"\r
                    x-line-number="58"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Education_58_12"\r
                    x-dynamic="false"\r
                  >\r
                    <svg\r
                      xmlns="http://www.w3.org/2000/svg"\r
                      width="24"\r
                      height="24"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      stroke-linecap="round"\r
                      stroke-linejoin="round"\r
                      class="lucide lucide-trophy w-4 h-4"\r
                      aria-hidden="true"\r
                      x-file-name="Education"\r
                      x-line-number="59"\r
                      x-column="14"\r
                      x-component="Trophy"\r
                      x-id="Education_59_14"\r
                      x-dynamic="false"\r
                    >\r
                      <path\r
                        d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"\r
                      ></path>\r
                      <path\r
                        d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"\r
                      ></path>\r
                      <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>\r
                      <path d="M4 22h16"></path>\r
                      <path\r
                        d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"\r
                      ></path>\r
                      <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg\r
                    >Achievements\r
                  </div>\r
                  <ul\r
                    class="mt-6 space-y-4"\r
                    x-file-name="Education"\r
                    x-line-number="62"\r
                    x-column="12"\r
                    x-component="ul"\r
                    x-id="Education_62_12"\r
                    x-dynamic="true"\r
                    x-source-type="computed"\r
                    x-source-editable="false"\r
                  >\r
                    <li\r
                      data-testid="achievement-0"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="Education"\r
                      x-line-number="64"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="Education_64_16"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="font-display font-black text-[var(--accent)] text-xs mt-1"\r
                        x-file-name="Education"\r
                        x-line-number="69"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_69_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                        >0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Education"\r
                          x-line-number="69"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Education_69_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >1</span\r
                        ></span\r
                      ><span\r
                        x-file-name="Education"\r
                        x-line-number="72"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_72_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="achievements"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="204"\r
                        x-source-editable="true"\r
                        x-array-var="achievements"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="204"\r
                        x-array-item-param="a"\r
                        >Earned the UpStars Award within 6 months through consistent performance, client-focused delivery, and engineering excellence.</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="achievement-1"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="Education"\r
                      x-line-number="64"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="Education_64_16"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="font-display font-black text-[var(--accent)] text-xs mt-1"\r
                        x-file-name="Education"\r
                        x-line-number="69"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_69_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                        >0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Education"\r
                          x-line-number="69"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Education_69_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >2</span\r
                        ></span\r
                      ><span\r
                        x-file-name="Education"\r
                        x-line-number="72"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_72_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="achievements"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="204"\r
                        x-source-editable="true"\r
                        x-array-var="achievements"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="204"\r
                        x-array-item-param="a"\r
                        >Drove 30% LCP improvement on two production B2B\r
                        platforms</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="achievement-2"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="Education"\r
                      x-line-number="64"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="Education_64_16"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="font-display font-black text-[var(--accent)] text-xs mt-1"\r
                        x-file-name="Education"\r
                        x-line-number="69"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_69_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                        >0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Education"\r
                          x-line-number="69"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Education_69_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >3</span\r
                        ></span\r
                      ><span\r
                        x-file-name="Education"\r
                        x-line-number="72"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_72_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="achievements"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="204"\r
                        x-source-editable="true"\r
                        x-array-var="achievements"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="204"\r
                        x-array-item-param="a"\r
                        >Architected real-time dashboards with sub-200ms update\r
                        latency</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="achievement-3"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="Education"\r
                      x-line-number="64"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="Education_64_16"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="font-display font-black text-[var(--accent)] text-xs mt-1"\r
                        x-file-name="Education"\r
                        x-line-number="69"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_69_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                        >0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Education"\r
                          x-line-number="69"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Education_69_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >4</span\r
                        ></span\r
                      ><span\r
                        x-file-name="Education"\r
                        x-line-number="72"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_72_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="achievements"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="204"\r
                        x-source-editable="true"\r
                        x-array-var="achievements"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="204"\r
                        x-array-item-param="a"\r
                        >40% faster delivery cadence via AI-assisted dev\r
                        workflows</span\r
                      >\r
                    </li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="contact"\r
            data-testid="contact-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="Contact"\r
            x-line-number="76"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Contact_76_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Contact"\r
              x-line-number="81"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Contact_81_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >06</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    CONTACT\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >06</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-8 md:gap-12 mt-12"\r
                x-file-name="Contact"\r
                x-line-number="84"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Contact_84_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="col-span-12 md:col-span-6 flex flex-col justify-between"\r
                  x-file-name="Contact"\r
                  x-line-number="86"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Contact_86_10"\r
                  x-dynamic="false"\r
                >\r
                  <h3\r
                    class="font-display font-black uppercase text-5xl md:text-7xl leading-[0.9] tracking-tighter"\r
                    x-file-name="Contact"\r
                    x-line-number="87"\r
                    x-column="12"\r
                    x-component="h3"\r
                    x-id="Contact_87_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    LET'S<br\r
                      x-file-name="Contact"\r
                      x-line-number="95"\r
                      x-column="14"\r
                      x-component="br"\r
                      x-id="Contact_95_14"\r
                      x-dynamic="false"\r
                    /><span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Contact"\r
                      x-line-number="96"\r
                      x-column="14"\r
                      x-component="span"\r
                      x-id="Contact_96_14"\r
                      x-dynamic="false"\r
                      >BUILD</span\r
                    >\r
                    SOMETHING<br\r
                      x-file-name="Contact"\r
                      x-line-number="97"\r
                      x-column="14"\r
                      x-component="br"\r
                      x-id="Contact_97_14"\r
                      x-dynamic="false"\r
                    />FAST<span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Contact"\r
                      x-line-number="98"\r
                      x-column="18"\r
                      x-component="span"\r
                      x-id="Contact_98_18"\r
                      x-dynamic="false"\r
                      >.</span\r
                    >\r
                  </h3>\r
                  <div\r
                    class="mt-12 md:mt-0 space-y-4"\r
                    x-file-name="Contact"\r
                    x-line-number="101"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Contact_101_12"\r
                    x-dynamic="false"\r
                  >\r
                    <a\r
                      href="mailto:manmohanjangra2528@gmail.com"\r
                      rel="noopener noreferrer"\r
                      data-testid="contact-email"\r
                      class="group flex items-center justify-between border border-white/10 px-4 py-3 hover:border-[var(--accent)] transition-colors"\r
                      x-file-name="Contact"\r
                      x-line-number="231"\r
                      x-column="4"\r
                      x-component="a"\r
                      x-id="Contact_231_4"\r
                      x-dynamic="false"\r
                      ><div\r
                        class="flex items-center gap-3"\r
                        x-file-name="Contact"\r
                        x-line-number="238"\r
                        x-column="6"\r
                        x-component="div"\r
                        x-id="Contact_238_6"\r
                        x-dynamic="false"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="239"\r
                          x-column="8"\r
                          x-component="span"\r
                          x-id="Contact_239_8"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="icon"\r
                          x-source-editable="false"\r
                          ><svg\r
                            xmlns="http://www.w3.org/2000/svg"\r
                            width="24"\r
                            height="24"\r
                            viewBox="0 0 24 24"\r
                            fill="none"\r
                            stroke="currentColor"\r
                            stroke-width="2"\r
                            stroke-linecap="round"\r
                            stroke-linejoin="round"\r
                            class="lucide lucide-mail w-4 h-4"\r
                            aria-hidden="true"\r
                            x-file-name="Contact"\r
                            x-line-number="103"\r
                            x-column="22"\r
                            x-component="Mail"\r
                            x-id="Contact_103_22"\r
                            x-dynamic="false"\r
                          >\r
                            <path\r
                              d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"\r
                            ></path>\r
                            <rect\r
                              x="2"\r
                              y="4"\r
                              width="20"\r
                              height="16"\r
                              rx="2"\r
                            ></rect></svg\r
                        ></span>\r
                        <div\r
                          x-file-name="Contact"\r
                          x-line-number="240"\r
                          x-column="8"\r
                          x-component="div"\r
                          x-id="Contact_240_8"\r
                          x-dynamic="false"\r
                        >\r
                          <div\r
                            class="text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                            x-file-name="Contact"\r
                            x-line-number="241"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_241_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="label"\r
                            x-source-editable="false"\r
                          >\r
                            email\r
                          </div>\r
                          <div\r
                            class="text-sm text-white group-hover:text-[var(--accent)] transition-colors"\r
                            x-file-name="Contact"\r
                            x-line-number="244"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_244_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="value"\r
                            x-source-editable="false"\r
                          >\r
                            manmohanjangra2528@gmail.com\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <span\r
                        class="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"\r
                        x-file-name="Contact"\r
                        x-line-number="249"\r
                        x-column="6"\r
                        x-component="span"\r
                        x-id="Contact_249_6"\r
                        x-dynamic="false"\r
                        >→</span\r
                      ></a\r
                    ><a\r
                      href="tel:+91-7015846550"\r
                      rel="noopener noreferrer"\r
                      data-testid="contact-phone"\r
                      class="group flex items-center justify-between border border-white/10 px-4 py-3 hover:border-[var(--accent)] transition-colors"\r
                      x-file-name="Contact"\r
                      x-line-number="231"\r
                      x-column="4"\r
                      x-component="a"\r
                      x-id="Contact_231_4"\r
                      x-dynamic="false"\r
                      ><div\r
                        class="flex items-center gap-3"\r
                        x-file-name="Contact"\r
                        x-line-number="238"\r
                        x-column="6"\r
                        x-component="div"\r
                        x-id="Contact_238_6"\r
                        x-dynamic="false"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="239"\r
                          x-column="8"\r
                          x-component="span"\r
                          x-id="Contact_239_8"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="icon"\r
                          x-source-editable="false"\r
                          ><svg\r
                            xmlns="http://www.w3.org/2000/svg"\r
                            width="24"\r
                            height="24"\r
                            viewBox="0 0 24 24"\r
                            fill="none"\r
                            stroke="currentColor"\r
                            stroke-width="2"\r
                            stroke-linecap="round"\r
                            stroke-linejoin="round"\r
                            class="lucide lucide-phone w-4 h-4"\r
                            aria-hidden="true"\r
                            x-file-name="Contact"\r
                            x-line-number="110"\r
                            x-column="22"\r
                            x-component="Phone"\r
                            x-id="Contact_110_22"\r
                            x-dynamic="false"\r
                          >\r
                            <path\r
                              d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"\r
                            ></path></svg\r
                        ></span>\r
                        <div\r
                          x-file-name="Contact"\r
                          x-line-number="240"\r
                          x-column="8"\r
                          x-component="div"\r
                          x-id="Contact_240_8"\r
                          x-dynamic="false"\r
                        >\r
                          <div\r
                            class="text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                            x-file-name="Contact"\r
                            x-line-number="241"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_241_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="label"\r
                            x-source-editable="false"\r
                          >\r
                            phone\r
                          </div>\r
                          <div\r
                            class="text-sm text-white group-hover:text-[var(--accent)] transition-colors"\r
                            x-file-name="Contact"\r
                            x-line-number="244"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_244_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="value"\r
                            x-source-editable="false"\r
                          >\r
                            +91-7015846550\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <span\r
                        class="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"\r
                        x-file-name="Contact"\r
                        x-line-number="249"\r
                        x-column="6"\r
                        x-component="span"\r
                        x-id="Contact_249_6"\r
                        x-dynamic="false"\r
                        >→</span\r
                      ></a\r
                    ><a\r
                      href="https://www.linkedin.com/in/manmohanjangra"\r
                      target="_blank"\r
                      rel="noopener noreferrer"\r
                      data-testid="contact-linkedin"\r
                      class="group flex items-center justify-between border border-white/10 px-4 py-3 hover:border-[var(--accent)] transition-colors"\r
                      x-file-name="Contact"\r
                      x-line-number="231"\r
                      x-column="4"\r
                      x-component="a"\r
                      x-id="Contact_231_4"\r
                      x-dynamic="false"\r
                      ><div\r
                        class="flex items-center gap-3"\r
                        x-file-name="Contact"\r
                        x-line-number="238"\r
                        x-column="6"\r
                        x-component="div"\r
                        x-id="Contact_238_6"\r
                        x-dynamic="false"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="239"\r
                          x-column="8"\r
                          x-component="span"\r
                          x-id="Contact_239_8"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="icon"\r
                          x-source-editable="false"\r
                          ><svg\r
                            xmlns="http://www.w3.org/2000/svg"\r
                            width="24"\r
                            height="24"\r
                            viewBox="0 0 24 24"\r
                            fill="none"\r
                            stroke="currentColor"\r
                            stroke-width="2"\r
                            stroke-linecap="round"\r
                            stroke-linejoin="round"\r
                            class="lucide lucide-linkedin w-4 h-4"\r
                            aria-hidden="true"\r
                            x-file-name="Contact"\r
                            x-line-number="117"\r
                            x-column="22"\r
                            x-component="Linkedin"\r
                            x-id="Contact_117_22"\r
                            x-dynamic="false"\r
                          >\r
                            <path\r
                              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"\r
                            ></path>\r
                            <rect width="4" height="12" x="2" y="9"></rect>\r
                            <circle cx="4" cy="4" r="2"></circle></svg\r
                        ></span>\r
                        <div\r
                          x-file-name="Contact"\r
                          x-line-number="240"\r
                          x-column="8"\r
                          x-component="div"\r
                          x-id="Contact_240_8"\r
                          x-dynamic="false"\r
                        >\r
                          <div\r
                            class="text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                            x-file-name="Contact"\r
                            x-line-number="241"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_241_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="label"\r
                            x-source-editable="false"\r
                          >\r
                            linkedin\r
                          </div>\r
                          <div\r
                            class="text-sm text-white group-hover:text-[var(--accent)] transition-colors"\r
                            x-file-name="Contact"\r
                            x-line-number="244"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_244_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="value"\r
                            x-source-editable="false"\r
                          >\r
                            manmohanjangra\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <span\r
                        class="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"\r
                        x-file-name="Contact"\r
                        x-line-number="249"\r
                        x-column="6"\r
                        x-component="span"\r
                        x-id="Contact_249_6"\r
                        x-dynamic="false"\r
                        >→</span\r
                      ></a\r
                    >\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-6"\r
                  x-file-name="Contact"\r
                  x-line-number="127"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Contact_127_10"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="terminal corners"\r
                    x-file-name="Contact"\r
                    x-line-number="128"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Contact_128_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="terminal-bar"\r
                      x-file-name="Contact"\r
                      x-line-number="135"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Contact_135_14"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="terminal-dot"\r
                        x-file-name="Contact"\r
                        x-line-number="136"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Contact_136_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="terminal-dot"\r
                        x-file-name="Contact"\r
                        x-line-number="137"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Contact_137_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="terminal-dot"\r
                        x-file-name="Contact"\r
                        x-line-number="138"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Contact_138_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="ml-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500"\r
                        x-file-name="Contact"\r
                        x-line-number="139"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Contact_139_16"\r
                        x-dynamic="false"\r
                        >send_message.sh</span\r
                      >\r
                    </div>\r
                    <form\r
                      data-testid="contact-form"\r
                      class="p-6 md:p-8 space-y-5"\r
                      x-file-name="Contact"\r
                      x-line-number="144"\r
                      x-column="14"\r
                      x-component="form"\r
                      x-id="Contact_144_14"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        x-file-name="Contact"\r
                        x-line-number="212"\r
                        x-column="4"\r
                        x-component="div"\r
                        x-id="Contact_212_4"\r
                        x-dynamic="false"\r
                      >\r
                        <label\r
                          class="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2"\r
                          x-file-name="Contact"\r
                          x-line-number="213"\r
                          x-column="6"\r
                          x-component="label"\r
                          x-id="Contact_213_6"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="label"\r
                          x-source-editable="false"\r
                          >// your name</label\r
                        ><input\r
                          placeholder="Jane Doe"\r
                          data-testid="contact-input-name"\r
                          class="w-full bg-transparent border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="216"\r
                          x-column="6"\r
                          x-component="input"\r
                          x-id="Contact_216_6"\r
                          x-dynamic="false"\r
                          type="text"\r
                          value=""\r
                          name="name"\r
                        />\r
                      </div>\r
                      <div\r
                        x-file-name="Contact"\r
                        x-line-number="212"\r
                        x-column="4"\r
                        x-component="div"\r
                        x-id="Contact_212_4"\r
                        x-dynamic="false"\r
                      >\r
                        <label\r
                          class="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2"\r
                          x-file-name="Contact"\r
                          x-line-number="213"\r
                          x-column="6"\r
                          x-component="label"\r
                          x-id="Contact_213_6"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="label"\r
                          x-source-editable="false"\r
                          >// your email</label\r
                        ><input\r
                          placeholder="jane@company.com"\r
                          data-testid="contact-input-email"\r
                          class="w-full bg-transparent border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="216"\r
                          x-column="6"\r
                          x-component="input"\r
                          x-id="Contact_216_6"\r
                          x-dynamic="false"\r
                          type="email"\r
                          value=""\r
                          name="email"\r
                        />\r
                      </div>\r
                      <div\r
                        x-file-name="Contact"\r
                        x-line-number="166"\r
                        x-column="16"\r
                        x-component="div"\r
                        x-id="Contact_166_16"\r
                        x-dynamic="false"\r
                      >\r
                        <label\r
                          class="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2"\r
                          x-file-name="Contact"\r
                          x-line-number="167"\r
                          x-column="18"\r
                          x-component="label"\r
                          x-id="Contact_167_18"\r
                          x-dynamic="false"\r
                          >// your message</label\r
                        ><textarea\r
                          name="message"\r
                          data-testid="contact-input-message"\r
                          rows="5"\r
                          placeholder="Tell me about the role / project..."\r
                          class="w-full bg-transparent border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--accent)] resize-none"\r
                          x-file-name="Contact"\r
                          x-line-number="170"\r
                          x-column="18"\r
                          x-component="textarea"\r
                          x-id="Contact_170_18"\r
                          x-dynamic="false"\r
                        ></textarea>\r
                      </div>\r
                      <button\r
                        type="submit"\r
                        data-testid="contact-submit-btn"\r
                        class="btn-block w-full inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-black px-5 py-3 text-xs uppercase tracking-[0.2em] font-bold disabled:opacity-60 disabled:cursor-not-allowed"\r
                        x-file-name="Contact"\r
                        x-line-number="181"\r
                        x-column="16"\r
                        x-component="button"\r
                        x-id="Contact_181_16"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-send w-4 h-4"\r
                          aria-hidden="true"\r
                          x-file-name="Contact"\r
                          x-line-number="193"\r
                          x-column="22"\r
                          x-component="Send"\r
                          x-id="Contact_193_22"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"\r
                          ></path>\r
                          <path d="m21.854 2.147-10.94 10.939"></path>\r
                        </svg>\r
                        Send message\r
                      </button>\r
                      <p\r
                        class="text-[10px] uppercase tracking-[0.2em] text-zinc-600 leading-relaxed"\r
                        x-file-name="Contact"\r
                        x-line-number="198"\r
                        x-column="16"\r
                        x-component="p"\r
                        x-id="Contact_198_16"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="personal"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="3"\r
                        x-source-path="email"\r
                        x-source-editable="true"\r
                      >\r
                        Messages route directly to\r
                        <span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Contact"\r
                          x-line-number="198"\r
                          x-column="16"\r
                          x-component="p"\r
                          x-id="Contact_198_16_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="static-imported"\r
                          x-source-var="personal"\r
                          x-source-file="@/data/resumeData"\r
                          x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                          x-source-line="3"\r
                          x-source-path="email"\r
                          x-source-editable="true"\r
                          style="display: contents"\r
                          >manmohanjangra2528@gmail.com</span\r
                        >\r
                        via EmailJS.\r
                      </p>\r
                    </form>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <footer\r
            data-testid="footer"\r
            class="border-t border-white/10 py-10 text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
            x-file-name="Footer"\r
            x-line-number="5"\r
            x-column="4"\r
            x-component="footer"\r
            x-id="Footer_5_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4"\r
              x-file-name="Footer"\r
              x-line-number="9"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Footer_9_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                x-file-name="Footer"\r
                x-line-number="10"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Footer_10_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                ©\r
                <span\r
                  data-ve-dynamic="true"\r
                  x-excluded="true"\r
                  x-file-name="Footer"\r
                  x-line-number="10"\r
                  x-column="8"\r
                  x-component="div"\r
                  x-id="Footer_10_8_expr1"\r
                  x-dynamic="true"\r
                  x-source-type="computed"\r
                  x-source-editable="false"\r
                  style="display: contents"\r
                  >2026</span\r
                >\r
                <span\r
                  data-ve-dynamic="true"\r
                  x-excluded="true"\r
                  x-file-name="Footer"\r
                  x-line-number="10"\r
                  x-column="8"\r
                  x-component="div"\r
                  x-id="Footer_10_8_expr3"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="personal"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="3"\r
                  x-source-path="name"\r
                  x-source-editable="true"\r
                  style="display: contents"\r
                  >Manmohan Jangra</span\r
                >\r
                · Built in React\r
              </div>\r
              <div\r
                class="flex items-center gap-4"\r
                x-file-name="Footer"\r
                x-line-number="13"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Footer_13_8"\r
                x-dynamic="false"\r
              >\r
                <a\r
                  href="mailto:manmohanjangra2528@gmail.com"\r
                  class="hover:text-[var(--accent)] transition-colors"\r
                  data-testid="footer-email"\r
                  x-file-name="Footer"\r
                  x-line-number="14"\r
                  x-column="10"\r
                  x-component="a"\r
                  x-id="Footer_14_10"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="personal"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="3"\r
                  x-source-path="email"\r
                  x-source-editable="true"\r
                  >manmohanjangra2528@gmail.com</a\r
                ><span\r
                  class="text-zinc-700"\r
                  x-file-name="Footer"\r
                  x-line-number="21"\r
                  x-column="10"\r
                  x-component="span"\r
                  x-id="Footer_21_10"\r
                  x-dynamic="false"\r
                  >/</span\r
                ><a\r
                  href="https://www.linkedin.com/in/manmohanjangra"\r
                  target="_blank"\r
                  rel="noopener noreferrer"\r
                  class="hover:text-[var(--accent)] transition-colors"\r
                  data-testid="footer-linkedin"\r
                  x-file-name="Footer"\r
                  x-line-number="22"\r
                  x-column="10"\r
                  x-component="a"\r
                  x-id="Footer_22_10"\r
                  x-dynamic="false"\r
                  >LinkedIn</a\r
                >\r
              </div>\r
            </div>\r
          </footer>\r
        </main>\r
        <section\r
          aria-label="Notifications alt+T"\r
          tabindex="-1"\r
          aria-live="polite"\r
          aria-relevant="additions text"\r
          aria-atomic="false"\r
        ></section>\r
      </div>\r
    </div>\r
    <!--\r
      This HTML file is a template.\r
      If you open it directly in the browser, you will see an empty page.\r
\r
      You can add webfonts, meta tags, or analytics to this file.\r
      The build step will place the bundled scripts into the <body> tag.\r
\r
      To begin the development, run \`npm start\` or \`yarn start\`.\r
      To create a production bundle, use \`npm run build\` or \`yarn build\`.\r
    -->\r
\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/static/web-vitals.js?v=1.396.2"\r
    ><\/script>\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/static/dead-clicks-autocapture.js?v=1.396.2"\r
    ><\/script>\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/static/surveys.js?v=1.396.2"\r
    ><\/script>\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/static/posthog-recorder.js?v=1.396.2"\r
    ><\/script>\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/array/phc_xAvL2Iq4tFmANRE7kzbKwaSqp1HJjN7x48s3vr0CMjs/config.js"\r
    ><\/script>\r
    <script>\r
      !(function (t, e) {\r
        var o, n, p, r;\r
        e.__SV ||\r
          ((window.posthog = e),\r
          (e._i = []),\r
          (e.init = function (i, s, a) {\r
            function g(t, e) {\r
              var o = e.split(".");\r
              (2 == o.length && ((t = t[o[0]]), (e = o[1])),\r
                (t[e] = function () {\r
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)));\r
                }));\r
            }\r
            (((p = t.createElement("script")).type = "text/javascript"),\r
              (p.crossOrigin = "anonymous"),\r
              (p.async = !0),\r
              (p.src =\r
                s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") +\r
                "/static/array.js"),\r
              (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(\r
                p,\r
                r,\r
              ));\r
            var u = e;\r
            for (\r
              void 0 !== a ? (u = e[a] = []) : (a = "posthog"),\r
                u.people = u.people || [],\r
                u.toString = function (t) {\r
                  var e = "posthog";\r
                  return (\r
                    "posthog" !== a && (e += "." + a),\r
                    t || (e += " (stub)"),\r
                    e\r
                  );\r
                },\r
                u.people.toString = function () {\r
                  return u.toString(1) + ".people (stub)";\r
                },\r
                o =\r
                  "init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(\r
                    " ",\r
                  ),\r
                n = 0;\r
              n < o.length;\r
              n++\r
            )\r
              g(u, o[n]);\r
            e._i.push([i, s, a]);\r
          }),\r
          (e.__SV = 1));\r
      })(document, window.posthog || []);\r
      posthog.init("phc_xAvL2Iq4tFmANRE7kzbKwaSqp1HJjN7x48s3vr0CMjs", {\r
        api_host: "https://us.i.posthog.com",\r
        person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well,\r
        session_recording: {\r
          recordCrossOriginIframes: true,\r
          capturePerformance: false,\r
        },\r
      });\r
    <\/script>\r
    <script>\r
      (function () {\r
        function c() {\r
          var b = a.contentDocument || a.contentWindow.document;\r
          if (b) {\r
            var d = b.createElement("script");\r
            d.innerHTML =\r
              "window.__CF$cv$params={r:'a13bc6594dc5bf12',t:'MTc4MjgwNzg2OA=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";\r
            b.getElementsByTagName("head")[0].appendChild(d);\r
          }\r
        }\r
        if (document.body) {\r
          var a = document.createElement("iframe");\r
          a.height = 1;\r
          a.width = 1;\r
          a.style.position = "absolute";\r
          a.style.top = 0;\r
          a.style.left = 0;\r
          a.style.border = "none";\r
          a.style.visibility = "hidden";\r
          document.body.appendChild(a);\r
          if ("loading" !== document.readyState) c();\r
          else if (window.addEventListener)\r
            document.addEventListener("DOMContentLoaded", c);\r
          else {\r
            var e = document.onreadystatechange || function () {};\r
            document.onreadystatechange = function (b) {\r
              e(b);\r
              "loading" !== document.readyState &&\r
                ((document.onreadystatechange = e), c());\r
            };\r
          }\r
        }\r
      })();\r
    <\/script>\r
    <iframe\r
      height="1"\r
      width="1"\r
      style="\r
        position: absolute;\r
        top: 0px;\r
        left: 0px;\r
        border-width: medium;\r
        border-style: none;\r
        border-color: currentcolor;\r
        border-image: initial;\r
        visibility: hidden;\r
      "\r
    ></iframe>\r
    <script\r
      defer=""\r
      src="https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496"\r
      integrity="sha512-ZE9pZaUXND66v380QUtch/5sE9tPFh2zg45pR2PB0CVkCtOREv2AJKkSidISWkysEuQ0EH8faUU5du78bx87UQ=="\r
      data-cf-beacon='{"version":"2024.11.0","token":"7f7b0fd8732c4326aae4b9d58d5c514a","server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}'\r
      crossorigin="anonymous"\r
    ><\/script>\r
  </body>\r
</html>\r
`,
  xp = {
    class: "className",
    for: "htmlFor",
    tabindex: "tabIndex",
    crossorigin: "crossOrigin",
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
  };
function mp(k) {
  return k.split(";").reduce((P, S) => {
    const d = S.indexOf(":");
    if (d === -1) return P;
    const F = S.slice(0, d).trim(),
      U = S.slice(d + 1).trim();
    if (!F || !U) return P;
    const W = F.startsWith("--")
      ? F
      : F.replace(/-([a-z])/g, (J, w) => w.toUpperCase());
    return ((P[W] = U), P);
  }, {});
}
function kx(k, P = "root") {
  if (k.nodeType === Node.TEXT_NODE) return k.textContent;
  if (k.nodeType !== Node.ELEMENT_NODE) return null;
  const S = { key: P };
  for (const F of k.attributes) {
    const U = xp[F.name] || F.name;
    U === "style"
      ? (S.style = mp(F.value))
      : U === "value" && ["INPUT", "TEXTAREA"].includes(k.tagName)
        ? (S.defaultValue = F.value)
        : F.value === "" &&
            ["download", "disabled", "checked", "selected"].includes(U)
          ? (S[U] = !0)
          : (S[U] = F.value);
  }
  const d = Array.from(k.childNodes).map((F, U) => kx(F, `${P}-${U}`));
  return Je.createElement(k.tagName.toLowerCase(), S, ...d);
}
function fp() {
  const k = new DOMParser().parseFromString(dp, "text/html"),
    P = k.querySelector("main");
  return (
    k.querySelectorAll("section[id]").forEach((S, d) => {
      (S.setAttribute("data-aos", d === 0 ? "fade" : "fade-up"),
        S.setAttribute("data-aos-duration", d === 0 ? "900" : "700"),
        S.setAttribute("data-aos-easing", "ease-out-cubic"),
        S.setAttribute("data-aos-once", "true"),
        S.setAttribute("data-aos-offset", d === 0 ? "0" : "90"));
    }),
    {
      css: Array.from(k.querySelectorAll("head style")).map(
        (S) => S.textContent,
      ).join(`
`),
      main: P,
    }
  );
}
const pp = ["About", "Skills", "Experience", "Projects", "Contact"];
function Qp({ open: k, onNavigate: P }) {
  return k
    ? Vr.jsxs("div", {
        className:
          "fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden",
        children: [
          Vr.jsx("button", {
            type: "button",
            "aria-label": "Close menu",
            className: "absolute top-4 right-4 text-3xl text-white",
            onClick: () => P(null),
            children: "×",
          }),
          pp.map((S) =>
            Vr.jsx(
              "button",
              {
                type: "button",
                className:
                  "font-display text-xl uppercase tracking-[0.2em] text-white hover:text-[var(--accent)] transition-colors",
                onClick: () => P(S.toLowerCase()),
                children: S,
              },
              S,
            ),
          ),
        ],
      })
    : null;
}
function bp() {
  const [{ css: k, main: P }] = Je.useState(fp),
    [S, d] = Je.useState(!1),
    F = Je.useMemo(() => kx(P), [P]),
    U = (w) => {
      (d(!1),
        w &&
          document.getElementById(w)?.scrollIntoView({ behavior: "smooth" }));
    };
  (Je.useEffect(() => {
    Ox.init({
      once: !0,
      mirror: !1,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
    const w = window.setTimeout(() => Ox.refreshHard(), 100);
    return () => window.clearTimeout(w);
  }, []),
    Je.useEffect(() => {
      const w = document.querySelector('[data-testid="navbar"]'),
        p = () => {
          (w?.classList.toggle("bg-black/80", window.scrollY > 20),
            w?.classList.toggle("backdrop-blur-md", window.scrollY > 20),
            w?.classList.toggle("border-b", window.scrollY > 20),
            w?.classList.toggle("border-white/10", window.scrollY > 20));
        };
      return (
        p(),
        window.addEventListener("scroll", p, { passive: !0 }),
        () => window.removeEventListener("scroll", p)
      );
    }, []));
  const W = (w) => {
      const p = w.target.closest("button, a");
      if (!p) return;
      const C = p.dataset.testid || "";
      if (C === "navbar-mobile-toggle") {
        (w.preventDefault(), d(!0));
        return;
      }
      if (C === "navbar-logo") {
        (w.preventDefault(), U("hero"));
        return;
      }
      if (C.startsWith("nav-link-")) {
        (w.preventDefault(), U(C.replace("nav-link-", "")));
        return;
      }
      C === "hero-contact-btn" && (w.preventDefault(), U("contact"));
    },
    J = (w) => {
      if (!w.target.matches('[data-testid="contact-form"]')) return;
      w.preventDefault();
      const p = new FormData(w.target),
        C = encodeURIComponent(
          `Portfolio enquiry from ${p.get("name") || "a visitor"}`,
        ),
        O = encodeURIComponent(`${p.get("message") || ""}

From: ${p.get("name") || ""}
Email: ${p.get("email") || ""}`);
      window.location.href = `mailto:manmohanjangra2528@gmail.com?subject=${C}&body=${O}`;
    };
  return Vr.jsxs(Vr.Fragment, {
    children: [
      Vr.jsx("style", { children: k }),
      Vr.jsx("div", { className: "App", onClick: W, onSubmit: J, children: F }),
      Vr.jsx(Qp, { open: S, onNavigate: U }),
    ],
  });
}
op.createRoot(document.getElementById("root")).render(
  Vr.jsx(Je.StrictMode, { children: Vr.jsx(bp, {}) }),
);
