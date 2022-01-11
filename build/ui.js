(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
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
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

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
  function w(n2, l3, u3, i3, t3, r3, o3, f3, s2, a3) {
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
        j(n2, _2, p2 = p2 || e, t3, r3, o3, f3, s2, a3), b3 = _2.__e, (v3 = _2.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), b3 != null ? (m3 == null && (m3 = b3), typeof _2.type == "function" && _2.__k === p2.__k ? _2.__d = s2 = x(_2, s2, n2) : s2 = P(n2, _2, p2, w3, b3, s2), typeof u3.type == "function" && (u3.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k(p2));
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
    var s2, h2, v3, y2, p2, k3, b3, m3, g3, x3, A2, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o3 = [e3]), (s2 = l.__b) && s2(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (m3 = u3.props, g3 = (s2 = P2.contextType) && t3[s2.__c], x3 = s2 ? g3 ? g3.props.value : s2.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h2 = new P2(m3, x3) : (u3.__c = h2 = new _(m3, x3), h2.constructor = P2, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))), y2 = h2.props, p2 = h2.state, v3)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m3 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x3), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x3) === false || u3.__v === i3.__v) {
              h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x3), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y2, p2, k3);
            });
          }
          h2.context = x3, h2.props = m3, h2.state = h2.__s, (s2 = l.__r) && s2(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t3 = a(a({}, t3), h2.getChildContext())), v3 || h2.getSnapshotBeforeUpdate == null || (k3 = h2.getSnapshotBeforeUpdate(y2, p2)), A2 = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, r3, o3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          o3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, r3, o3, f3, c3);
      (s2 = l.diffed) && s2(u3);
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
    var s2, a3, v3, y2 = i3.props, p2 = u3.props, d3 = u3.type, _2 = 0;
    if (d3 === "svg" && (r3 = true), o3 != null) {
      for (; _2 < o3.length; _2++)
        if ((s2 = o3[_2]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : s2.nodeType === 3)) {
          l3 = s2, o3[_2] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d3 === null)
        return document.createTextNode(p2);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p2.is && p2), o3 = null, c3 = false;
    }
    if (d3 === null)
      y2 === p2 || c3 && l3.data === p2 || (l3.data = p2);
    else {
      if (o3 = o3 && n.call(l3.childNodes), a3 = (y2 = i3.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (y2 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
            y2[l3.attributes[_2].name] = l3.attributes[_2].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p2, y2, r3, c3), v3)
        u3.__k = [];
      else if (_2 = u3.props.children, w(l3, Array.isArray(_2) ? _2 : [_2], u3, i3, t3, r3 && d3 !== "foreignObject", o3, f3, o3 ? o3[0] : i3.__k && k(i3, 0), c3), o3 != null)
        for (_2 = o3.length; _2--; )
          o3[_2] != null && h(o3[_2]);
      c3 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== y2.value || _2 !== l3.value || d3 === "progress" && !_2) && H(l3, "value", _2, y2.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l3.checked && H(l3, "checked", _2, y2.checked, false));
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

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
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
  function d2(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function A(n2, t3) {
    return o2 = 8, d2(function() {
      return n2;
    }, t3);
  }
  function x2() {
    var t3;
    for (i2.sort(function(n2, t4) {
      return n2.__v.__b - t4.__v.__b;
    }); t3 = i2.pop(); )
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
  }
  function g2(n2) {
    var t3 = u2, r3 = n2.__c;
    typeof r3 == "function" && (n2.__c = void 0, r3()), u2 = t3;
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
        var u3, r3 = t3.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n2) {
          try {
            g2(n2);
          } catch (n3) {
            u3 = n3;
          }
        }), u3 && l.__e(u3, r3.__v));
      };
      b2 = typeof requestAnimationFrame == "function";
    }
  });

  // ../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/68050f28-bc5d-4d11-9c43-75cb1d70d41d/container.js
  var container_default;
  var init_container = __esm({
    "../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/68050f28-bc5d-4d11-9c43-75cb1d70d41d/container.js"() {
      if (document.getElementById("2da5ba188e") === null) {
        const element = document.createElement("style");
        element.id = "2da5ba188e";
        element.textContent = `
._column_yp7iz_2 {
    display: flex;
    flex-direction: column;
    row-gap: var(--spaced-by);
}

._column_yp7iz_2 > * {
    align-self: flex-start;
}

._row_yp7iz_12 {
    display: flex;
    flex-direction: row;
    column-gap: var(--spaced-by);
}

._row_yp7iz_12 > * {
    align-self: flex-start;
}

._box_yp7iz_22 {
    display: grid;
}

._fitParent_yp7iz_26 {
    width: 100%;
    height: 100%;
}

._box_yp7iz_22 > * {
    place-self: start;
}

._column_yp7iz_2 > ._alignStart_yp7iz_35 {
    align-self: flex-start;
}

._column_yp7iz_2 > ._alignEnd_yp7iz_39 {
    align-self: flex-end;
}

._column_yp7iz_2 > ._alignCenter_yp7iz_43 {
    align-self: center;
}

._column_yp7iz_2 > ._alignFill_yp7iz_47 {
    align-self: stretch;
}

._row_yp7iz_12 > ._alignStart_yp7iz_35 {
    align-self: flex-start;
}

._row_yp7iz_12 > ._alignEnd_yp7iz_39 {
    align-self: flex-end;
}

._row_yp7iz_12 > ._alignCenter_yp7iz_43 {
    align-self: center;
}

._row_yp7iz_12 > ._alignFill_yp7iz_47 {
    align-self: stretch;
}

._box_yp7iz_22 > ._alignStart_yp7iz_35 {
    place-self: center start;
}

._box_yp7iz_22 > ._alignEnd_yp7iz_39 {
    place-self: center end;
}

._box_yp7iz_22 > ._alignCenter_yp7iz_43 {
    place-self: center;
}

._box_yp7iz_22 > ._alignFill_yp7iz_47 {
    place-self: stretch;
}

._box_yp7iz_22 > ._alignTopStart_yp7iz_83 {
    place-self: start;
}

._box_yp7iz_22 > ._alignTopCenter_yp7iz_87 {
    place-self: start center;
}

._box_yp7iz_22 > ._alignTopEnd_yp7iz_91 {
    place-self: start end;
}

._box_yp7iz_22 > ._alignBottomStart_yp7iz_95 {
    place-self: end start;
}

._box_yp7iz_22 > ._alignBottomCenter_yp7iz_99 {
    place-self: end center;
}

._box_yp7iz_22 > ._alignBottomEnd_yp7iz_103 {
    place-self: end;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NvbnRhaW5lci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY29udGFpbmVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IHZhcigtLXNwYWNlZC1ieSk7XG59XG5cbi5jb2x1bW4gPiAqIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgY29sdW1uLWdhcDogdmFyKC0tc3BhY2VkLWJ5KTtcbn1cblxuLnJvdyA+ICoge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5ib3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5maXRQYXJlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJveCA+ICoge1xuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xufVxuXG4uY29sdW1uID4gLmFsaWduU3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb2x1bW4gPiAuYWxpZ25FbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uY29sdW1uID4gLmFsaWduQ2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jb2x1bW4gPiAuYWxpZ25GaWxsIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4ucm93ID4gLmFsaWduU3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5yb3cgPiAuYWxpZ25FbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ucm93ID4gLmFsaWduQ2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5yb3cgPiAuYWxpZ25GaWxsIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4uYm94ID4gLmFsaWduU3RhcnQge1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcbn1cblxuLmJveCA+IC5hbGlnbkVuZCB7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcbn1cblxuLmJveCA+IC5hbGlnbkNlbnRlciB7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xufVxuXG4uYm94ID4gLmFsaWduRmlsbCB7XG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcbn1cblxuLmJveCA+IC5hbGlnblRvcFN0YXJ0IHtcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcbn1cblxuLmJveCA+IC5hbGlnblRvcENlbnRlciB7XG4gICAgcGxhY2Utc2VsZjogc3RhcnQgY2VudGVyO1xufVxuXG4uYm94ID4gLmFsaWduVG9wRW5kIHtcbiAgICBwbGFjZS1zZWxmOiBzdGFydCBlbmQ7XG59XG5cbi5ib3ggPiAuYWxpZ25Cb3R0b21TdGFydCB7XG4gICAgcGxhY2Utc2VsZjogZW5kIHN0YXJ0O1xufVxuXG4uYm94ID4gLmFsaWduQm90dG9tQ2VudGVyIHtcbiAgICBwbGFjZS1zZWxmOiBlbmQgY2VudGVyO1xufVxuXG4uYm94ID4gLmFsaWduQm90dG9tRW5kIHtcbiAgICBwbGFjZS1zZWxmOiBlbmQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_default = { "column": "_column_yp7iz_2", "row": "_row_yp7iz_12", "box": "_box_yp7iz_22", "fitParent": "_fitParent_yp7iz_26", "alignStart": "_alignStart_yp7iz_35", "alignEnd": "_alignEnd_yp7iz_39", "alignCenter": "_alignCenter_yp7iz_43", "alignFill": "_alignFill_yp7iz_47", "alignTopStart": "_alignTopStart_yp7iz_83", "alignTopCenter": "_alignTopCenter_yp7iz_87", "alignTopEnd": "_alignTopEnd_yp7iz_91", "alignBottomStart": "_alignBottomStart_yp7iz_95", "alignBottomCenter": "_alignBottomCenter_yp7iz_99", "alignBottomEnd": "_alignBottomEnd_yp7iz_103" };
    }
  });

  // src/components/composeFunctions.tsx
  function composeClasses(...classes) {
    return classes.filter((c3) => c3 !== void 0).join(" ");
  }
  function alignClass(alignment) {
    switch (alignment) {
      case "center":
        return container_default.alignCenter;
      case "fill":
        return container_default.alignFill;
      case "end":
        return container_default.alignEnd;
      case "start":
        return container_default.alignStart;
      case "topStart":
        return container_default.alignTopStart;
      case "topCenter":
        return container_default.alignTopCenter;
      case "topEnd":
        return container_default.alignTopEnd;
      case "bottomStart":
        return container_default.alignBottomStart;
      case "bottomCenter":
        return container_default.alignBottomCenter;
      case "bottomEnd":
        return container_default.alignBottomEnd;
      default:
        return container_default.alignStart;
    }
  }
  function composeProperties(...props) {
    return props.filter(([p2, v3]) => v3 !== void 0).map(([p2, v3]) => `--${p2}: ${v3};`).join(" ");
  }
  function composePaddingAsProperties(padding) {
    if (padding === void 0) {
      return composeProperties(["padding-top", "0"], ["padding-bottom", "0"], ["padding-start", "0"], ["padding-end", "0"]);
    }
    if ("top" in padding) {
      return composeProperties(["padding-top", padding.top], ["padding-bottom", padding.bottom], ["padding-start", padding.start], ["padding-end", padding.end]);
    } else if ("horizontal" in padding) {
      return composeProperties(["padding-top", padding.vertical], ["padding-bottom", padding.vertical], ["padding-start", padding.horizontal], ["padding-end", padding.horizontal]);
    } else {
      return composeProperties(["padding-top", padding.all], ["padding-bottom", padding.all], ["padding-start", padding.all], ["padding-end", padding.all]);
    }
  }
  function composeSizeAsProperties(width, height) {
    return composeProperties(["height", height != null ? height : "unset"], ["width", width != null ? width : "unset"]);
  }
  function composeColorAsProperties(color) {
    if (color === void 0) {
      return "";
    }
    return composeProperties(["content-color", color.content], ["background-color", color.background]);
  }
  var init_composeFunctions = __esm({
    "src/components/composeFunctions.tsx"() {
      init_container();
    }
  });

  // ../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/1825b48c-8d7b-4c63-981b-b6191e69c3ee/base.js
  var init_base = __esm({
    "../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/1825b48c-8d7b-4c63-981b-b6191e69c3ee/base.js"() {
      if (document.getElementById("6a3ade0e8d") === null) {
        const element = document.createElement("style");
        element.id = "6a3ade0e8d";
        element.textContent = `* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

#create-figma-plugin {
    display: grid;
    width: 100%;
    height: 100%;
}

:root {
    font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #101828;
}

div {
    user-select: none;
}

.padding {
    margin-top: var(--padding-top);
    margin-bottom: var(--padding-bottom);
    margin-left: var(--padding-start);
    margin-right: var(--padding-end);
}

.size {
    height: var(--height);
    width: var(--width);
}

.color {
    color: var(--content-color);
    background: var(--background-color);
}
`;
        document.head.append(element);
      }
    }
  });

  // src/components/base.tsx
  function baseProps({ alignment, padding, height, width, content, background }, ...classes) {
    return {
      class: composeClasses("padding", "color", "size", alignClass(alignment), ...classes),
      style: composePaddingAsProperties(padding) + composeSizeAsProperties(width, height) + composeColorAsProperties({ content, background })
    };
  }
  function additionalProps(base, ...props) {
    return {
      class: base.class,
      style: base.style + " " + composeProperties(...props)
    };
  }
  var init_base2 = __esm({
    "src/components/base.tsx"() {
      init_composeFunctions();
      init_base();
    }
  });

  // ../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/773963ae-37d4-4298-94bc-ccad7959a5ab/input.js
  var input_default;
  var init_input = __esm({
    "../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/773963ae-37d4-4298-94bc-ccad7959a5ab/input.js"() {
      if (document.getElementById("e56f442993") === null) {
        const element = document.createElement("style");
        element.id = "e56f442993";
        element.textContent = `@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');

._button_x0d00_3 {
    display: block;

    border: none;
    border-radius: 8px;

    background: #C8CCE5;
    color: #000E52;

    font-weight: 600;
    font-size: 14px;
}

._button_x0d00_3:hover {
    cursor: pointer;
}

._button_x0d00_3:disabled {
    background: #F9FAFB;
    color: #98A2B3;
}

._basicInput_x0d00_25 {
    display: block;

    padding: 0px;
    min-height: 34px;

    border: none;
    outline: none;

    font-size: 14px;
    font-weight: 500;
}

._basicInput_x0d00_25::placeholder {
    color: #667085;
}

._outlinedInput_x0d00_42 {
    display: block;

    padding: 8px;
    min-height: 34px;

    border-style: solid;
    border-radius: 8px;
    border-width: 1px;
    border-color: #E4E7EC;

    outline: none;

    font-size: 12px;
    font-weight: 400;
}

._outlinedInput_x0d00_42::placeholder {
    color: #98A2B3;
}

._radioInput_x0d00_63 {
    display: block;
}


._radioInput_x0d00_63 > input {
    display: none;
}

._radioInput_x0d00_63:hover {
    cursor: pointer;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2lucHV0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFO0lBQ0ksY0FBYzs7SUFFZCxZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixtQkFBbUI7SUFDbkIsY0FBYzs7SUFFZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsWUFBWTtJQUNaLGdCQUFnQjs7SUFFaEIsWUFBWTtJQUNaLGFBQWE7O0lBRWIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjOztJQUVkLFlBQVk7SUFDWixnQkFBZ0I7O0lBRWhCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7SUFFckIsYUFBYTs7SUFFYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvaW5wdXQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrUm91bmQnKTtcblxuLmJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgYmFja2dyb3VuZDogI0M4Q0NFNTtcbiAgICBjb2xvcjogIzAwMEU1MjtcblxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICNGOUZBRkI7XG4gICAgY29sb3I6ICM5OEEyQjM7XG59XG5cbi5iYXNpY0lucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJhc2ljSW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzY2NzA4NTtcbn1cblxuLm91dGxpbmVkSW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1pbi1oZWlnaHQ6IDM0cHg7XG5cbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6ICNFNEU3RUM7XG5cbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5vdXRsaW5lZElucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5OEEyQjM7XG59XG5cbi5yYWRpb0lucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4ucmFkaW9JbnB1dCA+IGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmFkaW9JbnB1dDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */`;
        document.head.append(element);
      }
      input_default = { "button": "_button_x0d00_3", "basicInput": "_basicInput_x0d00_25", "outlinedInput": "_outlinedInput_x0d00_42", "radioInput": "_radioInput_x0d00_63" };
    }
  });

  // ../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/24295999-6ca7-4f3f-975b-ffdb3ad7c818/container.js
  var container_default2;
  var init_container2 = __esm({
    "../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/24295999-6ca7-4f3f-975b-ffdb3ad7c818/container.js"() {
      if (document.getElementById("2da5ba188e") === null) {
        const element = document.createElement("style");
        element.id = "2da5ba188e";
        element.textContent = `
._column_yp7iz_2 {
    display: flex;
    flex-direction: column;
    row-gap: var(--spaced-by);
}

._column_yp7iz_2 > * {
    align-self: flex-start;
}

._row_yp7iz_12 {
    display: flex;
    flex-direction: row;
    column-gap: var(--spaced-by);
}

._row_yp7iz_12 > * {
    align-self: flex-start;
}

._box_yp7iz_22 {
    display: grid;
}

._fitParent_yp7iz_26 {
    width: 100%;
    height: 100%;
}

._box_yp7iz_22 > * {
    place-self: start;
}

._column_yp7iz_2 > ._alignStart_yp7iz_35 {
    align-self: flex-start;
}

._column_yp7iz_2 > ._alignEnd_yp7iz_39 {
    align-self: flex-end;
}

._column_yp7iz_2 > ._alignCenter_yp7iz_43 {
    align-self: center;
}

._column_yp7iz_2 > ._alignFill_yp7iz_47 {
    align-self: stretch;
}

._row_yp7iz_12 > ._alignStart_yp7iz_35 {
    align-self: flex-start;
}

._row_yp7iz_12 > ._alignEnd_yp7iz_39 {
    align-self: flex-end;
}

._row_yp7iz_12 > ._alignCenter_yp7iz_43 {
    align-self: center;
}

._row_yp7iz_12 > ._alignFill_yp7iz_47 {
    align-self: stretch;
}

._box_yp7iz_22 > ._alignStart_yp7iz_35 {
    place-self: center start;
}

._box_yp7iz_22 > ._alignEnd_yp7iz_39 {
    place-self: center end;
}

._box_yp7iz_22 > ._alignCenter_yp7iz_43 {
    place-self: center;
}

._box_yp7iz_22 > ._alignFill_yp7iz_47 {
    place-self: stretch;
}

._box_yp7iz_22 > ._alignTopStart_yp7iz_83 {
    place-self: start;
}

._box_yp7iz_22 > ._alignTopCenter_yp7iz_87 {
    place-self: start center;
}

._box_yp7iz_22 > ._alignTopEnd_yp7iz_91 {
    place-self: start end;
}

._box_yp7iz_22 > ._alignBottomStart_yp7iz_95 {
    place-self: end start;
}

._box_yp7iz_22 > ._alignBottomCenter_yp7iz_99 {
    place-self: end center;
}

._box_yp7iz_22 > ._alignBottomEnd_yp7iz_103 {
    place-self: end;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NvbnRhaW5lci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY29udGFpbmVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IHZhcigtLXNwYWNlZC1ieSk7XG59XG5cbi5jb2x1bW4gPiAqIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgY29sdW1uLWdhcDogdmFyKC0tc3BhY2VkLWJ5KTtcbn1cblxuLnJvdyA+ICoge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5ib3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5maXRQYXJlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJveCA+ICoge1xuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xufVxuXG4uY29sdW1uID4gLmFsaWduU3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb2x1bW4gPiAuYWxpZ25FbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uY29sdW1uID4gLmFsaWduQ2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jb2x1bW4gPiAuYWxpZ25GaWxsIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4ucm93ID4gLmFsaWduU3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5yb3cgPiAuYWxpZ25FbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ucm93ID4gLmFsaWduQ2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5yb3cgPiAuYWxpZ25GaWxsIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4uYm94ID4gLmFsaWduU3RhcnQge1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcbn1cblxuLmJveCA+IC5hbGlnbkVuZCB7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcbn1cblxuLmJveCA+IC5hbGlnbkNlbnRlciB7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xufVxuXG4uYm94ID4gLmFsaWduRmlsbCB7XG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcbn1cblxuLmJveCA+IC5hbGlnblRvcFN0YXJ0IHtcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcbn1cblxuLmJveCA+IC5hbGlnblRvcENlbnRlciB7XG4gICAgcGxhY2Utc2VsZjogc3RhcnQgY2VudGVyO1xufVxuXG4uYm94ID4gLmFsaWduVG9wRW5kIHtcbiAgICBwbGFjZS1zZWxmOiBzdGFydCBlbmQ7XG59XG5cbi5ib3ggPiAuYWxpZ25Cb3R0b21TdGFydCB7XG4gICAgcGxhY2Utc2VsZjogZW5kIHN0YXJ0O1xufVxuXG4uYm94ID4gLmFsaWduQm90dG9tQ2VudGVyIHtcbiAgICBwbGFjZS1zZWxmOiBlbmQgY2VudGVyO1xufVxuXG4uYm94ID4gLmFsaWduQm90dG9tRW5kIHtcbiAgICBwbGFjZS1zZWxmOiBlbmQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_default2 = { "column": "_column_yp7iz_2", "row": "_row_yp7iz_12", "box": "_box_yp7iz_22", "fitParent": "_fitParent_yp7iz_26", "alignStart": "_alignStart_yp7iz_35", "alignEnd": "_alignEnd_yp7iz_39", "alignCenter": "_alignCenter_yp7iz_43", "alignFill": "_alignFill_yp7iz_47", "alignTopStart": "_alignTopStart_yp7iz_83", "alignTopCenter": "_alignTopCenter_yp7iz_87", "alignTopEnd": "_alignTopEnd_yp7iz_91", "alignBottomStart": "_alignBottomStart_yp7iz_95", "alignBottomCenter": "_alignBottomCenter_yp7iz_99", "alignBottomEnd": "_alignBottomEnd_yp7iz_103" };
    }
  });

  // src/components/container.tsx
  function Column(_a) {
    var _b = _a, { children, spacedBy = "0px" } = _b, rest = __objRest(_b, ["children", "spacedBy"]);
    return /* @__PURE__ */ v("div", __spreadValues({}, additionalProps(baseProps(rest, container_default2.column), ["spaced-by", spacedBy])), /* @__PURE__ */ v(d, null, children));
  }
  function Row(_a) {
    var _b = _a, { children, spacedBy = "0px" } = _b, rest = __objRest(_b, ["children", "spacedBy"]);
    return /* @__PURE__ */ v("div", __spreadValues({}, additionalProps(baseProps(rest, container_default2.row), ["spaced-by", spacedBy])), /* @__PURE__ */ v(d, null, children));
  }
  function Box(_a) {
    var _b = _a, { children, fitParent } = _b, rest = __objRest(_b, ["children", "fitParent"]);
    return /* @__PURE__ */ v("div", __spreadValues({}, baseProps(rest, container_default2.box, fitParent ? container_default2.fitParent : void 0)), children ? /* @__PURE__ */ v(d, null, children) : void 0);
  }
  var init_container3 = __esm({
    "src/components/container.tsx"() {
      init_preact_module();
      init_container2();
      init_base2();
    }
  });

  // src/components/space.tsx
  function Space({ size, fillGap = false }) {
    return /* @__PURE__ */ v("div", {
      style: `width: ${size}; height: ${size}; flex-grow: ${fillGap ? "1" : "unset"}`
    });
  }
  var init_space = __esm({
    "src/components/space.tsx"() {
      init_preact_module();
    }
  });

  // src/components/input.tsx
  function Button(_a) {
    var _b = _a, {
      children,
      onClick,
      enabled = true,
      contentPadding = { all: "16px" },
      buttonStyleClass = input_default.button
    } = _b, rest = __objRest(_b, [
      "children",
      "onClick",
      "enabled",
      "contentPadding",
      "buttonStyleClass"
    ]);
    const handleClick = A(function(event) {
      onClick();
    }, [onClick]);
    return /* @__PURE__ */ v("button", __spreadProps(__spreadValues({}, baseProps(rest, buttonStyleClass)), {
      onClick: handleClick,
      disabled: !enabled
    }), /* @__PURE__ */ v(Box, {
      fitParent: true
    }, /* @__PURE__ */ v(Row, {
      padding: contentPadding,
      alignment: "center"
    }, children)));
  }
  function Input(_a) {
    var _b = _a, { value, onValueChange, placeholder, outlined = true } = _b, rest = __objRest(_b, ["value", "onValueChange", "placeholder", "outlined"]);
    const handleInput = A(function(event) {
      onValueChange(event.currentTarget.value);
    }, [onValueChange]);
    const classes = outlined ? input_default.outlinedInput : input_default.basicInput;
    return /* @__PURE__ */ v("input", __spreadProps(__spreadValues({
      type: "text",
      value
    }, baseProps(rest, classes)), {
      onInput: handleInput,
      placeholder
    }));
  }
  function RadioInput(_a) {
    var _b = _a, {
      checked,
      onClick: onValueChange,
      checkIcon,
      checkText
    } = _b, rest = __objRest(_b, [
      "checked",
      "onClick",
      "checkIcon",
      "checkText"
    ]);
    const handleInput = A(function(event) {
      onValueChange();
    }, [onValueChange]);
    return /* @__PURE__ */ v("label", __spreadValues({}, baseProps(rest, input_default.radioInput)), /* @__PURE__ */ v("input", {
      type: "radio",
      checked,
      onClick: handleInput
    }), /* @__PURE__ */ v(Row, {
      alignment: "fill"
    }, checkIcon ? checkIcon(checked) : void 0, /* @__PURE__ */ v(Space, {
      size: "8px"
    }), checkText ? checkText(checked) : void 0));
  }
  var init_input2 = __esm({
    "src/components/input.tsx"() {
      init_preact_module();
      init_base2();
      init_input();
      init_container3();
      init_hooks_module();
      init_space();
    }
  });

  // ../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/2c336c85-c98e-4ea8-9d79-f751de786f96/icons.js
  var icons_default;
  var init_icons = __esm({
    "../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/2c336c85-c98e-4ea8-9d79-f751de786f96/icons.js"() {
      if (document.getElementById("bca423e109") === null) {
        const element = document.createElement("style");
        element.id = "bca423e109";
        element.textContent = `
._icon_z9bgh_2 {
    margin: 4px;
    width: 20px;
    height: 20px;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2ljb25zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvaWNvbnMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaWNvbiB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuIl19 */`;
        document.head.append(element);
      }
      icons_default = { "icon": "_icon_z9bgh_2" };
    }
  });

  // src/components/icons.tsx
  function createSvgIcon(d3) {
    return /* @__PURE__ */ v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: icons_default.icon,
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, /* @__PURE__ */ v("path", {
      "fill-rule": "evenodd",
      d: d3,
      "clip-rule": "evenodd"
    }));
  }
  function SolidCheck() {
    return createSvgIcon("M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z");
  }
  function OutlinedCircle() {
    return /* @__PURE__ */ v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: icons_default.icon,
      viewBox: "0 0 20 20",
      fill: "none"
    }, /* @__PURE__ */ v("circle", {
      cx: "10",
      cy: "10",
      r: "8",
      stroke: "currentColor",
      strokeWidth: "2"
    }));
  }
  function Icon(_a) {
    var _b = _a, { children, tint = "currentColor" } = _b, rest = __objRest(_b, ["children", "tint"]);
    return /* @__PURE__ */ v("div", __spreadValues({}, baseProps(__spreadProps(__spreadValues({}, rest), { content: tint }))), children);
  }
  var init_icons2 = __esm({
    "src/components/icons.tsx"() {
      init_preact_module();
      init_base2();
      init_icons();
    }
  });

  // ../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/18ea2206-a2e9-4c4c-a12a-a33451675ede/text.js
  var text_default;
  var init_text = __esm({
    "../../../../private/var/folders/9r/m_z55k615gz473gh1zzltdzc0000gn/T/18ea2206-a2e9-4c4c-a12a-a33451675ede/text.js"() {
      if (document.getElementById("e4d477f233") === null) {
        const element = document.createElement("style");
        element.id = "e4d477f233";
        element.textContent = `._text_icfdk_1 {
    font-weight: 600;
    font-size: 14px;
}

._body2_icfdk_6 {
    font-weight: 500;
    font-size: 14px;
}

._caption_icfdk_11 {
    font-weight: 400;
    font-size: 12px;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RleHQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3RleHQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYm9keTIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FwdGlvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59Il19 */`;
        document.head.append(element);
      }
      text_default = { "text": "_text_icfdk_1", "body2": "_body2_icfdk_6", "caption": "_caption_icfdk_11" };
    }
  });

  // src/components/text.tsx
  function Text(_a) {
    var _b = _a, { children, textStyleClass = text_default.text } = _b, rest = __objRest(_b, ["children", "textStyleClass"]);
    return /* @__PURE__ */ v("span", __spreadValues({}, baseProps(rest, textStyleClass)), children);
  }
  function Body2(_a) {
    var _b = _a, { children, textStyleClass = text_default.body2 } = _b, rest = __objRest(_b, ["children", "textStyleClass"]);
    return /* @__PURE__ */ v(Text, __spreadValues({
      textStyleClass
    }, rest), children);
  }
  function Caption(_a) {
    var _b = _a, { children, textStyleClass = text_default.caption } = _b, rest = __objRest(_b, ["children", "textStyleClass"]);
    return /* @__PURE__ */ v(Text, __spreadValues({
      textStyleClass
    }, rest), children);
  }
  var init_text2 = __esm({
    "src/components/text.tsx"() {
      init_preact_module();
      init_base2();
      init_text();
    }
  });

  // src/voting.tsx
  function summaryOfVotingOptions(s2) {
    return s2.options.join(", ");
  }
  function summaryOfVote(option) {
    if (!isNaN(Number(option))) {
      return `${option} ${option == "1" ? "Point" : "Points"}`;
    } else {
      return option;
    }
  }
  var Fibonacci, FibonacciHalf, TShirtSizes, Square;
  var init_voting = __esm({
    "src/voting.tsx"() {
      Fibonacci = {
        kind: "numeric",
        options: ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "144"]
      };
      FibonacciHalf = {
        kind: "numeric",
        options: ["0", "0.5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "144"]
      };
      TShirtSizes = {
        kind: "categorical",
        options: ["XS", "S", "M", "L", "XL", "XXL"]
      };
      Square = {
        kind: "numeric",
        options: ["0", "1", "2", "4", "8", "16", "32", "64", "128", "256"]
      };
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function InitVotePlugin() {
    const votingOptionsList = [Fibonacci, FibonacciHalf, TShirtSizes, Square];
    const [storyName, setStoryName] = l2("");
    const [storyDescription, setStoryDescription] = l2("");
    const [votingChoice, setVotingChoice] = l2(0);
    const handleOnStart = A(() => {
      emit("SET_VOTING", votingOptionsList[votingChoice], storyName, storyDescription);
    }, [storyName, storyDescription, votingChoice]);
    return /* @__PURE__ */ v(Box, {
      fitParent: true
    }, /* @__PURE__ */ v(Column, {
      padding: { all: "16px" },
      alignment: "fill"
    }, /* @__PURE__ */ v(Input, {
      value: storyName,
      onValueChange: setStoryName,
      outlined: false,
      placeholder: "A story needs a name...",
      alignment: "fill"
    }), /* @__PURE__ */ v(Space, {
      size: "12px"
    }), /* @__PURE__ */ v(Input, {
      value: storyDescription,
      onValueChange: setStoryDescription,
      outlined: true,
      placeholder: "Description",
      alignment: "fill"
    }), /* @__PURE__ */ v(Space, {
      size: "32px"
    }), /* @__PURE__ */ v(Divider, null), /* @__PURE__ */ v(Space, {
      size: "32px"
    }), /* @__PURE__ */ v(Column, {
      spacedBy: "8px",
      alignment: "fill"
    }, votingOptionsList.map((opt, index) => {
      return /* @__PURE__ */ v(SCRadioInput, {
        key: `${opt}_${index}`,
        text: summaryOfVotingOptions(opt),
        checked: votingChoice == index,
        onClick: () => {
          setVotingChoice(index);
        }
      });
    })), /* @__PURE__ */ v(Space, {
      size: "24px",
      fillGap: true
    }), /* @__PURE__ */ v(Button, {
      alignment: "fill",
      onClick: handleOnStart,
      enabled: storyName.length > 2 && storyDescription.length > 2
    }, "Start")));
  }
  function VotePlugin({ votingOptions, storyName, storyDescription, votedFor }) {
    const [vote, setVote] = l2(votedFor ? votingOptions.options.indexOf(votedFor) : -1);
    const handleOnSubmit = A(() => {
      emit("SET_VOTE", votingOptions.options[vote]);
    }, [votingOptions, vote]);
    return /* @__PURE__ */ v(Box, {
      fitParent: true
    }, /* @__PURE__ */ v(Column, {
      padding: { all: "16px" },
      alignment: "fill"
    }, /* @__PURE__ */ v(Body2, null, storyName), /* @__PURE__ */ v(Space, {
      size: "4px"
    }), /* @__PURE__ */ v(Caption, null, storyDescription), /* @__PURE__ */ v(Space, {
      size: "16px"
    }), /* @__PURE__ */ v(Divider, null), /* @__PURE__ */ v(Space, {
      size: "16px"
    }), /* @__PURE__ */ v(Column, {
      spacedBy: "8px",
      alignment: "fill"
    }, votingOptions.options.map((opt, index) => {
      return /* @__PURE__ */ v(SCRadioInput, {
        key: `${opt}_${index}`,
        text: summaryOfVote(opt),
        checked: vote == index,
        onClick: () => {
          setVote(index);
        }
      });
    })), /* @__PURE__ */ v(Space, {
      size: "24px",
      fillGap: true
    }), /* @__PURE__ */ v(Button, {
      alignment: "fill",
      onClick: handleOnSubmit
    }, "Submit")));
  }
  function Divider() {
    return /* @__PURE__ */ v(Box, {
      height: "1px",
      background: "#E4E7EC",
      alignment: "fill"
    });
  }
  function SCRadioInput(_a) {
    var _b = _a, {
      text,
      checked,
      onClick,
      checkIcon = (checked2) => {
        return /* @__PURE__ */ v(Icon, {
          tint: checked2 ? "#4E5BA6" : "#E4E7EC"
        }, checked2 ? /* @__PURE__ */ v(SolidCheck, null) : /* @__PURE__ */ v(OutlinedCircle, null));
      },
      checkText = () => {
        return /* @__PURE__ */ v(Caption, {
          alignment: "center"
        }, text);
      }
    } = _b, rest = __objRest(_b, [
      "text",
      "checked",
      "onClick",
      "checkIcon",
      "checkText"
    ]);
    return /* @__PURE__ */ v(RadioInput, __spreadValues({
      checked,
      onClick,
      checkIcon,
      checkText
    }, rest));
  }
  function ui_default(rootNode2, data) {
    switch (data.name) {
      case "INIT_VOTING_DATA":
        S(/* @__PURE__ */ v(InitVotePlugin, null), rootNode2);
        break;
      case "VOTING_DATA":
        S(/* @__PURE__ */ v(VotePlugin, __spreadValues({}, data)), rootNode2);
        break;
    }
  }
  var init_ui = __esm({
    "src/ui.tsx"() {
      init_preact_module();
      init_lib();
      init_hooks_module();
      init_input2();
      init_container3();
      init_space();
      init_icons2();
      init_text2();
      init_voting();
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.tsx--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.tsx--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error("No UI defined for command `" + commandId + "`");
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
