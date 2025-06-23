(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const O_=()=>{};var Fu={};/**
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
 */const hd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},N_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],c=t[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,c=a?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,d=s>>2,p=(s&3)<<4|c>>4;let m=(c&15)<<2|h>>6,T=h&63;l||(T=64,a||(m=64)),r.push(n[d],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||h==null||p==null)throw new D_;const m=s<<2|c>>4;if(r.push(m),h!==64){const T=c<<4&240|h>>2;if(r.push(T),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class D_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V_=function(t){const e=hd(t);return fd.encodeByteArray(e,!0)},so=function(t){return V_(t).replace(/\./g,"")},dd=function(t){try{return fd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function x_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const M_=()=>x_().__FIREBASE_DEFAULTS__,L_=()=>{if(typeof process>"u"||typeof Fu>"u")return;const t=Fu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},F_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dd(t[1]);return e&&JSON.parse(e)},Lo=()=>{try{return O_()||M_()||L_()||F_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pd=t=>{var e,n;return(n=(e=Lo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},U_=t=>{const e=pd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gd=()=>{var t;return(t=Lo())===null||t===void 0?void 0:t.config},md=t=>{var e;return(e=Lo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class B_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ni(t){return t.endsWith(".cloudworkstations.dev")}async function _d(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function j_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[so(JSON.stringify(n)),so(JSON.stringify(a)),""].join(".")}const Si={};function $_(){const t={prod:[],emulator:[]};for(const e of Object.keys(Si))Si[e]?t.emulator.push(e):t.prod.push(e);return t}function H_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Uu=!1;function yd(t,e){if(typeof window>"u"||typeof document>"u"||!ni(window.location.host)||Si[t]===e||Si[t]||Uu)return;Si[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=$_().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Uu=!0,a()},m}function d(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=H_(r),T=n("text"),k=document.getElementById(T)||document.createElement("span"),V=n("learnmore"),L=document.getElementById(V)||document.createElement("a"),K=n("preprendIcon"),U=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const $=m.element;c($),d(L,V);const z=h();l(U,K),$.append(U,k,L,z),document.body.appendChild($)}s?(k.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function z_(){var t;const e=(t=Lo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function K_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function W_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G_(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Q_(){return!z_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ed(){try{return typeof indexedDB=="object"}catch{return!1}}function Id(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function X_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const J_="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=J_,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Y_(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new zt(i,c,r)}}function Y_(t,e){return t.replace(Z_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Z_=/\{\$([^}]+)}/g;function ey(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Bu(s)&&Bu(a)){if(!qn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bu(t){return t!==null&&typeof t=="object"}/**
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
 */function ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ty(t,e){const n=new ny(t,e);return n.subscribe.bind(n)}class ny{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ry(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ra),i.error===void 0&&(i.error=Ra),i.complete===void 0&&(i.complete=Ra);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ry(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ra(){}/**
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
 */const iy=1e3,sy=2,oy=4*60*60*1e3,ay=.5;function ju(t,e=iy,n=sy){const r=e*Math.pow(n,t),i=Math.round(ay*r*(Math.random()-.5)*2);return Math.min(oy,r+i)}/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class Ht{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class cy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new B_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uy(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ly(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ly(t){return t===ir?void 0:t}function uy(t){return t.instantiationMode==="EAGER"}/**
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
 */class hy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const fy={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},dy=de.INFO,py={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},gy=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=py[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=dy,this._logHandler=gy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const my=(t,e)=>e.some(n=>t instanceof n);let $u,Hu;function _y(){return $u||($u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yy(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Td=new WeakMap,nc=new WeakMap,wd=new WeakMap,Sa=new WeakMap,Uc=new WeakMap;function vy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Un(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Td.set(n,t)}).catch(()=>{}),Uc.set(e,t),e}function Ey(t){if(nc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});nc.set(t,e)}let rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Iy(t){rc=t(rc)}function Ty(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pa(this),e,...n);return wd.set(r,e.sort?e.sort():[e]),Un(r)}:yy().includes(t)?function(...e){return t.apply(Pa(this),e),Un(Td.get(this))}:function(...e){return Un(t.apply(Pa(this),e))}}function wy(t){return typeof t=="function"?Ty(t):(t instanceof IDBTransaction&&Ey(t),my(t,_y())?new Proxy(t,rc):t)}function Un(t){if(t instanceof IDBRequest)return vy(t);if(Sa.has(t))return Sa.get(t);const e=wy(t);return e!==t&&(Sa.set(t,e),Uc.set(e,t)),e}const Pa=t=>Uc.get(t);function Ad(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),c=Un(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Un(a.result),l.oldVersion,l.newVersion,Un(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Ay=["get","getKey","getAll","getAllKeys","count"],by=["put","add","delete","clear"],Ca=new Map;function qu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=by.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ay.includes(n)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&l.done]))[0]};return Ca.set(e,s),s}Iy(t=>({...t,get:(e,n,r)=>qu(e,n)||t.get(e,n,r),has:(e,n)=>!!qu(e,n)||t.has(e,n)}));/**
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
 */class Ry{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ic="@firebase/app",zu="0.13.1";/**
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
 */const vn=new Fo("@firebase/app"),Py="@firebase/app-compat",Cy="@firebase/analytics-compat",ky="@firebase/analytics",Oy="@firebase/app-check-compat",Ny="@firebase/app-check",Dy="@firebase/auth",Vy="@firebase/auth-compat",xy="@firebase/database",My="@firebase/data-connect",Ly="@firebase/database-compat",Fy="@firebase/functions",Uy="@firebase/functions-compat",By="@firebase/installations",jy="@firebase/installations-compat",$y="@firebase/messaging",Hy="@firebase/messaging-compat",qy="@firebase/performance",zy="@firebase/performance-compat",Ky="@firebase/remote-config",Wy="@firebase/remote-config-compat",Gy="@firebase/storage",Qy="@firebase/storage-compat",Xy="@firebase/firestore",Jy="@firebase/ai",Yy="@firebase/firestore-compat",Zy="firebase",ev="11.9.0";/**
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
 */const sc="[DEFAULT]",tv={[ic]:"fire-core",[Py]:"fire-core-compat",[ky]:"fire-analytics",[Cy]:"fire-analytics-compat",[Ny]:"fire-app-check",[Oy]:"fire-app-check-compat",[Dy]:"fire-auth",[Vy]:"fire-auth-compat",[xy]:"fire-rtdb",[My]:"fire-data-connect",[Ly]:"fire-rtdb-compat",[Fy]:"fire-fn",[Uy]:"fire-fn-compat",[By]:"fire-iid",[jy]:"fire-iid-compat",[$y]:"fire-fcm",[Hy]:"fire-fcm-compat",[qy]:"fire-perf",[zy]:"fire-perf-compat",[Ky]:"fire-rc",[Wy]:"fire-rc-compat",[Gy]:"fire-gcs",[Qy]:"fire-gcs-compat",[Xy]:"fire-fst",[Yy]:"fire-fst-compat",[Jy]:"fire-vertex","fire-js":"fire-js",[Zy]:"fire-js-all"};/**
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
 */const oo=new Map,nv=new Map,oc=new Map;function Ku(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(oc.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,t);for(const n of oo.values())Ku(n,t);for(const n of nv.values())Ku(n,t);return!0}function Ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const rv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new Er("app","Firebase",rv);/**
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
 */class iv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const ii=ev;function bd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=gd()),!n)throw Bn.create("no-options");const s=oo.get(i);if(s){if(qn(n,s.options)&&qn(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const a=new hy(i);for(const l of oc.values())a.addComponent(l);const c=new iv(n,r,a);return oo.set(i,c),c}function Bc(t=sc){const e=oo.get(t);if(!e&&t===sc&&gd())return bd();if(!e)throw Bn.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=tv[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(c.join(" "));return}en(new Ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sv="firebase-heartbeat-database",ov=1,Gi="firebase-heartbeat-store";let ka=null;function Rd(){return ka||(ka=Ad(sv,ov,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),ka}async function av(t){try{const n=(await Rd()).transaction(Gi),r=await n.objectStore(Gi).get(Sd(t));return await n.done,r}catch(e){if(e instanceof zt)vn.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function Wu(t,e){try{const r=(await Rd()).transaction(Gi,"readwrite");await r.objectStore(Gi).put(e,Sd(t)),await r.done}catch(n){if(n instanceof zt)vn.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(r.message)}}}function Sd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cv=1024,lv=30;class uv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>lv){const a=dv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gu(),{heartbeatsToSend:r,unsentEntries:i}=hv(this._heartbeatsCache.heartbeats),s=so(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return vn.warn(n),""}}}function Gu(){return new Date().toISOString().substring(0,10)}function hv(t,e=cv){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Qu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ed()?Id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await av(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qu(t){return so(JSON.stringify({version:2,heartbeats:t})).length}function dv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function pv(t){en(new Ht("platform-logger",e=>new Ry(e),"PRIVATE")),en(new Ht("heartbeat",e=>new uv(e),"PRIVATE")),Ot(ic,zu,t),Ot(ic,zu,"esm2017"),Ot("fire-js","")}pv("");var gv="firebase",mv="11.9.1";/**
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
 */Ot(gv,mv,"app");const Pd="@firebase/installations",jc="0.6.17";/**
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
 */const Cd=1e4,kd=`w:${jc}`,Od="FIS_v2",_v="https://firebaseinstallations.googleapis.com/v1",yv=60*60*1e3,vv="installations",Ev="Installations";/**
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
 */const Iv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fr=new Er(vv,Ev,Iv);function Nd(t){return t instanceof zt&&t.code.includes("request-failed")}/**
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
 */function Dd({projectId:t}){return`${_v}/projects/${t}/installations`}function Vd(t){return{token:t.token,requestStatus:2,expiresIn:wv(t.expiresIn),creationTime:Date.now()}}async function xd(t,e){const r=(await e.json()).error;return fr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Md({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Tv(t,{refreshToken:e}){const n=Md(t);return n.append("Authorization",Av(e)),n}async function Ld(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wv(t){return Number(t.replace("s","000"))}function Av(t){return`${Od} ${t}`}/**
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
 */async function bv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Dd(t),i=Md(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:Od,appId:t.appId,sdkVersion:kd},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Ld(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Vd(h.authToken)}}else throw await xd("Create Installation",l)}/**
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
 */function Fd(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Rv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Sv=/^[cdef][\w-]{21}$/,ac="";function Pv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Cv(t);return Sv.test(n)?n:ac}catch{return ac}}function Cv(t){return Rv(t).substr(0,22)}/**
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
 */function Uo(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ud=new Map;function Bd(t,e){const n=Uo(t);jd(n,e),kv(n,e)}function jd(t,e){const n=Ud.get(t);if(n)for(const r of n)r(e)}function kv(t,e){const n=Ov();n&&n.postMessage({key:t,fid:e}),Nv()}let ar=null;function Ov(){return!ar&&"BroadcastChannel"in self&&(ar=new BroadcastChannel("[Firebase] FID Change"),ar.onmessage=t=>{jd(t.data.key,t.data.fid)}),ar}function Nv(){Ud.size===0&&ar&&(ar.close(),ar=null)}/**
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
 */const Dv="firebase-installations-database",Vv=1,dr="firebase-installations-store";let Oa=null;function $c(){return Oa||(Oa=Ad(Dv,Vv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dr)}}})),Oa}async function ao(t,e){const n=Uo(t),i=(await $c()).transaction(dr,"readwrite"),s=i.objectStore(dr),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Bd(t,e.fid),e}async function $d(t){const e=Uo(t),r=(await $c()).transaction(dr,"readwrite");await r.objectStore(dr).delete(e),await r.done}async function Bo(t,e){const n=Uo(t),i=(await $c()).transaction(dr,"readwrite"),s=i.objectStore(dr),a=await s.get(n),c=e(a);return c===void 0?await s.delete(n):await s.put(c,n),await i.done,c&&(!a||a.fid!==c.fid)&&Bd(t,c.fid),c}/**
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
 */async function Hc(t){let e;const n=await Bo(t.appConfig,r=>{const i=xv(r),s=Mv(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ac?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xv(t){const e=t||{fid:Pv(),registrationStatus:0};return Hd(e)}function Mv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Lv(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Fv(t)}:{installationEntry:e}}async function Lv(t,e){try{const n=await bv(t,e);return ao(t.appConfig,n)}catch(n){throw Nd(n)&&n.customData.serverCode===409?await $d(t.appConfig):await ao(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Fv(t){let e=await Xu(t.appConfig);for(;e.registrationStatus===1;)await Fd(100),e=await Xu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hc(t);return r||n}return e}function Xu(t){return Bo(t,e=>{if(!e)throw fr.create("installation-not-found");return Hd(e)})}function Hd(t){return Uv(t)?{fid:t.fid,registrationStatus:0}:t}function Uv(t){return t.registrationStatus===1&&t.registrationTime+Cd<Date.now()}/**
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
 */async function Bv({appConfig:t,heartbeatServiceProvider:e},n){const r=jv(t,n),i=Tv(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:kd,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Ld(()=>fetch(r,c));if(l.ok){const h=await l.json();return Vd(h)}else throw await xd("Generate Auth Token",l)}function jv(t,{fid:e}){return`${Dd(t)}/${e}/authTokens:generate`}/**
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
 */async function qc(t,e=!1){let n;const r=await Bo(t.appConfig,s=>{if(!qd(s))throw fr.create("not-registered");const a=s.authToken;if(!e&&qv(a))return s;if(a.requestStatus===1)return n=$v(t,e),s;{if(!navigator.onLine)throw fr.create("app-offline");const c=Kv(s);return n=Hv(t,c),c}});return n?await n:r.authToken}async function $v(t,e){let n=await Ju(t.appConfig);for(;n.authToken.requestStatus===1;)await Fd(100),n=await Ju(t.appConfig);const r=n.authToken;return r.requestStatus===0?qc(t,e):r}function Ju(t){return Bo(t,e=>{if(!qd(e))throw fr.create("not-registered");const n=e.authToken;return Wv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Hv(t,e){try{const n=await Bv(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ao(t.appConfig,r),n}catch(n){if(Nd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $d(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ao(t.appConfig,r)}throw n}}function qd(t){return t!==void 0&&t.registrationStatus===2}function qv(t){return t.requestStatus===2&&!zv(t)}function zv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+yv}function Kv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Wv(t){return t.requestStatus===1&&t.requestTime+Cd<Date.now()}/**
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
 */async function Gv(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hc(e);return r?r.catch(console.error):qc(e).catch(console.error),n.fid}/**
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
 */async function Qv(t,e=!1){const n=t;return await Xv(n),(await qc(n,e)).token}async function Xv(t){const{registrationPromise:e}=await Hc(t);e&&await e}/**
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
 */function Jv(t){if(!t||!t.options)throw Na("App Configuration");if(!t.name)throw Na("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Na(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Na(t){return fr.create("missing-app-config-values",{valueName:t})}/**
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
 */const zd="installations",Yv="installations-internal",Zv=t=>{const e=t.getProvider("app").getImmediate(),n=Jv(e),r=Ir(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eE=t=>{const e=t.getProvider("app").getImmediate(),n=Ir(e,zd).getImmediate();return{getId:()=>Gv(n),getToken:i=>Qv(n,i)}};function tE(){en(new Ht(zd,Zv,"PUBLIC")),en(new Ht(Yv,eE,"PRIVATE"))}tE();Ot(Pd,jc);Ot(Pd,jc,"esm2017");/**
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
 */const co="analytics",nE="firebase_id",rE="origin",iE=60*1e3,sE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zc="https://www.googletagmanager.com/gtag/js";/**
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
 */const _t=new Fo("@firebase/analytics");/**
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
 */const oE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new Er("analytics","Analytics",oE);/**
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
 */function aE(t){if(!t.startsWith(zc)){const e=wt.create("invalid-gtag-resource",{gtagURL:t});return _t.warn(e.message),""}return t}function Kd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cE(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function lE(t,e){const n=cE("firebase-js-sdk-policy",{createScriptURL:aE}),r=document.createElement("script"),i=`${zc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function uE(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function hE(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await Kd(n)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(c){_t.error(c)}t("config",i,s)}async function fE(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await Kd(n);for(const l of a){const h=c.find(p=>p.measurementId===l),d=h&&e[h.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_t.error(s)}}function dE(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await fE(t,e,n,c,l)}else if(s==="config"){const[c,l]=a;await hE(t,e,n,r,c,l)}else if(s==="consent"){const[c,l]=a;t("consent",c,l)}else if(s==="get"){const[c,l,h]=a;t("get",c,l,h)}else if(s==="set"){const[c]=a;t("set",c)}else t(s,...a)}catch(c){_t.error(c)}}return i}function pE(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=dE(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function gE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zc)&&n.src.includes(t))return n;return null}/**
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
 */const mE=30,_E=1e3;class yE{constructor(e={},n=_E){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Wd=new yE;function vE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function EE(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:vE(r)},s=sE.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function IE(t,e=Wd,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw wt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw wt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new AE;return setTimeout(async()=>{c.abort()},iE),Gd({appId:r,apiKey:i,measurementId:s},a,c,e)}async function Gd(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Wd){var s;const{appId:a,measurementId:c}=t;try{await TE(r,e)}catch(l){if(c)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await EE(t);return i.deleteThrottleMetadata(a),l}catch(l){const h=l;if(!wE(h)){if(i.deleteThrottleMetadata(a),c)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw l}const d=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?ju(n,i.intervalMillis,mE):ju(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(a,p),_t.debug(`Calling attemptFetch again in ${d} millis`),Gd(t,p,r,i)}}function TE(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wE(t){if(!(t instanceof zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class AE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bE(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});t("event",n,a)}}/**
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
 */async function RE(){if(Ed())try{await Id()}catch(t){return _t.warn(wt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _t.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function SE(t,e,n,r,i,s,a){var c;const l=IE(t);l.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>_t.error(T)),e.push(l);const h=RE().then(T=>{if(T)return r.getId()}),[d,p]=await Promise.all([l,h]);gE(s)||lE(s,d.measurementId),i("js",new Date);const m=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return m[rE]="firebase",m.update=!0,p!=null&&(m[nE]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class PE{constructor(e){this.app=e}_delete(){return delete Pi[this.app.options.appId],Promise.resolve()}}let Pi={},Yu=[];const Zu={};let Da="dataLayer",CE="gtag",eh,Qd,th=!1;function kE(){const t=[];if(vd()&&t.push("This is a browser extension environment."),X_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=wt.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function OE(t,e,n){kE();const r=t.options.appId;if(!r)throw wt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(Pi[r]!=null)throw wt.create("already-exists",{id:r});if(!th){uE(Da);const{wrappedGtag:s,gtagCore:a}=pE(Pi,Yu,Zu,Da,CE);Qd=s,eh=a,th=!0}return Pi[r]=SE(t,Yu,Zu,e,eh,Da,n),new PE(t)}function NE(t=Bc()){t=bt(t);const e=Ir(t,co);return e.isInitialized()?e.getImmediate():DE(t)}function DE(t,e={}){const n=Ir(t,co);if(n.isInitialized()){const i=n.getImmediate();if(qn(e,n.getOptions()))return i;throw wt.create("already-initialized")}return n.initialize({options:e})}function VE(t,e,n,r){t=bt(t),bE(Qd,Pi[t.app.options.appId],e,n,r).catch(i=>_t.error(i))}const nh="@firebase/analytics",rh="0.10.16";function xE(){en(new Ht(co,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return OE(r,i,n)},"PUBLIC")),en(new Ht("analytics-internal",t,"PRIVATE")),Ot(nh,rh),Ot(nh,rh,"esm2017");function t(e){try{const n=e.getProvider(co).getImmediate();return{logEvent:(r,i,s)=>VE(n,r,i,s)}}catch(n){throw wt.create("interop-component-reg-failed",{reason:n})}}}xE();function Kc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ME=Xd,Jd=new Er("auth","Firebase",Xd());/**
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
 */const lo=new Fo("@firebase/auth");function LE(t,...e){lo.logLevel<=de.WARN&&lo.warn(`Auth (${ii}): ${t}`,...e)}function Ks(t,...e){lo.logLevel<=de.ERROR&&lo.error(`Auth (${ii}): ${t}`,...e)}/**
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
 */function En(t,...e){throw Wc(t,...e)}function At(t,...e){return Wc(t,...e)}function Yd(t,e,n){const r=Object.assign(Object.assign({},ME()),{[e]:n});return new Er("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return Yd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jd.create(t,...e)}function J(t,e,...n){if(!t)throw Wc(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ks(e),new Error(e)}function In(t,e){t||gn(e)}/**
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
 */function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zd(){return ih()==="http:"||ih()==="https:"}function ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function FE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zd()||vd()||"connection"in navigator)?navigator.onLine:!0}function UE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=q_()||W_()}get(){return FE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gc(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ep{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$E=new ls(3e4,6e4);function on(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kt(t,e,n,r,i={}){return tp(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=ri(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},s);return K_()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ni(t.emulatorConfig.host)&&(h.credentials="include"),ep.fetch()(await np(t,t.config.apiHost,n,c),h)})}async function tp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BE),e);try{const i=new qE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ai(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ai(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ai(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ai(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Yd(t,d,h);En(t,d)}}catch(i){if(i instanceof zt)throw i;En(t,"network-request-failed",{message:String(i)})}}async function jo(t,e,n,r,i={}){const s=await Kt(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function np(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?Gc(t.config,i):`${t.config.apiScheme}://${i}`;return jE.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function HE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),$E.get())})}}function Ai(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function sh(t){return t!==void 0&&t.getResponse!==void 0}function oh(t){return t!==void 0&&t.enterprise!==void 0}class rp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return HE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function zE(t){return(await Kt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function ip(t,e){return Kt(t,"GET","/v2/recaptchaConfig",on(t,e))}/**
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
 */async function KE(t,e){return Kt(t,"POST","/v1/accounts:delete",e)}async function uo(t,e){return Kt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WE(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=Qc(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ci(Va(i.auth_time)),issuedAtTime:Ci(Va(i.iat)),expirationTime:Ci(Va(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Va(t){return Number(t)*1e3}function Qc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=dd(n);return i?JSON.parse(i):(Ks("Failed to decode base64 JWT payload"),null)}catch(i){return Ks("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ah(t){const e=Qc(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&GE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class QE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Qi(t,uo(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sp(s.providerUserInfo):[],c=JE(t.providerData,a),l=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new lc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function XE(t){const e=bt(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sp(t){return t.map(e=>{var{providerId:n}=e,r=Kc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function YE(t,e){const n=await tp(t,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await np(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&ni(t.emulatorConfig.host)&&(l.credentials="include"),ep.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZE(t,e){return Kt(t,"POST","/v2/accounts:revokeToken",on(t,e))}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ah(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=ah(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await YE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Mr;return r&&(J(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function kn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Kc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qi(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WE(this,e)}reload(){return XE(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await Qi(this,KE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,V=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,K=(h=n.createdAt)!==null&&h!==void 0?h:void 0,U=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:z,isAnonymous:le,providerData:he,stsTokenManager:w}=n;J($&&w,e,"internal-error");const y=Mr.fromJSON(this.name,w);J(typeof $=="string",e,"internal-error"),kn(p,e.name),kn(m,e.name),J(typeof z=="boolean",e,"internal-error"),J(typeof le=="boolean",e,"internal-error"),kn(T,e.name),kn(k,e.name),kn(V,e.name),kn(L,e.name),kn(K,e.name),kn(U,e.name);const I=new Ut({uid:$,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:le,photoURL:k,phoneNumber:T,tenantId:V,stsTokenManager:y,createdAt:K,lastLoginAt:U});return he&&Array.isArray(he)&&(I.providerData=he.map(A=>Object.assign({},A))),L&&(I._redirectEventId=L),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mr;i.updateFromServerResponse(n);const s=new Ut({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ho(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Mr;c.updateFromIdToken(r);const l=new Ut({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
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
 */const ch=new Map;function mn(t){In(t instanceof Function,"Expected a class definition");let e=ch.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ch.set(t,e),e)}/**
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
 */class op{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}op.type="NONE";const lh=op;/**
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
 */function Ws(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ws(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ws("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await uo(this.auth,{idToken:e}).catch(()=>{});return n?Ut._fromGetAccountInfoResponse(this.auth,n,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lr(mn(lh),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||mn(lh);const a=Ws(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await uo(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Ut._fromGetAccountInfoResponse(e,m,d)}else p=Ut._fromJSON(e,d);h!==s&&(c=p),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Lr(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Lr(s,e,r))}}/**
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
 */function uh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(up(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ap(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fp(e))return"Blackberry";if(dp(e))return"Webos";if(cp(e))return"Safari";if((e.includes("chrome/")||lp(e))&&!e.includes("edge/"))return"Chrome";if(hp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ap(t=st()){return/firefox\//i.test(t)}function cp(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lp(t=st()){return/crios\//i.test(t)}function up(t=st()){return/iemobile/i.test(t)}function hp(t=st()){return/android/i.test(t)}function fp(t=st()){return/blackberry/i.test(t)}function dp(t=st()){return/webos/i.test(t)}function Xc(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eI(t=st()){var e;return Xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tI(){return G_()&&document.documentMode===10}function pp(t=st()){return Xc(t)||hp(t)||dp(t)||fp(t)||/windows phone/i.test(t)||up(t)}/**
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
 */function gp(t,e=[]){let n;switch(t){case"Browser":n=uh(st());break;case"Worker":n=`${uh(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
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
 */class nI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rI(t,e={}){return Kt(t,"GET","/v2/passwordPolicy",on(t,e))}/**
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
 */const iI=6;class sI{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:iI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class oI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hh(this),this.idTokenSubscription=new hh(this),this.beforeStateQueue=new nI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uo(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(jn(this));const n=e?bt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rI(this),n=new sI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(t){return bt(t)}class hh{constructor(e){this.auth=e,this.observer=null,this.addObserver=ty(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let us={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aI(t){us=t}function Jc(t){return us.loadJS(t)}function cI(){return us.recaptchaV2Script}function lI(){return us.recaptchaEnterpriseScript}function uI(){return us.gapiScript}function mp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const hI=500,fI=6e4,Ls=1e12;class dI{constructor(e){this.auth=e,this.counter=Ls,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new mI(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Ls;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Ls;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Ls;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class pI{constructor(){this.enterprise=new gI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mI{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;J(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=_I(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},fI)},hI))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function _I(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const yI="recaptcha-enterprise",ki="NO_RECAPTCHA";class _p{constructor(e){this.type=yI,this.auth=Jn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{ip(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new rp(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){const l=window.grecaptcha;oh(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(ki)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pI().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!n&&oh(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lI();l.length!==0&&(l+=c),Jc(l).then(()=>{i(c,s,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function xa(t,e,n,r=!1,i=!1){const s=new _p(t);let a;if(i)a=ki;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ma(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("PHONE_PROVIDER")){const a=await xa(t,e,n);return r(t,a).catch(async c=>{var l;if(((l=t._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await xa(t,e,n,!1,!0);return r(t,h)}return Promise.reject(c)})}else{const a=await xa(t,e,n,!1,!0);return r(t,a)}}async function vI(t){const e=Jn(t),n=await ip(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new rp(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new _p(e).verify()}/**
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
 */function EI(t,e){const n=Ir(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qn(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function II(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TI(t,e,n){const r=Jn(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=yp(e),{host:a,port:c}=wI(e),l=c===null?"":`:${c}`,h={url:`${s}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(qn(h,r.config.emulator)&&qn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ni(a)?(_d(`${s}//${a}${l}`),yd("Auth",!0)):AI()}function yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wI(t){const e=yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fh(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:fh(a)}}}function fh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
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
 */async function Fr(t,e){return jo(t,"POST","/v1/accounts:signInWithIdp",on(t,e))}/**
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
 */const bI="http://localhost";class pr extends Yc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Kc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new pr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:bI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
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
 */async function dh(t,e){return Kt(t,"POST","/v1/accounts:sendVerificationCode",on(t,e))}async function RI(t,e){return jo(t,"POST","/v1/accounts:signInWithPhoneNumber",on(t,e))}async function SI(t,e){const n=await jo(t,"POST","/v1/accounts:signInWithPhoneNumber",on(t,e));if(n.temporaryProof)throw Ai(t,"account-exists-with-different-credential",n);return n}const PI={USER_NOT_FOUND:"user-not-found"};async function CI(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return jo(t,"POST","/v1/accounts:signInWithPhoneNumber",on(t,n),PI)}/**
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
 */class Oi extends Yc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Oi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Oi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return RI(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return SI(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return CI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Oi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hs extends vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xn extends hs{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class Ln extends hs{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
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
 */class Fn extends hs{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ut._fromIdTokenResponse(e,r,i),a=ph(r);return new Wr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ph(r);return new Wr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ph(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fo extends zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fo(e,n,r,i)}}function Ep(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(t,s,e,r):s})}async function kI(t,e,n=!1){const r=await Qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wr._forOperation(t,"link",r)}/**
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
 */async function OI(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await Qi(t,Ep(r,i,e,t),n);J(s.idToken,r,"internal-error");const a=Qc(s.idToken);J(a,r,"internal-error");const{sub:c}=a;return J(t.uid===c,r,"user-mismatch"),Wr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
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
 */async function Ip(t,e,n=!1){if(xt(t.app))return Promise.reject(jn(t));const r="signIn",i=await Ep(t,r,e),s=await Wr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function NI(t,e){return Ip(Jn(t),e)}function DI(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function VI(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}/**
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
 */function gh(t,e){return Kt(t,"POST","/v2/accounts/mfaEnrollment:start",on(t,e))}const po="__sak";/**
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
 */class Tp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xI=1e3,MI=10;class wp extends Tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);tI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wp.type="LOCAL";const LI=wp;/**
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
 */class Ap extends Tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ap.type="SESSION";const bp=Ap;/**
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
 */function FI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async h=>h(n.origin,s)),l=await FI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$o.receivers=[];/**
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
 */function Zc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class UI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const h=Zc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Me(){return window}function BI(t){Me().location.href=t}/**
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
 */function el(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function jI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $I(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HI(){return el()?self:null}/**
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
 */const Rp="firebaseLocalStorageDb",qI=1,go="firebaseLocalStorage",Sp="fbase_key";class fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ho(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function zI(){const t=indexedDB.deleteDatabase(Rp);return new fs(t).toPromise()}function uc(){const t=indexedDB.open(Rp,qI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(go,{keyPath:Sp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(go)?e(r):(r.close(),await zI(),e(await uc()))})})}async function mh(t,e,n){const r=Ho(t,!0).put({[Sp]:e,value:n});return new fs(r).toPromise()}async function KI(t,e){const n=Ho(t,!1).get(e),r=await new fs(n).toPromise();return r===void 0?null:r.value}function _h(t,e){const n=Ho(t,!0).delete(e);return new fs(n).toPromise()}const WI=800,GI=3;class Pp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return el()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$o._getInstance(HI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jI(),!this.activeServiceWorker)return;this.sender=new UI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$I()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uc();return await mh(e,po,"1"),await _h(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_h(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ho(i,!1).getAll();return new fs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pp.type="LOCAL";const QI=Pp;/**
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
 */function yh(t,e){return Kt(t,"POST","/v2/accounts/mfaSignIn:start",on(t,e))}/**
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
 */const La=mp("rcb"),XI=new ls(3e4,6e4);class JI{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Me().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return J(YI(n),e,"argument-error"),this.shouldResolveImmediately(n)&&sh(Me().grecaptcha)?Promise.resolve(Me().grecaptcha):new Promise((r,i)=>{const s=Me().setTimeout(()=>{i(At(e,"network-request-failed"))},XI.get());Me()[La]=()=>{Me().clearTimeout(s),delete Me()[La];const c=Me().grecaptcha;if(!c||!sh(c)){i(At(e,"internal-error"));return}const l=c.render;c.render=(h,d)=>{const p=l(h,d);return this.counter++,p},this.hostLanguage=n,r(c)};const a=`${cI()}?${ri({onload:La,render:"explicit",hl:n})}`;Jc(a).catch(()=>{clearTimeout(s),i(At(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Me().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function YI(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class ZI{async load(e){return new dI(e)}clearedOneInstance(){}}/**
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
 */const Ni="recaptcha",eT={theme:"light",type:"image"};class tT{constructor(e,n,r=Object.assign({},eT)){this.parameters=r,this.type=Ni,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Jn(e),this.isInvisible=this.parameters.size==="invisible",J(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;J(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ZI:new JI,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),i(a))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){J(!this.parameters.sitekey,this.auth,"argument-error"),J(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),J(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Me()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){J(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){J(Zd()&&!el(),this.auth,"internal-error"),await nT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await zE(this.auth);J(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return J(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function nT(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class rT{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Oi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function iT(t,e,n){if(xt(t.app))return Promise.reject(jn(t));const r=Jn(t),i=await sT(r,e,bt(n));return new rT(i,s=>NI(r,s))}async function sT(t,e,n){var r;if(!t._getRecaptchaConfig())try{await vI(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){J(s.type==="enroll",t,"internal-error");const a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ma(t,a,"mfaSmsEnrollment",async(d,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===ki){J((n==null?void 0:n.type)===Ni,d,"argument-error");const m=await Fa(d,p,n);return gh(d,m)}return gh(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{J(s.type==="signin",t,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;J(a,t,"missing-multi-factor-info");const c={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ma(t,c,"mfaSmsSignIn",async(p,m)=>{if(m.phoneSignInInfo.captchaResponse===ki){J((n==null?void 0:n.type)===Ni,p,"argument-error");const T=await Fa(p,m,n);return yh(p,T)}return yh(p,m)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ma(t,s,"sendVerificationCode",async(h,d)=>{if(d.captchaResponse===ki){J((n==null?void 0:n.type)===Ni,h,"argument-error");const p=await Fa(h,d,n);return dh(h,p)}return dh(h,d)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{n==null||n._reset()}}async function Fa(t,e,n){J(n.type===Ni,t,"argument-error");const r=await n.verify();J(typeof r=="string",t,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:c,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function oT(t,e){return e?mn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tl extends Yc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aT(t){return Ip(t.auth,new tl(t),t.bypassAuthState)}function cT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),OI(n,new tl(t),t.bypassAuthState)}async function lT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),kI(n,new tl(t),t.bypassAuthState)}/**
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
 */class Cp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aT;case"linkViaPopup":case"linkViaRedirect":return lT;case"reauthViaPopup":case"reauthViaRedirect":return cT;default:En(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uT=new ls(2e3,1e4);class Vr extends Cp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uT.get())};e()}}Vr.currentPopupAction=null;/**
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
 */const hT="pendingRedirect",Gs=new Map;class fT extends Cp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gs.get(this.auth._key());if(!e){try{const r=await dT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gs.set(this.auth._key(),e)}return this.bypassAuthState||Gs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dT(t,e){const n=mT(e),r=gT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pT(t,e){Gs.set(t._key(),e)}function gT(t){return mn(t._redirectPersistence)}function mT(t){return Ws(hT,t.config.apiKey,t.name)}async function _T(t,e,n=!1){if(xt(t.app))return Promise.reject(jn(t));const r=Jn(t),i=oT(r,e),a=await new fT(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const yT=10*60*1e3;class vT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ET(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yT&&this.cachedEventUids.clear(),this.cachedEventUids.has(vh(e))}saveEventToCache(e){this.cachedEventUids.add(vh(e)),this.lastProcessedEventTime=Date.now()}}function vh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ET(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kp(t);default:return!1}}/**
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
 */async function IT(t,e={}){return Kt(t,"GET","/v1/projects",e)}/**
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
 */const TT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wT=/^https?/;async function AT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IT(t);for(const n of e)try{if(bT(n))return}catch{}En(t,"unauthorized-domain")}function bT(t){const e=cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!wT.test(n))return!1;if(TT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RT=new ls(3e4,6e4);function Eh(){const t=Me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ST(t){return new Promise((e,n)=>{var r,i,s;function a(){Eh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eh(),n(At(t,"network-request-failed"))},timeout:RT.get()})}if(!((i=(r=Me().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Me().gapi)===null||s===void 0)&&s.load)a();else{const c=mp("iframefcb");return Me()[c]=()=>{gapi.load?a():n(At(t,"network-request-failed"))},Jc(`${uI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Qs=null,e})}let Qs=null;function PT(t){return Qs=Qs||ST(t),Qs}/**
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
 */const CT=new ls(5e3,15e3),kT="__/auth/iframe",OT="emulator/auth/iframe",NT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VT(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gc(e,OT):`https://${t.config.authDomain}/${kT}`,r={apiKey:e.apiKey,appName:t.name,v:ii},i=DT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ri(r).slice(1)}`}async function xT(t){const e=await PT(t),n=Me().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:VT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=At(t,"network-request-failed"),c=Me().setTimeout(()=>{s(a)},CT.get());function l(){Me().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const MT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LT=500,FT=600,UT="_blank",BT="http://localhost";class Ih{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jT(t,e,n,r=LT,i=FT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},MT),{width:r.toString(),height:i.toString(),top:s,left:a}),h=st().toLowerCase();n&&(c=lp(h)?UT:n),ap(h)&&(e=e||BT,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[T,k])=>`${m}${T}=${k},`,"");if(eI(h)&&c!=="_self")return $T(e||"",c),new Ih(null);const p=window.open(e||"",c,d);J(p,t,"popup-blocked");try{p.focus()}catch{}return new Ih(p)}function $T(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HT="__/auth/handler",qT="emulator/auth/handler",zT=encodeURIComponent("fac");async function Th(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:i};if(e instanceof vp){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ey(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof hs){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${zT}=${encodeURIComponent(l)}`:"";return`${KT(t)}?${ri(c).slice(1)}${h}`}function KT({config:t}){return t.emulator?Gc(t,qT):`https://${t.authDomain}/${HT}`}/**
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
 */const Ua="webStorageSupport";class WT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bp,this._completeRedirectFn=_T,this._overrideRedirectResult=pT}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Th(e,n,r,cc(),i);return jT(e,a,Zc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Th(e,n,r,cc(),i);return BI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xT(e),r=new vT(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ua];a!==void 0&&n(!!a),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pp()||cp()||Xc()}}const GT=WT;var wh="@firebase/auth",Ah="1.10.7";/**
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
 */class QT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JT(t){en(new Ht("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;J(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gp(t)},h=new oI(r,i,s,l);return II(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),en(new Ht("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new QT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(wh,Ah,XT(t)),Ot(wh,Ah,"esm2017")}/**
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
 */const YT=5*60,ZT=md("authIdTokenMaxAge")||YT;let bh=null;const ew=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZT)return;const i=n==null?void 0:n.token;bh!==i&&(bh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Op(t=Bc()){const e=Ir(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EI(t,{popupRedirectResolver:GT,persistence:[QI,LI,bp]}),r=md("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=ew(s.toString());VI(n,a,()=>a(n.currentUser)),DI(n,c=>a(c))}}const i=pd("auth");return i&&TI(n,`http://${i}`),n}function tw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JT("Browser");const nw={apiKey:"AIzaSyB_wdk6lL6ptOFLwrSlzuubO48vs29sCL4",authDomain:"t-d-j-8ed4a.firebaseapp.com",projectId:"t-d-j-8ed4a",storageBucket:"t-d-j-8ed4a.appspot.com",messagingSenderId:"241528140530",appId:"1:241528140530:web:c026da2f853579c576d66b",measurementId:"G-Q7ZSNKF9HQ"},Np=bd(nw);NE(Np);const Rh=Op(Np);/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},Ur=[],Yt=()=>{},rw=()=>!1,qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),rl=t=>t.startsWith("onUpdate:"),ot=Object.assign,il=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iw=Object.prototype.hasOwnProperty,Te=(t,e)=>iw.call(t,e),ie=Array.isArray,Br=t=>ds(t)==="[object Map]",zo=t=>ds(t)==="[object Set]",Sh=t=>ds(t)==="[object Date]",ae=t=>typeof t=="function",Ue=t=>typeof t=="string",tn=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Dp=t=>(Pe(t)||ae(t))&&ae(t.then)&&ae(t.catch),Vp=Object.prototype.toString,ds=t=>Vp.call(t),sw=t=>ds(t).slice(8,-1),xp=t=>ds(t)==="[object Object]",sl=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Di=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ow=/-(\w)/g,zn=Ko(t=>t.replace(ow,(e,n)=>n?n.toUpperCase():"")),aw=/\B([A-Z])/g,Tr=Ko(t=>t.replace(aw,"-$1").toLowerCase()),Mp=Ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ba=Ko(t=>t?`on${Mp(t)}`:""),$n=(t,e)=>!Object.is(t,e),Xs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},mo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ph;const Wo=()=>Ph||(Ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ol(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ue(r)?hw(r):ol(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ue(t)||Pe(t))return t}const cw=/;(?![^(]*\))/g,lw=/:([^]+)/,uw=/\/\*[^]*?\*\//g;function hw(t){const e={};return t.replace(uw,"").split(cw).forEach(n=>{if(n){const r=n.split(lw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function al(t){let e="";if(Ue(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=al(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dw=nl(fw);function Lp(t){return!!t||t===""}function pw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Go(t[r],e[r]);return n}function Go(t,e){if(t===e)return!0;let n=Sh(t),r=Sh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=tn(t),r=tn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?pw(t,e):!1;if(n=Pe(t),r=Pe(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Go(t[a],e[a]))return!1}}return String(t)===String(e)}function gw(t,e){return t.findIndex(n=>Go(n,e))}const Fp=t=>!!(t&&t.__v_isRef===!0),Up=t=>Ue(t)?t:t==null?"":ie(t)||Pe(t)&&(t.toString===Vp||!ae(t.toString))?Fp(t)?Up(t.value):JSON.stringify(t,Bp,2):String(t),Bp=(t,e)=>Fp(e)?Bp(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[ja(r,s)+" =>"]=i,n),{})}:zo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ja(n))}:tn(e)?ja(e):Pe(e)&&!ie(e)&&!xp(e)?String(e):e,ja=(t,e="")=>{var n;return tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class jp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=pt;try{return pt=this,e()}finally{pt=n}}}on(){++this._on===1&&(this.prevScope=pt,pt=this)}off(){this._on>0&&--this._on===0&&(pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function mw(t){return new jp(t)}function _w(){return pt}let be;const $a=new WeakSet;class $p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pt&&pt.active&&pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ch(this),zp(this);const e=be,n=jt;be=this,jt=!0;try{return this.fn()}finally{Kp(this),be=e,jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ul(e);this.deps=this.depsTail=void 0,Ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fc(this)&&this.run()}get dirty(){return fc(this)}}let Hp=0,Vi,xi;function qp(t,e=!1){if(t.flags|=8,e){t.next=xi,xi=t;return}t.next=Vi,Vi=t}function cl(){Hp++}function ll(){if(--Hp>0)return;if(xi){let e=xi;for(xi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vi;){let e=Vi;for(Vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function zp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kp(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),ul(r),yw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function fc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xi)||(t.globalVersion=Xi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fc(t))))return;t.flags|=2;const e=t.dep,n=be,r=jt;be=t,jt=!0;try{zp(t);const i=t.fn(t._value);(e.version===0||$n(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{be=n,jt=r,Kp(t),t.flags&=-3}}function ul(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)ul(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jt=!0;const Gp=[];function Tn(){Gp.push(jt),jt=!1}function wn(){const t=Gp.pop();jt=t===void 0?!0:t}function Ch(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=be;be=void 0;try{e()}finally{be=n}}}let Xi=0;class vw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!be||!jt||be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==be)n=this.activeLink=new vw(be,this),be.deps?(n.prevDep=be.depsTail,be.depsTail.nextDep=n,be.depsTail=n):be.deps=be.depsTail=n,Qp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=be.depsTail,n.nextDep=void 0,be.depsTail.nextDep=n,be.depsTail=n,be.deps===n&&(be.deps=r)}return n}trigger(e){this.version++,Xi++,this.notify(e)}notify(e){cl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ll()}}}function Qp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const dc=new WeakMap,lr=Symbol(""),pc=Symbol(""),Ji=Symbol("");function nt(t,e,n){if(jt&&be){let r=dc.get(t);r||dc.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new hl),i.map=r,i.key=n),i.track()}}function dn(t,e,n,r,i,s){const a=dc.get(t);if(!a){Xi++;return}const c=l=>{l&&l.trigger()};if(cl(),e==="clear")a.forEach(c);else{const l=ie(t),h=l&&sl(n);if(l&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Ji||!tn(m)&&m>=d)&&c(p)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(Ji)),e){case"add":l?h&&c(a.get("length")):(c(a.get(lr)),Br(t)&&c(a.get(pc)));break;case"delete":l||(c(a.get(lr)),Br(t)&&c(a.get(pc)));break;case"set":Br(t)&&c(a.get(lr));break}}ll()}function Cr(t){const e=Ie(t);return e===t?e:(nt(e,"iterate",Ji),$t(t)?e:e.map(ut))}function fl(t){return nt(t=Ie(t),"iterate",Ji),t}const Ew={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,ut)},concat(...t){return Cr(this).concat(...t.map(e=>ie(e)?Cr(e):e))},entries(){return Ha(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return ln(this,"every",t,e,void 0,arguments)},filter(t,e){return ln(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return ln(this,"find",t,e,ut,arguments)},findIndex(t,e){return ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ln(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return qa(this,"includes",t)},indexOf(...t){return qa(this,"indexOf",t)},join(t){return Cr(this).join(t)},lastIndexOf(...t){return qa(this,"lastIndexOf",t)},map(t,e){return ln(this,"map",t,e,void 0,arguments)},pop(){return Ei(this,"pop")},push(...t){return Ei(this,"push",t)},reduce(t,...e){return kh(this,"reduce",t,e)},reduceRight(t,...e){return kh(this,"reduceRight",t,e)},shift(){return Ei(this,"shift")},some(t,e){return ln(this,"some",t,e,void 0,arguments)},splice(...t){return Ei(this,"splice",t)},toReversed(){return Cr(this).toReversed()},toSorted(t){return Cr(this).toSorted(t)},toSpliced(...t){return Cr(this).toSpliced(...t)},unshift(...t){return Ei(this,"unshift",t)},values(){return Ha(this,"values",ut)}};function Ha(t,e,n){const r=fl(t),i=r[e]();return r!==t&&!$t(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Iw=Array.prototype;function ln(t,e,n,r,i,s){const a=fl(t),c=a!==t&&!$t(t),l=a[e];if(l!==Iw[e]){const p=l.apply(t,s);return c?ut(p):p}let h=n;a!==t&&(c?h=function(p,m){return n.call(this,ut(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=l.call(a,h,r);return c&&i?i(d):d}function kh(t,e,n,r){const i=fl(t);let s=n;return i!==t&&($t(t)?n.length>3&&(s=function(a,c,l){return n.call(this,a,c,l,t)}):s=function(a,c,l){return n.call(this,a,ut(c),l,t)}),i[e](s,...r)}function qa(t,e,n){const r=Ie(t);nt(r,"iterate",Ji);const i=r[e](...n);return(i===-1||i===!1)&&gl(n[0])?(n[0]=Ie(n[0]),r[e](...n)):i}function Ei(t,e,n=[]){Tn(),cl();const r=Ie(t)[e].apply(t,n);return ll(),wn(),r}const Tw=nl("__proto__,__v_isRef,__isVue"),Xp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tn));function ww(t){tn(t)||(t=String(t));const e=Ie(this);return nt(e,"has",t),e.hasOwnProperty(t)}class Jp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Dw:tg:s?eg:Zp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!i){let l;if(a&&(l=Ew[n]))return l;if(n==="hasOwnProperty")return ww}const c=Reflect.get(e,n,it(e)?e:r);return(tn(n)?Xp.has(n):Tw(n))||(i||nt(e,"get",n),s)?c:it(c)?a&&sl(n)?c:c.value:Pe(c)?i?rg(c):Qo(c):c}}class Yp extends Jp{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const l=gr(s);if(!$t(r)&&!gr(r)&&(s=Ie(s),r=Ie(r)),!ie(e)&&it(s)&&!it(r))return l?!1:(s.value=r,!0)}const a=ie(e)&&sl(n)?Number(n)<e.length:Te(e,n),c=Reflect.set(e,n,r,it(e)?e:i);return e===Ie(i)&&(a?$n(r,s)&&dn(e,"set",n,r):dn(e,"add",n,r)),c}deleteProperty(e,n){const r=Te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&dn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!tn(n)||!Xp.has(n))&&nt(e,"has",n),r}ownKeys(e){return nt(e,"iterate",ie(e)?"length":lr),Reflect.ownKeys(e)}}class Aw extends Jp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bw=new Yp,Rw=new Aw,Sw=new Yp(!0);const gc=t=>t,Fs=t=>Reflect.getPrototypeOf(t);function Pw(t,e,n){return function(...r){const i=this.__v_raw,s=Ie(i),a=Br(s),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=i[t](...r),d=n?gc:e?mc:ut;return!e&&nt(s,"iterate",l?pc:lr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Us(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cw(t,e){const n={get(i){const s=this.__v_raw,a=Ie(s),c=Ie(i);t||($n(i,c)&&nt(a,"get",i),nt(a,"get",c));const{has:l}=Fs(a),h=e?gc:t?mc:ut;if(l.call(a,i))return h(s.get(i));if(l.call(a,c))return h(s.get(c));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!t&&nt(Ie(i),"iterate",lr),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,a=Ie(s),c=Ie(i);return t||($n(i,c)&&nt(a,"has",i),nt(a,"has",c)),i===c?s.has(i):s.has(i)||s.has(c)},forEach(i,s){const a=this,c=a.__v_raw,l=Ie(c),h=e?gc:t?mc:ut;return!t&&nt(l,"iterate",lr),c.forEach((d,p)=>i.call(s,h(d),h(p),a))}};return ot(n,t?{add:Us("add"),set:Us("set"),delete:Us("delete"),clear:Us("clear")}:{add(i){!e&&!$t(i)&&!gr(i)&&(i=Ie(i));const s=Ie(this);return Fs(s).has.call(s,i)||(s.add(i),dn(s,"add",i,i)),this},set(i,s){!e&&!$t(s)&&!gr(s)&&(s=Ie(s));const a=Ie(this),{has:c,get:l}=Fs(a);let h=c.call(a,i);h||(i=Ie(i),h=c.call(a,i));const d=l.call(a,i);return a.set(i,s),h?$n(s,d)&&dn(a,"set",i,s):dn(a,"add",i,s),this},delete(i){const s=Ie(this),{has:a,get:c}=Fs(s);let l=a.call(s,i);l||(i=Ie(i),l=a.call(s,i)),c&&c.call(s,i);const h=s.delete(i);return l&&dn(s,"delete",i,void 0),h},clear(){const i=Ie(this),s=i.size!==0,a=i.clear();return s&&dn(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Pw(i,t,e)}),n}function dl(t,e){const n=Cw(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Te(n,i)&&i in r?n:r,i,s)}const kw={get:dl(!1,!1)},Ow={get:dl(!1,!0)},Nw={get:dl(!0,!1)};const Zp=new WeakMap,eg=new WeakMap,tg=new WeakMap,Dw=new WeakMap;function Vw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xw(t){return t.__v_skip||!Object.isExtensible(t)?0:Vw(sw(t))}function Qo(t){return gr(t)?t:pl(t,!1,bw,kw,Zp)}function ng(t){return pl(t,!1,Sw,Ow,eg)}function rg(t){return pl(t,!0,Rw,Nw,tg)}function pl(t,e,n,r,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=xw(t);if(s===0)return t;const a=i.get(t);if(a)return a;const c=new Proxy(t,s===2?r:n);return i.set(t,c),c}function Mi(t){return gr(t)?Mi(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function gl(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function ig(t){return!Te(t,"__v_skip")&&Object.isExtensible(t)&&hc(t,"__v_skip",!0),t}const ut=t=>Pe(t)?Qo(t):t,mc=t=>Pe(t)?rg(t):t;function it(t){return t?t.__v_isRef===!0:!1}function Mt(t){return sg(t,!1)}function Mw(t){return sg(t,!0)}function sg(t,e){return it(t)?t:new Lw(t,e)}class Lw{constructor(e,n){this.dep=new hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||gr(e);e=r?e:Ie(e),$n(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function jr(t){return it(t)?t.value:t}const Fw={get:(t,e,n)=>e==="__v_raw"?t:jr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return it(i)&&!it(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function og(t){return Mi(t)?t:new Proxy(t,Fw)}class Uw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return qp(this,!0),!0}get value(){const e=this.dep.track();return Wp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bw(t,e,n=!1){let r,i;return ae(t)?r=t:(r=t.get,i=t.set),new Uw(r,i,n)}const Bs={},_o=new WeakMap;let sr;function jw(t,e=!1,n=sr){if(n){let r=_o.get(n);r||_o.set(n,r=[]),r.push(t)}}function $w(t,e,n=Ae){const{immediate:r,deep:i,once:s,scheduler:a,augmentJob:c,call:l}=n,h=z=>i?z:$t(z)||i===!1||i===0?pn(z,1):pn(z);let d,p,m,T,k=!1,V=!1;if(it(t)?(p=()=>t.value,k=$t(t)):Mi(t)?(p=()=>h(t),k=!0):ie(t)?(V=!0,k=t.some(z=>Mi(z)||$t(z)),p=()=>t.map(z=>{if(it(z))return z.value;if(Mi(z))return h(z);if(ae(z))return l?l(z,2):z()})):ae(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Tn();try{m()}finally{wn()}}const z=sr;sr=d;try{return l?l(t,3,[T]):t(T)}finally{sr=z}}:p=Yt,e&&i){const z=p,le=i===!0?1/0:i;p=()=>pn(z(),le)}const L=_w(),K=()=>{d.stop(),L&&L.active&&il(L.effects,d)};if(s&&e){const z=e;e=(...le)=>{z(...le),K()}}let U=V?new Array(t.length).fill(Bs):Bs;const $=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const le=d.run();if(i||k||(V?le.some((he,w)=>$n(he,U[w])):$n(le,U))){m&&m();const he=sr;sr=d;try{const w=[le,U===Bs?void 0:V&&U[0]===Bs?[]:U,T];U=le,l?l(e,3,w):e(...w)}finally{sr=he}}}else d.run()};return c&&c($),d=new $p(p),d.scheduler=a?()=>a($,!1):$,T=z=>jw(z,!1,d),m=d.onStop=()=>{const z=_o.get(d);if(z){if(l)l(z,4);else for(const le of z)le();_o.delete(d)}},e?r?$(!0):U=d.run():a?a($.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function pn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,it(t))pn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(zo(t)||Br(t))t.forEach(r=>{pn(r,e,n)});else if(xp(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ps(t,e,n,r){try{return r?t(...r):t()}catch(i){Xo(i,e,n)}}function nn(t,e,n,r){if(ae(t)){const i=ps(t,e,n,r);return i&&Dp(i)&&i.catch(s=>{Xo(s,e,n)}),i}if(ie(t)){const i=[];for(let s=0;s<t.length;s++)i.push(nn(t[s],e,n,r));return i}}function Xo(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(s){Tn(),ps(s,null,10,[t,l,h]),wn();return}}Hw(t,n,i,r,a)}function Hw(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const ht=[];let Qt=-1;const $r=[];let Nn=null,kr=0;const ag=Promise.resolve();let yo=null;function ml(t){const e=yo||ag;return t?e.then(this?t.bind(this):t):e}function qw(t){let e=Qt+1,n=ht.length;for(;e<n;){const r=e+n>>>1,i=ht[r],s=Yi(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function _l(t){if(!(t.flags&1)){const e=Yi(t),n=ht[ht.length-1];!n||!(t.flags&2)&&e>=Yi(n)?ht.push(t):ht.splice(qw(e),0,t),t.flags|=1,cg()}}function cg(){yo||(yo=ag.then(ug))}function zw(t){ie(t)?$r.push(...t):Nn&&t.id===-1?Nn.splice(kr+1,0,t):t.flags&1||($r.push(t),t.flags|=1),cg()}function Oh(t,e,n=Qt+1){for(;n<ht.length;n++){const r=ht[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ht.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lg(t){if($r.length){const e=[...new Set($r)].sort((n,r)=>Yi(n)-Yi(r));if($r.length=0,Nn){Nn.push(...e);return}for(Nn=e,kr=0;kr<Nn.length;kr++){const n=Nn[kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nn=null,kr=0}}const Yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ug(t){try{for(Qt=0;Qt<ht.length;Qt++){const e=ht[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ps(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<ht.length;Qt++){const e=ht[Qt];e&&(e.flags&=-2)}Qt=-1,ht.length=0,lg(),yo=null,(ht.length||$r.length)&&ug()}}let kt=null,hg=null;function vo(t){const e=kt;return kt=t,hg=t&&t.type.__scopeId||null,e}function Kw(t,e=kt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Bh(-1);const s=vo(e);let a;try{a=t(...i)}finally{vo(s),r._d&&Bh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function xr(t,e){if(kt===null)return t;const n=ea(kt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,a,c,l=Ae]=e[i];s&&(ae(s)&&(s={mounted:s,updated:s}),s.deep&&pn(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function nr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const c=i[a];s&&(c.oldValue=s[a].value);let l=c.dir[r];l&&(Tn(),nn(l,n,8,[t.el,c,t,e]),wn())}}const Ww=Symbol("_vte"),Gw=t=>t.__isTeleport;function yl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function fg(t,e){return ae(t)?ot({name:t.name},e,{setup:t}):t}function dg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Li(t,e,n,r,i=!1){if(ie(t)){t.forEach((k,V)=>Li(k,e&&(ie(e)?e[V]:e),n,r,i));return}if(Fi(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Li(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?ea(r.component):r.el,a=i?null:s,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,m=Ie(p),T=p===Ae?()=>!1:k=>Te(m,k);if(h!=null&&h!==l&&(Ue(h)?(d[h]=null,T(h)&&(p[h]=null)):it(h)&&(h.value=null)),ae(l))ps(l,c,12,[a,d]);else{const k=Ue(l),V=it(l);if(k||V){const L=()=>{if(t.f){const K=k?T(l)?p[l]:d[l]:l.value;i?ie(K)&&il(K,s):ie(K)?K.includes(s)||K.push(s):k?(d[l]=[s],T(l)&&(p[l]=d[l])):(l.value=[s],t.k&&(d[t.k]=l.value))}else k?(d[l]=a,T(l)&&(p[l]=a)):V&&(l.value=a,t.k&&(d[t.k]=a))};a?(L.id=-1,It(L,n)):L()}}}Wo().requestIdleCallback;Wo().cancelIdleCallback;const Fi=t=>!!t.type.__asyncLoader,pg=t=>t.type.__isKeepAlive;function Qw(t,e){gg(t,"a",e)}function Xw(t,e){gg(t,"da",e)}function gg(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Jo(e,r,n),n){let i=n.parent;for(;i&&i.parent;)pg(i.parent.vnode)&&Jw(r,e,n,i),i=i.parent}}function Jw(t,e,n,r){const i=Jo(e,t,r,!0);mg(()=>{il(r[e],i)},n)}function Jo(t,e,n=ft,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Tn();const c=gs(n),l=nn(e,n,t,a);return c(),wn(),l});return r?i.unshift(s):i.push(s),s}}const An=t=>(e,n=ft)=>{(!es||t==="sp")&&Jo(t,(...r)=>e(...r),n)},Yw=An("bm"),Zw=An("m"),eA=An("bu"),tA=An("u"),nA=An("bum"),mg=An("um"),rA=An("sp"),iA=An("rtg"),sA=An("rtc");function oA(t,e=ft){Jo("ec",t,e)}const aA=Symbol.for("v-ndc"),_c=t=>t?Lg(t)?ea(t):_c(t.parent):null,Ui=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yg(t),$forceUpdate:t=>t.f||(t.f=()=>{_l(t.update)}),$nextTick:t=>t.n||(t.n=ml.bind(t.proxy)),$watch:t=>PA.bind(t)}),za=(t,e)=>t!==Ae&&!t.__isScriptSetup&&Te(t,e),cA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(za(r,e))return a[e]=1,r[e];if(i!==Ae&&Te(i,e))return a[e]=2,i[e];if((h=t.propsOptions[0])&&Te(h,e))return a[e]=3,s[e];if(n!==Ae&&Te(n,e))return a[e]=4,n[e];yc&&(a[e]=0)}}const d=Ui[e];let p,m;if(d)return e==="$attrs"&&nt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ae&&Te(n,e))return a[e]=4,n[e];if(m=l.config.globalProperties,Te(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return za(i,e)?(i[e]=n,!0):r!==Ae&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return!!n[a]||t!==Ae&&Te(t,a)||za(e,a)||(c=s[0])&&Te(c,a)||Te(r,a)||Te(Ui,a)||Te(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yc=!0;function lA(t){const e=yg(t),n=t.proxy,r=t.ctx;yc=!1,e.beforeCreate&&Dh(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:T,updated:k,activated:V,deactivated:L,beforeDestroy:K,beforeUnmount:U,destroyed:$,unmounted:z,render:le,renderTracked:he,renderTriggered:w,errorCaptured:y,serverPrefetch:I,expose:A,inheritAttrs:b,components:S,directives:E,filters:at}=e;if(h&&uA(h,r,null),a)for(const pe in a){const fe=a[pe];ae(fe)&&(r[pe]=fe.bind(n))}if(i){const pe=i.call(n,n);Pe(pe)&&(t.data=Qo(pe))}if(yc=!0,s)for(const pe in s){const fe=s[pe],vt=ae(fe)?fe.bind(n,n):ae(fe.get)?fe.get.bind(n,n):Yt,Nt=!ae(fe)&&ae(fe.set)?fe.set.bind(n):Yt,St=Lt({get:vt,set:Nt});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>St.value,set:ke=>St.value=ke})}if(c)for(const pe in c)_g(c[pe],r,n,pe);if(l){const pe=ae(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(fe=>{Js(fe,pe[fe])})}d&&Dh(d,t,"c");function Ve(pe,fe){ie(fe)?fe.forEach(vt=>pe(vt.bind(n))):fe&&pe(fe.bind(n))}if(Ve(Yw,p),Ve(Zw,m),Ve(eA,T),Ve(tA,k),Ve(Qw,V),Ve(Xw,L),Ve(oA,y),Ve(sA,he),Ve(iA,w),Ve(nA,U),Ve(mg,z),Ve(rA,I),ie(A))if(A.length){const pe=t.exposed||(t.exposed={});A.forEach(fe=>{Object.defineProperty(pe,fe,{get:()=>n[fe],set:vt=>n[fe]=vt})})}else t.exposed||(t.exposed={});le&&t.render===Yt&&(t.render=le),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),E&&(t.directives=E),I&&dg(t)}function uA(t,e,n=Yt){ie(t)&&(t=vc(t));for(const r in t){const i=t[r];let s;Pe(i)?"default"in i?s=Zt(i.from||r,i.default,!0):s=Zt(i.from||r):s=Zt(i),it(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[r]=s}}function Dh(t,e,n){nn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _g(t,e,n,r){let i=r.includes(".")?Og(n,r):()=>n[r];if(Ue(t)){const s=e[t];ae(s)&&Ys(i,s)}else if(ae(t))Ys(i,t.bind(n));else if(Pe(t))if(ie(t))t.forEach(s=>_g(s,e,n,r));else{const s=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(s)&&Ys(i,s,t)}}function yg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,c=s.get(e);let l;return c?l=c:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(h=>Eo(l,h,a,!0)),Eo(l,e,a)),Pe(e)&&s.set(e,l),l}function Eo(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Eo(t,s,n,!0),i&&i.forEach(a=>Eo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=hA[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const hA={data:Vh,props:xh,emits:xh,methods:bi,computed:bi,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:bi,directives:bi,watch:dA,provide:Vh,inject:fA};function Vh(t,e){return e?t?function(){return ot(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function fA(t,e){return bi(vc(t),vc(e))}function vc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function bi(t,e){return t?ot(Object.create(null),t,e):e}function xh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:ot(Object.create(null),Nh(t),Nh(e??{})):e}function dA(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function vg(){return{app:null,config:{isNativeTag:rw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pA=0;function gA(t,e){return function(r,i=null){ae(r)||(r=ot({},r)),i!=null&&!Pe(i)&&(i=null);const s=vg(),a=new WeakSet,c=[];let l=!1;const h=s.app={_uid:pA++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:QA,get config(){return s.config},set config(d){},use(d,...p){return a.has(d)||(d&&ae(d.install)?(a.add(d),d.install(h,...p)):ae(d)&&(a.add(d),d(h,...p))),h},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),h},component(d,p){return p?(s.components[d]=p,h):s.components[d]},directive(d,p){return p?(s.directives[d]=p,h):s.directives[d]},mount(d,p,m){if(!l){const T=h._ceVNode||mt(r,i);return T.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),t(T,d,m),l=!0,h._container=d,d.__vue_app__=h,ea(T.component)}},onUnmount(d){c.push(d)},unmount(){l&&(nn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return s.provides[d]=p,h},runWithContext(d){const p=Hr;Hr=h;try{return d()}finally{Hr=p}}};return h}}let Hr=null;function Js(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=ft||kt;if(r||Hr){let i=Hr?Hr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}const Eg={},Ig=()=>Object.create(Eg),Tg=t=>Object.getPrototypeOf(t)===Eg;function mA(t,e,n,r=!1){const i={},s=Ig();t.propsDefaults=Object.create(null),wg(t,e,i,s);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=r?i:ng(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function _A(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=t,c=Ie(i),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Yo(t.emitsOptions,m))continue;const T=e[m];if(l)if(Te(s,m))T!==s[m]&&(s[m]=T,h=!0);else{const k=zn(m);i[k]=Ec(l,c,k,T,t,!1)}else T!==s[m]&&(s[m]=T,h=!0)}}}else{wg(t,e,i,s)&&(h=!0);let d;for(const p in c)(!e||!Te(e,p)&&((d=Tr(p))===p||!Te(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=Ec(l,c,p,void 0,t,!0)):delete i[p]);if(s!==c)for(const p in s)(!e||!Te(e,p))&&(delete s[p],h=!0)}h&&dn(t.attrs,"set","")}function wg(t,e,n,r){const[i,s]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Di(l))continue;const h=e[l];let d;i&&Te(i,d=zn(l))?!s||!s.includes(d)?n[d]=h:(c||(c={}))[d]=h:Yo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(s){const l=Ie(n),h=c||Ae;for(let d=0;d<s.length;d++){const p=s[d];n[p]=Ec(i,l,p,h[p],t,!Te(h,p))}}return a}function Ec(t,e,n,r,i,s){const a=t[n];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ae(l)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const d=gs(i);r=h[n]=l.call(null,e),d()}}else r=l;i.ce&&i.ce._setProp(n,r)}a[0]&&(s&&!c?r=!1:a[1]&&(r===""||r===Tr(n))&&(r=!0))}return r}const yA=new WeakMap;function Ag(t,e,n=!1){const r=n?yA:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,a={},c=[];let l=!1;if(!ae(t)){const d=p=>{l=!0;const[m,T]=Ag(p,e,!0);ot(a,m),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!l)return Pe(t)&&r.set(t,Ur),Ur;if(ie(s))for(let d=0;d<s.length;d++){const p=zn(s[d]);Mh(p)&&(a[p]=Ae)}else if(s)for(const d in s){const p=zn(d);if(Mh(p)){const m=s[d],T=a[p]=ie(m)||ae(m)?{type:m}:ot({},m),k=T.type;let V=!1,L=!0;if(ie(k))for(let K=0;K<k.length;++K){const U=k[K],$=ae(U)&&U.name;if($==="Boolean"){V=!0;break}else $==="String"&&(L=!1)}else V=ae(k)&&k.name==="Boolean";T[0]=V,T[1]=L,(V||Te(T,"default"))&&c.push(p)}}const h=[a,c];return Pe(t)&&r.set(t,h),h}function Mh(t){return t[0]!=="$"&&!Di(t)}const vl=t=>t[0]==="_"||t==="$stable",El=t=>ie(t)?t.map(Jt):[Jt(t)],vA=(t,e,n)=>{if(e._n)return e;const r=Kw((...i)=>El(e(...i)),n);return r._c=!1,r},bg=(t,e,n)=>{const r=t._ctx;for(const i in t){if(vl(i))continue;const s=t[i];if(ae(s))e[i]=vA(i,s,r);else if(s!=null){const a=El(s);e[i]=()=>a}}},Rg=(t,e)=>{const n=El(e);t.slots.default=()=>n},Sg=(t,e,n)=>{for(const r in e)(n||!vl(r))&&(t[r]=e[r])},EA=(t,e,n)=>{const r=t.slots=Ig();if(t.vnode.shapeFlag&32){const i=e.__;i&&hc(r,"__",i,!0);const s=e._;s?(Sg(r,e,n),n&&hc(r,"_",s,!0)):bg(e,r)}else e&&Rg(t,e)},IA=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,a=Ae;if(r.shapeFlag&32){const c=e._;c?n&&c===1?s=!1:Sg(i,e,n):(s=!e.$stable,bg(e,i)),a=e}else e&&(Rg(t,e),a={default:1});if(s)for(const c in i)!vl(c)&&a[c]==null&&delete i[c]},It=xA;function TA(t){return wA(t)}function wA(t,e){const n=Wo();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:T=Yt,insertStaticContent:k}=t,V=(_,v,R,N=null,x=null,D=null,G=void 0,H=null,j=!!v.dynamicChildren)=>{if(_===v)return;_&&!Ii(_,v)&&(N=O(_),ke(_,x,D,!0),_=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:F,ref:te,shapeFlag:W}=v;switch(F){case Zo:L(_,v,R,N);break;case Kn:K(_,v,R,N);break;case Wa:_==null&&U(v,R,N,G);break;case fn:S(_,v,R,N,x,D,G,H,j);break;default:W&1?le(_,v,R,N,x,D,G,H,j):W&6?E(_,v,R,N,x,D,G,H,j):(W&64||W&128)&&F.process(_,v,R,N,x,D,G,H,j,Y)}te!=null&&x?Li(te,_&&_.ref,D,v||_,!v):te==null&&_&&_.ref!=null&&Li(_.ref,null,D,_,!0)},L=(_,v,R,N)=>{if(_==null)r(v.el=c(v.children),R,N);else{const x=v.el=_.el;v.children!==_.children&&h(x,v.children)}},K=(_,v,R,N)=>{_==null?r(v.el=l(v.children||""),R,N):v.el=_.el},U=(_,v,R,N)=>{[_.el,_.anchor]=k(_.children,v,R,N,_.el,_.anchor)},$=({el:_,anchor:v},R,N)=>{let x;for(;_&&_!==v;)x=m(_),r(_,R,N),_=x;r(v,R,N)},z=({el:_,anchor:v})=>{let R;for(;_&&_!==v;)R=m(_),i(_),_=R;i(v)},le=(_,v,R,N,x,D,G,H,j)=>{v.type==="svg"?G="svg":v.type==="math"&&(G="mathml"),_==null?he(v,R,N,x,D,G,H,j):I(_,v,x,D,G,H,j)},he=(_,v,R,N,x,D,G,H)=>{let j,F;const{props:te,shapeFlag:W,transition:ee,dirs:re}=_;if(j=_.el=a(_.type,D,te&&te.is,te),W&8?d(j,_.children):W&16&&y(_.children,j,null,N,x,Ka(_,D),G,H),re&&nr(_,null,N,"created"),w(j,_,_.scopeId,G,N),te){for(const oe in te)oe!=="value"&&!Di(oe)&&s(j,oe,null,te[oe],D,N);"value"in te&&s(j,"value",null,te.value,D),(F=te.onVnodeBeforeMount)&&Gt(F,N,_)}re&&nr(_,null,N,"beforeMount");const ne=AA(x,ee);ne&&ee.beforeEnter(j),r(j,v,R),((F=te&&te.onVnodeMounted)||ne||re)&&It(()=>{F&&Gt(F,N,_),ne&&ee.enter(j),re&&nr(_,null,N,"mounted")},x)},w=(_,v,R,N,x)=>{if(R&&T(_,R),N)for(let D=0;D<N.length;D++)T(_,N[D]);if(x){let D=x.subTree;if(v===D||Dg(D.type)&&(D.ssContent===v||D.ssFallback===v)){const G=x.vnode;w(_,G,G.scopeId,G.slotScopeIds,x.parent)}}},y=(_,v,R,N,x,D,G,H,j=0)=>{for(let F=j;F<_.length;F++){const te=_[F]=H?Dn(_[F]):Jt(_[F]);V(null,te,v,R,N,x,D,G,H)}},I=(_,v,R,N,x,D,G)=>{const H=v.el=_.el;let{patchFlag:j,dynamicChildren:F,dirs:te}=v;j|=_.patchFlag&16;const W=_.props||Ae,ee=v.props||Ae;let re;if(R&&rr(R,!1),(re=ee.onVnodeBeforeUpdate)&&Gt(re,R,v,_),te&&nr(v,_,R,"beforeUpdate"),R&&rr(R,!0),(W.innerHTML&&ee.innerHTML==null||W.textContent&&ee.textContent==null)&&d(H,""),F?A(_.dynamicChildren,F,H,R,N,Ka(v,x),D):G||fe(_,v,H,null,R,N,Ka(v,x),D,!1),j>0){if(j&16)b(H,W,ee,R,x);else if(j&2&&W.class!==ee.class&&s(H,"class",null,ee.class,x),j&4&&s(H,"style",W.style,ee.style,x),j&8){const ne=v.dynamicProps;for(let oe=0;oe<ne.length;oe++){const ge=ne[oe],He=W[ge],qe=ee[ge];(qe!==He||ge==="value")&&s(H,ge,He,qe,x,R)}}j&1&&_.children!==v.children&&d(H,v.children)}else!G&&F==null&&b(H,W,ee,R,x);((re=ee.onVnodeUpdated)||te)&&It(()=>{re&&Gt(re,R,v,_),te&&nr(v,_,R,"updated")},N)},A=(_,v,R,N,x,D,G)=>{for(let H=0;H<v.length;H++){const j=_[H],F=v[H],te=j.el&&(j.type===fn||!Ii(j,F)||j.shapeFlag&198)?p(j.el):R;V(j,F,te,null,N,x,D,G,!0)}},b=(_,v,R,N,x)=>{if(v!==R){if(v!==Ae)for(const D in v)!Di(D)&&!(D in R)&&s(_,D,v[D],null,x,N);for(const D in R){if(Di(D))continue;const G=R[D],H=v[D];G!==H&&D!=="value"&&s(_,D,H,G,x,N)}"value"in R&&s(_,"value",v.value,R.value,x)}},S=(_,v,R,N,x,D,G,H,j)=>{const F=v.el=_?_.el:c(""),te=v.anchor=_?_.anchor:c("");let{patchFlag:W,dynamicChildren:ee,slotScopeIds:re}=v;re&&(H=H?H.concat(re):re),_==null?(r(F,R,N),r(te,R,N),y(v.children||[],R,te,x,D,G,H,j)):W>0&&W&64&&ee&&_.dynamicChildren?(A(_.dynamicChildren,ee,R,x,D,G,H),(v.key!=null||x&&v===x.subTree)&&Pg(_,v,!0)):fe(_,v,R,te,x,D,G,H,j)},E=(_,v,R,N,x,D,G,H,j)=>{v.slotScopeIds=H,_==null?v.shapeFlag&512?x.ctx.activate(v,R,N,G,j):at(v,R,N,x,D,G,j):Rt(_,v,j)},at=(_,v,R,N,x,D,G)=>{const H=_.component=HA(_,N,x);if(pg(_)&&(H.ctx.renderer=Y),qA(H,!1,G),H.asyncDep){if(x&&x.registerDep(H,Ve,G),!_.el){const j=H.subTree=mt(Kn);K(null,j,v,R)}}else Ve(H,_,v,R,x,D,G)},Rt=(_,v,R)=>{const N=v.component=_.component;if(DA(_,v,R))if(N.asyncDep&&!N.asyncResolved){pe(N,v,R);return}else N.next=v,N.update();else v.el=_.el,N.vnode=v},Ve=(_,v,R,N,x,D,G)=>{const H=()=>{if(_.isMounted){let{next:W,bu:ee,u:re,parent:ne,vnode:oe}=_;{const Je=Cg(_);if(Je){W&&(W.el=oe.el,pe(_,W,G)),Je.asyncDep.then(()=>{_.isUnmounted||H()});return}}let ge=W,He;rr(_,!1),W?(W.el=oe.el,pe(_,W,G)):W=oe,ee&&Xs(ee),(He=W.props&&W.props.onVnodeBeforeUpdate)&&Gt(He,ne,W,oe),rr(_,!0);const qe=Fh(_),Pt=_.subTree;_.subTree=qe,V(Pt,qe,p(Pt.el),O(Pt),_,x,D),W.el=qe.el,ge===null&&VA(_,qe.el),re&&It(re,x),(He=W.props&&W.props.onVnodeUpdated)&&It(()=>Gt(He,ne,W,oe),x)}else{let W;const{el:ee,props:re}=v,{bm:ne,m:oe,parent:ge,root:He,type:qe}=_,Pt=Fi(v);rr(_,!1),ne&&Xs(ne),!Pt&&(W=re&&re.onVnodeBeforeMount)&&Gt(W,ge,v),rr(_,!0);{He.ce&&He.ce._def.shadowRoot!==!1&&He.ce._injectChildStyle(qe);const Je=_.subTree=Fh(_);V(null,Je,R,N,_,x,D),v.el=Je.el}if(oe&&It(oe,x),!Pt&&(W=re&&re.onVnodeMounted)){const Je=v;It(()=>Gt(W,ge,Je),x)}(v.shapeFlag&256||ge&&Fi(ge.vnode)&&ge.vnode.shapeFlag&256)&&_.a&&It(_.a,x),_.isMounted=!0,v=R=N=null}};_.scope.on();const j=_.effect=new $p(H);_.scope.off();const F=_.update=j.run.bind(j),te=_.job=j.runIfDirty.bind(j);te.i=_,te.id=_.uid,j.scheduler=()=>_l(te),rr(_,!0),F()},pe=(_,v,R)=>{v.component=_;const N=_.vnode.props;_.vnode=v,_.next=null,_A(_,v.props,N,R),IA(_,v.children,R),Tn(),Oh(_),wn()},fe=(_,v,R,N,x,D,G,H,j=!1)=>{const F=_&&_.children,te=_?_.shapeFlag:0,W=v.children,{patchFlag:ee,shapeFlag:re}=v;if(ee>0){if(ee&128){Nt(F,W,R,N,x,D,G,H,j);return}else if(ee&256){vt(F,W,R,N,x,D,G,H,j);return}}re&8?(te&16&&dt(F,x,D),W!==F&&d(R,W)):te&16?re&16?Nt(F,W,R,N,x,D,G,H,j):dt(F,x,D,!0):(te&8&&d(R,""),re&16&&y(W,R,N,x,D,G,H,j))},vt=(_,v,R,N,x,D,G,H,j)=>{_=_||Ur,v=v||Ur;const F=_.length,te=v.length,W=Math.min(F,te);let ee;for(ee=0;ee<W;ee++){const re=v[ee]=j?Dn(v[ee]):Jt(v[ee]);V(_[ee],re,R,null,x,D,G,H,j)}F>te?dt(_,x,D,!0,!1,W):y(v,R,N,x,D,G,H,j,W)},Nt=(_,v,R,N,x,D,G,H,j)=>{let F=0;const te=v.length;let W=_.length-1,ee=te-1;for(;F<=W&&F<=ee;){const re=_[F],ne=v[F]=j?Dn(v[F]):Jt(v[F]);if(Ii(re,ne))V(re,ne,R,null,x,D,G,H,j);else break;F++}for(;F<=W&&F<=ee;){const re=_[W],ne=v[ee]=j?Dn(v[ee]):Jt(v[ee]);if(Ii(re,ne))V(re,ne,R,null,x,D,G,H,j);else break;W--,ee--}if(F>W){if(F<=ee){const re=ee+1,ne=re<te?v[re].el:N;for(;F<=ee;)V(null,v[F]=j?Dn(v[F]):Jt(v[F]),R,ne,x,D,G,H,j),F++}}else if(F>ee)for(;F<=W;)ke(_[F],x,D,!0),F++;else{const re=F,ne=F,oe=new Map;for(F=ne;F<=ee;F++){const ze=v[F]=j?Dn(v[F]):Jt(v[F]);ze.key!=null&&oe.set(ze.key,F)}let ge,He=0;const qe=ee-ne+1;let Pt=!1,Je=0;const Rn=new Array(qe);for(F=0;F<qe;F++)Rn[F]=0;for(F=re;F<=W;F++){const ze=_[F];if(He>=qe){ke(ze,x,D,!0);continue}let Ct;if(ze.key!=null)Ct=oe.get(ze.key);else for(ge=ne;ge<=ee;ge++)if(Rn[ge-ne]===0&&Ii(ze,v[ge])){Ct=ge;break}Ct===void 0?ke(ze,x,D,!0):(Rn[Ct-ne]=F+1,Ct>=Je?Je=Ct:Pt=!0,V(ze,v[Ct],R,null,x,D,G,H,j),He++)}const ai=Pt?bA(Rn):Ur;for(ge=ai.length-1,F=qe-1;F>=0;F--){const ze=ne+F,Ct=v[ze],Is=ze+1<te?v[ze+1].el:N;Rn[F]===0?V(null,Ct,R,Is,x,D,G,H,j):Pt&&(ge<0||F!==ai[ge]?St(Ct,R,Is,2):ge--)}}},St=(_,v,R,N,x=null)=>{const{el:D,type:G,transition:H,children:j,shapeFlag:F}=_;if(F&6){St(_.component.subTree,v,R,N);return}if(F&128){_.suspense.move(v,R,N);return}if(F&64){G.move(_,v,R,Y);return}if(G===fn){r(D,v,R);for(let W=0;W<j.length;W++)St(j[W],v,R,N);r(_.anchor,v,R);return}if(G===Wa){$(_,v,R);return}if(N!==2&&F&1&&H)if(N===0)H.beforeEnter(D),r(D,v,R),It(()=>H.enter(D),x);else{const{leave:W,delayLeave:ee,afterLeave:re}=H,ne=()=>{_.ctx.isUnmounted?i(D):r(D,v,R)},oe=()=>{W(D,()=>{ne(),re&&re()})};ee?ee(D,ne,oe):oe()}else r(D,v,R)},ke=(_,v,R,N=!1,x=!1)=>{const{type:D,props:G,ref:H,children:j,dynamicChildren:F,shapeFlag:te,patchFlag:W,dirs:ee,cacheIndex:re}=_;if(W===-2&&(x=!1),H!=null&&(Tn(),Li(H,null,R,_,!0),wn()),re!=null&&(v.renderCache[re]=void 0),te&256){v.ctx.deactivate(_);return}const ne=te&1&&ee,oe=!Fi(_);let ge;if(oe&&(ge=G&&G.onVnodeBeforeUnmount)&&Gt(ge,v,_),te&6)Wt(_.component,R,N);else{if(te&128){_.suspense.unmount(R,N);return}ne&&nr(_,null,v,"beforeUnmount"),te&64?_.type.remove(_,v,R,Y,N):F&&!F.hasOnce&&(D!==fn||W>0&&W&64)?dt(F,v,R,!1,!0):(D===fn&&W&384||!x&&te&16)&&dt(j,v,R),N&&Oe(_)}(oe&&(ge=G&&G.onVnodeUnmounted)||ne)&&It(()=>{ge&&Gt(ge,v,_),ne&&nr(_,null,v,"unmounted")},R)},Oe=_=>{const{type:v,el:R,anchor:N,transition:x}=_;if(v===fn){bn(R,N);return}if(v===Wa){z(_);return}const D=()=>{i(R),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(_.shapeFlag&1&&x&&!x.persisted){const{leave:G,delayLeave:H}=x,j=()=>G(R,D);H?H(_.el,D,j):j()}else D()},bn=(_,v)=>{let R;for(;_!==v;)R=m(_),i(_),_=R;i(v)},Wt=(_,v,R)=>{const{bum:N,scope:x,job:D,subTree:G,um:H,m:j,a:F,parent:te,slots:{__:W}}=_;Lh(j),Lh(F),N&&Xs(N),te&&ie(W)&&W.forEach(ee=>{te.renderCache[ee]=void 0}),x.stop(),D&&(D.flags|=8,ke(G,_,v,R)),H&&It(H,v),It(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},dt=(_,v,R,N=!1,x=!1,D=0)=>{for(let G=D;G<_.length;G++)ke(_[G],v,R,N,x)},O=_=>{if(_.shapeFlag&6)return O(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=m(_.anchor||_.el),R=v&&v[Ww];return R?m(R):v};let X=!1;const Q=(_,v,R)=>{_==null?v._vnode&&ke(v._vnode,null,null,!0):V(v._vnode||null,_,v,null,null,null,R),v._vnode=_,X||(X=!0,Oh(),lg(),X=!1)},Y={p:V,um:ke,m:St,r:Oe,mt:at,mc:y,pc:fe,pbc:A,n:O,o:t};return{render:Q,hydrate:void 0,createApp:gA(Q)}}function Ka({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function AA(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pg(t,e,n=!1){const r=t.children,i=e.children;if(ie(r)&&ie(i))for(let s=0;s<r.length;s++){const a=r[s];let c=i[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[s]=Dn(i[s]),c.el=a.el),!n&&c.patchFlag!==-2&&Pg(a,c)),c.type===Zo&&(c.el=a.el),c.type===Kn&&!c.el&&(c.el=a.el)}}function bA(t){const e=t.slice(),n=[0];let r,i,s,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(i=n[n.length-1],t[i]<h){e[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)c=s+a>>1,t[n[c]]<h?s=c+1:a=c;h<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Cg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cg(e)}function Lh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const RA=Symbol.for("v-scx"),SA=()=>Zt(RA);function Ys(t,e,n){return kg(t,e,n)}function kg(t,e,n=Ae){const{immediate:r,deep:i,flush:s,once:a}=n,c=ot({},n),l=e&&r||!e&&s!=="post";let h;if(es){if(s==="sync"){const T=SA();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!l){const T=()=>{};return T.stop=Yt,T.resume=Yt,T.pause=Yt,T}}const d=ft;c.call=(T,k,V)=>nn(T,d,k,V);let p=!1;s==="post"?c.scheduler=T=>{It(T,d&&d.suspense)}:s!=="sync"&&(p=!0,c.scheduler=(T,k)=>{k?T():_l(T)}),c.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const m=$w(t,e,c);return es&&(h?h.push(m):l&&m()),m}function PA(t,e,n){const r=this.proxy,i=Ue(t)?t.includes(".")?Og(r,t):()=>r[t]:t.bind(r,r);let s;ae(e)?s=e:(s=e.handler,n=e);const a=gs(this),c=kg(i,s.bind(r),n);return a(),c}function Og(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const CA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zn(e)}Modifiers`]||t[`${Tr(e)}Modifiers`];function kA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let i=n;const s=e.startsWith("update:"),a=s&&CA(r,e.slice(7));a&&(a.trim&&(i=n.map(d=>Ue(d)?d.trim():d)),a.number&&(i=n.map(mo)));let c,l=r[c=Ba(e)]||r[c=Ba(zn(e))];!l&&s&&(l=r[c=Ba(Tr(e))]),l&&nn(l,t,6,i);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,nn(h,t,6,i)}}function Ng(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let a={},c=!1;if(!ae(t)){const l=h=>{const d=Ng(h,e,!0);d&&(c=!0,ot(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!c?(Pe(t)&&r.set(t,null),null):(ie(s)?s.forEach(l=>a[l]=null):ot(a,s),Pe(t)&&r.set(t,a),a)}function Yo(t,e){return!t||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,Tr(e))||Te(t,e))}function Fh(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:T,ctx:k,inheritAttrs:V}=t,L=vo(t);let K,U;try{if(n.shapeFlag&4){const z=i||r,le=z;K=Jt(h.call(le,z,d,p,T,m,k)),U=c}else{const z=e;K=Jt(z.length>1?z(p,{attrs:c,slots:a,emit:l}):z(p,null)),U=e.props?c:OA(c)}}catch(z){Bi.length=0,Xo(z,t,1),K=mt(Kn)}let $=K;if(U&&V!==!1){const z=Object.keys(U),{shapeFlag:le}=$;z.length&&le&7&&(s&&z.some(rl)&&(U=NA(U,s)),$=Gr($,U,!1,!0))}return n.dirs&&($=Gr($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&yl($,n.transition),K=$,vo(L),K}const OA=t=>{let e;for(const n in t)(n==="class"||n==="style"||qo(n))&&((e||(e={}))[n]=t[n]);return e},NA=(t,e)=>{const n={};for(const r in t)(!rl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function DA(t,e,n){const{props:r,children:i,component:s}=t,{props:a,children:c,patchFlag:l}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Uh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!Yo(h,m))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Uh(r,a,h):!0:!!a;return!1}function Uh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Yo(n,s))return!0}return!1}function VA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Dg=t=>t.__isSuspense;function xA(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):zw(t)}const fn=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),Kn=Symbol.for("v-cmt"),Wa=Symbol.for("v-stc"),Bi=[];let Tt=null;function Hn(t=!1){Bi.push(Tt=t?null:[])}function MA(){Bi.pop(),Tt=Bi[Bi.length-1]||null}let Zi=1;function Bh(t,e=!1){Zi+=t,t<0&&Tt&&e&&(Tt.hasOnce=!0)}function Vg(t){return t.dynamicChildren=Zi>0?Tt||Ur:null,MA(),Zi>0&&Tt&&Tt.push(t),t}function qr(t,e,n,r,i,s){return Vg(Fe(t,e,n,r,i,s,!0))}function xg(t,e,n,r,i){return Vg(mt(t,e,n,r,i,!0))}function Io(t){return t?t.__v_isVNode===!0:!1}function Ii(t,e){return t.type===e.type&&t.key===e.key}const Mg=({key:t})=>t??null,Zs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||it(t)||ae(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function Fe(t,e=null,n=null,r=0,i=null,s=t===fn?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mg(e),ref:e&&Zs(e),scopeId:hg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kt};return c?(Il(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),Zi>0&&!a&&Tt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tt.push(l),l}const mt=LA;function LA(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===aA)&&(t=Kn),Io(t)){const c=Gr(t,e,!0);return n&&Il(c,n),Zi>0&&!s&&Tt&&(c.shapeFlag&6?Tt[Tt.indexOf(t)]=c:Tt.push(c)),c.patchFlag=-2,c}if(GA(t)&&(t=t.__vccOpts),e){e=FA(e);let{class:c,style:l}=e;c&&!Ue(c)&&(e.class=al(c)),Pe(l)&&(gl(l)&&!ie(l)&&(l=ot({},l)),e.style=ol(l))}const a=Ue(t)?1:Dg(t)?128:Gw(t)?64:Pe(t)?4:ae(t)?2:0;return Fe(t,e,n,r,i,a,s,!0)}function FA(t){return t?gl(t)||Tg(t)?ot({},t):t:null}function Gr(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:c,transition:l}=t,h=e?BA(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Mg(h),ref:e&&e.ref?n&&s?ie(s)?s.concat(Zs(e)):[s,Zs(e)]:Zs(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==fn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gr(t.ssContent),ssFallback:t.ssFallback&&Gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&yl(d,l.clone(d)),d}function UA(t=" ",e=0){return mt(Zo,null,t,e)}function jh(t="",e=!1){return e?(Hn(),xg(Kn,null,t)):mt(Kn,null,t)}function Jt(t){return t==null||typeof t=="boolean"?mt(Kn):ie(t)?mt(fn,null,t.slice()):Io(t)?Dn(t):mt(Zo,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gr(t)}function Il(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Il(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Tg(e)?e._ctx=kt:i===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[UA(e)]):n=8);t.children=e,t.shapeFlag|=n}function BA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=al([e.class,r.class]));else if(i==="style")e.style=ol([e.style,r.style]);else if(qo(i)){const s=e[i],a=r[i];a&&s!==a&&!(ie(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=r[i])}return e}function Gt(t,e,n,r=null){nn(t,e,7,[n,r])}const jA=vg();let $A=0;function HA(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||jA,s={uid:$A++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ag(r,i),emitsOptions:Ng(r,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kA.bind(null,s),t.ce&&t.ce(s),s}let ft=null,To,Ic;{const t=Wo(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};To=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Ic=e("__VUE_SSR_SETTERS__",n=>es=n)}const gs=t=>{const e=ft;return To(t),t.scope.on(),()=>{t.scope.off(),To(e)}},$h=()=>{ft&&ft.scope.off(),To(null)};function Lg(t){return t.vnode.shapeFlag&4}let es=!1;function qA(t,e=!1,n=!1){e&&Ic(e);const{props:r,children:i}=t.vnode,s=Lg(t);mA(t,r,s,e),EA(t,i,n||e);const a=s?zA(t,e):void 0;return e&&Ic(!1),a}function zA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cA);const{setup:r}=n;if(r){Tn();const i=t.setupContext=r.length>1?WA(t):null,s=gs(t),a=ps(r,t,0,[t.props,i]),c=Dp(a);if(wn(),s(),(c||t.sp)&&!Fi(t)&&dg(t),c){if(a.then($h,$h),e)return a.then(l=>{Hh(t,l)}).catch(l=>{Xo(l,t,0)});t.asyncDep=a}else Hh(t,a)}else Fg(t)}function Hh(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=og(e)),Fg(t)}function Fg(t,e,n){const r=t.type;t.render||(t.render=r.render||Yt);{const i=gs(t);Tn();try{lA(t)}finally{wn(),i()}}}const KA={get(t,e){return nt(t,"get",""),t[e]}};function WA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,KA),slots:t.slots,emit:t.emit,expose:e}}function ea(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(og(ig(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ui)return Ui[n](t)},has(e,n){return n in e||n in Ui}})):t.proxy}function GA(t){return ae(t)&&"__vccOpts"in t}const Lt=(t,e)=>Bw(t,e,es);function Ug(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!ie(e)?Io(e)?mt(t,null,[e]):mt(t,e):mt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),mt(t,e,n))}const QA="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const qh=typeof window<"u"&&window.trustedTypes;if(qh)try{Tc=qh.createPolicy("vue",{createHTML:t=>t})}catch{}const Bg=Tc?t=>Tc.createHTML(t):t=>t,XA="http://www.w3.org/2000/svg",JA="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,zh=hn&&hn.createElement("template"),YA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?hn.createElementNS(XA,t):e==="mathml"?hn.createElementNS(JA,t):n?hn.createElement(t,{is:n}):hn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const a=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{zh.innerHTML=Bg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=zh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ZA=Symbol("_vtc");function e0(t,e,n){const r=t[ZA];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kh=Symbol("_vod"),t0=Symbol("_vsh"),n0=Symbol(""),r0=/(^|;)\s*display\s*:/;function i0(t,e,n){const r=t.style,i=Ue(n);let s=!1;if(n&&!i){if(e)if(Ue(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&eo(r,c,"")}else for(const a in e)n[a]==null&&eo(r,a,"");for(const a in n)a==="display"&&(s=!0),eo(r,a,n[a])}else if(i){if(e!==n){const a=r[n0];a&&(n+=";"+a),r.cssText=n,s=r0.test(n)}}else e&&t.removeAttribute("style");Kh in t&&(t[Kh]=s?r.display:"",t[t0]&&(r.display="none"))}const Wh=/\s*!important$/;function eo(t,e,n){if(ie(n))n.forEach(r=>eo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=s0(t,e);Wh.test(n)?t.setProperty(Tr(r),n.replace(Wh,""),"important"):t[r]=n}}const Gh=["Webkit","Moz","ms"],Ga={};function s0(t,e){const n=Ga[e];if(n)return n;let r=zn(e);if(r!=="filter"&&r in t)return Ga[e]=r;r=Mp(r);for(let i=0;i<Gh.length;i++){const s=Gh[i]+r;if(s in t)return Ga[e]=s}return e}const Qh="http://www.w3.org/1999/xlink";function Xh(t,e,n,r,i,s=dw(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qh,e.slice(6,e.length)):t.setAttributeNS(Qh,e,n):n==null||s&&!Lp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":tn(n)?String(n):n)}function Jh(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bg(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Lp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(i||e)}function or(t,e,n,r){t.addEventListener(e,n,r)}function o0(t,e,n,r){t.removeEventListener(e,n,r)}const Yh=Symbol("_vei");function a0(t,e,n,r,i=null){const s=t[Yh]||(t[Yh]={}),a=s[e];if(r&&a)a.value=r;else{const[c,l]=c0(e);if(r){const h=s[e]=h0(r,i);or(t,c,h,l)}else a&&(o0(t,c,a,l),s[e]=void 0)}}const Zh=/(?:Once|Passive|Capture)$/;function c0(t){let e;if(Zh.test(t)){e={};let r;for(;r=t.match(Zh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tr(t.slice(2)),e]}let Qa=0;const l0=Promise.resolve(),u0=()=>Qa||(l0.then(()=>Qa=0),Qa=Date.now());function h0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn(f0(r,n.value),e,5,[r])};return n.value=t,n.attached=u0(),n}function f0(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ef=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,d0=(t,e,n,r,i,s)=>{const a=i==="svg";e==="class"?e0(t,r,a):e==="style"?i0(t,n,r):qo(e)?rl(e)||a0(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):p0(t,e,r,a))?(Jh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xh(t,e,r,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(r))?Jh(t,zn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xh(t,e,r,a))};function p0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ef(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ef(e)&&Ue(n)?!1:e in t}const wo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Xs(e,n):e};function g0(t){t.target.composing=!0}function tf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zr=Symbol("_assign"),ji={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[zr]=wo(i);const s=r||i.props&&i.props.type==="number";or(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),s&&(c=mo(c)),t[zr](c)}),n&&or(t,"change",()=>{t.value=t.value.trim()}),e||(or(t,"compositionstart",g0),or(t,"compositionend",tf),or(t,"change",tf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},a){if(t[zr]=wo(a),t.composing)return;const c=(s||t.type==="number")&&!/^0\d/.test(t.value)?mo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l))}},m0={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=zo(e);or(t,"change",()=>{const s=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?mo(Ao(a)):Ao(a));t[zr](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,ml(()=>{t._assigning=!1})}),t[zr]=wo(r)},mounted(t,{value:e}){nf(t,e)},beforeUpdate(t,e,n){t[zr]=wo(n)},updated(t,{value:e}){t._assigning||nf(t,e)}};function nf(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!zo(e))){for(let i=0,s=t.options.length;i<s;i++){const a=t.options[i],c=Ao(a);if(n)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(h=>String(h)===String(c)):a.selected=gw(e,c)>-1}else a.selected=e.has(c);else if(Go(Ao(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ao(t){return"_value"in t?t._value:t.value}const _0=["ctrl","shift","alt","meta"],y0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_0.some(n=>t[`${n}Key`]&&!e.includes(n))},v0=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let a=0;a<e.length;a++){const c=y0[e[a]];if(c&&c(i,e))return}return t(i,...s)})},E0=ot({patchProp:d0},YA);let rf;function I0(){return rf||(rf=TA(E0))}const T0=(...t)=>{const e=I0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=A0(r);if(!i)return;const s=e._component;!ae(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,w0(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function w0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function A0(t){return Ue(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const b0=Symbol();var sf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(sf||(sf={}));function R0(){const t=mw(!0),e=t.run(()=>Mt({}));let n=[],r=[];const i=ig({install(s){i._a=s,s.provide(b0,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return this._a?n.push(s):r.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Tl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},S0={key:0},P0={key:1},C0={__name:"PhoneAuth",setup(t){const e=Mt(""),n=Mt(""),r=Mt(null),i=Mt(""),s=Mt(1),a=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new tT("recaptcha-container",{size:"invisible",callback:()=>{}},Rh))},c=async()=>{i.value="",a();try{r.value=await iT(Rh,e.value,window.recaptchaVerifier),s.value=2,i.value="OTP sent! Check your phone."}catch(h){i.value="Failed to send OTP: "+h.message}},l=async()=>{try{await r.value.confirm(n.value),i.value="Phone number verified successfully!"}catch{i.value="Invalid OTP, try again."}};return(h,d)=>(Hn(),qr("div",null,[s.value===1?(Hn(),qr("div",S0,[xr(Fe("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>e.value=p),type:"tel",placeholder:"+1234567890"},null,512),[[ji,e.value]]),Fe("button",{onClick:c},"Send OTP")])):jh("",!0),s.value===2?(Hn(),qr("div",P0,[xr(Fe("input",{"onUpdate:modelValue":d[1]||(d[1]=p=>n.value=p),type:"text",placeholder:"Enter OTP"},null,512),[[ji,n.value]]),Fe("button",{onClick:l},"Verify OTP")])):jh("",!0),d[2]||(d[2]=Fe("div",{id:"recaptcha-container"},null,-1)),Fe("p",null,Up(i.value),1)]))}},jg=Tl(C0,[["__scopeId","data-v-188f2e16"]]),k0={id:"app"},O0={__name:"App",setup(t){return(e,n)=>(Hn(),qr("div",k0,[mt(jg)]))}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Or=typeof document<"u";function $g(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function N0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$g(t.default)}const Ee=Object.assign;function Xa(t,e){const n={};for(const r in e){const i=e[r];n[r]=qt(i)?i.map(t):t(i)}return n}const $i=()=>{},qt=Array.isArray,Hg=/#/g,D0=/&/g,V0=/\//g,x0=/=/g,M0=/\?/g,qg=/\+/g,L0=/%5B/g,F0=/%5D/g,zg=/%5E/g,U0=/%60/g,Kg=/%7B/g,B0=/%7C/g,Wg=/%7D/g,j0=/%20/g;function wl(t){return encodeURI(""+t).replace(B0,"|").replace(L0,"[").replace(F0,"]")}function $0(t){return wl(t).replace(Kg,"{").replace(Wg,"}").replace(zg,"^")}function wc(t){return wl(t).replace(qg,"%2B").replace(j0,"+").replace(Hg,"%23").replace(D0,"%26").replace(U0,"`").replace(Kg,"{").replace(Wg,"}").replace(zg,"^")}function H0(t){return wc(t).replace(x0,"%3D")}function q0(t){return wl(t).replace(Hg,"%23").replace(M0,"%3F")}function z0(t){return t==null?"":q0(t).replace(V0,"%2F")}function ts(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const K0=/\/$/,W0=t=>t.replace(K0,"");function Ja(t,e,n="/"){let r,i={},s="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=J0(r??e,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:ts(a)}}function G0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function of(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Q0(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Qr(e.matched[r],n.matched[i])&&Gg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!X0(t[n],e[n]))return!1;return!0}function X0(t,e){return qt(t)?af(t,e):qt(e)?af(e,t):t===e}function af(t,e){return qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function J0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ns;(function(t){t.pop="pop",t.push="push"})(ns||(ns={}));var Hi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hi||(Hi={}));function Y0(t){if(!t)if(Or){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),W0(t)}const Z0=/^[^#]+#/;function eb(t,e){return t.replace(Z0,"#")+e}function tb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ta=()=>({left:window.scrollX,top:window.scrollY});function nb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=tb(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cf(t,e){return(history.state?history.state.position-e:-1)+t}const Ac=new Map;function rb(t,e){Ac.set(t,e)}function ib(t){const e=Ac.get(t);return Ac.delete(t),e}let sb=()=>location.protocol+"//"+location.host;function Qg(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let c=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(c);return l[0]!=="/"&&(l="/"+l),of(l,"")}return of(n,t)+r+i}function ob(t,e,n,r){let i=[],s=[],a=null;const c=({state:m})=>{const T=Qg(t,location),k=n.value,V=e.value;let L=0;if(m){if(n.value=T,e.value=m,a&&a===k){a=null;return}L=V?m.position-V.position:0}else r(T);i.forEach(K=>{K(n.value,k,{delta:L,type:ns.pop,direction:L?L>0?Hi.forward:Hi.back:Hi.unknown})})};function l(){a=n.value}function h(m){i.push(m);const T=()=>{const k=i.indexOf(m);k>-1&&i.splice(k,1)};return s.push(T),T}function d(){const{history:m}=window;m.state&&m.replaceState(Ee({},m.state,{scroll:ta()}),"")}function p(){for(const m of s)m();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function lf(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?ta():null}}function ab(t){const{history:e,location:n}=window,r={value:Qg(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:sb()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),i.value=h}catch(T){console.error(T),n[d?"replace":"assign"](m)}}function a(l,h){const d=Ee({},e.state,lf(i.value.back,l,i.value.forward,!0),h,{position:i.value.position});s(l,d,!0),r.value=l}function c(l,h){const d=Ee({},i.value,e.state,{forward:l,scroll:ta()});s(d.current,d,!0);const p=Ee({},lf(r.value,l,null),{position:d.position+1},h);s(l,p,!1),r.value=l}return{location:r,state:i,push:c,replace:a}}function cb(t){t=Y0(t);const e=ab(t),n=ob(t,e.state,e.location,e.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=Ee({location:"",base:t,go:r,createHref:eb.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function lb(t){return typeof t=="string"||t&&typeof t=="object"}function Xg(t){return typeof t=="string"||typeof t=="symbol"}const Jg=Symbol("");var uf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(uf||(uf={}));function Xr(t,e){return Ee(new Error,{type:t,[Jg]:!0},e)}function un(t,e){return t instanceof Error&&Jg in t&&(e==null||!!(t.type&e))}const hf="[^/]+?",ub={sensitive:!1,strict:!1,start:!0,end:!0},hb=/[.+*?^${}()[\]/\\]/g;function fb(t,e){const n=Ee({},ub,e),r=[];let i=n.start?"^":"";const s=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(i+="/");for(let p=0;p<h.length;p++){const m=h[p];let T=40+(n.sensitive?.25:0);if(m.type===0)p||(i+="/"),i+=m.value.replace(hb,"\\$&"),T+=40;else if(m.type===1){const{value:k,repeatable:V,optional:L,regexp:K}=m;s.push({name:k,repeatable:V,optional:L});const U=K||hf;if(U!==hf){T+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${k}" (${U}): `+z.message)}}let $=V?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||($=L&&h.length<2?`(?:/${$})`:"/"+$),L&&($+="?"),i+=$,T+=20,L&&(T+=-8),V&&(T+=-20),U===".*"&&(T+=-50)}d.push(T)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const T=d[m]||"",k=s[m-1];p[k.name]=T&&k.repeatable?T.split("/"):T}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const T of m)if(T.type===0)d+=T.value;else if(T.type===1){const{value:k,repeatable:V,optional:L}=T,K=k in h?h[k]:"";if(qt(K)&&!V)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const U=qt(K)?K.join("/"):K;if(!U)if(L)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=U}}return d||"/"}return{re:a,score:r,keys:s,parse:c,stringify:l}}function db(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Yg(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=db(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(ff(r))return 1;if(ff(i))return-1}return i.length-r.length}function ff(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pb={type:0,value:""},gb=/[a-zA-Z0-9_]/;function mb(t){if(!t)return[[]];if(t==="/")return[[pb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${h}": ${T}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let c=0,l,h="",d="";function p(){h&&(n===0?s.push({type:0,value:h}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:gb.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),i}function _b(t,e,n){const r=fb(mb(t.path),n),i=Ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function yb(t,e){const n=[],r=new Map;e=mf({strict:!1,end:!0,sensitive:!1},e);function i(p){return r.get(p)}function s(p,m,T){const k=!T,V=pf(p);V.aliasOf=T&&T.record;const L=mf(e,p),K=[V];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of z)K.push(pf(Ee({},V,{components:T?T.record.components:V.components,path:le,aliasOf:T?T.record:V})))}let U,$;for(const z of K){const{path:le}=z;if(m&&le[0]!=="/"){const he=m.record.path,w=he[he.length-1]==="/"?"":"/";z.path=m.record.path+(le&&w+le)}if(U=_b(z,m,L),T?T.alias.push(U):($=$||U,$!==U&&$.alias.push(U),k&&p.name&&!gf(U)&&a(p.name)),Zg(U)&&l(U),V.children){const he=V.children;for(let w=0;w<he.length;w++)s(he[w],U,T&&T.children[w])}T=T||U}return $?()=>{a($)}:$i}function a(p){if(Xg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return n}function l(p){const m=Ib(p,n);n.splice(m,0,p),p.record.name&&!gf(p)&&r.set(p.record.name,p)}function h(p,m){let T,k={},V,L;if("name"in p&&p.name){if(T=r.get(p.name),!T)throw Xr(1,{location:p});L=T.record.name,k=Ee(df(m.params,T.keys.filter($=>!$.optional).concat(T.parent?T.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&df(p.params,T.keys.map($=>$.name))),V=T.stringify(k)}else if(p.path!=null)V=p.path,T=n.find($=>$.re.test(V)),T&&(k=T.parse(V),L=T.record.name);else{if(T=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!T)throw Xr(1,{location:p,currentLocation:m});L=T.record.name,k=Ee({},m.params,p.params),V=T.stringify(k)}const K=[];let U=T;for(;U;)K.unshift(U.record),U=U.parent;return{name:L,path:V,params:k,matched:K,meta:Eb(K)}}t.forEach(p=>s(p));function d(){n.length=0,r.clear()}return{addRoute:s,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:i}}function df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:vb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function vb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function gf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Eb(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ib(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Yg(t,e[s])<0?r=s:n=s+1}const i=Tb(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Tb(t){let e=t;for(;e=e.parent;)if(Zg(e)&&Yg(t,e)===0)return e}function Zg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function wb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(qg," "),a=s.indexOf("="),c=ts(a<0?s:s.slice(0,a)),l=a<0?null:ts(s.slice(a+1));if(c in e){let h=e[c];qt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function _f(t){let e="";for(let n in t){const r=t[n];if(n=H0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(r)?r.map(s=>s&&wc(s)):[r&&wc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Ab(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const bb=Symbol(""),yf=Symbol(""),na=Symbol(""),em=Symbol(""),bc=Symbol("");function Ti(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vn(t,e,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(Xr(4,{from:n,to:e})):m instanceof Error?l(m):lb(m)?l(Xr(2,{from:e,to:m})):(a&&r.enterCallbacks[i]===a&&typeof m=="function"&&a.push(m),c())},d=s(()=>t.call(r&&r.instances[i],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Ya(t,e,n,r,i=s=>s()){const s=[];for(const a of t)for(const c in a.components){let l=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if($g(l)){const d=(l.__vccOpts||l)[e];d&&s.push(Vn(d,n,r,a,c,i))}else{let h=l();s.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const p=N0(d)?d.default:d;a.mods[c]=d,a.components[c]=p;const T=(p.__vccOpts||p)[e];return T&&Vn(T,n,r,a,c,i)()}))}}return s}function vf(t){const e=Zt(na),n=Zt(em),r=Lt(()=>{const l=jr(t.to);return e.resolve(l)}),i=Lt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Qr.bind(null,d));if(m>-1)return m;const T=Ef(l[h-2]);return h>1&&Ef(d)===T&&p[p.length-1].path!==T?p.findIndex(Qr.bind(null,l[h-2])):m}),s=Lt(()=>i.value>-1&&kb(n.params,r.value.params)),a=Lt(()=>i.value>-1&&i.value===n.matched.length-1&&Gg(n.params,r.value.params));function c(l={}){if(Cb(l)){const h=e[jr(t.replace)?"replace":"push"](jr(t.to)).catch($i);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Lt(()=>r.value.href),isActive:s,isExactActive:a,navigate:c}}function Rb(t){return t.length===1?t[0]:t}const Sb=fg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vf,setup(t,{slots:e}){const n=Qo(vf(t)),{options:r}=Zt(na),i=Lt(()=>({[If(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[If(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&Rb(e.default(n));return t.custom?s:Ug("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Pb=Sb;function Cb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kb(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!qt(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Ef(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const If=(t,e,n)=>t??e??n,Ob=fg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(bc),i=Lt(()=>t.route||r.value),s=Zt(yf,0),a=Lt(()=>{let h=jr(s);const{matched:d}=i.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=Lt(()=>i.value.matched[a.value]);Js(yf,Lt(()=>a.value+1)),Js(bb,c),Js(bc,i);const l=Mt();return Ys(()=>[l.value,c.value,t.name],([h,d,p],[m,T,k])=>{d&&(d.instances[p]=h,T&&T!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),h&&d&&(!T||!Qr(d,T)||!m)&&(d.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=i.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return Tf(n.default,{Component:m,route:h});const T=p.props[d],k=T?T===!0?h.params:typeof T=="function"?T(h):T:null,L=Ug(m,Ee({},k,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Tf(n.default,{Component:L,route:h})||L}}});function Tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Nb=Ob;function Db(t){const e=yb(t.routes,t),n=t.parseQuery||wb,r=t.stringifyQuery||_f,i=t.history,s=Ti(),a=Ti(),c=Ti(),l=Mw(On);let h=On;Or&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xa.bind(null,O=>""+O),p=Xa.bind(null,z0),m=Xa.bind(null,ts);function T(O,X){let Q,Y;return Xg(O)?(Q=e.getRecordMatcher(O),Y=X):Y=O,e.addRoute(Y,Q)}function k(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function V(){return e.getRoutes().map(O=>O.record)}function L(O){return!!e.getRecordMatcher(O)}function K(O,X){if(X=Ee({},X||l.value),typeof O=="string"){const R=Ja(n,O,X.path),N=e.resolve({path:R.path},X),x=i.createHref(R.fullPath);return Ee(R,N,{params:m(N.params),hash:ts(R.hash),redirectedFrom:void 0,href:x})}let Q;if(O.path!=null)Q=Ee({},O,{path:Ja(n,O.path,X.path).path});else{const R=Ee({},O.params);for(const N in R)R[N]==null&&delete R[N];Q=Ee({},O,{params:p(R)}),X.params=p(X.params)}const Y=e.resolve(Q,X),ye=O.hash||"";Y.params=d(m(Y.params));const _=G0(r,Ee({},O,{hash:$0(ye),path:Y.path})),v=i.createHref(_);return Ee({fullPath:_,hash:ye,query:r===_f?Ab(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:v})}function U(O){return typeof O=="string"?Ja(n,O,l.value.path):Ee({},O)}function $(O,X){if(h!==O)return Xr(8,{from:X,to:O})}function z(O){return w(O)}function le(O){return z(Ee(U(O),{replace:!0}))}function he(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let Y=typeof Q=="function"?Q(O):Q;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=U(Y):{path:Y},Y.params={}),Ee({query:O.query,hash:O.hash,params:Y.path!=null?{}:O.params},Y)}}function w(O,X){const Q=h=K(O),Y=l.value,ye=O.state,_=O.force,v=O.replace===!0,R=he(Q);if(R)return w(Ee(U(R),{state:typeof R=="object"?Ee({},ye,R.state):ye,force:_,replace:v}),X||Q);const N=Q;N.redirectedFrom=X;let x;return!_&&Q0(r,Y,Q)&&(x=Xr(16,{to:N,from:Y}),St(Y,Y,!0,!1)),(x?Promise.resolve(x):A(N,Y)).catch(D=>un(D)?un(D,2)?D:Nt(D):fe(D,N,Y)).then(D=>{if(D){if(un(D,2))return w(Ee({replace:v},U(D.to),{state:typeof D.to=="object"?Ee({},ye,D.to.state):ye,force:_}),X||N)}else D=S(N,Y,!0,v,ye);return b(N,Y,D),D})}function y(O,X){const Q=$(O,X);return Q?Promise.reject(Q):Promise.resolve()}function I(O){const X=bn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function A(O,X){let Q;const[Y,ye,_]=Vb(O,X);Q=Ya(Y.reverse(),"beforeRouteLeave",O,X);for(const R of Y)R.leaveGuards.forEach(N=>{Q.push(Vn(N,O,X))});const v=y.bind(null,O,X);return Q.push(v),dt(Q).then(()=>{Q=[];for(const R of s.list())Q.push(Vn(R,O,X));return Q.push(v),dt(Q)}).then(()=>{Q=Ya(ye,"beforeRouteUpdate",O,X);for(const R of ye)R.updateGuards.forEach(N=>{Q.push(Vn(N,O,X))});return Q.push(v),dt(Q)}).then(()=>{Q=[];for(const R of _)if(R.beforeEnter)if(qt(R.beforeEnter))for(const N of R.beforeEnter)Q.push(Vn(N,O,X));else Q.push(Vn(R.beforeEnter,O,X));return Q.push(v),dt(Q)}).then(()=>(O.matched.forEach(R=>R.enterCallbacks={}),Q=Ya(_,"beforeRouteEnter",O,X,I),Q.push(v),dt(Q))).then(()=>{Q=[];for(const R of a.list())Q.push(Vn(R,O,X));return Q.push(v),dt(Q)}).catch(R=>un(R,8)?R:Promise.reject(R))}function b(O,X,Q){c.list().forEach(Y=>I(()=>Y(O,X,Q)))}function S(O,X,Q,Y,ye){const _=$(O,X);if(_)return _;const v=X===On,R=Or?history.state:{};Q&&(Y||v?i.replace(O.fullPath,Ee({scroll:v&&R&&R.scroll},ye)):i.push(O.fullPath,ye)),l.value=O,St(O,X,Q,v),Nt()}let E;function at(){E||(E=i.listen((O,X,Q)=>{if(!Wt.listening)return;const Y=K(O),ye=he(Y);if(ye){w(Ee(ye,{replace:!0,force:!0}),Y).catch($i);return}h=Y;const _=l.value;Or&&rb(cf(_.fullPath,Q.delta),ta()),A(Y,_).catch(v=>un(v,12)?v:un(v,2)?(w(Ee(U(v.to),{force:!0}),Y).then(R=>{un(R,20)&&!Q.delta&&Q.type===ns.pop&&i.go(-1,!1)}).catch($i),Promise.reject()):(Q.delta&&i.go(-Q.delta,!1),fe(v,Y,_))).then(v=>{v=v||S(Y,_,!1),v&&(Q.delta&&!un(v,8)?i.go(-Q.delta,!1):Q.type===ns.pop&&un(v,20)&&i.go(-1,!1)),b(Y,_,v)}).catch($i)}))}let Rt=Ti(),Ve=Ti(),pe;function fe(O,X,Q){Nt(O);const Y=Ve.list();return Y.length?Y.forEach(ye=>ye(O,X,Q)):console.error(O),Promise.reject(O)}function vt(){return pe&&l.value!==On?Promise.resolve():new Promise((O,X)=>{Rt.add([O,X])})}function Nt(O){return pe||(pe=!O,at(),Rt.list().forEach(([X,Q])=>O?Q(O):X()),Rt.reset()),O}function St(O,X,Q,Y){const{scrollBehavior:ye}=t;if(!Or||!ye)return Promise.resolve();const _=!Q&&ib(cf(O.fullPath,0))||(Y||!Q)&&history.state&&history.state.scroll||null;return ml().then(()=>ye(O,X,_)).then(v=>v&&nb(v)).catch(v=>fe(v,O,X))}const ke=O=>i.go(O);let Oe;const bn=new Set,Wt={currentRoute:l,listening:!0,addRoute:T,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:V,resolve:K,options:t,push:z,replace:le,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:s.add,beforeResolve:a.add,afterEach:c.add,onError:Ve.add,isReady:vt,install(O){const X=this;O.component("RouterLink",Pb),O.component("RouterView",Nb),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>jr(l)}),Or&&!Oe&&l.value===On&&(Oe=!0,z(i.location).catch(ye=>{}));const Q={};for(const ye in On)Object.defineProperty(Q,ye,{get:()=>l.value[ye],enumerable:!0});O.provide(na,X),O.provide(em,ng(Q)),O.provide(bc,l);const Y=O.unmount;bn.add(O),O.unmount=function(){bn.delete(O),bn.size<1&&(h=On,E&&E(),E=null,l.value=On,Oe=!1,pe=!1),Y()}}};function dt(O){return O.reduce((X,Q)=>X.then(()=>I(Q)),Promise.resolve())}return Wt}function Vb(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const c=e.matched[a];c&&(t.matched.find(h=>Qr(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>Qr(h,l))||i.push(l))}return[n,r,i]}function xb(){return Zt(na)}const Mb={__name:"HomeView",setup(t){return(e,n)=>(Hn(),xg(jg))}},Lb={},Fb={class:"about"};function Ub(t,e){return Hn(),qr("div",Fb,e[0]||(e[0]=[Fe("h1",null,"This is an about page",-1)]))}const Bb=Tl(Lb,[["render",Ub]]);var wf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Al;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.D=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,b,S){for(var E=Array(arguments.length-2),at=2;at<arguments.length;at++)E[at-2]=arguments[at];return y.prototype[b].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,I){I||(I=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(b=0;16>b;++b)A[b]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],b=w.g[2];var S=w.g[3],E=y+(S^I&(b^S))+A[0]+3614090360&4294967295;y=I+(E<<7&4294967295|E>>>25),E=S+(b^y&(I^b))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(I^S&(y^I))+A[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=I+(y^b&(S^y))+A[3]+3250441966&4294967295,I=b+(E<<22&4294967295|E>>>10),E=y+(S^I&(b^S))+A[4]+4118548399&4294967295,y=I+(E<<7&4294967295|E>>>25),E=S+(b^y&(I^b))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(I^S&(y^I))+A[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=I+(y^b&(S^y))+A[7]+4249261313&4294967295,I=b+(E<<22&4294967295|E>>>10),E=y+(S^I&(b^S))+A[8]+1770035416&4294967295,y=I+(E<<7&4294967295|E>>>25),E=S+(b^y&(I^b))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(I^S&(y^I))+A[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=I+(y^b&(S^y))+A[11]+2304563134&4294967295,I=b+(E<<22&4294967295|E>>>10),E=y+(S^I&(b^S))+A[12]+1804603682&4294967295,y=I+(E<<7&4294967295|E>>>25),E=S+(b^y&(I^b))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(I^S&(y^I))+A[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=I+(y^b&(S^y))+A[15]+1236535329&4294967295,I=b+(E<<22&4294967295|E>>>10),E=y+(b^S&(I^b))+A[1]+4129170786&4294967295,y=I+(E<<5&4294967295|E>>>27),E=S+(I^b&(y^I))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^I&(S^y))+A[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=I+(S^y&(b^S))+A[0]+3921069994&4294967295,I=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(I^b))+A[5]+3593408605&4294967295,y=I+(E<<5&4294967295|E>>>27),E=S+(I^b&(y^I))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^I&(S^y))+A[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=I+(S^y&(b^S))+A[4]+3889429448&4294967295,I=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(I^b))+A[9]+568446438&4294967295,y=I+(E<<5&4294967295|E>>>27),E=S+(I^b&(y^I))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^I&(S^y))+A[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=I+(S^y&(b^S))+A[8]+1163531501&4294967295,I=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(I^b))+A[13]+2850285829&4294967295,y=I+(E<<5&4294967295|E>>>27),E=S+(I^b&(y^I))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^I&(S^y))+A[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=I+(S^y&(b^S))+A[12]+2368359562&4294967295,I=b+(E<<20&4294967295|E>>>12),E=y+(I^b^S)+A[5]+4294588738&4294967295,y=I+(E<<4&4294967295|E>>>28),E=S+(y^I^b)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^I)+A[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=I+(b^S^y)+A[14]+4259657740&4294967295,I=b+(E<<23&4294967295|E>>>9),E=y+(I^b^S)+A[1]+2763975236&4294967295,y=I+(E<<4&4294967295|E>>>28),E=S+(y^I^b)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^I)+A[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=I+(b^S^y)+A[10]+3200236656&4294967295,I=b+(E<<23&4294967295|E>>>9),E=y+(I^b^S)+A[13]+681279174&4294967295,y=I+(E<<4&4294967295|E>>>28),E=S+(y^I^b)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^I)+A[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=I+(b^S^y)+A[6]+76029189&4294967295,I=b+(E<<23&4294967295|E>>>9),E=y+(I^b^S)+A[9]+3654602809&4294967295,y=I+(E<<4&4294967295|E>>>28),E=S+(y^I^b)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^I)+A[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=I+(b^S^y)+A[2]+3299628645&4294967295,I=b+(E<<23&4294967295|E>>>9),E=y+(b^(I|~S))+A[0]+4096336452&4294967295,y=I+(E<<6&4294967295|E>>>26),E=S+(I^(y|~b))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~I))+A[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=I+(S^(b|~y))+A[5]+4237533241&4294967295,I=b+(E<<21&4294967295|E>>>11),E=y+(b^(I|~S))+A[12]+1700485571&4294967295,y=I+(E<<6&4294967295|E>>>26),E=S+(I^(y|~b))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~I))+A[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=I+(S^(b|~y))+A[1]+2240044497&4294967295,I=b+(E<<21&4294967295|E>>>11),E=y+(b^(I|~S))+A[8]+1873313359&4294967295,y=I+(E<<6&4294967295|E>>>26),E=S+(I^(y|~b))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~I))+A[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=I+(S^(b|~y))+A[13]+1309151649&4294967295,I=b+(E<<21&4294967295|E>>>11),E=y+(b^(I|~S))+A[4]+4149444226&4294967295,y=I+(E<<6&4294967295|E>>>26),E=S+(I^(y|~b))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~I))+A[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=I+(S^(b|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var I=y-this.blockSize,A=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=I;)i(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[b++]=w.charCodeAt(S++),b==this.blockSize){i(this,A),b=0;break}}else for(;S<y;)if(A[b++]=w[S++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var I=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=I&255,I/=256;for(this.u(w),w=Array(16),y=I=0;4>y;++y)for(var A=0;32>A;A+=8)w[I++]=this.g[y]>>>A&255;return w};function s(w,y){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function a(w,y){this.h=y;for(var I=[],A=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;A&&S==y||(I[b]=S,A=!1)}this.g=I}var c={};function l(w){return-128<=w&&128>w?s(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return L(h(-w));for(var y=[],I=1,A=0;w>=I;A++)y[A]=w/I|0,I*=4294967296;return new a(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return L(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(y,8)),A=p,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),E=parseInt(w.substring(b,b+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(E))):(A=A.j(I),A=A.add(h(E)))}return A}var p=l(0),m=l(1),T=l(16777216);t=a.prototype,t.m=function(){if(V(this))return-L(this).m();for(var w=0,y=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(V(this))return"-"+L(this).toString(w);for(var y=h(Math.pow(w,6)),I=this,A="";;){var b=z(I,y).g;I=K(I,b.j(y));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=b,k(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function V(w){return w.h==-1}t.l=function(w){return w=K(this,w),V(w)?-1:k(w)?0:1};function L(w){for(var y=w.g.length,I=[],A=0;A<y;A++)I[A]=~w.g[A];return new a(I,~w.h).add(m)}t.abs=function(){return V(this)?L(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0,b=0;b<=y;b++){var S=A+(this.i(b)&65535)+(w.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=E>>>16,S&=65535,E&=65535,I[b]=E<<16|S}return new a(I,I[I.length-1]&-2147483648?-1:0)};function K(w,y){return w.add(L(y))}t.j=function(w){if(k(this)||k(w))return p;if(V(this))return V(w)?L(this).j(L(w)):L(L(this).j(w));if(V(w))return L(this.j(L(w)));if(0>this.l(T)&&0>w.l(T))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,I=[],A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var S=this.i(A)>>>16,E=this.i(A)&65535,at=w.i(b)>>>16,Rt=w.i(b)&65535;I[2*A+2*b]+=E*Rt,U(I,2*A+2*b),I[2*A+2*b+1]+=S*Rt,U(I,2*A+2*b+1),I[2*A+2*b+1]+=E*at,U(I,2*A+2*b+1),I[2*A+2*b+2]+=S*at,U(I,2*A+2*b+2)}for(A=0;A<y;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=y;A<2*y;A++)I[A]=0;return new a(I,0)};function U(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function $(w,y){this.g=w,this.h=y}function z(w,y){if(k(y))throw Error("division by zero");if(k(w))return new $(p,p);if(V(w))return y=z(L(w),y),new $(L(y.g),L(y.h));if(V(y))return y=z(w,L(y)),new $(L(y.g),y.h);if(30<w.g.length){if(V(w)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=y;0>=A.l(w);)I=le(I),A=le(A);var b=he(I,1),S=he(A,1);for(A=he(A,2),I=he(I,2);!k(A);){var E=S.add(A);0>=E.l(w)&&(b=b.add(I),S=E),A=he(A,1),I=he(I,1)}return y=K(w,b.j(y)),new $(b,y)}for(b=p;0<=w.l(y);){for(I=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),E=S.j(y);V(E)||0<E.l(w);)I-=A,S=h(I),E=S.j(y);k(S)&&(S=m),b=b.add(S),w=K(w,E)}return new $(b,w)}t.A=function(w){return z(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)&w.i(A);return new a(I,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)|w.i(A);return new a(I,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)^w.i(A);return new a(I,this.h^w.h)};function le(w){for(var y=w.g.length+1,I=[],A=0;A<y;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new a(I,w.h)}function he(w,y){var I=y>>5;y%=32;for(var A=w.g.length-I,b=[],S=0;S<A;S++)b[S]=0<y?w.i(S+I)>>>y|w.i(S+I+1)<<32-y:w.i(S+I);return new a(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Al=a}).apply(typeof wf<"u"?wf:typeof self<"u"?self:typeof window<"u"?window:{});var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tm,Ri,nm,to,Rc,rm,im,sm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof js=="object"&&js];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var f=0,g=!1,P={next:function(){if(!g&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function T(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,P,C){for(var q=Array(arguments.length-2),we=2;we<arguments.length;we++)q[we-2]=arguments[we];return u.prototype[P].apply(g,q)}}function V(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const P=o.length||0,C=g.length||0;o.length=P+C;for(let q=0;q<C;q++)o[P+q]=g[q]}else o.push(g)}}class K{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var le=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function he(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let C=0;C<I.length;C++)f=I[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=vt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class at{constructor(){this.h=this.g=null}add(u,f){const g=Rt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Rt=new K(()=>new Ve,o=>o.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,fe=!1,vt=new at,Nt=()=>{const o=c.Promise.resolve(void 0);pe=()=>{o.then(St)}};var St=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Rt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}fe=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var bn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o}();function Wt(o,u){if(Oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(le){e:{try{z(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:dt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wt.aa.h.call(this)}}k(Wt,Oe);var dt={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(o,u,f,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=P,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ye(o){this.src=o,this.g={},this.h=0}ye.prototype.add=function(o,u,f,g,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var q=v(o,u,g,P);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new Q(u,this.src,C,!!g,P),u.fa=f,o.push(u)),u};function _(o,u){var f=u.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=P)&&Array.prototype.splice.call(g,P,1),C&&(Y(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function v(o,u,f,g){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return P}return-1}var R="closure_lm_"+(1e6*Math.random()|0),N={};function x(o,u,f,g,P){if(Array.isArray(u)){for(var C=0;C<u.length;C++)x(o,u[C],f,g,P);return null}return f=re(f),o&&o[O]?o.K(u,f,h(g)?!!g.capture:!1,P):D(o,u,f,!1,g,P)}function D(o,u,f,g,P,C){if(!u)throw Error("Invalid event type");var q=h(P)?!!P.capture:!!P,we=W(o);if(we||(o[R]=we=new ye(o)),f=we.add(u,f,g,q,C),f.proxy)return f;if(g=G(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)bn||(P=q),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(F(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function o(f){return u.call(o.src,o.listener,f)}const u=te;return o}function H(o,u,f,g,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)H(o,u[C],f,g,P);else g=h(g)?!!g.capture:!!g,f=re(f),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=v(C,f,g,P),-1<f&&(Y(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=W(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,f,g,P)),(f=-1<o?u[o]:null)&&j(f))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])_(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(F(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=W(u))?(_(f,o),f.h==0&&(f.src=null,u[R]=null)):Y(o)}}}function F(o){return o in N?N[o]:N[o]="on"+o}function te(o,u){if(o.da)o=!0;else{u=new Wt(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&j(o),o=f.call(g,u)}return o}function W(o){return o=o[R],o instanceof ye?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function ne(){ke.call(this),this.i=new ye(this),this.M=this,this.F=null}k(ne,ke),ne.prototype[O]=!0,ne.prototype.removeEventListener=function(o,u,f,g){H(this,o,u,f,g)};function oe(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Oe(u,o);else if(u instanceof Oe)u.target=u.target||o;else{var P=u;u=new Oe(g,o),A(u,P)}if(P=!0,f)for(var C=f.length-1;0<=C;C--){var q=u.g=f[C];P=ge(q,g,!0,u)&&P}if(q=u.g=o,P=ge(q,g,!0,u)&&P,P=ge(q,g,!1,u)&&P,f)for(C=0;C<f.length;C++)q=u.g=f[C],P=ge(q,g,!1,u)&&P}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Y(f[g]);delete o.g[u],o.h--}}this.F=null},ne.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},ne.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function ge(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,C=0;C<u.length;++C){var q=u[C];if(q&&!q.da&&q.capture==f){var we=q.listener,Ke=q.ha||q.src;q.fa&&_(o.i,q),P=we.call(Ke,g)!==!1&&P}}return P&&!g.defaultPrevented}function He(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function qe(o){o.g=He(()=>{o.g=null,o.i&&(o.i=!1,qe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Pt extends ke{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:qe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(o){ke.call(this),this.h=o,this.g={}}k(Je,ke);var Rn=[];function ai(o){he(o.g,function(u,f){this.g.hasOwnProperty(f)&&j(u)},o),o.g={}}Je.prototype.N=function(){Je.aa.N.call(this),ai(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ze=c.JSON.stringify,Ct=c.JSON.parse,Is=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ha(){}ha.prototype.h=null;function Wl(o){return o.h||(o.h=o.i())}function Gl(){}var ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fa(){Oe.call(this,"d")}k(fa,Oe);function da(){Oe.call(this,"c")}k(da,Oe);var Yn={},Ql=null;function Ts(){return Ql=Ql||new ne}Yn.La="serverreachability";function Xl(o){Oe.call(this,Yn.La,o)}k(Xl,Oe);function li(o){const u=Ts();oe(u,new Xl(u))}Yn.STAT_EVENT="statevent";function Jl(o,u){Oe.call(this,Yn.STAT_EVENT,o),this.stat=u}k(Jl,Oe);function ct(o){const u=Ts();oe(u,new Jl(u,o))}Yn.Ma="timingevent";function Yl(o,u){Oe.call(this,Yn.Ma,o),this.size=u}k(Yl,Oe);function ui(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function hi(){this.g=!0}hi.prototype.xa=function(){this.g=!1};function c_(o,u,f,g,P,C){o.info(function(){if(o.g)if(C)for(var q="",we=C.split("&"),Ke=0;Ke<we.length;Ke++){var ve=we[Ke].split("=");if(1<ve.length){var Ye=ve[0];ve=ve[1];var Ze=Ye.split("_");q=2<=Ze.length&&Ze[1]=="type"?q+(Ye+"="+ve+"&"):q+(Ye+"=redacted&")}}else q=null;else q=C;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+f+`
`+q})}function l_(o,u,f,g,P,C,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+f+`
`+C+" "+q})}function br(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+h_(o,f)+(g?" "+g:"")})}function u_(o,u){o.info(function(){return"TIMEOUT: "+u})}hi.prototype.info=function(){};function h_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var q=1;q<P.length;q++)P[q]=""}}}}return ze(f)}catch{return u}}var ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pa;function As(){}k(As,ha),As.prototype.g=function(){return new XMLHttpRequest},As.prototype.i=function(){return{}},pa=new As;function Sn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var tu={},ga={};function ma(o,u,f){o.L=1,o.v=Ps(an(u)),o.m=f,o.P=!0,nu(o,null)}function nu(o,u){o.F=Date.now(),bs(o),o.A=an(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),mu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new eu,o.g=Vu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Pt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Rn[0]=P.toString()),P=Rn);for(var C=0;C<P.length;C++){var q=x(f,P[C],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),li(),c_(o.i,o.u,o.A,o.l,o.R,o.m)}Sn.prototype.ca=function(o){o=o.target;const u=this.M;u&&cn(o)==3?u.j():this.Y(o)},Sn.prototype.Y=function(o){try{if(o==this.g)e:{const Ze=cn(this.g);var u=this.g.Ba();const Pr=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||wu(this.g)))){this.J||Ze!=4||u==7||(u==8||0>=Pr?li(3):li(2)),_a(this);var f=this.g.Z();this.X=f;t:if(ru(this)){var g=wu(this.g);o="";var P=g.length,C=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),fi(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,l_(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Ke=this.g;if((we=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(we)){var ve=we;break t}}ve=null}if(f=ve)br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,f);else{this.o=!1,this.s=3,ct(12),Zn(this),fi(this);break e}}if(this.P){f=!0;let Dt;for(;!this.J&&this.C<q.length;)if(Dt=f_(this,q),Dt==ga){Ze==4&&(this.s=4,ct(14),f=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==tu){this.s=4,ct(15),br(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else br(this.i,this.l,Dt,null),ya(this,Dt);if(ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||q.length!=0||this.h.h||(this.s=1,ct(16),f=!1),this.o=this.o&&f,!f)br(this.i,this.l,q,"[Invalid Chunked Response]"),Zn(this),fi(this);else if(0<q.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Aa(Ye),Ye.M=!0,ct(11))}}else br(this.i,this.l,q,null),ya(this,q);Ze==4&&Zn(this),this.o&&!this.J&&(Ze==4?ku(this.j,this):(this.o=!1,bs(this)))}else C_(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Zn(this),fi(this)}}}catch{}finally{}};function ru(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function f_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?ga:(f=Number(u.substring(f,g)),isNaN(f)?tu:(g+=1,g+f>u.length?ga:(u=u.slice(g,g+f),o.C=g+f,u)))}Sn.prototype.cancel=function(){this.J=!0,Zn(this)};function bs(o){o.S=Date.now()+o.I,iu(o,o.I)}function iu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ui(m(o.ba,o),u)}function _a(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(u_(this.i,this.A),this.L!=2&&(li(),ct(17)),Zn(this),this.s=2,fi(this)):iu(this,this.S-o)};function fi(o){o.j.G==0||o.J||ku(o.j,o)}function Zn(o){_a(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ai(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ya(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||va(f.h,o))){if(!o.K&&va(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Vs(f),Ns(f);else break e;wa(f),ct(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=ui(m(f.Za,f),6e3));if(1>=au(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else tr(f,11)}else if((o.K||f.g==o)&&Vs(f),!U(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let ve=P[u];if(f.T=ve[0],ve=ve[1],f.G==2)if(ve[0]=="c"){f.K=ve[1],f.ia=ve[2];const Ye=ve[3];Ye!=null&&(f.la=Ye,f.j.info("VER="+f.la));const Ze=ve[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const Pr=ve[5];Pr!=null&&typeof Pr=="number"&&0<Pr&&(g=1.5*Pr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Dt=o.g;if(Dt){const Ms=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var C=g.h;C.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ea(C,C.h),C.h=null))}if(g.D){const ba=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(g.ya=ba,Se(g.I,g.D,ba))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=o;if(g.qa=Du(g,g.J?g.ia:null,g.W),q.K){cu(g.h,q);var we=q,Ke=g.L;Ke&&(we.I=Ke),we.B&&(_a(we),bs(we)),g.g=q}else Pu(g);0<f.i.length&&Ds(f)}else ve[0]!="stop"&&ve[0]!="close"||tr(f,7);else f.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?tr(f,7):Ta(f):ve[0]!="noop"&&f.l&&f.l.ta(ve),f.v=0)}}li(4)}catch{}}var d_=class{constructor(o,u){this.g=o,this.map=u}};function su(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ou(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function au(o){return o.h?1:o.g?o.g.size:0}function va(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ea(o,u){o.g?o.g.add(u):o.h=u}function cu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}su.prototype.cancel=function(){if(this.i=lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function lu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return V(o.i)}function p_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function g_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function uu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=g_(o),g=p_(o),P=g.length,C=0;C<P;C++)u.call(void 0,g[C],f&&f[C],o)}var hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function m_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),P=null;if(0<=g){var C=o[f].substring(0,g);P=o[f].substring(g+1)}else C=o[f];u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,Rs(this,o.j),this.o=o.o,this.g=o.g,Ss(this,o.s),this.l=o.l;var u=o.i,f=new gi;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),fu(this,f),this.m=o.m}else o&&(u=String(o).match(hu))?(this.h=!1,Rs(this,u[1]||"",!0),this.o=di(u[2]||""),this.g=di(u[3]||"",!0),Ss(this,u[4]),this.l=di(u[5]||"",!0),fu(this,u[6]||"",!0),this.m=di(u[7]||"")):(this.h=!1,this.i=new gi(null,this.h))}er.prototype.toString=function(){var o=[],u=this.j;u&&o.push(pi(u,du,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(pi(u,du,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(pi(f,f.charAt(0)=="/"?v_:y_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",pi(f,I_)),o.join("")};function an(o){return new er(o)}function Rs(o,u,f){o.j=f?di(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ss(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function fu(o,u,f){u instanceof gi?(o.i=u,T_(o.i,o.h)):(f||(u=pi(u,E_)),o.i=new gi(u,o.h))}function Se(o,u,f){o.i.set(u,f)}function Ps(o){return Se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function di(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function pi(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,__),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function __(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var du=/[#\/\?@]/g,y_=/[#\?:]/g,v_=/[#\?]/g,E_=/[#\?@]/g,I_=/#/g;function gi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&m_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=gi.prototype,t.add=function(o,u){Pn(this),this.i=null,o=Rr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function pu(o,u){Pn(o),u=Rr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function gu(o,u){return Pn(o),u=Rr(o,u),o.g.has(u)}t.forEach=function(o,u){Pn(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(u,P,g,this)},this)},this)},t.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const P=o[g];for(let C=0;C<P.length;C++)f.push(u[g])}return f},t.V=function(o){Pn(this);let u=[];if(typeof o=="string")gu(this,o)&&(u=u.concat(this.g.get(Rr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Pn(this),this.i=null,o=Rr(this,o),gu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function mu(o,u,f){pu(o,u),0<f.length&&(o.i=null,o.g.set(Rr(o,u),V(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var P=C;q[g]!==""&&(P+="="+encodeURIComponent(String(q[g]))),o.push(P)}}return this.i=o.join("&")};function Rr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function T_(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(pu(this,g),mu(this,P,f))},o)),o.j=u}function w_(o,u){const f=new hi;if(c.Image){const g=new Image;g.onload=T(Cn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=T(Cn,f,"TestLoadImage: error",!1,u,g),g.onabort=T(Cn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(Cn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function A_(o,u){const f=new hi,g=new AbortController,P=setTimeout(()=>{g.abort(),Cn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(P),C.ok?Cn(f,"TestPingServer: ok",!0,u):Cn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Cn(f,"TestPingServer: error",!1,u)})}function Cn(o,u,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function b_(){this.g=new Is}function R_(o,u,f){const g=f||"";try{uu(o,function(P,C){let q=P;h(P)&&(q=ze(P)),u.push(g+C+"="+encodeURIComponent(q))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Cs(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Cs,ha),Cs.prototype.g=function(){return new ks(this.l,this.j)},Cs.prototype.i=function(o){return function(){return o}}({});function ks(o,u){ne.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ks,ne),t=ks.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,_i(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_u(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function _u(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?mi(this):_i(this),this.readyState==3&&_u(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,mi(this))},t.Qa=function(o){this.g&&(this.response=o,mi(this))},t.ga=function(){this.g&&mi(this)};function mi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,_i(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function _i(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function yu(o){let u="";return he(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ia(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=yu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Se(o,u,f))}function Ne(o){ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ne,ne);var S_=/^https?$/i,P_=["POST","PUT"];t=Ne.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pa.g(),this.v=this.o?Wl(this.o):Wl(pa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){vu(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(P_,u,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of f)this.g.setRequestHeader(C,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){vu(this,C)}};function vu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Eu(o),Os(o)}function Eu(o){o.A||(o.A=!0,oe(o,"complete"),oe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,oe(this,"complete"),oe(this,"abort"),Os(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Os(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Iu(this):this.bb())},t.bb=function(){Iu(this)};function Iu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)He(o.Ea,0,o);else if(oe(o,"readystatechange"),cn(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=q===0){var P=String(o.D).match(hu)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!S_.test(P?P.toLowerCase():"")}f=g}if(f)oe(o,"complete"),oe(o,"success");else{o.m=6;try{var C=2<cn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Eu(o)}}finally{Os(o)}}}}function Os(o,u){if(o.g){Tu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||oe(o,"ready");try{f.onreadystatechange=g}catch{}}}function Tu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ct(u)}};function wu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function C_(o){const u={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(U(o[g]))continue;var f=b(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[P]||[];u[P]=C,C.push(f)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Au(o){this.Aa=0,this.i=[],this.j=new hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yi("baseRetryDelayMs",5e3,o),this.cb=yi("retryDelaySeedMs",1e4,o),this.Wa=yi("forwardChannelMaxRetries",2,o),this.wa=yi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new su(o&&o.concurrentRequestLimit),this.Da=new b_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Au.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){ct(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Du(this,null,this.W),Ds(this)};function Ta(o){if(bu(o),o.G==3){var u=o.U++,f=an(o.I);if(Se(f,"SID",o.K),Se(f,"RID",u),Se(f,"TYPE","terminate"),vi(o,f),u=new Sn(o,o.j,u),u.L=2,u.v=Ps(an(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Vu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),bs(u)}Nu(o)}function Ns(o){o.g&&(Aa(o),o.g.cancel(),o.g=null)}function bu(o){Ns(o),o.u&&(c.clearTimeout(o.u),o.u=null),Vs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ds(o){if(!ou(o.h)&&!o.s){o.s=!0;var u=o.Ga;pe||Nt(),fe||(pe(),fe=!0),vt.add(u,o),o.B=0}}function k_(o,u){return au(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ui(m(o.Ga,o,u),Ou(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Sn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),A(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Su(this,P,u),f=an(this.I),Se(f,"RID",o),Se(f,"CVER",22),this.D&&Se(f,"X-HTTP-Session-Id",this.D),vi(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(yu(C)))+"&"+u:this.m&&Ia(f,this.m,C)),Ea(this.h,P),this.Ua&&Se(f,"TYPE","init"),this.P?(Se(f,"$req",u),Se(f,"SID","null"),P.T=!0,ma(P,f,null)):ma(P,f,u),this.G=2}}else this.G==3&&(o?Ru(this,o):this.i.length==0||ou(this.h)||Ru(this))};function Ru(o,u){var f;u?f=u.l:f=o.U++;const g=an(o.I);Se(g,"SID",o.K),Se(g,"RID",f),Se(g,"AID",o.T),vi(o,g),o.m&&o.o&&Ia(g,o.m,o.o),f=new Sn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Su(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ea(o.h,f),ma(f,g,u)}function vi(o,u){o.H&&he(o.H,function(f,g){Se(u,g,f)}),o.l&&uu({},function(f,g){Se(u,g,f)})}function Su(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var P=o.i;let C=-1;for(;;){const q=["count="+f];C==-1?0<f?(C=P[0].g,q.push("ofs="+C)):C=0:q.push("ofs="+C);let we=!0;for(let Ke=0;Ke<f;Ke++){let ve=P[Ke].g;const Ye=P[Ke].map;if(ve-=C,0>ve)C=Math.max(0,P[Ke].g-100),we=!1;else try{R_(Ye,q,"req"+ve+"_")}catch{g&&g(Ye)}}if(we){g=q.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Pu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;pe||Nt(),fe||(pe(),fe=!0),vt.add(u,o),o.v=0}}function wa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ui(m(o.Fa,o),Ou(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ui(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Ns(this),Cu(this))};function Aa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Cu(o){o.g=new Sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=an(o.qa);Se(u,"RID","rpc"),Se(u,"SID",o.K),Se(u,"AID",o.T),Se(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Se(u,"TO",o.ja),Se(u,"TYPE","xmlhttp"),vi(o,u),o.m&&o.o&&Ia(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ps(an(u)),f.m=null,f.P=!0,nu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Ns(this),wa(this),ct(19))};function Vs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ku(o,u){var f=null;if(o.g==u){Vs(o),Aa(o),o.g=null;var g=2}else if(va(o.h,u))f=u.D,cu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=Ts(),oe(g,new Yl(g,f)),Ds(o)}else Pu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&k_(o,u)||g==2&&wa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),P){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function Ou(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const P=!g;g=new er(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Rs(g,"https"),Ps(g),P?w_(g.toString(),f):A_(g.toString(),f)}else ct(2);o.G=0,o.l&&o.l.sa(u),Nu(o),bu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Nu(o){if(o.G=0,o.ka=[],o.l){const u=lu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Du(o,u,f){var g=f instanceof er?an(f):new er(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ss(g,g.s);else{var P=c.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var C=new er(null);g&&Rs(C,g),u&&(C.g=u),P&&Ss(C,P),f&&(C.l=f),g=C}return f=o.D,u=o.ya,f&&u&&Se(g,f,u),Se(g,"VER",o.la),vi(o,g),g}function Vu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ne(new Cs({eb:f})):new Ne(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xu(){}t=xu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xs(){}xs.prototype.g=function(o,u){return new Et(o,u)};function Et(o,u){ne.call(this),this.g=new Au(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Sr(this)}k(Et,ne),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Ta(this.g)},Et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=ze(o),o=f);u.i.push(new d_(u.Ya++,o)),u.G==3&&Ds(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,Ta(this.g),delete this.g,Et.aa.N.call(this)};function Mu(o){fa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Mu,fa);function Lu(){da.call(this),this.status=1}k(Lu,da);function Sr(o){this.g=o}k(Sr,xu),Sr.prototype.ua=function(){oe(this.g,"a")},Sr.prototype.ta=function(o){oe(this.g,new Mu(o))},Sr.prototype.sa=function(o){oe(this.g,new Lu)},Sr.prototype.ra=function(){oe(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,sm=function(){return new xs},im=function(){return Ts()},rm=Yn,Rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ws.NO_ERROR=0,ws.TIMEOUT=8,ws.HTTP_ERROR=6,to=ws,Zl.COMPLETE="complete",nm=Zl,Gl.EventType=ci,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Ri=Gl,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,tm=Ne}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});const Af="@firebase/firestore",bf="4.7.17";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let si="11.9.0";/**
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
 */const mr=new Fo("@firebase/firestore");function Nr(){return mr.logLevel}function Z(t,...e){if(mr.logLevel<=de.DEBUG){const n=e.map(bl);mr.debug(`Firestore (${si}): ${t}`,...n)}}function _r(t,...e){if(mr.logLevel<=de.ERROR){const n=e.map(bl);mr.error(`Firestore (${si}): ${t}`,...n)}}function ra(t,...e){if(mr.logLevel<=de.WARN){const n=e.map(bl);mr.warn(`Firestore (${si}): ${t}`,...n)}}function bl(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,om(t,r,n)}function om(t,e,n){let r=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw _r(r),new Error(r)}function De(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||om(e,i,r)}function Re(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class $b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Hb{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ur,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ur)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new am(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new tt(e)}}class qb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new qb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Wb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Gb(){return new TextEncoder}/**
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
 */class cm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Wb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Sc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return _e(r,i);{const s=Gb(),a=Qb(s.encode(Sf(t,n)),s.encode(Sf(e,n)));return a!==0?a:_e(r,i)}}n+=r>65535?2:1}return _e(t.length,e.length)}function Sf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Qb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function Jr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Pf=-62135596800,Cf=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Cf);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Pf)throw new se(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cf}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Pf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new $e(0,0))}static max(){return new Ce(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const kf="__name__";class Xt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Xt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return _e(e.length,n.length)}static compareSegments(e,n){const r=Xt.isNumericId(e),i=Xt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Xt.extractNumericId(e).compare(Xt.extractNumericId(n)):Sc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Al.fromString(e.substring(4,e.length-2))}}class Le extends Xt{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const Xb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Xt{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return Xb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kf}static keyField(){return new Qe([kf])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new se(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new se(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new se(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new se(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Le.fromString(e))}static fromName(e){return new ce(Le.fromString(e).popFirst(5))}static empty(){return new ce(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Le(e.slice()))}}/**
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
 */const rs=-1;function Jb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Wn(i,ce.empty(),e)}function Yb(t){return new Wn(t.readTime,t.key,rs)}class Wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wn(Ce.min(),ce.empty(),rs)}static max(){return new Wn(Ce.max(),ce.empty(),rs)}}function Zb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const eR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rl(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==eR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&n()},l=>r(l))}),a=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;n(e[h]).next(d=>{a[h]=d,++c,c===s&&r(a)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Sl.le=-1;/**
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
 */const Pl=-1;function Cl(t){return t==null}function bo(t){return t===0&&1/t==-1/0}function rR(t){return typeof t=="number"&&Number.isInteger(t)&&!bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const lm="";function iR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Of(e)),e=sR(t.get(n),e);return Of(e)}function sR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case lm:n+="";break;default:n+=s}}return n}function Of(t){return t+lm+""}/**
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
 */function Nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class yt{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Df(this.data.getIterator())}getIteratorFrom(e){return new Df(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Df{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Xe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class oR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oR("Invalid base64 string: "+s):s}}(e);return new rn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const aR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=aR.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?rn.fromBase64String(t):rn.fromUint8Array(t)}/**
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
 */const hm="server_timestamp",fm="__type__",dm="__previous_value__",pm="__local_write_time__";function kl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[fm])===null||n===void 0?void 0:n.stringValue)===hm}function Ol(t){const e=t.mapValue.fields[dm];return kl(e)?Ol(e):e}function Ro(t){const e=yr(t.mapValue.fields[pm].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class cR{constructor(e,n,r,i,s,a,c,l,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const So="(default)";class Po{constructor(e,n){this.projectId=e,this.database=n||So}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database===So}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gm="__type__",lR="__max__",Hs={mapValue:{}},mm="__vector__",Pc="value";function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kl(t)?4:hR(t)?9007199254740991:uR(t)?10:11:ue(28295,{value:t})}function sn(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=yr(i.timestampValue),c=yr(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yr(i.bytesValue).isEqual(Yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ge(i.geoPointValue.latitude)===Ge(s.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ge(i.integerValue)===Ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ge(i.doubleValue),c=Ge(s.doubleValue);return a===c?bo(a)===bo(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Jr(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Nf(a)!==Nf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!sn(a[l],c[l])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function is(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function Zr(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,a){const c=Ge(s.integerValue||s.doubleValue),l=Ge(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Vf(t.timestampValue,e.timestampValue);case 4:return Vf(Ro(t),Ro(e));case 5:return Sc(t.stringValue,e.stringValue);case 6:return function(s,a){const c=Yr(s),l=Yr(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=_e(c[h],l[h]);if(d!==0)return d}return _e(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const c=_e(Ge(s.latitude),Ge(a.latitude));return c!==0?c:_e(Ge(s.longitude),Ge(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xf(t.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,h,d;const p=s.fields||{},m=a.fields||{},T=(c=p[Pc])===null||c===void 0?void 0:c.arrayValue,k=(l=m[Pc])===null||l===void 0?void 0:l.arrayValue,V=_e(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:xf(T,k)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Hs.mapValue&&a===Hs.mapValue)return 0;if(s===Hs.mapValue)return 1;if(a===Hs.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Sc(l[p],d[p]);if(m!==0)return m;const T=Zr(c[l[p]],h[d[p]]);if(T!==0)return T}return _e(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function Vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=yr(t),r=yr(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function xf(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Zr(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function ei(t){return Cc(t)}function Cc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Cc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Cc(n.fields[a])}`;return i+"}"}(t.mapValue):ue(61005,{value:t})}function no(t){switch(vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ol(t);return e?16+no(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+no(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return oi(r.fields,(s,a)=>{i+=s.length+no(a)}),i}(t.mapValue);default:throw ue(13486,{value:t})}}function kc(t){return!!t&&"integerValue"in t}function Nl(t){return!!t&&"arrayValue"in t}function ro(t){return!!t&&"mapValue"in t}function uR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[gm])===null||n===void 0?void 0:n.stringValue)===mm}function qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===lR}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=c.popLast()}a?r[c.lastSegment()]=qi(a):i.push(c.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ro(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(qi(this.value))}}function _m(t){const e=[];return oi(t.fields,(n,r)=>{const i=new Qe([n]);if(ro(r)){const s=_m(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Bt(e)}/**
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
 */class Vt{constructor(e,n,r,i,s,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Vt(e,0,Ce.min(),Ce.min(),Ce.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new Vt(e,1,n,Ce.min(),r,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,Ce.min(),Ce.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,Ce.min(),Ce.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Co{constructor(e,n){this.position=e,this.inclusive=n}}function Mf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=ce.comparator(ce.fromName(a.referenceValue),n.key):r=Zr(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function fR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ym{}class je extends ym{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pR(e,n,r):n==="array-contains"?new _R(e,r):n==="in"?new yR(e,r):n==="not-in"?new vR(e,r):n==="array-contains-any"?new ER(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gR(e,r):new mR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zr(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends ym{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Gn(e,n)}matches(e){return vm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function vm(t){return t.op==="and"}function Em(t){return dR(t)&&vm(t)}function dR(t){for(const e of t.filters)if(e instanceof Gn)return!1;return!0}function Oc(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+ei(t.value);if(Em(t))return t.filters.map(e=>Oc(e)).join(",");{const e=t.filters.map(n=>Oc(n)).join(",");return`${t.op}(${e})`}}function Im(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(t,e):t instanceof Gn?function(r,i){return i instanceof Gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Im(a,i.filters[c]),!0):!1}(t,e):void ue(19439)}function Tm(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${ei(n.value)}`}(t):t instanceof Gn?function(n){return n.op.toString()+" {"+n.getFilters().map(Tm).join(" ,")+"}"}(t):"Filter"}class pR extends je{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class gR extends je{constructor(e,n){super(e,"in",n),this.keys=wm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mR extends je{constructor(e,n){super(e,"not-in",n),this.keys=wm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class _R extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nl(n)&&is(n.arrayValue,this.value)}}class yR extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&is(this.value.arrayValue,n)}}class vR extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!is(this.value.arrayValue,n)}}class ER extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>is(this.value.arrayValue,r))}}/**
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
 */class IR{constructor(e,n=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.Ie=null}}function Ff(t,e=null,n=[],r=[],i=null,s=null,a=null){return new IR(t,e,n,r,i,s,a)}function Dl(t){const e=Re(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Oc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ei(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ei(r)).join(",")),e.Ie=n}return e.Ie}function Vl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Im(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lf(t.startAt,e.startAt)&&Lf(t.endAt,e.endAt)}/**
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
 */class ia{constructor(e,n=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function TR(t,e,n,r,i,s,a,c){return new ia(t,e,n,r,i,s,a,c)}function wR(t){return new ia(t)}function Uf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AR(t){return t.collectionGroup!==null}function zi(t){const e=Re(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Xe(Qe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new ko(s,r))}),n.has(Qe.keyField().canonicalString())||e.Ee.push(new ko(Qe.keyField(),r))}return e.Ee}function hr(t){const e=Re(t);return e.de||(e.de=bR(e,zi(t))),e.de}function bR(t,e){if(t.limitType==="F")return Ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ko(i.field,s)});const n=t.endAt?new Co(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Co(t.startAt.position,t.startAt.inclusive):null;return Ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nc(t,e,n){return new ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Am(t,e){return Vl(hr(t),hr(e))&&t.limitType===e.limitType}function bm(t){return`${Dl(hr(t))}|lt:${t.limitType}`}function wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Tm(i)).join(", ")}]`),Cl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ei(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ei(i)).join(",")),`Target(${r})`}(hr(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ce.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const h=Mf(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,zi(r),i)||r.endAt&&!function(a,c,l){const h=Mf(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,zi(r),i))}(t,e)}function RR(t){return(e,n)=>{let r=!1;for(const i of zi(t)){const s=SR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SR(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(s,a,c){const l=a.data.field(s),h=c.data.field(s);return l!==null&&h!==null?Zr(l,h):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
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
 */class wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return um(this.inner)}size(){return this.innerSize}}/**
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
 */const PR=new yt(ce.comparator);function Oo(){return PR}const Rm=new yt(ce.comparator);function qs(...t){let e=Rm;for(const n of t)e=e.insert(n.key,n);return e}function Sm(t){let e=Rm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Ki()}function Pm(){return Ki()}function Ki(){return new wr(t=>t.toString(),(t,e)=>t.isEqual(e))}const CR=new yt(ce.comparator),kR=new Xe(ce.comparator);function rt(...t){let e=kR;for(const n of t)e=e.add(n);return e}const OR=new Xe(_e);function NR(){return OR}/**
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
 */function Ml(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bo(e)?"-0":e}}function Cm(t){return{integerValue:""+t}}function DR(t,e){return rR(e)?Cm(e):Ml(t,e)}/**
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
 */class sa{constructor(){this._=void 0}}function VR(t,e,n){return t instanceof No?function(i,s){const a={fields:{[fm]:{stringValue:hm},[pm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kl(s)&&(s=Ol(s)),s&&(a.fields[dm]=s),{mapValue:a}}(n,e):t instanceof ss?Om(t,e):t instanceof os?Nm(t,e):function(i,s){const a=km(i,s),c=Bf(a)+Bf(i.Re);return kc(a)&&kc(i.Re)?Cm(c):Ml(i.serializer,c)}(t,e)}function xR(t,e,n){return t instanceof ss?Om(t,e):t instanceof os?Nm(t,e):n}function km(t,e){return t instanceof Do?function(r){return kc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class No extends sa{}class ss extends sa{constructor(e){super(),this.elements=e}}function Om(t,e){const n=Dm(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class os extends sa{constructor(e){super(),this.elements=e}}function Nm(t,e){let n=Dm(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class Do extends sa{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Bf(t){return Ge(t.integerValue||t.doubleValue)}function Dm(t){return Nl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ss&&i instanceof ss||r instanceof os&&i instanceof os?Jr(r.elements,i.elements,sn):r instanceof Do&&i instanceof Do?sn(r.Re,i.Re):r instanceof No&&i instanceof No}(t.transform,e.transform)}class LR{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oa{}function Vm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mm(t.key,_n.none()):new _s(t.key,t.data,_n.none());{const n=t.data,r=Ft.empty();let i=new Xe(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ar(t.key,r,new Bt(i.toArray()),_n.none())}}function FR(t,e,n){t instanceof _s?function(i,s,a){const c=i.value.clone(),l=$f(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(i,s,a){if(!io(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=$f(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(xm(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Wi(t,e,n,r){return t instanceof _s?function(s,a,c,l){if(!io(s.precondition,a))return c;const h=s.value.clone(),d=Hf(s.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(s,a,c,l){if(!io(s.precondition,a))return c;const h=Hf(s.fieldTransforms,l,a),d=a.data;return d.setAll(xm(s)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,a,c){return io(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function UR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=km(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function jf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Jr(r,i,(s,a)=>MR(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _s extends oa{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends oa{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $f(t,e,n){const r=new Map;De(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,xR(a,c,n[i]))}return r}function Hf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,VR(s,a,e))}return r}class Mm extends oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BR extends oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&FR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pm();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=n.has(i.key)?null:c;const l=Vm(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),rt())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(n,r)=>jf(n,r))&&Jr(this.baseMutations,e.baseMutations,(n,r)=>jf(n,r))}}class Ll{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){De(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return CR}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Ll(e,n,r,i)}}/**
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
 */class $R{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var xe,me;function HR(t){switch(t){case B.OK:return ue(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function qR(t){if(t===void 0)return _r("GRPC error has no .code"),B.UNKNOWN;switch(t){case xe.OK:return B.OK;case xe.CANCELLED:return B.CANCELLED;case xe.UNKNOWN:return B.UNKNOWN;case xe.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case xe.INTERNAL:return B.INTERNAL;case xe.UNAVAILABLE:return B.UNAVAILABLE;case xe.UNAUTHENTICATED:return B.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case xe.NOT_FOUND:return B.NOT_FOUND;case xe.ALREADY_EXISTS:return B.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return B.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case xe.ABORTED:return B.ABORTED;case xe.OUT_OF_RANGE:return B.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return B.UNIMPLEMENTED;case xe.DATA_LOSS:return B.DATA_LOSS;default:return ue(39323,{code:t})}}(me=xe||(xe={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Al([4294967295,4294967295],0);class zR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WR(t,e){return Dc(t,e.toTimestamp())}function Kr(t){return De(!!t,49232),Ce.fromTimestamp(function(n){const r=yr(n);return new $e(r.seconds,r.nanos)}(t))}function Lm(t,e){return Vc(t,e).canonicalString()}function Vc(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function GR(t){const e=Le.fromString(t);return De(nS(e),10190,{key:e.toString()}),e}function xc(t,e){return Lm(t.databaseId,e.path)}function QR(t){const e=GR(t);return e.length===4?Le.emptyPath():JR(e)}function XR(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JR(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function qf(t,e,n){return{name:xc(t,e),fields:n.value.mapValue.fields}}function YR(t,e){let n;if(e instanceof _s)n={update:qf(t,e.key,e.value)};else if(e instanceof Mm)n={delete:xc(t,e.key)};else if(e instanceof Ar)n={update:qf(t,e.key,e.data),updateMask:tS(e.fieldMask)};else{if(!(e instanceof BR))return ue(16599,{ft:e.type});n={verify:xc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof No)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ss)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof os)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Do)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw ue(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:WR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ue(27497)}(t,e.precondition)),n}function ZR(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map(n=>function(i,s){let a=i.updateTime?Kr(i.updateTime):Kr(s);return a.isEqual(Ce.min())&&(a=Kr(s)),new LR(a,i.transformResults||[])}(n,e))):[]}function eS(t){let e=QR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){De(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=Fm(p);return m instanceof Gn&&Em(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(k){return new ko(Dr(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Cl(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,T=p.values||[];return new Co(T,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,T=p.values||[];return new Co(T,m)}(n.endAt)),TR(e,i,a,s,c,"F",l,h)}function Fm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Dr(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Dr(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dr(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dr(n.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(Dr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gn.create(n.compositeFilter.filters.map(r=>Fm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function Dr(t){return Qe.fromServerFormat(t.fieldPath)}function tS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rS{constructor(e){this.wt=e}}function iS(t){const e=eS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nc(e,e.limit,"L"):e}/**
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
 */class sS{constructor(){this.Cn=new oS}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Wn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class oS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Le.comparator)).toArray()}}/**
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
 */const zf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Um=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(Um,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */class ti{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ti(0)}static lr(){return new ti(-1)}}/**
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
 */const Kf="LruGarbageCollector",aS=1048576;function Wf([t,e],[n,r]){const i=_e(t,n);return i===0?_e(e,r):i}class cS{constructor(e){this.Er=e,this.buffer=new Xe(Wf),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Wf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(Kf,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ms(n)?Z(Kf,"Ignoring IndexedDB error during garbage collection: ",n):await Rl(n)}await this.mr(3e5)})}}class uS{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Sl.le);const r=new cS(n);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(zf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zf):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,i,s,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Nr()<=de.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function hS(t,e){return new uS(t,e)}/**
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
 */class fS{constructor(){this.changes=new wr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Wi(r.mutation,i,Bt.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,rt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=rt()){const i=cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=qs();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,rt()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,i){let s=Oo();const a=Ki(),c=function(){return Ki()}();return n.forEach((l,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof Ar)?s=s.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Wi(d.mutation,h,d.mutation.getFieldMask(),$e.now())):a.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new dS(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ki();let i=new yt((a,c)=>a-c),s=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Bt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(i.get(c.batchId)||rt()).add(l);i=i.insert(c.batchId,p)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Pm();d.forEach(m=>{if(!s.has(m)){const T=Vm(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return ce.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(cr());let c=rs,l=s;return a.next(h=>M.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,rt())).next(d=>({batchId:c,changes:Sm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let i=qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=qs();return this.indexManager.getCollectionParents(e,s).next(c=>M.forEach(c,l=>{const h=function(p,m){return new ia(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Vt.newInvalidDocument(d)))});let c=qs();return a.forEach((l,h)=>{const d=s.get(l);d!==void 0&&Wi(d.mutation,h,Bt.empty(),$e.now()),xl(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class gS{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Kr(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(i){return{name:i.name,query:iS(i.bundledQuery),readTime:Kr(i.readTime)}}(n)),M.resolve()}}/**
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
 */class mS{constructor(){this.overlays=new yt(ce.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=cr(),s=n.length+1,a=new ce(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new yt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=cr(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=cr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=i)););return M.resolve(c)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new $R(n,r));let s=this.Qr.get(n);s===void 0&&(s=rt(),this.Qr.set(n,s)),this.Qr.set(n,s.add(r.key))}}/**
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
 */class _S{constructor(){this.sessionToken=rn.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Fl{constructor(){this.$r=new Xe(Be.Ur),this.Kr=new Xe(Be.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Be(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Be(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new ce(new Le([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),s.push(a.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new ce(new Le([])),r=new Be(n,e),i=new Be(n,e+1);let s=rt();return this.Kr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Be(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return ce.comparator(e.key,n.key)||_e(e.Zr,n.Zr)}static Wr(e,n){return _e(e.Zr,n.Zr)||ce.comparator(e.key,n.key)}}/**
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
 */class yS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Xe(Be.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jR(s,n,r,i);this.mutationQueue.push(a);for(const c of i)this.Xr=this.Xr.add(new Be(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ti(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Pl:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],a=>{const c=this.ei(a.Zr);s.push(c)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(_e);return n.forEach(i=>{const s=new Be(i,0),a=new Be(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,a],c=>{r=r.add(c.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ce.isDocumentKey(s)||(s=s.child(""));const a=new Be(new ce(s),0);let c=new Xe(_e);return this.Xr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.Zr)),!0)},a),M.resolve(this.ni(c))}ni(e){const n=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){De(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Be(n,0),i=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vS{constructor(e){this.ii=e,this.docs=function(){return new yt(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=Oo();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Oo();const a=n.path,c=new ce(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Zb(Yb(d),r)<=0||(i.has(d.key)||xl(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ue(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ES(this)}getSize(e){return M.resolve(this.size)}}class ES extends fS{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class IS{constructor(e){this.persistence=e,this.oi=new wr(n=>Dl(n),Vl),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this._i=0,this.ai=new Fl,this.targetCount=0,this.ui=ti.cr()}forEachTarget(e,n){return this.oi.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new ti(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.oi.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
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
 */class Bm{constructor(e,n){this.ci={},this.overlays={},this.li=new Sl(0),this.hi=!1,this.hi=!0,this.Pi=new _S,this.referenceDelegate=e(this),this.Ti=new IS(this),this.indexManager=new sS,this.remoteDocumentCache=function(i){return new vS(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new rS(n),this.Ei=new gS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new yS(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new TS(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class TS extends tR{constructor(e){super(),this.currentSequenceNumber=e}}class Ul{constructor(e){this.persistence=e,this.Vi=new Fl,this.mi=null}static fi(e){return new Ul(e)}get gi(){if(this.mi)return this.mi;throw ue(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const i=ce.fromPath(r);return this.pi(e,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Vo{constructor(e,n){this.persistence=e,this.yi=new wr(r=>iR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=hS(this,n)}static fi(e,n){return new Vo(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,a=>this.Dr(e,a,n).next(c=>{c||(r++,s.removeEntry(a,Ce.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=no(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.yi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bl{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ds=r,this.As=i}static Rs(e,n){let r=rt(),i=rt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bl(e,n.fromCache,r,i)}}/**
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
 */class wS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Q_()?8:nR(st())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ws(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.bs(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new wS;return this.Ss(e,n,a).next(c=>{if(s.result=c,this.fs)return this.Ds(e,n,a,c.size)})}).next(()=>s.result)}Ds(e,n,r,i){return r.documentReadCount<this.gs?(Nr()<=de.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(Nr()<=de.DEBUG&&Z("QueryEngine","Query:",wi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(Nr()<=de.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(n))):M.resolve())}ws(e,n){if(Uf(n))return M.resolve(null);let r=hr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nc(n,null,"F"),r=hr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=rt(...s);return this.ys.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.vs(n,c);return this.Cs(n,h,a,l.readTime)?this.ws(e,Nc(n,null,"F")):this.Fs(e,h,n,l)}))})))}bs(e,n,r,i){return Uf(n)||i.isEqual(Ce.min())?M.resolve(null):this.ys.getDocuments(e,r).next(s=>{const a=this.vs(n,s);return this.Cs(n,a,r,i)?M.resolve(null):(Nr()<=de.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wi(n)),this.Fs(e,a,n,Jb(i,rs)).next(c=>c))})}vs(e,n){let r=new Xe(RR(e));return n.forEach((i,s)=>{xl(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Nr()<=de.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",wi(n)),this.ys.getDocumentsMatchingQuery(e,n,Wn.min(),r)}Fs(e,n,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const bS="LocalStore";class RS{constructor(e,n,r,i){this.persistence=e,this.Ms=n,this.serializer=i,this.xs=new yt(_e),this.Os=new wr(s=>Dl(s),Vl),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pS(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function SS(t,e,n,r){return new RS(t,e,n,r)}async function jm(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=rt();for(const h of i){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of s){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:c}))})})}function PS(t,e){const n=Re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let T=M.resolve();return m.forEach(k=>{T=T.next(()=>d.getEntry(l,k)).next(V=>{const L=h.docVersions.get(k);De(L!==null,48541),V.version.compareTo(L)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=rt();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function CS(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function kS(t,e){const n=Re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Gf{constructor(){this.activeTargetIds=NR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OS{constructor(){this.xo=new Gf,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Gf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NS{No(e){}shutdown(){}}/**
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
 */const Qf="ConnectivityMonitor";class Xf{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(Qf,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(Qf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zs=null;function Mc(){return zs===null?zs=function(){return 268435456+Math.round(2147483648*Math.random())}():zs++,"0x"+zs.toString(16)}/**
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
 */const Za="RestConnection",DS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class VS{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===So?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,n,r,i,s){const a=Mc(),c=this.jo(e,n.toUriEncodedString());Z(Za,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,i,s);const{host:h}=new URL(c),d=ni(h);return this.Jo(e,c,l,r,d).then(p=>(Z(Za,`Received RPC '${e}' ${a}: `,p),p),p=>{throw ra(Za,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}Yo(e,n,r,i,s,a){return this.zo(e,n,r,i,s)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,n){const r=DS[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class xS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const et="WebChannelConnection";class MS extends VS{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const a=Mc();return new Promise((c,l)=>{const h=new tm;h.setWithCredentials(!0),h.listenOnce(nm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case to.NO_ERROR:const p=h.getResponseJson();Z(et,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case to.TIMEOUT:Z(et,`RPC '${e}' ${a} timed out`),l(new se(B.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const m=h.getStatus();if(Z(et,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const k=T==null?void 0:T.error;if(k&&k.status&&k.message){const V=function(K){const U=K.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(U)>=0?U:B.UNKNOWN}(k.status);l(new se(V,k.message))}else l(new se(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new se(B.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{h_:e,streamId:a,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{Z(et,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(i);Z(et,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",d,r,15)})}I_(e,n,r){const i=Mc(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sm(),c=im(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");Z(et,`Creating RPC '${e}' stream ${i}: ${d}`,l);const p=a.createWebChannel(d,l);this.E_(p);let m=!1,T=!1;const k=new xS({Zo:L=>{T?Z(et,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(m||(Z(et,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Z(et,`RPC '${e}' stream ${i} sending:`,L),p.send(L))},Xo:()=>p.close()}),V=(L,K,U)=>{L.listen(K,$=>{try{U($)}catch(z){setTimeout(()=>{throw z},0)}})};return V(p,Ri.EventType.OPEN,()=>{T||(Z(et,`RPC '${e}' stream ${i} transport opened.`),k.__())}),V(p,Ri.EventType.CLOSE,()=>{T||(T=!0,Z(et,`RPC '${e}' stream ${i} transport closed`),k.u_(),this.d_(p))}),V(p,Ri.EventType.ERROR,L=>{T||(T=!0,ra(et,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),k.u_(new se(B.UNAVAILABLE,"The operation could not be completed")))}),V(p,Ri.EventType.MESSAGE,L=>{var K;if(!T){const U=L.data[0];De(!!U,16349);const $=U,z=($==null?void 0:$.error)||((K=$[0])===null||K===void 0?void 0:K.error);if(z){Z(et,`RPC '${e}' stream ${i} received error:`,z);const le=z.status;let he=function(I){const A=xe[I];if(A!==void 0)return qR(A)}(le),w=z.message;he===void 0&&(he=B.INTERNAL,w="Unknown error status: "+le+" with message "+z.message),T=!0,k.u_(new se(he,w)),p.close()}else Z(et,`RPC '${e}' stream ${i} received:`,U),k.c_(U)}}),V(c,rm.STAT_EVENT,L=>{L.stat===Rc.PROXY?Z(et,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Rc.NOPROXY&&Z(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.a_()},0),k}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function ec(){return typeof document<"u"?document:null}/**
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
 */function aa(t){return new zR(t,!0)}/**
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
 */class $m{constructor(e,n,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=i,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Jf="PersistentStream";class LS{constructor(e,n,r,i,s,a,c,l){this.xi=e,this.S_=r,this.D_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new $m(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===n&&this.z_(r,i)},r=>{e(()=>{const i=new se(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return Z(Jf,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(Z(Jf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FS extends LS{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=ZR(e.writeResults,e.commitTime),r=Kr(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=XR(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YR(this.serializer,r))};this.Q_(n)}}/**
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
 */class US{}class BS extends US{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new se(B.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.zo(e,Vc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new se(B.UNKNOWN,s.toString())})}Yo(e,n,r,i,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(e,Vc(n,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(B.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class jS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(_r(n),this.ua=!1):Z("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const ys="RemoteStore";class $S{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No(a=>{r.enqueueAndForget(async()=>{Es(this)&&(Z(ys,"Restarting streams for network reachability change."),await async function(l){const h=Re(l);h.da.add(4),await vs(h),h.Va.set("Unknown"),h.da.delete(4),await ca(h)}(this))})}),this.Va=new jS(r,i)}}async function ca(t){if(Es(t))for(const e of t.Aa)await e(!0)}async function vs(t){for(const e of t.Aa)await e(!1)}function Es(t){return Re(t).da.size===0}async function Hm(t,e,n){if(!ms(e))throw e;t.da.add(1),await vs(t),t.Va.set("Offline"),n||(n=()=>CS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(ys,"Retrying IndexedDB access"),await n(),t.da.delete(1),await ca(t)})}function qm(t,e){return e().catch(n=>Hm(t,n,e))}async function la(t){const e=Re(t),n=Qn(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Pl;for(;HS(e);)try{const i=await kS(e.localStore,r);if(i===null){e.Ia.length===0&&n.k_();break}r=i.batchId,qS(e,i)}catch(i){await Hm(e,i)}zm(e)&&Km(e)}function HS(t){return Es(t)&&t.Ia.length<10}function qS(t,e){t.Ia.push(e);const n=Qn(t);n.N_()&&n.ea&&n.ta(e.mutations)}function zm(t){return Es(t)&&!Qn(t).O_()&&t.Ia.length>0}function Km(t){Qn(t).start()}async function zS(t){Qn(t).ia()}async function KS(t){const e=Qn(t);for(const n of t.Ia)e.ta(n.mutations)}async function WS(t,e,n){const r=t.Ia.shift(),i=Ll.from(r,e,n);await qm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await la(t)}async function GS(t,e){e&&Qn(t).ea&&await async function(r,i){if(function(a){return HR(a)&&a!==B.ABORTED}(i.code)){const s=r.Ia.shift();Qn(r).L_(),await qm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await la(r)}}(t,e),zm(t)&&Km(t)}async function Yf(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),Z(ys,"RemoteStore received new credentials");const r=Es(n);n.da.add(3),await vs(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await ca(n)}async function QS(t,e){const n=Re(t);e?(n.da.delete(2),await ca(n)):e||(n.da.add(2),await vs(n),n.Va.set("Unknown"))}function Qn(t){return t.ga||(t.ga=function(n,r,i){const s=Re(n);return s.oa(),new FS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:zS.bind(null,t),i_:GS.bind(null,t),na:KS.bind(null,t),ra:WS.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await la(t)):(await t.ga.stop(),t.Ia.length>0&&(Z(ys,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class jl{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,c=new jl(e,n,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wm(t,e){if(_r("AsyncQueue",`${e}: ${t}`),ms(t))return new se(B.UNAVAILABLE,`${e}: ${t}`);throw t}class XS{constructor(){this.queries=Zf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Re(n),s=i.queries;i.queries=Zf(),s.forEach((a,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new se(B.ABORTED,"Firestore shutting down"))}}function Zf(){return new wr(t=>bm(t),Am)}function JS(t){t.Ca.forEach(e=>{e.next()})}var ed,td;(td=ed||(ed={})).xa="default",td.Cache="cache";const YS="SyncEngine";class ZS{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new wr(c=>bm(c),Am),this.Pu=new Map,this.Tu=new Set,this.Iu=new yt(ce.comparator),this.Eu=new Map,this.du=new Fl,this.Au={},this.Ru=new Map,this.Vu=ti.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function eP(t,e,n){const r=iP(t);try{const i=await function(a,c){const l=Re(a),h=$e.now(),d=c.reduce((T,k)=>T.add(k.key),rt());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let k=Oo(),V=rt();return l.Bs.getEntries(T,d).next(L=>{k=L,k.forEach((K,U)=>{U.isValidDocument()||(V=V.add(K))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,k)).next(L=>{p=L;const K=[];for(const U of c){const $=UR(U,p.get(U.key).overlayedDocument);$!=null&&K.push(new Ar(U.key,$,_m($.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(T,h,K,c)}).next(L=>{m=L;const K=L.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(T,L.batchId,K)})}).then(()=>({batchId:m.batchId,changes:Sm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let h=a.Au[a.currentUser.toKey()];h||(h=new yt(_e)),h=h.insert(c,l),a.Au[a.currentUser.toKey()]=h}(r,i.batchId,n),await ua(r,i.changes),await la(r.remoteStore)}catch(i){const s=Wm(i,"Failed to persist write");n.reject(s)}}function nd(t,e,n){const r=Re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.hu.forEach((s,a)=>{const c=a.view.Fa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=Re(a);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.Sa)m.Fa(c)&&(h=!0)}),h&&JS(l)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tP(t,e){const n=Re(t),r=e.batch.batchId;try{const i=await PS(n.localStore,e);Qm(n,r,null),Gm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,i)}catch(i){await Rl(i)}}async function nP(t,e,n){const r=Re(t);try{const i=await function(a,c){const l=Re(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(De(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);Qm(r,e,n),Gm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,i)}catch(i){await Rl(i)}}function Gm(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function Qm(t,e,n){const r=Re(t);let i=r.Au[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Au[r.currentUser.toKey()]=i}}async function ua(t,e,n){const r=Re(t),i=[],s=[],a=[];r.hu.isEmpty()||(r.hu.forEach((c,l)=>{a.push(r.fu(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Bl.Rs(l.targetId,h);s.push(p)}}))}),await Promise.all(a),r.lu.Y_(i),await async function(l,h){const d=Re(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.ds,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>M.forEach(m.As,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!ms(p))throw p;Z(bS,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const T=d.xs.get(m),k=T.snapshotVersion,V=T.withLastLimboFreeSnapshotVersion(k);d.xs=d.xs.insert(m,V)}}}(r.localStore,s))}async function rP(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){Z(YS,"User change. New user:",e.toKey());const r=await jm(n.localStore,e);n.currentUser=e,function(s,a){s.Ru.forEach(c=>{c.forEach(l=>{l.reject(new se(B.CANCELLED,a))})}),s.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r.ks)}}function iP(t){const e=Re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nP.bind(null,e),e}class xo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=aa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return SS(this.persistence,new AS,e.initialUser,this.serializer)}Su(e){return new Bm(Ul.fi,this.serializer)}bu(e){return new OS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xo.provider={build:()=>new xo};class sP extends xo{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){De(this.persistence.referenceDelegate instanceof Vo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lS(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new Bm(r=>Vo.fi(r,n),this.serializer)}}class Lc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rP.bind(null,this.syncEngine),await QS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XS}()}createDatastore(e){const n=aa(e.databaseInfo.databaseId),r=function(s){return new MS(s)}(e.databaseInfo);return function(s,a,c,l){return new BS(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,c){return new $S(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>nd(this.syncEngine,n,0),function(){return Xf.C()?new Xf:new NS}())}createSyncEngine(e,n){return function(i,s,a,c,l,h,d){const p=new ZS(i,s,a,c,l,h);return d&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Re(i);Z(ys,"RemoteStore shutting down."),s.da.add(5),await vs(s),s.Ra.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lc.provider={build:()=>new Lc};/**
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
 */const Xn="FirestoreClient";class oP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=cm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{Z(Xn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(Xn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Xn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aP(t);Z(Xn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Yf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yf(e.remoteStore,i)),t._onlineComponents=e}async function aP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Xn,"Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===B.FAILED_PRECONDITION||i.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ra("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new xo)}}else Z(Xn,"Using default OfflineComponentProvider"),await tc(t,new sP(void 0));return t._offlineComponents}async function cP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Xn,"Using user provided OnlineComponentProvider"),await rd(t,t._uninitializedComponentsProvider._online)):(Z(Xn,"Using default OnlineComponentProvider"),await rd(t,new Lc))),t._onlineComponents}function lP(t){return cP(t).then(e=>e.syncEngine)}/**
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
 */function Xm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const id=new Map;/**
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
 */function uP(t,e,n){if(!n)throw new se(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hP(t,e,n,r){if(e===!0&&r===!0)throw new se(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sd(t){if(!ce.isDocumentKey(t))throw new se(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $l(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function Fc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$l(t);throw new se(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Jm="firestore.googleapis.com",od=!0;class ad{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jm,this.ssl=od}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:od;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Um;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aS)throw new se(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ad({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ad(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jb;switch(r.type){case"firstParty":return new zb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=id.get(n);r&&(Z("ComponentProvider","Removing Datastore"),id.delete(n),r.terminate())}(this),Promise.resolve()}}function fP(t,e,n,r={}){var i;t=Fc(t,Hl);const s=ni(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;s&&(_d(`https://${l}`),yd("Firestore",!0)),a.host!==Jm&&a.host!==l&&ra("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!qn(h,c)&&(t._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=tt.MOCK_USER;else{d=j_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new se(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new tt(m)}t._authCredentials=new $b(new am(d,p))}}/**
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
 */class ql{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ql(this.firestore,e,this._query)}}class yn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new as(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class as extends ql{constructor(e,n,r){super(e,n,wR(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new ce(e))}withConverter(e){return new as(this.firestore,e,this._path)}}function dP(t,e,...n){if(t=bt(t),arguments.length===1&&(e=cm.newId()),uP("doc","path",e),t instanceof Hl){const r=Le.fromString(e,...n);return sd(r),new yn(t,null,new ce(r))}{if(!(t instanceof yn||t instanceof as))throw new se(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return sd(r),new yn(t.firestore,t instanceof as?t.converter:null,new ce(r))}}/**
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
 */const cd="AsyncQueue";class ld{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new $m(this,"async_queue_retry"),this.rc=()=>{const r=ec();r&&Z(cd,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new ur;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!ms(e))throw e;Z(cd,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,_r("INTERNAL UNHANDLED ERROR: ",ud(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const i=jl.createAndSchedule(this,e,n,r,s=>this.uc(s));return this.Zu.push(i),i}oc(){this.Xu&&ue(47125,{cc:ud(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function ud(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ym extends Hl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ld,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ld(e),this._firestoreClient=void 0,await e}}}function pP(t,e){const n=Bc(),r=So,i=Ir(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=U_("firestore");s&&fP(i,...s)}return i}function gP(t){if(t._terminated)throw new se(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mP(t),t._firestoreClient}function mP(t){var e,n,r;const i=t._freezeSettings(),s=function(c,l,h,d){return new cR(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Xm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new oP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(rn.fromBase64String(e))}catch(n){throw new se(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class e_{constructor(e){this._methodName=e}}/**
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
 */class t_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class n_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const _P=/^__.*__$/;class yP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new _s(e,this.data,n,this.fieldTransforms)}}function r_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ic:t})}}class zl{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ec(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new zl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.dc({path:r,Rc:!1});return i.Vc(e),i}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.dc({path:r,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Mo(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(r_(this.Ic)&&_P.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class vP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||aa(e)}bc(e,n,r,i=!1){return new zl({Ic:e,methodName:n,wc:r,path:Qe.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function EP(t){const e=t._freezeSettings(),n=aa(t._databaseId);return new vP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IP(t,e,n,r,i,s={}){const a=t.bc(s.merge||s.mergeFields?2:0,e,n,i);a_("Data must be an object, but it was:",a,r);const c=s_(r,a);let l,h;if(s.merge)l=new Bt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=TP(e,p,n);if(!a.contains(m))throw new se(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);bP(d,m)||d.push(m)}l=new Bt(d),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new yP(new Ft(c),l,h)}function i_(t,e){if(o_(t=bt(t)))return a_("Unsupported field value:",e,t),s_(t,e);if(t instanceof e_)return function(r,i){if(!r_(i.Ic))throw i.gc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let l=i_(c,i.fc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:Dc(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dc(i.serializer,s)}}if(r instanceof t_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:KR(i.serializer,r._byteString)};if(r instanceof yn){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Lm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof n_)return function(a,c){return{mapValue:{fields:{[gm]:{stringValue:mm},[Pc]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.gc("VectorValues must only contain numeric values.");return Ml(c.serializer,h)})}}}}}}(r,i);throw i.gc(`Unsupported field value: ${$l(r)}`)}(t,e)}function s_(t,e){const n={};return um(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,i)=>{const s=i_(i,e.Ac(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function o_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof t_||t instanceof cs||t instanceof yn||t instanceof e_||t instanceof n_)}function a_(t,e,n){if(!o_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=$l(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function TP(t,e,n){if((e=bt(e))instanceof Zm)return e._internalPath;if(typeof e=="string")return AP(t,e);throw Mo("Field path arguments must be of type string or ",t,!1,void 0,n)}const wP=new RegExp("[~\\*/\\[\\]]");function AP(t,e,n){if(e.search(wP)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zm(...e.split("."))._internalPath}catch{throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mo(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new se(B.INVALID_ARGUMENT,c+t+l)}function bP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function RP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function SP(t,e,n){t=Fc(t,yn);const r=Fc(t.firestore,Ym),i=RP(t.converter,e);return PP(r,[IP(EP(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_n.none())])}function PP(t,e){return function(r,i){const s=new ur;return r.asyncQueue.enqueueAndForget(async()=>eP(await lP(r),i,s)),s.promise}(gP(t),e)}(function(e,n=!0){(function(i){si=i})(ii),en(new Ht("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Ym(new Hb(r.getProvider("auth-internal")),new Kb(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new se(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(h.options.projectId,d)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ot(Af,bf,e),Ot(Af,bf,"esm2017")})();const CP={class:"register-details"},kP={__name:"RegisterDetails",setup(t){const e=Mt(""),n=Mt(""),r=Mt(""),i=Mt(""),s=xb(),a=pP(),c=Op(),l=async()=>{const h=c.currentUser;h&&(await SP(dP(a,"users",h.uid),{fullName:e.value,username:n.value,gender:r.value,dob:i.value,phoneNumber:h.phoneNumber}),s.push("/dashboard"))};return(h,d)=>(Hn(),qr("div",CP,[d[6]||(d[6]=Fe("h2",null,"Complete Your Profile",-1)),Fe("form",{onSubmit:v0(l,["prevent"])},[xr(Fe("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>e.value=p),placeholder:"Full Name",required:""},null,512),[[ji,e.value]]),xr(Fe("input",{"onUpdate:modelValue":d[1]||(d[1]=p=>n.value=p),placeholder:"Username",required:""},null,512),[[ji,n.value]]),xr(Fe("select",{"onUpdate:modelValue":d[2]||(d[2]=p=>r.value=p),required:""},d[4]||(d[4]=[Fe("option",{disabled:"",value:""},"Select Gender",-1),Fe("option",null,"Male",-1),Fe("option",null,"Female",-1)]),512),[[m0,r.value]]),xr(Fe("input",{type:"date","onUpdate:modelValue":d[3]||(d[3]=p=>i.value=p),required:""},null,512),[[ji,i.value]]),d[5]||(d[5]=Fe("button",{type:"submit"},"Continue",-1))],32)]))}},OP=Tl(kP,[["__scopeId","data-v-13991bf7"]]),NP=[{path:"/",name:"home",component:Mb},{path:"/about",name:"about",component:Bb},{path:"/register-details",name:"RegisterDetails",component:OP}],DP=Db({history:cb("/"),routes:NP}),Kl=T0(O0);Kl.use(R0());Kl.use(DP);Kl.mount("#app");
