var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, e) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = e.value;
    return a
};
$jscomp.getGlobal = function(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var e = a[b];
        if (e && e.Math == Math) return e
    }
    throw Error("Cannot find global object")
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
    var e = $jscomp.propertyToPolyfillSymbol[b];
    if (null == e) return a[b];
    e = a[e];
    return void 0 !== e ? e : a[b]
};
$jscomp.polyfill = function(a, b, e, f) {
    b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, e, f) : $jscomp.polyfillUnisolated(a, b, e, f))
};
$jscomp.polyfillUnisolated = function(a, b, e, f) {
    e = $jscomp.global;
    a = a.split(".");
    for (f = 0; f < a.length - 1; f++) {
        var h = a[f];
        h in e || (e[h] = {});
        e = e[h]
    }
    a = a[a.length - 1];
    f = e[a];
    b = b(f);
    b != f && null != b && $jscomp.defineProperty(e, a, {
        configurable: !0,
        writable: !0,
        value: b
    })
};
$jscomp.polyfillIsolated = function(a, b, e, f) {
    var h = a.split(".");
    a = 1 === h.length;
    f = h[0];
    f = !a && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var k = 0; k < h.length - 1; k++) {
        var l = h[k];
        l in f || (f[l] = {});
        f = f[l]
    }
    h = h[h.length - 1];
    e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? f[h] : null;
    b = b(e);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, h, {
        configurable: !0,
        writable: !0,
        value: b
    }) : b !== e && ($jscomp.propertyToPolyfillSymbol[h] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(h) : $jscomp.POLYFILL_PREFIX + h, h = $jscomp.propertyToPolyfillSymbol[h], $jscomp.defineProperty(f, h, {
        configurable: !0,
        writable: !0,
        value: b
    })))
};
$jscomp.initSymbol = function() {};
$jscomp.polyfill("Symbol", function(a) {
    if (a) return a;
    var b = function(a, b) {
        this.$jscomp$symbol$id_ = a;
        $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
    b.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    };
    var e = 0,
        f = function(a) {
            if (this instanceof f) throw new TypeError("Symbol is not a constructor");
            return new b("jscomp_symbol_" + (a || "") + "_" + e++, a)
        };
    return f
}, "es6", "es3");
$jscomp.initSymbolIterator = function() {};
$jscomp.polyfill("Symbol.iterator", function(a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < b.length; e++) {
        var f = $jscomp.global[b[e]];
        "function" === typeof f && "function" != typeof f.prototype[a] && $jscomp.defineProperty(f.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
            }
        })
    }
    return a
}, "es6", "es3");
$jscomp.initSymbolAsyncIterator = function() {};
$jscomp.iteratorPrototype = function(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function() {
        return this
    };
    return a
};
$jscomp.iteratorFromArray = function(a, b) {
    a instanceof String && (a += "");
    var e = 0,
        f = {
            next: function() {
                if (e < a.length) {
                    var h = e++;
                    return {
                        value: b(h, a[h]),
                        done: !1
                    }
                }
                f.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return f.next()
            }
        };
    f[Symbol.iterator] = function() {
        return f
    };
    return f
};
$jscomp.polyfill("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return $jscomp.iteratorFromArray(this, function(a) {
            return a
        })
    }
}, "es6", "es3");
var scrollCue = function() {
    var a = {},
        b, e, f = 0,
        h = !0,
        k = !0,
        l = !1,
        n = !1,
        m, p = {
            duration: 600,
            interval: -.7,
            percentage: .75,
            enable: !0,
            docSlider: !1,
            pageChangeReset: !1
        };
    a = {
        setEvents: function(g) {
            var c = function() {
                h && (requestAnimationFrame(function() {
                    h = !0;
                    k && (a.setQuery(), a.runQuery())
                }), h = !1)
            };
            k && !g && window.addEventListener("load", a.runQuery);
            window.addEventListener("scroll", c);
            if (l) {
                g = docSlider.getElements().pages;
                for (var d = 0; d < g.length; d++) g[d].addEventListener("scroll", function(a) {
                    var g = docSlider.getCurrentIndex() + "";
                    a = a.target.getAttribute("data-ds-index");
                    if (g !== a) return !1;
                    docSlider._getWheelEnable() && c()
                })
            }
            window.addEventListener("resize", function() {
                0 < f && clearTimeout(f);
                f = setTimeout(function() {
                    k && (a.searchElements(), a.setQuery(), a.runQuery())
                }, 200)
            })
        },
        setOptions: function(g, c) {
            var d = {};
            if ("undefined" !== typeof g) return Object.keys(g).forEach(function(b) {
                "[object Object]" === Object.prototype.toString.call(g[b]) ? d[b] = a.setOptions(g[b], c[b]) : (d[b] = g[b], "undefined" !== typeof c && "undefined" !== typeof c[b] && (d[b] = c[b]))
            }), d
        },
        searchElements: function() {
            b = [];
            var g = document.querySelectorAll("[data-cues]:not([data-disabled])");
            for (var c = 0; c < g.length; c++) {
                for (var d = g[c], e = 0; e < d.children.length; e++) {
                    var f = d.children[e];
                    a.setAttrPtoC(f, "data-cue", d, "data-cues", "");
                    a.setAttrPtoC(f, "data-duration", d, "data-duration", !1);
                    a.setAttrPtoC(f, "data-interval", d, "data-interval", !1);
                    a.setAttrPtoC(f, "data-sort", d, "data-sort", !1);
                    a.setAttrPtoC(f, "data-addClass", d, "data-addClass", !1);
                    a.setAttrPtoC(f, "data-group", d, "data-group", !1);
                    a.setAttrPtoC(f, "data-delay", d, "data-delay", !1)
                }
                d.setAttribute("data-disabled", "true")
            }
            g = document.querySelectorAll('[data-cue]:not([data-show="true"])');
            for (c = 0; c < g.length; c++) d = g[c], b.push({
                elm: d,
                cue: a.getAttr(d, "data-cue", "fadeIn"),
                duration: Number(a.getAttr(d, "data-duration", m.duration)),
                interval: Number(a.getAttr(d, "data-interval", m.interval)),
                order: a.getOrderNumber(d),
                sort: a.getAttr(d, "data-sort", null),
                addClass: a.getAttr(d, "data-addClass", null),
                group: a.getAttr(d, "data-group", null),
                delay: Number(a.getAttr(d, "data-delay", 0))
            });
            if (l)
                for (g = docSlider.getElements().pages.length, c = 0; c < g; c++)
                    for (d = document.querySelectorAll('[data-ds-index="' + c + '"] [data-cue]:not([data-scpage])'), e = 0; e < d.length; e++) d[e].setAttribute("data-scpage", c)
        },
        sortElements: function() {
            for (var a = arguments[0], c = [].slice.call(arguments).slice(1), d = {
                    $jscomp$loop$prop$i$4: 0
                }; d.$jscomp$loop$prop$i$4 < c.length; d = {
                    $jscomp$loop$prop$i$4: d.$jscomp$loop$prop$i$4
                }, d.$jscomp$loop$prop$i$4++) a.sort(function(a) {
                return function(g, d) {
                    var b = "undefined" === typeof c[a.$jscomp$loop$prop$i$4][1] ? !0 : c[a.$jscomp$loop$prop$i$4][1],
                        e = c[a.$jscomp$loop$prop$i$4][0];
                    return g[e] > d[e] ? b ? 1 : -1 : g[e] < d[e] ? b ? -1 : 1 : 0
                }
            }(d))
        },
        randElements: function(a) {
            for (var g = a.length - 1; 0 < g; g--) {
                var d = Math.floor(Math.random() * (g + 1)),
                    b = a[g];
                a[g] = a[d];
                a[d] = b
            }
            return a
        },
        setDurationValue: function(a, c, d) {
            if ("undefined" === typeof c) return a;
            c = c.duration;
            a = -1 === (d + "").indexOf(".") ? a + c + d : a + c + c * d;
            return 0 > a ? 0 : a
        },
        getOrderNumber: function(a) {
            return a.hasAttribute("data-order") ? (a = Number(a.getAttribute("data-order")), 0 <= a ? a : Math.pow(2, 53) - 1 + a) : Math.pow(2, 52) - 1
        },
        setAttrPtoC: function(a, c, d, b, e) {
            d.hasAttribute(b) ? a.hasAttribute(c) || a.setAttribute(c, d.getAttribute(b)) : !1 !== e && a.setAttribute(c, e)
        },
        getAttr: function(a, c, d) {
            return a.hasAttribute(c) ? a.getAttribute(c) : d
        },
        getOffsetTop: function(a) {
            return a.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
        },
        setClassNames: function(a, c) {
            if (c) {
                c = c.split(" ");
                for (var d = 0; d < c.length; d++) a.classList.add(c[d])
            }
        },
        setQuery: function() {
            e = {};
            for (var g = 0; g < b.length; g++) {
                var c = b[g],
                    d = c.group ? c.group : "$" + a.getOffsetTop(c.elm);
                if (!c.elm.hasAttribute("data-show")) {
                    if (l) {
                        var f = c.elm.getAttribute("data-scpage"),
                            h = docSlider.getCurrentIndex() + "";
                        if (f !== h && null !== f) continue
                    }
                    "undefined" === typeof e[d] && (e[d] = []);
                    e[d].push(c)
                }
            }
        },
        runQuery: function() {
            for (var b = Object.keys(e), c = {}, d = 0; d < b.length; c = {
                    $jscomp$loop$prop$elms$6: c.$jscomp$loop$prop$elms$6,
                    $jscomp$loop$prop$interval$7: c.$jscomp$loop$prop$interval$7
                }, d++)
                if (c.$jscomp$loop$prop$elms$6 = e[b[d]], a.isElementIn(c.$jscomp$loop$prop$elms$6[0].elm)) {
                    "reverse" === c.$jscomp$loop$prop$elms$6[0].sort ? c.$jscomp$loop$prop$elms$6.reverse() : "random" === c.$jscomp$loop$prop$elms$6[0].sort && a.randElements(c.$jscomp$loop$prop$elms$6);
                    a.sortElements(c.$jscomp$loop$prop$elms$6, ["order"]);
                    for (var f = c.$jscomp$loop$prop$interval$7 = 0; f < c.$jscomp$loop$prop$elms$6.length; f++)(function(c) {
                        return function(b) {
                            c.$jscomp$loop$prop$elms$6[b].elm.setAttribute("data-show", "true");
                            a.setClassNames(c.$jscomp$loop$prop$elms$6[b].elm, c.$jscomp$loop$prop$elms$6[b].addClass);
                            c.$jscomp$loop$prop$interval$7 = a.setDurationValue(c.$jscomp$loop$prop$interval$7, c.$jscomp$loop$prop$elms$6[b - 1], c.$jscomp$loop$prop$elms$6[b].interval);
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationName = c.$jscomp$loop$prop$elms$6[b].cue;
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDuration = c.$jscomp$loop$prop$elms$6[b].duration + "ms";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationTimingFunction = "ease";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDelay = c.$jscomp$loop$prop$interval$7 + c.$jscomp$loop$prop$elms$6[b].delay + "ms";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDirection = "normal";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationFillMode = "both"
                        }
                    })(c)(f);
                    delete e[b[d]]
                }
        },
        isElementIn: function(b) {
            var c = b.hasAttribute("data-scpage") ? a.isScrollEndWithDocSlider : a.isScrollEnd;
            return window.pageYOffset > a.getOffsetTop(b) - window.innerHeight * m.percentage || c()
        },
        isScrollEnd: function() {
            var a = window.document.documentElement;
            return (window.document.body.scrollTop || a.scrollTop) >= a.scrollHeight - a.clientHeight
        },
        isScrollEndWithDocSlider: function() {
            var a = docSlider.getCurrentPage();
            return a.scrollTop >= a.scrollHeight - a.clientHeight
        }
    };
    return {
        init: function(b) {
            m = a.setOptions(p, b);
            k = m.enable;
            l = m.docSlider;
            n = m.pageChangeReset;
            l || (a.setEvents(), a.searchElements(), a.setQuery())
        },
        update: function() {
            k && (a.searchElements(), a.setQuery(), a.runQuery())
        },
        enable: function(a) {
            k = "undefined" === typeof a ? !k : a;
            scrollCue.update()
        },
        _hasDocSlider: function() {
            return l
        },
        _hasPageChangeReset: function() {
            return n
        },
        _initWithDocSlider: function(b) {
            a.setEvents(b);
            a.searchElements();
            a.setQuery()
        },
        _updateWithDocSlider: function() {
            k && (a.setQuery(), a.runQuery())
        },
        _searchElements: function() {
            a.searchElements()
        }
    }
}();