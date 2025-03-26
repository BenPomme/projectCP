var Fp=Object.defineProperty;var mu=n=>{throw TypeError(n)};var Up=(n,e,t)=>e in n?Fp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var gu=(n,e,t)=>Up(n,typeof e!="symbol"?e+"":e,t),ha=(n,e,t)=>e.has(n)||mu("Cannot "+t);var k=(n,e,t)=>(ha(n,e,"read from private field"),t?t.call(n):e.get(n)),ee=(n,e,t)=>e.has(n)?mu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),Q=(n,e,t,r)=>(ha(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),De=(n,e,t)=>(ha(n,e,"access private method"),t);var yi=(n,e,t,r)=>({set _(s){Q(n,e,s,t)},get _(){return k(n,e,r)}});import{r as j,a as Bp,g as $p,R as rt,u as zt,L as te,O as qp,b as io,B as Wp,c as Hp,d as fe,N as bd}from"./vendor-Dfm89uXP.js";import{A as da,q as es,a as zp}from"./ui-4osAbc78.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Ed={exports:{}},oo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp=j,Kp=Symbol.for("react.element"),Qp=Symbol.for("react.fragment"),Yp=Object.prototype.hasOwnProperty,Xp=Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jp={key:!0,ref:!0,__self:!0,__source:!0};function Td(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Yp.call(e,r)&&!Jp.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Kp,type:n,key:i,ref:a,props:s,_owner:Xp.current}}oo.Fragment=Qp;oo.jsx=Td;oo.jsxs=Td;Ed.exports=oo;var l=Ed.exports,Id,pu=Bp;Id=pu.createRoot,pu.hydrateRoot;var ao=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},co=typeof window>"u"||"Deno"in globalThis;function lt(){}function Zp(n,e){return typeof n=="function"?n(e):n}function ey(n){return typeof n=="number"&&n>=0&&n!==1/0}function ty(n,e){return Math.max(n+(e||0)-Date.now(),0)}function yu(n,e){return typeof n=="function"?n(e):n}function ny(n,e){return typeof n=="function"?n(e):n}function _u(n,e){const{type:t="all",exact:r,fetchStatus:s,predicate:i,queryKey:a,stale:c}=n;if(a){if(r){if(e.queryHash!==ac(a,e.options))return!1}else if(!bs(e.queryKey,a))return!1}if(t!=="all"){const u=e.isActive();if(t==="active"&&!u||t==="inactive"&&u)return!1}return!(typeof c=="boolean"&&e.isStale()!==c||s&&s!==e.state.fetchStatus||i&&!i(e))}function vu(n,e){const{exact:t,status:r,predicate:s,mutationKey:i}=n;if(i){if(!e.options.mutationKey)return!1;if(t){if(xs(e.options.mutationKey)!==xs(i))return!1}else if(!bs(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function ac(n,e){return((e==null?void 0:e.queryKeyHashFn)||xs)(n)}function xs(n){return JSON.stringify(n,(e,t)=>Da(t)?Object.keys(t).sort().reduce((r,s)=>(r[s]=t[s],r),{}):t)}function bs(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?!Object.keys(e).some(t=>!bs(n[t],e[t])):!1}function Ad(n,e){if(n===e)return n;const t=wu(n)&&wu(e);if(t||Da(n)&&Da(e)){const r=t?n:Object.keys(n),s=r.length,i=t?e:Object.keys(e),a=i.length,c=t?[]:{};let u=0;for(let d=0;d<a;d++){const m=t?d:i[d];(!t&&r.includes(m)||t)&&n[m]===void 0&&e[m]===void 0?(c[m]=void 0,u++):(c[m]=Ad(n[m],e[m]),c[m]===n[m]&&n[m]!==void 0&&u++)}return s===a&&u===s?n:c}return e}function wu(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Da(n){if(!xu(n))return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(!xu(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function xu(n){return Object.prototype.toString.call(n)==="[object Object]"}function ry(n){return new Promise(e=>{setTimeout(e,n)})}function sy(n,e,t){return typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?Ad(n,e):e}function iy(n,e,t=0){const r=[...n,e];return t&&r.length>t?r.slice(1):r}function oy(n,e,t=0){const r=[e,...n];return t&&r.length>t?r.slice(0,-1):r}var cc=Symbol();function Rd(n,e){return!n.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!n.queryFn||n.queryFn===cc?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}var On,an,mr,md,ay=(md=class extends ao{constructor(){super();ee(this,On);ee(this,an);ee(this,mr);Q(this,mr,e=>{if(!co&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){k(this,an)||this.setEventListener(k(this,mr))}onUnsubscribe(){var e;this.hasListeners()||((e=k(this,an))==null||e.call(this),Q(this,an,void 0))}setEventListener(e){var t;Q(this,mr,e),(t=k(this,an))==null||t.call(this),Q(this,an,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){k(this,On)!==e&&(Q(this,On,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof k(this,On)=="boolean"?k(this,On):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},On=new WeakMap,an=new WeakMap,mr=new WeakMap,md),Sd=new ay,gr,cn,pr,gd,cy=(gd=class extends ao{constructor(){super();ee(this,gr,!0);ee(this,cn);ee(this,pr);Q(this,pr,e=>{if(!co&&window.addEventListener){const t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){k(this,cn)||this.setEventListener(k(this,pr))}onUnsubscribe(){var e;this.hasListeners()||((e=k(this,cn))==null||e.call(this),Q(this,cn,void 0))}setEventListener(e){var t;Q(this,pr,e),(t=k(this,cn))==null||t.call(this),Q(this,cn,e(this.setOnline.bind(this)))}setOnline(e){k(this,gr)!==e&&(Q(this,gr,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return k(this,gr)}},gr=new WeakMap,cn=new WeakMap,pr=new WeakMap,gd),Mi=new cy;function ly(){let n,e;const t=new Promise((s,i)=>{n=s,e=i});t.status="pending",t.catch(()=>{});function r(s){Object.assign(t,s),delete t.resolve,delete t.reject}return t.resolve=s=>{r({status:"fulfilled",value:s}),n(s)},t.reject=s=>{r({status:"rejected",reason:s}),e(s)},t}function uy(n){return Math.min(1e3*2**n,3e4)}function Pd(n){return(n??"online")==="online"?Mi.isOnline():!0}var Nd=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function fa(n){return n instanceof Nd}function Cd(n){let e=!1,t=0,r=!1,s;const i=ly(),a=A=>{var _;r||(g(new Nd(A)),(_=n.abort)==null||_.call(n))},c=()=>{e=!0},u=()=>{e=!1},d=()=>Sd.isFocused()&&(n.networkMode==="always"||Mi.isOnline())&&n.canRun(),m=()=>Pd(n.networkMode)&&n.canRun(),y=A=>{var _;r||(r=!0,(_=n.onSuccess)==null||_.call(n,A),s==null||s(),i.resolve(A))},g=A=>{var _;r||(r=!0,(_=n.onError)==null||_.call(n,A),s==null||s(),i.reject(A))},w=()=>new Promise(A=>{var _;s=O=>{(r||d())&&A(O)},(_=n.onPause)==null||_.call(n)}).then(()=>{var A;s=void 0,r||(A=n.onContinue)==null||A.call(n)}),I=()=>{if(r)return;let A;const _=t===0?n.initialPromise:void 0;try{A=_??n.fn()}catch(O){A=Promise.reject(O)}Promise.resolve(A).then(y).catch(O=>{var z;if(r)return;const N=n.retry??(co?0:3),M=n.retryDelay??uy,U=typeof M=="function"?M(t,O):M,W=N===!0||typeof N=="number"&&t<N||typeof N=="function"&&N(t,O);if(e||!W){g(O);return}t++,(z=n.onFail)==null||z.call(n,t,O),ry(U).then(()=>d()?void 0:w()).then(()=>{e?g(O):I()})})};return{promise:i,cancel:a,continue:()=>(s==null||s(),i),cancelRetry:c,continueRetry:u,canStart:m,start:()=>(m()?I():w().then(I),i)}}function hy(){let n=[],e=0,t=c=>{c()},r=c=>{c()},s=c=>setTimeout(c,0);const i=c=>{e?n.push(c):s(()=>{t(c)})},a=()=>{const c=n;n=[],c.length&&s(()=>{r(()=>{c.forEach(u=>{t(u)})})})};return{batch:c=>{let u;e++;try{u=c()}finally{e--,e||a()}return u},batchCalls:c=>(...u)=>{i(()=>{c(...u)})},schedule:i,setNotifyFunction:c=>{t=c},setBatchNotifyFunction:c=>{r=c},setScheduler:c=>{s=c}}}var qe=hy(),Vn,pd,kd=(pd=class{constructor(){ee(this,Vn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ey(this.gcTime)&&Q(this,Vn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(co?1/0:5*60*1e3))}clearGcTimeout(){k(this,Vn)&&(clearTimeout(k(this,Vn)),Q(this,Vn,void 0))}},Vn=new WeakMap,pd),yr,_r,nt,Mn,Oe,Vs,Ln,ut,jt,yd,dy=(yd=class extends kd{constructor(t){super();ee(this,ut);ee(this,yr);ee(this,_r);ee(this,nt);ee(this,Mn);ee(this,Oe);ee(this,Vs);ee(this,Ln);Q(this,Ln,!1),Q(this,Vs,t.defaultOptions),this.setOptions(t.options),this.observers=[],Q(this,Mn,t.client),Q(this,nt,k(this,Mn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Q(this,yr,my(this.options)),this.state=t.state??k(this,yr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=k(this,Oe))==null?void 0:t.promise}setOptions(t){this.options={...k(this,Vs),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&k(this,nt).remove(this)}setData(t,r){const s=sy(this.state.data,t,this.options);return De(this,ut,jt).call(this,{data:s,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),s}setState(t,r){De(this,ut,jt).call(this,{type:"setState",state:t,setStateOptions:r})}cancel(t){var s,i;const r=(s=k(this,Oe))==null?void 0:s.promise;return(i=k(this,Oe))==null||i.cancel(t),r?r.then(lt).catch(lt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(k(this,yr))}isActive(){return this.observers.some(t=>ny(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===cc||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!ty(this.state.dataUpdatedAt,t)}onFocus(){var r;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(r=k(this,Oe))==null||r.continue()}onOnline(){var r;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(r=k(this,Oe))==null||r.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),k(this,nt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(r=>r!==t),this.observers.length||(k(this,Oe)&&(k(this,Ln)?k(this,Oe).cancel({revert:!0}):k(this,Oe).cancelRetry()),this.scheduleGc()),k(this,nt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||De(this,ut,jt).call(this,{type:"invalidate"})}fetch(t,r){var d,m,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(k(this,Oe))return k(this,Oe).continueRetry(),k(this,Oe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const g=this.observers.find(w=>w.options.queryFn);g&&this.setOptions(g.options)}const s=new AbortController,i=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(Q(this,Ln,!0),s.signal)})},a=()=>{const g=Rd(this.options,r),w={client:k(this,Mn),queryKey:this.queryKey,meta:this.meta};return i(w),Q(this,Ln,!1),this.options.persister?this.options.persister(g,w,this):g(w)},c={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:k(this,Mn),state:this.state,fetchFn:a};i(c),(d=this.options.behavior)==null||d.onFetch(c,this),Q(this,_r,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=c.fetchOptions)==null?void 0:m.meta))&&De(this,ut,jt).call(this,{type:"fetch",meta:(y=c.fetchOptions)==null?void 0:y.meta});const u=g=>{var w,I,A,_;fa(g)&&g.silent||De(this,ut,jt).call(this,{type:"error",error:g}),fa(g)||((I=(w=k(this,nt).config).onError)==null||I.call(w,g,this),(_=(A=k(this,nt).config).onSettled)==null||_.call(A,this.state.data,g,this)),this.scheduleGc()};return Q(this,Oe,Cd({initialPromise:r==null?void 0:r.initialPromise,fn:c.fetchFn,abort:s.abort.bind(s),onSuccess:g=>{var w,I,A,_;if(g===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(O){u(O);return}(I=(w=k(this,nt).config).onSuccess)==null||I.call(w,g,this),(_=(A=k(this,nt).config).onSettled)==null||_.call(A,g,this.state.error,this),this.scheduleGc()},onError:u,onFail:(g,w)=>{De(this,ut,jt).call(this,{type:"failed",failureCount:g,error:w})},onPause:()=>{De(this,ut,jt).call(this,{type:"pause"})},onContinue:()=>{De(this,ut,jt).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0})),k(this,Oe).start()}},yr=new WeakMap,_r=new WeakMap,nt=new WeakMap,Mn=new WeakMap,Oe=new WeakMap,Vs=new WeakMap,Ln=new WeakMap,ut=new WeakSet,jt=function(t){const r=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...fy(s.data,this.options),fetchMeta:t.meta??null};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return fa(i)&&i.revert&&k(this,_r)?{...k(this,_r),fetchStatus:"idle"}:{...s,error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=r(this.state),qe.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),k(this,nt).notify({query:this,type:"updated",action:t})})},yd);function fy(n,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Pd(e.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function my(n){const e=typeof n.initialData=="function"?n.initialData():n.initialData,t=e!==void 0,r=t?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var _t,_d,gy=(_d=class extends ao{constructor(e={}){super();ee(this,_t);this.config=e,Q(this,_t,new Map)}build(e,t,r){const s=t.queryKey,i=t.queryHash??ac(s,t);let a=this.get(i);return a||(a=new dy({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(a)),a}add(e){k(this,_t).has(e.queryHash)||(k(this,_t).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=k(this,_t).get(e.queryHash);t&&(e.destroy(),t===e&&k(this,_t).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){qe.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return k(this,_t).get(e)}getAll(){return[...k(this,_t).values()]}find(e){const t={exact:!0,...e};return this.getAll().find(r=>_u(t,r))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(r=>_u(e,r)):t}notify(e){qe.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){qe.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){qe.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},_t=new WeakMap,_d),vt,$e,Fn,wt,tn,vd,py=(vd=class extends kd{constructor(t){super();ee(this,wt);ee(this,vt);ee(this,$e);ee(this,Fn);this.mutationId=t.mutationId,Q(this,$e,t.mutationCache),Q(this,vt,[]),this.state=t.state||yy(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){k(this,vt).includes(t)||(k(this,vt).push(t),this.clearGcTimeout(),k(this,$e).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Q(this,vt,k(this,vt).filter(r=>r!==t)),this.scheduleGc(),k(this,$e).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){k(this,vt).length||(this.state.status==="pending"?this.scheduleGc():k(this,$e).remove(this))}continue(){var t;return((t=k(this,Fn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,a,c,u,d,m,y,g,w,I,A,_,O,N,M,U,W,z,R,x;Q(this,Fn,Cd({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(b,v)=>{De(this,wt,tn).call(this,{type:"failed",failureCount:b,error:v})},onPause:()=>{De(this,wt,tn).call(this,{type:"pause"})},onContinue:()=>{De(this,wt,tn).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>k(this,$e).canRun(this)}));const r=this.state.status==="pending",s=!k(this,Fn).canStart();try{if(!r){De(this,wt,tn).call(this,{type:"pending",variables:t,isPaused:s}),await((a=(i=k(this,$e).config).onMutate)==null?void 0:a.call(i,t,this));const v=await((u=(c=this.options).onMutate)==null?void 0:u.call(c,t));v!==this.state.context&&De(this,wt,tn).call(this,{type:"pending",context:v,variables:t,isPaused:s})}const b=await k(this,Fn).start();return await((m=(d=k(this,$e).config).onSuccess)==null?void 0:m.call(d,b,t,this.state.context,this)),await((g=(y=this.options).onSuccess)==null?void 0:g.call(y,b,t,this.state.context)),await((I=(w=k(this,$e).config).onSettled)==null?void 0:I.call(w,b,null,this.state.variables,this.state.context,this)),await((_=(A=this.options).onSettled)==null?void 0:_.call(A,b,null,t,this.state.context)),De(this,wt,tn).call(this,{type:"success",data:b}),b}catch(b){try{throw await((N=(O=k(this,$e).config).onError)==null?void 0:N.call(O,b,t,this.state.context,this)),await((U=(M=this.options).onError)==null?void 0:U.call(M,b,t,this.state.context)),await((z=(W=k(this,$e).config).onSettled)==null?void 0:z.call(W,void 0,b,this.state.variables,this.state.context,this)),await((x=(R=this.options).onSettled)==null?void 0:x.call(R,void 0,b,t,this.state.context)),b}finally{De(this,wt,tn).call(this,{type:"error",error:b})}}finally{k(this,$e).runNext(this)}}},vt=new WeakMap,$e=new WeakMap,Fn=new WeakMap,wt=new WeakSet,tn=function(t){const r=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),qe.batch(()=>{k(this,vt).forEach(s=>{s.onMutationUpdate(t)}),k(this,$e).notify({mutation:this,type:"updated",action:t})})},vd);function yy(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ot,ht,Ms,wd,_y=(wd=class extends ao{constructor(e={}){super();ee(this,Ot);ee(this,ht);ee(this,Ms);this.config=e,Q(this,Ot,new Set),Q(this,ht,new Map),Q(this,Ms,0)}build(e,t,r){const s=new py({mutationCache:this,mutationId:++yi(this,Ms)._,options:e.defaultMutationOptions(t),state:r});return this.add(s),s}add(e){k(this,Ot).add(e);const t=_i(e);if(typeof t=="string"){const r=k(this,ht).get(t);r?r.push(e):k(this,ht).set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(k(this,Ot).delete(e)){const t=_i(e);if(typeof t=="string"){const r=k(this,ht).get(t);if(r)if(r.length>1){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}else r[0]===e&&k(this,ht).delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=_i(e);if(typeof t=="string"){const r=k(this,ht).get(t),s=r==null?void 0:r.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var r;const t=_i(e);if(typeof t=="string"){const s=(r=k(this,ht).get(t))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){qe.batch(()=>{k(this,Ot).forEach(e=>{this.notify({type:"removed",mutation:e})}),k(this,Ot).clear(),k(this,ht).clear()})}getAll(){return Array.from(k(this,Ot))}find(e){const t={exact:!0,...e};return this.getAll().find(r=>vu(t,r))}findAll(e={}){return this.getAll().filter(t=>vu(e,t))}notify(e){qe.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return qe.batch(()=>Promise.all(e.map(t=>t.continue().catch(lt))))}},Ot=new WeakMap,ht=new WeakMap,Ms=new WeakMap,wd);function _i(n){var e;return(e=n.options.scope)==null?void 0:e.id}function bu(n){return{onFetch:(e,t)=>{var m,y,g,w,I;const r=e.options,s=(g=(y=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:y.fetchMore)==null?void 0:g.direction,i=((w=e.state.data)==null?void 0:w.pages)||[],a=((I=e.state.data)==null?void 0:I.pageParams)||[];let c={pages:[],pageParams:[]},u=0;const d=async()=>{let A=!1;const _=M=>{Object.defineProperty(M,"signal",{enumerable:!0,get:()=>(e.signal.aborted?A=!0:e.signal.addEventListener("abort",()=>{A=!0}),e.signal)})},O=Rd(e.options,e.fetchOptions),N=async(M,U,W)=>{if(A)return Promise.reject();if(U==null&&M.pages.length)return Promise.resolve(M);const z={client:e.client,queryKey:e.queryKey,pageParam:U,direction:W?"backward":"forward",meta:e.options.meta};_(z);const R=await O(z),{maxPages:x}=e.options,b=W?oy:iy;return{pages:b(M.pages,R,x),pageParams:b(M.pageParams,U,x)}};if(s&&i.length){const M=s==="backward",U=M?vy:Eu,W={pages:i,pageParams:a},z=U(r,W);c=await N(W,z,M)}else{const M=n??i.length;do{const U=u===0?a[0]??r.initialPageParam:Eu(r,c);if(u>0&&U==null)break;c=await N(c,U),u++}while(u<M)}return c};e.options.persister?e.fetchFn=()=>{var A,_;return(_=(A=e.options).persister)==null?void 0:_.call(A,d,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t)}:e.fetchFn=d}}}function Eu(n,{pages:e,pageParams:t}){const r=e.length-1;return e.length>0?n.getNextPageParam(e[r],e,t[r],t):void 0}function vy(n,{pages:e,pageParams:t}){var r;return e.length>0?(r=n.getPreviousPageParam)==null?void 0:r.call(n,e[0],e,t[0],t):void 0}var me,ln,un,vr,wr,hn,xr,br,xd,wy=(xd=class{constructor(n={}){ee(this,me);ee(this,ln);ee(this,un);ee(this,vr);ee(this,wr);ee(this,hn);ee(this,xr);ee(this,br);Q(this,me,n.queryCache||new gy),Q(this,ln,n.mutationCache||new _y),Q(this,un,n.defaultOptions||{}),Q(this,vr,new Map),Q(this,wr,new Map),Q(this,hn,0)}mount(){yi(this,hn)._++,k(this,hn)===1&&(Q(this,xr,Sd.subscribe(async n=>{n&&(await this.resumePausedMutations(),k(this,me).onFocus())})),Q(this,br,Mi.subscribe(async n=>{n&&(await this.resumePausedMutations(),k(this,me).onOnline())})))}unmount(){var n,e;yi(this,hn)._--,k(this,hn)===0&&((n=k(this,xr))==null||n.call(this),Q(this,xr,void 0),(e=k(this,br))==null||e.call(this),Q(this,br,void 0))}isFetching(n){return k(this,me).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return k(this,ln).findAll({...n,status:"pending"}).length}getQueryData(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=k(this,me).get(e.queryHash))==null?void 0:t.state.data}ensureQueryData(n){const e=this.defaultQueryOptions(n),t=k(this,me).build(this,e),r=t.state.data;return r===void 0?this.fetchQuery(n):(n.revalidateIfStale&&t.isStaleByTime(yu(e.staleTime,t))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(n){return k(this,me).findAll(n).map(({queryKey:e,state:t})=>{const r=t.data;return[e,r]})}setQueryData(n,e,t){const r=this.defaultQueryOptions({queryKey:n}),s=k(this,me).get(r.queryHash),i=s==null?void 0:s.state.data,a=Zp(e,i);if(a!==void 0)return k(this,me).build(this,r).setData(a,{...t,manual:!0})}setQueriesData(n,e,t){return qe.batch(()=>k(this,me).findAll(n).map(({queryKey:r})=>[r,this.setQueryData(r,e,t)]))}getQueryState(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=k(this,me).get(e.queryHash))==null?void 0:t.state}removeQueries(n){const e=k(this,me);qe.batch(()=>{e.findAll(n).forEach(t=>{e.remove(t)})})}resetQueries(n,e){const t=k(this,me);return qe.batch(()=>(t.findAll(n).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...n},e)))}cancelQueries(n,e={}){const t={revert:!0,...e},r=qe.batch(()=>k(this,me).findAll(n).map(s=>s.cancel(t)));return Promise.all(r).then(lt).catch(lt)}invalidateQueries(n,e={}){return qe.batch(()=>(k(this,me).findAll(n).forEach(t=>{t.invalidate()}),(n==null?void 0:n.refetchType)==="none"?Promise.resolve():this.refetchQueries({...n,type:(n==null?void 0:n.refetchType)??(n==null?void 0:n.type)??"active"},e)))}refetchQueries(n,e={}){const t={...e,cancelRefetch:e.cancelRefetch??!0},r=qe.batch(()=>k(this,me).findAll(n).filter(s=>!s.isDisabled()).map(s=>{let i=s.fetch(void 0,t);return t.throwOnError||(i=i.catch(lt)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(lt)}fetchQuery(n){const e=this.defaultQueryOptions(n);e.retry===void 0&&(e.retry=!1);const t=k(this,me).build(this,e);return t.isStaleByTime(yu(e.staleTime,t))?t.fetch(e):Promise.resolve(t.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(lt).catch(lt)}fetchInfiniteQuery(n){return n.behavior=bu(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(lt).catch(lt)}ensureInfiniteQueryData(n){return n.behavior=bu(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Mi.isOnline()?k(this,ln).resumePausedMutations():Promise.resolve()}getQueryCache(){return k(this,me)}getMutationCache(){return k(this,ln)}getDefaultOptions(){return k(this,un)}setDefaultOptions(n){Q(this,un,n)}setQueryDefaults(n,e){k(this,vr).set(xs(n),{queryKey:n,defaultOptions:e})}getQueryDefaults(n){const e=[...k(this,vr).values()],t={};return e.forEach(r=>{bs(n,r.queryKey)&&Object.assign(t,r.defaultOptions)}),t}setMutationDefaults(n,e){k(this,wr).set(xs(n),{mutationKey:n,defaultOptions:e})}getMutationDefaults(n){const e=[...k(this,wr).values()],t={};return e.forEach(r=>{bs(n,r.mutationKey)&&Object.assign(t,r.defaultOptions)}),t}defaultQueryOptions(n){if(n._defaulted)return n;const e={...k(this,un).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return e.queryHash||(e.queryHash=ac(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===cc&&(e.enabled=!1),e}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...k(this,un).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){k(this,me).clear(),k(this,ln).clear()}},me=new WeakMap,ln=new WeakMap,un=new WeakMap,vr=new WeakMap,wr=new WeakMap,hn=new WeakMap,xr=new WeakMap,br=new WeakMap,xd),xy=j.createContext(void 0),by=({client:n,children:e})=>(j.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),l.jsx(xy.Provider,{value:n,children:e})),Tu={};/**
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
 */const Dd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ey=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|c>>4;let g=(c&15)<<2|d>>6,w=d&63;u||(w=64,a||(g=64)),r.push(t[m],t[y],t[g],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ey(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||y==null)throw new Ty;const g=i<<2|c>>4;if(r.push(g),d!==64){const w=c<<4&240|d>>2;if(r.push(w),y!==64){const I=d<<6&192|y;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ty extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iy=function(n){const e=Dd(n);return jd.encodeByteArray(e,!0)},Li=function(n){return Iy(n).replace(/\./g,"")},Od=function(n){try{return jd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ay(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ry=()=>Ay().__FIREBASE_DEFAULTS__,Sy=()=>{if(typeof process>"u"||typeof Tu>"u")return;const n=Tu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Py=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Od(n[1]);return e&&JSON.parse(e)},lo=()=>{try{return Ry()||Sy()||Py()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vd=n=>{var e,t;return(t=(e=lo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Md=n=>{const e=Vd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ld=()=>{var n;return(n=lo())===null||n===void 0?void 0:n.config},Fd=n=>{var e;return(e=lo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ny{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ud(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Li(JSON.stringify(t)),Li(JSON.stringify(a)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function ky(){var n;const e=(n=lo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oy(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vy(){return!ky()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function qd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function My(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ly="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ly,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Fy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ot(s,c,r)}}function Fy(n,e){return n.replace(Uy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Uy=/\{\$([^}]+)}/g;function By(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Es(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Iu(i)&&Iu(a)){if(!Es(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Iu(n){return n!==null&&typeof n=="object"}/**
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
 */function Ls(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function os(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function as(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $y(n,e){const t=new qy(n,e);return t.subscribe.bind(t)}class qy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Wy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ma),s.error===void 0&&(s.error=ma),s.complete===void 0&&(s.complete=ma);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ma(){}/**
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
 */const Hy=1e3,zy=2,Gy=4*60*60*1e3,Ky=.5;function Au(n,e=Hy,t=zy){const r=e*Math.pow(t,n),s=Math.round(Ky*r*(Math.random()-.5)*2);return Math.min(Gy,r+s)}/**
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
 */function le(n){return n&&n._delegate?n._delegate:n}class st{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class Qy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ny;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xy(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yy(n){return n===Cn?void 0:n}function Xy(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Zy={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},e_=X.INFO,t_={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},n_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=t_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=e_,this._logHandler=n_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const r_=(n,e)=>e.some(t=>n instanceof t);let Ru,Su;function s_(){return Ru||(Ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i_(){return Su||(Su=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wd=new WeakMap,ja=new WeakMap,Hd=new WeakMap,ga=new WeakMap,lc=new WeakMap;function o_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(fn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wd.set(t,n)}).catch(()=>{}),lc.set(e,n),e}function a_(n){if(ja.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ja.set(n,e)}let Oa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ja.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function c_(n){Oa=n(Oa)}function l_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(pa(this),e,...t);return Hd.set(r,e.sort?e.sort():[e]),fn(r)}:i_().includes(n)?function(...e){return n.apply(pa(this),e),fn(Wd.get(this))}:function(...e){return fn(n.apply(pa(this),e))}}function u_(n){return typeof n=="function"?l_(n):(n instanceof IDBTransaction&&a_(n),r_(n,s_())?new Proxy(n,Oa):n)}function fn(n){if(n instanceof IDBRequest)return o_(n);if(ga.has(n))return ga.get(n);const e=u_(n);return e!==n&&(ga.set(n,e),lc.set(e,n)),e}const pa=n=>lc.get(n);function zd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=fn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(fn(a.result),u.oldVersion,u.newVersion,fn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const h_=["get","getKey","getAll","getAllKeys","count"],d_=["put","add","delete","clear"],ya=new Map;function Pu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=d_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||h_.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return ya.set(e,i),i}c_(n=>({...n,get:(e,t,r)=>Pu(e,t)||n.get(e,t,r),has:(e,t)=>!!Pu(e,t)||n.has(e,t)}));/**
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
 */class f_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(m_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function m_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Va="@firebase/app",Nu="0.10.13";/**
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
 */const Ut=new uo("@firebase/app"),g_="@firebase/app-compat",p_="@firebase/analytics-compat",y_="@firebase/analytics",__="@firebase/app-check-compat",v_="@firebase/app-check",w_="@firebase/auth",x_="@firebase/auth-compat",b_="@firebase/database",E_="@firebase/data-connect",T_="@firebase/database-compat",I_="@firebase/functions",A_="@firebase/functions-compat",R_="@firebase/installations",S_="@firebase/installations-compat",P_="@firebase/messaging",N_="@firebase/messaging-compat",C_="@firebase/performance",k_="@firebase/performance-compat",D_="@firebase/remote-config",j_="@firebase/remote-config-compat",O_="@firebase/storage",V_="@firebase/storage-compat",M_="@firebase/firestore",L_="@firebase/vertexai-preview",F_="@firebase/firestore-compat",U_="firebase",B_="10.14.1";/**
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
 */const Ma="[DEFAULT]",$_={[Va]:"fire-core",[g_]:"fire-core-compat",[y_]:"fire-analytics",[p_]:"fire-analytics-compat",[v_]:"fire-app-check",[__]:"fire-app-check-compat",[w_]:"fire-auth",[x_]:"fire-auth-compat",[b_]:"fire-rtdb",[E_]:"fire-data-connect",[T_]:"fire-rtdb-compat",[I_]:"fire-fn",[A_]:"fire-fn-compat",[R_]:"fire-iid",[S_]:"fire-iid-compat",[P_]:"fire-fcm",[N_]:"fire-fcm-compat",[C_]:"fire-perf",[k_]:"fire-perf-compat",[D_]:"fire-rc",[j_]:"fire-rc-compat",[O_]:"fire-gcs",[V_]:"fire-gcs-compat",[M_]:"fire-fst",[F_]:"fire-fst-compat",[L_]:"fire-vertex","fire-js":"fire-js",[U_]:"fire-js-all"};/**
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
 */const Fi=new Map,q_=new Map,La=new Map;function Cu(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gt(n){const e=n.name;if(La.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;La.set(e,n);for(const t of Fi.values())Cu(t,n);for(const t of q_.values())Cu(t,n);return!0}function xn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ft(n){return n.settings!==void 0}/**
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
 */const W_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Yn("app","Firebase",W_);/**
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
 */class H_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Xn=B_;function Gd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ma,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mn.create("bad-app-name",{appName:String(s)});if(t||(t=Ld()),!t)throw mn.create("no-options");const i=Fi.get(s);if(i){if(Es(t,i.options)&&Es(r,i.config))return i;throw mn.create("duplicate-app",{appName:s})}const a=new Jy(s);for(const u of La.values())a.addComponent(u);const c=new H_(t,r,a);return Fi.set(s,c),c}function ho(n=Ma){const e=Fi.get(n);if(!e&&n===Ma&&Ld())return Gd();if(!e)throw mn.create("no-app",{appName:n});return e}function ze(n,e,t){var r;let s=(r=$_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}gt(new st(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const z_="firebase-heartbeat-database",G_=1,Ts="firebase-heartbeat-store";let _a=null;function Kd(){return _a||(_a=zd(z_,G_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ts)}catch(t){console.warn(t)}}}}).catch(n=>{throw mn.create("idb-open",{originalErrorMessage:n.message})})),_a}async function K_(n){try{const t=(await Kd()).transaction(Ts),r=await t.objectStore(Ts).get(Qd(n));return await t.done,r}catch(e){if(e instanceof ot)Ut.warn(e.message);else{const t=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function ku(n,e){try{const r=(await Kd()).transaction(Ts,"readwrite");await r.objectStore(Ts).put(e,Qd(n)),await r.done}catch(t){if(t instanceof ot)Ut.warn(t.message);else{const r=mn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(r.message)}}}function Qd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Q_=1024,Y_=30*24*60*60*1e3;class X_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Du();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Y_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Du(),{heartbeatsToSend:r,unsentEntries:s}=J_(this._heartbeatsCache.heartbeats),i=Li(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ut.warn(t),""}}}function Du(){return new Date().toISOString().substring(0,10)}function J_(n,e=Q_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ju(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ju(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Z_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?qd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await K_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ku(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ku(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ju(n){return Li(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ev(n){gt(new st("platform-logger",e=>new f_(e),"PRIVATE")),gt(new st("heartbeat",e=>new X_(e),"PRIVATE")),ze(Va,Nu,n),ze(Va,Nu,"esm2017"),ze("fire-js","")}ev("");function uc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Yd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tv=Yd,Xd=new Yn("auth","Firebase",Yd());/**
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
 */const Ui=new uo("@firebase/auth");function nv(n,...e){Ui.logLevel<=X.WARN&&Ui.warn(`Auth (${Xn}): ${n}`,...e)}function Ri(n,...e){Ui.logLevel<=X.ERROR&&Ui.error(`Auth (${Xn}): ${n}`,...e)}/**
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
 */function it(n,...e){throw dc(n,...e)}function Et(n,...e){return dc(n,...e)}function hc(n,e,t){const r=Object.assign(Object.assign({},tv()),{[e]:t});return new Yn("auth","Firebase",r).create(e,{appName:n.name})}function Tt(n){return hc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rv(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&it(n,"argument-error"),hc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Xd.create(n,...e)}function q(n,e,...t){if(!n)throw dc(e,...t)}function Vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ri(e),new Error(e)}function Bt(n,e){n||Vt(e)}/**
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
 */function Fa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sv(){return Ou()==="http:"||Ou()==="https:"}function Ou(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function iv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sv()||Bd()||"connection"in navigator)?navigator.onLine:!0}function ov(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Fs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bt(t>e,"Short delay should be less than long delay!"),this.isMobile=Cy()||jy()}get(){return iv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fc(n,e){Bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Jd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const av={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cv=new Fs(3e4,6e4);function Gt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nt(n,e,t,r,s={}){return Zd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ls(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Dy()||(d.referrerPolicy="no-referrer"),Jd.fetch()(ef(n,n.config.apiHost,t,c),d)})}async function Zd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},av),e);try{const s=new uv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw vi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw vi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw vi(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw hc(n,m,d);it(n,m)}}catch(s){if(s instanceof ot)throw s;it(n,"network-request-failed",{message:String(s)})}}async function Us(n,e,t,r,s={}){const i=await Nt(n,e,t,r,s);return"mfaPendingCredential"in i&&it(n,"multi-factor-auth-required",{_serverResponse:i}),i}function ef(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?fc(n.config,s):`${n.config.apiScheme}://${s}`}function lv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),cv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Et(n,e,r);return s.customData._tokenResponse=t,s}function Vu(n){return n!==void 0&&n.enterprise!==void 0}class hv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return lv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function dv(n,e){return Nt(n,"GET","/v2/recaptchaConfig",Gt(n,e))}/**
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
 */async function fv(n,e){return Nt(n,"POST","/v1/accounts:delete",e)}async function tf(n,e){return Nt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mv(n,e=!1){const t=le(n),r=await t.getIdToken(e),s=mc(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ms(va(s.auth_time)),issuedAtTime:ms(va(s.iat)),expirationTime:ms(va(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function va(n){return Number(n)*1e3}function mc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const s=Od(t);return s?JSON.parse(s):(Ri("Failed to decode base64 JWT payload"),null)}catch(s){return Ri("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mu(n){const e=mc(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Er(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&gv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class pv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ua{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Er(n,tf(t,{idToken:r}));q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nf(i.providerUserInfo):[],c=_v(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ua(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function yv(n){const e=le(n);await Bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _v(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nf(n){return n.map(e=>{var{providerId:t}=e,r=uc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vv(n,e){const t=await Zd(n,{},async()=>{const r=Ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=ef(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Jd.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wv(n,e){return Nt(n,"POST","/v2/accounts:revokeToken",Gt(n,e))}/**
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
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Mu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await vv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new ur;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function Zt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ua(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Er(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mv(this,e)}reload(){return yv(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(Tt(this.auth));const e=await this.getIdToken();return await Er(this,fv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,I=(a=t.photoURL)!==null&&a!==void 0?a:void 0,A=(c=t.tenantId)!==null&&c!==void 0?c:void 0,_=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,O=(d=t.createdAt)!==null&&d!==void 0?d:void 0,N=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:M,emailVerified:U,isAnonymous:W,providerData:z,stsTokenManager:R}=t;q(M&&R,e,"internal-error");const x=ur.fromJSON(this.name,R);q(typeof M=="string",e,"internal-error"),Zt(y,e.name),Zt(g,e.name),q(typeof U=="boolean",e,"internal-error"),q(typeof W=="boolean",e,"internal-error"),Zt(w,e.name),Zt(I,e.name),Zt(A,e.name),Zt(_,e.name),Zt(O,e.name),Zt(N,e.name);const b=new Mt({uid:M,auth:e,email:g,emailVerified:U,displayName:y,isAnonymous:W,photoURL:I,phoneNumber:w,tenantId:A,stsTokenManager:x,createdAt:O,lastLoginAt:N});return z&&Array.isArray(z)&&(b.providerData=z.map(v=>Object.assign({},v))),_&&(b._redirectEventId=_),b}static async _fromIdTokenResponse(e,t,r=!1){const s=new ur;s.updateFromServerResponse(t);const i=new Mt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ur;c.updateFromIdToken(r);const u=new Mt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ua(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Lu=new Map;function Lt(n){Bt(n instanceof Function,"Expected a class definition");let e=Lu.get(n);return e?(Bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Lu.set(n,e),e)}/**
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
 */class rf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rf.type="NONE";const Fu=rf;/**
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
 */function Si(n,e,t){return`firebase:${n}:${e}:${t}`}class hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Si(this.userKey,s.apiKey,i),this.fullPersistenceKey=Si("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new hr(Lt(Fu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Lt(Fu);const a=Si(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){const y=Mt._fromJSON(e,m);d!==i&&(c=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new hr(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new hr(i,e,r))}}/**
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
 */function Uu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uf(e))return"Blackberry";if(hf(e))return"Webos";if(of(e))return"Safari";if((e.includes("chrome/")||af(e))&&!e.includes("edge/"))return"Chrome";if(lf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sf(n=Le()){return/firefox\//i.test(n)}function of(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function af(n=Le()){return/crios\//i.test(n)}function cf(n=Le()){return/iemobile/i.test(n)}function lf(n=Le()){return/android/i.test(n)}function uf(n=Le()){return/blackberry/i.test(n)}function hf(n=Le()){return/webos/i.test(n)}function gc(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xv(n=Le()){var e;return gc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bv(){return Oy()&&document.documentMode===10}function df(n=Le()){return gc(n)||lf(n)||hf(n)||uf(n)||/windows phone/i.test(n)||cf(n)}/**
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
 */function ff(n,e=[]){let t;switch(n){case"Browser":t=Uu(Le());break;case"Worker":t=`${Uu(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xn}/${r}`}/**
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
 */class Ev{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Tv(n,e={}){return Nt(n,"GET","/v2/passwordPolicy",Gt(n,e))}/**
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
 */const Iv=6;class Av{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Iv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Rv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bu(this),this.idTokenSubscription=new Bu(this),this.beforeStateQueue=new Ev(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tf(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ov()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(Tt(this));const t=e?le(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Tv(this),t=new Av(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[Lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ff(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&nv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ct(n){return le(n)}class Bu{constructor(e){this.auth=e,this.observer=null,this.addObserver=$y(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sv(n){fo=n}function mf(n){return fo.loadJS(n)}function Pv(){return fo.recaptchaEnterpriseScript}function Nv(){return fo.gapiScript}function Cv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const kv="recaptcha-enterprise",Dv="NO_RECAPTCHA";class jv{constructor(e){this.type=kv,this.auth=Ct(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{dv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new hv(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Vu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Dv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Vu(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Pv();u.length!==0&&(u+=c),mf(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function $u(n,e,t,r=!1){const s=new jv(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $i(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $u(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await $u(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function Ov(n,e){const t=xn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Es(i,e??{}))return s;it(s,"already-initialized")}return t.initialize({options:e})}function Vv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mv(n,e,t){const r=Ct(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gf(e),{host:a,port:c}=Lv(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Fv()}function gf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Lv(n){const e=gf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:qu(a)}}}function qu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,t){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function Uv(n,e){return Nt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Bv(n,e){return Us(n,"POST","/v1/accounts:signInWithPassword",Gt(n,e))}async function $v(n,e){return Nt(n,"POST","/v1/accounts:sendOobCode",Gt(n,e))}async function qv(n,e){return $v(n,e)}/**
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
 */async function Wv(n,e){return Us(n,"POST","/v1/accounts:signInWithEmailLink",Gt(n,e))}async function Hv(n,e){return Us(n,"POST","/v1/accounts:signInWithEmailLink",Gt(n,e))}/**
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
 */class Is extends pc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Is(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Is(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,t,"signInWithPassword",Bv);case"emailLink":return Wv(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,r,"signUpPassword",Uv);case"emailLink":return Hv(e,{idToken:t,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function dr(n,e){return Us(n,"POST","/v1/accounts:signInWithIdp",Gt(n,e))}/**
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
 */const zv="http://localhost";class $n extends pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=uc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new $n(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return dr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,dr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dr(e,t)}buildRequest(){const e={requestUri:zv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ls(t)}return e}}/**
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
 */function Gv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kv(n){const e=os(as(n)).link,t=e?os(as(e)).deep_link_id:null,r=os(as(n)).deep_link_id;return(r?os(as(r)).link:null)||r||t||e||n}class yc{constructor(e){var t,r,s,i,a,c;const u=os(as(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=Gv((s=u.mode)!==null&&s!==void 0?s:null);q(d&&m&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Kv(e);try{return new yc(t)}catch{return null}}}/**
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
 */class kr{constructor(){this.providerId=kr.PROVIDER_ID}static credential(e,t){return Is._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=yc.parseLink(t);return q(r,"argument-error"),Is._fromEmailAndCode(e,r.code,r.tenantId)}}kr.PROVIDER_ID="password";kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bs extends _c{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nn extends Bs{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
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
 */class xt extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $n._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return xt.credential(t,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class rn extends Bs{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
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
 */class sn extends Bs{constructor(){super("twitter.com")}static credential(e,t){return $n._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return sn.credential(t,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
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
 */async function Qv(n,e){return Us(n,"POST","/v1/accounts:signUp",Gt(n,e))}/**
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
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Mt._fromIdTokenResponse(e,r,s),a=Wu(r);return new qn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Wu(r);return new qn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Wu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class qi extends ot{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new qi(e,t,r,s)}}function pf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qi._fromErrorAndOperation(n,i,e,r):i})}async function Yv(n,e,t=!1){const r=await Er(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qn._forOperation(n,"link",r)}/**
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
 */async function Xv(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(Tt(r));const s="reauthenticate";try{const i=await Er(n,pf(r,s,e,n),t);q(i.idToken,r,"internal-error");const a=mc(i.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(n.uid===c,r,"user-mismatch"),qn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&it(r,"user-mismatch"),i}}/**
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
 */async function yf(n,e,t=!1){if(ft(n.app))return Promise.reject(Tt(n));const r="signIn",s=await pf(n,r,e),i=await qn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Jv(n,e){return yf(Ct(n),e)}/**
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
 */async function _f(n){const e=Ct(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zv(n,e,t){const r=Ct(n);await $i(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",qv)}async function e0(n,e,t){if(ft(n.app))return Promise.reject(Tt(n));const r=Ct(n),a=await $i(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&_f(n),u}),c=await qn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function t0(n,e,t){return ft(n.app)?Promise.reject(Tt(n)):Jv(le(n),kr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_f(n),r})}/**
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
 */async function n0(n,e){return Nt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function r0(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=le(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Er(r,n0(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function s0(n,e,t,r){return le(n).onIdTokenChanged(e,t,r)}function i0(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function o0(n,e,t,r){return le(n).onAuthStateChanged(e,t,r)}const Wi="__sak";/**
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
 */class vf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wi,"1"),this.storage.removeItem(Wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const a0=1e3,c0=10;class wf extends vf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=df(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);bv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,c0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},a0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wf.type="LOCAL";const l0=wf;/**
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
 */class xf extends vf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xf.type="SESSION";const bf=xf;/**
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
 */function u0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class mo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new mo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await u0(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mo.receivers=[];/**
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
 */function vc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class h0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=vc("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const g=y;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function It(){return window}function d0(n){It().location.href=n}/**
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
 */function Ef(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function f0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function g0(){return Ef()?self:null}/**
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
 */const Tf="firebaseLocalStorageDb",p0=1,Hi="firebaseLocalStorage",If="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function go(n,e){return n.transaction([Hi],e?"readwrite":"readonly").objectStore(Hi)}function y0(){const n=indexedDB.deleteDatabase(Tf);return new $s(n).toPromise()}function Ba(){const n=indexedDB.open(Tf,p0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Hi,{keyPath:If})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Hi)?e(r):(r.close(),await y0(),e(await Ba()))})})}async function Hu(n,e,t){const r=go(n,!0).put({[If]:e,value:t});return new $s(r).toPromise()}async function _0(n,e){const t=go(n,!1).get(e),r=await new $s(t).toPromise();return r===void 0?null:r.value}function zu(n,e){const t=go(n,!0).delete(e);return new $s(t).toPromise()}const v0=800,w0=3;class Af{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>w0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mo._getInstance(g0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await f0(),!this.activeServiceWorker)return;this.sender=new h0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ba();return await Hu(e,Wi,"1"),await zu(e,Wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=go(s,!1).getAll();return new $s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),v0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Af.type="LOCAL";const x0=Af;new Fs(3e4,6e4);/**
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
 */function Rf(n,e){return e?Lt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wc extends pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function b0(n){return yf(n.auth,new wc(n),n.bypassAuthState)}function E0(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Xv(t,new wc(n),n.bypassAuthState)}async function T0(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Yv(t,new wc(n),n.bypassAuthState)}/**
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
 */class Sf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b0;case"linkViaPopup":case"linkViaRedirect":return T0;case"reauthViaPopup":case"reauthViaRedirect":return E0;default:it(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const I0=new Fs(2e3,1e4);class lr extends Sf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I0.get())};e()}}lr.currentPopupAction=null;/**
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
 */const A0="pendingRedirect",Pi=new Map;class R0 extends Sf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const r=await S0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S0(n,e){const t=Nf(e),r=Pf(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function P0(n,e){return Pf(n)._set(Nf(e),"true")}function N0(n,e){Pi.set(n._key(),e)}function Pf(n){return Lt(n._redirectPersistence)}function Nf(n){return Si(A0,n.config.apiKey,n.name)}/**
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
 */function C0(n,e,t){return k0(n,e,t)}async function k0(n,e,t){if(ft(n.app))return Promise.reject(Tt(n));const r=Ct(n);rv(n,e,_c),await r._initializationPromise;const s=Rf(r,t);return await P0(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function D0(n,e){return await Ct(n)._initializationPromise,Cf(n,e,!1)}async function Cf(n,e,t=!1){if(ft(n.app))return Promise.reject(Tt(n));const r=Ct(n),s=Rf(r,e),a=await new R0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const j0=10*60*1e3;class O0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!kf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Et(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gu(e))}saveEventToCache(e){this.cachedEventUids.add(Gu(e)),this.lastProcessedEventTime=Date.now()}}function Gu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kf(n);default:return!1}}/**
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
 */async function M0(n,e={}){return Nt(n,"GET","/v1/projects",e)}/**
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
 */const L0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F0=/^https?/;async function U0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await M0(n);for(const t of e)try{if(B0(t))return}catch{}it(n,"unauthorized-domain")}function B0(n){const e=Fa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!F0.test(t))return!1;if(L0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $0=new Fs(3e4,6e4);function Ku(){const n=It().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function q0(n){return new Promise((e,t)=>{var r,s,i;function a(){Ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ku(),t(Et(n,"network-request-failed"))},timeout:$0.get()})}if(!((s=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=It().gapi)===null||i===void 0)&&i.load)a();else{const c=Cv("iframefcb");return It()[c]=()=>{gapi.load?a():t(Et(n,"network-request-failed"))},mf(`${Nv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Ni=null,e})}let Ni=null;function W0(n){return Ni=Ni||q0(n),Ni}/**
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
 */const H0=new Fs(5e3,15e3),z0="__/auth/iframe",G0="emulator/auth/iframe",K0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y0(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fc(e,G0):`https://${n.config.authDomain}/${z0}`,r={apiKey:e.apiKey,appName:n.name,v:Xn},s=Q0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ls(r).slice(1)}`}async function X0(n){const e=await W0(n),t=It().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:Y0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Et(n,"network-request-failed"),c=It().setTimeout(()=>{i(a)},H0.get());function u(){It().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const J0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z0=500,ew=600,tw="_blank",nw="http://localhost";class Qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rw(n,e,t,r=Z0,s=ew){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},J0),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Le().toLowerCase();t&&(c=af(d)?tw:t),sf(d)&&(e=e||nw,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[w,I])=>`${g}${w}=${I},`,"");if(xv(d)&&c!=="_self")return sw(e||"",c),new Qu(null);const y=window.open(e||"",c,m);q(y,n,"popup-blocked");try{y.focus()}catch{}return new Qu(y)}function sw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const iw="__/auth/handler",ow="emulator/auth/handler",aw=encodeURIComponent("fac");async function Yu(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xn,eventId:s};if(e instanceof _c){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",By(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof Bs){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${aw}=${encodeURIComponent(u)}`:"";return`${cw(n)}?${Ls(c).slice(1)}${d}`}function cw({config:n}){return n.emulator?fc(n,ow):`https://${n.authDomain}/${iw}`}/**
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
 */const wa="webStorageSupport";class lw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bf,this._completeRedirectFn=Cf,this._overrideRedirectResult=N0}async _openPopup(e,t,r,s){var i;Bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Yu(e,t,r,Fa(),s);return rw(e,a,vc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Yu(e,t,r,Fa(),s);return d0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await X0(e),r=new O0(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wa,{type:wa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wa];a!==void 0&&t(!!a),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=U0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return df()||of()||gc()}}const uw=lw;var Xu="@firebase/auth",Ju="1.7.9";/**
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
 */class hw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fw(n){gt(new st("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ff(n)},d=new Rv(r,s,i,u);return Vv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gt(new st("auth-internal",e=>{const t=Ct(e.getProvider("auth").getImmediate());return(r=>new hw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(Xu,Ju,dw(n)),ze(Xu,Ju,"esm2017")}/**
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
 */const mw=5*60,gw=Fd("authIdTokenMaxAge")||mw;let Zu=null;const pw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>gw)return;const s=t==null?void 0:t.token;Zu!==s&&(Zu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yw(n=ho()){const e=xn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ov(n,{popupRedirectResolver:uw,persistence:[x0,l0,bf]}),r=Fd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=pw(i.toString());i0(t,a,()=>a(t.currentUser)),s0(t,c=>a(c))}}const s=Vd("auth");return s&&Mv(t,`http://${s}`),t}function _w(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Sv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Et("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",_w().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fw("Browser");var eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Un,Df;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,x){function b(){}b.prototype=x.prototype,R.D=x.prototype,R.prototype=new b,R.prototype.constructor=R,R.C=function(v,T,S){for(var E=Array(arguments.length-2),at=2;at<arguments.length;at++)E[at-2]=arguments[at];return x.prototype[T].apply(v,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,x,b){b||(b=0);var v=Array(16);if(typeof x=="string")for(var T=0;16>T;++T)v[T]=x.charCodeAt(b++)|x.charCodeAt(b++)<<8|x.charCodeAt(b++)<<16|x.charCodeAt(b++)<<24;else for(T=0;16>T;++T)v[T]=x[b++]|x[b++]<<8|x[b++]<<16|x[b++]<<24;x=R.g[0],b=R.g[1],T=R.g[2];var S=R.g[3],E=x+(S^b&(T^S))+v[0]+3614090360&4294967295;x=b+(E<<7&4294967295|E>>>25),E=S+(T^x&(b^T))+v[1]+3905402710&4294967295,S=x+(E<<12&4294967295|E>>>20),E=T+(b^S&(x^b))+v[2]+606105819&4294967295,T=S+(E<<17&4294967295|E>>>15),E=b+(x^T&(S^x))+v[3]+3250441966&4294967295,b=T+(E<<22&4294967295|E>>>10),E=x+(S^b&(T^S))+v[4]+4118548399&4294967295,x=b+(E<<7&4294967295|E>>>25),E=S+(T^x&(b^T))+v[5]+1200080426&4294967295,S=x+(E<<12&4294967295|E>>>20),E=T+(b^S&(x^b))+v[6]+2821735955&4294967295,T=S+(E<<17&4294967295|E>>>15),E=b+(x^T&(S^x))+v[7]+4249261313&4294967295,b=T+(E<<22&4294967295|E>>>10),E=x+(S^b&(T^S))+v[8]+1770035416&4294967295,x=b+(E<<7&4294967295|E>>>25),E=S+(T^x&(b^T))+v[9]+2336552879&4294967295,S=x+(E<<12&4294967295|E>>>20),E=T+(b^S&(x^b))+v[10]+4294925233&4294967295,T=S+(E<<17&4294967295|E>>>15),E=b+(x^T&(S^x))+v[11]+2304563134&4294967295,b=T+(E<<22&4294967295|E>>>10),E=x+(S^b&(T^S))+v[12]+1804603682&4294967295,x=b+(E<<7&4294967295|E>>>25),E=S+(T^x&(b^T))+v[13]+4254626195&4294967295,S=x+(E<<12&4294967295|E>>>20),E=T+(b^S&(x^b))+v[14]+2792965006&4294967295,T=S+(E<<17&4294967295|E>>>15),E=b+(x^T&(S^x))+v[15]+1236535329&4294967295,b=T+(E<<22&4294967295|E>>>10),E=x+(T^S&(b^T))+v[1]+4129170786&4294967295,x=b+(E<<5&4294967295|E>>>27),E=S+(b^T&(x^b))+v[6]+3225465664&4294967295,S=x+(E<<9&4294967295|E>>>23),E=T+(x^b&(S^x))+v[11]+643717713&4294967295,T=S+(E<<14&4294967295|E>>>18),E=b+(S^x&(T^S))+v[0]+3921069994&4294967295,b=T+(E<<20&4294967295|E>>>12),E=x+(T^S&(b^T))+v[5]+3593408605&4294967295,x=b+(E<<5&4294967295|E>>>27),E=S+(b^T&(x^b))+v[10]+38016083&4294967295,S=x+(E<<9&4294967295|E>>>23),E=T+(x^b&(S^x))+v[15]+3634488961&4294967295,T=S+(E<<14&4294967295|E>>>18),E=b+(S^x&(T^S))+v[4]+3889429448&4294967295,b=T+(E<<20&4294967295|E>>>12),E=x+(T^S&(b^T))+v[9]+568446438&4294967295,x=b+(E<<5&4294967295|E>>>27),E=S+(b^T&(x^b))+v[14]+3275163606&4294967295,S=x+(E<<9&4294967295|E>>>23),E=T+(x^b&(S^x))+v[3]+4107603335&4294967295,T=S+(E<<14&4294967295|E>>>18),E=b+(S^x&(T^S))+v[8]+1163531501&4294967295,b=T+(E<<20&4294967295|E>>>12),E=x+(T^S&(b^T))+v[13]+2850285829&4294967295,x=b+(E<<5&4294967295|E>>>27),E=S+(b^T&(x^b))+v[2]+4243563512&4294967295,S=x+(E<<9&4294967295|E>>>23),E=T+(x^b&(S^x))+v[7]+1735328473&4294967295,T=S+(E<<14&4294967295|E>>>18),E=b+(S^x&(T^S))+v[12]+2368359562&4294967295,b=T+(E<<20&4294967295|E>>>12),E=x+(b^T^S)+v[5]+4294588738&4294967295,x=b+(E<<4&4294967295|E>>>28),E=S+(x^b^T)+v[8]+2272392833&4294967295,S=x+(E<<11&4294967295|E>>>21),E=T+(S^x^b)+v[11]+1839030562&4294967295,T=S+(E<<16&4294967295|E>>>16),E=b+(T^S^x)+v[14]+4259657740&4294967295,b=T+(E<<23&4294967295|E>>>9),E=x+(b^T^S)+v[1]+2763975236&4294967295,x=b+(E<<4&4294967295|E>>>28),E=S+(x^b^T)+v[4]+1272893353&4294967295,S=x+(E<<11&4294967295|E>>>21),E=T+(S^x^b)+v[7]+4139469664&4294967295,T=S+(E<<16&4294967295|E>>>16),E=b+(T^S^x)+v[10]+3200236656&4294967295,b=T+(E<<23&4294967295|E>>>9),E=x+(b^T^S)+v[13]+681279174&4294967295,x=b+(E<<4&4294967295|E>>>28),E=S+(x^b^T)+v[0]+3936430074&4294967295,S=x+(E<<11&4294967295|E>>>21),E=T+(S^x^b)+v[3]+3572445317&4294967295,T=S+(E<<16&4294967295|E>>>16),E=b+(T^S^x)+v[6]+76029189&4294967295,b=T+(E<<23&4294967295|E>>>9),E=x+(b^T^S)+v[9]+3654602809&4294967295,x=b+(E<<4&4294967295|E>>>28),E=S+(x^b^T)+v[12]+3873151461&4294967295,S=x+(E<<11&4294967295|E>>>21),E=T+(S^x^b)+v[15]+530742520&4294967295,T=S+(E<<16&4294967295|E>>>16),E=b+(T^S^x)+v[2]+3299628645&4294967295,b=T+(E<<23&4294967295|E>>>9),E=x+(T^(b|~S))+v[0]+4096336452&4294967295,x=b+(E<<6&4294967295|E>>>26),E=S+(b^(x|~T))+v[7]+1126891415&4294967295,S=x+(E<<10&4294967295|E>>>22),E=T+(x^(S|~b))+v[14]+2878612391&4294967295,T=S+(E<<15&4294967295|E>>>17),E=b+(S^(T|~x))+v[5]+4237533241&4294967295,b=T+(E<<21&4294967295|E>>>11),E=x+(T^(b|~S))+v[12]+1700485571&4294967295,x=b+(E<<6&4294967295|E>>>26),E=S+(b^(x|~T))+v[3]+2399980690&4294967295,S=x+(E<<10&4294967295|E>>>22),E=T+(x^(S|~b))+v[10]+4293915773&4294967295,T=S+(E<<15&4294967295|E>>>17),E=b+(S^(T|~x))+v[1]+2240044497&4294967295,b=T+(E<<21&4294967295|E>>>11),E=x+(T^(b|~S))+v[8]+1873313359&4294967295,x=b+(E<<6&4294967295|E>>>26),E=S+(b^(x|~T))+v[15]+4264355552&4294967295,S=x+(E<<10&4294967295|E>>>22),E=T+(x^(S|~b))+v[6]+2734768916&4294967295,T=S+(E<<15&4294967295|E>>>17),E=b+(S^(T|~x))+v[13]+1309151649&4294967295,b=T+(E<<21&4294967295|E>>>11),E=x+(T^(b|~S))+v[4]+4149444226&4294967295,x=b+(E<<6&4294967295|E>>>26),E=S+(b^(x|~T))+v[11]+3174756917&4294967295,S=x+(E<<10&4294967295|E>>>22),E=T+(x^(S|~b))+v[2]+718787259&4294967295,T=S+(E<<15&4294967295|E>>>17),E=b+(S^(T|~x))+v[9]+3951481745&4294967295,R.g[0]=R.g[0]+x&4294967295,R.g[1]=R.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+T&4294967295,R.g[3]=R.g[3]+S&4294967295}r.prototype.u=function(R,x){x===void 0&&(x=R.length);for(var b=x-this.blockSize,v=this.B,T=this.h,S=0;S<x;){if(T==0)for(;S<=b;)s(this,R,S),S+=this.blockSize;if(typeof R=="string"){for(;S<x;)if(v[T++]=R.charCodeAt(S++),T==this.blockSize){s(this,v),T=0;break}}else for(;S<x;)if(v[T++]=R[S++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=x},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var x=1;x<R.length-8;++x)R[x]=0;var b=8*this.o;for(x=R.length-8;x<R.length;++x)R[x]=b&255,b/=256;for(this.u(R),R=Array(16),x=b=0;4>x;++x)for(var v=0;32>v;v+=8)R[b++]=this.g[x]>>>v&255;return R};function i(R,x){var b=c;return Object.prototype.hasOwnProperty.call(b,R)?b[R]:b[R]=x(R)}function a(R,x){this.h=x;for(var b=[],v=!0,T=R.length-1;0<=T;T--){var S=R[T]|0;v&&S==x||(b[T]=S,v=!1)}this.g=b}var c={};function u(R){return-128<=R&&128>R?i(R,function(x){return new a([x|0],0>x?-1:0)}):new a([R|0],0>R?-1:0)}function d(R){if(isNaN(R)||!isFinite(R))return y;if(0>R)return _(d(-R));for(var x=[],b=1,v=0;R>=b;v++)x[v]=R/b|0,b*=4294967296;return new a(x,0)}function m(R,x){if(R.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(R.charAt(0)=="-")return _(m(R.substring(1),x));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=d(Math.pow(x,8)),v=y,T=0;T<R.length;T+=8){var S=Math.min(8,R.length-T),E=parseInt(R.substring(T,T+S),x);8>S?(S=d(Math.pow(x,S)),v=v.j(S).add(d(E))):(v=v.j(b),v=v.add(d(E)))}return v}var y=u(0),g=u(1),w=u(16777216);n=a.prototype,n.m=function(){if(A(this))return-_(this).m();for(var R=0,x=1,b=0;b<this.g.length;b++){var v=this.i(b);R+=(0<=v?v:4294967296+v)*x,x*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(I(this))return"0";if(A(this))return"-"+_(this).toString(R);for(var x=d(Math.pow(R,6)),b=this,v="";;){var T=U(b,x).g;b=O(b,T.j(x));var S=((0<b.g.length?b.g[0]:b.h)>>>0).toString(R);if(b=T,I(b))return S+v;for(;6>S.length;)S="0"+S;v=S+v}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function I(R){if(R.h!=0)return!1;for(var x=0;x<R.g.length;x++)if(R.g[x]!=0)return!1;return!0}function A(R){return R.h==-1}n.l=function(R){return R=O(this,R),A(R)?-1:I(R)?0:1};function _(R){for(var x=R.g.length,b=[],v=0;v<x;v++)b[v]=~R.g[v];return new a(b,~R.h).add(g)}n.abs=function(){return A(this)?_(this):this},n.add=function(R){for(var x=Math.max(this.g.length,R.g.length),b=[],v=0,T=0;T<=x;T++){var S=v+(this.i(T)&65535)+(R.i(T)&65535),E=(S>>>16)+(this.i(T)>>>16)+(R.i(T)>>>16);v=E>>>16,S&=65535,E&=65535,b[T]=E<<16|S}return new a(b,b[b.length-1]&-2147483648?-1:0)};function O(R,x){return R.add(_(x))}n.j=function(R){if(I(this)||I(R))return y;if(A(this))return A(R)?_(this).j(_(R)):_(_(this).j(R));if(A(R))return _(this.j(_(R)));if(0>this.l(w)&&0>R.l(w))return d(this.m()*R.m());for(var x=this.g.length+R.g.length,b=[],v=0;v<2*x;v++)b[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<R.g.length;T++){var S=this.i(v)>>>16,E=this.i(v)&65535,at=R.i(T)>>>16,In=R.i(T)&65535;b[2*v+2*T]+=E*In,N(b,2*v+2*T),b[2*v+2*T+1]+=S*In,N(b,2*v+2*T+1),b[2*v+2*T+1]+=E*at,N(b,2*v+2*T+1),b[2*v+2*T+2]+=S*at,N(b,2*v+2*T+2)}for(v=0;v<x;v++)b[v]=b[2*v+1]<<16|b[2*v];for(v=x;v<2*x;v++)b[v]=0;return new a(b,0)};function N(R,x){for(;(R[x]&65535)!=R[x];)R[x+1]+=R[x]>>>16,R[x]&=65535,x++}function M(R,x){this.g=R,this.h=x}function U(R,x){if(I(x))throw Error("division by zero");if(I(R))return new M(y,y);if(A(R))return x=U(_(R),x),new M(_(x.g),_(x.h));if(A(x))return x=U(R,_(x)),new M(_(x.g),x.h);if(30<R.g.length){if(A(R)||A(x))throw Error("slowDivide_ only works with positive integers.");for(var b=g,v=x;0>=v.l(R);)b=W(b),v=W(v);var T=z(b,1),S=z(v,1);for(v=z(v,2),b=z(b,2);!I(v);){var E=S.add(v);0>=E.l(R)&&(T=T.add(b),S=E),v=z(v,1),b=z(b,1)}return x=O(R,T.j(x)),new M(T,x)}for(T=y;0<=R.l(x);){for(b=Math.max(1,Math.floor(R.m()/x.m())),v=Math.ceil(Math.log(b)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),S=d(b),E=S.j(x);A(E)||0<E.l(R);)b-=v,S=d(b),E=S.j(x);I(S)&&(S=g),T=T.add(S),R=O(R,E)}return new M(T,R)}n.A=function(R){return U(this,R).h},n.and=function(R){for(var x=Math.max(this.g.length,R.g.length),b=[],v=0;v<x;v++)b[v]=this.i(v)&R.i(v);return new a(b,this.h&R.h)},n.or=function(R){for(var x=Math.max(this.g.length,R.g.length),b=[],v=0;v<x;v++)b[v]=this.i(v)|R.i(v);return new a(b,this.h|R.h)},n.xor=function(R){for(var x=Math.max(this.g.length,R.g.length),b=[],v=0;v<x;v++)b[v]=this.i(v)^R.i(v);return new a(b,this.h^R.h)};function W(R){for(var x=R.g.length+1,b=[],v=0;v<x;v++)b[v]=R.i(v)<<1|R.i(v-1)>>>31;return new a(b,R.h)}function z(R,x){var b=x>>5;x%=32;for(var v=R.g.length-b,T=[],S=0;S<v;S++)T[S]=0<x?R.i(S+b)>>>x|R.i(S+b+1)<<32-x:R.i(S+b);return new a(T,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Df=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Un=a}).apply(typeof eh<"u"?eh:typeof self<"u"?self:typeof window<"u"?window:{});var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jf,cs,Of,Ci,$a,Vf,Mf,Lf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,f){return o==Array.prototype||o==Object.prototype||(o[h]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof wi=="object"&&wi];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in f))break e;f=f[P]}o=o[o.length-1],p=f[o],h=h(p),h!=p&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var f=0,p=!1,P={next:function(){if(!p&&f<o.length){var C=f++;return{value:h(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function d(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function m(o,h,f){return o.call.apply(o.bind,arguments)}function y(o,h,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(h,P)}}return function(){return o.apply(h,arguments)}}function g(o,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,g.apply(null,arguments)}function w(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function I(o,h){function f(){}f.prototype=h.prototype,o.aa=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,P,C){for(var L=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)L[oe-2]=arguments[oe];return h.prototype[P].apply(p,L)}}function A(o){const h=o.length;if(0<h){const f=Array(h);for(let p=0;p<h;p++)f[p]=o[p];return f}return[]}function _(o,h){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(u(p)){const P=o.length||0,C=p.length||0;o.length=P+C;for(let L=0;L<C;L++)o[P+L]=p[L]}else o.push(p)}}class O{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function U(o){return U[" "](o),o}U[" "]=function(){};var W=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function z(o,h,f){for(const p in o)h.call(f,o[p],p,o)}function R(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function x(o){const h={};for(const f in o)h[f]=o[f];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,h){let f,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(f in p)o[f]=p[f];for(let C=0;C<b.length;C++)f=b[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function T(o){var h=1;o=o.split(":");const f=[];for(;0<h&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Bo;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class at{constructor(){this.h=this.g=null}add(h,f){const p=In.get();p.set(h,f),this.h?this.h.next=p:this.g=p,this.h=p}}var In=new O(()=>new Uo,o=>o.reset());class Uo{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,Fr=!1,Bo=new at,ml=()=>{const o=c.Promise.resolve(void 0);tt=()=>{o.then(ip)}};var ip=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var h=In;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}Fr=!1};function Qt(){this.s=this.s,this.C=this.C}Qt.prototype.s=!1,Qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var op=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return o}();function Ur(o,h){if(Pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(W){e:{try{U(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement);this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ap[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ur.aa.h.call(this)}}I(Ur,Pe);var ap={2:"touch",3:"pen",4:"mouse"};Ur.prototype.h=function(){Ur.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Js="closure_listenable_"+(1e6*Math.random()|0),cp=0;function lp(o,h,f,p,P){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!p,this.ha=P,this.key=++cp,this.da=this.fa=!1}function Zs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ei(o){this.src=o,this.g={},this.h=0}ei.prototype.add=function(o,h,f,p,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var L=qo(o,h,p,P);return-1<L?(h=o[L],f||(h.fa=!1)):(h=new lp(h,this.src,C,!!p,P),h.fa=f,o.push(h)),h};function $o(o,h){var f=h.type;if(f in o.g){var p=o.g[f],P=Array.prototype.indexOf.call(p,h,void 0),C;(C=0<=P)&&Array.prototype.splice.call(p,P,1),C&&(Zs(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function qo(o,h,f,p){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==h&&C.capture==!!f&&C.ha==p)return P}return-1}var Wo="closure_lm_"+(1e6*Math.random()|0),Ho={};function gl(o,h,f,p,P){if(Array.isArray(h)){for(var C=0;C<h.length;C++)gl(o,h[C],f,p,P);return null}return f=_l(f),o&&o[Js]?o.K(h,f,d(p)?!!p.capture:!1,P):up(o,h,f,!1,p,P)}function up(o,h,f,p,P,C){if(!h)throw Error("Invalid event type");var L=d(P)?!!P.capture:!!P,oe=Go(o);if(oe||(o[Wo]=oe=new ei(o)),f=oe.add(h,f,p,L,C),f.proxy)return f;if(p=hp(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)op||(P=L),P===void 0&&(P=!1),o.addEventListener(h.toString(),p,P);else if(o.attachEvent)o.attachEvent(yl(h.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function hp(){function o(f){return h.call(o.src,o.listener,f)}const h=dp;return o}function pl(o,h,f,p,P){if(Array.isArray(h))for(var C=0;C<h.length;C++)pl(o,h[C],f,p,P);else p=d(p)?!!p.capture:!!p,f=_l(f),o&&o[Js]?(o=o.i,h=String(h).toString(),h in o.g&&(C=o.g[h],f=qo(C,f,p,P),-1<f&&(Zs(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[h],o.h--)))):o&&(o=Go(o))&&(h=o.g[h.toString()],o=-1,h&&(o=qo(h,f,p,P)),(f=-1<o?h[o]:null)&&zo(f))}function zo(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[Js])$o(h.i,o);else{var f=o.type,p=o.proxy;h.removeEventListener?h.removeEventListener(f,p,o.capture):h.detachEvent?h.detachEvent(yl(f),p):h.addListener&&h.removeListener&&h.removeListener(p),(f=Go(h))?($o(f,o),f.h==0&&(f.src=null,h[Wo]=null)):Zs(o)}}}function yl(o){return o in Ho?Ho[o]:Ho[o]="on"+o}function dp(o,h){if(o.da)o=!0;else{h=new Ur(h,this);var f=o.listener,p=o.ha||o.src;o.fa&&zo(o),o=f.call(p,h)}return o}function Go(o){return o=o[Wo],o instanceof ei?o:null}var Ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function _l(o){return typeof o=="function"?o:(o[Ko]||(o[Ko]=function(h){return o.handleEvent(h)}),o[Ko])}function Ne(){Qt.call(this),this.i=new ei(this),this.M=this,this.F=null}I(Ne,Qt),Ne.prototype[Js]=!0,Ne.prototype.removeEventListener=function(o,h,f,p){pl(this,o,h,f,p)};function Fe(o,h){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=h.type||h,typeof h=="string")h=new Pe(h,o);else if(h instanceof Pe)h.target=h.target||o;else{var P=h;h=new Pe(p,o),v(h,P)}if(P=!0,f)for(var C=f.length-1;0<=C;C--){var L=h.g=f[C];P=ti(L,p,!0,h)&&P}if(L=h.g=o,P=ti(L,p,!0,h)&&P,P=ti(L,p,!1,h)&&P,f)for(C=0;C<f.length;C++)L=h.g=f[C],P=ti(L,p,!1,h)&&P}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var f=o.g[h],p=0;p<f.length;p++)Zs(f[p]);delete o.g[h],o.h--}}this.F=null},Ne.prototype.K=function(o,h,f,p){return this.i.add(String(o),h,!1,f,p)},Ne.prototype.L=function(o,h,f,p){return this.i.add(String(o),h,!0,f,p)};function ti(o,h,f,p){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,C=0;C<h.length;++C){var L=h[C];if(L&&!L.da&&L.capture==f){var oe=L.listener,Te=L.ha||L.src;L.fa&&$o(o.i,L),P=oe.call(Te,p)!==!1&&P}}return P&&!p.defaultPrevented}function vl(o,h,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(o,h||0)}function wl(o){o.g=vl(()=>{o.g=null,o.i&&(o.i=!1,wl(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class fp extends Qt{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:wl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(o){Qt.call(this),this.h=o,this.g={}}I(Br,Qt);var xl=[];function bl(o){z(o.g,function(h,f){this.g.hasOwnProperty(f)&&zo(h)},o),o.g={}}Br.prototype.N=function(){Br.aa.N.call(this),bl(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qo=c.JSON.stringify,mp=c.JSON.parse,gp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Yo(){}Yo.prototype.h=null;function El(o){return o.h||(o.h=o.i())}function Tl(){}var $r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xo(){Pe.call(this,"d")}I(Xo,Pe);function Jo(){Pe.call(this,"c")}I(Jo,Pe);var An={},Il=null;function ni(){return Il=Il||new Ne}An.La="serverreachability";function Al(o){Pe.call(this,An.La,o)}I(Al,Pe);function qr(o){const h=ni();Fe(h,new Al(h))}An.STAT_EVENT="statevent";function Rl(o,h){Pe.call(this,An.STAT_EVENT,o),this.stat=h}I(Rl,Pe);function Ue(o){const h=ni();Fe(h,new Rl(h,o))}An.Ma="timingevent";function Sl(o,h){Pe.call(this,An.Ma,o),this.size=h}I(Sl,Pe);function Wr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},h)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function pp(o,h,f,p,P,C){o.info(function(){if(o.g)if(C)for(var L="",oe=C.split("&"),Te=0;Te<oe.length;Te++){var Z=oe[Te].split("=");if(1<Z.length){var Ce=Z[0];Z=Z[1];var ke=Ce.split("_");L=2<=ke.length&&ke[1]=="type"?L+(Ce+"="+Z+"&"):L+(Ce+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+h+`
`+f+`
`+L})}function yp(o,h,f,p,P,C,L){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+h+`
`+f+`
`+C+" "+L})}function er(o,h,f,p){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+vp(o,f)+(p?" "+p:"")})}function _p(o,h){o.info(function(){return"TIMEOUT: "+h})}Hr.prototype.info=function(){};function vp(o,h){if(!o.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<P.length;L++)P[L]=""}}}}return Qo(f)}catch{return h}}var ri={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zo;function si(){}I(si,Yo),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},Zo=new si;function Yt(o,h,f,p){this.j=o,this.i=h,this.l=f,this.R=p||1,this.U=new Br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nl}function Nl(){this.i=null,this.g="",this.h=!1}var Cl={},ea={};function ta(o,h,f){o.L=1,o.v=ci(kt(h)),o.m=f,o.P=!0,kl(o,null)}function kl(o,h){o.F=Date.now(),ii(o),o.A=kt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),zl(f.i,"t",p),o.C=0,f=o.j.J,o.h=new Nl,o.g=uu(o.j,f?h:null,!o.m),0<o.O&&(o.M=new fp(g(o.Y,o,o.g),o.O)),h=o.U,f=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(xl[0]=P.toString()),P=xl);for(var C=0;C<P.length;C++){var L=gl(f,P[C],p||h.handleEvent,!1,h.h||h);if(!L)break;h.g[L.key]=L}h=o.H?x(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),qr(),pp(o.i,o.u,o.A,o.l,o.R,o.m)}Yt.prototype.ca=function(o){o=o.target;const h=this.M;h&&Dt(o)==3?h.j():this.Y(o)},Yt.prototype.Y=function(o){try{if(o==this.g)e:{const ke=Dt(this.g);var h=this.g.Ba();const rr=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||Zl(this.g)))){this.J||ke!=4||h==7||(h==8||0>=rr?qr(3):qr(2)),na(this);var f=this.g.Z();this.X=f;t:if(Dl(this)){var p=Zl(this.g);o="";var P=p.length,C=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),zr(this);var L="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,o+=this.h.i.decode(p[h],{stream:!(C&&h==P-1)});p.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=f==200,yp(this.i,this.u,this.A,this.l,this.R,ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Te=this.g;if((oe=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(oe)){var Z=oe;break t}}Z=null}if(f=Z)er(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,f);else{this.o=!1,this.s=3,Ue(12),Rn(this),zr(this);break e}}if(this.P){f=!0;let ct;for(;!this.J&&this.C<L.length;)if(ct=wp(this,L),ct==ea){ke==4&&(this.s=4,Ue(14),f=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Cl){this.s=4,Ue(15),er(this.i,this.l,L,"[Invalid Chunk]"),f=!1;break}else er(this.i,this.l,ct,null),ra(this,ct);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||L.length!=0||this.h.h||(this.s=1,Ue(16),f=!1),this.o=this.o&&f,!f)er(this.i,this.l,L,"[Invalid Chunked Response]"),Rn(this),zr(this);else if(0<L.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),la(Ce),Ce.M=!0,Ue(11))}}else er(this.i,this.l,L,null),ra(this,L);ke==4&&Rn(this),this.o&&!this.J&&(ke==4?ou(this.j,this):(this.o=!1,ii(this)))}else Mp(this.g),f==400&&0<L.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),Rn(this),zr(this)}}}catch{}finally{}};function Dl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function wp(o,h){var f=o.C,p=h.indexOf(`
`,f);return p==-1?ea:(f=Number(h.substring(f,p)),isNaN(f)?Cl:(p+=1,p+f>h.length?ea:(h=h.slice(p,p+f),o.C=p+f,h)))}Yt.prototype.cancel=function(){this.J=!0,Rn(this)};function ii(o){o.S=Date.now()+o.I,jl(o,o.I)}function jl(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wr(g(o.ba,o),h)}function na(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Yt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(_p(this.i,this.A),this.L!=2&&(qr(),Ue(17)),Rn(this),this.s=2,zr(this)):jl(this,this.S-o)};function zr(o){o.j.G==0||o.J||ou(o.j,o)}function Rn(o){na(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,bl(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function ra(o,h){try{var f=o.j;if(f.G!=0&&(f.g==o||sa(f.h,o))){if(!o.K&&sa(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)mi(f),di(f);else break e;ca(f),Ue(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Wr(g(f.Za,f),6e3));if(1>=Ml(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Pn(f,11)}else if((o.K||f.g==o)&&mi(f),!N(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let Z=P[h];if(f.T=Z[0],Z=Z[1],f.G==2)if(Z[0]=="c"){f.K=Z[1],f.ia=Z[2];const Ce=Z[3];Ce!=null&&(f.la=Ce,f.j.info("VER="+f.la));const ke=Z[4];ke!=null&&(f.Aa=ke,f.j.info("SVER="+f.Aa));const rr=Z[5];rr!=null&&typeof rr=="number"&&0<rr&&(p=1.5*rr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const ct=o.g;if(ct){const pi=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var C=p.h;C.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ia(C,C.h),C.h=null))}if(p.D){const ua=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ua&&(p.ya=ua,ae(p.I,p.D,ua))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var L=o;if(p.qa=lu(p,p.J?p.ia:null,p.W),L.K){Ll(p.h,L);var oe=L,Te=p.L;Te&&(oe.I=Te),oe.B&&(na(oe),ii(oe)),p.g=L}else su(p);0<f.i.length&&fi(f)}else Z[0]!="stop"&&Z[0]!="close"||Pn(f,7);else f.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Pn(f,7):aa(f):Z[0]!="noop"&&f.l&&f.l.ta(Z),f.v=0)}}qr(4)}catch{}}var xp=class{constructor(o,h){this.g=o,this.map=h}};function Ol(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ml(o){return o.h?1:o.g?o.g.size:0}function sa(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function ia(o,h){o.g?o.g.add(h):o.h=h}function Ll(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Ol.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Fl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.D);return h}return A(o.i)}function bp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var h=[],f=o.length,p=0;p<f;p++)h.push(o[p]);return h}h=[],f=0;for(p in o)h[f++]=o[p];return h}function Ep(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var h=[];o=o.length;for(var f=0;f<o;f++)h.push(f);return h}h=[],f=0;for(const p in o)h[f++]=p;return h}}}function Ul(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var f=Ep(o),p=bp(o),P=p.length,C=0;C<P;C++)h.call(void 0,p[C],f&&f[C],o)}var Bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tp(o,h){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),P=null;if(0<=p){var C=o[f].substring(0,p);P=o[f].substring(p+1)}else C=o[f];h(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Sn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Sn){this.h=o.h,oi(this,o.j),this.o=o.o,this.g=o.g,ai(this,o.s),this.l=o.l;var h=o.i,f=new Qr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),$l(this,f),this.m=o.m}else o&&(h=String(o).match(Bl))?(this.h=!1,oi(this,h[1]||"",!0),this.o=Gr(h[2]||""),this.g=Gr(h[3]||"",!0),ai(this,h[4]),this.l=Gr(h[5]||"",!0),$l(this,h[6]||"",!0),this.m=Gr(h[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}Sn.prototype.toString=function(){var o=[],h=this.j;h&&o.push(Kr(h,ql,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Kr(h,ql,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Kr(f,f.charAt(0)=="/"?Rp:Ap,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Kr(f,Pp)),o.join("")};function kt(o){return new Sn(o)}function oi(o,h,f){o.j=f?Gr(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function ai(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function $l(o,h,f){h instanceof Qr?(o.i=h,Np(o.i,o.h)):(f||(h=Kr(h,Sp)),o.i=new Qr(h,o.h))}function ae(o,h,f){o.i.set(h,f)}function ci(o){return ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gr(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Kr(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,Ip),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ip(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ql=/[#\/\?@]/g,Ap=/[#\?:]/g,Rp=/[#\?]/g,Sp=/[#\?@]/g,Pp=/#/g;function Qr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Xt(o){o.g||(o.g=new Map,o.h=0,o.i&&Tp(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Qr.prototype,n.add=function(o,h){Xt(this),this.i=null,o=tr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function Wl(o,h){Xt(o),h=tr(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Hl(o,h){return Xt(o),h=tr(o,h),o.g.has(h)}n.forEach=function(o,h){Xt(this),this.g.forEach(function(f,p){f.forEach(function(P){o.call(h,P,p,this)},this)},this)},n.na=function(){Xt(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let p=0;p<h.length;p++){const P=o[p];for(let C=0;C<P.length;C++)f.push(h[p])}return f},n.V=function(o){Xt(this);let h=[];if(typeof o=="string")Hl(this,o)&&(h=h.concat(this.g.get(tr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)h=h.concat(o[f])}return h},n.set=function(o,h){return Xt(this),this.i=null,o=tr(this,o),Hl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function zl(o,h,f){Wl(o,h),0<f.length&&(o.i=null,o.g.set(tr(o,h),A(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var p=h[f];const C=encodeURIComponent(String(p)),L=this.V(p);for(p=0;p<L.length;p++){var P=C;L[p]!==""&&(P+="="+encodeURIComponent(String(L[p]))),o.push(P)}}return this.i=o.join("&")};function tr(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function Np(o,h){h&&!o.j&&(Xt(o),o.i=null,o.g.forEach(function(f,p){var P=p.toLowerCase();p!=P&&(Wl(this,p),zl(this,P,f))},o)),o.j=h}function Cp(o,h){const f=new Hr;if(c.Image){const p=new Image;p.onload=w(Jt,f,"TestLoadImage: loaded",!0,h,p),p.onerror=w(Jt,f,"TestLoadImage: error",!1,h,p),p.onabort=w(Jt,f,"TestLoadImage: abort",!1,h,p),p.ontimeout=w(Jt,f,"TestLoadImage: timeout",!1,h,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else h(!1)}function kp(o,h){const f=new Hr,p=new AbortController,P=setTimeout(()=>{p.abort(),Jt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(P),C.ok?Jt(f,"TestPingServer: ok",!0,h):Jt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Jt(f,"TestPingServer: error",!1,h)})}function Jt(o,h,f,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(f)}catch{}}function Dp(){this.g=new gp}function jp(o,h,f){const p=f||"";try{Ul(o,function(P,C){let L=P;d(P)&&(L=Qo(P)),h.push(p+C+"="+encodeURIComponent(L))})}catch(P){throw h.push(p+"type="+encodeURIComponent("_badmap")),P}}function li(o){this.l=o.Ub||null,this.j=o.eb||!1}I(li,Yo),li.prototype.g=function(){return new ui(this.l,this.j)},li.prototype.i=function(o){return function(){return o}}({});function ui(o,h){Ne.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(ui,Ne),n=ui.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Xr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Yr(this):Xr(this),this.readyState==3&&Gl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Yr(this))},n.Qa=function(o){this.g&&(this.response=o,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Xr(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function Xr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Kl(o){let h="";return z(o,function(f,p){h+=p,h+=":",h+=f,h+=`\r
`}),h}function oa(o,h,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Kl(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ae(o,h,f))}function de(o){Ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(de,Ne);var Op=/^https?$/i,Vp=["POST","PUT"];n=de.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zo.g(),this.v=this.o?El(this.o):El(Zo),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(C){Ql(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)f.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Vp,h,void 0))||p||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of f)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Ql(this,C)}};function Ql(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Yl(o),hi(o)}function Yl(o){o.A||(o.A=!0,Fe(o,"complete"),Fe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Fe(this,"complete"),Fe(this,"abort"),hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),de.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xl(this):this.bb())},n.bb=function(){Xl(this)};function Xl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Dt(o)!=4||o.Z()!=2)){if(o.u&&Dt(o)==4)vl(o.Ea,0,o);else if(Fe(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var p;if(p=L===0){var P=String(o.D).match(Bl)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),p=!Op.test(P?P.toLowerCase():"")}f=p}if(f)Fe(o,"complete"),Fe(o,"success");else{o.m=6;try{var C=2<Dt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Yl(o)}}finally{hi(o)}}}}function hi(o,h){if(o.g){Jl(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||Fe(o,"ready");try{f.onreadystatechange=p}catch{}}}function Jl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),mp(h)}};function Zl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Mp(o){const h={};o=(o.g&&2<=Dt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(N(o[p]))continue;var f=T(o[p]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=h[P]||[];h[P]=C,C.push(f)}R(h,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function eu(o){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,o),this.cb=Jr("retryDelaySeedMs",1e4,o),this.Wa=Jr("forwardChannelMaxRetries",2,o),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ol(o&&o.concurrentRequestLimit),this.Da=new Dp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=eu.prototype,n.la=8,n.G=1,n.connect=function(o,h,f,p){Ue(0),this.W=o,this.H=h||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=lu(this,null,this.W),fi(this)};function aa(o){if(tu(o),o.G==3){var h=o.U++,f=kt(o.I);if(ae(f,"SID",o.K),ae(f,"RID",h),ae(f,"TYPE","terminate"),Zr(o,f),h=new Yt(o,o.j,h),h.L=2,h.v=ci(kt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=uu(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ii(h)}cu(o)}function di(o){o.g&&(la(o),o.g.cancel(),o.g=null)}function tu(o){di(o),o.u&&(c.clearTimeout(o.u),o.u=null),mi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function fi(o){if(!Vl(o.h)&&!o.s){o.s=!0;var h=o.Ga;tt||ml(),Fr||(tt(),Fr=!0),Bo.add(h,o),o.B=0}}function Lp(o,h){return Ml(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wr(g(o.Ga,o,h),au(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Yt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=x(C),v(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(h+=p,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ru(this,P,h),f=kt(this.I),ae(f,"RID",o),ae(f,"CVER",22),this.D&&ae(f,"X-HTTP-Session-Id",this.D),Zr(this,f),C&&(this.O?h="headers="+encodeURIComponent(String(Kl(C)))+"&"+h:this.m&&oa(f,this.m,C)),ia(this.h,P),this.Ua&&ae(f,"TYPE","init"),this.P?(ae(f,"$req",h),ae(f,"SID","null"),P.T=!0,ta(P,f,null)):ta(P,f,h),this.G=2}}else this.G==3&&(o?nu(this,o):this.i.length==0||Vl(this.h)||nu(this))};function nu(o,h){var f;h?f=h.l:f=o.U++;const p=kt(o.I);ae(p,"SID",o.K),ae(p,"RID",f),ae(p,"AID",o.T),Zr(o,p),o.m&&o.o&&oa(p,o.m,o.o),f=new Yt(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),h&&(o.i=h.D.concat(o.i)),h=ru(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ia(o.h,f),ta(f,p,h)}function Zr(o,h){o.H&&z(o.H,function(f,p){ae(h,p,f)}),o.l&&Ul({},function(f,p){ae(h,p,f)})}function ru(o,h,f){f=Math.min(o.i.length,f);var p=o.l?g(o.l.Na,o.l,o):null;e:{var P=o.i;let C=-1;for(;;){const L=["count="+f];C==-1?0<f?(C=P[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let oe=!0;for(let Te=0;Te<f;Te++){let Z=P[Te].g;const Ce=P[Te].map;if(Z-=C,0>Z)C=Math.max(0,P[Te].g-100),oe=!1;else try{jp(Ce,L,"req"+Z+"_")}catch{p&&p(Ce)}}if(oe){p=L.join("&");break e}}}return o=o.i.splice(0,f),h.D=o,p}function su(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;tt||ml(),Fr||(tt(),Fr=!0),Bo.add(h,o),o.v=0}}function ca(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wr(g(o.Fa,o),au(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wr(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),di(this),iu(this))};function la(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function iu(o){o.g=new Yt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=kt(o.qa);ae(h,"RID","rpc"),ae(h,"SID",o.K),ae(h,"AID",o.T),ae(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&ae(h,"TO",o.ja),ae(h,"TYPE","xmlhttp"),Zr(o,h),o.m&&o.o&&oa(h,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ci(kt(h)),f.m=null,f.P=!0,kl(f,o)}n.Za=function(){this.C!=null&&(this.C=null,di(this),ca(this),Ue(19))};function mi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ou(o,h){var f=null;if(o.g==h){mi(o),la(o),o.g=null;var p=2}else if(sa(o.h,h))f=h.D,Ll(o.h,h),p=1;else return;if(o.G!=0){if(h.o)if(p==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=o.B;p=ni(),Fe(p,new Sl(p,f)),fi(o)}else su(o);else if(P=h.s,P==3||P==0&&0<h.X||!(p==1&&Lp(o,h)||p==2&&ca(o)))switch(f&&0<f.length&&(h=o.h,h.i=h.i.concat(f)),P){case 1:Pn(o,5);break;case 4:Pn(o,10);break;case 3:Pn(o,6);break;default:Pn(o,2)}}}function au(o,h){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*h}function Pn(o,h){if(o.j.info("Error code "+h),h==2){var f=g(o.fb,o),p=o.Xa;const P=!p;p=new Sn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||oi(p,"https"),ci(p),P?Cp(p.toString(),f):kp(p.toString(),f)}else Ue(2);o.G=0,o.l&&o.l.sa(h),cu(o),tu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function cu(o){if(o.G=0,o.ka=[],o.l){const h=Fl(o.h);(h.length!=0||o.i.length!=0)&&(_(o.ka,h),_(o.ka,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.ra()}}function lu(o,h,f){var p=f instanceof Sn?kt(f):new Sn(f);if(p.g!="")h&&(p.g=h+"."+p.g),ai(p,p.s);else{var P=c.location;p=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var C=new Sn(null);p&&oi(C,p),h&&(C.g=h),P&&ai(C,P),f&&(C.l=f),p=C}return f=o.D,h=o.ya,f&&h&&ae(p,f,h),ae(p,"VER",o.la),Zr(o,p),p}function uu(o,h,f){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new de(new li({eb:f})):new de(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hu(){}n=hu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function gi(){}gi.prototype.g=function(o,h){return new Qe(o,h)};function Qe(o,h){Ne.call(this),this.g=new eu(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!N(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new nr(this)}I(Qe,Ne),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){aa(this.g)},Qe.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qo(o),o=f);h.i.push(new xp(h.Ya++,o)),h.G==3&&fi(h)},Qe.prototype.N=function(){this.g.l=null,delete this.j,aa(this.g),delete this.g,Qe.aa.N.call(this)};function du(o){Xo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}I(du,Xo);function fu(){Jo.call(this),this.status=1}I(fu,Jo);function nr(o){this.g=o}I(nr,hu),nr.prototype.ua=function(){Fe(this.g,"a")},nr.prototype.ta=function(o){Fe(this.g,new du(o))},nr.prototype.sa=function(o){Fe(this.g,new fu)},nr.prototype.ra=function(){Fe(this.g,"b")},gi.prototype.createWebChannel=gi.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,Lf=function(){return new gi},Mf=function(){return ni()},Vf=An,$a={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,Ci=ri,Pl.COMPLETE="complete",Of=Pl,Tl.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,cs=Tl,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,jf=de}).apply(typeof wi<"u"?wi:typeof self<"u"?self:typeof window<"u"?window:{});const th="@firebase/firestore";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let Dr="10.14.0";/**
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
 */const Wn=new uo("@firebase/firestore");function ts(){return Wn.logLevel}function B(n,...e){if(Wn.logLevel<=X.DEBUG){const t=e.map(xc);Wn.debug(`Firestore (${Dr}): ${n}`,...t)}}function $t(n,...e){if(Wn.logLevel<=X.ERROR){const t=e.map(xc);Wn.error(`Firestore (${Dr}): ${n}`,...t)}}function Tr(n,...e){if(Wn.logLevel<=X.WARN){const t=e.map(xc);Wn.warn(`Firestore (${Dr}): ${n}`,...t)}}function xc(n){if(typeof n=="string")return n;try{/**
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
 */function H(n="Unexpected state"){const e=`FIRESTORE (${Dr}) INTERNAL ASSERTION FAILED: `+n;throw $t(e),new Error(e)}function ie(n,e){n||H()}function K(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ff{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class ww{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xw{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ft,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ft)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Ff(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Ve(e)}}class bw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ew{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new bw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ie(this.o===void 0);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string"),this.R=t.token,new Tw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Aw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Aw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function Ir(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class ue{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ue(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new ue(0,0))}static max(){return new G(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class As{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return As.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof As?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ce extends As{construct(e,t,r){return new ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const Rw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends As{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return Rw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ce.fromString(e))}static fromName(e){return new $(ce.fromString(e).popFirst(5))}static empty(){return new $(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ce(e.slice()))}}function Sw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new pn(s,$.empty(),e)}function Pw(n){return new pn(n.readTime,n.key,-1)}class pn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pn(G.min(),$.empty(),-1)}static max(){return new pn(G.max(),$.empty(),-1)}}function Nw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const Cw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qs(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Cw)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++c,c===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Dw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ws(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class bc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bc.oe=-1;function po(n){return n==null}function zi(n){return n===0&&1/n==-1/0}function jw(n){return typeof n=="number"&&Number.isInteger(n)&&!zi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function nh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Bf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class he{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xi(this.root,e,this.comparator,!0)}}class xi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=s??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ie(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rh(this.data.getIterator())}getIteratorFrom(e){return new rh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class rh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ye{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new Re(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ir(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class $f extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $f("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const Ow=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(n){if(ie(!!n),typeof n=="string"){let e=0;const t=Ow.exec(n);if(ie(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hn(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
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
 */function Ec(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Tc(n){const e=n.mapValue.fields.__previous_value__;return Ec(e)?Tc(e):e}function Rs(n){const e=yn(n.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */class Vw{constructor(e,t,r,s,i,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class Ss{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bi={mapValue:{}};function zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ec(n)?4:Lw(n)?9007199254740991:Mw(n)?10:11:H()}function St(n,e){if(n===e)return!0;const t=zn(n);if(t!==zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Rs(n).isEqual(Rs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=yn(s.timestampValue),c=yn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Hn(s.bytesValue).isEqual(Hn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ye(s.doubleValue),c=ye(i.doubleValue);return a===c?zi(a)===zi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Ir(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(nh(a)!==nh(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!St(a[u],c[u])))return!1;return!0}(n,e);default:return H()}}function Ps(n,e){return(n.values||[]).find(t=>St(t,e))!==void 0}function Ar(n,e){if(n===e)return 0;const t=zn(n),r=zn(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ye(i.integerValue||i.doubleValue),u=ye(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return sh(n.timestampValue,e.timestampValue);case 4:return sh(Rs(n),Rs(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Hn(i),u=Hn(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=ne(c[d],u[d]);if(m!==0)return m}return ne(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ne(ye(i.latitude),ye(a.latitude));return c!==0?c:ne(ye(i.longitude),ye(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ih(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,d,m;const y=i.fields||{},g=a.fields||{},w=(c=y.value)===null||c===void 0?void 0:c.arrayValue,I=(u=g.value)===null||u===void 0?void 0:u.arrayValue,A=ne(((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0,((m=I==null?void 0:I.values)===null||m===void 0?void 0:m.length)||0);return A!==0?A:ih(w,I)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===bi.mapValue&&a===bi.mapValue)return 0;if(i===bi.mapValue)return 1;if(a===bi.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const g=ne(u[y],m[y]);if(g!==0)return g;const w=Ar(c[u[y]],d[m[y]]);if(w!==0)return w}return ne(u.length,m.length)}(n.mapValue,e.mapValue);default:throw H()}}function sh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=yn(n),r=yn(e),s=ne(t.seconds,r.seconds);return s!==0?s:ne(t.nanos,r.nanos)}function ih(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ar(t[s],r[s]);if(i)return i}return ne(t.length,r.length)}function Rr(n){return qa(n)}function qa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=yn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=qa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${qa(t.fields[a])}`;return s+"}"}(n.mapValue):H()}function oh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Wa(n){return!!n&&"integerValue"in n}function Ic(n){return!!n&&"arrayValue"in n}function ah(n){return!!n&&"nullValue"in n}function ch(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ki(n){return!!n&&"mapValue"in n}function Mw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function gs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Jn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=gs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Lw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(t)}setAll(e){let t=Ae.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=gs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ki(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Jn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new He(gs(this.value))}}function qf(n){const e=[];return Jn(n.fields,(t,r)=>{const s=new Ae([t]);if(ki(r)){const i=qf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ye(e)}/**
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
 */class Me{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Me(e,0,G.min(),G.min(),G.min(),He.empty(),0)}static newFoundDocument(e,t,r,s){return new Me(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new Me(e,2,t,G.min(),G.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,G.min(),G.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gi{constructor(e,t){this.position=e,this.inclusive=t}}function lh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=Ar(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ns{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wf{}class ve extends Wf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Bw(e,t,r):t==="array-contains"?new Ww(e,r):t==="in"?new Hw(e,r):t==="not-in"?new zw(e,r):t==="array-contains-any"?new Gw(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $w(e,r):new qw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ar(t,this.value)):t!==null&&zn(this.value)===zn(t)&&this.matchesComparison(Ar(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends Wf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new pt(e,t)}matches(e){return Hf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hf(n){return n.op==="and"}function zf(n){return Uw(n)&&Hf(n)}function Uw(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function Ha(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+Rr(n.value);if(zf(n))return n.filters.map(e=>Ha(e)).join(",");{const e=n.filters.map(t=>Ha(t)).join(",");return`${n.op}(${e})`}}function Gf(n,e){return n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)}(n,e):n instanceof pt?function(r,s){return s instanceof pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Gf(a,s.filters[c]),!0):!1}(n,e):void H()}function Kf(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Rr(t.value)}`}(n):n instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(Kf).join(" ,")+"}"}(n):"Filter"}class Bw extends ve{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class $w extends ve{constructor(e,t){super(e,"in",t),this.keys=Qf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class qw extends ve{constructor(e,t){super(e,"not-in",t),this.keys=Qf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class Ww extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ic(t)&&Ps(t.arrayValue,this.value)}}class Hw extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ps(this.value.arrayValue,t)}}class zw extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ps(this.value.arrayValue,t)}}class Gw extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ic(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ps(this.value.arrayValue,r))}}/**
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
 */class Kw{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function hh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Kw(n,e,t,r,s,i,a)}function Ac(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ha(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),po(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Rr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Rr(r)).join(",")),e.ue=t}return e.ue}function Rc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Fw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Gf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uh(n.startAt,e.startAt)&&uh(n.endAt,e.endAt)}function za(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class jr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qw(n,e,t,r,s,i,a,c){return new jr(n,e,t,r,s,i,a,c)}function Sc(n){return new jr(n)}function dh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Yf(n){return n.collectionGroup!==null}function ps(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Re(Ae.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ns(i,r))}),t.has(Ae.keyField().canonicalString())||e.ce.push(new Ns(Ae.keyField(),r))}return e.ce}function At(n){const e=K(n);return e.le||(e.le=Yw(e,ps(n))),e.le}function Yw(n,e){if(n.limitType==="F")return hh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ns(s.field,i)});const t=n.endAt?new Gi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Gi(n.startAt.position,n.startAt.inclusive):null;return hh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ga(n,e){const t=n.filters.concat([e]);return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ki(n,e,t){return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yo(n,e){return Rc(At(n),At(e))&&n.limitType===e.limitType}function Xf(n){return`${Ac(At(n))}|lt:${n.limitType}`}function or(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Kf(s)).join(", ")}]`),po(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Rr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Rr(s)).join(",")),`Target(${r})`}(At(n))}; limitType=${n.limitType})`}function _o(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=lh(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,ps(r),s)||r.endAt&&!function(a,c,u){const d=lh(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,ps(r),s))}(n,e)}function Xw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jf(n){return(e,t)=>{let r=!1;for(const s of ps(n)){const i=Jw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Jw(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Ar(u,d):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Or{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Bf(this.inner)}size(){return this.innerSize}}/**
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
 */const Zw=new he($.comparator);function qt(){return Zw}const Zf=new he($.comparator);function ls(...n){let e=Zf;for(const t of n)e=e.insert(t.key,t);return e}function em(n){let e=Zf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dn(){return ys()}function tm(){return ys()}function ys(){return new Or(n=>n.toString(),(n,e)=>n.isEqual(e))}const ex=new he($.comparator),tx=new Re($.comparator);function Y(...n){let e=tx;for(const t of n)e=e.add(t);return e}const nx=new Re(ne);function rx(){return nx}/**
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
 */function Pc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(e)?"-0":e}}function nm(n){return{integerValue:""+n}}function sx(n,e){return jw(e)?nm(e):Pc(n,e)}/**
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
 */class vo{constructor(){this._=void 0}}function ix(n,e,t){return n instanceof Qi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ec(i)&&(i=Tc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Cs?sm(n,e):n instanceof ks?im(n,e):function(s,i){const a=rm(s,i),c=fh(a)+fh(s.Pe);return Wa(a)&&Wa(s.Pe)?nm(c):Pc(s.serializer,c)}(n,e)}function ox(n,e,t){return n instanceof Cs?sm(n,e):n instanceof ks?im(n,e):t}function rm(n,e){return n instanceof Yi?function(r){return Wa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qi extends vo{}class Cs extends vo{constructor(e){super(),this.elements=e}}function sm(n,e){const t=om(e);for(const r of n.elements)t.some(s=>St(s,r))||t.push(r);return{arrayValue:{values:t}}}class ks extends vo{constructor(e){super(),this.elements=e}}function im(n,e){let t=om(e);for(const r of n.elements)t=t.filter(s=>!St(s,r));return{arrayValue:{values:t}}}class Yi extends vo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function fh(n){return ye(n.integerValue||n.doubleValue)}function om(n){return Ic(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ax(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Cs&&s instanceof Cs||r instanceof ks&&s instanceof ks?Ir(r.elements,s.elements,St):r instanceof Yi&&s instanceof Yi?St(r.Pe,s.Pe):r instanceof Qi&&s instanceof Qi}(n.transform,e.transform)}class cx{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wo{}function am(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lm(n.key,mt.none()):new Hs(n.key,n.data,mt.none());{const t=n.data,r=He.empty();let s=new Re(Ae.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new bn(n.key,r,new Ye(s.toArray()),mt.none())}}function lx(n,e,t){n instanceof Hs?function(s,i,a){const c=s.value.clone(),u=gh(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof bn?function(s,i,a){if(!Di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=gh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(cm(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function _s(n,e,t,r){return n instanceof Hs?function(i,a,c,u){if(!Di(i.precondition,a))return c;const d=i.value.clone(),m=ph(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof bn?function(i,a,c,u){if(!Di(i.precondition,a))return c;const d=ph(i.fieldTransforms,u,a),m=a.data;return m.setAll(cm(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,c){return Di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function ux(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=rm(r.transform,s||null);i!=null&&(t===null&&(t=He.empty()),t.set(r.field,i))}return t||null}function mh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ir(r,s,(i,a)=>ax(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hs extends wo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class bn extends wo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function gh(n,e,t){const r=new Map;ie(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ox(a,c,t[s]))}return r}function ph(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,ix(i,a,e))}return r}class lm extends wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hx extends wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dx{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lx(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=tm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=am(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Ir(this.mutations,e.mutations,(t,r)=>mh(t,r))&&Ir(this.baseMutations,e.baseMutations,(t,r)=>mh(t,r))}}class Nc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ie(e.mutations.length===r.length);let s=function(){return ex}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Nc(e,t,r,s)}}/**
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
 */class fx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _e,J;function gx(n){switch(n){default:return H();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function um(n){if(n===void 0)return $t("GRPC error has no .code"),D.UNKNOWN;switch(n){case _e.OK:return D.OK;case _e.CANCELLED:return D.CANCELLED;case _e.UNKNOWN:return D.UNKNOWN;case _e.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case _e.INTERNAL:return D.INTERNAL;case _e.UNAVAILABLE:return D.UNAVAILABLE;case _e.UNAUTHENTICATED:return D.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case _e.NOT_FOUND:return D.NOT_FOUND;case _e.ALREADY_EXISTS:return D.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return D.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case _e.ABORTED:return D.ABORTED;case _e.OUT_OF_RANGE:return D.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return D.UNIMPLEMENTED;case _e.DATA_LOSS:return D.DATA_LOSS;default:return H()}}(J=_e||(_e={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function px(){return new TextEncoder}/**
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
 */const yx=new Un([4294967295,4294967295],0);function yh(n){const e=px().encode(n),t=new Df;return t.update(e),new Uint8Array(t.digest())}function _h(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Un([t,r],0),new Un([s,i],0)]}class Cc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new us(`Invalid padding: ${t}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new us(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Un.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Un.fromNumber(r)));return s.compare(yx)===1&&(s=new Un([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=yh(e),[r,s]=_h(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Cc(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=yh(e),[r,s]=_h(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xo(G.min(),s,new he(ne),qt(),Y())}}class zs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new zs(r,t,Y(),Y(),Y())}}/**
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
 */class ji{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class hm{constructor(e,t){this.targetId=e,this.me=t}}class dm{constructor(e,t,r=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class vh{constructor(){this.fe=0,this.ge=xh(),this.pe=Se.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Y(),t=Y(),r=Y();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H()}}),new zs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=xh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _x{constructor(e){this.Le=e,this.Be=new Map,this.ke=qt(),this.qe=wh(),this.Qe=new he(ne)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(za(i))if(r===0){const a=new $(i.path);this.Ue(t,a,Me.newNoDocument(a,G.min()))}else ie(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Hn(r).toUint8Array()}catch(u){if(u instanceof $f)return Tr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Cc(a,s,i)}catch(u){return Tr(u instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&za(c.target)){const u=new $(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Me.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=Y();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new xo(e,t,this.Qe,this.ke,r);return this.ke=qt(),this.qe=wh(),this.Qe=new he(ne),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new vh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Re(ne),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function wh(){return new he($.comparator)}function xh(){return new he($.comparator)}const vx={asc:"ASCENDING",desc:"DESCENDING"},wx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xx={and:"AND",or:"OR"};class bx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ka(n,e){return n.useProto3Json||po(e)?e:{value:e}}function Xi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ex(n,e){return Xi(n,e.toTimestamp())}function Rt(n){return ie(!!n),G.fromTimestamp(function(t){const r=yn(t);return new ue(r.seconds,r.nanos)}(n))}function kc(n,e){return Qa(n,e).canonicalString()}function Qa(n,e){const t=function(s){return new ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mm(n){const e=ce.fromString(n);return ie(vm(e)),e}function Ya(n,e){return kc(n.databaseId,e.path)}function xa(n,e){const t=mm(e);if(t.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(pm(t))}function gm(n,e){return kc(n.databaseId,e)}function Tx(n){const e=mm(n);return e.length===4?ce.emptyPath():pm(e)}function Xa(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pm(n){return ie(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function bh(n,e,t){return{name:Ya(n,e),fields:t.value.mapValue.fields}}function Ix(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(ie(m===void 0||typeof m=="string"),Se.fromBase64String(m||"")):(ie(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Se.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const m=d.code===void 0?D.UNKNOWN:um(d.code);return new F(m,d.message||"")}(a);t=new dm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xa(n,r.document.name),i=Rt(r.document.updateTime),a=r.document.createTime?Rt(r.document.createTime):G.min(),c=new He({mapValue:{fields:r.document.fields}}),u=Me.newFoundDocument(s,i,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new ji(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xa(n,r.document),i=r.readTime?Rt(r.readTime):G.min(),a=Me.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ji([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xa(n,r.document),i=r.removedTargetIds||[];t=new ji([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new mx(s,i),c=r.targetId;t=new hm(c,a)}}return t}function Ax(n,e){let t;if(e instanceof Hs)t={update:bh(n,e.key,e.value)};else if(e instanceof lm)t={delete:Ya(n,e.key)};else if(e instanceof bn)t={update:bh(n,e.key,e.data),updateMask:Ox(e.fieldMask)};else{if(!(e instanceof hx))return H();t={verify:Ya(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Qi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Cs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ks)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Yi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ex(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(n,e.precondition)),t}function Rx(n,e){return n&&n.length>0?(ie(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Rt(s.updateTime):Rt(i);return a.isEqual(G.min())&&(a=Rt(i)),new cx(a,s.transformResults||[])}(t,e))):[]}function Sx(n,e){return{documents:[gm(n,e.path)]}}function Px(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gm(n,s);const i=function(d){if(d.length!==0)return _m(pt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(g){return{field:ar(g.field),direction:kx(g.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Ka(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Nx(n){let e=Tx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ie(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(y){const g=ym(y);return g instanceof pt&&zf(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(g=>function(I){return new Ns(cr(I.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(y){let g;return g=typeof y=="object"?y.value:y,po(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(y){const g=!!y.before,w=y.values||[];return new Gi(w,g)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const g=!y.before,w=y.values||[];return new Gi(w,g)}(t.endAt)),Qw(e,s,a,i,c,"F",u,d)}function Cx(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ym(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=cr(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cr(t.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cr(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=cr(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(t){return ve.create(cr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(r=>ym(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(t.compositeFilter.op))}(n):H()}function kx(n){return vx[n]}function Dx(n){return wx[n]}function jx(n){return xx[n]}function ar(n){return{fieldPath:n.canonicalString()}}function cr(n){return Ae.fromServerFormat(n.fieldPath)}function _m(n){return n instanceof ve?function(t){if(t.op==="=="){if(ch(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NAN"}};if(ah(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ch(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NAN"}};if(ah(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(t.field),op:Dx(t.op),value:t.value}}}(n):n instanceof pt?function(t){const r=t.getFilters().map(s=>_m(s));return r.length===1?r[0]:{compositeFilter:{op:jx(t.op),filters:r}}}(n):H()}function Ox(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class dn{constructor(e,t,r,s,i=G.min(),a=G.min(),c=Se.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vx{constructor(e){this.ct=e}}function Mx(n){const e=Nx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ki(e,e.limit,"L"):e}/**
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
 */class Lx{constructor(){this.un=new Fx}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(pn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Fx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Re(ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Re(ce.comparator)).toArray()}}/**
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
 */class Sr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Sr(0)}static kn(){return new Sr(-1)}}/**
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
 */class Ux{constructor(){this.changes=new Or(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $x{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&_s(r.mutation,s,Ye.empty(),ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Y()){const s=Dn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ls();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Dn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Y()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=qt();const a=ys(),c=function(){return ys()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof bn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),_s(m.mutation,d,m.mutation.getFieldMask(),ue.now())):a.set(d.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var y;return c.set(d,new Bx(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ys();let s=new he((a,c)=>a-c),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Ye.empty();m=c.applyToLocalView(d,m),r.set(u,m);const y=(s.get(c.batchId)||Y()).add(u);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,y=tm();m.forEach(g=>{if(!i.has(g)){const w=am(t.get(g),r.get(g));w!==null&&y.set(g,w),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Yf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(Dn());let c=-1,u=i;return a.next(d=>V.forEach(d,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(m)?V.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{u=u.insert(m,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,Y())).next(m=>({batchId:c,changes:em(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ls();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,u=>{const d=function(y,g){return new jr(g,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((y,g)=>{a=a.insert(y,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Me.newInvalidDocument(m)))});let c=ls();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&_s(m.mutation,d,Ye.empty(),ue.now()),_o(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class qx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Rt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Mx(s.bundledQuery),readTime:Rt(s.readTime)}}(t)),V.resolve()}}/**
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
 */class Wx{constructor(){this.overlays=new he($.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Dn(),i=t.length+1,a=new $(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new he((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Dn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Dn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return V.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fx(t,r));let i=this.Ir.get(t);i===void 0&&(i=Y(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Hx{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Dc{constructor(){this.Tr=new Re(we.Er),this.dr=new Re(we.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new we(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new we(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new ce([])),r=new we(t,e),s=new we(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new ce([])),r=new we(t,e),s=new we(t,e+1);let i=Y();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new we(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||ne(e.wr,t.wr)}static Ar(e,t){return ne(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
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
 */class zx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Re(we.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dx(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new we(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new we(t,0),s=new we(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Re(ne);return t.forEach(s=>{const i=new we(s,0),a=new we(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const a=new we(new $(i),0);let c=new Re(ne);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ie(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,s=>{const i=new we(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new we(t,0),s=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gx{constructor(e){this.Mr=e,this.docs=function(){return new he($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=qt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Me.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=qt();const a=t.path,c=new $(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Nw(Pw(m),r)<=0||(s.has(m.key)||_o(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Kx(this)}getSize(e){return V.resolve(this.size)}}class Kx extends Ux{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Qx{constructor(e){this.persistence=e,this.Nr=new Or(t=>Ac(t),Rc),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Dc,this.targetCount=0,this.kr=Sr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Sr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
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
 */class Yx{constructor(e,t){this.qr={},this.overlays={},this.Qr=new bc(0),this.Kr=!1,this.Kr=!0,this.$r=new Hx,this.referenceDelegate=e(this),this.Ur=new Qx(this),this.indexManager=new Lx,this.remoteDocumentCache=function(s){return new Gx(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Vx(t),this.Gr=new qx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Wx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new zx(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new Xx(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Xx extends kw{constructor(e){super(),this.currentSequenceNumber=e}}class jc{constructor(e){this.persistence=e,this.Jr=new Dc,this.Yr=null}static Zr(e){return new jc(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=$.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,G.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Oc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=Y(),s=Y();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Oc(e,t.fromCache,r,s)}}/**
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
 */class Jx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Zx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Vy()?8:Dw(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Jx;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ts()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(ts()<=X.DEBUG&&B("QueryEngine","Query:",or(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ts()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,At(t))):V.resolve())}Yi(e,t){if(dh(t))return V.resolve(null);let r=At(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ki(t,null,"F"),r=At(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Y(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,c);return this.ns(t,d,a,u.readTime)?this.Yi(e,Ki(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,s){return dh(t)||s.isEqual(G.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?V.resolve(null):(ts()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),or(t)),this.rs(e,a,t,Sw(s,-1)).next(c=>c))})}ts(e,t){let r=new Re(Jf(e));return t.forEach((s,i)=>{_o(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ts()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",or(t)),this.Ji.getDocumentsMatchingQuery(e,t,pn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class eb{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new he(ne),this._s=new Or(i=>Ac(i),Rc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $x(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function tb(n,e,t,r){return new eb(n,e,t,r)}async function wm(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=Y();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function nb(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const y=d.batch,g=y.keys();let w=V.resolve();return g.forEach(I=>{w=w.next(()=>m.getEntry(u,I)).next(A=>{const _=d.docVersions.get(I);ie(_!==null),A.version.compareTo(_)<0&&(y.applyToRemoteDocument(A,d),A.isValidDocument()&&(A.setReadTime(d.commitVersion),m.addEntry(A)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=Y();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function xm(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function rb(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((m,y)=>{const g=s.get(y);if(!g)return;c.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,y)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?w=w.withResumeToken(Se.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(m.resumeToken,r)),s=s.insert(y,w),function(A,_,O){return A.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(g,w,m)&&c.push(t.Ur.updateTargetData(i,w))});let u=qt(),d=Y();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(sb(i,a,e.documentUpdates).next(m=>{u=m.Ps,d=m.Is})),!r.isEqual(G.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(y=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.os=s,i))}function sb(n,e,t){let r=Y(),s=Y();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=qt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function ib(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ob(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new dn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Ja(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ws(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Eh(n,e,t){const r=K(n);let s=G.min(),i=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const y=K(u),g=y._s.get(m);return g!==void 0?V.resolve(y.os.get(g)):y.Ur.getTargetData(d,m)}(r,a,At(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:G.min(),t?i:Y())).next(c=>(ab(r,Xw(e),c),{documents:c,Ts:i})))}function ab(n,e,t){let r=n.us.get(e)||G.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Th{constructor(){this.activeTargetIds=rx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cb{constructor(){this.so=new Th,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Th,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lb{_o(e){}shutdown(){}}/**
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
 */class Ih{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ei=null;function ba(){return Ei===null?Ei=function(){return 268435456+Math.round(2147483648*Math.random())}():Ei++,"0x"+Ei.toString(16)}/**
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
 */const ub={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const je="WebChannelConnection";class db extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=ba(),u=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,u,d,s).then(m=>(B("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw Tr("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=ub[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ba();return new Promise((a,c)=>{const u=new jf;u.setWithCredentials(!0),u.listenOnce(Of.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ci.NO_ERROR:const m=u.getResponseJson();B(je,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),a(m);break;case Ci.TIMEOUT:B(je,`RPC '${e}' ${i} timed out`),c(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ci.HTTP_ERROR:const y=u.getStatus();if(B(je,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const I=function(_){const O=_.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(O)>=0?O:D.UNKNOWN}(w.status);c(new F(I,w.message))}else c(new F(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new F(D.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{B(je,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);B(je,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=ba(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Lf(),c=Mf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");B(je,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);let g=!1,w=!1;const I=new hb({Io:_=>{w?B(je,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(g||(B(je,`Opening RPC '${e}' stream ${s} transport.`),y.open(),g=!0),B(je,`RPC '${e}' stream ${s} sending:`,_),y.send(_))},To:()=>y.close()}),A=(_,O,N)=>{_.listen(O,M=>{try{N(M)}catch(U){setTimeout(()=>{throw U},0)}})};return A(y,cs.EventType.OPEN,()=>{w||(B(je,`RPC '${e}' stream ${s} transport opened.`),I.yo())}),A(y,cs.EventType.CLOSE,()=>{w||(w=!0,B(je,`RPC '${e}' stream ${s} transport closed`),I.So())}),A(y,cs.EventType.ERROR,_=>{w||(w=!0,Tr(je,`RPC '${e}' stream ${s} transport errored:`,_),I.So(new F(D.UNAVAILABLE,"The operation could not be completed")))}),A(y,cs.EventType.MESSAGE,_=>{var O;if(!w){const N=_.data[0];ie(!!N);const M=N,U=M.error||((O=M[0])===null||O===void 0?void 0:O.error);if(U){B(je,`RPC '${e}' stream ${s} received error:`,U);const W=U.status;let z=function(b){const v=_e[b];if(v!==void 0)return um(v)}(W),R=U.message;z===void 0&&(z=D.INTERNAL,R="Unknown error status: "+W+" with message "+U.message),w=!0,I.So(new F(z,R)),y.close()}else B(je,`RPC '${e}' stream ${s} received:`,N),I.bo(N)}}),A(c,Vf.STAT_EVENT,_=>{_.stat===$a.PROXY?B(je,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===$a.NOPROXY&&B(je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Ea(){return typeof document<"u"?document:null}/**
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
 */function bo(n){return new bx(n,!0)}/**
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
 */class bm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Em{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new bm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?($t(t.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fb extends Em{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Ix(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?Rt(a.readTime):G.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Xa(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=za(u)?{documents:Sx(i,u)}:{query:Px(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=fm(i,a.resumeToken);const d=Ka(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=Xi(i,a.snapshotVersion.toTimestamp());const d=Ka(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Cx(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Xa(this.serializer),t.removeTarget=e,this.a_(t)}}class mb extends Em{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ie(!!e.streamToken),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Rx(e.writeResults,e.commitTime),r=Rt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Xa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ax(this.serializer,r))};this.a_(t)}}/**
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
 */class gb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Qa(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Qa(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($t(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class yb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Zn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=K(u);d.L_.add(4),await Gs(d),d.q_.set("Unknown"),d.L_.delete(4),await Eo(d)}(this))})}),this.q_=new pb(r,s)}}async function Eo(n){if(Zn(n))for(const e of n.B_)await e(!0)}async function Gs(n){for(const e of n.B_)await e(!1)}function Tm(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Fc(t)?Lc(t):Vr(t).r_()&&Mc(t,e))}function Vc(n,e){const t=K(n),r=Vr(t);t.N_.delete(e),r.r_()&&Im(t,e),t.N_.size===0&&(r.r_()?r.o_():Zn(t)&&t.q_.set("Unknown"))}function Mc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vr(n).A_(e)}function Im(n,e){n.Q_.xe(e),Vr(n).R_(e)}function Lc(n){n.Q_=new _x({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Vr(n).start(),n.q_.v_()}function Fc(n){return Zn(n)&&!Vr(n).n_()&&n.N_.size>0}function Zn(n){return K(n).L_.size===0}function Am(n){n.Q_=void 0}async function _b(n){n.q_.set("Online")}async function vb(n){n.N_.forEach((e,t)=>{Mc(n,e)})}async function wb(n,e){Am(n),Fc(n)?(n.q_.M_(e),Lc(n)):n.q_.set("Unknown")}async function xb(n,e,t){if(n.q_.set("Online"),e instanceof dm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ji(n,r)}else if(e instanceof ji?n.Q_.Ke(e):e instanceof hm?n.Q_.He(e):n.Q_.We(e),!t.isEqual(G.min()))try{const r=await xm(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.N_.get(d);m&&i.N_.set(d,m.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const m=i.N_.get(u);if(!m)return;i.N_.set(u,m.withResumeToken(Se.EMPTY_BYTE_STRING,m.snapshotVersion)),Im(i,u);const y=new dn(m.target,u,d,m.sequenceNumber);Mc(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Ji(n,r)}}async function Ji(n,e,t){if(!Ws(e))throw e;n.L_.add(1),await Gs(n),n.q_.set("Offline"),t||(t=()=>xm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Eo(n)})}function Rm(n,e){return e().catch(t=>Ji(n,t,e))}async function To(n){const e=K(n),t=_n(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;bb(e);)try{const s=await ib(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Eb(e,s)}catch(s){await Ji(e,s)}Sm(e)&&Pm(e)}function bb(n){return Zn(n)&&n.O_.length<10}function Eb(n,e){n.O_.push(e);const t=_n(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Sm(n){return Zn(n)&&!_n(n).n_()&&n.O_.length>0}function Pm(n){_n(n).start()}async function Tb(n){_n(n).p_()}async function Ib(n){const e=_n(n);for(const t of n.O_)e.m_(t.mutations)}async function Ab(n,e,t){const r=n.O_.shift(),s=Nc.from(r,e,t);await Rm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await To(n)}async function Rb(n,e){e&&_n(n).V_&&await async function(r,s){if(function(a){return gx(a)&&a!==D.ABORTED}(s.code)){const i=r.O_.shift();_n(r).s_(),await Rm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await To(r)}}(n,e),Sm(n)&&Pm(n)}async function Ah(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Zn(t);t.L_.add(3),await Gs(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Eo(t)}async function Sb(n,e){const t=K(n);e?(t.L_.delete(2),await Eo(t)):e||(t.L_.add(2),await Gs(t),t.q_.set("Unknown"))}function Vr(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:_b.bind(null,n),Ro:vb.bind(null,n),mo:wb.bind(null,n),d_:xb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Fc(n)?Lc(n):n.q_.set("Unknown")):(await n.K_.stop(),Am(n))})),n.K_}function _n(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new mb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Tb.bind(null,n),mo:Rb.bind(null,n),f_:Ib.bind(null,n),g_:Ab.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await To(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Uc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Uc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bc(n,e){if($t("AsyncQueue",`${e}: ${n}`),Ws(n))return new F(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class fr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=ls(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new fr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Rh{constructor(){this.W_=new he($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pr{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Pr(e,t,fr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Pb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Nb{constructor(){this.queries=Sh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=Sh(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new F(D.ABORTED,"Firestore shutting down"))}}function Sh(){return new Or(n=>Xf(n),yo)}async function Nm(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Pb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Bc(a,`Initialization of query '${or(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&$c(t)}async function Cm(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Cb(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&$c(t)}function kb(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function $c(n){n.Y_.forEach(e=>{e.next()})}var Za,Ph;(Ph=Za||(Za={})).ea="default",Ph.Cache="cache";class km{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Za.Cache}}/**
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
 */class Dm{constructor(e){this.key=e}}class jm{constructor(e){this.key=e}}class Db{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Y(),this.mutatedKeys=Y(),this.Aa=Jf(e),this.Ra=new fr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Rh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const g=s.get(m),w=_o(this.query,y)?y:null,I=!!g&&this.mutatedKeys.has(g.key),A=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let _=!1;g&&w?g.data.isEqual(w.data)?I!==A&&(r.track({type:3,doc:w}),_=!0):this.ga(g,w)||(r.track({type:2,doc:w}),_=!0,(u&&this.Aa(w,u)>0||d&&this.Aa(w,d)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),_=!0):g&&!w&&(r.track({type:1,doc:g}),_=!0,(u||d)&&(c=!0)),_&&(w?(a=a.add(w),i=A?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,y)=>function(w,I){const A=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return A(w)-A(I)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new Pr(this.query,e.Ra,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Rh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Y(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new jm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Dm(r))}),t}ba(e){this.Ta=e.Ts,this.da=Y();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Pr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class jb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ob{constructor(e){this.key=e,this.va=!1}}class Vb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Or(c=>Xf(c),yo),this.Ma=new Map,this.xa=new Set,this.Oa=new he($.comparator),this.Na=new Map,this.La=new Dc,this.Ba={},this.ka=new Map,this.qa=Sr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Mb(n,e,t=!0){const r=Um(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Om(r,e,t,!0),s}async function Lb(n,e){const t=Um(n);await Om(t,e,!0,!1)}async function Om(n,e,t,r){const s=await ob(n.localStore,At(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Fb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tm(n.remoteStore,s),c}async function Fb(n,e,t,r,s){n.Ka=(y,g,w)=>async function(A,_,O,N){let M=_.view.ma(O);M.ns&&(M=await Eh(A.localStore,_.query,!1).then(({documents:R})=>_.view.ma(R,M)));const U=N&&N.targetChanges.get(_.targetId),W=N&&N.targetMismatches.get(_.targetId)!=null,z=_.view.applyChanges(M,A.isPrimaryClient,U,W);return Ch(A,_.targetId,z.wa),z.snapshot}(n,y,g,w);const i=await Eh(n.localStore,e,!0),a=new Db(e,i.Ts),c=a.ma(i.documents),u=zs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Ch(n,t,d.wa);const m=new jb(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Ub(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!yo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ja(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Vc(r.remoteStore,s.targetId),ec(r,s.targetId)}).catch(qs)):(ec(r,s.targetId),await Ja(r.localStore,s.targetId,!0))}async function Bb(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Vc(t.remoteStore,r.targetId))}async function $b(n,e,t){const r=Qb(n);try{const s=await function(a,c){const u=K(a),d=ue.now(),m=c.reduce((w,I)=>w.add(I.key),Y());let y,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let I=qt(),A=Y();return u.cs.getEntries(w,m).next(_=>{I=_,I.forEach((O,N)=>{N.isValidDocument()||(A=A.add(O))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,I)).next(_=>{y=_;const O=[];for(const N of c){const M=ux(N,y.get(N.key).overlayedDocument);M!=null&&O.push(new bn(N.key,M,qf(M.value.mapValue),mt.exists(!0)))}return u.mutationQueue.addMutationBatch(w,d,O,c)}).next(_=>{g=_;const O=_.applyToLocalDocumentSet(y,A);return u.documentOverlayCache.saveOverlays(w,_.batchId,O)})}).then(()=>({batchId:g.batchId,changes:em(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new he(ne)),d=d.insert(c,u),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await Ks(r,s.changes),await To(r.remoteStore)}catch(s){const i=Bc(s,"Failed to persist write");t.reject(i)}}async function Vm(n,e){const t=K(n);try{const r=await rb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?ie(a.va):s.removedDocuments.size>0&&(ie(a.va),a.va=!1))}),await Ks(t,r,e)}catch(r){await qs(r)}}function Nh(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=K(a);u.onlineState=c;let d=!1;u.queries.forEach((m,y)=>{for(const g of y.j_)g.Z_(c)&&(d=!0)}),d&&$c(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qb(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new he($.comparator);a=a.insert(i,Me.newNoDocument(i,G.min()));const c=Y().add(i),u=new xo(G.min(),new Map,new he(ne),a,c);await Vm(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),qc(r)}else await Ja(r.localStore,e,!1).then(()=>ec(r,e,t)).catch(qs)}async function Wb(n,e){const t=K(n),r=e.batch.batchId;try{const s=await nb(t.localStore,e);Lm(t,r,null),Mm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ks(t,s)}catch(s){await qs(s)}}async function Hb(n,e,t){const r=K(n);try{const s=await function(a,c){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(y=>(ie(y!==null),m=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);Lm(r,e,t),Mm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ks(r,s)}catch(s){await qs(s)}}function Mm(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Lm(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ec(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Fm(n,r)})}function Fm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Vc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),qc(n))}function Ch(n,e,t){for(const r of t)r instanceof Dm?(n.La.addReference(r.key,e),zb(n,r)):r instanceof jm?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Fm(n,r.key)):H()}function zb(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),qc(n))}function qc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(ce.fromString(e)),r=n.qa.next();n.Na.set(r,new Ob(t)),n.Oa=n.Oa.insert(t,r),Tm(n.remoteStore,new dn(At(Sc(t.path)),r,"TargetPurposeLimboResolution",bc.oe))}}async function Ks(n,e,t){const r=K(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Oc.Wi(u.targetId,d);i.push(y)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,d){const m=K(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>V.forEach(d,g=>V.forEach(g.$i,w=>m.persistence.referenceDelegate.addReference(y,g.targetId,w)).next(()=>V.forEach(g.Ui,w=>m.persistence.referenceDelegate.removeReference(y,g.targetId,w)))))}catch(y){if(!Ws(y))throw y;B("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const g=y.targetId;if(!y.fromCache){const w=m.os.get(g),I=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(I);m.os=m.os.insert(g,A)}}}(r.localStore,i))}async function Gb(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await wm(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new F(D.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ks(t,r.hs)}}function Kb(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return Y().add(r.key);{let s=Y();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Um(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qb.bind(null,e),e.Ca.d_=Cb.bind(null,e.eventManager),e.Ca.$a=kb.bind(null,e.eventManager),e}function Qb(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hb.bind(null,e),e}class Zi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return tb(this.persistence,new Zx,e.initialUser,this.serializer)}Ga(e){return new Yx(jc.Zr,this.serializer)}Wa(e){return new cb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zi.provider={build:()=>new Zi};class tc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gb.bind(null,this.syncEngine),await Sb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nb}()}createDatastore(e){const t=bo(e.databaseInfo.databaseId),r=function(i){return new db(i)}(e.databaseInfo);return function(i,a,c,u){return new gb(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new yb(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Nh(this.syncEngine,t,0),function(){return Ih.D()?new Ih:new lb}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,m){const y=new Vb(s,i,a,c,u,d);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);B("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Gs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}tc.provider={build:()=>new tc};/**
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
 */class Bm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Yb{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=Uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ta(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xb(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ah(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ah(e.remoteStore,s)),n._onlineComponents=e}async function Xb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ta(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Tr("Error using user provided cache. Falling back to memory cache: "+t),await Ta(n,new Zi)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Ta(n,new Zi);return n._offlineComponents}async function $m(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await kh(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await kh(n,new tc))),n._onlineComponents}function Jb(n){return $m(n).then(e=>e.syncEngine)}async function qm(n){const e=await $m(n),t=e.eventManager;return t.onListen=Mb.bind(null,e.syncEngine),t.onUnlisten=Ub.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Lb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Bb.bind(null,e.syncEngine),t}function Zb(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new Bm({next:g=>{m.Za(),a.enqueueAndForget(()=>Cm(i,y));const w=g.docs.has(c);!w&&g.fromCache?d.reject(new F(D.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?d.reject(new F(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),y=new km(Sc(c.path),m,{includeMetadataChanges:!0,_a:!0});return Nm(i,y)}(await qm(n),n.asyncQueue,e,t,r)),r.promise}function eE(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new Bm({next:g=>{m.Za(),a.enqueueAndForget(()=>Cm(i,y)),g.fromCache&&u.source==="server"?d.reject(new F(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),y=new km(c,m,{includeMetadataChanges:!0,_a:!0});return Nm(i,y)}(await qm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Wm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Dh=new Map;/**
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
 */function Hm(n,e,t){if(!t)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tE(n,e,t,r){if(e===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jh(n){if(!$.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oh(n){if($.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function Pt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Io(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Vh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ao{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vw;switch(r.type){case"firstParty":return new Ew(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Dh.get(t);r&&(B("ComponentProvider","Removing Datastore"),Dh.delete(t),r.terminate())}(this),Promise.resolve()}}function nE(n,e,t,r={}){var s;const i=(n=Pt(n,Ao))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ve.MOCK_USER;else{c=Ud(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ve(d)}n._authCredentials=new ww(new Ff(c,u))}}/**
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
 */class En{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new En(this.firestore,e,this._query)}}class We{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class gn extends En{constructor(e,t,r){super(e,t,Sc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new $(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function be(n,e,...t){if(n=le(n),Hm("collection","path",e),n instanceof Ao){const r=ce.fromString(e,...t);return Oh(r),new gn(n,null,r)}{if(!(n instanceof We||n instanceof gn))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return Oh(r),new gn(n.firestore,null,r)}}function Ke(n,e,...t){if(n=le(n),arguments.length===1&&(e=Uf.newId()),Hm("doc","path",e),n instanceof Ao){const r=ce.fromString(e,...t);return jh(r),new We(n,null,new $(r))}{if(!(n instanceof We||n instanceof gn))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return jh(r),new We(n.firestore,n instanceof gn?n.converter:null,new $(r))}}/**
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
 */class Mh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bm(this,"async_queue_retry"),this.Vu=()=>{const r=Ea();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ea();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ft;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ws(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Uc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Mr extends Ao{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Mh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mh(e),this._firestoreClient=void 0,await e}}}function rE(n,e){const t=typeof n=="object"?n:ho(),r=typeof n=="string"?n:"(default)",s=xn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Md("firestore");i&&nE(s,...i)}return s}function Wc(n){if(n._terminated)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sE(n),n._firestoreClient}function sE(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,m){return new Vw(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Wm(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Yb(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nr(Se.fromBase64String(e))}catch(t){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nr(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ro{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hc{constructor(e){this._methodName=e}}/**
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
 */class zc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */class Gc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const iE=/^__.*__$/;class oE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new bn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hs(e,this.data,t,this.fieldTransforms)}}class zm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new bn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Kc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Kc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return eo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Gm(this.Cu)&&iE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class aE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bo(e)}Qu(e,t,r,s=!1){return new Kc({Cu:e,methodName:t,qu:r,path:Ae.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(n){const e=n._freezeSettings(),t=bo(n._databaseId);return new aE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Km(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Qc("Data must be an object, but it was:",a,r);const c=Qm(r,a);let u,d;if(i.merge)u=new Ye(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const g=nc(e,y,t);if(!a.contains(g))throw new F(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Xm(m,g)||m.push(g)}u=new Ye(m),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new oE(new He(c),u,d)}class Po extends Hc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Po}}function cE(n,e,t,r){const s=n.Qu(1,e,t);Qc("Data must be an object, but it was:",s,r);const i=[],a=He.empty();Jn(r,(u,d)=>{const m=Yc(e,u,t);d=le(d);const y=s.Nu(m);if(d instanceof Po)i.push(m);else{const g=Qs(d,y);g!=null&&(i.push(m),a.set(m,g))}});const c=new Ye(i);return new zm(a,c,s.fieldTransforms)}function lE(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[nc(e,r,t)],u=[s];if(i.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(nc(e,i[g])),u.push(i[g+1]);const d=[],m=He.empty();for(let g=c.length-1;g>=0;--g)if(!Xm(d,c[g])){const w=c[g];let I=u[g];I=le(I);const A=a.Nu(w);if(I instanceof Po)d.push(w);else{const _=Qs(I,A);_!=null&&(d.push(w),m.set(w,_))}}const y=new Ye(d);return new zm(m,y,a.fieldTransforms)}function uE(n,e,t,r=!1){return Qs(t,n.Qu(r?4:3,e))}function Qs(n,e){if(Ym(n=le(n)))return Qc("Unsupported field value:",e,n),Qm(n,e);if(n instanceof Hc)return function(r,s){if(!Gm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Qs(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ue.fromDate(r);return{timestampValue:Xi(s.serializer,i)}}if(r instanceof ue){const i=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xi(s.serializer,i)}}if(r instanceof zc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nr)return{bytesValue:fm(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Gc)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Pc(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Io(r)}`)}(n,e)}function Qm(n,e){const t={};return Bf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(n,(r,s)=>{const i=Qs(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ym(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof zc||n instanceof Nr||n instanceof We||n instanceof Hc||n instanceof Gc)}function Qc(n,e,t){if(!Ym(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Io(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function nc(n,e,t){if((e=le(e))instanceof Ro)return e._internalPath;if(typeof e=="string")return Yc(n,e);throw eo("Field path arguments must be of type string or ",n,!1,void 0,t)}const hE=new RegExp("[~\\*/\\[\\]]");function Yc(n,e,t){if(e.search(hE)>=0)throw eo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ro(...e.split("."))._internalPath}catch{throw eo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function eo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new F(D.INVALID_ARGUMENT,c+n+u)}function Xm(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Jm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(No("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dE extends Jm{data(){return super.data()}}function No(n,e){return typeof e=="string"?Yc(n,e):e instanceof Ro?e._internalPath:e._delegate._internalPath}/**
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
 */function fE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xc{}class Jc extends Xc{}function Ze(n,e,...t){let r=[];e instanceof Xc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Zc).length,c=i.filter(u=>u instanceof Co).length;if(a>1||a>0&&c>0)throw new F(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Co extends Jc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Co(e,t,r)}_apply(e){const t=this._parse(e);return Zm(e._query,t),new En(e.firestore,e.converter,Ga(e._query,t))}_parse(e){const t=So(e.firestore);return function(i,a,c,u,d,m,y){let g;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new F(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Fh(y,m);const w=[];for(const I of y)w.push(Lh(u,i,I));g={arrayValue:{values:w}}}else g=Lh(u,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Fh(y,m),g=uE(c,a,y,m==="in"||m==="not-in");return ve.create(d,m,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function yt(n,e,t){const r=e,s=No("where",n);return Co._create(s,r,t)}class Zc extends Xc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:pt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Zm(a,u),a=Ga(a,u)}(e._query,t),new En(e.firestore,e.converter,Ga(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class el extends Jc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new el(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ns(i,a)}(e._query,this._field,this._direction);return new En(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new jr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Ds(n,e="asc"){const t=e,r=No("orderBy",n);return el._create(r,t)}class tl extends Jc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new tl(e,t,r)}_apply(e){return new En(e.firestore,e.converter,Ki(e._query,this._limit,this._limitType))}}function mE(n){return tl._create("limit",n,"F")}function Lh(n,e,t){if(typeof(t=le(t))=="string"){if(t==="")throw new F(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yf(e)&&t.indexOf("/")!==-1)throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ce.fromString(t));if(!$.isDocumentKey(r))throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return oh(n,new $(r))}if(t instanceof We)return oh(n,t._key);throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Io(t)}.`)}function Fh(n,e){if(!Array.isArray(n)||n.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zm(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class gE{convertValue(e,t="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Jn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ye(a.doubleValue));return new Gc(i)}convertGeoPoint(e){return new zc(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Tc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Rs(e));default:return null}}convertTimestamp(e){const t=yn(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ce.fromString(e);ie(vm(r));const s=new Ss(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||$t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function eg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class hs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tg extends Jm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(No("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Oi extends tg{data(e={}){return super.data(e)}}class pE{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Oi(this._firestore,this._userDataWriter,r.key,r,new hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Oi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Oi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:yE(c.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
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
 */function vn(n){n=Pt(n,We);const e=Pt(n.firestore,Mr);return Zb(Wc(e),n._key).then(t=>_E(e,n,t))}class ng extends gE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,t)}}function et(n){n=Pt(n,En);const e=Pt(n.firestore,Mr),t=Wc(e),r=new ng(e);return fE(n._query),eE(t,n._query).then(s=>new pE(e,r,n,s))}function nl(n,e,t){n=Pt(n,We);const r=Pt(n.firestore,Mr),s=eg(n.converter,e);return rl(r,[Km(So(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,mt.none())])}function ko(n,e,t,...r){n=Pt(n,We);const s=Pt(n.firestore,Mr),i=So(s);let a;return a=typeof(e=le(e))=="string"||e instanceof Ro?lE(i,"updateDoc",n._key,e,t,r):cE(i,"updateDoc",n._key,e),rl(s,[a.toMutation(n._key,mt.exists(!0))])}function Do(n,e){const t=Pt(n.firestore,Mr),r=Ke(n),s=eg(n.converter,e);return rl(t,[Km(So(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,mt.exists(!1))]).then(()=>r)}function rl(n,e){return function(r,s){const i=new Ft;return r.asyncQueue.enqueueAndForget(async()=>$b(await Jb(r),s,i)),i.promise}(Wc(n),e)}function _E(n,e,t){const r=t.docs.get(e._key),s=new ng(n);return new tg(n,s,e._key,r,new hs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Dr=s})(Xn),gt(new st("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Mr(new xw(r.getProvider("auth-internal")),new Iw(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(d.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ze(th,"4.7.3",e),ze(th,"4.7.3","esm2017")})();var vE="firebase",wE="10.14.1";/**
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
 */ze(vE,wE,"app");/**
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
 */const rg="firebasestorage.googleapis.com",sg="storageBucket",xE=2*60*1e3,bE=10*60*1e3;/**
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
 */class pe extends ot{constructor(e,t,r=0){super(Ia(e),`Firebase Storage: ${t} (${Ia(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ia(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function Ia(n){return"storage/"+n}function sl(){const n="An unknown error occurred, please check the error payload for server response.";return new pe(ge.UNKNOWN,n)}function EE(n){return new pe(ge.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function TE(n){return new pe(ge.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pe(ge.UNAUTHENTICATED,n)}function AE(){return new pe(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RE(n){return new pe(ge.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function SE(){return new pe(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PE(){return new pe(ge.CANCELED,"User canceled the upload/download.")}function NE(n){return new pe(ge.INVALID_URL,"Invalid URL '"+n+"'.")}function CE(n){return new pe(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function kE(){return new pe(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+sg+"' property when initializing the app?")}function DE(){return new pe(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jE(){return new pe(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function OE(n){return new pe(ge.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function rc(n){return new pe(ge.INVALID_ARGUMENT,n)}function ig(){return new pe(ge.APP_DELETED,"The Firebase app was deleted.")}function VE(n){return new pe(ge.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vs(n,e){return new pe(ge.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ns(n){throw new pe(ge.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Xe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Xe.makeFromUrl(e,t)}catch{return new Xe(e,"")}if(r.path==="")return r;throw CE(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d(U){U.path_=decodeURIComponent(U.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${y}/${m}/b/${s}/o${g}`,"i"),I={bucket:1,path:3},A=t===rg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,_="([^?#]*)",O=new RegExp(`^https?://${A}/${s}/${_}`,"i"),M=[{regex:c,indices:u,postModify:i},{regex:w,indices:I,postModify:d},{regex:O,indices:{bucket:1,path:2},postModify:d}];for(let U=0;U<M.length;U++){const W=M[U],z=W.regex.exec(e);if(z){const R=z[W.indices.bucket];let x=z[W.indices.path];x||(x=""),r=new Xe(R,x),W.postModify(r);break}}if(r==null)throw NE(e);return r}}class ME{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function LE(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let d=!1;function m(..._){d||(d=!0,e.apply(null,_))}function y(_){s=setTimeout(()=>{s=null,n(w,u())},_)}function g(){i&&clearTimeout(i)}function w(_,...O){if(d){g();return}if(_){g(),m.call(null,_,...O);return}if(u()||a){g(),m.call(null,_,...O);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,y(M)}let I=!1;function A(_){I||(I=!0,g(),!d&&(s!==null?(_||(c=2),clearTimeout(s),y(0)):_||(c=1)))}return y(0),i=setTimeout(()=>{a=!0,A(!0)},t),A}function FE(n){n(!1)}/**
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
 */function UE(n){return n!==void 0}function BE(n){return typeof n=="object"&&!Array.isArray(n)}function il(n){return typeof n=="string"||n instanceof String}function Uh(n){return ol()&&n instanceof Blob}function ol(){return typeof Blob<"u"}function Bh(n,e,t,r){if(r<e)throw rc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw rc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function al(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function og(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Bn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Bn||(Bn={}));/**
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
 */function $E(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class qE{constructor(e,t,r,s,i,a,c,u,d,m,y,g=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=y,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,I)=>{this.resolve_=w,this.reject_=I,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ti(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Bn.NO_ERROR,u=i.getStatus();if(!c||$E(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===Bn.ABORT;r(!1,new Ti(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Ti(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());UE(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=sl();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?ig():PE();a(u)}else{const u=SE();a(u)}};this.canceled_?t(!1,new Ti(!1,null,!0)):this.backoffId_=LE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ti{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function WE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function HE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function GE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function KE(n,e,t,r,s,i,a=!0){const c=og(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return zE(d,e),WE(d,t),HE(d,i),GE(d,r),new qE(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
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
 */function QE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function YE(...n){const e=QE();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ol())return new Blob(n);throw new pe(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function XE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function JE(n){if(typeof atob>"u")throw OE("base-64");return atob(n)}/**
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
 */const bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Aa{constructor(e,t){this.data=e,this.contentType=t||null}}function ZE(n,e){switch(n){case bt.RAW:return new Aa(ag(e));case bt.BASE64:case bt.BASE64URL:return new Aa(cg(n,e));case bt.DATA_URL:return new Aa(tT(e),nT(e))}throw sl()}function ag(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function eT(n){let e;try{e=decodeURIComponent(n)}catch{throw vs(bt.DATA_URL,"Malformed data URL.")}return ag(e)}function cg(n,e){switch(n){case bt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw vs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case bt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw vs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=JE(e)}catch(s){throw s.message.includes("polyfill")?s:vs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class lg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw vs(bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=rT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tT(n){const e=new lg(n);return e.base64?cg(bt.BASE64,e.rest):eT(e.rest)}function nT(n){return new lg(n).contentType}function rT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class on{constructor(e,t){let r=0,s="";Uh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Uh(this.data_)){const r=this.data_,s=XE(r,e,t);return s===null?null:new on(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new on(r,!0)}}static getBlob(...e){if(ol()){const t=e.map(r=>r instanceof on?r.data_:r);return new on(YE.apply(null,t))}else{const t=e.map(a=>il(a)?ZE(bt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new on(s,!0)}}uploadData(){return this.data_}}/**
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
 */function ug(n){let e;try{e=JSON.parse(n)}catch{return null}return BE(e)?e:null}/**
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
 */function sT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function iT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function hg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function oT(n,e){return e}class Be{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||oT}}let Ii=null;function aT(n){return!il(n)||n.length<2?n:hg(n)}function dg(){if(Ii)return Ii;const n=[];n.push(new Be("bucket")),n.push(new Be("generation")),n.push(new Be("metageneration")),n.push(new Be("name","fullPath",!0));function e(i,a){return aT(a)}const t=new Be("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Be("size");return s.xform=r,n.push(s),n.push(new Be("timeCreated")),n.push(new Be("updated")),n.push(new Be("md5Hash",null,!0)),n.push(new Be("cacheControl",null,!0)),n.push(new Be("contentDisposition",null,!0)),n.push(new Be("contentEncoding",null,!0)),n.push(new Be("contentLanguage",null,!0)),n.push(new Be("contentType",null,!0)),n.push(new Be("metadata","customMetadata",!0)),Ii=n,Ii}function cT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Xe(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function lT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return cT(r,n),r}function fg(n,e,t){const r=ug(e);return r===null?null:lT(n,r,t)}function uT(n,e,t,r){const s=ug(e);if(s===null||!il(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const m=n.bucket,y=n.fullPath,g="/b/"+a(m)+"/o/"+a(y),w=al(g,t,r),I=og({alt:"media",token:d});return w+I})[0]}function hT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class mg{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function gg(n){if(!n)throw sl()}function dT(n,e){function t(r,s){const i=fg(n,s,e);return gg(i!==null),i}return t}function fT(n,e){function t(r,s){const i=fg(n,s,e);return gg(i!==null),uT(i,s,n.host,n._protocol)}return t}function pg(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=AE():s=IE():t.getStatus()===402?s=TE(n.bucket):t.getStatus()===403?s=RE(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function mT(n){const e=pg(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=EE(n.path)),i.serverResponse=s.serverResponse,i}return t}function gT(n,e,t){const r=e.fullServerUrl(),s=al(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new mg(s,i,fT(n,t),a);return c.errorHandler=mT(e),c}function pT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function yT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=pT(null,e)),r}function _T(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let U=0;U<2;U++)M=M+Math.random().toString().slice(2);return M}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const d=yT(e,r,s),m=hT(d,t),y="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+u+"--",w=on.getBlob(y,r,g);if(w===null)throw DE();const I={name:d.fullPath},A=al(i,n.host,n._protocol),_="POST",O=n.maxUploadRetryTime,N=new mg(A,_,dT(n,t),O);return N.urlParams=I,N.headers=a,N.body=w.uploadData(),N.errorHandler=pg(e),N}class vT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw ns("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wT extends vT{initXhr(){this.xhr_.responseType="text"}}function yg(){return new wT}/**
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
 */class Gn{constructor(e,t){this._service=e,t instanceof Xe?this._location=t:this._location=Xe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Gn(e,t)}get root(){const e=new Xe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hg(this._location.path)}get storage(){return this._service}get parent(){const e=sT(this._location.path);if(e===null)return null;const t=new Xe(this._location.bucket,e);return new Gn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw VE(e)}}function xT(n,e,t){n._throwIfRoot("uploadBytes");const r=_T(n.storage,n._location,dg(),new on(e,!0),t);return n.storage.makeRequestWithTokens(r,yg).then(s=>({metadata:s,ref:n}))}function bT(n){n._throwIfRoot("getDownloadURL");const e=gT(n.storage,n._location,dg());return n.storage.makeRequestWithTokens(e,yg).then(t=>{if(t===null)throw jE();return t})}function ET(n,e){const t=iT(n._location.path,e),r=new Xe(n._location.bucket,t);return new Gn(n.storage,r)}/**
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
 */function TT(n){return/^[A-Za-z]+:\/\//.test(n)}function IT(n,e){return new Gn(n,e)}function _g(n,e){if(n instanceof cl){const t=n;if(t._bucket==null)throw kE();const r=new Gn(t,t._bucket);return e!=null?_g(r,e):r}else return e!==void 0?ET(n,e):n}function AT(n,e){if(e&&TT(e)){if(n instanceof cl)return IT(n,e);throw rc("To use ref(service, url), the first argument must be a Storage instance.")}else return _g(n,e)}function $h(n,e){const t=e==null?void 0:e[sg];return t==null?null:Xe.makeFromBucketSpec(t,n)}function RT(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Ud(s,n.app.options.projectId))}class cl{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=rg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xE,this._maxUploadRetryTime=bE,this._requests=new Set,s!=null?this._bucket=Xe.makeFromBucketSpec(s,this._host):this._bucket=$h(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xe.makeFromBucketSpec(this._url,e):this._bucket=$h(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new ME(ig());{const a=KE(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const qh="@firebase/storage",Wh="0.13.2";/**
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
 */const vg="storage";function ST(n,e,t){return n=le(n),xT(n,e,t)}function PT(n){return n=le(n),bT(n)}function NT(n,e){return n=le(n),AT(n,e)}function CT(n=ho(),e){n=le(n);const r=xn(n,vg).getImmediate({identifier:e}),s=Md("storage");return s&&kT(r,...s),r}function kT(n,e,t,r={}){RT(n,e,t,r)}function DT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new cl(t,r,s,e,Xn)}function jT(){gt(new st(vg,DT,"PUBLIC").setMultipleInstances(!0)),ze(qh,Wh,""),ze(qh,Wh,"esm2017")}jT();const wg="@firebase/installations",ll="0.6.9";/**
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
 */const xg=1e4,bg=`w:${ll}`,Eg="FIS_v2",OT="https://firebaseinstallations.googleapis.com/v1",VT=60*60*1e3,MT="installations",LT="Installations";/**
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
 */const FT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Kn=new Yn(MT,LT,FT);function Tg(n){return n instanceof ot&&n.code.includes("request-failed")}/**
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
 */function Ig({projectId:n}){return`${OT}/projects/${n}/installations`}function Ag(n){return{token:n.token,requestStatus:2,expiresIn:BT(n.expiresIn),creationTime:Date.now()}}async function Rg(n,e){const r=(await e.json()).error;return Kn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Sg({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function UT(n,{refreshToken:e}){const t=Sg(n);return t.append("Authorization",$T(e)),t}async function Pg(n){const e=await n();return e.status>=500&&e.status<600?n():e}function BT(n){return Number(n.replace("s","000"))}function $T(n){return`${Eg} ${n}`}/**
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
 */async function qT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Ig(n),s=Sg(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:t,authVersion:Eg,appId:n.appId,sdkVersion:bg},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Pg(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ag(d.authToken)}}else throw await Rg("Create Installation",u)}/**
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
 */function Ng(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function WT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const HT=/^[cdef][\w-]{21}$/,sc="";function zT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=GT(n);return HT.test(t)?t:sc}catch{return sc}}function GT(n){return WT(n).substr(0,22)}/**
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
 */function jo(n){return`${n.appName}!${n.appId}`}/**
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
 */const Cg=new Map;function kg(n,e){const t=jo(n);Dg(t,e),KT(t,e)}function Dg(n,e){const t=Cg.get(n);if(t)for(const r of t)r(e)}function KT(n,e){const t=QT();t&&t.postMessage({key:n,fid:e}),YT()}let jn=null;function QT(){return!jn&&"BroadcastChannel"in self&&(jn=new BroadcastChannel("[Firebase] FID Change"),jn.onmessage=n=>{Dg(n.data.key,n.data.fid)}),jn}function YT(){Cg.size===0&&jn&&(jn.close(),jn=null)}/**
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
 */const XT="firebase-installations-database",JT=1,Qn="firebase-installations-store";let Ra=null;function ul(){return Ra||(Ra=zd(XT,JT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Qn)}}})),Ra}async function to(n,e){const t=jo(n),s=(await ul()).transaction(Qn,"readwrite"),i=s.objectStore(Qn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&kg(n,e.fid),e}async function jg(n){const e=jo(n),r=(await ul()).transaction(Qn,"readwrite");await r.objectStore(Qn).delete(e),await r.done}async function Oo(n,e){const t=jo(n),s=(await ul()).transaction(Qn,"readwrite"),i=s.objectStore(Qn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&kg(n,c.fid),c}/**
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
 */async function hl(n){let e;const t=await Oo(n.appConfig,r=>{const s=ZT(r),i=eI(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===sc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ZT(n){const e=n||{fid:zT(),registrationStatus:0};return Og(e)}function eI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Kn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tI(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nI(n)}:{installationEntry:e}}async function tI(n,e){try{const t=await qT(n,e);return to(n.appConfig,t)}catch(t){throw Tg(t)&&t.customData.serverCode===409?await jg(n.appConfig):await to(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function nI(n){let e=await Hh(n.appConfig);for(;e.registrationStatus===1;)await Ng(100),e=await Hh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await hl(n);return r||t}return e}function Hh(n){return Oo(n,e=>{if(!e)throw Kn.create("installation-not-found");return Og(e)})}function Og(n){return rI(n)?{fid:n.fid,registrationStatus:0}:n}function rI(n){return n.registrationStatus===1&&n.registrationTime+xg<Date.now()}/**
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
 */async function sI({appConfig:n,heartbeatServiceProvider:e},t){const r=iI(n,t),s=UT(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:bg,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Pg(()=>fetch(r,c));if(u.ok){const d=await u.json();return Ag(d)}else throw await Rg("Generate Auth Token",u)}function iI(n,{fid:e}){return`${Ig(n)}/${e}/authTokens:generate`}/**
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
 */async function dl(n,e=!1){let t;const r=await Oo(n.appConfig,i=>{if(!Vg(i))throw Kn.create("not-registered");const a=i.authToken;if(!e&&cI(a))return i;if(a.requestStatus===1)return t=oI(n,e),i;{if(!navigator.onLine)throw Kn.create("app-offline");const c=uI(i);return t=aI(n,c),c}});return t?await t:r.authToken}async function oI(n,e){let t=await zh(n.appConfig);for(;t.authToken.requestStatus===1;)await Ng(100),t=await zh(n.appConfig);const r=t.authToken;return r.requestStatus===0?dl(n,e):r}function zh(n){return Oo(n,e=>{if(!Vg(e))throw Kn.create("not-registered");const t=e.authToken;return hI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aI(n,e){try{const t=await sI(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await to(n.appConfig,r),t}catch(t){if(Tg(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await jg(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await to(n.appConfig,r)}throw t}}function Vg(n){return n!==void 0&&n.registrationStatus===2}function cI(n){return n.requestStatus===2&&!lI(n)}function lI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+VT}function uI(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function hI(n){return n.requestStatus===1&&n.requestTime+xg<Date.now()}/**
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
 */async function dI(n){const e=n,{installationEntry:t,registrationPromise:r}=await hl(e);return r?r.catch(console.error):dl(e).catch(console.error),t.fid}/**
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
 */async function fI(n,e=!1){const t=n;return await mI(t),(await dl(t,e)).token}async function mI(n){const{registrationPromise:e}=await hl(n);e&&await e}/**
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
 */function gI(n){if(!n||!n.options)throw Sa("App Configuration");if(!n.name)throw Sa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Sa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Sa(n){return Kn.create("missing-app-config-values",{valueName:n})}/**
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
 */const Mg="installations",pI="installations-internal",yI=n=>{const e=n.getProvider("app").getImmediate(),t=gI(e),r=xn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_I=n=>{const e=n.getProvider("app").getImmediate(),t=xn(e,Mg).getImmediate();return{getId:()=>dI(t),getToken:s=>fI(t,s)}};function vI(){gt(new st(Mg,yI,"PUBLIC")),gt(new st(pI,_I,"PRIVATE"))}vI();ze(wg,ll);ze(wg,ll,"esm2017");/**
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
 */const no="analytics",wI="firebase_id",xI="origin",bI=60*1e3,EI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fl="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ge=new uo("@firebase/analytics");/**
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
 */const TI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Je=new Yn("analytics","Analytics",TI);/**
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
 */function II(n){if(!n.startsWith(fl)){const e=Je.create("invalid-gtag-resource",{gtagURL:n});return Ge.warn(e.message),""}return n}function Lg(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function AI(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function RI(n,e){const t=AI("firebase-js-sdk-policy",{createScriptURL:II}),r=document.createElement("script"),s=`${fl}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function SI(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function PI(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await Lg(t)).find(d=>d.measurementId===s);u&&await e[u.appId]}}catch(c){Ge.error(c)}n("config",s,i)}async function NI(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Lg(t);for(const u of a){const d=c.find(y=>y.measurementId===u),m=d&&e[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ge.error(i)}}function CI(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await NI(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await PI(n,e,t,r,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,d]=a;n("get",c,u,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Ge.error(c)}}return s}function kI(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=CI(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function DI(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(fl)&&t.src.includes(n))return t;return null}/**
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
 */const jI=30,OI=1e3;class VI{constructor(e={},t=OI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fg=new VI;function MI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function LI(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:MI(r)},i=EI.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function FI(n,e=Fg,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Je.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Je.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new $I;return setTimeout(async()=>{c.abort()},bI),Ug({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Ug(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Fg){var i;const{appId:a,measurementId:c}=n;try{await UI(r,e)}catch(u){if(c)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const u=await LI(n);return s.deleteThrottleMetadata(a),u}catch(u){const d=u;if(!BI(d)){if(s.deleteThrottleMetadata(a),c)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw u}const m=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Au(t,s.intervalMillis,jI):Au(t,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(a,y),Ge.debug(`Calling attemptFetch again in ${m} millis`),Ug(n,y,r,s)}}function UI(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BI(n){if(!(n instanceof ot)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class $I{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qI(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function WI(){if($d())try{await qd()}catch(n){return Ge.warn(Je.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ge.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function HI(n,e,t,r,s,i,a){var c;const u=FI(n);u.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Ge.error(w)),e.push(u);const d=WI().then(w=>{if(w)return r.getId()}),[m,y]=await Promise.all([u,d]);DI(i)||RI(i,m.measurementId),s("js",new Date);const g=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return g[xI]="firebase",g.update=!0,y!=null&&(g[wI]=y),s("config",m.measurementId,g),m.measurementId}/**
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
 */class zI{constructor(e){this.app=e}_delete(){return delete ws[this.app.options.appId],Promise.resolve()}}let ws={},Gh=[];const Kh={};let Pa="dataLayer",GI="gtag",Qh,Bg,Yh=!1;function KI(){const n=[];if(Bd()&&n.push("This is a browser extension environment."),My()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Je.create("invalid-analytics-context",{errorInfo:e});Ge.warn(t.message)}}function QI(n,e,t){KI();const r=n.options.appId;if(!r)throw Je.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(ws[r]!=null)throw Je.create("already-exists",{id:r});if(!Yh){SI(Pa);const{wrappedGtag:i,gtagCore:a}=kI(ws,Gh,Kh,Pa,GI);Bg=i,Qh=a,Yh=!0}return ws[r]=HI(n,Gh,Kh,e,Qh,Pa,t),new zI(n)}function YI(n=ho()){n=le(n);const e=xn(n,no);return e.isInitialized()?e.getImmediate():XI(n)}function XI(n,e={}){const t=xn(n,no);if(t.isInitialized()){const s=t.getImmediate();if(Es(e,t.getOptions()))return s;throw Je.create("already-initialized")}return t.initialize({options:e})}function $g(n,e,t,r){n=le(n),qI(Bg,ws[n.app.options.appId],e,t,r).catch(s=>Ge.error(s))}const Xh="@firebase/analytics",Jh="0.10.8";function JI(){gt(new st(no,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return QI(r,s,t)},"PUBLIC")),gt(new st("analytics-internal",n,"PRIVATE")),ze(Xh,Jh),ze(Xh,Jh,"esm2017");function n(e){try{const t=e.getProvider(no).getImmediate();return{logEvent:(r,s,i)=>$g(t,r,s,i)}}catch(t){throw Je.create("interop-component-reg-failed",{reason:t})}}}JI();const ZI={apiKey:"AIzaSyBqeebps7CNCQw_xis2DKiGHMRYmurj_B4",authDomain:"kingcp-a0065.firebaseapp.com",projectId:"kingcp-a0065",storageBucket:"kingcp-a0065.firebasestorage.app",messagingSenderId:"550768863932",appId:"1:550768863932:web:acabd2d2584b8165a7beb9",measurementId:"G-QRVT5F6VGR"};let ds;try{ds=Gd(ZI),console.log("Firebase initialized successfully")}catch(n){throw console.error("Error initializing Firebase:",n),n}let Tn,re,qg,ic;try{Tn=yw(ds),re=rE(ds),qg=CT(ds),ic=YI(ds),console.log("Firebase services initialized successfully")}catch(n){throw console.error("Error initializing Firebase services:",n),n}const eA=new xt;eA.setCustomParameters({client_id:"123456789012-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com"});const Wt=(n,e)=>{ic&&$g(ic,n,e)},wn={USER_SIGNED_UP:"user_signed_up",USER_SIGNED_IN:"user_signed_in",USER_SIGNED_OUT:"user_signed_out",ENTRY_CREATED:"entry_created",ENTRY_UPDATED:"entry_updated",ENTRY_DELETED:"entry_deleted",ENTRY_VIEWED:"entry_viewed",VOTE_CAST:"vote_cast",VOTE_REMOVED:"vote_removed",PAGE_VIEW:"page_view",ERROR_OCCURRED:"error_occurred"},tA={},Zh=n=>{let e;const t=new Set,r=(m,y)=>{const g=typeof m=="function"?m(e):m;if(!Object.is(g,e)){const w=e;e=y??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(I=>I(e,w))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>d,subscribe:m=>(t.add(m),()=>t.delete(m)),destroy:()=>{(tA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},d=e=n(r,s,u);return u},nA=n=>n?Zh(n):Zh;var Wg={exports:{}},Hg={},zg={exports:{}},Gg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=j;function rA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var sA=typeof Object.is=="function"?Object.is:rA,iA=Cr.useState,oA=Cr.useEffect,aA=Cr.useLayoutEffect,cA=Cr.useDebugValue;function lA(n,e){var t=e(),r=iA({inst:{value:t,getSnapshot:e}}),s=r[0].inst,i=r[1];return aA(function(){s.value=t,s.getSnapshot=e,Na(s)&&i({inst:s})},[n,t,e]),oA(function(){return Na(s)&&i({inst:s}),n(function(){Na(s)&&i({inst:s})})},[n]),cA(t),t}function Na(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!sA(n,t)}catch{return!0}}function uA(n,e){return e()}var hA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?uA:lA;Gg.useSyncExternalStore=Cr.useSyncExternalStore!==void 0?Cr.useSyncExternalStore:hA;zg.exports=Gg;var dA=zg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=j,fA=dA;function mA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gA=typeof Object.is=="function"?Object.is:mA,pA=fA.useSyncExternalStore,yA=Vo.useRef,_A=Vo.useEffect,vA=Vo.useMemo,wA=Vo.useDebugValue;Hg.useSyncExternalStoreWithSelector=function(n,e,t,r,s){var i=yA(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=vA(function(){function u(w){if(!d){if(d=!0,m=w,w=r(w),s!==void 0&&a.hasValue){var I=a.value;if(s(I,w))return y=I}return y=w}if(I=y,gA(m,w))return I;var A=r(w);return s!==void 0&&s(I,A)?(m=w,I):(m=w,y=A)}var d=!1,m,y,g=t===void 0?null:t;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,t,r,s]);var c=pA(n,i[0],i[1]);return _A(function(){a.hasValue=!0,a.value=c},[c]),wA(c),c};Wg.exports=Hg;var xA=Wg.exports;const bA=$p(xA),Kg={},{useDebugValue:EA}=rt,{useSyncExternalStoreWithSelector:TA}=bA;let ed=!1;const IA=n=>n;function AA(n,e=IA,t){(Kg?"production":void 0)!=="production"&&t&&!ed&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ed=!0);const r=TA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return EA(r),r}const RA=n=>{(Kg?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?nA(n):n,t=(r,s)=>AA(e,r,s);return Object.assign(t,e),t},SA=n=>RA,PA={};function NA(n,e){let t;try{t=n()}catch{return}return{getItem:s=>{var i;const a=u=>u===null?null:JSON.parse(u,void 0),c=(i=t.getItem(s))!=null?i:null;return c instanceof Promise?c.then(a):a(c)},setItem:(s,i)=>t.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>t.removeItem(s)}}const js=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return js(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return js(r)(t)}}}},CA=(n,e)=>(t,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,O)=>({...O,..._}),...e},a=!1;const c=new Set,u=new Set;let d;try{d=i.getStorage()}catch{}if(!d)return n((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(..._)},r,s);const m=js(i.serialize),y=()=>{const _=i.partialize({...r()});let O;const N=m({state:_,version:i.version}).then(M=>d.setItem(i.name,M)).catch(M=>{O=M});if(O)throw O;return N},g=s.setState;s.setState=(_,O)=>{g(_,O),y()};const w=n((..._)=>{t(..._),y()},r,s);let I;const A=()=>{var _;if(!d)return;a=!1,c.forEach(N=>N(r()));const O=((_=i.onRehydrateStorage)==null?void 0:_.call(i,r()))||void 0;return js(d.getItem.bind(d))(i.name).then(N=>{if(N)return i.deserialize(N)}).then(N=>{if(N)if(typeof N.version=="number"&&N.version!==i.version){if(i.migrate)return i.migrate(N.state,N.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return N.state}).then(N=>{var M;return I=i.merge(N,(M=r())!=null?M:w),t(I,!0),y()}).then(()=>{O==null||O(I,void 0),a=!0,u.forEach(N=>N(I))}).catch(N=>{O==null||O(void 0,N)})};return s.persist={setOptions:_=>{i={...i,..._},_.getStorage&&(d=_.getStorage())},clearStorage:()=>{d==null||d.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>A(),hasHydrated:()=>a,onHydrate:_=>(c.add(_),()=>{c.delete(_)}),onFinishHydration:_=>(u.add(_),()=>{u.delete(_)})},A(),I||w},kA=(n,e)=>(t,r,s)=>{let i={storage:NA(()=>localStorage),partialize:A=>A,version:0,merge:(A,_)=>({..._,...A}),...e},a=!1;const c=new Set,u=new Set;let d=i.storage;if(!d)return n((...A)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...A)},r,s);const m=()=>{const A=i.partialize({...r()});return d.setItem(i.name,{state:A,version:i.version})},y=s.setState;s.setState=(A,_)=>{y(A,_),m()};const g=n((...A)=>{t(...A),m()},r,s);s.getInitialState=()=>g;let w;const I=()=>{var A,_;if(!d)return;a=!1,c.forEach(N=>{var M;return N((M=r())!=null?M:g)});const O=((_=i.onRehydrateStorage)==null?void 0:_.call(i,(A=r())!=null?A:g))||void 0;return js(d.getItem.bind(d))(i.name).then(N=>{if(N)if(typeof N.version=="number"&&N.version!==i.version){if(i.migrate)return[!0,i.migrate(N.state,N.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,N.state];return[!1,void 0]}).then(N=>{var M;const[U,W]=N;if(w=i.merge(W,(M=r())!=null?M:g),t(w,!0),U)return m()}).then(()=>{O==null||O(w,void 0),w=r(),a=!0,u.forEach(N=>N(w))}).catch(N=>{O==null||O(void 0,N)})};return s.persist={setOptions:A=>{i={...i,...A},A.storage&&(d=A.storage)},clearStorage:()=>{d==null||d.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>I(),hasHydrated:()=>a,onHydrate:A=>(c.add(A),()=>{c.delete(A)}),onFinishHydration:A=>(u.add(A),()=>{u.delete(A)})},i.skipHydration||I(),w||g},DA=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((PA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),CA(n,e)):kA(n,e),jA=DA,Lr=SA()(jA(n=>({user:null,token:null,isAuthenticated:!1,login:(e,t)=>{localStorage.setItem("token",t),n({user:e,token:t,isAuthenticated:!0})},logout:()=>{localStorage.removeItem("token"),n({user:null,token:null,isAuthenticated:!1})}}),{name:"auth-storage"})),Qg=async(n,e,t)=>{try{if(!n||!n.includes("@"))throw new Error("Invalid email format");if(!e||e.length<6)throw new Error("Password must be at least 6 characters long");const r=await e0(Tn,n,e);t&&await r0(r.user,{displayName:t});const s={id:r.user.uid,email:r.user.email,displayName:r.user.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date};r.user.photoURL&&(s.photoURL=r.user.photoURL);try{console.log("Creating user document in Firestore:",s),await nl(Ke(re,"users",s.id),s),console.log("User document created successfully")}catch(i){console.error("Error creating user document:",i)}try{const i=await r.user.getIdToken();console.log("Got ID token for new user"),Lr.getState().login(s,i),console.log("Updated auth store after registration")}catch(i){console.error("Error getting token:",i)}return Wt(wn.USER_SIGNED_UP),s}catch(r){console.error("Registration error:",r);let s="Failed to register";switch(r.code){case"auth/email-already-in-use":s="This email is already registered";break;case"auth/invalid-email":s="Invalid email format";break;case"auth/operation-not-allowed":s="Email/password accounts are not enabled. Please contact support.";break;case"auth/weak-password":s="Password should be at least 6 characters";break;default:s=r.message||"Failed to register"}throw Wt(wn.ERROR_OCCURRED,{error_message:s,error_code:r.code}),new Error(s)}},Yg=async(n,e)=>{try{console.log("Attempting to login with email:",n);const t=await t0(Tn,n,e);console.log("Login successful, fetching user data");let r;try{const i=await vn(Ke(re,"users",t.user.uid));i.exists()?(console.log("User document found"),r=i.data()):(console.log("User document not found, creating one"),r={id:t.user.uid,email:t.user.email,displayName:t.user.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date},t.user.photoURL&&(r.photoURL=t.user.photoURL),await nl(Ke(re,"users",r.id),r))}catch(i){console.error("Error fetching/creating user document:",i),r={id:t.user.uid,email:t.user.email,displayName:t.user.displayName||void 0,photoURL:t.user.photoURL||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date}}const s=await t.user.getIdToken();return console.log("Got ID token"),Lr.getState().login(r,s),console.log("Updated auth store"),Wt(wn.USER_SIGNED_IN),r}catch(t){console.error("Login error:",t);let r="Failed to login";switch(t.code){case"auth/invalid-email":r="Invalid email format";break;case"auth/user-disabled":r="This account has been disabled";break;case"auth/user-not-found":r="No account found with this email";break;case"auth/wrong-password":r="Incorrect password";break;case"auth/too-many-requests":r="Too many failed login attempts. Please try again later.";break;default:r=t.message||"Failed to login"}throw Wt(wn.ERROR_OCCURRED,{error_message:r,error_code:t.code}),new Error(r)}},Xg=async()=>{try{const n=new xt;return n.setCustomParameters({prompt:"select_account",login_hint:"user@gmail.com"}),n.addScope("https://www.googleapis.com/auth/userinfo.email"),n.addScope("https://www.googleapis.com/auth/userinfo.profile"),await C0(Tn,n),null}catch(n){console.error("Google login error:",n);let e="Failed to login with Google";throw n.code==="auth/popup-closed-by-user"?e="Login was cancelled":n.code==="auth/popup-blocked"?e="Login popup was blocked. Please allow popups for this site.":n.code==="auth/cancelled-popup-request"&&(e="Another login attempt is in progress"),Wt(wn.ERROR_OCCURRED,{method:"google",error:e}),new Error(e)}},OA=async()=>{try{const n=await D0(Tn);if(n){const e=n.user,t=await e.getIdToken(),r=await vn(Ke(re,"users",e.uid));let s;return r.exists()?s=r.data():(s={id:e.uid,email:e.email,displayName:e.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date},e.photoURL&&(s.photoURL=e.photoURL),await nl(Ke(re,"users",s.id),s),Wt(wn.USER_SIGNED_UP,{method:"google"})),Lr.getState().login(s,t),Wt(wn.USER_SIGNED_IN,{method:"google"}),window.location.href="/dashboard",s}return null}catch(n){return console.error("Error handling redirect result:",n),null}},VA=async n=>{try{await Zv(Tn,n)}catch(e){throw Wt(wn.ERROR_OCCURRED,{error_message:e.message,error_code:e.code}),e}},MA=n=>o0(Tn,n);function Kt(){const[n,e]=j.useState(null),[t,r]=j.useState(!0),[s,i]=j.useState(null);return j.useEffect(()=>{const a=MA(async c=>{try{if(c){const u=await vn(Ke(re,"users",c.uid));if(u.exists()){const d=u.data();e(d)}else e(null)}else e(null)}catch(u){i(u)}finally{r(!1)}});return()=>a()},[]),{user:n,loading:t,error:s,isAuthenticated:!!n,isAdmin:(n==null?void 0:n.isAdmin)||!1}}function LA({title:n,titleId:e,...t},r){return j.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?j.createElement("title",{id:e},n):null,j.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const FA=j.forwardRef(LA);function UA({title:n,titleId:e,...t},r){return j.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?j.createElement("title",{id:e},n):null,j.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const BA=j.forwardRef(UA),$A=[{name:"Home",href:"/",public:!0},{name:"Submit Design",href:"/submit",public:!1},{name:"Vote",href:"/vote",public:!1},{name:"Winners",href:"/winners",public:!0}];function td(...n){return n.filter(Boolean).join(" ")}function qA(){const{user:n,isAuthenticated:e,logout:t}=Lr(),r=zt(),s=()=>{t(),r("/")},i=$A.filter(a=>a.public||e);return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(da,{as:"nav",className:"bg-white shadow",children:({open:a})=>l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex h-16 justify-between",children:[l.jsxs("div",{className:"flex",children:[l.jsx("div",{className:"flex flex-shrink-0 items-center",children:l.jsx(te,{to:"/",className:"text-xl font-bold text-primary-600",children:"KING Competition"})}),l.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[i.map(c=>l.jsx(te,{to:c.href,className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-gray-700",children:c.name},c.name)),(n==null?void 0:n.isAdmin)&&l.jsx(te,{to:"/admin",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-gray-700",children:"Admin"})]})]}),l.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:e?l.jsxs(es,{as:"div",className:"relative ml-3",children:[l.jsxs(es.Button,{className:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:[l.jsx("span",{className:"sr-only",children:"Open user menu"}),l.jsx("div",{className:"h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center",children:l.jsx("span",{className:"text-primary-800",children:n==null?void 0:n.email.charAt(0).toUpperCase()})})]}),l.jsx(zp,{as:j.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:l.jsxs(es.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[l.jsx(es.Item,{children:({active:c})=>l.jsx(te,{to:"/profile",className:td(c?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Profile"})}),l.jsx(es.Item,{children:({active:c})=>l.jsx("button",{onClick:s,className:td(c?"bg-gray-100":"","block w-full text-left px-4 py-2 text-sm text-gray-700"),children:"Sign out"})})]})})]}):l.jsxs("div",{className:"space-x-4",children:[l.jsx(te,{to:"/login",className:"text-gray-500 hover:text-gray-700",children:"Sign in"}),l.jsx(te,{to:"/register",className:"btn btn-primary",children:"Sign up"})]})}),l.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:l.jsxs(da.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500",children:[l.jsx("span",{className:"sr-only",children:"Open main menu"}),a?l.jsx(BA,{className:"block h-6 w-6","aria-hidden":"true"}):l.jsx(FA,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),l.jsxs(da.Panel,{className:"sm:hidden",children:[l.jsxs("div",{className:"space-y-1 pb-3 pt-2",children:[i.map(c=>l.jsx(te,{to:c.href,className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700",children:c.name},c.name)),(n==null?void 0:n.isAdmin)&&l.jsx(te,{to:"/admin",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700",children:"Admin"})]}),l.jsx("div",{className:"border-t border-gray-200 pb-3 pt-4",children:e?l.jsxs("div",{className:"space-y-1",children:[l.jsx(te,{to:"/profile",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Profile"}),l.jsx("button",{onClick:s,className:"block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign out"})]}):l.jsxs("div",{className:"space-y-1",children:[l.jsx(te,{to:"/login",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign in"}),l.jsx(te,{to:"/register",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign up"})]})})]})]})}),l.jsx("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",children:l.jsx(qp,{})})]})}function WA(){const[n,e]=j.useState(""),[t,r]=j.useState(""),[s,i]=j.useState(""),[a,c]=j.useState(!1),u=zt(),d=async y=>{if(y.preventDefault(),!n||!t){i("Please enter both email and password");return}try{c(!0),i(""),console.log("Attempting login with email:",n),await Yg(n,t),console.log("Login successful, navigating to dashboard"),u("/dashboard")}catch(g){console.error("Login form error:",g),i(g.message||"Failed to login")}finally{c(!1)}},m=async()=>{i("");try{console.log("Attempting Google login"),await Xg()}catch(y){console.error("Google login error:",y),i(y.message||"Failed to login with Google")}};return l.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-md w-full space-y-8",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),l.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",l.jsx(te,{to:"/register",className:"font-medium text-primary-600 hover:text-primary-500",children:"create a new account"})]})]}),l.jsxs("form",{className:"mt-8 space-y-6",onSubmit:d,children:[s&&l.jsx("div",{className:"rounded-md bg-red-50 p-4",children:l.jsx("div",{className:"text-sm text-red-700",children:s})}),l.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),l.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:y=>e(y.target.value)})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),l.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Password",value:t,onChange:y=>r(y.target.value)})]})]}),l.jsx("div",{className:"flex items-center justify-between",children:l.jsx("div",{className:"text-sm",children:l.jsx(te,{to:"/reset-password",className:"font-medium text-primary-600 hover:text-primary-500",children:"Forgot your password?"})})}),l.jsx("div",{children:l.jsx("button",{type:"submit",disabled:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:a?"Signing in...":"Sign in"})})]}),l.jsxs("div",{className:"mt-6",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-0 flex items-center",children:l.jsx("div",{className:"w-full border-t border-gray-300"})}),l.jsx("div",{className:"relative flex justify-center text-sm",children:l.jsx("span",{className:"px-2 bg-gray-50 text-gray-500",children:"Or continue with"})})]}),l.jsx("div",{className:"mt-6",children:l.jsxs("button",{onClick:m,disabled:a,className:"w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:[l.jsx("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:l.jsx("path",{fill:"currentColor",d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),"Sign in with Google"]})})]})]})})}function HA(){const[n,e]=j.useState(""),[t,r]=j.useState(""),[s,i]=j.useState(""),[a,c]=j.useState(""),[u,d]=j.useState(""),[m,y]=j.useState(!1),g=zt(),w=async A=>{if(A.preventDefault(),!n||!t||!s){d("Please fill out all required fields");return}if(t!==s){d("Passwords do not match");return}if(t.length<6){d("Password must be at least 6 characters long");return}try{y(!0),d(""),console.log("Attempting registration with email:",n);try{await Qg(n,t,a||void 0),console.log("Registration successful, navigating to dashboard"),g("/dashboard")}catch(_){console.error("Registration error:",_),_.message&&_.message.includes("already registered")?d("This email is already registered. Please log in instead."):d(_.message||"Failed to register")}}finally{y(!1)}},I=A=>{const{name:_,value:O}=A.target;switch(_){case"email":e(O);break;case"password":r(O);break;case"confirmPassword":i(O);break;case"displayName":c(O);break}};return l.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-md w-full space-y-8",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create your account"}),l.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",l.jsx(te,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"sign in to your account"})]})]}),l.jsxs("form",{className:"mt-8 space-y-6",onSubmit:w,children:[u&&l.jsx("div",{className:"rounded-md bg-red-50 p-4",children:l.jsx("div",{className:"text-sm text-red-700",children:u})}),l.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"display-name",className:"sr-only",children:"Display Name"}),l.jsx("input",{id:"display-name",name:"displayName",type:"text",autoComplete:"name",className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Display Name",value:a,onChange:I})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),l.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:I})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),l.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Password",value:t,onChange:I})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"confirm-password",className:"sr-only",children:"Confirm Password"}),l.jsx("input",{id:"confirm-password",name:"confirmPassword",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Confirm Password",value:s,onChange:I})]})]}),l.jsx("div",{children:l.jsx("button",{type:"submit",disabled:m,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",children:m?"Creating account...":"Create account"})})]})]})})}function zA(){const[n,e]=j.useState(""),[t,r]=j.useState(null),[s,i]=j.useState(!1),[a,c]=j.useState(!1),u=async d=>{d.preventDefault(),r(null),i(!1),c(!0);try{await VA(n),i(!0)}catch(m){r(m.message||"Failed to send reset email")}finally{c(!1)}};return l.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-md w-full space-y-8",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Reset your password"}),l.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",l.jsx(te,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"sign in to your account"})]})]}),l.jsxs("form",{className:"mt-8 space-y-6",onSubmit:u,children:[t&&l.jsx("div",{className:"rounded-md bg-red-50 p-4",children:l.jsx("div",{className:"text-sm text-red-700",children:t})}),s&&l.jsx("div",{className:"rounded-md bg-green-50 p-4",children:l.jsx("div",{className:"text-sm text-green-700",children:"Password reset email sent! Please check your inbox."})}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),l.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:d=>e(d.target.value)})]}),l.jsx("div",{children:l.jsx("button",{type:"submit",disabled:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:a?"Sending...":"Send reset link"})})]})]})})}function GA(){var c,u;const{user:n}=Kt(),[e,t]=j.useState(null),[r,s]=j.useState(!0),[i,a]=j.useState(null);return j.useEffect(()=>{(async()=>{if(n)try{const m=Ze(be(re,"entries"),yt("userId","==",n.id)),g=(await et(m)).docs.map(_=>({id:_.id,..._.data()}));let w=0,I=0,A=[];if(g.length>0){const _=Ze(be(re,"votes"),yt("entryId","in",g.map(N=>N.id)));A=(await et(_)).docs.map(N=>({id:N.id,...N.data()})),w=A.length,I=w>0?A.reduce((N,M)=>N+(M.rating||0),0)/w:0}t({totalEntries:g.length,totalVotes:w,averageRating:I,entries:g})}catch(m){a(m.message||"Failed to fetch user statistics")}finally{s(!1)}})()},[n]),r?l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):i?l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsx("div",{className:"rounded-md bg-red-50 p-4",children:l.jsx("div",{className:"text-sm text-red-700",children:i})})}):l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[l.jsxs("div",{className:"flex items-center space-x-4",children:[n!=null&&n.photoURL?l.jsx("img",{src:n.photoURL,alt:n.displayName||"User avatar",className:"h-16 w-16 rounded-full"}):l.jsx("div",{className:"h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center",children:l.jsx("span",{className:"text-2xl text-primary-600",children:((c=n==null?void 0:n.displayName)==null?void 0:c[0])||((u=n==null?void 0:n.email)==null?void 0:u[0])||"?"})}),l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:(n==null?void 0:n.displayName)||"User"}),l.jsx("p",{className:"text-gray-500",children:n==null?void 0:n.email})]})]}),l.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3",children:[l.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:l.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[l.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Entries"}),l.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.totalEntries)||0})]})}),l.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:l.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[l.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Votes Received"}),l.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.totalVotes)||0})]})}),l.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:l.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[l.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Average Rating"}),l.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.averageRating.toFixed(1))||"0.0"})]})})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Your Entries"}),l.jsx("div",{className:"mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:e==null?void 0:e.entries.map(d=>l.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:[l.jsx("img",{src:d.imageUrl,alt:d.title,className:"w-full h-48 object-cover"}),l.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[l.jsx("h3",{className:"text-lg font-medium text-gray-900",children:d.title}),d.description&&l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:d.description}),l.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[l.jsxs("div",{className:"text-sm text-gray-500",children:[d.voteCount," votes"]}),l.jsxs("div",{className:"text-sm font-medium text-primary-600",children:["Rating: ",d.voteCount>0?(d.voteCount/e.totalVotes*100).toFixed(1):"0.0","%"]})]})]})]},d.id))})]})]})})}const KA=async n=>{const e={...n,createdAt:ue.now(),updatedAt:ue.now(),voteCount:0,averageRating:0};return{id:(await Do(be(re,"entries"),e)).id,...e}},Mo=async n=>{try{console.log(`Fetching entries for tournament ${n}...`);const e=Ze(be(re,"entries"),yt("tournamentId","==",n)),r=(await et(e)).docs.map(s=>({id:s.id,...s.data()}));return r.sort((s,i)=>{const a=s.createdAt instanceof Date?s.createdAt:s.createdAt.toDate();return(i.createdAt instanceof Date?i.createdAt:i.createdAt.toDate()).getTime()-a.getTime()}),console.log(`Found ${r.length} entries for tournament ${n}`),r}catch(e){return console.error(`Error getting entries for tournament ${n}:`,e),[]}},QA=async(n,e)=>{try{console.log(`Fetching entries for user ${n} in tournament ${e}...`);const t=Ze(be(re,"entries"),yt("userId","==",n)),s=(await et(t)).docs.map(i=>({id:i.id,...i.data()})).filter(i=>i.tournamentId===e);return console.log(`Found ${s.length} entries for user ${n} in tournament ${e}`),s.sort((i,a)=>a.createdAt.toDate().getTime()-i.createdAt.toDate().getTime()),s}catch(t){return console.error(`Error getting entries for user ${n} in tournament ${e}:`,t),[]}},YA=async n=>{console.log("Creating vote with data:",n);try{const e=Ze(be(re,"votes"),yt("userId","==",n.userId),yt("entryId","==",n.entryId));if(!(await et(e)).empty)throw console.log("User already voted for this entry"),new Error("You have already voted for this entry");const r={...n,createdAt:ue.now()},s=Ke(re,"entries",n.entryId),i=await vn(s);if(!i.exists())throw console.error("Entry not found:",n.entryId),new Error("Entry does not exist");const a=i.data();console.log("Entry before update:",JSON.stringify(a,null,2));const c=a.voteCount||0,u=(a.averageRating||0)*c,d=c+1,m=u+n.rating,y=m/d;console.log("Vote calculation:",{currentVoteCount:c,currentTotalPoints:u,newVoteCount:d,newTotalPoints:m,newAverageRating:y,newRating:n.rating});const g=await Do(be(re,"votes"),r),w={voteCount:d,averageRating:y,updatedAt:ue.now()};await ko(s,w),console.log("Entry updated with new vote stats:",w);const I=await vn(s);return I.exists()&&console.log("Updated entry data:",JSON.stringify(I.data(),null,2)),{id:g.id,...r}}catch(e){throw console.error("Error in createVote:",e),e}},XA=async n=>{try{console.log(`Fetching votes for tournament ${n}...`);const e=Ze(be(re,"votes"),yt("tournamentId","==",n)),r=(await et(e)).docs.map(s=>({id:s.id,...s.data()}));return console.log(`Found ${r.length} votes for tournament ${n}`),r}catch(e){return console.error(`Error getting votes for tournament ${n}:`,e),[]}},JA=async(n,e)=>{try{console.log(`Fetching votes for user ${n} in tournament ${e}...`);const t=Ze(be(re,"votes"),yt("userId","==",n)),r=await et(t),s={};return r.docs.forEach(i=>{const a=i.data();a.tournamentId===e&&(s[a.entryId]=a.rating)}),console.log(`Found ${Object.keys(s).length} votes for user ${n} in tournament ${e}`),s}catch(t){return console.error(`Error getting votes for user ${n} in tournament ${e}:`,t),{}}},ZA=async(n,e,t)=>{try{const r=Tn.currentUser;if(!r)throw new Error("You must be logged in to vote");console.log(`Submitting vote for entry ${n} with rating ${e} in tournament ${t}`);const s=await YA({userId:r.uid,entryId:n,tournamentId:t,rating:e});console.log(`Vote created successfully for entry ${n}:`,s)}catch(r){throw console.error("Error submitting vote:",r),r}},eR=async(n,e)=>{const t=NT(qg,e);return await ST(t,n),await PT(t)},tR=async({title:n,description:e,image:t,userId:r,tournamentId:s})=>{try{const a=(await vn(Ke(re,"users",r))).data(),c=`entries/${s}/${r}/${Date.now()}_${t.name}`,u=await eR(t,c);return await KA({userId:r,tournamentId:s,title:n,description:e,imageUrl:u,userDisplayName:(a==null?void 0:a.displayName)||"Anonymous",userPhotoURL:(a==null?void 0:a.photoURL)||null,status:"approved"})}catch(i){throw console.error("Error submitting entry:",i),i}},xe=n=>n?n instanceof Date?n:n!=null&&n.toDate?n.toDate():new Date(n):new Date,oc=async()=>{try{console.log("Fetching all tournaments...");const e=(await et(be(re,"tournaments"))).docs.map(t=>{const r=t.data();return{...r,id:t.id,submissionPhaseStart:xe(r.submissionPhaseStart),submissionPhaseEnd:xe(r.submissionPhaseEnd),votingPhaseStart:xe(r.votingPhaseStart),votingPhaseEnd:xe(r.votingPhaseEnd),createdAt:xe(r.createdAt),updatedAt:xe(r.updatedAt)}});return e.sort((t,r)=>r.createdAt.getTime()-t.createdAt.getTime()),console.log(`Found ${e.length} tournaments`),e}catch(n){return console.error("Error getting tournaments:",n),[]}},Lo=async n=>{try{console.log(`Fetching tournament with ID ${n}...`);const e=await vn(Ke(re,"tournaments",n));if(!e.exists())return console.log(`Tournament with ID ${n} not found`),null;const t=e.data(),r={...t,id:e.id,submissionPhaseStart:xe(t.submissionPhaseStart),submissionPhaseEnd:xe(t.submissionPhaseEnd),votingPhaseStart:xe(t.votingPhaseStart),votingPhaseEnd:xe(t.votingPhaseEnd),createdAt:xe(t.createdAt),updatedAt:xe(t.updatedAt)};return console.log("Tournament found:",r),r}catch(e){throw console.error(`Error getting tournament with ID ${n}:`,e),e}},Ys=async()=>{try{const e=(await oc()).filter(r=>r.currentPhase==="submission"||r.currentPhase==="voting");if(e.length>0)return e.sort((r,s)=>s.createdAt.getTime()-r.createdAt.getTime()),e[0];console.log("No active tournaments found in 'tournaments' collection, checking legacy location");const t=await vn(Ke(re,"tournament","state"));if(t.exists()){console.log("Found tournament state in legacy location");const r=t.data(),s={...r,id:"state",tournamentId:"legacy",name:"Legacy Tournament",ownerId:"admin",submissionPhaseStart:xe(r.submissionPhaseStart),submissionPhaseEnd:xe(r.submissionPhaseEnd),votingPhaseStart:xe(r.votingPhaseStart),votingPhaseEnd:xe(r.votingPhaseEnd),createdAt:xe(r.createdAt||new Date),updatedAt:xe(r.updatedAt||new Date)};console.log("Migrating legacy tournament to new collection...");const i=await Do(be(re,"tournaments"),s);return{...s,id:i.id}}return console.log("No tournament state found"),null}catch(n){throw console.error("Error getting tournament state:",n),n}},sr=async n=>{try{if(!n.id)throw new Error("Tournament ID is required for updates");const e=n.id;console.log(`Updating tournament ${e} with:`,n);const{id:t,...r}=n;await ko(Ke(re,"tournaments",e),{...r,updatedAt:new Date}),console.log(`Tournament ${e} updated successfully`)}catch(e){throw console.error("Error updating tournament:",e),e}},Jg=async(n,e,t=7,r=7)=>{try{console.log(`Creating new tournament "${n}" for user ${e}`);const s=new Date,i=new Date(s.getTime()+t*24*60*60*1e3),a=new Date(i.getTime()+r*24*60*60*1e3),c={name:n,ownerId:e,tournamentId:`tournament_${Date.now()}`,currentPhase:"submission",submissionPhaseStart:s,submissionPhaseEnd:i,votingPhaseStart:i,votingPhaseEnd:a,maxEntriesPerUser:null,maxVotesPerUser:null,votingQuestion:"How would you rate this entry?",createdAt:s,updatedAt:s};console.log("Tournament data:",c);const u=await Do(be(re,"tournaments"),c);return await ko(Ke(re,"users",e),{isAdmin:!0,updatedAt:s}),console.log(`User ${e} has been granted admin rights as tournament creator`),{...c,id:u.id}}catch(s){throw console.error("Error creating tournament:",s),s}},nR=async()=>{try{console.log("Initializing tournament state...");const n=await Ys();return n?(console.log("Existing tournament found, returning it"),n):await Jg("Default Tournament","admin")}catch(n){throw console.error("Error initializing tournament state:",n),n}},Zg=6048e5,rR=864e5,Ai=43200,nd=1440,rd=Symbol.for("constructDateFrom");function Ht(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&rd in n?n[rd](e):n instanceof Date?new n.constructor(e):new Date(e)}function Ee(n,e){return Ht(e||n,n)}let sR={};function Xs(){return sR}function Os(n,e){var c,u,d,m;const t=Xs(),r=(e==null?void 0:e.weekStartsOn)??((u=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:u.weekStartsOn)??t.weekStartsOn??((m=(d=t.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,s=Ee(n,e==null?void 0:e.in),i=s.getDay(),a=(i<r?7:0)+i-r;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function ro(n,e){return Os(n,{...e,weekStartsOn:1})}function ep(n,e){const t=Ee(n,e==null?void 0:e.in),r=t.getFullYear(),s=Ht(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=ro(s),a=Ht(t,0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);const c=ro(a);return t.getTime()>=i.getTime()?r+1:t.getTime()>=c.getTime()?r:r-1}function so(n){const e=Ee(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Fo(n,...e){const t=Ht.bind(null,n||e.find(r=>typeof r=="object"));return e.map(t)}function sd(n,e){const t=Ee(n,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function iR(n,e,t){const[r,s]=Fo(t==null?void 0:t.in,n,e),i=sd(r),a=sd(s),c=+i-so(i),u=+a-so(a);return Math.round((c-u)/rR)}function oR(n,e){const t=ep(n,e),r=Ht(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),ro(r)}function Vi(n,e){const t=+Ee(n)-+Ee(e);return t<0?-1:t>0?1:t}function aR(n){return Ht(n,Date.now())}function cR(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function lR(n){return!(!cR(n)&&typeof n!="number"||isNaN(+Ee(n)))}function uR(n,e,t){const[r,s]=Fo(t==null?void 0:t.in,n,e),i=r.getFullYear()-s.getFullYear(),a=r.getMonth()-s.getMonth();return i*12+a}function hR(n){return e=>{const r=(n?Math[n]:Math.trunc)(e);return r===0?0:r}}function dR(n,e){return+Ee(n)-+Ee(e)}function fR(n,e){const t=Ee(n,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function mR(n,e){const t=Ee(n,e==null?void 0:e.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function gR(n,e){const t=Ee(n,e==null?void 0:e.in);return+fR(t,e)==+mR(t,e)}function pR(n,e,t){const[r,s,i]=Fo(t==null?void 0:t.in,n,n,e),a=Vi(s,i),c=Math.abs(uR(s,i));if(c<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-a*c);let u=Vi(s,i)===-a;gR(r)&&c===1&&Vi(r,i)===1&&(u=!1);const d=a*(c-+u);return d===0?0:d}function yR(n,e,t){const r=dR(n,e)/1e3;return hR(t==null?void 0:t.roundingMethod)(r)}function _R(n,e){const t=Ee(n,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const vR={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},wR=(n,e,t)=>{let r;const s=vR[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function Ca(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const xR={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},bR={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ER={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},TR={date:Ca({formats:xR,defaultWidth:"full"}),time:Ca({formats:bR,defaultWidth:"full"}),dateTime:Ca({formats:ER,defaultWidth:"full"})},IR={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},AR=(n,e,t,r)=>IR[n];function rs(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const a=n.defaultFormattingWidth||n.defaultWidth,c=t!=null&&t.width?String(t.width):a;s=n.formattingValues[c]||n.formattingValues[a]}else{const a=n.defaultWidth,c=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[c]||n.values[a]}const i=n.argumentCallback?n.argumentCallback(e):e;return s[i]}}const RR={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},SR={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},PR={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},NR={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},CR={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},kR={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},DR=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},jR={ordinalNumber:DR,era:rs({values:RR,defaultWidth:"wide"}),quarter:rs({values:SR,defaultWidth:"wide",argumentCallback:n=>n-1}),month:rs({values:PR,defaultWidth:"wide"}),day:rs({values:NR,defaultWidth:"wide"}),dayPeriod:rs({values:CR,defaultWidth:"wide",formattingValues:kR,defaultFormattingWidth:"wide"})};function ss(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(s);if(!i)return null;const a=i[0],c=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],u=Array.isArray(c)?VR(c,y=>y.test(a)):OR(c,y=>y.test(a));let d;d=n.valueCallback?n.valueCallback(u):u,d=t.valueCallback?t.valueCallback(d):d;const m=e.slice(a.length);return{value:d,rest:m}}}function OR(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function VR(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function MR(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],i=e.match(n.parsePattern);if(!i)return null;let a=n.valueCallback?n.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;const c=e.slice(s.length);return{value:a,rest:c}}}const LR=/^(\d+)(th|st|nd|rd)?/i,FR=/\d+/i,UR={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},BR={any:[/^b/i,/^(a|c)/i]},$R={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},qR={any:[/1/i,/2/i,/3/i,/4/i]},WR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},HR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},zR={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},GR={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},KR={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},QR={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},YR={ordinalNumber:MR({matchPattern:LR,parsePattern:FR,valueCallback:n=>parseInt(n,10)}),era:ss({matchPatterns:UR,defaultMatchWidth:"wide",parsePatterns:BR,defaultParseWidth:"any"}),quarter:ss({matchPatterns:$R,defaultMatchWidth:"wide",parsePatterns:qR,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ss({matchPatterns:WR,defaultMatchWidth:"wide",parsePatterns:HR,defaultParseWidth:"any"}),day:ss({matchPatterns:zR,defaultMatchWidth:"wide",parsePatterns:GR,defaultParseWidth:"any"}),dayPeriod:ss({matchPatterns:KR,defaultMatchWidth:"any",parsePatterns:QR,defaultParseWidth:"any"})},tp={code:"en-US",formatDistance:wR,formatLong:TR,formatRelative:AR,localize:jR,match:YR,options:{weekStartsOn:0,firstWeekContainsDate:1}};function XR(n,e){const t=Ee(n,e==null?void 0:e.in);return iR(t,_R(t))+1}function JR(n,e){const t=Ee(n,e==null?void 0:e.in),r=+ro(t)-+oR(t);return Math.round(r/Zg)+1}function np(n,e){var m,y,g,w;const t=Ee(n,e==null?void 0:e.in),r=t.getFullYear(),s=Xs(),i=(e==null?void 0:e.firstWeekContainsDate)??((y=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??s.firstWeekContainsDate??((w=(g=s.locale)==null?void 0:g.options)==null?void 0:w.firstWeekContainsDate)??1,a=Ht((e==null?void 0:e.in)||n,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const c=Os(a,e),u=Ht((e==null?void 0:e.in)||n,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const d=Os(u,e);return+t>=+c?r+1:+t>=+d?r:r-1}function ZR(n,e){var c,u,d,m;const t=Xs(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:u.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(d=t.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,s=np(n,e),i=Ht((e==null?void 0:e.in)||n,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),Os(i,e)}function eS(n,e){const t=Ee(n,e==null?void 0:e.in),r=+Os(t,e)-+ZR(t,e);return Math.round(r/Zg)+1}function se(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const en={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return se(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):se(t+1,2)},d(n,e){return se(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return se(n.getHours()%12||12,e.length)},H(n,e){return se(n.getHours(),e.length)},m(n,e){return se(n.getMinutes(),e.length)},s(n,e){return se(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return se(s,e.length)}},ir={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},id={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return en.y(n,e)},Y:function(n,e,t,r){const s=np(n,r),i=s>0?s:1-s;if(e==="YY"){const a=i%100;return se(a,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):se(i,e.length)},R:function(n,e){const t=ep(n);return se(t,e.length)},u:function(n,e){const t=n.getFullYear();return se(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return se(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return se(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return en.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return se(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=eS(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):se(s,e.length)},I:function(n,e,t){const r=JR(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):se(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):en.d(n,e)},D:function(n,e,t){const r=XR(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):se(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return se(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return se(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return se(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=ir.noon:r===0?s=ir.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=ir.evening:r>=12?s=ir.afternoon:r>=4?s=ir.morning:s=ir.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return en.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):en.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):se(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):se(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):en.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):en.s(n,e)},S:function(n,e){return en.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return ad(r);case"XXXX":case"XX":return kn(r);case"XXXXX":case"XXX":default:return kn(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return ad(r);case"xxxx":case"xx":return kn(r);case"xxxxx":case"xxx":default:return kn(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+od(r,":");case"OOOO":default:return"GMT"+kn(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+od(r,":");case"zzzz":default:return"GMT"+kn(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return se(r,e.length)},T:function(n,e,t){return se(+n,e.length)}};function od(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),i=r%60;return i===0?t+String(s):t+String(s)+e+se(i,2)}function ad(n,e){return n%60===0?(n>0?"-":"+")+se(Math.abs(n)/60,2):kn(n,e)}function kn(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=se(Math.trunc(r/60),2),i=se(r%60,2);return t+s+e+i}const cd=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},rp=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},tS=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return cd(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",cd(r,e)).replace("{{time}}",rp(s,e))},nS={p:rp,P:tS},rS=/^D+$/,sS=/^Y+$/,iS=["D","DD","YY","YYYY"];function oS(n){return rS.test(n)}function aS(n){return sS.test(n)}function cS(n,e,t){const r=lS(n,e,t);if(console.warn(r),iS.includes(n))throw new RangeError(r)}function lS(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const uS=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,hS=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dS=/^'([^]*?)'?$/,fS=/''/g,mS=/[a-zA-Z]/;function fs(n,e,t){var m,y,g,w;const r=Xs(),s=r.locale??tp,i=r.firstWeekContainsDate??((y=(m=r.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??1,a=r.weekStartsOn??((w=(g=r.locale)==null?void 0:g.options)==null?void 0:w.weekStartsOn)??0,c=Ee(n,t==null?void 0:t.in);if(!lR(c))throw new RangeError("Invalid time value");let u=e.match(hS).map(I=>{const A=I[0];if(A==="p"||A==="P"){const _=nS[A];return _(I,s.formatLong)}return I}).join("").match(uS).map(I=>{if(I==="''")return{isToken:!1,value:"'"};const A=I[0];if(A==="'")return{isToken:!1,value:gS(I)};if(id[A])return{isToken:!0,value:I};if(A.match(mS))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:I}});s.localize.preprocessor&&(u=s.localize.preprocessor(c,u));const d={firstWeekContainsDate:i,weekStartsOn:a,locale:s};return u.map(I=>{if(!I.isToken)return I.value;const A=I.value;(aS(A)||oS(A))&&cS(A,e,String(n));const _=id[A[0]];return _(c,A,s.localize,d)}).join("")}function gS(n){const e=n.match(dS);return e?e[1].replace(fS,"'"):n}function pS(n,e,t){const r=Xs(),s=(t==null?void 0:t.locale)??r.locale??tp,i=2520,a=Vi(n,e);if(isNaN(a))throw new RangeError("Invalid time value");const c=Object.assign({},t,{addSuffix:t==null?void 0:t.addSuffix,comparison:a}),[u,d]=Fo(t==null?void 0:t.in,...a>0?[e,n]:[n,e]),m=yR(d,u),y=(so(d)-so(u))/1e3,g=Math.round((m-y)/60);let w;if(g<2)return t!=null&&t.includeSeconds?m<5?s.formatDistance("lessThanXSeconds",5,c):m<10?s.formatDistance("lessThanXSeconds",10,c):m<20?s.formatDistance("lessThanXSeconds",20,c):m<40?s.formatDistance("halfAMinute",0,c):m<60?s.formatDistance("lessThanXMinutes",1,c):s.formatDistance("xMinutes",1,c):g===0?s.formatDistance("lessThanXMinutes",1,c):s.formatDistance("xMinutes",g,c);if(g<45)return s.formatDistance("xMinutes",g,c);if(g<90)return s.formatDistance("aboutXHours",1,c);if(g<nd){const I=Math.round(g/60);return s.formatDistance("aboutXHours",I,c)}else{if(g<i)return s.formatDistance("xDays",1,c);if(g<Ai){const I=Math.round(g/nd);return s.formatDistance("xDays",I,c)}else if(g<Ai*2)return w=Math.round(g/Ai),s.formatDistance("aboutXMonths",w,c)}if(w=pR(d,u),w<12){const I=Math.round(g/Ai);return s.formatDistance("xMonths",I,c)}else{const I=w%12,A=Math.trunc(w/12);return I<3?s.formatDistance("aboutXYears",A,c):I<9?s.formatDistance("overXYears",A,c):s.formatDistance("almostXYears",A+1,c)}}function dt(n,e){return pS(n,aR(n),e)}function yS(){const n=zt(),[e,t]=j.useState("tournaments"),[r,s]=j.useState(null),[i,a]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const m=await Ys();s(m)}catch(m){console.error("Error fetching tournament state:",m)}finally{a(!1)}})()},[]);const c=()=>{if(!r)return"Unknown";switch(r.currentPhase){case"submission":return"Submission Phase";case"voting":return"Voting Phase";case"completed":return"Completed";default:return"Unknown"}},u=()=>{if(!r)return"Unknown";const d=new Date;let m;if(r.currentPhase==="submission")m=r.submissionPhaseEnd;else if(r.currentPhase==="voting")m=r.votingPhaseEnd;else return"Tournament completed";const y=m.getTime()-d.getTime();if(y<=0)return"Ended";const g=Math.floor(y/(1e3*60*60*24)),w=Math.floor(y%(1e3*60*60*24)/(1e3*60*60));return`${g}d ${w}h remaining`};return l.jsx("div",{className:"min-h-screen bg-gray-100",children:l.jsx("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"px-4 py-6 sm:px-0",children:[l.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Admin Dashboard"}),l.jsx("div",{className:"border-b border-gray-200 mt-6",children:l.jsxs("nav",{className:"-mb-px flex space-x-8",children:[l.jsx("button",{onClick:()=>t("tournaments"),className:`${e==="tournaments"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Tournament Management"}),l.jsx("button",{onClick:()=>t("entries"),className:`${e==="entries"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Entries"}),l.jsx("button",{onClick:()=>t("users"),className:`${e==="users"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Users"})]})}),l.jsxs("div",{className:"mt-6",children:[e==="tournaments"&&l.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[l.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-6",children:"Tournament Management"}),i?l.jsx("div",{className:"flex justify-center py-4",children:l.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"})}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Current Phase"}),l.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:c()})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Status"}),l.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:u()})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Last Updated"}),l.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:r!=null&&r.updatedAt?fs(r.updatedAt,"PPp"):"Never"})]})]})}),l.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:l.jsx("button",{onClick:()=>n("/admin/settings"),className:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Manage Tournament Settings"})})]})]}),e==="entries"&&l.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[l.jsx("div",{className:"flex justify-between items-center mb-6",children:l.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Entry Management"})}),l.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:l.jsx("button",{onClick:()=>n("/admin/entries"),className:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Review Submissions"})})]}),e==="users"&&l.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[l.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-6",children:"Users"}),l.jsx("div",{className:"text-gray-500",children:"User management features coming soon."})]})]})]})})})}class _S extends j.Component{constructor(){super(...arguments);gu(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,r){console.error("Uncaught error:",t,r)}render(){var t;return this.state.hasError?this.props.fallback||l.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-md w-full space-y-8",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Something went wrong"}),l.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:((t=this.state.error)==null?void 0:t.message)||"An unexpected error occurred"})]}),l.jsxs("div",{className:"mt-8 space-y-6",children:[l.jsx("button",{onClick:()=>window.location.reload(),className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Reload Page"}),l.jsx("button",{onClick:()=>window.location.href="/",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Go to Home"})]})]})}):this.props.children}}function ld(){const{user:n}=Kt(),{tournamentId:e}=io(),t=zt(),[r,s]=j.useState(null),[i,a]=j.useState(!0),[c,u]=j.useState(!0),[d,m]=j.useState(null),[y,g]=j.useState(null),[w,I]=j.useState(""),[A,_]=j.useState({totalEntries:0,pendingEntries:0,approvedEntries:0,rejectedEntries:0,totalVotes:0,totalUsers:0}),O=e||"current";j.useEffect(()=>{(async()=>{try{await N(),await M()}catch(T){m(T.message||"An error occurred while fetching data")}})()},[O]),j.useEffect(()=>{(r==null?void 0:r.votingQuestion)!==void 0&&I(r.votingQuestion)},[r==null?void 0:r.votingQuestion]);const N=async()=>{try{a(!0);const v=await Lo(O);if(!v){m("Tournament not found");return}if(!(n!=null&&n.isAdmin)&&v.ownerId!==(n==null?void 0:n.id)){m("You do not have permission to edit this tournament");return}s(v)}catch(v){console.error("Error fetching tournament:",v),m(v.message||"Failed to fetch tournament")}finally{a(!1)}},M=async()=>{try{u(!0);const v=await Mo(O),T=v.filter(tt=>tt.status==="pending"||!tt.status).length,S=v.filter(tt=>tt.status==="approved").length,E=v.filter(tt=>tt.status==="rejected").length,at=await XA(O),In=Ze(be(re,"users")),Uo=await et(In);_({totalEntries:v.length,pendingEntries:T,approvedEntries:S,rejectedEntries:E,totalVotes:at.length,totalUsers:Uo.docs.length})}catch(v){console.error("Error fetching stats:",v)}finally{u(!1)}},U=async v=>{try{if(!r)return;m(null),g(null);const T=new Date;let S=r.submissionPhaseEnd||new Date,E=r.votingPhaseEnd||new Date;v==="submission"?(S=new Date(T.getTime()+7*24*60*60*1e3),E=new Date(S.getTime()+7*24*60*60*1e3)):v==="voting"&&v!==r.currentPhase&&(E=new Date(T.getTime()+7*24*60*60*1e3)),await sr({id:r.id,currentPhase:v,submissionPhaseEnd:S,votingPhaseEnd:E}),g(`Tournament phase updated to ${v}`),await N()}catch(T){console.error("Error updating tournament phase:",T),m(T.message||"Failed to update tournament phase")}},W=async(v,T,S)=>{try{if(!r)return;m(null),g(null);const E={id:r.id};E[`${v}Phase${T}`]=S,await sr(E),g(`${v} phase ${T.toLowerCase()} time updated`),await N()}catch(E){console.error(`Error updating ${v} phase ${T.toLowerCase()} time:`,E),m(E.message||`Failed to update ${v} phase ${T.toLowerCase()} time`)}},z=async v=>{try{if(!r)return;m(null),g(null);const T=v===""?null:parseInt(v);await sr({id:r.id,maxEntriesPerUser:T}),g("Entry limit updated successfully"),await N()}catch(T){console.error("Error updating entry limit:",T),m(T.message||"Failed to update entry limit")}},R=async v=>{try{if(!r)return;m(null),g(null);const T=v===""?null:parseInt(v);await sr({id:r.id,maxVotesPerUser:T}),g("Vote limit updated successfully"),await N()}catch(T){console.error("Error updating vote limit:",T),m(T.message||"Failed to update vote limit")}},x=async v=>{try{if(!r)return;m(null),g(null),await sr({id:r.id,votingQuestion:v}),g("Voting question updated successfully"),await N()}catch(T){console.error("Error updating voting question:",T),m(T.message||"Failed to update voting question")}},b=async v=>{try{if(!r)return;m(null),g(null),await sr({id:r.id,name:v}),g("Tournament name updated successfully"),await N()}catch(T){console.error("Error updating tournament name:",T),m(T.message||"Failed to update tournament name")}};return i?l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):r?l.jsxs("div",{className:"container mx-auto px-4 py-8",children:[l.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Tournament Settings"}),l.jsxs("p",{className:"text-gray-600 mb-8",children:["ID: ",r.id]}),d&&l.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4",children:d}),y&&l.jsx("div",{className:"bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4",children:y}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[l.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Tournament Details"}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Tournament Name"}),l.jsx("div",{className:"mt-1 flex rounded-md shadow-sm",children:l.jsx("input",{type:"text",id:"name",className:"focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300",value:r.name,onChange:v=>b(v.target.value)})}),l.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["Owner: ",r.ownerId===(n==null?void 0:n.id)?"You":r.ownerId]})]})]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[l.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Phase Management"}),l.jsxs("div",{className:"space-y-8",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Current Phase"}),l.jsxs("div",{className:"flex flex-wrap gap-4",children:[l.jsx("button",{onClick:()=>U("submission"),className:`px-4 py-2 rounded-md ${r.currentPhase==="submission"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Submission Phase"}),l.jsx("button",{onClick:()=>U("voting"),className:`px-4 py-2 rounded-md ${r.currentPhase==="voting"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Voting Phase"}),l.jsx("button",{onClick:()=>U("completed"),className:`px-4 py-2 rounded-md ${r.currentPhase==="completed"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Completed"})]}),l.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:[r.currentPhase==="submission"&&"Users can submit designs during this phase.",r.currentPhase==="voting"&&"Submissions are closed. Users can vote on designs during this phase.",r.currentPhase==="completed"&&"The tournament is over. No new submissions or votes are accepted."]})]}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Phase Timing"}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-md font-medium text-gray-700 mb-2",children:"Submission Phase"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"submissionStart",className:"block text-sm font-medium text-gray-700",children:"Start Date"}),l.jsx("input",{type:"datetime-local",id:"submissionStart",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:fs(r.submissionPhaseStart,"yyyy-MM-dd'T'HH:mm"),onChange:v=>W("submission","Start",new Date(v.target.value))})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"submissionEnd",className:"block text-sm font-medium text-gray-700",children:"End Date"}),l.jsx("input",{type:"datetime-local",id:"submissionEnd",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:fs(r.submissionPhaseEnd,"yyyy-MM-dd'T'HH:mm"),onChange:v=>W("submission","End",new Date(v.target.value))})]})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-md font-medium text-gray-700 mb-2",children:"Voting Phase"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"votingStart",className:"block text-sm font-medium text-gray-700",children:"Start Date"}),l.jsx("input",{type:"datetime-local",id:"votingStart",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:fs(r.votingPhaseStart,"yyyy-MM-dd'T'HH:mm"),onChange:v=>W("voting","Start",new Date(v.target.value))})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"votingEnd",className:"block text-sm font-medium text-gray-700",children:"End Date"}),l.jsx("input",{type:"datetime-local",id:"votingEnd",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:fs(r.votingPhaseEnd,"yyyy-MM-dd'T'HH:mm"),onChange:v=>W("voting","End",new Date(v.target.value))})]})]})]})]})]})]})]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[l.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Entry & Voting Limits"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"maxEntries",className:"block text-sm font-medium text-gray-700",children:"Maximum Entries per User"}),l.jsxs("div",{className:"mt-1",children:[l.jsx("input",{type:"number",id:"maxEntries",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:r.maxEntriesPerUser===null?"":r.maxEntriesPerUser,onChange:v=>z(v.target.value),min:"1",placeholder:"Leave empty for unlimited"}),l.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Leave empty for unlimited entries"})]})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"maxVotes",className:"block text-sm font-medium text-gray-700",children:"Maximum Votes per User"}),l.jsxs("div",{className:"mt-1",children:[l.jsx("input",{type:"number",id:"maxVotes",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:r.maxVotesPerUser===null?"":r.maxVotesPerUser,onChange:v=>R(v.target.value),min:"1",placeholder:"Leave empty for unlimited"}),l.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Leave empty for unlimited votes"})]})]}),l.jsxs("div",{className:"md:col-span-2",children:[l.jsx("label",{htmlFor:"votingQuestion",className:"block text-sm font-medium text-gray-700",children:"Voting Question"}),l.jsxs("div",{className:"mt-1",children:[l.jsx("input",{type:"text",id:"votingQuestion",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:w,onChange:v=>I(v.target.value),placeholder:"How would you rate this entry?"}),l.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"This question will be displayed above the voting scale"})]}),l.jsx("div",{className:"mt-2",children:l.jsx("button",{onClick:()=>x(w),className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Update Voting Question"})})]})]})]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[l.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Tournament Statistics"}),c?l.jsxs("div",{className:"animate-pulse py-4",children:[l.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/4 mb-4"}),l.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2 mb-4"}),l.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/3"})]}):l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[l.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[l.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Entries"}),l.jsx("p",{className:"text-3xl font-bold",children:A.totalEntries}),l.jsxs("div",{className:"mt-2 text-sm text-gray-500",children:[l.jsxs("div",{children:["Pending: ",A.pendingEntries]}),l.jsxs("div",{children:["Approved: ",A.approvedEntries]}),l.jsxs("div",{children:["Rejected: ",A.rejectedEntries]})]})]}),l.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[l.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Votes"}),l.jsx("p",{className:"text-3xl font-bold",children:A.totalVotes}),l.jsx("div",{className:"mt-2 text-sm text-gray-500",children:l.jsxs("div",{children:["Avg. per entry: ",A.totalEntries>0?(A.totalVotes/A.totalEntries).toFixed(1):"0"]})})]}),l.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[l.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Users"}),l.jsx("p",{className:"text-3xl font-bold",children:A.totalUsers}),l.jsx("div",{className:"mt-2 text-sm text-gray-500",children:l.jsxs("div",{children:["Contributors: ",new Set([...entries,...votes].map(v=>v.userId)).size]})})]})]})]})]}):l.jsx("div",{className:"container mx-auto px-4 py-8",children:l.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-md p-4",children:[l.jsx("p",{className:"text-red-700",children:d||"Tournament not found"}),l.jsx("button",{className:"mt-4 text-primary-600 hover:text-primary-700",onClick:()=>t("/"),children:"Return to Home"})]})})}function ud(){const[n,e]=j.useState([]),[t,r]=j.useState(!0),[s,i]=j.useState(null),[a,c]=j.useState(null),[u,d]=j.useState("all");j.useEffect(()=>{m()},[u]);const m=async()=>{try{r(!0),i(null);let g;u==="all"?g=Ze(be(re,"entries"),Ds("createdAt","desc")):g=Ze(be(re,"entries"),yt("status","==",u),Ds("createdAt","desc"));const I=(await et(g)).docs.map(A=>({id:A.id,...A.data(),status:A.data().status||"pending"}));e(I)}catch(g){console.error("Error fetching entries:",g),i(g.message||"Failed to load entries")}finally{r(!1)}},y=async(g,w)=>{try{c(null),i(null);const I=Ke(re,"entries",g);await ko(I,{status:w}),e(n.map(A=>A.id===g?{...A,status:w}:A)),c(`Entry status updated to ${w}`)}catch(I){console.error("Error updating entry status:",I),i(I.message||"Failed to update entry status")}};return l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6",children:[l.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Manage Entries"}),l.jsx("div",{className:"mt-3 sm:mt-0",children:l.jsxs("div",{className:"flex rounded-md shadow-sm",children:[l.jsx("button",{onClick:()=>d("all"),className:`px-4 py-2 text-sm font-medium rounded-l-md ${u==="all"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`,children:"All"}),l.jsx("button",{onClick:()=>d("pending"),className:`px-4 py-2 text-sm font-medium ${u==="pending"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"}`,children:"Pending"}),l.jsx("button",{onClick:()=>d("approved"),className:`px-4 py-2 text-sm font-medium ${u==="approved"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"}`,children:"Approved"}),l.jsx("button",{onClick:()=>d("rejected"),className:`px-4 py-2 text-sm font-medium rounded-r-md ${u==="rejected"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`,children:"Rejected"})]})})]}),s&&l.jsx("div",{className:"mb-4 p-4 bg-red-50 rounded-md",children:l.jsx("p",{className:"text-sm text-red-700",children:s})}),a&&l.jsx("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:l.jsx("p",{className:"text-sm text-green-700",children:a})}),t?l.jsx("div",{className:"flex justify-center py-12",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):n.length===0?l.jsx("div",{className:"text-center py-12",children:l.jsx("p",{className:"text-gray-500",children:"No entries found."})}):l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[l.jsx("thead",{className:"bg-gray-50",children:l.jsxs("tr",{children:[l.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Image"}),l.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Title"}),l.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Submitted By"}),l.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),l.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),l.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:n.map(g=>l.jsxs("tr",{children:[l.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:l.jsx("div",{className:"h-20 w-20 bg-gray-100 rounded overflow-hidden",children:l.jsx("img",{src:g.imageUrl,alt:g.title,className:"h-full w-full object-cover"})})}),l.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[l.jsx("div",{className:"text-sm font-medium text-gray-900",children:g.title}),l.jsx("div",{className:"text-sm text-gray-500 max-w-xs truncate",children:g.description})]}),l.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[l.jsx("div",{className:"text-sm text-gray-900",children:g.userDisplayName||"Unknown User"}),l.jsx("div",{className:"text-sm text-gray-500",children:g.userId})]}),l.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:l.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${g.status==="approved"?"bg-green-100 text-green-800":g.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:g.status})}),l.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:l.jsxs("div",{className:"flex space-x-2",children:[l.jsx("button",{onClick:()=>y(g.id,"approved"),disabled:g.status==="approved",className:`${g.status==="approved"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-green-50 text-green-700 hover:bg-green-100"} px-3 py-1 rounded-md text-sm`,children:"Approve"}),l.jsx("button",{onClick:()=>y(g.id,"rejected"),disabled:g.status==="rejected",className:`${g.status==="rejected"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-red-50 text-red-700 hover:bg-red-100"} px-3 py-1 rounded-md text-sm`,children:"Reject"}),l.jsx("button",{onClick:()=>y(g.id,"pending"),disabled:g.status==="pending",className:`${g.status==="pending"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-yellow-50 text-yellow-700 hover:bg-yellow-100"} px-3 py-1 rounded-md text-sm`,children:"Pending"})]})})]},g.id))})]})})]})})}function sp(){const{user:n}=Lr(),e=zt(),[t,r]=j.useState(""),[s,i]=j.useState(7),[a,c]=j.useState(7),[u,d]=j.useState(null),[m,y]=j.useState(!1),[g,w]=j.useState(!1),I=async A=>{if(A.preventDefault(),!n){d("You must be logged in to create a tournament");return}if(!t.trim()){d("Tournament name is required");return}try{y(!0),d(null);const _=await Jg(t,n.id,s,a);console.log("Tournament created:",_),w(!0),setTimeout(()=>{e(`/admin/tournament/${_.id}/settings`)},1500)}catch(_){console.error("Error creating tournament:",_),d(_.message||"Failed to create tournament")}finally{y(!1)}};return l.jsx("div",{className:"max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden",children:l.jsxs("div",{className:"px-6 py-4",children:[l.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Create New Tournament"}),u&&l.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4",children:u}),g&&l.jsx("div",{className:"bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4",children:"Tournament created successfully! Redirecting to settings..."}),l.jsxs("form",{onSubmit:I,children:[l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{htmlFor:"name",className:"block text-gray-700 font-medium mb-2",children:"Tournament Name"}),l.jsx("input",{type:"text",id:"name",value:t,onChange:A=>r(A.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"Enter tournament name",disabled:m||g})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{htmlFor:"submissionDays",className:"block text-gray-700 font-medium mb-2",children:"Submission Phase Duration (days)"}),l.jsx("input",{type:"number",id:"submissionDays",value:s,onChange:A=>i(parseInt(A.target.value,10)),min:1,max:30,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",disabled:m||g})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{htmlFor:"votingDays",className:"block text-gray-700 font-medium mb-2",children:"Voting Phase Duration (days)"}),l.jsx("input",{type:"number",id:"votingDays",value:a,onChange:A=>c(parseInt(A.target.value,10)),min:1,max:30,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",disabled:m||g})]}),l.jsx("div",{className:"mt-6",children:l.jsx("button",{type:"submit",className:"w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",disabled:m||g,children:m?"Creating...":"Create Tournament"})})]})]})})}function vS(){const{user:n}=Kt(),[e,t]=j.useState([]),[r,s]=j.useState([]),[i,a]=j.useState(!0),[c,u]=j.useState(!1),[d,m]=j.useState(null);j.useEffect(()=>{(async()=>{try{a(!0),m(null),console.log("Fetching tournaments for HomePage...");const w=await oc();if(s(w),w.length===0){console.log("No tournaments found, initializing default tournament..."),await nR();const I=await oc();s(I)}if(w.length>0){const I=w.find(A=>A.currentPhase==="submission"||A.currentPhase==="voting");if(I){console.log(`Fetching recent entries for showcase tournament ${I.id}...`);const A=await Mo(I.id);t(A.slice(0,6))}}}catch(w){console.error("Error fetching data:",w),m("Failed to load tournaments. Please try refreshing the page.")}finally{a(!1)}})()},[]);const y=r.filter(g=>g.currentPhase==="submission"||g.currentPhase==="voting"||g.currentPhase==="completed");return i?l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):d?l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 mb-6",children:l.jsxs("div",{className:"flex",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),l.jsx("div",{className:"ml-3",children:l.jsx("p",{className:"text-sm text-red-700",children:d})})]})}),l.jsx("button",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>window.location.reload(),children:"Refresh Page"})]}):l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(n==null?void 0:n.isAdmin)&&l.jsxs("div",{className:"mb-8 bg-white shadow rounded-lg p-4",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Admin Quick Links"}),l.jsxs("div",{className:"flex space-x-4",children:[l.jsx(te,{to:"/admin",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Admin Dashboard"}),l.jsx(te,{to:"/admin/entries",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Manage Entries"}),l.jsx(te,{to:"/admin/settings",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Tournament Settings"})]})]}),l.jsxs("div",{className:"text-center mb-12",children:[l.jsx("h1",{className:"text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl",children:"King Ideation Tournament Platform"}),l.jsx("p",{className:"mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",children:n?l.jsx(l.Fragment,{children:"Join an existing tournament or create your own."}):l.jsx(l.Fragment,{children:"Start by creating an account and then you can submit your designs or create your own tournament."})}),n?l.jsx("div",{className:"mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8",children:l.jsx("button",{onClick:()=>u(!c),className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10",children:c?"Hide Form":"Create Your Tournament"})}):l.jsx("div",{className:"mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8",children:l.jsx("div",{className:"rounded-md shadow",children:l.jsx(te,{to:"/register",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10",children:"Get Started"})})})]}),c&&n&&l.jsx("div",{className:"mb-12",children:l.jsx(sp,{})}),y.length>0&&l.jsxs("div",{className:"mb-12",children:[l.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Active Tournaments"}),l.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:y.map(g=>l.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:l.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[l.jsx("h3",{className:"text-lg font-medium text-gray-900",children:g.name}),l.jsxs("div",{className:"mt-4 flex flex-col space-y-2",children:[l.jsxs("div",{className:"text-sm text-gray-500",children:["Phase: ",l.jsx("span",{className:"font-medium capitalize",children:g.currentPhase})]}),g.currentPhase==="submission"&&l.jsxs("div",{className:"text-sm text-gray-500",children:["Submission ends: ",l.jsx("span",{className:"font-medium",children:dt(g.submissionPhaseEnd,{addSuffix:!0})})]}),g.currentPhase==="voting"&&l.jsxs("div",{className:"text-sm text-gray-500",children:["Voting ends: ",l.jsx("span",{className:"font-medium",children:dt(g.votingPhaseEnd,{addSuffix:!0})})]})]}),l.jsxs("div",{className:"mt-6 flex space-x-3",children:[g.currentPhase==="submission"&&l.jsx(te,{to:`/tournament/${g.id}/submit`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Submit Design"}),g.currentPhase==="voting"&&l.jsx(te,{to:`/tournament/${g.id}/vote`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Vote Now"}),g.currentPhase==="completed"&&l.jsx(te,{to:`/tournament/${g.id}/results`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"View Results"}),(g.ownerId===(n==null?void 0:n.id)||(n==null?void 0:n.isAdmin))&&l.jsx(te,{to:`/admin/tournament/${g.id}/settings`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Manage"})]})]})},g.id))})]}),e.length>0&&l.jsxs("div",{children:[l.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Recent Entries"}),l.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:e.map(g=>l.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:[g.imageUrl&&l.jsx("img",{src:g.imageUrl,alt:g.title,className:"w-full h-48 object-cover"}),l.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[l.jsx("h3",{className:"text-lg font-medium text-gray-900",children:g.title}),g.description&&l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:g.description}),l.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[l.jsxs("div",{className:"text-sm text-gray-500",children:[g.voteCount||0," votes"]}),l.jsxs("div",{className:"text-sm text-gray-500",children:["Submitted ",dt(g.createdAt instanceof Date?g.createdAt:g.createdAt.toDate(),{addSuffix:!0})]})]})]})]},g.id))})]})]})}function wS(){var I,A,_,O;const{user:n}=Kt(),[e,t]=j.useState([]),[r,s]=j.useState(0),[i,a]=j.useState(null),[c,u]=j.useState(!0),[d,m]=j.useState(null);j.useEffect(()=>{n&&(g(),w(),y())},[n]);const y=async()=>{try{const N=await Ys();a(N)}catch(N){console.error("Error fetching tournament state:",N)}},g=async()=>{try{const N=Ze(be(re,"entries"),yt("userId","==",n.id),Ds("createdAt","desc")),U=(await et(N)).docs.map(W=>({id:W.id,...W.data()}));t(U)}catch(N){console.error("Error fetching user entries:",N),m(N.message||"Failed to load your submissions.")}finally{u(!1)}},w=async()=>{try{const N=Ze(be(re,"votes"),yt("userId","==",n.id)),U=(await et(N)).size;s(Math.max(0,10-U))}catch(N){console.error("Error fetching votes:",N)}};return c?l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),d&&l.jsx("div",{className:"mt-4 rounded-md bg-red-50 p-4",children:l.jsx("div",{className:"text-sm text-red-700",children:d})}),l.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2",children:[l.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Tournament Status"}),i?l.jsxs("div",{children:[l.jsx("div",{className:"mb-4",children:l.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:i.currentPhase==="submission"?"Submission Phase":i.currentPhase==="voting"?"Voting Phase":"Completed"})}),i.currentPhase==="submission"&&l.jsxs("div",{className:"text-sm text-gray-500",children:[l.jsx("p",{className:"mb-1",children:"Submission deadline:"}),l.jsx("p",{className:"font-medium text-gray-900",children:dt(i.submissionPhaseEnd,{addSuffix:!0})})]}),i.currentPhase==="voting"&&l.jsxs("div",{className:"text-sm text-gray-500",children:[l.jsx("p",{className:"mb-1",children:"Voting ends:"}),l.jsx("p",{className:"font-medium text-gray-900",children:dt(i.votingPhaseEnd,{addSuffix:!0})}),l.jsx("p",{className:"mt-4 mb-1",children:"Your remaining votes:"}),l.jsxs("p",{className:"font-medium text-gray-900",children:[r," of 10"]})]}),l.jsxs("div",{className:"mt-6",children:[i.currentPhase==="submission"&&l.jsx(te,{to:"/submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Submit a Design"}),i.currentPhase==="voting"&&l.jsx(te,{to:"/vote",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Vote on Designs"}),i.currentPhase==="completed"&&l.jsx(te,{to:"/winners",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"View Winners"})]})]}):l.jsx("p",{className:"text-gray-500",children:"Loading tournament information..."})]}),l.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Your Profile"}),l.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[n!=null&&n.photoURL?l.jsx("img",{src:n.photoURL,alt:n.displayName||"User avatar",className:"h-16 w-16 rounded-full"}):l.jsx("div",{className:"h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center",children:l.jsx("span",{className:"text-2xl font-medium text-primary-600",children:((A=(I=n==null?void 0:n.displayName)==null?void 0:I[0])==null?void 0:A.toUpperCase())||((O=(_=n==null?void 0:n.email)==null?void 0:_[0])==null?void 0:O.toUpperCase())||"?"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-md font-medium text-gray-900",children:(n==null?void 0:n.displayName)||"User"}),l.jsx("p",{className:"text-sm text-gray-500",children:n==null?void 0:n.email})]})]}),l.jsx(te,{to:"/profile",className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Full Profile"})]})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Your Submissions"}),e.length>0?l.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:e.map(N=>l.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[l.jsxs("div",{className:"relative",children:[l.jsx("img",{src:N.imageUrl,alt:N.title,className:"w-full h-48 object-contain bg-gray-50"}),l.jsx("div",{className:`
                    absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full
                    ${N.status==="approved"?"bg-green-100 text-green-800":N.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}
                  `,children:N.status==="approved"?"Approved":N.status==="rejected"?"Rejected":"Pending"})]}),l.jsxs("div",{className:"p-4",children:[l.jsx("h3",{className:"text-lg font-medium text-gray-900",children:N.title}),N.description&&l.jsx("p",{className:"mt-1 text-sm text-gray-500",children:N.description}),l.jsxs("div",{className:"mt-4 flex items-center justify-between text-sm",children:[l.jsxs("div",{className:"text-gray-500",children:["Submitted ",dt(N.createdAt.toDate(),{addSuffix:!0})]}),(i==null?void 0:i.currentPhase)!=="submission"&&N.status==="approved"&&l.jsxs("div",{className:"flex items-center",children:[l.jsx("svg",{className:"h-4 w-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:l.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),l.jsxs("span",{className:"ml-1 text-gray-600",children:[N.voteCount," votes"]})]})]})]})]},N.id))}):l.jsxs("div",{className:"bg-white shadow rounded-lg p-10 text-center",children:[l.jsx("p",{className:"text-gray-500",children:"You haven't submitted any designs yet."}),(i==null?void 0:i.currentPhase)==="submission"&&l.jsx("div",{className:"mt-4",children:l.jsx(te,{to:"/submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Submit Your First Design"})})]})]})]})}function hd(){const{user:n,loading:e}=Kt(),{tournamentId:t}=io(),r=zt(),[s,i]=j.useState(""),[a,c]=j.useState(""),[u,d]=j.useState(null),[m,y]=j.useState(null),[g,w]=j.useState(!1),[I,A]=j.useState(0),[_,O]=j.useState(null),[N,M]=j.useState([]),[U,W]=j.useState(!0),z=j.useRef(null),R=t||"current";j.useEffect(()=>{if(!e&&!n){console.log("User not authenticated, redirecting to login"),r("/login");return}n&&(async()=>{try{W(!0);const S=await Lo(R);if(!S){y("Tournament not found"),W(!1);return}if(S.currentPhase!=="submission"){y("This tournament is not currently accepting submissions"),W(!1);return}if(O(S),n){const E=await QA(n.id,R);M(E),S.maxEntriesPerUser!==null&&E.length>=S.maxEntriesPerUser&&y(`You have reached the maximum number of entries (${S.maxEntriesPerUser}) for this tournament`)}}catch(S){console.error("Error fetching data:",S),y(S.message||"Failed to load tournament data")}finally{W(!1)}})()},[n,e,r,R]);const x=async T=>{if(T.preventDefault(),!n){y("You must be logged in to submit a design"),r("/login");return}if(!s.trim()){y("Please enter a title for your design");return}if(!u){y("Please upload an image of your design");return}if((_==null?void 0:_.maxEntriesPerUser)!==null&&N.length>=_.maxEntriesPerUser){y(`You have reached the maximum number of entries (${_.maxEntriesPerUser}) for this tournament`);return}try{y(null),w(!0);const S=E=>{A(E),console.log(`Upload progress: ${E.toFixed(2)}%`)};await tR({title:s,description:a.trim(),image:u,userId:n.id,tournamentId:R}),console.log("Design submitted successfully"),Wt("design_submitted",{title:s,tournamentId:R}),r(t?`/tournament/${t}`:"/dashboard")}catch(S){console.error("Submit error:",S),y(S.message||"Failed to submit design. Please try again."),w(!1)}},b=T=>{if(T.target.files&&T.target.files[0]){const S=T.target.files[0];if(!S.type.startsWith("image/")){y("Please upload an image file (JPEG, PNG, etc.)");return}if(S.size>5*1024*1024){y("Image size must be less than 5MB");return}d(S),y(null)}};if(U)return l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})});const v=(_==null?void 0:_.maxEntriesPerUser)===null?"Unlimited":(_==null?void 0:_.maxEntriesPerUser)-N.length;return l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[l.jsx("div",{className:"md:col-span-1",children:l.jsxs("div",{className:"px-4 sm:px-0",children:[l.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Submit Your Design"}),l.jsxs("p",{className:"mt-1 text-sm text-gray-600",children:["Submit your design for ",(_==null?void 0:_.name)||"the current competition",". Please make sure your image clearly shows your concept."]}),_&&l.jsxs("div",{className:"mt-4",children:[l.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Tournament Details"}),l.jsxs("p",{className:"text-sm text-gray-600",children:["Submission Phase Ends: ",_.submissionPhaseEnd.toLocaleDateString()]}),l.jsxs("p",{className:"text-sm text-gray-600",children:["Your Entries: ",N.length," / ",_.maxEntriesPerUser===null?"∞":_.maxEntriesPerUser]}),l.jsxs("p",{className:"text-sm text-gray-600",children:["Remaining Entries: ",v]})]})]})}),l.jsx("div",{className:"mt-5 md:mt-0 md:col-span-2",children:l.jsx("form",{onSubmit:x,children:l.jsxs("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[l.jsxs("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:[m&&l.jsx("div",{className:"rounded-md bg-red-50 p-4",children:l.jsx("div",{className:"text-sm text-red-700",children:m})}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),l.jsx("div",{className:"mt-1",children:l.jsx("input",{type:"text",id:"title",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:s,onChange:T=>i(T.target.value),required:!0,disabled:g||(_==null?void 0:_.maxEntriesPerUser)!==null&&N.length>=(_==null?void 0:_.maxEntriesPerUser)})})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description (optional)"}),l.jsx("div",{className:"mt-1",children:l.jsx("textarea",{id:"description",rows:3,className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:a,onChange:T=>c(T.target.value),disabled:g||(_==null?void 0:_.maxEntriesPerUser)!==null&&N.length>=(_==null?void 0:_.maxEntriesPerUser)})})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Design Image"}),l.jsxs("div",{className:"mt-1 flex items-center",children:[l.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:()=>{var T;return(T=z.current)==null?void 0:T.click()},disabled:g||(_==null?void 0:_.maxEntriesPerUser)!==null&&N.length>=(_==null?void 0:_.maxEntriesPerUser),children:"Choose file"}),l.jsx("input",{type:"file",ref:z,className:"hidden",accept:"image/*",onChange:b,disabled:g||(_==null?void 0:_.maxEntriesPerUser)!==null&&N.length>=(_==null?void 0:_.maxEntriesPerUser)}),l.jsx("span",{className:"ml-2 text-sm text-gray-500",children:u?u.name:"No file chosen"})]}),u&&l.jsx("div",{className:"mt-2",children:l.jsx("img",{src:URL.createObjectURL(u),alt:"Preview",className:"h-40 object-contain"})})]}),g&&l.jsx("div",{children:l.jsxs("div",{className:"relative pt-1",children:[l.jsxs("div",{className:"flex mb-2 items-center justify-between",children:[l.jsx("div",{children:l.jsx("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200",children:I<100?"Uploading":"Processing"})}),l.jsx("div",{className:"text-right",children:l.jsxs("span",{className:"text-xs font-semibold inline-block text-primary-600",children:[Math.round(I),"%"]})})]}),l.jsx("div",{className:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200",children:l.jsx("div",{style:{width:`${I}%`},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500 transition-all duration-300"})})]})})]}),l.jsx("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:l.jsx("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",disabled:g||!u||!s.trim()||(_==null?void 0:_.maxEntriesPerUser)!==null&&N.length>=(_==null?void 0:_.maxEntriesPerUser),children:g?"Submitting...":"Submit"})})]})})})]})})}function xS({entryId:n,onVote:e,currentRating:t,tournamentState:r}){const[s,i]=rt.useState(null),[a,c]=rt.useState(!r),[u,d]=rt.useState(null),[m,y]=rt.useState("Rate this design:");if(rt.useEffect(()=>{if(r){console.log("Tournament state from props:",r),console.log("Voting question from props:",r.votingQuestion),i(r),r.votingQuestion&&y(r.votingQuestion),c(!1);return}(async()=>{try{const I=await Ys();console.log("Fetched tournament state:",I),console.log("Fetched voting question:",I==null?void 0:I.votingQuestion),i(I),I!=null&&I.votingQuestion&&y(I.votingQuestion)}catch(I){d("Failed to load tournament settings"),console.error("Error fetching tournament state:",I)}finally{c(!1)}})()},[r]),a)return l.jsx("div",{className:"animate-pulse",children:"Loading voting options..."});if(u)return l.jsx("div",{className:"text-red-500",children:u});const g=t!==void 0;return l.jsxs("div",{className:"space-y-4",children:[l.jsx("p",{className:"text-lg font-medium text-gray-900",children:m}),l.jsx("div",{className:"flex items-center space-x-4",children:[1,2,3,4,5].map(w=>l.jsx("button",{onClick:()=>!g&&e(w),disabled:g,className:`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors
              ${t===w?"bg-indigo-600 text-white":g?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,title:g?"You've already voted for this entry":`Rate this entry ${w}/5`,children:w},w))}),g&&l.jsx("p",{className:"text-sm text-gray-500",children:"You've already rated this entry"})]})}function dd(){const{tournamentId:n}=io(),{user:e}=Lr(),t=zt(),[r,s]=rt.useState([]),[i,a]=rt.useState(null),[c,u]=rt.useState({}),[d,m]=rt.useState(!0),[y,g]=rt.useState(null),w=n||"current",I=async()=>{try{m(!0),console.log(`Fetching tournament state and entries for tournament ${w}...`);const _=await Lo(w);if(!_){g("Tournament not found"),m(!1);return}if(console.log("Tournament state:",_),console.log("Voting question from tournament:",_==null?void 0:_.votingQuestion),a(_),_.currentPhase!=="voting"){g("This tournament is not currently in the voting phase"),m(!1);return}const O=await Mo(w);if(console.log("Entries:",O),s(O),e!=null&&e.id){const N=await JA(e.id,w);console.log("User votes:",N),u(N),(_==null?void 0:_.maxVotesPerUser)!==null&&(_==null?void 0:_.maxVotesPerUser)!==void 0&&Object.keys(N).length>=_.maxVotesPerUser&&g(`You have reached the maximum number of votes (${_.maxVotesPerUser}) for this tournament`)}}catch(_){g("Failed to load voting data"),console.error("Error fetching data:",_)}finally{m(!1)}};rt.useEffect(()=>{I()},[e==null?void 0:e.id,w]);const A=async(_,O)=>{if(!(e!=null&&e.id)){g("You must be logged in to vote");return}try{if(c[_]){g("You have already voted for this entry");return}if((i==null?void 0:i.maxVotesPerUser)!==null&&(i==null?void 0:i.maxVotesPerUser)!==void 0&&Object.keys(c).length>=i.maxVotesPerUser){g(`You have reached the maximum number of votes (${i.maxVotesPerUser})`);return}console.log(`Submitting vote: Entry ID ${_}, Rating ${O}, Tournament ID ${w}`),m(!0);try{await ZA(_,O,w),console.log("Vote submitted successfully"),u(N=>{const M={...N,[_]:O};return console.log("Updated user votes:",M),M}),console.log("Reloading data after vote..."),await I(),g(null)}catch(N){console.error("Error during vote submission:",N),g(`Failed to submit vote: ${N.message}`)}finally{m(!1)}}catch(N){g("Failed to submit vote"),console.error("Error submitting vote:",N)}};return d?l.jsx("div",{className:"animate-pulse p-8 text-center",children:"Loading entries and votes..."}):y?l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-md p-4",children:[l.jsx("p",{className:"text-red-700",children:y}),y==="Tournament not found"&&l.jsx("button",{className:"mt-4 text-primary-600 hover:text-primary-700",onClick:()=>t("/"),children:"Return to Home"})]})}):l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("h1",{className:"text-3xl font-bold mb-8",children:["Vote on Entries ",i!=null&&i.name?`- ${i.name}`:""]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[l.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Your Voting Status"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-gray-600",children:"Votes Cast:"}),l.jsx("p",{className:"text-2xl font-bold text-primary-600",children:Object.keys(c).length})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-gray-600",children:"Vote Limit:"}),l.jsx("p",{className:"text-2xl font-bold text-primary-600",children:(i==null?void 0:i.maxVotesPerUser)===null||(i==null?void 0:i.maxVotesPerUser)===void 0?"Unlimited":i.maxVotesPerUser})]})]}),l.jsx("div",{className:"mt-4 text-sm text-gray-500",children:l.jsxs("p",{children:["Voting Question: ",l.jsx("span",{className:"font-medium text-gray-900",children:(i==null?void 0:i.votingQuestion)||"How would you rate this entry?"})]})}),l.jsx("div",{className:"mt-4 text-sm text-gray-500",children:l.jsxs("p",{children:["Voting Ends: ",l.jsx("span",{className:"font-medium text-gray-900",children:i==null?void 0:i.votingPhaseEnd.toLocaleDateString()})]})})]}),r.length>0?l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(_=>l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[l.jsx("div",{className:"aspect-w-16 aspect-h-9 mb-4",children:l.jsx("img",{src:_.imageUrl,alt:_.title,className:"object-cover rounded-lg"})}),l.jsx("h3",{className:"text-lg font-semibold mb-2",children:_.title}),l.jsx("p",{className:"text-gray-600 mb-4",children:_.description}),l.jsx("div",{className:"flex justify-between items-center mb-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:l.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),l.jsxs("span",{className:"ml-1 text-sm font-medium text-gray-800",children:[_.averageRating?_.averageRating.toFixed(1):"0.0"," (",_.voteCount||0," votes)"]})]})}),l.jsx(xS,{entryId:_.id,onVote:O=>A(_.id,O),currentRating:c[_.id],tournamentState:i})]},_.id))}):l.jsx("div",{className:"bg-white rounded-lg shadow-md p-6 text-center",children:l.jsx("p",{className:"text-gray-600",children:"No entries available for voting."})})]})}function fd(){var m;const[n,e]=j.useState([]),[t,r]=j.useState(!0),[s,i]=j.useState(null),[a,c]=j.useState("");j.useEffect(()=>{d(),u()},[]);const u=async()=>{try{const y=await Ys();y&&c(y.currentPhase)}catch(y){console.error("Error fetching tournament state:",y)}},d=async()=>{try{r(!0),i(null),console.log("Fetching winners...");const y=Ze(be(re,"entries"),Ds("averageRating","desc"),Ds("voteCount","desc"),mE(10)),w=(await et(y)).docs.map(I=>{const A=I.data();return console.log(`Entry ${I.id}:`,A),{id:I.id,...A}});console.log("Winners data:",w),e(w)}catch(y){console.error("Error fetching winners:",y),i(y.message||"Failed to load winners. Please try again later.")}finally{r(!1)}};return t?l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Competition Winners"}),a!=="completed"&&l.jsx("div",{className:"mt-4 rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto",children:l.jsx("div",{className:"text-sm text-yellow-700",children:a==="submission"?"The competition is still in the submission phase. Winners will be announced after voting is complete.":a==="voting"?"Voting is currently in progress. Final winners will be announced after the voting phase ends.":"The competition results are not yet finalized."})})]}),s&&l.jsx("div",{className:"rounded-md bg-red-50 p-4 max-w-3xl mx-auto mb-8",children:l.jsx("div",{className:"text-sm text-red-700",children:s})}),n.length>0?l.jsxs("div",{className:"space-y-8",children:[l.jsxs("div",{className:"bg-gradient-to-r from-amber-100 to-yellow-100 shadow-xl rounded-lg overflow-hidden",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold",children:"1st Place"}),l.jsx("img",{src:n[0].imageUrl,alt:n[0].title,className:"w-full h-96 object-contain bg-white"})]}),l.jsxs("div",{className:"p-6 text-center",children:[l.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:n[0].title}),n[0].description&&l.jsx("p",{className:"mt-2 text-gray-600",children:n[0].description}),l.jsx("div",{className:"mt-4 flex items-center justify-center",children:l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("span",{className:"text-sm font-medium text-gray-500",children:"By"}),n[0].userPhotoURL?l.jsx("img",{src:n[0].userPhotoURL,alt:n[0].userDisplayName,className:"h-6 w-6 rounded-full"}):l.jsx("div",{className:"h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center",children:l.jsx("span",{className:"text-xs text-gray-600",children:((m=n[0].userDisplayName)==null?void 0:m[0])||"?"})}),l.jsx("span",{className:"text-sm font-medium text-gray-900",children:n[0].userDisplayName})]})}),l.jsx("div",{className:"mt-4 flex items-center justify-center space-x-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:l.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),l.jsxs("span",{className:"ml-1 text-sm font-medium text-gray-900",children:[(n[0].averageRating||0).toFixed(1)," (",n[0].voteCount||0," votes)"]})]})})]})]}),l.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:n.slice(1).map((y,g)=>l.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[l.jsxs("div",{className:"relative",children:[l.jsxs("div",{className:"absolute top-2 left-2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-bold",children:[g+2,bS(g+2)," Place"]}),l.jsx("img",{src:y.imageUrl,alt:y.title,className:"w-full h-48 object-contain bg-gray-50"})]}),l.jsxs("div",{className:"p-4",children:[l.jsx("h3",{className:"text-lg font-medium text-gray-900",children:y.title}),l.jsxs("div",{className:"mt-2 flex items-center text-sm",children:[l.jsx("span",{className:"text-gray-500 mr-1",children:"By"}),l.jsx("span",{className:"font-medium text-gray-900",children:y.userDisplayName})]}),l.jsxs("div",{className:"mt-2 flex items-center",children:[l.jsx("svg",{className:"h-4 w-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:l.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),l.jsxs("span",{className:"ml-1 text-sm text-gray-600",children:[(y.averageRating||0).toFixed(1)," (",y.voteCount||0," votes)"]})]})]})]},y.id))})]}):l.jsx("div",{className:"text-center py-12",children:l.jsx("p",{className:"text-gray-500",children:"No entries found. Winners will be displayed after the voting phase is complete."})})]})}function bS(n){const e=n%10,t=n%100;return e===1&&t!==11?"st":e===2&&t!==12?"nd":e===3&&t!==13?"rd":"th"}const ka={async testLogin(n,e){console.log(`Attempting to login with email: ${n}`);try{const t=await Yg(n,e);return console.log("Login result:",t),t}catch(t){throw console.error("Login error:",t),t}},async testRegister(n,e,t){console.log(`Attempting to register with email: ${n}${t?`, name: ${t}`:""}`);try{const r=await Qg(n,e,t);return console.log("Registration result:",r),r}catch(r){throw console.error("Registration error:",r),r}},async testGoogleLogin(){console.log("Attempting to login with Google");try{const n=await Xg();return console.log("Google login result:",n),n}catch(n){throw console.error("Google login error:",n),n}}};function ES(){const{user:n}=Kt(),[e,t]=j.useState(""),[r,s]=j.useState(""),[i,a]=j.useState(""),[c,u]=j.useState(!1),[d,m]=j.useState(""),[y,g]=j.useState(""),[w,I]=j.useState(""),[A,_]=j.useState(""),[O,N]=j.useState(!1),[M,U]=j.useState(""),[W,z]=j.useState(!1),R=async()=>{if(!e||!r){a("Please enter both email and password");return}u(!0),a("");try{const v=await ka.testLogin(e,r);a(`Login successful! User: ${JSON.stringify(v,null,2)}`)}catch(v){a(`Login failed: ${v.message}`)}finally{u(!1)}},x=async()=>{if(!d||!y){_("Please enter email and password");return}N(!0),_("");try{const v=await ka.testRegister(d,y,w||void 0);_(`Registration successful! User: ${JSON.stringify(v,null,2)}`)}catch(v){_(`Registration failed: ${v.message}`)}finally{N(!1)}},b=async()=>{z(!0),U("");try{await ka.testGoogleLogin(),U("Google sign-in initiated. You should be redirected to Google for authentication.")}catch(v){U(`Google login failed: ${v.message}`)}finally{z(!1)}};return l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[l.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Authentication Debug"}),n?l.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:[l.jsx("h2",{className:"text-lg font-medium text-green-700",children:"Logged In"}),l.jsx("pre",{className:"mt-2 text-sm text-gray-800 overflow-auto p-2 bg-gray-100 rounded",children:JSON.stringify(n,null,2)})]}):l.jsx("div",{className:"mb-4 p-4 bg-yellow-50 rounded-md",children:l.jsx("p",{className:"text-sm text-yellow-700",children:"Not logged in"})}),l.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:[l.jsxs("div",{className:"border rounded-lg p-4",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Login"}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"debug-login-email",className:"block text-sm font-medium text-gray-700",children:"Email"}),l.jsx("input",{id:"debug-login-email",type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:e,onChange:v=>t(v.target.value)})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"debug-login-password",className:"block text-sm font-medium text-gray-700",children:"Password"}),l.jsx("input",{id:"debug-login-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:r,onChange:v=>s(v.target.value)})]}),l.jsx("div",{children:l.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:R,disabled:c,children:c?"Testing...":"Test Login"})}),i&&l.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:l.jsx("pre",{children:i})})]})]}),l.jsxs("div",{className:"border rounded-lg p-4",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Registration"}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"debug-register-email",className:"block text-sm font-medium text-gray-700",children:"Email"}),l.jsx("input",{id:"debug-register-email",type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:d,onChange:v=>m(v.target.value)})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"debug-register-password",className:"block text-sm font-medium text-gray-700",children:"Password"}),l.jsx("input",{id:"debug-register-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:y,onChange:v=>g(v.target.value)})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"debug-register-name",className:"block text-sm font-medium text-gray-700",children:"Display Name (optional)"}),l.jsx("input",{id:"debug-register-name",type:"text",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:w,onChange:v=>I(v.target.value)})]}),l.jsx("div",{children:l.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:x,disabled:O,children:O?"Testing...":"Test Registration"})}),A&&l.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:l.jsx("pre",{children:A})})]})]}),l.jsxs("div",{className:"border rounded-lg p-4",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Google Login"}),l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{children:l.jsx("button",{type:"button",className:"w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:b,disabled:W,children:W?l.jsxs("span",{className:"flex items-center",children:[l.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[l.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),l.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing..."]}):l.jsxs("span",{className:"flex items-center",children:[l.jsxs("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:[l.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),l.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),l.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),l.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}),l.jsx("path",{fill:"none",d:"M1 1h22v22H1z"})]}),"Sign in with Google"]})})}),M&&l.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:l.jsx("pre",{children:M})})]})]})]})]})})}function TS(){return l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Create New Tournament"}),l.jsx("div",{className:"max-w-3xl mx-auto",children:l.jsx("div",{className:"bg-white shadow-md rounded-lg overflow-hidden",children:l.jsxs("div",{className:"px-6 py-6",children:[l.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-6",children:"Tournament Details"}),l.jsx("p",{className:"text-gray-600 mb-6",children:"Create your own tournament and invite participants to submit entries and vote. As the tournament creator, you'll have admin privileges to manage the tournament."}),l.jsx(sp,{})]})})})]})}function IS(){const{tournamentId:n}=io(),{user:e}=Kt(),t=zt(),[r,s]=j.useState(null),[i,a]=j.useState([]),[c,u]=j.useState(!0),[d,m]=j.useState(null);if(j.useEffect(()=>{(async()=>{if(!n){m("Tournament ID is required"),u(!1);return}try{u(!0),m(null),console.log(`Fetching tournament with ID: ${n}`);const I=await Lo(n);if(!I){m("Tournament not found"),u(!1);return}console.log("Tournament data:",I),s(I);const A=await Mo(n);console.log(`Found ${A.length} entries for tournament ${n}`),a(A)}catch(I){console.error("Error fetching tournament:",I),m("Failed to load tournament data")}finally{u(!1)}})()},[n]),c)return l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})});if(d)return l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 mb-6",children:l.jsxs("div",{className:"flex",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),l.jsx("div",{className:"ml-3",children:l.jsx("p",{className:"text-sm text-red-700",children:d})})]})}),l.jsx("button",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>t("/"),children:"Return to Home"})]});if(!r)return null;const g=(e==null?void 0:e.id)===r.ownerId||(e==null?void 0:e.isAdmin);return l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:r.name}),l.jsxs("div",{className:"mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6",children:[l.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg p-4 md:w-1/3",children:[l.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Tournament Details"}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-gray-500",children:"Current Phase: "}),l.jsx("span",{className:"text-sm font-medium capitalize",children:r.currentPhase})]}),r.currentPhase==="submission"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-gray-500",children:"Submission Started: "}),l.jsx("span",{className:"text-sm font-medium",children:dt(r.submissionPhaseStart,{addSuffix:!0})})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-gray-500",children:"Submission Ends: "}),l.jsx("span",{className:"text-sm font-medium",children:dt(r.submissionPhaseEnd,{addSuffix:!0})})]})]}),r.currentPhase==="voting"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-gray-500",children:"Voting Started: "}),l.jsx("span",{className:"text-sm font-medium",children:dt(r.votingPhaseStart,{addSuffix:!0})})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-gray-500",children:"Voting Ends: "}),l.jsx("span",{className:"text-sm font-medium",children:dt(r.votingPhaseEnd,{addSuffix:!0})})]})]}),r.maxEntriesPerUser!==null&&l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-gray-500",children:"Max Entries Per User: "}),l.jsx("span",{className:"text-sm font-medium",children:r.maxEntriesPerUser})]}),r.maxVotesPerUser!==null&&l.jsxs("div",{children:[l.jsx("span",{className:"text-sm text-gray-500",children:"Max Votes Per User: "}),l.jsx("span",{className:"text-sm font-medium",children:r.maxVotesPerUser})]})]}),l.jsxs("div",{className:"mt-6",children:[r.currentPhase==="submission"&&l.jsx(te,{to:`/tournament/${r.id}/submit`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Submit Design"}),r.currentPhase==="voting"&&l.jsx(te,{to:`/tournament/${r.id}/vote`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Vote Now"}),g&&l.jsx(te,{to:`/admin/tournament/${r.id}/settings`,className:"ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Manage Tournament"})]})]}),l.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg p-4 md:w-2/3",children:[l.jsxs("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:["Entries (",i.length,")"]}),i.length===0?l.jsx("p",{className:"text-sm text-gray-500",children:"No entries have been submitted yet."}):l.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:i.map(w=>l.jsxs("div",{className:"border border-gray-200 rounded-md p-3",children:[w.imageUrl&&l.jsx("img",{src:w.imageUrl,alt:w.title,className:"w-full h-32 object-cover rounded-md mb-2"}),l.jsx("h3",{className:"text-sm font-medium text-gray-900",children:w.title}),w.description&&l.jsx("p",{className:"mt-1 text-xs text-gray-500 line-clamp-2",children:w.description}),l.jsxs("div",{className:"mt-2 flex justify-between items-center text-xs text-gray-500",children:[l.jsxs("span",{children:[w.voteCount||0," votes"]}),l.jsx("span",{children:dt(w.createdAt instanceof Date?w.createdAt:w.createdAt.toDate(),{addSuffix:!0})})]})]},w.id))})]})]})]}),l.jsx(te,{to:"/",className:"inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-primary-700 hover:text-primary-800",children:"← Back to tournaments"})]})}const AS=new wy,Nn=({children:n})=>{const{user:e,loading:t}=Kt();return j.useEffect(()=>{!t&&!e&&console.log("User not authenticated in PrivateRoute, redirecting to login")},[e,t]),t?l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?l.jsx(l.Fragment,{children:n}):l.jsx(bd,{to:"/login"})},is=({children:n})=>{const{user:e,loading:t}=Kt();return t?l.jsx("div",{className:"flex justify-center items-center min-h-screen",children:l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?l.jsx(l.Fragment,{children:n}):l.jsx(bd,{to:"/"})};function RS(){return j.useEffect(()=>{OA()},[]),l.jsx(_S,{children:l.jsx(by,{client:AS,children:l.jsx(Wp,{basename:"/projectCP",children:l.jsx(Hp,{children:l.jsxs(fe,{path:"/",element:l.jsx(qA,{}),children:[l.jsx(fe,{index:!0,element:l.jsx(vS,{})}),l.jsx(fe,{path:"login",element:l.jsx(WA,{})}),l.jsx(fe,{path:"register",element:l.jsx(HA,{})}),l.jsx(fe,{path:"reset-password",element:l.jsx(zA,{})}),l.jsx(fe,{path:"winners",element:l.jsx(fd,{})}),l.jsx(fe,{path:"debug-auth",element:l.jsx(ES,{})}),l.jsx(fe,{path:"tournament/:tournamentId",element:l.jsx(IS,{})}),l.jsx(fe,{path:"tournament/:tournamentId/submit",element:l.jsx(Nn,{children:l.jsx(hd,{})})}),l.jsx(fe,{path:"tournament/:tournamentId/vote",element:l.jsx(Nn,{children:l.jsx(dd,{})})}),l.jsx(fe,{path:"tournament/:tournamentId/winners",element:l.jsx(fd,{})}),l.jsx(fe,{path:"submit",element:l.jsx(Nn,{children:l.jsx(hd,{})})}),l.jsx(fe,{path:"vote",element:l.jsx(Nn,{children:l.jsx(dd,{})})}),l.jsx(fe,{path:"profile",element:l.jsx(Nn,{children:l.jsx(GA,{})})}),l.jsx(fe,{path:"dashboard",element:l.jsx(Nn,{children:l.jsx(wS,{})})}),l.jsx(fe,{path:"create-tournament",element:l.jsx(Nn,{children:l.jsx(TS,{})})}),l.jsx(fe,{path:"admin",element:l.jsx(is,{children:l.jsx(yS,{})})}),l.jsx(fe,{path:"admin/entries",element:l.jsx(is,{children:l.jsx(ud,{})})}),l.jsx(fe,{path:"admin/settings",element:l.jsx(is,{children:l.jsx(ld,{})})}),l.jsx(fe,{path:"admin/tournament/:tournamentId/settings",element:l.jsx(is,{children:l.jsx(ld,{})})}),l.jsx(fe,{path:"admin/tournament/:tournamentId/entries",element:l.jsx(is,{children:l.jsx(ud,{})})}),l.jsx(fe,{path:"*",element:l.jsx("div",{children:"404 Not Found"})})]})})})})})}Id(document.getElementById("root")).render(l.jsx(j.StrictMode,{children:l.jsx(RS,{})}));
//# sourceMappingURL=index-Dr-tFe5a.js.map
