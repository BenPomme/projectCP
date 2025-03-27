var Wp=Object.defineProperty;var Iu=n=>{throw TypeError(n)};var Hp=(n,e,t)=>e in n?Wp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Au=(n,e,t)=>Hp(n,typeof e!="symbol"?e+"":e,t),wa=(n,e,t)=>e.has(n)||Iu("Cannot "+t);var D=(n,e,t)=>(wa(n,e,"read from private field"),t?t.call(n):e.get(n)),oe=(n,e,t)=>e.has(n)?Iu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),X=(n,e,t,r)=>(wa(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),Be=(n,e,t)=>(wa(n,e,"access private method"),t);var Ni=(n,e,t,r)=>({set _(s){X(n,e,s,t)},get _(){return D(n,e,r)}});import{r as k,a as zp,g as Gp,R as Re,u as Ut,L as ae,O as Kp,b as vo,B as Qp,c as Yp,d as we,N as Dh}from"./vendor-Dfm89uXP.js";import{A as xa,q as fs,a as Xp}from"./ui-4osAbc78.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var jh={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp=k,Zp=Symbol.for("react.element"),ey=Symbol.for("react.fragment"),ty=Object.prototype.hasOwnProperty,ny=Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ry={key:!0,ref:!0,__self:!0,__source:!0};function Oh(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)ty.call(e,r)&&!ry.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Zp,type:n,key:i,ref:a,props:s,_owner:ny.current}}wo.Fragment=ey;wo.jsx=Oh;wo.jsxs=Oh;jh.exports=wo;var c=jh.exports,Vh,Pu=zp;Vh=Pu.createRoot,Pu.hydrateRoot;var xo=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},bo=typeof window>"u"||"Deno"in globalThis;function vt(){}function sy(n,e){return typeof n=="function"?n(e):n}function iy(n){return typeof n=="number"&&n>=0&&n!==1/0}function oy(n,e){return Math.max(n+(e||0)-Date.now(),0)}function Su(n,e){return typeof n=="function"?n(e):n}function ay(n,e){return typeof n=="function"?n(e):n}function Ru(n,e){const{type:t="all",exact:r,fetchStatus:s,predicate:i,queryKey:a,stale:l}=n;if(a){if(r){if(e.queryHash!==pc(a,e.options))return!1}else if(!js(e.queryKey,a))return!1}if(t!=="all"){const u=e.isActive();if(t==="active"&&!u||t==="inactive"&&u)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||s&&s!==e.state.fetchStatus||i&&!i(e))}function Nu(n,e){const{exact:t,status:r,predicate:s,mutationKey:i}=n;if(i){if(!e.options.mutationKey)return!1;if(t){if(Ds(e.options.mutationKey)!==Ds(i))return!1}else if(!js(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function pc(n,e){return((e==null?void 0:e.queryKeyHashFn)||Ds)(n)}function Ds(n){return JSON.stringify(n,(e,t)=>qa(t)?Object.keys(t).sort().reduce((r,s)=>(r[s]=t[s],r),{}):t)}function js(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?!Object.keys(e).some(t=>!js(n[t],e[t])):!1}function Mh(n,e){if(n===e)return n;const t=Cu(n)&&Cu(e);if(t||qa(n)&&qa(e)){const r=t?n:Object.keys(n),s=r.length,i=t?e:Object.keys(e),a=i.length,l=t?[]:{};let u=0;for(let h=0;h<a;h++){const m=t?h:i[h];(!t&&r.includes(m)||t)&&n[m]===void 0&&e[m]===void 0?(l[m]=void 0,u++):(l[m]=Mh(n[m],e[m]),l[m]===n[m]&&n[m]!==void 0&&u++)}return s===a&&u===s?n:l}return e}function Cu(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function qa(n){if(!ku(n))return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(!ku(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function ku(n){return Object.prototype.toString.call(n)==="[object Object]"}function cy(n){return new Promise(e=>{setTimeout(e,n)})}function ly(n,e,t){return typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?Mh(n,e):e}function uy(n,e,t=0){const r=[...n,e];return t&&r.length>t?r.slice(1):r}function dy(n,e,t=0){const r=[e,...n];return t&&r.length>t?r.slice(0,-1):r}var yc=Symbol();function Lh(n,e){return!n.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!n.queryFn||n.queryFn===yc?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}var zn,vn,Rr,Ih,hy=(Ih=class extends xo{constructor(){super();oe(this,zn);oe(this,vn);oe(this,Rr);X(this,Rr,e=>{if(!bo&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){D(this,vn)||this.setEventListener(D(this,Rr))}onUnsubscribe(){var e;this.hasListeners()||((e=D(this,vn))==null||e.call(this),X(this,vn,void 0))}setEventListener(e){var t;X(this,Rr,e),(t=D(this,vn))==null||t.call(this),X(this,vn,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){D(this,zn)!==e&&(X(this,zn,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof D(this,zn)=="boolean"?D(this,zn):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},zn=new WeakMap,vn=new WeakMap,Rr=new WeakMap,Ih),Fh=new hy,Nr,wn,Cr,Ah,fy=(Ah=class extends xo{constructor(){super();oe(this,Nr,!0);oe(this,wn);oe(this,Cr);X(this,Cr,e=>{if(!bo&&window.addEventListener){const t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){D(this,wn)||this.setEventListener(D(this,Cr))}onUnsubscribe(){var e;this.hasListeners()||((e=D(this,wn))==null||e.call(this),X(this,wn,void 0))}setEventListener(e){var t;X(this,Cr,e),(t=D(this,wn))==null||t.call(this),X(this,wn,e(this.setOnline.bind(this)))}setOnline(e){D(this,Nr)!==e&&(X(this,Nr,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return D(this,Nr)}},Nr=new WeakMap,wn=new WeakMap,Cr=new WeakMap,Ah),Yi=new fy;function my(){let n,e;const t=new Promise((s,i)=>{n=s,e=i});t.status="pending",t.catch(()=>{});function r(s){Object.assign(t,s),delete t.resolve,delete t.reject}return t.resolve=s=>{r({status:"fulfilled",value:s}),n(s)},t.reject=s=>{r({status:"rejected",reason:s}),e(s)},t}function gy(n){return Math.min(1e3*2**n,3e4)}function Uh(n){return(n??"online")==="online"?Yi.isOnline():!0}var Bh=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function ba(n){return n instanceof Bh}function $h(n){let e=!1,t=0,r=!1,s;const i=my(),a=T=>{var _;r||(g(new Bh(T)),(_=n.abort)==null||_.call(n))},l=()=>{e=!0},u=()=>{e=!1},h=()=>Fh.isFocused()&&(n.networkMode==="always"||Yi.isOnline())&&n.canRun(),m=()=>Uh(n.networkMode)&&n.canRun(),y=T=>{var _;r||(r=!0,(_=n.onSuccess)==null||_.call(n,T),s==null||s(),i.resolve(T))},g=T=>{var _;r||(r=!0,(_=n.onError)==null||_.call(n,T),s==null||s(),i.reject(T))},x=()=>new Promise(T=>{var _;s=V=>{(r||h())&&T(V)},(_=n.onPause)==null||_.call(n)}).then(()=>{var T;s=void 0,r||(T=n.onContinue)==null||T.call(n)}),I=()=>{if(r)return;let T;const _=t===0?n.initialPromise:void 0;try{T=_??n.fn()}catch(V){T=Promise.reject(V)}Promise.resolve(T).then(y).catch(V=>{var H;if(r)return;const A=n.retry??(bo?0:3),j=n.retryDelay??gy,L=typeof j=="function"?j(t,V):j,W=A===!0||typeof A=="number"&&t<A||typeof A=="function"&&A(t,V);if(e||!W){g(V);return}t++,(H=n.onFail)==null||H.call(n,t,V),cy(L).then(()=>h()?void 0:x()).then(()=>{e?g(V):I()})})};return{promise:i,cancel:a,continue:()=>(s==null||s(),i),cancelRetry:l,continueRetry:u,canStart:m,start:()=>(m()?I():x().then(I),i)}}function py(){let n=[],e=0,t=l=>{l()},r=l=>{l()},s=l=>setTimeout(l,0);const i=l=>{e?n.push(l):s(()=>{t(l)})},a=()=>{const l=n;n=[],l.length&&s(()=>{r(()=>{l.forEach(u=>{t(u)})})})};return{batch:l=>{let u;e++;try{u=l()}finally{e--,e||a()}return u},batchCalls:l=>(...u)=>{i(()=>{l(...u)})},schedule:i,setNotifyFunction:l=>{t=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{s=l}}}var Je=py(),Gn,Ph,qh=(Ph=class{constructor(){oe(this,Gn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),iy(this.gcTime)&&X(this,Gn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(bo?1/0:5*60*1e3))}clearGcTimeout(){D(this,Gn)&&(clearTimeout(D(this,Gn)),X(this,Gn,void 0))}},Gn=new WeakMap,Ph),kr,Dr,ft,Kn,qe,Ks,Qn,wt,Kt,Sh,yy=(Sh=class extends qh{constructor(t){super();oe(this,wt);oe(this,kr);oe(this,Dr);oe(this,ft);oe(this,Kn);oe(this,qe);oe(this,Ks);oe(this,Qn);X(this,Qn,!1),X(this,Ks,t.defaultOptions),this.setOptions(t.options),this.observers=[],X(this,Kn,t.client),X(this,ft,D(this,Kn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,X(this,kr,vy(this.options)),this.state=t.state??D(this,kr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=D(this,qe))==null?void 0:t.promise}setOptions(t){this.options={...D(this,Ks),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&D(this,ft).remove(this)}setData(t,r){const s=ly(this.state.data,t,this.options);return Be(this,wt,Kt).call(this,{data:s,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),s}setState(t,r){Be(this,wt,Kt).call(this,{type:"setState",state:t,setStateOptions:r})}cancel(t){var s,i;const r=(s=D(this,qe))==null?void 0:s.promise;return(i=D(this,qe))==null||i.cancel(t),r?r.then(vt).catch(vt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(D(this,kr))}isActive(){return this.observers.some(t=>ay(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===yc||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!oy(this.state.dataUpdatedAt,t)}onFocus(){var r;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(r=D(this,qe))==null||r.continue()}onOnline(){var r;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(r=D(this,qe))==null||r.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),D(this,ft).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(r=>r!==t),this.observers.length||(D(this,qe)&&(D(this,Qn)?D(this,qe).cancel({revert:!0}):D(this,qe).cancelRetry()),this.scheduleGc()),D(this,ft).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Be(this,wt,Kt).call(this,{type:"invalidate"})}fetch(t,r){var h,m,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(D(this,qe))return D(this,qe).continueRetry(),D(this,qe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const g=this.observers.find(x=>x.options.queryFn);g&&this.setOptions(g.options)}const s=new AbortController,i=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(X(this,Qn,!0),s.signal)})},a=()=>{const g=Lh(this.options,r),x={client:D(this,Kn),queryKey:this.queryKey,meta:this.meta};return i(x),X(this,Qn,!1),this.options.persister?this.options.persister(g,x,this):g(x)},l={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:D(this,Kn),state:this.state,fetchFn:a};i(l),(h=this.options.behavior)==null||h.onFetch(l,this),X(this,Dr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=l.fetchOptions)==null?void 0:m.meta))&&Be(this,wt,Kt).call(this,{type:"fetch",meta:(y=l.fetchOptions)==null?void 0:y.meta});const u=g=>{var x,I,T,_;ba(g)&&g.silent||Be(this,wt,Kt).call(this,{type:"error",error:g}),ba(g)||((I=(x=D(this,ft).config).onError)==null||I.call(x,g,this),(_=(T=D(this,ft).config).onSettled)==null||_.call(T,this.state.data,g,this)),this.scheduleGc()};return X(this,qe,$h({initialPromise:r==null?void 0:r.initialPromise,fn:l.fetchFn,abort:s.abort.bind(s),onSuccess:g=>{var x,I,T,_;if(g===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(V){u(V);return}(I=(x=D(this,ft).config).onSuccess)==null||I.call(x,g,this),(_=(T=D(this,ft).config).onSettled)==null||_.call(T,g,this.state.error,this),this.scheduleGc()},onError:u,onFail:(g,x)=>{Be(this,wt,Kt).call(this,{type:"failed",failureCount:g,error:x})},onPause:()=>{Be(this,wt,Kt).call(this,{type:"pause"})},onContinue:()=>{Be(this,wt,Kt).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),D(this,qe).start()}},kr=new WeakMap,Dr=new WeakMap,ft=new WeakMap,Kn=new WeakMap,qe=new WeakMap,Ks=new WeakMap,Qn=new WeakMap,wt=new WeakSet,Kt=function(t){const r=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,..._y(s.data,this.options),fetchMeta:t.meta??null};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return ba(i)&&i.revert&&D(this,Dr)?{...D(this,Dr),fetchStatus:"idle"}:{...s,error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=r(this.state),Je.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),D(this,ft).notify({query:this,type:"updated",action:t})})},Sh);function _y(n,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Uh(e.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function vy(n){const e=typeof n.initialData=="function"?n.initialData():n.initialData,t=e!==void 0,r=t?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var Rt,Rh,wy=(Rh=class extends xo{constructor(e={}){super();oe(this,Rt);this.config=e,X(this,Rt,new Map)}build(e,t,r){const s=t.queryKey,i=t.queryHash??pc(s,t);let a=this.get(i);return a||(a=new yy({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(a)),a}add(e){D(this,Rt).has(e.queryHash)||(D(this,Rt).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=D(this,Rt).get(e.queryHash);t&&(e.destroy(),t===e&&D(this,Rt).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Je.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return D(this,Rt).get(e)}getAll(){return[...D(this,Rt).values()]}find(e){const t={exact:!0,...e};return this.getAll().find(r=>Ru(t,r))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(r=>Ru(e,r)):t}notify(e){Je.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){Je.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Je.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Rt=new WeakMap,Rh),Nt,Xe,Yn,Ct,fn,Nh,xy=(Nh=class extends qh{constructor(t){super();oe(this,Ct);oe(this,Nt);oe(this,Xe);oe(this,Yn);this.mutationId=t.mutationId,X(this,Xe,t.mutationCache),X(this,Nt,[]),this.state=t.state||by(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){D(this,Nt).includes(t)||(D(this,Nt).push(t),this.clearGcTimeout(),D(this,Xe).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){X(this,Nt,D(this,Nt).filter(r=>r!==t)),this.scheduleGc(),D(this,Xe).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){D(this,Nt).length||(this.state.status==="pending"?this.scheduleGc():D(this,Xe).remove(this))}continue(){var t;return((t=D(this,Yn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,a,l,u,h,m,y,g,x,I,T,_,V,A,j,L,W,H,P,v;X(this,Yn,$h({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(w,E)=>{Be(this,Ct,fn).call(this,{type:"failed",failureCount:w,error:E})},onPause:()=>{Be(this,Ct,fn).call(this,{type:"pause"})},onContinue:()=>{Be(this,Ct,fn).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>D(this,Xe).canRun(this)}));const r=this.state.status==="pending",s=!D(this,Yn).canStart();try{if(!r){Be(this,Ct,fn).call(this,{type:"pending",variables:t,isPaused:s}),await((a=(i=D(this,Xe).config).onMutate)==null?void 0:a.call(i,t,this));const E=await((u=(l=this.options).onMutate)==null?void 0:u.call(l,t));E!==this.state.context&&Be(this,Ct,fn).call(this,{type:"pending",context:E,variables:t,isPaused:s})}const w=await D(this,Yn).start();return await((m=(h=D(this,Xe).config).onSuccess)==null?void 0:m.call(h,w,t,this.state.context,this)),await((g=(y=this.options).onSuccess)==null?void 0:g.call(y,w,t,this.state.context)),await((I=(x=D(this,Xe).config).onSettled)==null?void 0:I.call(x,w,null,this.state.variables,this.state.context,this)),await((_=(T=this.options).onSettled)==null?void 0:_.call(T,w,null,t,this.state.context)),Be(this,Ct,fn).call(this,{type:"success",data:w}),w}catch(w){try{throw await((A=(V=D(this,Xe).config).onError)==null?void 0:A.call(V,w,t,this.state.context,this)),await((L=(j=this.options).onError)==null?void 0:L.call(j,w,t,this.state.context)),await((H=(W=D(this,Xe).config).onSettled)==null?void 0:H.call(W,void 0,w,this.state.variables,this.state.context,this)),await((v=(P=this.options).onSettled)==null?void 0:v.call(P,void 0,w,t,this.state.context)),w}finally{Be(this,Ct,fn).call(this,{type:"error",error:w})}}finally{D(this,Xe).runNext(this)}}},Nt=new WeakMap,Xe=new WeakMap,Yn=new WeakMap,Ct=new WeakSet,fn=function(t){const r=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Je.batch(()=>{D(this,Nt).forEach(s=>{s.onMutationUpdate(t)}),D(this,Xe).notify({mutation:this,type:"updated",action:t})})},Nh);function by(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Qt,xt,Qs,Ch,Ey=(Ch=class extends xo{constructor(e={}){super();oe(this,Qt);oe(this,xt);oe(this,Qs);this.config=e,X(this,Qt,new Set),X(this,xt,new Map),X(this,Qs,0)}build(e,t,r){const s=new xy({mutationCache:this,mutationId:++Ni(this,Qs)._,options:e.defaultMutationOptions(t),state:r});return this.add(s),s}add(e){D(this,Qt).add(e);const t=Ci(e);if(typeof t=="string"){const r=D(this,xt).get(t);r?r.push(e):D(this,xt).set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(D(this,Qt).delete(e)){const t=Ci(e);if(typeof t=="string"){const r=D(this,xt).get(t);if(r)if(r.length>1){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}else r[0]===e&&D(this,xt).delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=Ci(e);if(typeof t=="string"){const r=D(this,xt).get(t),s=r==null?void 0:r.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var r;const t=Ci(e);if(typeof t=="string"){const s=(r=D(this,xt).get(t))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Je.batch(()=>{D(this,Qt).forEach(e=>{this.notify({type:"removed",mutation:e})}),D(this,Qt).clear(),D(this,xt).clear()})}getAll(){return Array.from(D(this,Qt))}find(e){const t={exact:!0,...e};return this.getAll().find(r=>Nu(t,r))}findAll(e={}){return this.getAll().filter(t=>Nu(e,t))}notify(e){Je.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return Je.batch(()=>Promise.all(e.map(t=>t.continue().catch(vt))))}},Qt=new WeakMap,xt=new WeakMap,Qs=new WeakMap,Ch);function Ci(n){var e;return(e=n.options.scope)==null?void 0:e.id}function Du(n){return{onFetch:(e,t)=>{var m,y,g,x,I;const r=e.options,s=(g=(y=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:y.fetchMore)==null?void 0:g.direction,i=((x=e.state.data)==null?void 0:x.pages)||[],a=((I=e.state.data)==null?void 0:I.pageParams)||[];let l={pages:[],pageParams:[]},u=0;const h=async()=>{let T=!1;const _=j=>{Object.defineProperty(j,"signal",{enumerable:!0,get:()=>(e.signal.aborted?T=!0:e.signal.addEventListener("abort",()=>{T=!0}),e.signal)})},V=Lh(e.options,e.fetchOptions),A=async(j,L,W)=>{if(T)return Promise.reject();if(L==null&&j.pages.length)return Promise.resolve(j);const H={client:e.client,queryKey:e.queryKey,pageParam:L,direction:W?"backward":"forward",meta:e.options.meta};_(H);const P=await V(H),{maxPages:v}=e.options,w=W?dy:uy;return{pages:w(j.pages,P,v),pageParams:w(j.pageParams,L,v)}};if(s&&i.length){const j=s==="backward",L=j?Ty:ju,W={pages:i,pageParams:a},H=L(r,W);l=await A(W,H,j)}else{const j=n??i.length;do{const L=u===0?a[0]??r.initialPageParam:ju(r,l);if(u>0&&L==null)break;l=await A(l,L),u++}while(u<j)}return l};e.options.persister?e.fetchFn=()=>{var T,_;return(_=(T=e.options).persister)==null?void 0:_.call(T,h,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t)}:e.fetchFn=h}}}function ju(n,{pages:e,pageParams:t}){const r=e.length-1;return e.length>0?n.getNextPageParam(e[r],e,t[r],t):void 0}function Ty(n,{pages:e,pageParams:t}){var r;return e.length>0?(r=n.getPreviousPageParam)==null?void 0:r.call(n,e[0],e,t[0],t):void 0}var xe,xn,bn,jr,Or,En,Vr,Mr,kh,Iy=(kh=class{constructor(n={}){oe(this,xe);oe(this,xn);oe(this,bn);oe(this,jr);oe(this,Or);oe(this,En);oe(this,Vr);oe(this,Mr);X(this,xe,n.queryCache||new wy),X(this,xn,n.mutationCache||new Ey),X(this,bn,n.defaultOptions||{}),X(this,jr,new Map),X(this,Or,new Map),X(this,En,0)}mount(){Ni(this,En)._++,D(this,En)===1&&(X(this,Vr,Fh.subscribe(async n=>{n&&(await this.resumePausedMutations(),D(this,xe).onFocus())})),X(this,Mr,Yi.subscribe(async n=>{n&&(await this.resumePausedMutations(),D(this,xe).onOnline())})))}unmount(){var n,e;Ni(this,En)._--,D(this,En)===0&&((n=D(this,Vr))==null||n.call(this),X(this,Vr,void 0),(e=D(this,Mr))==null||e.call(this),X(this,Mr,void 0))}isFetching(n){return D(this,xe).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return D(this,xn).findAll({...n,status:"pending"}).length}getQueryData(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=D(this,xe).get(e.queryHash))==null?void 0:t.state.data}ensureQueryData(n){const e=this.defaultQueryOptions(n),t=D(this,xe).build(this,e),r=t.state.data;return r===void 0?this.fetchQuery(n):(n.revalidateIfStale&&t.isStaleByTime(Su(e.staleTime,t))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(n){return D(this,xe).findAll(n).map(({queryKey:e,state:t})=>{const r=t.data;return[e,r]})}setQueryData(n,e,t){const r=this.defaultQueryOptions({queryKey:n}),s=D(this,xe).get(r.queryHash),i=s==null?void 0:s.state.data,a=sy(e,i);if(a!==void 0)return D(this,xe).build(this,r).setData(a,{...t,manual:!0})}setQueriesData(n,e,t){return Je.batch(()=>D(this,xe).findAll(n).map(({queryKey:r})=>[r,this.setQueryData(r,e,t)]))}getQueryState(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=D(this,xe).get(e.queryHash))==null?void 0:t.state}removeQueries(n){const e=D(this,xe);Je.batch(()=>{e.findAll(n).forEach(t=>{e.remove(t)})})}resetQueries(n,e){const t=D(this,xe);return Je.batch(()=>(t.findAll(n).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...n},e)))}cancelQueries(n,e={}){const t={revert:!0,...e},r=Je.batch(()=>D(this,xe).findAll(n).map(s=>s.cancel(t)));return Promise.all(r).then(vt).catch(vt)}invalidateQueries(n,e={}){return Je.batch(()=>(D(this,xe).findAll(n).forEach(t=>{t.invalidate()}),(n==null?void 0:n.refetchType)==="none"?Promise.resolve():this.refetchQueries({...n,type:(n==null?void 0:n.refetchType)??(n==null?void 0:n.type)??"active"},e)))}refetchQueries(n,e={}){const t={...e,cancelRefetch:e.cancelRefetch??!0},r=Je.batch(()=>D(this,xe).findAll(n).filter(s=>!s.isDisabled()).map(s=>{let i=s.fetch(void 0,t);return t.throwOnError||(i=i.catch(vt)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(vt)}fetchQuery(n){const e=this.defaultQueryOptions(n);e.retry===void 0&&(e.retry=!1);const t=D(this,xe).build(this,e);return t.isStaleByTime(Su(e.staleTime,t))?t.fetch(e):Promise.resolve(t.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(vt).catch(vt)}fetchInfiniteQuery(n){return n.behavior=Du(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(vt).catch(vt)}ensureInfiniteQueryData(n){return n.behavior=Du(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Yi.isOnline()?D(this,xn).resumePausedMutations():Promise.resolve()}getQueryCache(){return D(this,xe)}getMutationCache(){return D(this,xn)}getDefaultOptions(){return D(this,bn)}setDefaultOptions(n){X(this,bn,n)}setQueryDefaults(n,e){D(this,jr).set(Ds(n),{queryKey:n,defaultOptions:e})}getQueryDefaults(n){const e=[...D(this,jr).values()],t={};return e.forEach(r=>{js(n,r.queryKey)&&Object.assign(t,r.defaultOptions)}),t}setMutationDefaults(n,e){D(this,Or).set(Ds(n),{mutationKey:n,defaultOptions:e})}getMutationDefaults(n){const e=[...D(this,Or).values()],t={};return e.forEach(r=>{js(n,r.mutationKey)&&Object.assign(t,r.defaultOptions)}),t}defaultQueryOptions(n){if(n._defaulted)return n;const e={...D(this,bn).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return e.queryHash||(e.queryHash=pc(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===yc&&(e.enabled=!1),e}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...D(this,bn).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){D(this,xe).clear(),D(this,xn).clear()}},xe=new WeakMap,xn=new WeakMap,bn=new WeakMap,jr=new WeakMap,Or=new WeakMap,En=new WeakMap,Vr=new WeakMap,Mr=new WeakMap,kh),Ay=k.createContext(void 0),Py=({client:n,children:e})=>(k.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),c.jsx(Ay.Provider,{value:n,children:e})),Ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Sy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,x=h&63;u||(x=64,a||(g=64)),r.push(t[m],t[y],t[g],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||y==null)throw new Ry;const g=i<<2|l>>4;if(r.push(g),h!==64){const x=l<<4&240|h>>2;if(r.push(x),y!==64){const I=h<<6&192|y;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ry extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ny=function(n){const e=Wh(n);return Hh.encodeByteArray(e,!0)},Xi=function(n){return Ny(n).replace(/\./g,"")},zh=function(n){try{return Hh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ky=()=>Cy().__FIREBASE_DEFAULTS__,Dy=()=>{if(typeof process>"u"||typeof Ou>"u")return;const n=Ou.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zh(n[1]);return e&&JSON.parse(e)},Eo=()=>{try{return ky()||Dy()||jy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gh=n=>{var e,t;return(t=(e=Eo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kh=n=>{const e=Gh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Qh=()=>{var n;return(n=Eo())===null||n===void 0?void 0:n.config},Yh=n=>{var e;return(e=Eo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Xh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xi(JSON.stringify(t)),Xi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function My(){var n;const e=(n=Eo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ly(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uy(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function By(){return!My()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zh(){try{return typeof indexedDB=="object"}catch{return!1}}function ef(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function $y(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="FirebaseError";class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qy,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wy(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new yt(s,l,r)}}function Wy(n,e){return n.replace(Hy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hy=/\{\$([^}]+)}/g;function zy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Os(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Vu(i)&&Vu(a)){if(!Os(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Vu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ws(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Gy(n,e){const t=new Ky(n,e);return t.subscribe.bind(t)}class Ky{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ea),s.error===void 0&&(s.error=Ea),s.complete===void 0&&(s.complete=Ea);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ea(){}/**
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
 */const Yy=1e3,Xy=2,Jy=4*60*60*1e3,Zy=.5;function Mu(n,e=Yy,t=Xy){const r=e*Math.pow(t,n),s=Math.round(Zy*r*(Math.random()-.5)*2);return Math.min(Jy,r+s)}/**
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
 */function me(n){return n&&n._delegate?n._delegate:n}class mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class e_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Oy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(n_(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:t_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function t_(n){return n===$n?void 0:n}function n_(n){return n.instantiationMode==="EAGER"}/**
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
 */class r_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new e_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const s_={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},i_=ne.INFO,o_={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},a_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=o_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class To{constructor(e){this.name=e,this._logLevel=i_,this._logHandler=a_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const c_=(n,e)=>e.some(t=>n instanceof t);let Lu,Fu;function l_(){return Lu||(Lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u_(){return Fu||(Fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tf=new WeakMap,Wa=new WeakMap,nf=new WeakMap,Ta=new WeakMap,_c=new WeakMap;function d_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(An(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&tf.set(t,n)}).catch(()=>{}),_c.set(e,n),e}function h_(n){if(Wa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Wa.set(n,e)}let Ha={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return An(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function f_(n){Ha=n(Ha)}function m_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ia(this),e,...t);return nf.set(r,e.sort?e.sort():[e]),An(r)}:u_().includes(n)?function(...e){return n.apply(Ia(this),e),An(tf.get(this))}:function(...e){return An(n.apply(Ia(this),e))}}function g_(n){return typeof n=="function"?m_(n):(n instanceof IDBTransaction&&h_(n),c_(n,l_())?new Proxy(n,Ha):n)}function An(n){if(n instanceof IDBRequest)return d_(n);if(Ta.has(n))return Ta.get(n);const e=g_(n);return e!==n&&(Ta.set(n,e),_c.set(e,n)),e}const Ia=n=>_c.get(n);function rf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=An(a);return r&&a.addEventListener("upgradeneeded",u=>{r(An(a.result),u.oldVersion,u.newVersion,An(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const p_=["get","getKey","getAll","getAllKeys","count"],y_=["put","add","delete","clear"],Aa=new Map;function Uu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Aa.get(e))return Aa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=y_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||p_.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return Aa.set(e,i),i}f_(n=>({...n,get:(e,t,r)=>Uu(e,t)||n.get(e,t,r),has:(e,t)=>!!Uu(e,t)||n.has(e,t)}));/**
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
 */class __{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(v_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function v_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const za="@firebase/app",Bu="0.10.13";/**
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
 */const en=new To("@firebase/app"),w_="@firebase/app-compat",x_="@firebase/analytics-compat",b_="@firebase/analytics",E_="@firebase/app-check-compat",T_="@firebase/app-check",I_="@firebase/auth",A_="@firebase/auth-compat",P_="@firebase/database",S_="@firebase/data-connect",R_="@firebase/database-compat",N_="@firebase/functions",C_="@firebase/functions-compat",k_="@firebase/installations",D_="@firebase/installations-compat",j_="@firebase/messaging",O_="@firebase/messaging-compat",V_="@firebase/performance",M_="@firebase/performance-compat",L_="@firebase/remote-config",F_="@firebase/remote-config-compat",U_="@firebase/storage",B_="@firebase/storage-compat",$_="@firebase/firestore",q_="@firebase/vertexai-preview",W_="@firebase/firestore-compat",H_="firebase",z_="10.14.1";/**
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
 */const Ga="[DEFAULT]",G_={[za]:"fire-core",[w_]:"fire-core-compat",[b_]:"fire-analytics",[x_]:"fire-analytics-compat",[T_]:"fire-app-check",[E_]:"fire-app-check-compat",[I_]:"fire-auth",[A_]:"fire-auth-compat",[P_]:"fire-rtdb",[S_]:"fire-data-connect",[R_]:"fire-rtdb-compat",[N_]:"fire-fn",[C_]:"fire-fn-compat",[k_]:"fire-iid",[D_]:"fire-iid-compat",[j_]:"fire-fcm",[O_]:"fire-fcm-compat",[V_]:"fire-perf",[M_]:"fire-perf-compat",[L_]:"fire-rc",[F_]:"fire-rc-compat",[U_]:"fire-gcs",[B_]:"fire-gcs-compat",[$_]:"fire-fst",[W_]:"fire-fst-compat",[q_]:"fire-vertex","fire-js":"fire-js",[H_]:"fire-js-all"};/**
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
 */const Ji=new Map,K_=new Map,Ka=new Map;function $u(n,e){try{n.container.addComponent(e)}catch(t){en.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Et(n){const e=n.name;if(Ka.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,n);for(const t of Ji.values())$u(t,n);for(const t of K_.values())$u(t,n);return!0}function Dn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function bt(n){return n.settings!==void 0}/**
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
 */const Q_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new ar("app","Firebase",Q_);/**
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
 */class Y_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const cr=z_;function sf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ga,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(t||(t=Qh()),!t)throw Pn.create("no-options");const i=Ji.get(s);if(i){if(Os(t,i.options)&&Os(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const a=new r_(s);for(const u of Ka.values())a.addComponent(u);const l=new Y_(t,r,a);return Ji.set(s,l),l}function Io(n=Ga){const e=Ji.get(n);if(!e&&n===Ga&&Qh())return sf();if(!e)throw Pn.create("no-app",{appName:n});return e}function rt(n,e,t){var r;let s=(r=G_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}Et(new mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const X_="firebase-heartbeat-database",J_=1,Vs="firebase-heartbeat-store";let Pa=null;function of(){return Pa||(Pa=rf(X_,J_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pn.create("idb-open",{originalErrorMessage:n.message})})),Pa}async function Z_(n){try{const t=(await of()).transaction(Vs),r=await t.objectStore(Vs).get(af(n));return await t.done,r}catch(e){if(e instanceof yt)en.warn(e.message);else{const t=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(t.message)}}}async function qu(n,e){try{const r=(await of()).transaction(Vs,"readwrite");await r.objectStore(Vs).put(e,af(n)),await r.done}catch(t){if(t instanceof yt)en.warn(t.message);else{const r=Pn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});en.warn(r.message)}}}function af(n){return`${n.name}!${n.options.appId}`}/**
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
 */const e0=1024,t0=30*24*60*60*1e3;class n0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new s0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=t0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wu(),{heartbeatsToSend:r,unsentEntries:s}=r0(this._heartbeatsCache.heartbeats),i=Xi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return en.warn(t),""}}}function Wu(){return new Date().toISOString().substring(0,10)}function r0(n,e=e0){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Hu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Hu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class s0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zh()?ef().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Z_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return qu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return qu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hu(n){return Xi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function i0(n){Et(new mt("platform-logger",e=>new __(e),"PRIVATE")),Et(new mt("heartbeat",e=>new n0(e),"PRIVATE")),rt(za,Bu,n),rt(za,Bu,"esm2017"),rt("fire-js","")}i0("");function vc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o0=cf,lf=new ar("auth","Firebase",cf());/**
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
 */const Zi=new To("@firebase/auth");function a0(n,...e){Zi.logLevel<=ne.WARN&&Zi.warn(`Auth (${cr}): ${n}`,...e)}function Ui(n,...e){Zi.logLevel<=ne.ERROR&&Zi.error(`Auth (${cr}): ${n}`,...e)}/**
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
 */function gt(n,...e){throw xc(n,...e)}function jt(n,...e){return xc(n,...e)}function wc(n,e,t){const r=Object.assign(Object.assign({},o0()),{[e]:t});return new ar("auth","Firebase",r).create(e,{appName:n.name})}function Ot(n){return wc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function c0(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&gt(n,"argument-error"),wc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return lf.create(n,...e)}function G(n,e,...t){if(!n)throw xc(e,...t)}function Yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ui(e),new Error(e)}function tn(n,e){n||Yt(e)}/**
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
 */function Qa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function l0(){return zu()==="http:"||zu()==="https:"}function zu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function u0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l0()||Jh()||"connection"in navigator)?navigator.onLine:!0}function d0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Xs{constructor(e,t){this.shortDelay=e,this.longDelay=t,tn(t>e,"Short delay should be less than long delay!"),this.isMobile=Vy()||Fy()}get(){return u0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bc(n,e){tn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class uf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const h0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const f0=new Xs(3e4,6e4);function an(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Bt(n,e,t,r,s={}){return df(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ys(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return Ly()||(h.referrerPolicy="no-referrer"),uf.fetch()(hf(n,n.config.apiHost,t,l),h)})}async function df(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},h0),e);try{const s=new g0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ki(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ki(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ki(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wc(n,m,h);gt(n,m)}}catch(s){if(s instanceof yt)throw s;gt(n,"network-request-failed",{message:String(s)})}}async function Js(n,e,t,r,s={}){const i=await Bt(n,e,t,r,s);return"mfaPendingCredential"in i&&gt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function hf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?bc(n.config,s):`${n.config.apiScheme}://${s}`}function m0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),f0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=jt(n,e,r);return s.customData._tokenResponse=t,s}function Gu(n){return n!==void 0&&n.enterprise!==void 0}class p0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return m0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function y0(n,e){return Bt(n,"GET","/v2/recaptchaConfig",an(n,e))}/**
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
 */async function _0(n,e){return Bt(n,"POST","/v1/accounts:delete",e)}async function ff(n,e){return Bt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function As(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v0(n,e=!1){const t=me(n),r=await t.getIdToken(e),s=Ec(r);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:As(Sa(s.auth_time)),issuedAtTime:As(Sa(s.iat)),expirationTime:As(Sa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sa(n){return Number(n)*1e3}function Ec(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const s=zh(t);return s?JSON.parse(s):(Ui("Failed to decode base64 JWT payload"),null)}catch(s){return Ui("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ku(n){const e=Ec(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof yt&&w0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function w0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class x0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ya{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function eo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Lr(n,ff(t,{idToken:r}));G(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mf(i.providerUserInfo):[],l=E0(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),m=u?h:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ya(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function b0(n){const e=me(n);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mf(n){return n.map(e=>{var{providerId:t}=e,r=vc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function T0(n,e){const t=await df(n,{},async()=>{const r=Ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=hf(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",uf.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function I0(n,e){return Bt(n,"POST","/v2/accounts:revokeToken",an(n,e))}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ku(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Ku(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await T0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Ir;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function dn(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=vc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new x0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ya(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return v0(this,e)}reload(){return b0(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Ot(this.auth));const e=await this.getIdToken();return await Lr(this,_0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,h,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,x=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,I=(a=t.photoURL)!==null&&a!==void 0?a:void 0,T=(l=t.tenantId)!==null&&l!==void 0?l:void 0,_=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(h=t.createdAt)!==null&&h!==void 0?h:void 0,A=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:j,emailVerified:L,isAnonymous:W,providerData:H,stsTokenManager:P}=t;G(j&&P,e,"internal-error");const v=Ir.fromJSON(this.name,P);G(typeof j=="string",e,"internal-error"),dn(y,e.name),dn(g,e.name),G(typeof L=="boolean",e,"internal-error"),G(typeof W=="boolean",e,"internal-error"),dn(x,e.name),dn(I,e.name),dn(T,e.name),dn(_,e.name),dn(V,e.name),dn(A,e.name);const w=new Xt({uid:j,auth:e,email:g,emailVerified:L,displayName:y,isAnonymous:W,photoURL:I,phoneNumber:x,tenantId:T,stsTokenManager:v,createdAt:V,lastLoginAt:A});return H&&Array.isArray(H)&&(w.providerData=H.map(E=>Object.assign({},E))),_&&(w._redirectEventId=_),w}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ir;s.updateFromServerResponse(t);const i=new Xt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await eo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?mf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ir;l.updateFromIdToken(r);const u=new Xt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ya(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Qu=new Map;function Jt(n){tn(n instanceof Function,"Expected a class definition");let e=Qu.get(n);return e?(tn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qu.set(n,e),e)}/**
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
 */class gf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gf.type="NONE";const Yu=gf;/**
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
 */function Bi(n,e,t){return`firebase:${n}:${e}:${t}`}class Ar{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ar(Jt(Yu),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Jt(Yu);const a=Bi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const m=await h._get(a);if(m){const y=Xt._fromJSON(e,m);h!==i&&(l=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ar(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Ar(i,e,r))}}/**
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
 */function Xu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xf(e))return"Blackberry";if(bf(e))return"Webos";if(yf(e))return"Safari";if((e.includes("chrome/")||_f(e))&&!e.includes("edge/"))return"Chrome";if(wf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pf(n=ze()){return/firefox\//i.test(n)}function yf(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _f(n=ze()){return/crios\//i.test(n)}function vf(n=ze()){return/iemobile/i.test(n)}function wf(n=ze()){return/android/i.test(n)}function xf(n=ze()){return/blackberry/i.test(n)}function bf(n=ze()){return/webos/i.test(n)}function Tc(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function A0(n=ze()){var e;return Tc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P0(){return Uy()&&document.documentMode===10}function Ef(n=ze()){return Tc(n)||wf(n)||bf(n)||xf(n)||/windows phone/i.test(n)||vf(n)}/**
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
 */function Tf(n,e=[]){let t;switch(n){case"Browser":t=Xu(ze());break;case"Worker":t=`${Xu(ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cr}/${r}`}/**
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
 */class S0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function R0(n,e={}){return Bt(n,"GET","/v2/passwordPolicy",an(n,e))}/**
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
 */const N0=6;class C0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:N0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class k0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ju(this),this.idTokenSubscription=new Ju(this),this.beforeStateQueue=new S0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ff(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=d0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(Ot(this));const t=e?me(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R0(this),t=new C0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await I0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&a0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $t(n){return me(n)}class Ju{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gy(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D0(n){Ao=n}function If(n){return Ao.loadJS(n)}function j0(){return Ao.recaptchaEnterpriseScript}function O0(){return Ao.gapiScript}function V0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const M0="recaptcha-enterprise",L0="NO_RECAPTCHA";class F0{constructor(e){this.type=M0,this.auth=$t(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{y0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new p0(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Gu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(L0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Gu(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=j0();u.length!==0&&(u+=l),If(u).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Zu(n,e,t,r=!1){const s=new F0(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function to(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Zu(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function U0(n,e){const t=Dn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Os(i,e??{}))return s;gt(s,"already-initialized")}return t.initialize({options:e})}function B0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $0(n,e,t){const r=$t(n);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Af(e),{host:a,port:l}=q0(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),W0()}function Af(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function q0(n){const e=Af(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ed(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ed(a)}}}function ed(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function W0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ic{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,t){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function H0(n,e){return Bt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function z0(n,e){return Js(n,"POST","/v1/accounts:signInWithPassword",an(n,e))}async function G0(n,e){return Bt(n,"POST","/v1/accounts:sendOobCode",an(n,e))}async function K0(n,e){return G0(n,e)}/**
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
 */async function Q0(n,e){return Js(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}async function Y0(n,e){return Js(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}/**
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
 */class Ms extends Ic{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ms(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ms(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return to(e,t,"signInWithPassword",z0);case"emailLink":return Q0(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return to(e,r,"signUpPassword",H0);case"emailLink":return Y0(e,{idToken:t,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pr(n,e){return Js(n,"POST","/v1/accounts:signInWithIdp",an(n,e))}/**
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
 */const X0="http://localhost";class Zn extends Ic{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=vc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Zn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Pr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Pr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pr(e,t)}buildRequest(){const e={requestUri:X0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ys(t)}return e}}/**
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
 */function J0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z0(n){const e=vs(ws(n)).link,t=e?vs(ws(e)).deep_link_id:null,r=vs(ws(n)).deep_link_id;return(r?vs(ws(r)).link:null)||r||t||e||n}class Ac{constructor(e){var t,r,s,i,a,l;const u=vs(ws(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=J0((s=u.mode)!==null&&s!==void 0?s:null);G(h&&m&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Z0(e);try{return new Ac(t)}catch{return null}}}/**
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
 */class Gr{constructor(){this.providerId=Gr.PROVIDER_ID}static credential(e,t){return Ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ac.parseLink(t);return G(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}Gr.PROVIDER_ID="password";Gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zs extends Pc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mn extends Zs{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class kt extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return kt.credential(t,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
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
 */class gn extends Zs{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class pn extends Zs{constructor(){super("twitter.com")}static credential(e,t){return Zn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */async function ev(n,e){return Js(n,"POST","/v1/accounts:signUp",an(n,e))}/**
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
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),a=td(r);return new er({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=td(r);return new er({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function td(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class no extends yt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new no(e,t,r,s)}}function Pf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(n,i,e,r):i})}async function tv(n,e,t=!1){const r=await Lr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return er._forOperation(n,"link",r)}/**
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
 */async function nv(n,e,t=!1){const{auth:r}=n;if(bt(r.app))return Promise.reject(Ot(r));const s="reauthenticate";try{const i=await Lr(n,Pf(r,s,e,n),t);G(i.idToken,r,"internal-error");const a=Ec(i.idToken);G(a,r,"internal-error");const{sub:l}=a;return G(n.uid===l,r,"user-mismatch"),er._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gt(r,"user-mismatch"),i}}/**
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
 */async function Sf(n,e,t=!1){if(bt(n.app))return Promise.reject(Ot(n));const r="signIn",s=await Pf(n,r,e),i=await er._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function rv(n,e){return Sf($t(n),e)}/**
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
 */async function Rf(n){const e=$t(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sv(n,e,t){const r=$t(n);await to(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",K0)}async function iv(n,e,t){if(bt(n.app))return Promise.reject(Ot(n));const r=$t(n),a=await to(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ev).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Rf(n),u}),l=await er._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function ov(n,e,t){return bt(n.app)?Promise.reject(Ot(n)):rv(me(n),Gr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Rf(n),r})}/**
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
 */async function av(n,e){return Bt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function cv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=me(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Lr(r,av(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function lv(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function uv(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function dv(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}const ro="__sak";/**
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
 */class Nf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const hv=1e3,fv=10;class Cf extends Nf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ef(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);P0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cf.type="LOCAL";const mv=Cf;/**
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
 */class kf extends Nf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kf.type="SESSION";const Df=kf;/**
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
 */function gv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Po(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),u=await gv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Po.receivers=[];/**
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
 */function Sc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class pv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=Sc("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const g=y;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Vt(){return window}function yv(n){Vt().location.href=n}/**
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
 */function jf(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function _v(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wv(){return jf()?self:null}/**
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
 */const Of="firebaseLocalStorageDb",xv=1,so="firebaseLocalStorage",Vf="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function So(n,e){return n.transaction([so],e?"readwrite":"readonly").objectStore(so)}function bv(){const n=indexedDB.deleteDatabase(Of);return new ei(n).toPromise()}function Xa(){const n=indexedDB.open(Of,xv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(so,{keyPath:Vf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(so)?e(r):(r.close(),await bv(),e(await Xa()))})})}async function nd(n,e,t){const r=So(n,!0).put({[Vf]:e,value:t});return new ei(r).toPromise()}async function Ev(n,e){const t=So(n,!1).get(e),r=await new ei(t).toPromise();return r===void 0?null:r.value}function rd(n,e){const t=So(n,!0).delete(e);return new ei(t).toPromise()}const Tv=800,Iv=3;class Mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Iv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Po._getInstance(wv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _v(),!this.activeServiceWorker)return;this.sender=new pv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xa();return await nd(e,ro,"1"),await rd(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ev(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=So(s,!1).getAll();return new ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mf.type="LOCAL";const Av=Mf;new Xs(3e4,6e4);/**
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
 */function Lf(n,e){return e?Jt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Rc extends Ic{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pv(n){return Sf(n.auth,new Rc(n),n.bypassAuthState)}function Sv(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),nv(t,new Rc(n),n.bypassAuthState)}async function Rv(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),tv(t,new Rc(n),n.bypassAuthState)}/**
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
 */class Ff{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pv;case"linkViaPopup":case"linkViaRedirect":return Rv;case"reauthViaPopup":case"reauthViaRedirect":return Sv;default:gt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Nv=new Xs(2e3,1e4);class Tr extends Ff{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nv.get())};e()}}Tr.currentPopupAction=null;/**
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
 */const Cv="pendingRedirect",$i=new Map;class kv extends Ff{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const r=await Dv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dv(n,e){const t=Bf(e),r=Uf(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function jv(n,e){return Uf(n)._set(Bf(e),"true")}function Ov(n,e){$i.set(n._key(),e)}function Uf(n){return Jt(n._redirectPersistence)}function Bf(n){return Bi(Cv,n.config.apiKey,n.name)}/**
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
 */function Vv(n,e,t){return Mv(n,e,t)}async function Mv(n,e,t){if(bt(n.app))return Promise.reject(Ot(n));const r=$t(n);c0(n,e,Pc),await r._initializationPromise;const s=Lf(r,t);return await jv(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Lv(n,e){return await $t(n)._initializationPromise,$f(n,e,!1)}async function $f(n,e,t=!1){if(bt(n.app))return Promise.reject(Ot(n));const r=$t(n),s=Lf(r,e),a=await new kv(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Fv=10*60*1e3;class Uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!qf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fv&&this.cachedEventUids.clear(),this.cachedEventUids.has(sd(e))}saveEventToCache(e){this.cachedEventUids.add(sd(e)),this.lastProcessedEventTime=Date.now()}}function sd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qf(n);default:return!1}}/**
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
 */async function $v(n,e={}){return Bt(n,"GET","/v1/projects",e)}/**
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
 */const qv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wv=/^https?/;async function Hv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $v(n);for(const t of e)try{if(zv(t))return}catch{}gt(n,"unauthorized-domain")}function zv(n){const e=Qa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Wv.test(t))return!1;if(qv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Gv=new Xs(3e4,6e4);function id(){const n=Vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kv(n){return new Promise((e,t)=>{var r,s,i;function a(){id(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{id(),t(jt(n,"network-request-failed"))},timeout:Gv.get()})}if(!((s=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Vt().gapi)===null||i===void 0)&&i.load)a();else{const l=V0("iframefcb");return Vt()[l]=()=>{gapi.load?a():t(jt(n,"network-request-failed"))},If(`${O0()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw qi=null,e})}let qi=null;function Qv(n){return qi=qi||Kv(n),qi}/**
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
 */const Yv=new Xs(5e3,15e3),Xv="__/auth/iframe",Jv="emulator/auth/iframe",Zv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ew=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tw(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bc(e,Jv):`https://${n.config.authDomain}/${Xv}`,r={apiKey:e.apiKey,appName:n.name,v:cr},s=ew.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ys(r).slice(1)}`}async function nw(n){const e=await Qv(n),t=Vt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:tw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=jt(n,"network-request-failed"),l=Vt().setTimeout(()=>{i(a)},Yv.get());function u(){Vt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const rw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sw=500,iw=600,ow="_blank",aw="http://localhost";class od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cw(n,e,t,r=sw,s=iw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},rw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ze().toLowerCase();t&&(l=_f(h)?ow:t),pf(h)&&(e=e||aw,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[x,I])=>`${g}${x}=${I},`,"");if(A0(h)&&l!=="_self")return lw(e||"",l),new od(null);const y=window.open(e||"",l,m);G(y,n,"popup-blocked");try{y.focus()}catch{}return new od(y)}function lw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const uw="__/auth/handler",dw="emulator/auth/handler",hw=encodeURIComponent("fac");async function ad(n,e,t,r,s,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:cr,eventId:s};if(e instanceof Pc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof Zs){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),h=u?`#${hw}=${encodeURIComponent(u)}`:"";return`${fw(n)}?${Ys(l).slice(1)}${h}`}function fw({config:n}){return n.emulator?bc(n,dw):`https://${n.authDomain}/${uw}`}/**
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
 */const Ra="webStorageSupport";class mw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Df,this._completeRedirectFn=$f,this._overrideRedirectResult=Ov}async _openPopup(e,t,r,s){var i;tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ad(e,t,r,Qa(),s);return cw(e,a,Sc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ad(e,t,r,Qa(),s);return yv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await nw(e),r=new Uv(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ra,{type:Ra},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ra];a!==void 0&&t(!!a),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ef()||yf()||Tc()}}const gw=mw;var cd="@firebase/auth",ld="1.7.9";/**
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
 */class pw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _w(n){Et(new mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tf(n)},h=new k0(r,s,i,u);return B0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Et(new mt("auth-internal",e=>{const t=$t(e.getProvider("auth").getImmediate());return(r=>new pw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(cd,ld,yw(n)),rt(cd,ld,"esm2017")}/**
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
 */const vw=5*60,ww=Yh("authIdTokenMaxAge")||vw;let ud=null;const xw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ww)return;const s=t==null?void 0:t.token;ud!==s&&(ud=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bw(n=Io()){const e=Dn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=U0(n,{popupRedirectResolver:gw,persistence:[Av,mv,Df]}),r=Yh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=xw(i.toString());uv(t,a,()=>a(t.currentUser)),lv(t,l=>a(l))}}const s=Gh("auth");return s&&$0(t,`http://${s}`),t}function Ew(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}D0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=jt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Ew().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_w("Browser");var dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xn,Wf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,v){function w(){}w.prototype=v.prototype,P.D=v.prototype,P.prototype=new w,P.prototype.constructor=P,P.C=function(E,S,N){for(var b=Array(arguments.length-2),z=2;z<arguments.length;z++)b[z-2]=arguments[z];return v.prototype[S].apply(E,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(P,v,w){w||(w=0);var E=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)E[S]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(S=0;16>S;++S)E[S]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=P.g[0],w=P.g[1],S=P.g[2];var N=P.g[3],b=v+(N^w&(S^N))+E[0]+3614090360&4294967295;v=w+(b<<7&4294967295|b>>>25),b=N+(S^v&(w^S))+E[1]+3905402710&4294967295,N=v+(b<<12&4294967295|b>>>20),b=S+(w^N&(v^w))+E[2]+606105819&4294967295,S=N+(b<<17&4294967295|b>>>15),b=w+(v^S&(N^v))+E[3]+3250441966&4294967295,w=S+(b<<22&4294967295|b>>>10),b=v+(N^w&(S^N))+E[4]+4118548399&4294967295,v=w+(b<<7&4294967295|b>>>25),b=N+(S^v&(w^S))+E[5]+1200080426&4294967295,N=v+(b<<12&4294967295|b>>>20),b=S+(w^N&(v^w))+E[6]+2821735955&4294967295,S=N+(b<<17&4294967295|b>>>15),b=w+(v^S&(N^v))+E[7]+4249261313&4294967295,w=S+(b<<22&4294967295|b>>>10),b=v+(N^w&(S^N))+E[8]+1770035416&4294967295,v=w+(b<<7&4294967295|b>>>25),b=N+(S^v&(w^S))+E[9]+2336552879&4294967295,N=v+(b<<12&4294967295|b>>>20),b=S+(w^N&(v^w))+E[10]+4294925233&4294967295,S=N+(b<<17&4294967295|b>>>15),b=w+(v^S&(N^v))+E[11]+2304563134&4294967295,w=S+(b<<22&4294967295|b>>>10),b=v+(N^w&(S^N))+E[12]+1804603682&4294967295,v=w+(b<<7&4294967295|b>>>25),b=N+(S^v&(w^S))+E[13]+4254626195&4294967295,N=v+(b<<12&4294967295|b>>>20),b=S+(w^N&(v^w))+E[14]+2792965006&4294967295,S=N+(b<<17&4294967295|b>>>15),b=w+(v^S&(N^v))+E[15]+1236535329&4294967295,w=S+(b<<22&4294967295|b>>>10),b=v+(S^N&(w^S))+E[1]+4129170786&4294967295,v=w+(b<<5&4294967295|b>>>27),b=N+(w^S&(v^w))+E[6]+3225465664&4294967295,N=v+(b<<9&4294967295|b>>>23),b=S+(v^w&(N^v))+E[11]+643717713&4294967295,S=N+(b<<14&4294967295|b>>>18),b=w+(N^v&(S^N))+E[0]+3921069994&4294967295,w=S+(b<<20&4294967295|b>>>12),b=v+(S^N&(w^S))+E[5]+3593408605&4294967295,v=w+(b<<5&4294967295|b>>>27),b=N+(w^S&(v^w))+E[10]+38016083&4294967295,N=v+(b<<9&4294967295|b>>>23),b=S+(v^w&(N^v))+E[15]+3634488961&4294967295,S=N+(b<<14&4294967295|b>>>18),b=w+(N^v&(S^N))+E[4]+3889429448&4294967295,w=S+(b<<20&4294967295|b>>>12),b=v+(S^N&(w^S))+E[9]+568446438&4294967295,v=w+(b<<5&4294967295|b>>>27),b=N+(w^S&(v^w))+E[14]+3275163606&4294967295,N=v+(b<<9&4294967295|b>>>23),b=S+(v^w&(N^v))+E[3]+4107603335&4294967295,S=N+(b<<14&4294967295|b>>>18),b=w+(N^v&(S^N))+E[8]+1163531501&4294967295,w=S+(b<<20&4294967295|b>>>12),b=v+(S^N&(w^S))+E[13]+2850285829&4294967295,v=w+(b<<5&4294967295|b>>>27),b=N+(w^S&(v^w))+E[2]+4243563512&4294967295,N=v+(b<<9&4294967295|b>>>23),b=S+(v^w&(N^v))+E[7]+1735328473&4294967295,S=N+(b<<14&4294967295|b>>>18),b=w+(N^v&(S^N))+E[12]+2368359562&4294967295,w=S+(b<<20&4294967295|b>>>12),b=v+(w^S^N)+E[5]+4294588738&4294967295,v=w+(b<<4&4294967295|b>>>28),b=N+(v^w^S)+E[8]+2272392833&4294967295,N=v+(b<<11&4294967295|b>>>21),b=S+(N^v^w)+E[11]+1839030562&4294967295,S=N+(b<<16&4294967295|b>>>16),b=w+(S^N^v)+E[14]+4259657740&4294967295,w=S+(b<<23&4294967295|b>>>9),b=v+(w^S^N)+E[1]+2763975236&4294967295,v=w+(b<<4&4294967295|b>>>28),b=N+(v^w^S)+E[4]+1272893353&4294967295,N=v+(b<<11&4294967295|b>>>21),b=S+(N^v^w)+E[7]+4139469664&4294967295,S=N+(b<<16&4294967295|b>>>16),b=w+(S^N^v)+E[10]+3200236656&4294967295,w=S+(b<<23&4294967295|b>>>9),b=v+(w^S^N)+E[13]+681279174&4294967295,v=w+(b<<4&4294967295|b>>>28),b=N+(v^w^S)+E[0]+3936430074&4294967295,N=v+(b<<11&4294967295|b>>>21),b=S+(N^v^w)+E[3]+3572445317&4294967295,S=N+(b<<16&4294967295|b>>>16),b=w+(S^N^v)+E[6]+76029189&4294967295,w=S+(b<<23&4294967295|b>>>9),b=v+(w^S^N)+E[9]+3654602809&4294967295,v=w+(b<<4&4294967295|b>>>28),b=N+(v^w^S)+E[12]+3873151461&4294967295,N=v+(b<<11&4294967295|b>>>21),b=S+(N^v^w)+E[15]+530742520&4294967295,S=N+(b<<16&4294967295|b>>>16),b=w+(S^N^v)+E[2]+3299628645&4294967295,w=S+(b<<23&4294967295|b>>>9),b=v+(S^(w|~N))+E[0]+4096336452&4294967295,v=w+(b<<6&4294967295|b>>>26),b=N+(w^(v|~S))+E[7]+1126891415&4294967295,N=v+(b<<10&4294967295|b>>>22),b=S+(v^(N|~w))+E[14]+2878612391&4294967295,S=N+(b<<15&4294967295|b>>>17),b=w+(N^(S|~v))+E[5]+4237533241&4294967295,w=S+(b<<21&4294967295|b>>>11),b=v+(S^(w|~N))+E[12]+1700485571&4294967295,v=w+(b<<6&4294967295|b>>>26),b=N+(w^(v|~S))+E[3]+2399980690&4294967295,N=v+(b<<10&4294967295|b>>>22),b=S+(v^(N|~w))+E[10]+4293915773&4294967295,S=N+(b<<15&4294967295|b>>>17),b=w+(N^(S|~v))+E[1]+2240044497&4294967295,w=S+(b<<21&4294967295|b>>>11),b=v+(S^(w|~N))+E[8]+1873313359&4294967295,v=w+(b<<6&4294967295|b>>>26),b=N+(w^(v|~S))+E[15]+4264355552&4294967295,N=v+(b<<10&4294967295|b>>>22),b=S+(v^(N|~w))+E[6]+2734768916&4294967295,S=N+(b<<15&4294967295|b>>>17),b=w+(N^(S|~v))+E[13]+1309151649&4294967295,w=S+(b<<21&4294967295|b>>>11),b=v+(S^(w|~N))+E[4]+4149444226&4294967295,v=w+(b<<6&4294967295|b>>>26),b=N+(w^(v|~S))+E[11]+3174756917&4294967295,N=v+(b<<10&4294967295|b>>>22),b=S+(v^(N|~w))+E[2]+718787259&4294967295,S=N+(b<<15&4294967295|b>>>17),b=w+(N^(S|~v))+E[9]+3951481745&4294967295,P.g[0]=P.g[0]+v&4294967295,P.g[1]=P.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,P.g[2]=P.g[2]+S&4294967295,P.g[3]=P.g[3]+N&4294967295}r.prototype.u=function(P,v){v===void 0&&(v=P.length);for(var w=v-this.blockSize,E=this.B,S=this.h,N=0;N<v;){if(S==0)for(;N<=w;)s(this,P,N),N+=this.blockSize;if(typeof P=="string"){for(;N<v;)if(E[S++]=P.charCodeAt(N++),S==this.blockSize){s(this,E),S=0;break}}else for(;N<v;)if(E[S++]=P[N++],S==this.blockSize){s(this,E),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var v=1;v<P.length-8;++v)P[v]=0;var w=8*this.o;for(v=P.length-8;v<P.length;++v)P[v]=w&255,w/=256;for(this.u(P),P=Array(16),v=w=0;4>v;++v)for(var E=0;32>E;E+=8)P[w++]=this.g[v]>>>E&255;return P};function i(P,v){var w=l;return Object.prototype.hasOwnProperty.call(w,P)?w[P]:w[P]=v(P)}function a(P,v){this.h=v;for(var w=[],E=!0,S=P.length-1;0<=S;S--){var N=P[S]|0;E&&N==v||(w[S]=N,E=!1)}this.g=w}var l={};function u(P){return-128<=P&&128>P?i(P,function(v){return new a([v|0],0>v?-1:0)}):new a([P|0],0>P?-1:0)}function h(P){if(isNaN(P)||!isFinite(P))return y;if(0>P)return _(h(-P));for(var v=[],w=1,E=0;P>=w;E++)v[E]=P/w|0,w*=4294967296;return new a(v,0)}function m(P,v){if(P.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P.charAt(0)=="-")return _(m(P.substring(1),v));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),E=y,S=0;S<P.length;S+=8){var N=Math.min(8,P.length-S),b=parseInt(P.substring(S,S+N),v);8>N?(N=h(Math.pow(v,N)),E=E.j(N).add(h(b))):(E=E.j(w),E=E.add(h(b)))}return E}var y=u(0),g=u(1),x=u(16777216);n=a.prototype,n.m=function(){if(T(this))return-_(this).m();for(var P=0,v=1,w=0;w<this.g.length;w++){var E=this.i(w);P+=(0<=E?E:4294967296+E)*v,v*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(I(this))return"0";if(T(this))return"-"+_(this).toString(P);for(var v=h(Math.pow(P,6)),w=this,E="";;){var S=L(w,v).g;w=V(w,S.j(v));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(P);if(w=S,I(w))return N+E;for(;6>N.length;)N="0"+N;E=N+E}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function I(P){if(P.h!=0)return!1;for(var v=0;v<P.g.length;v++)if(P.g[v]!=0)return!1;return!0}function T(P){return P.h==-1}n.l=function(P){return P=V(this,P),T(P)?-1:I(P)?0:1};function _(P){for(var v=P.g.length,w=[],E=0;E<v;E++)w[E]=~P.g[E];return new a(w,~P.h).add(g)}n.abs=function(){return T(this)?_(this):this},n.add=function(P){for(var v=Math.max(this.g.length,P.g.length),w=[],E=0,S=0;S<=v;S++){var N=E+(this.i(S)&65535)+(P.i(S)&65535),b=(N>>>16)+(this.i(S)>>>16)+(P.i(S)>>>16);E=b>>>16,N&=65535,b&=65535,w[S]=b<<16|N}return new a(w,w[w.length-1]&-2147483648?-1:0)};function V(P,v){return P.add(_(v))}n.j=function(P){if(I(this)||I(P))return y;if(T(this))return T(P)?_(this).j(_(P)):_(_(this).j(P));if(T(P))return _(this.j(_(P)));if(0>this.l(x)&&0>P.l(x))return h(this.m()*P.m());for(var v=this.g.length+P.g.length,w=[],E=0;E<2*v;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var S=0;S<P.g.length;S++){var N=this.i(E)>>>16,b=this.i(E)&65535,z=P.i(S)>>>16,de=P.i(S)&65535;w[2*E+2*S]+=b*de,A(w,2*E+2*S),w[2*E+2*S+1]+=N*de,A(w,2*E+2*S+1),w[2*E+2*S+1]+=b*z,A(w,2*E+2*S+1),w[2*E+2*S+2]+=N*z,A(w,2*E+2*S+2)}for(E=0;E<v;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=v;E<2*v;E++)w[E]=0;return new a(w,0)};function A(P,v){for(;(P[v]&65535)!=P[v];)P[v+1]+=P[v]>>>16,P[v]&=65535,v++}function j(P,v){this.g=P,this.h=v}function L(P,v){if(I(v))throw Error("division by zero");if(I(P))return new j(y,y);if(T(P))return v=L(_(P),v),new j(_(v.g),_(v.h));if(T(v))return v=L(P,_(v)),new j(_(v.g),v.h);if(30<P.g.length){if(T(P)||T(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,E=v;0>=E.l(P);)w=W(w),E=W(E);var S=H(w,1),N=H(E,1);for(E=H(E,2),w=H(w,2);!I(E);){var b=N.add(E);0>=b.l(P)&&(S=S.add(w),N=b),E=H(E,1),w=H(w,1)}return v=V(P,S.j(v)),new j(S,v)}for(S=y;0<=P.l(v);){for(w=Math.max(1,Math.floor(P.m()/v.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),N=h(w),b=N.j(v);T(b)||0<b.l(P);)w-=E,N=h(w),b=N.j(v);I(N)&&(N=g),S=S.add(N),P=V(P,b)}return new j(S,P)}n.A=function(P){return L(this,P).h},n.and=function(P){for(var v=Math.max(this.g.length,P.g.length),w=[],E=0;E<v;E++)w[E]=this.i(E)&P.i(E);return new a(w,this.h&P.h)},n.or=function(P){for(var v=Math.max(this.g.length,P.g.length),w=[],E=0;E<v;E++)w[E]=this.i(E)|P.i(E);return new a(w,this.h|P.h)},n.xor=function(P){for(var v=Math.max(this.g.length,P.g.length),w=[],E=0;E<v;E++)w[E]=this.i(E)^P.i(E);return new a(w,this.h^P.h)};function W(P){for(var v=P.g.length+1,w=[],E=0;E<v;E++)w[E]=P.i(E)<<1|P.i(E-1)>>>31;return new a(w,P.h)}function H(P,v){var w=v>>5;v%=32;for(var E=P.g.length-w,S=[],N=0;N<E;N++)S[N]=0<v?P.i(N+w)>>>v|P.i(N+w+1)<<32-v:P.i(N+w);return new a(S,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,Xn=a}).apply(typeof dd<"u"?dd:typeof self<"u"?self:typeof window<"u"?window:{});var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hf,xs,zf,Wi,Ja,Gf,Kf,Qf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,d,f){return o==Array.prototype||o==Object.prototype||(o[d]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Di=="object"&&Di];for(var d=0;d<o.length;++d){var f=o[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,d){if(d)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],d=d(p),d!=p&&d!=null&&e(f,o,{configurable:!0,writable:!0,value:d})}}function i(o,d){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var C=f++;return{value:d(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var d=typeof o;return d=d!="object"?d:o?Array.isArray(o)?"array":d:"null",d=="array"||d=="object"&&typeof o.length=="number"}function h(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function m(o,d,f){return o.call.apply(o.bind,arguments)}function y(o,d,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(d,R)}}return function(){return o.apply(d,arguments)}}function g(o,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,g.apply(null,arguments)}function x(o,d){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function I(o,d){function f(){}f.prototype=d.prototype,o.aa=d.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,C){for(var F=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)F[fe-2]=arguments[fe];return d.prototype[R].apply(p,F)}}function T(o){const d=o.length;if(0<d){const f=Array(d);for(let p=0;p<d;p++)f[p]=o[p];return f}return[]}function _(o,d){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(u(p)){const R=o.length||0,C=p.length||0;o.length=R+C;for(let F=0;F<C;F++)o[R+F]=p[F]}else o.push(p)}}class V{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function A(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var W=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function H(o,d,f){for(const p in o)d.call(f,o[p],p,o)}function P(o,d){for(const f in o)d.call(void 0,o[f],f,o)}function v(o){const d={};for(const f in o)d[f]=o[f];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,d){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let C=0;C<w.length;C++)f=w[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function S(o){var d=1;o=o.split(":");const f=[];for(;0<d&&o.length;)f.push(o.shift()),d--;return o.length&&f.push(o.join(":")),f}function N(o){l.setTimeout(()=>{throw o},0)}function b(){var o=Vn;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class z{constructor(){this.h=this.g=null}add(d,f){const p=de.get();p.set(d,f),this.h?this.h.next=p:this.g=p,this.h=p}}var de=new V(()=>new he,o=>o.reset());class he{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,ht=!1,Vn=new z,hr=()=>{const o=l.Promise.resolve(void 0);Ge=()=>{o.then(Jr)}};var Jr=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(f){N(f)}var d=de;d.j(o),100>d.h&&(d.h++,o.next=d.g,d.g=o)}ht=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var Wt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return o}();function Pt(o,d){if(ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget){if(W){e:{try{L(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else f=="mouseover"?d=o.fromElement:f=="mouseout"&&(d=o.toElement);this.relatedTarget=d,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:B[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Pt.aa.h.call(this)}}I(Pt,ee);var B={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Z="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function at(o,d,f,p,R){this.listener=o,this.proxy=null,this.src=d,this.type=f,this.capture=!!p,this.ha=R,this.key=++Ht,this.da=this.fa=!1}function fr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function mr(o){this.src=o,this.g={},this.h=0}mr.prototype.add=function(o,d,f,p,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var F=St(o,d,p,R);return-1<F?(d=o[F],f||(d.fa=!1)):(d=new at(d,this.src,C,!!p,R),d.fa=f,o.push(d)),d};function Zr(o,d){var f=d.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,d,void 0),C;(C=0<=R)&&Array.prototype.splice.call(p,R,1),C&&(fr(d),o.g[f].length==0&&(delete o.g[f],o.h--))}}function St(o,d,f,p){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==d&&C.capture==!!f&&C.ha==p)return R}return-1}var Zo="closure_lm_"+(1e6*Math.random()|0),ea={};function Al(o,d,f,p,R){if(Array.isArray(d)){for(var C=0;C<d.length;C++)Al(o,d[C],f,p,R);return null}return f=Rl(f),o&&o[Z]?o.K(d,f,h(p)?!!p.capture:!1,R):gp(o,d,f,!1,p,R)}function gp(o,d,f,p,R,C){if(!d)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,fe=na(o);if(fe||(o[Zo]=fe=new mr(o)),f=fe.add(d,f,p,F,C),f.proxy)return f;if(p=pp(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)Wt||(R=F),R===void 0&&(R=!1),o.addEventListener(d.toString(),p,R);else if(o.attachEvent)o.attachEvent(Sl(d.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function pp(){function o(f){return d.call(o.src,o.listener,f)}const d=yp;return o}function Pl(o,d,f,p,R){if(Array.isArray(d))for(var C=0;C<d.length;C++)Pl(o,d[C],f,p,R);else p=h(p)?!!p.capture:!!p,f=Rl(f),o&&o[Z]?(o=o.i,d=String(d).toString(),d in o.g&&(C=o.g[d],f=St(C,f,p,R),-1<f&&(fr(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[d],o.h--)))):o&&(o=na(o))&&(d=o.g[d.toString()],o=-1,d&&(o=St(d,f,p,R)),(f=-1<o?d[o]:null)&&ta(f))}function ta(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[Z])Zr(d.i,o);else{var f=o.type,p=o.proxy;d.removeEventListener?d.removeEventListener(f,p,o.capture):d.detachEvent?d.detachEvent(Sl(f),p):d.addListener&&d.removeListener&&d.removeListener(p),(f=na(d))?(Zr(f,o),f.h==0&&(f.src=null,d[Zo]=null)):fr(o)}}}function Sl(o){return o in ea?ea[o]:ea[o]="on"+o}function yp(o,d){if(o.da)o=!0;else{d=new Pt(d,this);var f=o.listener,p=o.ha||o.src;o.fa&&ta(o),o=f.call(p,d)}return o}function na(o){return o=o[Zo],o instanceof mr?o:null}var ra="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rl(o){return typeof o=="function"?o:(o[ra]||(o[ra]=function(d){return o.handleEvent(d)}),o[ra])}function Le(){ye.call(this),this.i=new mr(this),this.M=this,this.F=null}I(Le,ye),Le.prototype[Z]=!0,Le.prototype.removeEventListener=function(o,d,f,p){Pl(this,o,d,f,p)};function Ke(o,d){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=d.type||d,typeof d=="string")d=new ee(d,o);else if(d instanceof ee)d.target=d.target||o;else{var R=d;d=new ee(p,o),E(d,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var F=d.g=f[C];R=mi(F,p,!0,d)&&R}if(F=d.g=o,R=mi(F,p,!0,d)&&R,R=mi(F,p,!1,d)&&R,f)for(C=0;C<f.length;C++)F=d.g=f[C],R=mi(F,p,!1,d)&&R}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var o=this.i,d;for(d in o.g){for(var f=o.g[d],p=0;p<f.length;p++)fr(f[p]);delete o.g[d],o.h--}}this.F=null},Le.prototype.K=function(o,d,f,p){return this.i.add(String(o),d,!1,f,p)},Le.prototype.L=function(o,d,f,p){return this.i.add(String(o),d,!0,f,p)};function mi(o,d,f,p){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,C=0;C<d.length;++C){var F=d[C];if(F&&!F.da&&F.capture==f){var fe=F.listener,De=F.ha||F.src;F.fa&&Zr(o.i,F),R=fe.call(De,p)!==!1&&R}}return R&&!p.defaultPrevented}function Nl(o,d,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(o,d||0)}function Cl(o){o.g=Nl(()=>{o.g=null,o.i&&(o.i=!1,Cl(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class _p extends ye{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Cl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(o){ye.call(this),this.h=o,this.g={}}I(es,ye);var kl=[];function Dl(o){H(o.g,function(d,f){this.g.hasOwnProperty(f)&&ta(d)},o),o.g={}}es.prototype.N=function(){es.aa.N.call(this),Dl(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sa=l.JSON.stringify,vp=l.JSON.parse,wp=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ia(){}ia.prototype.h=null;function jl(o){return o.h||(o.h=o.i())}function Ol(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oa(){ee.call(this,"d")}I(oa,ee);function aa(){ee.call(this,"c")}I(aa,ee);var Mn={},Vl=null;function gi(){return Vl=Vl||new Le}Mn.La="serverreachability";function Ml(o){ee.call(this,Mn.La,o)}I(Ml,ee);function ns(o){const d=gi();Ke(d,new Ml(d))}Mn.STAT_EVENT="statevent";function Ll(o,d){ee.call(this,Mn.STAT_EVENT,o),this.stat=d}I(Ll,ee);function Qe(o){const d=gi();Ke(d,new Ll(d,o))}Mn.Ma="timingevent";function Fl(o,d){ee.call(this,Mn.Ma,o),this.size=d}I(Fl,ee);function rs(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},d)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function xp(o,d,f,p,R,C){o.info(function(){if(o.g)if(C)for(var F="",fe=C.split("&"),De=0;De<fe.length;De++){var ie=fe[De].split("=");if(1<ie.length){var Fe=ie[0];ie=ie[1];var Ue=Fe.split("_");F=2<=Ue.length&&Ue[1]=="type"?F+(Fe+"="+ie+"&"):F+(Fe+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+d+`
`+f+`
`+F})}function bp(o,d,f,p,R,C,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+d+`
`+f+`
`+C+" "+F})}function gr(o,d,f,p){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+Tp(o,f)+(p?" "+p:"")})}function Ep(o,d){o.info(function(){return"TIMEOUT: "+d})}ss.prototype.info=function(){};function Tp(o,d){if(!o.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return sa(f)}catch{return d}}var pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ul={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ca;function yi(){}I(yi,ia),yi.prototype.g=function(){return new XMLHttpRequest},yi.prototype.i=function(){return{}},ca=new yi;function cn(o,d,f,p){this.j=o,this.i=d,this.l=f,this.R=p||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bl}function Bl(){this.i=null,this.g="",this.h=!1}var $l={},la={};function ua(o,d,f){o.L=1,o.v=xi(zt(d)),o.m=f,o.P=!0,ql(o,null)}function ql(o,d){o.F=Date.now(),_i(o),o.A=zt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ru(f.i,"t",p),o.C=0,f=o.j.J,o.h=new Bl,o.g=xu(o.j,f?d:null,!o.m),0<o.O&&(o.M=new _p(g(o.Y,o,o.g),o.O)),d=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(kl[0]=R.toString()),R=kl);for(var C=0;C<R.length;C++){var F=Al(f,R[C],p||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,d)):(o.u="GET",o.g.ea(o.A,o.u,null,d)),ns(),xp(o.i,o.u,o.A,o.l,o.R,o.m)}cn.prototype.ca=function(o){o=o.target;const d=this.M;d&&Gt(o)==3?d.j():this.Y(o)},cn.prototype.Y=function(o){try{if(o==this.g)e:{const Ue=Gt(this.g);var d=this.g.Ba();const _r=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||uu(this.g)))){this.J||Ue!=4||d==7||(d==8||0>=_r?ns(3):ns(2)),da(this);var f=this.g.Z();this.X=f;t:if(Wl(this)){var p=uu(this.g);o="";var R=p.length,C=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),is(this);var F="";break t}this.h.i=new l.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,o+=this.h.i.decode(p[d],{stream:!(C&&d==R-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,bp(this.i,this.u,this.A,this.l,this.R,Ue,f),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,De=this.g;if((fe=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(fe)){var ie=fe;break t}}ie=null}if(f=ie)gr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ha(this,f);else{this.o=!1,this.s=3,Qe(12),Ln(this),is(this);break e}}if(this.P){f=!0;let _t;for(;!this.J&&this.C<F.length;)if(_t=Ip(this,F),_t==la){Ue==4&&(this.s=4,Qe(14),f=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==$l){this.s=4,Qe(15),gr(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else gr(this.i,this.l,_t,null),ha(this,_t);if(Wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||F.length!=0||this.h.h||(this.s=1,Qe(16),f=!1),this.o=this.o&&f,!f)gr(this.i,this.l,F,"[Invalid Chunked Response]"),Ln(this),is(this);else if(0<F.length&&!this.W){this.W=!0;var Fe=this.j;Fe.g==this&&Fe.ba&&!Fe.M&&(Fe.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),_a(Fe),Fe.M=!0,Qe(11))}}else gr(this.i,this.l,F,null),ha(this,F);Ue==4&&Ln(this),this.o&&!this.J&&(Ue==4?yu(this.j,this):(this.o=!1,_i(this)))}else $p(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,Qe(12)):(this.s=0,Qe(13)),Ln(this),is(this)}}}catch{}finally{}};function Wl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ip(o,d){var f=o.C,p=d.indexOf(`
`,f);return p==-1?la:(f=Number(d.substring(f,p)),isNaN(f)?$l:(p+=1,p+f>d.length?la:(d=d.slice(p,p+f),o.C=p+f,d)))}cn.prototype.cancel=function(){this.J=!0,Ln(this)};function _i(o){o.S=Date.now()+o.I,Hl(o,o.I)}function Hl(o,d){if(o.B!=null)throw Error("WatchDog timer not null");o.B=rs(g(o.ba,o),d)}function da(o){o.B&&(l.clearTimeout(o.B),o.B=null)}cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ep(this.i,this.A),this.L!=2&&(ns(),Qe(17)),Ln(this),this.s=2,is(this)):Hl(this,this.S-o)};function is(o){o.j.G==0||o.J||yu(o.j,o)}function Ln(o){da(o);var d=o.M;d&&typeof d.ma=="function"&&d.ma(),o.M=null,Dl(o.U),o.g&&(d=o.g,o.g=null,d.abort(),d.ma())}function ha(o,d){try{var f=o.j;if(f.G!=0&&(f.g==o||fa(f.h,o))){if(!o.K&&fa(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(d)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Pi(f),Ii(f);else break e;ya(f),Qe(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=rs(g(f.Za,f),6e3));if(1>=Kl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Un(f,11)}else if((o.K||f.g==o)&&Pi(f),!A(d))for(R=f.Da.g.parse(d),d=0;d<R.length;d++){let ie=R[d];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const Fe=ie[3];Fe!=null&&(f.la=Fe,f.j.info("VER="+f.la));const Ue=ie[4];Ue!=null&&(f.Aa=Ue,f.j.info("SVER="+f.Aa));const _r=ie[5];_r!=null&&typeof _r=="number"&&0<_r&&(p=1.5*_r,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const _t=o.g;if(_t){const Ri=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var C=p.h;C.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ma(C,C.h),C.h=null))}if(p.D){const va=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;va&&(p.ya=va,ge(p.I,p.D,va))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var F=o;if(p.qa=wu(p,p.J?p.ia:null,p.W),F.K){Ql(p.h,F);var fe=F,De=p.L;De&&(fe.I=De),fe.B&&(da(fe),_i(fe)),p.g=F}else gu(p);0<f.i.length&&Ai(f)}else ie[0]!="stop"&&ie[0]!="close"||Un(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Un(f,7):pa(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}ns(4)}catch{}}var Ap=class{constructor(o,d){this.g=o,this.map=d}};function zl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Kl(o){return o.h?1:o.g?o.g.size:0}function fa(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function ma(o,d){o.g?o.g.add(d):o.h=d}function Ql(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}zl.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Yl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const f of o.g.values())d=d.concat(f.D);return d}return T(o.i)}function Pp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var d=[],f=o.length,p=0;p<f;p++)d.push(o[p]);return d}d=[],f=0;for(p in o)d[f++]=o[p];return d}function Sp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var d=[];o=o.length;for(var f=0;f<o;f++)d.push(f);return d}d=[],f=0;for(const p in o)d[f++]=p;return d}}}function Xl(o,d){if(o.forEach&&typeof o.forEach=="function")o.forEach(d,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,d,void 0);else for(var f=Sp(o),p=Pp(o),R=p.length,C=0;C<R;C++)d.call(void 0,p[C],f&&f[C],o)}var Jl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rp(o,d){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var C=o[f].substring(0,p);R=o[f].substring(p+1)}else C=o[f];d(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Fn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Fn){this.h=o.h,vi(this,o.j),this.o=o.o,this.g=o.g,wi(this,o.s),this.l=o.l;var d=o.i,f=new cs;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Zl(this,f),this.m=o.m}else o&&(d=String(o).match(Jl))?(this.h=!1,vi(this,d[1]||"",!0),this.o=os(d[2]||""),this.g=os(d[3]||"",!0),wi(this,d[4]),this.l=os(d[5]||"",!0),Zl(this,d[6]||"",!0),this.m=os(d[7]||"")):(this.h=!1,this.i=new cs(null,this.h))}Fn.prototype.toString=function(){var o=[],d=this.j;d&&o.push(as(d,eu,!0),":");var f=this.g;return(f||d=="file")&&(o.push("//"),(d=this.o)&&o.push(as(d,eu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(as(f,f.charAt(0)=="/"?kp:Cp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",as(f,jp)),o.join("")};function zt(o){return new Fn(o)}function vi(o,d,f){o.j=f?os(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function wi(o,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);o.s=d}else o.s=null}function Zl(o,d,f){d instanceof cs?(o.i=d,Op(o.i,o.h)):(f||(d=as(d,Dp)),o.i=new cs(d,o.h))}function ge(o,d,f){o.i.set(d,f)}function xi(o){return ge(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function os(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function as(o,d,f){return typeof o=="string"?(o=encodeURI(o).replace(d,Np),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Np(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var eu=/[#\/\?@]/g,Cp=/[#\?:]/g,kp=/[#\?]/g,Dp=/[#\?@]/g,jp=/#/g;function cs(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function ln(o){o.g||(o.g=new Map,o.h=0,o.i&&Rp(o.i,function(d,f){o.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=cs.prototype,n.add=function(o,d){ln(this),this.i=null,o=pr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(d),this.h+=1,this};function tu(o,d){ln(o),d=pr(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function nu(o,d){return ln(o),d=pr(o,d),o.g.has(d)}n.forEach=function(o,d){ln(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(d,R,p,this)},this)},this)},n.na=function(){ln(this);const o=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let p=0;p<d.length;p++){const R=o[p];for(let C=0;C<R.length;C++)f.push(d[p])}return f},n.V=function(o){ln(this);let d=[];if(typeof o=="string")nu(this,o)&&(d=d.concat(this.g.get(pr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)d=d.concat(o[f])}return d},n.set=function(o,d){return ln(this),this.i=null,o=pr(this,o),nu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},n.get=function(o,d){return o?(o=this.V(o),0<o.length?String(o[0]):d):d};function ru(o,d,f){tu(o,d),0<f.length&&(o.i=null,o.g.set(pr(o,d),T(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var p=d[f];const C=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var R=C;F[p]!==""&&(R+="="+encodeURIComponent(String(F[p]))),o.push(R)}}return this.i=o.join("&")};function pr(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function Op(o,d){d&&!o.j&&(ln(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(tu(this,p),ru(this,R,f))},o)),o.j=d}function Vp(o,d){const f=new ss;if(l.Image){const p=new Image;p.onload=x(un,f,"TestLoadImage: loaded",!0,d,p),p.onerror=x(un,f,"TestLoadImage: error",!1,d,p),p.onabort=x(un,f,"TestLoadImage: abort",!1,d,p),p.ontimeout=x(un,f,"TestLoadImage: timeout",!1,d,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else d(!1)}function Mp(o,d){const f=new ss,p=new AbortController,R=setTimeout(()=>{p.abort(),un(f,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?un(f,"TestPingServer: ok",!0,d):un(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),un(f,"TestPingServer: error",!1,d)})}function un(o,d,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function Lp(){this.g=new wp}function Fp(o,d,f){const p=f||"";try{Xl(o,function(R,C){let F=R;h(R)&&(F=sa(R)),d.push(p+C+"="+encodeURIComponent(F))})}catch(R){throw d.push(p+"type="+encodeURIComponent("_badmap")),R}}function bi(o){this.l=o.Ub||null,this.j=o.eb||!1}I(bi,ia),bi.prototype.g=function(){return new Ei(this.l,this.j)},bi.prototype.i=function(o){return function(){return o}}({});function Ei(o,d){Le.call(this),this.D=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ei,Le),n=Ei.prototype,n.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=d,this.readyState=1,us(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(d.body=o),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;su(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function su(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?ls(this):us(this),this.readyState==3&&su(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ls(this))},n.Qa=function(o){this.g&&(this.response=o,ls(this))},n.ga=function(){this.g&&ls(this)};function ls(o){o.readyState=4,o.l=null,o.j=null,o.v=null,us(o)}n.setRequestHeader=function(o,d){this.u.append(o,d)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=d.next();return o.join(`\r
`)};function us(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function iu(o){let d="";return H(o,function(f,p){d+=p,d+=":",d+=f,d+=`\r
`}),d}function ga(o,d,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=iu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ge(o,d,f))}function ve(o){Le.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(ve,Le);var Up=/^https?$/i,Bp=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,d,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ca.g(),this.v=this.o?jl(this.o):jl(ca),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(C){ou(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Bp,d,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,F]of f)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){ou(this,C)}};function ou(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.m=5,au(o),Ti(o)}function au(o){o.A||(o.A=!0,Ke(o,"complete"),Ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ke(this,"complete"),Ke(this,"abort"),Ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?cu(this):this.bb())},n.bb=function(){cu(this)};function cu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Gt(o)!=4||o.Z()!=2)){if(o.u&&Gt(o)==4)Nl(o.Ea,0,o);else if(Ke(o,"readystatechange"),Gt(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var p;if(p=F===0){var R=String(o.D).match(Jl)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Up.test(R?R.toLowerCase():"")}f=p}if(f)Ke(o,"complete"),Ke(o,"success");else{o.m=6;try{var C=2<Gt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",au(o)}}finally{Ti(o)}}}}function Ti(o,d){if(o.g){lu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,d||Ke(o,"ready");try{f.onreadystatechange=p}catch{}}}function lu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Gt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),vp(d)}};function uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $p(o){const d={};o=(o.g&&2<=Gt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(A(o[p]))continue;var f=S(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=d[R]||[];d[R]=C,C.push(f)}P(d,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(o,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||d}function du(o){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,o),this.cb=ds("retryDelaySeedMs",1e4,o),this.Wa=ds("forwardChannelMaxRetries",2,o),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new zl(o&&o.concurrentRequestLimit),this.Da=new Lp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=du.prototype,n.la=8,n.G=1,n.connect=function(o,d,f,p){Qe(0),this.W=o,this.H=d||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=wu(this,null,this.W),Ai(this)};function pa(o){if(hu(o),o.G==3){var d=o.U++,f=zt(o.I);if(ge(f,"SID",o.K),ge(f,"RID",d),ge(f,"TYPE","terminate"),hs(o,f),d=new cn(o,o.j,d),d.L=2,d.v=xi(zt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=xu(d.j,null),d.g.ea(d.v)),d.F=Date.now(),_i(d)}vu(o)}function Ii(o){o.g&&(_a(o),o.g.cancel(),o.g=null)}function hu(o){Ii(o),o.u&&(l.clearTimeout(o.u),o.u=null),Pi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ai(o){if(!Gl(o.h)&&!o.s){o.s=!0;var d=o.Ga;Ge||hr(),ht||(Ge(),ht=!0),Vn.add(d,o),o.B=0}}function qp(o,d){return Kl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=d.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=rs(g(o.Ga,o,d),_u(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new cn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=v(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(d+=p,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=mu(this,R,d),f=zt(this.I),ge(f,"RID",o),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),hs(this,f),C&&(this.O?d="headers="+encodeURIComponent(String(iu(C)))+"&"+d:this.m&&ga(f,this.m,C)),ma(this.h,R),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",d),ge(f,"SID","null"),R.T=!0,ua(R,f,null)):ua(R,f,d),this.G=2}}else this.G==3&&(o?fu(this,o):this.i.length==0||Gl(this.h)||fu(this))};function fu(o,d){var f;d?f=d.l:f=o.U++;const p=zt(o.I);ge(p,"SID",o.K),ge(p,"RID",f),ge(p,"AID",o.T),hs(o,p),o.m&&o.o&&ga(p,o.m,o.o),f=new cn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),d&&(o.i=d.D.concat(o.i)),d=mu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ma(o.h,f),ua(f,p,d)}function hs(o,d){o.H&&H(o.H,function(f,p){ge(d,p,f)}),o.l&&Xl({},function(f,p){ge(d,p,f)})}function mu(o,d,f){f=Math.min(o.i.length,f);var p=o.l?g(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const F=["count="+f];C==-1?0<f?(C=R[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let fe=!0;for(let De=0;De<f;De++){let ie=R[De].g;const Fe=R[De].map;if(ie-=C,0>ie)C=Math.max(0,R[De].g-100),fe=!1;else try{Fp(Fe,F,"req"+ie+"_")}catch{p&&p(Fe)}}if(fe){p=F.join("&");break e}}}return o=o.i.splice(0,f),d.D=o,p}function gu(o){if(!o.g&&!o.u){o.Y=1;var d=o.Fa;Ge||hr(),ht||(Ge(),ht=!0),Vn.add(d,o),o.v=0}}function ya(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=rs(g(o.Fa,o),_u(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=rs(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Qe(10),Ii(this),pu(this))};function _a(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function pu(o){o.g=new cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var d=zt(o.qa);ge(d,"RID","rpc"),ge(d,"SID",o.K),ge(d,"AID",o.T),ge(d,"CI",o.F?"0":"1"),!o.F&&o.ja&&ge(d,"TO",o.ja),ge(d,"TYPE","xmlhttp"),hs(o,d),o.m&&o.o&&ga(d,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=xi(zt(d)),f.m=null,f.P=!0,ql(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Ii(this),ya(this),Qe(19))};function Pi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function yu(o,d){var f=null;if(o.g==d){Pi(o),_a(o),o.g=null;var p=2}else if(fa(o.h,d))f=d.D,Ql(o.h,d),p=1;else return;if(o.G!=0){if(d.o)if(p==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var R=o.B;p=gi(),Ke(p,new Fl(p,f)),Ai(o)}else gu(o);else if(R=d.s,R==3||R==0&&0<d.X||!(p==1&&qp(o,d)||p==2&&ya(o)))switch(f&&0<f.length&&(d=o.h,d.i=d.i.concat(f)),R){case 1:Un(o,5);break;case 4:Un(o,10);break;case 3:Un(o,6);break;default:Un(o,2)}}}function _u(o,d){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*d}function Un(o,d){if(o.j.info("Error code "+d),d==2){var f=g(o.fb,o),p=o.Xa;const R=!p;p=new Fn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||vi(p,"https"),xi(p),R?Vp(p.toString(),f):Mp(p.toString(),f)}else Qe(2);o.G=0,o.l&&o.l.sa(d),vu(o),hu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function vu(o){if(o.G=0,o.ka=[],o.l){const d=Yl(o.h);(d.length!=0||o.i.length!=0)&&(_(o.ka,d),_(o.ka,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.ra()}}function wu(o,d,f){var p=f instanceof Fn?zt(f):new Fn(f);if(p.g!="")d&&(p.g=d+"."+p.g),wi(p,p.s);else{var R=l.location;p=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var C=new Fn(null);p&&vi(C,p),d&&(C.g=d),R&&wi(C,R),f&&(C.l=f),p=C}return f=o.D,d=o.ya,f&&d&&ge(p,f,d),ge(p,"VER",o.la),hs(o,p),p}function xu(o,d,f){if(d&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Ca&&!o.pa?new ve(new bi({eb:f})):new ve(o.pa),d.Ha(o.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bu(){}n=bu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Si(){}Si.prototype.g=function(o,d){return new ct(o,d)};function ct(o,d){Le.call(this),this.g=new du(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(o?o["X-WebChannel-Client-Profile"]=d.va:o={"X-WebChannel-Client-Profile":d.va}),this.g.S=o,(o=d&&d.Sb)&&!A(o)&&(this.g.m=o),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!A(d)&&(this.g.D=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new yr(this)}I(ct,Le),ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){pa(this.g)},ct.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=sa(o),o=f);d.i.push(new Ap(d.Ya++,o)),d.G==3&&Ai(d)},ct.prototype.N=function(){this.g.l=null,delete this.j,pa(this.g),delete this.g,ct.aa.N.call(this)};function Eu(o){oa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const f in d){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}I(Eu,oa);function Tu(){aa.call(this),this.status=1}I(Tu,aa);function yr(o){this.g=o}I(yr,bu),yr.prototype.ua=function(){Ke(this.g,"a")},yr.prototype.ta=function(o){Ke(this.g,new Eu(o))},yr.prototype.sa=function(o){Ke(this.g,new Tu)},yr.prototype.ra=function(){Ke(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,Qf=function(){return new Si},Kf=function(){return gi()},Gf=Mn,Ja={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Wi=pi,Ul.COMPLETE="complete",zf=Ul,Ol.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",Le.prototype.listen=Le.prototype.K,xs=Ol,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,Hf=ve}).apply(typeof Di<"u"?Di:typeof self<"u"?self:typeof window<"u"?window:{});const hd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new To("@firebase/firestore");function ms(){return tr.logLevel}function $(n,...e){if(tr.logLevel<=ne.DEBUG){const t=e.map(Nc);tr.debug(`Firestore (${Kr}): ${n}`,...t)}}function nn(n,...e){if(tr.logLevel<=ne.ERROR){const t=e.map(Nc);tr.error(`Firestore (${Kr}): ${n}`,...t)}}function Fr(n,...e){if(tr.logLevel<=ne.WARN){const t=e.map(Nc);tr.warn(`Firestore (${Kr}): ${n}`,...t)}}function Nc(n){if(typeof n=="string")return n;try{/**
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
 */function K(n="Unexpected state"){const e=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: `+n;throw nn(e),new Error(e)}function ue(n,e){n||K()}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}}class Iw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Aw{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new Yf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new We(e)}}class Pw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Sw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Pw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ue(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string"),this.R=t.token,new Rw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Cw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function Ur(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new re(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new re(0,0))}static max(){return new Q(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ls.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ls?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends Ls{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const kw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Ls{construct(e,t,r){return new Oe(e,t,r)}static isValidIdentifier(e){return kw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(pe.fromString(e))}static fromName(e){return new q(pe.fromString(e).popFirst(5))}static empty(){return new q(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new pe(e.slice()))}}function Dw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new re(t+1,0):new re(t,r));return new Rn(s,q.empty(),e)}function jw(n){return new Rn(n.readTime,n.key,-1)}class Rn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Rn(Q.min(),q.empty(),-1)}static max(){return new Rn(Q.max(),q.empty(),-1)}}function Ow(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const Vw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Vw)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(s=>s?M.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(m=>{a[h]=m,++l,l===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new M((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Lw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ni(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Cc.oe=-1;function Ro(n){return n==null}function io(n){return n===0&&1/n==-1/0}function Fw(n){return typeof n=="number"&&Number.isInteger(n)&&!io(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function lr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ji(this.root,e,this.comparator,!0)}}class ji{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,s,i){return this}insert(e,t,r){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class lt{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new lt([])}unionWith(e){let t=new Ve(Oe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new lt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ur(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Zf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zf("Invalid base64 string: "+i):i}}(e);return new Me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const Uw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(n){if(ue(!!n),typeof n=="string"){let e=0;const t=Uw.exec(n);if(ue(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(n.seconds),nanos:Te(n.nanos)}}function Te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nr(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
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
 */function kc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Dc(n){const e=n.mapValue.fields.__previous_value__;return kc(e)?Dc(e):e}function Fs(n){const e=Nn(n.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,r,s,i,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Us{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Us("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Us&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Oi={mapValue:{}};function rr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?kc(n)?4:qw(n)?9007199254740991:$w(n)?10:11:K()}function Ft(n,e){if(n===e)return!0;const t=rr(n);if(t!==rr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fs(n).isEqual(Fs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Nn(s.timestampValue),l=Nn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return nr(s.bytesValue).isEqual(nr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Te(s.geoPointValue.latitude)===Te(i.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Te(s.integerValue)===Te(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Te(s.doubleValue),l=Te(i.doubleValue);return a===l?io(a)===io(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Ur(n.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fd(a)!==fd(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ft(a[u],l[u])))return!1;return!0}(n,e);default:return K()}}function Bs(n,e){return(n.values||[]).find(t=>Ft(t,e))!==void 0}function Br(n,e){if(n===e)return 0;const t=rr(n),r=rr(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Te(i.integerValue||i.doubleValue),u=Te(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return gd(n.timestampValue,e.timestampValue);case 4:return gd(Fs(n),Fs(e));case 5:return ce(n.stringValue,e.stringValue);case 6:return function(i,a){const l=nr(i),u=nr(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const m=ce(l[h],u[h]);if(m!==0)return m}return ce(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ce(Te(i.latitude),Te(a.latitude));return l!==0?l:ce(Te(i.longitude),Te(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pd(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,h,m;const y=i.fields||{},g=a.fields||{},x=(l=y.value)===null||l===void 0?void 0:l.arrayValue,I=(u=g.value)===null||u===void 0?void 0:u.arrayValue,T=ce(((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0,((m=I==null?void 0:I.values)===null||m===void 0?void 0:m.length)||0);return T!==0?T:pd(x,I)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Oi.mapValue&&a===Oi.mapValue)return 0;if(i===Oi.mapValue)return 1;if(a===Oi.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const g=ce(u[y],m[y]);if(g!==0)return g;const x=Br(l[u[y]],h[m[y]]);if(x!==0)return x}return ce(u.length,m.length)}(n.mapValue,e.mapValue);default:throw K()}}function gd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=Nn(n),r=Nn(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function pd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Br(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function $r(n){return Za(n)}function Za(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Nn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return nr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Za(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Za(t.fields[a])}`;return s+"}"}(n.mapValue):K()}function yd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ec(n){return!!n&&"integerValue"in n}function jc(n){return!!n&&"arrayValue"in n}function _d(n){return!!n&&"nullValue"in n}function vd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hi(n){return!!n&&"mapValue"in n}function $w(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ps(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return lr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ps(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ps(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ps(t)}setAll(e){let t=Oe.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ps(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){lr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new nt(Ps(this.value))}}function em(n){const e=[];return lr(n.fields,(t,r)=>{const s=new Oe([t]);if(Hi(r)){const i=em(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new He(e,0,Q.min(),Q.min(),Q.min(),nt.empty(),0)}static newFoundDocument(e,t,r,s){return new He(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new He(e,2,t,Q.min(),Q.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,Q.min(),Q.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oo{constructor(e,t){this.position=e,this.inclusive=t}}function wd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=Br(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class $s{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ww(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class tm{}class Ae extends tm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new zw(e,t,r):t==="array-contains"?new Qw(e,r):t==="in"?new Yw(e,r):t==="not-in"?new Xw(e,r):t==="array-contains-any"?new Jw(e,r):new Ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Gw(e,r):new Kw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Br(t,this.value)):t!==null&&rr(this.value)===rr(t)&&this.matchesComparison(Br(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tt extends tm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Tt(e,t)}matches(e){return nm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nm(n){return n.op==="and"}function rm(n){return Hw(n)&&nm(n)}function Hw(n){for(const e of n.filters)if(e instanceof Tt)return!1;return!0}function tc(n){if(n instanceof Ae)return n.field.canonicalString()+n.op.toString()+$r(n.value);if(rm(n))return n.filters.map(e=>tc(e)).join(",");{const e=n.filters.map(t=>tc(t)).join(",");return`${n.op}(${e})`}}function sm(n,e){return n instanceof Ae?function(r,s){return s instanceof Ae&&r.op===s.op&&r.field.isEqual(s.field)&&Ft(r.value,s.value)}(n,e):n instanceof Tt?function(r,s){return s instanceof Tt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&sm(a,s.filters[l]),!0):!1}(n,e):void K()}function im(n){return n instanceof Ae?function(t){return`${t.field.canonicalString()} ${t.op} ${$r(t.value)}`}(n):n instanceof Tt?function(t){return t.op.toString()+" {"+t.getFilters().map(im).join(" ,")+"}"}(n):"Filter"}class zw extends Ae{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gw extends Ae{constructor(e,t){super(e,"in",t),this.keys=om("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Kw extends Ae{constructor(e,t){super(e,"not-in",t),this.keys=om("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function om(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class Qw extends Ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jc(t)&&Bs(t.arrayValue,this.value)}}class Yw extends Ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bs(this.value.arrayValue,t)}}class Xw extends Ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Bs(this.value.arrayValue,t)}}class Jw extends Ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Bs(this.value.arrayValue,r))}}/**
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
 */class Zw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function bd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Zw(n,e,t,r,s,i,a)}function Oc(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>tc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ro(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>$r(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>$r(r)).join(",")),e.ue=t}return e.ue}function Vc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ww(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xd(n.startAt,e.startAt)&&xd(n.endAt,e.endAt)}function nc(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ex(n,e,t,r,s,i,a,l){return new Qr(n,e,t,r,s,i,a,l)}function Mc(n){return new Qr(n)}function Ed(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function am(n){return n.collectionGroup!==null}function Ss(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ve(Oe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $s(i,r))}),t.has(Oe.keyField().canonicalString())||e.ce.push(new $s(Oe.keyField(),r))}return e.ce}function Mt(n){const e=Y(n);return e.le||(e.le=tx(e,Ss(n))),e.le}function tx(n,e){if(n.limitType==="F")return bd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $s(s.field,i)});const t=n.endAt?new oo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new oo(n.startAt.position,n.startAt.inclusive):null;return bd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function rc(n,e){const t=n.filters.concat([e]);return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ao(n,e,t){return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function No(n,e){return Vc(Mt(n),Mt(e))&&n.limitType===e.limitType}function cm(n){return`${Oc(Mt(n))}|lt:${n.limitType}`}function xr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>im(s)).join(", ")}]`),Ro(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>$r(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>$r(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function Co(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=wd(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Ss(r),s)||r.endAt&&!function(a,l,u){const h=wd(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Ss(r),s))}(n,e)}function nx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lm(n){return(e,t)=>{let r=!1;for(const s of Ss(n)){const i=rx(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function rx(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Br(u,h):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){lr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Jf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=new _e(q.comparator);function rn(){return sx}const um=new _e(q.comparator);function bs(...n){let e=um;for(const t of n)e=e.insert(t.key,t);return e}function dm(n){let e=um;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Wn(){return Rs()}function hm(){return Rs()}function Rs(){return new Yr(n=>n.toString(),(n,e)=>n.isEqual(e))}const ix=new _e(q.comparator),ox=new Ve(q.comparator);function te(...n){let e=ox;for(const t of n)e=e.add(t);return e}const ax=new Ve(ce);function cx(){return ax}/**
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
 */function Lc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:io(e)?"-0":e}}function fm(n){return{integerValue:""+n}}function lx(n,e){return Fw(e)?fm(e):Lc(n,e)}/**
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
 */class ko{constructor(){this._=void 0}}function ux(n,e,t){return n instanceof co?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kc(i)&&(i=Dc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof qs?gm(n,e):n instanceof Ws?pm(n,e):function(s,i){const a=mm(s,i),l=Td(a)+Td(s.Pe);return ec(a)&&ec(s.Pe)?fm(l):Lc(s.serializer,l)}(n,e)}function dx(n,e,t){return n instanceof qs?gm(n,e):n instanceof Ws?pm(n,e):t}function mm(n,e){return n instanceof lo?function(r){return ec(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class co extends ko{}class qs extends ko{constructor(e){super(),this.elements=e}}function gm(n,e){const t=ym(e);for(const r of n.elements)t.some(s=>Ft(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ws extends ko{constructor(e){super(),this.elements=e}}function pm(n,e){let t=ym(e);for(const r of n.elements)t=t.filter(s=>!Ft(s,r));return{arrayValue:{values:t}}}class lo extends ko{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Td(n){return Te(n.integerValue||n.doubleValue)}function ym(n){return jc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hx(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof qs&&s instanceof qs||r instanceof Ws&&s instanceof Ws?Ur(r.elements,s.elements,Ft):r instanceof lo&&s instanceof lo?Ft(r.Pe,s.Pe):r instanceof co&&s instanceof co}(n.transform,e.transform)}class fx{constructor(e,t){this.version=e,this.transformResults=t}}class st{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Do{}function _m(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Fc(n.key,st.none()):new ri(n.key,n.data,st.none());{const t=n.data,r=nt.empty();let s=new Ve(Oe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new jn(n.key,r,new lt(s.toArray()),st.none())}}function mx(n,e,t){n instanceof ri?function(s,i,a){const l=s.value.clone(),u=Ad(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof jn?function(s,i,a){if(!zi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ad(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(vm(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ns(n,e,t,r){return n instanceof ri?function(i,a,l,u){if(!zi(i.precondition,a))return l;const h=i.value.clone(),m=Pd(i.fieldTransforms,u,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof jn?function(i,a,l,u){if(!zi(i.precondition,a))return l;const h=Pd(i.fieldTransforms,u,a),m=a.data;return m.setAll(vm(i)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,l){return zi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function gx(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=mm(r.transform,s||null);i!=null&&(t===null&&(t=nt.empty()),t.set(r.field,i))}return t||null}function Id(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ur(r,s,(i,a)=>hx(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ri extends Do{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jn extends Do{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ad(n,e,t){const r=new Map;ue(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,dx(a,l,t[s]))}return r}function Pd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,ux(i,a,e))}return r}class Fc extends Do{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class px extends Do{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mx(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=hm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=_m(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&Ur(this.mutations,e.mutations,(t,r)=>Id(t,r))&&Ur(this.baseMutations,e.baseMutations,(t,r)=>Id(t,r))}}class Uc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ue(e.mutations.length===r.length);let s=function(){return ix}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Uc(e,t,r,s)}}/**
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
 */class _x{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,se;function wx(n){switch(n){default:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function wm(n){if(n===void 0)return nn("GRPC error has no .code"),O.UNKNOWN;switch(n){case Ie.OK:return O.OK;case Ie.CANCELLED:return O.CANCELLED;case Ie.UNKNOWN:return O.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return O.INTERNAL;case Ie.UNAVAILABLE:return O.UNAVAILABLE;case Ie.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ie.NOT_FOUND:return O.NOT_FOUND;case Ie.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ie.ABORTED:return O.ABORTED;case Ie.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ie.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(se=Ie||(Ie={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xx(){return new TextEncoder}/**
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
 */const bx=new Xn([4294967295,4294967295],0);function Sd(n){const e=xx().encode(n),t=new Wf;return t.update(e),new Uint8Array(t.digest())}function Rd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xn([t,r],0),new Xn([s,i],0)]}class Bc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Es(`Invalid padding: ${t}`);if(r<0)throw new Es(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Es(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Es(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Xn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Xn.fromNumber(r)));return s.compare(bx)===1&&(s=new Xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Sd(e),[r,s]=Rd(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Bc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Sd(e),[r,s]=Rd(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new jo(Q.min(),s,new _e(ce),rn(),te())}}class si{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new si(r,t,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class xm{constructor(e,t){this.targetId=e,this.me=t}}class bm{constructor(e,t,r=Me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nd{constructor(){this.fe=0,this.ge=kd(),this.pe=Me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),t=te(),r=te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:K()}}),new si(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=kd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ex{constructor(e){this.Le=e,this.Be=new Map,this.ke=rn(),this.qe=Cd(),this.Qe=new _e(ce)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(nc(i))if(r===0){const a=new q(i.path);this.Ue(t,a,He.newNoDocument(a,Q.min()))}else ue(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=nr(r).toUint8Array()}catch(u){if(u instanceof Zf)return Fr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bc(a,s,i)}catch(u){return Fr(u instanceof Es?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&nc(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,He.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=te();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new jo(e,t,this.Qe,this.ke,r);return this.ke=rn(),this.qe=Cd(),this.Qe=new _e(ce),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Nd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ve(ce),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Cd(){return new _e(q.comparator)}function kd(){return new _e(q.comparator)}const Tx={asc:"ASCENDING",desc:"DESCENDING"},Ix={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ax={and:"AND",or:"OR"};class Px{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sc(n,e){return n.useProto3Json||Ro(e)?e:{value:e}}function uo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Em(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sx(n,e){return uo(n,e.toTimestamp())}function Lt(n){return ue(!!n),Q.fromTimestamp(function(t){const r=Nn(t);return new re(r.seconds,r.nanos)}(n))}function $c(n,e){return ic(n,e).canonicalString()}function ic(n,e){const t=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Tm(n){const e=pe.fromString(n);return ue(Rm(e)),e}function oc(n,e){return $c(n.databaseId,e.path)}function Na(n,e){const t=Tm(e);if(t.get(1)!==n.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Am(t))}function Im(n,e){return $c(n.databaseId,e)}function Rx(n){const e=Tm(n);return e.length===4?pe.emptyPath():Am(e)}function ac(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Am(n){return ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Dd(n,e,t){return{name:oc(n,e),fields:t.value.mapValue.fields}}function Nx(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,m){return h.useProto3Json?(ue(m===void 0||typeof m=="string"),Me.fromBase64String(m||"")):(ue(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Me.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const m=h.code===void 0?O.UNKNOWN:wm(h.code);return new U(m,h.message||"")}(a);t=new bm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Na(n,r.document.name),i=Lt(r.document.updateTime),a=r.document.createTime?Lt(r.document.createTime):Q.min(),l=new nt({mapValue:{fields:r.document.fields}}),u=He.newFoundDocument(s,i,a,l),h=r.targetIds||[],m=r.removedTargetIds||[];t=new Gi(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Na(n,r.document),i=r.readTime?Lt(r.readTime):Q.min(),a=He.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Gi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Na(n,r.document),i=r.removedTargetIds||[];t=new Gi([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new vx(s,i),l=r.targetId;t=new xm(l,a)}}return t}function Cx(n,e){let t;if(e instanceof ri)t={update:Dd(n,e.key,e.value)};else if(e instanceof Fc)t={delete:oc(n,e.key)};else if(e instanceof jn)t={update:Dd(n,e.key,e.data),updateMask:Ux(e.fieldMask)};else{if(!(e instanceof px))return K();t={verify:oc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof co)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ws)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof lo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(n,e.precondition)),t}function kx(n,e){return n&&n.length>0?(ue(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Lt(s.updateTime):Lt(i);return a.isEqual(Q.min())&&(a=Lt(i)),new fx(a,s.transformResults||[])}(t,e))):[]}function Dx(n,e){return{documents:[Im(n,e.path)]}}function jx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Im(n,s);const i=function(h){if(h.length!==0)return Sm(Tt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(m=>function(g){return{field:br(g.field),direction:Mx(g.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=sc(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function Ox(n){let e=Rx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ue(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(y){const g=Pm(y);return g instanceof Tt&&rm(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(g=>function(I){return new $s(Er(I.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(y){let g;return g=typeof y=="object"?y.value:y,Ro(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(y){const g=!!y.before,x=y.values||[];return new oo(x,g)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const g=!y.before,x=y.values||[];return new oo(x,g)}(t.endAt)),ex(e,s,a,i,l,"F",u,h)}function Vx(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Er(t.unaryFilter.field);return Ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Er(t.unaryFilter.field);return Ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Er(t.unaryFilter.field);return Ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Er(t.unaryFilter.field);return Ae.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return Ae.create(Er(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Tt.create(t.compositeFilter.filters.map(r=>Pm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function Mx(n){return Tx[n]}function Lx(n){return Ix[n]}function Fx(n){return Ax[n]}function br(n){return{fieldPath:n.canonicalString()}}function Er(n){return Oe.fromServerFormat(n.fieldPath)}function Sm(n){return n instanceof Ae?function(t){if(t.op==="=="){if(vd(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NAN"}};if(_d(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vd(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NOT_NAN"}};if(_d(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(t.field),op:Lx(t.op),value:t.value}}}(n):n instanceof Tt?function(t){const r=t.getFilters().map(s=>Sm(s));return r.length===1?r[0]:{compositeFilter:{op:Fx(t.op),filters:r}}}(n):K()}function Ux(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t,r,s,i=Q.min(),a=Q.min(),l=Me.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.ct=e}}function $x(n){const e=Ox({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ao(e,e.limit,"L"):e}/**
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
 */class qx{constructor(){this.un=new Wx}addToCollectionParentIndex(e,t){return this.un.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Rn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class Wx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ve(pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ve(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new qr(0)}static kn(){return new qr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.changes=new Yr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ns(r.mutation,s,lt.empty(),re.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,t,r=te()){const s=Wn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=bs();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Wn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,te()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=rn();const a=Rs(),l=function(){return Rs()}();return t.forEach((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof jn)?i=i.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),Ns(m.mutation,h,m.mutation.getFieldMask(),re.now())):a.set(h.key,lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,m)=>a.set(h,m)),t.forEach((h,m)=>{var y;return l.set(h,new zx(m,(y=a.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Rs();let s=new _e((a,l)=>a-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let m=r.get(u)||lt.empty();m=l.applyToLocalView(h,m),r.set(u,m);const y=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,m=u.value,y=hm();m.forEach(g=>{if(!i.has(g)){const x=_m(t.get(g),r.get(g));x!==null&&y.set(g,x),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,y))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):am(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(Wn());let l=-1,u=i;return a.next(h=>M.forEach(h,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?M.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{u=u.insert(m,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,te())).next(m=>({batchId:l,changes:dm(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=bs();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(y,g){return new Qr(g,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((y,g)=>{a=a.insert(y,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,He.newInvalidDocument(m)))});let l=bs();return a.forEach((u,h)=>{const m=i.get(u);m!==void 0&&Ns(m.mutation,h,lt.empty(),re.now()),Co(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class Kx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return M.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Lt(s.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:$x(s.bundledQuery),readTime:Lt(s.readTime)}}(t)),M.resolve()}}/**
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
 */class Qx{constructor(){this.overlays=new _e(q.comparator),this.Ir=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wn();return M.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=Wn(),i=t.length+1,a=new q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new _e((h,m)=>h-m);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=Wn(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=Wn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,m)=>l.set(h,m)),!(l.size()>=s)););return M.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _x(t,r));let i=this.Ir.get(t);i===void 0&&(i=te(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Yx{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.Tr=new Ve(Ne.Er),this.dr=new Ve(Ne.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ne(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ne(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new q(new pe([])),r=new Ne(t,e),s=new Ne(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new pe([])),r=new Ne(t,e),s=new Ne(t,e+1);let i=te();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ne(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||ce(e.wr,t.wr)}static Ar(e,t){return ce(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ve(Ne.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new yx(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Ne(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ne(t,0),s=new Ne(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(ce);return t.forEach(s=>{const i=new Ne(s,0),a=new Ne(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new Ne(new q(i),0);let l=new Ve(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},a),M.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ue(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(t.mutations,s=>{const i=new Ne(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ne(t,0),s=this.br.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.Mr=e,this.docs=function(){return new _e(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let r=rn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():He.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=rn();const a=t.path,l=new q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ow(jw(m),r)<=0||(s.has(m.key)||Co(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){K()}Or(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Zx(this)}getSize(e){return M.resolve(this.size)}}class Zx extends Hx{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.persistence=e,this.Nr=new Yr(t=>Oc(t),Vc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qc,this.targetCount=0,this.kr=qr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),M.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new qr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Kn(t),M.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Cc(0),this.Kr=!1,this.Kr=!0,this.$r=new Yx,this.referenceDelegate=e(this),this.Ur=new eb(this),this.indexManager=new qx,this.remoteDocumentCache=function(s){return new Jx(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Bx(t),this.Gr=new Kx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Xx(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new nb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class nb extends Mw{constructor(e){super(),this.currentSequenceNumber=e}}class Wc{constructor(e){this.persistence=e,this.Jr=new qc,this.Yr=null}static Zr(e){return new Wc(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),M.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=q.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return M.or([()=>M.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=te(),s=te();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hc(e,t.fromCache,r,s)}}/**
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
 */class rb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return By()?8:Lw(ze())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new rb;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ms()<=ne.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",xr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(ms()<=ne.DEBUG&&$("QueryEngine","Query:",xr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ms()<=ne.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",xr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(t))):M.resolve())}Yi(e,t){if(Ed(t))return M.resolve(null);let r=Mt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ao(t,null,"F"),r=Mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=te(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,a,u.readTime)?this.Yi(e,ao(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,s){return Ed(t)||s.isEqual(Q.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?M.resolve(null):(ms()<=ne.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xr(t)),this.rs(e,a,t,Dw(s,-1)).next(l=>l))})}ts(e,t){let r=new Ve(lm(e));return t.forEach((s,i)=>{Co(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ms()<=ne.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",xr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Rn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class ib{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new _e(ce),this._s=new Yr(i=>Oc(i),Vc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ob(n,e,t,r){return new ib(n,e,t,r)}async function Nm(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=te();for(const h of s){a.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function ab(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,m){const y=h.batch,g=y.keys();let x=M.resolve();return g.forEach(I=>{x=x.next(()=>m.getEntry(u,I)).next(T=>{const _=h.docVersions.get(I);ue(_!==null),T.version.compareTo(_)<0&&(y.applyToRemoteDocument(T,h),T.isValidDocument()&&(T.setReadTime(h.commitVersion),m.addEntry(T)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Cm(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function cb(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((m,y)=>{const g=s.get(y);if(!g)return;l.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,y)));let x=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?x=x.withResumeToken(Me.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):m.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(m.resumeToken,r)),s=s.insert(y,x),function(T,_,V){return T.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,x,m)&&l.push(t.Ur.updateTargetData(i,x))});let u=rn(),h=te();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(lb(i,a,e.documentUpdates).next(m=>{u=m.Ps,h=m.Is})),!r.isEqual(Q.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(y=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.os=s,i))}function lb(n,e,t){let r=te(),s=te();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=rn();return t.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function ub(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function db(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Tn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function cc(n,e,t){const r=Y(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ni(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function jd(n,e,t){const r=Y(n);let s=Q.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,m){const y=Y(u),g=y._s.get(m);return g!==void 0?M.resolve(y.os.get(g)):y.Ur.getTargetData(h,m)}(r,a,Mt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:Q.min(),t?i:te())).next(l=>(hb(r,nx(e),l),{documents:l,Ts:i})))}function hb(n,e,t){let r=n.us.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Od{constructor(){this.activeTargetIds=cx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fb{constructor(){this.so=new Od,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Od,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mb{_o(e){}shutdown(){}}/**
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
 */class Vd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vi=null;function Ca(){return Vi===null?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)}/**
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
 */const gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class yb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=Ca(),u=this.xo(t,r.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,u,h,s).then(m=>($("RestConnection",`Received RPC '${t}' ${l}: `,m),m),m=>{throw Fr("RestConnection",`RPC '${t}' ${l} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=gb[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Ca();return new Promise((a,l)=>{const u=new Hf;u.setWithCredentials(!0),u.listenOnce(zf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Wi.NO_ERROR:const m=u.getResponseJson();$($e,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),a(m);break;case Wi.TIMEOUT:$($e,`RPC '${e}' ${i} timed out`),l(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case Wi.HTTP_ERROR:const y=u.getStatus();if($($e,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const x=g==null?void 0:g.error;if(x&&x.status&&x.message){const I=function(_){const V=_.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(V)>=0?V:O.UNKNOWN}(x.status);l(new U(I,x.message))}else l(new U(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new U(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$($e,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);$($e,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=Ca(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Qf(),l=Kf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");$($e,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);let g=!1,x=!1;const I=new pb({Io:_=>{x?$($e,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(g||($($e,`Opening RPC '${e}' stream ${s} transport.`),y.open(),g=!0),$($e,`RPC '${e}' stream ${s} sending:`,_),y.send(_))},To:()=>y.close()}),T=(_,V,A)=>{_.listen(V,j=>{try{A(j)}catch(L){setTimeout(()=>{throw L},0)}})};return T(y,xs.EventType.OPEN,()=>{x||($($e,`RPC '${e}' stream ${s} transport opened.`),I.yo())}),T(y,xs.EventType.CLOSE,()=>{x||(x=!0,$($e,`RPC '${e}' stream ${s} transport closed`),I.So())}),T(y,xs.EventType.ERROR,_=>{x||(x=!0,Fr($e,`RPC '${e}' stream ${s} transport errored:`,_),I.So(new U(O.UNAVAILABLE,"The operation could not be completed")))}),T(y,xs.EventType.MESSAGE,_=>{var V;if(!x){const A=_.data[0];ue(!!A);const j=A,L=j.error||((V=j[0])===null||V===void 0?void 0:V.error);if(L){$($e,`RPC '${e}' stream ${s} received error:`,L);const W=L.status;let H=function(w){const E=Ie[w];if(E!==void 0)return wm(E)}(W),P=L.message;H===void 0&&(H=O.INTERNAL,P="Unknown error status: "+W+" with message "+L.message),x=!0,I.So(new U(H,P)),y.close()}else $($e,`RPC '${e}' stream ${s} received:`,A),I.bo(A)}}),T(l,Gf.STAT_EVENT,_=>{_.stat===Ja.PROXY?$($e,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Ja.NOPROXY&&$($e,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function ka(){return typeof document<"u"?document:null}/**
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
 */function Oo(n){return new Px(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,t,r,s,i,a,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new km(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(nn(t.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _b extends Dm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Nx(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?Lt(a.readTime):Q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=ac(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=nc(u)?{documents:Dx(i,u)}:{query:jx(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Em(i,a.resumeToken);const h=sc(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=uo(i,a.snapshotVersion.toTimestamp());const h=sc(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Vx(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=ac(this.serializer),t.removeTarget=e,this.a_(t)}}class vb extends Dm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=kx(e.writeResults,e.commitTime),r=Lt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=ac(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Cx(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ic(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(O.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ic(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(O.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class xb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(nn(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{ur(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await ii(h),h.q_.set("Unknown"),h.L_.delete(4),await Vo(h)}(this))})}),this.q_=new xb(r,s)}}async function Vo(n){if(ur(n))for(const e of n.B_)await e(!0)}async function ii(n){for(const e of n.B_)await e(!1)}function jm(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Qc(t)?Kc(t):Xr(t).r_()&&Gc(t,e))}function zc(n,e){const t=Y(n),r=Xr(t);t.N_.delete(e),r.r_()&&Om(t,e),t.N_.size===0&&(r.r_()?r.o_():ur(t)&&t.q_.set("Unknown"))}function Gc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xr(n).A_(e)}function Om(n,e){n.Q_.xe(e),Xr(n).R_(e)}function Kc(n){n.Q_=new Ex({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Xr(n).start(),n.q_.v_()}function Qc(n){return ur(n)&&!Xr(n).n_()&&n.N_.size>0}function ur(n){return Y(n).L_.size===0}function Vm(n){n.Q_=void 0}async function Eb(n){n.q_.set("Online")}async function Tb(n){n.N_.forEach((e,t)=>{Gc(n,e)})}async function Ib(n,e){Vm(n),Qc(n)?(n.q_.M_(e),Kc(n)):n.q_.set("Unknown")}async function Ab(n,e,t){if(n.q_.set("Online"),e instanceof bm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ho(n,r)}else if(e instanceof Gi?n.Q_.Ke(e):e instanceof xm?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Q.min()))try{const r=await Cm(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.N_.get(h);m&&i.N_.set(h,m.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const m=i.N_.get(u);if(!m)return;i.N_.set(u,m.withResumeToken(Me.EMPTY_BYTE_STRING,m.snapshotVersion)),Om(i,u);const y=new Tn(m.target,u,h,m.sequenceNumber);Gc(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ho(n,r)}}async function ho(n,e,t){if(!ni(e))throw e;n.L_.add(1),await ii(n),n.q_.set("Offline"),t||(t=()=>Cm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Vo(n)})}function Mm(n,e){return e().catch(t=>ho(n,t,e))}async function Mo(n){const e=Y(n),t=Cn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Pb(e);)try{const s=await ub(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Sb(e,s)}catch(s){await ho(e,s)}Lm(e)&&Fm(e)}function Pb(n){return ur(n)&&n.O_.length<10}function Sb(n,e){n.O_.push(e);const t=Cn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Lm(n){return ur(n)&&!Cn(n).n_()&&n.O_.length>0}function Fm(n){Cn(n).start()}async function Rb(n){Cn(n).p_()}async function Nb(n){const e=Cn(n);for(const t of n.O_)e.m_(t.mutations)}async function Cb(n,e,t){const r=n.O_.shift(),s=Uc.from(r,e,t);await Mm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Mo(n)}async function kb(n,e){e&&Cn(n).V_&&await async function(r,s){if(function(a){return wx(a)&&a!==O.ABORTED}(s.code)){const i=r.O_.shift();Cn(r).s_(),await Mm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mo(r)}}(n,e),Lm(n)&&Fm(n)}async function Md(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=ur(t);t.L_.add(3),await ii(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Vo(t)}async function Db(n,e){const t=Y(n);e?(t.L_.delete(2),await Vo(t)):e||(t.L_.add(2),await ii(t),t.q_.set("Unknown"))}function Xr(n){return n.K_||(n.K_=function(t,r,s){const i=Y(t);return i.w_(),new _b(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Eb.bind(null,n),Ro:Tb.bind(null,n),mo:Ib.bind(null,n),d_:Ab.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Qc(n)?Kc(n):n.q_.set("Unknown")):(await n.K_.stop(),Vm(n))})),n.K_}function Cn(n){return n.U_||(n.U_=function(t,r,s){const i=Y(t);return i.w_(),new vb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rb.bind(null,n),mo:kb.bind(null,n),f_:Nb.bind(null,n),g_:Cb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Mo(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Yc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xc(n,e){if(nn("AsyncQueue",`${e}: ${n}`),ni(n))return new U(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=bs(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Sr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.W_=new _e(q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Wr{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Wr(e,t,Sr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&No(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ob{constructor(){this.queries=Fd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=Fd(),i.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new U(O.ABORTED,"Firestore shutting down"))}}function Fd(){return new Yr(n=>cm(n),No)}async function Um(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new jb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Xc(a,`Initialization of query '${xr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Jc(t)}async function Bm(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Vb(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Jc(t)}function Mb(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Jc(n){n.Y_.forEach(e=>{e.next()})}var lc,Ud;(Ud=lc||(lc={})).ea="default",Ud.Cache="cache";class $m{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Wr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==lc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.key=e}}class Wm{constructor(e){this.key=e}}class Lb{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=lm(e),this.Ra=new Sr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Ld,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const g=s.get(m),x=Co(this.query,y)?y:null,I=!!g&&this.mutatedKeys.has(g.key),T=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let _=!1;g&&x?g.data.isEqual(x.data)?I!==T&&(r.track({type:3,doc:x}),_=!0):this.ga(g,x)||(r.track({type:2,doc:x}),_=!0,(u&&this.Aa(x,u)>0||h&&this.Aa(x,h)<0)&&(l=!0)):!g&&x?(r.track({type:0,doc:x}),_=!0):g&&!x&&(r.track({type:1,doc:g}),_=!0,(u||h)&&(l=!0)),_&&(x?(a=a.add(x),i=T?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,y)=>function(x,I){const T=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return T(x)-T(I)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Wr(this.query,e.Ra,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ld,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Wm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new qm(r))}),t}ba(e){this.Ta=e.Ts,this.da=te();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Wr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Fb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ub{constructor(e){this.key=e,this.va=!1}}class Bb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Yr(l=>cm(l),No),this.Ma=new Map,this.xa=new Set,this.Oa=new _e(q.comparator),this.Na=new Map,this.La=new qc,this.Ba={},this.ka=new Map,this.qa=qr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $b(n,e,t=!0){const r=Ym(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Hm(r,e,t,!0),s}async function qb(n,e){const t=Ym(n);await Hm(t,e,!0,!1)}async function Hm(n,e,t,r){const s=await db(n.localStore,Mt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Wb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&jm(n.remoteStore,s),l}async function Wb(n,e,t,r,s){n.Ka=(y,g,x)=>async function(T,_,V,A){let j=_.view.ma(V);j.ns&&(j=await jd(T.localStore,_.query,!1).then(({documents:P})=>_.view.ma(P,j)));const L=A&&A.targetChanges.get(_.targetId),W=A&&A.targetMismatches.get(_.targetId)!=null,H=_.view.applyChanges(j,T.isPrimaryClient,L,W);return $d(T,_.targetId,H.wa),H.snapshot}(n,y,g,x);const i=await jd(n.localStore,e,!0),a=new Lb(e,i.Ts),l=a.ma(i.documents),u=si.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);$d(n,t,h.wa);const m=new Fb(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Hb(n,e,t){const r=Y(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!No(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await cc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&zc(r.remoteStore,s.targetId),uc(r,s.targetId)}).catch(ti)):(uc(r,s.targetId),await cc(r.localStore,s.targetId,!0))}async function zb(n,e){const t=Y(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),zc(t.remoteStore,r.targetId))}async function Gb(n,e,t){const r=eE(n);try{const s=await function(a,l){const u=Y(a),h=re.now(),m=l.reduce((x,I)=>x.add(I.key),te());let y,g;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let I=rn(),T=te();return u.cs.getEntries(x,m).next(_=>{I=_,I.forEach((V,A)=>{A.isValidDocument()||(T=T.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,I)).next(_=>{y=_;const V=[];for(const A of l){const j=gx(A,y.get(A.key).overlayedDocument);j!=null&&V.push(new jn(A.key,j,em(j.value.mapValue),st.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,V,l)}).next(_=>{g=_;const V=_.applyToLocalDocumentSet(y,T);return u.documentOverlayCache.saveOverlays(x,_.batchId,V)})}).then(()=>({batchId:g.batchId,changes:dm(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new _e(ce)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await oi(r,s.changes),await Mo(r.remoteStore)}catch(s){const i=Xc(s,"Failed to persist write");t.reject(i)}}async function zm(n,e){const t=Y(n);try{const r=await cb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?ue(a.va):s.removedDocuments.size>0&&(ue(a.va),a.va=!1))}),await oi(t,r,e)}catch(r){await ti(r)}}function Bd(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=Y(a);u.onlineState=l;let h=!1;u.queries.forEach((m,y)=>{for(const g of y.j_)g.Z_(l)&&(h=!0)}),h&&Jc(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kb(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new _e(q.comparator);a=a.insert(i,He.newNoDocument(i,Q.min()));const l=te().add(i),u=new jo(Q.min(),new Map,new _e(ce),a,l);await zm(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Zc(r)}else await cc(r.localStore,e,!1).then(()=>uc(r,e,t)).catch(ti)}async function Qb(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await ab(t.localStore,e);Km(t,r,null),Gm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await oi(t,s)}catch(s){await ti(s)}}async function Yb(n,e,t){const r=Y(n);try{const s=await function(a,l){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let m;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(ue(y!==null),m=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m)).next(()=>u.localDocuments.getDocuments(h,m))})}(r.localStore,e);Km(r,e,t),Gm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await oi(r,s)}catch(s){await ti(s)}}function Gm(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Km(n,e,t){const r=Y(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function uc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Qm(n,r)})}function Qm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(zc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Zc(n))}function $d(n,e,t){for(const r of t)r instanceof qm?(n.La.addReference(r.key,e),Xb(n,r)):r instanceof Wm?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Qm(n,r.key)):K()}function Xb(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+t),n.xa.add(r),Zc(n))}function Zc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new q(pe.fromString(e)),r=n.qa.next();n.Na.set(r,new Ub(t)),n.Oa=n.Oa.insert(t,r),jm(n.remoteStore,new Tn(Mt(Mc(t.path)),r,"TargetPurposeLimboResolution",Cc.oe))}}async function oi(n,e,t){const r=Y(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(h=>{var m;if((h||t)&&r.isPrimaryClient){const y=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=Hc.Wi(u.targetId,h);i.push(y)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,h){const m=Y(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>M.forEach(h,g=>M.forEach(g.$i,x=>m.persistence.referenceDelegate.addReference(y,g.targetId,x)).next(()=>M.forEach(g.Ui,x=>m.persistence.referenceDelegate.removeReference(y,g.targetId,x)))))}catch(y){if(!ni(y))throw y;$("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const g=y.targetId;if(!y.fromCache){const x=m.os.get(g),I=x.snapshotVersion,T=x.withLastLimboFreeSnapshotVersion(I);m.os=m.os.insert(g,T)}}}(r.localStore,i))}async function Jb(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Nm(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new U(O.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oi(t,r.hs)}}function Zb(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return te().add(r.key);{let s=te();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Ym(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kb.bind(null,e),e.Ca.d_=Vb.bind(null,e.eventManager),e.Ca.$a=Mb.bind(null,e.eventManager),e}function eE(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ob(this.persistence,new sb,e.initialUser,this.serializer)}Ga(e){return new tb(Wc.Zr,this.serializer)}Wa(e){return new fb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fo.provider={build:()=>new fo};class dc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jb.bind(null,this.syncEngine),await Db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ob}()}createDatastore(e){const t=Oo(e.databaseInfo.databaseId),r=function(i){return new yb(i)}(e.databaseInfo);return function(i,a,l,u){return new wb(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new bb(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Bd(this.syncEngine,t,0),function(){return Vd.D()?new Vd:new mb}())}createSyncEngine(e,t){return function(s,i,a,l,u,h,m){const y=new Bb(s,i,a,l,u,h);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);$("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ii(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}dc.provider={build:()=>new dc};/**
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
 */class Xm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=We.UNAUTHENTICATED,this.clientId=Xf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Xc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Da(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Nm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function qd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nE(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Md(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Md(e.remoteStore,s)),n._onlineComponents=e}async function nE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Da(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Fr("Error using user provided cache. Falling back to memory cache: "+t),await Da(n,new fo)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Da(n,new fo);return n._offlineComponents}async function Jm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await qd(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await qd(n,new dc))),n._onlineComponents}function rE(n){return Jm(n).then(e=>e.syncEngine)}async function Zm(n){const e=await Jm(n),t=e.eventManager;return t.onListen=$b.bind(null,e.syncEngine),t.onUnlisten=Hb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zb.bind(null,e.syncEngine),t}function sE(n,e,t={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const m=new Xm({next:g=>{m.Za(),a.enqueueAndForget(()=>Bm(i,y));const x=g.docs.has(l);!x&&g.fromCache?h.reject(new U(O.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&g.fromCache&&u&&u.source==="server"?h.reject(new U(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),y=new $m(Mc(l.path),m,{includeMetadataChanges:!0,_a:!0});return Um(i,y)}(await Zm(n),n.asyncQueue,e,t,r)),r.promise}function iE(n,e,t={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const m=new Xm({next:g=>{m.Za(),a.enqueueAndForget(()=>Bm(i,y)),g.fromCache&&u.source==="server"?h.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),y=new $m(l,m,{includeMetadataChanges:!0,_a:!0});return Um(i,y)}(await Zm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function eg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Wd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e,t){if(!t)throw new U(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oE(n,e,t,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hd(n){if(!q.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zd(n){if(q.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function It(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lo(n);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Gd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tw;switch(r.type){case"firstParty":return new Sw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wd.get(t);r&&($("ComponentProvider","Removing Datastore"),Wd.delete(t),r.terminate())}(this),Promise.resolve()}}function aE(n,e,t,r={}){var s;const i=(n=It(n,Fo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Fr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=We.MOCK_USER;else{l=Xh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new We(h)}n._authCredentials=new Iw(new Yf(l,u))}}/**
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
 */class On{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new On(this.firestore,e,this._query)}}class Ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class Sn extends On{constructor(e,t,r){super(e,t,Mc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new q(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}function Se(n,e,...t){if(n=me(n),tg("collection","path",e),n instanceof Fo){const r=pe.fromString(e,...t);return zd(r),new Sn(n,null,r)}{if(!(n instanceof Ze||n instanceof Sn))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return zd(r),new Sn(n.firestore,null,r)}}function Pe(n,e,...t){if(n=me(n),arguments.length===1&&(e=Xf.newId()),tg("doc","path",e),n instanceof Fo){const r=pe.fromString(e,...t);return Hd(r),new Ze(n,null,new q(r))}{if(!(n instanceof Ze||n instanceof Sn))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Hd(r),new Ze(n.firestore,n instanceof Sn?n.converter:null,new q(r))}}/**
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
 */class Kd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new km(this,"async_queue_retry"),this.Vu=()=>{const r=ka();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ka();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ni(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Yc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class dr extends Fo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Kd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kd(e),this._firestoreClient=void 0,await e}}}function cE(n,e){const t=typeof n=="object"?n:Io(),r=typeof n=="string"?n:"(default)",s=Dn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kh("firestore");i&&aE(s,...i)}return s}function Uo(n){if(n._terminated)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||lE(n),n._firestoreClient}function lE(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,h,m){return new Bw(l,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,eg(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new tE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Hr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hr(Me.fromBase64String(e))}catch(t){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hr(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ai{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class el{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class nl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=/^__.*__$/;class dE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ri(e,this.data,t,this.fieldTransforms)}}class ng{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new jn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class rl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return mo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(rg(this.Cu)&&uE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class hE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Oo(e)}Qu(e,t,r,s=!1){return new rl({Cu:e,methodName:t,qu:r,path:Oe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ci(n){const e=n._freezeSettings(),t=Oo(n._databaseId);return new hE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function sl(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);il("Data must be an object, but it was:",a,r);const l=og(r,a);let u,h;if(i.merge)u=new lt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const g=hc(e,y,t);if(!a.contains(g))throw new U(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);cg(m,g)||m.push(g)}u=new lt(m),h=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=a.fieldTransforms;return new dE(new nt(l),u,h)}class Bo extends el{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bo}}function sg(n,e,t,r){const s=n.Qu(1,e,t);il("Data must be an object, but it was:",s,r);const i=[],a=nt.empty();lr(r,(u,h)=>{const m=ol(e,u,t);h=me(h);const y=s.Nu(m);if(h instanceof Bo)i.push(m);else{const g=li(h,y);g!=null&&(i.push(m),a.set(m,g))}});const l=new lt(i);return new ng(a,l,s.fieldTransforms)}function ig(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[hc(e,r,t)],u=[s];if(i.length%2!=0)throw new U(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(hc(e,i[g])),u.push(i[g+1]);const h=[],m=nt.empty();for(let g=l.length-1;g>=0;--g)if(!cg(h,l[g])){const x=l[g];let I=u[g];I=me(I);const T=a.Nu(x);if(I instanceof Bo)h.push(x);else{const _=li(I,T);_!=null&&(h.push(x),m.set(x,_))}}const y=new lt(h);return new ng(m,y,a.fieldTransforms)}function fE(n,e,t,r=!1){return li(t,n.Qu(r?4:3,e))}function li(n,e){if(ag(n=me(n)))return il("Unsupported field value:",e,n),og(n,e);if(n instanceof el)return function(r,s){if(!rg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=li(l,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=re.fromDate(r);return{timestampValue:uo(s.serializer,i)}}if(r instanceof re){const i=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uo(s.serializer,i)}}if(r instanceof tl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hr)return{bytesValue:Em(s.serializer,r._byteString)};if(r instanceof Ze){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$c(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nl)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Lc(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Lo(r)}`)}(n,e)}function og(n,e){const t={};return Jf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lr(n,(r,s)=>{const i=li(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function ag(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof tl||n instanceof Hr||n instanceof Ze||n instanceof el||n instanceof nl)}function il(n,e,t){if(!ag(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Lo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function hc(n,e,t){if((e=me(e))instanceof ai)return e._internalPath;if(typeof e=="string")return ol(n,e);throw mo("Field path arguments must be of type string or ",n,!1,void 0,t)}const mE=new RegExp("[~\\*/\\[\\]]");function ol(n,e,t){if(e.search(mE)>=0)throw mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ai(...e.split("."))._internalPath}catch{throw mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function mo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new U(O.INVALID_ARGUMENT,l+n+u)}function cg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class lg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($o("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gE extends lg{data(){return super.data()}}function $o(n,e){return typeof e=="string"?ol(n,e):e instanceof ai?e._internalPath:e._delegate._internalPath}/**
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
 */function pE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class al{}class cl extends al{}function ot(n,e,...t){let r=[];e instanceof al&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof ll).length,l=i.filter(u=>u instanceof qo).length;if(a>1||a>0&&l>0)throw new U(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class qo extends cl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new qo(e,t,r)}_apply(e){const t=this._parse(e);return ug(e._query,t),new On(e.firestore,e.converter,rc(e._query,t))}_parse(e){const t=ci(e.firestore);return function(i,a,l,u,h,m,y){let g;if(h.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new U(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Yd(y,m);const x=[];for(const I of y)x.push(Qd(u,i,I));g={arrayValue:{values:x}}}else g=Qd(u,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Yd(y,m),g=fE(l,a,y,m==="in"||m==="not-in");return Ae.create(h,m,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function et(n,e,t){const r=e,s=$o("where",n);return qo._create(s,r,t)}class ll extends al{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ll(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)ug(a,u),a=rc(a,u)}(e._query,t),new On(e.firestore,e.converter,rc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ul extends cl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ul(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $s(i,a)}(e._query,this._field,this._direction);return new On(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Qr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Hs(n,e="asc"){const t=e,r=$o("orderBy",n);return ul._create(r,t)}class dl extends cl{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new dl(e,t,r)}_apply(e){return new On(e.firestore,e.converter,ao(e._query,this._limit,this._limitType))}}function yE(n){return dl._create("limit",n,"F")}function Qd(n,e,t){if(typeof(t=me(t))=="string"){if(t==="")throw new U(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!am(e)&&t.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(pe.fromString(t));if(!q.isDocumentKey(r))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yd(n,new q(r))}if(t instanceof Ze)return yd(n,t._key);throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lo(t)}.`)}function Yd(n,e){if(!Array.isArray(n)||n.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ug(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _E{convertValue(e,t="none"){switch(rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return lr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Te(a.doubleValue));return new nl(i)}convertGeoPoint(e){return new tl(Te(e.latitude),Te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fs(e));default:return null}}convertTimestamp(e){const t=Nn(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);ue(Rm(r));const s=new Us(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function hl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dg extends lg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($o("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ki extends dg{data(e={}){return super.data(e)}}class vE{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ts(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ki(this._firestore,this._userDataWriter,r.key,r,new Ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Ki(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ts(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ki(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ts(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:wE(l.type),doc:u,oldIndex:h,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function pt(n){n=It(n,Ze);const e=It(n.firestore,dr);return sE(Uo(e),n._key).then(t=>xE(e,n,t))}class hg extends _E{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,t)}}function tt(n){n=It(n,On);const e=It(n.firestore,dr),t=Uo(e),r=new hg(e);return pE(n._query),iE(t,n._query).then(s=>new vE(e,r,n,s))}function fl(n,e,t){n=It(n,Ze);const r=It(n.firestore,dr),s=hl(n.converter,e,t);return Ho(r,[sl(ci(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,st.none())])}function ui(n,e,t,...r){n=It(n,Ze);const s=It(n.firestore,dr),i=ci(s);let a;return a=typeof(e=me(e))=="string"||e instanceof ai?ig(i,"updateDoc",n._key,e,t,r):sg(i,"updateDoc",n._key,e),Ho(s,[a.toMutation(n._key,st.exists(!0))])}function Wo(n,e){const t=It(n.firestore,dr),r=Pe(n),s=hl(n.converter,e);return Ho(t,[sl(ci(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,st.exists(!1))]).then(()=>r)}function Ho(n,e){return function(r,s){const i=new Zt;return r.asyncQueue.enqueueAndForget(async()=>Gb(await rE(r),s,i)),i.promise}(Uo(n),e)}function xE(n,e,t){const r=t.docs.get(e._key),s=new hg(n);return new dg(n,s,e._key,r,new Ts(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class bE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ci(e)}set(e,t,r){this._verifyNotCommitted();const s=ja(e,this._firestore),i=hl(s.converter,t,r),a=sl(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,st.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=ja(e,this._firestore);let a;return a=typeof(t=me(t))=="string"||t instanceof ai?ig(this._dataReader,"WriteBatch.update",i._key,t,r,s):sg(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,st.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ja(e,this._firestore);return this._mutations=this._mutations.concat(new Fc(t._key,st.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ja(n,e){if((n=me(n)).firestore!==e)throw new U(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function EE(n){return Uo(n=It(n,dr)),new bE(n,e=>Ho(n,e))}(function(e,t=!0){(function(s){Kr=s})(cr),Et(new mt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new dr(new Aw(r.getProvider("auth-internal")),new Nw(r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Us(h.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rt(hd,"4.7.3",e),rt(hd,"4.7.3","esm2017")})();var TE="firebase",IE="10.14.1";/**
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
 */rt(TE,IE,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="firebasestorage.googleapis.com",mg="storageBucket",AE=2*60*1e3,PE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends yt{constructor(e,t,r=0){super(Oa(e),`Firebase Storage: ${t} (${Oa(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Oa(n){return"storage/"+n}function ml(){const n="An unknown error occurred, please check the error payload for server response.";return new Ee(be.UNKNOWN,n)}function SE(n){return new Ee(be.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function RE(n){return new Ee(be.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ee(be.UNAUTHENTICATED,n)}function CE(){return new Ee(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kE(n){return new Ee(be.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function DE(){return new Ee(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jE(){return new Ee(be.CANCELED,"User canceled the upload/download.")}function OE(n){return new Ee(be.INVALID_URL,"Invalid URL '"+n+"'.")}function VE(n){return new Ee(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ME(){return new Ee(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mg+"' property when initializing the app?")}function LE(){return new Ee(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function FE(){return new Ee(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function UE(n){return new Ee(be.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fc(n){return new Ee(be.INVALID_ARGUMENT,n)}function gg(){return new Ee(be.APP_DELETED,"The Firebase app was deleted.")}function BE(n){return new Ee(be.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cs(n,e){return new Ee(be.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function gs(n){throw new Ee(be.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ut.makeFromUrl(e,t)}catch{return new ut(e,"")}if(r.path==="")return r;throw VE(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function h(L){L.path_=decodeURIComponent(L.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",x=new RegExp(`^https?://${y}/${m}/b/${s}/o${g}`,"i"),I={bucket:1,path:3},T=t===fg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,_="([^?#]*)",V=new RegExp(`^https?://${T}/${s}/${_}`,"i"),j=[{regex:l,indices:u,postModify:i},{regex:x,indices:I,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let L=0;L<j.length;L++){const W=j[L],H=W.regex.exec(e);if(H){const P=H[W.indices.bucket];let v=H[W.indices.path];v||(v=""),r=new ut(P,v),W.postModify(r);break}}if(r==null)throw OE(e);return r}}class $E{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function u(){return l===2}let h=!1;function m(..._){h||(h=!0,e.apply(null,_))}function y(_){s=setTimeout(()=>{s=null,n(x,u())},_)}function g(){i&&clearTimeout(i)}function x(_,...V){if(h){g();return}if(_){g(),m.call(null,_,...V);return}if(u()||a){g(),m.call(null,_,...V);return}r<64&&(r*=2);let j;l===1?(l=2,j=0):j=(r+Math.random())*1e3,y(j)}let I=!1;function T(_){I||(I=!0,g(),!h&&(s!==null?(_||(l=2),clearTimeout(s),y(0)):_||(l=1)))}return y(0),i=setTimeout(()=>{a=!0,T(!0)},t),T}function WE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(n){return n!==void 0}function zE(n){return typeof n=="object"&&!Array.isArray(n)}function gl(n){return typeof n=="string"||n instanceof String}function Xd(n){return pl()&&n instanceof Blob}function pl(){return typeof Blob<"u"}function Jd(n,e,t,r){if(r<e)throw fc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw fc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function pg(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Jn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Jn||(Jn={}));/**
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
 */function GE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t,r,s,i,a,l,u,h,m,y,g=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=y,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,I)=>{this.resolve_=x,this.reject_=I,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Mi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Jn.NO_ERROR,u=i.getStatus();if(!l||GE(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===Jn.ABORT;r(!1,new Mi(!1,null,m));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Mi(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());HE(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=ml();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?gg():jE();a(u)}else{const u=DE();a(u)}};this.canceled_?t(!1,new Mi(!1,null,!0)):this.backoffId_=qE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function QE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function YE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function JE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ZE(n,e,t,r,s,i,a=!0){const l=pg(n.urlParams),u=n.url+l,h=Object.assign({},n.headers);return XE(h,e),QE(h,t),YE(h,i),JE(h,r),new KE(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tT(...n){const e=eT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(pl())return new Blob(n);throw new Ee(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function rT(n){if(typeof atob>"u")throw UE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Va{constructor(e,t){this.data=e,this.contentType=t||null}}function sT(n,e){switch(n){case Dt.RAW:return new Va(yg(e));case Dt.BASE64:case Dt.BASE64URL:return new Va(_g(n,e));case Dt.DATA_URL:return new Va(oT(e),aT(e))}throw ml()}function yg(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function iT(n){let e;try{e=decodeURIComponent(n)}catch{throw Cs(Dt.DATA_URL,"Malformed data URL.")}return yg(e)}function _g(n,e){switch(n){case Dt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Cs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Dt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Cs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=rT(e)}catch(s){throw s.message.includes("polyfill")?s:Cs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class vg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Cs(Dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=cT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function oT(n){const e=new vg(n);return e.base64?_g(Dt.BASE64,e.rest):iT(e.rest)}function aT(n){return new vg(n).contentType}function cT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t){let r=0,s="";Xd(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Xd(this.data_)){const r=this.data_,s=nT(r,e,t);return s===null?null:new yn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new yn(r,!0)}}static getBlob(...e){if(pl()){const t=e.map(r=>r instanceof yn?r.data_:r);return new yn(tT.apply(null,t))}else{const t=e.map(a=>gl(a)?sT(Dt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new yn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n){let e;try{e=JSON.parse(n)}catch{return null}return zE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function uT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function xg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(n,e){return e}class Ye{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||dT}}let Li=null;function hT(n){return!gl(n)||n.length<2?n:xg(n)}function bg(){if(Li)return Li;const n=[];n.push(new Ye("bucket")),n.push(new Ye("generation")),n.push(new Ye("metageneration")),n.push(new Ye("name","fullPath",!0));function e(i,a){return hT(a)}const t=new Ye("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Ye("size");return s.xform=r,n.push(s),n.push(new Ye("timeCreated")),n.push(new Ye("updated")),n.push(new Ye("md5Hash",null,!0)),n.push(new Ye("cacheControl",null,!0)),n.push(new Ye("contentDisposition",null,!0)),n.push(new Ye("contentEncoding",null,!0)),n.push(new Ye("contentLanguage",null,!0)),n.push(new Ye("contentType",null,!0)),n.push(new Ye("metadata","customMetadata",!0)),Li=n,Li}function fT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new ut(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function mT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return fT(r,n),r}function Eg(n,e,t){const r=wg(e);return r===null?null:mT(n,r,t)}function gT(n,e,t,r){const s=wg(e);if(s===null||!gl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const m=n.bucket,y=n.fullPath,g="/b/"+a(m)+"/o/"+a(y),x=zo(g,t,r),I=pg({alt:"media",token:h});return x+I})[0]}function pT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class yl{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n){if(!n)throw ml()}function yT(n,e){function t(r,s){const i=Eg(n,s,e);return Tg(i!==null),i}return t}function _T(n,e){function t(r,s){const i=Eg(n,s,e);return Tg(i!==null),gT(i,s,n.host,n._protocol)}return t}function Ig(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=CE():s=NE():t.getStatus()===402?s=RE(n.bucket):t.getStatus()===403?s=kE(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ag(n){const e=Ig(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=SE(n.path)),i.serverResponse=s.serverResponse,i}return t}function vT(n,e,t){const r=e.fullServerUrl(),s=zo(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new yl(s,i,_T(n,t),a);return l.errorHandler=Ag(e),l}function wT(n,e){const t=e.fullServerUrl(),r=zo(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function a(u,h){}const l=new yl(r,s,a,i);return l.successCodes=[200,204],l.errorHandler=Ag(e),l}function xT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function bT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=xT(null,e)),r}function ET(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let j="";for(let L=0;L<2;L++)j=j+Math.random().toString().slice(2);return j}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const h=bT(e,r,s),m=pT(h,t),y="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",x=yn.getBlob(y,r,g);if(x===null)throw LE();const I={name:h.fullPath},T=zo(i,n.host,n._protocol),_="POST",V=n.maxUploadRetryTime,A=new yl(T,_,yT(n,t),V);return A.urlParams=I,A.headers=a,A.body=x.uploadData(),A.errorHandler=Ig(e),A}class TT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IT extends TT{initXhr(){this.xhr_.responseType="text"}}function _l(){return new IT}/**
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
 */class sr{constructor(e,t){this._service=e,t instanceof ut?this._location=t:this._location=ut.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new sr(e,t)}get root(){const e=new ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xg(this._location.path)}get storage(){return this._service}get parent(){const e=lT(this._location.path);if(e===null)return null;const t=new ut(this._location.bucket,e);return new sr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BE(e)}}function AT(n,e,t){n._throwIfRoot("uploadBytes");const r=ET(n.storage,n._location,bg(),new yn(e,!0),t);return n.storage.makeRequestWithTokens(r,_l).then(s=>({metadata:s,ref:n}))}function PT(n){n._throwIfRoot("getDownloadURL");const e=vT(n.storage,n._location,bg());return n.storage.makeRequestWithTokens(e,_l).then(t=>{if(t===null)throw FE();return t})}function ST(n){n._throwIfRoot("deleteObject");const e=wT(n.storage,n._location);return n.storage.makeRequestWithTokens(e,_l)}function RT(n,e){const t=uT(n._location.path,e),r=new ut(n._location.bucket,t);return new sr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(n){return/^[A-Za-z]+:\/\//.test(n)}function CT(n,e){return new sr(n,e)}function Pg(n,e){if(n instanceof vl){const t=n;if(t._bucket==null)throw ME();const r=new sr(t,t._bucket);return e!=null?Pg(r,e):r}else return e!==void 0?RT(n,e):n}function kT(n,e){if(e&&NT(e)){if(n instanceof vl)return CT(n,e);throw fc("To use ref(service, url), the first argument must be a Storage instance.")}else return Pg(n,e)}function Zd(n,e){const t=e==null?void 0:e[mg];return t==null?null:ut.makeFromBucketSpec(t,n)}function DT(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Xh(s,n.app.options.projectId))}class vl{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=fg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AE,this._maxUploadRetryTime=PE,this._requests=new Set,s!=null?this._bucket=ut.makeFromBucketSpec(s,this._host):this._bucket=Zd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ut.makeFromBucketSpec(this._url,e):this._bucket=Zd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new $E(gg());{const a=ZE(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const eh="@firebase/storage",th="0.13.2";/**
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
 */const Sg="storage";function jT(n,e,t){return n=me(n),AT(n,e,t)}function OT(n){return n=me(n),PT(n)}function VT(n){return n=me(n),ST(n)}function Rg(n,e){return n=me(n),kT(n,e)}function MT(n=Io(),e){n=me(n);const r=Dn(n,Sg).getImmediate({identifier:e}),s=Kh("storage");return s&&LT(r,...s),r}function LT(n,e,t,r={}){DT(n,e,t,r)}function FT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new vl(t,r,s,e,cr)}function UT(){Et(new mt(Sg,FT,"PUBLIC").setMultipleInstances(!0)),rt(eh,th,""),rt(eh,th,"esm2017")}UT();const Ng="@firebase/installations",wl="0.6.9";/**
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
 */const Cg=1e4,kg=`w:${wl}`,Dg="FIS_v2",BT="https://firebaseinstallations.googleapis.com/v1",$T=60*60*1e3,qT="installations",WT="Installations";/**
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
 */const HT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ir=new ar(qT,WT,HT);function jg(n){return n instanceof yt&&n.code.includes("request-failed")}/**
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
 */function Og({projectId:n}){return`${BT}/projects/${n}/installations`}function Vg(n){return{token:n.token,requestStatus:2,expiresIn:GT(n.expiresIn),creationTime:Date.now()}}async function Mg(n,e){const r=(await e.json()).error;return ir.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Lg({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function zT(n,{refreshToken:e}){const t=Lg(n);return t.append("Authorization",KT(e)),t}async function Fg(n){const e=await n();return e.status>=500&&e.status<600?n():e}function GT(n){return Number(n.replace("s","000"))}function KT(n){return`${Dg} ${n}`}/**
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
 */async function QT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Og(n),s=Lg(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:Dg,appId:n.appId,sdkVersion:kg},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Fg(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Vg(h.authToken)}}else throw await Mg("Create Installation",u)}/**
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
 */function Ug(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function YT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const XT=/^[cdef][\w-]{21}$/,mc="";function JT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=ZT(n);return XT.test(t)?t:mc}catch{return mc}}function ZT(n){return YT(n).substr(0,22)}/**
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
 */function Go(n){return`${n.appName}!${n.appId}`}/**
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
 */const Bg=new Map;function $g(n,e){const t=Go(n);qg(t,e),eI(t,e)}function qg(n,e){const t=Bg.get(n);if(t)for(const r of t)r(e)}function eI(n,e){const t=tI();t&&t.postMessage({key:n,fid:e}),nI()}let Hn=null;function tI(){return!Hn&&"BroadcastChannel"in self&&(Hn=new BroadcastChannel("[Firebase] FID Change"),Hn.onmessage=n=>{qg(n.data.key,n.data.fid)}),Hn}function nI(){Bg.size===0&&Hn&&(Hn.close(),Hn=null)}/**
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
 */const rI="firebase-installations-database",sI=1,or="firebase-installations-store";let Ma=null;function xl(){return Ma||(Ma=rf(rI,sI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(or)}}})),Ma}async function go(n,e){const t=Go(n),s=(await xl()).transaction(or,"readwrite"),i=s.objectStore(or),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&$g(n,e.fid),e}async function Wg(n){const e=Go(n),r=(await xl()).transaction(or,"readwrite");await r.objectStore(or).delete(e),await r.done}async function Ko(n,e){const t=Go(n),s=(await xl()).transaction(or,"readwrite"),i=s.objectStore(or),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&$g(n,l.fid),l}/**
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
 */async function bl(n){let e;const t=await Ko(n.appConfig,r=>{const s=iI(r),i=oI(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===mc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function iI(n){const e=n||{fid:JT(),registrationStatus:0};return Hg(e)}function oI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ir.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=aI(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cI(n)}:{installationEntry:e}}async function aI(n,e){try{const t=await QT(n,e);return go(n.appConfig,t)}catch(t){throw jg(t)&&t.customData.serverCode===409?await Wg(n.appConfig):await go(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function cI(n){let e=await nh(n.appConfig);for(;e.registrationStatus===1;)await Ug(100),e=await nh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await bl(n);return r||t}return e}function nh(n){return Ko(n,e=>{if(!e)throw ir.create("installation-not-found");return Hg(e)})}function Hg(n){return lI(n)?{fid:n.fid,registrationStatus:0}:n}function lI(n){return n.registrationStatus===1&&n.registrationTime+Cg<Date.now()}/**
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
 */async function uI({appConfig:n,heartbeatServiceProvider:e},t){const r=dI(n,t),s=zT(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:kg,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Fg(()=>fetch(r,l));if(u.ok){const h=await u.json();return Vg(h)}else throw await Mg("Generate Auth Token",u)}function dI(n,{fid:e}){return`${Og(n)}/${e}/authTokens:generate`}/**
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
 */async function El(n,e=!1){let t;const r=await Ko(n.appConfig,i=>{if(!zg(i))throw ir.create("not-registered");const a=i.authToken;if(!e&&mI(a))return i;if(a.requestStatus===1)return t=hI(n,e),i;{if(!navigator.onLine)throw ir.create("app-offline");const l=pI(i);return t=fI(n,l),l}});return t?await t:r.authToken}async function hI(n,e){let t=await rh(n.appConfig);for(;t.authToken.requestStatus===1;)await Ug(100),t=await rh(n.appConfig);const r=t.authToken;return r.requestStatus===0?El(n,e):r}function rh(n){return Ko(n,e=>{if(!zg(e))throw ir.create("not-registered");const t=e.authToken;return yI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fI(n,e){try{const t=await uI(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await go(n.appConfig,r),t}catch(t){if(jg(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Wg(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await go(n.appConfig,r)}throw t}}function zg(n){return n!==void 0&&n.registrationStatus===2}function mI(n){return n.requestStatus===2&&!gI(n)}function gI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+$T}function pI(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function yI(n){return n.requestStatus===1&&n.requestTime+Cg<Date.now()}/**
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
 */async function _I(n){const e=n,{installationEntry:t,registrationPromise:r}=await bl(e);return r?r.catch(console.error):El(e).catch(console.error),t.fid}/**
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
 */async function vI(n,e=!1){const t=n;return await wI(t),(await El(t,e)).token}async function wI(n){const{registrationPromise:e}=await bl(n);e&&await e}/**
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
 */function xI(n){if(!n||!n.options)throw La("App Configuration");if(!n.name)throw La("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw La(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function La(n){return ir.create("missing-app-config-values",{valueName:n})}/**
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
 */const Gg="installations",bI="installations-internal",EI=n=>{const e=n.getProvider("app").getImmediate(),t=xI(e),r=Dn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TI=n=>{const e=n.getProvider("app").getImmediate(),t=Dn(e,Gg).getImmediate();return{getId:()=>_I(t),getToken:s=>vI(t,s)}};function II(){Et(new mt(Gg,EI,"PUBLIC")),Et(new mt(bI,TI,"PRIVATE"))}II();rt(Ng,wl);rt(Ng,wl,"esm2017");/**
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
 */const po="analytics",AI="firebase_id",PI="origin",SI=60*1e3,RI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tl="https://www.googletagmanager.com/gtag/js";/**
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
 */const it=new To("@firebase/analytics");/**
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
 */const NI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new ar("analytics","Analytics",NI);/**
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
 */function CI(n){if(!n.startsWith(Tl)){const e=dt.create("invalid-gtag-resource",{gtagURL:n});return it.warn(e.message),""}return n}function Kg(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function kI(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function DI(n,e){const t=kI("firebase-js-sdk-policy",{createScriptURL:CI}),r=document.createElement("script"),s=`${Tl}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function jI(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function OI(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await Kg(t)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(l){it.error(l)}n("config",s,i)}async function VI(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Kg(t);for(const u of a){const h=l.find(y=>y.measurementId===u),m=h&&e[h.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){it.error(i)}}function MI(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await VI(n,e,t,l,u)}else if(i==="config"){const[l,u]=a;await OI(n,e,t,r,l,u)}else if(i==="consent"){const[l,u]=a;n("consent",l,u)}else if(i==="get"){const[l,u,h]=a;n("get",l,u,h)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){it.error(l)}}return s}function LI(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=MI(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function FI(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Tl)&&t.src.includes(n))return t;return null}/**
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
 */const UI=30,BI=1e3;class $I{constructor(e={},t=BI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Qg=new $I;function qI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function WI(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:qI(r)},i=RI.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function HI(n,e=Qg,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw dt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw dt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new KI;return setTimeout(async()=>{l.abort()},SI),Yg({appId:r,apiKey:s,measurementId:i},a,l,e)}async function Yg(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Qg){var i;const{appId:a,measurementId:l}=n;try{await zI(r,e)}catch(u){if(l)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await WI(n);return s.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!GI(h)){if(s.deleteThrottleMetadata(a),l)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const m=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Mu(t,s.intervalMillis,UI):Mu(t,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(a,y),it.debug(`Calling attemptFetch again in ${m} millis`),Yg(n,y,r,s)}}function zI(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function GI(n){if(!(n instanceof yt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class KI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QI(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function YI(){if(Zh())try{await ef()}catch(n){return it.warn(dt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return it.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XI(n,e,t,r,s,i,a){var l;const u=HI(n);u.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>it.error(x)),e.push(u);const h=YI().then(x=>{if(x)return r.getId()}),[m,y]=await Promise.all([u,h]);FI(i)||DI(i,m.measurementId),s("js",new Date);const g=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return g[PI]="firebase",g.update=!0,y!=null&&(g[AI]=y),s("config",m.measurementId,g),m.measurementId}/**
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
 */class JI{constructor(e){this.app=e}_delete(){return delete ks[this.app.options.appId],Promise.resolve()}}let ks={},sh=[];const ih={};let Fa="dataLayer",ZI="gtag",oh,Xg,ah=!1;function eA(){const n=[];if(Jh()&&n.push("This is a browser extension environment."),$y()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=dt.create("invalid-analytics-context",{errorInfo:e});it.warn(t.message)}}function tA(n,e,t){eA();const r=n.options.appId;if(!r)throw dt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(ks[r]!=null)throw dt.create("already-exists",{id:r});if(!ah){jI(Fa);const{wrappedGtag:i,gtagCore:a}=LI(ks,sh,ih,Fa,ZI);Xg=i,oh=a,ah=!0}return ks[r]=XI(n,sh,ih,e,oh,Fa,t),new JI(n)}function nA(n=Io()){n=me(n);const e=Dn(n,po);return e.isInitialized()?e.getImmediate():rA(n)}function rA(n,e={}){const t=Dn(n,po);if(t.isInitialized()){const s=t.getImmediate();if(Os(e,t.getOptions()))return s;throw dt.create("already-initialized")}return t.initialize({options:e})}function Jg(n,e,t,r){n=me(n),QI(Xg,ks[n.app.options.appId],e,t,r).catch(s=>it.error(s))}const ch="@firebase/analytics",lh="0.10.8";function sA(){Et(new mt(po,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return tA(r,s,t)},"PUBLIC")),Et(new mt("analytics-internal",n,"PRIVATE")),rt(ch,lh),rt(ch,lh,"esm2017");function n(e){try{const t=e.getProvider(po).getImmediate();return{logEvent:(r,s,i)=>Jg(t,r,s,i)}}catch(t){throw dt.create("interop-component-reg-failed",{reason:t})}}}sA();const iA={apiKey:"AIzaSyBqeebps7CNCQw_xis2DKiGHMRYmurj_B4",authDomain:"kingcp-a0065.firebaseapp.com",projectId:"kingcp-a0065",storageBucket:"kingcp-a0065.firebasestorage.app",messagingSenderId:"550768863932",appId:"1:550768863932:web:acabd2d2584b8165a7beb9",measurementId:"G-QRVT5F6VGR"};let Is;try{Is=sf(iA),console.log("Firebase initialized successfully")}catch(n){throw console.error("Error initializing Firebase:",n),n}let qt,J,Il,gc;try{qt=bw(Is),J=cE(Is),Il=MT(Is),gc=nA(Is),console.log("Firebase services initialized successfully")}catch(n){throw console.error("Error initializing Firebase services:",n),n}const oA=new kt;oA.setCustomParameters({client_id:"123456789012-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com"});const sn=(n,e)=>{gc&&Jg(gc,n,e)},kn={USER_SIGNED_UP:"user_signed_up",USER_SIGNED_IN:"user_signed_in",USER_SIGNED_OUT:"user_signed_out",ENTRY_CREATED:"entry_created",ENTRY_UPDATED:"entry_updated",ENTRY_DELETED:"entry_deleted",ENTRY_VIEWED:"entry_viewed",VOTE_CAST:"vote_cast",VOTE_REMOVED:"vote_removed",PAGE_VIEW:"page_view",ERROR_OCCURRED:"error_occurred"},aA={},uh=n=>{let e;const t=new Set,r=(m,y)=>{const g=typeof m=="function"?m(e):m;if(!Object.is(g,e)){const x=e;e=y??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(I=>I(e,x))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>h,subscribe:m=>(t.add(m),()=>t.delete(m)),destroy:()=>{(aA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},h=e=n(r,s,u);return u},cA=n=>n?uh(n):uh;var Zg={exports:{}},ep={},tp={exports:{}},np={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=k;function lA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var uA=typeof Object.is=="function"?Object.is:lA,dA=zr.useState,hA=zr.useEffect,fA=zr.useLayoutEffect,mA=zr.useDebugValue;function gA(n,e){var t=e(),r=dA({inst:{value:t,getSnapshot:e}}),s=r[0].inst,i=r[1];return fA(function(){s.value=t,s.getSnapshot=e,Ua(s)&&i({inst:s})},[n,t,e]),hA(function(){return Ua(s)&&i({inst:s}),n(function(){Ua(s)&&i({inst:s})})},[n]),mA(t),t}function Ua(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!uA(n,t)}catch{return!0}}function pA(n,e){return e()}var yA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?pA:gA;np.useSyncExternalStore=zr.useSyncExternalStore!==void 0?zr.useSyncExternalStore:yA;tp.exports=np;var _A=tp.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=k,vA=_A;function wA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var xA=typeof Object.is=="function"?Object.is:wA,bA=vA.useSyncExternalStore,EA=Qo.useRef,TA=Qo.useEffect,IA=Qo.useMemo,AA=Qo.useDebugValue;ep.useSyncExternalStoreWithSelector=function(n,e,t,r,s){var i=EA(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=IA(function(){function u(x){if(!h){if(h=!0,m=x,x=r(x),s!==void 0&&a.hasValue){var I=a.value;if(s(I,x))return y=I}return y=x}if(I=y,xA(m,x))return I;var T=r(x);return s!==void 0&&s(I,T)?(m=x,I):(m=x,y=T)}var h=!1,m,y,g=t===void 0?null:t;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,t,r,s]);var l=bA(n,i[0],i[1]);return TA(function(){a.hasValue=!0,a.value=l},[l]),AA(l),l};Zg.exports=ep;var PA=Zg.exports;const SA=Gp(PA),rp={},{useDebugValue:RA}=Re,{useSyncExternalStoreWithSelector:NA}=SA;let dh=!1;const CA=n=>n;function kA(n,e=CA,t){(rp?"production":void 0)!=="production"&&t&&!dh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),dh=!0);const r=NA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return RA(r),r}const DA=n=>{(rp?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?cA(n):n,t=(r,s)=>kA(e,r,s);return Object.assign(t,e),t},jA=n=>DA,OA={};function VA(n,e){let t;try{t=n()}catch{return}return{getItem:s=>{var i;const a=u=>u===null?null:JSON.parse(u,void 0),l=(i=t.getItem(s))!=null?i:null;return l instanceof Promise?l.then(a):a(l)},setItem:(s,i)=>t.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>t.removeItem(s)}}const zs=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return zs(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return zs(r)(t)}}}},MA=(n,e)=>(t,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,V)=>({...V,..._}),...e},a=!1;const l=new Set,u=new Set;let h;try{h=i.getStorage()}catch{}if(!h)return n((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(..._)},r,s);const m=zs(i.serialize),y=()=>{const _=i.partialize({...r()});let V;const A=m({state:_,version:i.version}).then(j=>h.setItem(i.name,j)).catch(j=>{V=j});if(V)throw V;return A},g=s.setState;s.setState=(_,V)=>{g(_,V),y()};const x=n((..._)=>{t(..._),y()},r,s);let I;const T=()=>{var _;if(!h)return;a=!1,l.forEach(A=>A(r()));const V=((_=i.onRehydrateStorage)==null?void 0:_.call(i,r()))||void 0;return zs(h.getItem.bind(h))(i.name).then(A=>{if(A)return i.deserialize(A)}).then(A=>{if(A)if(typeof A.version=="number"&&A.version!==i.version){if(i.migrate)return i.migrate(A.state,A.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return A.state}).then(A=>{var j;return I=i.merge(A,(j=r())!=null?j:x),t(I,!0),y()}).then(()=>{V==null||V(I,void 0),a=!0,u.forEach(A=>A(I))}).catch(A=>{V==null||V(void 0,A)})};return s.persist={setOptions:_=>{i={...i,..._},_.getStorage&&(h=_.getStorage())},clearStorage:()=>{h==null||h.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>T(),hasHydrated:()=>a,onHydrate:_=>(l.add(_),()=>{l.delete(_)}),onFinishHydration:_=>(u.add(_),()=>{u.delete(_)})},T(),I||x},LA=(n,e)=>(t,r,s)=>{let i={storage:VA(()=>localStorage),partialize:T=>T,version:0,merge:(T,_)=>({..._,...T}),...e},a=!1;const l=new Set,u=new Set;let h=i.storage;if(!h)return n((...T)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...T)},r,s);const m=()=>{const T=i.partialize({...r()});return h.setItem(i.name,{state:T,version:i.version})},y=s.setState;s.setState=(T,_)=>{y(T,_),m()};const g=n((...T)=>{t(...T),m()},r,s);s.getInitialState=()=>g;let x;const I=()=>{var T,_;if(!h)return;a=!1,l.forEach(A=>{var j;return A((j=r())!=null?j:g)});const V=((_=i.onRehydrateStorage)==null?void 0:_.call(i,(T=r())!=null?T:g))||void 0;return zs(h.getItem.bind(h))(i.name).then(A=>{if(A)if(typeof A.version=="number"&&A.version!==i.version){if(i.migrate)return[!0,i.migrate(A.state,A.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,A.state];return[!1,void 0]}).then(A=>{var j;const[L,W]=A;if(x=i.merge(W,(j=r())!=null?j:g),t(x,!0),L)return m()}).then(()=>{V==null||V(x,void 0),x=r(),a=!0,u.forEach(A=>A(x))}).catch(A=>{V==null||V(void 0,A)})};return s.persist={setOptions:T=>{i={...i,...T},T.storage&&(h=T.storage)},clearStorage:()=>{h==null||h.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>I(),hasHydrated:()=>a,onHydrate:T=>(l.add(T),()=>{l.delete(T)}),onFinishHydration:T=>(u.add(T),()=>{u.delete(T)})},i.skipHydration||I(),x||g},FA=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((OA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),MA(n,e)):LA(n,e),UA=FA,di=jA()(UA(n=>({user:null,token:null,isAuthenticated:!1,login:(e,t)=>{localStorage.setItem("token",t),n({user:e,token:t,isAuthenticated:!0})},logout:()=>{localStorage.removeItem("token"),n({user:null,token:null,isAuthenticated:!1})}}),{name:"auth-storage"})),sp=async(n,e,t)=>{try{if(!n||!n.includes("@"))throw new Error("Invalid email format");if(!e||e.length<6)throw new Error("Password must be at least 6 characters long");const r=await iv(qt,n,e);t&&await cv(r.user,{displayName:t});const s={id:r.user.uid,email:r.user.email,displayName:r.user.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date};r.user.photoURL&&(s.photoURL=r.user.photoURL);try{console.log("Creating user document in Firestore:",s),await fl(Pe(J,"users",s.id),s),console.log("User document created successfully")}catch(i){console.error("Error creating user document:",i)}try{const i=await r.user.getIdToken();console.log("Got ID token for new user"),di.getState().login(s,i),console.log("Updated auth store after registration")}catch(i){console.error("Error getting token:",i)}return sn(kn.USER_SIGNED_UP),s}catch(r){console.error("Registration error:",r);let s="Failed to register";switch(r.code){case"auth/email-already-in-use":s="This email is already registered";break;case"auth/invalid-email":s="Invalid email format";break;case"auth/operation-not-allowed":s="Email/password accounts are not enabled. Please contact support.";break;case"auth/weak-password":s="Password should be at least 6 characters";break;default:s=r.message||"Failed to register"}throw sn(kn.ERROR_OCCURRED,{error_message:s,error_code:r.code}),new Error(s)}},ip=async(n,e)=>{try{console.log("Attempting to login with email:",n);const t=await ov(qt,n,e);console.log("Login successful, fetching user data");let r;try{const i=await pt(Pe(J,"users",t.user.uid));i.exists()?(console.log("User document found"),r=i.data()):(console.log("User document not found, creating one"),r={id:t.user.uid,email:t.user.email,displayName:t.user.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date},t.user.photoURL&&(r.photoURL=t.user.photoURL),await fl(Pe(J,"users",r.id),r))}catch(i){console.error("Error fetching/creating user document:",i),r={id:t.user.uid,email:t.user.email,displayName:t.user.displayName||void 0,photoURL:t.user.photoURL||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date}}const s=await t.user.getIdToken();return console.log("Got ID token"),di.getState().login(r,s),console.log("Updated auth store"),sn(kn.USER_SIGNED_IN),r}catch(t){console.error("Login error:",t);let r="Failed to login";switch(t.code){case"auth/invalid-email":r="Invalid email format";break;case"auth/user-disabled":r="This account has been disabled";break;case"auth/user-not-found":r="No account found with this email";break;case"auth/wrong-password":r="Incorrect password";break;case"auth/too-many-requests":r="Too many failed login attempts. Please try again later.";break;default:r=t.message||"Failed to login"}throw sn(kn.ERROR_OCCURRED,{error_message:r,error_code:t.code}),new Error(r)}},op=async()=>{try{const n=new kt;return n.setCustomParameters({prompt:"select_account",login_hint:"user@gmail.com"}),n.addScope("https://www.googleapis.com/auth/userinfo.email"),n.addScope("https://www.googleapis.com/auth/userinfo.profile"),await Vv(qt,n),null}catch(n){console.error("Google login error:",n);let e="Failed to login with Google";throw n.code==="auth/popup-closed-by-user"?e="Login was cancelled":n.code==="auth/popup-blocked"?e="Login popup was blocked. Please allow popups for this site.":n.code==="auth/cancelled-popup-request"&&(e="Another login attempt is in progress"),sn(kn.ERROR_OCCURRED,{method:"google",error:e}),new Error(e)}},BA=async()=>{try{const n=await Lv(qt);if(n){const e=n.user,t=await e.getIdToken(),r=await pt(Pe(J,"users",e.uid));let s;return r.exists()?s=r.data():(s={id:e.uid,email:e.email,displayName:e.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date},e.photoURL&&(s.photoURL=e.photoURL),await fl(Pe(J,"users",s.id),s),sn(kn.USER_SIGNED_UP,{method:"google"})),di.getState().login(s,t),sn(kn.USER_SIGNED_IN,{method:"google"}),window.location.href="/dashboard",s}return null}catch(n){return console.error("Error handling redirect result:",n),null}},$A=async n=>{try{await sv(qt,n)}catch(e){throw sn(kn.ERROR_OCCURRED,{error_message:e.message,error_code:e.code}),e}},qA=n=>dv(qt,n);function At(){const[n,e]=k.useState(null),[t,r]=k.useState(!0),[s,i]=k.useState(null);k.useEffect(()=>{const l=qA(async u=>{try{if(u){console.log("Firebase user authenticated:",u.uid);const h=await pt(Pe(J,"users",u.uid));if(h.exists()){const m=h.data();console.log("User data from Firestore:",m),console.log("isAdmin status:",m.isAdmin),e(m)}else console.log("User document not found in Firestore"),e(null)}else console.log("No Firebase user authenticated"),e(null)}catch(h){console.error("Error in auth state change:",h),i(h)}finally{r(!1)}});return()=>l()},[]);const a={user:n,loading:t,error:s,isAuthenticated:!!n,isAdmin:(n==null?void 0:n.isAdmin)||!1};return console.log("useAuth hook returning:",a),a}function WA({title:n,titleId:e,...t},r){return k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?k.createElement("title",{id:e},n):null,k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const HA=k.forwardRef(WA);function zA({title:n,titleId:e,...t},r){return k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?k.createElement("title",{id:e},n):null,k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const GA=k.forwardRef(zA),KA=[{name:"Home",href:"/",public:!0},{name:"Submit Design",href:"/submit",public:!1},{name:"Vote",href:"/vote",public:!1},{name:"Winners",href:"/winners",public:!0}];function hh(...n){return n.filter(Boolean).join(" ")}function QA(){const{user:n,isAuthenticated:e,logout:t}=di(),r=Ut(),s=()=>{t(),r("/")},i=KA.filter(a=>a.public||e);return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(xa,{as:"nav",className:"bg-white shadow",children:({open:a})=>c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex h-16 justify-between",children:[c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex flex-shrink-0 items-center",children:c.jsx(ae,{to:"/",className:"text-xl font-bold text-primary-600",children:"KING Competition"})}),c.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[i.map(l=>c.jsx(ae,{to:l.href,className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-gray-700",children:l.name},l.name)),(n==null?void 0:n.isAdmin)&&c.jsx(ae,{to:"/admin",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-gray-700",children:"Admin"})]})]}),c.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:e?c.jsxs(fs,{as:"div",className:"relative ml-3",children:[c.jsxs(fs.Button,{className:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:[c.jsx("span",{className:"sr-only",children:"Open user menu"}),c.jsx("div",{className:"h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center",children:c.jsx("span",{className:"text-primary-800",children:n==null?void 0:n.email.charAt(0).toUpperCase()})})]}),c.jsx(Xp,{as:k.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:c.jsxs(fs.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[c.jsx(fs.Item,{children:({active:l})=>c.jsx(ae,{to:"/profile",className:hh(l?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Profile"})}),c.jsx(fs.Item,{children:({active:l})=>c.jsx("button",{onClick:s,className:hh(l?"bg-gray-100":"","block w-full text-left px-4 py-2 text-sm text-gray-700"),children:"Sign out"})})]})})]}):c.jsxs("div",{className:"space-x-4",children:[c.jsx(ae,{to:"/login",className:"text-gray-500 hover:text-gray-700",children:"Sign in"}),c.jsx(ae,{to:"/register",className:"btn btn-primary",children:"Sign up"})]})}),c.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:c.jsxs(xa.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500",children:[c.jsx("span",{className:"sr-only",children:"Open main menu"}),a?c.jsx(GA,{className:"block h-6 w-6","aria-hidden":"true"}):c.jsx(HA,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),c.jsxs(xa.Panel,{className:"sm:hidden",children:[c.jsxs("div",{className:"space-y-1 pb-3 pt-2",children:[i.map(l=>c.jsx(ae,{to:l.href,className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700",children:l.name},l.name)),(n==null?void 0:n.isAdmin)&&c.jsx(ae,{to:"/admin",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700",children:"Admin"})]}),c.jsx("div",{className:"border-t border-gray-200 pb-3 pt-4",children:e?c.jsxs("div",{className:"space-y-1",children:[c.jsx(ae,{to:"/profile",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Profile"}),c.jsx("button",{onClick:s,className:"block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign out"})]}):c.jsxs("div",{className:"space-y-1",children:[c.jsx(ae,{to:"/login",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign in"}),c.jsx(ae,{to:"/register",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign up"})]})})]})]})}),c.jsx("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",children:c.jsx(Kp,{})})]})}function YA(){const[n,e]=k.useState(""),[t,r]=k.useState(""),[s,i]=k.useState(""),[a,l]=k.useState(!1),u=Ut(),h=async y=>{if(y.preventDefault(),!n||!t){i("Please enter both email and password");return}try{l(!0),i(""),console.log("Attempting login with email:",n),await ip(n,t),console.log("Login successful, navigating to dashboard"),u("/dashboard")}catch(g){console.error("Login form error:",g),i(g.message||"Failed to login")}finally{l(!1)}},m=async()=>{i("");try{console.log("Attempting Google login"),await op()}catch(y){console.error("Google login error:",y),i(y.message||"Failed to login with Google")}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx(ae,{to:"/register",className:"font-medium text-primary-600 hover:text-primary-500",children:"create a new account"})]})]}),c.jsxs("form",{className:"mt-8 space-y-6",onSubmit:h,children:[s&&c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:s})}),c.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),c.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:y=>e(y.target.value)})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Password",value:t,onChange:y=>r(y.target.value)})]})]}),c.jsx("div",{className:"flex items-center justify-between",children:c.jsx("div",{className:"text-sm",children:c.jsx(ae,{to:"/reset-password",className:"font-medium text-primary-600 hover:text-primary-500",children:"Forgot your password?"})})}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:a?"Signing in...":"Sign in"})})]}),c.jsxs("div",{className:"mt-6",children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-300"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-gray-50 text-gray-500",children:"Or continue with"})})]}),c.jsx("div",{className:"mt-6",children:c.jsxs("button",{onClick:m,disabled:a,className:"w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:[c.jsx("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:c.jsx("path",{fill:"currentColor",d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),"Sign in with Google"]})})]})]})})}function XA(){const[n,e]=k.useState(""),[t,r]=k.useState(""),[s,i]=k.useState(""),[a,l]=k.useState(""),[u,h]=k.useState(""),[m,y]=k.useState(!1),g=Ut(),x=async T=>{if(T.preventDefault(),!n||!t||!s){h("Please fill out all required fields");return}if(t!==s){h("Passwords do not match");return}if(t.length<6){h("Password must be at least 6 characters long");return}try{y(!0),h(""),console.log("Attempting registration with email:",n);try{await sp(n,t,a||void 0),console.log("Registration successful, navigating to dashboard"),g("/dashboard")}catch(_){console.error("Registration error:",_),_.message&&_.message.includes("already registered")?h("This email is already registered. Please log in instead."):h(_.message||"Failed to register")}}finally{y(!1)}},I=T=>{const{name:_,value:V}=T.target;switch(_){case"email":e(V);break;case"password":r(V);break;case"confirmPassword":i(V);break;case"displayName":l(V);break}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create your account"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx(ae,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"sign in to your account"})]})]}),c.jsxs("form",{className:"mt-8 space-y-6",onSubmit:x,children:[u&&c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:u})}),c.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"display-name",className:"sr-only",children:"Display Name"}),c.jsx("input",{id:"display-name",name:"displayName",type:"text",autoComplete:"name",className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Display Name",value:a,onChange:I})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),c.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:I})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Password",value:t,onChange:I})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"confirm-password",className:"sr-only",children:"Confirm Password"}),c.jsx("input",{id:"confirm-password",name:"confirmPassword",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Confirm Password",value:s,onChange:I})]})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:m,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",children:m?"Creating account...":"Create account"})})]})]})})}function JA(){const[n,e]=k.useState(""),[t,r]=k.useState(null),[s,i]=k.useState(!1),[a,l]=k.useState(!1),u=async h=>{h.preventDefault(),r(null),i(!1),l(!0);try{await $A(n),i(!0)}catch(m){r(m.message||"Failed to send reset email")}finally{l(!1)}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Reset your password"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx(ae,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"sign in to your account"})]})]}),c.jsxs("form",{className:"mt-8 space-y-6",onSubmit:u,children:[t&&c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:t})}),s&&c.jsx("div",{className:"rounded-md bg-green-50 p-4",children:c.jsx("div",{className:"text-sm text-green-700",children:"Password reset email sent! Please check your inbox."})}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),c.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:h=>e(h.target.value)})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:a?"Sending...":"Send reset link"})})]})]})})}function ZA(){var l,u;const{user:n}=At(),[e,t]=k.useState(null),[r,s]=k.useState(!0),[i,a]=k.useState(null);return k.useEffect(()=>{(async()=>{if(n)try{const m=ot(Se(J,"entries"),et("userId","==",n.id)),g=(await tt(m)).docs.map(_=>({id:_.id,..._.data()}));let x=0,I=0,T=[];if(g.length>0){const _=ot(Se(J,"votes"),et("entryId","in",g.map(A=>A.id)));T=(await tt(_)).docs.map(A=>({id:A.id,...A.data()})),x=T.length,I=x>0?T.reduce((A,j)=>A+(j.rating||0),0)/x:0}t({totalEntries:g.length,totalVotes:x,averageRating:I,entries:g})}catch(m){a(m.message||"Failed to fetch user statistics")}finally{s(!1)}})()},[n]),r?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):i?c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:i})})}):c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsxs("div",{className:"flex items-center space-x-4",children:[n!=null&&n.photoURL?c.jsx("img",{src:n.photoURL,alt:n.displayName||"User avatar",className:"h-16 w-16 rounded-full"}):c.jsx("div",{className:"h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center",children:c.jsx("span",{className:"text-2xl text-primary-600",children:((l=n==null?void 0:n.displayName)==null?void 0:l[0])||((u=n==null?void 0:n.email)==null?void 0:u[0])||"?"})}),c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:(n==null?void 0:n.displayName)||"User"}),c.jsx("p",{className:"text-gray-500",children:n==null?void 0:n.email})]})]}),c.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3",children:[c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[c.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Entries"}),c.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.totalEntries)||0})]})}),c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[c.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Votes Received"}),c.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.totalVotes)||0})]})}),c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[c.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Average Rating"}),c.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.averageRating.toFixed(1))||"0.0"})]})})]}),c.jsxs("div",{className:"mt-8",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Your Entries"}),c.jsx("div",{className:"mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:e==null?void 0:e.entries.map(h=>c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:[c.jsx("img",{src:h.imageUrl,alt:h.title,className:"w-full h-48 object-cover"}),c.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:h.title}),h.description&&c.jsx("p",{className:"mt-2 text-sm text-gray-500",children:h.description}),c.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[c.jsxs("div",{className:"text-sm text-gray-500",children:[h.voteCount," votes"]}),c.jsxs("div",{className:"text-sm font-medium text-primary-600",children:["Rating: ",h.voteCount>0?(h.voteCount/e.totalVotes*100).toFixed(1):"0.0","%"]})]})]})]},h.id))})]})]})})}const eP=async n=>{const e={...n,createdAt:re.now(),updatedAt:re.now(),voteCount:0,averageRating:0};return{id:(await Wo(Se(J,"entries"),e)).id,...e}},ap=async n=>{try{console.log(`Fetching entries for tournament ${n}...`);const e=ot(Se(J,"entries"),et("tournamentId","==",n)),r=(await tt(e)).docs.map(s=>({id:s.id,...s.data()}));return r.sort((s,i)=>{const a=s.createdAt instanceof Date?s.createdAt:s.createdAt.toDate();return(i.createdAt instanceof Date?i.createdAt:i.createdAt.toDate()).getTime()-a.getTime()}),console.log(`Found ${r.length} entries for tournament ${n}`),r}catch(e){return console.error(`Error getting entries for tournament ${n}:`,e),[]}},tP=async(n,e)=>{try{console.log(`Fetching entries for user ${e} in tournament ${n}...`);const t=Se(J,"entries"),r=ot(t,et("tournamentId","==",n),et("userId","==",e)),i=(await tt(r)).docs.map(a=>{const l=a.data();return{id:a.id,...l,createdAt:l.createdAt instanceof re?l.createdAt.toDate():l.createdAt,updatedAt:l.updatedAt instanceof re?l.updatedAt.toDate():l.updatedAt}});return console.log(`Found ${i.length} entries for user ${e} in tournament ${n}`),i}catch(t){throw console.error("Error fetching user entries:",t),t}},nP=async n=>{console.log("Creating vote with data:",n);try{const e=ot(Se(J,"votes"),et("userId","==",n.userId),et("entryId","==",n.entryId));if(!(await tt(e)).empty)throw console.log("User already voted for this entry"),new Error("You have already voted for this entry");const r={...n,createdAt:re.now()},s=Pe(J,"entries",n.entryId),i=await pt(s);if(!i.exists())throw console.error("Entry not found:",n.entryId),new Error("Entry does not exist");const a=i.data();console.log("Entry before update:",JSON.stringify(a,null,2));const l=a.voteCount||0,u=(a.averageRating||0)*l,h=l+1,m=u+n.rating,y=m/h;console.log("Vote calculation:",{currentVoteCount:l,currentTotalPoints:u,newVoteCount:h,newTotalPoints:m,newAverageRating:y,newRating:n.rating});const g=await Wo(Se(J,"votes"),r),x={voteCount:h,averageRating:y,updatedAt:re.now()};await ui(s,x),console.log("Entry updated with new vote stats:",x);const I=await pt(s);return I.exists()&&console.log("Updated entry data:",JSON.stringify(I.data(),null,2)),{id:g.id,...r}}catch(e){throw console.error("Error in createVote:",e),e}},cp=async n=>{try{console.log(`Fetching votes for tournament ${n}...`);const e=ot(Se(J,"votes"),et("tournamentId","==",n)),r=(await tt(e)).docs.map(s=>({id:s.id,...s.data()}));return console.log(`Found ${r.length} votes for tournament ${n}`),r}catch(e){return console.error(`Error getting votes for tournament ${n}:`,e),[]}};async function rP(n,e){try{console.log(`Fetching votes for user ${e} in tournament ${n}...`);const t=Se(J,"votes"),r=ot(t,et("tournamentId","==",n),et("userId","==",e)),i=(await tt(r)).docs.map(a=>{const l=a.data();return{id:a.id,...l,createdAt:l.createdAt instanceof re?l.createdAt.toDate():l.createdAt}});return console.log(`Found ${i.length} votes by user for tournament ${n}`),i}catch(t){throw console.error("Error fetching user votes:",t),t}}const sP=async(n,e,t)=>{try{const r=qt.currentUser;if(!r)throw new Error("You must be logged in to vote");console.log(`Submitting vote for entry ${n} with rating ${e} in tournament ${t}`);const s=await nP({userId:r.uid,entryId:n,tournamentId:t,rating:e});console.log(`Vote created successfully for entry ${n}:`,s)}catch(r){throw console.error("Error submitting vote:",r),r}},iP=async(n,e)=>{const t=Rg(Il,e);return await jT(t,n),await OT(t)},oP=async n=>{const e=Rg(Il,n);await VT(e)},aP=async({title:n,description:e,image:t,userId:r,tournamentId:s})=>{try{const a=(await pt(Pe(J,"users",r))).data(),l=`entries/${s}/${r}/${Date.now()}_${t.name}`,u=await iP(t,l);return await eP({userId:r,tournamentId:s,title:n,description:e,imageUrl:u,userDisplayName:(a==null?void 0:a.displayName)||"Anonymous",userPhotoURL:(a==null?void 0:a.photoURL)||null,status:"approved"})}catch(i){throw console.error("Error submitting entry:",i),i}},Ce=n=>n?n instanceof Date?n:n!=null&&n.toDate?n.toDate():new Date(n):new Date,cP=async()=>{try{console.log("Fetching all tournaments...");const e=(await tt(Se(J,"tournaments"))).docs.map(t=>{const r=t.data();return{...r,id:t.id,submissionPhaseStart:Ce(r.submissionPhaseStart),submissionPhaseEnd:Ce(r.submissionPhaseEnd),votingPhaseStart:Ce(r.votingPhaseStart),votingPhaseEnd:Ce(r.votingPhaseEnd),createdAt:Ce(r.createdAt),updatedAt:Ce(r.updatedAt)}});return e.sort((t,r)=>r.createdAt.getTime()-t.createdAt.getTime()),console.log(`Found ${e.length} tournaments`),e}catch(n){return console.error("Error getting tournaments:",n),[]}},hi=async n=>{try{console.log(`Fetching tournament with ID ${n}...`);const e=await pt(Pe(J,"tournaments",n));if(!e.exists())return console.log(`Tournament with ID ${n} not found`),null;const t=e.data(),r={...t,id:e.id,submissionPhaseStart:Ce(t.submissionPhaseStart),submissionPhaseEnd:Ce(t.submissionPhaseEnd),votingPhaseStart:Ce(t.votingPhaseStart),votingPhaseEnd:Ce(t.votingPhaseEnd),createdAt:Ce(t.createdAt),updatedAt:Ce(t.updatedAt)};return console.log("Tournament found:",r),r}catch(e){throw console.error(`Error getting tournament with ID ${n}:`,e),e}},Yo=async()=>{try{const e=(await cP()).filter(r=>r.currentPhase==="submission"||r.currentPhase==="voting");if(e.length>0)return e.sort((r,s)=>s.createdAt.getTime()-r.createdAt.getTime()),e[0];console.log("No active tournaments found in 'tournaments' collection, checking legacy location");const t=await pt(Pe(J,"tournament","state"));if(t.exists()){console.log("Found tournament state in legacy location");const r=t.data(),s={...r,id:"state",tournamentId:"legacy",name:"Legacy Tournament",ownerId:"admin",submissionPhaseStart:Ce(r.submissionPhaseStart),submissionPhaseEnd:Ce(r.submissionPhaseEnd),votingPhaseStart:Ce(r.votingPhaseStart),votingPhaseEnd:Ce(r.votingPhaseEnd),createdAt:Ce(r.createdAt||new Date),updatedAt:Ce(r.updatedAt||new Date)};console.log("Migrating legacy tournament to new collection...");const i=await Wo(Se(J,"tournaments"),s);return{...s,id:i.id}}return console.log("No tournament state found"),null}catch(n){throw console.error("Error getting tournament state:",n),n}},vr=async n=>{try{if(!n.id)throw new Error("Tournament ID is required for updates");const e=n.id;console.log(`Updating tournament ${e} with:`,n);const{id:t,...r}=n;await ui(Pe(J,"tournaments",e),{...r,updatedAt:new Date}),console.log(`Tournament ${e} updated successfully`)}catch(e){throw console.error("Error updating tournament:",e),e}},lP=async(n,e,t=7,r=7)=>{try{console.log(`Creating new tournament "${n}" for user ${e}`);const s=new Date,i=new Date(s.getTime()+t*24*60*60*1e3),a=new Date(i.getTime()+r*24*60*60*1e3),l={name:n,ownerId:e,tournamentId:`tournament_${Date.now()}`,currentPhase:"submission",submissionPhaseStart:s,submissionPhaseEnd:i,votingPhaseStart:i,votingPhaseEnd:a,maxEntriesPerUser:null,maxVotesPerUser:null,votingQuestion:"How would you rate this entry?",createdAt:s,updatedAt:s,isPasswordProtected:!1,password:null};console.log("Tournament data:",l);const u=await Wo(Se(J,"tournaments"),l);return await ui(Pe(J,"users",e),{isAdmin:!0,updatedAt:s}),console.log(`User ${e} has been granted admin rights as tournament creator`),{...l,id:u.id}}catch(s){throw console.error("Error creating tournament:",s),s}},uP=async n=>{try{console.log(`Deleting tournament with ID: ${n}`);const e=qt.currentUser;if(!e)throw new Error("You must be logged in to delete a tournament");const t=Pe(J,"tournaments",n),r=await pt(t);if(!r.exists())throw new Error("Tournament not found");const s=r.data(),i=(await pt(Pe(J,"users",e.uid))).data();if(s.ownerId!==e.uid&&!(i!=null&&i.isAdmin))throw new Error("You do not have permission to delete this tournament");const a=await ap(n),l=await cp(n),u=EE(J);for(const h of l)u.delete(Pe(J,"votes",h.id));for(const h of a)if(u.delete(Pe(J,"entries",h.id)),h.imageUrl)try{const m=h.imageUrl.split("/").slice(3).join("/").split("?")[0],y=decodeURIComponent(m);await oP(`entries/${n}/${h.userId}/${y.split("/").pop()}`)}catch(m){console.error(`Failed to delete image for entry ${h.id}:`,m)}u.delete(t),await u.commit(),console.log(`Successfully deleted tournament ${n} with ${a.length} entries and ${l.length} votes`)}catch(e){throw console.error("Error deleting tournament:",e),e}},dP=async(n,e,t)=>{try{console.log(`Updating password for tournament ${n}`);const r=qt.currentUser;if(!r)throw new Error("You must be logged in to update tournament settings");const s=Pe(J,"tournaments",n),i=await pt(s);if(!i.exists())throw new Error("Tournament not found");const a=i.data(),l=(await pt(Pe(J,"users",r.uid))).data();if(a.ownerId!==r.uid&&!(l!=null&&l.isAdmin))throw new Error("You do not have permission to update this tournament");await ui(s,{isPasswordProtected:e,password:e?t:null,updatedAt:re.now()}),console.log(`Successfully updated password protection for tournament ${n}`)}catch(r){throw console.error("Error updating tournament password:",r),r}},hP=async(n,e)=>{try{console.log(`Checking password for tournament ${n}...`);const t=await hi(n);if(!t)return console.error("Tournament not found"),!1;if(console.log(`Tournament found: ${t.name}, isPasswordProtected: ${t.isPasswordProtected}`),!t.isPasswordProtected)return console.log("Tournament is not password protected"),!0;const r=t.password===e;return console.log(`Password comparison result: ${r}`),r}catch(t){return console.error("Error checking tournament password:",t),!1}};async function lp(n){try{console.log(`Fetching approved entries for tournament ${n}...`);const e=Se(J,"entries"),t=ot(e,et("tournamentId","==",n),et("status","==","approved")),s=(await tt(t)).docs.map(i=>{const a=i.data();return{id:i.id,...a,createdAt:a.createdAt instanceof re?a.createdAt.toDate():a.createdAt,updatedAt:a.updatedAt instanceof re?a.updatedAt.toDate():a.updatedAt}});return console.log(`Found ${s.length} approved entries for tournament ${n}`),s}catch(e){throw console.error("Error fetching approved entries:",e),e}}async function fP(){try{console.log("Fetching all tournaments...");const n=Se(J,"tournaments"),t=(await tt(n)).docs.map(r=>{const s=r.data();return{id:r.id,...s,createdAt:s.createdAt instanceof re?s.createdAt.toDate():s.createdAt,updatedAt:s.updatedAt instanceof re?s.updatedAt.toDate():s.updatedAt,submissionPhaseStart:s.submissionPhaseStart instanceof re?s.submissionPhaseStart.toDate():s.submissionPhaseStart,submissionPhaseEnd:s.submissionPhaseEnd instanceof re?s.submissionPhaseEnd.toDate():s.submissionPhaseEnd,votingPhaseStart:s.votingPhaseStart instanceof re?s.votingPhaseStart.toDate():s.votingPhaseStart,votingPhaseEnd:s.votingPhaseEnd instanceof re?s.votingPhaseEnd.toDate():s.votingPhaseEnd}});return console.log(`Found ${t.length} tournaments`),t}catch(n){throw console.error("Error fetching tournaments:",n),n}}const up=6048e5,mP=864e5,Fi=43200,fh=1440,mh=Symbol.for("constructDateFrom");function on(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&mh in n?n[mh](e):n instanceof Date?new n.constructor(e):new Date(e)}function ke(n,e){return on(e||n,n)}let gP={};function fi(){return gP}function Gs(n,e){var l,u,h,m;const t=fi(),r=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??t.weekStartsOn??((m=(h=t.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,s=ke(n,e==null?void 0:e.in),i=s.getDay(),a=(i<r?7:0)+i-r;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function yo(n,e){return Gs(n,{...e,weekStartsOn:1})}function dp(n,e){const t=ke(n,e==null?void 0:e.in),r=t.getFullYear(),s=on(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=yo(s),a=on(t,0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);const l=yo(a);return t.getTime()>=i.getTime()?r+1:t.getTime()>=l.getTime()?r:r-1}function _o(n){const e=ke(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Xo(n,...e){const t=on.bind(null,n||e.find(r=>typeof r=="object"));return e.map(t)}function gh(n,e){const t=ke(n,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function pP(n,e,t){const[r,s]=Xo(t==null?void 0:t.in,n,e),i=gh(r),a=gh(s),l=+i-_o(i),u=+a-_o(a);return Math.round((l-u)/mP)}function yP(n,e){const t=dp(n,e),r=on(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),yo(r)}function Qi(n,e){const t=+ke(n)-+ke(e);return t<0?-1:t>0?1:t}function _P(n){return on(n,Date.now())}function vP(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function wP(n){return!(!vP(n)&&typeof n!="number"||isNaN(+ke(n)))}function xP(n,e,t){const[r,s]=Xo(t==null?void 0:t.in,n,e),i=r.getFullYear()-s.getFullYear(),a=r.getMonth()-s.getMonth();return i*12+a}function bP(n){return e=>{const r=(n?Math[n]:Math.trunc)(e);return r===0?0:r}}function EP(n,e){return+ke(n)-+ke(e)}function TP(n,e){const t=ke(n,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function IP(n,e){const t=ke(n,e==null?void 0:e.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function AP(n,e){const t=ke(n,e==null?void 0:e.in);return+TP(t,e)==+IP(t,e)}function PP(n,e,t){const[r,s,i]=Xo(t==null?void 0:t.in,n,n,e),a=Qi(s,i),l=Math.abs(xP(s,i));if(l<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-a*l);let u=Qi(s,i)===-a;AP(r)&&l===1&&Qi(r,i)===1&&(u=!1);const h=a*(l-+u);return h===0?0:h}function SP(n,e,t){const r=EP(n,e)/1e3;return bP(t==null?void 0:t.roundingMethod)(r)}function RP(n,e){const t=ke(n,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const NP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},CP=(n,e,t)=>{let r;const s=NP[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function Ba(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const kP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},DP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},jP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},OP={date:Ba({formats:kP,defaultWidth:"full"}),time:Ba({formats:DP,defaultWidth:"full"}),dateTime:Ba({formats:jP,defaultWidth:"full"})},VP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},MP=(n,e,t,r)=>VP[n];function ps(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const a=n.defaultFormattingWidth||n.defaultWidth,l=t!=null&&t.width?String(t.width):a;s=n.formattingValues[l]||n.formattingValues[a]}else{const a=n.defaultWidth,l=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[l]||n.values[a]}const i=n.argumentCallback?n.argumentCallback(e):e;return s[i]}}const LP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},FP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},UP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},BP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$P={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},WP=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},HP={ordinalNumber:WP,era:ps({values:LP,defaultWidth:"wide"}),quarter:ps({values:FP,defaultWidth:"wide",argumentCallback:n=>n-1}),month:ps({values:UP,defaultWidth:"wide"}),day:ps({values:BP,defaultWidth:"wide"}),dayPeriod:ps({values:$P,defaultWidth:"wide",formattingValues:qP,defaultFormattingWidth:"wide"})};function ys(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(s);if(!i)return null;const a=i[0],l=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],u=Array.isArray(l)?GP(l,y=>y.test(a)):zP(l,y=>y.test(a));let h;h=n.valueCallback?n.valueCallback(u):u,h=t.valueCallback?t.valueCallback(h):h;const m=e.slice(a.length);return{value:h,rest:m}}}function zP(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function GP(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function KP(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],i=e.match(n.parsePattern);if(!i)return null;let a=n.valueCallback?n.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const QP=/^(\d+)(th|st|nd|rd)?/i,YP=/\d+/i,XP={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},JP={any:[/^b/i,/^(a|c)/i]},ZP={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},eS={any:[/1/i,/2/i,/3/i,/4/i]},tS={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},nS={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},rS={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},sS={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},iS={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},oS={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},aS={ordinalNumber:KP({matchPattern:QP,parsePattern:YP,valueCallback:n=>parseInt(n,10)}),era:ys({matchPatterns:XP,defaultMatchWidth:"wide",parsePatterns:JP,defaultParseWidth:"any"}),quarter:ys({matchPatterns:ZP,defaultMatchWidth:"wide",parsePatterns:eS,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ys({matchPatterns:tS,defaultMatchWidth:"wide",parsePatterns:nS,defaultParseWidth:"any"}),day:ys({matchPatterns:rS,defaultMatchWidth:"wide",parsePatterns:sS,defaultParseWidth:"any"}),dayPeriod:ys({matchPatterns:iS,defaultMatchWidth:"any",parsePatterns:oS,defaultParseWidth:"any"})},hp={code:"en-US",formatDistance:CP,formatLong:OP,formatRelative:MP,localize:HP,match:aS,options:{weekStartsOn:0,firstWeekContainsDate:1}};function cS(n,e){const t=ke(n,e==null?void 0:e.in);return pP(t,RP(t))+1}function lS(n,e){const t=ke(n,e==null?void 0:e.in),r=+yo(t)-+yP(t);return Math.round(r/up)+1}function fp(n,e){var m,y,g,x;const t=ke(n,e==null?void 0:e.in),r=t.getFullYear(),s=fi(),i=(e==null?void 0:e.firstWeekContainsDate)??((y=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??s.firstWeekContainsDate??((x=(g=s.locale)==null?void 0:g.options)==null?void 0:x.firstWeekContainsDate)??1,a=on((e==null?void 0:e.in)||n,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const l=Gs(a,e),u=on((e==null?void 0:e.in)||n,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const h=Gs(u,e);return+t>=+l?r+1:+t>=+h?r:r-1}function uS(n,e){var l,u,h,m;const t=fi(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(h=t.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,s=fp(n,e),i=on((e==null?void 0:e.in)||n,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),Gs(i,e)}function dS(n,e){const t=ke(n,e==null?void 0:e.in),r=+Gs(t,e)-+uS(t,e);return Math.round(r/up)+1}function le(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const hn={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return le(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):le(t+1,2)},d(n,e){return le(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return le(n.getHours()%12||12,e.length)},H(n,e){return le(n.getHours(),e.length)},m(n,e){return le(n.getMinutes(),e.length)},s(n,e){return le(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return le(s,e.length)}},wr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ph={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return hn.y(n,e)},Y:function(n,e,t,r){const s=fp(n,r),i=s>0?s:1-s;if(e==="YY"){const a=i%100;return le(a,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):le(i,e.length)},R:function(n,e){const t=dp(n);return le(t,e.length)},u:function(n,e){const t=n.getFullYear();return le(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return le(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return le(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return hn.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return le(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=dS(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):le(s,e.length)},I:function(n,e,t){const r=lS(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):le(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):hn.d(n,e)},D:function(n,e,t){const r=cS(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):le(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return le(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return le(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return le(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=wr.noon:r===0?s=wr.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=wr.evening:r>=12?s=wr.afternoon:r>=4?s=wr.morning:s=wr.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return hn.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):hn.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):le(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):le(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):hn.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):hn.s(n,e)},S:function(n,e){return hn.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return _h(r);case"XXXX":case"XX":return qn(r);case"XXXXX":case"XXX":default:return qn(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return _h(r);case"xxxx":case"xx":return qn(r);case"xxxxx":case"xxx":default:return qn(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+yh(r,":");case"OOOO":default:return"GMT"+qn(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+yh(r,":");case"zzzz":default:return"GMT"+qn(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return le(r,e.length)},T:function(n,e,t){return le(+n,e.length)}};function yh(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),i=r%60;return i===0?t+String(s):t+String(s)+e+le(i,2)}function _h(n,e){return n%60===0?(n>0?"-":"+")+le(Math.abs(n)/60,2):qn(n,e)}function qn(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=le(Math.trunc(r/60),2),i=le(r%60,2);return t+s+e+i}const vh=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},mp=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},hS=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return vh(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",vh(r,e)).replace("{{time}}",mp(s,e))},fS={p:mp,P:hS},mS=/^D+$/,gS=/^Y+$/,pS=["D","DD","YY","YYYY"];function yS(n){return mS.test(n)}function _S(n){return gS.test(n)}function vS(n,e,t){const r=wS(n,e,t);if(console.warn(r),pS.includes(n))throw new RangeError(r)}function wS(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const xS=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,bS=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ES=/^'([^]*?)'?$/,TS=/''/g,IS=/[a-zA-Z]/;function In(n,e,t){var m,y,g,x;const r=fi(),s=r.locale??hp,i=r.firstWeekContainsDate??((y=(m=r.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??1,a=r.weekStartsOn??((x=(g=r.locale)==null?void 0:g.options)==null?void 0:x.weekStartsOn)??0,l=ke(n,t==null?void 0:t.in);if(!wP(l))throw new RangeError("Invalid time value");let u=e.match(bS).map(I=>{const T=I[0];if(T==="p"||T==="P"){const _=fS[T];return _(I,s.formatLong)}return I}).join("").match(xS).map(I=>{if(I==="''")return{isToken:!1,value:"'"};const T=I[0];if(T==="'")return{isToken:!1,value:AS(I)};if(ph[T])return{isToken:!0,value:I};if(T.match(IS))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");return{isToken:!1,value:I}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const h={firstWeekContainsDate:i,weekStartsOn:a,locale:s};return u.map(I=>{if(!I.isToken)return I.value;const T=I.value;(_S(T)||yS(T))&&vS(T,e,String(n));const _=ph[T[0]];return _(l,T,s.localize,h)}).join("")}function AS(n){const e=n.match(ES);return e?e[1].replace(TS,"'"):n}function PS(n,e,t){const r=fi(),s=(t==null?void 0:t.locale)??r.locale??hp,i=2520,a=Qi(n,e);if(isNaN(a))throw new RangeError("Invalid time value");const l=Object.assign({},t,{addSuffix:t==null?void 0:t.addSuffix,comparison:a}),[u,h]=Xo(t==null?void 0:t.in,...a>0?[e,n]:[n,e]),m=SP(h,u),y=(_o(h)-_o(u))/1e3,g=Math.round((m-y)/60);let x;if(g<2)return t!=null&&t.includeSeconds?m<5?s.formatDistance("lessThanXSeconds",5,l):m<10?s.formatDistance("lessThanXSeconds",10,l):m<20?s.formatDistance("lessThanXSeconds",20,l):m<40?s.formatDistance("halfAMinute",0,l):m<60?s.formatDistance("lessThanXMinutes",1,l):s.formatDistance("xMinutes",1,l):g===0?s.formatDistance("lessThanXMinutes",1,l):s.formatDistance("xMinutes",g,l);if(g<45)return s.formatDistance("xMinutes",g,l);if(g<90)return s.formatDistance("aboutXHours",1,l);if(g<fh){const I=Math.round(g/60);return s.formatDistance("aboutXHours",I,l)}else{if(g<i)return s.formatDistance("xDays",1,l);if(g<Fi){const I=Math.round(g/fh);return s.formatDistance("xDays",I,l)}else if(g<Fi*2)return x=Math.round(g/Fi),s.formatDistance("aboutXMonths",x,l)}if(x=PP(h,u),x<12){const I=Math.round(g/Fi);return s.formatDistance("xMonths",I,l)}else{const I=x%12,T=Math.trunc(x/12);return I<3?s.formatDistance("aboutXYears",T,l):I<9?s.formatDistance("overXYears",T,l):s.formatDistance("almostXYears",T+1,l)}}function _n(n,e){return PS(n,_P(n),e)}function SS(){const n=Ut(),[e,t]=k.useState("tournaments"),[r,s]=k.useState(null),[i,a]=k.useState(!0);k.useEffect(()=>{(async()=>{try{const m=await Yo();s(m)}catch(m){console.error("Error fetching tournament state:",m)}finally{a(!1)}})()},[]);const l=()=>{if(!r)return"Unknown";switch(r.currentPhase){case"submission":return"Submission Phase";case"voting":return"Voting Phase";case"completed":return"Completed";default:return"Unknown"}},u=()=>{if(!r)return"Unknown";const h=new Date;let m;if(r.currentPhase==="submission")m=r.submissionPhaseEnd;else if(r.currentPhase==="voting")m=r.votingPhaseEnd;else return"Tournament completed";const y=m.getTime()-h.getTime();if(y<=0)return"Ended";const g=Math.floor(y/(1e3*60*60*24)),x=Math.floor(y%(1e3*60*60*24)/(1e3*60*60));return`${g}d ${x}h remaining`};return c.jsx("div",{className:"min-h-screen bg-gray-100",children:c.jsx("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"px-4 py-6 sm:px-0",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Admin Dashboard"}),c.jsx("div",{className:"border-b border-gray-200 mt-6",children:c.jsxs("nav",{className:"-mb-px flex space-x-8",children:[c.jsx("button",{onClick:()=>t("tournaments"),className:`${e==="tournaments"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Tournament Management"}),c.jsx("button",{onClick:()=>t("entries"),className:`${e==="entries"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Entries"}),c.jsx("button",{onClick:()=>t("users"),className:`${e==="users"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Users"})]})}),c.jsxs("div",{className:"mt-6",children:[e==="tournaments"&&c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-6",children:"Tournament Management"}),i?c.jsx("div",{className:"flex justify-center py-4",children:c.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"})}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Current Phase"}),c.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:l()})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Status"}),c.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:u()})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Last Updated"}),c.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:r!=null&&r.updatedAt?In(r.updatedAt,"PPp"):"Never"})]})]})}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:c.jsx("button",{onClick:()=>n("/admin/settings"),className:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Manage Tournament Settings"})})]})]}),e==="entries"&&c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("div",{className:"flex justify-between items-center mb-6",children:c.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Entry Management"})}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:c.jsx("button",{onClick:()=>n("/admin/entries"),className:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Review Submissions"})})]}),e==="users"&&c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-6",children:"Users"}),c.jsx("div",{className:"text-gray-500",children:"User management features coming soon."})]})]})]})})})}class RS extends k.Component{constructor(){super(...arguments);Au(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,r){console.error("Uncaught error:",t,r)}render(){var t;return this.state.hasError?this.props.fallback||c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:((t=this.state.error)==null?void 0:t.message)||"An unexpected error occurred"})]}),c.jsxs("div",{className:"mt-8 space-y-6",children:[c.jsx("button",{onClick:()=>window.location.reload(),className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Reload Page"}),c.jsx("button",{onClick:()=>window.location.href="/",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Go to Home"})]})]})}):this.props.children}}function Jo({tournamentId:n,tournamentName:e,onPasswordSuccess:t}){const{user:r}=At(),[s,i]=k.useState(""),[a,l]=k.useState(null),[u,h]=k.useState(!1),[m,y]=k.useState(!1),[g,x]=k.useState(!1),I=async(_,V)=>{try{return await hP(_,V)}catch(A){return console.error("Error verifying password:",A),!1}},T=async _=>{if(_.preventDefault(),!r){l("You must be logged in to access this tournament");return}if(!s.trim()){l("Please enter a password");return}h(!0);try{console.log(`Verifying password for tournament ${n}`);const V=await I(n,s);if(console.log("Password verification result:",V),V){const A=`tournament_access_${n}_${r.id}`;console.log("Setting localStorage key:",A),localStorage.setItem(A,"true"),t&&t()}else l("Incorrect password. Please try again.")}catch(V){console.error("Error during password verification:",V),l("An error occurred. Please try again.")}finally{h(!1)}};return r?c.jsxs("div",{className:"max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md",children:[c.jsx("h2",{className:"text-xl font-bold mb-2",children:"Password Required"}),c.jsxs("p",{className:"text-gray-600 mb-4",children:["This tournament is password protected. Please enter the password to access ",e,"."]}),a&&c.jsx("div",{className:"mb-4 p-3 bg-red-50 text-red-700 rounded-md",children:a}),c.jsxs("form",{onSubmit:T,children:[c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Tournament Password"}),c.jsxs("div",{className:"relative rounded-md shadow-sm",children:[c.jsx("input",{type:m?"text":"password",id:"password",value:s,onChange:_=>i(_.target.value),className:"focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md pr-10",placeholder:"Enter password",autoComplete:"off"}),c.jsx("button",{type:"button",onClick:()=>y(!m),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500",children:m?c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),c.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}):c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),c.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]})})]})]}),c.jsx("div",{className:"flex justify-center",children:c.jsx("button",{type:"submit",className:"w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",disabled:u,children:u?c.jsxs(c.Fragment,{children:[c.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Checking..."]}):"Submit Password"})})]}),c.jsx("div",{className:"mt-4 text-center",children:c.jsx("a",{href:"/",className:"text-sm text-primary-600 hover:text-primary-500",children:"Back to Home"})})]}):c.jsxs("div",{className:"max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md",children:[c.jsx("p",{className:"text-red-600 mb-4",children:"You must be logged in to access this tournament."}),c.jsx(ae,{to:"/login",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Log In"})]})}function wh(){const{user:n}=At(),{tournamentId:e}=vo(),t=Ut(),[r,s]=k.useState(null),[i,a]=k.useState(!0),[l,u]=k.useState(!0),[h,m]=k.useState(null),[y,g]=k.useState(null),[x,I]=k.useState(""),[T,_]=k.useState({totalEntries:0,pendingEntries:0,approvedEntries:0,rejectedEntries:0,totalVotes:0,totalUsers:0}),[V,A]=k.useState(!1),[j,L]=k.useState(""),[W,H]=k.useState(!1),[P,v]=k.useState(!1),[w,E]=k.useState(""),[S,N]=k.useState(!1),[b,z]=k.useState(!1);k.useEffect(()=>{(async()=>{try{if(!e){m("No tournament ID provided");return}await de(),await he()}catch(Z){console.error("Error fetching data:",Z),m(Z.message||"An error occurred while fetching data")}})()},[e,n]),k.useEffect(()=>{(r==null?void 0:r.votingQuestion)!==void 0&&I(r.votingQuestion),(r==null?void 0:r.isPasswordProtected)!==void 0&&(A(r.isPasswordProtected),r.password&&L(r.password))},[r]);const de=async()=>{try{if(a(!0),!e){m("No tournament ID provided");return}const B=await hi(e);if(!B){m("Tournament not found");return}if(console.log("Current user:",n),console.log("Tournament ownerId:",B.ownerId),console.log("User ID matches owner?",B.ownerId===(n==null?void 0:n.id)),console.log("User is admin?",(n==null?void 0:n.isAdmin)===!0),n&&!(n.id===B.ownerId)){m("You do not have permission to access this tournament settings. Only the tournament creator can modify settings.");return}s(B),z(!0)}catch(B){console.error("Error fetching tournament:",B),m("Failed to load tournament data")}finally{a(!1)}},he=async()=>{try{if(!e)return;u(!0);const B=await ap(e),Z=B.filter(St=>St.status==="pending"||!St.status).length,Ht=B.filter(St=>St.status==="approved").length,at=B.filter(St=>St.status==="rejected").length,fr=await cp(e),mr=ot(Se(J,"users")),Zr=await tt(mr);_({totalEntries:B.length,pendingEntries:Z,approvedEntries:Ht,rejectedEntries:at,totalVotes:fr.length,totalUsers:Zr.docs.length})}catch(B){console.error("Error fetching stats:",B)}finally{u(!1)}},Ge=async B=>{try{if(!r)return;m(null),g(null);const Z=new Date;let Ht=r.submissionPhaseEnd||new Date,at=r.votingPhaseEnd||new Date;B==="submission"?(Ht=new Date(Z.getTime()+7*24*60*60*1e3),at=new Date(Ht.getTime()+7*24*60*60*1e3)):B==="voting"&&B!==r.currentPhase&&(at=new Date(Z.getTime()+7*24*60*60*1e3)),await vr({id:r.id,currentPhase:B,submissionPhaseEnd:Ht,votingPhaseEnd:at}),g(`Tournament phase updated to ${B}`),await de()}catch(Z){console.error("Error updating tournament phase:",Z),m(Z.message||"Failed to update tournament phase")}},ht=async(B,Z,Ht)=>{try{if(!r)return;m(null),g(null);const at={id:r.id};at[`${B}Phase${Z}`]=Ht,await vr(at),g(`${B} phase ${Z.toLowerCase()} time updated`),await de()}catch(at){console.error(`Error updating ${B} phase ${Z.toLowerCase()} time:`,at),m(at.message||`Failed to update ${B} phase ${Z.toLowerCase()} time`)}},Vn=async B=>{try{if(!r)return;m(null),g(null);const Z=B===""?null:parseInt(B);await vr({id:r.id,maxEntriesPerUser:Z}),g("Entry limit updated successfully"),await de()}catch(Z){console.error("Error updating entry limit:",Z),m(Z.message||"Failed to update entry limit")}},hr=async B=>{try{if(!r)return;m(null),g(null);const Z=B===""?null:parseInt(B);await vr({id:r.id,maxVotesPerUser:Z}),g("Vote limit updated successfully"),await de()}catch(Z){console.error("Error updating vote limit:",Z),m(Z.message||"Failed to update vote limit")}},Jr=async B=>{try{if(!r)return;m(null),g(null),await vr({id:r.id,votingQuestion:B}),g("Voting question updated successfully"),await de()}catch(Z){console.error("Error updating voting question:",Z),m(Z.message||"Failed to update voting question")}},ye=async B=>{try{if(!r)return;m(null),g(null),await vr({id:r.id,name:B}),g("Tournament name updated successfully"),await de()}catch(Z){console.error("Error updating tournament name:",Z),m(Z.message||"Failed to update tournament name")}},ee=async()=>{try{if(!r)return;if(m(null),g(null),V&&!j.trim()){m("Please enter a password");return}await dP(r.id,V,V?j:null),g("Password protection settings updated successfully"),await de()}catch(B){console.error("Error updating password protection:",B),m(B.message||"Failed to update password protection")}},Wt=async()=>{try{if(!r)return;if(m(null),w!==r.name){m("Please enter the tournament name to confirm deletion");return}a(!0),await uP(r.id),t("/dashboard")}catch(B){console.error("Error deleting tournament:",B),m(B.message||"Failed to delete tournament"),a(!1)}},Pt=()=>{N(!1),z(!0)};return i?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):h?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4",children:c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex-shrink-0",children:c.jsx("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),c.jsx("div",{className:"ml-3",children:c.jsx("p",{className:"text-sm text-red-700",children:h})})]})}),c.jsx("button",{className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>t("/"),children:"Return to Home"})]}):r?S&&!b?c.jsx(Jo,{tournamentId:e,tournamentName:r.name,onPasswordSuccess:Pt}):c.jsxs("div",{className:"container mx-auto px-4 py-8",children:[c.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Tournament Settings"}),c.jsxs("p",{className:"text-gray-600 mb-8",children:["ID: ",r.id]}),h&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4",children:h}),y&&c.jsx("div",{className:"bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4",children:y}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Tournament Details"}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Tournament Name"}),c.jsx("div",{className:"mt-1 flex rounded-md shadow-sm",children:c.jsx("input",{type:"text",id:"name",className:"focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300",value:r.name,onChange:B=>ye(B.target.value)})}),c.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["Owner: ",r.ownerId===(n==null?void 0:n.id)?"You":r.ownerId]})]})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Phase Management"}),c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Current Phase"}),c.jsxs("div",{className:"flex flex-wrap gap-4",children:[c.jsx("button",{onClick:()=>Ge("submission"),className:`px-4 py-2 rounded-md ${r.currentPhase==="submission"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Submission Phase"}),c.jsx("button",{onClick:()=>Ge("voting"),className:`px-4 py-2 rounded-md ${r.currentPhase==="voting"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Voting Phase"}),c.jsx("button",{onClick:()=>Ge("completed"),className:`px-4 py-2 rounded-md ${r.currentPhase==="completed"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Completed"})]}),c.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:[r.currentPhase==="submission"&&"Users can submit designs during this phase.",r.currentPhase==="voting"&&"Submissions are closed. Users can vote on designs during this phase.",r.currentPhase==="completed"&&"The tournament is over. No new submissions or votes are accepted."]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Phase Timing"}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-md font-medium text-gray-700 mb-2",children:"Submission Phase"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"submissionStart",className:"block text-sm font-medium text-gray-700",children:"Start Date"}),c.jsx("input",{type:"datetime-local",id:"submissionStart",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:In(r.submissionPhaseStart,"yyyy-MM-dd'T'HH:mm"),onChange:B=>ht("submission","Start",new Date(B.target.value))})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"submissionEnd",className:"block text-sm font-medium text-gray-700",children:"End Date"}),c.jsx("input",{type:"datetime-local",id:"submissionEnd",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:In(r.submissionPhaseEnd,"yyyy-MM-dd'T'HH:mm"),onChange:B=>ht("submission","End",new Date(B.target.value))})]})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-md font-medium text-gray-700 mb-2",children:"Voting Phase"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"votingStart",className:"block text-sm font-medium text-gray-700",children:"Start Date"}),c.jsx("input",{type:"datetime-local",id:"votingStart",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:In(r.votingPhaseStart,"yyyy-MM-dd'T'HH:mm"),onChange:B=>ht("voting","Start",new Date(B.target.value))})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"votingEnd",className:"block text-sm font-medium text-gray-700",children:"End Date"}),c.jsx("input",{type:"datetime-local",id:"votingEnd",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:In(r.votingPhaseEnd,"yyyy-MM-dd'T'HH:mm"),onChange:B=>ht("voting","End",new Date(B.target.value))})]})]})]})]})]})]})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Entry & Voting Limits"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"maxEntries",className:"block text-sm font-medium text-gray-700",children:"Maximum Entries per User"}),c.jsxs("div",{className:"mt-1",children:[c.jsx("input",{type:"number",id:"maxEntries",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:r.maxEntriesPerUser===null?"":r.maxEntriesPerUser,onChange:B=>Vn(B.target.value),min:"1",placeholder:"Leave empty for unlimited"}),c.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Leave empty for unlimited entries"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"maxVotes",className:"block text-sm font-medium text-gray-700",children:"Maximum Votes per User"}),c.jsxs("div",{className:"mt-1",children:[c.jsx("input",{type:"number",id:"maxVotes",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:r.maxVotesPerUser===null?"":r.maxVotesPerUser,onChange:B=>hr(B.target.value),min:"1",placeholder:"Leave empty for unlimited"}),c.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Leave empty for unlimited votes"})]})]}),c.jsxs("div",{className:"md:col-span-2",children:[c.jsx("label",{htmlFor:"votingQuestion",className:"block text-sm font-medium text-gray-700",children:"Voting Question"}),c.jsxs("div",{className:"mt-1",children:[c.jsx("input",{type:"text",id:"votingQuestion",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:x,onChange:B=>I(B.target.value),placeholder:"How would you rate this entry?"}),c.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"This question will be displayed above the voting scale"})]}),c.jsx("div",{className:"mt-2",children:c.jsx("button",{onClick:()=>Jr(x),className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Update Voting Question"})})]})]})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Password Protection"}),c.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Enable password protection to restrict who can submit entries and vote in your tournament. Users will need to enter the password before they can participate."}),c.jsxs("div",{className:"flex items-center mb-4",children:[c.jsx("input",{type:"checkbox",id:"passwordProtection",checked:V,onChange:B=>A(B.target.checked),className:"h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"}),c.jsx("label",{htmlFor:"passwordProtection",className:"ml-2 block text-sm text-gray-900",children:"Enable password protection"})]}),V&&c.jsxs("div",{className:"mt-2",children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Tournament Password"}),c.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[c.jsx("input",{type:W?"text":"password",id:"password",value:j,onChange:B=>L(B.target.value),className:"focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md pr-10",placeholder:"Enter password"}),c.jsx("button",{type:"button",onClick:()=>H(!W),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500",children:W?c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),c.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}):c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),c.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]})})]})]}),c.jsx("div",{className:"mt-4",children:c.jsx("button",{onClick:ee,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Save Password Settings"})})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 border border-red-200",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4 text-red-600",children:"Danger Zone"}),c.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Permanently delete this tournament and all its data. This action cannot be undone. All entries, votes, and settings will be permanently removed."}),c.jsx("div",{children:P?c.jsxs("div",{className:"border border-red-300 rounded-md p-4 bg-red-50",children:[c.jsxs("p",{className:"text-sm text-red-700 mb-2",children:["To confirm deletion, please type ",c.jsx("strong",{children:r.name})," below:"]}),c.jsx("input",{type:"text",value:w,onChange:B=>E(B.target.value),className:"focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md mb-4",placeholder:"Enter tournament name to confirm"}),c.jsxs("div",{className:"flex space-x-3",children:[c.jsx("button",{onClick:Wt,disabled:w!==r.name,className:`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${w===r.name?"bg-red-600 hover:bg-red-700":"bg-gray-400 cursor-not-allowed"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`,children:"Permanently Delete"}),c.jsx("button",{onClick:()=>{v(!1),E("")},className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Cancel"})]})]}):c.jsx("button",{onClick:()=>v(!0),className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Delete Tournament"})})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Tournament Statistics"}),l?c.jsxs("div",{className:"animate-pulse py-4",children:[c.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/4 mb-4"}),c.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2 mb-4"}),c.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/3"})]}):c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[c.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Entries"}),c.jsx("p",{className:"text-3xl font-bold",children:T.totalEntries}),c.jsxs("div",{className:"mt-2 text-sm text-gray-500",children:[c.jsxs("div",{children:["Pending: ",T.pendingEntries]}),c.jsxs("div",{children:["Approved: ",T.approvedEntries]}),c.jsxs("div",{children:["Rejected: ",T.rejectedEntries]})]})]}),c.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[c.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Votes"}),c.jsx("p",{className:"text-3xl font-bold",children:T.totalVotes}),c.jsx("div",{className:"mt-2 text-sm text-gray-500",children:c.jsxs("div",{children:["Avg. per entry: ",T.totalEntries>0?(T.totalVotes/T.totalEntries).toFixed(1):"0"]})})]}),c.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[c.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Users"}),c.jsx("p",{className:"text-3xl font-bold",children:T.totalUsers}),c.jsx("div",{className:"mt-2 text-sm text-gray-500",children:c.jsxs("div",{children:["Contributors: ",T.totalEntries>0||T.totalVotes>0?"Various":"0"]})})]})]})]})]}):null}function xh(){const[n,e]=k.useState([]),[t,r]=k.useState(!0),[s,i]=k.useState(null),[a,l]=k.useState(null),[u,h]=k.useState("all");k.useEffect(()=>{m()},[u]);const m=async()=>{try{r(!0),i(null);let g;u==="all"?g=ot(Se(J,"entries"),Hs("createdAt","desc")):g=ot(Se(J,"entries"),et("status","==",u),Hs("createdAt","desc"));const I=(await tt(g)).docs.map(T=>({id:T.id,...T.data(),status:T.data().status||"pending"}));e(I)}catch(g){console.error("Error fetching entries:",g),i(g.message||"Failed to load entries")}finally{r(!1)}},y=async(g,x)=>{try{l(null),i(null);const I=Pe(J,"entries",g);await ui(I,{status:x}),e(n.map(T=>T.id===g?{...T,status:x}:T)),l(`Entry status updated to ${x}`)}catch(I){console.error("Error updating entry status:",I),i(I.message||"Failed to update entry status")}};return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Manage Entries"}),c.jsx("div",{className:"mt-3 sm:mt-0",children:c.jsxs("div",{className:"flex rounded-md shadow-sm",children:[c.jsx("button",{onClick:()=>h("all"),className:`px-4 py-2 text-sm font-medium rounded-l-md ${u==="all"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`,children:"All"}),c.jsx("button",{onClick:()=>h("pending"),className:`px-4 py-2 text-sm font-medium ${u==="pending"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"}`,children:"Pending"}),c.jsx("button",{onClick:()=>h("approved"),className:`px-4 py-2 text-sm font-medium ${u==="approved"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"}`,children:"Approved"}),c.jsx("button",{onClick:()=>h("rejected"),className:`px-4 py-2 text-sm font-medium rounded-r-md ${u==="rejected"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`,children:"Rejected"})]})})]}),s&&c.jsx("div",{className:"mb-4 p-4 bg-red-50 rounded-md",children:c.jsx("p",{className:"text-sm text-red-700",children:s})}),a&&c.jsx("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:c.jsx("p",{className:"text-sm text-green-700",children:a})}),t?c.jsx("div",{className:"flex justify-center py-12",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):n.length===0?c.jsx("div",{className:"text-center py-12",children:c.jsx("p",{className:"text-gray-500",children:"No entries found."})}):c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[c.jsx("thead",{className:"bg-gray-50",children:c.jsxs("tr",{children:[c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Image"}),c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Title"}),c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Submitted By"}),c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),c.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:n.map(g=>c.jsxs("tr",{children:[c.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:c.jsx("div",{className:"h-20 w-20 bg-gray-100 rounded overflow-hidden",children:c.jsx("img",{src:g.imageUrl,alt:g.title,className:"h-full w-full object-cover"})})}),c.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[c.jsx("div",{className:"text-sm font-medium text-gray-900",children:g.title}),c.jsx("div",{className:"text-sm text-gray-500 max-w-xs truncate",children:g.description})]}),c.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[c.jsx("div",{className:"text-sm text-gray-900",children:g.userDisplayName||"Unknown User"}),c.jsx("div",{className:"text-sm text-gray-500",children:g.userId})]}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:c.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${g.status==="approved"?"bg-green-100 text-green-800":g.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:g.status})}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("button",{onClick:()=>y(g.id,"approved"),disabled:g.status==="approved",className:`${g.status==="approved"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-green-50 text-green-700 hover:bg-green-100"} px-3 py-1 rounded-md text-sm`,children:"Approve"}),c.jsx("button",{onClick:()=>y(g.id,"rejected"),disabled:g.status==="rejected",className:`${g.status==="rejected"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-red-50 text-red-700 hover:bg-red-100"} px-3 py-1 rounded-md text-sm`,children:"Reject"}),c.jsx("button",{onClick:()=>y(g.id,"pending"),disabled:g.status==="pending",className:`${g.status==="pending"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-yellow-50 text-yellow-700 hover:bg-yellow-100"} px-3 py-1 rounded-md text-sm`,children:"Pending"})]})})]},g.id))})]})})]})})}function NS(){const{user:n}=At(),e=Ut(),[t,r]=k.useState([]),[s,i]=k.useState([]),[a,l]=k.useState(!0),[u,h]=k.useState(!1),[m,y]=k.useState(null),[g,x]=k.useState([]),[I,T]=k.useState(!0),_=s.filter(A=>A.currentPhase!=="completed"),V=s.filter(A=>A.currentPhase==="completed");return k.useEffect(()=>{(async()=>{console.log("Fetching tournaments for HomePage..."),l(!0);try{const j=await fP();i(j);const L=j.find(W=>W.currentPhase!=="completed")||j[0];if(L){console.log(`Fetching recent entries for showcase tournament ${L.id}...`);const H=(await lp(L.id)).sort((P,v)=>v.createdAt.toMillis()-P.createdAt.toMillis()).slice(0,3);x(H)}}catch(j){console.error("Error fetching tournaments:",j),y("Failed to load tournaments")}finally{l(!1),T(!1)}})()},[]),a?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):m?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 mb-6",children:c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex-shrink-0",children:c.jsx("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),c.jsx("div",{className:"ml-3",children:c.jsx("p",{className:"text-sm text-red-700",children:m})})]})}),c.jsx("button",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>window.location.reload(),children:"Refresh Page"})]}):c.jsxs("div",{className:"container mx-auto px-4 py-8",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h1",{className:"text-4xl font-extrabold text-gray-900 mb-4",children:"Welcome to Design Tournament"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Create tournaments, submit your best designs, and vote for your favorites."}),n&&c.jsx("div",{className:"mt-8",children:c.jsx("button",{onClick:()=>e("/create-tournament"),className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Create New Tournament"})})]}),g.length>0&&c.jsxs("div",{className:"mb-12",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Featured Designs"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:g.map(A=>{var j;return c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:[c.jsx("img",{src:A.imageUrl,alt:A.title,className:"w-full h-48 object-cover"}),c.jsxs("div",{className:"p-4",children:[c.jsx("h3",{className:"font-semibold text-lg mb-1",children:A.title}),c.jsxs("p",{className:"text-gray-600 text-sm mb-2",children:["By ",A.authorName||"Anonymous"]}),c.jsxs("p",{className:"text-gray-500 text-sm",children:[(j=A.description)==null?void 0:j.substring(0,100),"..."]})]})]},A.id)})})]}),c.jsxs("div",{className:"mb-12",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Active Tournaments"}),a?c.jsx("div",{className:"animate-pulse",children:[...Array(3)].map((A,j)=>c.jsx("div",{className:"bg-gray-200 h-32 rounded-lg mb-4"},j))}):m?c.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4",children:c.jsx("div",{className:"flex",children:c.jsx("div",{className:"ml-3",children:c.jsx("p",{className:"text-sm text-red-700",children:m})})})}):_.length===0?c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg p-6 text-center",children:[c.jsx("p",{className:"text-gray-600",children:"No active tournaments found."}),n&&c.jsx("button",{onClick:()=>e("/create-tournament"),className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Create Tournament"})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:_.map(A=>c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"p-5",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:A.name}),c.jsxs("div",{className:"flex space-x-1",children:[c.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${A.currentPhase==="submission"?"bg-blue-100 text-blue-800":A.currentPhase==="voting"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:A.currentPhase==="submission"?"Submission":A.currentPhase==="voting"?"Voting":"Completed"}),A.isPasswordProtected&&c.jsxs("span",{className:"px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 flex items-center",children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"Private"]})]})]}),c.jsx("p",{className:"mt-2 text-sm text-gray-600 line-clamp-2",children:A.description||"No description provided."}),c.jsxs("div",{className:"mt-4 text-sm text-gray-500 space-y-1",children:[A.currentPhase==="submission"&&c.jsxs("div",{children:[c.jsx("span",{children:"Submission ends: "}),c.jsx("span",{children:In(A.submissionPhaseEnd,"PPP")})]}),A.currentPhase==="voting"&&c.jsxs("div",{children:[c.jsx("span",{children:"Voting ends: "}),c.jsx("span",{children:In(A.votingPhaseEnd,"PPP")})]})]}),c.jsxs("div",{className:"mt-6 flex space-x-3",children:[A.currentPhase==="submission"&&c.jsx(ae,{to:`/tournament/${A.id}/submit`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Submit Design"}),A.currentPhase==="voting"&&c.jsx(ae,{to:`/tournament/${A.id}/vote`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Vote Now"}),c.jsx(ae,{to:`/tournament/${A.id}`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Details"}),A.ownerId===(n==null?void 0:n.id)&&c.jsx(ae,{to:`/admin/tournament/${A.id}/settings`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Manage"})]})]})},A.id))})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Closed Tournaments"}),a?c.jsx("div",{className:"animate-pulse",children:[...Array(2)].map((A,j)=>c.jsx("div",{className:"bg-gray-200 h-32 rounded-lg mb-4"},j))}):V.length===0?c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg p-6 text-center",children:c.jsx("p",{className:"text-gray-600",children:"No closed tournaments found."})}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:V.map(A=>c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"p-5",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:A.name}),c.jsxs("div",{className:"flex space-x-1",children:[c.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800",children:"Completed"}),A.isPasswordProtected&&c.jsxs("span",{className:"px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 flex items-center",children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"Private"]})]})]}),c.jsx("p",{className:"mt-2 text-sm text-gray-600 line-clamp-2",children:A.description||"No description provided."}),c.jsx("div",{className:"mt-4 text-sm text-gray-500 space-y-1",children:c.jsxs("div",{children:[c.jsx("span",{children:"Completed on: "}),c.jsx("span",{children:In(A.votingPhaseEnd,"PPP")})]})}),c.jsxs("div",{className:"mt-6 flex space-x-3",children:[c.jsx(ae,{to:`/tournament/${A.id}/results`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"View Results"}),c.jsx(ae,{to:`/tournament/${A.id}`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Details"}),A.ownerId===(n==null?void 0:n.id)&&c.jsx(ae,{to:`/admin/tournament/${A.id}/settings`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Manage"})]})]})},A.id))})]})]})}function CS(){var I,T,_,V;const{user:n}=At(),[e,t]=k.useState([]),[r,s]=k.useState(0),[i,a]=k.useState(null),[l,u]=k.useState(!0),[h,m]=k.useState(null);k.useEffect(()=>{n&&(g(),x(),y())},[n]);const y=async()=>{try{const A=await Yo();a(A)}catch(A){console.error("Error fetching tournament state:",A)}},g=async()=>{try{const A=ot(Se(J,"entries"),et("userId","==",n.id),Hs("createdAt","desc")),L=(await tt(A)).docs.map(W=>({id:W.id,...W.data()}));t(L)}catch(A){console.error("Error fetching user entries:",A),m(A.message||"Failed to load your submissions.")}finally{u(!1)}},x=async()=>{try{const A=ot(Se(J,"votes"),et("userId","==",n.id)),L=(await tt(A)).size;s(Math.max(0,10-L))}catch(A){console.error("Error fetching votes:",A)}};return l?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),h&&c.jsx("div",{className:"mt-4 rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:h})}),c.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2",children:[c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Tournament Status"}),i?c.jsxs("div",{children:[c.jsx("div",{className:"mb-4",children:c.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:i.currentPhase==="submission"?"Submission Phase":i.currentPhase==="voting"?"Voting Phase":"Completed"})}),i.currentPhase==="submission"&&c.jsxs("div",{className:"text-sm text-gray-500",children:[c.jsx("p",{className:"mb-1",children:"Submission deadline:"}),c.jsx("p",{className:"font-medium text-gray-900",children:_n(i.submissionPhaseEnd,{addSuffix:!0})})]}),i.currentPhase==="voting"&&c.jsxs("div",{className:"text-sm text-gray-500",children:[c.jsx("p",{className:"mb-1",children:"Voting ends:"}),c.jsx("p",{className:"font-medium text-gray-900",children:_n(i.votingPhaseEnd,{addSuffix:!0})}),c.jsx("p",{className:"mt-4 mb-1",children:"Your remaining votes:"}),c.jsxs("p",{className:"font-medium text-gray-900",children:[r," of 10"]})]}),c.jsxs("div",{className:"mt-6",children:[i.currentPhase==="submission"&&c.jsx(ae,{to:"/submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Submit a Design"}),i.currentPhase==="voting"&&c.jsx(ae,{to:"/vote",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Vote on Designs"}),i.currentPhase==="completed"&&c.jsx(ae,{to:"/winners",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"View Winners"})]})]}):c.jsx("p",{className:"text-gray-500",children:"Loading tournament information..."})]}),c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Your Profile"}),c.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[n!=null&&n.photoURL?c.jsx("img",{src:n.photoURL,alt:n.displayName||"User avatar",className:"h-16 w-16 rounded-full"}):c.jsx("div",{className:"h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center",children:c.jsx("span",{className:"text-2xl font-medium text-primary-600",children:((T=(I=n==null?void 0:n.displayName)==null?void 0:I[0])==null?void 0:T.toUpperCase())||((V=(_=n==null?void 0:n.email)==null?void 0:_[0])==null?void 0:V.toUpperCase())||"?"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-md font-medium text-gray-900",children:(n==null?void 0:n.displayName)||"User"}),c.jsx("p",{className:"text-sm text-gray-500",children:n==null?void 0:n.email})]})]}),c.jsx(ae,{to:"/profile",className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Full Profile"})]})]}),c.jsxs("div",{className:"mt-8",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Your Submissions"}),e.length>0?c.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:e.map(A=>c.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[c.jsxs("div",{className:"relative",children:[c.jsx("img",{src:A.imageUrl,alt:A.title,className:"w-full h-48 object-contain bg-gray-50"}),c.jsx("div",{className:`
                    absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full
                    ${A.status==="approved"?"bg-green-100 text-green-800":A.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}
                  `,children:A.status==="approved"?"Approved":A.status==="rejected"?"Rejected":"Pending"})]}),c.jsxs("div",{className:"p-4",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:A.title}),A.description&&c.jsx("p",{className:"mt-1 text-sm text-gray-500",children:A.description}),c.jsxs("div",{className:"mt-4 flex items-center justify-between text-sm",children:[c.jsxs("div",{className:"text-gray-500",children:["Submitted ",_n(A.createdAt.toDate(),{addSuffix:!0})]}),(i==null?void 0:i.currentPhase)!=="submission"&&A.status==="approved"&&c.jsxs("div",{className:"flex items-center",children:[c.jsx("svg",{className:"h-4 w-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),c.jsxs("span",{className:"ml-1 text-gray-600",children:[A.voteCount," votes"]})]})]})]})]},A.id))}):c.jsxs("div",{className:"bg-white shadow rounded-lg p-10 text-center",children:[c.jsx("p",{className:"text-gray-500",children:"You haven't submitted any designs yet."}),(i==null?void 0:i.currentPhase)==="submission"&&c.jsx("div",{className:"mt-4",children:c.jsx(ae,{to:"/submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Submit Your First Design"})})]})]})]})}function bh(){const{user:n,loading:e}=At(),{tournamentId:t}=vo(),r=Ut(),[s,i]=k.useState(""),[a,l]=k.useState(""),[u,h]=k.useState(null),[m,y]=k.useState(null),[g,x]=k.useState(!1),[I,T]=k.useState(0),[_,V]=k.useState(null),[A,j]=k.useState([]),[L,W]=k.useState(!0),[H,P]=k.useState(!1),[v,w]=k.useState(null),E=k.useRef(null),[S,N]=k.useState(!1),[b,z]=k.useState(!1),[de,he]=k.useState(!1),Ge=t;k.useEffect(()=>{if(!e&&!n){console.log("User not authenticated, redirecting to login"),r("/login");return}n&&(async()=>{W(!0);try{if(!Ge){y("Tournament ID is required");return}const ee=await hi(Ge);if(!ee){y("Tournament not found");return}if(V(ee),ee.currentPhase!=="submission"){y("This tournament is not currently accepting submissions");return}if(ee.isPasswordProtected){console.log("Tournament is password protected");const Wt=(n==null?void 0:n.id)===ee.ownerId;if(console.log("Is user owner?",Wt),!Wt){const Pt=localStorage.getItem(`tournament_access_${Ge}_${n==null?void 0:n.id}`);if(console.log("Has access from localStorage?",!!Pt),!Pt){console.log("Setting passwordRequired to true"),N(!0);return}}}if(z(!0),n!=null&&n.id){const Wt=await tP(Ge,n.id);j(Wt),ee.maxEntriesPerUser!==null&&Wt.length>=ee.maxEntriesPerUser&&he(!0)}}catch(ee){console.error("Error fetching tournament data:",ee),y(ee.message||"Failed to load tournament data")}finally{W(!1)}})()},[Ge,n]);const ht=()=>{N(!1),z(!0),(_==null?void 0:_.maxEntriesPerUser)!==null&&A.length>=_.maxEntriesPerUser&&he(!0)},Vn=async ye=>{if(ye.preventDefault(),!n){y("You must be logged in to submit a design");return}if(!_){y("Tournament data not available");return}if(!b){y("You do not have permission to submit to this tournament");return}if(_.currentPhase!=="submission"){y("This tournament is not currently accepting submissions");return}if(_.maxEntriesPerUser!==null&&A.length>=_.maxEntriesPerUser){y(`You have reached the maximum number of entries (${_.maxEntriesPerUser}) for this tournament`);return}if(!s.trim()){y("Please enter a title for your design");return}if(!u){y("Please upload an image of your design");return}try{y(null),x(!0),await aP({title:s,description:a.trim(),image:u,userId:n.id,tournamentId:_.id}),console.log("Design submitted successfully"),sn("design_submitted",{title:s,tournamentId:_.id}),r(`/tournament/${_.id}`)}catch(ee){console.error("Submit error:",ee),y(ee.message||"Failed to submit design. Please try again."),x(!1)}},hr=ye=>{if(ye.target.files&&ye.target.files[0]){const ee=ye.target.files[0];if(!ee.type.startsWith("image/")){y("Please upload an image file (JPEG, PNG, etc.)");return}if(ee.size>5*1024*1024){y("Image size must be less than 5MB");return}h(ee),y(null)}};if(L)return c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})});if(S&&!b&&_)return c.jsx(Jo,{tournamentId:_.id,tournamentName:_.name,onPasswordSuccess:ht});if(!_)return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsx("h1",{className:"text-xl font-bold text-red-600",children:"Tournament Not Available"}),c.jsx("p",{className:"text-gray-700 mt-2",children:m||"No tournament is available for submissions."}),c.jsx("button",{onClick:()=>r("/"),className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Return to Home"})]})});const Jr=(_==null?void 0:_.maxEntriesPerUser)===null?"Unlimited":(_==null?void 0:_.maxEntriesPerUser)-A.length;return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[c.jsx("div",{className:"md:col-span-1",children:c.jsxs("div",{className:"px-4 sm:px-0",children:[c.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Submit Your Design"}),c.jsxs("p",{className:"mt-1 text-sm text-gray-600",children:["Submit your design for ",(_==null?void 0:_.name)||"the current competition",". Please make sure your image clearly shows your concept."]}),_&&c.jsxs("div",{className:"mt-4",children:[c.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Tournament Details"}),c.jsxs("p",{className:"text-sm text-gray-600",children:["Submission Phase Ends: ",_.submissionPhaseEnd.toLocaleDateString()]}),c.jsxs("p",{className:"text-sm text-gray-600",children:["Your Entries: ",A.length," / ",_.maxEntriesPerUser===null?"∞":_.maxEntriesPerUser]}),c.jsxs("p",{className:"text-sm text-gray-600",children:["Remaining Entries: ",Jr]})]})]})}),c.jsx("div",{className:"mt-5 md:mt-0 md:col-span-2",children:c.jsx("form",{onSubmit:Vn,children:c.jsxs("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[c.jsxs("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:[m&&c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:m})}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),c.jsx("div",{className:"mt-1",children:c.jsx("input",{type:"text",id:"title",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:s,onChange:ye=>i(ye.target.value),required:!0,disabled:g||(_==null?void 0:_.maxEntriesPerUser)!==null&&A.length>=(_==null?void 0:_.maxEntriesPerUser)})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description (optional)"}),c.jsx("div",{className:"mt-1",children:c.jsx("textarea",{id:"description",rows:3,className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:a,onChange:ye=>l(ye.target.value),disabled:g||(_==null?void 0:_.maxEntriesPerUser)!==null&&A.length>=(_==null?void 0:_.maxEntriesPerUser)})})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Design Image"}),c.jsxs("div",{className:"mt-1 flex items-center",children:[c.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:()=>{var ye;return(ye=E.current)==null?void 0:ye.click()},disabled:g||(_==null?void 0:_.maxEntriesPerUser)!==null&&A.length>=(_==null?void 0:_.maxEntriesPerUser),children:"Choose file"}),c.jsx("input",{type:"file",ref:E,className:"hidden",accept:"image/*",onChange:hr,disabled:g||(_==null?void 0:_.maxEntriesPerUser)!==null&&A.length>=(_==null?void 0:_.maxEntriesPerUser)}),c.jsx("span",{className:"ml-2 text-sm text-gray-500",children:u?u.name:"No file chosen"})]}),u&&c.jsx("div",{className:"mt-2",children:c.jsx("img",{src:URL.createObjectURL(u),alt:"Preview",className:"h-40 object-contain"})})]}),g&&c.jsx("div",{children:c.jsxs("div",{className:"relative pt-1",children:[c.jsxs("div",{className:"flex mb-2 items-center justify-between",children:[c.jsx("div",{children:c.jsx("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200",children:I<100?"Uploading":"Processing"})}),c.jsx("div",{className:"text-right",children:c.jsxs("span",{className:"text-xs font-semibold inline-block text-primary-600",children:[Math.round(I),"%"]})})]}),c.jsx("div",{className:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200",children:c.jsx("div",{style:{width:`${I}%`},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500 transition-all duration-300"})})]})})]}),c.jsx("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:c.jsx("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",disabled:g||!u||!s.trim()||(_==null?void 0:_.maxEntriesPerUser)!==null&&A.length>=(_==null?void 0:_.maxEntriesPerUser),children:g?"Submitting...":"Submit"})})]})})})]})})}function kS({entryId:n,onVote:e,currentRating:t,tournamentState:r}){const[s,i]=Re.useState(null),[a,l]=Re.useState(!r),[u,h]=Re.useState(null),[m,y]=Re.useState("Rate this design:");if(Re.useEffect(()=>{if(r){console.log("Tournament state from props:",r),console.log("Voting question from props:",r.votingQuestion),i(r),r.votingQuestion&&y(r.votingQuestion),l(!1);return}(async()=>{try{const I=await Yo();console.log("Fetched tournament state:",I),console.log("Fetched voting question:",I==null?void 0:I.votingQuestion),i(I),I!=null&&I.votingQuestion&&y(I.votingQuestion)}catch(I){h("Failed to load tournament settings"),console.error("Error fetching tournament state:",I)}finally{l(!1)}})()},[r]),a)return c.jsx("div",{className:"animate-pulse",children:"Loading voting options..."});if(u)return c.jsx("div",{className:"text-red-500",children:u});const g=t!==void 0;return c.jsxs("div",{className:"space-y-4",children:[c.jsx("p",{className:"text-lg font-medium text-gray-900",children:m}),c.jsx("div",{className:"flex items-center space-x-4",children:[1,2,3,4,5].map(x=>c.jsx("button",{onClick:()=>!g&&e(x),disabled:g,className:`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors
              ${t===x?"bg-indigo-600 text-white":g?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,title:g?"You've already voted for this entry":`Rate this entry ${x}/5`,children:x},x))}),g&&c.jsx("p",{className:"text-sm text-gray-500",children:"You've already rated this entry"})]})}function Eh(){const{tournamentId:n}=vo(),{user:e}=At(),t=Ut(),[r,s]=Re.useState(null),[i,a]=Re.useState([]),[l,u]=Re.useState([]),[h,m]=Re.useState(0),[y,g]=Re.useState(null),[x,I]=Re.useState(!0),[T,_]=Re.useState(!1),[V,A]=Re.useState(!1),[j,L]=Re.useState(!1),[W,H]=Re.useState(!1),[P,v]=Re.useState(!0),w=n,E=async()=>{I(!0);try{if(!w){g("Tournament ID is required");return}const z=await hi(w);if(console.log("Tournament found:",z),!z){g("Tournament not found");return}if(s(z),z.currentPhase!=="voting"){g("This tournament is not currently in the voting phase");return}if(z.isPasswordProtected){console.log("Tournament is password protected");const de=(e==null?void 0:e.id)===z.ownerId;if(console.log("Is user owner?",de),!de){const he=localStorage.getItem(`tournament_access_${w}_${e==null?void 0:e.id}`);if(console.log("Has access from localStorage?",!!he),!he){console.log("Setting passwordRequired to true"),A(!0);return}}}L(!0),await S()}catch(z){console.error("Error fetching tournament data:",z),g(z.message||"Failed to load tournament data")}finally{I(!1)}},S=async()=>{try{v(!0);const z=await lp(w);if(console.log(`Found ${z.length} approved entries for tournament ${w}`),e!=null&&e.id){const he=await rP(w,e.id);console.log(`Found ${he.length} votes by user for tournament ${w}`),u(he),r&&r.maxVotesPerUser!==null&&he.length>=r.maxVotesPerUser&&H(!0)}const de=[...z].sort(()=>Math.random()-.5);a(de)}catch(z){console.error("Error loading entries and votes:",z),g(z.message||"Failed to load entries")}finally{v(!1)}};Re.useEffect(()=>{e&&E()},[w,e]);const N=async()=>{A(!1),L(!0),await S()},b=async(z,de)=>{if(!(e!=null&&e.id)){g("You must be logged in to vote");return}if(!r){g("Tournament data not available");return}try{if(l.some(he=>he.entryId===z)){g("You have already voted for this entry");return}if((r==null?void 0:r.maxVotesPerUser)!==null&&(r==null?void 0:r.maxVotesPerUser)!==void 0&&l.length>=r.maxVotesPerUser){g(`You have reached the maximum number of votes (${r.maxVotesPerUser})`);return}console.log(`Submitting vote: Entry ID ${z}, Rating ${de}, Tournament ID ${r.id}`),_(!0);try{await sP(z,de,r.id),console.log("Vote submitted successfully"),u(he=>[...he,{entryId:z,rating:de}]),console.log("Reloading data after vote..."),await E(),g(null)}catch(he){console.error("Error during vote submission:",he),g(`Failed to submit vote: ${he.message}`)}finally{_(!1)}}catch(he){g("Failed to submit vote"),console.error("Error submitting vote:",he)}};return x?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):V&&!j&&r?c.jsx(Jo,{tournamentId:r.id,tournamentName:r.name,onPasswordSuccess:N}):y||!r?c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-md p-4",children:[c.jsx("p",{className:"text-red-700",children:y||"Tournament data not available"}),c.jsx("button",{className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>t("/"),children:"Return to Home"})]})}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("h1",{className:"text-3xl font-bold mb-8",children:["Vote on Entries ",r!=null&&r.name?`- ${r.name}`:""]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Your Voting Status"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-gray-600",children:"Votes Cast:"}),c.jsx("p",{className:"text-2xl font-bold text-primary-600",children:l.length})]}),c.jsxs("div",{children:[c.jsx("p",{className:"text-gray-600",children:"Vote Limit:"}),c.jsx("p",{className:"text-2xl font-bold text-primary-600",children:(r==null?void 0:r.maxVotesPerUser)===null||(r==null?void 0:r.maxVotesPerUser)===void 0?"Unlimited":r.maxVotesPerUser})]})]}),c.jsx("div",{className:"mt-4 text-sm text-gray-500",children:c.jsxs("p",{children:["Voting Question: ",c.jsx("span",{className:"font-medium text-gray-900",children:(r==null?void 0:r.votingQuestion)||"How would you rate this entry?"})]})}),c.jsx("div",{className:"mt-4 text-sm text-gray-500",children:c.jsxs("p",{children:["Voting Ends: ",c.jsx("span",{className:"font-medium text-gray-900",children:r==null?void 0:r.votingPhaseEnd.toLocaleDateString()})]})})]}),i.length>0?c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(z=>{var de;return c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsx("div",{className:"aspect-w-16 aspect-h-9 mb-4",children:c.jsx("img",{src:z.imageUrl,alt:z.title,className:"object-cover rounded-lg"})}),c.jsx("h3",{className:"text-lg font-semibold mb-2",children:z.title}),c.jsx("p",{className:"text-gray-600 mb-4",children:z.description}),c.jsx("div",{className:"flex justify-between items-center mb-4",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),c.jsxs("span",{className:"ml-1 text-sm font-medium text-gray-800",children:[z.averageRating?z.averageRating.toFixed(1):"0.0"," (",z.voteCount||0," votes)"]})]})}),c.jsx(kS,{entryId:z.id,onVote:he=>b(z.id,he),currentRating:((de=l.find(he=>he.entryId===z.id))==null?void 0:de.rating)||0,tournamentState:r})]},z.id)})}):c.jsx("div",{className:"bg-white rounded-lg shadow-md p-6 text-center",children:c.jsx("p",{className:"text-gray-600",children:"No entries available for voting."})})]})}function Th(){var m;const[n,e]=k.useState([]),[t,r]=k.useState(!0),[s,i]=k.useState(null),[a,l]=k.useState("");k.useEffect(()=>{h(),u()},[]);const u=async()=>{try{const y=await Yo();y&&l(y.currentPhase)}catch(y){console.error("Error fetching tournament state:",y)}},h=async()=>{try{r(!0),i(null),console.log("Fetching winners...");const y=ot(Se(J,"entries"),Hs("averageRating","desc"),Hs("voteCount","desc"),yE(10)),x=(await tt(y)).docs.map(I=>{const T=I.data();return console.log(`Entry ${I.id}:`,T),{id:I.id,...T}});console.log("Winners data:",x),e(x)}catch(y){console.error("Error fetching winners:",y),i(y.message||"Failed to load winners. Please try again later.")}finally{r(!1)}};return t?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Competition Winners"}),a!=="completed"&&c.jsx("div",{className:"mt-4 rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto",children:c.jsx("div",{className:"text-sm text-yellow-700",children:a==="submission"?"The competition is still in the submission phase. Winners will be announced after voting is complete.":a==="voting"?"Voting is currently in progress. Final winners will be announced after the voting phase ends.":"The competition results are not yet finalized."})})]}),s&&c.jsx("div",{className:"rounded-md bg-red-50 p-4 max-w-3xl mx-auto mb-8",children:c.jsx("div",{className:"text-sm text-red-700",children:s})}),n.length>0?c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{className:"bg-gradient-to-r from-amber-100 to-yellow-100 shadow-xl rounded-lg overflow-hidden",children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold",children:"1st Place"}),c.jsx("img",{src:n[0].imageUrl,alt:n[0].title,className:"w-full h-96 object-contain bg-white"})]}),c.jsxs("div",{className:"p-6 text-center",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:n[0].title}),n[0].description&&c.jsx("p",{className:"mt-2 text-gray-600",children:n[0].description}),c.jsx("div",{className:"mt-4 flex items-center justify-center",children:c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"text-sm font-medium text-gray-500",children:"By"}),n[0].userPhotoURL?c.jsx("img",{src:n[0].userPhotoURL,alt:n[0].userDisplayName,className:"h-6 w-6 rounded-full"}):c.jsx("div",{className:"h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center",children:c.jsx("span",{className:"text-xs text-gray-600",children:((m=n[0].userDisplayName)==null?void 0:m[0])||"?"})}),c.jsx("span",{className:"text-sm font-medium text-gray-900",children:n[0].userDisplayName})]})}),c.jsx("div",{className:"mt-4 flex items-center justify-center space-x-4",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),c.jsxs("span",{className:"ml-1 text-sm font-medium text-gray-900",children:[(n[0].averageRating||0).toFixed(1)," (",n[0].voteCount||0," votes)"]})]})})]})]}),c.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:n.slice(1).map((y,g)=>c.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[c.jsxs("div",{className:"relative",children:[c.jsxs("div",{className:"absolute top-2 left-2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-bold",children:[g+2,DS(g+2)," Place"]}),c.jsx("img",{src:y.imageUrl,alt:y.title,className:"w-full h-48 object-contain bg-gray-50"})]}),c.jsxs("div",{className:"p-4",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:y.title}),c.jsxs("div",{className:"mt-2 flex items-center text-sm",children:[c.jsx("span",{className:"text-gray-500 mr-1",children:"By"}),c.jsx("span",{className:"font-medium text-gray-900",children:y.userDisplayName})]}),c.jsxs("div",{className:"mt-2 flex items-center",children:[c.jsx("svg",{className:"h-4 w-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),c.jsxs("span",{className:"ml-1 text-sm text-gray-600",children:[(y.averageRating||0).toFixed(1)," (",y.voteCount||0," votes)"]})]})]})]},y.id))})]}):c.jsx("div",{className:"text-center py-12",children:c.jsx("p",{className:"text-gray-500",children:"No entries found. Winners will be displayed after the voting phase is complete."})})]})}function DS(n){const e=n%10,t=n%100;return e===1&&t!==11?"st":e===2&&t!==12?"nd":e===3&&t!==13?"rd":"th"}const $a={async testLogin(n,e){console.log(`Attempting to login with email: ${n}`);try{const t=await ip(n,e);return console.log("Login result:",t),t}catch(t){throw console.error("Login error:",t),t}},async testRegister(n,e,t){console.log(`Attempting to register with email: ${n}${t?`, name: ${t}`:""}`);try{const r=await sp(n,e,t);return console.log("Registration result:",r),r}catch(r){throw console.error("Registration error:",r),r}},async testGoogleLogin(){console.log("Attempting to login with Google");try{const n=await op();return console.log("Google login result:",n),n}catch(n){throw console.error("Google login error:",n),n}}};function jS(){const{user:n}=At(),[e,t]=k.useState(""),[r,s]=k.useState(""),[i,a]=k.useState(""),[l,u]=k.useState(!1),[h,m]=k.useState(""),[y,g]=k.useState(""),[x,I]=k.useState(""),[T,_]=k.useState(""),[V,A]=k.useState(!1),[j,L]=k.useState(""),[W,H]=k.useState(!1),P=async()=>{if(!e||!r){a("Please enter both email and password");return}u(!0),a("");try{const E=await $a.testLogin(e,r);a(`Login successful! User: ${JSON.stringify(E,null,2)}`)}catch(E){a(`Login failed: ${E.message}`)}finally{u(!1)}},v=async()=>{if(!h||!y){_("Please enter email and password");return}A(!0),_("");try{const E=await $a.testRegister(h,y,x||void 0);_(`Registration successful! User: ${JSON.stringify(E,null,2)}`)}catch(E){_(`Registration failed: ${E.message}`)}finally{A(!1)}},w=async()=>{H(!0),L("");try{await $a.testGoogleLogin(),L("Google sign-in initiated. You should be redirected to Google for authentication.")}catch(E){L(`Google login failed: ${E.message}`)}finally{H(!1)}};return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Authentication Debug"}),n?c.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:[c.jsx("h2",{className:"text-lg font-medium text-green-700",children:"Logged In"}),c.jsx("pre",{className:"mt-2 text-sm text-gray-800 overflow-auto p-2 bg-gray-100 rounded",children:JSON.stringify(n,null,2)})]}):c.jsx("div",{className:"mb-4 p-4 bg-yellow-50 rounded-md",children:c.jsx("p",{className:"text-sm text-yellow-700",children:"Not logged in"})}),c.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:[c.jsxs("div",{className:"border rounded-lg p-4",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Login"}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-login-email",className:"block text-sm font-medium text-gray-700",children:"Email"}),c.jsx("input",{id:"debug-login-email",type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:e,onChange:E=>t(E.target.value)})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-login-password",className:"block text-sm font-medium text-gray-700",children:"Password"}),c.jsx("input",{id:"debug-login-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:r,onChange:E=>s(E.target.value)})]}),c.jsx("div",{children:c.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:P,disabled:l,children:l?"Testing...":"Test Login"})}),i&&c.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:c.jsx("pre",{children:i})})]})]}),c.jsxs("div",{className:"border rounded-lg p-4",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Registration"}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-register-email",className:"block text-sm font-medium text-gray-700",children:"Email"}),c.jsx("input",{id:"debug-register-email",type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:h,onChange:E=>m(E.target.value)})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-register-password",className:"block text-sm font-medium text-gray-700",children:"Password"}),c.jsx("input",{id:"debug-register-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:y,onChange:E=>g(E.target.value)})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-register-name",className:"block text-sm font-medium text-gray-700",children:"Display Name (optional)"}),c.jsx("input",{id:"debug-register-name",type:"text",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:x,onChange:E=>I(E.target.value)})]}),c.jsx("div",{children:c.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:v,disabled:V,children:V?"Testing...":"Test Registration"})}),T&&c.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:c.jsx("pre",{children:T})})]})]}),c.jsxs("div",{className:"border rounded-lg p-4",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Google Login"}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("div",{children:c.jsx("button",{type:"button",className:"w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:w,disabled:W,children:W?c.jsxs("span",{className:"flex items-center",children:[c.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing..."]}):c.jsxs("span",{className:"flex items-center",children:[c.jsxs("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}),c.jsx("path",{fill:"none",d:"M1 1h22v22H1z"})]}),"Sign in with Google"]})})}),j&&c.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:c.jsx("pre",{children:j})})]})]})]})]})})}function OS(){const{user:n}=di(),e=Ut(),[t,r]=k.useState(""),[s,i]=k.useState(7),[a,l]=k.useState(7),[u,h]=k.useState(null),[m,y]=k.useState(!1),[g,x]=k.useState(!1),I=async T=>{if(T.preventDefault(),!n){h("You must be logged in to create a tournament");return}if(!t.trim()){h("Tournament name is required");return}try{y(!0),h(null);const _=await lP(t,n.id,s,a);console.log("Tournament created:",_),x(!0),setTimeout(()=>{e(`/admin/tournament/${_.id}/settings`)},1500)}catch(_){console.error("Error creating tournament:",_),h(_.message||"Failed to create tournament")}finally{y(!1)}};return c.jsx("div",{className:"max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden",children:c.jsxs("div",{className:"px-6 py-4",children:[c.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Create New Tournament"}),u&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4",children:u}),g&&c.jsx("div",{className:"bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4",children:"Tournament created successfully! Redirecting to settings..."}),c.jsxs("form",{onSubmit:I,children:[c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"name",className:"block text-gray-700 font-medium mb-2",children:"Tournament Name"}),c.jsx("input",{type:"text",id:"name",value:t,onChange:T=>r(T.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"Enter tournament name",disabled:m||g})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"submissionDays",className:"block text-gray-700 font-medium mb-2",children:"Submission Phase Duration (days)"}),c.jsx("input",{type:"number",id:"submissionDays",value:s,onChange:T=>i(parseInt(T.target.value,10)),min:1,max:30,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",disabled:m||g})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"votingDays",className:"block text-gray-700 font-medium mb-2",children:"Voting Phase Duration (days)"}),c.jsx("input",{type:"number",id:"votingDays",value:a,onChange:T=>l(parseInt(T.target.value,10)),min:1,max:30,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",disabled:m||g})]}),c.jsx("div",{className:"mt-6",children:c.jsx("button",{type:"submit",className:"w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",disabled:m||g,children:m?"Creating...":"Create Tournament"})})]})]})})}function VS(){return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Create New Tournament"}),c.jsx("div",{className:"max-w-3xl mx-auto",children:c.jsx("div",{className:"bg-white shadow-md rounded-lg overflow-hidden",children:c.jsxs("div",{className:"px-6 py-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-6",children:"Tournament Details"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"Create your own tournament and invite participants to submit entries and vote. As the tournament creator, you'll have admin privileges to manage the tournament."}),c.jsx(OS,{})]})})})]})}function MS(){const{tournamentId:n}=vo(),e=n,{user:t}=At(),r=Ut(),[s,i]=k.useState(null),[a,l]=k.useState([]),[u,h]=k.useState(!0),[m,y]=k.useState(null),[g,x]=k.useState(!1),[I,T]=k.useState(!1);k.useEffect(()=>{e&&(async()=>{try{if(h(!0),!e){console.error("No tournament ID provided");return}const L=await hi(e);if(console.log("Tournament found:",L),!L){console.error("Tournament not found");return}if(i(L),L.isPasswordProtected){console.log("Tournament is password protected");const W=(t==null?void 0:t.id)===L.ownerId;if(console.log("Is user owner?",W),!W){const H=localStorage.getItem(`tournament_access_${e}_${t==null?void 0:t.id}`);if(console.log("Has access from localStorage?",!!H),!H){console.log("Setting passwordRequired to true"),x(!0);return}}}T(!0),L.currentPhase==="completed"?fetchResults():fetchEntries()}catch(L){console.error("Error fetching tournament:",L)}finally{h(!1)}})()},[e,t]);const _=()=>{x(!1),T(!0),(s==null?void 0:s.currentPhase)==="completed"?fetchResults():fetchEntries()};if(u)return c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})});if(m)return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 mb-6",children:c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex-shrink-0",children:c.jsx("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),c.jsx("div",{className:"ml-3",children:c.jsx("p",{className:"text-sm text-red-700",children:m})})]})}),c.jsx("button",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>r("/"),children:"Return to Home"})]});if(!s)return null;if(g&&!I)return c.jsx(Jo,{tournamentId:e,tournamentName:s.name,onPasswordSuccess:_});const A=(t==null?void 0:t.id)===s.ownerId||(t==null?void 0:t.isAdmin);return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:c.jsxs("div",{className:"px-4 py-5 sm:px-6 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:s.name}),c.jsxs("p",{className:"mt-1 text-sm text-gray-500",children:["Phase: ",s.currentPhase==="submission"?"Submission":s.currentPhase==="voting"?"Voting":"Completed"]})]}),s.isPasswordProtected&&c.jsxs("span",{className:"px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800 flex items-center",children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"Password Protected"]})]})}),c.jsxs("div",{className:"mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6",children:[c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg p-4 md:w-1/3",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Tournament Details"}),c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Current Phase: "}),c.jsx("span",{className:"text-sm font-medium capitalize",children:s.currentPhase})]}),s.currentPhase==="submission"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Submission Started: "}),c.jsx("span",{className:"text-sm font-medium",children:_n(s.submissionPhaseStart,{addSuffix:!0})})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Submission Ends: "}),c.jsx("span",{className:"text-sm font-medium",children:_n(s.submissionPhaseEnd,{addSuffix:!0})})]})]}),s.currentPhase==="voting"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Voting Started: "}),c.jsx("span",{className:"text-sm font-medium",children:_n(s.votingPhaseStart,{addSuffix:!0})})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Voting Ends: "}),c.jsx("span",{className:"text-sm font-medium",children:_n(s.votingPhaseEnd,{addSuffix:!0})})]})]}),s.maxEntriesPerUser!==null&&c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Max Entries Per User: "}),c.jsx("span",{className:"text-sm font-medium",children:s.maxEntriesPerUser})]}),s.maxVotesPerUser!==null&&c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Max Votes Per User: "}),c.jsx("span",{className:"text-sm font-medium",children:s.maxVotesPerUser})]})]}),c.jsxs("div",{className:"mt-6",children:[s.currentPhase==="submission"&&c.jsx(ae,{to:`/tournament/${s.id}/submit`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Submit Design"}),s.currentPhase==="voting"&&c.jsx(ae,{to:`/tournament/${s.id}/vote`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Vote Now"}),A&&c.jsx(ae,{to:`/admin/tournament/${s.id}/settings`,className:"ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Manage Tournament"})]})]}),c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg p-4 md:w-2/3",children:[c.jsxs("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:["Entries (",a.length,")"]}),a.length===0?c.jsx("p",{className:"text-sm text-gray-500",children:"No entries have been submitted yet."}):c.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:a.map(j=>c.jsxs("div",{className:"border border-gray-200 rounded-md p-3",children:[j.imageUrl&&c.jsx("img",{src:j.imageUrl,alt:j.title,className:"w-full h-32 object-cover rounded-md mb-2"}),c.jsx("h3",{className:"text-sm font-medium text-gray-900",children:j.title}),j.description&&c.jsx("p",{className:"mt-1 text-xs text-gray-500 line-clamp-2",children:j.description}),c.jsxs("div",{className:"mt-2 flex justify-between items-center text-xs text-gray-500",children:[c.jsxs("span",{children:[j.voteCount||0," votes"]}),c.jsx("span",{children:_n(j.createdAt instanceof Date?j.createdAt:j.createdAt.toDate(),{addSuffix:!0})})]})]},j.id))})]})]})]}),c.jsx(ae,{to:"/",className:"inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-primary-700 hover:text-primary-800",children:"← Back to tournaments"})]})}const LS=new Iy,Bn=({children:n})=>{const{user:e,loading:t}=At();return k.useEffect(()=>{!t&&!e&&console.log("User not authenticated in PrivateRoute, redirecting to login")},[e,t]),t?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?c.jsx(c.Fragment,{children:n}):c.jsx(Dh,{to:"/login"})},_s=({children:n})=>{const{user:e,loading:t}=At();return t?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?c.jsx(c.Fragment,{children:n}):c.jsx(Dh,{to:"/"})};function FS(){return k.useEffect(()=>{BA()},[]),c.jsx(RS,{children:c.jsx(Py,{client:LS,children:c.jsx(Qp,{basename:"/projectCP",children:c.jsx(Yp,{children:c.jsxs(we,{path:"/",element:c.jsx(QA,{}),children:[c.jsx(we,{index:!0,element:c.jsx(NS,{})}),c.jsx(we,{path:"login",element:c.jsx(YA,{})}),c.jsx(we,{path:"register",element:c.jsx(XA,{})}),c.jsx(we,{path:"reset-password",element:c.jsx(JA,{})}),c.jsx(we,{path:"winners",element:c.jsx(Th,{})}),c.jsx(we,{path:"debug-auth",element:c.jsx(jS,{})}),c.jsx(we,{path:"tournament/:tournamentId",element:c.jsx(MS,{})}),c.jsx(we,{path:"tournament/:tournamentId/submit",element:c.jsx(Bn,{children:c.jsx(bh,{})})}),c.jsx(we,{path:"tournament/:tournamentId/vote",element:c.jsx(Bn,{children:c.jsx(Eh,{})})}),c.jsx(we,{path:"tournament/:tournamentId/winners",element:c.jsx(Th,{})}),c.jsx(we,{path:"submit",element:c.jsx(Bn,{children:c.jsx(bh,{})})}),c.jsx(we,{path:"vote",element:c.jsx(Bn,{children:c.jsx(Eh,{})})}),c.jsx(we,{path:"profile",element:c.jsx(Bn,{children:c.jsx(ZA,{})})}),c.jsx(we,{path:"dashboard",element:c.jsx(Bn,{children:c.jsx(CS,{})})}),c.jsx(we,{path:"create-tournament",element:c.jsx(Bn,{children:c.jsx(VS,{})})}),c.jsx(we,{path:"admin",element:c.jsx(_s,{children:c.jsx(SS,{})})}),c.jsx(we,{path:"admin/entries",element:c.jsx(_s,{children:c.jsx(xh,{})})}),c.jsx(we,{path:"admin/settings",element:c.jsx(_s,{children:c.jsx(wh,{})})}),c.jsx(we,{path:"admin/tournament/:tournamentId/settings",element:c.jsx(_s,{children:c.jsx(wh,{})})}),c.jsx(we,{path:"admin/tournament/:tournamentId/entries",element:c.jsx(_s,{children:c.jsx(xh,{})})}),c.jsx(we,{path:"*",element:c.jsx("div",{children:"404 Not Found"})})]})})})})})}Vh(document.getElementById("root")).render(c.jsx(k.StrictMode,{children:c.jsx(FS,{})}));
//# sourceMappingURL=index-CPmGPbpr.js.map
