(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/preact/dist/preact.module.js
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3, r3, o3, f3 = {};
    for (o3 in u3)
      o3 == "key" ? t3 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (o3 in l3.defaultProps)
        f3[o3] === void 0 && (f3[o3] = l3.defaultProps[o3]);
    return y(l3, f3, t3, r3, null);
  }
  function y(n2, i3, t3, r3, o3) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o3 == null ? ++u : o3 };
    return o3 == null && l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, r3, o3;
        n3.__d && (r3 = (t3 = (l3 = n3).__v).__e, (o3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(o3, t3, i3, l3.__n, o3.ownerSVGElement !== void 0, t3.__h != null ? [r3] : null, u3, r3 == null ? k(t3) : r3, t3.__h), z(u3, t3), t3.__e != r3 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, r3, o3, f3, s3, a3) {
    var h2, v3, p2, _2, b3, m3, g3, w3 = i3 && i3.__k || c, A2 = w3.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if ((_2 = u3.__k[h2] = (_2 = l3[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
        if (_2.__ = u3, _2.__b = u3.__b + 1, (p2 = w3[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
          w3[h2] = void 0;
        else
          for (v3 = 0; v3 < A2; v3++) {
            if ((p2 = w3[v3]) && _2.key == p2.key && _2.type === p2.type) {
              w3[v3] = void 0;
              break;
            }
            p2 = null;
          }
        j(n2, _2, p2 = p2 || e, t3, r3, o3, f3, s3, a3), b3 = _2.__e, (v3 = _2.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), b3 != null ? (m3 == null && (m3 = b3), typeof _2.type == "function" && _2.__k === p2.__k ? _2.__d = s3 = x(_2, s3, n2) : s3 = P(n2, _2, p2, w3, b3, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p2.__e == s3 && s3.parentNode != n2 && (s3 = k(p2));
      }
    for (u3.__e = m3, h2 = A2; h2--; )
      w3[h2] != null && (typeof u3.type == "function" && w3[h2].__e != null && w3[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w3[h2], w3[h2]));
    if (g3)
      for (h2 = 0; h2 < g3.length; h2++)
        M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function P(n2, l3, u3, i3, t3, r3) {
    var o3, f3, e3;
    if (l3.__d !== void 0)
      o3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != r3 || t3.parentNode == null)
      n:
        if (r3 == null || r3.parentNode !== n2)
          n2.appendChild(t3), o3 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o3 = r3;
        }
    return o3 !== void 0 ? o3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      r3 === "children" || r3 === "key" || r3 in l3 || H(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && typeof l3[r3] != "function" || r3 === "children" || r3 === "key" || r3 === "value" || r3 === "checked" || u3[r3] === l3[r3] || H(n2, r3, l3[r3], u3[r3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var r3;
    n:
      if (l3 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if (l3[0] === "o" && l3[1] === "n")
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? T : I, r3) : n2.removeEventListener(l3, r3 ? T : I, r3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, r3, o3, f3, e3, c3) {
    var s3, h2, v3, y3, p2, k3, b3, m3, g3, x3, A2, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (m3 = u3.props, g3 = (s3 = P2.contextType) && t3[s3.__c], x3 = s3 ? g3 ? g3.props.value : s3.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h2 = new P2(m3, x3) : (u3.__c = h2 = new _(m3, x3), h2.constructor = P2, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))), y3 = h2.props, p2 = h2.state, v3)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m3 !== y3 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x3), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x3) === false || u3.__v === i3.__v) {
              h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x3), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y3, p2, k3);
            });
          }
          h2.context = x3, h2.props = m3, h2.state = h2.__s, (s3 = l.__r) && s3(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t3 = a(a({}, t3), h2.getChildContext())), v3 || h2.getSnapshotBeforeUpdate == null || (k3 = h2.getSnapshotBeforeUpdate(y3, p2)), A2 = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, r3, o3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          o3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, r3, o3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || o3 != null) && (u3.__e = e3, u3.__h = !!c3, o3[o3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, r3, o3, f3, c3) {
    var s3, a3, v3, y3 = i3.props, p2 = u3.props, d2 = u3.type, _2 = 0;
    if (d2 === "svg" && (r3 = true), o3 != null) {
      for (; _2 < o3.length; _2++)
        if ((s3 = o3[_2]) && (s3 === l3 || (d2 ? s3.localName == d2 : s3.nodeType == 3))) {
          l3 = s3, o3[_2] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d2 === null)
        return document.createTextNode(p2);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o3 = null, c3 = false;
    }
    if (d2 === null)
      y3 === p2 || c3 && l3.data === p2 || (l3.data = p2);
    else {
      if (o3 = o3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (y3 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
            y3[l3.attributes[_2].name] = l3.attributes[_2].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p2, y3, r3, c3), v3)
        u3.__k = [];
      else if (_2 = u3.props.children, w(l3, Array.isArray(_2) ? _2 : [_2], u3, i3, t3, r3 && d2 !== "foreignObject", o3, f3, o3 ? o3[0] : i3.__k && k(i3, 0), c3), o3 != null)
        for (_2 = o3.length; _2--; )
          o3[_2] != null && h(o3[_2]);
      c3 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== l3.value || d2 === "progress" && !_2) && H(l3, "value", _2, y3.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l3.checked && H(l3, "checked", _2, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && N(t3[r3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var r3, o3, f3;
    l.__ && l.__(u3, i3), o3 = (r3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!r3 && t3 || i3).__k = v(d, null, [u3]), o3 || e, e, i3.ownerSVGElement !== void 0, !r3 && t3 ? [t3] : o3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o3 ? o3.__e : i3.firstChild, r3), z(f3, u3);
  }
  var n, l, u, i, t, r, o, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = c.slice, l = { __e: function(n2, l3) {
        for (var u3, i3, t3; l3 = l3.__; )
          if ((u3 = l3.__c) && !u3.__)
            try {
              if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
                return u3.__E = u3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return n2 != null && n2.constructor === void 0;
      }, _.prototype.setState = function(n2, l3) {
        var u3;
        u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
      }, _.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function l2(n2) {
    return o2 = 1, p(w2, n2);
  }
  function p(n2, r3, o3) {
    var i3 = m2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function y2(r3, o3) {
    var i3 = m2(t2++, 3);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function s2(n2) {
    return o2 = 5, A(function() {
      return { current: n2 };
    }, []);
  }
  function A(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function F(n2, t3) {
    return o2 = 8, A(function() {
      return n2;
    }, t3);
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
    }), i2 = [];
  }
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }
  var t2, u2, r2, o2, i2, c2, f2, e2, a2, v2, b2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      i2 = [];
      c2 = l.__b;
      f2 = l.__r;
      e2 = l.diffed;
      a2 = l.__c;
      v2 = l.unmount;
      l.__b = function(n2) {
        u2 = null, c2 && c2(n2);
      }, l.__r = function(n2) {
        f2 && f2(n2), t2 = 0;
        var r3 = (u2 = n2.__c).__H;
        r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
      }, l.diffed = function(t3) {
        e2 && e2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
          var t4, u3 = function() {
            clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
          }, r3 = setTimeout(u3, 100);
          b2 && (t4 = requestAnimationFrame(u3));
        })(x2)), u2 = null;
      }, l.__c = function(t3, u3) {
        u3.some(function(t4) {
          try {
            t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || j2(n2);
            });
          } catch (r3) {
            u3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), u3 = [], l.__e(r3, t4.__v);
          }
        }), a2 && a2(t3, u3);
      }, l.unmount = function(t3) {
        v2 && v2(t3);
        var u3 = t3.__c;
        if (u3 && u3.__H)
          try {
            u3.__H.__.forEach(g2);
          } catch (t4) {
            l.__e(t4, u3.__v);
          }
      };
      b2 = typeof requestAnimationFrame == "function";
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/f488214d-3bae-4a8e-b866-2d857f1dcfcd/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/f488214d-3bae-4a8e-b866-2d857f1dcfcd/loading-indicator.js"() {
      if (document.getElementById("3e471cbf50") === null) {
        const element = document.createElement("style");
        element.id = "3e471cbf50";
        element.textContent = `._loadingIndicator_12ibq_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_12ibq_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_12ibq_1 0.5s linear infinite;
  fill: currentColor;
}
._accent_12ibq_17 {
  fill: var(--color-accent);
}
._black-30_12ibq_20 {
  fill: var(--color-black-30);
}
._black-80_12ibq_23 {
  fill: var(--color-black-80);
}
._blue_12ibq_26 {
  fill: var(--color-blue);
}
._white_12ibq_29 {
  fill: var(--color-white);
}
._white-20_12ibq_32 {
  fill: var(--color-white-20-translucent);
}
._white-40_12ibq_35 {
  fill: var(--color-white-40-translucent);
}

@keyframes _rotating_12ibq_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpREFBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xvYWRpbmctaW5kaWNhdG9yL2xvYWRpbmctaW5kaWNhdG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4uYWNjZW50IHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cbi5ibGFjay0zMCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5ibGFjay04MCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbn1cbi5ibHVlIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG4ud2hpdGUge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4ud2hpdGUtMjAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS0yMC10cmFuc2x1Y2VudCk7XG59XG4ud2hpdGUtNDAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS00MC10cmFuc2x1Y2VudCk7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_default = { "loadingIndicator": "_loadingIndicator_12ibq_1", "svg": "_svg_12ibq_8", "rotating": "_rotating_12ibq_1", "accent": "_accent_12ibq_17", "black-30": "_black-30_12ibq_20", "black-80": "_black-80_12ibq_23", "blue": "_blue_12ibq_26", "white": "_white_12ibq_29", "white-20": "_white-20_12ibq_32", "white-40": "_white-40_12ibq_35" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_default.loadingIndicator }), v("svg", { class: createClassName([
      loading_indicator_default.svg,
      typeof color === "undefined" ? null : loading_indicator_default[color]
    ]) }, v("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_class_name();
      init_loading_indicator();
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/43a25a5d-7634-48e9-a532-0397ba84b050/button.js
  var button_default;
  var init_button = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/43a25a5d-7634-48e9-a532-0397ba84b050/button.js"() {
      if (document.getElementById("bec151256b") === null) {
        const element = document.createElement("style");
        element.id = "bec151256b";
        element.textContent = `._button_29iow_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}
._button_29iow_1 button {
  display: inline-block;
  height: 44px;
  border-radius: var(--border-radius-6);
  color: white;
}

._disabled_29iow_13 {
  opacity: var(--opacity-30);
}
._disabled_29iow_13 button {
  cursor: not-allowed;
}

._primary_29iow_20 {
  color: var(
    --color-white
  ); /* Set the color of the \`button\` element and \`LoadingIndicator\` */
}
._primary_29iow_20 button {
  padding: 12px 8px;
  background-color: #C8CCE5;
  line-height: 20px;
}
._primary_29iow_20:not(._disabled_29iow_13) button:focus {
  border-color: var(--color-black-30-translucent);
}
._primary_29iow_20._destructive_29iow_33 {
  color: var(--color-white);
}
._primary_29iow_20._destructive_29iow_33 button {
  background-color: var(--color-red);
}
._primary_29iow_20._disabled_29iow_13 button {
  background-color: var(#98A2B3);
}

._secondary_29iow_43 {
  color: var(--color-black-80);
}
._secondary_29iow_43 button {
  padding: 0 15px;
  border: 1px solid var(--color-black-80);
  background-color: transparent;
  line-height: 30px;
}
._secondary_29iow_43:not(._disabled_29iow_13) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--color-accent);
  line-height: 28px;
}
._secondary_29iow_43._destructive_29iow_33 {
  color: var(--color-red);
}
._secondary_29iow_43._destructive_29iow_33 button {
  border-color: var(--color-red);
}
._secondary_29iow_43._destructive_29iow_33:not(._disabled_29iow_13) button:focus {
  border-color: var(--color-red);
}

._fullWidth_29iow_68 {
  display: block;
}
._fullWidth_29iow_68 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._loading_29iow_79 button {
  color: rgba(0, 0, 0, 0); /* Hide the button text */
}
._loadingIndicator_29iow_82 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOztHQUVDLEVBQUUsaUVBQWlFO0FBQ3RFO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUIsRUFBRSx5QkFBeUI7QUFDcEQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJ1dHRvbiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy02KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcbn1cbi5kaXNhYmxlZCBidXR0b24ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoXG4gICAgLS1jb2xvci13aGl0ZVxuICApOyAvKiBTZXQgdGhlIGNvbG9yIG9mIHRoZSBgYnV0dG9uYCBlbGVtZW50IGFuZCBgTG9hZGluZ0luZGljYXRvcmAgKi9cbn1cbi5wcmltYXJ5IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDQ0U1O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5wcmltYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMzAtdHJhbnNsdWNlbnQpO1xufVxuLnByaW1hcnkuZGVzdHJ1Y3RpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuLnByaW1hcnkuZGVzdHJ1Y3RpdmUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cbi5wcmltYXJ5LmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigjOThBMkIzKTtcbn1cblxuLnNlY29uZGFyeSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay04MCk7XG59XG4uc2Vjb25kYXJ5IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2stODApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uc2Vjb25kYXJ5LmRlc3RydWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4uc2Vjb25kYXJ5LmRlc3RydWN0aXZlIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cbi5zZWNvbmRhcnkuZGVzdHJ1Y3RpdmU6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xufVxuXG4uZnVsbFdpZHRoIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZnVsbFdpZHRoIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5sb2FkaW5nIGJ1dHRvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApOyAvKiBIaWRlIHRoZSBidXR0b24gdGV4dCAqL1xufVxuLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      button_default = { "button": "_button_29iow_1", "disabled": "_disabled_29iow_13", "primary": "_primary_29iow_20", "destructive": "_destructive_29iow_33", "secondary": "_secondary_29iow_43", "fullWidth": "_fullWidth_29iow_68", "loading": "_loading_29iow_79", "loadingIndicator": "_loadingIndicator_29iow_82" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, destructive = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "destructive", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = F(function(event) {
      if (event.key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        event.currentTarget.blur();
        return;
      }
      if (event.key === "Enter") {
        event.stopPropagation();
      }
    }, [propagateEscapeKeyDown]);
    return v("div", { class: createClassName([
      button_default.button,
      secondary === true ? button_default.secondary : button_default.primary,
      destructive === true ? button_default.destructive : null,
      fullWidth === true ? button_default.fullWidth : null,
      disabled === true ? button_default.disabled : null,
      loading === true ? button_default.loading : null
    ]) }, loading === true ? v("div", { class: button_default.loadingIndicator }, v(LoadingIndicator, null)) : null, v("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), children));
  }
  var init_button2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator2();
      init_button();
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/768b0a10-caa4-43b9-90cf-39dc197a0875/icon.js
  var icon_default;
  var init_icon = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/768b0a10-caa4-43b9-90cf-39dc197a0875/icon.js"() {
      if (document.getElementById("50d304fd59") === null) {
        const element = document.createElement("style");
        element.id = "50d304fd59";
        element.textContent = `._currentColor_1k010_1 {
  fill: currentColor;
}

._black-30_1k010_5 {
  fill: var(--color-black-30);
}
._black-80_1k010_8 {
  fill: var(--color-black-80);
}
._blue_1k010_11 {
  fill: var(--color-accent);
}
._green_1k010_14 {
  fill: var(--color-green);
}
._purple_1k010_17 {
  fill: var(--color-purple);
}
._red_1k010_20 {
  fill: var(--color-red);
}
._white_1k010_23 {
  fill: var(--color-white);
}
._white-20_1k010_26 {
  fill: var(--color-white-20-translucent);
}
._white-40_1k010_29 {
  fill: var(--color-white-40-translucent);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHVDQUF1QztBQUN6QyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50Q29sb3Ige1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5ibGFjay0zMCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5ibGFjay04MCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbn1cbi5ibHVlIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cbi5ncmVlbiB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWdyZWVuKTtcbn1cbi5wdXJwbGUge1xuICBmaWxsOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xufVxuLnJlZCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4ud2hpdGUge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4ud2hpdGUtMjAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS0yMC10cmFuc2x1Y2VudCk7XG59XG4ud2hpdGUtNDAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS00MC10cmFuc2x1Y2VudCk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_default = { "currentColor": "_currentColor_1k010_1", "black-30": "_black-30_1k010_5", "black-80": "_black-80_1k010_8", "blue": "_blue_1k010_11", "green": "_green_1k010_14", "purple": "_purple_1k010_17", "red": "_red_1k010_20", "white": "_white_1k010_23", "white-20": "_white-20_1k010_26", "white-40": "_white-40_1k010_29" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/icon/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return v("svg", __spreadProps(__spreadValues({}, rest), { class: typeof color === "undefined" ? icon_default.currentColor : icon_default[color], height, width, xmlns: "http://www.w3.org/2000/svg" }), v("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" }));
    };
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/icon/create-icon.js"() {
      init_preact_module();
      init_icon();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/icon/icon-16/icon-caret-right-16.js
  var IconCaretRight16;
  var init_icon_caret_right_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/icon/icon-16/icon-caret-right-16.js"() {
      init_create_icon();
      IconCaretRight16 = createIcon("M12 8 8 5v6l4-3Z", {
        height: 16,
        width: 16
      });
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/2a88a097-0b0a-47c9-a0d6-45bb7a2c8f0c/disclosure.js
  var disclosure_default;
  var init_disclosure = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/2a88a097-0b0a-47c9-a0d6-45bb7a2c8f0c/disclosure.js"() {
      if (document.getElementById("274847ef6a") === null) {
        const element = document.createElement("style");
        element.id = "274847ef6a";
        element.textContent = `._title_16lma_1,
._children_16lma_2 {
  padding: var(--space-extra-small) var(--space-small) var(--space-extra-small)
    var(--space-large);
}

._title_16lma_1 {
  position: relative;
  font-weight: var(--font-weight-bold);
}
._title_16lma_1:hover {
  background-color: var(--color-black-6-translucent);
}

._icon_16lma_15 {
  position: absolute;
  top: var(--space-extra-small);
  left: 0;
}
._isOpen_16lma_20 ._icon_16lma_15 {
  top: calc(var(--space-extra-small) - 2px);
  left: 2px;
  transform: rotate(90deg);
}

._children_16lma_2 {
  display: none;
}
._isOpen_16lma_20 ._children_16lma_2 {
  display: block;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kaXNjbG9zdXJlL2Rpc2Nsb3N1cmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO3NCQUNvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsT0FBTztBQUNUO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsU0FBUztFQUNULHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvZGlzY2xvc3VyZS9kaXNjbG9zdXJlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSxcbi5jaGlsZHJlbiB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSB2YXIoLS1zcGFjZS1zbWFsbCkgdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpXG4gICAgdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbn1cbi50aXRsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTYtdHJhbnNsdWNlbnQpO1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGxlZnQ6IDA7XG59XG4uaXNPcGVuIC5pY29uIHtcbiAgdG9wOiBjYWxjKHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSAtIDJweCk7XG4gIGxlZnQ6IDJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmlzT3BlbiAuY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      disclosure_default = { "title": "_title_16lma_1", "children": "_children_16lma_2", "icon": "_icon_16lma_15", "isOpen": "_isOpen_16lma_20" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/disclosure/disclosure.js
  function Disclosure(_a) {
    var _b = _a, { children, onClick, isOpen, title } = _b, rest = __objRest(_b, ["children", "onClick", "isOpen", "title"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: isOpen === true ? disclosure_default.isOpen : void 0 }), v("div", { class: disclosure_default.title, onClick }, v("div", { class: disclosure_default.icon }, v(IconCaretRight16, null)), title), v("div", { class: disclosure_default.children }, children));
  }
  var init_disclosure2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/disclosure/disclosure.js"() {
      init_preact_module();
      init_icon_caret_right_16();
      init_disclosure();
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/34500677-41df-4f3f-bf0e-350e50a1e767/divider.js
  var divider_default;
  var init_divider = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/34500677-41df-4f3f-bf0e-350e50a1e767/divider.js"() {
      if (document.getElementById("f210fb03b0") === null) {
        const element = document.createElement("style");
        element.id = "f210fb03b0";
        element.textContent = `._divider_b3ns9_1 {
  width: 100%;
  height: 1px;
  background-color: var(--color-silver);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kaXZpZGVyL2RpdmlkZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxxQ0FBcUM7QUFDdkMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2RpdmlkZXIvZGl2aWRlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2lsdmVyKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      divider_default = { "divider": "_divider_b3ns9_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/divider/divider.js
  function Divider(props) {
    return v("hr", __spreadProps(__spreadValues({}, props), { class: divider_default.divider }));
  }
  var init_divider2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/divider/divider.js"() {
      init_preact_module();
      init_divider();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/7a2923e9-a636-4885-8e62-5d04b9b26a1b/container.js
  var container_default;
  var init_container = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/7a2923e9-a636-4885-8e62-5d04b9b26a1b/container.js"() {
      if (document.getElementById("e22344c577") === null) {
        const element = document.createElement("style");
        element.id = "e22344c577";
        element.textContent = `._extraSmall_kslv9_1 {
  padding: 0 var(--space-extra-small);
}

._small_kslv9_5 {
  padding: 0 var(--space-small);
}

._medium_kslv9_9 {
  padding: 0 var(--space-medium);
}

._large_kslv9_13 {
  padding: 0 var(--space-large);
}

._extraLarge_kslv9_17 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvY29udGFpbmVyL2NvbnRhaW5lci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xheW91dC9jb250YWluZXIvY29udGFpbmVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG5cbi5zbWFsbCB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4ubWVkaXVtIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1tZWRpdW0pO1xufVxuXG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cblxuLmV4dHJhTGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      container_default = { "extraSmall": "_extraSmall_kslv9_1", "small": "_small_kslv9_5", "medium": "_medium_kslv9_9", "large": "_large_kslv9_13", "extraLarge": "_extraLarge_kslv9_17" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: container_default[space] }));
  }
  var init_container2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js"() {
      init_preact_module();
      init_container();
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/5e9a718f-6684-471e-ba50-42c5e6aef7ad/vertical-space.js
  var vertical_space_default;
  var init_vertical_space = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/5e9a718f-6684-471e-ba50-42c5e6aef7ad/vertical-space.js"() {
      if (document.getElementById("6fd16b8530") === null) {
        const element = document.createElement("style");
        element.id = "6fd16b8530";
        element.textContent = `._extraSmall_1f9m3_1 {
  height: var(--space-extra-small);
}

._small_1f9m3_5 {
  height: var(--space-small);
}

._medium_1f9m3_9 {
  height: var(--space-medium);
}

._large_1f9m3_13 {
  height: var(--space-large);
}

._extraLarge_1f9m3_17 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvdmVydGljYWwtc3BhY2UvdmVydGljYWwtc3BhY2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvdmVydGljYWwtc3BhY2UvdmVydGljYWwtc3BhY2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cblxuLnNtYWxsIHtcbiAgaGVpZ2h0OiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbi5tZWRpdW0ge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG5cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuXG4uZXh0cmFMYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      vertical_space_default = { "extraSmall": "_extraSmall_1f9m3_1", "small": "_small_1f9m3_5", "medium": "_medium_1f9m3_9", "large": "_large_1f9m3_13", "extraLarge": "_extraLarge_1f9m3_17" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_default[space] }));
  }
  var init_vertical_space2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_mixed_values();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js
  function isKeyCodeCharacterGenerating(keyCode) {
    return keyCode === 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222;
  }
  var init_is_keycode_character_generating = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js"() {
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/1ac953fb-0aeb-40ed-9c5f-2f3c43cf04db/textbox-multiline.js
  var textbox_multiline_default;
  var init_textbox_multiline = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/1ac953fb-0aeb-40ed-9c5f-2f3c43cf04db/textbox-multiline.js"() {
      if (document.getElementById("da1601ef1f") === null) {
        const element = document.createElement("style");
        element.id = "da1601ef1f";
        element.textContent = `._textboxMultiline_2dwzn_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._textarea_2dwzn_6 {
  display: block;
  width: 100%;
  padding: 6px 0 6px var(--space-extra-small);
  background-color: transparent;
  border-radius: var(--border-radius-2);
  color: var(--color-black-80);
  resize: none;
}
._textarea_2dwzn_6::placeholder {
  color: var(--color-black-30);
}
._disabled_2dwzn_18 ._textarea_2dwzn_6 {
  cursor: not-allowed;
  opacity: var(--opacity-30);
}

._border_2dwzn_23 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-width: 1px;
  border-color: var(--color-silver);
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._textboxMultiline_2dwzn_1:not(._disabled_2dwzn_18) ._textarea_2dwzn_6:focus ~ ._border_2dwzn_23 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--color-accent);
}
._noBorder_2dwzn_40 ._textarea_2dwzn_6:not(:focus) ~ ._border_2dwzn_23 {
  border-color: transparent;
}
._noBorder_2dwzn_40:not(._disabled_2dwzn_18) ._textarea_2dwzn_6:not(:focus):hover ~ ._border_2dwzn_23 {
  border-color: var(--color-silver);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbXVsdGlsaW5lL3RleHRib3gtbXVsdGlsaW5lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLDJDQUEyQztFQUMzQyw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbXVsdGlsaW5lL3RleHRib3gtbXVsdGlsaW5lLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94TXVsdGlsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xufVxuXG4udGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAwIDZweCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2stODApO1xuICByZXNpemU6IG5vbmU7XG59XG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5kaXNhYmxlZCAudGV4dGFyZWEge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcbn1cblxuLmJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zaWx2ZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50ZXh0Ym94TXVsdGlsaW5lOm5vdCguZGlzYWJsZWQpIC50ZXh0YXJlYTpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cbi5ub0JvcmRlciAudGV4dGFyZWE6bm90KDpmb2N1cykgfiAuYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5ub0JvcmRlcjpub3QoLmRpc2FibGVkKSAudGV4dGFyZWE6bm90KDpmb2N1cyk6aG92ZXIgfiAuYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zaWx2ZXIpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      textbox_multiline_default = { "textboxMultiline": "_textboxMultiline_2dwzn_1", "textarea": "_textarea_2dwzn_6", "disabled": "_disabled_2dwzn_18", "border": "_border_2dwzn_23", "noBorder": "_noBorder_2dwzn_40" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-multiline/textbox-multiline.js
  function TextboxMultiline(_a) {
    var _b = _a, { disabled = false, name, noBorder = false, onInput = function() {
    }, onValueInput = function() {
    }, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, rows = 3, spellCheck = false, validateOnBlur, value } = _b, rest = __objRest(_b, ["disabled", "name", "noBorder", "onInput", "onValueInput", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "rows", "spellCheck", "validateOnBlur", "value"]);
    const textAreaElementRef = s2(null);
    const isRevertOnEscapeKeyDownRef = s2(false);
    const [originalValue, setOriginalValue] = l2(EMPTY_STRING);
    const setTextAreaElementValue = F(function(value2) {
      const textAreaElement = getCurrentFromRef(textAreaElementRef);
      textAreaElement.value = value2;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      textAreaElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = F(function() {
      if (isRevertOnEscapeKeyDownRef.current === true) {
        isRevertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const result = validateOnBlur(value);
        if (typeof result === "string") {
          setTextAreaElementValue(result);
          setOriginalValue(EMPTY_STRING);
          return;
        }
        if (result === false) {
          if (value !== originalValue) {
            setTextAreaElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING);
          return;
        }
      }
      setOriginalValue(EMPTY_STRING);
    }, [originalValue, setTextAreaElementValue, validateOnBlur, value]);
    const handleFocus = F(function(event) {
      setOriginalValue(value);
      event.currentTarget.select();
    }, [value]);
    const handleInput = F(function(event) {
      onValueInput(event.currentTarget.value, name);
      onInput(event);
    }, [name, onInput, onValueInput]);
    const handleKeyDown = F(function(event) {
      if (event.key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          isRevertOnEscapeKeyDownRef.current = true;
          setTextAreaElementValue(originalValue);
          setOriginalValue(EMPTY_STRING);
        }
        event.currentTarget.blur();
        return;
      }
      if (value === MIXED_STRING && isKeyCodeCharacterGenerating(event.keyCode) === false) {
        event.preventDefault();
        event.currentTarget.select();
      }
    }, [
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setTextAreaElementValue,
      value
    ]);
    const handleMouseUp = F(function(event) {
      if (value === MIXED_STRING) {
        event.preventDefault();
      }
    }, [value]);
    return v("div", { class: createClassName([
      textbox_multiline_default.textboxMultiline,
      noBorder === true ? textbox_multiline_default.noBorder : null,
      disabled === true ? textbox_multiline_default.disabled : null
    ]) }, v("textarea", __spreadProps(__spreadValues({}, rest), { ref: textAreaElementRef, class: textbox_multiline_default.textarea, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, placeholder, rows, spellcheck: spellCheck, tabIndex: disabled === true ? -1 : 0, value: value === MIXED_STRING ? "Mixed" : value })), v("div", { class: textbox_multiline_default.border }));
  }
  var EMPTY_STRING;
  var init_textbox_multiline2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-multiline/textbox-multiline.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_get_current_from_ref();
      init_is_keycode_character_generating();
      init_textbox_multiline();
      EMPTY_STRING = "";
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-initial-focus/use-initial-focus.js
  function useInitialFocus() {
    y2(function() {
      const focusableElements = document.querySelectorAll(`[${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}]`);
      if (focusableElements.length === 0) {
        throw new Error(`No element with attribute \`${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}\``);
      }
      if (focusableElements.length > 1) {
        const checkedRadioButtonInputElement = Array.prototype.slice.call(focusableElements).find(function(focusableElement) {
          const inputElement = focusableElement;
          return inputElement.type === "radio" && inputElement.checked === true;
        });
        if (typeof checkedRadioButtonInputElement !== "undefined") {
          checkedRadioButtonInputElement.focus();
          return;
        }
      }
      focusableElements[0].focus();
    }, []);
    return {
      [INITIAL_FOCUS_DATA_ATTRIBUTE_NAME]: true
    };
  }
  var INITIAL_FOCUS_DATA_ATTRIBUTE_NAME;
  var init_use_initial_focus = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-initial-focus/use-initial-focus.js"() {
      init_hooks_module();
      INITIAL_FOCUS_DATA_ATTRIBUTE_NAME = "data-initial-focus";
    }
  });

  // ../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/7ca537f7-5e89-4899-a92e-7f7eb18a6df5/base.js
  var init_base = __esm({
    "../../../../private/var/folders/bg/l9gw4r9d65d0w2qby7j4p3440000gn/T/7ca537f7-5e89-4899-a92e-7f7eb18a6df5/base.js"() {
      if (document.getElementById("186651f95d") === null) {
        const element = document.createElement("style");
        element.id = "186651f95d";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  --border-radius-8: 8px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #101828,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* color */
  --color-black: #101828;
  --color-black-3-translucent: rgba(0, 0, 0, 0.03);
  --color-black-6-translucent: rgba(0, 0, 0, 0.06);
  --color-black-30: #b3b3b3;
  --color-black-30-translucent: rgba(0, 0, 0, 0.3);
  --color-black-80: #667085;
  --color-black-80-translucent: rgba(16, 24, 40, 0.8);
  --color-blue: #18a0fb;
  --color-blue-30-translucent: rgba(24, 160, 251, 0.3);
  --color-figjam-purple: #717BBC;
  --color-figjam-purple-20-translucent: rgba(113, 123, 188, 0.2);
  --color-green: #1bc47d;
  --color-hud: #222222;
  --color-purple: #C8CCE5;
  --color-red: #f24822;
  --color-selection-a: #daebf7;
  --color-selection-b: #edf5fa;
  --color-silver: #e5e5e5;
  --color-white: #ffffff;
  --color-white-20-translucent: rgba(255, 255, 255, 0.2);
  --color-white-40-translucent: rgba(255, 255, 255, 0.4);
  --color-yellow: #ffeb00;
  /* font */
  --font-family: 'Noto Sans','Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

.theme-figjam {
  --color-accent: var(--color-figjam-purple);
}
.theme-figjam ::selection {
  background-color: var(--color-figjam-purple-20-translucent);
}

.theme-figma {
  --color-accent: var(--color-blue);
}
.theme-figma ::selection {
  background-color: var(--color-blue-30-translucent);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      S(v(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button2();
      init_disclosure2();
      init_divider2();
      init_container2();
      init_vertical_space2();
      init_textbox_multiline2();
      init_use_initial_focus();
      init_render();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin(props) {
    const [text, setText] = l2(props.text);
    const [isOpen, setIsOpen] = l2(false);
    const handleClick = () => {
      setIsOpen(!(isOpen === true));
    };
    const handleUpdateButtonClick = F(function() {
      emit("Create Story", text);
    }, [text]);
    return /* @__PURE__ */ v(Container, null, /* @__PURE__ */ v(VerticalSpace, {
      space: "large"
    }), /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    }), /* @__PURE__ */ v(TextboxMultiline, __spreadProps(__spreadValues({}, useInitialFocus()), {
      onValueInput: setText,
      value: text
    })), /* @__PURE__ */ v(VerticalSpace, {
      space: "large"
    }), /* @__PURE__ */ v(Divider, null), /* @__PURE__ */ v(Disclosure, {
      isOpen,
      onClick: handleClick,
      title: "Settings"
    }, "Hide entries until estimation ends"), /* @__PURE__ */ v(VerticalSpace, {
      space: "large"
    }), /* @__PURE__ */ v(Button, {
      fullWidth: true,
      onClick: handleUpdateButtonClick
    }, "Start"), /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.tsx--default": (init_ui(), ui_exports)["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.tsx--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error("No UI defined for command `" + commandId + "`");
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
