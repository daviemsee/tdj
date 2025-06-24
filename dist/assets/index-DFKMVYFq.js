(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Th(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Le={},Mi=[],Cn=()=>{},yw=()=>!1,Vl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),wh=n=>n.startsWith("onUpdate:"),dt=Object.assign,Ih=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vw=Object.prototype.hasOwnProperty,Oe=(n,e)=>vw.call(n,e),ie=Array.isArray,Li=n=>jo(n)==="[object Map]",fr=n=>jo(n)==="[object Set]",Qf=n=>jo(n)==="[object Date]",he=n=>typeof n=="function",nt=n=>typeof n=="string",kn=n=>typeof n=="symbol",$e=n=>n!==null&&typeof n=="object",e_=n=>($e(n)||he(n))&&he(n.then)&&he(n.catch),t_=Object.prototype.toString,jo=n=>t_.call(n),Ew=n=>jo(n).slice(8,-1),n_=n=>jo(n)==="[object Object]",Ch=n=>nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xr=Th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Tw=/-(\w)/g,rn=Fl(n=>n.replace(Tw,(e,t)=>t?t.toUpperCase():"")),ww=/\B([A-Z])/g,gi=Fl(n=>n.replace(ww,"-$1").toLowerCase()),Ul=Fl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bc=Fl(n=>n?`on${Ul(n)}`:""),Ts=(n,e)=>!Object.is(n,e),Va=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},yu=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Ja=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Yf;const Bl=()=>Yf||(Yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sh(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],i=nt(s)?Aw(s):Sh(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(nt(n)||$e(n))return n}const Iw=/;(?![^(]*\))/g,Cw=/:([^]+)/,Sw=/\/\*[^]*?\*\//g;function Aw(n){const e={};return n.replace(Sw,"").split(Iw).forEach(t=>{if(t){const s=t.split(Cw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $l(n){let e="";if(nt(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const s=$l(n[t]);s&&(e+=s+" ")}else if($e(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Rw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bw=Th(Rw);function s_(n){return!!n||n===""}function Pw(n,e){if(n.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<n.length;s++)t=ri(n[s],e[s]);return t}function ri(n,e){if(n===e)return!0;let t=Qf(n),s=Qf(e);if(t||s)return t&&s?n.getTime()===e.getTime():!1;if(t=kn(n),s=kn(e),t||s)return n===e;if(t=ie(n),s=ie(e),t||s)return t&&s?Pw(n,e):!1;if(t=$e(n),s=$e(e),t||s){if(!t||!s)return!1;const i=Object.keys(n).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ri(n[o],e[o]))return!1}}return String(n)===String(e)}function Ah(n,e){return n.findIndex(t=>ri(t,e))}const i_=n=>!!(n&&n.__v_isRef===!0),Ue=n=>nt(n)?n:n==null?"":ie(n)||$e(n)&&(n.toString===t_||!he(n.toString))?i_(n)?Ue(n.value):JSON.stringify(n,r_,2):String(n),r_=(n,e)=>i_(e)?r_(n,e.value):Li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],r)=>(t[$c(s,r)+" =>"]=i,t),{})}:fr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$c(t))}:kn(e)?$c(e):$e(e)&&!ie(e)&&!n_(e)?String(e):e,$c=(n,e="")=>{var t;return kn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class kw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ut;try{return Ut=this,e()}finally{Ut=t}}}on(){++this._on===1&&(this.prevScope=Ut,Ut=this)}off(){this._on>0&&--this._on===0&&(Ut=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Nw(){return Ut}let Fe;const Hc=new WeakSet;class o_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&Ut.active&&Ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hc.has(this)&&(Hc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||l_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xf(this),c_(this);const e=Fe,t=fn;Fe=this,fn=!0;try{return this.fn()}finally{u_(this),Fe=e,fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ph(e);this.deps=this.depsTail=void 0,Xf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vu(this)&&this.run()}get dirty(){return vu(this)}}let a_=0,Jr,Zr;function l_(n,e=!1){if(n.flags|=8,e){n.next=Zr,Zr=n;return}n.next=Jr,Jr=n}function Rh(){a_++}function bh(){if(--a_>0)return;if(Zr){let e=Zr;for(Zr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Jr;){let e=Jr;for(Jr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function c_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function u_(n){let e,t=n.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),Ph(s),xw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}n.deps=e,n.depsTail=t}function vu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(h_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function h_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===yo)||(n.globalVersion=yo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!vu(n))))return;n.flags|=2;const e=n.dep,t=Fe,s=fn;Fe=n,fn=!0;try{c_(n);const i=n.fn(n._value);(e.version===0||Ts(i,n._value))&&(n.flags|=128,n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Fe=t,fn=s,u_(n),n.flags&=-3}}function Ph(n,e=!1){const{dep:t,prevSub:s,nextSub:i}=n;if(s&&(s.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ph(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function xw(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let fn=!0;const d_=[];function Yn(){d_.push(fn),fn=!1}function Xn(){const n=d_.pop();fn=n===void 0?!0:n}function Xf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Fe;Fe=void 0;try{e()}finally{Fe=t}}}let yo=0;class Ow{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Fe||!fn||Fe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Fe)t=this.activeLink=new Ow(Fe,this),Fe.deps?(t.prevDep=Fe.depsTail,Fe.depsTail.nextDep=t,Fe.depsTail=t):Fe.deps=Fe.depsTail=t,f_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Fe.depsTail,t.nextDep=void 0,Fe.depsTail.nextDep=t,Fe.depsTail=t,Fe.deps===t&&(Fe.deps=s)}return t}trigger(e){this.version++,yo++,this.notify(e)}notify(e){Rh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bh()}}}function f_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)f_(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Eu=new WeakMap,ti=Symbol(""),Tu=Symbol(""),vo=Symbol("");function It(n,e,t){if(fn&&Fe){let s=Eu.get(n);s||Eu.set(n,s=new Map);let i=s.get(t);i||(s.set(t,i=new kh),i.map=s,i.key=t),i.track()}}function $n(n,e,t,s,i,r){const o=Eu.get(n);if(!o){yo++;return}const a=c=>{c&&c.trigger()};if(Rh(),e==="clear")o.forEach(a);else{const c=ie(n),u=c&&Ch(t);if(c&&t==="length"){const d=Number(s);o.forEach((f,g)=>{(g==="length"||g===vo||!kn(g)&&g>=d)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(vo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ti)),Li(n)&&a(o.get(Tu)));break;case"delete":c||(a(o.get(ti)),Li(n)&&a(o.get(Tu)));break;case"set":Li(n)&&a(o.get(ti));break}}bh()}function Si(n){const e=xe(n);return e===n?e:(It(e,"iterate",vo),nn(n)?e:e.map(yt))}function Hl(n){return It(n=xe(n),"iterate",vo),n}const Dw={__proto__:null,[Symbol.iterator](){return jc(this,Symbol.iterator,yt)},concat(...n){return Si(this).concat(...n.map(e=>ie(e)?Si(e):e))},entries(){return jc(this,"entries",n=>(n[1]=yt(n[1]),n))},every(n,e){return Fn(this,"every",n,e,void 0,arguments)},filter(n,e){return Fn(this,"filter",n,e,t=>t.map(yt),arguments)},find(n,e){return Fn(this,"find",n,e,yt,arguments)},findIndex(n,e){return Fn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fn(this,"findLast",n,e,yt,arguments)},findLastIndex(n,e){return Fn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Wc(this,"includes",n)},indexOf(...n){return Wc(this,"indexOf",n)},join(n){return Si(this).join(n)},lastIndexOf(...n){return Wc(this,"lastIndexOf",n)},map(n,e){return Fn(this,"map",n,e,void 0,arguments)},pop(){return Lr(this,"pop")},push(...n){return Lr(this,"push",n)},reduce(n,...e){return Jf(this,"reduce",n,e)},reduceRight(n,...e){return Jf(this,"reduceRight",n,e)},shift(){return Lr(this,"shift")},some(n,e){return Fn(this,"some",n,e,void 0,arguments)},splice(...n){return Lr(this,"splice",n)},toReversed(){return Si(this).toReversed()},toSorted(n){return Si(this).toSorted(n)},toSpliced(...n){return Si(this).toSpliced(...n)},unshift(...n){return Lr(this,"unshift",n)},values(){return jc(this,"values",yt)}};function jc(n,e,t){const s=Hl(n),i=s[e]();return s!==n&&!nn(n)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=t(r.value)),r}),i}const Mw=Array.prototype;function Fn(n,e,t,s,i,r){const o=Hl(n),a=o!==n&&!nn(n),c=o[e];if(c!==Mw[e]){const f=c.apply(n,r);return a?yt(f):f}let u=t;o!==n&&(a?u=function(f,g){return t.call(this,yt(f),g,n)}:t.length>2&&(u=function(f,g){return t.call(this,f,g,n)}));const d=c.call(o,u,s);return a&&i?i(d):d}function Jf(n,e,t,s){const i=Hl(n);let r=t;return i!==n&&(nn(n)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,n)}):r=function(o,a,c){return t.call(this,o,yt(a),c,n)}),i[e](r,...s)}function Wc(n,e,t){const s=xe(n);It(s,"iterate",vo);const i=s[e](...t);return(i===-1||i===!1)&&Oh(t[0])?(t[0]=xe(t[0]),s[e](...t)):i}function Lr(n,e,t=[]){Yn(),Rh();const s=xe(n)[e].apply(n,t);return bh(),Xn(),s}const Lw=Th("__proto__,__v_isRef,__isVue"),p_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(kn));function Vw(n){kn(n)||(n=String(n));const e=xe(this);return It(e,"has",n),e.hasOwnProperty(n)}class g_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?Kw:v_:r?y_:__).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ie(e);if(!i){let c;if(o&&(c=Dw[t]))return c;if(t==="hasOwnProperty")return Vw}const a=Reflect.get(e,t,Rt(e)?e:s);return(kn(t)?p_.has(t):Lw(t))||(i||It(e,"get",t),r)?a:Rt(a)?o&&Ch(t)?a:a.value:$e(a)?i?T_(a):Wo(a):a}}class m_ extends g_{constructor(e=!1){super(!1,e)}set(e,t,s,i){let r=e[t];if(!this._isShallow){const c=Rs(r);if(!nn(s)&&!Rs(s)&&(r=xe(r),s=xe(s)),!ie(e)&&Rt(r)&&!Rt(s))return c?!1:(r.value=s,!0)}const o=ie(e)&&Ch(t)?Number(t)<e.length:Oe(e,t),a=Reflect.set(e,t,s,Rt(e)?e:i);return e===xe(i)&&(o?Ts(s,r)&&$n(e,"set",t,s):$n(e,"add",t,s)),a}deleteProperty(e,t){const s=Oe(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&$n(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!kn(t)||!p_.has(t))&&It(e,"has",t),s}ownKeys(e){return It(e,"iterate",ie(e)?"length":ti),Reflect.ownKeys(e)}}class Fw extends g_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Uw=new m_,Bw=new Fw,$w=new m_(!0);const wu=n=>n,Sa=n=>Reflect.getPrototypeOf(n);function Hw(n,e,t){return function(...s){const i=this.__v_raw,r=xe(i),o=Li(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...s),d=t?wu:e?Za:yt;return!e&&It(r,"iterate",c?Tu:ti),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[d(f[0]),d(f[1])]:d(f),done:g}},[Symbol.iterator](){return this}}}}function Aa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function jw(n,e){const t={get(i){const r=this.__v_raw,o=xe(r),a=xe(i);n||(Ts(i,a)&&It(o,"get",i),It(o,"get",a));const{has:c}=Sa(o),u=e?wu:n?Za:yt;if(c.call(o,i))return u(r.get(i));if(c.call(o,a))return u(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!n&&It(xe(i),"iterate",ti),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=xe(r),a=xe(i);return n||(Ts(i,a)&&It(o,"has",i),It(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=xe(a),u=e?wu:n?Za:yt;return!n&&It(c,"iterate",ti),a.forEach((d,f)=>i.call(r,u(d),u(f),o))}};return dt(t,n?{add:Aa("add"),set:Aa("set"),delete:Aa("delete"),clear:Aa("clear")}:{add(i){!e&&!nn(i)&&!Rs(i)&&(i=xe(i));const r=xe(this);return Sa(r).has.call(r,i)||(r.add(i),$n(r,"add",i,i)),this},set(i,r){!e&&!nn(r)&&!Rs(r)&&(r=xe(r));const o=xe(this),{has:a,get:c}=Sa(o);let u=a.call(o,i);u||(i=xe(i),u=a.call(o,i));const d=c.call(o,i);return o.set(i,r),u?Ts(r,d)&&$n(o,"set",i,r):$n(o,"add",i,r),this},delete(i){const r=xe(this),{has:o,get:a}=Sa(r);let c=o.call(r,i);c||(i=xe(i),c=o.call(r,i)),a&&a.call(r,i);const u=r.delete(i);return c&&$n(r,"delete",i,void 0),u},clear(){const i=xe(this),r=i.size!==0,o=i.clear();return r&&$n(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hw(i,n,e)}),t}function Nh(n,e){const t=jw(n,e);return(s,i,r)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?s:Reflect.get(Oe(t,i)&&i in s?t:s,i,r)}const Ww={get:Nh(!1,!1)},qw={get:Nh(!1,!0)},zw={get:Nh(!0,!1)};const __=new WeakMap,y_=new WeakMap,v_=new WeakMap,Kw=new WeakMap;function Gw(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qw(n){return n.__v_skip||!Object.isExtensible(n)?0:Gw(Ew(n))}function Wo(n){return Rs(n)?n:xh(n,!1,Uw,Ww,__)}function E_(n){return xh(n,!1,$w,qw,y_)}function T_(n){return xh(n,!0,Bw,zw,v_)}function xh(n,e,t,s,i){if(!$e(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Qw(n);if(r===0)return n;const o=i.get(n);if(o)return o;const a=new Proxy(n,r===2?s:t);return i.set(n,a),a}function Vi(n){return Rs(n)?Vi(n.__v_raw):!!(n&&n.__v_isReactive)}function Rs(n){return!!(n&&n.__v_isReadonly)}function nn(n){return!!(n&&n.__v_isShallow)}function Oh(n){return n?!!n.__v_raw:!1}function xe(n){const e=n&&n.__v_raw;return e?xe(e):n}function Yw(n){return!Oe(n,"__v_skip")&&Object.isExtensible(n)&&yu(n,"__v_skip",!0),n}const yt=n=>$e(n)?Wo(n):n,Za=n=>$e(n)?T_(n):n;function Rt(n){return n?n.__v_isRef===!0:!1}function mt(n){return w_(n,!1)}function Xw(n){return w_(n,!0)}function w_(n,e){return Rt(n)?n:new Jw(n,e)}class Jw{constructor(e,t){this.dep=new kh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:xe(e),this._value=t?e:yt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||nn(e)||Rs(e);e=s?e:xe(e),Ts(e,t)&&(this._rawValue=e,this._value=s?e:yt(e),this.dep.trigger())}}function Fi(n){return Rt(n)?n.value:n}const Zw={get:(n,e,t)=>e==="__v_raw"?n:Fi(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const i=n[e];return Rt(i)&&!Rt(t)?(i.value=t,!0):Reflect.set(n,e,t,s)}};function I_(n){return Vi(n)?n:new Proxy(n,Zw)}class eI{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new kh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return l_(this,!0),!0}get value(){const e=this.dep.track();return h_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tI(n,e,t=!1){let s,i;return he(n)?s=n:(s=n.get,i=n.set),new eI(s,i,t)}const Ra={},el=new WeakMap;let Qs;function nI(n,e=!1,t=Qs){if(t){let s=el.get(t);s||el.set(t,s=[]),s.push(n)}}function sI(n,e,t=Le){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=t,u=q=>i?q:nn(q)||i===!1||i===0?Hn(q,1):Hn(q);let d,f,g,_,S=!1,k=!1;if(Rt(n)?(f=()=>n.value,S=nn(n)):Vi(n)?(f=()=>u(n),S=!0):ie(n)?(k=!0,S=n.some(q=>Vi(q)||nn(q)),f=()=>n.map(q=>{if(Rt(q))return q.value;if(Vi(q))return u(q);if(he(q))return c?c(q,2):q()})):he(n)?e?f=c?()=>c(n,2):n:f=()=>{if(g){Yn();try{g()}finally{Xn()}}const q=Qs;Qs=d;try{return c?c(n,3,[_]):n(_)}finally{Qs=q}}:f=Cn,e&&i){const q=f,pe=i===!0?1/0:i;f=()=>Hn(q(),pe)}const O=Nw(),j=()=>{d.stop(),O&&O.active&&Ih(O.effects,d)};if(r&&e){const q=e;e=(...pe)=>{q(...pe),j()}}let U=k?new Array(n.length).fill(Ra):Ra;const $=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const pe=d.run();if(i||S||(k?pe.some((ge,I)=>Ts(ge,U[I])):Ts(pe,U))){g&&g();const ge=Qs;Qs=d;try{const I=[pe,U===Ra?void 0:k&&U[0]===Ra?[]:U,_];U=pe,c?c(e,3,I):e(...I)}finally{Qs=ge}}}else d.run()};return a&&a($),d=new o_(f),d.scheduler=o?()=>o($,!1):$,_=q=>nI(q,!1,d),g=d.onStop=()=>{const q=el.get(d);if(q){if(c)c(q,4);else for(const pe of q)pe();el.delete(d)}},e?s?$(!0):U=d.run():o?o($.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function Hn(n,e=1/0,t){if(e<=0||!$e(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Rt(n))Hn(n.value,e,t);else if(ie(n))for(let s=0;s<n.length;s++)Hn(n[s],e,t);else if(fr(n)||Li(n))n.forEach(s=>{Hn(s,e,t)});else if(n_(n)){for(const s in n)Hn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Hn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qo(n,e,t,s){try{return s?n(...s):n()}catch(i){jl(i,e,t)}}function Nn(n,e,t,s){if(he(n)){const i=qo(n,e,t,s);return i&&e_(i)&&i.catch(r=>{jl(r,e,t)}),i}if(ie(n)){const i=[];for(let r=0;r<n.length;r++)i.push(Nn(n[r],e,t,s));return i}}function jl(n,e,t,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](n,c,u)===!1)return}a=a.parent}if(r){Yn(),qo(r,null,10,[n,c,u]),Xn();return}}iI(n,t,i,s,o)}function iI(n,e,t,s=!0,i=!1){if(i)throw n;console.error(n)}const xt=[];let vn=-1;const Ui=[];let ds=null,Ri=0;const C_=Promise.resolve();let tl=null;function Dh(n){const e=tl||C_;return n?e.then(this?n.bind(this):n):e}function rI(n){let e=vn+1,t=xt.length;for(;e<t;){const s=e+t>>>1,i=xt[s],r=Eo(i);r<n||r===n&&i.flags&2?e=s+1:t=s}return e}function Mh(n){if(!(n.flags&1)){const e=Eo(n),t=xt[xt.length-1];!t||!(n.flags&2)&&e>=Eo(t)?xt.push(n):xt.splice(rI(e),0,n),n.flags|=1,S_()}}function S_(){tl||(tl=C_.then(R_))}function oI(n){ie(n)?Ui.push(...n):ds&&n.id===-1?ds.splice(Ri+1,0,n):n.flags&1||(Ui.push(n),n.flags|=1),S_()}function Zf(n,e,t=vn+1){for(;t<xt.length;t++){const s=xt[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;xt.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function A_(n){if(Ui.length){const e=[...new Set(Ui)].sort((t,s)=>Eo(t)-Eo(s));if(Ui.length=0,ds){ds.push(...e);return}for(ds=e,Ri=0;Ri<ds.length;Ri++){const t=ds[Ri];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ds=null,Ri=0}}const Eo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function R_(n){try{for(vn=0;vn<xt.length;vn++){const e=xt[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<xt.length;vn++){const e=xt[vn];e&&(e.flags&=-2)}vn=-1,xt.length=0,A_(),tl=null,(xt.length||Ui.length)&&R_()}}let Xt=null,b_=null;function nl(n){const e=Xt;return Xt=n,b_=n&&n.type.__scopeId||null,e}function aI(n,e=Xt,t){if(!e||n._n)return n;const s=(...i)=>{s._d&&lp(-1);const r=nl(e);let o;try{o=n(...i)}finally{nl(r),s._d&&lp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function eo(n,e){if(Xt===null)return n;const t=Kl(Xt),s=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=Le]=e[i];r&&(he(r)&&(r={mounted:r,updated:r}),r.deep&&Hn(o),s.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function Ks(n,e,t,s){const i=n.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Yn(),Nn(c,t,8,[n.el,a,n,e]),Xn())}}const lI=Symbol("_vte"),cI=n=>n.__isTeleport;function Lh(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Lh(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Vh(n,e){return he(n)?dt({name:n.name},e,{setup:n}):n}function P_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function to(n,e,t,s,i=!1){if(ie(n)){n.forEach((S,k)=>to(S,e&&(ie(e)?e[k]:e),t,s,i));return}if(no(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&to(n,e,t,s.component.subTree);return}const r=s.shapeFlag&4?Kl(s.component):s.el,o=i?null:r,{i:a,r:c}=n,u=e&&e.r,d=a.refs===Le?a.refs={}:a.refs,f=a.setupState,g=xe(f),_=f===Le?()=>!1:S=>Oe(g,S);if(u!=null&&u!==c&&(nt(u)?(d[u]=null,_(u)&&(f[u]=null)):Rt(u)&&(u.value=null)),he(c))qo(c,a,12,[o,d]);else{const S=nt(c),k=Rt(c);if(S||k){const O=()=>{if(n.f){const j=S?_(c)?f[c]:d[c]:c.value;i?ie(j)&&Ih(j,r):ie(j)?j.includes(r)||j.push(r):S?(d[c]=[r],_(c)&&(f[c]=d[c])):(c.value=[r],n.k&&(d[n.k]=c.value))}else S?(d[c]=o,_(c)&&(f[c]=o)):k&&(c.value=o,n.k&&(d[n.k]=o))};o?(O.id=-1,Gt(O,t)):O()}}}Bl().requestIdleCallback;Bl().cancelIdleCallback;const no=n=>!!n.type.__asyncLoader,k_=n=>n.type.__isKeepAlive;function uI(n,e){N_(n,"a",e)}function hI(n,e){N_(n,"da",e)}function N_(n,e,t=At){const s=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Wl(e,s,t),t){let i=t.parent;for(;i&&i.parent;)k_(i.parent.vnode)&&dI(s,e,t,i),i=i.parent}}function dI(n,e,t,s){const i=Wl(e,n,s,!0);x_(()=>{Ih(s[e],i)},t)}function Wl(n,e,t=At,s=!1){if(t){const i=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Yn();const a=Ko(t),c=Nn(e,t,n,o);return a(),Xn(),c});return s?i.unshift(r):i.push(r),r}}const ns=n=>(e,t=At)=>{(!wo||n==="sp")&&Wl(n,(...s)=>e(...s),t)},fI=ns("bm"),zo=ns("m"),pI=ns("bu"),gI=ns("u"),mI=ns("bum"),x_=ns("um"),_I=ns("sp"),yI=ns("rtg"),vI=ns("rtc");function EI(n,e=At){Wl("ec",n,e)}const O_="components";function TI(n,e){return II(O_,n,!0,e)||n}const wI=Symbol.for("v-ndc");function II(n,e,t=!0,s=!1){const i=Xt||At;if(i){const r=i.type;if(n===O_){const a=hC(r,!1);if(a&&(a===e||a===rn(e)||a===Ul(rn(e))))return r}const o=ep(i[n]||r[n],e)||ep(i.appContext[n],e);return!o&&s?r:o}}function ep(n,e){return n&&(n[e]||n[rn(e)]||n[Ul(rn(e))])}function Yi(n,e,t,s){let i;const r=t&&t[s],o=ie(n);if(o||nt(n)){const a=o&&Vi(n);let c=!1,u=!1;a&&(c=!nn(n),u=Rs(n),n=Hl(n)),i=new Array(n.length);for(let d=0,f=n.length;d<f;d++)i[d]=e(c?u?Za(yt(n[d])):yt(n[d]):n[d],d,void 0,r&&r[d])}else if(typeof n=="number"){i=new Array(n);for(let a=0;a<n;a++)i[a]=e(a+1,a,void 0,r&&r[a])}else if($e(n))if(n[Symbol.iterator])i=Array.from(n,(a,c)=>e(a,c,void 0,r&&r[c]));else{const a=Object.keys(n);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const d=a[c];i[c]=e(n[d],d,c,r&&r[c])}}else i=[];return t&&(t[s]=i),i}const Iu=n=>n?J_(n)?Kl(n):Iu(n.parent):null,so=dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Iu(n.parent),$root:n=>Iu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fh(n),$forceUpdate:n=>n.f||(n.f=()=>{Mh(n.update)}),$nextTick:n=>n.n||(n.n=Dh.bind(n.proxy)),$watch:n=>WI.bind(n)}),qc=(n,e)=>n!==Le&&!n.__isScriptSetup&&Oe(n,e),CI={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(qc(s,e))return o[e]=1,s[e];if(i!==Le&&Oe(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&Oe(u,e))return o[e]=3,r[e];if(t!==Le&&Oe(t,e))return o[e]=4,t[e];Cu&&(o[e]=0)}}const d=so[e];let f,g;if(d)return e==="$attrs"&&It(n.attrs,"get",""),d(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Le&&Oe(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,Oe(g,e))return g[e]},set({_:n},e,t){const{data:s,setupState:i,ctx:r}=n;return qc(i,e)?(i[e]=t,!0):s!==Le&&Oe(s,e)?(s[e]=t,!0):Oe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!t[o]||n!==Le&&Oe(n,o)||qc(e,o)||(a=r[0])&&Oe(a,o)||Oe(s,o)||Oe(so,o)||Oe(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Oe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function tp(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Cu=!0;function SI(n){const e=Fh(n),t=n.proxy,s=n.ctx;Cu=!1,e.beforeCreate&&np(e.beforeCreate,n,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:f,mounted:g,beforeUpdate:_,updated:S,activated:k,deactivated:O,beforeDestroy:j,beforeUnmount:U,destroyed:$,unmounted:q,render:pe,renderTracked:ge,renderTriggered:I,errorCaptured:v,serverPrefetch:w,expose:C,inheritAttrs:A,components:b,directives:T,filters:Pt}=e;if(u&&AI(u,s,null),o)for(const Ce in o){const Te=o[Ce];he(Te)&&(s[Ce]=Te.bind(t))}if(i){const Ce=i.call(t,t);$e(Ce)&&(n.data=Wo(Ce))}if(Cu=!0,r)for(const Ce in r){const Te=r[Ce],qt=he(Te)?Te.bind(t,t):he(Te.get)?Te.get.bind(t,t):Cn,on=!he(Te)&&he(Te.set)?Te.set.bind(t):Cn,en=ln({get:qt,set:on});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>en.value,set:qe=>en.value=qe})}if(a)for(const Ce in a)D_(a[Ce],s,t,Ce);if(c){const Ce=he(c)?c.call(t):c;Reflect.ownKeys(Ce).forEach(Te=>{Fa(Te,Ce[Te])})}d&&np(d,n,"c");function et(Ce,Te){ie(Te)?Te.forEach(qt=>Ce(qt.bind(t))):Te&&Ce(Te.bind(t))}if(et(fI,f),et(zo,g),et(pI,_),et(gI,S),et(uI,k),et(hI,O),et(EI,v),et(vI,ge),et(yI,I),et(mI,U),et(x_,q),et(_I,w),ie(C))if(C.length){const Ce=n.exposed||(n.exposed={});C.forEach(Te=>{Object.defineProperty(Ce,Te,{get:()=>t[Te],set:qt=>t[Te]=qt})})}else n.exposed||(n.exposed={});pe&&n.render===Cn&&(n.render=pe),A!=null&&(n.inheritAttrs=A),b&&(n.components=b),T&&(n.directives=T),w&&P_(n)}function AI(n,e,t=Cn){ie(n)&&(n=Su(n));for(const s in n){const i=n[s];let r;$e(i)?"default"in i?r=Sn(i.from||s,i.default,!0):r=Sn(i.from||s):r=Sn(i),Rt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function np(n,e,t){Nn(ie(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function D_(n,e,t,s){let i=s.includes(".")?K_(t,s):()=>t[s];if(nt(n)){const r=e[n];he(r)&&Ua(i,r)}else if(he(n))Ua(i,n.bind(t));else if($e(n))if(ie(n))n.forEach(r=>D_(r,e,t,s));else{const r=he(n.handler)?n.handler.bind(t):e[n.handler];he(r)&&Ua(i,r,n)}}function Fh(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!t&&!s?c=e:(c={},i.length&&i.forEach(u=>sl(c,u,o,!0)),sl(c,e,o)),$e(e)&&r.set(e,c),c}function sl(n,e,t,s=!1){const{mixins:i,extends:r}=e;r&&sl(n,r,t,!0),i&&i.forEach(o=>sl(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=RI[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const RI={data:sp,props:ip,emits:ip,methods:Wr,computed:Wr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Wr,directives:Wr,watch:PI,provide:sp,inject:bI};function sp(n,e){return e?n?function(){return dt(he(n)?n.call(this,this):n,he(e)?e.call(this,this):e)}:e:n}function bI(n,e){return Wr(Su(n),Su(e))}function Su(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Wr(n,e){return n?dt(Object.create(null),n,e):e}function ip(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:dt(Object.create(null),tp(n),tp(e??{})):e}function PI(n,e){if(!n)return e;if(!e)return n;const t=dt(Object.create(null),n);for(const s in e)t[s]=Nt(n[s],e[s]);return t}function M_(){return{app:null,config:{isNativeTag:yw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kI=0;function NI(n,e){return function(s,i=null){he(s)||(s=dt({},s)),i!=null&&!$e(i)&&(i=null);const r=M_(),o=new WeakSet,a=[];let c=!1;const u=r.app={_uid:kI++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:fC,get config(){return r.config},set config(d){},use(d,...f){return o.has(d)||(d&&he(d.install)?(o.add(d),d.install(u,...f)):he(d)&&(o.add(d),d(u,...f))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,f){return f?(r.components[d]=f,u):r.components[d]},directive(d,f){return f?(r.directives[d]=f,u):r.directives[d]},mount(d,f,g){if(!c){const _=u._ceVNode||Mt(s,i);return _.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),f&&e?e(_,d):n(_,d,g),c=!0,u._container=d,d.__vue_app__=u,Kl(_.component)}},onUnmount(d){a.push(d)},unmount(){c&&(Nn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,f){return r.provides[d]=f,u},runWithContext(d){const f=Bi;Bi=u;try{return d()}finally{Bi=f}}};return u}}let Bi=null;function Fa(n,e){if(At){let t=At.provides;const s=At.parent&&At.parent.provides;s===t&&(t=At.provides=Object.create(s)),t[n]=e}}function Sn(n,e,t=!1){const s=At||Xt;if(s||Bi){let i=Bi?Bi._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&he(e)?e.call(s&&s.proxy):e}}const L_={},V_=()=>Object.create(L_),F_=n=>Object.getPrototypeOf(n)===L_;function xI(n,e,t,s=!1){const i={},r=V_();n.propsDefaults=Object.create(null),U_(n,e,i,r);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=s?i:E_(i):n.type.props?n.props=i:n.props=r,n.attrs=r}function OI(n,e,t,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=n,a=xe(i),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let f=0;f<d.length;f++){let g=d[f];if(ql(n.emitsOptions,g))continue;const _=e[g];if(c)if(Oe(r,g))_!==r[g]&&(r[g]=_,u=!0);else{const S=rn(g);i[S]=Au(c,a,S,_,n,!1)}else _!==r[g]&&(r[g]=_,u=!0)}}}else{U_(n,e,i,r)&&(u=!0);let d;for(const f in a)(!e||!Oe(e,f)&&((d=gi(f))===f||!Oe(e,d)))&&(c?t&&(t[f]!==void 0||t[d]!==void 0)&&(i[f]=Au(c,a,f,void 0,n,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Oe(e,f))&&(delete r[f],u=!0)}u&&$n(n.attrs,"set","")}function U_(n,e,t,s){const[i,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xr(c))continue;const u=e[c];let d;i&&Oe(i,d=rn(c))?!r||!r.includes(d)?t[d]=u:(a||(a={}))[d]=u:ql(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=xe(t),u=a||Le;for(let d=0;d<r.length;d++){const f=r[d];t[f]=Au(i,c,f,u[f],n,!Oe(u,f))}}return o}function Au(n,e,t,s,i,r){const o=n[t];if(o!=null){const a=Oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&he(c)){const{propsDefaults:u}=i;if(t in u)s=u[t];else{const d=Ko(i);s=u[t]=c.call(null,e),d()}}else s=c;i.ce&&i.ce._setProp(t,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===gi(t))&&(s=!0))}return s}const DI=new WeakMap;function B_(n,e,t=!1){const s=t?DI:e.propsCache,i=s.get(n);if(i)return i;const r=n.props,o={},a=[];let c=!1;if(!he(n)){const d=f=>{c=!0;const[g,_]=B_(f,e,!0);dt(o,g),_&&a.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!c)return $e(n)&&s.set(n,Mi),Mi;if(ie(r))for(let d=0;d<r.length;d++){const f=rn(r[d]);rp(f)&&(o[f]=Le)}else if(r)for(const d in r){const f=rn(d);if(rp(f)){const g=r[d],_=o[f]=ie(g)||he(g)?{type:g}:dt({},g),S=_.type;let k=!1,O=!0;if(ie(S))for(let j=0;j<S.length;++j){const U=S[j],$=he(U)&&U.name;if($==="Boolean"){k=!0;break}else $==="String"&&(O=!1)}else k=he(S)&&S.name==="Boolean";_[0]=k,_[1]=O,(k||Oe(_,"default"))&&a.push(f)}}const u=[o,a];return $e(n)&&s.set(n,u),u}function rp(n){return n[0]!=="$"&&!Xr(n)}const Uh=n=>n[0]==="_"||n==="$stable",Bh=n=>ie(n)?n.map(Tn):[Tn(n)],MI=(n,e,t)=>{if(e._n)return e;const s=aI((...i)=>Bh(e(...i)),t);return s._c=!1,s},$_=(n,e,t)=>{const s=n._ctx;for(const i in n){if(Uh(i))continue;const r=n[i];if(he(r))e[i]=MI(i,r,s);else if(r!=null){const o=Bh(r);e[i]=()=>o}}},H_=(n,e)=>{const t=Bh(e);n.slots.default=()=>t},j_=(n,e,t)=>{for(const s in e)(t||!Uh(s))&&(n[s]=e[s])},LI=(n,e,t)=>{const s=n.slots=V_();if(n.vnode.shapeFlag&32){const i=e.__;i&&yu(s,"__",i,!0);const r=e._;r?(j_(s,e,t),t&&yu(s,"_",r,!0)):$_(e,s)}else e&&H_(n,e)},VI=(n,e,t)=>{const{vnode:s,slots:i}=n;let r=!0,o=Le;if(s.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:j_(i,e,t):(r=!e.$stable,$_(e,i)),o=e}else e&&(H_(n,e),o={default:1});if(r)for(const a in i)!Uh(a)&&o[a]==null&&delete i[a]},Gt=XI;function FI(n){return UI(n)}function UI(n,e){const t=Bl();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:g,setScopeId:_=Cn,insertStaticContent:S}=n,k=(y,E,P,V=null,D=null,F=null,G=void 0,z=null,W=!!E.dynamicChildren)=>{if(y===E)return;y&&!Vr(y,E)&&(V=M(y),qe(y,D,F,!0),y=null),E.patchFlag===-2&&(W=!1,E.dynamicChildren=null);const{type:B,ref:ne,shapeFlag:Q}=E;switch(B){case zl:O(y,E,P,V);break;case bs:j(y,E,P,V);break;case Ba:y==null&&U(E,P,V,G);break;case Ot:b(y,E,P,V,D,F,G,z,W);break;default:Q&1?pe(y,E,P,V,D,F,G,z,W):Q&6?T(y,E,P,V,D,F,G,z,W):(Q&64||Q&128)&&B.process(y,E,P,V,D,F,G,z,W,ee)}ne!=null&&D?to(ne,y&&y.ref,F,E||y,!E):ne==null&&y&&y.ref!=null&&to(y.ref,null,F,y,!0)},O=(y,E,P,V)=>{if(y==null)s(E.el=a(E.children),P,V);else{const D=E.el=y.el;E.children!==y.children&&u(D,E.children)}},j=(y,E,P,V)=>{y==null?s(E.el=c(E.children||""),P,V):E.el=y.el},U=(y,E,P,V)=>{[y.el,y.anchor]=S(y.children,E,P,V,y.el,y.anchor)},$=({el:y,anchor:E},P,V)=>{let D;for(;y&&y!==E;)D=g(y),s(y,P,V),y=D;s(E,P,V)},q=({el:y,anchor:E})=>{let P;for(;y&&y!==E;)P=g(y),i(y),y=P;i(E)},pe=(y,E,P,V,D,F,G,z,W)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),y==null?ge(E,P,V,D,F,G,z,W):w(y,E,D,F,G,z,W)},ge=(y,E,P,V,D,F,G,z)=>{let W,B;const{props:ne,shapeFlag:Q,transition:te,dirs:oe}=y;if(W=y.el=o(y.type,F,ne&&ne.is,ne),Q&8?d(W,y.children):Q&16&&v(y.children,W,null,V,D,zc(y,F),G,z),oe&&Ks(y,null,V,"created"),I(W,y,y.scopeId,G,V),ne){for(const de in ne)de!=="value"&&!Xr(de)&&r(W,de,null,ne[de],F,V);"value"in ne&&r(W,"value",null,ne.value,F),(B=ne.onVnodeBeforeMount)&&yn(B,V,y)}oe&&Ks(y,null,V,"beforeMount");const se=BI(D,te);se&&te.beforeEnter(W),s(W,E,P),((B=ne&&ne.onVnodeMounted)||se||oe)&&Gt(()=>{B&&yn(B,V,y),se&&te.enter(W),oe&&Ks(y,null,V,"mounted")},D)},I=(y,E,P,V,D)=>{if(P&&_(y,P),V)for(let F=0;F<V.length;F++)_(y,V[F]);if(D){let F=D.subTree;if(E===F||Q_(F.type)&&(F.ssContent===E||F.ssFallback===E)){const G=D.vnode;I(y,G,G.scopeId,G.slotScopeIds,D.parent)}}},v=(y,E,P,V,D,F,G,z,W=0)=>{for(let B=W;B<y.length;B++){const ne=y[B]=z?fs(y[B]):Tn(y[B]);k(null,ne,E,P,V,D,F,G,z)}},w=(y,E,P,V,D,F,G)=>{const z=E.el=y.el;let{patchFlag:W,dynamicChildren:B,dirs:ne}=E;W|=y.patchFlag&16;const Q=y.props||Le,te=E.props||Le;let oe;if(P&&Gs(P,!1),(oe=te.onVnodeBeforeUpdate)&&yn(oe,P,E,y),ne&&Ks(E,y,P,"beforeUpdate"),P&&Gs(P,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&d(z,""),B?C(y.dynamicChildren,B,z,P,V,zc(E,D),F):G||Te(y,E,z,null,P,V,zc(E,D),F,!1),W>0){if(W&16)A(z,Q,te,P,D);else if(W&2&&Q.class!==te.class&&r(z,"class",null,te.class,D),W&4&&r(z,"style",Q.style,te.style,D),W&8){const se=E.dynamicProps;for(let de=0;de<se.length;de++){const Se=se[de],ft=Q[Se],st=te[Se];(st!==ft||Se==="value")&&r(z,Se,ft,st,D,P)}}W&1&&y.children!==E.children&&d(z,E.children)}else!G&&B==null&&A(z,Q,te,P,D);((oe=te.onVnodeUpdated)||ne)&&Gt(()=>{oe&&yn(oe,P,E,y),ne&&Ks(E,y,P,"updated")},V)},C=(y,E,P,V,D,F,G)=>{for(let z=0;z<E.length;z++){const W=y[z],B=E[z],ne=W.el&&(W.type===Ot||!Vr(W,B)||W.shapeFlag&198)?f(W.el):P;k(W,B,ne,null,V,D,F,G,!0)}},A=(y,E,P,V,D)=>{if(E!==P){if(E!==Le)for(const F in E)!Xr(F)&&!(F in P)&&r(y,F,E[F],null,D,V);for(const F in P){if(Xr(F))continue;const G=P[F],z=E[F];G!==z&&F!=="value"&&r(y,F,z,G,D,V)}"value"in P&&r(y,"value",E.value,P.value,D)}},b=(y,E,P,V,D,F,G,z,W)=>{const B=E.el=y?y.el:a(""),ne=E.anchor=y?y.anchor:a("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:oe}=E;oe&&(z=z?z.concat(oe):oe),y==null?(s(B,P,V),s(ne,P,V),v(E.children||[],P,ne,D,F,G,z,W)):Q>0&&Q&64&&te&&y.dynamicChildren?(C(y.dynamicChildren,te,P,D,F,G,z),(E.key!=null||D&&E===D.subTree)&&W_(y,E,!0)):Te(y,E,P,ne,D,F,G,z,W)},T=(y,E,P,V,D,F,G,z,W)=>{E.slotScopeIds=z,y==null?E.shapeFlag&512?D.ctx.activate(E,P,V,G,W):Pt(E,P,V,D,F,G,W):Zt(y,E,W)},Pt=(y,E,P,V,D,F,G)=>{const z=y.component=oC(y,V,D);if(k_(y)&&(z.ctx.renderer=ee),aC(z,!1,G),z.asyncDep){if(D&&D.registerDep(z,et,G),!y.el){const W=z.subTree=Mt(bs);j(null,W,E,P)}}else et(z,y,E,P,D,F,G)},Zt=(y,E,P)=>{const V=E.component=y.component;if(QI(y,E,P))if(V.asyncDep&&!V.asyncResolved){Ce(V,E,P);return}else V.next=E,V.update();else E.el=y.el,V.vnode=E},et=(y,E,P,V,D,F,G)=>{const z=()=>{if(y.isMounted){let{next:Q,bu:te,u:oe,parent:se,vnode:de}=y;{const it=q_(y);if(it){Q&&(Q.el=de.el,Ce(y,Q,G)),it.asyncDep.then(()=>{y.isUnmounted||z()});return}}let Se=Q,ft;Gs(y,!1),Q?(Q.el=de.el,Ce(y,Q,G)):Q=de,te&&Va(te),(ft=Q.props&&Q.props.onVnodeBeforeUpdate)&&yn(ft,se,Q,de),Gs(y,!0);const st=Kc(y),zt=y.subTree;y.subTree=st,k(zt,st,f(zt.el),M(zt),y,D,F),Q.el=st.el,Se===null&&YI(y,st.el),oe&&Gt(oe,D),(ft=Q.props&&Q.props.onVnodeUpdated)&&Gt(()=>yn(ft,se,Q,de),D)}else{let Q;const{el:te,props:oe}=E,{bm:se,m:de,parent:Se,root:ft,type:st}=y,zt=no(E);if(Gs(y,!1),se&&Va(se),!zt&&(Q=oe&&oe.onVnodeBeforeMount)&&yn(Q,Se,E),Gs(y,!0),te&&De){const it=()=>{y.subTree=Kc(y),De(te,y.subTree,y,D,null)};zt&&st.__asyncHydrate?st.__asyncHydrate(te,y,it):it()}else{ft.ce&&ft.ce._def.shadowRoot!==!1&&ft.ce._injectChildStyle(st);const it=y.subTree=Kc(y);k(null,it,P,V,y,D,F),E.el=it.el}if(de&&Gt(de,D),!zt&&(Q=oe&&oe.onVnodeMounted)){const it=E;Gt(()=>yn(Q,Se,it),D)}(E.shapeFlag&256||Se&&no(Se.vnode)&&Se.vnode.shapeFlag&256)&&y.a&&Gt(y.a,D),y.isMounted=!0,E=P=V=null}};y.scope.on();const W=y.effect=new o_(z);y.scope.off();const B=y.update=W.run.bind(W),ne=y.job=W.runIfDirty.bind(W);ne.i=y,ne.id=y.uid,W.scheduler=()=>Mh(ne),Gs(y,!0),B()},Ce=(y,E,P)=>{E.component=y;const V=y.vnode.props;y.vnode=E,y.next=null,OI(y,E.props,V,P),VI(y,E.children,P),Yn(),Zf(y),Xn()},Te=(y,E,P,V,D,F,G,z,W=!1)=>{const B=y&&y.children,ne=y?y.shapeFlag:0,Q=E.children,{patchFlag:te,shapeFlag:oe}=E;if(te>0){if(te&128){on(B,Q,P,V,D,F,G,z,W);return}else if(te&256){qt(B,Q,P,V,D,F,G,z,W);return}}oe&8?(ne&16&&Ft(B,D,F),Q!==B&&d(P,Q)):ne&16?oe&16?on(B,Q,P,V,D,F,G,z,W):Ft(B,D,F,!0):(ne&8&&d(P,""),oe&16&&v(Q,P,V,D,F,G,z,W))},qt=(y,E,P,V,D,F,G,z,W)=>{y=y||Mi,E=E||Mi;const B=y.length,ne=E.length,Q=Math.min(B,ne);let te;for(te=0;te<Q;te++){const oe=E[te]=W?fs(E[te]):Tn(E[te]);k(y[te],oe,P,null,D,F,G,z,W)}B>ne?Ft(y,D,F,!0,!1,Q):v(E,P,V,D,F,G,z,W,Q)},on=(y,E,P,V,D,F,G,z,W)=>{let B=0;const ne=E.length;let Q=y.length-1,te=ne-1;for(;B<=Q&&B<=te;){const oe=y[B],se=E[B]=W?fs(E[B]):Tn(E[B]);if(Vr(oe,se))k(oe,se,P,null,D,F,G,z,W);else break;B++}for(;B<=Q&&B<=te;){const oe=y[Q],se=E[te]=W?fs(E[te]):Tn(E[te]);if(Vr(oe,se))k(oe,se,P,null,D,F,G,z,W);else break;Q--,te--}if(B>Q){if(B<=te){const oe=te+1,se=oe<ne?E[oe].el:V;for(;B<=te;)k(null,E[B]=W?fs(E[B]):Tn(E[B]),P,se,D,F,G,z,W),B++}}else if(B>te)for(;B<=Q;)qe(y[B],D,F,!0),B++;else{const oe=B,se=B,de=new Map;for(B=se;B<=te;B++){const pt=E[B]=W?fs(E[B]):Tn(E[B]);pt.key!=null&&de.set(pt.key,B)}let Se,ft=0;const st=te-se+1;let zt=!1,it=0;const os=new Array(st);for(B=0;B<st;B++)os[B]=0;for(B=oe;B<=Q;B++){const pt=y[B];if(ft>=st){qe(pt,D,F,!0);continue}let tn;if(pt.key!=null)tn=de.get(pt.key);else for(Se=se;Se<=te;Se++)if(os[Se-se]===0&&Vr(pt,E[Se])){tn=Se;break}tn===void 0?qe(pt,D,F,!0):(os[tn-se]=B+1,tn>=it?it=tn:zt=!0,k(pt,E[tn],P,null,D,F,G,z,W),ft++)}const Ir=zt?$I(os):Mi;for(Se=Ir.length-1,B=st-1;B>=0;B--){const pt=se+B,tn=E[pt],ca=pt+1<ne?E[pt+1].el:V;os[B]===0?k(null,tn,P,ca,D,F,G,z,W):zt&&(Se<0||B!==Ir[Se]?en(tn,P,ca,2):Se--)}}},en=(y,E,P,V,D=null)=>{const{el:F,type:G,transition:z,children:W,shapeFlag:B}=y;if(B&6){en(y.component.subTree,E,P,V);return}if(B&128){y.suspense.move(E,P,V);return}if(B&64){G.move(y,E,P,ee);return}if(G===Ot){s(F,E,P);for(let Q=0;Q<W.length;Q++)en(W[Q],E,P,V);s(y.anchor,E,P);return}if(G===Ba){$(y,E,P);return}if(V!==2&&B&1&&z)if(V===0)z.beforeEnter(F),s(F,E,P),Gt(()=>z.enter(F),D);else{const{leave:Q,delayLeave:te,afterLeave:oe}=z,se=()=>{y.ctx.isUnmounted?i(F):s(F,E,P)},de=()=>{Q(F,()=>{se(),oe&&oe()})};te?te(F,se,de):de()}else s(F,E,P)},qe=(y,E,P,V=!1,D=!1)=>{const{type:F,props:G,ref:z,children:W,dynamicChildren:B,shapeFlag:ne,patchFlag:Q,dirs:te,cacheIndex:oe}=y;if(Q===-2&&(D=!1),z!=null&&(Yn(),to(z,null,P,y,!0),Xn()),oe!=null&&(E.renderCache[oe]=void 0),ne&256){E.ctx.deactivate(y);return}const se=ne&1&&te,de=!no(y);let Se;if(de&&(Se=G&&G.onVnodeBeforeUnmount)&&yn(Se,E,y),ne&6)_n(y.component,P,V);else{if(ne&128){y.suspense.unmount(P,V);return}se&&Ks(y,null,E,"beforeUnmount"),ne&64?y.type.remove(y,E,P,ee,V):B&&!B.hasOnce&&(F!==Ot||Q>0&&Q&64)?Ft(B,E,P,!1,!0):(F===Ot&&Q&384||!D&&ne&16)&&Ft(W,E,P),V&&ze(y)}(de&&(Se=G&&G.onVnodeUnmounted)||se)&&Gt(()=>{Se&&yn(Se,E,y),se&&Ks(y,null,E,"unmounted")},P)},ze=y=>{const{type:E,el:P,anchor:V,transition:D}=y;if(E===Ot){rs(P,V);return}if(E===Ba){q(y);return}const F=()=>{i(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:G,delayLeave:z}=D,W=()=>G(P,F);z?z(y.el,F,W):W()}else F()},rs=(y,E)=>{let P;for(;y!==E;)P=g(y),i(y),y=P;i(E)},_n=(y,E,P)=>{const{bum:V,scope:D,job:F,subTree:G,um:z,m:W,a:B,parent:ne,slots:{__:Q}}=y;op(W),op(B),V&&Va(V),ne&&ie(Q)&&Q.forEach(te=>{ne.renderCache[te]=void 0}),D.stop(),F&&(F.flags|=8,qe(G,y,E,P)),z&&Gt(z,E),Gt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Ft=(y,E,P,V=!1,D=!1,F=0)=>{for(let G=F;G<y.length;G++)qe(y[G],E,P,V,D)},M=y=>{if(y.shapeFlag&6)return M(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=g(y.anchor||y.el),P=E&&E[lI];return P?g(P):E};let J=!1;const X=(y,E,P)=>{y==null?E._vnode&&qe(E._vnode,null,null,!0):k(E._vnode||null,y,E,null,null,null,P),E._vnode=y,J||(J=!0,Zf(),A_(),J=!1)},ee={p:k,um:qe,m:en,r:ze,mt:Pt,mc:v,pc:Te,pbc:C,n:M,o:n};let we,De;return e&&([we,De]=e(ee)),{render:X,hydrate:we,createApp:NI(X,we)}}function zc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Gs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function BI(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function W_(n,e,t=!1){const s=n.children,i=e.children;if(ie(s)&&ie(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=fs(i[r]),a.el=o.el),!t&&a.patchFlag!==-2&&W_(o,a)),a.type===zl&&(a.el=o.el),a.type===bs&&!a.el&&(a.el=o.el)}}function $I(n){const e=n.slice(),t=[0];let s,i,r,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(i=t[t.length-1],n[i]<u){e[s]=i,t.push(s);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<u?r=a+1:o=a;u<n[t[r]]&&(r>0&&(e[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function q_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:q_(e)}function op(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const HI=Symbol.for("v-scx"),jI=()=>Sn(HI);function Ua(n,e,t){return z_(n,e,t)}function z_(n,e,t=Le){const{immediate:s,deep:i,flush:r,once:o}=t,a=dt({},t),c=e&&s||!e&&r!=="post";let u;if(wo){if(r==="sync"){const _=jI();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Cn,_.resume=Cn,_.pause=Cn,_}}const d=At;a.call=(_,S,k)=>Nn(_,d,S,k);let f=!1;r==="post"?a.scheduler=_=>{Gt(_,d&&d.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(_,S)=>{S?_():Mh(_)}),a.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=sI(n,e,a);return wo&&(u?u.push(g):c&&g()),g}function WI(n,e,t){const s=this.proxy,i=nt(n)?n.includes(".")?K_(s,n):()=>s[n]:n.bind(s,s);let r;he(e)?r=e:(r=e.handler,t=e);const o=Ko(this),a=z_(i,r.bind(s),t);return o(),a}function K_(n,e){const t=e.split(".");return()=>{let s=n;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const qI=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${rn(e)}Modifiers`]||n[`${gi(e)}Modifiers`];function zI(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Le;let i=t;const r=e.startsWith("update:"),o=r&&qI(s,e.slice(7));o&&(o.trim&&(i=t.map(d=>nt(d)?d.trim():d)),o.number&&(i=t.map(Ja)));let a,c=s[a=Bc(e)]||s[a=Bc(rn(e))];!c&&r&&(c=s[a=Bc(gi(e))]),c&&Nn(c,n,6,i);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(u,n,6,i)}}function G_(n,e,t=!1){const s=e.emitsCache,i=s.get(n);if(i!==void 0)return i;const r=n.emits;let o={},a=!1;if(!he(n)){const c=u=>{const d=G_(u,e,!0);d&&(a=!0,dt(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?($e(n)&&s.set(n,null),null):(ie(r)?r.forEach(c=>o[c]=null):dt(o,r),$e(n)&&s.set(n,o),o)}function ql(n,e){return!n||!Vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(n,e[0].toLowerCase()+e.slice(1))||Oe(n,gi(e))||Oe(n,e))}function Kc(n){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:u,renderCache:d,props:f,data:g,setupState:_,ctx:S,inheritAttrs:k}=n,O=nl(n);let j,U;try{if(t.shapeFlag&4){const q=i||s,pe=q;j=Tn(u.call(pe,q,d,f,_,g,S)),U=a}else{const q=e;j=Tn(q.length>1?q(f,{attrs:a,slots:o,emit:c}):q(f,null)),U=e.props?a:KI(a)}}catch(q){io.length=0,jl(q,n,1),j=Mt(bs)}let $=j;if(U&&k!==!1){const q=Object.keys(U),{shapeFlag:pe}=$;q.length&&pe&7&&(r&&q.some(wh)&&(U=GI(U,r)),$=Xi($,U,!1,!0))}return t.dirs&&($=Xi($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(t.dirs):t.dirs),t.transition&&Lh($,t.transition),j=$,nl(O),j}const KI=n=>{let e;for(const t in n)(t==="class"||t==="style"||Vl(t))&&((e||(e={}))[t]=n[t]);return e},GI=(n,e)=>{const t={};for(const s in n)(!wh(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function QI(n,e,t){const{props:s,children:i,component:r}=n,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?ap(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const g=d[f];if(o[g]!==s[g]&&!ql(u,g))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ap(s,o,u):!0:!!o;return!1}function ap(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==n[r]&&!ql(t,r))return!0}return!1}function YI({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Q_=n=>n.__isSuspense;function XI(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):oI(n)}const Ot=Symbol.for("v-fgt"),zl=Symbol.for("v-txt"),bs=Symbol.for("v-cmt"),Ba=Symbol.for("v-stc"),io=[];let Jt=null;function We(n=!1){io.push(Jt=n?null:[])}function JI(){io.pop(),Jt=io[io.length-1]||null}let To=1;function lp(n,e=!1){To+=n,n<0&&Jt&&e&&(Jt.hasOnce=!0)}function Y_(n){return n.dynamicChildren=To>0?Jt||Mi:null,JI(),To>0&&Jt&&Jt.push(n),n}function Ke(n,e,t,s,i,r){return Y_(x(n,e,t,s,i,r,!0))}function ZI(n,e,t,s,i){return Y_(Mt(n,e,t,s,i,!0))}function il(n){return n?n.__v_isVNode===!0:!1}function Vr(n,e){return n.type===e.type&&n.key===e.key}const X_=({key:n})=>n??null,$a=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?nt(n)||Rt(n)||he(n)?{i:Xt,r:n,k:e,f:!!t}:n:null);function x(n,e=null,t=null,s=0,i=null,r=n===Ot?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&X_(e),ref:e&&$a(e),scopeId:b_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xt};return a?($h(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=nt(t)?8:16),To>0&&!o&&Jt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Jt.push(c),c}const Mt=eC;function eC(n,e=null,t=null,s=0,i=null,r=!1){if((!n||n===wI)&&(n=bs),il(n)){const a=Xi(n,e,!0);return t&&$h(a,t),To>0&&!r&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(n)]=a:Jt.push(a)),a.patchFlag=-2,a}if(dC(n)&&(n=n.__vccOpts),e){e=tC(e);let{class:a,style:c}=e;a&&!nt(a)&&(e.class=$l(a)),$e(c)&&(Oh(c)&&!ie(c)&&(c=dt({},c)),e.style=Sh(c))}const o=nt(n)?1:Q_(n)?128:cI(n)?64:$e(n)?4:he(n)?2:0;return x(n,e,t,s,i,o,r,!0)}function tC(n){return n?Oh(n)||F_(n)?dt({},n):n:null}function Xi(n,e,t=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=n,u=e?sC(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&X_(u),ref:e&&e.ref?t&&r?ie(r)?r.concat($a(e)):[r,$a(e)]:$a(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ot?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xi(n.ssContent),ssFallback:n.ssFallback&&Xi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&Lh(d,c.clone(d)),d}function Ie(n=" ",e=0){return Mt(zl,null,n,e)}function nC(n,e){const t=Mt(Ba,null,n);return t.staticCount=e,t}function Ru(n="",e=!1){return e?(We(),ZI(bs,null,n)):Mt(bs,null,n)}function Tn(n){return n==null||typeof n=="boolean"?Mt(bs):ie(n)?Mt(Ot,null,n.slice()):il(n)?fs(n):Mt(zl,null,String(n))}function fs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xi(n)}function $h(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),$h(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!F_(e)?e._ctx=Xt:i===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Xt},t=32):(e=String(e),s&64?(t=16,e=[Ie(e)]):t=8);n.children=e,n.shapeFlag|=t}function sC(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=$l([e.class,s.class]));else if(i==="style")e.style=Sh([e.style,s.style]);else if(Vl(i)){const r=e[i],o=s[i];o&&r!==o&&!(ie(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function yn(n,e,t,s=null){Nn(n,e,7,[t,s])}const iC=M_();let rC=0;function oC(n,e,t){const s=n.type,i=(e?e.appContext:n.appContext)||iC,r={uid:rC++,vnode:n,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B_(s,i),emitsOptions:G_(s,i),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:s.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zI.bind(null,r),n.ce&&n.ce(r),r}let At=null,rl,bu;{const n=Bl(),e=(t,s)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};rl=e("__VUE_INSTANCE_SETTERS__",t=>At=t),bu=e("__VUE_SSR_SETTERS__",t=>wo=t)}const Ko=n=>{const e=At;return rl(n),n.scope.on(),()=>{n.scope.off(),rl(e)}},cp=()=>{At&&At.scope.off(),rl(null)};function J_(n){return n.vnode.shapeFlag&4}let wo=!1;function aC(n,e=!1,t=!1){e&&bu(e);const{props:s,children:i}=n.vnode,r=J_(n);xI(n,s,r,e),LI(n,i,t||e);const o=r?lC(n,e):void 0;return e&&bu(!1),o}function lC(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,CI);const{setup:s}=t;if(s){Yn();const i=n.setupContext=s.length>1?uC(n):null,r=Ko(n),o=qo(s,n,0,[n.props,i]),a=e_(o);if(Xn(),r(),(a||n.sp)&&!no(n)&&P_(n),a){if(o.then(cp,cp),e)return o.then(c=>{up(n,c,e)}).catch(c=>{jl(c,n,0)});n.asyncDep=o}else up(n,o,e)}else Z_(n,e)}function up(n,e,t){he(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:$e(e)&&(n.setupState=I_(e)),Z_(n,t)}let hp;function Z_(n,e,t){const s=n.type;if(!n.render){if(!e&&hp&&!s.render){const i=s.template||Fh(n).template;if(i){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=s,u=dt(dt({isCustomElement:r,delimiters:a},o),c);s.render=hp(i,u)}}n.render=s.render||Cn}{const i=Ko(n);Yn();try{SI(n)}finally{Xn(),i()}}}const cC={get(n,e){return It(n,"get",""),n[e]}};function uC(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cC),slots:n.slots,emit:n.emit,expose:e}}function Kl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(I_(Yw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in so)return so[t](n)},has(e,t){return t in e||t in so}})):n.proxy}function hC(n,e=!0){return he(n)?n.displayName||n.name:n.name||e&&n.__name}function dC(n){return he(n)&&"__vccOpts"in n}const ln=(n,e)=>tI(n,e,wo);function ey(n,e,t){const s=arguments.length;return s===2?$e(e)&&!ie(e)?il(e)?Mt(n,null,[e]):Mt(n,e):Mt(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&il(t)&&(t=[t]),Mt(n,e,t))}const fC="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pu;const dp=typeof window<"u"&&window.trustedTypes;if(dp)try{Pu=dp.createPolicy("vue",{createHTML:n=>n})}catch{}const ty=Pu?n=>Pu.createHTML(n):n=>n,pC="http://www.w3.org/2000/svg",gC="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,fp=Bn&&Bn.createElement("template"),mC={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const i=e==="svg"?Bn.createElementNS(pC,n):e==="mathml"?Bn.createElementNS(gC,n):t?Bn.createElement(n,{is:t}):Bn.createElement(n);return n==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{fp.innerHTML=ty(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=fp.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_C=Symbol("_vtc");function yC(n,e,t){const s=n[_C];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const pp=Symbol("_vod"),vC=Symbol("_vsh"),EC=Symbol(""),TC=/(^|;)\s*display\s*:/;function wC(n,e,t){const s=n.style,i=nt(t);let r=!1;if(t&&!i){if(e)if(nt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ha(s,a,"")}else for(const o in e)t[o]==null&&Ha(s,o,"");for(const o in t)o==="display"&&(r=!0),Ha(s,o,t[o])}else if(i){if(e!==t){const o=s[EC];o&&(t+=";"+o),s.cssText=t,r=TC.test(t)}}else e&&n.removeAttribute("style");pp in n&&(n[pp]=r?s.display:"",n[vC]&&(s.display="none"))}const gp=/\s*!important$/;function Ha(n,e,t){if(ie(t))t.forEach(s=>Ha(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=IC(n,e);gp.test(t)?n.setProperty(gi(s),t.replace(gp,""),"important"):n[s]=t}}const mp=["Webkit","Moz","ms"],Gc={};function IC(n,e){const t=Gc[e];if(t)return t;let s=rn(e);if(s!=="filter"&&s in n)return Gc[e]=s;s=Ul(s);for(let i=0;i<mp.length;i++){const r=mp[i]+s;if(r in n)return Gc[e]=r}return e}const _p="http://www.w3.org/1999/xlink";function yp(n,e,t,s,i,r=bw(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(_p,e.slice(6,e.length)):n.setAttributeNS(_p,e,t):t==null||r&&!s_(t)?n.removeAttribute(e):n.setAttribute(e,r?"":kn(t)?String(t):t)}function vp(n,e,t,s,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ty(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=s_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(i||e)}function jn(n,e,t,s){n.addEventListener(e,t,s)}function CC(n,e,t,s){n.removeEventListener(e,t,s)}const Ep=Symbol("_vei");function SC(n,e,t,s,i=null){const r=n[Ep]||(n[Ep]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=AC(e);if(s){const u=r[e]=PC(s,i);jn(n,a,u,c)}else o&&(CC(n,a,o,c),r[e]=void 0)}}const Tp=/(?:Once|Passive|Capture)$/;function AC(n){let e;if(Tp.test(n)){e={};let s;for(;s=n.match(Tp);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):gi(n.slice(2)),e]}let Qc=0;const RC=Promise.resolve(),bC=()=>Qc||(RC.then(()=>Qc=0),Qc=Date.now());function PC(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Nn(kC(s,t.value),e,5,[s])};return t.value=n,t.attached=bC(),t}function kC(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,NC=(n,e,t,s,i,r)=>{const o=i==="svg";e==="class"?yC(n,s,o):e==="style"?wC(n,t,s):Vl(e)?wh(e)||SC(n,e,t,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xC(n,e,s,o))?(vp(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yp(n,e,s,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!nt(s))?vp(n,rn(e),s,r,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),yp(n,e,s,o))};function xC(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&wp(e)&&he(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wp(e)&&nt(t)?!1:e in n}const Ps=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>Va(e,t):e};function OC(n){n.target.composing=!0}function Ip(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sn=Symbol("_assign"),ol={created(n,{modifiers:{lazy:e,trim:t,number:s}},i){n[sn]=Ps(i);const r=s||i.props&&i.props.type==="number";jn(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=Ja(a)),n[sn](a)}),t&&jn(n,"change",()=>{n.value=n.value.trim()}),e||(jn(n,"compositionstart",OC),jn(n,"compositionend",Ip),jn(n,"change",Ip))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:i,number:r}},o){if(n[sn]=Ps(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ja(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||i&&n.value.trim()===c)||(n.value=c))}},DC={deep:!0,created(n,e,t){n[sn]=Ps(t),jn(n,"change",()=>{const s=n._modelValue,i=Ji(n),r=n.checked,o=n[sn];if(ie(s)){const a=Ah(s,i),c=a!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(a,1),o(u)}}else if(fr(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(ny(n,r))})},mounted:Cp,beforeUpdate(n,e,t){n[sn]=Ps(t),Cp(n,e,t)}};function Cp(n,{value:e,oldValue:t},s){n._modelValue=e;let i;if(ie(e))i=Ah(e,s.props.value)>-1;else if(fr(e))i=e.has(s.props.value);else{if(e===t)return;i=ri(e,ny(n,!0))}n.checked!==i&&(n.checked=i)}const MC={created(n,{value:e},t){n.checked=ri(e,t.props.value),n[sn]=Ps(t),jn(n,"change",()=>{n[sn](Ji(n))})},beforeUpdate(n,{value:e,oldValue:t},s){n[sn]=Ps(s),e!==t&&(n.checked=ri(e,s.props.value))}},LC={deep:!0,created(n,{value:e,modifiers:{number:t}},s){const i=fr(e);jn(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Ja(Ji(o)):Ji(o));n[sn](n.multiple?i?new Set(r):r:r[0]),n._assigning=!0,Dh(()=>{n._assigning=!1})}),n[sn]=Ps(s)},mounted(n,{value:e}){Sp(n,e)},beforeUpdate(n,e,t){n[sn]=Ps(t)},updated(n,{value:e}){n._assigning||Sp(n,e)}};function Sp(n,e){const t=n.multiple,s=ie(e);if(!(t&&!s&&!fr(e))){for(let i=0,r=n.options.length;i<r;i++){const o=n.options[i],a=Ji(o);if(t)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Ah(e,a)>-1}else o.selected=e.has(a);else if(ri(Ji(o),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ji(n){return"_value"in n?n._value:n.value}function ny(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const ku={created(n,e,t){ba(n,e,t,null,"created")},mounted(n,e,t){ba(n,e,t,null,"mounted")},beforeUpdate(n,e,t,s){ba(n,e,t,s,"beforeUpdate")},updated(n,e,t,s){ba(n,e,t,s,"updated")}};function VC(n,e){switch(n){case"SELECT":return LC;case"TEXTAREA":return ol;default:switch(e){case"checkbox":return DC;case"radio":return MC;default:return ol}}}function ba(n,e,t,s,i){const o=VC(n.tagName,t.props&&t.props.type)[i];o&&o(n,e,t,s)}const FC=dt({patchProp:NC},mC);let Ap;function UC(){return Ap||(Ap=FI(FC))}const BC=(...n)=>{const e=UC().createApp(...n),{mount:t}=e;return e.mount=s=>{const i=HC(s);if(!i)return;const r=e._component;!he(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,$C(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $C(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function HC(n){return nt(n)?document.querySelector(n):n}const Bs=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t},jC={},WC={id:"app"};function qC(n,e){const t=TI("router-view");return We(),Ke("div",WC,[Mt(t)])}const zC=Bs(jC,[["render",qC]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const bi=typeof document<"u";function sy(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function KC(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&sy(n.default)}const Ne=Object.assign;function Yc(n,e){const t={};for(const s in e){const i=e[s];t[s]=gn(i)?i.map(n):n(i)}return t}const ro=()=>{},gn=Array.isArray,iy=/#/g,GC=/&/g,QC=/\//g,YC=/=/g,XC=/\?/g,ry=/\+/g,JC=/%5B/g,ZC=/%5D/g,oy=/%5E/g,e0=/%60/g,ay=/%7B/g,t0=/%7C/g,ly=/%7D/g,n0=/%20/g;function Hh(n){return encodeURI(""+n).replace(t0,"|").replace(JC,"[").replace(ZC,"]")}function s0(n){return Hh(n).replace(ay,"{").replace(ly,"}").replace(oy,"^")}function Nu(n){return Hh(n).replace(ry,"%2B").replace(n0,"+").replace(iy,"%23").replace(GC,"%26").replace(e0,"`").replace(ay,"{").replace(ly,"}").replace(oy,"^")}function i0(n){return Nu(n).replace(YC,"%3D")}function r0(n){return Hh(n).replace(iy,"%23").replace(XC,"%3F")}function o0(n){return n==null?"":r0(n).replace(QC,"%2F")}function Io(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const a0=/\/$/,l0=n=>n.replace(a0,"");function Xc(n,e,t="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=n(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=d0(s??e,t),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Io(o)}}function c0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Rp(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function u0(n,e,t){const s=e.matched.length-1,i=t.matched.length-1;return s>-1&&s===i&&Zi(e.matched[s],t.matched[i])&&cy(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Zi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function cy(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!h0(n[t],e[t]))return!1;return!0}function h0(n,e){return gn(n)?bp(n,e):gn(e)?bp(e,n):n===e}function bp(n,e){return gn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function d0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const us={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Co;(function(n){n.pop="pop",n.push="push"})(Co||(Co={}));var oo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(oo||(oo={}));function f0(n){if(!n)if(bi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),l0(n)}const p0=/^[^#]+#/;function g0(n,e){return n.replace(p0,"#")+e}function m0(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const Gl=()=>({left:window.scrollX,top:window.scrollY});function _0(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=m0(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pp(n,e){return(history.state?history.state.position-e:-1)+n}const xu=new Map;function y0(n,e){xu.set(n,e)}function v0(n){const e=xu.get(n);return xu.delete(n),e}let E0=()=>location.protocol+"//"+location.host;function uy(n,e){const{pathname:t,search:s,hash:i}=e,r=n.indexOf("#");if(r>-1){let a=i.includes(n.slice(r))?n.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Rp(c,"")}return Rp(t,n)+s+i}function T0(n,e,t,s){let i=[],r=[],o=null;const a=({state:g})=>{const _=uy(n,location),S=t.value,k=e.value;let O=0;if(g){if(t.value=_,e.value=g,o&&o===S){o=null;return}O=k?g.position-k.position:0}else s(_);i.forEach(j=>{j(t.value,S,{delta:O,type:Co.pop,direction:O?O>0?oo.forward:oo.back:oo.unknown})})};function c(){o=t.value}function u(g){i.push(g);const _=()=>{const S=i.indexOf(g);S>-1&&i.splice(S,1)};return r.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(Ne({},g.state,{scroll:Gl()}),"")}function f(){for(const g of r)g();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function kp(n,e,t,s=!1,i=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:i?Gl():null}}function w0(n){const{history:e,location:t}=window,s={value:uy(n,t)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=n.indexOf("#"),g=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:E0()+n+c;try{e[d?"replaceState":"pushState"](u,"",g),i.value=u}catch(_){console.error(_),t[d?"replace":"assign"](g)}}function o(c,u){const d=Ne({},e.state,kp(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,d,!0),s.value=c}function a(c,u){const d=Ne({},i.value,e.state,{forward:c,scroll:Gl()});r(d.current,d,!0);const f=Ne({},kp(s.value,c,null),{position:d.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function I0(n){n=f0(n);const e=w0(n),t=T0(n,e.state,e.location,e.replace);function s(r,o=!0){o||t.pauseListeners(),history.go(r)}const i=Ne({location:"",base:n,go:s,createHref:g0.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function C0(n){return typeof n=="string"||n&&typeof n=="object"}function hy(n){return typeof n=="string"||typeof n=="symbol"}const dy=Symbol("");var Np;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Np||(Np={}));function er(n,e){return Ne(new Error,{type:n,[dy]:!0},e)}function Un(n,e){return n instanceof Error&&dy in n&&(e==null||!!(n.type&e))}const xp="[^/]+?",S0={sensitive:!1,strict:!1,start:!0,end:!0},A0=/[.+*?^${}()[\]/\\]/g;function R0(n,e){const t=Ne({},S0,e),s=[];let i=t.start?"^":"";const r=[];for(const u of n){const d=u.length?[]:[90];t.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const g=u[f];let _=40+(t.sensitive?.25:0);if(g.type===0)f||(i+="/"),i+=g.value.replace(A0,"\\$&"),_+=40;else if(g.type===1){const{value:S,repeatable:k,optional:O,regexp:j}=g;r.push({name:S,repeatable:k,optional:O});const U=j||xp;if(U!==xp){_+=10;try{new RegExp(`(${U})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+q.message)}}let $=k?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||($=O&&u.length<2?`(?:/${$})`:"/"+$),O&&($+="?"),i+=$,_+=20,O&&(_+=-8),k&&(_+=-20),U===".*"&&(_+=-50)}d.push(_)}s.push(d)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(u){const d=u.match(o),f={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",S=r[g-1];f[S.name]=_&&S.repeatable?_.split("/"):_}return f}function c(u){let d="",f=!1;for(const g of n){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:S,repeatable:k,optional:O}=_,j=S in u?u[S]:"";if(gn(j)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=gn(j)?j.join("/"):j;if(!U)if(O)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${S}"`);d+=U}}return d||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function b0(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fy(n,e){let t=0;const s=n.score,i=e.score;for(;t<s.length&&t<i.length;){const r=b0(s[t],i[t]);if(r)return r;t++}if(Math.abs(i.length-s.length)===1){if(Op(s))return 1;if(Op(i))return-1}return i.length-s.length}function Op(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const P0={type:0,value:""},k0=/[a-zA-Z0-9_]/;function N0(n){if(!n)return[[]];if(n==="/")return[[P0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(_){throw new Error(`ERR (${t})/"${u}": ${_}`)}let t=0,s=t;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,u="",d="";function f(){u&&(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):g();break;case 4:g(),t=s;break;case 1:c==="("?t=2:k0.test(c)?g():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:t=3:d+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function x0(n,e,t){const s=R0(N0(n.path),t),i=Ne(s,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function O0(n,e){const t=[],s=new Map;e=Vp({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,g,_){const S=!_,k=Mp(f);k.aliasOf=_&&_.record;const O=Vp(e,f),j=[k];if("alias"in f){const q=typeof f.alias=="string"?[f.alias]:f.alias;for(const pe of q)j.push(Mp(Ne({},k,{components:_?_.record.components:k.components,path:pe,aliasOf:_?_.record:k})))}let U,$;for(const q of j){const{path:pe}=q;if(g&&pe[0]!=="/"){const ge=g.record.path,I=ge[ge.length-1]==="/"?"":"/";q.path=g.record.path+(pe&&I+pe)}if(U=x0(q,g,O),_?_.alias.push(U):($=$||U,$!==U&&$.alias.push(U),S&&f.name&&!Lp(U)&&o(f.name)),py(U)&&c(U),k.children){const ge=k.children;for(let I=0;I<ge.length;I++)r(ge[I],U,_&&_.children[I])}_=_||U}return $?()=>{o($)}:ro}function o(f){if(hy(f)){const g=s.get(f);g&&(s.delete(f),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(f);g>-1&&(t.splice(g,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const g=L0(f,t);t.splice(g,0,f),f.record.name&&!Lp(f)&&s.set(f.record.name,f)}function u(f,g){let _,S={},k,O;if("name"in f&&f.name){if(_=s.get(f.name),!_)throw er(1,{location:f});O=_.record.name,S=Ne(Dp(g.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),f.params&&Dp(f.params,_.keys.map($=>$.name))),k=_.stringify(S)}else if(f.path!=null)k=f.path,_=t.find($=>$.re.test(k)),_&&(S=_.parse(k),O=_.record.name);else{if(_=g.name?s.get(g.name):t.find($=>$.re.test(g.path)),!_)throw er(1,{location:f,currentLocation:g});O=_.record.name,S=Ne({},g.params,f.params),k=_.stringify(S)}const j=[];let U=_;for(;U;)j.unshift(U.record),U=U.parent;return{name:O,path:k,params:S,matched:j,meta:M0(j)}}n.forEach(f=>r(f));function d(){t.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:i}}function Dp(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function Mp(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:D0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function D0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function Lp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function M0(n){return n.reduce((e,t)=>Ne(e,t.meta),{})}function Vp(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function L0(n,e){let t=0,s=e.length;for(;t!==s;){const r=t+s>>1;fy(n,e[r])<0?s=r:t=r+1}const i=V0(n);return i&&(s=e.lastIndexOf(i,s-1)),s}function V0(n){let e=n;for(;e=e.parent;)if(py(e)&&fy(n,e)===0)return e}function py({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function F0(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ry," "),o=r.indexOf("="),a=Io(o<0?r:r.slice(0,o)),c=o<0?null:Io(r.slice(o+1));if(a in e){let u=e[a];gn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Fp(n){let e="";for(let t in n){const s=n[t];if(t=i0(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(gn(s)?s.map(r=>r&&Nu(r)):[s&&Nu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function U0(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=gn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const B0=Symbol(""),Up=Symbol(""),Ql=Symbol(""),gy=Symbol(""),Ou=Symbol("");function Fr(){let n=[];function e(s){return n.push(s),()=>{const i=n.indexOf(s);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ps(n,e,t,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(er(4,{from:t,to:e})):g instanceof Error?c(g):C0(g)?c(er(2,{from:e,to:g})):(o&&s.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),a())},d=r(()=>n.call(s&&s.instances[i],e,t,u));let f=Promise.resolve(d);n.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Jc(n,e,t,s,i=r=>r()){const r=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(sy(c)){const d=(c.__vccOpts||c)[e];d&&r.push(ps(d,t,s,o,a,i))}else{let u=c();r.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=KC(d)?d.default:d;o.mods[a]=d,o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&ps(_,t,s,o,a,i)()}))}}return r}function Bp(n){const e=Sn(Ql),t=Sn(gy),s=ln(()=>{const c=Fi(n.to);return e.resolve(c)}),i=ln(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],f=t.matched;if(!d||!f.length)return-1;const g=f.findIndex(Zi.bind(null,d));if(g>-1)return g;const _=$p(c[u-2]);return u>1&&$p(d)===_&&f[f.length-1].path!==_?f.findIndex(Zi.bind(null,c[u-2])):g}),r=ln(()=>i.value>-1&&q0(t.params,s.value.params)),o=ln(()=>i.value>-1&&i.value===t.matched.length-1&&cy(t.params,s.value.params));function a(c={}){if(W0(c)){const u=e[Fi(n.replace)?"replace":"push"](Fi(n.to)).catch(ro);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:ln(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function $0(n){return n.length===1?n[0]:n}const H0=Vh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bp,setup(n,{slots:e}){const t=Wo(Bp(n)),{options:s}=Sn(Ql),i=ln(()=>({[Hp(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[Hp(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&$0(e.default(t));return n.custom?r:ey("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},r)}}}),j0=H0;function W0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function q0(n,e){for(const t in e){const s=e[t],i=n[t];if(typeof s=="string"){if(s!==i)return!1}else if(!gn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function $p(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Hp=(n,e,t)=>n??e??t,z0=Vh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Sn(Ou),i=ln(()=>n.route||s.value),r=Sn(Up,0),o=ln(()=>{let u=Fi(r);const{matched:d}=i.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),a=ln(()=>i.value.matched[o.value]);Fa(Up,ln(()=>o.value+1)),Fa(B0,a),Fa(Ou,i);const c=mt();return Ua(()=>[c.value,a.value,n.name],([u,d,f],[g,_,S])=>{d&&(d.instances[f]=u,_&&_!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Zi(d,_)||!g)&&(d.enterCallbacks[f]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=i.value,d=n.name,f=a.value,g=f&&f.components[d];if(!g)return jp(t.default,{Component:g,route:u});const _=f.props[d],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=ey(g,Ne({},S,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return jp(t.default,{Component:O,route:u})||O}}});function jp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const K0=z0;function G0(n){const e=O0(n.routes,n),t=n.parseQuery||F0,s=n.stringifyQuery||Fp,i=n.history,r=Fr(),o=Fr(),a=Fr(),c=Xw(us);let u=us;bi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Yc.bind(null,M=>""+M),f=Yc.bind(null,o0),g=Yc.bind(null,Io);function _(M,J){let X,ee;return hy(M)?(X=e.getRecordMatcher(M),ee=J):ee=M,e.addRoute(ee,X)}function S(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(M=>M.record)}function O(M){return!!e.getRecordMatcher(M)}function j(M,J){if(J=Ne({},J||c.value),typeof M=="string"){const E=Xc(t,M,J.path),P=e.resolve({path:E.path},J),V=i.createHref(E.fullPath);return Ne(E,P,{params:g(P.params),hash:Io(E.hash),redirectedFrom:void 0,href:V})}let X;if(M.path!=null)X=Ne({},M,{path:Xc(t,M.path,J.path).path});else{const E=Ne({},M.params);for(const P in E)E[P]==null&&delete E[P];X=Ne({},M,{params:f(E)}),J.params=f(J.params)}const ee=e.resolve(X,J),we=M.hash||"";ee.params=d(g(ee.params));const De=c0(s,Ne({},M,{hash:s0(we),path:ee.path})),y=i.createHref(De);return Ne({fullPath:De,hash:we,query:s===Fp?U0(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:y})}function U(M){return typeof M=="string"?Xc(t,M,c.value.path):Ne({},M)}function $(M,J){if(u!==M)return er(8,{from:J,to:M})}function q(M){return I(M)}function pe(M){return q(Ne(U(M),{replace:!0}))}function ge(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:X}=J;let ee=typeof X=="function"?X(M):X;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),Ne({query:M.query,hash:M.hash,params:ee.path!=null?{}:M.params},ee)}}function I(M,J){const X=u=j(M),ee=c.value,we=M.state,De=M.force,y=M.replace===!0,E=ge(X);if(E)return I(Ne(U(E),{state:typeof E=="object"?Ne({},we,E.state):we,force:De,replace:y}),J||X);const P=X;P.redirectedFrom=J;let V;return!De&&u0(s,ee,X)&&(V=er(16,{to:P,from:ee}),en(ee,ee,!0,!1)),(V?Promise.resolve(V):C(P,ee)).catch(D=>Un(D)?Un(D,2)?D:on(D):Te(D,P,ee)).then(D=>{if(D){if(Un(D,2))return I(Ne({replace:y},U(D.to),{state:typeof D.to=="object"?Ne({},we,D.to.state):we,force:De}),J||P)}else D=b(P,ee,!0,y,we);return A(P,ee,D),D})}function v(M,J){const X=$(M,J);return X?Promise.reject(X):Promise.resolve()}function w(M){const J=rs.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function C(M,J){let X;const[ee,we,De]=Q0(M,J);X=Jc(ee.reverse(),"beforeRouteLeave",M,J);for(const E of ee)E.leaveGuards.forEach(P=>{X.push(ps(P,M,J))});const y=v.bind(null,M,J);return X.push(y),Ft(X).then(()=>{X=[];for(const E of r.list())X.push(ps(E,M,J));return X.push(y),Ft(X)}).then(()=>{X=Jc(we,"beforeRouteUpdate",M,J);for(const E of we)E.updateGuards.forEach(P=>{X.push(ps(P,M,J))});return X.push(y),Ft(X)}).then(()=>{X=[];for(const E of De)if(E.beforeEnter)if(gn(E.beforeEnter))for(const P of E.beforeEnter)X.push(ps(P,M,J));else X.push(ps(E.beforeEnter,M,J));return X.push(y),Ft(X)}).then(()=>(M.matched.forEach(E=>E.enterCallbacks={}),X=Jc(De,"beforeRouteEnter",M,J,w),X.push(y),Ft(X))).then(()=>{X=[];for(const E of o.list())X.push(ps(E,M,J));return X.push(y),Ft(X)}).catch(E=>Un(E,8)?E:Promise.reject(E))}function A(M,J,X){a.list().forEach(ee=>w(()=>ee(M,J,X)))}function b(M,J,X,ee,we){const De=$(M,J);if(De)return De;const y=J===us,E=bi?history.state:{};X&&(ee||y?i.replace(M.fullPath,Ne({scroll:y&&E&&E.scroll},we)):i.push(M.fullPath,we)),c.value=M,en(M,J,X,y),on()}let T;function Pt(){T||(T=i.listen((M,J,X)=>{if(!_n.listening)return;const ee=j(M),we=ge(ee);if(we){I(Ne(we,{replace:!0,force:!0}),ee).catch(ro);return}u=ee;const De=c.value;bi&&y0(Pp(De.fullPath,X.delta),Gl()),C(ee,De).catch(y=>Un(y,12)?y:Un(y,2)?(I(Ne(U(y.to),{force:!0}),ee).then(E=>{Un(E,20)&&!X.delta&&X.type===Co.pop&&i.go(-1,!1)}).catch(ro),Promise.reject()):(X.delta&&i.go(-X.delta,!1),Te(y,ee,De))).then(y=>{y=y||b(ee,De,!1),y&&(X.delta&&!Un(y,8)?i.go(-X.delta,!1):X.type===Co.pop&&Un(y,20)&&i.go(-1,!1)),A(ee,De,y)}).catch(ro)}))}let Zt=Fr(),et=Fr(),Ce;function Te(M,J,X){on(M);const ee=et.list();return ee.length?ee.forEach(we=>we(M,J,X)):console.error(M),Promise.reject(M)}function qt(){return Ce&&c.value!==us?Promise.resolve():new Promise((M,J)=>{Zt.add([M,J])})}function on(M){return Ce||(Ce=!M,Pt(),Zt.list().forEach(([J,X])=>M?X(M):J()),Zt.reset()),M}function en(M,J,X,ee){const{scrollBehavior:we}=n;if(!bi||!we)return Promise.resolve();const De=!X&&v0(Pp(M.fullPath,0))||(ee||!X)&&history.state&&history.state.scroll||null;return Dh().then(()=>we(M,J,De)).then(y=>y&&_0(y)).catch(y=>Te(y,M,J))}const qe=M=>i.go(M);let ze;const rs=new Set,_n={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:j,options:n,push:q,replace:pe,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:et.add,isReady:qt,install(M){const J=this;M.component("RouterLink",j0),M.component("RouterView",K0),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Fi(c)}),bi&&!ze&&c.value===us&&(ze=!0,q(i.location).catch(we=>{}));const X={};for(const we in us)Object.defineProperty(X,we,{get:()=>c.value[we],enumerable:!0});M.provide(Ql,J),M.provide(gy,E_(X)),M.provide(Ou,c);const ee=M.unmount;rs.add(M),M.unmount=function(){rs.delete(M),rs.size<1&&(u=us,T&&T(),T=null,c.value=us,ze=!1,Ce=!1),ee()}}};function Ft(M){return M.reduce((J,X)=>J.then(()=>w(X)),Promise.resolve())}return _n}function Q0(n,e){const t=[],s=[],i=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(u=>Zi(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>Zi(u,c))||i.push(c))}return[t,s,i]}function Yl(){return Sn(Ql)}const Y0=()=>{};var Wp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(n,e){if(!n)throw pr(e)},pr=function(n){return new Error("Firebase Database ("+my.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},X0=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let g=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),s.push(t[d],t[f],t[g],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_y(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):X0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw new J0;const g=r<<2|a>>4;if(s.push(g),u!==64){const _=a<<4&240|u>>2;if(s.push(_),f!==64){const S=u<<6&192|f;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class J0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yy=function(n){const e=_y(n);return jh.encodeByteArray(e,!0)},al=function(n){return yy(n).replace(/\./g,"")},ll=function(n){try{return jh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(n){return vy(void 0,n)}function vy(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!eS(t)||(n[t]=vy(n[t],e[t]));return n}function eS(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=()=>tS().__FIREBASE_DEFAULTS__,sS=()=>{if(typeof process>"u"||typeof Wp>"u")return;const n=Wp.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ll(n[1]);return e&&JSON.parse(e)},Xl=()=>{try{return Y0()||nS()||sS()||iS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ey=n=>{var e,t;return(t=(e=Xl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rS=n=>{const e=Ey(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ty=()=>{var n;return(n=Xl())===null||n===void 0?void 0:n.config},wy=n=>{var e;return(e=Xl())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n){return n.endsWith(".cloudworkstations.dev")}async function Iy(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[al(JSON.stringify(t)),al(JSON.stringify(o)),""].join(".")}const ao={};function aS(){const n={prod:[],emulator:[]};for(const e of Object.keys(ao))ao[e]?n.emulator.push(e):n.prod.push(e);return n}function lS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let qp=!1;function Cy(n,e){if(typeof window>"u"||typeof document>"u"||!mi(window.location.host)||ao[n]===e||ao[n]||qp)return;ao[n]=e;function t(g){return`__firebase__banner__${g}`}const s="__firebase__banner",r=aS().prod.length>0;function o(){const g=document.getElementById(s);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{qp=!0,o()},g}function d(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function f(){const g=lS(s),_=t("text"),S=document.getElementById(_)||document.createElement("span"),k=t("learnmore"),O=document.getElementById(k)||document.createElement("a"),j=t("preprendIcon"),U=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const $=g.element;a($),d(O,k);const q=u();c(U,j),$.append(U,S,O,q),document.body.appendChild($)}r?(S.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function cS(){var n;const e=(n=Xl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dS(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ay(){return my.NODE_ADMIN===!0}function fS(){return!cS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pS(){try{return typeof indexedDB=="object"}catch{return!1}}function gS(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="FirebaseError";class ss extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=mS,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?_S(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ss(i,a,s)}}function _S(n,e){return n.replace(yS,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(n){return JSON.parse(n)}function rt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=So(ll(r[0])||""),t=So(ll(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},vS=function(n){const e=Ry(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ES=function(n){const e=Ry(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Du(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cl(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function oi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(zp(r)&&zp(o)){if(!oi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function zp(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function qr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function zr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),d=1518500249):(u=r^o^a,d=1859775393):f<60?(u=r&o|a&(r|o),d=2400959708):(u=r^o^a,d=3395469782);const g=(i<<5|i>>>27)+u+c+d+s[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wS(n,e){const t=new IS(n,e);return t.subscribe.bind(t)}class IS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");CS(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Zc),i.error===void 0&&(i.error=Zc),i.complete===void 0&&(i.complete=Zc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zc(){}function qh(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,H(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Zl=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){return n&&n._delegate?n._delegate:n}class ks{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Jl;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bS(e))try{this.getOrInitializeService({instanceIdentifier:Ys})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ys){return this.instances.has(e)}getOptions(e=Ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:RS(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ys){return this.component?this.component.multipleInstances?e:Ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RS(n){return n===Ys?void 0:n}function bS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new AS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ve||(ve={}));const kS={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},NS=ve.INFO,xS={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},OS=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=xS[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=NS,this._logHandler=OS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const DS=(n,e)=>e.some(t=>n instanceof t);let Kp,Gp;function MS(){return Kp||(Kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LS(){return Gp||(Gp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const by=new WeakMap,Mu=new WeakMap,Py=new WeakMap,eu=new WeakMap,zh=new WeakMap;function VS(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ws(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&by.set(t,n)}).catch(()=>{}),zh.set(e,n),e}function FS(n){if(Mu.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Mu.set(n,e)}let Lu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Py.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ws(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function US(n){Lu=n(Lu)}function BS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(tu(this),e,...t);return Py.set(s,e.sort?e.sort():[e]),ws(s)}:LS().includes(n)?function(...e){return n.apply(tu(this),e),ws(by.get(this))}:function(...e){return ws(n.apply(tu(this),e))}}function $S(n){return typeof n=="function"?BS(n):(n instanceof IDBTransaction&&FS(n),DS(n,MS())?new Proxy(n,Lu):n)}function ws(n){if(n instanceof IDBRequest)return VS(n);if(eu.has(n))return eu.get(n);const e=$S(n);return e!==n&&(eu.set(n,e),zh.set(e,n)),e}const tu=n=>zh.get(n);function HS(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jS=["get","getKey","getAll","getAllKeys","count"],WS=["put","add","delete","clear"],nu=new Map;function Qp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=WS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jS.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return nu.set(e,r),r}US(n=>({...n,get:(e,t,s)=>Qp(e,t)||n.get(e,t,s),has:(e,t)=>!!Qp(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function zS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vu="@firebase/app",Yp="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new ec("@firebase/app"),KS="@firebase/app-compat",GS="@firebase/analytics-compat",QS="@firebase/analytics",YS="@firebase/app-check-compat",XS="@firebase/app-check",JS="@firebase/auth",ZS="@firebase/auth-compat",eA="@firebase/database",tA="@firebase/data-connect",nA="@firebase/database-compat",sA="@firebase/functions",iA="@firebase/functions-compat",rA="@firebase/installations",oA="@firebase/installations-compat",aA="@firebase/messaging",lA="@firebase/messaging-compat",cA="@firebase/performance",uA="@firebase/performance-compat",hA="@firebase/remote-config",dA="@firebase/remote-config-compat",fA="@firebase/storage",pA="@firebase/storage-compat",gA="@firebase/firestore",mA="@firebase/ai",_A="@firebase/firestore-compat",yA="firebase",vA="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="[DEFAULT]",EA={[Vu]:"fire-core",[KS]:"fire-core-compat",[QS]:"fire-analytics",[GS]:"fire-analytics-compat",[XS]:"fire-app-check",[YS]:"fire-app-check-compat",[JS]:"fire-auth",[ZS]:"fire-auth-compat",[eA]:"fire-rtdb",[tA]:"fire-data-connect",[nA]:"fire-rtdb-compat",[sA]:"fire-fn",[iA]:"fire-fn-compat",[rA]:"fire-iid",[oA]:"fire-iid-compat",[aA]:"fire-fcm",[lA]:"fire-fcm-compat",[cA]:"fire-perf",[uA]:"fire-perf-compat",[hA]:"fire-rc",[dA]:"fire-rc-compat",[fA]:"fire-gcs",[pA]:"fire-gcs-compat",[gA]:"fire-fst",[_A]:"fire-fst-compat",[mA]:"fire-vertex","fire-js":"fire-js",[yA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map,TA=new Map,Uu=new Map;function Xp(n,e){try{n.container.addComponent(e)}catch(t){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ai(n){const e=n.name;if(Uu.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;Uu.set(e,n);for(const t of ul.values())Xp(t,n);for(const t of TA.values())Xp(t,n);return!0}function Kh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Yt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Is=new Go("app","Firebase",wA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=vA;function ky(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fu,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw Is.create("bad-app-name",{appName:String(i)});if(t||(t=Ty()),!t)throw Is.create("no-options");const r=ul.get(i);if(r){if(oi(t,r.options)&&oi(s,r.config))return r;throw Is.create("duplicate-app",{appName:i})}const o=new PS(i);for(const c of Uu.values())o.addComponent(c);const a=new IA(t,s,o);return ul.set(i,a),a}function Ny(n=Fu){const e=ul.get(n);if(!e&&n===Fu&&Ty())return ky();if(!e)throw Is.create("no-app",{appName:n});return e}function An(n,e,t){var s;let i=(s=EA[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(a.join(" "));return}ai(new ks(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="firebase-heartbeat-database",SA=1,Ao="firebase-heartbeat-store";let su=null;function xy(){return su||(su=HS(CA,SA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ao)}catch(t){console.warn(t)}}}}).catch(n=>{throw Is.create("idb-open",{originalErrorMessage:n.message})})),su}async function AA(n){try{const t=(await xy()).transaction(Ao),s=await t.objectStore(Ao).get(Oy(n));return await t.done,s}catch(e){if(e instanceof ss)Jn.warn(e.message);else{const t=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(t.message)}}}async function Jp(n,e){try{const s=(await xy()).transaction(Ao,"readwrite");await s.objectStore(Ao).put(e,Oy(n)),await s.done}catch(t){if(t instanceof ss)Jn.warn(t.message);else{const s=Is.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jn.warn(s.message)}}}function Oy(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1024,bA=30;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NA(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>bA){const o=xA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Jn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zp(),{heartbeatsToSend:s,unsentEntries:i}=kA(this._heartbeatsCache.heartbeats),r=al(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Jn.warn(t),""}}}function Zp(){return new Date().toISOString().substring(0,10)}function kA(n,e=RA){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),eg(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),eg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class NA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pS()?gS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await AA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function eg(n){return al(JSON.stringify({version:2,heartbeats:n})).length}function xA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(n){ai(new ks("platform-logger",e=>new qS(e),"PRIVATE")),ai(new ks("heartbeat",e=>new PA(e),"PRIVATE")),An(Vu,Yp,n),An(Vu,Yp,"esm2017"),An("fire-js","")}OA("");var DA="firebase",MA="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(DA,MA,"app");function Gh(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LA=Dy,My=new Go("auth","Firebase",Dy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new ec("@firebase/auth");function VA(n,...e){hl.logLevel<=ve.WARN&&hl.warn(`Auth (${_i}): ${n}`,...e)}function ja(n,...e){hl.logLevel<=ve.ERROR&&hl.error(`Auth (${_i}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n,...e){throw Qh(n,...e)}function Rn(n,...e){return Qh(n,...e)}function Ly(n,e,t){const s=Object.assign(Object.assign({},LA()),{[e]:t});return new Go("auth","Firebase",s).create(e,{appName:n.name})}function Kn(n){return Ly(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return My.create(n,...e)}function ae(n,e,...t){if(!n)throw Qh(e,...t)}function Wn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ja(e),new Error(e)}function Zn(n,e){n||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function FA(){return tg()==="http:"||tg()==="https:"}function tg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FA()||hS()||"connection"in navigator)?navigator.onLine:!0}function BA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zn(t>e,"Short delay should be less than long delay!"),this.isMobile=Wh()||Sy()}get(){return UA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n,e){Zn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jA=new Qo(3e4,6e4);function $s(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Hs(n,e,t,s,i={}){return Fy(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=gr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},r);return uS()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&mi(n.emulatorConfig.host)&&(u.credentials="include"),Vy.fetch()(await Uy(n,n.config.apiHost,t,a),u)})}async function Fy(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},$A),e);try{const i=new qA(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pa(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pa(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ly(n,d,u);mn(n,d)}}catch(i){if(i instanceof ss)throw i;mn(n,"network-request-failed",{message:String(i)})}}async function Yo(n,e,t,s,i={}){const r=await Hs(n,e,t,s,i);return"mfaPendingCredential"in r&&mn(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Uy(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?Yh(n.config,i):`${n.config.apiScheme}://${i}`;return HA.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function WA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Rn(this.auth,"network-request-failed")),jA.get())})}}function Pa(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Rn(n,e,s);return i.customData._tokenResponse=t,i}function ng(n){return n!==void 0&&n.enterprise!==void 0}class zA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return WA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KA(n,e){return Hs(n,"GET","/v2/recaptchaConfig",$s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(n,e){return Hs(n,"POST","/v1/accounts:delete",e)}async function dl(n,e){return Hs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QA(n,e=!1){const t=Vt(n),s=await t.getIdToken(e),i=Xh(s);ae(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:lo(iu(i.auth_time)),issuedAtTime:lo(iu(i.iat)),expirationTime:lo(iu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function iu(n){return Number(n)*1e3}function Xh(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=ll(t);return i?JSON.parse(i):(ja("Failed to decode base64 JWT payload"),null)}catch(i){return ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sg(n){const e=Xh(n);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ss&&YA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function YA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Ro(n,dl(t,{idToken:s}));ae(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?By(r.providerUserInfo):[],a=ZA(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new $u(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function JA(n){const e=Vt(n);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZA(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function By(n){return n.map(e=>{var{providerId:t}=e,s=Gh(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(n,e){const t=await Fy(n,{},async()=>{const s=gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await Uy(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&mi(n.emulatorConfig.host)&&(c.credentials="include"),Vy.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tR(n,e){return Hs(n,"POST","/v2/accounts:revokeToken",$s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await eR(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new $i;return s&&(ae(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ae(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n,e){ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Gh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $u(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return QA(this,e)}reload(){return JA(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await fl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await Ro(this,GA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,u,d;const f=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,_=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(a=t.tenantId)!==null&&a!==void 0?a:void 0,O=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,j=(u=t.createdAt)!==null&&u!==void 0?u:void 0,U=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:q,isAnonymous:pe,providerData:ge,stsTokenManager:I}=t;ae($&&I,e,"internal-error");const v=$i.fromJSON(this.name,I);ae(typeof $=="string",e,"internal-error"),hs(f,e.name),hs(g,e.name),ae(typeof q=="boolean",e,"internal-error"),ae(typeof pe=="boolean",e,"internal-error"),hs(_,e.name),hs(S,e.name),hs(k,e.name),hs(O,e.name),hs(j,e.name),hs(U,e.name);const w=new un({uid:$,auth:e,email:g,emailVerified:q,displayName:f,isAnonymous:pe,photoURL:S,phoneNumber:_,tenantId:k,stsTokenManager:v,createdAt:j,lastLoginAt:U});return ge&&Array.isArray(ge)&&(w.providerData=ge.map(C=>Object.assign({},C))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,t,s=!1){const i=new $i;i.updateFromServerResponse(t);const r=new un({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await fl(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];ae(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?By(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new $i;a.updateFromIdToken(s);const c=new un({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new $u(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;function qn(n){Zn(n instanceof Function,"Expected a class definition");let e=ig.get(n);return e?(Zn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ig.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$y.type="NONE";const rg=$y;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n,e,t){return`firebase:${n}:${e}:${t}`}class Hi{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Wa(this.userKey,i.apiKey,r),this.fullPersistenceKey=Wa("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await dl(this.auth,{idToken:e}).catch(()=>{});return t?un._fromGetAccountInfoResponse(this.auth,t,e):null}return un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Hi(qn(rg),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||qn(rg);const o=Wa(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const g=await dl(e,{idToken:d}).catch(()=>{});if(!g)break;f=await un._fromGetAccountInfoResponse(e,g,d)}else f=un._fromJSON(e,d);u!==r&&(a=f),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Hi(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Hi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ky(e))return"Blackberry";if(Gy(e))return"Webos";if(jy(e))return"Safari";if((e.includes("chrome/")||Wy(e))&&!e.includes("edge/"))return"Chrome";if(zy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hy(n=bt()){return/firefox\//i.test(n)}function jy(n=bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wy(n=bt()){return/crios\//i.test(n)}function qy(n=bt()){return/iemobile/i.test(n)}function zy(n=bt()){return/android/i.test(n)}function Ky(n=bt()){return/blackberry/i.test(n)}function Gy(n=bt()){return/webos/i.test(n)}function Jh(n=bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nR(n=bt()){var e;return Jh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sR(){return dS()&&document.documentMode===10}function Qy(n=bt()){return Jh(n)||zy(n)||Gy(n)||Ky(n)||/windows phone/i.test(n)||qy(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n,e=[]){let t;switch(n){case"Browser":t=og(bt());break;case"Worker":t=`${og(bt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_i}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(n,e={}){return Hs(n,"GET","/v2/passwordPolicy",$s(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=6;class aR{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:oR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new iR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=My,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qn(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dl(this,{idToken:e}),s=await un._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(Kn(this));const t=e?Vt(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rR(this),t=new aR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await tR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qn(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[qn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&VA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yi(n){return Vt(n)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=wS(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cR(n){tc=n}function Xy(n){return tc.loadJS(n)}function uR(){return tc.recaptchaEnterpriseScript}function hR(){return tc.gapiScript}function dR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class fR{constructor(){this.enterprise=new pR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class pR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gR="recaptcha-enterprise",Jy="NO_RECAPTCHA";class mR{constructor(e){this.type=gR,this.auth=yi(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{KA(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zA(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;ng(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Jy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fR().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&ng(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=uR();c.length!==0&&(c+=a),Xy(c).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ur(n,e,t,s=!1,i=!1){const r=new mR(n);let o;if(i)o=Jy;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hu(n,e,t,s,i){var r,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ur(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ur(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Ur(n,e,t);return s(n,a).catch(async c=>{var u;if(((u=n._getRecaptchaConfig())===null||u===void 0?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const d=await Ur(n,e,t,!1,!0);return s(n,d)}return Promise.reject(c)})}else{const a=await Ur(n,e,t,!1,!0);return s(n,a)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(n,e){const t=Kh(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(oi(r,e??{}))return i;mn(i,"already-initialized")}return t.initialize({options:e})}function yR(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(qn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function vR(n,e,t){const s=yi(n);ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=Zy(e),{host:o,port:a}=ER(e),c=a===null?"":`:${a}`,u={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ae(oi(u,s.config.emulator)&&oi(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,mi(o)?(Iy(`${r}//${o}${c}`),Cy("Auth",!0)):i||TR()}function Zy(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ER(n){const e=Zy(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:lg(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:lg(o)}}}function lg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function TR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,t){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function wR(n,e){return Hs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(n,e){return Yo(n,"POST","/v1/accounts:signInWithPassword",$s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(n,e){return Yo(n,"POST","/v1/accounts:signInWithEmailLink",$s(n,e))}async function SR(n,e){return Yo(n,"POST","/v1/accounts:signInWithEmailLink",$s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Zh{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new bo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new bo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hu(e,t,"signInWithPassword",IR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return CR(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hu(e,s,"signUpPassword",wR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return SR(e,{idToken:t,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(n,e){return Yo(n,"POST","/v1/accounts:signInWithIdp",$s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="http://localhost";class li extends Zh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Gh(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new li(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ji(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ji(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ji(e,t)}buildRequest(){const e={requestUri:AR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bR(n){const e=qr(zr(n)).link,t=e?qr(zr(e)).deep_link_id:null,s=qr(zr(n)).deep_link_id;return(s?qr(zr(s)).link:null)||s||t||e||n}class ed{constructor(e){var t,s,i,r,o,a;const c=qr(zr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,f=RR((i=c.mode)!==null&&i!==void 0?i:null);ae(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=bR(e);try{return new ed(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.providerId=mr.PROVIDER_ID}static credential(e,t){return bo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ed.parseLink(t);return ae(s,"argument-error"),bo._fromEmailAndCode(e,s.code,s.tenantId)}}mr.PROVIDER_ID="password";mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Xo{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.FACEBOOK_SIGN_IN_METHOD="facebook.com";gs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return li._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ms.credential(t,s)}catch{return null}}}ms.GOOGLE_SIGN_IN_METHOD="google.com";ms.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Xo{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.GITHUB_SIGN_IN_METHOD="github.com";_s.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Xo{constructor(){super("twitter.com")}static credential(e,t){return li._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ys.credential(t,s)}catch{return null}}}ys.TWITTER_SIGN_IN_METHOD="twitter.com";ys.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(n,e){return Yo(n,"POST","/v1/accounts:signUp",$s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await un._fromIdTokenResponse(e,s,i),o=cg(s);return new ci({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=cg(s);return new ci({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function cg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends ss{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new pl(e,t,s,i)}}function tv(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(n,r,e,s):r})}async function kR(n,e,t=!1){const s=await Ro(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ci._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(n,e,t=!1){const{auth:s}=n;if(Yt(s.app))return Promise.reject(Kn(s));const i="reauthenticate";try{const r=await Ro(n,tv(s,i,e,n),t);ae(r.idToken,s,"internal-error");const o=Xh(r.idToken);ae(o,s,"internal-error");const{sub:a}=o;return ae(n.uid===a,s,"user-mismatch"),ci._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&mn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(n,e,t=!1){if(Yt(n.app))return Promise.reject(Kn(n));const s="signIn",i=await tv(n,s,e),r=await ci._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function xR(n,e){return nv(yi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n){const e=yi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OR(n,e,t){if(Yt(n.app))return Promise.reject(Kn(n));const s=yi(n),o=await Hu(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",PR,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&sv(n),c}),a=await ci._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function DR(n,e,t){return Yt(n.app)?Promise.reject(Kn(n)):xR(Vt(n),mr.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&sv(n),s})}function MR(n,e,t,s){return Vt(n).onIdTokenChanged(e,t,s)}function LR(n,e,t){return Vt(n).beforeAuthStateChanged(e,t)}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=1e3,FR=10;class rv extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);sR()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FR):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},VR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rv.type="LOCAL";const UR=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ov.type="SESSION";const av=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new nc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,r)),c=await BR(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=td("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function HR(n){bn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function jR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qR(){return lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="firebaseLocalStorageDb",zR=1,ml="firebaseLocalStorage",uv="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sc(n,e){return n.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function KR(){const n=indexedDB.deleteDatabase(cv);return new Jo(n).toPromise()}function ju(){const n=indexedDB.open(cv,zR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ml,{keyPath:uv})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ml)?e(s):(s.close(),await KR(),e(await ju()))})})}async function ug(n,e,t){const s=sc(n,!0).put({[uv]:e,value:t});return new Jo(s).toPromise()}async function GR(n,e){const t=sc(n,!1).get(e),s=await new Jo(t).toPromise();return s===void 0?null:s.value}function hg(n,e){const t=sc(n,!0).delete(e);return new Jo(t).toPromise()}const QR=800,YR=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ju(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>YR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(qR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jR(),!this.activeServiceWorker)return;this.sender=new $R(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ju();return await ug(e,gl,"1"),await hg(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ug(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>GR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=sc(i,!1).getAll();return new Jo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const XR=hv;new Qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(n,e){return e?qn(e):(ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends Zh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ji(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ZR(n){return nv(n.auth,new nd(n),n.bypassAuthState)}function eb(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),NR(t,new nd(n),n.bypassAuthState)}async function tb(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),kR(t,new nd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZR;case"linkViaPopup":case"linkViaRedirect":return tb;case"reauthViaPopup":case"reauthViaRedirect":return eb;default:mn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new Qo(2e3,1e4);class Oi extends dv{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nb.get())};e()}}Oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="pendingRedirect",qa=new Map;class ib extends dv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const s=await rb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rb(n,e){const t=lb(e),s=ab(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function ob(n,e){qa.set(n._key(),e)}function ab(n){return qn(n._redirectPersistence)}function lb(n){return Wa(sb,n.config.apiKey,n.name)}async function cb(n,e,t=!1){if(Yt(n.app))return Promise.reject(Kn(n));const s=yi(n),i=JR(s,e),o=await new ib(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=10*60*1e3;class hb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!db(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!fv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Rn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ub&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function db(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(n,e={}){return Hs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gb=/^https?/;async function mb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fb(n);for(const t of e)try{if(_b(t))return}catch{}mn(n,"unauthorized-domain")}function _b(n){const e=Bu(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!gb.test(t))return!1;if(pb.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new Qo(3e4,6e4);function fg(){const n=bn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vb(n){return new Promise((e,t)=>{var s,i,r;function o(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),t(Rn(n,"network-request-failed"))},timeout:yb.get()})}if(!((i=(s=bn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=bn().gapi)===null||r===void 0)&&r.load)o();else{const a=dR("iframefcb");return bn()[a]=()=>{gapi.load?o():t(Rn(n,"network-request-failed"))},Xy(`${hR()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw za=null,e})}let za=null;function Eb(n){return za=za||vb(n),za}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=new Qo(5e3,15e3),wb="__/auth/iframe",Ib="emulator/auth/iframe",Cb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ab(n){const e=n.config;ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yh(e,Ib):`https://${n.config.authDomain}/${wb}`,s={apiKey:e.apiKey,appName:n.name,v:_i},i=Sb.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${gr(s).slice(1)}`}async function Rb(n){const e=await Eb(n),t=bn().gapi;return ae(t,n,"internal-error"),e.open({where:document.body,url:Ab(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Rn(n,"network-request-failed"),a=bn().setTimeout(()=>{r(o)},Tb.get());function c(){bn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pb=500,kb=600,Nb="_blank",xb="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ob(n,e,t,s=Pb,i=kb){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bb),{width:s.toString(),height:i.toString(),top:r,left:o}),u=bt().toLowerCase();t&&(a=Wy(u)?Nb:t),Hy(u)&&(e=e||xb,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if(nR(u)&&a!=="_self")return Db(e||"",a),new pg(null);const f=window.open(e||"",a,d);ae(f,n,"popup-blocked");try{f.focus()}catch{}return new pg(f)}function Db(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb="__/auth/handler",Lb="emulator/auth/handler",Vb=encodeURIComponent("fac");async function gg(n,e,t,s,i,r){ae(n.config.authDomain,n,"auth-domain-config-required"),ae(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:_i,eventId:i};if(e instanceof ev){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(r||{}))o[d]=f}if(e instanceof Xo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),u=c?`#${Vb}=${encodeURIComponent(c)}`:"";return`${Fb(n)}?${gr(a).slice(1)}${u}`}function Fb({config:n}){return n.emulator?Yh(n,Lb):`https://${n.authDomain}/${Mb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="webStorageSupport";class Ub{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=cb,this._overrideRedirectResult=ob}async _openPopup(e,t,s,i){var r;Zn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await gg(e,t,s,Bu(),i);return Ob(e,o,td())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await gg(e,t,s,Bu(),i);return HR(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Zn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Rb(e),s=new hb(e);return t.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ru,{type:ru},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ru];o!==void 0&&t(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qy()||jy()||Jh()}}const Bb=Ub;var mg="@firebase/auth",_g="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jb(n){ai(new ks("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(n)},u=new lR(s,i,r,c);return yR(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ai(new ks("auth-internal",e=>{const t=yi(e.getProvider("auth").getImmediate());return(s=>new $b(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(mg,_g,Hb(n)),An(mg,_g,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=5*60,qb=wy("authIdTokenMaxAge")||Wb;let yg=null;const zb=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>qb)return;const i=t==null?void 0:t.token;yg!==i&&(yg=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pv(n=Ny()){const e=Kh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_R(n,{popupRedirectResolver:Bb,persistence:[XR,UR,av]}),s=wy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=zb(r.toString());LR(t,o,()=>o(t.currentUser)),MR(t,a=>o(a))}}const i=Ey("auth");return i&&vR(t,`http://${i}`),t}function Kb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cR({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Rn("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Kb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jb("Browser");var vg={};const Eg="@firebase/database",Tg="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gv="";function Gb(n){gv=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:So(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return is(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qb(e)}}catch{}return new Yb},Js=mv("localStorage"),Wu=mv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new ec("@firebase/database"),Xb=function(){let n=1;return function(){return n++}}(),_v=function(n){const e=SS(n),t=new TS;t.update(e);const s=t.digest();return jh.encodeByteArray(s)},Zo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zo.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let ni=null,wg=!0;const Jb=function(n,e){H(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Wi.logLevel=ve.VERBOSE,ni=Wi.log.bind(Wi),e&&Wu.set("logging_enabled",!0)):typeof n=="function"?ni=n:(ni=null,Wu.remove("logging_enabled"))},Ct=function(...n){if(wg===!0&&(wg=!1,ni===null&&Wu.get("logging_enabled")===!0&&Jb(!0)),ni){const e=Zo.apply(null,n);ni(e)}},ea=function(n){return function(...e){Ct(n,...e)}},qu=function(...n){const e="FIREBASE INTERNAL ERROR: "+Zo(...n);Wi.error(e)},es=function(...n){const e=`FIREBASE FATAL ERROR: ${Zo(...n)}`;throw Wi.error(e),new Error(e)},Ht=function(...n){const e="FIREBASE WARNING: "+Zo(...n);Wi.warn(e)},Zb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},eP=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},nr="[MIN_NAME]",ui="[MAX_NAME]",_r=function(n,e){if(n===e)return 0;if(n===nr||e===ui)return-1;if(e===nr||n===ui)return 1;{const t=Ig(n),s=Ig(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},tP=function(n,e){return n===e?0:n<e?-1:1},Br=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+rt(e))},sd=function(n){if(typeof n!="object"||n===null)return rt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=rt(e[s]),t+=":",t+=sd(n[e[s]]);return t+="}",t},vv=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Wt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ev=function(n){H(!yv(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const d=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(d.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},nP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iP(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const rP=new RegExp("^-?(0*)\\d{1,10}$"),oP=-2147483648,aP=2147483647,Ig=function(n){if(rP.test(n)){const e=Number(n);if(e>=oP&&e<=aP)return e}return null},yr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ht("Exception was thrown by user callback.",t),e},Math.floor(0))}},lP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},co=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Yt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ht(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ht(e)}}class qi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="5",Tv="v",wv="s",Iv="r",Cv="f",Sv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Av="ls",Rv="p",zu="ac",bv="websocket",Pv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,u=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Js.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Js.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hP(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Nv(n,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let s;if(e===bv)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Pv)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hP(n)&&(t.ns=n.namespace);const i=[];return Wt(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.counters_={}}incrementCounter(e,t=1){is(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Z0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={},au={};function rd(n){const e=n.toString();return ou[e]||(ou[e]=new dP),ou[e]}function fP(n,e){const t=n.toString();return au[t]||(au[t]=e()),au[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&yr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="start",gP="close",mP="pLPCommand",_P="pRTLPCB",xv="id",Ov="pw",Dv="ser",yP="cb",vP="seg",EP="ts",TP="d",wP="dframe",Mv=1870,Lv=30,IP=Mv-Lv,CP=25e3,SP=3e4;class Di{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ea(e),this.stats_=rd(t),this.urlFn=c=>(this.appCheckToken&&(c[zu]=this.appCheckToken),Nv(t,Pv,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SP)),eP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new od((...r)=>{const[o,a,c,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cg)this.id=a,this.password=c;else if(o===gP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Cg]="t",s[Dv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Tv]=id,this.transportSessionId&&(s[wv]=this.transportSessionId),this.lastSessionId&&(s[Av]=this.lastSessionId),this.applicationId&&(s[Rv]=this.applicationId),this.appCheckToken&&(s[zu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sv.test(location.hostname)&&(s[Iv]=Cv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Di.forceAllow_=!0}static forceDisallow(){Di.forceDisallow_=!0}static isAvailable(){return Di.forceAllow_?!0:!Di.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nP()&&!sP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=rt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=yy(t),i=vv(s,IP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[wP]="t",s[xv]=e,s[Ov]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=rt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class od{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Xb(),window[mP+this.uniqueCallbackIdentifier]=e,window[_P+this.uniqueCallbackIdentifier]=t,this.myIFrame=od.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ct("frame writing exception"),a.stack&&Ct(a.stack),Ct(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ct("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xv]=this.myID,e[Ov]=this.myPW,e[Dv]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lv+s.length<=Mv;){const o=this.pendingSegs.shift();s=s+"&"+vP+i+"="+o.seg+"&"+EP+i+"="+o.ts+"&"+TP+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(CP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=16384,RP=45e3;let _l=null;typeof MozWebSocket<"u"?_l=MozWebSocket:typeof WebSocket<"u"&&(_l=WebSocket);class cn{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ea(this.connId),this.stats_=rd(t),this.connURL=cn.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Tv]=id,typeof location<"u"&&location.hostname&&Sv.test(location.hostname)&&(o[Iv]=Cv),t&&(o[wv]=t),s&&(o[Av]=s),i&&(o[zu]=i),r&&(o[Rv]=r),Nv(e,bv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Js.set("previous_websocket_failure",!0);try{let s;Ay(),this.mySock=new _l(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&_l!==null&&!cn.forceDisallow_}static previouslyFailed(){return Js.isInMemoryStorage||Js.get("previous_websocket_failure")===!0}markConnectionHealthy(){Js.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=So(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=rt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=vv(t,AP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RP))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cn.responsesRequiredToBeHealthy=2;cn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{static get ALL_TRANSPORTS(){return[Di,cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=cn&&cn.isAvailable();let s=t&&!cn.previouslyFailed();if(e.webSocketOnly&&(t||Ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[cn];else{const i=this.transports_=[];for(const r of Po.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Po.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Po.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=6e4,PP=5e3,kP=10*1024,NP=100*1024,lu="t",Sg="d",xP="s",Ag="r",OP="e",Rg="o",bg="a",Pg="n",kg="p",DP="h";class MP{constructor(e,t,s,i,r,o,a,c,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ea("c:"+this.id+":"),this.transportManager_=new Po(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=co(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lu in e){const t=e[lu];t===bg?this.upgradeIfSecondaryHealthy_():t===Ag?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Rg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Br("t",e),s=Br("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Br("t",e),s=Br("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Br(lu,e);if(Sg in e){const s=e[Sg];if(t===DP){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Pg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===xP?this.onConnectionShutdown_(s):t===Ag?this.onReset_(s):t===OP?qu("Server Error: "+s):t===Rg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),id!==s&&Ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),co(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):co(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Js.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends Fv{static getInstance(){return new yl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=32,xg=768;class Ve{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ke(){return new Ve("")}function me(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ns(n){return n.pieces_.length-n.pieceNum_}function Be(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ve(n.pieces_,e)}function Uv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function LP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Bv(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function $v(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ve(e,0)}function ot(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Ve(t,0)}function Ee(n){return n.pieceNum_>=n.pieces_.length}function Lt(n,e){const t=me(n),s=me(e);if(t===null)return e;if(t===s)return Lt(Be(n),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ad(n,e){if(Ns(n)!==Ns(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function hn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ns(n)>Ns(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class VP{constructor(e,t){this.errorPrefix_=t,this.parts_=Bv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Zl(this.parts_[s]);Hv(this)}}function FP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Zl(e),Hv(n)}function UP(n){const e=n.parts_.pop();n.byteLength_-=Zl(e),n.parts_.length>0&&(n.byteLength_-=1)}function Hv(n){if(n.byteLength_>xg)throw new Error(n.errorPrefix_+"has a key path longer than "+xg+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ng)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ng+") or object contains a cycle "+Xs(n))}function Xs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends Fv{static getInstance(){return new ld}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=1e3,BP=60*5*1e3,Og=30*1e3,$P=1.3,HP=3e4,jP="server_kill",Dg=3;class Gn extends Vv{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Gn.nextPersistentConnectionId_++,this.log_=ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$r,this.maxReconnectDelay_=BP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ay())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ld.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(rt(r)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Jl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;Gn.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&is(e,"w")){const s=tr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ES(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Og)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=vS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):qu("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$r,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$r,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HP&&(this.reconnectDelay_=$r),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$P)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ct("getToken() completed but was canceled"):(Ct("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new MP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{Ht(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(jP)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ht(f),c())}}}interrupt(e){Ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Du(this.interruptReasons_)&&(this.reconnectDelay_=$r,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>sd(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Ve(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Ct("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dg&&(this.reconnectDelay_=Og,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ct("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+gv.replace(/\./g,"-")]=1,Wh()?e["framework.cordova"]=1:Sy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yl.getInstance().currentlyOnline();return Du(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ye(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ye(nr,e),i=new ye(nr,t);return this.compare(s,i)!==0}minPost(){return ye.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;class jv extends ic{static get __EMPTY_NODE(){return ka}static set __EMPTY_NODE(e){ka=e}compare(e,t){return _r(e.name,t.name)}isDefinedOn(e){throw pr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ye.MIN}maxPost(){return new ye(ui,ka)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new ye(e,ka)}toString(){return".key"}}const zi=new jv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na=class{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Qt=class Kr{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Kr.RED,this.left=i??In.EMPTY_NODE,this.right=r??In.EMPTY_NODE}copy(e,t,s,i,r){return new Kr(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return In.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Kr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Kr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Qt.RED=!0;Qt.BLACK=!1;class WP{copy(e,t,s,i,r){return this}insert(e,t,s){return new Qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let In=class Ka{constructor(e,t=Ka.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ka(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(e){return new Ka(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Na(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Na(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Na(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Na(this.root_,null,this.comparator_,!0,e)}};In.EMPTY_NODE=new WP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(n,e){return _r(n.name,e.name)}function cd(n,e){return _r(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku;function zP(n){Ku=n}const Wv=function(n){return typeof n=="number"?"number:"+Ev(n):"string:"+n},qv=function(n){if(n.isLeafNode()){const e=n.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&is(e,".sv"),"Priority must be a string or number.")}else H(n===Ku||n.isEmpty(),"priority of unexpected type.");H(n===Ku||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mg;class ct{static set __childrenNodeConstructor(e){Mg=e}static get __childrenNodeConstructor(){return Mg}constructor(e,t=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:me(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=me(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(H(s!==".priority"||Ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ev(this.value_):e+=this.value_,this.lazyHash_=_v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ct.VALUE_TYPE_ORDER.indexOf(t),r=ct.VALUE_TYPE_ORDER.indexOf(s);return H(i>=0,"Unknown leaf type: "+t),H(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zv,Kv;function KP(n){zv=n}function GP(n){Kv=n}class QP extends ic{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?_r(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ye.MIN}maxPost(){return new ye(ui,new ct("[PRIORITY-POST]",Kv))}makePost(e,t){const s=zv(e);return new ye(t,new ct("[PRIORITY-POST]",s))}toString(){return".priority"}}const Xe=new QP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=Math.log(2);class XP{constructor(e){const t=r=>parseInt(Math.log(r)/YP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vl=function(n,e,t,s){n.sort(e);const i=function(c,u){const d=u-c;let f,g;if(d===0)return null;if(d===1)return f=n[c],g=t?t(f):f,new Qt(g,f.node,Qt.BLACK,null,null);{const _=parseInt(d/2,10)+c,S=i(c,_),k=i(_+1,u);return f=n[_],g=t?t(f):f,new Qt(g,f.node,Qt.BLACK,S,k)}},r=function(c){let u=null,d=null,f=n.length;const g=function(S,k){const O=f-S,j=f;f-=S;const U=i(O+1,j),$=n[O],q=t?t($):$;_(new Qt(q,$.node,k,null,U))},_=function(S){u?(u.left=S,u=S):(d=S,u=S)};for(let S=0;S<c.count;++S){const k=c.nextBitIsOne(),O=Math.pow(2,c.count-(S+1));k?g(O,Qt.BLACK):(g(O,Qt.BLACK),g(O,Qt.RED))}return d},o=new XP(n.length),a=r(o);return new In(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu;const Ai={};class zn{static get Default(){return H(Ai&&Xe,"ChildrenNode.ts has not been loaded"),cu=cu||new zn({".priority":Ai},{".priority":Xe}),cu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=tr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof In?t:null}hasIndex(e){return is(this.indexSet_,e.toString())}addIndex(e,t){H(e!==zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ye.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=vl(s,e.getCompare()):a=Ai;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new zn(d,u)}addToIndexes(e,t){const s=cl(this.indexes_,(i,r)=>{const o=tr(this.indexSet_,r);if(H(o,"Missing index implementation for "+r),i===Ai)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(ye.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),vl(a,o.getCompare())}else return Ai;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new ye(e.name,a))),c.insert(e,e.node)}});return new zn(s,this.indexSet_)}removeFromIndexes(e,t){const s=cl(this.indexes_,i=>{if(i===Ai)return i;{const r=t.get(e.name);return r?i.remove(new ye(e.name,r)):i}});return new zn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class le{static get EMPTY_NODE(){return Hr||(Hr=new le(new In(cd),null,zn.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&qv(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hr}updatePriority(e){return this.children_.isEmpty()?this:new le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Hr:t}}getChild(e){const t=me(e);return t===null?this:this.getImmediateChild(t).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ye(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hr:this.priorityNode_;return new le(i,o,r)}}updateChild(e,t){const s=me(e);if(s===null)return t;{H(me(e)!==".priority"||Ns(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Be(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Xe,(o,a)=>{t[o]=a.val(e),s++,r&&le.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wv(this.getPriority().val())+":"),this.forEachChild(Xe,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":_v(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ye(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ye(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ye(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ye.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ye.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ta?-1:0}withIndex(e){if(e===zi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new le(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Xe),i=t.getIterator(Xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zi?null:this.indexMap_.get(e.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class JP extends le{constructor(){super(new In(cd),le.EMPTY_NODE,zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return le.EMPTY_NODE}isEmpty(){return!1}}const ta=new JP;Object.defineProperties(ye,{MIN:{value:new ye(nr,le.EMPTY_NODE)},MAX:{value:new ye(ui,ta)}});jv.__EMPTY_NODE=le.EMPTY_NODE;ct.__childrenNodeConstructor=le;zP(ta);GP(ta);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=!0;function ht(n,e=null){if(n===null)return le.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ct(t,ht(e))}if(!(n instanceof Array)&&ZP){const t=[];let s=!1;if(Wt(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=ht(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new ye(o,c)))}}),t.length===0)return le.EMPTY_NODE;const r=vl(t,qP,o=>o.name,cd);if(s){const o=vl(t,Xe.getCompare());return new le(r,ht(e),new zn({".priority":o},{".priority":Xe}))}else return new le(r,ht(e),zn.Default)}else{let t=le.EMPTY_NODE;return Wt(n,(s,i)=>{if(is(n,s)&&s.substring(0,1)!=="."){const r=ht(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ht(e))}}KP(ht);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1 extends ic{constructor(e){super(),this.indexPath_=e,H(!Ee(e)&&me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?_r(e.name,t.name):r}makePost(e,t){const s=ht(e),i=le.EMPTY_NODE.updateChild(this.indexPath_,s);return new ye(t,i)}maxPost(){const e=le.EMPTY_NODE.updateChild(this.indexPath_,ta);return new ye(ui,e)}toString(){return Bv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1 extends ic{compare(e,t){const s=e.node.compareTo(t.node);return s===0?_r(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ye.MIN}maxPost(){return ye.MAX}makePost(e,t){const s=ht(e);return new ye(t,s)}toString(){return".value"}}const n1=new t1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){return{type:"value",snapshotNode:n}}function sr(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ko(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function No(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function s1(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(ko(t,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(sr(t,s)):o.trackChildChange(No(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Xe,(i,r)=>{t.hasChild(i)||s.trackChildChange(ko(i,r))}),t.isLeafNode()||t.forEachChild(Xe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(No(i,r,o))}else s.trackChildChange(sr(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?le.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.indexedFilter_=new ud(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xo.getStartPost_(e),this.endPost_=xo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new ye(t,s))||(s=le.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=le.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(le.EMPTY_NODE);const r=this;return t.forEachChild(Xe,(o,a)=>{r.matches(new ye(o,a))||(i=i.updateImmediateChild(o,le.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new xo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new ye(t,s))||(s=le.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=le.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=le.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(le.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,le.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,_)=>f(_,g)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const c=new ye(t,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const f=a.getImmediateChild(t);let g=i.getChildAfterChild(this.index_,u,this.reverse_);for(;g!=null&&(g.name===t||a.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const _=g==null?1:o(g,c);if(d&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(No(t,s,f)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(ko(t,f));const k=a.updateImmediateChild(t,le.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(sr(g.name,g.node)),k.updateImmediateChild(g.name,g.node)):k}}else return s.isEmpty()?e:d&&o(u,c)>=0?(r!=null&&(r.trackChildChange(ko(u.name,u.node)),r.trackChildChange(sr(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(u.name,le.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nr}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Xe}copy(){const e=new hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function r1(n){return n.loadsAllData()?new ud(n.getIndex()):n.hasLimit()?new i1(n):new xo(n)}function Lg(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Xe?t="$priority":n.index_===n1?t="$value":n.index_===zi?t="$key":(H(n.index_ instanceof e1,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=rt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=rt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+rt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=rt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+rt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Vg(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Xe&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Vv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ea("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=El.getListenId_(e,s),a={};this.listens_[o]=a;const c=Lg(e._queryParams);this.restRequest_(r+".json",c,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,s),tr(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",i(g,null)}})}unlisten(e,t){const s=El.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Lg(e._queryParams),s=e._path.toString(),i=new Jl;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+gr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=So(a.responseText)}catch{Ht("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Ht("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return{value:null,children:new Map}}function Qv(n,e,t){if(Ee(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=me(e);n.children.has(s)||n.children.set(s,Tl());const i=n.children.get(s);e=Be(e),Qv(i,e,t)}}function Gu(n,e,t){n.value!==null?t(e,n.value):a1(n,(s,i)=>{const r=new Ve(e.toString()+"/"+s);Gu(i,r,t)})}function a1(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Wt(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=10*1e3,c1=30*1e3,u1=5*60*1e3;class h1{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new l1(e);const s=Fg+(c1-Fg)*Math.random();co(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Wt(e,(i,r)=>{r>0&&is(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),co(this.reportStats_.bind(this),Math.floor(Math.random()*2*u1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function Yv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fd(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=dn.ACK_USER_WRITE,this.source=Yv()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ve(e));return new wl(ke(),t,this.revert)}}else return H(me(this.path)===e,"operationForChild called for unrelated child."),new wl(Be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.source=e,this.path=t,this.type=dn.LISTEN_COMPLETE}operationForChild(e){return Ee(this.path)?new Oo(this.source,ke()):new Oo(this.source,Be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=dn.OVERWRITE}operationForChild(e){return Ee(this.path)?new hi(this.source,ke(),this.snap.getImmediateChild(e)):new hi(this.source,Be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=dn.MERGE}operationForChild(e){if(Ee(this.path)){const t=this.children.subtree(new Ve(e));return t.isEmpty()?null:t.value?new hi(this.source,ke(),t.value):new Do(this.source,ke(),t)}else return H(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Do(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const t=me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function f1(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(s1(o.childName,o.snapshotNode))}),jr(n,i,"child_removed",e,s,t),jr(n,i,"child_added",e,s,t),jr(n,i,"child_moved",r,s,t),jr(n,i,"child_changed",e,s,t),jr(n,i,"value",e,s,t),i}function jr(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>g1(n,a,c)),o.forEach(a=>{const c=p1(n,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function p1(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function g1(n,e,t){if(e.childName==null||t.childName==null)throw pr("Should only compare child_ events.");const s=new ye(e.childName,e.snapshotNode),i=new ye(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n,e){return{eventCache:n,serverCache:e}}function uo(n,e,t,s){return rc(new xs(e,t,s),n.serverCache)}function Xv(n,e,t,s){return rc(n.eventCache,new xs(e,t,s))}function Il(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function di(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;const m1=()=>(uu||(uu=new In(tP)),uu);class je{static fromObject(e){let t=new je(null);return Wt(e,(s,i)=>{t=t.set(new Ve(s),i)}),t}constructor(e,t=m1()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ke(),value:this.value};if(Ee(e))return null;{const s=me(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Be(e),t);return r!=null?{path:ot(new Ve(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const t=me(e),s=this.children.get(t);return s!==null?s.subtree(Be(e)):new je(null)}}set(e,t){if(Ee(e))return new je(t,this.children);{const s=me(e),r=(this.children.get(s)||new je(null)).set(Be(e),t),o=this.children.insert(s,r);return new je(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new je(null):new je(null,this.children);{const t=me(e),s=this.children.get(t);if(s){const i=s.remove(Be(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new je(null):new je(this.value,r)}else return this}}get(e){if(Ee(e))return this.value;{const t=me(e),s=this.children.get(t);return s?s.get(Be(e)):null}}setTree(e,t){if(Ee(e))return t;{const s=me(e),r=(this.children.get(s)||new je(null)).setTree(Be(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new je(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ot(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ke(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(Ee(e))return null;{const r=me(e),o=this.children.get(r);return o?o.findOnPath_(Be(e),ot(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ke(),t)}foreachOnPath_(e,t,s){if(Ee(e))return this;{this.value&&s(t,this.value);const i=me(e),r=this.children.get(i);return r?r.foreachOnPath_(Be(e),ot(t,i),s):new je(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ot(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.writeTree_=e}static empty(){return new pn(new je(null))}}function ho(n,e,t){if(Ee(e))return new pn(new je(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Lt(i,e);return r=r.updateChild(o,t),new pn(n.writeTree_.set(i,r))}else{const i=new je(t),r=n.writeTree_.setTree(e,i);return new pn(r)}}}function Ug(n,e,t){let s=n;return Wt(t,(i,r)=>{s=ho(s,ot(e,i),r)}),s}function Bg(n,e){if(Ee(e))return pn.empty();{const t=n.writeTree_.setTree(e,new je(null));return new pn(t)}}function Qu(n,e){return vi(n,e)!=null}function vi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Lt(t.path,e)):null}function $g(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Xe,(s,i)=>{e.push(new ye(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ye(s,i.value))}),e}function Cs(n,e){if(Ee(e))return n;{const t=vi(n,e);return t!=null?new pn(new je(t)):new pn(n.writeTree_.subtree(e))}}function Yu(n){return n.writeTree_.isEmpty()}function ir(n,e){return Jv(ke(),n.writeTree_,e)}function Jv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(H(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Jv(ot(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ot(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e){return nE(e,n)}function _1(n,e,t,s,i){H(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=ho(n.visibleWrites,e,t)),n.lastWriteId=s}function y1(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function v1(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&E1(a,s.path)?i=!1:hn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return T1(n),!0;if(s.snap)n.visibleWrites=Bg(n.visibleWrites,s.path);else{const a=s.children;Wt(a,c=>{n.visibleWrites=Bg(n.visibleWrites,ot(s.path,c))})}return!0}else return!1}function E1(n,e){if(n.snap)return hn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&hn(ot(n.path,t),e))return!0;return!1}function T1(n){n.visibleWrites=Zv(n.allWrites,w1,ke()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function w1(n){return n.visible}function Zv(n,e,t){let s=pn.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)hn(t,o)?(a=Lt(t,o),s=ho(s,a,r.snap)):hn(o,t)&&(a=Lt(o,t),s=ho(s,ke(),r.snap.getChild(a)));else if(r.children){if(hn(t,o))a=Lt(t,o),s=Ug(s,a,r.children);else if(hn(o,t))if(a=Lt(o,t),Ee(a))s=Ug(s,ke(),r.children);else{const c=tr(r.children,me(a));if(c){const u=c.getChild(Be(a));s=ho(s,ke(),u)}}}else throw pr("WriteRecord should have .snap or .children")}}return s}function eE(n,e,t,s,i){if(!s&&!i){const r=vi(n.visibleWrites,e);if(r!=null)return r;{const o=Cs(n.visibleWrites,e);if(Yu(o))return t;if(t==null&&!Qu(o,ke()))return null;{const a=t||le.EMPTY_NODE;return ir(o,a)}}}else{const r=Cs(n.visibleWrites,e);if(!i&&Yu(r))return t;if(!i&&t==null&&!Qu(r,ke()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(hn(u.path,e)||hn(e,u.path))},a=Zv(n.allWrites,o,e),c=t||le.EMPTY_NODE;return ir(a,c)}}}function I1(n,e,t){let s=le.EMPTY_NODE;const i=vi(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Cs(n.visibleWrites,e);return t.forEachChild(Xe,(o,a)=>{const c=ir(Cs(r,new Ve(o)),a);s=s.updateImmediateChild(o,c)}),$g(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Cs(n.visibleWrites,e);return $g(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function C1(n,e,t,s,i){H(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ot(e,t);if(Qu(n.visibleWrites,r))return null;{const o=Cs(n.visibleWrites,r);return Yu(o)?i.getChild(t):ir(o,i.getChild(t))}}function S1(n,e,t,s){const i=ot(e,t),r=vi(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Cs(n.visibleWrites,i);return ir(o,s.getNode().getImmediateChild(t))}else return null}function A1(n,e){return vi(n.visibleWrites,e)}function R1(n,e,t,s,i,r,o){let a;const c=Cs(n.visibleWrites,e),u=vi(c,ke());if(u!=null)a=u;else if(t!=null)a=ir(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),g=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=g.getNext();for(;_&&d.length<i;)f(_,s)!==0&&d.push(_),_=g.getNext();return d}else return[]}function b1(){return{visibleWrites:pn.empty(),allWrites:[],lastWriteId:-1}}function Cl(n,e,t,s){return eE(n.writeTree,n.treePath,e,t,s)}function pd(n,e){return I1(n.writeTree,n.treePath,e)}function Hg(n,e,t,s){return C1(n.writeTree,n.treePath,e,t,s)}function Sl(n,e){return A1(n.writeTree,ot(n.treePath,e))}function P1(n,e,t,s,i,r){return R1(n.writeTree,n.treePath,e,t,s,i,r)}function gd(n,e,t){return S1(n.writeTree,n.treePath,e,t)}function tE(n,e){return nE(ot(n.treePath,e),n.writeTree)}function nE(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,No(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,ko(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,sr(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,No(s,e.snapshotNode,i.oldSnap));else throw pr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const sE=new N1;class md{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new xs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gd(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:di(this.viewCache_),r=P1(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(n){return{filter:n}}function O1(n,e){H(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function D1(n,e,t,s,i){const r=new k1;let o,a;if(t.type===dn.OVERWRITE){const u=t;u.source.fromUser?o=Xu(n,e,u.path,u.snap,s,i,r):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ee(u.path),o=Al(n,e,u.path,u.snap,s,i,a,r))}else if(t.type===dn.MERGE){const u=t;u.source.fromUser?o=L1(n,e,u.path,u.children,s,i,r):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ju(n,e,u.path,u.children,s,i,a,r))}else if(t.type===dn.ACK_USER_WRITE){const u=t;u.revert?o=U1(n,e,u.path,s,i,r):o=V1(n,e,u.path,u.affectedTree,s,i,r)}else if(t.type===dn.LISTEN_COMPLETE)o=F1(n,e,t.path,s,r);else throw pr("Unknown operation type: "+t.type);const c=r.getChanges();return M1(e,o,c),{viewCache:o,changes:c}}function M1(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Il(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Gv(Il(e)))}}function iE(n,e,t,s,i,r){const o=e.eventCache;if(Sl(s,t)!=null)return e;{let a,c;if(Ee(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=di(e),d=u instanceof le?u:le.EMPTY_NODE,f=pd(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=Cl(s,di(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=me(t);if(u===".priority"){H(Ns(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const f=Hg(s,t,d,c);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=Be(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=Hg(s,t,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(d,g):f=o.getNode().getImmediateChild(u)}else f=gd(s,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,d,i,r):a=o.getNode()}}return uo(e,a,o.isFullyInitialized()||Ee(t),n.filter.filtersNodes())}}function Al(n,e,t,s,i,r,o,a){const c=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(Ee(t))u=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(t,s);u=d.updateFullNode(c.getNode(),_,null)}else{const _=me(t);if(!c.isCompleteForPath(t)&&Ns(t)>1)return e;const S=Be(t),O=c.getNode().getImmediateChild(_).updateChild(S,s);_===".priority"?u=d.updatePriority(c.getNode(),O):u=d.updateChild(c.getNode(),_,O,S,sE,null)}const f=Xv(e,u,c.isFullyInitialized()||Ee(t),d.filtersNodes()),g=new md(i,f,r);return iE(n,f,t,i,g,a)}function Xu(n,e,t,s,i,r,o){const a=e.eventCache;let c,u;const d=new md(i,e,r);if(Ee(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=uo(e,u,!0,n.filter.filtersNodes());else{const f=me(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=uo(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=Be(t),_=a.getNode().getImmediateChild(f);let S;if(Ee(g))S=s;else{const k=d.getCompleteChild(f);k!=null?Uv(g)===".priority"&&k.getChild($v(g)).isEmpty()?S=k:S=k.updateChild(g,s):S=le.EMPTY_NODE}if(_.equals(S))c=e;else{const k=n.filter.updateChild(a.getNode(),f,S,g,d,o);c=uo(e,k,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function jg(n,e){return n.eventCache.isCompleteForChild(e)}function L1(n,e,t,s,i,r,o){let a=e;return s.foreach((c,u)=>{const d=ot(t,c);jg(e,me(d))&&(a=Xu(n,a,d,u,i,r,o))}),s.foreach((c,u)=>{const d=ot(t,c);jg(e,me(d))||(a=Xu(n,a,d,u,i,r,o))}),a}function Wg(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ju(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ee(t)?u=s:u=new je(null).setTree(t,s);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(d.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),S=Wg(n,_,g);c=Al(n,c,new Ve(f),S,i,r,o,a)}}),u.children.inorderTraversal((f,g)=>{const _=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!d.hasChild(f)&&!_){const S=e.serverCache.getNode().getImmediateChild(f),k=Wg(n,S,g);c=Al(n,c,new Ve(f),k,i,r,o,a)}}),c}function V1(n,e,t,s,i,r,o){if(Sl(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ee(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Al(n,e,t,c.getNode().getChild(t),i,r,a,o);if(Ee(t)){let u=new je(null);return c.getNode().forEachChild(zi,(d,f)=>{u=u.set(new Ve(d),f)}),Ju(n,e,t,u,i,r,a,o)}else return e}else{let u=new je(null);return s.foreach((d,f)=>{const g=ot(t,d);c.isCompleteForPath(g)&&(u=u.set(d,c.getNode().getChild(g)))}),Ju(n,e,t,u,i,r,a,o)}}function F1(n,e,t,s,i){const r=e.serverCache,o=Xv(e,r.getNode(),r.isFullyInitialized()||Ee(t),r.isFiltered());return iE(n,o,t,s,sE,i)}function U1(n,e,t,s,i,r){let o;if(Sl(s,t)!=null)return e;{const a=new md(s,e,i),c=e.eventCache.getNode();let u;if(Ee(t)||me(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Cl(s,di(e));else{const f=e.serverCache.getNode();H(f instanceof le,"serverChildren would be complete if leaf node"),d=pd(s,f)}d=d,u=n.filter.updateFullNode(c,d,r)}else{const d=me(t);let f=gd(s,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),f!=null?u=n.filter.updateChild(c,d,f,Be(t),a,r):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(c,d,le.EMPTY_NODE,Be(t),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cl(s,di(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Sl(s,ke())!=null,uo(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ud(s.getIndex()),r=r1(s);this.processor_=x1(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(le.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(le.EMPTY_NODE,a.getNode(),null),d=new xs(c,o.isFullyInitialized(),i.filtersNodes()),f=new xs(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=rc(f,d),this.eventGenerator_=new d1(this.query_)}get query(){return this.query_}}function $1(n){return n.viewCache_.serverCache.getNode()}function H1(n){return Il(n.viewCache_)}function j1(n,e){const t=di(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ee(e)&&!t.getImmediateChild(me(e)).isEmpty())?t.getChild(e):null}function qg(n){return n.eventRegistrations_.length===0}function W1(n,e){n.eventRegistrations_.push(e)}function zg(n,e,t){const s=[];if(t){H(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Kg(n,e,t,s){e.type===dn.MERGE&&e.source.queryId!==null&&(H(di(n.viewCache_),"We should always have a full cache before handling merges"),H(Il(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=D1(n.processor_,i,e,t,s);return O1(n.processor_,r.viewCache),H(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,rE(n,r.changes,r.viewCache.eventCache.getNode(),null)}function q1(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Xe,(r,o)=>{s.push(sr(r,o))}),t.isFullyInitialized()&&s.push(Gv(t.getNode())),rE(n,s,t.getNode(),e)}function rE(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return f1(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class oE{constructor(){this.views=new Map}}function z1(n){H(!Rl,"__referenceConstructor has already been defined"),Rl=n}function K1(){return H(Rl,"Reference.ts has not been loaded"),Rl}function G1(n){return n.views.size===0}function _d(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return H(r!=null,"SyncTree gave us an op for an invalid query."),Kg(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Kg(o,e,t,s));return r}}function aE(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Cl(t,i?s:null),c=!1;a?c=!0:s instanceof le?(a=pd(t,s),c=!1):(a=le.EMPTY_NODE,c=!1);const u=rc(new xs(a,c,!1),new xs(s,i,!1));return new B1(e,u)}return o}function Q1(n,e,t,s,i,r){const o=aE(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),W1(o,t),q1(o,t)}function Y1(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Os(n);if(i==="default")for(const[c,u]of n.views.entries())o=o.concat(zg(u,t,s)),qg(u)&&(n.views.delete(c),u.query._queryParams.loadsAllData()||r.push(u.query));else{const c=n.views.get(i);c&&(o=o.concat(zg(c,t,s)),qg(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Os(n)&&r.push(new(K1())(e._repo,e._path)),{removed:r,events:o}}function lE(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ss(n,e){let t=null;for(const s of n.views.values())t=t||j1(s,e);return t}function cE(n,e){if(e._queryParams.loadsAllData())return ac(n);{const s=e._queryIdentifier;return n.views.get(s)}}function uE(n,e){return cE(n,e)!=null}function Os(n){return ac(n)!=null}function ac(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;function X1(n){H(!bl,"__referenceConstructor has already been defined"),bl=n}function J1(){return H(bl,"Reference.ts has not been loaded"),bl}let Z1=1;class Gg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new je(null),this.pendingWriteTree_=b1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hE(n,e,t,s,i){return _1(n.pendingWriteTree_,e,t,s,i),i?sa(n,new hi(Yv(),e,t)):[]}function Zs(n,e,t=!1){const s=y1(n.pendingWriteTree_,e);if(v1(n.pendingWriteTree_,e)){let r=new je(null);return s.snap!=null?r=r.set(ke(),!0):Wt(s.children,o=>{r=r.set(new Ve(o),!0)}),sa(n,new wl(s.path,r,t))}else return[]}function na(n,e,t){return sa(n,new hi(dd(),e,t))}function ek(n,e,t){const s=je.fromObject(t);return sa(n,new Do(dd(),e,s))}function tk(n,e){return sa(n,new Oo(dd(),e))}function nk(n,e,t){const s=vd(n,t);if(s){const i=Ed(s),r=i.path,o=i.queryId,a=Lt(r,e),c=new Oo(fd(o),a);return Td(n,r,c)}else return[]}function Pl(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||uE(o,e))){const c=Y1(o,e,t,s);G1(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const u=c.removed;if(a=c.events,!i){const d=u.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(g,_)=>Os(_));if(d&&!f){const g=n.syncPointTree_.subtree(r);if(!g.isEmpty()){const _=rk(g);for(let S=0;S<_.length;++S){const k=_[S],O=k.query,j=gE(n,k);n.listenProvider_.startListening(fo(O),Mo(n,O),j.hashFn,j.onComplete)}}}!f&&u.length>0&&!s&&(d?n.listenProvider_.stopListening(fo(e),null):u.forEach(g=>{const _=n.queryToTagMap.get(lc(g));n.listenProvider_.stopListening(fo(g),_)}))}ok(n,u)}return a}function dE(n,e,t,s){const i=vd(n,s);if(i!=null){const r=Ed(i),o=r.path,a=r.queryId,c=Lt(o,e),u=new hi(fd(a),c,t);return Td(n,o,u)}else return[]}function sk(n,e,t,s){const i=vd(n,s);if(i){const r=Ed(i),o=r.path,a=r.queryId,c=Lt(o,e),u=je.fromObject(t),d=new Do(fd(a),c,u);return Td(n,o,d)}else return[]}function Zu(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(g,_)=>{const S=Lt(g,i);r=r||Ss(_,S),o=o||Os(_)});let a=n.syncPointTree_.get(i);a?(o=o||Os(a),r=r||Ss(a,ke())):(a=new oE,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=le.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,S)=>{const k=Ss(S,ke());k&&(r=r.updateImmediateChild(_,k))}));const u=uE(a,e);if(!u&&!e._queryParams.loadsAllData()){const g=lc(e);H(!n.queryToTagMap.has(g),"View does not exist, but we have a tag");const _=ak();n.queryToTagMap.set(g,_),n.tagToQueryMap.set(_,g)}const d=oc(n.pendingWriteTree_,i);let f=Q1(a,e,t,d,r,c);if(!u&&!o&&!s){const g=cE(a,e);f=f.concat(lk(n,e,g))}return f}function yd(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Lt(o,e),u=Ss(a,c);if(u)return u});return eE(i,e,r,t,!0)}function ik(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(u,d)=>{const f=Lt(u,t);s=s||Ss(d,f)});let i=n.syncPointTree_.get(t);i?s=s||Ss(i,ke()):(i=new oE,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new xs(s,!0,!1):null,a=oc(n.pendingWriteTree_,e._path),c=aE(i,e,a,r?o.getNode():le.EMPTY_NODE,r);return H1(c)}function sa(n,e){return fE(e,n.syncPointTree_,null,oc(n.pendingWriteTree_,ke()))}function fE(n,e,t,s){if(Ee(n.path))return pE(n,e,t,s);{const i=e.get(ke());t==null&&i!=null&&(t=Ss(i,ke()));let r=[];const o=me(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,d=tE(s,o);r=r.concat(fE(a,c,u,d))}return i&&(r=r.concat(_d(i,n,s,t))),r}}function pE(n,e,t,s){const i=e.get(ke());t==null&&i!=null&&(t=Ss(i,ke()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=tE(s,o),d=n.operationForChild(o);d&&(r=r.concat(pE(d,a,c,u)))}),i&&(r=r.concat(_d(i,n,s,t))),r}function gE(n,e){const t=e.query,s=Mo(n,t);return{hashFn:()=>($1(e)||le.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?nk(n,t._path,s):tk(n,t._path);{const r=iP(i,t);return Pl(n,t,null,r)}}}}function Mo(n,e){const t=lc(e);return n.queryToTagMap.get(t)}function lc(n){return n._path.toString()+"$"+n._queryIdentifier}function vd(n,e){return n.tagToQueryMap.get(e)}function Ed(n){const e=n.indexOf("$");return H(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ve(n.substr(0,e))}}function Td(n,e,t){const s=n.syncPointTree_.get(e);H(s,"Missing sync point for query tag that we're tracking");const i=oc(n.pendingWriteTree_,e);return _d(s,t,i,null)}function rk(n){return n.fold((e,t,s)=>{if(t&&Os(t))return[ac(t)];{let i=[];return t&&(i=lE(t)),Wt(s,(r,o)=>{i=i.concat(o)}),i}})}function fo(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(J1())(n._repo,n._path):n}function ok(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=lc(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function ak(){return Z1++}function lk(n,e,t){const s=e._path,i=Mo(n,e),r=gE(n,t),o=n.listenProvider_.startListening(fo(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)H(!Os(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,d,f)=>{if(!Ee(u)&&d&&Os(d))return[ac(d).query];{let g=[];return d&&(g=g.concat(lE(d).map(_=>_.query))),Wt(f,(_,S)=>{g=g.concat(S)}),g}});for(let u=0;u<c.length;++u){const d=c[u];n.listenProvider_.stopListening(fo(d),Mo(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wd(t)}node(){return this.node_}}class Id{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ot(this.path_,e);return new Id(this.syncTree_,t)}node(){return yd(this.syncTree_,this.path_)}}const ck=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Qg=function(n,e,t){if(!n||typeof n!="object")return n;if(H(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return uk(n[".sv"],e,t);if(typeof n[".sv"]=="object")return hk(n[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},uk=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+n)}},hk=function(n,e,t){n.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&H(!1,"Unexpected increment value: "+s);const i=e.node();if(H(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},dk=function(n,e,t,s){return Cd(e,new Id(t,n),s)},mE=function(n,e,t){return Cd(n,new wd(e),t)};function Cd(n,e,t){const s=n.getPriority().val(),i=Qg(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Qg(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ct(a,ht(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ct(i))),o.forEachChild(Xe,(a,c)=>{const u=Cd(c,e.getImmediateChild(a),t);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ad(n,e){let t=e instanceof Ve?e:new Ve(e),s=n,i=me(t);for(;i!==null;){const r=tr(s.node.children,i)||{children:{},childCount:0};s=new Sd(i,s,r),t=Be(t),i=me(t)}return s}function vr(n){return n.node.value}function _E(n,e){n.node.value=e,eh(n)}function yE(n){return n.node.childCount>0}function fk(n){return vr(n)===void 0&&!yE(n)}function cc(n,e){Wt(n.node.children,(t,s)=>{e(new Sd(t,n,s))})}function vE(n,e,t,s){t&&!s&&e(n),cc(n,i=>{vE(i,e,!0,s)}),t&&s&&e(n)}function pk(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ia(n){return new Ve(n.parent===null?n.name:ia(n.parent)+"/"+n.name)}function eh(n){n.parent!==null&&gk(n.parent,n.name,n)}function gk(n,e,t){const s=fk(t),i=is(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,eh(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,eh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/[\[\].#$\/\u0000-\u001F\u007F]/,_k=/[\[\].#$\u0000-\u001F\u007F]/,hu=10*1024*1024,EE=function(n){return typeof n=="string"&&n.length!==0&&!mk.test(n)},TE=function(n){return typeof n=="string"&&n.length!==0&&!_k.test(n)},yk=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),TE(n)},wE=function(n,e,t,s){s&&e===void 0||Rd(qh(n,"value"),e,t)},Rd=function(n,e,t){const s=t instanceof Ve?new VP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Xs(s));if(typeof e=="function")throw new Error(n+"contains a function "+Xs(s)+" with contents = "+e.toString());if(yv(e))throw new Error(n+"contains "+e.toString()+" "+Xs(s));if(typeof e=="string"&&e.length>hu/3&&Zl(e)>hu)throw new Error(n+"contains a string greater than "+hu+" utf8 bytes "+Xs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Wt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!EE(o)))throw new Error(n+" contains an invalid key ("+o+") "+Xs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FP(s,o),Rd(n,a,s),UP(s)}),i&&r)throw new Error(n+' contains ".value" child '+Xs(s)+" in addition to actual children.")}},IE=function(n,e,t,s){if(!(s&&t===void 0)&&!TE(t))throw new Error(qh(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vk=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),IE(n,e,t,s)},CE=function(n,e){if(me(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Ek=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!EE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!yk(t))throw new Error(qh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ad(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function SE(n,e,t){bd(n,t),AE(n,s=>ad(s,e))}function xn(n,e,t){bd(n,t),AE(n,s=>hn(s,e)||hn(e,s))}function AE(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(wk(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function wk(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ni&&Ct("event: "+t.toString()),yr(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="repo_interrupt",Ck=25;class Sk{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tl(),this.transactionQueueTree_=new Sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ak(n,e,t){if(n.stats_=rd(n.repoInfo_),n.forceRestClient_||lP())n.server_=new El(n.repoInfo_,(s,i,r,o)=>{Yg(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Xg(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Gn(n.repoInfo_,e,(s,i,r,o)=>{Yg(n,s,i,r,o)},s=>{Xg(n,s)},s=>{Rk(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=fP(n.repoInfo_,()=>new h1(n.stats_,n.server_)),n.infoData_=new o1,n.infoSyncTree_=new Gg({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=na(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),kd(n,"connected",!1),n.serverSyncTree_=new Gg({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const u=o(a,c);xn(n.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function RE(n){const t=n.infoData_.getNode(new Ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Pd(n){return ck({timestamp:RE(n)})}function Yg(n,e,t,s,i){n.dataUpdateCount++;const r=new Ve(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=cl(t,u=>ht(u));o=sk(n.serverSyncTree_,r,c,i)}else{const c=ht(t);o=dE(n.serverSyncTree_,r,c,i)}else if(s){const c=cl(t,u=>ht(u));o=ek(n.serverSyncTree_,r,c)}else{const c=ht(t);o=na(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=hc(n,r)),xn(n.eventQueue_,a,o)}function Xg(n,e){kd(n,"connected",e),e===!1&&kk(n)}function Rk(n,e){Wt(e,(t,s)=>{kd(n,t,s)})}function kd(n,e,t){const s=new Ve("/.info/"+e),i=ht(t);n.infoData_.updateSnapshot(s,i);const r=na(n.infoSyncTree_,s,i);xn(n.eventQueue_,s,r)}function bE(n){return n.nextWriteId_++}function bk(n,e,t){const s=ik(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=ht(i).withIndex(e._queryParams.getIndex());Zu(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=na(n.serverSyncTree_,e._path,r);else{const a=Mo(n.serverSyncTree_,e);o=dE(n.serverSyncTree_,e._path,r,a)}return xn(n.eventQueue_,e._path,o),Pl(n.serverSyncTree_,e,t,null,!0),r},i=>(uc(n,"get for query "+rt(e)+" failed: "+i),Promise.reject(new Error(i))))}function Pk(n,e,t,s,i){uc(n,"set",{path:e.toString(),value:t,priority:s});const r=Pd(n),o=ht(t,s),a=yd(n.serverSyncTree_,e),c=mE(o,a,r),u=bE(n),d=hE(n.serverSyncTree_,e,c,u,!0);bd(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(g,_)=>{const S=g==="ok";S||Ht("set at "+e+" failed: "+g);const k=Zs(n.serverSyncTree_,u,!S);xn(n.eventQueue_,e,k),Ok(n,i,g,_)});const f=OE(n,e);hc(n,f),xn(n.eventQueue_,f,[])}function kk(n){uc(n,"onDisconnectEvents");const e=Pd(n),t=Tl();Gu(n.onDisconnect_,ke(),(i,r)=>{const o=dk(i,r,n.serverSyncTree_,e);Qv(t,i,o)});let s=[];Gu(t,ke(),(i,r)=>{s=s.concat(na(n.serverSyncTree_,i,r));const o=OE(n,i);hc(n,o)}),n.onDisconnect_=Tl(),xn(n.eventQueue_,ke(),s)}function Nk(n,e,t){let s;me(e._path)===".info"?s=Zu(n.infoSyncTree_,e,t):s=Zu(n.serverSyncTree_,e,t),SE(n.eventQueue_,e._path,s)}function Jg(n,e,t){let s;me(e._path)===".info"?s=Pl(n.infoSyncTree_,e,t):s=Pl(n.serverSyncTree_,e,t),SE(n.eventQueue_,e._path,s)}function xk(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ik)}function uc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ct(t,...e)}function Ok(n,e,t,s){e&&yr(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function PE(n,e,t){return yd(n.serverSyncTree_,e,t)||le.EMPTY_NODE}function Nd(n,e=n.transactionQueueTree_){if(e||dc(n,e),vr(e)){const t=NE(n,e);H(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Dk(n,ia(e),t)}else yE(e)&&cc(e,t=>{Nd(n,t)})}function Dk(n,e,t){const s=t.map(u=>u.currentWriteId),i=PE(n,e,s);let r=i;const o=i.hash();for(let u=0;u<t.length;u++){const d=t[u];H(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Lt(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,u=>{uc(n,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let g=0;g<t.length;g++)t[g].status=2,d=d.concat(Zs(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&f.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();dc(n,Ad(n.transactionQueueTree_,e)),Nd(n,n.transactionQueueTree_),xn(n.eventQueue_,e,d);for(let g=0;g<f.length;g++)yr(f[g])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Ht("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}hc(n,e)}},o)}function hc(n,e){const t=kE(n,e),s=ia(t),i=NE(n,t);return Mk(n,i,s),s}function Mk(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Lt(t,c.path);let d=!1,f;if(H(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,f=c.abortReason,i=i.concat(Zs(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Ck)d=!0,f="maxretry",i=i.concat(Zs(n.serverSyncTree_,c.currentWriteId,!0));else{const g=PE(n,c.path,o);c.currentInputSnapshot=g;const _=e[a].update(g.val());if(_!==void 0){Rd("transaction failed: Data returned ",_,c.path);let S=ht(_);typeof _=="object"&&_!=null&&is(_,".priority")||(S=S.updatePriority(g.getPriority()));const O=c.currentWriteId,j=Pd(n),U=mE(S,g,j);c.currentOutputSnapshotRaw=S,c.currentOutputSnapshotResolved=U,c.currentWriteId=bE(n),o.splice(o.indexOf(O),1),i=i.concat(hE(n.serverSyncTree_,c.path,U,c.currentWriteId,c.applyLocally)),i=i.concat(Zs(n.serverSyncTree_,O,!0))}else d=!0,f="nodata",i=i.concat(Zs(n.serverSyncTree_,c.currentWriteId,!0))}xn(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}dc(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)yr(s[a]);Nd(n,n.transactionQueueTree_)}function kE(n,e){let t,s=n.transactionQueueTree_;for(t=me(e);t!==null&&vr(s)===void 0;)s=Ad(s,t),e=Be(e),t=me(e);return s}function NE(n,e){const t=[];return xE(n,e,t),t.sort((s,i)=>s.order-i.order),t}function xE(n,e,t){const s=vr(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);cc(e,i=>{xE(n,i,t)})}function dc(n,e){const t=vr(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,_E(e,t.length>0?t:void 0)}cc(e,s=>{dc(n,s)})}function OE(n,e){const t=ia(kE(n,e)),s=Ad(n.transactionQueueTree_,e);return pk(s,i=>{du(n,i)}),du(n,s),vE(s,i=>{du(n,i)}),t}function du(n,e){const t=vr(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(H(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(H(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Zs(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_E(e,void 0):t.length=r+1,xn(n.eventQueue_,ia(e),i);for(let o=0;o<s.length;o++)yr(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Vk(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ht(`Invalid query segment '${t}' in query '${n}'`)}return e}const Zg=function(n,e){const t=Fk(n),s=t.namespace;t.domain==="firebase.com"&&es(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Zb();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new kv(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Ve(t.pathString)}},Fk=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(i=Lk(n.substring(d,f)));const g=Vk(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const S=e.indexOf(".");s=e.substring(0,S).toLowerCase(),t=e.substring(S+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Uk=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=em.charAt(t%64),t=Math.floor(t/64);H(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=em.charAt(e[i]);return H(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class ME{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return Ee(this._path)?null:Uv(this._path)}get ref(){return new Mn(this._repo,this._path)}get _queryIdentifier(){const e=Vg(this._queryParams),t=sd(e);return t==="{}"?"default":t}get _queryObject(){return Vg(this._queryParams)}isEqual(e){if(e=Vt(e),!(e instanceof xd))return!1;const t=this._repo===e._repo,s=ad(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+LP(this._path)}}class Mn extends xd{constructor(e,t){super(e,t,new hd,!1)}get parent(){const e=$v(this._path);return e===null?null:new Mn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rr{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ve(e),s=fi(this.ref,e);return new rr(this._node.getChild(t),s,Xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new rr(i,fi(this.ref,s),Xe)))}hasChild(e){const t=new Ve(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lo(n,e){return n=Vt(n),n._checkNotDeleted("ref"),e!==void 0?fi(n._root,e):n._root}function fi(n,e){return n=Vt(n),me(n._path)===null?vk("child","path",e,!1):IE("child","path",e,!1),new Mn(n._repo,ot(n._path,e))}function Bk(n,e){n=Vt(n),CE("push",n._path),wE("push",e,n._path,!0);const t=RE(n._repo),s=Uk(t),i=fi(n,s),r=fi(n,s);let o;return e!=null?o=Od(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Od(n,e){n=Vt(n),CE("set",n._path),wE("set",e,n._path,!1);const t=new Jl;return Pk(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function VE(n){n=Vt(n);const e=new LE(()=>{}),t=new fc(e);return bk(n._repo,n,t).then(s=>new rr(s,new Mn(n._repo,n._path),n._queryParams.getIndex()))}class fc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new DE("value",this,new rr(e.snapshotNode,new Mn(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ME(this,e,t):null}matches(e){return e instanceof fc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Dd{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ME(this,e,t):null}createEvent(e,t){H(e.childName!=null,"Child events should have a childName.");const s=fi(new Mn(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new DE(e.type,this,new rr(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Dd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function $k(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,u=(d,f)=>{Jg(n._repo,n,a),c(d,f)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new LE(t,r||void 0),a=e==="value"?new fc(o):new Dd(e,o);return Nk(n._repo,n,a),()=>Jg(n._repo,n,a)}function Hk(n,e,t,s){return $k(n,"value",e,t,s)}z1(Mn);X1(Mn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="FIREBASE_DATABASE_EMULATOR_HOST",th={};let Wk=!1;function qk(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=mi(r);n.repoInfo_=new kv(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function zk(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ct("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Zg(r,i),a=o.repoInfo,c,u;typeof process<"u"&&vg&&(u=vg[jk]),u?(c=!0,r=`http://${u}?ns=${a.namespace}`,o=Zg(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const d=i&&c?new qi(qi.OWNER):new uP(n.name,n.options,e);Ek("Invalid Firebase Database URL",o),Ee(o.path)||es("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Gk(a,n,d,new cP(n,t));return new Qk(f,n)}function Kk(n,e){const t=th[e];(!t||t[n.key]!==n)&&es(`Database ${e}(${n.repoInfo_}) has already been deleted.`),xk(n),delete t[n.key]}function Gk(n,e,t,s){let i=th[e.name];i||(i={},th[e.name]=i);let r=i[n.toURLString()];return r&&es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Sk(n,Wk,t,s),i[n.toURLString()]=r,r}class Qk{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ak(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mn(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&es("Cannot call "+e+" on a deleted database.")}}function Yk(n=Ny(),e){const t=Kh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=rS("database");s&&Xk(t,...s)}return t}function Xk(n,e,t,s={}){n=Vt(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&oi(s,r.repoInfo_.emulatorOptions))return;es("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&es('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new qi(qi.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:oS(s.mockUserToken,n.app.options.projectId);o=new qi(a)}mi(e)&&(Iy(e),Cy("Database",!0)),qk(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(n){Gb(_i),ai(new ks("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return zk(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),An(Eg,Tg,n),An(Eg,Tg,"esm2017")}Gn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Gn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Jk();const Zk={apiKey:"AIzaSyB_wdk6lL6ptOFLwrSlzuubO48vs29sCL4",authDomain:"t-d-j-8ed4a.firebaseapp.com",databaseURL:"https://t-d-j-8ed4a-default-rtdb.firebaseio.com",projectId:"t-d-j-8ed4a",storageBucket:"t-d-j-8ed4a.appspot.com",messagingSenderId:"241528140530",appId:"1:241528140530:web:c026da2f853579c576d66b",measurementId:"G-Q7ZSNKF9HQ"},FE=ky(Zk),Ki=pv(FE),or=Yk(FE),eN={class:"phone-frame"},tN={class:"input-group"},nN={class:"input-group toggle-password"},sN=["type"],iN={key:0,class:"input-group toggle-password"},rN=["type"],oN={key:1,class:"input-group"},aN=["value"],lN={class:"error"},cN={__name:"LoginView",setup(n){const e=mt(""),t=mt(""),s=mt(""),i=mt(!0),r=mt(!1),o=mt(!1),a=mt(""),c=mt("Loading..."),u=async()=>{if(i.value=!i.value,a.value="",!i.value){const f=await VE(fi(Lo(or),"users")),g=f.exists()?Object.keys(f.val()).length:0;c.value=`TDJ${(g+1).toString().padStart(3,"0")}`}},d=async()=>{if(a.value="",!/^\d{10}$/.test(e.value)){a.value="Phone must be exactly 10 digits.";return}if(!/^\d{6}$/.test(t.value)){a.value="Password must be exactly 6 digits.";return}const f=`${e.value}@tdj.com`;if(i.value)try{await DR(Ki,f,t.value),alert("Login successful!"),window.location.href="/dashboard"}catch(g){a.value=g.message}else{if(t.value!==s.value){a.value="Passwords do not match.";return}try{await OR(Ki,f,t.value);const g=Ki.currentUser.uid;await Od(Lo(or,"users/"+g),{phone:e.value,referralCode:c.value}),alert(`Registered! Your referral code is ${c.value}`),window.location.href="/dashboard"}catch(g){a.value=g.message}}};return(f,g)=>(We(),Ke("div",eN,[x("h2",null,Ue(i.value?"Login":"Register"),1),x("div",tN,[g[5]||(g[5]=x("label",null,"Phone Number (10 digits):",-1)),eo(x("input",{"onUpdate:modelValue":g[0]||(g[0]=_=>e.value=_),maxlength:"10",placeholder:"e.g. 0712345678"},null,512),[[ol,e.value]])]),x("div",nN,[g[6]||(g[6]=x("label",null,"Password (6 digits):",-1)),eo(x("input",{type:r.value?"text":"password","onUpdate:modelValue":g[1]||(g[1]=_=>t.value=_),maxlength:"6",placeholder:"6-digit password"},null,8,sN),[[ku,t.value]]),x("i",{onClick:g[2]||(g[2]=_=>r.value=!r.value)},"👁️")]),i.value?Ru("",!0):(We(),Ke("div",iN,[g[7]||(g[7]=x("label",null,"Repeat Password:",-1)),eo(x("input",{type:o.value?"text":"password","onUpdate:modelValue":g[3]||(g[3]=_=>s.value=_),maxlength:"6",placeholder:"Repeat password"},null,8,rN),[[ku,s.value]]),x("i",{onClick:g[4]||(g[4]=_=>o.value=!o.value)},"👁️")])),i.value?Ru("",!0):(We(),Ke("div",oN,[g[8]||(g[8]=x("label",null,"Your Referral Code:",-1)),x("input",{value:c.value,disabled:""},null,8,aN)])),x("button",{onClick:d},Ue(i.value?"Login":"Register"),1),x("p",lN,Ue(a.value),1),x("p",{onClick:u,class:"toggle-link"},Ue(i.value?"No account? Register here":"Already have an account? Login here"),1)]))}},uN=Bs(cN,[["__scopeId","data-v-9c51f80a"]]),hN={class:"phone-frame"},dN={class:"content-area"},fN={__name:"DashboardView",setup(n){const e=Yl();function t(c){c==="Intern"?e.push("/intern"):alert(`${c} package is not yet available.`)}function s(){alert("Opening soon, stay put.")}function i(){e.push("/dashboard")}function r(){e.push("/withdraw")}function o(){e.push("/deposit")}function a(){e.push("/mine")}return(c,u)=>(We(),Ke("div",hN,[x("div",dN,[u[12]||(u[12]=x("div",{class:"top-banner"},[x("div",{class:"logo"},"Dentsu")],-1)),u[13]||(u[13]=x("div",{class:"hero-image"},"[Group Image Placeholder]",-1)),u[14]||(u[14]=x("div",{class:"section-title"},"Main Actions",-1)),x("div",{class:"grid-actions"},[x("div",{class:"action-btn",onClick:o},"Deposit"),x("div",{class:"action-btn",onClick:r},"Withdraw"),u[4]||(u[4]=x("div",{class:"action-btn"},"Income",-1))]),u[15]||(u[15]=nC('<div class="section-title" data-v-785472d6>Information</div><div class="grid-actions" data-v-785472d6><div class="action-btn" data-v-785472d6>News</div><div class="action-btn" data-v-785472d6>About Us</div><div class="action-btn" data-v-785472d6>Cash Gift</div></div><div class="grid-actions" data-v-785472d6><div class="action-btn" data-v-785472d6>Lucky Wheel</div><div class="action-btn" data-v-785472d6>Invite</div><div class="action-btn" data-v-785472d6>Manual</div></div><div class="section-title" data-v-785472d6>Packages</div>',4)),x("div",{class:"package-row intern",onClick:u[0]||(u[0]=d=>t("Intern"))},u[5]||(u[5]=[x("div",null,"Intern Package",-1),x("div",null,[Ie("3 days, 3 tasks/day"),x("br"),Ie("50 per task"),x("br"),Ie("Total: 150 daily, 450 total")],-1)])),x("div",{class:"package-row silver",onClick:u[1]||(u[1]=d=>t("Silver"))},u[6]||(u[6]=[x("div",null,"Silver Package",-1),x("div",null,[Ie("365 days, 4 tasks/day"),x("br"),Ie("25 per task"),x("br"),Ie("KES 3000 Package"),x("br"),Ie("Total: 100 daily")],-1)])),x("div",{class:"package-row gold",onClick:u[2]||(u[2]=d=>t("Gold"))},u[7]||(u[7]=[x("div",null,"Gold Package",-1),x("div",null,[Ie("365 days, 5 tasks/day"),x("br"),Ie("60 per task"),x("br"),Ie("KES 8300 Package")],-1)])),x("div",{class:"package-row diamond",onClick:u[3]||(u[3]=d=>t("Diamond"))},u[8]||(u[8]=[x("div",null,"Diamond Package",-1),x("div",null,[Ie("365 days, 10 tasks/day"),x("br"),Ie("100 per task"),x("br"),Ie("KES 25000 Package")],-1)])),x("div",{class:"package-row platinum",onClick:s},u[9]||(u[9]=[x("div",null,"Platinum Package",-1),x("div",null,[Ie("365 days, 15 tasks/day"),x("br"),Ie("170 per task"),x("br"),Ie("KES 65000 Package")],-1)])),x("div",{class:"package-row elite",onClick:s},u[10]||(u[10]=[x("div",null,"Elite Package",-1),x("div",null,[Ie("365 days, 20 tasks/day"),x("br"),Ie("300 per task"),x("br"),Ie("KES 170000 Package")],-1)])),x("div",{class:"package-row master",onClick:s},u[11]||(u[11]=[x("div",null,"Master Package",-1),x("div",null,[Ie("365 days, 25 tasks/day"),x("br"),Ie("500 per task"),x("br"),Ie("KES 370000 Package")],-1)])),u[16]||(u[16]=x("div",{class:"membership"},[Ie("Membership Level: "),x("span",{style:{color:"gold"}},"Intern")],-1))]),x("div",{class:"bottom-nav"},[x("div",{class:"nav-item",onClick:i},"Home"),u[17]||(u[17]=x("div",{class:"nav-item"},"Wealth",-1)),u[18]||(u[18]=x("div",{class:"nav-item"},"Team",-1)),u[19]||(u[19]=x("div",{class:"nav-item"},"Task",-1)),x("div",{class:"nav-item",onClick:a},"Mine")])]))}},pN=Bs(fN,[["__scopeId","data-v-785472d6"]]),gN={class:"phone-frame"},mN={class:"content-area"},_N={class:"amount-options"},yN=["onClick"],vN={class:"password-input"},EN={class:"password-wrapper"},TN=["type"],wN={key:0,class:"status"},IN={__name:"WithdrawView",setup(n){const e=Yl(),t=[500,1e3,2e3,5e3,1e4,2e4,5e4,1e5],s=mt(null),i=mt(""),r=mt(!1),o=mt(""),a=g=>{s.value=g},c=()=>{r.value=!r.value},u=async()=>{if(!s.value){o.value="Please select an amount.";return}if(!/^\d{6}$/.test(i.value)){o.value="Transaction password must be exactly 6 digits.";return}const g=Ki.currentUser.uid;try{const _=Bk(Lo(or,`withdrawals/${g}`));await Od(_,{amount:s.value,status:"Processing",timestamp:Date.now()}),o.value="Successful withdrawal request sent...",setTimeout(()=>{o.value=""},2e3)}catch(_){o.value="Error processing withdrawal.",console.error(_)}},d=()=>{e.push("/withdraw-history")},f=()=>{e.push("/dashboard")};return(g,_)=>(We(),Ke("div",gN,[x("div",{class:"top-banner"},[x("span",{class:"back-icon",onClick:f},"←"),_[1]||(_[1]=Ie(" Withdraw Funds ")),x("span",{class:"history-icon",onClick:d},"🕒")]),x("div",mN,[x("div",_N,[(We(),Ke(Ot,null,Yi(t,S=>x("button",{key:S,class:$l({selected:s.value===S}),onClick:k=>a(S)}," KES "+Ue(S),11,yN)),64))]),x("div",vN,[_[2]||(_[2]=x("label",{for:"fundPassword"},"Transaction Password (6 digits):",-1)),x("div",EN,[eo(x("input",{id:"fundPassword",type:r.value?"text":"password","onUpdate:modelValue":_[0]||(_[0]=S=>i.value=S),maxlength:"6",inputmode:"numeric",pattern:"\\d*",placeholder:"Enter 6-digit password"},null,8,TN),[[ku,i.value]]),x("span",{class:"eye-icon",onClick:c},"👁️")])]),x("button",{class:"submit-btn",onClick:u},"Submit"),o.value?(We(),Ke("p",wN,Ue(o.value),1)):Ru("",!0)])]))}},CN=Bs(IN,[["__scopeId","data-v-967b60d0"]]),SN={class:"phone-frame"},AN={key:0,class:"history-list"},RN={key:1,class:"no-records"},bN={__name:"WithdrawHistoryView",setup(n){const e=Yl(),t=mt([]),s=()=>{var u;const a=(u=Ki.currentUser)==null?void 0:u.uid;if(!a)return;const c=Lo(or,`withdrawals/${a}`);Hk(c,d=>{const f=d.val();f?t.value=Object.values(f):t.value=[]})},i=a=>new Date(a).toLocaleDateString(),r=a=>new Date(a).toLocaleTimeString(),o=()=>{e.push("/withdraw")};return zo(s),(a,c)=>(We(),Ke("div",SN,[x("div",{class:"top-banner"},[x("span",{class:"back-icon",onClick:o},"←"),c[0]||(c[0]=Ie(" Withdrawal History "))]),t.value.length?(We(),Ke("div",AN,[(We(!0),Ke(Ot,null,Yi(t.value,(u,d)=>(We(),Ke("div",{key:d,class:"history-item"},[x("p",null,[c[1]||(c[1]=x("strong",null,"Amount:",-1)),Ie(" KES "+Ue(u.amount),1)]),x("p",null,[c[2]||(c[2]=x("strong",null,"Status:",-1)),Ie(" "+Ue(u.status),1)]),x("p",null,[c[3]||(c[3]=x("strong",null,"Date:",-1)),Ie(" "+Ue(i(u.timestamp)),1)]),x("p",null,[c[4]||(c[4]=x("strong",null,"Time:",-1)),Ie(" "+Ue(r(u.timestamp)),1)])]))),128))])):(We(),Ke("p",RN,"No withdrawals found."))]))}},PN=Bs(bN,[["__scopeId","data-v-5314e144"]]),kN={class:"phone-frame"},NN={class:"content-area"},xN={key:0},ON=["onClick"],DN=["onClick"],MN={key:1},LN={__name:"AdminView",setup(n){const e=mt([]);zo(()=>{const s=JSON.parse(localStorage.getItem("withdrawHistory")||"[]");e.value=s.filter(i=>i.status==="Processing")});const t=(s,i)=>{const r=JSON.parse(localStorage.getItem("withdrawHistory")||"[]"),o=e.value[s],a=r.findIndex(c=>c.amount===o.amount&&c.status==="Processing"&&c.date===o.date);a!==-1&&(r[a].status=i,localStorage.setItem("withdrawHistory",JSON.stringify(r)),e.value.splice(s,1))};return(s,i)=>(We(),Ke("div",kN,[i[4]||(i[4]=x("div",{class:"top-banner"}," Admin Panel ",-1)),x("div",NN,[e.value.length?(We(),Ke("div",xN,[(We(!0),Ke(Ot,null,Yi(e.value,(r,o)=>(We(),Ke("div",{key:o,class:"history-item"},[x("p",null,[i[0]||(i[0]=x("strong",null,"Amount:",-1)),Ie(" KES "+Ue(r.amount),1)]),x("p",null,[i[1]||(i[1]=x("strong",null,"Status:",-1)),Ie(" "+Ue(r.status),1)]),x("p",null,[i[2]||(i[2]=x("strong",null,"Date:",-1)),Ie(" "+Ue(r.date),1)]),x("button",{onClick:a=>t(o,"Successful")},"✅ Approve",8,ON),x("button",{onClick:a=>t(o,"Rejected")},"❌ Reject",8,DN)]))),128))])):(We(),Ke("div",MN,i[3]||(i[3]=[x("p",null,"No pending withdrawals.",-1)])))])]))}},VN=Bs(LN,[["__scopeId","data-v-51792c1a"]]),FN={class:"phone-frame"},UN={class:"amount"},BN={class:"input-group"},$N={class:"preset-buttons"},HN=["onClick"],jN={class:"payment-methods"},WN={class:"details"},qN={class:"sub"},zN={__name:"DepositView",setup(n){const e=mt(0),t=mt(""),s=[100,500,2900,8e3,1e4,23e3,65e3,1e5],i=[{name:"jypay",sub:"jypay"},{name:"ycpay",sub:"ycpay"},{name:"inpay",sub:"inpay"},{name:"wkpay",sub:"wkpay"}];return zo(async()=>{var o;const r=(o=Ki.currentUser)==null?void 0:o.uid;if(r){const a=await VE(Lo(or,"users/"+r+"/balance"));a.exists()&&(e.value=a.val())}}),(r,o)=>(We(),Ke("div",FN,[o[3]||(o[3]=x("h2",null,"Deposit",-1)),o[4]||(o[4]=x("p",{class:"balance"},"Account Balance (KES)",-1)),x("p",UN,"KES "+Ue(e.value),1),x("div",BN,[o[1]||(o[1]=x("label",null,"Deposit Amount (KES):",-1)),eo(x("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),placeholder:"Enter amount"},null,512),[[ol,t.value]])]),x("div",$N,[(We(),Ke(Ot,null,Yi(s,a=>x("button",{key:a,onClick:c=>t.value=a},Ue(a),9,HN)),64))]),x("div",jN,[(We(),Ke(Ot,null,Yi(i,a=>x("div",{class:"method",key:a.name},[o[2]||(o[2]=x("div",{class:"icon"},"💳",-1)),x("div",WN,[x("p",null,Ue(a.name),1),x("p",qN,Ue(a.sub),1)])])),64))]),o[5]||(o[5]=x("p",{class:"notice"}," The deposit will be automatically credited within 1-3 minutes after recharging. If not received, please contact support. ",-1))]))}},KN=Bs(zN,[["__scopeId","data-v-cbc06e8d"]]);var tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As,UE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(C,A,b){for(var T=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)T[Pt-2]=arguments[Pt];return v.prototype[A].apply(C,T)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,w){w||(w=0);var C=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)C[A]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(A=0;16>A;++A)C[A]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],A=I.g[2];var b=I.g[3],T=v+(b^w&(A^b))+C[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=b+(A^v&(w^A))+C[1]+3905402710&4294967295,b=v+(T<<12&4294967295|T>>>20),T=A+(w^b&(v^w))+C[2]+606105819&4294967295,A=b+(T<<17&4294967295|T>>>15),T=w+(v^A&(b^v))+C[3]+3250441966&4294967295,w=A+(T<<22&4294967295|T>>>10),T=v+(b^w&(A^b))+C[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=b+(A^v&(w^A))+C[5]+1200080426&4294967295,b=v+(T<<12&4294967295|T>>>20),T=A+(w^b&(v^w))+C[6]+2821735955&4294967295,A=b+(T<<17&4294967295|T>>>15),T=w+(v^A&(b^v))+C[7]+4249261313&4294967295,w=A+(T<<22&4294967295|T>>>10),T=v+(b^w&(A^b))+C[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=b+(A^v&(w^A))+C[9]+2336552879&4294967295,b=v+(T<<12&4294967295|T>>>20),T=A+(w^b&(v^w))+C[10]+4294925233&4294967295,A=b+(T<<17&4294967295|T>>>15),T=w+(v^A&(b^v))+C[11]+2304563134&4294967295,w=A+(T<<22&4294967295|T>>>10),T=v+(b^w&(A^b))+C[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=b+(A^v&(w^A))+C[13]+4254626195&4294967295,b=v+(T<<12&4294967295|T>>>20),T=A+(w^b&(v^w))+C[14]+2792965006&4294967295,A=b+(T<<17&4294967295|T>>>15),T=w+(v^A&(b^v))+C[15]+1236535329&4294967295,w=A+(T<<22&4294967295|T>>>10),T=v+(A^b&(w^A))+C[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=b+(w^A&(v^w))+C[6]+3225465664&4294967295,b=v+(T<<9&4294967295|T>>>23),T=A+(v^w&(b^v))+C[11]+643717713&4294967295,A=b+(T<<14&4294967295|T>>>18),T=w+(b^v&(A^b))+C[0]+3921069994&4294967295,w=A+(T<<20&4294967295|T>>>12),T=v+(A^b&(w^A))+C[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=b+(w^A&(v^w))+C[10]+38016083&4294967295,b=v+(T<<9&4294967295|T>>>23),T=A+(v^w&(b^v))+C[15]+3634488961&4294967295,A=b+(T<<14&4294967295|T>>>18),T=w+(b^v&(A^b))+C[4]+3889429448&4294967295,w=A+(T<<20&4294967295|T>>>12),T=v+(A^b&(w^A))+C[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=b+(w^A&(v^w))+C[14]+3275163606&4294967295,b=v+(T<<9&4294967295|T>>>23),T=A+(v^w&(b^v))+C[3]+4107603335&4294967295,A=b+(T<<14&4294967295|T>>>18),T=w+(b^v&(A^b))+C[8]+1163531501&4294967295,w=A+(T<<20&4294967295|T>>>12),T=v+(A^b&(w^A))+C[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=b+(w^A&(v^w))+C[2]+4243563512&4294967295,b=v+(T<<9&4294967295|T>>>23),T=A+(v^w&(b^v))+C[7]+1735328473&4294967295,A=b+(T<<14&4294967295|T>>>18),T=w+(b^v&(A^b))+C[12]+2368359562&4294967295,w=A+(T<<20&4294967295|T>>>12),T=v+(w^A^b)+C[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=b+(v^w^A)+C[8]+2272392833&4294967295,b=v+(T<<11&4294967295|T>>>21),T=A+(b^v^w)+C[11]+1839030562&4294967295,A=b+(T<<16&4294967295|T>>>16),T=w+(A^b^v)+C[14]+4259657740&4294967295,w=A+(T<<23&4294967295|T>>>9),T=v+(w^A^b)+C[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=b+(v^w^A)+C[4]+1272893353&4294967295,b=v+(T<<11&4294967295|T>>>21),T=A+(b^v^w)+C[7]+4139469664&4294967295,A=b+(T<<16&4294967295|T>>>16),T=w+(A^b^v)+C[10]+3200236656&4294967295,w=A+(T<<23&4294967295|T>>>9),T=v+(w^A^b)+C[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=b+(v^w^A)+C[0]+3936430074&4294967295,b=v+(T<<11&4294967295|T>>>21),T=A+(b^v^w)+C[3]+3572445317&4294967295,A=b+(T<<16&4294967295|T>>>16),T=w+(A^b^v)+C[6]+76029189&4294967295,w=A+(T<<23&4294967295|T>>>9),T=v+(w^A^b)+C[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=b+(v^w^A)+C[12]+3873151461&4294967295,b=v+(T<<11&4294967295|T>>>21),T=A+(b^v^w)+C[15]+530742520&4294967295,A=b+(T<<16&4294967295|T>>>16),T=w+(A^b^v)+C[2]+3299628645&4294967295,w=A+(T<<23&4294967295|T>>>9),T=v+(A^(w|~b))+C[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=b+(w^(v|~A))+C[7]+1126891415&4294967295,b=v+(T<<10&4294967295|T>>>22),T=A+(v^(b|~w))+C[14]+2878612391&4294967295,A=b+(T<<15&4294967295|T>>>17),T=w+(b^(A|~v))+C[5]+4237533241&4294967295,w=A+(T<<21&4294967295|T>>>11),T=v+(A^(w|~b))+C[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=b+(w^(v|~A))+C[3]+2399980690&4294967295,b=v+(T<<10&4294967295|T>>>22),T=A+(v^(b|~w))+C[10]+4293915773&4294967295,A=b+(T<<15&4294967295|T>>>17),T=w+(b^(A|~v))+C[1]+2240044497&4294967295,w=A+(T<<21&4294967295|T>>>11),T=v+(A^(w|~b))+C[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=b+(w^(v|~A))+C[15]+4264355552&4294967295,b=v+(T<<10&4294967295|T>>>22),T=A+(v^(b|~w))+C[6]+2734768916&4294967295,A=b+(T<<15&4294967295|T>>>17),T=w+(b^(A|~v))+C[13]+1309151649&4294967295,w=A+(T<<21&4294967295|T>>>11),T=v+(A^(w|~b))+C[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=b+(w^(v|~A))+C[11]+3174756917&4294967295,b=v+(T<<10&4294967295|T>>>22),T=A+(v^(b|~w))+C[2]+718787259&4294967295,A=b+(T<<15&4294967295|T>>>17),T=w+(b^(A|~v))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+b&4294967295}s.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,C=this.B,A=this.h,b=0;b<v;){if(A==0)for(;b<=w;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<v;)if(C[A++]=I.charCodeAt(b++),A==this.blockSize){i(this,C),A=0;break}}else for(;b<v;)if(C[A++]=I[b++],A==this.blockSize){i(this,C),A=0;break}}this.h=A,this.o+=v},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var C=0;32>C;C+=8)I[w++]=this.g[v]>>>C&255;return I};function r(I,v){var w=a;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function o(I,v){this.h=v;for(var w=[],C=!0,A=I.length-1;0<=A;A--){var b=I[A]|0;C&&b==v||(w[A]=b,C=!1)}this.g=w}var a={};function c(I){return-128<=I&&128>I?r(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return O(u(-I));for(var v=[],w=1,C=0;I>=w;C++)v[C]=I/w|0,w*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return O(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(v,8)),C=f,A=0;A<I.length;A+=8){var b=Math.min(8,I.length-A),T=parseInt(I.substring(A,A+b),v);8>b?(b=u(Math.pow(v,b)),C=C.j(b).add(u(T))):(C=C.j(w),C=C.add(u(T)))}return C}var f=c(0),g=c(1),_=c(16777216);n=o.prototype,n.m=function(){if(k(this))return-O(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var C=this.i(w);I+=(0<=C?C:4294967296+C)*v,v*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(k(this))return"-"+O(this).toString(I);for(var v=u(Math.pow(I,6)),w=this,C="";;){var A=q(w,v).g;w=j(w,A.j(v));var b=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=A,S(w))return b+C;for(;6>b.length;)b="0"+b;C=b+C}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=j(this,I),k(I)?-1:S(I)?0:1};function O(I){for(var v=I.g.length,w=[],C=0;C<v;C++)w[C]=~I.g[C];return new o(w,~I.h).add(g)}n.abs=function(){return k(this)?O(this):this},n.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],C=0,A=0;A<=v;A++){var b=C+(this.i(A)&65535)+(I.i(A)&65535),T=(b>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);C=T>>>16,b&=65535,T&=65535,w[A]=T<<16|b}return new o(w,w[w.length-1]&-2147483648?-1:0)};function j(I,v){return I.add(O(v))}n.j=function(I){if(S(this)||S(I))return f;if(k(this))return k(I)?O(this).j(O(I)):O(O(this).j(I));if(k(I))return O(this.j(O(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],C=0;C<2*v;C++)w[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<I.g.length;A++){var b=this.i(C)>>>16,T=this.i(C)&65535,Pt=I.i(A)>>>16,Zt=I.i(A)&65535;w[2*C+2*A]+=T*Zt,U(w,2*C+2*A),w[2*C+2*A+1]+=b*Zt,U(w,2*C+2*A+1),w[2*C+2*A+1]+=T*Pt,U(w,2*C+2*A+1),w[2*C+2*A+2]+=b*Pt,U(w,2*C+2*A+2)}for(C=0;C<v;C++)w[C]=w[2*C+1]<<16|w[2*C];for(C=v;C<2*v;C++)w[C]=0;return new o(w,0)};function U(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function $(I,v){this.g=I,this.h=v}function q(I,v){if(S(v))throw Error("division by zero");if(S(I))return new $(f,f);if(k(I))return v=q(O(I),v),new $(O(v.g),O(v.h));if(k(v))return v=q(I,O(v)),new $(O(v.g),v.h);if(30<I.g.length){if(k(I)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,C=v;0>=C.l(I);)w=pe(w),C=pe(C);var A=ge(w,1),b=ge(C,1);for(C=ge(C,2),w=ge(w,2);!S(C);){var T=b.add(C);0>=T.l(I)&&(A=A.add(w),b=T),C=ge(C,1),w=ge(w,1)}return v=j(I,A.j(v)),new $(A,v)}for(A=f;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),C=Math.ceil(Math.log(w)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),b=u(w),T=b.j(v);k(T)||0<T.l(I);)w-=C,b=u(w),T=b.j(v);S(b)&&(b=g),A=A.add(b),I=j(I,T)}return new $(A,I)}n.A=function(I){return q(this,I).h},n.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],C=0;C<v;C++)w[C]=this.i(C)&I.i(C);return new o(w,this.h&I.h)},n.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],C=0;C<v;C++)w[C]=this.i(C)|I.i(C);return new o(w,this.h|I.h)},n.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],C=0;C<v;C++)w[C]=this.i(C)^I.i(C);return new o(w,this.h^I.h)};function pe(I){for(var v=I.g.length+1,w=[],C=0;C<v;C++)w[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(w,I.h)}function ge(I,v){var w=v>>5;v%=32;for(var C=I.g.length-w,A=[],b=0;b<C;b++)A[b]=0<v?I.i(b+w)>>>v|I.i(b+w+1)<<32-v:I.i(b+w);return new o(A,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,UE=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,As=o}).apply(typeof tm<"u"?tm:typeof self<"u"?self:typeof window<"u"?window:{});var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var BE,Gr,$E,Ga,nh,HE,jE,WE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof xa=="object"&&xa];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function i(l,h){if(h)e:{var p=s;l=l.split(".");for(var m=0;m<l.length-1;m++){var R=l[m];if(!(R in p))break e;p=p[R]}l=l[l.length-1],m=p[l],h=h(m),h!=m&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function r(l,h){l instanceof String&&(l+="");var p=0,m=!1,R={next:function(){if(!m&&p<l.length){var N=p++;return{value:h(N,l[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(l){return l||function(){return r(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function u(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),l.apply(h,R)}}return function(){return l.apply(h,arguments)}}function g(l,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function _(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),l.apply(this,m)}}function S(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(m,R,N){for(var K=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)K[Me-2]=arguments[Me];return h.prototype[R].apply(m,K)}}function k(l){const h=l.length;if(0<h){const p=Array(h);for(let m=0;m<h;m++)p[m]=l[m];return p}return[]}function O(l,h){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const R=l.length||0,N=m.length||0;l.length=R+N;for(let K=0;K<N;K++)l[R+K]=m[K]}else l.push(m)}}class j{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(l){return/^[\s\xa0]*$/.test(l)}function $(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function q(l){return q[" "](l),l}q[" "]=function(){};var pe=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ge(l,h,p){for(const m in l)h.call(p,l[m],m,l)}function I(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function v(l){const h={};for(const p in l)h[p]=l[p];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let p,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(p in m)l[p]=m[p];for(let N=0;N<w.length;N++)p=w[N],Object.prototype.hasOwnProperty.call(m,p)&&(l[p]=m[p])}}function A(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function b(l){a.setTimeout(()=>{throw l},0)}function T(){var l=qt;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Pt{constructor(){this.h=this.g=null}add(h,p){const m=Zt.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var Zt=new j(()=>new et,l=>l.reset());class et{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Te=!1,qt=new Pt,on=()=>{const l=a.Promise.resolve(void 0);Ce=()=>{l.then(en)}};var en=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(p){b(p)}var h=Zt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}Te=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var rs=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function _n(l,h){if(ze.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,m=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(pe){e:{try{q(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ft[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&_n.aa.h.call(this)}}S(_n,ze);var Ft={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function X(l,h,p,m,R){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=R,this.key=++J,this.da=this.fa=!1}function ee(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function we(l){this.src=l,this.g={},this.h=0}we.prototype.add=function(l,h,p,m,R){var N=l.toString();l=this.g[N],l||(l=this.g[N]=[],this.h++);var K=y(l,h,m,R);return-1<K?(h=l[K],p||(h.fa=!1)):(h=new X(h,this.src,N,!!m,R),h.fa=p,l.push(h)),h};function De(l,h){var p=h.type;if(p in l.g){var m=l.g[p],R=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=R)&&Array.prototype.splice.call(m,R,1),N&&(ee(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function y(l,h,p,m){for(var R=0;R<l.length;++R){var N=l[R];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==m)return R}return-1}var E="closure_lm_"+(1e6*Math.random()|0),P={};function V(l,h,p,m,R){if(m&&m.once)return G(l,h,p,m,R);if(Array.isArray(h)){for(var N=0;N<h.length;N++)V(l,h[N],p,m,R);return null}return p=oe(p),l&&l[M]?l.K(h,p,u(m)?!!m.capture:!!m,R):D(l,h,p,!1,m,R)}function D(l,h,p,m,R,N){if(!h)throw Error("Invalid event type");var K=u(R)?!!R.capture:!!R,Me=Q(l);if(Me||(l[E]=Me=new we(l)),p=Me.add(h,p,m,K,N),p.proxy)return p;if(m=F(),p.proxy=m,m.src=l,m.listener=p,l.addEventListener)rs||(R=K),R===void 0&&(R=!1),l.addEventListener(h.toString(),m,R);else if(l.attachEvent)l.attachEvent(B(h.toString()),m);else if(l.addListener&&l.removeListener)l.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function F(){function l(p){return h.call(l.src,l.listener,p)}const h=ne;return l}function G(l,h,p,m,R){if(Array.isArray(h)){for(var N=0;N<h.length;N++)G(l,h[N],p,m,R);return null}return p=oe(p),l&&l[M]?l.L(h,p,u(m)?!!m.capture:!!m,R):D(l,h,p,!0,m,R)}function z(l,h,p,m,R){if(Array.isArray(h))for(var N=0;N<h.length;N++)z(l,h[N],p,m,R);else m=u(m)?!!m.capture:!!m,p=oe(p),l&&l[M]?(l=l.i,h=String(h).toString(),h in l.g&&(N=l.g[h],p=y(N,p,m,R),-1<p&&(ee(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete l.g[h],l.h--)))):l&&(l=Q(l))&&(h=l.g[h.toString()],l=-1,h&&(l=y(h,p,m,R)),(p=-1<l?h[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[M])De(h.i,l);else{var p=l.type,m=l.proxy;h.removeEventListener?h.removeEventListener(p,m,l.capture):h.detachEvent?h.detachEvent(B(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=Q(h))?(De(p,l),p.h==0&&(p.src=null,h[E]=null)):ee(l)}}}function B(l){return l in P?P[l]:P[l]="on"+l}function ne(l,h){if(l.da)l=!0;else{h=new _n(h,this);var p=l.listener,m=l.ha||l.src;l.fa&&W(l),l=p.call(m,h)}return l}function Q(l){return l=l[E],l instanceof we?l:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(l){return typeof l=="function"?l:(l[te]||(l[te]=function(h){return l.handleEvent(h)}),l[te])}function se(){qe.call(this),this.i=new we(this),this.M=this,this.F=null}S(se,qe),se.prototype[M]=!0,se.prototype.removeEventListener=function(l,h,p,m){z(this,l,h,p,m)};function de(l,h){var p,m=l.F;if(m)for(p=[];m;m=m.F)p.push(m);if(l=l.M,m=h.type||h,typeof h=="string")h=new ze(h,l);else if(h instanceof ze)h.target=h.target||l;else{var R=h;h=new ze(m,l),C(h,R)}if(R=!0,p)for(var N=p.length-1;0<=N;N--){var K=h.g=p[N];R=Se(K,m,!0,h)&&R}if(K=h.g=l,R=Se(K,m,!0,h)&&R,R=Se(K,m,!1,h)&&R,p)for(N=0;N<p.length;N++)K=h.g=p[N],R=Se(K,m,!1,h)&&R}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],m=0;m<p.length;m++)ee(p[m]);delete l.g[h],l.h--}}this.F=null},se.prototype.K=function(l,h,p,m){return this.i.add(String(l),h,!1,p,m)},se.prototype.L=function(l,h,p,m){return this.i.add(String(l),h,!0,p,m)};function Se(l,h,p,m){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,N=0;N<h.length;++N){var K=h[N];if(K&&!K.da&&K.capture==p){var Me=K.listener,gt=K.ha||K.src;K.fa&&De(l.i,K),R=Me.call(gt,m)!==!1&&R}}return R&&!m.defaultPrevented}function ft(l,h,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function st(l){l.g=ft(()=>{l.g=null,l.i&&(l.i=!1,st(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class zt extends qe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function it(l){qe.call(this),this.h=l,this.g={}}S(it,qe);var os=[];function Ir(l){ge(l.g,function(h,p){this.g.hasOwnProperty(p)&&W(h)},l),l.g={}}it.prototype.N=function(){it.aa.N.call(this),Ir(this)},it.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pt=a.JSON.stringify,tn=a.JSON.parse,ca=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Sc(){}Sc.prototype.h=null;function sf(l){return l.h||(l.h=l.i())}function rf(){}var Cr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ac(){ze.call(this,"d")}S(Ac,ze);function Rc(){ze.call(this,"c")}S(Rc,ze);var js={},of=null;function ua(){return of=of||new se}js.La="serverreachability";function af(l){ze.call(this,js.La,l)}S(af,ze);function Sr(l){const h=ua();de(h,new af(h))}js.STAT_EVENT="statevent";function lf(l,h){ze.call(this,js.STAT_EVENT,l),this.stat=h}S(lf,ze);function kt(l){const h=ua();de(h,new lf(h,l))}js.Ma="timingevent";function cf(l,h){ze.call(this,js.Ma,l),this.size=h}S(cf,ze);function Ar(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Rr(){this.g=!0}Rr.prototype.xa=function(){this.g=!1};function QT(l,h,p,m,R,N){l.info(function(){if(l.g)if(N)for(var K="",Me=N.split("&"),gt=0;gt<Me.length;gt++){var Pe=Me[gt].split("=");if(1<Pe.length){var Et=Pe[0];Pe=Pe[1];var Tt=Et.split("_");K=2<=Tt.length&&Tt[1]=="type"?K+(Et+"="+Pe+"&"):K+(Et+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+h+`
`+p+`
`+K})}function YT(l,h,p,m,R,N,K){l.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+h+`
`+p+`
`+N+" "+K})}function Ti(l,h,p,m){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+JT(l,p)+(m?" "+m:"")})}function XT(l,h){l.info(function(){return"TIMEOUT: "+h})}Rr.prototype.info=function(){};function JT(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var m=p[l];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<R.length;K++)R[K]=""}}}}return pt(p)}catch{return h}}var ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bc;function da(){}S(da,Sc),da.prototype.g=function(){return new XMLHttpRequest},da.prototype.i=function(){return{}},bc=new da;function as(l,h,p,m){this.j=l,this.i=h,this.l=p,this.R=m||1,this.U=new it(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hf}function hf(){this.i=null,this.g="",this.h=!1}var df={},Pc={};function kc(l,h,p){l.L=1,l.v=ma(Ln(h)),l.m=p,l.P=!0,ff(l,null)}function ff(l,h){l.F=Date.now(),fa(l),l.A=Ln(l.v);var p=l.A,m=l.R;Array.isArray(m)||(m=[String(m)]),Rf(p.i,"t",m),l.C=0,p=l.j.J,l.h=new hf,l.g=qf(l.j,p?h:null,!l.m),0<l.O&&(l.M=new zt(g(l.Y,l,l.g),l.O)),h=l.U,p=l.g,m=l.ca;var R="readystatechange";Array.isArray(R)||(R&&(os[0]=R.toString()),R=os);for(var N=0;N<R.length;N++){var K=V(p,R[N],m||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Sr(),QT(l.i,l.u,l.A,l.l,l.R,l.m)}as.prototype.ca=function(l){l=l.target;const h=this.M;h&&Vn(l)==3?h.j():this.Y(l)},as.prototype.Y=function(l){try{if(l==this.g)e:{const Tt=Vn(this.g);var h=this.g.Ba();const Ci=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Df(this.g)))){this.J||Tt!=4||h==7||(h==8||0>=Ci?Sr(3):Sr(2)),Nc(this);var p=this.g.Z();this.X=p;t:if(pf(this)){var m=Df(this.g);l="";var R=m.length,N=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ws(this),br(this);var K="";break t}this.h.i=new a.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,l+=this.h.i.decode(m[h],{stream:!(N&&h==R-1)});m.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,YT(this.i,this.u,this.A,this.l,this.R,Tt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,gt=this.g;if((Me=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Me)){var Pe=Me;break t}}Pe=null}if(p=Pe)Ti(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xc(this,p);else{this.o=!1,this.s=3,kt(12),Ws(this),br(this);break e}}if(this.P){p=!0;let an;for(;!this.J&&this.C<K.length;)if(an=ZT(this,K),an==Pc){Tt==4&&(this.s=4,kt(14),p=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(an==df){this.s=4,kt(15),Ti(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else Ti(this.i,this.l,an,null),xc(this,an);if(pf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||K.length!=0||this.h.h||(this.s=1,kt(16),p=!1),this.o=this.o&&p,!p)Ti(this.i,this.l,K,"[Invalid Chunked Response]"),Ws(this),br(this);else if(0<K.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Fc(Et),Et.M=!0,kt(11))}}else Ti(this.i,this.l,K,null),xc(this,K);Tt==4&&Ws(this),this.o&&!this.J&&(Tt==4?$f(this.j,this):(this.o=!1,fa(this)))}else mw(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Ws(this),br(this)}}}catch{}finally{}};function pf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ZT(l,h){var p=l.C,m=h.indexOf(`
`,p);return m==-1?Pc:(p=Number(h.substring(p,m)),isNaN(p)?df:(m+=1,m+p>h.length?Pc:(h=h.slice(m,m+p),l.C=m+p,h)))}as.prototype.cancel=function(){this.J=!0,Ws(this)};function fa(l){l.S=Date.now()+l.I,gf(l,l.I)}function gf(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ar(g(l.ba,l),h)}function Nc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}as.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(XT(this.i,this.A),this.L!=2&&(Sr(),kt(17)),Ws(this),this.s=2,br(this)):gf(this,this.S-l)};function br(l){l.j.G==0||l.J||$f(l.j,l)}function Ws(l){Nc(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Ir(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function xc(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Oc(p.h,l))){if(!l.K&&Oc(p.h,l)&&p.G==3){try{var m=p.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)wa(p),Ea(p);else break e;Vc(p),kt(18)}}else p.za=R[1],0<p.za-p.T&&37500>R[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ar(g(p.Za,p),6e3));if(1>=yf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else zs(p,11)}else if((l.K||p.g==l)&&wa(p),!U(h))for(R=p.Da.g.parse(h),h=0;h<R.length;h++){let Pe=R[h];if(p.T=Pe[0],Pe=Pe[1],p.G==2)if(Pe[0]=="c"){p.K=Pe[1],p.ia=Pe[2];const Et=Pe[3];Et!=null&&(p.la=Et,p.j.info("VER="+p.la));const Tt=Pe[4];Tt!=null&&(p.Aa=Tt,p.j.info("SVER="+p.Aa));const Ci=Pe[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(m=1.5*Ci,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const an=l.g;if(an){const Ca=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var N=m.h;N.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Dc(N,N.h),N.h=null))}if(m.D){const Uc=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(m.ya=Uc,He(m.I,m.D,Uc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var K=l;if(m.qa=Wf(m,m.J?m.ia:null,m.W),K.K){vf(m.h,K);var Me=K,gt=m.L;gt&&(Me.I=gt),Me.B&&(Nc(Me),fa(Me)),m.g=K}else Uf(m);0<p.i.length&&Ta(p)}else Pe[0]!="stop"&&Pe[0]!="close"||zs(p,7);else p.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?zs(p,7):Lc(p):Pe[0]!="noop"&&p.l&&p.l.ta(Pe),p.v=0)}}Sr(4)}catch{}}var ew=class{constructor(l,h){this.g=l,this.map=h}};function mf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _f(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function yf(l){return l.h?1:l.g?l.g.size:0}function Oc(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Dc(l,h){l.g?l.g.add(h):l.h=h}function vf(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}mf.prototype.cancel=function(){if(this.i=Ef(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ef(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return k(l.i)}function tw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],p=l.length,m=0;m<p;m++)h.push(l[m]);return h}h=[],p=0;for(m in l)h[p++]=l[m];return h}function nw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const m in l)h[p++]=m;return h}}}function Tf(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=nw(l),m=tw(l),R=m.length,N=0;N<R;N++)h.call(void 0,m[N],p&&p[N],l)}var wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sw(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var m=l[p].indexOf("="),R=null;if(0<=m){var N=l[p].substring(0,m);R=l[p].substring(m+1)}else N=l[p];h(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function qs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof qs){this.h=l.h,pa(this,l.j),this.o=l.o,this.g=l.g,ga(this,l.s),this.l=l.l;var h=l.i,p=new Nr;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),If(this,p),this.m=l.m}else l&&(h=String(l).match(wf))?(this.h=!1,pa(this,h[1]||"",!0),this.o=Pr(h[2]||""),this.g=Pr(h[3]||"",!0),ga(this,h[4]),this.l=Pr(h[5]||"",!0),If(this,h[6]||"",!0),this.m=Pr(h[7]||"")):(this.h=!1,this.i=new Nr(null,this.h))}qs.prototype.toString=function(){var l=[],h=this.j;h&&l.push(kr(h,Cf,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(kr(h,Cf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(kr(p,p.charAt(0)=="/"?ow:rw,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",kr(p,lw)),l.join("")};function Ln(l){return new qs(l)}function pa(l,h,p){l.j=p?Pr(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function ga(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function If(l,h,p){h instanceof Nr?(l.i=h,cw(l.i,l.h)):(p||(h=kr(h,aw)),l.i=new Nr(h,l.h))}function He(l,h,p){l.i.set(h,p)}function ma(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pr(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function kr(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,iw),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function iw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Cf=/[#\/\?@]/g,rw=/[#\?:]/g,ow=/[#\?]/g,aw=/[#\?@]/g,lw=/#/g;function Nr(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function ls(l){l.g||(l.g=new Map,l.h=0,l.i&&sw(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=Nr.prototype,n.add=function(l,h){ls(this),this.i=null,l=wi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Sf(l,h){ls(l),h=wi(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Af(l,h){return ls(l),h=wi(l,h),l.g.has(h)}n.forEach=function(l,h){ls(this),this.g.forEach(function(p,m){p.forEach(function(R){l.call(h,R,m,this)},this)},this)},n.na=function(){ls(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let m=0;m<h.length;m++){const R=l[m];for(let N=0;N<R.length;N++)p.push(h[m])}return p},n.V=function(l){ls(this);let h=[];if(typeof l=="string")Af(this,l)&&(h=h.concat(this.g.get(wi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},n.set=function(l,h){return ls(this),this.i=null,l=wi(this,l),Af(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},n.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Rf(l,h,p){Sf(l,h),0<p.length&&(l.i=null,l.g.set(wi(l,h),k(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var m=h[p];const N=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var R=N;K[m]!==""&&(R+="="+encodeURIComponent(String(K[m]))),l.push(R)}}return this.i=l.join("&")};function wi(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function cw(l,h){h&&!l.j&&(ls(l),l.i=null,l.g.forEach(function(p,m){var R=m.toLowerCase();m!=R&&(Sf(this,m),Rf(this,R,p))},l)),l.j=h}function uw(l,h){const p=new Rr;if(a.Image){const m=new Image;m.onload=_(cs,p,"TestLoadImage: loaded",!0,h,m),m.onerror=_(cs,p,"TestLoadImage: error",!1,h,m),m.onabort=_(cs,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(cs,p,"TestLoadImage: timeout",!1,h,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=l}else h(!1)}function hw(l,h){const p=new Rr,m=new AbortController,R=setTimeout(()=>{m.abort(),cs(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:m.signal}).then(N=>{clearTimeout(R),N.ok?cs(p,"TestPingServer: ok",!0,h):cs(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),cs(p,"TestPingServer: error",!1,h)})}function cs(l,h,p,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(p)}catch{}}function dw(){this.g=new ca}function fw(l,h,p){const m=p||"";try{Tf(l,function(R,N){let K=R;u(R)&&(K=pt(R)),h.push(m+N+"="+encodeURIComponent(K))})}catch(R){throw h.push(m+"type="+encodeURIComponent("_badmap")),R}}function _a(l){this.l=l.Ub||null,this.j=l.eb||!1}S(_a,Sc),_a.prototype.g=function(){return new ya(this.l,this.j)},_a.prototype.i=function(l){return function(){return l}}({});function ya(l,h){se.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ya,se),n=ya.prototype,n.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Or(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function bf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?xr(this):Or(this),this.readyState==3&&bf(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,xr(this))},n.Qa=function(l){this.g&&(this.response=l,xr(this))},n.ga=function(){this.g&&xr(this)};function xr(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Or(l)}n.setRequestHeader=function(l,h){this.u.append(l,h)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Or(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Pf(l){let h="";return ge(l,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Mc(l,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=Pf(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):He(l,h,p))}function Qe(l){se.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Qe,se);var pw=/^https?$/i,gw=["POST","PUT"];n=Qe.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bc.g(),this.v=this.o?sf(this.o):sf(bc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(N){kf(this,N);return}if(l=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)p.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())p.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),R=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gw,h,void 0))||m||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of p)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Of(this),this.u=!0,this.g.send(l),this.u=!1}catch(N){kf(this,N)}};function kf(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Nf(l),va(l)}function Nf(l){l.A||(l.A=!0,de(l,"complete"),de(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,de(this,"complete"),de(this,"abort"),va(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xf(this):this.bb())},n.bb=function(){xf(this)};function xf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Vn(l)!=4||l.Z()!=2)){if(l.u&&Vn(l)==4)ft(l.Ea,0,l);else if(de(l,"readystatechange"),Vn(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=K===0){var R=String(l.D).match(wf)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),m=!pw.test(R?R.toLowerCase():"")}p=m}if(p)de(l,"complete"),de(l,"success");else{l.m=6;try{var N=2<Vn(l)?l.g.statusText:""}catch{N=""}l.l=N+" ["+l.Z()+"]",Nf(l)}}finally{va(l)}}}}function va(l,h){if(l.g){Of(l);const p=l.g,m=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||de(l,"ready");try{p.onreadystatechange=m}catch{}}}function Of(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Vn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),tn(h)}};function Df(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function mw(l){const h={};l=(l.g&&2<=Vn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<l.length;m++){if(U(l[m]))continue;var p=A(l[m]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[R]||[];h[R]=N,N.push(p)}I(h,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dr(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Mf(l){this.Aa=0,this.i=[],this.j=new Rr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Dr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Dr("baseRetryDelayMs",5e3,l),this.cb=Dr("retryDelaySeedMs",1e4,l),this.Wa=Dr("forwardChannelMaxRetries",2,l),this.wa=Dr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new mf(l&&l.concurrentRequestLimit),this.Da=new dw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mf.prototype,n.la=8,n.G=1,n.connect=function(l,h,p,m){kt(0),this.W=l,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=Wf(this,null,this.W),Ta(this)};function Lc(l){if(Lf(l),l.G==3){var h=l.U++,p=Ln(l.I);if(He(p,"SID",l.K),He(p,"RID",h),He(p,"TYPE","terminate"),Mr(l,p),h=new as(l,l.j,h),h.L=2,h.v=ma(Ln(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=qf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),fa(h)}jf(l)}function Ea(l){l.g&&(Fc(l),l.g.cancel(),l.g=null)}function Lf(l){Ea(l),l.u&&(a.clearTimeout(l.u),l.u=null),wa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ta(l){if(!_f(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ce||on(),Te||(Ce(),Te=!0),qt.add(h,l),l.B=0}}function _w(l,h){return yf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ar(g(l.Ga,l,h),Hf(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const R=new as(this,this.j,l);let N=this.o;if(this.S&&(N?(N=v(N),C(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Ff(this,R,h),p=Ln(this.I),He(p,"RID",l),He(p,"CVER",22),this.D&&He(p,"X-HTTP-Session-Id",this.D),Mr(this,p),N&&(this.O?h="headers="+encodeURIComponent(String(Pf(N)))+"&"+h:this.m&&Mc(p,this.m,N)),Dc(this.h,R),this.Ua&&He(p,"TYPE","init"),this.P?(He(p,"$req",h),He(p,"SID","null"),R.T=!0,kc(R,p,null)):kc(R,p,h),this.G=2}}else this.G==3&&(l?Vf(this,l):this.i.length==0||_f(this.h)||Vf(this))};function Vf(l,h){var p;h?p=h.l:p=l.U++;const m=Ln(l.I);He(m,"SID",l.K),He(m,"RID",p),He(m,"AID",l.T),Mr(l,m),l.m&&l.o&&Mc(m,l.m,l.o),p=new as(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Ff(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Dc(l.h,p),kc(p,m,h)}function Mr(l,h){l.H&&ge(l.H,function(p,m){He(h,m,p)}),l.l&&Tf({},function(p,m){He(h,m,p)})}function Ff(l,h,p){p=Math.min(l.i.length,p);var m=l.l?g(l.l.Na,l.l,l):null;e:{var R=l.i;let N=-1;for(;;){const K=["count="+p];N==-1?0<p?(N=R[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Me=!0;for(let gt=0;gt<p;gt++){let Pe=R[gt].g;const Et=R[gt].map;if(Pe-=N,0>Pe)N=Math.max(0,R[gt].g-100),Me=!1;else try{fw(Et,K,"req"+Pe+"_")}catch{m&&m(Et)}}if(Me){m=K.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,m}function Uf(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ce||on(),Te||(Ce(),Te=!0),qt.add(h,l),l.v=0}}function Vc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ar(g(l.Fa,l),Hf(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Bf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ar(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Ea(this),Bf(this))};function Fc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Bf(l){l.g=new as(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Ln(l.qa);He(h,"RID","rpc"),He(h,"SID",l.K),He(h,"AID",l.T),He(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(h,"TO",l.ja),He(h,"TYPE","xmlhttp"),Mr(l,h),l.m&&l.o&&Mc(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=ma(Ln(h)),p.m=null,p.P=!0,ff(p,l)}n.Za=function(){this.C!=null&&(this.C=null,Ea(this),Vc(this),kt(19))};function wa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function $f(l,h){var p=null;if(l.g==h){wa(l),Fc(l),l.g=null;var m=2}else if(Oc(l.h,h))p=h.D,vf(l.h,h),m=1;else return;if(l.G!=0){if(h.o)if(m==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var R=l.B;m=ua(),de(m,new cf(m,p)),Ta(l)}else Uf(l);else if(R=h.s,R==3||R==0&&0<h.X||!(m==1&&_w(l,h)||m==2&&Vc(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),R){case 1:zs(l,5);break;case 4:zs(l,10);break;case 3:zs(l,6);break;default:zs(l,2)}}}function Hf(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function zs(l,h){if(l.j.info("Error code "+h),h==2){var p=g(l.fb,l),m=l.Xa;const R=!m;m=new qs(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||pa(m,"https"),ma(m),R?uw(m.toString(),p):hw(m.toString(),p)}else kt(2);l.G=0,l.l&&l.l.sa(h),jf(l),Lf(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function jf(l){if(l.G=0,l.ka=[],l.l){const h=Ef(l.h);(h.length!=0||l.i.length!=0)&&(O(l.ka,h),O(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function Wf(l,h,p){var m=p instanceof qs?Ln(p):new qs(p);if(m.g!="")h&&(m.g=h+"."+m.g),ga(m,m.s);else{var R=a.location;m=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var N=new qs(null);m&&pa(N,m),h&&(N.g=h),R&&ga(N,R),p&&(N.l=p),m=N}return p=l.D,h=l.ya,p&&h&&He(m,p,h),He(m,"VER",l.la),Mr(l,m),m}function qf(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Qe(new _a({eb:p})):new Qe(l.pa),h.Ha(l.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zf(){}n=zf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ia(){}Ia.prototype.g=function(l,h){return new Kt(l,h)};function Kt(l,h){se.call(this),this.g=new Mf(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!U(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Ii(this)}S(Kt,se),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Lc(this.g)},Kt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=pt(l),l=p);h.i.push(new ew(h.Ya++,l)),h.G==3&&Ta(h)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Lc(this.g),delete this.g,Kt.aa.N.call(this)};function Kf(l){Ac.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}S(Kf,Ac);function Gf(){Rc.call(this),this.status=1}S(Gf,Rc);function Ii(l){this.g=l}S(Ii,zf),Ii.prototype.ua=function(){de(this.g,"a")},Ii.prototype.ta=function(l){de(this.g,new Kf(l))},Ii.prototype.sa=function(l){de(this.g,new Gf)},Ii.prototype.ra=function(){de(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,WE=function(){return new Ia},jE=function(){return ua()},HE=js,nh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ha.NO_ERROR=0,ha.TIMEOUT=8,ha.HTTP_ERROR=6,Ga=ha,uf.COMPLETE="complete",$E=uf,rf.EventType=Cr,Cr.OPEN="a",Cr.CLOSE="b",Cr.ERROR="c",Cr.MESSAGE="d",se.prototype.listen=se.prototype.K,Gr=rf,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,BE=Qe}).apply(typeof xa<"u"?xa:typeof self<"u"?self:typeof window<"u"?window:{});const nm="@firebase/firestore",sm="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new ec("@firebase/firestore");function Pi(){return pi.logLevel}function Z(n,...e){if(pi.logLevel<=ve.DEBUG){const t=e.map(Md);pi.debug(`Firestore (${Er}): ${n}`,...t)}}function ts(n,...e){if(pi.logLevel<=ve.ERROR){const t=e.map(Md);pi.error(`Firestore (${Er}): ${n}`,...t)}}function Vo(n,...e){if(pi.logLevel<=ve.WARN){const t=e.map(Md);pi.warn(`Firestore (${Er}): ${n}`,...t)}}function Md(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,qE(n,s,t)}function qE(n,e,t){let s=`FIRESTORE (${Er}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ts(s),new Error(s)}function Ge(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||qE(e,i,s)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends ss{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Bt.UNAUTHENTICATED))}shutdown(){}}class YN{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ge(this.o===void 0,42304);let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new si;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new si,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new si)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string",31837,{l:s}),new GN(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class XN{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class JN{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new XN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class im{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ge(this.o===void 0,3512);const s=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new im(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ge(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new im(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=ex(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function _e(n,e){return n<e?-1:n>e?1:0}function sh(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),i=e.codePointAt(t);if(s!==i){if(s<128&&i<128)return _e(s,i);{const r=zE(),o=tx(r.encode(rm(n,t)),r.encode(rm(e,t)));return o!==0?o:_e(s,i)}}t+=s>65535?2:1}return _e(n.length,e.length)}function rm(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function tx(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return _e(n[t],e[t]);return _e(n.length,e.length)}function ar(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=-62135596800,am=1e6;class jt{static now(){return jt.fromMillis(Date.now())}static fromDate(e){return jt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*am);return new jt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<om)throw new ce(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/am}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-om;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new jt(0,0))}static max(){return new ue(new jt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="__name__";class En{constructor(e,t,s){t===void 0?t=0:t>e.length&&fe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&fe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=En.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return _e(e.length,t.length)}static compareSegments(e,t){const s=En.isNumericId(e),i=En.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?En.extractNumericId(e).compare(En.extractNumericId(t)):sh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return As.fromString(e.substring(4,e.length-2))}}class Ye extends En{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const nx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends En{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return nx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lm}static keyField(){return new Dt([lm])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ce(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ce(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ce(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ce(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ye.fromString(e))}static fromName(e){return new re(Ye.fromString(e).popFirst(5))}static empty(){return new re(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ye(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=-1;function sx(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(s===1e9?new jt(t+1,0):new jt(t,s));return new Ds(i,re.empty(),e)}function ix(n){return new Ds(n.readTime,n.key,Fo)}class Ds{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ds(ue.min(),re.empty(),Fo)}static max(){return new Ds(ue.max(),re.empty(),Fo)}}function rx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=re.comparator(n.documentKey,e.documentKey),t!==0?t:_e(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ax{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==ox)throw n;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,s)=>{t(e)})}static reject(e){return new L((t,s)=>{s(e)})}static waitFor(e){return new L((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=L.resolve(!1);for(const s of e)t=t.next(i=>i?L.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new L((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++a,a===r&&s(o)},d=>i(d))}})}static doWhile(e,t){return new L((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function lx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Tr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}gc.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=-1;function mc(n){return n==null}function ih(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="";function ux(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cm(e)),e=hx(n.get(t),e);return cm(e)}function hx(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case GE:t+="";break;default:t+=r}}return t}function cm(n){return n+GE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ra(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dx(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||_t.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}}class Oa{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??_t.RED,this.left=i??_t.EMPTY,this.right=r??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new _t(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new _t(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hm(this.data.getIterator())}getIteratorFrom(e){return new hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new lt(this.comparator);return t.data=e,t}}class hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new vs([])}unionWith(e){let t=new lt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new vs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ar(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new QE("Invalid base64 string: "+r):r}}(e);return new vt(t)}static fromUint8Array(e){const t=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const fx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ms(n){if(Ge(!!n,39018),typeof n=="string"){let e=0;const t=fx.exec(n);if(Ge(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Je(n.seconds),nanos:Je(n.nanos)}}function Je(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ls(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="server_timestamp",XE="__type__",JE="__previous_value__",ZE="__local_write_time__";function Ld(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[XE])===null||t===void 0?void 0:t.stringValue)===YE}function _c(n){const e=n.mapValue.fields[JE];return Ld(e)?_c(e):e}function Uo(n){const e=Ms(n.mapValue.fields[ZE].timestampValue);return new jt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t,s,i,r,o,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const rh="(default)";class Bo{constructor(e,t){this.projectId=e,this.database=t||rh}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===rh}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="__type__",eT="__max__",Da={mapValue:{fields:{__type__:{stringValue:eT}}}},mx="__vector__",oh="value";function Vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ld(n)?4:yx(n)?9007199254740991:_x(n)?10:11:fe(28295,{value:n})}function On(n,e){if(n===e)return!0;const t=Vs(n);if(t!==Vs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Uo(n).isEqual(Uo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ms(i.timestampValue),a=Ms(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return Ls(i.bytesValue).isEqual(Ls(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return Je(i.geoPointValue.latitude)===Je(r.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Je(i.integerValue)===Je(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Je(i.doubleValue),a=Je(r.doubleValue);return o===a?ih(o)===ih(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return ar(n.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(um(o)!==um(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!On(o[c],a[c])))return!1;return!0}(n,e);default:return fe(52216,{left:n})}}function $o(n,e){return(n.values||[]).find(t=>On(t,e))!==void 0}function lr(n,e){if(n===e)return 0;const t=Vs(n),s=Vs(e);if(t!==s)return _e(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return _e(n.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Je(r.integerValue||r.doubleValue),c=Je(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return dm(n.timestampValue,e.timestampValue);case 4:return dm(Uo(n),Uo(e));case 5:return sh(n.stringValue,e.stringValue);case 6:return function(r,o){const a=Ls(r),c=Ls(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const d=_e(a[u],c[u]);if(d!==0)return d}return _e(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const a=_e(Je(r.latitude),Je(o.latitude));return a!==0?a:_e(Je(r.longitude),Je(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fm(n.arrayValue,e.arrayValue);case 10:return function(r,o){var a,c,u,d;const f=r.fields||{},g=o.fields||{},_=(a=f[oh])===null||a===void 0?void 0:a.arrayValue,S=(c=g[oh])===null||c===void 0?void 0:c.arrayValue,k=_e(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:fm(_,S)}(n.mapValue,e.mapValue);case 11:return function(r,o){if(r===Da.mapValue&&o===Da.mapValue)return 0;if(r===Da.mapValue)return 1;if(o===Da.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const g=sh(c[f],d[f]);if(g!==0)return g;const _=lr(a[c[f]],u[d[f]]);if(_!==0)return _}return _e(c.length,d.length)}(n.mapValue,e.mapValue);default:throw fe(23264,{Pe:t})}}function dm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return _e(n,e);const t=Ms(n),s=Ms(e),i=_e(t.seconds,s.seconds);return i!==0?i:_e(t.nanos,s.nanos)}function fm(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=lr(t[i],s[i]);if(r)return r}return _e(t.length,s.length)}function cr(n){return ah(n)}function ah(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Ms(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ls(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return re.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=ah(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ah(t.fields[o])}`;return i+"}"}(n.mapValue):fe(61005,{value:n})}function Qa(n){switch(Vs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_c(n);return e?16+Qa(e):16;case 5:return 2*n.stringValue.length;case 6:return Ls(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+Qa(r),0)}(n.arrayValue);case 10:case 11:return function(s){let i=0;return ra(s.fields,(r,o)=>{i+=r.length+Qa(o)}),i}(n.mapValue);default:throw fe(13486,{value:n})}}function lh(n){return!!n&&"integerValue"in n}function Vd(n){return!!n&&"arrayValue"in n}function pm(n){return!!n&&"nullValue"in n}function gm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fu(n){return!!n&&"mapValue"in n}function _x(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[gx])===null||t===void 0?void 0:t.stringValue)===mx}function po(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ra(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=po(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=po(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===eT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=po(t)}setAll(e){let t=Dt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=po(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];fu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){ra(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new wn(po(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new St(e,0,ue.min(),ue.min(),ue.min(),wn.empty(),0)}static newFoundDocument(e,t,s,i){return new St(e,1,t,ue.min(),s,i,0)}static newNoDocument(e,t){return new St(e,2,t,ue.min(),ue.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new St(e,3,t,ue.min(),ue.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t){this.position=e,this.inclusive=t}}function mm(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=re.comparator(re.fromName(o.referenceValue),t.key):s=lr(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function _m(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!On(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t="asc"){this.field=e,this.dir=t}}function vx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{}class at extends tT{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Tx(e,t,s):t==="array-contains"?new Cx(e,s):t==="in"?new Sx(e,s):t==="not-in"?new Ax(e,s):t==="array-contains-any"?new Rx(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new wx(e,s):new Ix(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(lr(t,this.value)):t!==null&&Vs(this.value)===Vs(t)&&this.matchesComparison(lr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends tT{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Dn(e,t)}matches(e){return nT(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function nT(n){return n.op==="and"}function sT(n){return Ex(n)&&nT(n)}function Ex(n){for(const e of n.filters)if(e instanceof Dn)return!1;return!0}function ch(n){if(n instanceof at)return n.field.canonicalString()+n.op.toString()+cr(n.value);if(sT(n))return n.filters.map(e=>ch(e)).join(",");{const e=n.filters.map(t=>ch(t)).join(",");return`${n.op}(${e})`}}function iT(n,e){return n instanceof at?function(s,i){return i instanceof at&&s.op===i.op&&s.field.isEqual(i.field)&&On(s.value,i.value)}(n,e):n instanceof Dn?function(s,i){return i instanceof Dn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&iT(o,i.filters[a]),!0):!1}(n,e):void fe(19439)}function rT(n){return n instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${cr(t.value)}`}(n):n instanceof Dn?function(t){return t.op.toString()+" {"+t.getFilters().map(rT).join(" ,")+"}"}(n):"Filter"}class Tx extends at{constructor(e,t,s){super(e,t,s),this.key=re.fromName(s.referenceValue)}matches(e){const t=re.comparator(e.key,this.key);return this.matchesComparison(t)}}class wx extends at{constructor(e,t){super(e,"in",t),this.keys=oT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ix extends at{constructor(e,t){super(e,"not-in",t),this.keys=oT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>re.fromName(s.referenceValue))}class Cx extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vd(t)&&$o(t.arrayValue,this.value)}}class Sx extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$o(this.value.arrayValue,t)}}class Ax extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$o(this.value.arrayValue,t)}}class Rx extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>$o(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.Ie=null}}function ym(n,e=null,t=[],s=[],i=null,r=null,o=null){return new bx(n,e,t,s,i,r,o)}function Fd(n){const e=Re(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ch(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>cr(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>cr(s)).join(",")),e.Ie=t}return e.Ie}function Ud(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!iT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_m(n.startAt,e.startAt)&&_m(n.endAt,e.endAt)}function uh(n){return re.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Px(n,e,t,s,i,r,o,a){return new yc(n,e,t,s,i,r,o,a)}function Bd(n){return new yc(n)}function vm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kx(n){return n.collectionGroup!==null}function go(n){const e=Re(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ee.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(Dt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new Nl(r,s))}),t.has(Dt.keyField().canonicalString())||e.Ee.push(new Nl(Dt.keyField(),s))}return e.Ee}function Pn(n){const e=Re(n);return e.de||(e.de=Nx(e,go(n))),e.de}function Nx(n,e){if(n.limitType==="F")return ym(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Nl(i.field,r)});const t=n.endAt?new kl(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new kl(n.startAt.position,n.startAt.inclusive):null;return ym(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function hh(n,e,t){return new yc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vc(n,e){return Ud(Pn(n),Pn(e))&&n.limitType===e.limitType}function aT(n){return`${Fd(Pn(n))}|lt:${n.limitType}`}function ki(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>rT(i)).join(", ")}]`),mc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>cr(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>cr(i)).join(",")),`Target(${s})`}(Pn(n))}; limitType=${n.limitType})`}function Ec(n,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):re.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(const r of go(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=mm(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,go(s),i)||s.endAt&&!function(o,a,c){const u=mm(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,go(s),i))}(n,e)}function xx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lT(n){return(e,t)=>{let s=!1;for(const i of go(n)){const r=Ox(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Ox(n,e,t){const s=n.field.isKeyField()?re.comparator(e.key,t.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?lr(c,u):fe(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return fe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ra(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return dx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=new Ze(re.comparator);function Fs(){return Dx}const cT=new Ze(re.comparator);function Qr(...n){let e=cT;for(const t of n)e=e.insert(t.key,t);return e}function Mx(n){let e=cT;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ei(){return mo()}function uT(){return mo()}function mo(){return new Ei(n=>n.toString(),(n,e)=>n.isEqual(e))}const Lx=new lt(re.comparator);function be(...n){let e=Lx;for(const t of n)e=e.add(t);return e}const Vx=new lt(_e);function Fx(){return Vx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ih(e)?"-0":e}}function Bx(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this._=void 0}}function $x(n,e,t){return n instanceof dh?function(i,r){const o={fields:{[XE]:{stringValue:YE},[ZE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Ld(r)&&(r=_c(r)),r&&(o.fields[JE]=r),{mapValue:o}}(t,e):n instanceof xl?hT(n,e):n instanceof Ol?dT(n,e):function(i,r){const o=jx(i,r),a=Em(o)+Em(i.Re);return lh(o)&&lh(i.Re)?Bx(a):Ux(i.serializer,a)}(n,e)}function Hx(n,e,t){return n instanceof xl?hT(n,e):n instanceof Ol?dT(n,e):t}function jx(n,e){return n instanceof fh?function(s){return lh(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class dh extends Tc{}class xl extends Tc{constructor(e){super(),this.elements=e}}function hT(n,e){const t=fT(e);for(const s of n.elements)t.some(i=>On(i,s))||t.push(s);return{arrayValue:{values:t}}}class Ol extends Tc{constructor(e){super(),this.elements=e}}function dT(n,e){let t=fT(e);for(const s of n.elements)t=t.filter(i=>!On(i,s));return{arrayValue:{values:t}}}class fh extends Tc{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Em(n){return Je(n.integerValue||n.doubleValue)}function fT(n){return Vd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Wx(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof xl&&i instanceof xl||s instanceof Ol&&i instanceof Ol?ar(s.elements,i.elements,On):s instanceof fh&&i instanceof fh?On(s.Re,i.Re):s instanceof dh&&i instanceof dh}(n.transform,e.transform)}class ii{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $d{}function pT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zx(n.key,ii.none()):new Hd(n.key,n.data,ii.none());{const t=n.data,s=wn.empty();let i=new lt(Dt.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new wc(n.key,s,new vs(i.toArray()),ii.none())}}function qx(n,e,t){n instanceof Hd?function(i,r,o){const a=i.value.clone(),c=wm(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof wc?function(i,r,o){if(!Ya(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=wm(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(gT(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function _o(n,e,t,s){return n instanceof Hd?function(r,o,a,c){if(!Ya(r.precondition,o))return a;const u=r.value.clone(),d=Im(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof wc?function(r,o,a,c){if(!Ya(r.precondition,o))return a;const u=Im(r.fieldTransforms,c,o),d=o.data;return d.setAll(gT(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(n,e,t,s):function(r,o,a){return Ya(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Tm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&ar(s,i,(r,o)=>Wx(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hd extends $d{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wc extends $d{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function gT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function wm(n,e,t){const s=new Map;Ge(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Hx(o,a,t[i]))}return s}function Im(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,$x(r,o,e))}return s}class zx extends $d{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&qx(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=_o(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=_o(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=uT();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=pT(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),be())}isEqual(e){return this.batchId===e.batchId&&ar(this.mutations,e.mutations,(t,s)=>Tm(t,s))&&ar(this.baseMutations,e.baseMutations,(t,s)=>Tm(t,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,Ae;function mT(n){if(n===void 0)return ts("GRPC error has no .code"),Y.UNKNOWN;switch(n){case tt.OK:return Y.OK;case tt.CANCELLED:return Y.CANCELLED;case tt.UNKNOWN:return Y.UNKNOWN;case tt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case tt.INTERNAL:return Y.INTERNAL;case tt.UNAVAILABLE:return Y.UNAVAILABLE;case tt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case tt.NOT_FOUND:return Y.NOT_FOUND;case tt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case tt.ABORTED:return Y.ABORTED;case tt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case tt.DATA_LOSS:return Y.DATA_LOSS;default:return fe(39323,{code:n})}}(Ae=tt||(tt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=new As([4294967295,4294967295],0);function Cm(n){const e=zE().encode(n),t=new UE;return t.update(e),new Uint8Array(t.digest())}function Sm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new As([t,s],0),new As([i,r],0)]}class jd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Yr(`Invalid padding: ${t}`);if(s<0)throw new Yr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Yr(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Yr(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=As.fromNumber(this.pe)}we(e,t,s){let i=e.add(t.multiply(As.fromNumber(s)));return i.compare(Yx)===1&&(i=new As([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Cm(e),[s,i]=Sm(t);for(let r=0;r<this.hashCount;r++){const o=this.we(s,i,r);if(!this.be(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new jd(r,i,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const t=Cm(e),[s,i]=Sm(t);for(let r=0;r<this.hashCount;r++){const o=this.we(s,i,r);this.Se(o)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ic(ue.min(),i,new Ze(_e),Fs(),be())}}class oa{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new oa(s,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,s,i){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=i}}class _T{constructor(e,t){this.targetId=e,this.Ce=t}}class yT{constructor(e,t,s=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Am{constructor(){this.Fe=0,this.Me=Rm(),this.xe=vt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=be(),t=be(),s=be();return this.Me.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:fe(38017,{changeType:r})}}),new oa(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=Rm()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ge(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Xx{constructor(e){this.ze=e,this.je=new Map,this.He=Fs(),this.Je=Ma(),this.Ye=Ma(),this.Ze=new Ze(_e)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:fe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,s=e.Ce.count,i=this._t(t);if(i){const r=i.target;if(uh(r))if(s===0){const o=new re(r.path);this.tt(t,o,St.newNoDocument(o,ue.min()))}else Ge(s===1,20013,{expectedCount:s});else{const o=this.ut(t);if(o!==s){const a=this.ct(e),c=a?this.lt(a,e,o):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,a;try{o=Ls(s).toUint8Array()}catch(c){if(c instanceof QE)return Vo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new jd(o,i,r)}catch(c){return Vo(c instanceof Yr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.pe===0?null:a}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.tt(t,r,null),i++)}),i}It(e){const t=new Map;this.je.forEach((r,o)=>{const a=this._t(o);if(a){if(r.current&&uh(a.target)){const c=new re(a.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,St.newNoDocument(c,e))}r.Le&&(t.set(o,r.qe()),r.Qe())}});let s=be();this.Ye.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.He.forEach((r,o)=>o.setReadTime(e));const i=new Ic(e,t,this.Ze,this.He,s);return this.He=Fs(),this.Je=Ma(),this.Ye=Ma(),this.Ze=new Ze(_e),i}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Am,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new lt(_e),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new lt(_e),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||Z("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Am),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Ma(){return new Ze(re.comparator)}function Rm(){return new Ze(re.comparator)}const Jx={asc:"ASCENDING",desc:"DESCENDING"},Zx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eO={and:"AND",or:"OR"};class tO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ph(n,e){return n.useProto3Json||mc(e)?e:{value:e}}function nO(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sO(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Gi(n){return Ge(!!n,49232),ue.fromTimestamp(function(t){const s=Ms(t);return new jt(s.seconds,s.nanos)}(n))}function iO(n,e){return gh(n,e).canonicalString()}function gh(n,e){const t=function(i){return new Ye(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vT(n){const e=Ye.fromString(n);return Ge(CT(e),10190,{key:e.toString()}),e}function pu(n,e){const t=vT(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new re(TT(t))}function ET(n,e){return iO(n.databaseId,e)}function rO(n){const e=vT(n);return e.length===4?Ye.emptyPath():TT(e)}function bm(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function TT(n){return Ge(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function oO(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,d){return u.useProto3Json?(Ge(d===void 0||typeof d=="string",58123),vt.fromBase64String(d||"")):(Ge(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),vt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?Y.UNKNOWN:mT(u.code);return new ce(d,u.message||"")}(o);t=new yT(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=pu(n,s.document.name),r=Gi(s.document.updateTime),o=s.document.createTime?Gi(s.document.createTime):ue.min(),a=new wn({mapValue:{fields:s.document.fields}}),c=St.newFoundDocument(i,r,o,a),u=s.targetIds||[],d=s.removedTargetIds||[];t=new Xa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=pu(n,s.document),r=s.readTime?Gi(s.readTime):ue.min(),o=St.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=pu(n,s.document),r=s.removedTargetIds||[];t=new Xa([],r,i,null)}else{if(!("filter"in e))return fe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Qx(i,r),a=s.targetId;t=new _T(a,o)}}return t}function aO(n,e){return{documents:[ET(n,e.path)]}}function lO(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=ET(n,i);const r=function(u){if(u.length!==0)return IT(Dn.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Ni(g.field),direction:hO(g.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=ph(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:t,parent:i}}function cO(n){let e=rO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){Ge(s===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];t.where&&(r=function(f){const g=wT(f);return g instanceof Dn&&sT(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(S){return new Nl(xi(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,mc(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(f){const g=!!f.before,_=f.values||[];return new kl(_,g)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const g=!f.before,_=f.values||[];return new kl(_,g)}(t.endAt)),Px(e,i,o,r,a,"F",c,u)}function uO(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wT(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=xi(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=xi(t.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xi(t.unaryFilter.field);return at.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xi(t.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}}(n):n.fieldFilter!==void 0?function(t){return at.create(xi(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Dn.create(t.compositeFilter.filters.map(s=>wT(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe(1026)}}(t.compositeFilter.op))}(n):fe(30097,{filter:n})}function hO(n){return Jx[n]}function dO(n){return Zx[n]}function fO(n){return eO[n]}function Ni(n){return{fieldPath:n.canonicalString()}}function xi(n){return Dt.fromServerFormat(n.fieldPath)}function IT(n){return n instanceof at?function(t){if(t.op==="=="){if(gm(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NAN"}};if(pm(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gm(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NOT_NAN"}};if(pm(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ni(t.field),op:dO(t.op),value:t.value}}}(n):n instanceof Dn?function(t){const s=t.getFilters().map(i=>IT(i));return s.length===1?s[0]:{compositeFilter:{op:fO(t.op),filters:s}}}(n):fe(54877,{filter:n})}function CT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,s,i,r=ue.min(),o=ue.min(),a=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.wt=e}}function gO(n){const e=cO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(){this.Cn=new _O}addToCollectionParentIndex(e,t){return this.Cn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Ds.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Ds.min())}updateCollectionGroup(e,t,s){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class _O{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new lt(Ye.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new lt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ST=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(ST,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ur(0)}static lr(){return new ur(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="LruGarbageCollector",yO=1048576;function Nm([n,e],[t,s]){const i=_e(n,t);return i===0?_e(e,s):i}class vO{constructor(e){this.Er=e,this.buffer=new lt(Nm),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Nm(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class EO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(km,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Tr(t)?Z(km,"Ignoring IndexedDB error during garbage collection: ",t):await pc(t)}await this.mr(3e5)})}}class TO{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return L.resolve(gc.le);const s=new vO(t);return this.gr.forEachTarget(e,i=>s.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>s.Rr(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Pm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pm):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,i,r,o,a,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,t))).next(f=>(r=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Pi()<=ve.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:f})))}}function wO(n,e){return new TO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.changes=new Ei(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?L.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&_o(s.mutation,i,vs.empty(),jt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,be()).next(()=>s))}getLocalViewOfDocuments(e,t,s=be()){const i=ei();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Qr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=ei();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,be()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=Fs();const o=mo(),a=function(){return mo()}();return t.forEach((c,u)=>{const d=s.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof wc)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),_o(d.mutation,u,d.mutation.getFieldMask(),jt.now())):o.set(u.key,vs.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var f;return a.set(u,new CO(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const s=mo();let i=new Ze((o,a)=>o-a),r=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=s.get(c)||vs.empty();d=a.applyToLocalView(u,d),s.set(c,d);const f=(i.get(a.batchId)||be()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,d=c.value,f=uT();d.forEach(g=>{if(!r.has(g)){const _=pT(t.get(g),s.get(g));_!==null&&f.set(g,_),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return L.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kx(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):L.resolve(ei());let a=Fo,c=r;return o.next(u=>L.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,be())).next(d=>({batchId:a,changes:Mx(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new re(t)).next(s=>{let i=Qr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=Qr();return this.indexManager.getCollectionParents(e,r).next(a=>L.forEach(a,c=>{const u=function(f,g){return new yc(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(o=>{r.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let a=Qr();return o.forEach((c,u)=>{const d=r.get(c);d!==void 0&&_o(d.mutation,u,vs.empty(),jt.now()),Ec(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return L.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Gi(i.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:gO(i.bundledQuery),readTime:Gi(i.readTime)}}(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.overlays=new Ze(re.comparator),this.Qr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ei();return L.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.St(e,t,r)}),L.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Qr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Qr.delete(s)),L.resolve()}getOverlaysForCollection(e,t,s){const i=ei(),r=t.length+1,o=new re(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return L.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Ze((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let d=r.get(u.largestBatchId);d===null&&(d=ei(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=ei(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return L.resolve(a)}St(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Qr.get(i.largestBatchId).delete(s.key);this.Qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Gx(t,s));let r=this.Qr.get(t);r===void 0&&(r=be(),this.Qr.set(t,r)),this.Qr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.$r=new lt(ut.Ur),this.Kr=new lt(ut.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new ut(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new ut(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new re(new Ye([])),s=new ut(t,e),i=new ut(t,e+1),r=[];return this.Kr.forEachInRange([s,i],o=>{this.zr(o),r.push(o.key)}),r}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new re(new Ye([])),s=new ut(t,e),i=new ut(t,e+1);let r=be();return this.Kr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new ut(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ut{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return re.comparator(e.key,t.key)||_e(e.Zr,t.Zr)}static Wr(e,t){return _e(e.Zr,t.Zr)||re.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new lt(ut.Ur)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kx(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.Xr=this.Xr.add(new ut(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ti(s),r=i<0?0:i;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?cx:this.nr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ut(t,0),i=new ut(t,Number.POSITIVE_INFINITY),r=[];return this.Xr.forEachInRange([s,i],o=>{const a=this.ei(o.Zr);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new lt(_e);return t.forEach(i=>{const r=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([r,o],a=>{s=s.add(a.Zr)})}),L.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;re.isDocumentKey(r)||(r=r.child(""));const o=new ut(new re(r),0);let a=new lt(_e);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Zr)),!0)},o),L.resolve(this.ni(a))}ni(e){const t=[];return e.forEach(s=>{const i=this.ei(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ge(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return L.forEach(t.mutations,i=>{const r=new ut(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new ut(t,0),i=this.Xr.firstAfterOrEqual(s);return L.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.ii=e,this.docs=function(){return new Ze(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return L.resolve(s?s.document.mutableCopy():St.newInvalidDocument(t))}getEntries(e,t){let s=Fs();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():St.newInvalidDocument(i))}),L.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Fs();const o=t.path,a=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||rx(ix(d),s)<=0||(i.has(d.key)||Ec(t,d))&&(r=r.insert(d.key,d.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,s,i){fe(9500)}si(e,t){return L.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new NO(this)}getSize(e){return L.resolve(this.size)}}class NO extends IO{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(s)}),L.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.persistence=e,this.oi=new Ei(t=>Fd(t),Ud),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this._i=0,this.ai=new Wd,this.targetCount=0,this.ui=ur.cr()}forEachTarget(e,t){return this.oi.forEach((s,i)=>t(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),L.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ur(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Tr(t),L.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.oi.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.oi.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(r).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return L.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),L.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return L.resolve(s)}containsKey(e,t){return L.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,t){this.ci={},this.overlays={},this.li=new gc(0),this.hi=!1,this.hi=!0,this.Pi=new bO,this.referenceDelegate=e(this),this.Ti=new xO(this),this.indexManager=new mO,this.remoteDocumentCache=function(i){return new kO(i)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new pO(t),this.Ei=new AO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new RO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new PO(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){Z("MemoryPersistence","Starting transaction:",e);const i=new OO(this.li.next());return this.referenceDelegate.di(),s(i).next(r=>this.referenceDelegate.Ai(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ri(e,t){return L.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class OO extends ax{constructor(e){super(),this.currentSequenceNumber=e}}class qd{constructor(e){this.persistence=e,this.Vi=new Wd,this.mi=null}static fi(e){return new qd(e)}get gi(){if(this.mi)return this.mi;throw fe(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),L.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.gi.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.gi,s=>{const i=re.fromPath(s);return this.pi(e,i).next(r=>{r||t.removeEntry(i,ue.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return L.or([()=>L.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Dl{constructor(e,t){this.persistence=e,this.yi=new Ei(s=>ux(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=wO(this,t)}static fi(e,t){return new Dl(e,t)}di(){}Ai(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return L.forEach(this.yi,(s,i)=>this.Dr(e,s,i).next(r=>r?L.resolve():t(i)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.si(e,o=>this.Dr(e,o,t).next(a=>{a||(s++,r.removeEntry(o,ue.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),L.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),L.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qa(e.data.value)),t}Dr(e,t,s){return L.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return L.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.ds=s,this.As=i}static Rs(e,t){let s=be(),i=be();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new zd(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return fS()?8:lx(bt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ws(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.bs(e,t,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new DO;return this.Ss(e,t,o).next(a=>{if(r.result=a,this.fs)return this.Ds(e,t,o,a.size)})}).next(()=>r.result)}Ds(e,t,s,i){return s.documentReadCount<this.gs?(Pi()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ki(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),L.resolve()):(Pi()<=ve.DEBUG&&Z("QueryEngine","Query:",ki(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ps*i?(Pi()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ki(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(t))):L.resolve())}ws(e,t){if(vm(t))return L.resolve(null);let s=Pn(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=hh(t,null,"F"),s=Pn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=be(...r);return this.ys.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.vs(t,a);return this.Cs(t,u,o,c.readTime)?this.ws(e,hh(t,null,"F")):this.Fs(e,u,t,c)}))})))}bs(e,t,s,i){return vm(t)||i.isEqual(ue.min())?L.resolve(null):this.ys.getDocuments(e,s).next(r=>{const o=this.vs(t,r);return this.Cs(t,o,s,i)?L.resolve(null):(Pi()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(t)),this.Fs(e,o,t,sx(i,Fo)).next(a=>a))})}vs(e,t){let s=new lt(lT(e));return t.forEach((i,r)=>{Ec(e,r)&&(s=s.add(r))}),s}Cs(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,s){return Pi()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ki(t)),this.ys.getDocumentsMatchingQuery(e,t,Ds.min(),s)}Fs(e,t,s,i){return this.ys.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="LocalStore",LO=3e8;class VO{constructor(e,t,s,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new Ze(_e),this.Os=new Ei(r=>Fd(r),Ud),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SO(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function FO(n,e,t,s){return new VO(n,e,t,s)}async function RT(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=be();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(s,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:a}))})})}function bT(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function UO(n,e){const t=Re(n),s=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const a=[];e.targetChanges.forEach((d,f)=>{const g=i.get(f);if(!g)return;a.push(t.Ti.removeMatchingKeys(r,d.removedDocuments,f).next(()=>t.Ti.addMatchingKeys(r,d.addedDocuments,f)));let _=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(vt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,s)),i=i.insert(f,_),function(k,O,j){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=LO?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,_,d)&&a.push(t.Ti.updateTargetData(r,_))});let c=Fs(),u=be();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,d))}),a.push(BO(r,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!s.isEqual(ue.min())){const d=t.Ti.getLastRemoteSnapshotVersion(r).next(f=>t.Ti.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(d)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.xs=i,r))}function BO(n,e,t){let s=be(),i=be();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=Fs();return t.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Z(Kd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:i}})}function $O(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Ti.getTargetData(s,e).next(r=>r?(i=r,L.resolve(i)):t.Ti.allocateTargetId(s).next(o=>(i=new Es(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.xs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function mh(n,e,t){const s=Re(n),i=s.xs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Tr(o))throw o;Z(Kd,`Failed to update sequence numbers for target ${e}: ${o}`)}s.xs=s.xs.remove(e),s.Os.delete(i.target)}function xm(n,e,t){const s=Re(n);let i=ue.min(),r=be();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=Re(c),g=f.Os.get(d);return g!==void 0?L.resolve(f.xs.get(g)):f.Ti.getTargetData(u,d)}(s,o,Pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ms.getDocumentsMatchingQuery(o,e,t?i:ue.min(),t?r:be())).next(a=>(HO(s,xx(e),a),{documents:a,$s:r})))}function HO(n,e,t){let s=n.Ns.get(e)||ue.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ns.set(e,s)}class Om{constructor(){this.activeTargetIds=Fx()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jO{constructor(){this.xo=new Om,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Om,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="ConnectivityMonitor";class Mm{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(Dm,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(Dm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La=null;function _h(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="RestConnection",qO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zO{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${i}`,this.Go=this.databaseId.database===rh?`project_id=${s}`:`project_id=${s}&database_id=${i}`}zo(e,t,s,i,r){const o=_h(),a=this.jo(e,t.toUriEncodedString());Z(gu,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,i,r);const{host:u}=new URL(a),d=mi(u);return this.Jo(e,a,c,s,d).then(f=>(Z(gu,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Vo(gu,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",s),f})}Yo(e,t,s,i,r,o){return this.zo(e,t,s,i,r)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Er}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}jo(e,t){const s=qO[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class GO extends zO{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,i,r){const o=_h();return new Promise((a,c)=>{const u=new BE;u.setWithCredentials(!0),u.listenOnce($E.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ga.NO_ERROR:const f=u.getResponseJson();Z(wt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Ga.TIMEOUT:Z(wt,`RPC '${e}' ${o} timed out`),c(new ce(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const g=u.getStatus();if(Z(wt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const k=function(j){const U=j.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(U)>=0?U:Y.UNKNOWN}(S.status);c(new ce(k,S.message))}else c(new ce(Y.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ce(Y.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{Z(wt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Z(wt,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",d,s,15)})}I_(e,t,s){const i=_h(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WE(),a=jE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=r.join("");Z(wt,`Creating RPC '${e}' stream ${i}: ${d}`,c);const f=o.createWebChannel(d,c);this.E_(f);let g=!1,_=!1;const S=new KO({Zo:O=>{_?Z(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(Z(wt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),Z(wt,`RPC '${e}' stream ${i} sending:`,O),f.send(O))},Xo:()=>f.close()}),k=(O,j,U)=>{O.listen(j,$=>{try{U($)}catch(q){setTimeout(()=>{throw q},0)}})};return k(f,Gr.EventType.OPEN,()=>{_||(Z(wt,`RPC '${e}' stream ${i} transport opened.`),S.__())}),k(f,Gr.EventType.CLOSE,()=>{_||(_=!0,Z(wt,`RPC '${e}' stream ${i} transport closed`),S.u_(),this.d_(f))}),k(f,Gr.EventType.ERROR,O=>{_||(_=!0,Vo(wt,`RPC '${e}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),S.u_(new ce(Y.UNAVAILABLE,"The operation could not be completed")))}),k(f,Gr.EventType.MESSAGE,O=>{var j;if(!_){const U=O.data[0];Ge(!!U,16349);const $=U,q=($==null?void 0:$.error)||((j=$[0])===null||j===void 0?void 0:j.error);if(q){Z(wt,`RPC '${e}' stream ${i} received error:`,q);const pe=q.status;let ge=function(w){const C=tt[w];if(C!==void 0)return mT(C)}(pe),I=q.message;ge===void 0&&(ge=Y.INTERNAL,I="Unknown error status: "+pe+" with message "+q.message),_=!0,S.u_(new ce(ge,I)),f.close()}else Z(wt,`RPC '${e}' stream ${i} received:`,U),S.c_(U)}}),k(a,HE.STAT_EVENT,O=>{O.stat===nh.PROXY?Z(wt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===nh.NOPROXY&&Z(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.a_()},0),S}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function mu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(n){return new tO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t,s=1e3,i=1.5,r=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=i,this.V_=r,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),i=Math.max(0,t-s);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="PersistentStream";class QO{constructor(e,t,s,i,r,o,a,c){this.xi=e,this.S_=s,this.D_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new kT(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(ts(t.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.v_===t&&this.z_(s,i)},s=>{e(()=>{const i=new ce(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(i)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{s(()=>this.j_(i))}),this.stream.onMessage(i=>{s(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return Z(Lm,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(Z(Lm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YO extends QO{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=oO(this.serializer,e),s=function(r){if(!("targetChange"in r))return ue.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?Gi(o.readTime):ue.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=bm(this.serializer),t.addTarget=function(r,o){let a;const c=o.target;if(a=uh(c)?{documents:aO(r,c)}:{query:lO(r,c).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sO(r,o.resumeToken);const u=ph(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){a.readTime=nO(r,o.snapshotVersion.toTimestamp());const u=ph(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=uO(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=bm(this.serializer),t.removeTarget=e,this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{}class JO extends XO{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new ce(Y.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.zo(e,gh(t,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ce(Y.UNKNOWN,r.toString())})}Yo(e,t,s,i,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Yo(e,gh(t,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(Y.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class ZO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(ts(t),this.ua=!1):Z("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="RemoteStore";class eD{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=r,this.Ra.No(o=>{s.enqueueAndForget(async()=>{la(this)&&(Z(hr,"Restarting streams for network reachability change."),await async function(c){const u=Re(c);u.da.add(4),await aa(u),u.Va.set("Unknown"),u.da.delete(4),await Cc(u)}(this))})}),this.Va=new ZO(s,i)}}async function Cc(n){if(la(n))for(const e of n.Aa)await e(!0)}async function aa(n){for(const e of n.Aa)await e(!1)}function NT(n,e){const t=Re(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Xd(t)?Yd(t):wr(t).N_()&&Qd(t,e))}function Gd(n,e){const t=Re(n),s=wr(t);t.Ea.delete(e),s.N_()&&xT(t,e),t.Ea.size===0&&(s.N_()?s.k_():la(t)&&t.Va.set("Unknown"))}function Qd(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wr(n).Z_(e)}function xT(n,e){n.ma.Ke(e),wr(n).X_(e)}function Yd(n){n.ma=new Xx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),wr(n).start(),n.Va.ca()}function Xd(n){return la(n)&&!wr(n).O_()&&n.Ea.size>0}function la(n){return Re(n).da.size===0}function OT(n){n.ma=void 0}async function tD(n){n.Va.set("Online")}async function nD(n){n.Ea.forEach((e,t)=>{Qd(n,e)})}async function sD(n,e){OT(n),Xd(n)?(n.Va.Pa(e),Yd(n)):n.Va.set("Unknown")}async function iD(n,e,t){if(n.Va.set("Online"),e instanceof yT&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.Ea.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ea.delete(a),i.ma.removeTarget(a))}(n,e)}catch(s){Z(hr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Vm(n,s)}else if(e instanceof Xa?n.ma.Xe(e):e instanceof _T?n.ma.ot(e):n.ma.nt(e),!t.isEqual(ue.min()))try{const s=await bT(n.localStore);t.compareTo(s)>=0&&await function(r,o){const a=r.ma.It(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ea.get(u);d&&r.Ea.set(u,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const d=r.Ea.get(c);if(!d)return;r.Ea.set(c,d.withResumeToken(vt.EMPTY_BYTE_STRING,d.snapshotVersion)),xT(r,c);const f=new Es(d.target,c,u,d.sequenceNumber);Qd(r,f)}),r.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){Z(hr,"Failed to raise snapshot:",s),await Vm(n,s)}}async function Vm(n,e,t){if(!Tr(e))throw e;n.da.add(1),await aa(n),n.Va.set("Offline"),t||(t=()=>bT(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Z(hr,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Cc(n)})}async function Fm(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),Z(hr,"RemoteStore received new credentials");const s=la(t);t.da.add(3),await aa(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Cc(t)}async function rD(n,e){const t=Re(n);e?(t.da.delete(2),await Cc(t)):e||(t.da.add(2),await aa(t),t.Va.set("Unknown"))}function wr(n){return n.fa||(n.fa=function(t,s,i){const r=Re(t);return r.oa(),new YO(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{e_:tD.bind(null,n),n_:nD.bind(null,n),i_:sD.bind(null,n),Y_:iD.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Xd(n)?Yd(n):n.Va.set("Unknown")):(await n.fa.stop(),OT(n))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Jd(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function DT(n,e){if(ts("AsyncQueue",`${e}: ${n}`),Tr(n))return new ce(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{static emptySet(e){return new Qi(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||re.comparator(t.key,s.key):(t,s)=>re.comparator(t.key,s.key),this.keyedMap=Qr(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Qi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.pa=new Ze(re.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):fe(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class dr{constructor(e,t,s,i,r,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new dr(e,t,Qi.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class aD{constructor(){this.queries=Bm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=Re(t),r=i.queries;i.queries=Bm(),r.forEach((o,a)=>{for(const c of a.Sa)c.onError(s)})})(this,new ce(Y.ABORTED,"Firestore shutting down"))}}function Bm(){return new Ei(n=>aT(n),vc)}async function lD(n,e){const t=Re(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Da()&&e.va()&&(s=2):(r=new oD,s=e.va()?0:1);try{switch(s){case 0:r.ba=await t.onListen(i,!0);break;case 1:r.ba=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=DT(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.Sa.push(e),e.Fa(t.onlineState),r.ba&&e.Ma(r.ba)&&Zd(t)}async function cD(n,e){const t=Re(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.va()?0:1:!r.Da()&&e.va()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function uD(n,e){const t=Re(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.Sa)a.Ma(i)&&(s=!0);o.ba=i}}s&&Zd(t)}function hD(n,e,t){const s=Re(n),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(t);s.queries.delete(e)}function Zd(n){n.Ca.forEach(e=>{e.next()})}var yh,$m;($m=yh||(yh={})).xa="default",$m.Cache="cache";class dD{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new dr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=dr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==yh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.key=e}}class LT{constructor(e){this.key=e}}class fD{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=be(),this.mutatedKeys=be(),this.Za=lT(e),this.Xa=new Qi(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new Um,i=t?t.Xa:this.Xa;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const g=i.get(d),_=Ec(this.query,f)?f:null,S=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;g&&_?g.data.isEqual(_.data)?S!==k&&(s.track({type:3,doc:_}),O=!0):this.ru(g,_)||(s.track({type:2,doc:_}),O=!0,(c&&this.Za(_,c)>0||u&&this.Za(_,u)<0)&&(a=!0)):!g&&_?(s.track({type:0,doc:_}),O=!0):g&&!_&&(s.track({type:1,doc:g}),O=!0,(c||u)&&(a=!0)),O&&(_?(o=o.add(_),r=k?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{Xa:o,nu:s,Cs:a,mutatedKeys:r}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((d,f)=>function(_,S){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Vt:O})}};return k(_)-k(S)}(d.type,f.type)||this.Za(d.doc,f.doc)),this.iu(s),i=i!=null&&i;const a=t&&!i?this.su():[],c=this.Ya.size===0&&this.current&&!i?1:0,u=c!==this.Ja;return this.Ja=c,o.length!==0||u?{snapshot:new dr(this.query,e.Xa,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:a}:{ou:a}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Um,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=be(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new LT(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new MT(s))}),t}au(e){this.Ha=e.$s,this.Ya=be();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return dr.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const ef="SyncEngine";class pD{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class gD{constructor(e){this.key=e,this.cu=!1}}class mD{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new Ei(a=>aT(a),vc),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ze(re.comparator),this.Eu=new Map,this.du=new Wd,this.Au={},this.Ru=new Map,this.Vu=ur.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function _D(n,e,t=!0){const s=$T(n);let i;const r=s.hu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.uu()):i=await VT(s,e,t,!0),i}async function yD(n,e){const t=$T(n);await VT(t,e,!0,!1)}async function VT(n,e,t,s){const i=await $O(n.localStore,Pn(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let a;return s&&(a=await vD(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&NT(n.remoteStore,i),a}async function vD(n,e,t,s,i){n.fu=(f,g,_)=>async function(k,O,j,U){let $=O.view.tu(j);$.Cs&&($=await xm(k.localStore,O.query,!1).then(({documents:I})=>O.view.tu(I,$)));const q=U&&U.targetChanges.get(O.targetId),pe=U&&U.targetMismatches.get(O.targetId)!=null,ge=O.view.applyChanges($,k.isPrimaryClient,q,pe);return jm(k,O.targetId,ge.ou),ge.snapshot}(n,f,g,_);const r=await xm(n.localStore,e,!0),o=new fD(e,r.$s),a=o.tu(r.documents),c=oa.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);jm(n,t,u.ou);const d=new pD(e,t,o);return n.hu.set(e,d),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),u.snapshot}async function ED(n,e,t){const s=Re(n),i=s.hu.get(e),r=s.Pu.get(i.targetId);if(r.length>1)return s.Pu.set(i.targetId,r.filter(o=>!vc(o,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await mh(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&Gd(s.remoteStore,i.targetId),vh(s,i.targetId)}).catch(pc)):(vh(s,i.targetId),await mh(s.localStore,i.targetId,!0))}async function TD(n,e){const t=Re(n),s=t.hu.get(e),i=t.Pu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Gd(t.remoteStore,s.targetId))}async function FT(n,e){const t=Re(n);try{const s=await UO(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.Eu.get(r);o&&(Ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.cu=!0:i.modifiedDocuments.size>0?Ge(o.cu,14607):i.removedDocuments.size>0&&(Ge(o.cu,42227),o.cu=!1))}),await BT(t,s,e)}catch(s){await pc(s)}}function Hm(n,e,t){const s=Re(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.hu.forEach((r,o)=>{const a=o.view.Fa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Re(o);c.onlineState=a;let u=!1;c.queries.forEach((d,f)=>{for(const g of f.Sa)g.Fa(a)&&(u=!0)}),u&&Zd(c)}(s.eventManager,e),i.length&&s.lu.Y_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wD(n,e,t){const s=Re(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Eu.get(e),r=i&&i.key;if(r){let o=new Ze(re.comparator);o=o.insert(r,St.newNoDocument(r,ue.min()));const a=be().add(r),c=new Ic(ue.min(),new Map,new Ze(_e),o,a);await FT(s,c),s.Iu=s.Iu.remove(r),s.Eu.delete(e),tf(s)}else await mh(s.localStore,e,!1).then(()=>vh(s,e,t)).catch(pc)}function vh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Pu.get(e))n.hu.delete(s),t&&n.lu.gu(s,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(s=>{n.du.containsKey(s)||UT(n,s)})}function UT(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(Gd(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),tf(n))}function jm(n,e,t){for(const s of t)s instanceof MT?(n.du.addReference(s.key,e),ID(n,s)):s instanceof LT?(Z(ef,"Document no longer in limbo: "+s.key),n.du.removeReference(s.key,e),n.du.containsKey(s.key)||UT(n,s.key)):fe(19791,{pu:s})}function ID(n,e){const t=e.key,s=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(s)||(Z(ef,"New document in limbo: "+t),n.Tu.add(s),tf(n))}function tf(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new re(Ye.fromString(e)),s=n.Vu.next();n.Eu.set(s,new gD(t)),n.Iu=n.Iu.insert(t,s),NT(n.remoteStore,new Es(Pn(Bd(t.path)),s,"TargetPurposeLimboResolution",gc.le))}}async function BT(n,e,t){const s=Re(n),i=[],r=[],o=[];s.hu.isEmpty()||(s.hu.forEach((a,c)=>{o.push(s.fu(c,e,t).then(u=>{var d;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=zd.Rs(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.lu.Y_(i),await async function(c,u){const d=Re(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>L.forEach(u,g=>L.forEach(g.ds,_=>d.persistence.referenceDelegate.addReference(f,g.targetId,_)).next(()=>L.forEach(g.As,_=>d.persistence.referenceDelegate.removeReference(f,g.targetId,_)))))}catch(f){if(!Tr(f))throw f;Z(Kd,"Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const _=d.xs.get(g),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);d.xs=d.xs.insert(g,k)}}}(s.localStore,r))}async function CD(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){Z(ef,"User change. New user:",e.toKey());const s=await RT(t.localStore,e);t.currentUser=e,function(r,o){r.Ru.forEach(a=>{a.forEach(c=>{c.reject(new ce(Y.CANCELLED,o))})}),r.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await BT(t,s.ks)}}function SD(n,e){const t=Re(n),s=t.Eu.get(e);if(s&&s.cu)return be().add(s.key);{let i=be();const r=t.Pu.get(e);if(!r)return i;for(const o of r){const a=t.hu.get(o);i=i.unionWith(a.view.eu)}return i}}function $T(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=FT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wD.bind(null,e),e.lu.Y_=uD.bind(null,e.eventManager),e.lu.gu=hD.bind(null,e.eventManager),e}class Ml{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=PT(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return FO(this.persistence,new MO,e.initialUser,this.serializer)}Su(e){return new AT(qd.fi,this.serializer)}bu(e){return new jO}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ml.provider={build:()=>new Ml};class AD extends Ml{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Ge(this.persistence.referenceDelegate instanceof Dl,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new EO(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new AT(s=>Dl.fi(s,t),this.serializer)}}class Eh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=CD.bind(null,this.syncEngine),await rD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aD}()}createDatastore(e){const t=PT(e.databaseInfo.databaseId),s=function(r){return new GO(r)}(e.databaseInfo);return function(r,o,a,c){return new JO(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,o,a){return new eD(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Hm(this.syncEngine,t,0),function(){return Mm.C()?new Mm:new WO}())}createSyncEngine(e,t){return function(i,r,o,a,c,u,d){const f=new mD(i,r,o,a,c,u);return d&&(f.mu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const r=Re(i);Z(hr,"RemoteStore shutting down."),r.da.add(5),await aa(r),r.Ra.shutdown(),r.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Eh.provider={build:()=>new Eh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="FirestoreClient";class bD{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Bt.UNAUTHENTICATED,this.clientId=KE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{Z(Us,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Z(Us,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new si;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=DT(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function _u(n,e){n.asyncQueue.verifyOperationInProgress(),Z(Us,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await RT(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Wm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await PD(n);Z(Us,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Fm(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Fm(e.remoteStore,i)),n._onlineComponents=e}async function PD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Z(Us,"Using user provided OfflineComponentProvider");try{await _u(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===Y.FAILED_PRECONDITION||i.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Vo("Error using user provided cache. Falling back to memory cache: "+t),await _u(n,new Ml)}}else Z(Us,"Using default OfflineComponentProvider"),await _u(n,new AD(void 0));return n._offlineComponents}async function kD(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Z(Us,"Using user provided OnlineComponentProvider"),await Wm(n,n._uninitializedComponentsProvider._online)):(Z(Us,"Using default OnlineComponentProvider"),await Wm(n,new Eh))),n._onlineComponents}async function ND(n){const e=await kD(n),t=e.eventManager;return t.onListen=_D.bind(null,e.syncEngine),t.onUnlisten=ED.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=TD.bind(null,e.syncEngine),t}function xD(n,e,t={}){const s=new si;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const d=new RD({next:g=>{d.xu(),o.enqueueAndForget(()=>cD(r,f));const _=g.docs.has(a);!_&&g.fromCache?u.reject(new ce(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?u.reject(new ce(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new dD(Bd(a.path),d,{includeMetadataChanges:!0,Qa:!0});return lD(r,f)}(await ND(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(n,e,t){if(!t)throw new ce(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function DD(n,e,t,s){if(e===!0&&s===!0)throw new ce(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zm(n){if(!re.isDocumentKey(n))throw new ce(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function MD(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":fe(12329,{type:typeof n})}function Km(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=MD(n);throw new ce(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="firestore.googleapis.com",Gm=!0;class Qm{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=LD,this.ssl=Gm}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Gm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ST;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yO)throw new ce(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jT{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new QN;switch(s.type){case"firstParty":return new JN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=qm.get(t);s&&(Z("ComponentProvider","Removing Datastore"),qm.delete(t),s.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nf(this.firestore,e,this._query)}}class Qn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qn(this.firestore,e,this._key)}}class Ho extends nf{constructor(e,t,s){super(e,t,Bd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qn(this.firestore,null,new re(e))}withConverter(e){return new Ho(this.firestore,e,this._path)}}function VD(n,e,...t){if(n=Vt(n),arguments.length===1&&(e=KE.newId()),OD("doc","path",e),n instanceof jT){const s=Ye.fromString(e,...t);return zm(s),new Qn(n,null,new re(s))}{if(!(n instanceof Qn||n instanceof Ho))throw new ce(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ye.fromString(e,...t));return zm(s),new Qn(n.firestore,n instanceof Ho?n.converter:null,new re(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="AsyncQueue";class Xm{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new kT(this,"async_queue_retry"),this.rc=()=>{const s=mu();s&&Z(Ym,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=mu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=mu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new si;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Tr(e))throw e;Z(Ym,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,ts("INTERNAL UNHANDLED ERROR: ",Jm(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const i=Jd.createAndSchedule(this,e,t,s,r=>this.uc(r));return this.Zu.push(i),i}oc(){this.Xu&&fe(47125,{cc:Jm(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Jm(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class WT extends jT{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Xm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xm(e),this._firestoreClient=void 0,await e}}}function FD(n){if(n._terminated)throw new ce(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UD(n),n._firestoreClient}function UD(n){var e,t,s;const i=n._freezeSettings(),r=function(a,c,u,d){return new px(a,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,HT(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new bD(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ll(vt.fromBase64String(e))}catch(t){throw new ce(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ll(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}const HD=new RegExp("[~\\*/\\[\\]]");function jD(n,e,t){if(e.search(HD)>=0)throw Zm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qT(...e.split("."))._internalPath}catch{throw Zm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zm(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ce(Y.INVALID_ARGUMENT,a+n+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(KT("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WD extends zT{data(){return super.data()}}function KT(n,e){return typeof e=="string"?jD(n,e):e instanceof qT?e._internalPath:e._delegate._internalPath}class qD{convertValue(e,t="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ra(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertVectorValue(e){var t,s,i;const r=(i=(s=(t=e.fields)===null||t===void 0?void 0:t[oh].arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Je(o.doubleValue));return new $D(r)}convertGeoPoint(e){return new BD(Je(e.latitude),Je(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=_c(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Uo(e));default:return null}}convertTimestamp(e){const t=Ms(e);return new jt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Ge(CT(s),9688,{name:e});const i=new Bo(s.get(1),s.get(3)),r=new re(s.popFirst(5));return i.isEqual(t)||ts(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GT extends zT{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new KD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(KT("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class KD extends GT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(n){n=Km(n,Qn);const e=Km(n.firestore,WT);return xD(FD(e),n._key).then(t=>YD(e,n,t))}class QD extends qD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ll(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qn(this.firestore,null,t)}}function YD(n,e,t){const s=t.docs.get(e._key),i=new QD(n);return new GT(n,i,e._key,s,new zD(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Er=i})(_i),ai(new ks("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new WT(new YN(s.getProvider("auth-internal")),new ZN(o,s.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(u.options.projectId,d)}(o,i),o);return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),An(nm,sm,e),An(nm,sm,"esm2017")})();const XD={class:"phone-frame"},JD={class:"mine-page"},ZD={class:"profile-section"},eM={class:"user-id"},tM={class:"credit-info"},nM={class:"user-level"},sM={class:"wallet-section"},iM={class:"package-info"},rM={class:"options-list"},oM=["onClick"],aM=Vh({__name:"MineView",setup(n){const e=Yl(),t=pv(),s=t.currentUser,i=Wo({userId:"",creditScore:0,level:"",title:"",effectiveDate:"",walletBalance:0}),r=async()=>{if(!s){e.push("/");return}const c=s.uid,u=VD(or,"users",c),d=await GD(u);if(d.exists()){const f=d.data();i.userId=f.userId,i.creditScore=f.creditScore||0,i.level=f.level,i.title=f.userTitle||"",i.effectiveDate=f.effectiveDate||"",i.walletBalance=f.walletBalance||0}else console.log("No user data found.")},o=async c=>{c==="Log Out"?(await t.signOut(),e.push("/")):alert(`${c} clicked`)},a=[{text:"Settings"},{text:"Financial Records"},{text:"Transaction Records"},{text:"Download App"},{text:"Lucky Wheel"},{text:"Message"},{text:"Invite"},{text:"Language"},{text:"Log Out"}];return zo(()=>{r()}),(c,u)=>(We(),Ke("div",XD,[x("div",JD,[x("div",ZD,[u[1]||(u[1]=x("img",{class:"avatar",src:"https://via.placeholder.com/80",alt:"User Avatar"},null,-1)),x("div",eM,Ue(i.userId),1),x("div",tM,[x("span",null,[u[0]||(u[0]=Ie("Credit Score: ")),x("b",null,Ue(i.creditScore),1)]),x("span",null,Ue(i.level),1)]),x("div",nM,Ue(i.title),1)]),x("div",sM,[x("div",null,[u[2]||(u[2]=Ie("Wallet Balance (KES): ")),x("b",null,Ue(i.walletBalance.toFixed(2)),1)])]),x("div",iM,[x("span",null,Ue(i.level),1),x("span",null,"Effective Date: "+Ue(i.effectiveDate),1)]),x("div",rM,[(We(),Ke(Ot,null,Yi(a,d=>x("div",{key:d.text,class:"option-item",onClick:f=>o(d.text)},[x("span",null,Ue(d.text),1),u[3]||(u[3]=x("span",null,">",-1))],8,oM)),64))])])]))}}),lM=Bs(aM,[["__scopeId","data-v-222223f5"]]),cM=[{path:"/",name:"Login",component:uN},{path:"/dashboard",name:"Dashboard",component:pN},{path:"/withdraw",name:"Withdraw",component:CN},{path:"/withdraw-history",name:"WithdrawHistory",component:PN},{path:"/admin",name:"Admin",component:VN},{path:"/deposit",name:"Deposit",component:KN},{path:"/mine",name:"Mine",component:lM}],uM=G0({history:I0("/"),routes:cM});BC(zC).use(uM).mount("#app");
