!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).barba = e());
})(this, function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function e(e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  }
  function i() {
    return (i =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = arguments[e];
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        }
        return t;
      }).apply(this, arguments);
  }
  function n(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  function r(t) {
    return (r = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function s(t, e) {
    return (s =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function o(t, e, i) {
    return (o = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Reflect.construct
      : function (t, e, i) {
          var n = [null];
          n.push.apply(n, e);
          var r = new (Function.bind.apply(t, n))();
          return i && s(r, i.prototype), r;
        }).apply(null, arguments);
  }
  function a(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (a = function (t) {
      if (
        null === t ||
        -1 === Function.toString.call(t).indexOf("[native code]")
      )
        return t;
      if ("function" != typeof t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, i);
      }
      function i() {
        return o(t, arguments, r(this).constructor);
      }
      return (
        (i.prototype = Object.create(t.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        s(i, t)
      );
    })(t);
  }
  function l(t, e) {
    try {
      var i = t();
    } catch (t) {
      return e(t);
    }
    return i && i.then ? i.then(void 0, e) : i;
  }
  "undefined" != typeof Symbol &&
    (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
    "undefined" != typeof Symbol &&
      (Symbol.asyncIterator ||
        (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
  var h;
  !(function (t) {
    (t[(t.off = 0)] = "off"),
      (t[(t.error = 1)] = "error"),
      (t[(t.warning = 2)] = "warning"),
      (t[(t.info = 3)] = "info"),
      (t[(t.debug = 4)] = "debug");
  })(h || (h = {}));
  var u = h.off,
    c = (function () {
      function t(t) {
        this.t = t;
      }
      (t.getLevel = function () {
        return u;
      }),
        (t.setLevel = function (t) {
          return (u = h[t]);
        });
      var e = t.prototype;
      return (
        (e.error = function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          this.i(console.error, h.error, e);
        }),
        (e.warn = function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          this.i(console.warn, h.warning, e);
        }),
        (e.info = function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          this.i(console.info, h.info, e);
        }),
        (e.debug = function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          this.i(console.log, h.debug, e);
        }),
        (e.i = function (e, i, n) {
          i <= t.getLevel() &&
            e.apply(console, ["[" + this.t + "] "].concat(n));
        }),
        t
      );
    })(),
    d = C,
    f = b,
    p = _,
    m = w,
    g = k,
    v = "/",
    y = new RegExp(
      [
        "(\\\\.)",
        "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
      ].join("|"),
      "g"
    );
  function _(t, e) {
    for (
      var i,
        n = [],
        r = 0,
        s = 0,
        o = "",
        a = (e && e.delimiter) || v,
        l = (e && e.whitelist) || void 0,
        h = !1;
      null !== (i = y.exec(t));

    ) {
      var u = i[0],
        c = i[1],
        d = i.index;
      if (((o += t.slice(s, d)), (s = d + u.length), c)) (o += c[1]), (h = !0);
      else {
        var f = "",
          p = i[2],
          m = i[3],
          g = i[4],
          _ = i[5];
        if (!h && o.length) {
          var b = o.length - 1,
            w = o[b];
          (!l || l.indexOf(w) > -1) && ((f = w), (o = o.slice(0, b)));
        }
        o && (n.push(o), (o = ""), (h = !1));
        var E = m || g,
          k = f || a;
        n.push({
          name: p || r++,
          prefix: f,
          delimiter: k,
          optional: "?" === _ || "*" === _,
          repeat: "+" === _ || "*" === _,
          pattern: E ? S(E) : "[^" + x(k === a ? k : k + a) + "]+?",
        });
      }
    }
    return (o || s < t.length) && n.push(o + t.substr(s)), n;
  }
  function b(t, e) {
    return function (i, n) {
      var r = t.exec(i);
      if (!r) return !1;
      for (
        var s = r[0],
          o = r.index,
          a = {},
          l = (n && n.decode) || decodeURIComponent,
          h = 1;
        h < r.length;
        h++
      )
        if (void 0 !== r[h]) {
          var u = e[h - 1];
          a[u.name] = u.repeat
            ? r[h].split(u.delimiter).map(function (t) {
                return l(t, u);
              })
            : l(r[h], u);
        }
      return {
        path: s,
        index: o,
        params: a,
      };
    };
  }
  function w(t, e) {
    for (var i = new Array(t.length), n = 0; n < t.length; n++)
      "object" == typeof t[n] &&
        (i[n] = new RegExp("^(?:" + t[n].pattern + ")$", E(e)));
    return function (e, n) {
      for (
        var r = "",
          s = (n && n.encode) || encodeURIComponent,
          o = !n || !1 !== n.validate,
          a = 0;
        a < t.length;
        a++
      ) {
        var l = t[a];
        if ("string" != typeof l) {
          var h,
            u = e ? e[l.name] : void 0;
          if (Array.isArray(u)) {
            if (!l.repeat)
              throw new TypeError(
                'Expected "' + l.name + '" to not repeat, but got array'
              );
            if (0 === u.length) {
              if (l.optional) continue;
              throw new TypeError('Expected "' + l.name + '" to not be empty');
            }
            for (var c = 0; c < u.length; c++) {
              if (((h = s(u[c], l)), o && !i[a].test(h)))
                throw new TypeError(
                  'Expected all "' + l.name + '" to match "' + l.pattern + '"'
                );
              r += (0 === c ? l.prefix : l.delimiter) + h;
            }
          } else if (
            "string" != typeof u &&
            "number" != typeof u &&
            "boolean" != typeof u
          ) {
            if (!l.optional)
              throw new TypeError(
                'Expected "' +
                  l.name +
                  '" to be ' +
                  (l.repeat ? "an array" : "a string")
              );
          } else {
            if (((h = s(String(u), l)), o && !i[a].test(h)))
              throw new TypeError(
                'Expected "' +
                  l.name +
                  '" to match "' +
                  l.pattern +
                  '", but got "' +
                  h +
                  '"'
              );
            r += l.prefix + h;
          }
        } else r += l;
      }
      return r;
    };
  }
  function x(t) {
    return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function S(t) {
    return t.replace(/([=!:$/()])/g, "\\$1");
  }
  function E(t) {
    return t && t.sensitive ? "" : "i";
  }
  function k(t, e, i) {
    for (
      var n = (i = i || {}).strict,
        r = !1 !== i.start,
        s = !1 !== i.end,
        o = i.delimiter || v,
        a = []
          .concat(i.endsWith || [])
          .map(x)
          .concat("$")
          .join("|"),
        l = r ? "^" : "",
        h = 0;
      h < t.length;
      h++
    ) {
      var u = t[h];
      if ("string" == typeof u) l += x(u);
      else {
        var c = u.repeat
          ? "(?:" +
            u.pattern +
            ")(?:" +
            x(u.delimiter) +
            "(?:" +
            u.pattern +
            "))*"
          : u.pattern;
        e && e.push(u),
          (l += u.optional
            ? u.prefix
              ? "(?:" + x(u.prefix) + "(" + c + "))?"
              : "(" + c + ")?"
            : x(u.prefix) + "(" + c + ")");
      }
    }
    if (s)
      n || (l += "(?:" + x(o) + ")?"), (l += "$" === a ? "$" : "(?=" + a + ")");
    else {
      var d = t[t.length - 1],
        f = "string" == typeof d ? d[d.length - 1] === o : void 0 === d;
      n || (l += "(?:" + x(o) + "(?=" + a + "))?"),
        f || (l += "(?=" + x(o) + "|" + a + ")");
    }
    return new RegExp(l, E(i));
  }
  function C(t, e, i) {
    return t instanceof RegExp
      ? (function (t, e) {
          if (!e) return t;
          var i = t.source.match(/\((?!\?)/g);
          if (i)
            for (var n = 0; n < i.length; n++)
              e.push({
                name: n,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                pattern: null,
              });
          return t;
        })(t, e)
      : Array.isArray(t)
      ? (function (t, e, i) {
          for (var n = [], r = 0; r < t.length; r++)
            n.push(C(t[r], e, i).source);
          return new RegExp("(?:" + n.join("|") + ")", E(i));
        })(t, e, i)
      : (function (t, e, i) {
          return k(_(t, i), e, i);
        })(t, e, i);
  }
  (d.match = function (t, e) {
    var i = [];
    return b(C(t, i, e), i);
  }),
    (d.regexpToFunction = f),
    (d.parse = p),
    (d.compile = function (t, e) {
      return w(_(t, e), e);
    }),
    (d.tokensToFunction = m),
    (d.tokensToRegExp = g);
  var T = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    A = new ((function () {
      function t() {
        (this.o = T), (this.u = new DOMParser());
      }
      var e = t.prototype;
      return (
        (e.toString = function (t) {
          return t.outerHTML;
        }),
        (e.toDocument = function (t) {
          return this.u.parseFromString(t, "text/html");
        }),
        (e.toElement = function (t) {
          var e = document.createElement("div");
          return (e.innerHTML = t), e;
        }),
        (e.getHtml = function (t) {
          return (
            void 0 === t && (t = document), this.toString(t.documentElement)
          );
        }),
        (e.getWrapper = function (t) {
          return (
            void 0 === t && (t = document),
            t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
          );
        }),
        (e.getContainer = function (t) {
          return (
            void 0 === t && (t = document),
            t.querySelector(
              "[" + this.o.prefix + '="' + this.o.container + '"]'
            )
          );
        }),
        (e.removeContainer = function (t) {
          document.body.contains(t) && t.parentNode.removeChild(t);
        }),
        (e.addContainer = function (t, e) {
          var i = this.getContainer();
          i ? this.s(t, i) : e.appendChild(t);
        }),
        (e.getNamespace = function (t) {
          void 0 === t && (t = document);
          var e = t.querySelector(
            "[" + this.o.prefix + "-" + this.o.namespace + "]"
          );
          return e
            ? e.getAttribute(this.o.prefix + "-" + this.o.namespace)
            : null;
        }),
        (e.getHref = function (t) {
          if (t.tagName && "a" === t.tagName.toLowerCase()) {
            if ("string" == typeof t.href) return t.href;
            var e = t.getAttribute("href") || t.getAttribute("xlink:href");
            if (e) return this.resolveUrl(e.baseVal || e);
          }
          return null;
        }),
        (e.resolveUrl = function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          var n = e.length;
          if (0 === n)
            throw new Error(
              "resolveUrl requires at least one argument; got none."
            );
          var r = document.createElement("base");
          if (((r.href = arguments[0]), 1 === n)) return r.href;
          var s = document.getElementsByTagName("head")[0];
          s.insertBefore(r, s.firstChild);
          for (var o, a = document.createElement("a"), l = 1; l < n; l++)
            (a.href = arguments[l]), (r.href = o = a.href);
          return s.removeChild(r), o;
        }),
        (e.s = function (t, e) {
          e.parentNode.insertBefore(t, e.nextSibling);
        }),
        t
      );
    })())(),
    P = new ((function () {
      function t() {
        (this.h = []), (this.v = -1);
      }
      var n = t.prototype;
      return (
        (n.init = function (t, e) {
          this.l = "barba";
          var i = {
            ns: e,
            scroll: {
              x: window.scrollX,
              y: window.scrollY,
            },
            url: t,
          };
          this.h.push(i), (this.v = 0);
          var n = {
            from: this.l,
            index: 0,
            states: [].concat(this.h),
          };
          window.history && window.history.replaceState(n, "", t);
        }),
        (n.change = function (t, e, i) {
          if (i && i.state) {
            var n = i.state,
              r = n.index;
            (e = this.m(this.v - r)), this.replace(n.states), (this.v = r);
          } else this.add(t, e);
          return e;
        }),
        (n.add = function (t, e) {
          var i = this.size,
            n = this.p(e),
            r = {
              ns: "tmp",
              scroll: {
                x: window.scrollX,
                y: window.scrollY,
              },
              url: t,
            };
          this.h.push(r), (this.v = i);
          var s = {
            from: this.l,
            index: i,
            states: [].concat(this.h),
          };
          switch (n) {
            case "push":
              window.history && window.history.pushState(s, "", t);
              break;
            case "replace":
              window.history && window.history.replaceState(s, "", t);
          }
        }),
        (n.update = function (t, e) {
          var n = e || this.v,
            r = i({}, this.get(n), {}, t);
          this.set(n, r);
        }),
        (n.remove = function (t) {
          t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
        }),
        (n.clear = function () {
          (this.h = []), (this.v = -1);
        }),
        (n.replace = function (t) {
          this.h = t;
        }),
        (n.get = function (t) {
          return this.h[t];
        }),
        (n.set = function (t, e) {
          return (this.h[t] = e);
        }),
        (n.p = function (t) {
          var e = "push",
            i = t,
            n = T.prefix + "-" + T.history;
          return (
            i.hasAttribute && i.hasAttribute(n) && (e = i.getAttribute(n)), e
          );
        }),
        (n.m = function (t) {
          return Math.abs(t) > 1
            ? t > 0
              ? "forward"
              : "back"
            : 0 === t
            ? "popstate"
            : t > 0
            ? "back"
            : "forward";
        }),
        e(t, [
          {
            key: "current",
            get: function () {
              return this.h[this.v];
            },
          },
          {
            key: "state",
            get: function () {
              return this.h[this.h.length - 1];
            },
          },
          {
            key: "previous",
            get: function () {
              return this.v < 1 ? null : this.h[this.v - 1];
            },
          },
          {
            key: "size",
            get: function () {
              return this.h.length;
            },
          },
        ]),
        t
      );
    })())(),
    L = function (t, e) {
      try {
        var i = (function () {
          if (!e.next.html)
            return Promise.resolve(t).then(function (t) {
              var i = e.next;
              if (t) {
                var n = A.toElement(t);
                (i.namespace = A.getNamespace(n)),
                  (i.container = A.getContainer(n)),
                  (i.html = t),
                  P.update({
                    ns: i.namespace,
                  });
                var r = A.toDocument(t);
                document.title = r.title;
              }
            });
        })();
        return Promise.resolve(i && i.then ? i.then(function () {}) : void 0);
      } catch (t) {
        return Promise.reject(t);
      }
    },
    M = d,
    D = {
      __proto__: null,
      update: L,
      nextTick: function () {
        return new Promise(function (t) {
          window.requestAnimationFrame(t);
        });
      },
      pathToRegexp: M,
    },
    O = function () {
      return window.location.origin;
    },
    z = function (t) {
      return void 0 === t && (t = window.location.href), I(t).port;
    },
    I = function (t) {
      var e,
        i = t.match(/:\d+/);
      if (null === i)
        /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
      else {
        var n = i[0].substring(1);
        e = parseInt(n, 10);
      }
      var r,
        s = t.replace(O(), ""),
        o = {},
        a = s.indexOf("#");
      a >= 0 && ((r = s.slice(a + 1)), (s = s.slice(0, a)));
      var l = s.indexOf("?");
      return (
        l >= 0 && ((o = q(s.slice(l + 1))), (s = s.slice(0, l))),
        {
          hash: r,
          path: s,
          port: e,
          query: o,
        }
      );
    },
    q = function (t) {
      return t.split("&").reduce(function (t, e) {
        var i = e.split("=");
        return (t[i[0]] = i[1]), t;
      }, {});
    },
    R = function (t) {
      return (
        void 0 === t && (t = window.location.href),
        t.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    j = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getOrigin: O,
      getPort: z,
      getPath: function (t) {
        return void 0 === t && (t = window.location.href), I(t).path;
      },
      parse: I,
      parseQuery: q,
      clean: R,
    };
  function F(t, e, i) {
    return (
      void 0 === e && (e = 2e3),
      new Promise(function (n, r) {
        var s = new XMLHttpRequest();
        (s.onreadystatechange = function () {
          if (s.readyState === XMLHttpRequest.DONE)
            if (200 === s.status) n(s.responseText);
            else if (s.status) {
              var e = {
                status: s.status,
                statusText: s.statusText,
              };
              i(t, e), r(e);
            }
        }),
          (s.ontimeout = function () {
            var n = new Error("Timeout error [" + e + "]");
            i(t, n), r(n);
          }),
          (s.onerror = function () {
            var e = new Error("Fetch error");
            i(t, e), r(e);
          }),
          s.open("GET", t),
          (s.timeout = e),
          s.setRequestHeader(
            "Accept",
            "text/html,application/xhtml+xml,application/xml"
          ),
          s.setRequestHeader("x-barba", "yes"),
          s.send();
      })
    );
  }
  function B(t, e) {
    return (
      void 0 === e && (e = {}),
      function () {
        for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
          n[r] = arguments[r];
        var s = !1,
          o = new Promise(function (i, r) {
            e.async = function () {
              return (
                (s = !0),
                function (t, e) {
                  t ? r(t) : i(e);
                }
              );
            };
            var o = t.apply(e, n);
            s ||
              ((function (t) {
                return (
                  !!t &&
                  ("object" == typeof t || "function" == typeof t) &&
                  "function" == typeof t.then
                );
              })(o)
                ? o.then(i, r)
                : i(o));
          });
        return o;
      }
    );
  }
  var N = new ((function (t) {
      function e() {
        var e;
        return (
          ((e = t.call(this) || this).logger = new c("@barba/core")),
          (e.all = [
            "ready",
            "page",
            "reset",
            "currentAdded",
            "currentRemoved",
            "nextAdded",
            "nextRemoved",
            "beforeOnce",
            "once",
            "afterOnce",
            "before",
            "beforeLeave",
            "leave",
            "afterLeave",
            "beforeEnter",
            "enter",
            "afterEnter",
            "after",
          ]),
          (e.registered = new Map()),
          e.init(),
          e
        );
      }
      n(e, t);
      var i = e.prototype;
      return (
        (i.init = function () {
          var t = this;
          this.registered.clear(),
            this.all.forEach(function (e) {
              t[e] ||
                (t[e] = function (i, n) {
                  t.registered.has(e) || t.registered.set(e, new Set()),
                    t.registered.get(e).add({
                      ctx: n || {},
                      fn: i,
                    });
                });
            });
        }),
        (i.do = function (t) {
          for (
            var e = this,
              i = arguments.length,
              n = new Array(i > 1 ? i - 1 : 0),
              r = 1;
            r < i;
            r++
          )
            n[r - 1] = arguments[r];
          if (this.registered.has(t)) {
            var s = Promise.resolve();
            return (
              this.registered.get(t).forEach(function (t) {
                s = s.then(function () {
                  return B(t.fn, t.ctx).apply(void 0, n);
                });
              }),
              s.catch(function (i) {
                e.logger.debug("Hook error [" + t + "]"), e.logger.error(i);
              })
            );
          }
          return Promise.resolve();
        }),
        (i.clear = function () {
          var t = this;
          this.all.forEach(function (e) {
            delete t[e];
          }),
            this.init();
        }),
        (i.help = function () {
          this.logger.info("Available hooks: " + this.all.join(","));
          var t = [];
          this.registered.forEach(function (e, i) {
            return t.push(i);
          }),
            this.logger.info("Registered hooks: " + t.join(","));
        }),
        e
      );
    })(function () {}))(),
    W = (function () {
      function t(t) {
        if (((this.P = []), "boolean" == typeof t)) this.g = t;
        else {
          var e = Array.isArray(t) ? t : [t];
          this.P = e.map(function (t) {
            return M(t);
          });
        }
      }
      return (
        (t.prototype.checkHref = function (t) {
          if ("boolean" == typeof this.g) return this.g;
          var e = I(t).path;
          return this.P.some(function (t) {
            return null !== t.exec(e);
          });
        }),
        t
      );
    })(),
    V = (function (t) {
      function e(e) {
        var i;
        return ((i = t.call(this, e) || this).k = new Map()), i;
      }
      n(e, t);
      var r = e.prototype;
      return (
        (r.set = function (t, e, i) {
          return (
            this.k.set(t, {
              action: i,
              request: e,
            }),
            {
              action: i,
              request: e,
            }
          );
        }),
        (r.get = function (t) {
          return this.k.get(t);
        }),
        (r.getRequest = function (t) {
          return this.k.get(t).request;
        }),
        (r.getAction = function (t) {
          return this.k.get(t).action;
        }),
        (r.has = function (t) {
          return !this.checkHref(t) && this.k.has(t);
        }),
        (r.delete = function (t) {
          return this.k.delete(t);
        }),
        (r.update = function (t, e) {
          var n = i({}, this.k.get(t), {}, e);
          return this.k.set(t, n), n;
        }),
        e
      );
    })(W),
    H = function () {
      return !window.history.pushState;
    },
    U = function (t) {
      return !t.el || !t.href;
    },
    X = function (t) {
      var e = t.event;
      return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    },
    Y = function (t) {
      var e = t.el;
      return e.hasAttribute("target") && "_blank" === e.target;
    },
    $ = function (t) {
      var e = t.el;
      return (
        (void 0 !== e.protocol && window.location.protocol !== e.protocol) ||
        (void 0 !== e.hostname && window.location.hostname !== e.hostname)
      );
    },
    G = function (t) {
      var e = t.el;
      return void 0 !== e.port && z() !== z(e.href);
    },
    Q = function (t) {
      var e = t.el;
      return e.getAttribute && "string" == typeof e.getAttribute("download");
    },
    Z = function (t) {
      return t.el.hasAttribute(T.prefix + "-" + T.prevent);
    },
    J = function (t) {
      return Boolean(
        t.el.closest("[" + T.prefix + "-" + T.prevent + '="all"]')
      );
    },
    K = function (t) {
      var e = t.href;
      return R(e) === R() && z(e) === z();
    },
    tt = (function (t) {
      function e(e) {
        var i;
        return (
          ((i = t.call(this, e) || this).suite = []),
          (i.tests = new Map()),
          i.init(),
          i
        );
      }
      n(e, t);
      var i = e.prototype;
      return (
        (i.init = function () {
          this.add("pushState", H),
            this.add("exists", U),
            this.add("newTab", X),
            this.add("blank", Y),
            this.add("corsDomain", $),
            this.add("corsPort", G),
            this.add("download", Q),
            this.add("preventSelf", Z),
            this.add("preventAll", J),
            this.add("sameUrl", K, !1);
        }),
        (i.add = function (t, e, i) {
          void 0 === i && (i = !0),
            this.tests.set(t, e),
            i && this.suite.push(t);
        }),
        (i.run = function (t, e, i, n) {
          return this.tests.get(t)({
            el: e,
            event: i,
            href: n,
          });
        }),
        (i.checkLink = function (t, e, i) {
          var n = this;
          return this.suite.some(function (r) {
            return n.run(r, t, e, i);
          });
        }),
        e
      );
    })(W),
    et = (function (t) {
      function e(i, n) {
        var r;
        void 0 === n && (n = "Barba error");
        for (
          var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), a = 2;
          a < s;
          a++
        )
          o[a - 2] = arguments[a];
        return (
          ((r = t.call.apply(t, [this].concat(o)) || this).error = i),
          (r.label = n),
          Error.captureStackTrace &&
            Error.captureStackTrace(
              (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(r),
              e
            ),
          (r.name = "BarbaError"),
          r
        );
      }
      return n(e, t), e;
    })(a(Error)),
    it = (function () {
      function t(t) {
        void 0 === t && (t = []),
          (this.logger = new c("@barba/core")),
          (this.all = []),
          (this.page = []),
          (this.once = []),
          (this.A = [
            {
              name: "namespace",
              type: "strings",
            },
            {
              name: "custom",
              type: "function",
            },
          ]),
          t && (this.all = this.all.concat(t)),
          this.update();
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e) {
          if ("rule" === t) this.A.splice(e.position || 0, 0, e.value);
          else this.all.push(e);
          this.update();
        }),
        (e.resolve = function (t, e) {
          var i = this;
          void 0 === e && (e = {});
          var n = e.once ? this.once : this.page;
          n = n.filter(
            e.self
              ? function (t) {
                  return t.name && "self" === t.name;
                }
              : function (t) {
                  return !t.name || "self" !== t.name;
                }
          );
          var r = new Map(),
            s = n.find(function (n) {
              var s = !0,
                o = {};
              return (
                !(!e.self || "self" !== n.name) ||
                (i.A.reverse().forEach(function (e) {
                  s &&
                    ((s = i.R(n, e, t, o)),
                    n.from &&
                      n.to &&
                      (s = i.R(n, e, t, o, "from") && i.R(n, e, t, o, "to")),
                    n.from && !n.to && (s = i.R(n, e, t, o, "from")),
                    !n.from && n.to && (s = i.R(n, e, t, o, "to")));
                }),
                r.set(n, o),
                s)
              );
            }),
            o = r.get(s),
            a = [];
          if ((a.push(e.once ? "once" : "page"), e.self && a.push("self"), o)) {
            var l,
              h = [s];
            Object.keys(o).length > 0 && h.push(o),
              (l = this.logger).info.apply(
                l,
                ["Transition found [" + a.join(",") + "]"].concat(h)
              );
          } else this.logger.info("No transition found [" + a.join(",") + "]");
          return s;
        }),
        (e.update = function () {
          var t = this;
          (this.all = this.all
            .map(function (e) {
              return t.T(e);
            })
            .sort(function (t, e) {
              return t.priority - e.priority;
            })
            .reverse()
            .map(function (t) {
              return delete t.priority, t;
            })),
            (this.page = this.all.filter(function (t) {
              return void 0 !== t.leave || void 0 !== t.enter;
            })),
            (this.once = this.all.filter(function (t) {
              return void 0 !== t.once;
            }));
        }),
        (e.R = function (t, e, i, n, r) {
          var s = !0,
            o = !1,
            a = t,
            l = e.name,
            h = l,
            u = l,
            c = l,
            d = r ? a[r] : a,
            f = "to" === r ? i.next : i.current;
          if (r ? d && d[l] : d[l]) {
            switch (e.type) {
              case "strings":
              default:
                var p = Array.isArray(d[h]) ? d[h] : [d[h]];
                f[h] && -1 !== p.indexOf(f[h]) && (o = !0),
                  -1 === p.indexOf(f[h]) && (s = !1);
                break;
              case "object":
                var m = Array.isArray(d[u]) ? d[u] : [d[u]];
                f[u]
                  ? (f[u].name && -1 !== m.indexOf(f[u].name) && (o = !0),
                    -1 === m.indexOf(f[u].name) && (s = !1))
                  : (s = !1);
                break;
              case "function":
                d[c](i) ? (o = !0) : (s = !1);
            }
            o &&
              (r ? ((n[r] = n[r] || {}), (n[r][l] = a[r][l])) : (n[l] = a[l]));
          }
          return s;
        }),
        (e.O = function (t, e, i) {
          var n = 0;
          return (
            (t[e] || (t.from && t.from[e]) || (t.to && t.to[e])) &&
              ((n += Math.pow(10, i)),
              t.from && t.from[e] && (n += 1),
              t.to && t.to[e] && (n += 2)),
            n
          );
        }),
        (e.T = function (t) {
          var e = this;
          t.priority = 0;
          var i = 0;
          return (
            this.A.forEach(function (n, r) {
              i += e.O(t, n.name, r + 1);
            }),
            (t.priority = i),
            t
          );
        }),
        t
      );
    })(),
    nt = (function () {
      function t(t) {
        void 0 === t && (t = []),
          (this.logger = new c("@barba/core")),
          (this.S = !1),
          (this.store = new it(t));
      }
      var i = t.prototype;
      return (
        (i.get = function (t, e) {
          return this.store.resolve(t, e);
        }),
        (i.doOnce = function (t) {
          var e = t.data,
            i = t.transition;
          try {
            var n = function () {
                r.S = !1;
              },
              r = this,
              s = i || {};
            r.S = !0;
            var o = l(
              function () {
                return Promise.resolve(r.j("beforeOnce", e, s)).then(
                  function () {
                    return Promise.resolve(r.once(e, s)).then(function () {
                      return Promise.resolve(r.j("afterOnce", e, s)).then(
                        function () {}
                      );
                    });
                  }
                );
              },
              function (t) {
                (r.S = !1),
                  r.logger.debug("Transition error [before/after/once]"),
                  r.logger.error(t);
              }
            );
            return Promise.resolve(o && o.then ? o.then(n) : n());
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (i.doPage = function (t) {
          var e = t.data,
            i = t.transition,
            n = t.page,
            r = t.wrapper;
          try {
            var s = function (t) {
                if (o) return t;
                a.S = !1;
              },
              o = !1,
              a = this,
              h = i || {},
              u = !0 === h.sync || !1;
            a.S = !0;
            var c = l(
              function () {
                function t() {
                  return Promise.resolve(a.j("before", e, h)).then(function () {
                    function t(t) {
                      return Promise.resolve(a.remove(e)).then(function () {
                        return Promise.resolve(a.j("after", e, h)).then(
                          function () {}
                        );
                      });
                    }
                    var i = (function () {
                      if (u)
                        return l(
                          function () {
                            return Promise.resolve(a.add(e, r)).then(
                              function () {
                                return Promise.resolve(
                                  a.j("beforeLeave", e, h)
                                ).then(function () {
                                  return Promise.resolve(
                                    a.j("beforeEnter", e, h)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        a.leave(e, h),
                                        a.enter(e, h),
                                      ])
                                    ).then(function () {
                                      return Promise.resolve(
                                        a.j("afterLeave", e, h)
                                      ).then(function () {
                                        return Promise.resolve(
                                          a.j("afterEnter", e, h)
                                        ).then(function () {});
                                      });
                                    });
                                  });
                                });
                              }
                            );
                          },
                          function (t) {
                            if (a.M(t))
                              throw new et(t, "Transition error [sync]");
                          }
                        );
                      var t = function (t) {
                          return l(
                            function () {
                              var t = (function () {
                                if (!1 !== i)
                                  return Promise.resolve(a.add(e, r)).then(
                                    function () {
                                      return Promise.resolve(
                                        a.j("beforeEnter", e, h)
                                      ).then(function () {
                                        return Promise.resolve(
                                          a.enter(e, h, i)
                                        ).then(function () {
                                          return Promise.resolve(
                                            a.j("afterEnter", e, h)
                                          ).then(function () {});
                                        });
                                      });
                                    }
                                  );
                              })();
                              if (t && t.then) return t.then(function () {});
                            },
                            function (t) {
                              if (a.M(t))
                                throw new et(
                                  t,
                                  "Transition error [before/after/enter]"
                                );
                            }
                          );
                        },
                        i = !1,
                        s = l(
                          function () {
                            return Promise.resolve(
                              a.j("beforeLeave", e, h)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([a.leave(e, h), L(n, e)]).then(
                                  function (t) {
                                    return t[0];
                                  }
                                )
                              ).then(function (t) {
                                return (
                                  (i = t),
                                  Promise.resolve(a.j("afterLeave", e, h)).then(
                                    function () {}
                                  )
                                );
                              });
                            });
                          },
                          function (t) {
                            if (a.M(t))
                              throw new et(
                                t,
                                "Transition error [before/after/leave]"
                              );
                          }
                        );
                      return s && s.then ? s.then(t) : t();
                    })();
                    return i && i.then ? i.then(t) : t();
                  });
                }
                var i = (function () {
                  if (u) return Promise.resolve(L(n, e)).then(function () {});
                })();
                return i && i.then ? i.then(t) : t();
              },
              function (t) {
                if (((a.S = !1), t.name && "BarbaError" === t.name))
                  throw (a.logger.debug(t.label), a.logger.error(t.error), t);
                throw (
                  (a.logger.debug("Transition error [page]"),
                  a.logger.error(t),
                  t)
                );
              }
            );
            return Promise.resolve(c && c.then ? c.then(s) : s(c));
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (i.once = function (t, e) {
          try {
            return Promise.resolve(N.do("once", t, e)).then(function () {
              return e.once ? B(e.once, e)(t) : Promise.resolve();
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (i.leave = function (t, e) {
          try {
            return Promise.resolve(N.do("leave", t, e)).then(function () {
              return e.leave ? B(e.leave, e)(t) : Promise.resolve();
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (i.enter = function (t, e, i) {
          try {
            return Promise.resolve(N.do("enter", t, e)).then(function () {
              return e.enter ? B(e.enter, e)(t, i) : Promise.resolve();
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (i.add = function (t, e) {
          try {
            return (
              A.addContainer(t.next.container, e),
              N.do("nextAdded", t),
              Promise.resolve()
            );
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (i.remove = function (t) {
          try {
            return (
              A.removeContainer(t.current.container),
              N.do("currentRemoved", t),
              Promise.resolve()
            );
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (i.M = function (t) {
          return t.message
            ? !/Timeout error|Fetch error/.test(t.message)
            : !t.status;
        }),
        (i.j = function (t, e, i) {
          try {
            return Promise.resolve(N.do(t, e, i)).then(function () {
              return i[t] ? B(i[t], i)(e) : Promise.resolve();
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        e(t, [
          {
            key: "isRunning",
            get: function () {
              return this.S;
            },
            set: function (t) {
              this.S = t;
            },
          },
          {
            key: "hasOnce",
            get: function () {
              return this.store.once.length > 0;
            },
          },
          {
            key: "hasSelf",
            get: function () {
              return this.store.all.some(function (t) {
                return "self" === t.name;
              });
            },
          },
          {
            key: "shouldWait",
            get: function () {
              return this.store.all.some(function (t) {
                return (t.to && !t.to.route) || t.sync;
              });
            },
          },
        ]),
        t
      );
    })(),
    rt = (function () {
      function t(t) {
        var e = this;
        (this.names = [
          "beforeLeave",
          "afterLeave",
          "beforeEnter",
          "afterEnter",
        ]),
          (this.byNamespace = new Map()),
          0 !== t.length &&
            (t.forEach(function (t) {
              e.byNamespace.set(t.namespace, t);
            }),
            this.names.forEach(function (t) {
              N[t](e.L(t));
            }));
      }
      return (
        (t.prototype.L = function (t) {
          var e = this;
          return function (i) {
            var n = t.match(/enter/i) ? i.next : i.current,
              r = e.byNamespace.get(n.namespace);
            return r && r[t] ? B(r[t], r)(i) : Promise.resolve();
          };
        }),
        t
      );
    })();
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (t) {
        var e = this;
        do {
          if (e.matches(t)) return e;
          e = e.parentElement || e.parentNode;
        } while (null !== e && 1 === e.nodeType);
        return null;
      });
  var st = {
    container: null,
    html: "",
    namespace: "",
    url: {
      hash: "",
      href: "",
      path: "",
      port: null,
      query: {},
    },
  };
  return new ((function () {
    function t() {
      (this.version = "2.9.7"),
        (this.schemaPage = st),
        (this.Logger = c),
        (this.logger = new c("@barba/core")),
        (this.plugins = []),
        (this.hooks = N),
        (this.dom = A),
        (this.helpers = D),
        (this.history = P),
        (this.request = F),
        (this.url = j);
    }
    var n = t.prototype;
    return (
      (n.use = function (t, e) {
        var i = this.plugins;
        i.indexOf(t) > -1
          ? this.logger.warn("Plugin [" + t.name + "] already installed.")
          : "function" == typeof t.install
          ? (t.install(this, e), i.push(t))
          : this.logger.warn(
              "Plugin [" + t.name + '] has no "install" method.'
            );
      }),
      (n.init = function (t) {
        var e = void 0 === t ? {} : t,
          n = e.transitions,
          r = void 0 === n ? [] : n,
          s = e.views,
          o = void 0 === s ? [] : s,
          a = e.schema,
          l = void 0 === a ? T : a,
          h = e.requestError,
          u = e.timeout,
          d = void 0 === u ? 2e3 : u,
          f = e.cacheIgnore,
          p = void 0 !== f && f,
          m = e.prefetchIgnore,
          g = void 0 !== m && m,
          v = e.preventRunning,
          y = void 0 !== v && v,
          _ = e.prevent,
          b = void 0 === _ ? null : _,
          w = e.debug,
          x = e.logLevel;
        if (
          (c.setLevel(
            !0 === (void 0 !== w && w) ? "debug" : void 0 === x ? "off" : x
          ),
          this.logger.info(this.version),
          Object.keys(l).forEach(function (t) {
            T[t] && (T[t] = l[t]);
          }),
          (this.$ = h),
          (this.timeout = d),
          (this.cacheIgnore = p),
          (this.prefetchIgnore = g),
          (this.preventRunning = y),
          (this._ = this.dom.getWrapper()),
          !this._)
        )
          throw new Error("[@barba/core] No Barba wrapper found");
        this._.setAttribute("aria-live", "polite"), this.q();
        var S = this.data.current;
        if (!S.container)
          throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new V(p)),
          (this.prevent = new tt(g)),
          (this.transitions = new nt(r)),
          (this.views = new rt(o)),
          null !== b)
        ) {
          if ("function" != typeof b)
            throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", b);
        }
        this.history.init(S.url.href, S.namespace),
          (this.B = this.B.bind(this)),
          (this.U = this.U.bind(this)),
          (this.D = this.D.bind(this)),
          this.F(),
          this.plugins.forEach(function (t) {
            return t.init();
          });
        var E = this.data;
        (E.trigger = "barba"),
          (E.next = E.current),
          (E.current = i({}, this.schemaPage)),
          this.hooks.do("ready", E),
          this.once(E),
          this.q();
      }),
      (n.destroy = function () {
        this.q(),
          this.H(),
          this.history.clear(),
          this.hooks.clear(),
          (this.plugins = []);
      }),
      (n.force = function (t) {
        window.location.assign(t);
      }),
      (n.go = function (t, e, i) {
        var n;
        if ((void 0 === e && (e = "barba"), this.transitions.isRunning))
          this.force(t);
        else if (
          !(n =
            "popstate" === e
              ? this.history.current &&
                this.url.getPath(this.history.current.url) ===
                  this.url.getPath(t)
              : this.prevent.run("sameUrl", null, null, t)) ||
          this.transitions.hasSelf
        )
          return (
            (e = this.history.change(t, e, i)),
            i && (i.stopPropagation(), i.preventDefault()),
            this.page(t, e, n)
          );
      }),
      (n.once = function (t) {
        try {
          var e = this;
          return Promise.resolve(e.hooks.do("beforeEnter", t)).then(
            function () {
              function i() {
                return Promise.resolve(e.hooks.do("afterEnter", t)).then(
                  function () {}
                );
              }
              var n = (function () {
                if (e.transitions.hasOnce) {
                  var i = e.transitions.get(t, {
                    once: !0,
                  });
                  return Promise.resolve(
                    e.transitions.doOnce({
                      transition: i,
                      data: t,
                    })
                  ).then(function () {});
                }
              })();
              return n && n.then ? n.then(i) : i();
            }
          );
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      (n.page = function (t, e, n) {
        try {
          var r = function () {
              var t = s.data;
              return Promise.resolve(s.hooks.do("page", t)).then(function () {
                var e = l(
                  function () {
                    var e = s.transitions.get(t, {
                      once: !1,
                      self: n,
                    });
                    return Promise.resolve(
                      s.transitions.doPage({
                        data: t,
                        page: o,
                        transition: e,
                        wrapper: s._,
                      })
                    ).then(function () {
                      s.q();
                    });
                  },
                  function () {
                    0 === c.getLevel() && s.force(t.current.url.href);
                  }
                );
                if (e && e.then) return e.then(function () {});
              });
            },
            s = this;
          (s.data.next.url = i(
            {
              href: t,
            },
            s.url.parse(t)
          )),
            (s.data.trigger = e);
          var o = s.cache.has(t)
              ? s.cache.update(t, {
                  action: "click",
                }).request
              : s.cache.set(
                  t,
                  s.request(t, s.timeout, s.onRequestError.bind(s, e)),
                  "click"
                ).request,
            a = (function () {
              if (s.transitions.shouldWait)
                return Promise.resolve(L(o, s.data)).then(function () {});
            })();
          return Promise.resolve(a && a.then ? a.then(r) : r());
        } catch (t) {
          return Promise.reject(t);
        }
      }),
      (n.onRequestError = function (t) {
        this.transitions.isRunning = !1;
        for (
          var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        var r = i[0],
          s = i[1],
          o = this.cache.getAction(r);
        return (
          this.cache.delete(r),
          !(
            (this.$ && !1 === this.$(t, o, r, s)) ||
            ("click" === o && this.force(r), 1)
          )
        );
      }),
      (n.prefetch = function (t) {
        var e = this;
        this.cache.has(t) ||
          this.cache.set(
            t,
            this.request(
              t,
              this.timeout,
              this.onRequestError.bind(this, "barba")
            ).catch(function (t) {
              e.logger.error(t);
            }),
            "prefetch"
          );
      }),
      (n.F = function () {
        !0 !== this.prefetchIgnore &&
          (document.addEventListener("mouseover", this.B),
          document.addEventListener("touchstart", this.B)),
          document.addEventListener("click", this.U),
          window.addEventListener("popstate", this.D);
      }),
      (n.H = function () {
        !0 !== this.prefetchIgnore &&
          (document.removeEventListener("mouseover", this.B),
          document.removeEventListener("touchstart", this.B)),
          document.removeEventListener("click", this.U),
          window.removeEventListener("popstate", this.D);
      }),
      (n.B = function (t) {
        var e = this,
          i = this.I(t);
        if (i) {
          var n = this.dom.getHref(i);
          this.prevent.checkHref(n) ||
            this.cache.has(n) ||
            this.cache.set(
              n,
              this.request(
                n,
                this.timeout,
                this.onRequestError.bind(this, i)
              ).catch(function (t) {
                e.logger.error(t);
              }),
              "enter"
            );
        }
      }),
      (n.U = function (t) {
        var e = this.I(t);
        if (e)
          return this.transitions.isRunning && this.preventRunning
            ? (t.preventDefault(), void t.stopPropagation())
            : void this.go(this.dom.getHref(e), e, t);
      }),
      (n.D = function (t) {
        this.go(this.url.getHref(), "popstate", t);
      }),
      (n.I = function (t) {
        for (var e = t.target; e && !this.dom.getHref(e); ) e = e.parentNode;
        if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e))) return e;
      }),
      (n.q = function () {
        var t = this.url.getHref(),
          e = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: i(
              {
                href: t,
              },
              this.url.parse(t)
            ),
          };
        (this.C = {
          current: e,
          next: i({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      e(t, [
        {
          key: "data",
          get: function () {
            return this.C;
          },
        },
        {
          key: "wrapper",
          get: function () {
            return this._;
          },
        },
      ]),
      t
    );
  })())();
}),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t || self).Lenis = e());
  })(this, function () {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(
            t,
            "symbol" ==
              typeof (r = (function (t, e) {
                if ("object" != typeof t || null === t) return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                  var n = i.call(t, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(t);
              })(n.key))
              ? r
              : String(r),
            n
          );
      }
      var r;
    }
    function e(e, i, n) {
      return (
        i && t(e.prototype, i),
        n && t(e, n),
        Object.defineProperty(e, "prototype", {
          writable: !1,
        }),
        e
      );
    }
    function i() {
      return (
        (i = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            }),
        i.apply(this, arguments)
      );
    }
    function n(t, e, i) {
      return Math.max(t, Math.min(e, i));
    }
    var r = (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.advance = function (t) {
            var e, i, r, s;
            if (this.isRunning) {
              var o = !1;
              if (this.lerp)
                (this.value =
                  ((i = this.value),
                  (r = this.to),
                  (1 - (s = 1 - Math.exp(-60 * this.lerp * t))) * i + s * r)),
                  Math.round(this.value) === this.to &&
                    ((this.value = this.to), (o = !0));
              else {
                this.currentTime += t;
                var a = n(0, this.currentTime / this.duration, 1),
                  l = (o = a >= 1) ? 1 : this.easing(a);
                this.value = this.from + (this.to - this.from) * l;
              }
              null == (e = this.onUpdate) ||
                e.call(this, this.value, {
                  completed: o,
                }),
                o && this.stop();
            }
          }),
          (e.stop = function () {
            this.isRunning = !1;
          }),
          (e.fromTo = function (t, e, i) {
            var n = i.lerp,
              r = void 0 === n ? 0.1 : n,
              s = i.duration,
              o = void 0 === s ? 1 : s,
              a = i.easing,
              l =
                void 0 === a
                  ? function (t) {
                      return t;
                    }
                  : a,
              h = i.onUpdate;
            (this.from = this.value = t),
              (this.to = e),
              (this.lerp = r),
              (this.duration = o),
              (this.easing = l),
              (this.currentTime = 0),
              (this.isRunning = !0),
              (this.onUpdate = h);
          }),
          t
        );
      })(),
      s = (function () {
        function t(t) {
          var e,
            i,
            n = this,
            r = void 0 === t ? {} : t,
            s = r.wrapper,
            o = r.content,
            a = r.autoResize,
            l = void 0 === a || a;
          if (
            ((this.resize = function () {
              n.onWrapperResize(), n.onContentResize();
            }),
            (this.onWrapperResize = function () {
              n.wrapper === window
                ? ((n.width = window.innerWidth),
                  (n.height = window.innerHeight))
                : ((n.width = n.wrapper.clientWidth),
                  (n.height = n.wrapper.clientHeight));
            }),
            (this.onContentResize = function () {
              (n.scrollHeight = n.content.scrollHeight),
                (n.scrollWidth = n.content.scrollWidth);
            }),
            (this.wrapper = s),
            (this.content = o),
            l)
          ) {
            var h =
              ((e = this.resize),
              function () {
                var t = arguments,
                  n = this;
                clearTimeout(i),
                  (i = setTimeout(function () {
                    e.apply(n, t);
                  }, 250));
              });
            this.wrapper !== window &&
              ((this.wrapperResizeObserver = new ResizeObserver(h)),
              this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(h)),
              this.contentResizeObserver.observe(this.content);
          }
          this.resize();
        }
        return (
          (t.prototype.destroy = function () {
            var t, e;
            null == (t = this.wrapperResizeObserver) || t.disconnect(),
              null == (e = this.contentResizeObserver) || e.disconnect();
          }),
          e(t, [
            {
              key: "limit",
              get: function () {
                return {
                  x: this.scrollWidth - this.width,
                  y: this.scrollHeight - this.height,
                };
              },
            },
          ]),
          t
        );
      })(),
      o = (function () {
        function t() {
          this.events = {};
        }
        var e = t.prototype;
        return (
          (e.emit = function (t) {
            for (var e = this.events[t] || [], i = 0, n = e.length; i < n; i++)
              e[i].apply(e, [].slice.call(arguments, 1));
          }),
          (e.on = function (t, e) {
            var i,
              n = this;
            return (
              (null == (i = this.events[t]) ? void 0 : i.push(e)) ||
                (this.events[t] = [e]),
              function () {
                var i;
                n.events[t] =
                  null == (i = n.events[t])
                    ? void 0
                    : i.filter(function (t) {
                        return e !== t;
                      });
              }
            );
          }),
          (e.off = function (t, e) {
            var i;
            this.events[t] =
              null == (i = this.events[t])
                ? void 0
                : i.filter(function (t) {
                    return e !== t;
                  });
          }),
          (e.destroy = function () {
            this.events = {};
          }),
          t
        );
      })(),
      a = (function () {
        function t(t, e) {
          var i = this,
            r = e.wheelMultiplier,
            s = void 0 === r ? 1 : r,
            a = e.touchMultiplier,
            l = void 0 === a ? 2 : a,
            h = e.normalizeWheel,
            u = void 0 !== h && h;
          (this.onTouchStart = function (t) {
            var e = t.targetTouches ? t.targetTouches[0] : t,
              n = e.clientY;
            (i.touchStart.x = e.clientX),
              (i.touchStart.y = n),
              (i.lastDelta = {
                x: 0,
                y: 0,
              });
          }),
            (this.onTouchMove = function (t) {
              var e = t.targetTouches ? t.targetTouches[0] : t,
                n = e.clientX,
                r = e.clientY,
                s = -(n - i.touchStart.x) * i.touchMultiplier,
                o = -(r - i.touchStart.y) * i.touchMultiplier;
              (i.touchStart.x = n),
                (i.touchStart.y = r),
                (i.lastDelta = {
                  x: s,
                  y: o,
                }),
                i.emitter.emit("scroll", {
                  deltaX: s,
                  deltaY: o,
                  event: t,
                });
            }),
            (this.onTouchEnd = function (t) {
              i.emitter.emit("scroll", {
                deltaX: i.lastDelta.x,
                deltaY: i.lastDelta.y,
                event: t,
              });
            }),
            (this.onWheel = function (t) {
              var e = t.deltaX,
                r = t.deltaY;
              i.normalizeWheel &&
                ((e = n(-100, e, 100)), (r = n(-100, r, 100))),
                i.emitter.emit("scroll", {
                  deltaX: (e *= i.wheelMultiplier),
                  deltaY: (r *= i.wheelMultiplier),
                  event: t,
                });
            }),
            (this.element = t),
            (this.wheelMultiplier = s),
            (this.touchMultiplier = l),
            (this.normalizeWheel = u),
            (this.touchStart = {
              x: null,
              y: null,
            }),
            (this.emitter = new o()),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        var e = t.prototype;
        return (
          (e.on = function (t, e) {
            return this.emitter.on(t, e);
          }),
          (e.destroy = function () {
            this.emitter.destroy(),
              this.element.removeEventListener("wheel", this.onWheel, {
                passive: !1,
              }),
              this.element.removeEventListener(
                "touchstart",
                this.onTouchStart,
                {
                  passive: !1,
                }
              ),
              this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1,
              }),
              this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: !1,
              });
          }),
          t
        );
      })();
    return (function () {
      function t(t) {
        var e = this,
          n = void 0 === t ? {} : t,
          l = n.wrapper,
          h = void 0 === l ? window : l,
          u = n.content,
          c = void 0 === u ? document.documentElement : u,
          d = n.wheelEventsTarget,
          f = void 0 === d ? h : d,
          p = n.smoothWheel,
          m = void 0 === p || p,
          g = n.smoothTouch,
          v = void 0 !== g && g,
          y = n.syncTouch,
          _ = void 0 !== y && y,
          b = n.syncTouchLerp,
          w = void 0 === b ? 0.1 : b,
          x = n.__iosNoInertiaSyncTouchLerp,
          S = void 0 === x ? 0.4 : x,
          E = n.touchInertiaMultiplier,
          k = void 0 === E ? 35 : E,
          C = n.duration,
          T = n.easing,
          A =
            void 0 === T
              ? function (t) {
                  return Math.min(1, 1.001 - Math.pow(2, -10 * t));
                }
              : T,
          P = n.lerp,
          L = void 0 === P ? C && 0.1 : P,
          M = n.infinite,
          D = void 0 !== M && M,
          O = n.orientation,
          z = void 0 === O ? "vertical" : O,
          I = n.gestureOrientation,
          q = void 0 === I ? "vertical" : I,
          R = n.touchMultiplier,
          j = void 0 === R ? 1 : R,
          F = n.wheelMultiplier,
          B = void 0 === F ? 1 : F,
          N = n.normalizeWheel,
          W = void 0 !== N && N,
          V = n.autoResize,
          H = void 0 === V || V;
        (this.onVirtualScroll = function (t) {
          var n = t.deltaX,
            r = t.deltaY,
            s = t.event;
          if (!s.ctrlKey) {
            var o = s.type.includes("touch"),
              a = s.type.includes("wheel");
            if (
              !(
                ("vertical" === e.options.gestureOrientation && 0 === r) ||
                ("horizontal" === e.options.gestureOrientation && 0 === n) ||
                (o &&
                  "vertical" === e.options.gestureOrientation &&
                  0 === e.scroll &&
                  !e.options.infinite &&
                  r <= 0)
              )
            ) {
              var l = s.composedPath();
              if (
                !(l = l.slice(0, l.indexOf(e.rootElement))).find(function (t) {
                  var e;
                  return (
                    (null == t.hasAttribute
                      ? void 0
                      : t.hasAttribute("data-lenis-prevent")) ||
                    (o &&
                      (null == t.hasAttribute
                        ? void 0
                        : t.hasAttribute("data-lenis-prevent-touch"))) ||
                    (a &&
                      (null == t.hasAttribute
                        ? void 0
                        : t.hasAttribute("data-lenis-prevent-wheel"))) ||
                    (null == (e = t.classList) ? void 0 : e.contains("lenis"))
                  );
                })
              )
                if (e.isStopped || e.isLocked) s.preventDefault();
                else {
                  if (
                    ((e.isSmooth =
                      ((e.options.smoothTouch || e.options.syncTouch) && o) ||
                      (e.options.smoothWheel && a)),
                    !e.isSmooth)
                  )
                    return (e.isScrolling = !1), void e.animate.stop();
                  s.preventDefault();
                  var h = r;
                  "both" === e.options.gestureOrientation
                    ? (h = Math.abs(r) > Math.abs(n) ? r : n)
                    : "horizontal" === e.options.gestureOrientation && (h = n);
                  var u = o && e.options.syncTouch,
                    c = o && "touchend" === s.type && Math.abs(h) > 1;
                  c && (h = e.velocity * e.options.touchInertiaMultiplier),
                    e.scrollTo(
                      e.targetScroll + h,
                      i(
                        {
                          programmatic: !1,
                        },
                        u && {
                          lerp: c
                            ? e.syncTouchLerp
                            : e.options.__iosNoInertiaSyncTouchLerp,
                        }
                      )
                    );
                }
            }
          }
        }),
          (this.onScroll = function () {
            if (!e.isScrolling) {
              var t = e.animatedScroll;
              (e.animatedScroll = e.targetScroll = e.actualScroll),
                (e.velocity = 0),
                (e.direction = Math.sign(e.animatedScroll - t)),
                e.emit();
            }
          }),
          (window.lenisVersion = "1.0.22"),
          (h !== document.documentElement && h !== document.body) ||
            (h = window),
          (this.options = {
            wrapper: h,
            content: c,
            wheelEventsTarget: f,
            smoothWheel: m,
            smoothTouch: v,
            syncTouch: _,
            syncTouchLerp: w,
            __iosNoInertiaSyncTouchLerp: S,
            touchInertiaMultiplier: k,
            duration: C,
            easing: A,
            lerp: L,
            infinite: D,
            gestureOrientation: q,
            orientation: z,
            touchMultiplier: j,
            wheelMultiplier: B,
            normalizeWheel: W,
            autoResize: H,
          }),
          (this.dimensions = new s({
            wrapper: h,
            content: c,
            autoResize: H,
          })),
          this.rootElement.classList.add("lenis"),
          (this.velocity = 0),
          (this.isStopped = !1),
          (this.isSmooth = m || v),
          (this.isScrolling = !1),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          (this.animate = new r()),
          (this.emitter = new o()),
          this.options.wrapper.addEventListener("scroll", this.onScroll, {
            passive: !1,
          }),
          (this.virtualScroll = new a(f, {
            touchMultiplier: j,
            wheelMultiplier: B,
            normalizeWheel: W,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll);
      }
      var l = t.prototype;
      return (
        (l.destroy = function () {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener("scroll", this.onScroll, {
              passive: !1,
            }),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.rootElement.classList.remove("lenis"),
            this.rootElement.classList.remove("lenis-smooth"),
            this.rootElement.classList.remove("lenis-scrolling"),
            this.rootElement.classList.remove("lenis-stopped");
        }),
        (l.on = function (t, e) {
          return this.emitter.on(t, e);
        }),
        (l.off = function (t, e) {
          return this.emitter.off(t, e);
        }),
        (l.setScroll = function (t) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = t)
            : (this.rootElement.scrollTop = t);
        }),
        (l.resize = function () {
          this.dimensions.resize();
        }),
        (l.emit = function () {
          this.emitter.emit("scroll", this);
        }),
        (l.reset = function () {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.velocity = 0),
            this.animate.stop();
        }),
        (l.start = function () {
          (this.isStopped = !1), this.reset();
        }),
        (l.stop = function () {
          (this.isStopped = !0), this.animate.stop(), this.reset();
        }),
        (l.raf = function (t) {
          var e = t - (this.time || t);
          (this.time = t), this.animate.advance(0.001 * e);
        }),
        (l.scrollTo = function (t, e) {
          var i = this,
            r = void 0 === e ? {} : e,
            s = r.offset,
            o = void 0 === s ? 0 : s,
            a = r.immediate,
            l = void 0 !== a && a,
            h = r.lock,
            u = void 0 !== h && h,
            c = r.duration,
            d = void 0 === c ? this.options.duration : c,
            f = r.easing,
            p = void 0 === f ? this.options.easing : f,
            m = r.lerp,
            g = void 0 === m ? !d && this.options.lerp : m,
            v = r.onComplete,
            y = void 0 === v ? null : v,
            _ = r.force,
            b = r.programmatic,
            w = void 0 === b || b;
          if (!this.isStopped || (void 0 !== _ && _)) {
            if (["top", "left", "start"].includes(t)) t = 0;
            else if (["bottom", "right", "end"].includes(t)) t = this.limit;
            else {
              var x, S;
              if (
                ("string" == typeof t
                  ? (S = document.querySelector(t))
                  : null != (x = t) && x.nodeType && (S = t),
                S)
              ) {
                if (this.options.wrapper !== window) {
                  var E = this.options.wrapper.getBoundingClientRect();
                  o -= this.isHorizontal ? E.left : E.top;
                }
                var k = S.getBoundingClientRect();
                t = (this.isHorizontal ? k.left : k.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof t) {
              if (
                ((t += o),
                (t = Math.round(t)),
                this.options.infinite
                  ? w && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (t = n(0, t, this.limit)),
                l)
              )
                return (
                  (this.animatedScroll = this.targetScroll = t),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.emit(),
                  void (null == y || y())
                );
              if (!w) {
                if (t === this.targetScroll) return;
                this.targetScroll = t;
              }
              this.animate.fromTo(this.animatedScroll, t, {
                duration: d,
                easing: p,
                lerp: g,
                onUpdate: function (t, e) {
                  var n = e.completed;
                  u && (i.isLocked = !0),
                    (i.isScrolling = !0),
                    (i.velocity = t - i.animatedScroll),
                    (i.direction = Math.sign(i.velocity)),
                    (i.animatedScroll = t),
                    i.setScroll(i.scroll),
                    w && (i.targetScroll = t),
                    n &&
                      (u && (i.isLocked = !1),
                      requestAnimationFrame(function () {
                        i.isScrolling = !1;
                      }),
                      (i.velocity = 0),
                      null == y || y()),
                    i.emit();
                },
              });
            }
          }
        }),
        e(t, [
          {
            key: "rootElement",
            get: function () {
              return this.options.wrapper === window
                ? this.options.content
                : this.options.wrapper;
            },
          },
          {
            key: "limit",
            get: function () {
              return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
            },
          },
          {
            key: "isHorizontal",
            get: function () {
              return "horizontal" === this.options.orientation;
            },
          },
          {
            key: "actualScroll",
            get: function () {
              return this.isHorizontal
                ? this.rootElement.scrollLeft
                : this.rootElement.scrollTop;
            },
          },
          {
            key: "scroll",
            get: function () {
              return this.options.infinite
                ? ((this.animatedScroll % (t = this.limit)) + t) % t
                : this.animatedScroll;
              var t;
            },
          },
          {
            key: "progress",
            get: function () {
              return 0 === this.limit ? 1 : this.scroll / this.limit;
            },
          },
          {
            key: "isSmooth",
            get: function () {
              return this.__isSmooth;
            },
            set: function (t) {
              this.__isSmooth !== t &&
                (this.rootElement.classList.toggle("lenis-smooth", t),
                (this.__isSmooth = t));
            },
          },
          {
            key: "isScrolling",
            get: function () {
              return this.__isScrolling;
            },
            set: function (t) {
              this.__isScrolling !== t &&
                (this.rootElement.classList.toggle("lenis-scrolling", t),
                (this.__isScrolling = t));
            },
          },
          {
            key: "isStopped",
            get: function () {
              return this.__isStopped;
            },
            set: function (t) {
              this.__isStopped !== t &&
                (this.rootElement.classList.toggle("lenis-stopped", t),
                (this.__isStopped = t));
            },
          },
        ]),
        t
      );
    })();
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e(((t = t || self).window = t.window || {}));
  })(this, function (t) {
    "use strict";
    function e(t, e) {
      (t.prototype = Object.create(e.prototype)),
        ((t.prototype.constructor = t).__proto__ = e);
    }
    function i(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function n(t) {
      return "string" == typeof t;
    }
    function r(t) {
      return "function" == typeof t;
    }
    function s(t) {
      return "number" == typeof t;
    }
    function o(t) {
      return void 0 === t;
    }
    function a(t) {
      return "object" == typeof t;
    }
    function l(t) {
      return !1 !== t;
    }
    function h() {
      return "undefined" != typeof window;
    }
    function u(t) {
      return r(t) || n(t);
    }
    function c(t) {
      return (kt = Se(t, ce)) && Fi;
    }
    function d(t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    }
    function f(t, e) {
      return !e && console.warn(t);
    }
    function p(t, e) {
      return (t && (ce[t] = e) && kt && (kt[t] = e)) || ce;
    }
    function m() {
      return 0;
    }
    function g(t) {
      var e,
        i,
        n = t[0];
      if ((a(n) || r(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
        for (i = we.length; i-- && !we[i].targetTest(n); );
        e = we[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new $e(t[i], e)))) ||
          t.splice(i, 1);
      return t;
    }
    function v(t) {
      return t._gsap || g(Le(t))[0]._gsap;
    }
    function y(t, e, i) {
      return (i = t[e]) && r(i)
        ? t[e]()
        : (o(i) && t.getAttribute && t.getAttribute(e)) || i;
    }
    function _(t, e) {
      return (t = t.split(",")).forEach(e) || t;
    }
    function b(t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    }
    function w(t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    }
    function x(t, e) {
      var i = e.charAt(0),
        n = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
      );
    }
    function S(t, e) {
      for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
      return n < i;
    }
    function E() {
      var t,
        e,
        i = ge.length,
        n = ge.slice(0);
      for (ve = {}, t = ge.length = 0; t < i; t++)
        (e = n[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function k(t, e, i, n) {
      ge.length && !_t && E(),
        t.render(e, i, n || (_t && e < 0 && (t._initted || t._startAt))),
        ge.length && !_t && E();
    }
    function C(t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(he).length < 2
        ? e
        : n(t)
        ? t.trim()
        : t;
    }
    function T(t) {
      return t;
    }
    function A(t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    }
    function P(t, e) {
      for (var i in e)
        "__proto__" !== i &&
          "constructor" !== i &&
          "prototype" !== i &&
          (t[i] = a(e[i]) ? P(t[i] || (t[i] = {}), e[i]) : e[i]);
      return t;
    }
    function L(t, e) {
      var i,
        n = {};
      for (i in t) i in e || (n[i] = t[i]);
      return n;
    }
    function M(t) {
      var e = t.parent || wt,
        i = t.keyframes
          ? (function (t) {
              return function (e, i) {
                for (var n in i)
                  n in e ||
                    ("duration" === n && t) ||
                    "ease" === n ||
                    (e[n] = i[n]);
              };
            })(ne(t.keyframes))
          : A;
      if (l(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    }
    function D(t, e, i, n, r) {
      void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
      var s,
        o = t[n];
      if (r) for (s = e[r]; o && o[r] > s; ) o = o._prev;
      return (
        o
          ? ((e._next = o._next), (o._next = e))
          : ((e._next = t[i]), (t[i] = e)),
        e._next ? (e._next._prev = e) : (t[n] = e),
        (e._prev = o),
        (e.parent = e._dp = t),
        e
      );
    }
    function O(t, e, i, n) {
      void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
      var r = e._prev,
        s = e._next;
      r ? (r._next = s) : t[i] === e && (t[i] = s),
        s ? (s._prev = r) : t[n] === e && (t[n] = r),
        (e._next = e._prev = e.parent = null);
    }
    function z(t, e) {
      t.parent &&
        (!e || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    }
    function I(t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
      return t;
    }
    function q(t, e, i, n) {
      return (
        t._startAt &&
        (_t
          ? t._startAt.revert(fe)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, n))
      );
    }
    function R(t) {
      return t._repeat ? Ee(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    }
    function j(t, e) {
      return (
        (t - e._start) * e._ts +
        (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    }
    function F(t) {
      return (t._end = w(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || Gt) || 0)
      ));
    }
    function B(t, e) {
      var i = t._dp;
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = w(
            i._time -
              (0 < t._ts
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          F(t),
          i._dirty || I(i, t)),
        t
      );
    }
    function N(t, e) {
      var i;
      if (
        ((e._time ||
          (!e._dur && e._initted) ||
          (e._start < t._time && (e._dur || !e.add))) &&
          ((i = j(t.rawTime(), e)),
          (!e._dur || Ae(0, e.totalDuration(), i) - e._tTime > Gt) &&
            e.render(i, !0)),
        I(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -Gt;
      }
    }
    function W(t, e, i, n) {
      return (
        e.parent && z(e),
        (e._start = w(
          (s(i) ? i : i || t !== wt ? Te(t, i, e) : t._time) + e._delay
        )),
        (e._end = w(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        D(t, e, "_first", "_last", t._sort ? "_start" : 0),
        ke(e) || (t._recent = e),
        n || N(t, e),
        t._ts < 0 && B(t, t._tTime),
        t
      );
    }
    function V(t, e) {
      return (
        (ce.ScrollTrigger || d("scrollTrigger", e)) &&
        ce.ScrollTrigger.create(e, t)
      );
    }
    function H(t, e, i, n, r) {
      return (
        ni(t, e, r),
        t._initted
          ? !i &&
            t._pt &&
            !_t &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            Tt !== je.frame
            ? (ge.push(t), (t._lazy = [r, n]), 1)
            : void 0
          : 1
      );
    }
    function U(t, e, i, n) {
      var r = t._repeat,
        s = w(e) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !n && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = r ? (r < 0 ? 1e10 : w(s * (r + 1) + t._rDelay * r)) : s),
        0 < o && !n && B(t, (t._tTime = t._tDur * o)),
        t.parent && F(t),
        i || I(t.parent, t),
        t
      );
    }
    function X(t) {
      return t instanceof Ze ? I(t) : U(t, t._dur);
    }
    function Y(t, e, i) {
      var n,
        r,
        o = s(e[1]),
        a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
        h = e[a];
      if ((o && (h.duration = e[1]), (h.parent = i), t)) {
        for (n = h, r = i; r && !("immediateRender" in n); )
          (n = r.vars.defaults || {}), (r = l(r.vars.inherit) && r.parent);
        (h.immediateRender = l(n.immediateRender)),
          t < 2 ? (h.runBackwards = 1) : (h.startAt = e[a - 1]);
      }
      return new ai(e[0], h, e[1 + a]);
    }
    function $(t, e) {
      return t || 0 === t ? e(t) : e;
    }
    function G(t, e) {
      return n(t) && (e = ue.exec(t)) ? e[1] : "";
    }
    function Q(t, e) {
      return (
        t &&
        a(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && a(t[0]))) &&
        !t.nodeType &&
        t !== xt
      );
    }
    function Z(t) {
      return (
        (t = Le(t)[0] || f("Invalid scope") || {}),
        function (e) {
          var i = t.current || t.nativeElement || t;
          return Le(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? f("Invalid scope") || Et.createElement("div")
              : t
          );
        }
      );
    }
    function J(t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    }
    function K(t) {
      if (r(t)) return t;
      var e = a(t)
          ? t
          : {
              each: t,
            },
        i = He(e.ease),
        s = e.from || 0,
        o = parseFloat(e.base) || 0,
        l = {},
        h = 0 < s && s < 1,
        u = isNaN(s) || h,
        c = e.axis,
        d = s,
        f = s;
      return (
        n(s)
          ? (d = f =
              {
                center: 0.5,
                edges: 0.5,
                end: 1,
              }[s] || 0)
          : !h && u && ((d = s[0]), (f = s[1])),
        function (t, n, r) {
          var a,
            h,
            p,
            m,
            g,
            v,
            y,
            _,
            b,
            x = (r || e).length,
            S = l[x];
          if (!S) {
            if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, $t])[1])) {
              for (
                y = -$t;
                y < (y = r[b++].getBoundingClientRect().left) && b < x;

              );
              b--;
            }
            for (
              S = l[x] = [],
                a = u ? Math.min(b, x) * d - 0.5 : s % b,
                h = b === $t ? 0 : u ? (x * f) / b - 0.5 : (s / b) | 0,
                _ = $t,
                v = y = 0;
              v < x;
              v++
            )
              (p = (v % b) - a),
                (m = h - ((v / b) | 0)),
                (S[v] = g =
                  c ? Math.abs("y" === c ? m : p) : Kt(p * p + m * m)),
                y < g && (y = g),
                g < _ && (_ = g);
            "random" === s && J(S),
              (S.max = y - _),
              (S.min = _),
              (S.v = x =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (x < b
                      ? x - 1
                      : c
                      ? "y" === c
                        ? x / b
                        : b
                      : Math.max(b, x / b)) ||
                  0) * ("edges" === s ? -1 : 1)),
              (S.b = x < 0 ? o - x : o),
              (S.u = G(e.amount || e.each) || 0),
              (i = i && x < 0 ? Ve(i) : i);
          }
          return (
            (x = (S[t] - S.min) / S.max || 0),
            w(S.b + (i ? i(x) : x) * S.v) + S.u
          );
        }
      );
    }
    function tt(t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (i) {
        var n = w(Math.round(parseFloat(i) / t) * t * e);
        return (n - (n % 1)) / e + (s(i) ? 0 : G(i));
      };
    }
    function et(t, e) {
      var i,
        n,
        o = ne(t);
      return (
        !o &&
          a(t) &&
          ((i = o = t.radius || $t),
          t.values
            ? ((t = Le(t.values)), (n = !s(t[0])) && (i *= i))
            : (t = tt(t.increment))),
        $(
          e,
          o
            ? r(t)
              ? function (e) {
                  return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                }
              : function (e) {
                  for (
                    var r,
                      o,
                      a = parseFloat(n ? e.x : e),
                      l = parseFloat(n ? e.y : 0),
                      h = $t,
                      u = 0,
                      c = t.length;
                    c--;

                  )
                    (r = n
                      ? (r = t[c].x - a) * r + (o = t[c].y - l) * o
                      : Math.abs(t[c] - a)) < h && ((h = r), (u = c));
                  return (
                    (u = !i || h <= i ? t[u] : e),
                    n || u === e || s(e) ? u : u + G(e)
                  );
                }
            : tt(t)
        )
      );
    }
    function it(t, e, i, n) {
      return $(ne(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
        return ne(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                ) *
                  i *
                  n
              ) / n;
      });
    }
    function nt(t, e, i) {
      return $(i, function (i) {
        return t[~~e(i)];
      });
    }
    function rt(t) {
      for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
        (n = t.indexOf(")", e)),
          (r = "[" === t.charAt(e + 7)),
          (i = t.substr(e + 7, n - e - 7).match(r ? he : re)),
          (o +=
            t.substr(s, e - s) +
            it(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
          (s = n + 1);
      return o + t.substr(s, t.length - s);
    }
    function st(t, e, i) {
      var n,
        r,
        s,
        o = t.labels,
        a = $t;
      for (n in o)
        (r = o[n] - e) < 0 == !!i &&
          r &&
          a > (r = Math.abs(r)) &&
          ((s = n), (a = r));
      return s;
    }
    function ot(t) {
      return (
        z(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!_t),
        t.progress() < 1 && De(t, "onInterrupt"),
        t
      );
    }
    function at(t) {
      if (h() && t) {
        var e = (t = (!t.name && t.default) || t).name,
          i = r(t),
          n =
            e && !i && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          s = {
            init: m,
            render: vi,
            add: ii,
            kill: _i,
            modifier: yi,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: fi,
            aliases: {},
            register: 0,
          };
        if ((Fe(), t !== n)) {
          if (ye[e]) return;
          A(n, A(L(t, s), o)),
            Se(n.prototype, Se(s, L(t, o))),
            (ye[(n.prop = e)] = n),
            t.targetTest && (we.push(n), (me[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        p(e, n), t.register && t.register(Fi, n, wi);
      } else t && Oe.push(t);
    }
    function lt(t, e, i) {
      return (
        ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : 3 * t < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          ze +
          0.5) |
        0
      );
    }
    function ht(t, e, i) {
      var n,
        r,
        o,
        a,
        l,
        h,
        u,
        c,
        d,
        f,
        p = t ? (s(t) ? [t >> 16, (t >> 8) & ze, t & ze] : 0) : Ie.black;
      if (!p) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ie[t]))
          p = Ie[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              (t =
                "#" +
                (n = t.charAt(1)) +
                n +
                (r = t.charAt(2)) +
                r +
                (o = t.charAt(3)) +
                o +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
            9 === t.length)
          )
            return [
              (p = parseInt(t.substr(1, 6), 16)) >> 16,
              (p >> 8) & ze,
              p & ze,
              parseInt(t.substr(7), 16) / 255,
            ];
          p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ze, t & ze];
        } else if ("hsl" === t.substr(0, 3))
          if (((p = f = t.match(re)), e)) {
            if (~t.indexOf("="))
              return (p = t.match(se)), i && p.length < 4 && (p[3] = 1), p;
          } else
            (a = (+p[0] % 360) / 360),
              (l = p[1] / 100),
              (n =
                2 * (h = p[2] / 100) -
                (r = h <= 0.5 ? h * (l + 1) : h + l - h * l)),
              3 < p.length && (p[3] *= 1),
              (p[0] = lt(a + 1 / 3, n, r)),
              (p[1] = lt(a, n, r)),
              (p[2] = lt(a - 1 / 3, n, r));
        else p = t.match(re) || Ie.transparent;
        p = p.map(Number);
      }
      return (
        e &&
          !f &&
          ((n = p[0] / ze),
          (r = p[1] / ze),
          (o = p[2] / ze),
          (h = ((u = Math.max(n, r, o)) + (c = Math.min(n, r, o))) / 2),
          u === c
            ? (a = l = 0)
            : ((d = u - c),
              (l = 0.5 < h ? d / (2 - u - c) : d / (u + c)),
              (a =
                u === n
                  ? (r - o) / d + (r < o ? 6 : 0)
                  : u === r
                  ? (o - n) / d + 2
                  : (n - r) / d + 4),
              (a *= 60)),
          (p[0] = ~~(a + 0.5)),
          (p[1] = ~~(100 * l + 0.5)),
          (p[2] = ~~(100 * h + 0.5))),
        i && p.length < 4 && (p[3] = 1),
        p
      );
    }
    function ut(t) {
      var e = [],
        i = [],
        n = -1;
      return (
        t.split(qe).forEach(function (t) {
          var r = t.match(oe) || [];
          e.push.apply(e, r), i.push((n += r.length + 1));
        }),
        (e.c = i),
        e
      );
    }
    function ct(t, e, i) {
      var n,
        r,
        s,
        o,
        a = "",
        l = (t + a).match(qe),
        h = e ? "hsla(" : "rgba(",
        u = 0;
      if (!l) return t;
      if (
        ((l = l.map(function (t) {
          return (
            (t = ht(t, e, 1)) &&
            h +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        i && ((s = ut(t)), (n = i.c).join(a) !== s.c.join(a)))
      )
        for (o = (r = t.replace(qe, "1").split(oe)).length - 1; u < o; u++)
          a +=
            r[u] +
            (~n.indexOf(u)
              ? l.shift() || h + "0,0,0,0)"
              : (s.length ? s : l.length ? l : i).shift());
      if (!r)
        for (o = (r = t.split(qe)).length - 1; u < o; u++) a += r[u] + l[u];
      return a + r[o];
    }
    function dt(t) {
      var e,
        i = t.join(" ");
      if (((qe.lastIndex = 0), qe.test(i)))
        return (
          (e = Re.test(i)),
          (t[1] = ct(t[1], e)),
          (t[0] = ct(t[0], e, ut(t[1]))),
          !0
        );
    }
    function ft(t, e) {
      for (var i, n = t._first; n; )
        n instanceof Ze
          ? ft(n, e)
          : !n.vars.yoyoEase ||
            (n._yoyo && n._repeat) ||
            n._yoyo === e ||
            (n.timeline
              ? ft(n.timeline, e)
              : ((i = n._ease),
                (n._ease = n._yEase),
                (n._yEase = i),
                (n._yoyo = e))),
          (n = n._next);
    }
    function pt(t, e, i, n) {
      void 0 === i &&
        (i = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === n &&
          (n = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var r,
        s = {
          easeIn: e,
          easeOut: i,
          easeInOut: n,
        };
      return (
        _(t, function (t) {
          for (var e in ((Be[t] = ce[t] = s),
          (Be[(r = t.toLowerCase())] = i),
          s))
            Be[
              r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = Be[t + "." + e] = s[e];
        }),
        s
      );
    }
    function mt(t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    }
    function gt(t, e, i) {
      function n(t) {
        return 1 === t ? 1 : r * Math.pow(2, -10 * t) * ee((t - o) * s) + 1;
      }
      var r = 1 <= e ? e : 1,
        s = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        o = (s / Qt) * (Math.asin(1 / r) || 0),
        a =
          "out" === t
            ? n
            : "in" === t
            ? function (t) {
                return 1 - n(1 - t);
              }
            : mt(n);
      return (
        (s = Qt / s),
        (a.config = function (e, i) {
          return gt(t, e, i);
        }),
        a
      );
    }
    function vt(t, e) {
      function i(t) {
        return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
      }
      void 0 === e && (e = 1.70158);
      var n =
        "out" === t
          ? i
          : "in" === t
          ? function (t) {
              return 1 - i(1 - t);
            }
          : mt(i);
      return (
        (n.config = function (e) {
          return vt(t, e);
        }),
        n
      );
    }
    var yt,
      _t,
      bt,
      wt,
      xt,
      St,
      Et,
      kt,
      Ct,
      Tt,
      At,
      Pt,
      Lt,
      Mt,
      Dt,
      Ot,
      zt,
      It,
      qt,
      Rt,
      jt,
      Ft,
      Bt,
      Nt,
      Wt,
      Vt,
      Ht,
      Ut,
      Xt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: "",
        },
      },
      Yt = {
        duration: 0.5,
        overwrite: !1,
        delay: 0,
      },
      $t = 1e8,
      Gt = 1 / $t,
      Qt = 2 * Math.PI,
      Zt = Qt / 4,
      Jt = 0,
      Kt = Math.sqrt,
      te = Math.cos,
      ee = Math.sin,
      ie =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      ne = Array.isArray,
      re = /(?:-?\.?\d|\.)+/gi,
      se = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      oe = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      le = /[+-]=-?[.\d]+/,
      he = /[^,'"\[\]\s]+/gi,
      ue = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      ce = {},
      de = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1,
      },
      fe = {
        suppressEvents: !0,
        kill: !1,
      },
      pe = {
        suppressEvents: !0,
      },
      me = {},
      ge = [],
      ve = {},
      ye = {},
      _e = {},
      be = 30,
      we = [],
      xe = "",
      Se = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      },
      Ee = function (t, e) {
        var i = Math.floor((t /= e));
        return t && i === t ? i - 1 : i;
      },
      ke = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      Ce = {
        _start: 0,
        endTime: m,
        totalDuration: m,
      },
      Te = function t(e, i, r) {
        var s,
          o,
          a,
          l = e.labels,
          h = e._recent || Ce,
          u = e.duration() >= $t ? h.endTime(!1) : e._dur;
        return n(i) && (isNaN(i) || i in l)
          ? ((o = i.charAt(0)),
            (a = "%" === i.substr(-1)),
            (s = i.indexOf("=")),
            "<" === o || ">" === o
              ? (0 <= s && (i = i.replace(/=/, "")),
                ("<" === o ? h._start : h.endTime(0 <= h._repeat)) +
                  (parseFloat(i.substr(1)) || 0) *
                    (a ? (s < 0 ? h : r).totalDuration() / 100 : 1))
              : s < 0
              ? (i in l || (l[i] = u), l[i])
              : ((o = parseFloat(i.charAt(s - 1) + i.substr(s + 1))),
                a && r && (o = (o / 100) * (ne(r) ? r[0] : r).totalDuration()),
                1 < s ? t(e, i.substr(0, s - 1), r) + o : u + o))
          : null == i
          ? u
          : +i;
      },
      Ae = function (t, e, i) {
        return i < t ? t : e < i ? e : i;
      },
      Pe = [].slice,
      Le = function (t, e, i) {
        return bt && !e && bt.selector
          ? bt.selector(t)
          : !n(t) || i || (!St && Fe())
          ? ne(t)
            ? (function (t, e, i) {
                return (
                  void 0 === i && (i = []),
                  t.forEach(function (t) {
                    return (n(t) && !e) || Q(t, 1)
                      ? i.push.apply(i, Le(t))
                      : i.push(t);
                  }) || i
                );
              })(t, i)
            : Q(t)
            ? Pe.call(t, 0)
            : t
            ? [t]
            : []
          : Pe.call((e || Et).querySelectorAll(t), 0);
      },
      Me = function (t, e, i, n, r) {
        var s = e - t,
          o = n - i;
        return $(r, function (e) {
          return i + (((e - t) / s) * o || 0);
        });
      },
      De = function (t, e, i) {
        var n,
          r,
          s,
          o = t.vars,
          a = o[e],
          l = bt,
          h = t._ctx;
        if (a)
          return (
            (n = o[e + "Params"]),
            (r = o.callbackScope || t),
            i && ge.length && E(),
            h && (bt = h),
            (s = n ? a.apply(r, n) : a.call(r)),
            (bt = l),
            s
          );
      },
      Oe = [],
      ze = 255,
      Ie = {
        aqua: [0, ze, ze],
        lime: [0, ze, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ze],
        navy: [0, 0, 128],
        white: [ze, ze, ze],
        olive: [128, 128, 0],
        yellow: [ze, ze, 0],
        orange: [ze, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ze, 0, 0],
        pink: [ze, 192, 203],
        cyan: [0, ze, ze],
        transparent: [ze, ze, ze, 0],
      },
      qe = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Ie) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      Re = /hsl[a]?\(/,
      je =
        ((qt = Date.now),
        (Rt = 500),
        (jt = 33),
        (Ft = qt()),
        (Bt = Ft),
        (Wt = Nt = 1e3 / 240),
        (Ot = {
          time: 0,
          frame: 0,
          tick: function () {
            Ue(!0);
          },
          deltaRatio: function (t) {
            return zt / (1e3 / (t || 60));
          },
          wake: function () {
            Ct &&
              (!St &&
                h() &&
                ((xt = St = window),
                (Et = xt.document || {}),
                (ce.gsap = Fi),
                (xt.gsapVersions || (xt.gsapVersions = [])).push(Fi.version),
                c(kt || xt.GreenSockGlobals || (!xt.gsap && xt) || {}),
                (Dt = xt.requestAnimationFrame),
                Oe.forEach(at)),
              Lt && Ot.sleep(),
              (Mt =
                Dt ||
                function (t) {
                  return setTimeout(t, (Wt - 1e3 * Ot.time + 1) | 0);
                }),
              (Pt = 1),
              Ue(2));
          },
          sleep: function () {
            (Dt ? xt.cancelAnimationFrame : clearTimeout)(Lt),
              (Pt = 0),
              (Mt = m);
          },
          lagSmoothing: function (t, e) {
            (Rt = t || 1 / 0), (jt = Math.min(e || 33, Rt));
          },
          fps: function (t) {
            (Nt = 1e3 / (t || 240)), (Wt = 1e3 * Ot.time + Nt);
          },
          add: function (t, e, i) {
            var n = e
              ? function (e, i, r, s) {
                  t(e, i, r, s), Ot.remove(n);
                }
              : t;
            return Ot.remove(t), Vt[i ? "unshift" : "push"](n), Fe(), n;
          },
          remove: function (t, e) {
            ~(e = Vt.indexOf(t)) && Vt.splice(e, 1) && e <= It && It--;
          },
          _listeners: (Vt = []),
        })),
      Fe = function () {
        return !Pt && je.wake();
      },
      Be = {},
      Ne = /^[\d.\-M][\d.\-,\s]/,
      We = /["']/g,
      Ve = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      He = function (t, e) {
        return (
          (t &&
            (r(t)
              ? t
              : Be[t] ||
                (function (t) {
                  var e = (t + "").split("("),
                    i = Be[e[0]];
                  return i && 1 < e.length && i.config
                    ? i.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [
                              (function (t) {
                                for (
                                  var e,
                                    i,
                                    n,
                                    r = {},
                                    s = t.substr(1, t.length - 3).split(":"),
                                    o = s[0],
                                    a = 1,
                                    l = s.length;
                                  a < l;
                                  a++
                                )
                                  (i = s[a]),
                                    (e =
                                      a !== l - 1
                                        ? i.lastIndexOf(",")
                                        : i.length),
                                    (n = i.substr(0, e)),
                                    (r[o] = isNaN(n)
                                      ? n.replace(We, "").trim()
                                      : +n),
                                    (o = i.substr(e + 1).trim());
                                return r;
                              })(e[1]),
                            ]
                          : (function (t) {
                              var e = t.indexOf("(") + 1,
                                i = t.indexOf(")"),
                                n = t.indexOf("(", e);
                              return t.substring(
                                e,
                                ~n && n < i ? t.indexOf(")", i + 1) : i
                              );
                            })(t)
                              .split(",")
                              .map(C)
                      )
                    : Be._CE && Ne.test(t)
                    ? Be._CE("", t)
                    : i;
                })(t))) ||
          e
        );
      };
    function Ue(t) {
      var e,
        i,
        n,
        r,
        s = qt() - Bt,
        o = !0 === t;
      if (
        (Rt < s && (Ft += s - jt),
        (0 < (e = (n = (Bt += s) - Ft) - Wt) || o) &&
          ((r = ++Ot.frame),
          (zt = n - 1e3 * Ot.time),
          (Ot.time = n /= 1e3),
          (Wt += e + (Nt <= e ? 4 : Nt - e)),
          (i = 1)),
        o || (Lt = Mt(Ue)),
        i)
      )
        for (It = 0; It < Vt.length; It++) Vt[It](n, zt, r, t);
    }
    function Xe(t) {
      return t < Ut
        ? Ht * t * t
        : t < 0.7272727272727273
        ? Ht * Math.pow(t - 1.5 / 2.75, 2) + 0.75
        : t < 0.9090909090909092
        ? Ht * (t -= 2.25 / 2.75) * t + 0.9375
        : Ht * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
    }
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var i = e < 5 ? e + 1 : e;
      pt(
        t + ",Power" + (i - 1),
        e
          ? function (t) {
              return Math.pow(t, i);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, i);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, i) / 2
            : 1 - Math.pow(2 * (1 - t), i) / 2;
        }
      );
    }),
      (Be.Linear.easeNone = Be.none = Be.Linear.easeIn),
      pt("Elastic", gt("in"), gt("out"), gt()),
      (Ht = 7.5625),
      (Ut = 1 / 2.75),
      pt(
        "Bounce",
        function (t) {
          return 1 - Xe(1 - t);
        },
        Xe
      ),
      pt("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      pt("Circ", function (t) {
        return -(Kt(1 - t * t) - 1);
      }),
      pt("Sine", function (t) {
        return 1 === t ? 1 : 1 - te(t * Zt);
      }),
      pt("Back", vt("in"), vt("out"), vt()),
      (Be.SteppedEase =
        Be.steps =
        ce.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var i = 1 / t,
                n = t + (e ? 0 : 1),
                r = e ? 1 : 0;
              return function (t) {
                return (((n * Ae(0, 0.99999999, t)) | 0) + r) * i;
              };
            },
          }),
      (Yt.ease = Be["quad.out"]),
      _(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (xe += t + "," + t + "Params,");
        }
      );
    var Ye,
      $e = function (t, e) {
        (this.id = Jt++),
          ((t._gsap = this).target = t),
          (this.harness = e),
          (this.get = e ? e.get : y),
          (this.set = e ? e.getSetter : fi);
      },
      Ge =
        (((Ye = Qe.prototype).delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (Ye.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (Ye.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              U(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (Ye.totalTime = function (t, e) {
          if ((Fe(), !arguments.length)) return this._tTime;
          var i = this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (B(this, t), !i._dp || i.parent || N(i, this); i && i.parent; )
              i.parent._time !==
                i._start +
                  (0 <= i._ts
                    ? i._tTime / i._ts
                    : (i.totalDuration() - i._tTime) / -i._ts) &&
                i.totalTime(i._tTime, !0),
                (i = i.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((0 < this._ts && t < this._tDur) ||
                (this._ts < 0 && 0 < t) ||
                (!this._tDur && !t)) &&
              W(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === Gt) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), k(this, t, e)),
            this
          );
        }),
        (Ye.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + R(this)) %
                  (this._dur + this._rDelay) || (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (Ye.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (Ye.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  R(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (Ye.iteration = function (t, e) {
          var i = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * i, e)
            : this._repeat
            ? Ee(this._tTime, i) + 1
            : 1;
        }),
        (Ye.timeScale = function (t) {
          if (!arguments.length) return this._rts === -Gt ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? j(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || t === -Gt ? 0 : this._rts),
            this.totalTime(Ae(-Math.abs(this._delay), this._tDur, e), !0),
            F(this),
            (function (t) {
              for (var e = t.parent; e && e.parent; )
                (e._dirty = 1), e.totalDuration(), (e = e.parent);
              return t;
            })(this)
          );
        }),
        (Ye.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t)
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Fe(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== Gt &&
                        (this._tTime -= Gt)
                    ))),
              this)
            : this._ps;
        }),
        (Ye.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              !e || (!e._sort && this.parent) || W(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (Ye.endTime = function (t) {
          return (
            this._start +
            (l(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (Ye.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? j(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (Ye.revert = function (t) {
          void 0 === t && (t = pe);
          var e = _t;
          return (
            (_t = t),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(t),
              this.totalTime(-0.01, t.suppressEvents)),
            "nested" !== this.data && !1 !== t.kill && this.kill(),
            (_t = e),
            this
          );
        }),
        (Ye.globalTime = function (t) {
          for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
            (i = e._start + i / (e._ts || 1)), (e = e._dp);
          return !this.parent && this._sat
            ? this._sat.vars.immediateRender
              ? -1 / 0
              : this._sat.globalTime(t)
            : i;
        }),
        (Ye.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), X(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (Ye.repeatDelay = function (t) {
          if (arguments.length) {
            var e = this._time;
            return (this._rDelay = t), X(this), e ? this.time(e) : this;
          }
          return this._rDelay;
        }),
        (Ye.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (Ye.seek = function (t, e) {
          return this.totalTime(Te(this, t), l(e));
        }),
        (Ye.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, l(e));
        }),
        (Ye.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (Ye.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (Ye.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (Ye.resume = function () {
          return this.paused(!1);
        }),
        (Ye.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -Gt : 0)),
              this)
            : this._rts < 0;
        }),
        (Ye.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -Gt), this;
        }),
        (Ye.isActive = function () {
          var t,
            e = this.parent || this._dp,
            i = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= i &&
              t < this.endTime(!0) - Gt
            )
          );
        }),
        (Ye.eventCallback = function (t, e, i) {
          var n = this.vars;
          return 1 < arguments.length
            ? (e
                ? ((n[t] = e),
                  i && (n[t + "Params"] = i),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete n[t],
              this)
            : n[t];
        }),
        (Ye.then = function (t) {
          var e = this;
          return new Promise(function (i) {
            function n() {
              var t = e.then;
              (e.then = null),
                r(s) && (s = s(e)) && (s.then || s === e) && (e.then = t),
                i(s),
                (e.then = t);
            }
            var s = r(t) ? t : T;
            (e._initted && 1 === e.totalProgress() && 0 <= e._ts) ||
            (!e._tTime && e._ts < 0)
              ? n()
              : (e._prom = n);
          });
        }),
        (Ye.kill = function () {
          ot(this);
        }),
        Qe);
    function Qe(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        U(this, +t.duration, 1, 1),
        (this.data = t.data),
        bt && (this._ctx = bt).data.push(this),
        Pt || je.wake();
    }
    A(Ge.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -Gt,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Ze = (function (t) {
      function o(e, n) {
        var r;
        return (
          void 0 === e && (e = {}),
          ((r = t.call(this, e) || this).labels = {}),
          (r.smoothChildTiming = !!e.smoothChildTiming),
          (r.autoRemoveChildren = !!e.autoRemoveChildren),
          (r._sort = l(e.sortChildren)),
          wt && W(e.parent || wt, i(r), n),
          e.reversed && r.reverse(),
          e.paused && r.paused(!0),
          e.scrollTrigger && V(i(r), e.scrollTrigger),
          r
        );
      }
      e(o, t);
      var a = o.prototype;
      return (
        (a.to = function (t, e, i) {
          return Y(0, arguments, this), this;
        }),
        (a.from = function (t, e, i) {
          return Y(1, arguments, this), this;
        }),
        (a.fromTo = function (t, e, i, n) {
          return Y(2, arguments, this), this;
        }),
        (a.set = function (t, e, i) {
          return (
            (e.duration = 0),
            (e.parent = this),
            M(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new ai(t, e, Te(this, i), 1),
            this
          );
        }),
        (a.call = function (t, e, i) {
          return W(this, ai.delayedCall(0, t, e), i);
        }),
        (a.staggerTo = function (t, e, i, n, r, s, o) {
          return (
            (i.duration = e),
            (i.stagger = i.stagger || n),
            (i.onComplete = s),
            (i.onCompleteParams = o),
            (i.parent = this),
            new ai(t, i, Te(this, r)),
            this
          );
        }),
        (a.staggerFrom = function (t, e, i, n, r, s, o) {
          return (
            (i.runBackwards = 1),
            (M(i).immediateRender = l(i.immediateRender)),
            this.staggerTo(t, e, i, n, r, s, o)
          );
        }),
        (a.staggerFromTo = function (t, e, i, n, r, s, o, a) {
          return (
            (n.startAt = i),
            (M(n).immediateRender = l(n.immediateRender)),
            this.staggerTo(t, e, n, r, s, o, a)
          );
        }),
        (a.render = function (t, e, i) {
          var n,
            r,
            s,
            o,
            a,
            l,
            h,
            u,
            c,
            d,
            f,
            p,
            m = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = t <= 0 ? 0 : w(t),
            _ = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (
            (this !== wt && g < y && 0 <= t && (y = g),
            y !== this._tTime || i || _)
          ) {
            if (
              (m !== this._time &&
                v &&
                ((y += this._time - m), (t += this._time - m)),
              (n = y),
              (c = this._start),
              (l = !(u = this._ts)),
              _ && (v || (m = this._zTime), (!t && e) || (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((f = this._yoyo),
                (a = v + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * a + t, e, i);
              if (
                ((n = w(y % a)),
                y === g
                  ? ((o = this._repeat), (n = v))
                  : ((o = ~~(y / a)) && o === y / a && ((n = v), o--),
                    v < n && (n = v)),
                (d = Ee(this._tTime, a)),
                !m &&
                  this._tTime &&
                  d !== o &&
                  this._tTime - d * a - this._dur <= 0 &&
                  (d = o),
                f && 1 & o && ((n = v - n), (p = 1)),
                o !== d && !this._lock)
              ) {
                var b = f && 1 & d,
                  x = b === (f && 1 & o);
                if (
                  (o < d && (b = !b),
                  (m = b ? 0 : y % v ? v : y),
                  (this._lock = 1),
                  (this.render(m || (p ? 0 : w(o * a)), e, !v)._lock = 0),
                  (this._tTime = y),
                  !e && this.parent && De(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !p &&
                    (this.invalidate()._lock = 1),
                  (m && m !== this._time) ||
                    l != !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((v = this._dur),
                  (g = this._tDur),
                  x &&
                    ((this._lock = 2),
                    (m = b ? v : -1e-4),
                    this.render(m, !0),
                    this.vars.repeatRefresh && !p && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                ft(this, p);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (h = (function (t, e, i) {
                  var n;
                  if (e < i)
                    for (n = t._first; n && n._start <= i; ) {
                      if ("isPause" === n.data && n._start > e) return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= i; ) {
                      if ("isPause" === n.data && n._start < e) return n;
                      n = n._prev;
                    }
                })(this, w(m), w(n))) &&
                (y -= n - (n = h._start)),
              (this._tTime = y),
              (this._time = n),
              (this._act = !u),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (m = 0)),
              !m && n && !e && !o && (De(this, "onStart"), this._tTime !== y))
            )
              return this;
            if (m <= n && 0 <= t)
              for (r = this._first; r; ) {
                if (
                  ((s = r._next), (r._act || n >= r._start) && r._ts && h !== r)
                ) {
                  if (r.parent !== this) return this.render(t, e, i);
                  if (
                    (r.render(
                      0 < r._ts
                        ? (n - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                            (n - r._start) * r._ts,
                      e,
                      i
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), s && (y += this._zTime = -Gt);
                    break;
                  }
                }
                r = s;
              }
            else {
              r = this._last;
              for (var S = t < 0 ? t : n; r; ) {
                if (
                  ((s = r._prev), (r._act || S <= r._end) && r._ts && h !== r)
                ) {
                  if (r.parent !== this) return this.render(t, e, i);
                  if (
                    (r.render(
                      0 < r._ts
                        ? (S - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                            (S - r._start) * r._ts,
                      e,
                      i || (_t && (r._initted || r._startAt))
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), s && (y += this._zTime = S ? -Gt : Gt);
                    break;
                  }
                }
                r = s;
              }
            }
            if (
              h &&
              !e &&
              (this.pause(),
              (h.render(m <= n ? 0 : -Gt)._zTime = m <= n ? 1 : -1),
              this._ts)
            )
              return (this._start = c), F(this), this.render(t, e, i);
            this._onUpdate && !e && De(this, "onUpdate", !0),
              ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
                ((c !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((!t && v) ||
                    !((y === g && 0 < this._ts) || (!y && this._ts < 0)) ||
                    z(this, 1),
                  e ||
                    (t < 0 && !m) ||
                    (!y && !m && g) ||
                    (De(
                      this,
                      y === g && 0 <= t ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    !this._prom ||
                      (y < g && 0 < this.timeScale()) ||
                      this._prom())));
          }
          return this;
        }),
        (a.add = function (t, e) {
          var i = this;
          if ((s(e) || (e = Te(this, e, t)), !(t instanceof Ge))) {
            if (ne(t))
              return (
                t.forEach(function (t) {
                  return i.add(t, e);
                }),
                this
              );
            if (n(t)) return this.addLabel(t, e);
            if (!r(t)) return this;
            t = ai.delayedCall(0, t);
          }
          return this !== t ? W(this, t, e) : this;
        }),
        (a.getChildren = function (t, e, i, n) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === i && (i = !0),
            void 0 === n && (n = -$t);
          for (var r = [], s = this._first; s; )
            s._start >= n &&
              (s instanceof ai
                ? e && r.push(s)
                : (i && r.push(s),
                  t && r.push.apply(r, s.getChildren(!0, e, i)))),
              (s = s._next);
          return r;
        }),
        (a.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
            if (e[i].vars.id === t) return e[i];
        }),
        (a.remove = function (t) {
          return n(t)
            ? this.removeLabel(t)
            : r(t)
            ? this.killTweensOf(t)
            : (O(this, t),
              t === this._recent && (this._recent = this._last),
              I(this));
        }),
        (a.totalTime = function (e, i) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = w(
                  je.time -
                    (0 < this._ts
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              t.prototype.totalTime.call(this, e, i),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (a.addLabel = function (t, e) {
          return (this.labels[t] = Te(this, e)), this;
        }),
        (a.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (a.addPause = function (t, e, i) {
          var n = ai.delayedCall(0, e || m, i);
          return (
            (n.data = "isPause"), (this._hasPause = 1), W(this, n, Te(this, t))
          );
        }),
        (a.removePause = function (t) {
          var e = this._first;
          for (t = Te(this, t); e; )
            e._start === t && "isPause" === e.data && z(e), (e = e._next);
        }),
        (a.killTweensOf = function (t, e, i) {
          for (var n = this.getTweensOf(t, i), r = n.length; r--; )
            ti !== n[r] && n[r].kill(t, e);
          return this;
        }),
        (a.getTweensOf = function (t, e) {
          for (var i, n = [], r = Le(t), o = this._first, a = s(e); o; )
            o instanceof ai
              ? S(o._targets, r) &&
                (a
                  ? (!ti || (o._initted && o._ts)) &&
                    o.globalTime(0) <= e &&
                    o.globalTime(o.totalDuration()) > e
                  : !e || o.isActive()) &&
                n.push(o)
              : (i = o.getTweensOf(r, e)).length && n.push.apply(n, i),
              (o = o._next);
          return n;
        }),
        (a.tweenTo = function (t, e) {
          e = e || {};
          var i,
            n = this,
            r = Te(n, t),
            s = e.startAt,
            o = e.onStart,
            a = e.onStartParams,
            l = e.immediateRender,
            h = ai.to(
              n,
              A(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: r,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (r - (s && "time" in s ? s.time : n._time)) /
                        n.timeScale()
                    ) ||
                    Gt,
                  onStart: function () {
                    if ((n.pause(), !i)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (r - (s && "time" in s ? s.time : n._time)) /
                            n.timeScale()
                        );
                      h._dur !== t && U(h, t, 0, 1).render(h._time, !0, !0),
                        (i = 1);
                    }
                    o && o.apply(h, a || []);
                  },
                },
                e
              )
            );
          return l ? h.render(0) : h;
        }),
        (a.tweenFromTo = function (t, e, i) {
          return this.tweenTo(
            e,
            A(
              {
                startAt: {
                  time: Te(this, t),
                },
              },
              i
            )
          );
        }),
        (a.recent = function () {
          return this._recent;
        }),
        (a.nextLabel = function (t) {
          return void 0 === t && (t = this._time), st(this, Te(this, t));
        }),
        (a.previousLabel = function (t) {
          return void 0 === t && (t = this._time), st(this, Te(this, t), 1);
        }),
        (a.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + Gt);
        }),
        (a.shiftChildren = function (t, e, i) {
          void 0 === i && (i = 0);
          for (var n, r = this._first, s = this.labels; r; )
            r._start >= i && ((r._start += t), (r._end += t)), (r = r._next);
          if (e) for (n in s) s[n] >= i && (s[n] += t);
          return I(this);
        }),
        (a.invalidate = function (e) {
          var i = this._first;
          for (this._lock = 0; i; ) i.invalidate(e), (i = i._next);
          return t.prototype.invalidate.call(this, e);
        }),
        (a.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, i = this._first; i; )
            (e = i._next), this.remove(i), (i = e);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            I(this)
          );
        }),
        (a.totalDuration = function (t) {
          var e,
            i,
            n,
            r = 0,
            s = this,
            o = s._last,
            a = $t;
          if (arguments.length)
            return s.timeScale(
              (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                (s.reversed() ? -t : t)
            );
          if (s._dirty) {
            for (n = s.parent; o; )
              (e = o._prev),
                o._dirty && o.totalDuration(),
                a < (i = o._start) && s._sort && o._ts && !s._lock
                  ? ((s._lock = 1), (W(s, o, i - o._delay, 1)._lock = 0))
                  : (a = i),
                i < 0 &&
                  o._ts &&
                  ((r -= i),
                  ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                    ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
                  s.shiftChildren(-i, !1, -1 / 0),
                  (a = 0)),
                o._end > r && o._ts && (r = o._end),
                (o = e);
            U(s, s === wt && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
          }
          return s._tDur;
        }),
        (o.updateRoot = function (t) {
          if ((wt._ts && (k(wt, j(t, wt)), (Tt = je.frame)), je.frame >= be)) {
            be += Xt.autoSleep || 120;
            var e = wt._first;
            if ((!e || !e._ts) && Xt.autoSleep && je._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || je.sleep();
            }
          }
        }),
        o
      );
    })(Ge);
    function Je(t, e, i, s, o, l) {
      var h, u, c, d;
      if (
        ye[t] &&
        !1 !==
          (h = new ye[t]()).init(
            o,
            h.rawVars
              ? e[t]
              : (function (t, e, i, s, o) {
                  if (
                    (r(t) && (t = ri(t, o, e, i, s)),
                    !a(t) || (t.style && t.nodeType) || ne(t) || ie(t))
                  )
                    return n(t) ? ri(t, o, e, i, s) : t;
                  var l,
                    h = {};
                  for (l in t) h[l] = ri(t[l], o, e, i, s);
                  return h;
                })(e[t], s, o, l, i),
            i,
            s,
            l
          ) &&
        ((i._pt = u = new wi(i._pt, o, t, 0, 1, h.render, h, 0, h.priority)),
        i !== At)
      )
        for (c = i._ptLookup[i._targets.indexOf(o)], d = h._props.length; d--; )
          c[h._props[d]] = u;
      return h;
    }
    function Ke(t, e, i, n) {
      var r,
        s,
        o = e.ease || n || "power1.inOut";
      if (ne(e))
        (s = i[t] || (i[t] = [])),
          e.forEach(function (t, i) {
            return s.push({
              t: (i / (e.length - 1)) * 100,
              v: t,
              e: o,
            });
          });
      else
        for (r in e)
          (s = i[r] || (i[r] = [])),
            "ease" === r ||
              s.push({
                t: parseFloat(t),
                v: e[r],
                e: o,
              });
    }
    A(Ze.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0,
    });
    var ti,
      ei,
      ii = function (t, e, i, s, o, a, l, h, u, c) {
        r(s) && (s = s(o || 0, t, a));
        var f,
          p = t[e],
          m =
            "get" !== i
              ? i
              : r(p)
              ? u
                ? t[
                    e.indexOf("set") || !r(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](u)
                : t[e]()
              : p,
          g = r(p) ? (u ? di : ci) : ui;
        if (
          (n(s) &&
            (~s.indexOf("random(") && (s = rt(s)),
            "=" === s.charAt(1) &&
              ((!(f = x(m, s) + (G(m) || 0)) && 0 !== f) || (s = f))),
          !c || m !== s || ei)
        )
          return isNaN(m * s) || "" === s
            ? (p || e in t || d(e, s),
              function (t, e, i, n, r, s, o) {
                var a,
                  l,
                  h,
                  u,
                  c,
                  d,
                  f,
                  p,
                  m = new wi(this._pt, t, e, 0, 1, gi, null, r),
                  g = 0,
                  v = 0;
                for (
                  m.b = i,
                    m.e = n,
                    i += "",
                    (f = ~(n += "").indexOf("random(")) && (n = rt(n)),
                    s && (s((p = [i, n]), t, e), (i = p[0]), (n = p[1])),
                    l = i.match(ae) || [];
                  (a = ae.exec(n));

                )
                  (u = a[0]),
                    (c = n.substring(g, a.index)),
                    h ? (h = (h + 1) % 5) : "rgba(" === c.substr(-5) && (h = 1),
                    u !== l[v++] &&
                      ((d = parseFloat(l[v - 1]) || 0),
                      (m._pt = {
                        _next: m._pt,
                        p: c || 1 === v ? c : ",",
                        s: d,
                        c:
                          "=" === u.charAt(1) ? x(d, u) - d : parseFloat(u) - d,
                        m: h && h < 4 ? Math.round : 0,
                      }),
                      (g = ae.lastIndex));
                return (
                  (m.c = g < n.length ? n.substring(g, n.length) : ""),
                  (m.fp = o),
                  (le.test(n) || f) && (m.e = 0),
                  (this._pt = m)
                );
              }.call(this, t, e, m, s, g, h || Xt.stringFilter, u))
            : ((f = new wi(
                this._pt,
                t,
                e,
                +m || 0,
                s - (m || 0),
                "boolean" == typeof p ? mi : pi,
                0,
                g
              )),
              u && (f.fp = u),
              l && f.modifier(l, this, t),
              (this._pt = f));
      },
      ni = function t(e, i, n) {
        var r,
          s,
          o,
          a,
          h,
          u,
          c,
          d,
          f,
          p,
          m,
          y,
          _,
          b = e.vars,
          w = b.ease,
          x = b.startAt,
          S = b.immediateRender,
          k = b.lazy,
          C = b.onUpdate,
          T = b.onUpdateParams,
          P = b.callbackScope,
          M = b.runBackwards,
          D = b.yoyoEase,
          O = b.keyframes,
          I = b.autoRevert,
          q = e._dur,
          R = e._startAt,
          j = e._targets,
          F = e.parent,
          B = F && "nested" === F.data ? F.vars.targets : j,
          N = "auto" === e._overwrite && !yt,
          W = e.timeline;
        if (
          (!W || (O && w) || (w = "none"),
          (e._ease = He(w, Yt.ease)),
          (e._yEase = D ? Ve(He(!0 === D ? w : D, Yt.ease)) : 0),
          D &&
            e._yoyo &&
            !e._repeat &&
            ((D = e._yEase), (e._yEase = e._ease), (e._ease = D)),
          (e._from = !W && !!b.runBackwards),
          !W || (O && !b.stagger))
        ) {
          if (
            ((y = (d = j[0] ? v(j[0]).harness : 0) && b[d.prop]),
            (r = L(b, me)),
            R &&
              (R._zTime < 0 && R.progress(1),
              i < 0 && M && S && !I
                ? R.render(-1, !0)
                : R.revert(M && q ? fe : de),
              (R._lazy = 0)),
            x)
          ) {
            if (
              (z(
                (e._startAt = ai.set(
                  j,
                  A(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: F,
                      immediateRender: !0,
                      lazy: !R && l(k),
                      startAt: null,
                      delay: 0,
                      onUpdate: C,
                      onUpdateParams: T,
                      callbackScope: P,
                      stagger: 0,
                    },
                    x
                  )
                ))
              ),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              i < 0 && (_t || (!S && !I)) && e._startAt.revert(fe),
              S && q && i <= 0 && n <= 0)
            )
              return void (i && (e._zTime = i));
          } else if (M && q && !R)
            if (
              (i && (S = !1),
              (o = A(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: S && !R && l(k),
                  immediateRender: S,
                  stagger: 0,
                  parent: F,
                },
                r
              )),
              y && (o[d.prop] = y),
              z((e._startAt = ai.set(j, o))),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              i < 0 && (_t ? e._startAt.revert(fe) : e._startAt.render(-1, !0)),
              (e._zTime = i),
              S)
            ) {
              if (!i) return;
            } else t(e._startAt, Gt, Gt);
          for (
            e._pt = e._ptCache = 0, k = (q && l(k)) || (k && !q), s = 0;
            s < j.length;
            s++
          ) {
            if (
              ((c = (h = j[s])._gsap || g(j)[s]._gsap),
              (e._ptLookup[s] = p = {}),
              ve[c.id] && ge.length && E(),
              (m = B === j ? s : B.indexOf(h)),
              d &&
                !1 !== (f = new d()).init(h, y || r, e, m, B) &&
                ((e._pt = a =
                  new wi(e._pt, h, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (t) {
                  p[t] = a;
                }),
                f.priority && (u = 1)),
              !d || y)
            )
              for (o in r)
                ye[o] && (f = Je(o, r, e, m, h, B))
                  ? f.priority && (u = 1)
                  : (p[o] = a =
                      ii.call(e, h, o, "get", r[o], m, B, 0, b.stringFilter));
            e._op && e._op[s] && e.kill(h, e._op[s]),
              N &&
                e._pt &&
                ((ti = e),
                wt.killTweensOf(h, p, e.globalTime(i)),
                (_ = !e.parent),
                (ti = 0)),
              e._pt && k && (ve[c.id] = 1);
          }
          u && bi(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = C),
          (e._initted = (!e._op || e._pt) && !_),
          O && i <= 0 && W.render($t, !0, !0);
      },
      ri = function (t, e, i, s, o) {
        return r(t)
          ? t.call(e, i, s, o)
          : n(t) && ~t.indexOf("random(")
          ? rt(t)
          : t;
      },
      si = xe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      oi = {};
    _(si + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
      return (oi[t] = 1);
    });
    var ai = (function (t) {
      function r(e, n, r, o) {
        var h;
        "number" == typeof n && ((r.duration = n), (n = r), (r = null));
        var c,
          d,
          p,
          m,
          v,
          y,
          _,
          b,
          x = (h = t.call(this, o ? n : M(n)) || this).vars,
          S = x.duration,
          E = x.delay,
          k = x.immediateRender,
          C = x.stagger,
          T = x.overwrite,
          P = x.keyframes,
          D = x.defaults,
          O = x.scrollTrigger,
          z = x.yoyoEase,
          I = n.parent || wt,
          q = (ne(e) || ie(e) ? s(e[0]) : "length" in n) ? [e] : Le(e);
        if (
          ((h._targets = q.length
            ? g(q)
            : f(
                "GSAP target " + e + " not found. https://greensock.com",
                !Xt.nullTargetWarn
              ) || []),
          (h._ptLookup = []),
          (h._overwrite = T),
          P || C || u(S) || u(E))
        ) {
          if (
            ((n = h.vars),
            (c = h.timeline =
              new Ze({
                data: "nested",
                defaults: D || {},
                targets: I && "nested" === I.data ? I.vars.targets : q,
              })).kill(),
            (c.parent = c._dp = i(h)),
            (c._start = 0),
            C || u(S) || u(E))
          ) {
            if (((m = q.length), (_ = C && K(C)), a(C)))
              for (v in C) ~si.indexOf(v) && ((b = b || {})[v] = C[v]);
            for (d = 0; d < m; d++)
              ((p = L(n, oi)).stagger = 0),
                z && (p.yoyoEase = z),
                b && Se(p, b),
                (y = q[d]),
                (p.duration = +ri(S, i(h), d, y, q)),
                (p.delay = (+ri(E, i(h), d, y, q) || 0) - h._delay),
                !C &&
                  1 === m &&
                  p.delay &&
                  ((h._delay = E = p.delay), (h._start += E), (p.delay = 0)),
                c.to(y, p, _ ? _(d, y, q) : 0),
                (c._ease = Be.none);
            c.duration() ? (S = E = 0) : (h.timeline = 0);
          } else if (P) {
            M(
              A(c.vars.defaults, {
                ease: "none",
              })
            ),
              (c._ease = He(P.ease || n.ease || "none"));
            var R,
              j,
              F,
              B = 0;
            if (ne(P))
              P.forEach(function (t) {
                return c.to(q, t, ">");
              }),
                c.duration();
            else {
              for (v in ((p = {}), P))
                "ease" === v || "easeEach" === v || Ke(v, P[v], p, P.easeEach);
              for (v in p)
                for (
                  R = p[v].sort(function (t, e) {
                    return t.t - e.t;
                  }),
                    d = B = 0;
                  d < R.length;
                  d++
                )
                  ((F = {
                    ease: (j = R[d]).e,
                    duration: ((j.t - (d ? R[d - 1].t : 0)) / 100) * S,
                  })[v] = j.v),
                    c.to(q, F, B),
                    (B += F.duration);
              c.duration() < S &&
                c.to(
                  {},
                  {
                    duration: S - c.duration(),
                  }
                );
            }
          }
          S || h.duration((S = c.duration()));
        } else h.timeline = 0;
        return (
          !0 !== T || yt || ((ti = i(h)), wt.killTweensOf(q), (ti = 0)),
          W(I, i(h), r),
          n.reversed && h.reverse(),
          n.paused && h.paused(!0),
          (k ||
            (!S &&
              !P &&
              h._start === w(I._time) &&
              l(k) &&
              (function t(e) {
                return !e || (e._ts && t(e.parent));
              })(i(h)) &&
              "nested" !== I.data)) &&
            ((h._tTime = -Gt), h.render(Math.max(0, -E) || 0)),
          O && V(i(h), O),
          h
        );
      }
      e(r, t);
      var o = r.prototype;
      return (
        (o.render = function (t, e, i) {
          var n,
            r,
            s,
            o,
            a,
            l,
            h,
            u,
            c,
            d = this._time,
            f = this._tDur,
            p = this._dur,
            m = t < 0,
            g = f - Gt < t && !m ? f : t < Gt ? 0 : t;
          if (p) {
            if (
              g !== this._tTime ||
              !t ||
              i ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != m)
            ) {
              if (((n = g), (u = this.timeline), this._repeat)) {
                if (((o = p + this._rDelay), this._repeat < -1 && m))
                  return this.totalTime(100 * o + t, e, i);
                if (
                  ((n = w(g % o)),
                  g === f
                    ? ((s = this._repeat), (n = p))
                    : ((s = ~~(g / o)) && s === g / o && ((n = p), s--),
                      p < n && (n = p)),
                  (l = this._yoyo && 1 & s) && ((c = this._yEase), (n = p - n)),
                  (a = Ee(this._tTime, o)),
                  n === d && !i && this._initted)
                )
                  return (this._tTime = g), this;
                s !== a &&
                  (u && this._yEase && ft(u, l),
                  !this.vars.repeatRefresh ||
                    l ||
                    this._lock ||
                    ((this._lock = i = 1),
                    (this.render(w(o * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (H(this, m ? t : n, i, e, g)) return (this._tTime = 0), this;
                if (d !== this._time) return this;
                if (p !== this._dur) return this.render(t, e, i);
              }
              if (
                ((this._tTime = g),
                (this._time = n),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = h = (c || this._ease)(n / p)),
                this._from && (this.ratio = h = 1 - h),
                n && !d && !e && !s && (De(this, "onStart"), this._tTime !== g))
              )
                return this;
              for (r = this._pt; r; ) r.r(h, r.d), (r = r._next);
              (u &&
                u.render(
                  t < 0 ? t : !n && l ? -Gt : u._dur * u._ease(n / this._dur),
                  e,
                  i
                )) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (m && q(this, t, 0, i), De(this, "onUpdate")),
                this._repeat &&
                  s !== a &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  De(this, "onRepeat"),
                (g !== this._tDur && g) ||
                  this._tTime !== g ||
                  (m && !this._onUpdate && q(this, t, 0, !0),
                  (!t && p) ||
                    !(
                      (g === this._tDur && 0 < this._ts) ||
                      (!g && this._ts < 0)
                    ) ||
                    z(this, 1),
                  e ||
                    (m && !d) ||
                    !(g || d || l) ||
                    (De(this, g === f ? "onComplete" : "onReverseComplete", !0),
                    !this._prom ||
                      (g < f && 0 < this.timeScale()) ||
                      this._prom()));
            }
          } else
            !(function (t, e, i, n) {
              var r,
                s,
                o,
                a = t.ratio,
                l =
                  e < 0 ||
                  (!e &&
                    ((!t._start &&
                      (function t(e) {
                        var i = e.parent;
                        return (
                          i &&
                          i._ts &&
                          i._initted &&
                          !i._lock &&
                          (i.rawTime() < 0 || t(i))
                        );
                      })(t) &&
                      (t._initted || !ke(t))) ||
                      ((t._ts < 0 || t._dp._ts < 0) && !ke(t))))
                    ? 0
                    : 1,
                h = t._rDelay,
                u = 0;
              if (
                (h &&
                  t._repeat &&
                  ((u = Ae(0, t._tDur, e)),
                  (s = Ee(u, h)),
                  t._yoyo && 1 & s && (l = 1 - l),
                  s !== Ee(t._tTime, h) &&
                    ((a = 1 - l),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                l !== a || _t || n || t._zTime === Gt || (!e && t._zTime))
              ) {
                if (!t._initted && H(t, e, n, i, u)) return;
                for (
                  o = t._zTime,
                    t._zTime = e || (i ? Gt : 0),
                    i = i || (e && !o),
                    t.ratio = l,
                    t._from && (l = 1 - l),
                    t._time = 0,
                    t._tTime = u,
                    r = t._pt;
                  r;

                )
                  r.r(l, r.d), (r = r._next);
                e < 0 && q(t, e, 0, !0),
                  t._onUpdate && !i && De(t, "onUpdate"),
                  u && t._repeat && !i && t.parent && De(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === l &&
                    (l && z(t, 1),
                    i ||
                      _t ||
                      (De(t, l ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, i);
          return this;
        }),
        (o.targets = function () {
          return this._targets;
        }),
        (o.invalidate = function (e) {
          return (
            (e && this.vars.runBackwards) || (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
          );
        }),
        (o.resetTo = function (t, e, i, n) {
          Pt || je.wake(), this._ts || this.play();
          var r = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts
          );
          return (
            this._initted || ni(this, r),
            (function (t, e, i, n, r, s, o) {
              var a,
                l,
                h,
                u,
                c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
              if (!c)
                for (
                  c = t._ptCache[e] = [],
                    h = t._ptLookup,
                    u = t._targets.length;
                  u--;

                ) {
                  if ((a = h[u][e]) && a.d && a.d._pt)
                    for (a = a.d._pt; a && a.p !== e && a.fp !== e; )
                      a = a._next;
                  if (!a)
                    return (ei = 1), (t.vars[e] = "+=0"), ni(t, o), (ei = 0), 1;
                  c.push(a);
                }
              for (u = c.length; u--; )
                ((a = (l = c[u])._pt || l).s =
                  (!n && 0 !== n) || r ? a.s + (n || 0) + s * a.c : n),
                  (a.c = i - a.s),
                  l.e && (l.e = b(i) + G(l.e)),
                  l.b && (l.b = a.s + G(l.b));
            })(this, t, e, i, n, this._ease(r / this._dur), r)
              ? this.resetTo(t, e, i, n)
              : (B(this, 0),
                this.parent ||
                  D(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0))
          );
        }),
        (o.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? ot(this) : this;
          if (this.timeline) {
            var i = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, ti && !0 !== ti.vars.overwrite)
                ._first || ot(this),
              this.parent &&
                i !== this.timeline.totalDuration() &&
                U(this, (this._dur * this.timeline._tDur) / i, 0, 1),
              this
            );
          }
          var r,
            s,
            o,
            a,
            l,
            h,
            u,
            c = this._targets,
            d = t ? Le(t) : c,
            f = this._ptLookup,
            p = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var i = t.length, n = i === e.length;
                n && i-- && t[i] === e[i];

              );
              return i < 0;
            })(c, d)
          )
            return "all" === e && (this._pt = 0), ot(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (n(e) &&
                  ((l = {}),
                  _(e, function (t) {
                    return (l[t] = 1);
                  }),
                  (e = l)),
                (e = (function (t, e) {
                  var i,
                    n,
                    r,
                    s,
                    o = t[0] ? v(t[0]).harness : 0,
                    a = o && o.aliases;
                  if (!a) return e;
                  for (n in ((i = Se({}, e)), a))
                    if ((n in i))
                      for (r = (s = a[n].split(",")).length; r--; )
                        i[s[r]] = i[n];
                  return i;
                })(c, e))),
              u = c.length;
            u--;

          )
            if (~d.indexOf(c[u]))
              for (l in ((s = f[u]),
              "all" === e
                ? ((r[u] = e), (a = s), (o = {}))
                : ((o = r[u] = r[u] || {}), (a = e)),
              a))
                (h = s && s[l]) &&
                  (("kill" in h.d && !0 !== h.d.kill(l)) || O(this, h, "_pt"),
                  delete s[l]),
                  "all" !== o && (o[l] = 1);
          return this._initted && !this._pt && p && ot(this), this;
        }),
        (r.to = function (t, e, i) {
          return new r(t, e, i);
        }),
        (r.from = function (t, e) {
          return Y(1, arguments);
        }),
        (r.delayedCall = function (t, e, i, n) {
          return new r(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: n,
          });
        }),
        (r.fromTo = function (t, e, i) {
          return Y(2, arguments);
        }),
        (r.set = function (t, e) {
          return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new r(t, e);
        }),
        (r.killTweensOf = function (t, e, i) {
          return wt.killTweensOf(t, e, i);
        }),
        r
      );
    })(Ge);
    function li(t, e, i) {
      return t.setAttribute(e, i);
    }
    function hi(t, e, i, n) {
      n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
    }
    A(ai.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      _("staggerTo,staggerFrom,staggerFromTo", function (t) {
        ai[t] = function () {
          var e = new Ze(),
            i = Pe.call(arguments, 0);
          return (
            i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
          );
        };
      });
    var ui = function (t, e, i) {
        return (t[e] = i);
      },
      ci = function (t, e, i) {
        return t[e](i);
      },
      di = function (t, e, i, n) {
        return t[e](n.fp, i);
      },
      fi = function (t, e) {
        return r(t[e]) ? ci : o(t[e]) && t.setAttribute ? li : ui;
      },
      pi = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
      },
      mi = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      gi = function (t, e) {
        var i = e._pt,
          n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; i; )
            (n =
              i.p +
              (i.m
                ? i.m(i.s + i.c * t)
                : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
              n),
              (i = i._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      vi = function (t, e) {
        for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
      },
      yi = function (t, e, i, n) {
        for (var r, s = this._pt; s; )
          (r = s._next), s.p === n && s.modifier(t, e, i), (s = r);
      },
      _i = function (t) {
        for (var e, i, n = this._pt; n; )
          (i = n._next),
            (n.p === t && !n.op) || n.op === t
              ? O(this, n, "_pt")
              : n.dep || (e = 1),
            (n = i);
        return !e;
      },
      bi = function (t) {
        for (var e, i, n, r, s = t._pt; s; ) {
          for (e = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
          (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s),
            (s._next = i) ? (i._prev = s) : (r = s),
            (s = e);
        }
        t._pt = n;
      },
      wi =
        ((xi.prototype.modifier = function (t, e, i) {
          (this.mSet = this.mSet || this.set),
            (this.set = hi),
            (this.m = t),
            (this.mt = i),
            (this.tween = e);
        }),
        xi);
    function xi(t, e, i, n, r, s, o, a, l) {
      (this.t = e),
        (this.s = n),
        (this.c = r),
        (this.p = i),
        (this.r = s || pi),
        (this.d = o || this),
        (this.set = a || ui),
        (this.pr = l || 0),
        (this._next = t) && (t._prev = this);
    }
    function Si(t) {
      return (Ti[t] || Ai).map(function (t) {
        return t();
      });
    }
    function Ei() {
      var t = Date.now(),
        e = [];
      2 < t - Pi &&
        (Si("matchMediaInit"),
        Ci.forEach(function (t) {
          var i,
            n,
            r,
            s,
            o = t.queries,
            a = t.conditions;
          for (n in o)
            (i = xt.matchMedia(o[n]).matches) && (r = 1),
              i !== a[n] && ((a[n] = i), (s = 1));
          s && (t.revert(), r && e.push(t));
        }),
        Si("matchMediaRevert"),
        e.forEach(function (t) {
          return t.onMatch(t);
        }),
        (Pi = t),
        Si("matchMedia"));
    }
    _(
      xe +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (me[t] = 1);
      }
    ),
      (ce.TweenMax = ce.TweenLite = ai),
      (ce.TimelineLite = ce.TimelineMax = Ze),
      (wt = new Ze({
        sortChildren: !1,
        defaults: Yt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (Xt.stringFilter = dt);
    var ki,
      Ci = [],
      Ti = {},
      Ai = [],
      Pi = 0,
      Li = 0,
      Mi =
        (((ki = Di.prototype).add = function (t, e, i) {
          function n() {
            var t,
              n = bt,
              o = s.selector;
            return (
              n && n !== s && n.data.push(s),
              i && (s.selector = Z(i)),
              (bt = s),
              r((t = e.apply(s, arguments))) && s._r.push(t),
              (bt = n),
              (s.selector = o),
              (s.isReverted = !1),
              t
            );
          }
          r(t) && ((i = e), (e = t), (t = r));
          var s = this;
          return (s.last = n), t === r ? n(s) : t ? (s[t] = n) : n;
        }),
        (ki.ignore = function (t) {
          var e = bt;
          (bt = null), t(this), (bt = e);
        }),
        (ki.getTweens = function () {
          var t = [];
          return (
            this.data.forEach(function (e) {
              return e instanceof Di
                ? t.push.apply(t, e.getTweens())
                : e instanceof ai &&
                    !(e.parent && "nested" === e.parent.data) &&
                    t.push(e);
            }),
            t
          );
        }),
        (ki.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (ki.kill = function (t, e) {
          var i = this;
          if (t) {
            var n = this.getTweens();
            this.data.forEach(function (t) {
              "isFlip" === t.data &&
                (t.revert(),
                t.getChildren(!0, !0, !1).forEach(function (t) {
                  return n.splice(n.indexOf(t), 1);
                }));
            }),
              n
                .map(function (t) {
                  return {
                    g: t.globalTime(0),
                    t: t,
                  };
                })
                .sort(function (t, e) {
                  return e.g - t.g || -1 / 0;
                })
                .forEach(function (e) {
                  return e.t.revert(t);
                }),
              this.data.forEach(function (e) {
                return !(e instanceof ai) && e.revert && e.revert(t);
              }),
              this._r.forEach(function (e) {
                return e(t, i);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (t) {
              return t.kill && t.kill();
            });
          if ((this.clear(), e))
            for (var r = Ci.length; r--; )
              Ci[r].id === this.id && Ci.splice(r, 1);
        }),
        (ki.revert = function (t) {
          this.kill(t || {});
        }),
        Di);
    function Di(t, e) {
      (this.selector = e && Z(e)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Li++),
        t && this.add(t);
    }
    var Oi,
      zi =
        (((Oi = Ii.prototype).add = function (t, e, i) {
          a(t) ||
            (t = {
              matches: t,
            });
          var n,
            r,
            s,
            o = new Mi(0, i || this.scope),
            l = (o.conditions = {});
          for (r in (bt && !o.selector && (o.selector = bt.selector),
          this.contexts.push(o),
          (e = o.add("onMatch", e)),
          (o.queries = t)))
            "all" === r
              ? (s = 1)
              : (n = xt.matchMedia(t[r])) &&
                (Ci.indexOf(o) < 0 && Ci.push(o),
                (l[r] = n.matches) && (s = 1),
                n.addListener
                  ? n.addListener(Ei)
                  : n.addEventListener("change", Ei));
          return s && e(o), this;
        }),
        (Oi.revert = function (t) {
          this.kill(t || {});
        }),
        (Oi.kill = function (t) {
          this.contexts.forEach(function (e) {
            return e.kill(t, !0);
          });
        }),
        Ii);
    function Ii(t) {
      (this.contexts = []), (this.scope = t);
    }
    var qi = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        e.forEach(function (t) {
          return at(t);
        });
      },
      timeline: function (t) {
        return new Ze(t);
      },
      getTweensOf: function (t, e) {
        return wt.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, r) {
        n(t) && (t = Le(t)[0]);
        var s = v(t || {}).get,
          o = i ? T : C;
        return (
          "native" === i && (i = ""),
          t
            ? e
              ? o(((ye[e] && ye[e].get) || s)(t, e, i, r))
              : function (e, i, n) {
                  return o(((ye[e] && ye[e].get) || s)(t, e, i, n));
                }
            : t
        );
      },
      quickSetter: function (t, e, i) {
        if (1 < (t = Le(t)).length) {
          var n = t.map(function (t) {
              return Fi.quickSetter(t, e, i);
            }),
            r = n.length;
          return function (t) {
            for (var e = r; e--; ) n[e](t);
          };
        }
        t = t[0] || {};
        var s = ye[e],
          o = v(t),
          a = (o.harness && (o.harness.aliases || {})[e]) || e,
          l = s
            ? function (e) {
                var n = new s();
                (At._pt = 0),
                  n.init(t, i ? e + i : e, At, 0, [t]),
                  n.render(1, n),
                  At._pt && vi(1, At);
              }
            : o.set(t, a);
        return s
          ? l
          : function (e) {
              return l(t, a, i ? e + i : e, o, 1);
            };
      },
      quickTo: function (t, e, i) {
        function n(t, i, n) {
          return s.resetTo(e, t, i, n);
        }
        var r,
          s = Fi.to(
            t,
            Se((((r = {})[e] = "+=0.1"), (r.paused = !0), r), i || {})
          );
        return (n.tween = s), n;
      },
      isTweening: function (t) {
        return 0 < wt.getTweensOf(t, !0).length;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = He(t.ease, Yt.ease)), P(Yt, t || {});
      },
      config: function (t) {
        return P(Xt, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          n = t.plugins,
          r = t.defaults,
          s = t.extendTimeline;
        (n || "").split(",").forEach(function (t) {
          return (
            t && !ye[t] && !ce[t] && f(e + " effect requires " + t + " plugin.")
          );
        }),
          (_e[e] = function (t, e, n) {
            return i(Le(t), A(e || {}, r), n);
          }),
          s &&
            (Ze.prototype[e] = function (t, i, n) {
              return this.add(_e[e](t, a(i) ? i : (n = i) && {}, this), n);
            });
      },
      registerEase: function (t, e) {
        Be[t] = He(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? He(t, e) : Be;
      },
      getById: function (t) {
        return wt.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var i,
          n,
          r = new Ze(t);
        for (
          r.smoothChildTiming = l(t.smoothChildTiming),
            wt.remove(r),
            r._dp = 0,
            r._time = r._tTime = wt._time,
            i = wt._first;
          i;

        )
          (n = i._next),
            (!e &&
              !i._dur &&
              i instanceof ai &&
              i.vars.onComplete === i._targets[0]) ||
              W(r, i, i._start - i._delay),
            (i = n);
        return W(wt, r, 0), r;
      },
      context: function (t, e) {
        return t ? new Mi(t, e) : bt;
      },
      matchMedia: function (t) {
        return new zi(t);
      },
      matchMediaRefresh: function () {
        return (
          Ci.forEach(function (t) {
            var e,
              i,
              n = t.conditions;
            for (i in n) n[i] && ((n[i] = !1), (e = 1));
            e && t.revert();
          }) || Ei()
        );
      },
      addEventListener: function (t, e) {
        var i = Ti[t] || (Ti[t] = []);
        ~i.indexOf(e) || i.push(e);
      },
      removeEventListener: function (t, e) {
        var i = Ti[t],
          n = i && i.indexOf(e);
        0 <= n && i.splice(n, 1);
      },
      utils: {
        wrap: function t(e, i, n) {
          var r = i - e;
          return ne(e)
            ? nt(e, t(0, e.length), i)
            : $(n, function (t) {
                return ((r + ((t - e) % r)) % r) + e;
              });
        },
        wrapYoyo: function t(e, i, n) {
          var r = i - e,
            s = 2 * r;
          return ne(e)
            ? nt(e, t(0, e.length - 1), i)
            : $(n, function (t) {
                return e + (r < (t = (s + ((t - e) % s)) % s || 0) ? s - t : t);
              });
        },
        distribute: K,
        random: it,
        snap: et,
        normalize: function (t, e, i) {
          return Me(t, e, 0, 1, i);
        },
        getUnit: G,
        clamp: function (t, e, i) {
          return $(i, function (i) {
            return Ae(t, e, i);
          });
        },
        splitColor: ht,
        toArray: Le,
        selector: Z,
        mapRange: Me,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (i) {
            return t(parseFloat(i)) + (e || G(i));
          };
        },
        interpolate: function t(e, i, r, s) {
          var o = isNaN(e + i)
            ? 0
            : function (t) {
                return (1 - t) * e + t * i;
              };
          if (!o) {
            var a,
              l,
              h,
              u,
              c,
              d = n(e),
              f = {};
            if ((!0 === r && (s = 1) && (r = null), d))
              (e = {
                p: e,
              }),
                (i = {
                  p: i,
                });
            else if (ne(e) && !ne(i)) {
              for (h = [], u = e.length, c = u - 2, l = 1; l < u; l++)
                h.push(t(e[l - 1], e[l]));
              u--,
                (o = function (t) {
                  t *= u;
                  var e = Math.min(c, ~~t);
                  return h[e](t - e);
                }),
                (r = i);
            } else s || (e = Se(ne(e) ? [] : {}, e));
            if (!h) {
              for (a in i) ii.call(f, e, a, "get", i[a]);
              o = function (t) {
                return vi(t, f) || (d ? e.p : e);
              };
            }
          }
          return $(r, o);
        },
        shuffle: J,
      },
      install: c,
      effects: _e,
      ticker: je,
      updateRoot: Ze.updateRoot,
      plugins: ye,
      globalTimeline: wt,
      core: {
        PropTween: wi,
        globals: p,
        Tween: ai,
        Timeline: Ze,
        Animation: Ge,
        getCache: v,
        _removeLinkedListItem: O,
        reverting: function () {
          return _t;
        },
        context: function (t) {
          return t && bt && (bt.data.push(t), (t._ctx = bt)), bt;
        },
        suppressOverwrites: function (t) {
          return (yt = t);
        },
      },
    };
    function Ri(t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    }
    function ji(t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, i, r) {
          r._onInit = function (t) {
            var r, s;
            if (
              (n(i) &&
                ((r = {}),
                _(i, function (t) {
                  return (r[t] = 1);
                }),
                (i = r)),
              e)
            ) {
              for (s in ((r = {}), i)) r[s] = e(i[s]);
              i = r;
            }
            !(function (t, e) {
              var i,
                n,
                r,
                s = t._targets;
              for (i in e)
                for (n = s.length; n--; )
                  (r = (r = t._ptLookup[n][i]) && r.d) &&
                    (r._pt && (r = Ri(r, i)),
                    r && r.modifier && r.modifier(e[i], t, s[n], i));
            })(t, i);
          };
        },
      };
    }
    _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (qi[t] = ai[t]);
    }),
      je.add(Ze.updateRoot),
      (At = qi.to(
        {},
        {
          duration: 0,
        }
      ));
    var Fi =
      qi.registerPlugin(
        {
          name: "attr",
          init: function (t, e, i, n, r) {
            var s, o, a;
            for (s in ((this.tween = i), e))
              (a = t.getAttribute(s) || ""),
                ((o = this.add(
                  t,
                  "setAttribute",
                  (a || 0) + "",
                  e[s],
                  n,
                  r,
                  0,
                  0,
                  s
                )).op = s),
                (o.b = a),
                this._props.push(s);
          },
          render: function (t, e) {
            for (var i = e._pt; i; )
              _t ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var i = e.length; i--; )
              this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
          },
        },
        ji("roundProps", tt),
        ji("modifiers"),
        ji("snap", et)
      ) || qi;
    function Bi(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function Ni(t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    }
    function Wi(t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    }
    function Vi(t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    }
    function Hi(t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function Ui(t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function Xi(t, e, i) {
      return (t.style[e] = i);
    }
    function Yi(t, e, i) {
      return t.style.setProperty(e, i);
    }
    function $i(t, e, i) {
      return (t._gsap[e] = i);
    }
    function Gi(t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    }
    function Qi(t, e, i, n, r) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
    }
    function Zi(t, e, i, n, r) {
      var s = t._gsap;
      (s[e] = i), s.renderTransform(r, s);
    }
    function Ji(t, e) {
      var i = this,
        n = this.target,
        r = n.style;
      if (t in Qn && r) {
        if (((this.tfm = this.tfm || {}), "transform" === t))
          return nr.transform.split(",").forEach(function (t) {
            return Ji.call(i, t, e);
          });
        if (
          (~(t = nr[t] || t).indexOf(",")
            ? t.split(",").forEach(function (t) {
                return (i.tfm[t] = ur(n, t));
              })
            : (this.tfm[t] = n._gsap.x ? n._gsap[t] : ur(n, t)),
          0 <= this.props.indexOf(rr))
        )
          return;
        n._gsap.svg &&
          ((this.svgo = n.getAttribute("data-svg-origin")),
          this.props.push(sr, e, "")),
          (t = rr);
      }
      (r || e) && this.props.push(t, e, r[t]);
    }
    function Ki(t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    }
    function tn() {
      var t,
        e,
        i = this.props,
        n = this.target,
        r = n.style,
        s = n._gsap;
      for (t = 0; t < i.length; t += 3)
        i[t + 1]
          ? (n[i[t]] = i[t + 2])
          : i[t + 2]
          ? (r[i[t]] = i[t + 2])
          : r.removeProperty(
              "--" === i[t].substr(0, 2)
                ? i[t]
                : i[t].replace(tr, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (e in this.tfm) s[e] = this.tfm[e];
        s.svg &&
          (s.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          ((t = Ln()) && t.isStart) || r[rr] || (Ki(r), (s.uncache = 1));
      }
    }
    function en(t, e) {
      var i = {
        target: t,
        props: [],
        revert: tn,
        save: Ji,
      };
      return (
        t._gsap || Fi.core.getCache(t),
        e &&
          e.split(",").forEach(function (t) {
            return i.save(t);
          }),
        i
      );
    }
    function nn(t, e) {
      var i = kn.createElementNS
        ? kn.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : kn.createElement(t);
      return i.style ? i : kn.createElement(t);
    }
    function rn(t, e, i) {
      var n = getComputedStyle(t);
      return (
        n[e] ||
        n.getPropertyValue(e.replace(tr, "-$1").toLowerCase()) ||
        n.getPropertyValue(e) ||
        (!i && rn(t, ar(e) || e, 1)) ||
        ""
      );
    }
    function sn() {
      "undefined" != typeof window &&
        window.document &&
        ((En = window),
        (kn = En.document),
        (Cn = kn.documentElement),
        (An = nn("div") || {
          style: {},
        }),
        nn("div"),
        (rr = ar(rr)),
        (sr = rr + "Origin"),
        (An.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Mn = !!ar("perspective")),
        (Ln = Fi.core.reverting),
        (Tn = 1));
    }
    function on(t) {
      var e,
        i = nn(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        n = this.parentNode,
        r = this.nextSibling,
        s = this.style.cssText;
      if (
        (Cn.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        t)
      )
        try {
          (e = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = on);
        } catch (t) {}
      else this._gsapBBox && (e = this._gsapBBox());
      return (
        n && (r ? n.insertBefore(this, r) : n.appendChild(this)),
        Cn.removeChild(i),
        (this.style.cssText = s),
        e
      );
    }
    function an(t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    }
    function ln(t) {
      var e;
      try {
        e = t.getBBox();
      } catch (i) {
        e = on.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === on ||
          (e = on.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +an(t, ["x", "cx", "x1"]) || 0,
              y: +an(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    }
    function hn(t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ln(t));
    }
    function un(t, e) {
      if (e) {
        var i = t.style;
        e in Qn && e !== sr && (e = rr),
          i.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              i.removeProperty(e.replace(tr, "-$1").toLowerCase()))
            : i.removeAttribute(e);
      }
    }
    function cn(t, e, i, n, r, s) {
      var o = new wi(t._pt, e, i, 0, 1, s ? Ui : Hi);
      return ((t._pt = o).b = n), (o.e = r), t._props.push(i), o;
    }
    function dn(t, e, i, n) {
      var r,
        s,
        o,
        a,
        l = parseFloat(i) || 0,
        h = (i + "").trim().substr((l + "").length) || "px",
        u = An.style,
        c = er.test(e),
        d = "svg" === t.tagName.toLowerCase(),
        f = (d ? "client" : "offset") + (c ? "Width" : "Height"),
        p = "px" === n,
        m = "%" === n;
      return n === h || !l || lr[n] || lr[h]
        ? l
        : ("px" === h || p || (l = dn(t, e, i, "px")),
          (a = t.getCTM && hn(t)),
          (!m && "%" !== h) || (!Qn[e] && !~e.indexOf("adius"))
            ? ((u[c ? "width" : "height"] = 100 + (p ? h : n)),
              (s =
                ~e.indexOf("adius") || ("em" === n && t.appendChild && !d)
                  ? t
                  : t.parentNode),
              a && (s = (t.ownerSVGElement || {}).parentNode),
              (s && s !== kn && s.appendChild) || (s = kn.body),
              (o = s._gsap) &&
              m &&
              o.width &&
              c &&
              o.time === je.time &&
              !o.uncache
                ? b((l / o.width) * 100)
                : ((!m && "%" !== h) ||
                    hr[rn(s, "display")] ||
                    (u.position = rn(t, "position")),
                  s === t && (u.position = "static"),
                  s.appendChild(An),
                  (r = An[f]),
                  s.removeChild(An),
                  (u.position = "absolute"),
                  c && m && (((o = v(s)).time = je.time), (o.width = s[f])),
                  b(p ? (r * l) / 100 : r && l ? (100 / r) * l : 0)))
            : ((r = a ? t.getBBox()[c ? "width" : "height"] : t[f]),
              b(m ? (l / r) * 100 : (l / 100) * r)));
    }
    function fn(t, e, i, n) {
      if (!i || "none" === i) {
        var r = ar(e, t, 1),
          s = r && rn(t, r, 1);
        s && s !== i
          ? ((e = r), (i = s))
          : "borderColor" === e && (i = rn(t, "borderTopColor"));
      }
      var o,
        a,
        l,
        h,
        u,
        c,
        d,
        f,
        p,
        m,
        g,
        v = new wi(this._pt, t.style, e, 0, 1, gi),
        y = 0,
        _ = 0;
      if (
        ((v.b = i),
        (v.e = n),
        (i += ""),
        "auto" == (n += "") &&
          ((t.style[e] = n), (n = rn(t, e) || n), (t.style[e] = i)),
        dt((o = [i, n])),
        (n = o[1]),
        (l = (i = o[0]).match(oe) || []),
        (n.match(oe) || []).length)
      ) {
        for (; (a = oe.exec(n)); )
          (d = a[0]),
            (p = n.substring(y, a.index)),
            u
              ? (u = (u + 1) % 5)
              : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                (u = 1),
            d !== (c = l[_++] || "") &&
              ((h = parseFloat(c) || 0),
              (g = c.substr((h + "").length)),
              "=" === d.charAt(1) && (d = x(h, d) + g),
              (f = parseFloat(d)),
              (m = d.substr((f + "").length)),
              (y = oe.lastIndex - m.length),
              m ||
                ((m = m || Xt.units[e] || g),
                y === n.length && ((n += m), (v.e += m))),
              g !== m && (h = dn(t, e, c, m) || 0),
              (v._pt = {
                _next: v._pt,
                p: p || 1 === _ ? p : ",",
                s: h,
                c: f - h,
                m: (u && u < 4) || "zIndex" === e ? Math.round : 0,
              }));
        v.c = y < n.length ? n.substring(y, n.length) : "";
      } else v.r = "display" === e && "none" === n ? Ui : Hi;
      return le.test(n) && (v.e = 0), (this._pt = v);
    }
    function pn(t) {
      var e = t.split(" "),
        i = e[0],
        n = e[1] || "50%";
      return (
        ("top" !== i && "bottom" !== i && "left" !== n && "right" !== n) ||
          ((t = i), (i = n), (n = t)),
        (e[0] = cr[i] || i),
        (e[1] = cr[n] || n),
        e.join(" ")
      );
    }
    function mn(t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i,
          n,
          r,
          s = e.t,
          o = s.style,
          a = e.u,
          l = s._gsap;
        if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
        else
          for (r = (a = a.split(",")).length; -1 < --r; )
            (i = a[r]),
              Qn[i] && ((n = 1), (i = "transformOrigin" === i ? sr : rr)),
              un(s, i);
        n &&
          (un(s, rr),
          l &&
            (l.svg && s.removeAttribute("transform"),
            mr(s, 1),
            (l.uncache = 1),
            Ki(o)));
      }
    }
    function gn(t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function vn(t) {
      var e = rn(t, rr);
      return gn(e) ? fr : e.substr(7).match(se).map(b);
    }
    function yn(t, e) {
      var i,
        n,
        r,
        s,
        o = t._gsap || v(t),
        a = t.style,
        l = vn(t);
      return o.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [
            (r = t.transform.baseVal.consolidate().matrix).a,
            r.b,
            r.c,
            r.d,
            r.e,
            r.f,
          ]).join(",")
          ? fr
          : l
        : (l !== fr ||
            t.offsetParent ||
            t === Cn ||
            o.svg ||
            ((r = a.display),
            (a.display = "block"),
            ((i = t.parentNode) && t.offsetParent) ||
              ((s = 1), (n = t.nextElementSibling), Cn.appendChild(t)),
            (l = vn(t)),
            r ? (a.display = r) : un(t, "display"),
            s &&
              (n
                ? i.insertBefore(t, n)
                : i
                ? i.appendChild(t)
                : Cn.removeChild(t))),
          e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    }
    function _n(t, e, i, n, r, s) {
      var o,
        a,
        l,
        h = t._gsap,
        u = r || yn(t, !0),
        c = h.xOrigin || 0,
        d = h.yOrigin || 0,
        f = h.xOffset || 0,
        p = h.yOffset || 0,
        m = u[0],
        g = u[1],
        v = u[2],
        y = u[3],
        _ = u[4],
        b = u[5],
        w = e.split(" "),
        x = parseFloat(w[0]) || 0,
        S = parseFloat(w[1]) || 0;
      i
        ? u !== fr &&
          (a = m * y - g * v) &&
          ((l = x * (-g / a) + S * (m / a) - (m * b - g * _) / a),
          (x = x * (y / a) + S * (-v / a) + (v * b - y * _) / a),
          (S = l))
        : ((x = (o = ln(t)).x + (~w[0].indexOf("%") ? (x / 100) * o.width : x)),
          (S =
            o.y + (~(w[1] || w[0]).indexOf("%") ? (S / 100) * o.height : S))),
        n || (!1 !== n && h.smooth)
          ? ((_ = x - c),
            (b = S - d),
            (h.xOffset = f + (_ * m + b * v) - _),
            (h.yOffset = p + (_ * g + b * y) - b))
          : (h.xOffset = h.yOffset = 0),
        (h.xOrigin = x),
        (h.yOrigin = S),
        (h.smooth = !!n),
        (h.origin = e),
        (h.originIsAbsolute = !!i),
        (t.style[sr] = "0px 0px"),
        s &&
          (cn(s, h, "xOrigin", c, x),
          cn(s, h, "yOrigin", d, S),
          cn(s, h, "xOffset", f, h.xOffset),
          cn(s, h, "yOffset", p, h.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + S);
    }
    function bn(t, e, i) {
      var n = G(e);
      return b(parseFloat(e) + parseFloat(dn(t, "x", i + "px", n))) + n;
    }
    function wn(t, e, i, r, s) {
      var o,
        a,
        l = 360,
        h = n(s),
        u = parseFloat(s) * (h && ~s.indexOf("rad") ? Zn : 1) - r,
        c = r + u + "deg";
      return (
        h &&
          ("short" === (o = s.split("_")[1]) &&
            (u %= l) != u % 180 &&
            (u += u < 0 ? l : -l),
          "cw" === o && u < 0
            ? (u = ((u + 36e9) % l) - ~~(u / l) * l)
            : "ccw" === o && 0 < u && (u = ((u - 36e9) % l) - ~~(u / l) * l)),
        (t._pt = a = new wi(t._pt, e, i, r, u, Ni)),
        (a.e = c),
        (a.u = "deg"),
        t._props.push(i),
        a
      );
    }
    function xn(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function Sn(t, e, i) {
      var n,
        r,
        s,
        o,
        a,
        l,
        h,
        u = xn({}, i._gsap),
        c = i.style;
      for (r in (u.svg
        ? ((s = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (c[rr] = e),
          (n = mr(i, 1)),
          un(i, rr),
          i.setAttribute("transform", s))
        : ((s = getComputedStyle(i)[rr]),
          (c[rr] = e),
          (n = mr(i, 1)),
          (c[rr] = s)),
      Qn))
        (s = u[r]) !== (o = n[r]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
          ((a = G(s) !== (h = G(o)) ? dn(i, r, s, h) : parseFloat(s)),
          (l = parseFloat(o)),
          (t._pt = new wi(t._pt, n, r, a, l - a, Bi)),
          (t._pt.u = h || 0),
          t._props.push(r));
      xn(n, u);
    }
    (ai.version = Ze.version = Fi.version = "3.12.2"), (Ct = 1), h() && Fe();
    var En,
      kn,
      Cn,
      Tn,
      An,
      Pn,
      Ln,
      Mn,
      Dn = Be.Power0,
      On = Be.Power1,
      zn = Be.Power2,
      In = Be.Power3,
      qn = Be.Power4,
      Rn = Be.Linear,
      jn = Be.Quad,
      Fn = Be.Cubic,
      Bn = Be.Quart,
      Nn = Be.Quint,
      Wn = Be.Strong,
      Vn = Be.Elastic,
      Hn = Be.Back,
      Un = Be.SteppedEase,
      Xn = Be.Bounce,
      Yn = Be.Sine,
      $n = Be.Expo,
      Gn = Be.Circ,
      Qn = {},
      Zn = 180 / Math.PI,
      Jn = Math.PI / 180,
      Kn = Math.atan2,
      tr = /([A-Z])/g,
      er = /(left|right|width|margin|padding|x)/i,
      ir = /[\s,\(]\S/,
      nr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      rr = "transform",
      sr = rr + "Origin",
      or = "O,Moz,ms,Ms,Webkit".split(","),
      ar = function (t, e, i) {
        var n = (e || An).style,
          r = 5;
        if (t in n && !i) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          r-- && !(or[r] + t in n);

        );
        return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? or[r] : "") + t;
      },
      lr = {
        deg: 1,
        rad: 1,
        turn: 1,
      },
      hr = {
        grid: 1,
        flex: 1,
      },
      ur = function (t, e, i, n) {
        var r;
        return (
          Tn || sn(),
          e in nr &&
            "transform" !== e &&
            ~(e = nr[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          Qn[e] && "transform" !== e
            ? ((r = mr(t, n)),
              (r =
                "transformOrigin" !== e
                  ? r[e]
                  : r.svg
                  ? r.origin
                  : gr(rn(t, sr)) + " " + r.zOrigin + "px"))
            : ((r = t.style[e]) &&
                "auto" !== r &&
                !n &&
                !~(r + "").indexOf("calc(")) ||
              (r =
                (dr[e] && dr[e](t, e, i)) ||
                rn(t, e) ||
                y(t, e) ||
                ("opacity" === e ? 1 : 0)),
          i && !~(r + "").trim().indexOf(" ") ? dn(t, e, r, i) + i : r
        );
      },
      cr = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      dr = {
        clearProps: function (t, e, i, n, r) {
          if ("isFromStart" !== r.data) {
            var s = (t._pt = new wi(t._pt, e, i, 0, 0, mn));
            return (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1;
          }
        },
      },
      fr = [1, 0, 0, 1, 0, 0],
      pr = {},
      mr = function (t, e) {
        var i = t._gsap || new $e(t);
        if ("x" in i && !e && !i.uncache) return i;
        var n,
          r,
          s,
          o,
          a,
          l,
          h,
          u,
          c,
          d,
          f,
          p,
          m,
          g,
          v,
          y,
          _,
          w,
          x,
          S,
          E,
          k,
          C,
          T,
          A,
          P,
          L,
          M,
          D,
          O,
          z,
          I,
          q = t.style,
          R = i.scaleX < 0,
          j = "deg",
          F = getComputedStyle(t),
          B = rn(t, sr) || "0";
        return (
          (n = r = s = l = h = u = c = d = f = 0),
          (o = a = 1),
          (i.svg = !(!t.getCTM || !hn(t))),
          F.translate &&
            (("none" === F.translate &&
              "none" === F.scale &&
              "none" === F.rotate) ||
              (q[rr] =
                ("none" !== F.translate
                  ? "translate3d(" +
                    (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
                ("none" !== F.scale
                  ? "scale(" + F.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== F[rr] ? F[rr] : "")),
            (q.scale = q.rotate = q.translate = "none")),
          (g = yn(t, i.svg)),
          i.svg &&
            ((T = i.uncache
              ? ((A = t.getBBox()),
                (B = i.xOrigin - A.x + "px " + (i.yOrigin - A.y) + "px"),
                "")
              : !e && t.getAttribute("data-svg-origin")),
            _n(t, T || B, !!T || i.originIsAbsolute, !1 !== i.smooth, g)),
          (p = i.xOrigin || 0),
          (m = i.yOrigin || 0),
          g !== fr &&
            ((w = g[0]),
            (x = g[1]),
            (S = g[2]),
            (E = g[3]),
            (n = k = g[4]),
            (r = C = g[5]),
            6 === g.length
              ? ((o = Math.sqrt(w * w + x * x)),
                (a = Math.sqrt(E * E + S * S)),
                (l = w || x ? Kn(x, w) * Zn : 0),
                (c = S || E ? Kn(S, E) * Zn + l : 0) &&
                  (a *= Math.abs(Math.cos(c * Jn))),
                i.svg &&
                  ((n -= p - (p * w + m * S)), (r -= m - (p * x + m * E))))
              : ((I = g[6]),
                (O = g[7]),
                (L = g[8]),
                (M = g[9]),
                (D = g[10]),
                (z = g[11]),
                (n = g[12]),
                (r = g[13]),
                (s = g[14]),
                (h = (v = Kn(I, D)) * Zn),
                v &&
                  ((T = k * (y = Math.cos(-v)) + L * (_ = Math.sin(-v))),
                  (A = C * y + M * _),
                  (P = I * y + D * _),
                  (L = k * -_ + L * y),
                  (M = C * -_ + M * y),
                  (D = I * -_ + D * y),
                  (z = O * -_ + z * y),
                  (k = T),
                  (C = A),
                  (I = P)),
                (u = (v = Kn(-S, D)) * Zn),
                v &&
                  ((y = Math.cos(-v)),
                  (z = E * (_ = Math.sin(-v)) + z * y),
                  (w = T = w * y - L * _),
                  (x = A = x * y - M * _),
                  (S = P = S * y - D * _)),
                (l = (v = Kn(x, w)) * Zn),
                v &&
                  ((T = w * (y = Math.cos(v)) + x * (_ = Math.sin(v))),
                  (A = k * y + C * _),
                  (x = x * y - w * _),
                  (C = C * y - k * _),
                  (w = T),
                  (k = A)),
                h &&
                  359.9 < Math.abs(h) + Math.abs(l) &&
                  ((h = l = 0), (u = 180 - u)),
                (o = b(Math.sqrt(w * w + x * x + S * S))),
                (a = b(Math.sqrt(C * C + I * I))),
                (v = Kn(k, C)),
                (c = 2e-4 < Math.abs(v) ? v * Zn : 0),
                (f = z ? 1 / (z < 0 ? -z : z) : 0)),
            i.svg &&
              ((T = t.getAttribute("transform")),
              (i.forceCSS = t.setAttribute("transform", "") || !gn(rn(t, rr))),
              T && t.setAttribute("transform", T))),
          90 < Math.abs(c) &&
            Math.abs(c) < 270 &&
            (R
              ? ((o *= -1),
                (c += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (c += c <= 0 ? 180 : -180))),
          (e = e || i.uncache),
          (i.x =
            n -
            ((i.xPercent =
              n &&
              ((!e && i.xPercent) ||
                (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
              ? (t.offsetWidth * i.xPercent) / 100
              : 0) +
            "px"),
          (i.y =
            r -
            ((i.yPercent =
              r &&
              ((!e && i.yPercent) ||
                (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
              ? (t.offsetHeight * i.yPercent) / 100
              : 0) +
            "px"),
          (i.z = s + "px"),
          (i.scaleX = b(o)),
          (i.scaleY = b(a)),
          (i.rotation = b(l) + j),
          (i.rotationX = b(h) + j),
          (i.rotationY = b(u) + j),
          (i.skewX = c + j),
          (i.skewY = d + j),
          (i.transformPerspective = f + "px"),
          (i.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (q[sr] = gr(B)),
          (i.xOffset = i.yOffset = 0),
          (i.force3D = Xt.force3D),
          (i.renderTransform = i.svg ? xr : Mn ? wr : vr),
          (i.uncache = 0),
          i
        );
      },
      gr = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      vr = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          wr(t, e);
      },
      yr = "0deg",
      _r = "0px",
      br = ") ",
      wr = function (t, e) {
        var i = e || this,
          n = i.xPercent,
          r = i.yPercent,
          s = i.x,
          o = i.y,
          a = i.z,
          l = i.rotation,
          h = i.rotationY,
          u = i.rotationX,
          c = i.skewX,
          d = i.skewY,
          f = i.scaleX,
          p = i.scaleY,
          m = i.transformPerspective,
          g = i.force3D,
          v = i.target,
          y = i.zOrigin,
          _ = "",
          b = ("auto" === g && t && 1 !== t) || !0 === g;
        if (y && (u !== yr || h !== yr)) {
          var w,
            x = parseFloat(h) * Jn,
            S = Math.sin(x),
            E = Math.cos(x);
          (x = parseFloat(u) * Jn),
            (s = bn(v, s, S * (w = Math.cos(x)) * -y)),
            (o = bn(v, o, -Math.sin(x) * -y)),
            (a = bn(v, a, E * w * -y + y));
        }
        m !== _r && (_ += "perspective(" + m + br),
          (n || r) && (_ += "translate(" + n + "%, " + r + "%) "),
          (!b && s === _r && o === _r && a === _r) ||
            (_ +=
              a !== _r || b
                ? "translate3d(" + s + ", " + o + ", " + a + ") "
                : "translate(" + s + ", " + o + br),
          l !== yr && (_ += "rotate(" + l + br),
          h !== yr && (_ += "rotateY(" + h + br),
          u !== yr && (_ += "rotateX(" + u + br),
          (c === yr && d === yr) || (_ += "skew(" + c + ", " + d + br),
          (1 === f && 1 === p) || (_ += "scale(" + f + ", " + p + br),
          (v.style[rr] = _ || "translate(0, 0)");
      },
      xr = function (t, e) {
        var i,
          n,
          r,
          s,
          o,
          a = e || this,
          l = a.xPercent,
          h = a.yPercent,
          u = a.x,
          c = a.y,
          d = a.rotation,
          f = a.skewX,
          p = a.skewY,
          m = a.scaleX,
          g = a.scaleY,
          v = a.target,
          y = a.xOrigin,
          _ = a.yOrigin,
          w = a.xOffset,
          x = a.yOffset,
          S = a.forceCSS,
          E = parseFloat(u),
          k = parseFloat(c);
        (d = parseFloat(d)),
          (f = parseFloat(f)),
          (p = parseFloat(p)) && ((f += p = parseFloat(p)), (d += p)),
          d || f
            ? ((d *= Jn),
              (f *= Jn),
              (i = Math.cos(d) * m),
              (n = Math.sin(d) * m),
              (r = Math.sin(d - f) * -g),
              (s = Math.cos(d - f) * g),
              f &&
                ((p *= Jn),
                (o = Math.tan(f - p)),
                (r *= o = Math.sqrt(1 + o * o)),
                (s *= o),
                p &&
                  ((o = Math.tan(p)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (n *= o))),
              (i = b(i)),
              (n = b(n)),
              (r = b(r)),
              (s = b(s)))
            : ((i = m), (s = g), (n = r = 0)),
          ((E && !~(u + "").indexOf("px")) ||
            (k && !~(c + "").indexOf("px"))) &&
            ((E = dn(v, "x", u, "px")), (k = dn(v, "y", c, "px"))),
          (y || _ || w || x) &&
            ((E = b(E + y - (y * i + _ * r) + w)),
            (k = b(k + _ - (y * n + _ * s) + x))),
          (l || h) &&
            ((E = b(E + (l / 100) * (o = v.getBBox()).width)),
            (k = b(k + (h / 100) * o.height))),
          (o =
            "matrix(" +
            i +
            "," +
            n +
            "," +
            r +
            "," +
            s +
            "," +
            E +
            "," +
            k +
            ")"),
          v.setAttribute("transform", o),
          S && (v.style[rr] = o);
      };
    _("padding,margin,Width,Radius", function (t, e) {
      var i = "Right",
        n = "Bottom",
        r = "Left",
        s = (
          e < 3 ? ["Top", i, n, r] : ["Top" + r, "Top" + i, n + i, n + r]
        ).map(function (i) {
          return e < 2 ? t + i : "border" + i + t;
        });
      dr[1 < e ? "border" + t : t] = function (t, e, i, n, r) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (e) {
              return ur(t, e, i);
            })),
            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
          );
        (o = (n + "").split(" ")),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, r);
      };
    });
    var Sr,
      Er,
      kr = {
        name: "css",
        register: sn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, i, r, s) {
          var o,
            a,
            l,
            h,
            u,
            c,
            f,
            p,
            m,
            g,
            v,
            y,
            _,
            b,
            w,
            S,
            E = this._props,
            k = t.style,
            C = i.vars.startAt;
          for (f in (Tn || sn(),
          (this.styles = this.styles || en(t)),
          (S = this.styles.props),
          (this.tween = i),
          e))
            if (
              "autoRound" !== f &&
              ((a = e[f]), !ye[f] || !Je(f, e, i, r, t, s))
            )
              if (
                ((u = typeof a),
                (c = dr[f]),
                "function" === u && (u = typeof (a = a.call(i, r, t, s))),
                "string" === u && ~a.indexOf("random(") && (a = rt(a)),
                c)
              )
                c(this, t, f, a, i) && (w = 1);
              else if ("--" === f.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
                  (a += ""),
                  (qe.lastIndex = 0),
                  qe.test(o) || ((p = G(o)), (m = G(a))),
                  m ? p !== m && (o = dn(t, f, o, m) + m) : p && (a += p),
                  this.add(k, "setProperty", o, a, r, s, 0, 0, f),
                  E.push(f),
                  S.push(f, 0, k[f]);
              else if ("undefined" !== u) {
                if (
                  (C && f in C
                    ? (n(
                        (o =
                          "function" == typeof C[f]
                            ? C[f].call(i, r, t, s)
                            : C[f])
                      ) &&
                        ~o.indexOf("random(") &&
                        (o = rt(o)),
                      G(o + "") || (o += Xt.units[f] || G(ur(t, f)) || ""),
                      "=" === (o + "").charAt(1) && (o = ur(t, f)))
                    : (o = ur(t, f)),
                  (h = parseFloat(o)),
                  (g =
                    "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (l = parseFloat(a)),
                  f in nr &&
                    ("autoAlpha" === f &&
                      (1 === h &&
                        "hidden" === ur(t, "visibility") &&
                        l &&
                        (h = 0),
                      S.push("visibility", 0, k.visibility),
                      cn(
                        this,
                        k,
                        "visibility",
                        h ? "inherit" : "hidden",
                        l ? "inherit" : "hidden",
                        !l
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = nr[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (v = f in Qn))
                )
                  if (
                    (this.styles.save(f),
                    y ||
                      (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                        mr(t, e.parseTransform),
                      (b = !1 !== e.smoothOrigin && _.smooth),
                      ((y = this._pt =
                        new wi(
                          this._pt,
                          k,
                          rr,
                          0,
                          1,
                          _.renderTransform,
                          _,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new wi(
                      this._pt,
                      _,
                      "scaleY",
                      _.scaleY,
                      (g ? x(_.scaleY, g + l) : l) - _.scaleY || 0,
                      Bi
                    )),
                      (this._pt.u = 0),
                      E.push("scaleY", f),
                      (f += "X");
                  else {
                    if ("transformOrigin" === f) {
                      S.push(sr, 0, k[sr]),
                        (a = pn(a)),
                        _.svg
                          ? _n(t, a, 0, b, 0, this)
                          : ((m = parseFloat(a.split(" ")[2]) || 0) !==
                              _.zOrigin && cn(this, _, "zOrigin", _.zOrigin, m),
                            cn(this, k, f, gr(o), gr(a)));
                      continue;
                    }
                    if ("svgOrigin" === f) {
                      _n(t, a, 1, b, 0, this);
                      continue;
                    }
                    if (f in pr) {
                      wn(this, _, f, h, g ? x(h, g + a) : a);
                      continue;
                    }
                    if ("smoothOrigin" === f) {
                      cn(this, _, "smooth", _.smooth, a);
                      continue;
                    }
                    if ("force3D" === f) {
                      _[f] = a;
                      continue;
                    }
                    if ("transform" === f) {
                      Sn(this, a, t);
                      continue;
                    }
                  }
                else f in k || (f = ar(f) || f);
                if (
                  v ||
                  ((l || 0 === l) && (h || 0 === h) && !ir.test(a) && f in k)
                )
                  (l = l || 0),
                    (p = (o + "").substr((h + "").length)) !==
                      (m = G(a) || (f in Xt.units ? Xt.units[f] : p)) &&
                      (h = dn(t, f, o, m)),
                    (this._pt = new wi(
                      this._pt,
                      v ? _ : k,
                      f,
                      h,
                      (g ? x(h, g + l) : l) - h,
                      v || ("px" !== m && "zIndex" !== f) || !1 === e.autoRound
                        ? Bi
                        : Vi
                    )),
                    (this._pt.u = m || 0),
                    p !== m &&
                      "%" !== m &&
                      ((this._pt.b = o), (this._pt.r = Wi));
                else if (f in k) fn.call(this, t, f, o, g ? g + a : a);
                else if (f in t) this.add(t, f, o || t[f], g ? g + a : a, r, s);
                else if ("parseTransform" !== f) {
                  d(f, a);
                  continue;
                }
                v || (f in k ? S.push(f, 0, k[f]) : S.push(f, 1, o || t[f])),
                  E.push(f);
              }
          w && bi(this);
        },
        render: function (t, e) {
          if (e.tween._time || !Ln())
            for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
          else e.styles.revert();
        },
        get: ur,
        aliases: nr,
        getSetter: function (t, e, i) {
          var n = nr[e];
          return (
            n && n.indexOf(",") < 0 && (e = n),
            e in Qn && e !== sr && (t._gsap.x || ur(t, "x"))
              ? i && Pn === i
                ? "scale" === e
                  ? Gi
                  : $i
                : (Pn = i || {}) && ("scale" === e ? Qi : Zi)
              : t.style && !o(t.style[e])
              ? Xi
              : ~e.indexOf("-")
              ? Yi
              : fi(t, e)
          );
        },
        core: {
          _removeProperty: un,
          _getMatrix: yn,
        },
      };
    (Fi.utils.checkPrefix = ar),
      (Fi.core.getStyleSaver = en),
      (Er = _(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
          "," +
          (Sr = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          Qn[t] = 1;
        }
      )),
      _(Sr, function (t) {
        (Xt.units[t] = "deg"), (pr[t] = 1);
      }),
      (nr[Er[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Sr),
      _(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          nr[e[1]] = Er[e[0]];
        }
      ),
      _(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          Xt.units[t] = "px";
        }
      ),
      Fi.registerPlugin(kr);
    var Cr = Fi.registerPlugin(kr) || Fi,
      Tr = Cr.core.Tween;
    (t.Back = Hn),
      (t.Bounce = Xn),
      (t.CSSPlugin = kr),
      (t.Circ = Gn),
      (t.Cubic = Fn),
      (t.Elastic = Vn),
      (t.Expo = $n),
      (t.Linear = Rn),
      (t.Power0 = Dn),
      (t.Power1 = On),
      (t.Power2 = zn),
      (t.Power3 = In),
      (t.Power4 = qn),
      (t.Quad = jn),
      (t.Quart = Bn),
      (t.Quint = Nn),
      (t.Sine = Yn),
      (t.SteppedEase = Un),
      (t.Strong = Wn),
      (t.TimelineLite = Ze),
      (t.TimelineMax = Ze),
      (t.TweenLite = ai),
      (t.TweenMax = Tr),
      (t.default = Cr),
      (t.gsap = Cr),
      "undefined" == typeof window || window !== t
        ? Object.defineProperty(t, "__esModule", {
            value: !0,
          })
        : delete t.default;
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e(((t = t || self).window = t.window || {}));
  })(this, function (t) {
    "use strict";
    function e(t) {
      var e = t.ownerDocument || t;
      !(_ in t.style) &&
        "msTransform" in t.style &&
        (b = (_ = "msTransform") + "Origin");
      for (; e.parentNode && (e = e.parentNode); );
      if (((u = window), (m = new S()), e)) {
        (c = (h = e).documentElement),
          (d = e.body),
          ((g = h.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
          )).style.transform = "none");
        var i = e.createElement("div"),
          n = e.createElement("div");
        d.appendChild(i),
          i.appendChild(n),
          (i.style.position = "static"),
          (i.style[_] = "translate3d(0,0,1px)"),
          (v = n.offsetParent !== i),
          d.removeChild(i);
      }
      return e;
    }
    function i() {
      return u.pageYOffset || h.scrollTop || c.scrollTop || d.scrollTop || 0;
    }
    function n() {
      return u.pageXOffset || h.scrollLeft || c.scrollLeft || d.scrollLeft || 0;
    }
    function r(t) {
      return (
        t.ownerSVGElement ||
        ("svg" === (t.tagName + "").toLowerCase() ? t : null)
      );
    }
    function s(t, i) {
      if (t.parentNode && (h || e(t))) {
        var n = r(t),
          o = n
            ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
            : "http://www.w3.org/1999/xhtml",
          a = n ? (i ? "rect" : "g") : "div",
          l = 2 !== i ? 0 : 100,
          u = 3 === i ? 100 : 0,
          c =
            "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          d = h.createElementNS
            ? h.createElementNS(o.replace(/^https/, "http"), a)
            : h.createElement(a);
        return (
          i &&
            (n
              ? ((p = p || s(t)),
                d.setAttribute("width", 0.01),
                d.setAttribute("height", 0.01),
                d.setAttribute("transform", "translate(" + l + "," + u + ")"),
                p.appendChild(d))
              : (f || ((f = s(t)).style.cssText = c),
                (d.style.cssText =
                  c +
                  "width:0.1px;height:0.1px;top:" +
                  u +
                  "px;left:" +
                  l +
                  "px"),
                f.appendChild(d))),
          d
        );
      }
      throw "Need document and parent.";
    }
    function o(t) {
      var e,
        i = t.getCTM();
      return (
        i ||
          ((e = t.style[_]),
          (t.style[_] = "none"),
          t.appendChild(g),
          (i = g.getCTM()),
          t.removeChild(g),
          e
            ? (t.style[_] = e)
            : t.style.removeProperty(
                _.replace(/([A-Z])/g, "-$1").toLowerCase()
              )),
        i || m.clone()
      );
    }
    function a(t, e) {
      var i,
        n,
        a,
        l,
        h,
        c,
        d = r(t),
        g = t === d,
        y = d ? w : x,
        E = t.parentNode;
      if (t === u) return t;
      if ((y.length || y.push(s(t, 1), s(t, 2), s(t, 3)), (i = d ? p : f), d))
        g
          ? ((l = -(a = o(t)).e / a.a), (h = -a.f / a.d), (n = m))
          : t.getBBox
          ? ((a = t.getBBox()),
            (l =
              (n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems
                ? 1 < n.numberOfItems
                  ? (function (t) {
                      for (var e = new S(), i = 0; i < t.numberOfItems; i++)
                        e.multiply(t.getItem(i).matrix);
                      return e;
                    })(n)
                  : n.getItem(0).matrix
                : m).a *
                a.x +
              n.c * a.y),
            (h = n.b * a.x + n.d * a.y))
          : ((n = new S()), (l = h = 0)),
          e && "g" === t.tagName.toLowerCase() && (l = h = 0),
          (g ? d : E).appendChild(i),
          i.setAttribute(
            "transform",
            "matrix(" +
              n.a +
              "," +
              n.b +
              "," +
              n.c +
              "," +
              n.d +
              "," +
              (n.e + l) +
              "," +
              (n.f + h) +
              ")"
          );
      else {
        if (((l = h = 0), v))
          for (
            n = t.offsetParent, a = t;
            (a = a && a.parentNode) && a !== n && a.parentNode;

          )
            4 < (u.getComputedStyle(a)[_] + "").length &&
              ((l = a.offsetLeft), (h = a.offsetTop), (a = 0));
        if (
          "absolute" !== (c = u.getComputedStyle(t)).position &&
          "fixed" !== c.position
        )
          for (n = t.offsetParent; E && E !== n; )
            (l += E.scrollLeft || 0),
              (h += E.scrollTop || 0),
              (E = E.parentNode);
        ((a = i.style).top = t.offsetTop - h + "px"),
          (a.left = t.offsetLeft - l + "px"),
          (a[_] = c[_]),
          (a[b] = c[b]),
          (a.position = "fixed" === c.position ? "fixed" : "absolute"),
          t.parentNode.appendChild(i);
      }
      return i;
    }
    function l(t, e, i, n, r, s, o) {
      return (
        (t.a = e), (t.b = i), (t.c = n), (t.d = r), (t.e = s), (t.f = o), t
      );
    }
    var h,
      u,
      c,
      d,
      f,
      p,
      m,
      g,
      v,
      y,
      _ = "transform",
      b = _ + "Origin",
      w = [],
      x = [],
      S =
        (((y = E.prototype).inverse = function () {
          var t = this.a,
            e = this.b,
            i = this.c,
            n = this.d,
            r = this.e,
            s = this.f,
            o = t * n - e * i || 1e-10;
          return l(
            this,
            n / o,
            -e / o,
            -i / o,
            t / o,
            (i * s - n * r) / o,
            -(t * s - e * r) / o
          );
        }),
        (y.multiply = function (t) {
          var e = this.a,
            i = this.b,
            n = this.c,
            r = this.d,
            s = this.e,
            o = this.f,
            a = t.a,
            h = t.c,
            u = t.b,
            c = t.d,
            d = t.e,
            f = t.f;
          return l(
            this,
            a * e + u * n,
            a * i + u * r,
            h * e + c * n,
            h * i + c * r,
            s + d * e + f * n,
            o + d * i + f * r
          );
        }),
        (y.clone = function () {
          return new E(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (y.equals = function (t) {
          var e = this.a,
            i = this.b,
            n = this.c,
            r = this.d,
            s = this.e,
            o = this.f;
          return (
            e === t.a &&
            i === t.b &&
            n === t.c &&
            r === t.d &&
            s === t.e &&
            o === t.f
          );
        }),
        (y.apply = function (t, e) {
          void 0 === e && (e = {});
          var i = t.x,
            n = t.y,
            r = this.a,
            s = this.b,
            o = this.c,
            a = this.d,
            l = this.e,
            h = this.f;
          return (
            (e.x = i * r + n * o + l || 0), (e.y = i * s + n * a + h || 0), e
          );
        }),
        E);
    function E(t, e, i, n, r, s) {
      void 0 === t && (t = 1),
        void 0 === e && (e = 0),
        void 0 === i && (i = 0),
        void 0 === n && (n = 1),
        void 0 === r && (r = 0),
        void 0 === s && (s = 0),
        l(this, t, e, i, n, r, s);
    }
    function k(t, s, o, l) {
      if (!t || !t.parentNode || (h || e(t)).documentElement === t)
        return new S();
      var c = (function (t) {
          for (var e, i; t && t !== d; )
            (i = t._gsap) && i.uncache && i.get(t, "x"),
              i &&
                !i.scaleX &&
                !i.scaleY &&
                i.renderTransform &&
                ((i.scaleX = i.scaleY = 1e-4),
                i.renderTransform(1, i),
                e ? e.push(i) : (e = [i])),
              (t = t.parentNode);
          return e;
        })(t),
        f = r(t) ? w : x,
        p = a(t, o),
        m = f[0].getBoundingClientRect(),
        g = f[1].getBoundingClientRect(),
        v = f[2].getBoundingClientRect(),
        y = p.parentNode,
        _ =
          !l &&
          (function t(e) {
            return (
              "fixed" === u.getComputedStyle(e).position ||
              ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            );
          })(t),
        b = new S(
          (g.left - m.left) / 100,
          (g.top - m.top) / 100,
          (v.left - m.left) / 100,
          (v.top - m.top) / 100,
          m.left + (_ ? 0 : n()),
          m.top + (_ ? 0 : i())
        );
      if ((y.removeChild(p), c))
        for (m = c.length; m--; )
          ((g = c[m]).scaleX = g.scaleY = 0), g.renderTransform(1, g);
      return s ? b.inverse() : b;
    }
    function C(t, e) {
      return t.actions.forEach(function (t) {
        return t.vars[e] && t.vars[e](t);
      });
    }
    function T(t) {
      return "string" == typeof t ? t.split(" ").join("").split(",") : t;
    }
    function A(t) {
      return G(t)[0] || console.warn("Element not found:", t);
    }
    function P(t) {
      return Math.round(1e4 * t) / 1e4 || 0;
    }
    function L(t, e, i) {
      return t.forEach(function (t) {
        return t.classList[i](e);
      });
    }
    function M(t) {
      return t.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
    function D(t, e) {
      var i,
        n = {};
      for (i in t) e[i] || (n[i] = t[i]);
      return n;
    }
    function O(t) {
      var e = (mt[t] = T(t));
      return (ut[t] = e.concat(dt)), e;
    }
    function z(t, e, i) {
      return (
        t.forEach(function (t) {
          return (t.d = (function t(e, i, n) {
            void 0 === n && (n = 0);
            for (
              var r = e.parentNode,
                s = 1e3 * Math.pow(10, n) * (i ? -1 : 1),
                o = i ? 900 * -s : 0;
              e;

            )
              (o += s), (e = e.previousSibling);
            return r ? o + t(r, i, n + 1) : o;
          })(i ? t.element : t.t, e));
        }),
        t.sort(function (t, e) {
          return t.d - e.d;
        }),
        t
      );
    }
    function I(t, e) {
      for (
        var i, n, r = t.element.style, s = (t.css = t.css || []), o = e.length;
        o--;

      )
        (n = r[(i = e[o])] || r.getPropertyValue(i)),
          s.push(n ? i : ht[i] || (ht[i] = M(i)), n);
      return r;
    }
    function q(t) {
      var e = t.css,
        i = t.element.style,
        n = 0;
      for (t.cache.uncache = 1; n < e.length; n += 2)
        e[n + 1] ? (i[e[n]] = e[n + 1]) : i.removeProperty(e[n]);
      !e[e.indexOf("transform") + 1] &&
        i.translate &&
        (i.removeProperty("translate"),
        i.removeProperty("scale"),
        i.removeProperty("rotate"));
    }
    function R(t, e) {
      t.forEach(function (t) {
        return (t.a.cache.uncache = 1);
      }),
        e || t.finalStates.forEach(q);
    }
    function j(t, e, r) {
      var s,
        o,
        a,
        l = t.element,
        h = t.width,
        u = t.height,
        c = t.uncache,
        d = t.getProp,
        f = l.style,
        p = 4;
      if (("object" != typeof e && (e = t), Z && 1 !== r))
        return (
          Z._abs.push({
            t: l,
            b: t,
            a: t,
            sd: 0,
          }),
          Z._final.push(function () {
            return (t.cache.uncache = 1) && q(t);
          }),
          l
        );
      for (
        o = "none" === d("display"),
          (t.isVisible && !o) ||
            (o && (I(t, ["display"]).display = e.display),
            (t.matrix = e.matrix),
            (t.width = h = t.width || e.width),
            (t.height = u = t.height || e.height)),
          I(t, gt),
          a = window.getComputedStyle(l);
        p--;

      )
        f[gt[p]] = a[gt[p]];
      if (
        ((f.gridArea = "1 / 1 / 1 / 1"),
        (f.transition = "none"),
        (f.position = "absolute"),
        (f.width = h + "px"),
        (f.height = u + "px"),
        f.top || (f.top = "0px"),
        f.left || (f.left = "0px"),
        c)
      )
        s = new kt(l);
      else if ((((s = D(t, lt)).position = "absolute"), t.simple)) {
        var m = l.getBoundingClientRect();
        s.matrix = new S(1, 0, 0, 1, m.left + n(), m.top + i());
      } else s.matrix = k(l, !1, !1, !0);
      return (
        (s = yt(s, t, !0)), (t.x = tt(s.x, 0.01)), (t.y = tt(s.y, 0.01)), l
      );
    }
    function F(t, e) {
      return (
        !0 !== e &&
          ((e = G(e)),
          (t = t.filter(function (t) {
            if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
            t.t._gsap.renderTransform(1),
              t.b.isVisible &&
                ((t.t.style.width = t.b.width + "px"),
                (t.t.style.height = t.b.height + "px"));
          }))),
        t
      );
    }
    function B(t) {
      return z(t, !0).forEach(function (t) {
        return (
          (t.a.isVisible || t.b.isVisible) && j(t.sd < 0 ? t.b : t.a, t.b, 1)
        );
      });
    }
    function N(t, e) {
      var i,
        n = t.style || t;
      for (i in e) n[i] = e[i];
    }
    function W(t) {
      return t.map(function (t) {
        return t.element;
      });
    }
    function V(t, e, i) {
      return t && e.length && i.add(t(W(e), i, new xt(e, 0, !0)), 0);
    }
    function H(t, e) {
      return t instanceof xt ? t : new xt(t, e);
    }
    function U(t, e, i) {
      var n = t.idLookup[i],
        r = t.alt[i];
      return !r.isVisible ||
        ((e.getElementState(r.element) || r).isVisible && n.isVisible)
        ? n
        : r;
    }
    function X(t) {
      if (t !== it) {
        var e = K.style,
          i = K.clientWidth === window.outerWidth,
          n = K.clientHeight === window.outerHeight,
          r = 4;
        if (t && (i || n)) {
          for (; r--; ) _t[r] = e[bt[r]];
          i && ((e.width = K.clientWidth + "px"), (e.overflowY = "hidden")),
            n && ((e.height = K.clientHeight + "px"), (e.overflowX = "hidden")),
            (it = t);
        } else if (it) {
          for (; r--; ) _t[r] ? (e[bt[r]] = _t[r]) : e.removeProperty(M(bt[r]));
          it = t;
        }
      }
    }
    function Y(t, e, i, n) {
      (t instanceof xt && e instanceof xt) ||
        console.warn("Not a valid state object.");
      var r,
        s,
        o,
        a,
        l,
        h,
        u,
        c,
        d,
        f,
        p,
        m,
        g,
        v,
        y,
        _ = (i = i || {}).clearProps,
        b = i.onEnter,
        w = i.onLeave,
        x = i.absolute,
        S = i.absoluteOnLeave,
        E = i.custom,
        C = i.delay,
        T = i.paused,
        A = i.repeat,
        P = i.repeatDelay,
        M = i.yoyo,
        q = i.toggleClass,
        j = i.nested,
        N = i.zIndex,
        W = i.scale,
        H = i.fade,
        Y = i.stagger,
        $ = i.spin,
        G = i.prune,
        J = ("props" in i ? i : t).props,
        K = D(i, ft),
        tt = Q.timeline({
          delay: C,
          paused: T,
          repeat: A,
          repeatDelay: P,
          yoyo: M,
          data: "isFlip",
        }),
        et = K,
        it = [],
        nt = [],
        rt = [],
        st = [],
        ot = !0 === $ ? 1 : $ || 0,
        at =
          "function" == typeof $
            ? $
            : function () {
                return ot;
              },
        lt = t.interrupted || e.interrupted,
        ht = tt[1 !== n ? "to" : "from"];
      for (s in e.idLookup)
        (p = e.alt[s] ? U(e, t, s) : e.idLookup[s]),
          (l = p.element),
          (f = t.idLookup[s]),
          !t.alt[s] ||
            l !== f.element ||
            (!t.alt[s].isVisible && p.isVisible) ||
            (f = t.alt[s]),
          f
            ? ((h = {
                t: l,
                b: f,
                a: p,
                sd: f.element === l ? 0 : p.isVisible ? 1 : -1,
              }),
              rt.push(h),
              h.sd &&
                (h.sd < 0 && ((h.b = p), (h.a = f)),
                lt && I(h.b, J ? ut[J] : dt),
                H &&
                  rt.push(
                    (h.swap = {
                      t: f.element,
                      b: h.b,
                      a: h.a,
                      sd: -h.sd,
                      swap: h,
                    })
                  )),
              (l._flip = f.element._flip = Z ? Z.timeline : tt))
            : p.isVisible &&
              (rt.push({
                t: l,
                b: D(p, {
                  isVisible: 1,
                }),
                a: p,
                sd: 0,
                entering: 1,
              }),
              (l._flip = Z ? Z.timeline : tt));
      J &&
        (mt[J] || O(J)).forEach(function (t) {
          return (K[t] = function (e) {
            return rt[e].a.props[t];
          });
        }),
        (rt.finalStates = d = []),
        (m = function () {
          for (z(rt), X(!0), a = 0; a < rt.length; a++)
            (h = rt[a]),
              (g = h.a),
              (v = h.b),
              !G || g.isDifferent(v) || h.entering
                ? ((l = h.t),
                  !j || h.sd < 0 || !a || (g.matrix = k(l, !1, !1, !0)),
                  v.isVisible && g.isVisible
                    ? (h.sd < 0
                        ? ((u = new kt(l, J, t.simple)),
                          yt(u, g, W, 0, 0, u),
                          (u.matrix = k(l, !1, !1, !0)),
                          (u.css = h.b.css),
                          (h.a = g = u),
                          H && (l.style.opacity = lt ? v.opacity : g.opacity),
                          Y && st.push(l))
                        : 0 < h.sd &&
                          H &&
                          (l.style.opacity = lt ? g.opacity - v.opacity : "0"),
                      yt(g, v, W, J))
                    : v.isVisible !== g.isVisible &&
                      (v.isVisible
                        ? g.isVisible ||
                          ((v.css = g.css),
                          nt.push(v),
                          rt.splice(a--, 1),
                          x && j && yt(g, v, W, J))
                        : (g.isVisible && it.push(g), rt.splice(a--, 1))),
                  W ||
                    ((l.style.maxWidth = Math.max(g.width, v.width) + "px"),
                    (l.style.maxHeight = Math.max(g.height, v.height) + "px"),
                    (l.style.minWidth = Math.min(g.width, v.width) + "px"),
                    (l.style.minHeight = Math.min(g.height, v.height) + "px")),
                  j && q && l.classList.add(q))
                : rt.splice(a--, 1),
              d.push(g);
          var e;
          if (
            (q &&
              ((e = d.map(function (t) {
                return t.element;
              })),
              j &&
                e.forEach(function (t) {
                  return t.classList.remove(q);
                })),
            X(!1),
            W
              ? ((K.scaleX = function (t) {
                  return rt[t].a.scaleX;
                }),
                (K.scaleY = function (t) {
                  return rt[t].a.scaleY;
                }))
              : ((K.width = function (t) {
                  return rt[t].a.width + "px";
                }),
                (K.height = function (t) {
                  return rt[t].a.height + "px";
                }),
                (K.autoRound = i.autoRound || !1)),
            (K.x = function (t) {
              return rt[t].a.x + "px";
            }),
            (K.y = function (t) {
              return rt[t].a.y + "px";
            }),
            (K.rotation = function (t) {
              return rt[t].a.rotation + ($ ? 360 * at(t, c[t], c) : 0);
            }),
            (K.skewX = function (t) {
              return rt[t].a.skewX;
            }),
            (c = rt.map(function (t) {
              return t.t;
            })),
            (!N && 0 !== N) ||
              ((K.modifiers = {
                zIndex: function () {
                  return N;
                },
              }),
              (K.zIndex = N),
              (K.immediateRender = !1 !== i.immediateRender)),
            H &&
              (K.opacity = function (t) {
                return rt[t].sd < 0
                  ? 0
                  : 0 < rt[t].sd
                  ? rt[t].a.opacity
                  : "+=0";
              }),
            st.length)
          ) {
            Y = Q.utils.distribute(Y);
            var n = c.slice(st.length);
            K.stagger = function (t, e) {
              return Y(~st.indexOf(e) ? c.indexOf(rt[t].swap.t) : t, e, n);
            };
          }
          if (
            (ct.forEach(function (t) {
              return i[t] && tt.eventCallback(t, i[t], i[t + "Params"]);
            }),
            E && c.length)
          )
            for (s in ((et = D(K, ft)),
            "scale" in E && ((E.scaleX = E.scaleY = E.scale), delete E.scale),
            E))
              ((r = D(E[s], pt))[s] = K[s]),
                !("duration" in r) &&
                  "duration" in K &&
                  (r.duration = K.duration),
                (r.stagger = K.stagger),
                ht.call(tt, c, r, 0),
                delete et[s];
          (c.length || nt.length || it.length) &&
            (q &&
              tt.add(function () {
                return L(e, q, tt._zTime < 0 ? "remove" : "add");
              }, 0) &&
              !T &&
              L(e, q, "add"),
            c.length && ht.call(tt, c, et, 0)),
            V(b, it, tt),
            V(w, nt, tt);
          var f = Z && Z.timeline;
          f &&
            (f.add(tt, 0),
            Z._final.push(function () {
              return R(rt, !_);
            })),
            (o = tt.duration()),
            tt.call(function () {
              var t = tt.time() >= o;
              t && !f && R(rt, !_), q && L(e, q, t ? "remove" : "add");
            });
        }),
        S &&
          (x = rt
            .filter(function (t) {
              return !t.sd && !t.a.isVisible && t.b.isVisible;
            })
            .map(function (t) {
              return t.a.element;
            })),
        Z
          ? (x && (y = Z._abs).push.apply(y, F(rt, x)), Z._run.push(m))
          : (x && B(F(rt, x)), m());
      var gt = Z ? Z.timeline : tt;
      return (
        (gt.revert = function () {
          return wt(gt, 1, 1);
        }),
        gt
      );
    }
    function $(t) {
      for (
        var e,
          i = (t.idLookup = {}),
          n = (t.alt = {}),
          r = t.elementStates,
          s = r.length;
        s--;

      )
        i[(e = r[s]).id] ? (n[e.id] = e) : (i[e.id] = e);
    }
    var G,
      Q,
      Z,
      J,
      K,
      tt,
      et,
      it,
      nt,
      rt = 1,
      st = {},
      ot = 180 / Math.PI,
      at = Math.PI / 180,
      lt = {},
      ht = {},
      ut = {},
      ct = T("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
      dt = T(
        "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
      ),
      ft = {
        zIndex: 1,
        kill: 1,
        simple: 1,
        spin: 1,
        clearProps: 1,
        targets: 1,
        toggleClass: 1,
        onComplete: 1,
        onUpdate: 1,
        onInterrupt: 1,
        onStart: 1,
        delay: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: 1,
        scale: 1,
        fade: 1,
        absolute: 1,
        props: 1,
        onEnter: 1,
        onLeave: 1,
        custom: 1,
        paused: 1,
        nested: 1,
        prune: 1,
        absoluteOnLeave: 1,
      },
      pt = {
        zIndex: 1,
        simple: 1,
        clearProps: 1,
        scale: 1,
        absolute: 1,
        fitChild: 1,
        getVars: 1,
        props: 1,
      },
      mt = {},
      gt =
        "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
          ","
        ),
      vt = function (t, e, i, n) {
        return t instanceof kt
          ? t
          : t instanceof xt
          ? (function (t, e) {
              return (e && t.idLookup[vt(e).id]) || t.elementStates[0];
            })(t, n)
          : new kt(
              "string" == typeof t ? A(t) || console.warn(t + " not found") : t,
              e,
              i
            );
      },
      yt = function (t, e, i, n, r, s) {
        var o,
          a,
          l,
          h,
          u,
          c,
          d,
          f = t.element,
          p = t.cache,
          m = t.parent,
          g = t.x,
          v = t.y,
          y = e.width,
          _ = e.height,
          b = e.scaleX,
          w = e.scaleY,
          x = e.rotation,
          S = e.bounds,
          E = s && et && et(f, "transform"),
          C = t,
          T = e.matrix,
          A = T.e,
          L = T.f,
          M =
            t.bounds.width !== S.width ||
            t.bounds.height !== S.height ||
            t.scaleX !== b ||
            t.scaleY !== w ||
            t.rotation !== x,
          D = !M && t.simple && e.simple && !r;
        return (
          D || !m
            ? ((b = w = 1), (x = o = 0))
            : ((c = (u = (function (t) {
                var e = t._gsap || Q.core.getCache(t);
                return e.gmCache === Q.ticker.frame
                  ? e.gMatrix
                  : ((e.gmCache = Q.ticker.frame),
                    (e.gMatrix = k(t, !0, !1, !0)));
              })(m))
                .clone()
                .multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix)),
              (x = P(Math.atan2(c.b, c.a) * ot)),
              (o = P(Math.atan2(c.c, c.d) * ot + x) % 360),
              (b = Math.sqrt(Math.pow(c.a, 2) + Math.pow(c.b, 2))),
              (w =
                Math.sqrt(Math.pow(c.c, 2) + Math.pow(c.d, 2)) *
                Math.cos(o * at)),
              r &&
                ((r = G(r)[0]),
                (h = Q.getProperty(r)),
                (d =
                  r.getBBox && "function" == typeof r.getBBox && r.getBBox()),
                (C = {
                  scaleX: h("scaleX"),
                  scaleY: h("scaleY"),
                  width: d ? d.width : Math.ceil(parseFloat(h("width", "px"))),
                  height: d ? d.height : parseFloat(h("height", "px")),
                })),
              (p.rotation = x + "deg"),
              (p.skewX = o + "deg")),
          i
            ? ((b *= y !== C.width && C.width ? y / C.width : 1),
              (w *= _ !== C.height && C.height ? _ / C.height : 1),
              (p.scaleX = b),
              (p.scaleY = w))
            : ((y = tt((y * b) / C.scaleX, 0)),
              (_ = tt((_ * w) / C.scaleY, 0)),
              (f.style.width = y + "px"),
              (f.style.height = _ + "px")),
          n && N(f, e.props),
          D || !m
            ? ((g += A - t.matrix.e), (v += L - t.matrix.f))
            : M || m !== e.parent
            ? (p.renderTransform(1, p),
              (c = k(r || f, !1, !1, !0)),
              (a = u.apply({
                x: c.e,
                y: c.f,
              })),
              (g +=
                (l = u.apply({
                  x: A,
                  y: L,
                })).x - a.x),
              (v += l.y - a.y))
            : ((u.e = u.f = 0),
              (g += (l = u.apply({
                x: A - t.matrix.e,
                y: L - t.matrix.f,
              })).x),
              (v += l.y)),
          (g = tt(g, 0.02)),
          (v = tt(v, 0.02)),
          !s || s instanceof kt
            ? ((p.x = g + "px"), (p.y = v + "px"), p.renderTransform(1, p))
            : E && E.revert(),
          s &&
            ((s.x = g),
            (s.y = v),
            (s.rotation = x),
            (s.skewX = o),
            i
              ? ((s.scaleX = b), (s.scaleY = w))
              : ((s.width = y), (s.height = _))),
          s || p
        );
      },
      _t = [],
      bt = "width,height,overflowX,overflowY".split(","),
      wt = function (t, e, i) {
        if (t && t.progress() < 1 && (!t.paused() || i))
          return (
            e &&
              ((function t(e) {
                e.vars.onInterrupt &&
                  e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
                  e.getChildren(!0, !1, !0).forEach(t);
              })(t),
              e < 2 && t.progress(1),
              t.kill()),
            !0
          );
      },
      xt =
        (((nt = St.prototype).update = function (t) {
          var e = this;
          return (
            (this.elementStates = this.targets.map(function (t) {
              return new kt(t, e.props, e.simple);
            })),
            $(this),
            this.interrupt(t),
            this.recordInlineStyles(),
            this
          );
        }),
        (nt.clear = function () {
          return (
            (this.targets.length = this.elementStates.length = 0), $(this), this
          );
        }),
        (nt.fit = function (t, e, i) {
          for (
            var n,
              r,
              s = z(this.elementStates.slice(0), !1, !0),
              o = (t || this).idLookup,
              a = 0;
            a < s.length;
            a++
          )
            (n = s[a]),
              i && (n.matrix = k(n.element, !1, !1, !0)),
              (r = o[n.id]) && yt(n, r, e, !0, 0, n),
              (n.matrix = k(n.element, !1, !1, !0));
          return this;
        }),
        (nt.getProperty = function (t, e) {
          var i = this.getElementState(t) || lt;
          return (e in i ? i : i.props || lt)[e];
        }),
        (nt.add = function (t) {
          for (
            var e, i, n, r = t.targets.length, s = this.idLookup, o = this.alt;
            r--;

          )
            (n = s[(i = t.elementStates[r]).id]) &&
            (i.element === n.element ||
              (o[i.id] && o[i.id].element === i.element))
              ? ((e = this.elementStates.indexOf(
                  i.element === n.element ? n : o[i.id]
                )),
                this.targets.splice(e, 1, t.targets[r]),
                this.elementStates.splice(e, 1, i))
              : (this.targets.push(t.targets[r]), this.elementStates.push(i));
          return (
            t.interrupted && (this.interrupted = !0),
            t.simple || (this.simple = !1),
            $(this),
            this
          );
        }),
        (nt.compare = function (t) {
          function e(t, e, i) {
            return (
              (t.isVisible !== e.isVisible
                ? t.isVisible
                  ? m
                  : g
                : t.isVisible
                ? p
                : f
              ).push(i) && v.push(i)
            );
          }
          function i(t, i, n) {
            return v.indexOf(n) < 0 && e(t, i, n);
          }
          var n,
            r,
            s,
            o,
            a,
            l,
            h,
            u,
            c = t.idLookup,
            d = this.idLookup,
            f = [],
            p = [],
            m = [],
            g = [],
            v = [],
            y = t.alt,
            _ = this.alt;
          for (s in c)
            (a = y[s]),
              (l = _[s]),
              (o = (n = a ? U(t, this, s) : c[s]).element),
              (r = d[s]),
              l
                ? ((u =
                    r.isVisible || (!l.isVisible && o === r.element) ? r : l),
                  (h =
                    !a || n.isVisible || a.isVisible || u.element !== a.element
                      ? n
                      : a).isVisible &&
                  u.isVisible &&
                  h.element !== u.element
                    ? ((h.isDifferent(u) ? p : f).push(h.element, u.element),
                      v.push(h.element, u.element))
                    : e(h, u, h.element),
                  a && h.element === a.element && (a = c[s]),
                  i(h.element !== r.element && a ? a : h, r, r.element),
                  i(a && a.element === l.element ? a : h, l, l.element),
                  a && i(a, l.element === a.element ? l : r, a.element))
                : (r ? (r.isDifferent(n) ? e(n, r, o) : f.push(o)) : m.push(o),
                  a && i(a, r, a.element));
          for (s in d)
            c[s] || (g.push(d[s].element), _[s] && g.push(_[s].element));
          return {
            changed: p,
            unchanged: f,
            enter: m,
            leave: g,
          };
        }),
        (nt.recordInlineStyles = function () {
          for (
            var t = ut[this.props] || dt, e = this.elementStates.length;
            e--;

          )
            I(this.elementStates[e], t);
        }),
        (nt.interrupt = function (t) {
          var e = this,
            i = [];
          this.targets.forEach(function (n) {
            var r = n._flip,
              s = wt(r, t ? 0 : 1);
            t &&
              s &&
              i.indexOf(r) < 0 &&
              r.add(function () {
                return e.updateVisibility();
              }),
              s && i.push(r);
          }),
            !t && i.length && this.updateVisibility(),
            this.interrupted || (this.interrupted = !!i.length);
        }),
        (nt.updateVisibility = function () {
          this.elementStates.forEach(function (t) {
            var e = t.element.getBoundingClientRect();
            (t.isVisible = !!(e.width || e.height || e.top || e.left)),
              (t.uncache = 1);
          });
        }),
        (nt.getElementState = function (t) {
          return this.elementStates[this.targets.indexOf(A(t))];
        }),
        (nt.makeAbsolute = function () {
          return z(this.elementStates.slice(0), !0, !0).map(j);
        }),
        St);
    function St(t, e, i) {
      if (((this.props = e && e.props), (this.simple = !(!e || !e.simple)), i))
        (this.targets = W(t)), (this.elementStates = t), $(this);
      else {
        this.targets = G(t);
        var n = e && (!1 === e.kill || (e.batch && !e.kill));
        Z && !n && Z._kill.push(this), this.update(n || !!Z);
      }
    }
    var Et,
      kt =
        (((Et = Ct.prototype).isDifferent = function (t) {
          var e = this.bounds,
            i = t.bounds;
          return (
            e.top !== i.top ||
            e.left !== i.left ||
            e.width !== i.width ||
            e.height !== i.height ||
            !this.matrix.equals(t.matrix) ||
            this.opacity !== t.opacity ||
            (this.props &&
              t.props &&
              JSON.stringify(this.props) !== JSON.stringify(t.props))
          );
        }),
        (Et.update = function (t, e) {
          var r = this,
            s = r.element,
            a = Q.getProperty(s),
            l = Q.core.getCache(s),
            h = s.getBoundingClientRect(),
            u =
              s.getBBox &&
              "function" == typeof s.getBBox &&
              "svg" !== s.nodeName.toLowerCase() &&
              s.getBBox(),
            c = e
              ? new S(1, 0, 0, 1, h.left + n(), h.top + i())
              : k(s, !1, !1, !0);
          (r.getProp = a),
            (r.element = s),
            (r.id = (function (t) {
              var e = t.getAttribute("data-flip-id");
              return (
                e || t.setAttribute("data-flip-id", (e = "auto-" + rt++)), e
              );
            })(s)),
            (r.matrix = c),
            (r.cache = l),
            (r.bounds = h),
            (r.isVisible = !!(h.width || h.height || h.left || h.top)),
            (r.display = a("display")),
            (r.position = a("position")),
            (r.parent = s.parentNode),
            (r.x = a("x")),
            (r.y = a("y")),
            (r.scaleX = l.scaleX),
            (r.scaleY = l.scaleY),
            (r.rotation = a("rotation")),
            (r.skewX = a("skewX")),
            (r.opacity = a("opacity")),
            (r.width = u ? u.width : tt(a("width", "px"), 0.04)),
            (r.height = u ? u.height : tt(a("height", "px"), 0.04)),
            t &&
              (function (t, e) {
                for (
                  var i = Q.getProperty(t.element, null, "native"),
                    n = (t.props = {}),
                    r = e.length;
                  r--;

                )
                  n[e[r]] = (i(e[r]) + "").trim();
                n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0);
              })(r, mt[t] || O(t)),
            (r.ctm =
              s.getCTM && "svg" === s.nodeName.toLowerCase() && o(s).inverse()),
            (r.simple =
              e || (1 === P(c.a) && !P(c.b) && !P(c.c) && 1 === P(c.d))),
            (r.uncache = 0);
        }),
        Ct);
    function Ct(t, e, i) {
      (this.element = t), this.update(e, i);
    }
    var Tt,
      At =
        (((Tt = Pt.prototype).getStateById = function (t) {
          for (var e = this.states.length; e--; )
            if (this.states[e].idLookup[t]) return this.states[e];
        }),
        (Tt.kill = function () {
          this.batch.remove(this);
        }),
        Pt);
    function Pt(t, e) {
      (this.vars = t),
        (this.batch = e),
        (this.states = []),
        (this.timeline = e.timeline);
    }
    var Lt,
      Mt =
        (((Lt = Dt.prototype).add = function (t) {
          var e = this.actions.filter(function (e) {
            return e.vars === t;
          });
          return e.length
            ? e[0]
            : ((e = new At(
                "function" == typeof t
                  ? {
                      animate: t,
                    }
                  : t,
                this
              )),
              this.actions.push(e),
              e);
        }),
        (Lt.remove = function (t) {
          var e = this.actions.indexOf(t);
          return 0 <= e && this.actions.splice(e, 1), this;
        }),
        (Lt.getState = function (t) {
          var e = this,
            i = Z,
            n = J;
          return (
            (Z = this).state.clear(),
            (this._kill.length = 0),
            this.actions.forEach(function (i) {
              i.vars.getState &&
                ((i.states.length = 0), ((J = i).state = i.vars.getState(i))),
                t &&
                  i.states.forEach(function (t) {
                    return e.state.add(t);
                  });
            }),
            (J = n),
            (Z = i),
            this.killConflicts(),
            this
          );
        }),
        (Lt.animate = function () {
          var t,
            e,
            i = this,
            n = Z,
            r = this.timeline,
            s = this.actions.length;
          for (
            Z = this,
              r.clear(),
              this._abs.length = this._final.length = this._run.length = 0,
              this.actions.forEach(function (t) {
                t.vars.animate && t.vars.animate(t);
                var e,
                  i,
                  n = t.vars.onEnter,
                  r = t.vars.onLeave,
                  s = t.targets;
                s &&
                  s.length &&
                  (n || r) &&
                  ((e = new xt()),
                  t.states.forEach(function (t) {
                    return e.add(t);
                  }),
                  (i = e.compare(Ot.getState(s))).enter.length &&
                    n &&
                    n(i.enter),
                  i.leave.length && r && r(i.leave));
              }),
              B(this._abs),
              this._run.forEach(function (t) {
                return t();
              }),
              e = r.duration(),
              t = this._final.slice(0),
              r.add(function () {
                e <= r.time() &&
                  (t.forEach(function (t) {
                    return t();
                  }),
                  C(i, "onComplete"));
              }),
              Z = n;
            s--;

          )
            this.actions[s].vars.once && this.actions[s].kill();
          return C(this, "onStart"), r.restart(), this;
        }),
        (Lt.loadState = function (t) {
          t =
            t ||
            function () {
              return 0;
            };
          var e = [];
          return (
            this.actions.forEach(function (i) {
              if (i.vars.loadState) {
                var n,
                  r = function r(s) {
                    s && (i.targets = s),
                      ~(n = e.indexOf(r)) && (e.splice(n, 1), e.length || t());
                  };
                e.push(r), i.vars.loadState(r);
              }
            }),
            e.length || t(),
            this
          );
        }),
        (Lt.setState = function () {
          return (
            this.actions.forEach(function (t) {
              return (t.targets = t.vars.setState && t.vars.setState(t));
            }),
            this
          );
        }),
        (Lt.killConflicts = function (t) {
          return (
            this.state.interrupt(t),
            this._kill.forEach(function (e) {
              return e.interrupt(t);
            }),
            this
          );
        }),
        (Lt.run = function (t, e) {
          var i = this;
          return (
            this !== Z &&
              (t || this.getState(e),
              this.loadState(function () {
                i._killed || (i.setState(), i.animate());
              })),
            this
          );
        }),
        (Lt.clear = function (t) {
          this.state.clear(), t || (this.actions.length = 0);
        }),
        (Lt.getStateById = function (t) {
          for (var e, i = this.actions.length; i--; )
            if ((e = this.actions[i].getStateById(t))) return e;
          return this.state.idLookup[t] && this.state;
        }),
        (Lt.kill = function () {
          (this._killed = 1), this.clear(), delete st[this.id];
        }),
        Dt);
    function Dt(t) {
      (this.id = t),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new xt()),
        (this.timeline = Q.timeline());
    }
    var Ot =
      ((zt.getState = function (t, e) {
        var i = H(t, e);
        return (
          J && J.states.push(i),
          e && e.batch && zt.batch(e.batch).state.add(i),
          i
        );
      }),
      (zt.from = function (t, e) {
        return (
          "clearProps" in (e = e || {}) || (e.clearProps = !0),
          Y(
            t,
            H(e.targets || t.targets, {
              props: e.props || t.props,
              simple: e.simple,
              kill: !!e.kill,
            }),
            e,
            -1
          )
        );
      }),
      (zt.to = function (t, e) {
        return Y(
          t,
          H(e.targets || t.targets, {
            props: e.props || t.props,
            simple: e.simple,
            kill: !!e.kill,
          }),
          e,
          1
        );
      }),
      (zt.fromTo = function (t, e, i) {
        return Y(t, e, i);
      }),
      (zt.fit = function (t, e, i) {
        var n = i ? D(i, pt) : {},
          r = i || n,
          s = r.absolute,
          o = r.scale,
          a = r.getVars,
          l = r.props,
          h = r.runBackwards,
          u = r.onComplete,
          c = r.simple,
          d = i && i.fitChild && A(i.fitChild),
          f = vt(e, l, c, t),
          p = vt(t, 0, c, f),
          m = l ? ut[l] : dt;
        return (
          l && N(n, f.props),
          h &&
            (I(p, m),
            "immediateRender" in n || (n.immediateRender = !0),
            (n.onComplete = function () {
              q(p), u && u.apply(this, arguments);
            })),
          s && j(p, f),
          (n = yt(p, f, o || d, l, d, n.duration || a ? n : 0)),
          a ? n : n.duration ? Q.to(p.element, n) : null
        );
      }),
      (zt.makeAbsolute = function (t, e) {
        return (t instanceof xt ? t : new xt(t, e)).makeAbsolute();
      }),
      (zt.batch = function (t) {
        return st[(t = t || "default")] || (st[t] = new Mt(t));
      }),
      (zt.killFlipsOf = function (t, e) {
        (t instanceof xt ? t.targets : G(t)).forEach(function (t) {
          return t && wt(t._flip, !1 !== e ? 1 : 2);
        });
      }),
      (zt.isFlipping = function (t) {
        var e = zt.getByTarget(t);
        return !!e && e.isActive();
      }),
      (zt.getByTarget = function (t) {
        return (A(t) || lt)._flip;
      }),
      (zt.getElementState = function (t, e) {
        return new kt(A(t), e);
      }),
      (zt.convertCoordinates = function (t, e, i) {
        var n = k(e, !0, !0).multiply(k(t));
        return i ? n.apply(i) : n;
      }),
      (zt.register = function (t) {
        if ((K = "undefined" != typeof document && document.body)) {
          (Q = t), e(K), (G = Q.utils.toArray), (et = Q.core.getStyleSaver);
          var i = Q.utils.snap(0.1);
          tt = function (t, e) {
            return i(parseFloat(t) + e);
          };
        }
      }),
      zt);
    function zt() {}
    (Ot.version = "3.12.2"),
      "undefined" != typeof window &&
        window.gsap &&
        window.gsap.registerPlugin(Ot),
      (t.Flip = Ot),
      (t.default = Ot),
      "undefined" == typeof window || window !== t
        ? Object.defineProperty(t, "__esModule", {
            value: !0,
          })
        : delete t.default;
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t || self).MouseFollower = e());
  })(this, function () {
    var t = (function () {
      function t(e) {
        void 0 === e && (e = {}),
          (this.options = Object.assign(
            {},
            {
              el: null,
              container: document.body,
              className: "mf-cursor",
              innerClassName: "mf-cursor-inner",
              textClassName: "mf-cursor-text",
              mediaClassName: "mf-cursor-media",
              mediaBoxClassName: "mf-cursor-media-box",
              iconSvgClassName: "mf-svgsprite",
              iconSvgNamePrefix: "-",
              iconSvgSrc: "",
              dataAttr: "cursor",
              hiddenState: "-hidden",
              textState: "-text",
              iconState: "-icon",
              activeState: "-active",
              mediaState: "-media",
              stateDetection: {
                "-pointer": "a,button",
              },
              visible: !0,
              visibleOnState: !1,
              speed: 0.55,
              ease: "expo.out",
              overwrite: !0,
              skewing: 0,
              skewingText: 2,
              skewingIcon: 2,
              skewingMedia: 2,
              skewingDelta: 0.001,
              skewingDeltaMax: 0.15,
              stickDelta: 0.15,
              showTimeout: 0,
              hideOnLeave: !0,
              hideTimeout: 300,
              hideMediaTimeout: 300,
              initialPos: [-window.innerWidth, -window.innerHeight],
            },
            e
          )),
          this.options.visible &&
            null == e.stateDetection &&
            (this.options.stateDetection["-hidden"] = "iframe"),
          (this.gsap = t.gsap || window.gsap),
          (this.el =
            "string" == typeof this.options.el
              ? document.querySelector(this.options.el)
              : this.options.el),
          (this.container =
            "string" == typeof this.options.container
              ? document.querySelector(this.options.container)
              : this.options.container),
          (this.skewing = this.options.skewing),
          (this.pos = {
            x: this.options.initialPos[0],
            y: this.options.initialPos[1],
          }),
          (this.vel = {
            x: 0,
            y: 0,
          }),
          (this.event = {}),
          (this.events = []),
          this.init();
      }
      t.registerGSAP = function (e) {
        t.gsap = e;
      };
      var e = t.prototype;
      return (
        (e.init = function () {
          this.el || this.create(),
            this.createSetter(),
            this.bind(),
            this.render(!0),
            (this.ticker = this.render.bind(this, !1)),
            this.gsap.ticker.add(this.ticker);
        }),
        (e.create = function () {
          (this.el = document.createElement("div")),
            (this.el.className = this.options.className),
            this.el.classList.add(this.options.hiddenState),
            (this.inner = document.createElement("div")),
            (this.inner.className = this.options.innerClassName),
            (this.text = document.createElement("div")),
            (this.text.className = this.options.textClassName),
            (this.media = document.createElement("div")),
            (this.media.className = this.options.mediaClassName),
            (this.mediaBox = document.createElement("div")),
            (this.mediaBox.className = this.options.mediaBoxClassName),
            this.media.appendChild(this.mediaBox),
            this.inner.appendChild(this.media),
            this.inner.appendChild(this.text),
            this.el.appendChild(this.inner),
            this.container.appendChild(this.el);
        }),
        (e.createSetter = function () {
          this.setter = {
            x: this.gsap.quickSetter(this.el, "x", "px"),
            y: this.gsap.quickSetter(this.el, "y", "px"),
            rotation: this.gsap.quickSetter(this.el, "rotation", "deg"),
            scaleX: this.gsap.quickSetter(this.el, "scaleX"),
            scaleY: this.gsap.quickSetter(this.el, "scaleY"),
            wc: this.gsap.quickSetter(this.el, "willChange"),
            inner: {
              rotation: this.gsap.quickSetter(this.inner, "rotation", "deg"),
            },
          };
        }),
        (e.bind = function () {
          var t = this;
          (this.event.mouseleave = function () {
            return t.hide();
          }),
            (this.event.mouseenter = function () {
              return t.show();
            }),
            (this.event.mousedown = function () {
              return t.addState(t.options.activeState);
            }),
            (this.event.mouseup = function () {
              return t.removeState(t.options.activeState);
            }),
            (this.event.mousemoveOnce = function () {
              return t.show();
            }),
            (this.event.mousemove = function (e) {
              t.gsap.to(t.pos, {
                x: t.stick
                  ? t.stick.x - (t.stick.x - e.clientX) * t.options.stickDelta
                  : e.clientX,
                y: t.stick
                  ? t.stick.y - (t.stick.y - e.clientY) * t.options.stickDelta
                  : e.clientY,
                overwrite: t.options.overwrite,
                ease: t.options.ease,
                duration: t.visible ? t.options.speed : 0,
                onUpdate: function () {
                  return (t.vel = {
                    x: e.clientX - t.pos.x,
                    y: e.clientY - t.pos.y,
                  });
                },
              });
            }),
            (this.event.mouseover = function (e) {
              for (
                var i = e.target;
                i &&
                i !== t.container &&
                (!e.relatedTarget || !i.contains(e.relatedTarget));
                i = i.parentNode
              ) {
                for (var n in t.options.stateDetection)
                  i.matches(t.options.stateDetection[n]) && t.addState(n);
                if (t.options.dataAttr) {
                  var r = t.getFromDataset(i);
                  r.state && t.addState(r.state),
                    r.text && t.setText(r.text),
                    r.icon && t.setIcon(r.icon),
                    r.img && t.setImg(r.img),
                    r.video && t.setVideo(r.video),
                    void 0 !== r.show && t.show(),
                    void 0 !== r.stick && t.setStick(r.stick || i);
                }
              }
            }),
            (this.event.mouseout = function (e) {
              for (
                var i = e.target;
                i &&
                i !== t.container &&
                (!e.relatedTarget || !i.contains(e.relatedTarget));
                i = i.parentNode
              ) {
                for (var n in t.options.stateDetection)
                  i.matches(t.options.stateDetection[n]) && t.removeState(n);
                if (t.options.dataAttr) {
                  var r = t.getFromDataset(i);
                  r.state && t.removeState(r.state),
                    r.text && t.removeText(),
                    r.icon && t.removeIcon(),
                    r.img && t.removeImg(),
                    r.video && t.removeVideo(),
                    void 0 !== r.show && t.hide(),
                    void 0 !== r.stick && t.removeStick();
                }
              }
            }),
            this.options.hideOnLeave &&
              this.container.addEventListener(
                "mouseleave",
                this.event.mouseleave,
                {
                  passive: !0,
                }
              ),
            this.options.visible &&
              this.container.addEventListener(
                "mouseenter",
                this.event.mouseenter,
                {
                  passive: !0,
                }
              ),
            this.options.activeState &&
              (this.container.addEventListener(
                "mousedown",
                this.event.mousedown,
                {
                  passive: !0,
                }
              ),
              this.container.addEventListener("mouseup", this.event.mouseup, {
                passive: !0,
              })),
            this.container.addEventListener("mousemove", this.event.mousemove, {
              passive: !0,
            }),
            this.options.visible &&
              this.container.addEventListener(
                "mousemove",
                this.event.mousemoveOnce,
                {
                  passive: !0,
                  once: !0,
                }
              ),
            (this.options.stateDetection || this.options.dataAttr) &&
              (this.container.addEventListener(
                "mouseover",
                this.event.mouseover,
                {
                  passive: !0,
                }
              ),
              this.container.addEventListener("mouseout", this.event.mouseout, {
                passive: !0,
              }));
        }),
        (e.render = function (t) {
          if (!0 === t || (0 !== this.vel.y && 0 !== this.vel.x)) {
            if (
              (this.trigger("render"),
              this.setter.wc("transform"),
              this.setter.x(this.pos.x),
              this.setter.y(this.pos.y),
              this.skewing)
            ) {
              var e = Math.sqrt(
                  Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2)
                ),
                i =
                  Math.min(
                    e * this.options.skewingDelta,
                    this.options.skewingDeltaMax
                  ) * this.skewing,
                n = (180 * Math.atan2(this.vel.y, this.vel.x)) / Math.PI;
              this.setter.rotation(n),
                this.setter.scaleX(1 + i),
                this.setter.scaleY(1 - i),
                this.setter.inner.rotation(-n);
            }
          } else this.setter.wc("auto");
        }),
        (e.show = function () {
          var t = this;
          this.trigger("show"),
            clearInterval(this.visibleInt),
            (this.visibleInt = setTimeout(function () {
              t.el.classList.remove(t.options.hiddenState),
                (t.visible = !0),
                t.render(!0);
            }, this.options.showTimeout));
        }),
        (e.hide = function () {
          var t = this;
          this.trigger("hide"),
            clearInterval(this.visibleInt),
            this.el.classList.add(this.options.hiddenState),
            (this.visibleInt = setTimeout(function () {
              return (t.visible = !1);
            }, this.options.hideTimeout));
        }),
        (e.toggle = function (t) {
          !0 === t || (!1 !== t && !this.visible) ? this.show() : this.hide();
        }),
        (e.addState = function (t) {
          var e;
          if ((this.trigger("addState", t), t === this.options.hiddenState))
            return this.hide();
          (e = this.el.classList).add.apply(e, t.split(" ")),
            this.options.visibleOnState && this.show();
        }),
        (e.removeState = function (t) {
          var e;
          if ((this.trigger("removeState", t), t === this.options.hiddenState))
            return this.show();
          (e = this.el.classList).remove.apply(e, t.split(" ")),
            this.options.visibleOnState &&
              this.el.className === this.options.className &&
              this.hide();
        }),
        (e.toggleState = function (t, e) {
          !0 === e || (!1 !== e && !this.el.classList.contains(t))
            ? this.addState(t)
            : this.removeState(t);
        }),
        (e.setSkewing = function (t) {
          this.gsap.to(this, {
            skewing: t,
          });
        }),
        (e.removeSkewing = function () {
          this.gsap.to(this, {
            skewing: this.options.skewing,
          });
        }),
        (e.setStick = function (t) {
          var e = (
            "string" == typeof t ? document.querySelector(t) : t
          ).getBoundingClientRect();
          this.stick = {
            y: e.top + e.height / 2,
            x: e.left + e.width / 2,
          };
        }),
        (e.removeStick = function () {
          this.stick = !1;
        }),
        (e.setText = function (t) {
          (this.text.innerHTML = t),
            this.addState(this.options.textState),
            this.setSkewing(this.options.skewingText);
        }),
        (e.removeText = function () {
          this.removeState(this.options.textState), this.removeSkewing();
        }),
        (e.setIcon = function (t, e) {
          void 0 === e && (e = ""),
            (this.text.innerHTML =
              "<svg class='" +
              this.options.iconSvgClassName +
              " " +
              this.options.iconSvgNamePrefix +
              t +
              "' style='" +
              e +
              "'><use xlink:href='" +
              this.options.iconSvgSrc +
              "#" +
              t +
              "'></use></svg>"),
            this.addState(this.options.iconState),
            this.setSkewing(this.options.skewingIcon);
        }),
        (e.removeIcon = function () {
          this.removeState(this.options.iconState), this.removeSkewing();
        }),
        (e.setMedia = function (t) {
          var e = this;
          clearTimeout(this.mediaInt),
            t && ((this.mediaBox.innerHTML = ""), this.mediaBox.appendChild(t)),
            (this.mediaInt = setTimeout(function () {
              return e.addState(e.options.mediaState);
            }, 20)),
            this.setSkewing(this.options.skewingMedia);
        }),
        (e.removeMedia = function () {
          var t = this;
          clearTimeout(this.mediaInt),
            this.removeState(this.options.mediaState),
            (this.mediaInt = setTimeout(function () {
              return (t.mediaBox.innerHTML = "");
            }, this.options.hideMediaTimeout)),
            this.removeSkewing();
        }),
        (e.setImg = function (t) {
          this.mediaImg || (this.mediaImg = new Image()),
            this.mediaImg.src !== t && (this.mediaImg.src = t),
            this.setMedia(this.mediaImg);
        }),
        (e.removeImg = function () {
          this.removeMedia();
        }),
        (e.setVideo = function (t) {
          this.mediaVideo ||
            ((this.mediaVideo = document.createElement("video")),
            (this.mediaVideo.muted = !0),
            (this.mediaVideo.loop = !0),
            (this.mediaVideo.autoplay = !0)),
            this.mediaVideo.src !== t &&
              ((this.mediaVideo.src = t), this.mediaVideo.load()),
            this.mediaVideo.play(),
            this.setMedia(this.mediaVideo);
        }),
        (e.removeVideo = function () {
          this.mediaVideo &&
            this.mediaVideo.readyState > 2 &&
            this.mediaVideo.pause(),
            this.removeMedia();
        }),
        (e.on = function (t, e) {
          this.events[t] instanceof Array || this.off(t),
            this.events[t].push(e);
        }),
        (e.off = function (t, e) {
          this.events[t] = e
            ? this.events[t].filter(function (t) {
                return t !== e;
              })
            : [];
        }),
        (e.trigger = function (t) {
          var e = arguments,
            i = this;
          this.events[t] &&
            this.events[t].forEach(function (t) {
              return t.call.apply(t, [i, i].concat([].slice.call(e, 1)));
            });
        }),
        (e.getFromDataset = function (t) {
          var e = t.dataset;
          return {
            state: e[this.options.dataAttr],
            show: e[this.options.dataAttr + "Show"],
            text: e[this.options.dataAttr + "Text"],
            icon: e[this.options.dataAttr + "Icon"],
            img: e[this.options.dataAttr + "Img"],
            video: e[this.options.dataAttr + "Video"],
            stick: e[this.options.dataAttr + "Stick"],
          };
        }),
        (e.destroy = function () {
          this.trigger("destroy"),
            this.gsap.ticker.remove(this.ticker),
            this.container.removeEventListener(
              "mouseleave",
              this.event.mouseleave
            ),
            this.container.removeEventListener(
              "mouseenter",
              this.event.mouseenter
            ),
            this.container.removeEventListener(
              "mousedown",
              this.event.mousedown
            ),
            this.container.removeEventListener("mouseup", this.event.mouseup),
            this.container.removeEventListener(
              "mousemove",
              this.event.mousemove
            ),
            this.container.removeEventListener(
              "mousemove",
              this.event.mousemoveOnce
            ),
            this.container.removeEventListener(
              "mouseover",
              this.event.mouseover
            ),
            this.container.removeEventListener("mouseout", this.event.mouseout),
            this.el &&
              (this.container.removeChild(this.el),
              (this.el = null),
              (this.mediaImg = null),
              (this.mediaVideo = null));
        }),
        t
      );
    })();
    return t;
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).SplitType =
          e());
  })(this, function () {
    "use strict";
    function t(t, e) {
      return Object.getOwnPropertyNames(Object(t)).reduce((i, n) => {
        const r = Object.getOwnPropertyDescriptor(Object(t), n),
          s = Object.getOwnPropertyDescriptor(Object(e), n);
        return Object.defineProperty(i, n, s || r);
      }, {});
    }
    function e(t) {
      return "string" == typeof t;
    }
    function i(t) {
      return Array.isArray(t);
    }
    function n(n = {}) {
      const r = t(n);
      let s;
      return (
        void 0 !== r.types
          ? (s = r.types)
          : void 0 !== r.split && (s = r.split),
        void 0 !== s &&
          (r.types = (e(s) || i(s) ? String(s) : "")
            .split(",")
            .map((t) => String(t).trim())
            .filter((t) => /((line)|(word)|(char))/i.test(t))),
        (r.absolute || r.position) &&
          (r.absolute = r.absolute || /absolute/.test(n.position)),
        r
      );
    }
    function r(t) {
      const n = e(t) || i(t) ? String(t) : "";
      return {
        none: !n,
        lines: /line/i.test(n),
        words: /word/i.test(n),
        chars: /char/i.test(n),
      };
    }
    function s(t) {
      return null !== t && "object" == typeof t;
    }
    function o(t) {
      return s(t) && /^(1|3|11)$/.test(t.nodeType);
    }
    function a(t) {
      return i(t)
        ? t
        : null == t
        ? []
        : (function (t) {
            return (
              s(t) &&
              (function (t) {
                return "number" == typeof t && t > -1 && t % 1 == 0;
              })(t.length)
            );
          })(t)
        ? Array.prototype.slice.call(t)
        : [t];
    }
    function l(t) {
      let i = t;
      return (
        e(t) &&
          (i = /^(#[a-z]\w+)$/.test(t.trim())
            ? document.getElementById(t.trim().slice(1))
            : document.querySelectorAll(t)),
        a(i).reduce((t, e) => [...t, ...a(e).filter(o)], [])
      );
    }
    (() => {
      function t(...t) {
        const e = t.length;
        for (let i = 0; i < e; i++) {
          const e = t[i];
          1 === e.nodeType || 11 === e.nodeType
            ? this.appendChild(e)
            : this.appendChild(document.createTextNode(String(e)));
        }
      }
      function e(...t) {
        for (; this.lastChild; ) this.removeChild(this.lastChild);
        t.length && this.append(...t);
      }
      function i(...t) {
        const e = this.parentNode;
        let i = t.length;
        if (e)
          for (i || e.removeChild(this); i--; ) {
            let n = t[i];
            "object" != typeof n
              ? (n = this.ownerDocument.createTextNode(n))
              : n.parentNode && n.parentNode.removeChild(n),
              i
                ? e.insertBefore(this.previousSibling, n)
                : e.replaceChild(n, this);
          }
      }
      "undefined" != typeof Element &&
        (Element.prototype.append ||
          ((Element.prototype.append = t),
          (DocumentFragment.prototype.append = t)),
        Element.prototype.replaceChildren ||
          ((Element.prototype.replaceChildren = e),
          (DocumentFragment.prototype.replaceChildren = e)),
        Element.prototype.replaceWith ||
          ((Element.prototype.replaceWith = i),
          (DocumentFragment.prototype.replaceWith = i)));
    })();
    const { entries: h, keys: u, values: c } = Object,
      d = "_splittype",
      f = {};
    let p = 0;
    function m(t, e, i) {
      if (!s(t)) return console.warn("[data.set] owner is not an object"), null;
      const n = t[d] || (t[d] = ++p),
        r = f[n] || (f[n] = {});
      return (
        void 0 === i
          ? e &&
            Object.getPrototypeOf(e) === Object.prototype &&
            (f[n] = {
              ...r,
              ...e,
            })
          : void 0 !== e && (r[e] = i),
        i
      );
    }
    function g(t, e) {
      const i = s(t) ? t[d] : null,
        n = (i && f[i]) || {};
      return void 0 === e ? n : n[e];
    }
    function v(t) {
      const e = t && t[d];
      e && (delete t[e], delete f[e]);
    }
    const y = "\\u0300-\\u036f\\ufe20-\\ufe23",
      _ = `[${y}\\u20d0-\\u20f0]`,
      b = "\\ud83c[\\udffb-\\udfff]",
      w = "[^\\ud800-\\udfff]",
      x = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      S = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      E = `(?:${_}|${b})?`,
      k = "[\\ufe0e\\ufe0f]?",
      C = k + E + "(?:\\u200d(?:" + [w, x, S].join("|") + ")" + k + E + ")*",
      T = `(?:${[`${w}${_}?`, _, x, S, "[\\ud800-\\udfff]"].join("|")}\n)`,
      A = RegExp(`${b}(?=${b})|${T}${C}`, "g"),
      P = RegExp(
        `[${[
          "\\u200d",
          "\\ud800-\\udfff",
          y,
          "\\u20d0-\\u20f0",
          "\\ufe0e\\ufe0f",
        ].join("")}]`
      );
    function L(t) {
      return P.test(t);
    }
    function M(t, i = "") {
      var n;
      return (t = null == (n = t) ? "" : String(n)) && e(t) && !i && L(t)
        ? (function (t) {
            return L(t)
              ? (function (t) {
                  return t.match(A) || [];
                })(t)
              : (function (t) {
                  return t.split("");
                })(t);
          })(t)
        : t.split(i);
    }
    function D(t, i) {
      const n = document.createElement(t);
      return i
        ? (Object.keys(i).forEach((t) => {
            const r = i[t],
              s = e(r) ? r.trim() : r;
            null !== s &&
              "" !== s &&
              ("children" === t ? n.append(...a(s)) : n.setAttribute(t, s));
          }),
          n)
        : n;
    }
    var O = {
      splitClass: "",
      lineClass: "line",
      wordClass: "word",
      charClass: "char",
      types: ["lines", "words", "chars"],
      absolute: !1,
      tagName: "div",
    };
    function z(e, i) {
      const n = r((i = t(O, i)).types),
        s = i.tagName,
        o = e.nodeValue,
        a = document.createDocumentFragment();
      let l = [],
        h = [];
      return (
        /^\s/.test(o) && a.append(" "),
        (l = (function (t, e = " ") {
          return (t ? String(t) : "").trim().replace(/\s+/g, " ").split(e);
        })(o).reduce((t, e, r, o) => {
          let l, u;
          return (
            n.chars &&
              (u = M(e).map((t) => {
                const e = D(s, {
                  class: `${i.splitClass} ${i.charClass}`,
                  style: "display: inline-block;",
                  children: t,
                });
                return m(e, "isChar", !0), (h = [...h, e]), e;
              })),
            n.words || n.lines
              ? ((l = D(s, {
                  class: `${i.wordClass} ${i.splitClass}`,
                  style:
                    "display: inline-block; " +
                    (n.words && i.absolute ? "position: relative;" : ""),
                  children: n.chars ? u : e,
                })),
                m(l, {
                  isWord: !0,
                  isWordStart: !0,
                  isWordEnd: !0,
                }),
                a.appendChild(l))
              : u.forEach((t) => {
                  a.appendChild(t);
                }),
            r < o.length - 1 && a.append(" "),
            n.words ? t.concat(l) : t
          );
        }, [])),
        /\s$/.test(o) && a.append(" "),
        e.replaceWith(a),
        {
          words: l,
          chars: h,
        }
      );
    }
    function I(t, e) {
      const i = t.nodeType,
        n = {
          words: [],
          chars: [],
        };
      if (!/(1|3|11)/.test(i)) return n;
      if (3 === i && /\S/.test(t.nodeValue)) return z(t, e);
      const r = a(t.childNodes);
      if (r.length && (m(t, "isSplit", !0), !g(t).isRoot)) {
        (t.style.display = "inline-block"), (t.style.position = "relative");
        const e = t.nextSibling,
          i = t.previousSibling,
          n = t.textContent || "",
          r = e ? e.textContent : " ",
          s = i ? i.textContent : " ";
        m(t, {
          isWordEnd: /\s$/.test(n) || /^\s/.test(r),
          isWordStart: /^\s/.test(n) || /\s$/.test(s),
        });
      }
      return r.reduce((t, i) => {
        const { words: n, chars: r } = I(i, e);
        return {
          words: [...t.words, ...n],
          chars: [...t.chars, ...r],
        };
      }, n);
    }
    function q(t) {
      g(t).isWord
        ? (v(t), t.replaceWith(...t.childNodes))
        : a(t.children).forEach((t) => q(t));
    }
    let R = t(O, {});
    class j {
      static get data() {
        return f;
      }
      static get defaults() {
        return R;
      }
      static set defaults(e) {
        R = t(R, n(e));
      }
      static setDefaults(e) {
        return (R = t(R, n(e))), O;
      }
      static revert(t) {
        l(t).forEach((t) => {
          const { isSplit: e, html: i, cssWidth: n, cssHeight: r } = g(t);
          e &&
            ((t.innerHTML = i),
            (t.style.width = n || ""),
            (t.style.height = r || ""),
            v(t));
        });
      }
      static create(t, e) {
        return new j(t, e);
      }
      constructor(e, i) {
        (this.isSplit = !1),
          (this.settings = t(R, n(i))),
          (this.elements = l(e)),
          this.split();
      }
      split(e) {
        this.revert(),
          this.elements.forEach((t) => {
            m(t, "html", t.innerHTML);
          }),
          (this.lines = []),
          (this.words = []),
          (this.chars = []);
        const i = [window.pageXOffset, window.pageYOffset];
        void 0 !== e && (this.settings = t(this.settings, n(e)));
        const s = r(this.settings.types);
        s.none ||
          (this.elements.forEach((t) => {
            m(t, "isRoot", !0);
            const { words: e, chars: i } = I(t, this.settings);
            (this.words = [...this.words, ...e]),
              (this.chars = [...this.chars, ...i]);
          }),
          this.elements.forEach((t) => {
            if (s.lines || this.settings.absolute) {
              const e = (function (t, e, i) {
                const n = r(e.types),
                  s = e.tagName,
                  o = t.getElementsByTagName("*"),
                  l = [];
                let h,
                  u,
                  c,
                  d = [],
                  f = null,
                  p = [];
                const v = t.parentElement,
                  y = t.nextElementSibling,
                  _ = document.createDocumentFragment(),
                  b = window.getComputedStyle(t),
                  w = b.textAlign,
                  x = 0.2 * parseFloat(b.fontSize);
                return (
                  e.absolute &&
                    ((c = {
                      left: t.offsetLeft,
                      top: t.offsetTop,
                      width: t.offsetWidth,
                    }),
                    (u = t.offsetWidth),
                    (h = t.offsetHeight),
                    m(t, {
                      cssWidth: t.style.width,
                      cssHeight: t.style.height,
                    })),
                  a(o).forEach((r) => {
                    const s = r.parentElement === t,
                      {
                        width: o,
                        height: a,
                        top: h,
                        left: u,
                      } = (function (t, e, i, n) {
                        if (!i.absolute)
                          return {
                            top: e ? t.offsetTop : null,
                          };
                        const r = t.offsetParent,
                          [s, o] = n;
                        let a = 0,
                          l = 0;
                        if (r && r !== document.body) {
                          const t = r.getBoundingClientRect();
                          (a = t.x + s), (l = t.y + o);
                        }
                        const {
                          width: h,
                          height: u,
                          x: c,
                          y: d,
                        } = t.getBoundingClientRect();
                        return {
                          width: h,
                          height: u,
                          top: d + o - l,
                          left: c + s - a,
                        };
                      })(r, s, e, i);
                    /^br$/i.test(r.nodeName) ||
                      (n.lines &&
                        s &&
                        ((null === f || h - f >= x) &&
                          ((f = h), l.push((d = []))),
                        d.push(r)),
                      e.absolute &&
                        m(r, {
                          top: h,
                          left: u,
                          width: o,
                          height: a,
                        }));
                  }),
                  v && v.removeChild(t),
                  n.lines &&
                    ((p = l.map((t) => {
                      const i = D(s, {
                        class: `${e.splitClass} ${e.lineClass}`,
                        style: `display: block; text-align: ${w}; width: 100%;`,
                      });
                      m(i, "isLine", !0);
                      const n = {
                        height: 0,
                        top: 1e4,
                      };
                      return (
                        _.appendChild(i),
                        t.forEach((t, e, r) => {
                          const { isWordEnd: s, top: o, height: a } = g(t),
                            l = r[e + 1];
                          (n.height = Math.max(n.height, a)),
                            (n.top = Math.min(n.top, o)),
                            i.appendChild(t),
                            s && g(l).isWordStart && i.append(" ");
                        }),
                        e.absolute &&
                          m(i, {
                            height: n.height,
                            top: n.top,
                          }),
                        i
                      );
                    })),
                    n.words || q(_),
                    t.replaceChildren(_)),
                  e.absolute &&
                    ((t.style.width = (t.style.width || u) + "px"),
                    (t.style.height = h + "px"),
                    a(o).forEach((t) => {
                      const {
                          isLine: e,
                          top: i,
                          left: n,
                          width: r,
                          height: s,
                        } = g(t),
                        o = g(t.parentElement),
                        a = !e && o.isLine;
                      (t.style.top = (a ? i - o.top : i) + "px"),
                        (t.style.left = e
                          ? c.left + "px"
                          : n - (a ? c.left : 0) + "px"),
                        (t.style.height = s + "px"),
                        (t.style.width = e ? c.width + "px" : r + "px"),
                        (t.style.position = "absolute");
                    })),
                  v && (y ? v.insertBefore(t, y) : v.appendChild(t)),
                  p
                );
              })(t, this.settings, i);
              this.lines = [...this.lines, ...e];
            }
          }),
          (this.isSplit = !0),
          window.scrollTo(i[0], i[1]),
          h(f).forEach(([t, { isRoot: e, isSplit: i }]) => {
            (e && i) || ((f[t] = null), delete f[t]);
          }));
      }
      revert() {
        this.isSplit &&
          ((this.lines = null),
          (this.words = null),
          (this.chars = null),
          (this.isSplit = !1)),
          j.revert(this.elements);
      }
    }
    return j;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
    var i = Array.prototype.slice,
      n = t.console,
      r =
        void 0 === n
          ? function () {}
          : function (t) {
              n.error(t);
            };
    function s(n, s, a) {
      (a = a || e || t.jQuery) &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[n] = function (t) {
          return "string" == typeof t
            ? (function (t, e, i) {
                var s,
                  o = "$()." + n + '("' + e + '")';
                return (
                  t.each(function (t, l) {
                    var h = a.data(l, n);
                    if (h) {
                      var u = h[e];
                      if (u && "_" != e.charAt(0)) {
                        var c = u.apply(h, i);
                        s = void 0 === s ? c : s;
                      } else r(o + " is not a valid method");
                    } else r(n + " not initialized. Cannot call methods, i.e. " + o);
                  }),
                  void 0 !== s ? s : t
                );
              })(this, t, i.call(arguments, 1))
            : ((function (t, e) {
                t.each(function (t, i) {
                  var r = a.data(i, n);
                  r
                    ? (r.option(e), r._init())
                    : ((r = new s(i, e)), a.data(i, n, r));
                });
              })(this, t),
              this);
        }),
        o(a));
    }
    function o(t) {
      !t || (t && t.bridget) || (t.bridget = s);
    }
    return o(e || t.jQuery), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], r = 0;
            r < i.length;
            r++
          ) {
            var s = i[r];
            n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var e =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      i = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      n = i.length;
    function r(t) {
      var i = getComputedStyle(t);
      return (
        i ||
          e(
            "Style returned " +
              i +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        i
      );
    }
    var s,
      o = !1;
    function a() {
      if (!o) {
        o = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = r(e);
        (s = 200 == Math.round(t(n.width))),
          (l.isBoxSizeOuter = s),
          i.removeChild(e);
      }
    }
    function l(e) {
      if (
        (a(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var o = r(e);
        if ("none" == o.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < n;
              e++
            )
              t[i[e]] = 0;
            return t;
          })();
        var l = {};
        (l.width = e.offsetWidth), (l.height = e.offsetHeight);
        for (
          var h = (l.isBorderBox = "border-box" == o.boxSizing), u = 0;
          u < n;
          u++
        ) {
          var c = i[u],
            d = o[c],
            f = parseFloat(d);
          l[c] = isNaN(f) ? 0 : f;
        }
        var p = l.paddingLeft + l.paddingRight,
          m = l.paddingTop + l.paddingBottom,
          g = l.marginLeft + l.marginRight,
          v = l.marginTop + l.marginBottom,
          y = l.borderLeftWidth + l.borderRightWidth,
          _ = l.borderTopWidth + l.borderBottomWidth,
          b = h && s,
          w = t(o.width);
        !1 !== w && (l.width = w + (b ? 0 : p + y));
        var x = t(o.height);
        return (
          !1 !== x && (l.height = x + (b ? 0 : m + _)),
          (l.innerWidth = l.width - (p + y)),
          (l.innerHeight = l.height - (m + _)),
          (l.outerWidth = l.width + g),
          (l.outerHeight = l.height + v),
          l
        );
      }
    }
    return l;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      n = Array.prototype.slice;
    (i.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? n.call(t)
        : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var r = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (n) {
                e(t, n) && r.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)
                  r.push(i[s]);
              } else r.push(t);
          }),
          r
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
          r = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[r];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[r] = setTimeout(function () {
            n.apply(s, e), delete s[r];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var r = t.console;
    return (
      (i.htmlInit = function (e, n) {
        i.docReady(function () {
          var s = i.toDashed(n),
            o = "data-" + s,
            a = document.querySelectorAll("[" + o + "]"),
            l = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(l)),
            u = o + "-options",
            c = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(o) || t.getAttribute(u);
            try {
              i = s && JSON.parse(s);
            } catch (s) {
              return void (
                r &&
                r.error("Error parsing " + o + " on " + t.className + ": " + s)
              );
            }
            var a = new e(t, i);
            c && c.data(t, n, a);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("get-size")))
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t, t.getSize)));
  })(window, function (t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function () {
        (this.element.style.position = "absolute"),
          this.element.setAttribute("aria-hidden", "true"),
          (this.x = 0),
          (this.shift = 0),
          (this.element.style[this.parent.originSide] = 0);
      }),
      (n.destroy = function () {
        this.unselect(), (this.element.style.position = "");
        var t = this.parent.originSide;
        (this.element.style[t] = ""),
          (this.element.style.transform = ""),
          this.element.removeAttribute("aria-hidden");
      }),
      (n.getSize = function () {
        this.size = e(this.element);
      }),
      (n.setPosition = function (t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget =
        function () {
          var t =
            "left" == this.parent.originSide ? "marginLeft" : "marginRight";
          this.target =
            this.x + this.size[t] + this.size.width * this.parent.cellAlign;
        }),
      (n.renderPosition = function (t) {
        var e = "left" === this.parent.originSide ? 1 : -1,
          i = this.parent.options.percentPosition
            ? t * e * (this.parent.size.innerWidth / this.size.width)
            : t * e;
        this.element.style.transform =
          "translateX(" + this.parent.getPositionValue(i) + ")";
      }),
      (n.select = function () {
        this.element.classList.add("is-selected"),
          this.element.removeAttribute("aria-hidden");
      }),
      (n.unselect = function () {
        this.element.classList.remove("is-selected"),
          this.element.setAttribute("aria-hidden", "true");
      }),
      (n.wrapShift = function (t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/slide", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function () {
    "use strict";
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = "left" == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function (t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x;
          var e = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.cells.forEach(function (t) {
          t.select();
        });
      }),
      (e.unselect = function () {
        this.cells.forEach(function (t) {
          t.unselect();
        });
      }),
      (e.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("fizzy-ui-utils")))
      : ((t.Flickity = t.Flickity || {}),
        (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)));
  })(window, function (t, e) {
    var i = {
      startAnimation: function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      },
      animate: function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this;
          requestAnimationFrame(function () {
            e.animate();
          });
        }
      },
      positionSlider: function () {
        var t = this.x;
        this.options.wrapAround &&
          this.cells.length > 1 &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          this.setTranslateX(t, this.isAnimating),
          this.dispatchScrollEvent();
      },
      setTranslateX: function (t, e) {
        (t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style.transform = e
          ? "translate3d(" + i + ",0,0)"
          : "translateX(" + i + ")";
      },
      dispatchScrollEvent: function () {
        var t = this.slides[0];
        if (t) {
          var e = -this.x - t.target,
            i = e / this.slidesWidth;
          this.dispatchEvent("scroll", null, [i, e]);
        }
      },
      positionSliderAtSelected: function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      },
      getPositionValue: function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
          : Math.round(t) + "px";
      },
      settle: function (t) {
        !this.isPointerDown &&
          Math.round(100 * this.x) == Math.round(100 * t) &&
          this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]));
      },
      shiftWrapCells: function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      },
      _shiftCells: function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            s = e > 0 ? i : 0;
          r.wrapShift(s), (e -= r.size.outerWidth);
        }
      },
      _unshiftCells: function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      },
      integratePhysics: function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      },
      applyForce: function (t) {
        this.velocity += t;
      },
      getFrictionFactor: function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      },
      getRestingPosition: function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      },
      applyDragForce: function () {
        if (this.isDraggable && this.isPointerDown) {
          var t = this.dragX - this.x - this.velocity;
          this.applyForce(t);
        }
      },
      applySelectedAttraction: function () {
        if (
          !(this.isDraggable && this.isPointerDown) &&
          !this.isFreeScrolling &&
          this.slides.length
        ) {
          var t =
            (-1 * this.selectedSlide.target - this.x) *
            this.options.selectedAttraction;
          this.applyForce(t);
        }
      },
    };
    return i;
  }),
  (function (t, e) {
    if ("function" == typeof define && define.amd)
      define("flickity/js/flickity", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate",
      ], function (i, n, r, s, o, a) {
        return e(t, i, n, r, s, o, a);
      });
    else if ("object" == typeof module && module.exports)
      module.exports = e(
        t,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./slide"),
        require("./animate")
      );
    else {
      var i = t.Flickity;
      t.Flickity = e(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        i.Cell,
        i.Slide,
        i.animatePrototype
      );
    }
  })(window, function (t, e, i, n, r, s, o) {
    var a = t.jQuery,
      l = t.getComputedStyle,
      h = t.console;
    function u(t, e) {
      for (t = n.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    var c = 0,
      d = {};
    function f(t, e) {
      var i = n.getQueryElement(t);
      if (i) {
        if (((this.element = i), this.element.flickityGUID)) {
          var r = d[this.element.flickityGUID];
          return r && r.option(e), r;
        }
        a && (this.$element = a(this.element)),
          (this.options = n.extend({}, this.constructor.defaults)),
          this.option(e),
          this._create();
      } else h && h.error("Bad element for Flickity: " + (i || t));
    }
    (f.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
    }),
      (f.createMethods = []);
    var p = f.prototype;
    n.extend(p, e.prototype),
      (p._create = function () {
        var e = (this.guid = ++c);
        for (var i in ((this.element.flickityGUID = e),
        (d[e] = this),
        (this.selectedIndex = 0),
        (this.restingFrames = 0),
        (this.x = 0),
        (this.velocity = 0),
        (this.originSide = this.options.rightToLeft ? "right" : "left"),
        (this.viewport = document.createElement("div")),
        (this.viewport.className = "flickity-viewport"),
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) &&
          t.addEventListener("resize", this),
        this.options.on)) {
          var n = this.options.on[i];
          this.on(i, n);
        }
        f.createMethods.forEach(function (t) {
          this[t]();
        }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (p.option = function (t) {
        n.extend(this.options, t);
      }),
      (p.activate = function () {
        this.isActive ||
          ((this.isActive = !0),
          this.element.classList.add("flickity-enabled"),
          this.options.rightToLeft &&
            this.element.classList.add("flickity-rtl"),
          this.getSize(),
          u(this._filterFindCellElements(this.element.children), this.slider),
          this.viewport.appendChild(this.slider),
          this.element.appendChild(this.viewport),
          this.reloadCells(),
          this.options.accessibility &&
            ((this.element.tabIndex = 0),
            this.element.addEventListener("keydown", this)),
          this.emitEvent("activate"),
          this.selectInitialIndex(),
          (this.isInitActivated = !0),
          this.dispatchEvent("ready"));
      }),
      (p._createSlider = function () {
        var t = document.createElement("div");
        (t.className = "flickity-slider"),
          (t.style[this.originSide] = 0),
          (this.slider = t);
      }),
      (p._filterFindCellElements = function (t) {
        return n.filterFindElements(t, this.options.cellSelector);
      }),
      (p.reloadCells = function () {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (p._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
          return new r(t, this);
        }, this);
      }),
      (p.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (p.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (p.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (p._positionCells = function (t) {
        (t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0);
        var e = 0;
        if (t > 0) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, r = t; r < n; r++) {
          var s = this.cells[r];
          s.setPosition(e),
            (e += s.size.outerWidth),
            (this.maxCellHeight = Math.max(
              s.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (p._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      }),
      (p.updateSlides = function () {
        if (((this.slides = []), this.cells.length)) {
          var t = new s(this);
          this.slides.push(t);
          var e = "left" == this.originSide ? "marginRight" : "marginLeft",
            i = this._getCanCellFit();
          this.cells.forEach(function (n, r) {
            if (t.cells.length) {
              var o =
                t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
              i.call(this, r, o) ||
                (t.updateTarget(), (t = new s(this)), this.slides.push(t)),
                t.addCell(n);
            } else t.addCell(n);
          }, this),
            t.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (p._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
          return function () {
            return !1;
          };
        if ("number" == typeof t) {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e != 0;
          };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (p._init = p.reposition =
        function () {
          this.positionCells(), this.positionSliderAtSelected();
        }),
      (p.getSize = function () {
        (this.size = i(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var m = {
      center: {
        left: 0.5,
        right: 0.5,
      },
      left: {
        left: 0,
        right: 1,
      },
      right: {
        right: 0,
        left: 1,
      },
    };
    return (
      (p.setCellAlign = function () {
        var t = m[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (p.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t + "px";
        }
      }),
      (p._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (p._getGapCells = function (t, e, i) {
        for (var n = []; t > 0; ) {
          var r = this.cells[e];
          if (!r) break;
          n.push(r), (e += i), (t -= r.size.outerWidth);
        }
        return n;
      }),
      (p._containSlides = function () {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e = t ? "marginRight" : "marginLeft",
            i = t ? "marginLeft" : "marginRight",
            n = this.slideableWidth - this.getLastCell().size[i],
            r = n < this.size.innerWidth,
            s = this.cursorPosition + this.cells[0].size[e],
            o = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function (t) {
            r
              ? (t.target = n * this.cellAlign)
              : ((t.target = Math.max(t.target, s)),
                (t.target = Math.min(t.target, o)));
          }, this);
        }
      }),
      (p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), a && this.$element)) {
          var r = (t += this.options.namespaceJQueryEvents ? ".flickity" : "");
          if (e) {
            var s = new a.Event(e);
            (s.type = t), (r = s);
          }
          this.$element.trigger(r, i);
        }
      }),
      (p.select = function (t, e, i) {
        if (
          this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = n.modulo(t, this.slides.length)),
          this.slides[t])
        ) {
          var r = this.selectedIndex;
          (this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != r && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect");
        }
      }),
      (p._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && e > 1)) return t;
        var i = n.modulo(t, e),
          r = Math.abs(i - this.selectedIndex),
          s = Math.abs(i + e - this.selectedIndex),
          o = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < r
          ? (t += e)
          : !this.isDragSelect && o < r && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : t >= e && (this.x += this.slideableWidth);
      }),
      (p.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (p.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (p.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t),
          t.select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (p.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (p.selectInitialIndex = function () {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
        else {
          if (t && "string" == typeof t)
            if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
          var e = 0;
          t && this.slides[t] && (e = t), this.select(e, !1, !0);
        }
      }),
      (p.selectCell = function (t, e, i) {
        var n = this.queryCell(t);
        if (n) {
          var r = this.getCellSlideIndex(n);
          this.select(r, e, i);
        }
      }),
      (p.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++) {
          if (-1 != this.slides[e].cells.indexOf(t)) return e;
        }
      }),
      (p.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (p.getCells = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getCell(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (p.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      (p.getParentCell = function (t) {
        var e = this.getCell(t);
        return (
          e || ((t = n.getParent(t, ".flickity-slider > *")), this.getCell(t))
        );
      }),
      (p.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var r = [], s = e - t; s <= e + t; s++) {
          var o = this.options.wrapAround ? n.modulo(s, i) : s,
            a = this.slides[o];
          a && (r = r.concat(a.getCellElements()));
        }
        return r;
      }),
      (p.queryCell = function (t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
          if (t.match(/^[#.]?[\d/]/)) return;
          t = this.element.querySelector(t);
        }
        return this.getCell(t);
      }),
      (p.uiChange = function () {
        this.emitEvent("uiChange");
      }),
      (p.childUIPointerDown = function (t) {
        "touchstart" != t.type && t.preventDefault(), this.focus();
      }),
      (p.onresize = function () {
        this.watchCSS(), this.resize();
      }),
      n.debounceMethod(f, "onresize", 150),
      (p.resize = function () {
        if (this.isActive && !this.isAnimating && !this.isDragging) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (p.watchCSS = function () {
        this.options.watchCSS &&
          (-1 != l(this.element, ":after").content.indexOf("flickity")
            ? this.activate()
            : this.deactivate());
      }),
      (p.onkeydown = function (t) {
        var e =
          document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
          var i = f.keyboardHandlers[t.keyCode];
          i && i.call(this);
        }
      }),
      (f.keyboardHandlers = {
        37: function () {
          var t = this.options.rightToLeft ? "next" : "previous";
          this.uiChange(), this[t]();
        },
        39: function () {
          var t = this.options.rightToLeft ? "previous" : "next";
          this.uiChange(), this[t]();
        },
      }),
      (p.focus = function () {
        var e = t.pageYOffset;
        this.element.focus({
          preventScroll: !0,
        }),
          t.pageYOffset != e && t.scrollTo(t.pageXOffset, e);
      }),
      (p.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.unselectSelectedSlide(),
          this.cells.forEach(function (t) {
            t.destroy();
          }),
          this.element.removeChild(this.viewport),
          u(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (p.destroy = function () {
        this.deactivate(),
          t.removeEventListener("resize", this),
          this.allOff(),
          this.emitEvent("destroy"),
          a && this.$element && a.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete d[this.guid];
      }),
      n.extend(p, o),
      (f.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.flickityGUID;
        return e && d[e];
      }),
      n.htmlInit(f, "flickity"),
      a && a.bridget && a.bridget("flickity", f),
      (f.setJQuery = function (t) {
        a = t;
      }),
      (f.Cell = r),
      (f.Slide = s),
      f
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "unipointer/unipointer",
          ["ev-emitter/ev-emitter"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.Unipointer = e(t, t.EvEmitter));
  })(window, function (t, e) {
    function i() {}
    var n = (i.prototype = Object.create(e.prototype));
    (n.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0);
    }),
      (n.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1);
      }),
      (n._bindStartEvent = function (e, i) {
        var n = (i = void 0 === i || i)
            ? "addEventListener"
            : "removeEventListener",
          r = "mousedown";
        "ontouchstart" in t
          ? (r = "touchstart")
          : t.PointerEvent && (r = "pointerdown"),
          e[n](r, this);
      }),
      (n.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (n.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (n.onmousedown = function (t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (n.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (n.onpointerdown = function (t) {
        this._pointerDown(t, t);
      }),
      (n._pointerDown = function (t, e) {
        t.button ||
          this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (n.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      });
    var r = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
    };
    return (
      (n._bindPostStartEvents = function (e) {
        if (e) {
          var i = r[e.type];
          i.forEach(function (e) {
            t.addEventListener(e, this);
          }, this),
            (this._boundPointerEvents = i);
        }
      }),
      (n._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (e) {
            t.removeEventListener(e, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (n.onmousemove = function (t) {
        this._pointerMove(t, t);
      }),
      (n.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (n.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (n._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      }),
      (n.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e]);
      }),
      (n.onmouseup = function (t) {
        this._pointerUp(t, t);
      }),
      (n.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (n.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (n._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (n.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
      }),
      (n._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
      }),
      (n._pointerReset = function () {
        (this.isPointerDown = !1), delete this.pointerIdentifier;
      }),
      (n.pointerDone = function () {}),
      (n.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (n.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (n._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (n.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      }),
      (i.getPointerPoint = function (t) {
        return {
          x: t.pageX,
          y: t.pageY,
        };
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "unidragger/unidragger",
          ["unipointer/unipointer"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("unipointer")))
      : (t.Unidragger = e(t, t.Unipointer));
  })(window, function (t, e) {
    function i() {}
    var n = (i.prototype = Object.create(e.prototype));
    (n.bindHandles = function () {
      this._bindHandles(!0);
    }),
      (n.unbindHandles = function () {
        this._bindHandles(!1);
      }),
      (n._bindHandles = function (e) {
        for (
          var i = (e = void 0 === e || e)
              ? "addEventListener"
              : "removeEventListener",
            n = e ? this._touchActionValue : "",
            r = 0;
          r < this.handles.length;
          r++
        ) {
          var s = this.handles[r];
          this._bindStartEvent(s, e),
            s[i]("click", this),
            t.PointerEvent && (s.style.touchAction = n);
        }
      }),
      (n._touchActionValue = "none"),
      (n.pointerDown = function (t, e) {
        this.okayPointerDown(t) &&
          ((this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY,
          }),
          t.preventDefault(),
          this.pointerDownBlur(),
          this._bindPostStartEvents(t),
          this.emitEvent("pointerDown", [t, e]));
      });
    var r = {
        TEXTAREA: !0,
        INPUT: !0,
        SELECT: !0,
        OPTION: !0,
      },
      s = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0,
      };
    return (
      (n.okayPointerDown = function (t) {
        var e = r[t.target.nodeName],
          i = s[t.target.type],
          n = !e || i;
        return n || this._pointerReset(), n;
      }),
      (n.pointerDownBlur = function () {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur();
      }),
      (n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
      }),
      (n._dragPointerMove = function (t, e) {
        var i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY,
        };
        return (
          !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        );
      }),
      (n.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }),
      (n.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
      }),
      (n._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (n._dragStart = function (t, e) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.dragStart(t, e);
      }),
      (n.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e]);
      }),
      (n._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (n.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
      }),
      (n._dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (n.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e]);
      }),
      (n.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (n._staticClick = function (t, e) {
        (this.isIgnoringMouseUp && "mouseup" == t.type) ||
          (this.staticClick(t, e),
          "mouseup" != t.type &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(
              function () {
                delete this.isIgnoringMouseUp;
              }.bind(this),
              400
            )));
      }),
      (n.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e]);
      }),
      (i.getPointerPoint = e.getPointerPoint),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/drag",
          ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"],
          function (i, n, r) {
            return e(t, i, n, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
  })(window, function (t, e, i, n) {
    n.extend(e.defaults, {
      draggable: ">1",
      dragThreshold: 3,
    }),
      e.createMethods.push("_createDrag");
    var r = e.prototype;
    n.extend(r, i.prototype),
      (r._touchActionValue = "pan-y"),
      (r._createDrag = function () {
        this.on("activate", this.onActivateDrag),
          this.on("uiChange", this._uiChangeDrag),
          this.on("deactivate", this.onDeactivateDrag),
          this.on("cellChange", this.updateDraggable);
      }),
      (r.onActivateDrag = function () {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (r.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
      }),
      (r.updateDraggable = function () {
        ">1" == this.options.draggable
          ? (this.isDraggable = this.slides.length > 1)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add("is-draggable")
            : this.element.classList.remove("is-draggable");
      }),
      (r.bindDrag = function () {
        (this.options.draggable = !0), this.updateDraggable();
      }),
      (r.unbindDrag = function () {
        (this.options.draggable = !1), this.updateDraggable();
      }),
      (r._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (r.pointerDown = function (e, i) {
        this.isDraggable
          ? this.okayPointerDown(e) &&
            (this._pointerDownPreventDefault(e),
            this.pointerDownFocus(e),
            document.activeElement != this.element && this.pointerDownBlur(),
            (this.dragX = this.x),
            this.viewport.classList.add("is-pointer-down"),
            (this.pointerDownScroll = o()),
            t.addEventListener("scroll", this),
            this._pointerDownDefault(e, i))
          : this._pointerDownDefault(e, i);
      }),
      (r._pointerDownDefault = function (t, e) {
        (this.pointerDownPointer = {
          pageX: e.pageX,
          pageY: e.pageY,
        }),
          this._bindPostStartEvents(t),
          this.dispatchEvent("pointerDown", t, [e]);
      });
    var s = {
      INPUT: !0,
      TEXTAREA: !0,
      SELECT: !0,
    };
    function o() {
      return {
        x: t.pageXOffset,
        y: t.pageYOffset,
      };
    }
    return (
      (r.pointerDownFocus = function (t) {
        s[t.target.nodeName] || this.focus();
      }),
      (r._pointerDownPreventDefault = function (t) {
        var e = "touchstart" == t.type,
          i = "touch" == t.pointerType,
          n = s[t.target.nodeName];
        e || i || n || t.preventDefault();
      }),
      (r.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (r.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down"),
          this.dispatchEvent("pointerUp", t, [e]),
          this._dragPointerUp(t, e);
      }),
      (r.pointerDone = function () {
        t.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (r.dragStart = function (e, i) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          t.removeEventListener("scroll", this),
          this.dispatchEvent("dragStart", e, [i]));
      }),
      (r.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
      }),
      (r.dragMove = function (t, e, i) {
        if (this.isDraggable) {
          t.preventDefault(), (this.previousDragX = this.dragX);
          var n = this.options.rightToLeft ? -1 : 1;
          this.options.wrapAround && (i.x %= this.slideableWidth);
          var r = this.dragStartPosition + i.x * n;
          if (!this.options.wrapAround && this.slides.length) {
            var s = Math.max(-this.slides[0].target, this.dragStartPosition);
            r = r > s ? 0.5 * (r + s) : r;
            var o = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            );
            r = r < o ? 0.5 * (r + o) : r;
          }
          (this.dragX = r),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent("dragMove", t, [e, i]);
        }
      }),
      (r.dragEnd = function (t, e) {
        if (this.isDraggable) {
          this.options.freeScroll && (this.isFreeScrolling = !0);
          var i = this.dragEndRestingSelect();
          if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling =
              -n > this.slides[0].target && -n < this.getLastSlide().target;
          } else
            this.options.freeScroll ||
              i != this.selectedIndex ||
              (i += this.dragEndBoostSelect());
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e]);
        }
      }),
      (r.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index;
      }),
      (r._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            r = 1 / 0,
            s =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e;
                  }
                : function (t, e) {
                    return t < e;
                  };
          s(e, r) &&
          ((n += i), (r = e), null !== (e = this.getSlideDistance(-t, n)));

        )
          e = Math.abs(e);
        return {
          distance: r,
          index: n - i,
        };
      }),
      (r.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          r = this.options.wrapAround && i > 1,
          s = r ? n.modulo(e, i) : e,
          o = this.slides[s];
        if (!o) return null;
        var a = r ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (o.target + a);
      }),
      (r.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (r.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          r = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, r]);
      }),
      (r.onscroll = function () {
        var t = o(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/prev-next-button",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (i, n, r) {
            return e(t, i, n, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    "use strict";
    var r = "http://www.w3.org/2000/svg";
    function s(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    (s.prototype = Object.create(i.prototype)),
      (s.prototype._create = function () {
        (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = (this.element = document.createElement("button"));
        (e.className = "flickity-button flickity-prev-next-button"),
          (e.className += this.isPrevious ? " previous" : " next"),
          e.setAttribute("type", "button"),
          this.disable(),
          e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i),
          this.parent.on("select", this.update.bind(this)),
          this.on(
            "pointerDown",
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (s.prototype.activate = function () {
        this.bindStartEvent(this.element),
          this.element.addEventListener("click", this),
          this.parent.element.appendChild(this.element);
      }),
      (s.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener("click", this);
      }),
      (s.prototype.createSVG = function () {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("class", "flickity-button-icon"),
          t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(r, "path"),
          i = (function (t) {
            if ("string" == typeof t) return t;
            return (
              "M " +
              t.x0 +
              ",50 L " +
              t.x1 +
              "," +
              (t.y1 + 50) +
              " L " +
              t.x2 +
              "," +
              (t.y2 + 50) +
              " L " +
              t.x3 +
              ",50  L " +
              t.x2 +
              "," +
              (50 - t.y2) +
              " L " +
              t.x1 +
              "," +
              (50 - t.y1) +
              " Z"
            );
          })(this.parent.options.arrowShape);
        return (
          e.setAttribute("d", i),
          e.setAttribute("class", "arrow"),
          this.isLeft ||
            e.setAttribute("transform", "translate(100, 100) rotate(180) "),
          t.appendChild(e),
          t
        );
      }),
      (s.prototype.handleEvent = n.handleEvent),
      (s.prototype.onclick = function () {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? "previous" : "next";
          this.parent[t]();
        }
      }),
      (s.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (s.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (s.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1) this.enable();
        else {
          var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e;
          this[this.parent.selectedIndex == i ? "disable" : "enable"]();
        }
      }),
      (s.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
          x0: 10,
          x1: 60,
          y1: 50,
          x2: 70,
          y2: 40,
          x3: 30,
        },
      }),
      e.createMethods.push("_createPrevNextButtons");
    var o = e.prototype;
    return (
      (o._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new s(-1, this)),
          (this.nextButton = new s(1, this)),
          this.on("activate", this.activatePrevNextButtons));
      }),
      (o.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (o.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = s),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/page-dots",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (i, n, r) {
            return e(t, i, n, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    function r(t) {
      (this.parent = t), this._create();
    }
    (r.prototype = Object.create(i.prototype)),
      (r.prototype._create = function () {
        (this.holder = document.createElement("ol")),
          (this.holder.className = "flickity-page-dots"),
          (this.dots = []),
          (this.handleClick = this.onClick.bind(this)),
          this.on(
            "pointerDown",
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (r.prototype.activate = function () {
        this.setDots(),
          this.holder.addEventListener("click", this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (r.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder);
      }),
      (r.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (r.prototype.addDots = function (t) {
        for (
          var e = document.createDocumentFragment(),
            i = [],
            n = this.dots.length,
            r = n + t,
            s = n;
          s < r;
          s++
        ) {
          var o = document.createElement("li");
          (o.className = "dot"),
            o.setAttribute("aria-label", "Page dot " + (s + 1)),
            e.appendChild(o),
            i.push(o);
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (r.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (r.prototype.updateSelected = function () {
        this.selectedDot &&
          ((this.selectedDot.className = "dot"),
          this.selectedDot.removeAttribute("aria-current")),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"),
            this.selectedDot.setAttribute("aria-current", "step"));
      }),
      (r.prototype.onTap = r.prototype.onClick =
        function (t) {
          var e = t.target;
          if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i);
          }
        }),
      (r.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      (e.PageDots = r),
      n.extend(e.defaults, {
        pageDots: !0,
      }),
      e.createMethods.push("_createPageDots");
    var s = e.prototype;
    return (
      (s._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new r(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (s.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (s.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (s.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (s.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (e.PageDots = r),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/player",
          ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"],
          function (t, i, n) {
            return e(t, i, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("ev-emitter"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function (t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = "stopped"),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    (n.prototype = Object.create(t.prototype)),
      (n.prototype.play = function () {
        "playing" != this.state &&
          (document.hidden
            ? document.addEventListener(
                "visibilitychange",
                this.onVisibilityPlay
              )
            : ((this.state = "playing"),
              document.addEventListener(
                "visibilitychange",
                this.onVisibilityChange
              ),
              this.tick()));
      }),
      (n.prototype.tick = function () {
        if ("playing" == this.state) {
          var t = this.parent.options.autoPlay;
          t = "number" == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function () {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function () {
        (this.state = "stopped"),
          this.clear(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
      }),
      (n.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function () {
        "playing" == this.state && ((this.state = "paused"), this.clear());
      }),
      (n.prototype.unpause = function () {
        "paused" == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function () {
        this[document.hidden ? "pause" : "unpause"]();
      }),
      (n.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityPlay
          );
      }),
      e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0,
      }),
      i.createMethods.push("_createPlayer");
    var r = i.prototype;
    return (
      (r._createPlayer = function () {
        (this.player = new n(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      }),
      (r.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (r.playPlayer = function () {
        this.player.play();
      }),
      (r.stopPlayer = function () {
        this.player.stop();
      }),
      (r.pausePlayer = function () {
        this.player.pause();
      }),
      (r.unpausePlayer = function () {
        this.player.unpause();
      }),
      (r.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (r.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (r.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/add-remove-cell",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (i, n) {
            return e(t, i, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function (t, e, i) {
    var n = e.prototype;
    return (
      (n.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var n = this.cells.length;
          e = void 0 === e ? n : e;
          var r = (function (t) {
              var e = document.createDocumentFragment();
              return (
                t.forEach(function (t) {
                  e.appendChild(t.element);
                }),
                e
              );
            })(i),
            s = e == n;
          if (s) this.slider.appendChild(r);
          else {
            var o = this.cells[e].element;
            this.slider.insertBefore(r, o);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (s) this.cells = this.cells.concat(i);
          else {
            var a = this.cells.splice(e, n - e);
            this.cells = this.cells.concat(i).concat(a);
          }
          this._sizeCells(i), this.cellChange(e, !0);
        }
      }),
      (n.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (n.prepend = function (t) {
        this.insert(t, 0);
      }),
      (n.remove = function (t) {
        var e = this.getCells(t);
        if (e && e.length) {
          var n = this.cells.length - 1;
          e.forEach(function (t) {
            t.remove();
            var e = this.cells.indexOf(t);
            (n = Math.min(e, n)), i.removeFrom(this.cells, t);
          }, this),
            this.cellChange(n, !0);
        }
      }),
      (n.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (n.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent("cellChange", [t]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected();
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/lazyload",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (i, n) {
            return e(t, i, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var n = e.prototype;
    function r(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    return (
      (n._createLazyload = function () {
        this.on("select", this.lazyLoad);
      }),
      (n.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
          var e = "number" == typeof t ? t : 0,
            n = this.getAdjacentCellElements(e),
            s = [];
          n.forEach(function (t) {
            var e = (function (t) {
              if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"),
                  n = t.getAttribute("data-flickity-lazyload-src"),
                  r = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || n || r) return [t];
              }
              var s =
                  "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
                o = t.querySelectorAll(s);
              return i.makeArray(o);
            })(t);
            s = s.concat(e);
          }),
            s.forEach(function (t) {
              new r(t, this);
            }, this);
        }
      }),
      (r.prototype.handleEvent = i.handleEvent),
      (r.prototype.load = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this);
        var t =
            this.img.getAttribute("data-flickity-lazyload") ||
            this.img.getAttribute("data-flickity-lazyload-src"),
          e = this.img.getAttribute("data-flickity-lazyload-srcset");
        (this.img.src = t),
          e && this.img.setAttribute("srcset", e),
          this.img.removeAttribute("data-flickity-lazyload"),
          this.img.removeAttribute("data-flickity-lazyload-src"),
          this.img.removeAttribute("data-flickity-lazyload-srcset");
      }),
      (r.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded");
      }),
      (r.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror");
      }),
      (r.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element;
        this.flickity.cellSizeChange(n),
          this.img.classList.add(e),
          this.flickity.dispatchEvent("lazyLoad", t, n);
      }),
      (e.LazyLoader = r),
      e
    );
  });
// Variables
const html = document.documentElement;
let lenis;
// let loadingAnimation;

// Menu
function handleMenu() {
  const menu = document.querySelector(".menu");

  if (!menu) return;

  const menuTrigger = menu.querySelector(".menu-trigger");
  const menuNav = menu.querySelector(".nav");

  menuTrigger.setAttribute("role", "button");
  menuTrigger.setAttribute("aria-controls", "nav");
  menuTrigger.setAttribute("aria-haspopup", "menu");
  menuTrigger.setAttribute("aria-expanded", "false");
  menuTrigger.setAttribute("aria-label", "Open menu");
  menuTrigger.setAttribute("aria-pressed", "false");
  menuNav.id = "nav";
  menuNav.setAttribute("aria-hidden", "true");
  menuNav.setAttribute("inert", "");

  menuTrigger.addEventListener("click", toggleMenu);
  menuTrigger.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      toggleMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      toggleMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (menu.classList.contains("open") && !menu.contains(event.target)) {
      toggleMenu();
    }
  });

  menuNav.addEventListener("click", (event) => {
    if (event.target.matches("a.nav-link")) {
      const href = event.target.getAttribute("href");
      if (
        href === window.location.pathname &&
        menu.classList.contains("open")
      ) {
        event.preventDefault();
        toggleMenu();
      }
    }
  });

  function toggleMenu() {
    if (!menu.classList.contains("open")) {
      menu.classList.add("open");
      menuTrigger.setAttribute("aria-expanded", "true");
      menuTrigger.setAttribute("aria-label", "Close menu");
      menuTrigger.setAttribute("aria-pressed", "true");
      menuNav.setAttribute("aria-hidden", "false");
      menuNav.removeAttribute("inert");
    } else {
      menu.classList.remove("open");
      menuTrigger.setAttribute("aria-expanded", "false");
      menuTrigger.setAttribute("aria-label", "Open menu");
      menuTrigger.setAttribute("aria-pressed", "false");
      menuNav.setAttribute("aria-hidden", "true");
      menuNav.setAttribute("inert", "");
    }
  }
  window.toggleMenu = toggleMenu;
}
// document.addEventListener("DOMContentLoaded", handleMenu);



// Flickity
function handleFlickity() {
  let flickities = [];

  function initFlickity(elems) {
    elems.forEach((elem) => {
      let options = {
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
      };

      if (elem.hasAttribute("data-carousel")) {
        options.watchCSS = true;
        options.wrapAround = false;
        options.cellAlign = "left";
        options.contain = true;
      }

      let flkty = new Flickity(elem, options);

      flickities.push(flkty);
    });
  }

  const flickitiesElems = document.querySelectorAll(
    ".testimonials, [data-carousel]"
  );

  if (flickitiesElems.length) {
    initFlickity(flickitiesElems);
  }
}

// Scroll Smooth
function handleScrollSmooth() {
  // Lenis 객체 초기화
  const lenis = new Lenis({
    duration: 1.0, // 스크롤 지속 시간 (숫자가 높을수록 더 부드럽게)
    easing: (t) => 1 - Math.pow(1 - t, 3), // 커스텀 easing 함수
    smooth: true, // 부드러운 스크롤 활성화
    smoothTouch: true, // 터치 디바이스에서도 부드러운 스크롤 활성화
    direction: "vertical", // 수직 스크롤 (기본값)
  });

  let lenisWrapper = null; // 추가 애니메이션 처리를 위한 wrapper

  // Lenis의 스크롤 애니메이션 처리
  function raf(time) {
    lenis.raf(time);
    if (lenisWrapper) {
      lenisWrapper.raf(time);
    }
    requestAnimationFrame(raf);
  }

  // 애니메이션 시작
  requestAnimationFrame(raf);

  // 디버깅용 이벤트 리스너 (선택 사항)
  lenis.on("scroll", ({ scroll }) => {
    console.log("현재 스크롤 위치:", scroll);
  });

  // Lenis 설정 테스트를 위한 사용자 정의 함수
  return lenis;
}



// Scroll Progress
  // function handleScrollProgress() {
  //   const progressEl = document.querySelectorAll("[data-scroll-progress]");
  //   if (progressEl.length === 0) return;

  //   progressEl.forEach((el) => {
  //     const elTop = el.getBoundingClientRect().top;
  //     const elHeight = el.offsetHeight;
  //     const windowHeight = window.innerHeight;

  //     let progress = (windowHeight - elTop) / elHeight;
  //     progress = Math.max(0, Math.min(1, progress));

  //     const targetSelector = el.getAttribute("data-scroll-progress");

  //     if (targetSelector) {
  //       const targetElements = document.querySelectorAll(targetSelector);
  //       targetElements.forEach((targetEl) => {
  //         targetEl.style.setProperty("--progress", progress);
  //       });
  //     } else {
  //       el.style.setProperty("--progress", progress);
  //     }
  //   });
// }
  

    // document.addEventListener("DOMContentLoaded", () => {
    //   function handleScrollProgress() {
    //     const progressEl = document.querySelectorAll("[data-scroll-progress]");
    //     if (progressEl.length === 0) {
    //       console.log("No elements with [data-scroll-progress] found.");
    //       return;
    //     }

    //     progressEl.forEach((el) => {
    //       const targetSelector = el.getAttribute("data-scroll-progress");
    //       const targetElements = document.querySelectorAll(targetSelector);

    //       if (targetElements.length === 0) {
    //         console.log(`No targets found for selector: ${targetSelector}`);
    //         return;
    //       }

    //       targetElements.forEach((targetEl) => {
    //         const elRect = targetEl.getBoundingClientRect();
    //         const elTop = elRect.top + window.scrollY;
    //         const elHeight = targetEl.offsetHeight;
    //         const windowHeight = window.innerHeight;

    //         let progress = (windowHeight - elTop) / elHeight;
    //         progress = Math.max(0, Math.min(1, progress));

    //         console.log(
    //           `Element: ${targetSelector}, Top: ${elTop}, Progress: ${progress}`
    //         );
    //         targetEl.style.setProperty("--progress", progress);
    //       });
    //     });
    //   }

    //   window.addEventListener("scroll", handleScrollProgress);
    //   window.addEventListener("resize", handleScrollProgress);
    //   handleScrollProgress(); // Initial call
    // // });



// document.addEventListener("DOMContentLoaded", () => {
//   function handleScrollProgress() {
//     const progressEl = document.querySelectorAll("[data-scroll-progress]");
//     if (progressEl.length === 0) {
//       console.log("No elements with [data-scroll-progress] found.");
//       return;
//     }

//     progressEl.forEach((el) => {
//       const targetSelector = el.getAttribute("data-scroll-progress");
//       const targetElements = document.querySelectorAll(targetSelector);

//       if (targetElements.length === 0) {
//         console.log(`No targets found for selector: ${targetSelector}`);
//         return;
//       }

//       targetElements.forEach((targetEl) => {
//         const elRect = targetEl.getBoundingClientRect();
//         const elTop = elRect.top; // 화면에서의 상대 위치 (페이지 스크롤 제외)
//         const elHeight = targetEl.offsetHeight; // 요소의 높이
//         const windowHeight = window.innerHeight; // 화면의 높이

//         // 요소가 화면에 들어오기 시작하는 위치와 사라지는 위치 계산
//         const start = elTop - windowHeight; // 요소가 화면에 들어오기 시작할 때
//         const end = elTop + elHeight; // 요소가 화면을 벗어날 때

//         // progress 계산 (스크롤 위치가 start와 end 사이에 있을 때만)
//         let progress = (window.scrollY - start) / (end - start);

//         // progress가 0과 1 사이로 제한되도록 설정
//         progress = Math.max(0, Math.min(1, progress));

//         // 디버깅 로그: progress 값 확인
//         console.log(
//           `Element: ${targetSelector}, scrollY: ${window.scrollY}, start: ${start}, end: ${end}, progress: ${progress}`
//         );

//         // --progress CSS 변수 설정
//         targetEl.style.setProperty("--progress", progress);
//       });
//     });
//   }

//   // 스크롤 및 리사이즈 이벤트 처리
//   window.addEventListener("scroll", handleScrollProgress);
//   window.addEventListener("resize", handleScrollProgress);

//   // 초기 실행: 페이지 로드 시 progress가 0으로 시작
//   handleScrollProgress();
// });
 function handleScrollProgress() {
   const sections = [
     { selector: ".intro-item", heightRatio: 0.2 },
     { selector: ".projects-featured", heightRatio: 0.35 },
     { selector: ".creative-wrapper", heightRatio: 0.25 },
     { selector: ".section-contact", heightRatio: 0.2 },
   ];

   const scrollY = window.scrollY;
   const maxScroll = document.body.scrollHeight - window.innerHeight;
   let currentStart = 0;

   sections.forEach(({ selector, heightRatio }) => {
     const element = document.querySelector(selector);
     if (!element) return;

     // 섹션 높이를 계산하여 start와 end 계산
     const sectionHeight = heightRatio * maxScroll;
     const start = currentStart;
     const end = start + sectionHeight;

     // progress 계산 (스크롤 위치가 start ~ end 사이일 때)
     let progress = (scrollY - start) / (end - start);
     progress = Math.max(0, Math.min(1, progress));

     // CSS 변수 업데이트
     element.style.setProperty("--progress", progress);

     // 디버깅 출력
     console.log(
       `Element: ${selector}, scrollY: ${scrollY}, start: ${start}, end: ${end}, progress: ${progress}`
     );

     // 다음 섹션의 시작점 업데이트
     currentStart = end;
   });
 }

 // 스크롤과 리사이즈 이벤트 리스너 추가
 window.addEventListener("scroll", handleScrollProgress);
 window.addEventListener("resize", handleScrollProgress);

 // 초기 실행
 handleScrollProgress();



// Scroll Observer
function handleScrollObserver() {
  if (!document.querySelector("[data-scroll]")) return;

  function observer(entries) {
    entries.forEach((entry) => {
      const target = entry.target;
      const offsetAttr = target.getAttribute("data-scroll-offset");
      const offset = offsetAttr ? parseFloat(offsetAttr) : 40;

      let shouldBeVisible = entry.isIntersecting;
      shouldBeVisible = entry.intersectionRatio >= offset / 100;

      if (shouldBeVisible) {
        target.setAttribute("data-scroll", "on");

        const scrollTargetSelector = target.getAttribute("data-scroll-target");
        if (scrollTargetSelector) {
          const scrollTarget = document.querySelector(scrollTargetSelector);
          if (scrollTarget) {
            scrollTarget.classList.add("on");
          }
        }
      } else {
        if (target.hasAttribute("data-scroll-repeat")) {
          target.setAttribute("data-scroll", "off");
        }

        const scrollTargetSelector = target.getAttribute("data-scroll-target");
        if (scrollTargetSelector) {
          const scrollTarget = document.querySelector(scrollTargetSelector);
          if (scrollTarget) {
            scrollTarget.classList.remove("on");
          }
        }
      }
    });
  }

  const thresholds = Array.from(
    {
      length: 101,
    },
    (_, i) => i / 100
  );

  const intersectionObserver = new IntersectionObserver(observer, {
    threshold: thresholds,
    rootMargin: "0px",
  });

  document.querySelectorAll("[data-scroll]").forEach((element) => {
    intersectionObserver.observe(element);
  });
}

// Stagger
function handleStagger() {
  if (!document.querySelector("[data-stagger]")) return;

  document.querySelectorAll("[data-stagger]").forEach((t) => {
    let staggerValue = t.getAttribute("data-stagger"),
      hasDelayAttribute = t.hasAttribute("data-stagger-delay"),
      delayValue = t.getAttribute("data-stagger-delay"),
      effectiveStagger =
        staggerValue && staggerValue > 1 ? Number(staggerValue) : 100,
      currentDelay;

    if (hasDelayAttribute) {
      currentDelay =
        delayValue && delayValue !== "" ? Number(delayValue) : effectiveStagger;
    } else {
      currentDelay = 0;
    }

    Array.from(t.children).forEach((child) => {
      if (currentDelay > 0) {
        child.style.transitionDelay = currentDelay + "ms";
      }
      currentDelay += effectiveStagger;
    });
  });
}

// Cursor
function handleCursor() {
  if (window.matchMedia("(hover: hover)").matches) {
    const existingCursor = document.querySelector(".mf-cursor");
    if (existingCursor) {
      existingCursor.remove();
    }

    const cursor = new MouseFollower({
      skewing: 0,
      skewingText: 0,
    });

    const cursorElements = document.querySelectorAll("[data-cursor]");
    cursorElements.forEach((cursorElement) => {
      const cursorType = cursorElement.dataset.cursor;

      cursorElement.addEventListener("mouseenter", () => {
        cursor.show();
        if (cursorType === "mf-open") {
          cursor.setText("Open");
        } else if (cursorType === "mf-like") {
          cursor.setText("Like");
        }
      });

      cursorElement.addEventListener("mouseleave", () => {
        cursor.removeText();
      });

      cursorElement.addEventListener("click", () => {
        if (cursorType === "mf-open") {
          cursor.removeText();
        }
      });
    });

    const btnElements = document.querySelectorAll(".btn, [cursor-stick]");
    btnElements.forEach((btnElement) => {
      btnElement.addEventListener("mouseenter", () => {
        cursor.setStick(btnElement);
      });

      btnElement.addEventListener("mouseleave", () => {
        cursor.removeStick();
      });
    });
  }
}

// Intro Nav
function handleIntro() {
  const introLinks = document.querySelectorAll(".intro-nav-link");
  if (introLinks.length === 0) return;

  let isScrolling = false;

  function highlightActiveLink() {
    let closestLink = null;
    let minDistance = Infinity;
    const firstTargetId = introLinks[0]
      .querySelector(".text-p")
      .textContent.trim();
    const firstTargetElement = document.getElementById(firstTargetId);
    const lastTargetId = introLinks[introLinks.length - 1]
      .querySelector(".text-p")
      .textContent.trim();
    const lastTargetElement = document.getElementById(lastTargetId);

    if (
      firstTargetElement &&
      firstTargetElement.getBoundingClientRect().top > window.innerHeight / 2
    ) {
      introLinks.forEach((link) => {
        link.classList.remove("off");
        link.classList.remove("on");
      });
      return;
    }

    if (
      lastTargetElement &&
      lastTargetElement.getBoundingClientRect().bottom < window.innerHeight / 2
    ) {
      introLinks.forEach((link) => {
        link.classList.remove("off");
        link.classList.remove("on");
      });
      return;
    }

    introLinks.forEach((link) => {
      const targetId = link.querySelector(".text-p").textContent.trim();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 2);
        if (distance < minDistance) {
          minDistance = distance;
          closestLink = link;
        }
      }
    });

    introLinks.forEach((link) => {
      if (link !== closestLink) {
        link.classList.add("off");
        link.classList.remove("on");
      } else {
        link.classList.remove("off");
        link.classList.add("on");
      }
    });
  }

  introLinks.forEach((link) => {
    const targetId = link.querySelector(".text-p").textContent.trim();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      link.addEventListener("click", () => {
        const offset = (window.innerHeight - targetElement.offsetHeight) / 2;
        introLinks.forEach((lnk) => {
          lnk.classList.remove("on");
          lnk.classList.add("off");
        });
        link.classList.add("on");
        isScrolling = true;
        lenis.scrollTo("#" + targetId, {
          offset: -offset,
          onComplete: () => {
            isScrolling = false;
          },
        });
      });
    }
  });

  window.addEventListener("scroll", highlightActiveLink);
  highlightActiveLink();
}

// Project Categories
function handleProjectCategories() {
  function loadCategoryContent(element, slug) {
    if (element) {
      fetch(`/works/${slug}`)
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");
          const projectCategories = doc.querySelectorAll(".project-categories");
          element.innerHTML = "";

          projectCategories.forEach((categoryElement) => {
            element.appendChild(categoryElement.cloneNode(true));
          });
        })
        .catch((err) => {
          console.error("Error fetching category content:", err);
        });
    }
  }

  const projectItems = document.querySelectorAll(
    ".w-dyn-item a.project-item-link"
  );
  projectItems.forEach((item) => {
    const href = item.getAttribute("href");
    const slug = href.replace("/works/", "");
    const embedElement = item.querySelector(".project-categories-embed");
    if (embedElement) {
      loadCategoryContent(embedElement, slug);
    }
  });
}

// Project Filters
function handleProjectFilters() {
  const filters = document.querySelectorAll(".w-dyn-item .filter");
  const projectsList = document.querySelector(".grid-projects");

  if (!filters.length || !projectsList) return;

  let projects = Array.from(projectsList.querySelectorAll(".project"));
  const noResults = document.querySelector(".no-results");
  const resetButtons = document.querySelectorAll("[data-reset]");

  const btnFilters = document.querySelectorAll(".btn-filter");

  btnFilters.forEach((btn) => {
    btn.setAttribute("role", "button");

    btn.addEventListener("click", () => {
      if (btn.classList.contains("on")) {
        btn.classList.remove("on");
      } else {
        btnFilters.forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
      }
    });
  });

  projects.forEach((project, index) => {
    project.setAttribute("data-order", index);
  });

  const animEnter = {
    opacity: 1,
    y: "0rem",
    stagger: 0.04,
    duration: 0.6,
    ease: "power3.out",
  };

  const animExit = {
    opacity: 0,
    y: "2rem",
    stagger: 0.02,
    duration: 0.4,
    ease: "power3.in",
  };

  function setInitialState(elements) {
    gsap.set(elements, {
      opacity: 0,
      y: "2rem",
    });
  }

  function reset() {
    if (projectsList.children.length === projects.length) return;

    filters.forEach((f) => f.classList.remove("on"));
    btnFilters.forEach((b) => b.classList.remove("on"));

    gsap.to(noResults, {
      ...animExit,
      onComplete: () => {
        noResults.style.display = "none";
      },
    });

    let sortedProjects = projects.sort((a, b) => {
      return (
        parseInt(a.getAttribute("data-order"), 10) -
        parseInt(b.getAttribute("data-order"), 10)
      );
    });

    sortedProjects.forEach((project) => {
      projectsList.appendChild(project);
      setInitialState(project);
    });

    gsap.to(sortedProjects, {
      ...animEnter,
      onComplete: function () {
        lenis.resize();
      },
    });

    projectsList.scrollIntoView(true);
    window.scrollBy(0, -100);
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      if (this.classList.contains("on")) return;

      btnFilters.forEach((btn) => btn.classList.remove("on"));

      const filterValue = this.querySelector(".text-btn").textContent.trim();

      gsap.to(projects, {
        ...animExit,
        onComplete: () => {
          projects.forEach((project) => {
            if (projectsList.contains(project)) {
              projectsList.removeChild(project);
            }
          });

          const matchingProjects = projects.filter((project) =>
            Array.from(project.querySelectorAll(".text-btn")).some(
              (btn) => btn.textContent.trim() === filterValue
            )
          );

          if (matchingProjects.length === 0) {
            setInitialState(noResults);
            noResults.style.display = "block";
            gsap.to(noResults, animEnter);
          } else {
            gsap.to(noResults, {
              ...animExit,
              onComplete: () => {
                noResults.style.display = "none";
              },
            });

            matchingProjects.forEach((project) => {
              projectsList.appendChild(project);
              setInitialState(project);
            });
            gsap.to(matchingProjects, {
              ...animEnter,
            });
          }

          projectsList.scrollIntoView(true);
          window.scrollBy(0, -100);
          lenis.resize();

          filters.forEach((f) => f.classList.remove("on"));
          this.classList.add("on");
        },
      });
    });
  });

  resetButtons.forEach((btn) => {
    btn.addEventListener("click", reset);
  });

  function loadProjects() {
    const staggerAnimEnter = {
      opacity: 1,
      y: "0rem",
      stagger: 0.1,
      duration: 1.5,
      delay: 0.25,
      ease: "power3.out",
    };

    gsap.to(projects, staggerAnimEnter);
  }

  loadProjects();
}

// Project Infos
function handleProjectInfos() {
  const bottomNav = document.querySelector(".bottom-nav");
  if (!bottomNav) return;

  const projectInfosBtn = bottomNav.querySelector("a[data-modal]");
  const projectInfosContent = bottomNav.querySelector(".grid-project-infos");
  if (!projectInfosBtn || !projectInfosContent) return;

  projectInfosBtn.setAttribute("role", "button");
  projectInfosBtn.setAttribute("aria-controls", "project-infos");
  projectInfosBtn.setAttribute("aria-haspopup", "menu");
  projectInfosBtn.setAttribute("aria-expanded", "false");
  projectInfosBtn.setAttribute("aria-label", "Open project infos");

  projectInfosContent.setAttribute("inert", "");
  projectInfosContent.setAttribute("aria-hidden", "true");
  projectInfosContent.id = "project-infos";

  projectInfosBtn.addEventListener("click", toggleProjectInfos);
  projectInfosBtn.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      toggleProjectInfos();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && bottomNav.classList.contains("open")) {
      toggleProjectInfos();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      bottomNav.classList.contains("open") &&
      !bottomNav.contains(event.target)
    ) {
      toggleProjectInfos();
    }
  });

  function toggleProjectInfos() {
    if (!bottomNav.classList.contains("open")) {
      bottomNav.classList.add("open");
      projectInfosBtn.setAttribute("aria-expanded", "true");
      projectInfosBtn.setAttribute("aria-label", "Close project infos");
      projectInfosContent.removeAttribute("inert");
      projectInfosContent.setAttribute("aria-hidden", "false");
    } else {
      bottomNav.classList.remove("open");
      projectInfosBtn.setAttribute("aria-expanded", "false");
      projectInfosBtn.setAttribute("aria-label", "Open project infos");
      projectInfosContent.setAttribute("inert", "");
      projectInfosContent.setAttribute("aria-hidden", "true");
    }
  }
}

// Project Captions
function handleCaption() {
  const figures = document.querySelectorAll(".project-content figure");

  if (figures.length > 0) {
    figures.forEach((figure) => {
      const figcaption = figure.querySelector("figcaption");
      if (figcaption) {
        const breaks = figcaption.querySelectorAll("br");
        breaks.forEach((br) => {
          const spacer = document.createElement("span");
          spacer.style.display = "block";
          spacer.style.height = "0.75rem";
          br.parentNode.replaceChild(spacer, br);
        });

        const btn = document.createElement("button");
        btn.classList.add("btn-caption");
        btn.setAttribute("aria-label", "show infos");
        btn.setAttribute("aria-pressed", "false");
        btn.innerHTML = `
          <svg viewBox="0 0 31 31">
              <circle cx="15.5" cy="15.5" r="15.5" fill="#fafafa"/>
              <g stroke="#0d0d0d" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11.45 15.5h8.1"/>
                  <path d="M15.5 19.55v-8.1"/>
              </g>
          </svg>
        `;

        btn.addEventListener("click", () => {
          const currentState = btn.getAttribute("aria-pressed") === "true";
          btn.setAttribute("aria-pressed", !currentState);
          btn.setAttribute(
            "aria-label",
            currentState ? "show infos" : "close infos"
          );
        });

        figure.insertBefore(btn, figcaption);
      }
    });
  }
}



// Height Variable
function handleHeight() {
  let resizeTimeout;

  function setHeight() {
    const els = document.querySelectorAll("[data-height]");

    els.forEach((el) => {
      const height = el.firstElementChild.clientHeight + "px";

      const targetSelector = el.getAttribute("data-height");

      if (targetSelector && targetSelector.trim() !== "") {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          targetElement.style.setProperty("--height", height);
        }
      } else {
        el.style.setProperty("--height", height);
      }
    });
  }

  function throttledSetHeight() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        setHeight();
      }, 100);
    }
  }

  setHeight();
  window.addEventListener("resize", throttledSetHeight);
}

function handlePage() {
  const page = document.querySelector("[data-page]");
  const pageName = page ? page.getAttribute("data-page") : "Home";
  const footer = document.querySelector(".footer");

  if (pageName.toLowerCase() === "home") {
    // 'Home' 페이지 처리
    if (!document.body.classList.contains("dark")) {
      document.body.classList.add("dark");
    }
    if (footer && !footer.classList.contains("dark")) {
      footer.classList.add("dark");
    }
  } else {
    // 다른 페이지 처리
    document.body.classList.remove("dark");
    if (footer) {
      footer.classList.remove("dark");
    }
  }

  if (pageName.toLowerCase() === "about") {
    document.body.classList.add("no-transition");
  } else {
    document.body.classList.remove("no-transition");
  }

  // pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  const pageTitle = document.querySelector(".menu-title .text-p");
  if (pageTitle) {
    pageTitle.textContent = pageName;
  }
}

// Disable current link
function handleCurrent() {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (event) {
      const href = this.getAttribute("href");
      if (href === window.location.pathname) {
        event.preventDefault();
      }
    });
  });
}

// Split text
function handleSplit() {
  let t = window.innerWidth;

  const e = () => {
    let elements = document.querySelectorAll("[data-split]");

    elements.forEach((element) => {
      let e,
        i = new SplitType(element, {
          types: element.getAttribute("data-split-type"),
        });
      let n = element.getAttribute("data-split");
      let a = element.hasAttribute("data-split-delay") ? 1 : 0;
      let d = n > 1 ? Number(n) : 100;

      element
        .getAttribute("data-split-type")
        .split(",")
        .forEach((t) => {
          t = t.trim();
          e = d;

          let delayValue = (i[t].length - 1) * 0.2 + 1;

          i[t].forEach((i, n) => {
            if (0 !== n || a) {
              i.style.transitionDelay = e + "ms";
              e = d + e;
            }

            const l = document.createElement("div");
            l.classList.add(t + "wrap");
            l.style.setProperty("--delay", delayValue.toString());

            delayValue -= 0.2;

            i.parentNode.appendChild(l);
            l.appendChild(i);
          });
        });
    });
  };
  e();

  window.addEventListener("resize", () => {
    if (window.innerWidth !== t) {
      e();
    }
    t = window.innerWidth;
  });
}

// External links
function handleRel() {
  const links = document.querySelectorAll("a[target='_blank']");
  links.forEach((link) => link.setAttribute("rel", "noopener noreferrer"));
}

// Aria-hidden SVGs
function handleSvgAria() {
  const svgs = document.querySelectorAll("svg:not([aria-label])");
  svgs.forEach(function (svg) {
    svg.setAttribute("aria-hidden", "true");
  });
}

// Page transitions
function handleBarba() {
  let browserNav = false;

  window.addEventListener("popstate", () => {
    browserNav = true;
  });

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const entering = (container) => {
    const transition = html.querySelector(".transition");
    const main = container.querySelector("main");

    gsap
      .to(transition, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      })
      .then(() => {
        lenis.destroy();
        handleScrollSmooth();
      });

    return gsap.from(main, {
      y: 150,
      duration: 1.5,
      ease: "power3.out",
      clearProps: "all",
    });
  };
  const leaving = (container) => {
    const transition = html.querySelector(".transition");
    const main = container.querySelector("main");

    gsap.to(transition, {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 1,
      ease: "power3.in",
    });

    return gsap.to(main, {
      y: -450,
      duration: 1,
      ease: "power3.in",
      clearProps: "all",
    });
  };
  // function flipMatch(data) {
  //   let name = data.next.container.querySelector(
  //     ".project-header [data-project-name]"
  //   ).textContent;

  //   document.querySelectorAll(".project-item-link").forEach(function (item) {
  //     if (item.querySelector("[data-project-name]").textContent === name) {
  //       item.classList.add("flip");
  //     }
  //   });
  // }

  // function flip(outgoing, incoming) {
  //   let flipState = Flip.getState(
  //     outgoing.querySelector(".project-item-link .flip-item")
  //   );

  //   gsap.set(incoming.querySelector(".project-header-img .flip-item"), {
  //     autoAlpha: 0,
  //   });

  //   incoming.append(outgoing.querySelector(".project-item-link .flip-item"));

  //   Flip.from(flipState, {
  //     duration: 1,
  //     ease: "power3.inOut",
  //   });
  // }

  // barba.init({
  //   transitions: [
  //     {
  //       to: {
  //         namespace: ["project"],
  //       },
  //       async leave(data) {
  //         if (browserNav) {
  //           await leaving(data.current.container);
  //         }
  //       },
  //       async enter(data) {
  //           return gsap
  //             .to(data.current.container, {
  //               opacity: 0,
  //               duration: 0.5,
  //               delay: 0.5,
  //             })
  //             .then(() => {
  //               lenis.destroy();
  //               handleScrollSmooth();
  //             });
  //       },
  //     },
  //     {
  //       to: {
  //         namespace: ["main"],
  //       },
  //       async leave(data) {
  //         await leaving(data.current.container);
  //       },
  //       enter(data) {
  //         entering(data.next.container);
  //       },
  //     },
  //   ],
  // });

  barba.hooks.before((data) => {
    if (document.querySelector(".menu.open")) {
      window.toggleMenu();
    }
    lenis.stop();
    html.classList.add("transitioning");
  });

  barba.hooks.afterLeave((data) => {
    html.classList.remove("ready");
  });

  // barba.hooks.enter((data) => {
  //   handleSplit();
  // });

  barba.hooks.after((data) => {
    html.classList.remove("transitioning");
    setTimeout(() => {
      html.classList.add("ready");
    }, 0);
    init();
    window.scrollTo(0, 0);
  });
  
}

// function handleLoading() {
//   const loading = document.querySelector(".loading");
//   if (!loading) {
//     return;
//   }

function handleOffcuts() {
  let e = document.querySelector(".offcuts-track");
  if (!e) return;
  let t = e.offsetWidth,
    r = gsap.to(e, {
      duration: 3,
      x: -t,
      ease: "none",
    });
  ScrollTrigger.create({
    trigger: ".section-offcuts",
    start: "top top",
    end: "+=" + t,
    pin: !0,
    animation: r,
    scrub: 1,
  }),
    gsap.fromTo(
      ".offcuts-heading",
      {
        opacity: "1",
      },
      {
        duration: 1,
        opacity: "0.1",
        scrollTrigger: {
          trigger: "[data-scroll-progress]",
          start: "top 80%",
          end: "70px bottom",
          scrub: !0,
        },
      }
    );
  let n = e.querySelectorAll(".offcuts-list .offcuts-item"),
    o = document.querySelector(".offcuts-popup");
  n.forEach((e) => {
    e.addEventListener("click", () => {
      o.classList.add("open");
      let t = e.querySelector(".for-offcuts"),
        r = e.querySelector(".offcuts-content-wrapper"),
        n = t.cloneNode(!0),
        a = r.cloneNode(!0),
        l = o.querySelector(".coffcuts-popup-image-wrapper"),
        i = o.querySelector(".coffcuts-popup-content-wrapper");
      l.firstChild &&
        (l.removeChild(l.firstChild), i.removeChild(i.firstChild)),
        l.appendChild(n),
        i.appendChild(a);
    });
  });
  document
    .querySelector("[close-offcuts-popup]")
    .addEventListener("click", () => {
      o.classList.remove("open");
    });
}


document.addEventListener("DOMContentLoaded", () => {
  handleMenu();
  // handleScrollProgress();
  handleScrollObserver();
  handleStagger();
  // handleProjectCategories();
  // handleProjectFilters();
  // handleProjectInfos();
  handleHeight();
  handlePage();
  handleCurrent();
  handleSplit();
  handleRel();
  handleBarba();
  handleOffcuts();
  handleScrollSmooth();
});

// function init() {
//   handleMenu();
//   handleFlickity();
//   handleScrollProgress();
//   handleScrollObserver();
//   handleStagger();
//   handleCursor();
//   handleIntro();
//   handleProjectCategories();
//   handleProjectFilters();
//   handleProjectInfos();
//   handleCaption();
//   handleVideos();
//   handleHeight();
//   handlePage();
//   handleCurrent();
//   handleRel();
//   handleSvgAria();
//   // handleLoading();
//   handleOffcuts();
//   // handleSnippetsFilter();
//   // loadWebgl();
//   // handleGlobalCode();
//   // playVideo();
// }









