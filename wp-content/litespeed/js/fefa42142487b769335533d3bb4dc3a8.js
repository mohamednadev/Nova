/* (() => {
    var t = {
            353: function(t) {
                t.exports = function() {
                    "use strict";
                    var t = 1e3,
                        e = 6e4,
                        n = 36e5,
                        i = "millisecond",
                        r = "second",
                        o = "minute",
                        a = "hour",
                        s = "day",
                        l = "week",
                        c = "month",
                        u = "quarter",
                        d = "year",
                        p = "date",
                        f = "Invalid Date",
                        m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                        h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        g = {
                            name: "en",
                            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                        },
                        _ = function(t, e, n) {
                            var i = String(t);
                            return !i || i.length >= e ? t : "" + Array(e + 1 - i.length).join(n) + t
                        },
                        y = {
                            s: _,
                            z: function(t) {
                                var e = -t.utcOffset(),
                                    n = Math.abs(e),
                                    i = Math.floor(n / 60),
                                    r = n % 60;
                                return (e <= 0 ? "+" : "-") + _(i, 2, "0") + ":" + _(r, 2, "0")
                            },
                            m: function t(e, n) {
                                if (e.date() < n.date()) return -t(n, e);
                                var i = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                    r = e.clone().add(i, c),
                                    o = n - r < 0,
                                    a = e.clone().add(i + (o ? -1 : 1), c);
                                return +(-(i + (n - r) / (o ? r - a : a - r)) || 0)
                            },
                            a: function(t) {
                                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                            },
                            p: function(t) {
                                return {
                                    M: c,
                                    y: d,
                                    w: l,
                                    d: s,
                                    D: p,
                                    h: a,
                                    m: o,
                                    s: r,
                                    ms: i,
                                    Q: u
                                }[t] || String(t || "").toLowerCase().replace(/s$/, "")
                            },
                            u: function(t) {
                                return void 0 === t
                            }
                        },
                        b = "en",
                        v = {};
                    v[b] = g;
                    var w = function(t) {
                            return t instanceof E
                        },
                        T = function(t, e, n) {
                            var i;
                            if (!t) return b;
                            if ("string" == typeof t) v[t] && (i = t), e && (v[t] = e, i = t);
                            else {
                                var r = t.name;
                                v[r] = t, i = r
                            }
                            return !n && i && (b = i), i || !n && b
                        },
                        S = function(t, e) {
                            if (w(t)) return t.clone();
                            var n = "object" == typeof e ? e : {};
                            return n.date = t, n.args = arguments, new E(n)
                        },
                        A = y;
                    A.l = T, A.i = w, A.w = function(t, e) {
                        return S(t, {
                            locale: e.$L,
                            utc: e.$u,
                            x: e.$x,
                            $offset: e.$offset
                        })
                    };
                    var E = function() {
                            function g(t) {
                                this.$L = T(t.locale, null, !0), this.parse(t)
                            }
                            var _ = g.prototype;
                            return _.parse = function(t) {
                                this.$d = function(t) {
                                    var e = t.date,
                                        n = t.utc;
                                    if (null === e) return new Date(NaN);
                                    if (A.u(e)) return new Date;
                                    if (e instanceof Date) return new Date(e);
                                    if ("string" == typeof e && !/Z$/i.test(e)) {
                                        var i = e.match(m);
                                        if (i) {
                                            var r = i[2] - 1 || 0,
                                                o = (i[7] || "0").substring(0, 3);
                                            return n ? new Date(Date.UTC(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)) : new Date(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)
                                        }
                                    }
                                    return new Date(e)
                                }(t), this.$x = t.x || {}, this.init()
                            }, _.init = function() {
                                var t = this.$d;
                                this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                            }, _.$utils = function() {
                                return A
                            }, _.isValid = function() {
                                return !(this.$d.toString() === f)
                            }, _.isSame = function(t, e) {
                                var n = S(t);
                                return this.startOf(e) <= n && n <= this.endOf(e)
                            }, _.isAfter = function(t, e) {
                                return S(t) < this.startOf(e)
                            }, _.isBefore = function(t, e) {
                                return this.endOf(e) < S(t)
                            }, _.$g = function(t, e, n) {
                                return A.u(t) ? this[e] : this.set(n, t)
                            }, _.unix = function() {
                                return Math.floor(this.valueOf() / 1e3)
                            }, _.valueOf = function() {
                                return this.$d.getTime()
                            }, _.startOf = function(t, e) {
                                var n = this,
                                    i = !!A.u(e) || e,
                                    u = A.p(t),
                                    f = function(t, e) {
                                        var r = A.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                        return i ? r : r.endOf(s)
                                    },
                                    m = function(t, e) {
                                        return A.w(n.toDate()[t].apply(n.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                                    },
                                    h = this.$W,
                                    g = this.$M,
                                    _ = this.$D,
                                    y = "set" + (this.$u ? "UTC" : "");
                                switch (u) {
                                    case d:
                                        return i ? f(1, 0) : f(31, 11);
                                    case c:
                                        return i ? f(1, g) : f(0, g + 1);
                                    case l:
                                        var b = this.$locale().weekStart || 0,
                                            v = (h < b ? h + 7 : h) - b;
                                        return f(i ? _ - v : _ + (6 - v), g);
                                    case s:
                                    case p:
                                        return m(y + "Hours", 0);
                                    case a:
                                        return m(y + "Minutes", 1);
                                    case o:
                                        return m(y + "Seconds", 2);
                                    case r:
                                        return m(y + "Milliseconds", 3);
                                    default:
                                        return this.clone()
                                }
                            }, _.endOf = function(t) {
                                return this.startOf(t, !1)
                            }, _.$set = function(t, e) {
                                var n, l = A.p(t),
                                    u = "set" + (this.$u ? "UTC" : ""),
                                    f = (n = {}, n[s] = u + "Date", n[p] = u + "Date", n[c] = u + "Month", n[d] = u + "FullYear", n[a] = u + "Hours", n[o] = u + "Minutes", n[r] = u + "Seconds", n[i] = u + "Milliseconds", n)[l],
                                    m = l === s ? this.$D + (e - this.$W) : e;
                                if (l === c || l === d) {
                                    var h = this.clone().set(p, 1);
                                    h.$d[f](m), h.init(), this.$d = h.set(p, Math.min(this.$D, h.daysInMonth())).$d
                                } else f && this.$d[f](m);
                                return this.init(), this
                            }, _.set = function(t, e) {
                                return this.clone().$set(t, e)
                            }, _.get = function(t) {
                                return this[A.p(t)]()
                            }, _.add = function(i, u) {
                                var p, f = this;
                                i = Number(i);
                                var m = A.p(u),
                                    h = function(t) {
                                        var e = S(f);
                                        return A.w(e.date(e.date() + Math.round(t * i)), f)
                                    };
                                if (m === c) return this.set(c, this.$M + i);
                                if (m === d) return this.set(d, this.$y + i);
                                if (m === s) return h(1);
                                if (m === l) return h(7);
                                var g = (p = {}, p[o] = e, p[a] = n, p[r] = t, p)[m] || 1,
                                    _ = this.$d.getTime() + i * g;
                                return A.w(_, this)
                            }, _.subtract = function(t, e) {
                                return this.add(-1 * t, e)
                            }, _.format = function(t) {
                                var e = this;
                                if (!this.isValid()) return f;
                                var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                                    i = A.z(this),
                                    r = this.$locale(),
                                    o = this.$H,
                                    a = this.$m,
                                    s = this.$M,
                                    l = r.weekdays,
                                    c = r.months,
                                    u = function(t, i, r, o) {
                                        return t && (t[i] || t(e, n)) || r[i].substr(0, o)
                                    },
                                    d = function(t) {
                                        return A.s(o % 12 || 12, t, "0")
                                    },
                                    p = r.meridiem || function(t, e, n) {
                                        var i = t < 12 ? "AM" : "PM";
                                        return n ? i.toLowerCase() : i
                                    },
                                    m = {
                                        YY: String(this.$y).slice(-2),
                                        YYYY: this.$y,
                                        M: s + 1,
                                        MM: A.s(s + 1, 2, "0"),
                                        MMM: u(r.monthsShort, s, c, 3),
                                        MMMM: u(c, s),
                                        D: this.$D,
                                        DD: A.s(this.$D, 2, "0"),
                                        d: String(this.$W),
                                        dd: u(r.weekdaysMin, this.$W, l, 2),
                                        ddd: u(r.weekdaysShort, this.$W, l, 3),
                                        dddd: l[this.$W],
                                        H: String(o),
                                        HH: A.s(o, 2, "0"),
                                        h: d(1),
                                        hh: d(2),
                                        a: p(o, a, !0),
                                        A: p(o, a, !1),
                                        m: String(a),
                                        mm: A.s(a, 2, "0"),
                                        s: String(this.$s),
                                        ss: A.s(this.$s, 2, "0"),
                                        SSS: A.s(this.$ms, 3, "0"),
                                        Z: i
                                    };
                                return n.replace(h, (function(t, e) {
                                    return e || m[t] || i.replace(":", "")
                                }))
                            }, _.utcOffset = function() {
                                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                            }, _.diff = function(i, p, f) {
                                var m, h = A.p(p),
                                    g = S(i),
                                    _ = (g.utcOffset() - this.utcOffset()) * e,
                                    y = this - g,
                                    b = A.m(this, g);
                                return b = (m = {}, m[d] = b / 12, m[c] = b, m[u] = b / 3, m[l] = (y - _) / 6048e5, m[s] = (y - _) / 864e5, m[a] = y / n, m[o] = y / e, m[r] = y / t, m)[h] || y, f ? b : A.a(b)
                            }, _.daysInMonth = function() {
                                return this.endOf(c).$D
                            }, _.$locale = function() {
                                return v[this.$L]
                            }, _.locale = function(t, e) {
                                if (!t) return this.$L;
                                var n = this.clone(),
                                    i = T(t, e, !0);
                                return i && (n.$L = i), n
                            }, _.clone = function() {
                                return A.w(this.$d, this)
                            }, _.toDate = function() {
                                return new Date(this.valueOf())
                            }, _.toJSON = function() {
                                return this.isValid() ? this.toISOString() : null
                            }, _.toISOString = function() {
                                return this.$d.toISOString()
                            }, _.toString = function() {
                                return this.$d.toUTCString()
                            }, g
                        }(),
                        $ = E.prototype;
                    return S.prototype = $, [
                        ["$ms", i],
                        ["$s", r],
                        ["$m", o],
                        ["$H", a],
                        ["$W", s],
                        ["$M", c],
                        ["$y", d],
                        ["$D", p]
                    ].forEach((function(t) {
                        $[t[1]] = function(e) {
                            return this.$g(e, t[0], t[1])
                        }
                    })), S.extend = function(t, e) {
                        return t.$i || (t(e, E, S), t.$i = !0), S
                    }, S.locale = T, S.isDayjs = w, S.unix = function(t) {
                        return S(1e3 * t)
                    }, S.en = v[b], S.Ls = v, S.p = {}, S
                }()
            },
            522: function(t) {
                t.exports = function() {
                    "use strict";
                    var t, e, n = 1e3,
                        i = 6e4,
                        r = 36e5,
                        o = 864e5,
                        a = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        s = 31536e6,
                        l = 2592e6,
                        c = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
                        u = {
                            years: s,
                            months: l,
                            days: o,
                            hours: r,
                            minutes: i,
                            seconds: n,
                            milliseconds: 1,
                            weeks: 6048e5
                        },
                        d = function(t) {
                            return t instanceof y
                        },
                        p = function(t, e, n) {
                            return new y(t, n, e.$l)
                        },
                        f = function(t) {
                            return e.p(t) + "s"
                        },
                        m = function(t) {
                            return t < 0
                        },
                        h = function(t) {
                            return m(t) ? Math.ceil(t) : Math.floor(t)
                        },
                        g = function(t) {
                            return Math.abs(t)
                        },
                        _ = function(t, e) {
                            return t ? m(t) ? {
                                negative: !0,
                                format: "" + g(t) + e
                            } : {
                                negative: !1,
                                format: "" + t + e
                            } : {
                                negative: !1,
                                format: ""
                            }
                        },
                        y = function() {
                            function m(t, e, n) {
                                var i = this;
                                if (this.$d = {}, this.$l = n, void 0 === t && (this.$ms = 0, this.parseFromMilliseconds()), e) return p(t * u[f(e)], this);
                                if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this;
                                if ("object" == typeof t) return Object.keys(t).forEach((function(e) {
                                    i.$d[f(e)] = t[e]
                                })), this.calMilliseconds(), this;
                                if ("string" == typeof t) {
                                    var r = t.match(c);
                                    if (r) {
                                        var o = r.slice(2).map((function(t) {
                                            return Number(t)
                                        }));
                                        return this.$d.years = o[0], this.$d.months = o[1], this.$d.weeks = o[2], this.$d.days = o[3], this.$d.hours = o[4], this.$d.minutes = o[5], this.$d.seconds = o[6], this.calMilliseconds(), this
                                    }
                                }
                                return this
                            }
                            var g = m.prototype;
                            return g.calMilliseconds = function() {
                                var t = this;
                                this.$ms = Object.keys(this.$d).reduce((function(e, n) {
                                    return e + (t.$d[n] || 0) * u[n]
                                }), 0)
                            }, g.parseFromMilliseconds = function() {
                                var t = this.$ms;
                                this.$d.years = h(t / s), t %= s, this.$d.months = h(t / l), t %= l, this.$d.days = h(t / o), t %= o, this.$d.hours = h(t / r), t %= r, this.$d.minutes = h(t / i), t %= i, this.$d.seconds = h(t / n), t %= n, this.$d.milliseconds = t
                            }, g.toISOString = function() {
                                var t = _(this.$d.years, "Y"),
                                    e = _(this.$d.months, "M"),
                                    n = +this.$d.days || 0;
                                this.$d.weeks && (n += 7 * this.$d.weeks);
                                var i = _(n, "D"),
                                    r = _(this.$d.hours, "H"),
                                    o = _(this.$d.minutes, "M"),
                                    a = this.$d.seconds || 0;
                                this.$d.milliseconds && (a += this.$d.milliseconds / 1e3);
                                var s = _(a, "S"),
                                    l = t.negative || e.negative || i.negative || r.negative || o.negative || s.negative,
                                    c = r.format || o.format || s.format ? "T" : "",
                                    u = (l ? "-" : "") + "P" + t.format + e.format + i.format + c + r.format + o.format + s.format;
                                return "P" === u || "-P" === u ? "P0D" : u
                            }, g.toJSON = function() {
                                return this.toISOString()
                            }, g.format = function(t) {
                                var n = t || "YYYY-MM-DDTHH:mm:ss",
                                    i = {
                                        Y: this.$d.years,
                                        YY: e.s(this.$d.years, 2, "0"),
                                        YYYY: e.s(this.$d.years, 4, "0"),
                                        M: this.$d.months,
                                        MM: e.s(this.$d.months, 2, "0"),
                                        D: this.$d.days,
                                        DD: e.s(this.$d.days, 2, "0"),
                                        H: this.$d.hours,
                                        HH: e.s(this.$d.hours, 2, "0"),
                                        m: this.$d.minutes,
                                        mm: e.s(this.$d.minutes, 2, "0"),
                                        s: this.$d.seconds,
                                        ss: e.s(this.$d.seconds, 2, "0"),
                                        SSS: e.s(this.$d.milliseconds, 3, "0")
                                    };
                                return n.replace(a, (function(t, e) {
                                    return e || String(i[t])
                                }))
                            }, g.as = function(t) {
                                return this.$ms / u[f(t)]
                            }, g.get = function(t) {
                                var e = this.$ms,
                                    n = f(t);
                                return "milliseconds" === n ? e %= 1e3 : e = "weeks" === n ? h(e / u[n]) : this.$d[n], 0 === e ? 0 : e
                            }, g.add = function(t, e, n) {
                                var i;
                                return i = e ? t * u[f(e)] : d(t) ? t.$ms : p(t, this).$ms, p(this.$ms + i * (n ? -1 : 1), this)
                            }, g.subtract = function(t, e) {
                                return this.add(t, e, !0)
                            }, g.locale = function(t) {
                                var e = this.clone();
                                return e.$l = t, e
                            }, g.clone = function() {
                                return p(this.$ms, this)
                            }, g.humanize = function(e) {
                                return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
                            }, g.milliseconds = function() {
                                return this.get("milliseconds")
                            }, g.asMilliseconds = function() {
                                return this.as("milliseconds")
                            }, g.seconds = function() {
                                return this.get("seconds")
                            }, g.asSeconds = function() {
                                return this.as("seconds")
                            }, g.minutes = function() {
                                return this.get("minutes")
                            }, g.asMinutes = function() {
                                return this.as("minutes")
                            }, g.hours = function() {
                                return this.get("hours")
                            }, g.asHours = function() {
                                return this.as("hours")
                            }, g.days = function() {
                                return this.get("days")
                            }, g.asDays = function() {
                                return this.as("days")
                            }, g.weeks = function() {
                                return this.get("weeks")
                            }, g.asWeeks = function() {
                                return this.as("weeks")
                            }, g.months = function() {
                                return this.get("months")
                            }, g.asMonths = function() {
                                return this.as("months")
                            }, g.years = function() {
                                return this.get("years")
                            }, g.asYears = function() {
                                return this.as("years")
                            }, m
                        }();
                    return function(n, i, r) {
                        t = r, e = r().$utils(), r.duration = function(t, e) {
                            var n = r.locale();
                            return p(t, {
                                $l: n
                            }, e)
                        }, r.isDuration = d;
                        var o = i.prototype.add,
                            a = i.prototype.subtract;
                        i.prototype.add = function(t, e) {
                            return d(t) && (t = t.asMilliseconds()), o.bind(this)(t, e)
                        }, i.prototype.subtract = function(t, e) {
                            return d(t) && (t = t.asMilliseconds()), a.bind(this)(t, e)
                        }
                    }
                }()
            },
            569: function(t) {
                t.exports = function() {
                    "use strict";
                    var t = {
                            year: 0,
                            month: 1,
                            day: 2,
                            hour: 3,
                            minute: 4,
                            second: 5
                        },
                        e = {};
                    return function(n, i, r) {
                        var o, a = function(t, n, i) {
                                void 0 === i && (i = {});
                                var r = new Date(t);
                                return function(t, n) {
                                    void 0 === n && (n = {});
                                    var i = n.timeZoneName || "short",
                                        r = t + "|" + i,
                                        o = e[r];
                                    return o || (o = new Intl.DateTimeFormat("en-US", {
                                        hour12: !1,
                                        timeZone: t,
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        timeZoneName: i
                                    }), e[r] = o), o
                                }(n, i).formatToParts(r)
                            },
                            s = function(e, n) {
                                for (var i = a(e, n), o = [], s = 0; s < i.length; s += 1) {
                                    var l = i[s],
                                        c = l.type,
                                        u = l.value,
                                        d = t[c];
                                    d >= 0 && (o[d] = parseInt(u, 10))
                                }
                                var p = o[3],
                                    f = 24 === p ? 0 : p,
                                    m = o[0] + "-" + o[1] + "-" + o[2] + " " + f + ":" + o[4] + ":" + o[5] + ":000",
                                    h = +e;
                                return (r.utc(m).valueOf() - (h -= h % 1e3)) / 6e4
                            },
                            l = i.prototype;
                        l.tz = function(t, e) {
                            void 0 === t && (t = o);
                            var n = this.utcOffset(),
                                i = this.toDate(),
                                a = i.toLocaleString("en-US", {
                                    timeZone: t
                                }),
                                s = Math.round((i - new Date(a)) / 1e3 / 60),
                                l = r(a).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i.getTimezoneOffset() / 15) - s, !0);
                            if (e) {
                                var c = l.utcOffset();
                                l = l.add(n - c, "minute")
                            }
                            return l.$x.$timezone = t, l
                        }, l.offsetName = function(t) {
                            var e = this.$x.$timezone || r.tz.guess(),
                                n = a(this.valueOf(), e, {
                                    timeZoneName: t
                                }).find((function(t) {
                                    return "timezonename" === t.type.toLowerCase()
                                }));
                            return n && n.value
                        };
                        var c = l.startOf;
                        l.startOf = function(t, e) {
                            if (!this.$x || !this.$x.$timezone) return c.call(this, t, e);
                            var n = r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
                            return c.call(n, t, e).tz(this.$x.$timezone, !0)
                        }, r.tz = function(t, e, n) {
                            var i = n && e,
                                a = n || e || o,
                                l = s(+r(), a);
                            if ("string" != typeof t) return r(t).tz(a);
                            var c = function(t, e, n) {
                                    var i = t - 60 * e * 1e3,
                                        r = s(i, n);
                                    if (e === r) return [i, e];
                                    var o = s(i -= 60 * (r - e) * 1e3, n);
                                    return r === o ? [i, r] : [t - 60 * Math.min(r, o) * 1e3, Math.max(r, o)]
                                }(r.utc(t, i).valueOf(), l, a),
                                u = c[0],
                                d = c[1],
                                p = r(u).utcOffset(d);
                            return p.$x.$timezone = a, p
                        }, r.tz.guess = function() {
                            return Intl.DateTimeFormat().resolvedOptions().timeZone
                        }, r.tz.setDefault = function(t) {
                            o = t
                        }
                    }
                }()
            },
            826: function(t) {
                t.exports = function() {
                    "use strict";
                    var t = "minute",
                        e = /[+-]\d\d(?::?\d\d)?/g,
                        n = /([+-]|\d\d)/g;
                    return function(i, r, o) {
                        var a = r.prototype;
                        o.utc = function(t) {
                            return new r({
                                date: t,
                                utc: !0,
                                args: arguments
                            })
                        }, a.utc = function(e) {
                            var n = o(this.toDate(), {
                                locale: this.$L,
                                utc: !0
                            });
                            return e ? n.add(this.utcOffset(), t) : n
                        }, a.local = function() {
                            return o(this.toDate(), {
                                locale: this.$L,
                                utc: !1
                            })
                        };
                        var s = a.parse;
                        a.parse = function(t) {
                            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), s.call(this, t)
                        };
                        var l = a.init;
                        a.init = function() {
                            if (this.$u) {
                                var t = this.$d;
                                this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
                            } else l.call(this)
                        };
                        var c = a.utcOffset;
                        a.utcOffset = function(i, r) {
                            var o = this.$utils().u;
                            if (o(i)) return this.$u ? 0 : o(this.$offset) ? c.call(this) : this.$offset;
                            if ("string" == typeof i && null === (i = function(t) {
                                    void 0 === t && (t = "");
                                    var i = t.match(e);
                                    if (!i) return null;
                                    var r = ("" + i[0]).match(n) || ["-", 0, 0],
                                        o = r[0],
                                        a = 60 * +r[1] + +r[2];
                                    return 0 === a ? 0 : "+" === o ? a : -a
                                }(i))) return this;
                            var a = Math.abs(i) <= 16 ? 60 * i : i,
                                s = this;
                            if (r) return s.$offset = a, s.$u = 0 === i, s;
                            if (0 !== i) {
                                var l = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                                (s = this.local().add(a + l, t)).$offset = a, s.$x.$localOffset = l
                            } else s = this.utc();
                            return s
                        };
                        var u = a.format;
                        a.format = function(t) {
                            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                            return u.call(this, e)
                        }, a.valueOf = function() {
                            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (new Date).getTimezoneOffset());
                            return this.$d.valueOf() - 6e4 * t
                        }, a.isUTC = function() {
                            return !!this.$u
                        }, a.toISOString = function() {
                            return this.toDate().toISOString()
                        }, a.toString = function() {
                            return this.toDate().toUTCString()
                        };
                        var d = a.toDate;
                        a.toDate = function(t) {
                            return "s" === t && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d.call(this)
                        };
                        var p = a.diff;
                        a.diff = function(t, e, n) {
                            if (t && this.$u === t.$u) return p.call(this, t, e, n);
                            var i = this.local(),
                                r = o(t).local();
                            return p.call(i, r, e, n)
                        }
                    }
                }()
            }
        },
        e = {};

    function n(i) {
        var r = e[i];
        if (void 0 !== r) return r.exports;
        var o = e[i] = {
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";
        var t = n(353),
            e = n.n(t),
            i = n(826),
            r = n.n(i),
            o = n(522),
            a = n.n(o),
            s = n(569),
            l = n.n(s);
        e().extend(r()), e().extend(a()), e().extend(l());
        const c = e(),
            u = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
            d = function(t) {
                const e = (t || "").split(":");
                return 2 == e.length ? {
                    hour: e[0],
                    minute: e[1]
                } : null
            },
            p = function(t) {
                const e = (t || "").split(":");
                if (e.length >= 2) {
                    return {
                        hours: parseInt(e[0], 10),
                        minutes: parseInt(e[1], 10)
                    }
                }
                return null
            },
            f = function(t, e) {
                const n = p(t),
                    i = p(e),
                    r = n.minutes + 60 * n.hours,
                    o = i.minutes + 60 * i.hours;
                return r === o ? 0 : r > o ? 1 : -1
            },
            m = function(t, e, n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                var r = "expires=" + i.toUTCString();
                document.cookie = t + "=" + e + ";" + r + ";path=/"
            },
            h = function(t) {
                for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                    for (var r = n[i];
                        " " == r.charAt(0);) r = r.substring(1);
                    if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
                }
                return ""
            },
            g = function(t, e) {
                let n;
                if ("ON" === t.isAlwaysAvailable) return "online";
                var i;
                i = e.timezone, n = /\d/.test(i) ? c().utcOffset(function(t) {
                    const e = t.split(":");
                    let n, i;
                    return 2 === e.length ? (n = parseInt(e[0]), i = parseInt(e[1])) : (n = parseInt(e[0]), i = 0), -1 !== t.indexOf("-") ? -(60 * Math.abs(n) + i) : 60 * n + i
                }(e.timezone)) : c(c()).tz(e.timezone);
                const r = u[n.get("day")],
                    o = t.daysOfWeekWorking[r];
                if ("OFF" === o.isWorkingOnDay) return t.dayOffsText;
                for (let i = 0; i < o.workHours.length; i++) {
                    const r = n.get("hour") + ":" + n.get("minute"),
                        l = o.workHours[i].startTime,
                        u = o.workHours[i].endTime;
                    if (-1 === f(r, l)) {
                        const i = p(l),
                            r = (a = {
                                hour: i.hours,
                                minute: i.minutes
                            }, s = {
                                hour: n.get("hour"),
                                minute: n.get("minute")
                            }, 1e3 * (3600 * (a.hour - s.hour) + 60 * (a.minute - s.minute))),
                            o = c.duration(r),
                            u = d(e.options.display.time_symbols),
                            f = ` ${o.get("hours")}${u.hour}:${o.get("minutes")}${u.minute} `;
                        return t.willBeBackText.replace(/\[njwa_time_work\]/gi, f)
                    }
                    if (0 === f(r, l) || 0 === f(r, u)) return "online";
                    if (1 === f(r, l) && -1 === f(r, u)) return "online"
                }
                var a, s;
                return t.dayOffsText
            },
            _ = function(t, e) {
                if ("ON" == e.enabledFacebook || "ON" == e.enabledGoogle) {
                    var n = t.href,
                        i = n.indexOf("phone=") + 6,
                        r = n.indexOf("&text="); - 1 === r && (r = n.length);
                    var o = n.substring(i, r),
                        a = "NinjaTeam WhatsApp",
                        s = "Phone Number: " + o,
                        l = document.title;
                    if ("ON" === e.enabledFacebook && "undefined" != typeof fbq && fbq("trackCustom", "NinjaTeam WhatsApp", {
                            phone: o,
                            label: l
                        }), "ON" === e.enabledGoogle) {
                        if ("undefined" != typeof gtag) "ON" === e.enabledGoogleGA4 ? gtag("event", "NinjaTeam WhatsApp", {
                            number: o,
                            title: l,
                            url: window.location.href
                        }) : gtag("event", s, {
                            event_category: a,
                            event_label: l
                        });
                        else if ("undefined" != typeof ga && void 0 !== ga.getAll) {
                            ga.getAll()[0].send("event", a, s, l)
                        } else "undefined" != typeof __gaTracker && __gaTracker("send", "event", a, s, l);
                        "undefined" != typeof dataLayer && dataLayer.push({
                            event: "NinjaTeam WhatsApp",
                            number: o,
                            title: l,
                            url: window.location.href,
                            event_category: a,
                            event_label: l,
                            event_action: s
                        })
                    }
                }
            },
            {
                entries: y,
                setPrototypeOf: b,
                isFrozen: v,
                getPrototypeOf: w,
                getOwnPropertyDescriptor: T
            } = Object;
        let {
            freeze: S,
            seal: A,
            create: E
        } = Object, {
            apply: $,
            construct: x
        } = "undefined" != typeof Reflect && Reflect;
        S || (S = function(t) {
            return t
        }), A || (A = function(t) {
            return t
        }), $ || ($ = function(t, e, n) {
            return t.apply(e, n)
        }), x || (x = function(t, e) {
            return new t(...e)
        });
        const N = F(Array.prototype.forEach),
            M = F(Array.prototype.pop),
            D = F(Array.prototype.push),
            O = F(String.prototype.toLowerCase),
            k = F(String.prototype.toString),
            C = F(String.prototype.match),
            L = F(String.prototype.replace),
            R = F(String.prototype.indexOf),
            z = F(String.prototype.trim),
            I = F(Object.prototype.hasOwnProperty),
            H = F(RegExp.prototype.test),
            P = (U = TypeError, function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return x(U, e)
            });
        var U;

        function F(t) {
            return function(e) {
                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                return $(t, e, i)
            }
        }

        function Y(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O;
            b && b(t, null);
            let i = e.length;
            for (; i--;) {
                let r = e[i];
                if ("string" == typeof r) {
                    const t = n(r);
                    t !== r && (v(e) || (e[i] = t), r = t)
                }
                t[r] = !0
            }
            return t
        }

        function j(t) {
            for (let e = 0; e < t.length; e++) {
                I(t, e) || (t[e] = null)
            }
            return t
        }

        function W(t) {
            const e = E(null);
            for (const [n, i] of y(t)) {
                I(t, n) && (Array.isArray(i) ? e[n] = j(i) : i && "object" == typeof i && i.constructor === Object ? e[n] = W(i) : e[n] = i)
            }
            return e
        }

        function G(t, e) {
            for (; null !== t;) {
                const n = T(t, e);
                if (n) {
                    if (n.get) return F(n.get);
                    if ("function" == typeof n.value) return F(n.value)
                }
                t = w(t)
            }
            return function() {
                return null
            }
        }
        const B = S(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            q = S(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
            Z = S(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            X = S(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
            V = S(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
            J = S(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
            K = S(["#text"]),
            Q = S(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
            tt = S(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            et = S(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            nt = S(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            it = A(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
            rt = A(/<%[\w\W]*|[\w\W]*%>/gm),
            ot = A(/\$\{[\w\W]*}/gm),
            at = A(/^data-[\-\w.\u00B7-\uFFFF]+$/),
            st = A(/^aria-[\-\w]+$/),
            lt = A(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            ct = A(/^(?:\w+script|data):/i),
            ut = A(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            dt = A(/^html$/i),
            pt = A(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var ft = Object.freeze({
            __proto__: null,
            ARIA_ATTR: st,
            ATTR_WHITESPACE: ut,
            CUSTOM_ELEMENT: pt,
            DATA_ATTR: at,
            DOCTYPE_NAME: dt,
            ERB_EXPR: rt,
            IS_ALLOWED_URI: lt,
            IS_SCRIPT_OR_DATA: ct,
            MUSTACHE_EXPR: it,
            TMPLIT_EXPR: ot
        });
        const mt = 1,
            ht = 3,
            gt = 7,
            _t = 8,
            yt = 9,
            bt = function() {
                return "undefined" == typeof window ? null : window
            };
        var vt = function t() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt();
            const n = e => t(e);
            if (n.version = "3.2.3", n.removed = [], !e || !e.document || e.document.nodeType !== yt) return n.isSupported = !1, n;
            let {
                document: i
            } = e;
            const r = i,
                o = r.currentScript,
                {
                    DocumentFragment: a,
                    HTMLTemplateElement: s,
                    Node: l,
                    Element: c,
                    NodeFilter: u,
                    NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
                    HTMLFormElement: p,
                    DOMParser: f,
                    trustedTypes: m
                } = e,
                h = c.prototype,
                g = G(h, "cloneNode"),
                _ = G(h, "remove"),
                b = G(h, "nextSibling"),
                v = G(h, "childNodes"),
                w = G(h, "parentNode");
            if ("function" == typeof s) {
                const t = i.createElement("template");
                t.content && t.content.ownerDocument && (i = t.content.ownerDocument)
            }
            let T, A = "";
            const {
                implementation: $,
                createNodeIterator: x,
                createDocumentFragment: U,
                getElementsByTagName: F
            } = i, {
                importNode: j
            } = r;
            let it = {
                afterSanitizeAttributes: [],
                afterSanitizeElements: [],
                afterSanitizeShadowDOM: [],
                beforeSanitizeAttributes: [],
                beforeSanitizeElements: [],
                beforeSanitizeShadowDOM: [],
                uponSanitizeAttribute: [],
                uponSanitizeElement: [],
                uponSanitizeShadowNode: []
            };
            n.isSupported = "function" == typeof y && "function" == typeof w && $ && void 0 !== $.createHTMLDocument;
            const {
                MUSTACHE_EXPR: rt,
                ERB_EXPR: ot,
                TMPLIT_EXPR: at,
                DATA_ATTR: st,
                ARIA_ATTR: ct,
                IS_SCRIPT_OR_DATA: ut,
                ATTR_WHITESPACE: pt,
                CUSTOM_ELEMENT: vt
            } = ft;
            let {
                IS_ALLOWED_URI: wt
            } = ft, Tt = null;
            const St = Y({}, [...B, ...q, ...Z, ...V, ...K]);
            let At = null;
            const Et = Y({}, [...Q, ...tt, ...et, ...nt]);
            let $t = Object.seal(E(null, {
                    tagNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    allowCustomizedBuiltInElements: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: !1
                    }
                })),
                xt = null,
                Nt = null,
                Mt = !0,
                Dt = !0,
                Ot = !1,
                kt = !0,
                Ct = !1,
                Lt = !0,
                Rt = !1,
                zt = !1,
                It = !1,
                Ht = !1,
                Pt = !1,
                Ut = !1,
                Ft = !0,
                Yt = !1,
                jt = !0,
                Wt = !1,
                Gt = {},
                Bt = null;
            const qt = Y({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
            let Zt = null;
            const Xt = Y({}, ["audio", "video", "img", "source", "image", "track"]);
            let Vt = null;
            const Jt = Y({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                Kt = "http://www.w3.org/1998/Math/MathML",
                Qt = "http://www.w3.org/2000/svg",
                te = "http://www.w3.org/1999/xhtml";
            let ee = te,
                ne = !1,
                ie = null;
            const re = Y({}, [Kt, Qt, te], k);
            let oe = Y({}, ["mi", "mo", "mn", "ms", "mtext"]),
                ae = Y({}, ["annotation-xml"]);
            const se = Y({}, ["title", "style", "font", "a", "script"]);
            let le = null;
            const ce = ["application/xhtml+xml", "text/html"];
            let ue = null,
                de = null;
            const pe = i.createElement("form"),
                fe = function(t) {
                    return t instanceof RegExp || t instanceof Function
                },
                me = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!de || de !== t) {
                        if (t && "object" == typeof t || (t = {}), t = W(t), le = -1 === ce.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ue = "application/xhtml+xml" === le ? k : O, Tt = I(t, "ALLOWED_TAGS") ? Y({}, t.ALLOWED_TAGS, ue) : St, At = I(t, "ALLOWED_ATTR") ? Y({}, t.ALLOWED_ATTR, ue) : Et, ie = I(t, "ALLOWED_NAMESPACES") ? Y({}, t.ALLOWED_NAMESPACES, k) : re, Vt = I(t, "ADD_URI_SAFE_ATTR") ? Y(W(Jt), t.ADD_URI_SAFE_ATTR, ue) : Jt, Zt = I(t, "ADD_DATA_URI_TAGS") ? Y(W(Xt), t.ADD_DATA_URI_TAGS, ue) : Xt, Bt = I(t, "FORBID_CONTENTS") ? Y({}, t.FORBID_CONTENTS, ue) : qt, xt = I(t, "FORBID_TAGS") ? Y({}, t.FORBID_TAGS, ue) : {}, Nt = I(t, "FORBID_ATTR") ? Y({}, t.FORBID_ATTR, ue) : {}, Gt = !!I(t, "USE_PROFILES") && t.USE_PROFILES, Mt = !1 !== t.ALLOW_ARIA_ATTR, Dt = !1 !== t.ALLOW_DATA_ATTR, Ot = t.ALLOW_UNKNOWN_PROTOCOLS || !1, kt = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, Ct = t.SAFE_FOR_TEMPLATES || !1, Lt = !1 !== t.SAFE_FOR_XML, Rt = t.WHOLE_DOCUMENT || !1, Ht = t.RETURN_DOM || !1, Pt = t.RETURN_DOM_FRAGMENT || !1, Ut = t.RETURN_TRUSTED_TYPE || !1, It = t.FORCE_BODY || !1, Ft = !1 !== t.SANITIZE_DOM, Yt = t.SANITIZE_NAMED_PROPS || !1, jt = !1 !== t.KEEP_CONTENT, Wt = t.IN_PLACE || !1, wt = t.ALLOWED_URI_REGEXP || lt, ee = t.NAMESPACE || te, oe = t.MATHML_TEXT_INTEGRATION_POINTS || oe, ae = t.HTML_INTEGRATION_POINTS || ae, $t = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && fe(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($t.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && fe(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($t.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && ($t.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ct && (Dt = !1), Pt && (Ht = !0), Gt && (Tt = Y({}, K), At = [], !0 === Gt.html && (Y(Tt, B), Y(At, Q)), !0 === Gt.svg && (Y(Tt, q), Y(At, tt), Y(At, nt)), !0 === Gt.svgFilters && (Y(Tt, Z), Y(At, tt), Y(At, nt)), !0 === Gt.mathMl && (Y(Tt, V), Y(At, et), Y(At, nt))), t.ADD_TAGS && (Tt === St && (Tt = W(Tt)), Y(Tt, t.ADD_TAGS, ue)), t.ADD_ATTR && (At === Et && (At = W(At)), Y(At, t.ADD_ATTR, ue)), t.ADD_URI_SAFE_ATTR && Y(Vt, t.ADD_URI_SAFE_ATTR, ue), t.FORBID_CONTENTS && (Bt === qt && (Bt = W(Bt)), Y(Bt, t.FORBID_CONTENTS, ue)), jt && (Tt["#text"] = !0), Rt && Y(Tt, ["html", "head", "body"]), Tt.table && (Y(Tt, ["tbody"]), delete xt.tbody), t.TRUSTED_TYPES_POLICY) {
                            if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML) throw P('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                            if ("function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL) throw P('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                            T = t.TRUSTED_TYPES_POLICY, A = T.createHTML("")
                        } else void 0 === T && (T = function(t, e) {
                            if ("object" != typeof t || "function" != typeof t.createPolicy) return null;
                            let n = null;
                            const i = "data-tt-policy-suffix";
                            e && e.hasAttribute(i) && (n = e.getAttribute(i));
                            const r = "dompurify" + (n ? "#" + n : "");
                            try {
                                return t.createPolicy(r, {
                                    createHTML: t => t,
                                    createScriptURL: t => t
                                })
                            } catch (t) {
                                return console.warn("TrustedTypes policy " + r + " could not be created."), null
                            }
                        }(m, o)), null !== T && "string" == typeof A && (A = T.createHTML(""));
                        S && S(t), de = t
                    }
                },
                he = Y({}, [...q, ...Z, ...X]),
                ge = Y({}, [...V, ...J]),
                _e = function(t) {
                    D(n.removed, {
                        element: t
                    });
                    try {
                        w(t).removeChild(t)
                    } catch (e) {
                        _(t)
                    }
                },
                ye = function(t, e) {
                    try {
                        D(n.removed, {
                            attribute: e.getAttributeNode(t),
                            from: e
                        })
                    } catch (t) {
                        D(n.removed, {
                            attribute: null,
                            from: e
                        })
                    }
                    if (e.removeAttribute(t), "is" === t)
                        if (Ht || Pt) try {
                            _e(e)
                        } catch (t) {} else try {
                            e.setAttribute(t, "")
                        } catch (t) {}
                },
                be = function(t) {
                    let e = null,
                        n = null;
                    if (It) t = "<remove></remove>" + t;
                    else {
                        const e = C(t, /^[\r\n\t ]+/);
                        n = e && e[0]
                    }
                    "application/xhtml+xml" === le && ee === te && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
                    const r = T ? T.createHTML(t) : t;
                    if (ee === te) try {
                        e = (new f).parseFromString(r, le)
                    } catch (t) {}
                    if (!e || !e.documentElement) {
                        e = $.createDocument(ee, "template", null);
                        try {
                            e.documentElement.innerHTML = ne ? A : r
                        } catch (t) {}
                    }
                    const o = e.body || e.documentElement;
                    return t && n && o.insertBefore(i.createTextNode(n), o.childNodes[0] || null), ee === te ? F.call(e, Rt ? "html" : "body")[0] : Rt ? e.documentElement : o
                },
                ve = function(t) {
                    return x.call(t.ownerDocument || t, t, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION, null)
                },
                we = function(t) {
                    return t instanceof p && ("string" != typeof t.nodeName || "string" != typeof t.textContent || "function" != typeof t.removeChild || !(t.attributes instanceof d) || "function" != typeof t.removeAttribute || "function" != typeof t.setAttribute || "string" != typeof t.namespaceURI || "function" != typeof t.insertBefore || "function" != typeof t.hasChildNodes)
                },
                Te = function(t) {
                    return "function" == typeof l && t instanceof l
                };

            function Se(t, e, i) {
                N(t, (t => {
                    t.call(n, e, i, de)
                }))
            }
            const Ae = function(t) {
                    let e = null;
                    if (Se(it.beforeSanitizeElements, t, null), we(t)) return _e(t), !0;
                    const i = ue(t.nodeName);
                    if (Se(it.uponSanitizeElement, t, {
                            tagName: i,
                            allowedTags: Tt
                        }), t.hasChildNodes() && !Te(t.firstElementChild) && H(/<[/\w]/g, t.innerHTML) && H(/<[/\w]/g, t.textContent)) return _e(t), !0;
                    if (t.nodeType === gt) return _e(t), !0;
                    if (Lt && t.nodeType === _t && H(/<[/\w]/g, t.data)) return _e(t), !0;
                    if (!Tt[i] || xt[i]) {
                        if (!xt[i] && $e(i)) {
                            if ($t.tagNameCheck instanceof RegExp && H($t.tagNameCheck, i)) return !1;
                            if ($t.tagNameCheck instanceof Function && $t.tagNameCheck(i)) return !1
                        }
                        if (jt && !Bt[i]) {
                            const e = w(t) || t.parentNode,
                                n = v(t) || t.childNodes;
                            if (n && e) {
                                for (let i = n.length - 1; i >= 0; --i) {
                                    const r = g(n[i], !0);
                                    r.__removalCount = (t.__removalCount || 0) + 1, e.insertBefore(r, b(t))
                                }
                            }
                        }
                        return _e(t), !0
                    }
                    return t instanceof c && ! function(t) {
                        let e = w(t);
                        e && e.tagName || (e = {
                            namespaceURI: ee,
                            tagName: "template"
                        });
                        const n = O(t.tagName),
                            i = O(e.tagName);
                        return !!ie[t.namespaceURI] && (t.namespaceURI === Qt ? e.namespaceURI === te ? "svg" === n : e.namespaceURI === Kt ? "svg" === n && ("annotation-xml" === i || oe[i]) : Boolean(he[n]) : t.namespaceURI === Kt ? e.namespaceURI === te ? "math" === n : e.namespaceURI === Qt ? "math" === n && ae[i] : Boolean(ge[n]) : t.namespaceURI === te ? !(e.namespaceURI === Qt && !ae[i]) && !(e.namespaceURI === Kt && !oe[i]) && !ge[n] && (se[n] || !he[n]) : !("application/xhtml+xml" !== le || !ie[t.namespaceURI]))
                    }(t) ? (_e(t), !0) : "noscript" !== i && "noembed" !== i && "noframes" !== i || !H(/<\/no(script|embed|frames)/i, t.innerHTML) ? (Ct && t.nodeType === ht && (e = t.textContent, N([rt, ot, at], (t => {
                        e = L(e, t, " ")
                    })), t.textContent !== e && (D(n.removed, {
                        element: t.cloneNode()
                    }), t.textContent = e)), Se(it.afterSanitizeElements, t, null), !1) : (_e(t), !0)
                },
                Ee = function(t, e, n) {
                    if (Ft && ("id" === e || "name" === e) && (n in i || n in pe)) return !1;
                    if (Dt && !Nt[e] && H(st, e));
                    else if (Mt && H(ct, e));
                    else if (!At[e] || Nt[e]) {
                        if (!($e(t) && ($t.tagNameCheck instanceof RegExp && H($t.tagNameCheck, t) || $t.tagNameCheck instanceof Function && $t.tagNameCheck(t)) && ($t.attributeNameCheck instanceof RegExp && H($t.attributeNameCheck, e) || $t.attributeNameCheck instanceof Function && $t.attributeNameCheck(e)) || "is" === e && $t.allowCustomizedBuiltInElements && ($t.tagNameCheck instanceof RegExp && H($t.tagNameCheck, n) || $t.tagNameCheck instanceof Function && $t.tagNameCheck(n)))) return !1
                    } else if (Vt[e]);
                    else if (H(wt, L(n, pt, "")));
                    else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== R(n, "data:") || !Zt[t]) {
                        if (Ot && !H(ut, L(n, pt, "")));
                        else if (n) return !1
                    }
                    return !0
                },
                $e = function(t) {
                    return "annotation-xml" !== t && C(t, vt)
                },
                xe = function(t) {
                    Se(it.beforeSanitizeAttributes, t, null);
                    const {
                        attributes: e
                    } = t;
                    if (!e || we(t)) return;
                    const i = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: At,
                        forceKeepAttr: void 0
                    };
                    let r = e.length;
                    for (; r--;) {
                        const o = e[r],
                            {
                                name: a,
                                namespaceURI: s,
                                value: l
                            } = o,
                            c = ue(a);
                        let u = "value" === a ? l : z(l);
                        if (i.attrName = c, i.attrValue = u, i.keepAttr = !0, i.forceKeepAttr = void 0, Se(it.uponSanitizeAttribute, t, i), u = i.attrValue, !Yt || "id" !== c && "name" !== c || (ye(a, t), u = "user-content-" + u), Lt && H(/((--!?|])>)|<\/(style|title)/i, u)) {
                            ye(a, t);
                            continue
                        }
                        if (i.forceKeepAttr) continue;
                        if (ye(a, t), !i.keepAttr) continue;
                        if (!kt && H(/\/>/i, u)) {
                            ye(a, t);
                            continue
                        }
                        Ct && N([rt, ot, at], (t => {
                            u = L(u, t, " ")
                        }));
                        const d = ue(t.nodeName);
                        if (Ee(d, c, u)) {
                            if (T && "object" == typeof m && "function" == typeof m.getAttributeType)
                                if (s);
                                else switch (m.getAttributeType(d, c)) {
                                    case "TrustedHTML":
                                        u = T.createHTML(u);
                                        break;
                                    case "TrustedScriptURL":
                                        u = T.createScriptURL(u)
                                }
                            try {
                                s ? t.setAttributeNS(s, a, u) : t.setAttribute(a, u), we(t) ? _e(t) : M(n.removed)
                            } catch (t) {}
                        }
                    }
                    Se(it.afterSanitizeAttributes, t, null)
                },
                Ne = function t(e) {
                    let n = null;
                    const i = ve(e);
                    for (Se(it.beforeSanitizeShadowDOM, e, null); n = i.nextNode();) Se(it.uponSanitizeShadowNode, n, null), Ae(n), xe(n), n.content instanceof a && t(n.content);
                    Se(it.afterSanitizeShadowDOM, e, null)
                };
            return n.sanitize = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = null,
                    o = null,
                    s = null,
                    c = null;
                if (ne = !t, ne && (t = "\x3c!--\x3e"), "string" != typeof t && !Te(t)) {
                    if ("function" != typeof t.toString) throw P("toString is not a function");
                    if ("string" != typeof(t = t.toString())) throw P("dirty is not a string, aborting")
                }
                if (!n.isSupported) return t;
                if (zt || me(e), n.removed = [], "string" == typeof t && (Wt = !1), Wt) {
                    if (t.nodeName) {
                        const e = ue(t.nodeName);
                        if (!Tt[e] || xt[e]) throw P("root node is forbidden and cannot be sanitized in-place")
                    }
                } else if (t instanceof l) i = be("\x3c!----\x3e"), o = i.ownerDocument.importNode(t, !0), o.nodeType === mt && "BODY" === o.nodeName || "HTML" === o.nodeName ? i = o : i.appendChild(o);
                else {
                    if (!Ht && !Ct && !Rt && -1 === t.indexOf("<")) return T && Ut ? T.createHTML(t) : t;
                    if (i = be(t), !i) return Ht ? null : Ut ? A : ""
                }
                i && It && _e(i.firstChild);
                const u = ve(Wt ? t : i);
                for (; s = u.nextNode();) Ae(s), xe(s), s.content instanceof a && Ne(s.content);
                if (Wt) return t;
                if (Ht) {
                    if (Pt)
                        for (c = U.call(i.ownerDocument); i.firstChild;) c.appendChild(i.firstChild);
                    else c = i;
                    return (At.shadowroot || At.shadowrootmode) && (c = j.call(r, c, !0)), c
                }
                let d = Rt ? i.outerHTML : i.innerHTML;
                return Rt && Tt["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && H(dt, i.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + d), Ct && N([rt, ot, at], (t => {
                    d = L(d, t, " ")
                })), T && Ut ? T.createHTML(d) : d
            }, n.setConfig = function() {
                me(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), zt = !0
            }, n.clearConfig = function() {
                de = null, zt = !1
            }, n.isValidAttribute = function(t, e, n) {
                de || me({});
                const i = ue(t),
                    r = ue(e);
                return Ee(i, r, n)
            }, n.addHook = function(t, e) {
                "function" == typeof e && D(it[t], e)
            }, n.removeHook = function(t) {
                return M(it[t])
            }, n.removeHooks = function(t) {
                it[t] = []
            }, n.removeAllHooks = function() {
                it = {
                    afterSanitizeAttributes: [],
                    afterSanitizeElements: [],
                    afterSanitizeShadowDOM: [],
                    beforeSanitizeAttributes: [],
                    beforeSanitizeElements: [],
                    beforeSanitizeShadowDOM: [],
                    uponSanitizeAttribute: [],
                    uponSanitizeElement: [],
                    uponSanitizeShadowNode: []
                }
            }, n
        }();
        void 0 === String.prototype.njtReplaceAll && (String.prototype.njtReplaceAll = function(t, e) {
            return this.replace(new RegExp(t, "g"), (() => e))
        });
        const wt = (St = !1, Tt = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(Tt) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(Tt.substr(0, 4))) && (St = !0), St);
        var Tt, St;
        const At = function(t, e) {
            let n = "",
                i = t.predefinedText;
            if (i = i.njtReplaceAll(/\[njwa_page_title\]/gi, encodeURIComponent(document.title)), i = i.njtReplaceAll(/\[njwa_page_url\]/gi, window.location.href), i = i.njtReplaceAll(/\n/gi, "%0A"), -1 !== t.number.indexOf("chat.whatsapp.com")) n += t.number;
            else {
                let r = e.urlSettings[wt ? "onMobile" : "onDesktop"];
                if (r || (r = "api"), "protocol" === r) return "whatsapp://send?phone=" + t.number.replace(/[^0-9]/gi, "");
                n += "https://" + r + ".whatsapp.com/send?phone=", n += t.number.replace(/[^0-9]/gi, ""), n += t.predefinedText ? "&text=" + i : ""
            }
            return n
        };
        window.njtWhatsApp = {
            createButton: function(t, e) {
                const n = Object.assign({}, e),
                    i = n.info,
                    r = g(i, n);
                let o = "";
                o += "round" == n.styles.type ? " wa__r_button" : " wa__sq_button", o += "online" == r ? " wa__stt_online" : " wa__stt_offline", o += n.avatar ? " wa__btn_w_img" : " wa__btn_w_icon", o += n.name ? "" : " wa__button_text_only";
                let a = At(i, n);
                const s = document.createElement("div");
                s.setAttribute("class", n.avatar ? "wa__cs_img" : "wa__btn_icon"), s.appendChild((() => {
                    if (n.avatar) {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_img_wrap"), t.setAttribute("style", `background: url(${n.avatar}) center center no-repeat; background-size: cover`), t
                    } {
                        const t = document.createElement("img");
                        return t.setAttribute("alt", "img"), t.setAttribute("src", n.defaultAvatar), t
                    }
                })());
                const l = document.createElement("div");
                l.setAttribute("class", "wa__btn_txt"), l.appendChild(n.name ? (() => {
                    const t = document.createElement("div");
                    return t.className = "wa__cs_info", t.appendChild((() => {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_name"), t.setAttribute("style", "online" == r ? `color: ${"#fff"==n.styles.textColor||"#ffffff"==n.styles.textColor?"#d5f0d9":n.styles.textColor}; opacity: ${"#fff"==n.styles.textColor||"#ffffff"==n.styles.textColor?1:.8}` : ""), t.innerHTML = vt.sanitize(n.name), t
                    })()), t.appendChild((() => {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_status"), t.innerHTML = "online" === r ? vt.sanitize(n.i18n.online) : vt.sanitize(n.i18n.offline), t
                    })()), t
                })() : document.createTextNode("")), l.appendChild((() => {
                    const t = document.createElement("div");
                    return t.setAttribute("class", "wa__btn_title"), t.setAttribute("style", "online" == r ? "color: " + n.styles.textColor : ""), t.innerHTML = vt.sanitize(n.styles.label), t
                })()), l.appendChild((() => {
                    if ("online" != r) {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__btn_status"), t.innerHTML = vt.sanitize(r), t
                    }
                    return document.createTextNode("")
                })());
                const c = document.createElement("div");
                c.setAttribute("class", "nta-wa-gdpr"), c.appendChild((() => {
                    const t = document.createElement("input");
                    t.setAttribute("id", "nta-wa-gdpr"), t.setAttribute("type", "checkbox"), t.setAttribute("value", "accept"), t.onchange = function(t) {
                        if (t.target.checked && (m("nta-wa-gdpr", "accept", 30), "" != h("nta-wa-gdpr"))) {
                            const t = document.querySelectorAll(".nta-wa-gdpr");
                            c.style.opacity = 0, setTimeout((() => {
                                t.forEach((t => t.style.display = "none"))
                            }), 400);
                            document.querySelectorAll(".wa__popup_content_item").forEach((t => t.classList.remove("pointer-disable")))
                        }
                    };
                    const e = document.createElement("span");
                    e.appendChild(t), e.appendChild((() => {
                        const t = document.createElement("span");
                        return t.innerHTML = vt.sanitize(n.options.styles.gdprContent.njtReplaceAll(/\r\n\r\n/gm, "<br/>")), t
                    })());
                    const i = document.createElement("label");
                    return i.setAttribute("for", "nta-wa-gdpr"), i.appendChild(e), i
                })());
                const u = document.createElement("a");
                u.setAttribute("target", "ON" == n.urlSettings.openInNewTab ? "_blank" : "_self"), u.setAttribute("href", a), u.setAttribute("rel", "nofollow noopener noreferrer"), u.setAttribute("class", "wa__button" + o), u.onclick = function(t) {
                    if (n.gdprStatus && !h("nta-wa-gdpr")) return t.preventDefault(), c.style.background = "red", void(c.style.color = "#fff");
                    _(this, {
                        enabledFacebook: n.options.analytics.enabledFacebook,
                        enabledGoogle: n.options.analytics.enabledGoogle,
                        enabledGoogleGA4: n.options.analytics.enabledGoogleGA4
                    })
                }, "online" == r && (u.style.backgroundColor = n.styles.backgroundColor), u.appendChild(s), u.appendChild(l), t.appendChild(u), n.gdprStatus && "accept" != h("nta-wa-gdpr") && t.appendChild(c), t._isWaButton = !0
            },
            createWidget: function(t, e) {
                const n = Object.assign({
                    accounts: [],
                    timezone: "",
                    defaultAvatar: "",
                    gdprStatus: !1,
                    options: {
                        display: {},
                        styles: {},
                        analytics: {}
                    },
                    urlSettings: {}
                }, e);
                if ("OFF" == n.options.display.showOnDesktop && !wt) return;
                if ("OFF" == n.options.display.showOnMobile && wt) return;
                const i = n.options.styles;
                t.classList.add("wa__widget_container");
                const r = document.createElement("div");
                r.setAttribute("class", "wa__btn_popup_txt"), r.appendChild((() => {
                    const t = document.createElement("span");
                    return t.innerHTML = vt.sanitize(i.btnLabel), t
                })()), r.style.display = "ON" == i.isShowBtnLabel ? "block" : "none", r.style.left = "left" == i.btnPosition ? "100%" : "unset", r.style.right = "right" == i.btnPosition ? "100%" : "unset", r.style.marginRight = "right" == i.btnPosition ? "7px" : "0px", r.style.marginLeft = "left" == i.btnPosition ? "7px" : "0px", r.style.width = i.btnLabelWidth + "px";
                const o = document.createElement("div");
                o.setAttribute("class", "wa__btn_popup_icon"), o.style.background = i.backgroundColor;
                const a = document.createElement("div");
                a.setAttribute("class", "wa__btn_popup"), a.onclick = function() {
                    let t, e;
                    const n = document.querySelector(".wa__popup_chat_box"),
                        i = document.querySelector(".wa__btn_popup");
                    n.classList.contains("wa__active") ? (n.classList.remove("wa__active"), i.classList.remove("wa__active"), clearTimeout(e), n.classList.contains("wa__lauch") && (t = setTimeout((function() {
                        n.classList.remove("wa__pending"), n.classList.remove("wa__lauch")
                    }), 400))) : (n.classList.add("wa__pending"), n.classList.add("wa__active"), i.classList.add("wa__active"), clearTimeout(t), n.classList.contains("wa__lauch") || (e = setTimeout((function() {
                        n.classList.add("wa__lauch")
                    }), 100)))
                }, a.appendChild(r), a.appendChild(o), a.style.left = "left" == i.btnPosition ? parseInt(i.btnLeftDistance) + "px" : "unset", a.style.right = "right" == i.btnPosition ? parseInt(i.btnRightDistance) + "px" : "unset", a.style.bottom = parseInt(i.btnBottomDistance) + "px", t.appendChild(a);
                const s = document.createElement("div");
                s.setAttribute("class", "wa__popup_heading"), s.style.background = i.backgroundColor, s.append((() => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_title", t.innerHTML = vt.sanitize(i.title), t.style.color = i.textColor, t.style.fontSize = i.titleSize + "px", t
                })()), s.append((() => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_intro", t.innerHTML = vt.sanitize(i.description.njtReplaceAll(/\r\n\r\n/gm, "<br/>")), t.style = "#fff" == i.textColor || "#ffffff" == i.textColor ? "color: #D9EBC6" : "color: " + i.textColor + "; opacity: 0.8", t.style.fontSize = i.descriptionTextSize + "px", t
                })());
                const l = document.createElement("div");
                l.className = "nta-wa-gdpr", l.appendChild((() => {
                    const t = document.createElement("input");
                    t.setAttribute("id", "nta-wa-gdpr"), t.setAttribute("type", "checkbox"), t.setAttribute("value", "accept"), t.onchange = function(t) {
                        if (t.target.checked && (m("nta-wa-gdpr", "accept", 30), "" != h("nta-wa-gdpr"))) {
                            const t = document.querySelectorAll(".nta-wa-gdpr");
                            l.style.opacity = 0, setTimeout((() => {
                                t.forEach((t => t.style.display = "none"))
                            }), 400);
                            document.querySelectorAll(".wa__popup_content_item").forEach((t => t.classList.remove("pointer-disable")))
                        }
                    };
                    const e = document.createElement("span");
                    e.appendChild(t), e.appendChild((() => {
                        const t = document.createElement("span");
                        return t.innerHTML = vt.sanitize(n.options.styles.gdprContent.njtReplaceAll(/\r\n\r\n/gm, "<br/>")), t
                    })());
                    const i = document.createElement("label");
                    return i.setAttribute("for", "nta-wa-gdpr"), i.appendChild(e), i
                })());
                const c = document.createElement("div");
                c.className = "wa__popup_content wa__popup_content_left", c.appendChild((() => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_notice", t.innerHTML = vt.sanitize(i.responseText.njtReplaceAll(/\r\n\r\n/gm, "<br/>")), t.style.fontSize = i.regularTextSize + "px", t
                })()), c.appendChild("ON" == i.isShowGDPR && 1 == n.gdprStatus && "accept" != h("nta-wa-gdpr") ? l : document.createTextNode("")), c.appendChild((() => {
                    const t = document.createElement("div");
                    var e;
                    return t.className = "wa__popup_content_list", t.onclick = function() {
                        "" == h("nta-wa-gdpr") && (l.style.background = "red", l.style.color = "#fff")
                    }, e = t, n.accounts.forEach((t => {
                        const r = g(t, n);
                        let o = At(t, n);
                        const a = document.createElement("div");
                        a.className = "wa__popup_avatar" + (t.avatar ? "" : " nta-default-avt"), a.appendChild((() => {
                            if (t.avatar) {
                                const e = document.createElement("div");
                                return e.className = "wa__cs_img_wrap", e.style = `background: url(${t.avatar}) center center no-repeat; background-size: cover;`, e
                            }
                            return document.createRange().createContextualFragment(n.defaultAvatar)
                        })());
                        const s = document.createElement("div");
                        s.className = "wa__popup_content_item" + (n.gdprStatus ? " pointer-disable" : ""), s.appendChild((() => {
                            const e = document.createElement("a");
                            return e.setAttribute("target", "ON" == n.urlSettings.openInNewTab ? "_blank" : "_self"), e.setAttribute("href", o), e.setAttribute("rel", "nofollow noopener noreferrer"), e.className = "wa__stt" + ("online" === r ? " wa__stt_online" : " wa__stt_offline"), e.onclick = function() {
                                _(this, {
                                    enabledFacebook: n.options.analytics.enabledFacebook,
                                    enabledGoogle: n.options.analytics.enabledGoogle,
                                    enabledGoogleGA4: n.options.analytics.enabledGoogleGA4
                                })
                            }, e.appendChild(a), e.appendChild((() => {
                                const e = document.createElement("div");
                                e.className = "wa__popup_txt";
                                let n = "";
                                return n += `<div class="wa__member_name" style='font-size:${i.accountNameSize}px'>${t.accountName}</div>`, n += `<div class="wa__member_duty" style='font-size:${i.regularTextSize}px'>${t.title}</div>`, n += "online" != r ? `<div class="wa__member_status">${r}</div>` : "", e.innerHTML = vt.sanitize(n), e
                            })()), e
                        })()), e.appendChild(s)
                    })), t
                })());
                var u = '<a target="_blank" href="https://ninjateam.org/whatsapp-chat-wordpress/"><svg role="img" aria-label="NinjaTeam WhatsApp for WordPress" class="wa__popup_icon-ninja" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><g> <path class="st0" fill="#a9a9a9" d="M286.3,67C238,67,194,85.3,160.8,115.2l0-0.1l-13.2-27.8L84.9,49.2l8.5,66.4l27.1,21.1l-31.8-19.9l-60,8.9   l40.2,46.1l48.9,0.3C105.6,197,98.7,225,98.7,254.6c0,103.6,84,187.6,187.6,187.6s187.6-84,187.6-187.6S389.9,67,286.3,67z    M285.8,346.3c-111,0-171.9-63.2-171.9-92.5s62.2-91.5,171.9-91.5c109.5,0,172.8,62.1,172.8,91.5   C458.6,283.2,398.4,346.3,285.8,346.3z"/> <ellipse fill="#a9a9a9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -77.6656 328.6796)" class="st1" cx="357.9" cy="258.1" rx="20.6" ry="20.6"/> <ellipse fill="#a9a9a9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -119.8129 226.9269)" class="st1" cx="214" cy="258.1" rx="20.6" ry="20.6"/></g></svg></a>',
                    d = '<div class="wa__popup_powered_content">' + u + '<span class="wa__popup_tooltiptext"><svg class="wa__popup_icon-tooltip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFAC33" d="M32.938 15.651C32.792 15.26 32.418 15 32 15H19.925L26.89 1.458c.219-.426.106-.947-.271-1.243C26.437.071 26.218 0 26 0c-.233 0-.466.082-.653.243L18 6.588 3.347 19.243c-.316.273-.43.714-.284 1.105S3.582 21 4 21h12.075L9.11 34.542c-.219.426-.106.947.271 1.243.182.144.401.215.619.215.233 0 .466-.082.653-.243L18 29.412l14.653-12.655c.317-.273.43-.714.285-1.106z"/></svg> Powered by <span class="wa__popup_tooltiptext-ninja">NinjaTeam</span></span></div>',
                    p = '<span class="wa__popup_tooltiptext_mb"> POWERED BY' + u + '<span class="wa__popup_tooltiptext-ninja-mb">NINJATEAM</span></span>';
                "ON" === i.isShowPoweredBy && c.appendChild((() => {
                    const t = document.createElement("div");
                    return t.className = wt ? "wa__popup_powered_mb" : "wa__popup_powered", t.innerHTML = wt ? vt.sanitize(p) : vt.sanitize(d), t
                })()), "ON" === i.isShowScroll && (c.style.maxHeight = parseInt(i.scrollHeight) + "px", c.style.overflow = "auto");
                const f = document.createElement("div");
                f.className = "wa__popup_chat_box", f.appendChild(s), f.style.left = "left" == i.btnPosition ? parseInt(i.btnLeftDistance) + "px" : "unset", f.style.right = "right" == i.btnPosition ? parseInt(i.btnRightDistance) + "px" : "unset", f.style.bottom = parseInt(i.btnBottomDistance) + 72 + "px", f.appendChild(c), t.appendChild(f)
            },
            ready: function(t) {
                return (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? t() : document.addEventListener("DOMContentLoaded", t)
            }
        }
    })()
})(); */