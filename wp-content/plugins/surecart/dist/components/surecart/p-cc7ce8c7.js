const t = "surecart";
let e, n, s, l = !1,
    o = !1,
    c = !1,
    i = !1,
    f = null,
    r = !1;
const u = (t, e = "") => () => {},
    a = (t, e) => () => {},
    d = "{visibility:hidden}.hydrated{visibility:inherit}",
    h = "http://www.w3.org/1999/xlink",
    p = {},
    y = "http://www.w3.org/2000/svg",
    m = "http://www.w3.org/1999/xhtml",
    $ = t => null != t,
    b = t => "object" == (t = typeof t) || "function" === t;

function w(t) {
    var e, n, s;
    return null !== (s = null === (n = null === (e = t.head) || void 0 === e ? void 0 : e.querySelector('meta[name="csp-nonce"]')) || void 0 === n ? void 0 : n.getAttribute("content")) && void 0 !== s ? s : void 0
}
const g = (t, e, ...n) => {
        let s = null,
            l = null,
            o = null,
            r = !1,
            i = !1;
        const a = [],
            c = e => {
                for (let n = 0; n < e.length; n++) s = e[n], Array.isArray(s) ? c(s) : null != s && "boolean" != typeof s && ((r = "function" != typeof t && !b(s)) && (s = String(s)), r && i ? a[a.length - 1].t += s : a.push(r ? v(null, s) : s), i = r)
            };
        if (c(n), e) {
            e.key && (l = e.key), e.name && (o = e.name); {
                const t = e.className || e.class;
                t && (e.class = "object" != typeof t ? t : Object.keys(t).filter((e => t[e])).join(" "))
            }
        }
        if ("function" == typeof t) return t(null === e ? {} : e, a, j);
        const h = v(t, null);
        return h.l = e, a.length > 0 && (h.o = a), h.i = l, h.u = o, h
    },
    v = (t, e) => ({
        h: 0,
        p: t,
        t: e,
        m: null,
        o: null,
        l: null,
        i: null,
        u: null
    }),
    S = {},
    k = t => t && t.p === S,
    j = {
        forEach: (t, e) => t.map(O).forEach(e),
        map: (t, e) => t.map(O).map(e).map(C)
    },
    O = t => ({
        vattrs: t.l,
        vchildren: t.o,
        vkey: t.i,
        vname: t.u,
        vtag: t.p,
        vtext: t.t
    }),
    C = t => {
        if ("function" == typeof t.vtag) {
            const e = Object.assign({}, t.vattrs);
            return t.vkey && (e.key = t.vkey), t.vname && (e.name = t.vname), g(t.vtag, e, ...t.vchildren || [])
        }
        const e = v(t.vtag, t.vtext);
        return e.l = t.vattrs, e.o = t.vchildren, e.i = t.vkey, e.u = t.vname, e
    },
    M = (t, e) => null == t || b(t) ? t : 4 & e ? "false" !== t && ("" === t || !!t) : 2 & e ? parseFloat(t) : 1 & e ? String(t) : t,
    x = t => xt(t).$,
    P = (t, e, n) => {
        const s = x(t);
        return {
            emit: t => R(s, e, {
                bubbles: !!(4 & n),
                composed: !!(2 & n),
                cancelable: !!(1 & n),
                detail: t
            })
        }
    },
    R = (t, e, n) => {
        const s = At.ce(e, n);
        return t.dispatchEvent(s), s
    },
    T = new WeakMap,
    U = (t, e, n) => {
        let s = Nt.get(t);
        Ht && n ? (s = s || new CSSStyleSheet, "string" == typeof s ? s = e : s.replaceSync(e)) : s = e, Nt.set(t, s)
    },
    E = (t, e, n, s) => {
        var l;
        let o = N(e);
        const r = Nt.get(o);
        if (t = 11 === t.nodeType ? t : Wt, r)
            if ("string" == typeof r) {
                t = t.head || t;
                let e, n = T.get(t);
                if (n || T.set(t, n = new Set), !n.has(o)) {
                    {
                        e = Wt.createElement("style"), e.innerHTML = r;
                        const n = null !== (l = At.g) && void 0 !== l ? l : w(Wt);
                        null != n && e.setAttribute("nonce", n), t.insertBefore(e, t.querySelector("link"))
                    }
                    n && n.add(o)
                }
            } else t.adoptedStyleSheets.includes(r) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, r]);
        return o
    },
    L = t => {
        const e = t.v,
            n = t.$,
            s = e.h,
            l = (e.S, () => {}),
            o = E(n.shadowRoot ? n.shadowRoot : n.getRootNode(), e);
        10 & s && (n["s-sc"] = o, n.classList.add(o + "-h")), l()
    },
    N = (t, e) => "sc-" + t.S,
    F = (t, e, n, s, l, o) => {
        if (n !== s) {
            let r = Tt(t, e),
                i = e.toLowerCase();
            if ("class" === e) {
                const e = t.classList,
                    l = A(n),
                    o = A(s);
                e.remove(...l.filter((t => t && !o.includes(t)))), e.add(...o.filter((t => t && !l.includes(t))))
            } else if ("style" === e) {
                for (const e in n) s && null != s[e] || (e.includes("-") ? t.style.removeProperty(e) : t.style[e] = "");
                for (const e in s) n && s[e] === n[e] || (e.includes("-") ? t.style.setProperty(e, s[e]) : t.style[e] = s[e])
            } else if ("key" === e);
            else if ("ref" === e) s && s(t);
            else if (r || "o" !== e[0] || "n" !== e[1]) {
                const a = b(s);
                if ((r || a && null !== s) && !l) try {
                    if (t.tagName.includes("-")) t[e] = s;
                    else {
                        const l = null == s ? "" : s;
                        "list" === e ? r = !1 : null != n && t[e] == l || (t[e] = l)
                    }
                } catch (t) {}
                let c = !1;
                i !== (i = i.replace(/^xlink\:?/, "")) && (e = i, c = !0), null == s || !1 === s ? !1 === s && "" !== t.getAttribute(e) || (c ? t.removeAttributeNS(h, e) : t.removeAttribute(e)) : (!r || 4 & o || l) && !a && (s = !0 === s ? "" : s, c ? t.setAttributeNS(h, e, s) : t.setAttribute(e, s))
            } else e = "-" === e[2] ? e.slice(3) : Tt(Ft, i) ? i.slice(2) : i[2] + e.slice(3), n && At.rel(t, e, n, !1), s && At.ael(t, e, s, !1)
        }
    },
    W = /\s/,
    A = t => t ? t.split(W) : [],
    D = (t, e, n, s) => {
        const l = 11 === e.m.nodeType && e.m.host ? e.m.host : e.m,
            o = t && t.l || p,
            r = e.l || p;
        for (s in o) s in r || F(l, s, o[s], void 0, n, e.h);
        for (s in r) F(l, s, o[s], r[s], n, e.h)
    },
    H = (t, o, r, a) => {
        const h = o.o[r];
        let u, d, p, f = 0;
        if (l || (c = !0, "slot" === h.p && (e && a.classList.add(e + "-s"), h.h |= h.o ? 2 : 1)), null !== h.t) u = h.m = Wt.createTextNode(h.t);
        else if (1 & h.h) u = h.m = Wt.createTextNode("");
        else {
            if (i || (i = "svg" === h.p), u = h.m = Wt.createElementNS(i ? y : m, 2 & h.h ? "slot-fb" : h.p), i && "foreignObject" === h.p && (i = !1), D(null, h, i), $(e) && u["s-si"] !== e && u.classList.add(u["s-si"] = e), h.o)
                for (f = 0; f < h.o.length; ++f) d = H(t, h, f, u), d && u.appendChild(d);
            "svg" === h.p ? i = !1 : "foreignObject" === u.tagName && (i = !0)
        }
        return u["s-hn"] = s, 3 & h.h && (u["s-sr"] = !0, u["s-cr"] = n, u["s-sn"] = h.u || "", p = t && t.o && t.o[r], p && p.p === h.p && t.m && q(t.m, !1)), u
    },
    q = (t, e) => {
        At.h |= 1;
        const n = t.childNodes;
        for (let t = n.length - 1; t >= 0; t--) {
            const l = n[t];
            l["s-hn"] !== s && l["s-ol"] && (G(l).insertBefore(l, B(l)), l["s-ol"].remove(), l["s-ol"] = void 0, c = !0), e && q(l, e)
        }
        At.h &= -2
    },
    I = (t, e, n, l, o, r) => {
        let i, a = t["s-cr"] && t["s-cr"].parentNode || t;
        for (a.shadowRoot && a.tagName === s && (a = a.shadowRoot); o <= r; ++o) l[o] && (i = H(null, n, o, t), i && (l[o].m = i, a.insertBefore(i, B(e))))
    },
    V = (t, e, n, s, l) => {
        for (; e <= n; ++e)(s = t[e]) && (l = s.m, Z(s), o = !0, l["s-ol"] ? l["s-ol"].remove() : q(l, !0), l.remove())
    },
    _ = (t, e, n, s) => {
        let l, o, r = 0,
            i = 0,
            a = 0,
            c = 0,
            h = e.length - 1,
            u = e[0],
            d = e[h],
            p = s.length - 1,
            f = s[0],
            m = s[p];
        for (; r <= h && i <= p;)
            if (null == u) u = e[++r];
            else if (null == d) d = e[--h];
        else if (null == f) f = s[++i];
        else if (null == m) m = s[--p];
        else if (z(u, f)) J(u, f), u = e[++r], f = s[++i];
        else if (z(d, m)) J(d, m), d = e[--h], m = s[--p];
        else if (z(u, m)) "slot" !== u.p && "slot" !== m.p || q(u.m.parentNode, !1), J(u, m), t.insertBefore(u.m, d.m.nextSibling), u = e[++r], m = s[--p];
        else if (z(d, f)) "slot" !== u.p && "slot" !== m.p || q(d.m.parentNode, !1), J(d, f), t.insertBefore(d.m, u.m), d = e[--h], f = s[++i];
        else {
            for (a = -1, c = r; c <= h; ++c)
                if (e[c] && null !== e[c].i && e[c].i === f.i) {
                    a = c;
                    break
                }
            a >= 0 ? (o = e[a], o.p !== f.p ? l = H(e && e[i], n, a, t) : (J(o, f), e[a] = void 0, l = o.m), f = s[++i]) : (l = H(e && e[i], n, i, t), f = s[++i]), l && G(u.m).insertBefore(l, B(u.m))
        }
        r > h ? I(t, null == s[p + 1] ? null : s[p + 1].m, n, s, i, p) : i > p && V(e, r, h)
    },
    z = (t, e) => t.p === e.p && ("slot" === t.p ? t.u === e.u : t.i === e.i),
    B = t => t && t["s-ol"] || t,
    G = t => (t["s-ol"] ? t["s-ol"] : t).parentNode,
    J = (t, e) => {
        const n = e.m = t.m,
            s = t.o,
            l = e.o,
            o = e.p,
            r = e.t;
        let a;
        null === r ? (i = "svg" === o || "foreignObject" !== o && i, "slot" === o || D(t, e, i), null !== s && null !== l ? _(n, s, e, l) : null !== l ? (null !== t.t && (n.textContent = ""), I(n, null, e, l, 0, l.length - 1)) : null !== s && V(s, 0, s.length - 1), i && "svg" === o && (i = !1)) : (a = n["s-cr"]) ? a.parentNode.textContent = r : t.t !== r && (n.data = r)
    },
    K = t => {
        const e = t.childNodes;
        let n, s, l, o, r, i;
        for (s = 0, l = e.length; s < l; s++)
            if (n = e[s], 1 === n.nodeType) {
                if (n["s-sr"])
                    for (r = n["s-sn"], n.hidden = !1, o = 0; o < l; o++)
                        if (i = e[o].nodeType, e[o]["s-hn"] !== n["s-hn"] || "" !== r) {
                            if (1 === i && r === e[o].getAttribute("slot")) {
                                n.hidden = !0;
                                break
                            }
                        } else if (1 === i || 3 === i && "" !== e[o].textContent.trim()) {
                    n.hidden = !0;
                    break
                }
                K(n)
            }
    },
    Q = [],
    X = t => {
        let e, n, s, l, r, i, a = 0;
        const c = t.childNodes,
            h = c.length;
        for (; a < h; a++) {
            if (e = c[a], e["s-sr"] && (n = e["s-cr"]) && n.parentNode)
                for (s = n.parentNode.childNodes, l = e["s-sn"], i = s.length - 1; i >= 0; i--) n = s[i], n["s-cn"] || n["s-nr"] || n["s-hn"] === e["s-hn"] || (Y(n, l) ? (r = Q.find((t => t.k === n)), o = !0, n["s-sn"] = n["s-sn"] || l, r ? r.j = e : Q.push({
                    j: e,
                    k: n
                }), n["s-sr"] && Q.map((t => {
                    Y(t.k, n["s-sn"]) && (r = Q.find((t => t.k === n)), r && !t.j && (t.j = r.j))
                }))) : Q.some((t => t.k === n)) || Q.push({
                    k: n
                }));
            1 === e.nodeType && X(e)
        }
    },
    Y = (t, e) => 1 === t.nodeType ? null === t.getAttribute("slot") && "" === e || t.getAttribute("slot") === e : t["s-sn"] === e || "" === e,
    Z = t => {
        t.l && t.l.ref && t.l.ref(null), t.o && t.o.map(Z)
    },
    tt = (t, r) => {
        const i = t.$,
            a = t.v,
            h = t.O || v(null, null),
            u = k(r) ? r : g(null, null, r);
        if (s = i.tagName, a.C && (u.l = u.l || {}, a.C.map((([t, e]) => u.l[e] = i[t]))), u.p = null, u.h |= 4, t.O = u, u.m = h.m = i.shadowRoot || i, e = i["s-sc"], n = i["s-cr"], l = 0 != (1 & a.h), o = !1, J(h, u), At.h |= 1, c) {
            let t, e, n, s, l, o;
            X(u.m);
            let r = 0;
            for (; r < Q.length; r++) t = Q[r], e = t.k, e["s-ol"] || (n = Wt.createTextNode(""), n["s-nr"] = e, e.parentNode.insertBefore(e["s-ol"] = n, e));
            for (r = 0; r < Q.length; r++)
                if (t = Q[r], e = t.k, t.j) {
                    for (s = t.j.parentNode, l = t.j.nextSibling, n = e["s-ol"]; n = n.previousSibling;)
                        if (o = n["s-nr"], o && o["s-sn"] === e["s-sn"] && s === o.parentNode && (o = o.nextSibling, !o || !o["s-nr"])) {
                            l = o;
                            break
                        }(!l && s !== e.parentNode || e.nextSibling !== l) && e !== l && (!e["s-hn"] && e["s-ol"] && (e["s-hn"] = e["s-ol"].parentNode.nodeName), s.insertBefore(e, l))
                } else 1 === e.nodeType && (e.hidden = !0)
        }
        o && K(u.m), At.h &= -2, Q.length = 0
    },
    et = (t, e) => {
        e && !t.M && e["s-p"] && e["s-p"].push(new Promise((e => t.M = e)))
    },
    nt = (t, e) => {
        if (t.h |= 16, !(4 & t.h)) return et(t, t.P), Gt((() => st(t, e)));
        t.h |= 512
    },
    st = (t, e) => {
        const n = (t.v.S, () => {}),
            s = t.R;
        let l;
        return e && (t.h |= 256, t.T && (t.T.map((([t, e]) => ut(s, t, e))), t.T = null), l = ut(s, "componentWillLoad")), n(), at(l, (() => lt(t, s, e)))
    },
    lt = async (t, e, n) => {
        const s = t.$,
            l = (t.v.S, () => {}),
            o = s["s-rc"];
        n && L(t);
        const r = (t.v.S, () => {});
        ot(t, e), o && (o.map((t => t())), s["s-rc"] = void 0), r(), l(); {
            const e = s["s-p"],
                n = () => it(t);
            0 === e.length ? n() : (Promise.all(e).then(n), t.h |= 4, e.length = 0)
        }
    },
    ot = (t, e, n) => {
        try {
            f = e, e = e.render && e.render(), t.h &= -17, t.h |= 2, tt(t, e)
        } catch (e) {
            Ut(e, t.$)
        }
        return f = null, null
    },
    ct = () => f,
    it = t => {
        t.v.S;
        const e = t.$,
            n = t.R,
            s = t.P;
        64 & t.h ? ut(n, "componentDidUpdate") : (t.h |= 64, dt(e), ut(n, "componentDidLoad"), t.U(e), s || rt()), t.L(e), t.M && (t.M(), t.M = void 0), 512 & t.h && Bt((() => nt(t, !1))), t.h &= -517
    },
    ft = t => {
        {
            const e = xt(t),
                n = e.$.isConnected;
            return n && 2 == (18 & e.h) && nt(e, !1), n
        }
    },
    rt = e => {
        dt(Wt.documentElement), Bt((() => R(Ft, "appload", {
            detail: {
                namespace: t
            }
        })))
    },
    ut = (t, e, n) => {
        if (t && t[e]) try {
            return t[e](n)
        } catch (t) {
            Ut(t)
        }
    },
    at = (t, e) => t && t.then ? t.then(e) : e(),
    dt = t => t.classList.add("hydrated"),
    ht = (t, e) => xt(t).N.get(e),
    pt = (t, e, n, s) => {
        const l = xt(t),
            o = l.$,
            r = l.N.get(e),
            i = l.h,
            a = l.R;
        n = M(n, s.F[e][0]);
        const c = Number.isNaN(r) && Number.isNaN(n);
        if ((!(8 & i) || void 0 === r) && n !== r && !c && (l.N.set(e, n), a)) {
            if (s.W && 128 & i) {
                const t = s.W[e];
                t && t.map((t => {
                    try {
                        a[t](n, r, e)
                    } catch (t) {
                        Ut(t, o)
                    }
                }))
            }
            2 == (18 & i) && nt(l, !1)
        }
    },
    yt = (t, e, n) => {
        if (e.F) {
            t.watchers && (e.W = t.watchers);
            const s = Object.entries(e.F),
                l = t.prototype;
            if (s.map((([t, [s]]) => {
                    31 & s || 2 & n && 32 & s ? Object.defineProperty(l, t, {
                        get() {
                            return ht(this, t)
                        },
                        set(n) {
                            pt(this, t, n, e)
                        },
                        configurable: !0,
                        enumerable: !0
                    }) : 1 & n && 64 & s && Object.defineProperty(l, t, {
                        value(...e) {
                            const n = xt(this);
                            return n.A.then((() => n.R[t](...e)))
                        }
                    })
                })), 1 & n) {
                const n = new Map;
                l.attributeChangedCallback = function(t, e, s) {
                    At.jmp((() => {
                        const e = n.get(t);
                        if (this.hasOwnProperty(e)) s = this[e], delete this[e];
                        else if (l.hasOwnProperty(e) && "number" == typeof this[e] && this[e] == s) return;
                        this[e] = (null !== s || "boolean" != typeof this[e]) && s
                    }))
                }, t.observedAttributes = s.filter((([t, e]) => 15 & e[0])).map((([t, s]) => {
                    const l = s[1] || t;
                    return n.set(l, t), 512 & s[0] && e.C.push([t, l]), l
                }))
            }
        }
        return t
    },
    mt = async (t, e, n, s, l) => {
        if (0 == (32 & e.h)) {
            {
                if (e.h |= 32, (l = Lt(n)).then) {
                    const t = () => {};
                    l = await l, t()
                }
                l.isProxied || (n.W = l.watchers, yt(l, n, 2), l.isProxied = !0);
                const s = (n.S, () => {});
                e.h |= 8;
                try {
                    new l(e)
                } catch (t) {
                    Ut(t)
                }
                e.h &= -9, e.h |= 128, s()
            }
            if (l.style) {
                let t = l.style;
                const e = N(n);
                if (!Nt.has(e)) {
                    const s = (n.S, () => {});
                    U(e, t, !!(1 & n.h)), s()
                }
            }
        }
        const o = e.P,
            r = () => nt(e, !0);
        o && o["s-rc"] ? o["s-rc"].push(r) : r()
    },
    $t = t => {
        if (0 == (1 & At.h)) {
            const e = xt(t),
                n = e.v,
                s = (n.S, () => {});
            if (1 & e.h) St(t, e, n.D);
            else {
                e.h |= 1, 12 & n.h && bt(t); {
                    let n = t;
                    for (; n = n.parentNode || n.host;)
                        if (n["s-p"]) {
                            et(e, e.P = n);
                            break
                        }
                }
                n.F && Object.entries(n.F).map((([e, [n]]) => {
                    if (31 & n && t.hasOwnProperty(e)) {
                        const n = t[e];
                        delete t[e], t[e] = n
                    }
                })), mt(t, e, n)
            }
            s()
        }
    },
    bt = t => {
        const e = t["s-cr"] = Wt.createComment("");
        e["s-cn"] = !0, t.insertBefore(e, t.firstChild)
    },
    wt = t => {
        if (0 == (1 & At.h)) {
            const e = xt(t),
                n = e.R;
            e.H && (e.H.map((t => t())), e.H = void 0), ut(n, "disconnectedCallback")
        }
    },
    gt = (t, e = {}) => {
        var n;
        const s = [],
            l = e.exclude || [],
            o = Ft.customElements,
            r = Wt.head,
            i = r.querySelector("meta[charset]"),
            a = Wt.createElement("style"),
            c = [];
        let h, u = !0;
        Object.assign(At, e), At.q = new URL(e.resourcesUrl || "./", Wt.baseURI).href, t.map((t => {
            t[1].map((e => {
                const n = {
                    h: e[0],
                    S: e[1],
                    F: e[2],
                    D: e[3]
                };
                n.F = e[2], n.D = e[3], n.C = [], n.W = {};
                const r = n.S,
                    i = class extends HTMLElement {
                        constructor(t) {
                            super(t), Rt(t = this, n), 1 & n.h && t.attachShadow({
                                mode: "open"
                            })
                        }
                        connectedCallback() {
                            h && (clearTimeout(h), h = null), u ? c.push(this) : At.jmp((() => $t(this)))
                        }
                        disconnectedCallback() {
                            At.jmp((() => wt(this)))
                        }
                        componentOnReady() {
                            return xt(this).I
                        }
                    };
                n.V = t[0], l.includes(r) || o.get(r) || (s.push(r), o.define(r, yt(i, n, 1)))
            }))
        })); {
            a.innerHTML = s + d, a.setAttribute("data-styles", "");
            const t = null !== (n = At.g) && void 0 !== n ? n : w(Wt);
            null != t && a.setAttribute("nonce", t), r.insertBefore(a, i ? i.nextSibling : r.firstChild)
        }
        u = !1, c.length ? c.map((t => t.connectedCallback())) : At.jmp((() => h = setTimeout(rt, 30)))
    },
    vt = (t, e) => e,
    St = (t, e, n, s) => {
        n && n.map((([n, s, l]) => {
            const o = jt(t, n),
                r = kt(e, l),
                i = Ot(n);
            At.ael(o, s, r, i), (e.H = e.H || []).push((() => At.rel(o, s, r, i)))
        }))
    },
    kt = (t, e) => n => {
        try {
            256 & t.h ? t.R[e](n) : (t.T = t.T || []).push([e, n])
        } catch (t) {
            Ut(t)
        }
    },
    jt = (t, e) => 8 & e ? Ft : t,
    Ot = t => 0 != (2 & t),
    Ct = t => At.g = t,
    Mt = new WeakMap,
    xt = t => Mt.get(t),
    Pt = (t, e) => Mt.set(e.R = t, e),
    Rt = (t, e) => {
        const n = {
            h: 0,
            $: t,
            v: e,
            N: new Map
        };
        return n.A = new Promise((t => n.L = t)), n.I = new Promise((t => n.U = t)), t["s-p"] = [], t["s-rc"] = [], St(t, n, e.D), Mt.set(t, n)
    },
    Tt = (t, e) => e in t,
    Ut = (t, e) => (0, console.error)(t, e),
    Et = new Map,
    Lt = (t, e, n) => {
        const s = t.S.replace(/-/g, "_"),
            l = t.V,
            o = Et.get(l);
        return o ? o[s] : import (`./${l}.entry.js`).then((t => (Et.set(l, t), t[s])), Ut)
    },
    Nt = new Map,
    Ft = "undefined" != typeof window ? window : {},
    Wt = Ft.document || {
        head: {}
    },
    At = {
        h: 0,
        q: "",
        jmp: t => t(),
        raf: t => requestAnimationFrame(t),
        ael: (t, e, n, s) => t.addEventListener(e, n, s),
        rel: (t, e, n, s) => t.removeEventListener(e, n, s),
        ce: (t, e) => new CustomEvent(t, e)
    },
    Dt = t => Promise.resolve(t),
    Ht = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replaceSync
        } catch (t) {}
        return !1
    })(),
    qt = [],
    It = [],
    Vt = (t, e) => n => {
        t.push(n), r || (r = !0, e && 4 & At.h ? Bt(zt) : At.raf(zt))
    },
    _t = t => {
        for (let e = 0; e < t.length; e++) try {
            t[e](performance.now())
        } catch (t) {
            Ut(t)
        }
        t.length = 0
    },
    zt = () => {
        _t(qt), _t(It), (r = qt.length > 0) && At.raf(zt)
    },
    Bt = t => Dt().then(t),
    Gt = Vt(It, !0);
export {
    vt as F, S as H, x as a, gt as b, P as c, ft as f, ct as g, g as h, Dt as p, Pt as r, Ct as s
};