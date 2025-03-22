! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.sbjs = e()
    }
}(function() {
    return function e(t, r, n) {
        function a(s, o) {
            if (!r[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!o && c) return c(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var p = r[s] = {
                    exports: {}
                };
                t[s][0].call(p.exports, function(e) {
                    var r = t[s][1][e];
                    return a(r || e)
                }, p, p.exports, e, t, r, n)
            }
            return r[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) a(n[s]);
        return a
    }({
        1: [function(e, t, r) {
            "use strict";
            var n = e("./init"),
                a = {
                    init: function(e) {
                        this.get = n(e), e && e.callback && "function" == typeof e.callback && e.callback(this.get)
                    }
                };
            t.exports = a
        }, {
            "./init": 6
        }],
        2: [function(e, t, r) {
            "use strict";
            var n = e("./terms"),
                a = e("./helpers/utils"),
                i = {
                    containers: {
                        current: "sbjs_current",
                        current_extra: "sbjs_current_add",
                        first: "sbjs_first",
                        first_extra: "sbjs_first_add",
                        session: "sbjs_session",
                        udata: "sbjs_udata",
                        promocode: "sbjs_promo"
                    },
                    service: {
                        migrations: "sbjs_migrations"
                    },
                    delimiter: "|||",
                    aliases: {
                        main: {
                            type: "typ",
                            source: "src",
                            medium: "mdm",
                            campaign: "cmp",
                            content: "cnt",
                            term: "trm",
                            id: "id",
                            platform: "plt",
                            format: "fmt",
                            tactic: "tct"
                        },
                        extra: {
                            fire_date: "fd",
                            entrance_point: "ep",
                            referer: "rf"
                        },
                        session: {
                            pages_seen: "pgs",
                            current_page: "cpg"
                        },
                        udata: {
                            visits: "vst",
                            ip: "uip",
                            agent: "uag"
                        },
                        promo: "code"
                    },
                    pack: {
                        main: function(e) {
                            return i.aliases.main.type + "=" + e.type + i.delimiter + i.aliases.main.source + "=" + e.source + i.delimiter + i.aliases.main.medium + "=" + e.medium + i.delimiter + i.aliases.main.campaign + "=" + e.campaign + i.delimiter + i.aliases.main.content + "=" + e.content + i.delimiter + i.aliases.main.term + "=" + e.term + i.delimiter + i.aliases.main.id + "=" + e.id + i.delimiter + i.aliases.main.platform + "=" + e.platform + i.delimiter + i.aliases.main.format + "=" + e.format + i.delimiter + i.aliases.main.tactic + "=" + e.tactic
                        },
                        extra: function(e) {
                            return i.aliases.extra.fire_date + "=" + a.setDate(new Date, e) + i.delimiter + i.aliases.extra.entrance_point + "=" + document.location.href + i.delimiter + i.aliases.extra.referer + "=" + (document.referrer || n.none)
                        },
                        user: function(e, t) {
                            return i.aliases.udata.visits + "=" + e + i.delimiter + i.aliases.udata.ip + "=" + t + i.delimiter + i.aliases.udata.agent + "=" + navigator.userAgent
                        },
                        session: function(e) {
                            return i.aliases.session.pages_seen + "=" + e + i.delimiter + i.aliases.session.current_page + "=" + document.location.href
                        },
                        promo: function(e) {
                            return i.aliases.promo + "=" + a.setLeadingZeroToInt(a.randomInt(e.min, e.max), e.max.toString().length)
                        }
                    }
                };
            t.exports = i
        }, {
            "./helpers/utils": 5,
            "./terms": 9
        }],
        3: [function(e, t, r) {
            "use strict";
            var n = e("../data").delimiter;
            t.exports = {
                useBase64: !1,
                setBase64Flag: function(e) {
                    this.useBase64 = e
                },
                encodeData: function(e) {
                    return encodeURIComponent(e).replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")
                },
                decodeData: function(e) {
                    try {
                        return decodeURIComponent(e).replace(/\%21/g, "!").replace(/\%7E/g, "~").replace(/\%2A/g, "*").replace(/\%27/g, "'").replace(/\%28/g, "(").replace(/\%29/g, ")")
                    } catch (t) {
                        try {
                            return unescape(e)
                        } catch (r) {
                            return ""
                        }
                    }
                },
                set: function(e, t, r, n, a) {
                    var i, s;
                    if (r) {
                        var o = new Date;
                        o.setTime(o.getTime() + 60 * r * 1e3), i = "; expires=" + o.toGMTString()
                    } else i = "";
                    s = n && !a ? ";domain=." + n : "";
                    var c = this.encodeData(t);
                    this.useBase64 && (c = btoa(c).replace(/=+$/, "")), document.cookie = this.encodeData(e) + "=" + c + i + s + "; path=/"
                },
                get: function(e) {
                    for (var t = this.encodeData(e) + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                        for (var a = r[n];
                            " " === a.charAt(0);) a = a.substring(1, a.length);
                        if (0 === a.indexOf(t)) {
                            var i = a.substring(t.length, a.length);
                            if (/^[A-Za-z0-9+/]+$/.test(i)) try {
                                i = atob(i.padEnd(4 * Math.ceil(i.length / 4), "="))
                            } catch (s) {}
                            return this.decodeData(i)
                        }
                    }
                    return null
                },
                destroy: function(e, t, r) {
                    this.set(e, "", -1, t, r)
                },
                parse: function(e) {
                    var t = [],
                        r = {};
                    if ("string" == typeof e) t.push(e);
                    else
                        for (var a in e) e.hasOwnProperty(a) && t.push(e[a]);
                    for (var i = 0; i < t.length; i++) {
                        var s;
                        r[this.unsbjs(t[i])] = {}, s = this.get(t[i]) ? this.get(t[i]).split(n) : [];
                        for (var o = 0; o < s.length; o++) {
                            var c = s[o].split("="),
                                u = c.splice(0, 1);
                            u.push(c.join("=")), r[this.unsbjs(t[i])][u[0]] = this.decodeData(u[1])
                        }
                    }
                    return r
                },
                unsbjs: function(e) {
                    return e.replace("sbjs_", "")
                }
            }
        }, {
            "../data": 2
        }],
        4: [function(e, t, r) {
            "use strict";
            t.exports = {
                parse: function(e) {
                    for (var t = this.parseOptions, r = t.parser[t.strictMode ? "strict" : "loose"].exec(e), n = {}, a = 14; a--;) n[t.key[a]] = r[a] || "";
                    return n[t.q.name] = {}, n[t.key[12]].replace(t.q.parser, function(e, r, a) {
                        r && (n[t.q.name][r] = a)
                    }), n
                },
                parseOptions: {
                    strictMode: !1,
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                },
                getParam: function(e) {
                    for (var t = {}, r = (e || window.location.search.substring(1)).split("&"), n = 0; n < r.length; n++) {
                        var a = r[n].split("=");
                        if ("undefined" == typeof t[a[0]]) t[a[0]] = a[1];
                        else if ("string" == typeof t[a[0]]) {
                            var i = [t[a[0]], a[1]];
                            t[a[0]] = i
                        } else t[a[0]].push(a[1])
                    }
                    return t
                },
                getHost: function(e) {
                    return this.parse(e).host.replace("www.", "")
                }
            }
        }, {}],
        5: [function(e, t, r) {
            "use strict";
            t.exports = {
                escapeRegexp: function(e) {
                    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                setDate: function(e, t) {
                    var r = e.getTimezoneOffset() / 60,
                        n = e.getHours(),
                        a = t || 0 === t ? t : -r;
                    return e.setHours(n + r + a), e.getFullYear() + "-" + this.setLeadingZeroToInt(e.getMonth() + 1, 2) + "-" + this.setLeadingZeroToInt(e.getDate(), 2) + " " + this.setLeadingZeroToInt(e.getHours(), 2) + ":" + this.setLeadingZeroToInt(e.getMinutes(), 2) + ":" + this.setLeadingZeroToInt(e.getSeconds(), 2)
                },
                setLeadingZeroToInt: function(e, t) {
                    for (var r = e + ""; r.length < t;) r = "0" + r;
                    return r
                },
                randomInt: function(e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e
                }
            }
        }, {}],
        6: [function(e, t, r) {
            "use strict";
            var n = e("./data"),
                a = e("./terms"),
                i = e("./helpers/cookies"),
                s = e("./helpers/uri"),
                o = e("./helpers/utils"),
                c = e("./params"),
                u = e("./migrations");
            t.exports = function(e) {
                var t, r, p, f, m, d, l, g, h, y, _, v, b, x = c.fetch(e),
                    k = s.getParam(),
                    w = x.domain.host,
                    q = x.domain.isolate,
                    I = x.lifetime;

                function j(e) {
                    switch (e) {
                        case a.traffic.utm:
                            t = a.traffic.utm, r = "undefined" != typeof k.utm_source ? k.utm_source : "undefined" != typeof k.gclid ? "google" : "undefined" != typeof k.yclid ? "yandex" : a.none, p = "undefined" != typeof k.utm_medium ? k.utm_medium : "undefined" != typeof k.gclid ? "cpc" : "undefined" != typeof k.yclid ? "cpc" : a.none, f = "undefined" != typeof k.utm_campaign ? k.utm_campaign : "undefined" != typeof k[x.campaign_param] ? k[x.campaign_param] : "undefined" != typeof k.gclid ? "google_cpc" : "undefined" != typeof k.yclid ? "yandex_cpc" : a.none, m = "undefined" != typeof k.utm_content ? k.utm_content : "undefined" != typeof k[x.content_param] ? k[x.content_param] : a.none, l = k.utm_id || a.none, g = k.utm_source_platform || a.none, h = k.utm_creative_format || a.none, y = k.utm_marketing_tactic || a.none, d = "undefined" != typeof k.utm_term ? k.utm_term : "undefined" != typeof k[x.term_param] ? k[x.term_param] : function() {
                                var e = document.referrer;
                                if (k.utm_term) return k.utm_term;
                                if (!(e && s.parse(e).host && s.parse(e).host.match(/^(?:.*\.)?yandex\..{2,9}$/i))) return !1;
                                try {
                                    return s.getParam(s.parse(document.referrer).query).text
                                } catch (t) {
                                    return !1
                                }
                            }() || a.none;
                            break;
                        case a.traffic.organic:
                            t = a.traffic.organic, r = r || s.getHost(document.referrer), p = a.referer.organic, f = a.none, m = a.none, d = a.none, l = a.none, g = a.none, h = a.none, y = a.none;
                            break;
                        case a.traffic.referral:
                            t = a.traffic.referral, r = r || s.getHost(document.referrer), p = p || a.referer.referral, f = a.none, m = s.parse(document.referrer).path, d = a.none, l = a.none, g = a.none, h = a.none, y = a.none;
                            break;
                        case a.traffic.typein:
                            t = a.traffic.typein, r = x.typein_attributes.source, p = x.typein_attributes.medium, f = a.none, m = a.none, d = a.none, l = a.none, g = a.none, h = a.none, y = a.none;
                            break;
                        default:
                            t = a.oops, r = a.oops, p = a.oops, f = a.oops, m = a.oops, d = a.oops, l = a.oops, g = a.oops, h = a.oops, y = a.oops
                    }
                    var i = {
                        type: t,
                        source: r,
                        medium: p,
                        campaign: f,
                        content: m,
                        term: d,
                        id: l,
                        platform: g,
                        format: h,
                        tactic: y
                    };
                    return n.pack.main(i)
                }

                function R(e) {
                    var t = document.referrer;
                    switch (e) {
                        case a.traffic.organic:
                            return !!t && H(t) && function(e) {
                                var t = new RegExp("^(?:.*\\.)?" + o.escapeRegexp("yandex") + "\\..{2,9}$"),
                                    n = new RegExp(".*" + o.escapeRegexp("text") + "=.*"),
                                    a = new RegExp("^(?:www\\.)?" + o.escapeRegexp("google") + "\\..{2,9}$");
                                if (s.parse(e).query && s.parse(e).host.match(t) && s.parse(e).query.match(n)) return r = "yandex", !0;
                                if (s.parse(e).host.match(a)) return r = "google", !0;
                                if (!s.parse(e).query) return !1;
                                for (var i = 0; i < x.organics.length; i++) {
                                    if (s.parse(e).host.match(new RegExp("^(?:.*\\.)?" + o.escapeRegexp(x.organics[i].host) + "$", "i")) && s.parse(e).query.match(new RegExp(".*" + o.escapeRegexp(x.organics[i].param) + "=.*", "i"))) return r = x.organics[i].display || x.organics[i].host, !0;
                                    if (i + 1 === x.organics.length) return !1
                                }
                            }(t);
                        case a.traffic.referral:
                            return !!t && H(t) && function(e) {
                                if (!(x.referrals.length > 0)) return r = s.getHost(e), !0;
                                for (var t = 0; t < x.referrals.length; t++) {
                                    if (s.parse(e).host.match(new RegExp("^(?:.*\\.)?" + o.escapeRegexp(x.referrals[t].host) + "$", "i"))) return r = x.referrals[t].display || x.referrals[t].host, p = x.referrals[t].medium || a.referer.referral, !0;
                                    if (t + 1 === x.referrals.length) return r = s.getHost(e), !0
                                }
                            }(t);
                        default:
                            return !1
                    }
                }

                function H(e) {
                    if (x.domain) {
                        if (q) return s.getHost(e) !== s.getHost(w);
                        var t = new RegExp("^(?:.*\\.)?" + o.escapeRegexp(w) + "$", "i");
                        return !s.getHost(e).match(t)
                    }
                    return s.getHost(e) !== s.getHost(document.location.href)
                }

                function D() {
                    i.set(n.containers.current_extra, n.pack.extra(x.timezone_offset), I, w, q), i.get(n.containers.first_extra) || i.set(n.containers.first_extra, n.pack.extra(x.timezone_offset), I, w, q)
                }
                return i.setBase64Flag(x.base64), u.go(I, w, q), i.set(n.containers.current, function() {
                    var e;
                    if ("undefined" != typeof k.utm_source || "undefined" != typeof k.utm_medium || "undefined" != typeof k.utm_campaign || "undefined" != typeof k.utm_content || "undefined" != typeof k.utm_term || "undefined" != typeof k.utm_id || "undefined" != typeof k.utm_source_platform || "undefined" != typeof k.utm_creative_format || "undefined" != typeof k.utm_marketing_tactic || "undefined" != typeof k.gclid || "undefined" != typeof k.yclid || "undefined" != typeof k[x.campaign_param] || "undefined" != typeof k[x.term_param] || "undefined" != typeof k[x.content_param]) D(), e = j(a.traffic.utm);
                    else if (R(a.traffic.organic)) D(), e = j(a.traffic.organic);
                    else if (!i.get(n.containers.session) && R(a.traffic.referral)) D(), e = j(a.traffic.referral);
                    else {
                        if (i.get(n.containers.first) || i.get(n.containers.current)) return i.get(n.containers.current);
                        D(), e = j(a.traffic.typein)
                    }
                    return e
                }(), I, w, q), i.get(n.containers.first) || i.set(n.containers.first, i.get(n.containers.current), I, w, q), i.get(n.containers.udata) ? (_ = parseInt(i.parse(n.containers.udata)[i.unsbjs(n.containers.udata)][n.aliases.udata.visits]) || 1, _ = i.get(n.containers.session) ? _ : _ + 1, v = n.pack.user(_, x.user_ip)) : (_ = 1, v = n.pack.user(_, x.user_ip)), i.set(n.containers.udata, v, I, w, q), i.get(n.containers.session) ? (b = parseInt(i.parse(n.containers.session)[i.unsbjs(n.containers.session)][n.aliases.session.pages_seen]) || 1, b += 1) : b = 1, i.set(n.containers.session, n.pack.session(b), x.session_length, w, q), x.promocode && !i.get(n.containers.promocode) && i.set(n.containers.promocode, n.pack.promo(x.promocode), I, w, q), i.parse(n.containers)
            }
        }, {
            "./data": 2,
            "./helpers/cookies": 3,
            "./helpers/uri": 4,
            "./helpers/utils": 5,
            "./migrations": 7,
            "./params": 8,
            "./terms": 9
        }],
        7: [function(e, t, r) {
            "use strict";
            var n = e("./data"),
                a = e("./helpers/cookies");
            t.exports = {
                go: function(e, t, r) {
                    var i, s = this.migrations,
                        o = {
                            l: e,
                            d: t,
                            i: r
                        };
                    if (a.get(n.containers.first) || a.get(n.service.migrations)) {
                        if (!a.get(n.service.migrations))
                            for (i = 0; i < s.length; i++) s[i].go(s[i].id, o)
                    } else {
                        var c = [];
                        for (i = 0; i < s.length; i++) c.push(s[i].id);
                        var u = "";
                        for (i = 0; i < c.length; i++) u += c[i] + "=1", i < c.length - 1 && (u += n.delimiter);
                        a.set(n.service.migrations, u, o.l, o.d, o.i)
                    }
                },
                migrations: [{
                    id: "1418474375998",
                    version: "1.0.0-beta",
                    go: function(e, t) {
                        var r = e + "=1",
                            i = e + "=0",
                            s = function(e, t, r) {
                                return t || r ? e : n.delimiter
                            };
                        try {
                            var o = [];
                            for (var c in n.containers) n.containers.hasOwnProperty(c) && o.push(n.containers[c]);
                            for (var u = 0; u < o.length; u++)
                                if (a.get(o[u])) {
                                    var p = a.get(o[u]).replace(/(\|)?\|(\|)?/g, s);
                                    a.destroy(o[u], t.d, t.i), a.destroy(o[u], t.d, !t.i), a.set(o[u], p, t.l, t.d, t.i)
                                }
                            a.get(n.containers.session) && a.set(n.containers.session, n.pack.session(0), t.l, t.d, t.i), a.set(n.service.migrations, r, t.l, t.d, t.i)
                        } catch (f) {
                            a.set(n.service.migrations, i, t.l, t.d, t.i)
                        }
                    }
                }]
            }
        }, {
            "./data": 2,
            "./helpers/cookies": 3
        }],
        8: [function(e, t, r) {
            "use strict";
            var n = e("./terms"),
                a = e("./helpers/uri");
            t.exports = {
                fetch: function(e) {
                    var t = e || {},
                        r = {};
                    if (r.lifetime = this.validate.checkFloat(t.lifetime) || 6, r.lifetime = parseInt(30 * r.lifetime * 24 * 60), r.session_length = this.validate.checkInt(t.session_length) || 30, r.timezone_offset = this.validate.checkInt(t.timezone_offset), r.base64 = t.base64 || !1, r.campaign_param = t.campaign_param || !1, r.term_param = t.term_param || !1, r.content_param = t.content_param || !1, r.user_ip = t.user_ip || n.none, t.promocode ? (r.promocode = {}, r.promocode.min = parseInt(t.promocode.min) || 1e5, r.promocode.max = parseInt(t.promocode.max) || 999999) : r.promocode = !1, t.typein_attributes && t.typein_attributes.source && t.typein_attributes.medium ? (r.typein_attributes = {}, r.typein_attributes.source = t.typein_attributes.source, r.typein_attributes.medium = t.typein_attributes.medium) : r.typein_attributes = {
                            source: "(direct)",
                            medium: "(none)"
                        }, t.domain && this.validate.isString(t.domain) ? r.domain = {
                            host: t.domain,
                            isolate: !1
                        } : t.domain && t.domain.host ? r.domain = t.domain : r.domain = {
                            host: a.getHost(document.location.hostname),
                            isolate: !1
                        }, r.referrals = [], t.referrals && t.referrals.length > 0)
                        for (var i = 0; i < t.referrals.length; i++) t.referrals[i].host && r.referrals.push(t.referrals[i]);
                    if (r.organics = [], t.organics && t.organics.length > 0)
                        for (var s = 0; s < t.organics.length; s++) t.organics[s].host && t.organics[s].param && r.organics.push(t.organics[s]);
                    return r.organics.push({
                        host: "bing.com",
                        param: "q",
                        display: "bing"
                    }), r.organics.push({
                        host: "yahoo.com",
                        param: "p",
                        display: "yahoo"
                    }), r.organics.push({
                        host: "about.com",
                        param: "q",
                        display: "about"
                    }), r.organics.push({
                        host: "aol.com",
                        param: "q",
                        display: "aol"
                    }), r.organics.push({
                        host: "ask.com",
                        param: "q",
                        display: "ask"
                    }), r.organics.push({
                        host: "globososo.com",
                        param: "q",
                        display: "globo"
                    }), r.organics.push({
                        host: "go.mail.ru",
                        param: "q",
                        display: "go.mail.ru"
                    }), r.organics.push({
                        host: "rambler.ru",
                        param: "query",
                        display: "rambler"
                    }), r.organics.push({
                        host: "tut.by",
                        param: "query",
                        display: "tut.by"
                    }), r.referrals.push({
                        host: "t.co",
                        display: "twitter.com"
                    }), r.referrals.push({
                        host: "plus.url.google.com",
                        display: "plus.google.com"
                    }), r
                },
                validate: {
                    checkFloat: function(e) {
                        return !(!e || !this.isNumeric(parseFloat(e))) && parseFloat(e)
                    },
                    checkInt: function(e) {
                        return !(!e || !this.isNumeric(parseInt(e))) && parseInt(e)
                    },
                    isNumeric: function(e) {
                        return !isNaN(e)
                    },
                    isString: function(e) {
                        return "[object String]" === Object.prototype.toString.call(e)
                    }
                }
            }
        }, {
            "./helpers/uri": 4,
            "./terms": 9
        }],
        9: [function(e, t, r) {
            "use strict";
            t.exports = {
                traffic: {
                    utm: "utm",
                    organic: "organic",
                    referral: "referral",
                    typein: "typein"
                },
                referer: {
                    referral: "referral",
                    organic: "organic",
                    social: "social"
                },
                none: "(none)",
                oops: "(Houston, we have a problem)"
            }
        }, {}]
    }, {}, [1])(1)
});