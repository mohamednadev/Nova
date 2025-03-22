! function(t) {
    "use strict";
    const e = t.params,
        n = (document.querySelector.bind(document), (t, e) => e.split(".").reduce((t, e) => t && t[e], t)),
        i = () => null,
        s = t => null === t || t === undefined ? "" : t,
        o = "wc/store/checkout";

    function a(t) {
        window.wp && window.wp.data && window.wp.data.dispatch && window.wc && window.wc.wcBlocksData && window.wp.data.dispatch(window.wc.wcBlocksData.CHECKOUT_STORE_KEY).__internalSetExtensionData("woocommerce/order-attribution", t, !0)
    }

    function r() {
        return "undefined" != typeof sbjs
    }

    function c() {
        if (window.wp && window.wp.data && "function" == typeof window.wp.data.subscribe) {
            const e = window.wp.data.subscribe(function() {
                e(), a(t.getAttributionData())
            }, o)
        }
    }
    t.getAttributionData = function() {
        const s = e.allowTracking && r() ? n : i,
            o = r() ? sbjs.get : {},
            a = Object.entries(t.fields).map(([t, e]) => [t, s(o, e)]);
        return Object.fromEntries(a)
    }, t.setOrderTracking = function(n) {
        if (e.allowTracking = n, n) {
            if (!r()) return;
            sbjs.init({
                lifetime: Number(e.lifetime),
                session_length: Number(e.session),
                base64: Boolean(e.base64),
                timezone_offset: "0"
            })
        } else ! function() {
            const t = window.location.hostname;
            ["sbjs_current", "sbjs_current_add", "sbjs_first", "sbjs_first_add", "sbjs_session", "sbjs_udata", "sbjs_migrations", "sbjs_promo"].forEach(e => {
                document.cookie = `${e}=; path=/; max-age=-999; domain=.${t};`
            })
        }();
        const i = t.getAttributionData();
        ! function(t) {
            for (const e of document.querySelectorAll("wc-order-attribution-inputs")) e.values = t
        }(i), a(i)
    }, t.setOrderTracking(e.allowTracking), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c) : c(), window.customElements.define("wc-order-attribution-inputs", class extends HTMLElement {
        constructor() {
            if (super(), this._fieldNames = Object.keys(t.fields), this.hasOwnProperty("_values")) {
                let t = this.values;
                delete this.values, this.values = t || {}
            }
        }
        connectedCallback() {
            this.innerHTML = "";
            const t = new DocumentFragment;
            for (const n of this._fieldNames) {
                const i = document.createElement("input");
                i.type = "hidden", i.name = `${e.prefix}${n}`, i.value = s(this.values && this.values[n] || ""), t.appendChild(i)
            }
            this.appendChild(t)
        }
        set values(t) {
            if (this._values = t, this.isConnected)
                for (const t of this._fieldNames) {
                    const n = this.querySelector(`input[name="${e.prefix}${t}"]`);
                    n ? n.value = s(this.values[t]) : console.warn(`Field "${t}" not found. ` + "Most likely, the '<wc-order-attribution-inputs>' element was manipulated.")
                }
        }
        get values() {
            return this._values
        }
    })
}(window.wc_order_attribution);