(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ua(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function da(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=le(r)?Hs(r):da(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(le(e))return e;if(te(e))return e}}const $s=/;(?![^(]*\))/g,Us=/:([^]+)/,zs=/\/\*.*?\*\//gs;function Hs(e){const t={};return e.replace(zs,"").split($s).forEach(n=>{if(n){const r=n.split(Us);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ma(e){let t="";if(le(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=ma(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Bs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ys=ua(Bs);function fo(e){return!!e||e===""}const Zt=e=>le(e)?e:e==null?"":D(e)||te(e)&&(e.toString===po||!U(e.toString))?JSON.stringify(e,co,2):String(e),co=(e,t)=>t&&t.__v_isRef?co(e,t.value):Rt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:uo(t)?{[`Set(${t.size})`]:[...t.values()]}:te(t)&&!D(t)&&!ho(t)?String(t):t,G={},Lt=[],Fe=()=>{},Ws=()=>!1,Ks=/^on[^a-z]/,sr=e=>Ks.test(e),pa=e=>e.startsWith("onUpdate:"),de=Object.assign,ha=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Vs=Object.prototype.hasOwnProperty,Y=(e,t)=>Vs.call(e,t),D=Array.isArray,Rt=e=>lr(e)==="[object Map]",uo=e=>lr(e)==="[object Set]",U=e=>typeof e=="function",le=e=>typeof e=="string",ga=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",mo=e=>te(e)&&U(e.then)&&U(e.catch),po=Object.prototype.toString,lr=e=>po.call(e),qs=e=>lr(e).slice(8,-1),ho=e=>lr(e)==="[object Object]",va=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hn=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xs=/-(\w)/g,Ye=fr(e=>e.replace(Xs,(t,n)=>n?n.toUpperCase():"")),Js=/\B([A-Z])/g,Wt=fr(e=>e.replace(Js,"-$1").toLowerCase()),cr=fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pr=fr(e=>e?`on${cr(e)}`:""),Gn=(e,t)=>!Object.is(e,t),Bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ln=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ti;const Gs=()=>ti||(ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $e;class Zs{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Qs(e,t=$e){t&&t.active&&t.effects.push(e)}const ba=e=>{const t=new Set(e);return t.w=0,t.n=0,t},go=e=>(e.w&st)>0,vo=e=>(e.n&st)>0,el=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},tl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];go(a)&&!vo(a)?a.delete(e):t[n++]=a,a.w&=~st,a.n&=~st}t.length=n}},Dr=new WeakMap;let en=0,st=1;const jr=30;let Te;const Pt=Symbol(""),$r=Symbol("");class ya{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qs(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,at=!0,st=1<<++en,en<=jr?el(this):ni(this),this.fn()}finally{en<=jr&&tl(this),st=1<<--en,Te=this.parent,at=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(ni(this),this.onStop&&this.onStop(),this.active=!1)}}function ni(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let at=!0;const bo=[];function Kt(){bo.push(at),at=!1}function Vt(){const e=bo.pop();at=e===void 0?!0:e}function ke(e,t,n){if(at&&Te){let r=Dr.get(e);r||Dr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ba()),yo(a)}}function yo(e,t){let n=!1;en<=jr?vo(e)||(e.n|=st,n=!go(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Ve(e,t,n,r,a,i){const o=Dr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e)){const l=ln(r);o.forEach((f,u)=>{(u==="length"||u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?va(n)&&s.push(o.get("length")):(s.push(o.get(Pt)),Rt(e)&&s.push(o.get($r)));break;case"delete":D(e)||(s.push(o.get(Pt)),Rt(e)&&s.push(o.get($r)));break;case"set":Rt(e)&&s.push(o.get(Pt));break}if(s.length===1)s[0]&&Ur(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Ur(ba(l))}}function Ur(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&ri(r);for(const r of n)r.computed||ri(r)}function ri(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const nl=ua("__proto__,__v_isRef,__isVue"),_o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ga)),rl=_a(),al=_a(!1,!0),il=_a(!0),ai=ol();function ol(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kt();const r=K(this)[t].apply(this,n);return Vt(),r}}),e}function _a(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?wl:Co:t?Ao:ko).get(r))return r;const o=D(r);if(!e&&o&&Y(ai,a))return Reflect.get(ai,a,i);const s=Reflect.get(r,a,i);return(ga(a)?_o.has(a):nl(a))||(e||ke(r,"get",a),t)?s:ve(s)?o&&va(a)?s:s.value:te(s)?e?Po(s):ka(s):s}}const sl=xo(),ll=xo(!0);function xo(e=!1){return function(n,r,a,i){let o=n[r];if(fn(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!zr(a)&&!fn(a)&&(o=K(o),a=K(a)),!D(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const s=D(n)&&va(r)?Number(r)<n.length:Y(n,r),l=Reflect.set(n,r,a,i);return n===K(i)&&(s?Gn(a,o)&&Ve(n,"set",r,a):Ve(n,"add",r,a)),l}}function fl(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ve(e,"delete",t,void 0),r}function cl(e,t){const n=Reflect.has(e,t);return(!ga(t)||!_o.has(t))&&ke(e,"has",t),n}function ul(e){return ke(e,"iterate",D(e)?"length":Pt),Reflect.ownKeys(e)}const wo={get:rl,set:sl,deleteProperty:fl,has:cl,ownKeys:ul},dl={get:il,set(e,t){return!0},deleteProperty(e,t){return!0}},ml=de({},wo,{get:al,set:ll}),xa=e=>e,ur=e=>Reflect.getPrototypeOf(e);function En(e,t,n=!1,r=!1){e=e.__v_raw;const a=K(e),i=K(t);n||(t!==i&&ke(a,"get",t),ke(a,"get",i));const{has:o}=ur(a),s=r?xa:n?Pa:Ca;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function On(e,t=!1){const n=this.__v_raw,r=K(n),a=K(e);return t||(e!==a&&ke(r,"has",e),ke(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Sn(e,t=!1){return e=e.__v_raw,!t&&ke(K(e),"iterate",Pt),Reflect.get(e,"size",e)}function ii(e){e=K(e);const t=K(this);return ur(t).has.call(t,e)||(t.add(e),Ve(t,"add",e,e)),this}function oi(e,t){t=K(t);const n=K(this),{has:r,get:a}=ur(n);let i=r.call(n,e);i||(e=K(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Gn(t,o)&&Ve(n,"set",e,t):Ve(n,"add",e,t),this}function si(e){const t=K(this),{has:n,get:r}=ur(t);let a=n.call(t,e);a||(e=K(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ve(t,"delete",e,void 0),i}function li(){const e=K(this),t=e.size!==0,n=e.clear();return t&&Ve(e,"clear",void 0,void 0),n}function Tn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=K(o),l=t?xa:e?Pa:Ca;return!e&&ke(s,"iterate",Pt),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function In(e,t,n){return function(...r){const a=this.__v_raw,i=K(a),o=Rt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?xa:t?Pa:Ca;return!t&&ke(i,"iterate",l?$r:Pt),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...t){return e==="delete"?!1:this}}function pl(){const e={get(i){return En(this,i)},get size(){return Sn(this)},has:On,add:ii,set:oi,delete:si,clear:li,forEach:Tn(!1,!1)},t={get(i){return En(this,i,!1,!0)},get size(){return Sn(this)},has:On,add:ii,set:oi,delete:si,clear:li,forEach:Tn(!1,!0)},n={get(i){return En(this,i,!0)},get size(){return Sn(this,!0)},has(i){return On.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Tn(!0,!1)},r={get(i){return En(this,i,!0,!0)},get size(){return Sn(this,!0)},has(i){return On.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=In(i,!1,!1),n[i]=In(i,!0,!1),t[i]=In(i,!1,!0),r[i]=In(i,!0,!0)}),[e,n,t,r]}const[hl,gl,vl,bl]=pl();function wa(e,t){const n=t?e?bl:vl:e?gl:hl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const yl={get:wa(!1,!1)},_l={get:wa(!1,!0)},xl={get:wa(!0,!1)},ko=new WeakMap,Ao=new WeakMap,Co=new WeakMap,wl=new WeakMap;function kl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(e){return e.__v_skip||!Object.isExtensible(e)?0:kl(qs(e))}function ka(e){return fn(e)?e:Aa(e,!1,wo,yl,ko)}function Cl(e){return Aa(e,!1,ml,_l,Ao)}function Po(e){return Aa(e,!0,dl,xl,Co)}function Aa(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Al(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Dt(e){return fn(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function fn(e){return!!(e&&e.__v_isReadonly)}function zr(e){return!!(e&&e.__v_isShallow)}function Eo(e){return Dt(e)||fn(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Oo(e){return Zn(e,"__v_skip",!0),e}const Ca=e=>te(e)?ka(e):e,Pa=e=>te(e)?Po(e):e;function Pl(e){at&&Te&&(e=K(e),yo(e.dep||(e.dep=ba())))}function El(e,t){e=K(e),e.dep&&Ur(e.dep)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Ol(e){return ve(e)?e.value:e}const Sl={get:(e,t,n)=>Ol(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function So(e){return Dt(e)?e:new Proxy(e,Sl)}var To;class Tl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[To]=!1,this._dirty=!0,this.effect=new ya(t,()=>{this._dirty||(this._dirty=!0,El(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=K(this);return Pl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}To="__v_isReadonly";function Il(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new Tl(r,a,i||!a,n)}function it(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){dr(i,t,n)}return a}function Oe(e,t,n,r){if(U(e)){const i=it(e,t,n,r);return i&&mo(i)&&i.catch(o=>{dr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function dr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){it(l,null,10,[e,o,s]);return}}Ml(e,n,a,r)}function Ml(e,t,n,r=!0){console.error(e)}let cn=!1,Hr=!1;const pe=[];let ze=0;const jt=[];let Ke=null,yt=0;const Io=Promise.resolve();let Ea=null;function Nl(e){const t=Ea||Io;return e?t.then(this?e.bind(this):e):t}function Fl(e){let t=ze+1,n=pe.length;for(;t<n;){const r=t+n>>>1;un(pe[r])<e?t=r+1:n=r}return t}function Oa(e){(!pe.length||!pe.includes(e,cn&&e.allowRecurse?ze+1:ze))&&(e.id==null?pe.push(e):pe.splice(Fl(e.id),0,e),Mo())}function Mo(){!cn&&!Hr&&(Hr=!0,Ea=Io.then(Fo))}function Ll(e){const t=pe.indexOf(e);t>ze&&pe.splice(t,1)}function Rl(e){D(e)?jt.push(...e):(!Ke||!Ke.includes(e,e.allowRecurse?yt+1:yt))&&jt.push(e),Mo()}function fi(e,t=cn?ze+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function No(e){if(jt.length){const t=[...new Set(jt)];if(jt.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>un(n)-un(r)),yt=0;yt<Ke.length;yt++)Ke[yt]();Ke=null,yt=0}}const un=e=>e.id==null?1/0:e.id,Dl=(e,t)=>{const n=un(e)-un(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Fo(e){Hr=!1,cn=!0,pe.sort(Dl);const t=Fe;try{for(ze=0;ze<pe.length;ze++){const n=pe[ze];n&&n.active!==!1&&it(n,null,14)}}finally{ze=0,pe.length=0,No(),cn=!1,Ea=null,(pe.length||jt.length)&&Fo()}}function jl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||G;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||G;h&&(a=n.map(x=>le(x)?x.trim():x)),m&&(a=n.map(ln))}let s,l=r[s=Pr(t)]||r[s=Pr(Ye(t))];!l&&i&&(l=r[s=Pr(Wt(t))]),l&&Oe(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(f,e,6,a)}}function Lo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const u=Lo(f,t,!0);u&&(s=!0,de(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(te(e)&&r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):de(o,i),te(e)&&r.set(e,o),o)}function mr(e,t){return!e||!sr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Wt(t))||Y(e,t))}let we=null,pr=null;function Qn(e){const t=we;return we=e,pr=e&&e.type.__scopeId||null,t}function Sa(e){pr=e}function Ta(){pr=null}function dn(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&yi(-1);const i=Qn(t);let o;try{o=e(...a)}finally{Qn(i),r._d&&yi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Er(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:h,setupState:x,ctx:I,inheritAttrs:O}=e;let H,y;const P=Qn(e);try{if(n.shapeFlag&4){const R=a||r;H=Ue(u.call(R,R,m,i,x,h,I)),y=l}else{const R=t;H=Ue(R.length>1?R(i,{attrs:l,slots:s,emit:f}):R(i,null)),y=t.props?l:$l(l)}}catch(R){rn.length=0,dr(R,e,1),H=Q(Le)}let A=H;if(y&&O!==!1){const R=Object.keys(y),{shapeFlag:z}=A;R.length&&z&7&&(o&&R.some(pa)&&(y=Ul(y,o)),A=lt(A,y))}return n.dirs&&(A=lt(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),H=A,Qn(P),H}const $l=e=>{let t;for(const n in e)(n==="class"||n==="style"||sr(n))&&((t||(t={}))[n]=e[n]);return t},Ul=(e,t)=>{const n={};for(const r in e)(!pa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ci(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!mr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ci(r,o,f):!0:!!o;return!1}function ci(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!mr(n,i))return!0}return!1}function Hl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Bl=e=>e.__isSuspense;function Yl(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Rl(e)}function Wl(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function Yn(e,t,n=!1){const r=ue||we;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const Mn={};function Wn(e,t,n){return Ro(e,t,n)}function Ro(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=G){const s=ue;let l,f=!1,u=!1;if(ve(e)?(l=()=>e.value,f=zr(e)):Dt(e)?(l=()=>e,r=!0):D(e)?(u=!0,f=e.some(A=>Dt(A)||zr(A)),l=()=>e.map(A=>{if(ve(A))return A.value;if(Dt(A))return wt(A);if(U(A))return it(A,s,2)})):U(e)?t?l=()=>it(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Oe(e,s,3,[h])}:l=Fe,t&&r){const A=l;l=()=>wt(A())}let m,h=A=>{m=y.onStop=()=>{it(A,s,4)}},x;if(hn)if(h=Fe,t?n&&Oe(t,s,3,[l(),u?[]:void 0,h]):l(),a==="sync"){const A=Hf();x=A.__watcherHandles||(A.__watcherHandles=[])}else return Fe;let I=u?new Array(e.length).fill(Mn):Mn;const O=()=>{if(y.active)if(t){const A=y.run();(r||f||(u?A.some((R,z)=>Gn(R,I[z])):Gn(A,I)))&&(m&&m(),Oe(t,s,3,[A,I===Mn?void 0:u&&I[0]===Mn?[]:I,h]),I=A)}else y.run()};O.allowRecurse=!!t;let H;a==="sync"?H=O:a==="post"?H=()=>ye(O,s&&s.suspense):(O.pre=!0,s&&(O.id=s.uid),H=()=>Oa(O));const y=new ya(l,H);t?n?O():I=y.run():a==="post"?ye(y.run.bind(y),s&&s.suspense):y.run();const P=()=>{y.stop(),s&&s.scope&&ha(s.scope.effects,y)};return x&&x.push(P),P}function Kl(e,t,n){const r=this.proxy,a=le(e)?e.includes(".")?Do(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=ue;Ht(this);const s=Ro(a,i.bind(r),n);return o?Ht(o):Et(),s}function Do(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function wt(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))wt(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)wt(e[n],t);else if(uo(e)||Rt(e))e.forEach(n=>{wt(n,t)});else if(ho(e))for(const n in e)wt(e[n],t);return e}function Vl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ho(()=>{e.isMounted=!0}),Bo(()=>{e.isUnmounting=!0}),e}const Ce=[Function,Array],ql={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},setup(e,{slots:t}){const n=Ff(),r=Vl();let a;return()=>{const i=t.default&&Uo(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const O of i)if(O.type!==Le){o=O;break}}const s=K(e),{mode:l}=s;if(r.isLeaving)return Or(o);const f=ui(o);if(!f)return Or(o);const u=Br(f,s,r,n);Yr(f,u);const m=n.subTree,h=m&&ui(m);let x=!1;const{getTransitionKey:I}=f.type;if(I){const O=I();a===void 0?a=O:O!==a&&(a=O,x=!0)}if(h&&h.type!==Le&&(!_t(f,h)||x)){const O=Br(h,s,r,n);if(Yr(h,O),l==="out-in")return r.isLeaving=!0,O.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Or(o);l==="in-out"&&f.type!==Le&&(O.delayLeave=(H,y,P)=>{const A=$o(r,h);A[String(h.key)]=h,H._leaveCb=()=>{y(),H._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},jo=ql;function $o(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Br(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:m,onLeave:h,onAfterLeave:x,onLeaveCancelled:I,onBeforeAppear:O,onAppear:H,onAfterAppear:y,onAppearCancelled:P}=t,A=String(e.key),R=$o(n,e),z=($,W)=>{$&&Oe($,r,9,W)},se=($,W)=>{const q=W[1];z($,W),D($)?$.every(me=>me.length<=1)&&q():$.length<=1&&q()},re={mode:i,persisted:o,beforeEnter($){let W=s;if(!n.isMounted)if(a)W=O||s;else return;$._leaveCb&&$._leaveCb(!0);const q=R[A];q&&_t(e,q)&&q.el._leaveCb&&q.el._leaveCb(),z(W,[$])},enter($){let W=l,q=f,me=u;if(!n.isMounted)if(a)W=H||l,q=y||f,me=P||u;else return;let M=!1;const ne=$._enterCb=_e=>{M||(M=!0,_e?z(me,[$]):z(q,[$]),re.delayedLeave&&re.delayedLeave(),$._enterCb=void 0)};W?se(W,[$,ne]):ne()},leave($,W){const q=String(e.key);if($._enterCb&&$._enterCb(!0),n.isUnmounting)return W();z(m,[$]);let me=!1;const M=$._leaveCb=ne=>{me||(me=!0,W(),ne?z(I,[$]):z(x,[$]),$._leaveCb=void 0,R[q]===e&&delete R[q])};R[q]=e,h?se(h,[$,M]):M()},clone($){return Br($,t,n,r)}};return re}function Or(e){if(hr(e))return e=lt(e),e.children=null,e}function ui(e){return hr(e)?e.children?e.children[0]:void 0:e}function Yr(e,t){e.shapeFlag&6&&e.component?Yr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Uo(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Pe?(o.patchFlag&128&&a++,r=r.concat(Uo(o.children,t,s))):(t||o.type!==Le)&&r.push(s!=null?lt(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ia(e){return U(e)?{setup:e,name:e.name}:e}const Kn=e=>!!e.type.__asyncLoader,hr=e=>e.type.__isKeepAlive;function Xl(e,t){zo(e,"a",t)}function Jl(e,t){zo(e,"da",t)}function zo(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(gr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)hr(a.parent.vnode)&&Gl(r,t,n,a),a=a.parent}}function Gl(e,t,n,r){const a=gr(t,e,r,!0);Yo(()=>{ha(r[t],a)},n)}function gr(e,t,n=ue,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kt(),Ht(n);const s=Oe(t,n,e,o);return Et(),Vt(),s});return r?a.unshift(i):a.push(i),i}}const Ge=e=>(t,n=ue)=>(!hn||e==="sp")&&gr(e,(...r)=>t(...r),n),Zl=Ge("bm"),Ho=Ge("m"),Ql=Ge("bu"),ef=Ge("u"),Bo=Ge("bum"),Yo=Ge("um"),tf=Ge("sp"),nf=Ge("rtg"),rf=Ge("rtc");function af(e,t=ue){gr("ec",e,t)}function $t(e,t){const n=we;if(n===null)return e;const r=yr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=G]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&wt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function pt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Kt(),Oe(l,n,8,[e.el,s,e,t]),Vt())}}const Wo="components";function ot(e,t){return sf(Wo,e,!0,t)||e}const of=Symbol();function sf(e,t,n=!0,r=!1){const a=we||ue;if(a){const i=a.type;if(e===Wo){const s=$f(i,!1);if(s&&(s===t||s===Ye(t)||s===cr(Ye(t))))return i}const o=di(a[e]||i[e],t)||di(a.appContext[e],t);return!o&&r?i:o}}function di(e,t){return e&&(e[t]||e[Ye(t)]||e[cr(Ye(t))])}function lf(e,t,n,r){let a;const i=n&&n[r];if(D(e)||le(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(te(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Wr=e=>e?rs(e)?yr(e)||e.proxy:Wr(e.parent):null,nn=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$emit:e=>e.emit,$options:e=>Ma(e),$forceUpdate:e=>e.f||(e.f=()=>Oa(e.update)),$nextTick:e=>e.n||(e.n=Nl.bind(e.proxy)),$watch:e=>Kl.bind(e)}),Sr=(e,t)=>e!==G&&!e.__isScriptSetup&&Y(e,t),ff={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Sr(r,t))return o[t]=1,r[t];if(a!==G&&Y(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,i[t];if(n!==G&&Y(n,t))return o[t]=4,n[t];Kr&&(o[t]=0)}}const u=nn[t];let m,h;if(u)return t==="$attrs"&&ke(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==G&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Sr(a,t)?(a[t]=n,!0):r!==G&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==G&&Y(e,o)||Sr(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(nn,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Kr=!0;function cf(e){const t=Ma(e),n=e.proxy,r=e.ctx;Kr=!1,t.beforeCreate&&mi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:h,beforeUpdate:x,updated:I,activated:O,deactivated:H,beforeDestroy:y,beforeUnmount:P,destroyed:A,unmounted:R,render:z,renderTracked:se,renderTriggered:re,errorCaptured:$,serverPrefetch:W,expose:q,inheritAttrs:me,components:M,directives:ne,filters:_e}=t;if(f&&uf(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const X=o[ae];U(X)&&(r[ae]=X.bind(n))}if(a){const ae=a.call(n,n);te(ae)&&(e.data=ka(ae))}if(Kr=!0,i)for(const ae in i){const X=i[ae],dt=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Fe,Cn=!U(X)&&U(X.set)?X.set.bind(n):Fe,mt=Ee({get:dt,set:Cn});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Re=>mt.value=Re})}if(s)for(const ae in s)Ko(s[ae],r,n,ae);if(l){const ae=U(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(X=>{Wl(X,ae[X])})}u&&mi(u,e,"c");function ce(ae,X){D(X)?X.forEach(dt=>ae(dt.bind(n))):X&&ae(X.bind(n))}if(ce(Zl,m),ce(Ho,h),ce(Ql,x),ce(ef,I),ce(Xl,O),ce(Jl,H),ce(af,$),ce(rf,se),ce(nf,re),ce(Bo,P),ce(Yo,R),ce(tf,W),D(q))if(q.length){const ae=e.exposed||(e.exposed={});q.forEach(X=>{Object.defineProperty(ae,X,{get:()=>n[X],set:dt=>n[X]=dt})})}else e.exposed||(e.exposed={});z&&e.render===Fe&&(e.render=z),me!=null&&(e.inheritAttrs=me),M&&(e.components=M),ne&&(e.directives=ne)}function uf(e,t,n=Fe,r=!1){D(e)&&(e=Vr(e));for(const a in e){const i=e[a];let o;te(i)?"default"in i?o=Yn(i.from||a,i.default,!0):o=Yn(i.from||a):o=Yn(i),ve(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function mi(e,t,n){Oe(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ko(e,t,n,r){const a=r.includes(".")?Do(n,r):()=>n[r];if(le(e)){const i=t[e];U(i)&&Wn(a,i)}else if(U(e))Wn(a,e.bind(n));else if(te(e))if(D(e))e.forEach(i=>Ko(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&Wn(a,i,e)}}function Ma(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>er(l,f,o,!0)),er(l,t,o)),te(t)&&i.set(t,l),l}function er(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&er(e,i,n,!0),a&&a.forEach(o=>er(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=df[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const df={data:pi,props:bt,emits:bt,methods:bt,computed:bt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:bt,directives:bt,watch:pf,provide:pi,inject:mf};function pi(e,t){return t?e?function(){return de(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function mf(e,t){return bt(Vr(e),Vr(t))}function Vr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function bt(e,t){return e?de(de(Object.create(null),e),t):t}function pf(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function hf(e,t,n,r=!1){const a={},i={};Zn(i,br,1),e.propsDefaults=Object.create(null),Vo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Cl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function gf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=K(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(mr(e.emitsOptions,h))continue;const x=t[h];if(l)if(Y(i,h))x!==i[h]&&(i[h]=x,f=!0);else{const I=Ye(h);a[I]=qr(l,s,I,x,e,!1)}else x!==i[h]&&(i[h]=x,f=!0)}}}else{Vo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!Y(t,m)&&((u=Wt(m))===m||!Y(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=qr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!Y(t,m))&&(delete i[m],f=!0)}f&&Ve(e,"set","$attrs")}function Vo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Hn(l))continue;const f=t[l];let u;a&&Y(a,u=Ye(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:mr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=K(n),f=s||G;for(let u=0;u<i.length;u++){const m=i[u];n[m]=qr(a,l,m,f[m],e,!Y(f,m))}}return o}function qr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ht(a),r=f[n]=l.call(null,t),Et())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Wt(n))&&(r=!0))}return r}function qo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const u=m=>{l=!0;const[h,x]=qo(m,t,!0);de(o,h),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return te(e)&&r.set(e,Lt),Lt;if(D(i))for(let u=0;u<i.length;u++){const m=Ye(i[u]);hi(m)&&(o[m]=G)}else if(i)for(const u in i){const m=Ye(u);if(hi(m)){const h=i[u],x=o[m]=D(h)||U(h)?{type:h}:Object.assign({},h);if(x){const I=bi(Boolean,x.type),O=bi(String,x.type);x[0]=I>-1,x[1]=O<0||I<O,(I>-1||Y(x,"default"))&&s.push(m)}}}const f=[o,s];return te(e)&&r.set(e,f),f}function hi(e){return e[0]!=="$"}function gi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function vi(e,t){return gi(e)===gi(t)}function bi(e,t){return D(t)?t.findIndex(n=>vi(n,e)):U(t)&&vi(t,e)?0:-1}const Xo=e=>e[0]==="_"||e==="$stable",Na=e=>D(e)?e.map(Ue):[Ue(e)],vf=(e,t,n)=>{if(t._n)return t;const r=dn((...a)=>Na(t(...a)),n);return r._c=!1,r},Jo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Xo(a))continue;const i=e[a];if(U(i))t[a]=vf(a,i,r);else if(i!=null){const o=Na(i);t[a]=()=>o}}},Go=(e,t)=>{const n=Na(t);e.slots.default=()=>n},bf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),Zn(t,"_",n)):Jo(t,e.slots={})}else e.slots={},t&&Go(e,t);Zn(e.slots,br,1)},yf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=G;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(de(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Jo(t,a)),o=t}else t&&(Go(e,t),o={default:1});if(i)for(const s in a)!Xo(s)&&!(s in o)&&delete a[s]};function Zo(){return{app:null,config:{isNativeTag:Ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _f=0;function xf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!te(a)&&(a=null);const i=Zo(),o=new Set;let s=!1;const l=i.app={_uid:_f++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Bf,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...u)):U(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const h=Q(r,a);return h.appContext=i,u&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,yr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function Xr(e,t,n,r,a=!1){if(D(e)){e.forEach((h,x)=>Xr(h,t&&(D(t)?t[x]:t),n,r,a));return}if(Kn(r)&&!a)return;const i=r.shapeFlag&4?yr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===G?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(le(f)?(u[f]=null,Y(m,f)&&(m[f]=null)):ve(f)&&(f.value=null)),U(l))it(l,s,12,[o,u]);else{const h=le(l),x=ve(l);if(h||x){const I=()=>{if(e.f){const O=h?Y(m,l)?m[l]:u[l]:l.value;a?D(O)&&ha(O,i):D(O)?O.includes(i)||O.push(i):h?(u[l]=[i],Y(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,Y(m,l)&&(m[l]=o)):x&&(l.value=o,e.k&&(u[e.k]=o))};o?(I.id=-1,ye(I,n)):I()}}}const ye=Yl;function wf(e){return kf(e)}function kf(e,t){const n=Gs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:h,setScopeId:x=Fe,insertStaticContent:I}=e,O=(c,d,p,v=null,g=null,w=null,C=!1,_=null,k=!!d.dynamicChildren)=>{if(c===d)return;c&&!_t(c,d)&&(v=Pn(c),Re(c,g,w,!0),c=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:S}=d;switch(b){case vr:H(c,d,p,v);break;case Le:y(c,d,p,v);break;case Vn:c==null&&P(d,p,v,C);break;case Pe:M(c,d,p,v,g,w,C,_,k);break;default:S&1?z(c,d,p,v,g,w,C,_,k):S&6?ne(c,d,p,v,g,w,C,_,k):(S&64||S&128)&&b.process(c,d,p,v,g,w,C,_,k,Tt)}N!=null&&g&&Xr(N,c&&c.ref,w,d||c,!d)},H=(c,d,p,v)=>{if(c==null)r(d.el=s(d.children),p,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},y=(c,d,p,v)=>{c==null?r(d.el=l(d.children||""),p,v):d.el=c.el},P=(c,d,p,v)=>{[c.el,c.anchor]=I(c.children,d,p,v,c.el,c.anchor)},A=({el:c,anchor:d},p,v)=>{let g;for(;c&&c!==d;)g=h(c),r(c,p,v),c=g;r(d,p,v)},R=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=h(c),a(c),c=p;a(d)},z=(c,d,p,v,g,w,C,_,k)=>{C=C||d.type==="svg",c==null?se(d,p,v,g,w,C,_,k):W(c,d,g,w,C,_,k)},se=(c,d,p,v,g,w,C,_)=>{let k,b;const{type:N,props:S,shapeFlag:F,transition:j,dirs:B}=c;if(k=c.el=o(c.type,w,S&&S.is,S),F&8?u(k,c.children):F&16&&$(c.children,k,null,v,g,w&&N!=="foreignObject",C,_),B&&pt(c,null,v,"created"),S){for(const V in S)V!=="value"&&!Hn(V)&&i(k,V,null,S[V],w,c.children,v,g,We);"value"in S&&i(k,"value",null,S.value),(b=S.onVnodeBeforeMount)&&je(b,v,c)}re(k,c,c.scopeId,C,v),B&&pt(c,null,v,"beforeMount");const J=(!g||g&&!g.pendingBranch)&&j&&!j.persisted;J&&j.beforeEnter(k),r(k,d,p),((b=S&&S.onVnodeMounted)||J||B)&&ye(()=>{b&&je(b,v,c),J&&j.enter(k),B&&pt(c,null,v,"mounted")},g)},re=(c,d,p,v,g)=>{if(p&&x(c,p),v)for(let w=0;w<v.length;w++)x(c,v[w]);if(g){let w=g.subTree;if(d===w){const C=g.vnode;re(c,C,C.scopeId,C.slotScopeIds,g.parent)}}},$=(c,d,p,v,g,w,C,_,k=0)=>{for(let b=k;b<c.length;b++){const N=c[b]=_?rt(c[b]):Ue(c[b]);O(null,N,d,p,v,g,w,C,_)}},W=(c,d,p,v,g,w,C)=>{const _=d.el=c.el;let{patchFlag:k,dynamicChildren:b,dirs:N}=d;k|=c.patchFlag&16;const S=c.props||G,F=d.props||G;let j;p&&ht(p,!1),(j=F.onVnodeBeforeUpdate)&&je(j,p,d,c),N&&pt(d,c,p,"beforeUpdate"),p&&ht(p,!0);const B=g&&d.type!=="foreignObject";if(b?q(c.dynamicChildren,b,_,p,v,B,w):C||X(c,d,_,null,p,v,B,w,!1),k>0){if(k&16)me(_,d,S,F,p,v,g);else if(k&2&&S.class!==F.class&&i(_,"class",null,F.class,g),k&4&&i(_,"style",S.style,F.style,g),k&8){const J=d.dynamicProps;for(let V=0;V<J.length;V++){const oe=J[V],Se=S[oe],It=F[oe];(It!==Se||oe==="value")&&i(_,oe,Se,It,g,c.children,p,v,We)}}k&1&&c.children!==d.children&&u(_,d.children)}else!C&&b==null&&me(_,d,S,F,p,v,g);((j=F.onVnodeUpdated)||N)&&ye(()=>{j&&je(j,p,d,c),N&&pt(d,c,p,"updated")},v)},q=(c,d,p,v,g,w,C)=>{for(let _=0;_<d.length;_++){const k=c[_],b=d[_],N=k.el&&(k.type===Pe||!_t(k,b)||k.shapeFlag&70)?m(k.el):p;O(k,b,N,null,v,g,w,C,!0)}},me=(c,d,p,v,g,w,C)=>{if(p!==v){if(p!==G)for(const _ in p)!Hn(_)&&!(_ in v)&&i(c,_,p[_],null,C,d.children,g,w,We);for(const _ in v){if(Hn(_))continue;const k=v[_],b=p[_];k!==b&&_!=="value"&&i(c,_,b,k,C,d.children,g,w,We)}"value"in v&&i(c,"value",p.value,v.value)}},M=(c,d,p,v,g,w,C,_,k)=>{const b=d.el=c?c.el:s(""),N=d.anchor=c?c.anchor:s("");let{patchFlag:S,dynamicChildren:F,slotScopeIds:j}=d;j&&(_=_?_.concat(j):j),c==null?(r(b,p,v),r(N,p,v),$(d.children,p,N,g,w,C,_,k)):S>0&&S&64&&F&&c.dynamicChildren?(q(c.dynamicChildren,F,p,g,w,C,_),(d.key!=null||g&&d===g.subTree)&&Qo(c,d,!0)):X(c,d,p,N,g,w,C,_,k)},ne=(c,d,p,v,g,w,C,_,k)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?g.ctx.activate(d,p,v,C,k):_e(d,p,v,g,w,C,k):Jt(c,d,k)},_e=(c,d,p,v,g,w,C)=>{const _=c.component=Nf(c,v,g);if(hr(c)&&(_.ctx.renderer=Tt),Lf(_),_.asyncDep){if(g&&g.registerDep(_,ce),!c.el){const k=_.subTree=Q(Le);y(null,k,d,p)}return}ce(_,c,d,p,g,w,C)},Jt=(c,d,p)=>{const v=d.component=c.component;if(zl(c,d,p))if(v.asyncDep&&!v.asyncResolved){ae(v,d,p);return}else v.next=d,Ll(v.update),v.update();else d.el=c.el,v.vnode=d},ce=(c,d,p,v,g,w,C)=>{const _=()=>{if(c.isMounted){let{next:N,bu:S,u:F,parent:j,vnode:B}=c,J=N,V;ht(c,!1),N?(N.el=B.el,ae(c,N,C)):N=B,S&&Bn(S),(V=N.props&&N.props.onVnodeBeforeUpdate)&&je(V,j,N,B),ht(c,!0);const oe=Er(c),Se=c.subTree;c.subTree=oe,O(Se,oe,m(Se.el),Pn(Se),c,g,w),N.el=oe.el,J===null&&Hl(c,oe.el),F&&ye(F,g),(V=N.props&&N.props.onVnodeUpdated)&&ye(()=>je(V,j,N,B),g)}else{let N;const{el:S,props:F}=d,{bm:j,m:B,parent:J}=c,V=Kn(d);if(ht(c,!1),j&&Bn(j),!V&&(N=F&&F.onVnodeBeforeMount)&&je(N,J,d),ht(c,!0),S&&Cr){const oe=()=>{c.subTree=Er(c),Cr(S,c.subTree,c,g,null)};V?d.type.__asyncLoader().then(()=>!c.isUnmounted&&oe()):oe()}else{const oe=c.subTree=Er(c);O(null,oe,p,v,c,g,w),d.el=oe.el}if(B&&ye(B,g),!V&&(N=F&&F.onVnodeMounted)){const oe=d;ye(()=>je(N,J,oe),g)}(d.shapeFlag&256||J&&Kn(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&ye(c.a,g),c.isMounted=!0,d=p=v=null}},k=c.effect=new ya(_,()=>Oa(b),c.scope),b=c.update=()=>k.run();b.id=c.uid,ht(c,!0),b()},ae=(c,d,p)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,gf(c,d.props,v,p),yf(c,d.children,p),Kt(),fi(),Vt()},X=(c,d,p,v,g,w,C,_,k=!1)=>{const b=c&&c.children,N=c?c.shapeFlag:0,S=d.children,{patchFlag:F,shapeFlag:j}=d;if(F>0){if(F&128){Cn(b,S,p,v,g,w,C,_,k);return}else if(F&256){dt(b,S,p,v,g,w,C,_,k);return}}j&8?(N&16&&We(b,g,w),S!==b&&u(p,S)):N&16?j&16?Cn(b,S,p,v,g,w,C,_,k):We(b,g,w,!0):(N&8&&u(p,""),j&16&&$(S,p,v,g,w,C,_,k))},dt=(c,d,p,v,g,w,C,_,k)=>{c=c||Lt,d=d||Lt;const b=c.length,N=d.length,S=Math.min(b,N);let F;for(F=0;F<S;F++){const j=d[F]=k?rt(d[F]):Ue(d[F]);O(c[F],j,p,null,g,w,C,_,k)}b>N?We(c,g,w,!0,!1,S):$(d,p,v,g,w,C,_,k,S)},Cn=(c,d,p,v,g,w,C,_,k)=>{let b=0;const N=d.length;let S=c.length-1,F=N-1;for(;b<=S&&b<=F;){const j=c[b],B=d[b]=k?rt(d[b]):Ue(d[b]);if(_t(j,B))O(j,B,p,null,g,w,C,_,k);else break;b++}for(;b<=S&&b<=F;){const j=c[S],B=d[F]=k?rt(d[F]):Ue(d[F]);if(_t(j,B))O(j,B,p,null,g,w,C,_,k);else break;S--,F--}if(b>S){if(b<=F){const j=F+1,B=j<N?d[j].el:v;for(;b<=F;)O(null,d[b]=k?rt(d[b]):Ue(d[b]),p,B,g,w,C,_,k),b++}}else if(b>F)for(;b<=S;)Re(c[b],g,w,!0),b++;else{const j=b,B=b,J=new Map;for(b=B;b<=F;b++){const xe=d[b]=k?rt(d[b]):Ue(d[b]);xe.key!=null&&J.set(xe.key,b)}let V,oe=0;const Se=F-B+1;let It=!1,Za=0;const Gt=new Array(Se);for(b=0;b<Se;b++)Gt[b]=0;for(b=j;b<=S;b++){const xe=c[b];if(oe>=Se){Re(xe,g,w,!0);continue}let De;if(xe.key!=null)De=J.get(xe.key);else for(V=B;V<=F;V++)if(Gt[V-B]===0&&_t(xe,d[V])){De=V;break}De===void 0?Re(xe,g,w,!0):(Gt[De-B]=b+1,De>=Za?Za=De:It=!0,O(xe,d[De],p,null,g,w,C,_,k),oe++)}const Qa=It?Af(Gt):Lt;for(V=Qa.length-1,b=Se-1;b>=0;b--){const xe=B+b,De=d[xe],ei=xe+1<N?d[xe+1].el:v;Gt[b]===0?O(null,De,p,ei,g,w,C,_,k):It&&(V<0||b!==Qa[V]?mt(De,p,ei,2):V--)}}},mt=(c,d,p,v,g=null)=>{const{el:w,type:C,transition:_,children:k,shapeFlag:b}=c;if(b&6){mt(c.component.subTree,d,p,v);return}if(b&128){c.suspense.move(d,p,v);return}if(b&64){C.move(c,d,p,Tt);return}if(C===Pe){r(w,d,p);for(let S=0;S<k.length;S++)mt(k[S],d,p,v);r(c.anchor,d,p);return}if(C===Vn){A(c,d,p);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(w),r(w,d,p),ye(()=>_.enter(w),g);else{const{leave:S,delayLeave:F,afterLeave:j}=_,B=()=>r(w,d,p),J=()=>{S(w,()=>{B(),j&&j()})};F?F(w,B,J):J()}else r(w,d,p)},Re=(c,d,p,v=!1,g=!1)=>{const{type:w,props:C,ref:_,children:k,dynamicChildren:b,shapeFlag:N,patchFlag:S,dirs:F}=c;if(_!=null&&Xr(_,null,p,c,!0),N&256){d.ctx.deactivate(c);return}const j=N&1&&F,B=!Kn(c);let J;if(B&&(J=C&&C.onVnodeBeforeUnmount)&&je(J,d,c),N&6)js(c.component,p,v);else{if(N&128){c.suspense.unmount(p,v);return}j&&pt(c,null,d,"beforeUnmount"),N&64?c.type.remove(c,d,p,g,Tt,v):b&&(w!==Pe||S>0&&S&64)?We(b,d,p,!1,!0):(w===Pe&&S&384||!g&&N&16)&&We(k,d,p),v&&Ja(c)}(B&&(J=C&&C.onVnodeUnmounted)||j)&&ye(()=>{J&&je(J,d,c),j&&pt(c,null,d,"unmounted")},p)},Ja=c=>{const{type:d,el:p,anchor:v,transition:g}=c;if(d===Pe){Ds(p,v);return}if(d===Vn){R(c);return}const w=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:C,delayLeave:_}=g,k=()=>C(p,w);_?_(c.el,w,k):k()}else w()},Ds=(c,d)=>{let p;for(;c!==d;)p=h(c),a(c),c=p;a(d)},js=(c,d,p)=>{const{bum:v,scope:g,update:w,subTree:C,um:_}=c;v&&Bn(v),g.stop(),w&&(w.active=!1,Re(C,c,d,p)),_&&ye(_,d),ye(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},We=(c,d,p,v=!1,g=!1,w=0)=>{for(let C=w;C<c.length;C++)Re(c[C],d,p,v,g)},Pn=c=>c.shapeFlag&6?Pn(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),Ga=(c,d,p)=>{c==null?d._vnode&&Re(d._vnode,null,null,!0):O(d._vnode||null,c,d,null,null,null,p),fi(),No(),d._vnode=c},Tt={p:O,um:Re,m:mt,r:Ja,mt:_e,mc:$,pc:X,pbc:q,n:Pn,o:e};let Ar,Cr;return t&&([Ar,Cr]=t(Tt)),{render:Ga,hydrate:Ar,createApp:xf(Ga,Ar)}}function ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Qo(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=rt(a[i]),s.el=o.el),n||Qo(o,s)),s.type===vr&&(s.el=o.el)}}function Af(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Cf=e=>e.__isTeleport,Pe=Symbol(void 0),vr=Symbol(void 0),Le=Symbol(void 0),Vn=Symbol(void 0),rn=[];let Me=null;function ge(e=!1){rn.push(Me=e?null:[])}function Pf(){rn.pop(),Me=rn[rn.length-1]||null}let mn=1;function yi(e){mn+=e}function es(e){return e.dynamicChildren=mn>0?Me||Lt:null,Pf(),mn>0&&Me&&Me.push(e),e}function He(e,t,n,r,a,i){return es(L(e,t,n,r,a,i,!0))}function pn(e,t,n,r,a){return es(Q(e,t,n,r,a,!0))}function Jr(e){return e?e.__v_isVNode===!0:!1}function _t(e,t){return e.type===t.type&&e.key===t.key}const br="__vInternal",ts=({key:e})=>e??null,qn=({ref:e,ref_key:t,ref_for:n})=>e!=null?le(e)||ve(e)||U(e)?{i:we,r:e,k:t,f:!!n}:e:null;function L(e,t=null,n=null,r=0,a=null,i=e===Pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ts(t),ref:t&&qn(t),scopeId:pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return s?(Fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),mn>0&&!o&&Me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Me.push(l),l}const Q=Ef;function Ef(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===of)&&(e=Le),Jr(e)){const s=lt(e,t,!0);return n&&Fa(s,n),mn>0&&!i&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(Uf(e)&&(e=e.__vccOpts),t){t=Of(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=ma(s)),te(l)&&(Eo(l)&&!D(l)&&(l=de({},l)),t.style=da(l))}const o=le(e)?1:Bl(e)?128:Cf(e)?64:te(e)?4:U(e)?2:0;return L(e,t,n,r,a,o,i,!0)}function Of(e){return e?Eo(e)||br in e?de({},e):e:null}function lt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Tf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ts(s),ref:t&&t.ref?n&&a?D(a)?a.concat(qn(t)):[a,qn(t)]:qn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function ns(e=" ",t=0){return Q(vr,null,e,t)}function Sf(e,t){const n=Q(Vn,null,e);return n.staticCount=t,n}function kt(e="",t=!1){return t?(ge(),pn(Le,null,e)):Q(Le,null,e)}function Ue(e){return e==null||typeof e=="boolean"?Q(Le):D(e)?Q(Pe,null,e.slice()):typeof e=="object"?rt(e):Q(vr,null,String(e))}function rt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function Fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(br in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[ns(t)]):n=8);e.children=t,e.shapeFlag|=n}function Tf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ma([t.class,r.class]));else if(a==="style")t.style=da([t.style,r.style]);else if(sr(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function je(e,t,n,r=null){Oe(e,t,7,[n,r])}const If=Zo();let Mf=0;function Nf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||If,i={uid:Mf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qo(r,a),emitsOptions:Lo(r,a),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=jl.bind(null,i),e.ce&&e.ce(i),i}let ue=null;const Ff=()=>ue||we,Ht=e=>{ue=e,e.scope.on()},Et=()=>{ue&&ue.scope.off(),ue=null};function rs(e){return e.vnode.shapeFlag&4}let hn=!1;function Lf(e,t=!1){hn=t;const{props:n,children:r}=e.vnode,a=rs(e);hf(e,n,a,t),bf(e,r);const i=a?Rf(e,t):void 0;return hn=!1,i}function Rf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Oo(new Proxy(e.ctx,ff));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?jf(e):null;Ht(e),Kt();const i=it(r,e,0,[e.props,a]);if(Vt(),Et(),mo(i)){if(i.then(Et,Et),t)return i.then(o=>{_i(e,o,t)}).catch(o=>{dr(o,e,0)});e.asyncDep=i}else _i(e,i,t)}else as(e,t)}function _i(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=So(t)),as(e,n)}let xi;function as(e,t,n){const r=e.type;if(!e.render){if(!t&&xi&&!r.render){const a=r.template||Ma(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=de(de({isCustomElement:i,delimiters:s},o),l);r.render=xi(a,f)}}e.render=r.render||Fe}Ht(e),Kt(),cf(e),Vt(),Et()}function Df(e){return new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}})}function jf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Df(e))},slots:e.slots,emit:e.emit,expose:t}}function yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(So(Oo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nn)return nn[n](e)},has(t,n){return n in t||n in nn}}))}function $f(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function Uf(e){return U(e)&&"__vccOpts"in e}const Ee=(e,t)=>Il(e,t,hn);function La(e,t,n){const r=arguments.length;return r===2?te(t)&&!D(t)?Jr(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jr(n)&&(n=[n]),Q(e,t,n))}const zf=Symbol(""),Hf=()=>Yn(zf),Bf="3.2.45",Yf="http://www.w3.org/2000/svg",xt=typeof document<"u"?document:null,wi=xt&&xt.createElement("template"),Wf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?xt.createElementNS(Yf,e):xt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>xt.createTextNode(e),createComment:e=>xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{wi.innerHTML=r?`<svg>${e}</svg>`:e;const s=wi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vf(e,t,n){const r=e.style,a=le(n);if(n&&!a){for(const i in n)Gr(r,i,n[i]);if(t&&!le(t))for(const i in t)n[i]==null&&Gr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ki=/\s*!important$/;function Gr(e,t,n){if(D(n))n.forEach(r=>Gr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=qf(e,t);ki.test(n)?e.setProperty(Wt(r),n.replace(ki,""),"important"):e[r]=n}}const Ai=["Webkit","Moz","ms"],Tr={};function qf(e,t){const n=Tr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Tr[t]=r;r=cr(r);for(let a=0;a<Ai.length;a++){const i=Ai[a]+r;if(i in e)return Tr[t]=i}return t}const Ci="http://www.w3.org/1999/xlink";function Xf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ci,t.slice(6,t.length)):e.setAttributeNS(Ci,t,n);else{const i=Ys(t);n==null||i&&!fo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Jf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=fo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Mt(e,t,n,r){e.addEventListener(t,n,r)}function Gf(e,t,n,r){e.removeEventListener(t,n,r)}function Zf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Qf(t);if(r){const f=i[t]=nc(r,a);Mt(e,s,f,l)}else o&&(Gf(e,s,o,l),i[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function Qf(e){let t;if(Pi.test(e)){t={};let r;for(;r=e.match(Pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wt(e.slice(2)),t]}let Ir=0;const ec=Promise.resolve(),tc=()=>Ir||(ec.then(()=>Ir=0),Ir=Date.now());function nc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(rc(r,n.value),t,5,[r])};return n.value=e,n.attached=tc(),n}function rc(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ei=/^on[a-z]/,ac=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Kf(e,r,a):t==="style"?Vf(e,n,r):sr(t)?pa(t)||Zf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ic(e,t,r,a))?Jf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xf(e,t,r,a))};function ic(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ei.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ei.test(t)&&le(n)?!1:t in e}const et="transition",Qt="animation",Bt=(e,{slots:t})=>La(jo,oc(e),t);Bt.displayName="Transition";const is={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Bt.props=de({},jo.props,is);const gt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},Oi=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function oc(e){const t={};for(const M in e)M in is||(t[M]=e[M]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,I=sc(a),O=I&&I[0],H=I&&I[1],{onBeforeEnter:y,onEnter:P,onEnterCancelled:A,onLeave:R,onLeaveCancelled:z,onBeforeAppear:se=y,onAppear:re=P,onAppearCancelled:$=A}=t,W=(M,ne,_e)=>{vt(M,ne?u:s),vt(M,ne?f:o),_e&&_e()},q=(M,ne)=>{M._isLeaving=!1,vt(M,m),vt(M,x),vt(M,h),ne&&ne()},me=M=>(ne,_e)=>{const Jt=M?re:P,ce=()=>W(ne,M,_e);gt(Jt,[ne,ce]),Si(()=>{vt(ne,M?l:i),tt(ne,M?u:s),Oi(Jt)||Ti(ne,r,O,ce)})};return de(t,{onBeforeEnter(M){gt(y,[M]),tt(M,i),tt(M,o)},onBeforeAppear(M){gt(se,[M]),tt(M,l),tt(M,f)},onEnter:me(!1),onAppear:me(!0),onLeave(M,ne){M._isLeaving=!0;const _e=()=>q(M,ne);tt(M,m),cc(),tt(M,h),Si(()=>{M._isLeaving&&(vt(M,m),tt(M,x),Oi(R)||Ti(M,r,H,_e))}),gt(R,[M,_e])},onEnterCancelled(M){W(M,!1),gt(A,[M])},onAppearCancelled(M){W(M,!0),gt($,[M])},onLeaveCancelled(M){q(M),gt(z,[M])}})}function sc(e){if(e==null)return null;if(te(e))return[Mr(e.enter),Mr(e.leave)];{const t=Mr(e);return[t,t]}}function Mr(e){return ln(e)}function tt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function vt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Si(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let lc=0;function Ti(e,t,n,r){const a=e._endId=++lc,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=fc(e,t);if(!o)return r();const f=o+"end";let u=0;const m=()=>{e.removeEventListener(f,h),i()},h=x=>{x.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(f,h)}function fc(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),a=r(`${et}Delay`),i=r(`${et}Duration`),o=Ii(a,i),s=r(`${Qt}Delay`),l=r(`${Qt}Duration`),f=Ii(s,l);let u=null,m=0,h=0;t===et?o>0&&(u=et,m=o,h=i.length):t===Qt?f>0&&(u=Qt,m=f,h=l.length):(m=Math.max(o,f),u=m>0?o>f?et:Qt:null,h=u?u===et?i.length:l.length:0);const x=u===et&&/\b(transform|all)(,|$)/.test(r(`${et}Property`).toString());return{type:u,timeout:m,propCount:h,hasTransform:x}}function Ii(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Mi(n)+Mi(e[r])))}function Mi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function cc(){return document.body.offsetHeight}const Ni=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>Bn(t,n):t};function uc(e){e.target.composing=!0}function Fi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ut={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ni(a);const i=r||a.props&&a.props.type==="number";Mt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=ln(s)),e._assign(s)}),n&&Mt(e,"change",()=>{e.value=e.value.trim()}),t||(Mt(e,"compositionstart",uc),Mt(e,"compositionend",Fi),Mt(e,"change",Fi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ni(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&ln(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},dc=["ctrl","shift","alt","meta"],mc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dc.some(n=>e[`${n}Key`]&&!t.includes(n))},tr=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=mc[t[a]];if(i&&i(n,t))return}return e(n,...r)},pc=de({patchProp:ac},Wf);let Li;function hc(){return Li||(Li=wf(pc))}const gc=(...e)=>{const t=hc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=vc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function vc(e){return le(e)?document.querySelector(e):e}const bc="/assets/TC-icon-fcc14abc.jpg",yc="/assets/inside-peoples-mind-logo-6f6c3e4c.png";const xn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},_c={name:"HeaderComponent"},xc=e=>(Sa("data-v-c96bdf7e"),e=e(),Ta(),e),wc=Sf('<div class="left" data-v-c96bdf7e><a href="#" data-v-c96bdf7e><img src="'+bc+'" alt="TC" data-v-c96bdf7e></a></div><div class="center" data-v-c96bdf7e><a href="#" data-v-c96bdf7e><img src="'+yc+'" alt="logo" data-v-c96bdf7e></a></div>',2),kc={class:"right"},Ac={for:"search-bar"},Cc=xc(()=>L("input",{type:"text",id:"search-bar",name:"search-bar",placeholder:"Search..."},null,-1));function Pc(e,t,n,r,a,i){const o=ot("font-awesome-icon");return ge(),He("header",null,[wc,L("div",kc,[L("label",Ac,[Q(o,{icon:"fa-solid fa-magnifying-glass",class:"icon"}),Cc])])])}const Ec=xn(_c,[["render",Pc],["__scopeId","data-v-c96bdf7e"]]);const Oc={name:"AddPostForm",props:["apiUrl"],data(){return{formData:{name:"",email:"",content:""},submitted:!1}},methods:{async onSubmit(){this.submitted=!0;try{const e=new FormData;e.append("profile-pic",this.$refs.file.files[0]),e.append("name",this.formData.name),e.append("email",this.formData.email),e.append("content",this.formData.content);const t=await fetch(`${this.apiUrl}post/createPost`,{method:"POST",body:e}),n=await t.json();if(n.message==="Validation Error")throw new Error("Validation Error");t.ok&&this.$emit("form-submitted",n.result),this.submitted=!1}catch(e){this.$emit("form-submission-error",e),console.error(e),this.submitted=!1}}}},Sc=e=>(Sa("data-v-4548458d"),e=e(),Ta(),e),Tc={class:"input-file-container"},Ic=Sc(()=>L("label",null,"Upload Profile Picture:",-1)),Mc={type:"file",ref:"file",class:"input-file"},Nc={style:{"margin-bottom":"0"}},Fc=["disabled"];function Lc(e,t,n,r,a,i){const o=ot("font-awesome-icon");return ge(),pn(Bt,{name:"fade"},{default:dn(()=>[L("div",{class:"modal-overlay",onClick:t[6]||(t[6]=s=>e.$emit("close-modal"))},[L("div",{class:"modal",onClick:t[5]||(t[5]=tr(()=>{},["stop"]))},[L("button",{class:"close-button",onClick:t[0]||(t[0]=s=>e.$emit("close-modal"))},[Q(o,{icon:"fa-solid fa-xmark"})]),L("form",{class:"form-style",onSubmit:t[4]||(t[4]=tr((...s)=>i.onSubmit&&i.onSubmit(...s),["prevent"])),enctype:"multipart/form-data"},[L("ul",null,[L("li",Tc,[Ic,L("input",Mc,null,512)]),L("li",null,[$t(L("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>a.formData.name=s),class:"field-style field-split align-left",placeholder:"Name"},null,512),[[Ut,a.formData.name]]),$t(L("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>a.formData.email=s),class:"field-style field-split align-right",placeholder:"Email"},null,512),[[Ut,a.formData.email]])]),L("li",null,[$t(L("textarea",{"onUpdate:modelValue":t[3]||(t[3]=s=>a.formData.content=s),class:"field-style",placeholder:"Message",maxlength:"1000"},null,512),[[Ut,a.formData.content]])]),L("li",Nc,[L("input",{type:"submit",value:"Send Message",disabled:a.submitted},null,8,Fc)])])],32)])])]),_:1})}const Rc=xn(Oc,[["render",Lc],["__scopeId","data-v-4548458d"]]);const Dc={name:"AddPostModal",props:["apiUrl","currentPost"],data(){return{post:{_id:this.currentPost._id,name:this.currentPost.name,email:this.currentPost.email,content:this.currentPost.content},submitted:!1}},methods:{async onSubmit(){this.submitted=!0;try{const e=await fetch(`${this.apiUrl}post/update`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.post)}),t=await e.json();if(t.message==="Validation Error")throw new Error("Validation Error");console.log("Post Updated"),e.ok&&this.$emit("form-submitted",t.result),this.submitted=!1}catch(e){e==="Validation Error"&&this.$emit("form-submission-error",e),console.error(e),this.submitted=!1}}}},jc={style:{"margin-bottom":"0"}},$c=["disabled"];function Uc(e,t,n,r,a,i){const o=ot("font-awesome-icon");return ge(),pn(Bt,{name:"fade"},{default:dn(()=>[L("div",{class:"modal-overlay",onClick:t[6]||(t[6]=s=>e.$emit("close-updateModal"))},[L("div",{class:"modal",onClick:t[5]||(t[5]=tr(()=>{},["stop"]))},[L("button",{class:"close-button",onClick:t[0]||(t[0]=s=>e.$emit("close-updateModal"))},[Q(o,{icon:"fa-solid fa-xmark"})]),L("form",{class:"form-style",onSubmit:t[4]||(t[4]=tr((...s)=>i.onSubmit&&i.onSubmit(...s),["prevent"]))},[L("ul",null,[L("li",null,[n.currentPost?$t((ge(),He("input",{key:0,type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>a.post.name=s),class:"field-style field-split align-left",placeholder:"Name"},null,512)),[[Ut,a.post.name]]):kt("",!0),n.currentPost?$t((ge(),He("input",{key:1,type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>a.post.email=s),class:"field-style field-split align-right",placeholder:"Email"},null,512)),[[Ut,a.post.email]]):kt("",!0)]),L("li",null,[n.currentPost?$t((ge(),He("textarea",{key:0,"onUpdate:modelValue":t[3]||(t[3]=s=>a.post.content=s),class:"field-style text-area",placeholder:"Message",maxlength:"1000"},null,512)),[[Ut,a.post.content]]):kt("",!0)]),L("li",jc,[L("input",{type:"submit",value:"Update Post",disabled:a.submitted},null,8,$c)])])],32)])])]),_:1})}const zc=xn(Dc,[["render",Uc],["__scopeId","data-v-b2751f9b"]]);const Hc={name:"PostsComponent",props:["posts","apiUrl","count"],components:{"AddPostForm-component":Rc,"UpdatePostForm-component":zc},data(){return{showPostModal:!1,showUpdateModal:!1,currentPost:void 0,convertedTimeStamp:""}},methods:{convertTimeStamp(e){return new Date(e).toString()},showErrorAlert(e){(e.message="Validation Error")&&alert("Please insert a name, email.")},handleFormSubmission(e){this.showPostModal=!1,this.$emit("newPost",e)},handleUpdateFormSubmission(e){this.showUpdateModal=!1,this.$emit("updatedPost",e)},updatePost(e){this.currentPost=e,this.showUpdateModal=!0},async increaseLike(e){try{e.like++;const t={_id:e._id,like:e.like},n=await fetch(`${this.apiUrl}post/update`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await n.json();n.ok&&this.$emit("form-submitted")}catch(t){console.error(t)}},returnToTop:function(){window.scrollTo(0,0)}}},os=e=>(Sa("data-v-19b5e898"),e=e(),Ta(),e),Bc={class:"main-content"},Yc={class:"post-header"},Wc={class:"profile-pic"},Kc=["src"],Vc={class:"name-email"},qc={class:"edit-delete-button"},Xc=["onClick"],Jc=["onClick"],Gc=os(()=>L("div",{class:"divider"},null,-1)),Zc={class:"post-content"},Qc={class:"post-footer"},eu={class:"timestamp"},tu=os(()=>L("b",null,"Created at: ",-1)),nu=["onClick"],ru={key:0,class:"see-more-button"};function au(e,t,n,r,a,i){const o=ot("font-awesome-icon"),s=ot("AddPostForm-component"),l=ot("UpdatePostForm-component");return ge(),He("section",Bc,[(ge(!0),He(Pe,null,lf(n.posts.slice(0,n.count),(f,u)=>(ge(),He("section",{class:"post-container",key:f._id},[L("header",Yc,[L("div",Wc,[L("img",{src:f.profilePic?f.profilePic:"/src/assets/images/defaultProfile.png",alt:"profile picture"},null,8,Kc)]),L("div",Vc,[L("h4",null,Zt(f.name[0].toUpperCase()+f.name.slice(1)),1),L("b",null,Zt(f.email),1)]),L("div",qc,[L("button",{class:"update-delete-button",onClick:m=>i.updatePost(f)},[Q(o,{icon:"fa-solid fa-pen-to-square",class:"icon-color"})],8,Xc),L("button",{class:"update-delete-button",onClick:m=>e.$emit("removePost",u)},[Q(o,{icon:"fa-solid fa-trash",class:"icon-color"})],8,Jc)])]),Gc,L("section",Zc,[L("p",null,Zt(f.content),1)]),L("footer",Qc,[L("span",eu,[tu,ns(Zt(i.convertTimeStamp(f.timeStamp)),1)]),L("div",null,[L("button",{onClick:m=>i.increaseLike(f)},[Q(o,{icon:"fa-solid fa-thumbs-up",class:"icon-color"})],8,nu),L("span",null,Zt(f.like),1)])])]))),128)),L("div",{class:"see-more-container",onClick:t[1]||(t[1]=f=>e.$emit("showMore"))},[n.count<n.posts.length?(ge(),He("button",ru,"See More")):kt("",!0),n.count>=n.posts.length&&n.count>6?(ge(),He("button",{key:1,class:"see-more-button",onClick:t[0]||(t[0]=(...f)=>i.returnToTop&&i.returnToTop(...f))},"Latest Post")):kt("",!0)]),L("button",{class:"add-button","data-hover":"Create a new post",onClick:t[2]||(t[2]=f=>a.showPostModal=!0)},[Q(o,{icon:"fa-solid fa-plus",class:"icon-color"})]),Q(Bt,{name:"fade"},{default:dn(()=>[a.showPostModal?(ge(),pn(s,{key:0,onFormSubmissionError:i.showErrorAlert,onFormSubmitted:i.handleFormSubmission,onCloseModal:t[3]||(t[3]=f=>a.showPostModal=!1),apiUrl:n.apiUrl},null,8,["onFormSubmissionError","onFormSubmitted","apiUrl"])):kt("",!0)]),_:1}),Q(Bt,{name:"fade"},{default:dn(()=>[a.showUpdateModal?(ge(),pn(l,{key:0,onFormSubmissionError:i.showErrorAlert,onFormSubmitted:i.handleUpdateFormSubmission,onCloseUpdateModal:t[4]||(t[4]=f=>a.showUpdateModal=!1),apiUrl:n.apiUrl,currentPost:a.currentPost},null,8,["onFormSubmissionError","onFormSubmitted","apiUrl","currentPost"])):kt("",!0)]),_:1})])}const iu=xn(Hc,[["render",au],["__scopeId","data-v-19b5e898"]]);const ou={name:"app",components:{"header-component":Ec,"posts-component":iu},data(){return{API_URL:"https://zealous-hen-pumps.cyclic.app/api/",posts:[],postCount:6}},methods:{getPosts:async function(){const t=await(await fetch(this.API_URL+"post/all")).json();this.posts=t.result,this.sortPost(this.posts)},showMore:function(){this.postCount+=2},newPost:function(e){this.posts.push(e),this.sortPost(this.posts)},updatedPost:function(e){const t=this.posts.findIndex(n=>n._id===e._id);this.posts[t]=e},sortPost(e){e.sort((t,n)=>t.timeStamp<n.timeStamp?1:t.timeStamp>n.timeStamp?-1:0)},async removePost(e){try{const t=await fetch(`${this.API_URL}post/remove`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:this.posts[e]._id,cloudinaryId:this.posts[e].cloudinaryId})});this.posts.splice(e,1)}catch(t){console.error(t)}}},beforeMount(){this.getPosts()}};function su(e,t,n,r,a,i){const o=ot("header-component"),s=ot("posts-component");return ge(),He(Pe,null,[Q(o),Q(s,{count:a.postCount,posts:a.posts,apiUrl:a.API_URL,onNewPost:i.newPost,onRemovePost:i.removePost,onUpdatedPost:i.updatedPost,onShowMore:this.showMore},null,8,["count","posts","apiUrl","onNewPost","onRemovePost","onUpdatedPost","onShowMore"])],64)}const lu=xn(ou,[["render",su]]);function Ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ri(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ri(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nr(e){return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nr(e)}function fu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Di(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cu(e,t,n){return t&&Di(e.prototype,t),n&&Di(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ra(e,t){return du(e)||pu(e,t)||ss(e,t)||gu()}function wn(e){return uu(e)||mu(e)||ss(e)||hu()}function uu(e){if(Array.isArray(e))return Zr(e)}function du(e){if(Array.isArray(e))return e}function mu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ss(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ji=function(){},Da={},ls={},fs=null,cs={mark:ji,measure:ji};try{typeof window<"u"&&(Da=window),typeof document<"u"&&(ls=document),typeof MutationObserver<"u"&&(fs=MutationObserver),typeof performance<"u"&&(cs=performance)}catch{}var vu=Da.navigator||{},$i=vu.userAgent,Ui=$i===void 0?"":$i,ft=Da,ee=ls,zi=fs,Nn=cs;ft.document;var Ze=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",us=~Ui.indexOf("MSIE")||~Ui.indexOf("Trident/"),Fn,Ln,Rn,Dn,jn,qe="___FONT_AWESOME___",Qr=16,ds="fa",ms="svg-inline--fa",Ot="data-fa-i2svg",ea="data-fa-pseudo-element",bu="data-fa-pseudo-element-pending",ja="data-prefix",$a="data-icon",Hi="fontawesome-i2svg",yu="async",_u=["HTML","HEAD","STYLE","SCRIPT"],ps=function(){try{return!0}catch{return!1}}(),Z="classic",ie="sharp",Ua=[Z,ie];function kn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Z]}})}var gn=kn((Fn={},fe(Fn,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(Fn,ie,{fa:"solid",fass:"solid","fa-solid":"solid"}),Fn)),vn=kn((Ln={},fe(Ln,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Ln,ie,{solid:"fass"}),Ln)),bn=kn((Rn={},fe(Rn,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Rn,ie,{fass:"fa-solid"}),Rn)),xu=kn((Dn={},fe(Dn,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Dn,ie,{"fa-solid":"fass"}),Dn)),wu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,hs="fa-layers-text",ku=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Au=kn((jn={},fe(jn,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(jn,ie,{900:"fass"}),jn)),gs=[1,2,3,4,5,6,7,8,9,10],Cu=gs.concat([11,12,13,14,15,16,17,18,19,20]),Pu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yn=new Set;Object.keys(vn[Z]).map(yn.add.bind(yn));Object.keys(vn[ie]).map(yn.add.bind(yn));var Eu=[].concat(Ua,wn(yn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(gs.map(function(e){return"".concat(e,"x")})).concat(Cu.map(function(e){return"w-".concat(e)})),an=ft.FontAwesomeConfig||{};function Ou(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Su(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var Tu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tu.forEach(function(e){var t=Ra(e,2),n=t[0],r=t[1],a=Su(Ou(n));a!=null&&(an[r]=a)})}var vs={styleDefault:"solid",familyDefault:"classic",cssPrefix:ds,replacementClass:ms,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};an.familyPrefix&&(an.cssPrefix=an.familyPrefix);var Yt=E(E({},vs),an);Yt.autoReplaceSvg||(Yt.observeMutations=!1);var T={};Object.keys(vs).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Yt[e]=n,on.forEach(function(r){return r(T)})},get:function(){return Yt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Yt.cssPrefix=t,on.forEach(function(n){return n(T)})},get:function(){return Yt.cssPrefix}});ft.FontAwesomeConfig=T;var on=[];function Iu(e){return on.push(e),function(){on.splice(on.indexOf(e),1)}}var nt=Qr,Be={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mu(e){if(!(!e||!Ze)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var Nu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _n(){for(var e=12,t="";e-- >0;)t+=Nu[Math.random()*62|0];return t}function qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function za(e){return e.classList?qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function bs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(bs(e[n]),'" ')},"").trim()}function _r(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ha(e){return e.size!==Be.size||e.x!==Be.x||e.y!==Be.y||e.rotate!==Be.rotate||e.flipX||e.flipY}function Lu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Ru(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&us?l+="translate(".concat(t.x/nt-r/2,"em, ").concat(t.y/nt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/nt,"em), calc(-50% + ").concat(t.y/nt,"em)) "):l+="translate(".concat(t.x/nt,"em, ").concat(t.y/nt,"em) "),l+="scale(".concat(t.size/nt*(t.flipX?-1:1),", ").concat(t.size/nt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Du=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ys(){var e=ds,t=ms,n=T.cssPrefix,r=T.replacementClass,a=Du;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Bi=!1;function Nr(){T.autoAddCss&&!Bi&&(Mu(ys()),Bi=!0)}var ju={mixout:function(){return{dom:{css:ys,insertCss:Nr}}},hooks:function(){return{beforeDOMElementCreation:function(){Nr()},beforeI2svg:function(){Nr()}}}},Xe=ft||{};Xe[qe]||(Xe[qe]={});Xe[qe].styles||(Xe[qe].styles={});Xe[qe].hooks||(Xe[qe].hooks={});Xe[qe].shims||(Xe[qe].shims=[]);var Ne=Xe[qe],_s=[],$u=function e(){ee.removeEventListener("DOMContentLoaded",e),rr=1,_s.map(function(t){return t()})},rr=!1;Ze&&(rr=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),rr||ee.addEventListener("DOMContentLoaded",$u));function Uu(e){Ze&&(rr?setTimeout(e,0):_s.push(e))}function An(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?bs(e):"<".concat(t," ").concat(Fu(r),">").concat(i.map(An).join(""),"</").concat(t,">")}function Yi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?zu(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ta(e){var t=Hu(e);return t.length===1?t[0].toString(16):null}function Bu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Wi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Wi(t);typeof Ne.hooks.addPack=="function"&&!a?Ne.hooks.addPack(e,Wi(t)):Ne.styles[e]=E(E({},Ne.styles[e]||{}),i),e==="fas"&&na("fa",t)}var $n,Un,zn,Nt=Ne.styles,Yu=Ne.shims,Wu=($n={},fe($n,Z,Object.values(bn[Z])),fe($n,ie,Object.values(bn[ie])),$n),Ba=null,xs={},ws={},ks={},As={},Cs={},Ku=(Un={},fe(Un,Z,Object.keys(gn[Z])),fe(Un,ie,Object.keys(gn[ie])),Un);function Vu(e){return~Eu.indexOf(e)}function qu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Vu(a)?a:null}var Ps=function(){var t=function(i){return Fr(Nt,function(o,s,l){return o[l]=Fr(s,i,{}),o},{})};xs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ws=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Cs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Nt||T.autoFetchSvg,r=Fr(Yu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ks=r.names,As=r.unicodes,Ba=xr(T.styleDefault,{family:T.familyDefault})};Iu(function(e){Ba=xr(e.styleDefault,{family:T.familyDefault})});Ps();function Ya(e,t){return(xs[e]||{})[t]}function Xu(e,t){return(ws[e]||{})[t]}function Ct(e,t){return(Cs[e]||{})[t]}function Es(e){return ks[e]||{prefix:null,iconName:null}}function Ju(e){var t=As[e],n=Ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ct(){return Ba}var Wa=function(){return{prefix:null,iconName:null,rest:[]}};function xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Z:n,a=gn[r][e],i=vn[r][e]||vn[r][a],o=e in Ne.styles?e:null;return i||o||null}var Ki=(zn={},fe(zn,Z,Object.keys(bn[Z])),fe(zn,ie,Object.keys(bn[ie])),zn);function wr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},fe(t,Z,"".concat(T.cssPrefix,"-").concat(Z)),fe(t,ie,"".concat(T.cssPrefix,"-").concat(ie)),t),o=null,s=Z;(e.includes(i[Z])||e.some(function(f){return Ki[Z].includes(f)}))&&(s=Z),(e.includes(i[ie])||e.some(function(f){return Ki[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,u){var m=qu(T.cssPrefix,u);if(Nt[u]?(u=Wu[s].includes(u)?xu[s][u]:u,o=u,f.prefix=u):Ku[s].indexOf(u)>-1?(o=u,f.prefix=xr(u,{family:s})):m?f.iconName=m:u!==T.replacementClass&&u!==i[Z]&&u!==i[ie]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var h=o==="fa"?Es(f.iconName):{},x=Ct(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||x||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Nt.far&&Nt.fas&&!T.autoFetchSvg&&(f.prefix="fas")}return f},Wa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Nt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ct()||"fas"),l}var Gu=function(){function e(){fu(this,e),this.definitions={}}return cu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),na(s,o[s]);var l=bn[Z][s];l&&na(l,o[s]),Ps()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Vi=[],Ft={},zt={},Zu=Object.keys(zt);function Qu(e,t){var n=t.mixoutsTo;return Vi=e,Ft={},Object.keys(zt).forEach(function(r){Zu.indexOf(r)===-1&&delete zt[r]}),Vi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),nr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ft[o]||(Ft[o]=[]),Ft[o].push(i[o])})}r.provides&&r.provides(zt)}),n}function ra(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ft[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function St(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ft[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return zt[e]?zt[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ct();if(t)return t=Ct(n,t)||t,Yi(Os.definitions,n,t)||Yi(Ne.styles,n,t)}var Os=new Gu,ed=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,St("noAuto")},td={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ze?(St("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Uu(function(){rd({autoReplaceSvgRoot:n}),St("watch",t)})}},nd={icon:function(t){if(t===null)return null;if(nr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=xr(t[0]);return{prefix:r,iconName:Ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(wu))){var a=wr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ct(),iconName:Ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ct();return{prefix:i,iconName:Ct(i,t)||t}}}},Ae={noAuto:ed,config:T,dom:td,parse:nd,library:Os,findIconDefinition:aa,toHtml:An},rd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Ne.styles).length>0||T.autoFetchSvg)&&Ze&&T.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function kr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return An(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ze){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ad(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ha(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=_r(E(E({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function id(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ka(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,x=h===void 0?!1:h,I=r.found?r:n,O=I.width,H=I.height,y=a==="fak",P=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),A={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(H)})},R=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/H*16*.0625,"em")}:{};x&&(A.attributes[Ot]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(u||_n())},children:[l]}),delete A.attributes.title);var z=E(E({},A),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:E(E({},R),m.styles)}),se=r.found&&n.found?Je("generateAbstractMask",z)||{children:[],attributes:{}}:Je("generateAbstractIcon",z)||{children:[],attributes:{}},re=se.children,$=se.attributes;return z.children=re,z.attributes=$,s?id(z):ad(z)}function qi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ot]="");var u=E({},o.styles);Ha(a)&&(u.transform=Ru({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=_r(u);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function od(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=_r(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lr=Ne.styles;function ia(e){var t=e[0],n=e[1],r=e.slice(4),a=Ra(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var sd={found:!1,width:512,height:512};function ld(e,t){!ps&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function oa(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=ct()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=Es(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Lr[t]&&Lr[t][e]){var o=Lr[t][e];return r(ia(o))}ld(e,t),r(E(E({},sd),{},{icon:T.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var Xi=function(){},sa=T.measurePerformance&&Nn&&Nn.mark&&Nn.measure?Nn:{mark:Xi,measure:Xi},tn='FA "6.2.1"',fd=function(t){return sa.mark("".concat(tn," ").concat(t," begins")),function(){return Ss(t)}},Ss=function(t){sa.mark("".concat(tn," ").concat(t," ends")),sa.measure("".concat(tn," ").concat(t),"".concat(tn," ").concat(t," begins"),"".concat(tn," ").concat(t," ends"))},Va={begin:fd,end:Ss},Xn=function(){};function Ji(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function cd(e){var t=e.getAttribute?e.getAttribute(ja):null,n=e.getAttribute?e.getAttribute($a):null;return t&&n}function ud(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function dd(){if(T.autoReplaceSvg===!0)return Jn.replace;var e=Jn[T.autoReplaceSvg];return e||Jn.replace}function md(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function pd(e){return ee.createElement(e)}function Ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?md:pd:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ts(o,{ceFn:r}))}),a}function hd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Jn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ts(a),n)}),n.getAttribute(Ot)===null&&T.keepOriginalSource){var r=ee.createComment(hd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~za(n).indexOf(T.replacementClass))return Jn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return An(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function Gi(e){e()}function Is(e,t){var n=typeof t=="function"?t:Xn;if(e.length===0)n();else{var r=Gi;T.mutateApproach===yu&&(r=ft.requestAnimationFrame||Gi),r(function(){var a=dd(),i=Va.begin("mutate");e.map(a),i(),n()})}}var qa=!1;function Ms(){qa=!0}function la(){qa=!1}var ar=null;function Zi(e){if(zi&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Xn:t,r=e.nodeCallback,a=r===void 0?Xn:r,i=e.pseudoElementsCallback,o=i===void 0?Xn:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;ar=new zi(function(f){if(!qa){var u=ct();qt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ji(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ji(m.target)&&~Pu.indexOf(m.attributeName))if(m.attributeName==="class"&&cd(m.target)){var h=wr(za(m.target)),x=h.prefix,I=h.iconName;m.target.setAttribute(ja,x||u),I&&m.target.setAttribute($a,I)}else ud(m.target)&&a(m.target)})}}),Ze&&ar.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gd(){ar&&ar.disconnect()}function vd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function bd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=wr(za(e));return a.prefix||(a.prefix=ct()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Xu(a.prefix,e.innerText)||Ya(a.prefix,ta(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function yd(e){var t=qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||_n()):(t["aria-hidden"]="true",t.focusable="false")),t}function _d(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Be,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bd(e),r=n.iconName,a=n.prefix,i=n.rest,o=yd(e),s=ra("parseNodeAttributes",{},e),l=t.styleParser?vd(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Be,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var xd=Ne.styles;function Ns(e){var t=T.autoReplaceSvg==="nest"?Qi(e,{styleParser:!1}):Qi(e);return~t.extra.classes.indexOf(hs)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var ut=new Set;Ua.map(function(e){ut.add("fa-".concat(e))});Object.keys(gn[Z]).map(ut.add.bind(ut));Object.keys(gn[ie]).map(ut.add.bind(ut));ut=wn(ut);function eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ze)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(Hi,"-").concat(m))},a=function(m){return n.remove("".concat(Hi,"-").concat(m))},i=T.autoFetchSvg?ut:Ua.map(function(u){return"fa-".concat(u)}).concat(Object.keys(xd));i.includes("fa")||i.push("fa");var o=[".".concat(hs,":not([").concat(Ot,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Va.begin("onTree"),f=s.reduce(function(u,m){try{var h=Ns(m);h&&u.push(h)}catch(x){ps||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(h){Is(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function wd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ns(e).then(function(n){n&&Is([n],t)})}function kd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:aa(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Ad=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Be:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,h=m===void 0?null:m,x=n.titleId,I=x===void 0?null:x,O=n.classes,H=O===void 0?[]:O,y=n.attributes,P=y===void 0?{}:y,A=n.styles,R=A===void 0?{}:A;if(t){var z=t.prefix,se=t.iconName,re=t.icon;return kr(E({type:"icon"},t),function(){return St("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?P["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(I||_n()):(P["aria-hidden"]="true",P.focusable="false")),Ka({icons:{main:ia(re),mask:l?ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:se,transform:E(E({},Be),a),symbol:o,title:h,maskId:u,titleId:I,extra:{attributes:P,styles:R,classes:H}})})}},Cd={mixout:function(){return{icon:kd(Ad)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=eo,n.nodeCallback=wd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return eo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(x,I){Promise.all([oa(a,s),u.iconName?oa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var H=Ra(O,2),y=H[0],P=H[1];x([n,Ka({icons:{main:y,mask:P},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=_r(s);l.length>0&&(a.style=l);var f;return Ha(o)&&(f=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Pd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return kr({type:"layer"},function(){St("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(wn(i)).join(" ")},children:o}]})}}}},Ed={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return kr({type:"counter",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),od({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(wn(s))}})})}}}},Od={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Be:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,x=h===void 0?{}:h;return kr({type:"text",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),qi({content:n,transform:E(E({},Be),i),title:s,extra:{attributes:m,styles:x,classes:["".concat(T.cssPrefix,"-layers-text")].concat(wn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(us){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,qi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Sd=new RegExp('"',"ug"),to=[1105920,1112319];function Td(e){var t=e.replace(Sd,""),n=Bu(t,0),r=n>=to[0]&&n<=to[1],a=t.length===2?t[0]===t[1]:!1;return{value:ta(a?t[0]:t),isSecondary:r||a}}function no(e,t){var n="".concat(bu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=qt(e.children),o=i.filter(function(re){return re.getAttribute(ea)===t})[0],s=ft.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ku),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ie:Z,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?vn[h][l[2].toLowerCase()]:Au[h][f],I=Td(m),O=I.value,H=I.isSecondary,y=l[0].startsWith("FontAwesome"),P=Ya(x,O),A=P;if(y){var R=Ju(O);R.iconName&&R.prefix&&(P=R.iconName,x=R.prefix)}if(P&&!H&&(!o||o.getAttribute(ja)!==x||o.getAttribute($a)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var z=_d(),se=z.extra;se.attributes[ea]=t,oa(P,x).then(function(re){var $=Ka(E(E({},z),{},{icons:{main:re,mask:Wa()},prefix:x,iconName:A,extra:se,watchable:!0})),W=ee.createElement("svg");t==="::before"?e.insertBefore(W,e.firstChild):e.appendChild(W),W.outerHTML=$.map(function(q){return An(q)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Id(e){return Promise.all([no(e,"::before"),no(e,"::after")])}function Md(e){return e.parentNode!==document.head&&!~_u.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ro(e){if(Ze)return new Promise(function(t,n){var r=qt(e.querySelectorAll("*")).filter(Md).map(Id),a=Va.begin("searchPseudoElements");Ms(),Promise.all(r).then(function(){a(),la(),t()}).catch(function(){a(),la(),n()})})}var Nd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ro,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;T.searchPseudoElements&&ro(a)}}},ao=!1,Fd={mixout:function(){return{dom:{unwatch:function(){Ms(),ao=!0}}}},hooks:function(){return{bootstrap:function(){Zi(ra("mutationObserverCallbacks",{}))},noAuto:function(){gd()},watch:function(n){var r=n.observeMutationsRoot;ao?la():Zi(ra("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},io=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ld={mixout:function(){return{parse:{transform:function(n){return io(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=io(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},x.outer),children:[{tag:"g",attributes:E({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),x.path)}]}]}}}},Rr={x:0,y:0,width:"100%",height:"100%"};function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Rd(e){return e.tag==="g"?e.children:[e]}var Dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?wr(a.split(" ").map(function(o){return o.trim()})):Wa();return i.prefix||(i.prefix=ct()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,h=o.icon,x=Lu({transform:l,containerWidth:m,iconWidth:f}),I={tag:"rect",attributes:E(E({},Rr),{},{fill:"white"})},O=u.children?{children:u.children.map(oo)}:{},H={tag:"g",attributes:E({},x.inner),children:[oo(E({tag:u.tag,attributes:E(E({},u.attributes),x.path)},O))]},y={tag:"g",attributes:E({},x.outer),children:[H]},P="mask-".concat(s||_n()),A="clip-".concat(s||_n()),R={tag:"mask",attributes:E(E({},Rr),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,y]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Rd(h)},R]};return r.push(z,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(P,")")},Rr)}),{children:r,attributes:a}}}},jd={provides:function(t){var n=!1;ft.matchMedia&&(n=ft.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$d={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ud=[ju,Cd,Pd,Ed,Od,Nd,Fd,Ld,Dd,jd,$d];Qu(Ud,{mixoutsTo:Ae});Ae.noAuto;var Fs=Ae.config,Xt=Ae.library;Ae.dom;var ir=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var zd=Ae.icon;Ae.layer;var Hd=Ae.text;Ae.counter;function so(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?so(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):so(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function or(e){return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},or(e)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Yd(e,t){if(e==null)return{};var n=Bd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fa(e){return Wd(e)||Kd(e)||Vd(e)||qd()}function Wd(e){if(Array.isArray(e))return ca(e)}function Kd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vd(e,t){if(e){if(typeof e=="string")return ca(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ca(e,t)}}function ca(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ls={exports:{}};(function(e){(function(t){var n=function(y,P,A){if(!f(P)||m(P)||h(P)||x(P)||l(P))return P;var R,z=0,se=0;if(u(P))for(R=[],se=P.length;z<se;z++)R.push(n(y,P[z],A));else{R={};for(var re in P)Object.prototype.hasOwnProperty.call(P,re)&&(R[y(re,A)]=n(y,P[re],A))}return R},r=function(y,P){P=P||{};var A=P.separator||"_",R=P.split||/(?=[A-Z])/;return y.split(R).join(A)},a=function(y){return I(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(P,A){return A?A.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var P=a(y);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(y,P){return r(y,P).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},u=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},x=function(y){return s.call(y)=="[object Boolean]"},I=function(y){return y=y-0,y===y},O=function(y,P){var A=P&&"process"in P?P.process:P;return typeof A!="function"?y:function(R,z){return A(R,y,z)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,P){return n(O(a,P),y)},decamelizeKeys:function(y,P){return n(O(o,P),y,P)},pascalizeKeys:function(y,P){return n(O(i,P),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})(Xd)})(Ls);var Jd=Ls.exports,Gd=["class","style"];function Zd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Jd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Qd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Xa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Qd(u);break;case"style":l.style=Zd(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Yd(n,Gd);return La(e.tag,Ie(Ie(Ie({},t),{},{class:a.class,style:Ie(Ie({},a.style),o)},a.attrs),s),r)}var Rs=!1;try{Rs=!0}catch{}function em(){if(!Rs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function sn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?be({},e,t):{}}function tm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},be(t,"fa-".concat(e.size),e.size!==null),be(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),be(t,"fa-pull-".concat(e.pull),e.pull!==null),be(t,"fa-swap-opacity",e.swapOpacity),be(t,"fa-bounce",e.bounce),be(t,"fa-shake",e.shake),be(t,"fa-beat",e.beat),be(t,"fa-fade",e.fade),be(t,"fa-beat-fade",e.beatFade),be(t,"fa-flash",e.flash),be(t,"fa-spin-pulse",e.spinPulse),be(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function lo(e){if(e&&or(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ir.icon)return ir.icon(e);if(e===null)return null;if(or(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var nm=Ia({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ee(function(){return lo(t.icon)}),i=Ee(function(){return sn("classes",tm(t))}),o=Ee(function(){return sn("transform",typeof t.transform=="string"?ir.transform(t.transform):t.transform)}),s=Ee(function(){return sn("mask",lo(t.mask))}),l=Ee(function(){return zd(a.value,Ie(Ie(Ie(Ie({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Wn(l,function(u){if(!u)return em("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=Ee(function(){return l.value?Xa(l.value.abstract[0],{},r):null});return function(){return f.value}}});Ia({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Fs.familyPrefix,i=Ee(function(){return["".concat(a,"-layers")].concat(fa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return La("div",{class:i.value},r.default?r.default():[])}}});Ia({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Fs.familyPrefix,i=Ee(function(){return sn("classes",[].concat(fa(t.counter?["".concat(a,"-layers-counter")]:[]),fa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=Ee(function(){return sn("transform",typeof t.transform=="string"?ir.transform(t.transform):t.transform)}),s=Ee(function(){var f=Hd(t.value.toString(),Ie(Ie({},o.value),i.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Ee(function(){return Xa(s.value,{},r)});return function(){return l.value}}});var rm={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},am={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},im={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},om={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},sm={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},lm={prefix:"fas",iconName:"thumbs-up",icon:[512,512,[128077,61575],"f164","M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"]};Xt.add(im);Xt.add(am);Xt.add(rm);Xt.add(lm);Xt.add(om);Xt.add(sm);gc(lu).component("font-awesome-icon",nm).mount("#app");
