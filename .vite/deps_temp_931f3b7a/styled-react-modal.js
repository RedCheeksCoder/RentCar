import {
  require_react_dom
} from "./chunk-UWZXFKA6.js";
import {
  ut
} from "./chunk-IZQGXNK6.js";
import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/styled-react-modal/build/mjs/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var c = ut.div.withConfig({ displayName: "baseStyles__BaseModalBackground" })(["display:flex;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:30;background-color:rgba(0,0,0,0.5);align-items:center;justify-content:center;"]);
function l(e, n2) {
  (null == n2 || n2 > e.length) && (n2 = e.length);
  for (var r2 = 0, t2 = new Array(n2); r2 < n2; r2++)
    t2[r2] = e[r2];
  return t2;
}
function i(e, n2) {
  return function(e2) {
    if (Array.isArray(e2))
      return e2;
  }(e) || function(e2, n3) {
    var r2 = null == e2 ? null : "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
    if (null != r2) {
      var t2, o2, a2 = [], c2 = true, l2 = false;
      try {
        for (r2 = r2.call(e2); !(c2 = (t2 = r2.next()).done) && (a2.push(t2.value), !n3 || a2.length !== n3); c2 = true)
          ;
      } catch (e3) {
        l2 = true, o2 = e3;
      } finally {
        try {
          c2 || null == r2.return || r2.return();
        } finally {
          if (l2)
            throw o2;
        }
      }
      return a2;
    }
  }(e, n2) || function(e2, n3) {
    if (e2) {
      if ("string" == typeof e2)
        return l(e2, n3);
      var r2 = Object.prototype.toString.call(e2).slice(8, -1);
      return "Object" === r2 && e2.constructor && (r2 = e2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(e2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? l(e2, n3) : void 0;
    }
  }(e, n2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function u() {
}
function p() {
}
p.resetWarningCache = u;
var f;
var s;
var d = function() {
  function e(e2, n3, r3, t2, o2, a2) {
    if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a2) {
      var c2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw c2.name = "Invariant Violation", c2;
    }
  }
  function n2() {
    return e;
  }
  e.isRequired = e;
  var r2 = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: n2, element: e, elementType: e, instanceOf: n2, node: e, objectOf: n2, oneOf: n2, oneOfType: n2, shape: n2, exact: n2, checkPropTypes: p, resetWarningCache: u };
  return r2.PropTypes = r2, r2;
};
var y = (f = function(e) {
  e.exports = d();
}, f(s = { exports: {} }, s.exports), s.exports);
var m = y;
var b = import_react.default.createContext({});
var v = b.Provider;
var g = b.Consumer;
function h(e) {
  var a2 = e.backgroundComponent, l2 = e.children, u2 = (0, import_react.useRef)(null), p2 = i((0, import_react.useState)(null), 2), f2 = p2[0], s2 = p2[1], d2 = i((0, import_react.useState)(c), 2), y2 = d2[0], m2 = d2[1];
  return (0, import_react.useEffect)(function() {
    a2 && m2(a2);
  }, [m2, a2]), (0, import_react.useEffect)(function() {
    s2(u2.current);
  }, [s2, u2]), import_react.default.createElement(v, { value: { modalNode: f2, BackgroundComponent: y2 } }, l2, import_react.default.createElement("div", { ref: u2 }));
}
function O() {
  return O = Object.assign ? Object.assign.bind() : function(e) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var r2 = arguments[n2];
      for (var t2 in r2)
        Object.prototype.hasOwnProperty.call(r2, t2) && (e[t2] = r2[t2]);
    }
    return e;
  }, O.apply(this, arguments);
}
function w(e, n2) {
  if (null == e)
    return {};
  var r2, t2, o2 = function(e2, n3) {
    if (null == e2)
      return {};
    var r3, t3, o3 = {}, a3 = Object.keys(e2);
    for (t3 = 0; t3 < a3.length; t3++)
      r3 = a3[t3], n3.indexOf(r3) >= 0 || (o3[r3] = e2[r3]);
    return o3;
  }(e, n2);
  if (Object.getOwnPropertySymbols) {
    var a2 = Object.getOwnPropertySymbols(e);
    for (t2 = 0; t2 < a2.length; t2++)
      r2 = a2[t2], n2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r2) && (o2[r2] = e[r2]);
  }
  return o2;
}
h.propTypes = { backgroundComponent: m.oneOfType([m.element, m.object]) };
var C = ["WrapperComponent", "children", "onBackgroundClick", "onEscapeKeydown", "allowScroll", "beforeOpen", "afterOpen", "beforeClose", "afterClose", "backgroundProps", "isOpen"];
function k(e) {
  for (var n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), t2 = 1; t2 < n2; t2++)
    r2[t2 - 1] = arguments[t2];
  e && e.apply(void 0, r2);
}
function E(e) {
  var c2, l2 = e.WrapperComponent, u2 = e.children, p2 = e.onBackgroundClick, f2 = e.onEscapeKeydown, s2 = e.allowScroll, d2 = e.beforeOpen, y2 = e.afterOpen, m2 = e.beforeClose, b2 = e.afterClose, v2 = e.backgroundProps, h2 = e.isOpen, E2 = w(e, C), j = (0, import_react.useRef)(null), P = (0, import_react.useRef)(null), S = (0, import_react.useRef)(false), T = i((0, import_react.useState)(false), 2), _ = T[0], x = T[1];
  function A(e2) {
    j.current === e2.target && p2 && p2(e2);
  }
  return (0, import_react.useEffect)(function() {
    function e2(e3) {
      x(e3), k(e3 ? y2 : b2);
    }
    function n2(n3) {
      if (n3) {
        var r2 = n3();
        "function" == typeof (null == r2 ? void 0 : r2.then) ? (S.current = true, r2.then(function() {
          e2(h2), S.current = false;
        })) : e2(h2);
      } else
        e2(h2);
    }
    _ === h2 || S.current || n2(h2 ? d2 : m2);
  }, [S, _, h2, d2, m2, b2, y2]), (0, import_react.useEffect)(function() {
    function e2(e3) {
      "Escape" === e3.key && f2 && f2(e3);
    }
    return _ && document.addEventListener("keydown", e2), function() {
      document.removeEventListener("keydown", e2);
    };
  }, [_, f2]), (0, import_react.useEffect)(function() {
    return _ && !s2 && (P.current = document.body.style.overflow, document.body.style.overflow = "hidden"), function() {
      s2 || (document.body.style.overflow = P.current || "");
    };
  }, [_, s2]), c2 = l2 ? import_react.default.createElement(l2, E2, u2) : u2, import_react.default.createElement(g, null, function(e2) {
    var r2 = e2.modalNode, t2 = e2.BackgroundComponent;
    return r2 && t2 && _ ? import_react_dom.default.createPortal(import_react.default.createElement(t2, O({}, v2, { onClick: A, ref: j }), c2), r2) : null;
  });
}
E.styled = function() {
  for (var r2 = arguments.length, t2 = new Array(r2), o2 = 0; o2 < r2; o2++)
    t2[o2] = arguments[o2];
  var a2 = t2 ? ut.div.withConfig({ displayName: "Modal__wrap" }).apply(void 0, t2) : ut.div.withConfig({ displayName: "Modal__wrap" })();
  return function(e) {
    return import_react.default.createElement(E, O({ WrapperComponent: a2 }, e));
  };
}, E.defaultProps = { backgroundProps: {} }, E.propTypes = { WrapperComponent: m.oneOfType([m.element, m.object]), onBackgroundClick: m.func, onEscapeKeydown: m.func, allowScroll: m.bool, beforeOpen: m.func, afterOpen: m.func, beforeClose: m.func, afterClose: m.func, backgroundProps: m.object, isOpen: m.bool };
export {
  c as BaseModalBackground,
  h as ModalProvider,
  E as default
};
//# sourceMappingURL=styled-react-modal.js.map
